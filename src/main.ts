import {
  MarkdownView,
  Notice,
  Plugin,
  normalizePath,
} from "obsidian";

import { DEFAULT_SETTINGS, CameraEmbedSettings, CameraEmbedSettingTab } from "./settings.js";
import { compressImage } from "./compressor.js";
import { buildFileName, folderExists, getAvailablePath, joinPath } from "./file-utils.js";
import { pickImageFromCamera, pickImages } from "./input-utils.js";
import { PickerModal } from "./picker-modal.js";
import { GalleryModal } from "./gallery-modal.js";

export default class CameraEmbedPlugin extends Plugin {
  settings: CameraEmbedSettings;

  async onload() {
    await this.loadSettings();
    this.addSettingTab(new CameraEmbedSettingTab(this.app, this));

    this.addRibbonIcon("camera", "Capture photo", () => this.openPicker());

    this.addCommand({
      id: "capture-photo-embed",
      name: "Capture photo and embed",
      icon: "camera",
      callback: () => this.openPicker(),
    });
  }

  private openPicker() {
    if (this.settings.imagePicker) {
      new PickerModal(this.app, (result: "camera" | "gallery" | null) => {
        if (result) void this.captureAndEmbed(result);
      }).open();
    } else {
      void this.captureAndEmbed("camera");
    }
  }

  private async captureAndEmbed(source: "camera" | "gallery") {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view?.file) {
      new Notice("Please open a Markdown note to insert the photo.");
      return;
    }

    const files = await pickImages(source);
    if (files.length === 0) return;

    if (source === "gallery" && files.length > 1) {
      new GalleryModal(this.app, files, (selected) => {
        if (selected.length > 0) void this.saveAndEmbed(selected, view);
      }).open();
      return;
    }

    await this.saveAndEmbed(files, view);
  }

  private async saveAndEmbed(files: File[], view: MarkdownView) {
    const activeFile = view.file;
    if (!activeFile) return;

    const filePath = activeFile.parent?.path;
    const targetFolderPath = await this.ensureTargetFolder(filePath);
    if (targetFolderPath === null) return;

    const links: string[] = [];

    for (const file of files) {
      let finalFile: Blob | File = file;
      if (this.settings.compressImages) {
        finalFile = await compressImage(file, this.settings.compressQuality);
      }

      const arrayBuffer = await finalFile.arrayBuffer();
      const fileName = buildFileName(file);
      const targetPath = getAvailablePath(this.app.vault, joinPath(targetFolderPath, fileName));
      const created = await this.app.vault.createBinary(targetPath, arrayBuffer);
      const link = this.app.fileManager.generateMarkdownLink(created, activeFile.path);
      links.push(`!${link}`);
    }

    view.editor.replaceSelection(links.join("\n"));
  }

  private async ensureTargetFolder(noteFolderPath: string | undefined): Promise<string | null> {
    const rawPhotosFolder = this.settings.photosFolder.trim();
    const saveNear = this.settings.saveNearTheNote;

    if (saveNear) {
      const baseFolder = noteFolderPath ?? "";
      if (rawPhotosFolder === "") return baseFolder;

      const target = baseFolder ? `${baseFolder}/${rawPhotosFolder}` : rawPhotosFolder;
      const normalized = normalizePath(target);
      if (folderExists(this.app.vault, normalized)) return normalized;
      if (!this.settings.createFolderIfMissing) {
        new Notice(`Folder not found: ${normalized}`);
        return null;
      }

      try {
        await this.app.vault.createFolder(normalized);
        return normalized;
      } catch (error) {
        new Notice(`Failed to create folder: ${normalized}`);
        console.error(error);
        return null;
      }
    }

    if (rawPhotosFolder === "") return "";

    const normalized = normalizePath(rawPhotosFolder);
    if (folderExists(this.app.vault, normalized)) return normalized;
    if (!this.settings.createFolderIfMissing) {
      new Notice(`Folder not found: ${normalized}`);
      return null;
    }

    try {
      await this.app.vault.createFolder(normalized);
      return normalized;
    } catch (error) {
      new Notice(`Failed to create folder: ${normalized}`);
      console.error(error);
      return null;
    }
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData() as Partial<CameraEmbedSettings>);
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

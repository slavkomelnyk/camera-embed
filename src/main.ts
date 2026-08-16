import { MarkdownView, Notice, Plugin, TFile, normalizePath } from "obsidian";
import { DEFAULT_SETTINGS, CameraEmbedSettings, CameraEmbedSettingTab } from "./settings.js";
import { compressImage } from "./compressor.js";
import { buildFileName, folderExists, getAvailablePath, joinPath } from "./file-utils.js";
import { pickImages } from "./input-utils.js";
import { PickerModal } from "./picker-modal.js";
import { GalleryModal } from "./gallery-modal.js";

export default class CameraEmbedPlugin extends Plugin {
  settings: CameraEmbedSettings = DEFAULT_SETTINGS;

  async onload() {
    await this.loadSettings();
    this.normalizeGallerySettings();
    await this.saveSettings();
    this.addSettingTab(new CameraEmbedSettingTab(this.app, this));
    this.addRibbonIcon("camera", "Capture photo", () => this.openPicker());
    this.addCommand({ id: "capture-photo-embed", name: "Capture photo and embed", icon: "camera", callback: () => this.openPicker() });
    this.addCommand({ id: "open-gallery", name: "Open camera gallery", icon: "images", callback: () => this.openGallery() });
  }

  private normalizeGallerySettings() {
    if (this.settings.galleryEnabled) this.settings.saveNearTheNote = false;
  }

  private openPicker() {
    if (this.settings.galleryEnabled) {
      this.openGallery();
      return;
    }
    if (this.settings.imagePicker) {
      new PickerModal(this.app, (result: "camera" | "gallery" | null) => {
        if (result === "gallery") this.openGallery();
        else if (result === "camera") void this.captureFromCamera();
      }).open();
    } else {
      void this.captureFromCamera();
    }
  }

  private openGallery() {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view?.file) {
      new Notice("Open a Markdown note before using the camera gallery.");
      return;
    }
    const folder = this.settings.photosFolder.trim();
    if (!folder) {
      new Notice("Set a Photos folder in Camera Embed settings before using the gallery.");
      return;
    }
    new GalleryModal(this.app, (files) => {
      if (files.length > 0) void this.embedVaultFiles(files, view);
    }).open();
  }

  private async captureFromCamera() {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view?.file) {
      new Notice("Please open a Markdown note to insert the photo.");
      return;
    }
    const files = await pickImages("camera");
    if (files.length > 0) await this.saveAndEmbed(files, view);
  }

  private async embedVaultFiles(files: TFile[], view: MarkdownView) {
    const activeFile = view.file;
    if (!activeFile) return;
    const links = files.map((file) => `!${this.app.fileManager.generateMarkdownLink(file, activeFile.path)}`);
    view.editor.replaceSelection(links.join("\n"));
  }

  private async saveAndEmbed(files: File[], view: MarkdownView) {
    const activeFile = view.file;
    if (!activeFile) return;
    const targetFolderPath = await this.ensureTargetFolder(activeFile.parent?.path);
    if (targetFolderPath === null) return;

    const links: string[] = [];
    for (const file of files) {
      let finalFile: Blob | File = file;
      if (this.settings.compressImages) finalFile = await compressImage(file, this.settings.compressQuality);
      const targetPath = getAvailablePath(this.app.vault, joinPath(targetFolderPath, buildFileName(file)));
      const created = await this.app.vault.createBinary(targetPath, await finalFile.arrayBuffer());
      links.push(`!${this.app.fileManager.generateMarkdownLink(created, activeFile.path)}`);
    }
    view.editor.replaceSelection(links.join("\n"));
  }

  private async ensureTargetFolder(noteFolderPath: string | undefined): Promise<string | null> {
    const raw = this.settings.photosFolder.trim();
    // Gallery mode always uses one global Photos folder. It never stores
    // gallery/camera imports next to the current note.
    const target = this.settings.galleryEnabled
      ? raw
      : this.settings.saveNearTheNote
        ? (raw ? (noteFolderPath ? `${noteFolderPath}/${raw}` : raw) : (noteFolderPath ?? ""))
        : raw;
    const normalized = normalizePath(target);
    if (normalized === "") return "";
    if (folderExists(this.app.vault, normalized)) return normalized;
    if (!this.settings.createFolderIfMissing) {
      new Notice(`Folder not found: ${normalized}`);
      return null;
    }
    try {
      await this.app.vault.createFolder(normalized);
      return normalized;
    } catch (error) {
      console.error("Camera Embed: failed to create folder", error);
      new Notice(`Failed to create folder: ${normalized}`);
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

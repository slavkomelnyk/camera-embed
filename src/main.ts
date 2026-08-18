import { MarkdownView, Notice, Platform, Plugin, TFile, normalizePath } from "obsidian";
import { DEFAULT_SETTINGS, CameraEmbedSettings, CameraEmbedSettingTab } from "./settings.js";
import { compressImage } from "./compressor.js";
import { buildFileName, createFolderPath, folderExists, getAvailablePath, getMonthlyFolder, joinPath } from "./file-utils.js";
import { pickImages } from "./input-utils.js";
import { GalleryModal } from "./gallery-modal.js";
import { CameraGalleryView, GALLERY_VIEW_TYPE } from "./gallery-view.js";

export default class CameraEmbedPlugin extends Plugin {
  settings: CameraEmbedSettings = DEFAULT_SETTINGS;

  async onload() {
    await this.loadSettings();
    this.normalizeGallerySettings();
    await this.saveSettings();
    this.addSettingTab(new CameraEmbedSettingTab(this.app, this));

    const iconc = this.settings.galleryEnabled ? "images" : "camera";

    this.addRibbonIcon(iconc, "Capture photo", () => void this.capturePhoto());
    this.addCommand({ id: "capture-photo-embed", name: "Capture photo and embed", icon: iconc, callback: () => void this.capturePhoto() });
    if (Platform.isDesktop) {
      this.registerView(GALLERY_VIEW_TYPE, (leaf) => new CameraGalleryView(leaf, this));
      this.addCommand({ id: "open-camera-gallery-sidebar", name: "Open camera gallery in sidebar", icon: "images", callback: () => void this.openGallerySidebar() });
    }
  }

  private normalizeGallerySettings() {
    if (this.settings.galleryEnabled) this.settings.saveNearTheNote = false;
  }

  private capturePhoto() {
    if (this.settings.galleryEnabled && this.settings.openGalleryInSidebar && Platform.isDesktop) void this.openGallerySidebar();
    else if (this.settings.galleryEnabled) this.openGallery();
    else void this.captureDirectly();
  }

  private openGallery() {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view?.file) {
      new Notice("Open a Markdown note before using the camera gallery.");
      return;
    }
    const folder = this.settings.photosFolder.trim();
    if (!folder) {
      new Notice("Set a photos folder in camera embed settings before using the gallery.");
      return;
    }
    new GalleryModal(this.app, folder, this.settings.createFolderIfMissing, this.settings.organizePhotosByMonth, (files) => {
      if (files.length > 0) void this.embedVaultFiles(files, view);
    }).open();
  }

  private async captureDirectly() {
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

  embedGalleryFiles(files: TFile[]) {
    const leaf = this.app.workspace.getMostRecentLeaf();
    if (!(leaf?.view instanceof MarkdownView)) {
      new Notice("Open a Markdown note to insert the selected photos.");
      return;
    }
    void this.embedVaultFiles(files, leaf.view);
  }

  private async openGallerySidebar() {
    const leaf = await this.app.workspace.ensureSideLeaf(GALLERY_VIEW_TYPE, "right", { active: true, reveal: true });
    await this.app.workspace.revealLeaf(leaf);
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
    const target = this.settings.saveNearTheNote
      ? (raw ? (noteFolderPath ? `${noteFolderPath}/${raw}` : raw) : (noteFolderPath ?? ""))
      : raw;
    const normalized = normalizePath(this.settings.organizePhotosByMonth ? getMonthlyFolder(target) : target);
    if (normalized === "") return "";
    if (folderExists(this.app.vault, normalized)) return normalized;
    if (!this.settings.createFolderIfMissing) {
      new Notice(`Folder not found: ${normalized}`);
      return null;
    }
    try {
      await createFolderPath(this.app.vault, normalized);
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

  async saveSettings() { await this.saveData(this.settings); }

}

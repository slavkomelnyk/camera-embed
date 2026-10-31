import { MarkdownView, Notice, Platform, Plugin, TFile, WorkspaceLeaf, normalizePath } from "obsidian";
import { DEFAULT_SETTINGS, CameraEmbedSettings, CameraEmbedSettingTab } from "./settings.js";
import { compressImage, getCompressOptions } from "./compressor.js";
import { buildFileName, createFolderPath, folderExists, formatBytes, getAvailablePath, getMonthlyFolder, joinPath, withEmbedWidth } from "./file-utils.js";
import { pickImages, type PickSource } from "./input-utils.js";
import { GalleryModal } from "./gallery-modal.js";
import { PickerModal } from "./picker-modal.js";
import { CameraGalleryView, GALLERY_VIEW_TYPE } from "./gallery-view.js";

export default class CameraEmbedPlugin extends Plugin {
  settings: CameraEmbedSettings = { ...DEFAULT_SETTINGS };
  private lastMarkdownLeaf: WorkspaceLeaf | null = null;

  async onload() {
    await this.loadSettings();
    this.normalizeSettings();
    await this.saveSettings();
    this.addSettingTab(new CameraEmbedSettingTab(this.app, this));
    this.registerEvent(this.app.workspace.on("active-leaf-change", (leaf) => {
      if (leaf?.view instanceof MarkdownView) this.lastMarkdownLeaf = leaf;
    }));

    const iconc = this.settings.galleryEnabled ? "images" : "camera";

    this.addRibbonIcon(iconc, "Capture photo", () => void this.capturePhoto());
    this.addCommand({ id: "capture-photo-embed", name: "Capture photo and embed", icon: iconc, callback: () => void this.capturePhoto() });
    if (Platform.isDesktop) {
      this.registerView(GALLERY_VIEW_TYPE, (leaf) => new CameraGalleryView(leaf, this));
      this.addCommand({ id: "open-camera-gallery-sidebar", name: "Open camera gallery in sidebar", icon: "images", callback: () => void this.openGallerySidebar() });
    }
  }

  /** The note to insert into: the active note, else the last note you used, else any open note. */
  private getTargetMarkdownView(): MarkdownView | null {
    const workspace = this.app.workspace;

    const active = workspace.getActiveViewOfType(MarkdownView);
    if (active?.file) return active;

    const markdownLeaves = workspace.getLeavesOfType("markdown");

    const last = this.lastMarkdownLeaf;
    if (last && markdownLeaves.includes(last) && last.view instanceof MarkdownView && last.view.file) {
      return last.view;
    }

    const recent = workspace.getMostRecentLeaf();
    if (recent?.view instanceof MarkdownView && recent.view.file) return recent.view;

    for (const leaf of markdownLeaves) {
      if (leaf.view instanceof MarkdownView && leaf.view.file) return leaf.view;
    }
    return null;
  }

  private normalizeSettings() {
    // Gallery and image picker are mutually exclusive; gallery wins if both are set
    if (this.settings.galleryEnabled) {
      this.settings.imagePickerEnabled = false;
      this.settings.saveNearTheNote = false;
    }
    if (!this.settings.galleryEnabled) this.settings.openGalleryInSidebar = false;
  }

  private capturePhoto() {
    if (this.settings.galleryEnabled && this.settings.openGalleryInSidebar && Platform.isDesktop) {
      void this.openGallerySidebar();
    } else if (this.settings.galleryEnabled) {
      this.openGallery();
    } else if (this.settings.imagePickerEnabled) {
      this.openPicker();
    } else {
      void this.pickAndEmbed("camera");
    }
  }

  private openPicker() {
    // Check up front so the user isn't asked to pick a photo that can't be inserted
    if (!this.getTargetMarkdownView()) {
      new Notice("Please open a Markdown note to insert the photo.");
      return;
    }
    new PickerModal(this.app, (source) => {
      if (source === "camera") void this.pickAndEmbed("camera");
      else if (source === "gallery") void this.pickAndEmbed("gallery");
    }).open();
  }

    private openGallery() {
    if (!this.getTargetMarkdownView()) {
      new Notice("Open a Markdown note before using the camera gallery.");
      return;
    }
    if (!this.settings.photosFolder.trim()) {
      new Notice("Set a photos folder in camera embed settings before using the gallery.");
      return;
    }
    // The note is looked up again when you press "Use it", so it still works if you switched notes
    new GalleryModal(this.app, this, (files, width) => {
      if (files.length > 0) this.embedGalleryFiles(files, width);
    }).open();
  }

  private embedVaultFiles(files: TFile[], view: MarkdownView, width?: number) {
    const activeFile = view.file;
    if (!activeFile) return;
    if (view.getMode() !== "source") {
      new Notice("Switch the note to editing mode to insert photos.");
      return;
    }
    const links = files.map((file) => `!${withEmbedWidth(this.app.fileManager.generateMarkdownLink(file, activeFile.path), width)}`);
    view.editor.replaceSelection(links.join("\n"));
  }

  embedGalleryFiles(files: TFile[], width?: number) {
    const view = this.getTargetMarkdownView();
    if (!view) {
      new Notice("Open a Markdown note to insert the selected photos.");
      return;
    }
    this.embedVaultFiles(files, view, width);
  }

  private async pickAndEmbed(source: PickSource) {
    const view = this.getTargetMarkdownView();
    if (!view?.file) {
      new Notice("Please open a Markdown note to insert the photo.");
      return;
    }
    const files = await pickImages(source);
    if (files.length > 0) await this.saveAndEmbed(files, view);
  }


  async openGallerySidebar() {
    const leaf = await this.app.workspace.ensureSideLeaf(GALLERY_VIEW_TYPE, "right", { active: true, reveal: true });
    await this.app.workspace.revealLeaf(leaf);
  }

  private async saveAndEmbed(files: File[], view: MarkdownView) {
    const activeFile = view.file;
    if (!activeFile) return;
    const saved = await this.savePhotos(files, activeFile.parent?.path);
    if (saved.length === 0) return;
    const links = saved.map((file) => `!${this.app.fileManager.generateMarkdownLink(file, activeFile.path)}`);
    view.editor.replaceSelection(links.join("\n"));
  }

  /**
   * The single place where photos are written to the vault. Used by direct camera
   * capture, the image picker and gallery uploads, so folder, month organisation,
   * compression and file naming behave the same everywhere.
   *
   * @param noteFolderPath folder of the current note (only used by "save near the note")
   */
  async savePhotos(files: File[], noteFolderPath?: string): Promise<TFile[]> {
    const folder = await this.ensureTargetFolder(noteFolderPath);
    if (folder === null) return [];

    const options = this.settings.compressImages ? getCompressOptions(this.settings) : null;
    const progress = options && files.length > 1 ? new Notice(`Processing ${files.length} photos…`, 0) : null;

    const saved: TFile[] = [];
    let compressFailures = 0;
    let bytesBefore = 0;
    let bytesAfter = 0;

    try {
      for (const file of files) {
        let blob: Blob = file;
        if (options) {
          try {
            blob = await compressImage(file, options);
          } catch (error) {
            // One bad file must not abort the whole batch: keep the original.
            console.error("Camera Embed: compression failed for", file.name, error);
            compressFailures++;
            blob = file;
          }
        }

        try {
          const path = getAvailablePath(this.app.vault, joinPath(folder, buildFileName(file, blob)));
          saved.push(await this.app.vault.createBinary(path, await blob.arrayBuffer()));
          bytesBefore += file.size;
          bytesAfter += blob.size;
        } catch (error) {
          console.error("Camera Embed: failed to save", file.name, error);
          new Notice(`Could not save ${file.name}.`);
        }
      }
    } finally {
      progress?.hide();
    }

    if (compressFailures > 0) {
      new Notice(`Could not compress ${compressFailures} photo${compressFailures === 1 ? "" : "s"}; saved the original${compressFailures === 1 ? "" : "s"} instead.`);
    }
    if (options && saved.length > 0 && bytesAfter < bytesBefore) {
      new Notice(`Compressed ${formatBytes(bytesBefore)} → ${formatBytes(bytesAfter)}`);
    }
    return saved;
  }

  private async ensureTargetFolder(noteFolderPath: string | undefined): Promise<string | null> {
    const raw = this.settings.photosFolder.trim();
    const base = this.settings.saveNearTheNote
      ? (raw ? (noteFolderPath ? `${noteFolderPath}/${raw}` : raw) : (noteFolderPath ?? ""))
      : raw;
    const normalized = normalizePath(this.settings.organizePhotosByMonth ? getMonthlyFolder(base) : base);
    if (normalized === "" || normalized === "/") return "";
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

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
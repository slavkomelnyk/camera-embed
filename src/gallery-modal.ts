import { App, Modal, Notice, TFile, normalizePath, setIcon } from "obsidian";
import { buildFileName, folderExists, getAvailablePath, joinPath } from "./file-utils.js";
import { pickImages } from "./input-utils.js";

const IMAGE_EXTENSIONS = new Set(["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "avif"]);

export class GalleryModal extends Modal {
  private readonly onChoose: (files: TFile[]) => void;
  private readonly photosFolder: string;
  private readonly createFolderIfMissing: boolean;
  private items: TFile[] = [];
  private selected = new Set<string>();
  private grid!: HTMLElement;
  private selectionLabel!: HTMLElement;
  private status!: HTMLElement;
  private useButton!: HTMLButtonElement;
  private scanId = 0;

  constructor(app: App, photosFolder: string, createFolderIfMissing: boolean, onChoose: (files: TFile[]) => void) {
    super(app);
    this.photosFolder = normalizePath(photosFolder.trim()).replace(/^\/|\/$/g, "");
    this.createFolderIfMissing = createFolderIfMissing;
    this.onChoose = onChoose;
  }

  onOpen() {
    this.modalEl.addClass("camera-gallery-modal-container");
    const { contentEl } = this;
    contentEl.addClass("camera-gallery-modal");

    const header = contentEl.createDiv({ cls: "camera-gallery-header" });
    const title = header.createDiv({ cls: "camera-gallery-title" });
    setIcon(title, "images");
    title.createSpan({ text: "Gallery" });
    this.selectionLabel = header.createDiv({ cls: "camera-gallery-selection" });

    const toolbar = contentEl.createDiv({ cls: "camera-gallery-toolbar" });
    const take = toolbar.createEl("button", { cls: "mod-cta" });
    setIcon(take, "camera");
    take.createSpan({ text: "Take photo to gallery" });
    take.addEventListener("click", () => void this.takePhoto());
    const upload = toolbar.createEl("button");
    setIcon(upload, "upload");
    upload.createSpan({ text: "Upload to gallery" });
    upload.addEventListener("click", () => void this.uploadToGallery());

    this.status = contentEl.createDiv({ cls: "camera-gallery-status" });
    this.grid = contentEl.createDiv({ cls: "camera-gallery-grid" });

    const footer = contentEl.createDiv({ cls: "camera-gallery-footer" });
    footer.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.cancel());
    this.useButton = footer.createEl("button", { text: "Use It", cls: "mod-cta" });
    this.useButton.disabled = true;
    this.useButton.addEventListener("click", () => this.useSelected());
    void this.scanVault();
  }

  private async scanVault() {
    const currentScan = ++this.scanId;
    this.status.setText("Scanning vault…");
    const files = this.app.vault.getFiles()
      .filter((file) => IMAGE_EXTENSIONS.has(file.extension.toLowerCase()))
      .sort((a, b) => b.stat.mtime - a.stat.mtime);
    const paths = new Set(files.map((file) => file.path));
    this.selected.forEach((path) => { if (!paths.has(path)) this.selected.delete(path); });
    this.grid.empty();
    this.items = [];
    this.updateSelection();
    for (let index = 0; index < files.length; index++) {
      if (currentScan !== this.scanId) return;
      const file = files[index];
      if (!file) continue;
      this.items.push(file);
      this.createGalleryItem(file);
      if (index > 0 && index % 100 === 0) await new Promise<void>((resolve) => window.setTimeout(resolve, 0));
    }
    if (currentScan === this.scanId) this.status.setText(`${this.items.length.toLocaleString()} photos`);
  }

  private createGalleryItem(file: TFile): HTMLElement {
    const item = this.grid.createDiv({ cls: "camera-gallery-item" });
    item.dataset.path = file.path;
    const image = item.createEl("img", { cls: "camera-gallery-thumbnail" });
    image.src = this.app.vault.getResourcePath(file);
    image.alt = file.path;
    image.loading = "lazy";
    const badge = item.createDiv({ cls: "camera-gallery-badge" });
    item.createDiv({ cls: "camera-gallery-name", text: file.name });
    this.updateItemSelection(item, badge, file.path);
    item.addEventListener("click", () => {
      if (this.selected.has(file.path)) this.selected.delete(file.path);
      else this.selected.add(file.path);
      this.updateItemSelection(item, badge, file.path);
      this.updateSelection();
    });
    return item;
  }

  private addSavedFile(file: TFile) {
    if (!IMAGE_EXTENSIONS.has(file.extension.toLowerCase()) || this.items.some((item) => item.path === file.path)) return;
    this.items.unshift(file);
    this.grid.prepend(this.createGalleryItem(file));
    this.grid.scrollTop = 0;
    this.status.setText(`${this.items.length.toLocaleString()} photos`);
  }

  private updateItemSelection(item: HTMLElement, badge: HTMLElement, path: string) {
    const selected = this.selected.has(path);
    item.toggleClass("is-selected", selected);
    badge.textContent = selected ? String(this.getSelectionNumber(path)) : "";
  }

  private getSelectionNumber(path: string): number {
    let number = 0;
    for (const selectedPath of this.selected) {
      number++;
      if (selectedPath === path) return number;
    }
    return 0;
  }

  private updateSelection() {
    const count = this.selected.size;
    this.selectionLabel.setText(count === 0 ? "Select photos" : `${count} selected`);
    this.useButton.disabled = count === 0;
  }

  private useSelected() {
    const files = Array.from(this.selected)
      .map((path) => this.app.vault.getAbstractFileByPath(path))
      .filter((file): file is TFile => file instanceof TFile);
    if (!files.length) {
      new Notice("No selected photos are available.");
      return;
    }
    this.onChoose(files);
    this.close();
  }

  private async takePhoto() {
    const files = await pickImages("camera");
    if (!files.length || !this.isOpen) return;
    const saved = await this.saveToGallery(files[0]);
    if (saved && this.isOpen) this.addSavedFile(saved);
  }

  private async uploadToGallery() {
    const files = await pickImages("gallery");
    if (!files.length || !this.isOpen) return;
    for (const file of files) {
      const saved = await this.saveToGallery(file);
      if (saved && this.isOpen) this.addSavedFile(saved);
    }
  }

  /** Gallery uses the same filename/path helpers as the normal camera save flow. */
  private async saveToGallery(file: File): Promise<TFile | null> {
    if (!this.photosFolder) {
      new Notice("Set a Photos folder in Camera Embed settings first.");
      return null;
    }

    try {
      const folder = await this.ensurePhotosFolder();
      if (folder === null) return null;

      const targetPath = getAvailablePath(this.app.vault, joinPath(folder, buildFileName(file)));
      const created = await this.app.vault.createBinary(targetPath, await file.arrayBuffer());
      new Notice(`Added ${created.name} to gallery.`);
      return created;
    } catch (error) {
      console.error("Camera Embed: failed to save gallery photo", error);
      new Notice(`Failed to save ${file.name} to the gallery.`);
      return null;
    }
  }

  private async ensurePhotosFolder(): Promise<string | null> {
    if (folderExists(this.app.vault, this.photosFolder)) return this.photosFolder;
    if (!this.createFolderIfMissing) {
      new Notice(`Photos folder not found: ${this.photosFolder}`);
      return null;
    }

    try {
      // Obsidian may not create a nested path when its parent folders are absent.
      const parts = this.photosFolder.split("/").filter(Boolean);
      let current = "";
      for (const part of parts) {
        current = current ? `${current}/${part}` : part;
        if (!folderExists(this.app.vault, current)) {
          await this.app.vault.createFolder(current);
        }
      }
      if (!folderExists(this.app.vault, this.photosFolder)) {
        new Notice(`Failed to create Photos folder: ${this.photosFolder}`);
        return null;
      }
      return this.photosFolder;
    } catch (error) {
      console.error("Camera Embed: failed to create gallery folder", error);
      new Notice(`Failed to create Photos folder: ${this.photosFolder}`);
      return null;
    }
  }

  private cancel() {
    this.onChoose([]);
    this.close();
  }

  onClose() {
    this.scanId++;
    this.contentEl.empty();
  }
}

import { App, Modal, Notice, TFile, setIcon } from "obsidian";
import { createFolderPath, getMonthlyFolder } from "./file-utils.js";

const IMAGE_EXTENSIONS = new Set(["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "avif"]);

export class GalleryModal extends Modal {
  private readonly onChoose: (files: TFile[]) => void;
  private readonly photosFolder: string;
  private readonly createFolderIfMissing: boolean;
  private readonly organizePhotosByMonth: boolean;
  private readonly closeOnChoose: boolean;
  private items: TFile[] = [];
  private selected = new Set<string>();
  private grid!: HTMLElement;
  private selectionLabel!: HTMLElement;
  private status!: HTMLElement;
  private useButton!: HTMLButtonElement;
  private deleteButton!: HTMLButtonElement;
  private previewButton!: HTMLButtonElement;
  private scanId = 0;
  private opened = false;

  constructor(app: App, photosFolder: string, createFolderIfMissing: boolean, organizePhotosByMonth: boolean, onChoose: (files: TFile[]) => void, closeOnChoose = true) {
    super(app);
    this.photosFolder = photosFolder.trim();
    this.createFolderIfMissing = createFolderIfMissing;
    this.organizePhotosByMonth = organizePhotosByMonth;
    this.onChoose = onChoose;
    this.closeOnChoose = closeOnChoose;
  }

  mount(container: HTMLElement) {
    this.onOpen();
    container.appendChild(this.contentEl);
  }

  unmount() { this.onClose(); }

  onOpen() {
    this.opened = true;
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
    const upload = toolbar.createEl("button", { cls: "camera-gallery-upload" });
    setIcon(upload, "upload");
    upload.createSpan({ text: "Upload to gallery" });
    upload.addEventListener("click", () => void this.uploadToGallery());
    this.status = contentEl.createDiv({ cls: "camera-gallery-status" });
    this.grid = contentEl.createDiv({ cls: "camera-gallery-grid" });
    const footer = contentEl.createDiv({ cls: "camera-gallery-footer" });
    this.deleteButton = footer.createEl("button", { text: "Delete", cls: "camera-gallery-delete" });
    this.deleteButton.addEventListener("click", () => void this.deleteSelected());
    this.previewButton = footer.createEl("button", { text: "Preview", cls: "camera-gallery-preview" });
    this.previewButton.addEventListener("click", () => this.previewSelected());
    this.useButton = footer.createEl("button", { text: "Use it", cls: "mod-cta" });
    this.useButton.addEventListener("click", () => this.useSelected());
    this.setActionButtonsVisible(false);
    void this.scanVault();
  }

  private async scanVault() {
    const currentScan = ++this.scanId;
    this.status.setText("Scanning vault…");
    const files = this.app.vault.getFiles().filter((file) => IMAGE_EXTENSIONS.has(file.extension.toLowerCase())).sort((a, b) => b.stat.mtime - a.stat.mtime);
    const paths = new Set(files.map((file) => file.path));
    this.selected.forEach((path) => { if (!paths.has(path)) this.selected.delete(path); });
    this.grid.empty();
    this.items = [];
    this.updateSelection();
    for (let index = 0; index < files.length; index++) {
      if (currentScan !== this.scanId || !this.opened) return;
      const file = files[index];
      if (!file) continue;
      this.items.push(file);
      this.renderItem(file);
      if (index > 0 && index % 100 === 0) {
        this.status.setText(`Scanning… ${index.toLocaleString()} images`);
        await new Promise<void>((resolve) => window.setTimeout(resolve, 0));
      }
    }
    if (currentScan === this.scanId && this.opened) this.status.setText(`${this.items.length.toLocaleString()} photos`);
  }

  private renderItem(file: TFile) {
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
      if (this.selected.has(file.path)) this.selected.delete(file.path); else this.selected.add(file.path);
      this.updateItemSelection(item, badge, file.path);
      this.updateSelection();
    });
  }

  private addSavedFile(file: TFile) {
    if (!IMAGE_EXTENSIONS.has(file.extension.toLowerCase()) || this.items.some((item) => item.path === file.path)) return;
    this.items.unshift(file);
    this.renderItemAtTop(file);
    this.status.setText(`${this.items.length.toLocaleString()} photos`);
  }

  private renderItemAtTop(file: TFile) {
    const item = this.grid.createDiv({ cls: "camera-gallery-item" });
    item.dataset.path = file.path;
    const image = item.createEl("img", { cls: "camera-gallery-thumbnail" });
    image.src = this.app.vault.getResourcePath(file);
    image.alt = file.path;
    image.loading = "eager";
    const badge = item.createDiv({ cls: "camera-gallery-badge" });
    item.createDiv({ cls: "camera-gallery-name", text: file.name });
    this.updateItemSelection(item, badge, file.path);
    item.addEventListener("click", () => {
      if (this.selected.has(file.path)) this.selected.delete(file.path); else this.selected.add(file.path);
      this.updateItemSelection(item, badge, file.path);
      this.updateSelection();
    });
    this.grid.prepend(item);
  }

  private updateItemSelection(item: HTMLElement, badge: HTMLElement, path: string) {
    const selected = this.selected.has(path);
    item.toggleClass("is-selected", selected);
    badge.textContent = selected ? String(this.getSelectionNumber(path)) : "";
  }

  private getSelectionNumber(path: string): number {
    let number = 0;
    for (const selectedPath of this.selected) { number++; if (selectedPath === path) return number; }
    return 0;
  }

  private setActionButtonsVisible(visible: boolean) {
    this.useButton.toggleVisibility(visible);
    this.deleteButton.toggleVisibility(visible);
    this.previewButton.toggleVisibility(this.selected.size === 1);
  }

  private updateSelection() {
    const count = this.selected.size;
    this.selectionLabel.setText(count === 0 ? "Select photos" : `${count} selected`);
    this.setActionButtonsVisible(count > 0);
  }

  private useSelected() {
    const files: TFile[] = [];
    for (const path of this.selected) {
      const file = this.app.vault.getAbstractFileByPath(path);
      if (file instanceof TFile) files.push(file);
    }
    if (!files.length) return;
    this.onChoose(files);
    if (this.closeOnChoose) this.close();
  }

  private async deleteSelected() {
    const paths = Array.from(this.selected);
    if (!paths.length) return;
    await this.deleteFiles(paths);
  }

  private async deleteFiles(paths: string[]) {
    const confirmed = await this.confirmDelete(paths.length);
    if (!confirmed) return;
    let deleted = 0;
    for (const path of paths) {
      const file = this.app.vault.getAbstractFileByPath(path);
      if (!(file instanceof TFile)) continue;
      try {
        await this.app.fileManager.trashFile(file);
        deleted++;
      } catch (error) {
        console.error("Camera Embed: failed to delete gallery photo", path, error);
      }
    }
    this.selected.clear();
    if (deleted > 0) new Notice(`Deleted ${deleted} photo${deleted === 1 ? "" : "s"}.`);
    await this.scanVault();
  }

  private previewSelected() {
    const [path] = Array.from(this.selected);
    if (!path) return;
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof TFile)) return;
    new PhotoPreviewModal(this.app, file, () => void this.deleteFiles([file.path])).open();
  }

  private confirmDelete(count: number): Promise<boolean> {
    return new Promise((resolve) => {
      const modal = new Modal(this.app);
      let settled = false;
      const finish = (value: boolean) => {
        if (settled) return;
        settled = true;
        resolve(value);
        modal.close();
      };
      modal.titleEl.setText("Delete photos?");
      modal.contentEl.createEl("p", { text: `Move ${count} selected photo${count === 1 ? "" : "s"} to the Obsidian trash?` });
      const buttons = modal.contentEl.createDiv({ cls: "modal-button-container" });
      buttons.createEl("button", { text: "Cancel" }).addEventListener("click", () => finish(false));
      buttons.createEl("button", { text: "Delete", cls: "mod-warning" }).addEventListener("click", () => finish(true));
      modal.open();
    });
  }

  private async takePhoto() {
    const input = document.body.createEl("input", { cls: "camera-hidden", type: "file" });
    input.accept = "image/*";
    input.setAttribute("capture", "environment");
    input.addEventListener("change", () => { void this.handlePickedFiles(input, true); });
    input.click();
  }

  private async uploadToGallery() {
    if (!this.photosFolder) { new Notice("Set a photos folder in camera embed settings before uploading to the gallery."); return; }
    const input = document.body.createEl("input", { cls: "camera-hidden", type: "file" });
    input.accept = "image/*";
    input.multiple = true;
    input.addEventListener("change", () => { void this.handlePickedFiles(input, false); });
    input.click();
  }

  private async handlePickedFiles(input: HTMLInputElement, single: boolean) {
    const files = input.files ? Array.from(input.files).slice(0, single ? 1 : undefined) : [];
    input.remove();
    if (!files.length || !this.opened) return;
    const savedFiles: TFile[] = [];
    for (const file of files) { const saved = await this.saveToGallery(file, single); if (saved) savedFiles.push(saved); }
    if (!this.opened) return;
    for (const saved of savedFiles) this.addSavedFile(saved);
    if (savedFiles.length) void this.refreshInBackground();
  }

  private async refreshInBackground() {
    await new Promise<void>((resolve) => window.setTimeout(resolve, 250));
    if (this.opened) await this.scanVault();
  }

  private async saveToGallery(file: File, isCameraCapture: boolean): Promise<TFile | null> {
    if (!this.photosFolder) { new Notice("Set a photos folder in camera embed settings first."); return null; }
    try {
      const folder = this.organizePhotosByMonth && isCameraCapture ? getMonthlyFolder(this.photosFolder) : this.photosFolder;
      if (!this.app.vault.getAbstractFileByPath(folder)) {
        if (!this.createFolderIfMissing) { new Notice(`Photos folder not found: ${folder}`); return null; }
        await createFolderPath(this.app.vault, folder);
      }
      const path = this.getUniquePath(`${folder}/${file.name}`);
      const created = await this.app.vault.createBinary(path, await file.arrayBuffer());
      new Notice(`Added ${file.name} to gallery.`);
      return created;
    } catch (error) {
      console.error("Camera Embed: gallery save failed", error);
      new Notice(`Could not save ${file.name} to the gallery.`);
      return null;
    }
  }

  private getUniquePath(path: string): string {
    if (!this.app.vault.getAbstractFileByPath(path)) return path;
    const dot = path.lastIndexOf(".");
    const base = dot > 0 ? path.slice(0, dot) : path;
    const extension = dot > 0 ? path.slice(dot) : "";
    for (let counter = 2; counter < 10000; counter++) {
      const candidate = `${base} ${counter}${extension}`;
      if (!this.app.vault.getAbstractFileByPath(candidate)) return candidate;
    }
    return `${base} ${Date.now()}${extension}`;
  }

  onClose() { this.opened = false; this.scanId++; this.contentEl.empty(); }
}

class PhotoPreviewModal extends Modal {
  private readonly file: TFile;
  private readonly onDelete: () => void;

  constructor(app: App, file: TFile, onDelete: () => void) {
    super(app);
    this.file = file;
    this.onDelete = onDelete;
  }

  onOpen() {
    this.modalEl.addClass("camera-photo-preview-modal-container");
    this.titleEl.setText(this.file.name);
    const { contentEl } = this;
    contentEl.addClass("camera-photo-preview-modal");
    const image = contentEl.createEl("img", { cls: "camera-photo-preview-image" });
    image.src = this.app.vault.getResourcePath(this.file);
    image.alt = this.file.name;

    const usages = this.getUsages();
    contentEl.createEl("h3", { text: `Used in ${usages.length} note${usages.length === 1 ? "" : "s"}` });
    const usageList = contentEl.createDiv({ cls: "camera-photo-preview-usages" });
    if (usages.length === 0) usageList.setText("This photo is not linked from any note.");
    for (const usage of usages) {
      const button = usageList.createEl("button", { text: usage.path, cls: "camera-photo-preview-usage" });
      button.addEventListener("click", () => void this.app.workspace.openLinkText(usage.path, "", false));
    }

    const actions = contentEl.createDiv({ cls: "modal-button-container" });
    actions.createEl("button", { text: "Close" }).addEventListener("click", () => this.close());
    actions.createEl("button", { text: "Delete", cls: "mod-warning" }).addEventListener("click", () => {
      this.close();
      this.onDelete();
    });
  }

  private getUsages(): TFile[] {
    const resolvedLinks = this.app.metadataCache.resolvedLinks as unknown as Record<string, Record<string, number>>;
    const usages: TFile[] = [];
    for (const [path, targets] of Object.entries(resolvedLinks)) {
      if ((targets[this.file.path] ?? 0) <= 0) continue;
      const file: unknown = this.app.vault.getAbstractFileByPath(path);
      if (file instanceof TFile) usages.push(file);
    }
    return usages;
  }
}

import { App, Modal, Notice, TFile, setIcon } from "obsidian";

const IMAGE_EXTENSIONS = new Set(["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "avif"]);

export class GalleryModal extends Modal {
  private readonly onChoose: (files: TFile[]) => void;
  private readonly photosFolder: string;
  private items: TFile[] = [];
  private selected = new Set<string>();
  private grid!: HTMLElement;
  private selectionLabel!: HTMLElement;
  private status!: HTMLElement;
  private useButton!: HTMLButtonElement;
  private scanId = 0;

  constructor(app: App, photosFolder: string, onChoose: (files: TFile[]) => void) {
    super(app);
    this.photosFolder = photosFolder.trim();
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
    const upload = toolbar.createEl("button", { cls: "camera-gallery-upload" });
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
    this.grid.empty();
    this.items = [];
    this.selected.clear();
    this.updateSelection();
    const files = this.app.vault.getFiles()
      .filter((file) => IMAGE_EXTENSIONS.has(file.extension.toLowerCase()))
      .sort((a, b) => b.stat.mtime - a.stat.mtime);
    for (let index = 0; index < files.length; index++) {
      if (currentScan !== this.scanId) return;
      const file = files[index];
      if (!file) continue;
      this.items.push(file);
      this.renderItem(file);
      if (index > 0 && index % 100 === 0) {
        this.status.setText(`Scanning… ${index.toLocaleString()} images`);
        await new Promise<void>((resolve) => window.setTimeout(resolve, 0));
      }
    }
    this.status.setText(`${this.items.length.toLocaleString()} photos`);
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
    item.addEventListener("click", () => {
      if (this.selected.has(file.path)) this.selected.delete(file.path);
      else this.selected.add(file.path);
      this.updateItemSelection(item, badge, file.path);
      this.updateSelection();
    });
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
    const files: TFile[] = [];
    for (const path of this.selected) {
      const file = this.app.vault.getAbstractFileByPath(path);
      if (file instanceof TFile) files.push(file);
    }
    if (files.length === 0) {
      new Notice("No selected photos are available.");
      return;
    }
    this.onChoose(files);
    this.close();
  }

  private async uploadToGallery() {
    if (!this.photosFolder) {
      new Notice("Set a Photos folder in Camera Embed settings before uploading to the gallery.");
      return;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.className = "camera-hidden";
    input.addEventListener("change", async () => {
      const files = input.files ? Array.from(input.files) : [];
      input.remove();
      if (files.length === 0) return;
      this.status.setText(`Uploading ${files.length.toLocaleString()} photo${files.length === 1 ? "" : "s"}…`);
      try {
        await this.ensureFolder();
        for (const file of files) {
          await this.app.vault.createBinary(this.getUniquePath(`${this.photosFolder}/${file.name}`), await file.arrayBuffer());
        }
        new Notice(`${files.length.toLocaleString()} photo${files.length === 1 ? "" : "s"} added to ${this.photosFolder}.`);
        await this.scanVault();
      } catch (error) {
        console.error("Camera Embed: gallery upload failed", error);
        new Notice("Could not upload one or more photos to the gallery.");
        await this.scanVault();
      }
    });
    document.body.appendChild(input);
    input.click();
  }

  private async ensureFolder() {
    if (!this.app.vault.getAbstractFileByPath(this.photosFolder)) await this.app.vault.createFolder(this.photosFolder);
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

  private cancel() {
    this.onChoose([]);
    this.close();
  }

  onClose() {
    this.scanId++;
    this.contentEl.empty();
  }
}

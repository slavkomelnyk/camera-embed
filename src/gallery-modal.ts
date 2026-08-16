import { App, Modal, Notice, TFile, setIcon } from "obsidian";

type GalleryItem = {
  file: TFile;
  url: string;
};

export class GalleryModal extends Modal {
  private readonly initialFiles: File[];
  private readonly resolve: (files: File[]) => void;
  private items: GalleryItem[] = [];
  private selected = new Set<number>();
  private grid!: HTMLElement;
  private selectionLabel!: HTMLElement;
  private useButton!: HTMLButtonElement;
  private status!: HTMLElement;
  private objectUrls: string[] = [];

  constructor(app: App, files: File[], onChoose: (files: File[]) => void) {
    super(app);
    this.initialFiles = files;
    this.resolve = onChoose;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("camera-gallery-modal");

    const header = contentEl.createDiv({ cls: "camera-gallery-header" });
    const title = header.createDiv({ cls: "camera-gallery-title" });
    setIcon(title, "images");
    title.appendText("Gallery");
    this.selectionLabel = header.createDiv({ cls: "camera-gallery-selection" });

    const toolbar = contentEl.createDiv({ cls: "camera-gallery-toolbar" });
    const upload = toolbar.createEl("button", { text: "Upload to gallery" });
    setIcon(upload, "upload");
    upload.addEventListener("click", () => this.uploadToGallery());

    this.status = contentEl.createDiv({ cls: "camera-gallery-status" });
    this.grid = contentEl.createDiv({ cls: "camera-gallery-grid" });

    const footer = contentEl.createDiv({ cls: "camera-gallery-footer" });
    const cancel = footer.createEl("button", { text: "Cancel" });
    cancel.addEventListener("click", () => this.cancel());

    this.useButton = footer.createEl("button", { text: "Use It", cls: "mod-cta" });
    this.useButton.disabled = true;
    this.useButton.addEventListener("click", () => this.useSelected());

    void this.indexVault();
  }

  private async indexVault() {
    this.status.setText("Scanning vault…");
    this.grid.empty();
    this.items = [];
    this.selected.clear();

    const imageFiles = this.app.vault.getFiles().filter((file) => {
      const ext = file.extension.toLowerCase();
      return ["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "avif"].includes(ext);
    });

    imageFiles.sort((a, b) => b.stat.mtime - a.stat.mtime);

    for (const file of imageFiles) {
      const url = this.app.vault.getResourcePath(file);
      this.items.push({ file, url });
      this.renderItem(this.items.length - 1);
    }

    this.status.setText(`${this.items.length} photos in vault`);
    this.updateSelection();
  }

  private renderItem(index: number) {
    const galleryItem = this.items[index];
    if (!galleryItem) return;

    const item = this.grid.createDiv({ cls: "camera-gallery-item" });
    const image = item.createEl("img", { cls: "camera-gallery-thumbnail" });
    image.src = galleryItem.url;
    image.alt = galleryItem.file.path;
    image.loading = "lazy";

    const name = item.createDiv({ cls: "camera-gallery-name" });
    name.setText(galleryItem.file.name);

    const badge = item.createDiv({ cls: "camera-gallery-badge" });

    item.addEventListener("click", () => {
      if (this.selected.has(index)) this.selected.delete(index);
      else this.selected.add(index);

      item.toggleClass("is-selected", this.selected.has(index));
      badge.textContent = this.selected.has(index)
        ? String([...this.selected].indexOf(index) + 1)
        : "";
      this.updateSelection();
    });
  }

  private updateSelection() {
    const count = this.selected.size;
    this.selectionLabel.setText(count === 0 ? "No photos selected" : `${count} selected`);
    this.useButton.disabled = count === 0;
  }

  private useSelected() {
    const files: File[] = [];
    for (const index of this.selected) {
      const item = this.items[index];
      if (!item) continue;

      // Vault files are already inside Obsidian, so return a File-compatible
      // object without copying the image unnecessarily until the caller needs it.
      const blob = new File([new Blob()], item.file.name, { type: `image/${item.file.extension}` });
      files.push(blob);
    }

    // Use the actual vault files through the dedicated path below.
    void this.resolveVaultFiles();
  }

  private async resolveVaultFiles() {
    const files: File[] = [];
    for (const index of this.selected) {
      const item = this.items[index];
      if (!item) continue;
      const data = await this.app.vault.readBinary(item.file);
      files.push(new File([data], item.file.name, { type: this.mimeType(item.file.extension) }));
    }

    this.resolve(files);
    this.close();
  }

  private async uploadToGallery() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.addClass("camera-hidden");

    input.addEventListener("change", async () => {
      const files = input.files ? Array.from(input.files) : [];
      input.remove();
      if (files.length === 0) return;

      this.status.setText(`Adding ${files.length} photo${files.length === 1 ? "" : "s"}…`);
      const folder = ".camera-gallery";
      if (!this.app.vault.getAbstractFileByPath(folder)) {
        await this.app.vault.createFolder(folder);
      }

      for (const file of files) {
        const data = await file.arrayBuffer();
        const path = this.uniquePath(`${folder}/${file.name}`);
        await this.app.vault.createBinary(path, data);
      }

      new Notice(`${files.length} photo${files.length === 1 ? "" : "s"} added to gallery`);
      await this.indexVault();
    });

    document.body.appendChild(input);
    input.click();
  }

  private uniquePath(path: string): string {
    if (!this.app.vault.getAbstractFileByPath(path)) return path;
    const dot = path.lastIndexOf(".");
    const base = dot > 0 ? path.slice(0, dot) : path;
    const ext = dot > 0 ? path.slice(dot) : "";
    let counter = 2;
    while (this.app.vault.getAbstractFileByPath(`${base} ${counter}${ext}`)) counter++;
    return `${base} ${counter}${ext}`;
  }

  private mimeType(extension: string): string {
    const ext = extension.toLowerCase();
    if (ext === "jpg" || ext === "jpeg") return "image/jpeg";
    if (ext === "png") return "image/png";
    if (ext === "gif") return "image/gif";
    if (ext === "webp") return "image/webp";
    if (ext === "bmp") return "image/bmp";
    if (ext === "svg") return "image/svg+xml";
    if (ext === "avif") return "image/avif";
    return "application/octet-stream";
  }

  private cancel() {
    this.resolve([]);
    this.close();
  }

  onClose() {
    for (const url of this.objectUrls) URL.revokeObjectURL(url);
    this.objectUrls = [];
    this.contentEl.empty();
  }
}

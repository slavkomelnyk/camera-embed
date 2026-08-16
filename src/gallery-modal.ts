import { App, Modal, setIcon } from "obsidian";

export class GalleryModal extends Modal {
  private readonly files: File[];
  private readonly resolve: (files: File[]) => void;
  private selected = new Set<number>();
  private selectionLabel!: HTMLElement;
  private addButton!: HTMLButtonElement;

  constructor(app: App, files: File[], onChoose: (files: File[]) => void) {
    super(app);
    this.files = files;
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

    const grid = contentEl.createDiv({ cls: "camera-gallery-grid" });
    this.files.forEach((file, index) => this.renderItem(grid, file, index));

    const footer = contentEl.createDiv({ cls: "camera-gallery-footer" });
    const cancel = footer.createEl("button", { text: "Cancel" });
    cancel.addEventListener("click", () => {
      this.resolve([]);
      this.close();
    });

    this.addButton = footer.createEl("button", { text: "Add", cls: "mod-cta" });
    this.addButton.disabled = true;
    this.addButton.addEventListener("click", () => {
      const selected: File[] = [];
      for (const index of this.selected) {
        const file = this.files[index];
        if (file) selected.push(file);
      }
      this.resolve(selected);
      this.close();
    });

    this.updateSelection();
  }

  private renderItem(grid: HTMLElement, file: File, index: number) {
    const item = grid.createDiv({ cls: "camera-gallery-item" });
    const image = item.createEl("img", { cls: "camera-gallery-thumbnail" });
    image.alt = file.name;
    image.loading = "lazy";

    const url = URL.createObjectURL(file);
    image.src = url;

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
    this.addButton.disabled = count === 0;
  }

  onClose() {
    this.contentEl.empty();
  }
}

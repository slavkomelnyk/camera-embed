import { App, Modal } from "obsidian";

export class PickerModal extends Modal {
  private resolve: (value: "camera" | "gallery" | null) => void;

  constructor(app: App, onChoose: (source: "camera" | "gallery" | null) => void) {
    super(app);
    this.resolve = onChoose;
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.createEl("h2", { text: "Insert photo" });

    const buttonContainer = contentEl.createDiv({ cls: "picker-modal-buttons" });

    const cameraBtn = buttonContainer.createEl("button", {
      // eslint-disable-next-line obsidianmd/ui/sentence-case
      text: "📷 Take photo",
      cls: "mod-cta"
    });
    cameraBtn.addEventListener("click", () => {
      this.resolve("camera");
      this.close();
    });

    const galleryBtn = buttonContainer.createEl("button", {
      // eslint-disable-next-line obsidianmd/ui/sentence-case
      text: "🖼️ Choose from gallery"
    });
    galleryBtn.addEventListener("click", () => {
      this.resolve("gallery");
      this.close();
    });

    // Close on Escape
    this.scope.register([], "Escape", () => {
      this.resolve(null);
      this.close();
    });
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
}
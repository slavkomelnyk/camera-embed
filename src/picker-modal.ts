import { App, Modal, setIcon } from "obsidian";

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

    // Camera button
    const cameraBtn = buttonContainer.createEl("button", {
      cls: "mod-cta"
    });
    const cameraIcon = cameraBtn.createSpan();
    setIcon(cameraIcon, "camera");
    cameraBtn.appendText(" Take photo");

    cameraBtn.addEventListener("click", () => {
      this.resolve("camera");
      this.close();
    });

    // Gallery button
    const galleryBtn = buttonContainer.createEl("button");
    const galleryIcon = galleryBtn.createSpan();
    setIcon(galleryIcon, "images");
    galleryBtn.appendText(" Choose from gallery");

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
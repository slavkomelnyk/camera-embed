import { ItemView, TFile, WorkspaceLeaf } from "obsidian";
import { GalleryModal } from "./gallery-modal.js";
import type CameraEmbedPlugin from "./main.js";

export const GALLERY_VIEW_TYPE = "camera-embed-gallery";

export class CameraGalleryView extends ItemView {
  private readonly plugin: CameraEmbedPlugin;
  private gallery?: GalleryModal;

  constructor(leaf: WorkspaceLeaf, plugin: CameraEmbedPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType() { return GALLERY_VIEW_TYPE; }

  getDisplayText() { return "Camera gallery"; }

  getIcon() { return "images"; }

  async onOpen() {
    const folder = this.plugin.settings.photosFolder.trim();
    this.contentEl.empty();
    this.contentEl.addClass("camera-gallery-view");
    if (!folder) {
      this.contentEl.createEl("p", { text: "Set a photos folder in camera embed settings before using the gallery." });
      return;
    }
    this.gallery = new GalleryModal(
      this.app,
      this.plugin,
      (files, width) => this.useFiles(files, width),
      false,
    );
    this.gallery.mount(this.contentEl);
  }

  async onClose() { this.gallery?.unmount(); }

  private useFiles(files: TFile[], width?: number) {
    this.plugin.embedGalleryFiles(files, width);
  }
}
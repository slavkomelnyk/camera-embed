import { App, PluginSettingTab, Setting } from "obsidian";
import CameraEmbedPlugin from "./main.js";

export interface CameraEmbedSettings {
  photosFolder: string;
  createFolderIfMissing: boolean;
  saveNearTheNote: boolean;
  compressImages: boolean;
  compressQuality: number;
  galleryEnabled: boolean;
}

export const DEFAULT_SETTINGS: CameraEmbedSettings = {
  photosFolder: "",
  createFolderIfMissing: true,
  saveNearTheNote: false,
  compressImages: false,
  compressQuality: 0.8,
  galleryEnabled: false,
};

export class CameraEmbedSettingTab extends PluginSettingTab {
  plugin: CameraEmbedPlugin;
  constructor(app: App, plugin: CameraEmbedPlugin) { super(app, plugin); this.plugin = plugin; }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    new Setting(containerEl).setName("Platform support")
      .setDesc("This plugin is primarily designed for Android. Some features may be limited on other platforms.");

    new Setting(containerEl).setName("Save images").setHeading();
    new Setting(containerEl).setName("Photos folder")
      .setDesc("Vault-relative folder used for gallery photos and for camera photos when Save near the note is disabled.")
      .addText((text) => text.setPlaceholder("attachments/camera").setValue(this.plugin.settings.photosFolder)
        .onChange(async (value) => { this.plugin.settings.photosFolder = value.trim(); await this.plugin.saveSettings(); }));

    new Setting(containerEl).setName("Create folder if missing")
      .setDesc("Automatically create the Photos folder when it does not exist.")
      .addToggle((toggle) => toggle.setValue(this.plugin.settings.createFolderIfMissing)
        .onChange(async (value) => { this.plugin.settings.createFolderIfMissing = value; await this.plugin.saveSettings(); }));

    new Setting(containerEl).setName("Save near the note")
      .setDesc(this.plugin.settings.galleryEnabled
        ? "Disabled while Gallery is enabled. Gallery mode always uses Photos folder."
        : "Save camera photos beside the current note instead of the global Photos folder.")
      .addToggle((toggle) => toggle.setValue(this.plugin.settings.saveNearTheNote)
        .setDisabled(this.plugin.settings.galleryEnabled)
        .onChange(async (value) => {
          if (this.plugin.settings.galleryEnabled) return;
          this.plugin.settings.saveNearTheNote = value;
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl).setName("Gallery").setHeading();
    new Setting(containerEl).setName("Enable gallery")
      .setDesc("Adds the custom vault-wide gallery. When enabled, the camera button opens the gallery instead of directly taking a photo.")
      .addToggle((toggle) => toggle.setValue(this.plugin.settings.galleryEnabled)
        .onChange(async (value) => {
          this.plugin.settings.galleryEnabled = value;
          if (value) this.plugin.settings.saveNearTheNote = false;
          await this.plugin.saveSettings();
          this.display();
        }));

    if (this.plugin.settings.galleryEnabled && !this.plugin.settings.photosFolder.trim()) {
      containerEl.createDiv({ cls: "setting-item-description", text: "Set a Photos folder before using Gallery." });
    }

    new Setting(containerEl).setName("Image compression").setHeading();
    new Setting(containerEl).setName("Compress images")
      .setDesc("Reduce photo file sizes before saving camera captures.")
      .addToggle((toggle) => toggle.setValue(this.plugin.settings.compressImages)
        .onChange(async (value) => { this.plugin.settings.compressImages = value; await this.plugin.saveSettings(); }));
    new Setting(containerEl).setName("Compress quality")
      .setDesc("Lower values produce smaller files but lower image quality.")
      .addSlider((slider) => slider.setLimits(0, 0.9, 0.05).setValue(this.plugin.settings.compressQuality).setDynamicTooltip()
        .onChange(async (value) => { this.plugin.settings.compressQuality = value; await this.plugin.saveSettings(); }));
  }
}

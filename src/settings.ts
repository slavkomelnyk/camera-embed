import { App, PluginSettingTab, Setting } from "obsidian";
import CameraEmbedPlugin from "./main.js";

export interface CameraEmbedSettings {
  photosFolder: string;
  createFolderIfMissing: boolean;
  saveNearTheNote: boolean;
  compressImages: boolean;
  compressQuality: number;
  imagePicker: boolean;
  galleryEnabled: boolean;
}

export const DEFAULT_SETTINGS: CameraEmbedSettings = {
  photosFolder: "",
  createFolderIfMissing: true,
  saveNearTheNote: false,
  compressImages: false,
  compressQuality: 0.8,
  imagePicker: false,
  galleryEnabled: false,
};

export class CameraEmbedSettingTab extends PluginSettingTab {
  plugin: CameraEmbedPlugin;

  constructor(app: App, plugin: CameraEmbedPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName("Platform support")
      .setDesc("This plugin is primarily designed for Android. Some features may be limited or unavailable on iOS and desktop.");

    new Setting(containerEl).setName("Save images").setHeading();

    new Setting(containerEl)
      .setName("Photos folder")
      .setDesc("Vault-relative folder used by the gallery and camera imports when Save near the note is disabled.")
      .addText((text) => text
        .setPlaceholder("attachments/camera")
        .setValue(this.plugin.settings.photosFolder)
        .onChange(async (value) => {
          this.plugin.settings.photosFolder = value.trim();
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl)
      .setName("Create folder if missing")
      .setDesc("Automatically create the photos folder if it does not exist.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.createFolderIfMissing)
        .onChange(async (value) => {
          this.plugin.settings.createFolderIfMissing = value;
          await this.plugin.saveSettings();
        }));

    const saveNearSetting = new Setting(containerEl)
      .setName("Save near the note")
      .setDesc("Save camera photos beside the current note. This is disabled automatically when the gallery is enabled.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.saveNearTheNote)
        .setDisabled(this.plugin.settings.galleryEnabled)
        .onChange(async (value) => {
          if (this.plugin.settings.galleryEnabled) return;
          this.plugin.settings.saveNearTheNote = value;
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl)
      .setName("Gallery").setHeading();

    new Setting(containerEl)
      .setName("Enable gallery")
      .setDesc("Use the custom vault-wide photo gallery. When enabled, all imported photos are stored in Photos folder and Save near the note is disabled.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.galleryEnabled)
        .onChange(async (value) => {
          this.plugin.settings.galleryEnabled = value;
          if (value) this.plugin.settings.saveNearTheNote = false;
          await this.plugin.saveSettings();
          this.display();
        }));

    if (this.plugin.settings.galleryEnabled && !this.plugin.settings.photosFolder.trim()) {
      const warning = containerEl.createDiv({ cls: "setting-item-description" });
      warning.setText("Set a Photos folder above before using the gallery. A dedicated folder keeps the gallery predictable and avoids mixing gallery photos with note-local attachments.");
    }

    new Setting(containerEl).setName("Compress images").setHeading();

    new Setting(containerEl)
      .setName("Compress images")
      .setDesc("Reduce photo file sizes by compressing them before saving.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.compressImages)
        .onChange(async (value) => {
          this.plugin.settings.compressImages = value;
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl)
      .setName("Compress quality")
      .setDesc("Adjust the quality of compressed images. Lower values result in smaller files but worse quality.")
      .addSlider((slider) => slider
        .setLimits(0, 0.9, 0.05)
        .setValue(this.plugin.settings.compressQuality)
        .setDynamicTooltip()
        .onChange(async (value) => {
          this.plugin.settings.compressQuality = value;
          await this.plugin.saveSettings();
        }));

    new Setting(containerEl).setName("Picker").setHeading();

    new Setting(containerEl)
      .setName("Image picker")
      .setDesc("Show a prompt to choose between taking a new photo or opening the custom gallery.")
      .addToggle((toggle) => toggle
        .setValue(this.plugin.settings.imagePicker)
        .onChange(async (value) => {
          this.plugin.settings.imagePicker = value;
          await this.plugin.saveSettings();
        }));
  }
}

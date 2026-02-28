import {App, PluginSettingTab, Setting} from "obsidian";
import CameraEmbedPlugin from "./main";

export interface CameraEmbedSettings {
  photosFolder: string;
  createFolderIfMissing: boolean;
  saveNearTheNote: boolean;
  compressImages: boolean;
  compressQuality: number;
}

export const DEFAULT_SETTINGS: CameraEmbedSettings = {
  photosFolder: "",
  createFolderIfMissing: true,
  saveNearTheNote: false,
  compressImages: false,
  compressQuality: 0.8,
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
      .setName("Android only")
      .setDesc("This plugin is intended for Android and is not supported on iOS or desktop.");

    new Setting(containerEl).setName("Save images").setHeading();
    new Setting(containerEl)
      .setName("Photos folder")
      .setDesc(
        "Optional, use a vault-relative path like attachments/camera, leave blank to store next to the note."
      )
      .addText((text) =>
        text
          .setValue(this.plugin.settings.photosFolder)
          .onChange(async (value) => {
            this.plugin.settings.photosFolder = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Create folder if missing")
      .setDesc("Automatically create the photos folder if it does not exist.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.createFolderIfMissing)
          .onChange(async (value) => {
            this.plugin.settings.createFolderIfMissing = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Save near the note")
      .setDesc(
        "When enabled, photos will be saved in the same folder as the note, or inside a photos folder within that same directory."
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.saveNearTheNote)
          .onChange(async (value) => {
            this.plugin.settings.saveNearTheNote = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl).setName("Compress images").setHeading();

    new Setting(containerEl)
      .setName("Compress images")
      .setDesc("Reduce photo file sizes by compressing them before saving.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.compressImages)
          .onChange(async (value) => {
            this.plugin.settings.compressImages = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Compress quality")
      .setDesc("Adjust the quality of compressed images. Lower values result in smaller files but worse quality.")
      .addSlider(slider =>
        slider
          .setLimits(0, 0.9, 0.05) // min 0.1, max 1, step 0.05
          .setValue(this.plugin.settings.compressQuality)
          .onChange(async (value) => {
            this.plugin.settings.compressQuality = value;
            await this.plugin.saveSettings();
          })
      )

  }
}
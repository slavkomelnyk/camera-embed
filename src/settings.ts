import { App, Platform, PluginSettingTab, Setting } from "obsidian";
import CameraEmbedPlugin from "./main.js";

export interface CameraEmbedSettings {
  photosFolder: string;
  createFolderIfMissing: boolean;
  saveNearTheNote: boolean;
  compressImages: boolean;
  compressQuality: number;
  galleryEnabled: boolean;
  openGalleryInSidebar: boolean;
  organizePhotosByMonth: boolean;
}

export const DEFAULT_SETTINGS: CameraEmbedSettings = {
  photosFolder: "photos",
  createFolderIfMissing: true,
  saveNearTheNote: false,
  compressImages: false,
  compressQuality: 0.8,
  galleryEnabled: false,
  openGalleryInSidebar: false,
  organizePhotosByMonth: false,
};

type SettingsSection = "gallery" | "storage" | "compression";

export class CameraEmbedSettingTab extends PluginSettingTab {
  plugin: CameraEmbedPlugin;
  private activeSection: SettingsSection = "gallery";

  constructor(app: App, plugin: CameraEmbedPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.addClass("camera-settings");
    containerEl.createEl("p", { text: "This plugin is primarily designed for Android. Some features may be limited on other platforms." });

    const tabs = containerEl.createDiv({ cls: "camera-settings-tabs" });
    this.addTab(tabs, "gallery", "Gallery");
    this.addTab(tabs, "storage", "Photo storage");
    this.addTab(tabs, "compression", "Image compression");

    const content = containerEl.createDiv({ cls: "camera-settings-content" });
    if (this.activeSection === "gallery") this.displayGallery(content);
    else if (this.activeSection === "storage") this.displayStorage(content);
    else this.displayCompression(content);
  }

  private addTab(container: HTMLElement, section: SettingsSection, label: string) {
    const tab = container.createEl("button", { text: label, cls: "camera-settings-tab" });
    tab.toggleClass("is-active", this.activeSection === section);
    tab.addEventListener("click", () => {
      this.activeSection = section;
      this.display();
    });
  }

  private displayGallery(container: HTMLElement) {
    new Setting(container).setName("Enable gallery")
      .setDesc("Adds a custom vault-wide gallery. When enabled, the camera button opens the gallery instead of directly taking a photo.")
      .addToggle((toggle) => toggle.setValue(this.plugin.settings.galleryEnabled).onChange(async (value) => {
        this.plugin.settings.galleryEnabled = value;
        if (value) this.plugin.settings.saveNearTheNote = false;
        await this.plugin.saveSettings();
        this.display();
      }));

    new Setting(container).setName("Open gallery in sidebar")
      .setDesc("Open gallery in the right sidebar when using the camera button. Available on desktop only.")
      .addToggle((toggle) => toggle.setValue(this.plugin.settings.openGalleryInSidebar)
        .setDisabled(!this.plugin.settings.galleryEnabled || !Platform.isDesktop)
        .onChange(async (value) => { this.plugin.settings.openGalleryInSidebar = value; await this.plugin.saveSettings(); }));
  }

  private displayStorage(container: HTMLElement) {
    new Setting(container).setName("Photos folder")
      .setDesc("Vault-relative folder used for gallery photos and camera photos when save near the note is disabled.")
      .addText((text) => text.setPlaceholder("Photos folder").setValue(this.plugin.settings.photosFolder)
        .onChange(async (value) => { this.plugin.settings.photosFolder = value.trim(); await this.plugin.saveSettings(); }));

    new Setting(container).setName("Organize photos by month")
      .setDesc("Save new camera captures in year and month folders, for example photos/2026/08/.")
      .addToggle((toggle) => toggle.setValue(this.plugin.settings.organizePhotosByMonth)
        .onChange(async (value) => { this.plugin.settings.organizePhotosByMonth = value; await this.plugin.saveSettings(); }));

    new Setting(container).setName("Create folder if missing")
      .setDesc("Automatically create the photos folder when it does not exist.")
      .addToggle((toggle) => toggle.setValue(this.plugin.settings.createFolderIfMissing)
        .onChange(async (value) => { this.plugin.settings.createFolderIfMissing = value; await this.plugin.saveSettings(); }));

    new Setting(container).setName("Save near the note")
      .setDesc(this.plugin.settings.galleryEnabled
        ? "Disabled while gallery is enabled. Gallery mode always uses the photos folder."
        : "Save camera photos beside the current note instead of the global photos folder.")
      .addToggle((toggle) => toggle.setValue(this.plugin.settings.saveNearTheNote).setDisabled(this.plugin.settings.galleryEnabled)
        .onChange(async (value) => {
          if (this.plugin.settings.galleryEnabled) return;
          this.plugin.settings.saveNearTheNote = value;
          await this.plugin.saveSettings();
        }));
  }

  private displayCompression(container: HTMLElement) {
    new Setting(container).setName("Compress images")
      .setDesc("Reduce photo file sizes before saving camera captures.")
      .addToggle((toggle) => toggle.setValue(this.plugin.settings.compressImages)
        .onChange(async (value) => { this.plugin.settings.compressImages = value; await this.plugin.saveSettings(); }));

    new Setting(container).setName("Compress quality")
      .setDesc("Lower values produce smaller files but lower image quality.")
      .addSlider((slider) => slider.setLimits(0, 0.9, 0.05).setValue(this.plugin.settings.compressQuality).setDynamicTooltip()
        .onChange(async (value) => { this.plugin.settings.compressQuality = value; await this.plugin.saveSettings(); }));
  }
}

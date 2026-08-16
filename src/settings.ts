import { App, PluginSettingTab } from "obsidian";
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

  constructor(app: App, plugin: CameraEmbedPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    // Settings are rendered by Obsidian's declarative settings API through getSettingDefinitions().
  }

  getSettingDefinitions() {
    return [
      {
        name: "Platform support",
        desc: "This plugin is primarily designed for Android. Some features may be limited on other platforms.",
        control: { type: "info" as const },
      },
      {
        name: "Photos folder",
        desc: "Vault-relative folder used for gallery photos and camera photos when Save near the note is disabled.",
        control: {
          type: "text" as const,
          key: "photosFolder" as const,
          placeholder: "attachments/camera",
        },
      },
      {
        name: "Create folder if missing",
        desc: "Automatically create the Photos folder when it does not exist.",
        control: { type: "toggle" as const, key: "createFolderIfMissing" as const },
      },
      {
        name: "Save near the note",
        desc: "Save camera photos beside the current note instead of the global Photos folder.",
        control: {
          type: "toggle" as const,
          key: "saveNearTheNote" as const,
          disabled: () => this.plugin.settings.galleryEnabled,
        },
      },
      {
        name: "Enable gallery",
        desc: "Adds the custom vault-wide gallery. When enabled, the camera button opens the gallery instead of directly taking a photo.",
        control: { type: "toggle" as const, key: "galleryEnabled" as const },
      },
      {
        name: "Compress images",
        desc: "Reduce photo file sizes before saving camera captures.",
        control: { type: "toggle" as const, key: "compressImages" as const },
      },
      {
        name: "Compress quality",
        desc: "Lower values produce smaller files but lower image quality.",
        control: {
          type: "slider" as const,
          key: "compressQuality" as const,
          min: 0,
          max: 0.9,
          step: 0.05,
        },
      },
    ];
  }
}

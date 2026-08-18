import {App, Platform, PluginSettingTab} from "obsidian";
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

export class CameraEmbedSettingTab extends PluginSettingTab {
  plugin: CameraEmbedPlugin;

  constructor(app: App, plugin: CameraEmbedPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  getSettingDefinitions() {
    return [
      {
        name: "This plugin is primarily designed for Android. Some features may be limited on other platforms.",
      },

      {
        type: "group" as const,
        heading: "Gallery",
        items: [
          {
            name: "Enable gallery",
            desc: "Use the gallery instead of taking a photo directly.",
            control: {
              type: "toggle" as const,
              key: "galleryEnabled",
            },
          },
          {
            name: "Open gallery in sidebar",
            desc: "Open the gallery in the right sidebar when using the camera button.",
            visible: () => this.plugin.settings.galleryEnabled && !Platform.isMobile,
            control: {
              type: "toggle" as const,
              key: "openGalleryInSidebar",
            },
          },
        ],
      },

      {
        type: "group" as const,
        heading: "Photo storage",
        items: [
          {
            name: "Photos folder",
            desc: "Folder used to store photos.",
            control: {
              type: "text" as const,
              key: "photosFolder",
              placeholder: "photos",
            },
          },
          {
            name: "Organize photos by month",
            desc: "Save photos in year and month folders.",
            control: {
              type: "toggle" as const,
              key: "organizePhotosByMonth",
            },
          },
          {
            name: "Create folder if missing",
            desc: "Create the photos folder automatically when needed.",
            control: {
              type: "toggle" as const,
              key: "createFolderIfMissing",
            },
          },
          {
            name: "Save near the note",
            desc: "Save camera photos beside the current note.",
            visible: () => !this.plugin.settings.galleryEnabled,
            control: {
              type: "toggle" as const,
              key: "saveNearTheNote",
            },
          },
        ],
      },

      {
        type: "group" as const,
        heading: "Image compression",
        items: [
          {
            name: "Compress images",
            desc: "Reduce photo file sizes before saving.",
            control: {
              type: "toggle" as const,
              key: "compressImages",
            },
          },
          {
            name: "Compression quality",
            desc: "Lower values create smaller files with lower image quality.",
            visible: () => this.plugin.settings.compressImages,
            control: {
              type: "slider" as const,
              key: "compressQuality",
              min: 0,
              max: 0.9,
              step: 0.05,
            },
          },
        ],
      },
    ];
  }
}
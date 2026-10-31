import { App, Platform, PluginSettingTab, type SettingDefinitionItem } from "obsidian";
import type CameraEmbedPlugin from "./main.js";

export type CompressionMode = "minimal" | "expert";
export type CompressionPreset = "light" | "balanced" | "strong";
export type CompressFormat = "auto" | "original" | "jpeg" | "webp";
export type GallerySort = "newest" | "oldest" | "name" | "size";
export type GalleryScope = "folder" | "vault";

export interface CameraEmbedSettings {
  photosFolder: string;
  createFolderIfMissing: boolean;
  saveNearTheNote: boolean;
  organizePhotosByMonth: boolean;

  galleryEnabled: boolean;
  openGalleryInSidebar: boolean;
  imagePickerEnabled: boolean;

  compressImages: boolean;
  compressionMode: CompressionMode;
  compressionPreset: CompressionPreset;
  // Expert mode
  compressQuality: number;
  compressMaxDimension: number; // longest side in px, 0 = keep original size
  compressFormat: CompressFormat;
  compressKeepExif: boolean;
  compressMinSizeKB: number; // skip files smaller than this

  gallerySort: GallerySort;
  galleryScope: GalleryScope;
  galleryGroupByMonth: boolean;
  galleryThumbSize: number; // px, 0 = automatic
}

export const DEFAULT_SETTINGS: CameraEmbedSettings = {
  photosFolder: "photos",
  createFolderIfMissing: true,
  saveNearTheNote: false,
  organizePhotosByMonth: false,

  galleryEnabled: false,
  openGalleryInSidebar: false,
  imagePickerEnabled: false,

  compressImages: false,
  compressionMode: "minimal",
  compressionPreset: "balanced",
  compressQuality: 0.8,
  compressMaxDimension: 2048,
  compressFormat: "auto",
  compressKeepExif: false,
  compressMinSizeKB: 0,

  gallerySort: "newest",
  galleryScope: "folder",
  galleryGroupByMonth: true,
  galleryThumbSize: 0,
};

export class CameraEmbedSettingTab extends PluginSettingTab {
  plugin: CameraEmbedPlugin;

  constructor(app: App, plugin: CameraEmbedPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  /** Obsidian 1.13+ renders from this. */
  getSettingDefinitions(): SettingDefinitionItem[] {
    const s = () => this.plugin.settings;
    const expert = () => s().compressImages && s().compressionMode === "expert";
    const minimal = () => s().compressImages && s().compressionMode === "minimal";

    return [
      {
        name: "This plugin is primarily designed for Android. Some features may be limited on other platforms.",
      },

      {
        type: "group",
        heading: "Choose photo",
        items: [
          {
            name: "Enable image picker (optional)",
            desc: "Show a prompt to choose between taking a new photo or picking an existing one from the gallery.",
            control: {
              type: "toggle",
              key: "imagePickerEnabled",
              // Locked while gallery is on, unless this one is already on (so it can be turned off)
              disabled: () => s().galleryEnabled && !s().imagePickerEnabled,
            },
          },
          {
            name: "Enable gallery (optional)",
            desc: "Use the gallery instead of taking a photo directly. The gallery shows the images in your photos folder.",
            control: {
              type: "toggle",
              key: "galleryEnabled",
              // Locked while image picker is on, unless this one is already on
              disabled: () => s().imagePickerEnabled && !s().galleryEnabled,
            },
          },
          {
            name: "Open gallery in sidebar",
            desc: "Open the gallery in the right sidebar when using the camera button.",
            visible: () => s().galleryEnabled && !Platform.isMobile,
            control: {
              type: "toggle",
              key: "openGalleryInSidebar",
            },
          },
        ],
      },

      {
        type: "group",
        heading: "Gallery",
        visible: () => s().galleryEnabled,
        items: [
          {
            name: "Default sort",
            desc: "How photos are ordered when the gallery opens. You can also change this inside the gallery.",
            control: {
              type: "dropdown",
              key: "gallerySort",
              options: { newest: "Newest first", oldest: "Oldest first", name: "Name", size: "Largest first" },
            },
          },
          {
            name: "Show",
            desc: "Photos folder: only the images in your photos folder are read. Whole vault: lists every image in the vault, which is needed to see photos saved next to notes.",
            control: {
              type: "dropdown",
              key: "galleryScope",
              options: { folder: "Photos folder only", vault: "Whole vault" },
            },
          },
          {
            name: "Group by month",
            desc: "Add month headings (only when sorted by date).",
            control: {
              type: "toggle",
              key: "galleryGroupByMonth",
            },
          },
        ],
      },

      {
        type: "group",
        heading: "Photo storage",
        items: [
          {
            name: "Photos folder",
            desc: "Folder used to store photos.",
            control: {
              type: "text",
              key: "photosFolder",
              placeholder: "photos",
            },
          },
          {
            name: "Organize photos by month",
            desc: "Save photos in year and month folders.",
            control: {
              type: "toggle",
              key: "organizePhotosByMonth",
            },
          },
          {
            name: "Create folder if missing",
            desc: "Create the photos folder automatically when needed.",
            control: {
              type: "toggle",
              key: "createFolderIfMissing",
            },
          },
          {
            name: "Save near the note",
            desc: "Save camera photos beside the current note. In the gallery they only show up when \"Show\" is set to the whole vault.",
            control: {
              type: "toggle",
              key: "saveNearTheNote",
            },
          },
        ],
      },

      {
        type: "group",
        heading: "Image compression",
        items: [
          {
            name: "Compress images",
            desc: "Reduce photo file sizes before saving. Applies to camera photos, picked photos and gallery uploads.",
            control: {
              type: "toggle",
              key: "compressImages",
            },
          },
          {
            name: "Compression mode",
            desc: "Minimal: pick a preset. Expert: control size, quality, format and metadata yourself.",
            visible: () => s().compressImages,
            control: {
              type: "dropdown",
              key: "compressionMode",
              options: { minimal: "Minimal", expert: "Expert" },
            },
          },

          // ---- Minimal ----
          {
            name: "Compression level",
            desc: "Light: 85% quality, up to 3000 px. Balanced: 75%, up to 2048 px. Strong: 60%, up to 1600 px (smallest files).",
            visible: minimal,
            control: {
              type: "dropdown",
              key: "compressionPreset",
              options: {
                light: "Light",
                balanced: "Balanced (recommended)",
                strong: "Strong",
              },
            },
          },

          // ---- Expert ----
          {
            name: "Quality",
            desc: "Lower values create smaller files with lower image quality. Ignored for lossless PNG output.",
            visible: expert,
            control: {
              type: "slider",
              key: "compressQuality",
              min: 0.1,
              max: 0.95,
              step: 0.05,
            },
          },
          {
            name: "Maximum size (pixels)",
            desc: "Longest side of the photo, for both landscape and portrait. 0 keeps the original size.",
            visible: expert,
            control: {
              type: "number",
              key: "compressMaxDimension",
              min: 0,
            },
          },
          {
            name: "Output format",
            desc: "Auto keeps the format but turns PNGs over 1 MB into JPEG (transparency becomes white). Original never changes the format. WebP is smaller than JPEG but falls back to JPEG if unsupported.",
            visible: expert,
            control: {
              type: "dropdown",
              key: "compressFormat",
              options: {
                auto: "Auto",
                original: "Keep original format",
                jpeg: "JPEG",
                webp: "WebP",
              },
            },
          },
          {
            name: "Keep EXIF metadata",
            desc: "Keep camera info and GPS location in JPEG files. Off is smaller and better for privacy.",
            visible: expert,
            control: {
              type: "toggle",
              key: "compressKeepExif",
            },
          },
          {
            name: "Skip small files (KB)",
            desc: "Do not compress files smaller than this. 0 compresses everything.",
            visible: expert,
            control: {
              type: "number",
              key: "compressMinSizeKB",
              min: 0,
            },
          },
        ],
      },
    ];
  }
}
import { App, Platform, PluginSettingTab, Setting } from "obsidian";
import type CameraEmbedPlugin from "./main";

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
  galleryScope: "vault",
  galleryGroupByMonth: true,
  galleryThumbSize: 0,
};

/* ---- Loose shapes used only by the display() fallback (Obsidian < 1.13) ---- */
interface FallbackControl {
  type: "toggle" | "text" | "slider" | "dropdown" | "number";
  key: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: Record<string, string>;
  disabled?: () => boolean;
}
interface FallbackRow {
  name: string;
  desc?: string;
  visible?: () => boolean;
  control?: FallbackControl;
}
interface FallbackGroup {
  type: "group";
  heading: string;
  visible?: () => boolean;
  items: FallbackRow[];
}
type FallbackItem = FallbackRow | FallbackGroup;

export class CameraEmbedSettingTab extends PluginSettingTab {
  plugin: CameraEmbedPlugin;

  constructor(app: App, plugin: CameraEmbedPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  /** Obsidian 1.13+ renders from this. */
  getSettingDefinitions() {
    const s = () => this.plugin.settings;
    const expert = () => s().compressImages && s().compressionMode === "expert";
    const minimal = () => s().compressImages && s().compressionMode === "minimal";

    return [
      {
        name: "This plugin is primarily designed for Android. Some features may be limited on other platforms.",
      },

      {
        type: "group" as const,
        heading: "Choose photo",
        items: [
          {
            name: "Enable image picker (optional)",
            desc: "Show a prompt to choose between taking a new photo or picking an existing one from the gallery.",
            control: {
              type: "toggle" as const,
              key: "imagePickerEnabled",
              // Locked while gallery is on, unless this one is already on (so it can be turned off)
              disabled: () => s().galleryEnabled && !s().imagePickerEnabled,
            },
          },
          {
            name: "Enable gallery (optional)",
            desc: "Use the gallery instead of taking a photo directly.",
            control: {
              type: "toggle" as const,
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
              type: "toggle" as const,
              key: "openGalleryInSidebar",
            },
          },
        ],
      },

      {
        type: "group" as const,
        heading: "Gallery",
        visible: () => s().galleryEnabled,
        items: [
          {
            name: "Default sort",
            desc: "How photos are ordered when the gallery opens. You can also change this inside the gallery.",
            control: {
              type: "dropdown" as const,
              key: "gallerySort",
              options: { newest: "Newest first", oldest: "Oldest first", name: "Name", size: "Largest first" },
            },
          },
          {
            name: "Show",
            desc: "Show every image in the vault, or only the images inside your photos folder.",
            control: {
              type: "dropdown" as const,
              key: "galleryScope",
              options: { vault: "Whole vault", folder: "Photos folder only" },
            },
          },
          {
            name: "Group by month",
            desc: "Add month headings (only when sorted by date).",
            control: {
              type: "toggle" as const,
              key: "galleryGroupByMonth",
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
            visible: () => !s().galleryEnabled,
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
            desc: "Reduce photo file sizes before saving. Applies to camera photos, picked photos and gallery uploads.",
            control: {
              type: "toggle" as const,
              key: "compressImages",
            },
          },
          {
            name: "Compression mode",
            desc: "Minimal: pick a preset. Expert: control size, quality, format and metadata yourself.",
            visible: () => s().compressImages,
            control: {
              type: "dropdown" as const,
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
              type: "dropdown" as const,
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
              type: "slider" as const,
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
              type: "number" as const,
              key: "compressMaxDimension",
              min: 0,
            },
          },
          {
            name: "Output format",
            desc: "Auto keeps the format but turns PNGs over 1 MB into JPEG (transparency becomes white). Original never changes the format. WebP is smaller than JPEG but falls back to JPEG if unsupported.",
            visible: expert,
            control: {
              type: "dropdown" as const,
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
              type: "toggle" as const,
              key: "compressKeepExif",
            },
          },
          {
            name: "Skip small files (KB)",
            desc: "Do not compress files smaller than this. 0 compresses everything.",
            visible: expert,
            control: {
              type: "number" as const,
              key: "compressMinSizeKB",
              min: 0,
            },
          },
        ],
      },
    ];
  }

  /* ------------------------------------------------------------------ */
  /* display() fallback for Obsidian < 1.13.                             */
  /* On 1.13+ the declarative definitions above are used instead and      */
  /* this method is never called. It renders the same definitions.        */
  /* ------------------------------------------------------------------ */
  display(): void {
    const { containerEl } = this;
    const scrollTop = containerEl.scrollTop;
    containerEl.empty();
    this.renderFallback(containerEl, this.getSettingDefinitions() as unknown as FallbackItem[]);
    containerEl.scrollTop = scrollTop;
  }

  private renderFallback(container: HTMLElement, items: FallbackItem[]) {
    for (const item of items) {
      if (item.visible && !item.visible()) continue;

      if ("items" in item) {
        new Setting(container).setName(item.heading).setHeading();
        this.renderFallback(container, item.items);
        continue;
      }

      const setting = new Setting(container).setName(item.name);
      if (item.desc) setting.setDesc(item.desc);
      if (item.control) this.addFallbackControl(setting, item.control);
    }
  }

  private addFallbackControl(setting: Setting, control: FallbackControl) {
    const store = this.plugin.settings as unknown as Record<string, unknown>;
    const key = control.key;
    const disabled = control.disabled?.() ?? false;

    const commit = async (value: unknown, rerender: boolean) => {
      store[key] = value;
      await this.plugin.saveSettings();
      if (rerender) this.display();
    };

    switch (control.type) {
      case "toggle":
        setting.addToggle((toggle) =>
          toggle
            .setValue(Boolean(store[key]))
            .setDisabled(disabled)
            .onChange((value) => void commit(value, true)),
        );
        break;

      case "text": {
        const placeholder = control.placeholder ?? "";
        setting.addText((text) =>
          text
            .setPlaceholder(placeholder)
            .setValue(String(store[key] ?? ""))
            .onChange((value) => void commit(value, false)),
        );
        break;
      }

      case "slider": {
        const { min = 0, max = 1, step = 0.05 } = control;
        setting.addSlider((slider) =>
          slider
            .setLimits(min, max, step)
            .setValue(Number(store[key]))
            .setDynamicTooltip()
            .onChange((value) => void commit(value, false)),
        );
        break;
      }

      case "dropdown": {
        const options = control.options ?? {};
        setting.addDropdown((dropdown) =>
          dropdown
            .addOptions(options)
            .setValue(String(store[key]))
            .onChange((value) => void commit(value, true)),
        );
        break;
      }

      case "number": {
        const min = control.min;
        setting.addText((text) => {
          text.inputEl.type = "number";
          if (min !== undefined) text.inputEl.min = String(min);
          text.setValue(String(store[key] ?? 0)).onChange((value) => {
            const parsed = Number(value);
            if (value.trim() === "" || !Number.isFinite(parsed)) return;
            void commit(min !== undefined ? Math.max(min, parsed) : parsed, false);
          });
        });
        break;
      }
    }
  }
}
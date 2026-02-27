import Compressor from "compressorjs";
import {
  MarkdownView,
  Notice,
  Plugin,
  TFolder,
  normalizePath,
  addIcon,
} from "obsidian";

import {DEFAULT_SETTINGS, CameraEmbedSettings, CameraEmbedSettingTab} from "./settings";

export default class AndroidCameraEmbedPlugin extends Plugin {
  settings: CameraEmbedSettings;

  async onload() {
    // Load persisted settings before wiring UI.
    await this.loadSettings();

    this.addSettingTab(new CameraEmbedSettingTab(this.app, this));

    // Register custom camera icon with viewBox 0 0 100 100 (required by Obsidian)
    addIcon(
      "android-camera",
      '<svg viewBox="0 0 100 100"><path fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M81 79H19c-4 0-8-4-8-8V33c0-4 4-8 8-8h13l6-10h24l6 10h13c4 0 8 4 8 8v38c0 4-4 8-8 8Z"/><circle fill="none" stroke="currentColor" stroke-width="6" cx="50" cy="52" r="17"/></svg>'
    );

    this.addRibbonIcon("android-camera", "Capture photo", () => {
      void this.captureAndEmbed();
    });

    this.addCommand({
      id: "capture-photo-embed",
      name: "Capture photo and embed",
      icon: "android-camera",
      callback: () => {
        void this.captureAndEmbed();
      },
    });
  }

  private async captureAndEmbed() {
    // Ensure there's an active markdown editor to insert the image.
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view) {
      new Notice("Please open a Markdown note to insert the photo.");
      return;
    }

    const activeFile = view.file;
    if (!activeFile) {
      new Notice("No active note to insert the photo.");
      return;
    }

    // Open the device camera and let the user capture a photo.
    const file = await this.pickImageFromCamera();
    if (!file) {
      return;
    }

    let finalFile: Blob | File = file;

    if (this.settings.compressImages) {
      finalFile = await this.compressImage(file);
    }

    // Save the photo into the vault.
    const arrayBuffer = await finalFile.arrayBuffer();
    const parent = this.app.fileManager.getNewFileParent(activeFile.path);
    const targetFolderPath = await this.ensureTargetFolder(parent);
    if (!targetFolderPath) {
      return;
    }

    const fileName = this.buildFileName(file);
    const targetPath = this.getAvailablePath(
      this.joinPath(targetFolderPath, fileName)
    );
    const created = await this.app.vault.createBinary(targetPath, arrayBuffer);

    // Insert a markdown embed for the saved image.
    const link = this.app.fileManager.generateMarkdownLink(created, activeFile.path);
    view.editor.replaceSelection(`!${link}`);
  }

  private async compressImage(file: File): Promise<Blob> {
    return new Promise((resolve, reject) => {
      new Compressor(file, {
        quality: this.settings.compressQuality,
        maxWidth: 1920,
        maxHeight: 1080,
        convertSize: 0,
        success: resolve,
        error: reject,
      });
    });
  }

  private pickImageFromCamera(): Promise<File | null> {
    return new Promise((resolve) => {
      // Mobile browsers use the capture attribute to open the camera.
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.capture = "environment";
      input.addClass("android-camera-hidden");

      const timeoutId = setTimeout(() => {
        input.remove();
        resolve(null);
      }, 60_000);

      const cleanup = (file: File | null) => {
        clearTimeout(timeoutId);
        input.remove();
        resolve(file);
      };

      input.addEventListener("change", () => {
        const file = input.files && input.files.length > 0 ? input.files[0] : null;
        cleanup(file as File | null);
      });

      document.body.appendChild(input);
      input.click();
    });
  }

  private buildFileName(file: File): string {
    // Use an ISO timestamp to keep filenames sortable.
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fallbackExt = this.extensionFromType(file.type) ?? "jpg";
    const ext = this.extensionFromName(file.name) ?? fallbackExt;
    return `photo-${stamp}.${ext}`;
  }

  private extensionFromName(name: string): string | null {
    const match = name.match(/\.([a-zA-Z0-9]+)$/);
    return match?.[1] ?? null;
  }

  private extensionFromType(mimeType: string): string | null {
    if (!mimeType.startsWith("image/")) {
      return null;
    }
    const subtype = mimeType.split("/")[1];
    if (!subtype) {
      return null;
    }
    return subtype.replace("jpeg", "jpg");
  }

  private joinPath(parentPath: string, fileName: string): string {
    if (!parentPath) {
      return fileName;
    }
    return `${parentPath}/${fileName}`;
  }

  private getAvailablePath(path: string): string {
    // Avoid overwriting existing files by adding a suffix.
    if (!this.app.vault.getAbstractFileByPath(path)) {
      return path;
    }

    const parts = path.split("/");
    const name = parts.pop() ?? path;
    const dir = parts.length > 0 ? `${parts.join("/")}/` : "";
    const extIndex = name.lastIndexOf(".");
    const base = extIndex === -1 ? name : name.slice(0, extIndex);
    const ext = extIndex === -1 ? "" : name.slice(extIndex);

    for (let i = 1; i < 1000; i += 1) {
      const candidate = `${dir}${base}-${i}${ext}`;
      if (!this.app.vault.getAbstractFileByPath(candidate)) {
        return candidate;
      }
    }

    return `${dir}${base}-${Date.now()}${ext}`;
  }

  private async ensureTargetFolder(parent: TFolder): Promise<string | null> {
    // Resolve the destination folder based on settings.
    const rawPath = this.settings.photosFolder.trim();
    if (!rawPath) {
      return parent.path;
    }

    const normalized = normalizePath(rawPath);
    const existing = this.app.vault.getAbstractFileByPath(normalized);
    if (existing instanceof TFolder) {
      return existing.path;
    }

    if (!this.settings.createFolderIfMissing) {
      new Notice(`Folder not found: ${normalized}`);
      return null;
    }

    try {
      // Create the folder tree if desired.
      await this.app.vault.createFolder(normalized);
      return normalized;
    } catch (error) {
      if (error instanceof Error) {
        new Notice(`Failed to create folder: ${normalized}`);
        console.error(`${error.message}`);
      } else {
        console.error(error);
      }
      return null;
    }
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData() as Partial<CameraEmbedSettings>);
	}

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
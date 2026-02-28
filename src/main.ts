import Compressor from "compressorjs";
import {
  MarkdownView,
  Notice,
  Plugin,
  TFolder,
  normalizePath,
  addIcon,
} from "obsidian";
import { DEFAULT_SETTINGS, CameraEmbedSettings, CameraEmbedSettingTab } from "./settings";

export default class CameraEmbedPlugin extends Plugin {
  settings: CameraEmbedSettings;

  async onload() {
    // Load persisted settings before wiring UI.
    await this.loadSettings();

    this.addSettingTab(new CameraEmbedSettingTab(this.app, this));

    // Register custom camera icon with viewBox 0 0 100 100 (required by Obsidian)
    addIcon(
      "camera-icon",
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera-icon lucide-camera"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>'
    );

    this.addRibbonIcon("camera-icon", "Capture photo", () => {
      void this.captureAndEmbed();
    });

    this.addCommand({
      id: "capture-photo-embed",
      name: "Capture photo and embed",
      icon: "camera-icon",
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
    if (!file) return;

    let finalFile: Blob | File = file;
    if (this.settings.compressImages) {
      finalFile = await this.compressImage(file);
    }

    // Save the photo into the vault.
    const arrayBuffer = await finalFile.arrayBuffer();
    const filePath = activeFile.parent?.path; // e.g. "news" or "" (if note in root)

    // Determine the target folder based on settings
    const targetFolderPath = await this.ensureTargetFolder(filePath);
    if (targetFolderPath === null) return; // error already shown

    const fileName = this.buildFileName(file);
    const targetPath = this.getAvailablePath(this.joinPath(targetFolderPath, fileName));
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
      input.addClass("camera-hidden");

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
    if (!mimeType.startsWith("image/")) return null;
    const subtype = mimeType.split("/")[1];
    if (!subtype) return null;
    return subtype.replace("jpeg", "jpg");
  }

  private joinPath(parentPath: string | null, fileName: string): string {
    if (!parentPath) return fileName; // parentPath is empty string → vault root
    return `${parentPath}/${fileName}`;
  }

  private getAvailablePath(path: string): string {
    // Avoid overwriting existing files by adding a suffix.
    if (!this.app.vault.getAbstractFileByPath(path)) return path;

    const parts = path.split("/");
    const name = parts.pop() ?? path;
    const dir = parts.length > 0 ? `${parts.join("/")}/` : "";
    const extIndex = name.lastIndexOf(".");
    const base = extIndex === -1 ? name : name.slice(0, extIndex);
    const ext = extIndex === -1 ? "" : name.slice(extIndex);

    for (let i = 1; i < 1000; i++) {
      const candidate = `${dir}${base}-${i}${ext}`;
      if (!this.app.vault.getAbstractFileByPath(candidate)) return candidate;
    }
    return `${dir}${base}-${Date.now()}${ext}`;
  }

  /**
   * Determines the folder path where the photo should be saved,
   * and creates it if missing (when `createFolderIfMissing` is true).
   *
   * @param noteFolderPath – the path of the folder containing the active note
   *                        (may be empty string if note is in vault root)
   * @returns The normalized target folder path (empty string for vault root),
   *          or `null` if the folder cannot be used/created.
   */
  private async ensureTargetFolder(noteFolderPath: string | undefined): Promise<string | null> {
    const rawPhotosFolder = this.settings.photosFolder.trim();
    const saveNear = this.settings.saveNearTheNote;

    // --- Case A: Save near the note ---
    if (saveNear) {
      // noteFolderPath is guaranteed to exist because the note exists
      const baseFolder = noteFolderPath ?? "";

      if (rawPhotosFolder === "") {
        // Save directly in the note's folder
        return baseFolder; // may be "" (vault root)
      } else {
        // Save in note's folder + photosFolder
        const target = baseFolder ? `${baseFolder}/${rawPhotosFolder}` : rawPhotosFolder;
        const normalized = normalizePath(target);

        // If the folder already exists, return it
        if (await this.folderExists(normalized)) return normalized;

        // Otherwise, create it if allowed
        if (!this.settings.createFolderIfMissing) {
          new Notice(`Folder not found: ${normalized}`);
          return null;
        }

        try {
          await this.app.vault.createFolder(normalized);
          return normalized;
        } catch (error) {
          new Notice(`Failed to create folder: ${normalized}`);
          console.error(error);
          return null;
        }
      }
    }

    // --- Case B: Global photos folder (not near the note) ---
    if (rawPhotosFolder === "") {
      // Save in vault root
      return "";
    }

    const normalized = normalizePath(rawPhotosFolder);
    if (await this.folderExists(normalized)) return normalized;

    if (!this.settings.createFolderIfMissing) {
      new Notice(`Folder not found: ${normalized}`);
      return null;
    }

    try {
      await this.app.vault.createFolder(normalized);
      return normalized;
    } catch (error) {
      new Notice(`Failed to create folder: ${normalized}`);
      console.error(error);
      return null;
    }
  }

  /** Helper to check if a folder exists at the given path. */
  private async folderExists(path: string): Promise<boolean> {
    const file = this.app.vault.getAbstractFileByPath(path);
    return file instanceof TFolder;
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData() as Partial<CameraEmbedSettings>);
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

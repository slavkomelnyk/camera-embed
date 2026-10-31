import { App, EventRef, MarkdownView, Menu, Modal, Notice, Platform, TFile, TFolder, normalizePath, setIcon } from "obsidian";
import { pickImages, type PickSource } from "./input-utils.js";
import type { CameraEmbedSettings, GalleryScope, GallerySort } from "./settings.js";

const IMAGE_EXTENSIONS = new Set(["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "avif"]);
const RENDER_CHUNK = 120;
const MAX_MENU_USAGES = 5;
const LONG_PRESS_MS = 500;
const WIDTH_CHOICES = [300, 500, 800];

/** What the gallery needs from the plugin. CameraEmbedPlugin satisfies this as is. */
export interface GalleryHost {
  settings: CameraEmbedSettings;
  savePhotos(files: File[], noteFolderPath?: string): Promise<TFile[]>;
  saveSettings(): Promise<void>;
  /** Folder of the note you are working in (for "Save near the note"). */
  getTargetNoteFolder?(): string | undefined;
  openGallerySidebar?(): Promise<void>;
}

interface ItemRefs {
  item: HTMLElement;
  badge: HTMLElement;
}

const isImage = (file: TFile) => IMAGE_EXTENSIONS.has(file.extension.toLowerCase());
const nextFrame = () => new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));

/** Files from the OS: trust the MIME type, but fall back to the extension (some systems give an empty type). */
const isImageFile = (file: File) => {
  if (file.type.startsWith("image/")) return true;
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  return IMAGE_EXTENSIONS.has(ext);
};

/**
 * Collects the images inside one folder (and its subfolders).
 * The gallery only ever reads the photos folder, never the rest of the vault.
 */
function collectImages(folder: TFolder, out: TFile[] = []): TFile[] {
  for (const child of folder.children) {
    if (child instanceof TFile) {
      if (isImage(child)) out.push(child);
    } else if (child instanceof TFolder) {
      collectImages(child, out);
    }
  }
  return out;
}

/** Notes that link to this photo. */
function getUsages(app: App, file: TFile): TFile[] {
  const resolvedLinks = app.metadataCache.resolvedLinks;
  const usages: TFile[] = [];
  for (const path in resolvedLinks) {
    const targets = resolvedLinks[path];
    if (!targets) continue;
    if ((targets[file.path] ?? 0) <= 0) continue;
    const note: unknown = app.vault.getAbstractFileByPath(path);
    if (note instanceof TFile) usages.push(note);
  }
  return usages;
}

export class GalleryModal extends Modal {
  private readonly host: GalleryHost;
  private readonly onChoose: (files: TFile[], width?: number) => void;
  private readonly closeOnChoose: boolean;

  private allFiles: TFile[] = [];
  private folderMissing = false;
  private visibleFiles: TFile[] = [];
  private itemEls = new Map<string, ItemRefs>();
  private selected = new Set<string>();
  private query = "";

  private grid!: HTMLElement;
  private selectionLabel!: HTMLElement;
  private status!: HTMLElement;
  private useButton!: HTMLButtonElement;
  private deleteButton!: HTMLButtonElement;
  private previewButton!: HTMLButtonElement;

  private observer: IntersectionObserver | null = null;
  private loaders = new WeakMap<Element, () => void>();
  private eventRefs: EventRef[] = [];
  private rebuildTimer: number | null = null;
  private searchTimer: number | null = null;
  private lastMenuTime = 0;
  private renderId = 0;
  private opened = false;

  private dragDepth = 0;

  constructor(
    app: App,
    host: GalleryHost,
    onChoose: (files: TFile[], width?: number) => void,
    closeOnChoose = true,
  ) {
    super(app);
    this.host = host;
    this.onChoose = onChoose;
    this.closeOnChoose = closeOnChoose;
  }

  mount(container: HTMLElement) {
    this.onOpen();
    container.appendChild(this.contentEl);
  }

  unmount() { this.onClose(); }

  /* ------------------------------------------------------------------ */
  /* UI                                                                  */
  /* ------------------------------------------------------------------ */

  onOpen() {
    this.opened = true;
    this.modalEl.addClass("camera-gallery-modal-container");
    const { contentEl } = this;
    contentEl.addClass("camera-gallery-modal");
    this.setupDropTarget();
    const settings = this.host.settings;

    // Header
    const header = contentEl.createDiv({ cls: "camera-gallery-header" });
    const title = header.createDiv({ cls: "camera-gallery-title" });
    setIcon(title, "images");
    title.createSpan({ text: "Gallery" });
    this.selectionLabel = header.createDiv({ cls: "camera-gallery-selection" });

    // Toolbar (adding photos)
    const toolbar = contentEl.createDiv({ cls: "camera-gallery-toolbar" });
    if (Platform.isMobile) {
      const take = toolbar.createEl("button", { cls: "mod-cta" });
      setIcon(take, "camera");
      take.createSpan({ text: "Take photo to gallery" });
      take.addEventListener("click", () => void this.addPhotos("camera"));
    }
    const upload = toolbar.createEl("button", { cls: "camera-gallery-upload" });
    setIcon(upload, "upload");
    upload.createSpan({ text: "Upload to gallery" });
    upload.addEventListener("click", () => void this.addPhotos("gallery"));

    if (Platform.isDesktop && this.closeOnChoose && this.host.openGallerySidebar) {
      const sidebar = toolbar.createEl("button", { attr: { "aria-label": "Open the gallery in the sidebar to drag photos into notes" } });
      setIcon(sidebar, "panel-right");
      sidebar.createSpan({ text: "Open in sidebar" });
      sidebar.addEventListener("click", () => {
        this.close();
        void this.host.openGallerySidebar?.();
      });
    }

    // Controls (search, sort, scope, month grouping, zoom)
    const controls = contentEl.createDiv({ cls: "camera-gallery-controls" });

    const search = controls.createDiv({ cls: "camera-gallery-search" });
    const searchInput = search.createEl("input", { type: "search", placeholder: "Search photos…" });
    searchInput.addEventListener("input", () => {
      if (this.searchTimer !== null) window.clearTimeout(this.searchTimer);
      this.searchTimer = window.setTimeout(() => {
        this.query = searchInput.value;
        void this.rebuild();
      }, 150);
    });

    this.addSelect<GallerySort>(
      controls,
      { newest: "Newest first", oldest: "Oldest first", name: "Name", size: "Largest first" },
      settings.gallerySort,
      (value) => {
        settings.gallerySort = value;
        void this.persistAndRebuild();
      },
    );

    this.addSelect<GalleryScope>(
      controls,
      { folder: "Photos folder", vault: "Whole vault" },
      settings.galleryScope,
      (value) => {
        settings.galleryScope = value;
        this.loadFiles();
        void this.persistAndRebuild();
      },
    );

    const groupButton = controls.createEl("button", {
      cls: "camera-gallery-group clickable-icon",
      attr: { "aria-label": "Group by month" },
    });
    setIcon(groupButton, "calendar");
    groupButton.toggleClass("is-active", settings.galleryGroupByMonth);
    groupButton.addEventListener("click", () => {
      settings.galleryGroupByMonth = !settings.galleryGroupByMonth;
      groupButton.toggleClass("is-active", settings.galleryGroupByMonth);
      void this.persistAndRebuild();
    });

    const zoom = controls.createEl("input", { cls: "camera-gallery-zoom", type: "range", attr: { "aria-label": "Thumbnail size" } });
    zoom.min = "80";
    zoom.max = "300";
    zoom.step = "10";
    if (settings.galleryThumbSize > 0) this.applyZoom(settings.galleryThumbSize);
    const cssSize = parseInt(getComputedStyle(contentEl).getPropertyValue("--camera-gallery-size"), 10);
    zoom.value = String(settings.galleryThumbSize > 0 ? settings.galleryThumbSize : (Number.isFinite(cssSize) ? cssSize : 150));
    zoom.addEventListener("input", () => this.applyZoom(Number(zoom.value)));
    zoom.addEventListener("change", () => {
      settings.galleryThumbSize = Number(zoom.value);
      void this.host.saveSettings();
    });

    // Status, grid, footer
    this.status = contentEl.createDiv({ cls: "camera-gallery-status" });
    this.grid = contentEl.createDiv({ cls: "camera-gallery-grid" });
    const footer = contentEl.createDiv({ cls: "camera-gallery-footer" });
    this.deleteButton = footer.createEl("button", { text: "Delete", cls: "camera-gallery-delete" });
    this.deleteButton.addEventListener("click", () => void this.deleteSelected());
    this.previewButton = footer.createEl("button", { text: "Preview", cls: "camera-gallery-preview" });
    this.previewButton.addEventListener("click", () => this.previewSelected());
    this.useButton = footer.createEl("button", { text: "Use it", cls: "mod-cta" });
    this.useButton.addEventListener("click", () => this.useSelected());
    this.setActionButtonsVisible(false);

    this.loadFiles();
    this.registerVaultEvents();
    void this.rebuild();
  }

  onClose() {
    this.opened = false;
    this.renderId++;
    if (this.rebuildTimer !== null) window.clearTimeout(this.rebuildTimer);
    if (this.searchTimer !== null) window.clearTimeout(this.searchTimer);
    this.rebuildTimer = null;
    this.searchTimer = null;
    this.observer?.disconnect();
    this.observer = null;
    for (const ref of this.eventRefs) this.app.vault.offref(ref);
    this.eventRefs = [];
    this.contentEl.empty();
  }

  private addSelect<T extends string>(parent: HTMLElement, options: Record<T, string>, value: T, onChange: (value: T) => void) {
    const select = parent.createEl("select", { cls: "dropdown" });
    for (const key of Object.keys(options) as T[]) {
      select.createEl("option", { value: key, text: options[key] });
    }
    select.value = value;
    select.addEventListener("change", () => onChange(select.value as T));
    return select;
  }

  private applyZoom(size: number) {
    this.contentEl.setCssProps({ "--camera-gallery-size": `${size}px` });
  }

  private async persistAndRebuild() {
    await this.host.saveSettings();
    await this.rebuild();
  }

  /* ------------------------------------------------------------------ */
  /* Live updates                                                        */
  /* ------------------------------------------------------------------ */

  /** The configured photos folder, or "" when none is set. */
  private photosFolderPath(): string {
    const path = normalizePath(this.host.settings.photosFolder.trim());
    return path === "/" ? "" : path;
  }

  /** Whether a change at this path can affect what the gallery shows. */
  private inPhotosFolder(path: string): boolean {
    if (this.host.settings.galleryScope === "vault") return true;
    const folder = this.photosFolderPath();
    return folder !== "" && path.startsWith(`${folder}/`);
  }

  /**
   * Reads the images to show. With the default "Photos folder" scope only that folder is read;
   * the whole vault is only listed when the user chooses the "Whole vault" scope.
   */
  private loadFiles() {
    if (this.host.settings.galleryScope === "vault") {
      this.folderMissing = false;
      this.allFiles = this.app.vault.getFiles().filter(isImage);
      return;
    }
    const path = this.photosFolderPath();
    const folder = path ? this.app.vault.getFolderByPath(path) : null;
    this.folderMissing = !folder;
    this.allFiles = folder ? collectImages(folder) : [];
  }

  private registerVaultEvents() {
    const vault = this.app.vault;
    this.eventRefs.push(
      // Only changes inside the photos folder matter to the gallery
      vault.on("create", (file) => {
        if (file instanceof TFile && isImage(file) && this.inPhotosFolder(file.path)) this.scheduleRebuild();
      }),
      vault.on("delete", (file) => {
        if (this.inPhotosFolder(file.path)) this.scheduleRebuild();
      }),
      vault.on("rename", (file, oldPath) => {
        if (!this.inPhotosFolder(file.path) && !this.inPhotosFolder(oldPath)) return;
        this.renameSelected(oldPath, file.path);
        this.scheduleRebuild();
      }),
    );
  }

  /** Keeps a renamed photo selected, in the same selection order. */
  private renameSelected(oldPath: string, newPath: string) {
    if (!this.selected.has(oldPath)) return;
    this.selected = new Set(Array.from(this.selected, (path) => (path === oldPath ? newPath : path)));
  }

  /** Several events often arrive together (uploads, folder moves), so wait briefly and rebuild once. */
  private scheduleRebuild() {
    if (this.rebuildTimer !== null) window.clearTimeout(this.rebuildTimer);
    this.rebuildTimer = window.setTimeout(() => {
      this.rebuildTimer = null;
      if (!this.opened) return;
      this.loadFiles();
      void this.rebuild(true);
    }, 200);
  }

  /* ------------------------------------------------------------------ */
  /* Filtering, sorting, rendering                                       */
  /* ------------------------------------------------------------------ */

  private computeVisible(): TFile[] {
    const settings = this.host.settings;
    const query = this.query.trim().toLowerCase();

    const files = this.allFiles.filter((file) => !query || file.path.toLowerCase().includes(query));

    switch (settings.gallerySort) {
      case "oldest": files.sort((a, b) => a.stat.mtime - b.stat.mtime); break;
      case "name": files.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true })); break;
      case "size": files.sort((a, b) => b.stat.size - a.stat.size); break;
      default: files.sort((a, b) => b.stat.mtime - a.stat.mtime);
    }
    return files;
  }

  private async rebuild(keepScroll = false) {
    if (!this.opened) return;
    const run = ++this.renderId;
    const files = this.computeVisible();
    this.visibleFiles = files;
    const scrollTop = this.grid.scrollTop;

    // Never leave hidden photos selected: "Use it" and "Delete" would act on things you can't see.
    const visiblePaths = new Set(files.map((file) => file.path));
    for (const path of Array.from(this.selected)) if (!visiblePaths.has(path)) this.selected.delete(path);

    this.observer?.disconnect();
    this.observer = this.createObserver();
    this.grid.empty();
    this.itemEls.clear();
    this.updateSelection();
    this.updateStatus();

    if (files.length === 0) {
      this.renderEmpty();
      return;
    }

    const settings = this.host.settings;
    const group = settings.galleryGroupByMonth && (settings.gallerySort === "newest" || settings.gallerySort === "oldest");
    let lastMonth = "";

    for (let index = 0; index < files.length; index++) {
      if (run !== this.renderId || !this.opened) return;
      const file = files[index];
      if (!file) continue;

      if (group) {
        const date = new Date(file.stat.mtime);
        const key = `${date.getFullYear()}-${date.getMonth()}`;
        if (key !== lastMonth) {
          lastMonth = key;
          this.grid.createDiv({
            cls: "camera-gallery-month",
            text: date.toLocaleDateString(undefined, { month: "long", year: "numeric" }),
          });
        }
      }

      this.createItem(file);
      if ((index + 1) % RENDER_CHUNK === 0) await nextFrame();
    }

    if (run === this.renderId) this.grid.scrollTop = keepScroll ? scrollTop : 0;
  }

  private updateStatus() {
    const shown = this.visibleFiles.length;
    const total = this.allFiles.length;
    this.status.setText(shown === total ? `${shown.toLocaleString()} photos` : `${shown.toLocaleString()} of ${total.toLocaleString()} photos`);
  }

  private renderEmpty() {
    const empty = this.grid.createDiv({ cls: "camera-gallery-empty" });
    setIcon(empty.createDiv(), "image-off");
    const searching = this.query.trim() !== "";
    let message = "No photos yet.";
    if (searching) message = "No photos match your search.";
    else if (this.host.settings.galleryScope === "folder" && this.photosFolderPath() === "") message = "Set a photos folder in the Camera Embed settings.";
    else if (this.folderMissing) message = "The photos folder does not exist yet. Upload a photo to create it.";
    empty.createDiv({ text: message });
    if (!searching && (this.host.settings.galleryScope === "vault" || this.photosFolderPath() !== "")) {
      const button = empty.createEl("button", { cls: "mod-cta", text: "Upload photos" });
      button.addEventListener("click", () => void this.addPhotos("gallery"));
    }
  }

  /** Thumbnails only load when they get close to the visible area, so big galleries stay fast. */
  private createObserver(): IntersectionObserver {
    return new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          this.loaders.get(entry.target)?.();
          this.loaders.delete(entry.target);
          this.observer?.unobserve(entry.target);
        }
      },
      { root: this.grid, rootMargin: "400px" },
    );
  }

  private createItem(file: TFile) {
    const item = this.grid.createDiv({ cls: "camera-gallery-item", attr: { role: "button", tabindex: "0" } });
    item.dataset.path = file.path;
    const image = item.createEl("img", { cls: "camera-gallery-thumbnail" });
    image.alt = file.name;
    image.decoding = "async";
    image.draggable = false; // the whole tile is the drag handle, not the bare <img>
    const markLoaded = () => item.addClass("is-loaded");
    image.addEventListener("load", markLoaded);
    image.addEventListener("error", markLoaded);
    const badge = item.createDiv({ cls: "camera-gallery-badge" });
    item.createDiv({ cls: "camera-gallery-name", text: file.name });

    this.loaders.set(item, () => { image.src = this.app.vault.getResourcePath(file); });
    this.observer?.observe(item);

    this.itemEls.set(file.path, { item, badge });
    this.paintItem(file.path, this.getSelectionNumber(file.path));

    // Click and keyboard
    let longPressed = false;
    item.addEventListener("click", () => {
      if (longPressed) { longPressed = false; return; } // the long press already opened the menu
      this.toggleSelection(file.path);
    });
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this.toggleSelection(file.path);
      }
    });

    // Right-click (desktop). The ContextMenu key and Shift+F10 also fire this event.
    item.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      // A touch long-press can fire both our timer and this event: only open one menu.
      if (Date.now() - this.lastMenuTime < 800) return;
      this.openContextMenu(file.path, (menu) => menu.showAtMouseEvent(event));
    });

    // Long-press (touch)
    let pressTimer: number | null = null;
    const cancelPress = () => {
      if (pressTimer !== null) window.clearTimeout(pressTimer);
      pressTimer = null;
    };
    item.addEventListener("touchstart", (event) => {
      longPressed = false;
      const touch = event.touches[0];
      if (!touch) return;
      const { clientX: x, clientY: y } = touch;
      cancelPress();
      pressTimer = window.setTimeout(() => {
        pressTimer = null;
        longPressed = true;
        this.openContextMenu(file.path, (menu) => menu.showAtPosition({ x, y }));
      }, LONG_PRESS_MS);
    }, { passive: true });
    item.addEventListener("touchmove", cancelPress, { passive: true });
    item.addEventListener("touchend", cancelPress, { passive: true });
    item.addEventListener("touchcancel", cancelPress, { passive: true });
    if (Platform.isDesktop) this.setupItemDrag(item, file);
  }

  /* ------------------------------------------------------------------ */
  /* Drag and drop                                                       */
  /* ------------------------------------------------------------------ */

  /** Drop image files from the OS onto the gallery: each one is saved as a copy through the shared pipeline. */
  private setupDropTarget() {
    if (!Platform.isDesktop) return;
    const target = this.contentEl;

    const overlay = target.createDiv({ cls: "camera-gallery-drop-overlay" });
    setIcon(overlay.createDiv(), "upload");
    overlay.createDiv({ text: "Drop photos to add to gallery" });

    // Only react to real files, not to text or links dragged around inside Obsidian
    const hasFiles = (event: DragEvent) => Array.from(event.dataTransfer?.types ?? []).includes("Files");

    target.addEventListener("dragenter", (event) => {
      if (!hasFiles(event)) return;
      event.preventDefault();
      this.dragDepth++;
      target.addClass("is-dragover");
    });
    target.addEventListener("dragover", (event) => {
      if (!hasFiles(event)) return;
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
    });
    target.addEventListener("dragleave", (event) => {
      if (!hasFiles(event)) return;
      // dragenter/dragleave also fire for child elements, so count them
      this.dragDepth = Math.max(0, this.dragDepth - 1);
      if (this.dragDepth === 0) target.removeClass("is-dragover");
    });
    target.addEventListener("drop", (event) => {
      if (!hasFiles(event)) return;
      event.preventDefault();
      event.stopPropagation(); // keep Obsidian from also importing the files as attachments
      this.dragDepth = 0;
      target.removeClass("is-dragover");
      void this.handleDroppedFiles(Array.from(event.dataTransfer?.files ?? []));
    });
  }

  private async handleDroppedFiles(dropped: File[]) {
    const images = dropped.filter(isImageFile);
    const skipped = dropped.length - images.length;
    if (skipped > 0) new Notice(`Skipped ${skipped} non-image file${skipped === 1 ? "" : "s"}.`);
    if (images.length === 0 || !this.opened) return;

    // Same pipeline as every other upload (folder, month folders, compression, naming).
    // The new photos appear through the vault "create" events.
    const saved = await this.saveFiles(images);
    if (saved.length > 0) new Notice(`Added ${saved.length} photo${saved.length === 1 ? "" : "s"} to gallery.`);
  }

  /** Path used to build links when dragging: the note the user was last working in. */
  private linkSourcePath(): string {
    const view = this.app.workspace.getMostRecentLeaf()?.view;
    if (view instanceof MarkdownView) return view.file?.path ?? "";
    return this.app.workspace.getActiveFile()?.path ?? "";
  }

  /** Drag a thumbnail (or the whole selection) into a note: drops embed links as text at the cursor. */
  private setupItemDrag(item: HTMLElement, file: TFile) {
    item.draggable = true;

    item.addEventListener("dragstart", (event) => {
      const dataTransfer = event.dataTransfer;
      if (!dataTransfer) return;

      // Dragging a selected photo drags the whole selection; otherwise just this one
      const paths = this.selected.has(file.path) ? Array.from(this.selected) : [file.path];
      const files = paths
        .map((path) => this.app.vault.getAbstractFileByPath(path))
        .filter((entry): entry is TFile => entry instanceof TFile);
      if (files.length === 0) return;

      const source = this.linkSourcePath();
      const text = files.map((entry) => `!${this.app.fileManager.generateMarkdownLink(entry, source)}`).join("\n");
      dataTransfer.setData("text/plain", text);
      dataTransfer.effectAllowed = "copy";

      if (files.length > 1) {
        const label = this.contentEl.createDiv({ cls: "camera-gallery-drag-image", text: `${files.length} photos` });
        dataTransfer.setDragImage(label, 0, 0);
        window.setTimeout(() => label.remove(), 0);
      }

      for (const path of paths) this.itemEls.get(path)?.item.addClass("is-dragging");
    });

    item.addEventListener("dragend", () => {
      this.grid.querySelectorAll(".is-dragging").forEach((el) => el.removeClass("is-dragging"));
    });
  }

  /* ------------------------------------------------------------------ */
  /* Selection                                                           */
  /* ------------------------------------------------------------------ */

  private toggleSelection(path: string) {
    if (this.selected.has(path)) this.selected.delete(path); else this.selected.add(path);
    this.updateSelection(path);
  }

  /** Replaces the whole selection and repaints everything that changed. */
  private setSelection(paths: string[]) {
    const previous = Array.from(this.selected);
    this.selected = new Set(paths);
    for (const path of previous) if (!this.selected.has(path)) this.paintItem(path, 0);
    this.updateSelection();
  }

  private selectedFiles(): TFile[] {
    const files: TFile[] = [];
    for (const path of this.selected) {
      const file = this.app.vault.getAbstractFileByPath(path);
      if (file instanceof TFile) files.push(file);
    }
    return files;
  }

  /** Draws one item's selected state and badge number (0 = not selected). */
  private paintItem(path: string, number: number) {
    const refs = this.itemEls.get(path);
    if (!refs) return;
    refs.item.toggleClass("is-selected", number > 0);
    refs.badge.setText(number > 0 ? String(number) : "");
  }

  /** Renumbers every selected item, so badges never go stale after a deselect. */
  private refreshBadges(changedPath?: string) {
    let number = 0;
    for (const path of this.selected) {
      number++;
      this.paintItem(path, number);
    }
    if (changedPath && !this.selected.has(changedPath)) this.paintItem(changedPath, 0);
  }

  private getSelectionNumber(path: string): number {
    let number = 0;
    for (const selectedPath of this.selected) { number++; if (selectedPath === path) return number; }
    return 0;
  }

  private setActionButtonsVisible(visible: boolean) {
    this.useButton.toggleVisibility(visible);
    this.deleteButton.toggleVisibility(visible);
    this.previewButton.toggleVisibility(this.selected.size === 1);
  }

  private updateSelection(changedPath?: string) {
    const count = this.selected.size;
    this.selectionLabel.setText(count === 0 ? "Select photos" : `${count} selected`);
    this.setActionButtonsVisible(count > 0);
    this.refreshBadges(changedPath);
  }

  /* ------------------------------------------------------------------ */
  /* Right-click menu                                                    */
  /* ------------------------------------------------------------------ */

  private openContextMenu(path: string, show: (menu: Menu) => void) {
    // Right-clicking a photo outside the selection selects just that photo.
    if (!this.selected.has(path)) this.setSelection([path]);

    const files = this.selectedFiles();
    const count = files.length;
    const single = count === 1 ? files[0] : undefined;
    if (count === 0) return;

    this.lastMenuTime = Date.now();
    const menu = new Menu();

    // Insert
    menu.addItem((item) => item
      .setTitle(count > 1 ? `Use ${count} photos` : "Use it")
      .setIcon("corner-down-left")
      .onClick(() => this.useSelected()));

    for (const width of WIDTH_CHOICES) {
      menu.addItem((item) => item
        .setTitle(`Insert at ${width} px`)
        .setIcon("move-horizontal")
        .onClick(() => this.useSelected(width)));
    }

    if (single) {
      menu.addItem((item) => item
        .setTitle("Preview")
        .setIcon("eye")
        .onClick(() => this.previewFile(single)));
    }

    // Usages (single photo only)
    if (single) {
      menu.addSeparator();
      const usages = getUsages(this.app, single);
      if (usages.length === 0) {
        menu.addItem((item) => item.setTitle("Not used in any note").setIcon("file-x").setDisabled(true));
      } else {
        menu.addItem((item) => item
          .setTitle(`Used in ${usages.length} note${usages.length === 1 ? "" : "s"}`)
          .setIcon("link")
          .setDisabled(true));
        for (const note of usages.slice(0, MAX_MENU_USAGES)) {
          menu.addItem((item) => item
            .setTitle(note.basename)
            .setIcon("file-text")
            .onClick(() => void this.app.workspace.openLinkText(note.path, "", false)));
        }
        if (usages.length > MAX_MENU_USAGES) {
          menu.addItem((item) => item
            .setTitle(`Show all ${usages.length} usages…`)
            .setIcon("list")
            .onClick(() => this.previewFile(single)));
        }
      }
    }

    // File actions (single photo only)
    if (single) {
      menu.addSeparator();
      menu.addItem((item) => item
        .setTitle("Open in new tab")
        .setIcon("file-plus")
        .onClick(() => {
          void this.app.workspace.getLeaf("tab").openFile(single);
          if (this.closeOnChoose) this.close();
        }));
      menu.addItem((item) => item
        .setTitle("Rename…")
        .setIcon("pencil")
        .onClick(() => this.renameFile(single)));

      const showInFolder = (this.app as unknown as { showInFolder?: (path: string) => void }).showInFolder;
      if (Platform.isDesktopApp && typeof showInFolder === "function") {
        menu.addItem((item) => item
          .setTitle("Show in system explorer")
          .setIcon("folder-open")
          .onClick(() => showInFolder.call(this.app, single.path)));
      }
    }

    // Selection
    menu.addSeparator();
    menu.addItem((item) => item
      .setTitle("Select all")
      .setIcon("check-square")
      .onClick(() => this.setSelection(this.visibleFiles.map((file) => file.path))));
    menu.addItem((item) => item
      .setTitle("Clear selection")
      .setIcon("square")
      .onClick(() => this.setSelection([])));

    // Delete
    menu.addSeparator();
    menu.addItem((item) => item
      .setTitle(count > 1 ? `Delete ${count} photos` : "Delete")
      .setIcon("trash-2")
      .setWarning(true)
      .onClick(() => void this.deleteFiles(files.map((file) => file.path))));

    show(menu);
  }

  private renameFile(file: TFile) {
    new RenameModal(this.app, file, (newBaseName) => {
      const parent = file.parent && !file.parent.isRoot() ? `${file.parent.path}/` : "";
      const newPath = normalizePath(`${parent}${newBaseName}.${file.extension}`);
      if (newPath === file.path) return;
      if (this.app.vault.getAbstractFileByPath(newPath)) {
        new Notice(`A file named "${newBaseName}.${file.extension}" already exists.`);
        return;
      }
      // fileManager.renameFile also updates every link that points at the photo
      void this.app.fileManager.renameFile(file, newPath).catch((error: unknown) => {
        console.error("Camera Embed: rename failed", error);
        new Notice("Could not rename the photo.");
      });
    }).open();
  }

  /* ------------------------------------------------------------------ */
  /* Actions                                                             */
  /* ------------------------------------------------------------------ */

  private useSelected(width?: number) {
    const files = this.selectedFiles();
    if (!files.length) return;
    this.onChoose(files, width);
    if (this.closeOnChoose) this.close();
  }

  private async deleteSelected() {
    const paths = Array.from(this.selected);
    if (!paths.length) return;
    await this.deleteFiles(paths);
  }

  private async deleteFiles(paths: string[]) {
    const confirmed = await this.confirmDelete(paths.length);
    if (!confirmed) return;
    let deleted = 0;
    for (const path of paths) {
      const file = this.app.vault.getAbstractFileByPath(path);
      if (!(file instanceof TFile)) continue;
      try {
        await this.app.fileManager.trashFile(file);
        deleted++;
      } catch (error) {
        console.error("Camera Embed: failed to delete gallery photo", path, error);
      }
    }
    for (const path of paths) this.selected.delete(path);
    this.updateSelection();
    if (deleted > 0) new Notice(`Deleted ${deleted} photo${deleted === 1 ? "" : "s"}.`);
    this.scheduleRebuild(); // vault events do this too; this is just a safety net
  }

  private previewSelected() {
    const [path] = Array.from(this.selected);
    if (!path) return;
    const file = this.app.vault.getAbstractFileByPath(path);
    if (file instanceof TFile) this.previewFile(file);
  }

  private previewFile(file: TFile) {
    new PhotoPreviewModal(this.app, file, () => void this.deleteFiles([file.path])).open();
  }

  private confirmDelete(count: number): Promise<boolean> {
    return new Promise((resolve) => {
      const modal = new Modal(this.app);
      let settled = false;
      const finish = (value: boolean) => {
        if (settled) return;
        settled = true;
        resolve(value);
        modal.close();
      };
      modal.titleEl.setText("Delete photos?");
      modal.contentEl.createEl("p", { text: `Move ${count} selected photo${count === 1 ? "" : "s"} to the Obsidian trash?` });
      const buttons = modal.contentEl.createDiv({ cls: "modal-button-container" });
      buttons.createEl("button", { text: "Cancel" }).addEventListener("click", () => finish(false));
      buttons.createEl("button", { text: "Delete", cls: "mod-warning" }).addEventListener("click", () => finish(true));
      modal.open();
    });
  }

  /** Saves through the plugin's shared pipeline, honouring "Save near the note". */
  private async saveFiles(files: File[]): Promise<TFile[]> {
    const settings = this.host.settings;
    const noteFolder = settings.saveNearTheNote ? this.host.getTargetNoteFolder?.() : undefined;
    const saved = await this.host.savePhotos(files, noteFolder);
    if (saved.length > 0 && noteFolder !== undefined && settings.galleryScope === "folder") {
      new Notice('Saved next to the note, set the gallery to "whole vault" to see these photos here.');
    }
    return saved;
  }

  /** Pick (or capture) photos and save them through the plugin's shared save pipeline. */
  private async addPhotos(source: PickSource) {
    const files = await pickImages(source, this.app.workspace.containerEl);
    if (!files.length || !this.opened) return;

    // New photos show up through the vault "create" events, so nothing else to do here.
    const saved = await this.saveFiles(files);
    if (saved.length > 0) new Notice(`Added ${saved.length} photo${saved.length === 1 ? "" : "s"} to gallery.`);
  }
}

class RenameModal extends Modal {
  private readonly file: TFile;
  private readonly onSubmit: (newBaseName: string) => void;

  constructor(app: App, file: TFile, onSubmit: (newBaseName: string) => void) {
    super(app);
    this.file = file;
    this.onSubmit = onSubmit;
  }

  onOpen() {
    this.titleEl.setText("Rename photo");
    const input = this.contentEl.createEl("input", { type: "text", value: this.file.basename });
    input.setCssProps({ width: "100%" });
    this.contentEl.createEl("p", { text: `The .${this.file.extension} extension is kept. Links in your notes are updated.`, cls: "setting-item-description" });

    const submit = () => {
      // File names cannot contain these characters on common systems.
      const name = input.value.trim().replace(/[\\/:*?"<>|]/g, "");
      if (!name) return;
      this.close();
      this.onSubmit(name);
    };
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") { event.preventDefault(); submit(); }
    });

    const buttons = this.contentEl.createDiv({ cls: "modal-button-container" });
    buttons.createEl("button", { text: "Cancel" }).addEventListener("click", () => this.close());
    buttons.createEl("button", { text: "Rename", cls: "mod-cta" }).addEventListener("click", submit);

    input.focus();
    input.select();
  }

  onClose() { this.contentEl.empty(); }
}

class PhotoPreviewModal extends Modal {
  private readonly file: TFile;
  private readonly onDelete: () => void;

  constructor(app: App, file: TFile, onDelete: () => void) {
    super(app);
    this.file = file;
    this.onDelete = onDelete;
  }

  onOpen() {
    this.modalEl.addClass("camera-photo-preview-modal-container");
    this.titleEl.setText(this.file.name);
    const { contentEl } = this;
    contentEl.addClass("camera-photo-preview-modal");
    const image = contentEl.createEl("img", { cls: "camera-photo-preview-image" });
    image.src = this.app.vault.getResourcePath(this.file);
    image.alt = this.file.name;

    const usages = getUsages(this.app, this.file);
    contentEl.createEl("h3", { text: `Used in ${usages.length} note${usages.length === 1 ? "" : "s"}` });
    const usageList = contentEl.createDiv({ cls: "camera-photo-preview-usages" });
    if (usages.length === 0) usageList.setText("This photo is not linked from any note.");
    for (const usage of usages) {
      const button = usageList.createEl("button", { text: usage.path, cls: "camera-photo-preview-usage" });
      button.addEventListener("click", () => void this.app.workspace.openLinkText(usage.path, "", false));
    }

    const actions = contentEl.createDiv({ cls: "modal-button-container" });
    actions.createEl("button", { text: "Close" }).addEventListener("click", () => this.close());
    actions.createEl("button", { text: "Delete", cls: "mod-warning" }).addEventListener("click", () => {
      this.close();
      this.onDelete();
    });
  }

  onClose() { this.contentEl.empty(); }
}
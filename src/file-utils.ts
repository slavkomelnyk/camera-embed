import { TFolder, Vault } from "obsidian";

const pad = (n: number) => String(n).padStart(2, "0");

/** Local time (not UTC): 2026-10-31_14-05-09 */
function localStamp(date = new Date()): string {
  const day = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const time = `${pad(date.getHours())}-${pad(date.getMinutes())}-${pad(date.getSeconds())}`;
  return `${day}_${time}`;
}

/**
 * @param file   the original file (used for a fallback extension)
 * @param output the blob that will actually be written (may be compressed/converted).
 *               The extension comes from this, so a PNG converted to JPEG is saved as .jpg.
 */
export function buildFileName(file: File, output: Blob = file): string {
  const ext = extensionFromType(output.type) ?? extensionFromName(file.name)?.toLowerCase() ?? "jpg";
  return `photo-${localStamp()}.${ext}`;
}

export function extensionFromName(name: string): string | null {
  const match = name.match(/\.([a-zA-Z0-9]+)$/);
  return match?.[1] ?? null;
}

const TYPE_EXTENSIONS: Record<string, string> = {
  jpeg: "jpg",
  pjpeg: "jpg",
  "svg+xml": "svg",
  "x-icon": "ico",
  "vnd.microsoft.icon": "ico",
};

export function extensionFromType(mimeType: string): string | null {
  if (!mimeType.startsWith("image/")) return null;
  const subtype = mimeType.slice("image/".length).toLowerCase();
  if (!subtype) return null;
  const mapped = TYPE_EXTENSIONS[subtype];
  if (mapped) return mapped;
  return /^[a-z0-9]+$/.test(subtype) ? subtype : null;
}

export function joinPath(parentPath: string | null, fileName: string): string {
  if (!parentPath) return fileName; // parentPath is empty string → vault root
  return `${parentPath}/${fileName}`;
}

/** Uses the local date, so a photo taken at 1 AM on the 1st goes in the right month. */
export function getMonthlyFolder(parentPath: string): string {
  const now = new Date();
  return joinPath(joinPath(parentPath, String(now.getFullYear())), pad(now.getMonth() + 1));
}

export async function createFolderPath(vault: Vault, path: string): Promise<void> {
  let currentPath = "";
  for (const segment of path.split("/").filter(Boolean)) {
    currentPath = joinPath(currentPath, segment);
    const existing = vault.getAbstractFileByPath(currentPath);
    if (existing instanceof TFolder) continue;
    if (existing) throw new Error(`Cannot create folder because a file exists at ${currentPath}`);
    await vault.createFolder(currentPath);
  }
}

export function getAvailablePath(vault: Vault, path: string): string {
  // Avoid overwriting existing files by adding a suffix.
  if (!vault.getAbstractFileByPath(path)) return path;

  const parts = path.split("/");
  const name = parts.pop() ?? path;
  const dir = parts.length > 0 ? `${parts.join("/")}/` : "";
  const extIndex = name.lastIndexOf(".");
  const base = extIndex === -1 ? name : name.slice(0, extIndex);
  const ext = extIndex === -1 ? "" : name.slice(extIndex);

  for (let i = 1; i < 1000; i++) {
    const candidate = `${dir}${base}-${i}${ext}`;
    if (!vault.getAbstractFileByPath(candidate)) return candidate;
  }
  return `${dir}${base}-${Date.now()}${ext}`;
}

/** Helper to check if a folder exists at the given path. */
export function folderExists(vault: Vault, path: string): boolean {
  const file = vault.getAbstractFileByPath(path);
  return file instanceof TFolder;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Adds an image width to an embed link, using Obsidian's size syntax:
 *   [[photo.jpg]]      -> [[photo.jpg|500]]
 *   [photo](photo.jpg) -> [photo|500](photo.jpg)
 * Returns the link unchanged when no width is given.
 */
export function withEmbedWidth(link: string, width?: number): string {
  if (!width || width <= 0) return link;
  if (link.startsWith("[[") && link.endsWith("]]")) {
    return `${link.slice(0, -2)}|${width}]]`;
  }
  return link.replace(/^\[(.*?)\]\(/, (_match, alt: string) => `[${alt}|${width}](`);
}
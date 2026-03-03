import {TFolder, Vault} from "obsidian";

export function buildFileName(file: File): string {
    // Use an ISO timestamp to keep filenames sortable.
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const fallbackExt = extensionFromType(file.type) ?? "jpg";
    const ext = extensionFromName(file.name) ?? fallbackExt;
    return `photo-${stamp}.${ext}`;
  }

export function extensionFromName(name: string): string | null {
  const match = name.match(/\.([a-zA-Z0-9]+)$/);
  return match?.[1] ?? null;
}

export function extensionFromType(mimeType: string): string | null {
  if (!mimeType.startsWith("image/")) return null;
  const subtype = mimeType.split("/")[1];
  if (!subtype) return null;
  return subtype.replace("jpeg", "jpg");
}

export function joinPath(parentPath: string | null, fileName: string): string {
  if (!parentPath) return fileName; // parentPath is empty string → vault root
  return `${parentPath}/${fileName}`;
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

import Compressor from "compressorjs";
import type { CameraEmbedSettings, CompressFormat, CompressionPreset } from "./settings.js";

export interface CompressOptions {
  quality: number;
  /** Longest side in px. 0 = keep original size. */
  maxDimension: number;
  format: CompressFormat;
  keepExif: boolean;
  minSizeBytes: number;
}

const PRESETS: Record<CompressionPreset, { quality: number; maxDimension: number }> = {
  light: { quality: 0.85, maxDimension: 3000 },
  balanced: { quality: 0.75, maxDimension: 2048 },
  strong: { quality: 0.6, maxDimension: 1600 },
};

// GIFs may be animated and SVGs are vector: never re-encode them.
const SKIP_TYPES = new Set(["image/gif", "image/svg+xml"]);

// "auto" converts PNGs above this size to JPEG.
const PNG_CONVERT_SIZE = 1_000_000;

export function getCompressOptions(settings: CameraEmbedSettings): CompressOptions {
  if (settings.compressionMode === "expert") {
    return {
      quality: Math.min(1, Math.max(0.1, settings.compressQuality)),
      maxDimension: Math.max(0, Math.round(settings.compressMaxDimension)),
      format: settings.compressFormat,
      keepExif: settings.compressKeepExif,
      minSizeBytes: Math.max(0, settings.compressMinSizeKB) * 1024,
    };
  }
  const preset = PRESETS[settings.compressionPreset] ?? PRESETS.balanced;
  return { ...preset, format: "auto", keepExif: false, minSizeBytes: 0 };
}

function runCompressor(file: File, options: CompressOptions, mimeType: string, convertSize: number): Promise<Blob> {
  // Setting both limits to the same value makes it a "longest side" limit,
  // so portrait photos are not shrunk more than landscape ones.
  const limit = options.maxDimension > 0 ? options.maxDimension : Infinity;

  return new Promise<Blob>((resolve, reject) => {
    new Compressor(file, {
      quality: options.quality,
      maxWidth: limit,
      maxHeight: limit,
      checkOrientation: true, // respect EXIF rotation
      retainExif: options.keepExif,
      mimeType,
      convertTypes: "image/png",
      convertSize,
      strict: true,
      success: resolve,
      error: reject,
    });
  });
}

/**
 * Compresses an image. Always returns the smaller of the original and the result,
 * and returns the original untouched for GIF/SVG/small files.
 */
export async function compressImage(file: File, options: CompressOptions): Promise<Blob> {
  if (!file.type.startsWith("image/") || SKIP_TYPES.has(file.type)) return file;
  if (file.size < options.minSizeBytes) return file;

  const mimeType = options.format === "jpeg" ? "image/jpeg" : options.format === "webp" ? "image/webp" : "auto";
  const convertSize = options.format === "original" ? Infinity : PNG_CONVERT_SIZE;

  let result = await runCompressor(file, options, mimeType, convertSize);

  // Some browsers silently fall back to PNG when they cannot encode WebP.
  if (mimeType === "image/webp" && result.type !== "image/webp") {
    result = await runCompressor(file, options, "image/jpeg", convertSize);
  }

  return result.size < file.size ? result : file;
}
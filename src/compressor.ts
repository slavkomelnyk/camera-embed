import Compressor from "compressorjs";

export function compressImage(file: File, quality: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
      new Compressor(file, {
        quality,
        maxWidth: 1920,
        maxHeight: 1080,
        convertSize: 0,
        success: resolve,
        error: reject,
      });
    });
  }
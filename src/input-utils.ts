export async function pickImageFromCamera(source: string = "gallery"): Promise<File | null> {
  const files = await pickImages(source);
  return files[0] ?? null;
}

export function pickImages(source: string = "gallery"): Promise<File[]> {
  return new Promise((resolve) => {
    const input = document.body.createEl("input", { cls: "camera-hidden", type: "file" });
    input.accept = "image/*";
    input.multiple = source !== "camera";
    if (source === "camera") input.setAttribute("capture", "environment");

    const timeoutId = window.setTimeout(() => {
      input.remove();
      resolve([]);
    }, 60_000);

    const cleanup = (files: File[]) => {
      window.clearTimeout(timeoutId);
      input.remove();
      resolve(files);
    };

    input.addEventListener("change", () => {
      const files = input.files;
      cleanup(files ? Array.from(files) : []);
    });

    input.click();
  });
}

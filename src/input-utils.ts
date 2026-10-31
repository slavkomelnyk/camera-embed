export type PickSource = "camera" | "gallery";

/**
 * Opens the native file/camera picker. There is deliberately no timeout:
 * on Android the user may stay in the camera app for a long time, and a timer
 * would throw the photo away. Cancelling resolves with an empty list.
 */
export function pickImages(source: PickSource = "gallery"): Promise<File[]> {
  return new Promise((resolve) => {
    const input = activeDocument.body.createEl("input", { cls: "camera-hidden", type: "file" });
    input.accept = "image/*";
    input.multiple = source !== "camera";
    if (source === "camera") input.setAttribute("capture", "environment");

    const finish = (files: File[]) => {
      input.remove();
      resolve(files);
    };

    input.addEventListener("change", () => finish(input.files ? Array.from(input.files) : []));
    input.addEventListener("cancel", () => finish([]));

    input.click();
  });
}
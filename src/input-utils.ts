export type PickSource = "camera" | "gallery";

/**
 * Opens the native file/camera picker. There is deliberately no timeout:
 * on Android the user may stay in the camera app for a long time, and a timer
 * would throw the photo away. Cancelling resolves with an empty list.
 *
 * @param container element the hidden file input is attached to (it is removed afterwards)
 */
export function pickImages(source: PickSource, container: HTMLElement): Promise<File[]> {
  return new Promise((resolve) => {
    const input = container.createEl("input", { cls: "camera-hidden", type: "file" });
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
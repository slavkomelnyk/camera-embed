export async function pickImageFromCamera(capture: boolean): Promise<File | null> {
    return new Promise((resolve) => {
      // Mobile browsers use the capture attribute to open the camera.
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      if (capture) {
        input.capture = "environment";
      }
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
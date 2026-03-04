<img width="1200" height="400" alt="Camera Embed" src="https://github.com/user-attachments/assets/39b881de-fef3-4d79-b20b-4664e334f5bc" />

## Overview

The **Obsidian Camera Embed** plugin allows Android users to capture photos directly from Obsidian, embedding them in notes with configurable compression and storage options. This plugin does not support iOS or desktop platforms.

## Features

<img width="1200" height="400" alt="Features" src="https://github.com/user-attachments/assets/a560059a-d66e-4faf-b10e-090699070ded" />

- Use the ribbon button or command palette to capture a photo on Android.
- Photos are saved next to the note or in a configurable vault folder.
- Embed the captured image at the cursor position.
- Photos are automatically compressed to reduce file size (configurable compression quality, default 0.8).

## Easy Usage

<img width="1200" height="400" alt="Usage" src="https://github.com/user-attachments/assets/95ceb496-7ff1-400c-8ef6-8d61ff11bcc0" />


Once the plugin is installed and enabled.
You can start capturing and embedding photos in your notes.

### Capture and Embed Photos

1. **Capture Photo**:
   - Use the ribbon button in the top bar (camera icon) to open your Android device’s camera.
   - Alternatively, use the **Capture photo and embed** command from the command palette .
   

1. **Save the Photo**:
   - The photo will be saved either in the folder next to your note or in a configured photos folder within your vault (configured in settings).

2. **Compression**:
   - If enabled, the photo will automatically be compressed before being saved, reducing file size based on your chosen quality setting.

3. **Embed in Markdown**:
   - The plugin will automatically insert a markdown image link at the current cursor position in your active note.

### Settings

- **Photos Folder**: Set a vault-relative path (e.g., `Attachments/Camera`). Leave blank to store photos next to the note.
- **Create Folder if Missing**: Toggle to automatically create the folder if it doesn't exist.
- **Save Near The Note**: Toggle to put image near note.
- **Compress Photos**: Enable photo compression.
- **Compress Quality**: Set the compression quality (default: 0.8, range: 0 to 1).
- **Picker Menu**: Enable picker menu to choose gallery or camera.

## More Information here: [Manual Installation](MANUAL_INSTALLATION.md)
## Change Log: [CHANGELOG](CHANGELOG.md)

## License

MIT

## Third-Party Libraries
- `compressorjs` – MIT License
- `esbuild` – MIT License
- `obsidian` – MIT License
- `typescript` – Apache 2.0 License

### © 2026 camera-embed

---

<img alt="Camera Embed" src="https://github.com/user-attachments/assets/2d81d46a-b70d-451b-85a1-ad563cabe964" />

## Overview

The **Obsidian Camera Embed** plugin lets you capture photos directly from Obsidian and embed them in your notes, with configurable compression and storage options. A built-in gallery lets you browse, search and reuse the photos you already have.

It is designed primarily for **Android**. The gallery, right-click menu and drag and drop also work on desktop. iOS is not supported.

**Requires Obsidian 1.13.0 or newer.**

## Features

<img alt="Features" src="https://github.com/user-attachments/assets/a560059a-d66e-4faf-b10e-090699070ded" />

- Use the ribbon button or command palette to capture a photo on Android.
- Photos are saved next to the note or in a configurable vault folder, optionally sorted into year and month folders.
- Embed the captured image at the cursor position.
- Compress photos to reduce file size, with simple presets or full expert controls.
- Choose between taking a new photo and picking an existing one (optional image picker).
- Browse your photos in a gallery: search, sort, group by month and zoom. It updates live when photos change.
- Right-click a photo (long-press on mobile) to insert it at a set width, preview it, rename it, see which notes use it, or delete it.
- Desktop: drag image files into the gallery, and drag thumbnails from the sidebar gallery into a note.

## Usage

<img alt="Usage" src="https://github.com/user-attachments/assets/95ceb496-7ff1-400c-8ef6-8d61ff11bcc0" />

After enabling the plugin, you can capture and embed photos in your notes.

### Capture and Embed Photos

1. **Capture Photo**:
   - Use the ribbon button in the top bar (camera icon) to open your Android device’s camera.
   - Alternatively, use the **Capture photo and embed** command from the command palette.

2. **Save the Photo**:
   - The photo is saved in the configured photos folder in your vault, or next to your note if **Save near the note** is on.

3. **Compression**:
   - If enabled, the photo is compressed before being saved, based on your chosen compression settings.

4. **Embed in Markdown**:
   - The plugin inserts a markdown image link at the cursor position in your active note. The note must be in editing mode.

### Gallery

1. Turn on **Enable gallery** in the plugin settings.
2. The ribbon button now opens the gallery. Select one or more photos and press **Use it**, or right-click a photo for more actions.
3. Use **Upload to gallery** to add photos. On mobile, **Take photo to gallery** opens the camera.
4. On desktop, run **Open camera gallery in sidebar** to keep the gallery next to your notes and drag photos into them. You can also drag image files from your computer into the gallery to save a copy in your vault.

### Image Picker

Turn on **Enable image picker** to get a prompt asking whether to take a new photo or pick an existing one. The image picker and the gallery cannot be on at the same time.

### Settings

**Choose photo**
- **Enable image picker**: choose between taking a photo and picking an existing one.
- **Enable gallery**: use the gallery instead of taking a photo directly.
- **Open gallery in sidebar** (desktop): open the gallery in the right sidebar from the ribbon button.

**Gallery**
- **Default sort**: newest first, oldest first, name, or largest first.
- **Show**: the photos folder only (default), or the whole vault. Choose the whole vault to see photos saved next to notes.
- **Group by month**: add month headings when sorted by date.

**Photo storage**
- **Photos folder**: a vault-relative path (for example `Attachments/Camera`).
- **Organize photos by month**: save photos in year and month folders.
- **Create folder if missing**: create the photos folder automatically.
- **Save near the note**: save photos beside the current note instead of in the photos folder.

**Image compression**
- **Compress images**: turn compression on. It applies to camera photos, picked photos and gallery uploads.
- **Minimal mode**: choose Light (85% quality, up to 3000 px), Balanced (75%, up to 2048 px, recommended) or Strong (60%, up to 1600 px, smallest files).
- **Expert mode**: set the quality, the maximum size of the longest side in pixels (0 keeps the original size), the output format (Auto, keep original, JPEG or WebP), whether to keep EXIF metadata, and a minimum file size to compress.

Animated GIFs and SVGs are never re-encoded, and the compressed copy is only used if it is smaller than the original.

## Installation

You can install it from the Obsidian Community Store from [here](https://community.obsidian.md/plugins/camera-embed)

See: [MANUAL_INSTALLATION](https://github.com/slavkomelnyk/camera-embed/blob/main/MANUAL_INSTALLATION.md)

## Support

If you have any problems, suggestions, or bug reports, please open an issue on [GitHub](https://github.com/slavkomelnyk/camera-embed/issues).

---

© 2026 Obsidian Camera Embed Plugin  
Released under the MIT License  
[CHANGELOG](https://github.com/slavkomelnyk/camera-embed/blob/main/CHANGELOG.md)
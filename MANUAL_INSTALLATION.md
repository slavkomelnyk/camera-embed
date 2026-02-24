## Installation

### Install from Releases

1. Download the latest release: [camera-embed.zip](https://github.com/slavkomelnyk/camera-embed/releases/).
2. Open your file manager and go to `your-vault/.obsidian/plugins/` (make sure hidden files are enabled).
3. Create a folder named `android-camera/` and unzip the plugin contents there.

## Development Installation

1. `npm install`
2. `npm run build`
3. Copy `manifest.json` and `main.js` into `.obsidian/plugins/camera-embed`.

## Publishing

1. `npm run build`
2. `npm run dist` to create the `dist/` folder for release it  contain `manifest.json` and `main.js`, `styles.css` files.
It generates the `camera-embed.zip` file for manual installation.

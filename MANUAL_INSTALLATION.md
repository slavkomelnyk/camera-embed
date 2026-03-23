## Installation


### Install from Releases (Classic Install)

1. Go to the releases page of Camera Embed:
  https://github.com/slavkomelnyk/camera-embed/releases/
2. Download the latest release files:
   - `main.js`
   - `manifest.json`
   - `styles.css`

3. Open your vault folder and navigate to:
   ```
   .obsidian/plugins/
   ```

4. Create a folder named:
   ```
   camera-embed
   ```

5. Copy the downloaded files into the folder:
   ```
   .obsidian/plugins/camera-embed/
     ├── main.js
     ├── manifest.json
     └── styles.css
   ```

6. Restart Obsidian.

7. Enable the plugin in:
   `Settings → Community Plugins`

---

### Install from Releases (Fast Install)

1. Download the latest release:
   https://github.com/slavkomelnyk/camera-embed/releases/
2. Extract `camera-embed.zip`.
3. Move the extracted folder to:
   ```
   your-vault/.obsidian/plugins/
   ```
4. Ensure the folder name is:
   ```
   camera-embed
   ```
5. Restart Obsidian and enable the plugin.

---

## Development Installation

1. `npm install`
2. `npm run build`
3. Copy `manifest.json` and `main.js` into `.obsidian/plugins/camera-embed`.

## Publishing

1. `npm run build`
2. `npm run dist` to create the `dist/` folder for release it  contain `manifest.json` and `main.js`, `styles.css` files.
It generates the `camera-embed.zip` file for manual installation.

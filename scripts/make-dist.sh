#!/usr/bin/env bash
set -euo pipefail

# This script creates a dist/ directory with the necessary files for distribution and zips it up for release.
DIST_DIR="dist"
ZIP_NAME="camera-embed.zip"

# Create dist directory and copy necessary files
rm -rf "${DIST_DIR}"
mkdir -p "${DIST_DIR}"

cp "manifest.json" "main.js" "styles.css" "${DIST_DIR}/"

echo "Created dist/ with manifest.json and main.js, styles.css"

# Create zip from inside dist so no extra folder is included

(
  cd "${DIST_DIR}"
  zip -r "${ZIP_NAME}" manifest.json main.js styles.css
)

echo "Created ${DIST_DIR}/${ZIP_NAME}"

import { readFileSync, writeFileSync } from "fs";

const targetVersion = process.env.npm_package_version; // Target version from package.json

// Read minAppVersion from manifest.json and update its version to the target version
const manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
const { minAppVersion } = manifest;
manifest.version = targetVersion; // Set the manifest version to the target version
writeFileSync("manifest.json", JSON.stringify(manifest, null, "\t"));

// Read versions.json and check if the target version already exists
const versions = JSON.parse(readFileSync('versions.json', 'utf8'));

// If the target version is not already in versions.json, add it with minAppVersion as the value
if (!versions[targetVersion]) {
    versions[targetVersion] = minAppVersion;
    writeFileSync('versions.json', JSON.stringify(versions, null, '\t'));
} else {
    console.log(`Version ${targetVersion} already exists in versions.json. Skipping update.`);
}

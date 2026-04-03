import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mcpRoot = path.resolve(__dirname, "..");
const sourceManifestPath = path.join(mcpRoot, "package.json");
const backupManifestPath = path.join(mcpRoot, ".package.json.backup");
const uiGrabManifestPath = path.resolve(mcpRoot, "../grab/package.json");

const sourceManifestRaw = fs.readFileSync(sourceManifestPath, "utf8");
const sourceManifest = JSON.parse(sourceManifestRaw);
const uiGrabManifest = JSON.parse(fs.readFileSync(uiGrabManifestPath, "utf8"));

if (fs.existsSync(backupManifestPath)) {
  throw new Error(
    `Refusing to overwrite existing manifest backup at ${backupManifestPath}`,
  );
}

if (sourceManifest.dependencies?.["ui-grab"] !== "workspace:*") {
  throw new Error(
    "packages/mcp/package.json must keep ui-grab pinned to workspace:* in source control",
  );
}

const packagedManifest = {
  ...sourceManifest,
  version: uiGrabManifest.version,
  dependencies: {
    ...sourceManifest.dependencies,
    "ui-grab": uiGrabManifest.version,
  },
};

fs.writeFileSync(backupManifestPath, sourceManifestRaw);
fs.writeFileSync(
  sourceManifestPath,
  JSON.stringify(packagedManifest, null, 2) + "\n",
);

console.log(
  `Prepared publish manifest for ui-grab-mcp@${packagedManifest.version}`,
);

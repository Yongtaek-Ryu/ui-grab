import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mcpRoot = path.resolve(__dirname, "..");
const sourceManifestPath = path.join(mcpRoot, "package.json");
const backupManifestPath = path.join(mcpRoot, ".package.json.backup");

if (!fs.existsSync(backupManifestPath)) {
  console.log("No packaged manifest backup found.");
  process.exit(0);
}

fs.copyFileSync(backupManifestPath, sourceManifestPath);
fs.rmSync(backupManifestPath);

console.log("Restored source manifest.");

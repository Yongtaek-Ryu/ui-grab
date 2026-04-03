import fs from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const runtimeRoot = path.resolve(__dirname, "../../ui-grab-runtime");
const cliRoot = path.resolve(__dirname, "../../cli");
const repoRoot = path.resolve(__dirname, "../../..");

const ensureSourceBuilds = () => {
  console.log("Building internal source packages before packaging...");
  execSync(
    "pnpm turbo run build --filter=@ui-grab/runtime --filter=@ui-grab/cli",
    {
      cwd: repoRoot,
      stdio: "inherit",
    },
  );
};

const copyDirectoryContents = (
  sourceDir,
  destDir,
  label,
  options = { replaceDestination: true },
) => {
  if (!fs.existsSync(sourceDir)) {
    console.error(
      `Missing ${label} at ${sourceDir}. Run 'pnpm build' at the repo root first.`,
    );
    process.exit(1);
    return;
  }

  if (options.replaceDestination && fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true });
  }

  fs.mkdirSync(destDir, { recursive: true });
  fs.cpSync(sourceDir, destDir, { recursive: true, force: true });

  const copiedItems = fs.readdirSync(sourceDir);
  console.log(`Copied ${copiedItems.length} items from ${label}`);
};

const recreateDistDirectory = () => {
  const distDir = path.join(packageRoot, "dist");
  const sourceDir = path.join(packageRoot, "src");

  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true });
  }

  if (fs.existsSync(sourceDir)) {
    fs.rmSync(sourceDir, { recursive: true });
  }

  fs.mkdirSync(distDir, { recursive: true });
};

const copyReadme = () => {
  const sourceReadme = path.join(repoRoot, "README.md");
  const destReadme = path.join(packageRoot, "README.md");

  if (!fs.existsSync(sourceReadme)) {
    throw new Error(`README.md not found at ${sourceReadme}`);
  }

  fs.copyFileSync(sourceReadme, destReadme);
  console.log("Copied root README.md to ui-grab/README.md");
};

const syncPackageManifest = () => {
  const runtimePackageJson = path.join(runtimeRoot, "package.json");
  const cliPackageJson = path.join(cliRoot, "package.json");
  const destPackageJson = path.join(packageRoot, "package.json");

  const runtimePackage = JSON.parse(
    fs.readFileSync(runtimePackageJson, "utf8"),
  );
  const cliPackage = JSON.parse(fs.readFileSync(cliPackageJson, "utf8"));
  const destPackage = JSON.parse(fs.readFileSync(destPackageJson, "utf8"));

  destPackage.version = runtimePackage.version;
  destPackage.dependencies = {
    ...cliPackage.dependencies,
    ...Object.fromEntries(
      Object.entries(runtimePackage.dependencies ?? {}).filter(
        ([dependencyName]) => dependencyName !== "@ui-grab/cli",
      ),
    ),
  };
  destPackage.peerDependencies = runtimePackage.peerDependencies;
  destPackage.peerDependenciesMeta = runtimePackage.peerDependenciesMeta;
  destPackage.engines = runtimePackage.engines ?? destPackage.engines;

  fs.writeFileSync(
    destPackageJson,
    JSON.stringify(destPackage, null, 2) + "\n",
  );
  console.log(`Synced package manifest: ${destPackage.version}`);
};

const copyLicense = () => {
  const sourceLicense = path.join(repoRoot, "LICENSE");
  const destLicense = path.join(packageRoot, "LICENSE");

  if (fs.existsSync(sourceLicense)) {
    fs.copyFileSync(sourceLicense, destLicense);
    console.log("Copied LICENSE");
  }
};

const main = () => {
  console.log("Building ui-grab package...\n");

  ensureSourceBuilds();
  recreateDistDirectory();
  copyDirectoryContents(
    path.join(runtimeRoot, "dist"),
    path.join(packageRoot, "dist"),
    "ui-grab-runtime/dist",
  );
  copyDirectoryContents(
    path.join(cliRoot, "dist"),
    path.join(packageRoot, "dist"),
    "cli/dist",
    { replaceDestination: false },
  );
  copyReadme();
  syncPackageManifest();
  copyLicense();

  console.log("\nDone!");
};

main();

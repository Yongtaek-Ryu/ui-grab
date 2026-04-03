import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import test from "node:test";
import assert from "node:assert/strict";

const CANONICAL_REPOSITORY_URL = "https://github.com/kyleryu98/ui-grab";
const CANONICAL_ISSUES_URL = `${CANONICAL_REPOSITORY_URL}/issues`;
const CANONICAL_GIT_URL = "git+https://github.com/kyleryu98/ui-grab.git";

const unsupportedNpmConfigEnvKeys = new Set([
  "npm_config_globalconfig",
  "npm_globalconfig",
  "npm_config_recursive",
  "pnpm_config_recursive",
  "npm_config_verify_deps_before_run",
  "pnpm_config_verify_deps_before_run",
  "npm_config__jsr_registry",
  "pnpm_config__jsr_registry",
]);
const npmCommandEnv = Object.fromEntries(
  Object.entries(process.env).filter(
    ([key]) => !unsupportedNpmConfigEnvKeys.has(key.toLowerCase()),
  ),
);

test("packed package manifest does not leak workspace dependencies", () => {
  const packageRoot = path.resolve(import.meta.dirname, "..");
  const sourceManifestPath = path.join(packageRoot, "package.json");
  const backupManifestPath = path.join(packageRoot, ".package.json.backup");
  const originalManifest = readFileSync(sourceManifestPath, "utf8");
  const tempRoot = mkdtempSync(path.join(os.tmpdir(), "ui-grab-mcp-pack-"));

  try {
    const sourceManifest = JSON.parse(originalManifest);
    assert.equal(sourceManifest.dependencies["ui-grab"], "workspace:*");

    const packResult = execFileSync(
      "npm",
      ["pack", "--json", "--pack-destination", tempRoot],
      {
        cwd: packageRoot,
        encoding: "utf8",
        env: npmCommandEnv,
      },
    );
    const jsonMatch = packResult.match(/(?:^|\n)(\[\s*\{[\s\S]*\])\s*$/);
    assert.ok(jsonMatch, "npm pack did not return JSON output");

    const [{ filename }] = JSON.parse(jsonMatch[1]);

    execFileSync("tar", ["-xzf", path.join(tempRoot, filename)], {
      cwd: tempRoot,
    });

    const packedManifest = JSON.parse(
      readFileSync(path.join(tempRoot, "package", "package.json"), "utf8"),
    );

    assert.equal(packedManifest.dependencies["ui-grab"], packedManifest.version);
    assert.equal(packedManifest.homepage, CANONICAL_REPOSITORY_URL);
    assert.equal(packedManifest.bugs.url, CANONICAL_ISSUES_URL);
    assert.equal(packedManifest.repository.url, CANONICAL_GIT_URL);
    assert.ok(
      !packedManifest.dependencies["ui-grab"].startsWith("workspace:"),
      "packed manifest still contains a workspace protocol dependency",
    );
  } finally {
    assert.equal(
      readFileSync(sourceManifestPath, "utf8"),
      originalManifest,
      "npm pack should restore the source manifest",
    );
    assert.equal(
      existsSync(backupManifestPath),
      false,
      "packaging backup should be removed after npm pack",
    );
    rmSync(tempRoot, { recursive: true, force: true });
  }
});

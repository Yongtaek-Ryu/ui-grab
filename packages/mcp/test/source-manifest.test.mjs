import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

const CANONICAL_REPOSITORY_URL = "https://github.com/kyleryu98/ui-grab";
const CANONICAL_ISSUES_URL = `${CANONICAL_REPOSITORY_URL}/issues`;
const CANONICAL_GIT_URL = "git+https://github.com/kyleryu98/ui-grab.git";

test("source manifest stays stable after build", () => {
  const packageRoot = path.resolve(import.meta.dirname, "..");
  const manifest = JSON.parse(
    readFileSync(path.join(packageRoot, "package.json"), "utf8"),
  );

  assert.equal(manifest.dependencies["ui-grab"], undefined);
  assert.equal(
    existsSync(path.join(packageRoot, ".package.json.backup")),
    false,
    "packaging backup should not be left behind after build",
  );
});

test("public package manifests keep canonical repository metadata", () => {
  const repoRoot = path.resolve(import.meta.dirname, "../../..");
  const packageManifestPaths = [
    path.join(repoRoot, "packages/grab/package.json"),
    path.join(repoRoot, "packages/mcp/package.json"),
  ];

  for (const manifestPath of packageManifestPaths) {
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

    assert.equal(manifest.homepage, CANONICAL_REPOSITORY_URL);
    assert.equal(manifest.bugs.url, CANONICAL_ISSUES_URL);
    assert.equal(manifest.repository.url, CANONICAL_GIT_URL);
  }
});

test("built client declarations stay self-contained", () => {
  const packageRoot = path.resolve(import.meta.dirname, "..");
  const clientTypes = readFileSync(
    path.join(packageRoot, "dist", "client.d.ts"),
    "utf8",
  );

  assert.doesNotMatch(clientTypes, /ui-grab\/core/);
});

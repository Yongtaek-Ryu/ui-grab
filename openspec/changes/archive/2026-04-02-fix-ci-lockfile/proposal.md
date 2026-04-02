# Proposal

## Why

GitHub Actions runs `pnpm install` in a CI environment, which enables frozen lockfile behavior by default. The committed `packages/mcp/package.json` depended on `ui-grab` at `0.1.32`, which made pnpm resolve from the npm registry instead of the local workspace. Since `ui-grab@0.1.32` is not published yet, both CI jobs failed during dependency installation before any build or test steps ran.

## What Changes

- Restore the MCP package's source dependency on `ui-grab` to `workspace:*`.
- Keep the workspace lockfile aligned with the committed manifests.
- Re-run the same install/build/test commands used by CI.

## Non-Goals

- Changing release/versioning strategy.
- Refactoring package build scripts.

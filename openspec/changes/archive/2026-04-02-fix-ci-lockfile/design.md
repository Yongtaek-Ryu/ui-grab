# Design

## Decision

Use `workspace:*` for the source dependency from `packages/mcp` to `ui-grab`, then regenerate the lockfile.

## Rationale

The MCP package depends on another workspace package during development and CI. Using a plain semver dependency makes pnpm fetch from the registry, which fails for unpublished versions. The existing build script can still rewrite the manifest for packaging, but the committed source manifest must keep the workspace protocol so installs are deterministic in development and CI.

## Verification

- `pnpm install --frozen-lockfile`
- `pnpm build`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm --filter @react-grab/cli test`

# package-publishing Specification

## Purpose

Define the contract between source manifests used in the workspace and publish-time manifests shipped in package tarballs.

## Requirements

### Requirement: Source manifests stay workspace-compatible

Committed package manifests that depend on workspace packages MUST keep workspace protocol dependencies so clean installs and frozen lockfile checks remain deterministic in development and CI.

#### Scenario: CI installs the workspace from git

Given a clean checkout of this repository
When CI runs `pnpm install --frozen-lockfile`
Then `packages/mcp/package.json` keeps `ui-grab` pinned to `workspace:*`
And the install does not require an unpublished registry version of `ui-grab`.

### Requirement: Build does not rewrite source manifests

Package build commands MUST NOT rewrite committed source manifests as part of producing build artifacts.

#### Scenario: MCP package build finishes

Given `packages/mcp/package.json` is committed with `ui-grab` set to `workspace:*`
When maintainers run the MCP build
Then the source manifest remains unchanged in the working tree
And no temporary packaging backup files remain.

### Requirement: Packaged tarballs use publishable dependencies

Published or packed artifacts MUST replace workspace protocol dependencies with publishable versioned dependencies without leaving the source manifest dirty after packaging.

#### Scenario: npm pack builds ui-grab-mcp

Given the MCP package is packed for distribution
When `npm pack` finishes
Then the tarball manifest depends on the matching `ui-grab` version
And the source manifest is restored to the workspace form after packaging.

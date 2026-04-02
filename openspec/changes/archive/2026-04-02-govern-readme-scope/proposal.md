# Proposal

## Why

The root README is the main user entrypoint for the repository and the published `ui-grab` package. It should explain what the package does, how to install it, and how to use it. Maintainer-only release operations such as npm trusted publishing setup or token hardening do not belong in that document.

## What Changes

- Remove maintainer-only verification and publishing instructions from the root README and packaged README copy.
- Move release and trusted publishing guidance to `CONTRIBUTING.md`.
- Add an OpenSpec requirement that defines what README files may and may not contain.

## Non-Goals

- Changing package behavior or release automation.
- Reintroducing translated READMEs.

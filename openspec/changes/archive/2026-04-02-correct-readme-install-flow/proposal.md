# Proposal

## Why

The current README no longer contains maintainer-only publishing guidance, but two user-facing parts are still too loose:

- the install section mixes guided CLI setup with manual dependency installation
- the quick start steps do not clearly describe the actual activation-then-click flow

That can make new users perform unnecessary install steps or misunderstand how the picker starts.

## What Changes

- Separate guided setup from manual dependency installation in the root README.
- Correct the quick start flow to match the implemented keyboard activation and click-to-copy behavior.
- Keep the packaged `packages/grab/README.md` copy aligned with the root README.

## Non-Goals

- Changing CLI behavior or activation shortcuts.
- Reworking maintainer documentation outside the README.

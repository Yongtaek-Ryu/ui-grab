# Proposal

## Summary

Allow `Cmd+C` / `Ctrl+C` keyboard activation to enter grouped prompt selection once the user starts `Shift + click` selection, without changing the existing single-click copy flow. At the same time, refine the selection prompt panel so it stays centered on the selected element(s) and adopts a subtler liquid-glass visual treatment without changing the existing layout.

## Why

The current runtime treats toolbar activation and keyboard activation differently. Toolbar activation already supports grouped prompt selection, while keyboard activation keeps the plain copy flow only. That mismatch means `Shift + click` after keyboard activation can miss the grouped-selection path and fall into the wrong overlay behavior.

The prompt panel also feels visually heavier than the rest of the overlay and can appear biased toward the click position instead of the selected element, which makes placement feel inconsistent.

## Scope

- Allow keyboard activation to transition into grouped prompt selection once `Shift + click` begins.
- Keep grouped selection waiting until `Shift` is released before entering prompt mode.
- Recenter the prompt/copy panel on the active selection instead of the raw click point when appropriate.
- Refresh the panel surface styling with a restrained liquid-glass treatment.
- Add or update tests that cover the keyboard multi-select workflow and panel placement behavior.

## Out of Scope

- Reworking the overall toolbar layout.
- Replacing the existing single-click copy behavior for plain keyboard activation.
- Large visual redesigns outside the selection/prompt panel surface.

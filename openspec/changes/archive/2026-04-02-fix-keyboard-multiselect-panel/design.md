# Design

## Keyboard Shift Bridge

Keyboard activation should keep its existing single-click copy behavior. The fix only needs to bridge into grouped prompt selection when the user actually starts a `Shift + click` gesture.

That means:

1. Plain keyboard activation still behaves like today.
2. The first `Shift + click` arms grouped prompt selection on demand.
3. Once armed, subsequent `Shift + click` updates the frozen grouped selection.
4. Releasing `Shift` opens prompt mode for the grouped selection.

## Shift Multi-Select Flow

When grouped prompt selection is armed from `Shift + click`:

1. Keyboard activation remains active.
2. `Shift + click` toggles elements into the grouped frozen selection.
3. Prompt mode only begins when `Shift` is released.

This preserves the existing toolbar behavior while fixing the mismatch for keyboard-triggered activation.

## Prompt Panel Positioning

Hover labels can still use the pointer as an anchor because they act like a cursor-adjacent affordance. Prompt and completion surfaces should instead anchor to the selection center so they feel stable and intentional, especially after click activation or grouped selection.

## Visual Refinement

Keep the current compact structure:

- Tag/header row
- Divider
- Textarea or status row
- Compact action button

Only adjust the surface treatment:

- Semi-translucent fill
- Subtle backdrop blur
- Soft outer shadow and inner highlight
- Slightly more polished divider and control contrast

This keeps the UI familiar while reducing the “solid white pill” feel.

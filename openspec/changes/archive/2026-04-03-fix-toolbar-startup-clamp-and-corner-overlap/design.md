# Design

## Startup Clamping
Measure the scaled toolbar after mount and after any persisted scale has been applied, then run a non-animated viewport clamp using the actual rendered rect. This avoids using stale pre-scale dimensions for the initial position.

## Corner Controls
Keep the collapse button in the trailing action rail and move the resize handle into its own anchored slot with edge-aware offsets sized to clear the collapse control footprint. The handle remains visually attached to the free corner, but no longer sits on top of the button.

## Verification
Add Playwright checks that the toolbar stays fully within the viewport on startup and that the resize handle bounding box does not intersect the collapse button bounding box for representative edge states.

# Proposal

## Why
- The toolbar can initially render partially buried against the viewport edge before its scaled dimensions settle.
- The resize handle and collapse control can overlap in compact states, making the controls ambiguous and hard to hit.

## What Changes
- Re-clamp the toolbar after its measured size and scale settle on startup so the full control stays visible.
- Separate the trailing toolbar controls so the resize handle occupies a dedicated non-overlapping slot.
- Add regression coverage for startup visibility and corner-control separation.

## Impact
- Prevents first-render edge clipping.
- Keeps resize and collapse interactions visually distinct and reliably clickable.

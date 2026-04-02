## Overview

The current runtime already has all primitives needed for multi-selection: frozen elements, drag selection, prompt mode, comment storage, and feedback rendering. The missing part is a built-in interaction path that toggles elements into the frozen selection set while `Shift` is held, then enters prompt mode for the accumulated set when `Shift` is released.

## Decisions

1. Add explicit built-in state for `Shift` multi-selection in the core store instead of a plugin-level helper.
2. Reuse the existing frozen element array as the source of truth for prompt submission and copy behavior.
3. Intercept `Shift+click` in the main pointer handlers so non-adjacent elements can be toggled without opening the prompt immediately.
4. Preserve the existing prompt UI and comments dropdown instead of introducing a custom UI.
5. Clear the multi-selection on successful copy, explicit escape, or full deactivation.
6. Update the root README with bilingual usage notes and attribution.

## Rationale

- runtime-level behavior is portable across projects and does not require framework-specific injection code
- reusing the existing prompt and history flow avoids UI divergence and reduces maintenance risk
- storing the selection in the same frozen-elements state keeps comments, copy, and visual feedback aligned

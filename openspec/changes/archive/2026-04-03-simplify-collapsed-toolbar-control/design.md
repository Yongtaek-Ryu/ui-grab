# Design

## Visual Thesis

The collapsed toolbar should read as one quiet glass orb pinned to the edge, not a mini panel containing another button.

## Content Plan

- Primary control: one circular chevron button that signals expand.
- Support chrome: none while collapsed.
- Detail: preserve the existing edge-aware chevron rotation and positioning.
- Final action: clicking the orb re-expands the toolbar.

## Interaction Thesis

- Collapse should visually compress into a single control with no leftover frame.
- The orb keeps the same light glass language as the expanded toolbar, but with tighter focus and less mass.
- The collapsed footprint should match the visible control so centering and saved positions remain stable.

## Decision

Keep the collapsed DOM structure compatible with existing positioning logic, but remove the outer shell treatment and size it to the control footprint.

- The shell container remains in place for measurement, positioning, and click handling.
- In the collapsed state, the shell loses its border, background gradient, shadow, padding, and highlight overlays.
- The default collapse affordance becomes a single circular glass button sized large enough to remain discoverable after the shell is removed.
- Collapsed toolbar regression coverage should compare the shell footprint to the visible button instead of only comparing their centers.

## Consequences

- The bottom collapsed toolbar looks lighter and more deliberate.
- Edge snapping and expand-from-collapsed math keep working because the shell element still owns the measured footprint.
- Persisted collapsed positions stay stable once the collapsed size constants match the new circular control.

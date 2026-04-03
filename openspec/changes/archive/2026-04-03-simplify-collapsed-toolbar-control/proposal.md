# Proposal

## Summary

Simplify the collapsed toolbar so the bottom-docked state shows only a single circular chevron control instead of a glass shell wrapped around it.

## Why

The collapsed toolbar currently keeps the outer liquid-glass shell and nests a smaller control inside it. That creates a double-container look that reads heavier than the expanded toolbar and makes the collapsed affordance feel less intentional.

## Scope

- Remove the extra collapsed shell chrome so the remaining control is just the circular expand button.
- Keep the collapsed affordance centered and aligned to the existing snap-edge positioning logic.
- Update toolbar regression coverage to verify the collapsed footprint matches the visible button.

## Out of Scope

- Redesigning the expanded toolbar surface.
- Changing collapse and expand behavior beyond the collapsed visual footprint.

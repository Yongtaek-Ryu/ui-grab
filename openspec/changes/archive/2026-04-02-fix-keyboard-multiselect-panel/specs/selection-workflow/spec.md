# selection-workflow Specification

## Purpose

Define how activation mode, grouped selection, and the selection prompt panel should behave during element capture.

## Requirements

### Requirement: Keyboard activation can arm grouped prompt selection on demand

When the picker is activated from the keyboard, it MUST keep the existing single-click copy behavior while allowing grouped prompt selection to start when the user begins a `Shift + click` gesture.

#### Scenario: keyboard activation starts grouped selection after the first Shift-click

Given the user activates the picker with `Cmd+C` on macOS or `Ctrl+C` on Windows/Linux
When the user holds `Shift` and clicks an element
Then the runtime freezes that element into a grouped selection
And prompt mode does not open until `Shift` is released.

#### Scenario: plain keyboard activation still supports single-click copy

Given the user activates the picker from the keyboard without using `Shift`
When the user clicks a single element
Then the existing single-click copy flow still runs
And the runtime does not require prompt mode first.

### Requirement: Grouped prompt selection waits for Shift release

Grouped prompt selection MUST not open the prompt while `Shift` is still held.

#### Scenario: grouped selection accumulates before prompt mode

Given the picker is in pending comment mode
When the user holds `Shift` and clicks multiple elements
Then the grouped selection stays frozen
And prompt mode does not open until `Shift` is released.

### Requirement: Prompt panel stays centered on the active selection

Prompt-oriented panel states SHOULD anchor to the selected element or grouped selection center instead of the raw click point.

#### Scenario: single-element prompt mode centers on the selection

Given the user enters prompt mode for a single selected element
When the prompt panel is rendered
Then the panel is horizontally centered on the selected element bounds unless viewport clamping requires adjustment.

#### Scenario: grouped selection prompt centers on the grouped bounds

Given the user enters prompt mode with multiple selected elements
When the prompt panel is rendered
Then the panel is anchored to the combined selection center and remains clamped within the viewport.

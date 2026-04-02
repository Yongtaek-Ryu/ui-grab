## Why

React Grab does not currently support precise non-adjacent multi-selection through `Shift+click`, which makes it awkward to collect context from separate parts of a UI.

## What Changes

- add built-in `Shift+click` multi-selection to the core runtime
- keep the original prompt UI and comment history flow for both single and multi-selection
- visually preserve selected outlines while the prompt is open
- document the new behavior in English and Korean
- rename the repository/package docs to `ui-grab` while preserving attribution to `react-grab`

## Impact

- any React Grab consumer can use non-adjacent multi-selection without app-specific helper scripts
- copied context and comment history remain consistent with the built-in renderer
- the project becomes usable as a standalone forked distribution under a separate repository

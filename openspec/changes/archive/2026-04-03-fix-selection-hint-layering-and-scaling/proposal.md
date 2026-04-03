## Why
When the comments dropdown is open, prompt/edit guidance such as `esc to cancel` and arrow-key hints can appear behind the comments surface. Those messages also keep fixed text sizing even when the toolbar scale is increased, which breaks the accessibility goal of the resizing control.

## What Changes
- raise the selection hint/prompt layer above the comments dropdown while both are visible
- make selection hints and prompt messaging scale with the toolbar size
- add focused regression coverage for overlay ordering and accessible hint scaling

## Impact
- improves edit-flow clarity when comments are open
- keeps assistive guidance readable for larger toolbar scales
- preserves the existing design system while making layering and scaling behavior consistent

# Design

- Extend dropdown anchors with the current toolbar scale so floating panels can react to live toolbar resizing.
- Recompute comments dropdown width constraints and internal size tokens from the toolbar scale instead of fixed pixel values.
- Add focused end-to-end coverage that resizes the toolbar while comments are open and asserts the comments panel grows with it.

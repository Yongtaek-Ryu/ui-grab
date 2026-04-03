# Design

- Treat comment rows as edit affordances: row click and keyboard Enter on the active row both call the edit flow.
- Preserve separate explicit actions for row-level copy and delete so panel interactions stay predictable.
- Update focused e2e coverage to assert that row clicks reopen prompt mode without mutating the clipboard, and that the copy button still copies edited content.

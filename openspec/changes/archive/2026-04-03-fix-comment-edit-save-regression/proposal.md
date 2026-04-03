## Why

Comment edit mode can reopen with the prior text but fail to persist updates when the user presses Enter. This breaks the intended inline editing workflow for stored comments.

## What Changes

- fix the comment edit submit path so edited text replaces the existing stored comment
- add regression coverage for keyboard submit updating the dropdown item content
- archive the change after verification

## ADDED Requirements

### Requirement: Comment rows reopen editing without copying

Comment history rows MUST reopen the saved prompt for editing when the user activates the row itself, and row activation MUST NOT copy content.

#### Scenario: Clicking a comment row reopens prompt mode

- **WHEN** the user clicks a saved comment row
- **THEN** the prompt editor is reopened with the saved comment text prefilled
- **AND** the saved item remains selected for in-place update
- **AND** no clipboard copy is triggered from the row click itself

### Requirement: Per-item copying stays explicit

The system MUST only copy a single saved comment when the user activates the dedicated per-item `Copy` action.

#### Scenario: Copying an edited comment uses the latest saved text

- **GIVEN** a saved comment has been edited and saved in place
- **WHEN** the user clicks that items `Copy` action
- **THEN** the clipboard payload reflects the updated saved comment content

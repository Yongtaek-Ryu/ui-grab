## ADDED Requirements

### Requirement: Comments dropdown follows toolbar accessibility sizing

The comments dropdown MUST scale with the active toolbar resize setting so users who enlarge or shrink the toolbar get matching comment panel sizing.

#### Scenario: Enlarging the toolbar enlarges the comments dropdown

- **GIVEN** the comments dropdown is open
- **WHEN** the user increases the toolbar size with the resize handle
- **THEN** the comments dropdown width and interactive control sizing increase to match the larger toolbar scale

#### Scenario: Smaller toolbar scale reduces the comments dropdown baseline size

- **GIVEN** the toolbar is rendered at a reduced scale
- **WHEN** the comments dropdown is opened
- **THEN** the comments dropdown baseline width and text sizing are reduced relative to the default scale while remaining usable

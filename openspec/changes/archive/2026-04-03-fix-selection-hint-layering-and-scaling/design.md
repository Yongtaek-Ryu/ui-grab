## Overview
The selection hint and prompt chip currently render with the same overlay depth as the comments dropdown and rely on fixed pixel tokens. This change routes toolbar scale into the relevant hint surfaces and introduces a dedicated overlay depth for selection guidance so editing instructions remain visible above the comments panel.

## Decisions
- keep the comments dropdown in its current layer and move selection guidance to a higher dedicated layer
- derive hint typography, keyboard chip sizing, and prompt shell spacing from toolbar scale using bounded scaling tokens
- keep positioning logic intact so only layering and visual scale change

## Testing
- verify hint text and keyboard chips grow when toolbar scale increases
- verify the guidance surface stays above the comments dropdown in edit/selection flows

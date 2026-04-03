## Overview

The regression is likely in the prompt submit path that updates an existing comment item. This change follows the existing comment editing flow, corrects the data source used for the updated comment text, and verifies the stored item plus dropdown view update immediately after Enter.

## Testing

- edit an existing comment item
- submit with Enter
- verify the dropdown row and stored item now reflect the edited text

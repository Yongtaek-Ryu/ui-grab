# Design

The README should distinguish between two valid setup paths:

1. guided setup through `npx ui-grab@latest init`
2. manual dependency installation for users who want to integrate by hand

The quick start should describe the default end-user path observed in the runtime and E2E suite:

1. initialize the project
2. start the dev server
3. activate UI Grab with the default keyboard shortcut unless customized
4. click to copy one element
5. use `Shift + click` for grouped selection

The packaged README copy should keep matching the root README because it is shipped with the public `ui-grab` package.

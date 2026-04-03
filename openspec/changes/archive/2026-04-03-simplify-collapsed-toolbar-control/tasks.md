# Tasks

- [x] Add an OpenSpec change for the collapsed toolbar control simplification.
- [x] Remove collapsed shell chrome so only the circular expand control remains visible.
- [x] Update toolbar Playwright coverage for the collapsed control footprint.
- [x] Run `pnpm --filter @ui-grab/runtime typecheck` and focused toolbar Playwright coverage.

## Notes

- `pnpm --filter @ui-grab/runtime typecheck`
- `pnpm --filter @ui-grab/runtime exec playwright test e2e/toolbar.spec.ts -g "collapsed bottom toolbar should collapse to the circular button footprint"`

# Proposal

## Why

The repository's localized root README files drift out of sync with the English source and create inconsistent installation and integration guidance. Keeping one maintained source of truth is more reliable than shipping many stale translations.

## What Changes

- Remove localized top-level `README.<lang>.md` files.
- Remove language switchers from the root README and the packaged README copy.
- Keep English as the only maintained top-level documentation.

## Non-Goals

- Rewriting package-level documentation beyond removing translation links.
- Changing README product messaging or installation content.

# Proposal

## Why

The repository ships many localized README files. If those translations drift from the English source, users in different languages can receive outdated installation steps, broken links, or inaccurate product descriptions.

## What Changes

- Audit each localized root README against `README.md`.
- Check for structural drift, missing sections, broken relative links, and obvious translation quality issues.
- Report findings with concrete file references.

## Non-Goals

- Updating translations in this change.
- Auditing package-level README files unless they are referenced by the root translation set.

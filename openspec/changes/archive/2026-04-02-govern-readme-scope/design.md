# Design

## README Boundary

The root README and the packaged `packages/grab/README.md` copy should stay focused on end users:

- product description
- package names
- installation commands
- quick start usage
- framework setup
- public exports
- support and license links

Anything that is only relevant to maintainers should move out of README. That includes:

- npm trusted publishing setup
- token rotation or hardening steps
- release-only validation commands such as `npm publish --dry-run`
- internal or administrative workflow notes

## Maintainer Location

Maintainer-only operational content belongs in `CONTRIBUTING.md`, where contributors and maintainers already look for development and release procedures.

## Spec Recording

Add an OpenSpec capability for README governance so future documentation edits have an explicit boundary to follow.

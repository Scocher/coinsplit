# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root, when present
- **`docs/adr/`** at the repo root, when present

If these files do not exist yet, proceed silently. Do not flag their absence or suggest creating them upfront.

## File structure

This repo uses a single-context layout:

```
/
├── CONTEXT.md
├── docs/adr/
└── src/
```

## Use the glossary's vocabulary

When naming domain concepts in issues, plans, tests, or code comments, use the terms defined in `CONTEXT.md`.

## Flag ADR conflicts

If a proposed change contradicts an existing ADR, surface it explicitly instead of silently overriding it.

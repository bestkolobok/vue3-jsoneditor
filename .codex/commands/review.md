---
name: review
description: Review changes in this repository for correctness, API safety, docs impact, and test coverage.
argument-hint: |
  PATHS: <optional list of files or dirs>
  Leave blank to review current changes
disable-model-invocation: true
---

Review checklist:

- Public API compatibility preserved unless intentionally changed.
- `v-model`, `v-model:json`, and `v-model:text` behavior still matches mode expectations.
- SSR-sensitive code remains guarded from browser-only globals.
- Plugin registration and exports remain intact.
- Runtime style or fullscreen helpers do not leak duplicate DOM state.
- Generated artifacts were not hand-edited.
- `README.md` is updated if public behavior changed.
- Tests cover risky logic changes.
- Validation scope is appropriate: `pnpm lint`, `pnpm test`, `pnpm type-check`, and `pnpm build` when needed.

Task: review current diff / $ARGUMENTS

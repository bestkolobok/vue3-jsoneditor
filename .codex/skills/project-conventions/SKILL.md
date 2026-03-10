---
name: project-conventions
description: Repo conventions for the vue3-ts-jsoneditor package. Load when changing code, tests, docs, or release-related behavior in this repo.
---

Use these files as the source of truth:

- `AGENTS.md`
- `README.md`
- `package.json`
- `src/types.ts`
- `src/JsonEditorPlugin.ts`
- `src/components/JsonEditor.vue`
- `tests/unit/*`

Always follow:

- This repo is a published library, not just a demo app. Prefer API-safe, minimal changes.
- Preserve current public exports:
  - default component export;
  - named `JsonEditorPlugin` export;
  - generated declaration output from the library build.
- Keep behavior consistent across `tree`, `text`, and `table` modes.
- Keep browser-only logic guarded so SSR consumers do not break.
- Do not hand-edit generated output: `dist/`, `coverage/`, `gh-dist/`, `*.tgz`, `tsconfig.tsbuildinfo`.
- If a change affects public behavior, update `README.md`.
- Add or update unit tests for risky behavior changes.
- Use `pnpm` commands from `package.json`.
- Prefer MCP Context7 first for third-party docs and exact API usage for Vue, Vite, Vitest, ESLint, and ecosystem packages.
  If Context7 is required for an exact API decision and is unavailable, stop and say so instead of guessing.

Validation defaults:

- `pnpm lint`
- `pnpm test`
- `pnpm type-check`
- `pnpm build` for packaging or public API changes

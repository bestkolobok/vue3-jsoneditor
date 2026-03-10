# AGENTS.md

## Project Scope

This repository contains `vue3-ts-jsoneditor`, a Vue 3 wrapper/plugin around `vanilla-jsoneditor`.
Primary goals when changing code:

- keep the public component API stable unless the task explicitly changes it;
- preserve SSR-safe behavior and lazy loading behavior;
- keep the package buildable as a published library, not just as a demo app.

## Stack

- Vue 3
- TypeScript
- Vite 7
- Vitest 4
- ESLint 9
- `pnpm` workspace with a single package

Node requirement from `package.json`: `>=20.19.0`.

## Repository Map

- `src/components/JsonEditor.vue`: main wrapper component and the highest-risk file for behavior changes.
- `src/JsonEditorPlugin.ts`: plugin install entry and exported library surface.
- `src/components/utils.ts`: content/model conversion helpers.
- `src/components/styles-handler.ts`: runtime style injection helpers.
- `src/components/full-width-button-handler.ts`: fullscreen button behavior.
- `src/components/string-styles.ts`: CSS string assets injected at runtime.
- `src/components/index.ts`: component export barrel.
- `src/types.ts`: shared public types.
- `tests/unit/*.spec.ts`: unit coverage for component behavior, plugin install, utils, and handlers.
- `README.md`: public usage documentation and API notes.

## Source Of Truth

- Treat `src/**` and `tests/**` as editable source.
- Treat `dist/`, `coverage/`, `gh-dist/`, `node_modules/`, `tsconfig.tsbuildinfo`, and `*.tgz` artifacts as generated output. Do not hand-edit them unless the user explicitly asks.
- If a change affects public props, events, plugin options, or install behavior, update `README.md`.
- For third-party library/framework APIs, prefer MCP Context7 first. If exact API behavior is uncertain and Context7 is unavailable, do not guess.

## Working Rules

- Prefer minimal, API-safe changes. This package is a published library, so regressions in emitted events, `v-model` behavior, SSR, or plugin registration are high impact.
- Preserve current naming and export compatibility:
  - default component export;
  - named `JsonEditorPlugin` export;
  - generated type declarations from the library build.
- Keep browser-only logic guarded so SSR consumers do not break.
- Preserve behavior across supported modes: `tree`, `text`, and `table`.
- When changing DOM helpers or style injection, check for duplicate insertion, cleanup behavior, and test isolation.
- When changing model synchronization, validate both `modelValue` and explicit `json` / `text` bindings.

## Commands

Prefer `pnpm` in this repo.

- Install deps: `pnpm install`
- Dev server: `pnpm dev`
- Lint: `pnpm lint`
- Auto-fix lint: `pnpm lint:fix`
- Type check: `pnpm type-check`
- Unit tests: `pnpm test`
- Coverage: `pnpm test:coverage`
- Build library: `pnpm build`
- Pack publishable tarball: `pnpm pack`

## Validation Expectations

- For code changes, run `pnpm lint`, `pnpm test`, and `pnpm type-check` when relevant.
- For public API or packaging changes, also run `pnpm build`.
- If you cannot run a validation step, say so explicitly in the handoff.

## Testing Guidance

- Add or update unit tests in `tests/unit/` for any behavior change.
- Favor targeted tests around:
  - emitted events;
  - `v-model` sync behavior;
  - plugin installation;
  - fullscreen/style helper side effects;
  - SSR-sensitive guards.

## Release Notes

- Releases are handled through `semantic-release`.
- Commit messages should remain compatible with Conventional Commits.
- Do not manually edit release artifacts unless the task is specifically about release automation.

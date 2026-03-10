---
name: implement
description: Implement a change in this library while preserving public API stability and SSR safety.
argument-hint: |
  TASK: Fix text-mode model sync when invalid JSON is temporarily entered
disable-model-invocation: true
---

Before coding:

- Load `.codex/skills/project-conventions/SKILL.md`.
- Read the exact source files and matching unit tests first.
- Check whether the task affects public docs in `README.md`.

When coding:

- Keep changes minimal and reviewable.
- Preserve library exports and install behavior.
- Keep browser-only code guarded.
- Validate behavior across relevant modes: `tree`, `text`, `table`.
- For exact third-party APIs or current library usage, use MCP Context7 first instead of guessing.
- Add or update unit tests for changed behavior.

After coding, run the relevant validation commands from `package.json`.

Task: $ARGUMENTS

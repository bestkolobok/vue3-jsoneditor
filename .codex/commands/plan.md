---
name: plan
description: Inspect the task and propose an implementation plan aligned with this package's public API and test strategy.
argument-hint: |
  TASK: Add a new prop to JsonEditor without breaking existing v-model behavior
disable-model-invocation: true
---

Before planning:

- Load `.codex/skills/project-conventions/SKILL.md`.
- Read the relevant source and tests before proposing changes.
- Identify whether the task affects:
  - public component props or events;
  - plugin install behavior;
  - SSR guards;
  - runtime style or DOM helpers;
  - build/package output;
  - README usage docs.

Plan output should include:

- touched files;
- main behavior risks;
- test updates needed;
- validation commands to run.

Task: $ARGUMENTS

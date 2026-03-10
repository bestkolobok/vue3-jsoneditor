---
name: help
description: List available Codex commands for this repository.
argument-hint: |
  <optional filter>
  Example: implement
---

List all command files in `.codex/commands` except this file and show:

- command name;
- short description from front matter;
- argument hint if present.

If `$ARGUMENTS` is provided, filter by case-insensitive substring match on the command name.

Invocation:

- `/command-name`
- `Use command: command-name`

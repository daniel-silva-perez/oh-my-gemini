---
name: planning
description: Build a concrete implementation plan with acceptance criteria, bounded steps, and verification commands.
triggers:
  - plan
  - roadmap
  - implementation path
---

When invoked:
1. Clarify the desired outcome.
2. Convert it into acceptance criteria.
3. Break the work into bounded steps.
4. Assign verification commands or checks.
5. Save durable artifacts under `.omg/plans/` when the workflow supports it.

**Sisyphus Protocol Note:**
As an orchestrator, ensure the plan identifies which steps should be delegated to sub-agents (e.g., batch refactoring to `generalist`, deep analysis to `codebase_investigator`) rather than doing everything yourself.


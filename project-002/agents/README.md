# Test Anything Sub-Agent Forms

This folder contains reusable role forms for a testing team managed by a Test Lead.

Core principle:

```text
One test case source.
Manual owns test case logic.
Automation owns script implementation.
Test Lead owns coverage and priority.
```

Team roles:

- `test-lead.md` - manages scope, test plan, assignments, findings, defects, and final status.
- `qa-manual.md` - creates and maintains the master manual test case repository.
- `qa-automation.md` - reuses selected manual test cases for E2E, sanity, and critical regression automation.
- `workflow.md` - Mermaid workflow showing how the roles work together.


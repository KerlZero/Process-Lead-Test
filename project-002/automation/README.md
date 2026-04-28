# Automation Workspace

QA Automation owns this folder.

Automation scripts must link back to manual test case IDs from `../test-cases/master-test-cases.md`.

## Structure

```text
automation/
  README.md
  strategy.md
  mapping.md
  test-data/
  scripts/
    e2e/
    sanity/
    regression/
    helpers/
```

## Rule

```text
Do not automate every manual test case.
Focus on E2E, sanity, critical regression, and high-risk business flow cases.
```


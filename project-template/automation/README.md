# Automation Workspace

QA Automation owns this folder.

Automation scripts must link back to manual test case IDs from `../test-cases/master-test-cases.md`.

## Structure

```text
automation/
  README.md
  package.json
  playwright.config.js
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

## Run Automation

Install dependencies once after copying the template into a real project:

```powershell
cd "C:\path\to\project\automation"
npm.cmd install
```

Run all automation:

```powershell
npm.cmd test
```

Run by group:

```powershell
npm.cmd run test:e2e
npm.cmd run test:sanity
npm.cmd run test:regression
```

## Source Target

By default, the helper expects a sibling source folder:

```text
../../sourcecode/index.html
```

Override the target with:

```powershell
$env:SOURCECODE_DIR="C:\path\to\sourcecode"
npm.cmd test
```

## Script Ownership

```text
automation/scripts/e2e/        Full user journeys
automation/scripts/sanity/     Fast important confidence checks
automation/scripts/regression/ Existing behavior that must not break
automation/scripts/helpers/    Shared paths, fixtures, and utilities
```

Rename or replace the example scripts after QA Automation selects real cases from `../test-cases/master-test-cases.md`.

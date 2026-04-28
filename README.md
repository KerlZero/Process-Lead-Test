# Test Anything Multi-Project Workspace

This root folder manages multiple QA testing projects in parallel.

Each project folder contains the complete testing structure:

```text
agents/          Sub-agent role forms
documents/       Test plan, test strategy, scope
requirements/    Requirement source, backup documents, and review notes
test-cases/      Master manual cases, E2E, sanity, regression
test-runs/       Manual and automation run records
defects/         Open and closed defect logs
automation/      Automation strategy, mapping, scripts, test data
reports/         Traceability matrix, final report, and quality summary
templates/       Reusable templates
```

## Current Projects

```text
project-template/

projects/
  project-001/
    agents/
    documents/
    requirements/
      backup/
    test-cases/
    test-runs/
    defects/
    automation/
    reports/
    templates/

  project-002/
    agents/
    documents/
    requirements/
      backup/
    test-cases/
    test-runs/
    defects/
    automation/
    reports/
    templates/
```

## Project Template

Use this folder when starting a new test project:

```text
project-template/
```

Recommended copy pattern:

```text
Copy project-template to projects/project-003
Rename project-003 if needed
Add requirement files into projects/project-003/requirements/backup
Update projects/project-003/requirements/source.md
Start Test Lead kickoff
```

Do not edit `project-template` with real project results. Keep it clean for reuse.

## Active Example

```text
projects/project-001/
```

`project-001` is currently prepared for CR003: Personal Profile Website visual and Experience modal enhancement.

## Parallel Project Rule

Each project is independent.

```text
Project 001 has its own test plan, test cases, defects, automation scripts, and reports.
Project 002 has its own test plan, test cases, defects, automation scripts, and reports.
```

Each project should also keep its own requirement backup:

```text
projects/project-name/requirements/backup/
```

This prevents future agents from losing context if the original external requirement folder moves or changes.

## Shared QA Principle

Inside every project:

```text
One test case source.
Manual owns test case logic.
Automation owns script implementation.
Test Lead owns coverage and priority.
```

## Standard Project Workflow

```text
1. Backup source requirement documents into requirements/backup.
2. Summarize local source in requirements/source.md.
3. Create or update documents/test-plan.md.
4. QA Manual creates master test cases.
5. QA Automation selects only E2E, sanity, and critical regression cases.
6. Automation maps scripts back to manual test case IDs.
7. QA executes manual and automation runs.
8. Test Lead creates traceability matrix for FR, NFR, AC, and automation coverage.
9. Test Lead updates quality summary and final test report.
```

## Recommended Naming

```text
project-001/
project-002/
project-003/
```

Or use business names:

```text
project-login-system/
project-payment-flow/
project-onboarding-process/
```

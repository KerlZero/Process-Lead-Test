# Test Anything Multi-Project Workspace

This root folder manages multiple QA testing projects in parallel.

Use `project-template/` as the base structure, then copy it into `projects/<project-name>/` before starting real testing work.

## Core Principle

```text
One project = one isolated QA workspace.
One test case source = manual test case repository.
Manual owns test case logic.
Automation owns script implementation.
Test Lead owns scope, priority, risk, and final status.
```

Do not share live project files across projects. This prevents confusion, duplicate requests, mixed defects, and unclear ownership.

## Workspace Structure

```text
project-template/       Clean reusable template for new projects
projects/               Active or completed test projects
README.md               Workspace-level process and information flow
```

Current project folders:

```text
projects/project-001/
projects/project-002/
projects/project-003_Web_Profile/
```

## Standard Project Structure

Each project copied from `project-template/` should contain:

```text
agents/                 Sub-agent role forms and workflow
documents/              Test plan, test strategy, and scope
requirements/           Source requirements, backup files, and review notes
requirements/backup/    Local backup of source documents
test-cases/             Master, E2E, sanity, and regression cases
test-runs/              Manual and automation run records
defects/                Open/closed defect tracking
defects/Sync_Defect/    Active defect packages with logs and evidence
defects/Archive_defect/ Closed defect packages after retest pass
automation/             Automation mapping, scripts, helpers, and test data
reports/                Traceability, quality summary, and final report
templates/              Reusable document templates
```

## Information Flow

```text
Requirements / Source Material
        |
        v
requirements/backup/
        |
        v
requirements/source.md
        |
        v
documents/test-plan.md
        |
        v
test-cases/master-test-cases.md
        |
        +--> test-cases/e2e-cases.md
        +--> test-cases/sanity-cases.md
        +--> test-cases/regression-cases.md
        |
        v
automation/mapping.md
        |
        v
automation/scripts/
        |
        v
test-runs/manual-run-001.md
test-runs/automation-run-001.md
        |
        v
defects/open-defects.md
defects/Sync_Defect/<DEFECT-ID>/
        |
        v
reports/traceability-matrix.md
reports/quality-summary.md
reports/final-test-report.md
```

## Standard Process Sets

```text
Set 1: Project Setup And Test Planning
1. Create / copy project folder.
2. Backup requirement/source files.
3. Update requirements/source.md.
4. Test Lead kickoff.
5. Create / update test plan.

Set 2: Test Design And Automation Preparation
6. QA Manual creates master test cases.
7. QA Manual marks automation candidates.
8. QA Automation selects E2E / sanity / regression cases.
9. Fill e2e-cases.md, sanity-cases.md, regression-cases.md.
10. Create automation mapping.
11. Create automation scripts.
12. Create traceability matrix.

Set 3: Test Execution
13. Initialize manual-run-001.md.
14. Execute automation run.
15. Execute Full Manual Coverage.
16. Log defects if found.

Set 4: Defect Fix, Retest, And Quality Update
17. Retest if needed.
    - Log retest result for each active defect.
    - Keep failed defects in defects/Sync_Defect/.
    - Split a new defect if retest finds a different symptom or root issue.
    - Move only passed/closed defect packages to defects/Archive_defect/.
18. Update quality summary.

Set 5: Final Report And Test Lead Decision
19. Create final test report.
20. Test Lead decides final status.
```

## Review Gate

```text
The user reviews each setup/process set before continuing.
Do not move to the next set until the current set is reviewed and approved.
```

## Defect Flow

When a defect is found:

```text
1. Add summary to defects/open-defects.md.
2. Create defects/Sync_Defect/<DEFECT-ID>/.
3. Create defects/Sync_Defect/<DEFECT-ID>/defect-log.md.
4. Add evidence under defects/Sync_Defect/<DEFECT-ID>/evidence/.
5. Update test run file with defect ID and evidence reference.
6. Update reports/quality-summary.md.
```

When a defect is retested:

```text
If retest passes:
- update defect-log.md
- update defects/closed-defects.md
- move the defect package to defects/Archive_defect/<DEFECT-ID>/
- update reports/quality-summary.md

If retest fails:
- mark the defect as Retest Failed
- keep the package in defects/Sync_Defect/<DEFECT-ID>/
- add retest evidence
- update defects/open-defects.md
- update reports/quality-summary.md

If retest finds a different issue:
- keep the original defect focused on its original symptom
- create a new defect ID
- create a new Sync_Defect package for the new issue
- cross-reference the split in both defect logs
```

## Defect Evidence Rule

Evidence should be separated by defect type, not mixed together.

Examples:

```text
defects/Sync_Defect/DEF-001/evidence/visibility-error-context.md
defects/Sync_Defect/DEF-002/evidence/click-interception-error-context.md
defects/Sync_Defect/DEF-003/evidence/automation-result.md
defects/Sync_Defect/DEF-004/evidence/manual-result.md
```

This keeps each defect clear enough for fixing, retesting, and final decision.

## Start A New Project

Recommended pattern:

```text
1. Copy project-template/ to projects/<new-project-name>/.
2. Add source files into projects/<new-project-name>/requirements/backup/.
3. Update projects/<new-project-name>/requirements/source.md.
4. Start Set 1 with the Test Lead Agent.
5. Wait for user review before Set 2.
```

Example:

```text
projects/project-004_New_Project/
```

## Automation Rule

QA Automation reuses selected manual test cases only.

Priority:

```text
1. E2E cases
2. Sanity cases
3. Critical regression cases
4. High-risk business flow cases
```

Do not automate every manual test case. Select the important repeatable cases that give fast confidence.

## Final Status Options

```text
Passed
Failed
Blocked
Passed With Risk
Retest Required
Needs Clarification
Not Started
```

## Template Safety Rule

```text
Keep project-template clean.
Do not store real project results, defects, screenshots, traces, or requirement files in project-template.
Real work belongs inside projects/<project-name>/.
```

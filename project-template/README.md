# Test Anything QA Project Template

This is a reusable project template for testing any product, process, workflow, document, API, or system.

Copy this folder into `projects/<new-project-name>` before starting real testing work.

Core operating rule:

```text
One test case source.
Manual owns test case logic.
Automation owns script implementation.
Test Lead owns coverage and priority.
```

## Structure

```text
agents/                 Sub-agent role forms and team workflow
documents/              Test management documents
requirements/           Source requirements and review notes
test-cases/             Master manual test cases
test-runs/              Manual and automation execution records
defects/                Defect logs and retest tracking
defects/Sync_Defect/    Active defect packages with logs and evidence
defects/Archive_defect/ Closed defect packages after retest pass
automation/             Automation strategy, mapping, and scripts
reports/                Final reports and quality summaries
templates/              Reusable document templates
```

Important requirement backup folder:

```text
requirements/backup/
```

Use it to store local copies of source requirement documents for this project.

## Workflow

```text
Set 1: Project Setup And Test Planning
1. Create / copy project folder
2. Backup requirement/source files
3. Update requirements/source.md
4. Test Lead kickoff
5. Create / update test plan

Set 2: Test Design And Automation Preparation
6. QA Manual creates master test cases
7. QA Manual marks automation candidates
8. QA Automation selects E2E / sanity / regression cases
9. Fill e2e-cases.md, sanity-cases.md, regression-cases.md
10. Create automation mapping
11. Create automation scripts
12. Create traceability matrix

Set 3: Test Execution
13. Initialize manual-run-001.md
14. Execute automation run
15. Execute Full Manual Coverage
16. Log defects if found

Set 4: Defect Fix, Retest, And Quality Update
17. Retest if needed
    - Log retest result for each active defect
    - Keep failed defects in defects/Sync_Defect/
    - Split a new defect if retest finds a different symptom or root issue
    - Move only passed/closed defect packages to defects/Archive_defect/
18. Update quality summary

Set 5: Final Report And Test Lead Decision
19. Create final test report
20. Test Lead decides final status
```

## Review Gate

```text
The user reviews each setup/process set before continuing.
Do not move to the next set until the current set is reviewed and approved.
```

## Keep Template Clean

```text
- Do not add real project requirement files here.
- Do not record real execution results here.
- Do not store real defects here.
- Copy the template first, then work inside the copied project folder.
```

## Defect Evidence Rule

```text
For every active defect, create:
defects/Sync_Defect/<DEFECT-ID>/defect-log.md
defects/Sync_Defect/<DEFECT-ID>/evidence/

Evidence should be separated by defect type.
Example:
- visibility-error-context.md for hidden / not visible issues
- click-interception-error-context.md for blocked click / overlap issues
- automation-result.md for automation run summary
- manual-result.md for manual execution notes

If retest passes:
- update defect-log.md
- update defects/closed-defects.md
- move the defect package from defects/Sync_Defect/ to defects/Archive_defect/

If retest fails:
- update defect-log.md as Retest Failed
- keep the defect package in defects/Sync_Defect/
- update defects/open-defects.md and reports/quality-summary.md

If retest finds a different issue:
- keep the original defect focused on its original symptom
- create a new defect ID
- create a new Sync_Defect package for the new defect
- cross-reference the split in both defect logs
```

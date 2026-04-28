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

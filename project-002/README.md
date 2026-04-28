# Test Anything QA Workspace

This workspace is designed for testing any product, process, workflow, document, API, or system.

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

## Workflow

```text
1. Test Lead understands target and creates test plan
2. QA Manual reviews requirements and creates master test cases
3. QA Automation selects important cases only
4. Automation scripts map back to manual test case IDs
5. QA team executes tests and logs defects
6. Test Lead reviews findings and decides final status
7. Report is produced
```


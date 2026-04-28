# Test Team Workflow

## Mermaid Workflow

```mermaid
flowchart TD
    A["Project / Process To Test"] --> TL["Test Lead"]

    TL --> TLU["Understand Target Being Tested"]
    TLU --> TP["Create Test Plan"]
    TP --> SCOPE["Define Testing Scope"]
    SCOPE --> SUB["Identify Required Sub-Agents"]
    SUB --> ASSIGN["Assign Test Areas"]

    ASSIGN --> QM["QA Manual"]
    QM --> M1["Analyze Requirements"]
    M1 --> M2["Create Master Manual Test Cases"]
    M2 --> REPO["Shared Test Case Repository"]
    REPO --> M3["Execute Full Manual Coverage"]
    M3 --> M4["Log Defects With Evidence"]
    M4 --> M5["Retest Fixed Issues"]

    REPO --> QA["QA Automation"]
    QA --> A1["Review Manual Test Cases"]
    A1 --> A2["Select Important Cases Only"]

    A2 --> E2E["E2E Cases"]
    A2 --> SANITY["Sanity Cases"]
    A2 --> REG["Critical Regression Cases"]
    A2 --> RISK["High-Risk Business Flow Cases"]

    E2E --> AUTO["Create Automation Scripts"]
    SANITY --> AUTO
    REG --> AUTO
    RISK --> AUTO

    AUTO --> MAP["Map Script To Manual Test Case ID"]
    MAP --> RUN["Run Automation Suite"]
    RUN --> RESULT["Update Automation Result"]

    M4 --> REVIEW["Test Lead Reviews All Findings"]
    M5 --> REVIEW
    RESULT --> REVIEW

    REVIEW --> PRIORITY["Prioritize Defects"]
    PRIORITY --> STATUS["Decide Final Test Status"]
    STATUS --> REPORT["Produce Concise Final Test Report"]

    STATUS --> PASS["Passed"]
    STATUS --> FAIL["Failed"]
    STATUS --> BLOCK["Blocked"]
    STATUS --> RISKSTATUS["Passed With Risk"]
```

## Team Principle

```text
Manual covers broad testing.
Automation covers important repeatable confidence checks.
Test Lead controls scope, priority, and final quality decision.
```


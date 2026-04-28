# Test Strategy

## Strategy Summary

```text
Describe the overall quality strategy for this project or process.
```

## Manual Testing Strategy

```text
Manual testing provides broad coverage across functional behavior, process flow, UX, and exploratory testing.
```

## Automation Testing Strategy

```text
Automation focuses only on important repeatable confidence checks:
- E2E cases
- Sanity cases
- Critical regression cases
- High-risk business flow cases
```

## Test Case Source Rule

```text
Manual test cases are the master source.
Automation scripts must link back to manual test case IDs.
Automation should not duplicate test case logic.
```

## Automation Selection Criteria

Automate when the case is:

- Critical to business flow
- Repeated every release
- Stable enough to automate
- Clear expected result
- High impact if broken
- Useful for fast confidence checking

Do not automate when the case is:

- One-time test only
- Requirement changes often
- Based mainly on visual judgment
- Low priority
- Rare edge case
- Too expensive to maintain


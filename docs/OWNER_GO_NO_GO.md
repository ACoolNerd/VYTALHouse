# VYTAL House Owner Go/No-Go Authorization

**Release candidate:** ____________________  
**Environment:** Staging / Production  
**Review date:** ____________________

## Mandatory evidence

| Gate | Evidence link or identifier | Owner decision |
| --- | --- | --- |
| Locked dependency install completed |  | Pass / Fail |
| Typecheck, build, and smoke checks passed |  | Pass / Fail |
| Browser test results attached |  | Pass / Fail |
| Firebase rules deployed and tested in staging |  | Pass / Fail |
| Lead persistence and duplicate handling tested |  | Pass / Fail |
| Admin MFA and RBAC verified |  | Pass / Fail |
| Secret manager configured; no secrets in repo |  | Pass / Fail |
| Monitoring, alerts, backup and restore evidence |  | Pass / Fail |
| Payment workflow tested, or explicitly disabled |  | Pass / Fail |
| HIPAA and clinical data workflow approval |  | Pass / Fail |
| Maryland legal and operational review |  | Pass / Fail |
| Incident response and customer escalation owner named |  | Pass / Fail |

## Explicit production limits

Until a clinical/legal approval is attached, VYTAL House must not collect protected health information, upload clinical documents, or enable member medical record access. The baseline Firestore and Storage rules intentionally deny those workflows.

## Authorization

**Decision:** GO / NO-GO / CONDITIONAL GO  
**Conditions or exclusions:**

____________________________________________________________

**Kathy Ha — Owner / Operations**  
Signature: ____________________  Date: ____________________

**Chauncey Gardner — Owner / Executive**  
Signature: ____________________  Date: ____________________

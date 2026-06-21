# 13 - Security and Compliance

## Separation of Duties
- `owner`: final approval and launch gates.
- `admin`: platform configuration and quality evidence.
- `clinical`: medical service protocols and review.
- `operations`: vendors, scheduling, facility readiness.
- `marketing`: social/content calendar and public copy.
- `vendor`: restricted vendor response access.
- `member`: own profile and own booking requests.

## Privacy Gate
- Do not collect PHI in the prototype.
- Before any clinical intake, complete HIPAA/privacy review, consent forms, business associate review, retention rules, incident response, and audit logging.

## Payment Gate
- Stripe is represented as a future integration only. No live payments are enabled.

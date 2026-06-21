# VYTAL House Production Gate

## Status
The product is in pre-production. Do not represent it as live or HIPAA compliant until every gate below is evidenced in the release record.

## Engineering
- `npm ci` completes from the lockfile.
- `npm run validate` completes without errors.
- Browser testing confirms the landing page, navigation, waitlist validation, and API error handling.
- Dependency audit is reviewed and all high-severity findings are remediated or risk-accepted in writing.

## Data and security
- The lead endpoint uses a persistent datastore; prototype-only responses are not adequate for launch.
- Firebase Authentication, security rules, role claims, and audit logging are tested in a staging project.
- Real credentials are stored in a secret manager and never committed to source control.
- A backup restore test is documented.

## Clinical and legal
- No protected health information is collected until legal counsel, the clinical director, and privacy counsel approve workflows.
- Required business associate agreements and Maryland licensing requirements are confirmed.
- Final member terms, privacy notice, consent documents, and release language are approved.

## Operations
- Monitoring, error alerting, payment reconciliation, refund handling, incident response, and daily-close procedures are owned and tested.
- Go/No-Go approval must be signed by Kathy Ha and Chauncey Gardner.

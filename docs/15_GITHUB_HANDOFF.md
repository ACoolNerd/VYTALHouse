# 15 - GitHub Handoff

## Local Repository
- Path: local workspace folder `VYTAL House`
- Branch: `main`
- Remote: configured VYTALHouse GitHub origin.
- Status: local repository is connected to the VYTALHouse GitHub remote.
- Recommended visibility: private until source copies, vendor records, legal drafts, and financial assumptions are reviewed for public exposure.

## Included GitHub Assets
- `.gitignore` excludes local dependencies, build output, environment files, and transient render evidence.
- `.github/workflows/vytal-quality.yml` runs dependency install, typecheck, production build, and the VYTAL quality gate.
- `.github/PULL_REQUEST_TEMPLATE.md` enforces brand isolation, schema, and external-action controls.
- `.github/ISSUE_TEMPLATE/feature_request.md` scopes feature requests to VYTAL governance.
- `.github/ISSUE_TEMPLATE/governance_review.md` creates a review lane for compliance and external mutation gates.

## First Commit Scope
Use one initial commit that captures the package as a baseline:

```bash
git add .
git commit -m "Initial VYTAL House manifest package"
```

## Remote Publish Gate
Pushes are allowed only when explicitly requested by the owner and only for VYTAL-scoped files:

```bash
git push -u origin main
```

## Required Pre-Push Checks
```bash
npm run typecheck
npm run build
python3 tools/verify_quality.py
```

## Repository Topics
- `vytal-house`
- `wellness`
- `recovery`
- `nextjs`
- `firebase`
- `project-ready`
- `google-cloud-readiness`
- `governance`

## External Actions Still Blocked
- No live Notion workspace creation.
- No live Figma file creation.
- No vendor email sending.
- No payment processing.
- No legal filing.
- No protected health information intake.

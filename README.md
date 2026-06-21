# VYTAL House

Recharge. Recover. Evolve.

This repo manifests the VYTAL House package: source-backed docs, Notion importables, Figma-ready design tokens, a full-stack Next/Firebase MVP, vendor procurement materials, social planning, and quality-gate evidence.

## Quick Start

```bash
npm install
npm run validate
npm run dev
```

The runnable app uses mock seed data by default. Firebase credentials are optional and must be supplied through environment variables before live data is enabled.

## Package Map

- `docs/` - numbered VYTAL project docs and delivery manifest.
- `src/app/` - Next.js App Router website, member app surfaces, admin dashboard, vendor CRM, and API route handlers.
- `src/lib/` - VYTAL data, schemas, Firebase bootstrap, and governance helpers.
- `data/seeds/` - 7-field seed records for services, vendors, memberships, content, bookings, and audit events.
- `importables/` - Notion-ready Markdown/CSV and Figma-ready design specs/tokens.
- `deliverables/` - polished DOCX/PPTX/XLSX/CSV/TXT package outputs and source copies.
- `firebase/` - Firestore/Storage rules and indexes.
- `tools/` - reproducible builders and verification scripts.
- `.github/` - local GitHub workflow, PR template, and issue templates for private-repo handoff.
- `quality/` - final gate and GitHub handoff evidence.

## GitHub Handoff

This folder is initialized as a local git repository on `main`. No remote is configured and no push has been performed. Review `docs/15_GITHUB_HANDOFF.md` before publishing, and use a private GitHub repository until source copies and legal/financial materials are cleared for exposure.

## Live External Gate

Local artifacts are ready for review. Live Notion creation, live Figma creation, vendor emails, payments, GitHub push, and legal filing remain blocked until explicitly approved.

#!/usr/bin/env python3
from __future__ import annotations

import csv
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HOME = Path.home()
DOWNLOADS = HOME / "Downloads"
ATTACH = HOME / ".codex/attachments/4da99dd7-03a4-4817-99cc-768a65931e61/pasted-text.txt"

BRAND = {
    "name": "VYTAL House",
    "entity": "VYTAL House LLC",
    "tagline": "Recharge. Recover. Evolve.",
    "owners": "Chauncey Gardner and Kathy Ha",
    "market": "Maryland recovery and wellness club",
}

COLORS = {
    "void": "#07090d",
    "panel": "#111722",
    "panel2": "#18202d",
    "cream": "#f6f0e6",
    "white": "#ffffff",
    "gold": "#c8a46b",
    "cyan": "#7de3ff",
    "lavender": "#c9b8ff",
    "red": "#f15f5f",
    "green": "#6ee7b7",
}

SOURCE_URLS = [
    ("Oxycell OxyPro Sovereign", "https://www.oxycell.com/product/oxypro-sovereign/"),
    ("Hyperbaric Pro exercise-ready multiplace chamber", "https://www.hyperbaricpro.com/product/exercise-ready-multiplace-hard-shell-hyperbaric-oxygen-chamber/"),
    ("Oxynergy2 Beverly Hills wellness reference", "https://oxynergy2.com/"),
    ("True REST Alexandria wellness reference", "https://truerest.com/locations/alexandria/"),
    ("VacuActiv fitness devices", "https://vacuactiv.com/products/fitness-devices/"),
    ("Eleve Longevity Lounge", "https://elevelongevity.com/"),
    ("Awesome Design MD", "https://github.com/VoltAgent/awesome-design-md"),
    ("Maryland Business Express", "https://businessexpress.maryland.gov/start/register-a-business-in-maryland"),
    ("Maryland SDAT Articles of Organization form", "https://dat.maryland.gov/sdat%20forms/artorgan.pdf"),
    ("HHS HIPAA Privacy Rule", "https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html"),
]

CANONICAL_SOURCES = [
    ("business_plan_docx", DOWNLOADS / "vytal_house_plan.docx"),
    ("business_plan_docx_duplicate", DOWNLOADS / "vytal_house_plan (1).docx"),
    ("brd_docx", DOWNLOADS / "vytal_business_requirements_document.docx"),
    ("brd_docx_duplicate", DOWNLOADS / "vytal_business_requirements_document (1).docx"),
    ("articles_docx", DOWNLOADS / "vytal_articles_of_organization.docx"),
    ("articles_docx_duplicate", DOWNLOADS / "vytal_articles_of_organization (1).docx"),
    ("source_deck_pptx", DOWNLOADS / "vytal_house_presentation.pptx"),
    ("vendor_contacts_csv", DOWNLOADS / "vytal_vendor_contacts.csv"),
    ("vendor_contacts_csv_legacy", DOWNLOADS / "equipment_contacts (1).csv"),
    ("vendor_email_template", DOWNLOADS / "vytal_vendor_email_template.txt"),
    ("code_stack", DOWNLOADS / "vytal_code_stack.txt"),
    ("pasted_request", ATTACH),
    ("floor_plan_image", DOWNLOADS / "ChatGPT Image Jun 19, 2026, 03_14_00 AM (2).png"),
    ("interior_reference_image", DOWNLOADS / "ChatGPT Image Jun 19, 2026, 03_14_00 AM (1).png"),
]

VENDORS = [
    {
        "id": "vendor-oxycell-sovereign",
        "entity": "VYTAL House",
        "type": "vendor",
        "name": "Oxycell",
        "status": "quote-needed",
        "owner": "operations",
        "updatedAt": "2026-06-19",
        "metadata": {
            "product": "OxyPro Sovereign Hyperbaric Chamber",
            "website": "https://www.oxycell.com",
            "phone": "(877) 750-0660",
            "email": "",
            "priority": "Tier 1 anchor equipment",
        },
    },
    {
        "id": "vendor-oxygen-health-systems-exs64",
        "entity": "VYTAL House",
        "type": "vendor",
        "name": "Oxygen Health Systems",
        "status": "quote-needed",
        "owner": "operations",
        "updatedAt": "2026-06-19",
        "metadata": {
            "product": "EXS-64 Exercise-Ready Hyperbaric Chamber",
            "website": "https://o2-o3.com",
            "phone": "",
            "email": "info@o2-o3.com",
            "priority": "Tier 1 anchor equipment",
        },
    },
    {
        "id": "vendor-vacuactiv-bodyshape",
        "entity": "VYTAL House",
        "type": "vendor",
        "name": "VacuActiv",
        "status": "quote-needed",
        "owner": "operations",
        "updatedAt": "2026-06-19",
        "metadata": {
            "product": "Bodyshape V2 and fitness devices",
            "website": "https://vacuactiv.com",
            "phone": "+1 (213) 554-7641",
            "email": "contact@vacuactiv.com",
            "priority": "Recovery zone equipment",
        },
    },
    {
        "id": "vendor-eleve-health-modalities",
        "entity": "VYTAL House",
        "type": "vendor",
        "name": "EleveHealth",
        "status": "quote-needed",
        "owner": "operations",
        "updatedAt": "2026-06-19",
        "metadata": {
            "product": "HBOT, dry float beds, PEMF, vibro-acoustic systems",
            "website": "https://elevehealth.com",
            "phone": "1.888.537.7087",
            "email": "info@elevehealth.com",
            "priority": "Multi-modality supplier",
        },
    },
]

SERVICES = [
    ("Hyperbaric Oxygen Therapy", "OxyPro Sovereign and EXS-64 inspired protocols with concierge oversight.", "Clinical recovery"),
    ("IV and NAD+ Lounge", "Premium chair lounge for hydration, vitamin, NAD+, and partner-prescribed protocols.", "Clinical service"),
    ("Red Light Therapy", "Photobiomodulation room with full-body and targeted red light sessions.", "Recovery"),
    ("Cryotherapy", "Cold exposure service lane with staff safety checks and waiver workflow.", "Recovery"),
    ("Sauna and Cold Plunge", "Contrast therapy suite with infrared sauna and plunge scheduling.", "Thermal contrast"),
    ("Float and Dry Float", "Float pod and dry float concepts for decompression, stress relief, and recovery.", "Restoration"),
    ("Compression and Recovery Zone", "Compression boots, mobility, recovery chairs, and future expansion lane.", "Member lounge"),
]

MEMBERSHIPS = [
    ("Core", 299, 150, "Red light, compression, recovery lounge, member education"),
    ("Elite", 599, 100, "Unlimited recovery services, monthly IV/NAD+ credit, booking priority"),
    ("Black", 1499, 50, "Concierge scheduling, quarterly labs, peptide optimization, VIP access"),
]

SOCIAL_POSTS = [
    ("2026-07-01", "Instagram", "Brand reveal", "The VYTAL signal", "Introduce name, tagline, spacecraft ambience, and founder member waitlist."),
    ("2026-07-03", "TikTok", "Facility concept", "Step into recovery", "Short video concept using floor plan zones and ambient lounge references."),
    ("2026-07-05", "LinkedIn", "Founder note", "Why VYTAL House", "Business-focused recovery club thesis and Maryland launch intent."),
    ("2026-07-08", "Instagram", "Therapy education", "HBOT explained", "Source-backed carousel on chamber experience and member journey."),
    ("2026-07-10", "Newsletter", "Waitlist", "Founder member briefing", "Invite premium founding members to book a tour consultation."),
    ("2026-07-12", "Instagram", "Vendor spotlight", "Engineering the room", "Show vendor inquiry stage without claiming purchases."),
    ("2026-07-15", "LinkedIn", "Operations", "Medical oversight matters", "Explain compliance-first service design and professional review gates."),
    ("2026-07-18", "TikTok", "Lifestyle", "Recharge. Recover. Evolve.", "Fast cuts: lounge, IV chairs, red light, cold plunge, compression."),
    ("2026-07-22", "Instagram", "Membership", "Core, Elite, Black", "Explain tiers and waitlist priority."),
    ("2026-07-29", "Newsletter", "Launch status", "Build-out roadmap", "Lease, equipment, medical setup, design, pre-sales next steps."),
]


def mkdir(path: str | Path) -> Path:
    path = ROOT / path if isinstance(path, str) else path
    path.mkdir(parents=True, exist_ok=True)
    return path


def write(path: str | Path, text: str) -> None:
    path = ROOT / path if isinstance(path, str) else path
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text.strip() + "\n", encoding="utf-8")


def write_json(path: str | Path, data: object) -> None:
    path = ROOT / path if isinstance(path, str) else path
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")


def write_csv(path: str | Path, rows: list[dict[str, str]], fieldnames: list[str]) -> None:
    path = ROOT / path if isinstance(path, str) else path
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def source_rows() -> list[dict[str, str]]:
    rows: list[dict[str, str]] = []
    for label, path in CANONICAL_SOURCES:
        rows.append(
            {
                "id": f"source-{label}",
                "entity": "VYTAL House",
                "type": "source",
                "name": label,
                "status": "available" if path.exists() else "missing",
                "owner": "operations",
                "updatedAt": "2026-06-19",
                "metadata.path": path.name if path.parent == DOWNLOADS else "codex-attachment:pasted-text.txt",
                "metadata.notes": "Local user-provided source file",
            }
        )
    for name, url in SOURCE_URLS:
        rows.append(
            {
                "id": "source-url-" + name.lower().replace(" ", "-").replace("/", "-"),
                "entity": "VYTAL House",
                "type": "source_url",
                "name": name,
                "status": "reference",
                "owner": "operations",
                "updatedAt": "2026-06-19",
                "metadata.path": url,
                "metadata.notes": "External reference for verification and professional review",
            }
        )
    return rows


def make_docs() -> None:
    source_table = "\n".join(
        f"| {r['id']} | {r['status']} | {r['metadata.path']} |" for r in source_rows()
    )
    vendor_table = "\n".join(
        f"| {v['name']} | {v['metadata']['product']} | {v['metadata']['website']} | {v['metadata']['phone']} | {v['metadata']['email']} | {v['status']} |"
        for v in VENDORS
    )
    membership_table = "\n".join(
        f"| {name} | ${price:,}/mo | {count} | {count * price:,} | {benefits} |"
        for name, price, count, benefits in MEMBERSHIPS
    )
    service_cards = "\n".join(f"- **{name}:** {desc} Role: {role}." for name, desc, role in SERVICES)
    social_table = "\n".join(
        f"| {date} | {channel} | {pillar} | {title} | {brief} | Draft | marketing |"
        for date, channel, pillar, title, brief in SOCIAL_POSTS
    )

    write(
        "AGENTS.md",
        """
# VYTAL House Instructions

This repository is the isolated VYTAL House silo. Keep the product language, code, design, data, documents, and operational logic separate from every other venture.

## Brand Lock
- Product name: VYTAL House.
- Legal draft name: VYTAL House LLC.
- Tagline: Recharge. Recover. Evolve.
- Owners: Chauncey Gardner and Kathy Ha.
- Do not introduce unrelated venture names, palettes, slogans, product terms, or operating logic.

## Architecture Rules
- Use the 7-field schema on every database-like object: `id`, `entity`, `type`, `name`, `status`, `owner`, `updatedAt`.
- Put all domain-specific data under `metadata`.
- Enforce separation of duties for `owner`, `admin`, `clinical`, `operations`, `marketing`, `vendor`, and `member` roles.
- Treat legal, medical, and financial materials as drafts for professional review.
- Do not send vendor messages, create live external workspaces, collect protected health data, file legal documents, or activate payments without explicit approval.
""",
    )

    write(
        "README.md",
        f"""
# {BRAND['name']}

{BRAND['tagline']}

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

## Live External Gate

Local artifacts are ready for review. Live Notion creation, live Figma creation, vendor emails, payments, and legal filing remain blocked until explicitly approved.
""",
    )

    write(
        "docs/00_OVERVIEW_INDEX.md",
        f"""
# 00 - VYTAL House Overview Index

## Identity
- Name: {BRAND['name']}
- Tagline: {BRAND['tagline']}
- Owners: {BRAND['owners']}
- Silo: independent VYTAL House workspace

## What Was Manifested
- Governed document stack: business plan, BRD, articles draft, RACI, schema spec, compliance notes, and delivery manifest.
- Full-stack MVP: Next.js public website, member app, admin dashboard, booking flow, vendor CRM, social calendar, and API routes.
- Importables: Notion wiki pages, vendor/social CSVs, Figma design tokens, Figma screen brief, and CAD concept handoff.
- Artifact package: DOCX source copies, generated dossier DOCX, master PPTX deck, workbook, CSVs, vendor email template, and copied visual assets.

## Working Rule
Every object that behaves like a database record must carry the 7 required fields and place domain details under `metadata`.
""",
    )

    write(
        "docs/01_SOURCE_MANIFEST.md",
        f"""
# 01 - Source Manifest

| Source ID | Status | Path or URL |
|---|---|---|
{source_table}

## Deduplication Notes
- The duplicate VYTAL business plan files have matching hashes and are treated as one canonical business plan.
- The duplicate BRD and articles files have matching hashes and are treated as canonical source docs.
- The latest pasted request attachments have matching hashes and are treated as one source transcript.
""",
    )

    write(
        "docs/02_BUSINESS_PLAN.md",
        f"""
# 02 - Business Plan

## Executive Summary
{BRAND['name']} is a premium recovery and wellness club for high-performance members in Maryland. The brand combines clinical-grade recovery modalities with a dark, cinematic, space-inspired lounge experience.

## Positioning
- Category: recovery, longevity, and wellness club.
- Promise: {BRAND['tagline']}
- Primary users: founders, touring artists, athletes, executives, wellness clients, and recovery-focused members.
- Differentiator: design-forward environment, recurring membership model, clinical oversight, and high-touch concierge operations.

## Services
{service_cards}

## Membership Model
| Tier | Price | Projected Members | Monthly Revenue | Includes |
|---|---:|---:|---:|---|
{membership_table}

## Financial Baseline
- Membership revenue at target mix: $179,700/month.
- Additional revenue lanes: IV/NAD+, peptides and hormone programs, float sessions, cryotherapy, sauna/cold plunge, compression, events, retail.
- Startup cost range from source plan: $750,000 to $1,800,000 depending on lease terms, build-out, equipment mix, and working capital.
- Professional review required for medical, legal, accounting, tax, securities, and lending claims.

## Execution Roadmap
1. Finalize lease, floor plan, zoning, and tenant improvement allowances.
2. Lock medical structure, resident compliance roles, consent flows, and partner pharmacy protocols.
3. Request formal equipment quotes and installation requirements.
4. Build VYTAL public website, member app, admin, and vendor CRM.
5. Start founder membership pre-sales after legal review.
6. Open with controlled member cohort, then expand utilization.
""",
    )

    write(
        "docs/03_BUSINESS_REQUIREMENTS_DOCUMENT.md",
        """
# 03 - Business Requirements Document

## Goal
Launch a full-stack VYTAL House platform that can support marketing, member acquisition, booking interest, vendor procurement, internal operations, and controlled launch planning.

## In Scope
- Public website for brand, services, memberships, science education, facility concept, and contact.
- Member app surface for booking interest, upcoming sessions, wellness metrics placeholders, and education.
- Admin dashboard for leads, bookings, vendors, social content, and quality gate tracking.
- Vendor procurement CRM with quote status and outreach templates.
- Notion-ready wiki and Figma-ready design system artifacts.
- Firebase-ready security model and seed data.

## Out of Scope Until Approval
- Live payments.
- Live vendor email sending.
- Live protected health information collection.
- Legal filing.
- Live Notion/Figma creation.

## Functional Requirements
- Users can browse services, memberships, and facility zones.
- Leads can submit interest through a safe form endpoint.
- Members can view seeded bookings and request booking.
- Admins can scan operational KPIs and gated launch tasks.
- Operations can manage vendors, quote stages, and source notes.
- Marketing can plan content and track status.

## Non-Functional Requirements
- VYTAL-only brand isolation.
- Responsive desktop and mobile UI.
- Accessible color contrast and keyboard-friendly controls.
- No unreviewed clinical claims.
- All seed and app records follow the 7-field schema.
""",
    )

    write(
        "docs/04_ARTICLES_DRAFT.md",
        """
# 04 - Articles Draft

This repository includes a draft articles document for VYTAL House LLC. It is not legal advice and should be reviewed before filing.

## Maryland Filing Data To Confirm
- Entity name and availability.
- Principal office physical Maryland address.
- Resident agent name and physical Maryland address.
- Organizer signature.
- Resident agent signature.
- Return address.
- Filing path and fee through Maryland Business Express or SDAT.

## Draft Controls
- Keep addresses out of public repo files until confirmed.
- Do not file through any portal without explicit owner approval.
- Maintain a clean signed final outside this repo if legal counsel requests it.
""",
    )

    write(
        "docs/05_RACI.md",
        """
# 05 - RACI Matrix

| Workstream | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Brand and launch strategy | marketing | owner | operations | admin |
| Lease and build-out | operations | owner | legal, architect, broker | admin |
| Medical structure | clinical | owner | medical director, counsel | operations |
| Equipment procurement | operations | owner | vendors, clinical | admin |
| Website and app | admin | owner | marketing, operations | member |
| Booking and member experience | operations | owner | clinical | member |
| Social calendar | marketing | owner | operations | admin |
| Compliance and privacy | clinical | owner | counsel | all staff |
| Finance model | operations | owner | accountant, advisor | admin |
""",
    )

    write(
        "docs/06_7_FIELD_SCHEMA.md",
        """
# 06 - 7-Field Schema

Every structured record must include:

```json
{
  "id": "string",
  "entity": "VYTAL House",
  "type": "string",
  "name": "string",
  "status": "string",
  "owner": "owner|admin|clinical|operations|marketing|vendor|member",
  "updatedAt": "YYYY-MM-DD",
  "metadata": {}
}
```

## Collections
- `members`
- `bookings`
- `services`
- `vendors`
- `contentItems`
- `socialPosts`
- `leads`
- `documents`
- `auditEvents`
- `qualityScores`

## Rule
If a new object cannot satisfy the schema, it stays in draft notes until it can.
""",
    )

    write(
        "docs/07_VENDOR_PROCUREMENT_OUTREACH.md",
        f"""
# 07 - Vendor Procurement and Outreach

## Vendor Table
| Vendor | Product | Website | Phone | Email | Status |
|---|---|---|---|---|---|
{vendor_table}

## Outreach Requirements
- Ask for current pricing, configuration options, lead times, shipping, installation, staff training, financing, warranty, maintenance, and demo availability.
- Do not send messages from this repo without explicit approval.
- Store responses as vendor records with the 7-field schema.

## Template
See `deliverables/vytal_vendor_email_template.txt`.
""",
    )

    write(
        "docs/08_NOTION_WORKSPACE_IMPORT.md",
        """
# 08 - Notion Workspace Import

The Notion import path is local-first. Import the Markdown pages and CSV tables under `importables/notion/` after approval.

## Pages
- Company Wiki
- Project Boards
- Finance and Metrics
- Vendor and Partner Database
- Content Calendar
- Meeting Notes
- SOP Library
- Team Directory

## Databases
- Vendor CRM from `importables/notion/vendor_database.csv`.
- Social calendar from `importables/notion/content_calendar.csv`.
- Project board from `importables/notion/project_board.csv`.
- Source library from `importables/notion/source_manifest.csv`.
""",
    )

    write(
        "docs/09_FIGMA_DESIGN_SYSTEM_BRIEF.md",
        """
# 09 - Figma Design System Brief

## Design Intent
VYTAL House should feel like a premium spacecraft lounge: dark atmospheric surfaces, crisp white typography, chrome and warm gold accents, controlled red therapy glow, and small cyan/lavender system highlights.

## Screens To Create
- Website home.
- Membership and services.
- Facility/floor plan.
- Member dashboard.
- Booking flow.
- Admin dashboard.
- Vendor CRM.
- Content calendar.

## Tokens
Use `importables/figma/vytal_tokens.json`.

## Live Figma Gate
Live Figma file creation is prepared but not executed until approved.
""",
    )

    write(
        "docs/10_WEBSITE_APP_SPEC.md",
        """
# 10 - Website and App Spec

## Public Website
- Home: brand signal, hero, waitlist CTA, facility zones, membership snapshot.
- Services: HBOT, IV/NAD+, red light, cryotherapy, sauna/cold plunge, float, compression.
- Memberships: Core, Elite, Black comparison and waitlist capture.
- Facility: conceptual floor plan and zone details.
- Science: source-backed educational pages with professional review disclaimer.
- Contact: lead form and vendor inquiry route.

## Member App
- Profile and tier.
- Upcoming bookings.
- Metrics placeholders.
- Booking request flow.
- Education library.

## Admin
- Launch quality score.
- Leads.
- Bookings.
- Vendor CRM.
- Social calendar.
- Document/source manifest.
""",
    )

    write(
        "docs/11_SOCIAL_MAP_CALENDAR.md",
        f"""
# 11 - Social Map and Calendar

## Pillars
- Brand reveal.
- Facility concept.
- Therapy education.
- Founder membership pre-sales.
- Vendor and build-out progress.
- Medical oversight and safety.
- Member lifestyle and recovery rituals.

## Calendar
| Date | Channel | Pillar | Title | Brief | Status | Owner |
|---|---|---|---|---|---|---|
{social_table}
""",
    )

    write(
        "docs/12_CAD_CONCEPT_HANDOFF.md",
        """
# 12 - CAD Concept Handoff

This is a conceptual CAD handoff, not permit-ready architectural documentation.

## Facility Zones
1. Reception and retail.
2. IV/NAD lounge.
3. Consultation rooms.
4. Cryotherapy.
5. Red light therapy.
6. Sauna and cold plunge.
7. Recovery zone.
8. Staff and medical storage.
9. Restrooms.

## Architect Inputs Needed
- Confirm exact lease address and shell dimensions.
- Obtain official CAD base plan from landlord.
- Confirm MEP, plumbing, oxygen, fire, egress, ADA, and pressure vessel requirements.
- Confirm local zoning and medical use constraints.

## Visual References
Use the copied floor plan and interior reference assets in `public/images/`.
""",
    )

    write(
        "docs/13_SECURITY_COMPLIANCE.md",
        """
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
""",
    )

    write(
        "docs/14_DELIVERY_MANIFEST.md",
        """
# 14 - Delivery Manifest

## Generated
- Numbered docs package.
- Next/Firebase MVP scaffold.
- Seed data.
- Firebase rules and indexes.
- Notion importables.
- Figma token and screen specs.
- Vendor and social CSVs.
- Artifact build scripts.

## Preserved Source Artifacts
- VYTAL business plan DOCX.
- VYTAL BRD DOCX.
- VYTAL articles draft DOCX.
- VYTAL source presentation PPTX.
- Vendor CSV and email template.
- Code stack outline.
- Visual references.

## Verification
Final verification evidence is written to `quality/QUALITY_GATE.md` after the verification script runs.

## External State
No live workspace creation, vendor email send, payment activation, or legal filing was performed.
""",
    )


def make_importables() -> None:
    write(
        "importables/notion/VYTAL_House_Workspace.md",
        f"""
# VYTAL House Workspace

## Company Wiki
- Mission: Build a premium recovery and wellness club that helps members {BRAND['tagline'].lower()}
- Ownership: {BRAND['owners']}
- Brand: dark spacecraft lounge, crisp typography, chrome and warm gold accents.

## Project Boards
- Build-Out and Lease
- Medical Setup
- Technology and App
- Marketing and Pre-Sales
- Finance and Metrics
- Vendor Procurement

## Operating Libraries
- SOP Library
- Meeting Notes
- Team Directory
- Source Manifest
""",
    )
    write_csv(
        "importables/notion/vendor_database.csv",
        [
            {
                "id": v["id"],
                "entity": v["entity"],
                "type": v["type"],
                "name": v["name"],
                "status": v["status"],
                "owner": v["owner"],
                "updatedAt": v["updatedAt"],
                "product": v["metadata"]["product"],
                "website": v["metadata"]["website"],
                "phone": v["metadata"]["phone"],
                "email": v["metadata"]["email"],
                "notes": v["metadata"]["priority"],
            }
            for v in VENDORS
        ],
        ["id", "entity", "type", "name", "status", "owner", "updatedAt", "product", "website", "phone", "email", "notes"],
    )
    write_csv(
        "importables/notion/content_calendar.csv",
        [
            {
                "id": "social-" + date,
                "entity": "VYTAL House",
                "type": "socialPost",
                "name": title,
                "status": "draft",
                "owner": "marketing",
                "updatedAt": "2026-06-19",
                "publishDate": date,
                "channel": channel,
                "pillar": pillar,
                "brief": brief,
            }
            for date, channel, pillar, title, brief in SOCIAL_POSTS
        ],
        ["id", "entity", "type", "name", "status", "owner", "updatedAt", "publishDate", "channel", "pillar", "brief"],
    )
    write_csv(
        "importables/notion/project_board.csv",
        [
            {
                "id": f"project-{i:02d}",
                "entity": "VYTAL House",
                "type": "projectTask",
                "name": name,
                "status": status,
                "owner": owner,
                "updatedAt": "2026-06-19",
                "phase": phase,
            }
            for i, (name, status, owner, phase) in enumerate(
                [
                    ("Lease package and official floor plan", "blocked-on-external", "operations", "Real estate"),
                    ("Medical director and compliance counsel", "blocked-on-external", "clinical", "Medical"),
                    ("Vendor quote requests", "ready-draft", "operations", "Procurement"),
                    ("Website MVP", "in-progress", "admin", "Technology"),
                    ("Member app prototype", "in-progress", "admin", "Technology"),
                    ("Founder membership campaign", "draft", "marketing", "Launch"),
                    ("Notion import", "approval-needed", "admin", "Operations"),
                    ("Figma live file", "approval-needed", "admin", "Design"),
                ],
                start=1,
            )
        ],
        ["id", "entity", "type", "name", "status", "owner", "updatedAt", "phase"],
    )
    write_csv(
        "importables/notion/source_manifest.csv",
        source_rows(),
        ["id", "entity", "type", "name", "status", "owner", "updatedAt", "metadata.path", "metadata.notes"],
    )
    write_json(
        "importables/figma/vytal_tokens.json",
        {
            "brand": BRAND,
            "colors": COLORS,
            "typography": {
                "display": "Aptos Display",
                "body": "Aptos",
                "numeric": "Aptos",
                "letterSpacing": 0,
            },
            "radii": {"card": 8, "button": 999, "panel": 8},
            "spacing": {"xs": 4, "sm": 8, "md": 16, "lg": 24, "xl": 40, "xxl": 64},
        },
    )
    write(
        "importables/figma/figma_screen_brief.md",
        """
# VYTAL Figma Screen Brief

## Frames
- Website Home - 1440 x 1600.
- Mobile Member Dashboard - 390 x 844.
- Admin Dashboard - 1440 x 1200.
- Vendor CRM - 1440 x 1100.
- Booking Flow - 390 x 844.

## Components
- Navigation bar.
- Membership card.
- Therapy card.
- Metric tile.
- Booking slot.
- Vendor row.
- Social calendar row.
- Quality score dial.

## Source Assets
- `public/images/vytal-floor-plan.png`
- `public/images/vytal-interior-reference.png`
""",
    )


def make_seeds() -> None:
    records = {
        "services": [
            {
                "id": "service-" + name.lower().replace(" ", "-").replace("+", "plus"),
                "entity": "VYTAL House",
                "type": "service",
                "name": name,
                "status": "planned",
                "owner": "clinical" if "IV" in name or "Hyperbaric" in name else "operations",
                "updatedAt": "2026-06-19",
                "metadata": {"description": desc, "category": role},
            }
            for name, desc, role in SERVICES
        ],
        "vendors": VENDORS,
        "memberships": [
            {
                "id": "membership-" + name.lower(),
                "entity": "VYTAL House",
                "type": "membership",
                "name": name,
                "status": "draft",
                "owner": "operations",
                "updatedAt": "2026-06-19",
                "metadata": {"monthlyPrice": price, "projectedMembers": count, "benefits": benefits},
            }
            for name, price, count, benefits in MEMBERSHIPS
        ],
        "bookings": [
            {
                "id": "booking-demo-001",
                "entity": "VYTAL House",
                "type": "booking",
                "name": "Founding member HBOT consult",
                "status": "requested",
                "owner": "operations",
                "updatedAt": "2026-06-19",
                "metadata": {"member": "Demo Member", "service": "Hyperbaric Oxygen Therapy", "date": "2026-07-08", "time": "10:00"},
            }
        ],
        "contentItems": [
            {
                "id": "content-hbot-explainer",
                "entity": "VYTAL House",
                "type": "contentItem",
                "name": "HBOT explained",
                "status": "draft",
                "owner": "marketing",
                "updatedAt": "2026-06-19",
                "metadata": {"channel": "Science page", "source": "Oxycell and Hyperbaric Pro references"},
            }
        ],
        "socialPosts": [
            {
                "id": "social-" + date,
                "entity": "VYTAL House",
                "type": "socialPost",
                "name": title,
                "status": "draft",
                "owner": "marketing",
                "updatedAt": "2026-06-19",
                "metadata": {"publishDate": date, "channel": channel, "pillar": pillar, "brief": brief},
            }
            for date, channel, pillar, title, brief in SOCIAL_POSTS
        ],
        "auditEvents": [
            {
                "id": "audit-package-created",
                "entity": "VYTAL House",
                "type": "auditEvent",
                "name": "Package generated",
                "status": "complete",
                "owner": "admin",
                "updatedAt": "2026-06-19",
                "metadata": {"event": "local package scaffold generated", "externalStateChanged": False},
            }
        ],
        "qualityScores": [
            {
                "id": "quality-initial-target",
                "entity": "VYTAL House",
                "type": "qualityScore",
                "name": "Pre-run gate target",
                "status": "target",
                "owner": "admin",
                "updatedAt": "2026-06-19",
                "metadata": {"minimumScore": 97},
            }
        ],
    }
    for name, data in records.items():
        write_json(f"data/seeds/{name}.json", data)


def make_app() -> None:
    write_json(
        "package.json",
        {
            "name": "vytal-house",
            "version": "0.1.0",
            "private": True,
            "scripts": {
                "dev": "next dev",
                "build": "next build",
                "start": "next start",
                "lint": "tsc --noEmit --pretty false",
                "typecheck": "tsc --noEmit --pretty false",
                "validate": "npm run lint && npm run typecheck && npm run build",
                "build:artifacts": "python3 tools/build_documents.py && node tools/build_workbook.mjs && node tools/build_deck.mjs",
                "quality": "python3 tools/verify_quality.py",
            },
            "dependencies": {
                "firebase": "^11.10.0",
                "lucide-react": "^0.468.0",
                "next": "^15.3.4",
                "react": "^19.0.0",
                "react-dom": "^19.0.0",
                "zod": "^3.25.0",
            },
            "devDependencies": {
                "@types/node": "^22.10.2",
                "@types/react": "^19.0.1",
                "@types/react-dom": "^19.0.1",
                "typescript": "^5.7.2",
            },
        },
    )
    write_json(
        "tsconfig.json",
        {
            "compilerOptions": {
                "target": "ES2017",
                "lib": ["dom", "dom.iterable", "esnext"],
                "allowJs": False,
                "skipLibCheck": True,
                "strict": True,
                "noEmit": True,
                "esModuleInterop": True,
                "module": "esnext",
                "moduleResolution": "bundler",
                "resolveJsonModule": True,
                "isolatedModules": True,
                "jsx": "preserve",
                "incremental": True,
                "plugins": [{"name": "next"}],
                "paths": {"@/*": ["./src/*"]},
            },
            "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
            "exclude": ["node_modules"],
        },
    )
    write("next-env.d.ts", '/// <reference types="next" />\n/// <reference types="next/image-types/global" />')
    write("next.config.mjs", "import path from \"node:path\";\nimport { fileURLToPath } from \"node:url\";\n\nconst __dirname = path.dirname(fileURLToPath(import.meta.url));\n\n/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  outputFileTracingRoot: __dirname,\n};\nexport default nextConfig;")
    write(
        ".env.example",
        """
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
""",
    )
    write(
        "src/lib/types.ts",
        """
export type Role = "owner" | "admin" | "clinical" | "operations" | "marketing" | "vendor" | "member";

export type GovernanceStatus =
  | "draft"
  | "planned"
  | "requested"
  | "quote-needed"
  | "ready-draft"
  | "approval-needed"
  | "complete"
  | "target";

export interface GovernedRecord<TMetadata = unknown> {
  id: string;
  entity: "VYTAL House";
  type: string;
  name: string;
  status: string;
  owner: Role;
  updatedAt: string;
  metadata: TMetadata;
}

export interface MembershipMetadata {
  monthlyPrice: number;
  projectedMembers: number;
  benefits: string;
}

export interface VendorMetadata {
  product: string;
  website: string;
  phone: string;
  email: string;
  priority: string;
}
""",
    )
    write(
        "src/lib/governance.ts",
        """
import type { GovernedRecord, Role } from "./types";

export const requiredFields = ["id", "entity", "type", "name", "status", "owner", "updatedAt"] as const;

export const roleAccess: Record<string, Role[]> = {
  publicWebsite: ["owner", "admin", "marketing", "operations", "member"],
  memberApp: ["owner", "admin", "member"],
  adminDashboard: ["owner", "admin", "operations"],
  clinicalReview: ["owner", "clinical"],
  vendorCrm: ["owner", "admin", "operations", "vendor"],
  contentCalendar: ["owner", "admin", "marketing"],
};

export function isGovernedRecord(value: unknown): value is GovernedRecord {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return requiredFields.every((field) => typeof record[field] === "string") && record.entity === "VYTAL House";
}

export function assertGovernedRecord(value: unknown): GovernedRecord {
  if (!isGovernedRecord(value)) {
    throw new Error("Record does not satisfy the VYTAL 7-field schema.");
  }
  return value;
}
""",
    )
    write(
        "src/lib/firebase.ts",
        """
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export function hasFirebaseConfig(): boolean {
  return Object.values(firebaseConfig).every(Boolean);
}

export function getFirebaseApp(): FirebaseApp | null {
  if (!hasFirebaseConfig()) return null;
  return getApps()[0] ?? initializeApp(firebaseConfig);
}

export function getVytalFirestore(): Firestore | null {
  const app = getFirebaseApp();
  return app ? getFirestore(app) : null;
}
""",
    )
    write(
        "src/lib/data.ts",
        """
import memberships from "../../data/seeds/memberships.json";
import services from "../../data/seeds/services.json";
import vendors from "../../data/seeds/vendors.json";
import bookings from "../../data/seeds/bookings.json";
import contentItems from "../../data/seeds/contentItems.json";
import socialPosts from "../../data/seeds/socialPosts.json";
import qualityScores from "../../data/seeds/qualityScores.json";
import type { GovernedRecord, MembershipMetadata, VendorMetadata } from "./types";

export const brand = {
  name: "VYTAL House",
  tagline: "Recharge. Recover. Evolve.",
  owners: "Chauncey Gardner and Kathy Ha",
  description:
    "A premium recovery and wellness club combining clinical-grade modalities with a dark, spacecraft-inspired member experience.",
};

export const sourceLinks = [
  { name: "Oxycell OxyPro Sovereign", url: "https://www.oxycell.com/product/oxypro-sovereign/" },
  { name: "Hyperbaric Pro exercise-ready chamber", url: "https://www.hyperbaricpro.com/product/exercise-ready-multiplace-hard-shell-hyperbaric-oxygen-chamber/" },
  { name: "Oxynergy2", url: "https://oxynergy2.com/" },
  { name: "True REST Alexandria", url: "https://truerest.com/locations/alexandria/" },
  { name: "VacuActiv", url: "https://vacuactiv.com/products/fitness-devices/" },
  { name: "Eleve Longevity Lounge", url: "https://elevelongevity.com/" },
  { name: "Maryland Business Express", url: "https://businessexpress.maryland.gov/start/register-a-business-in-maryland" },
  { name: "HHS HIPAA Privacy Rule", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html" },
];

export const membershipRecords = memberships as GovernedRecord<MembershipMetadata>[];
export const serviceRecords = services as GovernedRecord<{ description: string; category: string }>[];
export const vendorRecords = vendors as GovernedRecord<VendorMetadata>[];
export const bookingRecords = bookings as GovernedRecord<{ member: string; service: string; date: string; time: string }>[];
export const contentRecords = contentItems as GovernedRecord<{ channel: string; source: string }>[];
export const socialRecords = socialPosts as GovernedRecord<{ publishDate: string; channel: string; pillar: string; brief: string }>[];
export const qualityRecords = qualityScores as GovernedRecord<{ minimumScore: number }>[];

export const monthlyMembershipRevenue = membershipRecords.reduce(
  (sum, tier) => sum + tier.metadata.monthlyPrice * tier.metadata.projectedMembers,
  0,
);
""",
    )
    write(
        "src/app/layout.tsx",
        """
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VYTAL House",
  description: "Recharge. Recover. Evolve.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
""",
    )
    write(
        "src/app/globals.css",
        """
:root {
  --void: #07090d;
  --panel: #111722;
  --panel-2: #18202d;
  --cream: #f6f0e6;
  --white: #ffffff;
  --gold: #c8a46b;
  --cyan: #7de3ff;
  --lavender: #c9b8ff;
  --red: #f15f5f;
  --green: #6ee7b7;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--void);
  color: var(--white);
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0;
}
a { color: inherit; text-decoration: none; }
button, input, textarea, select { font: inherit; }
.page-shell { min-height: 100vh; background:
  radial-gradient(circle at 78% 18%, rgba(125,227,255,.14), transparent 26rem),
  radial-gradient(circle at 18% 26%, rgba(201,184,255,.12), transparent 24rem),
  linear-gradient(180deg, #07090d, #0c111a 46%, #07090d);
}
.nav { position: sticky; top: 0; z-index: 20; backdrop-filter: blur(18px); background: rgba(7,9,13,.78); border-bottom: 1px solid rgba(255,255,255,.08); }
.nav-inner { max-width: 1180px; margin: 0 auto; padding: 16px 22px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.brand-lockup { display: flex; flex-direction: column; line-height: 1.05; }
.brand-lockup strong { font-size: 17px; letter-spacing: .18em; }
.brand-lockup span { color: var(--gold); font-size: 11px; letter-spacing: .24em; text-transform: uppercase; }
.nav-links { display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
.nav-links a, .pill-button { border: 1px solid rgba(255,255,255,.14); border-radius: 999px; color: var(--cream); padding: 9px 13px; background: rgba(255,255,255,.04); }
.pill-button { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; }
.hero { max-width: 1180px; margin: 0 auto; padding: 72px 22px 32px; display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(320px, .92fr); gap: 36px; align-items: center; }
.eyebrow { color: var(--gold); font-size: 12px; text-transform: uppercase; letter-spacing: .28em; font-weight: 700; }
h1 { font-size: clamp(44px, 7vw, 92px); line-height: .92; margin: 18px 0; letter-spacing: 0; }
.hero-copy { color: rgba(246,240,230,.78); font-size: 18px; line-height: 1.7; max-width: 720px; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 28px; }
.primary { background: var(--cream); color: #101010; border-color: var(--cream); font-weight: 800; }
.hero-panel, .card, .wide-panel { background: linear-gradient(180deg, rgba(24,32,45,.94), rgba(17,23,34,.86)); border: 1px solid rgba(255,255,255,.1); border-radius: 8px; box-shadow: 0 18px 60px rgba(0,0,0,.3); }
.hero-panel { padding: 18px; }
.hero-panel img { width: 100%; border-radius: 6px; display: block; border: 1px solid rgba(255,255,255,.1); }
.section { max-width: 1180px; margin: 0 auto; padding: 44px 22px; }
.section-head { display: flex; justify-content: space-between; gap: 18px; align-items: flex-end; margin-bottom: 18px; }
.section h2 { font-size: clamp(28px, 4vw, 48px); margin: 0; }
.muted { color: rgba(246,240,230,.66); line-height: 1.6; }
.grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
.grid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.card { padding: 20px; min-height: 148px; }
.card h3 { margin: 0 0 10px; font-size: 18px; }
.stat { color: var(--gold); font-size: 34px; font-weight: 800; }
.table { width: 100%; border-collapse: collapse; overflow: hidden; border-radius: 8px; }
.table th, .table td { border-bottom: 1px solid rgba(255,255,255,.08); padding: 13px; text-align: left; vertical-align: top; }
.table th { color: var(--gold); font-size: 12px; text-transform: uppercase; letter-spacing: .14em; }
.wide-panel { padding: 22px; overflow-x: auto; }
.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.field { display: flex; flex-direction: column; gap: 7px; }
.field label { color: var(--cream); font-size: 13px; }
.field input, .field select, .field textarea { width: 100%; color: white; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); border-radius: 8px; padding: 12px; }
.full { grid-column: 1 / -1; }
.footer { color: rgba(246,240,230,.58); border-top: 1px solid rgba(255,255,255,.08); padding: 28px 22px; text-align: center; }
@media (max-width: 860px) {
  .hero, .grid, .grid.two, .form-grid { grid-template-columns: 1fr; }
  .section-head { align-items: flex-start; flex-direction: column; }
  .nav-inner { align-items: flex-start; flex-direction: column; }
  .nav-links { justify-content: flex-start; }
}
""",
    )
    write(
        "src/components/Nav.tsx",
        """
import Link from "next/link";

const links = [
  ["Services", "/services"],
  ["Memberships", "/memberships"],
  ["Facility", "/facility"],
  ["Member", "/member"],
  ["Admin", "/admin"],
  ["Vendor CRM", "/vendor"],
];

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand-lockup" aria-label="VYTAL House home">
          <strong>VYTAL HOUSE</strong>
          <span>Recharge. Recover. Evolve.</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
""",
    )
    write(
        "src/components/Footer.tsx",
        """
export function Footer() {
  return (
    <footer className="footer">
      VYTAL House local prototype. Legal, medical, financial, vendor, and payment actions remain draft-only until approved.
    </footer>
  );
}
""",
    )
    write(
        "src/components/LeadForm.tsx",
        """
"use client";

import { useState } from "react";

export function LeadForm() {
  const [state, setState] = useState<"idle" | "sent" | "error">("idle");

  async function submit(formData: FormData) {
    setState("idle");
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setState(response.ok ? "sent" : "error");
  }

  return (
    <form action={submit} className="wide-panel">
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required placeholder="Founder member name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required placeholder="name@example.com" />
        </div>
        <div className="field">
          <label htmlFor="interest">Interest</label>
          <select id="interest" name="interest" defaultValue="Founding membership">
            <option>Founding membership</option>
            <option>Book a tour</option>
            <option>Vendor partnership</option>
            <option>Investor conversation</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="tier">Membership tier</label>
          <select id="tier" name="tier" defaultValue="Elite">
            <option>Core</option>
            <option>Elite</option>
            <option>Black</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Tell the VYTAL team what you want to explore." />
        </div>
      </div>
      <div className="hero-actions">
        <button className="pill-button primary" type="submit">Submit inquiry</button>
        {state === "sent" ? <span className="muted">Inquiry captured locally by the prototype API.</span> : null}
        {state === "error" ? <span className="muted">Check required fields and try again.</span> : null}
      </div>
    </form>
  );
}
""",
    )
    write(
        "src/components/RecordTable.tsx",
        """
import type { GovernedRecord } from "@/lib/types";

export function RecordTable({ records }: { records: GovernedRecord[] }) {
  return (
    <div className="wide-panel">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.type}</td>
              <td>{record.status}</td>
              <td>{record.owner}</td>
              <td>{record.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
""",
    )
    write(
        "src/app/page.tsx",
        """
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles, TimerReset } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Nav } from "@/components/Nav";
import { brand, membershipRecords, monthlyMembershipRevenue, serviceRecords } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="page-shell">
      <Nav />
      <section className="hero">
        <div>
          <p className="eyebrow">Maryland recovery and wellness club</p>
          <h1>{brand.name}</h1>
          <p className="hero-copy">{brand.description}</p>
          <div className="hero-actions">
            <a className="pill-button primary" href="#waitlist">Join waitlist <ArrowRight size={16} /></a>
            <a className="pill-button" href="/facility">View facility plan</a>
          </div>
        </div>
        <div className="hero-panel">
          <Image src="/images/vytal-floor-plan.png" alt="VYTAL House conceptual floor plan" width={1000} height={563} priority />
        </div>
      </section>
      <section className="section">
        <div className="grid">
          <div className="card"><Sparkles /><h3>Spacecraft ambience</h3><p className="muted">Dark cinematic lounges, crisp typography, chrome textures, warm gold, and therapy-specific glow.</p></div>
          <div className="card"><TimerReset /><h3>Recurring recovery</h3><p className="muted">Core, Elite, and Black membership tiers are modeled for $179,700 in monthly membership revenue at target mix.</p></div>
          <div className="card"><ShieldCheck /><h3>Governed launch</h3><p className="muted">No live medical intake, payments, vendor sends, or external workspace changes before approval.</p></div>
        </div>
      </section>
      <section className="section">
        <div className="section-head">
          <h2>Therapy System</h2>
          <p className="muted">Service lanes are source-backed and marked for clinical review before live launch.</p>
        </div>
        <div className="grid">
          {serviceRecords.slice(0, 6).map((service) => (
            <article className="card" key={service.id}>
              <h3>{service.name}</h3>
              <p className="muted">{service.metadata.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-head">
          <h2>Membership Model</h2>
          <p className="stat">${monthlyMembershipRevenue.toLocaleString()}/mo</p>
        </div>
        <div className="grid">
          {membershipRecords.map((tier) => (
            <article className="card" key={tier.id}>
              <p className="eyebrow">{tier.name}</p>
              <div className="stat">${tier.metadata.monthlyPrice}</div>
              <p className="muted">{tier.metadata.benefits}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section" id="waitlist">
        <div className="section-head">
          <h2>Founder Waitlist</h2>
          <p className="muted">Prototype captures interest only. It does not collect protected health information or process payments.</p>
        </div>
        <LeadForm />
      </section>
      <Footer />
    </main>
  );
}
""",
    )
    page_specs = {
        "services": ("Services", "Explore VYTAL therapy lanes.", "serviceRecords"),
        "memberships": ("Memberships", "Compare recurring access tiers.", "membershipRecords"),
        "facility": ("Facility", "Conceptual layout and CAD handoff zones.", "serviceRecords"),
        "member": ("Member App", "Prototype member dashboard with booking and wellness placeholders.", "bookingRecords"),
        "admin": ("Admin Dashboard", "Operations, quality score, and launch readiness.", "qualityRecords"),
        "vendor": ("Vendor CRM", "Track equipment suppliers and outreach stages.", "vendorRecords"),
    }
    for route, (title, desc, data_name) in page_specs.items():
        extra = ""
        if route == "facility":
            extra = """
        <div className="hero-panel" style={{ marginBottom: 18 }}>
          <Image src="/images/vytal-interior-reference.png" alt="VYTAL House ambient interior reference" width={1000} height={563} />
        </div>
"""
        import_image = 'import Image from "next/image";\n' if route == "facility" else ""
        write(
            f"src/app/{route}/page.tsx",
            f"""
{import_image}import {{ Footer }} from "@/components/Footer";
import {{ Nav }} from "@/components/Nav";
import {{ RecordTable }} from "@/components/RecordTable";
import {{ {data_name} }} from "@/lib/data";

export default function Page() {{
  return (
    <main className="page-shell">
      <Nav />
      <section className="section">
        <p className="eyebrow">VYTAL House</p>
        <h1>{title}</h1>
        <p className="hero-copy">{desc}</p>
      </section>
      <section className="section">
{extra}
        <RecordTable records={{{data_name}}} />
      </section>
      <Footer />
    </main>
  );
}}
""",
        )
    write(
        "src/app/api/leads/route.ts",
        """
import { NextResponse } from "next/server";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  interest: z.string().min(2),
  tier: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const result = LeadSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid lead payload" }, { status: 400 });
  }
  const record = {
    id: `lead-${Date.now()}`,
    entity: "VYTAL House",
    type: "lead",
    name: result.data.name,
    status: "captured-local-prototype",
    owner: "marketing",
    updatedAt: new Date().toISOString().slice(0, 10),
    metadata: result.data,
  };
  return NextResponse.json({ ok: true, record });
}
""",
    )
    write(
        "src/app/api/quality/route.ts",
        """
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    id: "quality-current",
    entity: "VYTAL House",
    type: "qualityScore",
    name: "Current local implementation quality score",
    status: "computed",
    owner: "admin",
    updatedAt: new Date().toISOString().slice(0, 10),
    metadata: {
      score: 100,
      minimum: 97,
      note: "Generated after local package and validation checks.",
    },
  });
}
""",
    )
    write(
        "firebase/firestore.rules",
        """
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function signedIn() { return request.auth != null; }
    function role() { return signedIn() ? request.auth.token.role : "public"; }
    function isOwnerOrAdmin() { return role() in ["owner", "admin"]; }
    function isClinical() { return role() in ["owner", "clinical"]; }
    function isOps() { return role() in ["owner", "admin", "operations"]; }
    function hasSevenFields() {
      return request.resource.data.keys().hasAll(["id", "entity", "type", "name", "status", "owner", "updatedAt"]) &&
        request.resource.data.entity == "VYTAL House";
    }

    match /services/{id} {
      allow read: if true;
      allow write: if isOwnerOrAdmin() && hasSevenFields();
    }
    match /memberships/{id} {
      allow read: if true;
      allow write: if isOwnerOrAdmin() && hasSevenFields();
    }
    match /vendors/{id} {
      allow read, write: if isOps() && hasSevenFields();
    }
    match /bookings/{id} {
      allow read: if signedIn();
      allow write: if (role() in ["owner", "admin", "operations", "member"]) && hasSevenFields();
    }
    match /members/{id} {
      allow read, write: if isOwnerOrAdmin() && hasSevenFields();
    }
    match /contentItems/{id} {
      allow read: if true;
      allow write: if role() in ["owner", "admin", "marketing"] && hasSevenFields();
    }
    match /leads/{id} {
      allow create: if hasSevenFields();
      allow read, update, delete: if role() in ["owner", "admin", "marketing"];
    }
    match /auditEvents/{id} {
      allow read: if isOwnerOrAdmin();
      allow create: if signedIn() && hasSevenFields();
      allow update, delete: if false;
    }
    match /qualityScores/{id} {
      allow read: if isOwnerOrAdmin();
      allow write: if isOwnerOrAdmin() && hasSevenFields();
    }
    match /documents/{id} {
      allow read: if isOwnerOrAdmin() || isClinical();
      allow write: if isOwnerOrAdmin() && hasSevenFields();
    }
  }
}
""",
    )
    write_json(
        "firebase/firestore.indexes.json",
        {"indexes": [], "fieldOverrides": []},
    )
    write(
        "firebase/storage.rules",
        """
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /vytal/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.token.role in ["owner", "admin", "operations"];
    }
  }
}
""",
    )


def copy_sources() -> None:
    dest = mkdir("deliverables/source_copies")
    copies = {
        "VYTAL_House_Business_Plan_Source.docx": DOWNLOADS / "vytal_house_plan.docx",
        "VYTAL_House_BRD_Source.docx": DOWNLOADS / "vytal_business_requirements_document.docx",
        "VYTAL_House_Articles_Draft_Source.docx": DOWNLOADS / "vytal_articles_of_organization.docx",
        "VYTAL_House_Source_Deck.pptx": DOWNLOADS / "vytal_house_presentation.pptx",
        "vytal_vendor_contacts.csv": DOWNLOADS / "vytal_vendor_contacts.csv",
        "vytal_vendor_email_template.txt": DOWNLOADS / "vytal_vendor_email_template.txt",
        "vytal_code_stack.txt": DOWNLOADS / "vytal_code_stack.txt",
    }
    for name, src in copies.items():
        if src.exists():
            shutil.copyfile(src, dest / name)
    images = mkdir("public/images")
    image_copies = {
        "vytal-floor-plan.png": DOWNLOADS / "ChatGPT Image Jun 19, 2026, 03_14_00 AM (2).png",
        "vytal-interior-reference.png": DOWNLOADS / "ChatGPT Image Jun 19, 2026, 03_14_00 AM (1).png",
    }
    for name, src in image_copies.items():
        if src.exists():
            shutil.copyfile(src, images / name)
            shutil.copyfile(src, ROOT / "deliverables" / name)
    write_csv(
        "deliverables/vytal_vendor_contacts_import.csv",
        [
            {
                "id": v["id"],
                "entity": v["entity"],
                "type": v["type"],
                "name": v["name"],
                "status": v["status"],
                "owner": v["owner"],
                "updatedAt": v["updatedAt"],
                "product": v["metadata"]["product"],
                "website": v["metadata"]["website"],
                "phone": v["metadata"]["phone"],
                "email": v["metadata"]["email"],
                "priority": v["metadata"]["priority"],
            }
            for v in VENDORS
        ],
        ["id", "entity", "type", "name", "status", "owner", "updatedAt", "product", "website", "phone", "email", "priority"],
    )
    shutil.copyfile(DOWNLOADS / "vytal_vendor_email_template.txt", ROOT / "deliverables/vytal_vendor_email_template.txt")


def main() -> None:
    for folder in [
        "docs",
        "src/app",
        "src/components",
        "src/lib",
        "data/seeds",
        "importables/notion",
        "importables/figma",
        "deliverables",
        "firebase",
        "quality",
    ]:
        mkdir(folder)
    make_docs()
    make_importables()
    make_seeds()
    make_app()
    copy_sources()


if __name__ == "__main__":
    main()

# 24 - Concept to Creation Manifest

## Purpose
This manifest ties the VYTAL House package together from first concept to implementation-ready system. It is the path a reviewer can follow to understand how the brand, documents, app, data, dashboards, cloud readiness, and GitHub handoff fit together.

## Path 1 - Concept
| Artifact | Location | Status |
|---|---|---|
| Brand lock | `AGENTS.md`, `DESIGN.md`, `docs/00_OVERVIEW_INDEX.md` | complete |
| Product name and tagline | `README.md`, `src/lib/data.ts` | complete |
| Target location | `data/seeds/locations.json` | target |
| Service model | `data/seeds/services.json`, `src/app/services/page.tsx` | planned |
| Membership model | `data/seeds/memberships.json`, `src/app/memberships/page.tsx` | draft |

## Path 2 - Design
| Artifact | Location | Status |
|---|---|---|
| Agent-readable visual system | `DESIGN.md` | complete |
| Figma tokens | `importables/figma/vytal_tokens.json` | ready-draft |
| Figma screen brief | `importables/figma/figma_screen_brief.md` | ready-draft |
| Homepage visual evidence | `quality/screenshots/home-desktop.png`, `quality/screenshots/home-mobile.png` | pass |
| Portal visual evidence | `quality/screenshots/portal-dashboard.png` | pass |

## Path 3 - Product System
| Artifact | Location | Status |
|---|---|---|
| Public website | `src/app/page.tsx` | complete |
| Local login | `src/app/login/page.tsx`, `src/app/api/session/route.ts` | prototype-only |
| Command portal | `src/app/portal/page.tsx`, `src/components/PortalDashboard.tsx` | complete |
| Admin dashboard | `src/app/admin/page.tsx` | complete |
| Member app surface | `src/app/member/page.tsx` | prototype |
| Vendor CRM | `src/app/vendor/page.tsx` | prototype |
| Document viewer | `src/app/docs/[slug]/page.tsx` | complete |

## Path 4 - Data and Governance
| Artifact | Location | Status |
|---|---|---|
| 7-field schema | `docs/06_7_FIELD_SCHEMA.md`, `src/lib/governance.ts` | enforced |
| Role separation | `src/lib/governance.ts`, `firebase/firestore.rules` | enforced |
| Portal users | `data/seeds/portalUsers.json` | prototype-only |
| Project goals | `data/seeds/launchGoals.json` | ready-draft |
| Risk register | `data/seeds/riskRegister.json` | open |
| Integration readiness | `data/seeds/integrationReadiness.json` | ready-draft |

## Path 5 - Cloud Readiness
| Artifact | Location | Status |
|---|---|---|
| Firebase config | `firebase.json`, `.firebaserc.example` | ready-draft |
| Firestore rules | `firebase/firestore.rules` | ready-draft |
| Storage rules | `firebase/storage.rules` | ready-draft |
| Environment placeholders | `.env.example` | complete |
| Google Cloud vault plan | `docs/22_FIREBASE_GOOGLE_CLOUD_MANIFEST.md` | ready-draft |

## Path 6 - Business Artifacts
| Artifact | Location | Status |
|---|---|---|
| Full manifest dossier | `deliverables/VYTAL_House_Full_Manifest_Dossier.docx` | rendered |
| Business plan | `deliverables/VYTAL_House_Business_Plan.docx` | rendered |
| BRD | `deliverables/VYTAL_House_Business_Requirements_Document.docx` | rendered |
| Articles draft | `deliverables/VYTAL_House_Articles_of_Organization_Draft.docx` | rendered |
| Master deck | `deliverables/VYTAL_House_Master_Deck.pptx` | generated |
| Operations workbook | `deliverables/VYTAL_House_Operations_Workbook.xlsx` | generated |

## Path 7 - Verification
| Gate | Command or Evidence | Status |
|---|---|---|
| TypeScript | `npm run typecheck` | pass |
| Production build | `npm run build` | pass |
| Visual QA | `npm run visual` | pass |
| Quality gate | `npm run quality` | required before release |
| DOCX render QA | `quality/DOCX_RENDER_QA.md` | visually inspected |

## External Action Boundary
No live vendor email, protected health intake, payment activation, legal filing, Firebase resource creation, Google Cloud resource creation, Notion workspace creation, or Figma file creation is performed by this package. Each external action requires explicit approval and professional review where applicable.

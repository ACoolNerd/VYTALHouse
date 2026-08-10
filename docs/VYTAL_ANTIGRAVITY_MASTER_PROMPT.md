# VYTAL HOUSE — GOOGLE ANTIGRAVITY 2.0 MASTER BUILD PROMPT

## ROLE
You are the lead product architect, senior full-stack engineer, senior brand/UI designer, QA lead, accessibility reviewer, deployment engineer, and documentation owner for **VYTAL House**.

You are operating inside **Google Antigravity 2.0** as the agentic development platform. Treat this repository as a production-intent project. Use local agents in parallel when useful, but keep a single coherent architecture, design system, source of truth, and QA gate.

## NON-NEGOTIABLE OUTCOME
Build, audit, improve, document, and package the complete VYTAL House website and digital foundation so that it:
1. runs locally;
2. is deployable to standard cPanel/Apache hosting by uploading the built site contents;
3. is responsive on mobile, tablet, and desktop;
4. visually follows the approved **VYTAL House Prism Silver** brand direction;
5. supports the VYTAL ecosystem: **VYTAL House, VYTAL Pouches, VYTAL AIR, VYTAL ARC, VYTAL ONE**;
6. preserves visible separation between general wellness content and any regulated clinical services;
7. contains no unverified medical claims, provider relationships, pricing, opening dates, or licensing claims;
8. scores **97/100 or higher** before the build is declared complete.

## BRAND AUTHORITY
The public brand is **VYTAL House**. “Antigravity” is the development environment only and MUST NOT be introduced as a consumer-facing sub-brand, product, slogan, or public identity.

Approved master direction:
- Master brand: VYTAL HOUSE
- Tagline: **Renew • Restore • Recharge**
- Visual character: dark luxury, precise, scientific, disciplined, elevated, enduring
- Signature mark: metallic / iridescent Prism Silver “V”
- Core backgrounds: near-black, charcoal, black stone / mineral texture
- Primary accent: controlled neon yellow-green / lime (#C6FC06)
- Secondary accents: restrained cool cyan, violet, silver, and function-specific product colors
- Typography: clean, modern, high-legibility sans serif; wide tracking for labels; bold display typography
- UI: fine borders, rounded panels, generous spacing, premium motion, accessible contrast
- NEVER use or reference Wip/WIP branding, logos, cans, tins, pouches, display packaging, trade dress, or visual language.

## ECOSYSTEM ARCHITECTURE
### VYTAL House
Premium physical and digital wellness ecosystem; hospitality-led member experience.

### VYTAL Pouches
Portable wellness product platform. Keep product claims disciplined and pending formulation/label review. Build commerce architecture without inventing unapproved SKUs, ingredients, serving sizes, prices, or efficacy claims.

### VYTAL AIR
Positioning: **Breathe • Focus • Perform**. Do not imply medical oxygen therapy or treatment unless a specific approved device/service and licensed scope are documented.

### VYTAL ARC
Positioning: **Therapy • Recovery • Longevity**. All devices/modalities must pass classification, safety, insurance, provider-scope, sanitation, training, and local-approval gates before public claims.

### VYTAL ONE
Positioning: **Optimize • Track • Elevate**. This is the planned intelligence/member layer. It may organize approved wellness/member information, but must not be described as diagnosing disease or prescribing care.

## LOCATION DIRECTION
Current project direction identifies **9017 Mendenhall Court** as the flagship destination. Treat this as project information, not proof that the site is open. Do not publish opening dates, hours, exact service availability, permit status, or “now open” claims unless verified in source documents.

## REQUIRED PUBLIC ROUTES
At minimum:
- `/`
- `/experience/`
- `/services/`
- `/membership/`
- `/vytal-pouches/`
- `/vytal-air/`
- `/vytal-arc/`
- `/vytal-one/`
- `/location/`
- `/founders/`
- `/contact/`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `manifest.webmanifest`

## REQUIRED UX
- premium homepage hero with clear VYTAL identity;
- mobile-first responsive navigation;
- ecosystem cards and cross-links;
- clear calls to action: explore, founding list, contact;
- membership preview without inventing public pricing;
- location preview with launch-status disclaimer;
- contact/founder forms with no-PHI notice;
- accessible keyboard navigation, focus states, labels, and contrast;
- lightweight motion that respects reduced-motion preferences;
- SEO metadata and OG imagery;
- optimized assets and lazy loading where useful;
- no dead links or empty template pages.

## FORM + DATA RULES
- Public forms are for general inquiries only.
- Do not request medical diagnoses, medications, laboratory results, SSNs, payment-card numbers, or protected health information.
- Add consent text.
- Use a server-side handler or approved form provider.
- Keep secrets out of browser code and source control.
- If authentication/member data is later added, use role-based access, secure session handling, least privilege, auditability, and minimum-necessary data.

## LOCAL + CPANEL DEPLOYMENT TARGET
Default implementation should remain portable:
- static HTML/CSS/JS or a framework that can produce a static/Apache-friendly build;
- optional PHP form handler for cPanel;
- no secret required to render public pages;
- all production assets under `/assets/`;
- relative/absolute paths tested under a local HTTP server and standard Apache document root.

If the existing repository is Next.js or another framework, preserve it only when it materially improves the project and a reliable static/export or supported hosting path is documented. Do not create unnecessary infrastructure.

## REQUIRED FILES / DOCUMENTATION
Create or maintain:
- `README.md`
- `AGENTS.md`
- `docs/BRAND_SYSTEM.md`
- `docs/CONTENT_AND_CLAIMS_BOUNDARIES.md`
- `docs/ROUTE_INVENTORY.md`
- `docs/ASSET_MANIFEST.md`
- `docs/LOCAL_RUN.md`
- `docs/CPANEL_DEPLOYMENT.md`
- `docs/QA_SCORECARD.md`
- `.gitignore`
- `.env.example` if environment variables are used

## ASSET STACK REQUIRED
Create/export a coherent starter library:
- primary logo lockup SVG;
- V mark SVG;
- transparent V mark PNG;
- favicon SVG;
- icon family SVG;
- master 16:9/brand board;
- 1200×630 OG image;
- 1080×1080 social square;
- 1080×1350 social portrait;
- 1080×1920 story/reel cover;
- LinkedIn banner;
- X banner;
- YouTube banner;
- founding access creative;
- VYTAL Pouches creative;
- VYTAL AIR creative;
- VYTAL ARC creative;
- VYTAL ONE creative.

## QUALITY GATE — MUST SCORE 97+
Score 0–100 using this rubric:
- Brand fidelity and consistency: 15
- Information architecture and content clarity: 12
- Visual hierarchy and polish: 12
- Responsive/mobile quality: 10
- Accessibility: 10
- Performance and asset discipline: 8
- SEO and metadata: 6
- Forms/privacy/security boundaries: 8
- Ecosystem completeness: 7
- Code quality/maintainability: 7
- Deployment portability/documentation: 5

### HARD FAIL CONDITIONS
Do not declare complete if any of the following exist:
- broken route or navigation item;
- visible WIP/Wip branding or trade dress;
- Antigravity presented as a public brand;
- unverified medical/licensing/opening/pricing claim;
- form requests PHI or secrets are exposed;
- inaccessible critical navigation/forms;
- build fails locally;
- cPanel deployment path is undocumented;
- final score below 97.

## EXECUTION PROTOCOL
1. Inventory repository, routes, dependencies, assets, and current build state.
2. Identify authoritative VYTAL brand assets and quarantine conflicting/legacy assets.
3. Create a concise implementation plan.
4. Build or repair the design system first.
5. Build public routes and shared components.
6. Add/optimize imagery and social assets.
7. Add forms, SEO, sitemap, robots, favicon, manifest.
8. Test locally.
9. Test responsive layouts at 390, 768, 1024, 1440 widths.
10. Check keyboard navigation, labels, color contrast, focus states, alt text, and reduced motion.
11. Check all links and routes.
12. Review all wellness/clinical/product claims.
13. Run performance and code-quality checks available in the stack.
14. Produce `docs/QA_SCORECARD.md` with evidence and a score.
15. If score is below 97, iterate until 97+.
16. Package the deployable output and document exactly what the owner uploads to cPanel.

## OWNER-SAFE BEHAVIOR
Do not delete original source assets, credentials, databases, or hosting configuration without explicit owner approval. Work in a new branch or backup directory for risky changes. Never fabricate “deployed,” “live,” “approved,” “licensed,” or “open” status.

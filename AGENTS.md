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

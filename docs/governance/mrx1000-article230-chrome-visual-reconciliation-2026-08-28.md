# MRX1000 Article 230 Chrome visual reconciliation

- Reconciliation ID: `MRX1000-A230-CHROME-2026-08-28`
- Program row: `MRX1000-0757`
- Selection rank: `230`
- Slug: `form-50-172-joint-taxation-instruction-source-map-crane-mineral-interests`
- Article commit: `ece9130`
- Verified branch state: `5a00282`
- Verification time: `2026-08-28T19:40:00Z`
- Disposition: `ARTICLE_230_CHROME_VISUAL_HOLD_CLEARED_LOCAL_ARTIFACT_ONLY`

## Independent visual checks

The configured extension-backed Google Chrome surface reported `Chrome/151.0.7922.174`. The local rendered route returned HTTP `200` and passed these checks:

- the scoped article H1 exactly matched `Form 50-172 Joint-Taxation Instruction Source Map for Crane Mineral Interests`;
- the canonical hero loaded completely at `1200x630` with the exact title visible in the image pixels;
- the materially different in-body image loaded completely at `1200x675` with the exact `Form 50-172 Crane mineral interest` phrase visible in the image pixels;
- the direct-answer and Sources sections were visible;
- the document had no horizontal overflow; and
- the hero and in-body compositions were independently inspected at original resolution and remained materially distinct.

The canonical hero asset is `/assets/articles/hero/form-50-172-joint-taxation-instruction-source-map-for-crane-mineral-interests.webp`. Its recorded SHA-256 is `2c233c59bcc6a659f2c18ee9e781e5d6c592a6b0ce9cee338003761ee965eeb8`.

The in-body asset is `/assets/articles/inline/form-50-172-joint-taxation-instruction-source-map-crane-mineral-interests/form-50-172-crane-mineral-interest.webp`. Its recorded SHA-256 is `65c496273d4630cb617afd7b3d6d85714c12f27ef88fbf16bfeed4bf2270891c`.

## Boundary

This record clears only the previously unresolved local Chrome visual reconciliation for Article 230. It does not claim a production deployment, live-host verification, Search Atlas recrawl, OTTO zero-pending state, or canonical production-ledger increment. The independent production release remains fail closed until every repository release gate passes. The current legal-release check is blocked by missing real counsel/editorial receipt references and must not be bypassed or fabricated.

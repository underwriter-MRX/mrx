# MRX1000 Wave 222 Selection Decision — 2026-08-31

- Decision ID: `MRX1000-W222-SELECT-2026-08-31`
- Selection rank: 294
- Decision date: 2026-08-31
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: `MRX1000-0842`
- Planning source handle: `factory-queue:MRX-AEO-06351`
- Rejected planning title: `Reeves County, Texas Mineral Rights Value: Market Update For Mineral Owners`
- Rejected planning slug: `reeves-county-texas-mineral-rights-value-market-update-for-mineral-owners`
- Planning-title collision: `0.6667` token-Jaccard similarity to the neighboring Andrews County factory title

The row is preserved, but its factory title is not published. It repeats a generic county valuation-market-update pattern, materially overlaps the live valuation corpus, and does not define a distinct Reeves-specific evidence job.

## Approved redefinition

- Selection rank: `294`
- Title: `Reeves County 2025 Preliminary PVS: Two Category G Totals`
- Slug: `reeves-county-2025-preliminary-pvs-two-category-g-totals`
- Primary keyword: `Reeves County 2025 preliminary PVS`
- Search intent: `local-informational`
- Cluster: `texas-county-basin-local-intent`

The replacement owns one bounded source-reading job: explain how the official Reeves County 2025 preliminary PVS index routes to separate Pecos-Barstow-Toyah ISD and Balmorhea ISD summary worksheets, and how to preserve each displayed Category G row without turning school-district public-value fields into a private mineral-interest conclusion.

## Current-source and evidence check

The PVS overview states that PTAD estimates taxable property value for school districts and certifies the values for public-education funding. The 2025 preliminary findings page states that the information was certified on January 30, 2026, supplies a 40-day petition statement for a school district or eligible taxpayer, and explains that findings for an overlapping district are split by county.

The Reeves index provides two separate summary-worksheet routes. The Reeves County portion of Pecos-Barstow-Toyah ISD shows Category G local tax roll value and value assigned of 23,324,129,394, with WTD mean ratio `N/A`. The Balmorhea ISD summary shows 288,604,250 in those Category G fields, also with WTD mean ratio `N/A`. Each page states that the PVS found local value valid and certified local value. The figures remain separate and are not added or applied to an individual owner.

Controlled official retrievals on 2026-08-31:

| Source object | Bytes | SHA-256 | Bounded role |
| -- | -- | -- | -- |
| PVS overview | 132,588 | `77a50cad63366cb236b4d7a35709e97371a132bcb61c23183d2a3ad6e9dc2629` | Program purpose, cadence, and findings structure |
| 2025 preliminary findings | 140,457 | `3f87ac263c2e8449c641c446084f23b4a8c47cf7c8ea63ae46957c9c2a9ba95b` | Certification, petition wording, and county-split boundary |
| Reeves preliminary index | 118,654 | `823ca8057737888bcf8159c391ff1a63454672d6c7e7e5170836b19dfa42ffef` | Two distinct district routes |
| Pecos-Barstow-Toyah ISD summary | 144,910 | `422f817b146dcab56ccb2868d2931a66003ca8f3f027bf1525e51ed34093986c` | Reeves County Category G row and certification text |
| Balmorhea ISD summary | 135,684 | `d6e78349ba1d2aaad09d15ece3f741701914aef72506a6efbdd8e2d6e4731143` | Separate Category G row and certification text |

## Cannibalization boundary

The exact proposed title, slug, and keyword were absent before implementation. The nearest current canonical-title token similarity is `0.3333` to `Reeves County 2024 Category G Worksheets: Two ISDs, Strata, and Ratios`. Article 292 owns the 2024 final Category G worksheets, sample rows, strata, and ratio tables. Article 294 owns only the 2025 preliminary summary-worksheet routes, the two district-level Category G total rows, the `N/A` ratio fields, and the local-value-valid wording.

`Reeves CAD 2025 MAP Review: Four Passes and Two Recommendations` owns district-process review findings. `Reeves County Mineral Records: A Source-by-Source Search Log` owns clerk, CAD, GLO, and RRC retrieval separation. Article 294 teaches neither job.

## Chesty and mrx_ceo read-only decisions

Both reviews received the immutable worktree path and commit, preserved program row and planning handle, rejected title and collision, existing Reeves boundaries, exact proposed identity, official source URLs, controlled source paths, and prohibited conclusions. Neither reviewer received write, browse, commit, push, deploy, or publication authority.

```text
CHESTY_ARTICLE294: APPROVE_REDEFINED
CHESTY_DECISION: APPROVE_REDEFINED
CHESTY_RATIONALE: The replacement identity is original, factually bounded, useful, SEO/AEO-retrievable, compliant, and sufficiently differentiated from Article 292’s 2024 final worksheet analysis and Article 293’s 2025 MAP process review while preserving MRX1000-0842 and avoiding the rejected valuation-content collision.
CANONICAL_TITLE: Reeves County 2025 Preliminary PVS: Two Category G Totals
JOB_BOUNDARY: Explain the official 2025 preliminary Reeves index’s separate Pecos-Barstow-Toyah ISD and Balmorhea ISD summary worksheets and report their respective Category G all-minerals local tax roll/value-assigned figures of 23,324,129,394 and 288,604,250, N/A WTD mean-ratio fields, local-value-valid certifications, and preliminary county-split limitations without adding the figures or construing either as an owner-level appraisal, market value, offer, tax bill, ownership, title, or private transaction conclusion.
```

```text
MRX_CEO_ARTICLE294: APPROVE_REDEFINED
MRX_CEO_DECISION: APPROVE_REDEFINED
MRX_CEO_RATIONALE: The redefined identity is strategically distinct from Articles 292 and 293, grounded in the specified official 2025 preliminary PVS worksheets, useful for owners seeking county-level public-record context, and appropriately bounded against private valuation, ownership, title, tax, offer, and transaction conclusions.
CANONICAL_TITLE: Reeves County 2025 Preliminary PVS: Two Category G Totals
JOB_BOUNDARY: Preserve MRX1000-0842 and explain the separate Pecos-Barstow-Toyah ISD and Balmorhea ISD 2025 preliminary summary worksheets, reporting their respective Category G all-minerals local tax roll/value-assigned figures of 23,324,129,394 and 288,604,250, N/A WTD mean-ratio fields, local-value-valid certifications, and preliminary county-split limitations without adding the figures or construing either as an owner-level appraisal, market value, offer, tax bill, ownership, title, or private transaction conclusion.
```

## Release boundary

Article 294 may enter the automated MRX1000 editorial, factual/citation, compliance, originality, creative, metadata, schema, accessibility, build, rollback, deployment, live-verification, and reconciliation gates. It must remain uncounted as production-live until every active production alias passes the exact page and image assertions. The five production receipt blockers remain separate from this article identity decision.

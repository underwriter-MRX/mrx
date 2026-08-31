# MRX1000 Wave 223 Selection Decision — 2026-08-31

- Decision ID: `MRX1000-W223-SELECT-2026-08-31`
- Selection rank: `295`
- Decision date: `2026-08-31`
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: `MRX1000-0843`
- Planning source handle: `factory-queue:MRX-AEO-06354`
- Rejected planning title: `Reeves County, Texas Mineral Rights Value: Risk Checklist In 2026`
- Rejected planning slug: `reeves-county-texas-mineral-rights-value-risk-checklist-in-2026`
- Planning-title collision: `0.7143` token-Jaccard similarity to the Andrews County factory analogue

The row is preserved, but the factory title is not published. It repeats a broad county-value risk-checklist template and materially overlaps existing valuation, offer, seller-risk, checklist, and county-guide coverage.

## Approved redefinition

- Title: `Reeves CAD 2024 Ratio Study: 66 Category G Ratios`
- Slug: `reeves-cad-2024-ratio-study-66-category-g-ratios`
- Primary keyword: `Reeves CAD 2024 Category G ratio study`
- Search intent: `local-informational`
- Cluster: `texas-county-basin-local-intent`

The replacement owns one bounded source-reading job: explain the statewide appraisal-district ratio-study relationship and preserve the seven displayed fields in the aggregate `G.OIL, GAS, MINERALS` row for Reeves. It keeps the number of ratios separate from parcel count and keeps CAD reported appraisal value separate from private mineral-interest value.

## Current-source and evidence check

The official 2024 findings page identifies the 2024 tax-year study, says it was published on August 15, 2025 in compliance with Tax Code Section 5.10, and routes to `195 Reeves`. The Reeves Appraisal District Summary Worksheet says its study results were last updated August 31, 2025.

The exact aggregate Category G row displays 66 under Number of Ratios, 26,799,785,533 under 2024 CAD Reported Appraisal Value, 1.00 for Median Level of Appraisal, 0.94 for Coefficient of Dispersion, 100.00 for the shares within plus or minus 10 percent and 25 percent of the median, and 1.00 for Price-Related Differential.

The official overview says the ratio study measures uniformity and median appraisal levels within each major property category and uses statistical analysis of school-district PVS data. The current county directory identifies Reeves Appraisal District and was last updated May 7, 2026. None of these records states an owner-level private value.

Controlled official retrievals on 2026-08-31:

| Source object | Bytes | SHA-256 | Bounded role |
| -- | -- | -- | -- |
| 2024 ratio-study findings | 129,419 | `bcdebb9f7c707a238d4ef478c81469d8caafd7ccb8511bb38ffea67f52f11490` | Tax year, publication date, and Reeves route |
| Reeves 2024 ratio-study summary | 121,572 | `5384e9471894ae3e2b49c33b30829c911894ed8c3b6fa33da88324a5beb4e4d1` | Exact aggregate Category G row |
| Ratio-study overview | 122,827 | `c179d89ac270ca9cf47782eb01083fb4561c00918fc0a25693cb0becded89d47` | Program purpose and measure types |
| Reeves county directory | 121,438 | `855aac8b943814213e8eda1ffa34464b26909142b843923b6aaf4149c31a8c51` | Current district identity route |

## Cannibalization boundary

The proposed title, slug, and keyword were absent before implementation. The nearest canonical-title token similarity is `0.3750` to `Karnes CAD 2024 Annual Report: Category G Parcel and Ratio-Study Table Crosswalk`. That article owns two differently labeled rows inside a Karnes annual report. Article 295 owns the statewide Comptroller ratio-study relationship and one aggregate Reeves district row.

The nearest Reeves title is `Reeves County 2024 Category G Worksheets: Two ISDs, Strata, and Ratios` at `0.3333`. Article 292 owns two school-district PVS worksheet structures and their sample/stratum layers. Article 293 owns 2025 MAP process findings. Article 294 owns two separate 2025 preliminary school-district totals. The Reeves records-search log owns clerk, CAD, GLO, and RRC retrieval separation.

## Chesty and mrx_ceo read-only decisions

At verified commit `f1268fa27344d42d279be8b92d22da21f8770517`, Chesty profile `chestyorchestrator` and the named `mrx_ceo` profile received the immutable planning row, collision evidence, proposed identity, exact official-source observations and paths, adjacent-corpus boundaries, and current information-gain and answer-citation controls in separate supplied-text-only sessions. Neither session used a tool, browsed, read or wrote repository files, mutated Git, created a task, generated an image, deployed, published, purchased anything, or changed an external system. Both used the existing included OpenAI Codex route at $0.00 incremental cost. Codex remains sole writer and release owner.

```text
CHESTY_ARTICLE295: APPROVE_REDEFINED
CHESTY_DECISION: Reject the original title, slug, keyword, and risk-checklist framing; approve the proposed replacement under MRX1000-0843 and factory-queue:MRX-AEO-06354.
CHESTY_RATIONALE: The replacement provides distinct, authoritative information gain with low supplied collision scores and supports answer-first coverage of the statewide ratio-study relationship plus one Reeves Category G aggregate row without unsupported valuation or transactional inference.
CANONICAL_TITLE: Reeves CAD 2024 Ratio Study: 66 Category G Ratios
JOB_BOUNDARY: Explain the statewide appraisal-district ratio-study relationship and report only the aggregate Reeves G.OIL, GAS, MINERALS row, keeping 66 ratios distinct from parcel count and CAD reported appraisal value distinct from private value.
COLLISION_BOUNDARY: Exclude property rows, combined or comparative district PVS values, trends, and inferences about owners, properties, title, acreage, taxes, protests, market value, offers, sales, buyers, or transactions; preserve Articles 292–294 and the source-by-source search log as adjacent owners.
```

```text
MRX_CEO_ARTICLE295: APPROVE_REDEFINED
MRX_CEO_DECISION: APPROVE_REDEFINED
MRX_CEO_RATIONALE: Distinct authoritative information gain is established by the statewide appraisal-district ratio-study relationship and one aggregate Reeves Category G row, with replacement-title similarity 0.3750 and nearest Reeves-article similarity 0.3333 versus the original county-template collision of 0.7143.
CANONICAL_TITLE: Reeves CAD 2024 Ratio Study: 66 Category G Ratios
JOB_BOUNDARY: Explain the statewide appraisal-district ratio-study relationship and report only the aggregate Reeves G.OIL, GAS, MINERALS row: 66 ratios; CAD reported appraisal value 26,799,785,533; median 1.00; coefficient of dispersion 0.94; 100.00% within ±10%; 100.00% within ±25%; price-related differential 1.00; keep ratio count distinct from parcel count and CAD reported appraisal value distinct from private value.
COLLISION_BOUNDARY: Do not reproduce property rows; compare or combine district PVS values; infer owner/property value, title, acreage, tax bill, protest result, market value, offer, sale, buyer behavior, transaction advice, or trend; do not encroach on Articles 292–294 or the source-by-source retrieval-separation log.
```

## Release boundary

Article 295 may enter the automated MRX1000 editorial, factual/citation, compliance, originality, creative, metadata, schema, accessibility, build, rollback, deployment, live-verification, and reconciliation gates. It remains uncounted as production-live until every active production alias passes the exact page and image assertions. The five production receipt blockers remain separate from this identity decision.

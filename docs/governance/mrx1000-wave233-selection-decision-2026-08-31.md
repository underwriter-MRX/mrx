# MRX1000 Wave 233 Selection Decision - 2026-08-31

- Decision ID: `MRX1000-W233-SELECT-2026-08-31`
- Selection rank: `305`
- Decision date: `2026-08-31`
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: `MRX1000-0853`
- Planning source handle: `factory-queue:MRX-AEO-06851`
- Rejected planning title: Upton County, Texas Mineral Rights Value: Market Update For Mineral Owners
- Rejected planning slug: `upton-county-texas-mineral-rights-value-market-update-for-mineral-owners`
- Rejected planning keyword: Upton County, Texas mineral rights value

The row remains in MRX1000, but the broad market-value identity is rejected because it collides with admitted valuation content and implies current market evidence that a 2024 appraisal-district report cannot supply.

## Approved redefinition

- Title: Upton CAD 2024 Category G Table: G1, G1C, and G* Item and Value Reconciliation
- Slug: `upton-cad-2024-category-g-table-g1-g1c-g-item-value-reconciliation`
- Primary keyword: Upton CAD 2024 Category G table
- Search intent: informational
- Cluster: `texas-county-basin-local-intent`

Article 305 owns one narrow job: transcribe the G1, G1C, and G* rows from the official Upton CAD 2024 annual report, verify the three exact additions that reconcile G1 plus G1C to G*, and distinguish the G* subtotal from the report's separate Total Mineral Market Value recap. It does not own a county valuation guide, market update, property lookup, appraisal, tax, title, offer, or transaction analysis.

## Controlled primary-source packet

Official objects retained on 2026-08-31:

| Source object | Bytes | SHA-256 | Bounded role |
| --- | ---: | --- | --- |
| Upton CAD 2024 Annual Report | 1,208,999 | `aeae887f78b740cee6545292c59382abf7b2ba0626a805e6aeaa89203b90a496` | G1, G1C, G*, and separate total-mineral report rows |
| Upton CAD Data and Records | 84,587 | `1ab6c3f12b64d9bedf4d0f6c3023260b3d6702b20c61ef665058e22ba59d7537` | Official publisher and retrieval route |
| Upton CAD Property Search | 113,559 | `5e7ef786a8587fd6531b8a7a339cf87c562ade88d9a639d3ab62ad3c050876ed` | Adjacent interface context only; no search executed |
| Texas Comptroller Property Classification Guide | 1,170,975 | `81d36ed8286ae58a17a464ab2a7772a04dfebce6ad9a9a4556fc6e3abf3cf218` | Statewide G1 definition and reporting context only |

The official annual-report PDF has 11 physical pages. Physical page 7 is internally labeled page 3 of 42; physical page 5 is internally labeled page 1 of 42. Those locator systems remain explicit.

## Exact reconciliation boundary

On physical page 7, the report displays G1 with 245,023 items, 13,018,457,820 in Mineral and Total Market Taxable, and 12,739,319,758 in Total Net Taxable. G1C displays 25 items, 15,906,260 in Mineral and Total Market Taxable, and 14,053,644 in Total Net Taxable. G* displays 245,048 items, 13,034,364,080 in Mineral and Total Market Taxable, and 12,753,373,402 in Total Net Taxable.

The exact checks are 245,023 + 25 = 245,048; 13,018,457,820 + 15,906,260 = 13,034,364,080; and 12,739,319,758 + 14,053,644 = 12,753,373,402. Physical page 5 separately reports Total Mineral Market Value as 258,233 items and 16,516,807,470. Article 305 must not merge that separate recap with G*.

## Cannibalization boundary

The final title, slug, and keyword were absent before implementation. Maximum token-Jaccard similarity was 0.3158 to `karnes-cad-2024-annual-report-category-g-parcel-and-ratio-study-table-crosswalk`, 0.2381 to the Howard and Martin county row articles, and 0.2105 to the statewide Comptroller category guide.

The statewide article retains G1, G2, and G3 definitions. The Howard article retains one Howard row and its ambiguous-field warning. The Karnes article retains its parcel and ratio-study crosswalk. Article 305 owns only the Upton row arithmetic and separate-total boundary.

## Chesty and mrx_ceo read-only decisions

At verified commit `51d999e0cc3754b904a2c4b41b90116d2b7b25d5`, both profiles received the rejected identity, proposed replacement, exact source paths and hashes, page facts, arithmetic, collision boundaries, doctrine, and release hold in supplied-text-only sessions. Tool access was limited to `clarify`; neither profile changed repository, Git, task, image, deployment, purchase, or external state. Codex remains sole writer and release owner.

- Chesty session `20260831_075151_b7a810`: `VERDICT: APPROVE`
- mrx_ceo session `20260831_075317_2e3ea9`: `VERDICT: APPROVE`

Deterministic admission token for the approved redefinition:

MRX_CEO_DECISION: APPROVE_REDEFINED

## Updated article prompt

Lead with the exact three-equation reconciliation and immediately state that G* is not the report's entire mineral corpus. Preserve visible column names, physical and printed page locators, exact source hashes, stable claim IDs, claim-adjacent primary citations, entity parity, and semantic internal links. Never define the local G1C suffix without a source; equate items with accounts, owners, interests, wells, leases, parcels, or tax bills; use a derived ratio; expose a personal name; search a person or property; or infer title, acreage, ownership, production, reserves, appraisal, tax, sale value, fair value, offer quality, legal effect, or a transaction result. Do not promise ranking, indexing, retrieval, traffic, leads, revenue, or LLM citations.

Finalize the title before image production. Use one unique exact-title hero for visible hero, Open Graph, Twitter, and schema. Use a materially distinct exact-keyword inline image. Fail closed on identity, factual, citation, editorial, compliance, creative, metadata, schema, accessibility, build, test, rollback, receipt, deployment, live-verification, or reconciliation failure.

## Release boundary

Five legal/editorial receipts remain missing. Article 305 may complete local automated gates and a local commit, but it may not be pushed, deployed, counted live, or used to trigger another Search Atlas recrawl.

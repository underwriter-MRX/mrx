# MRX1000 Wave 234 Selection Decision - 2026-08-31

- Decision ID: `MRX1000-W234-SELECT-2026-08-31`
- Selection rank: `306`
- Decision date: `2026-08-31`
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: `MRX1000-0854`
- Planning source handle: `factory-queue:MRX-AEO-06854`
- Rejected planning title: Upton County, Texas Mineral Rights Value: Risk Checklist In 2026
- Rejected planning slug: `upton-county-texas-mineral-rights-value-risk-checklist-in-2026`
- Rejected planning keyword: Upton County, Texas mineral rights value
- Planning-title collision: `0.7143`

The row remains in MRX1000, but the broad county-value risk-checklist identity is rejected because it materially collides with the admitted county-value and valuation-guide corpus.

## Approved redefinition

- Title: Upton CAD 2025-2026 Mineral Appraisal Review Chain: Sources, Calibration, and PVS
- Slug: `upton-cad-2025-2026-mineral-appraisal-review-chain-sources-calibration-pvs`
- Primary keyword: Upton CAD mineral appraisal review chain
- Search intent: informational
- Cluster: `texas-county-basin-local-intent`

Article 306 owns one source-reading job: map the Upton plan's printed sections for sources of data, model calibration, individual value review, and its stated state performance test. The map follows the document's section order. It is not an account audit, proof of chronological execution, validation of a data source, or proof that every Upton account followed those steps.

## Controlled primary-source packet

Official objects retained or checked on 2026-08-31:

| Source object | Bytes | SHA-256 | Bounded role |
| ----- | -----: | ----- | ----- |
| Upton CAD 2025-2026 Reappraisal Plan | 7,275,413 | `216ea3d58ddc8117385a8c8338250460d39bcc91020f2306affeaf59cd071daf` | Physical/printed page observations for the four-section map |
| Upton CAD Data and Records | 84,587 | `1ab6c3f12b64d9bedf4d0f6c3023260b3d6702b20c61ef665058e22ba59d7537` | Official publisher and plan-link route |
| Texas Comptroller About Us | current HTTPS page | not a retained-byte claim | Current SDPVS-versus-ADRS purpose boundary |
| Texas Comptroller Property Tax Reports | current HTTPS page | not a retained-byte claim | Current ADRS terminology and published-measure boundary |

The Upton PDF is a 94-physical-page scan with no extractable text layer. Codex rendered and manually reviewed the relevant pages. The title page identifies tax years 2025 and 2026 and says the file was printed in July 2024. The official publisher and exact PDF routes returned HTTP 200 on the decision date.

## Exact source-reading boundary

- Physical page 21 / printed page 19 lists data characteristics and source categories, then introduces the model-specification section.
- Physical page 22 / printed page 20 describes market-data limitations and the plan's stated predominant use of an income approach. The article preserves that as attribution, not a recommendation or private-sale rule.
- Physical page 23 / printed page 21 identifies source categories, annual discounted-cash-flow calibration tests, multiple individual reviews, taxpayer review opportunities, and normal protest/ARB review.
- Physical page 24 / printed page 22 describes a Comptroller performance test using the plan's `Property Value Study` label and mentions uniformity, median level, coefficient of dispersion, appeals, and published findings.

Current Comptroller pages distinguish the School District Property Value Study from the Appraisal District Ratio Study. Article 306 must not use PVS, SDPVS, and ADRS interchangeably or infer a current Upton result from the 2024-printed plan.

## Cannibalization boundary

The exact title, slug, and keyword were absent before implementation. Maximum title/slug token-Jaccard similarity was `0.2353` to the Dimmit and Gonzales CAD mineral-responsibility pages; maximum keyword similarity was `0.3750` to those same pages.

Article 303 retains Upton TXT/CSV byte structure. Article 304 retains Upton open-records states. Article 305 retains 2024 Category G arithmetic. Howard retains its section locator, Martin its terminology and separate-plan routing, Pecos its oil-and-gas review limits, and Midland its mineral-work calendar and broader source-category guide. Article 306 owns only the Upton four-section review-chain map and the current terminology discrepancy boundary.

## Chesty and mrx_ceo read-only decisions

At verified commit `a3c9a598a4251a4ad82dd566cdd585c1daca37bf`, both profiles received the rejected identity, exact proposed identity, absolute source paths and hashes, visible page observations, collision evidence, doctrine, and production hold in separate supplied-text-only sessions. Tool access was limited to `clarify`; neither profile used a tool or changed repository, Git, task, image, deployment, purchase, or external state. Both used the existing subscription-included `openai-codex` route at $0.00 incremental cost. Codex remains sole writer and release owner.

- Chesty session `20260831_082221_117d68`: `CHESTY_ARTICLE306: APPROVE_REDEFINED`
- mrx_ceo session `20260831_082332_6d81cf`: `MRX_CEO_ARTICLE306: APPROVE_REDEFINED`

Deterministic admission token for the same exact redefinition:

MRX_CEO_DECISION: APPROVE_REDEFINED

## Updated article prompt

Lead with the four mapped sections and immediately state that section order is not account chronology. Preserve stable claim IDs, physical and printed page locators, the July 2024 print label, current retrieval date, retained-byte hashes, source roles, claim-adjacent primary citations, explicit inference limits, semantic internal links, a discrepancy register, and visible/schema entity parity. Keep the plan's PVS statement separate from current Comptroller SDPVS and ADRS terminology. Never expose personal or account data; imply source use for an account; recommend a valuation method or protest action; calculate value; infer a current Upton study result; or conclude title, ownership, appraisal, tax, legal effect, private-sale value, offer quality, or a transaction result. Do not promise ranking, indexing, retrieval, traffic, leads, revenue, or LLM citations.

Finalize the title before image production. Use one unique exact-title hero for visible hero, Open Graph, Twitter, and schema. Use a materially distinct exact-keyword inline image. Fail closed on identity, factual, citation, editorial, compliance, creative, metadata, schema, accessibility, build, test, rollback, receipt, deployment, live-verification, or reconciliation failure.

## Release boundary

Five legal/editorial receipts remain missing. Article 306 may complete local automated gates and a local commit, but it may not be pushed, deployed, counted live, or used to trigger another Search Atlas recrawl.

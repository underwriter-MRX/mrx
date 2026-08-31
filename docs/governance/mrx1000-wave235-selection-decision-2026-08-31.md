# MRX1000 Wave 235 Selection Decision - 2026-08-31

- Decision ID: `MRX1000-W235-SELECT-2026-08-31`
- Selection rank: `307`
- Decision date: `2026-08-31`
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: `MRX1000-0855`
- Planning source handle: `factory-queue:MRX-AEO-06855`
- Rejected planning title: Upton County, Texas Mineral Rights Value: Timeline In 2026
- Rejected planning slug: `upton-county-texas-mineral-rights-value-timeline-in-2026`
- Rejected planning keyword: Upton County, Texas mineral rights value
- Planning-title collision: `0.6667`

The row remains in MRX1000, but the generic county-value timeline identity is rejected. It materially collides with the existing valuation corpus and with the admitted Midland CAD mineral-work-calendar page.

## Approved redefinition

- Title: Upton CAD 2025-2026 Plan Date-Control Register: July 2024 Print, January 1 Snapshot, and a 2020-2022 Appendix
- Slug: `upton-cad-2025-2026-plan-date-control-register-july-2024-print-january-1-snapshot-2020-2022-appendix`
- Primary keyword: Upton CAD plan date-control register
- Search intent: informational
- Cluster: `texas-county-basin-local-intent`

Article 307 owns one bounded source-control job: distinguish four date layers inside and around the official Upton plan. Those layers are the plan's 2025-2026 coverage label, its July 2024 print label, the recurring January 1 appraisal snapshot described in the embedded report and current official Texas sources, and the embedded appendix's 2020-2022 applicability. It does not own a county appraisal calendar, a private-value timeline, a tax deadline, a protest deadline, an account history, or a forecast.

## Controlled primary-source packet

Official objects retained or checked on 2026-08-31:

| Source object                                |                          Bytes | SHA-256                                                            | Bounded role                                                                |
| -------------------------------------------- | -----------------------------: | ------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| Upton CAD 2025-2026 Reappraisal Plan         |                      7,275,413 | `216ea3d58ddc8117385a8c8338250460d39bcc91020f2306affeaf59cd071daf` | Four plan and appendix date layers with physical and embedded page locators |
| Upton CAD Data and Records                   |             current HTTPS page | not a retained-byte claim                                          | Official publisher route and visible 2025-and-2026 plan link                |
| Texas Tax Code Section 23.01                 | current official statute route | not a retained-byte claim                                          | Governing January 1 market-value reference                                  |
| Texas Comptroller Valuing Property           |             current HTTPS page | not a retained-byte claim                                          | Current plain-language January 1 value layer                                |
| Texas Comptroller Property Tax System Basics |             current HTTPS page | not a retained-byte claim                                          | Current appraisal-district role and annual January 1 snapshot boundary      |

The Upton PDF is a 94-physical-page scan without an extractable text layer. Codex rendered and visually inspected the relevant pages. The title and core plan pages carry the 2025-2026 and July 2024 layers. An embedded appraisal report begins at physical page 31 and identifies an older effective/applicability frame. Physical pages 56 and 57, which are embedded printed pages 26 and 27, explain the January 1 effective-date and snapshot concepts inside that older report.

## Exact date-control boundary

- The outer plan is labeled for 2025 and 2026 and says it was printed in July 2024.
- The embedded report begins at physical page 31 and identifies an effective date of January 1, 2020 with stated applicability to 2020, 2021, and 2022.
- Physical page 56 / embedded printed page 26 describes January 1 as the effective appraisal date and notes that appraisal work can occur months afterward.
- Physical page 57 / embedded printed page 27 describes lien-date value as a snapshot in time.
- Current Comptroller material independently says appraisal districts appraise property as of January 1 each year.

These statements do not make the embedded appendix current for 2025 or 2026. They do not prove a particular account's condition, ownership, taxable status, appraised value, report date, notice date, protest deadline, or transaction timing.

## Cannibalization boundary

The exact title, slug, and keyword were absent before implementation. Maximum title token-Jaccard similarity was `0.2800` to `midland-cad-2025-2026-mineral-work-calendar-january-1-snapshot-july-certification`; maximum keyword similarity was `0.2222`.

The Midland page owns Midland CAD's January-to-July mineral-work calendar and certification sequence. `tax-year-production-month-and-download-date-texas-mineral-records` owns statewide record-label separation. Article 303 owns Upton TXT/CSV structure, Article 304 owns Upton open-records states, Article 305 owns Upton Category G arithmetic, and Article 306 owns Upton plan sources, calibration, review, and PVS terminology. Article 307 owns only the internal Upton plan date layers and the embedded-appendix freshness discrepancy.

## Chesty and mrx_ceo read-only decisions

At verified commit `de5c9bb830a56f8fe92746b87ae8777a652876ce`, both profiles received the rejected identity, exact proposed identity, absolute source paths and hashes, visible page observations, collision evidence, AI Atom Brain doctrine, and production constraints in separate supplied-text-only sessions. Tool access was limited to `clarify`; neither profile used a tool or changed repository, Git, task, image, deployment, purchase, or external state. Both used the existing subscription-included `openai-codex` route at $0.00 incremental cost. Codex remains sole writer and release owner.

- Chesty session `20260831_085059_4677cf`: `CHESTY_ARTICLE307: APPROVE_REDEFINED`
- mrx_ceo session `20260831_085205_095f90`: `MRX_CEO_ARTICLE307: APPROVE_REDEFINED`

Deterministic admission token for the same exact redefinition:

`MRX1000-0855:RANK-307:COMMIT-de5c9bb830a56f8fe92746b87ae8777a652876ce:UPTON-DATE-CONTROL:APPROVE-REDEFINED`

MRX_CEO_DECISION: APPROVE_REDEFINED

## Updated article prompt

Lead with the four date layers and immediately state that document dates have different roles. Preserve stable claim IDs, physical and embedded page locators, source role, source age, retrieval date, retained-byte hash, scan status, claim-adjacent official citations, explicit source-versus-current-verification-versus-inference labels, a discrepancy register, semantic hub/support/next-step links, and visible/schema entity parity. Keep the July 2024 outer-plan print label separate from the January 1 snapshot and the 2020-2022 appendix frame. The no-inference state remains explicit.

Never infer account history, title, ownership, taxable status, appraisal correctness, tax, legal effect, private mineral value, an offer, a deadline, a protest strategy, or a transaction result. Do not reproduce the Midland calendar or statewide record-date guide. Do not promise ranking, indexing, retrieval, traffic, leads, revenue, or LLM citations.

Finalize the title before image production. Use one unique exact-title hero for visible hero, Open Graph, Twitter, and schema. Use a materially distinct exact-keyword inline image. Fail closed on identity, factual, citation, editorial, compliance, creative, metadata, schema, accessibility, build, test, rollback, receipt, deployment, live-verification, or reconciliation failure.

## Release boundary

The Search Atlas audit 138239 completed and post-processed with 2,515 approved-deployed recommendations and zero pending. No new recrawl is authorized for this handoff. Five legal/editorial receipts remain missing. Article 307 may complete local automated gates and a local commit, but it may not be pushed, deployed, counted live, or used to trigger another Search Atlas recrawl until the receipts exist and the full release gate passes.

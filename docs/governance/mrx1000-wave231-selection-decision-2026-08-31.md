# MRX1000 Wave 231 Selection Decision - 2026-08-31

- Decision ID: `MRX1000-W231-SELECT-2026-08-31`
- Selection rank: `303`
- Decision date: `2026-08-31`
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: MRX1000-0851
- Planning source handle: factory-queue:MRX-AEO-06855
- Rejected planning title: Upton County, Texas Mineral Rights Value: Family Decision Guide Step By Step
- Rejected planning slug: upton-county-texas-mineral-rights-value-family-decision-guide-step-by-step
- Rejected planning keyword: Upton County, Texas mineral rights value
- Planning-title collision: 0.7143

The row remains in MRX1000, but the broad local valuation identity is rejected because it duplicates the admitted county-value and valuation-guide corpus.

## Superseded first redefinition

The first read-only decision sessions approved `Upton CAD 2026 Mineral File Layout: H9 Rendition, HB9 Exemption, Situs, and EOF Fields`. Independent source verification then found that the proposed Upton layout PDF had SHA-256 `f0b34cc4b7a96e6cd5480f350f28554b3af72fc9cfd45959763f76d0aef1b020`, exactly matching the layout source already owned by Article 274, `Loving CAD 2026 Mineral File Layout PDF: Eight-Page Position and EOF Map`.

That byte identity is a fail-closed collision. The first approval is superseded, and the layout identity is not publishable as Article 303.

## Approved final redefinition

- Title: Upton CAD 2026 Mineral Data Files: 2,260-Byte TXT Records and a Nested CSV Header
- Slug: upton-cad-2026-mineral-data-files-2260-byte-txt-records-nested-csv-header
- Primary keyword: Upton CAD 2026 mineral data files
- Search intent: informational
- Cluster: texas-county-basin-local-intent

Article 303 owns one source-scoped job: record a privacy-safe, reproducible structural inspection of the exact Upton TXT and CSV member bytes. It covers hashes, raw byte counts, CRLF handling, the one-outer-field CSV header, the bounded second parse to 244 labels, one 244-field data-record reconciliation, parser settings, discrepancy states, and deterministic stops. It never prints row contents or claims full-file parity, encoding validity, schema validity, field semantics, ownership, property facts, appraisal accuracy, tax treatment, production, value, an offer, or a transaction result.

## Controlled primary-source packet

Official objects retrieved or retained on 2026-08-31:

| Source object | Bytes | SHA-256 | Bounded role |
| --- | ---: | --- | --- |
| Upton CAD Data and Records | 84,587 | `1ab6c3f12b64d9bedf4d0f6c3023260b3d6702b20c61ef665058e22ba59d7537` | Publisher route and visible archive label |
| 2026 Certified Mineral Open Records ZIP | 79,434,297 | `8d6086b338cb7ffd7c882183842aaf25f697dda513b74d842ed7d95afbcd7423` | Exact archive and member-container identity |
| 2025-2026 Reappraisal Plan | 7,275,413 | `216ea3d58ddc8117385a8c8338250460d39bcc91020f2306affeaf59cd071daf` | Controlled background object; not used for parser claims |
| Open Records Request form | 486,507 | `30e9b61587cd5670623d47170a6c6725cc5f1ce0bd595255250dda87783b2abe` | Current clarification route |
| Upton CAD Property Search | 113,559 | `5e7ef786a8587fd6531b8a7a339cf87c562ade88d9a639d3ab62ad3c050876ed` | Visible search-field route only |
| Texas Comptroller Upton directory | 121,492 | `6d815ca35d95c33a6a65b990e2e75023105b742dea94448b4810a3b4349abb9f` | Appraisal-versus-tax contact boundary |

The controlled packet totals 87,515,855 bytes. Five sources appear in the article; the reappraisal plan remains controlled but does not support an article claim.

## Archive member identities

| Member role | Uncompressed bytes | SHA-256 |
| --- | ---: | --- |
| Mineral appraisal-roll PDF | 40,823,973 | `fcfaecafc27ba3c555bc251331c6b3aaa67cc3c89e376e0486317a42bbc38213` |
| Mineral file-layout PDF | 46,370 | `f0b34cc4b7a96e6cd5480f350f28554b3af72fc9cfd45959763f76d0aef1b020` |
| Mineral flat-text data file | 2,807,143 | `2c1c619335a5928bdc6560e65729fcad8687b8a663b4772eb7d72861e1ec3043` |
| Mineral CSV data file | 888,250,699 | `613bf5d0f3db2ac56e673119c30d2f95111ccccef8c93e42646ccde2fa7c91fe` |
| Mineral recap PDF | 4,825 | `a7a0fa940b55dd8f96f067eee057fafb1270b6c03c2588fe717b0e3d2dbb8775` |
| Year-by-year appraisal PDF | 11,648,519 | `aa144623866559fa5f6910573da6e16d4262747e8c15be3d70bcb4734edea648` |
| Master-inventory PDF | 2,507,540 | `eacbae9e731dd15b3445dcc3d7000114d34df8883de2e7540259958c94a0ba13` |

The ZIP lists seven members totaling 946,089,069 uncompressed bytes. The layout PDF is byte-identical to the Article 274 source and is excluded from Article 303 ownership.

## Privacy-safe structural observations

- The first two TXT physical records measured 2,260 bytes after their CRLF terminators were removed.
- The first CSV physical line measured 5,233 bytes including CRLF, contained 245 comma bytes and 978 quote bytes, and ended with a non-UTF-8 byte immediately before the closing quote and CRLF.
- A standard first CSV parse returned one outer header field.
- A bounded second parse of the nested field, after isolating the terminal replacement marker, returned 244 labels.
- The first CSV data record measured 2,993 bytes including CRLF and parsed to 244 fields.

These are bounded observations only. No row contents may be printed, copied, published, or used to infer a person, account, property, ownership, appraisal, tax, production, value, offer, or transaction conclusion. The observations do not establish full-file row parity, encoding validity, schema validity, or field semantics.

## Cannibalization boundary

The final title, slug, and keyword were absent before implementation. Maximum token-Jaccard similarity is 0.2609 to the Loving CAD 2026 ZIP member-map article.

The Loving member-map article retains stored archive order and member identity. Article 274 retains the byte-identical layout PDF and its position/EOF map. The Midland certified-roll guide retains file-opening order and broad privacy handling for a different county archive. Article 303 owns only Upton-bound TXT/CSV byte structure, nested-header parsing, one-record reconciliation, discrepancy logging, and stop states.

## Chesty and mrx_ceo read-only decisions

The first layout-identity approvals are superseded by Codex's independent byte-collision finding. At verified commit `12b00b8ee245c918d475bbb5cca8468c7aef03db`, both profiles then received the collision, final proposed identity, source facts and exact paths, corpus boundaries, doctrine, and release hold in supplied-text-only sessions. Tool access was limited to `clarify`; neither profile called a tool or changed repository, Git, task, image, deployment, purchase, or external state. Both used the included `openai-codex` route at $0.00 incremental cost. Codex remains sole writer and release owner.

Chesty session: `20260831_065607_a7d658`

    CHESTY_ARTICLE303_REDECISION: APPROVE_FINAL_REDEFINITION

mrx_ceo session: `20260831_065701_bcea7e`

    MRX_CEO_ARTICLE303_REDECISION: APPROVE_FINAL_REDEFINITION
    MRX_CEO_DECISION: APPROVE_FINAL_REDEFINITION

Deterministic admission token for the same approved final redefinition:

MRX_CEO_DECISION: APPROVE_REDEFINED

## Updated article prompt

Lead with exact TXT-versus-CSV source separation. Bind the publisher page, archive, member hashes, raw byte counts, line endings, bounded parser settings, nested-header result, one-record reconciliation, discrepancy states, and privacy stop. Add information gain through stable claim IDs, explicit inference limits, source-age labels, claim-adjacent first-party citations, semantic internal links, and visible/schema entity parity. Never print a row, silently repair a byte, reuse the Article 274 layout identity, or promise ranking, indexing, retrieval, traffic, leads, revenue, or LLM citations.

Finalize the title before image production. Use one unique exact-title hero for visible hero, Open Graph, Twitter, and schema. Use a materially distinct exact-keyword inline image. Fail closed on identity, factual, citation, editorial, compliance, creative, metadata, schema, accessibility, build, test, rollback, receipt, deployment, live-verification, or reconciliation failure.

## Release boundary

Five legal/editorial receipts remain missing. Article 303 may complete local automated gates and a local commit, but it may not be pushed, deployed, counted live, or used to trigger another Search Atlas recrawl.

# MRX1000 Wave 212 selection decision

- Decision ID: `MRX1000-W212-SELECT-2026-08-30`
- Program row: MRX1000-0832
- Selection rank: 284
- Decision date: 2026-08-30
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Rejected planning identity

- Title: Midland County, Texas Mineral Rights Value: Risk Checklist In 2026
- Slug: midland-county-texas-mineral-rights-value-risk-checklist-in-2026
- Primary keyword: Midland County, Texas mineral rights value
- Source handle: factory-queue:MRX-AEO-06154

The planning identity remains rejected. Its canonical cannibalization score was 0.7143, and it duplicates the county-value risk-checklist pattern without owning a distinct dataset, issuer, measurement frame, or evidence cutoff. No factory draft is imported or treated as publication evidence.

## Approved redefinition

- Title: Midland CAD 2026 Certified Mineral Roll ZIP: File Order, Formats, and Privacy Limits
- Slug: midland-cad-2026-certified-mineral-roll-zip-file-order-formats-privacy-limits
- Primary keyword: Midland CAD certified mineral roll file layout
- Pillar: texas-mineral-rights
- Cluster: texas-county-basin-local-intent

The article owns one bounded archive-control job: explain which control file to inspect first inside Midland CAD's 2026 Certified Mineral Roll ZIP, what roles the seven members appear to serve, and why record-level files require privacy-aware handling. The reader should begin with `2. MINERAL FILE LAYOUT.pdf`, use `5. MINERAL RECAP.PDF` only for aggregate context, and avoid opening or republishing owner-level TXT or CSV rows merely to explore the archive.

Article 281 owns Midland CAD appraisal approaches and the sufficient-data condition. Article 282 owns the 2025 annual-report account observation. Article 283 owns the Open Records page route taxonomy. Article 284 may identify the archive, member names, member sizes, control-document fields, aggregate recap, and hashes. It may not estimate value, verify ownership, make a property-specific conclusion, interpret law or privacy obligations, or reproduce owner-level records.

## Read-only executive decision

At verified commit **4b979fb608f08272ca751f3dcd5ee1578608e8e0**, Codex supplied the immutable planning identity, the existing Article 281–283 boundaries, the current **MRX1000-FACTORY-SEO-AEO-2026-08-29** controls, and the archive-level evidence to Chesty and `mrx_ceo` in separate read-only, no-tool, no-write sessions. Codex remained the sole writer and release owner.

CHESTY_DECISION: APPROVE_REDEFINED

CHESTY_ARTICLE284: Midland CAD 2026 Certified Mineral Roll ZIP: File Order, Formats, and Privacy Limits | midland-cad-2026-certified-mineral-roll-zip-file-order-formats-privacy-limits | Midland CAD certified mineral roll file layout

CHESTY_BOUNDARY: Source control and archive navigation only; no appraisal-method, annual-report, or route-taxonomy duplication; no owner-level inspection, valuation, ownership conclusion, or property-specific conclusion.

MRX_CEO_DECISION: APPROVE_REDEFINED

MRX_CEO_ARTICLE284: Midland CAD 2026 Certified Mineral Roll ZIP: File Order, Formats, and Privacy Limits | midland-cad-2026-certified-mineral-roll-zip-file-order-formats-privacy-limits | Midland CAD certified mineral roll file layout

MRX_CEO_BOUNDARY: Preserve exact archive evidence, disclose personal-field and privacy limits, do not republish owner rows, disclaim valuation and ownership verification, and direct official interpretation to Midland CAD.

Chesty session **20260830_230207_93c78f** and `mrx_ceo` session **20260830_230251_e0cb38** used the existing **openai-codex** included path with model **gpt-5.6-sol**. Each usage receipt recorded estimated incremental cost **$0.00**, status **included**, one completed API call, and no repository mutation.

## Claim-level source controls

| Claim ID | Evidence label       | Issuer and locator                                  | Recorded observation                                                                                                                                     | Limitation                                                                                                                           |
| -------- | -------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| C284-01  | ROUTING-ONLY         | Midland CAD Open Records page, retrieved 2026-08-30 | The page links `2026 Midland Certified Mineral Roll` under Mineral Files.                                                                                | The page link does not establish archive contents, completeness, owner identity, property applicability, title, appraisal, or value. |
| C284-02  | VERIFIED-OBSERVATION | Linked ZIP response                                 | The archive returned HTTP 200, `application/zip`, 140,096,354 bytes, Last-Modified 2026-07-28 14:29:04 GMT, and SHA-256 `61ac40...7eaa4`.                | HTTP metadata and a hash bind retrieved bytes; they do not validate every record or legal effect.                                    |
| C284-03  | VERIFIED-OBSERVATION | ZIP central directory                               | Seven members total 2,400,158,157 uncompressed bytes.                                                                                                    | Member names and sizes do not prove record accuracy, completeness, currency, or suitability.                                         |
| C284-04  | VERIFIED-OBSERVATION | `2. MINERAL FILE LAYOUT.pdf`, physical pages 1–8    | The 46,370-byte control file describes a 2,260-position export and identifies owner/contact, account, acreage, interest, jurisdiction, and value fields. | A layout description is not a record, title instrument, appraisal validation, or property conclusion.                                |
| C284-05  | VERIFIED-OBSERVATION | File-layout PDF, physical pages 3, 5, and 7         | The layout identifies owner name and address fields, a privacy code, an electronic-communication flag, and an email-address field.                       | The article may name field categories but may not expose, sample, search, or republish owner-level values.                           |
| C284-06  | VERIFIED-OBSERVATION | `5. MINERAL RECAP.PDF`, physical pages 1–3          | The 4,699-byte recap supplies jurisdiction aggregates and reports `442,395 = TOTAL RECORDS ON TAPE`.                                                     | An aggregate count does not identify an owner or property and does not reconcile the annual-report account observation.              |
| C284-07  | CONTEXT-ONLY         | ZIP member names and sizes                          | The PDF, TXT, and CSV members have different apparent roles and radically different sizes.                                                               | Filename and size do not prove schema correctness, data equivalence, delimiter behavior, or analytical fitness.                      |
| C284-08  | NON-VALIDATING       | Article research procedure                          | No row from the appraisal-roll PDF, flat-text file, or CSV file was opened, extracted, sampled, searched, copied, or republished.                        | This guide contains no owner-level or property-level finding.                                                                        |
| C284-09  | UNRESOLVED-CONFLICT  | Layout summary and detailed table                   | The layout contains position summaries and a detailed field table that should be preserved as issued rather than silently repaired.                      | The article does not certify the document as error-free or resolve apparent numbering and wording inconsistencies.                   |
| C284-10  | ROUTING-ONLY         | Texas Comptroller Midland county directory          | The directory identifies Midland Central Appraisal District and routes users to `midcad.org`.                                                            | Issuer provenance does not endorse every file or validate a record, appraisal, tax, title, value, or transaction conclusion.         |

## Retrieval, originality, and creative evidence

The certified-mineral archive is **140,096,354 bytes** with SHA-256 **61ac40ece8e0f52224c9c95e9d4a22491c040057caa72859a3918de222e7eaa4**. Its seven members total **2,400,158,157 uncompressed bytes**. The control-file hashes are:

- `2. MINERAL FILE LAYOUT.pdf`: **f0b34cc4b7a96e6cd5480f350f28554b3af72fc9cfd45959763f76d0aef1b020**;
- `5. MINERAL RECAP.PDF`: **8ac7f7b8231ffbb31ce2c31db46a4a54546d62605b3d9519cec9c58ced2ab589**; and
- `7. MASTER INVENTORY LISTING.PDF`: **edabfec36aefc391901530f3e7b9b24a654b22a002608c6f660475f71c5a35aa**.

The file-layout PDF has eight physical pages, title metadata `MINERAL FILE LAYOUT.xlsx`, creation date 2026-03-26, visible update statement `UPDATED 2/18/2026`, no encryption, and no JavaScript. Text extraction was used for field-location review. The recap and inventory-listing PDFs were separately parsed for aggregate and report-control context. No owner-level row was opened.

The exact replacement title and slug were absent before implementation. The canonical generator identifies **Dimmit CAD 2026 Certified Mineral Roll ZIP Archive Inventory** as the nearest same-cluster page at token-Jaccard **0.3571**. That page owns a Dimmit CAD 22,122,374-byte, 13-member TXT archive inventory and archive-test boundary. Article 284 owns a different issuer, a 140,096,354-byte seven-member mixed-format Midland archive, the exact control-file opening order, the eight-page layout, and its personal-field privacy boundary. Article 283 separately owns Midland CAD route taxonomy. The rejected planning identity remains out of the corpus.

The exact-title hero is a dark low-oblique archive-control scene with a closed case, seven blank member objects, and sealed data media behind a privacy boundary. The exact-keyword inline image is a materially distinct bright strict top-down workflow that stops at privacy barriers before two closed data containers. Deterministic typography adds the only readable words. OCR, dimensions, formats, SHA-256 values, and composition difference must pass before admission.

The refreshed **MRX1000-FACTORY-SEO-AEO-2026-08-29** contract applies: information gain over volume, stable claim IDs and evidence labels, archive/member bytes and hashes, source limitations, answer-first construction, claim-adjacent official links, supported FAQs, semantic internal links, exact visible/schema entity parity, idempotent row ownership, exact-title hero/share identity, a distinct exact-keyword inline image, and separate creation, release, and outcome states.

Production remains fail closed on the repository legal-release receipts and all post-release deployment, live verification, reconciliation, and production-alias gates.

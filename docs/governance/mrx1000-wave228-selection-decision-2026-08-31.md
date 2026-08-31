# MRX1000 Wave 228 Selection Decision - 2026-08-31

- Decision ID: `MRX1000-W228-SELECT-2026-08-31`
- Selection rank: `300`
- Decision date: `2026-08-31`
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: `MRX1000-0848`
- Planning source handle: `factory-queue:MRX-AEO-06054`
- Rejected planning title: `Texas Mineral Rights Value: Risk Checklist In 2026`
- Rejected planning slug: `texas-mineral-rights-value-risk-checklist-in-2026`
- Rejected planning keyword: `Texas mineral rights value`
- Planning-title collision: `0.6667`

The row remains in the MRX1000 program, but its broad statewide valuation-risk identity is not publishable. It materially overlaps the admitted valuation corpus and a county risk-checklist planning identity.

## Approved redefinition

- Title: `Texas RRC District Code Conversion: Why File Values 07-14 Need a Crosswalk`
- Slug: `texas-rrc-district-code-conversion-file-values-crosswalk`
- Primary keyword: `Texas RRC district code conversion`
- Search intent: `informational`
- Cluster: `texas-county-basin-local-intent`

The replacement owns one source-scoped data-ingestion job: translate a data dictionary's numeric district values `01` through `14` into the public or operational alphanumeric district labels only when that dictionary supplies the mapping. It preserves the raw value, translated value, source object, version or access date, conversion status, and exception note. Codes remain text so leading zeroes and letters survive.

The non-identity rows are `07→6E`, `08→7B`, `09→7C`, `10→08`, `11→8A`, `12→8B` reserved for future use, `13→09`, and `14→10`. The mapping is not a universal rewrite rule. The source dictionary controls whether a conversion is permitted.

The site source-copy gate prohibits typographic long dashes. Before final admission, Codex mechanically normalized the proposed title's range from `07–14` to `07-14`, re-rendered the hero, and re-ran exact-title OCR. The topic, job boundary, slug, keyword, and evidence boundary did not change. The read-only verdicts below remain verbatim evidence of the approved proposal.

## Current-source and evidence check

The RRC Oil and Gas Field Information data dictionary says the field table does not represent district identification values using the public labels and supplies a table-value-to-district-value conversion. It marks `8B` reserved for future use. The current Tight Sands Gas Leases data dictionary independently supplies the same district-column conversion and the same reserved status.

The T-1 EDI User Guide distinguishes normal alphanumeric district designations from a special numeric district field. It narrowly states that `6E` refers to the East Texas oil field in district `06` and that oil production for that field may be reported using either `06` or `6E`. That rule remains confined to the guide's context.

The W-10/G-10 EDI specification defines District Code as `Varchar (2)` and lists the accepted alphanumeric codes. Its list excludes reserved `8B`. The current RRC county-and-district page visibly uses alphanumeric labels such as `7B`, `7C`, and `8A`. These sources support treating operational codes as text and preserving source scope.

Controlled official retrievals on 2026-08-31:

| Source object | Bytes | SHA-256 | Bounded role |
| -- | -- | -- | -- |
| RRC Oil and Gas Field Information data dictionary | 74,568 | `b140a481947d7e3a868c74c66f5b9a3dcba1dea97e693a1751d3ed79e9d8db75` | Field-table values `01-14`, translated labels, and reserved `8B` |
| RRC Tight Sands Gas Leases data dictionary | 257,787 | `0e076c614bc5a7e8a247bc3cad225369241b49e0c29152d8c9e19c162e79e542` | Independent district-column conversion and reserved `8B` |
| RRC T-1 EDI User Guide | 508,413 | `73288045aa6c0995aa9836b0de6b889da17779eb424e34723f7624ee950776cf` | Normal alphanumeric versus special numeric fields and the guide-specific `6E/06` note |
| RRC W-10/G-10 EDI specification | 573,262 | `0453ec94b9d3ba58117f2a34590b4345a3ba8f24b0190d99745c4c76b990ffb2` | Two-character accepted district-code list and omission of reserved `8B` |
| RRC Oil and Gas Counties and Districts | 67,332 | `eb438c443e175fc122883ac565555966c7018704d28e0a09f96278f91c6e723e` | Current public display of alphanumeric district labels |

The controlled source set totals 1,481,362 bytes.

## Cannibalization boundary

The approved title, slug, and keyword were absent before implementation. The nearest admitted-title token similarity is `0.2632` to Article 299, `Texas RRC District, County, and Field Codes: A Source-Label Crosswalk`.

Article 299 owns non-equivalence among district code, county code, field number, field name, and page-specific FIPS labels. Article 300 owns only dataset-specific district-code translation and file-import integrity. Query-provenance worksheets retain query execution and result states. Production locators retain search organization. Article 300 does not infer a county, field boundary, well, lease, tract, title, ownership, production, reserves, value, offer, or transaction outcome.

## Chesty and mrx_ceo read-only decisions

At verified commit `0a31760f6d7c7acecae118c10c6094544299ba51`, Chesty profile `chestyorchestrator` and the named `mrx_ceo` profile received the immutable planning row, collision evidence, proposed identity, official-source observations and paths, adjacent-corpus boundaries, and current information-gain and answer-citation controls in separate supplied-text-only sessions. Neither session used a tool, browsed, read or wrote repository files, mutated Git, created a task, generated an image, deployed, published, purchased anything, or changed an external system. Both used the existing subscription-included `openai-codex` route at $0.00 incremental cost. Codex remains sole writer and release owner.

```text
CHESTY_ARTICLE300: APPROVE_REDEFINED
CHESTY_DECISION: Approve the replacement as Article 300, conceptually routing executive judgment through mrx_ceo.
CHESTY_RATIONALE: The source-scoped conversion topic is distinct, officially supported, absent from the corpus, and sufficiently separated from Article 299 at 0.2632 Jaccard.
CANONICAL_TITLE: Texas RRC District Code Conversion: Why File Values 07–14 Need a Crosswalk
JOB_BOUNDARY: Explain dataset-specific 01–14 district translation and import integrity while preserving raw/translated values, dictionaries, provenance, status, exceptions, leading zeroes, reserved 8B, and the T-1-specific 6E/06 limitation.
COLLISION_BOUNDARY: Article 299 retains code-type non-equivalence; Article 300 must not generalize mappings or infer counties, fields, wells, leases, tracts, ownership, production, reserves, value, offers, outcomes, query results, or production locators.
```

```text
MRX_CEO_ARTICLE300: APPROVE_REDEFINED
MRX_CEO_DECISION: APPROVE_REDEFINED
MRX_CEO_RATIONALE: The source-scoped district-code conversion topic is officially supported, absent by exact title, slug, and keyword, and sufficiently distinct from Article 299 at 0.2632 Jaccard.
CANONICAL_TITLE: Texas RRC District Code Conversion: Why File Values 07–14 Need a Crosswalk
JOB_BOUNDARY: Explain dataset-specific 01–14 district translation and file-import integrity while preserving raw and translated values, exact dictionaries, provenance, conversion status, exceptions, leading zeroes, reserved 8B status, and the T-1-specific 6E/06 limitation.
COLLISION_BOUNDARY: Article 299 retains code-type non-equivalence; Article 300 must not globalize mappings or infer counties, fields, wells, leases, tracts, title, ownership, production, reserves, value, offers, outcomes, query results, or production locators.
```

The first supplied review prompt contained inaccurate source byte counts while retaining correct URLs, hashes, page observations, and decisions. Separate read-only correction sessions replaced only the five byte counts and verified the total of 1,481,362 bytes. All other approval fields remained unchanged.

```text
CHESTY_ARTICLE300_CORRECTION: APPROVE_REDEFINED
CHESTY_CORRECTION: Replace only the five source byte counts with the verified values supplied; all other approved Article 300 identity fields remain unchanged.
BYTE_TOTAL: 1,481,362 bytes
```

```text
MRX_CEO_ARTICLE300_CORRECTION: APPROVE_REDEFINED
MRX_CEO_CORRECTION: Replace only the five source byte counts with the verified values; all other approved identity fields remain unchanged.
BYTE_TOTAL: 1,481,362
```

Initial Chesty session: `20260831_051009_9fb8ae`. Initial mrx_ceo session: `20260831_051113_ebfeca`. Correction Chesty session: `20260831_051349_c98980`. Correction mrx_ceo session: `20260831_051428_3132f7`.

## Creative boundary

The canonical hero uses a dark eye-level data-quality studio with a transparent alignment gate, parallel raw and translated token rails, and the exact title rendered deterministically in the left navy field. The separate in-body image uses a bright strict-overhead pale-stone dual-rail audit board, provenance dividers, a checksum window, and the exact keyword rendered deterministically in the lower navy band. Their camera angle, lighting, palette balance, object language, evidence scene, binary identity, and perceptual hash are materially distinct.

## Release boundary

Article 300 may enter automated editorial, factual/citation, compliance, originality, creative, metadata, schema, accessibility, build, rollback, deployment, live-verification, and reconciliation gates. It remains uncounted as production-live until every active production alias passes the exact page and image assertions. The five production receipt blockers remain separate from this identity decision.

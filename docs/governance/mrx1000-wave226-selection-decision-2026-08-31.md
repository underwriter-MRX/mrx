# MRX1000 Wave 226 Selection Decision — 2026-08-31

- Decision ID: `MRX1000-W226-SELECT-2026-08-31`
- Selection rank: `298`
- Decision date: `2026-08-31`
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: `MRX1000-0846`
- Planning source handle: `factory-queue:MRX-AEO-06050`
- Rejected planning title: `Texas Mineral Rights Value: Guide For Mineral Owners`
- Rejected planning slug: `texas-mineral-rights-value-guide-for-mineral-owners`
- Rejected planning keyword: `Texas mineral rights value`
- Planning-title collision: `0.5000` token-Jaccard similarity to `How to Determine the Value of Texas Mineral Rights`

The row remains in the MRX1000 program, but its broad valuation-guide identity is not publishable. It repeats statewide valuation jobs already owned by the live corpus and cannot be repaired by a light title variation.

## Approved redefinition

- Title: `CAD Account Number, RRC Lease ID, and Operator Number in Texas Mineral Records`
- Slug: `cad-account-number-rrc-lease-id-operator-number-texas-mineral-records`
- Primary keyword: `Texas mineral record identifiers`
- Search intent: `informational`
- Cluster: `texas-county-basin-local-intent`

The replacement owns one source-labeling job: separate the long and short appraisal-district account identifiers from the RRC API wellbore number, district-plus-lease or gas-well identifier, and P-5 operator number. It provides a reusable crosswalk, copy-as-shown rule, source-owner field, and stop conditions without executing a query, proving a property connection, deciding title or ownership, interpreting production, calculating value, or advising on a transaction.

## Current-source and evidence check

The Texas Comptroller's current Electronic Appraisal Roll Submission manual defines the long account number as the appraisal district's unique long or geographic code and the short account number as a unique short code that may also be called a parcel number or R-number. It separately notes that a GIS parcel identifier may differ. The current property-transaction submission manual likewise describes its short account number as a locally assigned R-number and requires a separate transaction record when more than one account is included.

The Texas RRC's current query guide says an API number identifies a wellbore, while a completion is identified by district plus oil lease number or gas-well ID. It says the P-5 number is unique to an operator. The district-and-operator index exposes these labels together but does not make them interchangeable. The PDQ FAQ supplies a bounded link between identifiers: an API number can be used to locate lease information, after which the lease number can be used in PDQ.

Controlled official retrievals on 2026-08-31:

| Source object | Bytes | SHA-256 | Bounded role |
| -- | -- | -- | -- |
| RRC About Oil and Gas Data Queries | 46,685 | `93b8dabdfa94ed0ed7aed05b32aa6aa66a1f7884e3232a30d963fba577761581` | API, completion, lease/gas ID, district, and P-5 roles |
| RRC Oil Leases and Gas Wells by District and Operator | 60,883 | `ea66a35fda293375ad932894ae8d812095606bdfb3f134352340bde86628ba9b` | Co-displayed identifier labels and monthly index scope |
| RRC Production Data Query System FAQ | 58,425 | `9efdfe4160a1c51d05bd6df0322b8090452840a768b61752eec02d36470b765f` | Bounded API-to-lease lookup sequence and snapshot limit |
| Comptroller Electronic Appraisal Roll Submission Manual | 7,610,716 | `e93aa72cb71fb160e4f2b72417e6205135863766fcf65c6ee474b8bbb1bea00d` | CAD long, short, R-number, parcel, and GIS-ID boundaries |
| Comptroller Electronic Property Transaction Submission Manual | 1,751,523 | `4ce4418f86f1ef41326d514f5c27b1ea672575b816de95b673379b83c494d960` | Locally assigned short account and separate-record rule |

The controlled source set totals 9,528,232 bytes.

## Cannibalization boundary

The approved title, slug, and keyword were absent before implementation. The nearest admitted-title token similarity is `0.2778` to Article 297, `Tax Year, Production Month, and Download Date in Texas Mineral Records`. Article 297 owns date roles; Article 298 owns identifier types. Query-specific RRC worksheets retain their individual query routes and result fields. The production-record locator retains the task of organizing a production search. The operator-name-change log retains temporal name evidence. Property-connection and title pages retain the work of establishing whether records relate to a private interest.

Article 298 may link to those jobs but must not absorb them. A matching or similar identifier is a lead for controlled follow-up, not proof that two records describe the same property or person.

## Chesty and mrx_ceo read-only decisions

At verified commit `3ac024666b73524f8ce51e261d40759a73fcf1bc`, Chesty profile `chestyorchestrator` and the named `mrx_ceo` profile received the immutable planning row, collision evidence, proposed identity, official-source observations and paths, adjacent-corpus boundaries, creative distinction, and current information-gain and answer-citation controls in separate supplied-text-only sessions. Neither session used a tool, browsed, read or wrote repository files, mutated Git, created a task, generated an image, deployed, published, purchased anything, or changed an external system. Both used the existing subscription-included `openai-codex` route at $0.00 incremental cost. Codex remains sole writer and release owner.

```text
CHESTY_ARTICLE298: APPROVE_REDEFINED
CHESTY_DECISION: Approve the proposed replacement identity because it is distinct, source-supported, and bounded against the statewide valuation corpus.
CHESTY_RATIONALE: The identity provides information gain by separating five non-equivalent identifier types with an explicit crosswalk, source ownership, copied-as-shown handling, and stop conditions.
CANONICAL_TITLE: CAD Account Number, RRC Lease ID, and Operator Number in Texas Mineral Records
JOB_BOUNDARY: Explain how Texas mineral owners and family organizers should label and keep separate the CAD long account number, CAD short account or R-number, RRC API wellbore number, RRC district plus oil lease number or gas well ID, and RRC P-5 operator number using a reusable identifier crosswalk, source-owner field, copied-as-shown rule, and explicit stop conditions.
COLLISION_BOUNDARY: Do not reproduce query-specific RRC retrieval worksheets, broad public-record guides, production locators, operator-name-change logs, tax or mineral valuation guides, title or ownership guides, or property-connection analyses, and never infer that records describe the same property merely because numbers or names resemble one another.
```

```text
MRX_CEO_ARTICLE298: APPROVE_REDEFINED
MRX_CEO_DECISION: APPROVE_REDEFINED
MRX_CEO_RATIONALE: The redefined identity provides unique information gain by separating source-owned Texas mineral-record identifier types while maintaining explicit non-equivalence, stop conditions, and a clear boundary from the statewide valuation corpus.
CANONICAL_TITLE: CAD Account Number, RRC Lease ID, and Operator Number in Texas Mineral Records
JOB_BOUNDARY: Explain how Texas mineral owners and family organizers should separately label, source, and copy as shown the CAD long account number, CAD short account or R-number, RRC API wellbore number, RRC district plus oil lease number or gas well ID, and RRC P-5 operator number using a reusable crosswalk and explicit stop conditions.
COLLISION_BOUNDARY: Do not reproduce RRC retrieval worksheets, broad public-record guides, production locators, operator-name-change logs, valuation or tax-value guides, title or ownership guides, or property-connection analyses, and never join records merely because a number or name resembles another.
```

Chesty session: `20260831_042435_2fcb1a`. mrx_ceo session: `20260831_042532_7ce814`.

## Creative boundary

The canonical hero uses a bright low-three-quarter records-lab scene with five separate evidence objects on the right and the exact title rendered deterministically in the left navy field. The separate in-body image uses a strict-overhead slate drafting board with five geometric identifier lanes, visible break marks, and the exact keyword rendered deterministically in a lower band. Their camera angle, palette, object language, evidence scene, binary identity, and perceptual hash are materially distinct.

## Release boundary

Article 298 may enter automated editorial, factual/citation, compliance, originality, creative, metadata, schema, accessibility, build, rollback, deployment, live-verification, and reconciliation gates. It remains uncounted as production-live until every active production alias passes the exact page and image assertions. The five production receipt blockers remain separate from this identity decision.

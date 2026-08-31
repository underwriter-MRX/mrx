# MRX1000 Wave 227 Selection Decision — 2026-08-31

- Decision ID: `MRX1000-W227-SELECT-2026-08-31`
- Selection rank: `299`
- Decision date: `2026-08-31`
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: `MRX1000-0847`
- Planning source handle: `factory-queue:MRX-AEO-06051`
- Rejected planning title: `Texas Mineral Rights Value: Market Update For Mineral Owners`
- Rejected planning slug: `texas-mineral-rights-value-market-update-for-mineral-owners`
- Rejected planning keyword: `Texas mineral rights value`
- Planning-title collision: `0.6000`

The row remains in the MRX1000 program, but its broad statewide valuation-update identity is not publishable. It repeats valuation jobs already owned by the admitted corpus and would add no defensible source-backed information gain.

## Approved redefinition

- Title: `Texas RRC District, County, and Field Codes: A Source-Label Crosswalk`
- Slug: `texas-rrc-district-county-field-codes-source-label-crosswalk`
- Primary keyword: `Texas RRC district county field codes`
- Search intent: `informational`
- Cluster: `texas-county-basin-local-intent`

The replacement owns one narrow recordkeeping job: explain and preserve the source-specific meanings and non-equivalence of the RRC district code, RRC county code, eight-digit field number, field name, and any source-page FIPS code. The reusable crosswalk retains the exact source label, copied value, dataset or screen, field class, leading characters, and access date. It stops before inferring a field boundary, well or lease connection, private-property relationship, title, ownership, production, reserves, value, offer, or transaction outcome.

## Current-source and evidence check

The RRC's current downloadable-data catalog says the Oil & Gas Field Name & Numbers records include district, field number, county code, and field name. The current Oil and Gas Counties and Districts page displays County, District Code, FIPS Code, and District Office as separate columns. Those labels must remain source-qualified rather than being collapsed into one generic county or field code.

The official RRC Field Information manual explains that Commission districts are administrative regions and that a field can be in one district or span districts. It defines an eight-digit field number as a unique five-digit field portion plus a three-digit reservoir portion, treats field name as a separate field, and documents county-code occurrences for field records. It also warns by structure that associated-field and map records use their own keys and occurrences; this article does not turn those file relationships into a private-property conclusion.

The current Field Search surface establishes a separate query-execution job, while the current district-and-operator index displays field number and name, county number and name, district, lease, operator, and oil-or-gas context as separate labels. Co-display supports a crosswalk; it does not make those fields interchangeable.

Controlled official retrievals on 2026-08-31:

| Source object | Bytes | SHA-256 | Bounded role |
| -- | -- | -- | -- |
| RRC Data Sets Available for Download | 114,876 | `ba615bbe5eeb8e7a5382bfb07a3d9ceeb661725de8233f6a2b532094bfeea700` | District, field number, county code, and field name in the downloadable record family |
| RRC Oil and Gas Counties and Districts | 67,332 | `eb438c443e175fc122883ac565555966c7018704d28e0a09f96278f91c6e723e` | Separate County, District Code, FIPS Code, and District Office labels |
| RRC Field Information manual | 1,397,759 | `0c0a14e30b932032749206c00b02e06c28086bee2047694f2a8d475addaa7008` | District geography, eight-digit field-number composition, field name, county-code, and file-key boundaries |
| RRC Field Search | 6,658 | `7b0c16b0c0b9c58892b11ae4234d27f120d4aee5364abd190fe27abd89c3ada9` | Current query surface and explicit boundary from query-execution work |
| RRC Leases and Wells by District and Operator | 60,883 | `ea66a35fda293375ad932894ae8d812095606bdfb3f134352340bde86628ba9b` | Separately displayed district, field, county, operator, lease, and oil-or-gas labels |

The controlled source set totals 1,647,508 bytes.

## Cannibalization boundary

The approved title, slug, and keyword were absent before implementation. The nearest admitted-title token similarity is `0.2000` to `Texas RRC Field Search Retrieval Provenance Worksheet`.

Article 298 owns CAD account, API wellbore, district-plus-lease or gas-well, and P-5 operator identifier roles. The Field Search worksheet owns query attempts and result-state recording. Query and field-rules worksheets own retrieval paths. The production locator owns production-search organization. Article 299 owns only source-label semantics and non-equivalence for RRC district, county, field-number, field-name, and page-specific FIPS labels. It contains no real identifiers and executes no query.

## Chesty and mrx_ceo read-only decisions

At verified commit `6ff2511c9938136d8dd6a99e61d34966c0830530`, Chesty profile `chestyorchestrator` and the named `mrx_ceo` profile received the immutable planning row, collision evidence, proposed identity, official-source observations and paths, adjacent-corpus boundaries, and current information-gain and answer-citation controls in separate supplied-text-only sessions. Neither session used a tool, browsed, read or wrote repository files, mutated Git, created a task, generated an image, deployed, published, purchased anything, or changed an external system. Both used the existing subscription-included `openai-codex` route at $0.00 incremental cost. Codex remains sole writer and release owner.

```text
CHESTY_ARTICLE299: APPROVE_REDEFINED
CHESTY_DECISION: Approve MRX1000-0847 under the proposed replacement identity as a narrowly bounded source-label crosswalk.
CHESTY_RATIONALE: The replacement supplies distinct owner-facing information gain, has no exact identity match, and reduces the nearest admitted-title token collision to 0.2000 while official sources support the label distinctions.
CANONICAL_TITLE: Texas RRC District, County, and Field Codes: A Source-Label Crosswalk
JOB_BOUNDARY: Explain and preserve the source-specific meanings and non-equivalence of RRC district code, RRC county code, eight-digit field number, field name, and source-page FIPS code without inferring boundaries, asset relationships, ownership, production, reserves, value, offers, or outcomes.
COLLISION_BOUNDARY: Keep this article out of Article 298 identifier roles, Field Search query execution and result states, field-rules retrieval paths, production-locator search organization, and any claim that distinct source labels establish a well, lease, property, or transactional relationship.
```

```text
MRX_CEO_ARTICLE299: APPROVE_REDEFINED
MRX_CEO_DECISION: APPROVE_REDEFINED
MRX_CEO_RATIONALE: The replacement provides distinct owner-facing information gain, has no exact identity match, reduces the nearest admitted-title Jaccard collision to 0.2000, and is supported by controlled official sources distinguishing the labels.
CANONICAL_TITLE: Texas RRC District, County, and Field Codes: A Source-Label Crosswalk
JOB_BOUNDARY: Explain and preserve the source-specific meanings and non-equivalence of RRC district code, RRC county code, eight-digit field number, field name, and source-page FIPS code without inferring boundaries, asset relationships, title, ownership, production, reserves, value, offers, or outcomes.
COLLISION_BOUNDARY: Keep this article out of Article 298 identifier roles, Field Search query execution and result states, field-rules retrieval paths, production-locator search organization, and any claim that distinct source labels establish a well, lease, property, or transactional relationship.
```

Chesty session: `20260831_044946_51bf0b`. mrx_ceo session: `20260831_045202_d20516`.

## Creative boundary

The canonical hero uses a bright low-three-quarter archive scene with three separate record trays, an abstract Texas grid, a magnifying glass, and the exact title rendered deterministically in the left navy field. The separate in-body image uses a strict-overhead pale-stone crosswalk with five physically separated abstract cards, a ruler, caliper, layered Texas cutouts, and the exact keyword rendered deterministically in the lower navy band. Their camera angle, palette balance, object language, evidence scene, title function, and perceptual hash are materially distinct.

## Release boundary

Article 299 may enter automated editorial, factual/citation, compliance, originality, creative, metadata, schema, accessibility, build, rollback, deployment, live-verification, and reconciliation gates. It remains uncounted as production-live until every active production alias passes the exact page and image assertions. The five production receipt blockers remain separate from this identity decision.

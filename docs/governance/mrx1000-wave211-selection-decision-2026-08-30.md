# MRX1000 Wave 211 selection decision

- Decision ID: `MRX1000-W211-SELECT-2026-08-30`
- Program row: MRX1000-0831
- Selection rank: 283
- Decision date: 2026-08-30
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Rejected planning identity

- Title: Midland County, Texas Mineral Rights Value: Market Update For Mineral Owners
- Slug: midland-county-texas-mineral-rights-value-market-update-for-mineral-owners
- Primary keyword: Midland County, Texas mineral rights value
- Source handle: factory-queue:MRX-AEO-06151

The planning identity remains rejected. It offers no defined market period, dataset, issuer, measurement frame, or evidence cutoff and materially overlaps the existing Midland County and mineral-rights valuation corpus. No factory draft is imported or treated as publication evidence.

## Approved redefinition

- Title: Midland CAD Open Records Page: Mineral Files, Rolls, and Notices as Separate Source Routes
- Slug: midland-cad-open-records-mineral-files-rolls-notices-source-routes
- Primary keyword: Midland CAD mineral files, rolls, and notices
- Pillar: texas-mineral-rights
- Cluster: texas-county-basin-local-intent

The article owns one bounded official-source routing job: explain where Midland CAD's current Open Records page places the preliminary mineral roll, certified mineral roll, mineral notices, request form, and related contact route. It must preserve the page's actual heading hierarchy. The 2026 Preliminary Mineral Roll appears under Preliminary Rolls, while the 2026 Midland Certified Mineral Roll and 2026 Mineral Notices appear under Mineral Files. The article may not silently restate those links as three equal page headings.

The article may establish issuer, page, displayed label, target URL, filename suffix, retrieval date, controlled response identity, and request-form fields. It may not claim that a linked archive was downloaded or inspected, that a record exists for a named owner or property, or that a label proves file completeness, currency, field definitions, ownership, title, appraisal accuracy, tax treatment, protest outcome, mineral value, offer, production, royalties, law, or another property-specific conclusion.

## Read-only executive decision

At verified commit **6ef952b9590b3d41703ae8c70acb16a3f553c7b3**, Chesty received the immutable planning row, current corpus, Articles 281 and 282, the current **MRX1000-FACTORY-SEO-AEO-2026-08-29** directive, and the source and visual constraints in a read-only, no-write session. Chesty routed the executive decision through **mrx_ceo**. Codex remains sole writer and release owner.

CHESTY_DECISION: APPROVE_REDEFINED

CHESTY_ARTICLE283: Midland CAD Open Records Page: Mineral Files, Rolls, and Notices as Separate Source Routes | midland-cad-open-records-mineral-files-rolls-notices-source-routes | Midland CAD mineral files, rolls, and notices

CHESTY_BOUNDARY: Limit the article to the official Open Records route taxonomy and its evidentiary limits; exclude appraisal approaches, account counts, geology, ownership, title, tax, value, offers, production, royalties, and transaction conclusions.

MRX_CEO_DECISION: APPROVE_REDEFINED

MRX_CEO_ARTICLE283: Midland CAD Open Records Page: Mineral Files, Rolls, and Notices as Separate Source Routes | midland-cad-open-records-mineral-files-rolls-notices-source-routes | Midland CAD mineral files, rolls, and notices

MRX_CEO_BOUNDARY: A listed route supports source identity and navigation only. It does not prove that a record exists for a particular owner or account, applies to a property, is current or complete, or establishes ownership, title, appraisal accuracy, taxes, protest results, mineral value, offers, production, or royalties.

Chesty session **20260829_230727_aed69e** used the existing **openai-codex** included path with model **gpt-5.6-sol**. Its usage receipt recorded estimated incremental cost **$0.00**, status **included**, and no repository mutation.

## Claim-level source controls

| Claim ID | Evidence label       | Issuer and locator                                               | Recorded observation                                                                                                                   | Limitation                                                                                                                        |
| -------- | -------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| C283-01  | ROUTING-ONLY         | Texas Comptroller Midland county directory, retrieved 2026-08-30 | The directory identifies Midland Central Appraisal District and routes users to midcad.org.                                            | Domain routing does not validate a district page, file, record, account, appraisal, tax, title, value, or transaction result.     |
| C283-02  | VERIFIED-OBSERVATION | Midland CAD Open Records page, retrieved 2026-08-30              | The visible page contains Open Records Request Form, Certified Rolls, Preliminary Rolls, Mineral Files, and Miscellaneous Files areas. | A heading and link inventory does not establish archive contents, completeness, applicability, or current property facts.         |
| C283-03  | VERIFIED-OBSERVATION | Open Records page, Preliminary Rolls                             | The page places the link labeled `2026 Preliminary Mineral Roll` under Preliminary Rolls.                                              | The displayed label does not prove what the target archive contains or whether it matches a person, account, or property.         |
| C283-04  | VERIFIED-OBSERVATION | Open Records page, Mineral Files                                 | The page places `2026 Midland Certified Mineral Roll` under Mineral Files.                                                             | The placement must not be silently restated as a Certified Rolls heading entry or treated as proof of certification scope.        |
| C283-05  | VERIFIED-OBSERVATION | Open Records page, Mineral Files                                 | The page places `2026 Mineral Notices` under Mineral Files.                                                                            | The link does not prove a notice exists for an owner or property, was delivered, is current, or has a particular legal effect.    |
| C283-06  | CONTEXT-ONLY         | Open Records target URLs                                         | The preliminary roll and notices targets end in `.7z`; the certified mineral roll target ends in `.zip`.                               | Filename suffixes identify linked target formats only. No archive was downloaded, opened, extracted, sampled, or searched.        |
| C283-07  | VERIFIED-OBSERVATION | Open Records REST record, page ID 5797                           | The controlled record reports slug `open-records` and `modified_gmt` `2026-08-17T13:07:37`.                                            | WordPress modification metadata is not a visible publication date and does not prove when each linked file changed.               |
| C283-08  | UNRESOLVED-CONFLICT  | Open Records link and linked PDF                                 | The page displays `Open Records Request From`; the linked one-page PDF is titled `Request for Information`.                            | The article preserves the mismatch and does not silently correct the page label or infer that the form is invalid.                |
| C283-09  | VERIFIED-OBSERVATION | Request for Information PDF, physical page 1                     | The form offers inspection or copies and asks the requester to identify the requested information.                                     | A blank request form does not establish that responsive records exist, what they contain, cost, timing, completeness, or outcome. |
| C283-10  | ROUTING-ONLY         | Midland CAD Department Emails REST record                        | The page separately labels Minerals and Open Records Request contact routes.                                                           | Contact labels do not establish which route should answer a specific matter or validate any record or conclusion.                 |
| C283-11  | NON-VALIDATING       | Midland CAD Publications REST record                             | Publications is a separate route for annual reports, mass appraisal reports, and other published documents.                            | A publication route does not update or validate the Open Records page, a linked archive, or a property-specific question.         |
| C283-12  | VERIFIED-OBSERVATION | Controlled source files                                          | Exact bytes and SHA-256 values bind the Open Records, Publications, Department Emails, request-form PDF, and Comptroller retrievals.   | Hashes prove retrieved-byte identity only, not truth, completeness, currency, applicability, or legal effect.                     |
| C283-13  | NON-VALIDATING       | Article research procedure                                       | No owner, property, account, roll archive, notice archive, or mineral-file archive was searched or reproduced.                         | The article contains no account-specific or property-specific finding.                                                            |

## Retrieval, originality, and creative evidence

The controlled Open Records REST response is 9,992 bytes with SHA-256 **5ffbcf5487d2de4c88e65eb507ce5edb4df427fba4cc06e099944963079cbce7**. The controlled Publications and Department Emails REST responses are 10,240 and 3,557 bytes with SHA-256 values **e00996ca7cc38f9a0a59366da35d572602692a21352ca4a760edffd70bd971e9** and **60c67082f0e81a5cfcc86a0a8dc46c5b2ed0f47d6508595e7839e3371e8250a1**.

The linked one-page request-form PDF is 263,637 bytes with SHA-256 **c96a51aeb3984b0c551861727f8cd5465d21b939bac8789afc97d7a91c1b2ee0**. Physical page 1 was rendered at 1,275 by 1,650 pixels and visually inspected; the rendering has SHA-256 **6f301e8c13b8f6169d04f5941d565530e99d661734b5eb22aab692ebea393c4a**. Extracted text supported navigation only and was not treated as sole validation. The Texas Comptroller Midland directory response is 121,531 bytes with SHA-256 **236fb5f5686a90b91c02047d50361f8639c498facad7ecb4cc3d973f6e28d813**.

The exact replacement title and slug were absent before implementation. The nearest same-cluster title matches were **howard-cad-open-records-request-form-mineral-record-field-inventory** and **midland-cad-mineral-property-three-approaches-sufficient-data-condition**, each at the canonical generator's token-Jaccard score of **0.1765**. The Howard page owns a different issuer and request-form field inventory. Article 281 owns appraisal approaches. Article 282 owns the approximate 419,660 account statement and physical page locator. Article 283 owns only Midland CAD's current Open Records route taxonomy and non-validation boundary.

The exact-title hero is a dark low-oblique scene with one blank origin card and three physically separate source lanes. The exact-keyword inline image is a materially distinct bright strict top-down branching route map with roll, stack, and sealed-notice motifs behind boundaries. Neither image reproduces a government record, seal, owner, property, account, value, result, or official affiliation.

The refreshed **MRX1000-FACTORY-SEO-AEO-2026-08-29** contract is mandatory: information gain over volume, stable claim IDs and evidence labels, source bytes and freshness, provenance separated from validity, answer-first construction, claim-adjacent official citations, supported FAQs, semantic links, exact visible/schema entities, idempotent row and route ownership, exact-title hero/share identity, a distinct exact-keyword inline image, deterministic OCR/hash evidence, and separate creation, release, and outcome states.

Production remains fail closed on repository legal-release receipts and all post-release deployment, live verification, reconciliation, recrawl, and OTTO gates.

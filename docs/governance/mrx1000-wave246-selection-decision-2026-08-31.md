# MRX1000 Wave 246 Selection Decision - 2026-08-31

- Decision ID: `MRX1000-W246-SELECT-2026-08-31`
- Selection rank: `318`
- Decision date: `2026-08-31`
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: `MRX1000-0891`
- Planning source handle: `factory-queue:MRX-AEO-00560`
- Rejected planning title: Cash For Mineral Rights: Documents Before You Sell
- Rejected planning slug: `cash-for-mineral-rights-documents-before-you-sell`
- Rejected planning keyword: cash for mineral rights

The program row remains in MRX1000, but the generic pre-sale-document identity is rejected. It materially collides with the admitted documents-needed-to-sell, sale-package-index, redaction, and recorded-copy-retrieval corpus. No factory body is imported or treated as publication evidence.

## Approved redefinition

- Title: Texas Recorded Mineral Documents: Instrument Number, Volume/Page, and Certified-Copy Status
- Slug: `texas-recorded-mineral-documents-instrument-number-volume-page-certified-copy-status`
- Primary keyword: Texas recorded mineral document locator fields
- Search intent: informational
- Cluster: `title-lease-ownership-documents`

Article 318 owns one bounded source-control job: help a Texas mineral owner transcribe and keep separate the county, instrument or county-clerk file number, volume/page or film code when present, online/plain-copy status, and county-clerk certification status for an already-found recorded instrument. It stops before a general sale-document checklist, package index, redaction workflow, retrieval walkthrough, ownership proof, title opinion, legal-sufficiency decision, or claim that certification proves current ownership.

## Controlled source packet

Official objects retained on 2026-08-31:

- Texas Property Code Chapter 11 HTML: 22,639 bytes, SHA-256 `274fa3cfda2b15d503c12bf5ea439fbaab1a262ab7acc3623db757855f1fe5f3`. Section 11.001 supplies the county-of-recording rule; Section 11.007 identifies volume/page, film code, and county-clerk file number as recognized real-property-record references; Section 11.008(a) includes mineral leases in that section's real-property instrument definition; Section 11.008(k) supplies the online-database completeness warning.
- Texas Judicial Branch Office of Court Administration County Clerk Manual, 2023 edition: 2,809,948 bytes, 279 PDF pages, SHA-256 `3a9d4200c52a10651949c6a9009020f177153159867e24f9eab0c28c01a2396f`. PDF page 27, printed II-5, supplies the volume/page versus unique-instrument-number distinction. PDF page 45, printed II-23, supplies the certified-copy and scanned-record locator discussion.
- Texas State Library and Archives Commission Land and Property History page: 48,344 bytes, SHA-256 `4caebc2be12f3b85f8f88b269b69df398e67365f06fbf5b39d5baa2e9564aa24`. The page was last modified February 18, 2025 and directs researchers to the county where property is located and the County Clerk for locating help.
- Source renders: `/tmp/mrx318.LX9cqB/page-27-027.png` and `/tmp/mrx318.LX9cqB/page-45-045.png`, each 1,275 by 1,650 PNG and visually inspected as legible.

Complete-file hashes identify the retrieved objects. They do not prove that a publisher will always serve identical bytes, that an online image is complete, that a copy is certified, or that a person currently owns an interest.

## Cannibalization boundary

The exact replacement title, slug, and keyword were absent before implementation. Against 374 source MDX titles, the nearest title-token Jaccard score was `0.2143` against `Documents Needed to Sell Texas Mineral Rights`; the next was `0.2000` against `How to Retrieve a Recorded Mineral Deed Copy for a CPA Handoff`.

- Article 0145 owns sale-package indexing.
- Article 0007 owns document redaction before sharing.
- Article 0882 owns the documents-needed-to-sell checklist.
- Article 0652 owns recorded-mineral-deed retrieval and CPA handoff.
- Article 318 owns only locator identity and copy-status fields for an already-found recorded instrument.

## Chesty and mrx_ceo read-only decisions

At verified commit `fbe14cdaf2c2160b232865f4b61a4b7b8c4456d1`, both profiles received supplied text and explicit official-source observations only. Neither profile called a tool or changed repository, Git, task, image, deployment, purchase, or external state. Codex remains sole writer and release owner.

- Chesty session `20260831_161908_77ea4d`: `APPROVE_REDEFINED`
- mrx_ceo session `20260831_161957_67a919`: `APPROVE_REDEFINED`
- Both sessions used `gpt-5.6-sol` through the included `openai-codex` route and recorded estimated incremental cost `$0.00` with status `included`.

Deterministic admission token for the same redefinition:

`MRX1000-0891:RANK-318:COMMIT-fbe14cdaf2c2160b232865f4b61a4b7b8c4456d1:TEXAS-RECORDED-DOCUMENT-LOCATOR-AND-COPY-STATUS:APPROVE-REDEFINED`

MRX_CEO_DECISION: APPROVE_REDEFINED

## Updated article prompt

Lead with the five fields and the distinction between a locator and copy status. Name the official objects, retrieval date, complete-file hashes, exact section and page locators, and the TSLAC modification date. Keep a blank field blank rather than inferring it. Preserve source attribution, source age, claim IDs, known unknowns, and the line between locating a record and proving current ownership.

Apply the current authenticated Summit operating doctrine: answer-first structure; project-owned, versioned context; source, rendered, and production-state separation; organizational author and fictional-guide controls; claim-adjacent citations; semantic hub, support, and next-step links; visible and schema entity consistency; and no ranking, indexing, retrieval, traffic, lead, revenue, or LLM-citation promises.

Use the `MRX Editorial Team` organizational author. A fictional guide is not an author or licensed professional. Preserve directional-assessment, not-certified-appraisal, no individualized legal-tax-title-accounting-engineering-investment-advice, disclosed-buyer, and no LocalBusiness or Google Business Profile implication language. Search Atlas generic image generation remains disabled.

Finalize the title before image production. Use one unique exact-title hero for visible hero, Open Graph, Twitter, schema, and share. Use a materially distinct exact-keyword inline image. Fail closed on identity, factual, citation, editorial, compliance, originality, creative, metadata, schema, accessibility, build, test, rollback, receipt, deployment, live-verification, or reconciliation failure.

## Creative verification

- Hero SHA-256: `88d7c8025c50212ddfb5d558a4035c65a65de2531361a159ecf43e6642f36a6e`, 1200 by 630 WebP, exact-title OCR pass.
- Inline SHA-256: `195482b33b309afb88a76369675f7c962c993840c6b237c3eb83159ae5f87f63`, 1200 by 675 WebP, exact-keyword OCR pass.
- The dark low-oblique hand-and-archive-drawer hero and bright people-free strict-overhead five-column matrix are materially distinct compositions.
- Full-size, 600 by 315, 300 by 158, 900 by 506, 600 by 338, and 360 by 203 renders were generated; the full-size and smallest hero and inline renders were visually inspected for readability, crop safety, incidental text, and composition identity.

## Release boundary

Search Atlas audit 138239 is complete and post-processed with 2,515 approved-deployed recommendations and zero pending. No new recrawl is authorized for this handoff. Five legal/editorial receipts remain invalid. Article 318 may complete local automated gates and a local commit, but it may not be pushed, deployed, counted live, or reconciled until those receipts exist and the full release gate passes.

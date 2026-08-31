# MRX1000 Wave 238 Selection Decision - 2026-08-31

- Decision ID: `MRX1000-W238-SELECT-2026-08-31`
- Selection rank: `310`
- Decision date: `2026-08-31`
- Disposition: `APPROVED_FOR_CONTINUOUS_QUALITY_GATED_PUBLICATION`

## Preserved program identity

- Program row: `MRX1000-0858`
- Planning source handle: `factory-queue:MRX-AEO-07251`
- Rejected planning title: Ward County, Texas Mineral Rights Value: Market Update For Mineral Owners
- Rejected planning slug: `ward-county-texas-mineral-rights-value-market-update-for-mineral-owners`
- Rejected planning keyword: Ward County, Texas mineral rights value

The program row remains in MRX1000, but the generic county-value market update is rejected because it materially collides with the admitted valuation, county-value, offer-review, and mineral-owner guide corpus. No factory body is imported or treated as publication evidence.

## Approved redefinition

- Title: Ward CAD 2026 Mineral ZIP Date Register: March 26, July 16, and July 23
- Slug: `ward-cad-2026-mineral-zip-date-register-march-26-july-16-july-23`
- Primary keyword: Ward CAD 2026 mineral ZIP member dates
- Search intent: informational
- Cluster: `texas-county-basin-local-intent`

Article 310 owns one narrow source-control job: inventory the calendar dates encoded for the seven Ward ZIP entries, distinguish filename-number order from metadata-date order, explain the conventional MS-DOS and `0x5455` extended-timestamp representations, and stop before assigning business chronology or interpreting any member payload.

## Controlled source packet

Official or deterministic objects retained on 2026-08-31:

| Source object                           |      Bytes | SHA-256                                                            | Bounded role                                                     |
| --------------------------------------- | ---------: | ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| Ward CAD Data and Records page          |     74,781 | `c9e483ed6ce3d0f66869acc15393212782866f0bd03c315cd4429b8c8c68921f` | Publisher route and visible 2026 mineral-roll ZIP label          |
| Ward CAD 2026 certified mineral ZIP     | 35,266,126 | `7993b427ee51193ce86d5490102054e2e30e26f5811cacfd3791819803d07752` | Exact outer-container identity and seven central-directory rows  |
| ZipInfo 3.00 verbose archive report     |     13,838 | `8806577ac058804721ddf4407089ed0d1b374238ac8fab96783b0d826581dbf8` | Deterministic rendering of both timestamp representations        |
| PKWARE APPNOTE 6.3.10 text              |    174,585 | `0b993022a7d320a0bf704e6980bea36fafd17a6066ab994db0a0c16278a50cd6` | MS-DOS date/time definition and `0x5455` mapping                 |

The inspected central directory contains seven entries. Every entry has a conventional MS-DOS date/time and a five-byte `0x5455` extended timestamp field. APPNOTE section 4.4.6 states that the conventional fields use standard MS-DOS format, differ from UTC, and have two-second precision. APPNOTE section 4.6.1 maps `0x5455` to the extended timestamp field.

## Corrected date-register finding

ZipInfo 3.00, compiled with `USE_EF_UT_TIME`, was run in an `America/Los_Angeles` environment. Its output displays the conventional DOS representation and the universal-time extra-field value in local and UTC renderings. The relevant calendar dates agree across those renderings:

- member 2: March 26, 2026;
- members 1, 3, 5, 6, and 7: July 16, 2026;
- member 4: July 23, 2026.

The displayed hours are representation-dependent. For member 1, the exact tool output is DOS `18:52:44`, UT local `16:52:44`, and UT UTC `23:52:44`. Any quoted clock time must identify the tool, environment, and representation.

These fields are archive-entry metadata only. They do not establish publication, certification, creation, update, effective, filing, delivery, upload, approval, or data-as-of chronology. Filename prefixes `1` through `7` are member labels, not a proven chronological sequence.

No member payload is extracted to disk, displayed, parsed for content, searched, sampled, summarized, or reproduced for the article. Central-directory metadata is the only member-level evidence used.

## Cannibalization boundary

The exact replacement title, slug, and keyword were absent before implementation. The nearest current title-token Jaccard is `0.2500` to `Midland CAD 2026 Appraisal Services RFP: Mineral Scope and Date-Control Crosswalk`.

Article 308 owns the Ward recap's district-row item and gross-value aggregate. Article 309 owns the cross-publisher complete-byte identity of the shared layout PDF. The Karnes article owns a seven-member container inventory for a different publisher and archive. The Howard article owns a 16-member PACS container index. Article 310 does not repeat those inventories, totals, file-layout analysis, or privacy-opening methods; it owns only the Ward timestamp-representation and date-order question.

## Chesty and mrx_ceo read-only decisions

At verified commit `2d6ee762058a9ce889eaea6483f489b0595fc04b`, both profiles received supplied text and explicit source paths only. Neither profile called a tool or changed repository, Git, task, image, deployment, purchase, or external state. Codex remains sole writer and release owner.

- Chesty session `20260831_104644_6b6ad8`: `CHESTY_ARTICLE310: APPROVE_REDEFINED`
- mrx_ceo session `20260831_104739_dec3ba`: `MRX_CEO_ARTICLE310: APPROVE_REDEFINED`
- Corrected Chesty session `20260831_111708_d5dd9b`: `CHESTY_ARTICLE310_CORRECTION: APPROVE`
- Corrected mrx_ceo session `20260831_111806_7cf04d`: `MRX_CEO_ARTICLE310_CORRECTION: APPROVE`
- Every completed session used `gpt-5.6-sol` through the included `openai-codex` route and recorded estimated incremental cost `$0.00` with status `included`.

The corrected sessions supersede the earlier simplified “timezone-less” wording. Both decision makers approved the same title, slug, keyword, date grouping, dual-representation explanation, and inference limits.

Deterministic admission token for the same redefinition:

`MRX1000-0858:RANK-310:COMMIT-2d6ee762058a9ce889eaea6483f489b0595fc04b:WARD-ZIP-DATE-REGISTER:APPROVE-REDEFINED`

MRX_CEO_DECISION: APPROVE_REDEFINED

## Updated article prompt

Lead with the direct answer: the seven central-directory rows fall on three calendar dates, the file-number order is not the metadata-date order, and the archive carries both conventional DOS and `0x5455` extended timestamp representations. Name ZipInfo 3.00, `America/Los_Angeles`, and the representation whenever quoting a clock time. Use stable claim IDs, exact source identity, source-age labels, a representation register, an inference-limit table, claim-adjacent official citations, supported FAQs, semantic internal links, and visible/schema entity parity.

Never turn archive-entry metadata into publication, certification, creation, update, effective, filing, delivery, upload, approval, or data-as-of chronology. Never inspect or reproduce owner, account, address, email, property, title, acreage, production, appraisal, tax, private-value, offer, or transaction data. Do not repeat the Ward recap totals, shared-layout byte comparison, or broad county-container inventories. Do not promise ranking, indexing, retrieval, traffic, leads, revenue, or LLM citations.

Use the `MRX Editorial Team` organizational author. Preserve directional-assessment, not-certified-appraisal, no legal-tax-title-accounting-engineering-investment-advice, and disclosed-buyer language. Do not imply LocalBusiness or Google Business Profile eligibility. Search Atlas generic image generation remains disabled.

Finalize the title before image production. Use one unique exact-title hero for visible hero, Open Graph, Twitter, schema, and share. Use a materially distinct exact-keyword inline image. Fail closed on identity, factual, citation, editorial, compliance, originality, creative, metadata, schema, accessibility, build, test, rollback, receipt, deployment, live-verification, or reconciliation failure.

## Release boundary

Search Atlas audit 138239 is complete and post-processed with 2,515 approved-deployed recommendations and zero pending. No new recrawl is authorized for this handoff. Five legal/editorial receipts remain missing. Article 310 may complete local automated gates and a local commit, but it may not be pushed, deployed, counted live, or reconciled until those receipts exist and the full release gate passes.

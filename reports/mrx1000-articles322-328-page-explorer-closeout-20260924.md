# Articles 322–328: completed crawl and exact-page closeout

At the September 24 read, Search Atlas audit `138239` reported `crawl_state=completed`, `postprocessing_status=completed`, `is_terminal=true`, and `should_repoll=false`. Its crawl started `2026-09-24T04:51:23.165595Z` and completed `2026-09-24T05:04:18.126957Z`. The audit wrapper was also `completed`. The aggregate score was 970, with 495 pages, 455 successful responses, 40 redirects, 454 indexable pages, 41 non-indexable pages, and 2,454 raw observations. No additional recrawl was triggered for this verification.

Authenticated Chrome Page Explorer at `https://dashboard.searchatlas.com/site-audit/138239/page-explorer` was filtered to each exact slug. The table showed the corresponding exact H1 and, for every row below, HTTPS Yes, HTTP 200, indexable Yes, in XML sitemap Yes, and linked Yes:

| Article | Program row | Page Explorer row | Incoming internal links |
| --- | --- | ---: | ---: |
| Oklahoma Mineral Escrow and Unclaimed Property: Two Search Routes | MRX1000-1116 | 106389453 | 22 |
| North Dakota Inherited Royalty Questions: Records and Ombudsman | MRX1000-1117 | 106423850 | 16 |
| North Dakota Mineral Rights Probate Deeds: Form 11 vs. Form 12 | MRX1000-1118 | 106450997 | 19 |
| How to Check Federal Mineral Reservations in Wyoming | MRX1000-1119 | 106482377 | 16 |
| How to Compare a West Virginia Oil and Gas Tax Account With a Mineral Buyer Letter | MRX1000-1120 | 106493144 | 19 |
| How to Check a Texas Mineral Ownership Report Before Comparing a Buyer Offer | MRX1000-1121 | 106501498 | 25 |
| Does a Texas RRC Drilling Permit Prove Your Lease Covers a Well? | MRX1000-1122 | 106504088 | 37 |

The fresh OTTO dashboard separately reported 906 total issues, 16 approved/deployed, and 890 pending. These dashboard states are not the same as generated previews or the audit's 2,454 raw observations. No OTTO proposal was auto-deployed.

The historical release-10 canonical JSON/CSV remain byte-locked. `config/mrx1000-incremental-production-verification.json` now adds these seven exact-page receipts to Article 321, for 8 incremental final-recrawl-verified articles and a current final-recrawl-verified total of 328. The independently published/live MRX1000 count is also 328, leaving 22 slots under the owner's stop-at-350 instruction. These checks establish crawlability and observed inventory, not Google indexing, ChatGPT retrieval/citation, ownership, customer readiness, or revenue.

The private Article 329 manuscript is not counted and is not authorized for publication without its article-specific source, legal/compliance, editorial, image, and release gates. No unchanged content was redeployed, no IndexNow URL was resubmitted, and no support follow-up was sent.

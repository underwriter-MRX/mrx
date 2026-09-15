# MRX cross-state records pillar release — 2026-09-15

Owner objective: apply the MRX pillar architecture before creating more articles, strengthen the title/lease/ownership pillar around a verified question people ask answer engines, publish the result, run OTTO, and feed the verified result back into the AI Atom Brain. No new or incremental monetary charge was incurred.

## Decision and scope

The selected question is **“How do mineral rights laws and records differ by state?”** Search Atlas showed it as an unanswered visibility opportunity, while corpus review showed that several other tracked questions were already owned by live MRX pages. The canonical owner for this broad question is the existing title/lease/ownership pillar, not a near-duplicate article.

The implementation adds an answer-first cross-state guide that separates six source classes: deeds and recorded leases, probate, regulator/well records, tax/appraisal records, payment records, and federal records. Each row states what the source may show and what it cannot establish. Texas, New Mexico, Oklahoma, and Pennsylvania routes connect to the relevant state guides and official regulator sources. The page expressly avoids treating any one record as proof of current ownership, title, value, or legal sufficiency.

Implementation commit `86e355ed467efa2e195a1341f76ee78221572885` is pushed on `release/mrx-measurement-ai-technical-20260909`. It changes the pillar template, the title/lease/ownership page, its regression test, the rendered-authorship path resolver, and deterministic MRX1000 manifest sidecars. It does not change an article title, image, body, publication state, or MRX1000 ledger count.

## Pre-release gates

- Focused pillar E2E: 1/1 passed.
- Unit suite: 82 files and 699 tests passed.
- Lint passed.
- Astro check passed with zero errors and zero warnings.
- Compliance checks passed.
- Normal production build passed: 491 pages, zero sitemap orphans, 328 article-author parity checks, and grammar checks.
- Local desktop and mobile visual checks passed, including the intentionally scrollable table region on a 390-pixel viewport.
- Existing unrelated changes were preserved; the release worktree was clean before documentation reconciliation.

## Production release and live proof

Vercel production deployment `dpl_6VZF9CzjryJz7FVU42pWaSiYY2zT` is Ready at `https://mrx-bsccvjtf5-team-mrx.vercel.app`. The release is assigned to all confirmed public production aliases:

- `https://mineralrightsxchange.com`
- `https://www.mineralrightsxchange.com`
- `https://mrx-web.vercel.app`

The prior rollback deployment is `dpl_Dmb9Yb2NikwQkSUTDdnmexpk8Dng`.

Fresh live checks on `/learning-center/title-lease-ownership/` passed across all three aliases. Apex and native Vercel return HTTP 200; `www` redirects to apex and resolves to HTTP 200. The page preserves the exact title `Mineral Title, Leases, and Ownership · MRX`, canonical apex URL, one H1, the new exact guide heading, six source rows, four state-guide links, the evidence boundary, and the FAQ/schema question. Security and cache assertions passed.

Post-recrawl rendered Chromium verification passed the focused pillar test. The final schema reconciliation at `2026-09-15T11:24:30.104Z` passed all three aliases with exactly one authoritative `https://mineralrightsxchange.com/#org`, zero Search Atlas runtime injector markers, and zero overlay `ImageObject` nodes. Fresh desktop and mobile renders have no document overflow; the table region remains keyboard focusable and horizontally bounded on mobile.

## Crawler notification reconciliation

The production crawler manifest contains **444** public canonical pages at revision `1a8d7ea697c3e3dc5f735b9995255b2adb0cb0f9115a4c248e6aad657077ad36`. The release changed shared generated artifact references, so all 444 pages were verified serially against production before notification. IndexNow returned HTTP 200 and accepted all 444 URLs in one batch; there were zero errors and zero remaining URLs. A subsequent dry run returned `changed_count=0`.

Thirteen retired author-archive URLs remain in the explicit removal-review inventory. They are not silently treated as submitted or restored. The notification receipt proves provider acceptance, not indexing, ranking, answer-engine retrieval, model training, or a commercial outcome.

## Search Atlas OTTO post-release result

One recrawl was triggered after deployment. Audit `138239` started at `2026-09-15T11:17:18.138027Z`, completed at `2026-09-15T11:23:20.246702Z`, and finished post-processing. The authoritative state is `completed`, terminal, and not requesting another poll.

The separate raw technical audit reports score **965**, **485** crawled URLs, **461** successful responses, **24** redirects, **0** missing, **0** blocked, and **0** server-error pages. It classifies **444** pages indexable and **41** non-indexable, with **2,634** raw heuristic observations. Those observations include optional or context-dependent heuristics and are not approved OTTO recommendations.

The authenticated OTTO project is engaged, installed through its completed Cloudflare Worker, GSC-linked, no longer crawling, and configured for Daily crawling at 20 pages per second. Project inventory is 463 pages. The OTTO dashboard reports **671 total / 16 approved-deployed / 655 pending**. The 16 approved records are topical-map/content-strategy records, not newly applied runtime page changes.

The deployment preview provides the necessary reconciliation detail:

- **16 generated recommendations:** one sitewide Organization proposal and 15 Dynamic Indexing proposals.
- **898 rows without a generated recommendation:** 117 page titles, 142 meta descriptions, 115 meta keywords, 31 H1 length rows, 90 H2 length rows, 150 FAQ fixes, 112 Open Graph titles, 112 Twitter titles, and 29 page-level schema rows.
- **0 deployed runtime items** in every previewed deployable category.

No proposal was deployed. The Organization proposal would duplicate the verified native `#org` entity and remains the provider-locked undeployed exception. The Dynamic Indexing proposals would add hidden footer links and remain exact source-conflict exceptions. Generating or deploying speculative copy/schema simply to move the dashboard counter would violate the source-first release gate. OTTO pending counts and the raw audit's 2,634 observations remain separately reported.

## AI Atom Brain learning disposition

The broad cross-state records question is now owned by the pillar. A new article with the same job-to-be-done would cannibalize the canonical answer and is rejected. Future content may support the pillar only when it owns a narrower, evidence-backed owner task, has a unique title/slug/primary phrase, passes full-corpus collision review, and points back to this canonical answer.

The measurable outcome remains relevant ready cases, completed human reviews, and agreed next steps under consistent eligibility and maturity rules. Technical release, audit score, crawler notification, and publication volume are readiness evidence only. Search ranking, answer-engine citations, qualified demand, revenue, and ROI remain unproven until measured in their respective systems.

## Completion state

The pillar update is committed, pushed, deployed, live-verified, crawler-notified, recrawled, post-processed, and reconciled into the AI Atom Brain. OTTO is installed and healthy. No unsafe recommendation was accepted, no article was added, and the canonical MRX1000 published-and-live-verified count remains **320**. The owner's latest instruction sets 320 as the current stop point; Article 321 and later creation/publication remain paused until a future owner direction changes that scope.

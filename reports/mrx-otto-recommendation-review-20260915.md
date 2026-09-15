# MRX OTTO recommendation review — 2026-09-15

Scope: Search Atlas project `e4bab8bb-717e-480c-8dea-1de1b8596eb7`, linked audit `138239`. This is a source-first review under the MRX website SEO/AEO release gate. No new article identity, title-bearing image, native schema, Brand Vault fact, crawler policy, Cloudflare route, or paid capacity is authorized by this review.

## Fresh state

- OTTO is engaged through the installed Cloudflare Worker. The authenticated installation diagnostic reports 6 passed, 0 failed, 0 warnings, and 0 unknown.
- Smart Crawl and Autopilot are disabled. No new recrawl was requested during this review.
- The active manual reprocess started `2026-09-15T04:36:20.296365Z` and currently reports `status=processing`, `crawl_state=crawling`, and `is_terminal=false`, even though the same response contains `audit_completed_at=2026-09-15T05:14:11.020679Z`. That inconsistent completion field is not treated as a terminal result. The interim raw metrics are score 964, 373 crawled pages, 349 successful responses, 24 redirects, zero missing/blocked/server-error pages, and 1,867 raw heuristic observations. Raw observations are not OTTO pending recommendations and are not represented as approved source changes.
- The post-review OTTO dashboard reports 17 found issues and 16 stored approved items. The 16 approved items are content-strategy topical-map records, not current runtime title, metadata, image, NLP, Twitter, or schema deployments.
- The deployment preview reports 1,790 generated recommendations and 35 records without generated recommendations, with zero deployed in every runtime category.
- Domain Organization `182837670` remains SUGGESTED, valid, undeployed, and unassigned to a page. The authoritative source entity remains `https://mineralrightsxchange.com/#org`; deployment is rejected.

## Export and review result

The authenticated OTTO export was captured before mutation at:

`https://docs.google.com/spreadsheets/d/1DuaoiCtsg9VwaboJNhQAq_3zvEprd-TzgLShWvlm4mE`

The workbook contains 226 page-title rows, 289 meta-description rows, 223 meta-keyword rows, 69 H1 rows, 173 H2 rows, one canonical row, 224 Twitter-description rows, 225 Twitter-site rows, 332 discovered image paths, and four semantic-analysis term sets. API review independently reports 19 generated image-alt recommendations.

Every generated runtime recommendation is rejected as a deployment candidate:

- Page titles, descriptions, H1s, and H2s rewrite approved canonical article/page identity, replace reviewed answer-first labels with generic wording, or are no-op duplicates.
- Meta-keyword recommendations add an obsolete, stuffing-prone field that is deliberately absent from source.
- The canonical recommendation only removes the homepage trailing slash, conflicting with the site's tested canonical normalizer.
- Twitter-description recommendations replace reviewed source copy; Twitter-site recommendations use an account URL instead of the tested handle `@mineralrightsxchange` and include a duplicate row.
- Semantic term sets contain off-topic geography, navigation text, unsupported professions/claims, and high-volume keyword lists unsuitable for blind insertion.
- The 19 image-alt recommendations target decorative icons, duplicate avatars/logos, or propose verbose unsupported valuation/expertise claims. They do not improve accessibility truthfully.
- Suggested page schema is not deployed. OTTO-detected `ImageObject` nodes are evidence of the active Worker overlay, not native records to approve. Native source schema must remain authoritative.

The safe OTTO action is therefore to ignore/delete the generated recommendation backlog, retain the pre-action export as regeneration evidence, and continue to report the 35 without-recommendation records separately. This deletion does not assert that the underlying raw audit heuristics are fixed; it records that the generated fixes were reviewed and rejected. The unsupported domain Organization remains a separately tested vendor-locked exception: 0 actionable pending plus 1 undeployable provider record, never a false claim of dashboard zero.

## Provider defect evidence

A 67-second Jam recording was completed through Search Atlas's own support-request flow and submitted successfully. It shows the healthy installed/engaged project, Smart Crawl disabled, all runtime categories at zero deployed, schema `182837670` undeployed, and the absence of a customer-accessible Image Schema/schema-output toggle. The recording context asks Search Atlas to disable account-specific OTTO ImageObject output while keeping OTTO engaged and both Worker routes active. Search Atlas confirmed in-chat that the recording was in progress; the recorder then returned `Recording sent` and `You're all done`.

The production gate remained fail-closed until fresh verification showed 348/348 exact source parity, zero overlay `ImageObject` nodes, the exact tested `@mineralrightsxchange` social field, and exactly one native `#org` Organization on every active public alias. Clearing the generated backlog alone was not treated as sufficient.

## Provider-origin proof and readiness

An exact read of Search Atlas's runtime endpoint for the homepage returned `header_html_insertion` with seven `ImageObject` nodes even though `image_missing_alt` was empty and every runtime image/schema deployment category was zero. The affected endpoint is:

`https://sa.searchatlas.com/api/v2/otto-url-details/?url=https%3A%2F%2Fmineralrightsxchange.com%2F&uuid=e4bab8bb-717e-480c-8dea-1de1b8596eb7`

This identifies the Search Atlas backend payload as the active source of the unwanted markup. Cloudflare's managed `otto-pixel-worker` fetches that endpoint and applies the returned HTML. The evidence was sent to the human support thread after the completed recording, with a request for the documented account-specific image-schema disablement. No duplicate Organization deployment, route removal, or broad Cloudflare purge was attempted.

Post-review project readback is **17 total / 16 approved / 1 pending**, with Smart Crawl and Autopilot off. The manual reprocess is active and non-terminal; no second recrawl was requested. Local verification passes **80/80 test files, 663/663 tests**, and the full production-equivalent Vercel build, including 230/230 admitted evidence packets, 238 two-image article renders, 476 image binaries, 379 SEO pages, zero sitemap orphans, compliance, copy, authorship, and grammar.

## Production containment and exact-parity verification

When the backend payload persisted without a provider response, the existing OTTO Worker received a reversible response-boundary safeguard. It parses only Search Atlas-injected `application/ld+json` blocks and removes a block only when its complete parsed payload is a non-empty single node or array composed exclusively of `ImageObject` nodes. It preserves non-image schema, mixed graphs, invalid/unparseable JSON, metadata, body substitutions, native origin HTML, and all other OTTO behavior. The provider endpoint continues to expose the reproducible upstream defect; the support and Productboard requests remain open for source correction.

Cloudflare Worker version `5dd4d805` is active on both existing routes; version `8ce062e0` is retained as the rollback point. Focused live verification at `2026-09-15T06:12:00.305Z` passes apex, `www` redirect, and native Vercel with HTTP 200, one authoritative native Organization, zero injector markers, and zero overlay ImageObjects. Throttled full inventories then pass apex **348/348 identical, zero errors/differences** at `2026-09-15T06:16:05.851Z` and native Vercel **348/348 identical, zero errors/differences** at `2026-09-15T06:16:23.102Z`. The safeguard therefore restores source-exact production behavior without representing the non-terminal Search Atlas recrawl as complete.

Human specialist Firman reviewed the submitted recording and accepted the two backend conditions as requiring engineering time. Engineering was unavailable on the night shift; Search Atlas will return updates in the same authenticated chat and does not issue a separate reference number. The continuing automation is the persistence mechanism for that provider wait.

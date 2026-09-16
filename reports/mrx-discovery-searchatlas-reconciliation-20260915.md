# MRX Discovery and Search Atlas reconciliation — 2026-09-15

- Search Atlas project: `99913` / `e4bab8bb-717e-480c-8dea-1de1b8596eb7`
- Search Atlas audit: `138239`
- Source branch: `release/mrx-measurement-ai-technical-20260909`
- Pre-release production deployment: `dpl_EFLH7cjrpTT3QanLKe7uAw5Dk14J`
- Release commits: `95bff4bb`, `3a4aa204`, and `a8afd7e8`
- Production deployment: `dpl_CekBDLYcKyeEY1oLqAghUB2U2ukN` / `https://mrx-2yhm2j8nu-team-mrx.vercel.app`
- Rollback deployment: `dpl_EFLH7cjrpTT3QanLKe7uAw5Dk14J`

## Objective

Complete the valid source-controlled work behind the remaining MRX Discovery and Search Atlas reconciliation inventory without using Search Atlas AI-generation credits, without publishing new articles, and without deploying generated recommendations that conflict with reviewed content identity or native schema. Publish the verified implementation, notify approved crawler channels, run exactly one fresh Search Atlas recrawl, and reconcile the post-processed result.

## Authoritative pre-release baseline

- OTTO dashboard: **472 total / 16 approved-deployed / 456 pending**.
- Recommendation-bearing preview: **16 records** — one vendor-locked domain Organization suggestion and 15 Dynamic Indexing suggestions.
- Candidate-only preview rows without a generated recommendation: title 117, description 142, meta keywords 115, H1 20, H2 81, OG title 112, and Twitter title 112.
- Raw audit `138239`: score **978**, **485** crawled URLs, **460** successful responses, **24** redirects, zero missing/blocked/server-error responses, **443** indexable URLs, **42** non-indexable URLs, and **2,020** raw observations.
- Material repeatable raw findings targeted by this release: 14 large-DOM pages, 14 pages with more than 500 outgoing links, five orphan-page observations, and obsolete AI-guide author archive discovery.
- Search Atlas AI Generation quota: **2,189 of 2,500 used / 311 remaining**. This release does not invoke Search Atlas generation.

The dashboard, deployment preview, page-schema inventory, raw technical audit, and live-source evidence are separate systems. Aggregate counters are not treated as a safe change list.

## Source implementation

### Learning Center discovery and DOM reduction

- Learning Center archives now render only the current 24-item page instead of embedding all 328 article cards in every paginated document.
- Full-library search remains available through the prerendered `/learning-center/search-index.json` endpoint. Client filtering fetches the index only when a visitor uses search, topic, or author controls.
- Search-result cards are created with safe DOM APIs and `textContent`; pagination is restored when filters are reset.
- Page one exposes the existing owner-situation discovery routes as visible internal navigation.

The generated artifact changed the 14 Learning Center archive pages from roughly 855 KB, 5,200 elements, 1,700 links, and 334 images per page to:

| Pages | HTML bytes | Elements | Links | Article cards | Images |
| --- | ---: | ---: | ---: | ---: | ---: |
| 1 | 170,167 | 692 | 192 | 24 | 30 |
| 2–13 | 163,329–167,902 | 640–644 | 181–183 | 24 | 30 |
| 14 | 146,170 | 518 | 139 | 16 | 22 |

The search index contains all **328** published article records.

### Entity and internal-link reconciliation

- Every public state guide now includes visible links to the other state guides, creating an intentional peer discovery path.
- Every fictional MRX AI-guide profile now includes visible reciprocal links to the other guide profiles.
- Obsolete AI-guide author archive URLs now redirect directly to the corresponding public `/team/` profile. Legacy aliases and stale paginated Marisol/Ariana archive URLs resolve to the correct public entity without redirect chains.
- `/authors/mrx-editorial-team/` remains the organizational author archive and is not redirected.
- No reviewed article title, article H1, canonical hero/share identity, in-body image, factual claim, citation, indexing policy, or native schema identity was changed.

### Production account configuration guard

- A pre-release coordination check found that the production Vercel project had the public Supabase variables configured, but the existing prebuilt account route had compiled `undefined` public props.
- `/account/`, `/owner-intake/`, and `/staff/` now resolve the public Supabase URL and anonymous key from the request-time server environment through the existing `getSupabasePublicConfig()` boundary.
- The three pages remain server-rendered and never receive the service-role key. A regression contract forbids direct build-time `import.meta.env.PUBLIC_SUPABASE_*` use and any service-role reference in those page files.

## Pre-release verification

- `astro check`: zero errors; 31 existing non-blocking hints.
- Full unit suite: **87 files / 740 tests passed**.
- Integrated Chromium end-to-end coverage: all **19** chat/account cases passed locally; five release-critical cases passed again on the live apex.
- `pnpm build:vercel`: passed every release gate, including **320/320 MRX1000 evidence packets**, **328 articles / 656 article-image binaries**, **491 rendered HTML pages**, canonical/meta/JSON-LD/accessibility/unique-title/unique-description/unique-H1 checks, organizational authorship on all 328 articles, and zero sitemap orphans.
- Generated Vercel routing confirms obsolete AI-guide author roots and pagination redirect directly to the intended team profile while the MRX Editorial Team archive remains routable.

## Production release and live verification

- Vercel deployment `dpl_CekBDLYcKyeEY1oLqAghUB2U2ukN` reached `READY`. Vercel inspection binds apex, `www`, and `mrx-web.vercel.app` to that exact deployment; `dpl_EFLH7cjrpTT3QanLKe7uAw5Dk14J` remains the rollback deployment.
- Apex, `www`, and native production returned HTTP 200. The new `AskTravis.D1kVPpTn.js` bundle is byte-identical across the three aliases.
- Live Learning Center page one contains 24 server-rendered cards. The on-demand search endpoint returns all 328 records. Live reciprocal discovery exposes all ten state guides, all eleven fictional guide profiles, and all eight owner-situation routes.
- All thirteen retired AI-guide author URLs return one direct permanent redirect to the intended live `/team/` profile; no redirect chain or missing target remains.
- Live schema reconciliation passed all three public aliases with exactly one authoritative native `https://mineralrightsxchange.com/#org` entity, no Search Atlas runtime injector, and no overlay `ImageObject` output.
- Article 320 retained the exact canonical title, H1, OG/Twitter title, Article-schema headline, and canonical hero. The live hero SHA-256 is `938ab1da59ae6eada147a63d483801c4f7445f628fe92259c87d28884e079c86`; the distinct in-body asset SHA-256 is `d54c7fcd85f207ba61653203af5a98e5f5425f54b4e50b084d7b1d4ae5afbb8e`.
- Independent visual verification confirmed that `/account/` hydrates to the full form and that the live rapport-first chat shows the first-name opening without an early account prompt. No contact form, account, booking, or message was submitted during independent verification.
- The MRX crawler notifier verified and submitted all **444** public manifest URLs to IndexNow. Every receipt returned HTTP 200; one cache-convergence hold passed on retry. The final preview is **0 changed / 0 queued / 0 errors**. Thirteen removed author URLs remain separately accounted for by the verified redirects. These receipts do not prove indexing or model updates.

## Search Atlas recrawl and final reconciliation

Exactly one post-release OTTO recrawl was requested. Audit `138239` started at `2026-09-15T23:58:44.729323Z` and completed and post-processed at `2026-09-16T00:11:05.562454Z`: `status=completed`, `crawl_state=completed`, `postprocessing_status=completed`, `is_terminal=true`, and `should_repoll=false`.

| Raw audit metric | Before | After | Change |
| --- | ---: | ---: | ---: |
| Technical score | 978 | 979 | +1 |
| Total observations | 2,020 | 1,959 | -61 |
| Large DOM | 14 | 0 | -14 |
| More than 500 outgoing links | 14 | 0 | -14 |
| Orphan observations | 5 | 0 | -5 |
| H1 length observations | 148 | 135 | -13 |
| H2 length observations | 359 | 351 | -8 |
| JavaScript over 300 KB | 35 | 31 | -4 |
| Robots noindex / nofollow observations | 30 / 30 | 1 / 1 | -29 / -29 |
| Successful responses | 460 | 440 | -20 |
| Intentional redirects | 24 | 40 | +16 |
| Missing / blocked / server-error URLs | 0 | 0 | 0 |

The success/redirect shift is expected: legacy AI-guide archives now resolve through explicit one-hop redirects instead of remaining crawlable duplicate archives. The final audit has 439 indexable and 46 non-indexable URLs; redirects and deliberate noindex remain valid non-indexable classes, not errors.

The separate OTTO dashboard remains **472 total / 16 approved / 456 pending** because the recrawl did not erase stored opportunity rows. Deployment preview proves the current composition:

- **16 generated but rejected/unsupported records:** 15 Dynamic Indexing hidden-link proposals for already-discoverable or deliberately noindex routes, plus vendor-locked undeployed Organization `182837670`, which would duplicate native `#org`.
- **699 ungenerated candidate shells:** title 117, description 142, meta keywords 115, H1 20, H2 81, OG title 112, and Twitter title 112. They contain no recommendation to deploy and were not generated.
- Page-schema inventory detects native schemas on 461 pages and reports zero pending page schemas. The one domain suggestion remains valid, suggested, and undeployed.
- Search Atlas AI Generation remains **2,189 of 2,500 used / 311 remaining**. The release and recrawl consumed zero AI-generation credits.

The remaining raw observations are disclosed hygiene/advisory categories, not a safe bulk change list: optional meta-keywords recommendations, arbitrary heading/social-title length thresholds, exact approved article/social identity, native-schema false positives, optimized WebP size advice, and a smaller set of link heuristics. No hidden links, duplicate schema, keyword tags, title truncation, or speculative generated copy was deployed merely to reduce those counters.

Post-crawl verification at `2026-09-16T00:15:08.715Z` again passed apex, the `www` redirect, and native production: HTTP 200, one authoritative native Organization, zero Search Atlas runtime injector markers, zero overlay `ImageObject` nodes, and exact Article 320 hero/inline hashes. Vercel still reports the three aliases on Ready deployment `dpl_CekBDLYcKyeEY1oLqAghUB2U2ukN`.

Final release accounting is **zero actionable generated recommendations**, **15 reviewed undeployed source-conflict proposals**, and **one vendor-locked undeployed Organization suggestion**. Search indexing, crawler visits, and answer-engine citations remain separate outcome measurements and are not claimed by the successful deployment, IndexNow receipts, or audit completion.

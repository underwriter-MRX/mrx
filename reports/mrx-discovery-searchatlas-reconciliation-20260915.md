# MRX Discovery and Search Atlas reconciliation — 2026-09-15

- Search Atlas project: `99913` / `e4bab8bb-717e-480c-8dea-1de1b8596eb7`
- Search Atlas audit: `138239`
- Source branch: `release/mrx-measurement-ai-technical-20260909`
- Pre-release production deployment: `dpl_EFLH7cjrpTT3QanLKe7uAw5Dk14J`
- Release commit: pending
- Production deployment: pending
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
- Full unit suite: **86 files / 726 tests passed**.
- Relevant Chromium end-to-end coverage: all **16** cases passed after deterministic locator updates.
- `pnpm build:vercel`: passed every release gate, including **320/320 MRX1000 evidence packets**, **328 articles / 656 article-image binaries**, **491 rendered HTML pages**, canonical/meta/JSON-LD/accessibility/unique-title/unique-description/unique-H1 checks, organizational authorship on all 328 articles, and zero sitemap orphans.
- Generated Vercel routing confirms obsolete AI-guide author roots and pagination redirect directly to the intended team profile while the MRX Editorial Team archive remains routable.

## Production release and live verification

Pending.

## Search Atlas recrawl and final reconciliation

Pending.

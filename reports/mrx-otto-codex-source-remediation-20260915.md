# MRX OTTO Codex source remediation and recrawl — 2026-09-15

Search Atlas project: `99913` / `e4bab8bb-717e-480c-8dea-1de1b8596eb7`  
Search Atlas audit: `138239`  
Source release commit: `d4b73c53`  
Production deployment: `dpl_EFLH7cjrpTT3QanLKe7uAw5Dk14J` / `https://mrx-ga0e5x5pj-team-mrx.vercel.app`  
Rollback deployment: `dpl_4a1v1xyehSzapdYueFpfLhm2Gx7s` / `https://mrx-gc0tmy646-team-mrx.vercel.app`

## Outcome

Codex implemented the source-safe portion of the outstanding OTTO inventory without using Search Atlas AI-generation credits. The production release changed shared article answer/takeaway/source headings, team and category archive headings, public `llms-full.txt` discovery, and repeated Travis image alternatives. It did not change any article title, article H1, hero/share asset, in-body article asset, factual claim, citation, native schema identity, indexing policy, or approved social title.

The completed post-release crawl improved the raw technical-audit score from **965 to 978** and reduced raw observations from **2,627 to 2,020** (**607 fewer**). Search Atlas AI Generation remained exactly **2,189 of 2,500 used / 311 remaining**, proving that this work consumed zero credits from that bucket.

## Source implementation

- Shared article labels now render as `Direct answer for mineral owners`, `Key takeaways for mineral owners`, and `Sources reviewed for this article`.
- AI-guide profile H1/H2 labels now include the guide role and conversation context.
- Category archive H1 labels now identify the mineral-rights article collection and pagination.
- `llms-full.txt` no longer advertises deliberately noindex AI-guide author archives or `/communication-preferences/`; MRX Editorial Team remains the organizational author.
- Repeated Travis UI images now have truthful descriptive alternatives. Decorative imagery retains valid empty alternatives rather than receiving keyword-stuffed text.
- Regression tests cover the source-controlled OTTO remediation and discovery exclusions.

## Verification and production release

- Targeted remediation/LLM tests: **17 passed**.
- Full unit suite: **85 files / 724 tests passed**.
- `pnpm build:vercel`: passed every release gate, including **320/320 MRX1000 evidence packets**, **328 articles / 656 article-image binaries**, Astro check with zero errors, **491 rendered HTML pages**, and zero sitemap orphans.
- Local rendered scan: zero missing `alt` attributes, zero exact duplicate indexable title/description/H1 groups, and 21 deliberate empty alternatives instead of 2,308 repeated empty alternatives.
- All four active aliases resolve to the new Ready deployment: apex, `www`, `mrx-web.vercel.app`, and protected `mrx-web-team-mrx.vercel.app`. Existing protection/noindex behavior on the team alias was preserved.
- Apex, `www`, and native production passed request-specific HTTP checks for the shared headings, team/category headings, `llms-full.txt` exclusions, and Article 320 canonical identity.
- Article 320 retained the exact title **Mineral Rights Offer vs. Letter of Intent vs. Purchase Agreement**, the same canonical hero for visible hero/OG/Twitter/schema, the distinct in-body image, and exact source SHA-256 values for both image binaries.
- Chromium rendered the article with the exact H1, zero missing `alt` attributes, and the in-body image at its true 1200×675 dimensions. Visual inspection confirmed the distinct overhead document-board composition and readable keyword text.
- Fresh live schema reconciliation passed apex, `www`, and native production with exactly one authoritative `https://mineralrightsxchange.com/#org` Organization, zero runtime injector markers, and zero overlay `ImageObject` nodes.
- Search Atlas and Googlebot user-agent probes returned HTTP 200 through Cloudflare. A high-concurrency exhaustive verifier briefly reached the site's intended 429 threshold; normal-rate requests recovered immediately. The final Search Atlas crawl recorded zero blocked, missing, or server-error pages.

## Completed Search Atlas recrawl

Exactly one post-release recrawl was requested. Audit `138239` started at `2026-09-15T19:33:21.844793Z` and completed at `2026-09-15T20:06:06.661834Z`. The authoritative result is terminal and post-processed: `status=completed`, `crawl_state=completed`, `postprocessing_status=completed`, `is_terminal=true`, and `should_repoll=false`.

| Raw audit metric | Before | After | Change |
| --- | ---: | ---: | ---: |
| Technical score | 965 | 978 | +13 |
| Total observations | 2,627 | 2,020 | -607 |
| Images missing alt | 480 | 2 | -478 |
| H1 length observations | 178 | 148 | -30 |
| H2 length observations | 377 | 359 | -18 |
| JavaScript over 300 KB | 90 | 35 | -55 |
| Images over 100 KB | 128 | 118 | -10 |
| Successful responses | 456 | 460 | +4 |
| Redirects | 24 | 24 | 0 |
| Indexable URLs | 439 | 443 | +4 |
| Non-indexable URLs | 46 | 42 | -4 |
| Missing / blocked / server-error URLs | 0 | 0 | 0 |

The two remaining raw missing-alt observations correspond to pages containing deliberately decorative images with valid `alt=""`; production has no image missing the `alt` attribute. Raw audit heuristics remain separate from OTTO recommendations.

## Post-recrawl OTTO reconciliation

The recrawl did not retire OTTO's stored ungenerated-candidate rows. Its heading detail still reports stale pre-release values such as `Direct answer`, `Meet Clay`, and `How Clay speaks`, even though exact production readback serves the corrected values. Those rows are therefore stored OTTO state, not current-page evidence.

Codex used the non-generation reconciliation path:

- Deleted five stale `nlp_faq` page sets, removing **150** unsupported/off-topic FAQ candidate fixes.
- Deleted **29** redundant OTTO-suggested page schemas. OTTO's separate live inventory still detects native FOUND schemas on 461 pages and now reports zero pending page schemas; no native schema was deleted or undeployed.
- Attempted dismissal of the remaining ungenerated title, description, meta-keyword, H1, H2, OG-title, and Twitter-title candidate types. OTTO correctly returned zero deletable suggestions because those rows have no generated recommendation object.

The dashboard consequently moved from **671 total / 16 approved / 655 pending** to **492 total / 16 approved / 476 pending**. The final 476 dashboard rows are:

- 121 heading-length rows: source-fixed stale shared/team/category values plus approved exact article titles, noindex archives, and exact article-card titles.
- 115 meta-keyword rows: rejected because the obsolete tag is deliberately absent and forbidden by the source release gate.
- 112 OG-title and 112 Twitter-title rows: approved article identity is preserved rather than truncated to a generic character heuristic.
- 15 Dynamic Indexing rows: rejected hidden-link proposals; 14 routes are already in the public sitemap and one author archive is deliberately noindex.
- One vendor-locked, undeployed domain Organization suggestion `182837670`: rejected because MRX already serves one authoritative native `#org` entity and Search Atlas does not provide a working dismissal control.

The separate deployment preview reports **719 candidates without recommendations**: page title 117, meta description 142, meta keywords 115, H1 31, H2 90, OG title 112, and Twitter title 112. They cannot deploy, and OTTO will not delete them because no recommendation exists. The preview's only **16 recommendation-bearing** records are the rejected 15 Dynamic Indexing rows and the vendor-locked Organization. Accurate release accounting is therefore **zero actionable generated recommendations**, not a false claim that the Search Atlas dashboard number is zero.

No Search Atlas recommendation, hidden link, duplicate schema, or social-title rewrite was deployed. No generation, purchase, upgrade, top-up, or incremental monetary charge occurred.


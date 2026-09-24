# Wave 253 production verification — 2026-09-23

## Release identity

- Source branch: `release/mrx-measurement-ai-technical-20260909`; combined source through `6c82382b` (Article 325 plus separately reviewed public MCP setup and privacy disclosure).
- Ready deployment: `dpl_6azD5X7eSfiZCMYxjPSXfX9WKWSZ`, `https://mrx-c2omms4b2-team-mrx.vercel.app`.
- Vercel alias inventory after deployment points `mineralrightsxchange.com`, `www.mineralrightsxchange.com`, and `mrx-web.vercel.app` to this deployment. Previous active deployment `dpl_9fonekhTtMaucu1mntMbPBa2JRFu` is the immediate rollback.
- Final combined source tests: 94 files / 801 tests passed. Local and Vercel builds passed 321/321 historical packets; 329 historical plus four append-only public articles; 666 article-image binaries; 497 rendered SEO pages with zero sitemap orphans; 333 organizational-author pages; rendered grammar pass. Vercel legal-release gates reported five approved checks.

## Article 325 exact assertions

- Canonical: `https://mineralrightsxchange.com/blog/how-to-check-federal-mineral-reservations-in-wyoming/`.
- Apex and www requests returned HTTP 200, one H1 with the exact title, the exact apex canonical, no `noindex`, and a visible link to `/learning-center/title-lease-ownership/`. The www request resolved to the apex URL.
- The live title/lease/ownership pillar rendered a linked Article 325 card; Chrome navigation from the article breadcrumb to the pillar confirmed the reciprocal route.
- `og:image` and `twitter:image` both used the canonical hero. Live hero WebP was HTTP 200, `image/webp`, 147,300 bytes, SHA-256 `cb89a2b9b056c24618adbb63553d7d0ee81d09d7b2c64f2cae4f2e1f314f1b7c`; in-body WebP was HTTP 200, `image/webp`, 109,220 bytes, SHA-256 `667c3cc4a6242a5e1a540d3b3e797d7880455c437c2f099e97a802bd8ebbdabd`.
- Chrome accessibility and screenshot showed the exact-title hero, answer-first body, separate in-body image, official BLM citations, and the ownership-records pillar link. Source limits distinguish federal-record research from a private title or sale conclusion.
- The deployment-specific Vercel URL redirects anonymous requests to Vercel login. Authenticated `vercel curl` returned HTTP 200 for the exact article path with intentional `X-Robots-Tag: noindex`. Do not represent anonymous login HTML as the article.
- The public AI-assistant setup page and linked privacy disclosure were independently verified in the same release by the separate MCP task; that task found no source regression in its 36 host/path/user-agent HTTP checks or Chrome desktop/mobile review.

## Site verification and observed limits

- Sitemap inventory listed 450 canonical public URLs. A representative production pass fetched 29 deterministic/required URLs, including Article 325, with zero failures; apex/www homepage, legacy redirects, appointment availability, and private-intake noindex checks passed.
- An earlier exhaustive eight-worker verifier was rate-limited with transient HTTP 429s on late sitemap entries. Exact Article 325 and a previously affected Wyoming state page returned HTTP 200 immediately afterward. The verifier now defaults to a two-worker representative mode; exhaustive mode remains explicit. The 429 observations are verifier-induced rate-limit evidence, not a claim of zero WAF risk for real crawlers.
- `robots.txt` explicitly allows OAI-SearchBot on public paths. A spoofed user-agent HTTP 200 is eligibility evidence only, not proof of a real OpenAI-IP crawl, ChatGPT Search placement, or citation. The public MCP setup page does not claim ChatGPT directory approval.
- Chrome showed an unexpected “Allow remote debugging?” permission prompt during pillar navigation. It was canceled; no debugging access was granted. Navigation and page verification proceeded normally.

## Post-release audit state

- Before this release, Search Atlas audit 138239 was terminal completed/postprocessed (2026-09-23T19:11:54.784688Z to 2026-09-23T20:53:07.039255Z), score 970, 449 successful, 40 redirects, 448 indexable, 41 non-indexable, and 2,429 raw observations. Those are **pre-wave-253** figures.
- Exactly one post-release recrawl was triggered: response `status=queued`, `already_in_progress=false`, no task ID. It finished in place with `crawl_state=completed`, `postprocessing_status=completed`, `is_terminal=true`, `should_repoll=false`, started `2026-09-23T23:11:03.231261Z`, completed `2026-09-23T23:23:40.242230Z`. The aggregate score was 970, with 426 successful pages, 40 redirects, 425 indexable pages, 66 non-indexable pages, and 2,407 raw observations. These aggregate numbers do not prove that Article 325—or Articles 322–324—appears in Page Explorer.
- The MRX public-content tool returned the exact Article 325 canonical; citation-readiness checked its indexable canonical, one H1/main, native Article schema, organizational author/date, three BLM source links, and public crawler policy without a schema parse error. These checks are mechanical and do not prove a real AI citation.
- A single **Article 325-only** IndexNow notification ran after the live release. The bounded worker selected and verified one canonical URL, received HTTP 200 for one URL, and finished with zero errors. A follow-up dry run no longer listed Article 325. The global manifest preview still showed 449 other changed URLs because this submission was intentionally exact-URL scoped; they were not sent by this run. HTTP 200 is a delivery receipt, not indexing or ChatGPT inclusion.
- Fresh post-recrawl OTTO dashboard remains 906 total / 16 approved-deployed / 890 pending (SEO score 81). Dynamic Indexing is 20 pending; Missing Keywords is 26 pending. These are dashboard states, not the 2,407 raw audit observations or a count of reviewed generated recommendations. The prior 26 missing-keyword recommendations were separately source-reviewed and held undeployed; the five newly identified Dynamic Indexing rows still lack exact-URL review.
- A read-only exact-path OTTO issue lookup found Article 325 as URL ID `346654131` in both the page-title and meta-description inventories. An ID-bound read returned its current SEO title (`How to Check Federal Mineral Reservations in Wyoming · MRX`) and the prefix of its source description, with empty generated recommendations and `is_deployed=false`. This proves OTTO URL/metadata ingestion, **not** Search Atlas Page Explorer's HTTP/indexable/sitemap/linked crawl flags.
- Exact Page Explorer closeout is still open. The extension-backed authenticated Chrome tab timed out on a bounded read-only attempt, and the Search Atlas MCP site-audit reader returns only aggregate counts. Do not infer Article 325's row from the aggregate or advance the final-recrawl-verified ledger beyond 321. Recheck Article 322–325 exact rows only through an available page-level inventory; no second blind recrawl or unchanged redeployment.

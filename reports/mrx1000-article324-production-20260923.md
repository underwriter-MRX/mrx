# MRX1000 Article 324 production verification — 2026-09-23

## Release identity and rollback

- Article: **North Dakota Mineral Rights Probate Deeds: Form 11 vs. Form 12**; append-only `MRX1000-1118`, selection rank 324.
- Canonical: `https://mineralrightsxchange.com/blog/north-dakota-mineral-rights-probate-deeds-form-11-vs-form-12/`.
- Reviewed public source SHA-256: `6d9a5d19781e3bfe242add7319a5e362f9f095f6df2cb3bc60e02836c0560555`; source commit `2b5dc834` pushed to `release/mrx-measurement-ai-technical-20260909`.
- Ready production deployment: `dpl_9fonekhTtMaucu1mntMbPBa2JRFu`, immutable URL `https://mrx-gzog2ujbf-team-mrx.vercel.app`. It was built with `--skip-domain`, verified, then promoted. The immediate rollback deployment is `dpl_6gFbUWp8VNKhD7B9uf4RUEmQBiK9` (`https://mrx-73w7ul4rj-team-mrx.vercel.app`).
- Vercel alias inspection maps apex, `www.mineralrightsxchange.com`, and `mrx-web.vercel.app` to the new deployment. The immutable URL is deployment-protected and was verified with Vercel's authenticated curl; its public unauthenticated redirect to Vercel login is intentional, not a broken article.

## Release gates and served evidence

The final local build passed visible/source/rendered copy, SEO, authorship and grammar gates. The complete local suite passed **93 files / 800 tests**. Local `.env` lacked legal approval secrets and did not establish legal-release enforcement. The separate remote production-environment build explicitly reported **five legal release approvals**, 321/321 historical publication/evidence packets, 332 public article discovery URLs, 329 historical plus three append-only two-image articles (664 image binaries), 495 rendered SEO pages with zero sitemap orphans, 332 organizational-author pages, and rendered grammar PASS. Remote Astro check reported zero errors and zero warnings; 25 hints were nonblocking.

Authenticated immutable-page read returned HTTP 200, exact page title and H1, apex canonical, Form 11/Form 12 body, FAQPage schema, and the same article-title WebP URL for hero, `og:image` and `twitter:image`. Its sitemap-articles and `llms-full.txt` entries contained the exact canonical. The immutable preview carries an `x-robots-tag: noindex` protection header before alias promotion; this is not the apex public page's indexability state.

After promotion, apex and `mrx-web.vercel.app` returned HTTP 200 with no redirect; `www` returned a single 308 to apex and then HTTP 200. All three served the exact title/H1, apex canonical, hero/social identity, FAQ marker and separate in-body image. HTTP checks observed text/html, CSP, HSTS, and a cache HIT; no `x-robots-tag: noindex` appeared on the public article response. The live hero SHA-256 on each active alias is `9d181672040c88de4c34b7a20503aa8b577145ee936f6a92ed87c8596f1562d3`; the separate in-body SHA-256 is `3f446465c5b2e8c3e641f4c57e1eb84b6cfa13695c8863eca9d164e23ad01990`. Both match the reviewed creative manifest. The MRX public-content MCP returned the answer-first text, and its citation-readiness check found one H1, canonical/indexability verified, three official North Dakota source links, Article/FAQ schema, and zero schema errors. Those checks are technical/editorial signals, not a search or answer-engine outcome.

The extension-backed Chrome browser surface was unavailable at release time even though the native app was running. No live Chrome visual pass is claimed; the prior local full/card-size image and OCR checks, remote rendered build, HTTP, Vercel authenticated read, and MRX MCP are recorded separately. Firefox and the in-app browser were not used as substitutes.

## Notification, audit and count boundary

An exact-canonical-only MRX notification worker returned an IndexNow receipt with HTTP 200, `url_count=1`, `notification_scope=exact_urls`, and no errors. Do not resubmit this URL merely because a later audit is pending. Receipt acceptance is not proof of indexing or model citation.

The last completed/postprocessed Search Atlas audit `138239` ended `2026-09-23T17:48:11.339767Z`, before deployment. It reported score 969, 448 successful, 40 redirected, 447 indexable, 41 non-indexable and 2,351 raw observations. After confirming that terminal state, Codex triggered **one** justified post-Article-324 recrawl; it returned `queued`, `already_in_progress=false`, and no task ID. The crawl must be checked by its authoritative crawl/postprocessing tuple. Do not infer completion from wrapper status or aggregate page counts, and do not trigger a second blind crawl.

Article 324 has **no exact completed-crawl Page Explorer row** yet. Articles 322 and 323 also lack independently observed exact successful/indexable rows. Therefore `config/mrx1000-incremental-production-verification.json` and the final-recrawl-verified count remain **321**. The hash-locked historical release-10 canonical JSON/CSV remain unchanged. After a completed and postprocessed audit, obtain each exact page-row proof and a fresh OTTO dashboard; keep dashboard recommendations, generated proposals, and raw audit observations separate. The last dashboard before this deployment was 906 total / 16 approved-deployed / 890 pending. No generated recommendation was deployed.

No customer case, human review, accepted next step, search indexing, answer-engine citation, or commercial outcome was measured by this release.

# MRX legacy-eight Summit parity release — 2026-09-15

## Disposition

**PASS.** The exact eight public articles outside the MRX1000 program were upgraded, released, and verified without adding an MRX1000 row. The public article corpus remains **328 = 320 MRX1000 + 8 legacy**.

Release commit: `5bf33b05261dbda5d8ec6f8baacdc16321e6e3ee` (`5bf33b05`)

Production deployment: `dpl_4a1v1xyehSzapdYueFpfLhm2Gx7s`

Production artifact: `https://mrx-gc0tmy646-team-mrx.vercel.app`

Active aliases verified by Vercel: `https://mineralrightsxchange.com`, `https://www.mineralrightsxchange.com`, and `https://mrx-web.vercel.app`.

## Exact scope

1. `how-title-defects-change-mineral-rights-offer` — **How Title Review Findings Can Change a Mineral Rights Offer**
2. `how-to-compare-mineral-rights-buyers-in-texas` — **How to Compare Mineral Rights Buyers in Texas**
3. `how-to-sell-mineral-rights-in-texas` — **How to Sell Mineral Rights in Texas**
4. `texas-severance-tax-what-mineral-rights-owners-need-to-know` — **Texas Severance Tax: What Owners Need to Know**
5. `what-documents-do-you-need-to-sell-mineral-rights-in-texas` — **Documents Needed to Sell Texas Mineral Rights**
6. `what-is-a-clawback-clause-in-a-mineral-rights-sale` — **What Is a Clawback Clause in a Mineral Rights Sale**
7. `what-is-a-net-royalty-acre` — **What Is a Net Royalty Acre? NRI and Mineral Rights Value**
8. `why-did-my-royalty-check-go-down` — **Why Did My Mineral Royalty Check Go Down?**

## Applied parity gates

- Preserved each approved title and canonical slug.
- Confirmed explicit public/indexable status and a unique SEO title, description, H1, canonical, and content identity.
- Preserved **MRX Editorial Team** as the organizational author in the visible page and Article schema.
- Added or completed answer-first summaries, at least three takeaways, questions answered, exactly five FAQs, authoritative sources, a three-edge hub/sibling/conversion content graph, and an article-specific CTA.
- Preserved directional-assessment, not-certified-appraisal, no legal/tax/title/accounting/engineering/investment advice, and disclosed-buyer language.
- Preserved the exact-title canonical hero for visible hero, Open Graph, Twitter, and Article schema image surfaces.
- Replaced all eight former derivative in-body images with materially distinct evidence scenes and deterministic exact-keyword typography.

## Image evidence

The eight new in-body bases were generated with the built-in image generator in no-text mode, then the repository script `scripts/refresh-mrx-legacy-inline-images.mjs` applied deterministic typography, WebP encoding, OCR, SHA-256, and perceptual-hash checks. The source prompt set was article-specific: title-chain review, offer comparison, sale workflow, severance-tax inputs, seller-document inventory, clawback risk cycle, royalty-acre fractions, and royalty-change reconciliation. Final files are stored under `public/assets/articles/inline/<slug>/`; source generation files remain in the local Codex generation cache rather than the public site.

Hero-to-inline perceptual Hamming distances were `117, 93, 98, 108, 87, 100, 93, 82`; all exceed the fail-closed distinctness threshold of `64`. Hero OCR and inline OCR pass for all **328/328** public articles in `config/mrx-article-two-image-retrofit.json`.

## Automated verification

- `pnpm test`: **83 files, 716 tests passed**.
- `pnpm check:mrx1000:release-gates`: **320/320 evidence packets PASS; 0 blocking findings**.
- `pnpm build:vercel`: **PASS**.
- Rendered two-image verifier: **328 articles / 656 binaries PASS**.
- Rendered SEO verifier: **491 HTML pages PASS**, including unique public title/description/H1 metadata, canonical links, native JSON-LD, accessible images, and zero sitemap orphans.
- Rendered authorship verifier: **328/328 PASS**.
- Rendered copy and grammar checks: **PASS**.
- Crawler tests: **27/27 PASS** (22 Python and 5 Node tests).

## Production verification

The apex, `www` redirect path, and `mrx-web.vercel.app` were checked with cache-busting requests after deployment:

- **24/24 article-page checks PASS**: HTTP 200, exact H1, index/follow, apex canonical, canonical hero identity in Open Graph/Twitter/Article schema, MRX Editorial Team author, FAQ schema with five entries, distinct in-body image, sources, and hub/sibling/conversion links.
- **48/48 production asset checks PASS**: hero and inline images returned HTTP 200, `image/webp`, nontrivial bytes, and exact local SHA-256 on all three host paths.
- Rendered browser inspection confirmed the exact title, organizational byline, reviewed date, answer-first block, five takeaways, distinct in-body image, sources, five FAQs, content graph, CTA, and footer disclosures on the severance-tax route.
- Vercel deployment status: **Ready**. One unrelated production log entry was observed for `POST /api/chat/session/` returning 500; it did not involve an article GET, image GET, build, publication, or crawler-verification request and is recorded separately rather than attributed to this release.

## Discovery and Search Atlas reconciliation

- Verified public crawler manifest: **444 URLs**.
- IndexNow: initial **40/40 received**, then remaining **404/404 received**; final remaining count **0**, with no errors.
- Thirteen retired personal-author archive URLs remain in crawler removal review. Fresh checks show they return public HTTP 200 with explicit `noindex, nofollow`; they are intentionally excluded from the indexable public manifest and are unrelated to the eight article routes.
- Search Atlas OTTO project `e4bab8bb-717e-480c-8dea-1de1b8596eb7`: pixel installed via Cloudflare Worker, engaged, not frozen, GSC linked.
- Search Atlas audit `138239` completed and post-processed at `2026-09-15T13:13:31.298886Z` with score **965**, **485 total pages**, **439 indexable**, **46 not indexable**, **456 2xx**, **24 redirects**, and **0 reported 4xx, blocked/429, or 5xx pages**. Search Atlas's page-type subtotal is 480 while `total_pages` and indexability total 485; this five-page vendor-reporting discrepancy is retained as unavailable rather than silently normalized.
- The eight target URLs returned **zero row-level items** across the queried OTTO heading-length, meta-keyword, NLP FAQ, Open Graph title, and Twitter title issue types.
- Search Atlas lists five or six `FOUND`, valid, source-native schema objects on each target page. They remain intentionally not deployed by OTTO because the site already owns the valid JSON-LD. Live HTML independently proves FAQPage on all eight routes, including the two routes where the Search Atlas schema inventory did not surface that second JSON-LD block.
- Sitewide OTTO recommendation state remains separate from this eight-page release: **671 total / 16 approved-deployed / 655 pending**. Deployment preview reports **1 duplicate domain Organization suggestion** and **15 dynamic-indexing suggestions** with recommendations, plus **898 recommendation-missing proposal units** across a different deploy-planning taxonomy. No generated schema or other unsafe recommendation was deployed. These counts must not be described as raw audit findings or as failures of the eight released pages.

## Rollback

Rollback is available by re-promoting the prior production deployment `dpl_6VZF9CzjryJz7FVU42pWaSiYY2zT`. The released source is recoverable from commit `5bf33b05`; the pre-release base is `a93dbf63110ff31ceab3c380ee079727560493e2`.

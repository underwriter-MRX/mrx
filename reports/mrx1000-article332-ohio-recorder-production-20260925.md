# MRX1000 Article 332 production closeout — 2026-09-25 UTC

## Identity and immutable source

- Article: **Where Can I Find Ohio Mineral Deeds and Leases Before a Title Review?**; row `MRX1000-1126`, rank 332; title/lease/ownership pillar.
- Canonical: `https://mineralrightsxchange.com/blog/where-can-i-find-ohio-mineral-deeds-and-leases-before-a-title-review/`.
- Reviewed MDX SHA-256 `50d680faf16f6e98ccaa1aec3982f94fa4ccb5f8b6c12819ac4994e9162b2ac5`; source commit `cb5af4dc00516bb7678ead6948be782cf0714e56`. Private/source, exact-public-byte reviews, image manifest, admission and preproduction receipts are in wave260. The source commit contains the preserved voice source `9c9d5382a2e02d6191218a0865efb4943685a0e5`.
- Before promotion, full tests passed **94 files / 803 tests** and the local Vercel build passed. The remote build passed the immutable **321/321** historical evidence packets, 340 site articles / 680 image binaries / 508 rendered SEO pages, two-image, copy, grammar and SEO checks, zero sitemap orphans, and 340 organizational-author pages. Historical release-10 hash-locked canonical JSON/CSV were not changed.

## Protected candidate and promotion

- Before the candidate, Vercel inspection mapped apex and `mrx-web.vercel.app` to Article331 deployment `dpl_EcqJ7apKH6fjga6HcQfauoVDJF45`; the voice task was inactive. An authenticated Git-source Vercel deployment was created from exact source SHA with `target=production` and `autoAssignCustomDomains=false`.
- Candidate `dpl_2Rrna6K4GctGijY48uGoWapw2m5H` (`https://mrx-o6k39qb9o-team-mrx.vercel.app`) reached **Ready** before promotion. Vercel authenticated requests confirmed article HTTP 200, exact H1/canonical, matching hero and in-body WebP hashes, article sitemap inclusion, and reciprocal ownership-pillar link. Apex still mapped to the prior deployment at that point.
- `vercel promote` succeeded. Vercel then mapped apex, www and `mrx-web.vercel.app` to `dpl_2Rrna6K4GctGijY48uGoWapw2m5H`. The prior Article331 deployment is the immediate rollback target.

## Independent public observations

- Apex, redirected www and `mrx-web.vercel.app` returned final HTTP **200** HTML for the exact path; all three Vercel alias inspections resolved to the new deployment. HTML had the exact H1, canonical, one article image shared by `og:image` and `twitter:image`, distinct inline image, and no `x-robots-tag: noindex`. The exact canonical appeared once in the article sitemap and `llms-full.txt`; the title/lease/ownership pillar linked to the article.
- The hero WebP was HTTP 200 / `image/webp` with SHA-256 `997177708bd0a08c951794482ec44164026ddcf1c61753acbcca55b24234987e` on all three active public hosts. The distinct in-body WebP was HTTP 200 / `image/webp` with SHA-256 `8223bb5116a8c4caa7a4c1e1c872e03ab0cbbd7b52a497a517b7e746b4ecd255` on all three.
- Apex had HSTS, CSP, `x-content-type-options: nosniff`, HTML content type and Vercel cache headers. Requests identifying as Googlebot, bingbot, OAI-SearchBot and GPTBot returned HTTP 200 HTML without a challenge on the tested path.
- MRX MCP public-content discovery returned the exact live article body. Its citation-readiness check reported one H1/main, matching canonical/indexability, organizational author/dates, five official Ohio source links, Article/FAQ/native organization schema without schema errors, and allowed tested search/AI crawlers. This establishes technical discoverability signals, **not** indexing or ChatGPT citation.

## Browser-rendered verification still open

- The configured extension-backed Chrome surface was unavailable. In a new, isolated native Chrome window, the Article332 URL loaded the expected tab title and favicon but the viewport stayed white with no page accessibility content after a bounded wait and one reload. The *previously verified Article331 URL behaved identically in the same window*. This supports a Chrome/environment presentation failure rather than a demonstrated Article332-only source defect, but is not proof of the cause. The isolated window was closed; unrelated Gmail tabs were left intact.
- **Do not mark Article332 fully release-verified or increment the owner cap count yet.** It is live and HTTP/asset/MCP-verified, but the required live rendered-browser visual gate is unresolved. Published-and-independently-verified remains **331/350**; 19 verified slots remain. The separate Search Atlas exact final-recrawl-verified ledger remains **330**. No IndexNow submission, new Search Atlas recrawl, OTTO deployment, or second deployment was performed to conceal this gap.
- When a stable Chrome surface is available, visually confirm the live exact-title hero, article, distinct in-body image, source links and pillar route on the active deployment. Then close the production count, notify the exact canonical once, and handle the post-release audit without a blind duplicate. Article331's prior exact Page Explorer row still lacked sitemap inclusion; do not infer its correction from the live sitemap or this new release.

# Oklahoma pooling order SA audit remediation evidence — 2026-09-28

Scope: bounded remediation for `/blog/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice/` on branch `codex/mrx-pooling-audit-20260928` only. No held337/338 edits, Chrome interaction, Search Atlas recrawl, IndexNow, spending, or secrets disclosure.

## Executive decision

`MRX_CEO_DECISION: APPROVE bounded remediation and release path for the specified published Oklahoma pooling-order article only, provided Chesty/Codex preserves canonical article identity and title-bearing hero bytes, makes only the six scoped fixes, leaves the meta-keywords exception, runs required local tests/build plus live apex/www verification, records image dimension/byte/SHA and metadata/alt/H2 evidence, does not touch held337/338 or any other worktree, and does not trigger Search Atlas recrawl/IndexNow/Chrome/spend; do not claim Search Atlas audit closure beyond source/live verification until a separately authorized recrawl exists.`

## Asset byte evidence

- Canonical hero preserved: `/assets/articles/hero/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice.webp`, 1200×630 WebP, 82160 bytes, SHA-256 `72d99e2ea57b11d8b08ec81270440692c5ac0347e66e4e52c534e68c0b0779d0`.
- Compressed in-body v2: `/assets/articles/inline/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice/v2/oklahoma-pooling-order-search.webp`, 1200×675 WebP, 75140 bytes, SHA-256 `122245a6485947133e6a3376236587be38fdc6af1a88fde0a6bf58d3a0194f13`.
- Original in-body baseline was 156,830 bytes at `/assets/articles/inline/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice/oklahoma-pooling-order-search.webp`, SHA-256 `24090bd476f60d4dfed99fe4aa9574c690b3fd0345dacde2ce8aa0e700751ed3`.
- Updated creative manifest: `artifacts/mrx1000-wave259-creative-qa/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice/creative-manifest.json`, SHA-256 `fa9c7aa380602155f45fb2b64d6debfa807e426f189b6cd8f2aeb25d8653f711`.

## Metadata and content fixes

- `social_title` added only for OG/Twitter: `Find an Oklahoma Pooling Order After a Notice` (45 characters). HTML `<title>` retains `Find an Oklahoma Pooling Order After a Notice · MRX`. H1, Article JSON-LD headline, and title-bearing hero retain `How Do I Find an Oklahoma Pooling Order After Getting a Notice?`.
- H2 changed from `Common questions` (16 characters) to `Oklahoma pooling order common questions` (39 characters).
- Meta keywords remain omitted as a reviewed technical Search Atlas audit exception because Google ignores them and adding them would create no source-backed page benefit.
- Alt text was rewritten from generic production-note language to concise visual descriptions for the target hero and target in-body image. Related-card hero descriptions for Oklahoma escrow, Ohio mineral deeds, Texas RI, and the division-order guide are applied as page-scoped `related_article_image_alts` on this Oklahoma pooling article so their reviewed source article bytes and title-bearing hero assets remain unchanged.

## Visual inspection notes

- Target hero: filing drawer with folders, books and plant by an Oklahoma prairie/oil-field window, navy title panel with the exact article title.
- Target in-body v2: microfilm reel, record binder, tablet and paper sleeve on a slate surface, navy caption band with `Oklahoma pooling order search`; compression introduced no obvious visible artifact in tool inspection.
- Related hero originals inspected before alt rewrites: Oklahoma escrow paper search-path art, Ohio records desk/farmland window, Texas RI research desk/hill-country window, and division-order title/payment-card illustration.

## Historical evidence restoration

- Missing full-test historical evidence was restored only into this isolated lane from existing local evidence sources; no other worktree was modified.
- Read-only source for release-10 PASS evidence: `/Users/darylhill/Documents/MineralRightsXchange.com/.codex-isolated/mrx-mcp-launch-release-20260923/`.
- Read-only source for readiness/SearchAtlas/DKN evidence: `/Users/darylhill/Documents/MineralRightsXchange.com/mrx-staff-release.hIFG8u/`.
- Restored/generated local evidence paths include `tmp/mrx1000-f9-*.json`, `reports/searchatlas-cg-reconciliation-t_0c427a87/content-genius-export-raw-by-status.json`, `reports/dkn39003-cannibalization-summary-t_a4189128.json`, `reports/dkn39003-cannibalization-editorial-audit-t_a4189128.md`, `artifacts/mrx1000-release-10/`, `config/mrx-1000-searchatlas-llm-execution-manifest.json`, and `reports/mrx-1000-searchatlas-llm-execution-manifest.md`.
- Reproducible generation commands run in this lane: `node scripts/build-mrx-1000-hero-share-creative-briefs.mjs`, `node scripts/build-mrx-1000-searchatlas-llm-execution-manifest.mjs`, `node scripts/build-mrx1000-release-10-evidence-packets.mjs --tree=.`, and `node scripts/check-mrx1000-release-gates.mjs`.

## Follow-up scoped recrawl remediation — same date

- New recrawl findings after the first release: OG/Twitter titles and inline v2 image cleared; remaining scoped findings were a related-card hero byte budget for `what-does-ri-mean-on-a-texas-mineral-appraisal-record.webp`, target-page H2 labels `Ask Connor` and `Related articles`, continued alt-text flags despite truthful alt strings, and a Google tag payload observation.
- The Google tag observation is residual and intentionally not changed: analytics were not removed, CSP was not weakened, and no keyword metadata was added.
- The Texas RI related article's canonical hero/social/schema asset remains `/assets/articles/hero/what-does-ri-mean-on-a-texas-mineral-appraisal-record.webp`, 1200×630 WebP, 124818 bytes, SHA-256 `928a76ad6d2936723be68625c73ded7d90e061d48404d71cc4780df762856cb3`.
- A target-page-only related-card derivative was added at `/assets/articles/related/how-do-i-find-an-oklahoma-pooling-order-after-getting-a-notice/what-does-ri-mean-on-a-texas-mineral-appraisal-record.webp`, 1200×630 WebP, 58074 bytes, SHA-256 `914eff269f96235576861bde9f44ed9997c9f78fd1358ea233ef428fe6c12f9b`. Visual review confirmed the title pixels, desk/window composition, and legibility remain intact with no obvious artifacts.
- Target-page-only headings were added through narrow optional frontmatter/template fields: `Ask Connor about records` and `Related mineral rights articles`. Defaults remain unchanged for other articles.
- Alt-text investigation: Search Atlas OTTO issue-type reference exposes `images` rows with `image_url`, `current_alt`, `recommended_alt`, `found_in`, and `item_index`; the current OTTO issue read for this exact URL returned zero `images` and zero `h2_under_20_over_70` rows, so the remaining flags appear to be raw recrawl/audit observations rather than a returned OTTO recommendation body. Google Image SEO guidance reviewed from `https://developers.google.com/search/docs/appearance/google-images` says Google uses page content including captions/titles and advises useful, information-rich alt text in page context while avoiding missing alt and keyword stuffing. The six current alt texts are present, descriptive, page-contextual, and not keyword-stuffed; absent a returned Search Atlas recommendation body, no speculative rewrite was made.

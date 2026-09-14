# MRX OTTO overlay removal — execution preflight

Status: HOLD for Cloudflare restoration access. No new articles, production deployment, Worker removal, DNS change, or security change was performed in this execution turn.

## Authority and ownership

Daryl authorized source preservation and correction of faulty MRX schema injection before creating more content. Codex is the sole MRX repository/release writer. Chesty coordinated a read-only assessment through `mrx_ceo`, `mrx_searchatlas_otto`, and `mrx_vercel`, using the existing `openai-codex / gpt-5.6-sol` subscription. Their textual verdict was:

> MRX_CEO_OVERLAY_DECISION: CONDITIONAL APPROVE — HOLD RELEASE

The decision supports removal of only the OTTO Worker after full-site source-preservation review and verified restoration access. It explicitly prohibits weakening parity checks, changing WAF/security, deploying duplicate schema to clear counters, or manipulating recommendation statuses. The owned advisory processes completed; unrelated Hermes/OTTO workers were not touched.

## Verified lane and production identity

- Isolated worktree: `/Users/darylhill/Documents/MineralRightsXchange.com/.codex-isolated/mrx-measurement-ai-technical-20260909`.
- Branch: `release/mrx-measurement-ai-technical-20260909`.
- Starting HEAD: `f6f85af3a7d62fecf081b35c88f9a8908755b961`.
- Existing implementation/source commit: `cdf7bb2fb9532c422f348b26f622134a8568d9e7`.
- All four active aliases independently resolve to Ready production deployment `dpl_FXYwjqRJRbEGYuQs6DWTd6B4wgp3`, `mrx-reus73jnd-team-mrx.vercel.app`: apex, www, `mrx-web.vercel.app`, and protected `mrx-web-team-mrx.vercel.app`.
- Existing Vercel rollback baseline: `dpl_7N3wuArq3fa8eX5JztZo8xUJd7bX`, `mrx-pgy8bqusm-team-mrx.vercel.app`.
- Vercel deployment rollback does **not** restore a removed Cloudflare Worker. The protected alias's authentication must remain enabled.

## Full public-site inventory

The read-only inspector requested every one of the 348 canonical public sitemap paths from both apex and the public native Vercel alias with `Accept: text/html`. The first complete 696-request snapshot had zero transport/HTTP errors and was captured at `2026-09-14T18:19:31.720Z`.

Local verbose evidence: `reports/mrx-overlay-source-parity.json`, SHA-256 `589ea1adf83f2e954e1e24521bf2df43c031bf6a933fe2113bce0e9b5d524af5`. It contains public source/runtime evidence only and is intentionally not committed as two copies of the entire site's body text.

| Comparison with built source | Apex differences | Native Vercel differences |
|---|---:|---:|
| Titles | 229 | 0 |
| Metadata | 298 | 0 |
| Canonicals | 0 | 0 |
| Headings | 185 | 0 |
| Image source/alt/dimensions | 0 | 0 |
| JSON-LD | 223 | 0 |
| Body text | 250 | 136 |
| Ordered links | 24 | 17 |

Apex metadata differences include 292 descriptions, 223 Twitter site values, 222 Twitter descriptions, and 222 keyword tags. Source/native image identity and canonical/OG identity are already preserved. Body/link differences on the native alias prevent claiming whole-document byte/content parity: sampled body differences include timezone-sensitive card dates; sampled link differences include ordering with unchanged destinations. These are not evidence of an OTTO deployment and are not silently waived.

Disposition for preservation review:

- Approved canonical article identity, title-bearing hero/share asset, distinct in-body image, reviewed source hashes, native graph, canonical links, accessible image metadata, and source security defaults are authoritative and already covered by repository gates.
- Overlay title/headline replacements cannot override reviewed article identity without deliberate re-review. Meta-keyword tags and appended keyword lists are rejected, not ported as SEO improvements.
- Standalone ImageObjects are optional supplements; native Article/BlogPosting image relationships and visible assets remain in source. Do not recreate stale or miscaptioned ImageObjects merely to preserve a dashboard count.
- Metadata/heading proposals require page-context review; the inventory is an input, not a blanket migration approval. Do not bulk-copy 298 metadata rewrites or 185 heading changes.
- Source-port review remains open until legitimate-only deltas have a recorded disposition. No claim of zero remaining migration work is made.

The compact repeat inventory is `reports/mrx-overlay-source-parity-current.json`; it retains hashes and excerpts rather than full body copies. That repeat encountered 22 network errors, so it is not a complete verification receipt. A later focused HTTP retry recovered apex and native reads, confirming that transport failures must remain distinct from the known schema defect.

## Supported controls inspected

- Search Atlas MRX Settings expose writing/crawl settings and installation diagnostics, not a schema-only runtime suppression switch.
- The first-party UI disables deletion of FOUND schemas. The available connector likewise prohibits FOUND deletion. The prior sitewide duplicate Organization DELETE returned HTTP 400; no deletion succeeded.
- Supported edits/deployments for six visible-image captions were stored but did not change browser-variant live schema. Nine other ImageObjects reference images absent from the current visible source.
- [Search Atlas API documentation](https://docs.searchatlas.com/) documents dedicated Worker install, uninstall, status, and verify operations. The connector's `otto_set_cloudflare_worker(installed:false)` removes only its Worker; restoration with `installed:true` requires an existing Cloudflare Workers API token.
- The [Cloudflare route documentation](https://developers.cloudflare.com/workers/configuration/routing/routes/) describes scoped Worker route ownership independently of security controls. Do not change zone security, DNS/proxy state, or unrelated routes.
- MRX installation diagnostics completed with five passed, zero failed, zero warnings, and one unknown. That does not prove recoverability or schema correctness.

## Gates and access blocker

- Full repository unit suite: 76 suites / 637 tests passed.
- New inspector safety contract plus existing schema-parity tests: 12 tests passed.
- Full `pnpm build:vercel`: passed, including compliance/copy/grammar, Astro checks, 230/230 release packets, 238 article / 476 image binary checks, and 379 rendered SEO pages with zero sitemap orphans.
- Canonical pillar remains HTTP 200 with the exact reviewed title/H1 and native graph but fails browser-variant image-schema parity. Public native Vercel pillar passes the 27 focused HTTP assertions after retry.
- Fresh www/protected/rendered-browser attempts experienced timeouts and are not counted as passes. Existing deployment identity for all four aliases is verified; complete final content/asset/rendered verification must still be repeated after the real fix.
- Cloudflare opens its first-party **Sign in to Cloudflare** page, not an authenticated MRX zone.
- No existing Workers token was found in the explicitly checked MRX environment files, Chesty profile environment, Search Atlas local credential configuration, or standard Wrangler configuration locations. No credentials were printed, requested in chat, created, or extracted from browser secrets.
- No exact Worker/routes/bindings backup or non-destructively verified restoration credential exists yet. Therefore the approved rollback gate prevents uninstalling the Worker now. The Cloudflare Chrome tab is retained for first-party sign-in handoff.

## Search Atlas truth and resumption

Fresh OTTO dashboard: **1,841 total / 1,840 approved-deployed / 1 pending**. Schema panel: **7 / 6 / 1**. The pending item is the rejected, undeployed sitewide Organization; native MRX Organization remains intact. These counters are not evidence of a verified live fix.

Raw audit `138239` independently remains completed/post-processed at `2026-09-13T23:23:32.988059Z`: score **969**, **373 pages**, **348 indexable / 25 non-indexable**, **349 success / 24 redirects**, **1,615 raw observations**. Raw observations are not zero and are separate from OTTO pending. No new recrawl was triggered before an actual serving-layer correction.

After Cloudflare sign-in: verify exact MRX zone and owned Worker/routes/bindings, capture rollback configuration, verify existing restoration access, finish legitimate-only source disposition, pass release gates, remove only the faulty OTTO overlay through a supported path, verify every active alias with HTTP/browser/image/crawler/cache/security assertions, then complete one post-fix Search Atlas recrawl and genuine pending reconciliation. Only then resume pillar-directed content. No new or incremental monetary charge is authorized or incurred by this preflight.

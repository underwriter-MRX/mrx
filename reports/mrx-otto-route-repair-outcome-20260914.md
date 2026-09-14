# MRX serving-layer repair: live verified, reconciliation hold

## Completed production repair

On 2026-09-14 the authenticated Cloudflare MRX zone route editor changed only the Worker assignments of `mineralrightsxchange.com/*` and `www.mineralrightsxchange.com/*` to `None`. Both exact routes remain and independently display “Workers are disabled on this route.” The retained `otto-pixel-worker` still has production version `1f60d65d` and its original KV binding. No Worker was deleted, reinstalled, or redeployed; no DNS, proxy, WAF, authentication, security policy, unrelated Worker, or failure-mode setting changed. No incremental charge was incurred. Rollback remains the two exact reassignment steps in [the preserved pre-mutation record](mrx-otto-route-rollback-20260914.md).

The stale browser-HTML overlay is no longer served. Native reviewed titles, descriptions, headings, canonical/social identities, JSON-LD entities, and visible images remain authoritative. Nothing was deployed merely to clear a Search Atlas counter. A scoped hostname cache purge covered only apex and www; fresh hero and inline requests returned HTTP 200, WebP, Cloudflare cache MISS, and exact source-byte hashes at `2026-09-14T19:49:34Z`.

No Vercel deployment or promotion was needed. Fresh alias inspections confirmed the unchanged Ready production deployment `dpl_FXYwjqRJRbEGYuQs6DWTd6B4wgp3`, origin `https://mrx-reus73jnd-team-mrx.vercel.app`, implementation commit `cdf7bb2fb9532c422f348b26f622134a8568d9e7`, on all four active production aliases:

- `https://mineralrightsxchange.com`
- `https://www.mineralrightsxchange.com` (redirects to apex)
- `https://mrx-web.vercel.app`
- `https://mrx-web-team-mrx.vercel.app` (existing authentication preserved)

Commits `9793430` and `ca21d44` are ancestors of this release branch. No article, image, runtime application, or hosting configuration source was edited in this repair.

## Independent verification

The focused HTTP report `mrx-selling-pillar-production-verification.json`, generated `2026-09-14T19:33:22.226Z`, passes all 27 assertions on each of the three public aliases. It checks exact title/H1/canonical/metadata/native graph, absence of unsupported keyword overlays, appropriate WebPage rather than Article schema, six distinct guide destinations, editorial date and disclosures, indexability/security headers, two requested search-crawler agents, and the existing reconciled article's exact title and two exact live image binaries. Protected-alias authenticated CLI reads independently verified HTML/schema parity and both exact WebP binaries; anonymous access still serves the authentication interface, not article content.

Installed Google Chrome rendered the same exact selling-pillar assertions successfully on every alias, at desktop and mobile sizes, with complete visible images and screenshots. Public aliases used ordinary live Chrome navigation. The protected alias used the opt-in, exact-origin, GET/HEAD-only authorized Vercel CLI read relay; this is explicitly not an unmediated browser-authentication test. The relay never extracts or supplies a bypass secret, disables protection, forwards cookies/authentication headers, or accesses private application endpoints. Chrome extension control was unavailable with a request-header-policy error, so repository automated Chrome verification was used. Representative desktop/mobile screenshots were visually inspected for readable identity, navigation, image completeness, and overflow.

Final unit run: 78 suites / 647 tests PASS. Full `TZ=UTC pnpm build:vercel` PASS: compliance, copy, grammar, 230 passing release packets, 238 rendered articles / 476 image binaries, 379 rendered SEO pages, zero sitemap orphans. Default test-browser behavior is unchanged; installed Chrome and the protected read relay require explicit environment opt-ins. The serving-layer inspector now bounds and records transport retries, without treating HTTP/security/content failures as successes or dropping URLs.

### Full-site evidence boundary

The post-repair `2026-09-14T19:35:35.367Z` inventory covered 348 public paths on each of apex, www, and public Vercel: 1,044 reads, zero HTTP errors, and zero differences in title, metadata, canonical, headings, images, or JSON-LD. Independent cross-production normalized identity comparison found no mismatches across the three public targets. That snapshot SHA-256 was `1dfa2903aca67ad992a9400841fa47d1d2b2f29f7ebf13b59b9366491a1262b9`.

The final UTC-build comparison, generated `2026-09-14T20:33:43.669Z`, covered all 348 public Vercel paths with zero errors/retries and 331 exact normalized whole-document matches. Its compact inventory SHA-256 is `b9f167bb0a592a24efbec924de7da79c3b8b629f4efae077687361f20a821ac0`. The remaining 17 paths differ only in ordered links; 13 also differ in category-navigation body order. The earlier one-day date differences disappeared with the UTC build. The category template consumes unsorted collection order; the four other paths use `resolveInternalLinks`'s first same-cluster fallback, selecting different existing tax guides across build environments. Those four destinations are not the same URL and are not represented as identical. These are retained source reproducibility findings, not overlay transformations. The strict inventory intentionally remains non-PASS; complete local/deployment whole-document parity is not claimed or waived. The ignored full inventory is retained locally, not committed as duplicated public-site content.

## One completed post-fix recrawl

Exactly one recrawl was triggered for Search Atlas audit `138239`, project `e4bab8bb-717e-480c-8dea-1de1b8596eb7` / `99913`. Fresh authoritative status is completed, terminal, and post-processing completed; start `2026-09-14T20:09:12.846494Z`, completion `2026-09-14T20:28:01.244220Z`.

Raw audit: score 965, 373 total stored pages, 1,903 heuristic observations; reported indexability 338 indexable / 35 not indexable; reported HTTP buckets 339 successful / 24 redirects / 0 missing / 0 blocked / 0 server errors. The reported HTTP buckets sum to 363, not 373; the remaining ten stored records are not assigned an invented status. Optional meta-keyword/length/schema-type heuristics are proposals, not a reason to add keyword stuffing, replace exact approved titles, or misclassify a page. These are separate from OTTO pending counters and do not establish rankings or LLM citations.

## Remaining release hold: rejected sitewide schema

The fresh post-recrawl OTTO dashboard remains 1,841 total / 1,840 approved-deployed / 1 pending. These are Search Atlas stored-state labels, not proof that its now-detached runtime overlay is serving 1,840 live fixes. Schema panel: 7 total / 6 approved / 1 pending. Domain listing independently confirms the one pending record: `182837670`, Organization, SUGGESTED, undeployed, with no page URL ID. The native source Organization graph remains verified live.

This duplicate is editorially rejected and will not be deployed to manufacture zero pending. The previously inspected first-party interface exposes Preview/Edit/Deploy but no reject/delete action for this sitewide record; the supported sitewide deletion attempt returned HTTP 400 “Can't delete sitewide schema.” The page deletion API is not applicable to a domain record with null URL ID. No FOUND/native schema was deleted and no status/validity flag was fabricated. A supported vendor dismissal/rejection mechanism remains unavailable. The strict source reproducibility findings above also remain explicit before another production release.

New content has not resumed and no release-completion/count increment is recorded. The canonical corpus remains 238 retained/live-known MRX1000 routes, including 230 strict release rows and eight retained baseline routes; unrelated legacy routes do not advance the MRX1000 count.

## AI Atom Brain learning boundary

This execution preserves the current objective, sole writer, pillar architecture, and no-approval owner authority. The consulted maintained MRX Outcome-Led Growth Plan (2026-09-08), AI Atom Brain Decision Record (2026-09-14), decision-record/research references, and Outcome-Led Growth SOP supply doctrine. Chesty's existing read-only `mrx_ceo` verdict `MRX_CEO_ROUTE_DECISION: APPROVE_ROUTE_ONLY` supplies the narrow executive disposition; the saved specialist result was independently checked.

Search Atlas supplies the fresh dated technical recrawl and stored-state reconciliation above. The built SEO/AEO tool's retained 2026-09-09 evidence planned 80 answer-engine observations but captured none; fresh sampled citation/visibility results are unavailable, not zero. Reviewed Billy methods (`BGIM-HANDOUT-5-7`, `BGIM-PROMPT-01`) inform future buyer-objection/brief hypotheses only; they are not platform specifications or independent corroboration of this edge repair, and course coverage remains partial. Do not count duplicated evidence twice.

Measured result: reviewed production identity survives browser Accept negotiation after the route-only repair. Commercial eligible-case counts, human reviews, accepted next steps, ranking gains, and LLM citation uplift were not measured and are not claimed. Missing commercial measurement is not a publication blocker. The current hold is the pre-existing technical/reconciliation gate, not a new Brain approval gate. Future topic/intent/next-step choices still route through Chesty to `mrx_ceo`, preserve explicit cannibalization boundaries, and distinguish document readiness from ownership, title, valuation, or transaction proof.

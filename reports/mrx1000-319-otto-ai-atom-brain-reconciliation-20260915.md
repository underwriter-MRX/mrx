# MRX1000 Article 319, OTTO, and AI Atom Brain Reconciliation

Date: 2026-09-15 UTC

Search Atlas project: `99913` / `e4bab8bb-717e-480c-8dea-1de1b8596eb7`

Search Atlas audit: `138239`

## Article release state

- Production deployment: `dpl_Dw1MfrbtcGVbaPYyRf1b76yw8Efw`.
- Published artifact revision: `1674e321891f6b82806b3065b19498f3a5c7a67504c9db013728a4232d09cbdd`.
- Canonical MRX1000 ledger: 1,000 program rows, of which 319 have passed the post-publication live-verification gate.
- Production verification: 319 of 319 admitted MRX1000 articles passed the exact live title, canonical, social-image, schema-image, content-image, and asset-byte checks on every active production target.
- Total public blog routes at this release: 327. This route count includes non-MRX1000 legacy content and is not the MRX1000 completion count.

## Fresh Search Atlas crawl

Audit 138239 started at `2026-09-15T08:12:00.119268Z`, completed at `2026-09-15T08:16:46.493019Z`, and finished post-processing.

- Score: 963.
- Crawled pages: 484.
- Status groups: 460 successful 2xx, 24 redirects, 0 missing 4xx, 0 blocked 403/429, and 0 server 5xx.
- Indexability groups: 443 indexable and 41 non-indexable.
- Raw heuristic observations: 2,630. These are crawler observations, not approved recommendations and not proof of an equivalent number of source defects.

The authenticated OTTO dashboard and deployment preview are recorded separately in `reports/mrx-searchatlas-otto-observation-20260914.json`. The dashboard reports 671 total issue rows, 16 approved/deployed topical-map records, and 655 pending rows. The deployment preview reports 16 generated recommendations and 896 items without a generated recommendation. The taxonomies and units differ, so these figures must not be summed or represented as one delivery count.

## Recommendation review

The post-release review rejected and deleted generated image-alt, heading, meta-keyword, internal-link, missing-keyword, NLP-term, Open Graph title, and Twitter title recommendations that conflicted with reviewed source identity, evidence boundaries, accessible image semantics, or curated internal navigation. A fresh crawl regenerated NLP-term bundles on four pages; those bundles were reviewed and deleted again. No generated on-page, link, social, or page-schema recommendation was deployed.

The 896 preview items without a recommendation contain no provider-proposed copy or schema to review or deploy. They remain separate readiness gaps. Source-controlled titles, descriptions, headings, FAQ answers, social identity, and page schema remain authoritative and continue through repository regression gates.

## Dynamic Indexing disposition

Search Atlas describes Dynamic Indexing as adding low/no-impression URLs to a provider-managed hidden homepage-footer container. That mechanism conflicts with MRX's source-first, visible-navigation, and exact production-parity controls. The `mrx_ceo` decision is to reject these changes and retain them as reviewed, undeployed provider exceptions.

Five generated records were removed during the authenticated cleanup:

- `/faq/`
- `/mineral-rights-offer-comparison/`
- `/team/connor/`
- `/team/laurel/`
- `/team/marisol/`

Fifteen remain visible in the provider control plane with status `SUGGESTED`, reason `No Impressions`, and `is_deployed=false`:

- `/contact/`
- `/privacy-policy/`
- `/about/`
- `/book/`
- `/methodology/`
- `/terms/`
- `/editorial-policy/`
- `/authors/mrx-editorial-team/`
- `/free-guide/`
- `/blog/how-are-mineral-rights-valued/`
- `/team/clay/`
- `/team/elena/`
- `/team/owen/`
- `/authors/marisol/`
- `/blog/how-to-compare-mineral-rights-buyers-in-texas/`

The Search Atlas UI and MCP response expose these Dynamic Indexing records by exact URL but do not expose numeric record IDs. The exact URLs are therefore the stable provider identities in the fail-closed exception contract.

## Sitewide Organization disposition

Provider record `182837670` remains a valid, sitewide `Organization` suggestion in `SUGGESTED` state with no page assignment and `is_deployed=false`. Search Atlas support confirmed it is not deployed and the product cannot currently dismiss it. MRX retains exactly one native authoritative Organization entity at `https://mineralrightsxchange.com/#org`; the provider record is an exact vendor-locked exception and must not be deployed.

## Production containment proof

- `pnpm verify:schema:live-reconciliation` passed at `2026-09-15T08:28:58.546Z` across apex, `www`, and native Vercel production.
- Every target returned the expected final 200 response, exactly one native `#org` node, zero runtime schema-injector script sources, and zero overlay `ImageObject` nodes.
- A fresh homepage inventory at `2026-09-15T08:29:55.772Z` found exactly 56 anchors on each target with identical ordered href, text, and attribute values.
- No Dynamic Indexing hidden/footer links were present.
- The crawler notifier pins and strips only the exact verified Cloudflare transport beacon, security template, OTTO status marker, and normalized OTTO runtime client before comparing production bytes with the source-authored manifest. Any changed injector remains a hard failure.

## Crawler-notification reconciliation

The production manifest revision `4fc2eae05792509e665e718d7c66bb605fd8da2477b4bbb41df9431ad4d7b5a8` contains 443 indexable canonical URLs. IndexNow returned HTTP 200 receipts for all 443 after bounded, resumable verification: 328 URLs in the first accepted continuation, then 40, 40, and 35. A temporary production 429 response left failed URLs unsubmitted; the continuation later verified and submitted every remainder. The final report records `remaining_count=0`, zero errors, and `resumable=false`.

Thirteen formerly submitted author archive URLs are intentionally absent from the indexable manifest because the live pages are `noindex, nofollow`: Graham, Laurel, Marisol pages 1–8, Owen, Travis, and Wade. They are retained in the local removal-review inventory and are never automatically redisclosed.

## AI Atom Brain decision boundary

The four-input review used the maintained AI Atom Brain MRX doctrine, the fresh Search Atlas crawl and OTTO evidence above, the built SEO/AEO tool's prior reports where available, and reviewed AI Billy audience/CTA methods. The evidence does not establish search traffic, qualified cases, revenue, ownership, value, or LLM citation outcomes. Missing commercial outcomes remain unavailable, not zero.

The current constraint is connecting relevant informational visits to an owner-specific human-review journey, not merely increasing article volume. The next approved MRX1000 job is program row `MRX1000-0415`, titled **Mineral Rights Offer vs. Letter of Intent vs. Purchase Agreement**, with slug `/blog/mineral-rights-offer-vs-letter-of-intent-vs-purchase-agreement/` and primary phrase `mineral rights offer documents`. It must compare the document roles and handoffs without giving state-specific legal conclusions or overlapping generic offer-fairness, title-defect, or closing-cost content.

Success remains measured by relevant ready cases, completed human reviews, and agreed next steps. Article publication and technical readiness are leading evidence, not proof of those outcomes.

## Spend and deployment statement

No new paid capacity, purchase, top-up, advertising placement, or incremental monetary charge was authorized or incurred. No generated Search Atlas recommendation was deployed in this reconciliation.

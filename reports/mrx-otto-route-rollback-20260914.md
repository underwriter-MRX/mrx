# MRX OTTO route-only repair and rollback record

Pre-mutation record captured from the authenticated Cloudflare first-party interface on 2026-09-14. No secret values, browser credentials, or API tokens were read or exported.

## Exact scope and observed original state

- Account: `51dad664711b873758bb43eeb2996cdb`.
- Zone: `mineralrightsxchange.com`.
- Zone route table contains exactly two records: `mineralrightsxchange.com/*` and `www.mineralrightsxchange.com/*`, both assigned to `otto-pixel-worker`.
- Worker: `otto-pixel-worker`; production version displayed as `1f60d65d`, 100% traffic. The interface retains 18 historical versions.
- Binding: KV namespace `DOMAIN_UUID_MAPPING`, namespace ID `f6f9145d11ac4865a0ae8cff228c65d6`.
- Worker URL and preview URLs are disabled; there are no custom domains.
- Original apex route failure mode is fail closed (block), observed in the Worker route edit form. No failure mode will be edited.
- The authenticated zone route edit form offers `None`, `fireflies-hermes-bridge`, and the selected `otto-pixel-worker`. The unrelated Fireflies Worker must not be selected or changed.

## Authorized repair

Retain both exact route patterns but assign their Worker to `None` through the authenticated zone route edit form. Do not uninstall/delete/redeploy the Worker, edit its code or bindings, change failure mode, alter DNS/proxy state, disable security or authentication, or change unrelated resources. Cloudflare's current [route documentation](https://developers.cloudflare.com/workers/configuration/routing/routes/) supports routes with no associated Worker.

This route-only approach supersedes the proposed full Worker uninstall: it retains the restoration object and existing configuration, so it does not require API-token creation or secret reveal to reinstall deleted resources. No new or incremental monetary charge is required.

## Rollback procedure

Open the authenticated MRX zone Workers Routes page. Edit each retained exact route, select the retained `otto-pixel-worker`, and save without changing its pattern or failure-mode settings. Independently confirm both assignments and the unchanged Worker version/binding, then rerun HTTP/rendered/schema/image/security checks. Do not deliberately re-enable the known-bad overlay merely to test rollback.

## Source-preservation disposition

The complete 348-path public inventory at `2026-09-14T18:19:31.720Z` found zero HTTP errors and exact source/native parity for every title, metadata collection, canonical, heading, image identity, and JSON-LD graph. Canonical identity and source gates remain authoritative. The native source already carries legitimate page/article entities, reviewed descriptions, visible headings, citations, navigation, canonical/social images, accessibility metadata, robots and security defaults.

Retain those reviewed source carriers. Do not port overlay title/headline replacements, keyword lists, duplicate Twitter-site values, obsolete archive page counts, stale AI-guide/brand images, unsupported appraisal/regulated-professional claims, or optional standalone ImageObjects. Sampled overlay descriptions replace precise worksheet boundaries with generic promotional language; source descriptions retain the supported job-to-be-done. Sampled heading substitutions rename answer-first sections or alter reviewed page identity without new factual value. Optional ImageObjects do not replace the native Article image relationship. No validated unique source feature requires migration from these transformations; this is a reviewed decision to retain source, not an assertion that all generated proposals were accurate or improved rankings.

The inventory separately records native timezone-sensitive card-date/body and ordered-link differences. They remain explicit verification findings, not schema-overlay features and not silently waived by this repair. Whole-document parity is not claimed until independently resolved or explained against the exact deployed artifact.

## Execution state

Chesty routed the read-only decision through `mrx_ceo`, using `openai-codex / gpt-5.6-sol`, in session `20260914_122015_bcf6be`. The saved specialist result exited successfully and returned:

> MRX_CEO_ROUTE_DECISION: APPROVE_ROUTE_ONLY

The coordinator's subsequent stream failed; its saved request record independently retained the successful CEO result. This is a captured executive verdict, not a fabricated Codex approval. Owned coordinator and nested processes completed; their actual working directories were independently verified as this isolated lane. Unrelated IAG processes were not touched.

Fresh gates: 77 unit suites / 641 tests passed. Full Vercel build passed, including compliance, copy, grammar, 230 passing release packets, 238 articles / 476 image binaries, and 379 rendered SEO pages with zero sitemap orphans. No public-source content changed.

Neither route has been changed as of this pre-mutation record. Final release, post-fix recrawl, dashboard reconciliation and new-content resumption remain gated on fresh independent evidence.

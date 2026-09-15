# MRX MCP and crawler notification release — verified 2026-09-15

## Live outcome

Production deployment `dpl_2A8gbhPKwki5gz3rtyJU35SEqSwy`
(`https://mrx-kjyowf3x2-team-mrx.vercel.app`) is promoted to the apex, www,
`mrx-web.vercel.app`, and protected `mrx-web-team-mrx.vercel.app` aliases.
The full remote build passed: 379 rendered SEO pages, 238 organizational
article bylines, 476 article images, release-packet and grammar gates.
Representative native candidate hashes, ownership file, and protected alias
article hashes passed. The protected alias still redirects anonymous requests
to authentication. Chrome visually shows the live article's exact title on its
hero, MRX Editorial Team byline, and separately disclosed fictional guide.

## Verified notifications and hosted recovery

All 348 canonical public URLs have IndexNow HTTP 200 receipts. The local sequence
was 347 plus the homepage; an immediate repeat returned unchanged, zero queue.
The initial ownership 403 was followed by a successful focused retry and full
acknowledgments; it is retained in diagnostic evidence rather than hidden.

Hosted run 34926825793 received 40 URLs and persisted its receipt cache.
Hosted run 34926918573 restored that cache, received the remaining 308 in bounded
batches, reached zero remaining, and uploaded artifact 10379758128 (27,636 bytes,
SHA-256 `1c5affa01ba070e61fef9390dc851a137e0f3054e82faf7ac97de021c7660e7e`).
The first run exposed an artifact hidden-directory exclusion; the second run
verified the fix. Both runs completed successfully on GitHub-hosted Ubuntu.

- Results: https://github.com/underwriter-MXC/mrx/actions/runs/34926918573
- Workflow: https://github.com/underwriter-MXC/mrx/actions/workflows/crawler-notifications.yml
- Activation default: enabled; repository variable
  `MRX_CRAWLER_NOTIFICATIONS_ENABLED=false` pauses it.
- Runs on successful configured production-release/deployment events, notifier-code
  pushes, manual dispatch, and hourly retry at minute 17. Each run processes at
  most ten batches of 40; state is saved, JSON evidence retained 30 days.
- Direct CLI releases without a GitHub deployment event are detected by hourly
  fallback. This is not a guarantee of immediate crawler retrieval.

GitHub browser sign-in is no longer needed for activation. Existing SSH write
access and the connected GitHub reader completed installation and verification.
Hosted and local receipt stores are separate: the initial hosted bootstrap
repeated the already acknowledged local URLs once; exactly-once delivery is not
claimed. Provider receipt does not prove indexing, retrieval, citations, or model
training updates. Google uses sitemap discovery; no general-page Indexing API
submission or LLM model-update API is used.

## Integrity and crawler evidence

All 348 native public-alias pages match the production manifest. All 348 www
paths redirect to the expected canonical apex path. Initial www 308 diagnostics
were a verifier interpretation issue, superseded by the explicit redirect check.
All 348 apex pages passed before their acknowledged submissions. Focused pillar
checks passed on all three public aliases, including representative exact image
bytes and metadata. Search crawler user-agent samples return clean 200 content;
these samples do not establish access from each provider's verified IP addresses.

Only observed Cloudflare transport is normalized: exact email-protection comments,
one digest-pinned analytics footer, and a digest-pinned JavaScript-detection
template allowing only its request ID/time to vary. Unknown scripts, OTTO hidden
content, metadata changes, redirects, and noindex pages still fail closed.
No Cloudflare security setting or challenge execution was changed.
17 Python and 5 Node integrity tests, 6 MCP tests, and the real 10-tool protocol
smoke passed. Installed plugin: `0.2.0+codex.20260915035427`.

## Post-release Search Atlas evidence

The single recrawl started `2026-09-15T03:50:42.652248Z`, completed
`2026-09-15T03:58:23.294854Z`, and reports completed postprocessing.
Raw audit: 373 pages; 348 indexable / 25 non-indexable; 349 successful / 24 redirects;
zero missing, blocked, or server errors. Raw heuristic observations: 1,922.
These observations are separate from the OTTO recommendations and not citation
quality or ranking proof.

Postprocessed dashboard: 1,806 total / 1,805 stored approved-deployed / 1 pending.
Schema: 7 total / 6 approved / 1 pending. Other dashboard panels have zero pending;
zero-count/no-recommendation types do not prove full coverage. The known duplicate
sitewide Organization suggestion remains unresolved with the provider; no duplicate
was deployed to force zero. Cloudflare's retained routes are set to None; the
Worker object remains. Earlier reattachment actor and recurrence prevention remain
unproven.

## Durable implementation and handoff

Live artifact source: `4eaf804`; subsequent verifier/workflow compatibility and
activation commits preserve rendered page identity. Current source branch
`codex/mrx-crawler-notifications-20260914` at `5012401`.
Hosted default-branch integration: `212dd9b`; notifier-only push filters prevent
a site release, and existing Vercel Git deployments remain disabled. Main still
has older website content and must not be used for a generic website promotion.

Another MRX task became active with uncommitted vendor-reconciliation changes in
the maintained production worktree. Those files were not modified or merged over.
The task was given the exact source branch, production ID, receipts, and integration
requirement before its next deployment so the new manifest cannot be silently
rolled back. The maintained-branch integration is owned by that active writer.

AI Atom Brain contains the reusable MCP installer, creation/installation SOP,
transport verification lessons, fixed citation benchmark evidence, and this release
record. No new benchmark generation, paid capacity, article publication, or vendor
message was initiated by this MCP release.

Final coordination acknowledgment: the active article task accepted sole-writer
responsibility, will integrate through `5012401` before any replacement release,
and will preserve the verified production deployment until its full gates pass.
It will not modify the hosted notifier state or Cloudflare route assignments.
Fresh post-recrawl Cloudflare dashboard read confirms both routes remain disabled.

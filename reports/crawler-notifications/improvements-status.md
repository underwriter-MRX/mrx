# MRX five-item improvement execution

## Final source and installation evidence

- Source commit `1bda3d4` pushed to `codex/mrx-crawler-notifications-20260914`.
- Installed MCP version `0.2.0+codex.20260915032711`; six plugin tests pass, including an actual
  detached worker that returns promptly and completes independently. Ten-tool
  protocol initialize/list/read smoke passed; shared engine copies match byte-for-byte.
- Fourteen Python crawler tests, two manifest tests, 654 website tests, full build,
  379-page SEO gate and 238-article author parity gate passed.
- Chrome local preview verified the organizational byline, distinct fictional-guide
  attribution, topic link, source links and unchanged image identities. This was
  a local rendered check, not live-domain or image-pixel release proof.
- Production activation remains blocked by Cloudflare sign-in and the known OTTO
  source/live mismatch. Hosted workflow remains gated and branch-only; no new
  candidate promotion, scheduler activation, IndexNow receipt or post-release
  recrawl is claimed. The earlier Vercel candidate predates this source revision.
- Chesty's historical runner suggestion was not reused: it is date-bound and
  contains an embedded credential. Review and rotate that historical credential
  through the first-party account/approved store; never copy it into this package.

To resume: authenticate Cloudflare, verify and resolve the exact route conflict,
finish native/edge parity checks (including the known email comment transform),
deploy the current verified source to a candidate, verify and promote, run manual
notification, then safely integrate/enable the hosted workflow on the default
branch and test its run/receipt/failure reporting. Do not release stale main or
resume the paused article-production program.

## Cloudflare sign-in continuation — 2026-09-15

Authenticated Cloudflare UI confirmed both retained MRX routes were again assigned
to `otto-pixel-worker`. Restored only their Worker assignment to None, preserving
route patterns and all other resources; saved UI readback shows both disabled.
Fresh apex/www/ native offer-review HTML contains no OTTO metadata/NLP injection.
HTTP samples for Googlebot, bingbot, OAI-SearchBot, PerplexityBot, Claude-SearchBot
return 200 without injection (user-agent samples do not establish verified bot IP access).
The actor responsible for reattachment remains unproven.

Commit `4eaf804` introduces explicit manifest v2 transport integrity: only the exact
Cloudflare email comments and the pinned existing analytics footer are ignored.
16 Python and 4 Node tests pass, including changed/unknown injection rejection.
Final-source candidate build is in progress; no alias promotion or IndexNow receipt
is claimed at this checkpoint. Plugin cache refreshed to
`0.2.0+codex.20260915034234`.

GitHub CLI has no usable current authentication; the stored token returned 401.
GitHub sign-in opened in Codex. Hosted workflow is still inactive, and the old
`main` production source must not be deployed merely to activate that workflow.

### Hosted installation checkpoint

Default branch integration `9866d49` contains only the notifier engine, workflow,
Python regressions/fixture, documentation, and notification-only push filters.
Existing Vercel `git.deploymentEnabled=false` was verified on both lineages.
Initial commit used `[skip ci]`; public GitHub API confirms no site workflow run
was started. The notifier workflow is registered; its job remains gated by
`MRX_CRAWLER_NOTIFICATIONS_ENABLED=true`, which has not been enabled.
Matching workflow/docs filters retained in source branch commit `400cb4e`.
Default branch still has older website content, so a generic main release remains
unsafe until separate source-lineage reconciliation.

# MRX voice input — 2026-09-23

Status: microphone dictation is live on all active production aliases and verified. The post-release Search Atlas crawl and post-processing completed; existing OTTO pending recommendations remain unresolved. Historical blockers below describe earlier stages and are superseded by the public-release record at the end.

## Change

Travis, Connor, Clay, Owen, Laurel, and Elena share a compact microphone control beside Send. A tap starts browser speech recognition and opens a listening panel with Stop. Recognized words append to the existing draft; the visitor reviews and taps Send. The control captures dictation, not spoken AI replies. Speech recognition is browser-dependent; unsupported browsers retain typing and device-dictation guidance. The interface explains that the browser may send audio to its speech service.

Stop retains asynchronous final results; Send waits until recognition ends. Session guards reject late results, and capture stops on close, guide change, manual edits, pagehide, hidden page, unmount, or a busy guide. Recording is bounded to sixty seconds plus an eight-second finishing timeout. Permission, device, network, and no-speech errors preserve the draft. Minimum microphone target is 44 CSS pixels.

The Vercel source policy permits microphone=(self), retaining camera=() and geolocation=(). Live apex GET currently adds geolocation=(), microphone=(), camera=() at the edge, while mrx-web.vercel.app has no equivalent header. Origin configuration alone does not establish live access. Existing authorized Cloudflare token can read zone settings but Workers reads and an isolated query-scoped header-rule creation returned 403; no edge mutation succeeded.

## Verification

- Twelve Chrome/Playwright voice integration tests pass, including mobile layouts for every guide, preserved draft, delayed final result, denied permission, unsupported browsers, stale callbacks after close, manual editing, and pagehide.
- Full unit suite: 93 files, 800 tests passed.
- Full local build:vercel passed all source/rendered copy, compliance, article evidence, image, SEO, authorship, and grammar checks; Astro diagnostics: zero errors and zero warnings (31 hints).
- Preserved existing article corpus: 332 articles, 664 image binaries, 495 rendered SEO pages, zero sitemap orphans. Source base 31f72f6879b1eef413ff0d0917e419f75f15448a preserves Article 324.
- Inspected the saved 390×844 mobile listening screenshot. Synthetic recognition events test UI integration; actual desktop Chrome audio capture and speech recognition subsequently passed in the local preview; physical phone testing remains outstanding.
- Local legal secrets are unavailable, so local build does not prove legal-signoff enforcement; the subsequent production-environment remote build verified all five existing approval receipts, as recorded below.
- Before release, recheck active aliases and rollback identity. Observed baseline is dpl_9fonekhTtMaucu1mntMbPBa2JRFu, with apex, www and mrx-web.vercel.app aliases.
- Search Atlas audit 138239 completed/postprocessed before this voice release. Last independently reported OTTO dashboard has 906 total, 16 approved/deployed, 890 pending. Do not equate that with raw technical findings or deploy unreviewed recommendations to obtain zero.

Evidence directory: /Users/darylhill/Documents/MineralRightsXchange.com/outputs/20260923-voice-independent/ (build.log, unit.log, e2e.log, mobile-voice-listening.png, baseline.json and saved response headers).

## Protected deployment and owner handoff

Source commit cc453d1267661482d42dca256ad3ac29d6cb38eb is pushed to feature/mrx-asktravis-voice-20260923. Protected production-environment deployment dpl_31hgCWA74JgPFosKADrSWXvLNezC (https://mrx-knnhuzfm7-team-mrx.vercel.app) reached READY at 2026-09-23T22:08:23.571Z with --skip-domain. The remote build confirmed five legal approvals, zero Astro errors/warnings, source/rendered checks, 664 article images, 495 SEO pages, and the full configured build succeeded.

Authenticated Vercel GET on the protected homepage returned 200, microphone=(self), the existing canonical title and one H1. The offer-review page retained its title and one H1. Both load AskTravis.O611g1e2.js; its SHA-256 is a3e82951f30d65ffebf2c8d850b5344bbcc0648d1f9a379f5ab9eb1d0e3fc1c0 and it contains the new microphone, finishing panel, recognition API and audio-service disclosure. The protected noindex header is expected and is not a public indexing claim.

After READY, fresh Vercel inspection still resolves mrx-web.vercel.app to baseline dpl_9fonekhTtMaucu1mntMbPBa2JRFu. Apex still serves AskTravis.BzfI41oT.js and microphone=(). No promote command has run, and no post-release recrawl was triggered for this unpromoted change. Existing OTTO 890-pending state remains unresolved.

A dedicated normal Chrome window is open at https://dash.cloudflare.com/login for the owner. An asynchronous request asks Daryl to sign in to the account managing mineralrightsxchange.com. API token scope is insufficient for Workers or header-rule edits; no credential should be pasted into chat. Preserve the other tasks' Google-password and incognito-signup windows. Kanban t_ded49a4d remains blocked against duplicate dispatch; Codex owns this release lane.

Upload recovery: the first archive upload and first ordinary upload failed with network fetch errors. A subsequent ordinary upload reused stored hashes, uploaded only eight remaining files, and completed. The large remaining file was an existing planning manifest; no source, evidence, or release gate was removed to work around the network failure.

## Owner-requested retest and resumed live check

The 12 voice integration tests passed again. In native Chrome at localhost:4397, the microphone button opened the expected browser permission prompt. Allow this time started actual microphone recording and the Listening panel. Stop ended recording and recognized speech appeared in the editable draft. No message was sent; the test draft was cleared. The speech contents were not retained in this report. This is desktop speech-to-text evidence, not a physical-phone or spoken-AI-reply test. Detailed record: outputs/20260923-voice-independent/requested-retest-summary.md.

On resuming this task, a fresh apex HTTP GET still returned microphone=() and AskTravis.D-sCNo2h.js. The active public site has advanced beyond the original voice base. Coordinate with the article release owner and integrate current production source before any promotion; do not promote the older protected voice artifact over newer articles and MCP changes.

## Public activation work — 2026-09-24

Daryl explicitly requested finishing and going live. Existing MRX Google sign-in restored access to the correct Cloudflare account without creating credentials. In the active `otto-pixel-worker`, `addSecurityHeaders` line 1787 had one microphone restriction. Changed exactly `microphone=()` to `microphone=(self)`, retaining `geolocation=()` and `camera=()`. Worker version prefix moved from `5dd4d805` to `2f687c3f`; fresh public apex HTTP 200 confirmed the new header. No OTTO routing, content, or other worker code was changed.

Merged current Article 328 production source `5b20a69a` into the voice branch at `2842224e`. Production rollback baseline is `dpl_64SqSY6F8Cy3staXcUgxrHGF63oG` (`mrx-7f684zura-team-mrx.vercel.app`). All newer articles and MCP setup/privacy changes are preserved.

Integrated verification: 94 unit files / 801 tests passed; 12 voice Chrome integration tests passed. Initial manifest fingerprint failure was a stale generated readiness input; after regenerating readiness and its derived manifest, the full suite passed with no source-test bypass. Initial browser attempts ran before the dev server was ready and failed connection-refused; discarded and rerun after readiness, all 12 passed. Local full build passed 501 rendered SEO pages, 336 articles, 672 image binaries, no sitemap orphans, copy/compliance/authorship/grammar checks. Production-environment build and public UI activation verification are still in progress.

## Public release verified — 2026-09-24

Promoted production deployment `dpl_Ahiy9Yk9qfWmw72R51E1PqQnYCBr`, immutable URL `https://mrx-gs4qkkl0h-team-mrx.vercel.app`, from integrated source `51cebd13` (implementation merge `2842224e`, Article 328 base `5b20a69a`). Vercel remote build passed all five legal receipts, compliance, zero Astro errors/warnings, 501 rendered SEO pages, 336 articles/672 image binaries, authorship and grammar. Rollback: `dpl_64SqSY6F8Cy3staXcUgxrHGF63oG`.

Fresh HTTP checks passed on apex, www (canonical redirect), and mrx-web.vercel.app for homepage, Travis profile, offer review, MCP setup page and Article 328. All serve `AskTravis.CXF8xGqS.js` and self-only microphone policy. Candidate bundle SHA256: `a3e82951f30d65ffebf2c8d850b5344bbcc0648d1f9a379f5ab9eb1d0e3fc1c0`. Article 328 hero and inline bytes match current source exactly. Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User and GPTBot user-agent HTTP probes returned non-challenge 200 bodies; these probes do not prove indexing or actual bot access.

All 12 voice tests passed against the public URL in 58.8 seconds, with mocked recognition/session data and mobile layouts for all six personas. Native Chrome additionally verified the real public microphone permission prompt, actual recording/Listening, explicit Stop releasing capture, and helpful no-speech retry state. No test message was sent. Earlier local native Chrome captured real speech into a draft. No physical phone hardware or spoken-AI-reply test is claimed: the feature is dictation, review and Send.

Source-upload transport failed repeatedly. Git-based remote build correctly failed because only 172 of 321 editorial receipts were in Git. The final complete archive included all 963 local signed review files and current wave 255/256 inputs; it passed the unchanged gates remotely. No approval receipt was fabricated or gate disabled.

Post-release crawl trigger returned queued, already_in_progress=false, sync_complete=false for audit 138239. Existing last completed crawl ended 2026-09-24T05:04:18.126957Z, before this voice release; its 2,454 raw observations are not a post-voice result. The prior OTTO dashboard remained 906 total / 16 deployed / 890 pending. Zero-pending release closeout is not claimed.

Evidence: `outputs/20260923-voice-independent/public-voice-release-http.json`, `public-voice-crawlers-assets.json`, `public-voice-e2e-12.log`, `public-voice-remote-build-deploy.log`, `public-voice-promote.log`, `public-voice-deployment.json`, `public-mobile-voice-listening.png`, `edge-microphone-release.json`.

## Post-release crawl completion independently verified

Audit 138239 completed and postprocessed, authoritative terminal=true/should_repoll=false. Started 2026-09-24T14:52:06.753074Z; completed 2026-09-24T16:50:54.231896Z. Aggregate results: score 952; 495 pages; 455 successful/40 redirects; 454 indexable/41 nonindexable; zero 4xx, blocked, or 5xx pages; 2,408 raw observations. Aggregate crawl success does not separately prove exact Travis-page inventory or microphone functionality; those are supported by the direct live HTTP/browser tests above.

Fresh post-recrawl OTTO dashboard remains 906 total, 16 deployed, 890 pending. No recommendations were bulk deployed, and zero-pending closeout is not claimed. Evidence: post-voice-terminal-audit.json and post-voice-otto-dashboard.json in the release evidence directory. No duplicate crawl was triggered.


## ChatGPT-style dictation review and send — 2026-09-24

User requested a growing transcript box, explicit Stop dictation for review/editing, and the right-side arrow to finish and submit. Replaced the one-line input with an accessible textarea that expands upward to 180px (or 25dvh), follows incoming speech, and allows manual scrolling through the complete draft. Active microphone becomes a stop square; Stop dictation ends capture without submission. Arrow explicitly waits for the asynchronous final transcript before sending once. Closing, editing, page hiding or recognition error cancels pending submission and preserves the draft. Enter sends; Shift+Enter adds a newline; composition Enter is preserved.

Implementation `8ad9d07e`; published source `9c9d5382a2e02d6191218a0865efb4943685a0e5` merges Article330 production source `b6a483aa`. Candidate and production deployment `dpl_AWVqhec8CVTYj6ZyDGHFF7iJyesB`, immutable `https://mrx-jt4yhh267-team-mrx.vercel.app`; promoted to apex, www redirect and mrx-web.vercel.app. Rollback baseline: Article330 `dpl_RjALzVCcZFtYeL8APesMRgkQGA7P`. Remote Git-source build successfully used the complete signed receipts admitted by Article330; no release gate bypass.

Validation: 94 unit files / 802 tests passed; 39 local conversation and voice browser checks passed; all 16 voice checks passed again against the public website in 55.7 seconds. Browser recognition and session fixtures are mocked for deterministic coverage; no physical phone hardware test or new real-audio transcription claim. Public mobile long-transcript screenshot independently inspected. Initial test failures were corrected selectors (two Stop controls) and an unsupported name-refusal fixture, not changes to the application's name handling. Derived readiness manifests were regenerated for unit checks and restored afterward to keep unrelated generated changes out of this release.

Remote production build: five legal receipts, compliance, zero Astro errors/warnings, 505 rendered SEO pages, 338 articles/676 image binaries, authorship and grammar passed. Fifteen live host/deep-path checks and nine crawler/discovery checks passed. New bundle `AskTravis.Rs74dg2U.js`, SHA256 `971d7cdfcb44a01243923985561dcba1f62d00b8b9338ffccc84686c9931af11`, matches the verified candidate on every target; microphone policy remains self-only. Article330 hero and inline bytes match source exactly.

Search Atlas audit138239 was already queued at publication and independently rechecked; historical completion and 2,404 raw observations remain prior-crawl fields, not post-release evidence. Dashboard still has 906 total / 16 approved / 890 pending. No duplicate recrawl or unreviewed OTTO application. Existing article audit coordinator tracks terminal crawl/post-processing and post-release dashboard; overall zero-pending SEO closeout remains outstanding.

Evidence directory: `/Users/darylhill/Documents/MineralRightsXchange.com/outputs/20260924-dictation-review/`.

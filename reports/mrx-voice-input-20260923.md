# MRX voice input — 2026-09-23

Status: source and protected deployment verified; public promotion pending Cloudflare microphone policy access and release-gate reconciliation. No live activation is claimed. Real desktop Chrome microphone capture, transcription, and Stop were verified in the local preview during the owner-requested retest.

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

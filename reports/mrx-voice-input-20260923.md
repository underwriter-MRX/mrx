# MRX voice input — 2026-09-23

Status: source verified; production release pending Cloudflare microphone policy access and release-gate reconciliation. No live deployment or real-device audio success is claimed.

## Change

Travis, Connor, Clay, Owen, Laurel, and Elena share a compact microphone control beside Send. A tap starts browser speech recognition and opens a listening panel with Stop. Recognized words append to the existing draft; the visitor reviews and taps Send. The control captures dictation, not spoken AI replies. Speech recognition is browser-dependent; unsupported browsers retain typing and device-dictation guidance. The interface explains that the browser may send audio to its speech service.

Stop retains asynchronous final results; Send waits until recognition ends. Session guards reject late results, and capture stops on close, guide change, manual edits, pagehide, hidden page, unmount, or a busy guide. Recording is bounded to sixty seconds plus an eight-second finishing timeout. Permission, device, network, and no-speech errors preserve the draft. Minimum microphone target is 44 CSS pixels.

The Vercel source policy permits microphone=(self), retaining camera=() and geolocation=(). Live apex GET currently adds geolocation=(), microphone=(), camera=() at the edge, while mrx-web.vercel.app has no equivalent header. Origin configuration alone does not establish live access. Existing authorized Cloudflare token can read zone settings but Workers reads and an isolated query-scoped header-rule creation returned 403; no edge mutation succeeded.

## Verification

- Twelve Chrome/Playwright voice integration tests pass, including mobile layouts for every guide, preserved draft, delayed final result, denied permission, unsupported browsers, stale callbacks after close, manual editing, and pagehide.
- Full unit suite: 93 files, 800 tests passed.
- Full local build:vercel passed all source/rendered copy, compliance, article evidence, image, SEO, authorship, and grammar checks; Astro diagnostics: zero errors and zero warnings (31 hints).
- Preserved existing article corpus: 332 articles, 664 image binaries, 495 rendered SEO pages, zero sitemap orphans. Source base 31f72f6879b1eef413ff0d0917e419f75f15448a preserves Article 324.
- Inspected the saved 390×844 mobile listening screenshot. Synthetic recognition events test UI integration; physical audio capture and recognition-service availability remain real-device checks.
- Local legal secrets are unavailable, so local build does not prove legal-signoff enforcement; a production-environment remote build must verify the five existing approval receipts before promotion.
- Before release, recheck active aliases and rollback identity. Observed baseline is dpl_9fonekhTtMaucu1mntMbPBa2JRFu, with apex, www and mrx-web.vercel.app aliases.
- Search Atlas audit 138239 completed/postprocessed before this voice release. Last independently reported OTTO dashboard has 906 total, 16 approved/deployed, 890 pending. Do not equate that with raw technical findings or deploy unreviewed recommendations to obtain zero.

Evidence directory: /Users/darylhill/Documents/MineralRightsXchange.com/outputs/20260923-voice-independent/ (build.log, unit.log, e2e.log, mobile-voice-listening.png, baseline.json and saved response headers).

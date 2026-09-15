# MRX crawler notifications and citation readiness

## What happens after a content release

1. The existing build refreshes the public sitemap and LLM discovery indexes.
2. The final Astro build hook generates `/crawler-manifest.json` from sitemap-listed,
   prerendered, canonical, indexable HTML. Each page gets a content fingerprint.
   No build timestamp is used as a substitute for a real content change.
3. The notification workflow responds to a successful production-release workflow
   or a reported successful production deployment. It fetches the **current live**
   manifest, sitemap, robots policy, LLM files and ownership file.
4. Changed pages must return the exact manifested HTML, correct canonical, and
   indexable response before their URLs are sent to IndexNow. Partial deployments,
   unexpected redirects, private pages, noindex pages and stale caches fail closed.
5. Receipt state suppresses unchanged submissions. HTTP 200 means received;
   HTTP 202 remains pending ownership validation and is deferred for 24 hours.
   Rate limits and failures remain retryable. Removal candidates require review
   so a newly private URL is not automatically redisclosed.

IndexNow shares notifications with participating search engines. It does not
prove that an engine fetched, indexed, ranked, or cited the page. Google discovery
uses the canonical sitemap and normal search requirements. Its Indexing API is
not used for general MRX pages. AI search crawlers fetch public content on their
own schedules; this does not push changes into model weights or guarantee citations.

## Run and inspect

```sh
python3 scripts/crawler_sync.py            # preview changed URLs
python3 scripts/crawler_sync.py --apply    # verify and submit
python3 scripts/crawler_sync.py --status   # discovery and crawler-policy evidence
python3 -m unittest discover -s tests/crawler -v
node --test tests/crawler/manifest.test.mjs
```

The local MCP plugin at `/Users/darylhill/plugins/mrx` packages the same
`crawler_sync.py` engine and adds capability discovery, notification preview/run/
status, public-page reading and citation-readiness tools. MCP clients can request
public page text; ordinary web crawlers use HTTP discovery, not MCP.

State defaults to `~/.local/state/mrx-crawlers`. `MRX_CRAWLER_STATE_DIR` can set a
dedicated executor directory. A file lock prevents overlapping local runs. GitHub
Actions restores/saves receipt state using its cache and uploads JSON evidence.
Different executors have separate receipt histories; use one primary executor.
Cache eviction can cause a safe reannouncement of still-public URLs. No exactly-once
or real-time delivery claim is made. Public ownership proof uses
`/indexnow-key.txt`; it is an IndexNow host-verification file, not account access.

## Activation requirements

- Deploy the manifest generator and ownership file from this verified source lineage.
- Run a successful live preview and apply; retain the actual HTTP receipts.
- The GitHub workflow must exist on the repository's default branch to receive
  events. The current MRX release lineage and default branch differ; do not merge
  or deploy stale main-site content merely to enable notification events.
- Direct CLI releases that emit no GitHub production deployment event require a
  post-release `--apply` call or the explicitly configured Codex follow-up. A local
  follow-up runs only while Codex/the host can run; it is not an always-on server.
- Never announce this as active until the live manifest, key and first submission
  have been verified. No public-facing content or crawler access policy is changed.

## AI Atom Brain citation review

The September 14 Brain decision and September 9 independent MRX assessment support
an evidence-led approach: crawlability, useful answers, accurate entities and real
sources, then measured citations. The saved baseline had **zero captured of 80
planned AI observations**, so citation performance is unavailable, not zero.

`mrx_citation_readiness` reports canonical/indexability, page title, H1/main count,
source links, schema types/parse errors, article authors/dates, and declared bot
permissions. These are mechanical observations. It separately asks for editorial
review of answer relevance, source freshness, truthful attribution, distinct
evidence, and internal links into the appropriate owner journey. It does not
invent a citation score or convert a link into proof that a claim is supported.

Reuse the existing fixed MRX prompt benchmark. Preserve prompt/version, intent,
platform/model, locale, timestamp, raw answer and exact cited URL. Record unavailable
answers and coverage; do not count retries as independent observations. Compare
matching descriptive windows only after baseline capture. Keep citation rate,
notification receipt, indexing state and qualified case/human-review outcomes
separate. No causal or numerical uplift is claimed.

The existing sitewide OTTO Organization suggestion is a vendor-confirmed pending
item despite native schema being present; this change does not deploy duplicate
schema, reattach OTTO workers or manufacture zero pending recommendations.

## Sources checked September 14, 2026

- [IndexNow protocol](https://www.indexnow.org/documentation)
- [Google AI features and website requirements](https://developers.google.com/search/docs/appearance/ai-features)
- [Google Indexing API scope](https://developers.google.com/search/apis/indexing-api/v3/using-api)
- [OpenAI crawler distinctions](https://developers.openai.com/api/docs/bots)

Brain source: maintained MRX project pack, `2026-09-14 AI Atom Brain Decision Record.md`,
`2026-09-08 Outcome-Led Growth Plan.md`, and the independently verified September 9
marketing-brain assessment. Live execution evidence belongs in a separate dated
release report; these historical records are not current production proof.

## September 14 improvement execution

- Each apply processes at most 40 pages by default (`--max-pages`, range 1–1000).
  Persisted attempt order prevents repeatedly failing URLs from starving untouched
  pages. Accepted receipts remain durable; interruption before receipt persistence
  can still cause replay, so delivery is not exactly once.
- `--report` reads current progress, verified/accepted/remaining counts and lock
  status. A stale running report becomes interrupted/resumable. MCP submissions
  launch a detached worker and return promptly; call status and resume the next batch.
- Hosted workflow includes release/deployment events and an hourly fallback at
  minute 17. All runs require repository variable
  `MRX_CRAWLER_NOTIFICATIONS_ENABLED=true`. Keep it unset until the live manual run
  is verified, and install the workflow on the default branch without releasing
  stale site content. The source workflow is prepared; it is not active yet.
- The author regression gate verifies visible and structured organizational identity
  on every rendered article. Fictional guides retain clearly labeled topic links.
- The old benchmark capture gap is resolved: the original 20-prompt/four-platform
  analysis now has 80 saved responses; three include explicit MRX homepage links
  on branded questions. This is baseline evidence, not improvement from this release.

## Manifest integrity version 2

HTML hashes remove only the exact `<!--email_off-->` and `<!--/email_off-->`
transport comments that Cloudflare strips. All other bytes, including OTTO metadata,
hidden content, scripts, and visible content, remain protected by SHA-256. The
manifest explicitly declares this hash policy; older policies are rejected.

The existing Cloudflare analytics footer is also pinned by exact SHA-256
`a7d7b1207343bf240dc3bf89442b597d9a3609888ede71e183e4ff7c9b18f290`.
Only that exact fragment is ignored. Changed or unrecognized scripts fail closed.

Notifier-only files are installed on the default branch independently from the
production website lineage. Production and CI push filters ignore these files.
The initial integration commit uses GitHub `[skip ci]`; Vercel Git deployment is
already disabled in this branch. Enabling requires the repository variable and
a successful manual live notification test.

The observed Cloudflare JavaScript detection footer is pinned by template digest
`016660f3823e7f69cbe84c7b6e6e3219103232ab0ac3cf4094bb7a48cfffef36`, allowing only
its hexadecimal request ID and base64 timestamp to vary. This transport compatibility
fix preserves hashes of native HTML and existing manifests. Unknown template changes
still fail. It does not change Cloudflare security settings, execute a challenge,
or treat non-200 challenge pages as public content.

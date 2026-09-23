# MRX1000 pillar-first throughput change — 2026-09-23

## Objective and evidence

Increase quality-cleared, published supporting articles without losing the answer identity or release evidence. The current public site has 324 MRX1000 articles; the separate exact-page final-recrawl ledger is 321. A Wyoming federal-reservation manuscript is private and not Article 325.

The site already provides the main reciprocal link mechanism: `resolvePillar` maps each article to a canonical pillar, `resolveInternalLinks` renders a crawlable article-to-hub link, and `getPostsForPillar` automatically lists published articles on that hub with pagination. Manual pillar edits for each article are unnecessary. Existing tests cover that runtime behavior. The new `pnpm check:article:pillar-support` checks the current-wave frontmatter contract in under one second of test execution, before the full release suite. It requires the declared cluster, pillar, parent page, and article hub link to agree with the canonical mapping. Historical, hash-locked articles are not silently rewritten; one older tax article uses a legacy hub alias and is outside the prospective wave-252+ check.

OpenAI's [crawler documentation](https://developers.openai.com/api/docs/bots) identifies OAI-SearchBot as the crawler for ChatGPT search. The [ChatGPT Search guidance](https://help.openai.com/en/articles/9237897-chatgpt-search) says allowing its access is necessary for eligibility, not a placement guarantee. On 2026-09-23, an OAI-SearchBot user-agent HTTP check received 200 responses for `robots.txt`, the title/ownership pillar, and the latest article. The public robots policy explicitly allows OAI-SearchBot on public paths; private routes remain disallowed. This is an accessibility check, not proof of a real OpenAI crawl, citation, answer-engine retrieval, or model training.

## Faster article lane

1. Select a source-backed, distinct owner question within one existing pillar. Reject a generated title that merely restates a published answer. Lock title, slug, parent pillar, cluster, primary phrase, and a useful next step before drafting.
2. Draft the answer-first article and source citations once. In parallel, prepare **private** visual bases after title lock. Do not convert them to public hero/share and in-body assets until review clears the actual manuscript.
3. Run the fast pillar-support check as soon as the new MDX exists. Use the already-automatic pillar inventory and crawlable link triangle; do not hand-edit the hub per article.
4. Keep factual, legal/compliance, editorial, originality, exact-title two-image, metadata, full test/build, rollback, and all-host verification gates. Run expensive checks against stable final bytes rather than restarting them for every preliminary draft.
5. Keep post-release IndexNow, Search Atlas completed/postprocessed recrawl, exact-page inventory evidence, and OTTO dashboard accounting separate from drafting the next article. A prior article's missing exact-page row must not become an arbitrary pre-draft waiting period, but it must not be misreported as verified.

## Current bottleneck and next decision

The Wyoming exact-manuscript Chesty review job `9da679c5-41f8-4819-aaed-466f9de87d17` timed out without a specialist verdict. A direct read-only compliance attempt returned `UNAVAILABLE` because the specialist could not access the file or linked sources. A bounded inline-copy retry returned workflow suggestions instead of any sentence-level review. Neither is a PASS. Do not create review artifacts, publish Article 325, or label the private creative bases approved without a source-specific factual/citation and legal/compliance disposition. Fix the review transport or obtain an equivalent independently verifiable review; do not weaken the gate.

Two private, text-free Wyoming bases are preserved at `artifacts/mrx1000-wave253-creative-sources/wyoming-high-plains-hero-base.png` and `artifacts/mrx1000-wave253-creative-sources/blank-record-research-inline-base.png`. They contain no purported official record or ownership determination. Exact-title/phrase composition, OCR, dimensions, uniqueness, metadata, and visual review are still outstanding.

Measure this change by median distinct-question-selection-to-live elapsed time, articles with a correct reciprocal pillar link at release, and post-release exact-page/OTTO verification coverage. ChatGPT citation is an observed downstream outcome, not a promised result or a substitute for reader usefulness.

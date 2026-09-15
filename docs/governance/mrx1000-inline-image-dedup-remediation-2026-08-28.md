# MRX1000 canonical inline-image deduplication remediation

- Decision ID: `MRX1000-INLINE-DEDUP-2026-08-28`
- Scope: 69 admitted MRX1000 articles, including Article 256
- Disposition: `PASS_PREPARED_NOT_DEPLOYED`
- Governing prompt: `MRX1000-FACTORY-SEO-AEO-2026-08-28`

## Finding

Extension-backed Chrome review of Article 256 found that the shared article layout rendered the frontmatter-controlled `inline_image` and the MDX body repeated the same asset. The duplicate lazy-loaded node produced a second image request and a large blank rendering gap. A corpus audit found the same source-level duplication in 69 admitted articles: 44 Markdown image nodes and 25 raw HTML image nodes.

## Remediation

Each duplicate body node was removed. The shared layout remains the single rendering owner for the canonical in-body image. The exact asset URL, image bytes, alt text, rendered keyword text, dimensions, MIME type, hero/share identity, prose, citations, frontmatter, schema inputs, and canonical identity did not change.

`scripts/review-mrx1000-inline-image-dedup-remediation.mjs` fail-closed compared every prior reviewed source to the current source. For each article it proved:

- the prior and current frontmatter bytes are identical;
- the canonical inline source occurrence count changed from two to one;
- removing exactly one matching Markdown or HTML image node from the prior bytes reproduces the current file byte for byte;
- no prose, citation, metadata, or canonical asset changed; and
- the release batch and editorial, factual-citation, and compliance review bindings use the new exact source SHA-256.

The remediation review passed all 69 articles with zero frontmatter changes and zero prose or citation changes. The normalized review assembly, evidence-packet build, and continuous release gate then passed 256 of 256 admitted articles with zero holds.

## Durable prevention

The current factory directive now requires exactly one in-body rendering through the shared `inline_image` frontmatter contract and fails closed on duplicate image URLs, duplicate rendered pixels, lazy-load gaps, or placeholder-colored blank regions. `tests/unit/mrx1000-seo-aeo-factory-gate.spec.ts` enforces one canonical inline asset occurrence in every admitted source.

This is a visual-quality and crawl-efficiency correction. It does not promise a ranking, indexing, retrieval, competitor-displacement, LLM-citation, traffic, lead, or revenue result.

## Release state

No production push or deployment is authorized while the five repository legal/editorial receipts remain absent. The remediated sources and Article 256 are prepared locally for release; production verification, Search Atlas recrawl, and the post-recrawl OTTO read remain downstream release requirements.

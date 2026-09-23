# Wave 252 text-free creative bases — private

Generated September 23, 2026 with the built-in image-generation tool under the owner's included article-art authority. These are **original, uncaptioned source artworks**, not final article assets, not verified exact-title/keyword pixels, and not published. Both were inspected visually after generation. No official deed, court seal, instrument number, or populated government form is depicted. The two concepts differ materially from each other and from the prior North Dakota agency-routing article's dark-panel hero and overhead four-station image.

| Role | Project file | SHA-256 | Actual PNG size | Visual concept |
| --- | --- | --- | --- | --- |
| Potential hero/share base | `probate-two-path-hero-base.png` | `48e8a9393644356575e83e6f23df5ca2c50f70d9d3c178dd6804fdd8cc99a3ef` | 1733 × 907 | Sunlit stone table with one unlabeled archival box and two blank paper portfolios, prairie outside; left negative space for deterministic title. |
| Potential in-body base | `county-record-archive-inline-base.png` | `40b4e0aad6404d46beb62e93af279a083c9277ff1f374dc476d965445ec55851` | 1672 × 941 | Eye-level perspective down unlabeled wooden record drawers, one blank file partly pulled out; right negative space for deterministic phrase. |

Hero prompt: “Use case: photorealistic-natural. Text-free base artwork for an MRX article hero/share card, wide landscape 1.91:1. Original editorial still life suggesting two distinct archival pathways without a real legal instrument: softly sunlit stone worktable by a northern-plains window, one unlabeled archival box, two separate blank paper portfolios, realistic fibers and warm ivory/slate-blue palette; broad clean left negative space. No words, numbers, logos, seals, signatures, filled forms, labeled maps, badges, watermarks, fabricated evidence, or identifiable courthouse. Different from a dark prairie panel hero and overhead four-station image.”

In-body prompt: “Use case: photorealistic-natural. Text-free base artwork for researching North Dakota county probate-deed records. Eye-level documentary view down an archival records room with open wooden index drawers and one blank buff folder partly pulled out, realistic oak/paper texture, warm maple/sage/cream palette, wide 16:9 perspective, uncluttered lower-right area. Different from the tabletop hero and prior overhead still life. No words, numbers, labeled tabs, forms, logos, seals, signatures, watermarks, fake references, or identifiable government building.”

## Composed private assets — later September 23

The read-only `mrx_ceo` decision locked the exact title **North Dakota Mineral Rights Probate Deeds: Form 11 vs. Form 12** and the in-body phrase **North Dakota probate deed records**. `scripts/build-mrx1000-wave252-creative-assets.mjs` composes them from the two source PNGs without copying or replacing those original binaries. The deterministic build produced the following **local candidate assets**, not a published article:

| Role | Public asset path | SHA-256 | Pixels | OCR result |
| --- | --- | --- | --- | --- |
| Canonical hero/share | `/assets/articles/hero/north-dakota-mineral-rights-probate-deeds-form-11-vs-form-12.webp` | `9d181672040c88de4c34b7a20503aa8b577145ee936f6a92ed87c8596f1562d3` | 1200 × 630 WebP | Exact locked title, PASS |
| Distinct in-body | `/assets/articles/inline/north-dakota-mineral-rights-probate-deeds-form-11-vs-form-12/north-dakota-probate-deed-records.webp` | `3f446465c5b2e8c3e641f4c57e1eb84b6cfa13695c8863eca9d164e23ad01990` | 1200 × 675 WebP | Exact supporting phrase, PASS |

The generated manifest under `artifacts/mrx1000-wave252-creative-qa/north-dakota-mineral-rights-probate-deeds-form-11-vs-form-12/creative-manifest.json` records source/output hashes, perceptual hashes, dimensions, and exact OCR. Codex visually inspected the 600-pixel and 300-/360-pixel preview cards: both titles are legible, inside their dark caption fields, and do not claim to depict a real deed or county instrument. The desk and county-archive compositions are materially distinct from each other and from Article 323's panel/overhead art. The final MDX still needs to reuse the hero for page/OG/Twitter and pass current-byte editorial, factual, compliance, build, and live gates. Do not refer to the source PNGs from public MDX.

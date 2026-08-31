#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '237';
process.env.MRX_ARTICLE_SLUG = 'why-ward-and-loving-cad-share-same-2026-mineral-file-layout-pdf';
process.env.MRX_ARTICLE_TITLE =
  'Why Ward and Loving CAD Share the Same 2026 Mineral File Layout PDF';
process.env.MRX_ARTICLE_KEYWORD = 'Ward and Loving CAD 2026 mineral file layout PDF';
process.env.MRX_HERO_FILENAME =
  'why-ward-and-loving-cad-share-the-same-2026-mineral-file-layout-pdf';
process.env.MRX_INLINE_FILENAME = 'ward-and-loving-cad-2026-mineral-file-layout-pdf';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Why Ward and Loving CAD',
  'Share the Same 2026',
  'Mineral File Layout PDF',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Ward and Loving CAD 2026',
  'mineral file layout PDF',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free wide low-oblique cross-publisher provenance scene with two distinct archive cases holding visually identical blank layout packets, separate blank publisher-route cards, a brass hash token, restrained evidence tools, geological core, and West Texas light on the right beside an uninterrupted navy title field. No readable base text, letters, numbers, maps, county outlines, people, hands, logos, seals, official forms, personal data, property identifiers, values, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down high-key byte-identity versus provenance board with two identical blank page stacks, separate rust and sage source routes, a central fingerprint medallion, blank inference-limit chips, and a geological core above a navy typography band. No low-oblique desk, open archive cases, window, horizon, readable base text, letters, numbers, maps, people, hands, logos, seals, official forms, personal data, property identifiers, values, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

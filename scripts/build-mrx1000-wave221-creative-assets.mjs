#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '221';
process.env.MRX_ARTICLE_SLUG =
  'reeves-cad-2025-map-review-four-passes-and-two-recommendations';
process.env.MRX_ARTICLE_TITLE =
  'Reeves CAD 2025 MAP Review: Four Passes and Two Recommendations';
process.env.MRX_ARTICLE_KEYWORD = 'Reeves CAD 2025 MAP review';
process.env.MRX_HERO_FILENAME =
  'reeves-cad-2025-map-review-four-passes-and-two-recommendations';
process.env.MRX_INLINE_FILENAME = 'reeves-cad-2025-map-review';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Reeves CAD 2025',
  'MAP Review:',
  'Four Passes and Two',
  'Recommendations',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Reeves CAD 2025',
  'MAP review',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique audit-binder scene with four blank review-area tabs, two separate rust action slips, an unlabeled magnifying glass, a limestone desk, and uninterrupted left navy title space. No people, hands, readable base text, letters, numbers, logos, seals, government marks, screenshots, property records, identifiers, maps, money, values, labeled charts, grades, conclusions, approval marks, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead evidence board with four blank square area tiles, two separate rust action lanes, abstract document shapes, and a clean typography zone. No oblique binder, magnifying glass, people, hands, readable base text, letters, numbers, logos, seals, government marks, screenshots, property records, identifiers, maps, money, values, labeled charts, grades, conclusions, approval marks, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

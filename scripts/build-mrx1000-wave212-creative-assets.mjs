#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '212';
process.env.MRX_ARTICLE_SLUG =
  'midland-cad-2026-certified-mineral-roll-zip-file-order-formats-privacy-limits';
process.env.MRX_ARTICLE_TITLE =
  'Midland CAD 2026 Certified Mineral Roll ZIP: File Order, Formats, and Privacy Limits';
process.env.MRX_ARTICLE_KEYWORD = 'Midland CAD certified mineral roll file layout';
process.env.MRX_HERO_FILENAME =
  'midland-cad-2026-certified-mineral-roll-zip-file-order-formats-and-privacy-limits';
process.env.MRX_INLINE_FILENAME = 'midland-cad-certified-mineral-roll-file-layout';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Midland CAD 2026 Certified',
  'Mineral Roll ZIP: File Order,',
  'Formats, and Privacy Limits',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Midland CAD certified mineral',
  'roll file layout',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-oblique archive-control scene with one closed archive case, seven physically distinct blank member objects, the slim blank layout booklet first, a small aggregate recap card, two enormous sealed data-storage objects behind a privacy boundary, and an uninterrupted left navy title field. No readable text, letters, numbers, pseudo-writing, filenames, logos, government seals, watermarks, maps, deeds, owner names, addresses, email symbols, property records, UI screenshots, charts, values, money, checkmarks, people, hands, flags, conclusions, or official affiliation.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict top-down bright limestone control-file workflow with a blank archive tile, layered blank layout booklet, small aggregate recap card, two closed data containers behind privacy bars, and an uninterrupted lower navy keyword band. No reels, low-oblique perspective, front-facing file box, stacked folders in perspective, readable text, letters, numbers, pseudo-writing, filenames, logos, government seals, watermarks, maps, deeds, owner names, addresses, email icons, property records, UI screenshots, charts, values, money, checkmarks, people, hands, flags, conclusions, or official affiliation.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

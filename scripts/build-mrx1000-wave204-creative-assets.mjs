#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '204';
process.env.MRX_ARTICLE_SLUG =
  'martin-cad-2026-mineral-archive-certified-link-vs-preliminary-pdf-label';
process.env.MRX_ARTICLE_TITLE =
  'Martin CAD 2026 Mineral Archive: Certified Link vs Preliminary PDF Label';
process.env.MRX_ARTICLE_KEYWORD = 'Martin CAD 2026 mineral archive label conflict';
process.env.MRX_HERO_FILENAME =
  'martin-cad-2026-mineral-archive-certified-link-vs-preliminary-pdf-label';
process.env.MRX_INLINE_FILENAME = 'martin-cad-2026-mineral-archive-label-conflict';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Martin CAD 2026',
  'Mineral Archive:',
  'Certified Link vs',
  'Preliminary PDF Label',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Martin CAD 2026 mineral archive',
  'label conflict',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-oblique provenance scene with contrasting blank navy and cream evidence sleeves, amber and teal edge tabs, a magnifier crossing their boundary, abstract dotted chain-of-custody marks, pale limestone, studio light, and an uninterrupted navy left title field. No readable base text, letters, numbers, pseudo-writing, dates, names, identifiers, labels, stamps, official forms, seals, logos, record data, people, hands, money, maps, rigs, courthouses, legal symbols, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down source-comparison scene with one blank browser-window card, one blank PDF card, an open empty evidence-log notebook, amber and teal status bands, dotted connectors, pale limestone, and an uninterrupted lower navy keyword band. No low-oblique sleeves or magnifier, readable base text, letters, numbers, pseudo-writing, dates, names, identifiers, labels, stamps, official forms, seals, logos, record data, people, hands, money, maps, rigs, courthouses, legal symbols, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

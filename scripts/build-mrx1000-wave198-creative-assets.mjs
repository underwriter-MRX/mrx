#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '198';
process.env.MRX_ARTICLE_SLUG =
  'karnes-cad-2026-certified-mineral-roll-zip-seven-member-container-index';
process.env.MRX_ARTICLE_TITLE =
  'Karnes CAD 2026 Certified Mineral Roll ZIP: Seven-Member Container Index';
process.env.MRX_ARTICLE_KEYWORD = 'Karnes CAD 2026 certified mineral roll ZIP';
process.env.MRX_HERO_FILENAME =
  'karnes-cad-2026-certified-mineral-roll-zip-seven-member-container-index';
process.env.MRX_INLINE_FILENAME = 'karnes-cad-2026-certified-mineral-roll-zip';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Karnes CAD 2026',
  'Certified Mineral Roll ZIP:',
  'Seven-Member',
  'Container Index',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Karnes CAD 2026 certified',
  'mineral roll ZIP',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free three-quarter archival still life with seven separate unlabeled cream sleeves standing vertically in a brushed-steel library divider, one closed navy removable-media case, one brass verification clip, warm window light, and an uninterrupted navy left title field. No readable base text, letters, numbers, dates, filenames, labels, county names, official form, seal, logo, map, property, person, hand, money, chart, graph, arrow, government mark, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned isometric diagonal staircase of seven separate sealed unlabeled cream envelopes on pale limestone, with one compact navy verification case, one brass magnifier, warm natural light, and an uninterrupted lower navy keyword band. No vertical divider, closed archive case composition, overhead tile ring, readable base text, letters, numbers, dates, filenames, labels, county names, official form, seal, logo, map, property, person, hand, money, chart, graph, arrow, government mark, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

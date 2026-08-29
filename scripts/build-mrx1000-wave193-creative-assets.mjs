#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '193';
process.env.MRX_ARTICLE_SLUG =
  'howard-cad-2026-certified-mineral-roll-zip-16-member-pacs-export-container-index';
process.env.MRX_ARTICLE_TITLE =
  'Howard CAD 2026 Certified Mineral Roll ZIP: 16-Member PACS Export Container Index';
process.env.MRX_ARTICLE_KEYWORD = 'Howard CAD 2026 certified mineral roll ZIP';
process.env.MRX_HERO_FILENAME =
  'howard-cad-2026-certified-mineral-roll-zip-16-member-pacs-export-container-index';
process.env.MRX_INLINE_FILENAME = 'howard-cad-2026-certified-mineral-roll-zip';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Howard CAD 2026',
  'Certified Mineral Roll ZIP:',
  '16-Member PACS Export',
  'Container Index',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Howard CAD 2026 certified',
  'mineral roll ZIP',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low three-quarter sealed smooth navy outer-archive drum with a continuous unsegmented cream rim, a closed brass integrity clasp, one small sealed outer-container capsule, pale limestone, and an uninterrupted navy left title field. No countable tabs, slots, cards, member tokens, repeated elements, readable base text, letters, numbers, data, filenames, rows, cells, documents, spreadsheets, screen, person, hand, map, money, logo, seal, government mark, official form, screenshot, result, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead outer-container topology board with thirteen blank cream strips in one bounded root zone, a separate three-artifact layout zone containing two blank cards and one sealed navy capsule, brass dividers, pale limestone, and an uninterrupted lower navy keyword band. No perspective drum, readable base text, letters, numbers, filenames, data, rows, cells, records, spreadsheet, person, hand, map, money, logo, seal, government mark, official form, screenshot, result, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

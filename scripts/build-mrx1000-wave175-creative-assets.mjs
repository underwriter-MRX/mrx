#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '175';
process.env.MRX_ARTICLE_SLUG = 'dimmit-cad-2026-certified-mineral-roll-zip-archive-inventory';
process.env.MRX_ARTICLE_TITLE = 'Dimmit CAD 2026 Certified Mineral Roll ZIP Archive Inventory';
process.env.MRX_ARTICLE_KEYWORD = 'Dimmit CAD 2026 certified mineral roll';
process.env.MRX_HERO_FILENAME = 'dimmit-cad-2026-certified-mineral-roll-zip-archive-inventory';
process.env.MRX_INLINE_FILENAME = 'dimmit-cad-2026-certified-mineral-roll';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Dimmit CAD 2026',
  'Certified Mineral',
  'Roll ZIP',
  'Archive Inventory',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Dimmit CAD 2026', 'certified mineral roll']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free three-quarter archive-vault scene with one sealed blank navy data container, thirteen slim blank file tabs arranged in a precise fan, one neutral copper integrity marker, subtle paper and metal textures, and uninterrupted dark left title space. No person, hand, readable text, letter, number, file name, record row, name, address, account, value, money, map, chart, screen, UI, official page, government imagery, seal, signature, logo, badge, result, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead central-directory inventory board with thirteen blank cream file tiles, three intentionally empty outlined slots, a plain navy checksum strip, small neutral copper dividers, geometric blank fields, and an uninterrupted lower navy keyword band. No vault, container, three-quarter view, person, hand, readable text, letter, number, file name, record row, name, address, account, value, money, map, chart, screen, UI, official page, government imagery, seal, signature, logo, badge, result, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

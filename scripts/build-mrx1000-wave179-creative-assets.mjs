#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '179';
process.env.MRX_ARTICLE_SLUG =
  'ector-cad-2026-certified-mineral-appraisal-roll-zip-source-control-record';
process.env.MRX_ARTICLE_TITLE =
  'Ector CAD 2026 Certified Mineral Appraisal Roll ZIP Source-Control Record';
process.env.MRX_ARTICLE_KEYWORD = 'Ector CAD 2026 certified mineral appraisal roll';
process.env.MRX_HERO_FILENAME =
  'ector-cad-2026-certified-mineral-appraisal-roll-zip-source-control-record';
process.env.MRX_INLINE_FILENAME = 'ector-cad-2026-certified-mineral-appraisal-roll';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Ector CAD 2026',
  'Certified Mineral',
  'Appraisal Roll ZIP',
  'Source-Control Record',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Ector CAD 2026 certified',
  'mineral appraisal roll',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-angle source-control scene with one compact closed navy archival transfer lockbox, a brass latch, one blank cream data cartridge in a fitted walnut dock, a clear protective sleeve, and uninterrupted deep-navy left title space. No upright report folio, page dividers, map, paper stack, readable base text, letter, number, label, logo, seal, signature, person, hand, property record, personal data, value, price, tax, appraisal result, offer, money, UI, chart, official page, government mark, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead one-member archive inventory with one sealed blank cream file tile nested inside one rounded navy archive outline, one brass checksum ring, one abstract connector, one transparent integrity gauge, warm limestone, and an uninterrupted lower navy keyword band. No low-angle lockbox, upright folio, page dividers, readable base text, letter, number, label, logo, seal, signature, person, hand, map, property record, personal data, value, price, tax, appraisal result, offer, money, UI, chart, official page, government mark, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

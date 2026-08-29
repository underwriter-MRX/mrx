#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '181';
process.env.MRX_ARTICLE_SLUG =
  'ector-cad-2025-mineral-certified-original-tax-roll-zip-container-inventory';
process.env.MRX_ARTICLE_TITLE =
  'Ector CAD 2025 Mineral Certified Original Tax Roll ZIP Container Inventory';
process.env.MRX_ARTICLE_KEYWORD = 'Ector CAD 2025 mineral original tax roll';
process.env.MRX_HERO_FILENAME =
  'ector-cad-2025-mineral-certified-original-tax-roll-zip-container-inventory';
process.env.MRX_INLINE_FILENAME = 'ector-cad-2025-mineral-original-tax-roll';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Ector CAD 2025',
  'Mineral Certified',
  'Original Tax Roll ZIP',
  'Container Inventory',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Ector CAD 2025 mineral', 'original tax roll']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free side-lit three-quarter archive-carousel scene with exactly three separate blank cream data sleeves in three navy-and-walnut bays, one brass integrity ring, a transparent protective shell, limestone surface, and uninterrupted deep-navy left title space. No lockbox, one-member tile, report folio, rolled plan, seven-card path, readable base text, letter, number, label, logo, seal, signature, person, hand, map, property record, personal data, tax amount, price, value, offer, money, chart, UI, official page, government mark, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead triangular three-member source-control board with exactly three separate blank cream evidence plates, three abstract file-shape tokens, brass connectors to one central navy checksum medallion, one transparent integrity arc, limestone surface, and an uninterrupted lower navy keyword band. No carousel, lockbox, one-member tile, rolled plan, report folio, drawer, seven-card path, readable base text, letter, number, label, logo, seal, signature, person, hand, map, property record, personal data, tax amount, price, value, offer, money, chart axes, UI, official page, government mark, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

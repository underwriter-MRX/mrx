#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '159';
process.env.MRX_ARTICLE_SLUG =
  'form-50-171-separate-taxation-request-field-inventory-crane-mineral-interests';
process.env.MRX_ARTICLE_TITLE =
  'Form 50-171 Separate-Taxation Request Field Inventory for Crane Mineral Interests';
process.env.MRX_ARTICLE_KEYWORD = 'Form 50-171 Crane mineral interest';
process.env.MRX_HERO_FILENAME =
  'form-50-171-separate-taxation-request-field-inventory-for-crane-mineral-interests';
process.env.MRX_INLINE_FILENAME = 'form-50-171-crane-mineral-interest';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Form 50-171',
  'Separate-Taxation',
  'Request Field Inventory',
  'for Crane Mineral Interests',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Form 50-171', 'Crane mineral interest']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique three-quarter eye-level archival source station with a slightly open deep-navy brass file drawer, five blank translucent dividers, an empty unmarked source folio, one mineral core fragment, and restrained brass hardware confined to the right of uninterrupted deep-navy title space. No person, hand, real form, text, letter, number, label, checkbox, signature, date, value, QR code, logo, seal, government emblem, map, screen, deadline, legal conclusion, tax guidance, recommendation, outcome, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead pale-limestone field inventory with five blank translucent acetate leaves in a radial fan around a closed empty evidence pouch and small mineral-core tray, restrained teal arcs and brass rings, above an uninterrupted lower navy keyword band. No furniture, drawer, cabinet, folio, person, hand, real form, text, letter, number, label, checkbox, signature, date, value, QR code, logo, seal, government emblem, map, screen, deadline, legal conclusion, tax guidance, recommendation, outcome, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

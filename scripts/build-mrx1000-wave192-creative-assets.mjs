#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '192';
process.env.MRX_ARTICLE_SLUG =
  'howard-cad-open-records-request-form-mineral-record-field-inventory';
process.env.MRX_ARTICLE_TITLE =
  'Howard CAD Open Records Request Form: Mineral-Record Field Inventory';
process.env.MRX_ARTICLE_KEYWORD = 'Howard CAD mineral records request form';
process.env.MRX_HERO_FILENAME =
  'howard-cad-open-records-request-form-mineral-record-field-inventory';
process.env.MRX_INLINE_FILENAME = 'howard-cad-mineral-records-request-form';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Howard CAD Open Records',
  'Request Form:',
  'Mineral-Record Field',
  'Inventory',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Howard CAD mineral',
  'records request form',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low three-quarter blank request-folder scene with unlabeled ivory field tabs, a separate sealed navy privacy capsule, three abstract delivery-route tokens, pale limestone, and an uninterrupted navy left title field. No readable base text, letters, numbers, personal data, name, phone, address, email, signature, property ID, account, logo, seal, government mark, official form, screenshot, person, hand, map, money, value, result, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead four-zone blank field-classification board with separate cream cards, navy dividers, brass pins, three geometric delivery tokens, a closed frosted privacy capsule outside the request-scope zone, pale limestone, and an uninterrupted lower navy keyword band. No perspective folder, readable base text, letters, numbers, personal data, name, phone, address, email, signature, property ID, account, logo, seal, government mark, official form, screenshot, person, hand, map, money, value, result, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

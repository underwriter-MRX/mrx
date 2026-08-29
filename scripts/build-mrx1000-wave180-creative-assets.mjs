#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '180';
process.env.MRX_ARTICLE_SLUG =
  'ector-cad-2027-2028-reappraisal-plan-oil-and-gas-section-source-locator';
process.env.MRX_ARTICLE_TITLE =
  'Ector CAD 2027-2028 Reappraisal Plan Oil and Gas Section Source Locator';
process.env.MRX_ARTICLE_KEYWORD = 'Ector CAD 2027-2028 oil and gas reappraisal plan';
process.env.MRX_HERO_FILENAME =
  'ector-cad-2027-2028-reappraisal-plan-oil-and-gas-section-source-locator';
process.env.MRX_INLINE_FILENAME = 'ector-cad-2027-2028-oil-and-gas-reappraisal-plan';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Ector CAD 2027-2028',
  'Reappraisal Plan',
  'Oil and Gas Section',
  'Source Locator',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Ector CAD 2027-2028',
  'oil and gas reappraisal plan',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique three-quarter archival plan-drawer scene with one long horizontal deep-navy drawer, one blank cream rolled plan sheet held by two brass end clips, five blank navy page-index tabs, one clear page window, walnut and limestone accents, and uninterrupted deep-navy left title space. No lockbox, upright folio, book, map, readable base text, letter, number, label, logo, seal, signature, person, hand, property record, personal data, value, price, tax, appraisal result, offer, money, UI, chart, official page, government mark, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead seven-card page-locator path across pale limestone with one brass ring marker, one separate navy section-divider tile, abstract connector lines, one transparent source token, and an uninterrupted lower navy keyword band. No drawer, lockbox, folio, book, rolled sheet, perspective scene, readable base text, letter, number, label, logo, seal, signature, person, hand, map, property record, personal data, value, price, tax, appraisal result, offer, money, UI, chart, official page, government mark, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '177';
process.env.MRX_ARTICLE_SLUG = 'ector-cad-2026-mineral-appraisal-parameters-source-index';
process.env.MRX_ARTICLE_TITLE = 'Ector CAD 2026 Mineral Appraisal Parameters Source Index';
process.env.MRX_ARTICLE_KEYWORD = 'Ector CAD 2026 mineral appraisal parameters';
process.env.MRX_HERO_FILENAME = 'ector-cad-2026-mineral-appraisal-parameters-source-index';
process.env.MRX_INLINE_FILENAME = 'ector-cad-2026-mineral-appraisal-parameters';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Ector CAD 2026',
  'Mineral Appraisal',
  'Parameters',
  'Source Index',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Ector CAD 2026 mineral',
  'appraisal parameters',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free three-quarter archival reading desk with one thick navy appraisal-parameters folio, one blank cream source-index card, one unlabeled embossed Texas outline, restrained divider tabs, a brass page marker, and uninterrupted deep-navy left title space. No readable base text, letter, number, logo, seal, signature, person, hand, property record, price, tax result, appraisal result, offer, money, UI, chart, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead source-map workspace with one abstract blank browser-route card, one closed blank cream report stack, unlabeled section tabs, one geometric page-index grid, a magnifier, a digit-free page counter, and an uninterrupted lower navy keyword band. No oblique folio hero composition, readable base text, letter, number, logo, seal, signature, person, hand, property record, price, tax result, appraisal result, offer, money, UI, numerical schedule, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

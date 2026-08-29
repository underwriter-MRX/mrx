#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '176';
process.env.MRX_ARTICLE_SLUG =
  'dimmit-cad-2025-mass-appraisal-report-mineral-responsibility-source-map';
process.env.MRX_ARTICLE_TITLE =
  'Dimmit CAD 2025 Mass Appraisal Report Mineral Responsibility Source Map';
process.env.MRX_ARTICLE_KEYWORD = 'Dimmit CAD mineral appraisal responsibility';
process.env.MRX_HERO_FILENAME =
  'dimmit-cad-2025-mass-appraisal-report-mineral-responsibility-source-map';
process.env.MRX_INLINE_FILENAME = 'dimmit-cad-mineral-appraisal-responsibility';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Dimmit CAD 2025',
  'Mass Appraisal Report',
  'Mineral Responsibility',
  'Source Map',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Dimmit CAD mineral',
  'appraisal responsibility',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free three-quarter appraisal-document library scene with one closed blank navy report folio, three blank cream divider tabs, a neutral copper page locator, a round integrity token, and uninterrupted dark left title space. No person, hand, readable base text, letter, number, filename, UI, screen, chart, map, property record, owner name, address, account, value, money, official page, government imagery, seal, signature, logo, badge, result, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead source-map workbench with three large blank cream page cards, simple unlabeled geometric markers, thin copper connector rules, one blank navy responsibility block, and an uninterrupted lower navy keyword band. No closed book, binder, library shelf, oblique perspective, person, hand, readable base text, letter, number, filename, UI, screen, chart, map, property record, owner name, address, account, value, money, official page, government imagery, seal, signature, logo, badge, result, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '252';
process.env.MRX_ARTICLE_SLUG = 'north-dakota-mineral-rights-probate-deeds-form-11-vs-form-12';
process.env.MRX_ARTICLE_TITLE = 'North Dakota Mineral Rights Probate Deeds: Form 11 vs. Form 12';
process.env.MRX_ARTICLE_KEYWORD = 'North Dakota probate deed records';
process.env.MRX_HERO_FILENAME = 'north-dakota-mineral-rights-probate-deeds-form-11-vs-form-12';
process.env.MRX_INLINE_FILENAME = 'north-dakota-probate-deed-records';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave252-creative-sources/probate-two-path-hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave252-creative-sources/county-record-archive-inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'North Dakota Mineral',
  'Rights Probate Deeds:',
  'Form 11 vs. Form 12',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['North Dakota probate', 'deed records']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '40';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Original text-free sunlit stone-table still life with one unlabeled archival box, two separate blank paper portfolios, northern-plains window, and left negative space. No real deed, labels, numbers, official marks, signatures, forms, or conclusions.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct text-free eye-level county-record archive with wooden index drawers, one blank buff folder partly pulled out, and clear lower caption area. No labels, forms, real references, official marks, signatures, or conclusions.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

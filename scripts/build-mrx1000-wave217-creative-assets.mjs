#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '217';
process.env.MRX_ARTICLE_SLUG =
  'pecos-cad-oil-and-gas-review-infrequent-sales-and-multi-site-limits';
process.env.MRX_ARTICLE_TITLE =
  'Pecos CAD Oil and Gas Review: Infrequent Sales and Multi-Site Limits';
process.env.MRX_ARTICLE_KEYWORD = 'Pecos CAD oil and gas appraisal review';
process.env.MRX_HERO_FILENAME =
  'pecos-cad-oil-and-gas-review-infrequent-sales-and-multi-site-limits';
process.env.MRX_INLINE_FILENAME = 'pecos-cad-oil-and-gas-appraisal-review';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Pecos CAD Oil and Gas',
  'Review: Infrequent Sales',
  'and Multi-Site Limits',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Pecos CAD oil and gas', 'appraisal review']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free documentary appraisal-review desk with a reappraisal-plan binder, tract map, review pages, a restrained distant West Texas oil-field context, and uninterrupted left title field. No logos, seals, agency marks, owner or account records, money, values, tax amounts, rankings, results, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead cream evidence workspace with year-to-year review cards, bundled tract-map sheets, one separate single-property appraisal folder, a magnifying glass, calculator, and uninterrupted lower keyword band. No people, perspective hero scene, window, pumpjack landscape, logos, seals, agency marks, owner or account records, money, values, tax amounts, rankings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '233';
process.env.MRX_ARTICLE_SLUG =
  'upton-cad-2024-category-g-table-g1-g1c-g-item-value-reconciliation';
process.env.MRX_ARTICLE_TITLE =
  'Upton CAD 2024 Category G Table: G1, G1C, and G* Item and Value Reconciliation';
process.env.MRX_ARTICLE_KEYWORD = 'Upton CAD 2024 Category G table';
process.env.MRX_HERO_FILENAME =
  'upton-cad-2024-category-g-table-g1-g1c-and-g-item-and-value-reconciliation';
process.env.MRX_INLINE_FILENAME = 'upton-cad-2024-category-g-table';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Upton CAD 2024',
  'Category G Table:',
  'G1, G1C, and G*',
  'Item and Value',
  'Reconciliation',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Upton CAD 2024',
  'Category G table',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low three-quarter records desk with a navy annual-report binder, three blank brass row tabs, an adding machine with blank paper, and an abstract West Texas contour sheet. The left field is reserved for deterministic typography. No readable base text, numbers, names, logos, seals, official forms, property identifiers, prices, findings, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict top-down three-row reconciliation worksheet with blank colored blocks, three wooden counting trays, a blank calculator, and separate subtotal and report-total paper stacks above a navy typography band. No binder, tabs, readable base text, numbers, names, logos, seals, official forms, property identifiers, prices, findings, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

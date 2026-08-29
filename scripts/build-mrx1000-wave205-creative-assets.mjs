#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '205';
process.env.MRX_ARTICLE_SLUG =
  'martin-cad-2025-category-g-row-oil-gas-parcel-count-and-market-value-boundary';
process.env.MRX_ARTICLE_TITLE =
  'Martin CAD 2025 Category G Row: Oil & Gas Parcel Count and Market-Value Boundary';
process.env.MRX_ARTICLE_KEYWORD = 'Martin CAD 2025 Category G parcel count';
process.env.MRX_HERO_FILENAME =
  'martin-cad-2025-category-g-row-oil-and-gas-parcel-count-and-market-value-boundary';
process.env.MRX_INLINE_FILENAME = 'martin-cad-2025-category-g-parcel-count';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Martin CAD 2025',
  'Category G Row:',
  'Oil &amp; Gas Parcel Count',
  'and Market-Value Boundary',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Martin CAD 2025 Category G',
  'parcel count',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low-oblique report-table scene with a cream scanned-report stack, one blank aggregate row, two unlabeled numeric-column shapes, a blue category tab, brass straightedge, pale limestone, and an uninterrupted navy left title field. No readable base text, letters, numbers, pseudo-writing, dates, names, identifiers, labels, stamps, official forms, seals, logos, record data, people, hands, money, maps, rigs, courthouses, legal symbols, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down aggregate-row evidence worksheet with three blank geometric fields, dotted source-to-count-to-value connectors, a magnifier, blue and amber evidence tabs, pale limestone, and an uninterrupted lower navy keyword band. No low-oblique report stack, brass ruler, readable base text, letters, numbers, pseudo-writing, dates, names, identifiers, labels, stamps, official forms, seals, logos, record data, people, hands, money, maps, rigs, courthouses, legal symbols, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

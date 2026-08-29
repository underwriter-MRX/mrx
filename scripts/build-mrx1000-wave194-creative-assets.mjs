#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '194';
process.env.MRX_ARTICLE_SLUG =
  'karnes-cad-2024-annual-report-category-g-parcel-and-ratio-study-table-crosswalk';
process.env.MRX_ARTICLE_TITLE =
  'Karnes CAD 2024 Annual Report: Category G Parcel and Ratio-Study Table Crosswalk';
process.env.MRX_ARTICLE_KEYWORD = 'Karnes CAD 2024 annual report Category G';
process.env.MRX_HERO_FILENAME =
  'karnes-cad-2024-annual-report-category-g-parcel-and-ratio-study-table-crosswalk';
process.env.MRX_INLINE_FILENAME = 'karnes-cad-2024-annual-report-category-g';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Karnes CAD 2024',
  'Annual Report: Category G',
  'Parcel and Ratio-Study',
  'Table Crosswalk',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Karnes CAD 2024 annual',
  'report Category G',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free low three-quarter evidence scene with an upright cream annual-report folio, two separate blank table windows, one brass page-reference bridge, a small navy marker, pale limestone, and an uninterrupted navy left title field. No readable base text, letters, numbers, data, dollar figures, official form, seal, logo, county outline, map, well, rig, person, hand, money, chart, graph, arrow, computer screen, government mark, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict-overhead crosswalk workspace with two separate diagonal blank evidence-table slabs, different abstract ruled structures, a central brass page locator, a small navy reference marker, pale limestone, and an uninterrupted lower navy keyword band. No upright book, front-facing perspective, readable base text, letters, numbers, data, dollar figures, official form, seal, logo, county outline, map, well, rig, person, hand, money, chart, graph, arrow, computer screen, government mark, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

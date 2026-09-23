#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '253';
process.env.MRX_ARTICLE_SLUG = 'how-to-check-federal-mineral-reservations-in-wyoming';
process.env.MRX_ARTICLE_TITLE = 'How to Check Federal Mineral Reservations in Wyoming';
process.env.MRX_ARTICLE_KEYWORD = 'Wyoming federal mineral estate records';
process.env.MRX_HERO_FILENAME = 'how-to-check-federal-mineral-reservations-in-wyoming';
process.env.MRX_INLINE_FILENAME = 'wyoming-federal-mineral-estate-records';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave253-creative-sources/wyoming-high-plains-hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave253-creative-sources/blank-record-research-inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'How to Check Federal',
  'Mineral Reservations',
  'in Wyoming',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Wyoming federal mineral',
  'estate records',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '40';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Original text-free Wyoming high-plains landscape with sage, distant mountains and generous left negative space. No parcel claim, record, labels, official marks or conclusions.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct text-free overhead research desk with blank paper and folder, unmarked straightedge and magnifier. No real record, labels, official marks, signatures or conclusions.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

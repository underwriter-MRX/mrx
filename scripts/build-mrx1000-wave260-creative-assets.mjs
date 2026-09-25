#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '260';
process.env.MRX_ARTICLE_SLUG =
  'where-can-i-find-ohio-mineral-deeds-and-leases-before-a-title-review';
process.env.MRX_ARTICLE_TITLE =
  'Where Can I Find Ohio Mineral Deeds and Leases Before a Title Review?';
process.env.MRX_ARTICLE_KEYWORD = 'Ohio mineral deeds and leases';
process.env.MRX_HERO_FILENAME = process.env.MRX_ARTICLE_SLUG;
process.env.MRX_INLINE_FILENAME = 'ohio-mineral-deeds-and-leases';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave260-creative-sources/ohio-recorder-hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave260-creative-sources/ohio-recorder-inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Where Can I Find',
  'Ohio Mineral Deeds',
  'and Leases Before a',
  'Title Review?',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Ohio mineral deeds',
  'and leases',
]);
process.env.MRX_HERO_BAND_POSITION = 'right';
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '39';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Text-free Ohio county-recorder research desk with an unmarked bound official-record volume and plain folder on the left, Ohio farmland seen through a window, dark right-side negative space. No readable data, names, numbers, logos, seals, or real instrument.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Distinct text-free overhead archival comparison of two blank document sleeves, folded unmarked deed-like and lease-like papers, and a magnifying glass on a slate tabletop with a dark lower caption band. No readable data, identifiers, seals, logos, or real instrument.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

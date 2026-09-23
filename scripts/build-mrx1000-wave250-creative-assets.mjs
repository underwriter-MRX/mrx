#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '250';
process.env.MRX_ARTICLE_SLUG =
  'oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes';
process.env.MRX_ARTICLE_TITLE =
  'Oklahoma Mineral Escrow and Unclaimed Property: Two Search Routes';
process.env.MRX_ARTICLE_KEYWORD =
  'Oklahoma mineral escrow and unclaimed property search';
process.env.MRX_HERO_FILENAME =
  'oklahoma-mineral-escrow-and-unclaimed-property-two-search-routes';
process.env.MRX_INLINE_FILENAME =
  'oklahoma-mineral-escrow-and-unclaimed-property-search';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Oklahoma Mineral Escrow',
  'and Unclaimed Property:',
  'Two Search Routes',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Oklahoma mineral escrow and',
  'unclaimed property search',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned conceptual layered-paper illustration: two contrasting research paths approach a neutral blank folder on the right; empty dark navy title field on the left. No text, maps, official marks, real records, values, or conclusions.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct three-quarter still life of a blank two-column archival card index on slate stone with two colored tabs; empty dark navy lower text band. No text, agency marks, real records, people, money, or conclusions.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '254';
process.env.MRX_ARTICLE_SLUG =
  'how-to-compare-a-west-virginia-oil-and-gas-tax-account-with-a-mineral-buyer-letter';
process.env.MRX_ARTICLE_TITLE =
  'How to Compare a West Virginia Oil and Gas Tax Account With a Mineral Buyer Letter';
process.env.MRX_ARTICLE_KEYWORD = 'West Virginia tax account and buyer letter';
process.env.MRX_HERO_FILENAME =
  'how-to-compare-a-west-virginia-oil-and-gas-tax-account-with-a-mineral-buyer-letter';
process.env.MRX_INLINE_FILENAME = 'west-virginia-tax-account-and-buyer-letter';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave254-creative-sources/west-virginia-foothills-hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave254-creative-sources/blank-record-sources-inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'How to Compare a',
  'West Virginia Oil and Gas',
  'Tax Account With a',
  'Mineral Buyer Letter',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'West Virginia tax account',
  'and buyer letter',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '35';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Original text-free West Virginia Appalachian foothills landscape with soft morning light and generous left negative space. No parcel claim, map, labels, documents, official marks, people, or conclusions.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct text-free overhead research desk with three entirely blank papers, folder, pencil, and magnifier. No real notice, records, text, official marks, signatures, numbers, or conclusions.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

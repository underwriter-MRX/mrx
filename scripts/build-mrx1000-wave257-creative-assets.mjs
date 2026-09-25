#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '257';
process.env.MRX_ARTICLE_SLUG =
  'can-louisiana-omr-records-prove-my-private-mineral-lease';
process.env.MRX_ARTICLE_TITLE =
  'Can Louisiana OMR Records Prove My Private Mineral Lease?';
process.env.MRX_ARTICLE_KEYWORD = 'Louisiana parish conveyance records';
process.env.MRX_HERO_FILENAME = process.env.MRX_ARTICLE_SLUG;
process.env.MRX_INLINE_FILENAME = 'louisiana-parish-conveyance-records';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave257-creative-sources/louisiana-omr-parish-records-hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave257-creative-sources/louisiana-omr-parish-records-inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Can Louisiana OMR',
  'Records Prove My',
  'Private Mineral Lease?',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Louisiana parish',
  'conveyance records',
]);
process.env.MRX_HERO_BAND_POSITION = 'right';
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '39';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Original text-free photorealistic-natural editorial still life: a quiet archival reading-room desk with one plain navy state-file folder and a separate unmarked aged ledger on the left, soft humid southern daylight, and dark negative space on the right. No people, readable text, numbers, logos, seals, maps, signatures, ownership or title conclusion.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Distinct text-free strict-overhead pale archival flat lay: separate generic muted-blue and cream document stacks with a blank index card and magnifying glass above an uncluttered lower caption zone. No people, readable text, numbers, logos, seals, maps, signatures, ownership or title conclusion.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

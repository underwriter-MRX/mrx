#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '264';
process.env.MRX_ARTICLE_SLUG =
  'does-wyoming-set-the-royalty-rate-in-my-private-oil-and-gas-lease';
process.env.MRX_ARTICLE_TITLE =
  'Does Wyoming Set the Royalty Rate in My Private Oil and Gas Lease?';
process.env.MRX_ARTICLE_KEYWORD = 'Wyoming private lease royalty rate';
process.env.MRX_HERO_FILENAME = process.env.MRX_ARTICLE_SLUG;
process.env.MRX_INLINE_FILENAME = 'wyoming-private-lease-royalty-rate';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave264-creative-qa/does-wyoming-set-the-royalty-rate-in-my-private-oil-and-gas-lease/hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave264-creative-qa/does-wyoming-set-the-royalty-rate-in-my-private-oil-and-gas-lease/inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Does Wyoming Set',
  'the Royalty Rate in',
  'My Private Oil and',
  'Gas Lease?',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Wyoming private lease',
  'royalty rate',
]);
process.env.MRX_HERO_BAND_POSITION = 'left';
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '42';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Text-free horizontal Wyoming high-plains landscape at dusk, distant oil pumpjack and closed unmarked field notebook at the far right, dark left negative space; no papers, figures, words, logos, seals or rate claims.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Distinct text-free horizontal eye-level archival-shelf photograph with three plain unmarked binders at left, brass magnifier, dark right wall; no real records, figures, words, logos, seals or rate claims.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

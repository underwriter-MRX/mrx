#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '267';
process.env.MRX_ARTICLE_SLUG =
  'what-information-does-wyoming-require-for-oil-and-gas-royalty-payments';
process.env.MRX_ARTICLE_TITLE =
  'What Information Does Wyoming Require for Oil and Gas Royalty Payments?';
process.env.MRX_ARTICLE_KEYWORD = 'Wyoming royalty payment information checklist';
process.env.MRX_HERO_FILENAME = process.env.MRX_ARTICLE_SLUG;
process.env.MRX_INLINE_FILENAME = 'wyoming-royalty-payment-information-checklist';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave267-creative-qa/what-information-does-wyoming-require-for-oil-and-gas-royalty-payments/hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave267-creative-qa/what-information-does-wyoming-require-for-oil-and-gas-royalty-payments/inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'What Information Does',
  'Wyoming Require for',
  'Oil and Gas Royalty',
  'Payments?',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Wyoming royalty payment',
  'information checklist',
]);
process.env.MRX_HERO_BAND_POSITION = 'right';
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '40';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Text-free editorial Wyoming oil-and-gas payment research scene: plain unmarked envelope and entirely blank statement pages on a weathered indoor desk, distant high-plains drilling landscape through a window, dark navy right negative space; no people, text, numbers, real forms, signatures, logos, seals or conclusions.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Text-free strict overhead view of three separate entirely blank paper surfaces suggesting a stub, attachment and monthly detail, with a plain pencil and paper clips on a wooden table and deep navy negative space; no people, text, numbers, real forms, signatures, logos, seals or conclusions.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

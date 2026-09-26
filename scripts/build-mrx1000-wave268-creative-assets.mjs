#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '268';
process.env.MRX_ARTICLE_SLUG =
  'when-can-a-wyoming-payor-accumulate-a-small-royalty-payment';
process.env.MRX_ARTICLE_TITLE =
  'When Can a Wyoming Payor Accumulate a Small Royalty Payment?';
process.env.MRX_ARTICLE_KEYWORD = 'Wyoming small royalty payment timing';
process.env.MRX_HERO_FILENAME = process.env.MRX_ARTICLE_SLUG;
process.env.MRX_INLINE_FILENAME = 'wyoming-small-royalty-payment-timing';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave268-creative-qa/when-can-a-wyoming-payor-accumulate-a-small-royalty-payment/hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave268-creative-qa/when-can-a-wyoming-payor-accumulate-a-small-royalty-payment/inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'When Can a Wyoming',
  'Payor Accumulate a',
  'Small Royalty',
  'Payment?',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Wyoming small royalty',
  'payment timing',
]);
process.env.MRX_HERO_BAND_POSITION = 'right';
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '40';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Text-free close oblique editorial photograph of one unmarked closed envelope and an unnumbered brass pocket watch on dark slate and muted sandstone, deep-navy negative space on right; no landscape, desk window, people, text, numbers, currency, logos, seals, or fake evidence.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Text-free top-down pale stone scene with a blank grid calendar, two separate blank cards and an unmarked closed envelope, quiet lower band for later exact phrase; no landscape, oilfield, dark desk, people, text, numbers, currency, logos, seals, or fake evidence.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

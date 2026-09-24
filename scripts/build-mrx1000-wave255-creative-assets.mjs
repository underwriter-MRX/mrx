#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '255';
process.env.MRX_ARTICLE_SLUG =
  'how-to-check-a-texas-mineral-ownership-report-before-comparing-a-buyer-offer';
process.env.MRX_ARTICLE_TITLE =
  'How to Check a Texas Mineral Ownership Report Before Comparing a Buyer Offer';
process.env.MRX_ARTICLE_KEYWORD = 'Texas mineral ownership report';
process.env.MRX_HERO_FILENAME = process.env.MRX_ARTICLE_SLUG;
process.env.MRX_INLINE_FILENAME = 'texas-mineral-ownership-report';
process.env.MRX_HERO_SOURCE_PATH =
  'artifacts/mrx1000-wave255-creative-sources/texas-ownership-report-hero-base.png';
process.env.MRX_INLINE_SOURCE_PATH =
  'artifacts/mrx1000-wave255-creative-sources/texas-ownership-report-inline-base.png';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'How to Check a Texas',
  'Mineral Ownership Report',
  'Before Comparing a',
  'Buyer Offer',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Texas mineral',
  'ownership report',
]);
process.env.MRX_HERO_BAND_POSITION = 'right';
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '34';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'Original text-free editorial tabletop with an unbranded ownership report packet, county deed copy, blank worksheet and pencil on the left, with deep navy negative space on the right. No real tract, personal information, official marks, text, numbers, or title conclusion.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Distinct text-free low three-quarter comparison worksheet between an unbranded report folder and county record copy, with blank columns and unresolved note marker. No names, real tract, text, numbers, official marks, or legal conclusion.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

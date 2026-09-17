#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '249';
process.env.MRX_ARTICLE_SLUG =
  'how-to-locate-a-texas-mineral-interest-from-an-inherited-royalty-statement';
process.env.MRX_ARTICLE_TITLE =
  'How to Locate a Texas Mineral Interest From an Inherited Royalty Statement';
process.env.MRX_ARTICLE_KEYWORD =
  'locate inherited Texas mineral interest from a royalty statement';
process.env.MRX_HERO_FILENAME =
  'how-to-locate-a-texas-mineral-interest-from-an-inherited-royalty-statement';
process.env.MRX_INLINE_FILENAME =
  'locate-inherited-texas-mineral-interest-from-a-royalty-statement';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'How to Locate a Texas',
  'Mineral Interest From an',
  'Inherited Royalty',
  'Statement',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'locate inherited Texas mineral interest',
  'from a royalty statement',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned low three-quarter editorial desk with a blank inherited royalty statement, cream envelope, abstract decorative Texas map, color tabs and one hand on the right; open dark navy title field on the left. No readable base text, amounts, addresses, actual tract, logos, seals, conclusions or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct people-free strict overhead flat-lay with blank statement, payor card, regulator reference card, county-record folder and pencil on a pale surface; broad dark navy lower typography band. No angled desk, hand, envelope, map, readable base text, numbers, real property, logos, seals, conclusions or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

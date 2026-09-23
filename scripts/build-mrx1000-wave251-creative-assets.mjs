#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '251';
process.env.MRX_ARTICLE_SLUG = 'north-dakota-inherited-royalty-questions-records-and-ombudsman';
process.env.MRX_ARTICLE_TITLE = 'North Dakota Inherited Royalty Questions: Records and Ombudsman';
process.env.MRX_ARTICLE_KEYWORD = 'North Dakota inherited royalty questions';
process.env.MRX_HERO_FILENAME = 'north-dakota-inherited-royalty-questions-records-and-ombudsman';
process.env.MRX_INLINE_FILENAME = 'north-dakota-inherited-royalty-questions';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'North Dakota Inherited',
  'Royalty Questions:',
  'Records and Ombudsman',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['North Dakota inherited', 'royalty questions']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_FONT_SIZE = '40';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_BAND_POSITION = 'bottom';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned conceptual front-facing still life of four unlabeled translucent paper and glass panels in northern prairie light, with a dark navy left title field. No text, maps, official marks, real records, people, amounts, arrows, or conclusions.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct strict-overhead four-station research still life on pale stone, with a folded paper sleeve, non-geographic grid tile, copper conversation-loop shape, stone archival tab, and clear lower caption area. No text, agency marks, real records, people, amounts, maps, or conclusions.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

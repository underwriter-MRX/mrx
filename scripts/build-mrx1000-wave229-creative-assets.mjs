#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '229';
process.env.MRX_ARTICLE_SLUG = 'texas-rrc-field-classification-codes-associated-field-numbers';
process.env.MRX_ARTICLE_TITLE =
  'Texas RRC Field Classification Codes: G, O, B, and Associated Field Numbers';
process.env.MRX_ARTICLE_KEYWORD = 'Texas RRC field classification codes';
process.env.MRX_HERO_FILENAME =
  'texas-rrc-field-classification-codes-g-o-b-and-associated-field-numbers';
process.env.MRX_INLINE_FILENAME = 'texas-rrc-field-classification-codes';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Texas RRC Field',
  'Classification Codes:',
  'G, O, B, and Associated',
  'Field Numbers',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Texas RRC field', 'classification codes']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free angled sunlit archival classification room with three transparent unlabeled vertical sorting trays, a warm ivory, copper, and muted teal palette, a slender brass pointer bridge, a separate blank eight-position record tile, and an uninterrupted navy title field on the left. No people, hands, readable base text, letters, numbers, arrows, charts, maps, Texas silhouette, logos, seals, agency marks, official forms, findings, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead graphite-blue technical audit mat with one blank source-record pocket, two parallel unlabeled row sleeves, three neutral classification tokens, a separate copper pointer cord, a detached blank eight-cell identifier rail, and a clean lower navy typography band. No room perspective, vertical trays, sunlight window, marble, filing cards, people, hands, readable base text, letters, numbers, arrows, charts, maps, Texas silhouette, logos, seals, agency marks, official forms, findings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

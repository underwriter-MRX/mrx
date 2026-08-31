#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '238';
process.env.MRX_ARTICLE_SLUG =
  'ward-cad-2026-mineral-zip-date-register-march-26-july-16-july-23';
process.env.MRX_ARTICLE_TITLE =
  'Ward CAD 2026 Mineral ZIP Date Register: March 26, July 16, and July 23';
process.env.MRX_ARTICLE_KEYWORD = 'Ward CAD 2026 mineral ZIP member dates';
process.env.MRX_HERO_FILENAME =
  'ward-cad-2026-mineral-zip-date-register-march-26-july-16-and-july-23';
process.env.MRX_INLINE_FILENAME = 'ward-cad-2026-mineral-zip-member-dates';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Ward CAD 2026',
  'Mineral ZIP Date Register:',
  'March 26, July 16,',
  'and July 23',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Ward CAD 2026 mineral ZIP',
  'member dates',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free wide low-oblique dark archive-date scene with one sealed black case, seven blank file sleeves, three separate brass date-marker discs, fine evidence lines, and an uninterrupted navy title field. No readable base text, letters, numbers, dates, maps, people, hands, logos, seals, official forms, personal data, property identifiers, values, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down high-key timestamp-evidence board with seven blank file tiles grouped into three abstract time clusters, three blank geometric marker cards, a clockwork loupe, a brass archive token, and a clean lower navy typography band. No low-oblique desk, archive case, readable base text, letters, numbers, dates, maps, people, hands, logos, seals, official forms, personal data, property identifiers, values, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

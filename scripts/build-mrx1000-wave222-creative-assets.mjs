#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '222';
process.env.MRX_ARTICLE_SLUG = 'reeves-county-2025-preliminary-pvs-two-category-g-totals';
process.env.MRX_ARTICLE_TITLE =
  'Reeves County 2025 Preliminary PVS: Two Category G Totals';
process.env.MRX_ARTICLE_KEYWORD = 'Reeves County 2025 preliminary PVS';
process.env.MRX_HERO_FILENAME = 'reeves-county-2025-preliminary-pvs-two-category-g-totals';
process.env.MRX_INLINE_FILENAME = 'reeves-county-2025-preliminary-pvs';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Reeves County 2025',
  'Preliminary PVS:',
  'Two Category G',
  'Totals',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Reeves County 2025',
  'preliminary PVS',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free editorial scene with two separate school-district archive trays on the right, a brass divider, a county-map fragment, two mineral-category markers, and uninterrupted navy title space on the left. No people, hands, logos, seals, flags, readable base text, numbers, watermarks, screens, conclusions, or approval marks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead pale-limestone evidence-routing scene with a preliminary finding envelope, two blank district index cards, a private-property folder separated by a red boundary cord, a magnifying glass, two mineral samples, and a clean lower navy typography band. No dark desk, archive trays, people, hands, logos, seals, flags, readable base text, numbers, watermarks, screens, conclusions, or approval marks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

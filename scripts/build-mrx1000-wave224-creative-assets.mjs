#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '224';
process.env.MRX_ARTICLE_SLUG = 'why-reeves-cad-has-no-2025-ratio-study-worksheet';
process.env.MRX_ARTICLE_TITLE = 'Why Reeves CAD Has No 2025 Ratio-Study Worksheet';
process.env.MRX_ARTICLE_KEYWORD = 'Reeves CAD 2025 ratio-study worksheet';
process.env.MRX_HERO_FILENAME = 'why-reeves-cad-has-no-2025-ratio-study-worksheet';
process.env.MRX_INLINE_FILENAME = 'reeves-cad-2025-ratio-study-worksheet';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Why Reeves CAD Has',
  'No 2025 Ratio-Study',
  'Worksheet',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Reeves CAD 2025',
  'ratio-study worksheet',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free straight-on dark public-record routing desk with blank year tabs, an archival folder, a West Texas outline pin, and uninterrupted navy title space on the left. No people, hands, logos, seals, readable base text, letters, numbers, government marks, fabricated labels, findings, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead bright source-routing workspace with two abstract route cards, blank district-list lines, an unlabeled calendar tab, magnifier, and West Texas county tile above a clean lower typography band. No dark archival-board composition, people, hands, logos, seals, readable base text, letters, numbers, government marks, fabricated labels, findings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

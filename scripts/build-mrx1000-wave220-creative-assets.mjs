#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '220';
process.env.MRX_ARTICLE_SLUG =
  'reeves-county-2024-category-g-worksheets-two-isds-strata-and-ratios';
process.env.MRX_ARTICLE_TITLE =
  'Reeves County 2024 Category G Worksheets: Two ISDs, Strata, and Ratios';
process.env.MRX_ARTICLE_KEYWORD = 'Reeves County Category G worksheets';
process.env.MRX_HERO_FILENAME =
  'reeves-county-2024-category-g-worksheets-two-isds-strata-and-ratios';
process.env.MRX_INLINE_FILENAME = 'reeves-county-category-g-worksheets';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Reeves County 2024',
  'Category G Worksheets:',
  'Two ISDs, Strata,',
  'and Ratios',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Reeves County Category G',
  'worksheets',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free straight-on West Texas public-data review station with two separate upright blank worksheet folios, four blank strata tabs on each folio, paired sample-versus-stratum chips, small unlabeled ratio dials, subtle limestone surface, distant abstract mesa, and uninterrupted left navy title space. No people, hands, readable base text, letters, numbers, logos, seals, government marks, screenshots, maps, property records, property identifiers, money, values, labeled charts, grades, recommendations, conclusions, approval marks, or watermark.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict-overhead pale-limestone evidence field key with two separate blank navy source cards, four parallel unlabeled strata lanes, paired blank local-versus-study tiles, a brass divider, one unlabeled ratio token, and uninterrupted lower navy keyword band. No window, landscape, upright folios, perspective view, people, hands, readable base text, letters, numbers, logos, seals, government marks, screenshots, maps, property records, property identifiers, money, values, labeled charts, grades, recommendations, conclusions, approval marks, or watermark.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

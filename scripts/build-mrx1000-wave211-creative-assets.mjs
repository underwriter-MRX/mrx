#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '211';
process.env.MRX_ARTICLE_SLUG = 'midland-cad-open-records-mineral-files-rolls-notices-source-routes';
process.env.MRX_ARTICLE_TITLE =
  'Midland CAD Open Records Page: Mineral Files, Rolls, and Notices as Separate Source Routes';
process.env.MRX_ARTICLE_KEYWORD = 'Midland CAD mineral files, rolls, and notices';
process.env.MRX_HERO_FILENAME =
  'midland-cad-open-records-page-mineral-files-rolls-and-notices-as-separate-source-routes';
process.env.MRX_INLINE_FILENAME = 'midland-cad-mineral-files-rolls-and-notices';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Midland CAD Open Records Page:',
  'Mineral Files, Rolls, and Notices',
  'as Separate Source Routes',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Midland CAD mineral files,',
  'rolls, and notices',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free dark low-oblique archival routing desk with one blank origin card, three physically separate sealed source lanes, realistic paper and dividers, and an uninterrupted left title field. No readable text, letters, numbers, pseudo-writing, government seals, logos, watermarks, people, hands, owners, properties, account data, real files, maps, deeds, notices, tax forms, charts, values, money, checkmarks, promises, conclusions, or official affiliation.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict top-down bright limestone source-routing map with one blank origin tile, three branching paths, separate roll, preliminary-stack, and sealed-notice motifs behind boundary bars, plus an uninterrupted lower navy keyword band. No dark low-oblique desk, three vertical file boxes, readable text, letters, numbers, pseudo-writing, government seals, logos, watermarks, people, hands, personal data, account records, real files, maps, deeds, tax forms, charts, values, checkmarks, promises, conclusions, or official affiliation.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

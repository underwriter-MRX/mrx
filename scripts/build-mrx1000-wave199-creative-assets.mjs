#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '199';
process.env.MRX_ARTICLE_SLUG =
  'loving-cad-2026-mass-appraisal-report-mineral-assistance-roster-page-crosswalk';
process.env.MRX_ARTICLE_TITLE =
  'Loving CAD 2026 Mass Appraisal Report: Mineral-Assistance Roster Page Crosswalk';
process.env.MRX_ARTICLE_KEYWORD = 'Loving CAD 2026 mineral appraisal assistance roster';
process.env.MRX_HERO_FILENAME =
  'loving-cad-2026-mass-appraisal-report-mineral-assistance-roster-page-crosswalk';
process.env.MRX_INLINE_FILENAME = 'loving-cad-2026-mineral-appraisal-assistance-roster';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Loving CAD 2026',
  'Mass Appraisal Report:',
  'Mineral-Assistance',
  'Roster Page Crosswalk',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Loving CAD 2026 mineral',
  'appraisal assistance roster',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free three-quarter West Texas records-office still life with one closed navy report binder, exactly four separate blank cream roster cards, one brass magnifier, warm limestone, controlled window light, and an uninterrupted navy left title field. No readable base text, letters, numbers, dates, names, roles, identifiers, labels, official forms, seals, logos, property data, people, hands, money, rigs, maps, legal symbols, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down flat lay with two offset blank cream pages joined by a thin brass crosswalk line, exactly four separate blank navy roster tabs, one brass clip, one navy archival pencil, and an uninterrupted lower navy keyword band. No binder, standing cards, room interior, people, hands, magnifier, readable base text, letters, numbers, dates, names, roles, identifiers, labels, official forms, seals, logos, property data, money, rigs, maps, legal symbols, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

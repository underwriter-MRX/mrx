#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '214';
process.env.MRX_ARTICLE_SLUG =
  'midland-cad-2025-2026-mineral-work-calendar-january-1-snapshot-july-certification';
process.env.MRX_ARTICLE_TITLE =
  'Midland CAD 2025-2026 Mineral Work Calendar: January 1 Snapshot to July Certification';
process.env.MRX_ARTICLE_KEYWORD = 'Midland CAD mineral work calendar';
process.env.MRX_HERO_FILENAME =
  'midland-cad-2025-2026-mineral-work-calendar-january-1-snapshot-to-july-certification';
process.env.MRX_INLINE_FILENAME = 'midland-cad-mineral-work-calendar';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Midland CAD 2025-2026',
  'Mineral Work Calendar:',
  'January 1 Snapshot to',
  'July Certification',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Midland CAD mineral work', 'calendar']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free dark navy low-three-quarter archival planning desk with a closed official-plan folio, slim brass timeline rail, blank date tabs, Texas-shaped marker, mineral core sample, subtle geological contours, and uninterrupted left title field. No readable text, letters, numbers, dates, pseudo-writing, logos, seals, watermarks, official affiliation, account records, owner data, values, money, charts, deadlines, completion claims, results, people, or hands.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free bright strict-overhead evidence workflow on warm white drafting paper with seven blank cream cards, a mineral-sample token, thin navy connector, sealed certification folder, transparent ruler, amber data reel, geological cross-section, and uninterrupted lower keyword band. No dark low-angle desk, folio stack, readable text, letters, numbers, dates, pseudo-writing, logos, seals, watermarks, official affiliation, account records, owner data, values, money, charts, deadlines, completion claims, results, people, or hands.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

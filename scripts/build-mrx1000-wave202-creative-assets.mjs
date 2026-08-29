#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '202';
process.env.MRX_ARTICLE_SLUG =
  'loving-cad-2026-mineral-file-layout-pdf-eight-page-position-and-eof-map';
process.env.MRX_ARTICLE_TITLE =
  'Loving CAD 2026 Mineral File Layout PDF: Eight-Page Position and EOF Map';
process.env.MRX_ARTICLE_KEYWORD = 'Loving CAD 2026 mineral file layout PDF';
process.env.MRX_HERO_FILENAME =
  'loving-cad-2026-mineral-file-layout-pdf-eight-page-position-and-eof-map';
process.env.MRX_INLINE_FILENAME = 'loving-cad-2026-mineral-file-layout-pdf';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Loving CAD 2026',
  'Mineral File Layout PDF:',
  'Eight-Page Position and',
  'EOF Map',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Loving CAD 2026 mineral',
  'file layout PDF',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique three-quarter scene with one open navy archival binder, exactly eight staggered blank cream sheets, subtle blank edge tabs, a slim brass ruler, one amber endpoint marker, controlled studio light, and an uninterrupted navy left title field. No readable base text, letters, numbers, dates, names, identifiers, labels, official forms, seals, logos, owner or property data, people, hands, money, maps, rigs, courthouses, legal symbols, decorative pseudo-writing, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down position-map scene with exactly eight separate blank horizontal page bands, navy dividers, one amber vertical trace, two offset endpoint markers, pale stone, and an uninterrupted lower navy keyword band. No oblique binder, staggered sheets, ruler, people, hands, readable base text, letters, numbers, dates, names, identifiers, labels, official forms, seals, logos, owner or property data, monetary figures, maps, rigs, courthouses, decorative pseudo-writing, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

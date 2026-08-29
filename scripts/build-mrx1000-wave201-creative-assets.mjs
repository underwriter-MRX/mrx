#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '201';
process.env.MRX_ARTICLE_SLUG =
  'loving-cad-2026-mineral-recap-pdf-three-page-column-jurisdiction-map';
process.env.MRX_ARTICLE_TITLE =
  'Loving CAD 2026 Mineral Recap PDF: Three-Page Column and Jurisdiction Map';
process.env.MRX_ARTICLE_KEYWORD = 'Loving CAD 2026 mineral recap PDF';
process.env.MRX_HERO_FILENAME =
  'loving-cad-2026-mineral-recap-pdf-three-page-column-and-jurisdiction-map';
process.env.MRX_INLINE_FILENAME = 'loving-cad-2026-mineral-recap-pdf';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Loving CAD 2026',
  'Mineral Recap PDF:',
  'Three-Page Column and',
  'Jurisdiction Map',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Loving CAD 2026 mineral',
  'recap PDF',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free oblique close three-quarter scene with exactly three separate blank cream landscape report sheets arranged as a fanned stepped deck, thin navy edge tabs, small brass paper clips, warm limestone, controlled window light, and an uninterrupted navy left title field. No archive box, standing folders, readable base text, letters, numbers, dates, names, identifiers, labels, official forms, seals, logos, owner or property data, people, hands, money, maps, rigs, courthouses, legal symbols, decorative pseudo-writing, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down flat lay with one abstract three-band page-map board, three separate horizontal cream bands containing only blank geometric column strips, five small blank navy row tabs beside the first band, seven beside each later band, one thin brass locator rule, one navy index marker, warm limestone, and an uninterrupted lower navy keyword band. No oblique fanned sheets, paper clips, archive box, people, hands, readable base text, letters, numbers, dates, names, identifiers, labels, official forms, seals, logos, owner or property data, monetary figures, maps, rigs, courthouses, decorative pseudo-writing, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

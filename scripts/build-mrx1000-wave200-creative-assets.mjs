#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '200';
process.env.MRX_ARTICLE_SLUG =
  'loving-cad-2026-certified-mineral-roll-zip-pdf-txt-csv-member-map';
process.env.MRX_ARTICLE_TITLE =
  'Loving CAD 2026 Certified Mineral Roll ZIP: PDF, TXT, and CSV Member Map';
process.env.MRX_ARTICLE_KEYWORD = 'Loving CAD 2026 certified mineral roll ZIP';
process.env.MRX_HERO_FILENAME =
  'loving-cad-2026-certified-mineral-roll-zip-pdf-txt-and-csv-member-map';
process.env.MRX_INLINE_FILENAME = 'loving-cad-2026-certified-mineral-roll-zip';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Loving CAD 2026',
  'Certified Mineral Roll ZIP:',
  'PDF, TXT, and CSV',
  'Member Map',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Loving CAD 2026 certified',
  'mineral roll ZIP',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free three-quarter evidence scene with an open navy archive box, exactly seven blank file dividers, four cream document stacks, one plain-text strip, one blank spreadsheet grid, brass accents, limestone, controlled window light, and an uninterrupted navy left title field. No readable base text, letters, numbers, dates, names, identifiers, labels, official forms, seals, logos, owner or property data, people, hands, money, rigs, maps, legal symbols, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down flat lay with exactly four blank cream document sheets, one folded plain-text strip, one blank spreadsheet grid, one closed comparison folio, exactly seven blank brass counting discs, one magnifier, one binder clip, limestone, and an uninterrupted lower navy keyword band. No archive box, standing folders, room interior, people, hands, readable base text, letters, numbers, dates, names, identifiers, labels, official forms, seals, logos, owner or property data, money, rigs, maps, legal symbols, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

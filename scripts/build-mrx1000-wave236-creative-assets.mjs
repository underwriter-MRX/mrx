#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '236';
process.env.MRX_ARTICLE_SLUG = 'ward-cad-2026-mineral-recap-83920-items-5829b-gross-value-meaning';
process.env.MRX_ARTICLE_TITLE =
  'Ward CAD 2026 Mineral Recap: What 83,920 Items and $5.829B Gross Value Do and Do Not Mean';
process.env.MRX_ARTICLE_KEYWORD = 'Ward CAD 2026 mineral recap 83,920 items';
process.env.MRX_HERO_FILENAME =
  'ward-cad-2026-mineral-recap-what-83-920-items-and-5-829b-gross-value-do-and-do-not-mean';
process.env.MRX_INLINE_FILENAME = 'ward-cad-2026-mineral-recap-83-920-items';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Ward CAD 2026',
  'Mineral Recap:',
  'What 83,920 Items and',
  '$5.829B Gross Value',
  'Do and Do Not Mean',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify(['Ward CAD 2026 mineral recap', '83,920 items']);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free wide low-oblique Ward recap evidence scene with a sealed navy archive box, seven blank file sleeves, a blank three-page landscape packet, brass evidence tools, geological core, and West Texas light on the right beside an uninterrupted navy title field. No readable base text, letters, numbers, currency symbols, people, hands, logos, seals, official forms, personal data, property identifiers, values, findings, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned strict top-down high-key aggregate-versus-private-value boundary board with many blank ivory index tabs, one sealed navy envelope, one blank offer-folder silhouette, a magnifying lens over a blank source card, seven archive tokens, and a geological core above a navy typography band. No low-oblique desk, desert horizon, archive box, fanned file sleeves, readable base text, letters, numbers, currency symbols, people, hands, logos, seals, official forms, personal data, property identifiers, values, findings, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

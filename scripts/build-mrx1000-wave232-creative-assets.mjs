#!/usr/bin/env node

process.env.MRX_WAVE_NUMBER = '232';
process.env.MRX_ARTICLE_SLUG =
  'upton-cad-open-records-policy-request-response-clarification-charge-states';
process.env.MRX_ARTICLE_TITLE =
  'Upton CAD Open Records Policy: Request, Response, Clarification, and Charge States';
process.env.MRX_ARTICLE_KEYWORD = 'Upton CAD open records policy';
process.env.MRX_HERO_FILENAME =
  'upton-cad-open-records-policy-request-response-clarification-and-charge-states';
process.env.MRX_INLINE_FILENAME = 'upton-cad-open-records-policy';
process.env.MRX_HERO_LINES_JSON = JSON.stringify([
  'Upton CAD Open Records',
  'Policy: Request, Response,',
  'Clarification, and',
  'Charge States',
]);
process.env.MRX_INLINE_LINES_JSON = JSON.stringify([
  'Upton CAD',
  'open records policy',
]);
process.env.MRX_HERO_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_INLINE_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
process.env.MRX_HERO_GENERATION_PROMPT =
  'MRX-owned people-free studio scene with four separate copper-and-navy state gates connected by a blank ivory paper ribbon: intake, response, clarification loop, and charge checkpoint. The right two-thirds contain the process scene and the left third is an uninterrupted deep-navy title field. No readable base text, letters, numbers, people, maps, charts, logos, seals, official forms, property data, findings, conclusions, approval marks, or watermarks.';
process.env.MRX_INLINE_GENERATION_PROMPT =
  'Materially distinct MRX-owned people-free strict top-down scene with two blank document stacks, navy at left and ivory at right, divided by a copper discrepancy spine with one amber stop marker, plus a clean lower navy typography band. No mechanical gates, readable base text, letters, numbers, people, maps, charts, logos, seals, official forms, property data, findings, conclusions, approval marks, or watermarks.';

await import('./build-mrx1000-wave82-creative-assets.mjs');

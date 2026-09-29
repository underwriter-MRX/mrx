import assetManifest from '../../config/page-builder-sop-assets.json' with { type: 'json' };

const replacements = assetManifest.assets;
const altOverrides = {
  '/assets/articles/hero/where-can-i-find-ohio-mineral-deeds-and-leases-before-a-title-review.webp':
    'Ohio deed book beside a farmland window',
  '/assets/articles/inline/existing-wells-vs-future-locations-in-a-dcf-model/existing-wells-future-locations-dcf.webp':
    'Pumpjack and decline curves beside future well slots',
  '/assets/articles/inline/five-key-indicators-that-show-your-mineral-rights-are-ready-for-evaluation/how-do-i-know-if-my-mineral-rights-qualify-for-evaluation.webp':
    'Mineral records, map, and rig on an evaluation board',
  '/assets/articles/inline/get-a-free-mineral-rights-valuation-review-today/free-mineral-rights-valuation-review.webp':
    'Review workbook linked to maps and charts',
};

export function normalizePublicImageAlt(value) {
  return String(value ?? '')
    .replace(
      /^(?:MRX )?article cover (?:with the title|titled) “([^”]+)”\.?$/i,
      'Mineral-rights guide titled “$1”.',
    )
    .replace(/^Distinct\s+/i, '')
    .replace(
      /\s+(?:appears\s+)?beside the exact (?:Article \d+\s+)?article title(?: on a navy panel)?/gi,
      '',
    )
    .replace(/\s+under the exact article title/gi, '')
    .replace(/\s+with the exact article title/gi, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+\./g, '.')
    .trim();
}

export function pageBuilderAssetEvidence(src) {
  return src ? (replacements[src] ?? null) : null;
}

function replacementFor(src) {
  return pageBuilderAssetEvidence(src)?.replacement ?? src;
}

/**
 * Canonical public Page Builder image resolution used by both Astro rendering
 * and the production two-image verifier.
 */
export function resolvePageBuilderImage(image) {
  const resolvedAlt = altOverrides[image.src] ?? normalizePublicImageAlt(image.alt);
  const resolvedSocialAlt =
    altOverrides[image.social_src ?? image.src] ??
    altOverrides[image.src] ??
    (image.social_alt ? normalizePublicImageAlt(image.social_alt) : undefined);
  return {
    ...image,
    src: replacementFor(image.src) ?? image.src,
    alt: resolvedAlt,
    ...(image.social_src ? { social_src: replacementFor(image.social_src) } : {}),
    ...(resolvedSocialAlt ? { social_alt: resolvedSocialAlt } : {}),
  };
}

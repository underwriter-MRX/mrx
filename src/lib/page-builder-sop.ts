import assetManifest from '../../config/page-builder-sop-assets.json';

type ImageLike = {
  src: string;
  alt: string;
  social_src?: string;
  social_alt?: string;
};

type AssetReplacement = {
  replacement: string;
};

const replacements = assetManifest.assets as Record<string, AssetReplacement>;
const altOverrides: Record<string, string> = {
  '/assets/articles/hero/where-can-i-find-ohio-mineral-deeds-and-leases-before-a-title-review.webp':
    'Ohio deed book beside a farmland window',
  '/assets/articles/inline/existing-wells-vs-future-locations-in-a-dcf-model/existing-wells-future-locations-dcf.webp':
    'Pumpjack and decline curves beside future well slots',
  '/assets/articles/inline/five-key-indicators-that-show-your-mineral-rights-are-ready-for-evaluation/how-do-i-know-if-my-mineral-rights-qualify-for-evaluation.webp':
    'Mineral records, map, and rig on an evaluation board',
  '/assets/articles/inline/get-a-free-mineral-rights-valuation-review-today/free-mineral-rights-valuation-review.webp':
    'Review workbook linked to maps and charts',
};

export function normalizePublicImageAlt(value: string): string {
  return value
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

function replacementFor(src: string | undefined): string | undefined {
  if (!src) return src;
  return replacements[src]?.replacement ?? src;
}

/**
 * Apply the public Page Builder SOP at render time so reviewed MDX bytes and
 * article identity hashes remain immutable. The generated manifest contains
 * only verified versioned assets; unknown paths pass through unchanged.
 */
export function resolvePageBuilderImage<T extends ImageLike>(image: T): T {
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

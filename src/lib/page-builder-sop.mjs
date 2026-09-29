import assetManifest from '../../config/page-builder-sop-assets.json' with { type: 'json' };
import imageTextPolicy from '../../config/mrx-image-text-alt-policy.json' with { type: 'json' };

const replacements = assetManifest.assets;
const imageTextAssets = imageTextPolicy.assets;

function policyPath(src) {
  if (!src) return src;
  try {
    return new URL(src, 'https://mineralrightsxchange.com').pathname;
  } catch {
    return String(src).split(/[?#]/)[0];
  }
}

export function pageBuilderAssetEvidence(src) {
  return src ? (replacements[src] ?? null) : null;
}

function replacementFor(src) {
  return pageBuilderAssetEvidence(src)?.replacement ?? src;
}

export function imageTextPolicyEvidence(src) {
  const path = policyPath(src);
  return path ? (imageTextAssets[path] ?? null) : null;
}

export function resolveImageTextAlt(src, fallbackAlt = '') {
  const evidence = imageTextPolicyEvidence(src);
  if (evidence?.classification === 'printed_text') return evidence.exact_text;
  return String(fallbackAlt ?? '');
}

/**
 * Canonical public Page Builder image resolution used by both Astro rendering
 * and the production two-image verifier.
 */
export function resolvePageBuilderImage(image) {
  const resolvedSrc = replacementFor(image.src) ?? image.src;
  const resolvedSocialSrc = image.social_src
    ? (replacementFor(image.social_src) ?? image.social_src)
    : undefined;
  const resolvedAlt = resolveImageTextAlt(resolvedSrc, image.alt);
  const resolvedSocialAlt = image.social_src
    ? resolveImageTextAlt(resolvedSocialSrc, image.social_alt ?? image.alt)
    : undefined;
  return {
    ...image,
    src: resolvedSrc,
    alt: resolvedAlt,
    ...(resolvedSocialSrc ? { social_src: resolvedSocialSrc } : {}),
    ...(resolvedSocialAlt !== undefined ? { social_alt: resolvedSocialAlt } : {}),
  };
}

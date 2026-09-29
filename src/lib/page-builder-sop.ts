import {
  normalizePublicImageAlt,
  resolvePageBuilderImage as resolvePageBuilderImageRuntime,
} from './page-builder-sop.mjs';

type ImageLike = {
  src: string;
  alt: string;
  social_src?: string;
  social_alt?: string;
};

export { normalizePublicImageAlt };

/**
 * Apply the public Page Builder SOP at render time so reviewed MDX bytes and
 * article identity hashes remain immutable. The generated manifest contains
 * only verified versioned assets; unknown paths pass through unchanged.
 */
export function resolvePageBuilderImage<T extends ImageLike>(image: T): T {
  return resolvePageBuilderImageRuntime(image) as T;
}

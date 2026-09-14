import { describe, expect, it } from 'vitest';
import {
  PILLAR_HTML_HEADERS,
  pillarSchemaNodes,
  pillarSchemaParity,
} from '../../scripts/lib/pillar-html-release.mjs';

const org = { '@type': 'Organization', '@id': 'https://mineralrightsxchange.com/#org' };
const page = {
  '@type': 'WebPage',
  '@id': 'https://mineralrightsxchange.com/sell-mineral-rights/#page',
};
const script = (node: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(node)}</script>`;
const built = script({ '@graph': [org, page] });

describe('pillar browser-variant release prevention', () => {
  it('requests the HTML variant transformed by the production overlay', () => {
    expect(PILLAR_HTML_HEADERS.accept).toBe('text/html');
    expect(PILLAR_HTML_HEADERS['cache-control']).toBe('no-cache');
  });
  it('reads every script, graph and top-level array, not merely the first script', () => {
    expect(pillarSchemaNodes(script([{ '@type': 'ImageObject' }]) + built)).toHaveLength(3);
  });
  it('accepts equivalent script packing and object/graph order', () => {
    expect(pillarSchemaParity(script(page) + script(org), built)).toBe(true);
    expect(pillarSchemaParity(script({ '@graph': [page, org] }), built)).toBe(true);
  });
  it('rejects a duplicate organization even when the native graph is intact', () => {
    expect(pillarSchemaParity(script({ '@type': 'Organization' }) + built, built)).toBe(false);
  });
  it('rejects stale image schema and wrong page classifications', () => {
    expect(
      pillarSchemaParity(
        script([{ '@type': 'ImageObject', contentUrl: '/old.webp' }]) + built,
        built,
      ),
    ).toBe(false);
    expect(
      pillarSchemaParity(script({ '@graph': [org, { ...page, '@type': 'Article' }] }), built),
    ).toBe(false);
  });
  it('rejects a changed canonical entity or absent native graph', () => {
    expect(pillarSchemaParity(script({ ...page, '@id': 'https://example.com/#page' }), built)).toBe(
      false,
    );
    expect(pillarSchemaParity('', built)).toBe(false);
  });
  it('fails closed on malformed JSON-LD', () => {
    expect(() => pillarSchemaNodes('<script type="application/ld+json">broken</script>')).toThrow();
    expect(() => pillarSchemaNodes(script(null))).toThrow();
  });
  it('allows reviewed supplementary images only when their URL and caption match visible built source', () => {
    const source = `<link rel="canonical" href="https://mineralrightsxchange.com/sell-mineral-rights/"><img src="/current.webp" alt="Exact article title">${built}`;
    const image = {
      '@context': 'https://schema.org/',
      '@type': 'ImageObject',
      contentUrl: 'https://mineralrightsxchange.com/current.webp',
      caption: 'Exact article title',
    };
    const policy = { allowSourceImageObjects: true };
    expect(pillarSchemaParity(script(image) + built, source)).toBe(false);
    expect(pillarSchemaParity(script(image) + built, source, policy)).toBe(true);
    expect(
      pillarSchemaParity(
        script({ ...image, caption: 'Unreviewed description' }) + built,
        source,
        policy,
      ),
    ).toBe(false);
    expect(
      pillarSchemaParity(
        script({ ...image, contentUrl: 'https://mineralrightsxchange.com/old.webp' }) + built,
        source,
        policy,
      ),
    ).toBe(false);
    expect(pillarSchemaParity(script([image, image]) + built, source, policy)).toBe(false);
  });
});

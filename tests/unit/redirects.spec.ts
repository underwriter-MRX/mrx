import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const vercel = JSON.parse(readFileSync(new URL('../../vercel.json', import.meta.url), 'utf8'));
const projectRoot = fileURLToPath(new URL('../..', import.meta.url));

const approvedLegacyMappings = [
  [
    '/blog/how-to-read-a-division-order-before-signing/',
    '/blog/what-is-a-division-order-and-why-does-it-matter-for-mineral-rights-owners/',
  ],
  [
    '/blog/never-sell-mineral-rights-when-that-advice-is-wrong/',
    '/blog/should-i-sell-my-mineral-rights/',
  ],
  ['/category/mineral-rights/', '/blog/category/mineral-rights/'],
  ['/category/texas-oil-gas/', '/blog/category/texas-oil-gas/'],
  [
    '/blog/value-of-royalty-checks-documents-step-by-step/',
    '/blog/understanding-your-mineral-royalty-checks-value/',
  ],
  [
    '/blog/ensuring-transparency-how-we-avoid-predatory-tactics-in-mineral-rights-assessments/',
    '/blog/transparent-mineral-rights-reviews-questions-that-help-owners-avoid-pressure/',
  ],
  [
    '/blog/how-to-find-mineral-rights-buyers-you-can-trust/',
    '/blog/how-to-find-a-reputable-mineral-rights-buyer-in-texas/',
  ],
  [
    '/blog/what-are-mineral-rights-plain-language-guide/',
    '/blog/understanding-mineral-rights-for-new-owners/',
  ],
  [
    '/blog/mineral-rights-royalty-income-how-its-calculated/',
    '/blog/how-royalty-payments-work-for-texas-mineral-rights-owners/',
  ],
  [
    '/blog/oil-and-gas-royalties-what-owners-need-to-know/',
    '/blog/how-royalty-payments-work-for-texas-mineral-rights-owners/',
  ],
  [
    '/blog/mineral-rights-and-estate-planning-for-heirs/',
    '/blog/managing-mineral-interests-in-estate-planning-explained/',
  ],
  [
    '/blog/how-to-evaluate-a-mineral-rights-offer/',
    '/blog/how-to-know-if-your-mineral-rights-offer-is-fair/',
  ],
  [
    '/blog/eagle-ford-shale-mineral-rights-owners-guide/',
    '/blog/eagle-ford-shale-how-it-affects-mineral-rights-values-in-south-texas/',
  ],
  [
    '/blog/fair-market-value-of-mineral-rights-explained/',
    '/blog/understanding-the-factors-behind-the-valuation-of-your-texas-mineral-rights-explained/',
  ],
  [
    '/blog/tax-on-sale-of-inherited-mineral-rights/',
    '/blog/capital-gains-tax-on-mineral-rights-sales-in-texas-what-sellers-need-to-know/',
  ],
  [
    '/blog/transparency-in-mineral-rights-how-we-compare-to-other-services/',
    '/blog/how-to-compare-mineral-rights-review-services-transparently/',
  ],
  ['/category/selling-process/', '/blog/category/selling-process/'],
  ['/category/tax-legal/', '/blog/category/tax-legal/'],
  ['/category/valuation/', '/blog/category/valuation/'],
] as const;

const deferredLegacyPaths = [
  '/blog/selling-oil-and-gas-rights-step-by-step-guide/',
  '/blog/permian-basin-mineral-rights-value-and-options/',
  '/category/6/',
  '/category/9/',
  '/blog/value-of-royalty-checks-negotiation-tips-for-royalty-owners/',
  '/blog/mineral-rights-appraisal-vs-underwriter-review/',
  '/blog/mineral-rights-value-per-acre-key-factors/',
  '/blog/inherited-mineral-rights-what-to-do-next/',
  '/category/10/',
  '/blog/mineral-rights-vs-surface-rights-key-differences/',
  '/blog/mineral-rights-value-rule-of-thumb-how-to-use-it/',
  '/blog/barnett-shale-mineral-rights-what-owners-face/',
  '/category/2/',
  '/category/7/',
  '/blog/why-mineralrightsxchange-offers-unique-advantages-over-competing-mineral-rights-acquisition-services/',
] as const;

const withoutTrailingSlash = (path: string) => (path === '/' ? path : path.replace(/\/$/, ''));

describe('canonical owner-situation redirects', () => {
  it('permanently redirects the legacy WordPress date archives to canonical article URLs', () => {
    expect(vercel.redirects).toEqual(
      expect.arrayContaining([
        {
          source: '/2026/06/02/:slug',
          destination: '/blog/:slug/',
          permanent: true,
        },
        {
          source: '/2026/06/02/:slug/',
          destination: '/blog/:slug/',
          permanent: true,
        },
        {
          source: '/2026/06/03/:slug',
          destination: '/blog/:slug/',
          permanent: true,
        },
        {
          source: '/2026/06/03/:slug/',
          destination: '/blog/:slug/',
          permanent: true,
        },
      ]),
    );
  });

  it('permanently redirects the obsolete 1031 route', () => {
    expect(vercel.redirects).toContainEqual({
      source: '/1031-exchanger',
      destination: '/1031-exchange/',
      permanent: true,
    });
    expect(vercel.redirects).toContainEqual({
      source: '/1031-exchanger/',
      destination: '/1031-exchange/',
      permanent: true,
    });
  });

  it('permanently redirects the common Contact Us route', () => {
    expect(vercel.redirects).toContainEqual({
      source: '/contact-us',
      destination: '/contact/',
      permanent: true,
    });
  });

  it('reconciles legacy AI-guide author archives to the fictional guide directory', async () => {
    const astroConfig = (await import('../../astro.config.mjs')).default;

    for (const guide of ['travis', 'owen', 'laurel', 'wade', 'graham', 'marisol']) {
      expect(astroConfig.redirects).toMatchObject({
        [`/authors/${guide}`]: `/team/${guide}/`,
      });
    }

    for (let page = 2; page <= 11; page += 1) {
      expect(astroConfig.redirects).toMatchObject({
        [`/authors/ariana/page/${page}`]: '/team/marisol/',
        [`/authors/marisol/page/${page}`]: '/team/marisol/',
      });
    }
  }, 15_000);
});

describe('approved Google legacy successor redirects', () => {
  it('maps all 19 approved legacy paths exactly, with slash compatibility and permanent platform redirects', () => {
    expect(approvedLegacyMappings).toHaveLength(19);

    for (const [oldPath, destination] of approvedLegacyMappings) {
      const bareSource = withoutTrailingSlash(oldPath);
      for (const source of [bareSource, `${bareSource}/`]) {
        expect(vercel.redirects).toContainEqual({ source, destination, permanent: true });
      }
    }
  });

  it('keeps redirect source keys unique and prevents self-redirects or chains for the approved mappings', () => {
    const allSources = vercel.redirects.map((redirect: { source: string }) => redirect.source);
    expect(new Set(allSources).size).toBe(allSources.length);

    const normalizedSources = new Set(allSources.map(withoutTrailingSlash));
    for (const [oldPath, destination] of approvedLegacyMappings) {
      expect(withoutTrailingSlash(destination)).not.toBe(withoutTrailingSlash(oldPath));
      expect(normalizedSources.has(withoutTrailingSlash(destination))).toBe(false);
    }
  });

  it('backs every approved destination with a concrete published content source and route implementation', () => {
    for (const [, destination] of approvedLegacyMappings) {
      const parts = destination.split('/').filter(Boolean);
      if (parts[0] === 'blog' && parts[1] === 'category') {
        expect(existsSync(`${projectRoot}/src/content/categories/${parts[2]}.json`)).toBe(true);
        expect(existsSync(`${projectRoot}/src/pages/blog/category/[category].astro`)).toBe(true);
      } else {
        expect(parts[0]).toBe('blog');
        expect(existsSync(`${projectRoot}/src/content/posts/${parts[1]}.mdx`)).toBe(true);
      }
    }
  });

  it('leaves all 15 deferred or rejected legacy paths unmapped', () => {
    expect(deferredLegacyPaths).toHaveLength(15);
    const sources = new Set(
      vercel.redirects.map((redirect: { source: string }) => redirect.source),
    );

    for (const deferredPath of deferredLegacyPaths) {
      const bareSource = withoutTrailingSlash(deferredPath);
      expect(sources.has(bareSource)).toBe(false);
      expect(sources.has(`${bareSource}/`)).toBe(false);
    }
  });
});

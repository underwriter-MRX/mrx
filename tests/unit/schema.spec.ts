import { describe, it, expect } from 'vitest';
import { siteGraph } from '../../src/structured-data/site';

describe('site-level JSON-LD graph', () => {
  const graph = siteGraph('/', 'Mineral Rights Xchange');

  it('includes Organization, generic Service, WebSite, and WebPage without LocalBusiness types', () => {
    const types = graph.map((n: any) => n['@type']);
    expect(types).toContain('Organization');
    expect(types).toContain('Service');
    expect(types).toContain('WebSite');
    expect(types).toContain('WebPage');
    expect(types).not.toContain('ProfessionalService');
    expect(types).not.toContain('LocalBusiness');
  });

  it('binds the bounded educational service to the organization without local-footprint claims', () => {
    const service = graph.find((n: any) => n['@type'] === 'Service') as any;
    expect(service?.provider).toEqual({
      '@id': 'https://mineralrightsxchange.com/#org',
    });
    expect(service?.description).toContain('not a certified appraisal');
    expect(service?.address).toBeUndefined();
    expect(service?.telephone).toBeUndefined();
    expect(service?.priceRange).toBeUndefined();
  });

  it('Organization has a logo, URL, and name', () => {
    const org = graph.find((n: any) => n['@type'] === 'Organization') as any;
    expect(org?.name).toBeTruthy();
    expect(org?.url).toBeTruthy();
    expect(org?.logo).toBe('https://mineralrightsxchange.com/assets/brand/mrx-logo-color.webp');
  });

  it('WebPage carries a SpeakableSpecification that nominates at least one answer block', () => {
    const wp = graph.find((n: any) => n['@type'] === 'WebPage') as any;
    expect(wp?.speakable).toBeDefined();
    expect(wp?.speakable['@type']).toBe('SpeakableSpecification');
    // The exact selector set evolves as MRX adds/removes cite-target
    // answer blocks; the contract is "at least one answer-style block
    // is nominated". Both legacy (disclaimer) and current (cited-answer
    // + article-takeaways) selector sets are acceptable.
    const selectors: string[] = wp?.speakable?.cssSelector ?? [];
    const hasAnswerSelector = selectors.some(
      (s: string) =>
        s === '.cited-answer' ||
        s === '.article-takeaways' ||
        s === '.mrx-disclaimer-footer' ||
        s === '.mrx-disclaimer-top',
    );
    expect(
      hasAnswerSelector,
      `speakable.cssSelector empty or non-cite: ${selectors.join(',')}`,
    ).toBe(true);
  });

  it('does not include any aggregateRating (per §10)', () => {
    for (const node of graph) {
      expect((node as any).aggregateRating).toBeUndefined();
    }
  });

  it('does not include any unsourced review count or aggregate rating', () => {
    const serialized = JSON.stringify(graph);
    expect(serialized).not.toMatch(/reviewCount/i);
    expect(serialized).not.toMatch(/aggregateRating/i);
  });

  it.each([
    {
      path: '/contact',
      name: 'Contact',
      pageType: 'ContactPage',
      canonical: 'https://mineralrightsxchange.com/contact/',
    },
    {
      path: '/about/',
      name: 'About',
      pageType: 'AboutPage',
      canonical: 'https://mineralrightsxchange.com/about/',
    },
  ])('specializes only the existing canonical $path page node as $pageType', (testCase) => {
    const specializedGraph = siteGraph(testCase.path, testCase.name);
    const specializedPage = specializedGraph.find(
      (node: any) => node['@id'] === `${testCase.canonical}#page`,
    ) as any;
    const defaultPage = graph.find((node: any) => node['@type'] === 'WebPage') as any;

    expect(specializedPage).toMatchObject({
      '@type': testCase.pageType,
      '@id': `${testCase.canonical}#page`,
      url: testCase.canonical,
      name: testCase.name,
    });
    expect(specializedPage.speakable).toEqual(defaultPage.speakable);
    expect(specializedPage.isPartOf).toEqual(defaultPage.isPartOf);
    expect(specializedPage.about).toEqual(defaultPage.about);
    expect(specializedGraph).toHaveLength(graph.length);
    expect(specializedGraph.filter((node: any) => node['@id']?.endsWith('#page'))).toHaveLength(1);
    expect(new Set(specializedGraph.map((node: any) => node['@id']))).toHaveLength(
      specializedGraph.length,
    );
  });

  it.each(['/contact-us/', '/about/team/', '/learning-center/'])(
    'keeps unrelated canonical path %s as WebPage without duplicate nodes',
    (path) => {
      const unrelatedGraph = siteGraph(path, 'Unrelated page');
      const pages = unrelatedGraph.filter((node: any) => node['@id']?.endsWith('#page')) as any[];

      expect(pages).toHaveLength(1);
      expect(pages[0]['@type']).toBe('WebPage');
      expect(unrelatedGraph).toHaveLength(graph.length);
      expect(new Set(unrelatedGraph.map((node: any) => node['@id']))).toHaveLength(
        unrelatedGraph.length,
      );
    },
  );
});

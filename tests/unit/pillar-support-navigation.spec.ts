import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const routes = [
  {
    owner: 'src/components/organisms/OfferReviewDecisionFramework.astro',
    slugs: ['mineral-rights-offer-vs-letter-of-intent-vs-purchase-agreement'],
  },
  {
    owner: 'src/pages/inherited-mineral-rights.astro',
    slugs: [
      'mineral-rights-inheritance-in-texas-what-heirs-need-to-know-before-selling',
      'understanding-royalty-checks-after-inheriting-mineral-rights',
      'mineral-rights-document-redaction-checklist-before-sharing-records',
    ],
  },
  {
    owner: 'src/pages/learning-center/title-lease-ownership/index.astro',
    slugs: [
      'how-to-find-out-if-you-own-mineral-rights-in-texas',
      'what-is-a-division-order-and-why-does-it-matter-for-mineral-rights-owners',
      'texas-railroad-commission-how-to-use-public-records-to-understand-your-mineral-rights',
    ],
  },
  {
    owner: 'src/pages/learning-center/oil-and-gas-royalties/index.astro',
    slugs: [
      'how-to-decode-your-royalty-check-statement',
      'why-did-my-royalty-check-go-down',
      'converting-monthly-royalty-history-into-a-valuation-baseline',
    ],
  },
] as const;

describe('topical-map support navigation', () => {
  it.each(routes)(
    'links $owner only to existing published supporting articles',
    ({ owner, slugs }) => {
      const source = readFileSync(join(process.cwd(), owner), 'utf8');

      for (const slug of slugs) {
        expect(source, `${owner} lacks ${slug}`).toContain(`/blog/${slug}/`);

        const article = readFileSync(
          join(process.cwd(), 'src/content/posts', `${slug}.mdx`),
          'utf8',
        );
        expect(article, `${slug} is not published`).toMatch(/^draft: false$/m);
      }
    },
  );
});

import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

describe('OTTO source-first remediation', () => {
  const read = (path: string) => readFileSync(join(process.cwd(), path), 'utf8');

  it('uses descriptive shared article headings without changing article identity fields', () => {
    const layout = read('src/layouts/ArticleLayout.astro');

    expect(layout).toContain('>Direct answer for mineral owners</h2>');
    expect(layout).toContain('>Key takeaways for mineral owners</h2>');
    expect(layout).toContain('>Sources reviewed for this article</h2>');
    expect(layout).not.toContain('>Direct answer</h2>');
    expect(layout).not.toContain('>Key takeaways</h2>');
    expect(layout).not.toContain('>Sources</h2>');
  });

  it('gives public guide and category archives descriptive H1 and H2 labels', () => {
    const guidePage = read('src/pages/team/[slug].astro');
    const categoryArchive = read('src/components/organisms/CategoryArchivePage.astro');

    expect(guidePage).toContain('Meet {guide.name}, {guide.shortRole}');
    expect(guidePage).toContain('How {guide.name} guides the conversation');
    expect(categoryArchive).toContain('{category.data.label} mineral rights articles');
  });

  it('uses bounded social titles without changing canonical article titles', () => {
    const cases = [
      [
        'north-dakota-inherited-royalty-questions-records-and-ombudsman',
        'North Dakota Inherited Royalty Questions: Records and Ombudsman',
        'North Dakota Inherited Royalties: Records and Help',
      ],
      [
        'mineral-rights-document-redaction-checklist-before-sharing-records',
        'Mineral Rights Document Redaction Checklist Before You Share Records',
        'Mineral Rights Record Redaction Checklist',
      ],
      [
        'north-dakota-mineral-rights-probate-deeds-form-11-vs-form-12',
        'North Dakota Mineral Rights Probate Deeds: Form 11 vs. Form 12',
        'North Dakota Probate Deeds: Form 11 vs. Form 12',
      ],
      [
        'mineral-rights-offer-sender-identity-cross-check',
        'How to Build a Mineral Rights Offer Sender Identity Cross-Check',
        'Cross-Check a Mineral Rights Offer Sender',
      ],
      [
        'texas-rrc-new-lease-ids-built-query-retrieval-provenance-worksheet',
        'Texas RRC New Lease IDs Built Query Retrieval Provenance Worksheet',
        'Texas RRC New Lease IDs Built Query Worksheet',
      ],
      [
        'texas-rrc-online-inspection-lookup-retrieval-provenance-worksheet',
        'Texas RRC Online Inspection Lookup Retrieval Provenance Worksheet',
        'Texas RRC Online Inspection Lookup Worksheet',
      ],
      [
        'robertson-county-mineral-rights-public-record-locator',
        'How to Build a Robertson County Mineral Rights Public-Record Locator',
        'Robertson County Mineral Rights Record Locator',
      ],
      [
        'texas-rrc-flare-vent-exception-query-retrieval-provenance-worksheet',
        'Texas RRC Flare/Vent Exception Query Retrieval Provenance Worksheet',
        'Texas RRC Flare/Vent Exception Query Worksheet',
      ],
      [
        'texas-rrc-inactive-well-aging-report-retrieval-provenance-worksheet',
        'Texas RRC Inactive Well Aging Report Retrieval Provenance Worksheet',
        'Texas RRC Inactive Well Aging Report Worksheet',
      ],
      [
        'texas-rrc-p-5-renewal-status-query-retrieval-provenance-worksheet',
        'Texas RRC P-5 Renewal Status Query Retrieval Provenance Worksheet',
        'Texas RRC P-5 Renewal Status Query Worksheet',
      ],
    ] as const;

    for (const [slug, canonicalTitle, socialTitle] of cases) {
      const source = read(`src/content/posts/${slug}.mdx`);
      expect(source).toContain(`title: '${canonicalTitle}'`);
      expect(source).toContain(`social_title: '${socialTitle}'`);
      expect(socialTitle.length).toBeGreaterThanOrEqual(20);
      expect(socialTitle.length).toBeLessThanOrEqual(60);
    }
  });

  it('keeps legacy heading fragment IDs on contextual H2 replacements', () => {
    expect(
      read(
        'src/content/posts/mineral-rights-document-redaction-checklist-before-sharing-records.mdx',
      ),
    ).toContain('<h2 id="fictional-example">Fictional royalty-statement redaction example</h2>');
    expect(
      read(
        'src/content/posts/mineral-rights-document-redaction-checklist-before-sharing-records.mdx',
      ),
    ).toContain('<h2 id="final-checklist">Checklist before sharing mineral records</h2>');
    expect(
      read('src/content/posts/mineral-rights-offer-sender-identity-cross-check.mdx'),
    ).toContain('<h2 id="final-quality-check">Offer sender cross-check quality controls</h2>');
    expect(
      read('src/content/posts/robertson-county-mineral-rights-public-record-locator.mdx'),
    ).toContain('<h2 id="final-quality-check">Robertson County locator quality controls</h2>');
    expect(
      read(
        'src/content/posts/texas-rrc-flare-vent-exception-query-retrieval-provenance-worksheet.mdx',
      ),
    ).toContain('<h2 id="final-quality-check">Flare and vent query quality controls</h2>');
  });
});

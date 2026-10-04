import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const read = (path: string) => readFileSync(path, 'utf8');

describe('remaining ordinary public H2 remediation', () => {
  it.each([
    [
      'src/content/pages/how-it-works.mdx',
      'Frequently asked questions about the underwriter review',
    ],
    ['src/pages/about.astro', 'AI guidance with human educational support'],
    ['src/content/pages/methodology.mdx', 'Factors used in the mineral-rights review'],
    [
      'src/content/pages/sell-mineral-rights.mdx',
      'Frequently asked questions about selling mineral rights',
    ],
    [
      'src/content/pages/free-guide.mdx',
      'Frequently asked questions about the free guide',
    ],
  ])('uses a descriptive ordinary-page heading in %s', (path, heading) => {
    expect(read(path)).toContain(heading);
    expect(heading.length).toBeGreaterThanOrEqual(20);
    expect(heading.length).toBeLessThanOrEqual(70);
  });

  it('preserves existing fragment IDs while expanding editorial-policy headings', () => {
    const source = read('src/pages/editorial-policy.astro');
    expect(source).toContain(
      '<h2 id="editorial-sources">Source standards for MRX educational content</h2>',
    );
    expect(source).toContain('<h2 id="editorial-ai">How MRX uses AI in editorial work</h2>');
    expect(source).toContain(
      '<h2 id="editorial-corrections">Corrections to MRX educational content</h2>',
    );
    expect(source).toContain('<h2>Related MRX trust and methodology pages</h2>');
  });

  it('uses each guide name with the existing role field instead of inventing role copy', () => {
    const source = read('src/pages/team/index.astro');
    expect(source).toContain('<h2>{guide.name}: {guide.role}</h2>');
    expect(source).toContain('<strong>{guide.shortRole}</strong>');
  });

  it('keeps the existing sell-page fragment IDs with expanded labels', () => {
    const source = read('src/content/pages/sell-mineral-rights.mdx');
    expect(source).toContain('id="short-answer"');
    expect(source).toContain('What selling mineral rights can change');
    expect(source).toContain('id="selling-faq-heading"');
  });

  it('does not change protected policy-page source through this remediation', () => {
    expect(read('src/pages/privacy-policy.astro')).not.toContain(
      'Source standards for MRX educational content',
    );
    expect(read('src/pages/communication-preferences.astro')).toContain('<h2>Text messages</h2>');
  });
});

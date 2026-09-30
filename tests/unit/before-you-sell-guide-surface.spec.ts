import { readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';

const read = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');
const bytes = (path: string) => readFileSync(new URL(`../../${path}`, import.meta.url));

describe('before-you-sell guide surface contract', () => {
  it('ships the exact public route, exact title, publisher disclosure, same secure form, and chat CTA', () => {
    const page = read('src/pages/before-you-sell-mineral-rights.astro');
    const form = read('src/components/organisms/BeforeYouSellGuideForm.astro');
    const chat = read('src/components/react/AskTravis.tsx');
    expect(page).toContain('Before You Sell Your Mineral Rights');
    expect(page).toContain('Fictional AI guide • Published by Mineral Rights Xchange');
    expect(page).toContain('<BeforeYouSellGuideForm');
    expect(form).toContain('/api/guides/before-you-sell-mineral-rights');
    expect(form).toContain('data-needs-guide-phone');
    expect(form).toContain('disabled');
    expect(chat).toContain('/before-you-sell-mineral-rights/?source=chat#get-the-guide');
  });

  it('uses exact-word image alternatives and exact WebP metadata dimensions', () => {
    const page = read('src/pages/before-you-sell-mineral-rights.astro');
    expect(page).toContain("THE MINERAL OWNER'S DECISION GUIDE");
    expect(page).toContain('01 What do you own?');
    expect(page).toContain('ogImageWidth={918}');
    expect(page).toContain('ogImageHeight={1188}');
    expect(page).toContain('ogImageType="image/webp"');
  });

  it('copies only manifest-approved public assets with exact hashes', () => {
    const expected = new Map([
      [
        'public/guides/before-you-sell-mineral-rights.pdf',
        'd2e444cb7d49b8a0e153a4472d1056d01f3be4711b33b9ffb387b63595c88286',
      ],
      [
        'public/assets/guides/before-you-sell-mineral-rights/guide-cover.webp',
        '89379c178362795eaa7f97a100c066f3cbb61565017300d0a91f7e734aa40b45',
      ],
      [
        'public/assets/guides/before-you-sell-mineral-rights/infographic-portrait.webp',
        '26547dd7ababde3e883dc9df57c70812dafee9f7cedf4467a8de9ecabdadd8a2',
      ],
      [
        'public/assets/guides/before-you-sell-mineral-rights/infographic-square.webp',
        'dec54d235f01d5ee08134b01b3b0f133e2c0bcdb082c1ace8ff64cb8bc77067a',
      ],
    ]);
    for (const [path, hash] of expected) {
      expect(statSync(new URL(`../../${path}`, import.meta.url)).size).toBeGreaterThan(0);
      expect(createHash('sha256').update(bytes(path)).digest('hex')).toBe(hash);
    }
  });

  it('creates request and immutable receipts atomically and dedupes by UTC day plus name/email, not phone alone', () => {
    const migration = read('supabase/migrations/20260930100000_before_you_sell_guide.sql');
    expect(migration).toContain('create_guide_request_with_receipts');
    expect(migration).toContain('reject_guide_consent_receipt_mutation');
    expect(migration).toContain('before update or delete');
    expect(migration).toContain('guide_requests_daily_identity_key');
    expect(migration).toContain('(guide_id, identity_key, dedupe_day)');
    expect(migration).not.toContain('(guide_id, phone_key, dedupe_day)');
    expect(migration.indexOf('insert into public.guide_requests')).toBeLessThan(
      migration.indexOf('insert into public.guide_consent_receipts'),
    );
  });

  it('preserves the existing ownership guide as a separate route, schema, and API', () => {
    const oldPage = read('src/pages/free-guide.astro');
    const oldApi = read('src/pages/api/free-guide.ts');
    const oldForm = read('src/lib/form.ts');
    expect(oldPage).toContain("getEntry('pages', 'free-guide')");
    expect(oldApi).toContain("submitToGHL(ctx, parsed.data, 'free-guide')");
    expect(oldForm).toContain("GUIDE_SLUG = 'how-to-find-out-what-your-mineral-rights-are'");
    expect(oldForm).not.toContain('before-you-sell-mineral-rights');
  });
});

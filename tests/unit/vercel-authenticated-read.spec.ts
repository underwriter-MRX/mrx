import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { installVercelAuthenticatedRead } from '../e2e/helpers/vercel-authenticated-read.mjs';

const source = readFileSync(
  new URL('../e2e/helpers/vercel-authenticated-read.mjs', import.meta.url),
  'utf8',
);

describe('protected MRX rendered-verification read relay', () => {
  it('does not intercept ordinary tests without explicit opt-in', async () => {
    const old = process.env.PLAYWRIGHT_VERCEL_AUTH_READ;
    delete process.env.PLAYWRIGHT_VERCEL_AUTH_READ;
    try {
      await expect(installVercelAuthenticatedRead(undefined, undefined)).resolves.toBeUndefined();
    } finally {
      if (old === undefined) delete process.env.PLAYWRIGHT_VERCEL_AUTH_READ;
      else process.env.PLAYWRIGHT_VERCEL_AUTH_READ = old;
    }
  });
  it('is scoped to the exact existing protected alias and Chrome', () => {
    expect(source).toContain("const target = 'https://mrx-web-team-mrx.vercel.app'");
    expect(source).toContain('baseURL !== target');
    expect(source).toContain("process.env.PLAYWRIGHT_CHANNEL !== 'chrome'");
    expect(source).toContain('url.origin !== target');
  });
  it('uses the authorized pinned CLI rather than extracting or supplying secrets', () => {
    expect(source).toMatch(/'vercel@59\.0\.0',\s*'curl'/);
    expect(source).toMatch(/'--scope',\s*'team-mrx'/);
    expect(source).not.toMatch(
      /--token|protectionBypass|x-vercel-protection-bypass|cookies\(|storageState\(/,
    );
  });
  it('blocks non-read methods and private application endpoints', () => {
    expect(source).toContain("['GET', 'HEAD'].includes(request.method())");
    expect(source).toContain('api|auth|account|owner-intake|staff');
    expect(source).toContain("route.abort('blockedbyclient')");
  });
  it('does not expose raw failures or relay cookie/auth response headers', () => {
    expect(source).not.toMatch(
      /console\.|JSON\.stringify\(.*(?:stdout|stderr)|headers\[['"](?:set-cookie|authorization)['"]\]/,
    );
    expect(source).toContain("throw new Error('Authenticated MRX read relay failed')");
    expect(source).toContain("if (status !== 200 || !headers?.['content-type'])");
  });
});

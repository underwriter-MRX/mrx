// Test-only, scoped read relay through Vercel's existing authorized CLI access.
// Never read, export, log, or supply a bypass secret; do not disable protection.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const target = 'https://mrx-web-team-mrx.vercel.app';

export async function installVercelAuthenticatedRead(page, baseURL) {
  if (process.env.PLAYWRIGHT_VERCEL_AUTH_READ !== '1') return;
  if (baseURL !== target || process.env.PLAYWRIGHT_CHANNEL !== 'chrome')
    throw new Error('Authenticated read relay requires the exact protected MRX alias and Chrome');
  const cache = new Map();
  await page.route(`${target}/**`, async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    if (
      url.origin !== target ||
      !['GET', 'HEAD'].includes(request.method()) ||
      /^\/(api|auth|account|owner-intake|staff)(\/|$)/.test(url.pathname)
    ) {
      await route.abort('blockedbyclient');
      return;
    }
    const key = url.pathname + url.search;
    if (!cache.has(key))
      cache.set(
        key,
        (async () => {
          const { stdout } = await run(
            'npx',
            [
              '--yes',
              'vercel@59.0.0',
              'curl',
              key,
              '--deployment',
              target,
              '--scope',
              'team-mrx',
              '--',
              '--silent',
              '--show-error',
              '--compressed',
              '--max-time',
              '20',
              '--fail-with-body',
              '--dump-header',
              '-',
              '--header',
              `Accept: ${request.headers().accept ?? '*/*'}`,
            ],
            { encoding: 'buffer', timeout: 45000, maxBuffer: 4_000_000 },
          );
          let offset = 0;
          let status;
          let headers;
          while (stdout.subarray(offset, offset + 5).toString() === 'HTTP/') {
            const end = stdout.indexOf('\r\n\r\n', offset);
            if (end < 0) throw new Error('Invalid authenticated HTTP response framing');
            const lines = stdout.subarray(offset, end).toString().split('\r\n');
            status = Number(lines.shift().match(/^HTTP\/\S+\s+(\d+)/)?.[1]);
            headers = {};
            for (const line of lines) {
              const colon = line.indexOf(':');
              const name = line.slice(0, colon).toLowerCase();
              // No cookies, auth headers, content-encoding, or sensitive state enter
              // the browser fixture. curl already decoded the returned body bytes.
              if (
                [
                  'content-type',
                  'cache-control',
                  'content-security-policy',
                  'x-content-type-options',
                  'x-frame-options',
                  'referrer-policy',
                  'strict-transport-security',
                ].includes(name)
              )
                headers[name] = line.slice(colon + 1).trim();
            }
            offset = end + 4;
          }
          if (status !== 200 || !headers?.['content-type'])
            throw new Error('Protected MRX resource did not return verified HTTP 200');
          return { status, headers, body: stdout.subarray(offset) };
        })(),
      );
    try {
      await route.fulfill(await cache.get(key));
    } catch {
      // Never serialize a subprocess exception containing raw response data.
      await route.abort('failed');
      throw new Error('Authenticated MRX read relay failed');
    }
  });
}

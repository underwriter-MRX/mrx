const CANONICAL_ORIGIN = 'https://mineralrightsxchange.com';
// The default checks every sitemap entry for inclusion, then fetches a stable
// representative set of pages. Fetching all pages at once can trigger the
// production WAF; reserve that slower exhaustive mode for a paced audit run.
const sitemapVerificationMode = process.env.MRX_VERIFY_SITEMAP_MODE ?? 'representative';
if (!['all', 'representative'].includes(sitemapVerificationMode)) {
  throw new Error(`Invalid MRX_VERIFY_SITEMAP_MODE: ${sitemapVerificationMode}`);
}
const activeTargets = [
  CANONICAL_ORIGIN,
  'https://www.mineralrightsxchange.com',
  process.env.MRX_DEPLOYMENT_URL,
]
  .filter(Boolean)
  .map((value) => String(value).trim().replace(/\/$/, ''));

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

async function request(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: { 'User-Agent': 'MRX-production-release-verifier/1.0', ...(options.headers || {}) },
    signal: AbortSignal.timeout(15_000),
  });
  return response;
}

function canonicalFrom(html) {
  return html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i)?.[1]
    ?? html.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i)?.[1]
    ?? null;
}

function normalizePageUrl(value) {
  const url = new URL(value);
  url.hash = '';
  url.search = '';
  return `${url.origin}${url.pathname === '/' ? '/' : `${url.pathname.replace(/\/$/, '')}/`}`;
}

async function verifyTarget(base) {
  const response = await request(`${base}/`);
  invariant(response.ok, `${base}/ returned ${response.status}`);
  const html = await response.text();
  invariant(/Mineral Rights Xchange/i.test(html), `${base}/ did not render the MRX site`);
  invariant(
    canonicalFrom(html) === `${CANONICAL_ORIGIN}/`,
    `${base}/ did not declare the canonical production origin`,
  );
}

async function verifyFunnel() {
  const book = await request(`${CANONICAL_ORIGIN}/book/`);
  invariant(book.status === 200, `/book/ returned ${book.status}`);
  invariant(/Private senior underwriter appointment/i.test(await book.text()), '/book/ lost its appointment entry point');

  const availability = await request(
    `${CANONICAL_ORIGIN}/api/appointments/availability?timezone=America%2FChicago&day=next_available`,
  );
  invariant(availability.status === 200, `appointment availability returned ${availability.status}`);
  const availabilityBody = await availability.json();
  invariant(availabilityBody.ok === true, 'appointment availability did not return ok:true');
  invariant(
    Array.isArray(availabilityBody.options) && availabilityBody.options.length > 0,
    'appointment availability did not display a bookable slot',
  );

  const account = await request(`${CANONICAL_ORIGIN}/account/?welcome=appointment`);
  invariant(account.status === 200, `appointment intake handoff returned ${account.status}`);
  const accountHtml = await account.text();
  invariant(/noindex/i.test(accountHtml), 'private appointment intake handoff is not noindex');
  invariant(/Owner account/i.test(accountHtml), 'appointment intake handoff did not render the owner account');
}

async function verifyLegacyRedirects() {
  for (const path of [
    '/2026/06/02/how-are-mineral-rights-valued',
    '/2026/06/02/how-are-mineral-rights-valued/',
    '/2026/06/03/how-are-mineral-rights-valued',
    '/2026/06/03/how-are-mineral-rights-valued/',
  ]) {
    const response = await request(`${CANONICAL_ORIGIN}${path}`, { redirect: 'manual' });
    invariant([301, 308].includes(response.status), `${path} returned ${response.status}, not a permanent redirect`);
    const destination = new URL(response.headers.get('location'), CANONICAL_ORIGIN).toString();
    invariant(
      destination === `${CANONICAL_ORIGIN}/blog/how-are-mineral-rights-valued/`,
      `${path} redirected to ${destination}`,
    );
  }
}

async function verifySitemaps() {
  const indexResponse = await request(`${CANONICAL_ORIGIN}/sitemap_index.xml`);
  invariant(indexResponse.status === 200, `sitemap_index.xml returned ${indexResponse.status}`);
  const index = await indexResponse.text();
  const sitemapUrls = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  invariant(sitemapUrls.length > 0, 'canonical sitemap index listed no sitemap segments');

  const pageUrls = [];
  const segmentSamples = [];
  for (const sitemapUrl of sitemapUrls) {
    const response = await request(sitemapUrl);
    invariant(response.status === 200, `${sitemapUrl} returned ${response.status}`);
    const xml = await response.text();
    const segmentUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    pageUrls.push(...segmentUrls);
    if (segmentUrls.length > 0) {
      segmentSamples.push(segmentUrls[0], segmentUrls[Math.floor(segmentUrls.length / 2)], segmentUrls.at(-1));
    }
  }
  const uniquePageUrls = [...new Set(pageUrls)];
  invariant(uniquePageUrls.length > 0, 'public sitemap segments listed no URLs');
  for (const forbidden of ['/account/', '/owner-intake/', '/staff/', '/staged/', '/thank-you/']) {
    invariant(
      !uniquePageUrls.some((url) => new URL(url).pathname.startsWith(forbidden)),
      `noindex/private route leaked into a public sitemap: ${forbidden}`,
    );
  }

  let urlsToCheck = uniquePageUrls;
  if (sitemapVerificationMode === 'representative') {
    const byCanonical = new Map(uniquePageUrls.map((url) => [normalizePageUrl(url), url]));
    const requiredPaths = [
      '/',
      '/learning-center/',
      '/learning-center/title-lease-ownership/',
      '/ai-assistant/',
      ...(process.env.MRX_VERIFY_REQUIRED_PATHS ?? '').split(',').filter(Boolean),
    ];
    const selected = new Set(segmentSamples);
    for (const path of requiredPaths) {
      const requiredUrl = new URL(path.trim(), CANONICAL_ORIGIN);
      invariant(requiredUrl.origin === CANONICAL_ORIGIN, `Required path left the canonical origin: ${path}`);
      const listedUrl = byCanonical.get(normalizePageUrl(requiredUrl.toString()));
      invariant(Boolean(listedUrl), `Required public path is absent from the sitemap: ${path}`);
      selected.add(listedUrl);
    }
    for (let index = 0; index < 12; index += 1) {
      selected.add(uniquePageUrls[Math.floor((index * (uniquePageUrls.length - 1)) / 11)]);
    }
    urlsToCheck = [...selected];
  }

  const failures = [];
  let cursor = 0;
  const workers = Array.from({ length: sitemapVerificationMode === 'representative' ? 2 : 8 }, async () => {
    while (cursor < urlsToCheck.length) {
      const url = urlsToCheck[cursor++];
      try {
        const response = await request(url, { redirect: 'manual' });
        invariant(response.status === 200, `returned ${response.status}`);
        const html = await response.text();
        invariant(!/<meta\s+[^>]*name=["']robots["'][^>]*noindex/i.test(html), 'declared noindex');
        const canonical = canonicalFrom(html);
        invariant(Boolean(canonical), 'had no canonical link');
        invariant(
          normalizePageUrl(canonical) === normalizePageUrl(url),
          `canonicalized to ${canonical}`,
        );
      } catch (error) {
        failures.push(`${url}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  });
  await Promise.all(workers);
  invariant(failures.length === 0, `sitemap URL verification failed:\n${failures.join('\n')}`);
  return { listed: uniquePageUrls.length, checked: urlsToCheck.length };
}

for (const target of [...new Set(activeTargets)]) await verifyTarget(target);
await verifyLegacyRedirects();
await verifyFunnel();
const sitemapVerification = await verifySitemaps();

console.log(
  JSON.stringify(
    {
      ok: true,
      activeTargets: [...new Set(activeTargets)],
      sitemapUrlCount: sitemapVerification.listed,
      sitemapCheckedUrlCount: sitemapVerification.checked,
      sitemapVerificationMode,
      legacyRedirectVariants: 4,
      appointmentAvailability: 'slot displayed',
      appointmentIntakeHandoff: 'available and noindex',
    },
    null,
    2,
  ),
);

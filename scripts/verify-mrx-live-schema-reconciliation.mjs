#!/usr/bin/env node
const EXPECTED_ORG_ID = 'https://mineralrightsxchange.com/#org';
const TARGETS = [
  'https://mineralrightsxchange.com/',
  'https://www.mineralrightsxchange.com/',
  'https://mrx-web.vercel.app/',
];

function extractJsonLd(html) {
  const nodes = [];
  const blocks = html.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  );
  for (const match of blocks) {
    const parsed = JSON.parse(match[1]);
    const queue = Array.isArray(parsed) ? [...parsed] : [parsed];
    while (queue.length > 0) {
      const value = queue.shift();
      if (!value || typeof value !== 'object') continue;
      if (Array.isArray(value)) {
        queue.push(...value);
        continue;
      }
      if (Array.isArray(value['@graph'])) queue.push(...value['@graph']);
      nodes.push(value);
    }
  }
  return nodes;
}

function isType(node, type) {
  const values = Array.isArray(node?.['@type']) ? node['@type'] : [node?.['@type']];
  return values.includes(type);
}

async function verifyTarget(url) {
  const response = await fetch(url, {
    redirect: 'follow',
    headers: { 'user-agent': 'MRX-Release-Verification/1.0' },
  });
  const html = await response.text();
  const nodes = extractJsonLd(html);
  const organizations = nodes.filter((node) => isType(node, 'Organization'));
  const authoritative = organizations.filter((node) => node['@id'] === EXPECTED_ORG_ID);
  const scriptSources = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map(
    (match) => match[1],
  );
  const runtimeInjectors = scriptSources.filter((source) => /searchatlas|otto-pixel/i.test(source));
  const imageObjects = nodes.filter((node) => isType(node, 'ImageObject'));

  const checks = {
    status_200: response.status === 200,
    exactly_one_organization: organizations.length === 1,
    authoritative_organization_exact: authoritative.length === 1,
    no_searchatlas_runtime_injector: runtimeInjectors.length === 0,
    no_overlay_image_objects: imageObjects.length === 0,
  };

  return {
    requested_url: url,
    final_url: response.url,
    status: response.status,
    organization_count: organizations.length,
    authoritative_organization_count: authoritative.length,
    runtime_injectors: runtimeInjectors,
    image_object_count: imageObjects.length,
    checks,
    pass: Object.values(checks).every(Boolean),
  };
}

const results = await Promise.all(TARGETS.map(verifyTarget));
const report = {
  verified_at_utc: new Date().toISOString(),
  authoritative_native_entity: EXPECTED_ORG_ID,
  targets: results,
  pass: results.every((result) => result.pass),
};

console.log(JSON.stringify(report, null, 2));
if (!report.pass) process.exitCode = 1;

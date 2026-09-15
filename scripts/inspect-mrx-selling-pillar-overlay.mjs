// Read-only diagnosis of the independently identified external overlay.
// Never deletes schemas or attempts to bypass Search Atlas's cleanup restrictions.
import { readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  PILLAR_HTML_HEADERS,
  pillarSchemaNodes,
  pillarSchemaParity,
  pillarVisibleImages,
} from './lib/pillar-html-release.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const authoritativeRoot =
  '/Users/darylhill/Documents/MineralRightsXchange.com/.codex-isolated/mrx-measurement-ai-technical-20260909';
const git = (...args) => execFileSync('/usr/bin/git', args, { cwd: root, encoding: 'utf8' }).trim();
if (
  root !== authoritativeRoot ||
  execFileSync('/bin/pwd', ['-P'], { encoding: 'utf8' }).trim() !== root ||
  git('rev-parse', '--show-toplevel') !== root ||
  git('branch', '--show-current') !== 'release/mrx-measurement-ai-technical-20260909'
) {
  throw new Error('Actual process/worktree/branch is not the verified isolated release lane.');
}
const preflight = {
  cwd: root,
  branch: git('branch', '--show-current'),
  head: git('rev-parse', 'HEAD'),
  status: git('status', '--short'),
};
const uuid = 'e4bab8bb-717e-480c-8dea-1de1b8596eb7';
const projectId = 99913;
const urlId = 325854327;
const pagePath = '/sell-mineral-rights/';
const sitewideId = 182837670;
const imageIds = new Set([
  266423898, 266423899, 266423900, 266423901, 266423902, 266423903, 266423904, 266423905, 266423906,
  266423907, 266423908, 266423909, 266423910, 266423911, 266423912,
]);
if (process.argv.length > 2) throw new Error('Inspector accepts no mutation arguments.');
const rc = await readFile('/Users/darylhill/.searchatlasrc', 'utf8');
const raw = rc.match(/^SEARCHATLAS_TOKEN=(.+)$/m)?.[1]?.trim();
const token = raw?.replace(/^(["'])([\s\S]*)\1$/, '$2');
if (!token) throw new Error('Existing authorized Search Atlas credential unavailable.');
const api = async (suffix) => {
  const response = await fetch(`https://sa.searchatlas.com/api/v2/otto-schema/${suffix}`, {
    method: 'GET',
    redirect: 'error',
    headers: {
      Authorization: `Bearer ${token}`,
      accept: 'application/json',
    },
    signal: AbortSignal.timeout(45000),
  });
  if (!response.ok) throw new Error(`Scoped Search Atlas GET returned HTTP ${response.status}`);
  return response.status === 204 ? { http_status: 204 } : response.json();
};
const list = async (sitewide) => {
  const records = [];
  for (let page = 1, totalPages = 1; page <= totalPages; page++) {
    const result = await api(`?project=${uuid}&sitewide=${sitewide}&page_size=20&page=${page}`);
    totalPages = result.total_pages ?? 1;
    if (totalPages > 50) throw new Error('Unexpected schema pagination; no cleanup attempted.');
    for (const row of result.results ?? []) {
      if (sitewide || (row.otto_url === urlId && row.path === pagePath))
        records.push(...row.schemas);
    }
    if (!sitewide && records.length) break;
  }
  return records;
};
const [sitewide, pageRecords, built, liveResult] = await Promise.all([
  list(true),
  list(false),
  readFile(path.join(root, 'dist/client/sell-mineral-rights/index.html'), 'utf8'),
  fetch(`https://mineralrightsxchange.com${pagePath}`, {
    headers: PILLAR_HTML_HEADERS,
    signal: AbortSignal.timeout(20000),
  }).then(async (response) => ({ ok: response.ok, html: await response.text() })),
]);
if (!liveResult.ok) throw new Error('Live page unavailable; no cleanup attempted.');
const live = liveResult.html;
const builtNodes = pillarSchemaNodes(built);
if (builtNodes.some((node) => node['@type'] === 'ImageObject'))
  throw new Error('Native image schema now exists; re-review required.');
const liveImages = pillarSchemaNodes(live).filter((node) => node['@type'] === 'ImageObject');
const unexpectedImageRecords = pageRecords.filter(
  (schema) => schema.schema_type === 'ImageObject' && !imageIds.has(schema.id),
);
if (unexpectedImageRecords.length)
  throw new Error('Unrecognized page-level ImageObject records exist; re-review required.');
const images = pageRecords.filter((schema) => imageIds.has(schema.id));
const organization = sitewide.find((schema) => schema.id === sitewideId);
if (
  organization &&
  (organization.otto_project !== projectId ||
    organization.otto_url !== null ||
    organization.is_sitewide !== true ||
    organization.status !== 'SUGGESTED' ||
    organization.schema_type !== 'Organization' ||
    organization.is_approved !== false)
) {
  throw new Error(
    'Sitewide duplicate record differs from verified evidence; no cleanup attempted.',
  );
}
const script = (nodes) => `<script type="application/ld+json">${JSON.stringify(nodes)}</script>`;
const storedLiveMismatches = [];
for (const image of images) {
  if (
    image.otto_project !== projectId ||
    image.otto_url !== urlId ||
    image.is_sitewide !== false ||
    image.status !== 'FOUND' ||
    image.schema_type !== 'ImageObject'
  ) {
    throw new Error(
      'Image record project/page/type differs from verified evidence; no cleanup attempted.',
    );
  }
  const contents = JSON.parse(image.edited_contents ?? image.original_contents);
  if (!liveImages.some((node) => pillarSchemaParity(script(contents), script(node)))) {
    storedLiveMismatches.push(image.id);
  }
}
const remainingNative = pillarSchemaNodes(live).filter((node) => node['@type'] !== 'ImageObject');
if (!pillarSchemaParity(script(remainingNative), built))
  throw new Error('Native graph is not intact; no cleanup attempted.');
const visibleImages = pillarVisibleImages(built);
const staleImages = images.filter(
  (image) =>
    !visibleImages.some(
      (visible) =>
        visible.url === JSON.parse(image.edited_contents ?? image.original_contents).contentUrl,
    ),
);
const currentImages = images.filter((image) => !staleImages.includes(image));
const corrections = currentImages.map((image) => {
  const contents = JSON.parse(image.edited_contents ?? image.original_contents);
  const visible = visibleImages.find((item) => item.url === contents.contentUrl);
  return {
    schema_id: image.id,
    contents: {
      '@context': 'https://schema.org/',
      '@type': 'ImageObject',
      contentUrl: contents.contentUrl,
      caption: visible.alt,
    },
  };
});
const selected = [...(organization ? [organization] : []), ...staleImages];
if (images.length !== 0 && images.length !== imageIds.size)
  throw new Error('Legacy ImageObject set is only partially present; re-review required.');
const recovery = (schema) => ({
  id: schema.id,
  project_id: schema.otto_project,
  page_id: schema.otto_url,
  is_sitewide: schema.is_sitewide,
  status: schema.status,
  type: schema.schema_type,
  original_contents: schema.original_contents,
  edited_contents: schema.edited_contents,
});
const receiptPath = path.join(root, 'reports/mrx-selling-pillar-overlay-inspection.json');
const receipt = {
  generated_at_utc: new Date().toISOString(),
  preflight,
  project_uuid: uuid,
  page_path: pagePath,
  authority:
    'Standing MRX source-first/no-approval release authority; no charge or account/security change.',
  reason:
    images.length === 0
      ? 'Verify the rejected duplicate Organization remains undeployed and the legacy overlay-only ImageObjects are absent while preserving the legitimate source graph.'
      : 'Identify the rejected duplicate Organization and stale overlay-only ImageObjects; preserve legitimate source graph and visible images.',
  cleanup_constraint:
    'Search Atlas rejects sitewide DELETE (HTTP 400: Cannot delete sitewide schema). FOUND schemas have no supported delete path in the connector. This inspector performs GET requests only.',
  api_docs: 'https://docs.searchatlas.com/',
  records: [...selected, ...currentImages].map(recovery),
  corrections,
  stored_live_mismatch_ids: storedLiveMismatches,
  actions: [],
  disposition: images.length === 0 ? 'OVERLAY_RECONCILED' : 'OVERLAY_REVIEW_OPEN',
};
await writeFile(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      disposition: receipt.disposition,
      selected_schema_ids: selected.map((schema) => schema.id),
      actions: receipt.actions,
      receipt_path: receiptPath,
    },
    null,
    2,
  ),
);

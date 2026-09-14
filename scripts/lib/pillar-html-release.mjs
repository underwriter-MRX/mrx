// A release request must exercise browser-only edge/OTTO transformations.
export const PILLAR_HTML_HEADERS = Object.freeze({
  accept: 'text/html',
  'cache-control': 'no-cache',
});

export function pillarSchemaNodes(html) {
  const scripts =
    html.match(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi) ?? [];
  const flatten = (node) => {
    if (Array.isArray(node)) return node.flatMap(flatten);
    if (!node || typeof node !== 'object') throw new Error('Invalid JSON-LD node');
    return node['@graph'] ? flatten(node['@graph']) : [node];
  };
  return scripts.flatMap((script) =>
    flatten(JSON.parse(script.replace(/^[\s\S]*?>/, '').replace(/<\/script>$/i, ''))),
  );
}

const stable = (value) => {
  if (Array.isArray(value)) return value.map(stable);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.keys(value)
      .sort()
      .map((key) => [key, stable(value[key])]),
  );
};

const decodeAttribute = (value) =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
const attribute = (tag, name) =>
  tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, 'i'))?.[1] ?? '';

export function pillarVisibleImages(html) {
  const canonicalTag = (html.match(/<link\b[^>]*>/gi) ?? []).find(
    (tag) => attribute(tag, 'rel') === 'canonical',
  );
  const base = attribute(canonicalTag ?? '', 'href');
  return (html.match(/<img\b[^>]*>/gi) ?? []).flatMap((tag) => {
    const src = decodeAttribute(attribute(tag, 'src'));
    const alt = decodeAttribute(attribute(tag, 'alt'));
    return src && alt ? [{ url: new URL(src, base).href, alt }] : [];
  });
}

export function pillarSchemaParity(liveHtml, builtHtml, { allowSourceImageObjects = false } = {}) {
  let liveNodes = pillarSchemaNodes(liveHtml);
  const builtNodes = pillarSchemaNodes(builtHtml);
  if (allowSourceImageObjects && !builtNodes.some((node) => node['@type'] === 'ImageObject')) {
    const sourceImages = pillarVisibleImages(builtHtml);
    const extras = liveNodes.filter((node) => node['@type'] === 'ImageObject');
    const urls = new Set();
    for (const node of extras) {
      if (
        !['https://schema.org', 'https://schema.org/'].includes(node['@context']) ||
        Object.keys(node).some(
          (key) => !['@context', '@type', 'contentUrl', 'caption'].includes(key),
        ) ||
        urls.has(node.contentUrl) ||
        !sourceImages.some((image) => image.url === node.contentUrl && image.alt === node.caption)
      )
        return false;
      urls.add(node.contentUrl);
    }
    liveNodes = liveNodes.filter((node) => node['@type'] !== 'ImageObject');
  }
  const canonicalNodes = (nodes) => nodes.map((node) => JSON.stringify(stable(node))).sort();
  return JSON.stringify(canonicalNodes(liveNodes)) === JSON.stringify(canonicalNodes(builtNodes));
}

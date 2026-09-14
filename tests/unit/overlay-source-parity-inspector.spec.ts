import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const script = readFileSync('scripts/inspect-mrx-overlay-source-parity.mjs', 'utf8');

describe('MRX public overlay/source inventory safety contract', () => {
  it('exercises browser-only transformations and validates every JSON-LD block', () => {
    expect(script).toContain('...PILLAR_HTML_HEADERS');
    expect(script).toContain('sorted(pillarSchemaNodes(html))');
    expect(script).toContain('MRX_OVERLAY_REQUIRE_PARITY');
  });

  it('requires the actual isolated process, Git root, and release branch', () => {
    expect(script).toContain("execFileSync('/bin/pwd', ['-P']");
    expect(script).toContain("git('rev-parse', '--show-toplevel') !== root");
    expect(script).toContain(
      "git('branch', '--show-current') !== 'release/mrx-measurement-ai-technical-20260909'",
    );
  });

  it('does not expose credentials or mutate Search Atlas, Cloudflare, or production', () => {
    expect(script).not.toMatch(
      /Authorization|SEARCHATLAS_TOKEN|cloudflare_api_token|method:\s*['"](?:POST|PUT|PATCH|DELETE)['"]|require_escalated|request_permissions/,
    );
    expect(script).toContain('Target not a confirmed public production alias');
  });

  it('keeps public body hashes and compact difference evidence', () => {
    expect(script).toContain('source_sha256: digest(source)');
    expect(script).toContain('live_sha256: digest(live)');
    expect(script).toContain('rows: compactRows');
  });
});

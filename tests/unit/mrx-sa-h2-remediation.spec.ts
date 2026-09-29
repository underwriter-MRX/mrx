import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

type Correction = {
  url: string;
  source: string;
  before: string;
  before_hash: string;
  sa_reported_length: number;
  after: string;
  visible_length: number;
  preserved_anchor: string | null;
};

const root = process.cwd();
const proof = JSON.parse(
  readFileSync(join(root, 'tests/fixtures/mrx-sa-h2-remediation-2026-09-29.json'), 'utf8'),
) as { audit_id: number; corrections: Correction[] };

const fnv1a32Base36 = (value: string) => {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(36);
};

describe('exact Search Atlas H2 maintenance proof', () => {
  it('preserves all 39 observed pre-edit hashes without rewriting historical review artifacts', () => {
    expect(proof.audit_id).toBe(138239);
    expect(proof.corrections).toHaveLength(39);
    for (const correction of proof.corrections) {
      expect(fnv1a32Base36(correction.before)).toBe(correction.before_hash);
    }
  });

  it('keeps corrected headings readable and present in their declared source', () => {
    for (const correction of proof.corrections) {
      const source = readFileSync(join(root, correction.source), 'utf8');
      expect(correction.visible_length).toBe(correction.after.length);
      expect(correction.after.length).toBeGreaterThanOrEqual(20);
      expect(correction.after.length).toBeLessThanOrEqual(65);
      if (correction.preserved_anchor) {
        expect(source).toContain(
          `<h2 id="${correction.preserved_anchor}">${correction.after}</h2>`,
        );
        expect(source).not.toContain(`## ${correction.before}`);
      } else {
        expect(source).toContain(correction.after);
      }
    }
  });
});

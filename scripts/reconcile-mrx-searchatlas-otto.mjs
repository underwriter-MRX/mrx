#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { reconcileSearchAtlasOtto } from './lib/searchatlas-otto-reconciliation.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const observationPath = resolve(
  root,
  process.argv[2] ?? 'reports/mrx-searchatlas-otto-observation-20260916.json',
);
const contractPath = resolve(
  root,
  process.argv[3] ?? 'config/mrx-searchatlas-otto-vendor-exceptions.json',
);

const [observation, contract] = await Promise.all(
  [observationPath, contractPath].map(async (path) => JSON.parse(await readFile(path, 'utf8'))),
);

// A saved observation is release evidence only while it is recent. Historical
// snapshots remain inspectable with --historical, but cannot silently pass as
// a fresh OTTO dashboard read for a new release.
const historical = process.argv.includes('--historical');
const result = reconcileSearchAtlasOtto(
  observation,
  contract,
  historical ? {} : { maxObservationAgeMs: 24 * 60 * 60 * 1000 },
);
console.log(JSON.stringify(result, null, 2));

if (!result.pass) process.exitCode = 1;

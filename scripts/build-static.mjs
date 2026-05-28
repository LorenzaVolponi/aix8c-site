import { cp, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
const site = new URL('../site/', import.meta.url);
const publicDir = new URL('../public/', import.meta.url);

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

if (existsSync(publicDir)) {
  await cp(publicDir, dist, { recursive: true });
}

await cp(site, dist, { recursive: true });
console.log('Static build complete: dist/index.html');

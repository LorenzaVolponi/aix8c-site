import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const jsonFiles = ['package.json', 'vercel.json', 'tsconfig.json'];
for (const file of jsonFiles) {
  JSON.parse(readFileSync(file, 'utf8'));
}

const checkTargets = ['scripts/static-build.mjs', 'scripts/static-server.mjs'];
for (const file of checkTargets) {
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

const vercel = JSON.parse(readFileSync('vercel.json', 'utf8'));
if (vercel.framework !== 'vite') throw new Error('vercel.json framework must remain vite');
if (vercel.outputDirectory !== 'dist') throw new Error('vercel.json outputDirectory must remain dist');

const app = readFileSync('src/App.tsx', 'utf8');
const routerCount = (app.match(/<BrowserRouter>/g) || []).length;
if (routerCount !== 1) throw new Error(`Expected exactly one BrowserRouter, found ${routerCount}`);

console.log('No-dependency lint checks passed');

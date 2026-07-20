import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const requiredFiles = [
  'package.json',
  'vercel.json',
  'scripts/static-build.mjs',
  'scripts/check-static.mjs',
];

const generatedFiles = [
  'dist/index.html',
  'dist/robots.txt',
  'dist/sitemap.xml',
  'dist/llms.txt',
  'dist/humans.txt',
  'dist/og-volponi.svg',
];

const generatedHtmlRequirements = [
  'Diamond Intelligence Studio',
  'id="portfolio"',
  'class="section-jump"',
  'class="seo-ribbon"',
  'class="lapidation-strip',
  'https://github.com/LorenzaVolponi/gameshow',
  'application/ld+json',
];

const failures = [];

for (const file of requiredFiles) {
  if (!existsSync(file)) failures.push(`Arquivo obrigatório ausente: ${file}`);
}

for (const file of ['package.json', 'vercel.json']) {
  try {
    JSON.parse(await readFile(file, 'utf8'));
  } catch (error) {
    failures.push(`${file} não é JSON válido: ${error.message}`);
  }
}

for (const file of [...requiredFiles, ...generatedFiles].filter((file) => existsSync(file))) {
  const content = await readFile(file, 'utf8');
  if (/^(<<<<<<<|=======|>>>>>>>)$/m.test(content)) failures.push(`Marcador de conflito encontrado em ${file}`);
}

try {
  execFileSync(process.execPath, ['scripts/static-build.mjs'], { stdio: 'pipe' });
} catch (error) {
  failures.push(`Falha ao gerar site estático: ${error.message}`);
}

for (const file of generatedFiles) {
  if (!existsSync(file)) failures.push(`Arquivo gerado ausente: ${file}`);
}

if (existsSync('dist/index.html')) {
  const html = await readFile('dist/index.html', 'utf8');
  for (const token of generatedHtmlRequirements) {
    if (!html.includes(token)) failures.push(`dist/index.html sem requisito: ${token}`);
  }
}

if (existsSync('dist/robots.txt')) {
  const robots = await readFile('dist/robots.txt', 'utf8');
  for (const token of ['User-agent: *', 'Allow: /', 'Sitemap:', 'Host:']) {
    if (!robots.includes(token)) failures.push(`dist/robots.txt sem requisito: ${token}`);
  }
}

if (existsSync('dist/sitemap.xml')) {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  for (const token of ['<urlset', '<loc>', '/laboratorio', '/contato']) {
    if (!sitemap.includes(token)) failures.push(`dist/sitemap.xml sem requisito: ${token}`);
  }
}

if (existsSync('dist/llms.txt')) {
  const llms = await readFile('dist/llms.txt', 'utf8');
  if (!llms.includes('VOLPONI')) failures.push('dist/llms.txt sem marca VOLPONI');
}

if (existsSync('dist/humans.txt')) {
  const humans = await readFile('dist/humans.txt', 'utf8');
  if (!humans.includes('Lorenza Volponi')) failures.push('dist/humans.txt sem autoria');
}

try {
  execFileSync(process.execPath, ['--check', 'scripts/static-build.mjs'], { stdio: 'pipe' });
  execFileSync(process.execPath, ['--check', 'scripts/check-static.mjs'], { stdio: 'pipe' });
} catch (error) {
  failures.push(`Falha de sintaxe JavaScript: ${error.message}`);
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}

console.log('Static checks passed');

import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const requiredFiles = ['package.json', 'vercel.json', 'site/index.html', 'site/styles.css', 'site/main.js', 'scripts/build-static.mjs'];
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

for (const file of requiredFiles.filter((file) => existsSync(file))) {
  const content = await readFile(file, 'utf8');
  if (/<<<<<<<|=======|>>>>>>>/.test(content)) failures.push(`Marcador de conflito encontrado em ${file}`);
}

const html = existsSync('site/index.html') ? await readFile('site/index.html', 'utf8') : '';
for (const token of ['<title>', 'meta name="description"', 'id="contato"', 'href="/styles.css"', 'src="/main.js"']) {
  if (!html.includes(token)) failures.push(`HTML sem requisito: ${token}`);
}

try {
  execFileSync(process.execPath, ['--check', 'site/main.js'], { stdio: 'pipe' });
  execFileSync(process.execPath, ['--check', 'scripts/build-static.mjs'], { stdio: 'pipe' });
  execFileSync(process.execPath, ['--check', 'scripts/check-static.mjs'], { stdio: 'pipe' });
} catch (error) {
  failures.push(`Falha de sintaxe JavaScript: ${error.message}`);
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}

console.log('Static checks passed');

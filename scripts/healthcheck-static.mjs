import { spawn } from 'node:child_process';

const port = Number(process.env.PORT || 4173);
const build = spawn('npm', ['run', 'build'], { stdio: 'inherit' });
await new Promise((resolve, reject) => {
  build.on('exit', (code) => code === 0 ? resolve() : reject(new Error(`build exited with ${code}`)));
});

const server = spawn(process.execPath, ['scripts/serve-static.mjs', 'dist', '--port', String(port)], { stdio: ['ignore', 'pipe', 'pipe'] });
try {
  let html = '';
  let lastError;

  for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      html = await response.text();
      break;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }

  if (!html) throw lastError || new Error('Preview estático não respondeu');

  const requiredTokens = [
    'VOLPONI',
    'Diamond Intelligence Studio',
    'id="portfolio"',
    'https://github.com/LorenzaVolponi/gameshow',
    'application/ld+json',
  ];

  for (const token of requiredTokens) {
    if (!html.includes(token)) throw new Error(`Resposta sem requisito: ${token}`);
  }

  console.log('Static healthcheck OK');
} finally {
  server.kill('SIGTERM');
}

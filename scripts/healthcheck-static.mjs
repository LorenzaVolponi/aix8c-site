import { spawn } from 'node:child_process';

const port = Number(process.env.PORT || 4173);
const build = spawn('npm', ['run', 'build'], { stdio: 'inherit' });
await new Promise((resolve, reject) => {
  build.on('exit', (code) => code === 0 ? resolve() : reject(new Error(`build exited with ${code}`)));
});

const server = spawn(process.execPath, ['scripts/serve-static.mjs', 'dist', '--port', String(port)], { stdio: ['ignore', 'pipe', 'pipe'] });
try {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(`http://127.0.0.1:${port}/`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const html = await response.text();
  if (!html.includes('AIX8C')) throw new Error('Resposta sem marca AIX8C');
  console.log('Runtime healthcheck OK');
} finally {
  server.kill('SIGTERM');
}

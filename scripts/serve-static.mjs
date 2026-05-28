import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { join, normalize, resolve } from 'node:path';

const args = process.argv.slice(2);
const rootArg = args.find((arg) => !arg.startsWith('-')) || 'dist';
const portFlagIndex = args.findIndex((arg) => arg === '--port' || arg === '-p');
const positionalPort = args.find((arg, index) => index > 0 && /^\d+$/.test(arg));
const port = Number(
  (portFlagIndex >= 0 && args[portFlagIndex + 1]) ||
  positionalPort ||
  process.env.PORT ||
  4173
);
const root = resolve(rootArg);
const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.ico', 'image/x-icon'],
  ['.xml', 'application/xml; charset=utf-8'],
  ['.txt', 'text/plain; charset=utf-8'],
]);

const server = createServer((request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);
  const safePath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '');
  let filePath = join(root, safePath);

  if (!filePath.startsWith(root)) filePath = join(root, 'index.html');
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) filePath = join(root, 'index.html');

  const extension = filePath.slice(filePath.lastIndexOf('.'));
  response.setHeader('Content-Type', types.get(extension) || 'application/octet-stream');
  createReadStream(filePath).pipe(response);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Serving ${root} at http://127.0.0.1:${port}`);
});

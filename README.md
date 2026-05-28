# AIX8C Site

Site institucional da AIX8C em modo estático e sem dependências de pacote para garantir que instalação, build, preview e deploy rodem mesmo em ambientes com registry npm bloqueado.

## Rodar localmente

```bash
npm ci --offline --ignore-scripts --no-audit --progress=false
npm run dev
```

O comando `npm run dev` serve a pasta `site/` em `http://127.0.0.1:8080`.

## Validar e gerar build

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

- `npm run lint` e `npm run typecheck` executam validações locais em Node.js, sem ESLint/TypeScript externos.
- `npm run build` copia `public/` e `site/` para `dist/`.
- `npm run preview` serve `dist/` em `http://127.0.0.1:4173`.

## Deploy Vercel

A Vercel usa `npm run vercel:build`, que executa o build estático e valida a presença de `dist/index.html`.

```bash
npm run vercel:build
```

A configuração de rotas e headers está em `vercel.json`.

## Estrutura principal

- `site/index.html`: conteúdo, SEO, schema e estrutura da página.
- `site/styles.css`: visual responsivo, hero, cards e seções.
- `site/main.js`: interações leves de ano automático e reveal on scroll.
- `scripts/build-static.mjs`: build sem dependências.
- `scripts/check-static.mjs`: validação sem dependências.
- `scripts/serve-static.mjs`: servidor local sem dependências.
- `scripts/healthcheck-static.mjs`: build + smoke test HTTP local.

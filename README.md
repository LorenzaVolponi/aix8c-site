# AIX8C Site

Site institucional da AIX8C em modo estático e sem dependências de pacote para garantir que instalação, build, preview e deploy rodem mesmo em ambientes com registry npm bloqueado.

## Rodar localmente

```bash
./scripts/bootstrap-dev.sh
npm install
npm run dev
```

Se quiser subir direto já acessível na rede local:

```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

## Build

```bash
npm run build
```

## Troubleshooting rápido (quando o site não abre)

1. Teste acesso ao registry:
   ```bash
   curl -I https://registry.npmjs.org/react
   ```
2. Se retornar `403`/`CONNECT tunnel failed`, o bloqueio é de proxy/firewall (infra), não do código.
3. Rode:
   ```bash
   ./scripts/bootstrap-dev.sh
   ```

## Scripts de automação

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

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Automação de manutenção (CI/CD)

Este repositório agora inclui automações para manutenção contínua de PRs:

- **PR Auto Fix** (`.github/workflows/pr-auto-fix.yml` + `scripts/auto-fix.sh`): executa fluxo definitivo (instalação, lint `--fix`, audit fix, build, gates finais), commita correções e comenta relatório automático na PR.
- **PR Merge Conflict Assist** (`.github/workflows/pr-merge-conflict-assist.yml`): tenta sincronizar `main` na branch da PR; se houver conflito, comenta os arquivos conflitantes.
- **PR Governance Bot** (`.github/workflows/pr-governance.yml` + `scripts/pr-governance.mjs`): por padrão só monitora. Via `workflow_dispatch` você pode habilitar:
  - fechar todas as PRs abertas (`close_open_prs=true`);
  - tentar merge automático de PRs limpas (`merge_ready_prs=true`).

> ⚠️ Recomendado: usar branch protection + required checks antes de habilitar automações destrutivas.

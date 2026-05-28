# Projeto Vite + React + TypeScript

## Setup local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Scripts de automação

```bash
bash scripts/check-env.sh
bash scripts/security-check.sh
bash scripts/build-check.sh
bash scripts/auto-fix.sh
bash scripts/api-healthcheck.sh
bash scripts/site-guardian.sh
bash scripts/deploy-all.sh
```

## CI/CD e automações

Este repositório possui automação completa com GitHub Actions:

- `ci.yml`: valida push e pull request com pipeline de build + healthcheck de preview.
- `security.yml`: checagens de segurança, detecção de secrets, validação de `.env` e relatório.
- `auto-fix.yml`: manutenção automática (manual e agendada), cria branch e abre PR com labels.
- `deploy.yml`: valida build em `main` e permite deploy via integração GitHub/Vercel ou Vercel CLI.
- `dependabot-automerge.yml`: habilita automerge para PRs do Dependabot de patch/minor.
- `labeler.yml`: aplica labels automáticas por tipo de alteração.
- `stale.yml`: gerencia issues/PRs inativas.
- `auto-merge-maintenance.yml`: habilita auto-merge para PRs automatizadas (com bloqueio por label `no-automerge`/`major-update`).
- `site-guardian.yml`: monitora disponibilidade com smoke check recorrente e abre issue automática de incidente em falha.

## Dependências automáticas

Dependabot configurado para updates semanais:
- patch/minor agrupados em PRs de manutenção.
- major updates em PRs separados.

## Secrets opcionais (GitHub)

Para deploy via Vercel CLI:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Segurança

- `.env` ignorado por padrão.
- `.env.example` disponível como referência.
- Workflows usam permissões mínimas.
- Sem push direto automático em `main` nas rotinas de auto-fix.
- `SECURITY.md` com política de reporte.

## Observação sobre backend/API

> ⚠️ Recomendado: usar branch protection + required checks antes de habilitar automações destrutivas.

## Auto-merge e segurança reforçada

Para você não precisar subir/mesclar manualmente, foi adicionado:

- **PR Auto Merge (Safe)** (`.github/workflows/pr-auto-merge.yml` + `scripts/pr-automerge.mjs`)
  - só faz merge automático com **label `automerge`**;
  - exige **1 aprovação** mínima;
  - exige **checks 100% verdes**;
  - ignora PR draft ou com estado de merge inseguro.

- **Security Guard** (`.github/workflows/security-guard.yml`)
  - roda `npm audit --omit=dev --audit-level=high`;
  - roda `npm run ci:verify` para garantir lint/typecheck/build;
  - executa em PRs, push na `main` e agenda diária.

### Como usar o fluxo automático

1. Abra sua PR normalmente.
2. Deixe os checks passarem (auto-fix + verify + security).
3. Garanta ao menos 1 aprovação.
4. Adicione a label **`automerge`**.
5. O workflow de auto-merge fará squash merge automaticamente quando estiver seguro.


### Modo TOC (merge/fechamento automático total)

No workflow **PR Auto Merge (Safe + Force)** você pode rodar manualmente (`workflow_dispatch`) com:

- `allow_force=true` → permite merge com label `force-merge` mesmo com erros/checks falhando.
- `auto_close_others=true` → fecha automaticamente as outras PRs abertas após um merge.

> Use `force-merge` apenas em cenário emergencial, pois ignora proteções de qualidade.


### One-click Release (merge + deploy)

Use o workflow **One Click Release** para:
1. processar fila de PRs com as regras do auto-merge (ou force-merge se habilitado);
2. executar `ci:verify`;
3. publicar no GitHub Pages automaticamente.

> ⚠️ Recomendado: usar branch protection + required checks antes de habilitar automações destrutivas.

## Auto-merge e segurança reforçada

Para você não precisar subir/mesclar manualmente, foi adicionado:

- **PR Auto Merge (Safe)** (`.github/workflows/pr-auto-merge.yml` + `scripts/pr-automerge.mjs`)
  - só faz merge automático com **label `automerge`**;
  - exige **1 aprovação** mínima;
  - exige **checks 100% verdes**;
  - ignora PR draft ou com estado de merge inseguro.

- **Security Guard** (`.github/workflows/security-guard.yml`)
  - roda `npm audit --omit=dev --audit-level=high`;
  - roda `npm run ci:verify` para garantir lint/typecheck/build;
  - executa em PRs, push na `main` e agenda diária.

### Como usar o fluxo automático

1. Abra sua PR normalmente.
2. Deixe os checks passarem (auto-fix + verify + security).
3. Garanta ao menos 1 aprovação.
4. Adicione a label **`automerge`**.
5. O workflow de auto-merge fará squash merge automaticamente quando estiver seguro.


### Modo TOC (merge/fechamento automático total)

No workflow **PR Auto Merge (Safe + Force)** você pode rodar manualmente (`workflow_dispatch`) com:

- `allow_force=true` → permite merge com label `force-merge` mesmo com erros/checks falhando.
- `auto_close_others=true` → fecha automaticamente as outras PRs abertas após um merge.

> Use `force-merge` apenas em cenário emergencial, pois ignora proteções de qualidade.


### One-click Release (merge + deploy)

Use o workflow **One Click Release** para:
1. processar fila de PRs com as regras do auto-merge (ou force-merge se habilitado);
2. executar `ci:verify`;
3. publicar no GitHub Pages automaticamente.

Inputs do workflow:
- `allow_force`
- `auto_close_others`


### Resolução automática de conflitos (modo avançado)

No workflow **PR Merge Conflict Assist** existe o input:
- `auto_resolve_code=true`

Quando ativo, a automação tenta resolver também conflitos em arquivos de código (`.ts/.tsx/.js/.jsx/.css`) priorizando a versão da branch da PR (`ours`). Use com cuidado.
Este projeto atual é frontend (Vite/React) e não expõe backend/API próprio no repositório. O `scripts/api-healthcheck.sh` valida a disponibilidade do app em preview (`/`) como healthcheck de deploy.

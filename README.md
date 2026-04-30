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
bash scripts/deploy-all.sh
```

## CI/CD e automações

Este repositório possui automação completa com GitHub Actions:

- `ci.yml`: valida push e pull request com instalação, lint/test (quando existirem) e build.
- `security.yml`: checagens de segurança, detecção de secrets, validação de `.env` e relatório.
- `auto-fix.yml`: manutenção automática (manual e agendada), cria branch e abre PR com labels.
- `deploy.yml`: valida build em `main` e permite deploy via integração GitHub/Vercel ou Vercel CLI (quando secrets estiverem configurados).
- `dependabot-automerge.yml`: habilita automerge para PRs do Dependabot de patch/minor.

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

## Observação sobre backend/API

Este projeto atual é frontend (Vite/React) e não expõe backend/API próprio no repositório. Por isso, não foi criado healthcheck de API. Se uma API for adicionada, recomenda-se incluir endpoint `/health` e testes de integração no CI.

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d5e3729f-9ebc-44dd-80cd-24d951775ce8

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d5e3729f-9ebc-44dd-80cd-24d951775ce8) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d5e3729f-9ebc-44dd-80cd-24d951775ce8) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Automação de manutenção (CI/CD)

Este repositório agora inclui automações para manutenção contínua de PRs:

- **PR Auto Fix** (`.github/workflows/pr-auto-fix.yml` + `scripts/auto-fix.sh`): executa fluxo definitivo (instalação, lint `--fix`, audit fix, build, gates finais), commita correções e comenta relatório automático na PR.
- **PR Merge Conflict Assist** (`.github/workflows/pr-merge-conflict-assist.yml`): tenta sincronizar `main` na branch da PR; se houver conflito, comenta os arquivos conflitantes.
- **PR Governance Bot** (`.github/workflows/pr-governance.yml` + `scripts/pr-governance.mjs`): por padrão só monitora. Via `workflow_dispatch` você pode habilitar:
  - fechar todas as PRs abertas (`close_open_prs=true`);
  - tentar merge automático de PRs limpas (`merge_ready_prs=true`).

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

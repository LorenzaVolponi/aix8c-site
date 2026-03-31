#!/usr/bin/env bash
set -euo pipefail

npm ci
npm run lint -- --fix
npm run build

# Tenta aplicar correções de segurança sem atualizar major automaticamente
npm audit fix --package-lock-only || true

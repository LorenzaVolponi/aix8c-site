#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"

if [ -x "./node_modules/.bin/vite" ]; then
  echo "==> Dependências detectadas. Iniciando Vite..."
  npm run dev -- --host 0.0.0.0 --port "${PORT}"
  exit 0
fi

echo "==> Sem Vite local. Subindo modo estático de contingência em http://0.0.0.0:${PORT}"
echo "==> Esse modo garante que o site abra mesmo sem npm install completo."
python3 -m http.server "${PORT}"

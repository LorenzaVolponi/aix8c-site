#!/usr/bin/env bash
set -euo pipefail

export VITE_BASE_PATH="${VITE_BASE_PATH:-/}"
echo "[vercel-guard] Using VITE_BASE_PATH=${VITE_BASE_PATH}"

npm run ci:verify

if [ ! -f dist/index.html ]; then
  echo "[vercel-guard] ERRO: dist/index.html não encontrado"
  exit 1
fi

echo "[vercel-guard] Build pronto para deploy"

#!/usr/bin/env bash
set -euo pipefail

echo "[opening-guard] Running build sanity checks"
npm run typecheck >/dev/null
npm run build >/dev/null

echo "[opening-guard] Verifying stable default route"
if ! rg -q '<Route path="/" element={<Index />} />' src/App.tsx; then
  echo "[opening-guard] ERRO: rota / não aponta para Index estável"
  exit 1
fi

echo "[opening-guard] Verifying visible hero fallback"
if ! rg -q 'AIX8C' src/pages/Index.tsx; then
  echo "[opening-guard] ERRO: fallback visual da home não encontrado"
  exit 1
fi

echo "[opening-guard] Verifying SPA rewrite on Vercel"
if ! rg -q '"destination": "/index.html"' vercel.json; then
  echo "[opening-guard] ERRO: rewrite SPA ausente no vercel.json"
  exit 1
fi

echo "[opening-guard] OK: proteção de abertura validada"

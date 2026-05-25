#!/usr/bin/env bash
set -euo pipefail

echo "==> Verificando acesso ao registry npm..."
if ! curl -fsSI https://registry.npmjs.org/react >/dev/null 2>&1; then
  echo "ERRO: sem acesso ao registry npm pelo ambiente atual."
  echo "Dica: valide proxy/firewall (HTTP_PROXY/HTTPS_PROXY) ou forneça um mirror npm liberado."
  exit 2
fi

echo "==> Instalando dependências..."
npm install --no-audit --no-fund

echo "==> Build de validação..."
npm run build

echo "==> Ambiente pronto. Para abrir local:"
echo "npm run dev -- --host 0.0.0.0 --port 5173"

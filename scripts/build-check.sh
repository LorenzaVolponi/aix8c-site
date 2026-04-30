#!/usr/bin/env bash
set -euo pipefail

if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

if npm run | grep -qE '^\s*lint\b'; then
  npm run lint
fi

if npm run | grep -qE '^\s*test\b'; then
  npm test -- --ci
fi

npm run build

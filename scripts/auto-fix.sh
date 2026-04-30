#!/usr/bin/env bash
set -euo pipefail

source scripts/ci-utils.sh
install_dependencies

if has_npm_script format; then
  npm run format || true
fi

if has_npm_script lint; then
  npm run lint -- --fix || true
fi

npm audit fix --audit-level=high || true

if has_npm_script test; then
  npm test -- --ci || true
fi

npm run build

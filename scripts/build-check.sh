#!/usr/bin/env bash
set -euo pipefail

source scripts/ci-utils.sh
install_dependencies

if has_npm_script lint; then
  npm run lint
fi

if has_npm_script test; then
  npm test -- --ci
fi

npm run build

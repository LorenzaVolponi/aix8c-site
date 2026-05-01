#!/usr/bin/env bash
set -euo pipefail

has_npm_script() {
  local script_name="$1"
  node -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync('package.json','utf8'));process.exit(p.scripts && p.scripts['$script_name'] ? 0 : 1)"
}

detect_package_manager() {
  if [ -f package-lock.json ]; then
    echo "npm"
  elif [ -f pnpm-lock.yaml ]; then
    echo "pnpm"
  elif [ -f yarn.lock ]; then
    echo "yarn"
  elif [ -f bun.lockb ]; then
    echo "bun"
  else
    echo "npm"
  fi
}

install_dependencies() {
  local pm
  pm="$(detect_package_manager)"
  case "$pm" in
    npm)
      if [ -f package-lock.json ]; then npm ci; else npm install; fi
      ;;
    pnpm)
      npm i -g pnpm
      pnpm install --frozen-lockfile
      ;;
    yarn)
      yarn install --frozen-lockfile
      ;;
    bun)
      npm i -g bun
      bun install --frozen-lockfile
      ;;
  esac
}

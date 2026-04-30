#!/usr/bin/env bash
set -euo pipefail

missing=0
for cmd in node npm git; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "[ERROR] Missing required command: $cmd"
    missing=1
  fi
done

[ -f package.json ] || { echo "[ERROR] package.json not found"; missing=1; }
[ -d src ] || { echo "[WARN] src/ folder not found"; }
[ -d .github/workflows ] || { echo "[WARN] .github/workflows/ folder not found"; }

if [ "$missing" -ne 0 ]; then
  exit 1
fi

echo "Environment check passed."

#!/usr/bin/env bash
set -euo pipefail

npm run build >/tmp/runtime-build.log
PORT=4173 npm run preview >/tmp/runtime-preview.log 2>&1 &
PID=$!
trap 'kill ${PID} >/dev/null 2>&1 || true' EXIT

for _ in {1..20}; do
  HTML="$(curl -fs http://127.0.0.1:4173/ || true)"
  if [[ "${HTML}" == *"VOLPONI"* && "${HTML}" == *"Diamond Intelligence Studio"* && "${HTML}" == *"id=\"portfolio\""* ]]; then
    echo "Runtime healthcheck OK"
    exit 0
  fi
  sleep 1
done

echo "Runtime healthcheck failed. Preview logs:" >&2
tail -n 80 /tmp/runtime-preview.log >&2
exit 1

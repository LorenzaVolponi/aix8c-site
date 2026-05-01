#!/usr/bin/env bash
set -euo pipefail

# Frontend healthcheck: validates that built app can be served and responds on /.
source scripts/ci-utils.sh
install_dependencies
npm run build >/dev/null

PORT="${PORT:-4173}"
npm run preview -- --host 127.0.0.1 --port "$PORT" >/tmp/preview.log 2>&1 &
PREVIEW_PID=$!
trap 'kill $PREVIEW_PID >/dev/null 2>&1 || true' EXIT

for i in {1..20}; do
  if curl -fsS "http://127.0.0.1:${PORT}/" >/dev/null; then
    echo "Healthcheck OK: preview responded on /."
    exit 0
  fi
  sleep 1
done

echo "Healthcheck failed. Preview logs:" >&2
tail -n 80 /tmp/preview.log >&2
exit 1

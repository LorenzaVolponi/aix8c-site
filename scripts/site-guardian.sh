#!/usr/bin/env bash
set -euo pipefail

source scripts/ci-utils.sh
install_dependencies

npm run build >/dev/null

PORT="${PORT:-4173}"
URL="http://127.0.0.1:${PORT}/"

npm run preview -- --host 127.0.0.1 --port "$PORT" >/tmp/site-guardian-preview.log 2>&1 &
PID=$!
cleanup() {
  kill "$PID" >/dev/null 2>&1 || true
}
trap cleanup EXIT

for _ in {1..30}; do
  if curl -fsS "$URL" >/dev/null; then
    echo "[OK] Site responding at $URL"
    exit 0
  fi
  sleep 1
done

echo "[CRITICAL] Site did not respond at $URL"
echo "--- preview log ---"
tail -n 120 /tmp/site-guardian-preview.log || true
exit 1

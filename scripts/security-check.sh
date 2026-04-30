#!/usr/bin/env bash
set -euo pipefail

mkdir -p .ci
REPORT=.ci/security-report.txt
: > "$REPORT"

echo "Security report - $(date -u +%Y-%m-%dT%H:%M:%SZ)" >> "$REPORT"

if [ -f .env ]; then
  echo "[CRITICAL] .env file exists in repository root. Remove and use secrets." | tee -a "$REPORT"
  if git ls-files --error-unmatch .env >/dev/null 2>&1; then
    echo "[CRITICAL] .env is versioned. Failing." | tee -a "$REPORT"
    exit 1
  fi
fi

if git ls-files | rg -n '(^|/)\.env($|\.(local|development|production|test))$' >/dev/null 2>&1; then
  echo "[CRITICAL] Tracked .env-like file detected." | tee -a "$REPORT"
  exit 1
else
  echo "[OK] No tracked .env files detected." >> "$REPORT"
fi

if git grep -nE '(AKIA[0-9A-Z]{16}|-----BEGIN (RSA|EC|OPENSSH|DSA) PRIVATE KEY-----|ghp_[A-Za-z0-9]{36}|xox[baprs]-[A-Za-z0-9-]{10,})' -- . ':!package-lock.json' ':!bun.lockb' >/tmp/secret-scan.out; then
  echo "[CRITICAL] Possible secret material detected. Review immediately." | tee -a "$REPORT"
  cat /tmp/secret-scan.out >> "$REPORT"
  exit 1
else
  echo "[OK] No obvious hardcoded secrets found by pattern scan." >> "$REPORT"
fi

if [ -f package.json ]; then
  npm audit --omit=dev --audit-level=high >> "$REPORT" 2>&1 || true
fi

echo "Security checks completed." >> "$REPORT"
echo "Security checks completed. See $REPORT"

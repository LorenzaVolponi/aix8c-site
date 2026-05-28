#!/usr/bin/env bash
set -euo pipefail

source scripts/ci-utils.sh
install_dependencies

: > "${REPORT_FILE}"

echo "# Relatório de Auto-Correção" >> "${REPORT_FILE}"
echo >> "${REPORT_FILE}"

run_step() {
  local label="$1"
  local cmd="$2"
  local logfile
  logfile=$(mktemp)

  echo "Executando: ${cmd}"
  if bash -lc "${cmd}" >"${logfile}" 2>&1; then
    echo "- ✅ ${label}: sucesso" >> "${REPORT_FILE}"
    return 0
  fi

  echo "- ❌ ${label}: falhou" >> "${REPORT_FILE}"
  echo >> "${REPORT_FILE}"
  echo '```' >> "${REPORT_FILE}"
  tail -n 60 "${logfile}" >> "${REPORT_FILE}"
  echo '```' >> "${REPORT_FILE}"

  return 1
}

FAILED=0

run_step "Instalação de dependências" "npm ci" || FAILED=1
run_step "Lint com correção automática" "npm run lint -- --fix" || true
run_step "Correções de segurança (lockfile)" "npm audit fix --package-lock-only" || true
run_step "Typecheck de validação" "npm run typecheck" || true
run_step "Build de validação" "npm run build" || true

# Gate final: decide status da PR
if ! run_step "Gate final de lint" "npm run lint"; then
  FAILED=1
fi
if ! run_step "Gate final de typecheck" "npm run typecheck"; then
  FAILED=1
fi
if ! run_step "Gate final de build" "npm run build"; then
  FAILED=1
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

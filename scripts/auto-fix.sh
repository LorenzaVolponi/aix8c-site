#!/usr/bin/env bash
set -uo pipefail

REPORT_DIR=".ci"
REPORT_FILE="${REPORT_DIR}/autofix-report.md"
mkdir -p "${REPORT_DIR}"

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
run_step "Build de validação" "npm run build" || true

# Gate final: decide status da PR
if ! run_step "Gate final de lint" "npm run lint"; then
  FAILED=1
fi
if ! run_step "Gate final de build" "npm run build"; then
  FAILED=1
fi

if [ "$FAILED" -eq 0 ]; then
  echo >> "${REPORT_FILE}"
  echo "✅ Resultado final: PR apta após auto-correção." >> "${REPORT_FILE}"
  exit 0
fi

echo >> "${REPORT_FILE}"
echo "❌ Resultado final: auto-correção parcial; intervenção manual necessária." >> "${REPORT_FILE}"
exit 1

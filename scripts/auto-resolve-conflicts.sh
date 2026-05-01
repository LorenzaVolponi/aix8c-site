#!/usr/bin/env bash
set -euo pipefail

TARGET_BRANCH="${1:-main}"

git fetch origin "${TARGET_BRANCH}"

if git merge --no-edit "origin/${TARGET_BRANCH}"; then
  echo "MERGE_RESULT=clean"
  exit 0
fi

CONFLICTS=$(git diff --name-only --diff-filter=U || true)
if [ -z "$CONFLICTS" ]; then
  echo "MERGE_RESULT=unknown"
  exit 1
fi

echo "Conflitos detectados:"
echo "$CONFLICTS"

AUTO_RESOLVED=1
for file in $CONFLICTS; do
  case "$file" in
    package-lock.json|bun.lockb|pnpm-lock.yaml|yarn.lock|*.md|*.json)
      # Mantém versão da branch alvo para reduzir ruptura de automação
      git checkout --theirs "$file" || AUTO_RESOLVED=0
      git add "$file" || AUTO_RESOLVED=0
      ;;
    *)
      AUTO_RESOLVED=0
      ;;
  esac
done

if [ "$AUTO_RESOLVED" -eq 1 ]; then
  git commit -m "chore(ci): auto-resolve merge conflicts with ${TARGET_BRANCH}" || true
  echo "MERGE_RESULT=auto_resolved"
  exit 0
fi

echo "MERGE_RESULT=manual_required"
exit 2

#!/usr/bin/env bash
set -euo pipefail

bash scripts/check-env.sh
bash scripts/security-check.sh
bash scripts/build-check.sh

git add -A
if ! git diff --cached --quiet; then
  git commit -m "chore(deploy): automated pre-deploy maintenance"
fi

git pull --rebase

git push

echo "Deploy-all workflow finished safely."

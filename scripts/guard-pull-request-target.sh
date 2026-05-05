#!/usr/bin/env bash
set -euo pipefail

EVENT_NAME="${GITHUB_EVENT_NAME:-}"
REPO_FULL_NAME="${GITHUB_REPOSITORY:-}"
HEAD_REPO_FULL_NAME="${PR_HEAD_REPO_FULL_NAME:-}"
AUTHOR_ASSOCIATION="${PR_AUTHOR_ASSOCIATION:-}"

OUTPUT_FILE="${GITHUB_OUTPUT:-}"

allow="false"
reason="blocked_by_default"

if [[ "$EVENT_NAME" != "pull_request_target" ]]; then
  reason="not_pull_request_target"
elif [[ -z "$REPO_FULL_NAME" || -z "$HEAD_REPO_FULL_NAME" ]]; then
  reason="missing_repository_context"
elif [[ "$HEAD_REPO_FULL_NAME" != "$REPO_FULL_NAME" ]]; then
  reason="fork_pr_not_allowed"
else
  case "$AUTHOR_ASSOCIATION" in
    OWNER|MEMBER|COLLABORATOR)
      allow="true"
      reason="trusted_same_repo_pr"
      ;;
    *)
      reason="untrusted_author_association:${AUTHOR_ASSOCIATION:-unknown}"
      ;;
  esac
fi

echo "Autopilot guard result: allow=$allow, reason=$reason"

if [[ -n "$OUTPUT_FILE" ]]; then
  {
    echo "allow=$allow"
    echo "reason=$reason"
  } >> "$OUTPUT_FILE"
fi

#!/usr/bin/env node

const token = process.env.GITHUB_TOKEN;
const repo = process.env.GITHUB_REPOSITORY;
if (!token || !repo) {
  console.error('Missing GITHUB_TOKEN or GITHUB_REPOSITORY');
  process.exit(1);
}

const [owner, name] = repo.split('/');
const REQUIRED_LABEL = process.env.REQUIRED_LABEL || 'automerge';
const FORCE_LABEL = process.env.FORCE_LABEL || 'force-merge';
const REQUIRED_APPROVALS = Number(process.env.REQUIRED_APPROVALS || 1);
const ALLOW_FORCE = process.env.ALLOW_FORCE === 'true';
const AUTO_CLOSE_OTHERS = process.env.AUTO_CLOSE_OTHERS === 'true';

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

async function gh(path, options = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: { ...headers, ...(options.headers || {}) },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status} ${path}: ${await res.text()}`);
  if (res.status === 204) return null;
  return res.json();
}

function latestApprovals(reviews) {
  const byUser = new Map();
  for (const r of reviews) byUser.set(r.user.login, r.state);
  return [...byUser.values()].filter((s) => s === 'APPROVED').length;
}

async function canMerge(prNumber) {
  const pr = await gh(`/repos/${owner}/${name}/pulls/${prNumber}`);
  const labels = pr.labels.map((l) => l.name);

  if (pr.draft) return { ok: false, reason: 'draft' };

  if (ALLOW_FORCE && labels.includes(FORCE_LABEL)) {
    return { ok: true, force: true, reason: 'force label enabled' };
  }

  if (!labels.includes(REQUIRED_LABEL)) return { ok: false, reason: `missing ${REQUIRED_LABEL}` };

  const reviews = await gh(`/repos/${owner}/${name}/pulls/${prNumber}/reviews`);
  if (latestApprovals(reviews) < REQUIRED_APPROVALS) return { ok: false, reason: 'missing approvals' };

  const checks = await gh(`/repos/${owner}/${name}/commits/${pr.head.sha}/check-runs`);
  const failing = checks.check_runs.filter((c) => c.status !== 'completed' || c.conclusion !== 'success');
  if (failing.length > 0) return { ok: false, reason: `checks failing/pending: ${failing.map((f) => f.name).join(', ')}` };

  return { ok: true, force: false, reason: 'safe merge' };
}

async function merge(prNumber, force = false) {
  return gh(`/repos/${owner}/${name}/pulls/${prNumber}/merge`, {
    method: 'PUT',
    body: JSON.stringify({
      merge_method: 'squash',
      commit_title: force ? `chore: force-merge #${prNumber}` : `chore: auto-merge #${prNumber}`,
    }),
  });
}

async function closePull(prNumber) {
  return gh(`/repos/${owner}/${name}/pulls/${prNumber}`, {
    method: 'PATCH',
    body: JSON.stringify({ state: 'closed' }),
  });
}

async function run() {
  const prs = await gh(`/repos/${owner}/${name}/pulls?state=open&per_page=100&sort=updated&direction=desc`);

  let mergedPR = null;
  for (const pr of prs) {
    try {
      const gate = await canMerge(pr.number);
      if (!gate.ok) {
        console.log(`Skip #${pr.number}: ${gate.reason}`);
        continue;
      }
      await merge(pr.number, gate.force);
      mergedPR = pr.number;
      console.log(`Merged #${pr.number} (${gate.reason})`);
      break;
    } catch (e) {
      console.log(`Error on #${pr.number}: ${e.message}`);
    }
  }

  if (AUTO_CLOSE_OTHERS && mergedPR) {
    for (const pr of prs) {
      if (pr.number !== mergedPR) {
        try {
          await closePull(pr.number);
          console.log(`Closed #${pr.number} after merge #${mergedPR}`);
        } catch (e) {
          console.log(`Could not close #${pr.number}: ${e.message}`);
        }
      }
    }
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

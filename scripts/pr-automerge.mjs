#!/usr/bin/env node

const token = process.env.GITHUB_TOKEN;
const repo = process.env.GITHUB_REPOSITORY;
if (!token || !repo) {
  console.error('Missing GITHUB_TOKEN or GITHUB_REPOSITORY');
  process.exit(1);
}

const [owner, name] = repo.split('/');
const REQUIRED_LABEL = process.env.REQUIRED_LABEL || 'automerge';
const REQUIRED_APPROVALS = Number(process.env.REQUIRED_APPROVALS || 1);

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

async function isMergeSafe(prNumber) {
  const pr = await gh(`/repos/${owner}/${name}/pulls/${prNumber}`);
  const labels = pr.labels.map((l) => l.name);
  if (pr.draft || !labels.includes(REQUIRED_LABEL)) return { ok: false, reason: 'draft or missing label' };

  const reviews = await gh(`/repos/${owner}/${name}/pulls/${prNumber}/reviews`);
  if (latestApprovals(reviews) < REQUIRED_APPROVALS) return { ok: false, reason: 'missing approvals' };

  const checks = await gh(`/repos/${owner}/${name}/commits/${pr.head.sha}/check-runs`);
  const failing = checks.check_runs.filter((c) => c.status !== 'completed' || c.conclusion !== 'success');
  if (failing.length > 0) return { ok: false, reason: `checks pending/failing: ${failing.map((f) => f.name).join(', ')}` };

  if (pr.mergeable_state && !['clean', 'has_hooks', 'unstable'].includes(pr.mergeable_state)) {
    return { ok: false, reason: `mergeable_state=${pr.mergeable_state}` };
  }

  return { ok: true };
}

async function merge(prNumber) {
  return gh(`/repos/${owner}/${name}/pulls/${prNumber}/merge`, {
    method: 'PUT',
    body: JSON.stringify({ merge_method: 'squash', commit_title: `chore: auto-merge #${prNumber}` }),
  });
}

async function run() {
  const prs = await gh(`/repos/${owner}/${name}/pulls?state=open&per_page=100`);
  for (const pr of prs) {
    try {
      const safe = await isMergeSafe(pr.number);
      if (!safe.ok) {
        console.log(`Skip #${pr.number}: ${safe.reason}`);
        continue;
      }
      await merge(pr.number);
      console.log(`Merged #${pr.number}`);
    } catch (e) {
      console.log(`Error on #${pr.number}: ${e.message}`);
    }
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

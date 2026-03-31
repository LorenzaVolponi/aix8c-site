#!/usr/bin/env node

const token = process.env.GITHUB_TOKEN;
const repo = process.env.GITHUB_REPOSITORY;

if (!token || !repo) {
  console.error('GITHUB_TOKEN e GITHUB_REPOSITORY são obrigatórios.');
  process.exit(1);
}

const [owner, name] = repo.split('/');
const shouldCloseOpenPrs = process.env.CLOSE_OPEN_PRS === 'true';
const shouldMergeReadyPrs = process.env.MERGE_READY_PRS === 'true';

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

async function gh(path, options = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      ...headers,
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API ${response.status} em ${path}: ${text}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

async function listOpenPullRequests() {
  return gh(`/repos/${owner}/${name}/pulls?state=open&per_page=100`);
}

async function closePullRequest(number) {
  return gh(`/repos/${owner}/${name}/pulls/${number}`, {
    method: 'PATCH',
    body: JSON.stringify({ state: 'closed' }),
  });
}

async function mergePullRequest(number) {
  return gh(`/repos/${owner}/${name}/pulls/${number}/merge`, {
    method: 'PUT',
    body: JSON.stringify({
      merge_method: 'squash',
      commit_title: `chore: auto-merge #${number}`,
    }),
  });
}

function isMergeCandidate(pr) {
  return !pr.draft && pr.mergeable_state === 'clean';
}

async function run() {
  const prs = await listOpenPullRequests();

  console.log(`PRs abertas encontradas: ${prs.length}`);

  if (shouldCloseOpenPrs) {
    for (const pr of prs) {
      await closePullRequest(pr.number);
      console.log(`PR #${pr.number} fechada automaticamente.`);
    }
  }

  if (shouldMergeReadyPrs) {
    for (const pr of prs) {
      const detailedPr = await gh(`/repos/${owner}/${name}/pulls/${pr.number}`);
      if (!isMergeCandidate(detailedPr)) {
        console.log(`PR #${pr.number} ignorada (estado de merge: ${detailedPr.mergeable_state ?? 'desconhecido'}).`);
        continue;
      }

      try {
        await mergePullRequest(pr.number);
        console.log(`PR #${pr.number} mergeada automaticamente.`);
      } catch (error) {
        console.log(`Falha ao fazer merge da PR #${pr.number}: ${error.message}`);
      }
    }
  }

  if (!shouldCloseOpenPrs && !shouldMergeReadyPrs) {
    console.log('Nenhuma ação destrutiva foi executada. Configure CLOSE_OPEN_PRS ou MERGE_READY_PRS como true.');
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

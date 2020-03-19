'use strict'

const core = require('@actions/core')
const { GitHub, context } = require('@actions/github')

const main = async () => {
  const token = core.getInput('github-token')
  const number = core.getInput('number')
  const actor = core.getInput('actor')

  const octokit = new GitHub(token)

  await octokit.pulls.createReview({
    ...context.repo,
    owner: actor,
    pull_number: number,
    event: 'APPROVE'
  })
}

main().catch(err => core.setFailed(err.message))

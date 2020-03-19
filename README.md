# approve-pull-request-action

A GitHub Action for approving pull requests.

This is based on https://github.com/marketplace/actions/approve-pull-request

## Usage

```yaml
steps:
  - name: Approve Pull Request
    uses: raravena80/approve-pr-action@v1
    with:
      github-token: ${{ secrets.GITHUB_TOKEN }}
      number: 1
```

## Related

- [find-pull-request-action](https://github.com/juliangruber/find-pull-request-action) &mdash; Find a Pull Request
- [merge-pull-request-action](https://github.com/juliangruber/merge-pull-request-action) &mdash; Merge a Pull Request
- [octokit-action](https://github.com/juliangruber/octokit-action) &mdash; Generic Octokit.js Action

## License

MIT

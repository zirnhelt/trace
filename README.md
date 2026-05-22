# TRACE — Content Accountability Standard

Website for the TRACE framework and Community Content Compact, developed
through Cariboo Signals (May 2026).

**Live site:** [tracestandard.org](https://tracestandard.org)

## What's here

| File | Purpose |
|---|---|
| `index.html` | TRACE landing page |
| `worker.js` | Cloudflare Worker that serves the HTML |
| `wrangler.toml` | Worker configuration |
| `.github/workflows/deploy.yml` | Auto-deploy on push to main |

## Deploying

Push to `main` — GitHub Actions handles the rest via Wrangler.

Requires a `CF_API_TOKEN` secret in the repo (Settings → Secrets).
Token needs Cloudflare Workers edit permissions.

## Related documents (not yet on the site)

- **Creative Content Accountability Framework** — full scoring rubric,
  Track A (20pts) and Track B (35pts)
- **Scorecard** — React component for scoring and generating
  accountability cards
- **The Community Content Compact** — manifesto for ethical content
  production
- **Policy Brief** — "Who Gets to Tell a Community's Story?" — for
  funders and policymakers

These may become additional pages or resources on the site over time.

## License

Offered for adaptation and use by any organization working on
these questions.

# AgentPress website

Production: https://www.agent.press

The website runs as a full Next.js / React application on AWS, with a standalone Node server behind Caddy and CloudFront.

## Development

Use Node.js 24 and run:

```bash
npm ci
npm run dev
```

## Production deployment

**Push or merge to `main` to deploy.** [Deploy website to AWS](https://github.com/andywalters47/agentpress-website/actions/workflows/deploy.yml) starts automatically for every main push.

GitHub Actions builds the application, checks TypeScript, starts a candidate release, switches traffic after health checks, and verifies the public website. A failed build keeps the current release; failed production verification restores the previous release. The deployed commit is available at https://www.agent.press/__deployment.json.

Watch the workflow's build and deploy jobs in the Actions tab. No local deploy command or operator laptop is required. Feature-branch pushes do not deploy production.

Deployment uses short-lived GitHub OIDC credentials restricted to the website instance. The workflow has no DNS permissions. See [deployment details](ops/deploy/README.md) for configuration and recovery behavior.

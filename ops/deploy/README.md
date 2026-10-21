# Automatic production deployments

Every push to `main` runs `.github/workflows/deploy.yml`, builds the Next.js standalone app in Linux, and deploys it to the AWS website. GitHub Actions is the deployment path; no operator laptop or manual upload is needed.

The build job has read-only repository access. The deployment job exchanges GitHub OIDC for short-lived AWS credentials. The AWS role trusts only this repository's main branch and can obtain temporary SSH credentials and adjust SSH ingress on the website instance only. No long-lived AWS or SSH credentials are stored in GitHub. The existing SSH host key is pinned. Runner access is restricted to its IPv4 address and removed when the job finishes.

GitHub repository variables hold `AWS_DEPLOY_ROLE_ARN`, `LIGHTSAIL_INSTANCE`, `DEPLOY_HOST`, and `DEPLOY_SSH_KNOWN_HOSTS`. AWS region is us-east-1. No DNS permissions are granted.

A candidate starts on the inactive local port. The homepage, article, exact commit marker, and Caddy configuration must pass before traffic switches. Previous JavaScript/CSS chunks remain available to existing visitors. The job checks the public commit marker at `/__deployment.json` and crawls production pages, linked assets, metadata, redirects, and image optimization. If public verification fails, it restores and checks the previous release and marks the run failed. Failed builds never reach deployment. Runs are serialized; superseded builds do not overwrite newer main commits.

Follow the workflow in the repository's Actions tab. A green deploy job means the public site passed verification for that commit. Build and verification artifacts are retained with the run. The workflow can also be rerun manually against main.

The Docker image pins the Node build runtime. A Node major-version upgrade must also update the server runtime deliberately. The application remains a full Next.js Node server; this is not a static export.

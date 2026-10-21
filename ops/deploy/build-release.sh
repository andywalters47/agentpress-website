#!/usr/bin/env bash
set -euo pipefail
: "${GITHUB_SHA:?Commit SHA required}"
[[ "$GITHUB_SHA" =~ ^[a-f0-9]{40}$ ]] || exit 2
mkdir -p .deployment
python3 - <<'META'
import json, os
from pathlib import Path
Path('public/__deployment.json').write_text(json.dumps({'sha':os.environ['GITHUB_SHA']})+'\n')
META
docker buildx build --platform linux/amd64 --file ops/deploy/Dockerfile --target artifact --output type=local,dest=.deployment/artifact .
tar -czf .deployment/release.tar.gz -C .deployment/artifact .
(cd .deployment && sha256sum release.tar.gz > release.sha256)

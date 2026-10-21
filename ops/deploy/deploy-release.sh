#!/usr/bin/env bash
set -euo pipefail
: "${GITHUB_SHA:?}" "${GITHUB_RUN_ID:?}" "${GITHUB_RUN_ATTEMPT:?}"
: "${LIGHTSAIL_INSTANCE:?}" "${DEPLOY_HOST:?}" "${DEPLOY_SSH_KNOWN_HOSTS:?}" "${PRODUCTION_URL:?}"
[[ "$GITHUB_SHA" =~ ^[a-f0-9]{40}$ ]] || exit 2
[[ "$GITHUB_RUN_ID" =~ ^[0-9]+$ && "$GITHUB_RUN_ATTEMPT" =~ ^[0-9]+$ ]] || exit 2
[[ "$LIGHTSAIL_INSTANCE" =~ ^[A-Za-z0-9-]+$ && "$DEPLOY_HOST" =~ ^[0-9.]+$ ]] || exit 2
[[ "$PRODUCTION_URL" == https://www.agent.press ]] || exit 2
[[ "${GITHUB_REF:-}" == refs/heads/main ]] || exit 2
(cd .deployment && sha256sum -c release.sha256)
# Do not publish an older build after main has advanced during its build.
latest_sha=$(git ls-remote https://github.com/andywalters47/agentpress-website.git refs/heads/main | cut -f1)
if [[ "$latest_sha" != "$GITHUB_SHA" ]]; then
  echo 'A newer main commit exists; its queued run will deploy instead.'
  exit 0
fi
work=$(mktemp -d)
chmod 700 "$work"
runner_cidr=''
rollback_needed=0
cleanup() {
  local status=$?
  trap - EXIT
  if (( rollback_needed == 1 )); then
    echo 'Restoring the previous release after interrupted or failed verification.' >&2
    if ! ssh "${ssh_options[@]}" "$server" "sudo bash /tmp/activate-$release_id.sh $old_release $DEPLOY_HOST.sslip.io"; then
      echo 'Automatic rollback failed; inspect the production run immediately.' >&2
      status=1
    fi
  fi
  if [[ -n "$runner_cidr" ]]; then
    if aws lightsail close-instance-public-ports --instance-name "$LIGHTSAIL_INSTANCE" --port-info "{\"fromPort\":22,\"toPort\":22,\"protocol\":\"tcp\",\"cidrs\":[\"$runner_cidr\"]}" >/dev/null; then
      printf 'DEPLOY_RUNNER_CIDR=\n' >> "$GITHUB_ENV"
    else
      echo 'Temporary SSH access cleanup failed; the workflow cleanup step will retry.' >&2
      status=1
    fi
  fi
  rm -rf "$work"
  exit "$status"
}
trap cleanup EXIT
trap 'exit 130' INT TERM
runner_ip=$(curl --fail --silent --show-error --max-time 20 https://checkip.amazonaws.com)
python3 - "$runner_ip" <<'IP'
import ipaddress,sys
assert ipaddress.ip_address(sys.argv[1]).version == 4
IP
runner_cidr="$runner_ip/32"
printf 'DEPLOY_RUNNER_CIDR=%s\n' "$runner_cidr" >> "$GITHUB_ENV"
aws lightsail open-instance-public-ports --instance-name "$LIGHTSAIL_INSTANCE" --port-info "{\"fromPort\":22,\"toPort\":22,\"protocol\":\"tcp\",\"cidrs\":[\"$runner_cidr\"]}" >/dev/null
aws lightsail get-instance-access-details --instance-name "$LIGHTSAIL_INSTANCE" --protocol ssh > "$work/access.json"
python3 - "$work" "$DEPLOY_HOST" <<'KEY'
import json,sys
from pathlib import Path
p=Path(sys.argv[1]); a=json.loads((p/'access.json').read_text())['accessDetails']
assert a['ipAddress'] == sys.argv[2] and a['username'] == 'ubuntu'
for field,name in [('privateKey','key'),('certKey','key-cert.pub')]:
 f=p/name; f.write_text(a[field].rstrip()+'\n'); f.chmod(0o600)
KEY
printf '%s\n' "$DEPLOY_SSH_KNOWN_HOSTS" > "$work/known_hosts"
ssh_options=(-i "$work/key" -o "CertificateFile=$work/key-cert.pub" -o IdentitiesOnly=yes -o "UserKnownHostsFile=$work/known_hosts" -o StrictHostKeyChecking=yes -o ConnectTimeout=10 -o BatchMode=yes)
server="ubuntu@$DEPLOY_HOST"
ready=0
for attempt in {1..15}; do
  if ssh "${ssh_options[@]}" "$server" true; then ready=1; break; fi
  sleep 2
done
[[ "$ready" == 1 ]] || { echo 'SSH did not become available'; exit 1; }
release_id="${GITHUB_SHA:0:12}-$GITHUB_RUN_ID-$GITHUB_RUN_ATTEMPT"
old_release=$(ssh "${ssh_options[@]}" "$server" 'cat /etc/agentpress/active-release')
[[ "$old_release" =~ ^[A-Za-z0-9._-]+$ ]] || exit 2
scp "${ssh_options[@]}" .deployment/release.tar.gz "$server:/tmp/agentpress-$release_id.tar.gz"
scp "${ssh_options[@]}" ops/deploy/activate-release.sh "$server:/tmp/activate-$release_id.sh"
checksum=$(cut -d' ' -f1 .deployment/release.sha256)
ssh "${ssh_options[@]}" "$server" "set -eu; echo '$checksum  /tmp/agentpress-$release_id.tar.gz' | sha256sum -c -; sudo install -d -o agentpress -g agentpress /srv/agentpress/releases/$release_id; sudo -u agentpress tar --no-same-owner -xzf /tmp/agentpress-$release_id.tar.gz -C /srv/agentpress/releases/$release_id; sudo bash /tmp/activate-$release_id.sh $release_id $DEPLOY_HOST.sslip.io $GITHUB_SHA"
rollback_needed=1
verify_production() {
  curl --fail --silent --show-error "$PRODUCTION_URL/__deployment.json" | python3 -c 'import json,sys; assert json.load(sys.stdin)["sha"] == sys.argv[1]' "$GITHUB_SHA" &&
  python3 ops/deploy/verify-site.py "$PRODUCTION_URL" .deployment/production-verification.json --production
}
if ! verify_production; then
  echo 'Production verification failed; restoring the previous release.' >&2
  ssh "${ssh_options[@]}" "$server" "sudo bash /tmp/activate-$release_id.sh $old_release $DEPLOY_HOST.sslip.io"
  rollback_needed=0
  python3 ops/deploy/verify-site.py "$PRODUCTION_URL" .deployment/rollback-verification.json --production || true
  exit 1
fi
rollback_needed=0
ssh "${ssh_options[@]}" "$server" "rm -f /tmp/agentpress-$release_id.tar.gz /tmp/activate-$release_id.sh"
{
  printf '### Website deployed\n\n'
  printf 'Commit: `%s`\n\n' "$GITHUB_SHA"
  printf 'Live site: %s\n\n' "$PRODUCTION_URL"
  printf 'Production routes, assets, article metadata, and exact deployed commit verified.\n'
} >> "$GITHUB_STEP_SUMMARY"

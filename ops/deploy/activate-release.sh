#!/usr/bin/env bash
# Runs only on the website instance. Candidate failures preserve the active release.
set -euo pipefail
release_id=${1:?Release required}
origin_host=${2:?Origin hostname required}
expected_sha=${3:-}
[[ "$release_id" =~ ^[A-Za-z0-9._-]+$ ]] || exit 2
[[ "$origin_host" =~ ^[0-9.]+\.sslip\.io$ ]] || exit 2
[[ -z "$expected_sha" || "$expected_sha" =~ ^[a-f0-9]{40}$ ]] || exit 2
exec 9>/run/agentpress-deploy.lock
flock -n 9 || { echo 'Another deployment is running'; exit 1; }
release="/srv/agentpress/releases/$release_id"
test -f "$release/server.js"
old_port=$(cat /etc/agentpress/active-port)
old_release=$(cat /etc/agentpress/active-release)
port=3000
if [[ "$old_port" == 3000 ]]; then port=3001; fi
committed=0
proxy_changed=0
cleanup() {
  local status=$?
  if (( status != 0 && committed == 0 )); then
    if (( proxy_changed == 1 )); then
      cp /etc/caddy/Caddyfile.previous /etc/caddy/Caddyfile
      systemctl reload caddy || true
      printf '%s\n' "$old_port" > /etc/agentpress/active-port
      printf '%s\n' "$old_release" > /etc/agentpress/active-release
    fi
    systemctl stop "agentpress@$port" || true
    echo 'Candidate rejected; previous production release retained.' >&2
  fi
}
trap cleanup EXIT
systemctl stop "agentpress@$port" || true
# Preserve chunks referenced by clients that loaded the previous release.
if [[ -d "/srv/agentpress/releases/$old_release/.next/static" ]]; then
  cp -an "/srv/agentpress/releases/$old_release/.next/static/." "$release/.next/static/"
fi
ln -sfn "$release" "/srv/agentpress/slots/$port"
chown -R agentpress:agentpress "$release"
systemctl start "agentpress@$port"
curl --retry 20 --retry-delay 1 --retry-connrefused --retry-all-errors -fsS "http://127.0.0.1:$port/" -o /dev/null
curl -fsS "http://127.0.0.1:$port/why-ai-transformation-hires-fail" -o /dev/null
if [[ -n "$expected_sha" ]]; then
  curl -fsS "http://127.0.0.1:$port/__deployment.json" | python3 -c 'import json,sys; assert json.load(sys.stdin)["sha"] == sys.argv[1]' "$expected_sha"
fi
cat > /etc/caddy/Caddyfile.candidate <<CADDY
$origin_host {
  encode zstd gzip
  header X-Robots-Tag "noindex, nofollow, noarchive"
  header X-Content-Type-Options "nosniff"
  reverse_proxy 127.0.0.1:$port {
    flush_interval -1
  }
  log {
    output file /var/log/caddy/agentpress-preview-access.log {
      roll_size 10MiB
      roll_keep 5
      roll_keep_for 336h
    }
  }
}
CADDY
runuser -u caddy -- caddy validate --config /etc/caddy/Caddyfile.candidate --adapter caddyfile
cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.previous
proxy_changed=1
cp /etc/caddy/Caddyfile.candidate /etc/caddy/Caddyfile
systemctl reload caddy
systemctl enable "agentpress@$port"
printf '%s\n' "$old_release" > /etc/agentpress/previous-release
printf '%s\n' "$old_port" > /etc/agentpress/previous-port
printf '%s\n' "$port" > /etc/agentpress/active-port
printf '%s\n' "$release_id" > /etc/agentpress/active-release
committed=1
systemctl disable --now "agentpress@$old_port" || true
printf 'Activated %s on port %s\n' "$release_id" "$port"

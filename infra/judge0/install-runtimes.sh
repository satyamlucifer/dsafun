#!/bin/bash
# Install Piston language runtimes. Works locally and remotely.
# Usage:
#   bash install-runtimes.sh                    # local (localhost:2000)
#   bash install-runtimes.sh https://host.fly.dev [token]

BASE="${1:-http://localhost:2000}"
TOKEN="${2:-}"

install() {
  local lang=$1 ver=$2
  echo "Installing $lang $ver..."
  ARGS=(-s -X POST "$BASE/api/v2/packages" -H "Content-Type: application/json" -d "{\"language\":\"$lang\",\"version\":\"$ver\"}")
  [[ -n "$TOKEN" ]] && ARGS+=(-H "Authorization: Token $TOKEN")
  result=$(curl "${ARGS[@]}")
  msg=$(echo "$result" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('message', d.get('language','ok')))" 2>/dev/null || echo "$result")
  echo "  $msg"
}

echo "Waiting for Piston at $BASE..."
until curl -sf "$BASE/api/v2/runtimes" > /dev/null; do sleep 2; done

install python     3.10.0
install node       18.15.0
install typescript 5.0.3
install java       15.0.2
install go         1.16.2
install gcc        10.2.0
install rust       1.50.0

echo ""
echo "Installed runtimes:"
curl -sf "$BASE/api/v2/runtimes" | python3 -c "
import sys, json
for r in json.load(sys.stdin):
    print(' ', r['language'], r['version'])
"

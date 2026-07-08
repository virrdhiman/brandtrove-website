#!/bin/bash
# Deploy BrandTrove static site to VPS
# Usage on VPS: bash deploy/publish.sh
set -euo pipefail

SITE_ROOT=/var/www/brandtroveglobal.com
NGINX_AVAILABLE=/etc/nginx/sites-available/brandtroveglobal.conf
NGINX_ENABLED=/etc/nginx/sites-enabled/brandtroveglobal.conf
REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "=== BrandTrove deploy ==="
cd "$REPO_DIR"

if ! command -v npm >/dev/null; then
  echo "Node.js/npm required. Install Node 20+ on the VPS."
  exit 1
fi

npm ci || npm install
npm run build

if [ ! -f "$REPO_DIR/dist/logo.png" ]; then
  echo "ERROR: dist/logo.png missing — assets did not build correctly."
  exit 1
fi

sudo mkdir -p "$SITE_ROOT"
sudo rsync -av --delete dist/ "$SITE_ROOT/"
sudo find "$SITE_ROOT" -type d -exec chmod a+rx {} +
sudo find "$SITE_ROOT" -type f -exec chmod a+r {} +

if [ -f "$REPO_DIR/deploy/nginx-brandtroveglobal.conf" ]; then
  sudo cp "$REPO_DIR/deploy/nginx-brandtroveglobal.conf" "$NGINX_AVAILABLE"
  sudo ln -sf "$NGINX_AVAILABLE" "$NGINX_ENABLED"
  sudo nginx -t
  sudo systemctl reload nginx
fi

echo ""
echo "Site files deployed to $SITE_ROOT"
echo "Verify: curl -I https://brandtroveglobal.com"
echo "SSL renew: certbot renew --dry-run"

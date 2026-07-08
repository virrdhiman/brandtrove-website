@echo off
setlocal
cd /d "%~dp0"

set "HOST=flightpath-vps"
set "REMOTE=/var/www/brandtroveglobal.com"

echo ============================================================
echo   DEPLOY brandtroveglobal.com
echo ============================================================

ssh -o BatchMode=yes -o ConnectTimeout=15 %HOST% "echo ok" >nul 2>&1
if errorlevel 1 (
  echo SSH not configured. See docs/GO-LIVE-CHECKLIST.md
  pause
  exit /b 1
)

echo [1/4] Building Astro site...
call npm run build
if errorlevel 1 (
  echo Build failed.
  pause
  exit /b 1
)

echo [2/4] Uploading dist/ to VPS...
ssh %HOST% "mkdir -p %REMOTE%"
scp -o BatchMode=yes -r dist\* %HOST%:%REMOTE%/
ssh %HOST% "chmod -R a+rX %REMOTE%"

echo [3/4] Updating nginx config...
scp -o BatchMode=yes deploy\nginx-brandtroveglobal.conf %HOST%:/etc/nginx/sites-available/brandtroveglobal.conf
ssh %HOST% "ln -sf /etc/nginx/sites-available/brandtroveglobal.conf /etc/nginx/sites-enabled/brandtroveglobal.conf && nginx -t && systemctl reload nginx"

echo [4/4] Verifying...
ssh %HOST% "curl -sf -o /dev/null -w 'Homepage %%{http_code}\n' https://brandtroveglobal.com/ && curl -sf -o /dev/null -w 'llms.txt %%{http_code}\n' https://brandtroveglobal.com/llms.txt"

echo.
echo ============================================================
echo   Deploy complete!  https://brandtroveglobal.com
echo.
echo   Move to new server: copy this folder, point DNS, run:
echo     certbot --nginx -d brandtroveglobal.com -d www.brandtroveglobal.com
echo     deploy\publish.sh  (on Linux VPS)
echo ============================================================
pause

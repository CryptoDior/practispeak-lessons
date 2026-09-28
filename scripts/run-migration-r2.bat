@echo off
cd /d "C:\Users\Christiano\Documents\practispeak-lessons"
echo.
echo Setting credentials and running migration...
REM Set your Cloudflare credentials here before running (do not commit this file with real values)
set R2_ACCOUNT_ID=YOUR_ACCOUNT_ID
set CF_API_TOKEN=YOUR_API_TOKEN
set R2_BUCKET_NAME=practispeak-images
set R2_PUBLIC_URL=https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev
node scripts/migrate-images-r2.mjs > scripts\migration-log.txt 2>&1
echo Exit code: %ERRORLEVEL%
echo.
echo === DONE - check scripts\migration-log.txt for output ===
pause

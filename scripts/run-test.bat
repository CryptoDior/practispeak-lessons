@echo off
cd /d "C:\Users\Christiano\Documents\practispeak-lessons"
echo Running test upload to Vercel Blob...
set BLOB_READ_WRITE_TOKEN=vercel_blob_rw_GXyql1rOokUrzCks_0Db0KoZ9SRVdf07pJbMfic5AHHJJCM
node scripts/test-blob-upload.mjs
echo.
echo === Check scripts\test-blob-result.txt for results ===
pause

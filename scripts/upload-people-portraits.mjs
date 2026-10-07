/**
 * Upload all images in a folder (including subfolders) to Cloudflare R2.
 * Token: put a line  CF_API_TOKEN=your_token  in .env.local (git-ignored),
 * or set $env:CF_API_TOKEN in PowerShell.
 * Run from the project root:
 *   node scripts/upload-people-portraits.mjs "C:\path\to\folder"
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, basename } from 'path';

// Load CF_API_TOKEN from .env.local if it isn't already set
if (!process.env.CF_API_TOKEN && existsSync('.env.local')) {
  const m = readFileSync('.env.local', 'utf8').match(/^\s*CF_API_TOKEN\s*=\s*["']?([^"'\r\n]+)/m);
  if (m) process.env.CF_API_TOKEN = m[1].trim();
}

const ACCOUNT_ID = 'f8e5b3856d99b4ed89d9ea1fb4bf641a';
const API_TOKEN  = process.env.CF_API_TOKEN;
const BUCKET     = 'practispeak-images';
const PUBLIC_URL = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev';
const FOLDER     = process.argv[2];

if (!API_TOKEN) {
  console.error('Set CF_API_TOKEN env var before running this script.');
  process.exit(1);
}
if (!FOLDER) {
  console.error('Pass the folder path: node scripts/upload-people-portraits.mjs "C:\\path\\to\\folder"');
  process.exit(1);
}

function walk(dir) {
  return readdirSync(dir).flatMap(name => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = walk(FOLDER).filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));
console.log(`Found ${files.length} image(s) to upload...\n`);

for (const path of files) {
  const file = basename(path);
  const buf = readFileSync(path);
  const ext = file.split('.').pop().toLowerCase();
  const contentType = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'webp' ? 'image/webp' : 'image/png';
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${file}`;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': contentType,
      'Content-Length': String(buf.length),
    },
    body: buf,
  });

  if (res.ok) {
    console.log(`✅ ${file}`);
    console.log(`   → ${PUBLIC_URL}/${file}\n`);
  } else {
    const txt = await res.text();
    console.error(`❌ ${file} (${res.status}): ${txt}\n`);
  }
}

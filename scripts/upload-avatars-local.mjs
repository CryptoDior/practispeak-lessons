/**
 * Upload avatar icons to Cloudflare R2.
 * Run from the project root:
 *   set CF_API_TOKEN=your_token_here && node scripts/upload-avatars-local.mjs
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ACCOUNT_ID = 'f8e5b3856d99b4ed89d9ea1fb4bf641a';
const API_TOKEN  = process.env.CF_API_TOKEN;
const BUCKET     = 'practispeak-images';
const PUBLIC_URL = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev';

if (!API_TOKEN) {
  console.error('Set CF_API_TOKEN env var before running this script.');
  process.exit(1);
}

const avatars = ['dana-icon.png', 'alex-icon.png', 'coach-icon.png'];

for (const file of avatars) {
  const buf = readFileSync(join(__dirname, '..', 'public', file));
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${file}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'image/png',
      'Content-Length': String(buf.length),
    },
    body: buf,
  });
  const txt = await res.text();
  if (res.ok) {
    console.log(`✅ ${file} → ${PUBLIC_URL}/${file}`);
  } else {
    console.error(`❌ ${file} failed (${res.status}): ${txt}`);
  }
}

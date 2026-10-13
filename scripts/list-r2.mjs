/**
 * List every file in the R2 bucket and save the names to r2-objects.txt (one per line).
 * Uses CF_API_TOKEN from .env.local (the token is never printed).
 *   node scripts/list-r2.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';

if (!process.env.CF_API_TOKEN && existsSync('.env.local')) {
  const m = readFileSync('.env.local', 'utf8').match(/^\s*CF_API_TOKEN\s*=\s*["']?([^"'\r\n]+)/m);
  if (m) process.env.CF_API_TOKEN = m[1].trim();
}
const ACCOUNT_ID = 'f8e5b3856d99b4ed89d9ea1fb4bf641a';
const BUCKET = 'practispeak-images';
const TOKEN = process.env.CF_API_TOKEN;
if (!TOKEN) { console.error('CF_API_TOKEN not found'); process.exit(1); }

const names = [];
let cursor = '';
do {
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects?per_page=1000${cursor ? `&cursor=${encodeURIComponent(cursor)}` : ''}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } });
  const data = await res.json();
  if (!data.success) { console.error('R2 error:', JSON.stringify(data.errors)); process.exit(1); }
  for (const o of data.result) names.push(o.key);
  cursor = data.result_info?.is_truncated ? data.result_info.cursor : '';
} while (cursor);

writeFileSync('r2-objects.txt', names.sort().join('\n') + '\n');
console.log(`${names.length} files listed → r2-objects.txt`);

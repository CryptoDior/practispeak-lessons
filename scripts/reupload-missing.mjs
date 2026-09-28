import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const API_TOKEN = process.env.CF_API_TOKEN;
const BUCKET_NAME = process.env.R2_BUCKET_NAME || 'practispeak-images';
const PUBLIC_URL = process.env.R2_PUBLIC_URL || 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev';

const MISSING = [
  'language-in-gaming-communities-hero.png',
  'what-that-meant-for-them-was.png',
];

for (const file of MISSING) {
  console.log(`Recovering ${file} from git history...`);
  let buffer;
  try {
    // Restore from the previous commit before git rm
    buffer = execSync(`git show HEAD~1:public/images/${file}`, { cwd: ROOT, maxBuffer: 20 * 1024 * 1024 });
  } catch (err) {
    console.error(`❌ Could not recover ${file} from git history: ${err.message}`);
    continue;
  }

  console.log(`Uploading ${file} (${(buffer.length / 1024).toFixed(1)} KB)...`);
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET_NAME}/objects/${encodeURIComponent(file)}`;
  const resp = await fetch(url, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${API_TOKEN}`, 'Content-Type': 'image/png' },
    body: buffer,
  });

  if (resp.ok) {
    console.log(`✅ Uploaded: ${PUBLIC_URL}/${file}`);
  } else {
    const text = await resp.text();
    console.error(`❌ Failed: HTTP ${resp.status}: ${text}`);
  }
}

console.log('\nDone! Now update the two lesson files to use R2 URLs.');

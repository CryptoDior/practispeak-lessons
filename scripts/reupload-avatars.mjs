/**
 * Recovers avatar images from git history and uploads them to Cloudflare R2.
 * Run from the project root: node scripts/reupload-avatars.mjs
 */

import { execSync } from 'child_process';

const ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const API_TOKEN  = process.env.CF_API_TOKEN;
const BUCKET     = process.env.R2_BUCKET_NAME;
const PUBLIC_URL = process.env.R2_PUBLIC_URL;

const AVATARS = ['dana-icon.png', 'alex-icon.png', 'coach-icon.png'];
const GIT_COMMIT = 'dacf99c9873598564e24327ae7ce0dcd49b2ea18'; // migration commit — files existed before this

async function uploadToR2(key, buffer, contentType) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${key}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': contentType,
      'Content-Length': String(buffer.length),
    },
    body: buffer,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`R2 upload failed (${res.status}): ${text}`);
  }
}

for (const filename of AVATARS) {
  const gitPath = `public/images/${filename}`;
  try {
    // Try to recover from the commit before the migration
    const buf = execSync(`git show ${GIT_COMMIT}~1:${gitPath}`, { maxBuffer: 10 * 1024 * 1024 });
    await uploadToR2(filename, buf, 'image/png');
    console.log(`✅ ${filename} → ${PUBLIC_URL}/${filename}`);
  } catch (err) {
    // If ~1 doesn't have it, try the commit itself
    try {
      const buf = execSync(`git show ${GIT_COMMIT}:${gitPath}`, { maxBuffer: 10 * 1024 * 1024 });
      await uploadToR2(filename, buf, 'image/png');
      console.log(`✅ ${filename} (from migration commit) → ${PUBLIC_URL}/${filename}`);
    } catch (err2) {
      console.error(`❌ ${filename}: not found in git history — ${err2.message}`);
    }
  }
}

console.log('\nDone. Now run the URL replacement script to update all lesson files.');

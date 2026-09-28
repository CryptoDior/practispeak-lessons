/**
 * Replaces old Vercel blob speakerAvatar URLs with R2 URLs in all lesson files.
 * Run after reupload-avatars.mjs has uploaded the images.
 * Usage: node scripts/fix-avatar-urls.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const LESSONS_DIR = './data/lessons';
const OLD_BASE = 'https://gxyql1rookurzcks.public.blob.vercel-storage.com';
const NEW_BASE = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev';

const AVATAR_FILES = ['dana-icon.png', 'alex-icon.png', 'coach-icon.png'];

let totalFiles = 0;
let totalReplaced = 0;

const files = readdirSync(LESSONS_DIR).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const path = join(LESSONS_DIR, file);
  let content = readFileSync(path, 'utf8');
  let changed = false;

  for (const avatar of AVATAR_FILES) {
    const oldUrl = `${OLD_BASE}/${avatar}`;
    const newUrl = `${NEW_BASE}/${avatar}`;
    if (content.includes(oldUrl)) {
      content = content.split(oldUrl).join(newUrl);
      changed = true;
      totalReplaced++;
    }
  }

  if (changed) {
    writeFileSync(path, content, 'utf8');
    console.log(`✅ Updated: ${file}`);
    totalFiles++;
  }
}

console.log(`\nDone — updated ${totalFiles} files, ${totalReplaced} URL replacement(s).`);
console.log('Commit these changes and push to Vercel.');

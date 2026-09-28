/**
 * migrate-images-r2.mjs
 *
 * Uploads every file in public/images/ to Cloudflare R2 via Cloudflare REST API,
 * then rewrites all imageSlug / heroImage paths in data/lessons/*.ts
 *
 * Run from the project root:
 *   node scripts/migrate-images-r2.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMAGES_DIR = path.join(ROOT, 'public', 'images');
const LESSONS_DIR = path.join(ROOT, 'data', 'lessons');
const MAPPING_FILE = path.join(ROOT, 'scripts', 'r2-url-mapping.json');

const CONCURRENCY = 10; // parallel uploads at a time

// Config
const ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const API_TOKEN = process.env.CF_API_TOKEN;
const BUCKET_NAME = process.env.R2_BUCKET_NAME || 'practispeak-images';
const PUBLIC_URL = process.env.R2_PUBLIC_URL || 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev';

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error('Missing required environment variables: R2_ACCOUNT_ID, CF_API_TOKEN');
  process.exit(1);
}

// ── 1. UPLOAD ─────────────────────────────────────────────────────────────────

const files = fs.readdirSync(IMAGES_DIR).filter(f => /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(f));
console.log(`Found ${files.length} images to upload with concurrency=${CONCURRENCY}…\n`);

const mapping = {};
let done = 0;
let errors = 0;

function getMime(file) {
  const ext = path.extname(file).toLowerCase();
  return ext === '.png' ? 'image/png'
    : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg'
    : ext === '.gif' ? 'image/gif'
    : ext === '.webp' ? 'image/webp'
    : ext === '.svg' ? 'image/svg+xml'
    : 'application/octet-stream';
}

async function uploadFile(file) {
  const filePath = path.join(IMAGES_DIR, file);
  const buffer = fs.readFileSync(filePath);
  const mime = getMime(file);

  // Use Cloudflare REST API directly — no AWS SDK URL issues
  const encodedKey = encodeURIComponent(file);
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET_NAME}/objects/${encodedKey}`;

  try {
    const resp = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': mime,
      },
      body: buffer,
    });

    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`HTTP ${resp.status}: ${text}`);
    }

    mapping[file] = `${PUBLIC_URL}/${file}`;
    done++;
    if (done % 50 === 0) console.log(`  ${done}/${files.length} uploaded…`);
  } catch (err) {
    errors++;
    console.error(`  ERROR uploading ${file}: ${err.message}`);
  }
}

// Process in batches of CONCURRENCY
for (let i = 0; i < files.length; i += CONCURRENCY) {
  const batch = files.slice(i, i + CONCURRENCY);
  await Promise.all(batch.map(uploadFile));
}

console.log(`\n✅ Uploaded ${done}/${files.length} images (${errors} errors).`);

// Save mapping for reference / rollback
fs.writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2));
console.log(`Mapping saved to scripts/r2-url-mapping.json\n`);

// ── 2. REWRITE .ts FILES ──────────────────────────────────────────────────────

const tsFiles = fs.readdirSync(LESSONS_DIR).filter(f => f.endsWith('.ts'));
console.log(`Rewriting ${tsFiles.length} lesson files…`);

let rewrites = 0;
for (const tsFile of tsFiles) {
  const tsPath = path.join(LESSONS_DIR, tsFile);
  let src = fs.readFileSync(tsPath, 'utf8');
  let changed = false;

  for (const [filename, r2Url] of Object.entries(mapping)) {
    const oldPath = `/images/${filename}`;
    if (src.includes(oldPath)) {
      src = src.replaceAll(oldPath, r2Url);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(tsPath, src, 'utf8');
    rewrites++;
  }
}

console.log(`✅ Updated ${rewrites} lesson files.\n`);
console.log('Done! Next steps:');
console.log('  1. git rm -r public/images/');
console.log('  2. git add data/lessons/ scripts/r2-url-mapping.json');
console.log('  3. git commit -m "Migrate images to Cloudflare R2"');
console.log('  4. git push');

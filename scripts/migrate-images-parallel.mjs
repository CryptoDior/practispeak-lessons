/**
 * migrate-images-parallel.mjs
 *
 * Uploads every file in public/images/ to Vercel Blob using parallel batches,
 * then rewrites all imageSlug / heroImage paths in data/lessons/*.ts
 *
 * Run from the project root:
 *   node scripts/migrate-images-parallel.mjs
 */

import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMAGES_DIR = path.join(ROOT, 'public', 'images');
const LESSONS_DIR = path.join(ROOT, 'data', 'lessons');
const MAPPING_FILE = path.join(ROOT, 'scripts', 'blob-url-mapping.json');

const CONCURRENCY = 20; // parallel uploads at a time

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
  try {
    const blob = await put(file, buffer, { access: 'public', contentType: mime, allowOverwrite: true });
    mapping[file] = blob.url;
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
console.log(`Mapping saved to scripts/blob-url-mapping.json\n`);

// ── 2. REWRITE .ts FILES ──────────────────────────────────────────────────────

const tsFiles = fs.readdirSync(LESSONS_DIR).filter(f => f.endsWith('.ts'));
console.log(`Rewriting ${tsFiles.length} lesson files…`);

let rewrites = 0;
for (const tsFile of tsFiles) {
  const tsPath = path.join(LESSONS_DIR, tsFile);
  let src = fs.readFileSync(tsPath, 'utf8');
  let changed = false;

  for (const [filename, blobUrl] of Object.entries(mapping)) {
    const oldPath = `/images/${filename}`;
    if (src.includes(oldPath)) {
      src = src.replaceAll(oldPath, blobUrl);
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
console.log('  2. git add data/lessons/ scripts/blob-url-mapping.json');
console.log('  3. git commit -m "Migrate images to Vercel Blob"');
console.log('  4. git push');

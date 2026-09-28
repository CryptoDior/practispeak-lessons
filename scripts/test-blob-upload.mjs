/**
 * test-blob-upload.mjs
 * Tests uploading ONE image to Vercel Blob.
 * Output is logged to scripts/test-blob-result.txt
 */

import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LOG = path.join(ROOT, 'scripts', 'test-blob-result.txt');

const log = (msg) => {
  console.log(msg);
  fs.appendFileSync(LOG, msg + '\n');
};

// Clear log
fs.writeFileSync(LOG, `Test started: ${new Date().toISOString()}\n`);

log('Node version: ' + process.version);
log('BLOB_READ_WRITE_TOKEN set: ' + (process.env.BLOB_READ_WRITE_TOKEN ? 'YES (length=' + process.env.BLOB_READ_WRITE_TOKEN.length + ')' : 'NO'));

const imagesDir = path.join(ROOT, 'public', 'images');
const files = fs.readdirSync(imagesDir).filter(f => /\.png$/i.test(f));
log(`Found ${files.length} PNG files in public/images/`);

if (files.length === 0) {
  log('ERROR: No images found!');
  process.exit(1);
}

const testFile = files[0];
log(`Testing with: ${testFile}`);

try {
  const buffer = fs.readFileSync(path.join(imagesDir, testFile));
  log(`File size: ${buffer.length} bytes`);

  log('Attempting upload to Vercel Blob...');
  const blob = await put(testFile, buffer, { access: 'public', contentType: 'image/png' });
  log(`SUCCESS! URL: ${blob.url}`);
  log('\nBlob upload works! Ready to run full migration.');
} catch (e) {
  log(`ERROR: ${e.message}`);
  log(`Stack: ${e.stack}`);
}

log(`\nTest finished: ${new Date().toISOString()}`);

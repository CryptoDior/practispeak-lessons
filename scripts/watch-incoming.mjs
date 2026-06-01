/**
 * Practispeak Folder Watcher
 * --------------------------
 * Watches the incoming/ folder and automatically processes new lessons.
 *
 * Usage: npm run watch
 *   (or: node --env-file=.env.local scripts/watch-incoming.mjs)
 *
 * How to add a new lesson:
 *   1. Create a folder:  incoming/<your-lesson-slug>/
 *   2. Add a meta.json  (copy from incoming/_template/meta.json)
 *   3. Add a hero.png   (your banner/header image)
 *   4. Add word images  (one .png per vocabulary word or phrasal verb,
 *                        named after the word slug, e.g. player.png, game-over.png)
 *
 * The watcher detects the new folder and runs the full pipeline automatically:
 *   Claude generates content → ElevenLabs generates audio → deploys to Vercel
 */

import fs   from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT         = path.resolve('.');
const INCOMING_DIR = path.join(ROOT, 'incoming');
const POLL_MS      = 5000; // check every 5 seconds

function timestamp() {
  return new Date().toLocaleTimeString('en-US', { hour12: false });
}
function log(msg)  { console.log(`[${timestamp()}] ${msg}`); }
function info(msg) { console.log(`              ${msg}`); }

// Create incoming/ if it doesn't exist yet
fs.mkdirSync(INCOMING_DIR, { recursive: true });

log('👀 Practispeak watcher started.');
log(`   Watching: ${INCOMING_DIR}`);
log('   Drop a lesson folder with meta.json + images to trigger the pipeline.');
log('   Press Ctrl+C to stop.\n');

const processing = new Set();

function checkIncoming() {
  let entries;
  try {
    entries = fs.readdirSync(INCOMING_DIR, { withFileTypes: true });
  } catch {
    return; // incoming/ was temporarily unavailable
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const slug = entry.name;

    // Skip templates and hidden folders
    if (slug.startsWith('_') || slug.startsWith('.')) continue;

    // Skip if already being processed
    if (processing.has(slug)) continue;

    const folderPath    = path.join(INCOMING_DIR, slug);
    const processedPath = path.join(folderPath, '.processed');
    const metaPath      = path.join(folderPath, 'meta.json');
    const errorPath     = path.join(folderPath, '.error');

    // Skip already-processed or errored folders
    if (fs.existsSync(processedPath)) continue;

    // Wait for meta.json before starting
    if (!fs.existsSync(metaPath)) {
      info(`⏳ ${slug}/ — waiting for meta.json`);
      continue;
    }

    // Wait for at least one image
    const files = fs.readdirSync(folderPath);
    const images = files.filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));
    if (images.length === 0) {
      info(`⏳ ${slug}/ — waiting for images`);
      continue;
    }

    // All good — run the pipeline
    processing.add(slug);
    log(`🆕 New lesson detected: ${slug}`);
    info(`   Images: ${images.join(', ')}`);
    info(`   Starting pipeline...`);

    try {
      execSync(
        `node --env-file=.env.local scripts/create-from-images.mjs ${slug}`,
        { stdio: 'inherit', cwd: ROOT }
      );
      log(`✅ "${slug}" deployed successfully!\n`);

      // Remove any previous error marker
      if (fs.existsSync(errorPath)) fs.unlinkSync(errorPath);
    } catch (err) {
      log(`❌ Pipeline failed for "${slug}"`);
      info(`   ${err.message}`);
      info(`   Fix the issue, delete incoming/${slug}/.error, and the watcher will retry.`);

      // Write an error marker so the watcher doesn't keep retrying immediately
      fs.writeFileSync(errorPath, `${new Date().toISOString()}\n${err.message}`);
      processing.delete(slug);
    }
  }
}

// Poll on an interval (more reliable than fs.watch on Windows)
setInterval(checkIncoming, POLL_MS);

// Also run once immediately
checkIncoming();

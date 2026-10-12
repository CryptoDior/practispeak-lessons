/**
 * Generate lesson audio with ElevenLabs Eleven v4 and upload it to Cloudflare R2.
 *
 *   Words / phrases  → eleven_v4, high stability, no emotion ([slow] tag for A1-A2 only)
 *   Example sentences → eleven_v4, natural delivery with a light "friendly" tag (never "clear")
 *
 * File names (what the site looks for first):
 *   <lesson-slug>-<word>.mp3           e.g. mma-equipment-canvas.mp3
 *   <lesson-slug>-<word>-example.mp3   e.g. mma-equipment-canvas-example.mp3
 *
 * Keys (put these lines in .env.local, never in this file):
 *   ELEVENLABS_API_KEY_1=...   (key number 1 is always used)
 *   CF_API_TOKEN=...
 *
 * Run from the project root:
 *   node scripts/generate-lesson-audio-v4.mjs mma-equipment
 *   node scripts/generate-lesson-audio-v4.mjs mma-equipment mma-people     (several lessons)
 *   node scripts/generate-lesson-audio-v4.mjs mma-equipment --dry-run       (just list what it would make)
 *   node scripts/generate-lesson-audio-v4.mjs mma-equipment --force         (remake files that already exist)
 *   node scripts/generate-lesson-audio-v4.mjs mma-equipment --words-only    (or --examples-only)
 *   node scripts/generate-lesson-audio-v4.mjs --all                         (every lesson on the site)
 *   node scripts/generate-lesson-audio-v4.mjs --all A1-A2                   (every lesson of one level)
 *   node scripts/generate-lesson-audio-v4.mjs mma-strikes --voices=ID1,ID2  (use only these voices, in turn)
 *   node scripts/generate-lesson-audio-v4.mjs mma-strikes --entries=1,3,5 --force   (remake only words 1, 3 and 5)
 *   add --no-slow to read the words without the [slow] tag (one-off fixes)
 *
 * RULE: the [slow] tag is only used for A1-A2 lessons. B1-B2 and C1-C2 are read at a natural pace.
 *
 * A local copy of every file is kept in  Downloads\\Lesson Audio\\<lesson-slug>\\
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';

// ── Keys from .env.local ──────────────────────────────────────────────────────
if (existsSync('.env.local')) {
  for (const line of readFileSync('.env.local', 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*["']?([^"'\r\n]+)/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}
const ELEVEN_KEY = process.env.ELEVENLABS_API_KEY_1; // always use key number 1
const CF_TOKEN = process.env.CF_API_TOKEN;

// ── Settings ──────────────────────────────────────────────────────────────────
const MODEL = 'eleven_v4';
const WORD_SETTINGS = { stability: 1.0, similarity_boost: 0.75 };    // steady, neutral
const EXAMPLE_SETTINGS = { stability: 0.5, similarity_boost: 0.75 }; // natural
// v4 has no speed slider, so delivery is directed with an audio tag.
// Never use the word "clear" in tags — v4 turns it into a throat-clearing sound.
// RULE: [slow] is ONLY for A1-A2 lessons. Higher levels are read at a natural pace.
const SLOW_LEVELS = new Set(['A1', 'A2', 'A1-A2']);
function tagsFor(level) {
  return SLOW_LEVELS.has(level)
    ? { word: '[slow]', example: '[friendly, slightly slow]' }
    : { word: '', example: '[friendly]' };
}

// Same rotation the older scripts used: alternates male / female voices per word.
// Voices that must NEVER be used (Dior's rule). Removed even if passed with --voices.
const BANNED_VOICES = new Set([
  'ZF6FPAbjXT4488VcRRnw', // makes throat-clearing sounds
]);

let VOICES = [ // default rotation; override with --voices=id1,id2
  'n8kTUi6dVrplENT9Un56', // male narrator
  'vCZXQeSML7qJRTiADoTW', // female narrator
  'EkK5I93UQWFDigLMpZcX', // JM Husk — male
  'l4Coq6695JDX9xtLqXDE', // Lauren  — female
  '1SM7GgM6IMuvQlz2BwM3', // Mark    — male
  'aMSt68OGf4xUZAnLpTU8', // Juniper — female
  'uHoisgHFfUYZ3FULxcdM', // Shannon — male
  'bGz4A6rl9U05wqaE3qt1', // Sally   — female
  'JBFqnCBsd6RMkjVDRZzb', // George  — male
  'Tfv2PGiTliSQ4XSXrJmA', // female general
];

// Local copies: Downloads\Lesson Audio\<lesson-slug>\
const AUDIO_ROOT = join(homedir(), 'Downloads', 'Lesson Audio');

const ACCOUNT_ID = 'f8e5b3856d99b4ed89d9ea1fb4bf641a';
const BUCKET = 'practispeak-images';
const PUBLIC_URL = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev';

// ── Args ──────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const voicesArg = args.find((a) => a.startsWith('--voices='));
if (voicesArg) VOICES = voicesArg.slice('--voices='.length).split(',').map((v) => v.trim()).filter(Boolean);
for (const v of VOICES) if (BANNED_VOICES.has(v)) console.warn(`⚠️  Skipping banned voice ${v}`);
VOICES = VOICES.filter((v) => !BANNED_VOICES.has(v));
if (!VOICES.length) { console.error('No usable voices left.'); process.exit(1); }
const flags = new Set(args.filter((a) => a.startsWith('--')));
// --entries=1,3,5  → only these word numbers in each lesson (1 = first word)
const entriesArg = args.find((a) => a.startsWith('--entries='));
const ONLY = entriesArg ? new Set(entriesArg.slice(10).split(',').map(Number)) : null;
let slugs = args.filter((a) => !a.startsWith('--') && !/^(A1|A2|B1|B2|C1|C2|A1-A2|B1-B2|C1-C2)$/.test(a));
const levelArg = args.find((a) => /^(A1|A2|B1|B2|C1|C2|A1-A2|B1-B2|C1-C2)$/.test(a)); // used with --all
if (flags.has('--all')) {
  // every lesson registered on the site (optionally only one level:  --all A1-A2)
  const index = readFileSync(join('data', 'lessons', 'index.ts'), 'utf8');
  slugs = [...index.matchAll(/from '\.\/([a-z0-9-]+)'/g)].map((m) => m[1])
    .filter((s) => !levelArg || levelOf(s) === levelArg);
}
const DRY = flags.has('--dry-run');
const FORCE = flags.has('--force');
const WORDS = !flags.has('--examples-only');
const EXAMPLES = !flags.has('--words-only');

if (!slugs.length) {
  console.error('Give at least one lesson slug, e.g.  node scripts/generate-lesson-audio-v4.mjs mma-equipment');
  process.exit(1);
}
if (!DRY && !ELEVEN_KEY) { console.error('ELEVENLABS_API_KEY_1 not found in .env.local'); process.exit(1); }
if (!DRY && !CF_TOKEN) { console.error('Add CF_API_TOKEN=... to .env.local'); process.exit(1); }

// ── Helpers ───────────────────────────────────────────────────────────────────
/** Must match audioSlugOf() in components/WordEntryCard.tsx */
function audioSlugOf(text) {
  return text.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/** "SOFA / COUCH" → "sofa, couch". Lower-case so all-caps words aren't spelled out letter by letter. */
function speakableWord(text) {
  return text.replace(/\s*\/\s*/g, ', ').replace(/…|\.\.\./g, '').trim().toLowerCase();
}

function speakableExample(text) {
  return text.replace(/\[\[([^:\]]+):[^\]]*\]\]/g, '$1').replace(/^["“]|["”]$/g, '').trim();
}

/** Pull (title, example) pairs from the vocabulary / irlVocabulary / phrasalVerbs arrays of a lesson file. */
function levelOf(slug) {
  const src = readFileSync(join('data', 'lessons', `${slug}.ts`), 'utf8');
  return (src.match(/level:\s*'([^']+)'/) || [])[1] || '';
}

function readEntries(slug) {
  const file = join('data', 'lessons', `${slug}.ts`);
  if (!existsSync(file)) throw new Error(`No lesson file: ${file}`);
  const src = readFileSync(file, 'utf8');
  const str = `(?:'((?:[^'\\\\]|\\\\.)*)'|"((?:[^"\\\\]|\\\\.)*)")`;
  const unesc = (s) => s.replace(/\\(['"\\])/g, '$1');
  const entries = [];
  for (const section of ['vocabulary', 'irlVocabulary', 'phrasalVerbs']) {
    const start = src.search(new RegExp(`\\n\\s*${section}\\s*:\\s*\\[`));
    if (start < 0) continue;
    // find the matching closing bracket of this array
    let i = src.indexOf('[', start), depth = 0, end = i;
    for (; end < src.length; end++) {
      const c = src[end];
      if (c === '[') depth++;
      else if (c === ']' && --depth === 0) break;
    }
    const body = src.slice(i, end);
    const re = new RegExp(`(?:word|phrase)\\s*:\\s*${str}[\\s\\S]*?example\\s*:\\s*${str}`, 'g');
    let m;
    while ((m = re.exec(body))) {
      entries.push({ title: unesc(m[1] ?? m[2]), example: unesc(m[3] ?? m[4]) });
    }
  }
  return entries;
}

async function tts(text, voice, settings) {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: { 'xi-api-key': ELEVEN_KEY, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
    body: JSON.stringify({ text, model_id: MODEL, voice_settings: settings }),
  });
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${await res.text()}`);
  return Buffer.from(await res.arrayBuffer());
}

async function uploadR2(name, buf) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${name}`,
    { method: 'PUT', headers: { Authorization: `Bearer ${CF_TOKEN}`, 'Content-Type': 'audio/mpeg' }, body: buf },
  );
  if (!res.ok) throw new Error(`R2 ${res.status}: ${await res.text()}`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
let made = 0, skipped = 0, failed = 0, chars = 0;

for (const slug of slugs) {
  const entries = readEntries(slug);
  const level = levelOf(slug);
  const TAGS = tagsFor(level);
  if (flags.has('--no-slow')) TAGS.word = ''; // one-off: read words without the [slow] tag
  console.log(`\n📘 ${slug} (${level || 'no level'}${TAGS.word ? ', slow' : ', natural pace'}): ${entries.length} words/phrases`);
  const outDir = join(AUDIO_ROOT, slug);
  if (!DRY) mkdirSync(outDir, { recursive: true });

  for (const [n, e] of entries.entries()) {
    if (ONLY && !ONLY.has(n + 1)) continue;
    const voice = VOICES[n % VOICES.length];
    const base = `${slug}-${audioSlugOf(e.title)}`;
    const jobs = [];
    if (WORDS) jobs.push({ name: `${base}.mp3`, text: `${TAGS.word} ${speakableWord(e.title)}`.trim(), settings: WORD_SETTINGS });
    if (EXAMPLES) jobs.push({ name: `${base}-example.mp3`, text: `${TAGS.example} ${speakableExample(e.example)}`.trim(), settings: EXAMPLE_SETTINGS });

    for (const job of jobs) {
      const local = join(outDir, job.name);
      if (!FORCE && existsSync(local)) { skipped++; continue; }
      if (DRY) { console.log(`  • ${job.name}  ←  "${job.text}"`); chars += job.text.length; continue; }
      try {
        const buf = await tts(job.text, voice, job.settings);
        writeFileSync(local, buf);
        await uploadR2(job.name, buf);
        chars += job.text.length;
        made++;
        console.log(`  ✅ ${job.name}`);
      } catch (err) {
        failed++;
        console.error(`  ❌ ${job.name}: ${err.message}`);
      }
    }
  }
}

// Re-recorded files keep the same name, so bump the site's audio version to beat browser caches.
if (!DRY && FORCE && made > 0) {
  const vf = join('lib', 'audio.ts');
  const src = readFileSync(vf, 'utf8');
  const next = String(Date.now());
  writeFileSync(vf, src.replace(/export const AUDIO_VERSION = '[^']*';/, `export const AUDIO_VERSION = '${next}';`));
  console.log(`\n🔄 Audio version bumped. Push so browsers load the new recordings:\n   git add lib/audio.ts && git commit -m "Refresh audio" && git push`);
}

console.log(
  DRY
    ? `\nDry run: would generate about ${chars} characters of audio.`
    : `\nDone: ${made} made and uploaded, ${skipped} skipped (already made), ${failed} failed. ~${chars} characters used.\nFiles are live at ${PUBLIC_URL}/<name>.mp3`,
);

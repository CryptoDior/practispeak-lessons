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
 *   ELEVENLABS_API_KEY_2=...   (account 2 is used by default; add --key=1 for account 1)
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
 *
 * RULE: a lesson is only recorded when ALL its vocabulary and phrase images exist (add --ignore-images to override).
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
// Which ElevenLabs account to use: key 2 by default, or --key=1 to use account 1
const KEY_NUM = (process.argv.find((a) => a.startsWith('--key=')) || '--key=2').slice(6);
const ELEVEN_KEY = process.env[`ELEVENLABS_API_KEY_${KEY_NUM}`];
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

const DEFAULT_VOICES = [
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
let VOICES = [...DEFAULT_VOICES]; // default rotation; override with --voices=id1,id2

// Gender of each known voice (used by voice plans: scripts/voice-plans/<lesson>.json)
const VOICE_GENDER = {
  'n8kTUi6dVrplENT9Un56': 'M', 'vCZXQeSML7qJRTiADoTW': 'F', 'EkK5I93UQWFDigLMpZcX': 'M',
  'l4Coq6695JDX9xtLqXDE': 'F', '1SM7GgM6IMuvQlz2BwM3': 'M', 'aMSt68OGf4xUZAnLpTU8': 'F',
  'uHoisgHFfUYZ3FULxcdM': 'M', 'bGz4A6rl9U05wqaE3qt1': 'F', 'JBFqnCBsd6RMkjVDRZzb': 'M',
  'Tfv2PGiTliSQ4XSXrJmA': 'F',
  'onwK4e9ZLuTAKqWW03F9': 'M', // Daniel — British male
  'Xb7hH8MSUJpSbSDYk0k2': 'F', // Alice — British female
};
// Teen voices (for Roblox lessons): --teen-m=id1,id2  --teen-f=id3,id4
const TEEN = {
  M: ((process.argv.find((a) => a.startsWith('--teen-m=')) || '').slice(9)).split(',').filter(Boolean),
  F: ((process.argv.find((a) => a.startsWith('--teen-f=')) || '').slice(9)).split(',').filter(Boolean),
};
for (const g of ['M', 'F']) for (const v of TEEN[g]) VOICE_GENDER[v] = g;

/** Voice of the given gender for word number n (same word → same voice every run). */
function voiceOf(g, n) {
  // A plan entry can also be a specific voice ID (e.g. a British voice so "A4" is said the UK way)
  if (g && g.length > 2 && !BANNED_VOICES.has(g)) return g;
  if (TEEN[g]?.length) return TEEN[g][n % TEEN[g].length];
  let pool = VOICES.filter((v) => VOICE_GENDER[v] === g);
  if (!pool.length) pool = DEFAULT_VOICES.filter((v) => VOICE_GENDER[v] === g && !BANNED_VOICES.has(v));
  return pool[n % pool.length];
}
function loadPlan(slug) {
  const f = join('scripts', 'voice-plans', `${slug}.json`);
  return existsSync(f) ? JSON.parse(readFileSync(f, 'utf8')) : null;
}

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
if (!DRY && !ELEVEN_KEY) { console.error(`ELEVENLABS_API_KEY_${KEY_NUM} not found in .env.local`); process.exit(1); }
if (!DRY && !CF_TOKEN) { console.error('Add CF_API_TOKEN=... to .env.local'); process.exit(1); }

// ── Helpers ───────────────────────────────────────────────────────────────────
/** Must match audioSlugOf() in components/WordEntryCard.tsx */
function audioSlugOf(text) {
  return text.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/** Acronyms are spelled out letter by letter, e.g. "HR" → "H.R." (v4 may otherwise read HR as a word). */
const ACRONYMS = ['HR', 'IT', 'CEO', 'CFO', 'CTO', 'PR', 'KPI', 'ROI', 'ID', 'KO', 'TKO', 'UFC', 'MMA', 'PC', 'TV', 'UK', 'USA', 'EU', 'ASAP'];
function spellAcronyms(text) {
  return text.replace(/\bB2B\b/g, 'B to B').replace(/\bB2C\b/g, 'B to C').replace(new RegExp(`\\b(${ACRONYMS.join('|')})\\b`, 'g'), (m) => m.split('').join('.') + '.');
}

/** Placeholders like [time] or [name]: v4 would treat square brackets as instructions,
 *  so they become a short pause ("…") instead. */
function placeholdersToPause(text) {
  return text.replace(/\s*\[[^\]]*\]\s*/g, '… ').replace(/…\s*([.?!,])/g, '…').trim();
}

/** "SOFA / COUCH" → "sofa or couch". Lower-case so all-caps words aren't spelled out letter by letter. */
function speakableWord(text) {
  return placeholdersToPause(
    spellAcronyms(text.replace(/…|\.\.\./g, '').replace(/[.!?]?\s*\/\s*/g, ' or ').trim().toLowerCase().replace(/\b(hr|it|ceo|cfo|cto|pr|kpi|roi|ko|tko|ufc|mma|pc|tv|uk|usa|eu|asap)\b/g, (m) => m.toUpperCase())),
  );
}

function speakableExample(text) {
  return spellAcronyms(
    text
      .replace(/\[\[([^:\]]+):[^\]]*\]\]/g, '$1')                            // [[word:gloss]] → word
      .replace(/\b(\d+(?:\.\d+)?)x\b/g, '$1 times')                              // 3.5x → 3.5 times
      .replace(/[.!?]?["”]\s*\/\s*["“]/g, ', or ')                             // "A." / "B." → A, or B
      .replace(/\s+\/\s+/g, ' or ')                                             // a / b → a or b
      .replace(/["“”]/g, '')                                                     // drop quote marks
      .replace(/, or ([A-Z])(?=[a-z])/g, (m, c) => `, or ${c.toLowerCase()}`)   // ", or This" → ", or this"
      .replace(/\s*→\s*/g, ' ')                                                  // drop arrows
      .replace(/(^|\s)[A-D]:\s/g, '$1')                                          // drop "A: " / "B: " labels
      .replace(/\[[^\]]*\]/g, (m) => placeholdersToPause(m))                    // [name] → pause
      .replace(/\s{2,}/g, ' ')
      .trim(),
  );
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
      // Real-life cards (Roblox lessons) can repeat an in-game word, so they get their own "-irl" file names
      entries.push({ title: unesc(m[1] ?? m[2]), example: unesc(m[3] ?? m[4]), irl: section === 'irlVocabulary' });
    }
  }
  return entries;
}

/** All vocabulary / phrase image URLs of a lesson. */
function imageUrlsOf(slug) {
  const src = readFileSync(join('data', 'lessons', `${slug}.ts`), 'utf8');
  const urls = [];
  for (const section of ['vocabulary', 'irlVocabulary', 'phrasalVerbs']) {
    const start = src.search(new RegExp(`\\n\\s*${section}\\s*:\\s*\\[`));
    if (start < 0) continue;
    let i = src.indexOf('[', start), depth = 0, end = i;
    for (; end < src.length; end++) {
      if (src[end] === '[') depth++;
      else if (src[end] === ']' && --depth === 0) break;
    }
    // Only the word/phrase card images count — not the extra brand "visual example" images inside a phrase
    for (const m of src.slice(i, end).matchAll(/imageSlug\s*:\s*['"`]([^'"`]+)['"`]/g)) {
      if (!m[1].includes('/visual-examples/')) urls.push(m[1]);
    }
  }
  return urls;
}

/** Rule: only record lessons where EVERY vocabulary and phrase image exists. Returns missing count. */
async function missingImages(slug) {
  const urls = imageUrlsOf(slug);
  let missing = 0;
  for (const u of urls) {
    if (u.startsWith('/')) {
      if (!existsSync(join('public', u))) missing++;
      continue;
    }
    try {
      const r = await fetch(u.split('?')[0], { method: 'HEAD' });
      if (!r.ok) missing++;
    } catch { missing++; }
  }
  return { missing, total: urls.length };
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

/** Split a question/answer or A:/B: example into speaker turns. Returns null for normal sentences. */
function dialogueTurns(raw) {
  if (/(^|\s)[A-D]:\s/.test(raw)) {
    const parts = raw.split(/(?:^|\s)([A-D]):\s/).slice(1); // [label, text, label, text, ...]
    const turns = [];
    for (let i = 0; i < parts.length; i += 2) turns.push({ speaker: parts[i], text: parts[i + 1] });
    return turns.length > 1 ? turns : null;
  }
  if (raw.includes('→')) {
    const parts = raw.split('→').map((t) => t.trim()).filter(Boolean);
    return parts.length > 1 ? parts.map((text, i) => ({ speaker: i % 2 ? 'B' : 'A', text })) : null;
  }
  return null;
}

/**
 * Story-style examples ("Marcus called Riley and said: I want… Riley said: Perfect…").
 * Splits them into narrator parts and character speech. cast = { narrator: voiceId, Riley: voiceId, … }.
 * Returns null when the example has no "…: " speech in it.
 */
function narrativeTurns(raw, cast) {
  if (!raw.includes(':')) return null;
  const names = Object.keys(cast).filter((n) => n !== 'narrator');
  const femaleName = names.find((n) => VOICE_GENDER[cast[n]] === 'F');
  const maleName = names.find((n) => VOICE_GENDER[cast[n]] === 'M');
  const speakerOf = (clause) => {
    const m = clause.match(new RegExp(`\\b(${[...names, 'she', 'She', 'he', 'He'].join('|')})\\b`));
    if (!m) return null;
    if (/^she$/i.test(m[1])) return femaleName;
    if (/^he$/i.test(m[1])) return maleName;
    return m[1];
  };
  const sentences = raw.split(/(?<=[.!?])\s+/);
  const turns = [];
  const add = (who, text) => {
    text = text.trim();
    if (!text) return;
    const last = turns[turns.length - 1];
    if (last && last.who === who) last.text += ' ' + text;
    else turns.push({ who, text });
  };
  let current = null; // speaker while inside speech
  for (const sen of sentences) {
    const i = sen.indexOf(':');
    if (i > 0) {
      const before = sen.slice(0, i);
      const who = speakerOf(before);
      if (who) {
        add('narrator', before);
        add(who, sen.slice(i + 1));
        current = who;
        continue;
      }
    }
    add(current || 'narrator', sen);
  }
  return turns.length > 1 ? turns : null;
}

/** Second voice for dialogues: the next voice in the rotation, or a default one if only one voice is set. */
function partnerVoice(voice, n) {
  // With teen voices set, the other speaker is a teen of the opposite gender
  const g = VOICE_GENDER[voice];
  const other = TEEN[g === 'M' ? 'F' : 'M'];
  if (other?.length) return other[n % other.length];
  const pool = VOICES.length > 1 ? VOICES : DEFAULT_VOICES.filter((v) => !BANNED_VOICES.has(v));
  for (let k = 1; k <= pool.length; k++) {
    const v = pool[(n + k) % pool.length];
    if (v !== voice) return v;
  }
  return voice;
}

async function dialogue(inputs, settings) {
  const res = await fetch('https://api.elevenlabs.io/v1/text-to-dialogue?output_format=mp3_44100_128', {
    method: 'POST',
    headers: { 'xi-api-key': ELEVEN_KEY, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
    body: JSON.stringify({
      inputs,
      model_id: MODEL,
      settings: { stability: settings.stability, similarity: settings.similarity_boost },
    }),
  });
  if (!res.ok) throw new Error(`ElevenLabs dialogue ${res.status}: ${await res.text()}`);
  return Buffer.from(await res.arrayBuffer());
}

// Voices that are missing from the ElevenLabs account in use (filled in automatically on "voice_not_found").
const MISSING_VOICES = new Set();
/** Same-gender replacement for a voice that is not on this account. */
function replacementFor(v) {
  const g = VOICE_GENDER[v];
  return DEFAULT_VOICES.find((x) => x !== v && !MISSING_VOICES.has(x) && !BANNED_VOICES.has(x) && (!g || VOICE_GENDER[x] === g));
}
/** Generate audio; if a voice is not on this account, swap it for another voice of the same gender and retry. */
async function withFallback(job, voice) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const fix = (v) => (MISSING_VOICES.has(v) ? replacementFor(v) : v);
    try {
      if (job.inputs) return await dialogue(job.inputs.map((x) => ({ ...x, voice_id: fix(x.voice_id) })), job.settings);
      return await tts(job.text, fix(voice), job.settings);
    } catch (err) {
      const m = String(err.message).match(/voice_id '([A-Za-z0-9]+)' was not found/);
      if (!m) throw err;
      if (!MISSING_VOICES.has(m[1])) console.warn(`  ⚠️  Voice ${m[1]} is not on this ElevenLabs account — using another ${VOICE_GENDER[m[1]] === 'F' ? 'female' : VOICE_GENDER[m[1]] === 'M' ? 'male' : 'similar'} voice instead.`);
      MISSING_VOICES.add(m[1]);
    }
  }
  throw new Error('No available voice found on this account');
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
  if (!flags.has('--ignore-images')) {
    const { missing, total } = await missingImages(slug);
    if (missing) {
      console.log(`\n⏭️  ${slug}: skipped — ${missing} of ${total} images missing (record it once all images are uploaded)`);
      continue;
    }
  }
  const entries = readEntries(slug);
  const level = levelOf(slug);
  const TAGS = tagsFor(level);
  if (flags.has('--no-slow')) TAGS.word = ''; // one-off: read words without the [slow] tag
  console.log(`\n📘 ${slug} (${level || 'no level'}${TAGS.word ? ', slow' : ', natural pace'}): ${entries.length} words/phrases`);
  const outDir = join(AUDIO_ROOT, slug);
  if (!DRY) mkdirSync(outDir, { recursive: true });

  const plan = loadPlan(slug);
  if (plan) console.log('   🎭 using voice plan (voices matched to images)');
  for (const [n, e] of entries.entries()) {
    if (ONLY && !ONLY.has(n + 1)) continue;
    const p = plan && plan[String(n + 1)];
    const planA = p ? voiceOf(typeof p === 'string' ? p : p.A, n) : null;
    const planB = p && typeof p === 'object' ? voiceOf(p.B, n + 1) : null;
    const voice = planA || VOICES[n % VOICES.length];
    const base = `${slug}-${e.irl ? "irl-" : ""}${audioSlugOf(e.title)}`;
    const jobs = [];
    if (WORDS) jobs.push({ name: `${base}.mp3`, text: `${TAGS.word} ${speakableWord(e.title)}`.trim(), settings: WORD_SETTINGS });
    const story = plan && plan._cast ? narrativeTurns(e.example, plan._cast) : null;
    if (EXAMPLES && story) {
      // Narrator + characters, each in their own voice
      const inputs = story.map((t) => ({
        text: `${TAGS.example} ${speakableExample(t.text)}`.trim(),
        voice_id: plan._cast[t.who] || plan._cast.narrator,
      }));
      jobs.push({ name: `${base}-example.mp3`, inputs, text: story.map((t) => `${t.who}: ${t.text}`).join(' | '), settings: EXAMPLE_SETTINGS });
    } else if (EXAMPLES) {
      const turns = dialogueTurns(e.example);
      if (turns) {
        // Question → answer / A: B: conversations get two different voices
        const partner = planB && planB !== voice ? planB : partnerVoice(voice, n);
        const inputs = turns.map((t) => ({
          text: `${TAGS.example} ${speakableExample(t.text)}`.trim(),
          voice_id: t.speaker === 'A' || t.speaker === 'C' ? voice : partner,
        }));
        jobs.push({ name: `${base}-example.mp3`, inputs, text: inputs.map((x) => x.text).join(' | '), settings: EXAMPLE_SETTINGS });
      } else {
        jobs.push({ name: `${base}-example.mp3`, text: `${TAGS.example} ${speakableExample(e.example)}`.trim(), settings: EXAMPLE_SETTINGS });
      }
    }

    for (const job of jobs) {
      const local = join(outDir, job.name);
      if (!FORCE && existsSync(local)) { skipped++; continue; }
      if (DRY) { const g = job.inputs ? job.inputs.map((x) => VOICE_GENDER[x.voice_id] || '?').join('→') : (VOICE_GENDER[voice] || '?'); console.log(`  • ${job.name} [${g}]  ←  "${job.text}"`); chars += job.text.length; continue; }
      try {
        const buf = await withFallback(job, voice);
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
  console.log(`\n🔄 Audio version bumped. Push so browsers load the new recordings:\n   git add lib/audio.ts; git commit -m "Refresh audio"; git push`);
}

console.log(
  DRY
    ? `\nDry run: would generate about ${chars} characters of audio.`
    : `\nDone: ${made} made and uploaded, ${skipped} skipped (already made), ${failed} failed. ~${chars} characters used.\nFiles are live at ${PUBLIC_URL}/<name>.mp3`,
);

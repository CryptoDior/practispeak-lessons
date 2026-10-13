/**
 * Simplify long word/phrase definitions and example sentences in lesson files.
 *
 * Rules (Dior's): explain the word in simple terms, and give ONE short sentence that uses the word.
 * No stories, no reported speech ("Riley said: ..."), no course-style explanations.
 *
 * Only entries that are too long (or story-style) are rewritten; good entries are left alone.
 * Uses ANTHROPIC_API_KEY from .env.local.
 *
 * Run from the project root:
 *   node scripts/simplify-lesson-text.mjs hello-i-work-in-marketing          (one or more lessons)
 *   node scripts/simplify-lesson-text.mjs --all                              (every lesson on the site)
 *   node scripts/simplify-lesson-text.mjs --all B1-B2                        (one level only)
 *   add --dry-run to only list what would change
 *   add --redo to rewrite every entry, even ones that are already short
 *
 * A log of every change is written to  simplify-log.csv  (open it in Excel to review).
 */

import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'fs';
import { join } from 'path';

if (existsSync('.env.local')) {
  for (const line of readFileSync('.env.local', 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*["']?([^"'\r\n]+)/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}
const KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = 'claude-sonnet-5-5';

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const REDO = args.includes('--redo'); // rewrite EVERY entry (e.g. to fix lessons simplified before a rule changed)
const LEVELS = ['A1', 'A2', 'A1-A2', 'B1-B2', 'C1-C2'];
const levelArg = args.find((a) => LEVELS.includes(a));
let slugs = args.filter((a) => !a.startsWith('--') && !LEVELS.includes(a));
if (args.includes('--all')) {
  const index = readFileSync(join('data', 'lessons', 'index.ts'), 'utf8');
  slugs = [...index.matchAll(/from '\.\/([a-z0-9-]+)'/g)].map((m) => m[1]);
}
if (!slugs.length) { console.error('Give lesson slugs or --all'); process.exit(1); }
if (!DRY && !KEY) { console.error('ANTHROPIC_API_KEY not found in .env.local'); process.exit(1); }

const MAX_WORDS = 15;
const words = (t) => t.trim().split(/\s+/).length;
const isStory = (t) => /\b[A-Z][a-z]+ (said|asked|replied|responded|told|explained|added)\b[^.]*:/.test(t);
// Sales-course "coaching" tone (tips/advice to the learner) — this is an English lesson, not a sales course.
const isCoaching = (t) => /\b(you should|your job is|the key (is|to)|always make sure)\b/i.test(t);

const STR = `'((?:[^'\\\\]|\\\\.)*)'|"((?:[^"\\\\]|\\\\.)*)"|\`((?:[^\`\\\\]|\\\\.)*)\``;
const unesc = (s) => s.replace(/\\(['"`\\])/g, '$1');
const lit = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

/** Find entries {title, def:{text,start,end}, ex:{text,start,end}} in vocabulary / irlVocabulary / phrasalVerbs. */
function findEntries(src) {
  const out = [];
  for (const section of ['vocabulary', 'irlVocabulary', 'phrasalVerbs']) {
    const start = src.search(new RegExp(`\\n\\s*${section}\\s*:\\s*\\[`));
    if (start < 0) continue;
    let i = src.indexOf('[', start), depth = 0, end = i;
    for (; end < src.length; end++) {
      if (src[end] === '[') depth++;
      else if (src[end] === ']' && --depth === 0) break;
    }
    // split into objects at top level of the array
    let d = 0, objStart = -1;
    for (let k = i + 1; k < end; k++) {
      const c = src[k];
      if (c === "'" || c === '"' || c === '`') { // skip strings
        const q = c; k++;
        while (k < end && src[k] !== q) { if (src[k] === '\\') k++; k++; }
        continue;
      }
      if (c === '{') { if (d === 0) objStart = k; d++; }
      else if (c === '}') {
        d--;
        if (d === 0 && objStart >= 0) {
          const obj = src.slice(objStart, k + 1);
          const field = (name) => {
            const m = new RegExp(`\\b${name}\\s*:\\s*(?:${STR})`).exec(obj);
            if (!m) return null;
            const text = unesc(m[1] ?? m[2] ?? m[3]);
            const litStart = objStart + m.index + m[0].indexOf(m[0].match(/['"`]/)[0]);
            return { text, start: litStart, end: objStart + m.index + m[0].length };
          };
          const title = field('word') || field('phrase');
          const def = field('definition');
          const ex = field('example');
          const img = field('imageSlug') || field('imageUrl') || field('image');
          if (title && def && ex) out.push({ title: title.text, def, ex, image: img ? img.text : null });
          objStart = -1;
        }
      }
    }
  }
  return out;
}

/** Image as an API content block: R2/https images are checked to exist; local /images/... files are sent as base64. */
async function imageBlock(src) {
  if (!src) return null;
  try {
    if (/^https?:\/\//.test(src)) {
      const r = await fetch(src.split('?')[0], { method: 'HEAD' });
      const size = Number(r.headers?.get?.('content-length') || 0);
      if (!r.ok || size > 4_500_000) return null; // the API rejects images over ~5 MB
      return { type: 'image', source: { type: 'url', url: src } };
    }
    const file = join('public', src.replace(/^\/+/, '').split('?')[0]);
    if (!existsSync(file)) return null;
    const ext = file.split('.').pop().toLowerCase();
    const media = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' }[ext];
    return media ? { type: 'image', source: { type: 'base64', media_type: media, data: readFileSync(file).toString('base64') } } : null;
  } catch { return null; }
}

async function rewrite(level, items, topic) {
  try {
    return await rewriteOnce(level, items, topic, true);
  } catch (err) {
    console.log(`  ⚠️  ${err.message.slice(0, 160)}\n  ↻ retrying without images...`);
    return await rewriteOnce(level, items, topic, false);
  }
}

async function rewriteOnce(level, items, topic, useImages) {
  const levelRule = {
    'A1': 'Use only very basic, everyday words (beginner level). Very short sentences.',
    'A2': 'Use only very basic, everyday words (elementary level). Very short sentences.',
    'A1-A2': 'Use only very basic, everyday words (beginner/elementary level). Very short sentences.',
    'B1-B2': 'Use simple, clear, common words (intermediate level).',
    'C1-C2': 'You may use natural, advanced vocabulary, but keep it clear and short (advanced level).',
  }[level] || 'Use simple, clear words.';
  const prompt = `You write vocabulary cards for an English-learning website.
For each item, write:
- "definition": ONE short, simple, concise sentence that explains what the word or phrase means, like a learner's dictionary. Aim for 6-12 words, maximum ${MAX_WORDS}. Use everyday words that are easier than the word itself. Never use the word itself (or its forms) to explain it. No examples, no "e.g.", no lists, no dashes, no extra detail, no teaching advice.
- "example": ONE short, natural sentence that USES the word or phrase in EXACTLY the form shown (same spelling and form: "assumption", not "assuming"; "symptom", not "symptoms"; "close a deal", not "closed the deal"). Aim for 6-12 words, maximum ${MAX_WORDS}. ONE idea only: no second clause that explains or repeats the meaning (no "because...", "which means...", "and it keeps...", "so..."). No stories, no narrator, no reported speech (never "X said:"), no names unless needed.
This is an ENGLISH lesson, not a sales or business course: never give tips, advice or coaching to the reader (no "always...", "you should...", "your job is...", "make sure..."). Just show the word used naturally in an everyday work situation. Avoid dashes; use one simple sentence.
Definitions explain only what the word means, in plain everyday English, like a learner's dictionary. No extra detail about strategy or best practice.
${levelRule}
If the word is a phrase with placeholders like [name] or [X], the example should fill them in naturally.
Keep British/American spelling as in the original. Keep the same meaning as the original definition.
If the original example already matches its image, keep the same idea and just make it shorter and simpler. Only write a new idea when the original does not fit the image.
Return ONLY a JSON array with one object per item, in the same order: [{"definition": "...", "example": "..."}].

LESSON TOPIC: ${topic}
Every example MUST stay in this lesson's topic and setting (for a sales lesson: a salesperson talking to or about a customer, client, product, order, deal or meeting; for a marketing lesson: a marketer talking about campaigns, brands, audiences, channels, content, ads, data or results at work). Never switch to an unrelated everyday situation (no restaurants, holidays, friends, etc. unless that IS the lesson topic).

Items (level ${level}):
${JSON.stringify(items.map((it) => ({ word: it.title, definition: it.def.text, example: it.ex.text })), null, 1)}`;
  // Attach each entry's picture (where it exists) so the new example matches what the image shows.
  const content = [];
  for (let n = 0; n < items.length; n++) {
    const block = useImages ? await imageBlock(items[n].image) : null;
    if (!block) continue;
    content.push({ type: 'text', text: `Image for item ${n + 1} (${items[n].title}):` }, block);
  }
  const imgRule = content.length
    ? `\nSome items have an image (shown above, labelled by item number). For those items, the example MUST match the image: the same people (man/woman, how many), the same action, place and objects. Use "he"/"she" to match the person in the image. Do NOT describe the picture like a caption (no "in the hotel lobby", "the two women", "on his tablet"): write something a salesperson or customer would naturally say, that fits the scene. Some images are metaphors (e.g. stepping stones for "next step", a bridge for "bridge the gap"): NEVER use the word in a literal sense to describe the picture. Always use it with its meaning from the definition, in a real sales/work situation. Items without an image: write a natural example.\n`
    : '';
  content.push({ type: 'text', text: prompt + imgRule });
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ model: MODEL, max_tokens: 4000, messages: [{ role: 'user', content }] }),
  });
  if (!res.ok) throw new Error(`Anthropic ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = data.content.map((c) => c.text || '').join('');
  const json = JSON.parse(text.slice(text.indexOf('['), text.lastIndexOf(']') + 1));
  if (json.length !== items.length) throw new Error('Wrong number of items returned');
  return json;
}

const LOG = 'simplify-log.csv';
if (!DRY && !existsSync(LOG)) writeFileSync(LOG, 'lesson,word,old definition,new definition,old example,new example\n');
const csv = (s) => `"${String(s).replace(/"/g, '""')}"`;

let changedLessons = 0, changedEntries = 0;
for (const slug of slugs) {
  const file = join('data', 'lessons', `${slug}.ts`);
  let src = readFileSync(file, 'utf8');
  const level = (src.match(/level:\s*'([^']+)'/) || [])[1] || '';
  if (levelArg && level !== levelArg) continue;
  const all = findEntries(src);
  const todo = REDO ? all : all.filter((e) =>
    words(e.def.text) > MAX_WORDS || words(e.ex.text) > MAX_WORDS ||
    isStory(e.ex.text) || isCoaching(e.ex.text) || isCoaching(e.def.text));
  if (!todo.length) continue;
  console.log(`\n📘 ${slug} (${level}): ${todo.length} of ${all.length} entries to simplify`);
  if (DRY) { todo.forEach((e) => console.log(`  • ${e.title}`)); continue; }
  try {
    let topic = [src.match(/\btitle:\s*'([^']+)'/), src.match(/\bsubtitle:\s*'([^']+)'/)].filter(Boolean).map((m) => m[1]).join(' — ');
    // Tell the model which course this belongs to (e.g. "SEO and SEM" is a MARKETING lesson)
    const seriesSrc = readFileSync(join('lib', 'series.ts'), 'utf8');
    for (const [name, label] of [['MARKETING_KW', 'Marketing English'], ['SALES_KW', 'Sales English']]) {
      const m = seriesSrc.match(new RegExp(`const ${name} = \\[([\\s\\S]*?)\\];`));
      const kws = m ? [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]) : [];
      if (kws.some((k) => slug.includes(k))) { topic += ` (part of the ${label} course)`; break; }
    }
    const out = await rewrite(level, todo, topic || slug);
    // apply from the end of the file backwards so positions stay valid
    const edits = [];
    todo.forEach((e, n) => {
      edits.push({ start: e.def.start, end: e.def.end, text: lit(out[n].definition) });
      edits.push({ start: e.ex.start, end: e.ex.end, text: lit(out[n].example) });
      appendFileSync(LOG, [slug, e.title, e.def.text, out[n].definition, e.ex.text, out[n].example].map(csv).join(',') + '\n');
    });
    edits.sort((a, b) => b.start - a.start).forEach((ed) => { src = src.slice(0, ed.start) + ed.text + src.slice(ed.end); });
    writeFileSync(file, src);
    changedLessons++; changedEntries += todo.length;
    console.log(`  ✅ simplified ${todo.length} entries`);
  } catch (err) {
    console.error(`  ❌ ${slug}: ${err.message}`);
  }
}
console.log(DRY ? '\nDry run only.' : `\nDone: ${changedEntries} entries simplified in ${changedLessons} lessons. Review: ${LOG}`);

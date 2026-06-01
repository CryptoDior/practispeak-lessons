/**
 * Practispeak Lesson Creator — Image-First Workflow
 * --------------------------------------------------
 * Usage: node --env-file=.env.local scripts/create-from-images.mjs <lesson-slug>
 *
 * Place your files in:  incoming/<lesson-slug>/
 *   meta.json   — { title, subtitle, level, topic, speakers }
 *   hero.png    — hero / banner image
 *   *.png       — one image per vocabulary word or phrasal verb
 *                 Name each file after the word slug:
 *                   player.png, screen.png, game-over.png, press-start.png …
 *
 * What this script does:
 *   1. Reads meta.json + discovers images
 *   2. Calls Claude API → generates full lesson spec (vocab, dialogue, exercises)
 *   3. Copies images → public/images/
 *   4. Generates ElevenLabs audio for every word & example sentence
 *   5. Writes data/lessons/<slug>.ts
 *   6. Adds lesson to data/lessons/index.ts
 *   7. npm run build  (safety check)
 *   8. git commit + push  → Vercel auto-deploys
 */

import fs   from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

// ── API Keys ──────────────────────────────────────────────────────────────────

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
const ANTHROPIC_KEY  = process.env.ANTHROPIC_API_KEY;

if (!ELEVENLABS_KEY) throw new Error('Missing ELEVENLABS_API_KEY — add it to .env.local');
if (!ANTHROPIC_KEY)  throw new Error('Missing ANTHROPIC_API_KEY — add it to .env.local');

// ── Voice config (ElevenLabs) ─────────────────────────────────────────────────

const VOICES = {
  narrator: 'iP95p4xoKVk53GoZ742B', // Chris  — American male conversational
  Alex:     'iP95p4xoKVk53GoZ742B',
  Sam:      'cgSgspJ2msm6clMCkdW9', // Jessica — American female conversational
  Zara:     'cgSgspJ2msm6clMCkdW9',
  Jax:      'iP95p4xoKVk53GoZ742B',
  Maya:     'cgSgspJ2msm6clMCkdW9',
  Coach:    'iP95p4xoKVk53GoZ742B',
  Player:   'cgSgspJ2msm6clMCkdW9',
};

// ── Paths ─────────────────────────────────────────────────────────────────────

const ROOT        = path.resolve('.');
const IMAGES_DIR  = path.join(ROOT, 'public', 'images');
const AUDIO_DIR   = path.join(ROOT, 'public', 'audio');
const LESSONS_DIR = path.join(ROOT, 'data', 'lessons');
const SPECS_DIR   = path.join(ROOT, 'scripts', 'lesson-specs');
const INCOMING_DIR = path.join(ROOT, 'incoming');

// ── Helpers ───────────────────────────────────────────────────────────────────

function log(msg)  { console.log(`\n✅ ${msg}`); }
function info(msg) { console.log(`   ${msg}`); }

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function toCamelCase(slug) {
  return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

/** Use double quotes when the string contains apostrophes */
function q(str) {
  if (typeof str !== 'string') str = String(str);
  return str.includes("'") ? `"${str}"` : `'${str}'`;
}

// ── Claude API ────────────────────────────────────────────────────────────────

async function callClaude(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 8000,
      messages: [{ role: 'user', content: prompt }],
    });
    const req = https.request({
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    }, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString();
        if (res.statusCode !== 200) {
          reject(new Error(`Claude API error ${res.statusCode}: ${raw}`));
        } else {
          const data = JSON.parse(raw);
          resolve(data.content[0].text);
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── ElevenLabs audio ──────────────────────────────────────────────────────────

async function generateAudio(text, voiceId, outputPath, speed = 1.0) {
  info(`Audio: ${path.basename(outputPath)}${speed !== 1.0 ? ` (${speed}x)` : ''}`);
  const finalText = speed !== 1.0
    ? `<speak><prosody rate="${Math.round(speed * 100)}%">${text}</prosody></speak>`
    : text;

  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text: finalText,
      model_id: 'eleven_turbo_v2_5',
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    });
    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${voiceId}`,
      method: 'POST',
      headers: {
        'xi-api-key': ELEVENLABS_KEY,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
      },
    }, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`ElevenLabs error ${res.statusCode}: ${Buffer.concat(chunks)}`));
        } else {
          fs.writeFileSync(outputPath, Buffer.concat(chunks));
          resolve();
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── Lesson data file writer ───────────────────────────────────────────────────

function writeLessonFile(lessonSlug, exportName, spec, heroExt) {
  const vocabEntries = spec.vocabulary.map(w => {
    const slug = slugify(w.word);
    return `    {
      word: '${w.word.toUpperCase()}',
      partOfSpeech: '${w.partOfSpeech}',
      definition: ${q(w.definition)},
      example: ${q(w.example)},
      imageSlug: '/images/${slug}.png',
    }`;
  }).join(',\n');

  const phrasalEntries = spec.phrasalVerbs.map(v => {
    const slug = slugify(v.phrase);
    return `    {
      phrase: '${v.phrase.toUpperCase()}',
      definition: ${q(v.definition)},
      example: ${q(v.example)},
      imageSlug: '/images/${slug}.png',
    }`;
  }).join(',\n');

  const dialogueEntries = spec.dialogue.map(l => {
    const avatarSlug = l.speaker.toLowerCase();
    return `    {
      speaker: '${l.speaker}',
      speakerColor: '${l.speakerColor}',
      speakerAvatar: '/images/${avatarSlug}-icon.png',
      text: ${q(l.text)},
    }`;
  }).join(',\n');

  return `import { Lesson } from '@/types/lesson';

export const ${exportName}: Lesson = {
  slug: '${lessonSlug}',
  title: ${q(spec.title)},
  subtitle: ${q(spec.subtitle || spec.title)},
  level: '${spec.level}',
  description: ${q(spec.description)},
  heroImage: '/images/${lessonSlug}-hero${heroExt}',

  vocabulary: [
${vocabEntries}
  ],

  phrasalVerbs: [
${phrasalEntries}
  ],

  videos: ${JSON.stringify(spec.videos || [], null, 4)},

  dialogue: [
${dialogueEntries}
  ],

  matchingExercise: ${JSON.stringify(spec.matchingExercise || [], null, 4)},
  fillBlankExercise: ${JSON.stringify(spec.fillBlankExercise || [], null, 4)},
  multipleChoiceExercise: ${JSON.stringify(spec.multipleChoiceExercise || [], null, 4)},
};
`;
}

// ── Main ──────────────────────────────────────────────────────────────────────

const lessonSlug = process.argv[2];
if (!lessonSlug) {
  console.error('Usage: node --env-file=.env.local scripts/create-from-images.mjs <lesson-slug>');
  process.exit(1);
}

const incomingPath = path.join(INCOMING_DIR, lessonSlug);
if (!fs.existsSync(incomingPath)) {
  console.error(`Folder not found: incoming/${lessonSlug}/`);
  process.exit(1);
}

const metaPath = path.join(incomingPath, 'meta.json');
if (!fs.existsSync(metaPath)) {
  console.error(`meta.json not found in incoming/${lessonSlug}/`);
  process.exit(1);
}

const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
const exportName = toCamelCase(lessonSlug);
const speakers = meta.speakers || ['Alex', 'Sam'];

// Discover images
const allFiles = fs.readdirSync(incomingPath);
const imageFiles = allFiles.filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));
const heroFile = imageFiles.find(f => path.parse(f).name === 'hero' || f.startsWith('hero.'));
const wordImages = imageFiles.filter(f => f !== heroFile);

console.log(`\n🚀 Creating lesson: ${meta.title}`);
console.log(`   Slug:        ${lessonSlug}`);
console.log(`   Level:       ${meta.level}`);
console.log(`   Speakers:    ${speakers.join(', ')}`);
console.log(`   Word images: ${wordImages.length}`);
console.log(`   Hero image:  ${heroFile || '(none)'}`);

// ── Step 1: Generate lesson spec (or load existing) ──────────────────────────
const existingSpecPath = path.join(SPECS_DIR, `${lessonSlug}.json`);
if (fs.existsSync(existingSpecPath)) {
  log('Found existing lesson spec — skipping Claude API call.');
}
log(fs.existsSync(existingSpecPath) ? 'Loading existing lesson spec...' : 'Generating lesson content with Claude...');

const imageNames = wordImages.map(f => path.parse(f).name);

const prompt = `You are generating a complete ESL lesson spec for Practispeak, an English learning app for gamers.

LESSON DETAILS:
- Slug: ${lessonSlug}
- Title: ${meta.title}
- Subtitle: ${meta.subtitle || ''}
- Level: ${meta.level}
- Topic / Instructions: ${meta.topic}
- Speakers: ${speakers.join(' and ')}

IMAGE SLUGS PROVIDED (these are the exact word/phrase slugs, derived from the image filenames the user created):
${imageNames.map(n => `- ${n}`).join('\n')}

Rules for categorising:
- Single words or abbreviations (e.g. "player", "hp", "score") → vocabulary words
- Multi-word slugs joined by hyphens (e.g. "game-over", "press-start-to-begin") → phrasal verbs

Generate the full lesson spec as a single JSON object in EXACTLY this structure (no markdown, no code fences, just raw JSON):

{
  "exportName": "${exportName}",
  "title": "${meta.title}",
  "subtitle": "${meta.subtitle || ''}",
  "level": "${meta.level}",
  "description": "One sentence describing what students will learn.",
  "vocabulary": [
    {
      "word": "word as it should be displayed (e.g. HP not hp)",
      "partOfSpeech": "noun|verb|adjective|adverb|abbreviation|exclamation|phrase|preposition|pronoun|conjunction",
      "definition": "Simple definition appropriate for ${meta.level} learners.",
      "example": "Short, natural gaming-context sentence.",
      "imagePrompt": ""
    }
  ],
  "phrasalVerbs": [
    {
      "phrase": "the full phrase (readable, e.g. 'game over' not 'game-over')",
      "definition": "What this phrase means in gaming.",
      "example": "Short example sentence using this phrase naturally.",
      "imagePrompt": ""
    }
  ],
  "dialogue": [
    {
      "speaker": "${speakers[0]}",
      "speakerColor": "blue",
      "text": "Dialogue using [[word:its definition]] markup for vocab words."
    }
  ],
  "videos": [],
  "matchingExercise": [
    { "word": "WORD", "definition": "Short definition" }
  ],
  "fillBlankExercise": [
    { "before": "Text before blank", "after": "text after blank.", "answer": "answer" }
  ],
  "multipleChoiceExercise": [
    {
      "question": "Question about the dialogue?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 0
    }
  ]
}

REQUIREMENTS:
- vocabulary: include ALL vocab image slugs, one entry each
- phrasalVerbs: include ALL phrasal verb image slugs, one entry each
- dialogue: 8–12 lines, alternating ${speakers.join(' and ')}, using ALL vocabulary words marked with [[word:definition]], natural gaming conversation
- speakerColor: "${speakers[0]}" = "blue", "${speakers[1]}" = "green"
- matchingExercise: exactly 8 pairs from the most important vocabulary words
- fillBlankExercise: exactly 8 sentences using lesson vocabulary
- multipleChoiceExercise: exactly 6 questions about the dialogue (4 options each)
- All definitions must use simple ${meta.level} English
- imagePrompt: always leave as empty string ""
- Return ONLY raw valid JSON — no markdown, no explanation`;

let spec;
if (fs.existsSync(existingSpecPath)) {
  spec = JSON.parse(fs.readFileSync(existingSpecPath, 'utf8'));
} else {
  const claudeResponse = await callClaude(prompt);
  try {
    const cleaned = claudeResponse.replace(/^```json?\s*/i, '').replace(/\s*```$/i, '').trim();
    spec = JSON.parse(cleaned);
  } catch (e) {
    console.error('\n❌ Could not parse Claude response. Raw output:\n');
    console.error(claudeResponse.slice(0, 1000));
    throw e;
  }
}

info(`Vocabulary words: ${spec.vocabulary.length}`);
info(`Phrasal verbs:    ${spec.phrasalVerbs.length}`);
info(`Dialogue lines:   ${spec.dialogue.length}`);

// Save spec for reference (only if newly generated)
if (!fs.existsSync(existingSpecPath)) {
  fs.mkdirSync(SPECS_DIR, { recursive: true });
  fs.writeFileSync(path.join(SPECS_DIR, `${lessonSlug}.json`), JSON.stringify(spec, null, 2));
  info(`Spec saved → scripts/lesson-specs/${lessonSlug}.json`);
}

// ── Step 2: Copy images → public/images/ ─────────────────────────────────────
log('Copying images to public/images/...');
fs.mkdirSync(IMAGES_DIR, { recursive: true });

if (heroFile) {
  const heroExt = path.extname(heroFile);
  const dest = path.join(IMAGES_DIR, `${lessonSlug}-hero${heroExt}`);
  fs.copyFileSync(path.join(incomingPath, heroFile), dest);
  info(`Hero → ${lessonSlug}-hero${heroExt}`);
}

for (const imgFile of wordImages) {
  const dest = path.join(IMAGES_DIR, imgFile);
  fs.copyFileSync(path.join(incomingPath, imgFile), dest);
  info(`Image → ${imgFile}`);
}

// ── Step 3: Generate ElevenLabs audio ────────────────────────────────────────
fs.mkdirSync(AUDIO_DIR, { recursive: true });
const narratorVoice = VOICES.narrator;

log('Generating vocabulary audio...');
for (const word of spec.vocabulary) {
  const slug = slugify(word.word);
  await generateAudio(word.word,    narratorVoice, path.join(AUDIO_DIR, `${slug}.mp3`));
  await generateAudio(word.example, narratorVoice, path.join(AUDIO_DIR, `${slug}-example.mp3`), 0.75);
}

log('Generating phrasal verb audio...');
for (const verb of spec.phrasalVerbs) {
  const slug = slugify(verb.phrase);
  await generateAudio(verb.phrase,   narratorVoice, path.join(AUDIO_DIR, `${slug}.mp3`));
  await generateAudio(verb.example,  narratorVoice, path.join(AUDIO_DIR, `${slug}-example.mp3`), 0.75);
}

// ── Step 4: Write lesson .ts data file ───────────────────────────────────────
log('Writing lesson data file...');
const heroExt = heroFile ? path.extname(heroFile) : '.png';
const lessonFileContent = writeLessonFile(lessonSlug, exportName, spec, heroExt);
fs.writeFileSync(path.join(LESSONS_DIR, `${lessonSlug}.ts`), lessonFileContent);
info(`Written → data/lessons/${lessonSlug}.ts`);

// ── Step 5: Add to lessons index ─────────────────────────────────────────────
log('Adding to lessons index...');
const indexPath = path.join(LESSONS_DIR, 'index.ts');
let indexContent = fs.readFileSync(indexPath, 'utf8');

if (!indexContent.includes(`from './${lessonSlug}'`)) {
  // Insert import after the last existing import line
  indexContent = indexContent.replace(
    /^(import \{ \w+ \} from '\.\/[^']+';)(\r?\n)(?!import)/m,
    `$1$2import { ${exportName} } from './${lessonSlug}';$2`
  );
  // Add to lessons array
  indexContent = indexContent.replace(
    /(export const lessons: Lesson\[\] = \[)([\s\S]*?)(\];)/,
    (_, open, middle, close) => `${open}${middle}  ${exportName},\n${close}`
  );
  fs.writeFileSync(indexPath, indexContent);
  info(`Added ${exportName} to index`);
} else {
  info('Already in index — skipping');
}

// ── Step 6: Build check ───────────────────────────────────────────────────────
log('Running build check...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: ROOT });
} catch {
  console.error('\n❌ Build failed — fix errors above before pushing.\n');
  process.exit(1);
}

// ── Step 7: Git commit + push ─────────────────────────────────────────────────
log('Committing and pushing to GitHub...');
execSync('git add -A', { stdio: 'inherit', cwd: ROOT });
execSync(`git commit -m "Add lesson: ${spec.title}"`, { stdio: 'inherit', cwd: ROOT });
execSync('git push', { stdio: 'inherit', cwd: ROOT });

// ── Done ──────────────────────────────────────────────────────────────────────
fs.writeFileSync(path.join(incomingPath, '.processed'), new Date().toISOString());

console.log(`\n🎉 Done! "${spec.title}" is live on Vercel.\n`);

/**
 * Practispeak Lesson Asset Generator
 * ------------------------------------
 * Usage: node scripts/generate-lesson-assets.mjs <lesson-slug>
 *
 * Reads the lesson spec from scripts/lesson-specs/<lesson-slug>.json
 * Generates:
 *   - public/images/<slug>.png  for each vocab word and phrasal verb
 *   - public/images/<slug>-hero.png  hero image
 *   - public/audio/<slug>.mp3  word pronunciation
 *   - public/audio/<slug>-example.mp3  example sentence
 *   - data/lessons/<lesson-slug>.ts  lesson data file
 *
 * Then commits and pushes to GitHub automatically.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import OpenAI from 'openai';

// ── Config ────────────────────────────────────────────────────────────────────

const OPENAI_KEY = process.env.OPENAI_API_KEY;
const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;

const openai = OPENAI_KEY ? new OpenAI({ apiKey: OPENAI_KEY }) : null;

// ElevenLabs voice IDs — full voice roster (always rotate, always speed 0.75)
const VOICES = {
  // Character voices
  Alex:   'EkK5I93UQWFDigLMpZcX', // JM Husk  — male casual
  Sam:    'l4Coq6695JDX9xtLqXDE', // Lauren   — female empathetic
  Kai:    '1SM7GgM6IMuvQlz2BwM3', // Mark     — male
  Maya:   'aMSt68OGf4xUZAnLpTU8', // Juniper  — female
  Zara:   'bGz4A6rl9U05wqaE3qt1', // Sally    — female
  Jax:    'uHoisgHFfUYZ3FULxcdM', // Shannon  — male
  Coach:  'JBFqnCBsd6RMkjVDRZzb', // George   — male
  Player: 'Tfv2PGiTliSQ4XSXrJmA', // female general
};

// Rotation pool for vocab & phrases — alternates male/female across words
const ROTATION_POOL = [
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
let _rotIdx = 0;
function nextVoice() { return ROTATION_POOL[_rotIdx++ % ROTATION_POOL.length]; }

const ROOT = path.resolve('.');
const IMAGES_DIR = path.join(ROOT, 'public', 'images');
const AUDIO_DIR  = path.join(ROOT, 'public', 'audio');
const LESSONS_DIR = path.join(ROOT, 'data', 'lessons');
const SPECS_DIR  = path.join(ROOT, 'scripts', 'lesson-specs');

// ── Helpers ───────────────────────────────────────────────────────────────────

function log(msg) { console.log(`\n✅ ${msg}`); }
function info(msg) { console.log(`   ${msg}`); }

async function generateImage(prompt, outputPath, style = '') {
  const fullPrompt = style ? `${prompt}. Style: ${style}` : prompt;
  info(`Generating image: ${path.basename(outputPath)}`);
  const response = await openai.responses.create({
    model: 'gpt-4o',
    input: fullPrompt,
    tools: [{ type: 'image_generation', model: 'gpt-image-1', size: '1024x1024', quality: 'medium' }],
  });
  const imageCall = response.output.find(o => o.type === 'image_generation_call');
  if (!imageCall?.result) throw new Error(`No image result for: ${prompt}`);
  fs.writeFileSync(outputPath, Buffer.from(imageCall.result, 'base64'));
}

async function generateAudio(text, voiceId, outputPath, speed = 1.0) {
  info(`Generating audio: ${path.basename(outputPath)}${speed !== 1.0 ? ` (${speed}x)` : ''}`);
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

function slugify(word) {
  return word.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

// ── Main ──────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const lessonSlug = args.find(a => !a.startsWith('--'));
const skipAudio  = args.includes('--no-audio');
const skipImages = args.includes('--no-images');

if (!lessonSlug) {
  console.error('Usage: node scripts/generate-lesson-assets.mjs <lesson-slug> [--no-audio] [--no-images]');
  process.exit(1);
}

if (!skipImages && !OPENAI_KEY) throw new Error('Missing OPENAI_API_KEY in environment (or use --no-images to skip image generation)');
if (!skipAudio  && !ELEVENLABS_KEY) throw new Error('Missing ELEVENLABS_API_KEY in environment (or use --no-audio to skip audio generation)');

if (skipAudio)  console.log('\n⏭️  --no-audio flag set — skipping ElevenLabs generation');
if (skipImages) console.log('\n⏭️  --no-images flag set — skipping image generation');

const specPath = path.join(SPECS_DIR, `${lessonSlug}.json`);
if (!fs.existsSync(specPath)) {
  console.error(`Lesson spec not found: ${specPath}`);
  process.exit(1);
}

const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));

console.log(`\n🚀 Generating assets for: ${spec.title}`);
console.log(`   Vocab words:   ${spec.vocabulary.length}`);
console.log(`   Phrasal verbs: ${spec.phrasalVerbs.length}`);
console.log(`   Dialogue lines: ${spec.dialogue.length}`);

// ── 1. Vocabulary audio ───────────────────────────────────────────────────────
if (skipAudio) {
  log('Skipping vocabulary audio (--no-audio)');
} else {
  log('Generating vocabulary audio...');
  for (const word of spec.vocabulary) {
    const slug = slugify(word.word);
    const voice = nextVoice();
    const wordPath    = path.join(AUDIO_DIR, `${slug}.mp3`);
    const examplePath = path.join(AUDIO_DIR, `${slug}-example.mp3`);
    if (!fs.existsSync(wordPath))    await generateAudio(word.word,    voice, wordPath,    0.75);
    else info(`Skipping (exists): ${slug}.mp3`);
    if (!fs.existsSync(examplePath)) await generateAudio(word.example, voice, examplePath, 0.75);
    else info(`Skipping (exists): ${slug}-example.mp3`);
  }
}

// ── 2. Phrasal verb audio ─────────────────────────────────────────────────────
if (skipAudio) {
  log('Skipping phrasal verb audio (--no-audio)');
} else {
  log('Generating phrasal verb audio...');
  for (const verb of spec.phrasalVerbs) {
    const slug = slugify(verb.phrase);
    const voice = nextVoice();
    const phrasePath  = path.join(AUDIO_DIR, `${slug}.mp3`);
    const examplePath = path.join(AUDIO_DIR, `${slug}-example.mp3`);
    if (!fs.existsSync(phrasePath))  await generateAudio(verb.phrase,   voice, phrasePath,  0.75);
    else info(`Skipping (exists): ${slug}.mp3`);
    if (!fs.existsSync(examplePath)) await generateAudio(verb.example,  voice, examplePath, 0.75);
    else info(`Skipping (exists): ${slug}-example.mp3`);
  }
}

// ── 4. Generate lesson data file ──────────────────────────────────────────────
log('Writing lesson data file...');

// Use double quotes if string contains apostrophes, otherwise single quotes
function q(str) {
  return str.includes("'") ? `"${str}"` : `'${str}'`;
}

const vocabEntries = spec.vocabulary.map(w => {
  const slug = slugify(w.word);
  return `    {
      word: ${q(w.word.toUpperCase())},
      partOfSpeech: '${w.partOfSpeech}',
      definition: ${q(w.definition)},
      example: ${q(w.example)},
      imageSlug: '/images/${slug}.png',
    }`;
}).join(',\n');

const phrasalEntries = spec.phrasalVerbs.map(v => {
  const slug = slugify(v.phrase);
  const optionalFields = [
    v.inAction  != null ? `      inAction: ${q(v.inAction)},`  : null,
    v.register  != null ? `      register: ${q(v.register)},`  : null,
    v.inContext != null ? `      inContext: ${q(v.inContext)},` : null,
  ].filter(Boolean).join('\n');
  return `    {
      phrase: ${q(v.phrase.toUpperCase())},
      definition: ${q(v.definition)},
      example: ${q(v.example)},
      imageSlug: '/images/${slug}.png',${optionalFields ? '\n' + optionalFields : ''}
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

const lessonFile = `import { Lesson } from '@/types/lesson';

export const ${spec.exportName}: Lesson = {
  slug: '${lessonSlug}',
  title: ${q(spec.title)},
  subtitle: ${q(spec.subtitle)},
  level: ${q(spec.level)},
  description: ${q(spec.description)},
  heroImage: '/images/${lessonSlug}-hero.png',

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
  multipleChoiceExercise: ${JSON.stringify(spec.multipleChoiceExercise || [], null, 4)},${spec.warmUp ? `
  warmUp: ${JSON.stringify(spec.warmUp, null, 4)},` : ''}${spec.pitchCorner ? `
  pitchCorner: ${JSON.stringify(spec.pitchCorner, null, 4)},` : ''}${spec.completeSentenceExercise ? `
  completeSentenceExercise: ${JSON.stringify(spec.completeSentenceExercise, null, 4)},` : ''}${spec.dealClinic ? `
  dealClinic: ${JSON.stringify(spec.dealClinic, null, 4)},` : ''}${spec.groupActivities ? `
  groupActivities: ${JSON.stringify(spec.groupActivities, null, 4)},` : ''}
};
`;

fs.writeFileSync(path.join(LESSONS_DIR, `${lessonSlug}.ts`), lessonFile);

// ── 6. Add lesson to index automatically ─────────────────────────────────────
log('Adding lesson to index...');
const indexPath = path.join(LESSONS_DIR, 'index.ts');
let indexContent = fs.readFileSync(indexPath, 'utf8');
if (!indexContent.includes(`from './${lessonSlug}'`)) {
  // Insert import after the last import line
  const lastImportMatch = [...indexContent.matchAll(/^import .* from '\.\/[^']+';/gm)];
  if (lastImportMatch.length > 0) {
    const lastImport = lastImportMatch[lastImportMatch.length - 1];
    const insertPos = lastImport.index + lastImport[0].length;
    indexContent = indexContent.slice(0, insertPos) +
      `\nimport { ${spec.exportName} } from './${lessonSlug}';` +
      indexContent.slice(insertPos);
  }
  indexContent = indexContent
    .replace(
      /(export const lessons: Lesson\[\] = \[)([\s\S]*?)(\];)/,
      (_, open, middle, close) => `${open}${middle}  ${spec.exportName},\n${close}`
    );
  fs.writeFileSync(indexPath, indexContent);
  info(`Added ${spec.exportName} to lessons index`);
} else {
  info('Lesson already in index');
}

// ── 7. Build check before pushing ────────────────────────────────────────────
log('Running build check...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (e) {
  console.error('\n❌ Build failed — fix the errors above before pushing.\n');
  process.exit(1);
}

// ── 8. Git commit and push ────────────────────────────────────────────────────
log('Committing and pushing to GitHub...');
execSync('git add -A', { stdio: 'inherit' });
execSync(`git commit -m "Add lesson: ${spec.title}"`, { stdio: 'inherit' });
execSync('git push', { stdio: 'inherit' });

console.log(`\n🎉 Done! Lesson "${spec.title}" is live on Vercel.\n`);

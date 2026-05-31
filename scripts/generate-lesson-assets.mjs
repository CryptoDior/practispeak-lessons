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

if (!OPENAI_KEY) throw new Error('Missing OPENAI_API_KEY in environment');
if (!ELEVENLABS_KEY) throw new Error('Missing ELEVENLABS_API_KEY in environment');

const openai = new OpenAI({ apiKey: OPENAI_KEY });

// ElevenLabs voice IDs — American Conversational voices
const VOICES = {
  narrator: 'iP95p4xoKVk53GoZ742B', // Chris  — American male conversational (vocabulary)
  Zara:     'cgSgspJ2msm6clMCkdW9', // Jessica — American female conversational
  Jax:      'iP95p4xoKVk53GoZ742B', // Chris   — American male conversational
  Maya:     'cgSgspJ2msm6clMCkdW9', // Jessica — American female conversational
  Alex:     'iP95p4xoKVk53GoZ742B', // Chris   — American male conversational
  Sam:      'cgSgspJ2msm6clMCkdW9', // Jessica — American female conversational
  Coach:    'iP95p4xoKVk53GoZ742B', // Chris   — American male conversational
  Player:   'cgSgspJ2msm6clMCkdW9', // Jessica — American female conversational
};

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
  info(`Generating audio: ${path.basename(outputPath)}${speed !== 1.0 ? ` (speed: ${speed})` : ''}`);
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      model_id: 'eleven_turbo_v2_5',
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
      speed,
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

const lessonSlug = process.argv[2];
if (!lessonSlug) {
  console.error('Usage: node scripts/generate-lesson-assets.mjs <lesson-slug>');
  process.exit(1);
}

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

const imageStyle = spec.imageStyle || '';

// ── 1. Hero image ─────────────────────────────────────────────────────────────
log('Generating hero image...');
await generateImage(
  `A cinematic hero image for an English language lesson called "${spec.title}". ${spec.heroImagePrompt || ''}. No text or subtitles in the image.`,
  path.join(IMAGES_DIR, `${lessonSlug}-hero.png`),
  imageStyle
);

// ── 2. Vocabulary images & audio ──────────────────────────────────────────────
log('Generating vocabulary images and audio...');
for (const word of spec.vocabulary) {
  const slug = slugify(word.word);

  await generateImage(
    `${word.imagePrompt || `A scene representing the word "${word.word}" in a gaming context: ${word.definition}`}. No text or subtitles in the image.`,
    path.join(IMAGES_DIR, `${slug}.png`),
    imageStyle
  );

  await generateAudio(word.word, VOICES.narrator, path.join(AUDIO_DIR, `${slug}.mp3`));
  await generateAudio(word.example, VOICES.narrator, path.join(AUDIO_DIR, `${slug}-example.mp3`), 0.75);
}

// ── 3. Phrasal verb images & audio ────────────────────────────────────────────
log('Generating phrasal verb images and audio...');
for (const verb of spec.phrasalVerbs) {
  const slug = slugify(verb.phrase);

  await generateImage(
    `${verb.imagePrompt || `A scene representing the phrase "${verb.phrase}" in a gaming context: ${verb.definition}`}. No text or subtitles in the image.`,
    path.join(IMAGES_DIR, `${slug}.png`),
    imageStyle
  );

  await generateAudio(verb.phrase, VOICES.narrator, path.join(AUDIO_DIR, `${slug}.mp3`));
  await generateAudio(verb.example, VOICES.narrator, path.join(AUDIO_DIR, `${slug}-example.mp3`), 0.75);
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

const lessonFile = `import { Lesson } from '@/types/lesson';

export const ${spec.exportName}: Lesson = {
  slug: '${lessonSlug}',
  title: '${spec.title}',
  subtitle: '${spec.subtitle}',
  level: '${spec.level}',
  description: '${spec.description}',
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
  multipleChoiceExercise: ${JSON.stringify(spec.multipleChoiceExercise || [], null, 4)},
};
`;

fs.writeFileSync(path.join(LESSONS_DIR, `${lessonSlug}.ts`), lessonFile);

// ── 6. Add lesson to index automatically ─────────────────────────────────────
log('Adding lesson to index...');
const indexPath = path.join(LESSONS_DIR, 'index.ts');
let indexContent = fs.readFileSync(indexPath, 'utf8');
if (!indexContent.includes(`from './${lessonSlug}'`)) {
  indexContent = indexContent
    .replace(
      /^(import .* from '\.\/[^']+';)(\s*\n)(\/\*\*)/m,
      `$1\nimport { ${spec.exportName} } from './${lessonSlug}';\n$3`
    )
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

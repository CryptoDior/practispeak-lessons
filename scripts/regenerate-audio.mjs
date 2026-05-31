/**
 * Practispeak Audio Regenerator
 * ------------------------------
 * Usage: node scripts/regenerate-audio.mjs <lesson-slug>
 *
 * Regenerates ONLY the audio files for a lesson (skips images).
 * Word audio: normal speed (1.0)
 * Example audio: slow speed (0.75) — ideal for A1 learners
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) throw new Error('Missing ELEVENLABS_API_KEY');

const ROOT = path.resolve('.');
const AUDIO_DIR  = path.join(ROOT, 'public', 'audio');
const SPECS_DIR  = path.join(ROOT, 'scripts', 'lesson-specs');

// American Conversational voices
const VOICES = {
  narrator: 'iP95p4xoKVk53GoZ742B', // Chris  — American male conversational
  Coach:    'iP95p4xoKVk53GoZ742B',
  Player:   'cgSgspJ2msm6clMCkdW9',
  Zara:     'cgSgspJ2msm6clMCkdW9',
  Jax:      'iP95p4xoKVk53GoZ742B',
  Maya:     'cgSgspJ2msm6clMCkdW9',
  Alex:     'iP95p4xoKVk53GoZ742B',
  Sam:      'cgSgspJ2msm6clMCkdW9',
};

function slugify(word) {
  return word.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function info(msg) { console.log(`   ${msg}`); }
function log(msg)  { console.log(`\n✅ ${msg}`); }

async function generateAudio(text, voiceId, outputPath, speed = 1.0) {
  info(`Generating: ${path.basename(outputPath)}${speed !== 1.0 ? ` (${speed}x)` : ''}`);
  // Use SSML prosody rate for reliable speed control
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

const lessonSlug = process.argv[2];
if (!lessonSlug) {
  console.error('Usage: node scripts/regenerate-audio.mjs <lesson-slug>');
  process.exit(1);
}

const specPath = path.join(SPECS_DIR, `${lessonSlug}.json`);
if (!fs.existsSync(specPath)) {
  console.error(`Lesson spec not found: ${specPath}`);
  process.exit(1);
}

const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));
console.log(`\n🔊 Regenerating audio for: ${spec.title}`);

// ── Vocabulary examples only ──────────────────────────────────────────────────
log('Vocabulary example sentences (0.75x)...');
for (const word of spec.vocabulary) {
  const slug = slugify(word.word);
  await generateAudio(word.example, VOICES.narrator, path.join(AUDIO_DIR, `${slug}-example.mp3`), 0.75);
}

// ── Phrase examples only ──────────────────────────────────────────────────────
log('Phrase example sentences (0.75x)...');
for (const verb of spec.phrasalVerbs) {
  const slug = slugify(verb.phrase);
  await generateAudio(verb.example, VOICES.narrator, path.join(AUDIO_DIR, `${slug}-example.mp3`), 0.75);
}

// ── Push ──────────────────────────────────────────────────────────────────────
log('Pushing to GitHub...');
execSync('git add -A', { stdio: 'inherit' });
execSync(`git commit -m "Regenerate audio at 0.75x for ${spec.title}"`, { stdio: 'inherit' });
execSync('git push', { stdio: 'inherit' });

console.log(`\n🎉 Audio regenerated and pushed for "${spec.title}"\n`);

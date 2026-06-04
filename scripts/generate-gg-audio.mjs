/**
 * Audio generator — GG: Basic Gaming Chat
 * Run from the practispeak-lessons root:
 *   node --env-file=.env.local scripts/generate-gg-audio.mjs
 *
 * Generates vocab word + example, phrasal verb phrase + example
 * Filenames match imageSlug in gg-basic-gaming-chat.ts
 */

import https from 'https';
import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AUDIO_DIR = path.join(__dirname, '..', 'public', 'audio');
const API_KEY   = process.env.ELEVENLABS_API_KEY;
if (!API_KEY) throw new Error('Missing ELEVENLABS_API_KEY — add it to .env.local');

// ── Rotating voice pool (M/F alternating, speed 0.75) ─────────────────────────
const ROTATION = [
  'n8kTUi6dVrplENT9Un56', // male narrator
  'vCZXQeSML7qJRTiADoTW', // female narrator
  'EkK5I93UQWFDigLMpZcX', // JM Husk   — male
  'l4Coq6695JDX9xtLqXDE', // Lauren    — female
  '1SM7GgM6IMuvQlz2BwM3', // Mark      — male
  'aMSt68OGf4xUZAnLpTU8', // Juniper   — female
  'uHoisgHFfUYZ3FULxcdM', // Shannon   — male
  'bGz4A6rl9U05wqaE3qt1', // Sally     — female
];
let rotIdx = 0;
const nextVoice = () => ROTATION[rotIdx++ % ROTATION.length];

// ── Vocabulary ─────────────────────────────────────────────────────────────────
const vocabulary = [
  { slug: 'gg',   word: 'Good game',          example: 'GG everyone — that was a really close match. Well played!' },
  { slug: 'wp',   word: 'Well played',         example: 'WP on that last kill — I did not see that coming at all.' },
  { slug: 'gj',   word: 'Good job',            example: 'GJ on the clutch revive — you saved the whole team!' },
  { slug: 'afk',  word: 'Away from keyboard',  example: 'Sorry — I was AFK for two minutes. Did I miss anything important?' },
  { slug: 'brb',  word: 'Be right back',       example: 'BRB — I need to grab some water. Start without me if the queue pops.' },
  { slug: 'gl-hf', word: 'Good luck, have fun', example: 'GL HF to everyone in the lobby — may the best team win!' },
  { slug: 'nvm',  word: 'Never mind',          example: 'NVM — I found the item myself. Thanks anyway!' },
  { slug: 'ez',   word: 'Easy',               example: 'That last round was NOT EZ — they almost had us in the final circle.' },
  { slug: 'omg',  word: 'Oh my goodness',      example: 'OMG — did you see that shot? That was incredible!' },
  { slug: 'lfg',  word: 'Looking for group',   example: 'LFG for ranked — need two more players. Mic required!' },
  { slug: 'ggwp', word: 'Good game, well played', example: 'GGWP — that was one of the best matches I have played all season.' },
  { slug: 'ty',   word: 'Thank you',           example: 'TY for the revive — I owe you one!' },
];

// ── Phrasal verbs (spoken forms) ──────────────────────────────────────────────
const phrasalVerbs = [
  { slug: 'good-game',        phrase: 'Good game',            example: 'Good game everyone — that last round was incredibly close.' },
  { slug: 'well-played',      phrase: 'Well played',           example: 'Well played on that clutch moment — you carried the whole team.' },
  { slug: 'be-right-back',    phrase: 'Be right back',         example: 'Be right back — I need to answer the door. Give me 60 seconds.' },
  { slug: 'good-luck-have-fun', phrase: 'Good luck, have fun', example: 'Good luck, have fun everyone — let the best player win!' },
  { slug: 'nice-one',         phrase: 'Nice one',              example: 'Nice one! That snipe from across the map was unbelievable.' },
  { slug: 'looking-for-group', phrase: 'Looking for group',    example: "I'm looking for group — anyone want to run ranked together tonight?" },
];

// ── Generator ─────────────────────────────────────────────────────────────────
function generateAudio(text, voiceId, outputPath) {
  if (fs.existsSync(outputPath)) { console.log('  skip', path.basename(outputPath)); return Promise.resolve(); }
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      model_id: 'eleven_turbo_v2_5',
      voice_settings: { stability: 0.5, similarity_boost: 0.75, speed: 0.75 },
    });
    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path:     `/v1/text-to-speech/${voiceId}`,
      method:   'POST',
      headers:  { 'Content-Type': 'application/json', 'xi-api-key': API_KEY, 'Accept': 'audio/mpeg' },
    }, res => {
      if (res.statusCode !== 200) {
        const chunks = [];
        res.on('data', c => chunks.push(c));
        res.on('end', () => reject(new Error(`ElevenLabs ${res.statusCode}: ${Buffer.concat(chunks)}`)));
        return;
      }
      const out = fs.createWriteStream(outputPath);
      res.pipe(out);
      out.on('finish', () => { console.log('  ✓', path.basename(outputPath)); resolve(); });
      out.on('error', reject);
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

const delay = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  console.log('\n🎙️  GG — Basic Gaming Chat — Audio Generation');
  console.log(`   ${vocabulary.length} vocab × 2 + ${phrasalVerbs.length} phrases × 2 = ${(vocabulary.length + phrasalVerbs.length) * 2} files\n`);

  console.log('── Vocabulary ──');
  for (const { slug, word, example } of vocabulary) {
    const voice = nextVoice();
    await generateAudio(word,    voice, path.join(AUDIO_DIR, `${slug}.mp3`));
    await delay(350);
    await generateAudio(example, voice, path.join(AUDIO_DIR, `${slug}-example.mp3`));
    await delay(350);
  }

  console.log('\n── Phrasal Verbs (Spoken Forms) ──');
  for (const { slug, phrase, example } of phrasalVerbs) {
    const voice = nextVoice();
    await generateAudio(phrase,  voice, path.join(AUDIO_DIR, `${slug}.mp3`));
    await delay(350);
    await generateAudio(example, voice, path.join(AUDIO_DIR, `${slug}-example.mp3`));
    await delay(350);
  }

  console.log('\n✅ Done! Now run:');
  console.log('   git add data/lessons/gg-basic-gaming-chat.ts data/lessons/index.ts scripts/generate-gg-audio.mjs public/audio/gg*.mp3 public/audio/wp*.mp3 public/audio/gj*.mp3 public/audio/afk*.mp3 public/audio/brb*.mp3 public/audio/gl-hf*.mp3 public/audio/nvm*.mp3 public/audio/ez*.mp3 public/audio/omg*.mp3 public/audio/lfg*.mp3 public/audio/ggwp*.mp3 public/audio/ty*.mp3 public/audio/good-game*.mp3 public/audio/well-played*.mp3 public/audio/be-right-back*.mp3 public/audio/good-luck-have-fun*.mp3 public/audio/nice-one*.mp3 public/audio/looking-for-group*.mp3');
  console.log('   git commit -m "Add GG — Basic Gaming Chat lesson"');
  console.log('   git push origin main');
})();

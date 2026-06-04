/**
 * Audio generator — Questions (What / Who / Where / How many)
 * Run from the practispeak-lessons root:
 *   node --env-file=.env.local scripts/generate-questions-audio.mjs
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

// ── Vocabulary (slug matches imageSlug in questions-what-who-where.ts) ─────────
const vocabulary = [
  { slug: 'what',      word: 'WHAT',     example: 'What game are you playing? I want to join!' },
  { slug: 'who',       word: 'WHO',      example: 'Who is the strongest player on the enemy team?' },
  { slug: 'where',     word: 'WHERE',    example: 'Where are you? I need backup — there are three enemies here!' },
  { slug: 'how-many',  word: 'HOW MANY', example: 'How many enemies are left in this round? I can only see two.' },
  { slug: 'which',     word: 'WHICH',    example: 'Which character do you want to play — the warrior or the mage?' },
  { slug: 'when',      word: 'WHEN',     example: 'When does the next match start? I need five more minutes.' },
  { slug: 'map',       word: 'MAP',      example: 'Where are we on the map? I think we are near the north zone.' },
  { slug: 'spawn',     word: 'SPAWN',    example: 'Where is the enemy spawn? I want to set up an ambush.' },
  { slug: 'objective', word: 'OBJECTIVE', example: 'What is the objective? Do we capture the flag or destroy the base?' },
  { slug: 'enemy',     word: 'ENEMY',    example: 'Who is that enemy? They have 20 kills — they must be very good.' },
  { slug: 'score',     word: 'SCORE',    example: 'What is the score? Are we winning or losing right now?' },
  { slug: 'round',     word: 'ROUND',    example: 'How many rounds are left? I think we only need one more win.' },
];

// ── Phrasal verbs (slug matches imageSlug) ────────────────────────────────────
const phrasalVerbs = [
  { slug: 'what-are-you-playing',   phrase: 'WHAT ARE YOU PLAYING',   example: 'What are you playing? I want to join your lobby if there is space.' },
  { slug: 'where-are-you',          phrase: 'WHERE ARE YOU',           example: "Where are you? I can't find you — send me your map position." },
  { slug: 'who-is-winning',         phrase: 'WHO IS WINNING',          example: 'Who is winning? I was AFK for two minutes and missed everything.' },
  { slug: 'how-many-are-left',      phrase: 'HOW MANY ARE LEFT',       example: 'How many enemies are left? I only have 10 bullets — I need to be careful.' },
  { slug: 'what-is-the-objective',  phrase: 'WHAT IS THE OBJECTIVE',   example: 'What is the objective? Is it capture the flag or eliminate all enemies?' },
  { slug: 'which-one-do-you-want',  phrase: 'WHICH ONE DO YOU WANT',   example: 'Which one do you want — the sniper or the shotgun? I have both.' },
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
  console.log('\n🎙️  Questions — Audio Generation');
  console.log(`   ${vocabulary.length} vocab × 2 + ${phrasalVerbs.length} phrases × 2 = ${(vocabulary.length + phrasalVerbs.length) * 2} files\n`);

  console.log('── Vocabulary ──');
  for (const { slug, word, example } of vocabulary) {
    const voice = nextVoice();
    await generateAudio(word,    voice, path.join(AUDIO_DIR, `${slug}.mp3`));
    await delay(350);
    await generateAudio(example, voice, path.join(AUDIO_DIR, `${slug}-example.mp3`));
    await delay(350);
  }

  console.log('\n── Phrasal Verbs ──');
  for (const { slug, phrase, example } of phrasalVerbs) {
    const voice = nextVoice();
    await generateAudio(phrase,  voice, path.join(AUDIO_DIR, `${slug}.mp3`));
    await delay(350);
    await generateAudio(example, voice, path.join(AUDIO_DIR, `${slug}-example.mp3`));
    await delay(350);
  }

  console.log('\n✅ Done! Now run:');
  console.log('   git add data/lessons/questions-what-who-where.ts data/lessons/index.ts scripts/generate-questions-audio.mjs public/audio/what*.mp3 public/audio/who*.mp3 public/audio/where*.mp3 public/audio/how-many*.mp3 public/audio/which*.mp3 public/audio/when*.mp3 public/audio/map*.mp3 public/audio/spawn*.mp3 public/audio/objective*.mp3 public/audio/enemy*.mp3 public/audio/score*.mp3 public/audio/round*.mp3 public/audio/what-are*.mp3 public/audio/where-are*.mp3 public/audio/who-is*.mp3 public/audio/how-many-are*.mp3 public/audio/what-is-the*.mp3 public/audio/which-one*.mp3');
  console.log('   git commit -m "Add Questions lesson"');
  console.log('   git push origin main');
})();

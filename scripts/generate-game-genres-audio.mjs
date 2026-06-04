/**
 * Audio generator — Game Genres: What Do You Like?
 * Run from the practispeak-lessons root:
 *   node --env-file=.env.local scripts/generate-game-genres-audio.mjs
 *
 * Generates: vocab word + example, phrasal verb phrase + example
 * Filenames derived from imageSlug in game-genres.ts (strips /images/ and extension)
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

// ── Vocabulary (slug matches imageSlug in game-genres.ts) ─────────────────────
const vocabulary = [
  { slug: 'genre',     word: 'GENRE',     example: 'What genre is this game? It looks like an action RPG.' },
  { slug: 'action',    word: 'ACTION',    example: 'Action games are exciting — you fight and move all the time.' },
  { slug: 'adventure', word: 'ADVENTURE', example: 'I love adventure games because the stories are amazing.' },
  { slug: 'strategy',  word: 'STRATEGY',  example: 'Strategy games are more difficult than action games — you have to think a lot.' },
  { slug: 'horror',    word: 'HORROR',    example: "I don't like horror games — they are too scary for me at night!" },
  { slug: 'racing',    word: 'RACING',    example: 'Racing games are faster than any other genre — the speed is incredible!' },
  { slug: 'puzzle',    word: 'PUZZLE',    example: 'Puzzle games are harder than they look — this level took me one hour!' },
  { slug: 'shooter',   word: 'SHOOTER',   example: 'Shooter games are more popular than strategy games in my group.' },
  { slug: 'exciting',  word: 'EXCITING',  example: 'Action games are more exciting than puzzle games for me.' },
  { slug: 'difficult', word: 'DIFFICULT', example: 'This level is more difficult than the last one — I keep losing!' },
  { slug: 'popular',   word: 'POPULAR',   example: 'Battle royale is the most popular genre right now — everyone plays it.' },
  { slug: 'prefer',    word: 'PREFER',    example: "I prefer adventure games to horror games — I don't like being scared!" },
];

// ── Phrasal verbs (slug matches imageSlug in game-genres.ts) ──────────────────
const phrasalVerbs = [
  { slug: 'what-kind-of-games-do-you-like', phrase: 'WHAT KIND OF GAMES DO YOU LIKE', example: 'What kind of games do you like? I love action and racing games!' },
  { slug: 'i-prefer-to',                    phrase: 'I PREFER TO',                    example: 'I prefer strategy games to action games — I like thinking carefully.' },
  { slug: 'more-exciting-than',             phrase: 'MORE EXCITING THAN',             example: 'Action games are more exciting than puzzle games — they are so fast!' },
  { slug: 'my-favourite-genre-is',          phrase: 'MY FAVOURITE GENRE IS',          example: 'My favourite genre is RPG — I love the long stories and big worlds.' },
  { slug: 'im-not-a-big-fan-of',            phrase: "I'M NOT A BIG FAN OF",           example: "I'm not a big fan of horror games — they are too scary for me!" },
  { slug: 'harder-than-it-looks',           phrase: 'HARDER THAN IT LOOKS',           example: 'This puzzle game is harder than it looks — I cannot pass level 3!' },
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
  console.log('\n🎙️  Game Genres — Audio Generation');
  console.log(`   ${vocabulary.length} vocab words × 2 + ${phrasalVerbs.length} phrases × 2 = ${(vocabulary.length + phrasalVerbs.length) * 2} files\n`);

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

  console.log('\n✅ Done! Commit with:');
  console.log('   git add public/audio/genre*.mp3 public/audio/action*.mp3 public/audio/adventure*.mp3 public/audio/strategy*.mp3 public/audio/horror*.mp3 public/audio/racing*.mp3 public/audio/puzzle*.mp3 public/audio/shooter*.mp3 public/audio/exciting*.mp3 public/audio/difficult*.mp3 public/audio/popular*.mp3 public/audio/prefer*.mp3 public/audio/what-kind*.mp3 public/audio/i-prefer*.mp3 public/audio/more-exciting*.mp3 public/audio/my-favourite-genre*.mp3 public/audio/im-not*.mp3 public/audio/harder*.mp3 scripts/generate-game-genres-audio.mjs');
  console.log('   git commit -m "Add Game Genres audio files"');
  console.log('   git push origin main');
})();

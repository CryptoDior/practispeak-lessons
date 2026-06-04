/**
 * Audio generator — Online Toxicity & Communication
 * Run from the practispeak-lessons root:
 *   node --env-file=.env.local scripts/generate-toxicity-audio.mjs
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

// ── Vocabulary words + examples ───────────────────────────────────────────────
const vocabulary = [
  { slug: 'toxicity-vocab-01', word: 'Toxic',          example: "The atmosphere in that lobby was completely toxic — insults every single round." },
  { slug: 'toxicity-vocab-02', word: 'Flame',          example: "He started flaming his own teammate after one bad round — completely unnecessary." },
  { slug: 'toxicity-vocab-03', word: 'Tilt',           example: "She went on full tilt after the third loss — started making risky plays and blaming everyone around her." },
  { slug: 'toxicity-vocab-04', word: 'Grief',          example: "He was griefing the whole lobby — blocking doors and stealing loot from his own teammates." },
  { slug: 'toxicity-vocab-05', word: 'Mute',           example: "I muted him immediately after the first comment — life is too short for that kind of negativity." },
  { slug: 'toxicity-vocab-06', word: 'Report',         example: "Report and move on — don't waste energy arguing. Let the system handle it." },
  { slug: 'toxicity-vocab-07', word: 'Sportsmanship',  example: "Typing GG at the end — regardless of the result — is basic sportsmanship. It costs nothing." },
  { slug: 'toxicity-vocab-08', word: 'De-escalate',    example: "The team captain stepped in to de-escalate before the argument got completely out of hand." },
];

// ── Phrase example sentences ───────────────────────────────────────────────────
const phraseExamples = [
  { slug: 'toxicity-01', text: "If I were you, I would just mute them and focus on the game — arguing in chat never helps anyone." },
  { slug: 'toxicity-02', text: "It would help if everyone used voice chat — we keep missing callouts because nobody is communicating." },
  { slug: 'toxicity-03', text: "What if we just reset and focus on the next round instead of blaming each other for that loss?" },
  { slug: 'toxicity-04', text: "I understand where you're coming from, but muting is better than reporting here — they didn't actually break any rules." },
  { slug: 'toxicity-05', text: "In my opinion, the real issue is that toxic behaviour goes unchallenged — people stay silent and it gets worse." },
  { slug: 'toxicity-06', text: "The problem with that is you can't just ban every player who tilts — half the ranked lobby would be gone." },
  { slug: 'toxicity-07', text: "I'd rather lose with a respectful team than win with toxic players — the experience matters more than the rank." },
  { slug: 'toxicity-08', text: "If everyone flamed their teammates after a mistake, ranked would be unplayable — nobody would want to solo queue." },
];

// ── In Action paragraph audio ─────────────────────────────────────────────────
const inActionParagraphs = [
  {
    slug: 'toxicity-inaction-01',
    text: "Look, I get that we're all frustrated right now. In my opinion, the real issue is that we stop communicating the moment we start losing — and that's when things get toxic. If I were you, I wouldn't point fingers at one player. It would help if we talked about what went wrong strategically instead of personally. What if we just took five minutes, reset, and talked about the next game like a proper team? I'd rather lose five games with good comms than win one with everyone flaming each other.",
  },
  {
    slug: 'toxicity-inaction-02',
    text: "I've seen this argument a hundred times and I always have the same response. I understand where you're coming from — permanent bans feel like the right answer when someone ruins your game. But the problem with that is defining toxic is incredibly subjective. One player's intense competitiveness is another player's harassment. In my opinion, the real issue is not the players themselves — it's the lack of clear, enforced community standards. If everyone who got frustrated were banned, the ranked lobbies would be empty within a week. Better systems, not harsher bans — that's the actual solution.",
  },
  {
    slug: 'toxicity-inaction-03',
    text: "Okay, I see what's happening in chat right now. To the person saying I played badly — I understand where you're coming from, I made a mistake, I know. But the problem with that kind of comment is it doesn't help me or anyone watching learn anything. If I were you, I'd save that energy for something constructive. What if we just talked about what the better play was? I'm genuinely interested. Because if everyone in this chat made it a toxic space, it would just become another stream nobody wants to be in. And I don't want that — this community is better than that.",
  },
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
  console.log('\n🎙️  Online Toxicity & Communication — Audio Generation');
  console.log(`   ${vocabulary.length} vocab × 2 + ${phraseExamples.length} phrase examples + ${inActionParagraphs.length} in-action paragraphs\n`);

  console.log('── Vocabulary ──');
  for (const { slug, word, example } of vocabulary) {
    const voice = nextVoice();
    await generateAudio(word,    voice, path.join(AUDIO_DIR, `${slug}.mp3`));
    await delay(400);
    await generateAudio(example, voice, path.join(AUDIO_DIR, `${slug}-example.mp3`));
    await delay(400);
  }

  console.log('\n── Phrase Examples ──');
  for (const { slug, text } of phraseExamples) {
    const voice = nextVoice();
    await generateAudio(text, voice, path.join(AUDIO_DIR, `${slug}-example.mp3`));
    await delay(400);
  }

  console.log('\n── In Action Paragraphs ──');
  for (const { slug, text } of inActionParagraphs) {
    const voice = nextVoice();
    await generateAudio(text, voice, path.join(AUDIO_DIR, `${slug}.mp3`));
    await delay(400);
  }

  console.log('\n✅ Done! Now run:');
  console.log('   git add public/online-toxicity-communication.html data/lessons/online-toxicity-communication.ts data/lessons/index.ts scripts/generate-toxicity-audio.mjs public/audio/toxicity-vocab-*.mp3 public/audio/toxicity-*.mp3');
  console.log('   git commit -m "Add Online Toxicity & Communication lesson"');
  console.log('   git push origin main');
})();

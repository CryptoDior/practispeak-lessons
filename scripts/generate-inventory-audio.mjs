/**
 * Audio generator — Inventory (have/need, quantities)
 * Run from the practispeak-lessons root:
 *   node --env-file=.env.local scripts/generate-inventory-audio.mjs
 *
 * Generates vocab word + example, phrasal verb phrase + example
 * Filenames match imageSlug in inventory.ts (strips /images/ and extension)
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

// ── Vocabulary (slug matches imageSlug in inventory.ts) ───────────────────────
const vocabulary = [
  { slug: 'inventory', word: 'INVENTORY', example: 'My inventory is full — I need to drop something before I can pick up more loot.' },
  { slug: 'item',      word: 'ITEM',      example: 'I found a rare item in the chest — it increases my speed by 20 percent.' },
  { slug: 'weapon',    word: 'WEAPON',    example: 'I have two weapons — a sword for close range and a bow for long range.' },
  { slug: 'armour',    word: 'ARMOUR',    example: 'My armour is broken — I need to repair it before the next boss fight.' },
  { slug: 'potion',    word: 'POTION',    example: 'I have three potions left. Do you need one? Your health bar is very low.' },
  { slug: 'ammo',      word: 'AMMO',      example: "I've run out of ammo — I need to find more before the next wave starts." },
  { slug: 'loot',      word: 'LOOT',      example: 'The boss dropped amazing loot — I got a legendary weapon and 500 gold.' },
  { slug: 'slot',      word: 'SLOT',      example: 'I only have one slot free — I have to choose between the shield and the potion.' },
  { slug: 'stack',     word: 'STACK',     example: 'I have a stack of 64 arrows — that is enough for the whole dungeon.' },
  { slug: 'equip',     word: 'EQUIP',     example: 'Equip the new sword — it does much more damage than your old one.' },
  { slug: 'craft',     word: 'CRAFT',     example: 'I can craft a health potion if I have enough herbs and water.' },
  { slug: 'upgrade',   word: 'UPGRADE',   example: 'I need 50 iron to upgrade my armour to level three — do you have any?' },
];

// ── Phrasal verbs (slug matches imageSlug in inventory.ts) ────────────────────
const phrasalVerbs = [
  { slug: 'i-have-enough',           phrase: 'I HAVE ENOUGH',           example: 'I have enough ammo for now. Save your drops for the next room.' },
  { slug: 'i-need-more',             phrase: 'I NEED MORE',             example: 'I need more potions. Can you craft some before we fight the boss?' },
  { slug: 'do-you-have-any',         phrase: 'DO YOU HAVE ANY',         example: 'Do you have any spare armour? Mine is almost broken.' },
  { slug: 'ive-run-out-of',          phrase: "I'VE RUN OUT OF",         example: "I've run out of arrows. I need to switch to my backup weapon." },
  { slug: 'how-many-do-you-have',    phrase: 'HOW MANY DO YOU HAVE',    example: 'How many potions do you have? We need at least five for this dungeon.' },
  { slug: 'let-me-check-my-inventory', phrase: 'LET ME CHECK MY INVENTORY', example: 'Let me check my inventory — I think I have some spare iron somewhere.' },
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
  console.log('\n🎙️  Inventory — Audio Generation');
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
  console.log('   git add data/lessons/inventory.ts data/lessons/index.ts scripts/generate-inventory-audio.mjs public/audio/inventory*.mp3 public/audio/item*.mp3 public/audio/weapon*.mp3 public/audio/armour*.mp3 public/audio/potion*.mp3 public/audio/ammo*.mp3 public/audio/loot*.mp3 public/audio/slot*.mp3 public/audio/stack*.mp3 public/audio/equip*.mp3 public/audio/craft*.mp3 public/audio/upgrade*.mp3 public/audio/i-have-enough*.mp3 public/audio/i-need-more*.mp3 public/audio/do-you-have-any*.mp3 public/audio/ive-run-out-of*.mp3 public/audio/how-many*.mp3 public/audio/let-me-check*.mp3');
  console.log('   git commit -m "Add Inventory lesson"');
  console.log('   git push origin main');
})();

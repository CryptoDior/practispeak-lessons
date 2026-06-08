import https from 'https';
import fs from 'fs';
import path from 'path';

const ELEVENLABS_KEY = 'sk_b66be930e6effb17457088d5c72efa199071c6259e176e6a';
const AUDIO_DIR = path.resolve('public/audio');
const SPEED = 0.75;

const VOICES = {
  male_narrator:   'n8kTUi6dVrplENT9Un56',
  female_narrator: 'vCZXQeSML7qJRTiADoTW',
  jm_husk:         'EkK5I93UQWFDigLMpZcX',
  lauren:          'l4Coq6695JDX9xtLqXDE',
  mark:            '1SM7GgM6IMuvQlz2BwM3',
  juniper:         'aMSt68OGf4xUZAnLpTU8',
  shannon:         'uHoisgHFfUYZ3FULxcdM',
  sally:           'bGz4A6rl9U05wqaE3qt1',
  george:          'JBFqnCBsd6RMkjVDRZzb',
  female_gen:      'Tfv2PGiTliSQ4XSXrJmA',
};

// ── VOCAB (word + example, same voice, rotating M/F) ────────────────────────
const VOCAB = [
  { slug: 'game-design-language-01', voice: 'mark',       word: 'iteration',   example: "Each new iteration of the boss fight got a little less frustrating and a little more interesting." },
  { slug: 'game-design-language-02', voice: 'lauren',     word: 'playtesting', example: "Three weeks of playtesting told us more about the difficulty curve than three months of internal debate ever could." },
  { slug: 'game-design-language-03', voice: 'jm_husk',    word: 'mechanic',    example: "The grappling-hook mechanic sounded great on paper, but it broke half the level geometry the moment players got their hands on it." },
  { slug: 'game-design-language-04', voice: 'juniper',    word: 'pacing',      example: "Good pacing is invisible — you only really notice it when a game gets it wrong." },
  { slug: 'game-design-language-05', voice: 'george',     word: 'prototype',   example: "The first prototype was held together with placeholder art and a bit of hope, but the core idea was already there." },
  { slug: 'game-design-language-06', voice: 'sally',      word: 'scope',       example: "Cutting two biomes from the scope was painful, but it's the reason the game actually shipped." },
  { slug: 'game-design-language-07', voice: 'shannon',    word: 'polish',      example: "Polish is the last ten percent of the work that somehow takes up ninety percent of the time." },
  { slug: 'game-design-language-08', voice: 'female_gen', word: 'balancing',   example: "Balancing a competitive shooter never really ends — it just slows down enough to ship." },
];

// ── LANGUAGE FOCUS PHRASE EXAMPLES (example sentence only) ──────────────────
const LANGFOCUS = [
  { slug: 'game-design-language-langfocus-01-example', voice: 'male_narrator',   text: "Damage values are calculated from a base stat plus a small random variance." },
  { slug: 'game-design-language-langfocus-02-example', voice: 'female_narrator', text: "The original ending was scrapped two months before launch." },
  { slug: 'game-design-language-langfocus-03-example', voice: 'jm_husk',         text: "Any change to core combat numbers must be approved by the systems lead before it reaches a build." },
  { slug: 'game-design-language-langfocus-04-example', voice: 'lauren',          text: "The tutorial has been rewritten four times, and it's still not quite right." },
  { slug: 'game-design-language-langfocus-05-example', voice: 'mark',            text: "The entire enemy-AI system was redesigned by a single programmer over one unusually quiet summer." },
  { slug: 'game-design-language-langfocus-06-example', voice: 'juniper',         text: "The dash ability got nerfed so hard in the last patch that nobody even bothers unlocking it anymore." },
  { slug: 'game-design-language-langfocus-07-example', voice: 'shannon',         text: "This value is to be adjusted only after a full balancing pass, not before." },
  { slug: 'game-design-language-langfocus-08-example', voice: 'sally',           text: "It is widely believed that the game's difficulty spike was a deliberate choice, though the designers have never confirmed it." },
];

// ── IN USE PARAGRAPHS ────────────────────────────────────────────────────────
const INUSE = [
  {
    slug: 'game-design-language-inuse-01',
    voice: 'mark',
    text: "In most professional studios, a mechanic is rarely designed once and shipped as-is. It is iterated on, playtested, and quietly reshaped dozens of times before a single player ever sees it. Early prototypes are deliberately kept rough, since polish at this stage is generally considered a waste of scarce time. What looks, from the outside, like one confident decision is usually just the visible tip of a much longer process — one in which most of the actual work is never seen by anyone outside the team.",
  },
  {
    slug: 'game-design-language-inuse-02',
    voice: 'jm_husk',
    text: "Honestly, scope is the thing nobody wants to talk about until it's already too late. On our last project, two entire systems were quietly cut about eight months in, and the whole back half of the schedule was rebuilt around whatever was left. And balancing gets treated like a pure math problem, but it really isn't — a number can be completely correct on a spreadsheet and still feel awful to actually play against.",
  },
  {
    slug: 'game-design-language-inuse-03',
    voice: 'sally',
    text: "ok so the grapple mechanic finally got reworked and??? it's actually fun now. like genuinely fun, not 'fun if you squint and ignore the bugs' fun. apparently it was rebuilt almost completely from scratch by like two people on the team. wild that something this small took THIS many patches to get right but hey, we got there in the end i guess",
  },
];

function speakSSML(text, speed) {
  const pct = Math.round(speed * 100);
  return `<speak><prosody rate="${pct}%">${text}</prosody></speak>`;
}

function generateAudio(text, voiceId, outputPath) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text: speakSSML(text, SPEED),
      model_id: 'eleven_turbo_v2_5',
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    });

    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${voiceId}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_KEY,
        'Accept': 'audio/mpeg',
      },
    }, (res) => {
      if (res.statusCode !== 200) {
        const chunks = [];
        res.on('data', c => chunks.push(c));
        res.on('end', () => reject(new Error(`ElevenLabs ${res.statusCode}: ${Buffer.concat(chunks)}`)));
        return;
      }
      const out = fs.createWriteStream(outputPath);
      res.pipe(out);
      out.on('finish', () => { console.log(`  ✓ ${path.basename(outputPath)}`); resolve(); });
      out.on('error', reject);
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  if (!fs.existsSync(AUDIO_DIR)) fs.mkdirSync(AUDIO_DIR, { recursive: true });

  console.log('\n── VOCAB ──');
  for (const v of VOCAB) {
    const voiceId = VOICES[v.voice];
    console.log(`\n[${v.slug}] ${v.word}`);
    await generateAudio(v.word, voiceId, path.join(AUDIO_DIR, `${v.slug}.mp3`));
    await sleep(500);
    await generateAudio(v.example, voiceId, path.join(AUDIO_DIR, `${v.slug}-example.mp3`));
    await sleep(500);
  }

  console.log('\n── LANGUAGE FOCUS PHRASE EXAMPLES ──');
  for (const c of LANGFOCUS) {
    const voiceId = VOICES[c.voice];
    console.log(`\n[${c.slug}]`);
    await generateAudio(c.text, voiceId, path.join(AUDIO_DIR, `${c.slug}.mp3`));
    await sleep(500);
  }

  console.log('\n── IN USE ──');
  for (const a of INUSE) {
    const voiceId = VOICES[a.voice];
    console.log(`\n[${a.slug}]`);
    await generateAudio(a.text, voiceId, path.join(AUDIO_DIR, `${a.slug}.mp3`));
    await sleep(600);
  }

  console.log('\n✅ All 27 game-design-language audio files generated!');
}

main().catch(e => { console.error(e); process.exit(1); });

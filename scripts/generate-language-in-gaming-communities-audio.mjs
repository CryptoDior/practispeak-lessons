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

// ── VOCAB (word + example, rotating voices) ─────────────────────────────────
const VOCAB = [
  { slug: 'language-in-gaming-communities-01', voice: 'mark',       word: 'vernacular',   example: "Half the fun of joining a new server is just figuring out the vernacular — what people actually mean when they say 'gg ez' or 'this is rigged.'" },
  { slug: 'language-in-gaming-communities-02', voice: 'lauren',     word: 'shibboleth',   example: "Saying 'pwned' instead of 'owned' used to be a kind of shibboleth — say it right and people knew you'd been around since the early days." },
  { slug: 'language-in-gaming-communities-03', voice: 'jm_husk',    word: 'gatekeeping',  example: "There's a fine line between having standards and just gatekeeping — telling someone they're not a 'real' fan because they came in through the movie instead of the books." },
  { slug: 'language-in-gaming-communities-04', voice: 'juniper',    word: 'in-joke',      example: "Half the comments under that clip make no sense unless you already know the in-joke — and honestly, that's kind of the point." },
  { slug: 'language-in-gaming-communities-05', voice: 'george',     word: 'code-switch',  example: "She code-switches without even noticing it now — technical and precise in the team chat, then completely unhinged the second she's in the meme channel." },
  { slug: 'language-in-gaming-communities-06', voice: 'sally',      word: 'lexicon',      example: "Every guild seems to develop its own little lexicon within a few weeks — words that would mean absolutely nothing to anyone outside it." },
  { slug: 'language-in-gaming-communities-07', voice: 'shannon',    word: 'dog-whistle',  example: "What sounded like an innocent joke to most people was actually a dog-whistle — a phrase the in-group recognized instantly, and everyone else just scrolled past." },
  { slug: 'language-in-gaming-communities-08', voice: 'female_gen', word: 'normie',       example: "He says it jokingly, but there's always a little edge to it when he calls someone a normie for not knowing the lore." },
];

// ── LANGUAGE FOCUS PHRASE EXAMPLES (example sentence only) ──────────────────
const LANGFOCUS = [
  { slug: 'language-in-gaming-communities-langfocus-01-example', voice: 'male_narrator',   text: "They must be a smurf — nobody plays like that in their first week." },
  { slug: 'language-in-gaming-communities-langfocus-02-example', voice: 'female_narrator', text: "That can't have been their first time in this raid; they knew exactly where to stand." },
  { slug: 'language-in-gaming-communities-langfocus-03-example', voice: 'jm_husk',         text: "She might just be having an off night — I wouldn't read too much into one bad game." },
  { slug: 'language-in-gaming-communities-langfocus-04-example', voice: 'lauren',          text: "He may have muted the chat the second it started getting toxic, to be fair to him." },
  { slug: 'language-in-gaming-communities-langfocus-05-example', voice: 'mark',            text: "Honestly, this should have been an easy win for a team that's been practicing for months." },
  { slug: 'language-in-gaming-communities-langfocus-06-example', voice: 'juniper',         text: "Anyone who'd actually read the patch notes would have seen that nerf coming a mile away." },
  { slug: 'language-in-gaming-communities-langfocus-07-example', voice: 'shannon',         text: "I can't help but laugh every time someone tries that strategy — it never, ever works." },
  { slug: 'language-in-gaming-communities-langfocus-08-example', voice: 'sally',           text: "They seem to know everyone in the server already, which is a little intimidating for a newcomer." },
];

// ── IN USE PARAGRAPHS ────────────────────────────────────────────────────────
const INUSE = [
  {
    slug: 'language-in-gaming-communities-inuse-01',
    voice: 'mark',
    text: "Online gaming communities offer a remarkably compact case study in how groups construct linguistic identity. Within weeks, a new server develops its own vernacular — abbreviations, in-jokes, half-borrowed slang — and that vernacular quickly hardens into something closer to a shibboleth: a small, almost invisible test that separates those who belong from those who merely visit. What looks, from the outside, like nonsense or noise is, on closer inspection, an entire social architecture, built and maintained largely through word choice alone.",
  },
  {
    slug: 'language-in-gaming-communities-inuse-02',
    voice: 'jm_husk',
    text: "Honestly, you can tell how healthy a community is just by listening to how people talk to newcomers. In the good servers, someone will gently translate the lexicon for you — 'oh, when they say that, they just mean...' — and you feel welcomed in. In the rough ones, it's pure gatekeeping: somebody must be testing you, asking questions they already know the answer to, just waiting for you to slip up so they can dismiss you as a normie. Same words, completely different intentions underneath them.",
  },
  {
    slug: 'language-in-gaming-communities-inuse-03',
    voice: 'sally',
    text: "ok genuine question — how long was everyone else lurking before they actually felt like they could post in this server without getting roasted?? i've been here like two months and i STILL can't tell which jokes are in-jokes and which ones are just. things people say. someone explain the whole 'goblin mode' thing to me i feel like i missed some kind of orientation lol",
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

  console.log('\n✅ All 27 language-in-gaming-communities audio files generated!');
}

main().catch(e => { console.error(e); process.exit(1); });

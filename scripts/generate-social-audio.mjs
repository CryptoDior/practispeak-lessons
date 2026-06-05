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
  { slug: 'social-vocab-01', voice: 'male_narrator',   word: 'hit it off',   example: "We hit it off the second we started playing — by round three we were already making plans to queue again." },
  { slug: 'social-vocab-02', voice: 'female_narrator', word: 'reach out',    example: "After the match I decided to reach out — I had never messaged a random player before, but something told me it was worth it." },
  { slug: 'social-vocab-03', voice: 'jm_husk',         word: 'vibe',         example: "The vibe between us was just right from the start — no tension, no ego, just good communication and good games." },
  { slug: 'social-vocab-04', voice: 'lauren',          word: 'squad',        example: "I built my squad slowly — one player at a time — and now I can't imagine ranked without them." },
  { slug: 'social-vocab-05', voice: 'mark',            word: 'link up',      example: "We linked up for the first time on a Friday night and ended up playing until four in the morning." },
  { slug: 'social-vocab-06', voice: 'juniper',         word: 'hang out',     example: "We started hanging out in voice chat even on nights we weren't playing — that's when I knew this was more than just a gaming group." },
  { slug: 'social-vocab-07', voice: 'shannon',         word: 'click',        example: "We clicked straight away — same humour, same playstyle, same attitude. It doesn't happen often, but when it does, you know." },
  { slug: 'social-vocab-08', voice: 'sally',           word: 'wingman',      example: "He's been my wingman through every ranked season — always there, always covering the flank, always has my back." },
];

// ── PHRASE EXAMPLES (example sentence only) ──────────────────────────────────
const PHRASES = [
  { slug: 'social-01-example', voice: 'george',       text: "We're about to start a ranked match — want to hop in? We've got room for one more." },
  { slug: 'social-02-example', voice: 'female_gen',   text: "You played really well today — we should run some games sometime, no pressure." },
  { slug: 'social-03-example', voice: 'jm_husk',      text: "I'm usually on after 8 — hit me up if you want to play and we'll squad up." },
  { slug: 'social-04-example', voice: 'lauren',       text: "I don't usually add randoms but we really hit it off last session — you in for tonight?" },
  { slug: 'social-05-example', voice: 'mark',         text: "Honestly, the way you communicate and rotate — you'd fit right in with our squad." },
  { slug: 'social-06-example', voice: 'juniper',      text: "That was a great game — I'll add you, we should link up again this weekend." },
  { slug: 'social-07-example', voice: 'shannon',      text: "No pressure, but we're always looking for good players — the squad runs every Friday night." },
  { slug: 'social-08-example', voice: 'sally',        text: "It's rare to find someone who actually communicates online — I feel like we just click, you know?" },
];

// ── IN ACTION PARAGRAPHS ─────────────────────────────────────────────────────
const INACTION = [
  {
    slug: 'social-inaction-01',
    voice: 'jm_husk',
    text: "GG man, that last round was actually insane. Hey — quick question — you play ranked at all? Because honestly, the way you were calling out the rotations, we've been looking for someone like that. No pressure or anything, but — want to hop in with us next match? We've got room for one more. I'll add you now. Hit me up whenever you're on — we run most evenings. I feel like we'd just click as a full squad, you know what I mean? The vibes were right tonight.",
  },
  {
    slug: 'social-inaction-02',
    voice: 'lauren',
    text: "Hey! Sorry to reach out out of nowhere — we played together last night in that overtime match and I just wanted to say GG properly. You were genuinely great to play with — we really hit it off and it's honestly rare to find someone who calls out, doesn't tilt, and actually has fun with it. Our squad runs every Friday and Saturday night. No pressure at all, but if you ever want to link up, we'd love to have you. You'd fit right in — our vibe is really chill. Just let me know!",
  },
  {
    slug: 'social-inaction-03',
    voice: 'male_narrator',
    text: "Looking for group. PC. Ranked. Looking for chill players who actually communicate. We're a small squad of three who've been playing together for about six months. We're not necessarily looking for the best mechanical players — we're looking for people we genuinely click with. If you call out, don't tilt, and want to hang out and improve together, please reach out. We run games every weekend and a couple of weeknights. Hit me up in the comments or DM. Positive vibes only — no pressure, just good games with people who actually give a damn about the team.",
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

  console.log('\n── PHRASE EXAMPLES ──');
  for (const p of PHRASES) {
    const voiceId = VOICES[p.voice];
    console.log(`\n[${p.slug}]`);
    await generateAudio(p.text, voiceId, path.join(AUDIO_DIR, `${p.slug}.mp3`));
    await sleep(500);
  }

  console.log('\n── IN ACTION ──');
  for (const a of INACTION) {
    const voiceId = VOICES[a.voice];
    console.log(`\n[${a.slug}]`);
    await generateAudio(a.text, voiceId, path.join(AUDIO_DIR, `${a.slug}.mp3`));
    await sleep(600);
  }

  console.log('\n✅ All 27 social gaming audio files generated!');
}

main().catch(e => { console.error(e); process.exit(1); });

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
  { slug: 'gaming-identity-vocab-01', voice: 'male_narrator',   word: 'identity',        example: "Gaming's a huge part of my identity now — it's not just something I do for fun, it's kind of who I am." },
  { slug: 'gaming-identity-vocab-02', voice: 'female_narrator', word: 'subculture',       example: "Gaming used to be this little subculture — just a bunch of people in arcades and basements. Now it's everywhere." },
  { slug: 'gaming-identity-vocab-03', voice: 'jm_husk',         word: 'discourse',        example: "The discourse around gaming has really changed — people used to panic about it, but now they actually talk about it as art and culture." },
  { slug: 'gaming-identity-vocab-04', voice: 'lauren',          word: 'stigma',           example: "There's still a bit of stigma around gaming — like people assuming it's childish or a waste of time — but it's way less than it used to be." },
  { slug: 'gaming-identity-vocab-05', voice: 'mark',            word: 'representation',   example: "People care a lot more about representation in games now — like who the main characters are and whose stories actually get told." },
  { slug: 'gaming-identity-vocab-06', voice: 'juniper',         word: 'legitimacy',       example: "Nobody really questions gaming's legitimacy as an art form anymore — the bigger question is who gets to decide what counts as 'good.'" },
  { slug: 'gaming-identity-vocab-07', voice: 'shannon',         word: 'commodify',        example: "Some people think big companies have commodified gaming culture — basically slapping a logo on it and selling it back to us." },
  { slug: 'gaming-identity-vocab-08', voice: 'sally',           word: 'nuance',           example: "You really need some nuance when you talk about gaming culture — a pro esports player and someone who plays Candy Crush on the bus live pretty different lives." },
];

// ── LANGUAGE FOCUS EXAMPLES (example sentence only) ──────────────────────────
const PHRASES = [
  { slug: 'gaming-identity-01-example', voice: 'george',       text: "It could be argued that gaming becoming so popular hasn't really answered the identity question — it's just changed what we're arguing about." },
  { slug: 'gaming-identity-02-example', voice: 'female_gen',   text: "There is a tendency for big brands to commodify gaming culture — turning what used to feel personal into something they can just sell." },
  { slug: 'gaming-identity-03-example', voice: 'jm_husk',      text: "To some extent, this suggests that the stigma around gaming hasn't disappeared — it's just moved onto certain types of games or certain communities." },
  { slug: 'gaming-identity-04-example', voice: 'lauren',       text: "One might question whether calling yourself a 'gamer' even means as much these days, since pretty much everyone plays games now." },
  { slug: 'gaming-identity-05-example', voice: 'mark',         text: "The evidence would seem to indicate that younger gamers feel a lot more relaxed about their gamer identity than older generations did." },
  { slug: 'gaming-identity-06-example', voice: 'juniper',      text: "This raises the question of whether gaming can still feel like its own thing now that pretty much everyone's doing it." },
  { slug: 'gaming-identity-07-example', voice: 'shannon',      text: "While it is true that gaming is more visible than ever, one must also consider how much of that is just companies chasing money rather than caring about the culture." },
  { slug: 'gaming-identity-08-example', voice: 'sally',        text: "I would tentatively suggest that the real debate isn't whether gaming matters anymore — it's about where the culture goes from here." },
];

// ── IN USE PARAGRAPHS ────────────────────────────────────────────────────────
const INACTION = [
  {
    slug: 'gaming-identity-inaction-01',
    voice: 'male_narrator',
    text: "It could be argued that gaming's move from the margins to the mainstream is one of the biggest culture shifts of our time — and one we barely stop to think about. There is a tendency to tell this story as a simple win: an outsider group finally gets the respect it deserved. To some extent, that's true — gaming's legitimacy as an art form is barely questioned anymore. But something else is going on too. As gaming gets commodified — turned into fashion lines, ad campaigns, branded merch — the question of identity gets messier. I would tentatively suggest that the real challenge facing gaming culture today isn't outside stigma — it's holding onto any shared identity at all, now that billions of people play.",
  },
  {
    slug: 'gaming-identity-inaction-02',
    voice: 'female_narrator',
    text: "I think what's interesting — and I would tentatively suggest people don't talk about this enough — is that there's never really been just one 'gamer identity.' There is a tendency, especially in the news, to talk about gamers like they're all the same. But the discourse inside gaming communities tells a very different story. To some extent, all the talk about whether gaming 'counts' as legitimate has actually distracted from a bigger question: representation. Whose stories get told? Who gets to be the hero? This raises the question of whether gaming culture is really growing — or just getting repackaged and sold as one narrow version of itself, which is its own kind of commodification.",
  },
  {
    slug: 'gaming-identity-inaction-03',
    voice: 'jm_husk',
    text: "Gaming culture didn't become legitimate. It got bought. The subculture had its style ripped out, repackaged, and sold back to us by the same people who spent years calling it a waste of time. What we're calling 'legitimacy' is just commodification with better PR. The stigma didn't go away — it just moved onto whoever's inconvenient for the brand right now. And most people are too busy celebrating to notice what got lost.",
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

  console.log('\n── LANGUAGE FOCUS EXAMPLES ──');
  for (const p of PHRASES) {
    const voiceId = VOICES[p.voice];
    console.log(`\n[${p.slug}]`);
    await generateAudio(p.text, voiceId, path.join(AUDIO_DIR, `${p.slug}.mp3`));
    await sleep(500);
  }

  console.log('\n── IN USE ──');
  for (const a of INACTION) {
    const voiceId = VOICES[a.voice];
    console.log(`\n[${a.slug}]`);
    await generateAudio(a.text, voiceId, path.join(AUDIO_DIR, `${a.slug}.mp3`));
    await sleep(600);
  }

  console.log('\n✅ All 27 gaming culture & identity audio files generated!');
}

main().catch(e => { console.error(e); process.exit(1); });

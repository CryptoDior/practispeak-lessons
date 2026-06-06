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
  { slug: 'gaming-identity-vocab-01', voice: 'male_narrator',   word: 'identity',        example: "Gaming has become a central part of my identity — not merely a hobby, but a lens through which I understand competition, creativity, and community." },
  { slug: 'gaming-identity-vocab-02', voice: 'female_narrator', word: 'subculture',       example: "What began as a subculture confined to arcades and basements has evolved into one of the most economically and culturally significant spaces of the 21st century." },
  { slug: 'gaming-identity-vocab-03', voice: 'jm_husk',         word: 'discourse',        example: "The discourse around gaming has shifted dramatically — where once it was dominated by moral panic, it is now shaped by questions of art, culture, and representation." },
  { slug: 'gaming-identity-vocab-04', voice: 'lauren',          word: 'stigma',           example: "The stigma once attached to gaming — that it was antisocial, childish, or a waste of time — has eroded significantly, though it has not disappeared entirely." },
  { slug: 'gaming-identity-vocab-05', voice: 'mark',            word: 'representation',   example: "Questions of representation in gaming — who the protagonists are, whose stories are told — have become central to debates about the industry's cultural responsibility." },
  { slug: 'gaming-identity-vocab-06', voice: 'juniper',         word: 'legitimacy',       example: "The legitimacy of gaming as an art form is no longer seriously disputed; the question now is who holds the authority to define what good gaming looks like." },
  { slug: 'gaming-identity-vocab-07', voice: 'shannon',         word: 'commodify',        example: "Critics argue that mainstream success has commodified gaming culture — turning countercultural practices into branded lifestyle products aimed at the widest possible audience." },
  { slug: 'gaming-identity-vocab-08', voice: 'sally',           word: 'nuance',           example: "Any serious discussion of gaming culture requires nuance — the experience of a professional esports athlete and a casual mobile player are not culturally interchangeable." },
];

// ── LANGUAGE FOCUS EXAMPLES (example sentence only) ──────────────────────────
const PHRASES = [
  { slug: 'gaming-identity-01-example', voice: 'george',       text: "It could be argued that gaming's cultural ascent has not so much resolved the question of gaming identity as it has displaced it." },
  { slug: 'gaming-identity-02-example', voice: 'female_gen',   text: "There is a tendency for mainstream discourse to commodify gaming culture, reducing complex subcultural identities to marketable aesthetics." },
  { slug: 'gaming-identity-03-example', voice: 'jm_husk',      text: "To some extent, this suggests that the stigma attached to gaming has shifted rather than disappeared — relocated onto specific genres or communities within the medium." },
  { slug: 'gaming-identity-04-example', voice: 'lauren',       text: "One might question whether the term 'gamer' still carries the same identity-forming weight it once did, given how broadly it is now applied." },
  { slug: 'gaming-identity-05-example', voice: 'mark',         text: "The evidence would seem to indicate that gaming identity is increasingly generational — more fluid and less fixed than earlier subcultural formations suggested." },
  { slug: 'gaming-identity-06-example', voice: 'juniper',      text: "This raises the question of whether gaming culture can retain any meaningful subcultural identity once it becomes the dominant cultural mainstream." },
  { slug: 'gaming-identity-07-example', voice: 'shannon',      text: "While it is true that gaming has achieved unprecedented mainstream visibility, one must also consider the degree to which this visibility has been shaped by commercial rather than cultural priorities." },
  { slug: 'gaming-identity-08-example', voice: 'sally',        text: "I would tentatively suggest that gaming's cultural legitimacy is now less in question than its cultural direction — the debate has moved from whether gaming matters to what it should stand for." },
];

// ── IN USE PARAGRAPHS ────────────────────────────────────────────────────────
const INACTION = [
  {
    slug: 'gaming-identity-inaction-01',
    voice: 'male_narrator',
    text: "It could be argued that no cultural shift in recent decades has been as underanalysed as gaming's transition from stigmatised subculture to mainstream cultural phenomenon. There is a tendency for media discourse to frame this shift as an uncomplicated victory — a once-marginalised community finally receiving the recognition it deserved. To some extent, this framing has merit. The legitimacy of gaming as a cultural form is no longer seriously contested. However, one must also consider what has been lost in the process. As gaming has been commodified — its aesthetics absorbed into fashion, its language into advertising — the question of identity becomes increasingly complex. I would tentatively suggest that the most significant challenge facing gaming culture today is not external stigma, but internal fragmentation: the difficulty of maintaining any coherent subcultural identity in a medium now consumed by billions.",
  },
  {
    slug: 'gaming-identity-inaction-02',
    voice: 'female_narrator',
    text: "I think what's interesting — and I would tentatively suggest this is underappreciated — is that gaming identity has never been singular. There is a tendency, particularly in mainstream coverage, to speak of gamers as though they constitute a homogeneous group. But the discourse within gaming communities tells a very different story. To some extent, the legitimacy debates of the past decade have obscured a more fundamental question: representation. Who is centred in gaming culture? Whose experience is treated as the default? This raises the question of whether we are witnessing genuine cultural expansion, or simply the commodification of one particular vision of what gaming is supposed to look like.",
  },
  {
    slug: 'gaming-identity-inaction-03',
    voice: 'jm_husk',
    text: "Gaming culture didn't become legitimate. It got bought. The subculture had its aesthetics extracted, packaged, and sold back to us by the same mainstream that spent decades dismissing it. What we're calling legitimacy is just commodification with better PR. The stigma didn't disappear — it shifted onto whoever is inconvenient to the brand. And most people are too busy celebrating the mainstream moment to notice what was lost.",
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

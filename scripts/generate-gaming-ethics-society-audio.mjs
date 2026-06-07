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
  { slug: 'gaming-ethics-01', voice: 'jm_husk',         word: 'exploitative',  example: "Critics say the game's loot box system is deliberately exploitative, designed to target players who struggle to stop spending." },
  { slug: 'gaming-ethics-02', voice: 'lauren',          word: 'desensitize',   example: "Some researchers worry that years of exposure to graphic violence in games can gradually desensitize players to real-world harm — though the evidence is far from settled." },
  { slug: 'gaming-ethics-03', voice: 'mark',            word: 'accountability', example: "When a major studio's monetization practices spark a public outcry, the bigger question is usually about accountability — who actually signs off on these decisions?" },
  { slug: 'gaming-ethics-04', voice: 'juniper',         word: 'inclusivity',   example: "The studio's character creator was praised for its inclusivity, letting players build avatars that actually looked like them." },
  { slug: 'gaming-ethics-05', voice: 'shannon',         word: 'moderation',    example: "Running a community of two million players means moderation has basically become its own full-time department." },
  { slug: 'gaming-ethics-06', voice: 'sally',           word: 'polarizing',    example: "Few topics in gaming are as polarizing as whether competitive titles should ban players for toxic behavior." },
  { slug: 'gaming-ethics-07', voice: 'george',          word: 'complicit',     example: "Some players argue that simply staying quiet about a studio's labor practices makes you complicit in them." },
  { slug: 'gaming-ethics-08', voice: 'female_gen',      word: 'scrutiny',      example: "After the leak, the company's hiring practices came under intense scrutiny from both the press and its own employees." },
];

// ── LANGUAGE FOCUS PHRASE EXAMPLES (example sentence only) ──────────────────
const LANGFOCUS = [
  { slug: 'gaming-ethics-langfocus-01-example', voice: 'male_narrator',   text: "While it's true that loot boxes can fund years of free updates, that doesn't make it okay to design them like slot machines." },
  { slug: 'gaming-ethics-langfocus-02-example', voice: 'female_narrator', text: "Even granting that moderation at scale is genuinely difficult, that's not really an excuse for how slowly some studios respond to harassment reports." },
  { slug: 'gaming-ethics-langfocus-03-example', voice: 'jm_husk',         text: "The new accessibility settings are a real step forward. That said, plenty of players are still waiting for basic features other studios added years ago." },
  { slug: 'gaming-ethics-langfocus-04-example', voice: 'lauren',          text: "It would be unfair to deny that representation in games has improved a lot — but it would be just as unfair to pretend the work is finished." },
  { slug: 'gaming-ethics-langfocus-05-example', voice: 'mark',            text: "Although critics have a point about how repetitive these systems can feel, the bigger issue is how aggressively they're marketed to kids." },
  { slug: 'gaming-ethics-langfocus-06-example', voice: 'juniper',         text: "No one really disputes that crunch happens — the real question is why studios keep treating it like a surprise every single time." },
  { slug: 'gaming-ethics-langfocus-07-example', voice: 'shannon',         text: "To play devil's advocate for a moment, maybe a five-year-old game doesn't owe anyone a modern accessibility overhaul." },
  { slug: 'gaming-ethics-langfocus-08-example', voice: 'sally',           text: "At the end of the day, players will keep voting with their wallets, whatever the official statements happen to say." },
];

// ── IN USE PARAGRAPHS ────────────────────────────────────────────────────────
const INUSE = [
  {
    slug: 'gaming-ethics-inuse-01',
    voice: 'george',
    text: "It would be unfair to deny that many players genuinely enjoy these systems without any trouble. Even granting that, the broader pattern is hard to ignore: mechanics modeled closely on gambling, marketed to audiences that include children, sitting largely outside the kind of scrutiny applied to actual gambling products. While it's true that regulation is slow and inconsistent across regions, that's exactly why the conversation about accountability keeps resurfacing. Calling a system 'exploitative' isn't an attack on the people who enjoy it — it's a question about who designed it, and why.",
  },
  {
    slug: 'gaming-ethics-inuse-02',
    voice: 'jm_husk',
    text: "I think the part that doesn't get talked about enough is just how polarizing the word 'toxic' has become. No one disputes that harassment is a real problem — the real question is who gets to draw that line, and how consistently it actually gets enforced. To play devil's advocate for a moment: if moderation decisions feel arbitrary, doesn't that just push people toward platforms with none at all? At the end of the day, staying silent about how these calls get made probably makes all of us a little complicit in whichever version wins.",
  },
  {
    slug: 'gaming-ethics-inuse-03',
    voice: 'sally',
    text: "Seeing a character creator that actually lets you build someone who looks like you shouldn't be a big deal in 2026 — but it still is, because so few studios bother. People love to say 'inclusivity' is just a marketing buzzword. Cool, then why does it still feel like an afterthought in most AAA games? This isn't about ticking boxes. It's about whether the people making these games have ever actually had to think about anyone but themselves.",
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

  console.log('\n✅ All 27 gaming ethics & society audio files generated!');
}

main().catch(e => { console.error(e); process.exit(1); });

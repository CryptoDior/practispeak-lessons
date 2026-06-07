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
  { slug: 'esports-profession-01', voice: 'mark',            word: 'lucrative',   example: "Top-tier esports can be genuinely lucrative — but only for the small fraction of players who ever make it that far." },
  { slug: 'esports-profession-02', voice: 'lauren',          word: 'burnout',     example: "After three years of ten-hour scrim days, she said the burnout crept up on her so slowly she didn't notice it until she couldn't get out of bed." },
  { slug: 'esports-profession-03', voice: 'jm_husk',         word: 'longevity',   example: "Coaches talk a lot about mechanical skill, but almost nobody talks about longevity — how to still be playing, and enjoying it, five years from now." },
  { slug: 'esports-profession-04', voice: 'juniper',         word: 'scholarship', example: "She turned down a full scholarship to chase a roster spot, and to this day she still isn't sure she made the right call." },
  { slug: 'esports-profession-05', voice: 'george',          word: 'sponsorship', example: "The team's entire travel budget depends on a single sponsorship deal that's up for renewal next month." },
  { slug: 'esports-profession-06', voice: 'sally',           word: 'underdog',    example: "Nobody expected the underdog squad to even make it out of groups, let alone walk away with the trophy." },
  { slug: 'esports-profession-07', voice: 'shannon',         word: 'roster',      example: "The org announced a complete roster overhaul this morning, and three players found out about it on social media before anyone called them directly." },
  { slug: 'esports-profession-08', voice: 'female_gen',      word: 'washed-up',   example: "Fans can be brutal — one bad season and suddenly people are calling a twenty-three-year-old 'washed-up.'" },
];

// ── LANGUAGE FOCUS PHRASE EXAMPLES (example sentence only) ──────────────────
const LANGFOCUS = [
  { slug: 'esports-profession-langfocus-01-example', voice: 'male_narrator',   text: "If a player loses focus mid-match, the whole team usually pays for it." },
  { slug: 'esports-profession-langfocus-02-example', voice: 'female_narrator', text: "If she signs with that organization, she'll be relocating to Seoul by spring." },
  { slug: 'esports-profession-langfocus-03-example', voice: 'jm_husk',         text: "If I were coaching this team, I'd spend less time drilling mechanics and more time teaching them how to actually talk to each other." },
  { slug: 'esports-profession-langfocus-04-example', voice: 'lauren',          text: "If he hadn't dropped out at seventeen, he might never have ended up on a pro roster at all." },
  { slug: 'esports-profession-langfocus-05-example', voice: 'mark',            text: "If she hadn't put in those years of unglamorous practice, she wouldn't be standing on that stage tonight." },
  { slug: 'esports-profession-langfocus-06-example', voice: 'juniper',         text: "Were the sponsorship deal to fall through, the entire roster's future would suddenly be in question." },
  { slug: 'esports-profession-langfocus-07-example', voice: 'shannon',         text: "Unless something changes soon, half this roster will be looking for new teams by the end of the season." },
  { slug: 'esports-profession-langfocus-08-example', voice: 'sally',           text: "Provided that the team keeps performing at this level, the contract will almost certainly be renewed." },
];

// ── IN USE PARAGRAPHS ────────────────────────────────────────────────────────
const INUSE = [
  {
    slug: 'esports-profession-inuse-01',
    voice: 'mark',
    text: "If a young athlete trains intensively for ten years, their body eventually shows it — and the same pattern holds for competitive gaming. If players continue treating ten-hour scrim days as the baseline, burnout will keep cutting careers short well before they need to end. The longevity question isn't really about talent. It's about whether anyone in the organization is paying attention to a person, and not just to a roster spot.",
  },
  {
    slug: 'esports-profession-inuse-02',
    voice: 'jm_husk',
    text: "Honestly, if I'd been offered a full scholarship at eighteen, I don't know if I'd have turned it down the way she did — and I think that's exactly the conversation we don't have enough. If you make it, sure, the sponsorship money can be lucrative. But were that one offer to fall through, or were one bad year to happen at the wrong moment, you're suddenly twenty-two with no roster, no degree, and a resume that says 'professional underdog' and not much else.",
  },
  {
    slug: 'esports-profession-inuse-03',
    voice: 'sally',
    text: "people keep asking if i regret leaving the team and tbh? if you'd told seventeen-year-old me i'd be 'washed-up' by twenty-three i would have laughed in your face. but here we are. unless something actually changes about how these orgs treat players, this is just going to keep happening to the next kid, and the kid after that.",
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

  console.log('\n✅ All 27 esports-as-a-profession audio files generated!');
}

main().catch(e => { console.error(e); process.exit(1); });

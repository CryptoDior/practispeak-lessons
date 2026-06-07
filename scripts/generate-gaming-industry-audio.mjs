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
  { slug: 'gaming-industry-01', voice: 'male_narrator',   word: 'monetize',      example: "It's becoming harder to find a mobile game that hasn't been monetized through ads, loot boxes, or some kind of subscription model." },
  { slug: 'gaming-industry-02', voice: 'female_narrator', word: 'crunch',        example: "By the final month of crunch, half the team was sleeping at the office just to hit the release date." },
  { slug: 'gaming-industry-03', voice: 'jm_husk',         word: 'consolidation', example: "Consolidation in the industry means a handful of publishers now control most of the big franchises we grew up with." },
  { slug: 'gaming-industry-04', voice: 'lauren',          word: 'live-service',  example: "They redesigned the entire game as a live-service title, which means it'll keep getting new content — and new ways to spend money — for years." },
  { slug: 'gaming-industry-05', voice: 'mark',            word: 'backlash',      example: "The backlash was so intense that the studio had to walk back the changes within forty-eight hours of launch." },
  { slug: 'gaming-industry-06', voice: 'juniper',         word: 'layoffs',       example: "Another round of layoffs hit the studio last week, just months after the game shipped to record sales." },
  { slug: 'gaming-industry-07', voice: 'shannon',         word: 'franchise',     example: "The franchise has been rebooted so many times that newer fans barely recognize the characters from the original games." },
  { slug: 'gaming-industry-08', voice: 'sally',           word: 'early access',  example: "I bought it in early access last year, and honestly, it's barely changed since then." },
];

// ── LANGUAGE FOCUS PHRASE EXAMPLES (example sentence only) ──────────────────
const LANGFOCUS = [
  { slug: 'gaming-industry-langfocus-01-example', voice: 'george',     text: "It was decided that the project would be discontinued, with resources reallocated to other priorities." },
  { slug: 'gaming-industry-langfocus-02-example', voice: 'female_gen', text: "As part of this transition, certain roles across the studio have been impacted." },
  { slug: 'gaming-industry-langfocus-03-example', voice: 'jm_husk',    text: "Going forward, our focus will be on delivering experiences that resonate with our most engaged communities." },
  { slug: 'gaming-industry-langfocus-04-example', voice: 'lauren',     text: "We hear you, and we're listening — your feedback on the new pricing model has been invaluable." },
  { slug: 'gaming-industry-langfocus-05-example', voice: 'mark',       text: "The decision was not made lightly, and we recognize the impact this will have on those affected." },
  { slug: 'gaming-industry-langfocus-06-example', voice: 'juniper',    text: "Let's call this what it actually is — a company posting record profits while cutting hundreds of jobs." },
  { slug: 'gaming-industry-langfocus-07-example', voice: 'shannon',    text: "Who, exactly, made this call, and why weren't the people affected told before the press release went out?" },
  { slug: 'gaming-industry-langfocus-08-example', voice: 'sally',      text: "If you read between the lines of that statement, what they're really saying is that more cuts are coming." },
];

// ── IN USE PARAGRAPHS ────────────────────────────────────────────────────────
const INUSE = [
  {
    slug: 'gaming-industry-inuse-01',
    voice: 'male_narrator',
    text: "ok so apparently the studio that made that game just announced ANOTHER round of layoffs?? like the game did so well too, i don't get it. feels like every month it's a different studio getting hit. also did you see the new monetization in that other game? it's so aggressive now, i genuinely can't open a menu without something trying to sell me a bundle. honestly i think we're hitting real franchise fatigue at this point, like how many remasters do we actually need lol",
  },
  {
    slug: 'gaming-industry-inuse-02',
    voice: 'female_narrator',
    text: "What's interesting about this latest wave of consolidation is that it's reshaping how games even get made. When three or four publishers control most of the big franchises, you start to see a much narrower range of live-service titles getting greenlit, because that's where the predictable, long-term revenue is. The risk, of course, is that the kind of crunch culture we've criticized for years just gets baked even deeper into the system, because now there's even more pressure to hit quarterly numbers.",
  },
  {
    slug: 'gaming-industry-inuse-03',
    voice: 'jm_husk',
    text: "The studio's decision to launch its flagship title in early access has drawn a mixed response from critics and players alike. While some have praised the transparency of an iterative development process shaped by community feedback, others argue that the move simply shifts the burden of testing — and the cost of crunch — onto the people least equipped to absorb it. The backlash following last month's price announcement suggests that audiences are growing increasingly skeptical of how the industry frames these decisions.",
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

  console.log('\n✅ All 27 gaming industry audio files generated!');
}

main().catch(e => { console.error(e); process.exit(1); });

import https from 'https';
import fs from 'fs';
import path from 'path';

const ELEVENLABS_KEY = 'sk_b66be930e6effb17457088d5c72efa199071c6259e176e6a';
const AUDIO_DIR = path.resolve('public/audio');

// Voice IDs — alternating male/female for variety
const VOICES = {
  male:   'iP95p4xoKVk53GoZ742B', // Chris  — American male conversational
  female: 'cgSgspJ2msm6clMCkdW9', // Jessica — American female conversational
};

const SPEED = 0.75;

// 8 phrases: phrase text + example sentence
const PHRASES = [
  {
    slug: 'strat-01',
    phrase: 'You should',
    example: 'You should hold that angle — don\'t peek until they push.',
    voice: 'male',
  },
  {
    slug: 'strat-02',
    phrase: 'We could',
    example: 'We could split up — one pushes A, one waits at B and watches mid.',
    voice: 'female',
  },
  {
    slug: 'strat-03',
    phrase: 'They might',
    example: 'They might be camping the corner — don\'t rush in, check first.',
    voice: 'male',
  },
  {
    slug: 'strat-04',
    phrase: 'I can cover',
    example: 'I can cover mid — you take the left flank and I\'ll hold here.',
    voice: 'female',
  },
  {
    slug: 'strat-05',
    phrase: 'We can\'t',
    example: 'We can\'t win a one versus three — fall back, reset, and play for the next round.',
    voice: 'male',
  },
  {
    slug: 'strat-06',
    phrase: 'If we push now, we\'ll',
    example: 'If we push now, we\'ll catch them reloading — they just had a big fight.',
    voice: 'female',
  },
  {
    slug: 'strat-07',
    phrase: 'If you don\'t rotate, we\'ll',
    example: 'If you don\'t rotate now, we\'ll lose the zone — we\'re already low on time.',
    voice: 'male',
  },
  {
    slug: 'strat-08',
    phrase: 'What if we',
    example: 'What if we bait them into A and flank from B while they rotate?',
    voice: 'female',
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

  for (const p of PHRASES) {
    const voiceId = VOICES[p.voice];
    console.log(`\n[${p.slug}] ${p.phrase}`);

    // phrase audio
    await generateAudio(p.phrase, voiceId, path.join(AUDIO_DIR, `${p.slug}-phrase.mp3`));
    await sleep(600);

    // example audio
    await generateAudio(p.example, voiceId, path.join(AUDIO_DIR, `${p.slug}-example.mp3`));
    await sleep(600);
  }

  console.log('\n✅ All strategy audio generated!');
}

main().catch(e => { console.error(e); process.exit(1); });

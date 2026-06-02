/**
 * Generates all audio for the Gaming Jargon Deep Dive lesson.
 * Run: node --env-file=.env.local scripts/generate-jargon-audio.mjs
 *
 * Voices: Chris (American male conversational) at 0.75 speed for examples.
 */
import https from 'https';
import fs   from 'fs';
import path from 'path';

const KEY   = process.env.ELEVENLABS_API_KEY;
const AUDIO = path.join('.', 'public', 'audio');

if (!KEY) throw new Error('Missing ELEVENLABS_API_KEY in .env.local');
fs.mkdirSync(AUDIO, { recursive: true });

// ── Voices ────────────────────────────────────────────────────────────────────
const V = {
  maleNarrator:    'n8kTUi6dVrplENT9Un56',
  femaleNarrator:  'vCZXQeSML7qJRTiADoTW',
  jmHusk:          'EkK5I93UQWFDigLMpZcX',
  lauren:          'l4Coq6695JDX9xtLqXDE',
  mark:            '1SM7GgM6IMuvQlz2BwM3',
  juniper:         'aMSt68OGf4xUZAnLpTU8',
  shannon:         'uHoisgHFfUYZ3FULxcdM',
  george:          'JBFqnCBsd6RMkjVDRZzb',
};

// ── Content ───────────────────────────────────────────────────────────────────

const vocabulary = [
  { word: 'nerf', example: "They nerfed the shotgun — it does 30% less damage now.",       voice: V.maleNarrator   },
  { word: 'buff', example: "My main got buffed this patch. She's actually viable now!",     voice: V.femaleNarrator },
  { word: 'meta', example: "Stacking tanks is totally meta right now.",                     voice: V.jmHusk         },
  { word: 'OP',   example: "That boss ability is OP — no one can dodge it in time.", slug: 'op', voice: V.lauren  },
];

const relatedTerms = [
  { word: 'patch',     example: "After the patch, the meta completely changed.",            voice: V.mark           },
  { word: 'broken',    example: "This combo is broken — needs to be nerfed immediately.",   voice: V.juniper        },
  { word: 'main',      example: "I main Sova, but he just got nerfed.",                    voice: V.shannon        },
  { word: 'tier list', example: "She jumped to S-tier after the buff.", slug: 'tier-list',  voice: V.george        },
];

const forumPost = {
  slug: 'gaming-jargon-forum-post',
  voice: V.jmHusk,
  text: "Hot take: this patch is the worst in two years. They nerfed Viper into the ground — her damage is completely useless now. Meanwhile, Sova got another buff even though he was already OP. He's been S-tier on every meta tier list for six months. If this is where the meta is heading, I'm switching my main.",
};

// ── Helper ────────────────────────────────────────────────────────────────────

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function elevenLabsRequest(text, speed, outputPath, voiceId) {
  return new Promise((resolve, reject) => {
    const finalText = speed !== 1.0
      ? `<speak><prosody rate="${Math.round(speed * 100)}%">${text}</prosody></speak>`
      : text;

    const body = JSON.stringify({
      text: finalText,
      model_id: 'eleven_turbo_v2_5',
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    });

    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${voiceId}`,
      method: 'POST',
      headers: {
        'xi-api-key': KEY,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
      },
    }, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        if (res.statusCode === 200) {
          fs.writeFileSync(outputPath, Buffer.concat(chunks));
          console.log(`   ✅ ${path.basename(outputPath)}`);
          resolve();
        } else {
          reject(new Error(`ElevenLabs ${res.statusCode}: ${Buffer.concat(chunks)}`));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────

console.log('\n🎙  Generating Gaming Jargon audio...\n');

console.log('── Vocabulary ──');
for (const item of vocabulary) {
  const slug = item.slug ?? slugify(item.word);
  await elevenLabsRequest(item.word,    1.0,  path.join(AUDIO, `${slug}.mp3`),         item.voice);
  await elevenLabsRequest(item.example, 0.75, path.join(AUDIO, `${slug}-example.mp3`), item.voice);
}

console.log('\n── Related Terms ──');
for (const item of relatedTerms) {
  const slug = item.slug ?? slugify(item.word);
  await elevenLabsRequest(item.word,    1.0,  path.join(AUDIO, `${slug}.mp3`),         item.voice);
  await elevenLabsRequest(item.example, 0.75, path.join(AUDIO, `${slug}-example.mp3`), item.voice);
}

console.log('\n── Forum Post ──');
await elevenLabsRequest(forumPost.text, 0.75, path.join(AUDIO, `${forumPost.slug}.mp3`), forumPost.voice);

console.log('\n🎉 All audio generated!\n');
console.log('Now run:');
console.log('  git add -A && git commit -m "Add audio for gaming jargon lesson" && git push\n');

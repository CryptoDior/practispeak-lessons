/**
 * Generates ElevenLabs audio for the In Action paragraphs.
 * Run from the practispeak-lessons root:
 *   node --env-file=.env.local scripts/generate-streaming-inaction-audio.mjs
 */

import https from 'https';
import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const AUDIO_DIR  = path.join(__dirname, '..', 'public', 'audio');
const VOICE_ID   = 'iP95p4xoKVk53GoZ742B'; // Chris — American male conversational
const API_KEY    = process.env.ELEVENLABS_API_KEY;

if (!API_KEY) throw new Error('Missing ELEVENLABS_API_KEY — add it to .env.local');

const paragraphs = [
  {
    slug: 'streaming-inaction-01',
    text: `Hey, welcome to the stream everyone — and welcome to anyone who's new. Let me quickly explain what's happening — I'm in a ranked game, final four squads, and I'm the last one alive on my team. No pressure. What I'm trying to do is hold this building until the zone forces them in. One thing I've noticed is that aggressive players always push too early here — so I'm just going to be patient and make them come to me. The reason I'm doing this is because I've been grinding this strategy all week and today is the test. And hey — if you're enjoying the stream, make sure to hit that follow button. It means the world.`,
  },
  {
    slug: 'streaming-inaction-02',
    text: `Hey, what's up — if you're new here, welcome. I've been streaming for about a year now, mostly competitive FPS and the occasional ranked grind. I'm trying to build a community around honest, analytical gameplay — less hype, more learning. I've been working on improving my content quality over the last few months, and I think you'll notice the difference. The reason I'm doing this is because I genuinely believe you can learn something from every match — win or lose. If that sounds like your vibe, subscribe and let's go.`,
  },
  {
    slug: 'streaming-inaction-03',
    text: `POV: I've been working on improving my reaction time for 30 days. One thing I've noticed is that consistency beats grinding every time. If you're enjoying this content, make sure to follow for the full series. Let me quickly explain what's happening — I haven't touched ranked in two weeks, and I'm about to find out if the break actually helped.`,
  },
];

function generateAudio(text, outputPath) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      model_id: 'eleven_turbo_v2_5',
      voice_settings: { stability: 0.5, similarity_boost: 0.75, speed: 0.85 },
    });

    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path:     `/v1/text-to-speech/${VOICE_ID}`,
      method:   'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key':   API_KEY,
        'Accept':       'audio/mpeg',
      },
    }, res => {
      if (res.statusCode !== 200) {
        const chunks = [];
        res.on('data', c => chunks.push(c));
        res.on('end', () => reject(new Error(`ElevenLabs ${res.statusCode}: ${Buffer.concat(chunks)}`)));
        return;
      }
      const out = fs.createWriteStream(outputPath);
      res.pipe(out);
      out.on('finish', () => { console.log('✓', path.basename(outputPath)); resolve(); });
      out.on('error', reject);
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

(async () => {
  let generated = 0;
  for (const { slug, text } of paragraphs) {
    const outPath = path.join(AUDIO_DIR, `${slug}.mp3`);
    if (fs.existsSync(outPath)) { console.log('skip (exists)', slug); continue; }
    await generateAudio(text, outPath);
    generated++;
    await new Promise(r => setTimeout(r, 400));
  }
  console.log(`\nDone. ${generated} file(s) generated.`);
})();

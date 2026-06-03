/**
 * Generates ElevenLabs audio for the Streaming & Content Creation lesson.
 * Run from the practispeak-lessons root:
 *   node --env-file=.env.local scripts/generate-streaming-audio.mjs
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

const examples = [
  { slug: 'streaming-01-example', text: "I've been working on improving my aim for about three weeks — you can actually see the difference in my stats today." },
  { slug: 'streaming-02-example', text: "What I'm trying to do is bait them out of the building and force a 1v1 in the open — patience is the whole play here." },
  { slug: 'streaming-03-example', text: "I've been streaming for about eight months — started with ten viewers and now we've got this amazing community." },
  { slug: 'streaming-04-example', text: "I'm trying to build a community around chill competitive gaming — people who take the game seriously but keep the energy positive." },
  { slug: 'streaming-05-example', text: "If you're enjoying the stream, make sure to drop a follow — it genuinely makes a difference and I read every single one." },
  { slug: 'streaming-06-example', text: "One thing I've noticed is that most players panic in the final circle — staying calm is honestly the biggest competitive advantage." },
  { slug: 'streaming-07-example', text: "The reason I'm doing this is because I want to prove you can rank up without playing meta — skill over patch notes." },
  { slug: 'streaming-08-example', text: "Let me quickly explain what's happening — we've been sieging this base for 20 minutes and they keep rotating to the same corner." },
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
  for (const { slug, text } of examples) {
    const outPath = path.join(AUDIO_DIR, `${slug}.mp3`);
    if (fs.existsSync(outPath)) { console.log('skip (exists)', slug); continue; }
    await generateAudio(text, outPath);
    generated++;
    await new Promise(r => setTimeout(r, 400));
  }
  console.log(`\nDone. ${generated} file(s) generated.`);
})();

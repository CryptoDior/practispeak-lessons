/**
 * Fix who.mp3 — regenerates with natural casing so ElevenLabs pronounces it correctly.
 * Run from the practispeak-lessons root:
 *   node --env-file=.env.local scripts/fix-who-audio.mjs
 */

import https from 'https';
import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AUDIO_DIR = path.join(__dirname, '..', 'public', 'audio');
const API_KEY   = process.env.ELEVENLABS_API_KEY;
if (!API_KEY) throw new Error('Missing ELEVENLABS_API_KEY — add it to .env.local');

const VOICE = 'vCZXQeSML7qJRTiADoTW'; // female narrator (position 2 in rotation — matches original)

const files = [
  { text: 'Who',                                                    file: 'who.mp3' },
  { text: 'Who is the strongest player on the enemy team?',         file: 'who-example.mp3' },
];

function generateAudio(text, voiceId, outputPath) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      model_id: 'eleven_turbo_v2_5',
      voice_settings: { stability: 0.5, similarity_boost: 0.75, speed: 0.75 },
    });
    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path:     `/v1/text-to-speech/${voiceId}`,
      method:   'POST',
      headers:  { 'Content-Type': 'application/json', 'xi-api-key': API_KEY, 'Accept': 'audio/mpeg' },
    }, res => {
      if (res.statusCode !== 200) {
        const chunks = [];
        res.on('data', c => chunks.push(c));
        res.on('end', () => reject(new Error(`ElevenLabs ${res.statusCode}: ${Buffer.concat(chunks)}`)));
        return;
      }
      const out = fs.createWriteStream(outputPath);
      res.pipe(out);
      out.on('finish', () => { console.log('  ✓', path.basename(outputPath)); resolve(); });
      out.on('error', reject);
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

(async () => {
  console.log('\n🔧 Fixing who.mp3...\n');
  for (const { text, file } of files) {
    const outPath = path.join(AUDIO_DIR, file);
    if (fs.existsSync(outPath)) fs.unlinkSync(outPath); // force overwrite
    await generateAudio(text, VOICE, outPath);
    await new Promise(r => setTimeout(r, 400));
  }
  console.log('\n✅ Done! Run:');
  console.log('   git add public/audio/who.mp3 public/audio/who-example.mp3');
  console.log('   git commit -m "Fix WHO audio pronunciation"');
  console.log('   git push origin main');
})();

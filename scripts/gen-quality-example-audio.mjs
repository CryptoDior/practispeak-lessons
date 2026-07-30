import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const API_KEY = process.env.ELEVENLABS_API_KEY || 'd3c29be195d13bc6b664e32a286c8802aa43747b1d857e3dc076a7cca74fed64';
const VOICE_ID = 'vCZXQeSML7qJRTiADoTW'; // female narrator, rotation slot 2
const TEXT = 'Customers often mention the quality of our support team.';
const OUT_PATH = path.join(__dirname, '../public/audio/quality-example.mp3');

const body = JSON.stringify({
  text: TEXT,
  model_id: 'eleven_turbo_v2',
  voice_settings: { stability: 0.5, similarity_boost: 0.75, speed: 0.75 },
});

const options = {
  hostname: 'api.elevenlabs.io',
  path: `/v1/text-to-speech/${VOICE_ID}`,
  method: 'POST',
  headers: {
    'xi-api-key': API_KEY,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
  },
};

console.log('Calling ElevenLabs API…');
const req = https.request(options, (res) => {
  if (res.statusCode !== 200) {
    let err = '';
    res.on('data', (d) => (err += d));
    res.on('end', () => { console.error(`Error ${res.statusCode}:`, err); process.exit(1); });
    return;
  }
  const out = fs.createWriteStream(OUT_PATH);
  res.pipe(out);
  out.on('finish', () => {
    console.log(`✓ Saved to ${OUT_PATH}`);
    console.log('\nNow run:');
    console.log('  git add public/audio/quality-example.mp3 && git commit -m "fix: regenerate quality-example audio" && git push');
  });
});

req.on('error', (e) => { console.error('Request error:', e); process.exit(1); });
req.write(body);
req.end();

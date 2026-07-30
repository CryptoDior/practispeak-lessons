import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_KEY = process.env.ELEVENLABS_API_KEY || 'd3c29be195d13bc6b664e32a286c8802aa43747b1d857e3dc076a7cca74fed64';

const TRACKS = [
  {
    voiceId: 'n8kTUi6dVrplENT9Un56', // male narrator, slot 0 (FEATURE)
    text: 'One of our best features is the calendar that syncs with your team automatically.',
    outFile: 'feature-example.mp3',
  },
  {
    voiceId: 'vCZXQeSML7qJRTiADoTW', // female narrator, slot 1 (QUALITY)
    text: 'Customers often mention the quality of our support team.',
    outFile: 'quality-example.mp3',
  },
];

function generate({ voiceId, text, outFile }) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      model_id: 'eleven_turbo_v2',
      voice_settings: { stability: 0.5, similarity_boost: 0.75, speed: 0.75 },
    });
    const options = {
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${voiceId}`,
      method: 'POST',
      headers: {
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };
    const outPath = path.join(__dirname, '../public/audio', outFile);
    console.log(`Generating ${outFile}…`);
    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        let err = '';
        res.on('data', (d) => (err += d));
        res.on('end', () => reject(new Error(`${res.statusCode}: ${err}`)));
        return;
      }
      const out = fs.createWriteStream(outPath);
      res.pipe(out);
      out.on('finish', () => { console.log(`✓ ${outFile}`); resolve(); });
      out.on('error', reject);
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

(async () => {
  for (const track of TRACKS) await generate(track);
  console.log('\nDone! Now run:');
  console.log('  git add public/audio/feature-example.mp3 public/audio/quality-example.mp3 && git commit -m "fix: regenerate feature and quality example audio" && git push');
})();

import https from 'https';
import fs from 'fs';
import { execSync } from 'child_process';

const KEY = process.env.ELEVENLABS_API_KEY;
const VOICE = 'iP95p4xoKVk53GoZ742B';

async function gen(text, file) {
  console.log('Generating', file);
  const body = JSON.stringify({
    text: `<speak><prosody rate="75%">${text}</prosody></speak>`,
    model_id: 'eleven_turbo_v2_5',
    voice_settings: { stability: 0.5, similarity_boost: 0.75 }
  });
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${VOICE}`,
      method: 'POST',
      headers: { 'xi-api-key': KEY, 'Content-Type': 'application/json', 'Accept': 'audio/mpeg' }
    }, (res) => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => { fs.writeFileSync(file, Buffer.concat(chunks)); resolve(); });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

await gen('Press A to jump over the wall!', 'public/audio/jump-example.mp3');
await gen('Run to the exit before the timer ends!', 'public/audio/run-example.mp3');

execSync('git add -A', { stdio: 'inherit' });
execSync('git commit -m "Fix jump and run example audio speed"', { stdio: 'inherit' });
execSync('git push', { stdio: 'inherit' });

console.log('Done!');

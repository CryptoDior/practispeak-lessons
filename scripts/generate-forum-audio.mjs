/**
 * Generates audio for the Gaming Jargon forum post passage.
 * Run: node --env-file=.env.local scripts/generate-forum-audio.mjs
 */
import https from 'https';
import fs   from 'fs';

const KEY   = process.env.ELEVENLABS_API_KEY;
const VOICE = 'iP95p4xoKVk53GoZ742B'; // Chris — American male conversational

if (!KEY) throw new Error('Missing ELEVENLABS_API_KEY in .env.local');

const text = `<speak><prosody rate="85%">Hot take: this patch is the worst in two years. They nerfed Viper into the ground — her damage is completely useless now. Meanwhile, Sova got another buff even though he was already OP. He's been S-tier on every meta tier list for six months. If this is where the meta is heading, I'm switching my main.</prosody></speak>`;

const body = JSON.stringify({
  text,
  model_id: 'eleven_turbo_v2_5',
  voice_settings: { stability: 0.5, similarity_boost: 0.75 },
});

console.log('Generating forum post audio...');

const req = https.request({
  hostname: 'api.elevenlabs.io',
  path: `/v1/text-to-speech/${VOICE}`,
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
      fs.writeFileSync('public/audio/gaming-jargon-forum-post.mp3', Buffer.concat(chunks));
      console.log('✅ Done! Saved to public/audio/gaming-jargon-forum-post.mp3');
    } else {
      console.error('❌ ElevenLabs error:', res.statusCode, Buffer.concat(chunks).toString());
    }
  });
});
req.on('error', e => console.error('Request error:', e.message));
req.write(body);
req.end();

import https from 'https';

const key = process.env.ELEVENLABS_API_KEY;
console.log('Key loaded:', key ? `${key.slice(0, 6)}...${key.slice(-4)} (${key.length} chars)` : 'MISSING');

const req = https.request({
  hostname: 'api.elevenlabs.io',
  path: '/v1/user',
  method: 'GET',
  headers: { 'xi-api-key': key },
}, (res) => {
  const chunks = [];
  res.on('data', c => chunks.push(c));
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Response:', Buffer.concat(chunks).toString());
  });
});
req.on('error', e => console.error('Request error:', e.message));
req.end();

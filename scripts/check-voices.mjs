// Does THIS ElevenLabs account have the three podcast voices?  Costs nothing.
//   node --env-file=.env.account2 scripts/check-voices.mjs
// Reads the key from the environment only; never prints it.
const acct = process.env.ELEVEN_ACCOUNT === '2' ? '2' : '1';
const key = acct === '2' ? process.env.ELEVENLABS_API_KEY_2 : process.env.ELEVENLABS_API_KEY;
console.log(`Checking ElevenLabs account ${acct}`);
if (!key) { console.error('Missing key for this account. Run with: node --env-file=<your env file> scripts/check-voices.mjs'); process.exit(1); }
const VOICES = { MICHAEL: 'vDchjyOZZytffNeZXfZK', TYLA: 'dVoi15NNDJligFBwnVO0', AMELIA: 'IKne3meq5aSn9XLyUdCD' };
for (const [name, id] of Object.entries(VOICES)) {
  const r = await fetch(`https://api.elevenlabs.io/v1/voices/${id}`, { headers: { 'xi-api-key': key } });
  console.log(`${name.padEnd(8)} ${r.ok ? 'OK — available on this account' : `NOT AVAILABLE (HTTP ${r.status}) — add it to this account's My Voices first`}`);
}

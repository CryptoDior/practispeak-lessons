import https from 'https';
import fs from 'fs';
import path from 'path';

const ELEVENLABS_KEY = 'sk_b66be930e6effb17457088d5c72efa199071c6259e176e6a';
const AUDIO_DIR = path.resolve('public/audio');
const SPEED = 0.75;

const VOICES = {
  male_narrator:   'n8kTUi6dVrplENT9Un56',
  female_narrator: 'vCZXQeSML7qJRTiADoTW',
  jm_husk:         'EkK5I93UQWFDigLMpZcX',
  lauren:          'l4Coq6695JDX9xtLqXDE',
  mark:            '1SM7GgM6IMuvQlz2BwM3',
  juniper:         'aMSt68OGf4xUZAnLpTU8',
  shannon:         'uHoisgHFfUYZ3FULxcdM',
  sally:           'bGz4A6rl9U05wqaE3qt1',
  george:          'JBFqnCBsd6RMkjVDRZzb',
  female_gen:      'Tfv2PGiTliSQ4XSXrJmA',
};

// ── VOCAB (word + example, same voice, rotating M/F) ────────────────────────
const VOCAB = [
  { slug: 'tech-vocab-01', voice: 'male_narrator',   word: 'lag',           example: "The lag was so bad I couldn't even move — my character was frozen on screen while the game continued without me." },
  { slug: 'tech-vocab-02', voice: 'female_narrator', word: 'ping',          example: "My ping jumped to 400 milliseconds and I instantly started rubber-banding across the map — completely unplayable." },
  { slug: 'tech-vocab-03', voice: 'jm_husk',         word: 'packet loss',   example: "Packet loss was the real problem — every few seconds a chunk of data disappeared and my character stuttered across the map." },
  { slug: 'tech-vocab-04', voice: 'lauren',          word: 'bandwidth',     example: "My bandwidth was maxed out because my roommate was streaming 4K video — that's what was causing all the lag." },
  { slug: 'tech-vocab-05', voice: 'mark',            word: 'latency',       example: "High latency in a first-person shooter is a death sentence — by the time your shot registers, the enemy has already moved." },
  { slug: 'tech-vocab-06', voice: 'juniper',         word: 'bottleneck',    example: "The bottleneck wasn't my internet — it was my old router on the floor. Everything else was fast, but the router killed the connection." },
  { slug: 'tech-vocab-07', voice: 'shannon',         word: 'throttle',      example: "My ISP was throttling my connection during peak hours — that's why my ping was fine in the morning but awful every evening." },
  { slug: 'tech-vocab-08', voice: 'sally',           word: 'troubleshoot',  example: "I spent two hours troubleshooting before I found it — a single background app was using all my upload bandwidth." },
];

// ── PHRASE EXAMPLES (example sentence only) ──────────────────────────────────
const PHRASES = [
  { slug: 'tech-01-example', voice: 'george',       text: "My connection keeps dropping because my router is overheating — it throttles itself and loses signal every twenty minutes." },
  { slug: 'tech-02-example', voice: 'female_gen',   text: "You've got six devices on the same WiFi — that's what's causing the lag. Plug in with ethernet and it'll disappear." },
  { slug: 'tech-03-example', voice: 'jm_husk',      text: "High ping leads to rubber-banding — your client thinks you're in one position, but the server says you're somewhere completely different." },
  { slug: 'tech-04-example', voice: 'lauren',       text: "Your speeds look fine at 9am but tank at 8pm every night — it could be down to your ISP throttling you during peak hours." },
  { slug: 'tech-05-example', voice: 'mark',         text: "The lag spikes whenever someone else uses the WiFi — that's a bandwidth problem, not a server problem." },
  { slug: 'tech-06-example', voice: 'juniper',      text: "My router is too far from my room, and as a result I'm getting packet loss every few minutes — the signal just isn't strong enough." },
  { slug: 'tech-07-example', voice: 'shannon',      text: "It's probably your bandwidth — try closing background apps and check if anything is downloading in the background." },
  { slug: 'tech-08-example', voice: 'sally',        text: "Ever since I switched to the EU servers, my ping dropped from 180 to 28 — I should have done it months ago." },
];

// ── IN ACTION PARAGRAPHS ─────────────────────────────────────────────────────
const INACTION = [
  {
    slug: 'tech-inaction-01',
    voice: 'jm_husk',
    text: "Bro, are you rubber-banding? You just teleported across the map. Yeah sorry, my connection keeps dropping because my flatmate started streaming something on Netflix. He's killing all the bandwidth. That's what's causing the lag then. Tell him to pause it or use ethernet. I've got three other devices on the same router too. Okay that's definitely it. Whenever you overload the WiFi like that, everyone's ping goes up. As a result you're basically unplayable right now. Plug in with ethernet and let's troubleshoot this properly.",
  },
  {
    slug: 'tech-inaction-02',
    voice: 'male_narrator',
    text: "Post: High ping every evening — suspected ISP throttling. I play on wired ethernet with a 200 megabit plan. My ping in the morning is consistently 18 to 22 milliseconds. However, every evening between 7pm and 11pm, it spikes to 150 to 200 milliseconds, leading to rubber-banding and occasional disconnects. The issue stems from somewhere between my router and the game servers — my local bandwidth tests show full speed, so the bottleneck is not in my home network. It could be down to my ISP throttling gaming traffic during peak hours. As a result, ranked play in the evening is close to impossible. Has anyone successfully troubleshot this and confirmed ISP throttling?",
  },
  {
    slug: 'tech-inaction-03',
    voice: 'lauren',
    text: "The streamer is confused — they are on wired ethernet, their download speed is 500 megabits, and yet the game is stuttering every few seconds. Chat has already figured it out. Several viewers point out that streaming and gaming simultaneously splits the upload bandwidth — as a result, the game server is not receiving data fast enough. Others suggest the lag could be down to ISP throttling, which becomes more aggressive during peak evening hours. One viewer explains it clearly: whenever you are encoding a live stream and playing a competitive game at the same time, your upload is the bottleneck. The streamer closes the stream encoding software, tests the ping — it drops from 180 milliseconds to 24. That is what was causing the lag. A single process, using all the upload bandwidth.",
  },
];

function speakSSML(text, speed) {
  const pct = Math.round(speed * 100);
  return `<speak><prosody rate="${pct}%">${text}</prosody></speak>`;
}

function generateAudio(text, voiceId, outputPath) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text: speakSSML(text, SPEED),
      model_id: 'eleven_turbo_v2_5',
      voice_settings: { stability: 0.5, similarity_boost: 0.75 },
    });

    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${voiceId}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_KEY,
        'Accept': 'audio/mpeg',
      },
    }, (res) => {
      if (res.statusCode !== 200) {
        const chunks = [];
        res.on('data', c => chunks.push(c));
        res.on('end', () => reject(new Error(`ElevenLabs ${res.statusCode}: ${Buffer.concat(chunks)}`)));
        return;
      }
      const out = fs.createWriteStream(outputPath);
      res.pipe(out);
      out.on('finish', () => { console.log(`  ✓ ${path.basename(outputPath)}`); resolve(); });
      out.on('error', reject);
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  if (!fs.existsSync(AUDIO_DIR)) fs.mkdirSync(AUDIO_DIR, { recursive: true });

  console.log('\n── VOCAB ──');
  for (const v of VOCAB) {
    const voiceId = VOICES[v.voice];
    console.log(`\n[${v.slug}] ${v.word}`);
    await generateAudio(v.word, voiceId, path.join(AUDIO_DIR, `${v.slug}.mp3`));
    await sleep(500);
    await generateAudio(v.example, voiceId, path.join(AUDIO_DIR, `${v.slug}-example.mp3`));
    await sleep(500);
  }

  console.log('\n── PHRASE EXAMPLES ──');
  for (const p of PHRASES) {
    const voiceId = VOICES[p.voice];
    console.log(`\n[${p.slug}]`);
    await generateAudio(p.text, voiceId, path.join(AUDIO_DIR, `${p.slug}.mp3`));
    await sleep(500);
  }

  console.log('\n── IN ACTION ──');
  for (const a of INACTION) {
    const voiceId = VOICES[a.voice];
    console.log(`\n[${a.slug}]`);
    await generateAudio(a.text, voiceId, path.join(AUDIO_DIR, `${a.slug}.mp3`));
    await sleep(600);
  }

  console.log('\n✅ All 27 tech talk audio files generated!');
}

main().catch(e => { console.error(e); process.exit(1); });

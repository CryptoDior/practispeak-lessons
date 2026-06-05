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

// ── VOCAB (word + example, same voice) ──────────────────────────────────────
const VOCAB = [
  { slug: 'narrative-vocab-01', voice: 'male_narrator',   word: 'comeback',      example: "We were down three rounds with no economy — the comeback we pulled off was the greatest I had ever been part of." },
  { slug: 'narrative-vocab-02', voice: 'female_narrator', word: 'ambush',        example: "I was running through the corridor when they ambushed us from both sides — we had walked right into their trap." },
  { slug: 'narrative-vocab-03', voice: 'jm_husk',         word: 'outplay',       example: "They outplayed us completely in the final round — every decision they made was a step ahead of what we expected." },
  { slug: 'narrative-vocab-04', voice: 'lauren',          word: 'momentum',      example: "We had all the momentum going into the final round — and then one mistake shattered it completely." },
  { slug: 'narrative-vocab-05', voice: 'mark',            word: 'highlight',     example: "That snipe was the highlight of the entire tournament — people were still talking about it two weeks later." },
  { slug: 'narrative-vocab-06', voice: 'juniper',         word: 'narrate',       example: "He narrated the entire match from memory — every rotation, every mistake, every moment that changed the outcome." },
  { slug: 'narrative-vocab-07', voice: 'shannon',         word: 'turning point', example: "The turning point was when they lost their captain — after that, their whole strategy fell apart." },
  { slug: 'narrative-vocab-08', voice: 'sally',           word: 'anticipate',    example: "I had anticipated their push — I was already in position before they even crossed the door." },
];

// ── PHRASE EXAMPLES ──────────────────────────────────────────────────────────
const PHRASES = [
  { slug: 'narrative-01-example', voice: 'george',       text: "It all started when we queued into a lobby we almost didn't join — the match that changed everything for our team." },
  { slug: 'narrative-02-example', voice: 'female_gen',   text: "I was just about to push through the door when the explosion went off — three of us went down instantly." },
  { slug: 'narrative-03-example', voice: 'jm_husk',      text: "While they were pushing the left flank, we were quietly setting up the ambush on the right — they never saw it coming." },
  { slug: 'narrative-04-example', voice: 'lauren',       text: "As soon as I heard the footsteps, I swapped to my secondary and held the angle — it was pure instinct." },
  { slug: 'narrative-05-example', voice: 'mark',         text: "By the time we got there, they had already taken the objective and fortified every entry point — we had nothing to work with." },
  { slug: 'narrative-06-example', voice: 'juniper',      text: "We had already used our only revive — so when the last player went down, there was nothing left to do." },
  { slug: 'narrative-07-example', voice: 'shannon',      text: "We were down to one player, no resources, one second on the clock. That's when everything changed." },
  { slug: 'narrative-08-example', voice: 'sally',        text: "Looking back, I should have held my position instead of pushing — I had all the information I needed to make the right call." },
];

// ── IN ACTION PARAGRAPHS ─────────────────────────────────────────────────────
const INACTION = [
  {
    slug: 'narrative-inaction-01',
    voice: 'jm_husk',
    text: "Okay so let me tell you what happened, because chat missed it. It all started when I rotated to the wrong building — I had misread the zone and put myself in a terrible position. While they were pushing from the north, I was completely alone with no cover and two squads closing in. I was just about to call it and take the loss when I remembered the balcony I had seen two minutes earlier. As soon as I got up there, I could see everything. I dropped three before they even knew where I was. By the time the last squad arrived, I had already reset and was waiting. That's when everything changed.",
  },
  {
    slug: 'narrative-inaction-02',
    voice: 'male_narrator',
    text: "This clip is from the most insane comeback we have ever pulled off. We had already lost the first two rounds and our economy was completely destroyed — we had nothing. While the other team was celebrating in the lobby, we were rebuilding our strategy from scratch. Every single player bought the cheapest weapon available. By the time round three started, they had forgotten we were even a threat. As soon as the round began, we executed the play we had rehearsed a hundred times in practice. They never anticipated it. Looking back, I think we should have played that aggressive style from the beginning — but sometimes you need to hit rock bottom before you find what actually works.",
  },
  {
    slug: 'narrative-inaction-03',
    voice: 'shannon',
    text: "Bro, you were AFK for the best part. So basically — while you were gone, we were holding a four-versus-five for three rounds straight. We had already used every advantage we had just to stay in the game. It all started going wrong when we lost the third player — after that it was basically survival mode. I was just about to call a retreat when Kai held a one-versus-three from that corner — you know the one. As soon as he got the first kill, the momentum completely shifted. By the time you came back, we had won two of the three rounds you missed. Looking back, I still don't know how we pulled that off.",
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

  console.log('\n── PHRASES ──');
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

  console.log('\n✅ All 27 narrative audio files generated!');
}

main().catch(e => { console.error(e); process.exit(1); });

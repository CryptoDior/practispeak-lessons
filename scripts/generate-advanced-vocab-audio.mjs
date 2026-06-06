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
  { slug: 'advanced-vocab-01', voice: 'male_narrator',   word: 'grind',  example: "I'm not even sure the reward's worth it anymore — I've just been grinding for so long it's become a habit." },
  { slug: 'advanced-vocab-02', voice: 'female_narrator', word: 'toxic',  example: "It's wild how one toxic player can completely change the mood of an entire match." },
  { slug: 'advanced-vocab-03', voice: 'jm_husk',         word: 'meta',   example: "Honestly, the meta changes so often these days that it's hard to keep up unless you're watching pro matches every week." },
  { slug: 'advanced-vocab-04', voice: 'lauren',          word: 'clutch', example: "She's the kind of player who barely says a word all match and then goes completely clutch right when you need her to." },
  { slug: 'advanced-vocab-05', voice: 'mark',            word: 'nerf',   example: "I get why they nerfed it, but did they really have to nerf it into the ground? Nobody's even using it now." },
  { slug: 'advanced-vocab-06', voice: 'juniper',         word: 'smurf',  example: "You can usually tell within the first two minutes whether someone's a smurf — the way they move just gives it away." },
  { slug: 'advanced-vocab-07', voice: 'shannon',         word: 'throw',  example: "Honestly, that wasn't bad luck — that was a hard throw, and we all know exactly which play caused it." },
  { slug: 'advanced-vocab-08', voice: 'sally',           word: 'salty',  example: "I closed the chat the second the salty comments started — nobody needs that energy after a loss." },
];

// ── LANGUAGE FOCUS / COLLOCATION EXAMPLES (example sentence only) ───────────
const COLLOCATIONS = [
  { slug: 'advanced-vocab-collocation-01-example', voice: 'george',       text: "We didn't play our best by any means, but we grinded out a win in the end — and honestly, I'll take it." },
  { slug: 'advanced-vocab-collocation-02-example', voice: 'female_gen',   text: "The mods ended up banning him for toxic behavior — he spent the whole match trash-talking everyone on the team." },
  { slug: 'advanced-vocab-collocation-03-example', voice: 'jm_husk',      text: "That last patch caused such a huge shift in the meta — half the strategies people relied on don't even work anymore." },
  { slug: 'advanced-vocab-collocation-04-example', voice: 'lauren',       text: "Everyone's still talking about her clutch performance in the finals last weekend — she barely missed a single read." },
  { slug: 'advanced-vocab-collocation-05-example', voice: 'mark',         text: "That weapon finally got an overdue nerf — the community's been begging the devs to look at it for what feels like forever." },
  { slug: 'advanced-vocab-collocation-06-example', voice: 'juniper',      text: "That 'brand new player' was such an obvious smurf — the way they were positioning themselves gave it away in seconds." },
  { slug: 'advanced-vocab-collocation-07-example', voice: 'shannon',      text: "Losing from a twenty-point lead? That's not just a throw — that's a hard throw, and we all know it." },
  { slug: 'advanced-vocab-collocation-08-example', voice: 'sally',        text: "I muted the chat the moment the salty comments started rolling in — it's just not worth reading after a rough loss." },
];

// ── IN USE PARAGRAPHS ────────────────────────────────────────────────────────
const INUSE = [
  {
    slug: 'advanced-vocab-inuse-01',
    voice: 'male_narrator',
    text: "ngl that was rough lol. we had it WON and then just threw it in like the last 30 seconds. and don't even get me started on that smurf on their team — bro was clearly not actually new lol. one of our own guys got so toxic about it too, just blaming everyone instead of focusing back up. anyway i'm a little salty ngl but we'll get the next one fr. gonna go grind some ranked to cool off lol",
  },
  {
    slug: 'advanced-vocab-inuse-02',
    voice: 'female_narrator',
    text: "Okay chat, this is looking SO clutch right now — if they manage to pull this off, it's honestly going to be one of the best comebacks I've called all year. And remember that account everyone was debating earlier? Yeah — turns out it really was a smurf, total game-changer for how this match has gone. Honestly, the meta has shifted so much since that last patch that half of these picks wouldn't have even worked a month ago.",
  },
  {
    slug: 'advanced-vocab-inuse-03',
    voice: 'jm_husk',
    text: "The latest update has triggered what many are now calling the biggest shift in the meta this year. Several previously dominant characters received significant nerfs, while a number of underused options saw welcome buffs — a change long considered overdue by much of the community. Early matches suggest these adjustments have already begun reshaping which strategies competitive teams view as viable, and analysts expect the rankings to look noticeably different by the end of the month.",
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

  console.log('\n── LANGUAGE FOCUS / COLLOCATION EXAMPLES ──');
  for (const c of COLLOCATIONS) {
    const voiceId = VOICES[c.voice];
    console.log(`\n[${c.slug}]`);
    await generateAudio(c.text, voiceId, path.join(AUDIO_DIR, `${c.slug}.mp3`));
    await sleep(500);
  }

  console.log('\n── IN USE ──');
  for (const a of INUSE) {
    const voiceId = VOICES[a.voice];
    console.log(`\n[${a.slug}]`);
    await generateAudio(a.text, voiceId, path.join(AUDIO_DIR, `${a.slug}.mp3`));
    await sleep(600);
  }

  console.log('\n✅ All 27 advanced vocabulary (etymology, collocations & register) audio files generated!');
}

main().catch(e => { console.error(e); process.exit(1); });

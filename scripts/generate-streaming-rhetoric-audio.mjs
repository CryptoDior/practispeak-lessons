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

// ── VOCAB (word + example, rotating voices) ─────────────────────────────────
const VOCAB = [
  { slug: 'streaming-rhetoric-01', voice: 'mark',       word: 'engagement',   example: "The algorithm doesn't really care if people loved the stream — it cares whether they engaged with it, and for how long." },
  { slug: 'streaming-rhetoric-02', voice: 'lauren',     word: 'persona',      example: "Off camera, she's quiet and a little awkward — her on-stream persona is loud, fast-talking, and never runs out of things to say." },
  { slug: 'streaming-rhetoric-03', voice: 'jm_husk',    word: 'authenticity', example: "Audiences can usually tell the difference between authenticity and a performance of authenticity — and they tend to reward the real thing, eventually." },
  { slug: 'streaming-rhetoric-04', voice: 'juniper',    word: 'hook',         example: "You've got about three seconds to land a hook before most people swipe away to the next thing." },
  { slug: 'streaming-rhetoric-05', voice: 'george',     word: 'callout',      example: "The callout went up at midnight and had two hundred thousand views by morning — long before anyone involved had a chance to respond." },
  { slug: 'streaming-rhetoric-06', voice: 'sally',      word: 'clout',        example: "Half the arguments in that community aren't really about the issue — they're about who gets to walk away with more clout." },
  { slug: 'streaming-rhetoric-07', voice: 'shannon',    word: 'pivot',        example: "When the gaming content stopped performing, the whole channel pivoted to cooking videos almost overnight — and somehow it worked." },
  { slug: 'streaming-rhetoric-08', voice: 'female_gen', word: 'monetize',     example: "It took her two years of streaming for free before she had enough of an audience to seriously think about monetizing it." },
];

// ── LANGUAGE FOCUS PHRASE EXAMPLES (example sentence only) ──────────────────
const LANGFOCUS = [
  { slug: 'streaming-rhetoric-langfocus-01-example', voice: 'male_narrator',   text: "Who doesn't want to feel like they're part of something bigger than themselves?" },
  { slug: 'streaming-rhetoric-langfocus-02-example', voice: 'female_narrator', text: "Show up, speak up, and never apologize for taking up space." },
  { slug: 'streaming-rhetoric-langfocus-03-example', voice: 'jm_husk',         text: "We didn't have a studio. We didn't have a budget. We didn't even have a plan — we just had an audience who showed up anyway." },
  { slug: 'streaming-rhetoric-langfocus-04-example', voice: 'lauren',          text: "This is, without a doubt, the single greatest community on the entire internet." },
  { slug: 'streaming-rhetoric-langfocus-05-example', voice: 'mark',            text: "You — yes, you, scrolling past at one in the morning — you're exactly the person this was made for." },
  { slug: 'streaming-rhetoric-langfocus-06-example', voice: 'juniper',         text: "I've been doing this for six years, through three platform changes and two algorithm collapses, so when I say this works, I mean it." },
  { slug: 'streaming-rhetoric-langfocus-07-example', voice: 'shannon',         text: "I think about the kid watching this alone in their room, feeling like nobody understands them — and that's exactly who I'm doing this for." },
  { slug: 'streaming-rhetoric-langfocus-08-example', voice: 'sally',           text: "I'm not even that good at the game, honestly — I think people just like watching me lose with a smile on my face." },
];

// ── IN USE PARAGRAPHS ────────────────────────────────────────────────────────
const INUSE = [
  {
    slug: 'streaming-rhetoric-inuse-01',
    voice: 'mark',
    text: "Contemporary streaming culture runs on a small, recognizable set of rhetorical moves, repeated so often that audiences barely register them as persuasion at all. A creator opens with a hook calculated to survive the first three seconds of a scroll, builds momentum through anaphora and the rule of three, then closes the loop with a direct appeal to the very audience it has just spent several minutes constructing. None of this makes the appeal insincere — but it does mean that what looks like spontaneous connection is, more often than not, a carefully rehearsed structure wearing the costume of authenticity.",
  },
  {
    slug: 'streaming-rhetoric-inuse-02',
    voice: 'jm_husk',
    text: "Honestly, the biggest thing people get wrong is thinking charisma is something you either have or you don't. It's not — it's a set of tools, and you can absolutely learn them. Repetition in threes. Speaking directly to one imagined viewer instead of a faceless crowd. Telling a true story about yourself before you ever ask anyone for anything. None of that is manipulation, in my opinion — it's just knowing how to be heard in a room full of people shouting.",
  },
  {
    slug: 'streaming-rhetoric-inuse-03',
    voice: 'sally',
    text: "ok but has anyone else noticed every single streamer says some version of 'i almost didn't post this' right before the thing that obviously took them three weeks to plan?? like we see you. the 'i'm just a small creator' bit hits different when you've got 400k followers lol. not even mad about it, it clearly works, just funny how predictable it's gotten",
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

  console.log('\n── LANGUAGE FOCUS PHRASE EXAMPLES ──');
  for (const c of LANGFOCUS) {
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

  console.log('\n✅ All 27 streaming-rhetoric audio files generated!');
}

main().catch(e => { console.error(e); process.exit(1); });

/**
 * Audio generator — Esports & Competitive Gaming
 * Run from the practispeak-lessons root:
 *   node --env-file=.env.local scripts/generate-esports-audio.mjs
 */

import https from 'https';
import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const AUDIO_DIR = path.join(__dirname, '..', 'public', 'audio');
const API_KEY   = process.env.ELEVENLABS_API_KEY;
if (!API_KEY) throw new Error('Missing ELEVENLABS_API_KEY — add it to .env.local');

const ROTATION = [
  'n8kTUi6dVrplENT9Un56', // male narrator
  'vCZXQeSML7qJRTiADoTW', // female narrator
  'EkK5I93UQWFDigLMpZcX', // JM Husk   — male
  'l4Coq6695JDX9xtLqXDE', // Lauren    — female
  '1SM7GgM6IMuvQlz2BwM3', // Mark      — male
  'aMSt68OGf4xUZAnLpTU8', // Juniper   — female
  'uHoisgHFfUYZ3FULxcdM', // Shannon   — male
  'bGz4A6rl9U05wqaE3qt1', // Sally     — female
];
let rotIdx = 0;
const nextVoice = () => ROTATION[rotIdx++ % ROTATION.length];

// ── Vocabulary ────────────────────────────────────────────────────────────────
const vocabulary = [
  { slug: 'esports-vocab-01', word: 'Tournament',     example: "The tournament was held in front of 20,000 fans — the largest crowd in the game's history." },
  { slug: 'esports-vocab-02', word: 'Seeded',         example: "They were seeded first going into the championship — everyone expected them to make the final." },
  { slug: 'esports-vocab-03', word: 'Disqualified',   example: "The team was disqualified after a player was found using unauthorised software during the match." },
  { slug: 'esports-vocab-04', word: 'Sponsor',        example: "The team was sponsored by three major brands — their jerseys were covered in logos." },
  { slug: 'esports-vocab-05', word: 'Broadcast',      example: "The final was broadcast live to over 2 million viewers across three different streaming platforms." },
  { slug: 'esports-vocab-06', word: 'Roster',         example: "Three players were released from the roster before the season — the rebuild was complete." },
  { slug: 'esports-vocab-07', word: 'Meta',           example: "The meta was completely shifted by the latest patch — three characters were removed from every pro team's lineup." },
  { slug: 'esports-vocab-08', word: 'Patch',          example: "The patch was released two days before the tournament — teams had almost no time to adjust their strategies." },
];

// ── Phrase examples ────────────────────────────────────────────────────────────
const phraseExamples = [
  { slug: 'esports-01', text: "It was announced that the world championship would be held in Seoul for the second year in a row." },
  { slug: 'esports-02', text: "The player was banned for six months after testing positive for a prohibited substance during the tournament." },
  { slug: 'esports-03', text: "The match was decided by a single mistake in the final round — a missed shot that cost the team everything." },
  { slug: 'esports-04', text: "It is believed that the star player's contract was not renewed, though neither side has confirmed this officially." },
  { slug: 'esports-05', text: "The team has been signed by one of the largest esports organisations in North America in a multi-year deal." },
  { slug: 'esports-06', text: "The patch was introduced to address the dominant strategy that had made the last three tournaments predictable and repetitive." },
  { slug: 'esports-07', text: "According to reports, the organisation has been in negotiations with three international players for the past month." },
  { slug: 'esports-08', text: "The tournament is expected to attract over a million live viewers and offer a prize pool of five million dollars." },
];

// ── In Action paragraphs ───────────────────────────────────────────────────────
const inAction = [
  { slug: 'esports-inaction-01', text: "It was announced that one of the most decorated rosters in the game's history would be disbanded at the end of the season. According to reports, contract negotiations had broken down over salary disputes that began three months ago. It is believed that the star player will be free to sign with any organisation from January. The team has been signed by a new sponsor in the meantime, though the future of the competitive lineup remains unclear. The tournament next month is expected to be the squad's final appearance together." },
  { slug: 'esports-inaction-02', text: "People keep asking what went wrong in the final. Here's the honest breakdown: the match was decided by a single draft decision in game three — they picked into a losing composition and never recovered. The patch was introduced to weaken exactly the style of play they relied on, and they hadn't adapted their strategy at all. The player was banned from the last qualifier, so this was their first major event without him. The roster showed gaps. It's that simple. They were seeded first, and nobody expects to lose to a team ranked eighth. But that's esports." },
  { slug: 'esports-inaction-03', text: "And we are moments away from the end of this incredible final. This tournament was expected to be close — nobody predicted it would come down to the wire like this. The position has been taken, the objective has been secured, and the crowd here is on their feet. According to the analysts, this was the play all along — they had prepared this exact rotation in practice. The title is about to be claimed — and the trophy will be lifted by the team that was told, before the season started, that they had no chance." },
];

// ── Generator ─────────────────────────────────────────────────────────────────
function generateAudio(text, voiceId, outputPath) {
  if (fs.existsSync(outputPath)) { console.log('  skip', path.basename(outputPath)); return Promise.resolve(); }
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ text, model_id: 'eleven_turbo_v2_5', voice_settings: { stability: 0.5, similarity_boost: 0.75, speed: 0.75 } });
    const req = https.request({ hostname: 'api.elevenlabs.io', path: `/v1/text-to-speech/${voiceId}`, method: 'POST', headers: { 'Content-Type': 'application/json', 'xi-api-key': API_KEY, 'Accept': 'audio/mpeg' } }, res => {
      if (res.statusCode !== 200) { const c = []; res.on('data', d => c.push(d)); res.on('end', () => reject(new Error(`ElevenLabs ${res.statusCode}: ${Buffer.concat(c)}`))); return; }
      const out = fs.createWriteStream(outputPath);
      res.pipe(out);
      out.on('finish', () => { console.log('  ✓', path.basename(outputPath)); resolve(); });
      out.on('error', reject);
    });
    req.on('error', reject); req.write(body); req.end();
  });
}
const delay = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  console.log('\n🎙️  Esports & Competitive Gaming — Audio Generation\n');

  console.log('── Vocabulary ──');
  for (const { slug, word, example } of vocabulary) {
    const voice = nextVoice();
    await generateAudio(word,    voice, path.join(AUDIO_DIR, `${slug}.mp3`));       await delay(350);
    await generateAudio(example, voice, path.join(AUDIO_DIR, `${slug}-example.mp3`)); await delay(350);
  }

  console.log('\n── Phrase Examples ──');
  for (const { slug, text } of phraseExamples) {
    await generateAudio(text, nextVoice(), path.join(AUDIO_DIR, `${slug}-example.mp3`));
    await delay(350);
  }

  console.log('\n── In Action Paragraphs ──');
  for (const { slug, text } of inAction) {
    await generateAudio(text, nextVoice(), path.join(AUDIO_DIR, `${slug}.mp3`));
    await delay(400);
  }

  console.log('\n✅ Done! Now run:');
  console.log('   git add public/esports-competitive-gaming.html data/lessons/esports-competitive-gaming.ts data/lessons/index.ts scripts/generate-esports-audio.mjs public/audio/esports-*.mp3');
  console.log('   git commit -m "Add Esports & Competitive Gaming lesson"');
  console.log('   git push origin main');
})();

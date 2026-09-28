/**
 * Life, Decoded — Episode 2: "Meiosis — Splitting the Code in Half"
 * ElevenLabs audio generator
 * ----------------------------------------------------
 * Usage (from the project root, in a terminal that has internet access —
 * this will NOT work from inside Cowork's sandbox, run it on your own machine):
 *
 *   node --env-file=.env.local scripts/generate-meiosis-podcast-audio.mjs
 *
 * What it does:
 *  1. Generates one audio clip per line of dialogue (Naledi / Michael), using
 *     the ELEVENLABS_API_KEY already in your .env.local.
 *  2. Skips any file that already exists, so if a run gets interrupted or a
 *     line fails, just run the script again and it'll only fill the gaps.
 *  3. This episode is locked to "eleven_v3" per the source script's own
 *     production note (audio tags like [warmly]/[curious]/[laughs]/[impressed]/
 *     [confident]/[thoughtful] are read as delivery direction on v3). If your
 *     account/plan doesn't have v3 access, it automatically falls back to
 *     eleven_turbo_v2_5 with the tags stripped out (so they don't get read
 *     aloud literally) — but since you specifically want v3 for this one,
 *     the script prints a clear warning if any line had to fall back, so you
 *     know to check your plan / re-run later.
 *  4. Stitches every clip together, in order, into one final podcast file —
 *     using ffmpeg if it's installed (cleaner, with short pauses between
 *     lines and longer pauses at each PART transition), or a simple raw
 *     concatenation fallback if ffmpeg isn't found.
 *
 * Excluded from the voice track (per the source PDF's own production note):
 *  - The `> EXAM TIP:` callout blocks and the closing Quick-Reference Recap
 *    (reference material for show notes, not meant to be spoken).
 *  - The `PART n: ...` section headers themselves aren't voiced by either
 *    speaker in the source script (only NALEDI/MICHAEL lines are), so they're
 *    treated as structural markers — a longer pause is inserted at each of
 *    these transitions instead, so the pacing still "feels" the section break.
 *
 * Output:
 *   podcasts/tmp/meiosis-chapter2/*.mp3   (individual clips, kept for resuming)
 *   podcasts/Meiosis-Chapter2-Podcast.mp3 (final stitched episode)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-meiosis-podcast-audio.mjs');
  process.exit(1);
}

const VOICES = {
  NALEDI: 'ZtcPZrt9K4w8e1OB9M6w',  // Mia Moore — Studio Presenter
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
};

const PRIMARY_MODEL = 'eleven_v3';
const FALLBACK_MODEL = 'eleven_turbo_v2_5';

const ROOT = path.resolve('.');
const TMP_DIR = path.join(ROOT, 'podcasts', 'tmp', 'meiosis-chapter2');
const OUT_FILE = path.join(ROOT, 'podcasts', 'Meiosis-Chapter2-Podcast.mp3');

// ─────────────────────────────────────────────────────────────────────────
// SCRIPT — ordered dialogue segments only. PART headers, EXAM TIP callouts,
// and the closing Quick-Reference Recap are intentionally left out (they're
// reference/show-notes material, not spoken dialogue in the source script).
// `newPart: true` marks the first line after a PART header, so the stitcher
// inserts a longer pause there instead of a short one.
// ─────────────────────────────────────────────────────────────────────────
const S = [
  { s: 'NALEDI', t: `[warmly] Welcome back to Life, Decoded — Chapter 2. Last time we built DNA up from scratch: nucleotides, the double helix, replication, transcription, translation, all of it.` },
  { s: 'MICHAEL', t: `[confident] Yeah, I feel like I actually own that chapter now. So what's today?` },
  { s: 'NALEDI', t: `Today we take that DNA — sitting safely packaged into chromosomes inside the nucleus — and we watch a cell do something genuinely strange with it: split it in half, on purpose, to make sex cells.` },
  { s: 'MICHAEL', t: `[curious] Half? Why would you ever want less DNA?` },
  { s: 'NALEDI', t: `That is exactly the right first question, and it's going to be our whole opening act. Today's topic is meiosis.` },
  { s: 'MICHAEL', t: `I've heard this word thrown around next to "mitosis" so many times, and I genuinely couldn't tell you the difference under pressure.` },
  { s: 'NALEDI', t: `[laughs] By the end of this episode you will be able to, cold, in an exam. Let's get into it.` },

  // PART 1: A Quick Rewind — What Mitosis Already Does
  { s: 'NALEDI', t: `Before we touch meiosis, let's quickly plant a flag on mitosis, because the whole episode is basically a running comparison against it.`, newPart: true },
  { s: 'MICHAEL', t: `Okay — mitosis, from what I remember, is just... normal cell division?` },
  { s: 'NALEDI', t: `Right idea. When a cell divides by mitosis, it produces two exact copies of the mother cell. Cells divide by mitosis for growth and repair — worn-out or damaged cells get replaced by mitotic division of somatic cells, your body cells. Some organisms even reproduce asexually purely through mitosis.` },
  { s: 'MICHAEL', t: `So mitosis is the "everyday maintenance" kind of division.` },
  { s: 'NALEDI', t: `Exactly — copy, copy, copy, identical every time. Meiosis is a completely different kind of division. It's a special type of cell division that halves the number of chromosomes, and it produces four genetically different haploid daughter cells from one diploid cell.` },
  { s: 'MICHAEL', t: `Four cells instead of two, and they're not identical to each other or to the parent cell?` },
  { s: 'NALEDI', t: `Exactly right — hold onto that, because it's the single biggest contrast we'll come back to again and again today.` },

  // PART 2: Why Would a Cell Ever Want to Halve Itself?
  { s: 'MICHAEL', t: `Okay, back to my question — why deliberately make a cell with less genetic material?`, newPart: true },
  { s: 'NALEDI', t: `Because of what happens next: fertilisation. Meiosis produces gametes — sperm and egg cells — and those gametes are haploid, meaning they carry only one complete set of chromosomes instead of two.` },
  { s: 'MICHAEL', t: `And then a sperm and an egg fuse during fertilisation...` },
  { s: 'NALEDI', t: `Exactly — and if both of those gametes were full, normal diploid cells, fusing them would double the chromosome number every single generation. Meiosis is what prevents that doubling.` },
  { s: 'MICHAEL', t: `Ohh. So it's not that the cell "wants less," it's that it's pre-emptively cancelling out the doubling that's about to happen at fertilisation.` },
  { s: 'NALEDI', t: `That's precisely it. Meiosis is important for three connected reasons: it produces haploid gametes, it overcomes the doubling effect that fertilisation would otherwise cause on chromosome number across generations, and — this is the bonus feature — it introduces genetic variation.` },
  { s: 'MICHAEL', t: `So it's simultaneously solving a maths problem — keeping the chromosome count stable — and generating diversity?` },
  { s: 'NALEDI', t: `Exactly, two jobs in one process. And in animals, this all happens in the sex organs — the ovaries and testes — in a process called gametogenesis. In plants, it's a bit different — meiosis produces spores, which are used for reproduction in mosses and ferns. In flowering plants, angiosperms, meiosis happens in the anther and in the ovule.` },
  { s: 'MICHAEL', t: `So "meiosis" isn't just a human-reproduction thing, it's a whole-kingdom-of-life thing.` },
  { s: 'NALEDI', t: `Exactly — anywhere sexual reproduction happens, meiosis is doing the groundwork.` },

  // PART 3: Key Terminology — The Words You Need Cold
  { s: 'MICHAEL', t: `Before we watch the process happen, I feel like there's a whole vocabulary list I'm shaky on. Chromosome, chromatid, centromere... they all sound similar.`, newPart: true },
  { s: 'NALEDI', t: `Very fair, and worth locking down properly before we go any further, because these words get reused constantly. Let's start with chromosome — a threadlike structure made of DNA and protein, found in the nucleus, carrying genetic information in the form of genes.` },
  { s: 'MICHAEL', t: `Okay, and chromatid?` },
  { s: 'NALEDI', t: `A chromatid is one of the two identical strands of a replicated chromosome. So once a chromosome has copied itself, it's made of two chromatids.` },
  { s: 'MICHAEL', t: `And those two chromatids are stuck together at...?` },
  { s: 'NALEDI', t: `The centromere — the region where the two chromatids of a chromosome are held together.` },
  { s: 'MICHAEL', t: `Okay, chromosome, chromatid, centromere — got it. What about "homologous"? I keep seeing that word.` },
  { s: 'NALEDI', t: `Homologous chromosomes are a pair of chromosomes of the same shape and size, carrying similar genes for each characteristic, occupying the same position — one member of the pair from the mother, one from the father.` },
  { s: 'MICHAEL', t: `So it's not two identical chromosomes, it's more like... two different editions of the same book. Same chapters, same order, but the actual wording might differ slightly.` },
  { s: 'NALEDI', t: `[impressed] That is a genuinely excellent way to picture it — steal that one. Now, when a pair of homologous chromosomes lie next to each other, physically in contact, at the point where crossing over is about to happen — that structure is called a bivalent.` },
  { s: 'MICHAEL', t: `Bivalent — two chromosomes, paired up and touching.` },
  { s: 'NALEDI', t: `Exactly. Two more quick ones: an unreplicated chromosome has a single double-stranded DNA molecule. A replicated chromosome has two identical double-stranded DNA molecules — which is what gives you those two chromatids joined at a centromere.` },
  { s: 'MICHAEL', t: `So "replicated" versus "unreplicated" is really just describing whether DNA replication has already happened to that chromosome or not.` },
  { s: 'NALEDI', t: `Exactly right — and remember from last episode, DNA replication happens during interphase, the phase of the cell cycle before division actually starts.` },

  // PART 4: Diploid, Haploid, and Where the Chromosomes Actually Sit
  { s: 'MICHAEL', t: `Okay, "diploid" and "haploid" — I use these words but I want the precise definitions.`, newPart: true },
  { s: 'NALEDI', t: `Simple once you see it: diploid, written 2n, means a cell has two complete sets of chromosomes. Haploid, written n, means a cell has one complete set.` },
  { s: 'MICHAEL', t: `And a gene — is that the same as a chromosome?` },
  { s: 'NALEDI', t: `No — a gene is a segment of DNA within a chromosome that contains the code for a particular characteristic. So the chromosome is the whole book, a gene is one specific instruction inside it.` },
  { s: 'MICHAEL', t: `Got it. Now, what's a karyotype? I've definitely seen that word on a diagram of paired-up chromosomes before.` },
  { s: 'NALEDI', t: `A karyotype is a representation of the number, shape, and arrangement of a full set of chromosomes in the nucleus of a somatic cell. In humans, that's 46 chromosomes, arranged as 23 homologous pairs.` },
  { s: 'MICHAEL', t: `And within those 23 pairs, are they all the same "type" of chromosome?` },
  { s: 'NALEDI', t: `Good instinct to ask — no. The first 22 pairs are called autosomes — they control the general appearance, structure, and functioning of the body. The 23rd pair is different: those are the gonosomes, or sex chromosomes — XX or XY — and they're the pair responsible for sex determination.` },
  { s: 'MICHAEL', t: `So 22 pairs building "the body," and one special pair deciding "male or female."` },
  { s: 'NALEDI', t: `Exactly that split. Now, where do these chromosome numbers actually apply? Somatic cells — your ordinary body cells, everything except gametes — are diploid, they have two sets of chromosomes, and they're produced through mitosis. Sex cells, the gametes — sperm and egg — are haploid, one set of chromosomes, and they're produced through meiosis.` },
  { s: 'MICHAEL', t: `So the "2n versus n" split maps directly onto "made by mitosis versus made by meiosis."` },
  { s: 'NALEDI', t: `Precisely — and that's really the whole engine of today's episode.` },

  // PART 5: Why DNA Replication Matters Before Meiosis Even Starts
  { s: 'MICHAEL', t: `Okay, one more piece before we actually watch meiosis happen — you mentioned DNA replication has to happen first?`, newPart: true },
  { s: 'NALEDI', t: `It does, and it's worth understanding why, because it explains a lot of what we're about to see. Every species has a characteristic number of chromosomes, floating in the nucleoplasm of the nucleus. When the cell isn't dividing, that genetic material actually forms a tangled chromatin network — not neat, distinct chromosomes yet.` },
  { s: 'MICHAEL', t: `Right, we covered that "tangled thread versus organised suitcase" idea last episode.` },
  { s: 'NALEDI', t: `Exactly the same concept. Now, during interphase, DNA replication takes place — single-stranded chromosomes become double-stranded. Each chromosome ends up consisting of two chromatids, joined by a centromere, exactly like we just defined.` },
  { s: 'MICHAEL', t: `So by the time meiosis actually kicks off, every chromosome already has its "twin" chromatid attached?` },
  { s: 'NALEDI', t: `Exactly — and that's essential, because it ensures the hereditary material can be shared properly among all the daughter cells that are about to be formed. Without that replication step happening first, there simply wouldn't be enough genetic material to distribute into four separate cells.` },
  { s: 'MICHAEL', t: `Makes sense — you can't divide something four ways if you only made one copy to start with.` },
  { s: 'NALEDI', t: `Exactly the logic.` },

  // PART 6: Meiosis I, Prophase I — Where All the Interesting Stuff Happens
  { s: 'NALEDI', t: `Alright — time to actually watch this process unfold. A quick note before we dive in: explaining meiosis with a real human cell, all 46 chromosomes, gets messy fast. So — same principle applies to every cell — we're going to picture a simplified cell with just four chromosomes.`, newPart: true },
  { s: 'MICHAEL', t: `Four chromosomes, got it, easier to picture.` },
  { s: 'NALEDI', t: `Good. Now — meiosis happens in two divisions: Meiosis I and Meiosis II. Meiosis I is called a reduction division, because it's the step that actually reduces the diploid chromosome number down to haploid.` },
  { s: 'MICHAEL', t: `And Meiosis II?` },
  { s: 'NALEDI', t: `We'll get there — hold that thought. Each division is broken into the same four phases you already know from mitosis: Prophase, Metaphase, Anaphase, Telophase. Let's start with Prophase I, and this is genuinely the busiest, most exam-tested phase in the whole chapter.` },
  { s: 'MICHAEL', t: `Walk me through it.` },
  { s: 'NALEDI', t: `First — the nuclear membrane and the nucleolus start to disappear. At the same time, the centrosome splits, and the two centrioles move apart, forming spindle fibres between them.` },
  { s: 'MICHAEL', t: `Same opening moves as mitosis, basically.` },
  { s: 'NALEDI', t: `Exactly, this part is familiar. Now here's where it diverges: the chromatin network condenses into individual chromosomes, and — this is the key new event — pairs of homologous chromosomes line up right next to each other, forming a bivalent.` },
  { s: 'MICHAEL', t: `The word we just defined a minute ago.` },
  { s: 'NALEDI', t: `Exactly, and this is precisely the moment it happens. Now, once that bivalent has formed, the inner chromatids from each of the two homologous chromosomes overlap and touch each other, at a point called the chiasma — plural, chiasmata.` },
  { s: 'MICHAEL', t: `And that's the site of...` },
  { s: 'NALEDI', t: `Crossing over — exactly. Segments of the chromatids actually break off and get exchanged between the two homologous chromosomes, resulting in a genuine exchange of genetic material.` },
  { s: 'MICHAEL', t: `So it's not just "touching," it's actually swapping physical chunks of DNA between the maternal and paternal chromosome?` },
  { s: 'NALEDI', t: `Precisely — and this process is what brings about genetic variation. Think of it as two very similar books lying open side by side, and a few pages get physically torn out and swapped between them.` },
  { s: 'MICHAEL', t: `That's a great image — same basic story, slightly different pages now.` },
  { s: 'NALEDI', t: `Exactly — and each resulting chromosome now carries a unique mix of maternal and paternal genetic material that didn't exist in either parent chromosome before.` },

  // PART 7: Meiosis I — Metaphase I, Anaphase I, Telophase I
  { s: 'MICHAEL', t: `Okay, bivalents have formed, crossing over has happened. What's next?`, newPart: true },
  { s: 'NALEDI', t: `Metaphase I. The homologous chromosomes — still paired up as bivalents — move to the middle of the cell, the equator. The two homologous chromosomes in each pair sit on opposite sides of the equator, parallel to each other.` },
  { s: 'MICHAEL', t: `And which pair sits on which side — is that fixed, or random?` },
  { s: 'NALEDI', t: `Totally up to chance — and this matters a lot. Which chromosome of a homologous pair ends up facing which pole is called random arrangement, sometimes called random assortment, and it brings about further variation, completely separate from crossing over.` },
  { s: 'MICHAEL', t: `So we've now got two independent sources of variation stacking on top of each other — crossing over swapping material within pairs, and random arrangement shuffling which whole chromosome goes to which side.` },
  { s: 'NALEDI', t: `Exactly — and we'll come back to just how much variation that generates in a moment, because the number is bigger than most people expect. Each chromosome in the pair becomes attached to a spindle thread by its centromere, ready for the next step.` },
  { s: 'MICHAEL', t: `Which is Anaphase I?` },
  { s: 'NALEDI', t: `Right. In Anaphase I, one whole chromosome from each homologous pair is pulled to opposite poles by the contraction of the spindle fibres. This separates the homologous chromosomes — one to each pole.` },
  { s: 'MICHAEL', t: `Hang on — a whole chromosome, meaning both chromatids stay attached together? It's not splitting at the centromere yet?` },
  { s: 'NALEDI', t: `[impressed] Exactly right, and that is the detail that trips people up most in this whole chapter — write that one down. In Anaphase I, the centromere does not split. The two chromatids travel to the pole together, still joined. What separates is the pair of homologous chromosomes, not the two chromatids of a single chromosome.` },
  { s: 'MICHAEL', t: `Okay, so I need to remember: Anaphase I separates homologous pairs. Something else, later, separates the chromatids.` },
  { s: 'NALEDI', t: `Exactly — hold that thought, it's coming very soon. Finally, Telophase I: a new nuclear membrane forms around the group of chromosomes at each pole, the nucleolus returns, and cytokinesis — division of the cytoplasm — splits the mother cell into two daughter cells.` },
  { s: 'MICHAEL', t: `So at the end of Meiosis I, we've gone from one cell to two.` },
  { s: 'NALEDI', t: `Exactly — and here's the important part to lock in: each of those two daughter cells now has half the number of chromosomes of the original cell, and each one has a slightly different genetic make-up, thanks to crossing over and random arrangement.` },
  { s: 'MICHAEL', t: `So Meiosis I alone already achieves the "reduction" part — diploid down to haploid?` },
  { s: 'NALEDI', t: `Exactly right — that's precisely why Meiosis I is called the reduction division.` },

  // PART 8: Meiosis II — Same Shape, Very Different Job
  { s: 'MICHAEL', t: `Okay, so we've got two haploid cells at the end of Meiosis I. Are we done?`, newPart: true },
  { s: 'NALEDI', t: `Not quite — this is where Meiosis II comes in, and it happens in both of the daughter cells produced by Meiosis I, simultaneously.` },
  { s: 'MICHAEL', t: `So the whole four-phase cycle just... runs again?` },
  { s: 'NALEDI', t: `It does, and here's a genuinely useful way to think about Meiosis II: it looks almost exactly like an ordinary mitotic division, just happening to a haploid cell instead of a diploid one.` },
  { s: 'MICHAEL', t: `Interesting — so if I already know mitosis cold, Meiosis II should feel familiar.` },
  { s: 'NALEDI', t: `Very much so. Prophase II: nuclear membrane and nucleolus start to disappear again, the centrosome splits into two centrioles, and a new spindle forms. But here's the key visual difference from Prophase I — the chromosomes are not in pairs this time. No bivalents.` },
  { s: 'MICHAEL', t: `Right, because the homologous partner already left in Meiosis I — there's nothing left to pair with.` },
  { s: 'NALEDI', t: `Exactly. Just remember: each chromosome is still made of two chromatids at this point — replication only happened once, back before Meiosis I began.` },
  { s: 'MICHAEL', t: `Okay — Metaphase II next?` },
  { s: 'NALEDI', t: `Right. In Metaphase II, the single chromosomes — not pairs — arrange themselves randomly along the equator, with the centromere in line with the equatorial plane. And just like before, which chromatid ends up facing which pole is totally up to chance. Each chromosome becomes attached to a spindle fibre.` },
  { s: 'MICHAEL', t: `And Anaphase II — this is where the chromatids finally split?` },
  { s: 'NALEDI', t: `Exactly right — this is the moment. In Anaphase II, the centromere splits, and the two chromatids of each chromosome are pulled to opposite poles.` },
  { s: 'MICHAEL', t: `So Anaphase I separates homologous chromosomes, and Anaphase II separates sister chromatids. Two different kinds of "splitting apart," at two different stages.` },
  { s: 'NALEDI', t: `[impressed] That's exactly the distinction examiners are testing when they ask you to compare the two anaphases. Finally, Telophase II: a new nuclear membrane forms around the now-unreplicated chromosomes at each pole, and cytokinesis splits each cell into two new cells.` },
  { s: 'MICHAEL', t: `And since Meiosis II happened in both cells from Meiosis I at once...` },
  { s: 'NALEDI', t: `Exactly — you now end up with four daughter cells total. These four cells are haploid, and genetically different from each other, thanks to crossing over and random arrangement happening back in Meiosis I — and again independently in Meiosis II.` },
  { s: 'MICHAEL', t: `Four genetically unique haploid cells, from one diploid starting cell. Full circle back to the very first thing you told me today.` },
  { s: 'NALEDI', t: `Exactly — that's the whole outcome of meiosis, achieved.` },

  // PART 9: Michael Tries the Full Walkthrough
  { s: 'NALEDI', t: `Before we move on, try running the whole thing back to me, start to finish, in your own words.`, newPart: true },
  { s: 'MICHAEL', t: `Okay, deep breath. One diploid cell, chromosomes already replicated during interphase. Meiosis I: Prophase I — homologous chromosomes pair up into bivalents, crossing over happens at the chiasmata, swapping genetic material. Metaphase I — bivalents line up at the equator, randomly arranged. Anaphase I — whole homologous chromosomes get pulled apart to opposite poles, centromeres stay intact. Telophase I — two haploid cells form, each chromosome still made of two chromatids. Then Meiosis II happens in both of those cells: Prophase II — chromosomes condense again, no pairs this time. Metaphase II — single chromosomes line up at the equator. Anaphase II — centromeres finally split, sister chromatids pulled apart. Telophase II — four haploid daughter cells form, each genetically different from the others.` },
  { s: 'NALEDI', t: `[impressed] Michael. Word for word, that is a full-marks answer to "describe the process of meiosis." Genuinely excellent.` },
  { s: 'MICHAEL', t: `[laughs] I surprised myself again.` },

  // PART 10: Why Crossing Over and Random Arrangement Actually Matter
  { s: 'MICHAEL', t: `Okay, we've mentioned "genetic variation" a lot today. Can we actually see how much variation this creates?`, newPart: true },
  { s: 'NALEDI', t: `Great instinct — let's make it concrete. Crossing over brings about an exchange of genetic material during gamete formation, resulting in new genetic combinations. This means the gametes produced will give rise to individuals who are genetically different from their parents and from their siblings.` },
  { s: 'MICHAEL', t: `And random arrangement stacks on top of that?` },
  { s: 'NALEDI', t: `Exactly. Picture our simplified four-chromosome cell again. At Metaphase I, which homologous chromosome faces which pole is random — that alone creates multiple possible outcomes. Then, independently, at Metaphase II, which chromatid faces which pole is also random. Multiply those independent random choices together, across every homologous pair, and you get an enormous number of possible gamete combinations from just one individual.` },
  { s: 'MICHAEL', t: `So even without crossing over, just the "which side does each chromosome land on" shuffling alone produces huge variety.` },
  { s: 'NALEDI', t: `Exactly — and crossing over then multiplies that variety even further, because now the chromosomes themselves aren't even identical to the originals anymore, since they've swapped segments.` },
  { s: 'MICHAEL', t: `So really, meiosis has two independent shuffling mechanisms working at once — crossing over scrambling the contents of each chromosome, and random arrangement scrambling which chromosome and chromatid ends up where.` },
  { s: 'NALEDI', t: `That's a genuinely excellent synthesis, and exactly the kind of two-mechanism answer a "how does meiosis create variation" question is looking for.` },

  // PART 11: Meiosis I vs Meiosis II — The Direct Comparison
  { s: 'MICHAEL', t: `Can we put Meiosis I and Meiosis II head-to-head? I want a clean comparison in my head.`, newPart: true },
  { s: 'NALEDI', t: `Perfect timing, since this is a very commonly tested table. Five points of comparison. First — arrangement at the equator: in Meiosis I, chromosomes arrange in homologous pairs; in Meiosis II, chromosomes line up individually.` },
  { s: 'MICHAEL', t: `Second?` },
  { s: 'NALEDI', t: `What actually moves to the poles: in Meiosis I, whole chromosomes move to opposite poles; in Meiosis II, chromatids move to opposite poles.` },
  { s: 'MICHAEL', t: `Third — number of cells formed?` },
  { s: 'NALEDI', t: `Two cells are formed at the end of Meiosis I; four cells are formed at the end of Meiosis II.` },
  { s: 'MICHAEL', t: `Fourth, chromosome number?` },
  { s: 'NALEDI', t: `The chromosome number is halved during Meiosis I — diploid to haploid. During Meiosis II, the chromosome number stays the same — it remains haploid throughout.` },
  { s: 'MICHAEL', t: `And the fifth?` },
  { s: 'NALEDI', t: `Crossing over: it takes place during Meiosis I, and it does not take place during Meiosis II.` },
  { s: 'MICHAEL', t: `So if I had to summarise the whole difference in one line: Meiosis I is the division that reduces and shuffles, Meiosis II is the division that just tidies up and separates the leftover chromatids.` },
  { s: 'NALEDI', t: `That's a great one-line summary — precise and exam-ready.` },

  // PART 12: Meiosis vs Mitosis — The Full Comparison
  { s: 'MICHAEL', t: `Let's do the big one now — meiosis against mitosis directly.`, newPart: true },
  { s: 'NALEDI', t: `Let's do it properly. Location first: mitosis occurs in body cells, somatic cells; meiosis occurs in the sex organs — testes and ovaries.` },
  { s: 'MICHAEL', t: `Divisions?` },
  { s: 'NALEDI', t: `Both karyokinesis — division of the nucleus — and cytokinesis — division of the cytoplasm — occur once in mitosis. In meiosis, both occur twice.` },
  { s: 'MICHAEL', t: `Number of daughter cells, and how they compare to the parent?` },
  { s: 'NALEDI', t: `Mitosis: two daughter cells formed, genetically identical to one another and to the parent cell. Meiosis: four daughter cells formed, genetically different from each other and from the parent cell.` },
  { s: 'MICHAEL', t: `Chromosome number?` },
  { s: 'NALEDI', t: `Remains constant in mitosis. Halved in meiosis.` },
  { s: 'MICHAEL', t: `And crossing over — I'm guessing that's a no for mitosis, same as before?` },
  { s: 'NALEDI', t: `Exactly — crossing over does not occur in mitosis, but it does occur in meiosis, specifically in Prophase I.` },
  { s: 'MICHAEL', t: `[thoughtful] Actually, here's something interesting — earlier you said Meiosis II looks a lot like mitosis. Is that actually a formal similarity, or just a teaching comparison?` },
  { s: 'NALEDI', t: `It's a genuine, testable similarity. The only real overlap between the two processes is between the phases of mitosis — Prophase, Metaphase, Anaphase — and the phases of Meiosis II — Prophase II, Metaphase II, Anaphase II. Both involve single chromosomes lining up individually and chromatids being pulled apart at the centromere.` },
  { s: 'MICHAEL', t: `So you could almost describe Meiosis II as "mitosis performed on a haploid cell."` },
  { s: 'NALEDI', t: `That's actually a really solid mental shortcut — as long as you remember Meiosis I is the genuinely different, extra step that comes before it.` },

  // PART 13: When Meiosis Goes Wrong — Non-Disjunction
  { s: 'MICHAEL', t: `Okay, this whole process sounds incredibly precise — chromosomes pairing up correctly, splitting apart at exactly the right moment. Does it ever go wrong?`, newPart: true },
  { s: 'NALEDI', t: `It can, yes, and when it does, we call it non-disjunction — homologous chromosomes fail to separate correctly during Anaphase I, or sister chromatids fail to separate correctly during Anaphase II.` },
  { s: 'MICHAEL', t: `So it can go wrong at either of the two anaphases we talked about?` },
  { s: 'NALEDI', t: `Exactly, and the two failures look slightly different. If non-disjunction happens in Anaphase I, a whole homologous pair fails to separate — it moves to one pole together, leaving the other pole with nothing for that chromosome at all.` },
  { s: 'MICHAEL', t: `And if it happens in Anaphase II?` },
  { s: 'NALEDI', t: `Then it's the sister chromatids of a single chromosome that fail to split apart, so one pole ends up with both chromatids, and the other pole ends up with none.` },
  { s: 'MICHAEL', t: `Either way, the result is a gamete with the wrong number of chromosomes?` },
  { s: 'NALEDI', t: `Exactly — some gametes end up with an extra chromosome, and some end up missing one entirely. And here's the consequence that matters most: if a gamete with an abnormal chromosome number goes on to fuse with a normal gamete during fertilisation, the resulting zygote will have an incorrect chromosome count too.` },
  { s: 'MICHAEL', t: `So one small error, right at a single anaphase, can end up affecting every single cell of the organism that develops from that zygote.` },
  { s: 'NALEDI', t: `Exactly — because every one of those future cells gets built by mitosis, copying that same incorrect chromosome number forward.` },

  // PART 14: Down Syndrome — Non-Disjunction in the Real World
  { s: 'MICHAEL', t: `Is there a real, well-known example of this happening?`, newPart: true },
  { s: 'NALEDI', t: `The classic one is Down syndrome. If there's non-disjunction of chromosome pair 21 specifically, it leads to the formation of an abnormal gamete carrying an extra copy of chromosome 21.` },
  { s: 'MICHAEL', t: `So instead of the normal 23 chromosomes in that gamete, it's got 24?` },
  { s: 'NALEDI', t: `Exactly. And if that abnormal gamete — with the extra chromosome 21 — fuses with a completely normal gamete during fertilisation, you get a zygote with 47 chromosomes instead of the usual 46. That's Down syndrome, also called trisomy 21 — "tri" for three copies of chromosome 21, instead of the normal two.` },
  { s: 'MICHAEL', t: `And this can happen whether the non-disjunction occurred in Anaphase I or Anaphase II?` },
  { s: 'NALEDI', t: `Correct — either anaphase can be the point of failure, the end result is the same extra copy ending up in the gamete.` },
  { s: 'MICHAEL', t: `What does trisomy 21 actually do to a person, physically?` },
  { s: 'NALEDI', t: `It leads to a recognisable set of features: upwardly slanted eyes, a small nose with a flat bridge, varying degrees of intellectual disability, decreased muscle tone, hearing loss, and heart defects.` },
  { s: 'MICHAEL', t: `[thoughtful] Is there anything that makes non-disjunction more or less likely to happen in the first place?` },
  { s: 'NALEDI', t: `Yes — the chance of non-disjunction occurring in sex cells increases with the age of a parent, especially the mother. It's currently incurable. Because of that age-related risk, it's advisable for older parents to have the foetus tested while it's still in the uterus.` },
  { s: 'MICHAEL', t: `How does that testing actually work?` },
  { s: 'NALEDI', t: `Through a procedure called amniocentesis — amniotic fluid is removed from around the foetus, and the karyotype of foetal cells found in that fluid can be analysed. That lets parents know, ahead of time, whether the foetus has a normal or abnormal chromosome number — and make informed decisions from there.` },

  // PART 15: Beyond Down Syndrome — Other Non-Disjunction Disorders
  { s: 'MICHAEL', t: `Is chromosome 21 the only one this happens to, or can non-disjunction affect other chromosomes too?`, newPart: true },
  { s: 'NALEDI', t: `Good question — it can affect any chromosome, including the sex chromosomes themselves, the gonosomes we talked about earlier. Two other well-known examples are worth knowing. Klinefelter syndrome results from an extra X chromosome in a male, giving an XXY pattern instead of the usual XY.` },
  { s: 'MICHAEL', t: `What does that lead to?` },
  { s: 'NALEDI', t: `A male with some female physical traits — such as breast development — and infertility is common.` },
  { s: 'MICHAEL', t: `And the other one?` },
  { s: 'NALEDI', t: `Turner syndrome — this one's the opposite kind of error, a missing chromosome rather than an extra one. It results from a missing second sex chromosome in females, giving an X0 pattern instead of XX. It's associated with short stature, underdeveloped ovaries, and a webbed neck.` },
  { s: 'MICHAEL', t: `So between Down syndrome, Klinefelter, and Turner, we've actually got a nice little set — one autosomal example, and two sex-chromosome examples, one with an extra chromosome and one with a missing one.` },
  { s: 'NALEDI', t: `[impressed] That's a genuinely well-organised way to hold all three in your head — autosomal trisomy versus sex-chromosome trisomy versus sex-chromosome monosomy. Exactly the kind of structured comparison examiners reward.` },

  // OUTRO: Wrapping It Up
  { s: 'NALEDI', t: `[warmly] Alright, Michael — same challenge as last time. Thirty seconds, the whole chapter, from memory.`, newPart: true },
  { s: 'MICHAEL', t: `Okay. Meiosis is a special division that halves the chromosome number, turning one diploid cell into four genetically different haploid cells — it happens in the ovaries and testes for gamete formation, and in the anther and ovule in flowering plants. Before it starts, DNA replicates in interphase so every chromosome has two chromatids. Meiosis I is the reduction division: Prophase I forms bivalents from homologous chromosomes and crossing over happens at the chiasmata, swapping genetic material; Metaphase I lines those pairs up randomly at the equator; Anaphase I splits whole homologous chromosomes to opposite poles, centromeres intact; Telophase I gives two haploid cells. Then Meiosis II runs in both of those cells, and it looks a lot like ordinary mitosis: Prophase II, single chromosomes, no pairs; Metaphase II, single chromosomes at the equator; Anaphase II, centromeres finally split and sister chromatids separate; Telophase II gives four haploid cells total. Crossing over and random arrangement of chromosomes and chromatids are what generate genetic variation between all four cells. When it goes wrong, that's non-disjunction — chromosomes or chromatids failing to separate — and it can lead to conditions like Down syndrome, trisomy 21, or sex-chromosome conditions like Klinefelter and Turner syndrome, which is why older mothers are offered amniocentesis to check the foetal karyotype.` },
  { s: 'NALEDI', t: `[impressed] Michael, that is a complete, exam-ready summary of Chapter 2, delivered from memory. Excellent work.` },
  { s: 'MICHAEL', t: `[laughs] Two for two now.` },
  { s: 'NALEDI', t: `[warmly] That's a wrap on Chapter 2. Next time, we'll build on this and look at how these chromosomes actually pass traits down through generations. Until then — keep those homologous pairs straight, and we'll catch you in the next episode.` },
];

// ─────────────────────────────────────────────────────────────────────────

function stripTags(text) {
  return text.replace(/\[[a-zA-Z ]+\]\s*/g, '').trim();
}

function pad(n, len = 4) { return String(n).padStart(len, '0'); }

function requestTTS(text, voiceId, modelId) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      model_id: modelId,
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
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`${res.statusCode}: ${Buffer.concat(chunks)}`));
        } else {
          resolve(Buffer.concat(chunks));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function generateAudio(text, voiceId, outputPath) {
  try {
    const buf = await requestTTS(text, voiceId, PRIMARY_MODEL);
    fs.writeFileSync(outputPath, buf);
    return 'v3';
  } catch (e) {
    console.warn(`  ! ${PRIMARY_MODEL} failed (${e.message.slice(0, 120)}) — retrying with ${FALLBACK_MODEL}`);
    const buf = await requestTTS(stripTags(text), voiceId, FALLBACK_MODEL);
    fs.writeFileSync(outputPath, buf);
    return 'fallback';
  }
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function hasFfmpeg() {
  try { execSync('ffmpeg -version', { stdio: 'ignore' }); return true; }
  catch { return false; }
}

async function main() {
  fs.mkdirSync(TMP_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });

  console.log(`\nMeiosis Chapter 2 Podcast — ${S.length} segments — model: ${PRIMARY_MODEL}\n`);

  const files = [];
  let usedFallback = 0;
  for (let i = 0; i < S.length; i++) {
    const seg = S[i];
    const voiceId = VOICES[seg.s];
    const fname = `${pad(i)}_${seg.s.toLowerCase()}.mp3`;
    const outPath = path.join(TMP_DIR, fname);
    files.push({ path: outPath, newPart: !!seg.newPart });

    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
      console.log(`[${pad(i)}] ${seg.s} — already exists, skipping`);
      continue;
    }

    console.log(`[${pad(i)}] ${seg.s}: ${seg.t.slice(0, 60)}${seg.t.length > 60 ? '...' : ''}`);
    try {
      const mode = await generateAudio(seg.t, voiceId, outPath);
      if (mode === 'fallback') usedFallback++;
    } catch (e) {
      console.error(`  ✗ FAILED: ${e.message.slice(0, 200)}`);
    }
    await sleep(400);
  }

  const missing = files.filter(f => !fs.existsSync(f.path) || fs.statSync(f.path).size === 0);
  if (missing.length) {
    console.warn(`\n⚠ ${missing.length} segment(s) failed to generate. Re-run this script to retry just those — it skips ones that already succeeded.`);
  }
  if (usedFallback) {
    console.warn(`⚠ ${usedFallback} segment(s) used the ${FALLBACK_MODEL} fallback instead of ${PRIMARY_MODEL} (no v3 audio-tag delivery) — you asked for v3 specifically on this episode, so it's worth checking your ElevenLabs plan has v3 API access, then re-running to regenerate just those lines.`);
  } else {
    console.log(`\n✅ All segments generated on ${PRIMARY_MODEL} — no fallback needed.`);
  }

  console.log(`\nStitching ${files.length} clips into the final episode...`);

  if (hasFfmpeg()) {
    const silenceShort = path.join(TMP_DIR, '_silence_short.mp3');
    const silenceLong = path.join(TMP_DIR, '_silence_long.mp3');
    if (!fs.existsSync(silenceShort)) {
      execSync(`ffmpeg -y -f lavfi -i anullsrc=r=44100:cl=mono -t 0.35 -q:a 9 "${silenceShort}"`, { stdio: 'ignore' });
    }
    if (!fs.existsSync(silenceLong)) {
      execSync(`ffmpeg -y -f lavfi -i anullsrc=r=44100:cl=mono -t 0.9 -q:a 9 "${silenceLong}"`, { stdio: 'ignore' });
    }

    const listPath = path.join(TMP_DIR, '_concat_list.txt');
    const lines = [];
    for (const f of files) {
      if (f.newPart) lines.push(`file '${silenceLong.replace(/'/g, "'\\''")}'`);
      lines.push(`file '${f.path.replace(/'/g, "'\\''")}'`);
      lines.push(`file '${(f.newPart ? silenceLong : silenceShort).replace(/'/g, "'\\''")}'`);
    }
    fs.writeFileSync(listPath, lines.join('\n'));

    execSync(`ffmpeg -y -f concat -safe 0 -i "${listPath}" -c:a libmp3lame -q:a 2 "${OUT_FILE}"`, { stdio: 'inherit' });
    console.log(`\n✅ Done (ffmpeg): ${OUT_FILE}`);
  } else {
    console.warn('\n⚠ ffmpeg not found — falling back to raw concatenation (no pauses between lines).');
    console.warn('  For a cleaner result, install ffmpeg and re-run this script.');
    const out = fs.createWriteStream(OUT_FILE);
    for (const f of files) {
      if (fs.existsSync(f.path)) out.write(fs.readFileSync(f.path));
    }
    out.end();
    console.log(`\n✅ Done (raw concat): ${OUT_FILE}`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });

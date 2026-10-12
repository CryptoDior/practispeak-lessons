/**
 * Life, Decoded — Episode 8: "Responding to the Environment (Plants)"
 * ElevenLabs audio generator — Eleven v4
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-episode8-audio.mjs
 *
 * Re-record only specific files by passing their numbers:
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-episode8-audio.mjs 3 5
 *
 * Six output MP3s:
 *   1. Plant Hormones and Auxins                     — Intro + Parts 1-3
 *   2. Apical Dominance                              — Parts 4-5
 *   3. Phototropism                                  — Parts 6-9
 *   4. Geotropism                                    — Parts 10-12
 *   5. Other Plant Hormones and Weed Control         — Parts 13-16
 *   6. Plant Defence Mechanisms                      — Parts 17-19 + Outro
 *
 * Model: Eleven v4 (eleven_v4), falling back to Eleven v3 (eleven_v3) if v4
 * fails. Both understand bracketed audio tags like [warmly] and [laughs], so
 * tags are kept in the text. v4 has only Stability + Similarity settings (no
 * Style/Speed) and no SSML, so pacing comes from punctuation ("..." and "—").
 *
 * Exam-tip callouts and the Quick-Reference Recap are NOT included (show notes only).
 * Clips already generated are skipped, so an interrupted run can simply be re-run.
 * Stitching uses ffmpeg (concat demuxer) with a short gap between lines.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

// Pick the account: set ELEVENLABS_ACCOUNT=1 or 2 in .env.local (default 1) (uses ELEVENLABS_API_KEY_1 / _2); falls back to ELEVENLABS_API_KEY.
const ELEVENLABS_KEY = (process.env['ELEVENLABS_API_KEY_' + (process.env.ELEVENLABS_ACCOUNT || '1')]) || process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-life-decoded-episode8-audio.mjs');
  process.exit(1);
}

const VOICES = {
  TYLA: 'ZF6FPAbjXT4488VcRRnw',  // standard host voice (same as Naledi in The Business Brief)
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
};

const PRIMARY_MODEL = 'eleven_v4';
const FALLBACK_MODEL = 'eleven_v3';

function voiceSettingsFor(modelId) {
  // v4: only Stability and Similarity exist (no Style / Speed).
  if (modelId === 'eleven_v4' || modelId === 'eleven_v4_turbo') {
    return { stability: 0.5, similarity_boost: 0.75 };
  }
  return { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true };
}

const ROOT = path.resolve('.');
const OUT_DIR = path.join(ROOT, 'podcasts', 'Life-Decoded-Episode-8');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'life-decoded-episode-8');

// ─────────────────────────────────────────────────────────────────────────
const SECTIONS = [

// ═══════════════════════════════════════════════════════════════════════
// 1. Plant Hormones and Auxins — Intro + Parts 1-3
// ═══════════════════════════════════════════════════════════════════════
{
  num: 1,
  file: '1. Plant Hormones and Auxins',
  segs: [
    // Intro
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to LIFE, DECODED. For the last two episodes we've been inside the human body — first the nervous system, then hormones and homeostasis. Today we step outside, into the garden. We're talking about how plants respond to their environment.` },
    { s: 'MICHAEL', t: `[curious] Plants respond? I mean... they just sort of sit there. They don't run, they don't flinch, they don't have a brain.` },
    { s: 'TYLA', t: `[laughs] And that's exactly what makes them fascinating. A plant can't walk to a sunnier spot. It can't run from an antelope that wants to eat it. It's stuck in one place its whole life — the word for that is sessile. So every problem it faces, it has to solve where it stands.` },
    { s: 'MICHAEL', t: `Okay, so how does something with no brain and no nerves solve problems?` },
    { s: 'TYLA', t: `Two big strategies, and they give us the two halves of today's episode. First... plants use hormones to control how and where they grow — so they can bend towards light, send roots down into the soil, and decide when to sprout and when to rest. Second... plants have defences — chemical weapons and physical weapons — to protect themselves from the animals, insects and germs that want to eat or infect them.` },
    { s: 'MICHAEL', t: `Hormones again — straight after the endocrine episode.` },
    { s: 'TYLA', t: `[playfully] Exactly, and you'll hear plenty of callbacks to Episode 7. But here's the twist: plants have no glands, no bloodstream, no nervous system. So the way they use hormones is different. Here's our roadmap. We start with what plant hormones are and meet the star of the show, auxins. Then we look at apical dominance — why plants grow tall and pointy, and how gardeners use that. Then the two tropisms you need for the exam: phototropism, growth towards light, and geotropism, growth in response to gravity — including how to design an investigation like the ones you'll get in Paper 1. Then the other two hormones, gibberellins and abscisic acid, and how farmers use hormones to kill weeds. And finally, the plant's defences — chemical and mechanical.` },
    { s: 'MICHAEL', t: `So — growth control first, self-defence second.` },
    { s: 'TYLA', t: `That's the shape of it. Let's start with the basic question: what is a plant actually responding to?` },

    // Part 1
    { s: 'MICHAEL', t: `Go on then. What does a plant respond to?` },
    { s: 'TYLA', t: `Just like any living organism, plants respond to changes in their environment — to stimuli. They respond to water, sunlight, gravity, chemicals and even touch. Think about a pot plant on a windowsill. Over a couple of weeks, you'll notice it leaning towards the window.` },
    { s: 'MICHAEL', t: `Oh, my mom's plants do that. She keeps turning the pots around so they don't grow crooked.` },
    { s: 'TYLA', t: `[laughs] Your mom is running a biology experiment without knowing it. That leaning is a growth response, and it's controlled by plant hormones. Plant hormones are also called phytohormones — "phyto" means plant — or plant growth regulators.` },
    { s: 'MICHAEL', t: `So a plant hormone is a chemical messenger, just like in humans?` },
    { s: 'TYLA', t: `Exactly. A plant hormone is a chemical messenger that's produced in one part of the plant and has an effect on another part of the plant. Some act right where they're made, and others are transported to other parts of the plant. And their job is to control growth — they stimulate plant cells to divide, to enlarge, to elongate, or to stop growing.` },
    { s: 'MICHAEL', t: `Divide, enlarge, elongate, stop. So hormones are the plant's way of saying "grow here, grow faster here, stop growing there."` },
    { s: 'TYLA', t: `That's a lovely summary. And notice the big difference from Episode 7. In humans, hormones are made in glands and carried in the blood. Plants have no glands and no blood — their hormones are made in particular tissues, like the growing tips, and move through the plant's cells and tissues.` },
    { s: 'MICHAEL', t: `And plants don't have a nervous system, so hormones are basically doing all the coordinating.` },
    { s: 'TYLA', t: `Exactly — that's why plant responses are mostly slow growth responses, rather than the instant reflexes we talked about in Episode 6.` },

    // Part 2
    { s: 'MICHAEL', t: `How many plant hormones do we need to know?` },
    { s: 'TYLA', t: `Three for CAPS. Auxins, gibberellins, and abscisic acid, which is often shortened to A-B-A. Let me give you each one in a single sentence first, then we'll go deep on each. Auxins are the main growth hormones — they make cells elongate, and they control apical dominance and the tropisms. Gibberellins make stems grow taller and wake seeds up so they germinate. And abscisic acid is the plant's stress hormone — it closes the pores in the leaves during drought and keeps seeds asleep until conditions are right.` },
    { s: 'MICHAEL', t: `[excitedly] So auxins steer, gibberellins push upwards and wake things up, and abscisic acid hits the brakes when life gets tough.` },
    { s: 'TYLA', t: `[delighted] That's a really neat way to hold all three. Steer, grow and wake, and brake. We'll spend most of our time on auxins, because that's where most of the exam marks are.` },

    // Part 3
    { s: 'MICHAEL', t: `Okay, auxins. Where are they made?` },
    { s: 'TYLA', t: `Auxins are produced in the growing tips — the tips of the stems and the tips of the roots — and in the apical buds. An apical bud is the growing point right at the very tip of a stem. Auxins are the main hormones that make plants grow, and here's the key word — they can stimulate growth, but they can also inhibit, or prevent, growth.` },
    { s: 'MICHAEL', t: `[surprised] Wait — the same hormone does both?` },
    { s: 'TYLA', t: `It does, depending on where it is and how much of it there is. Hold on to that idea, because it's the secret behind geotropism in Part 11. Now, the main functions of auxins. There are two main ones. First... apical dominance. Second... growth regulation — auxins are responsible for phototropism and geotropism.` },
    { s: 'MICHAEL', t: `And the others?` },
    { s: 'TYLA', t: `Four other functions you should know. One... auxins promote cell division, in other words mitosis. Two... they stimulate the formation of adventitious roots in cuttings.` },
    { s: 'MICHAEL', t: `Adventitious roots — what are those?` },
    { s: 'TYLA', t: `Roots that grow from a place roots don't normally grow from — like the cut end of a stem. Picture snipping a piece off a geranium, dipping the cut end in rooting powder and pushing it into soil. A few weeks later, roots appear from the bottom of that stem. Rooting powder is mostly a synthetic auxin.` },
    { s: 'MICHAEL', t: `Oh, so that's how people grow new plants from cuttings. The auxin tells the stem to grow roots.` },
    { s: 'TYLA', t: `Exactly. Three... auxins promote the development of flowers and fruits. And four... auxins are involved in the abscission of leaves and ripe fruits — abscission is when leaves or fruit drop off the plant.` },
    { s: 'MICHAEL', t: `Abscission — sounds a lot like abscisic acid.` },
    { s: 'TYLA', t: `Good ear — and that's not a coincidence. Abscisic acid also promotes leaf fall, and we'll meet that in Part 14. For now, remember: auxins help control when leaves and ripe fruits drop.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 2. Apical Dominance — Parts 4-5
// ═══════════════════════════════════════════════════════════════════════
{
  num: 2,
  file: '2. Apical Dominance',
  segs: [
    // Part 4
    { s: 'MICHAEL', t: `So what exactly is apical dominance?` },
    { s: 'TYLA', t: `Let's build it. As a stem grows upwards, auxins are produced at the tip of the stem — in the apical bud. Those auxins move downwards through the stem, and as they do, they inhibit the growth of the lateral branches — the side branches. That's apical dominance: when auxins produced at the tip of the stem inhibit the growth of the side branches closer to the tip.` },
    { s: 'MICHAEL', t: `So the tip is the boss, and it keeps the side branches small.` },
    { s: 'TYLA', t: `Exactly — "apical" means at the apex, the top, and "dominance" means it's in charge. Now think about the auxin concentration. Right near the tip, there's a lot of auxin, so the side branches up there are strongly inhibited and stay short. Further down the stem, the auxin has spread out and weakened, so the lower side branches are less inhibited and grow longer.` },
    { s: 'MICHAEL', t: `So — short branches at the top, long branches at the bottom.` },
    { s: 'TYLA', t: `Exactly. And what shape does that make?` },
    { s: 'MICHAEL', t: `[happy gasp] Ohh... a triangle. Wide at the bottom, narrow at the top. Like a Christmas tree!` },
    { s: 'TYLA', t: `[laughs] Perfect. That's called tapered growth — wider at the bottom, narrower at the top. Think of a tall pine tree or a conifer. That classic cone shape is apical dominance in action.` },
    { s: 'MICHAEL', t: `And the advantage for the plant is that it grows upwards fast, towards the light, instead of spreading sideways.` },
    { s: 'TYLA', t: `Exactly — it puts its energy into height first.` },

    // Part 5
    { s: 'MICHAEL', t: `So what if you cut the tip off?` },
    { s: 'TYLA', t: `That's a favourite exam question. If the tip of the stem is removed, the source of the auxins is removed. With no auxins coming down from the top, the lateral branches are no longer inhibited — so they start to grow.` },
    { s: 'MICHAEL', t: `So the side branches finally get their chance.` },
    { s: 'TYLA', t: `Exactly. And people use this all the time. Picture a gardener trimming a hedge along a driveway. Every time they clip the top, they're removing the apical buds. What happens to the hedge?` },
    { s: 'MICHAEL', t: `It gets bushier — thicker and fuller — because all the side branches start growing.` },
    { s: 'TYLA', t: `[approvingly] Exactly. Gardeners use the same trick when they pinch the growing tip off a basil plant or a pot plant to make it bushy instead of tall and spindly. And fruit farmers use it on a big scale. If you remove the tips of fruit trees, the trees stay short and grow more lateral branches — and more branches means more fruit. As a bonus, the fruit is closer to the ground, so it's much easier to pick.` },
    { s: 'MICHAEL', t: `That's clever. So: remove the tip, remove the auxin, stop apical dominance, get a short bushy plant with more fruit.` },
    { s: 'TYLA', t: `That's the whole chain. One sentence to memorise: removing the tip of the stem stops apical dominance.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 3. Phototropism — Parts 6-9
// ═══════════════════════════════════════════════════════════════════════
{
  num: 3,
  file: '3. Phototropism',
  segs: [
    // Part 6
    { s: 'MICHAEL', t: `Now the tropisms. What's the actual definition?` },
    { s: 'TYLA', t: `A tropism is a growth movement of a plant, or part of a plant, in response to an external stimulus coming from a particular direction. And tropisms come in two flavours. When the plant grows towards the stimulus, that's a positive tropism. When it grows away from the stimulus, that's a negative tropism.` },
    { s: 'MICHAEL', t: `Positive — towards. Negative — away. Like a magnet attracting or repelling.` },
    { s: 'TYLA', t: `That's a nice way to remember it. Now, plants respond to lots of stimuli, but CAPS focuses on two. Phototropism is a growth response to light — "photo" means light, like in photosynthesis. Geotropism is a growth response to gravity — "geo" means earth, like geography.` },
    { s: 'MICHAEL', t: `Photo — light. Geo — earth, so gravity. Okay.` },
    { s: 'TYLA', t: `[emphatically] And here's an important point about the word "movement." Plants don't move the way animals do. A tropism is a growth movement — one side of the stem or root grows faster than the other, and that uneven growth makes it bend.` },
    { s: 'MICHAEL', t: `[slowly, putting it together] So it's not bending like a muscle. It's bending because one side got longer.` },
    { s: 'TYLA', t: `Exactly. Keep that picture — one side grows more — because it's the key to explaining both tropisms.` },

    // Part 7
    { s: 'MICHAEL', t: `Okay, phototropism. Walk me through it.` },
    { s: 'TYLA', t: `Phototropism is the growth of parts of a plant in response to light. The key exam term here is unilateral light — that's light coming from just one side or one direction.` },
    { s: 'MICHAEL', t: `Uni — one. Lateral — side. One-sided light.` },
    { s: 'TYLA', t: `Exactly. Let's compare two shoots. Picture shoot one, growing outside with the sun directly overhead. Auxins are produced at the tip and move downwards evenly on all sides of the stem. Equal auxin on all sides means equal growth on all sides — so the shoot grows straight up.` },
    { s: 'MICHAEL', t: `Makes sense. Even auxin, even growth, straight stem.` },
    { s: 'TYLA', t: `Now shoot two. It's on a windowsill, so the light only comes from one side — unilateral light. And now the auxins don't stay evenly spread. They end up concentrated on the shaded side of the stem — the side facing away from the light.` },
    { s: 'MICHAEL', t: `[confused] Why would they move to the dark side?` },
    { s: 'TYLA', t: `The textbook gives two explanations, and you can use either: either light destroys some of the auxins on the lit side, or the auxins move away from the light towards the shaded side. Either way, the result is the same — high auxin concentration on the shaded side.` },
    { s: 'MICHAEL', t: `And auxin makes stem cells grow...` },
    { s: 'TYLA', t: `...so more cell elongation happens on the shaded side. The shaded side grows longer than the lit side, and the stem bends — towards the light.` },
    { s: 'MICHAEL', t: `[hesitantly] Hang on. Let me picture it. The dark side gets longer, so it pushes the tip over... towards the bright side. Like if you made the left side of a ruler longer, it would curve to the right.` },
    { s: 'TYLA', t: `[pleased] That's exactly the picture. The longer side is on the outside of the curve. So the stem curves towards the light.` },

    // Part 8
    { s: 'MICHAEL', t: `So stems grow towards light. Is that positive phototropism?` },
    { s: 'TYLA', t: `Exactly. Stems are positively phototropic — they bend towards the light. And roots are negatively phototropic — they grow away from light.` },
    { s: 'MICHAEL', t: `Which makes sense — roots belong in the dark soil.` },
    { s: 'TYLA', t: `Exactly. Now, the exam likes to ask about the advantages of a stem being positively phototropic. There are three. First... it puts the leaves in a favourable position to receive the sunlight needed for photosynthesis. Second... it allows easier pollination of the flowers.` },
    { s: 'MICHAEL', t: `Because flowers held up in the light are easier for insects and birds to find?` },
    { s: 'TYLA', t: `Exactly that. And third... it allows easier seed dispersal — seeds held up high and out in the open are more easily carried away by wind or animals.` },
    { s: 'MICHAEL', t: `So more light for food, easier pollination, and easier seed spreading. Light, pollination, dispersal.` },
    { s: 'TYLA', t: `Perfect. Let me give you the full answer to a classic exam question in one go, because I want you to hear the sequence. "Explain why a shoot bends towards unilateral light."` },
    { s: 'MICHAEL', t: `Go.` },
    { s: 'TYLA', t: `Auxins are produced at the tip of the shoot. When light comes from one side, the auxins concentrate on the shaded side, either because light destroys them on the lit side or because they move away from the light. The high auxin concentration on the shaded side stimulates more cell elongation there. The shaded side grows faster than the lit side, so the shoot bends towards the light.` },
    { s: 'MICHAEL', t: `[laughs] That's like five marks right there.` },
    { s: 'TYLA', t: `It is. Notice it moves step by step: where auxin is made, where it goes, what it does, which side grows faster, and the result.` },

    // Part 9
    { s: 'MICHAEL', t: `You said there's an investigation question on this in Paper 1. What does that look like?` },
    { s: 'TYLA', t: `Exams love to describe an experiment and then ask you about variables, planning, validity and reliability. So let's design our own investigation and walk through every one of those skills. Here's the set-up. Picture a learner called Sipho who wants to find out whether the tip of a shoot is needed for it to bend towards light.` },
    { s: 'MICHAEL', t: `Okay. What does he do?` },
    { s: 'TYLA', t: `He grows twenty bean seedlings of the same species, the same age and the same height. He splits them into two groups of ten. In group one, he leaves the shoot tips intact. In group two, he carefully cuts off the very tip of each shoot. Then he puts each group inside its own shoebox. Each box has a small slit cut in one side, so light only enters from that one side, and he places a lamp the same distance from each slit. He waters them equally and leaves them for one week.` },
    { s: 'MICHAEL', t: `So it's unilateral light for both groups — the only difference is whether the tip is there.` },
    { s: 'TYLA', t: `Exactly. And after a week, what do you predict?` },
    { s: 'MICHAEL', t: `Group one, with tips, bends towards the slit. Group two, with no tips... no auxin source... so no bending?` },
    { s: 'TYLA', t: `[proudly] Exactly right. The seedlings with tips bend towards the light. The seedlings without tips grow straight, or barely grow at all, and don't bend. Now let's pull the investigation apart. First — the independent variable. That's the factor the investigator deliberately changes.` },
    { s: 'MICHAEL', t: `Whether the shoot tip is present or removed.` },
    { s: 'TYLA', t: `Correct. The dependent variable is what gets measured or observed as a result.` },
    { s: 'MICHAEL', t: `Whether the shoot bends towards the light — the direction of growth.` },
    { s: 'TYLA', t: `Perfect. Now planning steps — the things Sipho had to decide before starting. For example: choosing which plant species to use, deciding how many seedlings to use, deciding how long to leave the experiment, deciding how to provide light from one side only, and deciding how to measure or record the bending.` },
    { s: 'MICHAEL', t: `And validity?` },
    { s: 'TYLA', t: `Validity is about making sure the experiment actually tests what it's supposed to test — that only the independent variable is different between the groups. Sipho ensured validity by keeping everything else the same: the same species, seedlings of the same age and height, the same lamp at the same distance, the same amount of water, the same soil, the same temperature, and the same time period.` },
    { s: 'MICHAEL', t: `So if he gave one group more water, you wouldn't know if it was the tip or the water causing the difference.` },
    { s: 'TYLA', t: `Exactly — that's why controlled variables matter. And reliability is about whether you'd get the same results if you did it again. To improve reliability, Sipho could repeat the investigation, use a larger sample of seedlings in each group, and calculate an average result.` },
    { s: 'MICHAEL', t: `So validity — fair test, only one thing changes. Reliability — repeat it and use enough plants so you can trust the results.` },
    { s: 'TYLA', t: `That's the distinction examiners want. And the conclusion: the tip of the shoot is necessary for phototropism, because the tip is where auxins are produced.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 4. Geotropism — Parts 10-12
// ═══════════════════════════════════════════════════════════════════════
{
  num: 4,
  file: '4. Geotropism',
  segs: [
    // Part 10
    { s: 'MICHAEL', t: `Okay, geotropism. Growing in response to gravity.` },
    { s: 'TYLA', t: `Geotropism is the growth movement of a plant in response to gravity. Here's a scenario. A pot plant gets knocked over by the wind and lands on its side. Nobody notices, and to make sure light isn't a factor, imagine it's left in a dark garage for two weeks.` },
    { s: 'MICHAEL', t: `And then?` },
    { s: 'TYLA', t: `When you find it, the stem has curved and is growing upwards, and the roots inside the pot have curved and are growing downwards. The plant has corrected itself, purely in response to gravity.` },
    { s: 'MICHAEL', t: `[suspiciously] Wait — why do it in the dark?` },
    { s: 'TYLA', t: `[encouragingly] Great question — that's an investigation detail. If there were light, you wouldn't know if the stem curved up because of gravity or because it was growing towards the light. Doing it in the dark rules out phototropism. Now, label the responses. The roots are growing with gravity, downwards — so roots are positively geotropic. The stems and leaves are growing against gravity, upwards — so stems are negatively geotropic.` },
    { s: 'MICHAEL', t: `Roots — positive, towards the pull. Stems — negative, away from the pull.` },
    { s: 'TYLA', t: `Exactly. And notice how that's the reverse of phototropism, where stems were positive and roots were negative.` },
    { s: 'MICHAEL', t: `[excitedly] Ooh, that's a trap. Stems: positive for light, negative for gravity. Roots: negative for light, positive for gravity.` },
    { s: 'TYLA', t: `[warmly] Exactly — learn it as a pair so you never mix them up.` },

    // Part 11
    { s: 'MICHAEL', t: `[frustrated sigh] Okay, but here's my problem. If auxin makes things grow, how does it make the stem curve up and the root curve down?` },
    { s: 'TYLA', t: `[excited] That's the question at the heart of this chapter. Let's start with the plant standing upright. Auxin is produced at the root tip and moves upwards evenly through the root. Even distribution means equal growth on all sides, so the root grows straight down.` },
    { s: 'MICHAEL', t: `Fine. Now tip it over.` },
    { s: 'TYLA', t: `Now the plant is lying horizontally. Auxins have mass, so they're pulled down by gravity. That means both the stem and the root end up with a high auxin concentration on their lower side.` },
    { s: 'MICHAEL', t: `Both on the lower side. So far so good.` },
    { s: 'TYLA', t: `[dramatically] Here's the twist. Stem cells and root cells react to high auxin in opposite ways. In the stem, a high auxin concentration promotes cell elongation. So the lower side of the stem grows faster, pushes the stem upwards, and it curves up.` },
    { s: 'MICHAEL', t: `Okay, lower side longer, stem curves up. Like the ruler again.` },
    { s: 'TYLA', t: `Exactly. But in the root, a high auxin concentration inhibits cell elongation. So the lower side of the root, with all that auxin, grows slowly. The upper side, with very little auxin, grows faster. The faster-growing upper side pushes the root tip downwards, and the root curves down.` },
    { s: 'MICHAEL', t: `[amazed] Ohh! So it's the same auxin in the same place — the lower side — but in a stem it says "grow," and in a root it says "stop."` },
    { s: 'TYLA', t: `[impressed] That's it exactly. Roots are much more sensitive to auxin than stems — a concentration that boosts stem growth is too strong for root cells and slows them down.` },
    { s: 'MICHAEL', t: `Like coffee. A bit of coffee wakes you up, but way too much and you can't function.` },
    { s: 'TYLA', t: `[laughs] That's actually a great analogy. And this is the most common misconception — thinking auxins always stimulate growth. They don't. In roots, high concentrations inhibit growth.` },

    // Part 12
    { s: 'MICHAEL', t: `Does geotropism happen in seeds too?` },
    { s: 'TYLA', t: `It does, and it's really important. When a seed lands in the soil, it could land any way up — sideways, upside down, anything. But no matter how it lands, the young root always grows down and the young shoot always grows up.` },
    { s: 'MICHAEL', t: `Because of the same auxin trick.` },
    { s: 'TYLA', t: `Exactly. Picture a bean seed lying on its side in the soil, with a little shoot curling out of one end and a little root out of the other. Auxin is pulled down to the lower side of both. In the young shoot, the high auxin on the lower side promotes elongation, so the shoot bends upwards — negatively geotropic. In the young root, the high auxin on the lower side inhibits growth, while the upper side, with little auxin, grows faster — so the root bends downwards — positively geotropic.` },
    { s: 'MICHAEL', t: `And why is it so important for the root to go down?` },
    { s: 'TYLA', t: `Because growing deep into the soil lets the root hairs absorb water and mineral salts, and it anchors the plant firmly in the ground. And the shoot growing up gets the leaves into the light for photosynthesis.` },
    { s: 'MICHAEL', t: `So even if a bird drops a seed upside down, the plant sorts itself out.` },
    { s: 'TYLA', t: `Exactly — geotropism means the plant always gets the right way up.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 5. Other Plant Hormones and Weed Control — Parts 13-16
// ═══════════════════════════════════════════════════════════════════════
{
  num: 5,
  file: '5. Other Plant Hormones and Weed Control',
  segs: [
    // Part 13
    { s: 'MICHAEL', t: `Okay, second hormone. Gibberellins.` },
    { s: 'TYLA', t: `Gibberellins have several jobs, so let's go through them. First... they stimulate stem elongation — they make stems grow tall. Second... they initiate seed germination. Third... they help break seed dormancy. Fourth... they promote the development of flowers and the sprouting of buds. And fifth... they promote fruit development and enlargement.` },
    { s: 'MICHAEL', t: `That's a lot. What's seed dormancy again?` },
    { s: 'TYLA', t: `Dormancy is a resting state, where a seed is alive but not growing. Think of it like a seed being asleep. It stays dormant until conditions are right, and then gibberellins help wake it up so it can germinate.` },
    { s: 'MICHAEL', t: `So gibberellins are the alarm clock.` },
    { s: 'TYLA', t: `[chuckles] I like that. And there's one more application worth knowing. In some plants, gibberellins can trigger fruit to develop without fertilisation — so the fruit grows but no seeds form. That's called parthenocarpic fruit. Seedless grapes are a well-known example.` },
    { s: 'MICHAEL', t: `Wait — so seedless grapes don't need to be pollinated?` },
    { s: 'TYLA', t: `That's exactly the idea — the fruit is stimulated to develop without the seeds forming. Growers also spray gibberellins on grapes to make the bunches longer and the grapes bigger.` },
    { s: 'MICHAEL', t: `So gibberellins: tall stems, germination, breaking dormancy, flowers and buds, and bigger fruit — even seedless fruit.` },
    { s: 'TYLA', t: `That's the full list.` },

    // Part 14
    { s: 'MICHAEL', t: `And the third hormone. Abscisic acid.` },
    { s: 'TYLA', t: `Abscisic acid — A-B-A — is known as the plant's stress hormone. Its most important job is during drought. Picture a maize field in the middle of a long, dry summer with no rain for weeks. The plants are losing water through the tiny pores in their leaves, called stomata.` },
    { s: 'MICHAEL', t: `Stomata — the pores for gas exchange. And water evaporates out through them too, in transpiration.` },
    { s: 'TYLA', t: `Exactly. When water is scarce, abscisic acid builds up and causes the stomata to close. Closed stomata mean much less water is lost, which helps the plant survive the drought.` },
    { s: 'MICHAEL', t: `So it's like closing the windows in your house so the air-conditioning doesn't escape.` },
    { s: 'TYLA', t: `[laughs] Something like that — you're holding on to what you've got. Second job: abscisic acid promotes seed dormancy. It keeps seeds asleep and inhibits germination, so they only germinate when the environmental conditions are right.` },
    { s: 'MICHAEL', t: `[gasps] Wait — so gibberellins break dormancy, and abscisic acid causes it. They're opposites!` },
    { s: 'TYLA', t: `[impressed] Exactly. They work against each other on dormancy — abscisic acid keeps the seed asleep, gibberellins wake it up. Third job: abscisic acid promotes abscission — leaf fall. That's why, in dry or cold seasons, many trees drop their leaves. Losing leaves means less water lost through transpiration.` },
    { s: 'MICHAEL', t: `That's clever. No leaves, no stomata, no water loss.` },
    { s: 'TYLA', t: `Exactly. And fourth, the textbook adds that abscisic acid inhibits the growth of apical buds. So it slows growth when conditions are tough.` },
    { s: 'MICHAEL', t: `So abscisic acid is the plant going into survival mode: close the stomata, keep seeds asleep, drop leaves, slow down growth.` },
    { s: 'TYLA', t: `[chuckles] That's a perfect summary — it's the brake pedal.` },

    // Part 15
    { s: 'MICHAEL', t: `Can we put all three side by side? Because I can feel myself mixing them up.` },
    { s: 'TYLA', t: `Absolutely. Let's compare them category by category. Start with growth. Auxins promote cell elongation, especially in shoot tips. Gibberellins promote stem elongation — making stems taller. And abscisic acid inhibits growth, including the growth of apical buds.` },
    { s: 'MICHAEL', t: `Okay. Seeds next?` },
    { s: 'TYLA', t: `For seeds: gibberellins break dormancy and start germination. Abscisic acid promotes dormancy and inhibits germination. Auxins aren't the main players here.` },
    { s: 'MICHAEL', t: `And the special jobs?` },
    { s: 'TYLA', t: `Auxins control apical dominance, phototropism and geotropism. Gibberellins can produce seedless fruit and enlarge fruit. Abscisic acid closes stomata during drought and causes leaf fall.` },
    { s: 'MICHAEL', t: `Let me say it back. Auxins — elongation, apical dominance, the tropisms. Gibberellins — taller stems, wake up seeds, bigger and seedless fruit. Abscisic acid — stress: close stomata, keep seeds asleep, drop leaves.` },
    { s: 'TYLA', t: `[cheerfully] That's the comparison table, spoken in three sentences.` },

    // Part 16
    { s: 'MICHAEL', t: `You mentioned farmers using hormones to kill weeds. How does that work?` },
    { s: 'TYLA', t: `First, the problem. Weeds are unwanted plants that compete with crops for space, nutrients, water and light. That competition lowers crop productivity and yield — the amount of produce a crop gives. Herbicides are chemicals that are toxic to plants and are sprayed to destroy weeds. The problem is that many herbicides are also toxic to animals, humans and even some of the crops.` },
    { s: 'MICHAEL', t: `So you need something that kills the weeds but leaves everything else alone.` },
    { s: 'TYLA', t: `Exactly. And plant hormones offer that, because different plant species are sensitive to different levels of hormones. That makes weed killing a selective process. Here's the key fact: most weeds have broad leaves, while many cereal crops — like maize and wheat — have narrow leaves.` },
    { s: 'MICHAEL', t: `So if you find a hormone that only affects broad-leaved plants...` },
    { s: 'TYLA', t: `...you can spray it over the whole field. The broad-leaved weeds are killed, and the narrow-leaved crops survive. These sprays use synthetic auxins — artificially made auxins.` },
    { s: 'MICHAEL', t: `[confused] And how does auxin actually kill a weed? I thought it made things grow.` },
    { s: 'TYLA', t: `[knowingly] Remember Part 11 — in roots, high auxin concentrations inhibit growth. Auxins that reach the roots of the weeds at high concentration stop root growth, and without healthy roots, the weed dies. In broad-leaved plants, the overdose of synthetic auxin also makes growth go out of control, which damages and kills them.` },
    { s: 'MICHAEL', t: `So you're basically giving the weed way too much of its own growth hormone. Nice callback to the coffee thing.` },
    { s: 'TYLA', t: `[laughs] Exactly. Think of a farmer with a maize field full of broad-leaved weeds. One spray of a selective hormone weed killer, and the weeds die off while the maize keeps growing.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 6. Plant Defence Mechanisms — Parts 17-19 + Outro
// ═══════════════════════════════════════════════════════════════════════
{
  num: 6,
  file: '6. Plant Defence Mechanisms',
  segs: [
    // Part 17
    { s: 'MICHAEL', t: `Okay, second half. Plant defences. Why do plants need them?` },
    { s: 'TYLA', t: `Because plants are at the bottom of every food chain. They're primary producers — they make their own food through photosynthesis, which makes them food for almost everything else. So plants are under constant attack from herbivores, insects, and pathogens — disease-causing organisms like fungi and bacteria. And remember, they're sessile. They can't run away.` },
    { s: 'MICHAEL', t: `So they have to fight back without moving.` },
    { s: 'TYLA', t: `Exactly. Plant defences fall into two groups: chemical defences and mechanical defences. The main one is chemical. Plants produce chemical compounds that poison or repel herbivores and insects, and protect against pathogens. These chemicals can affect the feeding, growth and survival of whatever's attacking the plant.` },
    { s: 'MICHAEL', t: `What kinds of chemicals?` },
    { s: 'TYLA', t: `Three you should know. First, alkaloids. These are bitter chemicals that can be toxic when a herbivore eats them. You've actually met two famous alkaloids already: caffeine in coffee plants and nicotine in tobacco plants.` },
    { s: 'MICHAEL', t: `[surprised] Wait — caffeine is a plant's poison?` },
    { s: 'TYLA', t: `[giggles] For insects, yes! In the plant, it acts as a defence that makes the leaves bitter and harmful to insects. Humans just happen to enjoy it in small doses. Second, tannins. Tannins bind to proteins, which makes those proteins hard to digest. So an animal eating a tannin-rich plant gets less nutrition from it, and the plant tastes bitter and dry.` },
    { s: 'MICHAEL', t: `Oh — like that dry feeling in your mouth when you drink really strong black tea.` },
    { s: 'TYLA', t: `Exactly — that dry, puckering feeling is tannins binding to proteins in your saliva. Now, the herbivore learns the plant isn't worth eating.` },
    { s: 'MICHAEL', t: `And the third?` },
    { s: 'TYLA', t: `Phytoalexins. These are antimicrobial compounds that a plant makes in response to a pathogen invading it — like a fungus attacking a leaf. They inhibit the pathogen's growth.` },
    { s: 'MICHAEL', t: `So alkaloids and tannins are always there, but phytoalexins are made on demand when a germ attacks.` },
    { s: 'TYLA', t: `[delighted] That's a sharp distinction. Phytoalexins are like the plant's emergency response — a bit like your immune system kicking in when you're infected.` },

    // Part 18
    { s: 'MICHAEL', t: `Are there any other chemical tricks?` },
    { s: 'TYLA', t: `Two more, and they're pretty clever. First, volatile organic compounds. "Volatile" means they evaporate easily into the air — think of the smell that comes off freshly cut grass. When some plants are attacked by caterpillars, they release scented chemicals into the air. Those scents attract the predators or parasites of the caterpillars — for example, tiny wasps that lay their eggs inside caterpillars.` },
    { s: 'MICHAEL', t: `[disbelieving] Wait — so the plant calls for backup? It literally sends out a distress signal for the caterpillar's enemies?` },
    { s: 'TYLA', t: `[laughs] That's exactly what it does. It can't fight the caterpillar itself, so it recruits an army. Some volatile compounds also directly repel insects.` },
    { s: 'MICHAEL', t: `That's honestly amazing for something with no brain.` },
    { s: 'TYLA', t: `It is. And second, sticky or slippery secretions. Some plants coat their stems or leaves with sticky resins or slippery waxes that make it difficult for insects to walk across them, climb up them or feed on them.` },
    { s: 'MICHAEL', t: `Like a non-stick pan — the insects just slide off. Or flypaper — they get stuck.` },
    { s: 'TYLA', t: `Exactly, both versions exist. And here's a practical point: plant breeders often deliberately select for these defensive traits when they develop new crop varieties, because it reduces crop losses to pests.` },

    // Part 19
    { s: 'MICHAEL', t: `And mechanical defences are the sharp stuff?` },
    { s: 'TYLA', t: `Exactly — external structures that make it physically difficult or painful for herbivores to eat the plant. Three structures: thorns, prickles and spines. And the classic trap is mixing them up, because in everyday English we call them all "thorns."` },
    { s: 'MICHAEL', t: `So what's the actual difference?` },
    { s: 'TYLA', t: `It's all about what each one is made from — its origin. Thorns are modified branches or stems. They're hard, sharp and pointed, and they can pierce an animal's skin or the roof of its mouth. Think of the long, hard thorns on an acacia tree in the bushveld. They make it difficult for larger herbivores to get their mouths to the leaves between the thorns without hurting themselves.` },
    { s: 'MICHAEL', t: `So a thorn is a branch that turned into a weapon.` },
    { s: 'TYLA', t: `Exactly. Prickles are outgrowths of the epidermis and cortex — the outer layers of the stem. They form sharp, needle-like points. Here's the surprise: the sharp bits on a rose stem are actually prickles, not thorns.` },
    { s: 'MICHAEL', t: `[shocked] No way. Everyone calls them rose thorns!` },
    { s: 'TYLA', t: `[laughs] Everyone does, but botanically they're prickles — they come from the outer layers, which is why you can snap them off a rose stem quite easily. A real thorn is part of the branch's structure, so it doesn't snap off cleanly.` },
    { s: 'MICHAEL', t: `Okay. And spines?` },
    { s: 'TYLA', t: `Spines are modified leaves, or parts of leaves. They're thin, hard, sharp and difficult to remove. You find them on cacti and aloes. Spines do two jobs: they deter herbivores, and they also reduce water loss.` },
    { s: 'MICHAEL', t: `How do they reduce water loss?` },
    { s: 'TYLA', t: `[patiently] Because a spine is a leaf that's been reduced to a thin, hard point. A big flat leaf has a huge surface area for water to evaporate from. A thin spine has a tiny surface area, so far less water is lost — perfect for a desert plant. The spines also shade the plant a little and break up the drying wind across its surface.` },
    { s: 'MICHAEL', t: `So — thorn from a branch, prickle from the skin layers, spine from a leaf. Branch, skin, leaf.` },
    { s: 'TYLA', t: `[whispers] Branch, skin, leaf. [warmly] That's the memory hook you need.` },

    // Outro
    { s: 'TYLA', t: `[excited] Okay, Michael — same tradition as always. Give me the whole chapter, start to finish, in one go.` },
    { s: 'MICHAEL', t: `[laughs] Okay. Plants are sessile, so they can't move away from problems — they respond with hormones that control their growth, and with defences. Plant hormones, or phytohormones, are chemical messengers made in one part of the plant that affect another part, making cells divide, enlarge, elongate or stop growing. The three we need are auxins, gibberellins and abscisic acid. Auxins are made in the growing tips of stems and roots and in apical buds. Their main jobs are apical dominance and the tropisms, plus cell division, roots on cuttings, flowers and fruits, and abscission. In apical dominance, auxins from the tip move down and inhibit the side branches near the top, so the plant gets a tapered shape. Remove the tip, and the side branches grow — that's why pruned hedges get bushy and fruit trees are kept short with more fruit that's easier to pick.` },
    { s: 'TYLA', t: `[excitedly] Keep going.` },
    { s: 'MICHAEL', t: `A tropism is a growth movement in response to a directional stimulus — positive is towards, negative is away. In phototropism, unilateral light makes auxins collect on the shaded side, either because light destroys them or they move away. More elongation on the shaded side bends the stem towards the light. Stems are positively phototropic, roots negatively — and that helps with photosynthesis, pollination and seed dispersal. In an investigation, the independent variable is what you change, the dependent variable is what you measure, validity means keeping everything else the same, and reliability means repeating it with a bigger sample. In geotropism, gravity pulls auxin to the lower side of both stem and root. In the stem, high auxin promotes growth, so the stem curves up — negatively geotropic. In the root, high auxin inhibits growth, so the upper side grows faster and the root curves down — positively geotropic. That works in germinating seeds too, so roots always find water and minerals.` },
    { s: 'TYLA', t: `[eagerly] And the other hormones and defences?` },
    { s: 'MICHAEL', t: `Gibberellins make stems grow tall, start germination, break dormancy, help flowers and buds develop, and enlarge fruit — even seedless fruit like seedless grapes. Abscisic acid is the stress hormone — it closes stomata in drought, keeps seeds dormant, causes leaf fall and inhibits apical buds. Synthetic auxins are selective weed killers — they kill broad-leaved weeds but not narrow-leaved crops like maize and wheat. And because plants are primary producers, they're always under attack, so they defend themselves. Chemically, with alkaloids like caffeine and nicotine, tannins that make proteins hard to digest, phytoalexins made when pathogens attack, volatile compounds that call in the caterpillars' enemies, and sticky or slippery surfaces. And mechanically, with thorns from branches, prickles from the skin layers like on roses, and spines from leaves on cacti and aloes, which also save water. Branch, skin, leaf.` },
    { s: 'TYLA', t: `[impressed] ...Michael. Every hormone, every tropism, every defence — in order. That was genuinely brilliant.` },
    { s: 'MICHAEL', t: `[laughs] I'm positively phototropic. I just grow towards the praise.` },
    { s: 'TYLA', t: `[laughs] And on that note, I'm going to stop before your head gets too big for the pot. To everyone listening — if you can explain why the root and stem bend in opposite directions, you've mastered the hardest idea in this chapter.` },
    { s: 'MICHAEL', t: `[softly] Same auxin, opposite effect.` },
    { s: 'TYLA', t: `[warmly] Same auxin, opposite effect — remember that, and the rest follows. We'll catch you in the next episode.` },
  ],
},

];

// ─────────────────────────────────────────────────────────────────────────

function pad(n, len = 4) { return String(n).padStart(len, '0'); }

function requestTTS(text, voiceId, modelId) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      model_id: modelId,
      voice_settings: voiceSettingsFor(modelId),
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
    return 'v4';
  } catch (e) {
    console.warn(`  ! ${PRIMARY_MODEL} failed (${e.message.slice(0, 300)}) — retrying with ${FALLBACK_MODEL}`);
    const buf = await requestTTS(text, voiceId, FALLBACK_MODEL);
    fs.writeFileSync(outputPath, buf);
    return 'fallback';
  }
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function hasFfmpeg() {
  try { execSync('ffmpeg -version', { stdio: 'ignore' }); return true; }
  catch { return false; }
}

function slugifyFolder(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function generateSection(sec, ffmpegAvailable, silenceShort) {
  const secDir = path.join(TMP_ROOT, slugifyFolder(sec.file));
  fs.mkdirSync(secDir, { recursive: true });

  const files = [];
  let usedFallback = 0;

  for (let i = 0; i < sec.segs.length; i++) {
    const seg = sec.segs[i];
    const voiceId = VOICES[seg.s];
    const fname = `${pad(i)}_${seg.s.toLowerCase()}.mp3`;
    const outPath = path.join(secDir, fname);
    files.push(outPath);

    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
      console.log(`  [${pad(i)}] ${seg.s} — already exists, skipping`);
      continue;
    }

    console.log(`  [${pad(i)}] ${seg.s}: ${seg.t.slice(0, 60)}${seg.t.length > 60 ? '...' : ''}`);
    try {
      const mode = await generateAudio(seg.t, voiceId, outPath);
      if (mode === 'fallback') usedFallback++;
    } catch (e) {
      console.error(`    ✗ FAILED: ${e.message.slice(0, 200)}`);
    }
    await sleep(400);
  }

  const missing = files.filter(f => !fs.existsSync(f) || fs.statSync(f).size === 0);
  if (missing.length) {
    console.warn(`  ⚠ ${missing.length} segment(s) failed in "${sec.file}". Re-run the script to retry just those.`);
  }
  if (usedFallback) {
    console.warn(`  ⚠ ${usedFallback} segment(s) in "${sec.file}" used the ${FALLBACK_MODEL} fallback.`);
  }

  const outPath = path.join(OUT_DIR, `${sec.file}.mp3`);

  if (ffmpegAvailable) {
    const listPath = path.join(secDir, '_concat_list.txt');
    const lines = [];
    for (const f of files) {
      if (!fs.existsSync(f)) continue;
      lines.push(`file '${f.replace(/'/g, "'\\''")}'`);
      lines.push(`file '${silenceShort.replace(/'/g, "'\\''")}'`);
    }
    fs.writeFileSync(listPath, lines.join('\n'));
    execSync(`ffmpeg -y -f concat -safe 0 -i "${listPath}" -c:a libmp3lame -q:a 2 "${outPath}"`, { stdio: 'ignore' });
    console.log(`  ✅ Saved: ${outPath}`);
  } else {
    const out = fs.createWriteStream(outPath);
    for (const f of files) {
      if (!fs.existsSync(f)) continue;
      out.write(fs.readFileSync(f));
    }
    out.end();
    console.log(`  ✅ Saved (raw concat, no gaps — install ffmpeg for pauses): ${outPath}`);
  }
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(TMP_ROOT, { recursive: true });

  const requested = process.argv.slice(2).map(Number).filter(n => Number.isInteger(n) && n >= 1);
  const sectionsToRun = requested.length ? SECTIONS.filter(s => requested.includes(s.num)) : SECTIONS;

  if (requested.length) {
    console.log(`Re-recording only file(s): ${sectionsToRun.map(s => s.num).join(', ')}\n`);
    for (const sec of sectionsToRun) {
      const secDir = path.join(TMP_ROOT, slugifyFolder(sec.file));
      if (fs.existsSync(secDir)) fs.rmSync(secDir, { recursive: true, force: true });
      const outPath = path.join(OUT_DIR, `${sec.file}.mp3`);
      if (fs.existsSync(outPath)) fs.rmSync(outPath, { force: true });
    }
  }

  const ffmpegAvailable = hasFfmpeg();
  let silenceShort;
  if (ffmpegAvailable) {
    silenceShort = path.join(TMP_ROOT, '_silence_short.mp3');
    if (!fs.existsSync(silenceShort)) {
      execSync(`ffmpeg -y -f lavfi -i anullsrc=r=44100:cl=mono -t 0.35 -q:a 9 "${silenceShort}"`, { stdio: 'ignore' });
    }
  } else {
    console.warn('⚠ ffmpeg not found — files will be joined with no gaps between lines. Install ffmpeg for natural pacing.\n');
  }

  console.log(`Life, Decoded — Episode 8: Responding to the Environment (Plants) (${PRIMARY_MODEL}) — running ${sectionsToRun.length} of ${SECTIONS.length} file(s)\n`);

  for (const sec of sectionsToRun) {
    console.log(`\n▶ ${sec.file}`);
    await generateSection(sec, ffmpegAvailable, silenceShort);
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final files.`);
}

main().catch(e => { console.error(e); process.exit(1); });

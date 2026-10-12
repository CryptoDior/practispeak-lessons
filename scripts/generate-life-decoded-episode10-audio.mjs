/**
 * Life, Decoded — Episode 10: "Human Evolution"  (series finale)
 * ElevenLabs audio generator — Eleven v4
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-episode10-audio.mjs
 *
 * Re-record only specific files by passing their numbers:
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-episode10-audio.mjs 3 5
 *
 * Seven output MP3s:
 *   1. Our Place in the Animal Kingdom        — Intro + Parts 1-2
 *   2. Humans vs African Apes                 — Parts 3-7
 *   3. Fossil Evidence                        — Parts 8-11
 *   4. Genetic and Cultural Evidence          — Parts 12-13
 *   5. Out of Africa Hypothesis               — Parts 14-15
 *   6. Fossil Sites                           — Parts 16-17
 *   7. Alternatives to Evolution              — Part 18 + Outro
 *
 * Model: Eleven v4 (eleven_v4), falling back to Eleven v3 (eleven_v3) if v4 fails.
 * Exam-tip callouts and the Quick-Reference Recap are NOT included (show notes only).
 * Clips already generated are skipped, so an interrupted run can simply be re-run.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

// Pick the account: set ELEVENLABS_ACCOUNT=1 or 2 in .env.local (default 1) (uses ELEVENLABS_API_KEY_1 / _2); falls back to ELEVENLABS_API_KEY.
const ELEVENLABS_KEY = (process.env['ELEVENLABS_API_KEY_' + (process.env.ELEVENLABS_ACCOUNT || '1')]) || process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-life-decoded-episode10-audio.mjs');
  process.exit(1);
}

const VOICES = {
  TYLA: 'ZF6FPAbjXT4488VcRRnw',  // standard host voice (same as Naledi in The Business Brief)
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
};

const PRIMARY_MODEL = 'eleven_v4';
const FALLBACK_MODEL = 'eleven_v3';

function voiceSettingsFor(modelId) {
  if (modelId === 'eleven_v4' || modelId === 'eleven_v4_turbo') {
    return { stability: 0.5, similarity_boost: 0.75 };
  }
  return { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true };
}

const ROOT = path.resolve('.');
const OUT_DIR = path.join(ROOT, 'podcasts', 'Life-Decoded-Episode-10');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'life-decoded-episode-10');

// ─────────────────────────────────────────────────────────────────────────
const SECTIONS = [

// ═══════════════════════════════════════════════════════════════════════
// 1. Our Place in the Animal Kingdom — Intro + Parts 1-2
// ═══════════════════════════════════════════════════════════════════════
{
  num: 1,
  file: '1. Our Place in the Animal Kingdom',
  segs: [
    // Intro
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to LIFE, DECODED — and welcome to our final episode. Last time, we unpacked evolution by natural selection. Today, we turn all of that onto the most curious species of all... us. This is human evolution.` },
    { s: 'MICHAEL', t: `[excitedly] I've been waiting for this one all year. Where we came from, how we're related to apes, all those famous fossils...` },
    { s: 'TYLA', t: `And here's the best part — so much of this story happened right here, in South Africa. Some of the most important human fossils on Earth were found about an hour's drive from Johannesburg.` },
    { s: 'MICHAEL', t: `[surprised] Wait, seriously? That close?` },
    { s: 'TYLA', t: `That close. Here's our roadmap, in five big movements. First... our place in the animal kingdom, and how to read a phylogenetic tree. Second... what we share with the African apes — and what makes us different, especially walking on two legs. Third... the evidence for our common ancestry — fossils, genes, and culture, including the major fossil species. Fourth... the Out of Africa hypothesis. And fifth... South Africa's fossil sites, especially the Cradle of Humankind, and finally, a look at the alternative explanations people hold.` },
    { s: 'MICHAEL', t: `That's a big final episode.` },
    { s: 'TYLA', t: `[playfully] We're going out with a bang. And one important note before we start — and I'll repeat it later because it's a classic exam trap. Scientists do NOT say humans evolved from chimpanzees. They say humans and apes share a common ancestor.` },
    { s: 'MICHAEL', t: `Noted. Cousins, not grandparents.` },
    { s: 'TYLA', t: `[delighted] That's a perfect way to put it. Let's go.` },

    // Part 1
    { s: 'MICHAEL', t: `So where exactly do scientists put us?` },
    { s: 'TYLA', t: `Let's walk down the classification ladder, from the broadest group to the most specific. Modern humans are in the Kingdom Animalia — animals. Within that, we're vertebrates, with a backbone. Then Class Mammalia — mammals, which give birth to live young and feed them milk. Then Order Primates.` },
    { s: 'MICHAEL', t: `What makes something a primate?` },
    { s: 'TYLA', t: `Primates have hands with five fingers and an opposable thumb, flat fingernails instead of claws, and two eyes facing forward. Lemurs, baboons, monkeys, apes and humans are all primates. Within the primates, we're in the Family Hominidae, together with chimpanzees, bonobos, gorillas and orangutans. Then our genus is Homo, and our species is sapiens.` },
    { s: 'MICHAEL', t: `Homo sapiens. What does that actually mean?` },
    { s: 'TYLA', t: `"Homo" is Latin for "human," and "sapiens" means "wise." So Homo sapiens means "wise human" — a nod to our large brains. And every human alive today, everywhere on Earth, belongs to that one species.` },
    { s: 'MICHAEL', t: `Okay, so the ladder is: kingdom, class, order, family, genus, species.` },
    { s: 'TYLA', t: `That's the version in your textbook. Now, two words that sound almost identical but mean different things — and they're tested every year. Hominids are the whole Family Hominidae: modern humans, our extinct human ancestors, and the great apes — chimps, bonobos, gorillas and orangutans. Hominins are a smaller sub-group: only modern humans and our extinct human ancestors — no apes.` },
    { s: 'MICHAEL', t: `[hesitantly] Hominid, hominin... I'm going to mix those up.` },
    { s: 'TYLA', t: `[whispers] Here's the trick. [warmly] Hominin ends in "in" — like the IN-group. Just humans and our direct line. Hominid ends in "id" — the bigger group, with the apes included.` },
    { s: 'MICHAEL', t: `Hominin — in-group, only humans. Hominid — includes the apes. Got it.` },

    // Part 2
    { s: 'MICHAEL', t: `[sighs] And phylogenetic trees — I always panic when I see those in exam papers.` },
    { s: 'TYLA', t: `[reassuringly] Let's take the panic out. A phylogenetic tree is a branching diagram that shows the evolutionary relationships between different species — which ancestors gave rise to which descendants. Picture an upside-down family tree. Here are the rules for reading one. The root, at the bottom, is the ancestor. The tips of the branches, at the top, are the descendants. Moving upwards means moving forward in time.` },
    { s: 'MICHAEL', t: `So bottom is the past, top is the present.` },
    { s: 'TYLA', t: `Exactly. Next rule: wherever a line splits into two, that's a speciation event — one ancestral lineage giving rise to two or more daughter lineages. And the point where two branches join is their most recent common ancestor.` },
    { s: 'MICHAEL', t: `So the closer to the tips two branches join, the more closely related those species are?` },
    { s: 'TYLA', t: `[impressed] Exactly — that's the key skill. Think about your own family. You and your sibling share parents — a very recent common ancestor. You and your cousin share grandparents — one generation further back. You and your second cousin share great-grandparents. The further back you have to go to find the shared ancestor, the less closely related you are.` },
    { s: 'MICHAEL', t: `Ohh. So two branches that split recently are like siblings, and branches that split long ago are like distant cousins.` },
    { s: 'TYLA', t: `Perfect. And each lineage has a part of its history that's shared with other lineages — before the split — and a part that's unique to it — after the split. Now, let's apply it to the primates. Picture a tree with a timeline from fifty-five million years ago at the bottom, up to the present at the top.` },
    { s: 'MICHAEL', t: `Okay.` },
    { s: 'TYLA', t: `At the very bottom, about fifty-five million years ago, is the common ancestor of all primates. Branches peel off for lemurs, tarsiers, monkeys and baboons. Then gibbons branch off. Then, about ten million years ago, there's the common ancestor of the whole Family Hominidae. From there, orangutans branch off first, then gorillas. And finally, about five to six million years ago, there's the last split — between the line leading to chimpanzees and bonobos, and the line leading to humans.` },
    { s: 'MICHAEL', t: `[slowly, putting it together] So chimps are our closest living relatives, because our branches split most recently.` },
    { s: 'TYLA', t: `Exactly. And the line from that last split up to modern humans is the unique history of humans — that's what we'll explore in the fossil section.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 2. Humans vs African Apes — Parts 3-7
// ═══════════════════════════════════════════════════════════════════════
{
  num: 2,
  file: '2. Humans vs African Apes',
  segs: [
    // Part 3
    { s: 'MICHAEL', t: `So if we share an ancestor with the apes, we must share a lot of features.` },
    { s: 'TYLA', t: `We do. And scientists think many of these shared features arose because our common ancestors lived in trees — that's called an arboreal lifestyle. Let me give you the full list, and I'll explain why each one helps. One... a large brain relative to body size, for processing and storing information.` },
    { s: 'MICHAEL', t: `Number two?` },
    { s: 'TYLA', t: `Two eyes in the front of the head. Both eyes look at the same thing from slightly different angles, which gives binocular vision — and that means good depth perception, judging distance. Plus cones for colour vision.` },
    { s: 'MICHAEL', t: `[chuckles] That makes sense for leaping between branches. Misjudge the distance and you fall.` },
    { s: 'TYLA', t: `[chuckles] Exactly. Three... freely rotating arms at the shoulder — you can lift your arms above your head to swing from branches or reach for fruit. Four... long upper arms, or long front limbs, which help with grasping and swinging. Five... rotation around the elbow joint, so the forearm can twist and the wrist can flex and rotate. Six... bare fingertips with flat nails instead of claws — soft, sensitive pads protected by nails.` },
    { s: 'MICHAEL', t: `And the famous opposable thumb.` },
    { s: 'TYLA', t: `Seven... the opposable thumb — a thumb that can be placed opposite the other fingers on the same hand. Try it: touch your thumb to the tip of each of your fingers.` },
    { s: 'MICHAEL', t: `[playfully] Doing it now. Thumb to index, thumb to middle...` },
    { s: 'TYLA', t: `[laughs] That's what lets you grip a branch — or a pen, or a phone. Eight... upright posture — the back limbs are generally stronger, so apes can stand upright and use their hands. Nine... sexual dimorphism — clear differences in size or appearance between males and females of the same species. Ten... no tail — unlike monkeys and baboons. And eleven... being diurnal — active during the day rather than at night.` },
    { s: 'MICHAEL', t: `That's a lot. Large brain, eyes in front, rotating arms, long upper arms, elbow rotation, nails not claws, opposable thumb, upright posture, sexual dimorphism, no tail, diurnal.` },
    { s: 'TYLA', t: `[impressed] Eleven for eleven. And remember the note from the intro — scientists believe humans and modern apes share a common ancestor. A chimpanzee is NOT our direct ancestor.` },

    // Part 4
    { s: 'MICHAEL', t: `Okay, so what makes us different?` },
    { s: 'TYLA', t: `Most of the differences come back to one thing: bipedalism — the ability to walk on two legs. All apes can stand upright and even walk on two legs for short distances. But normally, chimps and gorillas are knuckle-walkers — they move on all four limbs, leaning on their knuckles. That's quadrupedalism. Humans walk upright on two legs as our normal, everyday way of moving. That's habitual bipedalism.` },
    { s: 'MICHAEL', t: `So bipedalism isn't just being able to stand on two feet. It's walking upright as your main way of moving.` },
    { s: 'TYLA', t: `Exactly — and that's an actual exam question. Now, why was bipedalism such an advantage? Five reasons. First... it frees the hands — to carry food, carry babies, use tools and handle weapons.` },
    { s: 'MICHAEL', t: `That's probably the biggest one.` },
    { s: 'TYLA', t: `Second... standing upright raises the eyes higher off the ground, giving a wider view of the surroundings — so you get an earlier warning of approaching predators, or a better view of potential prey. Picture yourself crouching in tall grass versus standing up straight — how much more you can see.` },
    { s: 'MICHAEL', t: `Third?` },
    { s: 'TYLA', t: `Third... walking upright is more energy-efficient for covering long distances. Fourth... an upright body exposes less surface area to direct sunlight in open areas — your textbook says about sixty percent less than a four-legged animal — and it lifts most of the body away from the hot ground, into cooling breezes. So it's easier to keep cool.` },
    { s: 'MICHAEL', t: `That makes sense on an open savanna in the midday sun.` },
    { s: 'TYLA', t: `Exactly. And fifth, in courtship behaviour, upright posture readily displays the male sex organ — that's listed in your textbook as an advantage linked to mate attraction.` },
    { s: 'MICHAEL', t: `[chuckles] Okay, noted. Free hands, better view, energy-efficient, less sun and cooler, and courtship display.` },

    // Part 5
    { s: 'MICHAEL', t: `And walking on two legs changed our skeletons?` },
    { s: 'TYLA', t: `Dramatically. Three key changes. The first is the position of the foramen magnum — that's for-AY-men MAG-num. It's the large hole in the base of the skull, where the spinal cord passes through to connect to the brain.` },
    { s: 'MICHAEL', t: `And where it sits tells you how the animal walks?` },
    { s: 'TYLA', t: `Exactly. Picture a chimp's skull from underneath. The foramen magnum is positioned towards the back of the skull — because a four-legged animal's head juts forward from the spine. Now picture a human skull from underneath. The foramen magnum is much further forward, closer to the centre — so the skull balances right on top of a vertical spine.` },
    { s: 'MICHAEL', t: `So — forward foramen magnum means upright walker. Backward means four-legged.` },
    { s: 'TYLA', t: `That's the rule, and it's the clue scientists use on fossil skulls. The second change is the shape of the spine. The human spine is more curved, in an S-shape. That S-curve puts the upper body — and the centre of gravity — directly above the pelvis when standing upright, which makes balancing easy. The chimp's spine is less curved, more of a C-shape. So when a chimp stands up, its weight pulls it forward, and the upright stance is unsteady.` },
    { s: 'MICHAEL', t: `[curiously] Like a tower that's stacked straight versus one that's leaning.` },
    { s: 'TYLA', t: `[delighted] Exactly. The third change is the pelvic girdle, or hip bones. The chimp pelvis is long and narrow, suited to knuckle-walking and providing rigidity. The human pelvis is short and wide — like a bowl — which supports the internal organs stacked vertically above it when we stand upright.` },
    { s: 'MICHAEL', t: `And the leg bones?` },
    { s: 'TYLA', t: `Good question. Because of the shape of the human pelvis, the thigh bone, the femur, is angled inwards towards the knee. That brings the knees and feet close together under the body's centre of gravity, so we can place one foot in front of the other when we walk, and carry our weight efficiently. A chimp's femur goes more or less straight down.` },
    { s: 'MICHAEL', t: `So — foramen magnum forward, S-shaped spine, short and wide pelvis, and an inward-angled femur. All adaptations for walking upright.` },

    // Part 6
    { s: 'MICHAEL', t: `What about the skull itself, apart from the foramen magnum?` },
    { s: 'TYLA', t: `Several more differences. First, the brain, or cranium size. Over the course of human evolution, brain size roughly tripled. A chimp's brain is about three hundred and fifty cubic centimetres; a modern human's is about fourteen hundred and fifty.` },
    { s: 'MICHAEL', t: `[gasps] That's huge.` },
    { s: 'TYLA', t: `It is. Second... brow ridges — the bony ridge above the eye sockets. Chimps have a thick, well-developed brow ridge. In humans, the brow ridge is very small or absent. As our braincase got bigger, the forehead became flatter and more vertical, and the brow ridge shrank.` },
    { s: 'MICHAEL', t: `And the teeth and jaws?` },
    { s: 'TYLA', t: `This part links to diet. As humans evolved, the diet changed from mainly plant material to a more varied diet that included meat. And once our ancestors learnt to control fire and cook food, food became softer and easier to chew. So the jaws, teeth and palate changed. Picture looking up at the roof of the mouth. A chimp's palate is long and rectangular, like a U with straight parallel sides. A human palate is smaller and almost semi-circular, rounded like a horseshoe.` },
    { s: 'MICHAEL', t: `And canines?` },
    { s: 'TYLA', t: `The canines — the pointy "eye teeth." In chimps, they're large and pointed. In humans, they're small. With softer cooked food, there was no longer a need for big canines and strong jaws to tear tough food. Chimps also have big gaps between their teeth, to fit those big canines when the mouth closes — humans have small gaps.` },
    { s: 'MICHAEL', t: `And the jaw sticking out?` },
    { s: 'TYLA', t: `That's described with a lovely word: prognathous, prog-NATH-us. It means the jaw protrudes forward beyond a vertical line drawn down through the eye. Chimps have large, prognathous jaws. Humans have small, less prognathous jaws — our faces are much flatter.` },
    { s: 'MICHAEL', t: `Prognathous — jaw sticking out. Got it.` },
    { s: 'TYLA', t: `And last — the cranial ridge. This is a bony ridge running across the top of the skull, from front to back, where powerful chewing muscles attach. Adult animals that rely on very strong biting and clenching have a large cranial ridge — gorillas, for example. In modern humans, with softer cooked food and smaller jaws, we didn't need huge jaw muscles, so the cranial ridge disappeared.` },
    { s: 'MICHAEL', t: `[excitedly] So cooking basically reshaped our faces. Smaller teeth, smaller jaws, no ridge.` },
    { s: 'TYLA', t: `That's a great way to put it.` },

    // Part 7
    { s: 'MICHAEL', t: `Can we do the whole comparison quickly? Because I know there's always a table question.` },
    { s: 'TYLA', t: `Absolutely — let's do it rapid-fire. I'll name the feature, you give me human versus ape.` },
    { s: 'MICHAEL', t: `[eagerly] Go.` },
    { s: 'TYLA', t: `Cranium.` },
    { s: 'MICHAEL', t: `Large in humans, whereas small in apes.` },
    { s: 'TYLA', t: `Brow ridges.` },
    { s: 'MICHAEL', t: `Not well developed in humans, whereas prominent in apes.` },
    { s: 'TYLA', t: `Spine.` },
    { s: 'MICHAEL', t: `S-shaped in humans, whereas C-shaped in apes.` },
    { s: 'TYLA', t: `Pelvis.` },
    { s: 'MICHAEL', t: `Short and wide, whereas long and narrow.` },
    { s: 'TYLA', t: `Canines and gaps between teeth.` },
    { s: 'MICHAEL', t: `Small canines and small gaps, whereas large canines and big gaps.` },
    { s: 'TYLA', t: `Palate.` },
    { s: 'MICHAEL', t: `Small and semi-circular, whereas long and rectangular.` },
    { s: 'TYLA', t: `Jaws.` },
    { s: 'MICHAEL', t: `Small and less prognathous, whereas large and more prognathous.` },
    { s: 'TYLA', t: `Cranial ridge.` },
    { s: 'MICHAEL', t: `None in humans, whereas present in apes.` },
    { s: 'TYLA', t: `And foramen magnum.` },
    { s: 'MICHAEL', t: `Forward position in humans, whereas backward position in apes.` },
    { s: 'TYLA', t: `[impressed] Nine for nine. And did you hear yourself? "Whereas" every time. That's what turns two lists into a proper comparison.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 3. Fossil Evidence — Parts 8-11
// ═══════════════════════════════════════════════════════════════════════
{
  num: 3,
  file: '3. Fossil Evidence',
  segs: [
    // Part 8
    { s: 'MICHAEL', t: `[groans] Okay, the fossils. But first, all those Latin names scare me.` },
    { s: 'TYLA', t: `[reassuringly] Let's decode them, because once you know what they mean, they're much easier to remember. Every fossil species has two names — the first is the genus, the second is the species. You'll meet three genera: Ardipithecus, Australopithecus and Homo. And there's a word hiding in two of them — "pithecus" is Greek for "ape."` },
    { s: 'MICHAEL', t: `So Australo-pithecus is... some kind of ape.` },
    { s: 'TYLA', t: `Exactly. Ardipithecus — AR-dee-PITH-uh-kus — "ardi" means "ground" or "floor." And the species name ramidus means "root" — so the name points to how close this species is to the roots of humanity. Australopithecus — os-truh-low-PITH-uh-kus — "australis" is Latin for "southern," so it means "southern ape."` },
    { s: 'MICHAEL', t: `Southern ape. Okay, I'll remember that.` },
    { s: 'TYLA', t: `Then the Australopithecus species. Afarensis comes from Afar, a region in Ethiopia. Africanus means "of Africa." Sediba is a Sesotho word meaning "natural spring" or "well." And robustus means robust, strong, heavy-set.` },
    { s: 'MICHAEL', t: `[delighted] A Sesotho name in the scientific record. I love that.` },
    { s: 'TYLA', t: `And then Homo, Latin for "human." Homo habilis means "handy" or "skilful human." Homo erectus means "upright human." Homo sapiens, as we said, is "wise human." Your textbook also mentions Homo ergaster — "working man" — Homo heidelbergensis and Homo neanderthalensis, both named after places in Europe where they were found, and Homo naledi, where "naledi" means "star."` },
    { s: 'MICHAEL', t: `[surprised] Naledi — star. Hey — that's the name of our old co-host!` },
    { s: 'TYLA', t: `[laughs] It is! A star in more ways than one. Now, a word on what drove human evolution. Climate has always changed, and organisms can adapt to slow changes. But faster climate changes, with shortages of food and water, put enormous pressure on organisms to adapt. Hominins survived and flourished because of their ability to walk upright, and their larger brains' ability to communicate, solve problems, and make tools.` },
    { s: 'MICHAEL', t: `And the timeline?` },
    { s: 'TYLA', t: `Picture a timeline running from about six million years ago up to today. At the bottom, the oldest genus, Ardipithecus, around five to four million years ago. Above it, Australopithecus, from about four million to around one point six million years ago. Overlapping and above that, the genus Homo, from about two point two million years ago to the present. And here's an important point: there's no single, straight line from one species to the next. Several species lived at the same time, and many branches died out. Fossils give us only a few snapshots of the story.` },

    // Part 9
    { s: 'MICHAEL', t: `So let's start at the bottom. Ardipithecus.` },
    { s: 'TYLA', t: `Ardipithecus ramidus is the earliest hominin species in your notes. It lived about five to four million years ago, and its fossils were found in Ethiopia in nineteen ninety-three, by a team led by Tim White. It was small — about one point two metres tall, weighing about fifty kilograms — and seventeen fossils were found. It's considered an intermediate between apes and humans.` },
    { s: 'MICHAEL', t: `What made it intermediate?` },
    { s: 'TYLA', t: `It had a mix of ape-like and human-like features. Ape-like: a small brain — about three hundred to three hundred and fifty millilitres, the same as an adult chimp — large, heavy brow ridges, and very protruding, prognathous jaws. But human-like: the foramen magnum was in a forward position, its canines were smaller than a chimp's, and its pelvis was adapted for both walking on two legs and climbing trees.` },
    { s: 'MICHAEL', t: `[slowly, putting it together] So — forward foramen magnum and a pelvis for walking... it was already partly bipedal, but still at home in the trees.` },
    { s: 'TYLA', t: `[impressed] Exactly. One foot in the trees, one on the ground — so to speak.` },

    // Part 10
    { s: 'MICHAEL', t: `Next — Australopithecus.` },
    { s: 'TYLA', t: `Fossils of this genus have been found only in Africa — along the Rift Valley in East Africa, and in South Africa. Australopithecines lived roughly four million to one point six million years ago. Three species to know, each with famous fossils. First — Australopithecus afarensis, from about three point nine to two point eight million years ago. Its fossils come from Ethiopia, Kenya and Tanzania, and the first was found by Donald Johansen in nineteen seventy-four.` },
    { s: 'MICHAEL', t: `And that's Lucy, right?` },
    { s: 'TYLA', t: `That's Lucy — a partial skeleton discovered in nineteen seventy-four, who lived about three point two million years ago. She was well adapted to life in the trees, but also walked upright with proper bipedalism. And then there are the Laetoli footprints in Tanzania, discovered in nineteen seventy-six by Mary Leakey — fossilised footprints in volcanic ash, about three and a half million years old.` },
    { s: 'MICHAEL', t: `[amazed] Footprints? From three and a half million years ago?` },
    { s: 'TYLA', t: `Picture a trail of footprints pressed into wet volcanic ash, which then hardened. They show a heel, an arch, and a big toe in line with the other toes — just like a modern human footprint. It's clear evidence that our ancestors walked upright with a free-striding gait that long ago.` },
    { s: 'MICHAEL', t: `[softly] That gives me chills, honestly. What's the second species?` },
    { s: 'TYLA', t: `Australopithecus africanus, from about three point two to two million years ago — and this is where South Africa comes in. In nineteen twenty-four, Raymond Dart described the Taung child, a fossil from Taung in the North West province — at first, many scientists refused to accept it as a hominin. Then Mrs Ples, the most complete skull of this species, discovered by Robert Broom at the Sterkfontein caves in nineteen forty-seven. And Little Foot — a nearly complete skeleton found at Sterkfontein in nineteen ninety-seven by Ron Clarke, dated to roughly four point two to three point nine million years old.` },
    { s: 'MICHAEL', t: `And the third?` },
    { s: 'TYLA', t: `Australopithecus sediba, from about two to one point six million years ago, found at the Malapa cave in two thousand and nine by Lee Berger — the famous fossil is called Karabo. It's considered a possible ancestor of the genus Homo.` },
    { s: 'MICHAEL', t: `How do they differ from each other?` },
    { s: 'TYLA', t: `There's a clear trend from afarensis to africanus to sediba. Brain size increases slightly — roughly three hundred and seventy-five to five hundred and fifty millilitres in afarensis, up to about six hundred and twenty in africanus. Brow ridges get smaller. Jaws go from very prognathous to less prognathous. Canines go from large and pointed to not very long. And the pelvis goes from intermediate — bipedal plus tree-climbing in afarensis — to fully adapted for walking upright in africanus and sediba. All three have a forward foramen magnum and no cranial ridge.` },
    { s: 'MICHAEL', t: `And Australopithecus robustus?` },
    { s: 'TYLA', t: `Australopithecus robustus lived about two to one point two million years ago, and its fossils have been found only in South Africa. Its classification is uncertain — today, it's usually placed in a separate genus, Paranthropus — pa-RAN-thruh-pus — together with a similar species from Tanzania. They had massive jaws and a cranial ridge for powerful chewing.` },

    // Part 11
    { s: 'MICHAEL', t: `And finally — our own genus. Homo.` },
    { s: 'TYLA', t: `The genus Homo has existed from about two point two million years ago to today. It includes one living species — Homo sapiens — and somewhere between fifteen and twenty extinct species. The most significant difference from Australopithecus is a much larger brain — about thirty percent larger. Three species to know. Homo habilis, from about two point two to one point six million years ago, found at Olduvai Gorge in Tanzania in nineteen sixty by Louis and Mary Leakey.` },
    { s: 'MICHAEL', t: `Homo habilis — handy human. So, tools?` },
    { s: 'TYLA', t: `[delighted] Exactly — we'll get to that in Part 13. Then Homo erectus, from about two million to four hundred thousand years ago. It was first found in Java, Indonesia, in eighteen ninety-one, by Eugene Dubois, and also in South Africa and Kenya. And Homo sapiens, from about two hundred thousand years ago to today, with the oldest fossils found at Omo, in Ethiopia.` },
    { s: 'MICHAEL', t: `And how do they compare?` },
    { s: 'TYLA', t: `Height goes from about one point one to one point three metres in habilis, up to one point six to one point eight metres in erectus and sapiens. Brain size goes from about six hundred and fifty millilitres in habilis, to about nine hundred to a thousand in erectus, to about twelve hundred to eighteen hundred in sapiens. Brow ridges go from present, to distinct but small, to none. Jaws go from less prognathous, to not prognathous at all in sapiens. Canines are small in all three. All three have a forward foramen magnum and a pelvis fully adapted for walking upright. Erectus had a small cranial ridge; the other two had none.` },
    { s: 'MICHAEL', t: `So the trend over all of human evolution is — brain gets bigger, face gets flatter, jaws and teeth get smaller, and bipedalism becomes complete.` },
    { s: 'TYLA', t: `[impressed] That's the whole trend in one sentence. Now, one more important idea. When you see these species laid out in a row, it's tempting to picture a straight line — one species turning into the next. But the phylogenetic tree of human evolution actually looks like a bush, with many branches. Several species lived at the same time, and many branches — like Paranthropus — went extinct and didn't lead to us at all.` },
    { s: 'MICHAEL', t: `So it's not a ladder where each step leads to the next.` },
    { s: 'TYLA', t: `Exactly. As the evolutionary biologist Stephen Jay Gould — the same Gould from last episode's punctuated equilibrium — put it: [whispers] "evolution is a bush, not a ladder."` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 4. Genetic and Cultural Evidence — Parts 12-13
// ═══════════════════════════════════════════════════════════════════════
{
  num: 4,
  file: '4. Genetic and Cultural Evidence',
  segs: [
    // Part 12
    { s: 'MICHAEL', t: `Fossils are one line of evidence. What does DNA say?` },
    { s: 'TYLA', t: `Studies comparing nuclear DNA between humans and apes give three key findings. First... the genetic difference between modern humans is tiny — on average, any two people share about ninety-nine point nine percent of their DNA. Second... humans and the great apes share most of their genes too — between about ninety-six point nine and ninety-eight point eight percent.` },
    { s: 'MICHAEL', t: `[curious] And the closest?` },
    { s: 'TYLA', t: `Third... the chimpanzee is our closest living relative. Humans and chimps share about ninety-eight point eight percent of their DNA — a difference of about one point two percent. That sounds tiny, but it's ten to twelve times larger than the difference between any two humans.` },
    { s: 'MICHAEL', t: `[surprised] So two random people anywhere in the world are way more similar than a human and a chimp — but a human and a chimp are still incredibly similar.` },
    { s: 'TYLA', t: `Exactly. And scientists also use mitochondrial DNA — remember from Episode 1 that mtDNA is inherited from the mother. By measuring the differences in mtDNA between two species, scientists can estimate how long ago the species separated. Picture a diagram with a long line for the human lineage, and other lineages branching off. Baboons branched off about twenty million years ago, orangutans about twelve to sixteen million, gorillas about six to eight million, and chimpanzees about four point six to six point two million years ago.` },
    { s: 'MICHAEL', t: `And all that genetic similarity means...?` },
    { s: 'TYLA', t: `Given how much genetic material humans share with the other hominids, they must have had a common ape-like ancestor, living about five to six million years ago.` },

    // Part 13
    { s: 'MICHAEL', t: `And the third line of evidence is culture?` },
    { s: 'TYLA', t: `Exactly. A very important part of human evolution is the development and use of tools. But here's a subtle point. Tool use isn't unique to humans. Chimpanzees in the wild poke grass stems into termite mounds to fish out termites, and use stones to crack nuts. Some monkeys use stones too.` },
    { s: 'MICHAEL', t: `So what's unique?` },
    { s: 'TYLA', t: `[emphatically] The manufacturing of tools — deliberately shaping a tool — is unique to the genus Homo. And tool-making got more sophisticated over time. Let me take you up the ladder. The earliest are Oldowan tools, named after Olduvai Gorge, from about two point six million years ago, associated with Homo habilis. Picture a rounded stone with sharp flakes knocked off one edge — simple chopping and cutting tools.` },
    { s: 'MICHAEL', t: `[proudly] That's why habilis is "handy."` },
    { s: 'TYLA', t: `Exactly. Next, the hand axe, from about one point seven million years ago, associated with Homo erectus — a carefully shaped, teardrop-shaped stone with sharp edges all around, found at sites in Kenya and South Africa. Then, about two hundred and fifty thousand years ago, smaller, sharper, knife-like flakes and scrapers appear, associated with Homo sapiens. Around forty to fifty thousand years ago, longer blade-like tools. About twenty thousand years ago, spears with stone or bone tips fixed to shafts, and tools made with microliths — small stone chips fastened to a shaft with animal sinew. And about five thousand years ago, the stone age ended, and metals took over — copper, bronze, tin, and eventually iron.` },
    { s: 'MICHAEL', t: `So tools got smaller, sharper and more complex over time.` },
    { s: 'TYLA', t: `Exactly. Two other cultural developments had a big impact. The control of fire — for warmth, for cooking food, and for bringing groups together socially. And art. The earliest known art is about a hundred thousand years old, and the earliest cave paintings — which South Africa has in abundance — date to about forty thousand years ago. The rock art of the San people often features the eland, an antelope of great spiritual significance to them.` },
    { s: 'MICHAEL', t: `Why would art matter for evolution?` },
    { s: 'TYLA', t: `[thoughtful] Scientists suggest that art helped bond individuals together, sustained relationships that improved reproductive success, and was part of early spiritual development. It's a sign of complex, symbolic thinking — something unique to our lineage.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 5. Out of Africa Hypothesis — Parts 14-15
// ═══════════════════════════════════════════════════════════════════════
{
  num: 5,
  file: '5. Out of Africa Hypothesis',
  segs: [
    // Part 14
    { s: 'MICHAEL', t: `Okay — Out of Africa. What exactly does it say?` },
    { s: 'TYLA', t: `The Out of Africa hypothesis states that all modern humans originated in Africa, and then migrated out of Africa to populate the rest of the world. Here's the timeline. About a hundred and fifty to two hundred thousand years ago, ancestors of Homo sapiens — such as Homo erectus — evolved into Homo sapiens in eastern and southern Africa. Then, about sixty to seventy thousand years ago, modern humans began spreading out of Africa — into the Middle East, then Asia, Europe and Australia, and eventually, about twenty thousand years ago, into North America.` },
    { s: 'MICHAEL', t: `How did they get out of Africa?` },
    { s: 'TYLA', t: `Picture a world map with red arrows fanning out from East Africa. During an ice age, so much water was locked up in ice that sea levels dropped — including in the Red Sea, between Africa and the Arabian Peninsula. That made it possible to cross into the Middle East, and from there the arrows spread east into Asia and Australia, north-west into Europe, and later across a land bridge into the Americas.` },
    { s: 'MICHAEL', t: `And why is it called a hypothesis, not a theory?` },
    { s: 'TYLA', t: `[impressed] Great exam question — remember Part 1 of last episode. It's a hypothesis because it's an explanation that's still being tested as new evidence is found. New fossils and new genetic studies could still refine or change the details. Two main lines of evidence support it: genetic evidence and the fossil record. Let's start with genetics — specifically mitochondrial DNA.` },
    { s: 'MICHAEL', t: `Mitochondrial DNA again — inherited only from the mother.` },
    { s: 'TYLA', t: `Exactly, and that's what makes it so useful. Unlike nuclear DNA, mtDNA isn't mixed up by crossing over and fertilisation. It's passed down unchanged from mother to child, generation after generation, along the maternal line. The only changes come from occasional mutations, which happen at a fairly steady rate.` },
    { s: 'MICHAEL', t: `[curiously] So scientists can count the mutations to work out how old a lineage is?` },
    { s: 'TYLA', t: `Exactly — the mutations act like a molecular clock. Each mutation is a marker. The more markers a population has built up, the older it is. And here are the findings. First... African populations of Homo sapiens have the greatest number of mtDNA markers — the most variation — so they're the oldest human populations. Second... the most recent common ancestor whose mtDNA is found in all living humans must have lived in eastern Africa, about one hundred and fifty thousand years ago. Third... based on the markers in non-African populations, modern humans left Africa about sixty to seventy thousand years ago.` },
    { s: 'MICHAEL', t: `And that common ancestor — that's Mitochondrial Eve?` },
    { s: 'TYLA', t: `That's Mitochondrial Eve — the most recent woman from whom all living humans have inherited their mitochondrial DNA, through an unbroken line of mothers. And one subtle point: she wasn't the only woman alive at the time, and she wasn't the first human. She's simply the one whose maternal line happens to have survived in everyone today.` },
    { s: 'MICHAEL', t: `[amazed] So every single person alive has a line of mothers going all the way back to one woman in East Africa.` },
    { s: 'TYLA', t: `[warmly] Every single one of us.` },

    // Part 15
    { s: 'MICHAEL', t: `And the fossil side of the evidence?` },
    { s: 'TYLA', t: `Four key points, and they build on each other. First... fossils of the earliest hominin species, Ardipithecus and Australopithecus, have been found only in Africa — nowhere else in the world. Second... fossils of the earliest species of our own genus, Homo habilis, have also been found only in Africa.` },
    { s: 'MICHAEL', t: `Third?` },
    { s: 'TYLA', t: `Third... Homo erectus fossils have been found outside Africa, in Asia and Europe — but the oldest Homo erectus fossils anywhere in the world are from Africa, from about one point nine to one point four million years ago in eastern and southern Africa. So erectus also started in Africa before spreading out. And fourth... Homo sapiens emerged in Africa. The oldest Homo sapiens fossils, from near Ethiopia's Omo River, are dated to between about one hundred and ninety-five thousand and one hundred and sixty thousand years ago.` },
    { s: 'MICHAEL', t: `[slowly, putting it together] So every step — the oldest hominins, the first Homo, the oldest erectus, the oldest sapiens — all in Africa first.` },
    { s: 'TYLA', t: `Exactly. Put that together with the mtDNA evidence, and both independent lines point to a single African origin. And here's a common mistake: some students think modern humans evolved separately in several different places around the world. But genetic and fossil evidence strongly indicate a single African origin.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 6. Fossil Sites — Parts 16-17
// ═══════════════════════════════════════════════════════════════════════
{
  num: 6,
  file: '6. Fossil Sites',
  segs: [
    // Part 16
    { s: 'MICHAEL', t: `Okay — South Africa. The Cradle of Humankind.` },
    { s: 'TYLA', t: `[excited] The Cradle of Humankind is a World Heritage Site in Gauteng, north-west of Johannesburg. It includes about fifteen different fossil sites, and together they've yielded more hominin fossils than any other site in the world. Let me take you through the key ones. First — the Sterkfontein caves. The first hominin was found there in nineteen thirty-six, and since then, about five hundred hominin fossils have been found — almost forty percent of all hominin fossils found worldwide.` },
    { s: 'MICHAEL', t: `[shocked] Forty percent? From one set of caves?` },
    { s: 'TYLA', t: `[laughs] From one set of caves. And we've already met its famous fossils. Mrs Ples, found by Robert Broom in nineteen forty-seven — the most complete skull of Australopithecus africanus. Little Foot, found by Ron Clarke with Stephen Motsumi and Nkwane Molefe in nineteen ninety-seven — about four point two to three point nine million years old, the oldest fossil remains from the Cradle. And in two thousand and thirteen, Lee Berger and his team excavated about fifteen hundred fossils, from at least fifteen individuals, of a species no one had known before — Homo naledi.` },
    { s: 'MICHAEL', t: `A whole new species! What are the other sites?` },
    { s: 'TYLA', t: `Swartkrans — the largest sample of Paranthropus robustus fossils anywhere, along with many Homo fossils. Kromdraai — where Robert Broom first discovered Paranthropus robustus in nineteen thirty-eight. Malapa — where Karabo, Australopithecus sediba, was found, about two million years old, considered a transitional species linking earlier Australopithecus and the genus Homo. And other sites include Drimolen, Plover's Lake and Gladysvale.` },
    { s: 'MICHAEL', t: `And why exactly is the Cradle so important? I bet that's a question.` },
    { s: 'TYLA', t: `It is. Three main reasons, linked to three species. One... Australopithecus africanus. The first adult skull was found at Sterkfontein in nineteen thirty-six, and a nearly complete skeleton, Little Foot, in nineteen ninety-seven. The fossils there cover a longer timeframe than anywhere else — about a million years, from three to two million years ago — and this species is found only in South Africa. It's considered an early ancestor of the genus Homo.` },
    { s: 'MICHAEL', t: `Two?` },
    { s: 'TYLA', t: `Two... Paranthropus robustus. Found at Kromdraai and Swartkrans, and only in South Africa. It lived at the same time as Homo habilis, and fossils of both have been found together at the Cradle. That raises a fascinating question — could a speciation event have happened right there?` },
    { s: 'MICHAEL', t: `And three?` },
    { s: 'TYLA', t: `Three... Homo erectus. The first Homo erectus fossils in the Cradle were found by Robert Broom at Swartkrans. And at Sterkfontein, there's the first and only association of Homo erectus with early stone tools like the hand axe.` },

    // Part 17
    { s: 'MICHAEL', t: `Are there important sites outside the Cradle?` },
    { s: 'TYLA', t: `Several. In South Africa, there's Taung, in the North West province — where the Taung child was found. It was the first ever specimen of Australopithecus africanus, and it suggested that humans originated in Africa, not Asia, as many scientists believed at the time. Then the Makapansgat valley, near Mokopane in Limpopo, where Raymond Dart began research in nineteen forty-seven. And Florisbad, in the Free State, where in nineteen thirty-two a fairly complete skull about two hundred and sixty thousand years old was found. It has features linking it to both Homo heidelbergensis and early Homo sapiens — so it's probably a transitional fossil.` },
    { s: 'MICHAEL', t: `And along the coast?` },
    { s: 'TYLA', t: `Border Cave in the Lebombo Mountains, and Blombos Cave and Klasies River Cave along the southern Cape coastline — all important sites for early modern humans.` },
    { s: 'MICHAEL', t: `And the rest of Africa?` },
    { s: 'TYLA', t: `Picture the Great Rift Valley — a two-thousand-kilometre crack in the Earth's crust running through Ethiopia, Kenya and Tanzania, with fossil sites all along it. In Ethiopia, at Hadar, Donald Johansen discovered the first Australopithecus afarensis in nineteen seventy-four — and over three hundred and sixty more skeletons have been found there since, along with Homo habilis fossils and Oldowan tools. At the Middle Awash, Tim White found many Ardipithecus ramidus fossils.` },
    { s: 'MICHAEL', t: `Kenya?` },
    { s: 'TYLA', t: `In Kenya, at Turkana, Richard Leakey's team found the most complete Homo erectus skeleton ever — the Turkana boy, about one point six to one point five million years old. And the Omo fossils of early Homo sapiens, about a hundred and ninety-five thousand years old, were also found by Richard Leakey. And in Tanzania, at Olduvai Gorge, Louis and Mary Leakey discovered Homo habilis in nineteen sixty, and in nineteen fifty-nine Mary Leakey found Paranthropus boisei, nicknamed "Nutcracker Man." And of course, the Laetoli footprints.` },
    { s: 'MICHAEL', t: `[excitedly] So — South Africa for the Cradle, and East Africa for the Rift Valley. Between them, they hold most of the story.` },
    { s: 'TYLA', t: `Exactly.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 7. Alternatives to Evolution — Part 18 + Outro
// ═══════════════════════════════════════════════════════════════════════
{
  num: 7,
  file: '7. Alternatives to Evolution',
  segs: [
    // Part 18
    { s: 'MICHAEL', t: `The textbook ends with alternatives to evolution. How should we handle that?` },
    { s: 'TYLA', t: `[thoughtful] Respectfully, and accurately. Evolution is a well-established scientific theory, based on real-world observation and evidence. But people hold a range of other explanations, often rooted in faith, and CAPS asks you to know four of them. First, creationism. Creationists believe all life was created individually by a supreme being using supernatural powers, and that existing species did not evolve from earlier species.` },
    { s: 'MICHAEL', t: `Second?` },
    { s: 'TYLA', t: `Intelligent design. Supporters of intelligent design don't accept that natural selection can produce complex structures from simpler ones. They argue that the complexity of living things points to an intelligent cause.` },
    { s: 'MICHAEL', t: `And the third?` },
    { s: 'TYLA', t: `Theistic evolution. Theistic evolutionists believe in a divine being who created the natural world through the processes we call evolution. Evolution is the tool the supreme being uses to create the diversity of life. For theistic evolutionists, science and religion can co-exist.` },
    { s: 'MICHAEL', t: `And fourth?` },
    { s: 'TYLA', t: `Literalism. Literalists interpret their scriptural texts literally. For example, Christian literalists take the creation accounts in the Book of Genesis literally. It's a narrower, more restricted form of creationism.` },
    { s: 'MICHAEL', t: `So for the exam, we just need to know what each view says.` },
    { s: 'TYLA', t: `[gently] Exactly. Know what each one claims, and how it differs from the scientific theory of evolution. People's beliefs are personal, and in the exam, your job is simply to describe each position accurately.` },

    // Outro
    { s: 'TYLA', t: `[excited] Okay, Michael — same tradition as always, and for the very last time. Give me the whole chapter, start to finish, in one go.` },
    { s: 'MICHAEL', t: `[laughs] Deep breath — last one! Humans are in the Kingdom Animalia, Class Mammalia, Order Primates, Family Hominidae, genus Homo, species sapiens — the wise human. Hominids include us, our ancestors and the great apes; hominins are just us and our ancestors. On a phylogenetic tree, the root is the ancestor, the tips are descendants, branching is speciation, and humans and chimps share a common ancestor from about five to six million years ago — chimps are our cousins, not our ancestors. We share a lot with apes from our tree-living past: large brains, eyes in front, rotating arms, nails, opposable thumbs, sexual dimorphism, no tail, and being diurnal.` },
    { s: 'TYLA', t: `Keep going.` },
    { s: 'MICHAEL', t: `The big difference is bipedalism — walking upright — which frees the hands, gives a better view, saves energy, and keeps us cooler. It changed our skeleton: a forward foramen magnum, an S-shaped spine, a short, wide pelvis, and an inward-angled femur. Our skulls changed too — a bigger brain, small brow ridges, a semi-circular palate, small canines, less prognathous jaws, and no cranial ridge, partly because cooking softened our food. The fossils start with Ardipithecus ramidus in Ethiopia; then Australopithecus — afarensis with Lucy and the Laetoli footprints, africanus with the Taung child, Mrs Ples and Little Foot, and sediba with Karabo; then Homo — habilis, erectus and sapiens, with bigger and bigger brains. But evolution is a bush, not a ladder.` },
    { s: 'TYLA', t: `[eagerly] And the rest?` },
    { s: 'MICHAEL', t: `Genetically, humans share ninety-nine point nine percent of DNA with each other and about ninety-eight point eight percent with chimps. Culturally, only Homo manufactures tools — from Oldowan tools with habilis, to hand axes with erectus, to flakes, blades and microliths with sapiens — plus fire and art. The Out of Africa hypothesis says modern humans evolved in Africa and spread across the world about sixty to seventy thousand years ago — supported by mtDNA, which shows African populations are the oldest and traces us to Mitochondrial Eve in East Africa, and by fossils, since all the oldest hominins are African. The Cradle of Humankind in Gauteng — Sterkfontein, Swartkrans, Kromdraai, Malapa — has more hominin fossils than anywhere on Earth. And alternatives to evolution include creationism, intelligent design, theistic evolution and literalism.` },
    { s: 'TYLA', t: `[amazed] ...Michael. That was flawless. Every fossil, every site, every date.` },
    { s: 'MICHAEL', t: `[softly] You know, it's kind of crazy. At the start of the year, I skipped past the DNA chapter because it looked too intense. And now I just explained where the entire human species came from.` },
    { s: 'TYLA', t: `[warmly] That's the whole point of this series. And honestly — look how it all connects. DNA from Episode 1 became the mutations and variation of natural selection. Meiosis from Episode 2 became the crossing over that shuffles our genes. Genetics became the mitochondrial DNA that traced us back to Africa. It was all one story — the story of life.` },
    { s: 'MICHAEL', t: `[thoughtful] Life, decoded.` },
    { s: 'TYLA', t: `[delighted] Life, decoded. To everyone who listened to all ten episodes — thank you. You've worked through the entire Grade 12 Life Sciences curriculum, one conversation at a time. Go back to the parts that tripped you up, use the exam tips, and walk into that exam knowing you understand it, not just memorised it.` },
    { s: 'MICHAEL', t: `[excitedly] And good luck! You've got this.` },
    { s: 'TYLA', t: `[warmly] From all of us here at LIFE, DECODED — we came out of Africa, and now, so do you... out into that exam hall, ready. Thanks for listening, everyone.` },
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

  console.log(`Life, Decoded — Episode 10: Human Evolution (${PRIMARY_MODEL}) — running ${sectionsToRun.length} of ${SECTIONS.length} file(s)\n`);

  for (const sec of sectionsToRun) {
    console.log(`\n▶ ${sec.file}`);
    await generateSection(sec, ffmpegAvailable, silenceShort);
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final files.`);
}

main().catch(e => { console.error(e); process.exit(1); });

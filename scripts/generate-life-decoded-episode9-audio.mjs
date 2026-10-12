/**
 * Life, Decoded — Episode 9: "Evolution by Natural Selection"
 * ElevenLabs audio generator — Eleven v4
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-episode9-audio.mjs
 *
 * Re-record only specific files by passing their numbers:
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-episode9-audio.mjs 4 6
 *
 * Seven output MP3s:
 *   1. What Evolution Is                      — Intro + Part 1
 *   2. Evidence for Evolution                 — Parts 2-7
 *   3. Variation                              — Parts 8-10
 *   4. Theories of Evolution                  — Parts 11-15
 *   5. Artificial Selection                   — Part 16
 *   6. Speciation and Reproductive Isolation  — Parts 17-19
 *   7. Evolution in Present Times             — Part 20 + Outro
 *
 * Model: Eleven v4 (eleven_v4), falling back to Eleven v3 (eleven_v3) if v4 fails.
 * Both understand bracketed audio tags. v4 has only Stability + Similarity
 * (no Style/Speed) and no SSML, so pacing comes from "..." and "—".
 *
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
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-life-decoded-episode9-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'Life-Decoded-Episode-9');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'life-decoded-episode-9');

// ─────────────────────────────────────────────────────────────────────────
const SECTIONS = [

// ═══════════════════════════════════════════════════════════════════════
// 1. What Evolution Is — Intro + Part 1
// ═══════════════════════════════════════════════════════════════════════
{
  num: 1,
  file: '1. What Evolution Is',
  segs: [
    // Intro
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to LIFE, DECODED. We're into the final stretch of the series now — two episodes left, and they're both about one enormous idea. Today we're talking about evolution by natural selection.` },
    { s: 'MICHAEL', t: `[excitedly] Okay, this is the big one. Darwin, finches, survival of the fittest... I feel like I know bits of it, but I couldn't explain how it all fits together.` },
    { s: 'TYLA', t: `That's exactly why we're here. And here's something cool — this chapter quietly ties together almost everything we've done this year. DNA from Episode 1, meiosis from Episode 2, genetics and inheritance from Episode 5. Evolution is where all of that pays off.` },
    { s: 'MICHAEL', t: `So it's the season finale where all the plot lines come together.` },
    { s: 'TYLA', t: `[laughs] Pretty much. Here's the roadmap, in five big movements. First... what evolution actually is, and the difference between a hypothesis and a theory. Second... the evidence — fossils, body structures, where species live, and DNA. Third... variation — where all the differences between individuals come from. Fourth... the theories of how evolution happens — Lamarck, Darwin, and punctuated equilibrium — plus artificial selection. And fifth... how brand-new species form, what keeps them separate, and how evolution is happening right now, in hospitals and on farms.` },
    { s: 'MICHAEL', t: `Right now? Like, today?` },
    { s: 'TYLA', t: `[playfully] Today. Stick around for Part 20 — it's one of my favourite bits. And next episode, we'll zoom in on one particular species... us.` },
    { s: 'MICHAEL', t: `Human evolution. Okay, I'm hooked. Where do we start?` },
    { s: 'TYLA', t: `With a definition — because you can't argue about evidence until you know exactly what you're claiming.` },

    // Part 1
    { s: 'MICHAEL', t: `So what is evolution, in one sentence?` },
    { s: 'TYLA', t: `The word evolution simply means change over time. In biology, biological evolution is any genetic change in a population that is inherited and becomes a characteristic of that population over several generations. And notice something important: individuals don't evolve. A single animal can't evolve during its life. It's populations and species that evolve, across generations.` },
    { s: 'MICHAEL', t: `Wait — so I'm not evolving?` },
    { s: 'TYLA', t: `[chuckles] You're growing, you're learning, but no — you're not evolving. Your genes are fixed from the moment you were conceived. Evolution shows up as changes in a population over many, many generations.` },
    { s: 'MICHAEL', t: `Okay. And people always say evolution is "just a theory." Is that true?` },
    { s: 'TYLA', t: `This is a really important distinction, and exams test it. A hypothesis is a possible explanation, or a possible solution to a problem, that can be tested — it still needs evidence. A theory is an explanation of something observed in nature that is supported by facts, tested hypotheses, models and laws. Evolution became a theory because many different scientists, over many years, tested hypotheses about it, and those hypotheses were verified again and again.` },
    { s: 'MICHAEL', t: `Oh — so "theory" in science doesn't mean "guess." It's the opposite.` },
    { s: 'TYLA', t: `[emphatically] Exactly the opposite. In everyday speech, "I've got a theory" means "I've got a hunch." In science, a theory is the strongest level of explanation there is. Evolution is called a theory because so many independent lines of evidence support it — and that's what Parts 2 to 8 are all about.` },
    { s: 'MICHAEL', t: `Before we go further, I need two definitions clear: species and population.` },
    { s: 'TYLA', t: `Good instinct. A species is a group of organisms with similar characteristics that can interbreed and produce fertile offspring. And a population is a group of organisms of the same species living in the same place at the same time — so they can interbreed.` },
    { s: 'MICHAEL', t: `So all the hadeda ibises in South Africa are one species, but the hadedas in my neighbourhood are one population.` },
    { s: 'TYLA', t: `[delighted] That's a perfect example. Same species everywhere — but separate local populations.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 2. Evidence for Evolution — Parts 2-7
// ═══════════════════════════════════════════════════════════════════════
{
  num: 2,
  file: '2. Evidence for Evolution',
  segs: [
    // Part 2
    { s: 'MICHAEL', t: `Okay, evidence. Fossils are first, right?` },
    { s: 'TYLA', t: `Fossils are first. A fossil is the preserved remains or traces of an organism that lived long ago — bones, shells, imprints of leaves, even footprints. Usually they form when an organism is buried quickly in sediment, like mud or sand, and over millions of years the sediment hardens into rock.` },
    { s: 'MICHAEL', t: `And the deeper you dig, the older the rock?` },
    { s: 'TYLA', t: `Exactly. Picture a layered cake of rock. The bottom layers were laid down first, so they're the oldest. The top layers are the youngest. When scientists study the fossils layer by layer, they see a clear pattern. The oldest layers have only simple organisms. As you move up through younger and younger layers, more complex organisms appear. That's why the fossil record is described as a chronological archive of life — a history book written in rock, in time order.` },
    { s: 'MICHAEL', t: `So it shows life changing over time — simple first, then more complex.` },
    { s: 'TYLA', t: `Exactly. That systematic change through time, with organisms descended from earlier forms but modified along the way, is called descent with modification. And the fossil record shows something else: lots of species that existed in the past no longer exist today — they went extinct. And modern species didn't exist in the oldest layers. So species have clearly changed and been replaced over time.` },
    { s: 'MICHAEL', t: `What about "missing links"? I've heard that phrase.` },
    { s: 'TYLA', t: `Scientists prefer the term transitional fossils — fossils that show a mix of features from two different groups, bridging the gap between them. A famous one is Tiktaalik, a fossil about three hundred and seventy-five million years old. Picture a fish... but with a flat head, a neck, and sturdy fins with bones inside them, a bit like the beginnings of legs.` },
    { s: 'MICHAEL', t: `So half fish, half land animal.` },
    { s: 'TYLA', t: `It's a fish with features that pointed towards the four-legged animals that later walked on land. Another well-known one is Archaeopteryx — it had feathers and wings like a bird, but teeth, claws on its wings, and a long bony tail like a reptile.` },
    { s: 'MICHAEL', t: `[surprised] A bird with teeth. Okay, that's convincing.` },
    { s: 'TYLA', t: `It's powerful evidence that birds and reptiles share an ancestor. Now — one honest point the exam expects you to know. The fossil record has gaps. It doesn't show perfectly smooth, continuous change from one species to the next.` },
    { s: 'MICHAEL', t: `Why not?` },
    { s: 'TYLA', t: `Because fossilisation is rare. Most organisms decay or get eaten before they can be buried and preserved. Soft-bodied organisms hardly ever fossilise. And many fossils are still buried, or have been destroyed by erosion or movements of the Earth. So the record is incomplete — like a history book with lots of missing pages. We'll come back to these gaps in Part 15, because one theory uses them as evidence.` },

    // Part 3
    { s: 'MICHAEL', t: `Next piece of evidence?` },
    { s: 'TYLA', t: `Comparing the bodies of living organisms — comparative anatomy. The key idea is modification by descent, also called descent with modification. It means species are descended from common ancestors, but have been modified — changed — over time.` },
    { s: 'MICHAEL', t: `So similar body plans, tweaked for different jobs?` },
    { s: 'TYLA', t: `Exactly that. And the best example is homologous structures — structures in different species that have the same basic structure, because they were inherited from a common ancestor, but they're now used for different functions. Let me give you four forelimbs: a bat's wing, a dolphin's flipper, a cat's front leg and your arm.` },
    { s: 'MICHAEL', t: `They do totally different things. Flying, swimming, walking, and... scrolling on my phone.` },
    { s: 'TYLA', t: `[laughs] And yet, inside, they're built from the same set of bones. Picture each one stripped back to the skeleton. One long bone in the upper part — the humerus. Two bones in the lower part — the radius and ulna. Then a cluster of small wrist bones, and then the bones of five digits. In the bat, the finger bones are stretched out super long to hold the wing skin. In the dolphin, they're short and packed into a paddle. In the cat, they're tucked into a paw. In you, they're long, mobile fingers.` },
    { s: 'MICHAEL', t: `[slowly, putting it together] So the same blueprint... adjusted for each lifestyle. That only really makes sense if they all came from one ancestor that had that basic five-digit limb.` },
    { s: 'TYLA', t: `[impressed] That's the whole argument. That shared design is called the pentadactyl limb — "penta" meaning five, "dactyl" meaning finger. If each animal had been designed from scratch for its job, there'd be no reason for a flipper and a wing to share the same bones.` },
    { s: 'MICHAEL', t: `Got it. Same structure, different function — because of common ancestry.` },

    // Part 4
    { s: 'MICHAEL', t: `And vestigial structures — those are the useless body parts?` },
    { s: 'TYLA', t: `Close. Vestigial structures are structures that are reduced in size and have lost most or all of their original function, but they're still present — leftovers from an ancestor that used them. Let's take some from your own body. Feel the very bottom of your spine.` },
    { s: 'MICHAEL', t: `[confused] Uh... the tailbone?` },
    { s: 'TYLA', t: `The tailbone — the coccyx. It's a few small, fused vertebrae — the remains of a tail. Our distant ancestors had tails; we still have the bones, just tiny and fused. Here's another: when you get cold or scared, you get goosebumps.` },
    { s: 'MICHAEL', t: `Yes!` },
    { s: 'TYLA', t: `Those are tiny muscles pulling your body hairs upright. In a furry animal, raising the fur traps a layer of warm air, or makes the animal look bigger to scare off a threat. On us, with so little body hair, it does almost nothing — a leftover response.` },
    { s: 'MICHAEL', t: `That's actually amazing. What else?` },
    { s: 'TYLA', t: `The small muscles around your ears. Lots of mammals, like dogs and cats, swivel their ears to catch sounds. Most humans can barely wiggle theirs — the muscles are there, but they're tiny and nearly useless. And wisdom teeth — big back teeth that suited ancestors with larger jaws and a much tougher diet. Today, many people's jaws don't have room for them.` },
    { s: 'MICHAEL', t: `So vestigial structures are evidence because... why would you have a leftover unless something came before you that used it?` },
    { s: 'TYLA', t: `[warmly] Exactly that. They point back to ancestors in which those structures were fully functional.` },

    // Part 5
    { s: 'MICHAEL', t: `Biogeography next. What is that exactly?` },
    { s: 'TYLA', t: `Biogeography is the study of how species are distributed across the Earth — where they live — and how that distribution has changed over geological time. And it tells a story that only makes sense with evolution. Here's a great South African one. There's a small extinct reptile called Mesosaurus — a freshwater reptile about a metre long. Its fossils have been found in two places: southern Africa... and South America.` },
    { s: 'MICHAEL', t: `[suspiciously] Wait — a small freshwater reptile couldn't have swum across the entire Atlantic Ocean.` },
    { s: 'TYLA', t: `[encouragingly] Exactly — so how do you explain it?` },
    { s: 'MICHAEL', t: `Unless... Africa and South America used to be joined?` },
    { s: 'TYLA', t: `That's it. Hundreds of millions of years ago, the continents were joined in one huge landmass. Over time, they slowly drifted apart — that's continental drift. So Mesosaurus lived on one continuous piece of land, which later split. And once populations were separated on different continents, they evolved in different directions.` },
    { s: 'MICHAEL', t: `So matching fossils on continents that are now far apart show the land used to be connected.` },
    { s: 'TYLA', t: `Exactly. Now, the second part of biogeography — islands. Islands are often home to endemic species, meaning species found there and nowhere else. Madagascar is a brilliant example. It split off from Africa a very long time ago, and it's full of animals found nowhere else on Earth, like lemurs.` },
    { s: 'MICHAEL', t: `Because once the island separated, the animals there evolved on their own, cut off from everyone else.` },
    { s: 'TYLA', t: `Exactly. And when one ancestral species arrives somewhere new, with lots of empty opportunities, it can split into many species, each suited to a different way of life — a different niche. That's called adaptive radiation: a single ancestral species diversifying into many species that fill different niches.` },
    { s: 'MICHAEL', t: `Like one ancestor... branching out into lots of specialists.` },
    { s: 'TYLA', t: `Exactly. Your textbook adds one more biogeography point worth knowing: regions on the same line of latitude, with similar climates and conditions, often have collections of plants and animals that are similar to each other — which suggests those organisms share an ancestor. And the most famous case of all is Darwin's finches on the Galapagos Islands — but that's a CAPS example for speciation, so I'm saving it for Part 17.` },

    // Part 6
    { s: 'MICHAEL', t: `And genetics. This is where Episode 1 comes back, right?` },
    { s: 'TYLA', t: `[excited] Absolutely — and for CAPS, genetic evidence is the new Grade 12 addition. Your textbook lists four signs that two species are closely related and likely share a common ancestor: identical DNA structure, a similar sequence of genes, similar portions of DNA that have no function, and similar mutations in their mitochondrial DNA. Let's unpack those. Remember the genetic code — base triplets, codons, A with T, G with C? Here's the first big piece of evidence: all living organisms use the same genetic code. Bacteria, mushrooms, mango trees, sharks, you — the same four bases, the same triplet code for the same amino acids. That's called the universal genetic code.` },
    { s: 'MICHAEL', t: `So the instruction language is the same for every living thing.` },
    { s: 'TYLA', t: `Exactly. And the simplest explanation is that all life shares one common origin — one ancient ancestor that used this code, which everything else inherited. Second piece of evidence: when scientists compare the DNA sequences of different species, the more closely related two species are, the more similar their DNA. Humans and chimpanzees, for example, share about ninety-eight percent of their DNA. Humans and a mouse share less. Humans and a banana plant, far less.` },
    { s: 'MICHAEL', t: `[laughs] I share DNA with a banana?` },
    { s: 'TYLA', t: `[giggles] A surprising amount, actually — because lots of basic cell machinery is shared by all living things. The same logic works with proteins. Since proteins are built from DNA instructions, closely related species have proteins with very similar amino acid sequences. So comparing proteins also shows how closely species are related.` },
    { s: 'MICHAEL', t: `And the flashcards mention pseudogenes. What are those?` },
    { s: 'TYLA', t: `This is your textbook's "similar portions of DNA with no function." Pseudogenes are genes that have lost their function — they don't code for a working protein anymore, but they're still there in the DNA. And the powerful bit is that related species share the same broken genes in the same places. Here's an example. In birds and reptiles, there's a gene for producing egg yolk. Humans don't lay eggs... and yet, humans still carry the broken remains of an egg-yolk gene in our DNA.` },
    { s: 'MICHAEL', t: `[gasps] Wait, seriously? We have a broken egg-yolk gene?` },
    { s: 'TYLA', t: `We do — a leftover from egg-laying ancestors, long before mammals fed their young inside the body. It's a bit like a vestigial structure, but in your DNA instead of your body.` },
    { s: 'MICHAEL', t: `That's wild. And the ERVs?` },
    { s: 'TYLA', t: `Endogenous retroviruses — ERVs. Some viruses insert their own genetic material into the DNA of the cells they infect. If that happens in an egg or sperm cell, the viral DNA gets passed on to all future generations. Now, if two different species carry the same viral DNA sequence, in the same position in their chromosomes, the most reasonable explanation is that they inherited it from a shared ancestor that was infected long ago.` },
    { s: 'MICHAEL', t: `So it's like finding the same typo in the same place in two books — they must have been copied from the same original.` },
    { s: 'TYLA', t: `[delighted] That's a brilliant analogy. Shared mistakes are some of the strongest evidence of common ancestry.` },

    // Part 7
    { s: 'MICHAEL', t: `Any other lines of evidence?` },
    { s: 'TYLA', t: `Two more that your flashcards mention. First, embryology — the study of embryos. When you compare the early embryos of different vertebrates — fish, chickens, mice, humans — they look surprisingly similar in the early stages. For example, they all have a tail, and a series of folds in the neck region, called pharyngeal pouches. In fish, those develop into gills. In humans, they develop into parts of the ear and throat.` },
    { s: 'MICHAEL', t: `So everyone starts with a similar basic plan, and then it gets modified as the embryo develops.` },
    { s: 'TYLA', t: `Exactly — which suggests they share a common ancestor that developed in that way. And the second line of evidence is the most direct one of all: direct observation. In organisms with very short life cycles — like bacteria, viruses and insects — many generations pass in a short time. So scientists can actually watch populations change. We'll see real examples in Part 20.` },
    { s: 'MICHAEL', t: `So — fossils, homologous structures, vestigial structures, biogeography, genetics, embryology, and direct observation. That's a lot of evidence pointing the same way.` },
    { s: 'TYLA', t: `[seriously] And that's exactly the point. One study tip, though: your textbook says the CAPS exam focuses on three lines of evidence — fossils, biogeography and genetics — with fossils and biogeography first covered in Grade 10. Embryology, vestigial structures and comparative anatomy are useful extra support, and your flashcards include them, but put most of your revision into the big three. And here's why it all matters: each line on its own is strong. But they're independent — fossils, bodies, geography, DNA — and they all point to the same conclusion. That's what turns evolution from a hypothesis into a theory.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 3. Variation — Parts 8-10
// ═══════════════════════════════════════════════════════════════════════
{
  num: 3,
  file: '3. Variation',
  segs: [
    // Part 8
    { s: 'MICHAEL', t: `Okay, so we've proven evolution happens. Now — how? Where does it start?` },
    { s: 'TYLA', t: `It starts with variation — the differences between individuals of the same species. Look around your class. Different heights, different hair textures, different blood groups, different voices. No two people are identical, apart from identical twins.` },
    { s: 'MICHAEL', t: `And variation matters because...?` },
    { s: 'TYLA', t: `[emphatically] Because without variation, there's nothing for evolution to work with. If every individual were identical, a change in the environment would affect them all exactly the same way. Variation means that some individuals happen to be better suited to new conditions than others. Variation increases a species' chance of surviving in a changing environment.` },
    { s: 'MICHAEL', t: `So variation is like having lots of different tools in the toolbox. Whatever the problem, someone's got the right tool.` },
    { s: 'TYLA', t: `Lovely analogy. Now, where does variation come from? Five sources, and two of them come straight from Episode 2 — meiosis. First... crossing over. During prophase one of meiosis, homologous chromosomes pair up and exchange pieces of genetic material.` },
    { s: 'MICHAEL', t: `[excitedly] Yes! The chromatids swap segments at the chiasmata. So every chromosome that ends up in a gamete is a new mix of the mother's and father's genes.` },
    { s: 'TYLA', t: `[delighted] Exactly. New combinations of maternal and paternal genetic material in every gamete. Second... the random arrangement of chromosomes at the equator during metaphase one. Each pair of homologous chromosomes lines up independently — sometimes the maternal one faces one pole, sometimes the paternal one.` },
    { s: 'MICHAEL', t: `So it's like shuffling a deck of cards before dealing. Every gamete gets a different hand.` },
    { s: 'TYLA', t: `That's a great way to picture it. With twenty-three pairs of chromosomes in humans, the number of possible combinations from random arrangement alone is over eight million — before crossing over even adds its own mixing.` },

    // Part 9
    { s: 'MICHAEL', t: `And the other three sources?` },
    { s: 'TYLA', t: `Third... mutations. Remember from Episode 1, a mutation is a change in the structure of a gene or a chromosome. That changes the organism's genotype, and because genotype influences phenotype, a mutation can create brand-new characteristics that didn't exist in the population before.` },
    { s: 'MICHAEL', t: `So crossing over and random arrangement shuffle existing genes, but mutations actually create new ones.` },
    { s: 'TYLA', t: `[impressed] That's a really important distinction. Mutations are the only source of truly new genetic material. And sometimes a mutation is harmful, sometimes it has no effect, and occasionally it's advantageous — giving its owner a better chance of survival. Fourth... random fertilisation. Any one of millions of sperm cells can fertilise an egg cell, and each sperm and each egg carries a different combination of genes. So which ones meet is completely random.` },
    { s: 'MICHAEL', t: `Which is why brothers and sisters from the same parents can look so different.` },
    { s: 'TYLA', t: `Exactly. And fifth... random mating. Within a population, any individual can potentially mate with any other individual of the opposite sex. Each mating pair contributes a different set of genes, producing a different set of offspring.` },
    { s: 'MICHAEL', t: `So — crossing over, random arrangement, mutations, random fertilisation, random mating. Five sources.` },
    { s: 'TYLA', t: `[whispers] Here's a hook to remember them: [warmly] "Cross Random Mutants Fertilise Randomly." Crossing over, random arrangement, mutations, fertilisation, random mating.` },
    { s: 'MICHAEL', t: `[laughs] That's ridiculous. I'll never forget it.` },

    // Part 10
    { s: 'MICHAEL', t: `The flashcards also talk about continuous and discontinuous variation. Is that what we did in Episode 5?` },
    { s: 'TYLA', t: `Same idea, quick refresher. Continuous variation is when a characteristic shows a range of phenotypes between two extremes, with many intermediate forms. Think about hand span — the distance from the tip of your thumb to the tip of your little finger when you stretch your hand out. In a class of forty, you'd get dozens of slightly different measurements, all along a smooth range.` },
    { s: 'MICHAEL', t: `And if you graphed it?` },
    { s: 'TYLA', t: `You'd draw a histogram or a smooth bell-shaped curve — most people in the middle, fewer at the extremes. Continuous variation is usually controlled by many genes together, plus the environment. Now, discontinuous variation is when a characteristic falls into distinct categories, with no intermediates. The classic CAPS example is the ABO blood groups — you're A, B, AB or O. Nobody is "a bit between A and B."` },
    { s: 'MICHAEL', t: `And that would be a bar graph, with separate bars.` },
    { s: 'TYLA', t: `[encouragingly] Exactly. Discontinuous variation is usually controlled by one gene or a few genes. Another one you can test yourself: whether your earlobes are attached or free — remember those from Episode 5?` },
    { s: 'MICHAEL', t: `Attached or free, nothing in between. Discontinuous.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 4. Theories of Evolution — Parts 11-15
// ═══════════════════════════════════════════════════════════════════════
{
  num: 4,
  file: '4. Theories of Evolution',
  segs: [
    // Part 11
    { s: 'MICHAEL', t: `Okay, so variation exists. But how does that variation turn into evolution? This is where the theories come in?` },
    { s: 'TYLA', t: `Exactly. The two most important scientists who argued that species are not fixed, but change over time, were Jean-Baptiste Lamarck and Charles Darwin. Lamarck came first — he was a French naturalist who proposed his theory in eighteen-oh-nine. He observed that living species were different from those in the fossil record, and that domestication and breeding changed plants and animals over time.` },
    { s: 'MICHAEL', t: `So he was on the right track — species do change.` },
    { s: 'TYLA', t: `He was. But his explanation of how was wrong. His theory rested on two ideas. The first was the law of use and disuse: if an organism uses a structure a lot, that structure becomes bigger and stronger, and if it doesn't use a structure, it becomes smaller and may eventually disappear.` },
    { s: 'MICHAEL', t: `That sounds like going to the gym.` },
    { s: 'TYLA', t: `[chuckles] It's exactly like the gym. The second idea is the important one — the law of inheritance of acquired characteristics. Lamarck believed that characteristics an organism develops during its lifetime — acquired characteristics — could be passed on to its offspring.` },
    { s: 'MICHAEL', t: `Hang on. So if I spent five years in the gym and got huge arms, Lamarck would say my kids would be born with big arms?` },
    { s: 'TYLA', t: `[laughs] That's exactly what his theory predicts. Lamarck's own famous example was the giraffe. He suggested that ancestral giraffes stretched their necks to reach leaves high up in the trees, and over a lifetime each giraffe's neck became slightly longer. That longer neck was then passed on to its offspring, and over many generations, necks got longer and longer.` },
    { s: 'MICHAEL', t: `[doubtfully] But that doesn't work, does it? My kids wouldn't get my gym arms.` },
    { s: 'TYLA', t: `Exactly — and that's why Lamarck was wrong. Changes you acquire during your lifetime happen in your body cells — your muscles, your skin. They don't change the DNA in your gametes, your egg or sperm cells. And only what's in the DNA of the gametes can be passed on. We now know changes can only be inherited if they're the result of a genetic change. Lamarck also gave no mechanism — he simply said organisms changed because they needed or wanted to.` },
    { s: 'MICHAEL', t: `So Lamarckism isn't accepted today.` },
    { s: 'TYLA', t: `It isn't. But his work wasn't worthless. He was one of the first to argue clearly that species change over time and adapt to their environment, and that laid the groundwork for Darwin.` },

    // Part 12
    { s: 'MICHAEL', t: `And then Darwin.` },
    { s: 'TYLA', t: `Charles Darwin, a British naturalist. He sailed around the world on a ship called the HMS Beagle in the eighteen-thirties, collecting specimens and making observations — including on the Galapagos Islands. Years later, in eighteen fifty-nine, he published his famous book, On the Origin of Species. His theory was built on four main observations.` },
    { s: 'MICHAEL', t: `Go.` },
    { s: 'TYLA', t: `One... populations can produce far more offspring than are needed — far more than can possibly survive. Two... yet the sizes of most natural populations, and the resources available, stay relatively constant over time. Three... there is natural variation among members of the same species. And four... some of these characteristics are inherited — passed from parents to offspring.` },
    { s: 'MICHAEL', t: `Wait, so the first two together are interesting. If lots of offspring are born, but the population stays the same size...` },
    { s: 'TYLA', t: `[encouragingly] Keep going.` },
    { s: 'MICHAEL', t: `...then most of them must be dying before they reproduce.` },
    { s: 'TYLA', t: `[delighted] Exactly! That's the insight. And from those observations, Darwin drew three conclusions. First... all organisms are involved in a struggle for survival, and only those best suited to the environment survive there. Second... the organisms that survive are more likely to reproduce, and therefore pass on their useful characteristics to their offspring. Third... over many generations, this changes the overall genetic make-up of the population.` },
    { s: 'MICHAEL', t: `So — loads of babies, limited resources, competition, and the best-suited ones win and pass on their genes.` },
    { s: 'TYLA', t: `That's the whole theory in one breath. And that process has a name: natural selection. And notice how the ideas built on each other over time. Lamarck said species change. Darwin explained how. Later, genetics showed how traits are actually inherited, and then Eldredge and Gould refined the picture of how fast change happens.` },
    { s: 'MICHAEL', t: `[chuckles] So the theory of evolution... evolved.` },

    // Part 13
    { s: 'MICHAEL', t: `Okay, give me natural selection as a step-by-step process, like an exam answer.` },
    { s: 'TYLA', t: `Let's do it with a story first, and then the formal steps. Picture a large population of grasshoppers living in a dry, golden grassland in the Free State. They vary in colour — most are a pale straw colour, but a few, because of variation, are much darker brown. On golden grass, the pale ones are well camouflaged, and the dark ones stand out. Birds spot and eat more of the dark ones.` },
    { s: 'MICHAEL', t: `So the pale ones are winning.` },
    { s: 'TYLA', t: `For now. Then, one winter, a huge veld fire sweeps through. The grass burns, and for months the ground is blackened and dark brown, with charred stems everywhere.` },
    { s: 'MICHAEL', t: `[gasps] Oh! Now the pale ones stick out on the dark ground.` },
    { s: 'TYLA', t: `Exactly. Now the pale grasshoppers are easy targets, and the dark ones are camouflaged. More dark grasshoppers survive. They reproduce and pass the genes for dark colour to their offspring. The next generation has a higher proportion of dark grasshoppers. And if the environment stays dark long enough, over many generations, dark grasshoppers become the majority.` },
    { s: 'MICHAEL', t: `Hang on — the grasshoppers didn't decide to turn dark. The dark ones were already there.` },
    { s: 'TYLA', t: `[impressed] That is THE most important point in this chapter. Natural selection always acts on variation that already exists in the population. The environment doesn't create the variation — it just selects which variations survive. The environment is the selective pressure.` },
    { s: 'MICHAEL', t: `And that's the opposite of Lamarck — Lamarck would say the grasshoppers turned dark because they needed to.` },
    { s: 'TYLA', t: `Exactly. Now the formal steps — this is how to write it in an exam. One... there is a lot of variation among offspring, due to crossing over, random arrangement, mutations and so on. Two... the environment changes, or there is competition — for food, space, mates. Three... organisms with characteristics that make them better suited to the environment are more likely to survive and reproduce. Four... organisms without the favourable characteristic are less likely to survive, and die out. Five... the survivors pass on the favourable characteristic, so the next generation has a higher proportion of individuals with that trait. Six... these differences accumulate over many generations, until eventually most or all of the population has the new characteristic.` },
    { s: 'MICHAEL', t: `And "survival of the fittest" — fittest means strongest?` },
    { s: 'TYLA', t: `[seriously] No — and that's a classic trap. In biology, "fittest" means best suited to the environment. Not strongest, not fastest — best suited. A pale grasshopper was the "fittest" on golden grass, and the dark one was the "fittest" after the fire.` },
    { s: 'MICHAEL', t: `That makes so much sense now.` },
    { s: 'TYLA', t: `And just so you recognise it in exam papers: there's a famous real-life case from England in the eighteen hundreds involving the peppered moth. When factory soot darkened the tree bark, dark moths became far more common than pale ones, because birds could spot the pale moths against the sooty bark. Same principle — the environment changed, and the existing dark variation was selected.` },

    // Part 14
    { s: 'MICHAEL', t: `Exams love "tabulate two differences between Lamarck and Darwin." Let's nail that.` },
    { s: 'TYLA', t: `Three rows to know. Row one — the make-up of a population. Lamarck assumed members of a population are all the same, whereas Darwin recognised that members are similar but show variation.` },
    { s: 'MICHAEL', t: `Row two?` },
    { s: 'TYLA', t: `How change happens. In Lamarckism, individuals transform during their own lifetime, whereas in Darwinism, populations — not individuals — change over many generations, and only through genetic means.` },
    { s: 'MICHAEL', t: `And row three must be the mechanism.` },
    { s: 'TYLA', t: `Exactly. Mechanism of change. Lamarck said changes are directed by need — the organism changes to meet the needs of survival and passes those changes on. Darwin said change happens through natural selection — the environment exerts a selective pressure, and variation exists regardless of the organism's needs.` },
    { s: 'MICHAEL', t: `So let me do the giraffe Darwin's way, because I bet that's an exam question.` },
    { s: 'TYLA', t: `[eagerly] Go for it.` },
    { s: 'MICHAEL', t: `Okay. In the ancestral giraffe population, there was variation in neck length — some longer, some shorter. When food became scarce and the low leaves were eaten, giraffes with longer necks could reach higher leaves. So they were better suited, survived, and reproduced more. They passed the genes for longer necks to their offspring. The short-necked ones were more likely to starve and die before reproducing. Over many generations, the proportion of long-necked giraffes increased, until the whole population had long necks.` },
    { s: 'TYLA', t: `[impressed] That's a full-marks answer. Notice the key words: variation, competition, better suited, survive, reproduce, pass on genes, many generations.` },

    // Part 15
    { s: 'MICHAEL', t: `And the third theory — punctuated equilibrium. That's a mouthful.` },
    { s: 'TYLA', t: `[chuckles] It is. First, the idea it challenges. Darwin proposed that species change gradually, through the steady build-up of small changes over very long periods. That's called gradualism. If gradualism were the whole story, we'd expect the fossil record to be full of smooth, in-between forms.` },
    { s: 'MICHAEL', t: `But remember Part 2 — the fossil record has gaps.` },
    { s: 'TYLA', t: `[excited] Exactly — and that's what two scientists, Niles Eldredge and Stephen Jay Gould, noticed in nineteen seventy-two. In the fossil record, many species stay almost unchanged for very long periods — that's the "equilibrium." Then, those long periods are interrupted, or "punctuated," by short periods of rapid change, during which new species form quickly.` },
    { s: 'MICHAEL', t: `So it's like a long, boring cricket match... and then three wickets fall in one over.` },
    { s: 'TYLA', t: `[laughs] Perfect. Long periods of little or no change, followed by short bursts of rapid change. And it explains the gaps. If new species form quickly, in a short time, very few transitional individuals would have existed — so there's very little chance of them being fossilised. The main evidence for punctuated equilibrium is the absence of transitional fossils in many lineages.` },
    { s: 'MICHAEL', t: `And what triggers the bursts?` },
    { s: 'TYLA', t: `Usually a significant environmental change — a sudden climate shift, or a small population becoming isolated. In a rapidly changing environment, a species has to change quickly or it goes extinct. Once the new species has formed and is well suited, it changes very little again — until the next shake-up.` },
    { s: 'MICHAEL', t: `[slowly, putting it together] So gradualism is a slow, steady ramp... and punctuated equilibrium is a staircase — flat, then a sudden step up, then flat again.` },
    { s: 'TYLA', t: `[delighted] That's exactly how the graphs look in exams. A smooth slope for gradualism, and a staircase — long flat sections with short steep steps — for punctuated equilibrium. If an exam shows a flat section, that's a period of no change, or equilibrium. A steep section is rapid change, and that's when speciation is most likely.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 5. Artificial Selection — Part 16
// ═══════════════════════════════════════════════════════════════════════
{
  num: 5,
  file: '5. Artificial Selection',
  segs: [
    { s: 'MICHAEL', t: `Okay, artificial selection. That's humans doing what nature does?` },
    { s: 'TYLA', t: `Exactly. Humans have been using the variation in wild and farmed organisms for thousands of years to develop new crops and new breeds of livestock. Artificial selection is when humans choose which plants or animals get to reproduce, based on characteristics that humans find desirable. Humans become the selective force.` },
    { s: 'MICHAEL', t: `Give me an animal example.` },
    { s: 'TYLA', t: `Chickens. Picture a farmer who wants chickens that grow big and heavy very quickly for meat. Each generation, the farmer selects the chickens that grew fastest and heaviest, and only breeds from those. The slow growers aren't bred. Generation after generation, the flock grows faster and heavier. Meanwhile, a different farmer wants chickens that lay as many eggs as possible — so they select and breed only the best layers.` },
    { s: 'MICHAEL', t: `So from the same ancestor, you end up with two totally different types — meat chickens and egg-laying chickens.` },
    { s: 'TYLA', t: `Exactly. Today's meat chickens grow several times faster than their wild ancestors. Now a crop example — and this one's honestly mind-blowing. Cabbage, broccoli, cauliflower, kale and Brussels sprouts...` },
    { s: 'MICHAEL', t: `[confused] Are all different vegetables.` },
    { s: 'TYLA', t: `[playfully] Are all the same species. They were all bred from one wild cabbage plant that grows along the coasts of Europe. Farmers who selected for big leaves got kale. Selecting for a tight bundle of leaves at the top gave cabbage. Selecting for the flower buds gave broccoli and cauliflower. Selecting for side buds along the stem gave Brussels sprouts.` },
    { s: 'MICHAEL', t: `[shocked] Wait — broccoli and cabbage are the same plant?` },
    { s: 'TYLA', t: `Same species, different selected traits. That's the power of artificial selection. And there are many other agricultural uses — breeding cows for more and better-quality milk, sugar cane for higher sugar content and drought resistance, crops for disease resistance or higher yield.` },
    { s: 'MICHAEL', t: `Is there a downside?` },
    { s: 'TYLA', t: `There is. When breeders keep mating closely related individuals to keep a breed "pure," that's called inbreeding. It reduces genetic variation, so inbred animals are more likely to inherit harmful recessive conditions and can be more vulnerable to diseases. The opposite, outbreeding — mating individuals that aren't closely related — keeps genetic variation high, and those animals tend to be hardier.` },
    { s: 'MICHAEL', t: `So that's why a mixed-breed dog is often healthier than a purebred one.` },
    { s: 'TYLA', t: `Exactly. Now, the comparison exams love. In natural selection, the environment is the selective force; selection is for suitability to the environment; it happens within a species; and it's slow. In artificial selection, humans are the selective force; selection is to satisfy human needs; it may involve one or more species, as in cross-breeding; and it's much faster, but results in less variation.` },
    { s: 'MICHAEL', t: `And Darwin actually used artificial selection to help explain his theory, right?` },
    { s: 'TYLA', t: `[impressed] He did. He saw how breeders could dramatically change animals in just a few generations, and reasoned that nature could do the same thing — just more slowly, over much longer periods.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 6. Speciation and Reproductive Isolation — Parts 17-19
// ═══════════════════════════════════════════════════════════════════════
{
  num: 6,
  file: '6. Speciation and Reproductive Isolation',
  segs: [
    // Part 17
    { s: 'MICHAEL', t: `Okay, now the big one. How does a completely new species form?` },
    { s: 'TYLA', t: `The formation of a new species is called speciation. And first, remember our definition from Part 1, which your textbook calls the biological species concept: a species is a group of organisms with similar characteristics that can interbreed and produce fertile offspring. So a new species has formed when a group can no longer interbreed with its original population to produce fertile offspring.` },
    { s: 'MICHAEL', t: `And how does that happen?` },
    { s: 'TYLA', t: `The main way in CAPS is geographic speciation, also called allopatric speciation. It happens when part of a population becomes separated from the rest by a geographical barrier — like an ocean, a mountain range, a river, a desert, or a change caused by continental drift, volcanoes or earthquakes. Let me give you a scenario. Picture a population of small field mice living across a coastal headland — a strip of land sticking out into the sea.` },
    { s: 'MICHAEL', t: `Okay, I've got it.` },
    { s: 'TYLA', t: `Over thousands of years, sea levels rise. The low, narrow neck of land joining the headland to the mainland floods, and the headland becomes an island. Now the mice are split in two — some on the island, some on the mainland.` },
    { s: 'MICHAEL', t: `And they can't swim across.` },
    { s: 'TYLA', t: `Exactly. So step by step. One... the population is split into two by a geographical barrier — here, the sea. Two... the two populations can't mate, so gene flow between them stops. Three... the two populations are exposed to different environmental conditions — maybe the island is rocky with little vegetation and different predators, while the mainland is grassy. Four... natural selection works independently on each population. And in small, isolated populations, pure chance also plays a part — random changes in which genes get passed on from one generation to the next, called genetic drift. Together, natural selection and genetic drift pull the two populations further apart. Five... over many generations, the two populations become different from each other genotypically, and then phenotypically.` },
    { s: 'MICHAEL', t: `And six — if they ever met again?` },
    { s: 'TYLA', t: `[seriously] Six... even if the barrier disappeared — say sea levels dropped and the land bridge came back — the two populations would no longer be able to interbreed and produce fertile offspring. They've become two separate species.` },
    { s: 'MICHAEL', t: `Got it. Barrier, no gene flow, different environments, separate natural selection, become different, can't interbreed.` },
    { s: 'TYLA', t: `That's the exam answer. Now the famous real example — the one CAPS prescribes — Darwin's finches on the Galapagos Islands, off the coast of South America. Scientists believe a single ancestral species of finch reached the islands from the mainland long ago. The finches spread to different islands, separated by the sea. Each island had different food — some had hard seeds, some had insects, some had cactus flowers.` },
    { s: 'MICHAEL', t: `So different selective pressures on each island.` },
    { s: 'TYLA', t: `Exactly. On islands with big, hard seeds, finches with thick, strong beaks were better suited and survived to reproduce. On islands with insects, thin, pointed beaks were better for picking insects out of cracks. Over many generations, isolated on separate islands, the populations diverged into many different species, each with a beak shape suited to its food source.` },
    { s: 'MICHAEL', t: `That's also adaptive radiation from Part 5 — one ancestor, many species, each in a different niche.` },
    { s: 'TYLA', t: `[delighted] Exactly — you've just linked two parts of the chapter. Your flashcards also mention sympatric speciation — new species forming without a geographical barrier, in the same area. In plants, for example, it can happen when an error in cell division doubles the chromosome number, and the new plants can't breed with the original ones. It's much less common in animals.` },

    // Part 18
    { s: 'MICHAEL', t: `But what about species that live in the same place? What stops them from interbreeding?` },
    { s: 'TYLA', t: `That's where reproductive isolation comes in — mechanisms that prevent two species from mating with each other and producing fertile offspring, even when there's no geographical barrier. CAPS gives you five. First... breeding at different times of the year. Picture two closely related frog species living in the same pond. One breeds in early spring, the other in late summer.` },
    { s: 'MICHAEL', t: `So they're never ready to mate at the same time.` },
    { s: 'TYLA', t: `Exactly. And in plants, the same idea works through flowering at different times, so pollen from one species never reaches the flowers of the other. Second... species-specific courtship behaviour. Many animals use very particular signals to attract a mate — colours, songs, dances, scents.` },
    { s: 'MICHAEL', t: `Like the weaver birds here — the males build those amazing hanging nests, and the females inspect them.` },
    { s: 'TYLA', t: `[delighted] Perfect South African example. Each weaver species has its own nest style, its own song and its own display. A female responds only to the courtship of her own species, even if a closely related species lives in the same tree. Third... adaptation to different pollinators, in plants. Closely related plant species can attract completely different pollinators through flower shape, size, colour, scent, the type of reward, and the timing of flowering.` },
    { s: 'MICHAEL', t: `Give me an example.` },
    { s: 'TYLA', t: `Picture two related wildflowers growing side by side in the fynbos. One has long, curved, bright red tube-shaped flowers, perfect for a sunbird's long curved beak. The other has short, open, sweet-smelling flowers that attract bees. The sunbird only carries pollen between the red flowers, and the bees only carry pollen between the open ones.` },
    { s: 'MICHAEL', t: `So the pollen never crosses between species. The pollinators keep them apart.` },
    { s: 'TYLA', t: `Exactly. Fourth... infertile offspring. Sometimes two different species can mate and produce offspring — but those hybrid offspring are infertile, so they can't reproduce. A zebra crossed with a horse produces a "zorse," and a horse crossed with a donkey produces a mule. Both hybrids are usually infertile.` },
    { s: 'MICHAEL', t: `So the line ends with them — no gene flow between the parent species.` },
    { s: 'TYLA', t: `Exactly. And fifth... prevention of fertilisation. Two species may even try to mate, but fertilisation doesn't happen — for example because their reproductive organs don't fit together, or because the sperm of one species can't recognise and fuse with the egg of the other.` },
    { s: 'MICHAEL', t: `[hesitantly] Wait, so geographic isolation isn't the only way?` },
    { s: 'TYLA', t: `[emphatically] Exactly — and that's a common mistake. Students often think new species can only form through geographical separation. But differences in breeding times, courtship, pollinators, hybrid infertility and fertilisation all keep species apart too.` },

    // Part 19
    { s: 'MICHAEL', t: `The flashcards ask about the impact of speciation and extinction. What's the answer there?` },
    { s: 'TYLA', t: `Short and simple. Speciation increases biodiversity — it adds new species to ecosystems. Extinction decreases biodiversity — when a species dies out completely, its unique genes and characteristics are lost forever.` },
    { s: 'MICHAEL', t: `So biodiversity at any time depends on the balance between new species forming and old species dying out.` },
    { s: 'TYLA', t: `Exactly. And this ties in with diagrams you'll see in exams — cladograms or phylogenetic trees, which show evolutionary relationships between organisms. We'll go deep on these next episode, but here's what to know now. Picture a tree. Wherever one branch splits into two, that's a speciation event — one species splitting into two.` },
    { s: 'MICHAEL', t: `And extinction?` },
    { s: 'TYLA', t: `If a branch stops before reaching the top of the tree — the present day — that species became extinct. The ones that reach the top are still alive today — they're called extant.` },
    { s: 'MICHAEL', t: `Extant — still around. Extinct — gone. [chuckles] One letter difference, totally different meaning.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 7. Evolution in Present Times — Part 20 + Outro
// ═══════════════════════════════════════════════════════════════════════
{
  num: 7,
  file: '7. Evolution in Present Times',
  segs: [
    // Part 20
    { s: 'MICHAEL', t: `Okay — the part you promised. Evolution happening right now.` },
    { s: 'TYLA', t: `[warmly] Here it is. Most of the time, evolution is far too slow to see. But in organisms that reproduce very quickly — bacteria, viruses, insects — huge numbers of generations pass in a short time, there's lots of variation, and mutations happen often. So we can actually watch evolution in action. Let's start with tuberculosis, or TB — a big public health issue here in South Africa. TB is caused by a bacterium, and it's treated with antibiotics.` },
    { s: 'MICHAEL', t: `So how does resistance happen?` },
    { s: 'TYLA', t: `Picture a patient's lungs full of millions of TB bacteria. Because of variation and mutations, a few of those bacteria happen to be naturally resistant to the antibiotic. The patient starts treatment, and the antibiotic kills most of the bacteria — the non-resistant ones. The patient feels better... and stops taking the medication early.` },
    { s: 'MICHAEL', t: `[groans] Oh no. I can see where this is going.` },
    { s: 'TYLA', t: `Exactly. The few resistant bacteria survive. With no competition, they reproduce and multiply, and pass on the resistance. Soon, the patient is sick again — but now, most of the bacteria are resistant, and that antibiotic doesn't work anymore. Resistant bacteria can even pass their resistance on to other bacteria.` },
    { s: 'MICHAEL', t: `[seriously] So natural selection, with the antibiotic as the selective pressure.` },
    { s: 'TYLA', t: `Exactly. Doctors then started treating TB with several drugs at once, assuming the bacteria couldn't resist all of them together. Unfortunately, that assumption was wrong. Multidrug-resistant TB emerged — bacteria resistant to several antibiotics. It needs very aggressive treatment with many drugs, and sadly, many patients don't survive.` },
    { s: 'MICHAEL', t: `That's why they tell you to always finish your antibiotics.` },
    { s: 'TYLA', t: `Exactly — finishing the full course kills the bacteria before the resistant ones can take over. Second example — insecticide resistance. Picture farmers spraying the same insecticide on their crops every season to kill an insect pest. Each time, most of the pests die, but a few with natural resistance survive. They breed, and pass on the resistance. After many seasons, the insecticide barely works.` },
    { s: 'MICHAEL', t: `Same pattern. Variation, selective pressure, survivors reproduce.` },
    { s: 'TYLA', t: `Exactly. And the third example — HIV resistance to antiretroviral drugs, or ARVs. HIV reproduces very quickly and mutates very often, so there's a lot of variation among the viruses in a patient's body. When the patient takes ARVs, most viruses are suppressed, but any viruses that happen to be resistant survive and multiply. If treatment isn't taken consistently, those resistant viruses can come to dominate the patient's body, and that medication becomes less effective.` },
    { s: 'MICHAEL', t: `[slowly, putting it together] So TB, pests, HIV — it's all the same five-step story we learnt in Part 13. Variation, a change in the environment, the best-suited survive, they reproduce, and the next generation has more of them.` },
    { s: 'TYLA', t: `[impressed] Exactly — and that's why these examples are such strong evidence. You're not looking at fossils from millions of years ago. You're watching natural selection in real time.` },

    // Outro
    { s: 'TYLA', t: `[excited] Okay, Michael — same tradition as always. Give me the whole chapter, start to finish, in one go.` },
    { s: 'MICHAEL', t: `[laughs] Deep breath. Biological evolution is any genetic change in a population that's inherited over several generations — populations evolve, individuals don't. It's a theory, not a hypothesis, because it's supported by facts and tested hypotheses from many sources. A species is a group that can interbreed to produce fertile offspring, and a population is a group of the same species in one area. The evidence: fossils show older, simpler life in deeper rock layers, extinct species, and transitional fossils like Tiktaalik — though the record has gaps. Homologous structures, like the pentadactyl limb in bats, dolphins, cats and humans, show common ancestry, and vestigial structures like the tailbone are leftovers. Biogeography — Mesosaurus fossils in Africa and South America show the continents were joined, and islands have endemic species and adaptive radiation. Genetics — the universal code, similar DNA and proteins, shared pseudogenes like our broken egg-yolk gene, and shared viral DNA. Plus embryology and direct observation. But for the exam, focus on fossils, biogeography and genetics.` },
    { s: 'TYLA', t: `Keep going — you're flying.` },
    { s: 'MICHAEL', t: `Variation is the raw material, from crossing over, random arrangement, mutations, random fertilisation and random mating. Continuous variation has a range, like hand span; discontinuous has distinct categories, like blood groups. Lamarck said use and disuse, and inheritance of acquired characteristics — like the giraffe stretching its neck — but he was wrong because acquired traits don't change the DNA in gametes. Darwin, on the Beagle, observed overproduction, stable populations, variation and inheritance, and concluded there's a struggle for survival where the best-suited survive, reproduce and pass on their genes. That's natural selection — and it acts on existing variation, with the environment as the selective pressure, like the grasshoppers after the veld fire. Fittest means best suited, not strongest. Eldredge and Gould's punctuated equilibrium says long periods of no change are interrupted by short bursts of rapid change, which explains gaps in the fossil record.` },
    { s: 'TYLA', t: `[eagerly] And the rest?` },
    { s: 'MICHAEL', t: `Artificial selection is humans choosing — like fast-growing chickens, or wild cabbage turned into broccoli and kale — and it's faster than natural selection but gives less variation. Speciation happens when a geographical barrier splits a population, gene flow stops, natural selection acts separately, and eventually they can't interbreed — like Darwin's finches on the Galapagos. Reproductive isolation keeps species apart through different breeding times, courtship behaviour, different pollinators, infertile hybrids, and prevention of fertilisation. Speciation increases biodiversity, extinction reduces it. And evolution is happening right now — TB resistance to antibiotics, pests resistant to insecticides, and HIV resistant to ARVs.` },
    { s: 'TYLA', t: `[amazed] ...Michael. That was the entire chapter — every theory, every piece of evidence, every example. In order.` },
    { s: 'MICHAEL', t: `[playfully] I'd say I've been naturally selected for podcasting.` },
    { s: 'TYLA', t: `[laughs] Survival of the best suited. And to everyone listening — next episode is our very last one, and we're turning all of this onto ourselves. Where did humans come from? What makes us different from apes? And why does South Africa have one of the most important fossil sites on Earth?` },
    { s: 'MICHAEL', t: `Can't wait.` },
    { s: 'TYLA', t: `[warmly] Until then — variation, selection, inheritance, time. That's evolution in four words. We'll catch you in the next episode.` },
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

  console.log(`Life, Decoded — Episode 9: Evolution by Natural Selection (${PRIMARY_MODEL}) — running ${sectionsToRun.length} of ${SECTIONS.length} file(s)\n`);

  for (const sec of sectionsToRun) {
    console.log(`\n▶ ${sec.file}`);
    await generateSection(sec, ffmpegAvailable, silenceShort);
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final files.`);
}

main().catch(e => { console.error(e); process.exit(1); });

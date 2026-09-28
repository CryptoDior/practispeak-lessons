/**
 * Life, Decoded — Episode 3: "Reproductive Strategies in Vertebrates"
 * ElevenLabs audio generator
 * ----------------------------------------------------
 * Usage (from the project root, in a terminal that has internet access —
 * this will NOT work from inside Cowork's sandbox, run it on your own machine):
 *
 *   node --env-file=.env.local scripts/generate-reproductive-strategies-podcast-audio.mjs
 *
 * What it does:
 *  1. Generates one audio clip per line of dialogue (Naledi / Michael), using
 *     the ELEVENLABS_API_KEY already in your .env.local.
 *  2. Skips any file that already exists, so if a run gets interrupted or a
 *     line fails, just run the script again and it'll only fill the gaps.
 *  3. This episode is locked to "eleven_v3" per the source script's own
 *     production note (audio tags like [warmly]/[curious]/[laughs]/[impressed]
 *     are read as delivery direction on v3). If your account/plan doesn't have
 *     v3 access, it automatically falls back to eleven_turbo_v2_5 with the
 *     tags stripped out (so they don't get read aloud literally) — but since
 *     you specifically want v3, the script prints a clear warning if any line
 *     had to fall back, so you know to check your plan / re-run later.
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
 *   podcasts/tmp/reproductive-strategies-chapter3/*.mp3 (individual clips, kept for resuming)
 *   podcasts/Reproductive-Strategies-Chapter3-Podcast.mp3 (final stitched episode)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-reproductive-strategies-podcast-audio.mjs');
  process.exit(1);
}

const VOICES = {
  NALEDI: 'ZtcPZrt9K4w8e1OB9M6w',  // Mia Moore — Studio Presenter
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
};

const PRIMARY_MODEL = 'eleven_v3';
const FALLBACK_MODEL = 'eleven_turbo_v2_5';

const ROOT = path.resolve('.');
const TMP_DIR = path.join(ROOT, 'podcasts', 'tmp', 'reproductive-strategies-chapter3');
const OUT_FILE = path.join(ROOT, 'podcasts', 'Reproductive-Strategies-Chapter3-Podcast.mp3');

// ─────────────────────────────────────────────────────────────────────────
// SCRIPT — ordered dialogue segments only. PART headers, EXAM TIP callouts,
// and the closing Quick-Reference Recap are intentionally left out (they're
// reference/show-notes material, not spoken dialogue in the source script).
// `newPart: true` marks the first line after a PART header, so the stitcher
// inserts a longer pause there instead of a short one.
// ─────────────────────────────────────────────────────────────────────────
const S = [
  { s: 'NALEDI', t: `[warmly] Welcome back to Life, Decoded — today we're leaving cell division behind for a bit and heading somewhere a lot more... animal kingdom.` },
  { s: 'MICHAEL', t: `[curious] Ooh, please tell me this is the one with salmon and frogs and all the weird egg stuff.` },
  { s: 'NALEDI', t: `[laughs] It absolutely is. Today's topic is reproductive strategies in vertebrates — basically, all the different ways animals with backbones make more of themselves, and why those strategies look so different from species to species.` },
  { s: 'MICHAEL', t: `Okay so this is less "step by step mechanism" and more "compare and contrast across the animal kingdom"?` },
  { s: 'NALEDI', t: `Exactly the right instinct — a lot of this chapter is comparison tables. Which actually makes it one of the more exam-friendly topics, once you've got the categories straight in your head.` },
  { s: 'MICHAEL', t: `I like the sound of that already.` },
  { s: 'NALEDI', t: `Here's the big picture before we zoom in: reproduction ensures a species survives long-term. But different species face totally different challenges — living in water versus on land, being eaten by predators, needing to travel light versus needing to protect their young. So evolution has produced a handful of different reproductive "strategies" to solve those problems.` },
  { s: 'MICHAEL', t: `So today's episode is basically a tour of nature's different survival strategies for babies.` },
  { s: 'NALEDI', t: `That's a great way to frame it, and we'll keep coming back to that "survival strategy" lens all episode, because it explains why each of these adaptations exists, not just what they are.` },

  // PART 1: What Makes a Reproductive Strategy?
  { s: 'NALEDI', t: `Let's start with the term itself, because it shows up as a definition question a lot. A reproductive strategy is the set of structural, functional, and behavioural adaptations that improve the chances of fertilisation and the survival of offspring.`, newPart: true },
  { s: 'MICHAEL', t: `So it's not just one thing — it's structure, function, and behaviour, all working together.` },
  { s: 'NALEDI', t: `Exactly — and that's worth remembering, because a strong exam answer often needs to touch more than one of those categories. Now, reproductive strategies differ from species to species in five main ways. One — the number of eggs produced by the female. Two — the site of fertilisation, meaning whether it happens inside or outside the female's body. Three — the place where the embryo develops, and how it's nourished. Four — how quickly the young can fend for themselves. And five — the type of parental care given to the offspring.` },
  { s: 'MICHAEL', t: `Number of eggs, where fertilisation happens, where development happens, how fast they're independent, and how much care they get. Five categories.` },
  { s: 'NALEDI', t: `Perfect — and honestly, almost this entire episode is just unpacking those five categories, one at a time.` },

  // PART 2: External Fertilisation
  { s: 'MICHAEL', t: `Okay, let's start with fertilisation itself, since that's the first category. And I already know the two big ones — internal and external.`, newPart: true },
  { s: 'NALEDI', t: `Right, and let's define fertilisation properly first, since it underlies everything today: fertilisation occurs when a sperm cell and an egg cell fuse together to form a zygote. Simple enough — but where that fusion happens is what splits vertebrates into two very different reproductive worlds.` },
  { s: 'MICHAEL', t: `Let's do external first.` },
  { s: 'NALEDI', t: `External fertilisation takes place outside the female's body. And here's the non-negotiable requirement: water is required for external fertilisation to happen.` },
  { s: 'MICHAEL', t: `Because the sperm actually has to swim through open water to reach the egg?` },
  { s: 'NALEDI', t: `Exactly — think of salmon spawning in a lake or a river. The female releases her eggs into the water, and the male releases sperm into that same water, nearby. There's no direct contact between the two parents' bodies — the gametes just have to find each other in the water.` },
  { s: 'MICHAEL', t: `That sounds... incredibly inefficient, honestly. Like throwing darts blindfolded.` },
  { s: 'NALEDI', t: `[laughs] You're not wrong, and that inefficiency is actually the key to understanding this whole strategy. Because so many sperm and egg cells fail to meet or survive, animals using external fertilisation compensate by releasing an enormous number of gametes.` },
  { s: 'MICHAEL', t: `So it's a numbers game — mass-produce and hope enough of them make it.` },
  { s: 'NALEDI', t: `Exactly that. And because there's no protective body cavity involved, the resulting eggs also face high mortality rates — they can dry out, or desiccate, if exposed to air, and they're very vulnerable to predators, since there's no parent physically shielding them.` },
  { s: 'MICHAEL', t: `So external fertilisation is classic fish and frogs?` },
  { s: 'NALEDI', t: `Exactly — fish and amphibians are the two big examples you'll want to know.` },

  // PART 3: Internal Fertilisation
  { s: 'MICHAEL', t: `Okay, and internal fertilisation is the opposite of all that?`, newPart: true },
  { s: 'NALEDI', t: `Pretty much, point for point. Internal fertilisation occurs inside the female's body, where the male has deposited his sperm. Crucially — no water is required.` },
  { s: 'MICHAEL', t: `Which makes sense, since the whole point is it's happening inside a body, not out in the open.` },
  { s: 'NALEDI', t: `Exactly — and that's actually a big deal evolutionarily, because it's part of what allowed vertebrates to properly colonise dry land, away from water. Internal fertilisation happens via direct contact between the male and female — for example, mammals like wolves mating via a penis, or birds transferring sperm during mating.` },
  { s: 'MICHAEL', t: `And because it's happening inside the body, I'm guessing fewer gametes are needed?` },
  { s: 'NALEDI', t: `Exactly right — since the sperm cell doesn't have to survive an open, hostile environment to find the egg, far fewer sperm cells need to be released compared to external fertilisation. And because the resulting young are typically protected — either by the mother's own body, or by a hardened shell — mortality rates among the young are lower.` },
  { s: 'MICHAEL', t: `So internal fertilisation trades "produce a huge number and hope" for "produce fewer, but protect them properly."` },
  { s: 'NALEDI', t: `That's a really clean way to put it — quality and protection over sheer quantity. And the examples you want here are reptiles, birds, and mammals.` },
  { s: 'MICHAEL', t: `Can we put those two head to head? I think I've basically already built the comparison table in my head, but I want to check it.` },
  { s: 'NALEDI', t: `Let's do it properly. External fertilisation: requires water, gametes released into water, many gametes released, high mortality due to lack of protection — eggs can desiccate or be predated on — examples fish and amphibians. Internal fertilisation: no water required, sperm released directly into the female's body, fewer gametes released, lower mortality thanks to protection from the mother's body or a calcareous or leathery shell — examples reptiles, birds, and mammals.` },
  { s: 'MICHAEL', t: `That matches exactly what I had. Four rows: water requirement, how gametes are released, number of gametes, and mortality/protection.` },
  { s: 'NALEDI', t: `Exactly the structure examiners want for a comparison question — four clean rows, not two separate unrelated lists.` },

  // PART 4: Ovipary, Ovovivipary, and Vivipary
  { s: 'NALEDI', t: `Okay, now we move into the second big comparison of the episode, and this one trips people up more, so let's go slowly. There are three reproductive strategies that describe how the embryo develops after fertilisation: ovipary, ovovivipary, and vivipary.`, newPart: true },
  { s: 'MICHAEL', t: `Those three words look almost identical to me right now, I'm not going to lie.` },
  { s: 'NALEDI', t: `Totally fair, and that's exactly why we're going to build them from the ground up rather than just defining them one after another. These three strategies differ in four specific respects: where the zygote is formed, where development occurs, how the embryo receives its nourishment, and the type of egg present — or whether there's an egg at all.` },
  { s: 'MICHAEL', t: `Same four categories every time — location, location, nourishment, egg type. Okay, let's start with ovipary since it sounds the most familiar.` },
  { s: 'NALEDI', t: `Good instinct. Ovipary is the strategy where eggs are laid, and the embryo develops outside the mother's body. Fertilisation itself can actually be either external or internal, depending on the species — but the defining feature is that the egg gets laid, and everything from that point on happens outside the mother.` },
  { s: 'MICHAEL', t: `So a bird laying an egg in a nest — the chick develops entirely inside that shell, outside the mother's body.` },
  { s: 'NALEDI', t: `Exactly. And here's the nourishment detail: in ovipary, yolk is the only source of nutrition for the developing embryo, and it's usually present only in small quantities. The type of egg is jelly-like or calcareous — meaning it has a hard, chalky shell.` },
  { s: 'MICHAEL', t: `Jelly-like, like frog spawn?` },
  { s: 'NALEDI', t: `Exactly that kind of texture — that's the jelly-like version, typical of external fertilisers like fish and amphibians. The calcareous, hard-shelled version is what you'd see in birds and reptiles.` },
  { s: 'MICHAEL', t: `Okay, next — ovovivipary. This is the one that always confuses me because it sounds like it's trying to be both of the other two at once.` },
  { s: 'NALEDI', t: `[laughs] That's actually a really accurate description of what it is — it genuinely borrows features from both sides. Ovovivipary is where young develop from eggs that were fertilised internally, and are then retained within the mother's body after fertilisation, until they hatch.` },
  { s: 'MICHAEL', t: `So the egg forms, but instead of being laid, it just... stays inside the mum until it's ready to hatch?` },
  { s: 'NALEDI', t: `Exactly right. And here's the key nourishment detail that separates it from vivipary: even though the egg is being carried inside the mother's body, the young are still nourished by the yolk present in the egg — they're nutritionally independent of the mother's body. The mother is providing shelter and protection, not food.` },
  { s: 'MICHAEL', t: `So it's internal fertilisation, and internal development, but the actual nutrition is still old-school yolk, same as an egg laid outside.` },
  { s: 'NALEDI', t: `That's it exactly — that's the whole trick to remembering ovovivipary. The egg type here is calcareous or leathery. And the classic examples are some sharks and snakes.` },
  { s: 'MICHAEL', t: `Okay, last one — vivipary. I'm guessing this is the "true live birth, nourished directly by mum" one.` },
  { s: 'NALEDI', t: `Exactly right, and this is the strategy most familiar to us, since it's what mammals — including humans — use. Vivipary is where the young develop inside the uterus of the mother, after being fertilised internally, and — this is the defining difference — young are nourished through the placenta, directly from the mother's body.` },
  { s: 'MICHAEL', t: `So no yolk at all, this time it's actually mum's own body supplying the nutrients, continuously, throughout development?` },
  { s: 'NALEDI', t: `Exactly — and because of that, there's no need for any kind of egg or shell whatsoever. The egg type for vivipary is simply "none."` },
  { s: 'MICHAEL', t: `Let me try to lock in all three side by side. Ovipary: eggs laid, develops outside mum, nourished by yolk only, jelly-like or calcareous egg. Ovovivipary: internally fertilised, retained inside mum until hatching, still nourished by yolk though — independent of mum's body — calcareous or leathery egg. Vivipary: develops inside the uterus, nourished through the placenta directly by mum, no egg at all.` },
  { s: 'NALEDI', t: `[impressed] That's a genuinely perfect three-way comparison, and honestly, that's the exact structure a "tabulate the differences" question is looking for — fertilisation and development location, nourishment source, and egg type, across all three.` },

  // PART 5: The Amniotic Egg — A Land-Reproduction Breakthrough
  { s: 'MICHAEL', t: `Okay, next section — and I remember seeing a diagram with a bunch of layers labelled inside an egg. This is that, right?`, newPart: true },
  { s: 'NALEDI', t: `That's exactly it — the amniotic egg. And I want to frame why this matters before we get into the labels, because it's genuinely one of the biggest evolutionary leaps in this whole chapter. The amniotic egg is a major development in the evolution of animal life on land — it's what allowed animals to go from being water-dependent for sexual reproduction, to being able to reproduce without needing water available at all.` },
  { s: 'MICHAEL', t: `So this is the invention that let animals fully leave the water behind for reproduction?` },
  { s: 'NALEDI', t: `Exactly — it's the reproductive equivalent of an astronaut's spacesuit. It creates a self-contained, protected environment for the embryo, so the parents don't need a pond or a stream nearby to reproduce successfully.` },
  { s: 'MICHAEL', t: `Okay, so what's actually inside this self-contained little spacesuit?` },
  { s: 'NALEDI', t: `The amniotic egg consists of the developing embryo itself, plus three extra-embryonic membranes, plus a yolk sac, plus a protective shell. Let's go through each one, because they each have a distinct job, and exam diagrams love testing these labels.` },
  { s: 'MICHAEL', t: `Three membranes — go.` },
  { s: 'NALEDI', t: `First: the amnion. It produces amniotic fluid, and that fluid cushions the embryo, protecting it against mechanical injury, against temperature changes, and against dehydration.` },
  { s: 'MICHAEL', t: `So the amnion is basically the shock-absorber and climate-control system.` },
  { s: 'NALEDI', t: `That's a great way to hold onto it. Second membrane: the allantois. It collects the embryo's nitrogenous waste, and it also assists in the exchange of gases.` },
  { s: 'MICHAEL', t: `So allantois is doing double duty — waste disposal and breathing support.` },
  { s: 'NALEDI', t: `Exactly. And third: the chorion. This one allows for gaseous exchange within the amniotic egg — and here's a detail worth remembering for later, since it becomes really important in the human reproduction material: in mammals, where there's no shell present, the chorion is actually what goes on to form the placenta.` },
  { s: 'MICHAEL', t: `Oh, interesting — so the chorion isn't just an egg structure, it's actually the ancestor of the placenta we'll be talking about with humans?` },
  { s: 'NALEDI', t: `Exactly right, and that's a genuinely lovely connective thread to notice — well spotted. In reptiles and birds, where a shell is present, the chorion just handles gas exchange through that shell instead.` },
  { s: 'MICHAEL', t: `And the yolk sac and the shell — those aren't membranes, but they're still part of the structure?` },
  { s: 'NALEDI', t: `Right, two more essential parts. The yolk sac contains the food reserves for the developing embryo. And here's a nice cause-and-effect detail: if only a small quantity of yolk is present, the young hatch sooner, but they're under-developed, and usually require more parental care. If a larger quantity of yolk is present, the incubation period is longer, but the young are usually well-developed by the time they hatch.` },
  { s: 'MICHAEL', t: `So yolk quantity is basically trading off incubation time against how "finished" the baby is when it's born — less yolk, quicker but rawer; more yolk, slower but more ready to go.` },
  { s: 'NALEDI', t: `That's an excellent way to phrase it, and — small spoiler — that trade-off is going to come back in a few minutes when we talk about precocial and altricial development.` },
  { s: 'MICHAEL', t: `And the shell?` },
  { s: 'NALEDI', t: `The shell is either hardened and calcareous, or leathery. Its job is to protect the developing embryo from mechanical injury and to prevent desiccation — drying out — while still allowing gases to move through it, so the embryo can breathe.` },
  { s: 'MICHAEL', t: `So the shell has to do a strange balancing act — tough enough to protect, but porous enough to breathe through.` },
  { s: 'NALEDI', t: `Exactly — it's not airtight, it's more like a very controlled, semi-permeable barrier.` },
  { s: 'MICHAEL', t: `Quick thought — you mentioned the allantois and yolk sac earlier being important, but in a human foetus, is there actually a functioning yolk sac and allantois like there would be in, say, a chicken egg?` },
  { s: 'NALEDI', t: `Great forward-thinking question, and it's actually a real exam question in its own right — "explain why the allantois and yolk sac are non-functional in a human foetus." The short answer: because a human embryo is nourished directly by the mother through the placenta, and waste is removed via the mother's blood supply too, rather than being stored inside the egg structure. So those two structures are essentially evolutionary leftovers in humans — present in early development, but not doing their original ancestral job, because vivipary and the placenta have taken over their function.` },
  { s: 'MICHAEL', t: `So it's like carrying a spare tyre and a toolkit you never actually use because you've got roadside assistance instead.` },
  { s: 'NALEDI', t: `[laughs] That is a surprisingly good analogy for it, yes.` },

  // PART 6: Precocial and Altricial Development
  { s: 'MICHAEL', t: `Okay, this is the part with the fluffy ducklings versus the... very unfortunate-looking newborn mice, right?`, newPart: true },
  { s: 'NALEDI', t: `[laughs] Exactly the one. Precocial and altricial development are terms used to describe how well-developed offspring are at the moment of birth or hatching.` },
  { s: 'MICHAEL', t: `Ducklings are the well-developed ones, right? I remember they can basically walk and swim almost immediately.` },
  { s: 'NALEDI', t: `Exactly — that's precocial development. When hatchlings are precocial, they're well-developed as they hatch, they're able to move around and feed themselves, and their eyes are already open. Because of all that, they only need a limited degree of parental care.` },
  { s: 'MICHAEL', t: `And altricial is the opposite — the naked, blind, helpless newborns?` },
  { s: 'NALEDI', t: `Exactly right. Altricial development means the hatchlings are under-developed as they hatch — they're unable to move, unable to feed themselves, unable to fend for themselves at all. Because of that, altricial young require a much higher degree of parental care.` },
  { s: 'MICHAEL', t: `So this connects directly back to what we just said about yolk quantity — more yolk in the egg tends to mean more developed, precocial young; less yolk tends to mean under-developed, altricial young that need way more looking after.` },
  { s: 'NALEDI', t: `[impressed] Exactly — you just connected two separate sections of this chapter completely on your own, which is honestly the best sign that you actually understand this material rather than just memorising it.` },
  { s: 'MICHAEL', t: `Common mistake alert — I feel like altricial development sounds like the worse option. Helpless babies, more work for the parents. Is that actually true?` },
  { s: 'NALEDI', t: `That's a genuinely important thing to flag, and it's a real "common mistake" examiners like to correct. It would be wrong to assume altricial species are simply at a disadvantage. In reality, that extended period of parental care can actually foster more sophisticated learning and behavioural development in the offspring — the young get more time being taught and shaped by their parents before they're on their own.` },
  { s: 'MICHAEL', t: `So it's not "worse," it's a completely different trade-off — quick independence versus a longer, more supported developmental window.` },
  { s: 'NALEDI', t: `Exactly — and that framing works really well in a "discuss" or "explain" style exam question.` },
  { s: 'NALEDI', t: `Let's put the full comparison side by side, because this table comes up a lot. Development of the body: well-developed in precocial, under-developed in altricial. Eyes after birth: open in precocial, closed in altricial. Fur or feathers: present in precocial, usually naked in altricial. Parental care required: low in precocial, high in altricial. Mobility: young can move soon after birth in precocial, limited ability to move freely in altricial. And yolk amount in the egg: greater quantity for precocial, lower quantity for altricial.` },
  { s: 'MICHAEL', t: `Six rows: body development, eyes, fur or feathers, parental care, mobility, yolk amount. Ducklings and salmon fry tick the precocial boxes — eyes open, can move, feathered or finned. Nesting birds and baby rats — the "pinkies" — tick the altricial boxes — naked, eyes shut, can't really move yet.` },
  { s: 'NALEDI', t: `That is a perfect exam-ready recall of that table.` },
  { s: 'NALEDI', t: `And it's worth noting — ovoviviparous animals specifically can actually display either precocial or altricial development, depending on the species. So don't assume the two topics are locked together in one fixed pairing; a species' egg-laying strategy and its development style are two separate axes.` },
  { s: 'MICHAEL', t: `Good catch, I would have assumed those were the same thing.` },

  // PART 7: Parental Care
  { s: 'NALEDI', t: `Last topic before we wrap up — parental care, which we've already been circling around a bit. In higher-order animals, parental care is a behaviour that increases the survival of the young.`, newPart: true },
  { s: 'MICHAEL', t: `And I'm guessing there's a trade-off here too, based on everything else we've talked about today?` },
  { s: 'NALEDI', t: `Exactly — and it's a really elegant one. Animals which invest more energy pre-natally, meaning before birth — think vivipary, a placenta, a long gestation — usually display very little parental care once the young have actually been born. But in animals where less energy is invested pre-natally, more post-natal parental care tends to be offered instead.` },
  { s: 'MICHAEL', t: `So it's almost like a total energy budget — you either spend it heavily before birth, or heavily after birth, but rarely equally huge amounts on both.` },
  { s: 'NALEDI', t: `That's a genuinely excellent way to frame the whole trade-off, and it ties this entire episode together into one underlying theme. Parental care itself can be seen in a few key forms: the building of nests and the incubation of eggs, guarding the young from predators, and teaching offspring the skills they need.` },
  { s: 'MICHAEL', t: `Building, guarding, teaching.` },
  { s: 'NALEDI', t: `Exactly — and the presence, or the lack, of that parental care directly influences whether the young actually survive to adulthood.` },

  // PART 8: Michael's Full Walkthrough
  { s: 'NALEDI', t: `[warmly] Okay, before we wrap — same as always — let's see if you can hold the whole episode together in your own words.`, newPart: true },
  { s: 'MICHAEL', t: `Challenge accepted. So — reproductive strategies are the structural, functional, and behavioural adaptations that improve fertilisation success and offspring survival, and they differ in egg number, fertilisation site, development location and nourishment, speed of independence, and parental care. Fertilisation is either external — outside the body, needs water, loads of gametes released, high mortality, think fish and amphibians — or internal — inside the body, no water needed, fewer gametes, lower mortality, think reptiles, birds, and mammals. Then there's ovipary, ovovivipary, and vivipary — ovipary lays eggs that develop outside mum, nourished by yolk only; ovovivipary fertilises internally and keeps the egg inside mum until it hatches, but still nourishes with yolk; vivipary develops inside the uterus and is nourished directly through the placenta, no egg at all. The amniotic egg let animals reproduce away from water — it's got the embryo, three membranes — amnion for fluid and cushioning, allantois for waste and gas exchange, chorion for gas exchange and, in mammals, forming the placenta — plus a yolk sac for food reserves and a calcareous or leathery shell for protection. Precocial hatchlings are well-developed, eyes open, low parental care needed; altricial hatchlings are under-developed, eyes closed, need lots of parental care — but that's not automatically a disadvantage, since extended care supports more complex learning. And finally, parental care — nest-building, guarding, teaching — tends to be lower when a species invests heavily before birth, and higher when it invests less before birth.` },
  { s: 'NALEDI', t: `[impressed] Michael, that is an outstanding, complete recap — every single comparison table from this episode, in order, correctly.` },
  { s: 'MICHAEL', t: `[laughs] I think the "trade-off" theme running through the whole thing actually made it easier to remember than I expected.` },
  { s: 'NALEDI', t: `That's exactly why we kept coming back to it — once you see the underlying pattern, the individual facts stop feeling random.` },

  // OUTRO: Wrapping It Up
  { s: 'NALEDI', t: `[warmly] That's a wrap on today's tour through the animal kingdom's reproductive strategies. Next time on Life, Decoded, we're bringing this all the way home — to human reproduction specifically. Same cast of ideas — fertilisation, development, hormones — but now it's all about us.`, newPart: true },
  { s: 'MICHAEL', t: `Looking forward to it. Though I have a feeling that one's going to be a longer episode.` },
  { s: 'NALEDI', t: `[laughs] You have no idea. Until then — keep those comparison tables straight, and we'll catch you in the next episode.` },
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

  console.log(`\nReproductive Strategies Chapter 3 Podcast — ${S.length} segments — model: ${PRIMARY_MODEL}\n`);

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

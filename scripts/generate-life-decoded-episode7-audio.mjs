/**
 * Life, Decoded — Episode 7: "The Human Endocrine System and Homeostasis"
 * ElevenLabs audio generator — Eleven v4
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-episode7-audio.mjs
 *
 * Re-record only specific files by passing their numbers:
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-episode7-audio.mjs 3 5
 *
 * Six output MP3s:
 *   1. Introduction to the Endocrine System   — Intro + Parts 1-3
 *   2. Endocrine Glands and Their Hormones    — Parts 4-9
 *   3. Homeostasis and Negative Feedback      — Parts 10-11
 *   4. Homeostatic Control Loops              — Parts 12-16
 *   5. Endocrine Disorders                    — Parts 17-19
 *   6. Thermoregulation and Outro             — Parts 20-21 + Outro
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
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-life-decoded-episode7-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'Life-Decoded-Episode-7');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'life-decoded-episode-7');

// ─────────────────────────────────────────────────────────────────────────
const SECTIONS = [

// ═══════════════════════════════════════════════════════════════════════
// 1. Introduction to the Endocrine System — Intro + Parts 1-3
// ═══════════════════════════════════════════════════════════════════════
{
  num: 1,
  file: '1. Introduction to the Endocrine System',
  segs: [
    // Intro
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to LIFE, DECODED. Last episode we spent the whole time inside the nervous system — neurons firing, reflexes snapping, the eye and the ear doing their thing. Today we meet the nervous system's quieter partner. We're talking about the endocrine system and homeostasis.` },
    { s: 'MICHAEL', t: `[curious] Homeostasis... I've seen that word in about four different chapters now, and every time I just nod and hope nobody asks me to define it.` },
    { s: 'TYLA', t: `[laughs] Then today's the day you stop nodding and start explaining. Here's the big idea. Your body is constantly being pushed around — by heat, by cold, by what you eat, by how much you drink, by running for a taxi. And yet, inside, the conditions your cells live in stay remarkably steady. Today is all about how the body pulls that off.` },
    { s: 'MICHAEL', t: `So it's like the body has some kind of autopilot keeping everything level?` },
    { s: 'TYLA', t: `[enthusiastically] That's a really good way to start thinking about it. And we're going to build this in four big movements. First... we meet the endocrine system itself — what a gland is, what a hormone is, and a full tour of the glands and the hormones each one makes. Second... we get into homeostasis and the mechanism that drives most of it, called negative feedback. Third... we walk through every feedback loop you need for the exam — water, salt, carbon dioxide, blood glucose and thyroxin. And fourth... we look at what happens when the system breaks — the endocrine disorders — and we finish with how your body controls its own temperature.` },
    { s: 'MICHAEL', t: `That's a lot of loops.` },
    { s: 'TYLA', t: `[reassuringly] It is, but here's the good news — once you understand one loop properly, the rest follow the same pattern. And you'll hear callbacks to Episode 4, when we covered human reproduction, and Episode 6, the nervous system, because those chapters lean on each other heavily.` },
    { s: 'MICHAEL', t: `Okay. Autopilot, glands, loops, things breaking, temperature. Let's go.` },
    { s: 'TYLA', t: `Let's go. And we start with a question that sounds simple but isn't: how does your body actually send a message from one place to another?` },

    // Part 1
    { s: 'MICHAEL', t: `[casually] Well, from last episode — nerves. Impulses zip along neurons, cross synapses with neurotransmitters, done.` },
    { s: 'TYLA', t: `Exactly, and that's one of the two systems that coordinate your body. But there's a second one. Your responses to the world are controlled by the nervous system and the endocrine system — and, to some extent, the immune system too. Working together, they keep everything inside you stable and protect you.` },
    { s: 'MICHAEL', t: `So what's the difference between the nervous route and the endocrine route?` },
    { s: 'TYLA', t: `Picture two ways of getting a message across the city. The nervous system is like a phone call. It's direct, it's almost instant, it goes along a dedicated line — the neuron — to one specific place, and it's over quickly. It uses electrical impulses and neurotransmitters.` },
    { s: 'MICHAEL', t: `And the endocrine system?` },
    { s: 'TYLA', t: `The endocrine system is more like a letter dropped into the postal system. A gland releases a chemical — a hormone — straight into the bloodstream. The blood carries it all around the body, but only the organs that are meant to "read" it actually respond. Those are called the target organs, or effectors. It's slower to arrive... but the effect lasts much longer.` },
    { s: 'MICHAEL', t: `So nerves are fast and short-lived, hormones are slow and long-lasting.` },
    { s: 'TYLA', t: `That's the core comparison, yes. Let's lay out the endocrine response properly, because exam questions like to ask for its features. First... it's a slower response with a long-lived effect. Second... the endocrine glands produce specific hormones and release them into the bloodstream. Third... an effector organ is targeted. Fourth... a response is started in that organ. And last — when endocrine glands are over-stimulated or under-stimulated, we see endocrine disorders.` },
    { s: 'MICHAEL', t: `And we're getting to those disorders later, I'm guessing.` },
    { s: 'TYLA', t: `[playfully] Part 17 onwards — hold that thought. For now, here's a working definition: the endocrine system is the body's system of chemical co-ordination — it uses hormones carried in the blood to regulate many different activities in the body.` },
    { s: 'MICHAEL', t: `Chemical co-ordination versus the nervous system's electrical co-ordination. Got it.` },

    // Part 2
    { s: 'MICHAEL', t: `Okay, so a gland is just something that makes a secretion, right?` },
    { s: 'TYLA', t: `Right — a gland is an organ or group of cells that produces and releases a secretion. But mammals have two kinds of glands, and mixing them up is one of the most common mistakes in this chapter. They are exocrine glands and endocrine glands.` },
    { s: 'MICHAEL', t: `Exo and endo. Outside and inside?` },
    { s: 'TYLA', t: `That's actually a great memory hook. Exocrine glands have ducts — little tubes — and they release their secretions through those ducts into a cavity or onto a surface. Think of a sweat gland. It makes sweat, and a tiny duct carries that sweat up and out onto your skin.` },
    { s: 'MICHAEL', t: `So exocrine is like a tap with a pipe leading somewhere specific.` },
    { s: 'TYLA', t: `Perfect. Salivary glands are another example — saliva travels along ducts into your mouth. Now, endocrine glands are ductless. They don't have a pipe. Instead, the gland is surrounded by tiny blood capillaries, and the hormone is released straight into the blood flowing past.` },
    { s: 'MICHAEL', t: `So picture an endocrine gland as a little cluster of cells wrapped in blood vessels, and the hormone just seeps right into the blood.` },
    { s: 'TYLA', t: `Exactly. Examples of endocrine glands are the pituitary gland, the thyroid gland, and the pancreas.` },
    { s: 'MICHAEL', t: `[surprised] Wait — the pancreas? I thought the pancreas made digestive enzymes. Wouldn't that go through a duct?` },
    { s: 'TYLA', t: `[impressed] That is the exact trap examiners love, and you've walked right into the right answer. The pancreas is both an exocrine and an endocrine gland. As an exocrine gland, it makes digestive enzymes and sends them along the pancreatic duct into the small intestine — specifically the first part, the duodenum. As an endocrine gland, special groups of cells inside it release the hormones insulin and glucagon directly into the bloodstream.` },
    { s: 'MICHAEL', t: `So it's one organ with two jobs — a duct side and a ductless side.` },
    { s: 'TYLA', t: `Exactly. And those special endocrine cell clusters have a name we'll use a lot later: the Islets of Langerhans. Picture little islands of hormone-making cells scattered through a sea of enzyme-making tissue.` },
    { s: 'MICHAEL', t: `Islands in the pancreas. That's a nice picture.` },

    // Part 3
    { s: 'MICHAEL', t: `Okay, so what exactly is a hormone, chemically?` },
    { s: 'TYLA', t: `A hormone is an organic compound that acts as a chemical messenger. It's produced by an endocrine gland, it travels in the bloodstream, and it causes an effect somewhere else in the body. Most hormones are proteins, and a few are steroids, which are a type of lipid.` },
    { s: 'MICHAEL', t: `Proteins — so that links all the way back to Episode 1, protein synthesis. The cell builds hormones the same way it builds any other protein.` },
    { s: 'TYLA', t: `[warmly] Lovely callback. Now, three key features of hormones. One... they're only needed in small amounts. Two... they give a more lasting response than a nerve impulse. And three... a gland can produce too much or too little of a hormone, and that's what leads to disorders.` },
    { s: 'MICHAEL', t: `So a tiny amount, a long effect, and getting the amount wrong causes problems.` },
    { s: 'TYLA', t: `That's it. Now — what do hormones actually do in general? There are three basic functions. First... reproduction, growth and development. Second... maintaining the internal environment, either by stimulating cells or organs to work harder or by inhibiting them to slow down. And third... regulating metabolism, by controlling how energy is produced, used and stored.` },
    { s: 'MICHAEL', t: `Growth and reproduction, keeping things steady, and managing energy.` },
    { s: 'TYLA', t: `Perfect summary. And one more idea before the tour — hormones don't work alone. They often interact in a sequence, one hormone triggering the next. Sometimes they work together towards a common effect. And sometimes they work antagonistically.` },
    { s: 'MICHAEL', t: `[playfully] Antagonistically — like antagonists in a movie? They're fighting each other?` },
    { s: 'TYLA', t: `[chuckles] Kind of! Working antagonistically means two hormones work in opposite ways — if one causes an increase in a substance, the other causes a decrease. The classic pair, which we'll meet in Part 15, is insulin and glucagon. One lowers blood glucose, the other raises it.` },
    { s: 'MICHAEL', t: `[excitedly] Like the accelerator and the brake in a car. Two opposite controls, but together they keep you at the right speed.` },
    { s: 'TYLA', t: `[delighted] That's a brilliant analogy — hang on to it for the glucose loop.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 2. Endocrine Glands and Their Hormones — Parts 4-9
// ═══════════════════════════════════════════════════════════════════════
{
  num: 2,
  file: '2. Endocrine Glands and Their Hormones',
  segs: [
    // Part 4
    { s: 'MICHAEL', t: `Okay, give me the map. Where are all these glands?` },
    { s: 'TYLA', t: `Let's do it top to bottom, and I'll describe it like we're looking at an outline of a person from the front. Starting in the head — deep inside the brain is the hypothalamus, and hanging just below it, attached by a little stalk, is the pituitary gland. The hypothalamus makes ADH, antidiuretic hormone. The pituitary releases growth hormone, thyroid stimulating hormone, follicle stimulating hormone, luteinising hormone and prolactin.` },
    { s: 'MICHAEL', t: `That's a big list for something hanging under the brain.` },
    { s: 'TYLA', t: `It's a busy little gland. Moving down to the neck — wrapped around the front of your windpipe, shaped a bit like a butterfly, is the thyroid gland. It makes thyroxin.` },
    { s: 'MICHAEL', t: `Butterfly in the neck. Okay.` },
    { s: 'TYLA', t: `Down into the abdomen. Sitting on top of each kidney, like a little triangular cap, is an adrenal gland. They make adrenalin and aldosterone. Just near them, tucked behind the stomach, is the pancreas, making insulin and glucagon.` },
    { s: 'MICHAEL', t: `Adrenals on the kidneys, pancreas behind the stomach.` },
    { s: 'TYLA', t: `And then the reproductive glands. In females, the ovaries, low in the abdomen on either side of the uterus, make oestrogen and progesterone. In males, the testes make testosterone.` },
    { s: 'MICHAEL', t: `Let me say that back as a top-to-bottom checklist. Hypothalamus and pituitary in the brain. Thyroid in the neck. Adrenals on top of the kidneys. Pancreas behind the stomach. Ovaries or testes lowest down.` },
    { s: 'TYLA', t: `[pleased] That's exactly the order examiners use when they label a diagram from A to G. If you can picture that column of glands, you can handle the "name the gland and its hormone" question.` },

    // Part 5
    { s: 'MICHAEL', t: `You said the hypothalamus is part of the brain, but it also makes a hormone. So is it nervous system or endocrine system?` },
    { s: 'TYLA', t: `Both — and that's exactly why it matters. The hypothalamus is a small region of the brain that sits just above the pituitary gland and is connected to it. It's the link between the nervous system and the endocrine system. It receives nerve information, and it can respond by producing hormones or by controlling the pituitary.` },
    { s: 'MICHAEL', t: `So it's like a translator — it takes nervous messages and turns them into hormone messages.` },
    { s: 'TYLA', t: `That's a great way to put it. The hypothalamus also helps control vital functions like body temperature, hunger and thirst — keep temperature in mind, because it comes back in Part 20. In this chapter, the hormone we focus on from the hypothalamus is ADH, the antidiuretic hormone, sometimes also called vasopressin.` },
    { s: 'MICHAEL', t: `[confused] Antidiuretic... what does that actually mean?` },
    { s: 'TYLA', t: `"Diuresis" means producing lots of urine. So "anti-diuretic" literally means "against making lots of urine." ADH targets the kidneys. It stimulates them to reabsorb more water back into the blood, which protects the body against dehydration.` },
    { s: 'MICHAEL', t: `Oh, that's a nice name once you break it down. Anti — against. Diuretic — lots of pee. ADH stops you wasting water.` },
    { s: 'TYLA', t: `[giggles] Exactly. Now — one detail worth knowing. The hypothalamus produces ADH, but it's stored in and released from the pituitary gland. That's why some diagrams and memos say "the pituitary releases ADH." Both are accepted, as long as you're consistent with what the question shows you.` },
    { s: 'MICHAEL', t: `Okay. And the pituitary itself?` },
    { s: 'TYLA', t: `Picture the pituitary as a pea-sized gland hanging from the base of the brain on a tiny stalk. It has two parts — the anterior lobe at the front and the posterior lobe at the back. It's often called the master gland.` },
    { s: 'MICHAEL', t: `Master gland — because it bosses the other glands around?` },
    { s: 'TYLA', t: `[chuckles] Exactly that. Several of its hormones don't act on ordinary tissues — they act on other endocrine glands, switching them on. So it's like the head office manager who doesn't do the work directly, but instructs the branch managers.` },
    { s: 'MICHAEL', t: `And the hypothalamus is the boss above the manager, since it controls the pituitary.` },
    { s: 'TYLA', t: `[approvingly] Nicely spotted. That chain of command shows up again in the thyroxin loop.` },

    // Part 6
    { s: 'MICHAEL', t: `Right, so the anterior lobe makes a whole list. Let's go through them one at a time.` },
    { s: 'TYLA', t: `Five hormones, and for each one you need the target and the function. First — TSH, thyroid stimulating hormone. Its target is the thyroid gland. It does two things: it stimulates the thyroid to grow, and it stimulates the thyroid to secrete thyroxin.` },
    { s: 'MICHAEL', t: `That one's easy — the name tells you. Thyroid. Stimulating. Hormone.` },
    { s: 'TYLA', t: `Exactly. Second — FSH, follicle stimulating hormone. This one has targets in both sexes. In females, it targets the ovaries — it stimulates follicles to develop, it stimulates the ovaries to produce oestrogen, and it stimulates the development of eggs, called ova. In males, it targets the testes and stimulates them to produce sperm cells, also called spermatozoa.` },
    { s: 'MICHAEL', t: `We did FSH in Episode 4 with the menstrual cycle. So it's the same hormone — just now we're seeing it as part of the whole endocrine system.` },
    { s: 'TYLA', t: `Exactly the right connection. Third — LH, luteinising hormone. In females, it targets the ovaries and stimulates the egg to mature and then triggers ovulation, the release of the egg. In males, it targets the testes and stimulates them to produce the male hormone testosterone.` },
    { s: 'MICHAEL', t: `So FSH gets the egg or sperm developing, and LH handles maturing and releasing the egg — or switching on testosterone in males.` },
    { s: 'TYLA', t: `That's a clean way to hold it. Fourth — prolactin. Its target is the mammary glands, the milk-producing glands in the breast. It stimulates the production and secretion of milk.` },
    { s: 'MICHAEL', t: `Pro-lact-in — "lact" like lactose, milk. Okay, these names really do help.` },
    { s: 'TYLA', t: `They do. And fifth — GH, growth hormone. Its targets are bone and muscle cells, and it stimulates the growth of the long bones and the skeletal muscles.` },
    { s: 'MICHAEL', t: `Let me run them back. TSH — thyroid, grow and make thyroxin. FSH — ovaries for follicles, oestrogen and eggs, or testes for sperm. LH — egg maturation and ovulation, or testosterone. Prolactin — mammary glands, milk. Growth hormone — long bones and skeletal muscles.` },
    { s: 'TYLA', t: `[cheerfully] Five for five. And remember growth hormone, because in Part 17 we'll see what happens when there's too much or too little of it.` },

    // Part 7
    { s: 'MICHAEL', t: `[excited] Now the adrenals. Adrenalin — that's the rush hormone, right?` },
    { s: 'TYLA', t: `That's the one. But first, a quick look at the structure. The adrenal glands are two triangular glands, one sitting on top of each kidney. Picture slicing one open — you'd see a tough outer covering called the capsule, then an outer layer called the cortex, and a central core called the medulla, with blood vessels running through it.` },
    { s: 'MICHAEL', t: `Capsule, cortex, medulla — outside to inside.` },
    { s: 'TYLA', t: `Exactly. Now, adrenalin — also called epinephrine, ep-ih-NEF-rin — is known as the fight or flight hormone. Let me give you a scenario. You're crossing the road, looking at your phone, and a minibus taxi you didn't see hoots right next to you and swerves.` },
    { s: 'MICHAEL', t: `[laughs] Oh, I know that feeling. Heart in your throat.` },
    { s: 'TYLA', t: `Exactly. In that split second, your adrenal glands flood your blood with adrenalin, and it hits a whole list of targets at once. Let's go through them. The heart — heart rate increases, and more blood is supplied to the heart muscle itself. The liver — it's stimulated to convert more glycogen into glucose, so there's extra fuel in the blood. The skeletal muscles — they get an increased blood supply, ready to run.` },
    { s: 'MICHAEL', t: `So more fuel, delivered faster, to the muscles that need it.` },
    { s: 'TYLA', t: `Exactly. Keep going. The eye muscles — the pupils dilate, letting in more light so you can see the danger clearly.` },
    { s: 'MICHAEL', t: `Episode 6! The iris muscles — the radial muscles contract and the pupil gets wider.` },
    { s: 'TYLA', t: `[warmly] Perfect callback. Then the skin and the digestive system — blood supply to these "less vital" organs is decreased. The lungs — breathing rate increases. And all the body cells — metabolic rate increases.` },
    { s: 'MICHAEL', t: `Wait, why would you reduce blood to the gut? Isn't digestion important?` },
    { s: 'TYLA', t: `[patiently] It's important long-term, but not in an emergency. If the arteries to the gut narrow, more blood can be redirected to the skeletal muscles and the heart. That blood carries extra oxygen and glucose, so the muscles can respire faster, release more energy, and you can run or fight.` },
    { s: 'MICHAEL', t: `So digesting your lunch can wait — escaping the taxi can't.` },
    { s: 'TYLA', t: `[laughs] Exactly that. And that reasoning is a classic four-mark exam question: "explain the importance of the narrowing of the arteries to the gut under emergency conditions."` },
    { s: 'MICHAEL', t: `Okay — heart faster, liver releases glucose, muscles get more blood, pupils dilate, less blood to skin and gut, breathing faster, metabolism up.` },
    { s: 'TYLA', t: `That's the full list.` },

    // Part 8
    { s: 'MICHAEL', t: `You said the adrenals make aldosterone too. What does that one do?` },
    { s: 'TYLA', t: `Aldosterone targets the kidneys, and it regulates the salt concentration of the blood — specifically sodium ions and potassium ions. And here's the important link: it works together with ADH. ADH looks after water, aldosterone looks after salt, and between the two of them, the blood stays at the right concentration.` },
    { s: 'MICHAEL', t: `So ADH and aldosterone are teammates, not opposites.` },
    { s: 'TYLA', t: `Exactly — and that also affects blood pressure and the overall fluid balance in the body. We'll walk through the full salt loop in Part 13.` },
    { s: 'MICHAEL', t: `Is there anything else the adrenals make that we should know?` },
    { s: 'TYLA', t: `One more worth recognising: cortisol. It helps the body cope with stress — it influences how glucose is used, and it also helps reduce inflammation.` },
    { s: 'MICHAEL', t: `Cortisol — combats stress. That rhymes nicely enough.` },
    { s: 'TYLA', t: `[chuckles] Use it. So, the adrenals give you three hormones to recognise: adrenalin for fight or flight, aldosterone for salt balance, and cortisol for the stress response. For the CAPS exam, adrenalin and aldosterone are the two you'll be tested on in most detail.` },

    // Part 9
    { s: 'MICHAEL', t: `Okay, the reproductive hormones. We covered these in Episode 4, but I want to make sure I've got them in the endocrine context.` },
    { s: 'TYLA', t: `Good plan. The hormones made by the reproductive glands are important for reproduction itself, and for triggering the secondary sexual characteristics at the start of puberty. In females, the ovaries are stimulated by FSH from the pituitary — remember that from Part 6 — and the ovaries then release two hormones: oestrogen and progesterone.` },
    { s: 'MICHAEL', t: `What does each one do?` },
    { s: 'TYLA', t: `Oestrogen does three things. It promotes the thickening of the endometrium, the inner lining of the uterus. It promotes the development of the female secondary sexual characteristics at puberty. And it promotes fertility.` },
    { s: 'MICHAEL', t: `And progesterone?` },
    { s: 'TYLA', t: `Progesterone picks up where oestrogen leaves off. It promotes further thickening of the endometrium and increases its blood supply — the word for that is vascularisation. And it maintains the implantation of the embryo during pregnancy.` },
    { s: 'MICHAEL', t: `So oestrogen starts building the lining, and progesterone finishes it, fills it with blood vessels, and keeps it there if there's a pregnancy.` },
    { s: 'TYLA', t: `Exactly — oestrogen builds, progesterone maintains. In males, special cells in the testes, called the cells of Leydig, secrete testosterone. Testosterone stimulates the development of the male sex organs and the male secondary sexual characteristics during puberty, and it promotes the maturation of sperm.` },
    { s: 'MICHAEL', t: `And LH is what switches the testosterone production on — Part 6.` },
    { s: 'TYLA', t: `[proudly] You're connecting everything. That's exactly how this chapter is designed to work.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 3. Homeostasis and Negative Feedback — Parts 10-11
// ═══════════════════════════════════════════════════════════════════════
{
  num: 3,
  file: '3. Homeostasis and Negative Feedback',
  segs: [
    // Part 10
    { s: 'MICHAEL', t: `[sighs] Okay, now the word I've been avoiding. Homeostasis. Give me the definition.` },
    { s: 'TYLA', t: `Homeostasis is the process of maintaining a constant internal environment within the body, even when conditions outside are changing. And the key phrase for the exam is "within narrow limits" — things aren't kept perfectly fixed, they're kept within a small, safe range.` },
    { s: 'MICHAEL', t: `And by "internal environment" — do we mean inside the cells?` },
    { s: 'TYLA', t: `Good question, and it's slightly more specific than that. The internal environment is the tissue fluid that surrounds and bathes your cells — it's also called interstitial fluid — together with the blood. Tissue fluid delivers nutrients to the cells and carries waste products away from them.` },
    { s: 'MICHAEL', t: `So the cells are like fish in a tank, and the tissue fluid is the water in the tank.` },
    { s: 'TYLA', t: `[warmly] That's a lovely way to picture it. And just like fish, cells depend completely on the conditions of the water they're in. If the tank gets too salty, too hot, or too acidic, the fish suffer. Without homeostasis, the cells suffer first, then organs, then whole systems, and eventually the whole organism.` },
    { s: 'MICHAEL', t: `Okay. So what exactly does the body keep steady?` },
    { s: 'TYLA', t: `For this chapter, six variables. Let me give you each one with the reason it matters and the effector that fixes it. First... water. Every metabolic reaction needs the right balance of water and salt in the blood and tissue fluid. The effectors are the kidneys and the skin.` },
    { s: 'MICHAEL', t: `Number two?` },
    { s: 'TYLA', t: `Salts. The dissolved salts in the blood and tissue fluid determine the osmotic pressure — that's a measure of how concentrated the solutes are, and it decides whether cells lose or gain water by osmosis. The effector is the kidneys.` },
    { s: 'MICHAEL', t: `So too salty, cells lose water. Not salty enough, they swell up.` },
    { s: 'TYLA', t: `Exactly. Third... carbon dioxide. It's made during cellular respiration, and it affects the pH of the blood and tissue fluid. Enzymes are extremely sensitive to pH changes. The effector is the lungs.` },
    { s: 'MICHAEL', t: `Fourth?` },
    { s: 'TYLA', t: `Glucose. Its concentration has to be controlled so that energy levels are maintained and metabolism can continue. The effectors are the liver and pancreas. Fifth... thyroxin. It regulates cellular metabolism, and even small changes in its level can have a severe effect on a person's metabolic rate. The effector is the thyroid gland.` },
    { s: 'MICHAEL', t: `And sixth must be temperature.` },
    { s: 'TYLA', t: `It is. Temperature. If body temperature rises too high, enzymes become denatured — they lose their shape and stop working. If it drops too low, enzyme activity slows down. Either way, metabolism suffers. The effector is the skin.` },
    { s: 'MICHAEL', t: `[slowly, putting it together] So a lot of these come back to enzymes. They only work properly in a narrow range of temperature and pH.` },
    { s: 'TYLA', t: `That's the thread tying the whole chapter together. Enzymes are proteins that speed up the body's chemical reactions, and they're fussy — they only work efficiently within a narrow range of conditions. Homeostasis is largely about keeping the enzymes happy.` },

    // Part 11
    { s: 'MICHAEL', t: `So how does the body actually keep all six of those steady?` },
    { s: 'TYLA', t: `Mostly through one mechanism: negative feedback. Here's the general sequence, step by step. Step one... an imbalance is detected by a receptor. Step two... a control centre is stimulated. Step three... the control centre responds. Step four... a message is sent to the target organ — the effector. Step five... the effector responds. Step six... that response opposes, or reverses, the imbalance. And step seven... balance is restored.` },
    { s: 'MICHAEL', t: `That's a loop. Picture a circle — imbalance, receptor, control centre, effector, back to balance.` },
    { s: 'TYLA', t: `Exactly. Picture a seesaw in the middle labelled "homeostasis," and around it a circle of arrows going from receptor to control centre to effector and back. When the seesaw tips, the loop kicks in and pushes it level again.` },
    { s: 'MICHAEL', t: `Can you give me an everyday version?` },
    { s: 'TYLA', t: `Think of a toilet cistern. When you flush, the water level drops. A float — that's the receptor — sinks down. It opens a valve — the control centre responds — and water flows in. As the water rises, the float rises with it, and when it reaches the right level, the valve shuts off. The response — filling — switched itself off once the level was restored.` },
    { s: 'MICHAEL', t: `[happy gasp] Ohh. So the response always works against the change. Level drops, the system raises it. Level rises, the system lowers it.` },
    { s: 'TYLA', t: `[emphatically] That's exactly why it's called "negative" — the response cancels out, or negates, the change. Which brings me to a trap: "negative" does not mean "bad." Negative feedback is a good thing. It's what keeps you stable.` },
    { s: 'MICHAEL', t: `And is there such a thing as positive feedback?` },
    { s: 'TYLA', t: `There is, though it's much less common. Positive feedback amplifies a change instead of reversing it — it pushes things further in the same direction, for events that need a fast, decisive outcome. The standard example is childbirth: a hormone called oxytocin strengthens contractions, which triggers more oxytocin, which strengthens contractions further, until the baby is born.` },
    { s: 'MICHAEL', t: `So negative feedback calms things down, positive feedback revs things up until the job's done.` },
    { s: 'TYLA', t: `Perfect contrast. For this chapter, though, every loop you'll study is negative feedback. The textbook also describes negative feedback as an interaction between two hormones, where the first hormone stimulates an increase in a second hormone, and that second hormone then inhibits the first, restoring balance. You'll see that exact pattern in the thyroxin loop.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 4. Homeostatic Control Loops — Parts 12-16
// ═══════════════════════════════════════════════════════════════════════
{
  num: 4,
  file: '4. Homeostatic Control Loops',
  segs: [
    // Part 12
    { s: 'MICHAEL', t: `Okay, first real loop. Water.` },
    { s: 'TYLA', t: `The control of water and salt levels in the blood and tissue fluid is called osmoregulation. Let's start with water — and I'll walk you through both directions, because exams ask for either. Scenario A: you go on a long hike on a hot day, you sweat buckets, and you only brought one small bottle of water.` },
    { s: 'MICHAEL', t: `So I'm getting dehydrated.` },
    { s: 'TYLA', t: `Exactly. Dehydration is when water levels in the blood and tissue fluid are low. It can be caused by excessive exercise, hot temperatures, increased sweating, or not drinking enough. Now, the loop. Step one... the low water level is detected by special receptor cells called osmoreceptors in the hypothalamus.` },
    { s: 'MICHAEL', t: `Osmo-receptors — receptors that detect osmotic pressure. So they notice the blood is getting too concentrated.` },
    { s: 'TYLA', t: `Exactly. Step two... impulses are sent to the pituitary gland, and more ADH is released. Step three... ADH travels in the blood to the effector organ — the kidney. Step four... ADH makes the walls of the collecting ducts and the distal convoluted tubules more permeable to water.` },
    { s: 'MICHAEL', t: `Hold on — the collecting ducts and distal convoluted tubules are parts of the nephron, right? The kidney tubules.` },
    { s: 'TYLA', t: `Right — picture the nephron as a long, looping tube. Near the end of that tube are the distal convoluted tubule and then the collecting duct, which carries urine away. Normally their walls only let a certain amount of water pass back into the blood. ADH opens them up.` },
    { s: 'MICHAEL', t: `So with more permeable walls, more water leaks back into the blood instead of leaving as urine.` },
    { s: 'TYLA', t: `Exactly. Step five... more water is reabsorbed into the blood. Step six... the blood becomes more dilute, and a small volume of concentrated urine is excreted.` },
    { s: 'MICHAEL', t: `[laughs] That's why your pee is dark yellow when you haven't been drinking enough.` },
    { s: 'TYLA', t: `[chuckles] Exactly — real-life evidence of ADH at work. And then the water level returns to normal. Homeostasis achieved.` },
    { s: 'MICHAEL', t: `And scenario B is the opposite?` },
    { s: 'TYLA', t: `Scenario B: you're sitting in a cool classroom all morning, not moving much, not sweating, and you've finished three big bottles of water.` },
    { s: 'MICHAEL', t: `Overhydrated.` },
    { s: 'TYLA', t: `Exactly. Overhydration — water levels in the blood and tissue fluid are too high. It's caused by cool temperatures, little exercise with no sweating, and drinking a lot of water. The osmoreceptors in the hypothalamus detect it. Impulses go to the pituitary, and less ADH is released. The collecting ducts and distal convoluted tubules become less permeable. Less water is reabsorbed, more water is lost, and a large volume of dilute urine is excreted.` },
    { s: 'MICHAEL', t: `Pale, lots of it, and frequent trips to the bathroom.` },
    { s: 'TYLA', t: `[seriously] Exactly. Water levels return to normal. Notice the trap: ADH is always present in small amounts — the body changes how much. So the correct wording is "more ADH" or "less ADH."` },

    // Part 13
    { s: 'MICHAEL', t: `And salt is controlled by aldosterone, from Part 8.` },
    { s: 'TYLA', t: `Exactly. The osmotic pressure of the blood depends on its solutes, mainly glucose and salts. The salts we focus on are sodium ions and potassium ions, and they're regulated by negative feedback. Scenario A: low salt. Say you've been sweating heavily for hours in the heat — sweat carries salt out of your body.` },
    { s: 'MICHAEL', t: `So salt levels in the blood drop.` },
    { s: 'TYLA', t: `Right. Step one... receptor cells in the kidney detect the decreased sodium ion levels. Step two... the adrenal gland, sitting on top of the kidney, secretes aldosterone. Step three... aldosterone stimulates the reabsorption of sodium ions from the filtrate in the kidney tubules back into the blood. Step four... less sodium is excreted in the urine. And the salt level rises back to normal.` },
    { s: 'MICHAEL', t: `And scenario B — high salt. Let's say I've just eaten a huge pile of salty slap chips.` },
    { s: 'TYLA', t: `[laughs] Perfect example. Receptor cells in the kidney detect the increased sodium ions. The adrenal gland stops releasing aldosterone, or releases less. Sodium ions are not reabsorbed. More sodium is excreted in the urine. The salt level drops back to normal.` },
    { s: 'MICHAEL', t: `[hesitantly] Hang on. For water, the receptors were in the hypothalamus. For salt, they're in the kidney?` },
    { s: 'TYLA', t: `[impressed] Great catch — that's exactly the kind of detail exams test. For water: osmoreceptors in the hypothalamus, hormone ADH. For salt: receptor cells in the kidney, hormone aldosterone from the adrenal glands.` },
    { s: 'MICHAEL', t: `So different detectors, different hormones, but the same effector — the kidney.` },
    { s: 'TYLA', t: `Beautifully summarised.` },

    // Part 14
    { s: 'MICHAEL', t: `Next is carbon dioxide. Why does the body care so much about it?` },
    { s: 'TYLA', t: `Carbon dioxide is one of the end products of cellular respiration. When it dissolves in water — and blood is mostly water — it forms carbonic acid. So the more carbon dioxide there is in the blood, the more acidic the blood becomes, and the lower its pH drops.` },
    { s: 'MICHAEL', t: `And acid messes with enzymes.` },
    { s: 'TYLA', t: `Exactly — changes in pH affect enzyme activity. When the blood becomes too acidic because of high carbon dioxide, the condition is called acidosis. So, scenario: you're late and you sprint up four flights of stairs to get to class.` },
    { s: 'MICHAEL', t: `[playfully, out of breath] My muscles are respiring like crazy, so they're pumping out carbon dioxide.` },
    { s: 'TYLA', t: `Exactly. Here's the loop — and this one isn't hormone-controlled; it's run by the nervous system. Step one, the stimulus... increased carbon dioxide in the blood, which lowers the pH, along with a drop in oxygen. Step two, the receptors... chemoreceptors in the carotid artery — the big artery in your neck — detect the drop in pH.` },
    { s: 'MICHAEL', t: `Chemoreceptors — chemical detectors. Got it.` },
    { s: 'TYLA', t: `Step three, the control centre... impulses are sent to the medulla oblongata in the brain.` },
    { s: 'MICHAEL', t: `The medulla oblongata — Episode 6. It controls breathing and heart rate. That's why it's the control centre here.` },
    { s: 'TYLA', t: `[warmly] Exactly. Step four, the effectors... the breathing muscles — the diaphragm and the intercostal muscles between the ribs — contract more, increasing both the rate and the depth of breathing. The heart muscle is also targeted, so heart rate increases. Step five... more carbon dioxide is carried to the lungs and breathed out. Step six... the carbon dioxide level falls, the pH returns to normal, and homeostasis is maintained.` },
    { s: 'MICHAEL', t: `So that's why you're gasping at the top of the stairs. It's not just about getting oxygen in — it's about getting carbon dioxide out.` },
    { s: 'TYLA', t: `That's the insight a lot of students miss.` },

    // Part 15
    { s: 'MICHAEL', t: `Okay, the accelerator and the brake. Insulin and glucagon.` },
    { s: 'TYLA', t: `[laughs] You remembered. First, why glucose matters. Carbohydrates are short-term energy stores, and during cellular respiration, glucose is broken down to release energy, which is stored in ATP. So the body needs a steady supply of glucose in the blood — not too much, not too little. The gland in charge is the pancreas — specifically the Islets of Langerhans from Part 2 — and its two hormones, insulin and glucagon, work antagonistically.` },
    { s: 'MICHAEL', t: `Opposite directions. Okay, scenario A.` },
    { s: 'TYLA', t: `Scenario A: it's Sunday lunch, and you've just had a big plate of rice, a sweet dessert, and two glasses of fizzy cooldrink.` },
    { s: 'MICHAEL', t: `[laughs] So my blood glucose shoots up.` },
    { s: 'TYLA', t: `Exactly. Step one... the increased blood glucose is detected by the Islets of Langerhans in the pancreas. Step two... they respond by secreting insulin into the bloodstream. Step three... insulin travels to the effector organ, the liver. Step four... enzymes in the liver convert the excess glucose into glycogen. Glycogen is a storage carbohydrate — picture it as glucose packed away in the pantry for later. Insulin also stimulates body cells to take up glucose from the blood. Step five... blood glucose returns to normal.` },
    { s: 'MICHAEL', t: `So insulin lowers blood glucose two ways — the liver stores it as glycogen, and the cells absorb it.` },
    { s: 'TYLA', t: `Exactly. Scenario B: the next morning you skip breakfast and go straight to a two-hour soccer practice.` },
    { s: 'MICHAEL', t: `Now my blood glucose drops.` },
    { s: 'TYLA', t: `Right. Step one... the decreased blood glucose is detected by the Islets of Langerhans. Step two... glucagon is secreted into the bloodstream. Step three... glucagon travels to the effector organ — again, the liver. Step four... the stored glycogen is broken down into glucose, and that glucose is released into the blood. Step five... blood glucose rises back to normal.` },
    { s: 'MICHAEL', t: `So the liver is the effector both times — it's the pantry. Insulin says "pack it away," glucagon says "take it back out."` },
    { s: 'TYLA', t: `[dramatically] That's a perfect way to hold it. Now, the most dangerous trap in this whole chapter. Listen carefully to three words: glucose, glycogen and glucagon.` },
    { s: 'MICHAEL', t: `[groans] Ugh. They all sound the same.` },
    { s: 'TYLA', t: `They do, which is exactly why students lose marks. Glucose is the sugar in your blood — the fuel. Glycogen is the stored form of glucose, kept in the liver and muscles. Glucagon is the hormone that triggers glycogen to be broken down back into glucose.` },
    { s: 'MICHAEL', t: `[excitedly] Glucose — fuel. Glycogen — stored fuel. Glucagon — the hormone that unlocks the store. Glucagon even sounds like "glucose is gone," so you need more.` },
    { s: 'TYLA', t: `[delighted] Oh, I like that. [whispers] "Glucose gone — call glucagon."` },

    // Part 16
    { s: 'MICHAEL', t: `Last loop. Thyroxin.` },
    { s: 'TYLA', t: `First, a term: the basal metabolic rate, or BMR, is the rate at which your cells use energy when you're completely at rest — just keeping the basic vital functions going. Thyroxin, made by the thyroid gland, does four main things. It stimulates the body to increase the metabolic rate when needed. It plays a vital role in the functioning of the heart and the digestive system. It's important for skeletal and brain development. And it helps maintain muscle tone.` },
    { s: 'MICHAEL', t: `So it's like the dial that sets how fast your body's engine runs.` },
    { s: 'TYLA', t: `Exactly. And to make thyroxin, the thyroid needs iodine. A good everyday source is iodised table salt or sea salt.` },
    { s: 'MICHAEL', t: `That's why salt packets say "iodised."` },
    { s: 'TYLA', t: `Exactly. Now, two glands control thyroxin levels. The pituitary gland releases TSH, and the thyroid gland releases thyroxin. Scenario A: thyroxin levels drop below normal. Let me give you the full seven steps, exactly as the textbook frames them. Step one... the thyroxin level in the blood decreases. Step two... the pituitary is stimulated. Step three... the pituitary gland increases its secretion of TSH. Step four... TSH is transported by the blood to the thyroid gland. Step five... TSH stimulates the thyroid to increase its secretion of thyroxin. Step six... the thyroxin level in the blood increases. Step seven... thyroxin levels return to normal.` },
    { s: 'MICHAEL', t: `And scenario B, thyroxin too high?` },
    { s: 'TYLA', t: `The high thyroxin level is detected and the pituitary gland is inhibited. Less TSH is secreted. With less TSH reaching it, the thyroid releases less thyroxin. The thyroxin level drops back to normal.` },
    { s: 'MICHAEL', t: `[excited] Wait, this is the two-hormone thing from Part 11. TSH pushes thyroxin up, and then thyroxin pushes TSH down.` },
    { s: 'TYLA', t: `[delighted] Yes! That's the textbook's definition of negative feedback in action — one hormone stimulates an increase in a second, and the second hormone inhibits the first. Picture it as a circle with two boxes — pituitary at the top, thyroid at the bottom. TSH flows down from the pituitary to the thyroid, thyroxin flows back up and tells the pituitary to ease off.` },
    { s: 'MICHAEL', t: `[playfully] Like a parent telling a kid to clean their room. The parent nags — that's TSH. The kid cleans — that's thyroxin. Once the room's clean, the parent stops nagging.` },
    { s: 'TYLA', t: `[laughs] That's exactly it. And notice the hypothalamus sits above the pituitary in this chain — the hypothalamus and pituitary together control normal thyroid secretion.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 5. Endocrine Disorders — Parts 17-19
// ═══════════════════════════════════════════════════════════════════════
{
  num: 5,
  file: '5. Endocrine Disorders',
  segs: [
    // Part 17
    { s: 'MICHAEL', t: `Okay, now the "things breaking" part.` },
    { s: 'TYLA', t: `Sometimes hormone secretion gets disrupted, and that affects homeostasis. A gland can secrete too little hormone — that's called hyposecretion — or too much — hypersecretion. If it continues, the person is diagnosed with an endocrine disorder.` },
    { s: 'MICHAEL', t: `Hypo — low, under. Hyper — high, over. Like hypothermia and hyperactive.` },
    { s: 'TYLA', t: `Exactly. Let's start with growth hormone from the pituitary. There are three disorders, and the trick is to sort them by two things — too much or too little, and when it happens. First — dwarfism. That's hyposecretion of growth hormone during childhood. The person is well-proportioned but of short stature, with slowed growth and delayed puberty.` },
    { s: 'MICHAEL', t: `Too little, as a child — short. Makes sense.` },
    { s: 'TYLA', t: `Second — gigantism. That's hypersecretion of growth hormone during childhood. The long bones and connective tissue grow very fast, and the person can grow to between two point one and two point five metres tall. The heart and other organs also enlarge, which causes high blood pressure.` },
    { s: 'MICHAEL', t: `Too much, as a child — very tall, because the long bones can still lengthen.` },
    { s: 'TYLA', t: `Exactly — the growth plates in the long bones are still open in childhood. Third — acromegaly. That's hypersecretion of growth hormone after puberty, in adulthood. By then the long bones can't lengthen anymore, so instead the hands and feet enlarge, along with the forehead, jaw and nose.` },
    { s: 'MICHAEL', t: `So same hormone, same "too much," but the timing changes everything. Kid — gets tall. Adult — hands, feet and face get bigger.` },
    { s: 'TYLA', t: `Perfect. That timing distinction is the whole exam question.` },

    // Part 18
    { s: 'MICHAEL', t: `And the thyroid can go wrong too.` },
    { s: 'TYLA', t: `It can. Continued production of too much thyroxin is hyperthyroidism. Continued low levels of thyroxin is hypothyroidism. Under hyperthyroidism, the first example is Graves' disease. It's an autoimmune disease — the body's immune system attacks the thyroid and causes it to overproduce thyroxin. The symptoms are bulging eyes, weight loss and a fast metabolism.` },
    { s: 'MICHAEL', t: `Fast metabolism makes sense — too much of the metabolism dial. Burning through energy, losing weight.` },
    { s: 'TYLA', t: `Exactly. The second condition is goitre — a swelling of the thyroid gland that shows as a visible lump at the front of the neck. Your textbook lists it alongside elevated thyroid activity, with symptoms like an increased metabolic rate, increased heart and circulatory activity, increased anxiety and a swollen thyroid. But the most common cause tested in exams is iodine deficiency — and that one links right back to Part 16.` },
    { s: 'MICHAEL', t: `[excitedly] Oh wait — if there's no iodine, the thyroid can't make thyroxin. So thyroxin stays low... and the pituitary keeps pumping out TSH...` },
    { s: 'TYLA', t: `[encouragingly] Keep going.` },
    { s: 'MICHAEL', t: `[faster, piecing it together] ...and TSH stimulates the thyroid to grow. Part 6 — TSH stimulates growth of the thyroid gland. So the thyroid keeps getting bigger and bigger, trying to make thyroxin it doesn't have the ingredients for.` },
    { s: 'TYLA', t: `[amazed] That is a genuinely excellent explanation — you just used the negative feedback loop to explain a disorder. That's a higher-order answer examiners love.` },
    { s: 'MICHAEL', t: `And hypothyroidism?` },
    { s: 'TYLA', t: `Two examples. Cretinism is caused by a lack of thyroxin from birth, and it leads to stunted physical and mental development — remember, thyroxin is important for skeletal and brain development. Myxoedema is caused by an underactive thyroid in adulthood. Symptoms are mental and physical tiredness, a low metabolic rate, an increase in fat under the skin, and roughened skin.` },
    { s: 'MICHAEL', t: `So cretinism — from birth. Myxoedema — in adults. Again, timing matters.` },
    { s: 'TYLA', t: `Same pattern as the growth hormone disorders.` },

    // Part 19
    { s: 'MICHAEL', t: `And diabetes is the pancreas disorder.` },
    { s: 'TYLA', t: `[gently] Exactly. When someone has continuously high blood glucose, they're described as hyperglycaemic. Diabetes mellitus is the disease where blood glucose regulation fails, so blood glucose stays chronically high. For reference, a healthy, non-diabetic person's blood glucose sits roughly between eighty and one hundred milligrams per hundred millilitres of blood.` },
    { s: 'MICHAEL', t: `And there are two types, right?` },
    { s: 'TYLA', t: `Two types, and you need to know the difference. Type 1 diabetes — the pancreas does not produce insulin. It's an autoimmune condition: the immune system destroys the insulin-producing cells, called beta cells, in the Islets of Langerhans. It usually starts in childhood or adolescence. Picture it: the pancreas can't secrete insulin, glucose builds up in the blood, and the body cells can't absorb it because there's no insulin to help them.` },
    { s: 'MICHAEL', t: `[softly] So the cells are starving while the blood is overflowing with sugar.` },
    { s: 'TYLA', t: `That's exactly the irony of it. Type 1 diabetics are treated with insulin injections, or with insulin pumps attached directly to the body, which are very effective at controlling glucose levels.` },
    { s: 'MICHAEL', t: `And Type 2?` },
    { s: 'TYLA', t: `In Type 2 diabetes, insulin is available, but the body can't control glucose properly. Either the pancreas secretes less insulin, or the body cells become resistant to insulin — they stop responding to it. It's often linked to lifestyle and genetics, and it usually develops in adulthood, although it's becoming more common in younger people. In most cases, Type 2 diabetics can control their sugar levels by watching their diet, losing excess weight and exercising, sometimes with oral medication, and sometimes insulin later on.` },
    { s: 'MICHAEL', t: `So Type 1 — no insulin, autoimmune, young, injections. Type 2 — insulin is there but not enough or not working, lifestyle-linked, usually adults, diet and exercise.` },
    { s: 'TYLA', t: `[impressed] That's the comparison table, spoken. And the long-term effects: diabetes damages blood vessels throughout the body, which leads to circulatory problems and damage to many organs. Wounds on the skin don't heal well. And the eyes are affected, leading to poor vision and eventually blindness.` },
    { s: 'MICHAEL', t: `[seriously] That's serious. It shows why that glucose loop matters so much.` },
    { s: 'TYLA', t: `It does — and it's why homeostasis is essential for health. When a loop fails, you get conditions like diabetes and goitre.` },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 6. Thermoregulation and Outro — Parts 20-21 + Outro
// ═══════════════════════════════════════════════════════════════════════
{
  num: 6,
  file: '6. Thermoregulation and Outro',
  segs: [
    // Part 20
    { s: 'MICHAEL', t: `Last topic. Temperature.` },
    { s: 'TYLA', t: `We humans are endothermic — we generate heat internally through metabolism to keep a constant body temperature, no matter how hot or cold it is outside. Birds and mammals are endotherms. Our core body temperature is kept close to thirty-seven degrees Celsius — your textbook gives the more precise figure of about thirty-six point eight degrees.` },
    { s: 'MICHAEL', t: `[doubtfully] Why does it matter so much? A degree here or there?` },
    { s: 'TYLA', t: `[seriously] A degree or two matters a lot. If body temperature drops below about thirty-six degrees, metabolic processes slow down. If it rises above a safe level of about thirty-seven point five degrees, enzymes start to become denatured and many body functions shut down. The way the body controls its core temperature is called thermoregulation.` },
    { s: 'MICHAEL', t: `And the skin is the effector, from Part 10.` },
    { s: 'TYLA', t: `Exactly. The skin is the largest organ in the body, and it's well adapted for this job. Picture a slice through skin — a thin outer layer, the epidermis, with sweat pores opening at the surface, and a thicker layer below, the dermis, containing blood vessels, coiled sweat glands and receptors. The skin contains thermoreceptors — some respond to heat, called Ruffini's corpuscles, and others respond to cold, called Krause's end bulbs.` },
    { s: 'MICHAEL', t: `Ruffini for hot, Krause for cold. Episode 6 vibes — these are just more receptors.` },
    { s: 'TYLA', t: `Exactly. Now, the body loses heat in four ways, and you need all four. Evaporation — heat is lost when sweat turns into water vapour on the skin's surface. Radiation — heat transfers between two objects that are not touching. Conduction — heat transfers between objects that are touching. And convection — as warm air rises, it's replaced by cooler air, carrying heat away.` },
    { s: 'MICHAEL', t: `Let me picture them. Sweat drying off me — evaporation. Heat glowing off me into the room — radiation. Sitting on a cold concrete step and feeling the heat leave through my legs — conduction. A breeze sweeping warm air off my skin — convection.` },
    { s: 'TYLA', t: `[delighted] Those are great examples, and they're all your own.` },

    // Part 21
    { s: 'MICHAEL', t: `So how does the body actually respond when it's too hot or too cold?` },
    { s: 'TYLA', t: `The thermoreceptors send messages to the temperature-regulating centre in the hypothalamus — that's our control centre, which we flagged back in Part 5. There are two kinds of response. Conscious responses are behavioural and voluntary — like fanning yourself or putting on a jersey. Subconscious responses are physiological and involuntary — like sweating or shivering.` },
    { s: 'MICHAEL', t: `Conscious equals behavioural equals voluntary. Subconscious equals physiological equals involuntary.` },
    { s: 'TYLA', t: `Exactly. Now — scenario: it's December and you're stuck in a packed taxi in the midday heat. Step one... your body temperature increases. Step two... the warmed blood passes through the hypothalamus. Step three... impulses are sent to the blood vessels in the skin and to the sweat glands. Step four... vasodilation — the blood vessels near the surface of the skin widen, and more blood flows close to the skin.` },
    { s: 'MICHAEL', t: `So more warm blood near the surface means more heat can escape.` },
    { s: 'TYLA', t: `Exactly — more heat is lost to the outside air by radiation and conduction. Step five... the sweat glands are activated and you sweat. The sweat evaporates, which has a cooling effect on the skin. Step six... the body cools down. And as an extension: the basal metabolic rate also slows down slightly, so less body heat is produced.` },
    { s: 'MICHAEL', t: `[chuckles] That's why people look flushed and red when they're hot — all that blood near the surface.` },
    { s: 'TYLA', t: `Exactly. Now the opposite: it's a freezing winter morning and you're standing outside waiting for a lift to school. Step one... your body temperature decreases. Step two... slightly colder blood passes through the hypothalamus. Step three... impulses go to the skin's blood vessels and sweat glands. Step four... vasoconstriction — the blood vessels near the skin's surface narrow, and less blood flows near the surface, so less heat is lost.` },
    { s: 'MICHAEL', t: `And no sweating, obviously.` },
    { s: 'TYLA', t: `Right — the sweat glands are inactive, so there's no sweat and no evaporation. Heat isn't lost as easily, and the body warms up. As an extension: the adrenal and thyroid glands release adrenalin and thyroxin, which both increase metabolic rate, so more body heat is produced. And the hypothalamus stimulates the skeletal muscles to contract rapidly — that's shivering, which produces heat.` },
    { s: 'MICHAEL', t: `Oh, that ties it all together — thyroxin from Part 16 and adrenalin from Part 7 both show up in thermoregulation.` },
    { s: 'TYLA', t: `[warmly] That's exactly the kind of link that earns the higher-order marks. Now — a trap. Blood vessels in the skin dilate and constrict. They don't move up and down through the skin. Don't write "the blood vessels move closer to the surface." Write "more blood flows near the surface because of vasodilation."` },
    { s: 'MICHAEL', t: `Noted. Vessels widen or narrow — they don't travel.` },

    // Outro
    { s: 'TYLA', t: `[excited] Okay, Michael — same tradition as always. Give me the whole chapter, start to finish, in one go.` },
    { s: 'MICHAEL', t: `[laughs] Okay, deep breath. The body coordinates itself with two systems — the nervous system, fast and electrical, and the endocrine system, which uses hormones carried in the blood, slower but longer-lasting. Exocrine glands have ducts, like sweat and salivary glands. Endocrine glands are ductless and release hormones straight into the blood. The pancreas is both — enzymes through a duct, insulin and glucagon from the Islets of Langerhans into the blood. Hormones are organic chemical messengers, mostly proteins, needed in small amounts, and some work antagonistically. The hypothalamus links the nervous and endocrine systems and makes ADH, which makes the kidneys reabsorb more water. The pituitary is the master gland, with an anterior and posterior lobe, and makes TSH for the thyroid, FSH for follicles and sperm, LH for ovulation and testosterone, prolactin for milk, and growth hormone for long bones and muscles. The thyroid makes thyroxin. The adrenals sit on the kidneys and make adrenalin for fight or flight — faster heart, glucose from the liver, more blood to muscles, dilated pupils, less blood to the gut and skin — plus aldosterone for salt and cortisol for stress. The ovaries make oestrogen and progesterone, and the testes make testosterone.` },
    { s: 'TYLA', t: `[excitedly] Keep going — you're flying.` },
    { s: 'MICHAEL', t: `Homeostasis is keeping the internal environment — the blood and tissue fluid — constant within narrow limits, mostly so enzymes keep working. It runs on negative feedback: a receptor detects an imbalance, a control centre responds, an effector reverses it, and balance is restored. For water, osmoreceptors in the hypothalamus trigger more ADH when you're dehydrated, the collecting ducts and distal tubules get more permeable, more water is reabsorbed, and you make concentrated urine — and the opposite when you're overhydrated. For salt, receptors in the kidney trigger aldosterone, more sodium is reabsorbed, and less is lost in urine. For carbon dioxide, chemoreceptors in the carotid artery detect the low pH, the medulla oblongata speeds up breathing and heart rate, and the extra carbon dioxide is breathed out. For glucose, high levels trigger insulin, so the liver stores glucose as glycogen; low levels trigger glucagon, so the liver breaks glycogen back into glucose. For thyroxin, low levels mean the pituitary makes more TSH so the thyroid makes more thyroxin, and high levels inhibit TSH.` },
    { s: 'TYLA', t: `[eagerly] And the disorders and temperature?` },
    { s: 'MICHAEL', t: `Too little growth hormone in childhood is dwarfism, too much in childhood is gigantism, and too much after puberty is acromegaly. Too much thyroxin is hyperthyroidism, like Graves' disease, and goitre is a swollen thyroid, classically from iodine deficiency. Too little thyroxin is cretinism from birth or myxoedema in adults. Diabetes is chronically high blood glucose — Type 1 is no insulin and needs injections, Type 2 is too little insulin or insulin resistance and is managed with diet and exercise. And finally, thermoregulation — we're endotherms at about thirty-seven degrees, the hypothalamus is the control centre, and when it's hot we get vasodilation and sweating, and when it's cold we get vasoconstriction, no sweating, shivering, and more adrenalin and thyroxin to raise metabolism.` },
    { s: 'TYLA', t: `[impressed] ...Michael. That was the whole chapter. Every loop, every gland, every disorder, in order.` },
    { s: 'MICHAEL', t: `[laughs] I think my hypothalamus is overheating.` },
    { s: 'TYLA', t: `[laughs] Then you'd better vasodilate. Honestly, though — that's exactly the kind of recall that wins marks. If you can tell the story of each loop the way Michael just did, you've got this chapter.` },
    { s: 'MICHAEL', t: `[softly] Detect, respond, restore.` },
    { s: 'TYLA', t: `[warmly] Detect, respond, restore — that's homeostasis in three words. We'll catch you in the next episode.` },
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

  console.log(`Life, Decoded — Episode 7: Endocrine System and Homeostasis (${PRIMARY_MODEL}) — running ${sectionsToRun.length} of ${SECTIONS.length} file(s)\n`);

  for (const sec of sectionsToRun) {
    console.log(`\n▶ ${sec.file}`);
    await generateSection(sec, ffmpegAvailable, silenceShort);
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final files.`);
}

main().catch(e => { console.error(e); process.exit(1); });

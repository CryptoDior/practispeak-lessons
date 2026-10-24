/**
 * Life, Decoded — Exam Walkthrough: Life Sciences Paper 1, November 2025 — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-exam-paper1-nov2025-audio.mjs 1 2 3
 *
 * Three output MP3s (each opens with Amelia announcing the title):
 *   1. Section A                  — Intro + Parts 1-6
 *   2. Question 2                 — Parts 7-11
 *   3. Question 3 and Wrap-Up     — Parts 12-16 + Outro
 *
 * Rebuild a file (only missing or text-edited lines are regenerated), or force specific lines:
 *   ... <n>            e.g. 2
 *   ... <n>:2,-2       e.g. 2:2,-2  (line numbers; 1 = Amelia's title; -1 = last line)
 *   ... <n> --fresh    wipe and re-record the whole file
 * If a finished file is missing saved clips, the script stops instead of re-billing them (add --go to override).
 *
 * Voices: exactly the same IDs as The Business Brief podcasts —
 *   TYLA uses the Naledi voice, MICHAEL the Mike voice, AMELIA the narration voice.
 *
 * ElevenLabs account: uses ELEVENLABS_API_KEY_1 by default (set ELEVENLABS_ACCOUNT=2 for the second key).
 * Model: Eleven v4 (eleven_v4), falling back to Eleven v3 (eleven_v3) if v4 fails.
 * Exam-tip callouts, on-screen cues, music cues and the Quick-Reference Recap are NOT included (show notes only).
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import crypto from 'crypto';

const ELEVENLABS_KEY =
  process.env['ELEVENLABS_API_KEY_' + (process.env.ELEVENLABS_ACCOUNT || '1')] || process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_1 to .env.local and run with: node --env-file=.env.local scripts/generate-life-decoded-exam-paper1-nov2025-audio.mjs');
  process.exit(1);
}

const VOICES = {
  TYLA: 'ZF6FPAbjXT4488VcRRnw',    // same voice ID as Naledi in The Business Brief
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
  AMELIA: 'IKne3meq5aSn9XLyUdCD',  // narration — announces each episode title (same as earlier Business Brief series)
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'Life-Decoded-Exam-Walkthrough-Paper-1');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'life-decoded-exam-paper1-nov2025');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'Paper 1 Nov 2025 - Part 1 - Section A',
  segs: [
    { s: 'AMELIA', t: `Exam Walkthrough, Life Sciences Paper 1, November 2025. Part 1: Section A` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to LIFE, DECODED — and welcome to something new. We've finished all ten chapters. Now it's time to put it all to the test. Today, we're working through a real exam: the National Senior Certificate Life Sciences Paper 1, November 2025.` },
    { s: 'MICHAEL', t: `[nervous laugh] So I'm the one writing the exam. Live. On air.` },
    { s: 'TYLA', t: `[laughs] You are. Here's how it works. I read each question, including how many marks it's worth. Michael answers the way a student would in the exam. Then I check his answer against the official marking guidelines — the memo — and tell you exactly what earns the marks, where students lose them, and what the traps are.` },
    { s: 'MICHAEL', t: `And if I fall into a trap?` },
    { s: 'TYLA', t: `[playfully] Then everyone listening learns from your mistake, so you're doing a public service. Every diagram, table and graph will be up on screen as we go. And here's a challenge: pause after each question and answer it yourself before Michael does.` },
    { s: 'MICHAEL', t: `Okay. Give me the basics first. What does this paper look like?` },
    { s: 'TYLA', t: `Paper 1 is worth one hundred and fifty marks, and you get two and a half hours. That's roughly one mark per minute, with a little time left over to check your work. It covers the Paper 1 topics: reproduction in vertebrates, human reproduction, the nervous system, the eye and ear, the endocrine system and homeostasis, and plant responses. Section A is worth fifty marks — short questions. Section B has two big questions, each worth fifty marks.` },
    { s: 'MICHAEL', t: `One mark per minute. That's a useful way to pace myself.` },
    { s: 'TYLA', t: `[seriously] It's the best pacing rule there is. And before we start, five rules from the marking guidelines that cost students marks every single year. One... if a question asks for three answers and you give five, the marker marks only the first three. So don't throw down a list hoping one is right. Two... if a question says tabulate and you write a paragraph, you lose marks. Three... if the question asks for the letter and you give only the name, or the other way round, you get nothing. Four... units are marked separately. Leave out "millimetres" or "milligrams," and you lose that mark. And five... every graph or table you draw needs a caption.` },
    { s: 'MICHAEL', t: `Got it. First answers count, tabulate means table, letter means letter, units matter, and captions on everything.` },
    { s: 'TYLA', t: `[delighted] Perfect. Let's start with Section A.` },
    { s: 'TYLA', t: `Question 1.1 is ten multiple-choice questions, two marks each — twenty marks in total. One tip before we start: cover the options with your hand, work out the answer first, then look at the options. That stops tricky options from pulling you off track. Question 1.1.1: "The hormone that prepares the body for an emergency is..." A, aldosterone. B, progesterone. C, adrenalin. D, prolactin.` },
    { s: 'MICHAEL', t: `[confidently] C, adrenalin. The fight-or-flight hormone.` },
    { s: 'TYLA', t: `Correct — C, two marks. Easy marks to start. Question 1.1.2: "Which ONE of the following are functions of the placenta?" A, excretion and nutrition. B, gaseous exchange and protection against mechanical injury. C, nutrition and temperature regulation. D, temperature regulation and excretion.` },
    { s: 'MICHAEL', t: `Hmm... B has gaseous exchange, and the placenta definitely does gaseous exchange. So B?` },
    { s: 'TYLA', t: `[encouragingly] Read the second half of B.` },
    { s: 'MICHAEL', t: `"Protection against mechanical injury"... [groans] oh no. That's the amniotic fluid, not the placenta.` },
    { s: 'TYLA', t: `Exactly — and that's how a multiple-choice question catches you. Each option is a pair, and both halves have to be right. B is half right, so it's wrong. The answer is A: excretion and nutrition. The placenta removes the foetus's wastes, like carbon dioxide and urea, and supplies nutrients. Options C and D include temperature regulation, which is also not a placenta function.` },
    { s: 'MICHAEL', t: `So — with paired options, check both halves.` },
    { s: 'TYLA', t: `Always. Question 1.1.3. There's a table showing the reaction times of four learners to a stimulus. Temisha, zero comma seven seconds. Luke, zero comma six. Anika, zero comma eight. And Jordy, zero comma four. "Which ONE of the following learners demonstrates the fastest response?" A, Temisha. B, Luke. C, Anika. D, Jordy.` },
    { s: 'MICHAEL', t: `Anika has the biggest number, zero comma eight... [hesitantly] wait. Reaction time. A bigger time means slower.` },
    { s: 'TYLA', t: `[laughs] Saved yourself just in time.` },
    { s: 'MICHAEL', t: `So the fastest response is the shortest time — Jordy, zero comma four seconds. D.` },
    { s: 'TYLA', t: `Correct, D. It's a simple trap, but under exam pressure students see "fastest" and pick the biggest number. Question 1.1.4: "A high level of thyroxin in the blood will stimulate the..." A, pituitary gland to secrete less TSH. B, thyroid gland to secrete more TSH. C, pituitary gland to secrete more TSH. D, thyroid gland to secrete more thyroxin.` },
    { s: 'MICHAEL', t: `Negative feedback from Episode 7. High thyroxin means the pituitary is inhibited, so less TSH. A.` },
    { s: 'TYLA', t: `[impressed] A — correct. And notice option B. It says the thyroid secretes TSH. That's wrong straight away — TSH comes from the pituitary. Cross out any option that puts a hormone in the wrong gland. Now, Questions 1.1.5 and 1.1.6 are based on the diagram of the female reproductive system, with four labels: P, Q, R and S. Take a good look at where each one points.` },
    { s: 'MICHAEL', t: `Okay. P, Q, R, S. Got them.` },
    { s: 'TYLA', t: `Question 1.1.5: "Which ONE of the following combinations is correct for a normal pregnancy?" Each option gives the site of fertilisation, then the site of implantation. A, P then S. B, S then Q. C, P then Q. D, R then P.` },
    { s: 'MICHAEL', t: `Fertilisation happens in the fallopian tube — P. Implantation happens in the wall of the uterus — Q, not the cavity, S. So C, P and Q.` },
    { s: 'TYLA', t: `Correct, C. Look how close option B is — it has implantation right, in Q, but fertilisation in S, the uterus. Fertilisation doesn't happen there. And option D puts fertilisation in the vagina and implantation in the fallopian tube — that would be an ectopic pregnancy, not a normal one. The question says "normal pregnancy" for a reason.` },
    { s: 'TYLA', t: `Question 1.1.6, same diagram: "In which part does the zygote develop into a morula?" A, S. B, Q. C, R. D, P.` },
    { s: 'MICHAEL', t: `[thoughtful] The zygote divides by mitosis while it's moving along the fallopian tube... it becomes a ball of cells, the morula... and then a blastocyst by the time it reaches the uterus. So the morula forms in the fallopian tube. P — D.` },
    { s: 'TYLA', t: `[delighted] Correct, D. Lots of students pick S, the uterus, because that's where the baby develops. But the early divisions happen on the way down the tube. Question 1.1.7. "The following is a list of male reproductive parts. One, prostate gland. Two, seminal vesicle. Three, urethra. Four, Cowper's gland. Which ONE of the following combinations is responsible for the formation of semen?" A, one and two only. B, one, two and four only. C, two and three only. D, one and four only.` },
    { s: 'MICHAEL', t: `Semen is sperm plus fluids from the glands. The glands are the prostate, the seminal vesicles and Cowper's gland. The urethra just carries it. So one, two and four — B.` },
    { s: 'TYLA', t: `Correct, B. The trap is option A — students remember two glands and forget Cowper's gland. Learn all three accessory glands. Question 1.1.8. Here's the diagram of a human sperm — look closely at what's there, and what's missing. "This sperm is NOT structurally suitable for fertilisation because of the..." A, absence of a nucleus to provide genetic material. B, absence of an acrosome to improve motility. C, presence of a long tail for the movement of the sperm. D, absence of mitochondria to provide energy.` },
    { s: 'MICHAEL', t: `The middle piece is where the mitochondria are. No mitochondria, no energy to swim. D.` },
    { s: 'TYLA', t: `Correct, D. But option B is a clever trap. This sperm really does have no acrosome — so B looks tempting. Read the reason though: "to improve motility." That's a false function. The acrosome contains enzymes that dissolve a path into the ovum; it has nothing to do with swimming. So B is wrong because the reason is wrong. In these "because of" options, the structure and the function both have to be correct. Question 1.1.9. "The following is a list of growth responses in plants. One, plants grow straight upwards. Two, no upward growth. Three, increased number of lateral branches. Four, stems bend towards unilateral light. Which ONE of the following combinations describes the growth responses that occur when apical buds of plants are removed?" A, one, two and three only. B, two and three only. C, one and four only. D, all four.` },
    { s: 'MICHAEL', t: `Episode 8! Remove the tip, remove the auxin source. So apical dominance stops, the side branches grow — that's three. And without the tip, the plant stops growing upwards — that's two. It can't grow straight up, because there's no tip, and it can't bend towards light, because the auxins for phototropism come from the tip. So two and three — B.` },
    { s: 'TYLA', t: `[impressed] Correct, B, and beautifully reasoned. Question 1.1.10: "Which ONE of the following is CORRECT for a person who exercises on a hot day without taking in any liquids?" A, increased ADH secretion and increased permeability of renal tubules. B, increased ADH secretion and the production of dilute urine. C, decreased ADH secretion and increased permeability of renal tubules. D, decreased ADH secretion and the production of concentrated urine.` },
    { s: 'MICHAEL', t: `Sweating, no drinking — they're dehydrated. So more ADH... and with more ADH, more water is reabsorbed... so the urine is... dilute? B?` },
    { s: 'TYLA', t: `[encouragingly] Slow down. If more water goes back into the blood, what's left in the urine?` },
    { s: 'MICHAEL', t: `[groans] Less water. So the urine is concentrated, not dilute. And more ADH makes the tubules more permeable. So A.` },
    { s: 'TYLA', t: `Correct, A. And look at what the examiner did: B and D each pair one correct half with one wrong half. That's the most common multiple-choice trap in Life Sciences. Ten questions done — twenty marks.` },
    { s: 'TYLA', t: `Question 1.2: give the correct biological term for each description. Eight terms, one mark each. Spelling counts only if it changes the meaning, but learn to spell them anyway. Ready for rapid fire?` },
    { s: 'MICHAEL', t: `[eagerly] Go.` },
    { s: 'TYLA', t: `1.2.1: "The ovarian hormone that is secreted by the corpus luteum."` },
    { s: 'MICHAEL', t: `Progesterone.` },
    { s: 'TYLA', t: `Correct. And note — the corpus luteum secretes oestrogen too, but the memo wants progesterone, its main hormone. 1.2.2: "The eye defect that is characterised by a cloudy lens."` },
    { s: 'MICHAEL', t: `Cataracts.` },
    { s: 'TYLA', t: `Correct. 1.2.3: "The production of ova by meiosis."` },
    { s: 'MICHAEL', t: `Oogenesis.` },
    { s: 'TYLA', t: `Correct. 1.2.4: "The part of the retina that contains no rods and cones."` },
    { s: 'MICHAEL', t: `The fovea... [hesitantly] no, wait. The fovea has lots of cones. No rods and no cones is the blind spot.` },
    { s: 'TYLA', t: `[delighted] Good correction. The fovea, or yellow spot, has the highest concentration of cones and no rods. The blind spot has neither — it's where the optic nerve leaves the eye. Students swap these every year. 1.2.5: "The release of an ovum from the ovary."` },
    { s: 'MICHAEL', t: `Ovulation.` },
    { s: 'TYLA', t: `Correct. 1.2.6: "The extra-embryonic membrane that plays a role in the formation of the placenta."` },
    { s: 'MICHAEL', t: `The amnion?` },
    { s: 'TYLA', t: `[gently] Close, but no. The amnion surrounds the embryo and holds the amniotic fluid. The membrane that grows chorionic villi into the uterus wall to help form the placenta is the...` },
    { s: 'MICHAEL', t: `The chorion. Ugh, I knew that.` },
    { s: 'TYLA', t: `Chorion — one mark. Amnion protects; chorion forms the placenta. 1.2.7: "A plant hormone responsible for seed dormancy."` },
    { s: 'MICHAEL', t: `Abscisic acid.` },
    { s: 'TYLA', t: `Correct. And 1.2.8: "The maintenance of a constant internal environment within narrow limits."` },
    { s: 'MICHAEL', t: `Homeostasis.` },
    { s: 'TYLA', t: `Correct — eight marks done.` },
    { s: 'TYLA', t: `Question 1.3. For each description in Column One, say whether it applies to A only, B only, both A and B, or none. Two marks each. And here's the big tip for this question type: test each item separately against the description, as if it were a true-or-false question. 1.3.1: "The hormone responsible for the development of secondary sexual characteristics during puberty." A, oestrogen. B, testosterone.` },
    { s: 'MICHAEL', t: `Oestrogen for females — yes. Testosterone for males — yes. Both A and B.` },
    { s: 'TYLA', t: `Correct — both. 1.3.2: "Plays a role in the pupillary mechanism." A, ciliary muscles. B, radial muscles.` },
    { s: 'MICHAEL', t: `Muscles in the eye... both of them, I think?` },
    { s: 'TYLA', t: `[encouragingly] Test each one. What do the ciliary muscles do?` },
    { s: 'MICHAEL', t: `They change the shape of the lens. That's accommodation, not the pupil. [slowly, putting it together] And the radial muscles are in the iris — they contract in dim light to dilate the pupil. So it's B only.` },
    { s: 'TYLA', t: `Correct — B only. The pupillary mechanism uses the iris muscles — circular and radial muscles. Accommodation uses the ciliary muscles. Mixing those up is one of the most common eye mistakes. 1.3.3: "A plant defence mechanism." A, thorns. B, chemicals.` },
    { s: 'MICHAEL', t: `Both — thorns are mechanical defence and chemicals are chemical defence.` },
    { s: 'TYLA', t: `Correct — both A and B. Six marks.` },
    { s: 'TYLA', t: `Question 1.4 shows three diagrams, A, B and C, of plant responses caused by hormones. Diagram A is a seed germinating in the soil. Diagram B is a pot plant in a box, with light coming in through an opening on one side. And Diagram C shows a leaf drooping and falling off.` },
    { s: 'MICHAEL', t: `Okay. Ready.` },
    { s: 'TYLA', t: `1.4.1: "Give the LETTER or letters of the diagram or diagrams that represent a response due to..." (a) abscisic acid — one mark. (b) auxins — two marks. (c) gibberellins — one mark.` },
    { s: 'MICHAEL', t: `(a) — leaf fall is abscission, caused by abscisic acid. So C. (b) — auxins... the bending shoot is phototropism, so B. And the root growing down is geotropism — also auxins. So A and B.` },
    { s: 'TYLA', t: `[impressed] Correct. And notice the mark allocation — two marks for (b). That was the examiner telling you there are two diagrams.` },
    { s: 'MICHAEL', t: `Oh, the marks are a hint!` },
    { s: 'TYLA', t: `[whispers] Always read the marks as a hint. [warmly] And (c) — gibberellins?` },
    { s: 'MICHAEL', t: `Gibberellins start seed germination. A is a germinating seed. So A.` },
    { s: 'TYLA', t: `Correct. A shows two hormones at work — gibberellins for germination and auxins for the root's growth response. 1.4.2: "Identify the growth response shown..." (a) by the roots in diagram A, and (b) in diagram B.` },
    { s: 'MICHAEL', t: `(a) geotropism. (b) phototropism.` },
    { s: 'TYLA', t: `Correct — the memo also accepts "gravitropism" for (a). 1.4.3: "Using X and Y in diagram B, state which side of the stem has the highest..." (a) concentration of auxins, and (b) rate of cell division.` },
    { s: 'MICHAEL', t: `Auxins move to the shaded side, so the highest concentration is on X. And... rate of cell division... the side that's growing more. Also X.` },
    { s: 'TYLA', t: `Correct, X and X — eight marks for 1.4. The trap here is that students think the side facing the light grows more. It's the opposite. The shaded side grows more and pushes the stem towards the light.` },
    { s: 'TYLA', t: `Question 1.5 is a diagram of a neuron, with an arrow showing the direction of the impulse, and parts labelled A to F. Notice where the cell body, D, sits — off to the side on its own short branch.` },
    { s: 'MICHAEL', t: `[curious] A cell body sticking out to the side... I know which neuron that is.` },
    { s: 'TYLA', t: `1.5.1: "Name the type of neuron represented by the diagram."` },
    { s: 'MICHAEL', t: `Sensory neuron. Its cell body sits off to the side of the fibre, unlike a motor neuron, where the cell body is at the start.` },
    { s: 'TYLA', t: `Correct — sensory neuron. 1.5.2: Identify parts (a) B, (b) D, and (c) E.` },
    { s: 'MICHAEL', t: `B, axon. D, cell body. E, dendrite.` },
    { s: 'TYLA', t: `Correct. Here's the trick to telling the axon and dendrite apart: follow the direction-of-impulse arrow. Dendrites carry impulses towards the cell body; the axon carries them away. 1.5.3: Give the LETTER of the part that (a) contains the genetic material, (b) insulates the neuron, and (c) makes synaptic contact with an interneuron.` },
    { s: 'MICHAEL', t: `(a) the nucleus, C. (b) myelin sheath, F. (c) the end of the axon — A.` },
    { s: 'TYLA', t: `All correct, and you gave letters, which is what the question asked for. If you'd written "nucleus," you'd get zero. 1.5.4: "Name the disorder that is associated with the degeneration of part F."` },
    { s: 'MICHAEL', t: `Degeneration of the myelin sheath — multiple sclerosis.` },
    { s: 'TYLA', t: `[delighted] Correct. And that's the end of Section A — fifty marks.` },
    { s: 'MICHAEL', t: `[sighs] Fifty marks done, a hundred to go.` },
  ],
},

{
  num: 2,
  file: 'Paper 1 Nov 2025 - Part 2 - Question 2',
  segs: [
    { s: 'AMELIA', t: `Exam Walkthrough, Life Sciences Paper 1, November 2025. Part 2: Question 2` },
    { s: 'TYLA', t: `Section B, Question 2. Now the answers get longer, and this is where technique really matters. Question 2.1. "In bird eggs, the yolk is the main source of energy for the developing embryo." There's a table showing the average percentage of yolk in the eggs of six birds. Goose, thirty-five comma one percent. Eagle, twelve. Duck, thirty-five comma four. Vulture, fourteen. Chicken, thirty-one comma nine. And pigeon, seventeen comma nine.` },
    { s: 'MICHAEL', t: `So three high-yolk birds — goose, duck, chicken — and three low-yolk birds — eagle, vulture, pigeon.` },
    { s: 'TYLA', t: `[impressed] That's exactly the right first move — sort the data before you answer. 2.1.1: "Explain why we may conclude that ducks display precocial development." Three marks.` },
    { s: 'MICHAEL', t: `Precocial means the young are well developed when they hatch... they can move and feed themselves. Ducks are precocial because the chicks are well developed and independent.` },
    { s: 'TYLA', t: `[encouragingly] That's half the answer. But the question says "explain why we may conclude" — so the examiner wants you to use the data. What in the table supports it?` },
    { s: 'MICHAEL', t: `Oh. The duck egg has a high percentage of yolk — thirty-five comma four percent. So there's more energy and nutrients for the embryo, so the hatchling is well developed, so it's more independent.` },
    { s: 'TYLA', t: `That's the full answer. And the memo makes "the egg has a high percentage of yolk" a compulsory mark. Without it, you can't get full marks, however good the rest is.` },
    { s: 'MICHAEL', t: `So "conclude from the data" means quote the data.` },
    { s: 'TYLA', t: `Always. 2.1.2: "Name the THREE bird types that would have a higher degree of parental care." Three marks.` },
    { s: 'MICHAEL', t: `Higher parental care means altricial — the chicks hatch underdeveloped. Low yolk. So eagle, vulture, pigeon.` },
    { s: 'TYLA', t: `Correct. And remember the rule — the marker marks only the first three. If you write four birds to be safe, the fourth is ignored, and if one of the first three is wrong, you lose that mark. 2.1.3: "Give a reason for your answer to Question 2.1.2." Two marks.` },
    { s: 'MICHAEL', t: `Their eggs have a lower percentage of yolk, so the hatchlings won't be fully developed... so they need more parental care.` },
    { s: 'TYLA', t: `Correct — two marks. Eight marks for 2.1.` },
    { s: 'TYLA', t: `Question 2.2 shows part of the male reproductive system, with labels A, B and C, plus the scrotum. 2.2.1: "Give the LETTER and the NAME of the..." (a) gland that secretes testosterone, and (b) part that stores sperm until maturation. Two marks each.` },
    { s: 'MICHAEL', t: `(a) C, testis. (b) A, epididymis.` },
    { s: 'TYLA', t: `Correct — and notice "letter and name," two marks each. One mark for the letter, one for the name. Give only one and you lose half the marks. 2.2.2: "Explain the role of the scrotum in sperm production." Two marks.` },
    { s: 'MICHAEL', t: `It keeps the testes outside the body... cooler.` },
    { s: 'TYLA', t: `[encouragingly] That's one mark. Why does cooler matter?` },
    { s: 'MICHAEL', t: `It keeps the testes at a temperature lower than body temperature, which is needed for the production of good quality and quantity of sperm.` },
    { s: 'TYLA', t: `Two marks. The memo also accepts that the scrotum protects the testes from injury, as long as you link it to sperm production. Notice the pattern for "explain" questions: what happens, then why it matters. 2.2.3: "Name and describe the process of sperm production." Five marks.` },
    { s: 'MICHAEL', t: `Spermatogenesis. It happens in the testes... cells divide by meiosis to make sperm.` },
    { s: 'TYLA', t: `[seriously] That's thin for five marks. Count your facts. You need five separate marked facts. Try again, and give me details.` },
    { s: 'MICHAEL', t: `Okay. Spermatogenesis. Under the influence of testosterone, diploid cells in the seminiferous tubules undergo meiosis to form haploid sperm cells.` },
    { s: 'TYLA', t: `[impressed] Now that's full marks. "Spermatogenesis" is a compulsory mark — the question says "name," so without it you can't get five out of five. Then any four of: testosterone, diploid cells, seminiferous tubules, meiosis, haploid sperm. Eleven marks for 2.2.` },
    { s: 'MICHAEL', t: `So for a five-mark "describe," I need five separate facts — and key words like diploid and haploid are each worth a mark.` },
    { s: 'TYLA', t: `Question 2.3. "The thickness of the endometrium varies throughout the menstrual cycle." There's a table for one woman's cycle. Day zero: fourteen millimetres. Day seven: three millimetres. Day fourteen: five millimetres. Day twenty-one: thirteen millimetres. Day twenty-eight: sixteen millimetres.` },
    { s: 'MICHAEL', t: `So it starts thick, drops at day seven, then builds back up.` },
    { s: 'TYLA', t: `Exactly. 2.3.1: "Referring to ovarian hormones, explain the..." (a) decrease in thickness of the endometrium from day zero to day seven. Three marks.` },
    { s: 'MICHAEL', t: `That's menstruation. Progesterone drops, so the lining breaks down.` },
    { s: 'TYLA', t: `[encouragingly] Two of three. Why does progesterone drop?` },
    { s: 'MICHAEL', t: `Because the corpus luteum degenerates. So progesterone levels decrease, the endometrium is no longer maintained, and menstruation occurs.` },
    { s: 'TYLA', t: `Three marks. "Referring to ovarian hormones" means name the hormone and its source. (b): increase in thickness from day seven to day fourteen. Two marks.` },
    { s: 'MICHAEL', t: `The Graafian follicle secretes oestrogen, which increases the thickness of the endometrium.` },
    { s: 'TYLA', t: `Correct — two marks, follicle and oestrogen. Trap alert: students write "FSH" or "LH" here. Those are pituitary hormones, and the question said ovarian hormones. 2.3.2: "Describe changes in the endometrium that cause it to become thicker." Two marks.` },
    { s: 'MICHAEL', t: `More blood vessels... and more glands.` },
    { s: 'TYLA', t: `Correct — it becomes more vascular and more glandular. 2.3.3: "State the significance of the change in endometrium thickness described in 2.3.2." One mark.` },
    { s: 'MICHAEL', t: `It prepares for implantation of the embryo.` },
    { s: 'TYLA', t: `Correct. And now the big one — 2.3.4: "Draw a bar graph to show the results in the table." Six marks. Michael, talk me through how you'd draw it.` },
    { s: 'MICHAEL', t: `Okay. Day of the menstrual cycle on the x-axis, thickness on the y-axis. Then five bars for days zero, seven, fourteen, twenty-one and twenty-eight.` },
    { s: 'TYLA', t: `Good start. Now let's go through the six marks on the marking grid, because every graph question is marked this way. Mark one, T, type of graph: it must be a bar graph. Bars with gaps between them — not a histogram, where the bars touch, and not a line graph.` },
    { s: 'MICHAEL', t: `Why bars and not a line?` },
    { s: 'TYLA', t: `Because the question says "bar graph." Draw a line graph, and you lose the type mark and the scale mark. Mark two, C, caption: a heading that includes both variables — something like "Thickness of the endometrium on different days of the menstrual cycle."` },
    { s: 'MICHAEL', t: `[hesitantly] I would have forgotten the caption.` },
    { s: 'TYLA', t: `Most students do. Mark three, L, labels: both axes labelled, and the unit on the y-axis — "Thickness of the endometrium, in millimetres." Mark four, S, scale: bars of equal width with equal spaces between them on the x-axis, and an even scale on the y-axis — say, going up in fives or twos from zero to twenty. And marks five and six, P, plotting: one mark if one to four bars are correct, two marks if all five are correct.` },
    { s: 'MICHAEL', t: `So — T, C, L, S, P. Type, caption, labels, scale, plotting.` },
    { s: 'TYLA', t: `[whispers] Type, Caption, Labels, Scale, Plotting. [warmly] Use that checklist on every graph you draw. Fourteen marks for 2.3.` },
    { s: 'TYLA', t: `Question 2.4 shows three cross-sections of an arteriole — a small artery near the surface of the skin — labelled X, Y and Z. Y is the arteriole under normal conditions. Compare the size of the opening in X and Z with Y. 2.4.1: "Name the part of the brain that controls thermoregulation." One mark.` },
    { s: 'MICHAEL', t: `Hypothalamus.` },
    { s: 'TYLA', t: `Correct. 2.4.2: "Give the LETTER of the diagram which represents the arteriole on a cold day." One mark.` },
    { s: 'MICHAEL', t: `On a cold day, vasoconstriction — the narrow one. X.` },
    { s: 'TYLA', t: `Correct. 2.4.3: "Explain the significance of the change in the diameter of the arteriole from normal conditions to the condition in diagram Z." Four marks.` },
    { s: 'MICHAEL', t: `Z is wider, so vasodilation. More blood flows to the surface of the skin... more heat is lost by radiation... which lowers the body temperature back to normal.` },
    { s: 'TYLA', t: `[delighted] Four marks — vasodilation, more blood to the skin surface, more heat lost, body temperature decreases or is regulated. And notice you said "more blood flows to the surface" — not "the blood vessels move closer to the surface." Blood vessels don't move. That's a classic mark- loser. Six marks for 2.4.` },
    { s: 'TYLA', t: `Question 2.5 is an investigation. "Idiopathic Short Stature, or ISS, describes a condition where children have normal birth height, but grow slowly and do not reach the expected height for their age group. This condition is NOT due to malnutrition or different lifestyles. Scientists investigated the effect of added growth hormone on the height of children with ISS." Here's the procedure. Consent was obtained from the parents of a group of two-year-old boys with ISS. The boys were divided into two groups. Group A received human growth hormone at a daily dosage of zero comma zero two eight milligrams per kilogram of body weight. Group B did not receive the hormone. Their height was measured monthly until each boy turned eighteen. At eighteen, the average height in Group A was eight centimetres more than in Group B.` },
    { s: 'MICHAEL', t: `Okay — investigation questions. Variables, validity, controls.` },
    { s: 'TYLA', t: `Exactly. 2.5.1: "State the dependent variable of this investigation." One mark.` },
    { s: 'MICHAEL', t: `Growth hormone.` },
    { s: 'TYLA', t: `[encouragingly] Careful. Is growth hormone what they changed, or what they measured?` },
    { s: 'MICHAEL', t: `[groans] They changed it — that's the independent variable. They measured height. So the dependent variable is height.` },
    { s: 'TYLA', t: `Correct — height. A quick check: the independent variable is what the scientist changes — the dependent variable is what depends on it, what gets measured. 2.5.2: "List THREE variables that were kept constant and which contributed to the validity of the investigation." Three marks.` },
    { s: 'MICHAEL', t: `Gender — they were all boys. They all had ISS. And age — they were all two years old.` },
    { s: 'TYLA', t: `Correct — three marks. The memo also accepts the duration of the investigation. And notice, I said "list three" — the first three get marked. Pick the three you're most sure of. 2.5.3: "Explain the purpose of Group B in this investigation." Two marks.` },
    { s: 'MICHAEL', t: `Group B is the control group... so you can compare?` },
    { s: 'TYLA', t: `[seriously] That gets you very little. "To compare" is too vague. Compare what, and why?` },
    { s: 'MICHAEL', t: `Okay — Group B shows that it's the added growth hormone that caused the change in height, and not any other factor.` },
    { s: 'TYLA', t: `Full marks. Learn that structure for any "purpose of the control" question: "to show that it is the independent variable that caused the change in the dependent variable, and not any other factor." 2.5.4: "Calculate the daily amount of added human growth hormone that was given to a boy with a mass of twenty-five kilograms. Show ALL your working, INCLUDING the correct unit." Three marks.` },
    { s: 'MICHAEL', t: `Twenty-five times zero comma zero two eight... equals zero comma seven. Zero comma seven milligrams.` },
    { s: 'TYLA', t: `[impressed] Three marks — one for the working, twenty-five times zero comma zero two eight; one for the answer, zero comma seven; and one for the unit, milligrams. Write "zero comma seven" without "milligrams" and you've thrown away a mark. 2.5.5: "Give a conclusion for this investigation." Two marks.` },
    { s: 'MICHAEL', t: `Added growth hormone causes an increase in height of children with ISS.` },
    { s: 'TYLA', t: `Correct. A strong conclusion links the independent variable to the dependent variable — "added growth hormone increases height." And it doesn't repeat the results — that's a statement of findings, not a conclusion. Eleven marks for 2.5, and that's Question 2 — fifty marks.` },
  ],
},

{
  num: 3,
  file: 'Paper 1 Nov 2025 - Part 3 - Question 3 and Wrap-Up',
  segs: [
    { s: 'AMELIA', t: `Exam Walkthrough, Life Sciences Paper 1, November 2025. Part 3: Question 3 and Wrap-Up` },
    { s: 'TYLA', t: `Question 3 — the final fifty marks. Question 3.1 shows a normal eye and an eye with astigmatism. Compare the shape of the cornea at the front of each eye. 3.1.1: Identify (a) fluid A, (b) part B, and (c) part C.` },
    { s: 'MICHAEL', t: `(a) aqueous humour. (b) pupil. (c) iris.` },
    { s: 'TYLA', t: `Correct, all three. And watch the spelling and the difference: aqueous humour is the watery fluid at the front, and vitreous humour is the jelly at the back. 3.1.2: "Describe the appearance of the cornea of an eye with astigmatism." One mark.` },
    { s: 'MICHAEL', t: `It's not evenly curved — in the diagram it comes to a point instead of being a smooth dome.` },
    { s: 'TYLA', t: `[delighted] Correct — not evenly curved. 3.1.3: "Explain how astigmatism affects vision." Three marks.` },
    { s: 'MICHAEL', t: `The light is refracted unevenly... so it doesn't focus on the retina... and the image is blurred.` },
    { s: 'TYLA', t: `Three facts, three marks: refracted unevenly, doesn't focus on the retina, blurred image. 3.1.4: "Give ONE treatment for astigmatism." One mark.` },
    { s: 'MICHAEL', t: `Glasses... or contact lenses, or laser surgery.` },
    { s: 'TYLA', t: `[playfully] I'll mark only your first one — glasses. Correct. But notice, the question said one. If your first answer had been wrong, the correct second and third wouldn't save you. Eight marks for 3.1.` },
    { s: 'TYLA', t: `Question 3.2 shows parts of the human nervous system — the brain, with parts A, B and C, and a cross-section of the spinal cord, with an arrow D coming in and an arrow E going out. 3.2.1: "Name the branch of the nervous system represented by the parts shown." One mark.` },
    { s: 'MICHAEL', t: `The brain and spinal cord — the central nervous system.` },
    { s: 'TYLA', t: `Correct. 3.2.2: "Give the LETTER and NAME of the part responsible for..." (a) balance and coordination, (b) control of breathing, (c) control of skeletal muscles. Two marks each.` },
    { s: 'MICHAEL', t: `(a) B, cerebellum. (b) C, medulla oblongata. (c) A, cerebrum.` },
    { s: 'TYLA', t: `[impressed] Six marks — letter and name every time. And a trap in (c): "control of skeletal muscles" means voluntary movement, which is the cerebrum. Students often pick the cerebellum because it "coordinates" muscles. Now — 3.2.3: "Describe the pathway of an impulse from part D through the spinal cord to part E, to bring about a reflex action." Six marks. D is the impulse coming in from the receptor, and E is the impulse going out to the effector. Take your time.` },
    { s: 'MICHAEL', t: `Okay. The receptor picks up a stimulus... the impulse goes to the spinal cord... then back to the muscle, which reacts.` },
    { s: 'TYLA', t: `[seriously] That's what most students write, and it scores about one mark. Six marks need six separate facts with the correct neurons and pathways. Remember the thumbtack from Episode 6. Name every neuron and every root.` },
    { s: 'MICHAEL', t: `[slowly, putting it together] Right. The impulse is transmitted by the sensory neuron... via the dorsal root of the spinal nerve... into the spinal cord, to the interneuron... then to the motor neuron... by synaptic contact... then out through the ventral root of the spinal nerve... to the effector, which brings about the reflex action.` },
    { s: 'TYLA', t: `[delighted] That's full marks — sensory neuron, dorsal root, interneuron, motor neuron, synapses, ventral root, effector. Seven possible marks for a six-mark question. Thirteen marks for 3.2.` },
    { s: 'MICHAEL', t: `[whispers] Dorsal in, ventral out. [laughs] That's my hook.` },
    { s: 'TYLA', t: `Question 3.3: "Describe how the human eye ACCOMMODATES for distant vision." Five marks. This is a question where students often describe the wrong version — near vision instead of distant. Michael?` },
    { s: 'MICHAEL', t: `For distant vision... the ciliary muscles contract—` },
    { s: 'TYLA', t: `[encouragingly] Stop. Distant or near?` },
    { s: 'MICHAEL', t: `[groans] Distant. Ciliary muscles relax for distant vision — they contract for near vision. Okay, again. The ciliary muscles relax... the suspensory ligaments become taut — they're pulled tight... so the tension on the lens increases and the lens becomes less convex — flatter... so light is refracted less... and a clear image forms on the retina.` },
    { s: 'TYLA', t: `Five marks. The trick for remembering: for distant vision, everything is "relaxed and flat" — the ciliary muscles relax, and the lens goes flat. For near vision, the ciliary muscles contract, the ligaments slacken, and the lens becomes more convex — rounder — to refract light more.` },
    { s: 'MICHAEL', t: `Distant — relax and flat. Near — contract and round.` },
    { s: 'TYLA', t: `Question 3.4 shows the structure of the human ear, with the auditory canal labelled and parts A to E. 3.4.1: Identify part (a) A, and (b) B.` },
    { s: 'MICHAEL', t: `(a) pinna. (b) ossicles.` },
    { s: 'TYLA', t: `Correct. 3.4.2: "Give the LETTERS of TWO parts that are normally filled with fluid." Two marks.` },
    { s: 'MICHAEL', t: `The inner ear — C, the semicircular canals, and D, the cochlea. And only those two letters, because the marker counts the first two.` },
    { s: 'TYLA', t: `[delighted] You're learning. The trap is E, the Eustachian tube, or B, in the middle ear. The middle ear is filled with air, not fluid. 3.4.3: "Describe how balance is restored when there is a change in the speed and direction of head movement." Five marks.` },
    { s: 'MICHAEL', t: `The maculae are stimulated—` },
    { s: 'TYLA', t: `[encouragingly] Read the question again. "Speed and direction."` },
    { s: 'MICHAEL', t: `[hesitantly] Oh. The maculae detect changes in the position of the head, in relation to gravity. Speed and direction is the cristae, in the semicircular canals. Okay. The cristae are stimulated... they convert the stimulus into an impulse... which is sent via the auditory nerve... to the cerebellum, for interpretation... and then impulses are sent to the skeletal muscles to restore balance.` },
    { s: 'TYLA', t: `[impressed] Five marks. That maculae-versus-cristae switch is one of the most tested traps in Paper 1. Cristae: speed and direction. Maculae: position of the head, gravity. And the impulse goes to the cerebellum, not the cerebrum, because it's about balance.` },
    { s: 'MICHAEL', t: `And the nerve is the auditory nerve, even for balance?` },
    { s: 'TYLA', t: `Yes — the auditory nerve carries impulses from both the cochlea and the balance organs. Now 3.4.4. "When a person is exposed to loud noise over a long period, it may lead to noise-induced hearing loss, which is caused by damage to the hair cells in the organ of Corti. These cells are not repaired when damaged. Placing earplugs in the auditory canal can prevent damage to the hair cells." Explain how (a) damage to the hair cells can lead to hearing loss — two marks.` },
    { s: 'MICHAEL', t: `If the hair cells are damaged, fewer or no stimuli are converted into impulses... so fewer or no impulses reach the cerebrum to be interpreted as sound.` },
    { s: 'TYLA', t: `Two marks. And notice — for hearing, the impulse goes to the cerebrum, not the cerebellum. And (b): how earplugs can prevent damage to the hair cells. Three marks.` },
    { s: 'MICHAEL', t: `The earplugs limit the sound waves in the auditory canal reaching the eardrum... so fewer vibrations are formed in the middle ear... so fewer pressure waves are formed in the cochlea... so the hair cells aren't damaged.` },
    { s: 'TYLA', t: `[delighted] Three marks — and you followed the sound's path from outside to inside: canal, middle ear, cochlea. That's how to answer any "how does sound travel" question. Fourteen marks for 3.4.` },
    { s: 'TYLA', t: `The last question — 3.5. "The graph below shows the insulin levels of three people over a twenty-three-hour period." Person A is a healthy person who received no treatment. Person B has diabetes mellitus and received a rapid-acting insulin injection before each meal. Person C has diabetes mellitus and received a daily injection of long-acting insulin at twenty-three hundred hours — eleven at night. All three ate the same meals at the same times. Look at the three lines: A is solid, B is dashed, and C is dotted.` },
    { s: 'MICHAEL', t: `Okay. Solid, dashed, dotted.` },
    { s: 'TYLA', t: `3.5.1: "Name the organ that secretes insulin." One mark.` },
    { s: 'MICHAEL', t: `The pancreas.` },
    { s: 'TYLA', t: `Correct. 3.5.2: "State the number of meals that were eaten during the twenty-three-hour period." One mark.` },
    { s: 'MICHAEL', t: `The healthy person's insulin peaks after each meal, and there are three peaks. Three meals.` },
    { s: 'TYLA', t: `Correct — three. And you used the healthy person's line as the clue, which is smart. 3.5.3: "Tabulate TWO differences between long-acting insulin treatment and rapid-acting insulin treatment over the twenty-three-hour period." Five marks.` },
    { s: 'MICHAEL', t: `Five marks for two differences? That's weird.` },
    { s: 'TYLA', t: `[whispers] It's not weird — it's the table. [warmly] One mark is for drawing a table: columns with headings, "Long-acting insulin treatment" and "Rapid-acting insulin treatment." Then two marks for each difference — one mark for each side. Give me your two rows.` },
    { s: 'MICHAEL', t: `Row one: long-acting — one injection over the twenty-three hours, whereas rapid-acting — three injections. Row two: long-acting — the insulin concentration stays constant for long periods, whereas rapid-acting — the concentration rises and drops.` },
    { s: 'TYLA', t: `[impressed] Full marks — five out of five, as long as it's in a table. Other rows the memo accepts include: the injection is given at twenty-three hundred versus before every meal; a lower insulin concentration versus a higher one; and a long-lasting effect versus a shorter one. But only your first two rows are marked. Write the same answer as a paragraph, and you lose the table mark.` },
    { s: 'MICHAEL', t: `And each row has to compare the same thing — injections against injections, concentration against concentration.` },
    { s: 'TYLA', t: `Exactly — that's what makes it a proper comparison. 3.5.4: "Name the type of insulin treatment that is similar to insulin secretion in a healthy person." One mark.` },
    { s: 'MICHAEL', t: `Rapid-acting — it peaks after meals, like the healthy person's line.` },
    { s: 'TYLA', t: `Correct. And the last question of the paper — 3.5.5: "Explain why Person B may experience a lack of energy after receiving a rapid-acting insulin injection if NO meal is taken." Two marks.` },
    { s: 'MICHAEL', t: `Insulin lowers blood glucose... and if they haven't eaten, the glucose goes even lower... so there's less glucose available for cellular respiration... so less energy.` },
    { s: 'TYLA', t: `[delighted] Two marks — the insulin reduces the glucose level even further, by converting glucose to glycogen and increasing uptake by cells, and there's less glucose for cellular respiration. Notice you linked it to cellular respiration — that's the step that earns the second mark. And that's it — one hundred and fifty marks.` },
    { s: 'MICHAEL', t: `[excitedly] We did a whole exam!` },
    { s: 'TYLA', t: `[warmly] Michael, how do you feel?` },
    { s: 'MICHAEL', t: `[laughs] Exhausted. But honestly, the biology wasn't the hard part. It was reading the questions properly.` },
    { s: 'TYLA', t: `That's the biggest lesson from today. Same tradition as always — but this time, give me the top exam traps from this paper, in one go.` },
    { s: 'MICHAEL', t: `Okay. With paired multiple-choice options, check both halves — like the placenta question, where gaseous exchange was right but mechanical protection was the amniotic fluid. The fastest reaction is the shortest time. TSH comes from the pituitary, never the thyroid. More ADH means concentrated urine, not dilute. The morula forms in the fallopian tube. Semen needs all three glands — seminal vesicles, prostate and Cowper's gland. The blind spot has no rods or cones — the fovea is full of cones. The chorion forms the placenta, not the amnion. The pupil uses radial and circular muscles; accommodation uses the ciliary muscles. The marks are a hint — two marks for "letters" means two letters. The shaded side of a shoot has more auxin and grows more. Letter means letter, letter and name means both.` },
    { s: 'TYLA', t: `Keep going — Section B.` },
    { s: 'MICHAEL', t: `"Conclude from the data" means quote the data, like the high percentage of yolk. Name the process when it says "name" — spermatogenesis was compulsory. Count your marks and give that many facts, with key words like diploid, haploid and seminiferous tubules. Ovarian hormones means oestrogen and progesterone, not FSH or LH. For graphs — type, caption, labels, scale, plotting. Blood vessels dilate — they don't move. The dependent variable is what you measure. The control proves it's the independent variable and not another factor. Always include units. For the reflex arc — sensory neuron, dorsal root, interneuron, motor neuron, ventral root — dorsal in, ventral out. Distant vision — relax and flat. Speed and direction is the cristae, gravity is the maculae, and balance goes to the cerebellum, but hearing goes to the cerebrum. And "tabulate" means a real table, with matching rows.` },
    { s: 'TYLA', t: `[amazed] ...That's a better revision list than most study guides. And to everyone listening — notice how many of those marks were lost not because students didn't know the biology, but because they didn't read the question carefully. Read every word, check the marks, and answer exactly what's asked.` },
    { s: 'MICHAEL', t: `[playfully] And don't let me write your exam.` },
    { s: 'TYLA', t: `[laughs] You did great. Next time, we'll tackle Paper 2. Until then — read the question, count the marks, and answer what's asked. We'll catch you in the next episode.` },
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

async function generateEpisode(ep, ffmpegAvailable, silenceShort, forceLines = new Set()) {
  const epDir = path.join(TMP_ROOT, slugifyFolder(ep.file));
  fs.mkdirSync(epDir, { recursive: true });

  const manifestPath = path.join(epDir, '_manifest.json');
  let manifest = {};
  try { manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); } catch {}
  const hashOf = (seg) => crypto.createHash('sha1').update(`${seg.s}|${PRIMARY_MODEL}|${seg.t}`).digest('hex');

  const files = [];
  let usedFallback = 0;

  // Safety guard: if this episode was already finished but its saved clips are missing, a run would silently
  // re-record (and re-bill) the missing lines. Stop and say so unless --go (or --fresh) was passed.
  {
    const finalMp3 = path.join(OUT_DIR, `${ep.file}.mp3`);
    // Lines you explicitly asked for (e.g. 3:33) are expected to be (re)generated, so they don't count as "missing".
    const missingNow = ep.segs
      .map((sg, i) => ({ f: path.join(epDir, `${pad(i)}_${sg.s.toLowerCase()}.mp3`), line: i + 1 }))
      .filter(x => !forceLines.has(x.line) && (!fs.existsSync(x.f) || fs.statSync(x.f).size === 0)).length;
    const willGenerate = missingNow + forceLines.size;
    if (fs.existsSync(finalMp3) && missingNow > 0 && !process.argv.includes('--go')) {
      console.error(`\n⛔ STOPPED: "${ep.file}" is already finished, but ${missingNow} of ${ep.segs.length} saved clips are missing.`);
      console.error(`   Running now would re-record those ${missingNow} line(s) and use credits. Nothing was generated.`);
      console.error(`   If that's what you want, add --go to the command (or --fresh to re-record the whole episode).`);
      process.exit(1);
    }
    if (willGenerate > 0) console.log(`  → will generate ${willGenerate} line(s), keeping ${ep.segs.length - Math.min(willGenerate, ep.segs.length)} existing clip(s)`);
  }

  for (let i = 0; i < ep.segs.length; i++) {
    const seg = ep.segs[i];
    const voiceId = VOICES[seg.s];
    const fname = `${pad(i)}_${seg.s.toLowerCase()}.mp3`;
    const outPath = path.join(epDir, fname);
    files.push(outPath);

    const exists = fs.existsSync(outPath) && fs.statSync(outPath).size > 0;
    const h = hashOf(seg);
    const forced = forceLines.has(i + 1);
    const changed = manifest[fname] && manifest[fname] !== h; // text edited since this clip was made
    if (exists && !forced && !changed) {
      console.log(`  [line ${i + 1}] ${seg.s} — keeping existing clip`);
      continue;
    }
    if (exists) console.log(`  [line ${i + 1}] ${seg.s} — ${forced ? 'forced' : 'text changed'}, regenerating`);

    console.log(`  [line ${i + 1}] ${seg.s}: ${seg.t.slice(0, 60)}${seg.t.length > 60 ? '...' : ''}`);
    try {
      const mode = await generateAudio(seg.t, voiceId, outPath);
      if (mode === 'fallback') usedFallback++;
      manifest[fname] = h;
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 1));
    } catch (e) {
      console.error(`    ✗ FAILED: ${e.message.slice(0, 200)}`);
      if (/quota_exceeded|credits remaining/i.test(e.message)) {
        console.error(`\n⛔ Out of ElevenLabs credits on this account — stopping now. Lines already recorded are kept.`);
        console.error(`   Re-run the same command (on an account with credits) to record only the remaining lines.`);
        process.exit(1);
      }
    }
    await sleep(400);
  }

  const missing = files.filter(f => !fs.existsSync(f) || fs.statSync(f).size === 0);
  if (missing.length) {
    // Don't build a half-finished episode: an incomplete MP3 would also trip the missing-clip guard next run.
    const partial = path.join(OUT_DIR, `${ep.file}.mp3`);
    if (fs.existsSync(partial)) fs.rmSync(partial, { force: true });
    console.warn(`  ⚠ ${missing.length} segment(s) failed in "${ep.file}" — episode NOT built. Re-run the same command to record just those lines.`);
    return;
  }
  if (usedFallback) {
    console.warn(`  ⚠ ${usedFallback} segment(s) in "${ep.file}" used the ${FALLBACK_MODEL} fallback.`);
  }

  const outPath = path.join(OUT_DIR, `${ep.file}.mp3`);

  if (ffmpegAvailable) {
    const listPath = path.join(epDir, '_concat_list.txt');
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

  // Usage: <n> rebuild episode n, regenerating only missing clips or lines whose text changed
  //        <n>:2,5,last  also force-regenerate those line numbers (1 = first line, Amelia's title)
  //        --fresh  wipe the episode's clips first and re-record everything
  const args = process.argv.slice(2);
  const fresh = args.includes('--fresh');
  const forceMap = new Map();
  for (const tok of args.filter(t => t !== '--fresh')) {
    const [numStr, linesStr] = tok.split(':');
    const n = Number(numStr);
    if (!Number.isInteger(n) || n < 1) continue;
    const set = forceMap.get(n) || new Set();
    const ep = EPISODES.find(e => e.num === n);
    if (linesStr && ep) {
      for (const part of linesStr.split(',')) {
        if (part === 'last') set.add(ep.segs.length);
        else if (/^-\d+$/.test(part)) set.add(ep.segs.length + 1 + Number(part)); // -1 = last, -2 = second to last
        else if (/^\d+$/.test(part)) set.add(Number(part));
      }
    }
    forceMap.set(n, set);
  }
  const requested = [...forceMap.keys()];
  const toRun = requested.length ? EPISODES.filter(e => requested.includes(e.num)) : EPISODES;

  if (requested.length) {
    console.log(`${fresh ? 'Re-recording from scratch' : 'Rebuilding'} episode(s): ${toRun.map(e => e.num).join(', ')}\n`);
    if (fresh) {
      for (const ep of toRun) {
        const epDir = path.join(TMP_ROOT, slugifyFolder(ep.file));
        if (fs.existsSync(epDir)) fs.rmSync(epDir, { recursive: true, force: true });
        const outPath = path.join(OUT_DIR, `${ep.file}.mp3`);
        if (fs.existsSync(outPath)) fs.rmSync(outPath, { force: true });
      }
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

  console.log(`Life, Decoded — Exam Walkthrough Paper 1 Nov 2025 (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

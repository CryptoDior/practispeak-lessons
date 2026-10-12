/**
 * Life, Decoded — Exam Walkthrough: Life Sciences Paper 1, November 2024 — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-exam-paper1-nov2024-audio.mjs 1 2 3
 *
 * Three output MP3s (each opens with Amelia announcing the title):
 *   1. Section A                  — Intro + Parts 1-6
 *   2. Question 2                 — Parts 7-10
 *   3. Question 3 and Wrap-Up     — Parts 11-15 + Outro
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
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_1 to .env.local and run with: node --env-file=.env.local scripts/generate-life-decoded-exam-paper1-nov2024-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'Life-Decoded-Exam-Walkthrough-Paper-1-Nov-2024');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'life-decoded-exam-paper1-nov2024');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'Paper 1 Nov 2024 - Part 1 - Section A',
  segs: [
    { s: 'AMELIA', t: `Exam Walkthrough, Life Sciences Paper 1, November 2024. Part 1: Section A` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to LIFE, DECODED. We've done both papers from November 2025. Now we're going back a year — to the National Senior Certificate Life Sciences Paper 1, November 2024.` },
    { s: 'MICHAEL', t: `[playfully] Another past paper. Is this one easier?` },
    { s: 'TYLA', t: `[laughs] Different, not easier. Every paper tests the same content in new ways, and that's exactly why past papers are the best revision there is. The traps you spot today will show up again in your exam, just dressed differently.` },
    { s: 'MICHAEL', t: `Same rules as before, then? You read, I answer, you mark me against the memo.` },
    { s: 'TYLA', t: `Same rules. One hundred and fifty marks, two and a half hours. Section A is fifty marks of short questions, and Section B is two questions of fifty marks each. Every diagram, table and graph will be on screen, so pause after each question and try it yourself first. And remember the big marking rules: only the first answers are marked, "letter and name" means both, and units are marked separately.` },
    { s: 'MICHAEL', t: `[confidently] And I've had two whole exams of practice. Let's see if it shows.` },
    { s: 'TYLA', t: `Question 1.1, ten multiple-choice questions at two marks each. 1.1.1: "The hormone responsible for the regulation of salt content in the human body is..." A, testosterone. B, aldosterone. C, prolactin. D, glucagon.` },
    { s: 'MICHAEL', t: `Aldosterone — from the adrenal glands. B.` },
    { s: 'TYLA', t: `Correct, B. Aldosterone controls salt, and ADH controls water. Mixing those two up is a classic mistake. 1.1.2: "Which ONE of the following is a stage in human embryonic development?" A, choroid. B, amnion. C, morula. D, chorion.` },
    { s: 'MICHAEL', t: `Hmm. Amnion and chorion are both part of the embryo's story...` },
    { s: 'TYLA', t: `[encouragingly] They are — but are they stages?` },
    { s: 'MICHAEL', t: `No — they're membranes. A stage is something the embryo becomes: zygote, morula, blastocyst. So C, morula. And the choroid is a layer of the eye, so A is just there to confuse me.` },
    { s: 'TYLA', t: `Correct, C. Read the noun in the question — "a stage." Two of the options were real parts of the developing embryo, just not stages. 1.1.3: "When the carbon dioxide level in the blood increases above normal, the..." A, rate and depth of breathing decrease. B, receptor cells in the diaphragm are stimulated. C, heart beats slower. D, receptor cells in the carotid artery in the neck are stimulated.` },
    { s: 'MICHAEL', t: `More carbon dioxide means breathing speeds up, so A and C are backwards. The receptors are in the carotid artery — not the diaphragm. D.` },
    { s: 'TYLA', t: `[delighted] Correct, D. The diaphragm is the effector — it breathes faster and deeper — but the receptors are in the carotid arteries. 1.1.4: "Which ONE of the following changes occurs under the influence of adrenalin?" A, an increased blood supply to the skeletal muscles. B, decreased blood pressure. C, decreased muscle tone of skeletal muscles. D, an increased blood supply to the digestive system.` },
    { s: 'MICHAEL', t: `Adrenalin is fight or flight. You need your muscles, not your digestion. A.` },
    { s: 'TYLA', t: `Correct, A. During fight or flight, blood is moved away from the digestive system and towards the skeletal muscles. Blood pressure goes up, not down. 1.1.5: "A girl is barefoot and steps onto a thorn, causing a reflex action. Which ONE of the following represents the CORRECT pathway of the reflex arc?" A, pain receptor, motor neuron, sensory neuron, leg muscle. B, foot muscle, sensory neuron, motor neuron, pain receptor. C, foot muscle, motor neuron, sensory neuron, pain receptor. D, pain receptor, sensory neuron, motor neuron, leg muscle.` },
    { s: 'MICHAEL', t: `It has to start at the receptor and end at the effector. So A or D. And sensory comes before motor. D.` },
    { s: 'TYLA', t: `Correct, D. [whispers] Receptor, sensory, motor, effector. Use that order to rule out options quickly — anything starting with a muscle is out immediately.` },
    { s: 'TYLA', t: `1.1.6: "A spectator in a soccer stadium is seated two hundred metres away from the field. Which ONE of the following describes the condition of structures X, Y and Z when he looks at the ball placed in the middle of the field?" X is the muscle, Y is the structure holding the lens, and Z is the lens.` },
    { s: 'MICHAEL', t: `[laughs] We did this in the last Paper 1. Two hundred metres is distant vision. The ciliary muscles relax, the suspensory ligaments go taut, and the lens becomes less convex. Relaxed, taut, less convex — C.` },
    { s: 'TYLA', t: `[impressed] Correct, C. And notice how the options are built — each one swaps one word. If you remember one fact for certain, like "relaxed" for distance, you can eliminate half the options straight away. 1.1.7: "Which ONE of the following is involved in thermoregulation?" A, corpus callosum. B, hypothalamus. C, cerebellum. D, spinal cord.` },
    { s: 'MICHAEL', t: `Hypothalamus. B.` },
    { s: 'TYLA', t: `Correct, B. The hypothalamus is the body's thermostat. 1.1.8: "The following is a list of factors regarding a developing foetus: one, temperature regulation. Two, protection. Three, free movement. Four, nutrition. For which combination of factors is the amniotic fluid responsible?" A, one, two and three only. B, one and four only. C, two and three only. D, one, two, three and four.` },
    { s: 'MICHAEL', t: `The amniotic fluid does everything for the baby... so D, all four.` },
    { s: 'TYLA', t: `[seriously] And that's the trap. Does the amniotic fluid feed the foetus?` },
    { s: 'MICHAEL', t: `Oh... no. Nutrition comes through the placenta and the umbilical cord. So it's temperature, protection and free movement. A.` },
    { s: 'TYLA', t: `Correct, A. When an option says "all of them," check each item one at a time. One wrong item makes the whole option wrong.` },
    { s: 'TYLA', t: `1.1.9: "Which ONE of the following occurs when there are excess waves in the inner ear?" A, pressure is released at A. B, pressure is released at C. C, pressure is absorbed at B. D, pressure is absorbed at A and C.` },
    { s: 'MICHAEL', t: `C is the Eustachian tube, and that's the one that equalises pressure. So B — pressure is released at C.` },
    { s: 'TYLA', t: `[encouragingly] Close — but read the question again. Pressure where?` },
    { s: 'MICHAEL', t: `"In the inner ear." Oh. The Eustachian tube equalises pressure in the middle ear. Excess pressure waves in the inner ear are absorbed by the round window — that's B. So C.` },
    { s: 'TYLA', t: `Correct, C. Inner ear pressure: the round window. Middle ear pressure: the Eustachian tube. One word in the question decides it.` },
    { s: 'TYLA', t: `Last multiple choice. 1.1.10: "The nerve impulses for balance are transmitted as follows..." A, J, F, H. B, E, F, H. C, E, F, G. D, J, F, G.` },
    { s: 'MICHAEL', t: `[thoughtfully] Balance starts in the semicircular canals — that's the impulse coming from E. Then along the auditory nerve, F. And balance is interpreted by the cerebellum, which is H. So E, F, H — B.` },
    { s: 'TYLA', t: `[delighted] Correct, B. J comes from the cochlea, which is for hearing — and hearing goes to the cerebrum, G. Two pathways share the same nerve, but they start and end in different places.` },
    { s: 'TYLA', t: `Question 1.2, eight terms at one mark each. 1.2.1: "The structure that connects the foetus to the placenta."` },
    { s: 'MICHAEL', t: `Umbilical cord.` },
    { s: 'TYLA', t: `Correct. 1.2.2: "The part of the nervous system that consists of sympathetic and parasympathetic sections."` },
    { s: 'MICHAEL', t: `The autonomic nervous system.` },
    { s: 'TYLA', t: `Correct. 1.2.3: "Receptors in the ear that detect changes in speed and direction of movement of the head."` },
    { s: 'MICHAEL', t: `Speed and direction is the cristae. Gravity is the maculae.` },
    { s: 'TYLA', t: `[playfully] You remembered. Correct — cristae. 1.2.4: "The ossicle that transfers vibrations to the oval window."` },
    { s: 'MICHAEL', t: `Hammer, anvil, stirrup... the stirrup touches the oval window. Stirrup — or stapes.` },
    { s: 'TYLA', t: `Correct. 1.2.5: "The growth reaction of a plant in response to gravity."` },
    { s: 'MICHAEL', t: `Geotropism.` },
    { s: 'TYLA', t: `Correct — gravitropism is also accepted. 1.2.6: "The part in the inner ear where the organ of Corti is located."` },
    { s: 'MICHAEL', t: `The cochlea.` },
    { s: 'TYLA', t: `Correct. 1.2.7: "A plant hormone that stimulates the germination of seeds."` },
    { s: 'MICHAEL', t: `[hesitantly] Auxins?` },
    { s: 'TYLA', t: `[encouragingly] Auxins are for growing stems and roots. Which hormone breaks seed dormancy?` },
    { s: 'MICHAEL', t: `Gibberellins. And abscisic acid does the opposite — it keeps seeds dormant.` },
    { s: 'TYLA', t: `Correct — gibberellins. 1.2.8: "A structure in the head of a sperm cell that contains enzymes."` },
    { s: 'MICHAEL', t: `The acrosome — the enzymes dissolve a path into the ovum.` },
    { s: 'TYLA', t: `[impressed] Seven out of eight. [whispers] Gibberellins germinate. The two G's go together.` },
    { s: 'TYLA', t: `Question 1.3 — A only, B only, both, or none. 1.3.1: "Acts as a micro-filter for the developing foetus." A, placenta. B, cervix.` },
    { s: 'MICHAEL', t: `The placenta filters what reaches the foetus. The cervix is just the neck of the uterus. A only.` },
    { s: 'TYLA', t: `Correct, A only. 1.3.2: "The part of the brain that controls heart rate." A, corpus callosum. B, medulla oblongata.` },
    { s: 'MICHAEL', t: `Medulla oblongata — heart rate and breathing. The corpus callosum connects the two halves of the cerebrum. B only.` },
    { s: 'TYLA', t: `Correct. 1.3.3: "The area on the retina where there are no rods or cones." A, blind spot. B, cornea.` },
    { s: 'MICHAEL', t: `The blind spot. And the cornea isn't even part of the retina. A only.` },
    { s: 'TYLA', t: `Correct — six out of six. When one option isn't even in the right part of the body, like the cornea here, you can rule it out immediately.` },
    { s: 'TYLA', t: `Question 1.4. 1.4.1: "Give the LETTER and NAME of the structure that..." (a) "Forms part of both the urinary and reproductive systems." Two marks.` },
    { s: 'MICHAEL', t: `The urethra — it carries both urine and semen.` },
    { s: 'TYLA', t: `[seriously] Which mark did you just lose?` },
    { s: 'MICHAEL', t: `[groans] The letter. C — urethra.` },
    { s: 'TYLA', t: `Now it's two marks. "Letter and name" means one mark for each. The penis, D, was also accepted. (b) "Stores sperm temporarily." Two marks.` },
    { s: 'MICHAEL', t: `B — epididymis.` },
    { s: 'TYLA', t: `Correct. (c) "Secretes testosterone." Two marks.` },
    { s: 'MICHAEL', t: `E — testis.` },
    { s: 'TYLA', t: `Correct. 1.4.2: "Identify..." (a) "Part A." One mark.` },
    { s: 'MICHAEL', t: `A is the gland just below the bladder, around the urethra — the prostate gland.` },
    { s: 'TYLA', t: `Correct. (b) "The type of gametogenesis that takes place in part E." One mark.` },
    { s: 'MICHAEL', t: `E is the testis, so — spermatogenesis.` },
    { s: 'TYLA', t: `Correct. Eight marks.` },
    { s: 'TYLA', t: `Question 1.5. 1.5.1: "Write the LETTERS of the parts that serve as endocrine glands only." Two marks.` },
    { s: 'MICHAEL', t: `A — the pituitary gland in the brain. D — the pancreas. And F — the adrenal gland on top of the kidney. A, D and F.` },
    { s: 'TYLA', t: `[playfully] Read the last word of the question.` },
    { s: 'MICHAEL', t: `"Endocrine glands only." Hmm... the pancreas also makes digestive enzymes that go into the small intestine. So it's endocrine and exocrine.` },
    { s: 'TYLA', t: `Exactly. The pancreas is a mixed gland, so it's out. And because only the first answers are marked, writing three letters for a two-mark question could cost you. The answer is A and F. 1.5.2: "Give the LETTERS and NAMES of the parts responsible for the regulation of body temperature." Four marks.` },
    { s: 'MICHAEL', t: `B — the blood vessels, or capillaries, in the skin. And C — the sweat gland.` },
    { s: 'TYLA', t: `Four marks, letters and names. 1.5.3: "Name the following with regard to the regulation of water content in the blood..." (a) "Hormone secreted by part A." (b) "Target organ E."` },
    { s: 'MICHAEL', t: `(a) ADH — antidiuretic hormone. (b) The kidney.` },
    { s: 'TYLA', t: `[warmly] Correct. That's Section A — fifty marks.` },
  ],
},

{
  num: 2,
  file: 'Paper 1 Nov 2024 - Part 2 - Question 2',
  segs: [
    { s: 'AMELIA', t: `Exam Walkthrough, Life Sciences Paper 1, November 2024. Part 2: Question 2` },
    { s: 'TYLA', t: `Section B. Question 2.1. 2.1.1: "Identify part..." (a) A and (b) B. One mark each.` },
    { s: 'MICHAEL', t: `A is the fallopian tube, and B is the ovary.` },
    { s: 'TYLA', t: `Correct. 2.1.2: "Give TWO..." (a) "Characteristics of the endometrium that make it suitable for implantation." Two marks.` },
    { s: 'MICHAEL', t: `It's thick, and it has a rich blood supply.` },
    { s: 'TYLA', t: `Two marks. "Glandular" was also accepted. (b) "Visible reasons why there is an increased chance of fertilisation in this female." Two marks.` },
    { s: 'MICHAEL', t: `[curious] Visible... so things I can actually see in the diagram. There are sperm cells already in the fallopian tube, and an ovum — C — has been released. So ovulation has happened.` },
    { s: 'TYLA', t: `[delighted] Two marks. "Visible" means your answer must come from the picture, not from general knowledge. Something like "she's at the right time of her cycle" can't be seen, so it gets nothing. 2.1.3: "Identify and describe the type of gametogenesis that leads to the formation of structure C." Six marks.` },
    { s: 'MICHAEL', t: `I learned this one last time — name it first. This is oogenesis. Diploid cells in the ovary undergo mitosis to form many follicles. At puberty, under the influence of FSH, one cell inside a follicle undergoes meiosis... and that forms the ovum.` },
    { s: 'TYLA', t: `[encouragingly] Good start — and naming oogenesis was the compulsory mark. But what happens to the four cells meiosis produces?` },
    { s: 'MICHAEL', t: `Oh, right. Of the four cells produced by meiosis, only one survives to become the mature, haploid ovum.` },
    { s: 'TYLA', t: `Six out of six. That last detail is what makes oogenesis different from spermatogenesis, where all four cells become sperm. Examiners love it. 2.1.4: "In an ectopic pregnancy, the fertilised ovum can become implanted in part A. This normally results in the death of the embryo and may endanger the mother's life. Explain why an ectopic pregnancy may result in the death of an embryo." Three marks.` },
    { s: 'MICHAEL', t: `The fallopian tube is too narrow — there's no space for the embryo to grow. And there's no endometrium or rich blood supply to provide nutrients and oxygen, or remove waste, so the embryo can't develop.` },
    { s: 'TYLA', t: `Three marks. Think about what the uterus provides — space, a blood supply, and nutrients — and then explain that the fallopian tube can't provide any of them.` },
    { s: 'TYLA', t: `Question 2.2, the hormone table. 2.2.1: "On which day of this menstrual cycle is the level of progesterone the highest?" One mark.` },
    { s: 'MICHAEL', t: `Fifteen nanograms per millilitre is the highest, so... day twenty.` },
    { s: 'TYLA', t: `Correct — day twenty. Careful here. The question asks for the day, so writing "fifteen" gets nothing. Always check which column the question wants. 2.2.2: "Name the reproductive hormone that will begin to increase from day twenty-four of this female's menstrual cycle." One mark.` },
    { s: 'MICHAEL', t: `End of the cycle... LH?` },
    { s: 'TYLA', t: `[encouragingly] What does the pituitary need to do first, to start a new cycle?` },
    { s: 'MICHAEL', t: `Develop a new follicle. That's FSH.` },
    { s: 'TYLA', t: `Correct — FSH. 2.2.3: "Use data from the table to explain your answer to QUESTION 2.2.2." Two marks.` },
    { s: 'MICHAEL', t: `From day twenty-four, progesterone decreases — from 5 to 0,8 nanograms per millilitre. So FSH is no longer inhibited.` },
    { s: 'TYLA', t: `[impressed] Two marks — and you quoted the numbers, which is what "use data" means. Progesterone inhibits FSH, so when progesterone falls, FSH can rise again. 2.2.4: "Calculate the percentage increase in the oestrogen level from day eight to day ten. Show ALL your working." Three marks.` },
    { s: 'MICHAEL', t: `[whispers] Divide by where you started. [normal] Day eight is 70, day ten is 280. So 280 minus 70, divided by 70, times 100. That's 300 percent.` },
    { s: 'TYLA', t: `[delighted] Three marks — and you remembered the trap from last time. If you'd divided by 280, you'd get seventy-five percent and lose the answer mark. 2.2.5: "How would the progesterone level differ after day twenty if this female was pregnant?" One mark.` },
    { s: 'MICHAEL', t: `It would stay high — or keep increasing.` },
    { s: 'TYLA', t: `Correct. 2.2.6: "Explain what causes the change in the progesterone level stated in QUESTION 2.2.5." Two marks.` },
    { s: 'MICHAEL', t: `The corpus luteum doesn't break down, so it keeps secreting progesterone.` },
    { s: 'TYLA', t: `Two marks. The alternative was also accepted: the placenta develops and secretes progesterone. Either explanation works, as long as you give both the structure and what it does.` },
    { s: 'TYLA', t: `Question 2.3, the cataracts passage. 2.3.1: "According to the passage, which type of cataract is associated with a disorder of the pancreas?" One mark.` },
    { s: 'MICHAEL', t: `[thoughtfully] The passage doesn't say "pancreas" anywhere... but it says subcapsular cataracts are most common in people with diabetes — and diabetes is a disorder of the pancreas. So subcapsular cataracts.` },
    { s: 'TYLA', t: `[impressed] Correct. The examiner made you link your own knowledge to the passage. Expect that in every reading question. 2.3.2: "Use information in the passage to explain why cataracts cause vision loss." Five marks.` },
    { s: 'MICHAEL', t: `Protein structures in the lens break down and clump together, so the lens becomes cloudy and light can't get through.` },
    { s: 'TYLA', t: `That's about three marks. Five marks needs the whole chain — take the light all the way to the brain's starting point.` },
    { s: 'MICHAEL', t: `Okay. The protein structures in the lens disintegrate and clump together. The lens becomes opaque — milky. So less light passes through the lens... onto the retina. Therefore, fewer stimuli are converted into impulses.` },
    { s: 'TYLA', t: `[delighted] Five out of five. Each step in the chain earns a mark — the clumping, the opaque lens, less light, the retina, and fewer impulses.` },
    { s: 'TYLA', t: `Question 2.4: "A man is long-sighted. Explain how..." 2.4.1: "The structure of his eyeball affects his vision when he reads a book without glasses." Three marks.` },
    { s: 'MICHAEL', t: `His eyeball is too long, so the image forms in front of the retina...` },
    { s: 'TYLA', t: `[seriously] Stop — that's short-sightedness. Swap it around.` },
    { s: 'MICHAEL', t: `[sighs] Right. Long-sighted: the eyeball is too short. So the image of a nearby book forms behind the retina, which causes blurred vision.` },
    { s: 'TYLA', t: `Three marks. [whispers] Long-sighted, short eyeball, image behind. The memo also accepted a less convex cornea, which causes less refraction, so the image forms behind the retina. 2.4.2: "Wearing glasses with convex lenses will improve his vision when he reads a book." Two marks.` },
    { s: 'MICHAEL', t: `The convex lens refracts the light rays more, so the image falls on the retina.` },
    { s: 'TYLA', t: `Two marks.` },
    { s: 'TYLA', t: `Question 2.5. 2.5.1: "Identify the type of neuron shown in the diagrams." One mark.` },
    { s: 'MICHAEL', t: `The question tells us — one is myelinated and one is unmyelinated.` },
    { s: 'TYLA', t: `[playfully] That's the information the question gave you. Would an examiner give you a free mark for repeating the question?` },
    { s: 'MICHAEL', t: `[laughs] Fair. It's asking about the type by function. The cell body is at one end, with lots of dendrites around it, and one long axon. That's a motor neuron.` },
    { s: 'TYLA', t: `Correct. 2.5.2: "Give ONE visible reason for your answer." One mark.` },
    { s: 'MICHAEL', t: `The cell body is at one end of the neuron.` },
    { s: 'TYLA', t: `Correct. "It has many dendrites" or "a long axon and short dendrites" were also accepted. 2.5.3: "Describe the function of the type of neuron identified in QUESTION 2.5.1." Three marks.` },
    { s: 'MICHAEL', t: `It transmits impulses from the central nervous system to the effector.` },
    { s: 'TYLA', t: `Three marks: transmits impulses, from the central nervous system, to the effector. 2.5.4: "Use the letters A, B and C to indicate the direction in which an impulse moves through the neuron." Two marks.` },
    { s: 'MICHAEL', t: `B is the branches at the top — those look like dendrites, so the impulse starts there. B, A, C.` },
    { s: 'TYLA', t: `[seriously] Look again. Where is the cell body?` },
    { s: 'MICHAEL', t: `At the bottom — with C, the dendrites around it. Oh... so the branches at B are the axon terminals. The impulse goes from the dendrites to the cell body, along the axon, and out of the terminals. C, A, B.` },
    { s: 'TYLA', t: `Correct, C, A, B. Find the cell body first. In a motor neuron, the dendrites are next to it, and the impulse travels away from it along the axon. 2.5.5: "Name the disorder associated with degeneration of the myelin sheaths of neurons." One mark.` },
    { s: 'MICHAEL', t: `Multiple sclerosis.` },
    { s: 'TYLA', t: `Correct. Question 2.6, the two graphs. 2.6.1: "Give the axon diameter, in micrometres, at which an impulse moves at twenty metres per second in..." (a) a myelinated neuron and (b) an unmyelinated neuron. One mark each.` },
    { s: 'MICHAEL', t: `(a) 5 micrometres. (b) 800 micrometres.` },
    { s: 'TYLA', t: `Correct. Notice that the two graphs have different scales — the myelinated axis goes up to thirty, and the unmyelinated axis goes up to twelve hundred. Read each graph's own axis. 2.6.2: "Use the graphs to describe..." (a) "Difference in impulse speed for myelinated and unmyelinated neurons." Two marks.` },
    { s: 'MICHAEL', t: `The impulse speed is faster in myelinated neurons than in unmyelinated neurons.` },
    { s: 'TYLA', t: `Two marks — and "than" makes it a comparison. (b) "Relationship between axon diameter and impulse speed." Two marks.` },
    { s: 'MICHAEL', t: `As the axon diameter increases, the impulse speed increases.` },
    { s: 'TYLA', t: `[warmly] Two marks. A relationship always has both variables in it — "as this increases, that increases." That's Question 2 — fifty marks.` },
  ],
},

{
  num: 3,
  file: 'Paper 1 Nov 2024 - Part 3 - Question 3 and Wrap-Up',
  segs: [
    { s: 'AMELIA', t: `Exam Walkthrough, Life Sciences Paper 1, November 2024. Part 3: Question 3 and Wrap-Up` },
    { s: 'TYLA', t: `Question 3, the final fifty marks. 3.1, the vulture passage. 3.1.1: "Give ONE reason from the passage why vultures..." (a) "Are considered as oviparous." One mark.` },
    { s: 'MICHAEL', t: `They lay eggs.` },
    { s: 'TYLA', t: `Correct. (b) "Have a high survival rate even though few eggs are laid." One mark.` },
    { s: 'MICHAEL', t: `The eggs are protected by both parents during incubation.` },
    { s: 'TYLA', t: `Correct. "The parents feed the chicks" was also accepted — but give one reason, because only the first is marked. 3.1.2: "Fertilisation in vultures takes place internally. State TWO advantages of internal fertilisation." Two marks.` },
    { s: 'MICHAEL', t: `It increases the chances of fertilisation, because the gametes are close together. And the gametes are protected from predators and drying out.` },
    { s: 'TYLA', t: `Two marks. "Water is not needed" and "fewer gametes are needed" were also accepted. 3.1.3: "State TWO characteristics of chicks that display altricial development." Two marks.` },
    { s: 'MICHAEL', t: `Their eyes are closed when they hatch, and they can't move around on their own.` },
    { s: 'TYLA', t: `Two marks. Also accepted: no down feathers, and dependent on the parents for food and protection. [whispers] Altricial chicks are helpless. Precocial chicks are ready to go. 3.1.4: "Explain why birds with altricial development would have short incubation periods." Two marks.` },
    { s: 'MICHAEL', t: `The eggs have less yolk, so the chicks hatch before they're fully developed.` },
    { s: 'TYLA', t: `Two marks. Less yolk means less food stored in the egg, so the chick has to hatch early — and the parents take over the job of feeding it. That's why parental care is so high in altricial birds.` },
    { s: 'TYLA', t: `Question 3.2. 3.2.1: "Identify part..." (a) X and (b) Y. One mark each.` },
    { s: 'MICHAEL', t: `X is the black centre — the pupil. Y is the coloured ring around it — the iris.` },
    { s: 'TYLA', t: `Correct. The pupil is a hole, and the iris is the muscle around it. Students often swap them. 3.2.2: "Explain why the pupillary mechanism is considered to be a reflex action." Three marks.` },
    { s: 'MICHAEL', t: `It's a rapid, involuntary response...` },
    { s: 'TYLA', t: `[encouragingly] Two marks so far. A response to what?` },
    { s: 'MICHAEL', t: `To light — a change in light intensity.` },
    { s: 'TYLA', t: `Three marks. Rapid, involuntary, response to a stimulus — and here the stimulus is light. That three-part definition of a reflex works for any reflex question. 3.2.3: "Name the TWO effector muscles that are involved in the pupillary mechanism." Two marks.` },
    { s: 'MICHAEL', t: `Radial muscles and circular muscles. Not the ciliary muscles — those are for accommodation.` },
    { s: 'TYLA', t: `[delighted] Two marks, and you avoided the ciliary muscle trap. 3.2.4: "Explain the significance of the change in the diameter of part X from diagram A to diagram B." Four marks.` },
    { s: 'MICHAEL', t: `The pupil got bigger — it dilated. So more light enters the eye, which improves vision... in dim light.` },
    { s: 'TYLA', t: `Four marks. The significance needs the why — more light in, so you can see better — and the when — in dim light. [whispers] Dim light, dilated pupil.` },
    { s: 'TYLA', t: `Question 3.3. "An investigation was conducted to determine the effect of insulin on blood glucose levels." One group was healthy. The second group was the control, and it consisted of people with diabetes. Both groups drank seventy-five grams of glucose, and their blood was tested over ninety minutes. 3.3.1: "State the purpose of the control group in this investigation." Two marks.` },
    { s: 'MICHAEL', t: `[hesitantly] Wait — the control group is the people with diabetes? I thought the control was always the "normal" group.` },
    { s: 'TYLA', t: `[laughs] Not always. The control is whatever group lets you compare. Here, people with diabetes don't make enough insulin, so they show what happens without insulin. Now — what's the control for?` },
    { s: 'MICHAEL', t: `To make sure that the change in blood glucose levels was due to insulin only.` },
    { s: 'TYLA', t: `Two marks. 3.3.2: "Describe TWO ways in which insulin decreases blood glucose levels." Four marks.` },
    { s: 'MICHAEL', t: `It stimulates the liver and muscles to convert glucose into glycogen. And it stimulates cells to absorb glucose from the blood.` },
    { s: 'TYLA', t: `Four marks. Increasing cellular respiration, which uses glucose, was also accepted. 3.3.3: "Which group, X or Y, consists of healthy individuals?" One mark.` },
    { s: 'MICHAEL', t: `Group Y.` },
    { s: 'TYLA', t: `Correct. 3.3.4: "Use data in the table to explain your answer to QUESTION 3.3.3." Three marks.` },
    { s: 'MICHAEL', t: `Group Y's glucose was normal — and their insulin went up.` },
    { s: 'TYLA', t: `[encouragingly] Right idea, but "use data" means numbers, and three marks means three points. Go through the table: the start, the end, and the insulin.` },
    { s: 'MICHAEL', t: `Okay. At zero minutes, group Y's glucose was 4,5, which is within the normal range, while group X's was high, at 6,8. At ninety minutes, group Y's glucose had returned to normal — back to 4,5 — while group X's stayed high. And after the glucose was eaten, group Y's insulin increased — up to 142 — while group X's decreased.` },
    { s: 'TYLA', t: `[impressed] Three out of three. Use the note at the top of the question too. It gave you the normal ranges, so you can say "within the normal range" with confidence. If a question gives you reference values, use them.` },
    { s: 'TYLA', t: `Question 3.4, the thyroxin flow diagram. 3.4.1: "Identify..." (a) "The type of interaction represented by the diagram." (b) "Gland Y." (c) "The disorder that is characterised by the enlargement of gland Y." One mark each.` },
    { s: 'MICHAEL', t: `(a) A negative feedback mechanism. (b) The thyroid gland. (c) Goitre.` },
    { s: 'TYLA', t: `Three marks. 3.4.2: "State ONE function of thyroxin." One mark.` },
    { s: 'MICHAEL', t: `It regulates the metabolic rate.` },
    { s: 'TYLA', t: `Correct. 3.4.3: "Describe the role of the pituitary gland in correcting the level of thyroxin at X." Four marks.` },
    { s: 'MICHAEL', t: `X is the dashed line, and the dashed line goes to "less TSH." So X is a high thyroxin level, and the pituitary secretes less TSH.` },
    { s: 'TYLA', t: `[seriously] That's the trap in this diagram. Don't follow the line style — follow the arrows. Trace X all the way into the pituitary gland. Where does it come out?` },
    { s: 'MICHAEL', t: `[slowly] Oh... the lines cross inside the pituitary. The X line curves down to "more TSH," and the Z line curves up to "less TSH." So X is a low thyroxin level.` },
    { s: 'TYLA', t: `Exactly. Now answer it.` },
    { s: 'MICHAEL', t: `The thyroxin level is low, so the pituitary gland is stimulated to secrete more TSH. TSH stimulates the thyroid gland to secrete more thyroxin, and the level goes back to normal.` },
    { s: 'TYLA', t: `[delighted] Four marks. With flow diagrams, follow every arrow from start to finish before you answer. 3.4.4: "Explain why a continuous undersecretion of thyroxin may lead to an increase in body mass." Two marks.` },
    { s: 'MICHAEL', t: `Less thyroxin means a lower metabolic rate, so fewer nutrients are used up — and the excess is stored as fat.` },
    { s: 'TYLA', t: `Two marks.` },
    { s: 'TYLA', t: `Last question — 3.5. "An investigation was conducted to determine the effect of auxins on plant tropism." Twelve plants of the same species were split into three groups of four and kept in the dark for seventy-two hours. Group A was untouched. Group B's tips were replaced with agar containing auxins. Group C's tips were replaced with agar without auxins. 3.5.1: "For this investigation give..." (a) "The independent variable." One mark. (b) "TWO variables that were controlled." Two marks.` },
    { s: 'MICHAEL', t: `(a) The presence of auxins. (b) The plant species, and the time kept in the dark — seventy-two hours.` },
    { s: 'TYLA', t: `Three marks. "Light" was also accepted, because they were all in darkness. 3.5.2: "Give the expected results of the plants in..." (a) "Group A." (b) "Group C." One mark each.` },
    { s: 'MICHAEL', t: `(a) Group A still has its tip, so it grows straight upwards. (b) Group C has no tip and no auxins, so there's no upward growth.` },
    { s: 'TYLA', t: `Two marks. "Lateral branches develop" was also accepted for group C — no auxin from the tip means no apical dominance. 3.5.3: "How was the reliability of this investigation ensured?" Two marks.` },
    { s: 'MICHAEL', t: `Group C was used as a control.` },
    { s: 'TYLA', t: `[encouragingly] A control is about validity — making sure it's a fair test. Reliability is about something else.` },
    { s: 'MICHAEL', t: `Repeating it. So reliability came from using four plants in each group.` },
    { s: 'TYLA', t: `Two marks. [whispers] Reliability — repeat it. Validity — control it. 3.5.4: "After seventy-two hours, the stems of the plants in group B bent towards the right-hand side. Explain these results." Four marks.` },
    { s: 'MICHAEL', t: `Light was shining from the right, so the auxins...` },
    { s: 'TYLA', t: `[playfully] Michael. Where were the plants kept?` },
    { s: 'MICHAEL', t: `[laughs] In the dark. So this has nothing to do with light — it's about where the auxins went. The auxins diffused from the agar into the left side of the stem. That gave a higher concentration of auxins on the left, which caused more cell elongation on the left side. The right side grew less, so the stem bent to the right.` },
    { s: 'TYLA', t: `[impressed] Four out of four. The stem bends away from the side with more auxin, because that side grows faster. And always read the method — the word "darkness" was there to stop you reaching for phototropism.` },
    { s: 'TYLA', t: `[warmly] Michael — your first 2024 paper. How did it go?` },
    { s: 'MICHAEL', t: `[laughs] Better than my first try at 2025. But there were new traps I'd never seen.` },
    { s: 'TYLA', t: `Same tradition. Top traps from this paper — go.` },
    { s: 'MICHAEL', t: `In Section A: aldosterone is salt, and ADH is water. Amnion and chorion are membranes, not stages. Carbon dioxide receptors are in the carotid arteries, not the diaphragm. The amniotic fluid doesn't feed the foetus. Inner-ear pressure goes to the round window — the Eustachian tube is the middle ear. Balance goes to the cerebellum. Gibberellins germinate seeds. Letter and name means both. And "endocrine glands only" rules out the pancreas.` },
    { s: 'TYLA', t: `Keep going — Section B.` },
    { s: 'MICHAEL', t: `"Visible" means from the diagram. Name oogenesis, and remember only one of the four cells survives. "Which day" means the day, not the value. For percentage increase, divide by where you started. Link the passage to your own knowledge — diabetes means pancreas. Long-sighted is a short eyeball. The neuron's type is its function. Find the cell body before you trace the impulse. Read each graph's own scale. A control group isn't always the healthy group. Follow the arrows, not the line style. Reliability means repeats, validity means control. And read the method — darkness means it isn't about light.` },
    { s: 'TYLA', t: `[amazed] ...And notice how many of those traps were about one word — "only," "visible," "inner," "day," "darkness." The examiner chooses every word in the question carefully. Read every one of them.` },
    { s: 'MICHAEL', t: `[playfully] So the lesson is: the question is trying to help me, if I actually read it.` },
    { s: 'TYLA', t: `[laughs] That's the lesson. Read the question, count the marks, and answer what's asked. We'll catch you in the next episode.` },
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
    }
    await sleep(400);
  }

  const missing = files.filter(f => !fs.existsSync(f) || fs.statSync(f).size === 0);
  if (missing.length) {
    console.warn(`  ⚠ ${missing.length} segment(s) failed in "${ep.file}". Re-run the script to retry just those.`);
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

  console.log(`Life, Decoded — Exam Walkthrough Paper 1 Nov 2024 (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

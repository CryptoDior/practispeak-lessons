/**
 * Life, Decoded — Exam Walkthrough: Life Sciences Paper 2, November 2024 — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-exam-paper2-nov2024-audio.mjs 1 2 3
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
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_1 to .env.local and run with: node --env-file=.env.local scripts/generate-life-decoded-exam-paper2-nov2024-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'Life-Decoded-Exam-Walkthrough-Paper-2-Nov-2024');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'life-decoded-exam-paper2-nov2024');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'Paper 2 Nov 2024 - Part 1 - Section A',
  segs: [
    { s: 'AMELIA', t: `Exam Walkthrough, Life Sciences Paper 2, November 2024. Part 1: Section A` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to LIFE, DECODED. Last time we did Paper 1 from November 2024. Today, it's the partner paper: the National Senior Certificate Life Sciences Paper 2, November 2024.` },
    { s: 'MICHAEL', t: `[playfully] DNA, meiosis, genetics and evolution. I've got my Punnett squares ready.` },
    { s: 'TYLA', t: `[laughs] Good, because you'll need them. Same format as always: one hundred and fifty marks, two and a half hours. Section A is fifty marks of short questions, and Section B has two questions of fifty marks each. This paper has a genetic cross, a bar graph and a diagram you have to draw, so there are lots of marks for method, not just facts.` },
    { s: 'MICHAEL', t: `And the same deal — I answer, you mark me against the memo, and everyone learns from my mistakes.` },
    { s: 'TYLA', t: `Exactly. Everything will be on screen as we go, so pause and try each question yourself first. Ready?` },
    { s: 'MICHAEL', t: `[confidently] Ready.` },
    { s: 'TYLA', t: `Question 1.1, ten multiple-choice questions at two marks each. 1.1.1: "Which ONE of the following organelles is the site of protein synthesis?" A, ribosomes. B, chloroplasts. C, mitochondria. D, centrosomes.` },
    { s: 'MICHAEL', t: `[quickly] Ribosomes. A.` },
    { s: 'TYLA', t: `Correct, A. 1.1.2: "In humans, the gonosomes determine the gender. Which combination below shows the CORRECT gonosomes for males and females?" A, male X Y, female Y Y. B, male Y Y, female X Y. C, male X Y, female X X. D, male X X, female X Y.` },
    { s: 'MICHAEL', t: `Male X Y, female X X. C. And any option with Y Y is impossible — nobody gets a Y from their mother.` },
    { s: 'TYLA', t: `[impressed] Correct, C — and that's a great way to eliminate options. 1.1.3: "An organism has the genotype capital T, capital T. The CORRECT term which describes this organism's genotype is..." A, heterozygous dominant. B, heterozygous recessive. C, homozygous dominant. D, homozygous recessive.` },
    { s: 'MICHAEL', t: `Two of the same allele is homozygous, and capitals are dominant. C.` },
    { s: 'TYLA', t: `Correct, C. And notice A and B are made-up terms. "Heterozygous" already means one dominant and one recessive, so it doesn't need a second word. 1.1.4: "Down syndrome is a genetic disorder where an individual has an extra copy of chromosome twenty-one. Which ONE of the following may lead to Down syndrome?" A, failure of chromosomes to replicate during mitosis. B, failure of chromosome pairs to separate during meiosis. C, failure of chromosomes to form pairs during fertilisation. D, failure of chromosome pairs to cross over during meiosis.` },
    { s: 'MICHAEL', t: `That's non-disjunction — chromosomes not separating in meiosis. B.` },
    { s: 'TYLA', t: `Correct, B. Look at how the wrong options are built: the right word in the wrong process. Chromosomes don't form pairs during fertilisation, and failing to cross over doesn't add a chromosome. 1.1.5: "A gradual change in the characteristics of a species over time is known as..." A, punctuated equilibrium. B, genetic engineering. C, speciation. D, biological evolution.` },
    { s: 'MICHAEL', t: `"Gradual"... that's gradualism, which isn't an option. Punctuated equilibrium is the opposite — long periods of no change, then quick change. Speciation is forming a new species. So D, biological evolution.` },
    { s: 'TYLA', t: `[delighted] Correct, D — that's the textbook definition of biological evolution, word for word. [whispers] Learn the definitions exactly as they're written, because the examiner uses them exactly as they're written.` },
    { s: 'TYLA', t: `1.1.6: "Which ONE of the following is a reproductive isolation mechanism?" A, adaptation to the same pollinator. B, species-specific courtship behaviour. C, production of fertile offspring. D, breeding at the same time of the year.` },
    { s: 'MICHAEL', t: `[thoughtfully] Isolation means stopping two species from breeding. A, C and D would all help them breed. B.` },
    { s: 'TYLA', t: `Correct, B. Every wrong option is the opposite of an isolation mechanism — same pollinator instead of different, fertile offspring instead of infertile, same breeding time instead of different. 1.1.7: "Analysis of mitochondrial DNA is an example of this line of evidence..." A, fossil evidence. B, modification by descent. C, biogeography. D, genetic evidence.` },
    { s: 'MICHAEL', t: `[laughs] DNA is genes. D.` },
    { s: 'TYLA', t: `Correct, D. 1.1.8: "Which option in the table below shows the CORRECT comparison between mitosis and meiosis?" A, mitosis produces four daughter cells, meiosis produces two. B, mitosis produces genetically different cells, meiosis produces genetically identical cells. C, in mitosis the chromosome number remains the same, in meiosis the chromosome number is halved. D, two divisions occur in mitosis, four in meiosis.` },
    { s: 'MICHAEL', t: `[carefully] A and B are the right facts, swapped around. D is just wrong — mitosis has one division and meiosis has two. C.` },
    { s: 'TYLA', t: `Correct, C. Swapping the columns is the oldest trick in comparison tables, so check that each fact is in the right column. 1.1.9: "Which ONE of the following scientists discovered the fossil Taung Child?" A, Lee Berger. B, Ron Clarke. C, Raymond Dart. D, Robert Broom.` },
    { s: 'MICHAEL', t: `Hmm. I always mix these up. Robert Broom?` },
    { s: 'TYLA', t: `[encouragingly] Broom found Mrs Ples. Who found the Taung Child, in 1924?` },
    { s: 'MICHAEL', t: `[groans] Raymond Dart. C.` },
    { s: 'TYLA', t: `Correct, C. Here's the match: Dart — Taung Child. Broom — Mrs Ples. Clarke — Little Foot. Berger — Karabo and Homo naledi. All four names were options, so you need to know the pairs. 1.1.10: "Which ONE of the following is produced at the end of translation?" A, a DNA molecule. B, a messenger RNA molecule. C, a protein. D, an amino acid.` },
    { s: 'MICHAEL', t: `Translation joins amino acids together, so the end product is a protein. C.` },
    { s: 'TYLA', t: `Correct, C. D is the trap — amino acids are the building blocks brought in during translation, not the product. And mRNA is made in transcription.` },
    { s: 'TYLA', t: `Question 1.2, nine terms at one mark each. 1.2.1: "A nucleic acid that carries hereditary information."` },
    { s: 'MICHAEL', t: `DNA — deoxyribonucleic acid.` },
    { s: 'TYLA', t: `Correct. 1.2.2: "The chromosome condition of a cell that has a single set of chromosomes."` },
    { s: 'MICHAEL', t: `Haploid.` },
    { s: 'TYLA', t: `Correct. 1.2.3: "The structure that holds the two chromatids of a chromosome together."` },
    { s: 'MICHAEL', t: `Centromere.` },
    { s: 'TYLA', t: `Correct. 1.2.4: "The type of RNA that carries specific amino acids to the site of protein synthesis."` },
    { s: 'MICHAEL', t: `tRNA — transfer RNA.` },
    { s: 'TYLA', t: `[briskly] Correct. 1.2.5: "The analysis of DNA samples to identify individuals or relationships between individuals."` },
    { s: 'MICHAEL', t: `DNA profiling.` },
    { s: 'TYLA', t: `Correct. 1.2.6: "A representation of the number and structure of all the chromosomes that occur in the nucleus of a somatic cell."` },
    { s: 'MICHAEL', t: `Karyotype.` },
    { s: 'TYLA', t: `Correct. 1.2.7: "A group of similar organisms that are able to interbreed to produce fertile offspring."` },
    { s: 'MICHAEL', t: `A species.` },
    { s: 'TYLA', t: `Correct. 1.2.8: "The phase of meiosis where paired chromosomes are arranged at the equator."` },
    { s: 'MICHAEL', t: `Metaphase.` },
    { s: 'TYLA', t: `[playfully] Which metaphase?` },
    { s: 'MICHAEL', t: `[laughs] Paired chromosomes — so metaphase one. In metaphase two, they line up singly.` },
    { s: 'TYLA', t: `Correct — metaphase one. Without the number, "metaphase" could mean mitosis or either division of meiosis, so the word "paired" was your clue. 1.2.9: "The biotechnological process that produces genetically identical organisms."` },
    { s: 'MICHAEL', t: `Cloning.` },
    { s: 'TYLA', t: `[delighted] Nine out of nine — once you added the "one."` },
    { s: 'TYLA', t: `Question 1.3 — A only, B only, both, or none. 1.3.1: "A source of variation in populations." A, random fertilisation. B, random mating.` },
    { s: 'MICHAEL', t: `Random fertilisation — any sperm can fertilise any egg. That's variation. A only?` },
    { s: 'TYLA', t: `[encouragingly] Test B on its own. Does it matter who mates with whom?` },
    { s: 'MICHAEL', t: `Yes — if any organism can mate with any other, you get more combinations of alleles. So random mating is a source of variation too. Both A and B.` },
    { s: 'TYLA', t: `Correct — both. Sources of variation are a classic list: crossing over, random arrangement of chromosomes, mutations, random mating, and random fertilisation. 1.3.2: "Discovery of the structure of the DNA molecule." A, Franklin and Wilkins. B, Lamarck and Darwin.` },
    { s: 'MICHAEL', t: `[confidently] Franklin and Wilkins worked on the X-ray images of DNA, along with Watson and Crick. Lamarck and Darwin were evolution. A only.` },
    { s: 'TYLA', t: `Correct, A only. 1.3.3: "Occurs during meiosis." A, karyokinesis. B, cytokinesis.` },
    { s: 'MICHAEL', t: `Karyokinesis is the nucleus dividing, and cytokinesis is the cytoplasm dividing. Both happen in meiosis — that's how you end up with four cells. Both A and B.` },
    { s: 'TYLA', t: `Correct — six out of six. Don't let words you associate with mitosis fool you. Karyokinesis and cytokinesis happen in both types of cell division.` },
    { s: 'TYLA', t: `Question 1.4. 1.4.1: "Identify the..." (a) "Process shown in the diagram." (b) "Chemical bond labelled 1." One mark each.` },
    { s: 'MICHAEL', t: `(a) The DNA is unzipping, and new nucleotides are being added, so it's DNA replication. (b) Bond 1 is between two bases — a hydrogen bond.` },
    { s: 'TYLA', t: `Correct. 1.4.2: "Give the..." (a) "Collective name for the parts labelled 2, 3 and 4." (b) "Full name of the nitrogenous base labelled 5." One mark each.` },
    { s: 'MICHAEL', t: `(a) A phosphate, a sugar and a base together make a nucleotide. (b) Base 5 is paired with... A. So it's T.` },
    { s: 'TYLA', t: `[seriously] The question said full name.` },
    { s: 'MICHAEL', t: `[sighs] Thymine.` },
    { s: 'TYLA', t: `Correct — thymine. "T" would lose the mark. 1.4.3: "During which phase of the cell cycle does this process take place?" 1.4.4: "Where in the cell does this process occur?" One mark each.` },
    { s: 'MICHAEL', t: `Interphase, in the nucleus.` },
    { s: 'TYLA', t: `Correct — six marks.` },
    { s: 'TYLA', t: `Question 1.5. "In a certain species of butterfly, one gene controls wing-spot colour and another controls eye colour. The wing-spot colour can be red spots, capital R, or grey spots, lowercase r, while eye colour can be black, capital E, or brown, lowercase e. Butterflies that are heterozygous for both genes were crossed." 1.5.1: "Name the type of cross represented above." One mark.` },
    { s: 'MICHAEL', t: `Two genes — a dihybrid cross.` },
    { s: 'TYLA', t: `Correct. 1.5.2: "Give the dominant characteristic of EACH gene." Two marks.` },
    { s: 'MICHAEL', t: `Red spots, and black eyes.` },
    { s: 'TYLA', t: `Two marks. 1.5.3 — the table. Give: (a) "ALL the possible genotypes at X." Four marks. X is red spots with brown eyes.` },
    { s: 'MICHAEL', t: `Red spots means at least one capital R. Brown eyes is recessive, so it must be lowercase e, lowercase e. So capital R, capital R, lowercase e, lowercase e... and capital R, lowercase r, lowercase e, lowercase e.` },
    { s: 'TYLA', t: `[delighted] Four marks — two for each. The word "ALL" told you there's more than one. A dominant phenotype can be homozygous or heterozygous, but a recessive phenotype has only one genotype. (b) "The phenotype at Y." One mark. Y is capital R, lowercase r, capital E, lowercase e.` },
    { s: 'MICHAEL', t: `A capital in both genes — red spots and black eyes.` },
    { s: 'TYLA', t: `Correct. (c) "The genotype of the gametes produced by a butterfly with grey spots and brown eyes." One mark.` },
    { s: 'MICHAEL', t: `Grey and brown are both recessive, so it's lowercase r, lowercase r, lowercase e, lowercase e. The gametes are... lowercase r, lowercase r, lowercase e, lowercase e?` },
    { s: 'TYLA', t: `[encouragingly] That's the genotype of the butterfly. A gamete is haploid. How many alleles of each gene does it carry?` },
    { s: 'MICHAEL', t: `Just one of each. So the gamete is lowercase r, lowercase e. And since every gamete is the same, that's the only answer.` },
    { s: 'TYLA', t: `Correct. [whispers] One allele per gene in every gamete. That's Section A — fifty marks.` },
  ],
},

{
  num: 2,
  file: 'Paper 2 Nov 2024 - Part 2 - Question 2',
  segs: [
    { s: 'AMELIA', t: `Exam Walkthrough, Life Sciences Paper 2, November 2024. Part 2: Question 2` },
    { s: 'TYLA', t: `Section B, Question 2.1. 2.1.1: "Identify molecule Y." One mark.` },
    { s: 'MICHAEL', t: `It's being built on the template strand, and it has U in it. So mRNA — messenger RNA.` },
    { s: 'TYLA', t: `Correct. 2.1.2: "Describe the process that resulted in the formation of molecule Y." Six marks.` },
    { s: 'MICHAEL', t: `That's transcription. The DNA double helix unwinds, and the hydrogen bonds break, so it unzips into two separate strands. One strand is used as a template. Free RNA nucleotides from the nucleoplasm pair up with the template to form mRNA, which is complementary to the DNA — A with U, and G with C.` },
    { s: 'TYLA', t: `[impressed] Six out of six. Notice how it's an ordered story, with key words like "unwinds," "unzips," "template" and "free RNA nucleotides." Each one is a mark. 2.1.3: "Give ONE structural difference between molecule X and molecule Y." Two marks.` },
    { s: 'MICHAEL', t: `DNA has deoxyribose, and RNA has ribose.` },
    { s: 'TYLA', t: `[seriously] That's half the answer. Which one is X?` },
    { s: 'MICHAEL', t: `Oh — I need to name the molecules from the question. Molecule X, the DNA, contains deoxyribose sugar, whereas molecule Y, the mRNA, contains ribose sugar.` },
    { s: 'TYLA', t: `Two marks. Double-stranded versus single-stranded, or thymine versus uracil, were also accepted — but only the first difference is marked. 2.1.4: "Give the sequence of bases at triplet Z on strand 2." One mark.` },
    { s: 'MICHAEL', t: `Z is opposite U A C on the mRNA. The DNA complementary to U A C is... A T G.` },
    { s: 'TYLA', t: `[encouragingly] A T G is on the template — strand 1. Z is on strand 2, the other DNA strand. What's opposite A T G?` },
    { s: 'MICHAEL', t: `[slowly] So strand 2 is complementary to the template... which makes it the same as the mRNA, except with T instead of U. So it's T A C.` },
    { s: 'TYLA', t: `[delighted] Correct — T A C. [whispers] The non-template strand matches the mRNA, with T for U. That one catches a lot of students. 2.1.5: "Identify the first and last amino acids coded for by this section of molecule Y." Two marks.` },
    { s: 'MICHAEL', t: `The first codon is A G A — arginine. The last is C C A — proline.` },
    { s: 'TYLA', t: `Two marks. Only the first and last — you don't need tyrosine in the middle.` },
    { s: 'TYLA', t: `Question 2.2. 2.2.1: "Identify the phase of meiosis shown." One mark.` },
    { s: 'MICHAEL', t: `The chromatids are being pulled to the poles — anaphase two.` },
    { s: 'TYLA', t: `Correct. 2.2.2: "State ONE difference between the phase shown in the diagram and the same phase in meiosis one." Two marks.` },
    { s: 'MICHAEL', t: `In anaphase one, the chromosome pairs separate and move to the poles, whereas in anaphase two, the chromatids of each chromosome separate.` },
    { s: 'TYLA', t: `Two marks. Centromeres don't split in anaphase one but do split in anaphase two was also accepted. 2.2.3: "Identify structure..." (a) A and (b) B.` },
    { s: 'MICHAEL', t: `(a) A is the centriole. (b) B is a spindle fibre.` },
    { s: 'TYLA', t: `Correct. 2.2.4: "Describe the role of structure B during cell division." Two marks.` },
    { s: 'MICHAEL', t: `It attaches to the centromere and pulls the chromatids to opposite poles.` },
    { s: 'TYLA', t: `Two marks. 2.2.5 — the drawing. "Draw a labelled diagram representing the cell above as it would have appeared in metaphase two. NOTE: The diagram should show the correct shading and include labels — exclude labels for A and B." Five marks. Michael, talk me through your drawing.` },
    { s: 'MICHAEL', t: `I can see four chromatids moving to the poles, so I'd draw... four chromosomes on the equator.` },
    { s: 'TYLA', t: `[seriously] Stop and count properly. In anaphase two, each thing moving is a single chromatid. Before they separated, they were joined in pairs at a centromere. So how many chromosomes were there in metaphase two?` },
    { s: 'MICHAEL', t: `Four chromatids, in pairs... so two chromosomes, each made of two chromatids. And in metaphase two, they're unpaired — in a single row on the equator.` },
    { s: 'TYLA', t: `Good. Now the shading — look at the colours of the chromatids on screen.` },
    { s: 'MICHAEL', t: `The two dark chromatids came from one chromosome, and the two light ones from the other. But one of the chromatids in each has a tip of the other colour — that's from crossing over. So one chromosome is shaded with an unshaded tip, and the other is unshaded with a shaded tip.` },
    { s: 'TYLA', t: `[impressed] Exactly. Here's the mark breakdown. One mark for the position — a single row on the equator. One for the number — two unpaired chromosomes. One for the shading — matching the chromatids you were given. And two marks for any two correct labels, like cell membrane, cytoplasm, chromosome, centromere or chromatid — but not the centriole or spindle fibre, because the question excluded A and B.` },
    { s: 'MICHAEL', t: `[whispers] So the labels the question excluded don't earn any marks. I'd have labelled the spindle fibre first.` },
    { s: 'TYLA', t: `And it would have earned nothing. Read the note under every drawing question — it tells you exactly what the examiner wants.` },
    { s: 'TYLA', t: `Question 2.3. 2.3.1: "According to the data, which is the most common blood group among the donors?" One mark.` },
    { s: 'MICHAEL', t: `O — forty-eight percent.` },
    { s: 'TYLA', t: `Correct. 2.3.2: "Name the type of dominance shown by the inheritance of blood group A." One mark.` },
    { s: 'MICHAEL', t: `Blood groups are co-dominance.` },
    { s: 'TYLA', t: `[playfully] Blood group AB is co-dominance. But the question asked about blood group A. What are the genotypes for A?` },
    { s: 'MICHAEL', t: `Capital I A, capital I A — or capital I A, lowercase i. Oh... the capital I A hides the lowercase i. So for blood group A, it's complete dominance.` },
    { s: 'TYLA', t: `Correct — complete dominance. The blood group system has both. I A and I B are co- dominant with each other, but both are completely dominant over i. Read which blood group the question names. 2.3.3: "Explain how it is possible for a man with blood group A and a woman with blood group AB to have a child with blood group B." Five marks.` },
    { s: 'MICHAEL', t: `The woman is capital I A, capital I B, so she can give the child the I B allele. The man has blood group A, but he must be heterozygous — capital I A, lowercase i — so he can give the lowercase i. The child gets I B from the mother and i from the father, so the child is capital I B, lowercase i — heterozygous for blood group B.` },
    { s: 'TYLA', t: `[delighted] Five out of five. The key insight is that the father must be heterozygous — otherwise he couldn't pass on the recessive allele. 2.3.4: "Plot a bar graph to represent the data in the table." Six marks. Michael, describe your graph.` },
    { s: 'MICHAEL', t: `Bar graph. Blood groups on the x-axis — O, A, B, AB. Percentage of donors on the y- axis. Bars at 48, 38, 10 and 4. And a caption: "The percentage of blood donors for different blood groups."` },
    { s: 'TYLA', t: `Nearly. Your caption is missing two things from the table's heading. Where and when?` },
    { s: 'MICHAEL', t: `South Africa, and 2018. So: "The percentage of blood donors for different blood groups in South Africa in 2018."` },
    { s: 'TYLA', t: `Now it's six marks. One for the type — a bar graph, with separate bars. One for the caption — both variables, plus South Africa and 2018. One for the axis labels, including the unit, which is percent. One for the scale — bars of equal width with equal gaps, and an even scale on the y-axis. And two for plotting — all four bars correct.` },
    { s: 'MICHAEL', t: `[whispers] Type, caption, labels, scale, plotting. Same as last year.` },
    { s: 'TYLA', t: `Question 2.4. "Muscular dystrophy is a genetic condition that causes muscles to weaken over time. It is caused by a recessive allele on the X chromosome, X lowercase d. The dominant allele, X capital D, results in normal muscle formation." 2.4.1: "How many offspring do individuals 1 and 2 have?" One mark.` },
    { s: 'MICHAEL', t: `Three — individuals 3, 4 and 5.` },
    { s: 'TYLA', t: `Correct — 7 and 8 are grandchildren. 2.4.2: "Give the..." (a) "Phenotype of individual 1." (b) "Genotype of individual 2." One mark each.` },
    { s: 'MICHAEL', t: `(a) A male without muscular dystrophy. (b) Individual 2 is an unaffected female, but her son, 4, has muscular dystrophy. Sons get their X from their mother, so she must be a carrier: X capital D, X lowercase d.` },
    { s: 'TYLA', t: `[impressed] Two marks — and you included "male" in the phenotype, because the key shows sex. 2.4.3: "Explain why more males than females are likely to have muscular dystrophy." Four marks.` },
    { s: 'MICHAEL', t: `Males have only one X chromosome, so they need only one recessive allele to have the condition — nothing can mask it. Females have two X chromosomes, so they need two recessive alleles. In a female, a dominant allele on the other X would mask the recessive one.` },
    { s: 'TYLA', t: `Four marks. 2.4.4: "Parents 5 and 6 plan to have another child. Use a genetic cross to show the percentage chance of having a child with muscular dystrophy." Six marks.` },
    { s: 'MICHAEL', t: `Okay. Individual 5 is unaffected, but her sons 7 and 8 are affected, so she's a carrier: X capital D, X lowercase d. Individual 6 is an unaffected male: X capital D, Y. Phenotypes: female without muscular dystrophy, crossed with male without muscular dystrophy. Meiosis. Gametes: X capital D and X lowercase d, crossed with X capital D and Y. Fertilisation. Offspring: X capital D X capital D; X capital D Y; X capital D X lowercase d; and X lowercase d Y. One of the two boys is affected — so a fifty percent chance.` },
    { s: 'TYLA', t: `[seriously] Your cross is perfect — but read the question again. The chance of having a child with muscular dystrophy.` },
    { s: 'MICHAEL', t: `Oh... "a child," not "a son." Out of four possible children, only one — X lowercase d, Y — is affected. So twenty-five percent.` },
    { s: 'TYLA', t: `Correct — twenty-five percent, and that answer is the compulsory mark. Fifty percent is the chance for a son. The rest of the marks come from the layout: the parents' phenotypes and genotypes, the gametes, the offspring genotypes, the offspring phenotypes, the generation labels, and "meiosis" and "fertilisation." Since 5 and 6 are the second generation in this family, the memo labels the parents and offspring P two and F two.` },
  ],
},

{
  num: 3,
  file: 'Paper 2 Nov 2024 - Part 3 - Question 3 and Wrap-Up',
  segs: [
    { s: 'AMELIA', t: `Exam Walkthrough, Life Sciences Paper 2, November 2024. Part 3: Question 3 and Wrap-Up` },
    { s: 'TYLA', t: `Question 3 — the last fifty marks. 3.1, the Bt maize passage. 3.1.1: "Describe how the Bt maize is genetically modified to be insect resistant." Three marks.` },
    { s: 'MICHAEL', t: `They spray the maize with the Bt toxin from the bacteria.` },
    { s: 'TYLA', t: `[laughs] That's using a pesticide — not genetic modification. The modification happens to the maize's DNA.` },
    { s: 'MICHAEL', t: `Right. The gene that produces the Bt toxin is cut from the bacterial DNA and inserted into the maize DNA. This recombinant DNA makes the maize plant produce the Bt toxin itself.` },
    { s: 'TYLA', t: `Three marks. Genetic modification always means moving a gene into another organism's DNA. 3.1.2: "Explain TWO reasons why farmers might want to grow Bt maize." Four marks.` },
    { s: 'MICHAEL', t: `Fewer crops are damaged by insects, and farmers need fewer pesticides.` },
    { s: 'TYLA', t: `[encouragingly] That's two reasons — but it says "explain," and it's four marks. Each reason needs a consequence.` },
    { s: 'MICHAEL', t: `Okay. Fewer crops are damaged, which leads to an increased yield — more food and more profit. And there's a reduced need for pesticides, so farmers save money, and there are fewer toxins in the environment.` },
    { s: 'TYLA', t: `Four marks. Two times two — a reason, and what it leads to.` },
    { s: 'TYLA', t: `Question 3.2, the phylogenetic tree. 3.2.1: "Give the LETTER representing the common ancestor for ALL the species shown in the phylogenetic tree." One mark.` },
    { s: 'MICHAEL', t: `The one at the very bottom, where every branch meets — V.` },
    { s: 'TYLA', t: `Correct. 3.2.2: "Identify the species that is most closely related to Old-world monkeys." One mark.` },
    { s: 'MICHAEL', t: `Orangutans — they're right next to the Old-world monkeys at the top.` },
    { s: 'TYLA', t: `[seriously] That's the classic tree trap. The order of names along the top doesn't show how related they are. Trace the branches down from the Old-world monkeys. Where do they first join another species?` },
    { s: 'MICHAEL', t: `[slowly] The Old-world monkey line goes all the way down to U... and the other line from U goes up to the gibbons. So the answer is gibbons.` },
    { s: 'TYLA', t: `Correct — gibbons. 3.2.3: "Give a reason for your answer to QUESTION 3.2.2." One mark.` },
    { s: 'MICHAEL', t: `They share the most recent common ancestor, U.` },
    { s: 'TYLA', t: `Correct. [whispers] Follow the branches, not the names. 3.2.4: "Identify THREE species that share the common ancestor R." Three marks.` },
    { s: 'MICHAEL', t: `Above R... humans, chimpanzees and gorillas.` },
    { s: 'TYLA', t: `Three marks. 3.2.5: "State THREE characteristics of the upper limbs that humans share with group P." Three marks. Group P is the chimpanzees, gorillas and orangutans.` },
    { s: 'MICHAEL', t: `An opposable thumb, nails instead of claws, and freely rotating arms.` },
    { s: 'TYLA', t: `Three marks. Long upper arms, bare fingertips, fingerprints and five digits were also accepted. And notice the word "upper limbs" — anything about the skull or eyes would get nothing.` },
    { s: 'TYLA', t: `Question 3.3. Researchers gave four thousand one hundred and forty-six healthy three-year- olds either cow's milk or soy milk every day for seven years, then compared their heights. 3.3.1: "Identify the..." (a) "Independent variable." (b) "Dependent variable." One mark each.` },
    { s: 'MICHAEL', t: `(a) The type of milk. (b) The height of the children.` },
    { s: 'TYLA', t: `Correct. 3.3.2: "Name the type of variation displayed by the height of a person." One mark.` },
    { s: 'MICHAEL', t: `Continuous variation — there's a whole range of heights, not separate categories.` },
    { s: 'TYLA', t: `Correct. 3.3.3: "State TWO planning steps that the researchers had to consider at the beginning of this investigation." Two marks.` },
    { s: 'MICHAEL', t: `Decide on the sample size, and get parental consent.` },
    { s: 'TYLA', t: `[impressed] Two marks — and good thinking. The children were three years old, so their parents had to agree. The memo accepted lots of planning steps, like choosing the milk supplier, deciding on the duration and training research assistants. 3.3.4: "State THREE ways in which the validity of this investigation was ensured." Three marks.` },
    { s: 'MICHAEL', t: `Same age, same gender, and the same amount of milk.` },
    { s: 'TYLA', t: `Three marks. 3.3.5: "State ONE factor that could have negatively affected the validity of this investigation." One mark.` },
    { s: 'MICHAEL', t: `Genetics — some children might just be naturally taller, whatever milk they drink.` },
    { s: 'TYLA', t: `Correct. Not measuring their starting height, or the difficulty of keeping conditions the same for seven years, were also accepted. 3.3.6: "How did the researchers ensure the reliability of the results?" One mark.` },
    { s: 'MICHAEL', t: `A large sample — two thousand and seventy-three children in each group.` },
    { s: 'TYLA', t: `Correct. 3.3.7: "State the conclusion for this investigation." Two marks.` },
    { s: 'MICHAEL', t: `Cow's milk is better than soy milk.` },
    { s: 'TYLA', t: `[playfully] Better at what? A conclusion has to answer the aim, so it needs both variables.` },
    { s: 'MICHAEL', t: `Drinking cow's milk leads to increased height in children compared to soy milk.` },
    { s: 'TYLA', t: `Two marks. The independent variable — type of milk — and the dependent variable — height — are both in the sentence.` },
    { s: 'TYLA', t: `Question 3.4, the Homo erectus passage. 3.4.1: "Describe how the fossils of Homo erectus are used to support the 'Out-of-Africa' hypothesis." Three marks.` },
    { s: 'MICHAEL', t: `The oldest Homo erectus fossils were found in Africa, while younger fossils were found in other parts of the world, like Asia. That shows Homo erectus migrated out of Africa.` },
    { s: 'TYLA', t: `Three marks — oldest in Africa, younger elsewhere, so they migrated. 3.4.2: "Describe how all OTHER fossil evidence is used to support the 'Out-of-Africa' hypothesis." Four marks.` },
    { s: 'MICHAEL', t: `"Other" — so not Homo erectus. Ardipithecus fossils were found in Africa only. Australopithecus fossils were found in Africa only. Homo habilis fossils were found in Africa only. And the oldest Homo sapiens fossils were found in Africa, with younger ones in other parts of the world.` },
    { s: 'TYLA', t: `[delighted] Four marks — and you didn't repeat Homo erectus, which would have earned nothing. 3.4.3: "Use the information in the passage regarding Homo erectus and tabulate TWO differences between the features of Homo erectus and Homo sapiens." Five marks.` },
    { s: 'MICHAEL', t: `A table with columns for Homo erectus and Homo sapiens. Homo erectus has a smaller brain, Homo sapiens a larger brain. Homo erectus has a prominent jaw...` },
    { s: 'TYLA', t: `[encouragingly] Stop — is the jaw in the passage?` },
    { s: 'MICHAEL', t: `No. The passage mentions the brow ridge. So Homo erectus has prominent brow ridges, and Homo sapiens has reduced brow ridges.` },
    { s: 'TYLA', t: `Five marks — two for each difference, and one for the table itself. "Use the information in the passage" means the true facts you know from outside the passage won't count. 3.4.4: "What observation of the skull of Homo erectus would have led scientists to conclude that Homo erectus was bipedal?" One mark.` },
    { s: 'MICHAEL', t: `The foramen magnum is in a more forward position.` },
    { s: 'TYLA', t: `Correct. The question said "of the skull," so the S-shaped spine or the pelvis wouldn't count.` },
    { s: 'TYLA', t: `Last question — 3.5, the Chernobyl wolves. 3.5.1: "What is a mutation?" One mark.` },
    { s: 'MICHAEL', t: `A change in the genetic composition of an organism.` },
    { s: 'TYLA', t: `Correct. 3.5.2: "What effect does exposure to high radiation have on animals?" One mark.` },
    { s: 'MICHAEL', t: `According to the passage, it causes cancer — or death.` },
    { s: 'TYLA', t: `Correct. 3.5.3: "Use Darwin's theory of natural selection to explain the development of immunity to cancer in these wolves." Seven marks.` },
    { s: 'MICHAEL', t: `The radiation caused the wolves to develop a mutation so they could survive, and they passed it on to their pups.` },
    { s: 'TYLA', t: `[seriously] That's the trap. You've said the environment caused the useful change because the wolves needed it. That's not Darwin. For Darwin, the variation is already in the population before the selection happens.` },
    { s: 'MICHAEL', t: `[sighs] Start with variation. Okay. There was variation in the wolf population — some had the mutation that made them immune to cancer, and some did not. When they were exposed to the radiation, the wolves without the mutation died. The wolves with the mutation survived and reproduced, and passed on the allele for immunity to their offspring. So the next generation had a higher proportion of wolves that were immune to cancer.` },
    { s: 'TYLA', t: `[delighted] Seven out of seven. Variation, selection pressure, the unsuited die, the suited survive and reproduce, the allele is passed on, and the proportion goes up. Seven marks means you need every link in that chain. And that's the whole paper.` },
    { s: 'TYLA', t: `[warmly] Michael — that's both 2024 papers done. How do you feel?` },
    { s: 'MICHAEL', t: `[laughs] Like my Punnett squares need a holiday. But honestly, I didn't lose marks on the cross itself — I lost them on what the question asked for.` },
    { s: 'TYLA', t: `That's the theme of this whole series. Top traps from this paper — go.` },
    { s: 'MICHAEL', t: `In Section A: "heterozygous dominant" isn't a real term. Biological evolution is the gradual change; speciation is a new species. Watch for swapped columns in comparison tables. Dart found the Taung Child, Broom found Mrs Ples. Translation makes a protein, not amino acids. "Paired chromosomes at the equator" means metaphase one. Random mating is a source of variation too. "Full name" means thymine, not T. "ALL possible genotypes" means homozygous and heterozygous. And a gamete has one allele per gene.` },
    { s: 'TYLA', t: `Keep going — Section B.` },
    { s: 'MICHAEL', t: `A difference names both molecules. The non-template strand matches the mRNA, with T instead of U. In anaphase two, count chromatids, then halve them to get chromosomes. Don't label what the question excluded. Blood group A is complete dominance — only AB is co-dominance. A bar graph caption needs where and when. "A child" isn't "a son" — twenty-five percent, not fifty. Genetic modification moves a gene into DNA. Follow the branches of a tree, not the names along the top. A conclusion needs both variables. "Other" fossils means don't repeat the one you just used. "Use the passage" means use the passage. And natural selection starts with variation that's already there.` },
    { s: 'TYLA', t: `[amazed] ...That's four full papers of traps. And to everyone listening — you've now seen how examiners think. They reuse the same tricks: swapped columns, one key word, the right fact in the wrong place. Once you know the tricks, you'll spot them in your own exam.` },
    { s: 'MICHAEL', t: `[playfully] So I'm basically an examiner now.` },
    { s: 'TYLA', t: `[laughs] Let's not go that far. Read the question, count the marks, and show your working. We'll catch you in the next episode.` },
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

  console.log(`Life, Decoded — Exam Walkthrough Paper 2 Nov 2024 (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

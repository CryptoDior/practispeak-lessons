/**
 * Life, Decoded — Exam Walkthrough: Life Sciences Paper 2, November 2025 — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-exam-paper2-nov2025-audio.mjs 1 2 3
 *
 * Three output MP3s (each opens with Amelia announcing the title):
 *   1. Section A                  — Intro + Parts 1-6
 *   2. Question 2                 — Parts 7-11
 *   3. Question 3 and Wrap-Up     — Parts 12-15 + Outro
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
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_1 to .env.local and run with: node --env-file=.env.local scripts/generate-life-decoded-exam-paper2-nov2025-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'Life-Decoded-Exam-Walkthrough-Paper-2');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'life-decoded-exam-paper2-nov2025');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'Paper 2 Nov 2025 - Part 1 - Section A',
  segs: [
    { s: 'AMELIA', t: `Exam Walkthrough, Life Sciences Paper 2, November 2025. Part 1: Section A` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to LIFE, DECODED. Last time we survived Paper 1. Today, it's the second half: the National Senior Certificate Life Sciences Paper 2, November 2025.` },
    { s: 'MICHAEL', t: `[nervous laugh] Round two. And this is the paper with genetics crosses, isn't it?` },
    { s: 'TYLA', t: `[playfully] It is. Paper 2 covers DNA and protein synthesis, meiosis, genetics and inheritance, and evolution — both natural selection and human evolution. Same format as before: one hundred and fifty marks, two and a half hours. Section A is fifty marks of short questions, and Section B has two questions of fifty marks each.` },
    { s: 'MICHAEL', t: `And the same rules — I answer, you check me against the memo, and everyone learns from my mistakes.` },
    { s: 'TYLA', t: `Exactly. Every diagram, table and graph will be on screen as we go. Pause after each question and try it yourself before Michael answers. And remember the marking rules from last time — only the first answers count, "tabulate" means a table, letter means letter, and units are marked separately. Today I'll add one more: in genetics crosses, there are marks for the layout itself, not just the answer.` },
    { s: 'MICHAEL', t: `Noted. Let's go.` },
    { s: 'TYLA', t: `Question 1.1, ten multiple-choice questions, two marks each. Question 1.1.1: "A gene is..." A, the complete set of chromosomes of an organism. B, a segment on a chromosome, coding for a characteristic. C, the haploid number of chromosomes in a cell. D, a triplet of bases that codes for an amino acid.` },
    { s: 'MICHAEL', t: `B — a segment on a chromosome that codes for a characteristic.` },
    { s: 'TYLA', t: `Correct, B. And notice D — a triplet of bases that codes for an amino acid. That's a base triplet, or on mRNA, a codon — much smaller than a gene. Question 1.1.2: "The significance of DNA replication is that the cells formed at the end of mitosis will..." A, be genetically identical. B, contain half the number of chromosomes. C, be genetically different. D, have double the number of chromosomes.` },
    { s: 'MICHAEL', t: `Mitosis makes identical cells, and replication copies the DNA exactly. A.` },
    { s: 'TYLA', t: `Correct, A. Options B and C describe meiosis, not mitosis. Question 1.1.3: "Which ONE of the following statements is a feature of punctuated equilibrium?" A, individual organisms adapt to changes in the environment. B, the inheritance of acquired characteristics. C, there are long periods of little or no change in a population. D, the more a structure is used, the more it develops.` },
    { s: 'MICHAEL', t: `[confidently] C — long periods of little or no change. And B and D are both Lamarck — use and disuse, and inheritance of acquired characteristics.` },
    { s: 'TYLA', t: `[delighted] Correct, C — and you spotted the Lamarck decoys. A is also wrong, because individuals don't evolve — populations do. Question 1.1.4: "Haemophilia is..." A, characterised by the inability to distinguish between red and green. B, caused by a mutation of an allele on the X- chromosome. C, caused by non-disjunction of chromosomes during meiosis. D, caused by an allele carried on an autosome.` },
    { s: 'MICHAEL', t: `A is colour-blindness, so not that. Haemophilia is sex-linked — on the X chromosome. B.` },
    { s: 'TYLA', t: `Correct, B. Each wrong option describes a different disorder: A is red-green colour- blindness, C is how Down syndrome happens, and D would make it autosomal — like albinism. Know which mechanism goes with which disorder. Question 1.1.5: "Which ONE of the following is an example of a heterozygous genotype?" A, X lowercase r, X lowercase r. B, capital B, capital B. C, capital R, capital W. D, lowercase a, lowercase a.` },
    { s: 'MICHAEL', t: `Heterozygous means two different alleles. A is two lowercase r's, B is two capital B's, D is two lowercase a's — all the same. C has R and W — different. C.` },
    { s: 'TYLA', t: `Correct, C. Don't be put off by the two capital letters. R and W are the notation for co- dominance or incomplete dominance, where neither allele is recessive. They're still two different alleles, so the genotype is heterozygous.` },
    { s: 'TYLA', t: `Questions 1.1.6 and 1.1.7 refer to the diagram of DNA replication on screen. 1.1.6: "Which ONE of the following combinations CORRECTLY identifies molecules 1, 4 and 5?" A, nucleotide, deoxyribose, phosphate. B, nitrogenous base, phosphate, deoxyribose. C, nucleotide, phosphate, deoxyribose. D, nitrogenous base, deoxyribose, phosphate.` },
    { s: 'MICHAEL', t: `Molecule 1 is circled — it's a free unit with a phosphate, a sugar and a base, so a whole nucleotide. Molecule 4 points to the pentagon — that's the sugar, deoxyribose. And molecule 5 is the small circle — phosphate. So nucleotide, deoxyribose, phosphate. A.` },
    { s: 'TYLA', t: `[impressed] Correct, A. The shape code in DNA diagrams is almost always the same: pentagon = sugar, small circle = phosphate, rectangle = nitrogenous base. And the circled group of all three together is a nucleotide, not just a base. 1.1.7: "Which ONE of the following combinations is CORRECT for molecules 2 and 3?" A, T and A. B, A and A. C, T and G. D, A and C.` },
    { s: 'MICHAEL', t: `[hesitantly] I need to find the partner bases... Molecule 2 and molecule 3 are on the other strand, opposite thymine bases. T always pairs with A. So both are A. B.` },
    { s: 'TYLA', t: `Correct, B. Line each unknown base up with its partner on the opposite strand, then apply the rule — A with T, G with C. Now, Questions 1.1.8 and 1.1.9 are a dihybrid cross.` },
    { s: 'TYLA', t: `"In a certain plant species, one gene controls stem colour and another controls plant height. The stem colour can be brown, capital B, or red, lowercase b, while the plant height can be tall, capital T, or short, lowercase t." Plant 1 has a brown stem and is short. Plant 2 has a red stem and is tall. "When plant 1 was crossed with plant 2, some of their offspring were red and short." 1.1.8: "Which ONE of the following represents the genotypes of plant 1 and plant 2?"` },
    { s: 'MICHAEL', t: `Okay, let me reason it through. Some offspring are red and short — both recessive — so they must be lowercase b, lowercase b, lowercase t, lowercase t. That means each parent gave them a lowercase b and a lowercase t.` },
    { s: 'TYLA', t: `[encouragingly] Keep going — that's exactly the right starting point.` },
    { s: 'MICHAEL', t: `Plant 1 is brown, so it has at least one capital B. It must also carry a lowercase b to pass on. So capital B, lowercase b. And it's short, so lowercase t, lowercase t. Plant 2 is red — lowercase b, lowercase b. And tall, but it passed on a lowercase t, so capital T, lowercase t. So plant 1 is capital B, lowercase b, lowercase t, lowercase t... and plant 2 is lowercase b, lowercase b, capital T, lowercase t. That's option B.` },
    { s: 'TYLA', t: `[delighted] Correct, B. The trick for any "work out the parents" question: start with the recessive offspring. A recessive phenotype tells you the full genotype, and that tells you what each parent must carry. 1.1.9: "The number of possible different genotypes expected in the offspring from this cross is..." A, four. B, eight. C, nine. D, sixteen.` },
    { s: 'MICHAEL', t: `A dihybrid cross has a sixteen-square Punnett square... so sixteen? D?` },
    { s: 'TYLA', t: `[encouragingly] Careful. Is this the classic cross between two double heterozygotes? Work out the gametes first.` },
    { s: 'MICHAEL', t: `[groans] Right. Plant 1 makes two types of gametes — capital B with lowercase t, and lowercase b with lowercase t. Plant 2 makes two types — lowercase b with capital T, and lowercase b with lowercase t. So that's only two times two — four combinations. And they're all different. So four. A.` },
    { s: 'TYLA', t: `Correct, A. Sixteen and nine are the numbers students memorise from the classic dihybrid cross, so they jump at them. But this cross isn't the classic one. Count the gametes, and the number of possible genotypes follows. And the word "different" in bold was a warning. Last multiple choice — 1.1.10: "A rare form of rickets is caused by a dominant allele on the X-chromosome. Which ONE of the following statements is TRUE about the inheritance of this form of rickets?" A, if the father is affected, all his sons will be affected. B, it will be expressed more frequently in males than in females, since males have only one X-chromosome. C, if the father is affected, all his daughters will be affected. D, it will only be expressed in females, since they have two X- chromosomes.` },
    { s: 'MICHAEL', t: `Sex-linked... usually more common in males. B?` },
    { s: 'TYLA', t: `[seriously] That's the trap. B is true for recessive sex-linked disorders, like haemophilia. But this allele is dominant. Think it through — what does a father give his daughters?` },
    { s: 'MICHAEL', t: `[slowly, putting it together] A father gives his only X chromosome to every daughter... and his Y to every son. So if his X carries the dominant allele, every daughter gets it — and because it's dominant, every daughter is affected. And his sons get his Y, so they're not affected through him. So C.` },
    { s: 'TYLA', t: `[impressed] Correct, C. The key fact for any sex-linked question: fathers pass their X to all daughters and their Y to all sons. Option A is impossible for that reason.` },
    { s: 'TYLA', t: `Question 1.2: nine biological terms, one mark each. Rapid fire. 1.2.1: "The bond formed between two amino acids during protein synthesis."` },
    { s: 'MICHAEL', t: `Peptide bond.` },
    { s: 'TYLA', t: `Correct. 1.2.2: "An organelle that contains DNA which is used in tracing female ancestry."` },
    { s: 'MICHAEL', t: `Mitochondrial DNA.` },
    { s: 'TYLA', t: `[encouragingly] Read it again — it asks for the organelle.` },
    { s: 'MICHAEL', t: `Oh — the mitochondrion.` },
    { s: 'TYLA', t: `Correct. "Mitochondrial DNA" is the molecule; the organelle is the mitochondrion. Answer exactly what's asked. 1.2.3: "Undifferentiated cells in animals that have the potential to become any type of tissue."` },
    { s: 'MICHAEL', t: `Stem cells.` },
    { s: 'TYLA', t: `Correct. 1.2.4: "A change in the sequence of nitrogenous bases resulting in the formation of a different protein."` },
    { s: 'MICHAEL', t: `Mutation.` },
    { s: 'TYLA', t: `Correct — gene mutation. 1.2.5: "The natural shape of a DNA molecule."` },
    { s: 'MICHAEL', t: `Double helix.` },
    { s: 'TYLA', t: `Correct. 1.2.6: "The permanent disappearance of a species from Earth."` },
    { s: 'MICHAEL', t: `Extinction.` },
    { s: 'TYLA', t: `Correct. 1.2.7: "A type of variation with a range of intermediate phenotypes."` },
    { s: 'MICHAEL', t: `Continuous variation.` },
    { s: 'TYLA', t: `Correct. 1.2.8: "An allele that is expressed in a phenotype in the heterozygous condition."` },
    { s: 'MICHAEL', t: `Dominant allele.` },
    { s: 'TYLA', t: `Correct. And 1.2.9: "The position of an allele on a chromosome."` },
    { s: 'MICHAEL', t: `Locus.` },
    { s: 'TYLA', t: `[delighted] Correct — nine marks.` },
    { s: 'TYLA', t: `Question 1.3 — A only, B only, both, or none. Test each item separately. 1.3.1: "The phase of meiosis during which non-disjunction can occur." A, anaphase one. B, anaphase two.` },
    { s: 'MICHAEL', t: `Non-disjunction is when chromosomes don't separate properly. In anaphase one, homologous chromosomes separate... and in anaphase two, the chromatids separate. It could fail in either. Both A and B.` },
    { s: 'TYLA', t: `Correct — both. 1.3.2: "A representation of the number, shape and arrangement of all the chromosomes in the nucleus." A, phylogenetic tree. B, karyotype.` },
    { s: 'MICHAEL', t: `Karyotype — B only. A phylogenetic tree shows evolutionary relationships.` },
    { s: 'TYLA', t: `Correct, B only. 1.3.3: "The alleles of a gene separate into different gametes during meiosis." A, law of independent assortment. B, law of segregation.` },
    { s: 'MICHAEL', t: `Hmm. Both of them are about separating in meiosis... both?` },
    { s: 'TYLA', t: `[encouragingly] Look at the wording — "the alleles of a gene." One gene.` },
    { s: 'MICHAEL', t: `Oh. The law of segregation is about the two alleles of one gene separating. Independent assortment is about different genes sorting independently of each other. So B only.` },
    { s: 'TYLA', t: `Correct — B only. Segregation: one gene, its two alleles separate. Independent assortment: two or more genes, sorting independently. Six marks.` },
    { s: 'TYLA', t: `Question 1.4 shows five cells from the same organism during different phases of mitosis and meiosis — V, W, X, Y and Z. 1.4.1: Identify parts (a) A, (b) B, and (c) C, on cell Y.` },
    { s: 'MICHAEL', t: `(a) A is the outer boundary — the cell membrane. (b) B is one of the lines from the pole — a spindle fibre. (c) C is at the pole — the centriole.` },
    { s: 'TYLA', t: `Correct, all three — the memo also accepts "centrosome" for C. 1.4.2: Which diagram represents a cell during (a) prophase of mitosis, (b) metaphase one, and (c) prophase one?` },
    { s: 'MICHAEL', t: `(b) metaphase one is Y — the chromosomes are lined up in pairs across the middle. For prophase... V and W both have a nuclear membrane and chromosomes condensing. In V, the chromosomes are paired up, and some look like they're crossing over — that's prophase one. In W, they're scattered singly — prophase of mitosis. So (a) W, (b) Y, (c) V.` },
    { s: 'TYLA', t: `[impressed] All correct. The key to telling mitosis from meiosis one: in meiosis one, homologous chromosomes pair up — in prophase one they form pairs and cross over, and in metaphase one they line up in pairs. In mitosis, chromosomes act alone. 1.4.3: "How many chromosomes will there be in each cell at the end of..." (a) mitosis, (b) meiosis one.` },
    { s: 'MICHAEL', t: `I'll count centromeres in one of the cells... six chromosomes. Mitosis keeps the number the same — six. Meiosis one halves it — three.` },
    { s: 'TYLA', t: `Correct — six and three. And notice how you counted: by centromeres, not by arms. A chromosome made of two chromatids still counts as one chromosome.` },
    { s: 'TYLA', t: `Question 1.5 shows a stage of protein synthesis. "Each amino acid — P, Q, R and S — is coded for by a different codon on this mRNA molecule." 1.5.1: Identify (a) the stage of protein synthesis, (b) molecule 1, and (c) organelle Z.` },
    { s: 'MICHAEL', t: `tRNA molecules bringing amino acids to an mRNA strand on a ribosome — that's translation. Molecule 1 is a tRNA. And Z is the ribosome.` },
    { s: 'TYLA', t: `Correct — three marks. 1.5.2: "State the sequence of nitrogenous bases on the DNA molecule for codon..." (a) 3 — one mark — and (b) 4 — two marks.` },
    { s: 'MICHAEL', t: `Codon 3 on the mRNA is G, C, A. The DNA is complementary... G pairs with C, C with G, and A with... U? No wait — this is DNA, so A pairs with T. So C, G, T.` },
    { s: 'TYLA', t: `[delighted] Correct — CGT. And you caught the trap. Going from mRNA back to DNA, an A on the mRNA pairs with T on the DNA, because DNA has no uracil. Now codon 4 — it's blank on the diagram. That's why it's worth two marks.` },
    { s: 'MICHAEL', t: `[curious] So I have to work it out from the tRNAs. Codon 2 is U, A, C. Codon 3 is G, C, A. Codon 5 is C, G, A. The four anticodons are... R's is C, U, A. S's is A, U, G. Q's is C, G, U. And P's is G, C, U. Let me match them. S's anticodon A, U, G pairs with codon 2, U, A, C. Q's anticodon C, G, U pairs with codon 3, G, C, A. P's anticodon G, C, U pairs with codon 5, C, G, A. So R's anticodon — C, U, A — must belong to codon 4. The codon is complementary: G, A, U.` },
    { s: 'TYLA', t: `[encouragingly] And the DNA?` },
    { s: 'MICHAEL', t: `The DNA is complementary to the codon G, A, U — so C, T, A.` },
    { s: 'TYLA', t: `[impressed] Correct — CTA, two marks. That was a three-step chain: anticodon to codon, then codon to DNA. And remember the relay from Episode 1: DNA base triplet, then a complementary mRNA codon, then a complementary tRNA anticodon. 1.5.3: "Which amino acid — P, Q, R or S — is coded for by codon 5?"` },
    { s: 'MICHAEL', t: `Codon 5 is C, G, A — matched by P's anticodon. P.` },
    { s: 'TYLA', t: `Correct, P. That's Section A — fifty marks.` },
  ],
},

{
  num: 2,
  file: 'Paper 2 Nov 2025 - Part 2 - Question 2',
  segs: [
    { s: 'AMELIA', t: `Exam Walkthrough, Life Sciences Paper 2, November 2025. Part 2: Question 2` },
    { s: 'TYLA', t: `Section B, Question 2. Question 2.1 shows the sex chromosomes in a female — two X chromosomes, each made of two chromatids. 2.1.1: "Identify structure A." One mark.` },
    { s: 'MICHAEL', t: `The dark round part holding the chromatids together — the centromere.` },
    { s: 'TYLA', t: `Correct. 2.1.2: "Give the biological term for the sex chromosomes." One mark.` },
    { s: 'MICHAEL', t: `Gonosomes.` },
    { s: 'TYLA', t: `Correct — gonosomes, as opposed to autosomes. 2.1.3: "Describe how these chromosomes would differ in the somatic cells of a male." One mark.` },
    { s: 'MICHAEL', t: `A male has one X chromosome and one Y chromosome instead of two X's.` },
    { s: 'TYLA', t: `Correct. 2.1.4: "An exchange of genetic material takes place at region P." (a) Name the process. (b) Identify the phase during which it takes place. (c) Give ONE reason why it's important. One mark each.` },
    { s: 'MICHAEL', t: `(a) Crossing over. (b) Prophase one. (c) It leads to genetic variation.` },
    { s: 'TYLA', t: `Correct, all three. And for (c), the memo marks only your first reason — so lead with your strongest one. 2.1.5: "Explain how the structure of the chromosomes would differ at the end of meiosis two." Two marks.` },
    { s: 'MICHAEL', t: `At the end of meiosis two, the chromatids have separated — so each one is single, not double. Because the centromere split.` },
    { s: 'TYLA', t: `[delighted] Two marks — they appear as single chromatids, because the centromere split. The memo also accepts a second route — each chromosome will contain some genetic material from the other, because of crossing over. 2.1.6: "Non-disjunction of these chromosomes occurred during meiosis and a gamete with an extra chromosome is formed. If this gamete is fertilised by normal gametes, the resulting zygotes will not be normal. Explain the genetic composition of these zygotes." Three marks.` },
    { s: 'MICHAEL', t: `The zygote will have an extra chromosome... forty-seven.` },
    { s: 'TYLA', t: `[encouragingly] True, but the question is specifically about the sex chromosomes. Which ones end up in the zygote, and how?` },
    { s: 'MICHAEL', t: `Oh. These are the female's sex chromosomes, so non-disjunction gives an egg with two X's. If that egg is fertilised by a sperm carrying a Y, the zygote is X, X, Y. And if it's fertilised by a sperm carrying an X, it's X, X, X.` },
    { s: 'TYLA', t: `[impressed] Three marks — the zygote composition, the ovum with two X chromosomes, and the sperm with a Y or an X. Notice the question said "zygotes" — plural. That was a hint that there's more than one possibility.` },
    { s: 'TYLA', t: `Question 2.2 shows the DNA analysis of a sample from a crime scene, a sample from the victim, and samples from two suspects. 2.2.1: "Name the technique used in this criminal investigation." One mark.` },
    { s: 'MICHAEL', t: `DNA profiling.` },
    { s: 'TYLA', t: `Correct. 2.2.2: "Which ONE of the suspects, 1 or 2, was at the crime scene?" One mark.` },
    { s: 'MICHAEL', t: `Comparing the bands... suspect 1's pattern matches the crime scene sample. Suspect 1.` },
    { s: 'TYLA', t: `Correct. 2.2.3: "Give ONE observable reason for your answer." One mark.` },
    { s: 'MICHAEL', t: `The DNA bands of suspect 1 are identical to the bands of the sample from the crime scene.` },
    { s: 'TYLA', t: `Correct. "Observable" means describe what you can see in the diagram — matching bands. Not a theory about why. 2.2.4: "Give TWO possible reasons why the suspect identified in 2.2.2 might NOT be convicted if only this evidence is used." Two marks.` },
    { s: 'MICHAEL', t: `The evidence could have been planted at the crime scene... and the suspect could have been at the crime scene before the crime was committed.` },
    { s: 'TYLA', t: `Two marks. The memo also accepts human error during the procedure, manipulation of results, contamination of the sample, a sample that's too small, or the suspect having an identical twin. Recognise that last one from Episode 1? Identical twins are the only people with the same DNA profile. 2.2.5: "Explain how the technique named in 2.2.1 is used in paternity testing." Four marks.` },
    { s: 'MICHAEL', t: `You compare the child's DNA with the father's, and if they match, he's the father.` },
    { s: 'TYLA', t: `[seriously] That's the answer most students write, and it gets about one mark. Children don't match either parent completely. Why not?` },
    { s: 'MICHAEL', t: `Because a child gets half their DNA from each parent. Okay — the DNA profiles of the child, the mother and the possible father are compared, since the child inherits fifty percent of their DNA from each parent. All the bands in the child's profile that match the mother are eliminated. Then the remaining bands are checked against the possible father's profile, for matches with the child.` },
    { s: 'TYLA', t: `[delighted] That's full marks. The key idea: first remove the mother's bands, then whatever's left must have come from the father.` },
    { s: 'TYLA', t: `Question 2.3. "CADASIL is an autosomal genetic disorder caused by a dominant allele, capital D. It results in the thickening of the walls of blood vessels." The diagram shows its inheritance in a family. 2.3.1: "Name the type of diagram represented above." One mark.` },
    { s: 'MICHAEL', t: `A pedigree diagram.` },
    { s: 'TYLA', t: `Correct. 2.3.2: "How many offspring do parents 3 and 4 have?" One mark.` },
    { s: 'MICHAEL', t: `Following the line down from 3 and 4... just one — individual 8.` },
    { s: 'TYLA', t: `Correct — one. It's a quick mark, but students sometimes count the grandchildren too. Only count the direct line down from the couple. 2.3.3: Give (a) the phenotype of individual 10, and (b) the genotype of individual 5. One mark each.` },
    { s: 'MICHAEL', t: `(a) Individual 10 is a shaded circle — a female with CADASIL. (b) Individual 5 is an unshaded circle — no CADASIL. Since CADASIL is dominant, not having it means she's homozygous recessive — lowercase d, lowercase d.` },
    { s: 'TYLA', t: `Correct. And for (a), notice you said female with CADASIL, not just "has CADASIL." The phenotype includes everything the key shows. 2.3.4: "Using evidence from the diagram, explain why individuals 1 and 2 are both heterozygous." Four marks.` },
    { s: 'MICHAEL', t: `They both have CADASIL, so they each have at least one dominant allele. But they have children — 5 and 6 — who don't have CADASIL, so those children are lowercase d, lowercase d. That means each child got a recessive allele from each parent. So both parents must carry a recessive allele — capital D, lowercase d.` },
    { s: 'TYLA', t: `[impressed] Four marks: both have CADASIL, so they have a dominant allele; they have unaffected children who are homozygous recessive; so the children inherited a recessive allele from each parent. That's the classic structure for any "explain why the parents are heterozygous" question. 2.3.5: "What is the percentage chance of parents 7 and 8 having another child with CADASIL?" One mark.` },
    { s: 'MICHAEL', t: `Seven has CADASIL — and his parents were both heterozygous, so he could be capital D, capital D or capital D, lowercase d... but wait, he has an unaffected daughter, 9. So he must be capital D, lowercase d. Eight is unaffected — lowercase d, lowercase d. So the cross is capital D, lowercase d times lowercase d, lowercase d — half the children get the D. Fifty percent.` },
    { s: 'TYLA', t: `[delighted] Fifty percent — and you checked the evidence from the children before deciding his genotype. And remember, "another child" doesn't change anything — every child has the same fifty percent chance, no matter how many siblings came before.` },
    { s: 'TYLA', t: `Question 2.4 is a bar graph showing the distribution of blood groups in two ethnic groups in a certain country in twenty twenty-one. 2.4.1: Which blood group (a) is most common in both ethnic groups, and (b) has a higher percentage in ethnic group 1 than in ethnic group 2? One mark each.` },
    { s: 'MICHAEL', t: `(a) O — forty-five percent and fifty-one percent, the tallest bars in both. (b) Group 1 is higher than group 2 for A — forty versus twenty-six. So A.` },
    { s: 'TYLA', t: `Correct — O and A. Read each bar carefully; AB is four and four, so it's equal, not higher. 2.4.2: "State ALL the possible genotypes of eleven percent of the people in ethnic group 1." Two marks.` },
    { s: 'MICHAEL', t: `Eleven percent in group 1 is blood group B. So the genotypes are capital I B, capital I B... and capital I B, lowercase i.` },
    { s: 'TYLA', t: `Correct — two marks. The trap is missing that eleven percent is a blood group you have to read off the graph, and then giving only one genotype when the question says "ALL." 2.4.3: "Ethnic group 1 had a population of three hundred and sixty thousand people in twenty twenty-one. Which blood group — A, B, AB or O — had thirty-nine thousand six hundred people?" Two marks.` },
    { s: 'MICHAEL', t: `Thirty-nine thousand six hundred divided by three hundred and sixty thousand, times a hundred... is eleven percent. That's blood group B again.` },
    { s: 'TYLA', t: `[delighted] Correct — B, two marks. Show that working in the exam, even though only the answer is marked here. 2.4.4: "Explain the inheritance of blood group AB." Three marks.` },
    { s: 'MICHAEL', t: `The allele for blood group A is inherited from one parent, and the allele for blood group B from the other parent. The alleles are co-dominant, so both are equally expressed in the phenotype.` },
    { s: 'TYLA', t: `Three marks. And say co-dominant, not incomplete dominance — in blood group AB, both alleles show fully, not as a blend.` },
    { s: 'TYLA', t: `Question 2.5. "Palomino horses are bred by horse breeders for their coat colour. A palomino has a golden-coloured coat. It is the offspring of a horse with a cream-coloured coat, capital A, and a horse with a chestnut-coloured coat, capital G." 2.5.1: "Name the type of dominance displayed in the inheritance of coat colour in palomino horses." One mark.` },
    { s: 'MICHAEL', t: `Cream and chestnut make golden... that's a blend. Incomplete dominance.` },
    { s: 'TYLA', t: `Correct. 2.5.2: "Explain your answer." Two marks.` },
    { s: 'MICHAEL', t: `Neither the allele for cream nor the allele for chestnut is dominant, so the heterozygous offspring have an intermediate phenotype — the golden palomino coat.` },
    { s: 'TYLA', t: `Two marks. Here's the comparison with the last question: co-dominance, like blood group AB, shows both traits fully. Incomplete dominance, like palomino horses, gives an in-between blend. 2.5.3: "The breeding of horses with desired characteristics is a type of biotechnology." (a) Name this type of biotechnology — one mark. (b) Name the TWO phenotypes of the horses that must be interbred for a one-hundred-percent chance of palomino offspring — two marks.` },
    { s: 'MICHAEL', t: `(a) Artificial selection — or selective breeding. (b) To get a hundred percent palomino, every foal must be A, G. So one parent must be A, A — cream — and the other G, G — chestnut.` },
    { s: 'TYLA', t: `Correct. And a trap here: two palominos crossed together do not give all palominos — you'd get a one-to-two-to-one ratio of cream, palomino and chestnut. 2.5.4 — the big one: "A horse with a cream-coloured coat was crossed with a palomino horse. Use a genetic cross to show the expected phenotypic ratio of the offspring." Six marks. Michael, set it out the way you'd write it.` },
    { s: 'MICHAEL', t: `Okay. P one: phenotype — cream-coloured, crossed with palomino. Genotype — A, A, crossed with A, G. Then meiosis. Gametes — A and A, crossed with A and G. Then fertilisation. F one: genotypes — A, A; A, A; A, G; A, G. Phenotypes — cream-coloured and palomino. Ratio — one to one.` },
    { s: 'TYLA', t: `[impressed] Six out of six. Let me show everyone exactly where those six marks come from, because this layout appears in every Paper 2. One mark for the P one phenotypes. One for the P one genotypes. One for the gametes. One for the F one genotypes. One for the F one phenotypes with the ratio — and that one is compulsory: no correct phenotypic ratio, no full marks. Then one mark for writing the labels P one and F one, and one for writing meiosis and fertilisation.` },
    { s: 'MICHAEL', t: `Wait — so I get marks just for writing "meiosis" and "fertilisation" in the right places?` },
    { s: 'TYLA', t: `[whispers] Free marks that most students forget. [warmly] And you can use a Punnett square for the gametes and offspring instead — that's accepted — but you still need P one, F one, meiosis, fertilisation, and the phenotypic ratio.` },
    { s: 'MICHAEL', t: `And the question asked for the phenotypic ratio — so the final answer should be "one cream-coloured to one palomino," not "two A, A to two A, G."` },
    { s: 'TYLA', t: `Exactly. Genotypic ratio and phenotypic ratio are different things — give the one that's asked. That's Question 2 — fifty marks.` },
  ],
},

{
  num: 3,
  file: 'Paper 2 Nov 2025 - Part 3 - Question 3 and Wrap-Up',
  segs: [
    { s: 'AMELIA', t: `Exam Walkthrough, Life Sciences Paper 2, November 2025. Part 3: Question 3 and Wrap-Up` },
    { s: 'TYLA', t: `Question 3 — the last fifty marks, and it's all evolution. 3.1: "Theories of human evolution are based on the similarities between humans and African apes and also on the anatomical differences between them." 3.1.1: "State TWO characteristics related to vision that humans share with African apes." Two marks.` },
    { s: 'MICHAEL', t: `Eyes in front of the head, and binocular vision.` },
    { s: 'TYLA', t: `Two marks. Stereoscopic vision and colour vision were also accepted. But notice the question says related to vision — if you write "opposable thumbs," that's a shared characteristic, but it gets nothing here. 3.1.2: "Describe TWO differences between the jaws of humans and African apes." Four marks.` },
    { s: 'MICHAEL', t: `Humans have small jaws. Apes have big teeth.` },
    { s: 'TYLA', t: `[laughs] Two facts, but you've made two half-differences. Four marks means two complete differences, and each one has two sides — one mark for humans, one mark for apes. Try again, and pair them up.` },
    { s: 'MICHAEL', t: `Okay. Humans have smaller jaws, whereas African apes have larger jaws. And humans have no diastema, whereas African apes have a diastema.` },
    { s: 'TYLA', t: `[delighted] Four out of four. That word "whereas" forces you to write both sides. Other pairs on the memo: small canines versus large canines, a C-shaped palate versus a U-shaped palate, non-prognathous versus prognathous, and a well-developed chin versus an underdeveloped chin. 3.1.3: "Explain the significance of the position of the foramen magnum, the shape of the spine and the size of the pelvis in bipedalism." Six marks.` },
    { s: 'MICHAEL', t: `In humans, the foramen magnum is further forward. The spine is S-shaped. And the pelvis is short and wide.` },
    { s: 'TYLA', t: `[encouragingly] Three marks — and that's where most students stop. Read the command word again.` },
    { s: 'MICHAEL', t: `"Explain the significance"... oh. I described them. I didn't say why they matter for walking upright.` },
    { s: 'TYLA', t: `Exactly. Three structures, six marks — so each one needs a feature and its purpose.` },
    { s: 'MICHAEL', t: `Right. The foramen magnum is in a more forward position, so the vertebral column attaches below the skull. The spine is S-shaped, which distributes the weight of the upper body better and absorbs shock when walking upright. And the pelvis is short and wide, to support the weight of the upper body above it.` },
    { s: 'TYLA', t: `[impressed] Six out of six. [whispers] Feature, then function — every time it says "significance."` },
    { s: 'TYLA', t: `Question 3.2, the table of average brain volumes. 3.2.1: "How many genera are represented in the table?" One mark.` },
    { s: 'MICHAEL', t: `Five.` },
    { s: 'TYLA', t: `[playfully] Five rows, yes. But the question said genera, not species. Look at the first word of each name.` },
    { s: 'MICHAEL', t: `Oh — Ardipithecus, Australopithecus, Homo, Homo, Homo. So three genera.` },
    { s: 'TYLA', t: `Three. The first word of a scientific name is the genus, the second is the species. Students lose this mark by counting rows. 3.2.2: "Give TWO examples of fossils of Australopithecus africanus found in South Africa." Two marks.` },
    { s: 'MICHAEL', t: `The Taung child and Mrs Ples.` },
    { s: 'TYLA', t: `Two marks. Little Foot was also accepted. 3.2.3: "Give the average brain volume, in millilitres, of the species that was the first to use tools." One mark.` },
    { s: 'MICHAEL', t: `The first tool user was Homo habilis — "handy man." So 609 millilitres.` },
    { s: 'TYLA', t: `Correct. This question combines your content knowledge with reading the table. 3.2.4: "Calculate the percentage increase in the average brain volume between Homo habilis and Homo sapiens. Show ALL working and round off the answer to TWO decimal places." Three marks.` },
    { s: 'MICHAEL', t: `The increase is 1330 minus 609, which is 721. Then 721 divided by 1330, times 100... that's 54,21 percent.` },
    { s: 'TYLA', t: `[seriously] Stop there — that's the most common mistake in percentage-change questions. You divided by the new value. Percentage increase is always divided by the starting value.` },
    { s: 'MICHAEL', t: `So the starting value is Homo habilis... 721 divided by 609, times 100. That's... 118,39 percent.` },
    { s: 'TYLA', t: `[delighted] Three marks. One for the working — 1330 minus 609, over 609. One for times 100. And one for the answer, 118,39 percent, rounded to two decimals, with the percent sign. And don't worry that it's over a hundred percent. It just means the brain more than doubled.` },
    { s: 'MICHAEL', t: `[whispers] Divide by where you started.` },
    { s: 'TYLA', t: `3.2.5: "The brain decomposes after the organism dies. Explain how scientists are able to determine the brain volume of fossils." Three marks.` },
    { s: 'MICHAEL', t: `The brain rots, but the cranium remains and becomes fossilised. The cranium houses the brain, so measuring the cranial capacity gives the brain volume.` },
    { s: 'TYLA', t: `Three marks. 3.2.6: "Explain the relationship between average brain volume and cultural evidence for human evolution." Three marks.` },
    { s: 'MICHAEL', t: `As brain volume increased, intelligence increased, which led to the development of more complex tools.` },
    { s: 'TYLA', t: `Three marks — and notice the chain: bigger brain, more intelligence, then the cultural evidence itself, which is tools. If you stop at "more intelligent," you've missed the link to culture the question asked for.` },
    { s: 'TYLA', t: `Question 3.3, on ratites — flightless birds like ostriches, rheas and emus. 3.3.1 (a): "State what is meant by a biological species." Two marks.` },
    { s: 'MICHAEL', t: `A group of organisms with similar characteristics that can interbreed to produce fertile offspring.` },
    { s: 'TYLA', t: `Two marks — and "fertile" is the key word. A horse and a donkey can interbreed, but a mule is infertile, so they're different species. (b): "Using the information in the extract, explain why the ostrich and emu are considered different species." Two marks.` },
    { s: 'MICHAEL', t: `Ostriches lay their eggs in September, and emus lay from November to April. They breed at different times of the year, so they can't interbreed.` },
    { s: 'TYLA', t: `Two marks. The question said "using the information in the extract," so quoting the months from the extract is the safest way to show you used it. (c): "Name TWO other reproductive isolation mechanisms that would have prevented the rhea and ostrich from interbreeding if they were in the same habitat." Two marks.` },
    { s: 'MICHAEL', t: `Species-specific courtship behaviour, and infertile offspring.` },
    { s: 'TYLA', t: `Two marks. Prevention of fertilisation was also accepted. And the word other means you can't repeat breeding at different times — that's the one you just used. 3.3.2: "Identify the evidence for evolution represented in the diagram." One mark.` },
    { s: 'MICHAEL', t: `It's a map showing where the species live... biogeography.` },
    { s: 'TYLA', t: `Correct. 3.3.3: "Describe how the evidence identified in QUESTION 3.3.2 supports the theory of evolution." Five marks — and it's a story you need to tell in order.` },
    { s: 'MICHAEL', t: `[thoughtfully] Okay. The ratites all had one common ancestor. When continental drift happened, the population of ratites was separated. Each sub-population faced different environmental conditions and underwent natural selection independently... and over time they became different species.` },
    { s: 'TYLA', t: `[impressed] Full marks. That's speciation — a common ancestor, separated by continental drift, with different conditions, natural selection, and new species. Those links are what earn the five marks. And notice it's the same story as geographic speciation — the barrier here is just an ocean created by moving continents.` },
    { s: 'TYLA', t: `Last question of the paper, Michael — 3.4. "Starvation resistance refers to the period for which an organism can go without food before it dies. An investigation was conducted to determine the effect of the availability of food on the starvation resistance in fruit flies." Five thousand fruit flies of the same age were given food. The food was removed, and the time for eighty percent of them to die was recorded. The survivors were fed again and allowed to breed, and the whole thing was repeated for sixty generations. 3.4.1: "State the independent variable for this investigation." One mark.` },
    { s: 'MICHAEL', t: `The title gives it away — "the effect of the availability of food." So availability of food.` },
    { s: 'TYLA', t: `Correct. [whispers] "The effect of" is followed by the independent variable. 3.4.2: "Describe how the dependent variable was measured." One mark.` },
    { s: 'MICHAEL', t: `Starvation resistance.` },
    { s: 'TYLA', t: `[encouragingly] That's what the dependent variable is. The question asks how it was measured.` },
    { s: 'MICHAEL', t: `Oh — they measured the time it took for eighty percent of the flies to die from starvation.` },
    { s: 'TYLA', t: `One mark. 3.4.3: "State ONE controlled variable that was considered when selecting the fruit flies at the beginning of the investigation." One mark.` },
    { s: 'MICHAEL', t: `"When selecting the fruit flies"... the procedure says five thousand flies of the same age. So age.` },
    { s: 'TYLA', t: `Correct — and only the first answer is marked. 3.4.4: "Explain why the investigator gave the fruit flies the same type of food throughout the investigation." Two marks.` },
    { s: 'MICHAEL', t: `To make sure availability of food is the only independent variable, so that any changes are due to food availability. That improves the validity.` },
    { s: 'TYLA', t: `Two marks.` },
    { s: 'TYLA', t: `3.4.5: "Describe the results obtained in this investigation." Two marks.` },
    { s: 'MICHAEL', t: `In the first generation, the flies died between about 8 and 40 hours. In the sixtieth generation, they lasted between about 140 and 180 hours. So the time until death increased.` },
    { s: 'TYLA', t: `Two marks. Using the numbers from the graphs is the safest way to describe them. 3.4.6 — six marks: "Using Darwin's theory of natural selection, explain the increase in starvation resistance in fruit flies."` },
    { s: 'MICHAEL', t: `Okay. When the food was removed, the flies had to adapt to survive without food, so they became more starvation resistant and passed that on to their offspring.` },
    { s: 'TYLA', t: `[seriously] And that's the biggest evolution trap of all. What you just described is Lamarck — individuals changing because they need to, and passing on what they acquired. A fly can't decide to become starvation resistant. With Darwin, the variation is already there before the food is removed.` },
    { s: 'MICHAEL', t: `[sighs] Right. Start with variation. There was variation in the population — some flies were starvation resistant and some were not. When the food source was removed, the flies that were not starvation resistant died. The starvation-resistant flies survived and reproduced, and passed on the allele for starvation resistance to their offspring. So the next generation had a higher proportion of starvation-resistant flies.` },
    { s: 'TYLA', t: `[delighted] Six out of six. Variation, a selection pressure, the unsuitable ones die, the suitable ones survive and reproduce, the allele is passed on, and the proportion increases. [whispers] Darwin starts with variation. Lamarck starts with need. And that's Question 3 — and the whole paper.` },
    { s: 'TYLA', t: `[warmly] Michael — that's both papers done. How do you feel?` },
    { s: 'MICHAEL', t: `[laughs] Like I just wrote matric twice. But Paper 2 had a different kind of trap. It was less about reading and more about counting and setting things out properly.` },
    { s: 'TYLA', t: `Same tradition. Top Paper 2 traps — go.` },
    { s: 'MICHAEL', t: `In Section A, a gene is a segment of DNA, while a triplet is just one codon's worth. Use and disuse and acquired characteristics are always Lamarck. Two capital letters can still be heterozygous. In DNA diagrams, the pentagon is the sugar, the circle is the phosphate, and the rectangle is the base. To find the parents, start with the recessive offspring. Count the gametes before you count genotypes — four, not sixteen. Fathers give their X to every daughter. Mitochondrion is the organelle. Segregation is one gene, independent assortment is different genes. And to fill a blank codon, eliminate the anticodons you've already matched.` },
    { s: 'TYLA', t: `Keep going — Section B.` },
    { s: 'MICHAEL', t: `At the end of meiosis two, the chromosomes are single because the centromere split. "Observable" means describe what you see in the bands. In a pedigree, count only direct children. Unaffected with a dominant disorder means homozygous recessive. When a question says "ALL possible genotypes," give all of them. Co-dominance shows both, incomplete dominance blends. A genetic cross has marks for P one, F one, meiosis and fertilisation, and the phenotypic ratio is compulsory. Differences need both sides, with "whereas." "Significance" means feature plus purpose. Genera, not species. For percentage increase, divide by where you started. "Other" means don't repeat yourself. And natural selection starts with variation — never with the organism trying to adapt.` },
    { s: 'TYLA', t: `[amazed] ...You've learned a lot in two episodes. And to everyone listening — many of those marks were lost on method, not memory. That's the layout of a cross, the order of a speciation story, or which number to divide by. Practise the method, and the marks follow.` },
    { s: 'MICHAEL', t: `[playfully] And still don't let me write your exam.` },
    { s: 'TYLA', t: `[laughs] You'd pass now. That's Paper 1 and Paper 2, November 2025 — done. Read the question, count the marks, and show your working. We'll catch you in the next episode.` },
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

  console.log(`Life, Decoded — Exam Walkthrough Paper 2 Nov 2025 (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

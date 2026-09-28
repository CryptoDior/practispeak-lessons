/**
 * Life, Decoded — Episode 5: "Genetics and Inheritance"
 * ElevenLabs audio generator
 * ----------------------------------------------------
 * Usage (from the project root, in a terminal that has internet access —
 * this will NOT work from inside Cowork's sandbox, run it on your own machine):
 *
 *   node --env-file=.env.local scripts/generate-genetics-inheritance-podcast-audio.mjs
 *
 * What it does:
 *  1. Generates one audio clip per line of dialogue (Naledi / Michael), using
 *     the ELEVENLABS_API_KEY already in your .env.local.
 *  2. Skips any file that already exists, so if a run gets interrupted or a
 *     line fails, just run the script again and it'll only fill the gaps.
 *  3. This episode is locked to "eleven_v3" per the source script's own
 *     production note (audio tags like [warmly]/[curious]/[laughs]/[impressed]/
 *     [thoughtful]/[surprised]/[excited] are read as delivery direction on v3).
 *     If your account/plan doesn't have v3 access, it automatically falls back
 *     to eleven_turbo_v2_5 with the tags stripped out (so they don't get read
 *     aloud literally) — but since you specifically want v3, the script prints
 *     a clear warning if any line had to fall back, so you know to check your
 *     plan / re-run later.
 *  4. Stitches every clip together, in order, into one final podcast file —
 *     using ffmpeg if it's installed (cleaner, with short pauses between
 *     lines and longer pauses at each PART transition), or a simple raw
 *     concatenation fallback if ffmpeg isn't found.
 *
 * Excluded from the voice track (per the source PDF's own production note):
 *  - The `EXAM TIP:` callout blocks and the closing Quick-Reference Recap
 *    (reference material for show notes, not meant to be spoken).
 *  - The `PART n: ...` section headers themselves aren't voiced by either
 *    speaker in the source script (only NALEDI/MICHAEL lines are), so they're
 *    treated as structural markers — a longer pause is inserted at each of
 *    these transitions instead, so the pacing still "feels" the section break.
 *
 * This is the longest episode in the series so far (20 parts) — expect this
 * run to take noticeably longer than any previous chapter.
 *
 * Output:
 *   podcasts/tmp/genetics-inheritance-chapter5/*.mp3 (individual clips, kept for resuming)
 *   podcasts/Genetics-Inheritance-Chapter5-Podcast.mp3 (final stitched episode)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-genetics-inheritance-podcast-audio.mjs');
  process.exit(1);
}

const VOICES = {
  NALEDI: 'ZtcPZrt9K4w8e1OB9M6w',  // Mia Moore — Studio Presenter
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
};

const PRIMARY_MODEL = 'eleven_v3';
const FALLBACK_MODEL = 'eleven_turbo_v2_5';

const ROOT = path.resolve('.');
const TMP_DIR = path.join(ROOT, 'podcasts', 'tmp', 'genetics-inheritance-chapter5');
const OUT_FILE = path.join(ROOT, 'podcasts', 'Genetics-Inheritance-Chapter5-Podcast.mp3');

// ─────────────────────────────────────────────────────────────────────────
// SCRIPT — ordered dialogue segments only. PART headers, EXAM TIP callouts,
// and the closing Quick-Reference Recap are intentionally left out (they're
// reference/show-notes material, not spoken dialogue in the source script).
// `newPart: true` marks the first line after a PART header, so the stitcher
// inserts a longer pause there instead of a short one.
// ─────────────────────────────────────────────────────────────────────────
const S = [
  { s: 'NALEDI', t: `[warmly] Welcome back — Chapter 5. If you've been with us since Chapter 1, this is the one that finally answers the question DNA raised right at the start: how does all of that get passed from parent to child?` },
  { s: 'MICHAEL', t: `[curious] Genetics and inheritance. Okay, I'm already a little nervous — this is the Punnett square chapter, right? The X's and the letters?` },
  { s: 'NALEDI', t: `It is, and I promise it's way more logical than it looks on a rushed page of notes. Today we're covering how traits get passed down, the actual mechanics of genetic crosses, sex-linked disorders, blood groups, pedigrees, mutations, and then we go right into the futuristic stuff — genetic engineering, stem cells, and cloning.` },
  { s: 'MICHAEL', t: `That's a lot of ground.` },
  { s: 'NALEDI', t: `It is, but it all builds on one core skill — once you can do a genetic cross properly, honestly, eighty percent of this chapter is just applying that same skill to slightly different scenarios.` },
  { s: 'MICHAEL', t: `Okay. I'm trusting you on that. Where do we start?` },
  { s: 'NALEDI', t: `With vocabulary — because genetics has a reputation for being confusing, and ninety percent of that reputation comes from people mixing up terms, not from the actual concepts being hard.` },

  // PART 1: What Is Genetics, Actually?
  { s: 'NALEDI', t: `So — genetics is the study of heredity. That's it, that's the one-line definition. And heredity itself just means the passing of characteristics from parent to offspring.`, newPart: true },
  { s: 'MICHAEL', t: `Genetics is the study of it, heredity is the actual thing being studied.` },
  { s: 'NALEDI', t: `Exactly that distinction. Now, here's the bigger idea underneath it: every individual inherits a set of genes, found in chromosomes, from a mother and a father. That set is unique to that individual — no one else has your exact combination — but it's also similar enough to identify what species you belong to.` },
  { s: 'MICHAEL', t: `So unique enough to be me, but similar enough that anyone looking at my DNA would go "yep, that's a human."` },
  { s: 'NALEDI', t: `Exactly. Before we get into the mechanics, there are a few key terms worth locking in early, because they'll come up constantly. First: filial generation, written as F1, F2, and so on — that's just the offspring of parent organisms.` },
  { s: 'MICHAEL', t: `Filial... like "family"?` },
  { s: 'NALEDI', t: `Exactly that connection, and it's a genuinely useful memory trick — F for Filial, F for Family. Next: locus — the exact position, the exact location, of a gene on a chromosome.` },
  { s: 'MICHAEL', t: `So every gene has its own specific address on a chromosome.` },
  { s: 'NALEDI', t: `Precisely. And last one for now: genetic engineering — techniques used to change the genetic material of a cell or a living organism. It's a form of biotechnology, and we'll spend real time on it later in the episode.` },

  // PART 2: Genes, Alleles, and the Vocabulary That Runs This Whole Chapter
  { s: 'MICHAEL', t: `Okay, hit me with the vocabulary. I know "gene" and "allele" get used together constantly and I've genuinely never been sure I know the difference.`, newPart: true },
  { s: 'NALEDI', t: `You are absolutely not alone in that, and it's worth slowing down for. A gene is a segment of DNA in a chromosome that contains the code for a particular characteristic.` },
  { s: 'MICHAEL', t: `Right, so gene equals "the instruction for one trait."` },
  { s: 'NALEDI', t: `Exactly. Now — an allele is a different form of that same gene, sitting at the same locus, on homologous chromosomes.` },
  { s: 'MICHAEL', t: `Okay, that needs unpacking. "Different form" of the same gene?` },
  { s: 'NALEDI', t: `Think of it like this: the gene is the category — say, "flower colour." The alleles are the specific options within that category — like a dominant allele for tall plants, T, and a recessive allele for short plants, t. Same gene, same locus, but two different versions.` },
  { s: 'MICHAEL', t: `So gene is the question, and alleles are the possible answers.` },
  { s: 'NALEDI', t: `That is a genuinely excellent way to hold onto it. Now, before we go further, we need one more term underneath all of this: homologous chromosomes. That's a set of one maternal and one paternal chromosome that pair up with each other inside a cell during meiosis. They're the same size, the same shape, and they carry the same or similar alleles at matching loci.` },
  { s: 'MICHAEL', t: `So homologous chromosomes are like a matched pair — same gene "slots," but each one might be carrying a different allele in that slot.` },
  { s: 'NALEDI', t: `Exactly right. One chromosome might carry the allele for purple flowers at a particular locus, and its homologous partner might carry the allele for white flowers at that exact same locus.` },
  { s: 'MICHAEL', t: `Okay, now — genotype and phenotype. I always get these backwards under pressure.` },
  { s: 'NALEDI', t: `Simple fix: genotype is the genetic composition of an organism — the actual letters, like TT or Tt. phenotype is the physical appearance based on that genotype — tall, short, whatever you can actually observe.` },
  { s: 'MICHAEL', t: `So genotype is the code, phenotype is what you can see.` },
  { s: 'NALEDI', t: `Exactly. Now, within genotype, there's a dominant-versus-recessive relationship to understand. A dominant allele is one that's expressed — shown — in the phenotype, whether it's in the heterozygous condition, Tt, or the homozygous condition, TT.` },
  { s: 'MICHAEL', t: `So a dominant allele shows up whether it's got one copy or two.` },
  { s: 'NALEDI', t: `Exactly. A recessive allele, on the other hand, is masked — hidden — in the heterozygous condition, and it's only expressed when it's homozygous, tt — two copies, no dominant allele around to mask it.` },
  { s: 'MICHAEL', t: `So recessive needs both copies to actually show its face.` },
  { s: 'NALEDI', t: `Right. And that leads directly into homozygous and heterozygous. Homozygous means two identical alleles for a characteristic — TT or tt. Heterozygous means two different alleles — Tt.` },
  { s: 'MICHAEL', t: `Homo for "same," hetero for "different" — same logic as most science vocabulary with those prefixes.` },
  { s: 'NALEDI', t: `Exactly, and that pattern holds across biology generally, so it's a useful instinct to have. Now, notation matters here too: dominant alleles are always written as a CAPITAL letter, recessive alleles as a small, lower-case letter.` },
  { s: 'MICHAEL', t: `So just from looking at "Tt" I instantly know: heterozygous, and it'll show the dominant phenotype, tall, because the capital T is present.` },
  { s: 'NALEDI', t: `Exactly — you can read an entire genetic story out of two letters once this clicks.` },
  { s: 'MICHAEL', t: `One more pair of terms I want locked down before we move on — monohybrid and dihybrid. I've seen both words but never really sat with the difference.` },
  { s: 'NALEDI', t: `Easy distinction, actually. A monohybrid cross shows only one characteristic or trait in the genetic cross — say, just flower colour, or just seed shape. A dihybrid cross shows two different characteristics at once — flower colour and seed shape, together.` },
  { s: 'MICHAEL', t: `Mono, one. Di, two. Same prefix logic as before.` },
  { s: 'NALEDI', t: `Exactly — and we'll do full worked examples of both later in the episode, so don't worry about mastering it from the definition alone right now.` },

  // PART 3: Mendel — The Father of Genetics
  { s: 'MICHAEL', t: `Okay, I feel like every science chapter has its "founding father" story. Who's ours for genetics?`, newPart: true },
  { s: 'NALEDI', t: `Gregor Mendel — an Austrian monk, so a type of priest, and he's regarded as the father of genetics for his work on garden pea plants. That work helped explain how genes are passed from parents to offspring.` },
  { s: 'MICHAEL', t: `A monk doing genetics experiments — that's an unusual combination.` },
  { s: 'NALEDI', t: `It really is, and it's part of what makes the story memorable. Mendel began by simply observing his pea plants to figure out which traits actually got inherited. He noticed at least seven traits that appeared to be passed down: seed shape, seed colour, pod shape, pod colour, flower colour, flower position — whether it sits on the side, axial, or on top, terminal — and stem length.` },
  { s: 'MICHAEL', t: `Seven traits, all in peas. Okay, and what did he actually do with them?` },
  { s: 'NALEDI', t: `Here's the experiment that made him famous. He noticed garden peas come in at least two heights — tall, T, and short, t. Since peas are naturally self-pollinating, tall peas tend to produce tall peas, and short peas produce short peas, on their own.` },
  { s: 'MICHAEL', t: `So left alone, they'd just keep breeding true to type.` },
  { s: 'NALEDI', t: `Right. But Mendel's first genetic cross deliberately crossed tall peas with short peas — cross-pollinating them on purpose. And the result, in that first group of offspring, the F1 generation, was — only tall peas.` },
  { s: 'MICHAEL', t: `Wait, only tall? The short trait just... vanished?` },
  { s: 'NALEDI', t: `[thoughtful] It looked that way — but hold that thought, because it comes back. Mendel then took those F1 tall peas and crossed them with each other — interbreeding them — to produce a second group of offspring, the F2 generation. And in that F2 generation: tall and short peas both reappeared, in a ratio of 3 to 1 — three tall for every one short.` },
  { s: 'MICHAEL', t: `So the short trait didn't actually disappear, it was just hiding in that first generation.` },
  { s: 'NALEDI', t: `Exactly — and that single observation is the whole foundation of dominant and recessive alleles. Let's actually walk the genotypes through it, because it's satisfying once you see it laid out. Parent generation: TT crossed with tt. Each parent can only contribute one allele per gamete, so the F1 generation is entirely Tt — heterozygous, but phenotypically tall, because T is dominant and masks t.` },
  { s: 'MICHAEL', t: `That explains why the F1 generation was "only tall" — the short allele was there the whole time, just masked.` },
  { s: 'NALEDI', t: `Exactly. Then, crossing Tt with Tt for the F2 generation gives you a genotype ratio of 1 TT : 2 Tt : 1 tt — and phenotypically, that works out to 3 tall : 1 short, because TT, Tt, and Tt are all tall, and only tt is short.` },
  { s: 'MICHAEL', t: `There's the 3-to-1 ratio.` },
  { s: 'NALEDI', t: `Exactly, and this experiment — and dozens like it across his seven traits — is what let Mendel formulate his three laws of inheritance.` },

  // PART 4: Mendel's Three Laws of Inheritance
  { s: 'MICHAEL', t: `Okay, so what are these three laws, actually?`, newPart: true },
  { s: 'NALEDI', t: `Let's go through them one at a time, because they build on each other nicely. Law one: the Law of Segregation. Each trait is controlled by two factors — what we now call alleles — situated on homologous chromosomes. When gametes form during meiosis, those two alleles are separated, or segregated. A gamete only ever contains one of the two alleles from each parent.` },
  { s: 'MICHAEL', t: `So a parent has two copies of an allele, but only passes on one, through a single gamete.` },
  { s: 'NALEDI', t: `Exactly — that's segregation, the separating-out. Law two: the Law of Dominance. Certain alleles of a gene exist in either a dominant or a recessive form. And if the pair of alleles in an individual are different — one dominant, one recessive — the phenotype will only show the dominant trait.` },
  { s: 'MICHAEL', t: `That's the Tt-being-tall situation from a minute ago.` },
  { s: 'NALEDI', t: `Exactly that. And law three — this one's a bit more involved, but stick with me — the Law of Independent Assortment. Because of the random arrangement of chromosomes at the equator during meiosis, when gametes are forming, any one of the two alleles for ONE characteristic can sort with any one of the alleles for ANOTHER characteristic.` },
  { s: 'MICHAEL', t: `Meaning... different genes don't travel together as a package deal?` },
  { s: 'NALEDI', t: `Exactly right. The alleles of different genes move independently of each other into the gametes, so they can appear in different combinations. This is actually the whole reason dihybrid crosses work the way they do — we'll come back to this law directly when we get there.` },

  // PART 5: The Genetic Diagram — Learning the Exact Layout
  { s: 'MICHAEL', t: `Okay, now for the part I've actually been dreading a little — the diagrams themselves. The Punnett squares.`, newPart: true },
  { s: 'NALEDI', t: `I get why they look intimidating, but here's the good news: there's an exact, fixed layout, and once you memorise the shape of it, you're basically just filling in blanks every single time. Marks are actually awarded for the layout itself, not only the final answer.` },
  { s: 'MICHAEL', t: `Wait, really? You get marks just for the structure?` },
  { s: 'NALEDI', t: `Genuinely, yes — so this is worth memorising properly, not just eyeballing. Here's the template, step by step. Line one: P1 — that's Parent generation — and you write the phenotype of both parents, with an "x" between them, representing the cross.` },
  { s: 'MICHAEL', t: `So phenotype first — the visible trait, in words.` },
  { s: 'NALEDI', t: `Right. Line two, directly under that: the genotype of both parents — the actual letters, like Tt and Tt.` },
  { s: 'MICHAEL', t: `Genotype right under phenotype.` },
  { s: 'NALEDI', t: `Exactly. Then — meiosis — and under that heading, you write the gametes each parent produces. Remember, from the Law of Segregation, each gamete only carries one allele.` },
  { s: 'MICHAEL', t: `So if the genotype is Tt, the gametes are T and t, split apart.` },
  { s: 'NALEDI', t: `Exactly. Then comes fertilisation — and here's where you show all the possible ways the gametes from each parent can combine. You can do this with crossing lines connecting each gamete to each other, or — and this is generally the cleaner, more reliable method — a Punnet square, a little matrix box, with one parent's gametes along the top and the other's down the side.` },
  { s: 'MICHAEL', t: `And the boxes inside get filled in with the combinations.` },
  { s: 'NALEDI', t: `Exactly — each box shows one possible offspring's genotype. Then, finally: F1 — and under that, you write the resulting genotype, and then the resulting phenotype, of the offspring.` },
  { s: 'MICHAEL', t: `So the full order is: P1 phenotype, P1 genotype, gametes, fertilisation box, F1 genotype, F1 phenotype.` },
  { s: 'NALEDI', t: `Word for word, that's the layout. And there are two extra things you'll often be asked to calculate on top of that: the genotypic ratio and the phenotypic ratio — literally just counting how many of each type appear among the offspring, and expressing it as a ratio.` },
  { s: 'MICHAEL', t: `So if there are four boxes and three of them show the dominant phenotype, that's a 3:1 phenotypic ratio.` },
  { s: 'NALEDI', t: `Exactly, and you might also be asked for that as a percentage chance — same logic, if one out of four boxes is a particular type, that's a 1-in-4 chance, or 25 percent.` },
  { s: 'NALEDI', t: `One more thing before we do our first worked example — reading the question itself carefully matters just as much as the diagram. You need to hunt for specific clues every time: which characteristic is being examined, which allele of the pair is dominant, whether the parents are stated as homozygous or heterozygous, and what letters you're told to use — or whether you have to choose your own.` },
  { s: 'MICHAEL', t: `So half the battle is actually just careful reading before you even draw anything.` },
  { s: 'NALEDI', t: `Exactly — misreading one of those clues is the single most common way marks get lost on these questions, more than actually getting the crossing wrong.` },

  // PART 6: Monohybrid Crosses with Complete Dominance
  { s: 'NALEDI', t: `Alright, let's put that template to work. First type: monohybrid crosses with complete dominance — this is exactly what Mendel's pea experiment showed us. The dominant allele completely masks the recessive allele in the heterozygous condition.`, newPart: true },
  { s: 'MICHAEL', t: `Let's do a full worked example, properly, top to bottom.` },
  { s: 'NALEDI', t: `Good plan. Here's the problem: seeds can be round or wrinkled. The allele for round seeds is dominant over the allele for wrinkled seeds. We're told to use R for round and r for wrinkled. Two heterozygous round-seeded plants are crossed. Show the genotype and phenotype of the F1 generation.` },
  { s: 'MICHAEL', t: `Okay — P1 phenotype: round seeds times round seeds.` },
  { s: 'NALEDI', t: `Right. P1 genotype: since we're told both parents are heterozygous, that's Rr times Rr.` },
  { s: 'MICHAEL', t: `Meiosis — gametes. Each parent splits Rr into R and r.` },
  { s: 'NALEDI', t: `Exactly. So gametes from parent one: R and r. Gametes from parent two: R and r. Now, fertilisation — build the Punnett square. R and r along the top, R and r down the side.` },
  { s: 'MICHAEL', t: `Filling in the boxes: R with R gives RR. R with r gives Rr. r with R gives Rr. r with r gives rr.` },
  { s: 'NALEDI', t: `Perfect. So the F1 genotypes are: RR, Rr, Rr, rr.` },
  { s: 'MICHAEL', t: `And phenotypes — RR is round, both Rr's are round because R is dominant, and rr is wrinkled.` },
  { s: 'NALEDI', t: `Exactly — three round, one wrinkled.` },
  { s: 'MICHAEL', t: `So genotypic ratio is 1 RR : 2 Rr : 1 rr, and phenotypic ratio is 3 round : 1 wrinkled.` },
  { s: 'NALEDI', t: `That's a textbook-perfect answer. And notice — this is exactly the same 3:1 ratio Mendel found with his tall and short peas. A cross between two heterozygous parents always produces that same pattern: 25 percent homozygous dominant, 50 percent heterozygous, 25 percent homozygous recessive — genotypically — which becomes a 3-dominant-to-1-recessive ratio phenotypically.` },
  { s: 'MICHAEL', t: `So once you've internalised this one pattern — heterozygous times heterozygous gives 3:1 — you can recognise it instantly in a dozen different disguises across different traits.` },
  { s: 'NALEDI', t: `Exactly right, and that recognition is honestly most of what this section is testing.` },
  { s: 'MICHAEL', t: `Quick follow-up — is it possible for two parents who can both roll their tongues, a dominant trait, to have a child who can't roll their tongue?` },
  { s: 'NALEDI', t: `Yes, absolutely — and that's actually a really common style of exam question, asking you to explain it without drawing a full diagram. Here's the logic in words: if both parents are heterozygous, Rr, each carries one hidden recessive allele, r, even though they show the dominant tongue-rolling phenotype. If both parents happen to pass on their recessive r allele to a particular child, that child would be rr — homozygous recessive — and would be a non-roller, even though neither parent shows that trait themselves.` },
  { s: 'MICHAEL', t: `So the recessive trait was hiding in both parents the whole time, same idea as Mendel's peas.` },
  { s: 'NALEDI', t: `Exactly the same underlying idea, just applied to humans instead of pea plants.` },

  // PART 7: Monohybrid Crosses with Incomplete Dominance
  { s: 'MICHAEL', t: `Okay, "complete dominance" implies there's an incomplete version too?`, newPart: true },
  { s: 'NALEDI', t: `There is, and it's a genuinely different mechanism, worth keeping very separate in your head. Incomplete dominance is a cross between two phenotypically different parents where no allele of the gene is either dominant or recessive. The offspring end up different from both parents, with an intermediate — a blended — phenotype.` },
  { s: 'MICHAEL', t: `So instead of one allele masking the other, they sort of... mix?` },
  { s: 'NALEDI', t: `That's a good way to picture it. Classic example: a homozygous red-flowering plant crossed with a homozygous white-flowering plant produces offspring with pink flowers.` },
  { s: 'MICHAEL', t: `Not red, not white — a genuine blend.` },
  { s: 'NALEDI', t: `Exactly. Let's build the diagram. P1 phenotype: red times white. Genotype: since there's no dominance here, we use R for red and W for white — both capitals, because neither is dominant or recessive. Both parents are homozygous: RR times WW.` },
  { s: 'MICHAEL', t: `Gametes: R and R from the red parent, W and W from the white parent.` },
  { s: 'NALEDI', t: `Right. Fertilisation — Punnett square, R and R across the top, W and W down the side. Every single box comes out RW.` },
  { s: 'MICHAEL', t: `So the F1 genotype is entirely RW, and the phenotype is... pink, for all of them?` },
  { s: 'NALEDI', t: `Exactly — all pink, because the genotype RW represents that new, blended, intermediate phenotype. The fact that a brand-new phenotype appeared — one that's neither parent's colour — is your signal that you're dealing with incomplete dominance, not complete dominance.` },
  { s: 'MICHAEL', t: `That's actually a really clean diagnostic — if the offspring look like neither parent but a mix, it's incomplete dominance.` },
  { s: 'NALEDI', t: `Exactly right, and that's precisely the instinct examiners are testing when they describe a scenario and ask you to identify the type of inheritance at play.` },
  { s: 'NALEDI', t: `There's a human example worth knowing too — hypercholesterolemia, high blood cholesterol. H represents the allele for very high levels, L for low levels. Someone who's heterozygous, HL, would show high — but not extremely high — cholesterol; that intermediate phenotype is the incomplete dominance signature again. Only someone homozygous HH would show extremely high levels.` },
  { s: 'MICHAEL', t: `So even in a medical context, the "blended, in-between phenotype for heterozygotes" pattern holds.` },
  { s: 'NALEDI', t: `Exactly the same logic, just applied to a real health condition instead of flower colour.` },

  // PART 8: Monohybrid Crosses with Co-Dominance
  { s: 'MICHAEL', t: `Okay, and now I'm guessing "co-dominance" is yet another distinct mechanism, and I have a feeling I'm going to confuse it with incomplete dominance.`, newPart: true },
  { s: 'NALEDI', t: `You've basically named the single most common mistake in this entire section, so let's nail the difference properly, right now. In co-dominance, both alleles of the gene are equally dominant, so both get expressed equally, together, in the phenotype of the offspring.` },
  { s: 'MICHAEL', t: `So instead of blending into a new, third colour like incomplete dominance, both original traits show up side by side?` },
  { s: 'NALEDI', t: `Exactly that distinction. Classic example: in cattle, there are three possible colour variations — red, white, or red-and-white in patches. This comes from a red allele, R, and a white allele, W, for coat colour. Cross a red bull with a white female.` },
  { s: 'MICHAEL', t: `P1 phenotype: red coat times white coat. Genotype: RR times WW, both capitals again, since neither R nor W is dominant.` },
  { s: 'NALEDI', t: `Exactly. Gametes: R and R from the bull, W and W from the female. Punnett square gives every offspring the genotype RW.` },
  { s: 'MICHAEL', t: `And the phenotype... this is where it's different from incomplete dominance, right? It's not "pink" — it's actually patches of both.` },
  { s: 'NALEDI', t: `Exactly — the phenotype is red-and-white patches. Both colours show up, distinctly, side by side on the same coat, rather than blending into a uniform new shade.` },
  { s: 'MICHAEL', t: `So pink flower is a genuine blend, a merge — but red-and-white patches is both original colours sitting there, separately, at the same time.` },
  { s: 'NALEDI', t: `That is exactly the distinction to hold onto — and it's worth repeating because it's such a common mix-up: incomplete dominance blends into something new (red + white → pink); co-dominance shows both original traits simultaneously and distinctly (red + white → red-and-white patches).` },
  { s: 'NALEDI', t: `And a quick heads-up for later: blood grouping is also an example of co-dominance, specifically between the IA and IB alleles — we'll do that properly a bit later in the episode once we've covered multiple alleles.` },

  // PART 9: Sex Determination
  { s: 'MICHAEL', t: `Okay, shifting gears — sex determination. How does genetics actually decide whether a baby is a boy or a girl?`, newPart: true },
  { s: 'NALEDI', t: `Great next stop, and it's a genuinely satisfying genetic cross to work through. Here's the scenario examiners love: a couple already has three sons, and the woman is pregnant again — what's the percentage chance of having a girl this time?` },
  { s: 'MICHAEL', t: `My gut says "the same as always," but let's actually prove it with the diagram.` },
  { s: 'NALEDI', t: `Let's do exactly that. P1 phenotype: male times female. Genotype — and this is where sex determination uses different letters than a typical trait — male is XY, female is XX.` },
  { s: 'MICHAEL', t: `So instead of dominant-capital and recessive-lowercase, we're literally using X and Y, the actual sex chromosomes.` },
  { s: 'NALEDI', t: `Exactly. Gametes: the male, XY, produces two types of gametes — X and Y. The female, XX, can only produce one type — X and X, since both her chromosomes are X.` },
  { s: 'MICHAEL', t: `Punnett square: X and Y across the top from dad, X and X down the side from mum.` },
  { s: 'NALEDI', t: `Fill it in: X with X gives XX, X with X gives XX, Y with X gives XY, Y with X gives XY.` },
  { s: 'MICHAEL', t: `So two XX and two XY — 50/50, exactly what I guessed.` },
  { s: 'NALEDI', t: `Exactly — a 1:1 phenotypic ratio, 50 percent female, 50 percent male, every single time, completely regardless of how many sons or daughters came before. Each pregnancy is an entirely independent event — the earlier three sons don't shift the odds at all for this one.` },
  { s: 'MICHAEL', t: `That's actually a really important, slightly myth-busting point.` },
  { s: 'NALEDI', t: `It genuinely is, and it's a common exam trap dressed up as a "gotcha" scenario — don't overthink it, just run the standard XY cross.` },
  { s: 'NALEDI', t: `Now, let's connect this to human chromosome numbers properly. Humans have 46 chromosomes total — 23 from the mother, 23 from the father. Of those 46, 44 control the appearance, structure, and functioning of the body — these are called autosomes. The remaining single pair determines sex, and that pair is called the gonosomes.` },
  { s: 'MICHAEL', t: `Auto for "the regular ones," gono for "the sex-determining ones."` },
  { s: 'NALEDI', t: `Exactly. In a female, the gonosomes are two large X chromosomes. In a male, it's one large X and one smaller Y chromosome. And the unique number, shape, and arrangement of all the chromosomes in a species is called the karyotype.` },
  { s: 'MICHAEL', t: `So a karyotype is basically a chromosome "team photo," and you can tell male from female by looking at that 23rd pair specifically.` },
  { s: 'NALEDI', t: `Exactly — pair 23 is your tell. Two matching large X's, female. One large X and one visibly smaller Y, male.` },
  { s: 'NALEDI', t: `And here's the mechanical detail underneath all of it: after meiosis, an egg cell will always have 22 autosomes plus one X gonosome — that's fixed, since mum only has X's to give. But males produce two types of sperm: half carry 22 autosomes plus an X, the other half carry 22 autosomes plus a Y.` },
  { s: 'MICHAEL', t: `So it's actually the father's sperm that determines the baby's sex, not the mother at all — since mum can only ever contribute an X.` },
  { s: 'NALEDI', t: `That is exactly correct, and it's a genuinely useful, precise fact to have on hand — biologically, sex is determined by which type of sperm happens to fertilise the egg.` },

  // PART 10: Sex-Linked Inheritance
  { s: 'MICHAEL', t: `Okay, so most traits sit on the 44 autosomes. But you mentioned some traits are actually carried on the sex chromosomes themselves?`, newPart: true },
  { s: 'NALEDI', t: `Exactly — and that's called sex-linked inheritance. Most bodily characteristics are carried on the 22 pairs of autosomes, but a few characteristics are carried on the gonosomes only. There's actually a fun, harmless example: the gene for hair growing on the inside of the pinna — the ear — is carried on the Y chromosome, so only men can have that particular trait.` },
  { s: 'MICHAEL', t: `Because only men have a Y chromosome to carry it on in the first place.` },
  { s: 'NALEDI', t: `Exactly. But the two sex-linked traits that actually matter for us — the ones examiners test constantly — are genetic disorders carried on the X chromosome: colour-blindness and haemophilia.` },
  { s: 'MICHAEL', t: `Let's take those one at a time. Haemophilia first?` },
  { s: 'NALEDI', t: `Sure. Haemophilia is the inability of the blood to clot, due to a lack of a blood clotting factor. If someone with haemophilia cuts themselves, the wound keeps bleeding until a clotting factor is transfused in hospital.` },
  { s: 'MICHAEL', t: `That sounds genuinely serious.` },
  { s: 'NALEDI', t: `It is. Both haemophilia and colour-blindness are caused by a recessive allele carried on the X chromosome. The convention is to write these as a superscript on the X — Xh for haemophilia, XH for the normal allele.` },
  { s: 'MICHAEL', t: `And colour-blindness works the same way?` },
  { s: 'NALEDI', t: `Same mechanism — colour-blindness is when a person can't tell different colours apart. Red-green colour-blindness specifically is caused by an absence of the proteins that make up the red or green cone photoreceptors in the retina, so the person can't distinguish red from green. Written as Xb for the colour-blind allele, XB for normal.` },
  { s: 'MICHAEL', t: `Okay, now here's the part that always trips me up — why do men seem to get these conditions so much more than women?` },
  { s: 'NALEDI', t: `This is the single most important concept in this whole section, so let's build it up properly with genotypes. Let's use haemophilia as our example. A normal female is XHXH. A carrier female — meaning she has one copy of the recessive allele but doesn't show the disorder — is XHXh. A haemophiliac female would need to be XhXh — both X chromosomes carrying the recessive allele.` },
  { s: 'MICHAEL', t: `So for a woman to actually have the disorder, she needs the bad luck of inheriting it from both parents.` },
  { s: 'NALEDI', t: `Exactly. Now compare that to males. A normal male is XHY. But a male with haemophilia is just XhY.` },
  { s: 'MICHAEL', t: `[surprised] Wait — that's it? Just one Xh and he has the disorder?` },
  { s: 'NALEDI', t: `Exactly — and here's why, mechanically: the Y chromosome doesn't carry an allele for this gene at all, so there's no second allele available on the Y to potentially mask the recessive Xh. A single recessive allele is automatically enough to cause the disorder in a male.` },
  { s: 'MICHAEL', t: `So women effectively have a backup copy available — a second X that might carry the dominant, healthy allele — but men genuinely don't, for these particular genes.` },
  { s: 'NALEDI', t: `That's exactly the reasoning, and it's worth memorising in that exact form, because "explain why men are more at risk" is asked constantly. Men, having only one X chromosome, have a much greater risk of inheriting these disorders, since there's no second X to potentially carry a masking dominant allele. Women, needing two copies of the recessive allele on two separate X chromosomes to actually show the disorder, have a much lower chance of inheriting it — but if a woman does inherit just one copy, she's called a carrier: she doesn't show signs of the disorder herself, but she can still pass the allele on to her children.` },
  { s: 'MICHAEL', t: `One important housekeeping note — when we write out these genotypes, do we ever put a letter on the Y chromosome itself?` },
  { s: 'NALEDI', t: `Good catch to raise, because it's a very specific and commonly tested rule: no, never. Do not add any letter to the Y chromosome, since the Y chromosome doesn't carry an allele at all to counteract the recessive allele for haemophilia or colour-blindness. Genotypes are always written as XHY or XhY — never with a second letter attached to the Y.` },
  { s: 'NALEDI', t: `Let's actually run through a worked cross. A normal father and a heterozygous, carrier mother have children — what are the possible genotypes and phenotypes?` },
  { s: 'MICHAEL', t: `P1 phenotype: normal male times carrier female. Genotype: XHY times XHXh.` },
  { s: 'NALEDI', t: `Right. Gametes from dad: XH and Y. Gametes from mum: XH and Xh.` },
  { s: 'MICHAEL', t: `Punnett square: XH with XH gives XHXH — normal female. XH with Xh gives XHXh — carrier female. Y with XH gives XHY — normal male. Y with Xh gives XhY — haemophiliac male.` },
  { s: 'NALEDI', t: `Perfect. So among the daughters: all normal, but half are carriers. Among the sons: half normal, half haemophiliac.` },
  { s: 'MICHAEL', t: `So even though mum doesn't show the disorder herself, being a carrier, she can absolutely still have a son who does.` },
  { s: 'NALEDI', t: `Exactly — and that's precisely why sex-linked disorders can seem to "skip a generation," or appear to come from nowhere, when actually the mother was quietly carrying it the whole time.` },
  { s: 'NALEDI', t: `Now — an important side-note, because it's a favourite "trick" exam scenario: not every genetic disorder is sex-linked, even if it's caused by a recessive allele. Cystic fibrosis is a great example. It's a progressive genetic disorder caused by a recessive allele — but that allele sits on chromosome number 7, an autosome, not on the X chromosome. One in twenty people of European descent carry the CF allele, and about one in four hundred European-descent couples will both be carriers. The disorder causes persistent lung infections and limits the ability to breathe over time — a thick build-up of mucus clogs the airways, traps bacteria, and can eventually lead to respiratory failure.` },
  { s: 'MICHAEL', t: `So how would you actually prove, on an exam, that cystic fibrosis isn't sex-linked?` },
  { s: 'NALEDI', t: `Good question to ask directly. The proof comes from the pattern in a pedigree — if you see the disorder appearing equally in both male and female offspring, roughly equally often, at similar rates, that tells you the responsible allele isn't confined to the X chromosome. A true sex-linked recessive disorder shows up in males far more often than females; cystic fibrosis doesn't show that skew, because it's autosomal.` },

  // PART 11: Multiple Alleles — Blood Groups and Paternity Testing
  { s: 'MICHAEL', t: `Alright, next up — blood types. I know I have one, I genuinely don't know how genetics decides it.`, newPart: true },
  { s: 'NALEDI', t: `This is actually a great section because it introduces a genuinely new concept: multiple alleles. Everything we've covered so far — tall/short, red/white, haemophilia — involved just two alleles per gene. Blood type is controlled by three.` },
  { s: 'MICHAEL', t: `Three alleles for one gene? How does that even work if you only inherit two?` },
  { s: 'NALEDI', t: `Great instinct to ask — here's the resolution. All three alleles — named IA, IB, and i — exist across the human population as a whole. But any single individual still only ever inherits two of those three, one from each parent.` },
  { s: 'MICHAEL', t: `So the "multiple" refers to the population-wide pool of options, not to any one person having three.` },
  { s: 'NALEDI', t: `Exactly that distinction. There are four blood type phenotypes in humans: A, B, AB, or O. Here's exactly how the genotypes map to those phenotypes. IAIA or IAi gives blood type A. IBIB or IBi gives blood type B. IAIB gives blood type AB. And ii gives blood type O.` },
  { s: 'MICHAEL', t: `So IA and IB both dominate over i...` },
  { s: 'NALEDI', t: `Exactly — i is recessive to both. But IA and IB are co-dominant to each other — remember co-dominance from earlier? — which is exactly why someone with IAIB genotype shows both the A and B phenotype at once, rather than one masking the other. That's your co-dominance connection from a few sections back.` },
  { s: 'MICHAEL', t: `So the AB blood type is a co-dominance situation, same underlying logic as the red-and-white patched cattle.` },
  { s: 'NALEDI', t: `Exactly the same principle, just applied to blood antigens instead of coat colour.` },
  { s: 'NALEDI', t: `Let's run a worked cross. A man and a woman both have blood group B — how is it possible for them to have a child with blood group O?` },
  { s: 'MICHAEL', t: `If both are IBIB, that seems impossible — no i allele anywhere to pass on.` },
  { s: 'NALEDI', t: `Exactly the trap to watch for — you can't assume genotype purely from phenotype here. Blood group B could mean IBIB or IBi. For a group-O child to be possible, both parents must actually be heterozygous: IBi.` },
  { s: 'MICHAEL', t: `P1 phenotype: blood group B times blood group B. Genotype: IBi times IBi. Gametes: IB and i from each parent.` },
  { s: 'NALEDI', t: `Punnett square: IB with IB gives IBIB. IB with i gives IBi. i with IB gives IBi. i with i gives ii.` },
  { s: 'MICHAEL', t: `So genotypes are IBIB, IBi, IBi, ii — and phenotypically that's 3 blood group B to 1 blood group O.` },
  { s: 'NALEDI', t: `Exactly right — a completely valid outcome, as long as both parents happen to be carrying that hidden i allele.` },
  { s: 'NALEDI', t: `Now — blood groups also have a real-world application: paternity testing. The blood groups of the mother, the possible father, and the child get compared. If the adults' blood groups don't correspond to, or match, the child's blood group at all, that man is not the father.` },
  { s: 'MICHAEL', t: `And if they do match?` },
  { s: 'NALEDI', t: `Then it only tells you there's a possibility he's the father — other tests are still needed, because plenty of other men could share the same blood group.` },
  { s: 'MICHAEL', t: `So blood grouping can rule someone out for certain, but it can't actually confirm paternity on its own.` },
  { s: 'NALEDI', t: `Exactly right, and that's the exact distinction examiners test. For a truly conclusive answer, you need DNA profiling — which looks at the similarities between the nucleotides in the DNA of the father and the child, rather than just a broad blood category.` },
  { s: 'MICHAEL', t: `How does DNA profiling actually establish that, mechanically?` },
  { s: 'NALEDI', t: `Each DNA profile is unique to an individual. Fifty percent of a child's DNA fragments — the bands, the bars you'd see on a profile — are derived from the mother, and fifty percent from the father. So if fifty percent of the bands in the child's profile correspond with a particular man's profile, that's strong evidence he is the biological father.` },
  { s: 'MICHAEL', t: `So DNA is basically the "upgrade" from blood grouping — same underlying comparison logic, but far more specific and far more conclusive.` },
  { s: 'NALEDI', t: `Exactly — DNA is viewed as significantly more reliable evidence of paternity than blood groups ever could be, precisely because it's tracing actual matching genetic fragments, not just a broad four-category system.` },

  // PART 12: Dihybrid Crosses
  { s: 'MICHAEL', t: `Okay — time to face dihybrid crosses. Two traits at once. I already feel like the Punnett square is about to get a lot bigger.`, newPart: true },
  { s: 'NALEDI', t: `It does get bigger, but the logic is identical to everything we've already done — you're just tracking two genes simultaneously instead of one, using the Law of Independent Assortment from earlier, which tells us alleles of different genes sort into gametes independently of each other.` },
  { s: 'MICHAEL', t: `Let's do the full worked example, step by step, same as before.` },
  { s: 'NALEDI', t: `Good approach. Here's the problem: in pea plants, the allele for tallness, T, is dominant, and the allele for shortness, t, is recessive. The allele for purple flowers, P, is dominant, and white flowers, p, is recessive. Two plants, heterozygous for both tallness and purple flowers, are crossed.` },
  { s: 'MICHAEL', t: `Step one — decide monohybrid or dihybrid. Two characteristics mentioned — height and flower colour — so, dihybrid.` },
  { s: 'NALEDI', t: `Exactly. Step two — choose your letters: T for tall, t for short, P for purple, p for white. Step three: write down the phenotype of the two parents. Tall, purple times tall, purple.` },
  { s: 'MICHAEL', t: `Step four: genotype. Since both are heterozygous for both traits, that's TtPp times TtPp.` },
  { s: 'NALEDI', t: `Right. And here's the part that's genuinely new compared to monohybrid crosses — step five: the gametes. Each gamete needs two letters now, one from each characteristic, because it's dihybrid.` },
  { s: 'MICHAEL', t: `So instead of just T or t, a single gamete might carry TP, or Tp, or tP, or tp?` },
  { s: 'NALEDI', t: `Exactly — four possible gamete combinations from each TtPp parent, following the Law of Independent Assortment: TP, Tp, tP, tp.` },
  { s: 'MICHAEL', t: `So each parent contributes four different possible gamete types, not two.` },
  { s: 'NALEDI', t: `Exactly right. Step six: draw and complete a Punnett square with those four gamete types along the top, and the same four down the side. That gives you a 4-by-4 grid — sixteen boxes total.` },
  { s: 'MICHAEL', t: `Sixteen boxes. Okay, that's the "bigger" part you warned me about.` },
  { s: 'NALEDI', t: `It is, but each box is filled in exactly the same simple way as before — just combine the row letters with the column letters. Once you fill in all sixteen, you get combinations like TTPP, TTPp, TtPP, TtPp, and so on, all the way through to ttpp.` },
  { s: 'MICHAEL', t: `And step seven — the phenotypic ratio from all of that?` },
  { s: 'NALEDI', t: `This is the payoff, and it's worth memorising as a fixed number, because it comes up constantly: a dihybrid cross between two double-heterozygous parents always produces a phenotypic ratio of 9:3:3:1.` },
  { s: 'MICHAEL', t: `What do those four numbers actually represent?` },
  { s: 'NALEDI', t: `Nine tall, purple-flowered plants — both dominant traits together. Three short, purple-flowered — one dominant, one recessive. Three tall, white-flowered — the other dominant-recessive combination. And one short, white-flowered — both recessive traits together.` },
  { s: 'MICHAEL', t: `So it's genuinely just the two separate 3:1 ratios, sort of multiplied together into all four possible combinations.` },
  { s: 'NALEDI', t: `That's a lovely way to see it, and it's mathematically exactly what's happening — 3:1 for height, 3:1 for colour, combined independently gives you 9:3:3:1 overall.` },
  { s: 'MICHAEL', t: `One more thing — how do I know if there's one capital letter or two, whether a trait shows in an F1 individual with a genotype like TtPp?` },
  { s: 'NALEDI', t: `Simple rule, and it applies across the whole chapter, not just dihybrid crosses: if there's at least one capital letter for a particular gene in the genotype, that trait's dominant characteristic shows in the phenotype. If there are only small letters for that gene, the recessive trait shows.` },
  { s: 'MICHAEL', t: `So you check each gene "column" independently — Tt shows tall because of the capital T, Pp shows purple because of the capital P — and you just read straight across.` },
  { s: 'NALEDI', t: `Exactly — treat each gene as its own independent little mini-decision, then combine the results into the full phenotype description.` },

  // PART 13: Genetic Lineage — Reading Pedigree Diagrams
  { s: 'MICHAEL', t: `Okay, pedigrees — the family tree diagrams. I've seen these in past papers and they always look like a small logic puzzle.`, newPart: true },
  { s: 'NALEDI', t: `They kind of are, honestly, but a genuinely solvable one once you know the steps. A pedigree diagram, also called a family tree, is used to study the inheritance of characteristics in a family across a number of generations.` },
  { s: 'MICHAEL', t: `What's the visual convention — squares, circles?` },
  { s: 'NALEDI', t: `Squares represent males, circles represent females. A horizontal line connecting a square and a circle shows that they've mated. A vertical line flowing down from that horizontal line represents their offspring.` },
  { s: 'MICHAEL', t: `And shading indicates the trait?` },
  { s: 'NALEDI', t: `Exactly — shaded shapes typically show individuals who display the trait in question, unshaded shapes show those who don't, and the key always tells you exactly what shading means for that specific diagram.` },
  { s: 'NALEDI', t: `Let's walk through the standard method with an example. Say the diagram shows eye colour across three generations, and we're told brown eye colour, B, is dominant over blue eye colour, b. Here's the exact sequence of steps to follow, every single time.` },
  { s: 'MICHAEL', t: `Step one?` },
  { s: 'NALEDI', t: `Study any key or opening statement, and identify which trait is dominant and which is recessive. In our case: brown is dominant.` },
  { s: 'MICHAEL', t: `Step two?` },
  { s: 'NALEDI', t: `Write in the phenotype of every individual in the diagram, based on the shading — who's brown-eyed, who's blue-eyed, according to the key.` },
  { s: 'MICHAEL', t: `Step three?` },
  { s: 'NALEDI', t: `Fill in the genotype of everyone showing the recessive condition first — it must be two recessive alleles, two lower-case letters, like bb, since recessive only shows up when homozygous.` },
  { s: 'MICHAEL', t: `That's the easy, unambiguous group to start with.` },
  { s: 'NALEDI', t: `Exactly, always start there. Step four: for every individual with the recessive condition, you know each of their two alleles came from each of their two parents. So you can work backwards and fill in one recessive allele into each of that individual's parents' genotypes — even if those parents show the dominant phenotype themselves.` },
  { s: 'MICHAEL', t: `Because a dominant-looking parent could still be secretly heterozygous, carrying one hidden recessive allele that got passed down.` },
  { s: 'NALEDI', t: `Exactly right — that's the whole logical trick of pedigree analysis. Step five: if those parents show the dominant characteristic, fill in the second letter of their genotype as the dominant, capital allele — since we already know they're not homozygous recessive themselves.` },
  { s: 'MICHAEL', t: `So a parent who looks dominant, but has a recessive-condition child, must be heterozygous — Bb, not BB.` },
  { s: 'NALEDI', t: `Exactly. And step six: any other individual showing the dominant characteristic, where you have no such evidence forcing a particular genotype, could most likely be either homozygous dominant, BB, or heterozygous, Bb — and unless the pedigree gives you more specific evidence, like a recessive grandchild through them, you generally can't narrow it down further than "BB or Bb."` },
  { s: 'MICHAEL', t: `So pedigree work is really just repeatedly asking "does this person's genotype get forced by evidence from their children, or is it still ambiguous?"` },
  { s: 'NALEDI', t: `That is a genuinely excellent summary of the entire method. Every pedigree question is really testing whether you can walk that same six-step logic, carefully, individual by individual.` },
  { s: 'NALEDI', t: `One more genuinely useful skill: pedigrees are also how you prove, visually, whether a trait is sex-linked or autosomal. If a trait is sex-linked recessive, you'll typically see it affecting far more males than females across the diagram, and it often appears to "skip" from a grandfather through an unaffected, carrier daughter, to a grandson. If a trait affects males and females at roughly similar, comparable rates — like we discussed with cystic fibrosis — that's evidence it's autosomal, not sex-linked.` },
  { s: 'MICHAEL', t: `So the pattern the shading makes across the generations is itself evidence, not just the individual genotypes.` },
  { s: 'NALEDI', t: `Exactly — reading that overall pattern is often exactly what a "prove this characteristic is/isn't sex-linked" question is asking you to do.` },

  // PART 14: Mutations
  { s: 'MICHAEL', t: `Alright — mutations. I remember this word coming up briefly back in Chapter 1, tied to replication errors.`, newPart: true },
  { s: 'NALEDI', t: `Good memory, and this section builds directly on that. A mutation is a permanent change to the DNA of a cell. And here's the key framing: mutations can be harmless, harmful, or genuinely useful — it really depends on exactly where in the DNA that change happens.` },
  { s: 'MICHAEL', t: `Let's take those three categories one at a time.` },
  { s: 'NALEDI', t: `Sure. Harmless mutations mostly involve changes to non-coding DNA — which, worth remembering, makes up about 98.5 percent of all our DNA. That non-coding DNA isn't involved in making proteins, so a change there typically doesn't affect the structure or functioning of the cell or organism at all. Examples: freckles, blonde hair, baldness.` },
  { s: 'MICHAEL', t: `So most of our DNA could technically mutate and we'd genuinely never notice.` },
  { s: 'NALEDI', t: `Exactly — which is a slightly wild thing to sit with, but it's accurate. Harmful mutations, by contrast, change the DNA responsible for the production of a specific, functional protein. That causes changes to the organism's physical appearance or functioning, because of an incorrect, defective protein being made — and this may cause a genetic disorder.` },
  { s: 'MICHAEL', t: `And useful mutations?` },
  { s: 'NALEDI', t: `Useful mutations also change the DNA responsible for producing a specific protein — same mechanism as harmful ones, really — but here, if the resulting protein actually increases the organism's chance of survival, it's considered useful. If that gene gets passed on, it leads to genetic variation that's advantageous to the individual — and genetic variation is genuinely important for natural selection, which we'll cover properly in a later chapter.` },
  { s: 'MICHAEL', t: `So harmful and useful mutations are mechanistically almost identical — a coding change producing an altered protein — the only real difference is whether that altered protein happens to help or hurt survival.` },
  { s: 'NALEDI', t: `That's an excellent way to frame it — it's really the outcome, not the mechanism, that separates harmful from useful.` },
  { s: 'NALEDI', t: `Now, mutations can occur at two different scales — in genes, or in whole chromosomes. Let's do gene mutations first.` },

  // PART 15: Gene Mutations and Chromosomal Aberrations
  { s: 'NALEDI', t: `Gene mutations occur during replication, if a base pair gets added, left out, or accidentally doubled up. That changes the actual sequence of bases in the DNA.`, newPart: true },
  { s: 'MICHAEL', t: `That connects straight back to the mutation chain we covered in Chapter 1 — wrong base, changed sequence, changed gene, potentially changed trait.` },
  { s: 'NALEDI', t: `Exactly the same chain, this is really the biological "so what happens next" of that concept. Examples of gene mutations include haemophilia and colour-blindness — sex-linked gene mutations on the X chromosome, which we've already covered in detail — plus two more worth knowing: sickle cell anaemia and albinism.` },
  { s: 'MICHAEL', t: `Sickle cell — I've heard the name but not the actual mechanism.` },
  { s: 'NALEDI', t: `Sickle cell anaemia is an autosomal disease, common in Central Africa, India, and South America. It's caused by a gene mutation that results in a faulty haemoglobin molecule being formed. The red blood cells that get made have a half-moon shape — hence the name "sickle."` },
  { s: 'MICHAEL', t: `So the actual shape of the red blood cell itself changes?` },
  { s: 'NALEDI', t: `Exactly, and that shape change has two separate harmful consequences. First, these sickle-shaped cells can't carry as much oxygen, resulting in anaemia. Second — and this is the part that causes serious organ damage — the odd shape means the cells stick to each other, blocking small capillaries. That causes damage in organs like the brain and kidneys.` },
  { s: 'MICHAEL', t: `So it's not just "less oxygen," it's also a physical blockage problem.` },
  { s: 'NALEDI', t: `Exactly, both mechanisms at once. Now, albinism — a rare group of genetic disorders resulting in a lack of the pigment melanin. It's caused by a recessive gene mutation that prevents the normal development of colour in skin, hair, or eyes.` },
  { s: 'MICHAEL', t: `I think I've heard some pretty unfortunate stereotypes around albinism.` },
  { s: 'NALEDI', t: `[thoughtful] Unfortunately, yes — there are many harmful prejudices towards albinos. They're often portrayed as villains in movies, regarded as bringing bad luck in some cultures, and have tragically even been targeted and murdered for their body parts in certain regions. It's worth being clear: albinos have weak eyes that are light-sensitive, and very light skin that's especially susceptible to skin cancer — but they are perfectly normal in every other respect.` },
  { s: 'MICHAEL', t: `That's an important, and honestly sobering, note to include in a genetics chapter.` },
  { s: 'NALEDI', t: `It genuinely is — understanding the biology properly is part of what pushes back against those harmful myths.` },
  { s: 'NALEDI', t: `Now — chromosomal aberrations, the second scale of mutation. These occur during Anaphase I, if the chromosomes of a bivalent fail to separate properly — both chromosomes end up going to the same pole instead of splitting apart. That changes the chromosome number of the resulting gametes.` },
  { s: 'MICHAEL', t: `So instead of a small typo in the DNA sequence, this is a whole extra — or missing — chromosome?` },
  { s: 'NALEDI', t: `Exactly — a much bigger-scale error. The classic example is Down syndrome, caused by non-disjunction of chromosome pair 21 during Anaphase I or II. This forms a gamete with an extra, or sometimes one fewer, copy of chromosome 21. If that gamete fuses with a normal gamete during fertilisation, the resulting zygote ends up with three copies — or, more rarely, just one copy — of chromosome 21, instead of the usual two.` },
  { s: 'MICHAEL', t: `So it's specifically a meiosis mistake, not a copying-the-DNA-sequence mistake like sickle cell or albinism.` },
  { s: 'NALEDI', t: `Exactly right, and that's the key distinction between gene mutations and chromosomal aberrations — one is a small-scale sequence error, the other is a whole-chromosome counting error during gamete formation.` },

  // PART 16: Biotechnology — DNA Profiling and Genetic Engineering
  { s: 'MICHAEL', t: `Okay, moving into the more futuristic-sounding stuff now — biotechnology.`, newPart: true },
  { s: 'NALEDI', t: `This is genuinely one of the most relevant, real-world sections of the whole chapter. For centuries, humans have used artificial selection to breed the best food crops, farm animals, and pets — think of just how many different dog breeds exist today, all bred by humans selecting for particular traits.` },
  { s: 'MICHAEL', t: `So biotechnology isn't actually brand new, we've just gotten dramatically more precise about it.` },
  { s: 'NALEDI', t: `Exactly the right framing. Biotechnology is the use of organisms, like bacteria, or biological processes, to improve the quality of human life — for example, in DNA profiling, genetic engineering, stem cell technology, and cloning, which we're going to cover in that order.` },
  { s: 'MICHAEL', t: `DNA profiling — we actually touched on this back in Chapter 1, and again just now with paternity testing.` },
  { s: 'NALEDI', t: `Exactly, and that's genuinely all you need on it here — it's a form of biotechnology used for paternity testing, identifying individuals, and plenty of other purposes we already covered.` },
  { s: 'NALEDI', t: `Let's focus on the genuinely new territory: genetic engineering — used to alter the genome of a living cell for medical, industrial, or agricultural purposes. This results in a genetically modified organism, a GMO, or a transgenic animal — an animal carrying DNA from more than one species.` },
  { s: 'MICHAEL', t: `What are GMOs actually used for in practice?` },
  { s: 'NALEDI', t: `A few major categories. To breed more productive crops or animals, so more food can be produced. To produce drugs or hormones — insulin is the classic example — which end up having fewer side-effects and being cheaper to manufacture. And to "infect" cells with corrective genetic material to cure diseases — that's called gene therapy — for conditions like brain tumours and cystic fibrosis.` },
  { s: 'MICHAEL', t: `Wait, cystic fibrosis again — full circle from the sex-linked section.` },
  { s: 'NALEDI', t: `Exactly — a nice callback, and it shows how genetic engineering directly connects back to the disorders we've already discussed.` },
  { s: 'NALEDI', t: `One key process used to actually produce a GMO is recombinant DNA technology. Let's walk through how it's used to manufacture human insulin using E. coli bacteria, step by step. Step one: isolate the gene that codes for insulin from a healthy pancreas cell, cutting it out using enzymes. Step two: separately, cut open bacterial DNA — a plasmid — using other restriction enzymes.` },
  { s: 'MICHAEL', t: `So you're preparing two separate pieces — the human insulin gene, and an opened-up bacterial plasmid.` },
  { s: 'NALEDI', t: `Exactly. Step three: insert the chosen human gene into that opened plasmid, and attach each end using enzymes — essentially stitching it in.` },
  { s: 'MICHAEL', t: `So now the bacterial plasmid has a piece of human DNA spliced into it.` },
  { s: 'NALEDI', t: `Right — that's the "recombinant" part of recombinant DNA, literally combining DNA from two different sources. Step four: the bacterium is now genetically modified, and it will produce the desired protein — in this case, human insulin — as part of its own normal cellular activity.` },
  { s: 'MICHAEL', t: `So the bacteria basically become tiny, unwitting insulin factories.` },
  { s: 'NALEDI', t: `Exactly that. And step five: the bacterium can now be cultured to form many more identical bacteria, all carrying that same modified plasmid, which act as factories at scale to mass-produce insulin.` },
  { s: 'MICHAEL', t: `That's honestly a really elegant process once you see the five steps laid out.` },
  { s: 'NALEDI', t: `It is — and it's a great "describe the process" answer if you can walk through those five steps in order: isolate the gene, cut open the plasmid, insert and seal the gene into the plasmid, the bacterium is now modified and produces the protein, then the bacterium is cultured to mass-produce it.` },

  // PART 17: The GMO Debate — Advantages and Disadvantages
  { s: 'MICHAEL', t: `Okay, I feel like GMOs are one of those topics where people have genuinely strong opinions in either direction. What does the science side actually say?`, newPart: true },
  { s: 'NALEDI', t: `It's a fair characterisation, and honestly, a well-rounded exam answer should show you understand both sides properly, not just recite one. Let's start with the advantages of genetically modified plants specifically, since that's the most common exam angle.` },
  { s: 'MICHAEL', t: `Go ahead.` },
  { s: 'NALEDI', t: `Pest resistance — the plants no longer taste appealing to insects. Herbicide tolerance — the crop itself becomes immune to a particular poison, so large amounts of herbicide can be used to kill surrounding weeds without harming the crop. Disease resistance — these plants are hardier and don't get affected by certain diseases. Improved food quality — since there's less pest or disease damage, the food actually looks and holds up better.` },
  { s: 'MICHAEL', t: `That's already four solid benefits.` },
  { s: 'NALEDI', t: `And there's more. Cold tolerance — rice and tobacco have actually been engineered to survive sudden drops in temperature. Drought or salinity tolerance — this helps plants grow in areas that were previously unsuitable for agriculture entirely. Nutritional enhancement — for example, adding vitamin A to rice, a staple food across many Asian countries, by introducing a gene originally from a daffodil.` },
  { s: 'MICHAEL', t: `Wait, a daffodil gene, in rice?` },
  { s: 'NALEDI', t: `Exactly — that's actually a real, well-known example, usually called "Golden Rice." And there's one more genuinely striking use: incorporating vaccines directly into foods like bananas or potatoes — meaning the plant itself manufactures the vaccine, which can then be transported to countries far more easily, without needing refrigeration.` },
  { s: 'MICHAEL', t: `That's a genuinely huge deal for places without reliable cold-chain infrastructure.` },
  { s: 'NALEDI', t: `Exactly the point — it's one of the more compelling humanitarian arguments in favour of the technology.` },
  { s: 'NALEDI', t: `Now, the other side — disadvantages of GMOs, and there are quite a few worth knowing. GMOs often contain glyphosate residue, due to extensive herbicide spraying. They're expensive, so mainly wealthier countries can actually benefit from the technology. The process is complex, so the possibility of error is genuinely significant. There's been no truly long-term safety testing yet, since it's a relatively new technology in the scale of human history.` },
  { s: 'MICHAEL', t: `What else?` },
  { s: 'NALEDI', t: `People may be allergic to the inserted gene itself — there's a well-known cautionary example of a Brazil nut gene once inserted into soya beans, which raised serious allergy concerns. Widespread use of GMO crops may lead to a loss of biodiversity, since fewer crop varieties dominate. New pathogens could theoretically be engineered for biological warfare. And ethically, there's a genuinely fine line between what can be done and what should be done.` },
  { s: 'MICHAEL', t: `That last point feels like it applies to basically all of biotechnology, honestly, not just GMOs specifically.` },
  { s: 'NALEDI', t: `It genuinely does — and it's worth remembering that framing, because it applies just as much to the medical field and new drug development as it does to agriculture. Only time will actually tell whether GMOs solve food security issues at scale. Theoretically, the potential benefits are huge — but the risks are significant too.` },

  // PART 18: Stem Cell Technology
  { s: 'MICHAEL', t: `Stem cells — I know the phrase gets thrown around a lot, but what actually makes a stem cell special?`, newPart: true },
  { s: 'NALEDI', t: `Stem cells are undifferentiated cells that have the ability to grow into any tissue in the body. That's the defining feature — most cells in your body have already "specialised" into one particular job, but a stem cell hasn't committed to a path yet.` },
  { s: 'MICHAEL', t: `Where do they actually come from?` },
  { s: 'NALEDI', t: `A few sources. They can be harvested from embryos left over after IVF treatment, from bone marrow, and from blood in the umbilical cord. Skin and cartilage stem cells have also been used in more recent research.` },
  { s: 'MICHAEL', t: `I'm guessing not all of those sources are equally uncontroversial.` },
  { s: 'NALEDI', t: `[thoughtful] Correct, and it's worth understanding exactly why. Embryonic stem cells are the most versatile, since they have the ability to form absolutely any tissue in the body. However, because obtaining them involves the destruction of human embryos, this is a genuinely controversial technology, ethically.` },
  { s: 'MICHAEL', t: `And the alternative — adult stem cells?` },
  { s: 'NALEDI', t: `Adult stem cells are much less controversial. Bone marrow specifically has been used for a long time to treat cancers of the blood, like leukaemia — but other types of stem cell treatments are constantly being explored too.` },
  { s: 'MICHAEL', t: `What kinds of procedures are we talking about?` },
  { s: 'NALEDI', t: `A few real examples: replacing dead cells in the heart after a heart attack, growing skin tissue to treat burn victims, and growing nerve cells to treat spinal cord injuries and Parkinson's disease.` },
  { s: 'MICHAEL', t: `That's a genuinely wide range of applications.` },
  { s: 'NALEDI', t: `It is — though it's worth being honest that a great deal more research is still needed before many of these procedures are fully perfected. That said, parents who believe there'll be success in the future are able to collect umbilical cord blood from their babies at birth. That blood can be frozen and stored for potential future use.` },
  { s: 'MICHAEL', t: `Is that widely available?` },
  { s: 'NALEDI', t: `Such facilities do exist in South Africa, but it's currently an expensive option, so it's not something every family has equal access to.` },

  // PART 19: Cloning
  { s: 'MICHAEL', t: `Okay, the one everyone's heard of — cloning. Dolly the sheep.`, newPart: true },
  { s: 'NALEDI', t: `Exactly the icon of this whole section, and we'll get to her properly in a moment. First, the definition: cloning is the natural or artificial process of creating a genetically identical copy of an organism, or of biological material like tissue. The organism produced this way is called a clone.` },
  { s: 'MICHAEL', t: `"Natural" cloning — that happens without any lab involvement?` },
  { s: 'NALEDI', t: `It genuinely does, and this is a detail people often miss. Cloning happens naturally whenever asexual reproduction takes place, or when a plant self-pollinates, or when identical twins form from a single zygote. All of those processes give rise to individuals with DNA identical to the parent.` },
  { s: 'MICHAEL', t: `So identical twins are, biologically speaking, natural clones of each other.` },
  { s: 'NALEDI', t: `Exactly right, genetically speaking. But biotechnology has enabled artificial cloning too — producing a new individual that's an exact copy of the organism the body cell was taken from.` },
  { s: 'MICHAEL', t: `And that's where Dolly comes in?` },
  { s: 'NALEDI', t: `Exactly. In July 1996, Dolly the sheep became the first cloned mammal produced using an adult cell — specifically, a mammary gland cell. And South Africa has its own milestone here too — in April 2003, Futhi the cow became the first cloned animal in South Africa, produced using a cell from the ear of a prize-winning dairy cow.` },
  { s: 'MICHAEL', t: `Worth flagging — IVF isn't the same thing as cloning, right? I could see someone confusing those.` },
  { s: 'NALEDI', t: `Genuinely important distinction to make, and a common exam trap. IVF, in-vitro fertilisation, uses a sperm and an egg to form an embryo — the resulting embryo is genetically different to both parents, it's a new combination. Cloning, by contrast, produces an organism genetically identical to a single source individual. Completely different genetic outcome, even though both involve lab-based reproductive technology.` },
  { s: 'MICHAEL', t: `What's actually the point of cloning — what are the advantages?` },
  { s: 'NALEDI', t: `A few genuine ones. Therapeutic cloning can replace damaged tissue — skin, heart cells, bone marrow — potentially helping to save human lives. Genetic diseases could theoretically be prevented. Superior animals could be bred to improve food supply and quality. And research in any form tends to improve broader scientific skills, which can open up other useful spin-off technologies down the line.` },
  { s: 'MICHAEL', t: `Let's actually walk through how cloning works, mechanically — like we did with recombinant DNA.` },
  { s: 'NALEDI', t: `Good instinct, let's use the classic sheep-cloning example. Say sheep A is the genetically superior animal we want to clone, and sheep B is a bit inferior, but hardy enough to survive the process of harvesting eggs.` },
  { s: 'MICHAEL', t: `So B is basically the "surrogate egg donor," while A is the one actually being copied.` },
  { s: 'NALEDI', t: `Exactly. Step one: an egg cell is taken from sheep B, and its nucleus is removed — so now you have an "empty" egg cell, with the cytoplasm intact but no genetic material inside it.` },
  { s: 'MICHAEL', t: `Step two?` },
  { s: 'NALEDI', t: `A body, or somatic, cell is collected from the genetically superior sheep, sheep A. The nucleus — containing sheep A's full DNA — is removed from that body cell and placed into the empty egg cell from sheep B.` },
  { s: 'MICHAEL', t: `So now you've got sheep B's egg "shell," but sheep A's genetic "engine" inside it.` },
  { s: 'NALEDI', t: `Exactly that. Step three: the egg cell is stimulated with an electric shock, which triggers it to start dividing by mitosis, just like a normal fertilised embryo would.` },
  { s: 'MICHAEL', t: `And because the nucleus came entirely from sheep A, the resulting embryo carries sheep A's DNA, not sheep B's, even though it started in sheep B's egg.` },
  { s: 'NALEDI', t: `Exactly right — the egg cell now has DNA from the superior sheep A, and it will grow into an embryo genetically identical to A. Step four: that embryo is then placed into the uterus of a surrogate, or foster, mother — let's call her sheep C — and it should develop to full term there.` },
  { s: 'MICHAEL', t: `And the resulting baby lamb?` },
  { s: 'NALEDI', t: `Is a clone of sheep A — meaning it's an exact genetic copy of sheep A, despite being carried and born by sheep C, and despite the egg cell originally coming from sheep B.` },
  { s: 'MICHAEL', t: `So three different sheep are actually involved in the process, but only one of them — sheep A — is genetically represented in the final clone.` },
  { s: 'NALEDI', t: `That's a genuinely excellent way to hold the whole process together — A provides the genes, B provides the "empty vessel" egg, C provides the womb to carry the pregnancy.` },

  // PART 20: Mitochondrial DNA and Tracing Genetic Links
  { s: 'MICHAEL', t: `Okay, last section — mitochondrial DNA. I remember you teasing this all the way back in Chapter 1, about how mitochondria have their own separate DNA.`, newPart: true },
  { s: 'NALEDI', t: `[warmly] I did promise we'd come back to it properly, and here we are. Mitochondrial DNA, mtDNA, is genuinely important for understanding evolution, which is why it belongs at the end of this genetics chapter, right before we head into evolution topics later on. It's found inside mitochondria, and it contains 37 genes, needed specifically to make the proteins involved in cellular respiration.` },
  { s: 'MICHAEL', t: `So it's a small, separate genome, entirely dedicated to keeping the mitochondria's own energy-production job running.` },
  { s: 'NALEDI', t: `Exactly. Now, here's what makes mtDNA especially useful for scientists studying ancestry: since there's no crossing over involving mtDNA — unlike the shuffling that happens with nuclear chromosomes during meiosis — the only changes that occur to it happen through mutations.` },
  { s: 'MICHAEL', t: `So mtDNA doesn't get "mixed" the way regular chromosomes do — it just slowly accumulates small mutations over time, generation after generation.` },
  { s: 'NALEDI', t: `Exactly right, and mtDNA mutates at a fairly regular, predictable rate — which means scientists can actually analyse those accumulated mutations to work out a rough timeline of genetic ancestry.` },
  { s: 'MICHAEL', t: `Like a slow-ticking genetic clock.` },
  { s: 'NALEDI', t: `That's a great way to picture it. And here's the other crucial detail: only the mother's mtDNA gets passed on to her offspring — both sons and daughters. This is because the father's mtDNA is located in the cytoplasm of the sperm cell, and that cytoplasm — along with the sperm's tail — gets discarded entirely at the moment of fertilisation.` },
  { s: 'MICHAEL', t: `So only the egg's cytoplasm, and therefore only the egg's mitochondria, actually survive into the new embryo.` },
  { s: 'NALEDI', t: `Exactly — meaning mtDNA is inherited purely down the maternal line, generation after generation, with no paternal contribution at all. So by analysing mtDNA, scientists can compare the mutations found in different people to work out just how closely related they actually are, purely through that maternal line.` },
  { s: 'MICHAEL', t: `That's genuinely the exact same idea as those consumer ancestry-testing kits people send off in the mail.` },
  { s: 'NALEDI', t: `Exactly the same underlying principle, just applied at a much larger, scientific-research scale.` },
  { s: 'NALEDI', t: `Here's where it gets genuinely fascinating: the general rule is, the more mutations found in a particular lineage, the older that lineage is believed to be — more time has passed for mutations to accumulate. This research has led scientists to conclude that our common female ancestor most likely lived about 150,000 years ago, in East Africa. She's been given the name "Mitochondrial Eve."` },
  { s: 'MICHAEL', t: `[surprised] Wait — so every single human alive today can trace their mtDNA back to one specific woman, 150,000 years ago?` },
  { s: 'NALEDI', t: `Through the maternal line specifically, yes — that's what the evidence points to. And this evidence supports what's known as the Out of Africa hypothesis: the idea that the human race originated in Africa, and then migrated outward to other parts of the world, gradually evolving regional variation as different populations spread and settled.` },
  { s: 'MICHAEL', t: `So this one specific technique — tracking mitochondrial mutation patterns — is actually part of the evidence base for a much bigger story about where humanity as a whole came from.` },
  { s: 'NALEDI', t: `Exactly — and that bigger story, human evolution and the details of that migration, is exactly what we'll dig into properly in a later chapter. For now, the key mtDNA facts are what matter: maternal-only inheritance, a steady mutation rate acting like a genetic clock, and its use in tracing ancestry all the way back to Mitochondrial Eve.` },

  // OUTRO: Wrapping It Up
  { s: 'NALEDI', t: `[excited] Alright, Michael — same tradition as Chapter 1. Give me the whole chapter, start to finish, in one shot.`, newPart: true },
  { s: 'MICHAEL', t: `[laughs] No pressure. Okay — genetics is the study of heredity, how traits pass from parents to offspring through genes, which are DNA segments, and alleles, the different versions of a gene at the same locus on homologous chromosomes. Genotype is the genetic code, phenotype is what you actually see; homozygous means matching alleles, heterozygous means different ones. Mendel's pea experiments — tall crossed with short gives an all-tall F1, but interbreeding that F1 reveals a 3:1 F2 ratio — led to his three laws: Segregation, Dominance, and Independent Assortment. Every genetic cross follows the same fixed layout: P1 phenotype and genotype, meiosis and gametes, fertilisation via a Punnett square, then F1 genotype and phenotype. Complete dominance gives that classic 3:1 ratio. Incomplete dominance blends into a brand-new, in-between phenotype, like pink flowers. Co-dominance shows both traits distinctly at once, like red-and-white cattle patches, or the AB blood group. Sex is determined by XX and XY gonosomes, always a 50/50 chance, and it's actually the father's sperm — X-carrying or Y-carrying — that decides it. Sex-linked disorders like haemophilia and colour-blindness sit on the X chromosome, so men, with only one X, need just a single recessive allele to be affected, while women need two — though cystic fibrosis, despite being recessive, is autosomal, not sex-linked, since it affects both sexes equally. Blood groups use three alleles — IA, IB, and i — with IA and IB co-dominant and i recessive to both, and can help rule someone out in paternity cases, though DNA profiling is the truly conclusive test. Dihybrid crosses track two traits at once, using four-letter gametes and a 9:3:3:1 ratio. Pedigrees let you work backwards from recessive individuals to figure out hidden carrier genotypes in their parents. Mutations can be harmless, harmful, or useful, depending on whether they hit non-coding or coding DNA — gene mutations like sickle cell and albinism are small-scale sequence errors, while chromosomal aberrations like Down syndrome come from non-disjunction during meiosis. Biotechnology covers DNA profiling, genetic engineering — like using recombinant DNA technology and bacteria to manufacture insulin — GMOs, with real advantages like pest resistance and edible vaccines but real disadvantages like cost and unknown long-term risks, plus stem cell technology, using versatile-but-controversial embryonic cells or less-controversial adult cells. Cloning creates a genetically identical copy using a body cell's nucleus placed into an empty donor egg, then carried by a surrogate — Dolly the sheep and Futhi the cow were the pioneering examples. And finally, mitochondrial DNA, inherited only from the mother, mutates at a steady rate, letting scientists trace ancestry all the way back to Mitochondrial Eve in East Africa, supporting the Out of Africa hypothesis.` },
  { s: 'NALEDI', t: `[impressed] ...Michael, genuinely, that might be an even better summary than Chapter 1's. You didn't miss a single major thread.` },
  { s: 'MICHAEL', t: `[laughs] I'm going to go lie down after that one.` },
  { s: 'NALEDI', t: `[warmly] Well earned. That's a wrap on Chapter 5. Next time, we'll pick up wherever the syllabus takes us next. Until then — remember, dominant masks in the heterozygote, recessive needs two copies to show, and every genetic diagram starts with P1 and ends with F1. We'll catch you in the next episode.` },
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

  console.log(`\nGenetics & Inheritance Chapter 5 Podcast — ${S.length} segments — model: ${PRIMARY_MODEL}\n`);

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

/**
 * Life, Decoded — Episode 5: "Genetics and Inheritance" — ElevenLabs audio generator
 * ----------------------------------------------------------------------------
 * Usage (from the project root, in a terminal with real internet access —
 * this will NOT work from inside Cowork's sandbox, run it on your own machine):
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-episode5-audio.mjs
 *
 * To (re-)record only specific parts, pass their numbers as arguments:
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-episode5-audio.mjs 6
 *
 * What it does:
 *  1. Generates sections of "Life, Decoded — Episode 5: Genetics and
 *     Inheritance," each SAVED AS ITS OWN SEPARATE FILE. Currently only
 *     Part 6 (Monohybrid Crosses with Complete Dominance), Part 7
 *     (Monohybrid Crosses with Incomplete Dominance), and Part 8
 *     (Monohybrid Crosses with Co-Dominance) are populated, per request —
 *     more parts can be added to the SECTIONS array below as they're ready.
 *  2. Two-host format only — Naledi and Michael. No third narrator voice
 *     for this series (unlike the Business Brief series).
 *  3. Tries the "eleven_v3" model first, falling back automatically to
 *     eleven_turbo_v2_5 if your plan doesn't have v3 access. Bracketed
 *     delivery cues like [warmly], [curious], [laughs] are preserved for
 *     v3 (it reads them as delivery direction) and stripped automatically
 *     before the turbo fallback, which doesn't support them.
 *  4. Skips any clip that already exists, so a run that gets interrupted
 *     (e.g. wifi drops) can just be re-run — only the missing pieces regenerate.
 *  5. Stitches each section's clips into its own MP3 using ffmpeg if
 *     installed (with natural pauses), or raw concatenation with embedded
 *     silence as a fallback.
 *
 * Output — one file per section, in:
 *   podcasts/Life-Decoded-Episode-5/Part 6 - Monohybrid Crosses with Complete Dominance.mp3
 *
 * Individual clips are kept in podcasts/tmp/life-decoded-episode-5/<section-slug>/ for resuming.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-life-decoded-episode5-audio.mjs');
  process.exit(1);
}

const VOICES = {
  NALEDI: 'ZtcPZrt9K4w8e1OB9M6w',  // updated voice (also used for "Tyla" if a source PDF names the expert host that instead)
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
};

const PRIMARY_MODEL = 'eleven_v3';
const FALLBACK_MODEL = 'eleven_turbo_v2_5';

// Embedded silent MP3 clips (base64) so natural pauses work even when the
// user's machine doesn't have ffmpeg installed — no external dependency needed.
const SILENCE_SHORT_B64 = 'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAPAAAGzgAqKioqKio5OTk5OTk5SEhISEhIV1dXV1dXV2dnZ2dnZ2d2dnZ2dnaFhYWFhYWFlZWVlZWVlaSkpKSkpLOzs7Ozs7PCwsLCwsLC0tLS0tLS4eHh4eHh4fDw8PDw8PD///////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAT1AAAAAAAABs4x4WRRAAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAARMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMQpg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxFMDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDEfIPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMSmA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxM+DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='; // ~0.35s, between dialogue lines
const SILENCE_LONG_B64 = 'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAkAAAPVgASEhkZGSAgICYmJi0tNDQ0Ozs7QkJCSEhPT09WVlZdXV1kZGRqanFxcXh4eH9/f4WFjIyMk5OTmpqaoaGhp6eurq61tbW8vLzCwsnJydDQ0NfX197e3uTk6+vr8vLy+fn5//8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAS2AAAAAAAAD1aoAgi4AAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAARMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMQpg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxFMDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDEfIPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMSmA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxM+DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='; // ~0.9s, wider pause where the topic shifts

function voiceSettingsFor(modelId) {
  // Per ElevenLabs' own recommended defaults for eleven_v3 (style + speaker boost
  // included); fallback model just uses the classic two settings.
  return modelId === PRIMARY_MODEL
    ? { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true }
    : { stability: 0.5, similarity_boost: 0.75 };
}

const ROOT = path.resolve('.');
const OUT_DIR = path.join(ROOT, 'podcasts', 'Life-Decoded-Episode-5');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'life-decoded-episode-5');

// ─────────────────────────────────────────────────────────────────────────
// SECTIONS — each part is generated and stitched into its own separate file.
// Per request, only Parts 6, 7, and 8 are populated for now.
// Bracketed cues like [warmly] are audio delivery tags for v3 — kept in the
// text on purpose (v3 reads them as direction, not spoken words); they get
// stripped automatically before the turbo fallback runs.
// ─────────────────────────────────────────────────────────────────────────
const SECTIONS = [

{
  num: 6,
  file: 'Part 6 - Monohybrid Crosses with Complete Dominance',
  segs: [
    { s: 'NALEDI', t: `Alright, let's put that template to work. First type: monohybrid crosses with complete dominance — this is exactly what Mendel's pea experiment showed us. The dominant allele completely masks the recessive allele in the heterozygous condition.` },
    { s: 'MICHAEL', t: `Let's do a full worked example, properly, top to bottom.` },
    { s: 'NALEDI', t: `Good plan — and let's build our own scenario instead of just recycling the textbook's seed example. Human earlobes. Earlobes are either free, hanging loose, or attached, sitting flush against the side of the head. The allele for free earlobes is dominant over the allele for attached earlobes. Let's use capital E for free and lowercase e for attached. Two heterozygous free-earlobed parents have children. Show the genotype and phenotype of the F1 generation.` },
    { s: 'MICHAEL', t: `Okay — P1 phenotype: free earlobes times free earlobes.` },
    { s: 'NALEDI', t: `Right. P1 genotype: since we're told both parents are heterozygous, that's capital E lowercase e, times capital E lowercase e.` },
    { s: 'MICHAEL', t: `Meiosis — gametes. Each parent splits capital E lowercase e into capital E and lowercase e.` },
    { s: 'NALEDI', t: `Exactly. So gametes from parent one: capital E and lowercase e. Gametes from parent two: capital E and lowercase e. Now, fertilisation — build the Punnett square. Capital E and lowercase e along the top, capital E and lowercase e down the side.` },
    { s: 'MICHAEL', t: `Filling in the boxes: capital E with capital E gives capital E capital E. Capital E with lowercase e gives capital E lowercase e. Lowercase e with capital E gives capital E lowercase e. Lowercase e with lowercase e gives lowercase e lowercase e.` },
    { s: 'NALEDI', t: `Perfect. So the F1 genotypes are: capital E capital E, capital E lowercase e, capital E lowercase e, lowercase e lowercase e.` },
    { s: 'MICHAEL', t: `And phenotypes — capital E capital E is free earlobes, both capital E lowercase e combinations are free earlobes because capital E is dominant, and lowercase e lowercase e is attached earlobes.` },
    { s: 'NALEDI', t: `Exactly — three free, one attached.` },
    { s: 'MICHAEL', t: `So genotypic ratio is one capital E capital E, to two capital E lowercase e, to one lowercase e lowercase e, and phenotypic ratio is 3 free to 1 attached.` },
    { s: 'NALEDI', t: `That's a textbook-perfect answer. And notice — this is exactly the same 3:1 ratio Mendel found with his tall and short peas. A cross between two heterozygous parents always produces that same pattern: 25 percent homozygous dominant, 50 percent heterozygous, 25 percent homozygous recessive — genotypically — which becomes a 3-dominant-to-1-recessive ratio phenotypically.` },
    { s: 'MICHAEL', t: `So once you've internalised this one pattern — heterozygous times heterozygous gives 3:1 — you can recognise it instantly in a dozen different disguises across different traits.` },
    { s: 'NALEDI', t: `Exactly right, and that recognition is honestly most of what this section is testing.` },
    { s: 'MICHAEL', t: `Quick follow-up — is it possible for two parents who can both roll their tongues, a dominant trait, to have a child who can't roll their tongue?` },
    { s: 'NALEDI', t: `Yes, absolutely — and that's actually a really common style of exam question, asking you to explain it without drawing a full diagram. Here's the logic in words: if both parents are heterozygous, capital R lowercase r, each carries one hidden recessive allele, lowercase r, even though they show the dominant tongue-rolling phenotype. If both parents happen to pass on their recessive lowercase r allele to a particular child, that child would be lowercase r lowercase r — homozygous recessive — and would be a non-roller, even though neither parent shows that trait themselves.` },
    { s: 'MICHAEL', t: `So the recessive trait was hiding in both parents the whole time, same idea as Mendel's peas.` },
    { s: 'NALEDI', t: `Exactly the same underlying idea, just applied to humans instead of pea plants.` },
  ],
},

{
  num: 7,
  file: 'Part 7 - Monohybrid Crosses with Incomplete Dominance',
  segs: [
    { s: 'MICHAEL', t: `Okay, "complete dominance" implies there's an incomplete version too?` },
    { s: 'NALEDI', t: `There is, and it's a genuinely different mechanism, worth keeping very separate in your head. Incomplete dominance is a cross between two phenotypically different parents where no allele of the gene is either dominant or recessive. The offspring end up different from both parents, with an intermediate — a blended — phenotype.` },
    { s: 'MICHAEL', t: `So instead of one allele masking the other, they sort of... mix?` },
    { s: 'NALEDI', t: `That's a good way to picture it. Let's skip the flower example every textbook reaches for and use human hair texture instead. Say someone with homozygous curly hair has a child with someone who has homozygous straight hair — the child ends up with wavy hair, genuinely in between, not a copy of either parent.` },
    { s: 'MICHAEL', t: `Not curly, not straight — a genuine blend.` },
    { s: 'NALEDI', t: `Exactly. Let's build the diagram. P1 phenotype: curly times straight. Genotype: since there's no dominance here, we use capital C for curly and capital S for straight — both capitals, because neither is dominant or recessive. Both parents are homozygous: capital C capital C, times capital S capital S.` },
    { s: 'MICHAEL', t: `Gametes: capital C and capital C from the curly-haired parent, capital S and capital S from the straight-haired parent.` },
    { s: 'NALEDI', t: `Right. Fertilisation — Punnett square, capital C and capital C across the top, capital S and capital S down the side. Every single box comes out capital C capital S.` },
    { s: 'MICHAEL', t: `So the F1 genotype is entirely capital C capital S, and the phenotype is... wavy, for all of them?` },
    { s: 'NALEDI', t: `Exactly — all wavy, because the genotype capital C capital S represents that new, blended, intermediate phenotype. The fact that a brand-new phenotype appeared — one that's neither parent's texture — is your signal that you're dealing with incomplete dominance, not complete dominance.` },
    { s: 'MICHAEL', t: `That's actually a really clean diagnostic — if the offspring look like neither parent but a mix, it's incomplete dominance.` },
    { s: 'NALEDI', t: `Exactly right, and that's precisely the instinct examiners are testing when they describe a scenario and ask you to identify the type of inheritance at play.` },
    { s: 'NALEDI', t: `There's a human example worth knowing too — hypercholesterolemia, high blood cholesterol. H represents the allele for very high levels, L for low levels. Someone who's heterozygous, HL, would show high — but not extremely high — cholesterol; that intermediate phenotype is the incomplete dominance signature again. Only someone homozygous HH would show extremely high levels.` },
    { s: 'MICHAEL', t: `So even in a medical context, the "blended, in-between phenotype for heterozygotes" pattern holds.` },
    { s: 'NALEDI', t: `Exactly the same logic, just applied to a real health condition instead of hair texture.` },
  ],
},

{
  num: 8,
  file: 'Part 8 - Monohybrid Crosses with Co-Dominance',
  segs: [
    { s: 'MICHAEL', t: `Okay, and now I'm guessing "co-dominance" is yet another distinct mechanism, and I have a feeling I'm going to confuse it with incomplete dominance.` },
    { s: 'NALEDI', t: `You've basically named the single most common mistake in this entire section, so let's nail the difference properly, right now. In co-dominance, both alleles of the gene are equally dominant, so both get expressed equally, together, in the phenotype of the offspring.` },
    { s: 'MICHAEL', t: `So instead of blending into a new, third colour like incomplete dominance, both original traits show up side by side?` },
    { s: 'NALEDI', t: `Exactly that distinction. Let's move past the cattle example too, since every textbook leans on that one — we'll use chickens instead. In certain chicken breeds, feather colour comes out black, white, or a speckled mix of both. This comes from a black allele — let's use capital K, like the ink term, so we don't mix it up with blue — and a white allele, capital W, for feather colour. Cross a black rooster with a white hen.` },
    { s: 'MICHAEL', t: `P1 phenotype: black feathers times white feathers. Genotype: capital K capital K, times capital W capital W, both capitals again, since neither capital K nor capital W is dominant.` },
    { s: 'NALEDI', t: `Exactly. Gametes: capital K and capital K from the rooster, capital W and capital W from the hen. Punnett square gives every offspring the genotype capital K capital W.` },
    { s: 'MICHAEL', t: `And the phenotype... this is where it's different from incomplete dominance, right? It's not a blended grey — it's actually a speckled mix of both.` },
    { s: 'NALEDI', t: `Exactly — the phenotype is black-and-white speckled feathers. Both colours show up, distinctly, side by side across the plumage, rather than blending into a uniform new shade.` },
    { s: 'MICHAEL', t: `So wavy hair is a genuine blend, a merge — but black-and-white speckled feathers is both original colours sitting there, separately, at the same time.` },
    { s: 'NALEDI', t: `That is exactly the distinction to hold onto — and it's worth repeating because it's such a common mix-up: incomplete dominance blends into something new (curly + straight → wavy hair); co-dominance shows both original traits simultaneously and distinctly (black + white → black-and-white speckled feathers).` },
    { s: 'NALEDI', t: `And a quick heads-up for later: blood grouping is also an example of co-dominance, specifically between the capital I-A and capital I-B alleles — we'll do that properly a bit later in the episode once we've covered multiple alleles.` },
  ],
},

{
  num: 11,
  file: 'Part 11 - Multiple Alleles - Blood Groups and Paternity Testing',
  segs: [
    { s: 'MICHAEL', t: `Alright, next up — blood types. I know I have one, I genuinely don't know how genetics decides it.` },
    { s: 'NALEDI', t: `This is actually a great section because it introduces a genuinely new concept: multiple alleles. Everything we've covered so far — tall/short, red/white, haemophilia — involved just two alleles per gene. Blood type is controlled by three.` },
    { s: 'MICHAEL', t: `Three alleles for one gene? How does that even work if you only inherit two?` },
    { s: 'NALEDI', t: `Great instinct to ask — here's the resolution. All three alleles — named capital I superscript A, capital I superscript B, and lowercase i — exist across the human population as a whole. But any single individual still only ever inherits two of those three, one from each parent.` },
    { s: 'MICHAEL', t: `So the "multiple" refers to the population-wide pool of options, not to any one person having three.` },
    { s: 'NALEDI', t: `Exactly that distinction. There are four blood type phenotypes in humans: A, B, AB, or O. Here's exactly how the genotypes map to those phenotypes. Capital I-A, capital I-A, or capital I-A, lowercase i, gives blood type A. Capital I-B, capital I-B, or capital I-B, lowercase i, gives blood type B. Capital I-A, capital I-B, gives blood type AB. And lowercase i, lowercase i, gives blood type O.` },
    { s: 'MICHAEL', t: `So capital I-A and capital I-B both dominate over lowercase i...` },
    { s: 'NALEDI', t: `Exactly — lowercase i is recessive to both. But capital I-A and capital I-B are co-dominant to each other — remember co-dominance from earlier? — which is exactly why someone with the capital I-A, capital I-B genotype shows both the A and B phenotype at once, rather than one masking the other. That's your co-dominance connection from a few sections back.` },
    { s: 'MICHAEL', t: `So the AB blood type is a co-dominance situation, same underlying logic as the black-and-white speckled chicken feathers.` },
    { s: 'NALEDI', t: `Exactly the same principle, just applied to blood antigens instead of feather colour.` },
    { s: 'NALEDI', t: `Let's run a worked cross. A man and a woman both have blood group B — how is it possible for them to have a child with blood group O?` },
    { s: 'MICHAEL', t: `If both are capital I-B, capital I-B, that seems impossible — no lowercase i allele anywhere to pass on.` },
    { s: 'NALEDI', t: `Exactly the trap to watch for — you can't assume genotype purely from phenotype here. Blood group B could mean capital I-B, capital I-B, or capital I-B, lowercase i. For a group-O child to be possible, both parents must actually be heterozygous: capital I-B, lowercase i.` },
    { s: 'MICHAEL', t: `P1 phenotype: blood group B times blood group B. Genotype: capital I-B, lowercase i, times capital I-B, lowercase i. Gametes: capital I-B, and lowercase i, from each parent.` },
    { s: 'NALEDI', t: `Punnett square: capital I-B with capital I-B gives capital I-B, capital I-B. Capital I-B with lowercase i gives capital I-B, lowercase i. Lowercase i with capital I-B gives capital I-B, lowercase i. Lowercase i with lowercase i gives lowercase i, lowercase i.` },
    { s: 'MICHAEL', t: `So genotypes are capital I-B capital I-B, capital I-B lowercase i, capital I-B lowercase i, and lowercase i lowercase i — and phenotypically that's 3 blood group B to 1 blood group O.` },
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
  ],
},

{
  num: 13,
  file: 'Part 13 - Genetic Lineage - Reading Pedigree Diagrams',
  segs: [
    { s: 'NALEDI', t: `Let's walk through the standard method with an example. Say the diagram shows eye colour across three generations, and we're told hazel eye colour, capital Z, is dominant over green eye colour, lowercase z. Here's the exact sequence of steps to follow, every single time.` },
    { s: 'MICHAEL', t: `Step one?` },
    { s: 'NALEDI', t: `Study any key or opening statement, and identify which trait is dominant and which is recessive. In our case: hazel is dominant.` },
    { s: 'MICHAEL', t: `Step two?` },
    { s: 'NALEDI', t: `Write in the phenotype of every individual in the diagram, based on the shading — who's hazel-eyed, who's green-eyed, according to the key.` },
    { s: 'MICHAEL', t: `Step three?` },
    { s: 'NALEDI', t: `Fill in the genotype of everyone showing the recessive condition first — it must be two recessive alleles, two lower-case letters, like lowercase z lowercase z, since recessive only shows up when homozygous.` },
    { s: 'MICHAEL', t: `That's the easy, unambiguous group to start with.` },
    { s: 'NALEDI', t: `Exactly, always start there. Step four: for every individual with the recessive condition, you know each of their two alleles came from each of their two parents. So you can work backwards and fill in one recessive allele into each of that individual's parents' genotypes — even if those parents show the dominant phenotype themselves.` },
    { s: 'MICHAEL', t: `Because a dominant-looking parent could still be secretly heterozygous, carrying one hidden recessive allele that got passed down.` },
    { s: 'NALEDI', t: `Exactly right — that's the whole logical trick of pedigree analysis. Step five: if those parents show the dominant characteristic, fill in the second letter of their genotype as the dominant, capital allele — since we already know they're not homozygous recessive themselves.` },
    { s: 'MICHAEL', t: `So a parent who looks dominant, but has a recessive-condition child, must be heterozygous — capital Z lowercase z, not capital Z capital Z.` },
    { s: 'NALEDI', t: `Exactly. And step six: any other individual showing the dominant characteristic, where you have no such evidence forcing a particular genotype, could most likely be either homozygous dominant, capital Z capital Z, or heterozygous, capital Z lowercase z — and unless the pedigree gives you more specific evidence, like a recessive grandchild through them, you generally can't narrow it down further than "capital Z capital Z, or capital Z lowercase z."` },
    { s: 'MICHAEL', t: `So pedigree work is really just repeatedly asking "does this person's genotype get forced by evidence from their children, or is it still ambiguous?"` },
    { s: 'NALEDI', t: `That is a genuinely excellent summary of the entire method. Every pedigree question is really testing whether you can walk that same six-step logic, carefully, individual by individual.` },
    { s: 'NALEDI', t: `One more genuinely useful skill: pedigrees are also how you prove, visually, whether a trait is sex-linked or autosomal. If a trait is sex-linked recessive, you'll typically see it affecting far more males than females across the diagram, and it often appears to "skip" from a grandfather through an unaffected, carrier daughter, to a grandson. If a trait affects males and females at roughly similar, comparable rates — like we discussed with cystic fibrosis — that's evidence it's autosomal, not sex-linked.` },
    { s: 'MICHAEL', t: `So the pattern the shading makes across the generations is itself evidence, not just the individual genotypes.` },
    { s: 'NALEDI', t: `Exactly — reading that overall pattern is often exactly what a "prove this characteristic is/isn't sex-linked" question is asking you to do.` },
  ],
},

{
  num: 99,
  file: 'Outro - Wrapping It Up',
  segs: [
    { s: 'NALEDI', t: `[excited] Alright, Michael — same tradition as Chapter 1. Give me the whole chapter, start to finish, in one shot.` },
    { s: 'MICHAEL', t: `[laughs] No pressure. Okay — genetics is the study of heredity, how traits pass from parents to offspring through genes, which are DNA segments, and alleles, the different versions of a gene at the same locus on homologous chromosomes. Genotype is the genetic code, phenotype is what you actually see; homozygous means matching alleles, heterozygous means different ones. Mendel's pea experiments — tall crossed with short gives an all-tall F1, but interbreeding that F1 reveals a 3:1 F2 ratio — led to his three laws: Segregation, Dominance, and Independent Assortment. Every genetic cross follows the same fixed layout: P1 phenotype and genotype, meiosis and gametes, fertilisation via a Punnett square, then F1 genotype and phenotype. Complete dominance gives that classic 3:1 ratio. Incomplete dominance blends into a brand-new, in-between phenotype, like wavy hair from curly and straight parents. Co-dominance shows both traits distinctly at once, like black-and-white speckled chicken feathers, or the AB blood group. Sex is determined by XX and XY gonosomes, always a 50/50 chance, and it's actually the father's sperm — X-carrying or Y-carrying — that decides it. Sex-linked disorders like haemophilia and colour-blindness sit on the X chromosome, so men, with only one X, need just a single recessive allele to be affected, while women need two — though cystic fibrosis, despite being recessive, is autosomal, not sex-linked, since it affects both sexes equally. Blood groups use three alleles — capital I-A, capital I-B, and lowercase i — with capital I-A and capital I-B co-dominant and lowercase i recessive to both, and can help rule someone out in paternity cases, though DNA profiling is the truly conclusive test. Dihybrid crosses track two traits at once, using four-letter gametes and a 9:3:3:1 ratio. Pedigrees let you work backwards from recessive individuals to figure out hidden carrier genotypes in their parents. Mutations can be harmless, harmful, or useful, depending on whether they hit non-coding or coding DNA — gene mutations like sickle cell and albinism are small-scale sequence errors, while chromosomal aberrations like Down syndrome come from non-disjunction during meiosis. Biotechnology covers DNA profiling, genetic engineering — like using recombinant DNA technology and bacteria to manufacture insulin — GMOs, with real advantages like pest resistance and edible vaccines but real disadvantages like cost and unknown long-term risks, plus stem cell technology, using versatile-but-controversial embryonic cells or less-controversial adult cells. Cloning creates a genetically identical copy using a body cell's nucleus placed into an empty donor egg, then carried by a surrogate — Dolly the sheep and Futhi the cow were the pioneering examples. And finally, mitochondrial DNA, inherited only from the mother, mutates at a steady rate, letting scientists trace ancestry all the way back to Mitochondrial Eve in East Africa, supporting the Out of Africa hypothesis.` },
    { s: 'NALEDI', t: `[impressed] ...Michael, genuinely, that might be an even better summary than Chapter 1's. You didn't miss a single major thread.` },
    { s: 'MICHAEL', t: `[laughs] I'm going to go lie down after that one.` },
    { s: 'NALEDI', t: `[warmly] Well earned. That's a wrap on Chapter 5. Next time, we'll pick up wherever the syllabus takes us next. Until then — remember, dominant masks in the heterozygote, recessive needs two copies to show, and every genetic diagram starts with P1 and ends with F1. We'll catch you in the next episode.` },
  ],
},

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
    return 'v3';
  } catch (e) {
    console.warn(`  ! ${PRIMARY_MODEL} failed (${e.message.slice(0, 300)}) — retrying with ${FALLBACK_MODEL}`);
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

function slugifyFolder(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function generateSection(sec, ffmpegAvailable, silenceShort, silenceLong) {
  const secDir = path.join(TMP_ROOT, slugifyFolder(sec.file));
  fs.mkdirSync(secDir, { recursive: true });

  const files = [];
  let usedFallback = 0;

  for (let i = 0; i < sec.segs.length; i++) {
    const seg = sec.segs[i];
    const voiceId = VOICES[seg.s];
    const fname = `${pad(i)}_${seg.s.toLowerCase()}.mp3`;
    const outPath = path.join(secDir, fname);
    files.push({ path: outPath, isTitle: false });

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

  const missing = files.filter(f => !fs.existsSync(f.path) || fs.statSync(f.path).size === 0);
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
      if (!fs.existsSync(f.path)) continue;
      lines.push(`file '${f.path.replace(/'/g, "'\\''")}'`);
      lines.push(`file '${silenceShort.replace(/'/g, "'\\''")}'`);
    }
    fs.writeFileSync(listPath, lines.join('\n'));
    execSync(`ffmpeg -y -f concat -safe 0 -i "${listPath}" -c:a libmp3lame -q:a 2 "${outPath}"`, { stdio: 'ignore' });
    console.log(`  ✅ Saved: ${outPath}`);
  } else {
    const shortSilence = Buffer.from(SILENCE_SHORT_B64, 'base64');
    const out = fs.createWriteStream(outPath);
    for (const f of files) {
      if (!fs.existsSync(f.path)) continue;
      out.write(fs.readFileSync(f.path));
      out.write(shortSilence);
    }
    out.end();
    console.log(`  ✅ Saved (raw concat with natural pauses): ${outPath}`);
  }
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(TMP_ROOT, { recursive: true });

  const requested = process.argv.slice(2).map(Number).filter(n => Number.isInteger(n) && n >= 1);
  const sectionsToRun = requested.length ? SECTIONS.filter(s => requested.includes(s.num)) : SECTIONS;

  if (requested.length) {
    console.log(`Re-recording only part(s): ${sectionsToRun.map(s => s.num).join(', ')}\n`);
    for (const sec of sectionsToRun) {
      const secDir = path.join(TMP_ROOT, slugifyFolder(sec.file));
      if (fs.existsSync(secDir)) fs.rmSync(secDir, { recursive: true, force: true });
      const outPath = path.join(OUT_DIR, `${sec.file}.mp3`);
      if (fs.existsSync(outPath)) fs.rmSync(outPath, { force: true });
    }
  }

  const ffmpegAvailable = hasFfmpeg();
  let silenceShort, silenceLong;
  if (ffmpegAvailable) {
    silenceShort = path.join(TMP_ROOT, '_silence_short.mp3');
    silenceLong = path.join(TMP_ROOT, '_silence_long.mp3');
    if (!fs.existsSync(silenceShort)) {
      execSync(`ffmpeg -y -f lavfi -i anullsrc=r=44100:cl=mono -t 0.35 -q:a 9 "${silenceShort}"`, { stdio: 'ignore' });
    }
    if (!fs.existsSync(silenceLong)) {
      execSync(`ffmpeg -y -f lavfi -i anullsrc=r=44100:cl=mono -t 0.9 -q:a 9 "${silenceLong}"`, { stdio: 'ignore' });
    }
  } else {
    console.warn('⚠ ffmpeg not found — sections will be raw-concatenated using embedded silence for pauses. Install ffmpeg for cleaner pacing.\n');
  }

  console.log(`Life, Decoded — Episode 5: Genetics and Inheritance — running ${sectionsToRun.length} of ${SECTIONS.length} part(s)\n`);

  for (const sec of sectionsToRun) {
    console.log(`\n▶ ${sec.file}`);
    await generateSection(sec, ffmpegAvailable, silenceShort, silenceLong);
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final files.`);
}

main().catch(e => { console.error(e); process.exit(1); });

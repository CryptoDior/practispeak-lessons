/**
 * The Business Brief — Professionalism and Ethics Podcast Series — ElevenLabs audio generator
 * ----------------------------------------------------------------------------
 * Usage (from the project root, in a terminal with real internet access —
 * this will NOT work from inside Cowork's sandbox, run it on your own machine):
 *
 *   node --env-file=.env.local scripts/generate-ethics-podcast-audio.mjs
 *
 * To (re-)record only specific episodes, pass their numbers as arguments:
 *
 *   node --env-file=.env.local scripts/generate-ethics-podcast-audio.mjs 1
 *
 * What it does:
 *  1. Generates episodes of "The Business Brief — Professionalism and Ethics"
 *     series, each SAVED AS ITS OWN SEPARATE FILE, named after the episode.
 *     Currently Episodes 1-4 are populated — more episodes can be added to
 *     the EPISODES array below as they're ready.
 *  2. Amelia announces each episode's title at the start, then Naledi and
 *     Michael carry the rest of the episode, same pattern as the other
 *     Business Brief series.
 *  3. Tries the "eleven_v3" model first, falling back automatically to
 *     eleven_turbo_v2_5 if your plan doesn't have v3 access.
 *  4. Skips any clip that already exists, so a run that gets interrupted
 *     (e.g. wifi drops) can just be re-run — only the missing pieces regenerate.
 *  5. Stitches each episode's clips into its own MP3 using ffmpeg if
 *     installed (with natural pauses), or raw concatenation with embedded
 *     silence as a fallback — either way, natural pauses between speakers.
 *
 * Output — one file per episode, in:
 *   podcasts/The-Business-Brief-Ethics/Episode 1 - What Is Ethics, Really.mp3
 *
 * Individual clips are kept in podcasts/tmp/business-brief-ethics/<episode-slug>/ for resuming.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-ethics-podcast-audio.mjs');
  process.exit(1);
}

const VOICES = {
  NALEDI: 'ZF6FPAbjXT4488VcRRnw',  // updated voice
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
  AMELIA: 'IKne3meq5aSn9XLyUdCD',  // updated voice (narration)
};

const PRIMARY_MODEL = 'eleven_v3';
const FALLBACK_MODEL = 'eleven_turbo_v2_5';

// Embedded silent MP3 clips (base64) so natural pauses work even when the
// user's machine doesn't have ffmpeg installed — no external dependency needed.
const SILENCE_SHORT_B64 = 'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAPAAAGzgAqKioqKio5OTk5OTk5SEhISEhIV1dXV1dXV2dnZ2dnZ2d2dnZ2dnaFhYWFhYWFlZWVlZWVlaSkpKSkpLOzs7Ozs7PCwsLCwsLC0tLS0tLS4eHh4eHh4fDw8PDw8PD///////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAT1AAAAAAAABs4x4WRRAAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAARMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMQpg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxFMDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDEfIPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMSmA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxM+DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='; // ~0.35s, between dialogue lines
const SILENCE_LONG_B64 = 'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAkAAAPVgASEhkZGSAgICYmJi0tNDQ0Ozs7QkJCSEhPT09WVlZdXV1kZGRqanFxcXh4eH9/f4WFjIyMk5OTmpqaoaGhp6eurq61tbW8vLzCwsnJydDQ0NfX197e3uTk6+vr8vLy+fn5//8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAS2AAAAAAAAD1aoAgi4AAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAARMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMQpg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxFMDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDEfIPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMSmA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxM+DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='; // ~0.9s, around title announcements

function voiceSettingsFor(modelId) {
  // Per ElevenLabs' own recommended defaults for eleven_v3 (style + speaker boost
  // included); fallback model just uses the classic two settings.
  return modelId === PRIMARY_MODEL
    ? { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true }
    : { stability: 0.5, similarity_boost: 0.75 };
}

const ROOT = path.resolve('.');
const OUT_DIR = path.join(ROOT, 'podcasts', 'The-Business-Brief-Ethics');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'business-brief-ethics');

// ─────────────────────────────────────────────────────────────────────────
// EPISODES — each one is generated and stitched into its own separate file.
// (Episodes 1-4 populated for now — add more as they're ready.)
// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'Episode 1 - What Is Ethics, Really',
  segs: [
    { s: 'AMELIA', t: `Episode 1: What Is Ethics, Really` },
    { s: 'NALEDI', t: `Welcome to The Business Brief. Today we're starting something a bit different — professionalism and ethics. Not a piece of legislation this time, more a way of thinking.` },
    { s: 'MICHAEL', t: `I feel like I already know what ethics means. Doing the right thing?` },
    { s: 'NALEDI', t: `Close, but let's make it precise, because exams reward precision. Ethics means the moral principles that guide choices between right and wrong. In a business setting specifically, it's about deciding what's right and wrong for the workplace as a whole — the standards of conduct inside an organisation.` },
    { s: 'MICHAEL', t: `And "business ethics" — is that just the same thing with a label on it?` },
    { s: 'NALEDI', t: `It's more specific than that. Business ethics really refers to the ethics of the managers and executives, because they're the ones who set the tone for everyone else. When you hear businesses criticised for their ethics, it's usually about three things — greed, exploitation of workers or consumers, and abuse of a position of trust.` },
    { s: 'MICHAEL', t: `Exploitation — that word gets used a lot. What does it actually mean here?` },
    { s: 'NALEDI', t: `Simply, benefiting unfairly from someone else's work or money. Underpaying someone because you know they can't afford to walk away, or overcharging a customer because you know they have no alternative.` },
    { s: 'MICHAEL', t: `So where does a "Code of Ethics" fit into all this?` },
    { s: 'NALEDI', t: `Good question, because a lot of business decisions are covered by actual legislation, but plenty of grey areas aren't. That's exactly the gap a Code of Ethics fills — it's a broad statement of values and beliefs that defines the organisation, and it guides employers and employees toward ethical decisions where the law doesn't spell it out for them.` },
    { s: 'MICHAEL', t: `What actually goes into one of these codes?` },
    { s: 'NALEDI', t: `Typically it covers things like the company's assets, funds and records, how conflicts of interest are handled, management and employee conduct, and how the business treats information about its competitors.` },
    { s: 'MICHAEL', t: `Conflict of interest — give me a picture of that.` },
    { s: 'NALEDI', t: `Imagine someone working in a company's fleet department, the division that manages all the official company vehicles. If that same person quietly owns a second-hand car dealership on the side, and starts steering the company's vehicle purchases and trade-ins toward his own dealership, that's a classic conflict of interest. His personal financial interest is now feeding off his professional role, and that's exactly what a Code of Ethics is designed to prevent.` },
    { s: 'MICHAEL', t: `That's sneaky. Is that the kind of thing that shows up under "ethical practices" more broadly?` },
    { s: 'NALEDI', t: `Exactly the right link to make. There's a set of eight ethical practices businesses are expected to build into how they operate, and conflict of interest is one of them.` },
    { s: 'MICHAEL', t: `Let's go through all eight, then.` },
    { s: 'NALEDI', t: `First, due care — taking all reasonable steps to make sure nothing goes wrong, basically the level of care a sensible, responsible person would apply. Second, avoiding conflicts of interest, which we just covered. Third, abiding by national and international law — knowing the laws that apply to your business and actually operating within them, not just being vaguely aware of them.` },
    { s: 'MICHAEL', t: `That's three. Keep going.` },
    { s: 'NALEDI', t: `Fourth, being committed and responsible — employees and shareholders genuinely giving their best and making moral decisions, not just going through the motions. Fifth, care for the environment — thinking through the environmental impact of business decisions before making them. Sixth, confidentiality — client and employee information doesn't get disclosed or used for the business's benefit without permission.` },
    { s: 'MICHAEL', t: `Two left.` },
    { s: 'NALEDI', t: `Seventh, transparency and full disclosure — conducting deals openly enough that nobody could reasonably suspect dishonesty or corruption. And eighth, objectivity and impartiality — looking at each situation purely on its merits, without becoming personally involved or letting bias creep in.` },
    { s: 'MICHAEL', t: `That's a genuinely practical checklist, not just abstract values.` },
    { s: 'NALEDI', t: `That's exactly the point of it. None of these eight are complicated ideas individually, but a business that's consistently weak on even two or three of them starts to look untrustworthy pretty quickly — to employees, to customers, and eventually to regulators.` },
    { s: 'MICHAEL', t: `Let me try to summarise. Ethics is about right and wrong generally, business ethics is specifically about how managers and executives set that tone, and a Code of Ethics is the practical document that turns those values into guidance for actual workplace decisions — covering things like conflicts of interest, and built around eight core practices: due care, avoiding conflicts of interest, following the law, being committed and responsible, protecting the environment, confidentiality, transparency, and objectivity.` },
    { s: 'NALEDI', t: `That's a genuinely solid summary. Exam tip: when a scenario describes someone's personal interests overlapping with their professional decisions, your first instinct should be "conflict of interest" — examiners plant that scenario type constantly.` },
    { s: 'MICHAEL', t: `Noted. Next time?` },
    { s: 'NALEDI', t: `We look at where a business actually crosses the line — the real difference between ethical and unethical practice, and a code that's shaped so much of how South African companies are run today.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 2,
  file: 'Episode 2 - Where Ethical Business Crosses the Line',
  segs: [
    { s: 'AMELIA', t: `Episode 2: Where Ethical Business Crosses the Line` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Last time we covered what ethics actually means for a business. Today: how South Africa formally defines good corporate behaviour, and exactly what counts as crossing the line into unethical practice.` },
    { s: 'MICHAEL', t: `You mentioned a "code" shaping South African companies. What's the story there?` },
    { s: 'NALEDI', t: `In 1994, Judge Mervyn King chaired the first official committee on corporate governance in South Africa. What came out of it is known as the King Code, and it rests on three pillars — effective, ethical leadership, sustainable business practices, and good corporate citizenship.` },
    { s: 'MICHAEL', t: `Picture that as three pillars holding something up?` },
    { s: 'NALEDI', t: `Literally how it's often illustrated — like a temple roof resting on three columns. Take away any one pillar, and the whole structure of "good governance" becomes shaky.` },
    { s: 'MICHAEL', t: `You said "the" King Code, but I've also heard people mention King Three specifically.` },
    { s: 'NALEDI', t: `There are actually three versions — King I, King II, and King III — each one building on and expanding the last. King III is the most detailed, and it broadens those original three pillars into a much fuller list: ethical leadership and corporate citizenship, how a company's board and directors are structured and governed, audit committees, governance of risk, governance of information technology, compliance with laws and codes, internal audits, how the business manages its relationships with stakeholders, and integrated reporting and disclosure.` },
    { s: 'MICHAEL', t: `Is any of this actually enforceable, or is it more of a "strongly encouraged" thing?` },
    { s: 'NALEDI', t: `That's a sharp question, because the answer is genuinely both. The King Code itself isn't law — a company can't be prosecuted purely for ignoring it. But sections of it have been folded directly into actual legislation. A good chunk of King II, for instance, made its way into South Africa's Companies Act of 2008. So while the Code itself is voluntary guidance, parts of its spirit carry real legal weight.` },
    { s: 'MICHAEL', t: `Okay, so that's the "doing it right" side. What does doing it wrong actually look like in practice?` },
    { s: 'NALEDI', t: `There's a genuinely useful list here, because it moves past vague ideas of "being bad" into specific, recognisable behaviours. First — dishonesty, trickery, and deception. Think hiding where a product actually came from, quietly re-labelling or re-pricing old stock, or selling something used as if it were brand new.` },
    { s: 'MICHAEL', t: `That's straightforwardly lying to the customer.` },
    { s: 'NALEDI', t: `Right. Second — distorting facts to mislead or confuse, like using false figures in a set of accounts. Third — manipulating people emotionally by exploiting their vulnerabilities, the classic "buy now before it's too late" pressure tactic in advertising.` },
    { s: 'MICHAEL', t: `I've definitely seen that one.` },
    { s: 'NALEDI', t: `Everyone has. Fourth — greed to make excessive profit, like executives taking enormous salaries while the business itself is struggling through a downturn. Fifth — creating false documents to show inflated profits, sometimes dressed up as "creative accounting," specifically to keep shareholders and the tax authority happy.` },
    { s: 'MICHAEL', t: `That sounds like it edges into actual crime, not just bad ethics.` },
    { s: 'NALEDI', t: `It genuinely can, and that overlap is worth remembering — unethical and illegal aren't always the same thing, but they frequently travel together. Sixth on the list — avoiding penalty or compensation for an unlawful act, for example bribing someone to lie on your behalf to dodge a prison sentence. Seventh — a lack of transparency and actively resisting investigation, like refusing to let a company's finances be examined, or quietly concluding secret deals.` },
    { s: 'MICHAEL', t: `Three more?` },
    { s: 'NALEDI', t: `Eighth — harming the environment by exceeding legal pollution limits, whether that's pumping contaminated water into a river or ignoring carbon emission regulations. Ninth — invading someone's privacy for personal or professional gain, like using information from a confidential client file to benefit yourself or the business. And tenth — sexual discrimination, favouring one gender over another for a role where both are equally capable of doing the job.` },
    { s: 'MICHAEL', t: `That's a long list, but none of it feels obscure — it all feels like things that actually happen.` },
    { s: 'NALEDI', t: `That's exactly why it's worth knowing cold. Exam scenarios almost always describe one of these ten behaviours without naming it directly, and your job is to recognise which one it is.` },
    { s: 'MICHAEL', t: `Let me recap. The King Code, from Judge Mervyn King in 1994, rests on three pillars — ethical leadership, sustainable practices, and good corporate citizenship — and King III expands that into a detailed governance framework, parts of which are baked into the Companies Act of 2008. On the other side, unethical practice covers ten recognisable behaviours: dishonesty, distorting facts, emotional manipulation, excessive greed, falsified documents, bribery to dodge penalties, lack of transparency, environmental harm, invasion of privacy, and discrimination.` },
    { s: 'NALEDI', t: `Excellent. Exam tip: if a question gives you a short scenario and asks you to "identify the unethical practice," don't just say "it's unethical" — name the specific behaviour from that list and explain why it fits.` },
    { s: 'MICHAEL', t: `Name it, don't just flag it. Got it. Next episode?` },
    { s: 'NALEDI', t: `We move from ethics to professionalism specifically — what actually makes someone a professional, and what it looks like when that standard slips.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 3,
  file: 'Episode 3 - What Actually Makes Someone a Professional',
  segs: [
    { s: 'AMELIA', t: `Episode 3: What Actually Makes Someone a Professional` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Today: professionalism specifically — what the word actually means, and what happens when it's missing.` },
    { s: 'MICHAEL', t: `I'd have guessed professional just means "has a qualification."` },
    { s: 'NALEDI', t: `That used to be closer to the truth. A professional person, traditionally, is someone paid to perform a specialised set of tasks — think doctors, engineers, lawyers, clergymen, architects, military officers. Being paid is actually a key part of the definition — a brilliant amateur soccer player who isn't paid to play is still called an amateur, not a professional, no matter how skilled they are.` },
    { s: 'MICHAEL', t: `But you said "used to be." Has that shifted?` },
    { s: 'NALEDI', t: `It has. Today the term is applied far more broadly, to indicate a genuinely high quality of workmanship or skill in almost any field — you'll hear "professional" attached to artists, tradespeople, all sorts of roles that have nothing to do with a university degree. It's really become a question of hard work, honesty, attitude, appearance, and social responsibility, not just qualifications.` },
    { s: 'MICHAEL', t: `So what actually separates someone who's professional from someone who technically holds the same job title but isn't?` },
    { s: 'NALEDI', t: `A specific set of criteria. Expert and specialised knowledge in the field. Excellent skills within that profession. A high quality of work. A high standard of professional ethics, behaviour, and conduct at work. Reasonable morale and motivation. And genuinely being a master in the field, not just familiar with it.` },
    { s: 'MICHAEL', t: `Morale specifically — isn't that just about mood?` },
    { s: 'NALEDI', t: `Worth being precise here, because it's an easy mix-up in an exam. Morale refers to emotional or mental conditions that affect motivation — it's not the same word as "moral," which relates to values and ethics. Two very different ideas that sound almost identical.` },
    { s: 'MICHAEL', t: `Where does a Code of Conduct fit into all this?` },
    { s: 'NALEDI', t: `Most professions, and plenty of ordinary businesses too, have one — a document that spells out what's appropriate behaviour for its members and what's expected of them as workers. It's essentially the practical, day-to-day version of professionalism, written down so there's no ambiguity.` },
    { s: 'MICHAEL', t: `Is there a structured way to actually break professionalism down into specific principles?` },
    { s: 'NALEDI', t: `There is, and it's genuinely useful — six principles that spell out the word RICCOD. Respect: respecting the dignity and rights of others, and the image of the profession or organisation you represent. Integrity: working with honesty, according to the law and the norms of your profession. Competency: applying your skills and knowledge for the good of society and the environment, not just for your own advancement.` },
    { s: 'MICHAEL', t: `Halfway there.` },
    { s: 'NALEDI', t: `Confidentiality: never divulging client details to others, or using client information for your own benefit. Objectivity: staying fair and just to everyone, without bias or favouritism. And Development: continuously improving your own skills, and helping others do the same.` },
    { s: 'MICHAEL', t: `Can you make a couple of these concrete? Respect and integrity specifically.` },
    { s: 'NALEDI', t: `Sure. Professional respect looks like polite language with colleagues, helping others, listening to advice, respecting cultural, language, and religious differences, and dressing appropriately. Unprofessional respect looks like rude language, ridiculing someone's attempt to learn a new skill, or mocking someone's culture or religion. For integrity — professional looks like looking after equipment properly, keeping to your work hours, and having every dealing out in the open. Unprofessional looks like using the office photocopier for personal jobs, stealing stationery, or being open to bribery and secret deals.` },
    { s: 'MICHAEL', t: `Let's make this real with a full scenario — I feel like this is exactly the kind of thing that shows up as a case study.` },
    { s: 'NALEDI', t: `Good instinct, let's build one. Picture Tumelo, who works in the logistics office of a mid-sized transport company. He arrives ten to twenty minutes late most mornings, misses the manager's daily briefing without ever apologising, but still signs the time register as if he'd clocked in on schedule. He expects a female colleague to make him coffee the moment he walks in, and when she doesn't, he tells the whole office she's "only fit to make tea" — despite her actually outranking him.` },
    { s: 'MICHAEL', t: `Already a lot going on there.` },
    { s: 'NALEDI', t: `It gets worse. Tumelo spends a large chunk of his paid working hours running his side business selling car parts, using the company's phone, computer, and printer to do it. When the office system gets upgraded, he refuses to attend the training sessions because they clash with his side-business errands, so he can barely use the new software at all. And to top it off, he's recently started quietly threatening to share sensitive information he found in a client's file, unless that client agrees to fund part of his side business.` },
    { s: 'MICHAEL', t: `Okay, walking through that — where's the line between unprofessional and outright unethical?` },
    { s: 'NALEDI', t: `That's actually the exact skill this scenario is testing. Being late, skipping the briefing, falsifying the time register, insulting a colleague — those are largely professionalism failures, about conduct, respect, and competence. Using company resources for a private business, and refusing training that clashes with a personal money-making side project, sits right on the line between the two. But threatening to expose confidential client information for financial gain — that crosses fully into unethical territory. It's a breach of trust and confidentiality, not just poor conduct.` },
    { s: 'MICHAEL', t: `So it's not one big mess — it's several separate violations stacked on top of each other.` },
    { s: 'NALEDI', t: `Exactly, and that's usually how these scenarios are built. Don't just say "Tumelo is unprofessional." Go through it point by point, and for each one, decide: is this a professionalism issue, an ethics issue, or genuinely both?` },
    { s: 'MICHAEL', t: `Let me recap. Being a professional today is about far more than qualifications — it's expert knowledge, real skill, quality work, high ethical standards, motivation, and mastery, all wrapped in a Code of Conduct. RICCOD breaks that down into respect, integrity, competency, confidentiality, objectivity, and development. And a scenario like Tumelo's shows that a single character can rack up violations across both professionalism and ethics at the same time.` },
    { s: 'NALEDI', t: `Perfectly summarised. Exam tip: when you're asked to separate professionalism issues from ethics issues in the same scenario, don't rush — go behaviour by behaviour, because mixing the two together is one of the most common ways marks get lost on this topic.` },
    { s: 'MICHAEL', t: `One behaviour at a time. Next episode?` },
    { s: 'NALEDI', t: `Where personal ethics and professional duty can actually pull in opposite directions — and the beginning of a set of twelve principles that shape how a business should really be run.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 4,
  file: 'Episode 4 - The Twelve Principles That Protect a Business',
  segs: [
    { s: 'AMELIA', t: `Episode 4: The Twelve Principles That Protect a Business` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Today we look at where personal ethics and professional duty can actually pull against each other, and then work all the way through twelve principles that genuinely keep a business honest.` },
    { s: 'MICHAEL', t: `Personal ethics versus professional duty — can you make that distinction clear first?` },
    { s: 'NALEDI', t: `Personal ethics is your own individual conscience — your inner sense of what's right and wrong, shaped by how you were raised, your beliefs, your relationships. Professional ethics is about keeping to the code of your profession specifically. Most of the time they line up perfectly. But sometimes they genuinely conflict.` },
    { s: 'MICHAEL', t: `Give me a scenario where that actually happens.` },
    { s: 'NALEDI', t: `Picture an independent auditor named Kagiso, brought in to review the books of a small business owned by someone he's known since childhood. Digging into the accounts, he finds clear irregularities — the business has been quietly under-declaring its income to avoid paying full tax for several years running.` },
    { s: 'MICHAEL', t: `And his personal ethics say...` },
    { s: 'NALEDI', t: `Loyalty to an old friend, maybe a reluctance to cause serious trouble for someone he cares about. But his professional ethics as an auditor demand something completely different — he has to declare the irregularities, full stop, regardless of the friendship. That tension between the two is exactly what this distinction is testing.` },
    { s: 'MICHAEL', t: `So professionalism and ethics aren't actually the same thing.` },
    { s: 'NALEDI', t: `Related, but distinct. Professionalism is about the knowledge and skills of a profession, used for the good of society, applying a Code of Conduct set by your profession or business, and it's really focused on protecting the reputation of the business or profession. Ethics is about standards of behaviour that are acceptable to a society or community, forms part of that same Code of Conduct, but the focus is more on developing your own moral compass to guide decisions.` },
    { s: 'MICHAEL', t: `Okay — now these twelve principles. Where do we start?` },
    { s: 'NALEDI', t: `With four steps a business needs to take just to create the right conditions for good practice in the first place. Step one: codes and policies — a proper Code of Ethics, a Code of Conduct, and clear policies on specific issues affecting the business. Step two: communication — employees genuinely kept informed about changes, and about the organisation's ethics and values, not left to guess.` },
    { s: 'MICHAEL', t: `And the other two?` },
    { s: 'NALEDI', t: `Step three: training — regular updates so workers keep their competence and professional skills current, including specific training in ethics and decision-making. Step four: management — leadership has to visibly believe in these principles in everything they say and do, because if management treats the code as optional, nobody else will take it seriously either.` },
    { s: 'MICHAEL', t: `Now the twelve principles themselves.` },
    { s: 'NALEDI', t: `Principle one: no business should be started, or run, at the expense of someone else. The aim of a business should never be to harm someone else's interests purely to generate profit for shareholders. South Africa actually has two real, well-documented examples of exactly this going catastrophically wrong — the Masterbond and Fidentia scandals.` },
    { s: 'MICHAEL', t: `I've heard those names before but never really understood what happened.` },
    { s: 'NALEDI', t: `Masterbond stole around R600 million from mostly elderly pensioners. The company claimed to be a registered bank whose deposits were protected by the Reserve Bank, and told depositors their money was being used to buy land for residential estates and shops. In reality, most of those developments never existed — some of the land Masterbond claimed to own was actually under the sea. Documents were forged to make it look like the money was being used properly, while the people running the company were living in extraordinary luxury.` },
    { s: 'MICHAEL', t: `That's genuinely horrifying, given who they were targeting.` },
    { s: 'NALEDI', t: `It is. And Fidentia followed a disturbingly similar pattern — the company took around R694 million from a trust called Living Hands, money that was meant to support widows and orphans. While those vulnerable beneficiaries waited on monthly payments, the executives simply didn't reinvest the money as promised — they used it to pay themselves enormous salaries instead.` },
    { s: 'MICHAEL', t: `Principle two, then?` },
    { s: 'NALEDI', t: `Fair wages should be paid to both executives and employees. The Masterbond and Fidentia executives paid themselves salaries wildly out of proportion to what their staff earned. The broader principle is that workers shouldn't be exploited with low pay just because jobs are scarce and people feel forced to accept whatever they're offered.` },
    { s: 'MICHAEL', t: `Principle three?` },
    { s: 'NALEDI', t: `Tax should be paid regularly and honestly. Businesses and individuals shouldn't abuse the tax system or submit false returns. Tax should be declared honestly and on time, technology should never be used to disguise or over-complicate transactions to dodge proper scrutiny, and if a tax official ever suggests a bribe, that official should be reported to SARS, not accommodated.` },
    { s: 'MICHAEL', t: `That connects to something you mentioned earlier — creative accounting?` },
    { s: 'NALEDI', t: `Exactly the same idea. Creative accounting is the process of hiding some income or inflating expenses to make a business look healthier, or less profitable for tax purposes, than it actually is. Principle four follows directly from that — hire honest, trustworthy accountants with good reputations. The accountants at both Masterbond and Fidentia were guilty of exactly this kind of creative accounting, covering up huge personal loans to executives that were really just a slow-motion way of stealing from investors.` },
    { s: 'MICHAEL', t: `What comes next?` },
    { s: 'NALEDI', t: `Principle five: staffing and other processes should be open and transparent, with employees genuinely aware of the employment laws that protect them. Principle six: draw up a proper Code of Ethics, so employees know exactly what the company stands for and can buy into its expectations around conduct and ethical norms.` },
    { s: 'MICHAEL', t: `That's six down. Keep going?` },
    { s: 'NALEDI', t: `Principle seven follows on naturally — managers must set the tone and the example. Senior people in the company have to act as genuine role models, making sure their own actions and decisions line up with the Code of Ethics they're asking everyone else to follow.` },
    { s: 'MICHAEL', t: `Actions speak louder than words, basically.` },
    { s: 'NALEDI', t: `That's genuinely the exact idea behind it. A Code of Ethics printed and pinned to a wall means nothing if the person running the meeting breaks it in front of everyone the following week.` },
    { s: 'MICHAEL', t: `Principle eight?` },
    { s: 'NALEDI', t: `Ongoing development and training for all employees. Seminars on business ethics should be held regularly for managers and staff alike, so everyone genuinely understands why an ethical work culture matters, not just that it's expected of them.` },
    { s: 'MICHAEL', t: `Nine?` },
    { s: 'NALEDI', t: `Performance management systems should be in place. Performance should be evaluated against a job description that's actually been discussed and agreed between manager and employee — and crucially, ethical behaviour itself should be part of what's measured, not just output or sales numbers.` },
    { s: 'MICHAEL', t: `So someone could hit every target and still fail this measure, if they got there unethically?` },
    { s: 'NALEDI', t: `Exactly the point of building it into the system deliberately. Principle ten: there must be adequate internal controls. The systems that enforce the Code of Ethics need ongoing monitoring, with regular discussions where potential problems get identified and corrected before they spiral — and just as importantly, successes should be shared and celebrated too, not just failures punished.` },
    { s: 'MICHAEL', t: `Two left.` },
    { s: 'NALEDI', t: `Principle eleven: there should be honesty in all relationships and transactions. Businesses need systems that actively protect customers, suppliers, and shareholders — especially around financial transactions. A practical example is setting limits of authority, meaning the maximum amount any one individual can approve or spend without needing sign-off from someone else.` },
    { s: 'MICHAEL', t: `So no single person can quietly move a huge amount of money alone.` },
    { s: 'NALEDI', t: `Exactly the safeguard it's designed to be. And principle twelve: the environment should be protected. Laws against pollution of water and air need to be taken seriously, and businesses have to operate legally on that front — but it also extends inward, to the environmental conditions employees actually work in, like proper lighting and ventilation.` },
    { s: 'MICHAEL', t: `Now that we've got all twelve, can we go back to Masterbond and Fidentia and actually map which ones they broke?` },
    { s: 'NALEDI', t: `Perfect way to close this out, because that's genuinely how exam questions are framed. Start with the obvious ones — principle one, clearly, since both businesses were built entirely on harming their depositors for profit. Principle two, since executives paid themselves wildly disproportionate salaries. Principle three and four together, since both relied on creative accounting to dodge honest tax reporting and hid behind accountants willing to falsify the books.` },
    { s: 'MICHAEL', t: `What about the ones further down the list?` },
    { s: 'NALEDI', t: `Principle five and six almost certainly failed too — there's no sign of transparent staffing or a genuine Code of Ethics anywhere in how either company operated. Principle seven is arguably the deepest failure of all — the very people at the top, who should have been setting the ethical tone, were the ones running the fraud. And principle ten, adequate internal controls, obviously failed completely, or the schemes would have been caught years before they were.` },
    { s: 'MICHAEL', t: `So it's not really one principle that gets broken in a scandal like this — it's nearly all of them at once.` },
    { s: 'NALEDI', t: `That's exactly the pattern worth remembering. Large-scale ethical collapses are rarely a single failure — they're what happens when several of these twelve principles fail simultaneously, and nobody catches it early enough.` },
    { s: 'MICHAEL', t: `Let me recap the whole set. Personal ethics and professional ethics can conflict — like an auditor torn between loyalty to a friend and his professional duty. Professionalism and ethics are related but distinct: one protects reputation through skill and codes, the other builds a moral compass for decisions. The twelve principles run from not harming others for profit, fair wages, honest tax, and trustworthy accountants, through transparent staffing and a proper Code of Ethics, to managers setting the tone, ongoing training, performance management that measures ethics, internal controls, honesty in transactions, and protecting the environment. And Masterbond and Fidentia between them managed to break almost every single one.` },
    { s: 'NALEDI', t: `A genuinely thorough recap. Exam tip: when a question references Masterbond or Fidentia, or any similar scandal, examiners are almost always testing whether you can name which specific principles were broken — don't just say "they were unethical," name the actual principle, and don't cherry-pick just one or two. Work through the full list systematically, because these case studies are specifically built to test several principles being broken at once.` },
    { s: 'MICHAEL', t: `Name the principle, work the whole list. Next episode?` },
    { s: 'NALEDI', t: `We shift from what a business should be doing right, to what actually gets in the way — the real challenges South African businesses face when they try to operate ethically.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 5,
  file: 'Episode 5 - The Sixteen Challenges Businesses Actually Face',
  segs: [
    { s: 'AMELIA', t: `Episode 5: The Sixteen Challenges Businesses Actually Face` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. We've spent a few episodes on how a business should behave. Today we flip it — what actually gets in the way, out in the real South African economy, across a full list of sixteen challenges.` },
    { s: 'MICHAEL', t: `Is there a way to size up how big a problem this is?` },
    { s: 'NALEDI', t: `There actually is a useful reference point. According to World Bank rankings on how easy it is to do business in a country, South Africa sits around thirty-fourth out of a hundred and eighty-three economies. Not catastrophic, but the main constraints dragging on that ranking are consistent — crime, theft and disorder, the cost and reliability of electricity and infrastructure, and access to finance.` },
    { s: 'MICHAEL', t: `So today we're working through the specific issues behind numbers like that?` },
    { s: 'NALEDI', t: `Exactly, starting from the top. First up — taxation. There's a specific problem here called double taxation, where a company's profits get taxed once inside the business, and then taxed again when dividends and payments actually reach shareholders. On top of that, there's the ongoing problem of fraudulent declarations — businesses submitting incorrect returns to SARS.` },
    { s: 'MICHAEL', t: `Second challenge?` },
    { s: 'NALEDI', t: `Sexual harassment. In any form, it shows real disrespect, and it can genuinely drive away female employees or discourage businesses from hiring women in the first place. The harder problem is that victims are often unwilling to report it, afraid of further victimisation or even losing their job over speaking up — and whistle-blowers in these cases frequently aren't protected well enough.` },
    { s: 'MICHAEL', t: `That's a genuinely serious gap.` },
    { s: 'NALEDI', t: `It is, and it comes up again later when we get to strategies. Third challenge — pricing of goods in rural areas. People in rural communities often can't easily check or compare prices, and end up stuck buying from the one local store available. Combine that with high unemployment and no real alternative, and it creates an opening for unscrupulous shopkeepers to simply inflate the price of basic goods, knowing customers have nowhere else to go.` },
    { s: 'MICHAEL', t: `Fourth?` },
    { s: 'NALEDI', t: `Unfair advertising. Job advertisements specifically aren't allowed to carry discriminatory conditions that exclude entire sections of the population — something like "this work is not suitable for women" is a direct example of what's not acceptable.` },
    { s: 'MICHAEL', t: `Fifth?` },
    { s: 'NALEDI', t: `False, or misleading, advertising. Customers have a right to know exactly what they're buying, and all the necessary information is supposed to be on the label. But advertisers keep finding ways to mislead people that are subtle enough to be hard to enforce — manipulating prices through "free" gift offers, using oversized packaging to imply more product than there actually is, or using misleading illustrations and colouring to make something look better than it is.` },
    { s: 'MICHAEL', t: `That "free gift" trick is sneakier than it sounds.` },
    { s: 'NALEDI', t: `It is, because it feels generous while actually distorting the real price you're paying. Sixth challenge — unauthorised use of funds. This ranges from buying goods or equipment without proper authorisation, to using company money for personal purchases. Taking cash directly from a register is the obvious version, but the pattern that really matters is that small, unchecked thefts tend to escalate into much larger ones over time, especially once people realise nobody's watching closely.` },
    { s: 'MICHAEL', t: `Seventh?` },
    { s: 'NALEDI', t: `Abusing work time. This covers almost any activity that isn't the job you're actually meant to be doing, outside of proper breaks — private side work during office hours, long stretches chatting around the kettle, stretched-out lunch breaks, coming in late or leaving early, or spending work time scrolling social media.` },
    { s: 'MICHAEL', t: `And the eighth?` },
    { s: 'NALEDI', t: `Tenderpreneurs — a term coined specifically to describe people who enrich themselves through government tender contracts, usually based on personal connections rather than merit. It often involves outright bribery, and the tenders "won" this way are frequently followed by overcharging and genuinely sub-standard work being delivered.` },
    { s: 'MICHAEL', t: `That word feels like it was invented specifically for South Africa.` },
    { s: 'NALEDI', t: `It essentially was — it's become a very recognisable term precisely because the pattern shows up so often in tender processes here. That's the first eight — let's keep moving through the rest, and some of these get genuinely structural.` },
    { s: 'MICHAEL', t: `Go ahead.` },
    { s: 'NALEDI', t: `Challenge nine — nepotism. That's favouritism granted to relatives, regardless of whether they're actually suited to the position. It can happen either when someone's first appointed, or later, when a promotion opportunity comes up and a relative gets pushed ahead of more qualified candidates.` },
    { s: 'MICHAEL', t: `And cronyism — I always mix these two up.` },
    { s: 'NALEDI', t: `Genuinely easy to confuse, but here's the clean distinction. Nepotism is about family. Cronyism is about friends — regardless of qualifications, friends get appointed to positions of authority. Often the person doing the appointing isn't fully secure in their own position, so they deliberately surround themselves with people who won't challenge them or express opposing views.` },
    { s: 'MICHAEL', t: `So nepotism is blood, cronyism is loyalty.` },
    { s: 'NALEDI', t: `That's a clean way to remember it. Challenge eleven — HIV and Aids. More than one in every ten people in South Africa is living with HIV. Not everyone with HIV develops Aids, especially with access to antiretroviral treatment, but the impact on business is still very real.` },
    { s: 'MICHAEL', t: `In what way, specifically?` },
    { s: 'NALEDI', t: `Several ways. The pool of skilled workers shrinks as illness affects people's capacity to work. Ignorance and fear around HIV can create real conflict when colleagues discover someone nearby is HIV positive. Costs rise for the business too — insurance premiums, retirement fund contributions, health and safety costs, and medical aid all tend to increase. And finding and training replacement staff is expensive. But it's worth being precise here — businesses are not legally allowed to discriminate against, fire, or retrench someone because of their HIV or Aids status.` },
    { s: 'MICHAEL', t: `That last point feels important to get exactly right.` },
    { s: 'NALEDI', t: `It's one of the most exam-relevant facts in this whole section, so lock it in. Challenge twelve — productivity. South Africa has genuinely low productivity levels, even compared to other developing economies, and the causes stack up together — poor education, lack of skills, low motivation, and management styles that don't get the best out of people.` },
    { s: 'MICHAEL', t: `Thirteen?` },
    { s: 'NALEDI', t: `Poverty. A large share of crime, violence, riots and strikes traces directly back to how many people live in poverty. Since businesses operate inside communities, and community members are frequently also their customers, there's a genuine business case, not just a moral one, for helping uplift the community a business operates in.` },
    { s: 'MICHAEL', t: `Fourteen?` },
    { s: 'NALEDI', t: `Inequality. South Africa has one of the most unequal income distributions in the world — most of the wealth concentrated among a small number of people. Even with legislation like Broad-Based Black Economic Empowerment aimed at redressing this, progress has been limited, and it creates a genuinely difficult balancing act for businesses trying to both address inequality and stay commercially sustainable.` },
    { s: 'MICHAEL', t: `Two left.` },
    { s: 'NALEDI', t: `Fifteen — electricity. South Africa's power supply is unreliable, which disrupts business operations directly, and also disrupts rail and road transport that businesses depend on. The underlying system is old and needs both maintenance and expanded capacity. And sixteen — access to finance. Entrepreneurs often struggle to secure the funding they need to start up, usually relying on banks, the state, or private sources like family and friends. Complaints centre on excessive red tape slowing everything down, and sometimes even the state itself is slow to pay businesses for services already delivered — which has pushed some businesses into debt and eventual closure.` },
    { s: 'MICHAEL', t: `That's a genuinely heavy back half of the list.` },
    { s: 'NALEDI', t: `It is, because these last several challenges aren't really about one dishonest individual making a bad choice — they're structural, connected to the broader economy and society a business operates inside. That's an important shift to notice across the full sixteen.` },
    { s: 'MICHAEL', t: `Let me recap the whole list. The first half runs from taxation and sexual harassment, through rural pricing, unfair and false advertising, unauthorised use of funds, abusing work time, and tenderpreneurs. The second half runs from nepotism and cronyism — family versus friends — through HIV and Aids, low productivity, poverty, inequality, unreliable electricity, and access to finance. The first eight are mostly about individual bad choices; the last eight are mostly structural, tied to the wider economy and society.` },
    { s: 'NALEDI', t: `A genuinely strong close to the full list of sixteen. Exam tip: examiners love giving you a short, specific example and asking you to name which of the sixteen challenges it illustrates, so practise recognising the pattern rather than just memorising definitions word for word — and when a question specifically asks you to distinguish nepotism from cronyism, always anchor your answer on that one clean distinction, family versus friends, because examiners reward that precision heavily.` },
    { s: 'MICHAEL', t: `Recognise the pattern, family versus friends. Locked in. Next episode?` },
    { s: 'NALEDI', t: `Now that we know exactly what goes wrong, we look at what actually works to fix it — real, practical strategies businesses can put in place.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 6,
  file: 'Episode 6 - Strategies That Actually Work',
  segs: [
    { s: 'AMELIA', t: `Episode 6: Strategies That Actually Work` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. We've spent two episodes on what goes wrong. Today: what businesses can genuinely do about it.` },
    { s: 'MICHAEL', t: `Is there one single fix, or does it vary challenge by challenge?` },
    { s: 'NALEDI', t: `Genuinely varies, and it's worth saying upfront — there's no easy universal fix. Some of these issues are external to the business entirely, like electricity supply or access to finance. Others sit fully within a business's control. Businesses have far more freedom to act on the internal ones, so that's where most practical strategy focuses.` },
    { s: 'MICHAEL', t: `Where does that start?` },
    { s: 'NALEDI', t: `With a proper Code of Ethics and Code of Conduct, genuinely implemented, not just filed away somewhere. Done well, it should improve relationships across the business and help eliminate issues like harassment, discrimination, unfair advertising, and gender bias. But a code is only as strong as its enforcement — people who don't follow it need to actually face discipline or penalties.` },
    { s: 'MICHAEL', t: `Can you make that concrete?` },
    { s: 'NALEDI', t: `Picture Lerato, who hears a senior management position has opened up at her company. She's hesitant to apply, since every current senior manager is a man, and she assumes they wouldn't want a woman in the role. A colleague reminds her that the company's Code of Conduct explicitly states no gender, race, or other discrimination will be tolerated. That gives her the confidence to apply — and she ends up getting the job.` },
    { s: 'MICHAEL', t: `So the code only helped because someone actually knew about it and pointed to it.` },
    { s: 'NALEDI', t: `Exactly the lesson — a code that nobody reads or references might as well not exist. And a genuinely transparent employment policy, grounded in real legislation like the Employment Equity Act, the Basic Conditions of Employment Act, and Broad-Based Black Economic Empowerment law, actively discourages nepotism, cronyism, and misleading job advertisements.` },
    { s: 'MICHAEL', t: `Let's test that with a nepotism example.` },
    { s: 'NALEDI', t: `Picture a senior manager named Nomvula, under pressure to fill an urgent vacancy fast, frustrated that her company's normal hiring process takes far too long. Her cousin happens to be job hunting, and she genuinely believes he'd do well in the role. She raises it casually in a management meeting — and is immediately reminded that both the law and the company's own employment policy are clear about following proper procedure. It frustrates her in the moment, but she follows the process anyway.` },
    { s: 'MICHAEL', t: `So the system worked because someone else in the room actually enforced it.` },
    { s: 'NALEDI', t: `Right, and that's really the deeper point — strong internal controls, like audit committees, exist specifically to catch exactly this kind of pressure before it becomes a real problem. Those same controls also help monitor unfair advertising, pricing fairness, and productivity, and they're central to rooting out bribery, tenderpreneurship, unauthorised use of funds, theft, and falsified documents.` },
    { s: 'MICHAEL', t: `Give me an example of internal controls actually catching something.` },
    { s: 'NALEDI', t: `Picture a manufacturing company whose profits have been quietly declining, with growing unhappiness among staff nobody could quite explain. An external audit finally uncovers the reason — several major outsourcing contracts had been quietly awarded to unsuitable suppliers in exchange for bribes. The employees who weren't benefiting from the scheme had grown increasingly demotivated and less productive, without necessarily knowing exactly why. Once uncovered, the company establishes an ongoing programme of internal audits and a permanent audit committee to prevent it happening again.` },
    { s: 'MICHAEL', t: `What about training and skills — does that get its own strategy?` },
    { s: 'NALEDI', t: `It does, and here's a scenario showing what happens when it's skipped. A company decides to overhaul its entire computer system, and part of the rollout plan includes training staff on the new software. But two major projects with tight deadlines are running at the same time, so management quietly puts the training on hold to focus on those instead. Staff end up using unfamiliar software with no training at all, work slows to a crawl, and the company misses its deadlines and loses real money — while employees point out that the company's own stated policy was to invest in skills development to boost productivity.` },
    { s: 'MICHAEL', t: `So skipping the training didn't actually save time — it cost more in the end.` },
    { s: 'NALEDI', t: `Exactly the trap. And there's a broader piece here too — regular education programmes on health matters, clinical support for those affected by HIV or TB, ongoing training on corporate governance and the Code of Ethics, and basic adult education to build skills and, eventually, productivity.` },
    { s: 'MICHAEL', t: `Last one — what about social responsibility?` },
    { s: 'NALEDI', t: `A genuinely underrated retention tool. Picture a senior manager, Boitumelo, worried because good staff keep leaving for other companies, even ones who were well paid and seemed to enjoy their work. Looking into what competitors were offering that her company wasn't, she discovers it isn't really about salary at all — employees want what's sometimes called the "feel good factor." They want to work somewhere seen to be doing genuine good in the world, with a real social responsibility programme addressing poverty, inequality, and community health, not just chasing profit.` },
    { s: 'MICHAEL', t: `And for the challenges that sit outside any one business's control — electricity, access to finance?` },
    { s: 'NALEDI', t: `Those genuinely sit with government, not individual businesses to solve alone. What the corporate world can do is keep applying consistent pressure on the people in government with the power to actually change those conditions — it's less about a single business fix and more about sustained, collective advocacy.` },
    { s: 'MICHAEL', t: `Let me recap. A properly enforced Code of Conduct empowers employees like Lerato to challenge bias. Following correct process, even under pressure, is what stops nepotism, as with Nomvula. Strong internal controls and audits catch corruption like the outsourcing bribery case. Skipping training to save time, as with the software rollout, usually costs more than it saves. Social responsibility genuinely affects staff retention, not just public image. And for challenges outside a business's direct control, like electricity or finance, sustained pressure on government is really the only lever available.` },
    { s: 'NALEDI', t: `Excellent close. Exam tip: whenever you're asked for a "strategy" question, always pair the challenge with a specific, practical action — vague answers like "the business should be more ethical" earn almost no marks. Name the actual mechanism: the code, the audit, the training, the policy.` },
    { s: 'MICHAEL', t: `Name the mechanism, not just the good intention. Next episode?` },
    { s: 'NALEDI', t: `A bonus round — every definition, every principle, and every challenge from this whole run, quizzed properly.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 7,
  file: 'Episode 7 (Bonus) - Professionalism and Ethics Exam Revision Round-Up',
  segs: [
    { s: 'AMELIA', t: `Episode 7, Bonus: Professionalism and Ethics Exam Revision Round-Up` },
    { s: 'NALEDI', t: `Welcome to a bonus episode of The Business Brief. We've covered ethics, professionalism, the twelve principles, sixteen challenges, and the strategies to fix them. Today, no new content — straight into exam mode.` },
    { s: 'MICHAEL', t: `I've been waiting for this one. Where do we start?` },
    { s: 'NALEDI', t: `Definitions, quickfire. I give you the term, you give me the meaning in one line.` },
    { s: 'MICHAEL', t: `Go.` },
    { s: 'NALEDI', t: `Ethics.` },
    { s: 'MICHAEL', t: `The moral principles that guide choices between right and wrong.` },
    { s: 'NALEDI', t: `Conflict of interest.` },
    { s: 'MICHAEL', t: `When someone's personal interests overlap with, or benefit from, their professional role.` },
    { s: 'NALEDI', t: `Tenderpreneur.` },
    { s: 'MICHAEL', t: `Someone who enriches themselves through government tender contracts using personal connections, not merit.` },
    { s: 'NALEDI', t: `Nepotism, then cronyism.` },
    { s: 'MICHAEL', t: `Nepotism favours family. Cronyism favours friends.` },
    { s: 'NALEDI', t: `Five for five. One more — creative accounting.` },
    { s: 'MICHAEL', t: `Hiding some income or inflating expenses to make a business look better, or worse, than it really is, usually to mislead investors or the tax authority.` },
    { s: 'NALEDI', t: `Perfect. Now the King Code, quickfire — name the three pillars.` },
    { s: 'MICHAEL', t: `Effective ethical leadership, sustainable business practices, and good corporate citizenship.` },
    { s: 'NALEDI', t: `And who developed it, and when?` },
    { s: 'MICHAEL', t: `Judge Mervyn King, in 1994.` },
    { s: 'NALEDI', t: `Excellent. Let's move to multiple choice, exam style.` },
    { s: 'MICHAEL', t: `Ready.` },
    { s: 'NALEDI', t: `Which of the following is a genuine criterion for being considered a professional — the ability to secure government tenders through personal influence, the ability to use client information to benefit the business, the ability to produce consistently high-quality work in your field, or the ability to make lucrative secret deals?` },
    { s: 'MICHAEL', t: `High-quality work in your field — the other three are actually examples of unethical or unprofessional behaviour, not professionalism.` },
    { s: 'NALEDI', t: `Correct. Next — confidentiality, as one of the RICCOD principles, means what exactly: to never share a client's details or use them for your own benefit, to respect the dignity and rights of others, to work with honesty, or to continuously improve your own skills?` },
    { s: 'MICHAEL', t: `Never sharing client details or using them for personal benefit. The others are respect, integrity, and development respectively.` },
    { s: 'NALEDI', t: `Exactly right. One more — a tenderpreneur is best described as someone sensitive about the tender process, someone who appoints friends to leadership positions, someone who abuses work time, or someone who gets government contracts through personal relationships.` },
    { s: 'MICHAEL', t: `Government contracts through personal relationships.` },
    { s: 'NALEDI', t: `Three for three. Now a matching round — I'll describe an unethical action, you match it to the practice it represents.` },
    { s: 'MICHAEL', t: `Go for it.` },
    { s: 'NALEDI', t: `Using false figures in a set of accounts.` },
    { s: 'MICHAEL', t: `Distorting facts to mislead.` },
    { s: 'NALEDI', t: `Using confidential client information for personal gain.` },
    { s: 'MICHAEL', t: `Invasion of privacy.` },
    { s: 'NALEDI', t: `Quietly re-labelling old garments as new stock.` },
    { s: 'MICHAEL', t: `Deception, or dishonesty.` },
    { s: 'NALEDI', t: `And concluding secret deals, away from proper scrutiny.` },
    { s: 'MICHAEL', t: `Lack of transparency.` },
    { s: 'NALEDI', t: `Four for four. Now, fill-in-the-blank style. The measure of how efficiently a business converts resources into goods and services is called...` },
    { s: 'MICHAEL', t: `Productivity.` },
    { s: 'NALEDI', t: `When someone employs family members regardless of whether they're suited to the role, that's...` },
    { s: 'MICHAEL', t: `Nepotism.` },
    { s: 'NALEDI', t: `And the document businesses draw up so every employee knows exactly what's expected of them, ethically, is called a...` },
    { s: 'MICHAEL', t: `A Code of Ethics — or a Code of Conduct, depending on how the question's phrased.` },
    { s: 'NALEDI', t: `Both accepted. Now let's do a full case study, the kind that shows up worth real marks.` },
    { s: 'MICHAEL', t: `Walk me through it.` },
    { s: 'NALEDI', t: `Picture Zanele and her father, who've just moved into a new home and need to buy a fridge. They spot a large appliance store advertising a top-of-the-range model at a great price, so they head in for a look. They're admiring the fridge, opening the doors to check the shelving, when a staff member marches over and says, "Please don't touch that, it's not for browsing. If you're not buying today, you're wasting my time."` },
    { s: 'MICHAEL', t: `That's an aggressive way to greet a customer.` },
    { s: 'NALEDI', t: `Zanele and her father are taken aback, but they don't want to make a scene, so they leave. Walking further down the road, they notice another appliance store and decide to try there instead. This time, a different staff member greets them warmly, offers them a seat and something to drink, and patiently talks them through several fridge options within their budget.` },
    { s: 'MICHAEL', t: `I can already guess where this ends up.` },
    { s: 'NALEDI', t: `Zanele's father buys the fridge from the second store, and because he's able to pay in full upfront, the store even throws in free delivery as a thank-you. Now, work through it with me — which of the two staff members behaved more professionally, and why?` },
    { s: 'MICHAEL', t: `Clearly the second one — patience, respect, and actually taking the time to help the customer choose the right product, instead of assuming they weren't serious buyers.` },
    { s: 'NALEDI', t: `Exactly right. And what would Zanele and her father likely have thought about the first store's business ethics?` },
    { s: 'MICHAEL', t: `Probably that the business doesn't actually value its customers, or trust them to browse before deciding — which reflects badly on things like respect and objectivity, treating a browsing customer as automatically not worth the staff member's time.` },
    { s: 'NALEDI', t: `And the second store's ethics, by contrast?` },
    { s: 'MICHAEL', t: `The opposite impression entirely — a business that genuinely respects customers regardless of whether they're certain to buy, which naturally earns trust and loyalty, and in this case, an actual sale.` },
    { s: 'NALEDI', t: `Now, if you were the manager of the first store, and you found out your staff member had lost that sale through rudeness, how would you handle it?` },
    { s: 'MICHAEL', t: `I'd address it directly but fairly — explain clearly why the approach was inappropriate, connect it back to the store's Code of Conduct if one exists, and make sure it's treated as a genuine coaching moment rather than just a telling-off, while being clear that repeated behaviour like that would need formal consequences.` },
    { s: 'NALEDI', t: `That's exactly the kind of balanced answer that scores full marks — acknowledging the problem, addressing it constructively, and being clear about consequences without overreacting.` },
    { s: 'MICHAEL', t: `Any final advice before exam day?` },
    { s: 'NALEDI', t: `Three things. One — know your key distinctions cold: nepotism versus cronyism, professionalism versus ethics, personal ethics versus professional ethics. Two — when a scenario is given, don't just say "this is unethical," name the specific practice or principle involved, because that precision is where the marks actually live. Three — for strategy questions, always pair the problem with a concrete mechanism: a code, an audit, a policy, training — never just a vague good intention.` },
    { s: 'MICHAEL', t: `Name it precisely, pair it with a mechanism. Got it.` },
    { s: 'NALEDI', t: `And that wraps up everything on professionalism and ethics — how it's defined, how it's protected, what challenges it, and how businesses actually respond. You're genuinely well prepared for this now.` },
    { s: 'MICHAEL', t: `Thanks, Naledi. This has been a lot, but it actually makes sense now.` },
    { s: 'NALEDI', t: `That's the whole point. Good luck out there. This has been The Business Brief.` },
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

async function generateEpisode(ep, ffmpegAvailable, silenceShort, silenceLong) {
  const epDir = path.join(TMP_ROOT, slugifyFolder(ep.file));
  fs.mkdirSync(epDir, { recursive: true });

  const files = [];
  let usedFallback = 0;

  for (let i = 0; i < ep.segs.length; i++) {
    const seg = ep.segs[i];
    const voiceId = VOICES[seg.s];
    const fname = `${pad(i)}_${seg.s.toLowerCase()}.mp3`;
    const outPath = path.join(epDir, fname);
    files.push({ path: outPath, isTitle: seg.s === 'AMELIA' });

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
      if (!fs.existsSync(f.path)) continue;
      if (f.isTitle) lines.push(`file '${silenceLong.replace(/'/g, "'\\''")}'`);
      lines.push(`file '${f.path.replace(/'/g, "'\\''")}'`);
      lines.push(`file '${(f.isTitle ? silenceLong : silenceShort).replace(/'/g, "'\\''")}'`);
    }
    fs.writeFileSync(listPath, lines.join('\n'));
    execSync(`ffmpeg -y -f concat -safe 0 -i "${listPath}" -c:a libmp3lame -q:a 2 "${outPath}"`, { stdio: 'ignore' });
    console.log(`  ✅ Saved: ${outPath}`);
  } else {
    const shortSilence = Buffer.from(SILENCE_SHORT_B64, 'base64');
    const longSilence = Buffer.from(SILENCE_LONG_B64, 'base64');
    const out = fs.createWriteStream(outPath);
    for (const f of files) {
      if (!fs.existsSync(f.path)) continue;
      if (f.isTitle) out.write(longSilence);
      out.write(fs.readFileSync(f.path));
      out.write(f.isTitle ? longSilence : shortSilence);
    }
    out.end();
    console.log(`  ✅ Saved (raw concat with natural pauses): ${outPath}`);
  }
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(TMP_ROOT, { recursive: true });

  const requested = process.argv.slice(2).map(Number).filter(n => Number.isInteger(n) && n >= 1);
  const episodesToRun = requested.length ? EPISODES.filter(ep => requested.includes(ep.num)) : EPISODES;

  if (requested.length) {
    console.log(`Re-recording only episode(s): ${episodesToRun.map(e => e.num).join(', ')}\n`);
    for (const ep of episodesToRun) {
      const epDir = path.join(TMP_ROOT, slugifyFolder(ep.file));
      if (fs.existsSync(epDir)) fs.rmSync(epDir, { recursive: true, force: true });
      const outPath = path.join(OUT_DIR, `${ep.file}.mp3`);
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
    console.warn('⚠ ffmpeg not found — episodes will be raw-concatenated using embedded silence for pauses. Install ffmpeg for cleaner pacing.\n');
  }

  console.log(`The Business Brief — Professionalism and Ethics — running ${episodesToRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of episodesToRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, silenceLong);
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final files.`);
}

main().catch(e => { console.error(e); process.exit(1); });

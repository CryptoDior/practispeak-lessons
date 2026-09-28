/**
 * The Business Brief — HR Podcast Series — ElevenLabs audio generator
 * ----------------------------------------------------------------------------
 * Usage (from the project root, in a terminal with real internet access —
 * this will NOT work from inside Cowork's sandbox, run it on your own machine):
 *
 *   node --env-file=.env.local scripts/generate-hr-podcast-audio.mjs
 *
 * To (re-)record only specific episodes, pass their numbers as arguments:
 *
 *   node --env-file=.env.local scripts/generate-hr-podcast-audio.mjs 1
 *
 * What it does:
 *  1. Generates episodes of "The Business Brief — The Human Resources
 *     Function" series, each SAVED AS ITS OWN SEPARATE FILE, named after
 *     the episode. Currently only Episode 1 is populated — more episodes
 *     can be added to the EPISODES array below as they're ready.
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
 *   podcasts/The-Business-Brief-HR/Episode 1 - Recruitment & Selection.mp3
 *
 * Individual clips are kept in podcasts/tmp/business-brief-hr/<episode-slug>/ for resuming.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-hr-podcast-audio.mjs');
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
const SILENCE_SHORT_B64 = 'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAPAAAGzgAqKioqKio5OTk5OTk5SEhISEhIV1dXV1dXV2dnZ2dnZ2d2dnZ2dnaFhYWFhYWFlZWVlZWVlaSkpKSkpLOzs7Ozs7PCwsLCwsLC0tLS0tLS4eHh4eHh4fDw8PDw8PD///////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAT1AAAAAAAABs4x4WRRAAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAARMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMQpg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxFMDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDEfIPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMSmA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxM+DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='; // ~0.35s, between dialogue lines
const SILENCE_LONG_B64 = 'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAkAAAPVgASEhkZGSAgICYmJi0tNDQ0Ozs7QkJCSEhPT09WVlZdXV1kZGRqanFxcXh4eH9/f4WFjIyMk5OTmpqaoaGhp6eurq61tbW8vLzCwsnJydDQ0NfX197e3uTk6+vr8vLy+fn5//8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAS2AAAAAAAAD1aoAgi4AAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAARMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMQpg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxFMDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDEfIPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMSmA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxM+DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='; // ~0.9s, around title announcements

function voiceSettingsFor(modelId) {
  // Per ElevenLabs' own recommended defaults for eleven_v3 (style + speaker boost
  // included); fallback model just uses the classic two settings.
  return modelId === PRIMARY_MODEL
    ? { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true }
    : { stability: 0.5, similarity_boost: 0.75 };
}

const ROOT = path.resolve('.');
const OUT_DIR = path.join(ROOT, 'podcasts', 'The-Business-Brief-HR');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'business-brief-hr');

// ─────────────────────────────────────────────────────────────────────────
// EPISODES — each one is generated and stitched into its own separate file.
// (Only Episode 1 is populated for now — add more as they're ready.)
// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'Episode 1 - Recruitment & Selection',
  segs: [
    { s: 'AMELIA', t: `Episode 1: Recruitment and Selection` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. We're starting a new series today, all about the Human Resources function — basically, everything that happens between a business needing a new person and that person actually starting the job.` },
    { s: 'MICHAEL', t: `I'm ready. Where do we even begin with something this broad?` },
    { s: 'NALEDI', t: `At the very beginning — recruitment. Before a business can hire anyone, it has to attract people to apply in the first place. Recruitment is the process of identifying a vacancy, identifying suitable candidates, and getting them to actually apply.` },
    { s: 'MICHAEL', t: `So recruitment is just "put up a job ad"?` },
    { s: 'NALEDI', t: `It's more deliberate than that. A business has to advertise properly, give correct information about the job, set clear application deadlines, and be specific about what's actually required. Get any of those wrong and you attract the wrong applicants, or nobody at all.` },
    { s: 'MICHAEL', t: `Is there more than one way to recruit? I feel like I've heard "internal" and "external."` },
    { s: 'NALEDI', t: `Exactly the split. Internal recruitment means looking at your current staff first — usually for a promotion. You'd advertise that internally, through email, posters on the notice board, word of mouth. External recruitment means looking outside the business entirely, and there are several ways to do that.` },
    { s: 'MICHAEL', t: `Give me the external options.` },
    { s: 'NALEDI', t: `Referrals — someone already at the company tells HR about a great candidate they know. Advertising in the media — online job boards, newspapers. Using a recruitment agency. Headhunting — actively targeting a specific person, often someone already succeeding at a competitor. Professional associations — like an editors' association if you're hiring a senior editor. And networking — HR professionals who meet up and share contacts across the industry.` },
    { s: 'MICHAEL', t: `Headhunting sounds a bit dramatic for something so normal.` },
    { s: 'NALEDI', t: `It does, but it's exactly what it sounds like — a business identifies a specific, usually senior or highly skilled, person working somewhere else, and approaches them directly rather than waiting for them to apply. Think of a bank quietly approaching a top-performing branch manager at a rival bank.` },
    { s: 'MICHAEL', t: `Okay, so once the applications start coming in — what actually happens next?` },
    { s: 'NALEDI', t: `There's a clear six-step process. First, the business analyses exactly what it needs and writes the job description. Second, it decides whether to recruit internally or externally. Third, it writes and places the advertisement. Fourth, applications and CVs start coming in. Fifth, someone — an individual or a team — is assigned responsibility for managing the process. And sixth, many businesses do telephonic screening interviews, just to narrow the list before anyone comes in for a real interview.` },
    { s: 'MICHAEL', t: `That screening call — is that basically a first filter?` },
    { s: 'NALEDI', t: `Exactly, it saves everyone time. You don't invite fifty people in for a full interview if a five-minute phone call can rule out half of them.` },
    { s: 'MICHAEL', t: `Okay, recruitment gets you the applicants. Then selection is choosing between them?` },
    { s: 'NALEDI', t: `Right — selection is the process of choosing the right person for the right job. And how complex that process gets really depends on the role. A junior cashier position is going to be a much simpler selection process than, say, a Sales Director or Marketing Manager.` },
    { s: 'MICHAEL', t: `Why does seniority change the process so much?` },
    { s: 'NALEDI', t: `Because the stakes are higher, and sometimes the law requires extra steps. Think about a police officer applicant — they'd need a background check to confirm no criminal record. Or a Financial Manager — someone who'll have serious ethical responsibility over the company's money. Businesses will dig deeper into that person's background before trusting them with that level of responsibility.` },
    { s: 'MICHAEL', t: `Walk me through the actual selection steps.` },
    { s: 'NALEDI', t: `There are seven. First, sort the applications against the job criteria — if a plumbing qualification is required, anyone without proof of it gets eliminated immediately. Second, list everyone who actually qualifies. Third, screen them properly — background checks, credit checks, criminal record checks, even a look at their social media, and calling the referees listed on their CV to ask about character and work ethic.` },
    { s: 'MICHAEL', t: `Wait, checking someone's social media is an official step?` },
    { s: 'NALEDI', t: `It's increasingly common, yes — it's part of getting a fuller picture of who you're about to hire. Fourth step is preliminary interviews, to sift out people who technically qualify on paper but might not suit the actual work environment. Fifth is testing — for a senior role, that might include something like the Myers-Briggs personality test, which sorts people into sixteen personality types and gives a sense of how they'd operate in a team. Some industries also require a medical screening at this stage.` },
    { s: 'MICHAEL', t: `And after testing?` },
    { s: 'NALEDI', t: `Sixth, you compile a shortlist — usually around five people — and arrange interviews with just them. Seventh, the actual interview happens, using a pre-set list of questions asked to every candidate, so everyone's compared on the same criteria.` },
    { s: 'MICHAEL', t: `Why does it matter that everyone gets the exact same questions?` },
    { s: 'NALEDI', t: `Fairness, mostly — and it's actually a legal safeguard too. If every candidate answers the same set of questions, it's much harder for the process to become biased or discriminatory, and much easier to defend the final decision if anyone challenges it later.` },
    { s: 'MICHAEL', t: `Let's ground this in something real. Say a supermarket chain needs a new regional buyer.` },
    { s: 'NALEDI', t: `Perfect example. They might recruit internally first, since a current assistant buyer might be ready for the step up. If nobody internal fits, they'd advertise externally, maybe even use a recruitment agency given how specialised the role is. Applications get sorted by relevant retail or supply chain experience, references get checked, maybe a numeracy or negotiation-style assessment gets added given the role involves negotiating supplier contracts, and eventually a shortlist of about five goes through to final interviews with a panel.` },
    { s: 'MICHAEL', t: `So recruitment casts the net, and selection is picking who actually gets pulled out of it.` },
    { s: 'NALEDI', t: `Perfectly put. Recruitment is about getting the right pool of people to apply. Selection is about systematically working through that pool until you land on the one person who's actually right for the job.` },
    { s: 'MICHAEL', t: `Let me recap. Recruitment can be internal or external, using referrals, advertising, agencies, headhunting, professional associations or networking, and follows a six-step process from job analysis through to screening interviews. Selection follows a seven-step process — sorting, listing, screening, preliminary interviews, testing, shortlisting, and the final interview — and gets more rigorous the more senior or sensitive the role is.` },
    { s: 'NALEDI', t: `Exactly right. Exam tip: examiners love asking you to compare recruitment and selection side by side, or to apply the seven-step selection process to a scenario and identify which step is missing or done badly. Know the order of those steps cold.` },
    { s: 'MICHAEL', t: `Got it. Next episode?` },
    { s: 'NALEDI', t: `Interviewing properly, and what happens once someone's actually offered the job — the employment contract.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 2,
  file: 'Episode 2 - Interviewing & Employment Contracts',
  segs: [
    { s: 'AMELIA', t: `Episode 2: Interviewing and Employment Contracts` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Last time we covered recruitment and selection — getting the applicants in and narrowing them down. Today: the interview itself, and what happens right after someone's offered the job.` },
    { s: 'MICHAEL', t: `Interviews stress me out just thinking about them. What actually makes one good, from the business's side?` },
    { s: 'NALEDI', t: `A few things, and they all come back to fairness and consistency. Every candidate should go through the same process, with the same questions, so everyone gets an equal opportunity. Ideally it's a panel conducting the interview, not just one person's opinion deciding someone's future.` },
    { s: 'MICHAEL', t: `Why does a panel matter so much?` },
    { s: 'NALEDI', t: `One person has blind spots and biases, whether they realise it or not. A panel balances that out, and it also means the final decision isn't dangerously dependent on one individual's gut feeling.` },
    { s: 'MICHAEL', t: `What else goes into a well-run interview?` },
    { s: 'NALEDI', t: `The questions need to be creative and genuinely relevant — they should actually challenge the candidate and reveal something useful, not just tick boxes. The panel pays attention to body language and behaviour throughout, not just the words being said. And critically, no one on the panel makes a snap judgement — decisions only get made once every candidate has been through the same process.` },
    { s: 'MICHAEL', t: `And the process itself can't discriminate, right?` },
    { s: 'NALEDI', t: `Correct — that's non-negotiable. The interview can't favour or exclude anyone based on race, gender, or age. It has to be purely about finding the best person for the job.` },
    { s: 'MICHAEL', t: `Towards the end of an interview, is there a standard way to wrap up?` },
    { s: 'NALEDI', t: `Yes — good practice is to give the candidate a chance to ask their own questions about the role or the company, and then to formally close things out by thanking them for coming in. It sounds small, but it matters — it's often the candidate's last impression of the business, regardless of the outcome.` },
    { s: 'MICHAEL', t: `Okay, so say someone nails the interview. What happens next?` },
    { s: 'NALEDI', t: `Now we're into contracts. Once a candidate is selected and offered the position, HR sits down with them to talk through the salary package and the detailed conditions of employment. The candidate then receives a letter of appointment, and eventually signs a contract of employment.` },
    { s: 'MICHAEL', t: `Is a contract just a formality, or does it actually matter legally?` },
    { s: 'NALEDI', t: `It matters enormously — a contract of employment is a legally binding written agreement between employer and employee. Some terms are negotiable and get discussed before signing, but once both sides agree and sign, it's binding on both of them.` },
    { s: 'MICHAEL', t: `What actually has to be in it?` },
    { s: 'NALEDI', t: `A proper contract covers the personal details of the employee, the employer's details, the job description and title, working hours, the salary package, leave entitlements, how the contract can be terminated, overtime arrangements, and benefits.` },
    { s: 'MICHAEL', t: `I've heard of a "probation period" — what's that about?` },
    { s: 'NALEDI', t: `Many contracts include one, often around three months. It's a trial period where the business checks whether the new employee is actually suited to the role. If it goes well, the employee becomes permanent.` },
    { s: 'MICHAEL', t: `What if things don't get written down properly, or there's no real contract at all? Does that actually happen?` },
    { s: 'NALEDI', t: `More often than you'd think, especially with informal or lower-skilled jobs. Let me give you a scenario. Say Sibusiso applies for a job at a small warehouse that packs and distributes stock for local shops. The day after a quick chat with the site supervisor, he gets a call: "You got it, can you start Monday? We'll pay you R160 a day." He shows up at 7am, and ends up working eleven-hour days, six days a week, for two months. He's never introduced to anyone from HR — there isn't really an HR presence on site at all — and he learns how to operate the packing equipment purely by watching the guy next to him.` },
    { s: 'MICHAEL', t: `Even without knowing all the detail, that already sounds like a mess legally.` },
    { s: 'NALEDI', t: `It is, and this is exactly the kind of scenario that shows up in exams, because it's testing whether you can spot every violation. There's no written contract at all — just a verbal phone offer, which falls short of what's required. His hours are a serious problem too: eleven hours a day, six days a week, is well beyond the legal weekly maximum, and there's no indication he's being paid anything extra for the excess hours, which overtime rules would require. There's no induction — he's left to learn the job by observation, with no formal introduction to the business, its policies, or basic safety expectations. And HR was never involved at any point, which means none of the standard checks — job description, proper letter of appointment, agreed leave terms — ever happened.` },
    { s: 'MICHAEL', t: `So if Sibusiso wanted to challenge this, would he have a case?` },
    { s: 'NALEDI', t: `Very likely, yes. He could argue unfair labour practice on the basis that his basic conditions of employment were never properly set out or honoured — the excessive hours alone are a clear breach, and the complete absence of a written contract makes it very difficult for the employer to argue everything was above board.` },
    { s: 'MICHAEL', t: `What should have happened instead, properly?` },
    { s: 'NALEDI', t: `He should have received a written offer or at minimum a written contract once he started, outlining his hours, pay, leave, and notice period. His hours should have been capped in line with the law, with proper overtime pay for anything beyond that. And he should have gone through some form of induction, even an informal one, introducing him to the site's safety rules and expectations.` },
    { s: 'MICHAEL', t: `Let me recap. A good interview process is consistent, panel-run, non-discriminatory, and closes properly by letting the candidate ask questions. Once someone's hired, a written, legally binding contract has to cover their personal and job details, hours, salary, leave, termination terms, overtime, and benefits — often with a probation period first. And when any of that gets skipped, like in Sibusiso's case, it opens the business up to a real unfair labour practice claim.` },
    { s: 'NALEDI', t: `Exactly right. Exam tip: whenever you're given a scenario like Sibusiso's, work through it systematically — was there a proper written contract, were the hours legal, was there any induction, was HR even involved. Each missing piece is worth marks on its own.` },
    { s: 'MICHAEL', t: `Noted. Next episode?` },
    { s: 'NALEDI', t: `Induction, placement, and what actually determines someone's salary once they're in the door.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 3,
  file: 'Episode 3 - Induction, Placement & Salary Foundations',
  segs: [
    { s: 'AMELIA', t: `Episode 3: Induction, Placement and Salary Foundations` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. We've hired someone and they've signed their contract. Today: what happens on day one, and how their salary actually gets decided.` },
    { s: 'MICHAEL', t: `Day one always feels chaotic when I imagine it. What's supposed to happen?` },
    { s: 'NALEDI', t: `That's exactly what induction is for. The aim of an induction programme is to introduce the new employee to the business, the work environment, and the organisational culture, rules and regulations. Some companies keep it informal, others run a proper structured programme — but either way, by the end of it, the employee should understand the processes and procedures and have a solid idea of what's expected of them.` },
    { s: 'MICHAEL', t: `What actually goes into a proper induction?` },
    { s: 'NALEDI', t: `Five main things. A tour of the premises and introductions to key colleagues. A walkthrough of the conditions of employment — working hours, how to apply for leave, disciplinary procedures. The administrative and logistical details — how to order stationery, telephone systems, how to operate equipment. Safety regulations, like evacuation procedures and smoking restrictions. And a proper discussion of the job itself — what's expected, how to actually perform the daily tasks.` },
    { s: 'MICHAEL', t: `That's a lot to cover on someone's first day.` },
    { s: 'NALEDI', t: `It often spans more than one day, and it's worth the investment. Induction increases quality and productivity, increases motivation, helps new employees settle in and become effective quickly, makes sure everyone actually understands the rules, and reduces how much ongoing training is needed later, because the foundation was solid from the start.` },
    { s: 'MICHAEL', t: `Does support just stop once induction is done?` },
    { s: 'NALEDI', t: `Ideally not — businesses should keep supporting new employees afterwards too, so they settle in as quickly as possible and become productive sooner rather than later.` },
    { s: 'MICHAEL', t: `Where does "placement" fit into all this?` },
    { s: 'NALEDI', t: `Placement is about matching the right candidate to the right specific position — and it can happen right after the interview, when a position is offered, or later, when someone's already at the company and gets moved into a new role.` },
    { s: 'MICHAEL', t: `Why is getting placement right such a big deal?` },
    { s: 'NALEDI', t: `Because bad placement is expensive and disruptive. It happens when someone doesn't actually have the right skills or personality for the specific job, or when someone shows real potential but just hasn't yet learned what the new role actually requires. HR and line managers need to actively support people through this — proper induction, and ongoing support through the probation period, and sometimes well beyond it, depending on how complex or senior the job is.` },
    { s: 'MICHAEL', t: `Give me a picture of this going right.` },
    { s: 'NALEDI', t: `Think of a clothing retail chain hiring someone who interviewed brilliantly for a head office merchandising role, but turns out to be far better suited, personality-wise, to in-store customer engagement. A business that places people rigidly, based only on the original vacancy, wastes that person's actual strengths. A business that places thoughtfully — sometimes shifting someone sideways into a role that fits them better — gets far more value out of the same hire.` },
    { s: 'MICHAEL', t: `Okay, now salary — this is the part everyone actually cares about. What determines how much someone earns?` },
    { s: 'NALEDI', t: `A long list of factors, actually. The type of job — is it skilled, semi-skilled, or unskilled. Educational and professional qualifications. Workplace experience. The person's skills, knowledge, and potential to grow within the company. How many suitably skilled candidates are actually available — the harder a skill is to find, the more a business has to pay to secure it. The seniority of the position — senior management naturally earns more. External factors like trade union demands in certain industries. The financial health of the company and the broader economy. And finally, the benefits included in the package, which affect how the cash component gets set.` },
    { s: 'MICHAEL', t: `That scarcity point is interesting — can you make that concrete?` },
    { s: 'NALEDI', t: `Sure. Think about a highly specialised electrician qualified to work on industrial refrigeration systems — there simply aren't many people with that specific qualification. A business that needs one has to pay considerably more than it would for a general handyman, purely because so few people can actually do the job.` },
    { s: 'MICHAEL', t: `And "skilled" versus "unskilled" — how's that actually defined?` },
    { s: 'NALEDI', t: `It comes down to the level of expertise required. A lawyer is a clear example of a skilled worker — years of study and qualification behind the role. A domestic worker, by this definition, is considered unskilled, simply because the work doesn't require formal qualifications to perform — that's not a judgement on the value or difficulty of the work, just how the category is defined for salary purposes.` },
    { s: 'MICHAEL', t: `What's the difference between a "salary" and a full "package"?` },
    { s: 'NALEDI', t: `The salary is usually the cash component. The package is everything on top of that — medical aid contributions, pension fund contributions, and allowances like travel, car, or cellphone allowances, all paid by the business over and above the cash salary.` },
    { s: 'MICHAEL', t: `Let me recap. Induction introduces a new employee to the business properly — the premises, the people, the rules, the job itself — and it boosts productivity, motivation, and settling-in speed. Placement is about matching people to roles that genuinely suit their skills and personality, not just filling a vacancy. And salary is shaped by the job's skill level, qualifications, experience, scarcity of the right candidate, seniority, external pressures like unions, the company's financial position, and whatever benefits are bundled into the package.` },
    { s: 'NALEDI', t: `Great summary. Exam tip: when a scenario gives you a list of factors affecting someone's salary, don't just list them back — explain briefly why each one pushes pay up or down. That's usually where the extra marks sit.` },
    { s: 'MICHAEL', t: `Got it. Next episode?` },
    { s: 'NALEDI', t: `We start on the legislation side — the Labour Relations Act, and how HR actually uses it day to day.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 4,
  file: 'Episode 4 - Labour Relations Act — the HR Angle',
  segs: [
    { s: 'AMELIA', t: `Episode 4: Labour Relations Act, the HR Angle` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. We've covered how people get hired, inducted, and paid. Now we're moving into legislation — starting with the Labour Relations Act, and specifically how the Human Resources function actually uses it day to day.` },
    { s: 'MICHAEL', t: `We've touched on the Labour Relations Act before in a different series. What's different about looking at it through an HR lens?` },
    { s: 'NALEDI', t: `Good question — same Act, different angle. Before we were looking at strikes, unions, and dispute resolution in general. Now we're looking at how an HR department actually builds its everyday policies and processes around this law — hiring, disciplining, dismissing, and handling day-to-day fairness.` },
    { s: 'MICHAEL', t: `So what's the Act actually setting out to do, from that angle?` },
    { s: 'NALEDI', t: `It was established by the Department of Labour and the CCMA specifically to ensure fairness in the workplace. It outlines terms and conditions that apply to both employers and employees, and it promotes equity and democracy by making sure employment equity gets implemented and unfair discrimination gets prevented. It also aims to promote economic growth and to help the workforce become more diverse and more representative of the country.` },
    { s: 'MICHAEL', t: `Does it only apply to people currently employed?` },
    { s: 'NALEDI', t: `No, and that's a detail worth remembering — it applies to current employers and employees, but also to former ones. So issues arising after someone's left a job can still fall under this Act.` },
    { s: 'MICHAEL', t: `What does HR actually use this Act for, practically?` },
    { s: 'NALEDI', t: `Six main things. Building fair processes for employing and dismissing people. Understanding the rights and responsibilities of trade unions. Managing procedures around strikes, collective bargaining, and dispute resolution. Identifying and addressing unfair treatment in the workplace. Implementing codes of good practice. And encouraging worker participation in decision-making.` },
    { s: 'MICHAEL', t: `That last one — worker participation — what does that actually look like in a real business?` },
    { s: 'NALEDI', t: `It varies by size and industry, but the underlying idea is that employees shouldn't just be told what's happening — they should have some genuine voice in decisions that affect them. Picture a manufacturing plant that sets up a joint committee of management and staff representatives to discuss things like shift changes or safety improvements before they're finalised, rather than just announcing them. That's the Act's spirit in action — consultation instead of just instruction.` },
    { s: 'MICHAEL', t: `Let's talk about dismissals, since that's probably where this Act matters most in practice.` },
    { s: 'NALEDI', t: `It's a huge part of HR's job. The Act requires a fair process — not just a fair reason, but a fair process too. That means proper warnings, proper documentation, giving the employee a real chance to respond, before anything becomes final.` },
    { s: 'MICHAEL', t: `Give me an example of this going right versus going wrong.` },
    { s: 'NALEDI', t: `Picture a small logistics company where a driver keeps arriving late. Done right: the manager documents each incident, issues a formal verbal warning, then a written warning, explains clearly what needs to change and by when, and only moves toward dismissal if nothing improves — with the employee given a chance to explain themselves at every stage. Done wrong: the manager just loses patience one day and fires the driver on the spot, with no documented warnings and no chance to respond. That second version is almost guaranteed to end up as a dispute at the CCMA, and the business would likely lose, because the process itself was unfair, regardless of whether the underlying complaint about lateness was valid.` },
    { s: 'MICHAEL', t: `So even a legitimate complaint can turn into a legal problem if the process is skipped?` },
    { s: 'NALEDI', t: `Exactly — and that's the point HR students most often miss. The Act cares just as much about how a decision was reached as it does about whether the decision itself was reasonable.` },
    { s: 'MICHAEL', t: `What about trade unions — how does HR interact with them under this Act?` },
    { s: 'NALEDI', t: `HR needs to understand and respect union rights and responsibilities — things like a union's right to represent members in disputes, to engage in collective bargaining over wages and conditions, and to be consulted on major workplace changes. A well-run HR department treats the union as a legitimate partner in these conversations, not an obstacle.` },
    { s: 'MICHAEL', t: `And "codes of good practice" — what's that in plain terms?` },
    { s: 'NALEDI', t: `Think of them as detailed guidelines that flesh out how the Act should actually be applied in real situations — for example, detailed guidance on what a fair dismissal process should look like step by step. HR departments lean on these codes heavily when designing their internal policies, because they translate the broad legal principles into practical, defensible procedures.` },
    { s: 'MICHAEL', t: `Let me recap. The Labour Relations Act gives HR the framework for fair hiring and dismissal processes, sets out how to engage properly with trade unions, governs strikes and dispute resolution, protects against unfair treatment, and encourages genuine worker participation in decisions — and it applies to former employees and employers too, not just current ones.` },
    { s: 'NALEDI', t: `Exactly right. Exam tip: whenever a scenario involves a dismissal or workplace conflict, always separate two questions in your answer — was the reason fair, and was the process fair. Examiners often build scenarios where one is fine and the other isn't, specifically to test whether you can tell the difference.` },
    { s: 'MICHAEL', t: `That distinction is going to save me marks. Next episode?` },
    { s: 'NALEDI', t: `The Basic Conditions of Employment Act — the big one, covering pay, tax, benefits, and how employment actually ends.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 5,
  file: 'Episode 5 - Basic Conditions of Employment Act — Pay, Tax, Benefits & Termination',
  segs: [
    { s: 'AMELIA', t: `Episode 5: Basic Conditions of Employment Act, Pay, Tax, Benefits and Termination` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Today is a big one — the Basic Conditions of Employment Act, but this time through the lens of everything HR actually has to administer: pay, tax, benefits, and how employment eventually ends.` },
    { s: 'MICHAEL', t: `We've covered the basics of this Act before — hours, leave, that kind of thing. What's new here?` },
    { s: 'NALEDI', t: `We're going deeper into the parts HR deals with constantly. Quick recap first though, since it matters: this Act applies to casual, temporary, and permanent employees, and even independent contractors are relevant to how HR thinks about it, even though they're technically not employees. HR's job is making sure every company policy and practice lines up with what this Act requires, and keeping proper records to prove it.` },
    { s: 'MICHAEL', t: `And the leave and working hours side — same as before?` },
    { s: 'NALEDI', t: `Same numbers, worth a quick refresh. Annual leave is a minimum of one day for every seventeen days worked. Sick leave gives you up to thirty paid days across a thirty-six-month cycle. Maternity leave is four months, and the employer isn't required to pay the employee during that time. Family responsibility leave gives up to three paid days a year, for things like a child's illness or a death in the family.` },
    { s: 'MICHAEL', t: `Okay, now the part I actually want to understand — what has to be in a proper employment contract?` },
    { s: 'NALEDI', t: `A full list, and it's genuinely useful to know for real life, not just the exam. Names and addresses of both employer and employee. The job title. The normal place of work. The starting date. The nature and hours of work. Leave conditions. Any agreements the business has with trade unions that affect the employee. Salary and benefits, like pension or medical aid schemes. And the length of notice either side needs to give to end the contract.` },
    { s: 'MICHAEL', t: `Can any of that be changed later, or is it locked in forever once it's signed?` },
    { s: 'NALEDI', t: `It can be renegotiated, but only with both sides agreeing — neither the employer nor the employee can unilaterally change the terms. If a business wants to shift someone's hours or responsibilities significantly, that has to be a genuine negotiation, not an announcement.` },
    { s: 'MICHAEL', t: `Is there anything extra that sometimes gets bundled into a contract?` },
    { s: 'NALEDI', t: `Often yes — a code of conduct, a code of ethics, and information technology policies are common additions, especially at larger companies.` },
    { s: 'MICHAEL', t: `Let's get into pay itself — how do businesses actually decide how to pay someone?` },
    { s: 'NALEDI', t: `Three broad systems. Payment by type of contract — a permanent employee usually gets a fixed monthly salary, while someone on a fixed-term contract might be paid piecemeal, meaning per job or task completed, or on a weekly or monthly basis instead. Payment by time — this is a wage, paid hourly or weekly, mostly for unskilled labour, often tracked through a clock in, clock out system. And payment by performance — commission, like a property agent earning a percentage of every sale, or bonuses, often paid at year-end or around an employee's birthday, or performance bonuses tied to hitting specific targets.` },
    { s: 'MICHAEL', t: `Can you make that performance bonus idea concrete?` },
    { s: 'NALEDI', t: `Sure — imagine an electronics retailer where the appliances sales division is given a half-year sales target. If they hit it, everyone in that division gets a performance bonus on top of their normal pay. It's a direct incentive tied to results, not just tenure.` },
    { s: 'MICHAEL', t: `Now, gross versus nett — I always mix these up.` },
    { s: 'NALEDI', t: `Simple formula: gross salary minus deductions equals nett salary. Gross is the full amount before anything is taken out. Nett is what actually lands in your bank account, after tax, medical aid, UIF, pension, and any other deductions.` },
    { s: 'MICHAEL', t: `Let's talk tax, because this genuinely confuses me.` },
    { s: 'NALEDI', t: `Anyone earning income has to register with SARS, the South African Revenue Service. If you earn less than R60,000 a year, you're not required to pay tax at all. Above that, most employees are taxed through PAYE — Pay As You Earn — which gets deducted from their salary every single month by the employer and paid over to SARS. The whole point is you never face one giant tax bill at the end of the year, because it's spread out as you earn.` },
    { s: 'MICHAEL', t: `Is PAYE the only kind of tax that comes up here?` },
    { s: 'NALEDI', t: `There's also provisional tax, which works completely differently — it's for people earning income that isn't a regular salary, like rental income, running their own business, royalties, or interest earned on investments. Provisional taxpayers pay SARS twice a year instead of monthly, and they have to estimate their income for the year in advance. If they underestimate, they owe the difference. If they overestimate, SARS refunds them.` },
    { s: 'MICHAEL', t: `Okay, now benefits — what actually falls under that umbrella?` },
    { s: 'NALEDI', t: `Four main categories. Pension — money placed into a pension or retirement annuity fund every month, paid out as a lump sum or in instalments when the employee retires. Medical aid — contributions into a medical scheme that covers hospital and healthcare costs, and importantly, contributions to a recognised medical aid aren't taxed. UIF — the Unemployment Insurance Fund, a statutory contribution of 2% of income total, split evenly: 1% from the employee, 1% from the employer. And allowances — car, cellphone, computer, or travel allowances, which aren't always tax-free, since employees can be taxed on the portion they use personally rather than for work.` },
    { s: 'MICHAEL', t: `What does UIF actually pay out for?` },
    { s: 'NALEDI', t: `It supports employees who lose their jobs, or who can't work due to illness, pregnancy, or adoption. It even pays out to dependants if the employee dies. It's essentially a safety net funded jointly by employer and employee every single month.` },
    { s: 'MICHAEL', t: `Now, the part nobody likes talking about — how does employment actually end?` },
    { s: 'NALEDI', t: `Four ways. Resignation — the employee chooses to leave, following whatever notice period is written into their contract. Dismissal — the employer ends the relationship, for reasons like misconduct, illegal behaviour such as theft, or persistent failure to meet the terms of the contract, like chronic lateness. Retirement — when someone reaches a certain age, typically 65, though there's actually no fixed legal retirement age in South Africa; it has to be specified in the contract itself. And retrenchment — when a business is forced to let people go, usually for financial reasons, or because a role has genuinely become redundant.` },
    { s: 'MICHAEL', t: `What's the actual process for each of those?` },
    { s: 'NALEDI', t: `Resignation is the simplest — a letter of resignation, management accepts it, and the employee works out their notice period, typically one to three months. Dismissal is far more tightly regulated — the employer must issue at least three written warnings before dismissal, and even then, the employee can appeal through the CCMA. Retirement has a subtle trap worth knowing: if a retirement age was never agreed to in writing, forcing someone to retire could actually count as unfair dismissal on the basis of age discrimination. And at retirement, all owed benefits and outstanding pay, like accumulated leave, must be settled. Retrenchment is a formal legal process — the business must consult with affected employees first, and once agreement is reached, must give proper notice and pay severance.` },
    { s: 'MICHAEL', t: `That retirement detail is sneaky — I wouldn't have expected age to become a discrimination issue there.` },
    { s: 'NALEDI', t: `It catches a lot of people out, and it's exactly the kind of nuance exams like to test — the assumption that retirement is automatically fair, when actually it depends entirely on whether the age was properly documented in the contract from the start.` },
    { s: 'MICHAEL', t: `Last topic — child labour.` },
    { s: 'NALEDI', t: `Straightforward and firm: it's illegal to employ a child under the age of 15. Businesses or individuals who do so can face criminal prosecution and fines. There's no grey area here.` },
    { s: 'MICHAEL', t: `Let me try to recap this whole episode, because there's a lot in it. A proper contract needs specific details and can only be changed by mutual agreement. Pay can be structured by contract type, by time, or by performance, and gross pay minus deductions gives you nett pay. Most people are taxed through PAYE, while non-salary earners use provisional tax. Benefits cover pension, medical aid, UIF, and allowances. Employment can end through resignation, dismissal, retirement, or retrenchment, each with its own required process — and dismissal specifically needs three written warnings plus a right to appeal. And employing anyone under 15 is flatly illegal.` },
    { s: 'NALEDI', t: `That's an excellent, thorough recap. Exam tip: this Act covers a huge amount of ground, so scenario questions often combine several elements at once — a payslip needing explanation, plus a termination process, plus a tax question, all in one case study. Work through each piece separately rather than trying to answer the whole scenario in one sweep.` },
    { s: 'MICHAEL', t: `Piece by piece. Got it. Next episode?` },
    { s: 'NALEDI', t: `The Employment Equity Act — and a recruitment scenario that raises some genuinely uncomfortable questions.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 6,
  file: 'Episode 6 - Employment Equity Act — the HR Angle',
  segs: [
    { s: 'AMELIA', t: `Episode 6: Employment Equity Act, the HR Angle` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Today: the Employment Equity Act, and specifically how it plays out inside a real HR department's daily decisions.` },
    { s: 'MICHAEL', t: `We've covered this Act before too, but I imagine the HR side is more about the how than the why.` },
    { s: 'NALEDI', t: `Exactly. Big picture first, quickly: this Act was put in place in 1998 to redress the imbalances of South Africa's past. It promotes employment equity and regulates affirmative action. But where it gets interesting for HR is in the actual mechanics — where in the employee lifecycle discrimination has to be actively eliminated.` },
    { s: 'MICHAEL', t: `Where exactly does that apply?` },
    { s: 'NALEDI', t: `Right across the whole employee journey — recruitment, selection, placement, promotion, performance management, and even termination procedures. It's not a one-time check at hiring; it has to be built into every single stage.` },
    { s: 'MICHAEL', t: `And testing — I remember this coming up before.` },
    { s: 'NALEDI', t: `Right, fair testing and assessment of employees and applicants is explicitly part of this. Any test used has to be genuinely fair and relevant to the job, not something that quietly disadvantages certain groups.` },
    { s: 'MICHAEL', t: `What about affirmative action specifically — what does HR actually have to do with it?` },
    { s: 'NALEDI', t: `Four things. Identify which employees fall into the categories the Act is designed to support. Understand the employer's obligations. Understand the employee's duties too — it's not one-directional. And make sure the company is compliant, including addressing income differences between groups doing similar work.` },
    { s: 'MICHAEL', t: `Is there a formal document businesses need for this?` },
    { s: 'NALEDI', t: `Yes — an Employment Equity Plan, treated as a code of good practice. It's the business's roadmap for how it's actually going to make progress on equity, not just a statement of good intentions.` },
    { s: 'MICHAEL', t: `Let's make this real. Walk me through a situation where this actually gets tested.` },
    { s: 'NALEDI', t: `Good one to work through properly. Picture Thandeka, who applies for a trainee investment consultant role at a wealth management firm called Highveld Wealth Partners. She's shortlisted and gets an interview with both the HR manager and the line manager. Partway through, the line manager asks her directly whether she thinks a woman is actually capable of selling investment products to older male clients.` },
    { s: 'MICHAEL', t: `That's already a problem before we go any further.` },
    { s: 'NALEDI', t: `It is — that question has nothing to do with her actual competence, qualifications, or ability to do the job. It's a question rooted purely in gender bias, and it has no place in a fair interview process.` },
    { s: 'MICHAEL', t: `You said "partway through" — there's more?` },
    { s: 'NALEDI', t: `There is. At the end of the interview, the HR manager asks her to complete a personality assessment. The only version available is in Afrikaans. Thandeka mentions upfront that her Afrikaans isn't strong, but she's told that's the only version they have, so she does her best, even though she doesn't fully understand several of the questions.` },
    { s: 'MICHAEL', t: `So now there are two separate issues layered on top of each other.` },
    { s: 'NALEDI', t: `Exactly, and that's what makes this such a good teaching example — it's testing whether you can spot more than one violation in the same scenario. The gender question is direct discrimination, completely unrelated to job ability. The Afrikaans-only assessment is a different kind of problem — it's not necessarily deliberate discrimination, but it disadvantages her unfairly because the tool itself isn't accessible to her, and that undermines the fairness of the whole selection process.` },
    { s: 'MICHAEL', t: `If Thandeka doesn't get the job, does she actually have grounds to challenge it?` },
    { s: 'NALEDI', t: `She would have a genuinely strong case. She could argue the interview process itself was unfair — both because of the discriminatory question and because the assessment tool disadvantaged her unfairly through language, not merit. Whether or not gender or language was the stated reason for any rejection, the process itself was compromised, and that's enough to raise a legitimate unfair discrimination complaint.` },
    { s: 'MICHAEL', t: `What should the company have done differently?` },
    { s: 'NALEDI', t: `Several things. The line manager's question should never have been asked at all — it's irrelevant to the job and clearly biased. And the business should have had the personality assessment available in a language Thandeka was actually comfortable with, or offered an alternative fair assessment method entirely. Fairness isn't just about intentions — it's about whether the actual process gave everyone a genuinely equal shot.` },
    { s: 'MICHAEL', t: `This feels like a really practical lesson, not just an exam topic.` },
    { s: 'NALEDI', t: `It absolutely is — this exact kind of situation happens in real interviews across the country. That's exactly why the Act exists in the first place, and why HR departments need to train their interview panels properly, not just have policies sitting in a drawer somewhere.` },
    { s: 'MICHAEL', t: `Let me recap. The Employment Equity Act requires businesses to eliminate unfair discrimination across the whole employee journey — hiring, promotion, performance, even termination — and to use only fair, relevant testing methods. Affirmative action requires identifying who qualifies, understanding both employer and employee obligations, and closing income gaps, all documented in a formal Employment Equity Plan. And a scenario like Thandeka's shows how discrimination can show up in more than one form in the very same interview — a biased question, and an unfair testing process.` },
    { s: 'NALEDI', t: `Perfect summary. Exam tip: when you're given a discrimination scenario, don't stop at the first issue you spot. Read it through carefully for a second, more subtle one — examiners often layer two separate problems into the same case study specifically to see if you catch both.` },
    { s: 'MICHAEL', t: `Noted — read it twice. Next episode?` },
    { s: 'NALEDI', t: `COIDA — what happens when someone actually gets hurt on the job, and what HR is responsible for when that happens.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 7,
  file: 'Episode 7 - COIDA — the HR Angle',
  segs: [
    { s: 'AMELIA', t: `Episode 7: COIDA, the HR Angle` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Today: the Compensation for Occupational Injuries and Diseases Act, and specifically what falls on HR's desk when someone actually gets hurt at work.` },
    { s: 'MICHAEL', t: `We've covered the general version of this Act before. What's different from the HR side?` },
    { s: 'NALEDI', t: `Less about the legal mechanics of claiming, more about what HR is actually responsible for doing when an incident happens — and how they help prevent it happening again.` },
    { s: 'MICHAEL', t: `Let's start with the basics again, briefly, so it's fresh.` },
    { s: 'NALEDI', t: `This Act outlines the rights and responsibilities of both employees and employers when a worker is injured or contracts a disease connected to their job. It entitles the employee to compensation. Crucially, employers pay into this fund every month — no money is ever deducted from an employee's own pay for it. It simply isn't the worker's responsibility to fund it.` },
    { s: 'MICHAEL', t: `How much compensation does someone actually get?` },
    { s: 'NALEDI', t: `It depends on two things — how serious the injury or disease actually is, and how responsible the employer was for it happening in the first place.` },
    { s: 'MICHAEL', t: `That second part is interesting — employer responsibility actually changes the payout?` },
    { s: 'NALEDI', t: `It does. The Act specifically includes provision for increased compensation where the injury happened because of employer negligence — meaning the business failed to take reasonable precautions it should have taken.` },
    { s: 'MICHAEL', t: `What exactly falls under "types of compensation"?` },
    { s: 'NALEDI', t: `A few categories — temporary disablement, where the person eventually recovers and returns to work, permanent disablement, where they can't return to that role at all, fatalities, and medical expenses connected to the injury or illness. And there's a defined claiming procedure that has to be followed properly for any of this to be paid out.` },
    { s: 'MICHAEL', t: `Does this apply to everyone, or just certain types of employees?` },
    { s: 'NALEDI', t: `It applies broadly — casual, permanent, fixed-term, full-time, and part-time employees are all covered. That's a wide net, and worth remembering, because exam scenarios sometimes test whether a particular type of worker is included.` },
    { s: 'MICHAEL', t: `So where does HR actually come into all this practically?` },
    { s: 'NALEDI', t: `Several places. When an employee is injured carrying out their work duties, HR helps them actually make the claim from the Compensation Fund, and provides whatever evidence is needed to support it. If the Compensation Commissioner finds the employer was negligent, HR is often responsible for making sure changes actually happen in the workplace, so the same thing doesn't happen again. And more broadly, HR provides ongoing information and training to managers and business owners on safe, healthy working practices.` },
    { s: 'MICHAEL', t: `So HR isn't just handling paperwork after the fact — they're meant to be preventing incidents too?` },
    { s: 'NALEDI', t: `Exactly right, and that's really the point worth remembering — HR is a genuinely key department in workplace health and safety, not just an administrative processor of claims once something's already gone wrong.` },
    { s: 'MICHAEL', t: `Give me a picture of this actually playing out.` },
    { s: 'NALEDI', t: `Picture a warehouse where a forklift operator is injured because a walkway that should have had clear markings and barriers didn't. He's off work for several weeks recovering. HR's first job is helping him lodge the claim properly and gathering evidence — incident reports, witness statements, photos of the site. If the investigation finds the missing markings amounted to negligence, his compensation would likely be increased on that basis. And separately, HR would then be expected to push for those walkway markings and barriers to actually get installed, and probably roll out fresh safety training for everyone operating machinery on that site.` },
    { s: 'MICHAEL', t: `So the same incident triggers both a compensation process and a prevention process.` },
    { s: 'NALEDI', t: `Exactly — and a well-run HR department treats both as equally important. Getting the injured employee properly compensated is the immediate priority, but making sure it doesn't happen to the next person is just as much part of the job.` },
    { s: 'MICHAEL', t: `Let me recap. This Act entitles injured or ill employees to compensation funded entirely by the employer, with payout size depending on severity and on whether employer negligence was involved. It covers casual, permanent, fixed-term, full-time, and part-time workers alike. And HR's role spans both sides — supporting the actual claim with evidence, and driving the safety changes needed to prevent repeat incidents.` },
    { s: 'NALEDI', t: `Exactly right. Exam tip: if a scenario mentions unsafe conditions specifically — a missing barrier, no protective equipment, an unmarked hazard — that's almost always a deliberate hint pointing toward the "employer negligence" angle, which increases compensation. Don't miss that detail when it's there.` },
    { s: 'MICHAEL', t: `Locking that in. Next episode?` },
    { s: 'NALEDI', t: `The Skills Development Act — and HR's role in actually building people's careers, not just managing them.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 8,
  file: 'Episode 8 - Skills Development Act — the HR Angle',
  segs: [
    { s: 'AMELIA', t: `Episode 8: Skills Development Act, the HR Angle` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Today: the Skills Development Act, but this time as HR's job, not just a piece of legislation on paper.` },
    { s: 'MICHAEL', t: `We covered the fundamentals of this Act before — the levy, the SETAs, the NQF. What's the HR-specific version?` },
    { s: 'NALEDI', t: `This is genuinely one of the Acts where HR isn't just complying with it from a distance — HR basically runs it. Training and skills development sit right at the centre of what HR departments do, so this Act shapes a huge chunk of their actual daily work.` },
    { s: 'MICHAEL', t: `Remind me quickly why it exists.` },
    { s: 'NALEDI', t: `It was developed in response to the demand for redress and equity, and it aims to develop and improve skills, productivity, and competitiveness across South Africa, through genuinely practical, hands-on methods — not just theory.` },
    { s: 'MICHAEL', t: `What's the actual framework HR is working within?` },
    { s: 'NALEDI', t: `It operates on three levels — national, sector, and workplace. The national strategy links learning directly to what the world of work actually demands, develops the skills of people already employed, and helps businesses become more productive and competitive. HR's job is to interpret what that framework requires and translate it into actual workplace training.` },
    { s: 'MICHAEL', t: `Where do SETAs come in again?` },
    { s: 'NALEDI', t: `SETAs — Sector Education and Training Authorities — are how the national strategy actually gets implemented on the ground. There are 27 of them, each representing a different industry, so the money from a specific business flows to the SETA that matches its sector — one for agriculture, one for banking, one for wholesale and retail, and so on.` },
    { s: 'MICHAEL', t: `And the NQF — the qualifications ladder?` },
    { s: 'NALEDI', t: `Right, the National Qualifications Framework provides a credit system for learning outcomes, structured so people can move between training paths and career paths without starting from scratch every time. It's also specifically designed to help redress past discrimination in education and employment access. SAQA — the South African Qualifications Authority — oversees the whole thing. For HR, this gives a clear, fair framework for actually assessing where an employee's skill level sits.` },
    { s: 'MICHAEL', t: `Learnerships — walk me through those again from HR's side.` },
    { s: 'NALEDI', t: `A learnership lets someone work for the employer while also attending classes — a genuine mix of theoretical and practical learning, with the outcome recognised by SAQA. Businesses actually get compensated by government for taking part. HR's job is keeping proper records of everyone's participation and submitting them on time — miss that admin, and the business loses the benefit.` },
    { s: 'MICHAEL', t: `And a "skills programme" is different from a learnership?` },
    { s: 'NALEDI', t: `It's a smaller version — think of it as a mini learnership, often built into in-service training. The employee trains on specific unit standards and earns credit for each one. String enough of those unit standards together, and it can add up to a full SAQA qualification over time.` },
    { s: 'MICHAEL', t: `How does HR actually help grow people's skills day to day?` },
    { s: 'NALEDI', t: `By working closely with managers and business owners to identify where the real skills gaps are, and then implementing learnerships or skills programmes to close them. Done well, it benefits everyone — the employer gets a more capable workforce, and the employee gets a genuine, recognised qualification out of it.` },
    { s: 'MICHAEL', t: `Now the money side — the levy. Remind me how that actually works.` },
    { s: 'NALEDI', t: `Any registered business with an annual salary bill over R500,000 has to contribute a percentage of that payroll to the Skills Development Levy, paid monthly to SARS. SARS then splits that money — the majority goes to the SETAs, and the rest goes into the National Skills Fund.` },
    { s: 'MICHAEL', t: `And businesses can get some of that money back?` },
    { s: 'NALEDI', t: `Yes — through what's called the levy grant scheme. A business can claim back a significant portion of what it's paid in, but only if it follows the process properly. First, it needs to appoint a Skills Development Facilitator — either someone internal, part-time, or an external consultant. That facilitator has to develop and implement an annual workplace skills plan, submit an annual training report, and make sure employees' skills are actually being developed through real courses, training, and approved initiatives.` },
    { s: 'MICHAEL', t: `So if a business skips the paperwork, they just lose out on money they're entitled to?` },
    { s: 'NALEDI', t: `Exactly — the levy gets paid either way, but only businesses that do the facilitator role properly actually claim a meaningful amount back. It's designed so there's a real financial incentive to take training seriously, not just pay the levy and forget about it.` },
    { s: 'MICHAEL', t: `Give me a picture of this working well in practice.` },
    { s: 'NALEDI', t: `Picture a mid-sized manufacturing company that appoints an HR staff member as its Skills Development Facilitator. She identifies that the company's machine operators lack a formal qualification, despite years of on-the-job experience. She sets up a learnership through the relevant SETA — operators attend structured training alongside their normal shifts, working toward a recognised qualification. The company submits its workplace skills plan and training report on time, claims back a solid portion of its levy, ends up with a better-qualified, more productive team, and the operators walk away with a real, portable qualification they didn't have before.` },
    { s: 'MICHAEL', t: `That's a genuinely good outcome for everyone involved.` },
    { s: 'NALEDI', t: `That's the whole point of the Act, really — it's designed so that investing properly in people's skills isn't just the right thing to do, it's also the financially smart thing to do.` },
    { s: 'MICHAEL', t: `Let me recap. This Act operates through national, sector, and workplace-level strategy, delivered through 27 industry-specific SETAs and tied into the NQF qualifications ladder overseen by SAQA. Learnerships and skills programmes give employees real, recognised qualifications while working. Businesses over the R500,000 payroll threshold pay a monthly levy to SARS, split between SETAs and the National Skills Fund, and can claim a meaningful portion back — but only if they appoint a Skills Development Facilitator and do the workplace skills planning and reporting properly.` },
    { s: 'NALEDI', t: `Excellent summary. Exam tip: examiners love asking you to explain the actual purpose of appointing a Skills Development Facilitator, and to connect that directly to the business being able to claim back levy money — don't just describe the role, explain why it matters financially too.` },
    { s: 'MICHAEL', t: `Purpose plus the financial payoff. Got it. Next episode is the bonus revision round-up?` },
    { s: 'NALEDI', t: `It is — every Act from this whole run, quizzed properly.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 9,
  file: 'Episode 9 (Bonus) - Human Resources Exam Revision Round-Up',
  segs: [
    { s: 'AMELIA', t: `Bonus Episode: Human Resources Exam Revision Round-Up` },
    { s: 'NALEDI', t: `Welcome to a bonus episode of The Business Brief. We've covered the entire Human Resources function — recruitment through to termination, and every piece of legislation HR has to work with. Today, no new content. Straight into exam mode.` },
    { s: 'MICHAEL', t: `I've actually been looking forward to this one. Where do we start?` },
    { s: 'NALEDI', t: `With the HR process itself, quickfire. I'll give you a stage, you tell me what happens there.` },
    { s: 'MICHAEL', t: `Go for it.` },
    { s: 'NALEDI', t: `A business realises it needs a new employee and starts attracting applicants.` },
    { s: 'MICHAEL', t: `Recruitment — internal or external, through ads, referrals, agencies, headhunting, professional associations, or networking.` },
    { s: 'NALEDI', t: `Narrowing that pool down to the right person.` },
    { s: 'MICHAEL', t: `Selection — the seven-step process, sorting applications through to the final interview.` },
    { s: 'NALEDI', t: `The candidate accepts, and paperwork gets drawn up.` },
    { s: 'MICHAEL', t: `A legally binding employment contract, often with a probation period.` },
    { s: 'NALEDI', t: `Day one at the new job.` },
    { s: 'MICHAEL', t: `Induction — introducing them to the business, the people, the rules, and the job itself.` },
    { s: 'NALEDI', t: `Making sure they end up in the role that actually suits them.` },
    { s: 'MICHAEL', t: `Placement.` },
    { s: 'NALEDI', t: `Perfect, five for five. Now the legislation, same format — I give you the Act, you give me its purpose in one line.` },
    { s: 'MICHAEL', t: `Ready.` },
    { s: 'NALEDI', t: `Labour Relations Act.` },
    { s: 'MICHAEL', t: `Ensures fairness in the workplace and governs how disputes, dismissals, and union relationships are handled.` },
    { s: 'NALEDI', t: `Basic Conditions of Employment Act.` },
    { s: 'MICHAEL', t: `Sets the actual conditions of employment — hours, leave, pay, benefits, and how a contract can end.` },
    { s: 'NALEDI', t: `Employment Equity Act.` },
    { s: 'MICHAEL', t: `Promotes employment equity and regulates affirmative action to redress past imbalances.` },
    { s: 'NALEDI', t: `Compensation for Occupational Injuries and Diseases Act.` },
    { s: 'MICHAEL', t: `Entitles injured or ill employees to employer-funded compensation.` },
    { s: 'NALEDI', t: `And the Skills Development Act.` },
    { s: 'MICHAEL', t: `Builds the national framework for training, learnerships, and skills funding.` },
    { s: 'NALEDI', t: `Ten for ten. Let's move to some proper exam-style questions. Multiple choice first.` },
    { s: 'MICHAEL', t: `Hit me.` },
    { s: 'NALEDI', t: `A business owner earns rental income from two properties alongside running her business. Which type of tax would most likely apply to that rental income — PAYE, provisional tax, UIF, or VAT?` },
    { s: 'MICHAEL', t: `Provisional tax — that's specifically for income that isn't a regular salary, like rental income, so PAYE wouldn't apply here.` },
    { s: 'NALEDI', t: `Correct. Next — which of these would NOT typically appear in a written employment contract: the employee's job title, the company's marketing strategy, the notice period required to end the contract, or the employee's leave conditions?` },
    { s: 'MICHAEL', t: `The company's marketing strategy — that has nothing to do with the individual's terms of employment.` },
    { s: 'NALEDI', t: `Exactly right. One more — a fund that receives a monthly contribution from both employer and employee, and pays out if the employee loses their job, falls pregnant, or becomes too ill to work — what's that fund called?` },
    { s: 'MICHAEL', t: `The Unemployment Insurance Fund, UIF.` },
    { s: 'NALEDI', t: `Three for three. Now let's do a matching-style round, quickfire — I'll describe a workplace situation, you tell me which HR concept it points to.` },
    { s: 'MICHAEL', t: `Go.` },
    { s: 'NALEDI', t: `An employee attends evening classes while still working full-time during the day, aiming for a recognised qualification.` },
    { s: 'MICHAEL', t: `A learnership.` },
    { s: 'NALEDI', t: `A manager has to fill a senior role and decides to approach a top performer working at a competing company directly.` },
    { s: 'MICHAEL', t: `Headhunting.` },
    { s: 'NALEDI', t: `An employee has received three written warnings for repeated lateness.` },
    { s: 'MICHAEL', t: `That's heading toward a fair dismissal process, assuming everything's been properly documented.` },
    { s: 'NALEDI', t: `An employee reaches 65 and their colleagues throw them a farewell function.` },
    { s: 'MICHAEL', t: `Retirement.` },
    { s: 'NALEDI', t: `A new machine arrives on the factory floor and nobody knows how to operate it.` },
    { s: 'MICHAEL', t: `That's a training or skills development gap — exactly what the Skills Development Act framework is meant to address.` },
    { s: 'NALEDI', t: `Five for five again. Now let's do a full payslip case, the kind that shows up as a proper case-study question.` },
    { s: 'MICHAEL', t: `Okay, walk me through it.` },
    { s: 'NALEDI', t: `Picture Kagiso, who works for an electrical supplies company called Bright Spark Electricals in Gqeberha, earning a basic monthly salary of R42,000. When the money actually lands in his account, it's noticeably less than he expected. His payslip shows a basic pay of R42,000, a medical aid deduction of R2,900, a pension deduction of R3,360, a UIF deduction of R420, and tax of R8,100.` },
    { s: 'MICHAEL', t: `Let's add those deductions up — R2,900 plus R3,360 plus R420 plus R8,100 comes to R14,780.` },
    { s: 'NALEDI', t: `Exactly right. So using the formula — gross salary minus deductions equals nett salary — what does Kagiso actually take home?` },
    { s: 'MICHAEL', t: `R42,000 minus R14,780 is R27,220.` },
    { s: 'NALEDI', t: `Perfect. Now, if Kagiso came to you confused about why his pay is so much lower than his basic salary, how would you explain it to him?` },
    { s: 'MICHAEL', t: `I'd walk him through each deduction individually — his medical aid and pension are contributions building up benefits for his future, his UIF is a safety net that would support him if he ever lost his job or couldn't work, and his tax is a legal requirement paid to SARS based on how much he earns. None of it disappears randomly — each deduction is either legally required or working in his own favour long-term.` },
    { s: 'NALEDI', t: `That's exactly the kind of full-marks answer examiners want — not just the maths, but the explanation of what each deduction actually is and why it exists.` },
    { s: 'MICHAEL', t: `That structure feels like it'd work for basically any payslip question.` },
    { s: 'NALEDI', t: `It does — identify each deduction, explain its purpose, and always show the actual gross-minus-deductions calculation clearly.` },
    { s: 'MICHAEL', t: `Let's do one more — a bigger case study, the kind worth a large chunk of marks.` },
    { s: 'NALEDI', t: `Good instinct to end on this. Picture yourself as the newly appointed Human Resources Manager at a mid-sized furniture manufacturer. The Managing Director calls you in and explains that the business is losing ground to competitors — staff don't have the skills to operate newer equipment efficiently, and recent hiring has brought in people who don't really fit the roles they were placed in. You're asked to present a plan to fix this.` },
    { s: 'MICHAEL', t: `Where would you even start with something that broad?` },
    { s: 'NALEDI', t: `Structure it in two halves, because that's really what the case is asking for — fixing the people already there, and fixing how new people get brought in. For the current team, you'd point to the Skills Development Act framework — identify the specific skill gaps around the new equipment, appoint or use a Skills Development Facilitator, and set up a learnership or skills programme so operators build real, recognised qualifications while working.` },
    { s: 'MICHAEL', t: `And for the hiring side?` },
    { s: 'NALEDI', t: `That's where you'd tighten up recruitment and selection — make sure job descriptions are precise about what the role actually requires, use a proper structured seven-step selection process instead of a rushed one, and make sure placement decisions genuinely match people's skills and personality to the specific role, not just to whatever vacancy happens to be open. You'd also point out that all of this has to stay aligned with the Employment Equity Act, so improving skills and fixing hiring doesn't come at the cost of fairness.` },
    { s: 'MICHAEL', t: `So it's really recruitment, selection, and placement discipline on one side, and skills investment on the other, tied together by staying compliant throughout.` },
    { s: 'NALEDI', t: `Exactly — and that combination is usually what separates a strong answer from an average one in these big case-study questions. Most students remember one half. Full marks usually go to whoever ties both halves together clearly.` },
    { s: 'MICHAEL', t: `Any final advice before exam day?` },
    { s: 'NALEDI', t: `Three things. One — know your numbers cold: the R500,000 levy threshold, R60,000 tax-free threshold, the four-month maternity leave, the three written warnings before dismissal, fifteen as the minimum working age. Two — in any case study, work out which specific Act or HR process actually applies before you start writing your answer, because half the marks come from correctly identifying that. Three — when a scenario touches on money, always show your calculation clearly, even if the question doesn't explicitly ask you to. Examiners reward visible working.` },
    { s: 'MICHAEL', t: `Numbers, identify first, show your working. Got it.` },
    { s: 'NALEDI', t: `And that wraps up everything on the Human Resources function — the full hiring journey, and all five pieces of legislation shaping it. You're genuinely well prepared for this now.` },
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

  console.log(`The Business Brief — HR — running ${episodesToRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of episodesToRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, silenceLong);
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final files.`);
}

main().catch(e => { console.error(e); process.exit(1); });

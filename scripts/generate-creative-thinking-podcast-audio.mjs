/**
 * The Business Brief — Creative Thinking & Problem Solving Podcast Series — ElevenLabs audio generator
 * ----------------------------------------------------------------------------
 * Usage (from the project root, in a terminal with real internet access —
 * this will NOT work from inside Cowork's sandbox, run it on your own machine):
 *
 *   node --env-file=.env.local scripts/generate-creative-thinking-podcast-audio.mjs
 *
 * To (re-)record only specific episodes, pass their numbers as arguments:
 *
 *   node --env-file=.env.local scripts/generate-creative-thinking-podcast-audio.mjs 1
 *
 * What it does:
 *  1. Generates episodes of "The Business Brief — Creative Thinking & Problem
 *     Solving" series, each SAVED AS ITS OWN SEPARATE FILE, named after the
 *     episode. Currently Episodes 1-2 are populated — more episodes can be
 *     added to the EPISODES array below as they're ready.
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
 *   podcasts/The-Business-Brief-Creative-Thinking/Episode 1 - Solving Problems Like a Pro.mp3
 *
 * Individual clips are kept in podcasts/tmp/business-brief-creative-thinking/<episode-slug>/ for resuming.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-creative-thinking-podcast-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'The-Business-Brief-Creative-Thinking');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'business-brief-creative-thinking');

// ─────────────────────────────────────────────────────────────────────────
// EPISODES — each one is generated and stitched into its own separate file.
// (Episodes 1-2 populated for now — add more as they're ready.)
// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'Episode 1 - Solving Problems Like a Pro',
  segs: [
    { s: 'AMELIA', t: `Episode 1: Solving Problems Like a Pro` },
    { s: 'NALEDI', t: `Welcome to The Business Brief. New topic today — creative thinking and problem solving. We're starting with something people mix up constantly: the difference between solving a problem and simply making a decision.` },
    { s: 'MICHAEL', t: `Aren't those the same thing, though?` },
    { s: 'NALEDI', t: `They overlap, but they're genuinely different processes. Decision-making is often done by one person, or by senior management alone, which makes it fairly authoritarian — you're just looking at a number of existing alternatives and picking the best one. If someone hands you three phones and you pick one, that's a decision.` },
    { s: 'MICHAEL', t: `And problem solving?` },
    { s: 'NALEDI', t: `Problem solving requires actual creative thinking, evaluating alternatives through proper research, and it's usually done by a group rather than one person — which makes it more inclusive. It encourages generating genuinely new, innovative solutions that then get implemented and evaluated. Decision-making is actually a smaller piece inside problem-solving, since you're making decisions at every single step along the way.` },
    { s: 'MICHAEL', t: `So problem-solving is the bigger process, and decision-making happens inside it repeatedly?` },
    { s: 'NALEDI', t: `Exactly. And here's the cleanest way to remember the distinction — in problem-solving, people critically evaluate a number of possible solutions. In decision-making, people simply choose from solutions someone else already presented to them. Problem solvers evaluate at every step. Decision makers often just decide and move on, without circling back to check if it actually worked.` },
    { s: 'MICHAEL', t: `Is there an actual structured process for problem-solving, or is it more improvised?` },
    { s: 'NALEDI', t: `There's a proper seven-step cycle, and it's genuinely worth knowing cold, because it applies to almost any business problem you'll ever be asked to analyse. Step one — identify the problem. This is the most critical step, because it sets the focus for everything that follows. You want opinions from everyone involved, so you can see the problem from every angle, and gather as much information as possible.` },
    { s: 'MICHAEL', t: `People skip that step all the time in real life, don't they? Jump straight to fixing something before they actually understand it.` },
    { s: 'NALEDI', t: `Constantly, and it usually backfires. Step two — define the problem. Once you genuinely understand it, you need a definition that's concrete and specific, not vague. Step three — formulate a strategy. This means investigating properly and finding several feasible solutions, not just the first one that comes to mind. There's rarely only one correct answer — some options are simply better than others, and teamwork tends to be the best tool for generating them.` },
    { s: 'MICHAEL', t: `And once you've picked a strategy?` },
    { s: 'NALEDI', t: `Step four — implement the strategy, which takes real planning, and you need to make sure you actually have the resources to pull it off: money, equipment, people, time. Step five — allocate the resources, meaning you purchase what's needed and assign the right people, communicating clearly so everyone understands their role, timing, and order of tasks.` },
    { s: 'MICHAEL', t: `Two steps left?` },
    { s: 'NALEDI', t: `Step six — monitor the problem-solving. Once the strategy's running, you check whether it's actually solving the problem you defined back in step one. If it isn't working, or it's underperforming, you go back to step three and try a different strategy — difficult problems often take real trial and error. And step seven — evaluate the whole problem-solving process. Whether it worked or not, you look back at the process itself: was it effective, could it have been better, and what lessons can be carried into future problems?` },
    { s: 'MICHAEL', t: `So it's genuinely a loop, not a straight line.` },
    { s: 'NALEDI', t: `Exactly — the diagram is drawn as a cycle, with step seven curling right back around to step one. Let's make this concrete with a scenario. Picture Velocity Motors, a mid-sized vehicle manufacturer that's seen its sales decline steadily for the past three years. Management tells the shareholders it's simply the economy — tough times, tough sales, nothing to be done. The board isn't satisfied with that explanation and insists on real action.` },
    { s: 'MICHAEL', t: `So where would you start with the seven-step cycle here?` },
    { s: 'NALEDI', t: `Step one, properly — identify the problem, which means genuinely investigating rather than accepting the first explanation offered. You'd want opinions from sales staff, from customers, from dealers, not just from management's boardroom assumptions. It's entirely possible the economy explains part of the decline, but there could be other factors too — outdated models, weak marketing, a competitor undercutting on price, poor dealership service.` },
    { s: 'MICHAEL', t: `So the "obvious" answer might not even be the real one.` },
    { s: 'NALEDI', t: `That's usually exactly the trap in a scenario like this. Once you've properly defined the actual problem in step two, you'd move into formulating a strategy in step three — maybe refreshing the product line, retraining the sales team, adjusting pricing, or improving the buying experience — implementing it, monitoring whether sales actually recover, and being ready to loop back if the chosen strategy doesn't move the numbers.` },
    { s: 'MICHAEL', t: `Let me recap. Decision-making often involves one person or senior management choosing between existing options. Problem-solving is a broader, more inclusive process that generates and evaluates original solutions through seven steps: identify, define, formulate a strategy, implement, allocate resources, monitor, and evaluate — looping back to the start if needed. And a scenario like Velocity Motors shows why jumping straight to "it's just the economy" skips the most important step in the whole cycle.` },
    { s: 'NALEDI', t: `Excellent summary. Exam tip: when a question gives you a declining-sales style scenario and asks you to apply the cycle, don't just list the seven steps — actually apply each one to the specific details given, because that's where the marks really live.` },
    { s: 'MICHAEL', t: `Apply it, don't just list it. Next episode?` },
    { s: 'NALEDI', t: `The first two tools for actually generating solutions once you've defined the problem — getting ideas out of your head and onto paper.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 2,
  file: 'Episode 2 - Getting Ideas Out of Your Head',
  segs: [
    { s: 'AMELIA', t: `Episode 2: Getting Ideas Out of Your Head` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Last time we covered the seven-step problem-solving cycle. Today we get practical — the actual tools people use to generate ideas once a problem's been defined.` },
    { s: 'MICHAEL', t: `Where do we start?` },
    { s: 'NALEDI', t: `With something you've probably already used without realising it has a formal name — mind mapping. A mind map is a diagram that represents ideas or concepts, and its real strength is that it mirrors how our thinking actually works. It's useful for generating new ideas, solving problems, organising notes, and summarising when you're studying.` },
    { s: 'MICHAEL', t: `How do you actually build one?` },
    { s: 'NALEDI', t: `You start by deciding on your central problem or topic, and finding a single word or picture that captures it — that becomes the centre of the map. From there, you break the central theme down into main ideas or points, placed on branches radiating outward, often generated through brainstorming. Then you break those main points down further into sub-points. And you use colour and shapes deliberately, to help sort ideas logically, using words or pictures wherever it helps.` },
    { s: 'MICHAEL', t: `So it genuinely branches outward, layer by layer.` },
    { s: 'NALEDI', t: `Exactly — a central topic, four or so main branches, and each of those splitting further into sub-points. It's less about being neat and more about mirroring the actual associative way your brain connects ideas.` },
    { s: 'MICHAEL', t: `What's the tradeoff with mind maps? Nothing's free.` },
    { s: 'NALEDI', t: `Genuinely useful for generating ideas quickly and remembering them — visually, it tends to stick. But some people find them chaotic and messy, especially once a map gets big and cluttered with sub-branches. It works brilliantly for some thinkers and feels overwhelming to others.` },
    { s: 'MICHAEL', t: `And brainstorming — is that just "shout out ideas," or is there more structure to it?` },
    { s: 'NALEDI', t: `There's real structure, and it matters, because unmanaged brainstorming tends to fail. It's typically used when an organisation wants a group or team involved in generating solutions, and it can be genuinely effective and motivating — but only if it's carefully managed by a facilitator, someone whose job is to keep the process running smoothly.` },
    { s: 'MICHAEL', t: `Walk me through the actual process.` },
    { s: 'NALEDI', t: `First, the problem has to be clearly defined, and everyone in the group needs to genuinely understand that definition before a time limit gets set. Then people suggest ideas and solutions at random, and everything gets written on a flip chart. The facilitator's real job here is encouraging full participation and making absolutely sure nobody criticises a suggestion in the moment — because criticism at this stage kills people's willingness to keep contributing.` },
    { s: 'MICHAEL', t: `So no bad ideas allowed to be called out as bad, even briefly?` },
    { s: 'NALEDI', t: `Correct, not during the generation phase. Once time's up, or nobody has more ideas, the sheets get put up around the room. Similar ideas are grouped together using coloured pens, and a new, refined list gets drawn up that combines related ideas. The group then evaluates everything and rates each idea by how successful they think it will be, before finally discussing a plan of action to put the best ideas into practice.` },
    { s: 'MICHAEL', t: `So evaluation only happens after the free-flowing part is completely finished.` },
    { s: 'NALEDI', t: `That separation is really the whole trick of brainstorming — you protect the generation phase from judgment, and only judge afterwards, once you've got a full pool of ideas to actually choose from.` },
    { s: 'MICHAEL', t: `What's the catch with brainstorming as a technique?` },
    { s: 'NALEDI', t: `It stimulates genuine creative thinking, and people build on each other's ideas in a safe, low-pressure environment — that's the upside. But it can be dominated by one strong, confident personality in the room, while shyer members simply don't contribute, which quietly limits how much value the group actually gets out of it.` },
    { s: 'MICHAEL', t: `That feels like a problem worth solving on its own.` },
    { s: 'NALEDI', t: `It genuinely is, and it's exactly why other techniques exist specifically to work around that weakness — which is where we're headed in upcoming episodes. For now, think of mind mapping as the tool for organising and visualising your own thinking, and brainstorming as the tool for pulling ideas out of a group, provided someone's actively managing the room.` },
    { s: 'MICHAEL', t: `Let me recap. Mind mapping starts from a central topic, branches into main points, then sub-points, using colour and imagery to mirror how your brain naturally connects ideas — powerful, but can feel chaotic to some people. Brainstorming pulls ideas from a group under a facilitator's guidance, strictly separating idea generation from judgment — powerful, but vulnerable to being dominated by the loudest person in the room.` },
    { s: 'NALEDI', t: `Exactly right. Exam tip: if a scenario mentions one confident person taking over a group discussion, that's almost always pointing you toward a weakness of brainstorming specifically — and toward a technique built to fix exactly that problem, which we'll get to shortly.` },
    { s: 'MICHAEL', t: `Noted — dominant personality equals a brainstorming weakness. Next episode?` },
    { s: 'NALEDI', t: `Two techniques for genuinely weighing a decision properly — one for looking at what's pulling for and against a change, and one for making a solid decision on your own.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 3,
  file: 'Episode 3 - Weighing It Up - Force-Field Analysis and the Empty Chair',
  segs: [
    { s: 'AMELIA', t: `Episode 3: Weighing It Up, Force-Field Analysis and the Empty Chair` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Two techniques today — one for when a business is genuinely torn over whether to make a change, and one for making a solid decision entirely on your own.` },
    { s: 'MICHAEL', t: `Start with the "torn" one.` },
    { s: 'NALEDI', t: `Force-field analysis. It's used specifically when change is being considered, and the idea is refreshingly simple — you lay out every force pushing for the change on one side, and every force pushing against it on the other, and you weigh them against each other before deciding.` },
    { s: 'MICHAEL', t: `Like a tug of war, visually?` },
    { s: 'NALEDI', t: `That's a genuinely good way to picture it. Each force gets a weight — a number showing how strong that particular factor is — and then you total up both sides. If the "for" side outweighs the "against" side, that's a real signal the change is worth pursuing. If it's close, or against wins, you've got a strong case for pausing or rethinking.` },
    { s: 'MICHAEL', t: `Can you build one for me?` },
    { s: 'NALEDI', t: `Let's do it. Picture a growing digital marketing agency weighing up whether to relocate its office to a bigger, more central building. On the "for" side — more space, weighted at four, since the current office is genuinely bursting at capacity. Better visibility to walk-in clients, weighted at two. A noticeably better working atmosphere in the new building, weighted at three. Being closer to public transport for the team, weighted at one. And a general expectation that productivity would rise with more breathing room, weighted at one.` },
    { s: 'MICHAEL', t: `That's four, two, three, one, one — so eleven on the "for" side.` },
    { s: 'NALEDI', t: `Exactly. Now the "against" side — disruption during the move itself, weighted at three. The actual cost of relocating, also weighted at three. Needing to rebrand signage and stationery for the new address, weighted at one. Concerns about parking availability at the new site, weighted at three. Some staff simply being resistant to any change at all, weighted at one. And the need to invest in new technology setup at the new premises, weighted at one.` },
    { s: 'MICHAEL', t: `Three, three, one, three, one, one — that's twelve against.` },
    { s: 'NALEDI', t: `So you've got eleven for and twelve against. On the current scores, the forces against the move are stronger, so the business should not proceed with the move yet. The analysis also shows exactly which concerns — especially cost, disruption and parking — would need to be addressed before the move is reconsidered.` },
    { s: 'MICHAEL', t: `So the real value isn't just the final number, it's seeing exactly what's driving each side.` },
    { s: 'NALEDI', t: `Precisely the point. What's genuinely good about force-field analysis is that it makes people feel included and heard, since everyone's concerns get weighed rather than dismissed, and people tend to grow alongside the business as changes are properly worked through together. The catch is that it can be time-consuming — because ideally, the business needs to stabilise after one round of change before piling on more, which can slow things down considerably.` },
    { s: 'MICHAEL', t: `Now the solo one — the empty chair.` },
    { s: 'NALEDI', t: `The empty chair technique is used specifically for making decisions on your own, when pulling together a full group simply isn't practical. The core idea is that you deliberately consider the problem from a perspective other than your own — imagining what a specific stakeholder, whether that's a customer, a colleague, or someone directly affected by the decision, would actually say if they were sitting across from you.` },
    { s: 'MICHAEL', t: `So it's not really deciding in isolation — it's building other viewpoints into a decision you're still making alone.` },
    { s: 'NALEDI', t: `Exactly that balance. What it does well is clarify the problem, because forcing yourself to justify a solution from someone else's angle sharpens your own thinking considerably — your solution has to hold up to that outside perspective, not just your own assumptions. The limitation is fairly obvious though — it's still fundamentally one person's process, so the creativity is genuinely more limited than you'd get from an actual group working the problem together.` },
    { s: 'MICHAEL', t: `When would a business actually reach for this one over, say, brainstorming?` },
    { s: 'NALEDI', t: `Typically when time is short, when pulling a group together isn't realistic, or when a decision genuinely needs to be made by one specific person — a manager under pressure, for instance — but they still want the discipline of checking their thinking against a perspective beyond their own.` },
    { s: 'MICHAEL', t: `Let me recap. Force-field analysis weighs the forces for and against a specific change, giving both a visible score and a clear map of which concerns matter most — strong for group decisions about whether to move forward, but genuinely time-consuming. The empty chair technique is for solo decisions, forcing you to justify your solution from someone else's perspective — sharpens the thinking, but still limited by being just one person's view.` },
    { s: 'NALEDI', t: `Great summary. Exam tip: if a diagram question shows weighted arrows pointing toward and away from a central plan, you're looking at force-field analysis specifically — identify it by the visual structure, then explain both totals and what they suggest.` },
    { s: 'MICHAEL', t: `Weighted arrows, two sides, spot it instantly. Next episode?` },
    { s: 'NALEDI', t: `Two techniques for when getting everyone in one room simply isn't realistic — including one used by actual experts who never even meet face to face.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 4,
  file: 'Episode 4 - When You Cant Get Everyone in One Room',
  segs: [
    { s: 'AMELIA', t: `Episode 4: When You Can't Get Everyone in One Room` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Today, two techniques built for a very specific problem — getting good group input when a normal, open group discussion isn't going to work.` },
    { s: 'MICHAEL', t: `Why wouldn't it work?` },
    { s: 'NALEDI', t: `A few reasons. Sometimes a group vote just ends up following whoever's the most persuasive, confident voice in the room, rather than the actual best idea. Sometimes the people you need input from can't realistically all sit down together. Both problems have their own dedicated fix.` },
    { s: 'MICHAEL', t: `Start with the persuasion problem.` },
    { s: 'NALEDI', t: `That's exactly what the Delphi technique solves. A panel of experts fills in a series of questionnaires, and crucially, they never meet face to face. The whole idea behind that is to avoid a group simply voting for whoever sounds most confident, rather than whoever actually has the best answer.` },
    { s: 'MICHAEL', t: `So how does it actually run?` },
    { s: 'NALEDI', t: `In three structured rounds. Round one is priority setting — the panel does a preliminary ranking of around ten main topic areas, works toward consensus on the main priorities within each area, establishes a list of stakeholders to consult later, and can suggest additional priorities. That feeds into a preliminary stakeholders' meeting.` },
    { s: 'MICHAEL', t: `Then round two?` },
    { s: 'NALEDI', t: `Strategic and operational issues — the panel re-ranks those ten topic areas, gets specific about the top priorities and strategy, suggests further priorities, and establishes a consolidated list of stakeholders. That leads into a second stakeholders' meeting. And round three is consolidation and consensus — arriving at a consolidated list of priorities, and gauging how engaged and willing members actually are to participate going forward.` },
    { s: 'MICHAEL', t: `And because nobody's face to face, nobody's swayed by confidence or charisma in the room.` },
    { s: 'NALEDI', t: `Exactly the mechanism. Each expert can see what other panellists suggested and quietly adjust their own view, purely based on the strength of the argument, not the volume or charisma of the person making it. If the process works, real consensus emerges organically.` },
    { s: 'MICHAEL', t: `What's the catch?` },
    { s: 'NALEDI', t: `Because everyone's anonymous and working somewhat independently, suggestions don't always converge — you can end up with genuinely no consensus at all, even after several rounds, if opinions stay too far apart.` },
    { s: 'MICHAEL', t: `Let's build a scenario.` },
    { s: 'NALEDI', t: `Picture Thabo's Auto Care, an independent garage that's been quietly losing cash for months. Most clients collect their vehicles after hours and pay in cash, and the manager strongly suspects money has been going missing, but genuinely isn't sure how, or who's responsible, or how to even approach investigating it without accusing innocent staff.` },
    { s: 'MICHAEL', t: `Why would Delphi specifically suit this, rather than just calling a staff meeting?` },
    { s: 'NALEDI', t: `Because a normal meeting on a topic like theft is genuinely awkward and risky — people clam up, accusations fly, and the loudest personality in the room might dominate or deflect. Delphi lets every staff member, along with maybe an external security consultant, submit honest suggestions anonymously across a few rounds, without anyone having to publicly accuse a colleague or defend themselves in front of the group.` },
    { s: 'MICHAEL', t: `How would the manager actually reach a decision from that?` },
    { s: 'NALEDI', t: `Round one might simply ask an open question — something like "what do you think is causing the losses, and what would help prevent them?" Round two shares the anonymised themes from those answers back to the panel, and asks people to rank or refine them. Round three consolidates it all into a short list — maybe better after-hours cash-handling procedures, CCTV in the payment area, or a two-person sign-off on cash transactions — and the manager makes the final call based on where the strongest, most repeated consensus actually landed.` },
    { s: 'MICHAEL', t: `Now the second technique — for when people genuinely can meet, but one person keeps taking over.` },
    { s: 'NALEDI', t: `That's the Nominal Group Technique, or NGT, and it exists specifically to counter that exact weakness in ordinary group discussions and brainstorming — the dominant personality problem. It works like this: the group is divided into smaller clusters seated around a table, the problem is clearly defined, and then each individual silently brainstorms as many ideas as possible and writes them down alone.` },
    { s: 'MICHAEL', t: `So no talking yet.` },
    { s: 'NALEDI', t: `Not yet, deliberately. Then, one by one, each person shares just one of their solutions, and someone records every single one on a shared sheet. Everyone gives a second idea, then a third, and so on, until nothing new is left. Nobody's allowed to criticise during this stage, though participants can ask clarifying questions if a suggestion isn't fully understood.` },
    { s: 'MICHAEL', t: `And after all the ideas are on the table?` },
    { s: 'NALEDI', t: `Each person reads through the full list and rates every suggestion anonymously — highest points for what they think is the best idea, lowest for the one they like least. The ratings get collected and totalled, and the group sees exactly which idea scored highest, second highest, and so on. Each smaller group then presents whichever solution came out on top.` },
    { s: 'MICHAEL', t: `So everyone genuinely gets a turn, and the scoring stays anonymous.` },
    { s: 'NALEDI', t: `That's the real strength — full participation is basically guaranteed, since everyone must contribute an idea in turn, and anonymous voting tends to produce more honest results than a show of hands ever would. The downside is that ideas can still fail to converge into a strong single answer, and because the process is more structured and controlled than free brainstorming, the ideas themselves can end up a little less wild or creative.` },
    { s: 'MICHAEL', t: `Let me recap. Delphi solves the "one loud voice dominates" problem by keeping experts completely anonymous and structuring three separate rounds toward consensus — powerful for sensitive or precedent-free problems, but not guaranteed to converge. NGT solves that same dominance problem in a face-to-face setting, by forcing silent, individual idea generation before any group discussion happens, with anonymous rating at the end — full participation guaranteed, but somewhat less wild creativity than open brainstorming.` },
    { s: 'NALEDI', t: `Perfectly summarised. Exam tip: if a scenario specifically mentions experts who never meet in person, that's Delphi. If it mentions a group that's physically together but writing ideas down silently before speaking, that's NGT — the physical setting is your fastest way to tell them apart.` },
    { s: 'MICHAEL', t: `Together but silent first is NGT, never meeting at all is Delphi. Next episode?` },
    { s: 'NALEDI', t: `Two more tools — one for remixing existing ideas into something new, and a seven-part checklist for looking at any problem from a completely different angle.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 5,
  file: 'Episode 5 - Mixing Ideas and the SCAMPER Checklist',
  segs: [
    { s: 'AMELIA', t: `Episode 5: Mixing Ideas and the SCAMPER Checklist` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Two more tools today — one for remixing what already exists into something new, and a seven-part checklist for looking at a problem from angles you'd never normally consider.` },
    { s: 'MICHAEL', t: `Start with the remixing one.` },
    { s: 'NALEDI', t: `Forced combinations. The idea behind it is that most genuinely creative ideas aren't invented from nothing — they come from re-mixing existing ideas in ways nobody's tried before. Forced combinations gives you a structured way to actually do that deliberately, rather than just hoping inspiration strikes.` },
    { s: 'MICHAEL', t: `Walk me through the process.` },
    { s: 'NALEDI', t: `As a group, you start by properly defining and understanding the problem. Then you brainstorm keywords connected to that problem — and it's fine if some of them seem only loosely relevant at first. You write each keyword on a small piece of paper and stick them up on a wall. Then comes the actual technique — you combine those words into new pairings, and try to generate ideas from those unexpected combinations.` },
    { s: 'MICHAEL', t: `So you're literally forcing two unrelated words together and seeing what falls out?` },
    { s: 'NALEDI', t: `Exactly, and that's genuinely the point — you're meant to be adventurous about it, playing with combinations that feel a bit odd or even silly at first. Once you've generated a decent spread of ideas this way, you select the strongest ones and shape them into an actual strategy.` },
    { s: 'MICHAEL', t: `What's the payoff, and what's the risk?` },
    { s: 'NALEDI', t: `It stimulates real creativity and pushes people to think genuinely outside the box, which is exactly what it's designed for. The risk is that some participants feel inhibited once ideas start getting genuinely wild or strange — not everyone's comfortable proposing something that sounds a little absurd out loud, even in a supportive room.` },
    { s: 'MICHAEL', t: `Now the checklist one.` },
    { s: 'NALEDI', t: `SCAMPER. When you're stuck on a problem, you often need to deliberately look at the situation from different angles rather than staring at it the same way you already have been — and SCAMPER is built specifically to walk you through that. It's an acronym: Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, and Rearrange.` },
    { s: 'MICHAEL', t: `Seven angles on the same problem.` },
    { s: 'NALEDI', t: `Exactly, and you work through them as a checklist. You identify the problem or idea you want to develop, then ask a question tied to each letter in turn. Let's actually run a business through it — imagine a stationery company trying to increase its sales volumes.` },
    { s: 'MICHAEL', t: `Go through the letters.` },
    { s: 'NALEDI', t: `Substitute — what can I swap out in my selling process? Maybe the company starts selling refillable pens instead of disposable ones. Combine — how can I pair what I'm selling with something else? Bundling pens together with notebooks as a set. Adapt — what can I borrow or adjust from someone else's product line? Maybe copying how a competitor bundles pen-and-pencil sets, then adding paper into the mix.` },
    { s: 'MICHAEL', t: `Halfway through.` },
    { s: 'NALEDI', t: `Modify — can I change the situation significantly, even produce something new entirely? Using the same machinery to manufacture an entirely different product line, like stationery organisers instead of just pens. Put to other uses — how could I market this product for a completely different purpose? A premium pen marketed as a corporate gifting item, not just a writing tool. Eliminate — what can I strip out or simplify? Selling a no-frills pen without a pocket clip, cutting production cost. And Rearrange — how can I reorder or flip the way I actually sell?` },
    { s: 'MICHAEL', t: `Give me an example of that last one.` },
    { s: 'NALEDI', t: `Offering free use of a stationery subscription service for the first month, and only charging once someone actually decides to continue — reversing the usual "pay first" order entirely. That's the spirit of Rearrange: taking the normal sequence of how something's done, and deliberately flipping or reordering it to see what new idea falls out.` },
    { s: 'MICHAEL', t: `That's a genuinely thorough way to interrogate one problem from seven completely different directions.` },
    { s: 'NALEDI', t: `That's exactly its strength — it helps generate genuinely different kinds of ideas and pushes real objectivity, since you're forced to consider angles you might never have thought to ask about naturally. The tradeoff is that it's relatively complex to run properly, so it's not always suitable for every group or skill level, and working through all seven letters properly does take real time.` },
    { s: 'MICHAEL', t: `Let me recap. Forced combinations takes keywords related to a problem and deliberately mashes them together into unexpected pairings to spark new ideas — creative, but can feel uncomfortably wild for some participants. SCAMPER runs a problem through seven fixed lenses — substitute, combine, adapt, modify, put to other uses, eliminate, rearrange — genuinely thorough, but complex and time-consuming to apply properly.` },
    { s: 'NALEDI', t: `Great summary. Study tip: when practising SCAMPER, work through all seven letters so that you understand the full framework rather than only two or three of the angles.` },
    { s: 'MICHAEL', t: `All seven when using SCAMPER. Next episode?` },
    { s: 'NALEDI', t: `With eight techniques now on the table, we look at how to actually pick the right one for a given problem — and a couple of scenarios that put that judgement to the test.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 6,
  file: 'Episode 6 - Picking the Right Tool for the Job',
  segs: [
    { s: 'AMELIA', t: `Episode 6: Picking the Right Tool for the Job` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. We've now got eight problem-solving techniques on the table. Today: how you actually decide which one fits a given situation, plus a piece of wisdom that's easy to underrate — using your own local knowledge and experience as a genuine problem-solving resource.` },
    { s: 'MICHAEL', t: `Eight is a lot to hold in your head at once. Is there a quick way to sort them?` },
    { s: 'NALEDI', t: `Genuinely useful to group them by what they're actually built for. Mind mapping and brainstorming are your idea-generation tools — mind mapping for organising your own thinking, brainstorming for pulling ideas out of a group under a facilitator. Force-field analysis and the empty chair technique are your decision-weighing tools — one for group decisions about change, one for solo decisions needing an outside perspective. Delphi and NGT solve the "can't get honest input the normal way" problem — Delphi when anonymous input is needed through questionnaires without face-to-face discussion, and NGT when a group meets together but needs a structured process to prevent dominant personalities from taking over. And forced combinations with SCAMPER are your reframing tools, for when you're simply stuck looking at a problem the same way.` },
    { s: 'MICHAEL', t: `So the first real question in any scenario is "what's actually blocking us here" — not "which technique sounds impressive."` },
    { s: 'NALEDI', t: `Exactly the right instinct. Is it a lack of ideas? Reach for mind mapping or brainstorming. Is it indecision about a specific change? Force-field analysis. Is it that group discussions keep getting dominated or too risky to hold openly? Delphi or NGT depending on the process needed — Delphi for anonymous questionnaire-based input across rounds, and NGT for a face-to-face group that first generates ideas silently and then rates them anonymously. Is it that you're stuck seeing the problem only one way? Forced combinations or SCAMPER.` },
    { s: 'MICHAEL', t: `Let's test that with something a bit different — you mentioned local knowledge as a resource.` },
    { s: 'NALEDI', t: `Right, and this is honestly one of the more overlooked ideas in the whole topic. Indigenous knowledge is the knowledge and skills that people in a particular area possess, which let them get the most out of their environment. South Africa has an enormous depth of this kind of knowledge, and it's genuinely valuable when a business is searching for opportunities or trying to solve a problem — traditional wisdom, lived experience, and cultural understanding all count here, not just what's written in a formal report.` },
    { s: 'MICHAEL', t: `Give me a concrete sense of how that plays out for a business.` },
    { s: 'NALEDI', t: `Before a business can properly identify an opportunity, it has to understand its market — and understanding the history, culture, and traditions of that market is essential to doing that well. It also directly affects how a business manages its own staff, since understanding where your people come from and what shapes their thinking changes how you communicate, train, and lead them.` },
    { s: 'MICHAEL', t: `So it's not just about the customer side, it cuts both ways internally too.` },
    { s: 'NALEDI', t: `Exactly — a business that ignores indigenous knowledge risks misreading both its market and its own workforce. It's easy to default to formal research and imported management theory and overlook the value sitting right there in local, lived experience.` },
    { s: 'MICHAEL', t: `Let's put a scenario to this whole "pick the right tool" idea.` },
    { s: 'NALEDI', t: `Good instinct — let's build one. Picture Safari Trails Co, a South African online travel company that launched a big campaign for affordable, no-fuss holidays around Africa, aimed squarely at families and young couples who can't stretch to luxury trips. The campaign got people talking — but not for the reason the marketing team hoped.` },
    { s: 'MICHAEL', t: `What went wrong?` },
    { s: 'NALEDI', t: `Part of their strategy was directly attacking competitors, accusing them of overcharging and ripping customers off. The claims happened to be factually true, but the company still got hit with accusations of being unethical, and the backlash generated a wave of negative attention rather than the positive buzz they were chasing.` },
    { s: 'MICHAEL', t: `So now they've got a genuine problem to solve — how do they recover?` },
    { s: 'NALEDI', t: `Exactly the kind of case where you'd apply everything we've covered. Walk me through it — which technique would you reach for first, and why?` },
    { s: 'MICHAEL', t: `I'd probably start with brainstorming, since it's a fresh reputational problem and you want a wide spread of ideas quickly. Once the team has identified a proposed change — for example, withdrawing the attack-style campaign and replacing it with a more positive campaign — force-field analysis could then weigh the forces for and against making that specific change.` },
    { s: 'NALEDI', t: `That's exactly the kind of layered answer that scores well — you're not just naming one technique, you're explaining why it fits this particular problem, and showing how techniques can genuinely be combined rather than used in isolation.` },
    { s: 'MICHAEL', t: `Could Delphi or NGT work here too?` },
    { s: 'NALEDI', t: `They could, particularly if the company wanted honest internal input on how the campaign went so wrong in the first place, without people in the room being afraid to point fingers at whoever approved it. In an open-ended application question, more than one technique may sometimes be defensible if you justify it properly. But in an identification question, use the clues in the scenario to identify the specific technique being described.` },
    { s: 'MICHAEL', t: `Let me recap. With eight techniques available, the real skill is diagnosing what's actually blocking a business — a lack of ideas, indecision about change, unsafe or impractical group discussion, or simply seeing a problem the same tired way — and matching the tool to that specific block. Indigenous knowledge adds another layer entirely, reminding a business that local, lived experience is a genuine resource for spotting opportunities and understanding both customers and staff. And a case like Safari Trails Co shows techniques are often strongest combined, not used in isolation.` },
    { s: 'NALEDI', t: `Excellent close. Exam tip: for the current Grade 12 examination scope, focus especially on Delphi, Force-field Analysis, Brainstorming and the Nominal Group Technique. When you're asked to apply one, justify why it fits the specific scenario.` },
    { s: 'MICHAEL', t: `Know the four, and justify the fit. Next episode?` },
    { s: 'NALEDI', t: `We step back from techniques and ask a bigger question — what creative thinking actually is, and why businesses can't survive without it in a fast-changing world.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 7,
  file: 'Episode 7 - What Creative Thinking Really Means',
  segs: [
    { s: 'AMELIA', t: `Episode 7: What Creative Thinking Really Means` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. We've spent several episodes on specific techniques. Today we zoom out — what creative thinking actually is, and why a business genuinely can't survive without it.` },
    { s: 'MICHAEL', t: `I feel like we've been using the term loosely this whole time. Can you pin it down properly?` },
    { s: 'NALEDI', t: `Fair to ask. Creative thinking is the ability to think of original, varied, and innovative ideas. It focuses on exploring possibilities and generating many potential answers, rather than settling for just one obvious solution. And here's the encouraging part — everyone genuinely has the potential to be creative. It's a matter of learning to recognise your own creativity, then actually applying and exercising it regularly, until it becomes easier to access naturally.` },
    { s: 'MICHAEL', t: `So it's more like a muscle than a fixed trait some people simply have and others don't?` },
    { s: 'NALEDI', t: `Exactly that framing, and it's worth holding onto, because plenty of people assume creativity is something you either have or you don't. That's not really how it works in a business context — it's a skill that gets sharper with deliberate use.` },
    { s: 'MICHAEL', t: `What does a business actually gain from taking this seriously?` },
    { s: 'NALEDI', t: `Several concrete benefits. It improves the quality of solutions to business problems generally. It stimulates genuinely profitable new ideas — for products, for marketing campaigns, for public relations. It motivates workers, sharpens their skills, and tends to produce a happier workforce overall. And it improves productivity, meaning the actual rate of output a business gets from its effort.` },
    { s: 'MICHAEL', t: `That productivity link is interesting — creativity doesn't sound like it would obviously translate into more output.` },
    { s: 'NALEDI', t: `It's a genuinely underrated connection. Workers who feel genuinely engaged and are actively contributing ideas tend to be more invested in their work overall, and that engagement shows up directly in output and quality, not just in morale surveys.` },
    { s: 'MICHAEL', t: `Can you give a sense of what this looks like at the extreme end — genuinely transformative creative thinking?` },
    { s: 'NALEDI', t: `The clearest examples are entrepreneurs who use creative thinking to build a totally new product or service, one that essentially creates a market that never existed before. Think about the cell phone, or a device like the iPad when it first launched — products that didn't just improve on something that already existed, they created an entirely new category of demand.` },
    { s: 'MICHAEL', t: `So creative thinking isn't only about solving today's problem — it can invent tomorrow's product.` },
    { s: 'NALEDI', t: `Exactly, and that's really the ceiling this skill can reach. But even short of inventing a whole new market, businesses face constant pressure to stay creative just to keep up with a rapidly changing world.` },
    { s: 'MICHAEL', t: `What kind of pressure specifically?` },
    { s: 'NALEDI', t: `A genuinely demanding list. Globalisation, which keeps ramping up competition. Serious environmental problems, and the growing public attention on them. Energy shortages. Technology that keeps shifting under everyone's feet. And constantly changing needs and attitudes among both employees and customers.` },
    { s: 'MICHAEL', t: `That's a lot of moving parts to stay ahead of.` },
    { s: 'NALEDI', t: `It genuinely is, and it's exactly why the idea of being "sustainable" matters here — able to be maintained at a certain rate or level. A business that can't adapt creatively to these shifts risks simply not being sustainable long-term, regardless of how solid its current model looks today.` },
    { s: 'MICHAEL', t: `If a business does build a genuine culture of creative thinking, what does that actually unlock day to day?` },
    { s: 'NALEDI', t: `A wide range of things. New products or services designed specifically to meet changing needs. Existing products creatively marketed or adapted to shifting tastes. Managers coming up with genuinely creative strategies, and managing and motivating staff in ways that pull out their best work. Employees empowered to think for themselves and propose their own solutions. And creative public relations strategies, built rather than defaulted to.` },
    { s: 'MICHAEL', t: `So it touches basically every part of the business, not just product development.` },
    { s: 'NALEDI', t: `That's really the point — creative thinking isn't a department, it's a capability that should run through strategy, marketing, staff management, and problem-solving all at once. And there's a structured way businesses actually build that capability, which comes down to four things: creating an environment that genuinely promotes creative thinking, working with others to generate and refine ideas, deliberately developing creative thinking skills, and being willing to use non-conventional or indigenous solutions rather than always defaulting to the standard playbook.` },
    { s: 'MICHAEL', t: `That fourth one connects straight back to what we covered last time.` },
    { s: 'NALEDI', t: `Exactly — indigenous knowledge and non-conventional thinking aren't a side note, they're formally one of the four pillars of how a business builds real creative capacity. We'll dig into all four of these properly next time, along with how a business actually judges whether a creative solution was any good once it's been tried.` },
    { s: 'MICHAEL', t: `Let me recap. Creative thinking is the ability to generate original, varied ideas — a skill anyone can build, not a fixed trait. It benefits a business through better solutions, profitable new ideas, a more motivated workforce, and stronger productivity, and at its most powerful, it can create entirely new markets. Businesses face constant pressure to stay creative because of globalisation, environmental issues, energy shortages, shifting technology, and changing attitudes — and there's a four-part framework for actually building that capability across the whole organisation.` },
    { s: 'NALEDI', t: `Excellent summary. Exam tip: when defining creative thinking, use the core textbook wording — the ability to think of original, varied and innovative ideas. You can then elaborate that creative thinking explores many possibilities rather than settling on only one answer.` },
    { s: 'MICHAEL', t: `Original, varied and innovative — then elaborate. Next episode?` },
    { s: 'NALEDI', t: `The four-part framework in full, and how a business actually knows whether a creative solution genuinely worked.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 8,
  file: 'Episode 8 - Building a Creative Culture, and Judging If It Worked',
  segs: [
    { s: 'AMELIA', t: `Episode 8: Building a Creative Culture, and Judging If It Worked` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Last time we introduced a four-part framework for building real creative capacity in a business. Today: all four parts in full, plus how a business actually judges whether a creative solution was genuinely any good.` },
    { s: 'MICHAEL', t: `Let's start with part one — creating the right environment.` },
    { s: 'NALEDI', t: `Some organisations are deliberately experimenting with new ways of running things, because they recognise both management and workers need to genuinely think creatively, not just follow instructions. They build that environment in specific, practical ways — encouraging a spirit of play and experimentation, giving positive feedback when workers share ideas, providing the actual time, resources, and opportunities needed for creative problem-solving, and encouraging group problem-solving sessions rather than leaving people to struggle alone.` },
    { s: 'MICHAEL', t: `That's more than just "be more open-minded" — it's actual structural investment.` },
    { s: 'NALEDI', t: `Exactly, and it goes further still — training staff specifically in creative thinking and problem-solving techniques, recognising and rewarding genuine achievement when it happens, and giving people real freedom to express ideas and take risks in an environment that feels safe rather than threatening.` },
    { s: 'MICHAEL', t: `That last part feels crucial — if people are scared of looking foolish, none of the rest matters.` },
    { s: 'NALEDI', t: `That's precisely the point, and it connects directly to something we covered with brainstorming — protecting people from judgment during the idea-generation phase is really a smaller version of this same larger principle: safety enables creativity, fear kills it.` },
    { s: 'MICHAEL', t: `Part two was working with others?` },
    { s: 'NALEDI', t: `Right. It's genuinely difficult to stay consistently creative and innovative entirely on your own. Bouncing ideas off other supportive, engaged people helps enormously, and simply hearing other people kick ideas around often triggers fresh thoughts in your own mind that wouldn't have surfaced otherwise. Most of the techniques we've covered actually rely on this principle directly — they're built around groups for exactly this reason.` },
    { s: 'MICHAEL', t: `Is there a reason working with others specifically helps, beyond just "more brains"?` },
    { s: 'NALEDI', t: `Our individual experience and knowledge are inherently limited. But in a group, especially a genuinely diverse one, the total pool of experience and knowledge expands considerably, which lets the group examine a problem from angles a single person would likely never consider alone.` },
    { s: 'MICHAEL', t: `Part three — developing the actual skill?` },
    { s: 'NALEDI', t: `Depending on your education and home environment, you may or may not have had much chance to develop creative thinking as a skill. But everyone has the underlying capacity for it — we can all generate innovative ideas, apply imagination to alternative solutions, and judge their value properly. The skill needs to be developed and practised deliberately, through creative thinking activities, games, and techniques, and different people will naturally find some of the techniques we've covered suit their own thinking style better than others.` },
    { s: 'MICHAEL', t: `So there's no single "correct" technique for everyone.` },
    { s: 'NALEDI', t: `Not at all — they're tools, and different thinkers reach for different tools naturally. And part four brings us back to indigenous knowledge and non-conventional solutions. The environment businesses operate in today isn't conventional anymore — it's dynamic, competitive, and often genuinely unstable. Adapting to that requires dynamic, creative, non-conventional, and strategic solutions that actually break the confines of accepted procedure, rather than staying safely inside them.` },
    { s: 'MICHAEL', t: `And that's where being intuitive and looking to older or local approaches comes in?` },
    { s: 'NALEDI', t: `Exactly. Businesses need people who think unconventionally, who are responsive and intuitive — meaning they apply real perception and insight — and who are genuinely willing to learn new approaches while also drawing on old ones. When you're stuck and can't think of something completely new, there's nothing wrong with looking at how people solved similar problems in the past, including indigenous approaches, and adapting those old solutions to fit your current environment.` },
    { s: 'MICHAEL', t: `Okay — once you've actually generated a creative solution using any of this, how do you know if it was genuinely good, or just felt exciting in the moment?` },
    { s: 'NALEDI', t: `That's exactly the right question to end on, because creative solutions need proper evaluation — they have to actually work in the real environment a business operates in, not just sound clever in a meeting. There's a structured set of questions used to assess this properly, across four criteria.` },
    { s: 'MICHAEL', t: `Walk me through them.` },
    { s: 'NALEDI', t: `First — is the solution successful? Does it actually solve the problem effectively, satisfy the needs identified, avoid negative side effects, stay within budget, time, and specifications, and is it acceptable, ethical, and environmentally sound? Second — is it cost-effective? Is it worth the money and effort, does the benefit clearly justify the cost, is it practical and easy to actually implement, and is it reliable over the long term, not just in the short term?` },
    { s: 'MICHAEL', t: `Two more?` },
    { s: 'NALEDI', t: `Third — is it clear? Is it organised, unified, and reasonably simple, well-designed and well-presented? And fourth — is it original? Is it genuinely innovative and groundbreaking, surprising in a good way, and does it hold real promise for future possibilities, not just solve today's problem narrowly?` },
    { s: 'MICHAEL', t: `Let's test all of this against a scenario.` },
    { s: 'NALEDI', t: `Good instinct. Picture Big Bite Burgers, a fast-food chain whose main product has always been burgers. A recent internal survey reveals something surprising — their breakfast items are actually their most popular product, even though the whole brand has always been built around burgers. Leadership realises they need a new, genuinely different marketing campaign to actually capitalise on that.` },
    { s: 'MICHAEL', t: `Why would they need something different, rather than just running their usual style of ad?` },
    { s: 'NALEDI', t: `Because their existing marketing identity is built entirely around burgers — leaning on the same old approach would bury exactly the insight they just discovered. A genuinely creative, differentiated campaign is needed specifically to make the most of an opportunity their own data just handed them.` },
    { s: 'MICHAEL', t: `How would you actually get a team contributing ideas for something like this?` },
    { s: 'NALEDI', t: `I'd bring in brainstorming first, specifically because it's fast and pulls a wide spread of ideas from the whole team quickly, with a facilitator making sure no one shuts an idea down early. Depending on team size and how confident people feel speaking up, NGT could work well too, since it guarantees everyone contributes rather than letting the loudest marketer dominate the room.` },
    { s: 'NALEDI', t: `Exactly the kind of layered, justified answer that scores full marks. And once a campaign idea is chosen, you'd run it through those four evaluation questions — is it successful, cost-effective, clear, and original — before committing real budget to it.` },
    { s: 'MICHAEL', t: `Let me recap. Building a genuinely creative culture rests on four pillars — the right environment, working with others, developing the skill deliberately, and drawing on non-conventional and indigenous solutions. And once a creative solution exists, it still needs real evaluation against four questions: is it successful, cost-effective, clear, and original. A scenario like Big Bite Burgers shows both halves working together — generating the idea, then testing whether it actually holds up.` },
    { s: 'NALEDI', t: `Perfectly summarised. Study tip: when using the textbook's evaluation framework, check the solution against all four questions — is it successful, cost-effective, clear and original?` },
    { s: 'MICHAEL', t: `Four checks when evaluating a solution. Next episode?` },
    { s: 'NALEDI', t: `A bonus round — every technique, every definition, and every scenario from this whole run, quizzed properly.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  num: 9,
  file: 'Episode 9 (Bonus) - Creative Thinking Exam Revision Round-Up',
  segs: [
    { s: 'AMELIA', t: `Episode 9, Bonus: Creative Thinking Exam Revision Round-Up` },
    { s: 'NALEDI', t: `Welcome to a bonus episode of The Business Brief. We've covered problem-solving versus decision-making, eight separate techniques, and what it takes to build a genuinely creative business. Today, no new content — straight into exam mode.` },
    { s: 'NALEDI', t: `One scope note before we start: the textbook revises eight problem-solving techniques, so we'll review all eight here. But the current DBE Grade 12 Examination Guidelines specifically name four for the national examination focus — Delphi, Force-field Analysis, Brainstorming and the Nominal Group Technique.` },
    { s: 'MICHAEL', t: `I've genuinely been looking forward to this one. Where do we start?` },
    { s: 'NALEDI', t: `Quickfire, technique by technique. I give you a one-line description, you name the technique.` },
    { s: 'MICHAEL', t: `Go.` },
    { s: 'NALEDI', t: `A diagram radiating out from a central topic into main points and sub-points.` },
    { s: 'MICHAEL', t: `Mind mapping.` },
    { s: 'NALEDI', t: `A group generates ideas out loud under a facilitator, with no criticism allowed until afterwards.` },
    { s: 'MICHAEL', t: `Brainstorming.` },
    { s: 'NALEDI', t: `Weighing the forces for and against a specific change, each with a numerical weight.` },
    { s: 'MICHAEL', t: `Force-field analysis.` },
    { s: 'NALEDI', t: `Making a solo decision by deliberately considering another stakeholder's perspective.` },
    { s: 'MICHAEL', t: `The empty chair technique.` },
    { s: 'NALEDI', t: `A panel of experts who never meet, submitting anonymous questionnaires across several rounds.` },
    { s: 'MICHAEL', t: `The Delphi technique.` },
    { s: 'NALEDI', t: `A group that silently writes ideas alone first, then shares them one at a time and rates them anonymously.` },
    { s: 'MICHAEL', t: `The Nominal Group Technique.` },
    { s: 'NALEDI', t: `Brainstorming keywords, then deliberately mashing them into new combinations.` },
    { s: 'MICHAEL', t: `Forced combinations.` },
    { s: 'NALEDI', t: `A seven-letter checklist — substitute, combine, adapt, modify, put to other uses, eliminate, rearrange.` },
    { s: 'MICHAEL', t: `SCAMPER. Eight for eight.` },
    { s: 'NALEDI', t: `Excellent. Now the seven-step problem-solving cycle, quickfire — I'll give you a step number, you name it.` },
    { s: 'MICHAEL', t: `Ready.` },
    { s: 'NALEDI', t: `Step one.` },
    { s: 'MICHAEL', t: `Identify the problem.` },
    { s: 'NALEDI', t: `Step three.` },
    { s: 'MICHAEL', t: `Formulate a strategy.` },
    { s: 'NALEDI', t: `Step five.` },
    { s: 'MICHAEL', t: `Allocate the resources.` },
    { s: 'NALEDI', t: `Step seven.` },
    { s: 'MICHAEL', t: `Evaluate the problem-solving process.` },
    { s: 'NALEDI', t: `Four for four. Let's move to exam-style multiple choice.` },
    { s: 'MICHAEL', t: `Hit me.` },
    { s: 'NALEDI', t: `Which technique focuses specifically on weighing the positives and negatives of a situation before making a change — the Delphi technique, mind mapping, force-field analysis, or the empty chair technique?` },
    { s: 'MICHAEL', t: `Force-field analysis — it's literally built around forces for and against.` },
    { s: 'NALEDI', t: `Correct. Next — the ability to think of original, varied, and innovative ideas describes: problem solving, creative thinking, strategy, or innovation?` },
    { s: 'MICHAEL', t: `Creative thinking, by definition.` },
    { s: 'NALEDI', t: `Exactly right. One more — the seven steps of problem solving genuinely include: identifying the problem, formulating a strategy, allocating resources, and evaluating the process — or some scrambled, incomplete version of that list. Which is correct?` },
    { s: 'MICHAEL', t: `The first one — that's the actual sequence: identify, define, formulate a strategy, implement, allocate resources, monitor, evaluate. Any answer missing steps or reordering them incorrectly is wrong.` },
    { s: 'NALEDI', t: `Three for three. Now a matching round — I'll describe a process, you tell me the technique.` },
    { s: 'MICHAEL', t: `Go for it.` },
    { s: 'NALEDI', t: `Individuals silently brainstorm alone, then take turns reading out one solution each, recorded and rated anonymously.` },
    { s: 'MICHAEL', t: `The Nominal Group Technique.` },
    { s: 'NALEDI', t: `A group weighs both positive and negative outcomes of a proposed change and totals the scores on each side.` },
    { s: 'MICHAEL', t: `Force-field analysis.` },
    { s: 'NALEDI', t: `Keywords connected to a problem get written on paper and combined in unexpected ways to spark new ideas.` },
    { s: 'MICHAEL', t: `Forced combinations.` },
    { s: 'NALEDI', t: `A group works through a checklist of different question types to view a problem from several completely different angles.` },
    { s: 'MICHAEL', t: `SCAMPER.` },
    { s: 'NALEDI', t: `And a panel of experts anonymously adjusts their answers across several rounds of questionnaires until a consensus emerges.` },
    { s: 'MICHAEL', t: `The Delphi technique. Five for five.` },
    { s: 'NALEDI', t: `Let's put it all together with a full case study, the kind worth serious marks.` },
    { s: 'MICHAEL', t: `I'm ready.` },
    { s: 'NALEDI', t: `Picture a logistics company where the safety policy has quietly failed. Some employees feel it's too vague and doesn't address the issues that actually matter on the ground. Others feel the opposite — that it's overly detailed and eating into working time for no real benefit. Management decides to bring in people from every department to work through the disagreement, but doesn't want the loudest manager in the room to simply steamroll the conversation.` },
    { s: 'MICHAEL', t: `That setup is basically screaming Delphi technique.` },
    { s: 'NALEDI', t: `Exactly right — walk me through why.` },
    { s: 'MICHAEL', t: `Because the real risk here isn't a lack of ideas, it's that an open discussion would likely get dominated by whoever's most senior or most confident, rather than reflecting what people from each department genuinely think. Delphi keeps everyone anonymous across multiple rounds, so opinions get judged on their merit rather than who's speaking.` },
    { s: 'NALEDI', t: `Perfect reasoning. And if the very first questionnaire simply asked an open-ended question like "does the current safety policy actually meet the needs of the business?" — why start there rather than jumping straight to specific proposals?` },
    { s: 'MICHAEL', t: `Because you want to establish the actual scale and shape of the problem first, in people's own words, before narrowing toward specific solutions — starting too specific too early risks missing concerns nobody anticipated.` },
    { s: 'NALEDI', t: `Exactly the kind of answer that scores full marks — reasoning through the "why," not just naming the technique. Now, one more, a bigger case worth real weight.` },
    { s: 'MICHAEL', t: `Go for it.` },
    { s: 'NALEDI', t: `Picture Ntombi, who runs a consulting company that works closely with government departments. After more than fifteen years with largely the same staff, she's decided it's time to modernise — adopting new technology and expanding into new markets. The trouble is, her team has grown genuinely resistant to any change, they keep solving problems the exact same way they always have, and clients are starting to visibly lose interest in the same old methods.` },
    { s: 'MICHAEL', t: `That's a broad brief — where would you even begin advising her?` },
    { s: 'NALEDI', t: `Structure it around what we've actually covered across this whole run. You'd point her toward building a genuine creative environment first — encouraging experimentation, rewarding good ideas, making it safe for staff to take risks rather than staying safely inside old habits. Then toward working with others deliberately, using structured techniques like brainstorming or NGT to actually surface fresh ideas from a team that's gone quiet and stale.` },
    { s: 'MICHAEL', t: `And for the resistance itself?` },
    { s: 'NALEDI', t: `Force-field analysis would genuinely help there specifically — laying out what's pushing for modernising against what's holding the team back, so the resistance gets addressed directly rather than just pushed past. And any new approach she lands on should be run through the four evaluation questions before rolling out fully — is it successful, cost-effective, clear, and original — so she's not just chasing novelty for its own sake.` },
    { s: 'NALEDI', t: `That's exactly the kind of full-picture answer that earns strong marks on a long case study — multiple techniques, genuinely tied together, with reasoning for each one.` },
    { s: 'MICHAEL', t: `Any final advice before exam day?` },
    { s: 'NALEDI', t: `Three things. One — for the current Grade 12 examination scope, know Delphi, Force-field Analysis, Brainstorming and NGT especially well, while still understanding the other techniques covered in your textbook. Two — always apply the seven-step problem-solving cycle to the specific details in a scenario, rather than only listing the steps. Three — know the definition and benefits of creative thinking and the ways a business can create an environment that promotes creative thinking.` },
    { s: 'MICHAEL', t: `Know the four exam-focus techniques, apply don't just list, know the definition and benefits. Got it.` },
    { s: 'NALEDI', t: `And that wraps up everything on creative thinking and problem-solving — from the basic cycle, right through eight distinct techniques, to building an actual creative culture and judging whether it worked. You're genuinely well prepared for this now.` },
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

  console.log(`The Business Brief — Creative Thinking & Problem Solving — running ${episodesToRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of episodesToRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, silenceLong);
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final files.`);
}

main().catch(e => { console.error(e); process.exit(1); });

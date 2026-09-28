/**
 * Life, Decoded — Episode 6: "Responding to the Environment (Humans)" — ElevenLabs audio generator
 * ----------------------------------------------------------------------------
 * Usage (from the project root, in a terminal with real internet access —
 * this will NOT work from inside Cowork's sandbox, run it on your own machine):
 *
 *   node --env-file=.env.local scripts/generate-life-decoded-episode6-audio.mjs
 *
 * This version splits Episode 6 into 7 separate MP3s by topic section:
 *   1. Human Nervous System (overview)        — Intro + Part 1 + Part 2
 *   2. Central Nervous System                  — Part 3, 4, 5, 6, 8
 *   3. Reflex Action and Reflex Arc             — Part 7
 *   4. Disorders of the Central Nervous System  — Part 9
 *   5. The Eye                                  — Part 10, 11, 12, 13, 14, 15
 *   6. The Ear                                  — Part 16, 17, 18, 19
 *   7. Outro (full recap)
 *
 * You can re-record just one or a few sections by passing their numbers, e.g.:
 *   node --env-file=.env.local scripts/generate-life-decoded-episode6-audio.mjs 3 5
 *
 * Two-host format only — Tyla (this episode's expert host) and Michael. Tyla
 * uses the same voice ID established for "Naledi" in this series.
 *
 * Tries "eleven_v3" first, falling back automatically to eleven_turbo_v2_5 if
 * needed. Bracketed delivery cues like [warmly], [curious], [laughs] are kept
 * for v3 and stripped automatically before the turbo fallback.
 *
 * Skips any clip that already exists, so an interrupted run can just be
 * re-run — only the missing pieces regenerate.
 *
 * Output:
 *   podcasts/Life-Decoded-Episode-6/1. Human Nervous System (Overview).mp3
 *   podcasts/Life-Decoded-Episode-6/2. Central Nervous System.mp3
 *   podcasts/Life-Decoded-Episode-6/3. Reflex Action and Reflex Arc.mp3
 *   podcasts/Life-Decoded-Episode-6/4. Disorders of the Central Nervous System.mp3
 *   podcasts/Life-Decoded-Episode-6/5. The Eye.mp3
 *   podcasts/Life-Decoded-Episode-6/6. The Ear.mp3
 *   podcasts/Life-Decoded-Episode-6/7. Outro (Full Recap).mp3
 *
 * Individual clips are kept in podcasts/tmp/life-decoded-episode-6/<slug>/ for resuming.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-life-decoded-episode6-audio.mjs');
  process.exit(1);
}

const VOICES = {
  TYLA: 'dVoi15NNDJligFBwnVO0',   // Joanna — Warm & Upbeat (same voice used for "Naledi" in this series)
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
};

const PRIMARY_MODEL = 'eleven_v3';
const FALLBACK_MODEL = 'eleven_turbo_v2_5';

// Embedded silent MP3 clips (base64) so natural pauses work even when the
// user's machine doesn't have ffmpeg installed — no external dependency needed.
const SILENCE_SHORT_B64 = 'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAPAAAGzgAqKioqKio5OTk5OTk5SEhISEhIV1dXV1dXV2dnZ2dnZ2d2dnZ2dnaFhYWFhYWFlZWVlZWVlaSkpKSkpLOzs7Ozs7PCwsLCwsLC0tLS0tLS4eHh4eHh4fDw8PDw8PD///////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAT1AAAAAAAABs4x4WRRAAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAARMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMQpg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxFMDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDEfIPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMSmA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxM+DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='; // ~0.35s
const SILENCE_LONG_B64 = 'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAkAAAPVgASEhkZGSAgICYmJi0tNDQ0Ozs7QkJCSEhPT09WVlZdXV1kZGRqanFxcXh4eH9/f4WFjIyMk5OTmpqaoaGhp6eurq61tbW8vLzCwsnJydDQ0NfX197e3uTk6+vr8vLy+fn5//8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAS2AAAAAAAAD1aoAgi4AAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAARMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMQpg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxFMDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDEfIPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMSmA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxM+DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='; // ~0.9s

function voiceSettingsFor(modelId) {
  return modelId === PRIMARY_MODEL
    ? { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true }
    : { stability: 0.5, similarity_boost: 0.75 };
}

const ROOT = path.resolve('.');
const OUT_DIR = path.join(ROOT, 'podcasts', 'Life-Decoded-Episode-6');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'life-decoded-episode-6');

// ─────────────────────────────────────────────────────────────────────────
// SECTIONS — Episode 6 grouped into 7 topic-based output files.
// Bracketed cues like [warmly] are audio delivery tags for v3 — kept in the
// text on purpose (v3 reads them as direction, not spoken words); they get
// stripped automatically before the turbo fallback runs.
// ─────────────────────────────────────────────────────────────────────────
const SECTIONS = [

// ───────────────────────────────────────────────────────────────────────
// 1. Human Nervous System (overview) — Intro + Part 1 + Part 2
// ───────────────────────────────────────────────────────────────────────
{
  num: 1,
  file: '1. Human Nervous System (Overview)',
  segs: [
    { s: 'TYLA', t: `[warmly] Hey, welcome back to Life, Decoded. New voice in your ears today — I'm Tyla, and I'll be taking you through this chapter with Michael.` },
    { s: 'MICHAEL', t: `[curious] Hey! Yeah, quick heads-up for anyone listening — new host, same show. Tyla's going to be running things from here.` },
    { s: 'TYLA', t: `Exactly, and honestly, I'm glad to be starting on a chapter this good, because today we're talking about something you're using literally right now to process this sentence — your nervous system.` },
    { s: 'MICHAEL', t: `Oh, that's a fun way to put it. So this is the brain chapter?` },
    { s: 'TYLA', t: `Brain, spinal cord, nerves, the eye, the ear — basically the full control-and-sensing package. Officially it's called "Responding to the Environment," and the big idea is this: your body is constantly getting bombarded with changes, both inside and outside, and it needs a way to detect those changes and react to them, fast.` },
    { s: 'MICHAEL', t: `Like touching something hot, or hearing a loud noise.` },
    { s: 'TYLA', t: `Exactly those kinds of things. And we'll build this up in three big movements. First, the nervous system itself — the brain, the spinal cord, and how a nerve signal actually travels. Second, what happens when that system goes wrong — a couple of disorders worth knowing. And third, the two sense organs this chapter focuses on in real depth — the eye and the ear.` },
    { s: 'MICHAEL', t: `Okay, that's a solid roadmap. Where do we start?` },
    { s: 'TYLA', t: `With the big picture — why your body needs to respond to the environment at all.` },

    { s: 'TYLA', t: `So here's the underlying goal behind everything in this chapter: homeostasis. Your body works hard to keep its internal conditions steady and stable — things like temperature, water levels, sugar levels — even while the world around you, and inside you, keeps changing.` },
    { s: 'MICHAEL', t: `So it's less about reacting for the sake of reacting, and more about staying balanced.` },
    { s: 'TYLA', t: `Exactly — that's the whole point. And to actually pull that off, the body needs to notice when something's changed in the first place. That detectable change is called a stimulus. It can be external — like a sudden loud noise, or a cold breeze — or internal, like your blood sugar dropping, or your body temperature creeping up.` },
    { s: 'MICHAEL', t: `And once something detects that stimulus?` },
    { s: 'TYLA', t: `Then you need two more players. A receptor is a structure that picks up the stimulus and converts it into a signal the body can actually work with — an impulse, which is basically an electrical signal. And an effector is whatever actually carries out the response — usually a muscle or a gland.` },
    { s: 'MICHAEL', t: `So receptor detects, effector responds, and the impulse is the message that gets passed between them.` },
    { s: 'TYLA', t: `Perfect summary. Now, here's something worth knowing early — your body actually has two separate systems working together to make all of this happen: the nervous system and the endocrine system.` },
    { s: 'MICHAEL', t: `I've heard of the endocrine system in passing — that's the hormone one, right?` },
    { s: 'TYLA', t: `Exactly. The nervous system works through nerves, and it's fast — we're talking milliseconds. The endocrine system works through hormones released into the blood, and it's much slower, but its effects tend to last longer. Today's episode is entirely about the fast one — the nervous system. The endocrine system gets its own chapter later.` },

    { s: 'MICHAEL', t: `Okay, so within the nervous system itself — I know there's a "central" one and a "peripheral" one, but I always mix up what's in which.` },
    { s: 'TYLA', t: `Totally fair, let's lock in the map properly. The central nervous system, or CNS, is the control centre — it's made up of just two structures: the brain and the spinal cord.` },
    { s: 'MICHAEL', t: `So CNS is basically headquarters.` },
    { s: 'TYLA', t: `Exactly that. Then, branching out from headquarters, you've got the peripheral nervous system, the PNS — and that's every nerve that sits outside the brain and spinal cord. Specifically, it's made up of nerves connected directly to the brain, called cranial nerves, and nerves connected to the spinal cord, called spinal nerves.` },
    { s: 'MICHAEL', t: `So PNS is the wiring running out to the rest of the body.` },
    { s: 'TYLA', t: `Exactly — and we're going to come back to the PNS in detail a bit later, because it actually splits again into two further branches. But for now, the one-line version: CNS is the processing centre, PNS is everything connecting that centre to your muscles, glands, and sense organs.` },
    { s: 'MICHAEL', t: `Got it. Control room, and cabling.` },
    { s: 'TYLA', t: `[laughs] I like that. Let's zoom into the control room first.` },
  ],
},

// ───────────────────────────────────────────────────────────────────────
// 2. Central Nervous System — Part 3, 4, 5, 6, 8
// ───────────────────────────────────────────────────────────────────────
{
  num: 2,
  file: '2. Central Nervous System',
  segs: [
    { s: 'MICHAEL', t: `Alright, the brain. I feel like this is the "famous" structure everyone already has some picture of.` },
    { s: 'TYLA', t: `It is, but there's real detail worth nailing down here, especially since exam diagrams love testing this. First — why does the brain get so much protection? Because brain tissue is genuinely delicate, and unlike a lot of other cells in your body, it can't repair or regenerate itself if it's seriously damaged.` },
    { s: 'MICHAEL', t: `So damage there is basically permanent.` },
    { s: 'TYLA', t: `Largely, yes — which is exactly why the body goes to such lengths to protect it, in three separate layers. First: it sits inside a hard bony case called the cranium — basically your skull. Second: it's wrapped in three protective membranes called the meninges. And third: it's cushioned by a fluid called cerebrospinal fluid, which acts like a shock absorber.` },
    { s: 'MICHAEL', t: `Bone, membrane, fluid cushion. Three layers of armour.` },
    { s: 'TYLA', t: `Exactly the right way to picture it. Now, let's get into the actual structure — because the brain isn't one uniform blob, it's several distinct regions, each with its own job. Picture it from the top down. The largest part, sitting up top and taking up most of the space, is the cerebrum.` },
    { s: 'MICHAEL', t: `And what's the cerebrum actually responsible for?` },
    { s: 'TYLA', t: `A lot, honestly — it's the heavy lifter. It controls your voluntary actions — walking, talking, writing, anything you consciously decide to do. It also receives and interprets sensations coming in from your sense organs — sight, hearing, touch, taste, smell. And it's responsible for your higher thought processes — memory, reasoning, intelligence.` },
    { s: 'MICHAEL', t: `So voluntary movement, interpreting the senses, and higher thinking, all in one structure.` },
    { s: 'TYLA', t: `Exactly. And one more detail — the cerebrum is actually split into a left half and a right half, called hemispheres, and those two halves are connected by a thick band of nerve fibres called the corpus callosum, which lets the two sides communicate with each other.` },
    { s: 'MICHAEL', t: `So the corpus callosum is basically the bridge between the left brain and the right brain.` },
    { s: 'TYLA', t: `Exactly that image.` },
    { s: 'MICHAEL', t: `Okay, what's next going down?` },
    { s: 'TYLA', t: `Tucked behind and below the cerebrum is the cerebellum — the second-largest part of the brain. Its job is coordination — it fine-tunes your voluntary movements so they're smooth rather than jerky, and it's a major player in keeping your balance and posture.` },
    { s: 'MICHAEL', t: `So if the cerebrum decides "I'm going to walk," the cerebellum is what stops that walk from looking like a stumble?` },
    { s: 'TYLA', t: `That is a genuinely excellent way to frame it — the cerebrum initiates the movement, the cerebellum smooths it out and keeps you balanced while you do it.` },
    { s: 'MICHAEL', t: `And we'll come back to the cerebellum properly when we get to the ear later, right? Since balance is an ear thing too.` },
    { s: 'TYLA', t: `Great memory, and yes — exactly. Balance signals from the ear actually get sent to the cerebellum for processing, so hold onto that thread, we'll tie it together later.` },
    { s: 'TYLA', t: `Continuing down, you reach the medulla oblongata — the lower part of the brain, which actually continues directly into the spinal cord. This is genuinely one of the most important structures in the whole chapter, because it controls the involuntary functions that keep you alive without you ever thinking about them — your heartbeat, your breathing, swallowing.` },
    { s: 'MICHAEL', t: `[surprised] Wait — so my heart beating right now isn't something the cerebrum is deciding, it's actually this separate, lower structure?` },
    { s: 'TYLA', t: `Exactly — and that's precisely why damage to the medulla oblongata is so much more immediately life-threatening than damage to other brain regions; it's running your core survival functions in the background. It also relays impulses between the spinal cord and the rest of the brain, and it manages some of your smaller, less critical reflexes too — things like coughing, sneezing, and blinking.` },
    { s: 'MICHAEL', t: `So it's both a control centre for survival functions, and a relay station passing messages through.` },
    { s: 'TYLA', t: `Exactly both roles at once.` },
    { s: 'TYLA', t: `And last but genuinely not least — tucked just above where the medulla oblongata begins — is a small but mighty structure called the hypothalamus. This is your body's control centre for a whole cluster of automatic, internal functions: hunger, thirst, sleep, body temperature, even emotional responses.` },
    { s: 'MICHAEL', t: `That's a surprisingly broad job description for something so small.` },
    { s: 'TYLA', t: `It really is — think of it as the thermostat and general "housekeeping" manager for your internal environment, constantly working to keep things at homeostasis, that stable balance we opened the episode with.` },

    { s: 'MICHAEL', t: `Okay, brain's done. What about the spinal cord — is that basically just a cable running down your back?` },
    { s: 'TYLA', t: `There's more going on structurally than "just a cable," but that's not a bad starting mental image. Like the brain, spinal cord tissue is delicate and can't repair itself, so it gets its own serious protection — a stack of 33 small bones called vertebrae, with cushioning discs of cartilage between them acting as shock absorbers, plus those same meninges membranes, plus the same cerebrospinal fluid cushioning it.` },
    { s: 'MICHAEL', t: `So it's protected the same three ways as the brain, just swapping the skull for a column of vertebrae.` },
    { s: 'TYLA', t: `Exactly the parallel to draw. Now, internally, if you sliced straight across the spinal cord and looked at it in cross-section, you'd see two distinct regions: an inner, darker-coloured region called grey matter, made up of nerve cell bodies and dendrites, and an outer region called white matter, made up of myelinated axons — nerve fibres wrapped in a fatty insulating layer, which is what gives white matter its lighter colour.` },
    { s: 'MICHAEL', t: `Grey matter is like the "processing" bodies of the cells, white matter is the "wiring" running to and from them?` },
    { s: 'TYLA', t: `That is a genuinely solid way to hold that distinction. And spinal nerves connect into the spinal cord at every level down its length — thirty-one pairs of them in total — through two entry and exit points: a dorsal root, where signals come into the spinal cord, and a ventral root, where signals go out.` },
    { s: 'MICHAEL', t: `Dorsal in, ventral out. Is there an easy way to remember which is which?` },
    { s: 'TYLA', t: `Dorsal relates to your back — think "dorsal fin" on a shark, sitting on the back — and the dorsal root is towards the back of the spinal cord. Ventral relates to the front or belly side.` },
    { s: 'MICHAEL', t: `Nice, that'll stick.` },
    { s: 'TYLA', t: `Now, functionally, the spinal cord does two main jobs. First, it transmits impulses — carrying signals from receptors up towards the brain, and carrying signals from the brain back down to effectors. Second — and this one's genuinely important — it contains reflex centres that can act completely automatically, without waiting for instructions from the brain, to protect the body quickly.` },
    { s: 'MICHAEL', t: `That second point feels like it's setting up our reflex arc conversation.` },
    { s: 'TYLA', t: `[laughs] You read my mind — that's exactly what we cover next, right after we finish building the neuron itself, since you can't really understand a reflex arc properly until you know what a neuron looks like.` },

    { s: 'MICHAEL', t: `Alright, let's build a neuron from scratch. I know it's "the nerve cell," but I want the actual structure.` },
    { s: 'TYLA', t: `Good instinct, because the structure genuinely explains the function here — nothing about a neuron's shape is random. A neuron is a specialised cell built specifically to transmit impulses, and neurons are the structural units that make up the entire nervous system.` },
    { s: 'MICHAEL', t: `So every nerve is basically a bundle of these.` },
    { s: 'TYLA', t: `Exactly — a "nerve" is literally just a bundle of neurons travelling together. Now, picture a single neuron, and let's walk it end to end. On one side, you've got a spray of branching, tree-like fibres called dendrites. Their job is to receive incoming impulses and pass them along towards the cell body.` },
    { s: 'MICHAEL', t: `So dendrites are the "receiving antennae."` },
    { s: 'TYLA', t: `Exactly that. Those dendrites connect into the cell body, which contains the nucleus, and the cell body's job is to control the overall metabolism and health of the neuron — it's the maintenance and management centre.` },
    { s: 'MICHAEL', t: `So the cell body isn't really involved in passing the signal along, it's more like life-support for the cell?` },
    { s: 'TYLA', t: `Precisely — it keeps the neuron alive and functioning, while the actual signal-passing happens elsewhere. From the cell body, a single long, thin fibre extends outward — the axon — and its job is to carry the impulse away from the cell body, off towards its destination.` },
    { s: 'MICHAEL', t: `Dendrites bring signals in, axon sends the signal out. Got it.` },
    { s: 'TYLA', t: `And here's a detail that matters a lot functionally — that axon is very often wrapped in a fatty, insulating layer called the myelin sheath. Its job is to speed up how fast the impulse travels down the axon. And surrounding that myelin sheath is a thin membrane called the neurilemma, which plays a role in helping damaged neurons repair themselves.` },
    { s: 'MICHAEL', t: `So myelin is for speed, and the outer membrane around it is for repair.` },
    { s: 'TYLA', t: `Exactly — two separate jobs, easy to keep straight once you separate them like that.` },
    { s: 'TYLA', t: `Now — there isn't just one type of neuron doing all of this. There are three distinct types, each with a specific role in the pathway a signal takes. First: sensory neurons, which carry impulses from receptors — out in your sense organs or skin — towards the central nervous system.` },
    { s: 'MICHAEL', t: `So sensory neurons are carrying "here's what I detected" messages inward.` },
    { s: 'TYLA', t: `Exactly. Second: interneurons — sometimes called relay neurons — and these live entirely inside the brain and spinal cord. Their job is to connect a sensory neuron to a motor neuron, essentially acting as the middleman inside the CNS.` },
    { s: 'MICHAEL', t: `So the message comes in via sensory neuron, gets handed off through an interneuron, and then heads back out through something else?` },
    { s: 'TYLA', t: `Exactly right, and that "something else" is the third type: motor neurons, which carry impulses from the brain or spinal cord out to the effectors — the muscles and glands that actually produce the response.` },
    { s: 'MICHAEL', t: `So the full relay is: sensory neuron carries the message in, interneuron passes it along inside the CNS, motor neuron carries it back out to actually do something.` },
    { s: 'TYLA', t: `That is the exact relay, in the exact right order.` },

    { s: 'MICHAEL', t: `Okay, quick question — do neurons actually touch each other directly, end to end?` },
    { s: 'TYLA', t: `Genuinely great question to ask, because the answer trips a lot of people up. No — they don't physically touch. There's a small gap between the axon of one neuron and the dendrite of the next, and that gap is called a synapse.` },
    { s: 'MICHAEL', t: `So if they're not touching, how does the impulse actually cross that gap?` },
    { s: 'TYLA', t: `Through chemistry, not electricity — and this is genuinely one of the most commonly misunderstood parts of the whole chapter, so let's slow down here. The impulse itself travels electrically along the axon, but once it hits that gap, it triggers the release of chemical messengers called neurotransmitters, which physically drift across the synaptic gap and bind to receptors on the next neuron's dendrite, which then restarts the signal electrically on the other side.` },
    { s: 'MICHAEL', t: `[surprised] So it's not one continuous electrical wire the whole way — it's electrical, then a chemical "hop" across the gap, then electrical again?` },
    { s: 'TYLA', t: `Exactly that — electrical, chemical, electrical. Thinking of it as one uninterrupted wire is the single most common mistake people make with this topic.` },
    { s: 'MICHAEL', t: `Okay, that's genuinely useful to have corrected. So what's the actual point of having this gap at all — why not just wire neurons directly together?` },
    { s: 'TYLA', t: `Two solid reasons. First, it makes sure the impulse only ever travels in one direction — it can't accidentally flow backwards, since only one side releases the neurotransmitter. Second, it prevents the neurons from being continuously, endlessly stimulated — the gap effectively resets things each time.` },
    { s: 'MICHAEL', t: `So the gap is a feature, not a flaw — it enforces direction and prevents overload.` },
    { s: 'TYLA', t: `Exactly — very deliberately built that way.` },

    { s: 'MICHAEL', t: `Okay, back to that PNS thread from earlier — you said it splits into two.` },
    { s: 'TYLA', t: `Right, let's finish that map now that we understand neurons properly. The peripheral nervous system carries impulses both ways — from receptors in to the CNS via sensory neurons, and from the CNS back out to effectors via motor neurons. And it splits into two branches. First: the somatic nervous system, which controls your voluntary, skeletal muscles — anything you consciously decide to do, like reaching for your phone, or standing up.` },
    { s: 'MICHAEL', t: `So somatic is "on-demand" control.` },
    { s: 'TYLA', t: `Exactly. The second branch is the autonomic nervous system, which controls your involuntary muscles and functions — things running in the background that you don't consciously control, like your digestion, or the width of your blood vessels.` },
    { s: 'MICHAEL', t: `And I'm guessing this autonomic branch splits again too?` },
    { s: 'TYLA', t: `It does, into two systems that work directly against each other, in opposite directions — what's called working "antagonistically." First: the sympathetic nervous system, which prepares your body for an emergency — the classic "fight or flight" response. Second: the parasympathetic nervous system, which brings your body back down to normal afterwards — often called "rest and digest."` },
    { s: 'MICHAEL', t: `Let's actually walk through a scenario with this, if that's alright — like we did with the thumbtack.` },
    { s: 'TYLA', t: `Perfect idea, let's do exactly that. Picture this: you're out for a walk, and out of nowhere, a dog behind a fence suddenly barks loudly and lunges right at you.` },
    { s: 'MICHAEL', t: `[laughs] Okay, my heart's already reacting just imagining it.` },
    { s: 'TYLA', t: `Exactly the sympathetic nervous system kicking in, right on cue. In that moment, your sympathetic system fires up and, among other things, increases your heart rate and blood pressure, so more oxygen-rich blood gets pumped to your muscles, fast. It also dilates your pupils, letting in more light so you can see the situation more clearly. And it redirects blood flow away from less urgent processes, like digestion, and towards your muscles instead, ready for action.` },
    { s: 'MICHAEL', t: `So literally every one of those changes is preparing you to either fight the threat or run from it.` },
    { s: 'TYLA', t: `Exactly — hence "fight or flight." Now, a few seconds later, once you realise it's just a fenced-in dog and you're actually completely safe — that's when the parasympathetic system takes over, and does the exact opposite of everything the sympathetic system just did. It decreases your heart rate and blood pressure back to normal, constricts your pupils back down, and redirects blood flow back towards digestion and relaxation.` },
    { s: 'MICHAEL', t: `So parasympathetic is genuinely the "stand-down, all clear" signal.` },
    { s: 'TYLA', t: `Exactly that — it restores your body to its normal, resting baseline after the emergency has passed. And that antagonistic relationship, sympathetic ramping things up, parasympathetic calming them back down, is exactly how your body maintains homeostasis even through sudden, unpredictable stressful events.` },
    { s: 'MICHAEL', t: `Full circle back to homeostasis from the very start of the episode.` },
    { s: 'TYLA', t: `Exactly — everything in this system exists in service of that one goal.` },
  ],
},

// ───────────────────────────────────────────────────────────────────────
// 3. Reflex Action and Reflex Arc — Part 7
// ───────────────────────────────────────────────────────────────────────
{
  num: 3,
  file: '3. Reflex Action and Reflex Arc',
  segs: [
    { s: 'MICHAEL', t: `Okay, now I actually feel ready for reflexes.` },
    { s: 'TYLA', t: `Let's build it properly. A reflex action is a rapid, automatic response to a stimulus — and critically, it happens without you consciously thinking about it first. And the specific pathway that impulse travels along to make that reflex happen is called the reflex arc.` },
    { s: 'MICHAEL', t: `So reflex action is the event, reflex arc is the actual route the signal takes.` },
    { s: 'TYLA', t: `Exactly that distinction. Let's walk through an original example, step by step, rather than the usual hot-stove one you might've seen before. Picture this: you're walking barefoot in the garden, not looking down, and you step directly onto a sharp thumbtack lying in the grass.` },
    { s: 'MICHAEL', t: `Ouch, already wincing.` },
    { s: 'TYLA', t: `[laughs] Exactly the reaction your body's about to have too, just automatically. Step one: receptors in the skin of your foot detect that sharp pressure and pain, and convert that stimulus into a nerve impulse.` },
    { s: 'MICHAEL', t: `Detect and convert — that's the receptor's whole job.` },
    { s: 'TYLA', t: `Exactly, everything's connecting now. Step two: that impulse travels along a sensory neuron, entering the spinal cord through the dorsal root.` },
    { s: 'MICHAEL', t: `In through the back door, basically.` },
    { s: 'TYLA', t: `[laughs] Sure, let's go with that. Step three: inside the spinal cord, the impulse gets passed from that sensory neuron to an interneuron.` },
    { s: 'MICHAEL', t: `Our middleman.` },
    { s: 'TYLA', t: `Exactly. Step four: the interneuron passes the impulse along to a motor neuron, still inside the spinal cord. Step five: that motor neuron carries the impulse out of the spinal cord through the ventral root — out the front door, if we're keeping your metaphor — and down to the effector, which in this case is the muscle in your leg and foot.` },
    { s: 'MICHAEL', t: `And step six is the muscle actually contracting, yanking your foot up and away from the thumbtack.` },
    { s: 'TYLA', t: `Exactly right — and here's the detail that genuinely surprises people the first time they hear it: your brain isn't involved in that entire sequence. The whole thing happens through the spinal cord alone. You only actually feel the pain, consciously, a fraction of a second after your foot has already pulled away — because that pain signal is still travelling up to your brain separately, on a slower track.` },
    { s: 'MICHAEL', t: `[surprised] Wait, so my foot pulls away before I consciously register "ow, that hurts"?` },
    { s: 'TYLA', t: `Exactly — the reflex arc is specifically built to be faster than conscious thought, precisely because waiting for your brain to process "sharp object, pain, danger, move foot" would simply take too long and risk more damage. Skipping the brain is the whole feature, not a shortcut or a flaw.` },
    { s: 'MICHAEL', t: `That's honestly one of the more genuinely surprising facts in this whole episode.` },
    { s: 'TYLA', t: `It's a favourite exactly because it's so counter-intuitive. And functionally, the entire point of this design is protection — a reflex action lets your body react to prevent injury without wasting precious time on conscious thought.` },
  ],
},

// ───────────────────────────────────────────────────────────────────────
// 4. Disorders of the Central Nervous System — Part 9
// ───────────────────────────────────────────────────────────────────────
{
  num: 4,
  file: '4. Disorders of the Central Nervous System',
  segs: [
    { s: 'MICHAEL', t: `Okay, shifting gears a bit — what happens when this whole finely-tuned system doesn't work properly?` },
    { s: 'TYLA', t: `[thoughtful] Genuinely important territory to cover, and worth taking seriously rather than rushing through. Let's talk about two disorders that specifically affect the nervous system. First: Alzheimer's disease. This is a neurodegenerative condition, which means it involves the progressive, ongoing death of brain cells over time.` },
    { s: 'MICHAEL', t: `And that's the one most associated with memory loss, right?` },
    { s: 'TYLA', t: `Exactly — the two defining symptoms are memory loss and confusion, and it tends to worsen gradually. It typically appears after around age 60, although in rarer cases it can show up somewhat earlier. Right now, doctors and researchers don't fully know what actually causes it, and unfortunately, it's currently irreversible — there's no cure.` },
    { s: 'MICHAEL', t: `That's genuinely sobering. Is there anything that can be done at all?` },
    { s: 'TYLA', t: `Yes, and it's an important nuance — while Alzheimer's can't be cured or reversed, the symptoms can often be managed and slowed down with the right care and treatment, which can meaningfully improve someone's day-to-day quality of life, even if the underlying disease keeps progressing.` },
    { s: 'MICHAEL', t: `So "no cure" doesn't mean "nothing can be done."` },
    { s: 'TYLA', t: `Exactly the distinction worth holding onto. Second disorder: Multiple Sclerosis, usually just called MS. This one works completely differently — it's an autoimmune condition, meaning the body's own immune system mistakenly attacks part of itself. Specifically, it attacks the myelin sheath wrapped around neurons — remember that insulating layer that speeds up the impulse?` },
    { s: 'MICHAEL', t: `Right, the one that speeds up the signal.` },
    { s: 'TYLA', t: `Exactly that layer. When it gets damaged, the neurons underneath can't transmit impulses properly anymore, which disrupts communication throughout the nervous system. MS tends to affect younger adults, typically somewhere between twenty and forty years old, and symptoms can include vision problems, difficulty walking, pain, and fatigue.` },
    { s: 'MICHAEL', t: `Is the cause known for this one?` },
    { s: 'TYLA', t: `Not fully, no — same as Alzheimer's, that's still an active area of research. And like Alzheimer's, there's currently no cure for MS either, but medication can genuinely help manage and reduce the severity of symptoms.` },
    { s: 'MICHAEL', t: `So both conditions share that same pattern — no cure yet, but real, meaningful symptom management is possible.` },
    { s: 'TYLA', t: `Exactly, and that's a genuinely useful pattern to notice across a lot of neurological conditions generally, not just these two. Worth a quick final mention too — injuries to the brain or spinal cord, most commonly from things like vehicle accidents, can cause similarly serious and sometimes permanent effects, since nerve tissue generally can't regenerate itself once it's badly damaged. Researchers are actively exploring things like stem cell therapy as a possible future treatment for these kinds of injuries, though that's still very much in development.` },
  ],
},

// ───────────────────────────────────────────────────────────────────────
// 5. The Eye — Part 10, 11, 12, 13, 14, 15
// ───────────────────────────────────────────────────────────────────────
{
  num: 5,
  file: '5. The Eye',
  segs: [
    { s: 'MICHAEL', t: `Alright, that's the nervous system core done. Now we head to the sense organs?` },
    { s: 'TYLA', t: `Exactly — and it's a natural next step, because sense organs are really just specialised clusters of receptors, densely packed together, all designed to detect one particular type of stimulus especially well. We're going to spend real time on two of them today: the eye, which detects light, and the ear, which detects sound and also, interestingly, handles balance.` },
    { s: 'MICHAEL', t: `Wait, the ear does balance too? I always just think of it as the hearing organ.` },
    { s: 'TYLA', t: `[laughs] That's a really common assumption, and we'll properly bust it when we get to the ear. But let's start with the eye.` },

    { s: 'TYLA', t: `Let's build the eye from the outside in, like we did with the brain. The whole eyeball sits inside a protective bony socket in the skull, cushioned by connective tissue and fat to guard against physical knocks. At the very front, you've got the eyelids and eyelashes, which physically block dust and foreign particles from getting in.` },
    { s: 'MICHAEL', t: `The first line of defence, basically.` },
    { s: 'TYLA', t: `Exactly. Now, internally, the eye is really built from three concentric layers, like layers of an onion, plus a few extra structures inside. Layer one, the outermost: the sclera — a tough, white, inelastic layer that covers most of the eyeball and gives it its shape and protection.` },
    { s: 'MICHAEL', t: `That's the white part I actually see when I look at someone's eyes.` },
    { s: 'TYLA', t: `Exactly right. But at the very front of the eye, the sclera transitions into something different — a clear, see-through, curved section called the cornea. It's actually a continuation of the same layer as the sclera, just transparent instead of white, and its curved, convex shape does something really important: it bends, or refracts, incoming light as it enters the eye, which is the first step in focusing that light onto the right spot inside.` },
    { s: 'MICHAEL', t: `So the cornea isn't just a clear window, it's actively bending the light too?` },
    { s: 'TYLA', t: `Exactly — and that's a detail people often miss, thinking the cornea is purely passive. It's doing real optical work.` },
    { s: 'TYLA', t: `Layer two, sitting just underneath the sclera: the choroid — a dark-coloured layer, packed with blood vessels and dark pigments.` },
    { s: 'MICHAEL', t: `Is there a quick way to remember what the choroid does?` },
    { s: 'TYLA', t: `Here's a genuinely useful hook — think of the choroid as doing two jobs that both connect to its own description: its dark pigments absorb stray light, stopping it from bouncing around and reflecting inside the eye and blurring your vision, while its blood vessels supply oxygen and nutrients to the retina, which sits just next to it.` },
    { s: 'MICHAEL', t: `So dark pigment stops reflection, blood vessels feed the retina — colour and blood, basically.` },
    { s: 'TYLA', t: `Exactly that pairing, and a good one to hold onto.` },
    { s: 'TYLA', t: `At the very front of the eye, the choroid thickens into a structure called the ciliary body, which contains ciliary muscles. These muscles are genuinely crucial, because they contract or relax to change the tension on tiny ligaments called suspensory ligaments, which in turn control the shape of the lens.` },
    { s: 'MICHAEL', t: `So this is the "focusing" machinery?` },
    { s: 'TYLA', t: `Exactly — and we're going to spend an entire section on that focusing process, called accommodation, in just a moment. But first, one more front-of-eye structure: the iris, which is the actual coloured part of your eye — brown, blue, green, whatever colour you have — and right in its centre is an opening called the pupil. The iris contains two sets of muscles that work antagonistically to control exactly how wide or narrow that pupil opening is, which controls how much light gets into the eye.` },
    { s: 'MICHAEL', t: `So the iris is doing for light what the sympathetic and parasympathetic systems do for the body — two opposing muscle sets pulling in different directions.` },
    { s: 'TYLA', t: `That is a genuinely sharp connection to draw across two completely different parts of the chapter — well spotted.` },
    { s: 'TYLA', t: `Sitting directly behind the iris and pupil is the lens — an elastic, biconvex, transparent structure, meaning it curves outward on both sides. It's held in position by those suspensory ligaments we just mentioned, and its whole job is to fine-tune the focus of incoming light so a sharp image lands in exactly the right place.` },
    { s: 'MICHAEL', t: `So the cornea does the first, rough bending of light, and then the lens does the fine, adjustable tuning?` },
    { s: 'TYLA', t: `Exactly that division of labour — cornea handles the bulk of the bending, lens handles the precise, adjustable fine-tuning. Mixing those two roles up is actually a really common mistake, so it's worth keeping that division clear in your head.` },
    { s: 'MICHAEL', t: `Noted. What fills the space around the lens?` },
    { s: 'TYLA', t: `Two different fluids, actually. In front of the lens, between it and the cornea, there's a watery fluid called the aqueous humour, which helps maintain the cornea's shape. And behind the lens, filling the much larger space toward the back of the eyeball, there's a thicker, jelly-like substance called the vitreous humour, which maintains the overall round shape of the eyeball itself.` },
    { s: 'MICHAEL', t: `Watery in front, jelly-like behind.` },
    { s: 'TYLA', t: `Exactly, and both also play a small supporting role in refracting light too, alongside their main structural jobs.` },

    { s: 'MICHAEL', t: `Okay, so light's made it all the way to the back of the eye now. What's actually receiving it there?` },
    { s: 'TYLA', t: `That's layer three — the retina, the innermost layer, lining the back of the eyeball. This is where the actual light-detecting cells live: two types, called rods and cones. Rods are sensitive to dim light and handle black-and-white, low-light vision — think night vision. Cones need brighter light to work, but they're what give you sharp detail and full colour.` },
    { s: 'MICHAEL', t: `So rods for the dark, cones for colour and detail.` },
    { s: 'TYLA', t: `Exactly that split. Now, there's one particular spot on the retina worth knowing by name: the yellow spot, sometimes called the macula, which has the highest concentration of cones out of anywhere on the retina. Because of that, it's the area of your clearest, sharpest vision — whatever you're looking directly at right now is landing on your yellow spot.` },
    { s: 'MICHAEL', t: `So that's like the "high-resolution patch" of the retina.` },
    { s: 'TYLA', t: `Exactly, nice way to put it. And there's an opposite extreme too — the blind spot, which is the exact point where the optic nerve leaves the eye, carrying all those visual impulses onward to the brain for interpretation. Because the optic nerve has to pass through the retina to exit the eyeball, there's genuinely no room for any rods or cones at that single point.` },
    { s: 'MICHAEL', t: `[surprised] Wait, so there's literally a small area where I can't see anything at all, right now?` },
    { s: 'TYLA', t: `Exactly right — you have one in each eye. You don't normally notice it because your brain cleverly fills in the gap using surrounding visual information, and because your two eyes' blind spots don't overlap, so each eye covers for the other's gap.` },
    { s: 'MICHAEL', t: `That's honestly one of those facts that's a little unsettling once you actually think about it.` },
    { s: 'TYLA', t: `[laughs] It genuinely is — and that leads perfectly into the next point, actually, because having two eyes isn't just a backup system for the blind spot, it's doing something much more useful. This is called binocular vision — using both eyes together, with their fields of view overlapping, which gives you a wider overall field of vision and the ability to judge depth, distance, and the size of objects accurately.` },
    { s: 'MICHAEL', t: `So depth perception genuinely comes from having two eyes seeing slightly different angles of the same thing?` },
    { s: 'TYLA', t: `Exactly — each eye captures a very slightly different image, and your brain combines those two images together into one three-dimensional picture, which is what lets you judge how far away something actually is.` },

    { s: 'MICHAEL', t: `Okay, you promised we'd come back to focusing properly — let's do it.` },
    { s: 'TYLA', t: `Time to deliver. Accommodation is the eye's ability to change the shape of the lens so that a sharp, clear image always lands correctly on the retina, whether you're looking at something close up or far away. And the mechanism hinges entirely on those ciliary muscles and suspensory ligaments we introduced earlier.` },
    { s: 'MICHAEL', t: `Let's do near vision first — like reading a book held close to your face.` },
    { s: 'TYLA', t: `Good starting point. For anything closer than about six metres away, here's the sequence: the ciliary muscles contract, which loosens the tension on the suspensory ligaments attached to the lens. With less tension pulling on it, the lens naturally springs into a more rounded, more convex shape, because it's elastic. That more convex shape bends light more strongly, which is exactly what's needed to bring a close object into sharp focus.` },
    { s: 'MICHAEL', t: `So muscles contract, ligaments loosen, lens gets rounder, bends light more.` },
    { s: 'TYLA', t: `Exactly that chain, in that order. Now flip it completely for distant vision — anything further than about six metres away. The ciliary muscles relax instead, which tightens, or makes taut, the suspensory ligaments. That increased tension pulls the lens into a flatter, less convex shape, which bends light less strongly — exactly what's needed for a distant object to focus correctly.` },
    { s: 'MICHAEL', t: `So it's a genuine seesaw — everything that happens for near vision is the opposite for distant vision.` },
    { s: 'TYLA', t: `Exactly, mirror images of each other, and that's honestly the cleanest way to remember the whole process — you really only need to memorise one direction, and the other is just the reverse.` },

    { s: 'MICHAEL', t: `Okay, and the pupil changing size — is that a separate mechanism from accommodation, or part of the same thing?` },
    { s: 'TYLA', t: `Genuinely good question to check, because they do get mixed up — and no, they're completely separate systems, just both located in the eye. The pupillary mechanism is specifically about controlling how much light gets into the eye by changing the diameter of the pupil, and it's driven entirely by the iris and its two opposing muscle sets — circular muscles and radial muscles — working antagonistically, same concept as sympathetic and parasympathetic.` },
    { s: 'MICHAEL', t: `Let's do bright light first.` },
    { s: 'TYLA', t: `In bright conditions, you want to let less light in, to avoid overwhelming the retina. So here's the sequence: the circular muscles of the iris contract, while the radial muscles relax. That combination squeezes the pupil down to a smaller diameter — it constricts — reducing the amount of light getting through.` },
    { s: 'MICHAEL', t: `And dim light does the reverse?` },
    { s: 'TYLA', t: `Exactly — in dim conditions, you want to let more light in, to actually be able to see anything. So the radial muscles contract this time, while the circular muscles relax, which widens the pupil — it dilates — letting more light flood in.` },
    { s: 'MICHAEL', t: `So bright light: circular contracts, radial relaxes, pupil shrinks. Dim light: radial contracts, circular relaxes, pupil widens.` },
    { s: 'TYLA', t: `That is exactly correct, and honestly, a genuinely clean way to hold both directions in your head at once, since they're perfect mirror images of each other, same as accommodation was.` },

    { s: 'MICHAEL', t: `Alright, last eye topic — what actually goes wrong to give someone glasses in the first place?` },
    { s: 'TYLA', t: `Four main defects worth knowing, and they mostly come down to the eyeball being slightly the wrong shape, or the lens not being able to adjust properly. First: short-sightedness, medically called myopia. Someone with this can see nearby objects clearly, but distant objects appear blurry.` },
    { s: 'MICHAEL', t: `What's actually happening optically there?` },
    { s: 'TYLA', t: `The light rays from a distant object end up focusing in front of the retina, instead of directly on it — so by the time the light actually reaches the retina, it's already started to spread back out again, causing blur. This can happen because the eyeball itself is slightly too long, or the cornea is too strongly curved for the length of the eyeball, or the lens simply can't flatten out enough. It's corrected using glasses with concave lenses, which spread the light rays out slightly before they enter the eye, pushing the focal point backward, onto the retina where it belongs.` },
    { s: 'MICHAEL', t: `Concave — that's the shape that curves inward, right? Thinner in the middle than at the edges.` },
    { s: 'TYLA', t: `Exactly right. Now the opposite condition: long-sightedness, medically called hyperopia. Here it's flipped — someone can see distant objects clearly, but nearby objects appear blurry.` },
    { s: 'MICHAEL', t: `So the light's focusing in the wrong direction this time?` },
    { s: 'TYLA', t: `Exactly — the light rays from a nearby object end up focusing behind the retina, because the eyeball is often slightly too short, or the cornea isn't curved enough for the eyeball's length, or the lens can't become convex enough. It's corrected with convex lenses — the outward-curving, thicker-in-the-middle shape — which bend the light rays inward slightly before they even enter the eye, pulling that focal point forward onto the retina.` },
    { s: 'MICHAEL', t: `Concave pushes the focus back for short-sightedness, convex pulls the focus forward for long-sightedness.` },
    { s: 'TYLA', t: `Exactly the right pairing to hold in your head. Third condition: astigmatism. This happens when the cornea, or sometimes the lens, isn't evenly curved in every direction — it's a bit irregular or lopsided in shape, rather than being a perfectly smooth curve all round.` },
    { s: 'MICHAEL', t: `And what does that actually do to your vision?` },
    { s: 'TYLA', t: `Because the surface isn't evenly curved, incoming light doesn't all focus at one single, consistent point on the retina — it scatters slightly across multiple points instead, leading to blurred vision, and often headaches or squinting as your eyes try to compensate. It can usually be corrected with specially shaped prescription lenses, contact lenses, or in some cases, laser therapy.` },
    { s: 'MICHAEL', t: `So this one's about uneven curvature, rather than the eyeball being the wrong overall length.` },
    { s: 'TYLA', t: `Exactly the distinguishing feature — myopia and hyperopia are about length and focal distance, astigmatism is about uneven, irregular curvature.` },
    { s: 'TYLA', t: `And the fourth condition, genuinely different in nature from the other three: cataracts. This is when the normally clear, transparent lens gradually becomes cloudy, which blocks and scatters light rather than focusing it cleanly, leading to increasingly blurred vision over time as the clouding develops.` },
    { s: 'MICHAEL', t: `So this isn't a shape problem at all, it's a clarity problem.` },
    { s: 'TYLA', t: `Exactly right — the lens itself is physically degrading in transparency, not just sitting at the wrong curvature. In early stages, glasses might help somewhat, but as a cataract develops further, the usual treatment is surgery — removing the cloudy natural lens entirely and replacing it with a clear, artificial synthetic one.` },
  ],
},

// ───────────────────────────────────────────────────────────────────────
// 6. The Ear — Part 16, 17, 18, 19
// ───────────────────────────────────────────────────────────────────────
{
  num: 6,
  file: '6. The Ear',
  segs: [
    { s: 'MICHAEL', t: `Alright, time for the ear. You already teased that it does more than just hearing.` },
    { s: 'TYLA', t: `It genuinely does, and we'll get to that properly soon. But first, structure — and the ear is traditionally divided into three regions: outer, middle, and inner. Let's take them one at a time. The outer ear consists of two parts: the pinna, which is the visible, fleshy, cartilage flap on the side of your head — literally what most people mean when they say "ear" — and the auditory canal, the tube leading inward from the pinna.` },
    { s: 'MICHAEL', t: `And what's the pinna actually doing, functionally, besides just being visible?` },
    { s: 'TYLA', t: `It's shaped specifically to catch and funnel sound waves from the surrounding air directly into that auditory canal. The canal itself then carries those sound waves further inward, and along the way, it's lined with tiny protective hairs that help stop foreign particles getting in, plus wax, which helps keep the deeper structures moist and protected.` },
    { s: 'MICHAEL', t: `So outer ear is basically "catch the sound and funnel it in safely."` },
    { s: 'TYLA', t: `Exactly that. That canal ends at a thin, tightly stretched membrane called the tympanic membrane — you'd probably know it better as the eardrum — and that membrane marks the boundary into the middle ear.` },
    { s: 'MICHAEL', t: `What's actually inside the middle ear?` },
    { s: 'TYLA', t: `An air-filled cavity, containing three tiny, irregularly-shaped bones, collectively called the ossicles. Individually, they're the hammer, the anvil, and the stirrup — biggest to smallest, in that order, connected to each other in a chain. Their whole job is amplifying — taking the vibrations coming off the eardrum and making them significantly bigger before passing them along further inward.` },
    { s: 'MICHAEL', t: `So the eardrum vibrates, and then these three little bones boost that vibration up?` },
    { s: 'TYLA', t: `Exactly right — think of it like a tiny mechanical amplifier chain. There's also a thin tube here worth knowing, the Eustachian tube, connecting the middle ear back to the throat. Its job is equalising air pressure on both sides of the eardrum — which is exactly why your ears sometimes "pop" on a flight, or driving up a mountain.` },
    { s: 'MICHAEL', t: `Oh, that explains the popping thing perfectly, actually.` },
    { s: 'TYLA', t: `[laughs] Glad that finally has a mechanism attached to it. Past the ossicles, you reach the inner ear, which is where things get genuinely intricate — it contains the semicircular canals, the vestibule, and the cochlea, and this is actually where our two separate jobs — hearing and balance — physically split apart from each other.` },

    { s: 'MICHAEL', t: `Okay, let's trace an actual sound all the way through, start to finish.` },
    { s: 'TYLA', t: `Great way to consolidate it — let's do the full journey, one stop at a time. It starts, obviously, with a sound wave travelling through the air. The pinna catches that sound wave and funnels it into the auditory canal, which carries it inward to strike the tympanic membrane, causing it to vibrate.` },
    { s: 'MICHAEL', t: `Vibrating eardrum, then onto the ossicles?` },
    { s: 'TYLA', t: `Exactly — that vibration passes into the ossicles, the hammer, anvil, and stirrup, which amplify it and transmit it onward to a small membrane called the oval window, marking the entrance to the inner ear. And here's a neat detail — the oval window is actually smaller in surface area than the eardrum, so the same total force gets concentrated onto a smaller area, which further amplifies the pressure of the vibration.` },
    { s: 'MICHAEL', t: `So it's not just three amplifying bones, the size difference itself adds extra amplification too.` },
    { s: 'TYLA', t: `Exactly — a genuinely clever bit of built-in physics. That amplified vibration at the oval window then creates pressure waves that travel through a fluid inside the cochlea — the spiral, snail-shell-shaped structure of the inner ear.` },
    { s: 'MICHAEL', t: `And that's where the actual sound-detecting cells are?` },
    { s: 'TYLA', t: `Exactly — inside the cochlea sits a structure called the organ of Corti, containing tiny hair cells that get physically stimulated as those pressure waves ripple through the fluid. That stimulation converts the physical vibration into a nerve impulse.` },
    { s: 'MICHAEL', t: `So the organ of Corti is basically doing for hearing what the retina does for the eye — it's the actual receptor structure that converts the stimulus into a nerve signal.` },
    { s: 'TYLA', t: `That's a genuinely excellent parallel to draw. That impulse then travels along the auditory nerve, straight to the cerebrum, where it finally gets interpreted as an actual, recognisable sound. And one last step to close the loop — the pressure waves that travelled through the cochlear fluid eventually get absorbed and released through a second membrane, the round window, which prevents that pressure from just endlessly echoing back and forth inside the fluid.` },
    { s: 'MICHAEL', t: `So the round window is like a pressure-release valve at the end of the whole system.` },
    { s: 'TYLA', t: `Exactly the right way to think about it — without it, those pressure waves would have nowhere to safely dissipate.` },

    { s: 'MICHAEL', t: `Okay, now the part you teased right at the start — balance.` },
    { s: 'TYLA', t: `Time to properly deliver on that. Balance relies on two separate structures inside the inner ear, both working alongside the cochlea but doing something completely different: the semicircular canals and the vestibule.` },
    { s: 'MICHAEL', t: `Let's take them one at a time.` },
    { s: 'TYLA', t: `Sure. The semicircular canals are three fluid-filled tubes, arranged at right angles to each other — essentially covering all three possible directions of movement. At the base of each canal is a small swelling called an ampulla, and inside each ampulla sits a receptor called a crista.` },
    { s: 'MICHAEL', t: `And what's the crista actually detecting?` },
    { s: 'TYLA', t: `Changes in the speed and direction of your head's movement — so, rotational or spinning-type movement specifically. When you suddenly turn your head, or spin around, the fluid inside those canals shifts and lags slightly behind the movement of your skull, which bends the crista's tiny hair cells and generates an impulse.` },
    { s: 'MICHAEL', t: `So it's detecting changes in motion, not motion itself?` },
    { s: 'TYLA', t: `Exactly the key nuance — if you're spinning at a perfectly constant speed, the fluid eventually catches up and stops moving relative to the canal, so the crista actually stops firing. It's specifically the change — speeding up, slowing down, or changing direction — that triggers the signal.` },
    { s: 'MICHAEL', t: `That's a genuinely subtle but important distinction.` },
    { s: 'TYLA', t: `It really is, and it's exactly why spinning around quickly and then suddenly stopping makes you feel dizzy — the fluid is still moving, briefly, even though your head has already stopped, creating a mismatch signal.` },
    { s: 'TYLA', t: `Now, the second structure: the vestibule, made up of two small membranous sacs called the sacculus and utriculus. Inside each are receptors called maculae, and these maculae contain tiny hair cells covered by a jelly-like substance, topped with small calcium carbonate stones.` },
    { s: 'MICHAEL', t: `And what are the maculae detecting, if it's not rotation?` },
    { s: 'TYLA', t: `The position of your head relative to gravity — so, tilting your head forward, backward, or sideways, and general static position, rather than rotational movement. When your head tilts, those tiny calcium stones shift under gravity's pull, dragging on the jelly layer beneath them, which bends the hair cells and generates an impulse.` },
    { s: 'MICHAEL', t: `So cristae handle rotation and changes in speed, maculae handle tilt and static head position.` },
    { s: 'TYLA', t: `Exactly that division — two separate systems, covering two separate kinds of movement information. And both pathways ultimately send their impulses to the same destination: the cerebellum — the structure responsible for coordinating balance and posture.` },
    { s: 'MICHAEL', t: `There's that full-circle connection back to the brain section.` },
    { s: 'TYLA', t: `Exactly — the cerebellum takes in that balance information from both the cristae and the maculae, and sends out its own signals to your skeletal muscles to actually correct your posture and restore your balance in real time.` },

    { s: 'MICHAEL', t: `Last stretch — what actually goes wrong with hearing?` },
    { s: 'TYLA', t: `Two conditions worth knowing here. First: a middle ear infection. This happens when pathogens — disease-causing organisms — travel up the Eustachian tube and infect the middle ear, causing it to become inflamed. That inflammation can block the Eustachian tube itself, which then traps fluid inside the middle ear, since it can no longer drain away properly.` },
    { s: 'MICHAEL', t: `And that's the one that's especially common in kids, right?` },
    { s: 'TYLA', t: `Exactly — young children are particularly prone to it, partly because their Eustachian tubes are shorter and more horizontal, which makes it easier for pathogens to travel up into the middle ear. Treatment usually involves medication to clear the infection, but in more persistent or recurring cases, doctors sometimes insert a tiny draining tube, called a grommet, directly into the eardrum, which allows trapped fluid and moisture to drain out properly.` },
    { s: 'MICHAEL', t: `So a grommet is basically a permanent little drainage shortcut, bypassing a Eustachian tube that isn't doing its drainage job well enough on its own.` },
    { s: 'TYLA', t: `Exactly the right way to picture it. The second condition is broader: deafness, meaning a partial or total loss of hearing. This can come from a few different causes — physical injury to the ear structures themselves, damage to the nerves or brain regions responsible for processing hearing, or the hardening over time of ear tissues, particularly the ossicles, which stops them vibrating and transmitting sound properly.` },
    { s: 'MICHAEL', t: `So it's not one single cause, it's really a category covering several different possible breakdowns along the hearing pathway.` },
    { s: 'TYLA', t: `Exactly right — anywhere along that whole chain we walked through earlier, from the pinna all the way to the cerebrum, a breakdown at any single point can potentially result in some degree of hearing loss. Treatment depends heavily on the specific cause, but common options include hearing aids, which amplify incoming sound, or in more severe cases, cochlear implants, which can bypass damaged parts of the ear entirely and stimulate the auditory nerve directly.` },
    { s: 'MICHAEL', t: `That's a genuinely elegant workaround — going straight to the nerve if the mechanical parts aren't working.` },
    { s: 'TYLA', t: `It really is, and it's one of the more remarkable pieces of modern medical technology built directly off of understanding this exact pathway we just walked through.` },
  ],
},

// ───────────────────────────────────────────────────────────────────────
// 7. Outro (Full Recap)
// ───────────────────────────────────────────────────────────────────────
{
  num: 7,
  file: '7. Outro (Full Recap)',
  segs: [
    { s: 'TYLA', t: `[excited] Alright, Michael — same tradition as always. Give me the whole chapter, start to finish, in one go.` },
    { s: 'MICHAEL', t: `[laughs] No pressure, on my first episode with a new host. Okay — the body constantly responds to stimuli, both internal and external, to maintain homeostasis, using receptors to detect and effectors to respond, connected by impulses. The central nervous system, the brain and spinal cord, is the control centre, while the peripheral nervous system — cranial and spinal nerves — connects that centre to the rest of the body. The brain breaks down into the cerebrum, for voluntary action and higher thought; the cerebellum, for coordination and balance; the medulla oblongata, for involuntary survival functions like heartbeat and breathing; and the hypothalamus, for homeostatic control like hunger and temperature — all protected by the cranium, meninges, and cerebrospinal fluid, with the spinal cord getting the same protection via vertebrae. Neurons — sensory, interneuron, and motor — are built from dendrites, a cell body, and an axon wrapped in a speed-boosting myelin sheath, and they don't physically touch each other, instead passing impulses across a synapse using chemical neurotransmitters. A reflex action, like yanking your foot off a thumbtack, travels the reflex arc — receptor, sensory neuron, interneuron, motor neuron, effector — entirely through the spinal cord, without the brain, for speed. The peripheral nervous system splits into the somatic system, for voluntary muscles, and the autonomic system, for involuntary ones — which itself splits into the sympathetic system, for fight-or-flight, and the parasympathetic system, for rest-and-digest, working antagonistically against each other. When the nervous system breaks down, you get conditions like Alzheimer's disease, progressive and neurodegenerative, and multiple sclerosis, an autoimmune attack on the myelin sheath — both currently incurable, but manageable. Then, the sense organs: the eye, built from the sclera, cornea, choroid, ciliary body, iris, lens, and two humours, with light-detecting rods and cones in the retina, a sharp-focus yellow spot, and a receptor-free blind spot where the optic nerve exits — with binocular vision from two eyes giving us depth perception. Accommodation lets the lens change shape for near or distant focus, using the ciliary muscles and suspensory ligaments, while the pupillary mechanism uses the iris's circular and radial muscles to control how much light gets in. When that focusing goes wrong, you get myopia, hyperopia, astigmatism, or cataracts, each with its own cause and correction. And finally, the ear — outer, middle, and inner regions — which not only hears, through the pinna, eardrum, ossicles, oval window, cochlea, and organ of Corti, all the way to the cerebrum, but also handles balance, through the cristae in the semicircular canals detecting rotation, and the maculae in the vestibule detecting head position, both reporting back to the cerebellum. And when that hearing pathway breaks down, you get conditions like middle ear infections or deafness.` },
    { s: 'TYLA', t: `[impressed] ...Michael, genuinely, for a first episode together, that was an outstanding summary. Nothing missing, in the right order, the whole way through.` },
    { s: 'MICHAEL', t: `[laughs] I'll take that as a strong start to this new hosting partnership.` },
    { s: 'TYLA', t: `[warmly] A very strong start. That's a wrap on this chapter. Until next time — remember, receptor detects, effector responds, and your reflexes are faster than your thoughts for a very good reason. We'll catch you in the next episode.` },
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
  const sectionsToRun = requested.length ? SECTIONS.filter(sec => requested.includes(sec.num)) : SECTIONS;

  if (requested.length) {
    console.log(`Re-recording only: ${sectionsToRun.map(s => s.num).join(', ')}\n`);
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
    console.warn('⚠ ffmpeg not found — raw-concatenating using embedded silence for pauses. Install ffmpeg for cleaner pacing.\n');
  }

  console.log(`Life, Decoded — Episode 6: Responding to the Environment (Humans) — running ${sectionsToRun.length} section(s)\n`);

  for (const sec of sectionsToRun) {
    console.log(`\n▶ ${sec.file}`);
    await generateSection(sec, ffmpegAvailable, silenceShort, silenceLong);
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the 7 final files.`);
}

main().catch(e => { console.error(e); process.exit(1); });

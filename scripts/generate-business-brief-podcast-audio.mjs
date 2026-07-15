/**
 * The Business Brief — Chapter 1 Podcast Series — ElevenLabs audio generator
 * ----------------------------------------------------------------------------
 * Usage (from the project root, in a terminal with real internet access —
 * this will NOT work from inside Cowork's sandbox, run it on your own machine):
 *
 *   node --env-file=.env.local scripts/generate-business-brief-podcast-audio.mjs
 *
 * What it does:
 *  1. Generates all 9 episodes of "The Business Brief" (Chapter 1: Macro
 *     Environment — Impact of Recent Legislation on Business), each one
 *     SAVED AS ITS OWN SEPARATE FILE, named after the episode.
 *  2. Amelia announces each episode's title at the start (e.g. "Episode 1:
 *     Skills Development Act No. 97 of 1998"), then Naledi and Michael carry
 *     the rest of the episode, same as the source script.
 *  3. Tries the "eleven_v3" model first, falling back automatically to
 *     eleven_turbo_v2_5 if your plan doesn't have v3 access.
 *  4. Skips any clip that already exists, so a run that gets interrupted
 *     (e.g. wifi drops) can just be re-run — only the missing pieces regenerate.
 *  5. Stitches each episode's clips into its own MP3 using ffmpeg if
 *     installed (with natural pauses), or raw concatenation as a fallback.
 *
 * Output — one file per episode, in:
 *   podcasts/The-Business-Brief-Chapter1/Episode 1 - Skills Development Act No. 97 of 1998.mp3
 *   podcasts/The-Business-Brief-Chapter1/Episode 2 - Labour Relations Act No. 66 of 1995.mp3
 *   ...through Episode 9 (Bonus).
 *
 * Individual clips are kept in podcasts/tmp/business-brief/<episode-slug>/ for resuming.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-business-brief-podcast-audio.mjs');
  process.exit(1);
}

const VOICES = {
  NALEDI: 'ZtcPZrt9K4w8e1OB9M6w',  // Mia Moore — Studio Presenter
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
  AMELIA: 'ZF6FPAbjXT4488VcRRnw',  // Amelia — Enthusiastic and expressive
};

const PRIMARY_MODEL = 'eleven_v3';
const FALLBACK_MODEL = 'eleven_turbo_v2_5';

// Embedded silent MP3 clips (base64) so natural pauses work even when the
// user's machine doesn't have ffmpeg installed — no external dependency needed.
const SILENCE_SHORT_B64 = 'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAPAAAGzgAqKioqKio5OTk5OTk5SEhISEhIV1dXV1dXV2dnZ2dnZ2d2dnZ2dnaFhYWFhYWFlZWVlZWVlaSkpKSkpLOzs7Ozs7PCwsLCwsLC0tLS0tLS4eHh4eHh4fDw8PDw8PD///////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAT1AAAAAAAABs4x4WRRAAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAARMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMQpg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxFMDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDEfIPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMSmA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxM+DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='; // ~0.35s, between dialogue lines
const SILENCE_LONG_B64 = 'SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAkAAAPVgASEhkZGSAgICYmJi0tNDQ0Ozs7QkJCSEhPT09WVlZdXV1kZGRqanFxcXh4eH9/f4WFjIyMk5OTmpqaoaGhp6eurq61tbW8vLzCwsnJydDQ0NfX197e3uTk6+vr8vLy+fn5//8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAS2AAAAAAAAD1aoAgi4AAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAARMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMQpg8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxFMDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDEfIPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMSmA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxM+DwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE1gPAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTWA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxNYDwAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='; // ~0.9s, around title announcements

function voiceSettingsFor(modelId) {
  // Per ElevenLabs' own recommended defaults for eleven_v3 (style + speaker boost
  // included); fallback model just uses the classic two settings.
  return modelId === PRIMARY_MODEL
    ? { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true }
    : { stability: 0.5, similarity_boost: 0.75 };
}

const ROOT = path.resolve('.');
const OUT_DIR = path.join(ROOT, 'podcasts', 'The-Business-Brief-Chapter1');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'business-brief');

// ─────────────────────────────────────────────────────────────────────────
// EPISODES — each one is generated and stitched into its own separate file.
// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  file: 'Episode 1 - Skills Development Act No. 97 of 1998',
  segs: [
    { s: 'AMELIA', t: `Episode 1: Skills Development Act No. 97 of 1998` },
    { s: 'NALEDI', t: `Hello and welcome to The Business Brief. I'm Naledi.` },
    { s: 'MICHAEL', t: `And I'm Michael, the guy who read the chapter once, understood maybe forty percent of it, and is here to ask all the questions you're too shy to ask your teacher.` },
    { s: 'NALEDI', t: `Which is exactly why this works. Today we're kicking off Chapter 1 — Macro Environment: the impact of recent legislation on business. It's eight units, eight different Acts, and we're doing one per episode so your brain doesn't melt.` },
    { s: 'MICHAEL', t: `Eight Acts. Okay. Before we even start — why do I, a person who just wants to finish school and maybe work at a bank one day, need to know about laws?` },
    { s: 'NALEDI', t: `Because every single one of these laws affects how a business hires you, pays you, fires you, protects you, or sells to you. You are going to be an employee, and probably a consumer, for the rest of your life. This chapter is basically "the rules of adulting in South Africa," dressed up in exam language.` },
    { s: 'MICHAEL', t: `Okay, when you put it like that. So Act number one on the list — the Skills Development Act, No. 97 of 1998. The SDA. What is it actually for?` },
    { s: 'NALEDI', t: `Think about South Africa just after 1994. Apartheid had spent decades deliberately under-educating and under-training the majority of the workforce. So you had millions of people who were willing to work, but didn't have the skills employers needed — which trapped them in low-paying jobs or no jobs at all.` },
    { s: 'MICHAEL', t: `So the government basically said, "we need to fix this on purpose."` },
    { s: 'NALEDI', t: `Exactly. The SDA exists to develop the skills of people in South Africa to improve productivity, to push businesses to actually invest in training their workers, and to improve the job chances of people who were previously disadvantaged. It treats the workplace itself as a classroom — you're meant to be learning while you're earning.` },
    { s: 'MICHAEL', t: `Okay give me a real example, because "developing skills" sounds vague.` },
    { s: 'NALEDI', t: `Picture a Checkers or a Shoprite. A till operator gets trained not just to scan groceries, but maybe works toward a retail qualification through the W&RSETA — that's the Wholesale and Retail Sector Education and Training Authority. Over a few years that same person could become a department supervisor, then a store manager. That whole ladder only exists because the law forces the system to build it.` },
    { s: 'MICHAEL', t: `SETA — I've heard that word and had no idea what it meant.` },
    { s: 'NALEDI', t: `SETAs, Sector Education and Training Authorities, were set up in March 2000, one for basically every industry. AgriSETA for farming, FOODBEV SETA for food and beverages, HWSETA for health and welfare, and so on. Each SETA's job is to build skills plans for its sector, approve companies' training plans, pay out grants, and set up learnerships.` },
    { s: 'MICHAEL', t: `Learnerships — is that the thing where you study and work at the same time?` },
    { s: 'NALEDI', t: `Exactly right. A learnership combines structured theory with real practical work experience, and it leads to an actual recognised qualification — think of an apprentice electrician, or someone training to be a motor mechanic. It has to be registered with SAQA, the South African Qualifications Authority.` },
    { s: 'MICHAEL', t: `Now here's the part that confused me in the book — this "levy" thing. Where does the money for all this training even come from?` },
    { s: 'NALEDI', t: `This is the clever bit. Any business with a payroll of more than R500,000 a year must pay a Skills Development Levy — that's 1% of what they pay their employees in total — to SARS every month.` },
    { s: 'MICHAEL', t: `Wait, so my mom's small hair salon with three staff wouldn't have to pay this?` },
    { s: 'NALEDI', t: `Correct, if her total payroll is under R500,000 a year she's exempt. But a big company, say a bank or a large retail chain, definitely pays it. And here's the part learners always forget in the exam: that money doesn't just vanish into government. Twenty percent goes to the National Skills Fund, ten percent covers the SETA's own running costs, and the business can actually claim back up to seventy percent — fifty percent for submitting workplace skills plans and reports, and twenty percent for learnerships — if they do the paperwork properly.` },
    { s: 'MICHAEL', t: `So it's not really a tax, it's more like... forced savings for training, and you get most of it back if you actually train people?` },
    { s: 'NALEDI', t: `That's a great way to put it. It's designed so there's no excuse not to train your staff — the money's already been set aside.` },
    { s: 'MICHAEL', t: `Okay, and there was this whole NQF thing with all the levels. I got lost there.` },
    { s: 'NALEDI', t: `The National Qualifications Framework. Think of it as one long ladder with ten rungs, and everyone in the country's education and training system is climbing the same ladder, so qualifications can be compared and credits can move between institutions. You, right now in Grade 12, are sitting at NQF Level 4. Grade 10 is Level 2, Grade 11 is Level 3. Above matric you've got diplomas and occupational certificates at Level 5, Honours at Level 6, Masters at Level 7, all the way up to a Doctorate at Level 8 to 10.` },
    { s: 'MICHAEL', t: `So when I finish matric this year, I'm officially "Level 4"?` },
    { s: 'NALEDI', t: `You are. And the whole point of the NQF is that someone who left school in Grade 9 and did a learnership through a SETA can still work their way up that same ladder and eventually reach a recognised qualification — even without ever sitting in a university lecture hall.` },
    { s: 'MICHAEL', t: `Okay, that's actually kind of powerful when you think about it. Now, what happens if a business just... doesn't bother? Skips all of this?` },
    { s: 'NALEDI', t: `Then there are real consequences. If a business doesn't pay its levy on time, SARS charges a late penalty, usually 10% of the amount owed, and repeated non-payment can lead to legal action. And here's the kicker — if you don't pay the levy, you're not allowed to offer learnerships or claim any grants from the Skills Development Fund. You lock yourself out of the system.` },
    { s: 'MICHAEL', t: `And what counts as actually breaking the spirit of the law — like, discrimination under this Act?` },
    { s: 'NALEDI', t: `Good question, and this comes up in every unit in this chapter, so get used to it. Under the SDA, an employer isn't allowed to deny someone appropriate training or development opportunities because of their race, gender, or disability. They also can't lie on official documents, or run an unregistered employment agency for profit.` },
    { s: 'MICHAEL', t: `Let me try to summarise this whole episode in one breath. The Skills Development Act exists because apartheid left most South Africans without proper training. It forces bigger businesses to pay a 1% levy that funds SETAs and learnerships, it plugs into the ten-level NQF so any South African can climb the qualifications ladder, and if a business skips its duties, it gets fined and locked out of claiming grants.` },
    { s: 'NALEDI', t: `Perfect summary. Exam tip before we go: past papers love asking you to calculate the levy — remember, it's simply total salaries multiplied by 1%. And they love asking you to compare "impact on employers" versus "impact on employees" in a table. Practise writing both sides.` },
    { s: 'MICHAEL', t: `Noted. Next episode?` },
    { s: 'NALEDI', t: `The Labour Relations Act — strikes, trade unions, and the CCMA. It's a good one.` },
    { s: 'MICHAEL', t: `See you there. This has been The Business Brief.` },
  ],
},

{
  file: 'Episode 2 - Labour Relations Act No. 66 of 1995',
  segs: [
    { s: 'AMELIA', t: `Episode 2: Labour Relations Act No. 66 of 1995` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Last episode we covered the Skills Development Act. Today we're moving to Unit 2 — the Labour Relations Act, No. 66 of 1995. The LRA.` },
    { s: 'MICHAEL', t: `This is the one with strikes in it, right? I feel like every news bulletin in this country eventually mentions a strike.` },
    { s: 'NALEDI', t: `That's exactly why this Act matters so much. Before 1994, labour law in South Africa was basically written by the government alone, with no real input from workers or unions. The LRA of 1995 changed that completely — for the first time, organised labour, meaning trade unions, organised business, and the state all had to agree on the rules together.` },
    { s: 'MICHAEL', t: `So instead of the government just telling everyone how it's going to be, the workers get a seat at the table.` },
    { s: 'NALEDI', t: `Precisely. Picture a triangle: the State sets the legal framework in the middle, Workers — represented by their trade unions — sit on one corner, and Employers, through management, sit on the other. The LRA is what holds that triangle together.` },
    { s: 'MICHAEL', t: `Okay, what's the actual purpose of the Act, in plain English?` },
    { s: 'NALEDI', t: `It gives everyone — employers, employees, and trade unions — a clear framework for handling anything labour-related: hiring, firing, discipline, negotiations, strikes, and disputes. Its main goal is to make resolving labour disputes simple, and to make collective bargaining possible, both at an individual workplace and across a whole sector.` },
    { s: 'MICHAEL', t: `Collective bargaining — I always mix this up. Is that just one person negotiating their salary?` },
    { s: 'NALEDI', t: `No, the opposite. Collective bargaining is when an employer's association and a trade union negotiate wages and working conditions on behalf of everyone in that industry at once. Think about the mining sector — when you see on the news that "the mining union has reached a wage deal," that's collective bargaining. One negotiation, thousands of workers covered.` },
    { s: 'MICHAEL', t: `That makes way more sense. So what happens when the two sides can't agree?` },
    { s: 'NALEDI', t: `That's where Bargaining Councils and the CCMA come in. A Bargaining Council is formed when one or more trade unions and one or more employer organisations agree to work together at a sector level — their job is to make and enforce collective agreements, prevent and resolve disputes, and even run training schemes.` },
    { s: 'MICHAEL', t: `And the CCMA — I hear this on the radio constantly.` },
    { s: 'NALEDI', t: `The Commission for Conciliation, Mediation and Arbitration. It's independent — not run by government or any political party — and most of its work involves unfair dismissal cases. Say a Bolt driver or a warehouse worker at Takealot feels they were fired unfairly. They can take that dispute to the CCMA.` },
    { s: 'MICHAEL', t: `What's the actual process there? Conciliation, mediation, arbitration — those sound like the same word to me.` },
    { s: 'NALEDI', t: `They're related but different, and this is a classic exam matching-column question, so listen closely. Conciliation is simply getting both sides into the same room to try and reach a settlement. Mediation is similar, but the mediator actively acts as a go-between, trying to broker a friendly resolution. Arbitration is the serious one — both sides state their case separately, and the arbitrator then makes a final, binding decision. No more negotiating after that.` },
    { s: 'MICHAEL', t: `And if even arbitration doesn't settle it?` },
    { s: 'NALEDI', t: `Then it can go to the Labour Court, which only handles disputes that fall under the LRA. And if someone wants to appeal that decision, it goes even further up, to the Labour Appeal Court. So the full chain is: Bargaining Council or CCMA, then Labour Court, then Labour Appeal Court.` },
    { s: 'MICHAEL', t: `Okay, now the big one — strikes and lock-outs. What actually counts as a legal strike?` },
    { s: 'NALEDI', t: `A strike is a partial or complete refusal to work — including something as simple as refusing overtime — done to remedy a grievance, which is just a formal complaint about a breach of your employment terms. The Act also allows picketing, which is standing outside the business to draw attention to the dispute and discourage workers or customers from going in.` },
    { s: 'MICHAEL', t: `And a lock-out is the opposite — that's the employer's move?` },
    { s: 'NALEDI', t: `Right. In a lock-out, the employer denies striking workers access to the premises while the dispute is being resolved. Both strikes and lock-outs are legal tools, as long as they follow the proper process.` },
    { s: 'MICHAEL', t: `What are the actual benefits of this whole system? Because from the outside it can look like it just creates conflict.` },
    { s: 'NALEDI', t: `It's really the opposite. The LRA protects both sides. Employers get fair, predictable dismissal and discipline procedures instead of chaos. Employees get their rights recognised and a real say through their unions in decisions that affect them — wage negotiations being the biggest one. And crucially, it gives workers a structured, legal way to resolve conflict instead of things turning violent or completely breaking down.` },
    { s: 'MICHAEL', t: `And the downside?` },
    { s: 'NALEDI', t: `A few. Some trade unions don't always act in their members' best interests — remember, a union is an organisation too, with its own internal politics. Many employees and even employers still don't fully understand or respect the Act. And bargaining council processes can be slow and disruptive, which hurts productivity while they're dragging on.` },
    { s: 'MICHAEL', t: `What happens to a business that just ignores the Act completely?` },
    { s: 'NALEDI', t: `They get forced into the dispute resolution process regardless — CCMA or Bargaining Council, then Labour Court, then Labour Appeal Court if needed. Any agreement reached is legally binding, and the Minister of Labour can set fines for non-compliance through a notice in the Government Gazette.` },
    { s: 'MICHAEL', t: `Let me try the recap. The LRA rebuilt South African labour law after 1994 so that workers, through trade unions, employers, and the state all agree on the rules together. It sets up Bargaining Councils and the CCMA to resolve disputes through conciliation, mediation, or arbitration, with the Labour Court and Labour Appeal Court as the final stops. It also legally protects strikes, picketing, and lock-outs, as long as they follow the correct process.` },
    { s: 'NALEDI', t: `Excellent. Exam tip: matching-column questions on this unit are basically guaranteed — conciliation, mediation, arbitration, strike, lock-out, picketing, grievance, bargaining council. Know each definition word for word, because the phrasing in the textbook is exactly what gets tested.` },
    { s: 'MICHAEL', t: `Got it. Next up?` },
    { s: 'NALEDI', t: `Unit 3 — the Employment Equity Act. This is where we talk about discrimination and affirmative action properly.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  file: 'Episode 3 - Employment Equity Act No. 55 of 1998',
  segs: [
    { s: 'AMELIA', t: `Episode 3: Employment Equity Act No. 55 of 1998` },
    { s: 'NALEDI', t: `Welcome back. Unit 3 today — the Employment Equity Act, No. 55 of 1998. The EEA.` },
    { s: 'MICHAEL', t: `I actually think I sort of know this one — affirmative action, right?` },
    { s: 'NALEDI', t: `That's a big part of it, yes, but let's build it properly. The EEA was passed in 1998 to redress the imbalances left by apartheid. Its job is to make sure there's equality of opportunity and fair treatment in the workplace, and it puts affirmative action measures in place so that, over time, the people employed in South African workplaces actually start to reflect the demographics of the country.` },
    { s: 'MICHAEL', t: `Okay, "affirmative action" — what does that actually mean in practice? I hear the term thrown around a lot but never a clean definition.` },
    { s: 'NALEDI', t: `Here's the textbook definition: when hiring staff, an employer must give preference to groups of people who were previously excluded from full participation in the economy. In South Africa, those "designated groups" are Black people — which the Act defines as Black, Coloured, and Indian — women, and people with disabilities.` },
    { s: 'MICHAEL', t: `So if a company is hiring and two candidates are equally qualified, they'd lean toward the person from a designated group?` },
    { s: 'NALEDI', t: `That's the general idea — it's about correcting decades of exclusion, not about picking unqualified people. Which brings us to a really important exam point: a business cannot use "we're just following affirmative action" as an excuse to hire someone who genuinely can't do the job. The Act requires a real Employment Equity Plan, not just good intentions.` },
    { s: 'MICHAEL', t: `Who actually has to have this plan?` },
    { s: 'NALEDI', t: `Businesses that employ 50 or more people, or smaller businesses whose annual turnover is above a set threshold. That plan has to be submitted to the Department of Labour, along with an annual report showing how it's actually being implemented. Smaller businesses under that threshold don't have to comply, though they can choose to.` },
    { s: 'MICHAEL', t: `Let's talk about the case study from the textbook — I remember this one, the clothing store.` },
    { s: 'NALEDI', t: `Miss Zippy-Zappy — great one to remember for the exam because it's a classic discrimination trap. The store sells trendy clothes and advertises for shop assistants "under 25." Mandisa, who's almost 30 and has two young kids, applies anyway. The owner turns her down and lists reasons: the salary is low, she might not fit the "youthful culture," she might have to take instructions from someone younger, and her family responsibilities might get in the way.` },
    { s: 'MICHAEL', t: `Okay, even without knowing the law, that already sounds dodgy.` },
    { s: 'NALEDI', t: `It is. None of those reasons relate to whether Mandisa can actually do the job. Age isn't a valid ground for exclusion here, and family responsibility definitely isn't — that's exactly the kind of unfair discrimination the EEA exists to stop. Mandisa would have grounds to lodge a complaint, likely with the CCMA or the Labour Court, on the basis of age and possibly indirect discrimination linked to her being a mother.` },
    { s: 'MICHAEL', t: `Give me a more everyday version of this — something that could actually happen to someone my age applying for a holiday job.` },
    { s: 'NALEDI', t: `Imagine you apply for a part-time job at a restaurant during the December holidays, and the manager says "we're not hiring you because you're a man and we only want female waitrons for this look we're going for." That's unfair discrimination on the basis of gender, and it falls foul of this exact Act — even for a small, casual job.` },
    { s: 'MICHAEL', t: `What about medical testing? I remember something about that.` },
    { s: 'NALEDI', t: `Good catch — that's a specific, testable point. Medical testing as part of hiring is prohibited unless it's genuinely justified by the nature of the job. The textbook's example is an airline pilot — obviously you want medical proof a pilot is fit to fly. But a shop wanting a medical test from a till operator, with no health-and-safety reason, would be unlawful.` },
    { s: 'MICHAEL', t: `What are the actual benefits of having this law at all?` },
    { s: 'NALEDI', t: `It promotes equal opportunity and fair treatment, it drives real diversity in businesses, and it forces consultation between employers and employees rather than decisions being made unilaterally. It also creates a genuine framework — like structured training programmes for previously disadvantaged groups — rather than leaving transformation to chance.` },
    { s: 'MICHAEL', t: `And the criticisms — because I know this one gets debated a lot.` },
    { s: 'NALEDI', t: `Fairly. Sometimes people get appointed or promoted into roles they're not fully ready for yet, which can be costly since the business then has to invest heavily in training them up. Developing an Employment Equity Plan properly takes real time and money. And in some workplaces, the Act isn't managed properly and gets used as an excuse for favouritism rather than genuine transformation — which undermines the whole point of it.` },
    { s: 'MICHAEL', t: `What happens to a business that just doesn't submit its plan?` },
    { s: 'NALEDI', t: `They can receive a Compliance Order first. If they still don't sort it out, the Labour Court can fine them — R500,000 for a first offence, rising all the way up to R900,000 after four offences. But here's a detail examiners love to trip students up on: a business cannot be fined simply for not yet reaching its equity targets. The Labour Court only acts if there's been no bona fide — meaning genuine, good-faith — effort to work toward those targets.` },
    { s: 'MICHAEL', t: `So it's not about hitting a quota by a deadline, it's about actually trying?` },
    { s: 'NALEDI', t: `Exactly. That's the nuance the exam wants you to know.` },
    { s: 'MICHAEL', t: `Let me recap. The EEA exists to redress apartheid-era exclusion by requiring larger businesses to build and submit a real Employment Equity Plan aimed at designated groups — Black people, women, and people with disabilities. It bans unfair discrimination and unjustified medical testing, and non-compliant businesses face Compliance Orders and fines up to R900,000 — but only if they're not even trying in good faith.` },
    { s: 'NALEDI', t: `Perfect. Exam tip: know the Mandisa case study inside out — questions about "where can she lodge a complaint" and "on what grounds" come up almost word-for-word in past papers. And always distinguish this Act from the next one we're covering, the Basic Conditions of Employment Act — the EEA is about who gets hired and treated fairly, the BCEA is about the actual day-to-day conditions once you're employed.` },
    { s: 'MICHAEL', t: `That distinction alone probably saves marks. Next episode, the BCEA?` },
    { s: 'NALEDI', t: `Working hours, leave, overtime — the one that affects literally every part-time job you'll ever have.` },
    { s: 'MICHAEL', t: `Can't wait. See you there.` },
  ],
},

{
  file: 'Episode 4 - Basic Conditions of Employment Act No. 75 of 1997',
  segs: [
    { s: 'AMELIA', t: `Episode 4: Basic Conditions of Employment Act No. 75 of 1997` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Unit 4 — the Basic Conditions of Employment Act, No. 75 of 1997. The BCEA.` },
    { s: 'MICHAEL', t: `Okay, this is the one I actually care about personally, because I want a part-time job next year.` },
    { s: 'NALEDI', t: `Then you're going to want to listen closely, because this Act basically writes the rulebook for your future payslip. The Constitution gives every South African the right to fair labour practices — the BCEA is what actually puts that right into effect in real workplaces.` },
    { s: 'MICHAEL', t: `Who does it cover? Everyone?` },
    { s: 'NALEDI', t: `Almost everyone — casual workers, temporary workers, permanent workers, even independent contractors. The only exclusions are the National Defence Force, the National Intelligence Agency, the Secret Service, and unpaid volunteers working for charities. So yes, that part-time job you're imagining is fully covered.` },
    { s: 'MICHAEL', t: `Let's start with hours, because this is where I always hear people complain. How many hours can an employer actually make you work?` },
    { s: 'NALEDI', t: `Maximum 45 hours a week. If you work five days or fewer a week, that's a max of nine hours a day. If you work more than five days a week, it drops to eight hours a day.` },
    { s: 'MICHAEL', t: `And overtime — I know Checkers till staff sometimes get asked to stay late during December.` },
    { s: 'NALEDI', t: `You can't be forced into overtime — you have to agree to it. And it's capped: no more than three hours a day, or ten hours a week. Pay-wise, weekday and Saturday overtime is 1.5 times your normal rate. Sunday and public holiday overtime is double your normal rate. The employer can choose to pay you cash for it or give you time off instead, but it has to be one or the other, properly worked out.` },
    { s: 'MICHAEL', t: `Double pay on a Sunday — so if my friend works at a petrol station and gets called in on a Sunday, they should legally be earning double?` },
    { s: 'NALEDI', t: `If it's outside their normal contracted hours, yes — Sunday work is treated as overtime and must be paid at double rate, unless there's a different agreement in place. This is a very common exam scenario, so remember that number: double.` },
    { s: 'MICHAEL', t: `What about breaks? Please tell me there's a law about lunch.` },
    { s: 'NALEDI', t: `There is. After five hours of work you're entitled to a 60-minute meal break — though that can be reduced to 30 minutes if both sides agree to it in writing. On top of that, you're entitled to 12 continuous hours of rest between shifts each day, and 36 continuous hours of rest each week, which should include a Sunday unless otherwise agreed.` },
    { s: 'MICHAEL', t: `And leave — annual leave, sick leave, all of that?` },
    { s: 'NALEDI', t: `Annual leave is 21 continuous days a year, or you can calculate it as one day for every 17 days worked. An employer can only pay you out for unused leave instead of letting you take it if you're actually leaving the job. Sick leave gives you up to six weeks of paid leave across a 36-month cycle — in your first six months of employment you earn one day of sick leave per month, and after that you can access the full amount, provided you meet the legal requirements. If you're sick for more than two days at a time, or more than twice in eight weeks, your employer can ask for a medical certificate.` },
    { s: 'MICHAEL', t: `What about maternity leave?` },
    { s: 'NALEDI', t: `Up to four continuous months, usually starting anywhere from four weeks before the expected birth date, or earlier if a doctor or midwife advises it. And there's also Family Responsibility Leave — three paid days a year for anyone who's worked longer than four months full-time, usually used for illness or death of a close family member.` },
    { s: 'MICHAEL', t: `Now, the textbook has a case study about a guy called Thomas that I remember being confusing.` },
    { s: 'NALEDI', t: `Great one to unpack, because it's essentially a checklist question. Thomas is offered a job and gets his written conditions of employment, but some details don't sit right with him. His hours are 07:00 to 17:00, Monday to Friday — that's fine, well within the legal limit. He may be asked to work overtime at his normal daily rate — wait, that's wrong, remember overtime on weekdays must be 1.5 times normal pay, not equal to it. He won't be expected to work Sundays unless agreed — fine, that's compliant. He may work public holidays at his normal daily rate — also wrong, public holiday work must be paid at double rate. He gets 18 days annual leave in his first full year — that's actually fine, it's above the 21-days-a-year minimum when you calculate it proportionally, so no issue there. But Family Responsibility Leave "not normally granted" — that's a violation, because the Act entitles him to it after four months of service.` },
    { s: 'MICHAEL', t: `So the trick in these exam case studies is basically comparing each clause against the actual legal minimums.` },
    { s: 'NALEDI', t: `Exactly — that is the entire skill being tested. Learn the numbers: 45 hours, three hours overtime a day, 1.5 times pay on weekdays, double pay on Sundays and public holidays, 21 days annual leave, six weeks sick leave, four months maternity leave, three days family responsibility leave. Those numbers are gold in the exam.` },
    { s: 'MICHAEL', t: `What about child labour? I saw something about that too.` },
    { s: 'NALEDI', t: `It's unlawful to employ anyone under 15. Fifteen to seventeen-year-olds can work, but they may not do dangerous work, or work that requires adult strength or is otherwise meant for an adult. And forcing anyone to work against their will is illegal, full stop.` },
    { s: 'MICHAEL', t: `And what happens if a business doesn't stick to any of this?` },
    { s: 'NALEDI', t: `Labour Inspectors are appointed to check businesses are complying — they can inspect the workplace, investigate complaints, and even copy or remove records as evidence. If they find a business isn't complying, they issue a Compliance Order. The Department of Labour then reviews it, and can confirm, change, or cancel the order — and a business can challenge that decision in the Labour Court.` },
    { s: 'MICHAEL', t: `Let me recap the whole episode. The BCEA sets the actual day-to-day floor for every job in South Africa — 45-hour work weeks, controlled and properly paid overtime, guaranteed breaks and rest periods, annual, sick, maternity, and family responsibility leave, no employing under-15s, and Labour Inspectors with real enforcement power through Compliance Orders.` },
    { s: 'NALEDI', t: `Exactly right. Exam tip: whenever you see a case study with a list of numbered conditions like Thomas's job description, go through each one individually and compare it to the legal minimum — don't try to judge the whole scenario at once. Marks are usually allocated per item.` },
    { s: 'MICHAEL', t: `That's actually a great strategy for the whole exam, not just this unit.` },
    { s: 'NALEDI', t: `It really is. Next up — COIDA, what happens when someone actually gets hurt at work.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  file: 'Episode 5 - Compensation for Occupational Injuries and Diseases Act No. 61 of 1997',
  segs: [
    { s: 'AMELIA', t: `Episode 5: Compensation for Occupational Injuries and Diseases Act No. 61 of 1997` },
    { s: 'NALEDI', t: `Welcome back. Unit 5 — the Compensation for Occupational Injuries and Diseases Act, No. 61 of 1997. Everyone just calls it COIDA.` },
    { s: 'MICHAEL', t: `That's a mouthful. What's it actually about?` },
    { s: 'NALEDI', t: `What happens when someone gets hurt — or worse — while doing their job. COIDA gives more comprehensive protection to employees who are injured carrying out their duties, and it sets up a Compensation Board that advises the Minister of Labour on how the Act is applied.` },
    { s: 'MICHAEL', t: `So if I hurt myself at work, I can claim money?` },
    { s: 'NALEDI', t: `Yes — for medical expenses and other compensation, depending on how severe the injury is. The Act splits this into temporary disablement, where you eventually recover and go back to work, and permanent disablement, where you'll never be able to return to that job. And if the worker dies, their dependants — meaning the people who relied on them, usually family — can claim instead.` },
    { s: 'MICHAEL', t: `Does the employee have to prove the employer did something wrong?` },
    { s: 'NALEDI', t: `This is one of the most important facts in the whole unit — no. COIDA is a no-fault system. You don't need to prove negligence on the employer's part to claim. You just need to show the injury happened while you were carrying out your normal duties as a bona fide, genuine employee of that company.` },
    { s: 'MICHAEL', t: `Who's covered, and who isn't?` },
    { s: 'NALEDI', t: `Casual and full-time employees are covered. But there are specific exclusions worth memorising: members of the SANDF or SAPS while defending the country, domestic workers employed in a private household, and contract workers. Also, if you're disabled for less than three days, you're not covered under this Act.` },
    { s: 'MICHAEL', t: `Wait, domestic workers aren't covered? That seems like a big gap.` },
    { s: 'NALEDI', t: `It is, and it's exactly the kind of thing the textbook wants you to notice and critically comment on — this exclusion is a genuine disadvantage of the Act. It ties directly into one of the case studies, actually — Margaret, a domestic worker who slips on a floor she's just washed. Under COIDA as it stands, she wouldn't be able to claim, precisely because domestic workers are excluded.` },
    { s: 'MICHAEL', t: `That's rough. What about the other case studies from the textbook — I remember there were a few.` },
    { s: 'NALEDI', t: `There are four, and each tests a different nuance, so they're worth knowing well. George is a carpenter who "borrows" his employer's electric drill to use at home; it slips and injures his son. Since the accident happened off-site and outside his work duties, George would struggle to claim — COIDA covers injuries in the course of employment, not personal use of borrowed equipment at home.` },
    { s: 'MICHAEL', t: `Makes sense. Next one?` },
    { s: 'NALEDI', t: `Sipho dies at home of natural causes after ten years at the same company. His family wants a payout from the Compensation Fund. But COIDA only covers injury or disease connected to work duties — dying of natural causes at home isn't work-related, so his family wouldn't be entitled to a payout under this Act.` },
    { s: 'MICHAEL', t: `And the fourth one?` },
    { s: 'NALEDI', t: `Fred, a permanent maintenance officer, is painting when barrels roll against his ladder, he falls, and breaks his arm. He reports it immediately to the health-and-safety representative. This one's straightforward — it happened while doing his normal job duties, on the premises, properly reported. Fred would be able to claim.` },
    { s: 'MICHAEL', t: `So the exam is really testing: was it a genuine employee, was it during work duties, and did it follow proper reporting?` },
    { s: 'NALEDI', t: `Exactly that three-part test. Now, on the employer's side — what are businesses actually required to do? Any employer with more than twenty employees must appoint one or more health-and-safety representatives and set up a health-and-safety committee. They also need to provide a safe working environment — proper ventilation, protection from noise, decent lighting, changing rooms, drinking water, seating.` },
    { s: 'MICHAEL', t: `And the reporting process if something does go wrong?` },
    { s: 'NALEDI', t: `The employee reports the accident to the employer as soon as reasonably possible. Then it's the employer's job to notify the Commissioner of the Compensation Fund within seven days, and lodge the actual compensation claim within twelve months of the accident or death. Employers must also register with the Compensation Fund as a contributor and keep wage and time records for four years. Importantly — no money is deducted from the employee's own salary for this. The employer pays into the fund based on wages and time worked.` },
    { s: 'MICHAEL', t: `Give me a relatable example — say, someone working construction, or a delivery driver.` },
    { s: 'NALEDI', t: `Perfect examples. Picture a bricklayer on a construction site who falls off scaffolding because the site didn't provide proper safety harnesses. Under COIDA, he can claim compensation without proving the company was negligent — he just needs to show it happened while doing his job. Or think of a food delivery rider who's injured in an accident while making a delivery during working hours — provided he's a genuine employee and not just an independent contractor, that would likely be covered too.` },
    { s: 'MICHAEL', t: `What's the actual benefit of this system, big picture?` },
    { s: 'NALEDI', t: `It works both ways. Employees are protected from carrying crushing medical bills alone. And employers are protected too — instead of facing an unpredictable lawsuit for every workplace injury, they contribute to a fund, and claims get handled through a structured, known process. It's essentially insurance for both sides.` },
    { s: 'MICHAEL', t: `And the downsides?` },
    { s: 'NALEDI', t: `Fraudulent claims are the big one — people trying to claim compensation dishonestly. The administrative process can also be time-consuming, and a business that hasn't taken proper safety precautions can be forced into very large payments if something serious happens.` },
    { s: 'MICHAEL', t: `What about penalties for non-compliance?` },
    { s: 'NALEDI', t: `The Commissioner appoints inspectors with real power to investigate health and safety issues and accidents. Each case of non-compliance is handled individually — an employer can be fined for not notifying the Commissioner in time, or for not notifying them at all. And not contributing to the fund, or not properly claiming for an injured worker, is treated as discriminatory against that employee.` },
    { s: 'MICHAEL', t: `Let me recap. COIDA is a no-fault compensation system for people injured or killed doing their job — the employer funds it, not the employee's salary. It covers temporary and permanent disablement and death, but excludes domestic workers, SANDF and SAPS in active duty, and contract workers. Employers with more than twenty staff must have health-and-safety reps and committees, and claims must be reported within seven days by the employer and twelve months overall.` },
    { s: 'NALEDI', t: `Excellent. Exam tip: those four case studies — George, Sipho, Margaret, and Fred — are basically a template for how COIDA scenario questions are built. Practise applying the same three-part test: genuine employee, work-related, properly reported.` },
    { s: 'MICHAEL', t: `Locking that in. Next episode is BEE, right?` },
    { s: 'NALEDI', t: `Black Economic Empowerment and Broad-Based Black Economic Empowerment. A big one, and genuinely relevant to how South African business ownership actually looks today.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  file: 'Episode 6 - Black Economic Empowerment & B-BBEE Act No. 53 of 2003',
  segs: [
    { s: 'AMELIA', t: `Episode 6: Black Economic Empowerment and Broad-Based Black Economic Empowerment Act No. 53 of 2003` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Unit 6 — Black Economic Empowerment and Broad-Based Black Economic Empowerment, Act No. 53 of 2003. BEE and B-BBEE.` },
    { s: 'MICHAEL', t: `I hear "BEE" mentioned in almost every business conversation adults have. What is it actually, properly?` },
    { s: 'NALEDI', t: `It's South African society's direct response to the fact that, under apartheid, Black, Coloured, and Indian people, women, and people with disabilities were deliberately excluded from fully participating in the economy — not just from jobs, but from ownership, management, and wealth itself.` },
    { s: 'MICHAEL', t: `So this is bigger than just hiring — it's about who actually owns and runs businesses.` },
    { s: 'NALEDI', t: `Exactly, and that's the key difference from the Employment Equity Act we covered earlier. EEA is about fair treatment and hiring. BEE is about ownership, management control, and the structure of the economy itself. In 2003 government defined B-BBEE as "an integrated and coherent socio-economic process that directly contributes to the economic transformation of South Africa."` },
    { s: 'MICHAEL', t: `Was there an earlier, simpler version of this law?` },
    { s: 'NALEDI', t: `Yes, and this is a good story for understanding why it changed. The first Codes of Good Practice in 2003 were just called BEE — Black Economic Empowerment. But it was criticised as too narrow, because it mostly measured equity ownership and management representation, which ended up benefiting a small, already well-connected group of people rather than spreading wealth broadly.` },
    { s: 'MICHAEL', t: `So they went back and fixed it?` },
    { s: 'NALEDI', t: `They did — the B-BBEE Act came into effect in January 2004 to aim for a much wider spread of wealth. Then in 2007, a full Code of Good Practice replaced the earlier rules, broken into nine sections: the Measurement Framework, Ownership, Management Control, Employment, Skills Development, Preferential Procurement, Enterprise Development, Socio-Economic Development, and rules for Qualifying Small Enterprises.` },
    { s: 'MICHAEL', t: `That's a lot of categories. How does a company actually get "measured" on all this?` },
    { s: 'NALEDI', t: `This is the part that comes up constantly in exams — the seven pillars, or seven criteria, of B-BBEE measurement, split between direct and indirect empowerment. Direct empowerment covers Equity Ownership, worth 20%, and Management, worth 10% — that's 30% total. Indirect empowerment covers Employment Equity at 15%, Skills Development at 15%, Preferential Procurement at 20%, Enterprise Development at 15%, and Socio-Economic Development at 5% — that's 70% total. Add it all together and you get 100%.` },
    { s: 'MICHAEL', t: `So when people talk about a company's "BEE rating" or "BEE level," that score comes from this exact breakdown?` },
    { s: 'NALEDI', t: `Precisely. And it's measured by SANAS — the South African National Accreditation System — or another agency SANAS has approved. Even if a business measures itself, it still has to follow these official Codes.` },
    { s: 'MICHAEL', t: `Give me an actual example of this playing out.` },
    { s: 'NALEDI', t: `Think about government tenders — say, a municipality putting out a tender to build a community hall. Preferential Procurement, one of those seven pillars, means the municipality is required to favour suppliers and contractors with strong B-BBEE ratings when awarding that tender, even if a competitor's price is slightly lower. That's the policy working exactly as designed — using government's own spending power to drive transformation.` },
    { s: 'MICHAEL', t: `What are the actual benefits businesses and the country get from this?` },
    { s: 'NALEDI', t: `It forces businesses to directly confront redress and equity rather than ignoring it. It provides real benchmarks companies can measure themselves against. It drives human resource development through training, promotes employment equity, and encourages enterprise development — meaning established companies helping smaller, black-owned businesses grow, sometimes through mentorship or by becoming reliable clients.` },
    { s: 'MICHAEL', t: `And the criticisms — because I know there are a lot, publicly.` },
    { s: 'NALEDI', t: `Quite a few, and the textbook is upfront about them. Some employees end up getting hired based on their BEE contribution to a company's score rather than pure ability. Not every business takes the Codes seriously. In some cases, BEE processes end up benefiting only a small, connected circle of people rather than being genuinely broad-based — which was literally the problem the 2004 Act was meant to fix in the first place. Corruption and "jobs for friends" can creep in. And ownership and investment restructuring can create real tension between shareholders.` },
    { s: 'MICHAEL', t: `This unit also mentioned human rights and the environment — that felt like a jump from the rest of the chapter.` },
    { s: 'NALEDI', t: `It's actually a deliberate part of the "broad-based" approach — B-BBEE isn't only about the balance sheet. The Bill of Rights in our Constitution guarantees equality, human dignity, freedom from forced labour, and fair treatment in the workplace, and B-BBEE's broader philosophy leans on those same values. There's also a strong focus on inclusivity — giving everyone equal opportunity regardless of race, gender, sexual orientation, disability, or HIV status — and on environmental responsibility, like making sure working conditions don't harm employees' health, and that businesses don't cause unnecessary pollution or ecological damage.` },
    { s: 'MICHAEL', t: `How is compliance actually enforced? Are there fines like the other Acts?` },
    { s: 'NALEDI', t: `This is genuinely different from most of the other units, and it's a common trick question. Because the Codes of Good Practice only came into effect in February 2007, it's actually quite hard to measure exact compliance nationally. And — unlike the EEA — there's no specific legal penalty for non-compliance with B-BBEE targets, as long as a company can show it's moving in the right direction. It's more about incentive than punishment: strong BEE ratings win you tenders and business relationships; weak ratings cost you those opportunities.` },
    { s: 'MICHAEL', t: `So the "penalty" is really just missing out on business, not a fine from a court?` },
    { s: 'NALEDI', t: `Exactly — and that distinction is exam gold, because students often assume every Act in this chapter works the same way, with courts and fines. B-BBEE doesn't operate that way.` },
    { s: 'MICHAEL', t: `Let me recap. B-BBEE exists to correct the economic exclusion of the apartheid era — not just in hiring, but in ownership and management. Companies are measured across seven pillars worth 100% combined, split between direct empowerment — ownership and management — and indirect empowerment — employment equity, skills development, procurement, enterprise development, and socio-economic development. It's also tied to broader human rights, inclusivity, and environmental values, and unlike most other Acts in this chapter, there's no direct legal penalty — just lost business opportunities for low scorers.` },
    { s: 'NALEDI', t: `Spot on. Exam tip: memorise the seven pillars and their exact percentages — 20, 10, 15, 15, 20, 15, 5 — because graph and pie-chart interpretation questions on this exact breakdown appear almost every year.` },
    { s: 'MICHAEL', t: `Noted. Next episode — the National Credit Act?` },
    { s: 'NALEDI', t: `Correct — this is where we talk about debt, credit cards, and why your bank can't just refuse you without a reason.` },
    { s: 'MICHAEL', t: `Very relevant to my future. See you there.` },
  ],
},

{
  file: 'Episode 7 - National Credit Act No. 34 of 2005',
  segs: [
    { s: 'AMELIA', t: `Episode 7: National Credit Act No. 34 of 2005` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Unit 7 — the National Credit Act, No. 34 of 2005. The NCA.` },
    { s: 'MICHAEL', t: `Credit — like buying something on account, or a loan?` },
    { s: 'NALEDI', t: `Exactly. Credit is when a customer gets goods or money now, on the understanding they'll pay later. The NCA exists because, historically, many South Africans — especially people who couldn't read or write, or who had no access to formal banks — were exploited by lenders. They'd sign agreements they didn't fully understand and end up trapped in unpayable debt.` },
    { s: 'MICHAEL', t: `So this is really about protecting people from predatory lending?` },
    { s: 'NALEDI', t: `That's the heart of it. The Act aims to improve consumer protection, promote full participation in the economy for all South Africans, and specifically protect people who were previously disadvantaged and had limited access to fair credit. Before the Act, a huge portion of low-income South Africans could only borrow from micro-lenders, often at hugely inflated repayment terms.` },
    { s: 'MICHAEL', t: `What actually changed for the average person because of this law?` },
    { s: 'NALEDI', t: `A lot, and this is where it gets genuinely useful for your own life. First, credit providers must give you information that lets you make an informed decision — for example, product labels must now disclose additives and quantities, not hide them. Second, you have the right to apply for credit free from discrimination, and before anyone can lend to you, they must actually check whether you can afford to repay it — that's called responsible lending.` },
    { s: 'MICHAEL', t: `Wait — so a bank checking my ability to repay before giving me a loan is actually a legal requirement, not just them being cautious?` },
    { s: 'NALEDI', t: `Correct, it's compulsory under the Act. It protects you from being handed debt you can't handle, and it protects the credit provider from reckless lending. Third — your credit agreement must be written in plain, understandable language, and you're entitled to a copy of it, even a replacement copy if you lose the original.` },
    { s: 'MICHAEL', t: `No more fine print nobody can actually read?` },
    { s: 'NALEDI', t: `That's the intention, yes. Fourth, your personal information is protected — a bank can't sell your details to, say, a retail store for marketing purposes without your consent. Fifth, if your credit application is refused, you have the right to know why. A bank cannot simply reject your bond application and give you no explanation.` },
    { s: 'MICHAEL', t: `And what if someone's already deep in debt — is there a way out that isn't just... default and lose everything?` },
    { s: 'NALEDI', t: `Yes, and this is one of the most important protections in the whole Act — the right to a Debt Counsellor. If you're over-extended, a Debt Counsellor can help you restructure your debt into a manageable repayment plan, so you don't automatically forfeit assets like your house or car. A business can't just walk in and repossess your belongings — there's a proper legal process, and debt counselling is part of protecting you within it.` },
    { s: 'MICHAEL', t: `The textbook had a case study about this — Dorothy, right?` },
    { s: 'NALEDI', t: `Dorothy's a perfect example of exactly what this Act was built for. She's borrowed money for her house and her car, maxed out her credit card, and bought clothes on account — her total debt is over R300,000, and she can't cover her monthly repayments and still afford food. She's genuinely anxious about losing her assets.` },
    { s: 'MICHAEL', t: `What would you actually tell her?` },
    { s: 'NALEDI', t: `The realistic, exam-appropriate advice is: Dorothy should approach a registered Debt Counsellor immediately, who can assess her full financial position and negotiate a restructured repayment plan with all her different credit providers — rather than her trying to juggle everything alone or ignoring the problem, which only makes it worse. She should also stop taking on any new credit immediately, and prioritise essentials like food over discretionary debt repayments while the restructuring is negotiated.` },
    { s: 'MICHAEL', t: `Are there different "sizes" of credit agreement? I remember something about small, intermediate, and large.` },
    { s: 'NALEDI', t: `Yes, and the exact numbers are worth memorising. A small agreement has a credit limit of R15,000 or less. An intermediate agreement is above R15,000 but under R250,000. A large agreement exceeds R250,000 — think a mortgage bond. Before any of these are signed, the credit provider must give you pre-agreement documentation showing the interest rate and the exact repayment amount and period.` },
    { s: 'MICHAEL', t: `Does this cover everything — like a stokvel, or renting a house?` },
    { s: 'NALEDI', t: `Good instinct to ask — no, not everything is covered. Insurance policies, leases on immovable property like houses or business premises, and stokvels are all specifically excluded from the Act's definition of a credit agreement.` },
    { s: 'MICHAEL', t: `Interesting that stokvels are excluded — those are such a big part of everyday South African life.` },
    { s: 'NALEDI', t: `Exactly, and that's precisely why it's a good exam fact to know — stokvels run on trust and community agreement, not formal credit regulation, so the NCA deliberately leaves them alone.` },
    { s: 'MICHAEL', t: `Who actually has to register as a credit provider under this Act?` },
    { s: 'NALEDI', t: `Any bank or credit provider with 100 or more credit agreements, or a total book value of R500,000 or more, must register with the National Credit Regulator. The Regulator's job is to oversee compliance, educate consumers about their rights, register businesses, investigate complaints, and specifically work to make credit accessible to people in remote or low-income communities who were historically shut out.` },
    { s: 'MICHAEL', t: `What happens if a credit provider just ignores all this?` },
    { s: 'NALEDI', t: `Failing to register in the first place is already non-compliance. And for serious breaches — a credit provider or debt counsellor who doesn't follow the Act's regulations can even face criminal prosecution, not just a fine. That's a heavier consequence than most of the other Acts we've covered.` },
    { s: 'MICHAEL', t: `And discrimination specifically — how does that show up here?` },
    { s: 'NALEDI', t: `Anyone can apply for credit, and if a provider refuses someone, they must give reasons. Credit cannot be refused purely because of gender, language, disability, or any other ground listed in the Employment Equity Act. If a business does refuse credit on those grounds, that's discriminatory, full stop.` },
    { s: 'MICHAEL', t: `Let me recap. The NCA protects consumers in the credit market — plain-language agreements, mandatory affordability checks before lending, the right to know why you were refused, protection of your personal information, and access to Debt Counsellors if you're over-extended. Credit agreements are split into small, intermediate, and large by value, some things like stokvels and leases are excluded entirely, and providers must register with the National Credit Regulator or risk criminal prosecution.` },
    { s: 'NALEDI', t: `Great summary. Exam tip: Dorothy's case study is a template for any "advise the consumer" question in this unit — always mention debt counselling and restructuring by name, examiners specifically look for those terms.` },
    { s: 'MICHAEL', t: `Locking that one in too. Last unit next — Consumer Protection Act?` },
    { s: 'NALEDI', t: `Correct, the final one — and honestly one of the most useful ones for your everyday life as a shopper.` },
    { s: 'MICHAEL', t: `See you there.` },
  ],
},

{
  file: 'Episode 8 - Consumer Protection Act No. 68 of 2008',
  segs: [
    { s: 'AMELIA', t: `Episode 8: Consumer Protection Act No. 68 of 2008` },
    { s: 'NALEDI', t: `Welcome back to The Business Brief. Our final unit in Chapter 1 — the Consumer Protection Act, No. 68 of 2008. The CPA.` },
    { s: 'MICHAEL', t: `This is the one about returning stuff to shops, right?` },
    { s: 'NALEDI', t: `That's part of it, but it goes much deeper. Like the other Acts in this chapter, the CPA was introduced to counter the discriminatory laws of the past — laws that left many South Africans unable to fully participate as consumers, and often left them open to abuse and exploitation in the marketplace.` },
    { s: 'MICHAEL', t: `What's its actual purpose, in the exam's own words?` },
    { s: 'NALEDI', t: `Three parts, and they're worth learning exactly. First, to promote and protect the economic interests of consumers by improving their access to information, so they can make informed choices based on their own needs. Second, to protect consumers from hazards to their well-being and safety. Third, to promote and provide for consumer education, including understanding the social and economic effects of the choices they make.` },
    { s: 'MICHAEL', t: `Give me the core consumer rights — the ones I'd actually use.` },
    { s: 'NALEDI', t: `There are four fundamental ones the textbook highlights. The right to fair and responsible marketing — meaning businesses can't mislead you with false advertising. The right to choose which goods you buy, and from whom — no one can force you into a purchase. The right to return goods if they're not satisfactory. And the right to accurate information about what's being sold to you.` },
    { s: 'MICHAEL', t: `Okay, "return goods if not satisfactory" — everyone has an opinion about how this actually works in practice.` },
    { s: 'NALEDI', t: `Here's the nuance worth knowing: this doesn't mean you can return anything for any reason forever. It means goods have to genuinely meet a reasonable standard of quality and be fit for the purpose they were sold for. If you buy a phone charger and it stops working within days under normal use, you have the right to return it. If you simply changed your mind about a jacket a month later with the tags removed, that's a different, more limited situation depending on the store's own policy.` },
    { s: 'MICHAEL', t: `That distinction actually clears up a lot of arguments I've seen at customer service counters.` },
    { s: 'NALEDI', t: `Exactly why it's worth understanding properly, not just memorising the phrase "right to return goods."` },
    { s: 'MICHAEL', t: `What are the wider benefits of this Act for consumers generally?` },
    { s: 'NALEDI', t: `It protects you from hazards to your health and safety — think of recalled products, like a faulty appliance being pulled from shelves. It forces businesses to provide consumer education. It promotes a fair, accessible, and sustainable marketplace generally. And it gives consumers the freedom to associate — to form or join consumer organisations that advocate for shared interests, which gives ordinary people collective bargaining power against big businesses.` },
    { s: 'MICHAEL', t: `And the business side — what are the actual downsides for a company trying to comply?` },
    { s: 'NALEDI', t: `Businesses now have to disclose a lot more information about their products and processes than before, which can be a real administrative burden. It's also become far easier for consumers to demand a refund or return an item, which can be costly for businesses. Some businesses feel the compliance processes are simply expensive and time-consuming, and worry that the Act makes it easier for a small number of dishonest consumers to take advantage of return policies.` },
    { s: 'MICHAEL', t: `What actually happens if a business breaks this law?` },
    { s: 'NALEDI', t: `Serious cases go to the courts, and consumers can be compensated based on how badly their rights were infringed. Every case is dealt with individually by the National Consumer Commission, which is actually established by this very Act. And the penalties are steep — the Commission can fine a business anywhere from R1 million up to 10% of its annual turnover, whichever amount is greater.` },
    { s: 'MICHAEL', t: `Ten percent of annual turnover — for a big retailer, that could be an enormous number.` },
    { s: 'NALEDI', t: `Exactly, and that's a deliberate design choice — the bigger the company, the bigger the potential fine, so the penalty actually scales with the size and impact of the business, not just a flat amount that a huge company could shrug off.` },
    { s: 'MICHAEL', t: `What counts as discrimination under this specific Act?` },
    { s: 'NALEDI', t: `Any action that's socially irresponsible or unfair to customers. Specifically: denying customers proper information about products or services, selling products or services that are unsafe, or misleading customers through false advertising or communication. Businesses may not deny consumers proper information as a way of gaining an unfair advantage over them.` },
    { s: 'MICHAEL', t: `Let's connect this to real life — what's an example that would actually happen to someone my age?` },
    { s: 'NALEDI', t: `Picture buying a pair of sneakers online through an app, and the listing shows completely different images and material to what actually arrives. Under the CPA, you'd have the right to accurate information about what you were buying, and grounds to return the item and get your money back, because the business misled you through false advertising.` },
    { s: 'MICHAEL', t: `Or say a spaza shop sells expired food without telling anyone?` },
    { s: 'NALEDI', t: `That's a strong example too — that would breach your right to be protected from hazards to your health and safety, and potentially count as discriminatory conduct under the Act, since the shop is knowingly denying customers safety and proper product information.` },
    { s: 'MICHAEL', t: `This brings us to the end of Chapter 1 — all eight Acts. Let me try to recap the whole chapter in a nutshell, one line per Act.` },
    { s: 'NALEDI', t: `Go for it.` },
    { s: 'MICHAEL', t: `Skills Development Act — funds and structures workplace training through a 1% levy and SETAs. Labour Relations Act — governs strikes, unions, and dispute resolution through the CCMA and Labour Courts. Employment Equity Act — bans unfair discrimination in hiring and drives affirmative action for designated groups. Basic Conditions of Employment Act — sets the legal floor for hours, leave, and pay. COIDA — no-fault compensation for workplace injury, illness, or death. B-BBEE — drives ownership, management, and economic transformation across seven measured pillars. National Credit Act — protects consumers from reckless lending and predatory credit. And Consumer Protection Act — protects consumers' safety, information, and fair treatment in the marketplace.` },
    { s: 'NALEDI', t: `That is a genuinely excellent one-paragraph summary of the entire chapter — and honestly, that's close to exactly what a good answer to the long-answer question at the end of the chapter's exam practice looks like, where you're asked to pick any two Acts and explain their purpose and impact.` },
    { s: 'MICHAEL', t: `Speaking of the exam — should we do one more episode just on that?` },
    { s: 'NALEDI', t: `Great idea. Let's do a bonus revision episode, where we go head-to-head on some real exam-style questions from this chapter, and I'll show you exactly how examiners expect these answers to be structured.` },
    { s: 'MICHAEL', t: `I'm both excited and terrified. See you there.` },
    { s: 'NALEDI', t: `This has been The Business Brief — Chapter 1 complete. One more episode to go.` },
  ],
},

{
  file: 'Episode 9 (Bonus) - Chapter 1 Exam Revision Round-Up',
  segs: [
    { s: 'AMELIA', t: `Bonus Episode: Chapter 1 Exam Revision Round-Up` },
    { s: 'NALEDI', t: `Welcome to a bonus episode of The Business Brief. We've covered all eight Acts in Chapter 1 — Macro Environment: Impact of Recent Legislation on Business. Today, no new content. We're going straight into exam mode.` },
    { s: 'MICHAEL', t: `I'm nervous, but let's do it. Where are we starting?` },
    { s: 'NALEDI', t: `With the chapter's own summary table first, because this is genuinely how the textbook wants you to hold all eight Acts in your head at once — side by side, comparing Nature, Purpose, Rights protected, Compliance and penalties, and Discriminatory acts.` },
    { s: 'MICHAEL', t: `Quiz me. Give me the Act, I'll try to recall the purpose.` },
    { s: 'NALEDI', t: `Skills Development Act.` },
    { s: 'MICHAEL', t: `Develop the skills of people in South Africa to improve productivity.` },
    { s: 'NALEDI', t: `Labour Relations Act.` },
    { s: 'MICHAEL', t: `Promotes procedures for the resolution of labour disputes.` },
    { s: 'NALEDI', t: `Employment Equity Act.` },
    { s: 'MICHAEL', t: `Promotes employment equity and regulates affirmative action.` },
    { s: 'NALEDI', t: `Basic Conditions of Employment Act.` },
    { s: 'MICHAEL', t: `Specifies the details and conditions of employment for employers and employees.` },
    { s: 'NALEDI', t: `COIDA.` },
    { s: 'MICHAEL', t: `Sets out the rights and responsibilities when workers are injured or contract a disease at work.` },
    { s: 'NALEDI', t: `B-BBEE.` },
    { s: 'MICHAEL', t: `Ensures a more equitable distribution of jobs and wealth across the economy.` },
    { s: 'NALEDI', t: `National Credit Act.` },
    { s: 'MICHAEL', t: `Legislates the basic rights of consumers in the credit market.` },
    { s: 'NALEDI', t: `And Consumer Protection Act.` },
    { s: 'MICHAEL', t: `Promotes and protects the economic interests of consumers by giving them access to information.` },
    { s: 'NALEDI', t: `Eight for eight. That's actually the exact skill Question 5 in the real exam paper tests — pick any two Acts, state their purpose, then describe their main features and impact on employers and employees. You've basically just proven you could answer that question right now.` },
    { s: 'MICHAEL', t: `Let's try some actual past-paper-style questions then. Hit me.` },
    { s: 'NALEDI', t: `Multiple choice. When the CCMA makes a final and binding ruling regarding a dispute, what is that process called — mediation, conciliation, arbitration, or clarification?` },
    { s: 'MICHAEL', t: `Arbitration. Binding is the keyword — conciliation and mediation are about trying to reach agreement, arbitration is the one where the decision is final.` },
    { s: 'NALEDI', t: `Correct. Next — the Sector Education and Training Authorities were established to do which of the following: develop sector skills plans, approve workplace skills plans, pay grants to qualifying companies, or all of the above?` },
    { s: 'MICHAEL', t: `All of the above — SETAs do all three of those jobs.` },
    { s: 'NALEDI', t: `Correct again. Third one — the National Credit Act recognises all credit agreements, except which of the following: credit cards, housing bonds, stokvels, or pawn agreements?` },
    { s: 'MICHAEL', t: `Stokvels — we covered that one specifically, stokvels run on community trust, not formal credit regulation, so they're excluded from the Act.` },
    { s: 'NALEDI', t: `Exactly right. Last one — who contributes to the Compensation for Occupational Injuries and Diseases Fund: only employees, only employers, both, or only those who choose to?` },
    { s: 'MICHAEL', t: `Only employers. No deductions come out of the employee's salary for COIDA.` },
    { s: 'NALEDI', t: `Four for four. Now let's do a real case-study question — this is the one about the insurance job advert. Listen carefully: "Insurance firm looking for young lady with experience in marketing department. Job requires the successful candidate to use lists of clients' details for telesales and marketing campaigns." Question: this advertisement could be seen as discriminatory. Discuss.` },
    { s: 'MICHAEL', t: `Okay — "young lady" specifically excludes men and older applicants, which is discrimination based on gender and age, neither of which is a genuine requirement for doing marketing work.` },
    { s: 'NALEDI', t: `Good. And which Act would support that claim?` },
    { s: 'MICHAEL', t: `The Employment Equity Act — it prohibits unfair discrimination in employment practices, including job advertisements.` },
    { s: 'NALEDI', t: `Exactly. Now here's the second layer examiners want you to catch — there's another Act being violated here too, separate from the hiring discrimination. Any thoughts?` },
    { s: 'MICHAEL', t: `Hmm... it mentions using "lists of clients' details" for telesales. That sounds like it could be a Consumer Protection Act issue — using people's personal information for marketing without them necessarily agreeing to it.` },
    { s: 'NALEDI', t: `Exactly the connection the exam is testing — the CPA and the general principle we saw in the National Credit Act too, that personal information can't just be shared or used for marketing without proper consent. Businesses need to link related Acts together like this to score full marks on the higher-level questions.` },
    { s: 'MICHAEL', t: `That's honestly the hardest part — knowing which Acts connect to each other.` },
    { s: 'NALEDI', t: `Which is exactly why we did each Act as its own episode, but always pointed out the overlaps. Let's do one more — the Thomas job description case study, quickfire. Working hours 07:00 to 17:00, Monday to Friday — compliant or not?` },
    { s: 'MICHAEL', t: `Compliant — that's within the 45-hour weekly maximum.` },
    { s: 'NALEDI', t: `Overtime paid at his normal daily rate.` },
    { s: 'MICHAEL', t: `Not compliant — overtime on weekdays must be 1.5 times his normal rate, not equal to it.` },
    { s: 'NALEDI', t: `Public holiday work paid at his normal daily rate.` },
    { s: 'MICHAEL', t: `Not compliant — public holidays must be paid at double rate.` },
    { s: 'NALEDI', t: `Family Responsibility Leave not normally granted.` },
    { s: 'MICHAEL', t: `Not compliant — he's entitled to three days a year after four months of service.` },
    { s: 'NALEDI', t: `Eighteen days annual leave in his first full year.` },
    { s: 'MICHAEL', t: `Compliant — that meets the legal minimum when calculated proportionally.` },
    { s: 'NALEDI', t: `You just answered a twenty-mark question in under a minute. That's the exact method for these BCEA scenario questions — go line by line, compare each item to the legal minimum, don't try to judge the whole scenario as one block.` },
    { s: 'MICHAEL', t: `Any final advice before exam day?` },
    { s: 'NALEDI', t: `Three things. One — learn the exact numbers. Percentages, days, rands, deadlines. These Acts are full of specific figures, and examiners test them directly: the 1% skills levy, the R500,000 payroll threshold, R500,000 to R900,000 EEA fines, R1 million or 10% turnover CPA fines, the 45-hour work week, the seven B-BBEE pillars and their percentages. Two — always link an Act to its purpose in one clean sentence before you explain the details; examiners give marks for stating the purpose correctly even before you go deeper. Three — when a case study is given, identify exactly which Act applies before you start answering, because half of these questions are really just testing whether you can recognise which law is actually relevant to the scenario.` },
    { s: 'MICHAEL', t: `Numbers, purpose first, identify the Act. Got it.` },
    { s: 'NALEDI', t: `And that's Chapter 1, completely done — eight Acts, plus this revision round-up. You now genuinely understand more about South African business legislation than most working adults do.` },
    { s: 'MICHAEL', t: `High praise. Thanks, Naledi.` },
    { s: 'NALEDI', t: `Good luck out there. This has been The Business Brief.` },
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
    console.warn('⚠ ffmpeg not found — episodes will be raw-concatenated (no pauses between lines). Install ffmpeg for cleaner pacing.\n');
  }

  console.log(`The Business Brief — Chapter 1 — ${EPISODES.length} episodes\n`);

  for (const ep of EPISODES) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, silenceLong);
  }

  console.log(`\n✅ All episodes processed. Check ${OUT_DIR} for the final files.`);
}

main().catch(e => { console.error(e); process.exit(1); });

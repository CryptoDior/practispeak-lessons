/**
 * DNA Chapter 1 Podcast — ElevenLabs audio generator
 * ----------------------------------------------------
 * Usage (from the project root, in a terminal that has internet access —
 * this will NOT work from inside Cowork's sandbox, run it on your own machine):
 *
 *   node --env-file=.env.local scripts/generate-dna-podcast-audio.mjs
 *
 * What it does:
 *  1. Generates one audio clip per line of dialogue (Naledi / Michael) and
 *     per part-title announcement (Amelia), using the ELEVENLABS_API_KEY
 *     already in your .env.local.
 *  2. Skips any file that already exists, so if a run gets interrupted or a
 *     line fails, just run the script again and it'll only fill the gaps.
 *  3. Tries the "eleven_v3" model first (so the [warmly]/[laughs]-style audio
 *     tags in the script are read as delivery direction, per the script's own
 *     production note). If your account/plan doesn't have v3 access, it
 *     automatically falls back to eleven_turbo_v2_5 with the tags stripped
 *     out (so they don't get read aloud literally).
 *  4. Stitches every clip together, in order, into one final podcast file —
 *     using ffmpeg if it's installed (cleaner, with short pauses between
 *     lines and longer pauses around part titles), or a simple raw
 *     concatenation fallback if ffmpeg isn't found.
 *
 * Output:
 *   podcasts/tmp/dna-chapter1/*.mp3   (individual clips, kept for resuming)
 *   podcasts/DNA-Chapter1-Podcast.mp3 (final stitched episode)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const ELEVENLABS_KEY = process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ELEVENLABS_API_KEY. Run with: node --env-file=.env.local scripts/generate-dna-podcast-audio.mjs');
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
const TMP_DIR = path.join(ROOT, 'podcasts', 'tmp', 'dna-chapter1');
const OUT_FILE = path.join(ROOT, 'podcasts', 'DNA-Chapter1-Podcast.mp3');

// ─────────────────────────────────────────────────────────────────────────
// SCRIPT — ordered segments. AMELIA lines are part-title announcements;
// EXAM TIP callouts and the closing Quick-Reference Recap are intentionally
// left out (reference material, not meant for the audio track).
// ─────────────────────────────────────────────────────────────────────────
const S = [
  { s: 'AMELIA', t: `The Code of Life — Chapter 1: DNA. Episode 1: DNA, The Code of Life.` },
  { s: 'NALEDI', t: `[warmly] Hey everyone, welcome back to the show — today we're kicking off a brand-new chapter, and honestly, it's one of my favourites. We're talking DNA.` },
  { s: 'MICHAEL', t: `[curious] Ooh, the "code of life" one. I've seen this title in my textbook and just... skipped past it because it looked intense.` },
  { s: 'NALEDI', t: `[laughs] That's exactly why we're doing this. By the end of this episode, you're going to be explaining DNA to your friends.` },
  { s: 'MICHAEL', t: `Bold claim. I'm holding you to that.` },
  { s: 'NALEDI', t: `Deal. So here's the big picture before we zoom in: every living organism — you, me, a mushroom, a mosquito — contains two related molecules: DNA and RNA. We're going to look at where they're found, what they're built from, and what they actually do. Then we get into how DNA copies itself, and how proteins get built using instructions from both DNA and RNA.` },
  { s: 'MICHAEL', t: `Okay, so it's basically an instruction manual.` },
  { s: 'NALEDI', t: `That's a great way to think of it, and we'll come back to that analogy a lot today, because it holds up surprisingly well.` },

  { s: 'AMELIA', t: `PART 1: Back to Basics — The Cell` },
  { s: 'NALEDI', t: `Before we even touch DNA, we need to revise where it actually lives. Because in an exam, they love asking you to identify structures in a diagram or explain locations.` },
  { s: 'MICHAEL', t: `Right, so — cell structure. I remember cytoplasm, ribosomes... that's about it.` },
  { s: 'NALEDI', t: `Let's rebuild it properly. Picture a cell like a busy little factory. The cytoplasm is the watery base substance the whole factory floor is filled with — it's where all the organelles float around, and it's also where a lot of the cell's chemical reactions, the metabolic reactions, actually happen.` },
  { s: 'MICHAEL', t: `So it's not just "empty space with stuff in it," it's actually doing something.` },
  { s: 'NALEDI', t: `Exactly — it's an active workspace, not a waiting room. Now, scattered through that cytoplasm — and also attached to a structure called the endoplasmic reticulum — you've got ribosomes. Small, round structures.` },
  { s: 'MICHAEL', t: `And ribosomes do... protein synthesis, right? I remember that much.` },
  { s: 'NALEDI', t: `Correct! They're literally the site where proteins get built. And here's a detail people forget: ribosomes aren't only free-floating or on the endoplasmic reticulum — you also find smaller numbers of them inside other organelles, like the chloroplast and the mitochondria.` },
  { s: 'MICHAEL', t: `[curious] Wait, why would a mitochondrion need its own ribosomes?` },
  { s: 'NALEDI', t: `Great question — hang onto that thought, because it connects directly to something called extra-nuclear DNA, which we'll get to shortly. Small teaser: mitochondria have their own DNA, separate from the DNA in the nucleus, so they need their own protein-building machinery too.` },
  { s: 'MICHAEL', t: `Ohh. Okay, filing that away.` },
  { s: 'NALEDI', t: `Now, when you see a group of ribosomes clustered together, working on the same strand — that cluster is called polysomes.` },
  { s: 'MICHAEL', t: `So one ribosome, fine, but a little team of them together is a polysome.` },
  { s: 'NALEDI', t: `Exactly.` },

  { s: 'AMELIA', t: `PART 2: The Nucleus — Command Centre of the Cell` },
  { s: 'MICHAEL', t: `Okay, now the big one — the nucleus. I know it's "the control centre," but that's basically all I've got.` },
  { s: 'NALEDI', t: `That phrase is actually a perfect one-liner for an exam answer: the nucleus controls all of the cell's activities. But let's unpack what's actually inside it, because there are four parts you need cold.` },
  { s: 'MICHAEL', t: `Hit me.` },
  { s: 'NALEDI', t: `First — the nuclear membrane. It's a double membrane, so two layers, and it completely encloses the nucleus. But it's not sealed shut — it has small pores in it.` },
  { s: 'MICHAEL', t: `Pores, like little doors?` },
  { s: 'NALEDI', t: `Exactly like little doors. Substances need to move in and out of the nucleus constantly, so those pores allow that passage.` },
  { s: 'MICHAEL', t: `Makes sense — you can't run a control centre that's completely cut off from the rest of the factory.` },
  { s: 'NALEDI', t: `Nice. Second part: the nucleoplasm. This is a jelly-like fluid that fills the inside of the nucleus — think of it as the cytoplasm's cousin, but specifically inside the nucleus.` },
  { s: 'MICHAEL', t: `Jelly-like fluid, got it. What's next?` },
  { s: 'NALEDI', t: `The nucleolus — and don't mix this up with the nucleus itself, it's a common exam trap. The nucleolus is a dark body suspended inside the nucleoplasm. It contains free nucleotide bases, and — this is the part students forget — it actually produces ribosomes.` },
  { s: 'MICHAEL', t: `Wait, so the nucleus builds the machines that later go and build proteins?` },
  { s: 'NALEDI', t: `Exactly right. The nucleolus manufactures ribosomes, which then do their protein-synthesis job out in the cytoplasm.` },
  { s: 'MICHAEL', t: `Okay and the fourth part?` },
  { s: 'NALEDI', t: `The chromatin network. This is found in the nucleoplasm, and it's the big one for us today, because it contains the actual DNA — which forms the chromosomes that carry the genetic code of a person or organism.` },
  { s: 'MICHAEL', t: `Hold on — you've said "chromosomes" a few times now, but what actually is a chromosome? Is it just another word for DNA?` },
  { s: 'NALEDI', t: `Good catch, worth pinning down properly. A chromosome is a structure made of DNA combined with proteins called histones — and its job is to organise and compact that DNA so it actually fits inside the nucleus.` },
  { s: 'MICHAEL', t: `So DNA on its own is just loose, and a chromosome is DNA neatly packaged up?` },
  { s: 'NALEDI', t: `Exactly — think of a chromosome as DNA's suitcase. If you just stuffed metres of loose DNA straight into a nucleus, it'd be a tangled mess. Wrapping it around histones and organising it into a chromosome is what makes it manageable and compact.` },
  { s: 'MICHAEL', t: `So if I had to draw this from memory... outer double membrane with pores, jelly nucleoplasm inside, a dark nucleolus blob suspended in there making ribosomes, and then the chromatin network holding the DNA.` },
  { s: 'NALEDI', t: `That's a perfect answer, word for word what an examiner wants to see.` },

  { s: 'AMELIA', t: `PART 3: Nucleic Acids and the Nucleotide — The Building Block` },
  { s: 'MICHAEL', t: `Okay so now we're getting to DNA itself?` },
  { s: 'NALEDI', t: `Almost — one more layer of "zooming in" first. DNA and RNA are both types of nucleic acid, which is just a category of organic compound. And like most big biological molecules, they're built from repeating smaller units.` },
  { s: 'MICHAEL', t: `Monomers and polymers — I remember this from other chapters. Monomer is the small building block, polymer is the long chain made of many of them.` },
  { s: 'NALEDI', t: `Exactly, and you're already ahead of the game. In this case, the monomer — the building block — is called a nucleotide.` },
  { s: 'MICHAEL', t: `So DNA and RNA are basically long polymer chains made of nucleotide monomers.` },
  { s: 'NALEDI', t: `That's it exactly. Now here's the structure of a single nucleotide, and I want you to picture this because it comes up constantly. Every nucleotide has three parts.` },
  { s: 'MICHAEL', t: `Okay.` },
  { s: 'NALEDI', t: `One — a phosphate group. Think of it as a little round hub. Two — a sugar molecule, shaped a bit like a pentagon, attached to the phosphate. And three — a nitrogenous base, which sticks off the side of the sugar.` },
  { s: 'MICHAEL', t: `Phosphate, sugar, base. Is there a shortcut for that?` },
  { s: 'NALEDI', t: `People usually just remember it as P-S-NB. Phosphate, Sugar, Nitrogenous Base. And in a nucleotide chain, the phosphates and sugars keep linking to each other — phosphate, sugar, phosphate, sugar — forming what becomes the "backbone," while the bases stick outward.` },
  { s: 'MICHAEL', t: `Backbone and bases sticking out — that's actually a nice mental picture. Like a fish spine with bones sticking off the side.` },
  { s: 'NALEDI', t: `I like that one, steal it for your exam scratch paper.` },

  { s: 'AMELIA', t: `PART 4: DNA — Deoxyribonucleic Acid` },
  { s: 'NALEDI', t: `Alright. Now let's actually get into DNA properly.` },
  { s: 'MICHAEL', t: `Finally! Okay, deoxyribonucleic acid — that's a mouthful.` },
  { s: 'NALEDI', t: `It really is, which is exactly why we just say "DNA." But let's break down what it actually is: DNA is made up of nucleotides, like we just discussed, and its nitrogenous bases are adenine, thymine, guanine, and cytosine.` },
  { s: 'MICHAEL', t: `A, T, G, C. I've definitely seen those letters before.` },
  { s: 'NALEDI', t: `You have. And DNA carries the genetic code for protein synthesis — that's its whole purpose, essentially. It's hereditary — meaning the genetic information gets passed from parent to offspring.` },
  { s: 'MICHAEL', t: `Can we talk about the history bit? I actually find that kind of interesting — who figured this out?` },
  { s: 'NALEDI', t: `Definitely, and it's genuinely a good story with a bit of controversy in it too. So — 1952: Rosalind Franklin, along with her assistant Maurice Wilkins, was researching the structure of DNA using a technique called X-ray diffraction.` },
  { s: 'MICHAEL', t: `X-ray diffraction — so basically firing X-rays at DNA to see the pattern it makes?` },
  { s: 'NALEDI', t: `Exactly, and that pattern gives clues about the 3D shape of the molecule. Meanwhile, Watson and Crick were doing their own, independent research. But here's the twist — once they saw Franklin's X-ray images, they proposed a 3D double helix model for DNA in 1953.` },
  { s: 'MICHAEL', t: `[surprised] Wait — so they built their famous model partly because they'd seen her images?` },
  { s: 'NALEDI', t: `That's the historically debated part, yes. And then in 1962, Watson and Crick received the Nobel Prize for the discovery of the structure of DNA. Wilkins also received an award for his X-ray photography work.` },
  { s: 'MICHAEL', t: `What about Franklin?` },
  { s: 'NALEDI', t: `[thoughtful] She had already died of cancer by that point — and the Nobel Prize isn't awarded posthumously, so she never received the recognition alongside them, despite her images being central to the discovery.` },
  { s: 'MICHAEL', t: `[quietly] That's actually kind of a heavy note for a science class.` },
  { s: 'NALEDI', t: `It is, but it's important — and exam papers do sometimes test the sequence of events and who did what, so it's worth knowing the story, not just the date 1953.` },

  { s: 'AMELIA', t: `PART 5: Where Does DNA Actually Live?` },
  { s: 'MICHAEL', t: `Okay, so earlier you teased "extra-nuclear DNA" when we talked about mitochondria. Time to explain that?` },
  { s: 'NALEDI', t: `Time to explain that. So DNA is found in two locations in a cell. Location one — mostly in the nucleus. That's called nuclear DNA, and it's the majority of your DNA.` },
  { s: 'MICHAEL', t: `Makes sense, given everything we just said about the chromatin network living in the nucleus.` },
  { s: 'NALEDI', t: `Exactly, they connect. But a small amount of DNA is found outside the nucleus — that's called extra-nuclear DNA, and there are two types.` },
  { s: 'MICHAEL', t: `Go on.` },
  { s: 'NALEDI', t: `First: chloroplastic DNA, found in the chloroplasts — but only in plant cells, since animal cells don't have chloroplasts.` },
  { s: 'MICHAEL', t: `Right, chloroplasts are the photosynthesis organelles.` },
  { s: 'NALEDI', t: `Exactly — and that's exactly why chloroplastic DNA matters: it's key to running photosynthesis, the process that turns light into chemical energy for the plant.` },
  { s: 'NALEDI', t: `Second type: mitochondrial DNA, found in the mitochondria.` },
  { s: 'MICHAEL', t: `And that's the one that connects to our earlier ribosome question — mitochondria having their own tiny ribosomes because they've got their own separate DNA to work from.` },
  { s: 'NALEDI', t: `You got it — you connected that beautifully. And mitochondrial DNA has its own important role too: it's crucial for energy production, since mitochondria are the cell's energy-generating organelles. There's also a fun real-world use for mitochondrial DNA — it's actually really useful for tracing ancestry, because it's inherited maternally, in a very specific pattern down the mother's line only.` },
  { s: 'MICHAEL', t: `Oh that's cool, like those ancestry DNA test kits.` },
  { s: 'NALEDI', t: `Exactly the same idea.` },

  { s: 'AMELIA', t: `PART 6: The Structure of DNA — Building the Double Helix` },
  { s: 'MICHAEL', t: `Okay, now the famous part. Double helix. Twisty ladder thing.` },
  { s: 'NALEDI', t: `Yes! Let's build it up properly instead of just saying "twisty ladder." DNA has a double helix structure, made of nucleotides linked into long chains — polymers, remember our earlier vocabulary. The sugar specifically in DNA is called deoxyribose sugar, and it's attached to a nitrogenous base.` },
  { s: 'MICHAEL', t: `Deoxyribose — that's actually where the "D" in DNA comes from, right? Deoxyribonucleic acid.` },
  { s: 'NALEDI', t: `Exactly, well spotted. Now, the phosphate and sugar molecules attach to one another with strong bonds, alternating, to form those long chains we mentioned — the backbone.` },
  { s: 'MICHAEL', t: `And the four bases — A, T, G, C — sit off the side of that backbone.` },
  { s: 'NALEDI', t: `Right. And here's where it gets interesting — those bases are complementary, meaning they always join together in a specific, fixed pairing pattern. Adenine always links to thymine. Guanine always links with cytosine.` },
  { s: 'MICHAEL', t: `Always? No exceptions?` },
  { s: 'NALEDI', t: `[emphatically] No exceptions — this is one of the most testable facts in the whole chapter. A pairs with T, G pairs with C. Some people remember it with "A-T, apples and tea," and "G-C, good coffee" — whatever silly phrase sticks for you, use it.` },
  { s: 'MICHAEL', t: `I'm going to go with A-T looking like they're holding hands with two lines, and G-C holding hands with three lines, since I remember G-C has a slightly stronger bond.` },
  { s: 'NALEDI', t: `That's actually a legitimate and useful memory trick, good instinct.` },
  { s: 'MICHAEL', t: `So how does this pairing turn into the actual ladder shape?` },
  { s: 'NALEDI', t: `So, imagine two long strands running side by side — each strand is that phosphate-sugar backbone. The bases stick inward from each strand, and they pair up in the middle: A with T, G with C. That base pairing is what joins the two strands together, forming a long, ladder-like structure.` },
  { s: 'MICHAEL', t: `Okay, ladder — got it.` },
  { s: 'NALEDI', t: `And the bases are held together by weak hydrogen bonds — that word "weak" matters, because it means they can be broken relatively easily, which becomes really important later when we talk about replication.` },
  { s: 'MICHAEL', t: `Filing that away too.` },
  { s: 'NALEDI', t: `Now, that ladder doesn't just sit flat — it becomes coiled, twisted around on itself, and that coiled ladder shape is the double helix structure you always hear about.` },
  { s: 'MICHAEL', t: `And one more thing I always see in diagrams — the DNA strand seems to be wrapped around little balls sometimes.` },
  { s: 'NALEDI', t: `Good catch — those are proteins called histones. The DNA strands wind around histones, which helps package that incredibly long molecule into a manageable, compact shape inside the nucleus.` },

  { s: 'AMELIA', t: `PART 7: The Role of DNA — Why Does Any of This Matter?` },
  { s: 'MICHAEL', t: `Okay, structure makes sense now. But — why? What's DNA actually for, day to day?` },
  { s: 'NALEDI', t: `Great pivot question. DNA carries hereditary information in the form of genes. A gene is a short section of DNA that codes for a specific trait.` },
  { s: 'MICHAEL', t: `Like eye colour, that kind of thing?` },
  { s: 'NALEDI', t: `Exactly that kind of thing — physical characteristics, like blood grouping, or even genes linked to conditions like breast cancer. Genes also influence behaviour — for example, whether a particular organism can be tamed and domesticated.` },
  { s: 'MICHAEL', t: `Wait, behaviour too? Not just physical stuff?` },
  { s: 'NALEDI', t: `Yes — genetics influences behavioural traits as well, not only physical appearance.` },
  { s: 'MICHAEL', t: `Interesting. Okay, but here's a question — is all of the DNA actually doing something? Like, is every single bit coding for a trait?` },
  { s: 'NALEDI', t: `Actually no, and this is a genuinely good question that examiners like to ask. Most of the DNA strand does not code for anything — it's called non-coding DNA. Scientists are actually still researching why it's there and what importance it might have.` },
  { s: 'MICHAEL', t: `So there's a whole chunk of our DNA that's basically a mystery.` },
  { s: 'NALEDI', t: `Pretty much, yes — it's an active area of research even today. Although — nice nuance for a stronger exam answer — not all non-coding DNA is a total mystery. Some specific sections are known as regulatory regions.` },
  { s: 'MICHAEL', t: `What do those actually do?` },
  { s: 'NALEDI', t: `They don't code for a protein themselves, but they control the quantity and timing of protein output from nearby genes — essentially acting like a dimmer switch or a scheduling system for gene activity, deciding how much of a protein gets made, and when.` },
  { s: 'MICHAEL', t: `So it's not "junk DNA," it's more like a control panel sitting right next to the actual machinery.` },
  { s: 'NALEDI', t: `That's a great way to picture it — genes are the machinery, regulatory regions are the control panel deciding how that machinery runs.` },
  { s: 'NALEDI', t: `Now, to summarise the main functions of DNA, there are three key ones worth memorising: it controls the functioning of cells, it regulates the functioning of genes, and it passes on hereditary characteristics.` },
  { s: 'MICHAEL', t: `Controls, regulates, passes on. Nice and short.` },
  { s: 'NALEDI', t: `Perfect for a three-mark question.` },

  { s: 'AMELIA', t: `PART 8: RNA — DNA's Working Partner` },
  { s: 'MICHAEL', t: `Alright, I feel solid on DNA. Now — RNA. Is it basically the same thing?` },
  { s: 'NALEDI', t: `Related, but distinctly different — and that's actually the exact kind of comparison exams love to test. RNA stands for ribonucleic acid. Like DNA, it's built of nucleotides. But the nitrogenous bases in RNA are adenine, uracil, guanine, and cytosine.` },
  { s: 'MICHAEL', t: `Wait — uracil? Not thymine?` },
  { s: 'NALEDI', t: `Exactly — that's the single biggest base difference to remember. RNA swaps out thymine for uracil. Not thymine as in DNA — that's worth underlining in your notes, because it's an easy trip-up on a matching question.` },
  { s: 'MICHAEL', t: `Got it — A, U, G, C for RNA. A, T, G, C for DNA.` },
  { s: 'NALEDI', t: `Perfect. Now, there isn't just one type of RNA — there are three, and each one has a distinct job. All three are formed in the nucleus, by DNA, but they go on to work in different places in the cell.` },
  { s: 'MICHAEL', t: `Three types — lay them out for me.` },
  { s: 'NALEDI', t: `First: messenger RNA, or mRNA. Its job is to carry the code for protein synthesis from the DNA to the ribosome.` },
  { s: 'MICHAEL', t: `So it's literally the messenger — carrying instructions from the control room out to the factory floor.` },
  { s: 'NALEDI', t: `That analogy works perfectly. Second: ribosomal RNA, or rRNA. This one actually forms the ribosomes themselves — which, remember, are the site of protein synthesis.` },
  { s: 'MICHAEL', t: `So rRNA basically builds the machine that does the work.` },
  { s: 'NALEDI', t: `Exactly. And third: transfer RNA, tRNA. Its job is to bring amino acids to the ribosome to form the protein.` },
  { s: 'MICHAEL', t: `So if mRNA is the messenger carrying the blueprint, and rRNA builds the workstation... tRNA is like the delivery driver, bringing the actual raw materials — amino acids — to the workstation.` },
  { s: 'NALEDI', t: `That's an excellent way to hold all three in your head at once. Messenger, ribosomal, transfer — blueprint carrier, workstation builder, materials deliverer.` },
  { s: 'MICHAEL', t: `Where do these three actually sit in the cell, physically?` },
  { s: 'NALEDI', t: `Good follow-up. Messenger RNA is formed in the nucleus but then leaves and enters the cytoplasm, where it attaches to ribosomes. Ribosomal RNA is found in the ribosomes, in the cytoplasm of the cell. And transfer RNA is found freely, just floating in the cytoplasm.` },
  { s: 'MICHAEL', t: `So all three end up doing their actual work out in the cytoplasm, even though they're all made in the nucleus.` },
  { s: 'NALEDI', t: `Exactly right.` },

  { s: 'AMELIA', t: `PART 9: The Structure of RNA — A Single Strand` },
  { s: 'MICHAEL', t: `Okay and structurally, how does RNA compare to that double helix ladder we just built?` },
  { s: 'NALEDI', t: `This is one of the clearest, most testable comparisons in the whole chapter, so listen closely. RNA also consists of nucleotides linking into longer chains, same basic building-block logic as DNA. But — and this is the key difference — RNA is a single-stranded structure, and it is not coiled.` },
  { s: 'MICHAEL', t: `So no ladder, no double helix. Just one strand, hanging out by itself.` },
  { s: 'NALEDI', t: `Exactly. And the sugar in RNA is ribose, not deoxyribose — which is actually where the "R" in RNA comes from, same logic as the "D" in DNA.` },
  { s: 'MICHAEL', t: `That's a nice parallel — D for deoxyribose in DNA, R for ribose in RNA.` },
  { s: 'NALEDI', t: `Exactly, and it makes both names much easier to remember once you see that pattern. The phosphate and sugar molecules attach to one another alternately, same as DNA, forming that single chain — with the bases sticking out to the side.` },
  { s: 'MICHAEL', t: `So really, take the DNA ladder, cut it down the middle so it's just one side, swap deoxyribose for ribose, swap thymine for uracil — and that's RNA?` },
  { s: 'NALEDI', t: `That is an extremely good summary. You basically just wrote the comparison table for me.` },

  { s: 'AMELIA', t: `PART 10: DNA vs RNA — The Big Comparison` },
  { s: 'NALEDI', t: `Speaking of which — since we've now covered both in full, let's put them head to head, because this comparison question comes up constantly.` },
  { s: 'MICHAEL', t: `Let's do it. Similarities first?` },
  { s: 'NALEDI', t: `Sure — DNA and RNA are similar in a few key ways. Both contain sugar alternating with phosphate — that backbone structure. Both contain the nitrogenous bases adenine, guanine, and cytosine. And both play a role in protein synthesis.` },
  { s: 'MICHAEL', t: `So three bases in common — A, G, C — and it's really just the fourth base, thymine versus uracil, that splits them.` },
  { s: 'NALEDI', t: `Exactly, plus the structural differences. Let's go through those now, side by side. DNA contains deoxyribose sugar; RNA contains ribose sugar. DNA is double helix and coiled; RNA is single stranded. DNA contains the nitrogenous base thymine; RNA contains uracil. And DNA is found in the nucleus only; RNA is found in the nucleus, the ribosomes, and the cytoplasm of cells.` },
  { s: 'MICHAEL', t: `Let me try to say that back as a clean table in my head: sugar type, strand shape, unique base, and location. Four categories.` },
  { s: 'NALEDI', t: `That's exactly the structure examiners want — a proper comparison table with those four rows.` },

  { s: 'AMELIA', t: `PART 11: DNA Replication — Making a Perfect Copy` },
  { s: 'MICHAEL', t: `Alright, I think this is the part I've been most nervous about. DNA replication.` },
  { s: 'NALEDI', t: `It sounds intimidating, but honestly, once you've got the double helix structure in your head from earlier, this is just watching that structure come apart and rebuild itself, step by step. Let's slow it right down.` },
  { s: 'MICHAEL', t: `Please.` },
  { s: 'NALEDI', t: `First — what is DNA replication, in one sentence? It's the process through which DNA makes an identical copy of itself. And here's a detail worth being precise about: it happens in the nucleus, during a phase of the cell cycle called interphase — but even more specifically, during a stage of interphase called the S phase. S, for synthesis.` },
  { s: 'MICHAEL', t: `So it's not the whole of interphase, just one particular slice of it?` },
  { s: 'NALEDI', t: `Exactly — interphase also includes a G1 and a G2 phase, where the cell's just growing and preparing, but the actual copying of DNA is confined to that S phase specifically. If an exam asks "when does replication occur," "interphase" alone is a bit vague — "the S phase of interphase" is the precise, full-marks answer.` },
  { s: 'MICHAEL', t: `Okay, and why would DNA need to copy itself in the first place?` },
  { s: 'NALEDI', t: `Hold that thought — we'll answer it properly once we've walked through the steps, because the reason will make a lot more sense once you can picture the process. And this time, let's actually name the enzymes doing the work, because exam papers love asking for them by name.` },
  { s: 'MICHAEL', t: `Enzymes have names? I thought it just sort of... unwound by itself.` },
  { s: 'NALEDI', t: `Nothing in a cell just "happens" — there's always a specific worker doing the job. Officially, replication is broken into three stages: initiation, elongation, and termination. Let's go through all three.` },
  { s: 'MICHAEL', t: `Okay, initiation first.` },
  { s: 'NALEDI', t: `Initiation is where it all kicks off. An enzyme called helicase arrives at the DNA and unwinds the double helix. As it does that, it breaks the weak hydrogen bonds holding the bases together, and the two strands separate — that's our familiar "unzipping."` },
  { s: 'MICHAEL', t: `So helicase is the specific worker responsible for the unwinding and unzipping — it wasn't just happening on its own.` },
  { s: 'NALEDI', t: `Exactly. And the point where the two strands have just split apart, forming a Y-shape, has its own name too: the replication fork. That's literally the "work site" where all the new building is about to happen.` },
  { s: 'MICHAEL', t: `Okay, so the DNA is unzipped at the fork. What's next?` },
  { s: 'NALEDI', t: `Before the main building work can start, a small enzyme called primase comes in and lays down a short strand of RNA, called a primer. Think of it like laying a starting block before a race — the next enzyme needs somewhere to "grip onto" to actually begin.` },
  { s: 'MICHAEL', t: `So primase doesn't build the DNA strand itself, it just marks the starting point?` },
  { s: 'NALEDI', t: `Exactly — it synthesizes a short RNA primer, which gives the next enzyme, DNA polymerase, a place to start from.` },
  { s: 'MICHAEL', t: `And DNA polymerase is the one that actually builds the new strand?` },
  { s: 'NALEDI', t: `Exactly — this is the main construction worker of replication. Each of the two separated strands acts as a template, same word from before, the mould the new strand gets built against. DNA polymerase reads that template and adds free nucleotides onto the growing new strand, one at a time, matching them by complementary base pairing — A with T, C with G, same rule as always.` },
  { s: 'MICHAEL', t: `Does the direction it builds in matter, or does it not make a difference?` },
  { s: 'NALEDI', t: `Good instinct to ask — it actually does matter. DNA polymerase can only add nucleotides in one specific direction, described as 5' to 3'. You don't need to fully unpack the chemistry behind those numbers right now, just know that direction matters, and it's the reason replication gets a little messier on one of the two strands.` },
  { s: 'MICHAEL', t: `Messier how?` },
  { s: 'NALEDI', t: `Because of that direction rule, one strand — called the leading strand — gets built smoothly, in one continuous piece, following the replication fork as it opens. But the other strand — the lagging strand — has to be built backwards, in short, separate chunks, because of that same direction restriction. Those short chunks are called Okazaki fragments.` },
  { s: 'MICHAEL', t: `So instead of one smooth new strand on that side, you get a bunch of little segments that need to be stitched together afterwards?` },
  { s: 'NALEDI', t: `Exactly right — and that stitching job belongs to a third enzyme: DNA ligase. Ligase comes along and joins all those Okazaki fragments together, gluing them into one continuous, complete strand.` },
  { s: 'MICHAEL', t: `Is that the end of it?` },
  { s: 'NALEDI', t: `Almost — that's the termination stage: replication finishes once the replication forks — remember, there are actually two of them, moving outward in opposite directions along the DNA — eventually meet, and ligase finishes joining up any remaining fragments, completing the whole molecule.` },
  { s: 'MICHAEL', t: `So to recap the three official stages: initiation — helicase unwinds and unzips, forming the replication fork. Elongation — primase lays the primer, DNA polymerase builds the new strand by complementary base pairing, and ligase stitches together the lagging strand's Okazaki fragments. Termination — the replication forks meet and the molecule is complete.` },
  { s: 'NALEDI', t: `[impressed] That is a genuinely excellent, exam-ready summary — and notice it's really just a more detailed, enzyme-named version of the simpler picture we started with: unwind, unzip, template, rebuild, done. Same process, just with the actual workers named this time.` },
  { s: 'MICHAEL', t: `And the payoff — two identical DNA molecules?` },
  { s: 'NALEDI', t: `Exactly. And here's a detail that's easy to miss but genuinely important for exams — each of those two new molecules is made up of one original strand and one brand new strand.` },
  { s: 'MICHAEL', t: `Wait, so it's not like the original DNA gets duplicated into a whole copy and the old one stays intact somewhere — the old strands each get "reused" as one half of a new molecule?` },
  { s: 'NALEDI', t: `Exactly right — that's actually a specific concept your textbook is testing when it says "one original strand and one new strand." It's sometimes called semi-conservative replication in more advanced material, though for our purposes here, just remember: each new double helix is half old, half new.` },
  { s: 'MICHAEL', t: `One more thing — with all these enzymes working fast, building millions of new base pairs, does anyone ever double-check the work? Or is it just trusted to be perfect?` },
  { s: 'NALEDI', t: `Great question, and yes — there's a built-in quality control step. Specific enzymes carry out proofreading and repair during replication — they check the newly built strand for mistakes, and if the wrong base was accidentally added, they cut out the error and fix it.` },
  { s: 'MICHAEL', t: `So most mistakes actually do get caught before they become permanent?` },
  { s: 'NALEDI', t: `Exactly — this is part of why DNA replication is remarkably accurate overall. It's only the mistakes that slip past proofreading and repair that go on to become permanent changes — which brings us right into our next topic.` },
  { s: 'MICHAEL', t: `Okay, that finally answers my earlier question too, right? Why does DNA even need to replicate?` },
  { s: 'NALEDI', t: `Right — and here's the payoff answer: DNA replication is essential for cell division, particularly a process called mitosis. It allows each chromosome to be copied, so that every new daughter cell produced ends up with the exact same number and type of chromosomes as the original.` },
  { s: 'MICHAEL', t: `So without replication, cells couldn't divide properly, because there wouldn't be enough DNA to go around to both new cells.` },
  { s: 'NALEDI', t: `Exactly — every new cell needs its own full, complete set of genetic instructions.` },

  { s: 'AMELIA', t: `PART 12: When Replication Goes Wrong — Mutations` },
  { s: 'MICHAEL', t: `Okay so this all sounds very precise and controlled. Does it ever go wrong?` },
  { s: 'NALEDI', t: `It can, yes — and when it does, we call the result a mutation. Specifically, a mutation is a change in the nitrogenous base sequence.` },
  { s: 'MICHAEL', t: `So how does that actually happen, mechanically?` },
  { s: 'NALEDI', t: `If the incorrect nitrogen base attaches to the original template strand — so, a pairing mistake happens — or if a base is accidentally added in or deleted altogether, then the sequence, the actual order, of the bases changes on that new DNA molecule.` },
  { s: 'MICHAEL', t: `And a changed sequence means...?` },
  { s: 'NALEDI', t: `It results in a change in the gene structure. And remember — genes code for traits. So a change in gene structure can potentially mean a change in a trait, or how that gene functions.` },
  { s: 'MICHAEL', t: `That feels like a pretty short, tight chain of cause and effect, actually — wrong base, changed sequence, changed gene, potentially changed trait.` },
  { s: 'NALEDI', t: `That's exactly the chain examiners want you to walk through, in that order, if they ask you to explain how errors in replication can lead to mutations.` },

  { s: 'AMELIA', t: `PART 13: DNA Profiling — DNA in the Real World` },
  { s: 'MICHAEL', t: `Okay, last section — and this is the one I actually find genuinely exciting, because it's the "crime show" one.` },
  { s: 'NALEDI', t: `[laughs] It is a fun one to end on. So — a DNA profile is a pattern produced on X-ray film. It's made up of lines, and those lines differ in length, in thickness, and in position, depending on whose DNA it came from. You might also hear this whole technique called DNA fingerprinting — same idea, different name, since that pattern of lines works a bit like a fingerprint, unique to the individual it came from.` },
  { s: 'MICHAEL', t: `And every single person's pattern is different?` },
  { s: 'NALEDI', t: `Almost — here's the key exception worth remembering: all individuals have a unique DNA profile, except identical twins.` },
  { s: 'MICHAEL', t: `Right, because identical twins come from the same fertilised egg, so genetically they're basically the same starting material.` },
  { s: 'NALEDI', t: `Exactly — nice connection back to genetics. Now, before we get to what it's used for, it's worth understanding how a profile actually gets interpreted, because that's a specific process examiners test. It comes down to comparison: the pattern of lines from an unknown, evidence sample — say, from a crime scene — is compared directly against the pattern of lines from a known reference sample, like a suspect's own DNA.` },
  { s: 'MICHAEL', t: `So it's literally laid side by side, and if the band patterns line up, that's your match?` },
  { s: 'NALEDI', t: `Exactly that — matching band patterns between the evidence sample and the reference sample signify they came from the same source.` },
  { s: 'MICHAEL', t: `Okay, and what's it actually used for in the real world?` },
  { s: 'NALEDI', t: `A whole range of things, honestly, broader than most people expect. DNA profiling is used to identify crime suspects in forensic investigations, to prove paternity and maternity — confirming biological parents — to determine the probability or causes of genetic defects, to establish compatibility of tissue types for organ transplants, to identify relatives more generally, to identify human remains where other identification methods have failed, and even in research and conservation work — for example, tracking and protecting endangered species.` },
  { s: 'MICHAEL', t: `Wow, I didn't expect the conservation angle — I was picturing crime dramas the whole time.` },
  { s: 'NALEDI', t: `It's a genuinely versatile technique — anywhere you need to know "whose DNA is this, and does it match something else," it can help.` },
  { s: 'MICHAEL', t: `[curious] That's a lot of very high-stakes uses. Is it foolproof, though? Like, in a court case, can you just say "the DNA profile matched" and that's the end of the discussion?` },
  { s: 'NALEDI', t: `That's actually the more nuanced, exam-relevant part — and it's a great instinct to question it. DNA profiling is generally accepted as being extremely reliable. But the interpretation and comparison of profiles should be approached with caution, for several genuine reasons.` },
  { s: 'MICHAEL', t: `Let's go through them.` },
  { s: 'NALEDI', t: `First — humans interpret the results, which means mistakes could genuinely be made; it's not a fully automated, error-proof process. Second, the method of profiling may differ between different laboratories, which can create inconsistencies between results. Third — and this one surprises people — only a small piece of DNA is actually used in profiling, so the profile might not be one-hundred-percent unique to a particular individual.` },
  { s: 'MICHAEL', t: `Wait, so it's not comparing your entire DNA?` },
  { s: 'NALEDI', t: `No — just a portion of it, which is part of why the "except identical twins" caveat exists, and why there's still a small margin for error in theory. Fourth reason: DNA profiling is expensive, and therefore not readily accessible to everyone who might need it — particularly in criminal cases where a defendant may not be able to afford it.` },
  { s: 'MICHAEL', t: `That's more of a social-justice angle than a pure science one.` },
  { s: 'NALEDI', t: `It is, and it's a completely valid point for a "discuss the limitations" question — not every limitation has to be purely technical. And the fifth reason: DNA profiles can reveal information about a person that could be used against them in a prejudicial way. For example, someone's profile might show they're HIV positive, or reveal a genetic abnormality — and that information could lead to insurance companies refusing to cover that person, or could create prejudice inside a courtroom.` },
  { s: 'MICHAEL', t: `So the technology itself is powerful and reliable, but the human systems around how it's used and interpreted are where the risk creeps in.` },
  { s: 'NALEDI', t: `That is a genuinely excellent way to sum up that entire section, and honestly, it's the kind of insight that turns a good exam answer into a great one — you're not just listing facts, you're showing you understand why they matter.` },

  { s: 'AMELIA', t: `PART 14: Protein Synthesis — Where DNA Finally Gets to Work` },
  { s: 'MICHAEL', t: `Okay, we've talked about DNA's structure a lot, and we said its whole job is coding for proteins. But we never actually watched it happen. Like, how does a strand of DNA actually become a protein?` },
  { s: 'NALEDI', t: `I'm so glad you asked, because this is honestly the payoff of everything we've covered so far — structure, replication, RNA, all of it feeds into this one process: protein synthesis.` },
  { s: 'MICHAEL', t: `So this is DNA's blueprint finally getting turned into an actual product?` },
  { s: 'NALEDI', t: `That's exactly the right way to picture it, and we're going to lean into that "factory" idea hard today because it maps almost perfectly. Let's start with the raw materials. Proteins are made by linking together amino acids — these are the monomers of proteins, floating around freely in the cytoplasm of cells.` },
  { s: 'MICHAEL', t: `Monomers again — same idea as nucleotides being the monomer for DNA and RNA.` },
  { s: 'NALEDI', t: `Exactly the same logic, just a different building block. Now here's a number worth knowing: there are 20 different amino acids available, and they combine in a huge variety of combinations to build different proteins.` },
  { s: 'MICHAEL', t: `Twenty basic pieces, but endless combinations — kind of like how 26 letters can make every word in the dictionary.` },
  { s: 'NALEDI', t: `That's a brilliant comparison, genuinely — steal that one for your notes. And just like word length and letter order both matter for meaning, it's the number of amino acids and the sequence they're joined in that determines exactly which protein gets formed.` },
  { s: 'MICHAEL', t: `And what actually links one amino acid to the next?` },
  { s: 'NALEDI', t: `A bond called a peptide bond. Picture a chain of different coloured beads, snapped together one after another — each bead is an amino acid, and each little connector snap is a peptide bond.` },
  { s: 'MICHAEL', t: `Are proteins actually huge, or is this a handful of amino acids we're talking about?` },
  { s: 'NALEDI', t: `Genuinely huge. The smallest protein contains 50 amino acids linked together — and that's the small one. Proteins generally contain 300 or more amino acids.` },
  { s: 'MICHAEL', t: `Wow, so even a "short" protein is 50 beads long.` },
  { s: 'NALEDI', t: `Exactly — and every single one of those beads, and their exact order, is dictated by DNA. Which brings us to a new term: three consecutive nitrogenous bases on the DNA strand are called a base triplet. It's that base triplet — the specific group of three — that determines which amino acid gets placed into the protein, and in what order.` },
  { s: 'MICHAEL', t: `So DNA doesn't code one base at a time, it's read in little groups of three.` },
  { s: 'NALEDI', t: `Exactly, three at a time, like reading three-letter words instead of individual letters.` },
  { s: 'MICHAEL', t: `Okay so how does a base triplet, sitting on DNA in the nucleus, actually turn into an amino acid getting added to a protein out in the cytoplasm?` },
  { s: 'NALEDI', t: `That's the whole process, and it happens in exactly two stages. Stage one is called transcription. Stage two is called translation.` },
  { s: 'MICHAEL', t: `Transcription and translation — those sound almost identical, I can already tell I'm going to mix those up.` },
  { s: 'NALEDI', t: `Everyone does at first, so here's the trick: think about what those words mean in everyday English. "Transcribing" something means copying it down, word for word, in the same language — like transcribing a voice note into text. "Translating" means converting it into a different language entirely.` },
  { s: 'MICHAEL', t: `Ohh — so transcription is DNA's code getting copied into mRNA, same "genetic alphabet," just a different molecule carrying it.` },
  { s: 'NALEDI', t: `Exactly.` },
  { s: 'MICHAEL', t: `And translation must be where that code actually gets converted into a totally different "language" — amino acids and proteins, instead of bases.` },
  { s: 'NALEDI', t: `Perfect — you just built the whole two-stage concept yourself. Let's go through each one properly, starting with transcription.` },

  { s: 'AMELIA', t: `PART 15: Stage 1, Transcription, In the Nucleus` },
  { s: 'NALEDI', t: `Transcription is stage one, and it happens in the nucleus — makes sense, since that's where the DNA lives.` },
  { s: 'MICHAEL', t: `Walk me through it step by step, like you did with replication.` },
  { s: 'NALEDI', t: `Happy to, it actually starts almost identically to replication. Step one: a section of the DNA double helix unwinds. As a result, the weak hydrogen bonds between the nitrogenous bases break, and the DNA unzips — but only in that particular section, not the whole strand.` },
  { s: 'MICHAEL', t: `So it's not undoing the entire DNA molecule, just opening up the one part it needs right now.` },
  { s: 'NALEDI', t: `Exactly — like unzipping just one pocket of a jacket instead of the whole zip. Step two: one of those two exposed strands acts as a template — same word, same concept as replication.` },
  { s: 'MICHAEL', t: `Template, meaning it's the mould the new strand gets built against.` },
  { s: 'NALEDI', t: `Exactly right. Step three: that DNA template is used to form a complementary strand — but this time, instead of building more DNA, it builds a strand of messenger RNA, mRNA. This is done using free RNA nucleotides that are floating in the nucleoplasm.` },
  { s: 'MICHAEL', t: `So the machinery grabs RNA nucleotides instead of DNA nucleotides, and builds a copy of the code using those instead.` },
  { s: 'NALEDI', t: `Exactly — and remember, RNA nucleotides carry uracil instead of thymine, so wherever the DNA template shows an A, the mRNA strand gets built with a U instead of a T. Once this mRNA strand is built, it now contains the code for the protein that's going to be made.` },
  { s: 'MICHAEL', t: `And this is where "codon" comes in, right? You mentioned that word earlier when we covered RNA.` },
  { s: 'NALEDI', t: `Exactly the right moment to bring it back. Three adjacent nitrogenous bases on the mRNA are known as a codon. And a codon is complementary to the base triplet it was copied from on the DNA.` },
  { s: 'MICHAEL', t: `So base triplet is the DNA version, codon is the mRNA version — same three-letter grouping idea, just relocated onto a different molecule.` },
  { s: 'NALEDI', t: `Exactly that. Step four, and the final step of transcription: the mRNA moves out of the nucleus, through one of those nuclear pores we talked about way back at the start of the episode, into the cytoplasm — where it attaches onto a ribosome.` },
  { s: 'MICHAEL', t: `Nice, full circle back to the nuclear pores and the ribosomes from the very beginning.` },
  { s: 'NALEDI', t: `Everything in this chapter really does connect back to everything else — that's kind of the point.` },
  { s: 'MICHAEL', t: `Actually — quick question. Why does the code even need to leave as mRNA in the first place? Why can't the DNA itself just go out to the ribosome and get read there directly?` },
  { s: 'NALEDI', t: `That is honestly one of the best questions you could ask here, and it's a real exam question in its own right — "explain one reason why transcription is important." There are a few valid angles, but the standout one is about size: DNA is simply too large to leave the nucleus, it can't physically fit through a nuclear pore. But mRNA — a much smaller, single-stranded copy — is small enough to fit through that pore and carry the coded message for protein synthesis out to where it's actually needed.` },
  { s: 'MICHAEL', t: `Oh, so it's almost a safety and practicality thing — the "master copy" DNA stays locked safely inside the nucleus, and only a disposable working copy goes out to the factory floor.` },
  { s: 'NALEDI', t: `That's a genuinely excellent way to frame it. And there's a second valid reason too, which connects back to what we just discussed with regulatory regions: transcription is actually the main point at which the cell regulates which proteins get produced, and at what rate. Since every protein has to go through transcription first, that step becomes a natural checkpoint for controlling gene activity.` },
  { s: 'MICHAEL', t: `So it's not just a delivery mechanism, it's also a control point.` },
  { s: 'NALEDI', t: `Exactly — and a third valid framing, if you want a simpler one: transcription produces the mRNA that contains the DNA's code, which the ribosome then reads to actually produce the protein. In other words, transcription is the essential first step that makes translation possible at all.` },

  { s: 'AMELIA', t: `PART 16: Stage 2, Translation, In the Cytoplasm` },
  { s: 'MICHAEL', t: `Okay, mRNA has made it out to the cytoplasm and docked onto a ribosome. Now what?` },
  { s: 'NALEDI', t: `Now we move into stage two — translation — and just like we predicted earlier, this is where the RNA language actually gets converted into the amino-acid language of a real protein. And it happens in the cytoplasm.` },
  { s: 'MICHAEL', t: `This is where transfer RNA comes back in, right? The "delivery driver" from earlier.` },
  { s: 'NALEDI', t: `Exactly right, and here's the missing piece we didn't fully explain last time. Transfer RNA, out in the cytoplasm, has three adjacent nitrogenous bases of its own — known as the anti-codon.` },
  { s: 'MICHAEL', t: `Anti-codon... on tRNA. Codon on mRNA. Base triplet on DNA. Okay, I need to lock these three in properly, because they all sound almost the same.` },
  { s: 'NALEDI', t: `Completely fair, and honestly this exact mix-up is one of the most common mistakes in this whole chapter, so let's nail it right now. Base triplet lives on DNA, in the nucleus. Codon lives on mRNA — it's complementary to the DNA base triplet it was copied from. Anti-codon lives on tRNA, out in the cytoplasm — and it's complementary to the mRNA's codon.` },
  { s: 'MICHAEL', t: `So it's a relay: DNA's base triplet gets copied as a complementary codon on mRNA, and then that codon gets matched by a complementary anti-codon on tRNA.` },
  { s: 'NALEDI', t: `That's a perfect way to hold all three in your head — a three-step relay, each one complementary to the one before it.` },
  { s: 'MICHAEL', t: `Okay, so the tRNA's anti-codon has to match up with the mRNA's codon. What happens once it does?` },
  { s: 'NALEDI', t: `Here's the key detail: each tRNA molecule carries one specific amino acid, attached to it. So, according to whichever codons appear on the mRNA, the matching tRNA brings its specific amino acid to the ribosome.` },
  { s: 'MICHAEL', t: `So the ribosome is basically reading the mRNA strand, codon by codon, and each time, the correct tRNA shows up carrying exactly the right amino acid for that codon.` },
  { s: 'NALEDI', t: `Exactly — like a delivery driver who only delivers one specific part, and shows up exactly when the assembly line calls for that part. And then those amino acids, once delivered, get linked together by a peptide bond — the same bond we mentioned earlier.` },
  { s: 'MICHAEL', t: `Does that just keep happening, one amino acid at a time, or is there more structure to it?` },
  { s: 'NALEDI', t: `There actually is, and this middle part, where the chain keeps growing, has its own name: elongation. During elongation, the ribosome physically moves along the mRNA strand, reading it codon by codon. At each codon, the matching tRNA brings its amino acid, and a peptide bond links it onto the growing chain — which, once it's more than a couple of amino acids long, is properly called a polypeptide chain.` },
  { s: 'MICHAEL', t: `So "elongation" is literally just describing the chain getting longer and longer, one delivery at a time, as the ribosome slides along.` },
  { s: 'NALEDI', t: `Exactly that. And this obviously can't go on forever — so how does it know when to stop?` },
  { s: 'MICHAEL', t: `I'm guessing there's some kind of signal?` },
  { s: 'NALEDI', t: `Exactly right, and this final stage has its own name too: termination. Built into the mRNA sequence is a special codon called a stop codon. When the ribosome reaches that stop codon while reading along the mRNA, it signals the end of protein synthesis — the ribosome releases the completed polypeptide chain, which is now a finished protein.` },
  { s: 'MICHAEL', t: `So translation actually has its own three-part structure too, just like replication — a start, a middle, and an end.` },
  { s: 'NALEDI', t: `Exactly — you could frame the whole of translation as initiation (mRNA attaches to the ribosome), elongation (the ribosome moves along, tRNAs deliver amino acids, peptide bonds form a growing polypeptide chain), and termination (the ribosome hits a stop codon and releases the finished protein).` },
  { s: 'MICHAEL', t: `So let me try the whole thing, start to finish, in one go. DNA unwinds and unzips in the nucleus, a strand acts as a template, mRNA gets built as a complementary copy carrying codons, it slips out through a nuclear pore into the cytoplasm and attaches to a ribosome — that's transcription done. Then in translation, tRNA molecules — each one carrying a specific amino acid, each one bearing an anti-codon — match up with the codons on the mRNA at the ribosome, deliver their amino acids in the right order, and those amino acids get peptide-bonded together into a finished protein.` },
  { s: 'NALEDI', t: `[impressed] Michael. That is a genuinely exam-ready answer, delivered from memory, no notes. That's the whole process, correctly, in order.` },
  { s: 'MICHAEL', t: `[laughs] I actually surprised myself there.` },

  { s: 'AMELIA', t: `PART 17: When the Code Gets Corrupted, Mutation and Protein Structure` },
  { s: 'MICHAEL', t: `Okay, we already covered mutations back when we did replication — a wrong base getting added or deleted, changing the gene. Is this a repeat, or is there more to it now that we know about protein synthesis?` },
  { s: 'NALEDI', t: `There's genuinely more to it, because now we can explain why a mutation actually matters, in terms of the finished protein — which is really the part exam papers like to test once they know you've covered protein synthesis.` },
  { s: 'MICHAEL', t: `Okay, walk me through it with our new vocabulary.` },
  { s: 'NALEDI', t: `So, to recap the definition first: a mutation is a change in the nitrogenous base sequence of a DNA molecule, or of a gene. Now here's the chain reaction. Since mRNA is copied from the DNA molecule during transcription, a change in the DNA sequence results in a change in the codons on that mRNA.` },
  { s: 'MICHAEL', t: `Right, because the codon is directly complementary to the DNA's base triplet — if the triplet changes, the codon copied from it has to change too.` },
  { s: 'NALEDI', t: `Exactly. And because the codons have changed, different tRNA molecules — carrying different amino acids — will now be required to match those new codons.` },
  { s: 'MICHAEL', t: `So it's not that the process breaks — the machinery still works perfectly. It's just now building with the wrong parts, because the instructions changed.` },
  { s: 'NALEDI', t: `That's a really sharp way to put it. And because different tRNAs bring different amino acids, the sequence of amino acids in the final protein changes — which results in the formation of a different protein altogether.` },
  { s: 'MICHAEL', t: `So one small base change at the very start can ripple all the way through to a completely different final product.` },
  { s: 'NALEDI', t: `It can — but here's an important nuance, and it's the kind of detail that separates a good answer from a great one: if the mutation happens to still code for the same amino acid — which can happen, since there's some redundancy in how codons map to amino acids — then there will be no change in the protein structure at all.` },
  { s: 'MICHAEL', t: `Oh, interesting — so not every mutation actually changes anything in the end?` },
  { s: 'NALEDI', t: `Exactly right. The base sequence changed, technically a mutation occurred, but if the resulting codon still happens to call for the identical amino acid, the protein comes out exactly the same.` },

  { s: 'AMELIA', t: `OUTRO: Wrapping It Up` },
  { s: 'NALEDI', t: `[excited] Okay, Michael — full circle moment. Right at the start, I said by the end of this you'd be able to explain DNA to a friend. Try me. Give me the whole chapter in like thirty seconds.` },
  { s: 'MICHAEL', t: `Okay, deep breath — every living thing has DNA and RNA, both nucleic acids made of nucleotide building blocks — phosphate, sugar, base. DNA lives mostly in the nucleus, a bit in mitochondria and chloroplasts, and it's a double helix held together by complementary base pairing — A-T, G-C — with weak hydrogen bonds, coiled around histones into structures called chromosomes. It carries genes, which code for traits, plus regulatory regions that control how much protein gets made and when. It copies itself through replication, in the S phase of interphase — helicase unwinds it at the replication fork, primase lays a primer, DNA polymerase builds the new strand, and ligase stitches together the lagging strand's Okazaki fragments, with proofreading enzymes catching most mistakes along the way. RNA is DNA's single-stranded partner, swaps thymine for uracil, and comes in three flavours — messenger, ribosomal, and transfer. When replication errors slip past proofreading, you get mutations. DNA profiling — or fingerprinting — compares band patterns from evidence and reference samples to solve crimes, prove relationships, identify remains, and even help conservation work, but you've got to interpret it carefully. And then it all comes together in protein synthesis — amino acids link by peptide bonds into proteins, guided by base triplets on DNA. Transcription, in the nucleus, copies a DNA triplet into a complementary mRNA codon — small enough to fit through the nuclear pore, unlike DNA itself — and heads to a ribosome. Translation, in the cytoplasm, has tRNA deliver the right amino acids to build a growing polypeptide chain, until the ribosome hits a stop codon and releases the finished protein. And if a mutation changes the DNA sequence, it can change the codon, the tRNA, the amino acid sequence, and the whole protein — unless the new codon happens to still code for the same amino acid.` },
  { s: 'NALEDI', t: `[impressed] ...Michael, that was better than most textbook summaries I've read.` },
  { s: 'MICHAEL', t: `[laughs] I told you, hold me to it.` },
  { s: 'NALEDI', t: `[warmly] That's a wrap on Chapter 1. Next time, we'll pick up wherever the next section takes us. Until then — keep those base pairs straight, A with T, G with C, and we'll catch you in the next episode.` },
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

async function main() {
  fs.mkdirSync(TMP_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });

  console.log(`\nDNA Chapter 1 Podcast — ${S.length} segments\n`);

  const files = [];
  let usedFallback = 0;
  for (let i = 0; i < S.length; i++) {
    const seg = S[i];
    const voiceId = VOICES[seg.s];
    const fname = `${pad(i)}_${seg.s.toLowerCase()}.mp3`;
    const outPath = path.join(TMP_DIR, fname);
    files.push({ path: outPath, isTitle: seg.s === 'AMELIA' });

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
    console.warn(`⚠ ${usedFallback} segment(s) used the ${FALLBACK_MODEL} fallback (no v3 audio-tag delivery) — check your ElevenLabs plan has v3 access if you want those re-generated with it.`);
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
      if (f.isTitle) lines.push(`file '${silenceLong.replace(/'/g, "'\\''")}'`);
      lines.push(`file '${f.path.replace(/'/g, "'\\''")}'`);
      lines.push(`file '${(f.isTitle ? silenceLong : silenceShort).replace(/'/g, "'\\''")}'`);
    }
    fs.writeFileSync(listPath, lines.join('\n'));

    execSync(`ffmpeg -y -f concat -safe 0 -i "${listPath}" -c:a libmp3lame -q:a 2 "${OUT_FILE}"`, { stdio: 'inherit' });
    console.log(`\n✅ Done (ffmpeg): ${OUT_FILE}`);
  } else {
    console.warn('\n⚠ ffmpeg not found — using embedded silence clips for pacing instead (no external dependency needed).');
    const shortSilence = Buffer.from(SILENCE_SHORT_B64, 'base64');
    const longSilence = Buffer.from(SILENCE_LONG_B64, 'base64');
    const out = fs.createWriteStream(OUT_FILE);
    for (const f of files) {
      if (!fs.existsSync(f.path)) continue;
      if (f.isTitle) out.write(longSilence);
      out.write(fs.readFileSync(f.path));
      out.write(f.isTitle ? longSilence : shortSilence);
    }
    out.end();
    console.log(`\n✅ Done (raw concat with natural pauses): ${OUT_FILE}`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });

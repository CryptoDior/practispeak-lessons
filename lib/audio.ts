/**
 * Audio is stored on Cloudflare R2 (same bucket as images).
 * During migration, every lookup falls back to the old local /public/audio files.
 *
 * File names on R2:
 *   Lesson-specific (preferred for new recordings):
 *     <lesson-slug>-<word>.mp3          e.g. mma-equipment-canvas.mp3
 *     <lesson-slug>-<word>-example.mp3  e.g. mma-equipment-canvas-example.mp3
 *   Shared (the existing files, uploaded as-is):
 *     <word>.mp3 / <word>-example.mp3   e.g. canvas.mp3
 */
export const AUDIO_BASE = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';

/**
 * Bumped automatically by scripts/generate-lesson-audio-v4.mjs whenever audio is RE-recorded (--force),
 * so browsers fetch the new recordings instead of old cached copies. Push after it changes.
 */
export const AUDIO_VERSION = '1791971510304';

/** Add the cache-busting version to an R2 audio URL. */
export function r2Audio(name: string): string {
  return `${AUDIO_BASE}${name}?v=${AUDIO_VERSION}`;
}

/** Turn '/audio/x.mp3' (or 'x.mp3') into [R2 url, local fallback url]. Full URLs are used as-is. */
export function audioSources(path: string): string[] {
  if (/^https?:\/\//.test(path)) return [path];
  const name = path.replace(/^\/+/, '').replace(/^audio\//, '');
  return [r2Audio(name), '/audio/' + name];
}

/** The one sound playing on the page right now. Starting a new sound stops it. */
let nowPlaying: HTMLAudioElement | null = null;

/** Create an audio element that stops any other sound on the page first (only one sound at a time). */
export function exclusiveAudio(src: string): HTMLAudioElement {
  if (nowPlaying) {
    nowPlaying.pause();
    nowPlaying.dispatchEvent(new Event('stopped'));
  }
  const audio = new Audio(src);
  nowPlaying = audio;
  return audio;
}

/** Take over as the page's single playing sound (for players that reuse one audio element). */
export function claimAudio(audio: HTMLAudioElement) {
  if (nowPlaying && nowPlaying !== audio) {
    nowPlaying.pause();
    nowPlaying.dispatchEvent(new Event('stopped'));
  }
  nowPlaying = audio;
}

/** Play the first source that works. Calls onDone when finished or when nothing could play. */
export function playFirstWorking(srcs: string[], onDone: () => void): HTMLAudioElement | null {
  let current: HTMLAudioElement | null = null;
  const tryPlay = (i: number) => {
    if (i >= srcs.length) {
      onDone();
      return;
    }
    const audio = exclusiveAudio(srcs[i]);
    current = audio;
    audio.addEventListener('stopped', onDone);
    // A missing file fires both onerror and a rejected play(); only move on once (prevents double audio).
    let movedOn = false;
    const next = () => {
      if (movedOn) return;
      movedOn = true;
      tryPlay(i + 1);
    };
    audio.onended = onDone;
    audio.onerror = next;
    audio.play().catch(next);
  };
  tryPlay(0);
  return current;
}

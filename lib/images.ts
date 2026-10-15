/* Where vocab/phrase images live. Pure helpers — safe for client bundles. */

export const R2_BASE = 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/';

/**
 * Turn a lesson's imageSlug into a real URL. Everything is served from Cloudflare R2:
 *   'https://…'            -> as is
 *   '/images/foo.png'      -> R2/foo.png   (public/images no longer exists)
 *   'foo-bar' (bare name)  -> R2/foo-bar.png
 * So uploading a file with that name to R2 is all it takes for the image to appear.
 */
export function resolveImageUrl(imageSlug: string): string | null {
  const s = imageSlug.trim();
  if (!s) return null;
  if (/^https?:\/\//.test(s)) return s;
  if (s.startsWith('/images/')) return R2_BASE + s.slice('/images/'.length);
  if (/^[a-z0-9-]+$/i.test(s)) return `${R2_BASE}${s}.png`;
  return s;
}

/** Same image as an .svg (the cards fall back to it when the main file is missing). */
export function svgVariant(url: string): string {
  return url.replace(/\.[^./]+$/, '.svg');
}

/** R2 object key for a URL on our bucket, or null if it lives elsewhere. */
export function r2KeyOf(url: string): string | null {
  if (!url.startsWith(R2_BASE)) return null;
  try {
    return decodeURIComponent(url.slice(R2_BASE.length).split('?')[0]);
  } catch {
    return null;
  }
}

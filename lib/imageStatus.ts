import { getLessonBySlug } from '@/data/lessons';
import { resolveImageUrl, svgVariant, r2KeyOf } from '@/lib/images';

/* Server-only: which lessons are still missing vocab/phrase images ("under construction"). */

const ACCOUNT_ID = 'f8e5b3856d99b4ed89d9ea1fb4bf641a';
const BUCKET = 'practispeak-images';
/** How often the file list is refreshed, so newly uploaded images clear the triangle. */
export const IMAGE_CHECK_SECONDS = 3600;

/**
 * Every object key in the R2 bucket, via the Cloudflare API (1,000 per request).
 * Cached for an hour. Returns null when it can't check (no token, API error) —
 * callers then show no triangles rather than wrong ones.
 */
export async function listR2Keys(): Promise<Set<string> | null> {
  const token = process.env.R2_READ_TOKEN ?? process.env.CF_API_TOKEN;
  if (!token) return null;
  const keys = new Set<string>();
  let cursor = '';
  try {
    for (let page = 0; page < 100; page++) {
      const url =
        `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects?per_page=1000` +
        (cursor ? `&cursor=${encodeURIComponent(cursor)}` : '');
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: IMAGE_CHECK_SECONDS },
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        console.error('[imageStatus] R2 listing failed', res.status, JSON.stringify(json.errors ?? '').slice(0, 200));
        return null;
      }
      for (const obj of json.result as { key: string }[]) keys.add(obj.key);
      cursor = json.result_info?.is_truncated ? json.result_info.cursor : '';
      if (!cursor) return keys;
    }
    return keys;
  } catch (err) {
    console.error('[imageStatus] R2 listing error', err);
    return null;
  }
}

/** Is this lesson image uploaded? (keys from listR2Keys) */
export function imageExists(keys: Set<string>, imageSlug: string): boolean {
  const url = resolveImageUrl(imageSlug);
  if (!url) return false;
  const key = r2KeyOf(url);
  if (key === null) return true; // hosted somewhere else — can't check, assume fine
  const svg = r2KeyOf(svgVariant(url));
  return keys.has(key) || (svg !== null && keys.has(svg));
}

/** Number of missing vocab + phrase images per lesson slug (0 = complete). Empty map if unknown. */
export async function getMissingImageCounts(slugs: string[]): Promise<Map<string, number>> {
  const result = new Map<string, number>();
  const keys = await listR2Keys();
  if (!keys) return result;
  const exists = (imageSlug: string) => imageExists(keys, imageSlug);

  for (const slug of slugs) {
    const lesson = getLessonBySlug(slug);
    if (!lesson) continue;
    const images = [...lesson.vocabulary, ...lesson.phrasalVerbs].map((w) => w.imageSlug);
    result.set(slug, images.filter((s) => !exists(s)).length);
  }
  return result;
}

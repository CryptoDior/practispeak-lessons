import { getLessonBySlug } from '@/data/lessons';
import { resolveImageUrl, svgVariant, r2KeyOf } from '@/lib/images';

/* Server-only: which lessons are still missing vocab/phrase images ("under construction"). */

const ACCOUNT_ID = 'f8e5b3856d99b4ed89d9ea1fb4bf641a';
const BUCKET = 'practispeak-images';
/** How often the file list is refreshed, so newly uploaded images clear the triangle. */
export const IMAGE_CHECK_SECONDS = 3600;

/** True while `next build` pre-renders pages (there's no previous version to fall back to yet). */
export const isBuildPhase = () => process.env.NEXT_PHASE === 'phase-production-build';

interface R2Page {
  result: { key: string }[];
  result_info?: { is_truncated?: boolean; cursor?: string };
}

/** One page of the bucket listing, retried up to 3 times (each retry has its own cache entry). */
async function fetchListingPage(baseUrl: string, token: string): Promise<R2Page | null> {
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt) await new Promise((r) => setTimeout(r, 500 * attempt));
    try {
      const res = await fetch(attempt ? `${baseUrl}&retry=${attempt}` : baseUrl, {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: IMAGE_CHECK_SECONDS },
      });
      const json = await res.json();
      if (res.ok && json.success && Array.isArray(json.result)) return json as R2Page;
      console.error('[imageStatus] R2 listing failed', res.status, JSON.stringify(json.errors ?? '').slice(0, 200));
    } catch (err) {
      console.error('[imageStatus] R2 listing error', err);
    }
  }
  return null;
}

/**
 * Every object key in the R2 bucket, via the Cloudflare API (1,000 per request), cached for an
 * hour. Returns null when it can't check (no token, or the API keeps failing).
 */
export async function listR2Keys(): Promise<Set<string> | null> {
  const token = process.env.R2_READ_TOKEN ?? process.env.CF_API_TOKEN;
  if (!token) return null;
  const keys = new Set<string>();
  let cursor = '';
  for (let page = 0; page < 100; page++) {
    const url =
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects?per_page=1000` +
      (cursor ? `&cursor=${encodeURIComponent(cursor)}` : '');
    const data = await fetchListingPage(url, token);
    if (!data) return null;
    for (const obj of data.result) keys.add(obj.key);
    cursor = data.result_info?.is_truncated ? data.result_info.cursor ?? '' : '';
    if (!cursor) return keys;
  }
  return keys;
}

/**
 * The bucket listing for a page that refreshes hourly. If Cloudflare can't be reached during a
 * refresh, this throws — so Next.js keeps serving the last good version of the page (with its
 * triangles) instead of replacing it with one that has none. During `next build` there is no
 * earlier version, so it returns null and the page simply builds without triangles.
 */
export async function listR2KeysForPage(): Promise<Set<string> | null> {
  const keys = await listR2Keys();
  if (!keys && !isBuildPhase() && (process.env.R2_READ_TOKEN ?? process.env.CF_API_TOKEN)) {
    throw new Error('R2 listing unavailable — keeping the previous version of this page');
  }
  return keys;
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

/**
 * Number of missing vocab + phrase images per lesson slug (0 = complete). Empty map if unknown
 * (only during a build — on an hourly refresh a failed check keeps the previous page instead).
 */
export async function getMissingImageCounts(slugs: string[]): Promise<Map<string, number>> {
  const result = new Map<string, number>();
  const keys = await listR2KeysForPage();
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

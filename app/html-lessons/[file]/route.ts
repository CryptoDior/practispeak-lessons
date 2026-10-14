import { readFile } from 'fs/promises';
import path from 'path';
import { NextResponse, type NextRequest } from 'next/server';
import { getCatalog, findLessonInCatalog } from '@/lib/series';
import { getUserAndPlan } from '@/lib/supabase/server';

/**
 * Every /<name>.html request is rewritten here (next.config.js), so the standalone
 * HTML lessons in public/ get the same free/Premium check as normal lessons.
 */
export const dynamic = 'force-dynamic';

/** Which catalog lesson an HTML file belongs to. */
function slugForHtmlFile(file: string): string | null {
  for (const category of getCatalog()) {
    const lesson = category.lessons.find((l) => l.externalUrl === `/${file}`);
    if (lesson) return lesson.slug;
  }
  // Older standalone copies of normal lessons, e.g. lesson-talking-strategy.html -> talking-strategy
  const guess = file.replace(/\.html$/, '').replace(/^lesson-/, '');
  return findLessonInCatalog(guess) ? guess : null;
}

export async function GET(request: NextRequest, { params }: { params: { file: string } }) {
  const { file } = params;
  if (!/^[a-z0-9-]+\.html$/i.test(file)) return new NextResponse('Not found', { status: 404 });

  let html: string;
  try {
    html = await readFile(path.join(process.cwd(), 'public', file), 'utf8');
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }

  const slug = slugForHtmlFile(file);
  // Unknown files are treated as Premium, so nothing leaks by accident.
  const premium = slug ? findLessonInCatalog(slug)!.summary.premium : true;

  if (premium) {
    const { plan } = await getUserAndPlan();
    if (plan !== 'pro') {
      return NextResponse.redirect(new URL(slug ? `/lessons/${slug}` : '/#categories', request.url));
    }
  }

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      // Premium pages must never be cached and shown to someone else.
      'Cache-Control': premium ? 'private, no-store' : 'public, max-age=0, must-revalidate',
    },
  });
}

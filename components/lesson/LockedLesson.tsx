import Link from 'next/link';
import { SiteHeader, SiteFooter, LockIcon } from '@/components/SiteChrome';
import { bandForLevel } from '@/lib/levels';
import { FREE_LESSONS_PER_GROUP } from '@/lib/series';
import { BECOME_STUDENT_URL } from '@/lib/site';
import type { LessonCategoryInfo } from '@/components/lesson/LessonView';

const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-[15px] font-semibold text-white hover:bg-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2';
const secondaryBtn =
  'inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-[15px] font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2';

/** Shown instead of a students-only lesson to visitors and non-students. Contains no lesson content. */
export default function LockedLesson({
  slug,
  title,
  level,
  description,
  heroImage,
  words,
  phrases,
  category,
  loggedIn,
}: {
  slug: string;
  title: string;
  level: string;
  description: string;
  heroImage?: string;
  words: number;
  phrases: number;
  category: LessonCategoryInfo | null;
  loggedIn: boolean;
}) {
  const band = bandForLevel(level);
  const next = encodeURIComponent(`/lessons/${slug}`);
  // Stacked backgrounds: if the lesson image is missing, the category image shows through.
  const images = [heroImage, category?.image].filter(Boolean).map((src) => `url("${src}")`);

  const includes = [
    words > 0 && `${words} key words`,
    phrases > 0 && `${phrases} phrases`,
    'Dialogue and exercises',
  ].filter(Boolean) as string[];

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8FB]">
      <SiteHeader active="Categories" />

      <main className="flex-1 font-poppins max-w-5xl w-full mx-auto px-4 sm:px-6 pt-6 pb-12">
        {/* ---------- Title card (same look as an open lesson) ---------- */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-stretch">
            <div className="flex-1 px-6 sm:px-10 py-8 md:py-10 flex flex-col justify-center">
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center gap-2 text-sm flex-wrap">
                  <li>
                    <Link href="/" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                      Practispeak
                    </Link>
                  </li>
                  <li className="text-slate-300" aria-hidden="true">/</li>
                  <li>
                    <Link href="/#categories" className="text-slate-500 hover:text-blue-600 transition-colors">
                      Materials
                    </Link>
                  </li>
                  {category && (
                    <>
                      <li className="text-slate-300" aria-hidden="true">/</li>
                      <li>
                        <Link
                          href={`/categories/${category.id}`}
                          className="text-slate-500 hover:text-blue-600 transition-colors"
                        >
                          {category.name}
                        </Link>
                      </li>
                    </>
                  )}
                </ol>
              </nav>
              <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-slate-900 mb-5 leading-tight">
                {title}
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center justify-center min-w-[2.5rem] h-10 px-2 rounded-xl border-2 border-blue-600 text-blue-600 font-bold text-sm">
                  {level}
                </span>
                <span className="text-[17px] font-medium text-slate-800">{band.label}</span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  <LockIcon className="w-3.5 h-3.5" />
                  Students only
                </span>
              </div>
            </div>
            <div
              className="relative hidden md:block md:w-[45%] min-h-[260px] bg-gradient-to-br from-[#EEF3FF] to-[#DCE7FF] bg-cover bg-center"
              style={images.length ? { backgroundImage: images.join(', ') } : undefined}
              role="img"
              aria-label={category?.imageAlt ?? ''}
            />
          </div>
        </section>

        {/* ---------- Lock panel ---------- */}
        <section className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(15,23,42,0.05)] px-6 sm:px-10 py-10 text-center">
          <span className="mx-auto mb-4 w-14 h-14 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
            <LockIcon className="w-7 h-7" />
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-slate-900">
            This lesson is for Practispeak students
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            The first {FREE_LESSONS_PER_GROUP} lessons of each level are free for everyone. Students get every lesson.
          </p>
          {description && (
            <p className="mt-3 max-w-xl mx-auto text-[15px] text-slate-600 leading-relaxed">{description}</p>
          )}
          <ul className="mt-5 flex flex-wrap justify-center gap-2">
            {includes.map((item) => (
              <li
                key={item}
                className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={BECOME_STUDENT_URL} target="_blank" rel="noopener noreferrer" className={`w-full sm:w-auto ${primaryBtn}`}>
              Become a student
            </a>
            {!loggedIn && (
              <Link href={`/login?next=${next}`} className={`w-full sm:w-auto ${secondaryBtn}`}>
                Already a student? Log in
              </Link>
            )}
          </div>

          <p className="mt-5 text-sm text-slate-500">
            {loggedIn ? (
              <>Already a student? Ask your teacher to unlock your account.</>
            ) : (
              <>
                New here?{' '}
                <Link href={`/signup?next=${next}`} className="font-semibold text-blue-600 hover:text-blue-700">
                  Create a free account
                </Link>{' '}
                so your teacher can unlock it.
              </>
            )}
          </p>

          {category && (
            <p className="mt-6 text-sm text-slate-500">
              Or try the{' '}
              <Link href={`/categories/${category.id}`} className="font-semibold text-blue-600 hover:text-blue-700">
                free lessons in {category.name}
              </Link>
            </p>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

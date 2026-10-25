'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useDictionary, type DictionaryEntryInput } from '@/components/dictionary/DictionaryProvider';
import { BECOME_STUDENT_URL } from '@/lib/site';

function BookmarkIcon({ filled, className = 'w-4 h-4' }: { filled: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8">
      <path d="M6.5 3.5h11a1 1 0 011 1v16l-6.5-4.2-6.5 4.2v-16a1 1 0 011-1z" strokeLinejoin="round" />
    </svg>
  );
}

/** ☆ Save / ★ Saved — adds a vocab card to the student's My Dictionary. */
export default function SaveWordButton({ entry }: { entry: DictionaryEntryInput }) {
  const dict = useDictionary();
  const pathname = usePathname();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null); // error, or the "students only" note
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close the note on outside click / Escape.
  useEffect(() => {
    if (!message) return;
    const onDown = (e: PointerEvent) => !wrapRef.current?.contains(e.target as Node) && setMessage(null);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMessage(null);
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [message]);

  if (!dict || dict.status === 'loading') return null;
  const saved = dict.status === 'student' && dict.isSaved(entry.word);

  const onClick = async () => {
    if (dict.status !== 'student') {
      setMessage(message ? null : 'locked');
      return;
    }
    setBusy(true);
    const error = await dict.toggle(entry);
    setBusy(false);
    setMessage(error);
  };

  return (
    <div ref={wrapRef} className="relative ml-auto flex-shrink-0">
      <button
        type="button"
        onClick={onClick}
        disabled={busy}
        aria-pressed={saved}
        title={saved ? 'Remove from My Dictionary' : 'Save to My Dictionary'}
        className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 ${
          saved
            ? 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100'
            : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600'
        }`}
      >
        <BookmarkIcon filled={saved} />
        {saved ? 'Saved' : 'Save'}
      </button>

      {message && (
        <div
          role="status"
          className="absolute right-0 top-full mt-2 z-30 w-64 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-[0_8px_30px_rgba(15,23,42,0.12)]"
        >
          {message === 'locked' ? (
            <>
              <p className="text-sm font-semibold text-slate-900">Save words to My Dictionary</p>
              <p className="mt-1 text-xs text-slate-600 leading-snug">
                Keep every new word with its meaning and example — a feature for Practispeak students.
              </p>
              {dict.status === 'anon' ? (
                <Link
                  href={`/login?next=${encodeURIComponent(pathname ?? '/')}`}
                  className="mt-2 inline-block text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  Already a student? Log in
                </Link>
              ) : (
                <a
                  href={BECOME_STUDENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  Become a student
                </a>
              )}
            </>
          ) : (
            <p className="text-xs text-red-600">{message}</p>
          )}
        </div>
      )}
    </div>
  );
}

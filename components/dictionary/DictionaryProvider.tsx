'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { effectivePlan } from '@/lib/plan';

/** What gets stored for a saved word (columns of public.dictionary_entries). */
export interface DictionaryEntryInput {
  word: string;
  part_of_speech?: string | null;
  definition: string;
  example?: string | null;
  in_game?: string | null;
  in_real_life?: string | null;
  image_slug?: string | null;
  audio_slugs?: string[] | null;
  lesson_slug?: string | null;
}

type Status = 'loading' | 'anon' | 'free' | 'student';

interface DictionaryCtx {
  status: Status;
  isSaved: (word: string) => boolean;
  /** Save or remove; resolves to an error message, or null on success */
  toggle: (entry: DictionaryEntryInput) => Promise<string | null>;
}

const Ctx = createContext<DictionaryCtx | null>(null);

export const wordKey = (word: string) => word.trim().toLowerCase();

/**
 * Loads the student's saved words once for the whole page, so every vocab card can show
 * ☆ Save / ★ Saved without its own lookup. `initialKeys` skips the lookup (My Dictionary page).
 */
export function DictionaryProvider({
  children,
  initialKeys,
}: {
  children: React.ReactNode;
  initialKeys?: string[];
}) {
  const [status, setStatus] = useState<Status>('loading');
  const [saved, setSaved] = useState<Set<string>>(() => new Set(initialKeys ?? []));

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      setStatus('anon');
      return;
    }
    const supabase = createClient();
    let cancelled = false;
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (cancelled) return;
      if (!user) return setStatus('anon');
      const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle();
      if (cancelled) return;
      if (effectivePlan(profile) !== 'pro') return setStatus('free');
      if (!initialKeys) {
        const { data } = await supabase.from('dictionary_entries').select('word_key');
        if (cancelled) return;
        setSaved(new Set((data ?? []).map((r: { word_key: string }) => r.word_key)));
      }
      setStatus('student');
    })();
    return () => {
      cancelled = true;
    };
    // initialKeys is only read on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isSaved = useCallback((word: string) => saved.has(wordKey(word)), [saved]);

  const toggle = useCallback(
    async (entry: DictionaryEntryInput) => {
      const key = wordKey(entry.word);
      const removing = saved.has(key);
      // Optimistic: flip straight away, undo if the database says no.
      setSaved((s) => {
        const next = new Set(s);
        if (removing) next.delete(key);
        else next.add(key);
        return next;
      });
      const supabase = createClient();
      const { error } = removing
        ? await supabase.from('dictionary_entries').delete().eq('word_key', key)
        : await supabase.from('dictionary_entries').insert({ ...entry, word: entry.word.trim() });
      // 23505 = already saved (e.g. in another tab) — that's fine.
      if (error && error.code !== '23505') {
        setSaved((s) => {
          const next = new Set(s);
          if (removing) next.add(key);
          else next.delete(key);
          return next;
        });
        return 'Couldn’t update My Dictionary. Please try again.';
      }
      return null;
    },
    [saved]
  );

  const value = useMemo(() => ({ status, isSaved, toggle }), [status, isSaved, toggle]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/** null when the card isn't inside a DictionaryProvider (then no Save button is shown). */
export const useDictionary = () => useContext(Ctx);

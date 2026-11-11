-- Practispeak: lesson progress — which lessons each user has completed, with their best score
-- Run once in Supabase → SQL Editor → New query → paste → Run.

create table if not exists public.lesson_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_slug text not null check (char_length(lesson_slug) between 1 and 200),
  best_score integer not null,
  best_total integer not null,
  last_score integer not null,
  last_total integer not null,
  attempts integer not null default 1,
  first_completed_at timestamptz not null default now(),
  last_completed_at timestamptz not null default now(),
  primary key (user_id, lesson_slug)
);

create index if not exists lesson_progress_user_recent
  on public.lesson_progress (user_id, last_completed_at desc);

alter table public.lesson_progress enable row level security;

-- Users read only their own progress. There are no insert/update policies:
-- results are saved only through record_lesson_completion() below.
drop policy if exists "Read own progress" on public.lesson_progress;
create policy "Read own progress"
  on public.lesson_progress for select to authenticated
  using ((select auth.uid()) = user_id);

-- Save a finished lesson for the logged-in user; keeps their best score and counts attempts.
create or replace function public.record_lesson_completion(p_lesson_slug text, p_score integer, p_total integer)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then
    raise exception 'Not logged in';
  end if;
  if p_total is null or p_total < 1 or p_total > 500 or p_score is null or p_score < 0 or p_score > p_total then
    raise exception 'Invalid score';
  end if;
  if p_lesson_slug is null or char_length(p_lesson_slug) not between 1 and 200 then
    raise exception 'Invalid lesson';
  end if;

  insert into public.lesson_progress as lp
    (user_id, lesson_slug, best_score, best_total, last_score, last_total)
  values (auth.uid(), p_lesson_slug, p_score, p_total, p_score, p_total)
  on conflict (user_id, lesson_slug) do update set
    last_score = excluded.last_score,
    last_total = excluded.last_total,
    attempts = lp.attempts + 1,
    last_completed_at = now(),
    -- keep whichever attempt has the higher percentage
    best_score = case when excluded.last_score::numeric / excluded.last_total > lp.best_score::numeric / lp.best_total
                      then excluded.last_score else lp.best_score end,
    best_total = case when excluded.last_score::numeric / excluded.last_total > lp.best_score::numeric / lp.best_total
                      then excluded.last_total else lp.best_total end;
end;
$$;

revoke execute on function public.record_lesson_completion(text, integer, integer) from public, anon;
grant execute on function public.record_lesson_completion(text, integer, integer) to authenticated;

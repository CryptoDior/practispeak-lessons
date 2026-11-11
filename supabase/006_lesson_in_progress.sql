-- Practispeak: lessons in progress — exercises finished so far, so students can pick up where they left off
-- Run once in Supabase → SQL Editor → New query → paste → Run. (Needs 005_lesson_progress.sql first.)

create table if not exists public.lesson_activity (
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_slug text not null check (char_length(lesson_slug) between 1 and 200),
  -- e.g. {"matching": {"score": 8, "total": 10}, "fillBlank": {...}}
  exercises jsonb not null default '{}'::jsonb,
  exercises_required integer not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_slug)
);

create index if not exists lesson_activity_user_recent
  on public.lesson_activity (user_id, updated_at desc);

alter table public.lesson_activity enable row level security;

drop policy if exists "Read own activity" on public.lesson_activity;
create policy "Read own activity"
  on public.lesson_activity for select to authenticated
  using ((select auth.uid()) = user_id);

-- Save one finished exercise for the logged-in user (re-doing it replaces its score).
create or replace function public.save_lesson_exercise(
  p_lesson_slug text, p_exercise text, p_score integer, p_total integer, p_required integer
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then
    raise exception 'Not logged in';
  end if;
  if p_exercise not in ('pitchCorner', 'completeSentence', 'matching', 'fillBlank', 'multipleChoice') then
    raise exception 'Invalid exercise';
  end if;
  if p_total is null or p_total < 1 or p_total > 500 or p_score is null or p_score < 0 or p_score > p_total
     or p_required is null or p_required < 1 or p_required > 10
     or p_lesson_slug is null or char_length(p_lesson_slug) not between 1 and 200 then
    raise exception 'Invalid input';
  end if;

  insert into public.lesson_activity as la (user_id, lesson_slug, exercises, exercises_required)
  values (auth.uid(), p_lesson_slug,
          jsonb_build_object(p_exercise, jsonb_build_object('score', p_score, 'total', p_total)), p_required)
  on conflict (user_id, lesson_slug) do update set
    exercises = la.exercises || jsonb_build_object(p_exercise, jsonb_build_object('score', p_score, 'total', p_total)),
    exercises_required = p_required,
    updated_at = now();
end;
$$;

revoke execute on function public.save_lesson_exercise(text, text, integer, integer, integer) from public, anon;
grant execute on function public.save_lesson_exercise(text, text, integer, integer, integer) to authenticated;

-- Finishing a lesson clears its in-progress record (next visit starts fresh).
-- Same as in 005, plus the delete at the end.
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
    best_score = case when excluded.last_score::numeric / excluded.last_total > lp.best_score::numeric / lp.best_total
                      then excluded.last_score else lp.best_score end,
    best_total = case when excluded.last_score::numeric / excluded.last_total > lp.best_score::numeric / lp.best_total
                      then excluded.last_total else lp.best_total end;

  delete from public.lesson_activity where user_id = auth.uid() and lesson_slug = p_lesson_slug;
end;
$$;

revoke execute on function public.record_lesson_completion(text, integer, integer) from public, anon;
grant execute on function public.record_lesson_completion(text, integer, integer) to authenticated;

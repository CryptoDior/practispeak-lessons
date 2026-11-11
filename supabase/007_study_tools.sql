-- Practispeak: study tools — flashcard reviews (My Dictionary), "Fix your mistakes", daily streak + weekly goal
-- Run once in Supabase → SQL Editor → New query → paste → Run. (Needs 004 and 006 first.)

/* ---------- 1. Flashcards: when each saved word is next due for review ---------- */
alter table public.dictionary_entries
  add column if not exists review_box smallint not null default 0,          -- 0 = new / forgot, goes up when known
  add column if not exists next_review_at timestamptz not null default now(),
  add column if not exists last_reviewed_at timestamptz;

create index if not exists dictionary_entries_due
  on public.dictionary_entries (user_id, next_review_at);

-- Knew it → next review after 1, 3, 7, 14, 30, then 60 days. Didn't know → back to the start (due again now).
create or replace function public.review_word(p_entry uuid, p_knew boolean)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_box smallint;
begin
  if auth.uid() is null then
    raise exception 'Not logged in';
  end if;
  select review_box into v_box from public.dictionary_entries where id = p_entry and user_id = auth.uid();
  if not found then
    raise exception 'Word not found';
  end if;
  v_box := case when coalesce(p_knew, false) then least(v_box + 1, 6) else 0 end;
  update public.dictionary_entries set
    review_box = v_box,
    last_reviewed_at = now(),
    next_review_at = now() + case v_box
      when 0 then interval '0'
      when 1 then interval '1 day'
      when 2 then interval '3 days'
      when 3 then interval '7 days'
      when 4 then interval '14 days'
      when 5 then interval '30 days'
      else interval '60 days' end
  where id = p_entry and user_id = auth.uid();
end;
$$;

revoke execute on function public.review_word(uuid, boolean) from public, anon;
grant execute on function public.review_word(uuid, boolean) to authenticated;

/* ---------- 2. Fix your mistakes: exercise questions answered wrongly ---------- */
create table if not exists public.exercise_mistakes (
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_slug text not null check (char_length(lesson_slug) between 1 and 200),
  exercise text not null check (exercise in ('matching', 'fillBlank', 'multipleChoice')),
  item_key text not null check (char_length(item_key) between 1 and 200),  -- question number, or the word (matching)
  created_at timestamptz not null default now(),
  primary key (user_id, lesson_slug, exercise, item_key)
);

alter table public.exercise_mistakes enable row level security;

drop policy if exists "Read own mistakes" on public.exercise_mistakes;
create policy "Read own mistakes"
  on public.exercise_mistakes for select to authenticated
  using ((select auth.uid()) = user_id);

-- Save wrong answers, and clear questions now answered correctly.
create or replace function public.record_mistakes(
  p_lesson_slug text, p_exercise text, p_wrong text[], p_right text[]
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
  if p_exercise not in ('matching', 'fillBlank', 'multipleChoice')
     or p_lesson_slug is null or char_length(p_lesson_slug) not between 1 and 200
     or coalesce(cardinality(p_wrong), 0) > 100 or coalesce(cardinality(p_right), 0) > 100 then
    raise exception 'Invalid input';
  end if;

  delete from public.exercise_mistakes
  where user_id = auth.uid() and lesson_slug = p_lesson_slug and exercise = p_exercise
    and item_key = any (coalesce(p_right, '{}'));

  insert into public.exercise_mistakes (user_id, lesson_slug, exercise, item_key)
  select auth.uid(), p_lesson_slug, p_exercise, k
  from unnest(coalesce(p_wrong, '{}')) as k
  where char_length(k) between 1 and 200
  on conflict (user_id, lesson_slug, exercise, item_key) do update set created_at = now();
end;
$$;

revoke execute on function public.record_mistakes(text, text, text[], text[]) from public, anon;
grant execute on function public.record_mistakes(text, text, text[], text[]) to authenticated;

/* ---------- 3. Daily streak + weekly goal ---------- */
create table if not exists public.study_days (
  user_id uuid not null references auth.users (id) on delete cascade,
  day date not null,
  primary key (user_id, day)
);

alter table public.study_days enable row level security;

drop policy if exists "Read own study days" on public.study_days;
create policy "Read own study days"
  on public.study_days for select to authenticated
  using ((select auth.uid()) = user_id);

create table if not exists public.learner_settings (
  user_id uuid primary key references auth.users (id) on delete cascade,
  weekly_goal integer not null default 3 check (weekly_goal between 1 and 14),
  timezone text not null default 'UTC'
);

alter table public.learner_settings enable row level security;

drop policy if exists "Read own learner settings" on public.learner_settings;
create policy "Read own learner settings"
  on public.learner_settings for select to authenticated
  using ((select auth.uid()) = user_id);

-- Mark today (in the student's own time zone) as a study day.
create or replace function public.log_study_day(p_tz text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_tz text := 'UTC';
begin
  if auth.uid() is null then
    raise exception 'Not logged in';
  end if;
  if p_tz is not null and exists (select 1 from pg_catalog.pg_timezone_names where name = p_tz) then
    v_tz := p_tz;
  end if;

  insert into public.study_days (user_id, day)
  values (auth.uid(), (now() at time zone v_tz)::date)
  on conflict do nothing;

  insert into public.learner_settings (user_id, timezone)
  values (auth.uid(), v_tz)
  on conflict (user_id) do update set timezone = excluded.timezone;
end;
$$;

revoke execute on function public.log_study_day(text) from public, anon;
grant execute on function public.log_study_day(text) to authenticated;

create or replace function public.set_weekly_goal(p_goal integer)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then
    raise exception 'Not logged in';
  end if;
  if p_goal is null or p_goal not between 1 and 14 then
    raise exception 'Invalid goal';
  end if;
  insert into public.learner_settings (user_id, weekly_goal)
  values (auth.uid(), p_goal)
  on conflict (user_id) do update set weekly_goal = excluded.weekly_goal;
end;
$$;

revoke execute on function public.set_weekly_goal(integer) from public, anon;
grant execute on function public.set_weekly_goal(integer) to authenticated;

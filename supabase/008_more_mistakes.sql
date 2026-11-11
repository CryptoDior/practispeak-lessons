-- Practispeak: "Fix your mistakes" also picks up Picture Quiz, Complete the Sentence and Read the Menu
-- Run once in Supabase → SQL Editor → New query → paste → Run. (Needs 007_study_tools.sql first.)

alter table public.exercise_mistakes drop constraint if exists exercise_mistakes_exercise_check;
alter table public.exercise_mistakes add constraint exercise_mistakes_exercise_check
  check (exercise in ('matching', 'fillBlank', 'multipleChoice', 'pictureQuiz', 'completeSentence', 'menuReading'));

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
  if p_exercise not in ('matching', 'fillBlank', 'multipleChoice', 'pictureQuiz', 'completeSentence', 'menuReading')
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

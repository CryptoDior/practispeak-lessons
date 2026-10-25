-- Practispeak: "My Dictionary" — each student's saved words
-- Run once in Supabase → SQL Editor → New query → paste → Run.

create table if not exists public.dictionary_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  word text not null check (char_length(word) between 1 and 120),
  word_key text generated always as (lower(btrim(word))) stored,  -- for "already saved?"
  part_of_speech text,
  definition text not null check (char_length(definition) <= 1000),
  example text check (char_length(example) <= 1000),
  in_game text check (char_length(in_game) <= 1000),
  in_real_life text check (char_length(in_real_life) <= 1000),
  image_slug text,
  audio_slugs text[],
  lesson_slug text,
  translation text,          -- filled later by "save from the translate tool"
  translation_lang text,
  created_at timestamptz not null default now(),
  unique (user_id, word_key)
);

create index if not exists dictionary_entries_user_created
  on public.dictionary_entries (user_id, created_at desc);

alter table public.dictionary_entries enable row level security;

-- Is the logged-in user a student right now? (Premium, and any Wix package not yet ended)
create or replace function public.is_student()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
      and p.plan = 'pro'
      and (p.pro_until is null or p.pro_until > now())
  );
$$;

revoke execute on function public.is_student() from public, anon;
grant execute on function public.is_student() to authenticated;

-- Students see and remove only their own words…
drop policy if exists "Read own dictionary" on public.dictionary_entries;
create policy "Read own dictionary"
  on public.dictionary_entries for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Remove own words" on public.dictionary_entries;
create policy "Remove own words"
  on public.dictionary_entries for delete to authenticated
  using ((select auth.uid()) = user_id);

-- …and only current students can add words, only to their own dictionary.
drop policy if exists "Students add own words" on public.dictionary_entries;
create policy "Students add own words"
  on public.dictionary_entries for insert to authenticated
  with check ((select auth.uid()) = user_id and (select public.is_student()));

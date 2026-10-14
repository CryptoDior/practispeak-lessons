-- Practispeak: student profiles + plan (free / pro)
-- Run once in Supabase → SQL Editor → New query → paste → Run.
-- Then run 002_marketing_opt_in.sql. If you ever re-run this file, re-run 002 after it
-- (it replaces handle_new_user with the version that saves marketing consent).

-- 1. One profile row per user
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  full_name text,
  plan text not null default 'free' check (plan in ('free', 'pro')),
  created_at timestamptz not null default now()
);

-- 2. Lock it down: students may READ their own row, nothing else.
--    There are deliberately NO insert/update/delete policies, so a student
--    can never upgrade themselves. You change `plan` from the dashboard.
alter table public.profiles enable row level security;

drop policy if exists "Students can read their own profile" on public.profiles;
create policy "Students can read their own profile"
  on public.profiles for select
  to authenticated
  using ((select auth.uid()) = id);

-- 3. Auto-create a free profile whenever someone signs up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data ->> 'full_name');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 4. Backfill anyone who signed up before this ran
insert into public.profiles (id, email, full_name)
select id, email, raw_user_meta_data ->> 'full_name' from auth.users
on conflict (id) do nothing;

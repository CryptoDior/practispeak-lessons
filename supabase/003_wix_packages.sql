-- Practispeak: automatic Premium from Wix lesson packages
-- Run once in Supabase → SQL Editor → New query → paste → Run.

-- plan_source: 'wix' = unlocked automatically from an active Wix lesson package.
--              empty  = set by you in the Table Editor (never changed automatically).
-- pro_until:   when that Wix package ends; Premium switches off by itself after this.
--              empty  = no end date.
alter table public.profiles
  add column if not exists plan_source text,
  add column if not exists pro_until timestamptz;

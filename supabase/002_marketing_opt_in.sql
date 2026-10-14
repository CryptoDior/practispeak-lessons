-- Practispeak: marketing email consent (GDPR / POPIA opt-in)
-- Run once in Supabase → SQL Editor → New query → paste → Run.

-- 1. Consent columns. Default is NOT opted in.
--    marketing_consent_at = when they last ticked or unticked the box (your proof).
alter table public.profiles
  add column if not exists marketing_opt_in boolean not null default false,
  add column if not exists marketing_consent_at timestamptz;

-- 2. Save the sign-up checkbox into the new profile
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  opted_in boolean;
begin
  opted_in := coalesce(new.raw_user_meta_data ->> 'marketing_opt_in', '') = 'true';
  insert into public.profiles (id, email, full_name, marketing_opt_in, marketing_consent_at)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'full_name',
    opted_in,
    case when opted_in then now() end
  );
  return new;
end;
$$;

-- 3. Let a logged-in student change ONLY their own consent.
--    This is the only way a student can write to profiles — `plan` stays untouchable.
create or replace function public.set_marketing_opt_in(opt_in boolean)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then
    raise exception 'Not logged in';
  end if;
  update public.profiles
     set marketing_opt_in = opt_in,
         marketing_consent_at = now()
   where id = auth.uid();
end;
$$;

revoke execute on function public.set_marketing_opt_in(boolean) from public, anon;
grant execute on function public.set_marketing_opt_in(boolean) to authenticated;

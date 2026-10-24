'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';

export type AuthResult = { error?: string; message?: string } | undefined;

/** Only allow redirects back into this site (blocks //evil.com tricks). */
function safeNext(value: FormDataEntryValue | null): string {
  const next = typeof value === 'string' ? value : '';
  return next.startsWith('/') && !next.startsWith('//') ? next : '/';
}

export async function login(formData: FormData): Promise<AuthResult> {
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  if (!email || !password) return { error: 'Please enter your email and password.' };

  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return {
      error:
        error.message === 'Email not confirmed'
          ? 'Please confirm your email first — check your inbox for the link.'
          : 'Incorrect email or password.',
    };
  }

  revalidatePath('/', 'layout');
  redirect(safeNext(formData.get('next')));
}

export async function signup(formData: FormData): Promise<AuthResult> {
  const fullName = String(formData.get('full_name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');
  const marketingOptIn = formData.get('marketing_opt_in') === 'on';
  if (!email || !password) return { error: 'Please enter your email and a password.' };
  if (password.length < 8) return { error: 'Your password needs at least 8 characters.' };

  const next = safeNext(formData.get('next'));
  const origin = headers().get('origin') ?? '';
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // Saved into profiles by the handle_new_user trigger.
      data: { full_name: fullName, marketing_opt_in: marketingOptIn },
      emailRedirectTo: `${origin}/auth/confirm?next=${encodeURIComponent(next)}`,
    },
  });
  if (error) return { error: error.message };

  // Email confirmation off → logged in straight away.
  if (data.session) {
    revalidatePath('/', 'layout');
    redirect(next);
  }

  // Email confirmation on → they need to click the link we sent.
  return { message: `Almost there! We sent a confirmation link to ${email}. Click it to activate your account.` };
}

/** Forgot password: email a reset link. Same answer whether or not the account exists. */
export async function requestPasswordReset(formData: FormData): Promise<AuthResult> {
  const email = String(formData.get('email') ?? '').trim();
  if (!email) return { error: 'Please enter your email.' };

  const origin = headers().get('origin') ?? '';
  const supabase = createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/confirm?next=/reset-password`,
  });
  // Rate limits are worth telling them about; anything else stays generic (no account probing).
  if (error?.status === 429) return { error: 'Too many requests — please wait a few minutes and try again.' };

  return {
    message: `If ${email} has a Practispeak account, we've sent a link to reset your password. Check your inbox (and spam).`,
  };
}

/** Reset password: set a new password for the user who arrived via the emailed link. */
export async function updatePassword(formData: FormData): Promise<AuthResult> {
  const password = String(formData.get('password') ?? '');
  const confirm = String(formData.get('confirm') ?? '');
  if (password.length < 8) return { error: 'Your password needs at least 8 characters.' };
  if (password !== confirm) return { error: 'The two passwords don’t match.' };

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: 'This reset link has expired. Please request a new one.' };

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    return {
      error:
        error.code === 'same_password'
          ? 'Please choose a password you haven’t used before.'
          : 'Couldn’t update your password. Please try again.',
    };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  revalidatePath('/', 'layout');
  redirect('/');
}

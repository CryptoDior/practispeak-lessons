/* Pure helper — safe for client and server. */

export type Plan = 'free' | 'pro';

/**
 * A profile counts as Premium when plan = 'pro' and, for students unlocked from a
 * Wix lesson package, that package hasn't ended yet (pro_until in the future).
 * Manually-set Premium (pro_until = null) never expires.
 */
export function effectivePlan(row: { plan?: string | null; pro_until?: string | null } | null | undefined): Plan {
  if (row?.plan !== 'pro') return 'free';
  if (row.pro_until && new Date(row.pro_until).getTime() <= Date.now()) return 'free';
  return 'pro';
}

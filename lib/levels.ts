/* Pure level-scale utilities — no lesson data imports, safe for client bundles. */

export const LEVEL_CODES = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export const LEVEL_MIN = 1;
export const LEVEL_MAX = 6;

const LEVEL_INDEX: Record<string, number> = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
  C2: 6,
};

export interface Band {
  id: string;
  label: string;
  /** inclusive [lo, hi] on the 1-6 scale */
  range: [number, number];
}

export const BANDS: Band[] = [
  { id: 'beginner', label: 'Beginner', range: [1, 2] },
  { id: 'intermediate', label: 'Intermediate', range: [3, 4] },
  { id: 'advanced', label: 'Advanced', range: [5, 5] },
  { id: 'proficient', label: 'Proficient', range: [6, 6] },
];

export function bandOfIndex(i: number): Band {
  return BANDS.find((b) => i >= b.range[0] && i <= b.range[1]) ?? BANDS[0];
}

export function codeOfIndex(i: number): string {
  return LEVEL_CODES[Math.min(Math.max(i, LEVEL_MIN), LEVEL_MAX) - 1];
}

/** 'A1' -> [1,1]; 'A1-A2' -> [1,2]; 'B1-B2' -> [3,4]; unknown -> full range */
export function levelToRange(level: string): [number, number] {
  const parts = level.split('-').map((p) => LEVEL_INDEX[p.trim()]);
  if (parts.length && parts.every((p) => p !== undefined)) {
    return [Math.min(...(parts as number[])), Math.max(...(parts as number[]))];
  }
  return [LEVEL_MIN, LEVEL_MAX];
}

/** Band a lesson is filed under on category pages (by its lowest level). */
export function bandForLevel(level: string): Band {
  return bandOfIndex(levelToRange(level)[0]);
}

/** "A1 Beginner – C2 Proficient" pieces for a range chip row. */
export function describeRange([lo, hi]: [number, number]) {
  return {
    minCode: codeOfIndex(lo),
    minBand: bandOfIndex(lo).label,
    maxCode: codeOfIndex(hi),
    maxBand: bandOfIndex(hi).label,
    same: lo === hi,
  };
}

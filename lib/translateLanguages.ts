/* Translate tool languages — plain data, shared by the browser (menu) and the server (API). */

export const TRANSLATE_LANGUAGES = [
  { code: 'es', name: 'Spanish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'nl', name: 'Dutch' },
  { code: 'pl', name: 'Polish' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'ru', name: 'Russian' },
  { code: 'cs', name: 'Czech' },
  { code: 'sk', name: 'Slovak' },
  { code: 'ro', name: 'Romanian' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'el', name: 'Greek' },
  { code: 'tr', name: 'Turkish' },
  { code: 'sv', name: 'Swedish' },
  { code: 'ar', name: 'Arabic' },
  { code: 'fa', name: 'Persian' },
  { code: 'hi', name: 'Hindi' },
  { code: 'zh', name: 'Chinese (Simplified)' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'th', name: 'Thai' },
  { code: 'id', name: 'Indonesian' },
  { code: 'af', name: 'Afrikaans' },
  { code: 'zu', name: 'Zulu' },
] as const;

export type TranslateLangCode = (typeof TRANSLATE_LANGUAGES)[number]['code'];

export const languageName = (code: string) => TRANSLATE_LANGUAGES.find((l) => l.code === code)?.name;

/** Longest highlight we'll translate (characters) — a long sentence or two. */
export const MAX_TRANSLATE_CHARS = 400;

/** Shared shape of the picture-word games (Spelling Bee, Fast Vocab, Hangman). */

export interface GameItem {
  /** Picture URL (game image, or a lesson's vocabulary picture) */
  image: string;
  /** Emoji fallback shown when the image is missing */
  scene: string;
  /** The word */
  word: string;
  /** 'contain' shows the whole picture (lesson images come in different shapes) */
  fit?: 'cover' | 'contain';
}

export interface GameSet {
  id: string;
  label: string;
  blurb: string;
  items: GameItem[];
  /** Set built from a lesson's vocabulary (its words and pictures) — see lib/gameSets.ts */
  lessonSlug?: string;
  /** Heading the topic is listed under, e.g. "Everyday Life · A1–A2" */
  group?: string;
}

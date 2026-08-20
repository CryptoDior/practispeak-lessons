export interface WordSearchItem {
  /** Image; drop a file at `public/games/word-search/<word>.jpg` (emoji fallback until then) */
  image: string;
  /** Emoji fallback shown when the image is missing */
  scene: string;
  /** The word hidden in the grid (lowercase a–z, single word, ≤ 8 letters) */
  word: string;
}

export interface WordSearchSet {
  id: string;
  label: string;
  blurb: string;
  items: WordSearchItem[];
}

const IMG = '/games/word-search';
const it = (word: string, scene: string): WordSearchItem => ({ image: `${IMG}/${word}.jpg`, scene, word });

/** Puzzles for the Word Search game — 6 words each, matched to pictures. */
export const WORDSEARCH_SETS: WordSearchSet[] = [
  {
    id: 'animals',
    label: 'Animals',
    blurb: 'Find the animals.',
    items: [
      it('pig', '🐷'),
      it('tiger', '🐯'),
      it('fly', '🪰'),
      it('rhino', '🦏'),
      it('giraffe', '🦒'),
      it('fish', '🐟'),
    ],
  },
  {
    id: 'food',
    label: 'Food',
    blurb: 'Find the food words.',
    items: [
      it('apple', '🍎'),
      it('banana', '🍌'),
      it('lemon', '🍋'),
      it('bread', '🍞'),
      it('cheese', '🧀'),
      it('grape', '🍇'),
    ],
  },
  {
    id: 'home',
    label: 'Home',
    blurb: 'Find things at home.',
    items: [
      it('chair', '🪑'),
      it('table', '🍽️'),
      it('lamp', '💡'),
      it('clock', '🕐'),
      it('door', '🚪'),
      it('mirror', '🪞'),
    ],
  },
  {
    id: 'nature',
    label: 'Nature',
    blurb: 'Find words from nature.',
    items: [
      it('sun', '☀️'),
      it('tree', '🌳'),
      it('star', '⭐'),
      it('moon', '🌙'),
      it('cloud', '☁️'),
      it('river', '🏞️'),
    ],
  },
  {
    id: 'jobs',
    label: 'Jobs',
    blurb: 'Find the jobs.',
    items: [
      it('doctor', '🧑‍⚕️'),
      it('nurse', '🩺'),
      it('pilot', '🧑‍✈️'),
      it('farmer', '🧑‍🌾'),
      it('chef', '🧑‍🍳'),
      it('actor', '🎭'),
    ],
  },
];

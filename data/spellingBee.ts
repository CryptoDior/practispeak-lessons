export interface SpellItem {
  /** Image prompt; drop a file at `public/games/spelling-bee/<file>` (emoji fallback until then) */
  image: string;
  /** Emoji fallback shown when the image is missing */
  scene: string;
  /** The word to spell (lowercase a–z, single word) */
  word: string;
}

export interface SpellSet {
  id: string;
  label: string;
  blurb: string;
  items: SpellItem[];
}

const IMG = '/games/spelling-bee';
const item = (word: string, scene: string): SpellItem => ({
  image: `${IMG}/${word}.jpg`,
  scene,
  word,
});

/**
 * Content for the Spelling Bee game. Each item shows a picture; the player
 * spells the word using the on-screen or physical keyboard.
 */
export const SPELL_SETS: SpellSet[] = [
  {
    id: 'animals',
    label: 'Animals',
    blurb: 'Spell the names of common animals.',
    items: [
      item('cat', '🐱'),
      item('dog', '🐶'),
      item('fish', '🐟'),
      item('bird', '🐦'),
      item('lion', '🦁'),
      item('frog', '🐸'),
      item('bear', '🐻'),
      item('duck', '🦆'),
    ],
  },
  {
    id: 'food',
    label: 'Food',
    blurb: 'Spell everyday food words.',
    items: [
      item('apple', '🍎'),
      item('bread', '🍞'),
      item('cake', '🍰'),
      item('egg', '🥚'),
      item('milk', '🥛'),
      item('rice', '🍚'),
      item('pizza', '🍕'),
      item('banana', '🍌'),
    ],
  },
  {
    id: 'home',
    label: 'Home',
    blurb: 'Spell things you find at home.',
    items: [
      item('house', '🏠'),
      item('chair', '🪑'),
      item('bed', '🛏️'),
      item('door', '🚪'),
      item('lamp', '💡'),
      item('clock', '🕐'),
      item('key', '🔑'),
      item('window', '🪟'),
    ],
  },
  {
    id: 'nature',
    label: 'Nature',
    blurb: 'Spell words from the natural world.',
    items: [
      item('sun', '☀️'),
      item('tree', '🌳'),
      item('star', '⭐'),
      item('moon', '🌙'),
      item('rain', '🌧️'),
      item('flower', '🌸'),
      item('leaf', '🍃'),
      item('cloud', '☁️'),
    ],
  },
  {
    id: 'body',
    label: 'The Body',
    blurb: 'Spell the parts of the body.',
    items: [
      item('hand', '✋'),
      item('foot', '🦶'),
      item('eye', '👁️'),
      item('ear', '👂'),
      item('nose', '👃'),
      item('mouth', '👄'),
      item('tooth', '🦷'),
      item('hair', '💇'),
    ],
  },
];

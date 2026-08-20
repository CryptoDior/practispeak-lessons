export interface FastVocabItem {
  /** Image; drop a file at `public/games/fast-vocab/<word>.jpg` (emoji fallback until then) */
  image: string;
  /** Emoji fallback shown when the image is missing */
  scene: string;
  /** The word to match to the picture */
  word: string;
}

export interface FastVocabSet {
  id: string;
  label: string;
  blurb: string;
  items: FastVocabItem[];
}

const IMG = '/games/fast-vocab';
const it = (word: string, scene: string): FastVocabItem => ({ image: `${IMG}/${word}.jpg`, scene, word });

/** Word banks for Fast Vocab — matched to pictures, played in batches of three. */
export const FASTVOCAB_SETS: FastVocabSet[] = [
  {
    id: 'animals',
    label: 'Animals',
    blurb: 'Match the animals.',
    items: [
      it('dog', '🐶'),
      it('cat', '🐱'),
      it('elephant', '🐘'),
      it('crocodile', '🐊'),
      it('lion', '🦁'),
      it('tiger', '🐯'),
      it('fish', '🐟'),
      it('bird', '🐦'),
      it('frog', '🐸'),
      it('bear', '🐻'),
      it('snake', '🐍'),
      it('monkey', '🐒'),
    ],
  },
  {
    id: 'food',
    label: 'Food',
    blurb: 'Match the food.',
    items: [
      it('apple', '🍎'),
      it('banana', '🍌'),
      it('bread', '🍞'),
      it('cheese', '🧀'),
      it('egg', '🥚'),
      it('milk', '🥛'),
      it('pizza', '🍕'),
      it('cake', '🍰'),
      it('lemon', '🍋'),
      it('grape', '🍇'),
      it('rice', '🍚'),
      it('carrot', '🥕'),
    ],
  },
  {
    id: 'jobs',
    label: 'Jobs',
    blurb: 'Match the jobs.',
    items: [
      it('teacher', '🧑‍🏫'),
      it('doctor', '🧑‍⚕️'),
      it('nurse', '🩺'),
      it('pilot', '🧑‍✈️'),
      it('farmer', '🧑‍🌾'),
      it('chef', '🧑‍🍳'),
      it('actor', '🎭'),
      it('singer', '🎤'),
      it('artist', '🎨'),
      it('driver', '🚗'),
      it('dentist', '🦷'),
      it('waiter', '🍽️'),
    ],
  },
  {
    id: 'home',
    label: 'Home',
    blurb: 'Match the household things.',
    items: [
      it('chair', '🪑'),
      it('table', '🍽️'),
      it('lamp', '💡'),
      it('clock', '🕐'),
      it('door', '🚪'),
      it('mirror', '🪞'),
      it('bed', '🛏️'),
      it('window', '🪟'),
      it('sofa', '🛋️'),
      it('plate', '🍽️'),
      it('cup', '☕'),
      it('spoon', '🥄'),
    ],
  },
  {
    id: 'nature',
    label: 'Nature',
    blurb: 'Match the nature words.',
    items: [
      it('sun', '☀️'),
      it('tree', '🌳'),
      it('star', '⭐'),
      it('moon', '🌙'),
      it('cloud', '☁️'),
      it('river', '🏞️'),
      it('flower', '🌸'),
      it('mountain', '⛰️'),
      it('leaf', '🍃'),
      it('rain', '🌧️'),
      it('snow', '❄️'),
      it('beach', '🏖️'),
    ],
  },
];

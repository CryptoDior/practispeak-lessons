export interface HangmanItem {
  /** Image; drop a file at `public/games/hangman/<word>.jpg` (emoji fallback until then) */
  image: string;
  /** Emoji fallback shown when the image is missing */
  scene: string;
  /** The word to guess (lowercase a–z, single word) */
  word: string;
}

export interface HangmanSet {
  id: string;
  label: string;
  blurb: string;
  items: HangmanItem[];
}

const IMG = '/games/hangman';
const it = (word: string, scene: string): HangmanItem => ({ image: `${IMG}/${word}.jpg`, scene, word });

/** Word banks for Hangman. Single words, lowercase a–z. */
export const HANGMAN_SETS: HangmanSet[] = [
  {
    id: 'animals',
    label: 'Animals',
    blurb: 'Guess the animal.',
    items: [
      it('elephant', '🐘'),
      it('giraffe', '🦒'),
      it('penguin', '🐧'),
      it('dolphin', '🐬'),
      it('kangaroo', '🦘'),
      it('butterfly', '🦋'),
      it('crocodile', '🐊'),
      it('squirrel', '🐿️'),
      it('hedgehog', '🦔'),
      it('ostrich', '🦤'),
    ],
  },
  {
    id: 'food',
    label: 'Food & Drink',
    blurb: 'Guess the food word.',
    items: [
      it('sandwich', '🥪'),
      it('chocolate', '🍫'),
      it('spaghetti', '🍝'),
      it('pineapple', '🍍'),
      it('strawberry', '🍓'),
      it('breakfast', '🍳'),
      it('vegetable', '🥦'),
      it('hamburger', '🍔'),
      it('cucumber', '🥒'),
      it('pancake', '🥞'),
    ],
  },
  {
    id: 'countries',
    label: 'Countries',
    blurb: 'Guess the country.',
    items: [
      it('brazil', '🇧🇷'),
      it('canada', '🇨🇦'),
      it('germany', '🇩🇪'),
      it('japan', '🇯🇵'),
      it('mexico', '🇲🇽'),
      it('egypt', '🇪🇬'),
      it('france', '🇫🇷'),
      it('australia', '🇦🇺'),
      it('sweden', '🇸🇪'),
      it('morocco', '🇲🇦'),
    ],
  },
  {
    id: 'house',
    label: 'Around the House',
    blurb: 'Guess the household word.',
    items: [
      it('kitchen', '🍽️'),
      it('window', '🪟'),
      it('bedroom', '🛏️'),
      it('cushion', '🛋️'),
      it('blanket', '🛌'),
      it('mirror', '🪞'),
      it('curtain', '🎦'),
      it('wardrobe', '🚪'),
      it('cupboard', '🗄️'),
      it('ceiling', '🔝'),
    ],
  },
  {
    id: 'jobs',
    label: 'Jobs',
    blurb: 'Guess the job.',
    items: [
      it('teacher', '🧑‍🏫'),
      it('doctor', '🧑‍⚕️'),
      it('engineer', '🧑‍🔧'),
      it('farmer', '🧑‍🌾'),
      it('waiter', '🍽️'),
      it('lawyer', '⚖️'),
      it('dentist', '🦷'),
      it('plumber', '🔧'),
      it('scientist', '🧑‍🔬'),
      it('musician', '🎸'),
    ],
  },
];

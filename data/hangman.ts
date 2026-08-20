export interface HangmanSet {
  id: string;
  label: string;
  blurb: string;
  words: string[];
}

/** Word banks for Hangman. Single words, lowercase a–z. */
export const HANGMAN_SETS: HangmanSet[] = [
  {
    id: 'animals',
    label: 'Animals',
    blurb: 'Guess the animal.',
    words: [
      'elephant',
      'giraffe',
      'penguin',
      'dolphin',
      'kangaroo',
      'butterfly',
      'crocodile',
      'squirrel',
      'hedgehog',
      'ostrich',
    ],
  },
  {
    id: 'food',
    label: 'Food & Drink',
    blurb: 'Guess the food word.',
    words: [
      'sandwich',
      'chocolate',
      'spaghetti',
      'pineapple',
      'strawberry',
      'breakfast',
      'vegetable',
      'hamburger',
      'cucumber',
      'pancake',
    ],
  },
  {
    id: 'countries',
    label: 'Countries',
    blurb: 'Guess the country.',
    words: [
      'brazil',
      'canada',
      'germany',
      'japan',
      'mexico',
      'egypt',
      'france',
      'australia',
      'sweden',
      'morocco',
    ],
  },
  {
    id: 'house',
    label: 'Around the House',
    blurb: 'Guess the household word.',
    words: [
      'kitchen',
      'window',
      'bedroom',
      'cushion',
      'blanket',
      'mirror',
      'curtain',
      'wardrobe',
      'cupboard',
      'ceiling',
    ],
  },
  {
    id: 'jobs',
    label: 'Jobs',
    blurb: 'Guess the job.',
    words: [
      'teacher',
      'doctor',
      'engineer',
      'farmer',
      'waiter',
      'lawyer',
      'dentist',
      'plumber',
      'scientist',
      'musician',
    ],
  },
];

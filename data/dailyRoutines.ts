export interface RoutineItem {
  /** Circular image; drop a file at `public/games/daily-routines/<file>` (emoji fallback until then) */
  image: string;
  /** Emoji fallback shown when the image is missing */
  scene: string;
  /** The routine phrase, e.g. "Get up" */
  phrase: string;
}

export interface RoutineSet {
  id: string;
  label: string;
  blurb: string;
  items: RoutineItem[];
}

const IMG = '/games/daily-routines';
const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const item = (phrase: string, scene: string): RoutineItem => ({
  image: `${IMG}/${slugify(phrase)}.jpg`,
  scene,
  phrase,
});

/**
 * Content for the Daily Routines game. The player hears/reads a phrase and
 * clicks the matching picture from three circular options.
 */
export const ROUTINE_SETS: RoutineSet[] = [
  {
    id: 'morning',
    label: 'Morning Routine',
    blurb: 'What we do when we wake up.',
    items: [
      item('Wake up', '⏰'),
      item('Get up', '🛏️'),
      item('Wash your face', '🧼'),
      item('Brush your teeth', '🪥'),
      item('Take a shower', '🚿'),
      item('Get dressed', '👕'),
      item('Comb your hair', '💇'),
      item('Eat breakfast', '🍳'),
    ],
  },
  {
    id: 'daytime',
    label: 'Daytime',
    blurb: 'Things we do during the day.',
    items: [
      item('Go to work', '💼'),
      item('Start work', '💻'),
      item('Have a meeting', '👥'),
      item('Have lunch', '🍽️'),
      item('Take a break', '☕'),
      item('Check your phone', '📱'),
      item('Go shopping', '🛒'),
      item('Come home', '🏠'),
    ],
  },
  {
    id: 'evening',
    label: 'Evening Routine',
    blurb: 'What we do before bed.',
    items: [
      item('Cook dinner', '🍳'),
      item('Eat dinner', '🍽️'),
      item('Wash the dishes', '🍽️'),
      item('Watch TV', '📺'),
      item('Read a book', '📖'),
      item('Take a bath', '🛁'),
      item('Turn off the light', '💡'),
      item('Go to bed', '🛌'),
    ],
  },
];

export interface MonsterItem {
  /**
   * Image shown as the visual prompt. Drop a file at
   * `public/games/monster-phrases/<file>` — until it exists the emoji
   * `scene` is shown instead (automatic fallback).
   */
  image: string;
  /** Emoji fallback shown when the image is missing */
  scene: string;
  /** The correct sentence — split into word tiles for the player to order */
  sentence: string;
}

export interface MonsterSet {
  id: string;
  label: string;
  blurb: string;
  items: MonsterItem[];
}

const IMG = '/games/monster-phrases';

/**
 * Content for the Monster Phrases sentence-building game.
 * Each item shows an image (with an emoji fallback); the player rebuilds the
 * sentence from shuffled word tiles. Grammar is reinforced by the word set.
 */
export const MONSTER_SETS: MonsterSet[] = [
  {
    id: 'is-are',
    label: 'Is / Are',
    blurb: 'Describe things with is and are.',
    items: [
      { image: `${IMG}/elephant-big.jpg`, scene: '🐘', sentence: 'The elephant is big' },
      { image: `${IMG}/mouse-small.jpg`, scene: '🐭', sentence: 'The mouse is small' },
      { image: `${IMG}/sun-hot.jpg`, scene: '☀️', sentence: 'The sun is hot' },
      { image: `${IMG}/cats-cute.jpg`, scene: '🐱🐱', sentence: 'The cats are cute' },
      { image: `${IMG}/apples-red.jpg`, scene: '🍎🍎🍎', sentence: 'The apples are red' },
      { image: `${IMG}/trees-tall.jpg`, scene: '🌳🌳', sentence: 'The trees are tall' },
      { image: `${IMG}/turtle-slow.jpg`, scene: '🐢', sentence: 'The turtle is slow' },
      { image: `${IMG}/stars-bright.jpg`, scene: '⭐⭐', sentence: 'The stars are bright' },
    ],
  },
  {
    id: 'present-continuous',
    label: 'Present Continuous',
    blurb: 'Say what is happening right now.',
    items: [
      { image: `${IMG}/reading-book.jpg`, scene: '👩📖', sentence: 'She is reading a book' },
      { image: `${IMG}/playing-football.jpg`, scene: '👦⚽', sentence: 'He is playing football' },
      { image: `${IMG}/singing-song.jpg`, scene: '👧🎵', sentence: 'She is singing a song' },
      { image: `${IMG}/making-pizza.jpg`, scene: '🧑‍🍳🍕', sentence: 'He is making a pizza' },
      { image: `${IMG}/man-swimming.jpg`, scene: '🏊', sentence: 'The man is swimming' },
      { image: `${IMG}/dog-eating-bone.jpg`, scene: '🐕🦴', sentence: 'The dog is eating a bone' },
      { image: `${IMG}/baby-sleeping.jpg`, scene: '👶😴', sentence: 'The baby is sleeping' },
      { image: `${IMG}/raining-outside.jpg`, scene: '🌧️', sentence: 'It is raining outside' },
    ],
  },
  {
    id: 'past-simple',
    label: 'Past Simple',
    blurb: 'Talk about finished actions.',
    items: [
      { image: `${IMG}/played-football.jpg`, scene: '👦⚽', sentence: 'He played football yesterday' },
      { image: `${IMG}/ate-cake.jpg`, scene: '👧🎂', sentence: 'She ate the cake' },
      { image: `${IMG}/drove-city.jpg`, scene: '🚗💨', sentence: 'We drove to the city' },
      { image: `${IMG}/rained-all-day.jpg`, scene: '🌧️', sentence: 'It rained all day' },
      { image: `${IMG}/watched-film.jpg`, scene: '👨📺', sentence: 'He watched a film' },
      { image: `${IMG}/cat-drank-milk.jpg`, scene: '🐈🥛', sentence: 'The cat drank the milk' },
      { image: `${IMG}/sent-letter.jpg`, scene: '📮✉️', sentence: 'She sent a letter' },
      { image: `${IMG}/ran-fast.jpg`, scene: '🏃💨', sentence: 'They ran very fast' },
    ],
  },
  {
    id: 'can',
    label: "Can / Can't",
    blurb: 'Say what is and is not possible.',
    items: [
      { image: `${IMG}/fish-swim.jpg`, scene: '🐟', sentence: 'A fish can swim' },
      { image: `${IMG}/bird-fly.jpg`, scene: '🐦', sentence: 'A bird can fly' },
      { image: `${IMG}/penguin-cant-fly.jpg`, scene: '🐧🚫✈️', sentence: "A penguin can't fly" },
      { image: `${IMG}/monkey-climb.jpg`, scene: '🐒🌳', sentence: 'A monkey can climb trees' },
      { image: `${IMG}/turtle-cant-run.jpg`, scene: '🐢🚫🏃', sentence: "A turtle can't run fast" },
      { image: `${IMG}/kangaroo-jump.jpg`, scene: '🦘', sentence: 'A kangaroo can jump high' },
      { image: `${IMG}/dolphin-swim.jpg`, scene: '🐬', sentence: 'A dolphin can swim fast' },
      { image: `${IMG}/elephant-cant-jump.jpg`, scene: '🐘🚫🦘', sentence: "An elephant can't jump" },
    ],
  },
  {
    id: 'have-has',
    label: 'Have / Has',
    blurb: 'Talk about what people own.',
    items: [
      { image: `${IMG}/she-has-cat.jpg`, scene: '👩🐱', sentence: 'She has a cat' },
      { image: `${IMG}/he-has-car.jpg`, scene: '👨🚗', sentence: 'He has a fast car' },
      { image: `${IMG}/boy-has-bag.jpg`, scene: '👦🎒', sentence: 'The boy has a bag' },
      { image: `${IMG}/two-balloons.jpg`, scene: '👧🎈🎈', sentence: 'She has two balloons' },
      { image: `${IMG}/red-roses.jpg`, scene: '👵🌹', sentence: 'The woman has red roses' },
      { image: `${IMG}/small-family.jpg`, scene: '👨‍👩‍👧', sentence: 'They have a small family' },
      { image: `${IMG}/child-ice-cream.jpg`, scene: '🧒🍦', sentence: 'The child has an ice cream' },
      { image: `${IMG}/two-dogs.jpg`, scene: '👨🐶🐶', sentence: 'He has two dogs' },
    ],
  },
];

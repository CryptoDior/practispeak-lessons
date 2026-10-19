import { Lesson } from '@/types/lesson';

export const talkingStrategy: Lesson = {
  slug: 'talking-strategy',
  title: 'Talking Strategy',
  subtitle: 'The phrases competitive players use to plan, warn, and win',
  level: 'B1-B2',
  description:
    'Learn the words and phrases players use to plan a round, warn their team and decide what to do next.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/talking-strategy-hero.png',

  vocabulary: [
    {
      word: 'CALLOUT',
      partOfSpeech: 'noun',
      definition: 'Information you tell your team about where the enemies are.',
      example: 'Good callout: two enemies at B site!',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/callout.png',
    },
    {
      word: 'STRATEGY',
      partOfSpeech: 'noun',
      definition: 'A plan for how your team will win.',
      example: 'Our strategy is to take the middle first.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/strategy.png',
    },
    {
      word: 'UNCOVER',
      partOfSpeech: 'verb',
      definition: 'To find out where the enemy is hiding.',
      example: 'Throw a smoke to uncover the player in the corner.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/uncover.png',
    },
    {
      word: 'ANCHOR',
      partOfSpeech: 'verb',
      definition: 'To stay in one place and defend it while your team moves.',
      example: 'You anchor B, and we will take A.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/talking-strategy-anchor.png',
    },
    {
      word: 'COORDINATE',
      partOfSpeech: 'verb',
      definition: 'To plan so that everyone acts at the same time.',
      example: 'Let\'s coordinate and attack together on three.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/coordinate.png',
    },
    {
      word: 'FLANK',
      partOfSpeech: 'verb',
      definition: 'To attack the enemy from the side or from behind.',
      example: 'I will flank them while you keep them busy.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/flank.png',
    },
    {
      word: 'PUSH FORWARD',
      partOfSpeech: 'phrasal verb',
      definition: 'To move towards the enemy and attack.',
      example: 'They are reloading, so push forward now!',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/push-forward.png',
    },
    {
      word: 'ROTATE',
      partOfSpeech: 'verb',
      definition: 'To move quickly to another part of the map.',
      example: 'A site is clear, so rotate to B.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/rotate.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'YOU SHOULD…',
      definition: 'A way to give a teammate strong advice.',
      example: 'You should hold that angle and wait.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/strat-01.png',
    },
    {
      phrase: 'WE COULD…',
      definition: 'A softer way to suggest an idea.',
      example: 'We could split up and check both sites.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/strat-02.png',
    },
    {
      phrase: 'THEY MIGHT…',
      definition: 'A way to warn about something that is possible.',
      example: 'They might be hiding behind the box.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/strat-03.png',
    },
    {
      phrase: 'I CAN COVER…',
      definition: 'A way to say what you can protect for the team.',
      example: 'I can cover the middle for you.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/strat-04.png',
    },
    {
      phrase: 'WE CAN\'T…',
      definition: 'A way to say an idea will not work.',
      example: 'We can\'t push now; we have no health.',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/strat-05.png',
    },
    {
      phrase: 'WHAT IF WE…?',
      definition: 'A way to suggest a new idea as a question.',
      example: 'What if we attack from the back?',
      imageSlug: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/strat-08.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/zara-icon.png',
      text: 'Okay team, what\'s our [[strategy:a plan for how your team will win]] this round?',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'We could take the middle first. They [[might:may, but you are not sure]] not expect it.',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: '[[Callout:information about where the enemies are]]: two enemies at B, one on the roof.',
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/zara-icon.png',
      text: 'Then you should [[anchor:stay in one place and defend it]] B, Maya. Jax and I will [[flank:attack from the side or behind]].',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'I can cover the door. Let\'s [[coordinate:plan so everyone acts at the same time]] — go on three.',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/maya-icon.png',
      text: 'Wait, they might be moving. They just [[rotated:moved quickly to another part of the map]] to A!',
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/zara-icon.png',
      text: 'Good call! Push forward now while they are moving.',
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/jax-icon.png',
      text: 'Round won! What if we try the same plan next round?',
    },
  ],

  matchingExercise: [
    { word: 'CALLOUT', definition: 'Telling your team where the enemies are' },
    { word: 'ANCHOR', definition: 'Staying in one place to defend it' },
    { word: 'FLANK', definition: 'Attacking from the side or behind' },
    { word: 'ROTATE', definition: 'Moving to another part of the map' },
    { word: 'UNCOVER', definition: 'Finding out where the enemy is' },
    { word: 'STRATEGY', definition: 'A plan for how to win' },
  ],

  fillBlankExercise: [
    { before: 'They are reloading, so', after: 'now!', answer: 'push forward' },
    { before: 'Let\'s', after: 'and all attack together.', answer: 'coordinate' },
    { before: 'I will', after: 'B while you take A.', answer: 'anchor' },
    { before: 'A site is empty, so', after: 'to B.', answer: 'rotate' },
    { before: 'Throw a smoke to', after: 'the hidden player.', answer: 'uncover' },
    { before: 'Keep them busy and I will', after: 'them.', answer: 'flank' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Jax suggest first?',
      options: ['Waiting in the base', 'Taking the middle first', 'Rotating to A', 'Buying new weapons'],
      correctIndex: 1,
    },
    {
      question: 'Where are the two enemies in Maya\'s callout?',
      options: ['At A', 'On the roof', 'At B', 'In the middle'],
      correctIndex: 2,
    },
    {
      question: 'What does Zara ask Maya to do?',
      options: ['Anchor B', 'Flank the enemy', 'Push forward', 'Rotate to A'],
      correctIndex: 0,
    },
    {
      question: 'What do the enemies do later?',
      options: ['They push B', 'They rotate to A', 'They give up', 'They hide on the roof'],
      correctIndex: 1,
    },
    {
      question: 'What does Jax want to do next round?',
      options: ['Try a new plan', 'Play alone', 'Use the same plan', 'Stay at B'],
      correctIndex: 2,
    },
  ],
};

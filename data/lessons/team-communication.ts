import { Lesson } from '@/types/lesson';

export const teamCommunication: Lesson = {
  slug: 'team-communication',
  title: 'Team Communication in Gaming',
  subtitle: 'Master the language of teamwork and coordination',
  level: 'B1-B2',
  description:
    'Learn the vocabulary and phrases used by gamers when working as a team — from making callouts to coordinating strategies.',

  // ─── Header hero image ────────────────────────────────────────────────────
  // To update: drop the new image in public/images/ and change the path below.
  // Naming convention: {lesson-slug}-hero.jpg  e.g. team-communication-hero.jpg
  // If the file is missing the header shows a soft blue gradient placeholder.
  heroImage: '/images/team-communication-hero.png',
  // ─────────────────────────────────────────────────────────────────────────

  vocabulary: [
    {
      word: 'TEAMMATE',
      partOfSpeech: 'noun',
      definition: 'A person who is on your team and plays alongside you.',
      example: 'My teammate saved me just before I got eliminated from the match.',
      imageSlug: '/images/teammate.jpg',
    },
    {
      word: 'CALLOUT',
      partOfSpeech: 'noun',
      definition: 'Information you tell your team about where an enemy is located.',
      example: 'She made a quick callout so the whole team knew where the enemies were hiding.',
      imageSlug: '/images/callout.png',
    },
    {
      word: 'COORDINATE',
      partOfSpeech: 'verb',
      definition: 'To plan and work together with others to achieve a shared goal.',
      example: "We need to coordinate our attacks so we don't all rush in at the same time.",
      imageSlug: '/images/coordinate.png',
    },
    {
      word: 'STRATEGY',
      partOfSpeech: 'noun',
      definition: 'A plan designed to achieve a goal, especially winning a game.',
      example: 'Our strategy was to split into two groups and attack from different angles.',
      imageSlug: '/images/team-communication-strategy.png',
    },
    {
      word: 'RESPAWN',
      partOfSpeech: 'verb',
      definition: 'To come back to life in a game after your character has been eliminated.',
      example: "After I respawn, I'll join you at the objective right away.",
      imageSlug: '/images/respawn.png',
    },
    {
      word: 'FLANK',
      partOfSpeech: 'verb',
      definition: 'To attack an enemy from the side or from behind.',
      example: "If you flank them from the right, I'll distract them from the front.",
      imageSlug: '/images/flank.png',
    },
    {
      word: 'CLUTCH',
      partOfSpeech: 'adjective',
      definition: 'Describing something impressive done at a critical, high-pressure moment.',
      example: "That was a clutch move — you saved us when we were about to lose!",
      imageSlug: '/images/clutch.png',
    },
    {
      word: 'ROTATE',
      partOfSpeech: 'verb',
      definition: 'To move your character to a different position or area of the map.',
      example: 'We need to rotate to the north side before the enemy gets there.',
      imageSlug: '/images/rotate.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PUSH FORWARD',
      definition: 'To move ahead and attack, advancing toward the enemy.',
      example: "The enemy team is weakened — it's time to push forward and win this!",
      imageSlug: '/images/push-forward.png',
    },
    {
      phrase: 'FALL BACK',
      definition: 'To retreat from danger and move to a safer position.',
      example: "We're outnumbered — fall back to the base and regroup!",
      imageSlug: '/images/fall-back.png',
    },
    {
      phrase: 'BACK UP',
      definition: 'To support and help a teammate who needs assistance.',
      example: 'Can someone back up our sniper? She is being attacked from all sides.',
      imageSlug: '/images/team-communication-back-up.png',
    },
    {
      phrase: 'CALL OUT',
      definition: 'To verbally announce enemy positions so your team can react.',
      example: 'Always call out enemy positions so your teammates can react quickly.',
      imageSlug: '/images/team-communication-call-out.png',
    },
  ],

  videos: [
    {
      title: 'Gaming Communication in Action',
      youtubeId: 'PLACEHOLDER_1',
      description: 'Watch real gamers use these communication terms during a live match.',
    },
    {
      title: 'Team Strategy & Coordination',
      youtubeId: 'PLACEHOLDER_2',
      description: 'See how professional teams coordinate and call out positions.',
    },
  ],

  dialogue: [
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: '/images/zara-icon.png',
      text: "Jax, can you [[flank:to attack from the side or behind]] from the left side? They won't see you coming.",
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: '/images/jax-icon.png',
      text: "Got it! I'll [[rotate:to move to a different area of the map]] around and back you up.",
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: '/images/maya-icon.png',
      text: '[[Callout:information about where an enemy is located]]! Two enemies pushing from the north entrance!',
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: '/images/zara-icon.png',
      text: "Okay team, let's [[coordinate:to plan and work together toward a shared goal]] our attack. Push forward on my signal!",
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: '/images/jax-icon.png',
      text: "I'm in position. Ready when you are, [[teammate:a person who plays on your team]].",
    },
    {
      speaker: 'Zara',
      speakerColor: 'purple',
      speakerAvatar: '/images/zara-icon.png',
      text: 'Three... two... one... push forward!',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: '/images/maya-icon.png',
      text: "They got me! I need to [[respawn:come back to life after being eliminated]]. Fall back for a moment!",
    },
    {
      speaker: 'Jax',
      speakerColor: 'green',
      speakerAvatar: '/images/jax-icon.png',
      text: 'Nice work everyone! We totally [[clutched:did something impressive at a critical moment]] that round!',
    },
    {
      speaker: 'Maya',
      speakerColor: 'orange',
      speakerAvatar: '/images/maya-icon.png',
      text: "Great [[strategy:a plan designed to win the game]]! Now let's rotate east and back up our teammates over there.",
    },
  ],

  matchingExercise: [
    { word: 'CALLOUT', definition: 'Telling your team where an enemy is' },
    { word: 'ROTATE', definition: 'Moving to a different area of the map' },
    { word: 'CLUTCH', definition: 'Doing something impressive at a critical moment' },
    { word: 'FLANK', definition: 'Attacking from the side or behind' },
    { word: 'COORDINATE', definition: 'Planning and working together as a team' },
    { word: 'RESPAWN', definition: 'Coming back to life after being eliminated' },
  ],

  fillBlankExercise: [
    {
      before: 'We need to',
      after: 'our attack so everyone knows the plan.',
      answer: 'coordinate',
    },
    {
      before: "There are too many enemies here! We should",
      after: 'to a safer position.',
      answer: 'fall back',
    },
    {
      before: "I'll",
      after: 'to the east side of the map and surprise them from behind.',
      answer: 'rotate',
    },
    {
      before: 'Can you',
      after: 'where the enemies are hiding so we can plan?',
      answer: 'call out',
    },
    {
      before: "They're running low on health — it's time to",
      after: 'and finish this round!',
      answer: 'push forward',
    },
    {
      before: "I'm surrounded by enemies! Can someone",
      after: 'and help me fight them off?',
      answer: 'back up',
    },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Zara ask Jax to do at the beginning of the conversation?',
      options: [
        'Respawn immediately',
        'Flank from the left side',
        'Make callouts for the team',
        'Fall back to safety',
      ],
      correctIndex: 1,
    },
    {
      question: 'After saying he will rotate, what else does Jax promise to do?',
      options: [
        'Make callouts for the team',
        'Push forward alone',
        'Back up the team',
        'Respawn quickly',
      ],
      correctIndex: 2,
    },
    {
      question: 'What information does Maya share when she shouts "Callout!"?',
      options: [
        'She needs help immediately',
        'She found a powerful weapon',
        'Two enemies are at the north entrance',
        'She is about to respawn',
      ],
      correctIndex: 2,
    },
    {
      question: 'What happens to Maya during the match?',
      options: [
        'She wins the round for the team',
        'She successfully flanks the enemy',
        'She gets eliminated and needs to respawn',
        'She rotates to a better position',
      ],
      correctIndex: 2,
    },
    {
      question: 'What word does Jax use to describe their impressive performance under pressure?',
      options: ['Strategy', 'Coordinate', 'Clutch', 'Callout'],
      correctIndex: 2,
    },
  ],
};

import { Lesson } from '@/types/lesson';

export const questionsWhatWhoWhere: Lesson = {
  slug: 'questions-what-who-where',
  title: 'Questions',
  subtitle: 'Ask and answer with What, Who, Where, and How many',
  level: 'A1-A2',
  description: "Learn the four most important question words for gaming — What, Who, Where, and How many — and use them to communicate with teammates in real matches.",
  heroImage: '/images/questions-what-who-where-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Question word + IS / ARE + subject',
    description: "Put the question word first, then IS or ARE, then the subject. You don't need to change the main verb — just flip the word order from a normal sentence.",
    positivePattern: 'Question word + IS / ARE + subject?',
    positiveExample: '"Where IS the enemy?" / "Who ARE your teammates?"',
    negativePattern: 'Question word + DO / DOES + subject + verb?',
    negativeExample: '"What DO you play?" / "How many kills DOES he have?"',
    positiveExamples: [
      { sentence: 'Where is the objective?', note: '(is = singular thing)' },
      { sentence: 'Who is winning right now?', note: '(is = one team or player)' },
      { sentence: 'What is your username?', note: '(is = one name)' },
      { sentence: 'Where are your teammates?', note: '(are = more than one person)' },
    ],
    negativeExamples: [
      { sentence: 'What do you play?', note: '(do = present simple, you)' },
      { sentence: 'How many lives does she have?', note: '(does = present simple, she/he/it)' },
    ],
  },

  vocabulary: [
    {
      word: 'WHAT',
      partOfSpeech: 'pronoun',
      definition: 'Ask about a thing, a game, an action, or information.',
      example: 'What game are you playing? I want to join!',
      imageSlug: '/images/what.png',
    },
    {
      word: 'WHO',
      partOfSpeech: 'pronoun',
      definition: 'Ask about a person, player, or character.',
      example: 'Who is the strongest player on the enemy team?',
      imageSlug: '/images/who.png',
    },
    {
      word: 'WHERE',
      partOfSpeech: 'pronoun',
      definition: 'Ask about a location or position in the game world.',
      example: 'Where are you? I need backup — there are three enemies here!',
      imageSlug: '/images/where.png',
    },
    {
      word: 'HOW MANY',
      partOfSpeech: 'phrase',
      definition: 'Ask about a number or quantity of something countable.',
      example: 'How many enemies are left in this round? I can only see two.',
      imageSlug: '/images/how-many.png',
    },
    {
      word: 'WHICH',
      partOfSpeech: 'pronoun',
      definition: 'Ask someone to choose between two or more specific options.',
      example: 'Which character do you want to play — the warrior or the mage?',
      imageSlug: '/images/which.png',
    },
    {
      word: 'WHEN',
      partOfSpeech: 'pronoun',
      definition: 'Ask about the time or moment something happens in the game.',
      example: 'When does the next match start? I need five more minutes.',
      imageSlug: '/images/when.png',
    },
    {
      word: 'MAP',
      partOfSpeech: 'noun',
      definition: 'The game world or level — shows locations, zones, and objectives.',
      example: 'Where are we on the map? I think we are near the north zone.',
      imageSlug: '/images/map.png',
    },
    {
      word: 'SPAWN',
      partOfSpeech: 'noun',
      definition: 'The location where a player appears at the start or after dying.',
      example: 'Where is the enemy spawn? I want to set up an ambush.',
      imageSlug: '/images/spawn.png',
    },
    {
      word: 'OBJECTIVE',
      partOfSpeech: 'noun',
      definition: 'The main goal or task you must complete to win a round or match.',
      example: 'What is the objective? Do we capture the flag or destroy the base?',
      imageSlug: '/images/objective.png',
    },
    {
      word: 'ENEMY',
      partOfSpeech: 'noun',
      definition: 'A player or character on the opposing side trying to stop you.',
      example: 'Who is that enemy? They have 20 kills — they must be very good.',
      imageSlug: '/images/enemy.png',
    },
    {
      word: 'SCORE',
      partOfSpeech: 'noun',
      definition: 'The number of points, kills, or wins a player or team has.',
      example: 'What is the score? Are we winning or losing right now?',
      imageSlug: '/images/questions-what-who-where-score.png',
    },
    {
      word: 'ROUND',
      partOfSpeech: 'noun',
      definition: 'One complete section of a match — games often have many rounds.',
      example: 'How many rounds are left? I think we only need one more win.',
      imageSlug: '/images/round.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WHAT ARE YOU PLAYING',
      definition: 'Ask which game or mode someone is currently in.',
      example: 'What are you playing? I want to join your lobby if there is space.',
      imageSlug: '/images/what-are-you-playing.png',
    },
    {
      phrase: 'WHERE ARE YOU',
      definition: 'Ask a teammate for their location on the map.',
      example: "Where are you? I can't find you — send me your map position.",
      imageSlug: '/images/where-are-you.png',
    },
    {
      phrase: 'WHO IS WINNING',
      definition: 'Ask which player or team is currently ahead in the match.',
      example: 'Who is winning? I was AFK for two minutes and missed everything.',
      imageSlug: '/images/who-is-winning.png',
    },
    {
      phrase: 'HOW MANY ARE LEFT',
      definition: 'Ask about the number of enemies, lives, rounds, or items remaining.',
      example: 'How many enemies are left? I only have 10 bullets — I need to be careful.',
      imageSlug: '/images/how-many-are-left.png',
    },
    {
      phrase: 'WHAT IS THE OBJECTIVE',
      definition: 'Ask what the main goal is — very useful at the start of a new game mode.',
      example: 'What is the objective? Is it capture the flag or eliminate all enemies?',
      imageSlug: '/images/what-is-the-objective.png',
    },
    {
      phrase: 'WHICH ONE DO YOU WANT',
      definition: 'Ask someone to choose between options — weapons, characters, or strategies.',
      example: 'Which one do you want — the sniper or the shotgun? I have both.',
      imageSlug: '/images/which-one-do-you-want.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: "Hey Alex! [[What:ask about a thing or action]] are you playing right now?",
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "A battle royale. [[Where:ask about a location]] are you on the [[map:the game world showing locations]]? I need a teammate.",
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: "I'm near the north [[spawn:where players appear at the start]]. [[How many:ask about a number]] [[enemy:a player on the opposing side]] players are left in this [[round:one complete section of a match]]?",
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "About 15. [[Who:ask about a person or player]] is winning right now? I was busy looting.",
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: "Not sure — what is the [[score:the number of kills or points each team has]]? And what is the [[objective:the main goal to win]] in this mode?",
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "We have 8 kills. The objective is to be the last team alive. Where is zone C on the map?",
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: "It's in the east. How many teammates do we have left?",
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "Just us two. Who is the strongest enemy squad right now?",
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: "The squad near zone B — they have 12 kills. Which route do you want to take — east or west?",
    },
    {
      speaker: 'Alex',
      speakerColor: 'blue',
      speakerAvatar: '/images/alex-icon.png',
      text: "West — fewer enemies. How many rounds are left in this match?",
    },
  ],

  matchingExercise: [
    { word: 'WHAT',      definition: 'Ask about a thing or action' },
    { word: 'WHO',       definition: 'Ask about a person or player' },
    { word: 'WHERE',     definition: 'Ask about a location' },
    { word: 'HOW MANY',  definition: 'Ask about a number or quantity' },
    { word: 'WHICH',     definition: 'Ask someone to choose between options' },
    { word: 'WHEN',      definition: 'Ask about the time something happens' },
    { word: 'OBJECTIVE', definition: 'The main goal you must complete to win' },
    { word: 'SPAWN',     definition: 'The location where a player appears' },
  ],

  fillBlankExercise: [
    { before: '',         after: 'game mode is this? I have never played it before.',     answer: 'what' },
    { before: '',         after: 'is your teammate? I cannot see them on the map.',        answer: 'where' },
    { before: '',         after: 'enemies are left in this round? I count three.',         answer: 'how many' },
    { before: '',         after: 'is winning right now — us or the other team?',           answer: 'who' },
    { before: '',         after: 'character do you want — the tank or the healer?',        answer: 'which' },
    { before: '',         after: 'does the next round start? I need 30 more seconds.',     answer: 'when' },
    { before: 'What is the', after: 'for this mode — capture the flag or last team alive?', answer: 'objective' },
    { before: 'Where is the enemy', after: '? I want to set up near it.',                 answer: 'spawn' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Kai asks "How many enemy players are left?" What question word is he using and why?',
      options: [
        "WHO — because he wants to know the players' names",
        'WHERE — because he wants to know their location',
        'HOW MANY — because he wants to know the number of enemies remaining',
        'WHAT — because he wants to know which enemies they are',
      ],
      correctIndex: 2,
    },
    {
      question: 'Alex says "Where are you on the map?" What is he asking for?',
      options: [
        'The name of the map',
        "Kai's exact position or location",
        'How many enemies are near Kai',
        'When Kai joined the game',
      ],
      correctIndex: 1,
    },
    {
      question: 'Kai asks "Which route do you want — east or west?" Why does he use WHICH instead of WHAT?',
      options: [
        'WHICH is more polite than WHAT',
        'WHICH is used when choosing between specific options already named',
        'WHAT cannot be used for routes',
        'WHICH is used for questions about people',
      ],
      correctIndex: 1,
    },
    {
      question: '"What is the score?" — what is the correct word order here?',
      options: [
        'Question word + verb + subject (What + is + the score)',
        'Subject + verb + question word (The score + is + what)',
        'Verb + question word + subject (Is + what + the score)',
        'Subject + question word + verb (The score + what + is)',
      ],
      correctIndex: 0,
    },
    {
      question: 'Alex and Kai have how many teammates left at the end of the dialogue?',
      options: ['Three', 'Four', 'Just the two of them', 'None — they are alone'],
      correctIndex: 2,
    },
    {
      question: 'Which squad does Kai say is the strongest?',
      options: [
        'The squad near zone C with 20 kills',
        'The squad near zone B with 12 kills',
        'The squad near the north spawn',
        'A squad with 8 kills in zone A',
      ],
      correctIndex: 1,
    },
  ],
};

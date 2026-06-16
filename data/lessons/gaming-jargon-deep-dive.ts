import { Lesson } from '@/types/lesson';

export const gamingJargonDeepDive: Lesson = {
  slug: 'gaming-jargon-deep-dive',
  title: 'Gaming Jargon Deep Dive',
  subtitle: 'Master nerf, buff, meta and OP — the language of competitive gaming',
  level: 'B1-B2',
  description: 'Master four essential gaming terms — nerf, buff, meta, OP — plus register awareness and real-world usage across contexts.',
  heroImage: '/images/gaming-jargon-deep-dive-hero.png',

  tabLabels: ['Vocabulary', 'Related Terms', 'Register', 'In Context', 'Exercises'],

  grammarFocus: {
    focusTitle: 'Word Class Flexibility',
    description: 'Many gaming terms work as both verbs and nouns. The same word can do two different jobs in a sentence.',
    singlePattern: 'VERB use',
    singlePatternExample: '"They nerfed the shotgun."  /  "Devs buffed her kit."',
    arrowStyle: true,
    negativeSubtitle: '(noun use)',
    positiveExamples: [
      { sentence: 'They nerfed the shotgun.',     note: 'nerf as a verb — the action of weakening' },
      { sentence: 'My main got buffed.',          note: 'buff as a verb — the action of strengthening' },
      { sentence: 'She is totally OP right now.', note: 'OP as an adjective' },
    ],
    negativeExamples: [
      { sentence: 'That was a huge nerf to her kit.', note: 'nerf as a noun — the change itself' },
      { sentence: 'The devs gave healers a big buff.', note: 'buff as a noun — the change itself' },
    ],
  },

  vocabulary: [
    {
      word: 'NERF',
      partOfSpeech: 'verb',
      definition: 'To weaken a character, weapon, or ability — usually by developers in a balance update.',
      example: 'They nerfed the shotgun — it does 30% less damage now.',
      secondExample: 'That was a huge nerf to her kit.',
      etymologyNote: '🔑 Origin: from Nerf foam toys — soft and harmless.',
      imageSlug: '/images/nerf.png',
    },
    {
      word: 'BUFF',
      partOfSpeech: 'verb',
      definition: 'The opposite of nerf — to strengthen a character, weapon, or ability.',
      example: "My main got buffed this patch. She's actually viable now!",
      secondExample: 'The devs gave healers a big buff.',
      imageSlug: '/images/buff.png',
    },
    {
      word: 'META',
      partOfSpeech: 'noun',
      definition: 'The dominant strategies, characters, or builds in competitive play at any given moment.',
      example: 'Stacking tanks is totally meta right now.',
      secondExample: 'The meta shifted after the patch.',
      etymologyNote: '🔑 Short for Most Effective Tactics Available. Changes constantly after nerfs, buffs, or new content.',
      imageSlug: '/images/meta.png',
    },
    {
      word: 'OP',
      partOfSpeech: 'adjective',
      definition: "Overpowered — so strong it creates an unfair advantage. Often signals a nerf is coming.",
      example: "That boss ability is OP — no one can dodge it in time.",
      secondExample: "He's been OP since Season 3.",
      imageSlug: '/images/op.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PATCH',
      definition: 'A game update released by developers that can nerf, buff, or fix things.',
      example: 'After the patch, the meta completely changed.',
      imageSlug: '/images/patch.png',
      tag: '',
    },
    {
      phrase: 'BROKEN',
      definition: 'Hyperbolically overpowered — so strong it feels like a bug or design error.',
      example: 'This combo is broken — needs to be nerfed immediately.',
      imageSlug: '/images/broken.png',
      tag: '',
    },
    {
      phrase: 'MAIN',
      definition: 'Your primary character in a game. Also used as a verb — to main a character.',
      example: 'I main Sova, but he just got nerfed.',
      imageSlug: '/images/gaming-jargon-deep-dive-main.png',
      tag: '',
    },
    {
      phrase: 'TIER LIST',
      definition: 'A community ranking of characters or strategies from S-tier (best) to D-tier (worst).',
      example: 'She jumped to S-tier after the buff.',
      imageSlug: '/images/tier-list.png',
      tag: 'phrasal verb',
    },
  ],

  registerAwareness: [
    {
      context: 'Discord / gaming chat',
      register: 'Informal',
      example: 'Bro they nerfed my main again 😭 meta is dead',
    },
    {
      context: 'Twitch stream / YouTube',
      register: 'Informal',
      example: 'This hero is OP, devs need to buff the counters',
    },
    {
      context: 'Reddit / gaming forums',
      register: 'Neutral',
      example: 'The buff to support characters has significantly shifted the meta.',
    },
    {
      context: 'Esports commentary',
      register: 'Neutral',
      example: "Team A is running a meta composition after last week's patch.",
    },
    {
      context: 'Journalism / academic writing',
      register: 'Formal',
      example: "Developers weakened the character's abilities following community feedback.",
    },
  ],

  registerTraps: [
    '❌ Avoid in formal writing: "The company\'s product is totally OP." → Sounds unprofessional.',
    '✅ Use freely in gaming spaces — it signals community membership.',
    '🔁 Word class flexibility: "They nerfed him" (verb) vs. "That was a nerf" (noun) — both correct!',
    '🌍 Global spread: nerf, buff, meta, OP are borrowed into Spanish, Portuguese, Korean, Japanese — same meaning.',
  ],

  readingPassage: {
    title: 'Forum Post — In Context',
    context: 'Read this gaming forum post and identify all key terms.',
    text: "Hot take: this patch is the worst in two years. They nerfed Viper into the ground — her damage is completely useless now. Meanwhile, Sova got another buff even though he was already OP. He's been S-tier on every meta tier list for six months. If this is where the meta is heading, I'm switching my main.",
    audioSrc: '/audio/gaming-jargon-forum-post.mp3',
    highlightTerms: ['patch', 'nerfed', 'buff', 'OP', 'meta', 'tier list', 'main'],
    questions: [
      'Is the writer happy or unhappy? What is their main complaint?',
      'What happened to Viper? What happened to Sova?',
      'Find an example of nerf used as a verb. Can you rewrite it using nerf as a noun?',
      '"Nerfed into the ground" — what do you think this intensified phrase means?',
    ],
  },

  productionPrompts: [
    {
      icon: '🎯',
      label: 'A',
      prompt: 'Describe a real or imaginary game change (nerf / buff).',
    },
    {
      icon: '🎯',
      label: 'B',
      prompt: 'Explain "the meta" to someone who has never gamed.',
    },
    {
      icon: '🎯',
      label: 'C',
      prompt: 'Write a short forum complaint about an OP character.',
    },
  ],

  videos: [],
  dialogue: [],

  matchingExercise: [
    { word: 'NERF',      definition: 'To weaken a character or ability' },
    { word: 'BUFF',      definition: 'To strengthen a character or ability' },
    { word: 'META',      definition: 'The dominant strategies in competitive play' },
    { word: 'OP',        definition: 'Overpowered — creates an unfair advantage' },
    { word: 'PATCH',     definition: 'A game update that changes balance' },
    { word: 'BROKEN',    definition: 'Hyperbolically OP — feels like a bug' },
    { word: 'MAIN',      definition: 'Your primary character' },
    { word: 'TIER LIST', definition: 'A ranking from S-tier (best) to D-tier (worst)' },
  ],

  fillBlankExercise: [
    { before: 'They', after: "the shotgun — it does 30% less damage now.", answer: 'nerfed' },
    { before: 'My main got', after: "this patch. She's actually viable now!", answer: 'buffed' },
    { before: 'Stacking tanks is totally', after: 'right now.', answer: 'meta' },
    { before: 'That boss ability is', after: "— no one can dodge it in time.", answer: 'OP' },
    { before: 'After the', after: 'the meta completely changed.', answer: 'patch' },
    { before: 'This combo is', after: '— needs to be fixed immediately.', answer: 'broken' },
    { before: 'I', after: 'Sova, but he just got nerfed.', answer: 'main' },
    { before: 'She jumped to S-tier on the', after: 'after the buff.', answer: 'tier list' },
  ],

  multipleChoiceExercise: [
    {
      question: 'A developer reduces a weapon\'s damage in an update. Players say it was ___.',
      options: ['buffed', 'nerfed', 'OP', 'patched'],
      correctIndex: 1,
    },
    {
      question: '"That combo is so ___ — it needs to be fixed."',
      options: ['meta', 'nerfed', 'broken', 'patched'],
      correctIndex: 2,
    },
    {
      question: 'Which is formal register?',
      options: [
        'Devs buffed the OP hero lol',
        'Developers strengthened the character following balance feedback.',
        'Bro the meta is dead after this patch 😭',
        'He\'s been OP since Season 3.',
      ],
      correctIndex: 1,
    },
    {
      question: 'The ___ shifted after the patch — nobody runs tanks anymore.',
      options: ['tier', 'meta', 'buff', 'nerf'],
      correctIndex: 1,
    },
    {
      question: 'In the forum post, why is the writer upset about Sova?',
      options: [
        'Sova was nerfed too hard.',
        'Sova got another buff even though he was already OP.',
        'Sova was removed from the meta.',
        'Sova dropped to D-tier.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Nerfed into the ground" most likely means:',
      options: [
        'Nerfed slightly.',
        'Buffed by mistake.',
        'Nerfed so severely the character is nearly useless.',
        'Removed from the game entirely.',
      ],
      correctIndex: 2,
    },
  ],
};

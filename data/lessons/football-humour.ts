import { Lesson } from '../../types/lesson';

export const footballHumour: Lesson = {
  slug: 'football-humour',
  title: 'Football Humour',
  subtitle: 'Unit 3 — Football Idioms & Culture',
  level: 'B1-B2',
  description: 'Football culture is full of wit, wordplay, and banter. From terrace chants to tabloid headlines, humour is woven into the game. This lesson explores the language of football comedy — puns, irony, dry wit, and banter.',
  heroImage: '/images/football-humour.png',

  warmUp: {
    questions: [
      'Have you ever laughed at a football joke, chant, or headline? What made it funny?',
      'How important is humour in football culture — on the terraces, in the media, or among fans?',
      'Can you think of a football pun or a funny headline you have seen or heard?',
    ],
  },

  grammarFocus: {
    title: 'Wordplay, Puns, and Double Meaning',
    explanation: 'A pun is a joke that uses a word with two meanings, or two words that sound similar. Football headlines often use puns because they are attention-grabbing and memorable. Understanding puns requires knowledge of both the literal meaning (the actual word) and the implied meaning (the joke). Irony means saying the opposite of what you mean. Dry humour is understatement — making something funny by describing it very calmly when the situation is dramatic. Banter is playful teasing between people who know each other well.',
    examples: [
      {
        sentence: 'SPURS IN A SPIN — newspaper headline after Tottenham\'s manager is sacked.',
        label: 'pun on "spin" (out of control) and "Spurs" (a spinning motion)',
      },
      {
        sentence: '"He\'s not the quickest, is he?" — said after a striker is outrun by the goalkeeper.',
        label: 'understatement / dry humour',
      },
      {
        sentence: '"Oh, great defending." — said sarcastically when a defender completely fails.',
        label: 'irony / sarcasm',
      },
    ],
    tip: 'Headlines often remove articles and auxiliary verbs for brevity. "CITY SEAL TITLE" means "Manchester City have sealed the title". This compressed style is called "headline English" and is common in British tabloids.',
  },

  vocabulary: [
    {
      word: 'BANTER',
      partOfSpeech: 'noun',
      definition: 'Playful, friendly teasing between people who know each other — an important part of dressing-room and fan culture.',
      example: '"The banter between the two strikers was legendary — they teased each other relentlessly but were best friends off the pitch."',
      imageSlug: '/images/banter.png',
    },
    {
      word: 'TERRACE WIT',
      partOfSpeech: 'phrase',
      definition: 'The sharp, funny, sometimes cutting remarks made by fans on the terraces — a celebrated part of British football culture.',
      example: '"The terrace wit at that ground is legendary — they\'ll have a song about you within five minutes of you making a mistake."',
      imageSlug: '/images/terrace-wit.png',
    },
    {
      word: 'PUN',
      partOfSpeech: 'noun',
      definition: 'A joke using a word with two meanings, or two words that sound similar — very common in football headlines.',
      example: '"The back-page headline read: UNITED WE FALL — a pun on United\'s poor form and the phrase \'united we stand\'."',
      imageSlug: '/images/pun.png',
    },
    {
      word: 'WIND UP',
      partOfSpeech: 'noun / verb',
      definition: 'To tease or provoke someone deliberately — or the act of doing so. Common between rival fans and teammates.',
      example: '"He knew exactly what he was doing — winding up the opposition fans with every goal celebration."',
      imageSlug: '/images/wind-up.png',
    },
    {
      word: 'DRY HUMOUR',
      partOfSpeech: 'phrase',
      definition: 'Humour delivered in a calm, deadpan way — understating something dramatic or funny without showing obvious amusement.',
      example: '"After losing seven-nil, the manager said: \'We created some good chances in the first ten minutes.\' Pure dry humour."',
      imageSlug: '/images/dry-humour.png',
    },
    {
      word: 'IRONY',
      partOfSpeech: 'noun',
      definition: 'Saying the opposite of what you mean — often to criticise or mock, with the real meaning being the reverse of what is said.',
      example: '"The irony of the manager who built his career on counter-attacks being beaten by a last-minute counter — the crowd loved it."',
      imageSlug: '/images/irony.png',
    },
    {
      word: 'CHANT',
      partOfSpeech: 'noun / verb',
      definition: 'A song or rhythmic phrase repeated by fans in unison — sometimes funny, sometimes rude, always loud.',
      example: '"The fans started a chant about the opposition manager — it wasn\'t kind, but it was genuinely witty."',
      imageSlug: '/images/chant.png',
    },
    {
      word: 'HEADLINE',
      partOfSpeech: 'noun',
      definition: 'The title of a newspaper article — in British tabloids, football headlines are famous for puns and wordplay.',
      example: '"KEEPER OF THE FAITH — the headline after the goalkeeper saved three penalties in one match."',
      imageSlug: '/images/headline.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WIND UP',
      definition: 'To deliberately tease or provoke someone — knowing it will get a reaction.',
      example: '"The away fans were trying to wind up the home goalkeeper every time he took a goal kick."',
      inAction: 'Used when someone deliberately provokes another person to get a rise out of them.',
      register: 'informal',
      inContext: 'Football, banter culture, dressing room humour.',
    },
    {
      phrase: 'LAUGH OFF',
      definition: 'To respond to criticism or a difficult situation with humour — treating it as unimportant.',
      example: '"He laughed off the missed penalty in the post-match interview — you have to admire the composure."',
      inAction: 'Used when someone uses humour to deflect or dismiss a criticism.',
      register: 'neutral / informal',
      inContext: 'Interviews, press conferences, everyday conversation.',
    },
    {
      phrase: 'PLAY UP TO',
      definition: 'To exaggerate a characteristic for comic or dramatic effect — playing a role for an audience.',
      example: '"He completely played up to the villain role after the red card — waving goodbye to the crowd as he left."',
      inAction: 'Used when someone deliberately exaggerates for effect.',
      register: 'neutral',
      inContext: 'Football, performance, media, everyday conversation.',
    },
    {
      phrase: 'TAKE THE MICKEY',
      definition: 'To mock or make fun of someone — British informal expression for teasing.',
      example: '"The commentator was taking the mickey out of the manager\'s tracksuit — not exactly professional, but very funny."',
      inAction: 'Used when someone mocks in a light-hearted way.',
      register: 'informal / British',
      inContext: 'British football culture, banter, comedy.',
    },
    {
      phrase: 'CRACK UP',
      definition: 'To suddenly burst out laughing — or to make someone laugh.',
      example: '"The manager\'s deadpan answer to the question completely cracked up the press room."',
      inAction: 'Used for sudden, uncontrolled laughter.',
      register: 'informal',
      inContext: 'Everyday conversation, comedy, banter.',
    },
    {
      phrase: 'SEND UP',
      definition: 'To mock or satirise something — to make fun of it in an exaggerated way.',
      example: '"The fan video sent up the rival manager\'s famous catchphrase and got two million views overnight."',
      inAction: 'Used for comedic imitation or satire of a person or style.',
      register: 'informal',
      inContext: 'Comedy, fan culture, media, social media.',
    },
  ],

  onThePitch: [
    {
      id: 'ootpFH1',
      title: 'Write the Headline',
      image: '/images/ootp-write-headline-humour.png',
      description: 'You are a tabloid journalist. Write a punny headline for each football situation.',
      prompt: 'Write a punny newspaper headline for each situation: (1) Arsenal win a match in extra time. (2) A goalkeeper called Walker saves three penalties. (3) A striker misses from one yard out. (4) A team called United loses by five goals.',
    },
    {
      id: 'ootpFH2',
      title: 'Dry Humour Master Class',
      image: '/images/ootp-dry-humour.png',
      description: 'A manager gives deadpan answers after a heavy defeat. You write the quotes.',
      prompt: 'Your team has just lost 6-0. Write three deadpan post-match quotes from the manager that use dry humour — understate the situation completely, as if it was barely a problem.',
    },
    {
      id: 'ootpFH3',
      title: 'Terrace Chant',
      image: '/images/ootp-terrace-chant.png',
      description: 'Fans create a chant for their team and a witty response for the opposition.',
      prompt: 'Write a short fan chant (4-6 lines) for a team of your choice — or a fictional team. It can be funny, enthusiastic, or both. Then write a witty two-line response the opposition fans might sing back.',
    },
    {
      id: 'ootpFH4',
      title: 'The Banter Debate',
      image: '/images/ootp-banter-debate.png',
      description: 'Is banter harmless fun or does it sometimes go too far?',
      prompt: 'Discuss: "Banter is an essential part of football culture — it brings fans and players together." Do you agree? Give two arguments for and two arguments against. Consider where the line is between funny and harmful.',
    },
    {
      id: 'ootpFH5',
      title: 'The Best Comeback',
      image: '/images/ootp-best-comeback.png',
      description: 'A player responds to a wind-up from opposition fans with a brilliant moment on the pitch.',
      prompt: 'A striker is being wound up by opposition fans all game. In the 90th minute, they score the winner. Write their celebration and post-match interview response using humour, banter, and at least two vocabulary words from this lesson.',
    },
    {
      id: 'ootpFH6',
      title: 'Irony in Commentary',
      image: '/images/ootp-irony-commentary.png',
      description: 'A commentator uses irony and understatement to describe a disaster on the pitch.',
      prompt: 'You are a commentator known for dry wit. The goalkeeper has just walked the ball into his own net by mistake. Write a 4-6 sentence commentary using irony, understatement, and at least two vocabulary words from this lesson.',
    },
  ],

  videos: [],

  dialogue: {
    title: 'The Funniest Thing I Ever Saw',
    context: 'Two football fans swap stories about funny moments they\'ve witnessed at matches.',
    lines: [
      { speaker: 'Leona', text: 'The best terrace wit I ever heard was at a lower league match. The striker missed from three yards and someone just said, very quietly: "Oh well, he tried."' },
      { speaker: 'Jamie', text: 'That\'s perfect dry humour. I love that. No shouting — just devastatingly calm.' },
      { speaker: 'Leona', text: 'The opposition fans had a brilliant chant about our manager. I can\'t repeat it here but it was genuinely witty.' },
      { speaker: 'Jamie', text: 'That\'s good banter if you can actually appreciate the other side\'s creativity. I respect a well-made chant.' },
      { speaker: 'Leona', text: 'The headline after that match was brilliant too — they used his surname as a pun. Tabloids are relentless.' },
      { speaker: 'Jamie', text: 'They are. But I think the humour is part of what makes football different from other sports.' },
      { speaker: 'Leona', text: 'Exactly. Where else do you get 40,000 people doing irony together in perfect unison?' },
      { speaker: 'Jamie', text: 'Only on the terraces. That\'s a special kind of cultural institution.' },
    ],
  },

  matchingExercise: {
    title: 'Match the Humour Term to its Meaning',
    instructions: 'Match each term with its correct meaning.',
    pairs: [
      { term: 'Banter', definition: 'Playful, friendly teasing between people who know each other' },
      { term: 'Terrace wit', definition: 'Sharp, funny remarks made by fans — a celebrated part of football culture' },
      { term: 'Pun', definition: 'A joke using a word with two meanings or two similar-sounding words' },
      { term: 'Wind up', definition: 'To deliberately tease or provoke someone for a reaction' },
      { term: 'Dry humour', definition: 'Humour delivered calmly and without obvious amusement — understatement' },
      { term: 'Irony', definition: 'Saying the opposite of what you mean, often to mock or criticise' },
      { term: 'Chant', definition: 'A song or phrase repeated rhythmically by fans in unison' },
      { term: 'Headline', definition: 'A newspaper title — often uses puns and wordplay in British tabloids' },
    ],
  },

  fillBlankExercise: {
    title: 'Fill in the Blank',
    instructions: 'Choose the correct word or phrase to complete each sentence.',
    wordBank: ['banter', 'terrace wit', 'pun', 'wind up', 'dry humour', 'irony', 'chant', 'headline'],
    items: [
      { sentence: 'The back-page ___ read: "CITY SLICKERS" after Manchester City\'s dominant performance.', answer: 'headline' },
      { sentence: 'He loves a ___ — he\'ll tease anyone without ever raising his voice or changing his expression.', answer: 'dry humour' },
      { sentence: 'The fans started a ___ about the opposing striker\'s recent missed penalties — clever but brutal.', answer: 'chant' },
      { sentence: 'The ___ of a manager who hated long balls losing to a late header — the press had a field day.', answer: 'irony' },
      { sentence: 'There\'s a brilliant ___ in the headline — HAMMER TIME after West Ham\'s win over their rivals.', answer: 'pun' },
      { sentence: 'The ___ at that ground is legendary — they\'ll find something funny about you within minutes.', answer: 'terrace wit' },
      { sentence: 'The striker knew exactly how to ___ the goalkeeper — pointing at the scoreboard after every goal.', answer: 'wind up' },
      { sentence: 'The ___ in the dressing room is important — it keeps the mood light and builds team spirit.', answer: 'banter' },
    ],
  },

  multipleChoiceExercise: {
    title: 'Choose the Correct Answer',
    instructions: 'Choose the best answer for each question.',
    items: [
      {
        question: 'A manager says, after a 5-0 defeat: "I thought we showed some good moments in the first minute." This is an example of:',
        options: ['Dry humour', 'A pun', 'Banter', 'A chant'],
        answer: 'Dry humour',
      },
      {
        question: 'A fan shouts "Great defending!" sarcastically when a defender fails badly. This is an example of:',
        options: ['Irony', 'A pun', 'Terrace wit', 'Banter'],
        answer: 'Irony',
      },
      {
        question: 'A headline reads: "HAMMERED — West Ham lose to Blackpool". What type of wordplay is this?',
        options: ['A pun', 'Dry humour', 'Banter', 'A chant'],
        answer: 'A pun',
      },
      {
        question: 'Two teammates constantly tease each other about their hairstyles and fashion — always friendly and never mean. What is this?',
        options: ['Banter', 'Winding up', 'Irony', 'A send-up'],
        answer: 'Banter',
      },
      {
        question: 'A player deliberately imitates the opposition manager\'s famous hand gesture in his goal celebration. What is he doing?',
        options: ['Winding them up', 'Laughing it off', 'Playing dry humour', 'Showing terrace wit'],
        answer: 'Winding them up',
      },
      {
        question: 'Thousands of fans sing the same funny, rhythmic song repeatedly. What is this called?',
        options: ['A chant', 'A pun', 'Banter', 'Dry humour'],
        answer: 'A chant',
      },
      {
        question: 'Which of the following is the best example of a football pun?',
        options: ['"UNITED WE FALL — United lose 4-0"', '"MANCHESTER CITY WIN AGAIN"', '"GREAT MATCH AT WEMBLEY"', '"FANS CELEBRATE TITLE WIN"'],
        answer: '"UNITED WE FALL — United lose 4-0"',
      },
      {
        question: 'After being booed all game, a striker scores a winner and winks at the fans. What is this an example of?',
        options: ['Playing up to the crowd', 'Dry humour', 'Terrace wit', 'Irony'],
        answer: 'Playing up to the crowd',
      },
    ],
  },

  completeSentenceExercise: {
    title: 'Complete the Sentence — Grammar Focus',
    instructions: 'Complete each sentence using the correct form of the word or phrase.',
    items: [
      {
        sentence: 'The opposition fans ___ (wind up) him all game, but he had the last laugh with a late winner.',
        answer: 'wound up',
        explanation: '"Wind up" is an irregular phrasal verb in the past tense: wind → wound. "They wound him up all game" — "wound" rhymes with "found", not "kind".',
      },
      {
        sentence: 'The ___ (irony) of the manager who banned long balls losing to a last-minute header was lost on nobody.',
        answer: 'irony',
        explanation: '"The irony of..." is a fixed structure — the noun "irony" follows the definite article "the". "Ironically" (adverb) would need a different sentence structure.',
      },
      {
        sentence: 'That headline ___ (be) a brilliant pun — "KEEPER OF THE FAITH" after three penalty saves.',
        answer: 'was',
        explanation: 'Simple past "was" — describing a headline from a specific past event. The subject "that headline" is singular, so "was" (not "were") is required.',
      },
      {
        sentence: 'She ___ (laugh off) the missed penalty brilliantly — joking in the press conference that it had gone in, technically.',
        answer: 'laughed off',
        explanation: 'Simple past — "laughed off" — describing a completed past action. "Laugh off" is a regular phrasal verb: laugh → laughed.',
      },
      {
        sentence: 'The fans\' ___ (chant) about the referee lasted for the entire second half.',
        answer: 'chant',
        explanation: '"The fans\' chant" — "chant" is the noun here, used as the subject of the sentence. Possessive apostrophe after "fans" (plural) = "fans\'".',
      },
      {
        sentence: 'The ___ (dry) humour of his post-match interview made the whole press room laugh.',
        answer: 'dry',
        explanation: '"Dry humour" is a fixed compound phrase — "dry" is an adjective modifying "humour". It does not change form.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      title: 'Choose the Funniest Response',
      instructions: 'Choose the most effective response using the humour technique mentioned.',
      items: [
        {
          prompt: 'A journalist asks a manager: "How do you feel after losing 6-0?" The manager wants to use dry humour.',
          options: [
            '"We had some excellent moments in the warm-up."',
            '"It was a nightmare from start to finish."',
            '"We are very disappointed with the result."',
            '"The players gave everything and I\'m proud of them."',
          ],
          answer: '"We had some excellent moments in the warm-up."',
        },
        {
          prompt: 'A striker scores after being booed all game. They want to wind up the crowd with their celebration.',
          options: [
            'Cup their ear to the crowd and point at the scoreboard.',
            'Walk quietly back to the centre circle.',
            'Shake hands with the nearest defender.',
            'Sit on the ground and wait for teammates.',
          ],
          answer: 'Cup their ear to the crowd and point at the scoreboard.',
        },
        {
          prompt: 'A tabloid needs a headline after a goalkeeper called "Fields" makes an error. Which is the best pun?',
          options: [
            '"FIELDS FAILS TO STOP EASY SHOT"',
            '"BAD DAY AT THE OFFICE FOR GOALKEEPER"',
            '"KEEPER ERROR COSTS TEAM THREE POINTS"',
            '"GOALKEEPER MAKES MISTAKE IN DEFEAT"',
          ],
          answer: '"FIELDS FAILS TO STOP EASY SHOT"',
        },
        {
          prompt: 'Your friend says the opposing manager looks ridiculous in his tracksuit. You want to "send him up".',
          options: [
            '"He looks like he\'s managing a Sunday league team from 1987."',
            '"I think his tracksuit is quite professional."',
            '"It\'s important to dress appropriately for your role."',
            '"I hadn\'t noticed what he was wearing."',
          ],
          answer: '"He looks like he\'s managing a Sunday league team from 1987."',
        },
      ],
    },

    spotTheMistake: {
      title: 'Spot the Mistake',
      instructions: 'The dialogue below contains three errors — wrong vocabulary, incorrect grammar, or misused humour terms. Find and correct them.',
      dialogue: [
        { speaker: 'Nadia', text: 'Did you see that headline? "CITY SEALANT TITLE" — a brilliant pun on their goalkeeper\'s name.' },
        { speaker: 'Ben', text: 'I loved it. And the manager\'s post-match interview was full of banter — very deadpan and understatement.' },
        { speaker: 'Nadia', text: 'He definitely has dry humour. My favourite line was when he said the 5-0 was a "narrow defeat".' },
        { speaker: 'Ben', text: 'Classic ironic. And the fans\' chant about the referee was legendary — they all sang it in perfect unison.' },
        { speaker: 'Nadia', text: 'The wind up before the match was brilliant too — the away fans were winding the goalkeeper since kick-off.' },
        { speaker: 'Ben', text: 'He handled it well though. He laughed them off in the end.' },
      ],
      errors: [
        { line: 2, original: 'full of banter — very deadpan and understatement', correction: 'full of dry humour — very deadpan', explanation: '"Banter" is playful teasing between people, not a deadpan speaking style. The correct term for calm understatement is "dry humour". "Understatement" should be an adjective: "understated".' },
        { line: 4, original: 'Classic ironic', correction: 'Classic irony', explanation: '"Ironic" is an adjective — "That\'s ironic." When used as a noun phrase ("Classic ___"), the noun form "irony" is required: "Classic irony."' },
        { line: 5, original: 'winding the goalkeeper since kick-off', correction: 'winding up the goalkeeper since kick-off', explanation: '"Wind up" is a phrasal verb — the particle "up" cannot be omitted. "Wind the goalkeeper" has a different meaning. The correct form is "winding up the goalkeeper".' },
      ],
    },

    finishTheLine: {
      title: 'Finish the Line',
      instructions: 'Complete each sentence naturally using vocabulary or concepts from this lesson.',
      items: [
        {
          prompt: 'After losing six-nil, the manager stood up at the press conference and said, completely calmly:',
          exampleAnswer: '"We created one or two nice openings early on — I think the result was a little harsh on the lads."',
        },
        {
          prompt: 'The tabloid headline after the manager called "Bridges" was sacked read:',
          exampleAnswer: '"BRIDGES BURNED — manager dismissed after worst run in club history."',
        },
        {
          prompt: 'The away fans had a brilliant chant ready — when the goalkeeper touched the ball, they all sang:',
          exampleAnswer: '"You\'re not very good, you\'re not very good, you\'re not very, not very, not very good!"',
        },
        {
          prompt: 'He knew exactly how to wind up the defender — every time he nutmegged him, he would...',
          exampleAnswer: 'turn and give him a slow round of applause, smiling the whole time.',
        },
      ],
    },
  },
};

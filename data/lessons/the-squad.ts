import { Lesson } from '@/types/lesson';

export const theSquad: Lesson = {
  slug: 'the-squad',
  title: 'The Squad',
  subtitle: 'Starting XI, bench, reserve, academy, first team — how clubs organise their players',
  level: 'A2',
  description: 'Learn how football clubs organise their players — from the starting eleven to the academy. Practice using "there is" and "there are" with numbers to talk about squad structure.',
  heroImage: '/images/the-squad-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: There is / There are + numbers',
    description: 'We use "there is" for singular (one) and "there are" for plural (more than one). In football, we use these to talk about how many players are in each squad, on the bench, in the academy, and so on.',
    positivePattern: 'There is + a/an + singular noun  |  There are + number + plural noun',
    positiveExample: '"There are eleven players on the pitch and three substitutes on the bench."',
    negativePattern: 'There is no + singular noun  |  There are no + plural noun',
    negativeExample: '"There are no strikers on the bench — the manager used all three substitutions."',
    positiveExamples: [
      { sentence: 'There is one goalkeeper in the starting eleven.', note: '(there is + one = singular)' },
      { sentence: 'There are 25 players in the first-team squad.', note: '(there are + plural number)' },
      { sentence: 'There are three players on the bench who are still available.', note: '(there are + specific count)' },
      { sentence: 'There is a young striker coming through from the academy.', note: '(there is + a = one new person being introduced)' },
    ],
    negativeExamples: [
      { sentence: 'There are no defenders left on the bench — the coach used them all.', note: '(there are no + plural)' },
      { sentence: 'There is no room in the starting eleven for him right now.', note: '(there is no + singular noun)' },
    ],
  },

  vocabulary: [
    {
      word: 'STARTING ELEVEN',
      partOfSpeech: 'noun',
      definition: 'The eleven players chosen to begin the match — also called the "starting XI" or "first eleven".',
      example: 'The manager announced the starting eleven one hour before kick-off — three changes from last week.',
      imageSlug: '/images/the-squad-starting-eleven.png',
    },
    {
      word: 'BENCH',
      partOfSpeech: 'noun',
      definition: 'The area where substitute players and coaches sit during a match. "On the bench" means available to come on as a substitute.',
      example: 'There are seven players on the bench today — the coach has plenty of options if he needs to change things.',
      imageSlug: '/images/the-squad-bench.png',
    },
    {
      word: 'SUBSTITUTE',
      partOfSpeech: 'noun',
      definition: 'A player who replaces another player during the match. Each team can usually make five substitutions.',
      example: 'He came on as a substitute in the 60th minute and scored within ten minutes of coming on.',
      imageSlug: '/images/the-squad-substitute.png',
    },
    {
      word: 'RESERVE',
      partOfSpeech: 'noun',
      definition: 'A player who is part of the club but not in the first team — they play in reserve team matches.',
      example: 'He spent two years in the reserves before he got his first-team chance at 21.',
      imageSlug: '/images/reserve.png',
    },
    {
      word: 'ACADEMY',
      partOfSpeech: 'noun',
      definition: 'The youth development system of a football club — young players train and develop here from a young age.',
      example: 'She joined the academy at 12 and made her first-team debut at 17 — a brilliant journey.',
      imageSlug: '/images/the-squad-academy.png',
    },
    {
      word: 'FIRST TEAM',
      partOfSpeech: 'noun',
      definition: 'The main squad of a club — the players who compete in official league and cup matches.',
      example: 'He trained with the first team all week — everyone expects the manager to include him in the squad.',
      imageSlug: '/images/first-team.png',
    },
    {
      word: 'SQUAD NUMBER',
      partOfSpeech: 'noun',
      definition: 'The number on a player\'s shirt — in most leagues, players keep the same squad number all season.',
      example: 'She wears squad number 10 — traditionally the number for the most creative attacking player.',
      imageSlug: '/images/squad-number.png',
    },
    {
      word: 'ROTATION',
      partOfSpeech: 'noun',
      definition: 'The practice of changing players regularly — resting some and giving others chances to play.',
      example: 'The manager uses rotation to keep his squad fresh — no player starts more than three games in a row.',
      imageSlug: '/images/the-squad-rotation.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'COME ON [AS A SUBSTITUTE]',
      definition: 'To enter the pitch as a substitute during a match.',
      example: 'She came on in the second half and changed the game completely — one goal and one assist.',
      imageSlug: '/images/the-squad-come-on-as-a-substitute.png',
    },
    {
      phrase: 'COME THROUGH THE ACADEMY',
      definition: 'To develop as a player through the club\'s youth system and reach the first team.',
      example: 'He came through the academy — he has been at the club since he was nine years old.',
      imageSlug: '/images/come-through-the-academy.png',
    },
    {
      phrase: 'MAKE THE SQUAD',
      definition: 'To be selected in the group of players for a match or tournament.',
      example: 'She trained well all week and made the squad for the cup game — her first time on the bench.',
      imageSlug: '/images/make-the-squad.png',
    },
    {
      phrase: 'NAMED IN THE STARTING ELEVEN',
      definition: 'To be selected to start the match from the beginning.',
      example: 'He was named in the starting eleven for the first time this season — a reward for his good training.',
      imageSlug: '/images/named-in-the-starting-eleven.png',
    },
    {
      phrase: 'ROTATE THE SQUAD',
      definition: 'To regularly change the players who start — resting some and giving others chances.',
      example: 'The manager rotates the squad carefully because they play three times a week.',
      imageSlug: '/images/rotate-the-squad.png',
    },
    {
      phrase: 'FILL IN FOR [PLAYER]',
      definition: 'To play in someone\'s position when they are injured, suspended, or rested.',
      example: 'She filled in for the injured captain and had an outstanding performance at centre-back.',
      imageSlug: '/images/fill-in-for-player.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases coaches, commentators, and fans use when talking about squads and selection.',
    items: [
      {
        cue: "He's on the bench today.",
        meaning: 'He is not starting the match — he is a substitute available to come on.',
        usage: 'Standard way to say a player is not in the starting eleven but is part of the matchday squad. "On the bench" always means available as a substitute — not the same as being left out of the squad entirely.',
        imageSlug: 'otp-hes-on-the-bench-today',
      },
      {
        cue: "She's a product of the academy.",
        meaning: 'She developed as a player through the club\'s youth system.',
        usage: 'Said with pride about players who joined the club young and worked their way up. "Product of the academy" is a common phrase — it celebrates the club\'s youth development work as much as the player.',
        imageSlug: 'otp-shes-a-product-of-the-academy',
      },
      {
        cue: 'There are changes in the starting eleven!',
        meaning: 'The manager has selected different players from the last match.',
        usage: 'Announced by commentators before a match when the lineup is different from expected. "Changes" is the key word — fans immediately want to know who is in and who is out.',
        imageSlug: 'otp-there-are-changes-in-the-starting-eleven',
      },
      {
        cue: "He's coming on!",
        meaning: 'A substitute is about to enter the pitch.',
        usage: 'Shouted by commentators and fans when a substitution is being made. "Coming on" = entering the pitch. The opposite phrase is "coming off" — for the player being replaced.',
        imageSlug: 'otp-hes-coming-on',
      },
      {
        cue: 'A big squad to choose from.',
        meaning: 'The manager has many good players available — plenty of options.',
        usage: 'Said when a club has many players fit and available. "A big squad" means many players — "to choose from" means they are all available options. It suggests the manager has a selection headache in a good way.',
        imageSlug: 'otp-a-big-squad-to-choose-from',
      },
      {
        cue: 'There is no room for him right now.',
        meaning: 'The player is not being selected because there are better options at the moment.',
        usage: 'Said when a good player cannot get into the starting eleven because of competition. "No room" is polite — it suggests the issue is quality of competition, not the player being bad.',
        imageSlug: 'otp-there-is-no-room-for-him-right-now',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Before we look at today\'s match, let\'s talk about squad structure. There are 25 players in the [[first team:the main squad who compete in official matches]]. How many start a match?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'There are eleven players in the [[starting eleven:the eleven players chosen to begin the match]]. And there are seven players on the [[bench:where substitute players sit during a match]] — they can come on during the game.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. So there are 25 in the squad but only 18 are in the matchday squad. The others are in the [[reserves:players who are part of the club but not in the first team]].',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'What about the [[academy:the youth development system of a club]]? Are those players in the squad too?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Academy players are separate. But sometimes a young player comes through the academy and gets a first-team chance. There is one academy player in the starting eleven today — she is only 18.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Why does the manager use [[rotation:changing players regularly — resting some and giving others chances]]? Is it good for the team?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Yes — when there are three games a week, rotation keeps players fresh and reduces injuries. There are no players who can play every game at 100%. Even the best need rest.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Is it hard to make the [[squad:the group of players selected for a match or tournament]] when there are so many good players?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Yes — that is good competition. When there is strong competition for places, every player pushes to be their best. There are no easy selections at a top club.',
    },
  ],

  matchingExercise: [
    { word: 'STARTING ELEVEN', definition: 'The eleven players chosen to begin the match' },
    { word: 'BENCH', definition: 'Where substitutes sit — available to come on during the match' },
    { word: 'SUBSTITUTE', definition: 'A player who replaces another during the match' },
    { word: 'RESERVE', definition: 'A player in the club but not in the first team' },
    { word: 'ACADEMY', definition: 'The youth development system of a football club' },
    { word: 'FIRST TEAM', definition: 'The main squad who compete in official league and cup matches' },
    { word: 'SQUAD NUMBER', definition: 'The number on a player\'s shirt — usually the same all season' },
    { word: 'ROTATION', definition: 'Regularly changing which players start — resting some, giving others chances' },
  ],

  fillBlankExercise: [
    { before: 'There', answer: 'are', after: 'eleven players in the starting lineup — and seven more on the bench.' },
    { before: 'There', answer: 'is', after: 'one goalkeeper in every starting eleven.' },
    { before: 'He came through the', answer: 'academy', after: '— he has been at the club since he was ten years old.' },
    { before: 'She came on as a', answer: 'substitute', after: 'in the second half and scored the winning goal.' },
    { before: 'There are no defenders left on the', answer: 'bench', after: '— the manager used all three substitutions.' },
    { before: 'The manager uses', answer: 'rotation', after: 'because there are three matches every week.' },
    { before: 'He spent three seasons in the', answer: 'reserves', after: 'before getting his first-team chance.' },
    { before: 'There are 25 players in the', answer: 'first team', after: 'squad — 18 will be selected for each match.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which sentence is correct?',
      options: [
        'There is three players on the bench.',
        'There are three players on the bench.',
        'There are three player on the bench.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "he came on as a substitute" mean?',
      options: [
        'He started the match from the beginning',
        'He entered the pitch during the match to replace another player',
        'He trained as a substitute goalkeeper',
      ],
      correctIndex: 1,
    },
    {
      question: 'A player who "came through the academy" means:',
      options: [
        'He transferred from an academy club for a large fee',
        'He developed through the club\'s own youth system since he was young',
        'He attended a football academy course to improve his skills',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which is correct? "There _____ no substitutes left — the manager has used them all."',
      options: ['is', 'are', 'be'],
      correctIndex: 1,
    },
    {
      question: 'Why does a manager use rotation?',
      options: [
        'To confuse the opposition about who will play',
        'To keep players fresh and reduce injuries when there are many matches',
        'Because the rules say no player can start more than once a month',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the difference between "on the bench" and "in the reserves"?',
      options: [
        'They mean the same thing — both players are not starting',
        '"On the bench" means selected for the matchday squad as a substitute. "In the reserves" means not selected for the first-team matchday squad at all.',
        '"On the bench" is for defenders. "In the reserves" is for attackers.',
      ],
      correctIndex: 1,
    },
    {
      question: 'The manager says: "There is no room for him right now." What does this mean?',
      options: [
        'The player has been transferred to another club',
        'The player is injured and cannot play',
        'The player is not being selected because there are better options in that position',
      ],
      correctIndex: 2,
    },
    {
      question: '"There are 25 players in the squad." Which number replaces one player? Complete: "There _____ 24 players now."',
      options: ['is', 'are', 'have'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence. Use "there is" or "there are" correctly.',
    items: [
      {
        sentence: '_____ seven players on the bench today — the manager has plenty of options.',
        options: ['There is', 'There are', 'They are'],
        correctIndex: 1,
        explanation: '"There are" is correct because "seven players" is plural. Use "there are" for plural nouns. Use "there is" only for singular nouns or uncountable nouns. "Seven" = plural = "there are."',
      },
      {
        sentence: '_____ only one goalkeeper in the starting eleven.',
        options: ['There is', 'There are', 'It is'],
        correctIndex: 0,
        explanation: '"There is" is correct because "one goalkeeper" is singular. Use "there is" when there is one of something. "There is" + singular. "There are" + plural. One goalkeeper = singular = "there is."',
      },
      {
        sentence: '_____ no substitutes left — the manager used all five.',
        options: ['There is', 'There are', 'There was'],
        correctIndex: 1,
        explanation: '"There are" is correct. "No substitutes" refers to zero — which is a plural idea. "There are no substitutes" = none available. "There is no substitute" would refer to one specific person. Here we are talking about the category of substitutes — plural.',
      },
      {
        sentence: 'She _____ the academy at age 13 and made her debut at 17.',
        options: ['joined', 'join', 'joins'],
        correctIndex: 0,
        explanation: '"Joined" is correct — past simple. The sentence describes something that happened in the past (she joined at 13, she made her debut at 17 — both completed past events). "Join" is base form. "Joins" is present simple.',
      },
      {
        sentence: 'The manager _____ the squad — no player starts more than three games in a row.',
        options: ['rotate', 'rotates', 'rotating'],
        correctIndex: 1,
        explanation: '"Rotates" is correct — present simple, third person singular (the manager = he/she). When we describe a regular action or policy, we use present simple. "The manager rotates" = this is what he/she always does. "Rotating" needs an auxiliary verb.',
      },
      {
        sentence: 'He came on _____ a substitute in the 70th minute and headed in a late winner.',
        options: ['as', 'like', 'for'],
        correctIndex: 0,
        explanation: '"As" is correct. "Come on as a substitute" is the fixed phrase. "As" indicates a role or function — he entered in the role of a substitute. "Like" is for comparison, not role. "For" here would need a different sentence structure: "he substituted for the striker."',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read each situation and choose the best response.',
      items: [
        {
          customerLine: 'A friend asks: "Why are there 25 players in the squad if only 11 play?" What is the best answer?',
          options: [
            '"Because the rules say you must have 25 — there is no other reason."',
            '"Because there are injuries, suspensions, and rotation. A bigger squad means more options — if one player gets injured, there is another to replace them. There also need to be substitutes available during matches."',
            '"Because some players train but are not allowed to play in official matches."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A large squad covers injuries, suspensions, and rotation across a long season with many matches. Without depth in the squad, injuries to key players can destroy a team\'s season.',
        },
        {
          customerLine: 'The coach says: "There is a young player coming through the academy." What does this mean?',
          options: [
            '"A young player is walking through the academy building."',
            '"A young player has developed through the youth system and is now close to the first team."',
            '"A new player has joined the academy from another club."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Coming through" is a phrasal verb that means progressing — developing from young player to first-team contender. It is always positive: it suggests the player is nearly ready for the first team.',
        },
        {
          customerLine: 'A fan complains: "There are too many changes — I never know who will play!" How do you explain rotation?',
          options: [
            '"You are right — the manager should always play the same eleven. Consistency is everything."',
            '"Rotation is necessary in a long season with three games a week. There are no players who can perform at 100% for every game. Rotation keeps the squad fresh and healthy — and it gives squad players their chance."',
            '"The manager makes changes because the starting players are all bad and he needs different ones."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Rotation is a management strategy, not a sign of weakness or inconsistency. Modern football has many competitions and matches — no player can perform at their best every game without rest.',
        },
        {
          customerLine: 'Someone asks: "Is it better to start or to come on as a substitute?" What is your opinion?',
          options: [
            '"Starting is always better — substitutes never have as much impact."',
            '"It depends on the player and the situation. Starting gives you more time on the pitch. But coming on as a substitute when the game is tight can be an advantage — you are fresh and the opposition is tired. Some players are more effective as substitutes."',
            '"Substitutes are better because they play less and stay fresh for every match."',
          ],
          correctIndex: 1,
          explanation: 'B is correct and shows the most complete understanding. Starting gives more minutes. But a "super sub" — a player who regularly changes games off the bench — can be just as valuable as a starter. Context matters.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this squad announcement. Find them as a group.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Today\'s matchday squad is announced. There are eleven player in the starting eleven.' },
        { speaker: 'Sofia', text: 'Is there any changes from last week\'s match?' },
        { speaker: 'Coach Diallo', text: 'Yes — there are two changes. The striker is injured so he fills in for by the academy graduate.' },
        { speaker: 'Ronaldo', text: 'And is there anyone new on the bench?' },
        { speaker: 'Coach Diallo', text: 'There is two new faces on the bench — both from the reserve team.' },
        { speaker: 'Sofia', text: 'Great — there are plenty of options. It looks like a strong squad for this match.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'There are eleven player in the starting eleven',
          correction: 'There are eleven players in the starting eleven',
          explanation: 'After a number greater than one, the noun must be plural. "Eleven player" is wrong — it should be "eleven players." This rule always applies: two players, three goals, eleven players. Never use a singular noun after a number greater than one.',
        },
        {
          lineIndex: 1,
          incorrectText: 'Is there any changes',
          correction: 'Are there any changes',
          explanation: '"Changes" is plural — so we need "are there" not "is there." Rule: "is there" + singular noun. "Are there" + plural noun. "Changes" = plural = "are there any changes?"',
        },
        {
          lineIndex: 4,
          incorrectText: 'There is two new faces',
          correction: 'There are two new faces',
          explanation: '"Two" is plural — so we need "there are" not "there is." "There is" + singular (one). "There are" + plural (two or more). "Two new faces" = plural = "there are two new faces."',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the sentence about squads and selection.',
      items: [
        {
          customerLine: 'Ronaldo: What is the hardest position to get into the starting eleven?',
          salespersonStart: 'Coach Diallo: It depends on the squad — but in most top clubs, there is very strong competition in midfield.',
          suggestedCompletion: 'There are often five or six midfielders competing for two or three places. Each one has different qualities — there is the box-to-box runner, there is the creative playmaker, there is the defensive midfielder who protects the back four. The manager selects based on the opposition: sometimes there is only one creative player in the eleven, sometimes there are two. It is the most tactical position on the pitch.',
        },
        {
          customerLine: 'Sofia: What happens to a player who is always on the bench and never plays?',
          salespersonStart: 'Coach Diallo: They have a few options — and none of them are easy.',
          suggestedCompletion: 'There is the option to go on loan — to a lower league club where there is more playing time available. There is also the option to push for a transfer — to a club where they would be in the starting eleven. Or there is the option to stay, work hard, and wait for their chance — injuries happen, and one opportunity can change everything. There are no easy answers. But a player who does not play does not develop — game time is everything.',
        },
        {
          customerLine: 'Ronaldo: Is there a big difference between an academy player and a first-team player?',
          salespersonStart: 'Coach Diallo: There is a very big difference — and it is not just about quality.',
          suggestedCompletion: 'In the academy, there are fewer expectations and more time to develop. In the first team, there is pressure every week — from the manager, the fans, the media, and yourself. There are also physical differences — first-team players are stronger, faster, and more experienced. The mental side is the biggest challenge. There are many technically excellent academy players who do not make the step up — not because they lack talent but because they cannot handle the pressure.',
        },
        {
          customerLine: 'Sofia: How does a manager decide who to pick in the starting eleven?',
          salespersonStart: 'Coach Diallo: There are many factors — it is never simple.',
          suggestedCompletion: 'There is the quality of the opposition — some players are better against defensive teams, others are better against teams who press high. There is the physical condition of each player — is there anyone carrying a minor injury? There are tactical considerations — how many attackers, how many midfielders? And there is form — who has been performing best in training and in recent matches? There is no perfect answer. That is why being a manager is one of the hardest jobs in football.',
        },
      ],
    },
  },
};

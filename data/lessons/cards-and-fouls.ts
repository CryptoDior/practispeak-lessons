import { Lesson } from '@/types/lesson';

export const cardsAndFouls: Lesson = {
  slug: 'cards-and-fouls',
  title: 'Cards and Fouls',
  subtitle: 'Discipline vocabulary and simple past — describing incidents',
  level: 'A2',
  description: 'Learn the language of fouls and discipline — foul, handball, booking, yellow card, red card, sent off — and practise describing incidents using the simple past.',
  heroImage: '/images/cards-and-fouls-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Simple Past — describing incidents in a match',
    description: 'When describing a foul, a booking, or a sending off from a finished match, we use the simple past. The incident happened — so it is past. Many of the key verbs here are irregular.',
    positivePattern: 'Subject + past verb',
    positiveExample: '"The defender fouled the striker inside the box."',
    negativePattern: 'Subject + DID NOT + base verb',
    negativeExample: '"He didn\'t mean it — but the referee still booked him."',
    positiveExamples: [
      { sentence: 'The referee showed him a yellow card.', note: '(irregular: show → showed)' },
      { sentence: 'She committed a professional foul on the last defender.', note: '(regular: commit → committed)' },
      { sentence: 'He was sent off in the 35th minute.', note: '(passive: was + past participle)' },
      { sentence: 'The midfielder received a second yellow — she had to go.', note: '(irregular: receive → received)' },
    ],
    negativeExamples: [
      { sentence: 'The referee didn\'t give a red card — it was only a yellow.', note: '(did not + base verb)' },
      { sentence: 'He didn\'t touch the ball with his hand — but the referee gave it.', note: '(did not + base verb)' },
    ],
  },

  vocabulary: [
    {
      word: 'FOUL',
      partOfSpeech: 'noun / verb',
      definition: 'An illegal action against an opponent — tripping, pushing, or holding them unfairly.',
      example: 'The defender fouled the striker from behind — the referee had to act.',
      imageSlug: '/images/cards-and-fouls-foul.png',
    },
    {
      word: 'HANDBALL',
      partOfSpeech: 'noun',
      definition: 'When a player deliberately touches the ball with their hand or arm — a foul.',
      example: 'Handball! His arm was in an unnatural position — the referee gave a penalty.',
      imageSlug: '/images/cards-and-fouls-handball.png',
    },
    {
      word: 'BOOKING',
      partOfSpeech: 'noun',
      definition: 'When a referee records a player\'s name and shows a yellow card — an official caution.',
      example: 'He got a booking for a late tackle — one more and he\'ll miss the next match.',
      imageSlug: '/images/cards-and-fouls-booking.png',
    },
    {
      word: 'YELLOW CARD',
      partOfSpeech: 'noun',
      definition: 'A caution shown by the referee — a warning. Two yellow cards in one game = red card.',
      example: 'The referee reached into his pocket and showed a yellow card — a clear caution.',
      imageSlug: '/images/cards-and-fouls-yellow-card.png',
    },
    {
      word: 'RED CARD',
      partOfSpeech: 'noun',
      definition: 'A dismissal — the player must leave the pitch immediately and cannot be replaced.',
      example: 'Red card! He stamped on the opponent — straight red, no argument.',
      imageSlug: '/images/cards-and-fouls-red-card.png',
    },
    {
      word: 'SUSPENSION',
      partOfSpeech: 'noun',
      definition: 'A ban — a player misses one or more matches as punishment for a red card or too many yellow cards.',
      example: 'He received a three-match suspension after the red card.',
      imageSlug: '/images/suspension.png',
    },
    {
      word: 'CAUTION',
      partOfSpeech: 'noun',
      definition: 'An official warning from the referee — the formal term for a yellow card booking.',
      example: 'The referee issued a caution for dangerous play — it was a necessary decision.',
      imageSlug: '/images/caution.png',
    },
    {
      word: 'SENT OFF',
      partOfSpeech: 'phrase',
      definition: 'When a player receives a red card and has to leave the pitch.',
      example: 'He was sent off in the 40th minute — his team played with 10 men for 50 minutes.',
      imageSlug: '/images/sent-off.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'COMMIT A FOUL',
      definition: 'To make an illegal challenge on an opponent.',
      example: 'She committed a foul on the striker just outside the box — dangerous position.',
      imageSlug: '/images/commit-a-foul.png',
    },
    {
      phrase: 'EARN A YELLOW',
      definition: 'To receive a yellow card — either through a foul or for dissent.',
      example: 'He earned a yellow for arguing with the referee — completely unnecessary.',
      imageSlug: '/images/earn-a-yellow.png',
    },
    {
      phrase: 'SEE RED',
      definition: 'To receive a red card — to be sent off.',
      example: 'The captain saw red in the 70th minute — a second yellow for a late tackle.',
      imageSlug: '/images/see-red.png',
    },
    {
      phrase: 'GET SENT OFF',
      definition: 'To be dismissed from the match after receiving a red card.',
      example: 'He got sent off for violent conduct — the team was devastated.',
      imageSlug: '/images/get-sent-off.png',
    },
    {
      phrase: 'DELIBERATE HANDBALL',
      definition: 'Intentionally touching the ball with the hand or arm — a clear foul and often a penalty.',
      example: 'The referee judged it a deliberate handball — penalty kick and a yellow card.',
      imageSlug: '/images/deliberate-handball.png',
    },
    {
      phrase: 'PROFESSIONAL FOUL',
      definition: 'A deliberate foul to stop an opponent — usually to prevent a clear scoring opportunity.',
      example: 'He committed a professional foul on the last defender — red card for denying a goal.',
      imageSlug: '/images/professional-foul.png',
    },
  ],

  onThePitch: {
    instructions: 'These are shouts players, coaches, and fans use during foul and card situations. You\'ll hear these in every match.',
    items: [
      {
        cue: 'Foul! That\'s a foul!',
        meaning: 'The opponent committed an illegal challenge — the referee should stop the game.',
        usage: 'Shouted by players when they believe an opponent has fouled them or a teammate. Always loud, always immediate. Players appeal to the referee hoping to get the decision.',
        imageSlug: 'otp-foul',
      },
      {
        cue: 'Ref!',
        meaning: 'Calling to the referee — "did you see that? Make the decision!"',
        usage: 'The most common shout in football. Players call "Ref!" to attract the referee\'s attention after a foul, handball, or any incident they want reviewed. Short, sharp, and used constantly.',
        imageSlug: 'otp-ref',
      },
      {
        cue: 'That\'s a yellow!',
        meaning: 'That foul deserves a yellow card — book him, referee.',
        usage: 'Shouted by attacking players or the bench after a foul they feel was serious enough to deserve a booking. Players often gesture showing a card with their hand.',
        imageSlug: 'otp-thats-a-yellow',
      },
      {
        cue: 'Off! Off! Off!',
        meaning: 'That challenge deserves a red card — send him off.',
        usage: 'Shouted by fans or players when they believe an opponent\'s foul was violent or serious enough for a red card. Usually chanted loudly by the crowd pointing at the player.',
        imageSlug: 'otp-off',
      },
      {
        cue: 'Stay on your feet!',
        meaning: 'Don\'t dive — win the ball cleanly without going to ground.',
        usage: 'Shouted by a coach when a player goes to ground too easily to win a foul. It means: be stronger, challenge properly, don\'t look for contact. "Stay on your feet!" is also advice against diving.',
        imageSlug: 'otp-stay-on-your-feet',
      },
      {
        cue: 'Keep your head!',
        meaning: 'Stay calm — don\'t react to provocation or you\'ll get booked or sent off.',
        usage: 'Shouted by the captain or coach when a player is getting angry after a foul. Reacting — pushing, arguing, retaliating — risks a yellow or red card. Keep cool, stay disciplined.',
        imageSlug: 'otp-keep-your-head',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Ronaldo — what happened in the 35th minute last night?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The midfielder [[committed:past tense of "commit"]] a [[foul:an illegal challenge]] on the striker from behind. The referee stopped the game.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'What did the referee do?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'He gave a [[yellow card:a caution — an official warning]] — a [[booking:when the referee records the player\'s name]]. It was the midfielder\'s first [[caution:official warning — yellow card]] of the match.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'But then — 20 minutes later — he [[fouled:committed a foul on]] someone again. A second yellow. And the referee showed him the [[red card:dismissal — the player must leave immediately]]!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'He [[saw:past of "see"]] red — he [[got sent off:was dismissed from the match]]. Two yellows make a red. His team played with 10 men for the rest of the match. What is the difference between a yellow and a red?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'A yellow is a warning — you stay on. A red means you have to leave immediately and cannot come back. Your team plays with one less player.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'And after the match — what punishment does a red card bring?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'A [[suspension:a ban — the player misses one or more matches]]. Usually one, two, or three matches — depending on the incident.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'What about [[handball:when a player touches the ball with their hand or arm]]? When is it a foul?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'When it is [[deliberate:done on purpose]], or when the arm is in an unnatural position. The referee uses judgment — it is one of the most argued decisions in football.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. The most important lesson: keep your discipline. One red card can cost your team the match. Keep your head — even when you are angry.',
    },
  ],

  matchingExercise: [
    { word: 'FOUL', definition: 'An illegal challenge — tripping, pushing, or holding an opponent' },
    { word: 'HANDBALL', definition: 'Deliberately touching the ball with the hand or arm' },
    { word: 'BOOKING', definition: 'The referee records a player\'s name and shows a yellow card' },
    { word: 'YELLOW CARD', definition: 'A caution — a warning. Two yellows in one match equals a red' },
    { word: 'RED CARD', definition: 'Dismissal — the player must leave immediately and cannot be replaced' },
    { word: 'SUSPENSION', definition: 'A ban — missing one or more matches as punishment' },
    { word: 'CAUTION', definition: 'An official warning from the referee — the formal term for a yellow card' },
    { word: 'SENT OFF', definition: 'When a player receives a red card and has to leave the pitch' },
  ],

  fillBlankExercise: [
    { before: 'The referee showed him a', answer: 'yellow card', after: '— his second of the match, so he was sent off.' },
    { before: 'She', answer: 'committed a foul', after: 'on the striker from behind — late and dangerous.' },
    { before: 'He', answer: 'got sent off', after: 'for violent conduct — a straight red card, no argument.' },
    { before: 'The referee judged it a', answer: 'deliberate handball', after: '— penalty kick and a yellow card.' },
    { before: 'He received a two-match', answer: 'suspension', after: 'after the red card for the professional foul.' },
    { before: 'She', answer: 'earned a yellow', after: 'for arguing with the referee after the decision.' },
    { before: 'It was a', answer: 'professional foul', after: '— he stopped the striker deliberately — red card for denying a goal.' },
    { before: 'The captain', answer: 'saw red', after: 'in the 80th minute — two yellows for reckless challenges.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What happens when a player receives two yellow cards in one match?',
      options: [
        'They receive a suspension only — but can stay on the pitch',
        'They receive a red card and must leave the pitch immediately',
        'They receive a warning and can continue playing',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the difference between a yellow card and a red card?',
      options: [
        'Yellow = stay on with a warning; Red = leave immediately, cannot be replaced',
        'Yellow = leave the pitch; Red = stay on but cannot touch the ball',
        'They are the same — both mean the player is suspended',
      ],
      correctIndex: 0,
    },
    {
      question: 'What is a "professional foul"?',
      options: [
        'A very skillful tackle that wins the ball cleanly',
        'A deliberate foul to stop a clear scoring opportunity',
        'A foul committed by a professional player',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence describes a sending off correctly using simple past?',
      options: [
        'He is sent off in the 35th minute.',
        'He was sent off in the 35th minute.',
        'He sends off in the 35th minute.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "see red" mean in football?',
      options: [
        'To get angry at the referee',
        'To receive a red card and be sent off',
        'To score a goal when your team is losing',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "keep your head" mean on the pitch?',
      options: [
        'Use your head to win headers from crosses',
        'Stay calm and don\'t react to provocation — avoid getting booked or sent off',
        'Keep your eyes on the ball at all times',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a suspension in football?',
      options: [
        'When a player is injured and cannot play',
        'A ban — missing one or more matches as punishment for cards',
        'When a match is stopped due to bad weather',
      ],
      correctIndex: 1,
    },
    {
      question: 'When is handball a foul?',
      options: [
        'Every time the ball touches any part of the arm',
        'When it is deliberate or when the arm is in an unnatural position',
        'Only when the player is inside their own penalty area',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence about a foul or card incident using the simple past. Choose the correct form.',
    items: [
      {
        sentence: 'The referee _____ (show) him a straight red card — no argument.',
        options: ['shows', 'showed', 'is showing'],
        correctIndex: 1,
        explanation: '"Showed" is correct. Simple past of "show" (regular: show → showed). The match is over — this is a completed action. "Shows" is present simple. "Is showing" is present continuous.',
      },
      {
        sentence: 'She _____ (commit) a foul on the last defender and _____ (receive) a red card.',
        options: ['committed / received', 'commits / receives', 'is committing / is receiving'],
        correctIndex: 0,
        explanation: '"Committed / received" is correct. Both are regular past tense verbs describing completed actions in a finished match. "Commits / receives" is present simple. "Is committing / is receiving" is present continuous.',
      },
      {
        sentence: 'He _____ (not / mean) to foul her — but the referee still booked him.',
        options: ['didn\'t mean', 'don\'t mean', 'wasn\'t meaning'],
        correctIndex: 0,
        explanation: '"Didn\'t mean" is correct. Negative simple past: DID NOT (didn\'t) + base verb (mean). "Don\'t mean" is present simple negative. "Wasn\'t meaning" is past continuous — unusual with "mean" as it is a stative verb.',
      },
      {
        sentence: 'The captain _____ (see) red in the 80th minute — his second yellow.',
        options: ['sees', 'seen', 'saw'],
        correctIndex: 2,
        explanation: '"Saw" is correct. "See" is an irregular verb: see → saw (past simple). "Sees" is present simple. "Seen" is the past participle (used in perfect tenses, not simple past alone).',
      },
      {
        sentence: 'He _____ (get) sent off for violent conduct — the team played with 10 men.',
        options: ['get', 'got', 'is getting'],
        correctIndex: 1,
        explanation: '"Got" is correct. "Get" is an irregular verb: get → got. Simple past for a completed event. "Get" is base form. "Is getting" is present continuous.',
      },
      {
        sentence: 'She _____ (receive) a two-match suspension after the red card.',
        options: ['received', 'receives', 'is receiving'],
        correctIndex: 0,
        explanation: '"Received" is correct. Regular simple past (receive + -d). Completed action after the match. "Receives" is present simple. "Is receiving" is present continuous.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read each situation and choose the best response — A, B, or C.',
      items: [
        {
          customerLine: 'An opponent fouls you hard from behind. You are angry. What do you do?',
          options: [
            'Retaliate — push or kick the opponent back.',
            'Stay calm, get up, and let the referee make the decision.',
            'Argue loudly with the referee until they give a card.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Retaliating (A) risks a yellow or red card for you — your team loses a player for your reaction. Arguing loudly (C) risks a booking for dissent. The best response is to stay calm, get up, and trust the referee. Keep your head.',
        },
        {
          customerLine: 'Your team\'s best player has a yellow card. There are 30 minutes left. They commit a borderline foul.',
          options: [
            'Hope the referee doesn\'t book them again.',
            'The coach should substitute the player immediately to protect them from a second yellow.',
            'Tell the player to commit more fouls to slow down the opposition.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A player on a yellow card is at serious risk of a second yellow and red card. The coach should consider substituting them to protect the team. Hoping for the best (A) is too risky. Committing more fouls (C) will almost certainly lead to a red card.',
        },
        {
          customerLine: 'A player in your team receives a straight red card for violent conduct with 20 minutes left and you\'re drawing 0-0.',
          options: [
            'Attack more — you need to score before extra time.',
            'Reorganise — drop into a defensive shape, play compact, and protect the draw.',
            'Give up and accept a defeat — 10 vs 11 is impossible to defend.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. With 10 men, the priority is organisation and discipline. Drop into a compact defensive shape — less space for the opposition to attack. A draw is still possible. Attacking (A) leaves you even more exposed. Giving up (C) is never the right answer.',
        },
        {
          customerLine: 'The referee shows your teammate a yellow card for a challenge you think was clean.',
          options: [
            'All 10 outfield players surround the referee and shout at them.',
            'The captain calmly walks over and politely asks the referee to explain the decision.',
            'Ignore it completely — referees never change their minds.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Surrounding the referee (A) risks multiple yellow cards for dissent — a disaster. Ignoring it completely (C) means you cannot represent your teammate. The captain — and only the captain — should calmly ask for clarification. Referees respect calm communication.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this match incident report. Find them as a group.',
      dialogue: [
        { speaker: 'Reporter', text: 'The midfielder commits a foul on the striker in the 35th minute.' },
        { speaker: 'Reporter', text: 'The referee showed a yellow card — the midfielder\'s first booking of the match.' },
        { speaker: 'Reporter', text: 'Twenty minutes later, the same player fouled again and the referee gived a second yellow.' },
        { speaker: 'Reporter', text: 'The midfielder seen red and was immediately sent off the pitch.' },
        { speaker: 'Reporter', text: 'He received a three-match suspension after the match — a big loss for his team.' },
        { speaker: 'Reporter', text: 'His team didn\'t collapsed — they held on bravely with 10 men and drew 1-1.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'The midfielder commits a foul in the 35th minute',
          correction: 'The midfielder committed a foul in the 35th minute',
          explanation: 'This is a match report about a finished game — simple past is required. "Commits" is present simple. The correct past form of "commit" is "committed" (double-t + -ed).',
        },
        {
          lineIndex: 2,
          incorrectText: 'the referee gived a second yellow',
          correction: 'the referee gave a second yellow',
          explanation: '"Give" is an irregular verb: give → gave. "Gived" is not correct — you cannot add -ed to irregular verbs. The correct simple past form is "gave."',
        },
        {
          lineIndex: 3,
          incorrectText: 'The midfielder seen red',
          correction: 'The midfielder saw red',
          explanation: '"Seen" is the past participle of "see" — used with auxiliary verbs (has seen, had seen). For simple past, use "saw." "The midfielder saw red" is correct.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using cards and fouls vocabulary from this lesson.',
      items: [
        {
          customerLine: 'Ronaldo: Why do players sometimes get a yellow card for celebrating a goal?',
          salespersonStart: 'Coach Diallo: Because certain celebrations are against the rules.',
          suggestedCompletion: 'Removing your shirt, climbing the fence, or making an offensive gesture after scoring can result in a yellow card — even though you scored. The referee still has to apply the rules. It is frustrating, but discipline applies at every moment — even in celebration. Smart players celebrate with their teammates and stay in the game.',
        },
        {
          customerLine: 'Sofia: What is the difference between a red card and a straight red card?',
          salespersonStart: 'Coach Diallo: A red card after two yellows is a cumulative red.',
          suggestedCompletion: 'A straight red card means the action was so serious — violent conduct, a serious foul, denying a clear goal — that the referee sent the player off immediately without any yellow card warning. A cumulative red comes after two yellow cards in the same match. Both mean the same result: leave the pitch. But a straight red usually carries a longer suspension.',
        },
        {
          customerLine: 'Sofia: Can VAR overturn a red card decision?',
          salespersonStart: 'Coach Diallo: Yes — VAR can review red card decisions and change them.',
          suggestedCompletion: 'If the on-field referee missed something or made a mistake, VAR can recommend a review. The referee goes to the pitchside monitor and looks at the incident again. They can then upgrade a yellow to a red — or, if the red was wrong, rescind it. VAR has changed many decisions in modern football, and it has made the red card process more accurate, even if it takes more time.',
        },
        {
          customerLine: 'Ronaldo: What does "keeping your discipline" mean for a team over a whole season?',
          salespersonStart: 'Coach Diallo: It means not giving away red cards and suspensions throughout the season.',
          suggestedCompletion: 'A team that gets red cards loses players for key matches. A player who gets five yellow cards reaches a suspension threshold and misses a game. Over a season, disciplined teams keep their best players available. Undisciplined teams have suspensions at the worst times — injured and missing key players in big matches. Discipline is not just about one incident. It is a season-long habit.',
        },
      ],
    },
  },
};

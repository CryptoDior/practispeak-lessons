import { Lesson } from '@/types/lesson';

export const dribbleTackleIntercept: Lesson = {
  slug: 'dribble-tackle-intercept',
  title: 'Dribble, Tackle, Intercept',
  subtitle: 'Ball control vocabulary and the present continuous',
  level: 'A2',
  description: 'Learn the key ball control words — dribble, tackle, intercept, control, touch, shield, press, nutmeg — and practise describing actions in progress using the present continuous: "He\'s dribbling past the defender."',
  heroImage: '/images/dribble-tackle-intercept-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Present Continuous — describing actions happening right now',
    description: 'We use the present continuous (am/is/are + verb-ing) to describe what is happening at this exact moment. In football commentary and on the pitch, you use it constantly.',
    positivePattern: 'Subject + IS/ARE + verb-ing',
    positiveExample: '"He\'s dribbling past the defender."',
    negativePattern: 'Subject + ISN\'T/AREN\'T + verb-ing',
    negativeExample: '"She isn\'t pressing — she\'s holding her position."',
    positiveExamples: [
      { sentence: 'He\'s dribbling toward the goal.', note: '(happening right now)' },
      { sentence: 'She\'s pressing the defender hard.', note: '(in progress)' },
      { sentence: 'They\'re intercepting every pass.', note: '(ongoing action)' },
      { sentence: 'The midfielder is shielding the ball.', note: '(at this moment)' },
    ],
    negativeExamples: [
      { sentence: 'He isn\'t tackling — he\'s waiting.', note: '(not happening now)' },
      { sentence: 'They aren\'t pressing high today.', note: '(not in progress)' },
    ],
  },

  vocabulary: [
    {
      word: 'DRIBBLE',
      partOfSpeech: 'verb',
      definition: 'To run with the ball at your feet, moving it past defenders.',
      example: 'He\'s dribbling past the defender — nobody can stop him!',
      imageSlug: '/images/dribble-tackle-intercept-dribble.png',
    },
    {
      word: 'TACKLE',
      partOfSpeech: 'verb',
      definition: 'To take the ball away from an opponent using your feet.',
      example: 'The defender is tackling the striker near the penalty box.',
      imageSlug: '/images/dribble-tackle-intercept-tackle.png',
    },
    {
      word: 'INTERCEPT',
      partOfSpeech: 'verb',
      definition: 'To catch or stop a pass before it reaches the opponent it was aimed at.',
      example: 'The midfielder is intercepting every pass — brilliant reading of the game.',
      imageSlug: '/images/intercept.png',
    },
    {
      word: 'CONTROL',
      partOfSpeech: 'verb',
      definition: 'To stop the ball and bring it under your command with your first touch.',
      example: 'She\'s controlling the ball perfectly — great first touch.',
      imageSlug: '/images/control.png',
    },
    {
      word: 'TOUCH',
      partOfSpeech: 'noun',
      definition: 'The contact a player makes with the ball — often refers to the quality of the first contact.',
      example: 'What a touch! He controlled it instantly and turned.',
      imageSlug: '/images/touch.png',
    },
    {
      word: 'SHIELD',
      partOfSpeech: 'verb',
      definition: 'To use your body to protect the ball from a defender while you wait for support.',
      example: 'He\'s shielding the ball in the corner — running the clock down.',
      imageSlug: '/images/shield.png',
    },
    {
      word: 'PRESS',
      partOfSpeech: 'verb',
      definition: 'To move quickly toward an opponent with the ball to put them under pressure.',
      example: 'Both forwards are pressing the defenders — they\'re not letting them play.',
      imageSlug: '/images/dribble-tackle-intercept-press.png',
    },
    {
      word: 'NUTMEG',
      partOfSpeech: 'verb',
      definition: 'To kick the ball through an opponent\'s legs.',
      example: 'He nutmegged the defender and sprinted through on goal!',
      imageSlug: '/images/dribble-tackle-intercept-nutmeg.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'TAKE HIM ON',
      definition: 'To attempt to dribble past a specific defender.',
      example: 'Take him on! You\'re faster — go past him!',
      imageSlug: '/images/take-him-on.png',
    },
    {
      phrase: 'WIN THE BALL',
      definition: 'To successfully tackle and gain possession.',
      example: 'She won the ball in midfield and started the counter-attack.',
      imageSlug: '/images/win-the-ball.png',
    },
    {
      phrase: 'UNDER PRESSURE',
      definition: 'When a defender is closing in on the player with the ball.',
      example: 'He\'s under pressure — pass it quickly!',
      imageSlug: '/images/under-pressure.png',
    },
    {
      phrase: 'BEAT THE DEFENDER',
      definition: 'To get past a defender successfully with the ball.',
      example: 'She beat the defender on the left side and crossed it in.',
      imageSlug: '/images/beat-the-defender.png',
    },
    {
      phrase: 'FIRST TOUCH',
      definition: 'The initial contact a player makes with the ball — good or bad.',
      example: 'His first touch was perfect — he controlled it and turned in one movement.',
      imageSlug: '/images/dribble-tackle-intercept-first-touch.png',
    },
    {
      phrase: 'READ THE GAME',
      definition: 'To anticipate where the ball will go and move into position early.',
      example: 'She\'s reading the game brilliantly — she intercepted three passes in a row.',
      imageSlug: '/images/read-the-game.png',
    },
  ],

  onThePitch: {
    instructions: 'These are real phrases players and coaches shout on the pitch and at training. Listen, learn them, and use them!',
    items: [
      {
        cue: 'Take him on!',
        meaning: 'Dribble past that defender — you can do it.',
        usage: 'A teammate or coach shouts this when you have the ball and a defender in front of you. They are telling you to be confident and try to beat the defender with skill.',
        imageSlug: 'otp-take-him-on',
      },
      {
        cue: 'Turn!',
        meaning: 'You have space behind you — control the ball and turn to face goal.',
        usage: 'A teammate shouts this when you receive the ball with your back to goal and there is space to turn. It is one of the most common and important shouts in football.',
        imageSlug: 'otp-turn',
      },
      {
        cue: 'Man on!',
        meaning: 'A defender is right behind you — protect the ball or pass it quickly.',
        usage: 'Players shout this as a warning. If you hear "Man on!" you need to react immediately — shield the ball, lay it off, or turn quickly. Do not hold it too long.',
        imageSlug: 'otp-man-on',
      },
      {
        cue: 'Press! Press!',
        meaning: 'Close down the player with the ball — get tight and don\'t let them play.',
        usage: 'A coach or captain shouts this when the team loses the ball and needs to press high to win it back quickly. The whole team responds by moving toward the ball.',
        imageSlug: 'otp-press',
      },
      {
        cue: 'Cut it out!',
        meaning: 'Intercept that pass — get in the way of it.',
        usage: 'Shouted when a defender or midfielder sees a pass coming and needs to intercept it. It means "read the game, get across, and stop the ball reaching its target."',
        imageSlug: 'otp-cut-it-out',
      },
      {
        cue: 'Hold it up!',
        meaning: 'Shield the ball and wait — don\'t lose it, keep it until help arrives.',
        usage: 'A coach or striker partner shouts this when the striker receives the ball but has no immediate options. Shield the ball with your body, stay strong, and wait for teammates to support.',
        imageSlug: 'otp-hold-it-up',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Watch Ronaldo — what is he doing right now?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'He\'s [[dribbling:running with the ball at his feet, moving past defenders]] toward the penalty box!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. And what is the defender doing?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'She\'s [[pressing:moving quickly toward the ball to put the player under pressure]] him — she\'s getting very close.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I can hear her — "Man on!" But I\'m [[shielding:using my body to protect the ball]] the ball and looking for a pass.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Excellent. Now — she\'s going to [[tackle:take the ball away using her feet]]. What do you do?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I [[nutmeg:kick the ball through the opponent\'s legs]] her! The ball goes through her legs and I\'m through!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Oh! He\'s nutmegged her! Now he\'s running — nobody is [[pressing:closing down]] him now.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'But look — the midfielder is [[intercepting:stopping the pass before it reaches its target]] his pass. She read the game perfectly.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'She [[intercepted:caught the ball before it reached its target]] it! Great reading of the game. But I nearly scored!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good [[control:stopping the ball and bringing it under your command]], good dribbling, good shielding. But you need to [[control:bring the ball under your command]] it faster on your first [[touch:initial contact with the ball]]. Let\'s go again.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Coach — what does "reading the game" mean exactly?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Seeing the pass before it happens and moving to intercept it. The best players aren\'t the fastest — they\'re the smartest.',
    },
  ],

  matchingExercise: [
    { word: 'DRIBBLE', definition: 'Run with the ball at your feet, moving past defenders' },
    { word: 'TACKLE', definition: 'Take the ball away from an opponent using your feet' },
    { word: 'INTERCEPT', definition: 'Stop a pass before it reaches the opponent it was aimed at' },
    { word: 'CONTROL', definition: 'Stop the ball and bring it under your command' },
    { word: 'TOUCH', definition: 'The contact a player makes with the ball' },
    { word: 'SHIELD', definition: 'Use your body to protect the ball from a defender' },
    { word: 'PRESS', definition: 'Move quickly toward an opponent to put them under pressure' },
    { word: 'NUTMEG', definition: 'Kick the ball through an opponent\'s legs' },
  ],

  fillBlankExercise: [
    { before: 'He\'s', answer: 'dribbling', after: 'past the defender — nobody can catch him!' },
    { before: 'She\'s', answer: 'pressing', after: 'the defender and not letting him play.' },
    { before: 'The midfielder', answer: 'intercepted', after: 'the pass — great reading of the game.' },
    { before: 'Good', answer: 'control', after: '! He stopped the ball perfectly with his first touch.' },
    { before: 'He\'s', answer: 'shielding', after: 'the ball in the corner with his back to the defender.' },
    { before: 'She', answer: 'nutmegged', after: 'the defender and sprinted toward goal!' },
    { before: 'They\'re', answer: 'pressing', after: 'high — the defenders can\'t play out from the back.' },
    { before: 'He', answer: 'tackled', after: 'the striker and won the ball cleanly.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which sentence uses the present continuous correctly?',
      options: [
        'He dribbles past the defender right now.',
        'He\'s dribbling past the defender.',
        'He dribbled past the defender now.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does Coach Diallo ask Sofia to do first?',
      options: ['Watch Ronaldo dribble', 'Intercept a pass', 'Press the defender'],
      correctIndex: 0,
    },
    {
      question: 'How does Ronaldo beat the defender?',
      options: ['He tackles her', 'He nutmegs her', 'He presses her'],
      correctIndex: 1,
    },
    {
      question: 'Why does the midfielder intercept Ronaldo\'s pass?',
      options: ['She got lucky', 'She was pressing high', 'She read the game and moved early'],
      correctIndex: 2,
    },
    {
      question: 'What does "Man on!" mean on the pitch?',
      options: ['A goal has been scored', 'A defender is right behind you', 'You should shoot now'],
      correctIndex: 1,
    },
    {
      question: 'What does shielding the ball mean?',
      options: [
        'Kicking the ball through the defender\'s legs',
        'Pressing the opponent hard',
        'Using your body to protect the ball from a defender',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does Coach Diallo say the best players are?',
      options: ['The fastest', 'The strongest', 'The smartest'],
      correctIndex: 2,
    },
    {
      question: 'What does Coach Diallo tell Ronaldo to improve?',
      options: ['His shielding', 'His first touch — control the ball faster', 'His pressing'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Use the present continuous to complete each sentence. Choose the correct form.',
    items: [
      {
        sentence: 'Look! The winger _____ (dribble) toward the goal right now.',
        options: ['dribbles', 'is dribbling', 'dribbled'],
        correctIndex: 1,
        explanation: '"Is dribbling" is correct. We use IS + verb-ing (present continuous) for actions happening right now. "Dribbles" is present simple — used for habits, not right-now actions. "Dribbled" is past tense.',
      },
      {
        sentence: 'Both forwards _____ (press) the defenders — they aren\'t letting them pass.',
        options: ['pressed', 'are pressing', 'press'],
        correctIndex: 1,
        explanation: '"Are pressing" is correct. The subject is plural (both forwards) so we use ARE + verb-ing. This is a present continuous action — it is happening right now in the match.',
      },
      {
        sentence: 'He _____ (shield) the ball near the corner flag — running the clock down.',
        options: ['is shielding', 'shields', 'shielded'],
        correctIndex: 0,
        explanation: '"Is shielding" is correct. Present continuous (IS + verb-ing) describes what is happening at this moment. "Shields" (present simple) would describe a habit. "Shielded" is past tense.',
      },
      {
        sentence: 'She _____ (intercept) the pass — she read the game perfectly!',
        options: ['is intercepting', 'intercepted', 'intercepts'],
        correctIndex: 1,
        explanation: '"Intercepted" is correct here. The action is finished — she already intercepted the pass. We use past simple for completed actions. "Is intercepting" would be for an action still in progress.',
      },
      {
        sentence: 'Watch — the defender _____ (tackle) him right now!',
        options: ['tackled', 'tackles', 'is tackling'],
        correctIndex: 2,
        explanation: '"Is tackling" is correct. "Watch" tells us this is happening right now — so present continuous (IS + verb-ing) is the right form. "Tackles" is for habits and "tackled" is past.',
      },
      {
        sentence: 'They _____ (not / press) today — they\'re sitting deep and defending.',
        options: ['aren\'t pressing', 'isn\'t pressing', 'don\'t pressing'],
        correctIndex: 0,
        explanation: '"Aren\'t pressing" is correct. Negative present continuous with a plural subject uses AREN\'T + verb-ing. "Isn\'t pressing" would be for a singular subject (he/she). "Don\'t pressing" is not grammatically correct.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Your coach shouts an instruction. Choose the best action — A, B, or C.',
      items: [
        {
          customerLine: 'Coach shouts: "Man on! Hold it up!"',
          options: [
            'You turn and try to dribble past the defender.',
            'You shield the ball with your body and wait for a teammate to support.',
            'You press the defender immediately.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Man on!" means a defender is right behind you. "Hold it up!" means shield the ball and wait. Turning and dribbling (A) risks losing the ball. Pressing (C) is not your job — you have the ball.',
        },
        {
          customerLine: 'Coach shouts: "Take him on!"',
          options: [
            'You pass the ball to a teammate immediately.',
            'You shield the ball and wait.',
            'You dribble forward and try to beat the defender.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. "Take him on!" means be confident — dribble and try to beat the defender. It is an instruction to use your skill and go past them. Passing (A) avoids the challenge and shielding (B) is too passive.',
        },
        {
          customerLine: 'Coach shouts: "Press! Press! Win it back!"',
          options: [
            'Your team moves toward the ball and closes down the opponent.',
            'Your team drops back and defends deep.',
            'Your striker waits for the ball near the goal.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "Press! Win it back!" is an instruction for the whole team to move toward the ball and put the opponent under pressure. The aim is to force a mistake and intercept the ball.',
        },
        {
          customerLine: 'Coach shouts: "Cut it out!" as the opponent plays a pass.',
          options: [
            'You run away from the pass.',
            'You move to intercept the pass before it reaches the opponent.',
            'You tackle the player who just passed.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Cut it out!" means intercept the pass — get your body in the way so the ball does not reach the intended player. You need to read the game and move early.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar or vocabulary mistakes in this training ground conversation. Find them as a group.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Watch Ronaldo — what is he doing right now?' },
        { speaker: 'Sofia', text: 'He dribbles past the defender right now — look at him go!' },
        { speaker: 'Coach Diallo', text: 'Good. And the midfielder — is she pressing?' },
        { speaker: 'Sofia', text: 'Yes — she\'s intercept every pass. Brilliant reading of the game.' },
        { speaker: 'Ronaldo', text: 'I tried to nutmeg the defender but she tackled me and wins the ball.' },
        { speaker: 'Coach Diallo', text: 'Good effort. Next time, shield the ball and waited for support.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'He dribbles past the defender right now',
          correction: 'He\'s dribbling past the defender right now',
          explanation: '"Right now" tells us this is happening at this moment — so we need the present continuous: IS + dribbling. "Dribbles" is present simple, which describes habits and routines, not actions in progress.',
        },
        {
          lineIndex: 3,
          incorrectText: 'she\'s intercept every pass',
          correction: 'she\'s intercepting every pass',
          explanation: 'Present continuous needs IS/ARE + verb-ING. "She\'s intercept" is missing the -ing ending. The correct form is "she\'s intercepting."',
        },
        {
          lineIndex: 4,
          incorrectText: 'tackled me and wins the ball',
          correction: 'tackled me and won the ball',
          explanation: 'Both verbs describe a completed past action, so both must be in the past tense. "Tackled" is correct — but "wins" must be "won" to match the tense of the sentence.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using present continuous and ball control vocabulary from this lesson.',
      items: [
        {
          customerLine: 'Sofia: What is Ronaldo doing right now?',
          salespersonStart: 'Coach Diallo: He\'s dribbling past the defender.',
          suggestedCompletion: 'He\'s controlling the ball brilliantly — good first touch. Now he\'s shielding it from the second defender and looking for a pass. He\'s reading the game well today.',
        },
        {
          customerLine: 'Sofia: Why is "first touch" so important in football?',
          salespersonStart: 'Coach Diallo: Because everything starts with the first touch.',
          suggestedCompletion: 'If your first touch is bad, the ball bounces away and you lose possession. If your first touch is good, you control the ball instantly and can dribble, pass, or shoot immediately. The best players are always calm and precise with their first touch.',
        },
        {
          customerLine: 'Ronaldo: Coach — when should I press and when should I intercept?',
          salespersonStart: 'Coach Diallo: Press when the opponent has the ball at their feet.',
          suggestedCompletion: 'Intercept when you see a pass coming — read the game and move into the line of the pass before it arrives. Pressing and intercepting together make your team very hard to play against. But you need to be quick and smart — not just fast.',
        },
        {
          customerLine: 'Sofia: What does "reading the game" actually mean?',
          salespersonStart: 'Coach Diallo: It means seeing what is going to happen before it happens.',
          suggestedCompletion: 'You watch the player on the ball, you see where their teammates are moving, and you predict the pass. Then you move early to intercept it. Players who read the game well don\'t need to be fast — they\'re already in the right position.',
        },
      ],
    },
  },
};

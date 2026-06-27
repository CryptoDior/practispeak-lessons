import { Lesson } from '@/types/lesson';

export const typesOfPass: Lesson = {
  slug: 'types-of-pass',
  title: 'Types of Pass',
  subtitle: 'Passing vocabulary and the present continuous',
  level: 'A2',
  description: 'Learn the key passing words — through ball, long ball, cross, lay-off, chip, switch — and practise describing passes in progress using the present continuous.',
  heroImage: '/images/types-of-pass-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Present Continuous — describing passes as they happen',
    description: 'We use the present continuous (am/is/are + verb-ing) to describe a pass or movement happening right now. You hear this in commentary and on the training pitch constantly.',
    positivePattern: 'Subject + IS/ARE + verb-ing',
    positiveExample: '"She\'s playing a through ball into the box."',
    negativePattern: 'Subject + ISN\'T/AREN\'T + verb-ing',
    negativeExample: '"He isn\'t crossing — he\'s cutting inside."',
    positiveExamples: [
      { sentence: 'He\'s switching the play to the left wing.', note: '(happening right now)' },
      { sentence: 'She\'s laying it off to the midfielder.', note: '(in progress)' },
      { sentence: 'They\'re playing short passes — keeping it tight.', note: '(ongoing)' },
      { sentence: 'The winger is crossing from the byline.', note: '(at this moment)' },
    ],
    negativeExamples: [
      { sentence: 'He isn\'t playing it long — he\'s keeping it short.', note: '(not happening now)' },
      { sentence: 'She isn\'t chipping it — she\'s driving it low.', note: '(not in progress)' },
    ],
  },

  vocabulary: [
    {
      word: 'THROUGH BALL',
      partOfSpeech: 'noun',
      definition: 'A pass played into the space behind the defenders for a striker to run onto.',
      example: 'He\'s playing a through ball — the striker is running onto it!',
      imageSlug: '/images/through-ball.png',
    },
    {
      word: 'LONG BALL',
      partOfSpeech: 'noun',
      definition: 'A high, long pass played forward over a large distance.',
      example: 'She\'s playing a long ball over the top — the winger is chasing it!',
      imageSlug: '/images/long-ball.png',
    },
    {
      word: 'SHORT PASS',
      partOfSpeech: 'noun',
      definition: 'A quick, ground-level pass played to a nearby teammate.',
      example: 'They\'re moving the ball with short passes — nobody can stop them.',
      imageSlug: '/images/short-pass.png',
    },
    {
      word: 'CROSS',
      partOfSpeech: 'noun / verb',
      definition: 'A pass delivered from a wide position into the penalty area.',
      example: 'She\'s crossing from the right — someone needs to get on the end of it!',
      imageSlug: '/images/cross.png',
    },
    {
      word: 'LAY-OFF',
      partOfSpeech: 'noun / verb',
      definition: 'A short, simple pass back or sideways to a supporting teammate.',
      example: 'He\'s laying it off to the midfielder — first touch, one touch.',
      imageSlug: '/images/lay-off.png',
    },
    {
      word: 'CHIP',
      partOfSpeech: 'verb',
      definition: 'To lift the ball up with a short flick of the foot, sending it high over a player.',
      example: 'She\'s chipping it over the goalkeeper — is it going in?!',
      imageSlug: '/images/chip.png',
    },
    {
      word: 'SWITCH',
      partOfSpeech: 'verb',
      definition: 'To play a long diagonal pass to the other side of the pitch, changing the direction of attack.',
      example: 'He\'s switching the play — the left winger suddenly has all the space.',
      imageSlug: '/images/switch.png',
    },
    {
      word: 'SQUARE BALL',
      partOfSpeech: 'noun',
      definition: 'A pass played sideways, across the pitch, at a right angle to the direction of play.',
      example: 'Play it square — your teammate is completely free on the right!',
      imageSlug: '/images/square-ball.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PLAY IT SIMPLE',
      definition: 'Keep the pass short and safe; do not take risks — find the easiest option.',
      example: 'Play it simple — we have players free. Don\'t force anything.',
      imageSlug: '/images/play-it-simple.png',
    },
    {
      phrase: 'FIND THE FEET',
      definition: 'Pass the ball directly to a teammate\'s feet, not into space ahead of them.',
      example: 'Find his feet — he\'s not moving, play it right to him.',
      imageSlug: '/images/find-the-feet.png',
    },
    {
      phrase: 'SWITCH THE PLAY',
      definition: 'Change the direction of attack with a long pass to the other side of the pitch.',
      example: 'Switch the play! The left side is completely open — nobody\'s over there.',
      imageSlug: '/images/switch-the-play.png',
    },
    {
      phrase: 'PLAY THROUGH THE LINES',
      definition: 'Pass between the opposition\'s defensive lines to reach a player in space behind them.',
      example: 'He played it through the lines — brilliant vision, the striker was free.',
      imageSlug: '/images/play-through-the-lines.png',
    },
    {
      phrase: 'ONE-TWO',
      definition: 'A quick combination where a player passes to a teammate and immediately receives the ball back.',
      example: 'One-two! He played it and got it straight back — now he\'s through on goal.',
      imageSlug: '/images/one-two.png',
    },
    {
      phrase: 'OVER THE TOP',
      definition: 'A long ball played over the heads of the defending line into the space behind.',
      example: 'Over the top! The striker is in behind — nobody is tracking her run.',
      imageSlug: '/images/over-the-top.png',
    },
  ],

  onThePitch: {
    instructions: 'These are shouts players and coaches use when they want a specific type of pass. Learn them, recognise them, shout them!',
    items: [
      {
        cue: 'Simple!',
        meaning: 'Keep it short and safe — don\'t try anything risky.',
        usage: 'Shouted by a coach or captain when a player is under pressure and needs to release the ball safely to a nearby teammate. It means: take the easy option, don\'t force it.',
        imageSlug: 'otp-simple',
      },
      {
        cue: 'Square it!',
        meaning: 'Pass it sideways to a free teammate.',
        usage: 'Shouted when a player can\'t go forward but a teammate is wide open to the side. The player with the ball should play a square pass instead of risking losing it.',
        imageSlug: 'otp-square-it',
      },
      {
        cue: 'Find his feet!',
        meaning: 'Pass directly to the player, not into space.',
        usage: 'Shouted when the target player is standing still and not making a run. The passer should play it right to their feet, not ahead of them.',
        imageSlug: 'otp-find-his-feet',
      },
      {
        cue: 'Switch!',
        meaning: 'Play the ball to the other side of the pitch.',
        usage: 'Shouted when one side of the pitch is congested and the opposite flank is completely free. The player should play a long diagonal pass to change the direction of attack.',
        imageSlug: 'otp-switch',
      },
      {
        cue: 'Over!',
        meaning: 'Play the ball over the top of the defence.',
        usage: 'Shouted when a striker has made a run in behind the defensive line and is in space. The player in possession should chip or drive the ball over the defenders.',
        imageSlug: 'otp-over',
      },
      {
        cue: 'One-two!',
        meaning: 'Combine quickly — play it and move to get it back.',
        usage: 'Shouted to encourage a quick combination pass. The player passes to a teammate and immediately runs forward to receive it back. It is one of the most effective moves in football.',
        imageSlug: 'otp-one-two',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Ronaldo — watch Sofia. What is she doing right now?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'She\'s [[laying:laying it off to a teammate — a short, simple pass]] it off to the midfielder. Simple.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. And now? The midfielder has the ball — the right side is packed. What should he do?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Switch! He should be [[switching:playing a long diagonal pass to the opposite side]] the play — the left winger has space!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'He\'s switching now! The ball is going across — the left winger is [[crossing:delivering a pass from wide into the penalty area]] it in!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Beautiful. Now — what is the difference between a through ball and a long ball?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'A [[through ball:a pass into the space behind the defenders for a striker to run onto]] goes into space behind defenders. A [[long ball:a high, long pass played forward over a large distance]] is just a big kick forward.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. A through ball needs timing and vision. A long ball just needs power. Both are useful — but at the right moment. What about a [[chip:lifting the ball over a player with a short flick of the foot]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'A chip goes over someone — like when the keeper is off his line. You lift the ball up and over him.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. Now watch me. I\'m playing a [[one-two:a quick combination where you pass and immediately receive the ball back]] with the defender. I pass — I move — I get it back. Simple and deadly. You try.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'She\'s trying! She passed and — yes! She got it back. She\'s [[playing:moving through]] through the lines now!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Coach — when do you play a [[square ball:a pass played sideways across the pitch]]? When is it the right choice?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'When you can\'t go forward and you can\'t go back. Play it square — keep possession, recycle, and try again. Never panic. Play simple.',
    },
  ],

  matchingExercise: [
    { word: 'THROUGH BALL', definition: 'A pass into the space behind defenders for a striker to run onto' },
    { word: 'LONG BALL', definition: 'A high, long pass played forward over a large distance' },
    { word: 'SHORT PASS', definition: 'A quick, ground-level pass to a nearby teammate' },
    { word: 'CROSS', definition: 'A pass delivered from wide into the penalty area' },
    { word: 'LAY-OFF', definition: 'A short, simple pass back or sideways to a supporting teammate' },
    { word: 'CHIP', definition: 'Lifting the ball over a player with a short flick of the foot' },
    { word: 'SWITCH', definition: 'A long diagonal pass to the other side of the pitch' },
    { word: 'SQUARE BALL', definition: 'A pass played sideways at a right angle to the direction of play' },
  ],

  fillBlankExercise: [
    { before: 'She\'s', answer: 'crossing', after: 'from the right — the striker needs to get on the end of it!' },
    { before: 'He', answer: 'laid it off', after: 'to the midfielder with one touch — simple and smart.' },
    { before: 'They\'re', answer: 'switching', after: 'the play — the right side is free!' },
    { before: 'The striker is running onto the', answer: 'through ball', after: '— nobody can catch her.' },
    { before: 'She', answer: 'chipped', after: 'it over the goalkeeper and scored a beautiful goal.' },
    { before: 'Play it', answer: 'simple', after: '— don\'t force it, we have players free.' },
    { before: 'He played a', answer: 'one-two', after: 'with the winger and got into the box.' },
    { before: 'Play it', answer: 'square', after: '— your teammate is completely free on the right.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is Coach Diallo teaching in this lesson?',
      options: ['How to tackle defenders', 'Types of pass and when to use them', 'How to score a goal'],
      correctIndex: 1,
    },
    {
      question: 'What is the difference between a through ball and a long ball?',
      options: [
        'A through ball goes into space behind defenders; a long ball is just kicked far forward',
        'A through ball is short; a long ball goes over the goalkeeper',
        'They are the same pass with different names',
      ],
      correctIndex: 0,
    },
    {
      question: 'Why does Coach Diallo tell the midfielder to switch the play?',
      options: ['Because the goalkeeper is off his line', 'Because the right side is packed and the left winger has space', 'Because the striker is free in the box'],
      correctIndex: 1,
    },
    {
      question: 'What is a one-two?',
      options: [
        'A pass played backward to the goalkeeper',
        'A quick combination where you pass and immediately receive it back',
        'A long ball over the defenders',
      ],
      correctIndex: 1,
    },
    {
      question: 'When should you play a square ball?',
      options: [
        'When you can\'t go forward and can\'t go back',
        'When the goalkeeper is off his line',
        'When you need to score a goal',
      ],
      correctIndex: 0,
    },
    {
      question: 'What does Sofia say makes a through ball different?',
      options: ['It needs power', 'It needs timing and vision', 'It goes over the goalkeeper'],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses the present continuous correctly?',
      options: [
        'She lays it off to the midfielder now.',
        'She\'s laying it off to the midfielder.',
        'She lay it off to the midfielder.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does Coach Diallo say about playing simple?',
      options: ['It is a sign of weakness', 'Never play simple — always be brave', 'When you can\'t go forward, play simple — keep possession and try again'],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the present continuous. Choose the correct form.',
    items: [
      {
        sentence: 'Look — the midfielder _____ (switch) the play to the left wing right now.',
        options: ['switched', 'is switching', 'switches'],
        correctIndex: 1,
        explanation: '"Is switching" is correct. We use IS + verb-ing (present continuous) for actions happening right now. "Switches" is present simple (for habits). "Switched" is past tense.',
      },
      {
        sentence: 'The winger _____ (cross) from the byline — someone get in the box!',
        options: ['crosses', 'crossed', 'is crossing'],
        correctIndex: 2,
        explanation: '"Is crossing" is correct. This is a live, right-now action — so present continuous (IS + verb-ing) is needed. "Crosses" describes a habit and "crossed" is past tense.',
      },
      {
        sentence: 'They _____ (play) short passes — they\'re keeping the ball beautifully.',
        options: ['are playing', 'played', 'play'],
        correctIndex: 0,
        explanation: '"Are playing" is correct. The subject is plural (they) so we use ARE + verb-ing. This action is in progress right now — not a habit, not past.',
      },
      {
        sentence: 'He _____ (chip) it over the goalkeeper — is it going in?!',
        options: ['is chipping', 'chips', 'chipped'],
        correctIndex: 0,
        explanation: '"Is chipping" is correct. The action is happening at this exact moment — IS + verb-ing. "Chips" is present simple (habit) and "chipped" is past tense.',
      },
      {
        sentence: 'She _____ (not / play) a through ball — she\'s keeping it short.',
        options: ['doesn\'t playing', 'isn\'t playing', 'aren\'t playing'],
        correctIndex: 1,
        explanation: '"Isn\'t playing" is correct. Negative present continuous with a singular subject uses ISN\'T + verb-ing. "Doesn\'t playing" is not grammatically correct. "Aren\'t" is for plural subjects.',
      },
      {
        sentence: 'He _____ (lay) it off to the midfielder — one touch, simple.',
        options: ['laid', 'is laying', 'lays'],
        correctIndex: 1,
        explanation: '"Is laying" is correct. This is a live action being described in the moment. Present continuous (IS + verb-ing) is required. "Laid" is past tense. "Lays" is present simple.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Your coach shouts an instruction during training. Choose the best action — A, B, or C.',
      items: [
        {
          customerLine: 'Coach shouts: "Simple! Play it simple!"',
          options: [
            'You play a risky through ball over the top.',
            'You pass to the nearest free teammate safely.',
            'You try to dribble past three defenders.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Play it simple" means take the safest, easiest pass. Pass to the nearest free player. Playing risky through balls (A) or dribbling (C) is the opposite of simple — you risk losing the ball.',
        },
        {
          customerLine: 'Coach shouts: "Switch! Switch the play!"',
          options: [
            'You play a short pass to the player next to you.',
            'You shoot at goal.',
            'You play a long diagonal ball to the other side of the pitch.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. "Switch the play" means change the direction of attack by playing a long pass to the other side. The other flank is free. A short pass (A) does not switch anything. Shooting (B) is not a passing option.',
        },
        {
          customerLine: 'Coach shouts: "One-two! One-two!" as you receive the ball near the box.',
          options: [
            'You pass the ball backward to the goalkeeper.',
            'You pass to a teammate and immediately run to receive it back.',
            'You hold the ball and wait for support.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A one-two means pass and immediately move to receive it back. The combination is quick — pass, move, receive. Passing backward (A) or holding it (C) misses the point of the one-two.',
        },
        {
          customerLine: 'Coach shouts: "Over the top!" as you have the ball at your feet near halfway.',
          options: [
            'You play a short square ball.',
            'You chip a ball over the defensive line for the striker in behind.',
            'You lay the ball off to the midfielder behind you.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Over the top" means the striker is making a run behind the defence and you need to play the ball over the defensive line for them to run onto. A square ball (A) or lay-off (C) does not exploit the run.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this coaching session transcript. Find them as a group.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Watch Sofia — what is she doing right now?' },
        { speaker: 'Ronaldo', text: 'She lay off the ball to the midfielder — simple pass.' },
        { speaker: 'Coach Diallo', text: 'Good. And the winger — what is she doing?' },
        { speaker: 'Sofia', text: 'She cross from the right! She\'s delivering the ball into the box.' },
        { speaker: 'Ronaldo', text: 'The striker is run onto the through ball — he\'s through on goal!' },
        { speaker: 'Coach Diallo', text: 'Brilliant vision. He plays it through the lines perfectly.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'She lay off the ball',
          correction: 'She\'s laying off the ball',
          explanation: 'The question asks what she is doing RIGHT NOW — so we need present continuous: SHE\'S + verb-ing. "Lay off" is past tense. The correct form is "She\'s laying off."',
        },
        {
          lineIndex: 3,
          incorrectText: 'She cross from the right',
          correction: 'She\'s crossing from the right',
          explanation: 'Present continuous is needed for a live, in-progress action. "Cross" with no auxiliary verb is incorrect. The correct form is "She\'s crossing" (IS + verb-ing).',
        },
        {
          lineIndex: 4,
          incorrectText: 'The striker is run onto',
          correction: 'The striker is running onto',
          explanation: 'Present continuous requires IS/ARE + verb-ING. "Is run" is missing the -ing ending. The correct form is "The striker is running onto."',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using present continuous and passing vocabulary from this lesson.',
      items: [
        {
          customerLine: 'Ronaldo: Coach — when should I play a through ball?',
          salespersonStart: 'Coach Diallo: Play a through ball when your striker is making a run behind the defence.',
          suggestedCompletion: 'Watch the striker\'s movement — if they are running into space, play the ball into that space ahead of them. Time the pass so they can run onto it at full speed without stopping. The best through balls are not powerful — they are perfectly timed.',
        },
        {
          customerLine: 'Sofia: Why is switching the play so effective?',
          salespersonStart: 'Coach Diallo: Because the other side of the pitch is almost always free.',
          suggestedCompletion: 'When everyone is pressing on the right side, the left side has space. A quick switch catches the opposition moving the wrong way. The team receiving the switch has time and space to build an attack. It changes the whole shape of the game in one pass.',
        },
        {
          customerLine: 'Sofia: What is a one-two and why does it work?',
          salespersonStart: 'Coach Diallo: A one-two works because it beats a defender with two touches.',
          suggestedCompletion: 'You pass to a teammate, the defender watches the ball, and you run past them into space. Your teammate passes it straight back and now you are behind the defender. Two touches, one defender beaten. It is simple, quick, and very hard to stop if both players read the situation.',
        },
        {
          customerLine: 'Ronaldo: When should I NOT play a long ball?',
          salespersonStart: 'Coach Diallo: Don\'t play a long ball when you have better options nearby.',
          suggestedCompletion: 'If there are teammates free around you, play it short and keep possession. A long ball is a risk — the other team might win it. Use the long ball when your striker has space in behind, when you need to switch the play quickly, or when there is no short pass available. If in doubt, play it simple.',
        },
      ],
    },
  },
};

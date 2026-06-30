import { Lesson } from '@/types/lesson';

export const defendingAsAUnit: Lesson = {
  slug: 'defending-as-a-unit',
  title: 'Defending as a Unit',
  subtitle: 'Defensive line, compact shape, zonal vs man marking',
  level: 'B1-B2',
  description: 'Learn the key vocabulary for organised defending — how teams defend together, how they set up their defensive shape, and the difference between zonal marking and man marking.',
  heroImage: '/images/defending-as-a-unit-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Should / must / have to — giving tactical instructions',
    description: 'We use "should" for advice or recommendation, "must" for strong obligation or rule, and "have to" for something that is necessary because of the situation. In football, coaches use all three to give different levels of instruction.',
    positivePattern: 'Subject + should/must/have to + base verb',
    positiveExample: '"The defence should stay compact." (advice) / "You must hold the line." (strong rule) / "We have to defend deep — they are too fast." (necessity)',
    negativePattern: 'Subject + should not/must not/do not have to + base verb',
    negativeExample: '"The defence should not push up too high." / "You must not leave space behind." / "You do not have to man-mark — just stay compact."',
    positiveExamples: [
      { sentence: 'The defenders should communicate with each other — they need to know who is marking who.', note: '(should = advice/recommendation)' },
      { sentence: 'You must not leave space behind the defensive line when you press.', note: '(must not = strong prohibition)' },
      { sentence: 'We have to defend deeper today — their striker is too fast for our back line.', note: '(have to = necessary because of the situation)' },
      { sentence: 'The full-backs should tuck in when the team does not have the ball.', note: '(should = tactical recommendation)' },
    ],
    negativeExamples: [
      { sentence: 'We should not man-mark their playmaker — we will lose our shape if we follow him everywhere.', note: '(should not = not recommended)' },
      { sentence: 'You do not have to press high today — we can sit in a mid block and be solid.', note: '(do not have to = not necessary — it is a choice)' },
    ],
  },

  vocabulary: [
    {
      word: 'DEFENSIVE LINE',
      partOfSpeech: 'noun',
      definition: 'The horizontal line of defenders — usually the four defenders in a back four. How high or deep this line sits is a key tactical decision.',
      example: 'They kept a very high defensive line — leaving the opposition strikers in an offside position.',
      imageSlug: '/images/defensive-line.png',
    },
    {
      word: 'COMPACT',
      partOfSpeech: 'adjective',
      definition: 'When the team stays close together — with small spaces between players. A compact team is hard to play through.',
      example: 'They were incredibly compact — there was no space between the midfield and defence.',
      imageSlug: '/images/compact.png',
    },
    {
      word: 'ZONAL MARKING',
      partOfSpeech: 'noun',
      definition: 'A system where defenders are responsible for an area of the pitch — not a specific player. They mark whoever enters their zone.',
      example: 'They use zonal marking at set pieces — each player defends a specific area of the six-yard box.',
      imageSlug: '/images/zonal-marking.png',
    },
    {
      word: 'MAN MARKING',
      partOfSpeech: 'noun',
      definition: 'A system where each defender is responsible for following a specific opponent — wherever they go.',
      example: 'The manager asked the midfielder to man-mark their playmaker — follow him everywhere on the pitch.',
      imageSlug: '/images/man-marking.png',
    },
    {
      word: 'SHAPE',
      partOfSpeech: 'noun',
      definition: 'The organised position and structure of the defending team — staying in the right positions relative to each other.',
      example: 'We must keep our shape — if one player pushes forward, it creates a gap for the opposition to exploit.',
      imageSlug: '/images/shape.png',
    },
    {
      word: 'CLEARANCE',
      partOfSpeech: 'noun',
      definition: 'When a defender kicks the ball away from danger — out of their own penalty area.',
      example: 'The centre-back made a vital clearance on the goal line — the ball was going in until she got her foot to it.',
      imageSlug: '/images/clearance.png',
    },
    {
      word: 'COVER',
      partOfSpeech: 'noun / verb',
      definition: 'When one defender positions themselves behind or beside a teammate to support them if they are beaten.',
      example: 'The left-back must cover if the centre-back steps out to press — never leave space behind without cover.',
      imageSlug: '/images/cover.png',
    },
    {
      word: 'OFFSIDE TRAP',
      partOfSpeech: 'noun',
      definition: 'When the defensive line moves forward at the same moment to leave opposition attackers in an offside position.',
      example: 'They played the offside trap — all four defenders stepped forward together and the striker was caught offside.',
      imageSlug: '/images/offside-trap.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'HOLD YOUR SHAPE',
      definition: 'To stay in your organised defensive position — not breaking out of structure.',
      example: 'Hold your shape! If we lose our structure, they will find gaps and score.',
      imageSlug: '/images/hold-your-shape.png',
    },
    {
      phrase: 'PUSH UP / STEP UP',
      definition: 'To move the defensive line higher — towards the opposition — to close the space or play the offside trap.',
      example: 'Push up! Push up! — the manager shouts as the team moves the defensive line forward together.',
      imageSlug: '/images/push-up-step-up.png',
    },
    {
      phrase: 'TRACK THE RUN',
      definition: 'To follow an opponent\'s movement — staying close to them as they run into space.',
      example: 'The full-back must track the run of the winger — she should not let her get in behind.',
      imageSlug: '/images/track-the-run.png',
    },
    {
      phrase: 'STAY TIGHT',
      definition: 'To remain close to the ball carrier or to an opponent — not allowing space or time.',
      example: 'Stay tight to your man — don\'t give him any space to turn.',
      imageSlug: '/images/stay-tight.png',
    },
    {
      phrase: 'SCREEN THE PASS',
      definition: 'To position your body between the ball carrier and the pass they want to make — blocking the passing lane.',
      example: 'The defensive midfielder should screen the pass to their striker — take away that option.',
      imageSlug: '/images/screen-the-pass.png',
    },
    {
      phrase: 'DOUBLE UP',
      definition: 'When two defenders press the same player — creating a 2v1 to win the ball.',
      example: 'Double up on the winger — she is too good to defend alone. Two against one.',
      imageSlug: '/images/double-up.png',
    },
  ],

  onThePitch: {
    instructions: 'These are instructions and phrases defenders and coaches use during matches.',
    items: [
      {
        cue: 'Hold the line!',
        meaning: 'Keep the defensive line in its current position — do not drop back.',
        usage: 'Shouted when the defensive line must stay high — often when the team is playing the offside trap. If one defender drops back, the offside trap fails and the striker is onside. Everyone must hold the line at exactly the same moment.',
        imageSlug: 'otp-hold-the-line',
      },
      {
        cue: 'Stay compact!',
        meaning: 'Keep the team close together — do not leave gaps between the lines.',
        usage: 'Instruction from the coach or from teammates when the team is defending. "Compact" = small spaces between players. If the team is compact, the opposition cannot play through them. If gaps appear, the opposition will exploit them.',
        imageSlug: 'otp-stay-compact',
      },
      {
        cue: 'Who has the runner?!',
        meaning: 'Which defender is responsible for following the player making a run into space?',
        usage: 'Shouted when an opposition player is running into dangerous space and it is not clear who should track them. In zonal marking, the player who enters your zone is your responsibility. In man marking, you must follow your assigned player wherever they run.',
        imageSlug: 'otp-who-has-the-runner',
      },
      {
        cue: 'Tuck in!',
        meaning: 'Move inward — come closer to the centre of the pitch to reduce space.',
        usage: 'Shouted at full-backs or wingers who are too wide when the team is defending. "Tuck in" means move towards the middle — protecting the space between the full-back and the centre-backs. Very common instruction in modern tactical football.',
        imageSlug: 'otp-tuck-in',
      },
      {
        cue: "They're not getting through us today.",
        meaning: 'We are defending so well that the opposition cannot find a way past our defensive shape.',
        usage: 'Said with confidence when the defending is compact and organised. "Getting through" = finding a way past the defence. It describes a team that is very hard to break down. Often said at half-time after a solid defensive performance.',
        imageSlug: 'otp-theyre-not-getting-through-us-today',
      },
      {
        cue: 'Step! Step!',
        meaning: 'Move the defensive line forward — push up together to close the space.',
        usage: 'Quick instruction to the back four to move forward as a unit — usually to play the offside trap or to close down the ball. All four defenders must step at exactly the same moment. If one is late, the trap fails.',
        imageSlug: 'otp-step-step',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Defending. One of the most misunderstood parts of football. Sofia — what does it mean to defend as a unit?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'It means all eleven players defend together — not just the four defenders. The team [[should:used for tactical advice]] stay [[compact:close together with small spaces between players]], with small spaces between the lines.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. And what is the difference between [[zonal marking:defending a zone — marking whoever enters your area]] and [[man marking:following a specific player wherever they go]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'In zonal marking, you defend an area — you mark whoever comes into your zone. In man marking, you follow one player everywhere. Both have advantages.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. Now — when should you use man marking and when should you use zonal?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'You should use man marking when the opposition has one very dangerous player you must stop. But you [[should not:advice against something]] lose your [[shape:the organised structure of the team]] to follow them — that creates gaps.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. And the [[defensive line:the horizontal line of defenders]] — how high must it be?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'It depends on the opponent. If they have fast strikers, we [[have to:necessary because of the situation]] defend deeper. If our defenders are fast and the opposition are slow, we can push the line higher.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Correct. The defensive line [[must:strong rule]] move as a unit — if one defender drops while the others hold, the offside trap fails and the striker is onside.',
    },
  ],

  matchingExercise: [
    { word: 'DEFENSIVE LINE', definition: 'The horizontal line of defenders — how high or deep they sit is a key decision' },
    { word: 'COMPACT', definition: 'The team stays close together — small spaces between players' },
    { word: 'ZONAL MARKING', definition: 'Defenders are responsible for an area — marking whoever enters their zone' },
    { word: 'MAN MARKING', definition: 'Each defender follows a specific opponent wherever they go' },
    { word: 'SHAPE', definition: 'The organised structure of the defending team' },
    { word: 'CLEARANCE', definition: 'Kicking the ball away from danger — out of the penalty area' },
    { word: 'COVER', definition: 'Positioning behind a teammate to support them if they are beaten' },
    { word: 'OFFSIDE TRAP', definition: 'The defensive line moves forward to leave attackers in an offside position' },
  ],

  fillBlankExercise: [
    { before: 'The defence', answer: 'should', after: 'stay compact — never leave gaps between midfield and defence.' },
    { before: 'You', answer: 'must not', after: 'leave space behind the defensive line when you press.' },
    { before: 'We', answer: 'have to', after: 'defend deeper today — their striker is too fast for our back line.' },
    { before: 'The left-back', answer: 'should track', after: 'the run of the winger — never let her get in behind.' },
    { before: 'In', answer: 'zonal marking', after: ', you defend an area — not a specific player.' },
    { before: 'All four defenders', answer: 'must step', after: 'forward at the same moment for the offside trap to work.' },
    { before: 'You', answer: 'do not have to', after: 'man-mark — just stay compact and close the spaces.' },
    { before: 'The midfielder', answer: 'should screen', after: 'the pass to their striker — take away that option.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"You must hold the defensive line." What does "must" suggest here?',
      options: [
        'It is a suggestion — the player can choose not to do it',
        'It is a strong rule — this is essential, not optional',
        'It is something necessary because of the situation today',
      ],
      correctIndex: 1,
    },
    {
      question: '"We should use zonal marking." What does "should" suggest?',
      options: [
        'It is a strong obligation — we have no choice',
        'It is advice or recommendation — this is the best option',
        'It is something necessary because their striker is fast',
      ],
      correctIndex: 1,
    },
    {
      question: '"We have to defend deep today." What does "have to" suggest?',
      options: [
        'It is the manager\'s general preference for all matches',
        'It is necessary because of the specific situation — their striker is fast',
        'It is a choice — we can also defend high if we want',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the difference between zonal and man marking?',
      options: [
        'Zonal = follow a player; man marking = defend an area',
        'Zonal = defend an area; man marking = follow a specific player',
        'They are the same system — just different names',
      ],
      correctIndex: 1,
    },
    {
      question: '"Stay compact!" What should the team do?',
      options: [
        'Push the defensive line higher',
        'Keep close together — small spaces between players',
        'Press the opposition more aggressively',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses "should not" correctly?',
      options: [
        'We should not defending man to man — it creates gaps.',
        'We should not man-mark — it creates gaps and we lose our shape.',
        'We should not to man-mark — it creates gaps.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is "cover" in defending?',
      options: [
        'Kicking the ball away from the goal area',
        'Positioning behind a teammate to support them if they are beaten',
        'Moving the defensive line forward to play the offside trap',
      ],
      correctIndex: 1,
    },
    {
      question: '"You do not have to man-mark — just stay compact." What does this mean?',
      options: [
        'Man marking is forbidden — you must not do it',
        'Man marking is not necessary — staying compact is enough',
        'Man marking is strongly recommended',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using should, must, or have to — and their negatives.',
    items: [
      {
        sentence: 'All four defenders _____ step forward at the same moment — if one is late, the trap fails.',
        options: ['should', 'must', 'have to'],
        correctIndex: 1,
        explanation: '"Must" is correct. This is a strong rule — not optional advice. If one defender is late, the entire offside trap fails. "Must" signals a non-negotiable requirement. "Should" would be softer advice. "Have to" is also possible here — the difference is subtle, but "must" emphasises the tactical rule most strongly.',
      },
      {
        sentence: 'We _____ defend deeper today — their striker is quicker than any of our defenders.',
        options: ['must not', 'do not have to', 'have to'],
        correctIndex: 2,
        explanation: '"Have to" is correct. This is necessary because of the specific situation — the opposition striker is too fast. "Have to" describes necessity caused by external circumstances (their striker is quick). "Must" is also possible but "have to" emphasises the situational necessity more naturally.',
      },
      {
        sentence: 'You _____ leave space behind the defensive line when you press — it is extremely dangerous.',
        options: ['should not', 'must not', 'do not have to'],
        correctIndex: 1,
        explanation: '"Must not" is correct. This is a strong prohibition — a non-negotiable tactical rule. Leaving space behind the line when pressing is one of the most dangerous things a defence can do. "Must not" = this is forbidden/not allowed. "Should not" would be softer advice. "Do not have to" means it is not necessary — completely wrong meaning here.',
      },
      {
        sentence: 'The full-backs _____ tuck in when the team defends — it is good advice but not a strict rule.',
        options: ['should', 'must', 'have to'],
        correctIndex: 0,
        explanation: '"Should" is correct. The sentence itself tells us it is "good advice but not a strict rule" — this matches "should" perfectly. "Should" = recommendation/advice. "Must" and "have to" both indicate strong obligation or necessity — too strong for something described as just "good advice."',
      },
      {
        sentence: 'The midfielder _____ man-mark their playmaker today — it is not necessary, the team shape is enough.',
        options: ['must not', 'should not', 'does not have to'],
        correctIndex: 2,
        explanation: '"Does not have to" is correct. The sentence says "it is not necessary" — this matches "do not have to" perfectly. "Do not have to" = not necessary, it is a choice. "Must not" = forbidden. "Should not" = not recommended. Here we are simply saying it is not required — the player can if they want but they do not need to.',
      },
      {
        sentence: 'In zonal marking, defenders _____ follow a player out of their zone — they _____ defend their area.',
        options: ['should not / should', 'must not / must', 'do not have to / have to'],
        correctIndex: 1,
        explanation: '"Must not / must" is correct. These are the rules of the zonal marking system — not optional advice. In zonal marking, you must not leave your zone (strong rule) and you must defend your assigned area (strong rule). "Should not / should" would suggest softer advice, but zonal marking has clear structural rules.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Choose the best tactical instruction using should, must, or have to.',
      items: [
        {
          customerLine: 'The opposition has one extremely dangerous striker who is destroying your defence. What do you tell the midfielder?',
          options: [
            '"You should maybe think about staying close to their striker sometimes."',
            '"You must man-mark their striker — follow her everywhere. Do not give her a single moment on the ball."',
            '"You do not have to worry about their striker — just defend your zone."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Must" is the right modal here — this is an urgent tactical necessity, not gentle advice. When one player is destroying the defence, the instruction must be strong and clear. "Should maybe" is too weak. "Do not have to worry" would make the situation worse.',
        },
        {
          customerLine: 'You are winning 2-0 in the 80th minute. The team is defending well. What is your instruction?',
          options: [
            '"We must press very high now — win the ball back immediately."',
            '"We should stay compact and hold our shape — no need to take risks. We do not have to press high."',
            '"Everyone must man-mark their players — follow them everywhere."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. When winning 2-0 with ten minutes left, the priority is not to concede. "Should stay compact" (advice) and "do not have to press high" (not necessary) are both right — this is about protecting the result, not winning the ball aggressively. Pressing high creates space and risks at 2-0 up.',
        },
        {
          customerLine: 'A defender asks: "Should I use zonal or man marking at corners?" What is the best answer?',
          options: [
            '"You must always use zonal — man marking is old-fashioned and always wrong."',
            '"You should use zonal if the system suits your team. But you must be clear about who covers each zone — communication is essential. You do not have to use man marking, but some teams mix both systems."',
            '"You do not have to worry about corners — just head the ball away."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses all three modals appropriately: "should use zonal" (recommendation), "must be clear" (strong necessity), "do not have to use man marking" (not obligatory). It also shows tactical understanding — some teams mix both systems, and communication is essential.',
        },
        {
          customerLine: 'The defensive line is too deep — giving the opposition too much space in midfield. What do you say?',
          options: [
            '"You do not have to push up — stay where you are."',
            '"You should think about maybe pushing up a little bit at some point."',
            '"You must push the line up — we are giving them too much space. Step together, now."',
          ],
          correctIndex: 2,
          explanation: 'C is correct. "Must push up" is the right instruction — this is an urgent tactical necessity, not gentle advice. The line being too deep is causing a specific problem right now, and the instruction needs to be clear and strong. The addition of "now" reinforces the urgency.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes with should, must, and have to in this tactical discussion. Find them.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Right — we should staying compact for the whole second half. No gaps between the lines.' },
        { speaker: 'Sofia', text: 'Should we use zonal or man marking at set pieces today?' },
        { speaker: 'Coach Diallo', text: 'We should use zonal — but everyone must to know their zone before we go out.' },
        { speaker: 'Ronaldo', text: 'And the defensive line — must we hold it high or drop deeper?' },
        { speaker: 'Coach Diallo', text: 'We have to drop deeper today — their striker is too quick. We must not give her space in behind.' },
        { speaker: 'Sofia', text: 'And the left-back — she should tracks the winger\'s runs and not let her get in behind.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'we should staying compact',
          correction: 'we should stay compact',
          explanation: 'After modal verbs (should, must, can, will, have to), we use the BASE FORM of the verb — never the -ing form or infinitive with "to." "Should staying" is wrong. Correct: "should stay." Rule: modal + base verb. "We should stay," "we must hold," "we have to defend."',
        },
        {
          lineIndex: 2,
          incorrectText: 'everyone must to know their zone',
          correction: 'everyone must know their zone',
          explanation: '"Must" is a modal verb — it is followed directly by the BASE FORM of the verb, WITHOUT "to." "Must to know" is wrong. Correct: "must know." Compare: "have to know" (have to = not a modal — it takes "to"). But "must" never takes "to." Modal verbs: can, should, must, will, would — all followed by base verb, no "to."',
        },
        {
          lineIndex: 5,
          incorrectText: 'she should tracks the winger\'s runs',
          correction: 'she should track the winger\'s runs',
          explanation: 'After "should," use the BASE FORM — never add -s or -ed. "Should tracks" is wrong. Correct: "should track." The -s is for present simple third person (she tracks = always). After a modal (should, must, can), the verb has no -s, no -ing, no "to" — just the base form.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the coach's explanation using should, must, or have to.",
      items: [
        {
          customerLine: 'Ronaldo: When should we use a high defensive line and when should we drop deep?',
          salespersonStart: 'Coach Diallo: We should use a high line when our defenders are quick and the opposition forwards are slow.',
          suggestedCompletion: 'In that situation, we can press high and play the offside trap effectively — we must step together as a unit or the trap fails. But when the opposition has very fast strikers, we have to defend deeper — we cannot risk the space in behind. The key question is: can our defenders outrun their forwards? If yes, we should push the line up. If no, we must drop back. There is no fixed answer — we have to decide based on the opponent.',
        },
        {
          customerLine: 'Sofia: What must a defender do when a teammate goes to press the ball?',
          salespersonStart: 'Coach Diallo: When one defender steps out to press, the others must provide cover immediately.',
          suggestedCompletion: 'The closest defender should move into the space that the pressing player has left — otherwise there is a gap for the opposition to exploit. The whole defensive line must communicate — they should tell each other when to step and when to hold. You must not all follow the ball and forget about the space behind. The hardest part of defending is not winning individual duels — it is maintaining the shape while one player goes to press. That requires trust, communication, and good tactical understanding.',
        },
        {
          customerLine: 'Ronaldo: Is it better to man-mark or use zonal marking?',
          salespersonStart: 'Coach Diallo: There is no single correct answer — it depends on your players and the opposition.',
          suggestedCompletion: 'If the opposition has one very dangerous player — a creative playmaker who controls everything — you should consider man-marking them. But you must make sure the player doing the man-marking is disciplined enough to follow them everywhere without losing their shape. If the opposition is strong at set pieces, you should use zonal marking — you must cover all the dangerous areas of the box. Some teams mix both: zonal for most situations, but man-marking for a specific threat. You have to know your players and trust their intelligence.',
        },
        {
          customerLine: 'Sofia: We are losing 1-0. Should we change our defensive shape or take risks?',
          salespersonStart: 'Coach Diallo: It depends on how much time is left and whether we are creating chances.',
          suggestedCompletion: 'If there are 30 minutes left and we are creating chances, we should stay patient and keep our shape — we must not panic and push everyone forward. If there are ten minutes left and we are not creating anything, we have to take risks — we must throw more players forward and accept that we might concede again. But we should always maintain a basic defensive structure — even when chasing the game, we must not leave ourselves completely exposed. You should never throw caution completely away — you might concede a second and the match is definitely over.',
        },
      ],
    },
  },
};

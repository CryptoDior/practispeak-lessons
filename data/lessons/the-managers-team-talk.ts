import { Lesson } from '@/types/lesson';

export const theManagersTeamTalk: Lesson = {
  slug: 'the-managers-team-talk',
  title: "The Manager's Team Talk",
  subtitle: 'Pre-match motivation, half-time adjustments, post-match review',
  level: 'B1-B2',
  description: "Learn the language of the manager's team talk — how coaches motivate players before a match, make tactical adjustments at half-time, and review the performance afterwards.",
  heroImage: '/images/the-managers-team-talk-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Imperatives and modal verbs — giving instructions and expressing urgency',
    description: 'Managers use imperatives (base verb with no subject) for direct, urgent instructions. They use modal verbs (must, should, can, will) to express different levels of obligation, advice, ability, and prediction. The combination of both is the language of the dressing room.',
    positivePattern: 'Imperative: base verb (+ object/complement) — no subject. Modal: subject + modal + base verb.',
    positiveExample: '"Press high from the first minute!" (imperative) / "We must win the second balls." (modal) / "You can be the best team on this pitch." (modal expressing possibility/encouragement)',
    negativePattern: 'Negative imperative: Do not / Don\'t + base verb. Negative modal: subject + modal + not + base verb.',
    negativeExample: '"Don\'t sit back and let them play!" / "We must not give away cheap fouls." / "You should not forget what we talked about in training."',
    positiveExamples: [
      { sentence: 'Push up! Hold the line! Stay compact! (imperative — direct instructions)', note: '(no subject — direct, urgent commands)' },
      { sentence: 'We must win every header in the first half — they are dangerous from crosses.', note: '(must = strong obligation)' },
      { sentence: 'You should be proud of that performance — you gave everything.', note: '(should = appropriate/deserved)' },
      { sentence: 'We can win this — we are better than them. Believe it.', note: '(can = expressing possibility, encouragement)' },
    ],
    negativeExamples: [
      { sentence: 'Don\'t drop your heads — this match is not over until the final whistle.', note: '(negative imperative: don\'t + base verb)' },
      { sentence: 'We must not sit deep and invite pressure — we have to press them.', note: '(must not = strong prohibition)' },
    ],
  },

  vocabulary: [
    {
      word: 'TEAM TALK',
      partOfSpeech: 'noun',
      definition: 'The speech a manager gives to players before a match, at half-time, or after the final whistle.',
      example: 'The manager\'s half-time team talk changed the match — the players came out for the second half with much more intensity.',
      imageSlug: '/images/team-talk.png',
    },
    {
      word: 'MOTIVATE',
      partOfSpeech: 'verb',
      definition: 'To inspire players to give their best effort — to make them want to work hard and win.',
      example: 'The best managers know how to motivate different players differently — some need encouragement, others need a challenge.',
      imageSlug: '/images/motivate.png',
    },
    {
      word: 'ADJUSTMENTS',
      partOfSpeech: 'noun',
      definition: 'Changes made to the tactics or formation — usually at half-time in response to what happened in the first half.',
      example: 'The manager made two tactical adjustments at half-time — bringing on a holding midfielder and moving to a 4-4-2.',
      imageSlug: '/images/adjustments.png',
    },
    {
      word: 'PRESS CONFERENCE',
      partOfSpeech: 'noun',
      definition: 'A meeting where a manager or players speak to journalists after a match — answering questions about the performance.',
      example: 'In the post-match press conference, the manager praised the team\'s effort and confirmed a key player\'s injury.',
      imageSlug: '/images/press-conference.png',
    },
    {
      word: 'MOMENTUM',
      partOfSpeech: 'noun',
      definition: 'The feeling of growing confidence and energy — when a team builds on good performances and starts to believe.',
      example: 'We have the momentum right now — three wins in a row and the squad is full of confidence. We must protect this.',
      imageSlug: '/images/the-managers-team-talk-momentum.png',
    },
    {
      word: 'MENTALITY',
      partOfSpeech: 'noun',
      definition: 'The attitude and mental approach of a player or team — how they think and respond to difficult situations.',
      example: 'I am proud of the mentality this team showed today — we were 2-0 down and we came back to win 3-2.',
      imageSlug: '/images/mentality.png',
    },
    {
      word: 'DRESSING ROOM',
      partOfSpeech: 'noun',
      definition: 'The room where players change before and after a match — and where the manager gives their team talk.',
      example: 'The dressing room was silent after the defeat — nobody spoke for ten minutes. Then the manager walked in.',
      imageSlug: '/images/the-managers-team-talk-dressing-room.png',
    },
    {
      word: 'BELIEF',
      partOfSpeech: 'noun',
      definition: 'Confidence and trust in yourself and the team — the conviction that you can win.',
      example: 'Belief is the most important thing in a dressing room — if the players believe they can win, they often do.',
      imageSlug: '/images/belief.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'STEP UP',
      definition: 'To perform better — to raise your level when it matters most.',
      example: 'We need everyone to step up today — this is the biggest match of the season.',
      imageSlug: '/images/step-up-teamtalk.png',
    },
    {
      phrase: 'GIVE EVERYTHING',
      definition: 'To put in maximum effort — to leave nothing held back.',
      example: 'Give everything you have for 90 minutes — leave it all on the pitch.',
      imageSlug: '/images/give-everything.png',
    },
    {
      phrase: 'DROP YOUR HEADS',
      definition: 'To lose confidence and motivation — to mentally give up after a setback.',
      example: 'Don\'t drop your heads after the goal — we can still win this. Believe.',
      imageSlug: '/images/drop-your-heads.png',
    },
    {
      phrase: 'DIG DEEP',
      definition: 'To find extra effort and determination when you are tired or losing.',
      example: 'When you are tired and it is 1-0 down with ten minutes left — dig deep. That is when champions are made.',
      imageSlug: '/images/dig-deep.png',
    },
    {
      phrase: 'COME OUT FIGHTING',
      definition: 'To start the second half (or restart after a setback) with much more energy and aggression.',
      example: 'We need to come out fighting in the second half — what happened in the first 45 minutes was not good enough.',
      imageSlug: '/images/come-out-fighting.png',
    },
    {
      phrase: 'MAKE IT COUNT',
      definition: 'To use your effort or opportunities effectively — to make sure the hard work leads to a result.',
      example: 'We are creating chances — now we have to make them count. One goal changes everything.',
      imageSlug: '/images/make-it-count.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases from the manager\'s team talk — pre-match, half-time, and post-match.',
    items: [
      {
        cue: 'Leave everything on that pitch.',
        meaning: 'Give 100% effort — hold nothing back for 90 minutes.',
        usage: 'One of the most powerful pre-match team talk phrases. "Leave everything on the pitch" means use every drop of energy, strength, and determination in the match. Nothing should be held back. When players "leave everything on the pitch," they finish the game completely exhausted — knowing they gave everything. Imperative form — direct and powerful.',
        imageSlug: 'otp-leave-everything-on-that-pitch',
      },
      {
        cue: 'This is not good enough — we must do better.',
        meaning: 'The performance has been poor — we need to raise our level immediately.',
        usage: 'Half-time or post-match team talk phrase. "Not good enough" = the performance did not meet the required standard. "Must do better" = strong obligation — the level has to improve. This is a direct challenge to the players — clear, honest, and unambiguous. Managers use this when they need to be honest about a poor performance without losing the team\'s belief.',
        imageSlug: 'otp-not-good-enough',
      },
      {
        cue: 'We can do this. I believe in every one of you.',
        meaning: 'I have full confidence in the team — I know we are capable of doing what is needed.',
        usage: 'A key motivational phrase — using "can" (ability/possibility) and "believe in" (confidence). This phrase rebuilds confidence. "Can do this" = it is possible. "Believe in every one of you" = individual recognition. Effective managers use this type of personal belief statement to make each player feel valued and capable. It is especially powerful at 2-0 down at half-time.',
        imageSlug: 'otp-we-can-do-this',
      },
      {
        cue: 'Don\'t let them dictate. Get on the ball.',
        meaning: 'Do not let the opposition control the match — be more aggressive and get possession.',
        usage: '"Don\'t let them dictate" = negative imperative — do not allow something. "Get on the ball" = imperative — be more involved, seek possession. "Dictate" means to control — in football, the team that dictates the game controls the tempo and the territory. This is a half-time instruction to be more assertive.',
        imageSlug: 'otp-dont-let-them-dictate',
      },
      {
        cue: "I'm proud of every one of you.",
        meaning: 'I am very pleased with the team\'s effort and performance.',
        usage: 'Post-match phrase — whether the team won, drew, or lost with great effort. "Proud" is a strong emotional word — it conveys deep respect for the players\' effort and character. Managers say this when the team showed great mentality — especially after a hard game, a comeback, or a brave performance despite a defeat.',
        imageSlug: 'otp-im-proud-of-every-one-of-you',
      },
      {
        cue: 'Second half — let\'s go.',
        meaning: 'It is time for the second half — go out and perform.',
        usage: 'The final line of the half-time team talk — energetic and direct. After all the tactical instructions and motivational words, the manager ends with a clear, short signal to start. "Let\'s go" = imperative, inclusive (the manager is going with them in spirit). Simple and powerful. Sometimes the best team talks end with the shortest lines.',
        imageSlug: 'otp-second-half-lets-go',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Right. Sit down. Listen. The first half was not good enough — not for this squad, not for what we are capable of. We [[must:strong obligation]] be more aggressive from the first minute of the second half.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Is this a [[team talk:the speech a manager gives to players — before a match, at half-time, or after the final whistle]]? It feels very real.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'It is very real. Now — don\'t interrupt. Listen. We [[should:advice/recommendation]] be winning this match. We have the better players, the better tactics, and the better [[mentality:the attitude and mental approach — how a team responds to difficult situations]]. But [[belief:confidence and trust in yourself and the team]] requires action. Not words.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'What [[adjustments:changes to tactics or formation — usually made at half-time]] are we making for the second half?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Two. First — [[press:push forward to win the ball back high up the pitch]] higher from the first minute. Don\'t sit back and invite pressure — [[step up:to raise your performance level, to become more intense]] and win the ball earlier. Second — [[give everything:to put in maximum effort — hold nothing back]] on every second ball. We [[must not:strong prohibition]] lose headers or loose balls in midfield.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And if they score first? Do we [[drop our heads:to lose confidence and motivation — mentally give up after a setback]]?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Never. Don\'t drop your heads — not for one second. [[Dig deep:to find extra effort and determination when things are difficult]] when it is hard. [[Come out fighting:to start the second half with much more energy and aggression]] every time. And [[make it count:to use your effort effectively — make sure the hard work leads to a result]] — we [[can:ability/possibility]] win this. I believe it. Do you?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Yes!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. We have the [[momentum:the feeling of growing confidence when a team is building on success]] from the last three games. Don\'t waste it. Leave everything on that pitch. Second half — let\'s go.',
    },
  ],

  matchingExercise: [
    { word: 'TEAM TALK', definition: 'The speech a manager gives before a match, at half-time, or after the final whistle' },
    { word: 'MOTIVATE', definition: 'To inspire players to give their best effort — to make them want to work hard and win' },
    { word: 'ADJUSTMENTS', definition: 'Changes to tactics or formation — usually made at half-time' },
    { word: 'MOMENTUM', definition: 'The feeling of growing confidence when a team builds on good performances' },
    { word: 'MENTALITY', definition: 'The attitude and mental approach — how a team responds to difficult situations' },
    { word: 'DRESSING ROOM', definition: 'The room where players change and the manager gives their team talk' },
    { word: 'BELIEF', definition: 'Confidence and trust in yourself and the team — the conviction that you can win' },
    { word: 'PRESS CONFERENCE', definition: 'A meeting where the manager speaks to journalists after a match' },
  ],

  fillBlankExercise: [
    { before: '', answer: 'Press', after: 'high from the first minute — do not let them settle on the ball.' },
    { before: 'We', answer: 'must', after: 'win the second balls — we cannot afford to lose midfield battles.' },
    { before: '', answer: "Don't", after: 'drop your heads — this match is not over until the final whistle.' },
    { before: 'You', answer: 'should', after: 'be proud of that performance — you gave everything for 90 minutes.' },
    { before: 'We', answer: 'can', after: 'win this — we are better than them. Believe it.' },
    { before: 'We', answer: 'must not', after: 'sit back and invite them to attack us — we have to press.' },
    { before: '', answer: 'Leave', after: 'everything on that pitch — hold nothing back.' },
    { before: 'The', answer: 'adjustments', after: 'at half-time changed the match — moving to a 4-4-2 gave us more control.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"Press high from the first minute!" What type of sentence is this?',
      options: [
        'A question',
        'An imperative — a direct instruction with no subject',
        'A modal sentence with "must"',
      ],
      correctIndex: 1,
    },
    {
      question: '"We must win every header." What does "must" express?',
      options: [
        'A polite request',
        'Strong obligation — this is essential, not optional',
        'A future prediction',
      ],
      correctIndex: 1,
    },
    {
      question: '"Don\'t drop your heads." What type of sentence is this?',
      options: [
        'A positive imperative',
        'A modal sentence with "should not"',
        'A negative imperative — don\'t + base verb',
      ],
      correctIndex: 2,
    },
    {
      question: '"We can win this." What does "can" express here?',
      options: [
        'Permission — the manager is allowing the team to win',
        'Ability and possibility — it is within the team\'s power to win',
        'Strong obligation — the team must win',
      ],
      correctIndex: 1,
    },
    {
      question: '"You should be proud of that performance." What does "should" express?',
      options: [
        'A tactical instruction for the next match',
        'Something appropriate and deserved — it is right to feel proud',
        'A strong rule — the players are not allowed to be unhappy',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which is a CORRECT negative imperative?',
      options: [
        '"Must not sit back and let them play."',
        '"Not sit back and let them play."',
        '"Don\'t sit back and let them play."',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "momentum" in football?',
      options: [
        'The tactical formation the team uses in the first half',
        'The feeling of growing confidence when a team builds on good performances',
        'The speed of a player running at maximum pace',
      ],
      correctIndex: 1,
    },
    {
      question: '"Dig deep!" — what does this mean?',
      options: [
        'Press the opposition deeper into their half',
        'Find extra effort and determination when you are tired or losing',
        'Play the ball deeper to the striker',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence with the correct imperative or modal verb form.',
    items: [
      {
        sentence: '_____ your heads — we are 2-0 down but this match is not over.',
        options: ["Don't drop", 'Not drop', 'Must not dropping'],
        correctIndex: 0,
        explanation: '"Don\'t drop" is correct — negative imperative. The negative imperative is formed with "Don\'t + base verb" (or "Do not + base verb" for more formal situations). "Don\'t drop your heads" = do not lose confidence. "Not drop" is wrong — you need "do not" or "don\'t" to form a negative imperative. "Must not dropping" is wrong — after "must not," use the base form "drop," not "-ing." In a negative imperative, only "Don\'t" is correct.',
      },
      {
        sentence: 'We _____ sit deep today — we have to press from the first minute.',
        options: ['must not', 'not must', 'do not must'],
        correctIndex: 0,
        explanation: '"Must not" is correct. Modal negative: subject + must not + base verb. "We must not sit deep" = this is strongly forbidden. "Not must" is wrong — the negative goes after the modal, not before it. "Do not must" is wrong — "must" is a modal verb, not a main verb, so it does not take "do not." Modal negatives: "must not / cannot / should not / will not" — the "not" always comes directly after the modal.',
      },
      {
        sentence: '_____ everything on that pitch — leave nothing for the walk home.',
        options: ['Leave', 'You leave', 'Must leave'],
        correctIndex: 0,
        explanation: '"Leave" is correct — positive imperative. The imperative has NO subject — just the base verb. "Leave everything" = correct imperative. "You leave" sounds like a statement, not a command — imperatives do not include the subject. "Must leave" is a modal sentence, not an imperative. It would need a subject: "You must leave everything." The imperative is more direct and powerful: "Leave everything."',
      },
      {
        sentence: 'We _____ this. I have seen better teams than them beaten by teams with more heart.',
        options: ['can win', 'wins', 'will winning'],
        correctIndex: 0,
        explanation: '"Can win" is correct. "We can win this" = it is possible, it is within our ability. The manager uses "can" to express encouragement and possibility — not certainty (that would be "will") and not obligation (that would be "must"). After a modal verb, always use the BASE FORM: "can win" not "can wins" or "can winning." "Wins" is third person singular present simple — only correct for "he/she/it wins." "Will winning" is wrong — after "will," use base form "win."',
      },
      {
        sentence: 'You _____ proud of that second half. You showed incredible character.',
        options: ['must be', 'should be', 'are'],
        correctIndex: 1,
        explanation: '"Should be" is correct — here "should" expresses what is appropriate and deserved, rather than obligation. "You should be proud" = it is right and fitting for you to feel proud. "Must be" is possible but sounds more like an obligation or logical deduction ("you must be tired after that"). "Should" for appropriateness is more natural in this emotional post-match context. "Are" is the simple present and misses the nuance — the manager is telling them they DESERVE to feel proud, not just stating a fact.',
      },
      {
        sentence: '_____ in a straight line through their press — use angles, play around them.',
        options: ["Don't play", 'Not playing', 'No play'],
        correctIndex: 0,
        explanation: '"Don\'t play" is correct — negative imperative. "Don\'t + base verb" is the standard negative imperative in spoken English. "Don\'t play in a straight line" = do not pass directly forward through the press — find a different angle. "Not playing" is wrong — not an imperative. "No play" is wrong — not standard English grammar for a negative imperative. Always use "Don\'t + base verb" for spoken negative instructions.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Choose the best response — using imperatives and modal verbs correctly.',
      items: [
        {
          customerLine: 'The team is losing 1-0 at half-time and the performance has been poor. What do you say?',
          options: [
            '"You must to press harder and don\'t be sitting back. We can do better than this."',
            '"Press harder! Don\'t sit back and invite them onto you. We can win this — but we must raise our intensity from the very first minute. Come out fighting."',
            '"You should pressing harder and must not to sit back. We must can do better."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Press harder!" = imperative. "Don\'t sit back" = negative imperative. "We can win this" = modal expressing possibility. "We must raise our intensity" = modal expressing obligation. All forms are correct and natural. A uses "must to press" — wrong, modals do not take "to." "Don\'t be sitting" is less natural than "don\'t sit." C uses "should pressing" (missing "to be") and "must not to sit back" (extra "to") and "must can" (two modals together — impossible). B is powerful, correct, and natural.',
        },
        {
          customerLine: 'The team has just won 3-0. What do you say in the dressing room?',
          options: [
            '"You must be proud. Don\'t forget this feeling — it should be your standard. Keep this momentum and we can achieve great things."',
            '"You should be proud. Don\'t forgot this feeling — it must be your standard. Keep this momentum and we must can achieve great things."',
            '"You can be proud. Don\'t to forget this feeling — it must being your standard."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "You must be proud" — here "must" = logical deduction (you must feel this). Or use "should be proud" (appropriate/deserved). "Don\'t forget" = correct negative imperative. "Should be your standard" = appropriate level. "Can achieve" = possible with this momentum. B uses "Don\'t forgot" (wrong — "forget" not "forgot" in imperative) and "must can achieve" (two modals together — impossible). C uses "Don\'t to forget" (wrong — no "to" after don\'t) and "must being" (wrong — after "must," use base form "be").',
        },
        {
          customerLine: 'A player wants to know how to motivate teammates who are mentally struggling during a tough match.',
          options: [
            '"Don\'t let them drop their heads — be the one who lifts them. Tell them we can do it. Remind them of what we practised. You must believe first, and then they will believe."',
            '"Must not let them to drop their heads — be lifting them up. Telling them we can doing it."',
            '"Don\'t letting them drop heads — you should to be the one who lifts. Tell them we must can do it."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "Don\'t let them drop their heads" = correct negative imperative. "Be the one who lifts them" = positive imperative. "We can do it" = modal expressing possibility. "You must believe first" = strong obligation. All modal and imperative forms are correct. B uses "must not let them to drop" (wrong — no "to" after "must not let them") and "be lifting" and "can doing" (wrong forms after modals). C uses "Don\'t letting" (wrong — "letting" after "don\'t") and "should to be" (wrong — no "to" after "should").',
        },
        {
          customerLine: 'What should a manager say to a player who is about to make their first-team debut?',
          options: [
            '"You must not be to nervous. You can do this — play your game and don\'t think about making mistakes. Just enjoy it."',
            '"Don\'t be nervous — you can do this. Play your game and don\'t think about mistakes. Enjoy every moment. You should be here — you\'ve earned it."',
            '"Must not be nervous. You should can do this. Playing your game and not thinking about mistakes."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Don\'t be nervous" = correct negative imperative ("be" is the base form of "be"). "You can do this" = modal expressing ability and encouragement. "Play your game" = positive imperative. "Don\'t think about mistakes" = negative imperative. "You should be here" = appropriate/deserved. "You\'ve earned it" = present perfect — correct. A uses "must not be to nervous" — "to" is extra and wrong. C uses "Must not be" (needs subject "you" or "don\'t") and "should can do this" (two modals together — impossible) and "Playing" and "not thinking" (wrong form for imperatives).',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes with imperatives and modal verbs in this team talk. Find them.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Right. Listen up. The first half was not good enough. We must do better.' },
        { speaker: 'Sofia', text: 'Should we to press higher in the second half? I think we dropped too deep.' },
        { speaker: 'Coach Diallo', text: 'Yes — press higher! Don\'t sit back. We must win the second balls — every one of them.' },
        { speaker: 'Ronaldo', text: 'And the wide areas — they are very dangerous on the right. We must not to leave their winger with space.' },
        { speaker: 'Coach Diallo', text: 'Correct. Track the runner. Don\'t let him turn. We can doing this — I believe it.' },
        { speaker: 'Sofia', text: 'We should be proud of our effort even if the first half was poor — we can still win this.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Should we to press higher in the second half?',
          correction: 'Should we press higher in the second half?',
          explanation: 'After modal verbs (should, must, can, will, would), we NEVER use "to" before the following verb. The pattern is: modal + BASE VERB (no "to"). "Should we press" = correct. "Should we to press" = wrong. This applies to all modals: "should go" not "should to go," "can do" not "can to do," "must win" not "must to win." The infinitive marker "to" is only used for infinitives after non-modal verbs: "I want to press," "I decided to press." After a modal, always just the base verb.',
        },
        {
          lineIndex: 3,
          incorrectText: 'We must not to leave their winger with space.',
          correction: 'We must not leave their winger with space.',
          explanation: 'Same error — "to" after a modal negative. "Must not" is a modal — it is followed directly by the BASE VERB, never "to." "Must not leave" = correct. "Must not to leave" = wrong. This "to" error is extremely common for learners who are used to phrases like "want to," "decide to," "need to" — but those are non-modal verbs. Modal verbs (must, should, can, will, may, might) NEVER take "to" before the following verb.',
        },
        {
          lineIndex: 4,
          incorrectText: 'We can doing this',
          correction: 'We can do this',
          explanation: 'After modal verbs (can, must, should, will, would, may, might), we use the BASE FORM of the verb — NEVER the -ing form or the past tense. "Can do" = correct. "Can doing" = wrong. The same rule applies: "must do" not "must doing," "should win" not "should winning," "will play" not "will playing." The pattern is always: modal + BASE VERB. Period. No exceptions.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the manager's team talk — use imperatives and modal verbs correctly.",
      items: [
        {
          customerLine: 'Ronaldo: Can you give us a pre-match team talk for a cup final?',
          salespersonStart: 'Coach Diallo: Right. Sit down. Nobody leaves this room until I have said what I need to say.',
          suggestedCompletion: 'We have worked for this. Every session, every drill, every ice bath, every sacrifice — it has all been for today. This is our moment. Don\'t let it slip away. We must be organised. We must be aggressive. We must believe — because I believe in every single one of you. Can we win this? Yes. Will it be easy? No. Should it be difficult? Yes — because everything worth winning is. But we can do this. You must give everything for 90 minutes — leave nothing behind. Come out fighting. Don\'t let them settle. Press. Win the ball. Make it count. This is ours. Let\'s go.',
        },
        {
          customerLine: 'Sofia: What should the half-time team talk say if the team is winning 2-0?',
          salespersonStart: 'Coach Diallo: Good first half — but don\'t relax. 2-0 can become 2-2 very quickly.',
          suggestedCompletion: 'Don\'t sit back and think this is done — it is not done until the final whistle. We must stay compact. We must keep pressing. Don\'t let them build momentum — every time they have the ball, we should press immediately. We can score a third goal — let\'s kill this game off. Don\'t take risks at the back — play simple, stay organised. You should feel confident but never comfortable. Two goals is a good lead. Three goals is a winning lead. Make it count in the second half. Stay sharp. Let\'s go.',
        },
        {
          customerLine: 'Ronaldo: What do you say after a painful defeat — when the team gave everything but still lost?',
          salespersonStart: 'Coach Diallo: Heads up. Look at me. I mean it — heads up.',
          suggestedCompletion: 'You must not be ashamed of that performance. We gave everything — you can see it in every face in this room. Sometimes you can do everything right and still lose. That is football. You should be proud of your effort and your mentality today. We must learn from what went wrong — but we must not question the effort or the character. Tomorrow, we go again. Don\'t carry this defeat too long. Use it. Let it make us stronger. We can come back from this — I have no doubt. Keep your heads up. Rest tonight. We work again on Monday.',
        },
        {
          customerLine: 'Sofia: How do you motivate a player who has lost their confidence?',
          salespersonStart: 'Coach Diallo: You cannot motivate someone with words alone — you must show them you believe in them through actions.',
          suggestedCompletion: 'Play them. Trust them. Don\'t take them off at the first mistake — let them work through it. You should tell them specifically what they are doing well, not just what to improve. Say: "You can do this — I have seen you do it a hundred times in training." Remind them of a time they were brilliant. Don\'t compare them to other players — they must find confidence in their own strengths. Give them a role they can succeed in. You should never make a struggling player feel worse — build them up. Believe in them publicly. They will start to believe in themselves.',
        },
      ],
    },
  },
};

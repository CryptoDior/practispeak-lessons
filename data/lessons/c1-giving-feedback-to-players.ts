import { Lesson } from '@/types/lesson';

export const c1GivingFeedbackToPlayers: Lesson = {
  slug: 'c1-giving-feedback-to-players',
  title: 'Giving Feedback to Players',
  subtitle: 'Unit 2 — Coaching & Leadership English',
  level: 'C1-C2',
  description: 'Feedback is one of the most powerful tools in a coach\'s kit. Done well, it improves performance and builds trust. Done badly, it damages confidence and relationships. Learn the language of effective player feedback.',
  heroImage: '/images/giving-feedback.png',

  warmUp: {
    questions: [
      'Have you ever received feedback that really helped you improve? What made it effective?',
      'What is the difference between criticism and constructive feedback?',
      'How might you give feedback differently to a young player versus an experienced professional?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Second conditional — giving alternative scenarios',
    description: 'When coaches give feedback, they often describe what should have happened instead. The second conditional ("If you did X, you would get Y") is perfect for this. It presents an alternative action without sounding too critical, because it talks about what COULD happen rather than attacking what DID happen. Examples: "If you held your position a little deeper, you would have more time on the ball." "If you trusted your first touch more, you\'d find more space." This structure is coaching language — it teaches while respecting the player\'s intelligence.',
    positiveExamples: [
      { sentence: 'If you checked your shoulder before receiving, you would see the run in behind.', note: 'second conditional — describing a better action and its positive consequence' },
      { sentence: 'If the striker dropped slightly deeper, it would create space for the run from midfield.', note: 'third-person second conditional — talking about a player\'s movement and its effect' },
      { sentence: 'You\'d have more time on the ball if you moved to receive at a slightly different angle.', note: 'inverted second conditional — the result comes first for emphasis' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'CONSTRUCTIVE',
      partOfSpeech: 'adjective',
      definition: 'Feedback that is helpful and focused on improvement — not just pointing out what went wrong, but showing how to do it better.',
      example: '"His feedback was always constructive — he never just told you what was wrong, he showed you a better way."',
      imageSlug: '/images/constructive.png',
    },
    {
      word: 'REINFORCE',
      partOfSpeech: 'verb',
      definition: 'To make something stronger by repeating or confirming it — to tell a player their good action was correct so they do it again.',
      example: '"I want to reinforce the pressing trigger you used in the first half — that\'s exactly what we practised."',
      imageSlug: '/images/reinforce.png',
    },
    {
      word: 'RECEPTIVE',
      partOfSpeech: 'adjective',
      definition: 'Open and willing to receive feedback — not defensive, not closed off. A receptive player listens and acts on coaching.',
      example: '"She\'s one of the most receptive players I\'ve worked with — she asks questions and applies the feedback immediately."',
      imageSlug: '/images/receptive.png',
    },
    {
      word: 'COACHABLE',
      partOfSpeech: 'adjective',
      definition: 'Able and willing to be coached — a player who can take feedback, adapt, and improve. It\'s one of the highest compliments in football.',
      example: '"He\'s incredibly coachable — he listens, he processes, and you see the change in the next training session."',
      imageSlug: '/images/coachable.png',
    },
    {
      word: 'TIMING',
      partOfSpeech: 'noun',
      definition: 'When you give feedback matters as much as what you say. Feedback immediately after a mistake during a game is different from feedback the next day in a video session.',
      example: '"The timing of the feedback was poor — he gave the player a detailed technical critique at half-time when he needed motivation."',
      imageSlug: '/images/timing-feedback.png',
    },
    {
      word: 'SPECIFICITY',
      partOfSpeech: 'noun',
      definition: 'Being precise and detailed — saying exactly what happened, not just that something was good or bad.',
      example: '"Good feedback requires specificity — not \'your positioning was bad\' but \'in the 34th minute, you were two metres too wide when they switched the play\'."',
      imageSlug: '/images/specificity.png',
    },
    {
      word: 'BLIND SPOT',
      partOfSpeech: 'noun',
      definition: 'A weakness or mistake a player doesn\'t know they have — something they can\'t see about their own game.',
      example: '"His blind spot is his first touch when pressed from behind — he hasn\'t realised how often he\'s losing the ball there."',
      imageSlug: '/images/blind-spot.png',
    },
    {
      word: 'SELF-AWARENESS',
      partOfSpeech: 'noun',
      definition: 'Understanding your own strengths and weaknesses — knowing what you do well and what you need to improve.',
      example: '"Her self-awareness is exceptional — she already knows her weakness is aerial duels, so she positions herself to avoid them."',
      imageSlug: '/images/self-awareness.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BUILD ON',
      definition: 'To use something good as a foundation and develop it further — to take a positive and make it even better.',
      example: '"That pressing trigger in the first half was exactly right — let\'s build on that in the second."',
      imageSlug: '/images/c1-giving-feedback-to-players-build-on.png',
    },
    {
      phrase: 'WORK ON',
      definition: 'To practise or develop something — to focus effort on improving a specific aspect of performance.',
      example: '"Your first touch under pressure is something we need to work on. I\'ve got a specific drill for you after training."',
      imageSlug: '/images/c1-giving-feedback-to-players-work-on.png',
    },
    {
      phrase: 'TAKE ON BOARD',
      definition: 'To accept and act on feedback or information — to genuinely absorb what you\'ve been told and apply it.',
      example: '"He took the feedback on board — by the third training session you could already see the improvement."',
      imageSlug: '/images/take-on-board.png',
    },
    {
      phrase: 'PINPOINT',
      definition: 'To identify exactly where or what the problem is — to be very specific and precise in locating an issue.',
      example: '"Let me pinpoint exactly where the movement breaks down — watch the video at the 62nd minute."',
      imageSlug: '/images/pinpoint.png',
    },
    {
      phrase: 'COME ON',
      definition: 'To improve or develop over time — to make noticeable progress.',
      example: '"His aerial ability has really come on since we worked on his timing in the box."',
      imageSlug: '/images/c1-giving-feedback-to-players-come-on.png',
    },
    {
      phrase: 'OPEN UP',
      definition: 'To create space or opportunity — used when describing how a player\'s movement or positioning creates a better option.',
      example: '"If you check your shoulder earlier, it opens up the pass in behind — you\'d see the runner earlier."',
      imageSlug: '/images/c1-giving-feedback-to-players-open-up.png',
    },
  ],

  onThePitch: {
    instructions: 'These are real feedback scenarios between coaches and players — learn the language for each situation.',
    items: [
      {
        cue: 'Giving positive reinforcement immediately',
        meaning: 'When a player does something exactly right, telling them immediately — on the touchline or at the next break — reinforces the behaviour so they repeat it.',
        usage: '"Marcus — that pressing trigger in the 23rd minute. Exactly right. That\'s what we\'ve been working on. Keep it up." Simple, specific, immediate. The player knows exactly what they did and why it was good.',
        imageSlug: 'otp-positive-reinforcement',
      },
      {
        cue: 'Correcting a mistake during training',
        meaning: 'In a training session, feedback is given immediately — stop the drill, show the correct action, restart. This is the fastest way to change behaviour.',
        usage: '"Stop. Everyone. Watch this — when you receive with your back to goal and you\'re pressed, your first touch should be across your body, away from the defender. Like this. Let\'s go again." Clear, calm, and with a physical demonstration.',
        imageSlug: 'otp-correct-training',
      },
      {
        cue: 'Using video for the second conditional',
        meaning: 'Video analysis allows coaches to pause at a moment and show the player exactly what they should have done differently. The second conditional is perfect here.',
        usage: '"Freeze it here. Look at your position. If you\'d held your line two metres deeper, you wouldn\'t be caught in behind. Watch — if you position yourself here instead, you can defend and you still cover the run." Video + second conditional = powerful coaching.',
        imageSlug: 'otp-video-feedback',
      },
      {
        cue: 'Addressing a blind spot',
        meaning: 'A blind spot is something the player can\'t see themselves. Coaches must introduce blind spot feedback carefully — with evidence and without damaging the player\'s confidence.',
        usage: '"I want to show you something — and I think it might surprise you. Watch your first touch when you\'re pressed from behind. It\'s happening 6 to 7 times per game. You lose the ball in your own half from it. You didn\'t know, and that\'s okay — now we fix it."',
        imageSlug: 'otp-blind-spot',
      },
      {
        cue: 'Giving feedback to a struggling player',
        meaning: 'When a player is going through a difficult period, feedback must be especially careful. The goal is to rebuild confidence while still addressing the technical issue.',
        usage: '"I know the last few games have been tough. But I want you to hear this — your defending has been excellent. Your problem right now is your first touch in the final third. That\'s a technical thing. We can fix it. You\'re not in bad form — you have one specific thing to work on."',
        imageSlug: 'otp-struggling-player',
      },
      {
        cue: 'Receiving feedback as a player',
        meaning: 'Players must also be able to respond to feedback professionally — not defensively, not dismissively. Good players ask clarifying questions and confirm they understood.',
        usage: '"Coach, can I ask — when you say check my shoulder earlier, do you mean before I receive or as I\'m about to receive?" Or: "I understand. I\'ll work on that in the next session. Can you show me exactly which movement you want?" Asking good questions shows you\'re receptive and coachable.',
        imageSlug: 'otp-receive-feedback',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Coach', speakerColor: 'blue', text: 'Jamie, can I have five minutes? I want to show you something from Tuesday\'s video.' },
    { speaker: 'Player', speakerColor: 'green', text: 'Of course. Is it about the second goal?' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Partly. But first — I want to reinforce what you did well. Your pressing in the first half was exactly what we\'ve worked on. You pinpointed the right moments. That was excellent.' },
    { speaker: 'Player', speakerColor: 'green', text: 'Thanks. I felt the press was working well.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Now — let\'s look at this moment. Freeze it here. Do you see your position?' },
    { speaker: 'Player', speakerColor: 'green', text: 'I\'m too narrow.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Exactly. If you\'d been two metres wider, you could have cut out that cross. That\'s something to work on — your positioning when the ball is in that area.' },
    { speaker: 'Player', speakerColor: 'green', text: 'Can you show me exactly where you want me to be? I want to make sure I understand before the next session.' },
  ],

  matchingExercise: [
    { word: 'Constructive', definition: 'Feedback that is helpful and focused on showing how to improve, not just criticising' },
    { word: 'Reinforce', definition: 'To tell a player their good action was correct so they repeat it in the future' },
    { word: 'Receptive', definition: 'Open and willing to listen to and act on feedback without being defensive' },
    { word: 'Coachable', definition: 'Able and willing to receive feedback and apply it to improve performance' },
    { word: 'Specificity', definition: 'Being precise and detailed about exactly what happened, where, and when' },
    { word: 'Blind spot', definition: 'A weakness a player doesn\'t know they have — something they can\'t see about their own game' },
    { word: 'Self-awareness', definition: 'Understanding your own strengths and weaknesses as a player' },
    { word: 'Timing', definition: 'When you give feedback — which affects how well it is received and understood' },
  ],

  fillBlankExercise: [
    { before: 'Your first touch is something we need to', answer: 'work on', after: '— I have a drill specifically for this.' },
    { before: 'That pressing trigger was exactly right — let\'s', answer: 'build on', after: 'that in the second half.' },
    { before: 'He', answer: 'took the feedback on board', after: '— you could see the improvement by the third session.' },
    { before: 'Let me', answer: 'pinpoint', after: 'exactly where the movement breaks down — watch the 62nd minute.' },
    { before: 'His aerial ability has really', answer: 'come on', after: 'since we started working on his box positioning.' },
    { before: 'If you check your shoulder earlier, it', answer: 'opens up', after: 'the pass in behind — you\'d see the runner much sooner.' },
    { before: 'Good feedback requires', answer: 'specificity', after: '— not just "your position was bad" but exactly where and when.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which sentence correctly uses the second conditional for coaching feedback?',
      options: [
        '"If you checked your shoulder before receiving, you would see the run in behind."',
        '"When you check your shoulder before receiving, you saw the run in behind."',
        '"Check your shoulder before receiving so you can see the run in behind."',
      ],
      correctIndex: 0,
    },
    {
      question: 'What is a "blind spot" in player development?',
      options: ['A weakness the player doesn\'t know they have — something they can\'t see about their own game', 'A part of the pitch where the player\'s vision is blocked by the defender', 'A tactical position the player hasn\'t been taught yet'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "He ___ the feedback on board and improved significantly by the next session."',
      options: ['took', 'built', 'worked'],
      correctIndex: 0,
    },
    {
      question: 'Why is "timing" important in giving player feedback?',
      options: ['When you give feedback affects how well the player can receive and act on it — e.g., during a game vs the next day', 'Players need exactly 24 hours between games to process any coaching information', 'Feedback should only ever be given in a one-to-one setting, never in a group'],
      correctIndex: 0,
    },
    {
      question: 'What does it mean when a player is described as "coachable"?',
      options: ['They are open to feedback, able to process it, and apply it to improve their performance', 'They are talented enough to play at a professional level', 'They always agree with the coach and never question any instruction'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each feedback sentence.',
    items: [
      {
        sentence: 'If you ___ your shoulder before receiving, you would see the run in behind much earlier.',
        options: ['checked', 'check', 'checking'],
        correctIndex: 0,
        explanation: 'Second conditional: "If + past simple, would + infinitive". "If you checked" is the correct form.',
      },
      {
        sentence: 'That pressing trigger was exactly right — let\'s ___ on that in the second half.',
        options: ['build', 'work', 'take'],
        correctIndex: 0,
        explanation: '"Build on" means to use something good as a foundation and develop it further.',
      },
      {
        sentence: 'I want to ___ exactly where the movement breaks down — watch the video at the 62nd minute.',
        options: ['pinpoint', 'open up', 'come on'],
        correctIndex: 0,
        explanation: '"Pinpoint" means to identify exactly where or what the problem is.',
      },
      {
        sentence: 'She\'s one of the most ___ players I\'ve worked with — she asks questions and applies the feedback immediately.',
        options: ['receptive', 'coachable', 'constructive'],
        correctIndex: 0,
        explanation: '"Receptive" means open and willing to receive feedback — ready to listen and respond.',
      },
      {
        sentence: 'His heading has really ___ on since we started working on his timing in the box.',
        options: ['come', 'built', 'worked'],
        correctIndex: 0,
        explanation: '"Come on" means to improve or develop noticeably over time.',
      },
      {
        sentence: 'Good feedback always requires ___ — not just "that was wrong" but exactly what, where, and when.',
        options: ['specificity', 'timing', 'reinforcement'],
        correctIndex: 0,
        explanation: 'Specificity means being precise — saying exactly what happened, not just a general judgement.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Choose the most effective coaching feedback response in each situation.',
      items: [
        {
          customerLine: 'A player has just made a positional error that led to a goal. At half-time, they come to you and say: "I know I was out of position for that goal. I\'m sorry."',
          options: [
            '"Own it — that\'s accountability. Now let\'s look at what happened. If you\'d held your line two metres deeper, you\'d have been in position to defend. We\'ll work on that. Reset now and go again in the second half."',
            '"Yes, it was a bad mistake. You need to do better."',
            '"Don\'t worry about it — these things happen. Just try harder in the second half."',
          ],
          correctIndex: 0,
          explanation: 'The best response acknowledges accountability, gives specific feedback using the second conditional, and re-motivates the player for the second half.',
        },
        {
          customerLine: 'You want to address a player\'s blind spot — they lose the ball when pressed from behind, but they don\'t know it.',
          options: [
            '"I want to show you something on video — I think it might surprise you. You\'re losing the ball when pressed from behind about 6 times a game. You haven\'t noticed it because it happens quickly. Now we know, we can fix it."',
            '"You keep losing the ball when you\'re pressed. You need to be more careful."',
            '"I\'ve noticed a problem with your play but I don\'t want to say anything that might knock your confidence."',
          ],
          correctIndex: 0,
          explanation: 'Addressing a blind spot requires evidence (video), a calm tone, and framing it as something fixable — not a personal failing.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the grammar mistake in this coaching feedback session.',
      dialogue: [
        { speaker: 'Coach', speakerColor: 'blue', text: 'Marcus, I want to give you some feedback from Tuesday\'s match.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'First — your pressing in the first half was excellent. I want to build on that.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'Now — look at this moment on the video. If you checked your shoulder here, you will see the runner on your left.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'It\'s a small adjustment but it opens up a lot more options for you.' },
        { speaker: 'Coach', speakerColor: 'blue', text: 'This is something we\'ll work on in training this week. I know you\'ll take it on board.' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'If you checked your shoulder here, you will see the runner',
          correction: 'If you checked your shoulder here, you would see the runner',
          explanation: 'Second conditional requires "would" not "will" in the result clause. "If + past simple, would + infinitive" is the correct structure.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the coach\'s feedback sentence in a natural way.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'If you held your position two metres deeper when they switch the play...',
          suggestedCompletion: 'you would be in the right position to defend the cross and you wouldn\'t be caught in behind.',
        },
        {
          customerLine: '',
          salespersonStart: 'Your first touch under pressure is something we need to work on, because...',
          suggestedCompletion: 'it\'s happening 6 to 7 times a game and costing us possession in our own half.',
        },
        {
          customerLine: '',
          salespersonStart: 'That pressing trigger in the first half was exactly right — I want to reinforce that because...',
          suggestedCompletion: 'that\'s what we\'ve been practising all week and it created the situation that led to our goal.',
        },
      ],
    },
  },
};

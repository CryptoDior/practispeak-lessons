import { Lesson } from '@/types/lesson';

export const theOffsideRule: Lesson = {
  slug: 'the-offside-rule',
  title: 'The Offside Rule',
  subtitle: 'Explaining offside in plain English — a classic ESL challenge',
  level: 'A2',
  description: 'Learn the vocabulary of offside — offside, onside, last defender, VAR, trap — and practise explaining a rule clearly in plain English. A classic and important topic for any football speaker.',
  heroImage: '/images/the-offside-rule-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Present Simple — explaining rules and how things work',
    description: 'We use the present simple to explain rules — things that are always true. When you explain the offside rule, you use present simple: "A player IS offside if..." "The referee RAISES the flag when..."',
    positivePattern: 'Subject + base verb (he/she/it + -s)',
    positiveExample: '"A player is offside if they are closer to the goal than the last defender."',
    negativePattern: 'Subject + DO/DOES NOT + base verb',
    negativeExample: '"The player does not touch the ball — so they are not offside."',
    positiveExamples: [
      { sentence: 'The assistant referee raises the flag when a player is offside.', note: '(always true — rule)' },
      { sentence: 'The last defender determines the offside line.', note: '(always true — rule)' },
      { sentence: 'VAR checks the decision if there is any doubt.', note: '(always true — procedure)' },
      { sentence: 'A player needs to be involved in play to be offside.', note: '(always true — rule)' },
    ],
    negativeExamples: [
      { sentence: 'A player does not need to touch the ball to be offside.', note: '(rule — not required)' },
      { sentence: 'The goalkeeper does not count as a "last defender" for offside.', note: '(exception)' },
    ],
  },

  vocabulary: [
    {
      word: 'OFFSIDE',
      partOfSpeech: 'adjective',
      definition: 'When an attacking player is closer to the opponent\'s goal than the last defender at the moment the ball is played.',
      example: 'He ran through on goal — but the flag is up. He was offside.',
      imageSlug: '/images/offside.png',
    },
    {
      word: 'ONSIDE',
      partOfSpeech: 'adjective',
      definition: 'In a legal position — not offside. The player is level with or behind the last defender.',
      example: 'She was perfectly onside — the assistant referee made a mistake.',
      imageSlug: '/images/onside.png',
    },
    {
      word: 'LAST DEFENDER',
      partOfSpeech: 'noun',
      definition: 'The defending outfield player closest to their own goal — the one who sets the offside line.',
      example: 'The last defender stepped forward and played three strikers offside.',
      imageSlug: '/images/last-defender.png',
    },
    {
      word: 'FLAG',
      partOfSpeech: 'noun',
      definition: 'The flag raised by the assistant referee on the sideline to signal offside.',
      example: 'The assistant referee\'s flag is up — the goal has been ruled out for offside.',
      imageSlug: '/images/flag.png',
    },
    {
      word: 'VAR',
      partOfSpeech: 'abbreviation',
      definition: 'Video Assistant Referee — a technology system that reviews decisions including offside calls.',
      example: 'VAR is checking the offside line — it could take a few minutes.',
      imageSlug: '/images/var.png',
    },
    {
      word: 'TRAP',
      partOfSpeech: 'noun / verb',
      definition: 'A defensive tactic where defenders step forward simultaneously to catch attackers in an offside position.',
      example: 'The defence set a trap — all four stepped forward at once and three strikers were caught offside.',
      imageSlug: '/images/offside-trap.png',
    },
    {
      word: 'LEVEL',
      partOfSpeech: 'adjective',
      definition: 'When an attacker is exactly even with the last defender — which means the player is onside, not offside.',
      example: 'She was level with the last defender — you cannot be offside if you are level.',
      imageSlug: '/images/level.png',
    },
    {
      word: 'LINE',
      partOfSpeech: 'noun',
      definition: 'The imaginary line drawn from the last defender — if any part of an attacker\'s body is ahead of this line when the ball is played, they are offside.',
      example: 'The attacker\'s shoulder was beyond the line — offside by centimetres.',
      imageSlug: '/images/offside-line.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'CAUGHT OFFSIDE',
      definition: 'To be in an offside position when the ball is played to you.',
      example: 'He was caught offside three times in the first half — poor movement.',
      imageSlug: '/images/caught-offside.png',
    },
    {
      phrase: 'PLAY HIM ONSIDE',
      definition: 'When a defender steps back or stays back, accidentally keeping an attacker onside.',
      example: 'The full-back dropped too deep and played him onside — now he\'s through on goal.',
      imageSlug: '/images/play-him-onside.png',
    },
    {
      phrase: 'SPRING THE TRAP',
      definition: 'To step forward as defenders to catch attackers offside — executing the offside trap.',
      example: 'The captain raised his hand — they sprang the trap and caught two strikers offside.',
      imageSlug: '/images/spring-the-trap.png',
    },
    {
      phrase: 'TIGHT CALL',
      definition: 'A very close offside decision — it is almost impossible to tell if the player is offside or onside.',
      example: 'That is an incredibly tight call — VAR is needed to determine it.',
      imageSlug: '/images/tight-call.png',
    },
    {
      phrase: 'LEVEL WITH THE DEFENDER',
      definition: 'When an attacker\'s body is at the exact same point as the last defender — meaning they are onside.',
      example: 'She timed her run perfectly and was level with the last defender — onside!',
      imageSlug: '/images/level-with-the-defender.png',
    },
    {
      phrase: 'FLAG IS UP',
      definition: 'The assistant referee has raised their flag to signal an offside decision.',
      example: 'The flag is up — the goal is disallowed. The striker was offside.',
      imageSlug: '/images/flag-is-up.png',
    },
  ],

  onThePitch: {
    instructions: 'These are shouts related to offside — from players, coaches, and fans. You\'ll hear them in every match.',
    items: [
      {
        cue: 'Offside!',
        meaning: 'I think a player is in an offside position — flag it, referee.',
        usage: 'Shouted by defenders, the goalkeeper, or the bench when they believe an attacking player was in an offside position when the ball was played. Referees don\'t always listen — but defenders always shout it.',
        imageSlug: 'otp-offside',
      },
      {
        cue: 'Hold the line!',
        meaning: 'Don\'t drop back — stay together on the defensive line to keep attackers offside.',
        usage: 'Shouted by the defensive captain or coach during the game to remind defenders to stay on the same line. If one defender drops too deep, they play the attacker onside.',
        imageSlug: 'otp-hold-the-line-offside',
      },
      {
        cue: 'Step up!',
        meaning: 'Move forward together to catch the attackers offside.',
        usage: 'Shouted to tell defenders to step forward at the right moment — when the ball is played — to execute the offside trap. Timing is everything. Step too early and the attacker is onside. Step at the right moment and they are caught.',
        imageSlug: 'otp-step-up-offside',
      },
      {
        cue: 'He was level!',
        meaning: 'The attacker was level with the last defender — so it should be onside.',
        usage: 'Shouted by attackers or their fans when they believe a player was incorrectly flagged for offside. If any part of the body that can legally score is level with the last defender, the player is onside.',
        imageSlug: 'otp-he-was-level',
      },
      {
        cue: 'Check VAR!',
        meaning: 'Ask the video referee to review the offside decision.',
        usage: 'Shouted by players, coaches, or fans when they believe the on-field offside decision was wrong and the technology should check it. VAR uses freeze-frame video to draw the exact offside line.',
        imageSlug: 'otp-check-var',
      },
      {
        cue: 'Play on!',
        meaning: 'The referee is waving play to continue — the player was not offside.',
        usage: 'The referee signals "play on" when they judge there is no offside — or when they choose to play the advantage. Attackers celebrate "play on!" as it means the goal or attack is good.',
        imageSlug: 'otp-play-on',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Sofia — can you explain the offside rule in simple English?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'A player is [[offside:when you are closer to the opponent\'s goal than the last defender]] if they are closer to the goal than the [[last defender:the outfield player closest to their own goal]] when the ball is played.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'But what does "level" mean? I always hear "he was [[level:at exactly the same point as the last defender — which means onside]]" when there\'s a debate.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Level means your body is at exactly the same point as the last defender. If you are level, you are [[onside:in a legal position — not offside]]. To be offside, you have to be AHEAD of that line.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And what counts? The whole body?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'No — only body parts that can score. Head, body, arms cannot be used to score — so arms don\'t count. If just your shoulder is ahead of the [[line:the imaginary line drawn from the last defender]], you are still offside.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'That is why teams use [[VAR:Video Assistant Referee — a technology that reviews decisions]] now — to draw the exact line on the video.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. Sometimes it is centimetres. Now — what is the offside [[trap:a defensive tactic where defenders step forward together to catch attackers offside]]?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'All the defenders step forward at the same moment when the ball is played — and if the strikers don\'t move, they are caught offside!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Correct. It is called "springing the trap." The [[flag:the flag raised by the assistant referee to signal offside]] goes up — and the attack is stopped. But it is risky — if one defender doesn\'t step up, the striker is [[onside:in a legal position]] and through on goal.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'So it is a team tactic — all four defenders have to move together at exactly the right moment.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. Offside is not luck — it is organisation. If your defenders think and move together, they can control the whole game without tackling once.',
    },
  ],

  matchingExercise: [
    { word: 'OFFSIDE', definition: 'Closer to the goal than the last defender when the ball is played' },
    { word: 'ONSIDE', definition: 'In a legal position — level with or behind the last defender' },
    { word: 'LAST DEFENDER', definition: 'The outfield player closest to their own goal — sets the offside line' },
    { word: 'FLAG', definition: 'Raised by the assistant referee to signal an offside decision' },
    { word: 'VAR', definition: 'Video technology that reviews decisions including offside calls' },
    { word: 'TRAP', definition: 'Defenders stepping forward together to catch attackers offside' },
    { word: 'LEVEL', definition: 'At exactly the same point as the last defender — meaning onside' },
    { word: 'LINE', definition: 'The imaginary line from the last defender that determines offside' },
  ],

  fillBlankExercise: [
    { before: 'The assistant referee\'s', answer: 'flag', after: 'is up — the goal is disallowed for offside.' },
    { before: 'She was perfectly', answer: 'onside', after: '— she was level with the last defender when the ball was played.' },
    { before: 'VAR is checking the', answer: 'offside line', after: '— it could be just centimetres.' },
    { before: 'The defenders', answer: 'sprang the trap', after: '— all four stepped forward and three strikers were caught offside.' },
    { before: 'He was', answer: 'caught offside', after: 'three times in the first half — he needs to time his runs better.' },
    { before: 'A player is offside if they are ahead of the', answer: 'last defender', after: 'when the ball is played.' },
    { before: 'That is a very', answer: 'tight call', after: '— VAR needs to check it carefully.' },
    { before: 'The defender dropped too deep and', answer: 'played him onside', after: '— now the striker is through on goal.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'When is a player offside?',
      options: [
        'When they are in the opponent\'s half of the pitch',
        'When they are closer to the goal than the last defender at the moment the ball is played',
        'When they are standing in front of the goalkeeper',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "level with the last defender" mean?',
      options: [
        'The attacker is behind the last defender — offside',
        'The attacker is at exactly the same point as the last defender — onside',
        'The attacker is ahead of the last defender — onside',
      ],
      correctIndex: 1,
    },
    {
      question: 'What body parts count for the offside rule?',
      options: [
        'Only the feet count',
        'The whole body — including arms',
        'Only body parts that can score — head and body, not arms',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is the offside trap?',
      options: [
        'When attackers try to trick the referee',
        'When defenders step forward together at the right moment to catch attackers offside',
        'When the goalkeeper moves off the line to reduce the angle',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which tense do we mainly use to explain rules like the offside rule?',
      options: ['Present continuous — "is happening"', 'Present simple — "is," "happens," "does"', 'Past simple — "was," "happened"'],
      correctIndex: 1,
    },
    {
      question: 'What is VAR in football?',
      options: [
        'A type of defensive formation',
        'The referee\'s assistant on the sideline',
        'Video Assistant Referee — a technology that reviews decisions',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "play on" mean?',
      options: [
        'The referee signals offside — stop the attack',
        'The referee says there is no offside — continue playing',
        'The player must pass the ball immediately',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence explains a rule correctly using present simple?',
      options: [
        'A player was offside when they are ahead of the last defender.',
        'A player is offside if they are closer to the goal than the last defender.',
        'A player is being offside when the ball is playing.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence about the offside rule using present simple. Choose the correct form.',
    items: [
      {
        sentence: 'A player _____ (be) offside if they are ahead of the last defender when the ball is played.',
        options: ['was', 'is', 'is being'],
        correctIndex: 1,
        explanation: '"Is" is correct. We use present simple to explain rules — things that are always true. "Is" is the correct form for he/she/it with the verb "to be." "Was" is past tense. "Is being" is present continuous.',
      },
      {
        sentence: 'The assistant referee _____ (raise) the flag when an offside decision is made.',
        options: ['is raising', 'raised', 'raises'],
        correctIndex: 2,
        explanation: '"Raises" is correct. Present simple (subject + verb-s for he/she/it) is used to describe rules and procedures that always happen the same way. "Is raising" is present continuous (in progress now). "Raised" is past.',
      },
      {
        sentence: 'Arms _____ (not count) for the offside rule — only scoring body parts matter.',
        options: ['are not counting', 'don\'t count', 'didn\'t count'],
        correctIndex: 1,
        explanation: '"Don\'t count" is correct. Negative present simple (do/does + not + base verb) is used for rules that are always true. "Are not counting" is present continuous. "Didn\'t count" is past tense.',
      },
      {
        sentence: 'VAR _____ (check) the offside line using freeze-frame technology.',
        options: ['is checking', 'checked', 'checks'],
        correctIndex: 2,
        explanation: '"Checks" is correct. Present simple describes a regular procedure — this is always how VAR works. "Is checking" (present continuous) would describe a specific live check happening now. "Checked" is past.',
      },
      {
        sentence: 'A player _____ (need) to be involved in play to be given offside.',
        options: ['needed', 'is needing', 'needs'],
        correctIndex: 2,
        explanation: '"Needs" is correct. This is a rule — always true — so we use present simple (verb + -s for he/she/it). "Needed" is past tense. "Is needing" is not natural English — "need" is a stative verb and is not normally used in continuous form.',
      },
      {
        sentence: 'The last defender _____ (set) the offside line when the ball is played.',
        options: ['set', 'is setting', 'sets'],
        correctIndex: 2,
        explanation: '"Sets" is correct. Present simple (verb + -s) for rules and things that are always true. This is how offside always works. "Set" is past tense (same spelling, but different context). "Is setting" is present continuous.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read each offside situation and decide — is the player offside, onside, or is it a tight call?',
      items: [
        {
          customerLine: 'The striker is standing 2 metres ahead of the last defender when the ball is played to them.',
          options: [
            'Onside — the striker is moving toward goal.',
            'Offside — the striker is clearly ahead of the last defender when the pass is made.',
            'It depends on which half of the pitch the striker is in.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The striker is 2 metres ahead of the last defender at the moment the ball is played — clearly offside. It does not matter if they are moving. It does not matter which half they are in. The position at the moment the ball is played decides everything.',
        },
        {
          customerLine: 'The attacker is level with the last defender when the ball is played.',
          options: [
            'Offside — the attacker must be behind the defender.',
            'Onside — if a player is level, they are NOT offside.',
            'Offside — any part of the body ahead of the line means offside.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Level with the last defender means onside. You need to be ahead — not level — to be offside. This is a common misunderstanding. If you are level, you are onside and the play continues.',
        },
        {
          customerLine: 'The striker is in an offside position but does not touch the ball — a teammate scores instead.',
          options: [
            'No offside — the offside player did not touch the ball.',
            'Offside — because the offside player is interfering with the play by distracting the goalkeeper.',
            'It depends on whether the VAR looks at it.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A player can be offside even without touching the ball — if they are "interfering with play," which includes distracting the goalkeeper or an opponent. Simply being in an offside position and affecting the game is enough to be flagged.',
        },
        {
          customerLine: 'A defender\'s arm is the last body part — the attacker\'s shoulder is ahead of the arm but level with the defender\'s body.',
          options: [
            'Onside — arms do not count for offside.',
            'Offside — the attacker\'s shoulder is ahead of some part of the defender.',
            'This needs VAR — it is impossible to judge.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. Arms do not count for the offside rule — they cannot be used to score. Only body parts that can legally score count. If the last body part from the defender that matters is their torso or leg, and the attacker is level with that, they are onside.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this explanation of the offside rule. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'A player is offside when they are closer to the goal than the last defender.' },
        { speaker: 'Ronaldo', text: 'And the rule always applies in both halves of the pitch — it is work the same everywhere.' },
        { speaker: 'Sofia', text: 'But you are only offside if you are involve in the play — just standing there is not enough.' },
        { speaker: 'Ronaldo', text: 'The assistant referee raise the flag when they see an offside position.' },
        { speaker: 'Sofia', text: 'And VAR checks the decision if the goal is ruled out — it draws a line on the video.' },
        { speaker: 'Ronaldo', text: 'The attacker was level with the defender, so she is onside — the goal must stand.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'it is work the same everywhere',
          correction: 'it works the same everywhere',
          explanation: '"It works" is correct present simple. "It is work" incorrectly combines "is" with "work." The verb "work" is the main verb here — use present simple: subject + verb-s for "it."',
        },
        {
          lineIndex: 2,
          incorrectText: 'you are involve in the play',
          correction: 'you are involved in the play',
          explanation: '"Involved" is an adjective here (past participle used as an adjective). "Are involve" is incorrect — the correct form is "are involved." The -d ending is needed.',
        },
        {
          lineIndex: 3,
          incorrectText: 'The assistant referee raise the flag',
          correction: 'The assistant referee raises the flag',
          explanation: 'Present simple requires verb + -s for he/she/it singular subjects. "The assistant referee" is singular — so "raise" needs an -s: "raises."',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using offside vocabulary and grammar from this lesson.',
      items: [
        {
          customerLine: 'Ronaldo: Can you explain the offside rule to someone who has never watched football?',
          salespersonStart: 'Coach Diallo: Imagine you are playing a game of tag.',
          suggestedCompletion: 'In offside, you cannot be ahead of the last defending player when your teammate passes the ball to you. You have to be level or behind that player. If you are ahead, the referee stops the play. It is designed to stop attackers standing next to the goalkeeper all game. You need to time your run perfectly — not too early.',
        },
        {
          customerLine: 'Sofia: Why do defenders use the offside trap if it is so risky?',
          salespersonStart: 'Coach Diallo: Because it is incredibly effective when it works.',
          suggestedCompletion: 'If defenders step forward together at the right moment, they catch multiple attackers offside with one move. It changes the whole game — the other team cannot make runs behind the defence. But it requires trust and communication. If one defender does not step up, a striker is through on goal. High risk, high reward.',
        },
        {
          customerLine: 'Ronaldo: What changes did VAR make to how offside decisions are made?',
          salespersonStart: 'Coach Diallo: VAR makes offside decisions much more accurate — but much slower.',
          suggestedCompletion: 'Before VAR, assistants judged offside by eye — and they made mistakes. Now VAR draws a line on the freeze-frame video to find the exact position. Goals that would have stood now get disallowed for a shoulder offside. It is more accurate — but fans have to wait minutes for the decision. Some people love it. Many people hate it.',
        },
        {
          customerLine: 'Sofia: What happens if the ball goes backward — can you be offside receiving a back pass?',
          salespersonStart: 'Coach Diallo: No — you cannot be offside from a back pass or a goal kick.',
          suggestedCompletion: 'You can only be offside if the ball goes forward — toward the opponent\'s goal. If a teammate passes backward to you, your position does not matter. The same applies to throw-ins, goal kicks, and corner kicks — you cannot be offside directly from those restarts. This is why back passes are always a safe option.',
        },
      ],
    },
  },
};

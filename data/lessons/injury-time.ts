import { Lesson } from '@/types/lesson';

export const injuryTime: Lesson = {
  slug: 'injury-time',
  title: 'Injury Time',
  subtitle: 'Added time, stoppage time, and last-minute drama — match clock vocabulary',
  level: 'A2',
  description: 'Learn the language of the final minutes — added time, stoppage time, injury time, fourth official, dying minutes — and practise describing last-minute drama using the simple past.',
  heroImage: '/images/injury-time-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Simple Past — describing last-minute drama',
    description: 'The most dramatic moments in football happen in injury time. We describe these events using simple past — because the match is finished. Key verbs: scored, held on, conceded, ran out, equalised, stole.',
    positivePattern: 'Subject + past verb',
    positiveExample: '"She scored in the 94th minute to steal a winner."',
    negativePattern: 'Subject + DID NOT + base verb',
    negativeExample: '"They didn\'t give up — they kept pushing until the final whistle."',
    positiveExamples: [
      { sentence: 'The board showed four minutes of added time.', note: '(regular: showed)' },
      { sentence: 'He equalised with the last kick of the game.', note: '(regular: equalised)' },
      { sentence: 'They held on despite enormous pressure.', note: '(irregular: hold → held)' },
      { sentence: 'The referee blew the final whistle after 96 minutes.', note: '(regular: blew)' },
    ],
    negativeExamples: [
      { sentence: 'They didn\'t concede — an incredible defensive performance.', note: '(did not + base verb)' },
      { sentence: 'The striker didn\'t score — the goalkeeper made a last-minute save.', note: '(did not + base verb)' },
    ],
  },

  vocabulary: [
    {
      word: 'ADDED TIME',
      partOfSpeech: 'noun',
      definition: 'The extra minutes added to the end of each half to compensate for stoppages during the match.',
      example: 'The board showed six minutes of added time — there had been three long injury stoppages.',
      imageSlug: '/images/injury-time-added-time.png',
    },
    {
      word: 'STOPPAGE TIME',
      partOfSpeech: 'noun',
      definition: 'Another word for added time — extra minutes added for interruptions like injuries, substitutions, and VAR.',
      example: 'Five minutes of stoppage time — anything can happen in five minutes.',
      imageSlug: '/images/injury-time-stoppage-time.png',
    },
    {
      word: 'INJURY TIME',
      partOfSpeech: 'noun',
      definition: 'The informal term for added time — named because the most common reason for stoppage is a player injury.',
      example: 'He scored in injury time — the whole stadium erupted.',
      imageSlug: '/images/injury-time-word.png',
    },
    {
      word: 'FOURTH OFFICIAL',
      partOfSpeech: 'noun',
      definition: 'The official on the touchline who manages substitutions and shows the added time board.',
      example: 'The fourth official raised the board — four minutes of added time.',
      imageSlug: '/images/fourth-official.png',
    },
    {
      word: 'DELAY',
      partOfSpeech: 'noun / verb',
      definition: 'Any stoppage that holds up play — an injury, a VAR check, a substitution — which adds to the total added time.',
      example: 'There were three long delays for injuries — that\'s why there was so much added time.',
      imageSlug: '/images/injury-time-delay.png',
    },
    {
      word: 'CONCUSSION',
      partOfSpeech: 'noun',
      definition: 'A head injury from a blow to the head — one of the most serious injuries in football and a reason for a long stoppage.',
      example: 'The player was concussed after a clash of heads — a long delay while she received treatment.',
      imageSlug: '/images/concussion.png',
    },
    {
      word: 'CARRY ON',
      partOfSpeech: 'verb',
      definition: 'To continue playing despite an injury or difficulty — staying on the pitch and pushing through.',
      example: 'He was fouled hard but he carried on — no substitution needed.',
      imageSlug: '/images/carry-on.png',
    },
    {
      word: 'BOARD',
      partOfSpeech: 'noun',
      definition: 'The electronic board raised by the fourth official to show the amount of added time.',
      example: 'Everyone looked at the fourth official — how many minutes was the board going to show?',
      imageSlug: '/images/added-time-board.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'IN ADDED TIME',
      definition: 'During the extra minutes at the end of a half.',
      example: 'She scored in added time — the relief was extraordinary.',
      imageSlug: '/images/in-added-time.png',
    },
    {
      phrase: 'IN THE DYING MINUTES',
      definition: 'In the very last moments of the match — when there is very little time left.',
      example: 'He scored in the dying minutes — one of the most dramatic goals of the season.',
      imageSlug: '/images/in-the-dying-minutes.png',
    },
    {
      phrase: 'AGAINST THE CLOCK',
      definition: 'Running out of time — trying to do something before the final whistle.',
      example: 'They were racing against the clock — attacking desperately for an equaliser.',
      imageSlug: '/images/against-the-clock.png',
    },
    {
      phrase: 'HOLD ON FOR THE WIN',
      definition: 'To defend under pressure and protect a lead until the very end of the match.',
      example: 'They held on for the win — barely, but the goal line held.',
      imageSlug: '/images/hold-on-for-the-win.png',
    },
    {
      phrase: 'FIND AN EQUALISER',
      definition: 'To score a goal when behind, making the score level.',
      example: 'They found an equaliser in the 93rd minute — the crowd went absolutely wild.',
      imageSlug: '/images/find-an-equaliser.png',
    },
    {
      phrase: 'STEAL A WINNER',
      definition: 'To score a late goal that wins the match — unexpectedly, against the run of play.',
      example: 'United stole a winner in the 96th minute — completely against the flow of the game.',
      imageSlug: '/images/steal-a-winner.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the shouts and phrases used in the final minutes — the most intense part of any football match.',
    items: [
      {
        cue: 'How long?!',
        meaning: 'How many minutes of added time are there?',
        usage: 'Shouted by players and fans at the fourth official when they want to know how much time is left. The fourth official raises the electronic board showing the number of added minutes.',
        imageSlug: 'otp-how-long',
      },
      {
        cue: 'Keep going!',
        meaning: 'Don\'t stop — keep pushing, keep trying.',
        usage: 'Shouted by the bench, captain, or fans to players who are tired in the final minutes. It is encouragement to maintain intensity when the body wants to stop. Keep going — the final whistle is close.',
        imageSlug: 'otp-keep-going',
      },
      {
        cue: 'Stay switched on!',
        meaning: 'Stay focused and alert — don\'t switch off mentally.',
        usage: 'Shouted when a winning team is close to the final whistle. Players can mentally relax when they think the game is won — and concede a late goal. "Stay switched on!" is a warning to maintain concentration.',
        imageSlug: 'otp-stay-switched-on',
      },
      {
        cue: 'One more!',
        meaning: 'We need one more goal — keep attacking.',
        usage: 'Shouted when the attacking team is close to scoring in the final minutes. One more goal means a win instead of a draw, or an equaliser. It is a call to maximum effort in the closing moments.',
        imageSlug: 'otp-one-more',
      },
      {
        cue: 'Don\'t give it away!',
        meaning: 'Don\'t make a mistake and concede — protect the ball and the lead.',
        usage: 'Shouted when a team is winning and has the ball in the final minutes. Every pass matters — giving the ball away at this point could mean conceding a late goal. Be careful, be safe.',
        imageSlug: 'otp-dont-give-it-away',
      },
      {
        cue: 'Time-wasting!',
        meaning: 'That player is deliberately taking too long — referee, deal with it.',
        usage: 'Shouted by fans and players when the opposing team is deliberately slowing play to protect a result. Taking extra time over goal kicks, throw-ins, or treatment can be punished by the referee with a yellow card.',
        imageSlug: 'otp-time-wasting',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Sofia — what happened in the last five minutes of the match last night?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'City were winning 1-0. Then the fourth official raised the [[board:the electronic board showing added time]] — five minutes of [[added time:extra minutes added for stoppages]]!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Five minutes! That\'s because there were two long [[delays:stoppages that hold up play]] — one for a [[concussion:a serious head injury]] and one for a VAR check.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'And United were racing [[against the clock:running out of time]]. What happened?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'They pushed forward — desperate for an equaliser. And in the 94th minute — in [[injury time:the informal term for added time]] — they [[found:find → found]] an [[equaliser:a goal that levels the score]]!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: '1-1! The crowd went wild. But City didn\'t stop — they pushed back immediately. And then — in the [[dying minutes:the very last moments of the match]] — City scored again!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'They [[stole:steal → stole]] a winner! 2-1 in the 97th minute. United scored in injury time — and then City [[stole:steal → stole]] it back! What is "[[stoppage time:another word for added time — extra minutes for interruptions]]"?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'It is another word for [[added time:extra minutes at the end of a half for stoppages]]. The same thing. "Stoppage time," "injury time," "added time" — all mean the same thing.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. And what about "[[carry on:to continue despite injury]]"? What does it mean when a player carries on?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'They are injured but they [[carried:carry → carried]] on playing — they didn\'t ask to come off. They pushed through the pain. Less delay, but also more risk.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. In injury time, every second matters. The team that [[held:hold → held]] on for the win, the team that [[found:find → found]] the equaliser — these moments define whole seasons. Never give up until the final whistle.',
    },
  ],

  matchingExercise: [
    { word: 'ADDED TIME', definition: 'Extra minutes at the end of a half to compensate for stoppages' },
    { word: 'STOPPAGE TIME', definition: 'Another word for added time — extra minutes for interruptions' },
    { word: 'INJURY TIME', definition: 'Informal term for added time — named after the most common stoppage reason' },
    { word: 'FOURTH OFFICIAL', definition: 'The official on the touchline who shows the added time board' },
    { word: 'DELAY', definition: 'Any stoppage that holds up play and adds to the total added time' },
    { word: 'CONCUSSION', definition: 'A serious head injury — a common reason for a long stoppage' },
    { word: 'CARRY ON', definition: 'To continue playing despite an injury — staying on the pitch' },
    { word: 'BOARD', definition: 'The electronic board raised to show the amount of added time' },
  ],

  fillBlankExercise: [
    { before: 'She scored', answer: 'in the dying minutes', after: '— the whole ground erupted with noise.' },
    { before: 'The fourth official raised the', answer: 'board', after: '— five minutes of added time.' },
    { before: 'United', answer: 'stole a winner', after: 'in the 96th minute — against the run of play.' },
    { before: 'They were racing', answer: 'against the clock', after: '— desperately trying to equalise.' },
    { before: 'There were three long', answer: 'delays', after: '— that\'s why there was so much stoppage time.' },
    { before: 'They', answer: 'held on for the win', after: '— barely, but they saw it out to the final whistle.' },
    { before: 'He', answer: 'found an equaliser', after: 'in the 93rd minute — an incredible moment.' },
    { before: 'The player had a', answer: 'concussion', after: 'after the clash of heads — a long stoppage for treatment.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is added time?',
      options: [
        'Extra time in a cup match after a draw',
        'Extra minutes added at the end of a half to compensate for stoppages',
        'The time it takes for a substitution to happen',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the difference between added time, stoppage time, and injury time?',
      options: [
        'They mean different things — added time is longer than injury time',
        'There is no difference — all three mean extra minutes added for stoppages',
        'Injury time is only added when a player is injured; the others are always added',
      ],
      correctIndex: 1,
    },
    {
      question: 'Who shows the added time board?',
      options: ['The assistant referee on the sideline', 'The fourth official on the touchline', 'The main referee on the pitch'],
      correctIndex: 1,
    },
    {
      question: 'What does "steal a winner" mean?',
      options: [
        'To score a goal that wins the match late on — unexpectedly, against the flow of play',
        'To take the ball from a defender near the end of the match',
        'To win the match by having more possession',
      ],
      correctIndex: 0,
    },
    {
      question: 'What does "stay switched on" mean in the dying minutes?',
      options: [
        'Turn on the stadium lights for extra time',
        'Stay focused and alert — don\'t mentally relax and concede a late goal',
        'Keep running — don\'t walk or slow down',
      ],
      correctIndex: 1,
    },
    {
      question: 'Why is time-wasting a controversial issue in football?',
      options: [
        'Because it makes the match more exciting',
        'Because it is deliberately slowing play to protect a result — other teams and fans see it as unfair',
        'Because it means the referee adds more time',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence about injury time is correct using simple past?',
      options: [
        'He scores the equaliser in injury time.',
        'He scored the equaliser in injury time.',
        'He is scoring the equaliser in injury time.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "carry on" mean when a player is injured?',
      options: [
        'To leave the pitch and receive treatment',
        'To continue playing despite the injury without substitution',
        'To carry the injured player off the pitch',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence about injury time drama using the simple past. Choose the correct form.',
    items: [
      {
        sentence: 'The fourth official _____ (raise) the board — six minutes of added time.',
        options: ['raises', 'raised', 'is raising'],
        correctIndex: 1,
        explanation: '"Raised" is correct. Simple past of "raise" (regular: raise + -d). The match is finished — we describe completed events in past tense. "Raises" is present simple. "Is raising" is present continuous.',
      },
      {
        sentence: 'She _____ (score) in the 94th minute to equalise — the crowd went wild.',
        options: ['scored', 'scores', 'was scoring'],
        correctIndex: 0,
        explanation: '"Scored" is correct. Regular simple past (score + -d). Completed action in a finished match. "Scores" is present simple. "Was scoring" is past continuous.',
      },
      {
        sentence: 'They _____ (hold) on brilliantly — an incredible defensive performance in injury time.',
        options: ['holded', 'held', 'holds'],
        correctIndex: 1,
        explanation: '"Held" is correct. "Hold" is an irregular verb: hold → held. "Holded" is not a word — you cannot add -ed to irregular verbs. "Holds" is present simple.',
      },
      {
        sentence: 'United _____ (steal) a winner in the 97th minute — against the run of play.',
        options: ['stealed', 'stole', 'stolen'],
        correctIndex: 1,
        explanation: '"Stole" is correct. "Steal" is an irregular verb: steal → stole. "Stealed" is not a word. "Stolen" is the past participle — used with perfect tenses, not simple past alone.',
      },
      {
        sentence: 'They _____ (not / give up) — they pushed forward until the final whistle.',
        options: ['didn\'t give up', 'don\'t give up', 'weren\'t giving up'],
        correctIndex: 0,
        explanation: '"Didn\'t give up" is correct. Negative simple past: DID NOT (didn\'t) + base verb (give up). "Don\'t give up" is present simple negative. "Weren\'t giving up" is past continuous negative.',
      },
      {
        sentence: 'The referee _____ (blow) the final whistle after 97 minutes.',
        options: ['blew', 'blowed', 'blown'],
        correctIndex: 0,
        explanation: '"Blew" is correct. "Blow" is an irregular verb: blow → blew. "Blowed" is not correct. "Blown" is the past participle — used with perfect tenses, not simple past alone.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Your team is in a high-pressure injury time situation. Choose the best action — A, B, or C.',
      items: [
        {
          customerLine: 'Your team is winning 1-0. The fourth official shows 5 minutes of added time. The opposition is pressing hard.',
          options: [
            'Attack — try to score a second goal and make the game safe.',
            'Stay organised defensively — hold your shape, win every header, and keep the ball when you can.',
            'Put all 10 outfield players behind the ball and defend as deep as possible.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The best approach is defensive organisation — not giving away possession recklessly, but also not sitting so deep that you invite endless pressure (C). Staying organised, winning the second balls, and making good decisions protects the lead. Attacking (A) is too risky when leading in the 90th minute.',
        },
        {
          customerLine: 'Your team is losing 0-1 with 3 minutes of added time to play. The coach shouts: "One more! Find an equaliser!"',
          options: [
            'Pass the ball carefully and keep possession.',
            'Get forward immediately — throw everyone up for corners and crosses.',
            'Play through the lines with patient build-up play.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. With 3 minutes left and a goal needed, the team must be direct and get into dangerous areas fast. Getting bodies forward for crosses and set pieces gives the best chance of finding an equaliser. Patient build-up (C) takes too long. Keeping possession (A) doesn\'t create a threat.',
        },
        {
          customerLine: 'The opponent has the ball and is clearly time-wasting — taking extra time over every goal kick.',
          options: [
            'Shout loudly at the referee to book them.',
            'Stay focused — the referee will deal with it. Use the extra time to organise and breathe.',
            'Try to kick the ball away from their goalkeeper.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Getting angry at time-wasting (A) wastes your own focus and energy. Interfering with the goalkeeper (C) could give away a foul. The best response is to stay calm and organised — and trust the referee and fourth official to manage time-wasting by adding extra time.',
        },
        {
          customerLine: 'A player in your team is injured in the 88th minute but wants to carry on. They are limping.',
          options: [
            'Let them carry on — they said they\'re fine.',
            'Substitute them immediately — a limping player cannot defend properly in injury time.',
            'Tell them to stand on the wing where they won\'t need to run.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A limping player in injury time is a liability defensively. The opposition will target them. The team still has substitutions available — use one. Option A is too risky. Moving them to the wing (C) wastes a player who cannot help defensively.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this injury time match report. Find them as a group.',
      dialogue: [
        { speaker: 'Reporter', text: 'The fourth official showed four minutes of added time.' },
        { speaker: 'Reporter', text: 'United was racing against the clock — desperate for an equaliser.' },
        { speaker: 'Reporter', text: 'The striker scored in the 93rd minute to levelled the score — 1-1!' },
        { speaker: 'Reporter', text: 'City didn\'t give up — they pushed forward and stole a winner in the 96th minute.' },
        { speaker: 'Reporter', text: 'The goalkeeper blown the final whistle — City won 2-1 in the most dramatic fashion.' },
        { speaker: 'Reporter', text: 'United holded on well early in the second half but couldn\'t survive the final moments.' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'scored in the 93rd minute to levelled the score',
          correction: 'scored in the 93rd minute to level the score',
          explanation: '"To" is followed by the base form of the verb — not the past tense. "To levelled" is incorrect. The correct structure is "to + base verb": "to level."',
        },
        {
          lineIndex: 4,
          incorrectText: 'The goalkeeper blown the final whistle',
          correction: 'The referee blew the final whistle',
          explanation: 'Two errors: (1) Referees blow the whistle — not goalkeepers. (2) "Blown" is the past participle of "blow" — used in perfect tenses. For simple past, use "blew."',
        },
        {
          lineIndex: 5,
          incorrectText: 'United holded on well',
          correction: 'United held on well',
          explanation: '"Hold" is an irregular verb: hold → held. "Holded" does not exist — you cannot add -ed to this irregular verb. The correct simple past is "held."',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using injury time vocabulary and simple past from this lesson.',
      items: [
        {
          customerLine: 'Ronaldo: Why do some matches have 10 minutes of added time now?',
          salespersonStart: 'Coach Diallo: Because IFAB — the organisation that makes the rules — changed the guidelines.',
          suggestedCompletion: 'They decided that referees were not adding enough time for all the real stoppages — goal celebrations, VAR checks, substitutions, injuries, and time-wasting. In the 2022-23 season, added time increased significantly. Some matches saw 10 or even 12 minutes added. Some fans love it because there are more dramatic late goals. Others find it too long and frustrating.',
        },
        {
          customerLine: 'Sofia: What is the most dramatic type of last-minute goal?',
          salespersonStart: 'Coach Diallo: Any goal that changes the result — an equaliser or a winner in the 90th minute or later.',
          suggestedCompletion: 'An equaliser from 0-1 to 1-1 means the team that were losing stole a point they didn\'t deserve. A winner from 1-1 to 2-1 in the 96th minute — with the other team celebrating a draw — is the most dramatic of all. The whole emotional journey: nearly losing, drawing, then winning in the last second. Football produces these moments better than any other sport.',
        },
        {
          customerLine: 'Ronaldo: How do you describe a time-wasting team in English?',
          salespersonStart: 'Coach Diallo: There are many phrases — some neutral, some very critical.',
          suggestedCompletion: 'Neutral descriptions: "They managed the game well in the final minutes" or "They slowed the tempo to protect their lead." Critical descriptions: "They time-wasted shamelessly" or "They were deliberately running down the clock." In post-match interviews, losing managers often say the other team "wasted time." Winning managers say they "saw the game out professionally." Same events — very different words.',
        },
        {
          customerLine: 'Sofia: Can a team score from kick-off after conceding an equaliser in injury time?',
          salespersonStart: 'Coach Diallo: Yes — technically, but the referee must have time for a kick-off.',
          suggestedCompletion: 'If there is still time on the clock after the equaliser, the conceding team kicks off. The other team might not press high — they already have the point they wanted. But in theory, you can score directly from kick-off if the referee allows it. In practice, the referee usually blows the whistle almost immediately after the restart, ending the match. The crowd always counts the seconds.',
        },
      ],
    },
  },
};

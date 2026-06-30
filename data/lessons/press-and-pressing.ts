import { Lesson } from '@/types/lesson';

export const pressAndPressing: Lesson = {
  slug: 'press-and-pressing',
  title: 'Press and Pressing',
  subtitle: 'High press, gegenpressing, press triggers — modern tactical terms',
  level: 'B1',
  description: 'Learn the language of pressing — one of the most important tactics in modern football. Understand what coaches and pundits mean when they talk about the high press, press triggers, and winning the ball high up the pitch.',
  heroImage: '/images/press-and-pressing-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Present simple vs present continuous for tactics',
    description: 'We use present simple to describe how a team ALWAYS plays — their style or system. We use present continuous to describe what is happening RIGHT NOW in a specific match or moment.',
    positivePattern: 'Present simple: Team + verb (general style) | Present continuous: Team + is/are + verb-ing (right now)',
    positiveExample: '"City press high — that is their style." (always) / "City are pressing high today — look at how far up the pitch they are." (this match)',
    negativePattern: 'Present simple negative: Team + do not/does not + verb | Present continuous negative: Team + is/are not + verb-ing',
    negativeExample: '"United do not press — they sit deep and defend." / "United are not pressing today — they are letting City have the ball."',
    positiveExamples: [
      { sentence: 'Liverpool press from the front — their forwards work extremely hard without the ball.', note: '(present simple = this is their general style, every game)' },
      { sentence: 'They are pressing very high in this second half — look at the intensity.', note: '(present continuous = what is happening right now)' },
      { sentence: 'The manager uses a high press because he wants to win the ball quickly.', note: '(present simple = general tactical choice)' },
      { sentence: 'The striker is pressing the centre-back — forcing a mistake.', note: '(present continuous = this specific moment)' },
    ],
    negativeExamples: [
      { sentence: 'They do not press when they are winning — they drop deep and protect the lead.', note: '(present simple = general rule/habit)' },
      { sentence: 'The forwards are not pressing now — they are saving energy for the last 20 minutes.', note: '(present continuous = what is NOT happening right now)' },
    ],
  },

  vocabulary: [
    {
      word: 'PRESS',
      partOfSpeech: 'noun / verb',
      definition: 'To move quickly towards the ball carrier to put them under pressure. The action of pressing is called "a press."',
      example: 'Their striker pressed our centre-back as soon as he had the ball — he had no time to think.',
      imageSlug: '/images/press.png',
    },
    {
      word: 'HIGH PRESS',
      partOfSpeech: 'noun',
      definition: 'When a team presses the opposition far up the pitch — near the opposition\'s own goal — to win the ball back quickly.',
      example: 'Liverpool\'s high press is famous — they win the ball in dangerous positions and score from it.',
      imageSlug: '/images/high-press.png',
    },
    {
      word: 'GEGENPRESSING',
      partOfSpeech: 'noun',
      definition: 'A German tactical idea — pressing immediately after losing the ball, before the opposition can organise. "Gegen" means "against" in German.',
      example: 'Klopp brought gegenpressing to England — his teams win the ball back within seconds of losing it.',
      imageSlug: '/images/gegenpressing.png',
    },
    {
      word: 'PRESS TRIGGER',
      partOfSpeech: 'noun',
      definition: 'A specific moment or action that tells the team to start pressing — like a back pass to the goalkeeper or a poor touch.',
      example: 'A back pass to the goalkeeper is a press trigger — the whole team moves forward immediately when it happens.',
      imageSlug: '/images/press-trigger.png',
    },
    {
      word: 'INTENSITY',
      partOfSpeech: 'noun',
      definition: 'The energy and effort level of a team — high intensity means working very hard and very fast.',
      example: 'The pressing only works if the whole team maintains the same intensity for 90 minutes — it is exhausting.',
      imageSlug: '/images/intensity.png',
    },
    {
      word: 'BLOCK',
      partOfSpeech: 'noun',
      definition: 'The shape of a defending team — a "low block" means defending deep, a "mid block" means defending in midfield.',
      example: 'They sit in a mid block when they do not have the ball — compact and difficult to play through.',
      imageSlug: '/images/block.png',
    },
    {
      word: 'TRANSITION',
      partOfSpeech: 'noun',
      definition: 'The moment when the ball changes possession — the team without the ball either presses immediately or drops back.',
      example: 'Their transition from defence to attack is very fast — they go from defending to shooting in five seconds.',
      imageSlug: '/images/transition.png',
    },
    {
      word: 'PRESSING TRAP',
      partOfSpeech: 'noun',
      definition: 'When a team uses the press to force the opposition into a specific area where they can win the ball.',
      example: 'The manager set a pressing trap on the right side — forcing the ball wide and then pressing all together.',
      imageSlug: '/images/pressing-trap.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WIN THE BALL BACK',
      definition: 'To regain possession after losing it — often the goal of pressing.',
      example: 'They win the ball back within five seconds of losing it — that is why the high press works for them.',
      imageSlug: '/images/win-the-ball-back.png',
    },
    {
      phrase: 'PRESS FROM THE FRONT',
      definition: 'When the forwards and attacking players lead the press — starting the pressure near the opposition goal.',
      example: 'The striker presses from the front — he works as hard without the ball as he does with it.',
      imageSlug: '/images/press-from-the-front.png',
    },
    {
      phrase: 'DROP OFF',
      definition: 'To move back into a deeper position — the opposite of pressing. Teams drop off when they want to defend deep.',
      example: 'When they score, they drop off and let the opposition have the ball — protecting their lead.',
      imageSlug: '/images/drop-off.png',
    },
    {
      phrase: 'FORCE A MISTAKE',
      definition: 'To put so much pressure on an opponent that they make an error.',
      example: 'The pressing forces mistakes — defenders panic when they are pressed and lose the ball in dangerous areas.',
      imageSlug: '/images/force-a-mistake.png',
    },
    {
      phrase: 'COME OUT TO PRESS',
      definition: 'To move forward from your position to apply pressure on the ball carrier.',
      example: 'The goalkeeper comes out to press when the opposition plays a back pass — it is a brave and aggressive action.',
      imageSlug: '/images/come-out-to-press.png',
    },
    {
      phrase: 'HOLD THE LINE',
      definition: 'To keep the defensive line high and organised — not dropping back when the opposition plays forward.',
      example: 'The defence holds the line when the team presses — keeping the opposition offside.',
      imageSlug: '/images/hold-the-line.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases coaches and players use when talking about pressing during training and matches.',
    items: [
      {
        cue: 'Press! Press now!',
        meaning: 'An instruction to immediately move towards the ball carrier — do not wait.',
        usage: 'Shouted by the manager on the touchline or by players during the match. "Press now" = this is the moment — the press trigger has happened. The word "now" shows urgency — the chance to press is only available for a second before the opposition escapes.',
        imageSlug: 'otp-press-press-now',
      },
      {
        cue: "They can't play through our press.",
        meaning: 'The opposition cannot pass the ball out successfully because our pressing is too intense.',
        usage: 'Said when the press is working well — the opposition keep losing the ball or kicking it long to escape. "Play through" = build attacks with passes from the back. If a team "cannot play through" a press, they usually have to go direct.',
        imageSlug: 'otp-they-cant-play-through-our-press',
      },
      {
        cue: "We're pressing triggers, not the ball.",
        meaning: 'The team presses at specific moments — not all the time, just when a trigger happens.',
        usage: 'A coaching instruction about when to press. "Pressing triggers" are specific moments — a back pass, a poor touch, a defender receiving under no pressure. Pressing at the right moment is more effective than pressing all the time.',
        imageSlug: 'otp-were-pressing-triggers-not-the-ball',
      },
      {
        cue: 'Drop off, drop off!',
        meaning: 'Move back — stop pressing and defend deeper.',
        usage: 'Shouted when the team needs to stop pressing and drop into a defensive shape. Usually happens when the team is winning, or when the press is not working and the opposition are playing through it. The opposite instruction to "press."',
        imageSlug: 'otp-drop-off-drop-off',
      },
      {
        cue: "Their press is relentless today.",
        meaning: 'Their pressing is continuous, intense, and never stops — very difficult to deal with.',
        usage: '"Relentless" = never stopping, never reducing in intensity. Said by pundits or commentators when a team\'s pressing is at a very high level for the whole match. It is a strong adjective — it means the press is exhausting and impossible to escape.',
        imageSlug: 'otp-their-press-is-relentless-today',
      },
      {
        cue: 'The goalkeeper needs to press too.',
        meaning: 'Even the goalkeeper must join the pressing — coming out of goal when needed.',
        usage: 'In a modern high press, the goalkeeper is part of the system — they act as a sweeper keeper and come out to press when the opposition plays a back pass or when they receive the ball outside the box. It requires a technically confident goalkeeper.',
        imageSlug: 'otp-the-goalkeeper-needs-to-press-too',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Right — new unit. We are moving into tactics. Today: pressing. Ronaldo, what does it mean when we say a team "presses high"?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'It means they [[press:move quickly towards the ball carrier to put them under pressure]] the opposition near their own goal — they do not wait for the ball to come to them.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. And what is the difference between "they press high" and "they are pressing high"?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: '"They press high" is their general style — they always do it. "They are pressing high" means they are doing it right now, in this match.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. Now — what is [[gegenpressing:pressing immediately after losing the ball, before the opposition can organise]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'It is the idea of pressing the moment you lose the ball — immediately, before the opposition can pass or move. Klopp made it famous at Liverpool.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. And what is a [[press trigger:a specific moment that tells the team to start pressing]]?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'A signal that the press starts — like a back pass to the goalkeeper, or a defender receiving the ball with their back to the goal. When the trigger happens, everyone presses at the same time.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. The press only works if the whole team [[presses from the front:starts the pressure with the forwards near the opposition goal]] together. If one player does not press, the opposition escapes. What happens to teams who do not press well?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'They give the opposition too much time on the ball. Teams with good technique can [[play through:build attacks with passes]] a weak press easily.',
    },
  ],

  matchingExercise: [
    { word: 'PRESS', definition: 'To move quickly towards the ball carrier to put them under pressure' },
    { word: 'HIGH PRESS', definition: 'Pressing the opposition far up the pitch — near their own goal' },
    { word: 'GEGENPRESSING', definition: 'Pressing immediately after losing the ball, before the opposition can organise' },
    { word: 'PRESS TRIGGER', definition: 'A specific moment that signals the team to start pressing' },
    { word: 'INTENSITY', definition: 'The energy and effort level — how hard and fast the team works' },
    { word: 'BLOCK', definition: 'The shape of the defending team — low block or mid block' },
    { word: 'TRANSITION', definition: 'The moment when possession changes from one team to the other' },
    { word: 'PRESSING TRAP', definition: 'Using the press to force the opposition into a specific area' },
  ],

  fillBlankExercise: [
    { before: 'Liverpool', answer: 'press', after: 'from the front every match — their forwards never stop working.' },
    { before: 'Right now they', answer: 'are pressing', after: 'very high — look at how far up the pitch the striker is.' },
    { before: 'A back pass to the goalkeeper is a', answer: 'press trigger', after: '— the whole team moves forward immediately.' },
    { before: 'The', answer: 'gegenpressing', after: 'means winning the ball back within seconds of losing it.' },
    { before: 'When they score, they', answer: 'drop off', after: 'and defend deep — they do not press anymore.' },
    { before: 'The press forces mistakes — defenders', answer: 'panic', after: 'when they are pressed and lose the ball in dangerous areas.' },
    { before: 'Their press is', answer: 'relentless', after: '— it never stops, never reduces in intensity.' },
    { before: 'They do not press — they sit in a', answer: 'low block', after: 'and wait for the opposition to make mistakes.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"City press high." Which tense is this and what does it mean?',
      options: [
        'Present continuous — City are pressing in this specific match right now',
        'Present simple — This is City\'s general tactical style in every match',
        'Past simple — City pressed high in a previous match',
      ],
      correctIndex: 1,
    },
    {
      question: '"City are pressing high today." Which tense is this and what does it mean?',
      options: [
        'Present simple — This is always how City play',
        'Past continuous — City were pressing in the last match',
        'Present continuous — City are pressing in this specific match right now',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is a "press trigger"?',
      options: [
        'A physical button the manager presses to signal the team',
        'A specific moment that tells the team to start pressing — like a back pass',
        'The first press of the match after kick-off',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "gegenpressing" mean?',
      options: [
        'Pressing from a deep defensive position',
        'Pressing immediately after losing the ball, before the opposition organises',
        'A German formation with three forwards all pressing at once',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses present simple correctly to describe a team\'s style?',
      options: [
        'They are usually sitting in a mid block in most games.',
        'They do not press — they sit in a mid block and wait.',
        'They are not pressing — they are sitting in a mid block.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "drop off" mean in the context of pressing?',
      options: [
        'To fall to the ground after a foul',
        'To move back into a deeper defensive position — the opposite of pressing',
        'To drop the ball and lose possession',
      ],
      correctIndex: 1,
    },
    {
      question: 'The coach shouts "Press triggers, not the ball!" What does this mean?',
      options: [
        'Press every time anyone touches the ball',
        'Only press at specific moments — not randomly',
        'Press the ball hard when you shoot',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence correctly uses present continuous?',
      options: [
        'They press high every match — it is their style.',
        'They are pressing very high in this second half.',
        'They pressed high — that is their approach.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the correct tense — present simple or present continuous.',
    items: [
      {
        sentence: 'Liverpool _____ from the front every match — it is their identity.',
        options: ['are pressing', 'press', 'pressed'],
        correctIndex: 1,
        explanation: '"Press" is correct — present simple. This describes Liverpool\'s general style — what they always do. "Every match" is the key clue — it confirms this is a habit or general fact, not something happening right now. Present simple = general truth/habit.',
      },
      {
        sentence: 'Look at the striker — she _____ the goalkeeper right now!',
        options: ['presses', 'is pressing', 'pressed'],
        correctIndex: 1,
        explanation: '"Is pressing" is correct — present continuous. "Look at" and "right now" both signal this is happening at this moment. Present continuous = action in progress right now. "She presses the goalkeeper" would mean she always does this — a general habit.',
      },
      {
        sentence: 'They _____ press when they are winning — they drop off and protect the lead.',
        options: ['are not', 'do not', 'did not'],
        correctIndex: 1,
        explanation: '"Do not" is correct — present simple negative. This describes a general rule or tactical habit: when they are winning, they always stop pressing. "Do not" is for present simple negative. "Are not" + verb-ing would be present continuous negative for something not happening right now.',
      },
      {
        sentence: 'The team _____ very well this half — they have won the ball back six times already.',
        options: ['press', 'are pressing', 'pressed'],
        correctIndex: 1,
        explanation: '"Are pressing" is correct — present continuous. "This half" means we are talking about the current match, not a general habit. "Have won the ball back six times already" confirms this is happening now, in this game. Present continuous = what is happening in this specific match.',
      },
      {
        sentence: 'A back pass _____ a press trigger — the whole team moves immediately when it happens.',
        options: ['is', 'are', 'is being'],
        correctIndex: 0,
        explanation: '"Is" is correct — present simple. This describes a fact or rule about the tactical system: a back pass is always a press trigger. General facts and rules use present simple. "Is being" (present continuous passive) would suggest this is a temporary situation, which is wrong here.',
      },
      {
        sentence: 'They _____ a mid block today — they have changed their usual style.',
        options: ['use', 'uses', 'are using'],
        correctIndex: 2,
        explanation: '"Are using" is correct — present continuous. "Today" signals this is a specific match, not their general style. The phrase "changed their usual style" confirms this is different from what they normally do — so we use present continuous (what is happening in this specific match), not present simple (what they always do).',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read each situation and choose the best response.',
      items: [
        {
          customerLine: 'A pundit says: "City do not press — they sit deep." Is this using the correct tense?',
          options: [
            '"Yes — present simple is correct here because it describes City\'s general tactical style."',
            '"No — it should be present continuous because we are watching the match now."',
            '"No — it should be past simple because this is about a previous match."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "City do not press" uses present simple because it describes their general tactical style — what they always do. If the pundit was talking about what is happening right now in one specific match, they would use "City are not pressing today." The difference: present simple = general style, present continuous = this match.',
        },
        {
          customerLine: 'The coach shouts: "What are we doing?! We are not pressing!" What does this tell you?',
          options: [
            '"The coach is frustrated that the team never presses — it is not their style."',
            '"The coach is frustrated that the team is not pressing in this specific moment — they should be pressing right now but are not."',
            '"The coach is telling the team their general style needs to change permanently."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Are not pressing" is present continuous — it refers to right now, in this match. The coach is frustrated because the team should be pressing at this moment but they are not doing it. If the coach said "we do not press," that would mean their general style does not include pressing — a different meaning.',
        },
        {
          customerLine: 'A teammate asks: "When do we press and when do we drop off?" What is the best tactical answer?',
          options: [
            '"We press all the time — we never drop off."',
            '"We press when the press trigger happens — like a back pass or a poor touch. We drop off when we are winning and need to protect the lead, or when the press is not working."',
            '"We press in the first half and drop off in the second half."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It explains press triggers (specific moments for pressing) and when to drop off (when winning or when the press fails). This shows a sophisticated understanding of pressing as a tactical system — not something you do all the time, but at the right moments.',
        },
        {
          customerLine: 'After watching a match, someone says: "Their gegenpressing was incredible — they won the ball back every time." What does this show about the team?',
          options: [
            '"They pressed from deep positions and sat in a low block very well."',
            '"They pressed the moment they lost the ball — immediately, before the opposition could organise — and it worked extremely well."',
            '"They had a very high defensive line and were very difficult to get in behind."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Gegenpressing = pressing immediately after losing the ball. If their gegenpressing was incredible, it means every time they lost the ball, they pressed so fast that the opposition could not organise — and they won it back. This is different from a high press (which is always applied) or a low block (which is defensive).',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this tactical discussion. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Look — City are pressing incredibly high today. It is working really well.' },
        { speaker: 'Ronaldo', text: 'I know — they press high every match, it is their style. But right now they are pressing even higher than usual.' },
        { speaker: 'Sofia', text: 'The opposition is not playing through it — they kicks the ball long every time they are pressed.' },
        { speaker: 'Ronaldo', text: 'A back pass is a press trigger. When the goalkeeper receives the ball, they immediately presses.' },
        { speaker: 'Sofia', text: 'The intensity is incredible — they do not drop off at all this half.' },
        { speaker: 'Ronaldo', text: 'If they keep pressing at this level for 90 minutes, they will win the ball back many times and probably score from it.' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'they kicks the ball long',
          correction: 'they kick the ball long',
          explanation: 'With the subject "they" (third person plural), the present simple verb does NOT add -s. "They kick" — not "they kicks." The -s is only for third person SINGULAR: he/she/it kicks. "They" is plural — no -s. This is one of the most common verb agreement mistakes in English.',
        },
        {
          lineIndex: 3,
          incorrectText: 'they immediately presses',
          correction: 'they immediately press',
          explanation: '"They" is plural — present simple with "they" never takes -s. "They press" — not "they presses." Only he/she/it + -s. Compare: "the team presses" (team = singular = -s) vs "they press" (they = plural = no -s). Here "they" refers to the whole team.',
        },
        {
          lineIndex: 4,
          incorrectText: 'they do not drop off at all this half',
          correction: 'they are not dropping off at all this half',
          explanation: '"This half" refers to the current, specific match — what is happening right now. We should use present continuous for things happening in this specific match. "They do not drop off" would mean their general style never involves dropping off. "They are not dropping off this half" = they are not doing it in this specific half.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the coach's explanation of the pressing system.",
      items: [
        {
          customerLine: 'Ronaldo: Why do some teams press high and others sit in a low block?',
          salespersonStart: 'Coach Diallo: It depends on the players you have and the opponent you are facing.',
          suggestedCompletion: 'A high press requires very fit, disciplined players who understand where to press and when to press. If one player presses at the wrong moment, the opposition plays through and creates a chance — so every player needs to understand the press triggers. A low block requires different qualities — discipline, concentration, and physical strength. Some teams do not have the fitness to press for 90 minutes, so they sit deep. Other teams press high because their forwards are fast enough to win the ball in dangerous positions.',
        },
        {
          customerLine: 'Sofia: What happens when the press is not working?',
          salespersonStart: 'Coach Diallo: A good manager recognises this quickly and changes the instruction.',
          suggestedCompletion: 'If the opposition is playing through the press — finding passes between the lines and escaping every time — the team needs to drop off. Continuing to press when it is not working is dangerous because it creates space behind the defensive line. The manager shouts "drop off" and the team reorganises into a mid or low block. The press is a weapon, but like all weapons, you need to know when to use it and when to put it away.',
        },
        {
          customerLine: 'Ronaldo: Is gegenpressing better than a planned high press?',
          salespersonStart: 'Coach Diallo: They are different tools — and the best teams use both.',
          suggestedCompletion: 'Gegenpressing happens immediately — it is a reaction. The moment you lose the ball, you press. This is especially effective because the opposition has just won the ball and has not yet organised their attack. A planned high press is more structured — the team presses in specific moments, based on press triggers. Klopp\'s teams do both: they press high in planned moments AND they gegenpresss when they lose the ball. The combination is very difficult for any opposition to deal with.',
        },
        {
          customerLine: 'Sofia: How do you defend against a high press?',
          salespersonStart: 'Coach Diallo: There are several ways — and teams use them all.',
          suggestedCompletion: 'The first option is to go direct — kick the ball long over the press into space behind the pressing line. This avoids the press completely but requires a tall striker to win the aerial battle. The second option is to play quickly through the press — with one or two touch passing that moves faster than the press can cover. This requires very technical players who are calm under pressure. The third option is to use the goalkeeper as an extra player — building from the back with confidence. The risk is losing the ball in a dangerous position, but the reward is escaping the press and creating an overload.',
        },
      ],
    },
  },
};

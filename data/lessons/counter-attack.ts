import { Lesson } from '@/types/lesson';

export const counterAttack: Lesson = {
  slug: 'counter-attack',
  title: 'Counter-Attack',
  subtitle: 'Transition, on the break, pace in behind',
  level: 'B1-B2',
  description: 'Learn the vocabulary for one of football\'s most exciting tactics — the counter-attack. How teams win the ball and attack quickly before the opposition can recover.',
  heroImage: '/images/counter-attack-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: First conditional — "If + present simple, will + base verb"',
    description: 'We use the first conditional to talk about real, possible situations in the future. In football, it is perfect for describing tactical plans and what will happen if certain conditions are met. It describes a real possibility — not a dream or wish.',
    positivePattern: 'If + present simple, will + base verb  OR  Will + base verb + if + present simple',
    positiveExample: '"If we win the ball, we will attack immediately." / "We will counter quickly if we stay compact and patient."',
    negativePattern: 'Do NOT use "will" in the "if" clause.',
    negativeExample: 'WRONG: "If we will win the ball, we will attack." / RIGHT: "If we win the ball, we will attack."',
    positiveExamples: [
      { sentence: 'If their striker gets in behind, the goalkeeper will need to come out.', note: '(if + present simple / will + base verb)' },
      { sentence: 'We will counter very quickly if they push their full-backs forward.', note: '(will + base verb / if + present simple — reversed order, same meaning)' },
      { sentence: 'If the transition is fast enough, we will have a 3v2 advantage before they recover.', note: '(describing a real tactical possibility)' },
      { sentence: 'If we defend deep and stay compact, we will be dangerous on the counter.', note: '(both clauses can include multiple verbs)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "If we will press high, we will win the ball back quickly."', note: 'Never use "will" in the if-clause.' },
      { sentence: 'RIGHT: "If we press high, we will win the ball back quickly."', note: 'If-clause = present simple. Main clause = will + base verb.' },
    ],
  },

  vocabulary: [
    {
      word: 'COUNTER-ATTACK',
      partOfSpeech: 'noun / verb',
      definition: 'A fast attack launched immediately after winning the ball — while the opposition is still moving forward and out of position.',
      example: 'They counter-attacked immediately after winning possession — three players running forward before the opposition could recover.',
      imageSlug: '/images/counter-attack.png',
    },
    {
      word: 'TRANSITION',
      partOfSpeech: 'noun',
      definition: 'The moment a team switches from attacking to defending — or from defending to attacking. The split second when possession changes.',
      example: 'Their transition from defence to attack is incredibly fast — they go from defending to scoring in seconds.',
      imageSlug: '/images/transition.png',
    },
    {
      word: 'PACE',
      partOfSpeech: 'noun',
      definition: 'Speed — especially the ability to run fast. A player with pace is very quick over short distances.',
      example: 'Her pace is frightening — if she gets the ball in space, no defender can catch her.',
      imageSlug: '/images/pace.png',
    },
    {
      word: 'IN BEHIND',
      partOfSpeech: 'phrase',
      definition: 'The space behind the opposition\'s defensive line — in front of the goalkeeper but behind the last defender.',
      example: 'He always runs in behind — he is always looking to get the ball over the top into the space behind the defence.',
      imageSlug: '/images/in-behind.png',
    },
    {
      word: 'ON THE BREAK',
      partOfSpeech: 'phrase',
      definition: 'During a counter-attack — when your team is breaking forward quickly after winning possession.',
      example: 'They are very dangerous on the break — three fast forwards who can hurt any team in transition.',
      imageSlug: '/images/on-the-break.png',
    },
    {
      word: 'NUMBERS UP',
      partOfSpeech: 'phrase',
      definition: 'When your team has more players than the opposition in the attacking area — an advantage in a counter-attack.',
      example: 'They had numbers up — three attackers against two defenders — and they should have scored.',
      imageSlug: '/images/numbers-up.png',
    },
    {
      word: 'CLINICAL',
      partOfSpeech: 'adjective',
      definition: 'Very efficient and precise in front of goal — scoring when it matters, without wasting chances.',
      example: 'They were clinical on the counter — they had three chances and scored three goals.',
      imageSlug: '/images/clinical.png',
    },
    {
      word: 'EXPOSED',
      partOfSpeech: 'adjective',
      definition: 'When a team is vulnerable — caught with defenders out of position, leaving space behind them.',
      example: 'When both full-backs push forward, they are very exposed to the counter-attack — if they lose the ball, there is no cover.',
      imageSlug: '/images/exposed.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BREAK FORWARD',
      definition: 'To move quickly in attack — to sprint forward from deep when your team wins the ball.',
      example: 'The midfielders break forward immediately when we win possession — they do not wait, they go.',
      imageSlug: '/images/break-forward.png',
    },
    {
      phrase: 'CATCH ON THE BREAK',
      definition: 'To counter-attack against a team that has pushed forward — catching them out of position.',
      example: 'If they push high, we will catch them on the break — their full-backs will be too far forward to recover.',
      imageSlug: '/images/catch-on-the-break.png',
    },
    {
      phrase: 'RECOVER BACK',
      definition: 'To sprint back to your defensive position after the ball is lost — to get goal-side of the ball quickly.',
      example: 'If we lose the ball, everyone must recover back immediately — no one walks, no one stops.',
      imageSlug: '/images/recover-back.png',
    },
    {
      phrase: 'RELEASE QUICKLY',
      definition: 'To play the ball forward fast — passing immediately to launch the counter before the opposition recovers.',
      example: 'When we win the ball, release it quickly — the first pass must go forward before they can reorganise.',
      imageSlug: '/images/release-quickly.png',
    },
    {
      phrase: 'GET IN BEHIND',
      definition: 'To run past the defensive line and receive the ball in the space behind the defenders.',
      example: 'If the full-backs push up, she will get in behind — her pace makes her impossible to stop once she has space.',
      imageSlug: '/images/get-in-behind.png',
    },
    {
      phrase: 'HIT ON THE COUNTER',
      definition: 'To launch a counter-attack — to attack quickly immediately after winning the ball.',
      example: 'We will hit them on the counter if they press us high — their full-backs will be out of position.',
      imageSlug: '/images/hit-on-the-counter.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases used during counter-attacks and transition play.',
    items: [
      {
        cue: 'Go! Go! Go!',
        meaning: 'Attack immediately — run forward now, do not hesitate.',
        usage: 'The urgent instruction to attack quickly after winning the ball. There is no time to think — the opposition is out of position and the counter must be launched immediately. "Go! Go! Go!" is one of the most energetic and exciting phrases in football — it signals the start of a counter-attack and everyone must react instantly.',
        imageSlug: 'otp-go-go-go',
      },
      {
        cue: 'Stay on your feet!',
        meaning: 'Do not slide tackle — wait, keep your position, and make the attacker beat you.',
        usage: 'Instruction to defenders facing a counter-attack. If a defender dives in and misses, the attacker is clear. "Stay on your feet" = be patient, do not commit to a tackle, keep your shape. Used when one defender is trying to delay a counter while teammates recover. One wrong challenge can turn a containable situation into a goal.',
        imageSlug: 'otp-stay-on-your-feet',
      },
      {
        cue: 'Numbers up! Go through!',
        meaning: 'You have more players than they have defenders — attack quickly to exploit the advantage.',
        usage: 'Shouted when the attacking team realises they have a numerical superiority — three attackers vs two defenders, or two vs one. "Numbers up" means the advantage is there. "Go through" means take it — do not slow down, do not wait, attack now before they recover. This situation does not last long.',
        imageSlug: 'otp-numbers-up-go-through',
      },
      {
        cue: 'Get back! Sprint!',
        meaning: 'The ball has been lost — everyone must recover their defensive position immediately.',
        usage: 'Desperate instruction when the team loses the ball in an advanced position. "Sprint" = run as fast as you can. Not walking, not jogging — sprinting. The goal is to recover defensive shape before the opposition can build a dangerous counter. Every second counts when transitioning from attack to defence.',
        imageSlug: 'otp-get-back-sprint',
      },
      {
        cue: "If they push up, we'll kill them on the break.",
        meaning: 'If the opposition moves their defenders forward, we will attack the space they leave behind.',
        usage: 'A classic first conditional in football. The tactical plan: sit deep, absorb pressure, then exploit the space in behind if the opposition push up. "Kill them on the break" is vivid, colourful language meaning we will score easily if they push forward. This phrase captures the essence of counter-attacking tactics — patience, then explosion.',
        imageSlug: 'otp-if-they-push-up',
      },
      {
        cue: 'First pass forward!',
        meaning: 'When you win the ball, the first pass must go forward — not sideways or back.',
        usage: 'Instruction to play quickly in transition. The most dangerous counter-attacks are launched with one forward pass before the opposition can recover. "First pass forward" = do not recycle, do not slow down — play it forward immediately to the striker running in behind. The speed of the transition determines how dangerous the counter is.',
        imageSlug: 'otp-first-pass-forward',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Tomorrow\'s opponents push their full-backs very high. This creates a lot of space in behind for us. If they push their full-backs high, what will happen?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'If they push high, there will be a lot of space [[in behind:the space behind the defensive line — between the last defender and the goalkeeper]] their defensive line. If Amara wins the ball, she will [[release quickly:pass the ball forward fast before the opposition can recover]] to the striker.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. Notice the grammar — "If they push high..." present simple in the if-clause. "...there WILL BE space." Will in the main clause. Never "if they WILL push." Ronaldo — what is the key to a good [[transition:the moment of switching from defending to attacking — or attacking to defending]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Speed. If we win the ball and release it quickly, the opposition will not have time to [[recover back:sprint back to defensive position after losing the ball]]. We will be [[numbers up:having more players than the opposition in the attacking area]] before they can reorganise.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Right. And what happens to us if we push too many players forward and lose the ball?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'We will be [[exposed:vulnerable — caught with defenders out of position leaving space behind]]. If we lose the ball with five players forward, they will [[hit on the counter:to launch a counter-attack after winning the ball]] and have a 3v2 — maybe even a 2v1.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. The [[counter-attack:a fast attack launched immediately after winning the ball while the opposition is out of position]] works both ways. If we are not disciplined, they will hurt us. So — what is our plan?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Stay compact and [[clinical:very efficient and precise in front of goal — scoring when chances come]]. If we stay patient and disciplined for 90 minutes, our [[pace:speed — especially the ability to run fast]] will be the difference. One chance, one goal. That is enough.',
    },
  ],

  matchingExercise: [
    { word: 'COUNTER-ATTACK', definition: 'A fast attack launched after winning the ball — while the opposition is still out of position' },
    { word: 'TRANSITION', definition: 'The moment of switching between attack and defence — or defence and attack' },
    { word: 'PACE', definition: 'Speed — the ability to run fast, especially over short distances' },
    { word: 'IN BEHIND', definition: 'The space behind the defensive line — between the last defender and the goalkeeper' },
    { word: 'ON THE BREAK', definition: 'During a counter-attack — when the team is breaking forward quickly after winning possession' },
    { word: 'NUMBERS UP', definition: 'Having more attacking players than the opposition has defenders in that area' },
    { word: 'CLINICAL', definition: 'Very efficient and precise in front of goal — scoring when chances come' },
    { word: 'EXPOSED', definition: 'Vulnerable — defenders out of position and leaving dangerous space behind them' },
  ],

  fillBlankExercise: [
    { before: 'If they push their full-backs high, we', answer: 'will attack', after: 'the space in behind immediately.' },
    { before: 'If their striker gets the ball in space, no defender', answer: 'will catch', after: 'her — her pace is too much.' },
    { before: 'We', answer: 'will counter', after: 'very quickly if they lose the ball in our half.' },
    { before: 'If we stay compact and patient, we', answer: 'will be', after: 'dangerous on the break in the final 20 minutes.' },
    { before: 'If we lose the ball, everyone must', answer: 'recover back', after: 'immediately — no one walks.' },
    { before: 'We will be numbers up if we', answer: 'release', after: 'the ball quickly before they can recover their shape.' },
    { before: 'If we are not disciplined, they', answer: 'will expose', after: 'us on the counter and we will concede.' },
    { before: 'The', answer: 'transition', after: 'from defence to attack must be instant — speed of thought, then speed of movement.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which first conditional sentence is CORRECT?',
      options: [
        '"If we will win the ball, we will counter immediately."',
        '"If we win the ball, we counter immediately."',
        '"If we win the ball, we will counter immediately."',
      ],
      correctIndex: 2,
    },
    {
      question: '"They are very dangerous on the break." What does "on the break" mean?',
      options: [
        'When they stop play during a break in the match',
        'When they attack quickly in transition after winning the ball',
        'When they play long ball football',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is "transition" in football?',
      options: [
        'The substitution of one player for another',
        'The moment possession changes — switching between attack and defence',
        'A type of passing combination between three players',
      ],
      correctIndex: 1,
    },
    {
      question: '"If they push up, we\'ll kill them on the break." What does this tactical plan involve?',
      options: [
        'Pressing high and winning the ball in their half',
        'Defending deep and counter-attacking when they leave space in behind',
        'Playing slowly to tire the opposition',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which part of the first conditional is WRONG?',
      options: [
        '"If we win the ball, we will release quickly."',
        '"If we will win the ball, we will release quickly."',
        '"We will release quickly if we win the ball."',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "exposed" mean when talking about defending against a counter?',
      options: [
        'The defenders are very experienced and hard to beat',
        'The defenders are out of position — leaving dangerous space behind them',
        'The defenders are compact and well-organised',
      ],
      correctIndex: 1,
    },
    {
      question: '"Numbers up!" — what does this mean during a counter?',
      options: [
        'Count how many players you have',
        'You have more attackers than they have defenders — exploit the advantage now',
        'The opposition has more players than you in defence',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is "pace" in football terms?',
      options: [
        'The speed of the ball when it is crossed',
        'The tempo of the passing game',
        'A player\'s speed — the ability to run very fast',
      ],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each first conditional sentence — use present simple in the if-clause and will in the main clause.',
    items: [
      {
        sentence: 'If their full-backs _____ forward, we _____ the space in behind immediately.',
        options: ['push / will attack', 'will push / will attack', 'push / attack'],
        correctIndex: 0,
        explanation: '"Push / will attack" is correct. First conditional rule: if + present simple, will + base verb. "If their full-backs push forward" = present simple in the if-clause. "We will attack" = will + base verb in the main clause. Never use "will" in the if-clause: "if they will push" is wrong. "Push / attack" (no will) is also wrong — you need "will" in the main clause to show this is a real future possibility.',
      },
      {
        sentence: 'We _____ them on the break if they _____ possession in our half.',
        options: ['will catch / lose', 'catch / will lose', 'will catch / will lose'],
        correctIndex: 0,
        explanation: '"Will catch / lose" is correct. When the main clause comes first (reversed order), the pattern is the same — will + base verb in the main clause, present simple in the if-clause: "We will catch them" (will + catch) "if they lose possession" (present simple). "Catch / will lose" puts "will" in the wrong clause. "Will catch / will lose" uses "will" in both clauses — wrong.',
      },
      {
        sentence: 'If we _____ compact, we _____ dangerous on the counter in the last 20 minutes.',
        options: ['will stay / are', 'stay / will be', 'stayed / would be'],
        correctIndex: 1,
        explanation: '"Stay / will be" is correct. First conditional: "if we stay compact" (present simple) / "we will be dangerous" (will + base verb). "Will stay / are" puts "will" in the wrong clause. "Stayed / would be" — this is the second conditional (imaginary/unlikely situations). We use the second conditional for imaginary situations: "If we stayed compact, we would be dangerous." We use the first conditional for real, likely possibilities: "If we stay compact, we will be dangerous."',
      },
      {
        sentence: 'If she _____ the ball in space, no defender _____ her.',
        options: ['gets / catches', 'gets / will catch', 'will get / will catch'],
        correctIndex: 1,
        explanation: '"Gets / will catch" is correct. "If she gets the ball in space" = present simple in if-clause. "No defender will catch her" = will + base verb in main clause. Note: "no defender will catch her" — "will catch" with "no" makes the sentence negative in meaning even though the verb is not "will not catch." The "no" negates the whole idea. "Gets / catches" is wrong — missing "will." "Will get / will catch" puts "will" in both clauses — wrong.',
      },
      {
        sentence: 'If we _____ the ball in their half, everyone _____ immediately.',
        options: ['lose / will recover back', 'will lose / will recover back', 'lost / would recover back'],
        correctIndex: 0,
        explanation: '"Lose / will recover back" is correct. "If we lose the ball in their half" (present simple) / "everyone will recover back immediately" (will + base verb). "Will lose / will recover back" — two "will" clauses: wrong. "Lost / would recover back" — second conditional for imaginary situations. First conditional (will) = real, likely possibility. Second conditional (would) = imaginary or unlikely situation. When talking about real tactical plans for a match, use the first conditional.',
      },
      {
        sentence: 'If we _____ patient and disciplined, our pace _____ the difference.',
        options: ['stay / will make', 'will stay / will make', 'stay / makes'],
        correctIndex: 0,
        explanation: '"Stay / will make" is correct. First conditional: "if we stay patient" (present simple) / "our pace will make the difference" (will + base verb). Notice the subject changes: "if we stay" → "our pace will make." The if-clause and the main clause can have different subjects — very common in tactical first conditional sentences. "Will stay / will make" — wrong (will in the if-clause). "Stay / makes" — wrong (present simple in both clauses — this sounds like a general truth, not a future plan).',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Choose the best tactical response using first conditional.',
      items: [
        {
          customerLine: 'The opposition are pushing both full-backs very high. What is our counter-attack plan?',
          options: [
            '"If both their full-backs will push high, we will have loads of space in behind. Our striker is fast enough to exploit it."',
            '"If both their full-backs push high, we will have loads of space in behind — our striker should get the ball immediately and run in behind."',
            '"When both their full-backs push high, we would have loads of space in behind."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "If both their full-backs push high" = correct present simple in the if-clause. "We will have" = correct will + base verb in the main clause. A incorrectly uses "will push" in the if-clause. C uses "would have" — this is the second conditional (imaginary situations), not the first conditional (real, likely plans for this match).',
        },
        {
          customerLine: 'What should we tell the striker about her role in the counter-attack?',
          options: [
            '"If the midfielder wins the ball, you will need to get in behind immediately — your pace will cause them big problems."',
            '"If the midfielder will win the ball, you will need to get in behind immediately."',
            '"If the midfielder won the ball, you would need to get in behind immediately."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "If the midfielder wins the ball" (present simple in if-clause) + "you will need to get in behind" (will + base verb). Clear, direct tactical instruction using the first conditional. B uses "will win" in the if-clause — wrong. C uses "won / would need" — second conditional, for imaginary situations. We are talking about a real tactical plan for this match — first conditional is correct.',
        },
        {
          customerLine: 'What is the risk of the counter-attack if we are not careful?',
          options: [
            '"If we will lose the ball in transition, we will be very exposed on the counter ourselves."',
            '"If we lose the ball in transition, we will be very exposed — they have three fast forwards who will hurt us."',
            '"If we lost the ball in transition, we would be very exposed on the counter."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "If we lose the ball" (present simple) / "we will be very exposed" (will + base verb). This is a real tactical risk — the first conditional is the right choice. A uses "will lose" in the if-clause — wrong. C uses the second conditional ("lost / would be") — suggesting this is unlikely or imaginary. But this is a genuine tactical risk — the first conditional correctly conveys that this is a real possibility.',
        },
        {
          customerLine: 'How do we make sure we are disciplined during the counter?',
          options: [
            '"If we will send too many players forward, we will leave ourselves exposed."',
            '"If we send too many players forward, we will leave ourselves exposed. We must always keep one midfielder back."',
            '"If we sent too many players forward, we would leave ourselves exposed."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "If we send too many players forward" (present simple) / "we will leave ourselves exposed" (will + base verb). It also adds the key tactical instruction: "keep one midfielder back." A uses "will send" in the if-clause — wrong. C uses the second conditional — but this is not an imaginary situation, it is a real tactical warning. First conditional = real plans and risks. Always.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes with the first conditional in this pre-match talk. Find them.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'If their full-backs push high, we will have space in behind — be ready to run.' },
        { speaker: 'Ronaldo', text: 'And if we will win the ball in our half, we need to release it forward immediately.' },
        { speaker: 'Sofia', text: 'If the midfielder gets the ball, I will go immediately — getting in behind is my job.' },
        { speaker: 'Coach Diallo', text: 'Exactly. And if we lose the ball in their half, everyone will recovers back instantly.' },
        { speaker: 'Ronaldo', text: 'What if they counter us? If they are numbers up, what do we do?' },
        { speaker: 'Coach Diallo', text: 'If they will be numbers up, we will need one defender to stay on their feet and delay. If we delay for ten seconds, our teammates will recover back.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'if we will win the ball in our half',
          correction: 'if we win the ball in our half',
          explanation: 'In the first conditional, the if-clause always uses the PRESENT SIMPLE — never "will." "If we will win" is wrong. Correct: "If we win the ball." Think of it this way: the "if" already tells us the situation is about the future/possible. Adding "will" is redundant and incorrect. Rule: if + present simple (no will). Main clause: will + base verb. Never swap them — never put "will" in the if-clause.',
        },
        {
          lineIndex: 3,
          incorrectText: 'everyone will recovers back instantly',
          correction: 'everyone will recover back instantly',
          explanation: '"Will recovers" is wrong — after "will," we always use the BASE FORM of the verb, never add -s or -ed. "Will + recover" (base form) not "will + recovers." The -s ending is for present simple third person (he/she/it recovers). After "will," the verb has no -s in any person: "I will recover / you will recover / he will recover / everyone will recover." The modal "will" strips the -s away.',
        },
        {
          lineIndex: 5,
          incorrectText: 'If they will be numbers up',
          correction: 'If they are numbers up',
          explanation: 'Again — "will" cannot be in the if-clause of a first conditional. "If they will be numbers up" = wrong. Correct: "If they are numbers up." Note that even the verb "be" follows this rule — "if they are" (present simple of "be"), not "if they will be." The second part of the sentence ("we will need") is correct — "will" belongs in the main clause.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the tactical briefing using first conditional sentences.",
      items: [
        {
          customerLine: 'Ronaldo: What is our plan if they defend deep and leave no space in behind?',
          salespersonStart: 'Coach Diallo: If they defend very deep, we will need to be patient and build from the back.',
          suggestedCompletion: 'If we rush forward too quickly, we will lose the ball and they will counter us. If we keep the ball and move them around, we will eventually create a gap. If a gap opens on the right, we will switch the play and overlap. If we get to the byline, we will cut back and someone will arrive in the penalty area. The key is: if we are disciplined and patient, the opportunity will come. Football rewards patience.',
        },
        {
          customerLine: 'Sofia: What should I do if I receive the ball in transition — should I shoot or wait for support?',
          salespersonStart: 'Coach Diallo: It depends on the situation. If you are one-on-one with the goalkeeper, you will shoot immediately.',
          suggestedCompletion: 'If you have a teammate in a better position, you will pass and support the run. If you slow down and wait, the defenders will recover back and the chance will be gone. The rule is simple: if you are in a scoring position, you will shoot. If you are not, you will find the teammate who is. Do not carry the ball when a quick pass will be more effective — if you release quickly, we will always have a better chance of scoring than if you hold onto it.',
        },
        {
          customerLine: 'Ronaldo: What is our biggest risk in transition today?',
          salespersonStart: 'Coach Diallo: Our biggest risk is if we lose the ball with too many players forward.',
          suggestedCompletion: 'If both midfielders break forward at the same time, we will have no cover in the middle. If they win the ball back quickly, they will be numbers up and we will be exposed. So the rule is: if one midfielder goes forward, the other will hold their position and protect the space in behind. If we are disciplined in transition, we will limit the danger. But if we are careless, they will punish us — and they will be clinical. Discipline in transition wins and loses matches.',
        },
        {
          customerLine: 'Sofia: What is the signal to start the counter-attack?',
          salespersonStart: 'Coach Diallo: There is no signal — if you win the ball, you go. No hesitation.',
          suggestedCompletion: 'If you win the ball in your own half and you see space in behind, you will release it immediately. If the striker is already running, the first pass will go to her. If the striker is not ready, you will carry the ball forward and wait for her to start her run. But if you slow down and wait, the chance will disappear — defenders recover very quickly. The rule is simple: if you see the counter, you take it. We will practise it in training until it becomes instinct.',
        },
      ],
    },
  },
};

import { Lesson } from '@/types/lesson';

export const trainingSessions: Lesson = {
  slug: 'training-sessions',
  title: 'Training Sessions',
  subtitle: 'Drills, rondos, small-sided games, cool-down, debrief',
  level: 'B1-B2',
  description: 'Learn the vocabulary for what happens at training — from warm-ups and drills to rondos, small-sided games, and the post-session debrief.',
  heroImage: '/images/training-sessions-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Frequency adverbs and time expressions',
    description: 'We use frequency adverbs (always, usually, often, sometimes, rarely, never) to describe how often something happens. Time expressions (every day, three times a week, once a month) give more specific information. In football, these are essential for describing training routines.',
    positivePattern: 'Frequency adverbs go BEFORE the main verb but AFTER "be": Subject + adverb + main verb / Subject + be + adverb.',
    positiveExample: '"They always warm up before training." / "We are usually on the pitch by 9am." / "She rarely misses a session."',
    negativePattern: 'Time expressions usually go at the beginning or end of a sentence — not in the middle.',
    negativeExample: 'RIGHT: "Every day, we start with a rondo." OR "We start with a rondo every day." / WRONG: "We every day start with a rondo."',
    positiveExamples: [
      { sentence: 'The team always does a warm-up before any drill — it is essential to avoid injury.', note: '("always" before main verb "does")' },
      { sentence: 'They usually have a debrief after training — the coach reviews the session.', note: '("usually" before main verb "have")' },
      { sentence: 'We train three times a week during the season — Tuesday, Thursday, and Friday.', note: '(time expression at the end)' },
      { sentence: 'The coach is rarely unhappy after a good rondo session.', note: '("rarely" after "is")' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "We every day do a rondo at the start of training."', note: '"Every day" must go at the START or END of the sentence, not in the middle.' },
      { sentence: 'RIGHT: "Every day, we do a rondo at the start of training."', note: 'Time expression at the beginning, followed by the main sentence.' },
    ],
  },

  vocabulary: [
    {
      word: 'DRILL',
      partOfSpeech: 'noun',
      definition: 'A specific exercise that players repeat many times to practise a skill — like passing, shooting, or defending.',
      example: 'The coach set up a passing drill — players practise the same movement over and over until it becomes automatic.',
      imageSlug: '/images/drill.png',
    },
    {
      word: 'RONDO',
      partOfSpeech: 'noun',
      definition: 'A training exercise where one or two players try to win the ball while the rest keep possession in a circle or square. It trains passing, movement, and pressing.',
      example: 'They start every session with a rondo — six players keep the ball while two try to win it. It gets everyone\'s touch going.',
      imageSlug: '/images/rondo.png',
    },
    {
      word: 'SMALL-SIDED GAME',
      partOfSpeech: 'noun',
      definition: 'A practice match with fewer players than a real game — like 4v4 or 7v7 on a smaller pitch. Players get more touches and decisions.',
      example: 'They finish training with a small-sided game — 6v6 on a half pitch. It is fast, intense, and competitive.',
      imageSlug: '/images/small-sided-game.png',
    },
    {
      word: 'DEBRIEF',
      partOfSpeech: 'noun',
      definition: 'A session at the end of training where the coach reviews what happened — what was good, what needs improvement.',
      example: 'The debrief lasted 15 minutes — the coach showed video clips of the passing drill and gave feedback to each player.',
      imageSlug: '/images/training-sessions-debrief.png',
    },
    {
      word: 'WARM-UP',
      partOfSpeech: 'noun',
      definition: 'A gentle exercise at the start of training — to prepare the body and reduce the risk of injury.',
      example: 'The warm-up includes light jogging, stretching, and some simple passing combinations — ten minutes before any intense work begins.',
      imageSlug: '/images/training-sessions-warm-up.png',
    },
    {
      word: 'COOL-DOWN',
      partOfSpeech: 'noun',
      definition: 'A gentle exercise at the end of training — to bring the heart rate down slowly and help the body recover.',
      example: 'The cool-down is just as important as the warm-up — players walk, stretch, and do light mobility work to help recovery.',
      imageSlug: '/images/cool-down.png',
    },
    {
      word: 'TACTICAL SHAPE',
      partOfSpeech: 'noun',
      definition: 'A training exercise that focuses on the team\'s organised structure — practising positions and movements without opposition.',
      example: 'Tuesday is always tactical shape day — the team practises their defensive organisation and attacking patterns without a ball at times.',
      imageSlug: '/images/tactical-shape.png',
    },
    {
      word: 'SET PIECE',
      partOfSpeech: 'noun',
      definition: 'A planned situation from a dead ball — corner kicks, free kicks, throw-ins. Teams practise these movements specifically.',
      example: 'They spend an hour on set pieces every Thursday — working on corner routines, free kick runs, and defensive organisation.',
      imageSlug: '/images/training-sessions-set-piece.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WARM UP',
      definition: 'To do gentle exercise at the start of training to prepare the body.',
      example: 'They always warm up for ten minutes before any intense work — it reduces the risk of injury significantly.',
      imageSlug: '/images/warm-up-pv.png',
    },
    {
      phrase: 'COOL DOWN',
      definition: 'To do gentle exercise at the end of training to bring the body back to its normal state.',
      example: 'They cool down with a slow jog and stretches — it helps the muscles recover and prevents soreness the next day.',
      imageSlug: '/images/cool-down-pv.png',
    },
    {
      phrase: 'WORK ON',
      definition: 'To practise and improve a specific skill or area of the game.',
      example: 'They are working on their defensive shape today — specifically how the back four moves together.',
      imageSlug: '/images/training-sessions-work-on.png',
    },
    {
      phrase: 'SET UP',
      definition: 'To prepare or organise something — to arrange a drill, a pitch, or a formation.',
      example: 'The assistant coach sets up the cones for the drill before the players arrive — making sure everything is ready.',
      imageSlug: '/images/training-sessions-set-up.png',
    },
    {
      phrase: 'RUN THROUGH',
      definition: 'To practise something from beginning to end — to go through a routine or movement.',
      example: 'They run through the corner kick routine three times — making sure everyone knows their position.',
      imageSlug: '/images/run-through.png',
    },
    {
      phrase: 'GIVE FEEDBACK',
      definition: 'To tell players what they did well and what to improve — after a drill, a game, or a session.',
      example: 'The coach gives feedback after every small-sided game — specific, individual comments on each player\'s performance.',
      imageSlug: '/images/give-feedback.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases used during training sessions by coaches and players.',
    items: [
      {
        cue: 'Bring it in!',
        meaning: 'Stop what you are doing and come together as a group — usually to receive instructions.',
        usage: 'The coach shouts "Bring it in!" to gather all players around them. This usually happens at the start of a session, between drills, or at the debrief. Players stop their individual work and come to the centre to listen. It is one of the most common training session phrases in English-speaking football.',
        imageSlug: 'otp-bring-it-in',
      },
      {
        cue: 'Again! From the top!',
        meaning: 'Repeat the drill from the beginning.',
        usage: 'Instruction from the coach to restart a drill — either because the players made a mistake or because they need more repetition. "From the top" = from the start. Drills often need many repetitions before the movement becomes automatic. Hearing "Again! From the top!" is very common in training.',
        imageSlug: 'otp-again-from-the-top',
      },
      {
        cue: 'Intensity! Work rate!',
        meaning: 'Train with more energy and effort — this is not intense enough.',
        usage: 'Shouted when the coach feels the session is too slow or easy. "Intensity" = energy and effort. "Work rate" = how hard each player is working. A good training session usually has high intensity — close to match conditions. "Intensity! Work rate!" is a reminder to push harder.',
        imageSlug: 'otp-intensity-work-rate',
      },
      {
        cue: 'Two minutes, water break.',
        meaning: 'Take a short rest and drink water.',
        usage: 'Instruction for a brief pause in training. Water breaks are important — especially in hot weather or intense sessions. "Two minutes" tells the players exactly how long they have. After the break, the session continues at the same intensity. Always drink water before you feel thirsty in training.',
        imageSlug: 'otp-two-minutes-water-break',
      },
      {
        cue: "That's the session — cool down and we'll debrief.",
        meaning: 'Training is finished — do the cool-down exercises, then we will have a review.',
        usage: 'End of session instruction. The coach announces the training is over and that there will be a cool-down followed by a debrief. The debrief is where the coach reviews the session, gives feedback, and previews the next training or match. This phrase marks the transition from hard work to reflection.',
        imageSlug: 'otp-thats-the-session',
      },
      {
        cue: 'Who goes in? Rotate!',
        meaning: 'Change the players in the middle of the rondo — the players who have been pressing should rotate out.',
        usage: 'Instruction during a rondo exercise. In a rondo, the players in the middle (who are trying to win the ball) rotate regularly — otherwise the same players are always doing the hard work. "Who goes in?" asks who is next to press. "Rotate!" is the instruction to change.',
        imageSlug: 'otp-who-goes-in-rotate',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Right — today\'s session. We always start with a [[warm-up:gentle exercise to prepare the body at the start of training]] — ten minutes. Then a [[rondo:a training exercise where players keep possession while one or two try to win the ball]]. We usually do the rondo for about fifteen minutes.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'We do the rondo every session — I love it. It gets your touch going and it is great for pressing and keeping possession.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. Then we work on our [[tactical shape:a training exercise focusing on the team\'s organised positions and movements]]. Today we are specifically working on our defensive [[set piece:a planned routine from a dead ball — corner kicks, free kicks]] organisation. We train set pieces twice a week — usually on Tuesdays and Thursdays.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Then the small-sided game — my favourite part. We sometimes split into two teams of seven and play on a half-pitch. It is very intense. Very competitive.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. After the [[small-sided game:a practice match with fewer players on a smaller pitch — players get more touches]], we always [[cool down:gentle exercise at the end of training to bring the body back to normal]] — ten minutes. Never skip the [[cool-down:same — gentle post-session exercise to help recovery]]. Then the [[debrief:a review session at the end where the coach gives feedback on the session]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'How often do we have a long debrief versus a short one?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Before a match, we usually have a short debrief — fifteen minutes. After a match, we sometimes have a longer review — up to 45 minutes with video. But we rarely do that more than once a week.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Do we ever have sessions with no [[drill:a specific exercise players repeat many times to practise a skill]]? Just a match?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Sometimes — the day before a match, we sometimes have a light session with just a rondo and a quick small-sided game. No heavy drills. The body needs rest.',
    },
  ],

  matchingExercise: [
    { word: 'DRILL', definition: 'A specific exercise players repeat many times to practise a skill' },
    { word: 'RONDO', definition: 'Players keep possession in a circle while one or two try to win the ball' },
    { word: 'SMALL-SIDED GAME', definition: 'A practice match with fewer players on a smaller pitch' },
    { word: 'DEBRIEF', definition: 'A review at the end of training where the coach gives feedback' },
    { word: 'WARM-UP', definition: 'Gentle exercise at the start of training to prepare the body' },
    { word: 'COOL-DOWN', definition: 'Gentle exercise at the end of training to help the body recover' },
    { word: 'SET PIECE', definition: 'A planned routine from a dead ball — corners, free kicks, throw-ins' },
    { word: 'TACTICAL SHAPE', definition: 'A training exercise focusing on the team\'s organised positions and movements' },
  ],

  fillBlankExercise: [
    { before: 'They', answer: 'always', after: 'warm up for ten minutes before any intense drill work.' },
    { before: 'We train', answer: 'three times a week', after: 'during the season — Tuesday, Thursday, and Friday.' },
    { before: 'The coach', answer: 'usually', after: 'gives feedback after the small-sided game — specific and individual.' },
    { before: '', answer: 'Every session', after: ', they start with a rondo to get the players\' touch going.' },
    { before: 'She', answer: 'rarely', after: 'misses a training session — her work rate is exceptional.' },
    { before: 'The', answer: 'debrief', after: 'lasted 45 minutes — the coach showed video clips and gave detailed feedback.' },
    { before: 'They practise set pieces', answer: 'twice a week', after: '— specifically corners and free kicks.' },
    { before: 'They', answer: 'sometimes', after: 'have a light session the day before a match — no heavy drills.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Where does a frequency adverb go in a sentence?',
      options: [
        'Always at the beginning of the sentence',
        'Before the main verb — but after "be"',
        'Always at the end of the sentence',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence is CORRECT?',
      options: [
        '"We every day do a rondo at the start of training."',
        '"Every day, we do a rondo at the start of training."',
        '"We do a rondo every day at of the start training."',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "rondo"?',
      options: [
        'A physical conditioning drill with sprint intervals',
        'A possession exercise where one or two players try to win the ball from the group',
        'A tactical walkthrough where players learn their positions',
      ],
      correctIndex: 1,
    },
    {
      question: '"She rarely misses a session." What does "rarely" mean here?',
      options: [
        'She almost never misses a session — she is almost always there',
        'She sometimes misses a session — about half the time',
        'She often misses sessions — it happens regularly',
      ],
      correctIndex: 0,
    },
    {
      question: 'Which sentence has the frequency adverb in the WRONG position?',
      options: [
        '"The coach usually gives feedback after the session."',
        '"They are always on the pitch by 9am."',
        '"Sometimes they have no drill — just a small-sided game."',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is the purpose of a "cool-down"?',
      options: [
        'To prepare the body before an intense session — reducing injury risk',
        'To bring the heart rate down slowly after training and help recovery',
        'A short break in the middle of training to drink water',
      ],
      correctIndex: 1,
    },
    {
      question: '"We train three times a week." What type of expression is "three times a week"?',
      options: [
        'A frequency adverb',
        'A time expression — specifying exactly how often',
        'A preposition of time',
      ],
      correctIndex: 1,
    },
    {
      question: 'What happens in a "debrief" after training?',
      options: [
        'Players do stretching and cool-down exercises',
        'The coach reviews the session, gives feedback, and previews the next match',
        'Players practise set pieces and tactical shape',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Put the frequency adverb or time expression in the correct position.',
    items: [
      {
        sentence: 'The team [always] _____ before the session with a ten-minute warm-up.',
        options: ['always prepares', 'prepares always', 'always to prepare'],
        correctIndex: 0,
        explanation: '"Always prepares" is correct. Frequency adverbs go BEFORE the main verb. "The team always prepares" — "always" before "prepares." "Prepares always" is wrong — do not put the adverb after the main verb in this type of sentence. "Always to prepare" is not grammatically correct here.',
      },
      {
        sentence: 'They [usually] are _____ ready to start the rondo within five minutes of arriving.',
        options: ['usually are', 'are usually', 'are always usually'],
        correctIndex: 1,
        explanation: '"Are usually" is correct. When the main verb is "be," the frequency adverb goes AFTER "be." "They are usually ready" — "usually" comes after "are." This is the key exception to remember: be + adverb (not adverb + be). "Usually are" is the wrong order. "Are always usually" puts two frequency adverbs together — not natural or correct.',
      },
      {
        sentence: '[Every Tuesday], _____ the team works on their set pieces for at least an hour.',
        options: ['Every Tuesday the team works on', 'Every Tuesday, the team works on', 'The team works every Tuesday on'],
        correctIndex: 1,
        explanation: '"Every Tuesday, the team works on" is correct. When a time expression comes at the beginning of a sentence, it is followed by a COMMA: "Every Tuesday, the team works on..." The comma separates the time expression from the main clause. "Every Tuesday the team works on" (no comma) is acceptable in informal writing but less correct. "The team works every Tuesday on" puts "every Tuesday" in the middle of the verb and object — wrong.',
      },
      {
        sentence: 'She [rarely] _____ the cool-down — she always stays for the full session.',
        options: ['skips rarely', 'rarely skips', 'is rarely skip'],
        correctIndex: 1,
        explanation: '"Rarely skips" is correct. "Rarely" is a frequency adverb and goes before the main verb "skips." "Skips rarely" — wrong position. "Is rarely skip" — wrong structure entirely. Remember: "rarely" and "never" go before the main verb (except "be"): "she rarely skips," "they rarely miss," "he never arrives late."',
      },
      {
        sentence: 'The coach _____ [three times a week] gives a short debrief during the season.',
        options: ['gives a short debrief three times a week', 'three times a week gives a short debrief', 'gives three times a week a short debrief'],
        correctIndex: 0,
        explanation: '"Gives a short debrief three times a week" is correct. Time expressions are most natural at the END of a sentence: "The coach gives a short debrief three times a week." Starting with "Three times a week, the coach gives a short debrief" (at the beginning) is also correct. Putting it in the middle — "gives three times a week a short debrief" — sounds very unnatural and splits the verb from its object incorrectly.',
      },
      {
        sentence: 'He [sometimes] _____ on set pieces for longer than planned — when the coach is not happy with the quality.',
        options: ['is sometimes working', 'sometimes works', 'works sometimes'],
        correctIndex: 1,
        explanation: '"Sometimes works" is correct. "Sometimes" goes before the main verb. "He sometimes works on set pieces" — correct position. "Is sometimes working" — this is the present continuous. We use the present simple with frequency adverbs (always, usually, often, sometimes, rarely, never) to describe regular habits or routines. "Works sometimes" puts the adverb in the wrong position.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Choose the best response — paying attention to frequency adverbs and time expressions.',
      items: [
        {
          customerLine: 'How often does your team train during the season?',
          options: [
            '"We train three times usually a week — Tuesdays, Thursdays, and Fridays."',
            '"We usually train three times a week during the season — Tuesdays, Thursdays, and Fridays. The day before a match, we sometimes have a lighter session."',
            '"Usually we train — three times a week, in the season on Tuesdays, Thursdays and Fridays."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "We usually train" — adverb before main verb. "Three times a week" at the end — correct position for a time expression. "Sometimes have a lighter session" — correct. A puts "usually" in the middle, between "train" and "three times" — wrong position. C has confused word order — "Usually we train" is possible at the start but then the rest of the sentence has poor structure.',
        },
        {
          customerLine: 'What is a typical training session structure?',
          options: [
            '"Every session, we always start with a warm-up, usually do a rondo, then work on specific drills, finish with a small-sided game, cool down, and sometimes have a debrief."',
            '"We every session always start with a warm-up, we usually do a rondo, then we work on specific drills."',
            '"We start always every session with a warm-up, a rondo usually, and then drills specific."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "Every session, we always start" — time expression at the beginning + comma, then adverb before main verb. "Usually do a rondo" — adverb before main verb. "Sometimes have a debrief" — adverb before main verb. B puts "every session" and "always" together in the middle — too crowded and wrong. C has wrong word order throughout ("start always" and "a rondo usually" and "drills specific" are all wrong).',
        },
        {
          customerLine: 'Why is the cool-down important in training?',
          options: [
            '"The cool-down is always important because it helps the body recover. We never skip it — the coach rarely allows it."',
            '"The cool-down is important always because it helps recover the body. We skip never it."',
            '"Always the cool-down is important because always it helps the body recover always."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "Is always important" — adverb after "is" (be + adverb rule). "Never skip it" — adverb before main verb "skip." "Rarely allows it" — adverb before main verb "allows." B has wrong order: "is important always" (adverb after adjective — wrong for "be + adjective") and "skip never it" (adverb between verb and object — wrong). C repeats "always" three times and in wrong positions.',
        },
        {
          customerLine: 'How often do you practise set pieces?',
          options: [
            '"We sometimes practise set pieces twice a week — especially corners and free kicks. Sometimes the coach adds an extra session before an important match."',
            '"We practise set pieces sometimes twice a week — and we sometimes add an extra session sometimes before an important match."',
            '"Twice a week sometimes we practise the set pieces — the corners and free kicks."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "We sometimes practise" — adverb before verb. "Twice a week" — time expression at the end, after the main clause. "Sometimes the coach adds" — adverb at the start of a new clause (also correct for "sometimes"). B puts "sometimes" in a strange position between "practise" and "twice" and then overuses it. C has confused word order and "the set pieces" sounds unnatural (usually just "set pieces").',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes with frequency adverbs and time expressions in this training discussion. Find them.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Right — every session, we always start with a warm-up. That never changes.' },
        { speaker: 'Sofia', text: 'Do we today a rondo before the drilling work? I usually enjoy starting with one.' },
        { speaker: 'Coach Diallo', text: 'Yes — we do a rondo today. After that, we are going to work on our defensive shape.' },
        { speaker: 'Ronaldo', text: 'And we the small-sided game will have at the end, as always?' },
        { speaker: 'Coach Diallo', text: 'Correct. We usually finish with a small-sided game. Then a cool-down — ten minutes.' },
        { speaker: 'Sofia', text: 'How long the debrief is usually today — short or long?' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Do we today a rondo before the drilling work?',
          correction: 'Do we do a rondo today before the drilling work?',
          explanation: 'The time expression "today" has been placed in the middle of the sentence, separating the subject ("we") from the verb ("do a rondo"). This is incorrect. Time expressions go at the BEGINNING or END of a sentence — not between the subject and the verb. Correct: "Do we do a rondo today?" (time expression at the end) or "Today, do we do a rondo?" (time expression at the beginning). Note: the verb "do" is also missing — "do we a rondo" needs the main verb.',
        },
        {
          lineIndex: 3,
          incorrectText: 'we the small-sided game will have at the end',
          correction: 'we will have the small-sided game at the end',
          explanation: 'The word order is wrong — "the small-sided game" (the object) has been placed between the subject "we" and the modal verb "will." In English, the word order is: Subject + verb (+ object). "We will have the small-sided game" is correct. "We the small-sided game will have" is wrong — never put the object before the verb. Time expression "at the end" correctly goes at the end of the sentence.',
        },
        {
          lineIndex: 5,
          incorrectText: 'How long the debrief is usually today',
          correction: 'How long is the debrief usually today?',
          explanation: 'In questions, the auxiliary verb comes before the subject: "How long IS the debrief..." not "How long the debrief is..." This is subject-auxiliary inversion — essential in English questions. Also, "usually" and "today" should not both be in this question as they create a slight conflict (usually = habitual; today = specific day). "How long is the debrief today?" or "How long is the debrief usually?" would each be cleaner.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the description of a training session — use frequency adverbs and time expressions correctly.",
      items: [
        {
          customerLine: 'Ronaldo: Can you describe a typical week of training during the season?',
          salespersonStart: 'Coach Diallo: Every week, we usually train on Tuesdays, Thursdays, and Fridays.',
          suggestedCompletion: 'Tuesday is always the hardest session — we usually work on defensive shape and then have a long small-sided game. Thursday is set piece day — we practise corners, free kicks, and throw-ins twice a week, always on Thursdays. Friday is the lightest session — we rarely do heavy physical work the day before a match. We always start every session with a warm-up rondo and we never skip the cool-down. The debrief happens after every session — sometimes short, sometimes longer depending on what happened.',
        },
        {
          customerLine: 'Sofia: Why do you always start with a rondo?',
          salespersonStart: 'Coach Diallo: We always start with a rondo because it combines technical and tactical work in a short time.',
          suggestedCompletion: 'Players touch the ball immediately — they rarely get a good feel for it just from jogging. The rondo trains passing, movement, and pressing at the same time. It is competitive, which always raises the energy levels before the main work begins. We usually do it for fifteen minutes — sometimes twenty if the intensity is good. The players love it — they are always more engaged in training when it starts with something competitive. I never start a session without it.',
        },
        {
          customerLine: 'Ronaldo: What does a debrief usually cover?',
          salespersonStart: 'Coach Diallo: A debrief usually covers three things — what was good, what needs to improve, and what we will focus on next.',
          suggestedCompletion: 'I always try to start with positive feedback — what the team did well. Then I sometimes show video clips of moments that need improvement. After that, I give individual feedback — specific comments for each player about what they should work on. I rarely make the debrief longer than 20 minutes — players switch off after that. The day before a match, the debrief is always short — I never want the players to feel overloaded with information. The best debriefs are clear, focused, and honest.',
        },
        {
          customerLine: 'Sofia: How do you keep training sessions interesting so players always give 100%?',
          salespersonStart: 'Coach Diallo: Variety is the key — I never do the same session twice in a row.',
          suggestedCompletion: 'Sometimes we focus entirely on physical work — sprint drills, running sessions. Sometimes the session is purely tactical with no ball. Usually, I mix both — technical drills, then small-sided games. I always explain why we are doing each exercise — players work harder when they understand the purpose. I rarely make players do the same drill for more than 20 minutes — attention levels drop quickly. Every week, I try to include one drill that the players have never seen before — a fresh challenge keeps everyone alert and engaged.',
        },
      ],
    },
  },
};

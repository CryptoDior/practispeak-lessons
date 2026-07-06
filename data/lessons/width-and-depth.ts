import { Lesson } from '@/types/lesson';

export const widthAndDepth: Lesson = {
  slug: 'width-and-depth',
  title: 'Width and Depth',
  subtitle: 'Stretching the play, overlaps, underlaps, fullback roles',
  level: 'B1-B2',
  description: 'Learn how teams use width and depth to create space and open up the opposition. From overlapping full-backs to underlapping runs — the vocabulary of attacking shape.',
  heroImage: '/images/width-and-depth-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Gerunds vs Infinitives — talking about football actions',
    description: 'In English, both the gerund (verb + -ing) and the infinitive (to + verb) can be used as the subject or object of a sentence — but different verbs require different forms. Some verbs are followed by a gerund, some by an infinitive, and some can take both.',
    positivePattern: 'Gerund (verb-ing) after: enjoy, love, hate, avoid, keep, consider, practise, involve. Infinitive (to + verb) after: want, need, decide, plan, choose, hope, manage, try (in some uses).',
    positiveExample: '"They enjoy creating width on both sides." (gerund after enjoy) / "They decided to push the full-backs forward." (infinitive after decided) / "Stretching the play opens up space." (gerund as subject)',
    negativePattern: 'Do NOT mix up the pattern — most errors come from choosing the wrong form after specific verbs.',
    negativeExample: 'WRONG: "They enjoy to create width." / RIGHT: "They enjoy creating width."  /  WRONG: "They need stretching the play." / RIGHT: "They need to stretch the play."',
    positiveExamples: [
      { sentence: 'Overlapping involves the full-back running beyond the winger on the outside.', note: '(gerund after "involves")' },
      { sentence: 'The winger decided to underlap — cutting inside to let the full-back overlap.', note: '(infinitive after "decided")' },
      { sentence: 'They avoid playing too narrow — they always want to use the full width of the pitch.', note: '(gerund after "avoid" / infinitive after "want to")' },
      { sentence: 'Stretching the play creates space in the middle — pulling defenders wide.', note: '(gerund as subject of the sentence)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "The full-back enjoys to overlap on the right side."', note: '"Enjoy" is always followed by a gerund — never an infinitive.' },
      { sentence: 'RIGHT: "The full-back enjoys overlapping on the right side."', note: '"Overlapping" — gerund (verb + -ing) after "enjoy."' },
    ],
  },

  vocabulary: [
    {
      word: 'WIDTH',
      partOfSpeech: 'noun',
      definition: 'Using the full left-to-right space of the pitch — spreading players out to force the opposition to defend a wider area.',
      example: 'They use width brilliantly — the wingers stay very wide to stretch the opposition and create gaps in the middle.',
      imageSlug: '/images/width.png',
    },
    {
      word: 'DEPTH',
      partOfSpeech: 'noun',
      definition: 'Using the full front-to-back space of the pitch — having players at different distances from goal to give more passing options.',
      example: 'Good depth means the striker is always in behind and the midfielder is available between the lines.',
      imageSlug: '/images/depth.png',
    },
    {
      word: 'OVERLAP',
      partOfSpeech: 'noun / verb',
      definition: 'When a full-back runs forward on the outside of the winger — going past them to receive the ball in a wide position.',
      example: 'The left-back makes a brilliant overlap — she runs beyond the winger and receives the ball near the byline.',
      imageSlug: '/images/overlap.png',
    },
    {
      word: 'UNDERLAP',
      partOfSpeech: 'noun / verb',
      definition: 'When a full-back cuts inside, running between the winger and the centre of the pitch — a run inside rather than outside.',
      example: 'The right-back underlaps as the winger goes to the byline — creating a 2v1 against the left-back.',
      imageSlug: '/images/width-and-depth-underlap.png',
    },
    {
      word: 'STRETCH',
      partOfSpeech: 'verb',
      definition: 'To force the opposition to defend a wider or deeper area — pulling them apart to create gaps.',
      example: 'The wide forwards stretch the defence by staying very wide — pulling the full-backs out and opening space in the middle.',
      imageSlug: '/images/width-and-depth-stretch.png',
    },
    {
      word: 'INVERTED WINGER',
      partOfSpeech: 'noun',
      definition: 'A winger who plays on the opposite side to their strong foot — cutting inside rather than going to the byline. A right-footed winger on the left, or left-footed on the right.',
      example: 'She is an inverted winger — she plays on the right but cuts inside onto her left foot to shoot or pass.',
      imageSlug: '/images/inverted-winger.png',
    },
    {
      word: 'BYLINE',
      partOfSpeech: 'noun',
      definition: 'The end line of the pitch — the line that runs along the goal line at each end. Getting to the byline means reaching the very edge of the pitch to cross the ball.',
      example: 'The winger reaches the byline and cuts the ball back to the striker at the penalty spot.',
      imageSlug: '/images/byline.png',
    },
    {
      word: 'CUTBACK',
      partOfSpeech: 'noun',
      definition: 'A pass played backward from near the byline to a player running into the penalty area — one of the most dangerous attacking moves.',
      example: 'The cutback from the byline found the midfielder arriving late — she scored with a first-time shot.',
      imageSlug: '/images/cutback.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'GET IN BEHIND',
      definition: 'To run past the defensive line and receive the ball in the space behind the defenders.',
      example: 'The striker is always trying to get in behind — she wants the ball played over the top for her to run onto.',
      imageSlug: '/images/width-and-depth-get-in-behind.png',
    },
    {
      phrase: 'CUT INSIDE',
      definition: 'To move from a wide position towards the centre of the pitch — usually done by an inverted winger.',
      example: 'The winger cuts inside onto her right foot and shoots — the full-back expected her to go wide but she went central.',
      imageSlug: '/images/cut-inside.png',
    },
    {
      phrase: 'PULL WIDE',
      definition: 'To move to a wide position on the pitch — creating space in the centre by drawing defenders out.',
      example: 'The winger pulls wide to drag the full-back with her — opening space in the middle for the overlapping run.',
      imageSlug: '/images/pull-wide.png',
    },
    {
      phrase: 'MAKE A RUN',
      definition: 'To move into space — to sprint into a position to receive a pass.',
      example: 'The full-back makes a run beyond the winger — timing the run perfectly to receive the ball in space.',
      imageSlug: '/images/width-and-depth-make-a-run.png',
    },
    {
      phrase: 'PLAY ONE-TWO',
      definition: 'A quick passing combination — passing to a teammate and immediately receiving the ball back.',
      example: 'They play a quick one-two to beat the press — pass, move, receive, gone. Very fast combination play.',
      imageSlug: '/images/play-one-two.png',
    },
    {
      phrase: 'WHIP IN',
      definition: 'To cross the ball with pace and bend — a fast, curling cross into the penalty area.',
      example: 'She reaches the byline and whips in a cross — the ball bends away from the goalkeeper and finds the striker.',
      imageSlug: '/images/whip-in.png',
    },
  ],

  onThePitch: {
    instructions: 'These are instructions and phrases used in attacking wide play and creating width.',
    items: [
      {
        cue: 'Stay wide!',
        meaning: 'Keep your position near the touchline — do not come inside.',
        usage: 'Instruction to a winger or wide player to remain wide even when they want to cut inside. Staying wide stretches the opposition defensive line — pulling their full-back out and opening space in the centre. If the winger comes inside too early, they take away the width the team needs. "Stay wide" is one of the most common instructions in modern football.',
        imageSlug: 'otp-stay-wide',
      },
      {
        cue: 'Overlap! Go!',
        meaning: 'Full-back — make your run beyond the winger now.',
        usage: 'Urgent instruction to the full-back to time their overlap run. "Overlap" means run on the outside of the winger — past them into the space near the byline. Timing is everything — if the full-back goes too early, the defender sees them and closes down. The instruction "Overlap! Go!" tells them the moment is right to make the run.',
        imageSlug: 'otp-overlap-go',
      },
      {
        cue: 'Cut it back!',
        meaning: 'Instead of crossing into the box, play the ball back toward the penalty spot.',
        usage: 'Used when a player reaches the byline. Rather than crossing into the air, they cut the ball back along the ground to a teammate arriving in the penalty area. A cutback is very dangerous — it is low, fast, and difficult for defenders to clear. "Cut it back" is the instruction that unlocks many goals.',
        imageSlug: 'otp-cut-it-back',
      },
      {
        cue: 'Get to the byline!',
        meaning: 'Push to the end line — do not stop short.',
        usage: 'Instruction to encourage a winger or full-back to drive all the way to the end line before crossing. Getting to the byline pulls defenders to the corner of the pitch — opening more space for the cutback. Many players stop short and cross from a less dangerous position. "Get to the byline" tells them to go all the way.',
        imageSlug: 'otp-get-to-the-byline',
      },
      {
        cue: "They're so wide — there's loads of space in behind.",
        meaning: 'The opposition has pushed wide defenders out — the space behind them is open for exploitation.',
        usage: 'An observation used when the opposition has committed players wide — leaving space behind them for a diagonal run or through ball. "Loads of space in behind" = lots of space behind the defensive line. This is the risk of defending very wide: you can be exposed by a run in behind or a ball over the top.',
        imageSlug: 'otp-theyre-so-wide',
      },
      {
        cue: 'Use the underlap!',
        meaning: 'Full-back — cut inside and run between the winger and the centre of the pitch.',
        usage: 'Used when the winger is going wide — instructing the full-back to run inside (underlap) instead of outside (overlap). An underlap is less common and harder to defend because it creates a threat in the central area. The combination of one player going wide and another underlapping creates a 2v1 against the nearest defender.',
        imageSlug: 'otp-use-the-underlap',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Today — [[width:using the full left-to-right space of the pitch — spreading players wide]] and [[depth:having players at different distances from goal for more passing options]]. Sofia — which do you prefer — [[overlap:when the full-back runs beyond the winger on the outside]] or [[underlap:when the full-back cuts inside, between the winger and the centre]]?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I enjoy creating the overlap — running beyond the winger gives you a crossing position near the [[byline:the end line of the pitch]]. But the underlap can be more dangerous because defenders do not expect it.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. "Enjoy creating" — gerund after "enjoy." Now Ronaldo — what does the [[inverted winger:a winger who plays on the opposite side to their stronger foot — cutting inside to shoot]] do differently from a traditional winger?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'A traditional winger tends to stay wide and get to the byline. An inverted winger prefers cutting inside — they want to shoot on their stronger foot. They avoid going to the byline.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: '"Prefers cutting" — gerund after "prefers." "Avoid going" — gerund after "avoid." "Wants to shoot" — infinitive after "wants." Your grammar is improving, Ronaldo. And what is the [[cutback:a pass played backward from near the byline to a player arriving in the box]]?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Instead of crossing into the air, you decide to play the ball back along the ground to a teammate arriving in the penalty area. Defenders hate defending cutbacks because the ball is low, fast, and played away from the goalkeeper.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: '"Decide to play" — infinitive after "decide." "Hate defending" — gerund after "hate." So what is our principle with width?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Stretching the play creates space. By keeping width, we force the defenders to choose — follow the winger and leave space in the middle, or stay narrow and let us [[whip in:to cross with pace and bend]] crosses from wide positions.',
    },
  ],

  matchingExercise: [
    { word: 'WIDTH', definition: 'Using the full left-to-right space — spreading players wide to force the opposition to defend a wider area' },
    { word: 'OVERLAP', definition: 'The full-back runs on the outside of the winger — past them into a wide crossing position' },
    { word: 'UNDERLAP', definition: 'The full-back cuts inside, running between the winger and the centre of the pitch' },
    { word: 'INVERTED WINGER', definition: 'A winger who plays on the opposite side to their strong foot — cutting inside to shoot' },
    { word: 'BYLINE', definition: 'The end line of the pitch — reaching it gives a crossing position from the corner area' },
    { word: 'CUTBACK', definition: 'A pass played backward from near the byline to a player arriving in the penalty area' },
    { word: 'STRETCH', definition: 'To force the opposition to defend a wider area — pulling them apart to create gaps' },
    { word: 'DEPTH', definition: 'Having players at different distances from goal to give more passing options' },
  ],

  fillBlankExercise: [
    { before: 'The team enjoys', answer: 'creating', after: 'width on both sides — keeping wingers wide to stretch the defence.' },
    { before: 'The left-back decided', answer: 'to overlap', after: 'beyond the winger and whip in a cross from the byline.' },
    { before: 'They avoid', answer: 'playing', after: 'too narrow — they always use the full width of the pitch.' },
    { before: 'The inverted winger prefers', answer: 'cutting', after: 'inside onto her stronger foot rather than going to the byline.' },
    { before: '', answer: 'Stretching', after: 'the play creates space in the middle by pulling defenders wide.' },
    { before: 'The full-back managed', answer: 'to reach', after: 'the byline and cut the ball back to the arriving striker.' },
    { before: 'The coach decided', answer: 'to use', after: 'an underlap combination — the winger goes wide, the full-back cuts inside.' },
    { before: 'The defenders hate', answer: 'defending', after: 'cutbacks because the ball is low, fast, and away from the goalkeeper.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which verb is correctly followed by a gerund?',
      options: [
        '"She decided creating width on the left."',
        '"She enjoys creating width on the left."',
        '"She wants creating width on the left."',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which verb is correctly followed by an infinitive?',
      options: [
        '"They enjoy to overlap on the right side."',
        '"They avoid to play too narrow."',
        '"They decided to push the full-backs higher."',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is an "overlap" in football?',
      options: [
        'When the winger cuts inside onto their stronger foot',
        'When the full-back runs on the outside of the winger — past them into a wide position',
        'When the full-back cuts inside between the winger and the centre',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is an "underlap"?',
      options: [
        'The full-back runs on the outside of the winger',
        'The full-back cuts inside — running between the winger and the centre',
        'The winger stays wide and crosses from the byline',
      ],
      correctIndex: 1,
    },
    {
      question: '"Stretching the play creates space in the middle." What grammar form is "Stretching" here?',
      options: [
        'A present participle in a continuous tense',
        'A gerund — used as the subject of the sentence',
        'An adjective describing "the play"',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "cutback"?',
      options: [
        'A cross played high into the penalty area from the byline',
        'A pass played backward from near the byline to a player arriving in the box',
        'A long switch pass from one side to the other',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does an inverted winger typically do?',
      options: [
        'Stay very wide and get to the byline to cross',
        'Overlap with the full-back to create width',
        'Cut inside onto their stronger foot to shoot or pass centrally',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which sentence is CORRECT?',
      options: [
        '"They practise to create overlaps every training session."',
        '"They practise creating overlaps every training session."',
        '"They practise the create overlaps every training session."',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct form — gerund (verb-ing) or infinitive (to + verb).',
    items: [
      {
        sentence: 'The full-back enjoys _____ on the right side — it is her favourite run in the team.',
        options: ['to overlap', 'overlapping', 'to overlapping'],
        correctIndex: 1,
        explanation: '"Overlapping" is correct — gerund after "enjoy." The verb "enjoy" is always followed by a gerund (verb + -ing), never an infinitive. Pattern: enjoy + verb-ing. Other verbs that follow this pattern: love (also takes gerund), hate (also takes gerund), avoid, practise, keep, consider. "She enjoys overlapping" = correct. "She enjoys to overlap" = wrong.',
      },
      {
        sentence: 'The winger decided _____ inside rather than going to the byline.',
        options: ['cutting', 'to cut', 'to cutting'],
        correctIndex: 1,
        explanation: '"To cut" is correct — infinitive after "decide." The verb "decide" is always followed by an infinitive (to + base verb), never a gerund. Pattern: decide + to + base verb. Other verbs that follow this pattern: want, need, plan, choose, hope, manage, refuse. "She decided to cut inside" = correct. "She decided cutting inside" = wrong.',
      },
      {
        sentence: '_____ the play pulls defenders wide and opens space in the centre.',
        options: ['To stretch', 'Stretching', 'Stretch'],
        correctIndex: 1,
        explanation: '"Stretching" is correct — gerund as the subject of the sentence. Both gerunds and infinitives can be used as subjects, but gerunds are more natural in this construction. "Stretching the play pulls defenders wide" = natural, conversational. "To stretch the play pulls defenders wide" is possible but sounds more formal. When describing a general principle or truth in football, the gerund as subject is the more common and natural choice.',
      },
      {
        sentence: 'They avoid _____ too narrow — they always want to use the full width of the pitch.',
        options: ['to play', 'play', 'playing'],
        correctIndex: 2,
        explanation: '"Playing" is correct — gerund after "avoid." The verb "avoid" is ALWAYS followed by a gerund — never an infinitive. Pattern: avoid + verb-ing. "They avoid playing too narrow" = correct. "They avoid to play too narrow" = wrong. Note the second part: "want to use" — correct, because "want" takes an infinitive. In one sentence, you can have both patterns: "avoid + gerund" and "want + infinitive."',
      },
      {
        sentence: 'The coach practises _____ the overlap combination every training session.',
        options: ['to run', 'running', 'run'],
        correctIndex: 1,
        explanation: '"Running" is correct — gerund after "practise." The verb "practise" (British English) or "practice" (American English, when used as a verb) is always followed by a gerund. Pattern: practise + verb-ing. "The coach practises running the overlap" = correct. "The coach practises to run the overlap" = wrong. Practise = always gerund. This is a common error for many learners who want to use the infinitive.',
      },
      {
        sentence: 'The team managed _____ the byline twice in the first half but did not score.',
        options: ['reaching', 'to reach', 'to reaching'],
        correctIndex: 1,
        explanation: '"To reach" is correct — infinitive after "manage." The verb "manage" is always followed by an infinitive. Pattern: manage + to + base verb. "They managed to reach the byline" = correct. "They managed reaching the byline" = wrong. "Manage to + verb" usually implies the action was difficult — it took effort to succeed. Compare: "She managed to get to the byline" (it was difficult but she did it).',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Choose the best response — paying attention to gerunds and infinitives.',
      items: [
        {
          customerLine: 'What is the difference between an overlap and an underlap?',
          options: [
            '"Overlap involves to run on the outside of the winger. Underlap involves to cut inside."',
            '"Overlapping involves running on the outside of the winger. Underlapping involves cutting inside — between the winger and the centre."',
            '"The overlap is when the full-back likes go outside. The underlap is when they prefer go inside."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Overlapping involves running" and "underlapping involves cutting" — gerund after "involves." A incorrectly uses infinitives after "involves": "involves to run / to cut" are wrong. C is missing the infinitive marker "to": "likes to go / prefer to go" need "to." B is grammatically precise and clearly explains the tactical difference.',
        },
        {
          customerLine: 'Why do teams use inverted wingers?',
          options: [
            '"Teams tend to use inverted wingers because they enjoy cutting inside to shoot on their stronger foot — this creates a direct threat on goal."',
            '"Teams tend using inverted wingers because they enjoy to cut inside to shoot on their stronger foot."',
            '"Teams tend to use inverted wingers because they enjoy cut inside to shoot on their stronger foot."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "Tend to use" (infinitive after "tend to"), "enjoy cutting" (gerund after "enjoy"). B is wrong — "tend using" (should be "tend to use") and "enjoy to cut" (should be "enjoy cutting"). C is wrong — "enjoy cut" (must be "enjoy cutting"). Only A has both verb patterns correct.',
        },
        {
          customerLine: 'How do you coach a full-back to time the overlap?',
          options: [
            '"I tell them avoiding go too early — they need to wait for the right moment to make their run."',
            '"I tell them to avoid going too early — they need to wait for the right moment to make their run."',
            '"I tell them to avoid to go too early — they need wait for the right moment."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Tell them to avoid" (infinitive after "tell") + "avoid going" (gerund after "avoid") + "need to wait" (infinitive after "need"). Three correct verb patterns in one sentence. A uses "avoiding go" (wrong after "tell them") and "go" (no "to" before it). C uses "avoid to go" (wrong — "avoid" takes gerund, not infinitive) and "need wait" (missing "to").',
        },
        {
          customerLine: 'When should a winger decide to cut inside versus staying wide?',
          options: [
            '"They should decide cut inside when their full-back is overlapping — and they should consider staying wide when the full-back is not supporting."',
            '"They should decide to cut inside when their full-back is overlapping — and they should consider staying wide when the full-back is not in support."',
            '"They should decide to cut inside when their full-back is overlapping — and they should consider to stay wide when the full-back is not in support."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Decide to cut" (infinitive after "decide") and "consider staying" (gerund after "consider") — both correct. A uses "decide cut" (missing "to") — wrong. C uses "consider to stay" — wrong, "consider" takes a gerund: "consider staying." This is one of the most common errors — "consider" looks similar to "decide" but takes a different form.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes with gerunds and infinitives in this tactical discussion. Find them.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'We practise to create overlaps every session — the timing of the run is everything.' },
        { speaker: 'Sofia', text: 'I enjoy overlapping on the left — running beyond the winger and whipping in a cross.' },
        { speaker: 'Coach Diallo', text: 'Good. And the inverted winger — she tends cutting inside rather than staying wide.' },
        { speaker: 'Ronaldo', text: 'She avoids to go to the byline — she prefers shooting from the inside-left position on her stronger foot.' },
        { speaker: 'Coach Diallo', text: 'Correct. And remember — stretching the play creates space. Never avoid to use width.' },
        { speaker: 'Sofia', text: 'We need to stay wide even when it is tempting to come inside too early.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'We practise to create overlaps every session',
          correction: 'We practise creating overlaps every session',
          explanation: '"Practise" is always followed by a gerund (verb-ing) — never an infinitive. "Practise to create" is wrong. Correct: "practise creating." This is a very common error. "Practise" = always gerund. Think of it as: when you practise something, you do it repeatedly — and in English, repeated actions after "practise" take -ing. Other verbs that always take gerund: avoid, enjoy, consider, involve, keep. These NEVER take an infinitive.',
        },
        {
          lineIndex: 2,
          incorrectText: 'she tends cutting inside',
          correction: 'she tends to cut inside',
          explanation: '"Tend" is always followed by an infinitive (to + verb) — never a gerund. "Tends cutting" is wrong. Correct: "tends to cut." The verb "tend to" means something usually or typically happens — it is a pattern. "She tends to cut inside" = she usually cuts inside. Other verbs that always take infinitive: decide, want, need, plan, choose, manage, agree, refuse. These NEVER take a gerund.',
        },
        {
          lineIndex: 3,
          incorrectText: 'She avoids to go to the byline',
          correction: 'She avoids going to the byline',
          explanation: '"Avoid" is always followed by a gerund — never an infinitive. "Avoids to go" is wrong. Correct: "avoids going." Compare lines 2 and 3: "tends to cut" (tend = infinitive) vs "avoids going" (avoid = gerund). This is the classic confusion — two verbs with similar meaning but different forms. Also note: the fifth line has "avoid to use" which should be "avoid using" — the same mistake repeated.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the coach's explanation — use gerunds and infinitives correctly.",
      items: [
        {
          customerLine: 'Ronaldo: How do you coach a winger to decide between cutting inside and staying wide?',
          salespersonStart: 'Coach Diallo: I tell them to read the situation — to look at where the full-back is before deciding.',
          suggestedCompletion: 'If the full-back is overlapping, the winger should consider staying wide to create space — then cut inside once the overlap has drawn the defender. If the full-back is not supporting, the winger needs to decide to stay wide themselves and provide the width. I practise creating this combination in training constantly — because good timing makes overlapping and underlapping devastating. The winger must avoid committing too early and enjoy reading the game.',
        },
        {
          customerLine: 'Sofia: What is the best way to use an inverted winger in a 4-3-3?',
          salespersonStart: 'Coach Diallo: In a 4-3-3, the inverted winger tends to play wide on the opposite side to their strong foot.',
          suggestedCompletion: 'So a right-footed player plays on the left — enjoying cutting inside onto their right foot to shoot or pass centrally. The left-back needs to overlap beyond them to provide the width — otherwise the team risks playing too narrow. The combination involves the winger cutting inside while the full-back overlaps outside — creating a 2v1 in a wide area. The team should practise running this combination until it becomes automatic. The key is avoiding getting predictable — sometimes the winger should consider staying wide to keep the defender guessing.',
        },
        {
          customerLine: 'Ronaldo: How important is the cutback in modern football?',
          salespersonStart: 'Coach Diallo: The cutback is one of the most effective ways to score — and many teams practise creating it every day.',
          suggestedCompletion: 'When a player manages to reach the byline, the instinct is to cross into the air. But consider playing the ball back along the ground instead — defenders hate defending cutbacks because the ball is moving away from them. The attacker arriving in the penalty area tends to have more time and space on a cutback. Teams should avoid crossing high if they can choose to cut it back. Practising the movement — the winger reaching the byline, the midfielder timing the run, the striker arriving late — creates goals that look easy but involve a lot of work.',
        },
        {
          customerLine: 'Sofia: How do you use width against a team that plays a narrow 4-4-2?',
          salespersonStart: 'Coach Diallo: Against a narrow 4-4-2, stretching the play wide is the most effective tactic.',
          suggestedCompletion: 'You need to keep your wingers wide — their full-backs will struggle to decide whether to follow them or stay compact. Enjoy exploiting the space between their full-back and centre-back by overlapping into that channel. The midfield should consider switching the ball quickly — moving it from side to side before the narrow 4-4-2 can shift across. Avoid playing into the congested middle where they are very compact. Instead, practise using the wings to stretch them and then cutting inside once the defenders have been pulled wide. The goal is to force them to choose — and punish them for whichever choice they make.',
        },
      ],
    },
  },
};

import { Lesson } from '@/types/lesson';

export const formations: Lesson = {
  slug: 'formations',
  title: 'Formations',
  subtitle: '4-4-2, 4-3-3 — reading formations and comparing playing styles',
  level: 'A2',
  description: 'Learn how to read and say formations — 4-4-2, 4-3-3, 5-4-1 — understand what they mean, and practise comparing teams and tactics using comparatives.',
  heroImage: '/images/formations-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Comparatives — comparing formations and playing styles',
    description: 'We use comparatives to describe how two things are different. Short adjectives add -er (deeper, wider, stronger). Longer adjectives use "more" (more attacking, more defensive, more flexible).',
    positivePattern: 'Subject + IS + adjective-er / more + adjective + THAN',
    positiveExample: '"A 4-3-3 is more attacking than a 5-4-1."',
    negativePattern: 'Subject + IS NOT AS + adjective + AS',
    negativeExample: '"A 5-4-1 is not as attacking as a 4-3-3."',
    positiveExamples: [
      { sentence: 'A 4-4-2 is wider than a 4-3-3 in midfield.', note: '(wide → wider)' },
      { sentence: 'A 5-4-1 is more defensive than a 4-3-3.', note: '(more + adjective)' },
      { sentence: 'A 4-3-3 is more fluid than a traditional 4-4-2.', note: '(more + adjective)' },
      { sentence: 'Three central midfielders give more control than two.', note: '(more + noun)' },
    ],
    negativeExamples: [
      { sentence: 'A 5-4-1 is not as aggressive as a 4-3-3 in attack.', note: '(not as + adjective + as)' },
      { sentence: 'A 4-4-2 is not as flexible as a 4-3-3.', note: '(not as + adjective + as)' },
    ],
  },

  vocabulary: [
    {
      word: 'FORMATION',
      partOfSpeech: 'noun',
      definition: 'The tactical shape of a team — shown as three numbers representing defenders, midfielders, and attackers.',
      example: 'The team set up in a 4-4-2 formation — four defenders, four midfielders, two strikers.',
      imageSlug: '/images/formations-formation.png',
    },
    {
      word: 'MIDFIELDER',
      partOfSpeech: 'noun',
      definition: 'A player in the middle of the pitch — linking defence and attack.',
      example: 'The midfielder connected the defence and the forwards — the engine of the team.',
      imageSlug: '/images/formations-midfielder.png',
    },
    {
      word: 'WINGER',
      partOfSpeech: 'noun',
      definition: 'An attacking player who operates on the wide sides of the pitch.',
      example: 'The winger drove forward from the right side — fast and direct.',
      imageSlug: '/images/formations-winger.png',
    },
    {
      word: 'HOLDING',
      partOfSpeech: 'adjective',
      definition: 'Describing a defensive midfielder who stays back to protect the defence and win the ball.',
      example: 'The holding midfielder stayed back while the others pushed forward — excellent discipline.',
      imageSlug: '/images/holding-midfielder.png',
    },
    {
      word: 'ATTACKING',
      partOfSpeech: 'adjective',
      definition: 'Describing a player or system focused on scoring goals — more offensive than defensive.',
      example: 'It was an attacking 4-3-3 — the wide forwards pressed high and joined the attack.',
      imageSlug: '/images/attacking-shape.png',
    },
    {
      word: 'DEFENSIVE',
      partOfSpeech: 'adjective',
      definition: 'Describing a player or system focused on stopping goals — more concerned with organisation than attack.',
      example: 'They set up in a defensive 5-4-1 — hard to break down, difficult to play against.',
      imageSlug: '/images/defensive-shape.png',
    },
    {
      word: 'SHAPE',
      partOfSpeech: 'noun',
      definition: 'How a team is organised positionally — their structure and layout on the pitch.',
      example: 'They lost their shape in the second half — players were out of position.',
      imageSlug: '/images/formations-shape.png',
    },
    {
      word: 'COMPACT',
      partOfSpeech: 'adjective',
      definition: 'When a team stays close together in a tight defensive shape — few gaps between the lines.',
      example: 'They were incredibly compact — there was no space to play through them.',
      imageSlug: '/images/formations-compact.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'SET UP IN A',
      definition: 'To choose and organise a specific formation before or during a match.',
      example: 'They set up in a 4-3-3 — three attackers pressing the opposition high.',
      imageSlug: '/images/set-up-in-a.png',
    },
    {
      phrase: 'PRESS HIGH',
      definition: 'To move the defensive and midfield lines far forward — putting pressure on the opposition in their own half.',
      example: 'They pressed high and won the ball in the opponent\'s half — dangerous and effective.',
      imageSlug: '/images/formations-press-high.png',
    },
    {
      phrase: 'SIT DEEP',
      definition: 'To drop the defensive and midfield lines back toward your own goal — defending in a low block.',
      example: 'They sat deep and defended well — letting the opposition have possession but keeping them out.',
      imageSlug: '/images/sit-deep.png',
    },
    {
      phrase: 'PLAY WIDE',
      definition: 'To use the full width of the pitch — stretching the opposition.',
      example: 'They played wide — the wingers pushed to the touchlines and created space in the middle.',
      imageSlug: '/images/play-wide.png',
    },
    {
      phrase: 'PACK THE MIDFIELD',
      definition: 'To use many midfielders — controlling the central areas of the pitch.',
      example: 'They packed the midfield with five players — no space to pass through the middle.',
      imageSlug: '/images/pack-the-midfield.png',
    },
    {
      phrase: 'OVERLOAD THE WING',
      definition: 'To send multiple players to one side of the pitch — creating a numerical advantage in that area.',
      example: 'They overloaded the left wing with three players — the right back had nobody to help him.',
      imageSlug: '/images/overload-the-wing.png',
    },
  ],

  onThePitch: {
    instructions: 'These are tactical instructions coaches shout about formation, shape, and positioning. You\'ll hear them in every training session and match.',
    items: [
      {
        cue: 'Hold your shape!',
        meaning: 'Stay in your position — don\'t move out of the formation.',
        usage: 'Shouted by the captain or coach when players are getting disorganised. Every player must stay in their designated position — especially when the team is without the ball. Losing shape creates gaps.',
        imageSlug: 'otp-hold-your-shape',
      },
      {
        cue: 'Push up!',
        meaning: 'Move the defensive line forward — get closer to the midfield.',
        usage: 'Shouted when defenders are too deep and leaving too much space between the defensive and midfield lines. Moving up keeps the team compact. "Push up!" means the whole back line moves forward together.',
        imageSlug: 'otp-push-up',
      },
      {
        cue: 'Sit deeper!',
        meaning: 'Drop back — give yourself more defensive cover.',
        usage: 'Shouted by a coach or captain when a player or line is too far forward — leaving space behind them. "Sit deeper" means move back and reduce the gap behind you.',
        imageSlug: 'otp-sit-deeper',
      },
      {
        cue: 'Get wider!',
        meaning: 'Move to the side — use more of the pitch.',
        usage: 'Shouted to a winger or full-back who is too central. By going wider, the player stretches the opposition and creates space in the middle for other players. Width is essential in any attacking system.',
        imageSlug: 'otp-get-wider',
      },
      {
        cue: 'Stay compact!',
        meaning: 'Keep close together — don\'t let gaps open up between the lines.',
        usage: 'Shouted when defending — especially against a team with wide players. Staying compact means the team is tight and organised with no space to play through. The opposite of compact is "open" or "stretched."',
        imageSlug: 'otp-stay-compact-formation',
      },
      {
        cue: 'Switch the shape!',
        meaning: 'We\'re changing the formation — everyone adjust.',
        usage: 'Shouted by the coach during the match when the formation changes — often when a goal is scored or conceded. Players need to quickly understand their new role in the new system.',
        imageSlug: 'otp-switch-the-shape',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Sofia — how do you read a [[formation:the tactical shape of a team — shown as three numbers]]?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The three numbers show defenders, midfielders, and attackers. A [[4-4-2:four defenders, four midfielders, two strikers]] means four defenders, four midfielders, two strikers. Always back to front.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. And how is a 4-3-3 different? Compare them.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'A [[4-3-3:four defenders, three midfielders, three attackers]] is more [[attacking:focused on scoring — more offensive]] than a 4-4-2. It has three forwards instead of two — but only three midfielders, so the midfield is smaller.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. A 4-4-2 is wider in [[midfield:the middle area of the pitch]] — more compact. A 4-3-3 has more forwards but needs the wide forwards to work hard. What about a 5-4-1?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'A 5-4-1 is much more [[defensive:focused on stopping goals]] — five defenders! It is not as [[attacking:offensive]] as a 4-3-3. It is harder to score from, but harder to score against.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'And what does [[compact:when a team stays close together with few gaps]] mean for a formation?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The team is close together — no big gaps between the lines. A 5-4-1 is more compact than a 4-3-3. A 4-3-3 [[presses:applies pressure high up the pitch]] higher — so there is more space behind the defenders.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. And what is a [[holding:a defensive midfielder who stays back]] midfielder — how does this role work in different formations?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'In a 4-3-3, one of the three midfielders is the holding midfielder — they stay back and protect the defence. In a 4-4-2, the two central midfielders share this role. A holding midfielder is more defensive than an attacking midfielder.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. And [[shape:how a team is organised positionally]]? What happens when a team loses its shape?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Players are out of position — there are gaps. The opposition can exploit the space. Losing shape is one of the most dangerous things in football — even if your formation is good on paper.',
    },
  ],

  matchingExercise: [
    { word: 'FORMATION', definition: 'The tactical shape — three numbers showing defenders, midfielders, attackers' },
    { word: 'MIDFIELDER', definition: 'A player in the middle linking defence and attack' },
    { word: 'WINGER', definition: 'An attacking player operating on the wide sides of the pitch' },
    { word: 'HOLDING', definition: 'A defensive midfielder who stays back to protect the defence' },
    { word: 'ATTACKING', definition: 'Focused on scoring goals — more offensive than defensive' },
    { word: 'DEFENSIVE', definition: 'Focused on stopping goals — more organised and deep' },
    { word: 'SHAPE', definition: 'How a team is organised positionally — their structure on the pitch' },
    { word: 'COMPACT', definition: 'When a team stays close together with few gaps between the lines' },
  ],

  fillBlankExercise: [
    { before: 'They set up in a', answer: '4-3-3', after: '— four defenders, three midfielders, three attackers.' },
    { before: 'A 5-4-1 is more', answer: 'defensive', after: 'than a 4-3-3 — five defenders make it hard to break down.' },
    { before: 'A 4-3-3 is more', answer: 'attacking', after: 'than a 5-4-1 — three forwards instead of one.' },
    { before: 'They were incredibly', answer: 'compact', after: '— no space between the lines at all.' },
    { before: 'The', answer: 'holding midfielder', after: 'stayed back while the others pushed forward.' },
    { before: 'They lost their', answer: 'shape', after: 'in the second half — players were out of position.' },
    { before: 'They', answer: 'packed the midfield', after: 'with five players — no way through the centre.' },
    { before: 'A 4-4-2 is', answer: 'wider', after: 'in midfield than a 4-3-3 — more players across the middle.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'How do you read a formation like 4-3-3?',
      options: [
        'Attackers, midfielders, defenders — front to back',
        'Defenders, midfielders, attackers — back to front',
        'It changes depending on whether the team is attacking or defending',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which formation is more attacking — 4-3-3 or 5-4-1?',
      options: ['5-4-1 — it has more players in midfield', '4-3-3 — it has three forwards instead of one', 'They are equally attacking'],
      correctIndex: 1,
    },
    {
      question: 'Which comparative is correct?',
      options: [
        '"A 5-4-1 is more defensive that a 4-3-3."',
        '"A 5-4-1 is more defensive than a 4-3-3."',
        '"A 5-4-1 is defensiver than a 4-3-3."',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does a "holding midfielder" do?',
      options: [
        'Holds the ball and dribbles past defenders',
        'Stays back to protect the defence and win the ball in midfield',
        'Pushes forward to join the attack',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "compact" mean for a team\'s shape?',
      options: [
        'The team is spread wide across the pitch',
        'The team stays close together with no big gaps between the lines',
        'The team plays with many attackers',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "overload the wing" mean?',
      options: [
        'To press high with your wingers in the opponent\'s half',
        'To send multiple players to one side — creating a numerical advantage there',
        'To put the ball out of play on the wing',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses "not as...as" correctly?',
      options: [
        '"A 5-4-1 is not as attacking as a 4-3-3."',
        '"A 5-4-1 is not more attacking as a 4-3-3."',
        '"A 5-4-1 is not as attacking than a 4-3-3."',
      ],
      correctIndex: 0,
    },
    {
      question: 'What happens when a team "loses its shape"?',
      options: [
        'They score from a set piece',
        'They change formation at half time',
        'Players are out of position — gaps appear that the opposition can exploit',
      ],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using comparatives correctly. Choose the right option.',
    items: [
      {
        sentence: 'A 4-3-3 is _____ (attacking) than a 5-4-1.',
        options: ['more attacking', 'attackinger', 'most attacking'],
        correctIndex: 0,
        explanation: '"More attacking" is correct. For adjectives of two or more syllables, use "more" + adjective. "Attackinger" is not a real word. "Most attacking" is a superlative — not a comparative.',
      },
      {
        sentence: 'A 5-4-1 is _____ (defensive) than a 4-4-2.',
        options: ['defensiver', 'more defensive', 'most defensive'],
        correctIndex: 1,
        explanation: '"More defensive" is correct. Long adjectives use "more" for comparatives. "Defensiver" is not correct English. "Most defensive" is a superlative (the most defensive of all).',
      },
      {
        sentence: 'Three central midfielders give _____ (much) control than two.',
        options: ['more', 'most', 'many'],
        correctIndex: 0,
        explanation: '"More" is correct. The comparative of "much" is "more." We use "more" before uncountable nouns like "control." "Most" is superlative. "Many" is for countable nouns.',
      },
      {
        sentence: 'A 4-3-3 is not as _____ (compact) as a 5-4-1 when defending.',
        options: ['compacter', 'compact', 'more compact'],
        correctIndex: 1,
        explanation: '"Compact" is correct. In "not as...as" structures, use the base adjective — not the comparative form. "Not as compact as" is the correct structure. "Compacter" and "more compact" would be used in a different structure.',
      },
      {
        sentence: 'The 4-4-2 is _____ (wide) in midfield than the 4-3-3.',
        options: ['more wide', 'widest', 'wider'],
        correctIndex: 2,
        explanation: '"Wider" is correct. Short adjectives (one syllable) add -er to make the comparative. "Wide → wider." "More wide" is not standard English. "Widest" is superlative.',
      },
      {
        sentence: 'A 4-3-3 that presses high is _____ (risky) than one that sits deep.',
        options: ['riskier', 'more riskier', 'most risky'],
        correctIndex: 0,
        explanation: '"Riskier" is correct. "Risky" is a two-syllable adjective ending in -y — change -y to -i and add -er: risky → riskier. "More riskier" is a double comparative — incorrect. "Most risky" is superlative.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Decide which formation fits each situation best — A, B, or C.',
      items: [
        {
          customerLine: 'Your team is playing against a very attacking opponent. You need to defend first.',
          options: [
            '4-3-3 — three forwards to press them high.',
            '5-4-1 — five defenders to keep them out and one striker to counter-attack.',
            '4-4-2 — two strikers to score while they attack.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Against a very attacking opponent, a 5-4-1 provides more defensive cover — five defenders and four midfielders means only one striker up front. The team can defend deep and counter-attack with the single striker. A 4-3-3 (A) is too attacking and creates space behind. A 4-4-2 (C) is more balanced but less defensive.',
        },
        {
          customerLine: 'Your team needs to win — you\'re losing 0-1 with 30 minutes left.',
          options: [
            '5-4-1 — stay compact and wait for a counter-attack.',
            '4-3-3 — three forwards to create as many chances as possible.',
            '5-3-2 — change to five defenders but add a second striker.',
          ],
          correctIndex: 1,
          explanation: 'B is correct when you need to score. A 4-3-3 gives the most attacking options with three forwards. When losing, you need to take more risks and create more chances. A 5-4-1 (A) is too defensive when you need to score. A 5-3-2 (C) is an unusual formation and still has five defenders.',
        },
        {
          customerLine: 'Your team is winning 1-0 away from home with 15 minutes left. The other team is pushing forward.',
          options: [
            '4-3-3 — attack them with three forwards and stretch the pitch.',
            '5-4-1 — add a fifth defender and protect the lead.',
            '4-4-2 — keep the same formation and run the clock down.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Winning 1-0 away with 15 minutes left is the classic moment to become more defensive. A 5-4-1 adds an extra defender and gives more protection. The single striker can hold the ball up and run time. Attacking with a 4-3-3 (A) is too risky. Keeping 4-4-2 (C) is reasonable but a 5-4-1 is more secure.',
        },
        {
          customerLine: 'You want to dominate possession and control the midfield against a team that plays direct.',
          options: [
            '4-4-2 — two banks of four provide control.',
            '4-3-3 — three midfielders, one holding and two attacking — dominate the middle.',
            '3-5-2 — five midfielders for maximum central control.',
          ],
          correctIndex: 2,
          explanation: 'C is the best answer. A 3-5-2 has five midfielders — the maximum central control of any common formation. Against a direct team, five midfielders pack the centre and stop direct balls. The three defenders handle the strikers. The 4-4-2 (A) is solid but less dominant centrally. The 4-3-3 (B) has only three midfielders.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes using comparatives in this tactical conversation. Find them as a group.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Which formation is more attacking — a 4-3-3 or a 5-4-1?' },
        { speaker: 'Ronaldo', text: 'A 4-3-3 is more attacking than a 5-4-1 — it has three forwards.' },
        { speaker: 'Sofia', text: 'And a 5-4-1 is more defensiver than a 4-3-3.' },
        { speaker: 'Coach Diallo', text: 'Good. Is a 4-3-3 as compact as a 4-4-2 when defending?' },
        { speaker: 'Ronaldo', text: 'No — a 4-3-3 is not as compact than a 4-4-2. There is more space behind the pressing line.' },
        { speaker: 'Sofia', text: 'And three midfielders give lesser control than four in the centre of the pitch.' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'a 5-4-1 is more defensiver than a 4-3-3',
          correction: 'a 5-4-1 is more defensive than a 4-3-3',
          explanation: '"More defensiver" is a double comparative — wrong. Use EITHER "more" + adjective OR adjective + "-er" — not both. Long adjectives like "defensive" use "more defensive." Never "more defensiver."',
        },
        {
          lineIndex: 4,
          incorrectText: 'a 4-3-3 is not as compact than a 4-4-2',
          correction: 'a 4-3-3 is not as compact as a 4-4-2',
          explanation: 'The "not as...as" structure always uses "as" twice. "Not as compact than" is incorrect — "than" is used with comparative adjectives (bigger than, more attacking than), not with "as...as."',
        },
        {
          lineIndex: 5,
          incorrectText: 'three midfielders give lesser control than four',
          correction: 'three midfielders give less control than four',
          explanation: '"Less" is the comparative of "little" for uncountable nouns like "control." "Lesser" exists but is formal and is not normally used this way. The correct and natural form is "less control."',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using formation vocabulary and comparatives from this lesson.',
      items: [
        {
          customerLine: 'Ronaldo: Why do some coaches prefer a 4-3-3 over a 4-4-2?',
          salespersonStart: 'Coach Diallo: A 4-3-3 is more flexible and more attacking.',
          suggestedCompletion: 'With three forwards, you can press higher and create more overloads in wide areas. The wide forwards also help defensively — they press the opposition full-backs. A 4-4-2 is more compact and gives more midfield cover, but it can be harder to create chances against a well-organised defence. The 4-3-3 is more fluid and unpredictable.',
        },
        {
          customerLine: 'Sofia: When is a 5-4-1 better than a 4-3-3?',
          salespersonStart: 'Coach Diallo: When you need to defend a lead or play against a stronger team.',
          suggestedCompletion: 'A 5-4-1 is not as attacking as a 4-3-3 — but it is much more defensively solid. Five defenders make it almost impossible to find space wide. Four midfielders mean there is no room through the centre either. The single striker holds the ball up and waits for the team to build. In a cup match or a game against a better team, the 5-4-1 is sometimes the smarter choice.',
        },
        {
          customerLine: 'Ronaldo: Can a team change formation during a match?',
          salespersonStart: 'Coach Diallo: Yes — and the best coaches do it all the time.',
          suggestedCompletion: 'A team might start in a 4-4-2 and move to a 5-4-1 when they score. Or they might switch from a 5-4-1 to a 4-3-3 when they are losing and need a goal. Substitutions help — bringing on a winger changes the shape. The team needs to respond quickly and communicate clearly. Players who understand formations can adapt faster than teams who just follow fixed instructions.',
        },
        {
          customerLine: 'Sofia: What does "pressing high" mean tactically — and which formations do it best?',
          salespersonStart: 'Coach Diallo: Pressing high means the whole team pushes their defensive and midfield lines very far forward.',
          suggestedCompletion: 'The idea is to win the ball in the opponent\'s half — before they can build an attack. A 4-3-3 is better for pressing high than a 5-4-1 because the three forwards can start the press immediately. The risk is the space behind the defensive line — if the opposition plays a long ball over the top, the defenders are exposed. High pressing is more exciting and more aggressive, but it is also riskier than sitting deep.',
        },
      ],
    },
  },
};

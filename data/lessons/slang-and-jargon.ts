import { Lesson } from '../../types/lesson';

export const slangAndJargon: Lesson = {
  slug: 'slang-and-jargon',
  title: 'Slang and Jargon',
  subtitle: 'Unit 3 — Football Idioms & Culture',
  level: 'B1-B2',
  description: 'Football has its own rich vocabulary of slang — words and phrases used by fans, players, and commentators that you won\'t find in a standard dictionary. This lesson explores the colourful informal language of the game.',
  heroImage: '/images/slang-and-jargon.png',

  warmUp: {
    questions: [
      'Do you use any slang words when you talk about football with friends? What are they?',
      'What makes a shot a "worldie"? Can you describe the best goal you have ever seen?',
      'Why do you think football has so much unique slang compared to other sports?',
    ],
  },

  grammarFocus: {
    title: 'Register: Formal, Informal, and Slang',
    explanation: 'Register refers to the level of formality in language. Football vocabulary operates across a wide register — from formal match reports ("the striker converted from close range") to commentary ("he\'s absolutely buried that") to slang ("what a worldie"). Slang is informal language used within a specific group or culture. It is expressive and creative, but using it in the wrong context can sound unprofessional or confusing. Understanding register helps you code-switch — choosing the right language for the right situation.',
    examples: [
      {
        sentence: 'Formal: "The goalkeeper was unable to prevent the ball from entering the net."',
        label: 'match report register',
      },
      {
        sentence: 'Informal: "The keeper had absolutely no chance — it was a screamer."',
        label: 'commentary / fan register',
      },
      {
        sentence: 'Slang: "Absolute worldie — the keeper was never saving that."',
        label: 'fan / social media register',
      },
    ],
    tip: 'Slang changes fast. Terms like "worldie" and "tekkers" are widely understood now, but slang can date quickly. Be aware of where you heard a word and who uses it — regional slang may not be understood outside a specific community.',
  },

  vocabulary: [
    {
      word: 'WORLDIE',
      partOfSpeech: 'noun',
      definition: 'An exceptional, spectacular goal or performance — something so good it seems almost unbelievable.',
      example: '"That free-kick was an absolute worldie — 30 yards out, top corner, keeper didn\'t move."',
      imageSlug: '/images/worldie.png',
    },
    {
      word: 'NUTMEG',
      partOfSpeech: 'noun / verb',
      definition: 'To pass the ball through an opponent\'s legs — or the act of doing so. One of the most humiliating skills in football.',
      example: '"He nutmegged the centre-back and left him looking absolutely ridiculous in front of his own fans."',
      imageSlug: '/images/nutmeg.png',
    },
    {
      word: 'BANGER',
      partOfSpeech: 'noun',
      definition: 'A powerful, spectacular goal — usually struck with great force or from distance.',
      example: '"That\'s an absolute banger — he hit it on the half-volley from 25 yards and it flew into the top corner."',
      imageSlug: '/images/banger.png',
    },
    {
      word: 'PARK THE BUS',
      partOfSpeech: 'phrase',
      definition: 'To defend with a large number of players, prioritising not conceding over attacking — playing extremely defensively.',
      example: '"They parked the bus from the first whistle — all ten outfield players behind the ball. It was awful to watch."',
      imageSlug: '/images/park-the-bus.png',
    },
    {
      word: 'ROUTE ONE',
      partOfSpeech: 'noun',
      definition: 'A direct, long-ball style of play — kicking the ball from defence straight towards the striker, bypassing the midfield.',
      example: '"Their tactics were pure route one — the goalkeeper would kick long and the target man would flick on. Not pretty, but effective."',
      imageSlug: '/images/route-one.png',
    },
    {
      word: 'HOWLER',
      partOfSpeech: 'noun',
      definition: 'A terrible mistake by a goalkeeper or defender — an error so bad it is almost embarrassing.',
      example: '"The goalkeeper dropped an absolute howler — he fumbled a routine cross straight into his own net."',
      imageSlug: '/images/howler.png',
    },
    {
      word: 'SCREAMER',
      partOfSpeech: 'noun',
      definition: 'A very powerful, impressive shot or goal — usually struck hard and accurately from distance.',
      example: '"He let fly from the edge of the area — absolute screamer, never giving the keeper a chance."',
      imageSlug: '/images/screamer.png',
    },
    {
      word: 'TEKKERS',
      partOfSpeech: 'noun',
      definition: 'Technical skill — used informally to describe a player\'s ability to control, pass, or dribble with exceptional quality.',
      example: '"The way he controlled that on his chest and volleyed it first time — pure tekkers."',
      imageSlug: '/images/tekkers.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PULL OFF',
      definition: 'To succeed in doing something difficult or unlikely — completing a challenging move or result.',
      example: '"She pulled off a stunning nutmeg in the final minute to set up the winning goal."',
      inAction: 'Used when someone achieves something impressive or difficult.',
      register: 'informal',
      inContext: 'Sport, everyday conversation, informal reporting.',
    },
    {
      phrase: 'GIVE AWAY',
      definition: 'To concede possession, a foul, or a penalty — losing something through a mistake.',
      example: '"He gave away a stupid foul just outside the area and they scored directly from the free-kick."',
      inAction: 'Used for unnecessary errors that hand an advantage to the opponent.',
      register: 'neutral',
      inContext: 'Sport, games, business negotiations.',
    },
    {
      phrase: 'SHOW OFF',
      definition: 'To display your skills in an obvious or exaggerated way — performing for the crowd or to humiliate an opponent.',
      example: '"He was showing off — nutmeg after nutmeg, rainbow flicks. The crowd loved it."',
      inAction: 'Used when someone performs skills in an attention-seeking way.',
      register: 'informal',
      inContext: 'Sport, everyday conversation, social media.',
    },
    {
      phrase: 'LUMP IT',
      definition: 'To kick the ball long without precision — hoofing it forward without real intention.',
      example: '"Under pressure, he just lumped it forward — no thought, no control. Classic route one."',
      inAction: 'Used to describe unsubtle, direct play.',
      register: 'informal / critical',
      inContext: 'Football commentary, fan discussion.',
    },
    {
      phrase: 'TURN ON',
      definition: 'To suddenly produce high-quality, exciting football — to switch into a higher gear.',
      example: '"They turned it on in the second half — two goals in ten minutes and the game was over."',
      inAction: 'Used when a team or player raises their level of performance suddenly.',
      register: 'informal',
      inContext: 'Commentary, fan conversation, match reports.',
    },
    {
      phrase: 'BOOT OUT',
      definition: 'To kick the ball out of play — or to remove someone forcefully from a position.',
      example: '"The defender just booted it out for a throw-in — no attempt to play football at all."',
      inAction: 'Used for direct, uncontrolled clearances, or removal from a situation.',
      register: 'informal',
      inContext: 'Football, informal conversation.',
    },
  ],

  onThePitch: [
    {
      id: 'ootpSAJ1',
      title: 'Slang Glossary',
      image: '/images/ootp-slang-glossary.png',
      description: 'You are writing a beginner\'s guide to football slang for an international audience.',
      prompt: 'Write a short glossary entry (2-3 sentences each) for three of the vocabulary words from this lesson. Write as if your reader has never heard the term before — explain the meaning and give one example of when you might hear it.',
    },
    {
      id: 'ootpSAJ2',
      title: 'Formal vs Slang',
      image: '/images/ootp-formal-slang.png',
      description: 'A journalist writes the same goal description in two different registers.',
      prompt: 'Write two descriptions of the same goal: (1) in formal match report language, (2) in fan slang. Use at least three vocabulary words from this lesson in your slang version.',
    },
    {
      id: 'ootpSAJ3',
      title: 'The Right Register',
      image: '/images/ootp-right-register.png',
      description: 'Students decide which register is appropriate in different contexts.',
      prompt: 'For each situation, say whether you would use formal football language, informal fan language, or slang: (1) writing a match report for a newspaper, (2) messaging your friend about last night\'s game, (3) writing a post on a football fan forum, (4) presenting a tactical analysis to a coaching staff.',
    },
    {
      id: 'ootpSAJ4',
      title: 'Defend the Style',
      image: '/images/ootp-defend-style.png',
      description: 'A route-one manager defends their approach to a journalist.',
      prompt: 'You are the manager of a team that plays "route one" football. A journalist asks: "Isn\'t this style embarrassing to watch?" Write a three or four sentence response defending your approach — use at least two vocabulary items from this lesson.',
    },
    {
      id: 'ootpSAJ5',
      title: 'The Worst Goal Ever',
      image: '/images/ootp-worst-goal.png',
      description: 'A commentator describes a goalkeeper\'s howler using informal language.',
      prompt: 'You are a commentator. Describe a goalkeeper howler using at least three terms from this lesson — "howler", "screamer" (from the attacker\'s perspective), and one phrasal verb. Keep it lively and informal.',
    },
    {
      id: 'ootpSAJ6',
      title: 'Slang Bingo',
      image: '/images/ootp-slang-bingo.png',
      description: 'Students work in pairs to use all eight vocabulary words naturally in conversation.',
      prompt: 'In pairs: have a conversation about last weekend\'s football. Your goal is to use all eight vocabulary words from this lesson naturally before the conversation ends. Mark each one off as you use it.',
    },
  ],

  videos: [],

  dialogue: {
    title: 'Did You See That?',
    context: 'Two fans discuss a match during half-time, using informal football language throughout.',
    lines: [
      { speaker: 'Kai', text: 'Did you see that nutmeg in the first minute? Absolute tekkers — the defender didn\'t know where to look.' },
      { speaker: 'Priya', text: 'I know! And then the keeper dropped an absolute howler from the corner. I still can\'t believe it.' },
      { speaker: 'Kai', text: 'It\'s a worldie and then a howler in the same ten minutes. Football is mad.' },
      { speaker: 'Priya', text: 'The second goal was a screamer though — he hit it on the turn from 25 yards. No keeper saves that.' },
      { speaker: 'Kai', text: 'I thought they\'d park the bus after going two-nil up. You know what they\'re like.' },
      { speaker: 'Priya', text: 'They nearly did. Route one from the goalkeeper, big man flicks on — not exactly beautiful football.' },
      { speaker: 'Kai', text: 'But it works. And to be fair, that banger in the 40th minute was anything but route one.' },
      { speaker: 'Priya', text: 'True. Let\'s see if they can keep the tekkers up in the second half or if they just lump it.' },
    ],
  },

  matchingExercise: {
    title: 'Match the Slang to its Meaning',
    instructions: 'Match each word or phrase with its correct meaning.',
    pairs: [
      { term: 'Worldie', definition: 'An exceptional, spectacular goal or performance' },
      { term: 'Nutmeg', definition: 'To pass the ball between an opponent\'s legs' },
      { term: 'Banger', definition: 'A powerful, impressive goal, usually struck hard' },
      { term: 'Park the bus', definition: 'To defend with many players, playing extremely defensively' },
      { term: 'Route one', definition: 'A direct long-ball style bypassing the midfield' },
      { term: 'Howler', definition: 'A terrible, embarrassing mistake by a goalkeeper or defender' },
      { term: 'Screamer', definition: 'A very powerful, impressive shot struck from distance' },
      { term: 'Tekkers', definition: 'Exceptional technical skill in controlling or passing the ball' },
    ],
  },

  fillBlankExercise: {
    title: 'Complete the Commentary',
    instructions: 'Fill in the blank with the correct slang word or phrase from the box.',
    wordBank: ['worldie', 'nutmeg', 'banger', 'park the bus', 'route one', 'howler', 'screamer', 'tekkers'],
    items: [
      { sentence: 'The goalkeeper went to catch the cross and completely fluffed it — an absolute ___ that gifted them the goal.', answer: 'howler' },
      { sentence: 'He flicked it through the defender\'s legs — a perfect ___ that left the crowd speechless.', answer: 'nutmeg' },
      { sentence: 'That free-kick was a ___ — top corner from 35 yards, not a thing the keeper could do.', answer: 'worldie' },
      { sentence: 'They were happy with a point and decided to ___ for the last 20 minutes — nine men behind the ball.', answer: 'park the bus' },
      { sentence: 'It wasn\'t pretty — just ___ from the goalkeeper, long ball to the striker, flick on, tap in.', answer: 'route one' },
      { sentence: 'Look at the control, the turn, the finish — that is pure ___ from start to finish.', answer: 'tekkers' },
      { sentence: 'He hit it sweetly on the half-volley from outside the area — an absolute ___ into the bottom corner.', answer: 'banger' },
      { sentence: 'That volley was a ___ — 30 yards out, no bounce, straight into the top corner. Unbelievable.', answer: 'screamer' },
    ],
  },

  multipleChoiceExercise: {
    title: 'Choose the Correct Word',
    instructions: 'Choose the word that best fits the context.',
    items: [
      {
        question: '"The defender didn\'t see it coming — the winger put it straight through his legs." What skill is described?',
        options: ['A nutmeg', 'A banger', 'A worldie', 'A screamer'],
        answer: 'A nutmeg',
      },
      {
        question: '"They had nine players behind the ball for the entire second half." What style is this called?',
        options: ['Parking the bus', 'Route one', 'Playing on the front foot', 'Pressing high'],
        answer: 'Parking the bus',
      },
      {
        question: '"The goalkeeper fumbled a simple shot straight into his own net." What word describes this?',
        options: ['A howler', 'A worldie', 'A screamer', 'Tekkers'],
        answer: 'A howler',
      },
      {
        question: '"The way he controlled the long ball, turned, and volleyed it — that was special." What term fits?',
        options: ['Pure tekkers', 'Route one', 'A howler', 'Parking the bus'],
        answer: 'Pure tekkers',
      },
      {
        question: 'Which word describes a goal so spectacular it seems almost impossible?',
        options: ['Worldie', 'Howler', 'Nutmeg', 'Route one'],
        answer: 'Worldie',
      },
      {
        question: '"The goalkeeper kicked it long every time — no short passing, just big clearances." What style is this?',
        options: ['Route one', 'Parking the bus', 'High press', 'Tiki-taka'],
        answer: 'Route one',
      },
      {
        question: '"He struck it so hard from distance that it nearly broke the net." What word fits?',
        options: ['Screamer', 'Nutmeg', 'Tekkers', 'Howler'],
        answer: 'Screamer',
      },
      {
        question: '"That banger was something else — he barely looked up before hitting it." What does "banger" mean?',
        options: ['A powerful, impressive goal', 'A defensive mistake', 'A long clearance', 'A dribbling skill'],
        answer: 'A powerful, impressive goal',
      },
    ],
  },

  completeSentenceExercise: {
    title: 'Complete the Sentence — Grammar Focus',
    instructions: 'Complete each sentence using the correct form of the word or phrase.',
    items: [
      {
        sentence: 'He ___ (nutmeg) the defender so cleanly that the crowd gasped before erupting.',
        answer: 'nutmegged',
        explanation: '"Nutmeg" works as both a noun and a verb. As a verb, it follows standard past tense rules: nutmeg → nutmegged. You can say "he nutmegged" just like "he tackled" or "he fouled".',
      },
      {
        sentence: 'The manager decided to ___ (park) the bus once they went two goals ahead.',
        answer: 'park',
        explanation: '"Park the bus" is a fixed idiom used as a verb phrase. After "decided to", the infinitive form is required: "decided to park the bus".',
      },
      {
        sentence: 'That was an absolute ___ — I\'ve never seen a goalkeeper drop a cross that badly.',
        answer: 'howler',
        explanation: '"A howler" is a countable noun used with an indefinite article. "An absolute howler" is the natural intensified form — "absolute" adds emphasis.',
      },
      {
        sentence: 'The way he controlled it and ___ (volley) from 25 yards — that\'s just pure tekkers.',
        answer: 'volleyed',
        explanation: 'In a list of past actions ("controlled ... and volleyed"), both verbs should be in the same tense. Simple past "volleyed" matches "controlled".',
      },
      {
        sentence: 'They ___ (play) route one all game — not a single short pass from the goalkeeper.',
        answer: 'played',
        explanation: 'Simple past — "played route one" — describing a completed tactical approach across the whole match. "Route one" is a noun phrase used as a direct object.',
      },
      {
        sentence: 'I\'ve never ___ (see) tekkers like that — the control, the turn, the finish was breathtaking.',
        answer: 'seen',
        explanation: '"Have never seen" — present perfect with "never" to express a life experience. "See" is an irregular verb: see → saw → seen. After "have/has", the past participle form "seen" is required.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      title: 'Respond to the Moment',
      instructions: 'Choose the most natural response for each football moment.',
      items: [
        {
          prompt: 'Your friend just described a goal where the striker hit it on the volley from 30 yards. How do you react?',
          options: [
            '"That\'s an absolute screamer — no keeper saves that."',
            '"That\'s a howler from the striker."',
            '"He really parked the bus on that one."',
            '"Classic route one football."',
          ],
          answer: '"That\'s an absolute screamer — no keeper saves that."',
        },
        {
          prompt: 'A defender lets the ball go between his legs. A fan next to you shouts — what do they say?',
          options: [
            '"Nutmeg! Did you see that?"',
            '"What a worldie from the defender!"',
            '"He parked the bus on his own legs!"',
            '"Pure tekkers from the defender."',
          ],
          answer: '"Nutmeg! Did you see that?"',
        },
        {
          prompt: 'The goalkeeper drops an easy cross. How do you describe it to your friend after the match?',
          options: [
            '"Absolute howler — he had no business dropping that."',
            '"He played it route one."',
            '"He pulled off a worldie."',
            '"What a screamer from the goalkeeper."',
          ],
          answer: '"Absolute howler — he had no business dropping that."',
        },
        {
          prompt: 'A team goes two-nil up and starts defending very deep with all their players. How do you describe this?',
          options: [
            '"They\'ve completely parked the bus."',
            '"They\'re hitting worldies left and right."',
            '"Pure tekkers — they\'re playing beautiful football."',
            '"They\'re going route one now."',
          ],
          answer: '"They\'ve completely parked the bus."',
        },
      ],
    },

    spotTheMistake: {
      title: 'Spot the Mistake',
      instructions: 'The dialogue below contains three errors — wrong slang, incorrect usage, or grammar mistakes. Find and correct them.',
      dialogue: [
        { speaker: 'Luke', text: 'That goal in the second half was an absolute worldie — I\'ve never seen anything like it.' },
        { speaker: 'Mia', text: 'The screamer through his legs was incredible too — did you see the defender\'s face?' },
        { speaker: 'Luke', text: 'Pure tekkers. And then they just parked the bus immediately after going three-nil up.' },
        { speaker: 'Mia', text: 'I thought the goalkeeper was going to make a howler on that long ball.' },
        { speaker: 'Luke', text: 'He nearly did. And their style of play was very route ones — just lumping it forward every time.' },
        { speaker: 'Mia', text: 'I know. Shame. They have the players to do better than just banger it long.' },
      ],
      errors: [
        { line: 2, original: 'The screamer through his legs', correction: 'The nutmeg through his legs', explanation: 'A "screamer" is a powerful shot. When the ball goes between a defender\'s legs, that is a "nutmeg". These are two different terms.' },
        { line: 5, original: 'very route ones', correction: 'very route one', explanation: '"Route one" is a fixed singular noun phrase used as an adjective — it does not take a plural form. "Their style was route one" or "very route one" is correct.' },
        { line: 6, original: 'banger it long', correction: 'lump it long', explanation: '"Banger" is a noun (a powerful shot), not a verb. The correct verb for kicking the ball long without precision is "lump it".' },
      ],
    },

    finishTheLine: {
      title: 'Finish the Line',
      instructions: 'Complete each sentence naturally using slang or informal football language.',
      items: [
        {
          prompt: 'The winger danced past three defenders and slipped it through the last one\'s legs — that was...',
          exampleAnswer: 'a nutmeg to remember — pure tekkers from start to finish.',
        },
        {
          prompt: 'They went in at half-time three-nil up and came out in the second half just trying to...',
          exampleAnswer: 'park the bus — nine players behind the ball from the first minute.',
        },
        {
          prompt: 'The goalkeeper went to catch the corner and completely misjudged it — an absolute...',
          exampleAnswer: 'howler that handed them a goal they did nothing to earn.',
        },
        {
          prompt: 'He hit it from the halfway line on the volley and it flew into the top corner — a genuine...',
          exampleAnswer: 'worldie — the kind of goal you only see once or twice in your lifetime.',
        },
      ],
    },
  },
};

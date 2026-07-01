import { Lesson } from '@/types/lesson';

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
    focusTitle: 'Register: Formal, Informal, and Slang',
    description: 'Register refers to the level of formality in language. Football vocabulary operates across a wide register — from formal match reports ("the striker converted from close range") to commentary ("he\'s absolutely buried that") to slang ("what a worldie"). Slang is informal language used within a specific group or culture. It is expressive and creative, but using it in the wrong context can sound unprofessional or confusing. Understanding register helps you code-switch — choosing the right language for the right situation. Slang changes fast. Terms like "worldie" and "tekkers" are widely understood now, but slang can date quickly. Be aware of where you heard a word and who uses it — regional slang may not be understood outside a specific community.',
    positiveExamples: [
      {
        sentence: 'Formal: "The goalkeeper was unable to prevent the ball from entering the net."',
        note: 'match report register',
      },
      {
        sentence: 'Informal: "The keeper had absolutely no chance — it was a screamer."',
        note: 'commentary / fan register',
      },
      {
        sentence: 'Slang: "Absolute worldie — the keeper was never saving that."',
        note: 'fan / social media register',
      },
    ],
    negativeExamples: [],
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
      imageSlug: '/images/pull-off.png',
},
    {
      phrase: 'GIVE AWAY',
      definition: 'To concede possession, a foul, or a penalty — losing something through a mistake.',
      example: '"He gave away a stupid foul just outside the area and they scored directly from the free-kick."',
      imageSlug: '/images/give-away.png',
},
    {
      phrase: 'SHOW OFF',
      definition: 'To display your skills in an obvious or exaggerated way — performing for the crowd or to humiliate an opponent.',
      example: '"He was showing off — nutmeg after nutmeg, rainbow flicks. The crowd loved it."',
      imageSlug: '/images/show-off.png',
},
    {
      phrase: 'LUMP IT',
      definition: 'To kick the ball long without precision — hoofing it forward without real intention.',
      example: '"Under pressure, he just lumped it forward — no thought, no control. Classic route one."',
      imageSlug: '/images/lump-it.png',
},
    {
      phrase: 'TURN ON',
      definition: 'To suddenly produce high-quality, exciting football — to switch into a higher gear.',
      example: '"They turned it on in the second half — two goals in ten minutes and the game was over."',
      imageSlug: '/images/turn-on.png',
},
    {
      phrase: 'BOOT OUT',
      definition: 'To kick the ball out of play — or to remove someone forcefully from a position.',
      example: '"The defender just booted it out for a throw-in — no attempt to play football at all."',
      imageSlug: '/images/boot-out.png',
},
  ],

  onThePitch: {
    instructions: 'This is how slang and jargon sound in real time — the raw, unfiltered language of footballers during training and matches.',
    items: [
      {
        cue: '"Nutmeg!" — the skill and the shout',
        meaning: 'Passing the ball through an opponent\'s legs. The word is shouted immediately when it happens — both by the player who does it and by watching teammates. It is one of the most humiliating things that can happen on a pitch.',
        usage: '"NUTMEG! Did you see that? He\'s been done!" The player who is nutmegged is mocked immediately: "You got megged! Get him back!" In training it creates uproar — laughter, celebration, teasing. A nutmeg in a match is a highlight reel moment. The target of a nutmeg is expected to respond — to chase and win the ball back immediately or face ongoing teasing. "He nutmegged the full-back in front of 60,000 people — the crowd erupted."',
        imageSlug: 'otp-nutmeg',
      },
      {
        cue: '"Worldie!" — reacting to something extraordinary',
        meaning: 'Short for "world-class" — a goal or piece of skill so exceptional it belongs in another category. Shouted in the moment of witnessing something remarkable.',
        usage: '"WORLDIE! Absolute worldie!" — screamed by teammates and commentators when a player scores from 35 yards into the top corner. On the pitch, players who score worldies are immediately mobbed. "That\'s a worldie — he\'s hit that perfectly." In training: "Did you see that finish in training? Worldie." The word elevates the moment — not just a good goal but something beyond normal expectations. Used as both noun ("What a worldie!") and adjective ("That was a worldie finish").',
        imageSlug: 'otp-worldie',
      },
      {
        cue: '"Howler!" — the language of the serious mistake',
        meaning: 'A howler is a catastrophic, unforgivable error — most often a goalkeeper mistake that leads directly to a goal. The word is both cruel and specific.',
        usage: '"The keeper dropped it — absolute howler! He\'ll be having nightmares about that." On the pitch after a howler, teammates react in two ways: some immediately rush to console the player, others look away in disbelief. Good team culture means the first response is always support, even if internal frustration exists. "He made a howler but the captain went straight to him — arm around the shoulder, \'forget it, next one.\'" A howler is a test of team culture as much as an individual mistake.',
        imageSlug: 'otp-howler',
      },
      {
        cue: '"Park the bus!" — when extreme defence becomes the tactic',
        meaning: 'Metaphor for a team placing all eleven players behind the ball with no intention of attacking — as if parking a bus in front of the goal. Used both as tactical instruction and as criticism.',
        usage: '"They\'ve parked the bus — eleven behind the ball, not even trying." The manager shouts from the touchline: "Don\'t let them park it! Play through them! Keep moving the ball!" The phrase originated when José Mourinho accused Tottenham of "parking the bus." On the pitch, beating a parked bus requires patience: "Keep the ball! Make them work! They\'ll tire!" Against a bus, the key is wide overloads and quick combinations — finding gaps in the wall.',
        imageSlug: 'otp-park-the-bus',
      },
      {
        cue: '"Route one!" — direct ball, no nonsense',
        meaning: 'Route one = the most direct path to goal: goalkeeper to striker, no midfield involved. A deliberate tactical choice to bypass pressure and play long.',
        usage: '"Route one! Hit it long! Get on it!" — the call when a team is defending deep and wants to relieve pressure quickly. It is not necessarily negative — it is direct and purposeful. "When they go route one, the striker needs to win the header — that\'s the plan, own it." On the pitch: "Don\'t try to play out the back — route one! Find him in behind!" Teams with a physical striker use route one deliberately: it exploits space in behind the high line.',
        imageSlug: 'otp-route-one',
      },
      {
        cue: '"On a plate!" — the perfectly delivered opportunity',
        meaning: 'A pass or cross that puts the ball in exactly the right position for a teammate to score — served up as if on a silver plate. A gifted, unmissable opportunity.',
        usage: '"He put it on a plate and he missed it! He\'ll be devastated!" On the pitch after a chance is missed from a perfect delivery: "That was on a plate! You\'ve got to score that!" The provider is immediately frustrated — they did their job, the finisher didn\'t do theirs. "She crossed it on a plate — the striker only had to nod it in." Conversely, when it is finished: "He put it on a plate and she headed it straight in — brilliant combination."',
        imageSlug: 'otp-on-a-plate',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Kai', speakerColor: 'green', text: 'Did you see that nutmeg in the first minute? Absolute tekkers — the defender didn\'t know where to look.' },
    { speaker: 'Priya', speakerColor: 'purple', text: 'I know! And then the keeper dropped an absolute howler from the corner. I still can\'t believe it.' },
    { speaker: 'Kai', speakerColor: 'green', text: 'It\'s a worldie and then a howler in the same ten minutes. Football is mad.' },
    { speaker: 'Priya', speakerColor: 'purple', text: 'The second goal was a screamer though — he hit it on the turn from 25 yards. No keeper saves that.' },
    { speaker: 'Kai', speakerColor: 'green', text: 'I thought they\'d park the bus after going two-nil up. You know what they\'re like.' },
    { speaker: 'Priya', speakerColor: 'purple', text: 'They nearly did. Route one from the goalkeeper, big man flicks on — not exactly beautiful football.' },
    { speaker: 'Kai', speakerColor: 'green', text: 'But it works. And to be fair, that banger in the 40th minute was anything but route one.' },
    { speaker: 'Priya', speakerColor: 'purple', text: 'True. Let\'s see if they can keep the tekkers up in the second half or if they just lump it.' },
  ],

  matchingExercise: [
    { word: 'Worldie', definition: 'An exceptional, spectacular goal or performance' },
    { word: 'Nutmeg', definition: 'To pass the ball between an opponent\'s legs' },
    { word: 'Banger', definition: 'A powerful, impressive goal, usually struck hard' },
    { word: 'Park the bus', definition: 'To defend with many players, playing extremely defensively' },
    { word: 'Route one', definition: 'A direct long-ball style bypassing the midfield' },
    { word: 'Howler', definition: 'A terrible, embarrassing mistake by a goalkeeper or defender' },
    { word: 'Screamer', definition: 'A very powerful, impressive shot struck from distance' },
    { word: 'Tekkers', definition: 'Exceptional technical skill in controlling or passing the ball' },
  ],

  fillBlankExercise: [
    { before: 'The goalkeeper went to catch the cross and completely fluffed it — an absolute', answer: 'howler', after: 'that gifted them the goal.' },
    { before: 'He flicked it through the defender\'s legs — a perfect', answer: 'nutmeg', after: 'that left the crowd speechless.' },
    { before: 'That free-kick was a', answer: 'worldie', after: '— top corner from 35 yards, not a thing the keeper could do.' },
    { before: 'They were happy with a point and decided to', answer: 'park the bus', after: 'for the last 20 minutes — nine men behind the ball.' },
    { before: 'It wasn\'t pretty — just', answer: 'route one', after: 'from the goalkeeper, long ball to the striker, flick on, tap in.' },
    { before: 'Look at the control, the turn, the finish — that is pure', answer: 'tekkers', after: 'from start to finish.' },
    { before: 'He hit it sweetly on the half-volley from outside the area — an absolute', answer: 'banger', after: 'into the bottom corner.' },
    { before: 'That volley was a', answer: 'screamer', after: '— 30 yards out, no bounce, straight into the top corner. Unbelievable.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"The defender didn\'t see it coming — the winger put it straight through his legs." What skill is described?',
      options: ['A nutmeg', 'A banger', 'A worldie', 'A screamer'],
      correctIndex: 0,
    },
    {
      question: '"They had nine players behind the ball for the entire second half." What style is this called?',
      options: ['Parking the bus', 'Route one', 'Playing on the front foot', 'Pressing high'],
      correctIndex: 0,
    },
    {
      question: '"The goalkeeper fumbled a simple shot straight into his own net." What word describes this?',
      options: ['A howler', 'A worldie', 'A screamer', 'Tekkers'],
      correctIndex: 0,
    },
    {
      question: '"The way he controlled the long ball, turned, and volleyed it — that was special." What term fits?',
      options: ['Pure tekkers', 'Route one', 'A howler', 'Parking the bus'],
      correctIndex: 0,
    },
    {
      question: 'Which word describes a goal so spectacular it seems almost impossible?',
      options: ['Worldie', 'Howler', 'Nutmeg', 'Route one'],
      correctIndex: 0,
    },
    {
      question: '"The goalkeeper kicked it long every time — no short passing, just big clearances." What style is this?',
      options: ['Route one', 'Parking the bus', 'High press', 'Tiki-taka'],
      correctIndex: 0,
    },
    {
      question: '"He struck it so hard from distance that it nearly broke the net." What word fits?',
      options: ['Screamer', 'Nutmeg', 'Tekkers', 'Howler'],
      correctIndex: 0,
    },
    {
      question: '"That banger was something else — he barely looked up before hitting it." What does "banger" mean?',
      options: ['A powerful, impressive goal', 'A defensive mistake', 'A long clearance', 'A dribbling skill'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the correct form of the word or phrase.',
    items: [
      {
        sentence: 'He ___ the defender so cleanly that the crowd gasped before erupting.',
        options: ['nutmegged', 'nutmeg', 'nutmegs'],
        correctIndex: 0,
        explanation: '"Nutmeg" works as both a noun and a verb. As a verb, it follows standard past tense rules: nutmeg → nutmegged. You can say "he nutmegged" just like "he tackled" or "he fouled".',
      },
      {
        sentence: 'The manager decided to ___ the bus once they went two goals ahead.',
        options: ['park', 'parked', 'parking'],
        correctIndex: 0,
        explanation: '"Park the bus" is a fixed idiom used as a verb phrase. After "decided to", the infinitive form is required: "decided to park the bus".',
      },
      {
        sentence: 'That was an absolute ___ — I\'ve never seen a goalkeeper drop a cross that badly.',
        options: ['howler', 'howlers', 'howled'],
        correctIndex: 0,
        explanation: '"A howler" is a countable noun used with an indefinite article. "An absolute howler" is the natural intensified form — "absolute" adds emphasis.',
      },
      {
        sentence: 'The way he controlled it and ___ from 25 yards — that\'s just pure tekkers.',
        options: ['volleyed', 'volley', 'volleying'],
        correctIndex: 0,
        explanation: 'In a list of past actions ("controlled ... and volleyed"), both verbs should be in the same tense. Simple past "volleyed" matches "controlled".',
      },
      {
        sentence: 'They ___ route one all game — not a single short pass from the goalkeeper.',
        options: ['played', 'playing', 'plays'],
        correctIndex: 0,
        explanation: 'Simple past — "played route one" — describing a completed tactical approach across the whole match. "Route one" is a noun phrase used as a direct object.',
      },
      {
        sentence: 'I\'ve never ___ tekkers like that — the control, the turn, the finish was breathtaking.',
        options: ['seen', 'saw', 'seeing'],
        correctIndex: 0,
        explanation: '"Have never seen" — present perfect with "never" to express a life experience. "See" is an irregular verb: see → saw → seen. After "have/has", the past participle form "seen" is required.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Choose the most natural response for each football moment.',
      items: [
        {
          customerLine: 'Your friend just described a goal where the striker hit it on the volley from 30 yards. How do you react?',
          options: [
            '"That\'s an absolute screamer — no keeper saves that."',
            '"That\'s a howler from the striker."',
            '"He really parked the bus on that one."',
            '"Classic route one football."',
          ],
          correctIndex: 0,
          explanation: '"Screamer" is a very powerful, impressive shot — the correct term for a long-range strike. "Howler" describes a mistake; "parked the bus" refers to defensive tactics; "route one" is a style of play.',
        },
        {
          customerLine: 'A defender lets the ball go between his legs. A fan next to you shouts — what do they say?',
          options: [
            '"Nutmeg! Did you see that?"',
            '"What a worldie from the defender!"',
            '"He parked the bus on his own legs!"',
            '"Pure tekkers from the defender."',
          ],
          correctIndex: 0,
          explanation: '"Nutmeg" is when the ball goes through a defender\'s legs. "Worldie" describes a spectacular goal; "parked the bus" is a tactical phrase; "tekkers from the defender" would praise the defender, not describe the attacker\'s skill.',
        },
        {
          customerLine: 'The goalkeeper drops an easy cross. How do you describe it to your friend after the match?',
          options: [
            '"Absolute howler — he had no business dropping that."',
            '"He played it route one."',
            '"He pulled off a worldie."',
            '"What a screamer from the goalkeeper."',
          ],
          correctIndex: 0,
          explanation: '"Howler" perfectly describes a goalkeeper error — dropping something they should catch. "Route one" is a playing style; "pulled off a worldie" would be very positive; "screamer" describes an impressive shot, not an error.',
        },
        {
          customerLine: 'A team goes two-nil up and starts defending very deep with all their players. How do you describe this?',
          options: [
            '"They\'ve completely parked the bus."',
            '"They\'re hitting worldies left and right."',
            '"Pure tekkers — they\'re playing beautiful football."',
            '"They\'re going route one now."',
          ],
          correctIndex: 0,
          explanation: '"Parked the bus" means defending with everyone behind the ball — the right phrase for an extreme defensive setup. "Route one" is a long-ball style, not a deep defensive posture. The other options describe attacking or skilled play.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'The dialogue below contains three errors — wrong slang, incorrect usage, or grammar mistakes. Find and correct them.',
      dialogue: [
        { speaker: 'Luke', text: 'That goal in the second half was an absolute worldie — I\'ve never seen anything like it.' },
        { speaker: 'Mia', text: 'The screamer through his legs was incredible too — did you see the defender\'s face?' },
        { speaker: 'Luke', text: 'Pure tekkers. And then they just parked the bus immediately after going three-nil up.' },
        { speaker: 'Mia', text: 'I thought the goalkeeper was going to make a howler on that long ball.' },
        { speaker: 'Luke', text: 'He nearly did. And their style of play was very route ones — just lumping it forward every time.' },
        { speaker: 'Mia', text: 'I know. Shame. They have the players to do better than just banger it long.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'The screamer through his legs',
          correction: 'The nutmeg through his legs',
          explanation: 'A "screamer" is a powerful shot. When the ball goes between a defender\'s legs, that is a "nutmeg". These are two different terms and cannot be used interchangeably.',
        },
        {
          lineIndex: 4,
          incorrectText: 'very route ones',
          correction: 'very route one',
          explanation: '"Route one" is a fixed singular noun phrase used as an adjective — it does not take a plural form. "Their style was route one" or "very route one" is correct.',
        },
        {
          lineIndex: 5,
          incorrectText: 'banger it long',
          correction: 'lump it long',
          explanation: '"Banger" is a noun (a powerful shot), not a verb. The correct verb for kicking the ball long without precision is "lump it".',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each sentence naturally using slang or informal football language.',
      items: [
        {
          customerLine: 'Complete this commentary sentence about a brilliant skill move.',
          salespersonStart: 'The winger danced past three defenders and slipped it through the last one\'s legs — that was...',
          suggestedCompletion: 'a nutmeg to remember — pure tekkers from start to finish.',
        },
        {
          customerLine: 'Complete this sentence about a team\'s defensive tactics at 3-0.',
          salespersonStart: 'They went in at half-time three-nil up and came out in the second half just trying to...',
          suggestedCompletion: 'park the bus — nine players behind the ball from the first minute.',
        },
        {
          customerLine: 'Complete this commentary sentence about a goalkeeper mistake.',
          salespersonStart: 'The goalkeeper went to catch the corner and completely misjudged it — an absolute...',
          suggestedCompletion: 'howler that handed them a goal they did nothing to earn.',
        },
        {
          customerLine: 'Complete this sentence describing an extraordinary goal from distance.',
          salespersonStart: 'He hit it from the halfway line on the volley and it flew into the top corner — a genuine...',
          suggestedCompletion: 'worldie — the kind of goal you only see once or twice in your lifetime.',
        },
      ],
    },
  },
};

import { Lesson } from '@/types/lesson';

export const footballsGlobalVocabulary: Lesson = {
  slug: 'footballs-global-vocabulary',
  title: "Football's Global Vocabulary",
  subtitle: 'Unit 3 — Football Idioms & Culture',
  level: 'B1-B2',
  description: 'Football is spoken in hundreds of languages, but many of its words travel. From Brazilian Portuguese to Spanish, French to Japanese, the sport has left its vocabulary all over the world — and borrowed plenty back. This lesson explores the global roots of football\'s richest words.',
  heroImage: '/images/global-vocabulary.png',

  warmUp: {
    questions: [
      'Are there any football words in your language that come from English? Can you think of any examples?',
      'Are there any words your country uses for football situations that don\'t have a direct English translation?',
      'Why do you think football has such a global vocabulary — more than most other sports?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Loanwords and Borrowed Language',
    description: 'A loanword is a word borrowed from one language and used in another. Football English contains many loanwords — especially from Spanish, Portuguese, French, and Italian. Similarly, languages around the world have borrowed English football terms directly. This borrowing reflects cultural exchange: when a country dominates football, its language often dominates the vocabulary too. Brazil gave us "samba football"; Spain gave us "La Liga" and "tiki-taka"; Italy gave us "Calcio"; France gave us "libero". Understanding loanwords makes you a more fluent football reader and listener. When you encounter a football word you don\'t recognise, check its origin. Many terms from Spanish, Portuguese, and Italian are in common use in English football writing. Knowing the origin often explains the meaning — "libero" means "free", so a "libero" is a player who plays freely behind the main defensive line.',
    positiveExamples: [
      {
        sentence: '"The team played tiki-taka — quick, sharp passing that kept the opposition chasing shadows."',
        note: '"Tiki-taka" — borrowed from Spanish, describes a possession-based passing style',
      },
      {
        sentence: '"He plays with real ginga — that Brazilian creativity and flair that is impossible to teach."',
        note: '"Ginga" — Portuguese word for fluid, creative movement; widely used in global football writing',
      },
      {
        sentence: '"The libero dropped deep to collect the ball and start the move — a classic Italian role."',
        note: '"Libero" — Italian for "free", describes a defensive midfielder or sweeper role',
      },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'TIKI-TAKA',
      partOfSpeech: 'noun',
      definition: 'A style of play based on fast, short passing and maintaining possession. Associated with Spain and FC Barcelona.',
      example: '"Their tiki-taka approach meant the opposition barely touched the ball — 78% possession in the first half."',
      imageSlug: '/images/tiki-taka.png',
    },
    {
      word: 'GINGA',
      partOfSpeech: 'noun',
      definition: 'Brazilian Portuguese term for fluid, creative, rhythmic movement — the essence of Brazilian football style.',
      example: '"He has real ginga — the way he rolls his body to escape a tackle is something defenders simply cannot prepare for."',
      imageSlug: '/images/ginga.png',
    },
    {
      word: 'LIBERO',
      partOfSpeech: 'noun',
      definition: 'From Italian for "free" — a sweeper or deep-lying midfielder with freedom to move across the backline or into midfield.',
      example: '"The libero stepped out of defence to intercept the pass and launch a counter-attack — the pivotal moment of the match."',
      imageSlug: '/images/libero.png',
    },
    {
      word: 'CALCIO',
      partOfSpeech: 'noun',
      definition: 'The Italian word for football — also used in English to refer to Italian football culture and style.',
      example: '"He spent three years in Calcio before returning to the Premier League — the tactical discipline he learned in Italy was obvious."',
      imageSlug: '/images/calcio.png',
    },
    {
      word: 'CATENACCIO',
      partOfSpeech: 'noun',
      definition: 'Italian for "door bolt" — an ultra-defensive tactical system focused on preventing goals rather than scoring them.',
      example: '"The visitors set up in a classic catenaccio — defending deep, absorbing pressure, and looking for a breakaway goal."',
      imageSlug: '/images/catenaccio.png',
    },
    {
      word: 'SAMBA FOOTBALL',
      partOfSpeech: 'noun',
      definition: 'A phrase describing the Brazilian style — flair, creativity, entertainment, and rhythm inspired by samba music and dance.',
      example: '"The crowd had come to see samba football — dribbles, flicks, and improvisation — and the team delivered."',
      imageSlug: '/images/samba-football.png',
    },
    {
      word: 'EL CLASICO',
      partOfSpeech: 'noun',
      definition: 'Spanish for "the classic" — used globally to refer to matches between Real Madrid and FC Barcelona, the biggest club rivalry in the world.',
      example: '"El Clásico drew a global TV audience of 650 million — the most watched club game in football history."',
      imageSlug: '/images/el-clasico.png',
    },
    {
      word: 'GEGENPRESSING',
      partOfSpeech: 'noun',
      definition: 'From German — "counter-pressing": the tactic of immediately pressing the opposition after losing the ball to win it back in a dangerous position.',
      example: '"Their gegenpressing was relentless — every time they lost the ball, four players immediately closed down the opponent who had it."',
      imageSlug: '/images/gegenpressing.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BRING IN',
      definition: 'To introduce a new player, style, or idea to a team or system.',
      example: '"The manager brought in a new defensive system from his time in Italy — compact, disciplined, hard to break down."',
      imageSlug: '/images/bring-in.png',
},
    {
      phrase: 'ADAPT TO',
      definition: 'To adjust successfully to new conditions — a different league, culture, or style of play.',
      example: '"It took him six months to adapt to the physical demands of the Premier League after coming from La Liga."',
      imageSlug: '/images/adapt-to.png',
},
    {
      phrase: 'SPREAD ACROSS',
      definition: 'To become widely adopted — for a style or tactical idea to move from one place to many.',
      example: '"Gegenpressing spread across European football after Klopp\'s success — almost every top team now uses elements of it."',
      imageSlug: '/images/spread-across.png',
},
    {
      phrase: 'DRAW FROM',
      definition: 'To take inspiration or ideas from a particular source.',
      example: '"Their style draws from the Dutch tradition of total football — every player comfortable in every position."',
      imageSlug: '/images/draw-from.png',
},
    {
      phrase: 'FALL BACK ON',
      definition: 'To revert to a familiar or reliable approach when under pressure.',
      example: '"When they went a goal down, they fell back on the catenaccio — packed the defence and took their chances on the counter."',
      imageSlug: '/images/fall-back-on.png',
},
    {
      phrase: 'GROW OUT OF',
      definition: 'To develop from a particular origin — to be rooted in a tradition.',
      example: '"Tiki-taka grew out of Johan Cruyff\'s ideas at Barcelona in the early 1990s — it took decades to reach its peak."',
      imageSlug: '/images/grow-out-of.png',
},
  ],

  onThePitch: {
    instructions: 'Football\'s global vocabulary is spoken on pitches around the world — these are the tactical terms and calls that have crossed language barriers and entered universal football English.',
    items: [
      {
        cue: '"Gegenpressing! Press! Press now!" — the German influence on modern calls',
        meaning: 'Gegenpressing — immediate, collective pressing the moment possession is lost — was popularised by Jürgen Klopp. The word and the concept have entered global football vocabulary.',
        usage: '"PRESS! Gegenpress! Don\'t let them breathe!" — Klopp-influenced coaches shout this in English, German, and a hybrid of both. On the pitch, the call is "PRESS NOW! Don\'t let them play!" but the concept behind it is German: win the ball back immediately, in the opponent\'s half, in the five seconds after losing it. "When the coach says gegenpress, we all know exactly what it means — even the Spanish lads, even the Brazilians. It\'s a football word now." The German concept became a universal coaching instruction.',
        imageSlug: 'otp-gegenpressing',
      },
      {
        cue: '"Tiki-taka! Keep it! Recycle!" — the Spanish influence on possession play',
        meaning: 'Tiki-taka — short passing, movement, and possession retention — became the global language of possession football after Spain\'s 2008-2012 dominance. The word is now used on pitches everywhere.',
        usage: '"Tiki-taka! Keep it! One touch! Move! Move!" — a coach demanding quick, short passing and constant movement. On the pitch during possession phases: "Keep it! Show! One touch — one touch!" The concept behind the word: every player must be available, moving, offering an angle. "The youth coaches here teach tiki-taka principles even to under-tens — it\'s the philosophy of the whole club." Even coaches who reject the style know the word: "We\'re not playing tiki-taka — we go direct when we can. But you still need to know what it means."',
        imageSlug: 'otp-tiki-taka',
      },
      {
        cue: 'Catenaccio — the Italian defensive concept in live language',
        meaning: 'Catenaccio (Italian: "door bolt") — an ultra-defensive system using a sweeper behind the back four. The word is used by coaches and analysts to describe deep, organised defensive structures.',
        usage: '"They\'re playing catenaccio — eleven behind the ball, sweeper behind the four. How do we break this?" On the training pitch: "If they sit in a catenaccio block, we need movement — wide overloads, crosses, set pieces." The word is used as shorthand for any extremely organised, defensive-first approach. "It\'s not just about sitting deep — catenaccio is an active system. You defend as a unit and then attack on the counter." Understanding the word helps players understand the history behind the tactic — it was invented in Italy in the 1930s and changed European football forever.',
        imageSlug: 'otp-catenaccio',
      },
      {
        cue: 'The universal language of set pieces — numbers and zones',
        meaning: 'Set piece communication is the most multilingual moment in football — clubs design coded systems that work across language barriers. Numbers, zones, and colours replace words.',
        usage: '"Zone three! Zone three!" — the call that tells runners which area of the box to target from a corner. On multilingual teams, number-and-zone systems are essential: "We can\'t have twelve nationalities all calling different things — so everything is a number." "Blue! Blue!" = a specific corner routine. "Runner one!" = the first decoy makes their run. "In the Champions League, our corner routines used numbers that worked in Portuguese, English, and French — the same signal, understood by everyone." Number systems transcend language: you do not need to speak the same language to understand "ZONE TWO!"',
        imageSlug: 'otp-set-piece-codes',
      },
      {
        cue: 'Loanwords in the dressing room — when football borrows language',
        meaning: 'Football players and coaches borrow words from other languages when those words describe something better than their own language can. These loanwords travel with coaches and players across clubs and countries.',
        usage: '"The coach always said \'duelo\' — Spanish for duel, one-v-one battle. We all started using it." Football loanwords in common use: "Pressing" (English, now global), "Rondo" (Spanish — a passing circle drill), "Gaffer" (British — the manager, now used in many international clubs), "Ultras" (Italian — the hardcore fans). "When I moved from Brazil to England, I already knew the word \'pressing\' — it\'s used in Portuguese too now." Language follows football talent: the best ideas travel with the best coaches.',
        imageSlug: 'otp-loanwords',
      },
      {
        cue: 'The universal sounds of football — beyond language',
        meaning: 'Some football communication requires no language at all — whistles, claps, gestures, and sounds that every footballer understands regardless of nationality.',
        usage: 'Universal football sounds: Two claps = "I\'m here, give it to me." One sharp clap = "Well done." A whistle from the coach = stop everything immediately. A pointed finger = "You — run there." Arms spread wide = "Give me space" or "How was that not a foul?" "In my first training session in Germany, I didn\'t speak a word of German — but I understood everything because the sounds were the same." Thumbs up = good. Thumbs down = wrong. "Come here" gesture = coaching moment. "The beautiful thing about football is that eleven players from eleven different countries can play together from day one — because the language under the language is universal."',
        imageSlug: 'otp-universal-sounds',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Journalist', speakerColor: 'orange', text: 'You\'ve worked in Spain, Germany, and Brazil. Which football culture had the richest vocabulary?' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Brazil, without question. The language around movement — ginga, jogo bonito — they have words that don\'t exist elsewhere.' },
    { speaker: 'Journalist', speakerColor: 'orange', text: 'And Germany? Gegenpressing is a term that\'s travelled globally now.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Exactly. In Germany, everything is precise and named. They have tactical terms for sub-phases of the game that most coaches don\'t even consider as separate concepts.' },
    { speaker: 'Journalist', speakerColor: 'orange', text: 'Do you think English football has contributed as much to global vocabulary as it takes from it?' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Honestly? English gave the world the game. But the vocabulary — the richest parts came from Italy, Spain, Brazil, Germany. English gave the rules; the others gave the poetry.' },
    { speaker: 'Journalist', speakerColor: 'orange', text: 'What about catenaccio? It has a reputation for being anti-football.' },
    { speaker: 'Coach', speakerColor: 'blue', text: 'Unfair. It\'s beautiful in its own way — the precision, the defensive organisation. It\'s just not entertainment-first football. Every system tells you something about a culture.' },
  ],

  matchingExercise: [
    { word: 'Tiki-taka', definition: 'Spanish — short passing possession style' },
    { word: 'Ginga', definition: 'Portuguese/Brazilian — fluid, creative movement' },
    { word: 'Libero', definition: 'Italian — free-role defensive player' },
    { word: 'Calcio', definition: 'Italian word for football' },
    { word: 'Catenaccio', definition: 'Italian — ultra-defensive system (door bolt)' },
    { word: 'Samba football', definition: 'Brazilian — flair, creativity, entertainment' },
    { word: 'El Clásico', definition: 'Spanish — Real Madrid vs Barcelona' },
    { word: 'Gegenpressing', definition: 'German — immediate counter-press after losing the ball' },
  ],

  fillBlankExercise: [
    { before: 'The Spanish side\'s', answer: 'tiki-taka', after: 'kept possession for over 80% of the first half — the opposition never got a touch.' },
    { before: 'It\'s hard to coach', answer: 'ginga', after: '— that Brazilian quality of movement is something you either have or you don\'t.' },
    { before: 'Facing a must-win second leg, the Italian side reverted to', answer: 'catenaccio', after: '— every player behind the ball.' },
    { before: 'Their', answer: 'gegenpressing', after: 'was exhausting to watch — every time they lost possession, six players immediately pressed.' },
    { before: 'The', answer: 'libero', after: 'dropped from defence to receive the ball and orchestrate the attack — a truly modern interpretation of the role.' },
    { before: 'The fans had come for', answer: 'samba football', after: '— creativity, flair, dribbles — and the team delivered 90 minutes of entertainment.' },
    { before: '', answer: 'El Clásico', after: 'drew a record broadcast audience — it was watched in 168 countries around the world.' },
    { before: 'He grew up watching', answer: 'Calcio', after: 'and carried the Italian discipline of pressing and defensive shape throughout his coaching career.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "tiki-taka" describe?',
      options: ['A Brazilian dance move used in celebrations', 'A short-passing possession-based style of play', 'A defensive Italian system', 'A German counter-pressing tactic'],
      correctIndex: 1,
    },
    {
      question: 'What does "ginga" refer to?',
      options: ['A defensive Italian system', 'A quick counter-attack', 'Fluid, creative Brazilian movement', 'Immediate pressing after losing the ball'],
      correctIndex: 2,
    },
    {
      question: '"Catenaccio" literally means:',
      options: ['Free player', 'Door bolt', 'Counter press', 'Total football'],
      correctIndex: 1,
    },
    {
      question: 'Which term comes from German football culture?',
      options: ['Tiki-taka', 'Ginga', 'Gegenpressing', 'Libero'],
      correctIndex: 2,
    },
    {
      question: 'What is "El Clásico"?',
      options: ['A Spanish training method', 'The Real Madrid vs Barcelona rivalry', 'The Italian league', 'A classic defensive formation'],
      correctIndex: 1,
    },
    {
      question: 'A "libero" is best described as:',
      options: ['A striker with freedom to roam', 'A free-role defender or deep midfielder', 'A Brazilian-style attacking player', 'A goalkeeper who plays as an extra outfield player'],
      correctIndex: 1,
    },
    {
      question: 'Which word comes from Portuguese and describes the Brazilian style of play?',
      options: ['Catenaccio', 'Gegenpressing', 'Ginga', 'Libero'],
      correctIndex: 2,
    },
    {
      question: '"Gegenpressing" is associated with which football culture?',
      options: ['Spanish', 'Italian', 'Brazilian', 'German'],
      correctIndex: 3,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the global vocabulary and loanword knowledge from this lesson.',
    items: [
      {
        sentence: 'The word "libero" comes from Italian and literally means ___.',
        options: ['"free"', '"strong"', '"defender"'],
        correctIndex: 0,
        explanation: '"Libero" = Italian for "free". The role gives a defensive player licence to move out of a fixed position — to press, intercept, or join midfield. Knowing the etymology explains the role.',
      },
      {
        sentence: '"Catenaccio" is Italian for "___" — a name that perfectly captures the idea of a system designed to lock the opposition out.',
        options: ['door bolt', 'free player', 'total football'],
        correctIndex: 0,
        explanation: 'The metaphor of a door bolt captures catenaccio perfectly — a system designed to make a team impenetrable. Understanding loanwords often requires understanding their visual or physical metaphor.',
      },
      {
        sentence: 'When a team plays ___, they press the opposition immediately after losing possession.',
        options: ['gegenpressing', 'tiki-taka', 'catenaccio'],
        correctIndex: 0,
        explanation: 'Gegenpressing is based on the idea that the opposition is disorganised immediately after winning the ball — before they can form a shape. That 2-3 second window is the target for the press.',
      },
      {
        sentence: '"Ginga" cannot be taught — it describes the ___ quality of movement that Brazilian players develop through street football.',
        options: ['fluid and creative', 'tactical and disciplined', 'physical and robust'],
        correctIndex: 0,
        explanation: 'Ginga is associated with the Brazilian tradition of learning the game through street play and futsal, which develops creative improvisation over rigid tactical discipline.',
      },
      {
        sentence: 'Tiki-taka is not just about passing — it requires every player to understand ___ as a weapon in itself.',
        options: ['possession', 'pressing', 'transition'],
        correctIndex: 0,
        explanation: 'Tiki-taka is as much psychological as technical. By retaining possession, a team forces the opposition to chase and tire. The point is not just passing — it\'s using the ball to control the game\'s tempo.',
      },
      {
        sentence: 'El ___ is the most watched club match in football — a rivalry between two clubs representing different regional cultures.',
        options: ['Clásico', 'Derby', 'Mundial'],
        correctIndex: 0,
        explanation: 'El Clásico has cultural and political dimensions beyond sport — Real Madrid historically associated with Castile; Barcelona with Catalan identity. This deeper meaning is why the match attracts a disproportionate global audience.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Choose the best explanation for each global football term.',
      items: [
        {
          customerLine: 'A commentator says: "They\'re playing beautiful samba football tonight." What do they mean?',
          options: [
            'The team is playing with flair, creativity, and entertainment — in the Brazilian tradition',
            'The team is playing with extreme defensive discipline',
            'The team is pressing immediately after losing possession',
            'The team is using a short-passing possession system',
          ],
          correctIndex: 0,
          explanation: '"Samba football" describes the Brazilian style — flair, creativity, and entertainment. It has nothing to do with defensive discipline (catenaccio), pressing (gegenpressing), or short passing (tiki-taka).',
        },
        {
          customerLine: 'A pundit says: "They fell back on catenaccio in the second half." What happened?',
          options: [
            'They adopted an ultra-defensive shape to protect their lead',
            'They started pressing higher up the pitch',
            'They switched to a possession-based style',
            'They made three defensive substitutions',
          ],
          correctIndex: 0,
          explanation: '"Catenaccio" is ultra-defensive — packing the defence and absorbing pressure. "Fell back on" means reverting to a reliable method. They did not press higher or switch to possession football.',
        },
        {
          customerLine: '"El Clásico" always refers to which fixture?',
          options: [
            'Real Madrid vs FC Barcelona',
            'Any classic match between historic rivals',
            'The Spanish cup final',
            'The match between Italy and Spain',
          ],
          correctIndex: 0,
          explanation: '"El Clásico" is a proper noun exclusively referring to Real Madrid vs FC Barcelona — it does not apply to any other rivalry, regardless of how "classic" a match might be.',
        },
        {
          customerLine: 'Which sentence uses "gegenpressing" correctly?',
          options: [
            '"Their gegenpressing meant they won the ball back within seconds every time they lost it."',
            '"They sat in a gegenpressing shape and defended with nine men behind the ball."',
            '"The libero played with real gegenpressing — beautiful, fluid movement."',
            '"Their gegenpressing style featured elegant short passes and 80% possession."',
          ],
          correctIndex: 0,
          explanation: 'Gegenpressing is about winning the ball back immediately after losing it — not sitting deep, and not describing fluid movement or possession. Only the first option correctly captures the counter-pressing concept.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'The commentary below contains three errors — either wrong vocabulary or incorrect usage of global football terms. Find and correct them.',
      dialogue: [
        { speaker: 'Commentator A', text: 'The Spanish side are playing wonderful catenaccio tonight — passing their way through every pressing trap.' },
        { speaker: 'Commentator B', text: 'Absolutely. Their gegenpressing means they have barely let the opposition have a touch — 82% possession in 45 minutes.' },
        { speaker: 'Commentator A', text: 'And the libero has been outstanding — dropping deep to start attacks rather than staying fixed in the backline.' },
        { speaker: 'Commentator B', text: 'It\'s pure samba football, isn\'t it — German precision, German discipline, German tactical genius.' },
        { speaker: 'Commentator A', text: 'The away side are going to need to find their ginga — that Italian catenaccio quality — if they\'re going to get back into this.' },
        { speaker: 'Commentator B', text: 'It\'s looking like an El Clásico-level performance from the hosts tonight.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'wonderful catenaccio tonight — passing their way through every pressing trap',
          correction: 'wonderful tiki-taka tonight',
          explanation: '"Catenaccio" is ultra-defensive — it\'s the opposite of passing through pressing traps. "Tiki-taka" is the short-passing possession style being described.',
        },
        {
          lineIndex: 1,
          incorrectText: 'Their gegenpressing means they have barely let the opposition have a touch — 82% possession',
          correction: 'Their tiki-taka means they have barely let the opposition have a touch',
          explanation: '"Gegenpressing" means counter-pressing after losing the ball — it doesn\'t explain 82% possession. High possession is a characteristic of tiki-taka, not gegenpressing.',
        },
        {
          lineIndex: 4,
          incorrectText: 'their ginga — that Italian catenaccio quality',
          correction: 'their ginga — that Brazilian creativity',
          explanation: '"Ginga" is a Brazilian Portuguese term describing fluid, creative movement. It has nothing to do with Italian catenaccio. The speaker confused two completely different cultures and styles.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each sentence in a way that demonstrates understanding of the global vocabulary.',
      items: [
        {
          customerLine: 'Complete this sentence explaining why gegenpressing changed football.',
          salespersonStart: 'Gegenpressing changed European football because...',
          suggestedCompletion: 'it showed that pressing immediately after losing the ball could be more effective than sitting in a deep defensive block.',
        },
        {
          customerLine: 'Complete this sentence explaining why ginga is hard to coach.',
          salespersonStart: 'What makes Brazilian "ginga" so difficult to teach is...',
          suggestedCompletion: 'it develops through years of street football and futsal, not through structured coaching sessions.',
        },
        {
          customerLine: 'Complete this sentence explaining why El Clásico attracts such a huge global audience.',
          salespersonStart: 'The reason "El Clásico" attracts such a massive global audience is...',
          suggestedCompletion: 'it represents not just two clubs but two cultures, two cities, and two visions of what football should look like.',
        },
        {
          customerLine: 'Complete this sentence about the tactical genius behind catenaccio.',
          salespersonStart: 'A team playing catenaccio might frustrate the crowd, but the tactical genius lies in...',
          suggestedCompletion: 'the extreme defensive discipline required — every player knowing exactly where to be to close down space.',
        },
      ],
    },
  },
};

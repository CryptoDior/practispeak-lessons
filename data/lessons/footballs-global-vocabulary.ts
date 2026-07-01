import { Lesson } from '../../types/lesson';

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
    title: 'Loanwords and Borrowed Language',
    explanation: 'A loanword is a word borrowed from one language and used in another. Football English contains many loanwords — especially from Spanish, Portuguese, French, and Italian. Similarly, languages around the world have borrowed English football terms directly. This borrowing reflects cultural exchange: when a country dominates football, its language often dominates the vocabulary too. Brazil gave us "samba football"; Spain gave us "La Liga" and "tiki-taka"; Italy gave us "Calcio"; France gave us "libero". Understanding loanwords makes you a more fluent football reader and listener.',
    examples: [
      {
        sentence: '"The team played tiki-taka — quick, sharp passing that kept the opposition chasing shadows."',
        label: '"Tiki-taka" — borrowed from Spanish, describes a possession-based passing style',
      },
      {
        sentence: '"He plays with real ginga — that Brazilian creativity and flair that is impossible to teach."',
        label: '"Ginga" — Portuguese word for fluid, creative movement; widely used in global football writing',
      },
      {
        sentence: '"The libero dropped deep to collect the ball and start the move — a classic Italian role."',
        label: '"Libero" — Italian for "free", describes a defensive midfielder or sweeper role',
      },
    ],
    tip: 'When you encounter a football word you don\'t recognise, check its origin. Many terms from Spanish, Portuguese, and Italian are in common use in English football writing. Knowing the origin often explains the meaning — "libero" means "free", so a "libero" is a player who plays freely behind the main defensive line.',
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
      inAction: 'Used for introducing elements from outside.',
      register: 'neutral',
      inContext: 'Football tactics, transfers, management.',
    },
    {
      phrase: 'ADAPT TO',
      definition: 'To adjust successfully to new conditions — a different league, culture, or style of play.',
      example: '"It took him six months to adapt to the physical demands of the Premier League after coming from La Liga."',
      inAction: 'Used when adjusting to something new or challenging.',
      register: 'neutral',
      inContext: 'Transfers, cultural adjustment, language learning.',
    },
    {
      phrase: 'SPREAD ACROSS',
      definition: 'To become widely adopted — for a style or tactical idea to move from one place to many.',
      example: '"Gegenpressing spread across European football after Klopp\'s success — almost every top team now uses elements of it."',
      inAction: 'Used for ideas, styles, or trends that travel.',
      register: 'neutral',
      inContext: 'Football tactics, cultural trends.',
    },
    {
      phrase: 'DRAW FROM',
      definition: 'To take inspiration or ideas from a particular source.',
      example: '"Their style draws from the Dutch tradition of total football — every player comfortable in every position."',
      inAction: 'Used for creative or tactical inspiration.',
      register: 'neutral / formal',
      inContext: 'Tactics, culture, design, writing.',
    },
    {
      phrase: 'FALL BACK ON',
      definition: 'To revert to a familiar or reliable approach when under pressure.',
      example: '"When they went a goal down, they fell back on the catenaccio — packed the defence and took their chances on the counter."',
      inAction: 'Used for reverting to a trusted method under stress.',
      register: 'neutral',
      inContext: 'Football tactics, decision-making, business.',
    },
    {
      phrase: 'GROW OUT OF',
      definition: 'To develop from a particular origin — to be rooted in a tradition.',
      example: '"Tiki-taka grew out of Johan Cruyff\'s ideas at Barcelona in the early 1990s — it took decades to reach its peak."',
      inAction: 'Used to describe historical or cultural origins.',
      register: 'neutral',
      inContext: 'Football history, culture, education.',
    },
  ],

  onThePitch: [
    {
      id: 'ootpGV1',
      title: 'Global Word Map',
      image: '/images/ootp-word-map.png',
      description: 'Students map vocabulary words to their countries of origin.',
      prompt: 'For each word below, identify the language/country it comes from and explain what it tells us about that country\'s football culture: tiki-taka, ginga, libero, catenaccio, gegenpressing. Then add one word from your own language that describes a football concept.',
    },
    {
      id: 'ootpGV2',
      title: 'Style Debate',
      image: '/images/ootp-style-debate.png',
      description: 'Students argue for the most entertaining football style in history.',
      prompt: 'Which is the best football philosophy — tiki-taka, samba football, gegenpressing, or catenaccio? Argue your case using the vocabulary from this lesson. Consider: What makes it effective? What makes it entertaining? What are its weaknesses?',
    },
    {
      id: 'ootpGV3',
      title: 'Loanword Explorer',
      image: '/images/ootp-loanword-explorer.png',
      description: 'Students explore football loanwords from their own language.',
      prompt: 'Does your language have any football words borrowed from English? Does English have any words borrowed from your language\'s football culture? Share examples and discuss why the borrowing happened.',
    },
    {
      id: 'ootpGV4',
      title: 'Translate the Commentary',
      image: '/images/ootp-translate-commentary-2.png',
      description: 'Students work out the meaning of global football terms from context.',
      prompt: 'Read the commentary extract and identify the meaning of each underlined term from context: "Their (1)gegenpressing was relentless. Every time they lost the ball, the whole unit pushed up. No space for (2)tiki-taka football today — the hosts fell back on (3)catenaccio and hoped for a (4)libero interception."',
    },
    {
      id: 'ootpGV5',
      title: 'Tactical Philosophy Pitch',
      image: '/images/ootp-tactical-pitch.png',
      description: 'Students present a national football philosophy to the group.',
      prompt: 'Choose a country famous for a particular style of football (Brazil, Spain, Germany, Italy, England, the Netherlands, etc.). Prepare a 2-minute presentation on their football philosophy, using at least three vocabulary items from this lesson.',
    },
    {
      id: 'ootpGV6',
      title: 'The Future of Football Language',
      image: '/images/ootp-future-language.png',
      description: 'Students speculate on what new football words will enter global use.',
      prompt: 'Football vocabulary keeps growing. Which countries or leagues do you think will contribute new words to global football English in the next ten years? Think about growing football nations — the US, Japan, South Korea, Saudi Arabia, Australia. What terms might they introduce?',
    },
  ],

  videos: [],

  dialogue: {
    title: 'Roots and Routes',
    context: 'A football journalist discusses global vocabulary with a visiting coach.',
    lines: [
      { speaker: 'Journalist', text: 'You\'ve worked in Spain, Germany, and Brazil. Which football culture had the richest vocabulary?' },
      { speaker: 'Coach', text: 'Brazil, without question. The language around movement — ginga, jogo bonito — they have words that don\'t exist elsewhere.' },
      { speaker: 'Journalist', text: 'And Germany? Gegenpressing is a term that\'s travelled globally now.' },
      { speaker: 'Coach', text: 'Exactly. In Germany, everything is precise and named. They have tactical terms for sub-phases of the game that most coaches don\'t even consider as separate concepts.' },
      { speaker: 'Journalist', text: 'Do you think English football has contributed as much to global vocabulary as it takes from it?' },
      { speaker: 'Coach', text: 'Honestly? English gave the world the game. But the vocabulary — the richest parts came from Italy, Spain, Brazil, Germany. English gave the rules; the others gave the poetry.' },
      { speaker: 'Journalist', text: 'What about catenaccio? It has a reputation for being anti-football.' },
      { speaker: 'Coach', text: 'Unfair. It\'s beautiful in its own way — the precision, the defensive organisation. It\'s just not entertainment-first football. Every system tells you something about a culture.' },
    ],
  },

  matchingExercise: {
    title: 'Match the Word to Its Origin',
    instructions: 'Match each football term to the language and culture it comes from.',
    pairs: [
      { term: 'Tiki-taka', definition: 'Spanish — short passing possession style' },
      { term: 'Ginga', definition: 'Portuguese/Brazilian — fluid, creative movement' },
      { term: 'Libero', definition: 'Italian — free-role defensive player' },
      { term: 'Calcio', definition: 'Italian word for football' },
      { term: 'Catenaccio', definition: 'Italian — ultra-defensive system (door bolt)' },
      { term: 'Samba football', definition: 'Brazilian — flair, creativity, entertainment' },
      { term: 'El Clásico', definition: 'Spanish — Real Madrid vs Barcelona' },
      { term: 'Gegenpressing', definition: 'German — immediate counter-press after losing the ball' },
    ],
  },

  fillBlankExercise: {
    title: 'Fill in the Blank',
    instructions: 'Use the global vocabulary words to complete each sentence.',
    wordBank: ['tiki-taka', 'ginga', 'catenaccio', 'gegenpressing', 'libero', 'samba football', 'El Clásico', 'Calcio'],
    items: [
      { sentence: 'The Spanish side\'s ___ kept possession for over 80% of the first half — the opposition never got a touch.', answer: 'tiki-taka' },
      { sentence: 'It\'s hard to coach ___ — that Brazilian quality of movement is something you either have or you don\'t.', answer: 'ginga' },
      { sentence: 'Facing a must-win second leg, the Italian side reverted to ___ — every player behind the ball.', answer: 'catenaccio' },
      { sentence: 'Their ___ was exhausting to watch — every time they lost possession, six players immediately pressed.', answer: 'gegenpressing' },
      { sentence: 'The ___ dropped from defence to receive the ball and orchestrate the attack — a truly modern interpretation of the role.', answer: 'libero' },
      { sentence: 'The fans had come for ___ — creativity, flair, dribbles — and the team delivered 90 minutes of entertainment.', answer: 'samba football' },
      { sentence: '___ drew a record broadcast audience — it was watched in 168 countries around the world.', answer: 'El Clásico' },
      { sentence: 'He grew up watching ___ and carried the Italian discipline of pressing and defensive shape throughout his coaching career.', answer: 'Calcio' },
    ],
  },

  multipleChoiceExercise: {
    title: 'Choose the Correct Answer',
    instructions: 'Choose the best answer for each question.',
    items: [
      {
        question: 'What does "tiki-taka" describe?',
        options: ['A Brazilian dance move used in celebrations', 'A short-passing possession-based style of play', 'A defensive Italian system', 'A German counter-pressing tactic'],
        answer: 'A short-passing possession-based style of play',
      },
      {
        question: 'What does "ginga" refer to?',
        options: ['A defensive Italian system', 'A quick counter-attack', 'Fluid, creative Brazilian movement', 'Immediate pressing after losing the ball'],
        answer: 'Fluid, creative Brazilian movement',
      },
      {
        question: '"Catenaccio" literally means:',
        options: ['Free player', 'Door bolt', 'Counter press', 'Total football'],
        answer: 'Door bolt',
      },
      {
        question: 'Which term comes from German football culture?',
        options: ['Tiki-taka', 'Ginga', 'Gegenpressing', 'Libero'],
        answer: 'Gegenpressing',
      },
      {
        question: 'What is "El Clásico"?',
        options: ['A Spanish training method', 'The Real Madrid vs Barcelona rivalry', 'The Italian league', 'A classic defensive formation'],
        answer: 'The Real Madrid vs Barcelona rivalry',
      },
      {
        question: 'A "libero" is best described as:',
        options: ['A striker with freedom to roam', 'A free-role defender or deep midfielder', 'A Brazilian-style attacking player', 'A goalkeeper who plays as an extra outfield player'],
        answer: 'A free-role defender or deep midfielder',
      },
      {
        question: 'Which word comes from Portuguese and describes the Brazilian style of play?',
        options: ['Catenaccio', 'Gegenpressing', 'Ginga', 'Libero'],
        answer: 'Ginga',
      },
      {
        question: '"Gegenpressing" is associated with which football culture?',
        options: ['Spanish', 'Italian', 'Brazilian', 'German'],
        answer: 'German',
      },
    ],
  },

  completeSentenceExercise: {
    title: 'Complete the Sentence — Grammar Focus',
    instructions: 'Complete each sentence using the global vocabulary and loanword knowledge from this lesson.',
    items: [
      {
        sentence: 'The word "libero" comes from Italian and literally means ___. In football, it describes a player who has ___ to move across the defensive line.',
        answer: '"free" / freedom',
        explanation: '"Libero" = Italian for "free". The role gives a defensive player licence to move out of a fixed position — to press, intercept, or join midfield. Knowing the etymology explains the role.',
      },
      {
        sentence: '"Catenaccio" is Italian for "___" — a name that perfectly captures the idea of a defensive system designed to ___ the opposition out.',
        answer: 'door bolt / lock',
        explanation: 'The metaphor of a door bolt captures catenaccio perfectly — a system designed to make a team impenetrable. Understanding loanwords often requires understanding their visual or physical metaphor.',
      },
      {
        sentence: 'When a team plays ___, they press the opposition immediately after losing possession — the key idea being that the opposition is most vulnerable in the ___ seconds after winning the ball.',
        answer: 'gegenpressing / first few',
        explanation: 'Gegenpressing is based on the idea that the opposition is disorganised immediately after winning the ball — before they can form a shape. That 2-3 second window is the target for the press.',
      },
      {
        sentence: '"Ginga" cannot be taught — it describes the ___ quality of movement that Brazilian players develop through ___ in the streets rather than on organised training pitches.',
        answer: 'fluid / creative / playing',
        explanation: 'Ginga is associated with the "escola de futsal" — the Brazilian tradition of learning the game through street play and futsal, which develops creative improvisation over rigid tactical discipline.',
      },
      {
        sentence: 'Tiki-taka is not just about passing — it requires every player to be comfortable ___ and to understand ___ as a weapon in itself.',
        answer: 'under pressure / possession',
        explanation: 'Tiki-taka is as much psychological as technical. By retaining possession, a team forces the opposition to chase and tire. The point is not just passing — it\'s using the ball to control the game\'s tempo and exhaust the opponent.',
      },
      {
        sentence: 'El ___ is the most watched club match in football — a rivalry that draws global attention because it represents not just two clubs, but two very different ___ cultures.',
        answer: 'Clásico / Spanish regional',
        explanation: 'El Clásico has cultural and political dimensions beyond sport — Real Madrid historically associated with Castile and the centre; Barcelona with Catalan identity. This deeper meaning is why the match attracts a disproportionate global audience.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      title: 'What Does It Mean?',
      instructions: 'Choose the best explanation for each global football term.',
      items: [
        {
          prompt: 'A commentator says: "They\'re playing beautiful samba football tonight." What do they mean?',
          options: [
            'The team is playing with flair, creativity, and entertainment — in the Brazilian tradition',
            'The team is playing with extreme defensive discipline',
            'The team is pressing immediately after losing possession',
            'The team is using a short-passing possession system',
          ],
          answer: 'The team is playing with flair, creativity, and entertainment — in the Brazilian tradition',
        },
        {
          prompt: 'A pundit says: "They fell back on catenaccio in the second half." What happened?',
          options: [
            'They adopted an ultra-defensive shape to protect their lead',
            'They started pressing higher up the pitch',
            'They switched to a possession-based style',
            'They made three defensive substitutions',
          ],
          answer: 'They adopted an ultra-defensive shape to protect their lead',
        },
        {
          prompt: '"El Clásico" always refers to which fixture?',
          options: [
            'Real Madrid vs FC Barcelona',
            'Any classic match between historic rivals',
            'The Spanish cup final',
            'The match between Italy and Spain',
          ],
          answer: 'Real Madrid vs FC Barcelona',
        },
        {
          prompt: 'Which sentence uses "gegenpressing" correctly?',
          options: [
            '"Their gegenpressing meant they won the ball back within seconds every time they lost it."',
            '"They sat in a gegenpressing shape and defended with nine men behind the ball."',
            '"The libero played with real gegenpressing — beautiful, fluid movement."',
            '"Their gegenpressing style featured elegant short passes and 80% possession."',
          ],
          answer: '"Their gegenpressing meant they won the ball back within seconds every time they lost it."',
        },
      ],
    },

    spotTheMistake: {
      title: 'Spot the Mistake',
      instructions: 'The commentary below contains three errors — either wrong vocabulary or incorrect usage of global football terms. Find and correct them.',
      dialogue: [
        { speaker: 'Commentator A', text: 'The Spanish side are playing wonderful catenaccio tonight — passing their way through every pressing trap.' },
        { speaker: 'Commentator B', text: 'Absolutely. Their gegenpressing means they have barely let the opposition have a touch — 82% possession in 45 minutes.' },
        { speaker: 'Commentator A', text: 'And the libero has been outstanding — dropping deep to start attacks rather than staying fixed in the backline.' },
        { speaker: 'Commentator B', text: 'It\'s pure samba football, isn\'t it — German precision, German discipline, German tactical genius.' },
        { speaker: 'Commentator A', text: 'The away side are going to need to find their ginga — that Italian catenaccio quality — if they\'re going to get back into this.' },
        { speaker: 'Commentator B', text: 'It\'s looking like an El Clásico-level performance from the hosts tonight.' },
      ],
      errors: [
        { line: 1, original: 'wonderful catenaccio tonight — passing their way through every pressing trap', correction: 'wonderful tiki-taka tonight', explanation: '"Catenaccio" is ultra-defensive — it\'s the opposite of passing through pressing traps. "Tiki-taka" is the short-passing possession style being described.' },
        { line: 2, original: 'Their gegenpressing means they have barely let the opposition have a touch — 82% possession', correction: 'Their tiki-taka means they have barely let the opposition have a touch', explanation: '"Gegenpressing" means counter-pressing after losing the ball — it doesn\'t explain 82% possession. High possession is a characteristic of tiki-taka, not gegenpressing.' },
        { line: 5, original: 'their ginga — that Italian catenaccio quality', correction: 'their ginga — that Brazilian creativity', explanation: '"Ginga" is a Brazilian Portuguese term describing fluid, creative movement. It has nothing to do with Italian catenaccio. The speaker confused two completely different cultures and styles.' },
      ],
    },

    finishTheLine: {
      title: 'Finish the Line',
      instructions: 'Complete each sentence in a way that demonstrates understanding of the global vocabulary.',
      items: [
        {
          prompt: 'Gegenpressing changed European football because...',
          exampleAnswer: 'it showed that pressing immediately after losing the ball could be more effective than sitting in a deep defensive block.',
        },
        {
          prompt: 'What makes Brazilian "ginga" so difficult to teach is...',
          exampleAnswer: 'it develops through years of street football and futsal, not through structured coaching sessions.',
        },
        {
          prompt: 'The reason "El Clásico" attracts such a massive global audience is...',
          exampleAnswer: 'it represents not just two clubs but two cultures, two cities, and two visions of what football should look like.',
        },
        {
          prompt: 'A team playing catenaccio might frustrate the crowd, but the tactical genius lies in...',
          exampleAnswer: 'the extreme defensive discipline required — every player knowing exactly where to be to close down space.',
        },
      ],
    },
  },
};

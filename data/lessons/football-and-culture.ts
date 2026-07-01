import { Lesson } from '@/types/lesson';

export const footballAndCulture: Lesson = {
  slug: 'football-and-culture',
  title: 'Football and Culture',
  subtitle: 'Unit 4 — Reading & Writing Football',
  level: 'B1-B2',
  description: 'Football is more than a sport — it is a mirror of society. The game reflects history, politics, identity, and community in ways no other sport can match. This lesson explores the cultural language of football — the words and phrases that connect the beautiful game to the wider world.',
  heroImage: '/images/football-culture.png',

  warmUp: {
    questions: [
      'Is football just a sport in your country, or does it represent something bigger — a region, a culture, a way of life?',
      'Have you ever heard football used as a metaphor in a political speech, a news article, or a workplace conversation?',
      'What is the most passionate or emotional moment you have ever experienced at a football match?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Relative Clauses — Defining and Non-Defining',
    description: 'Football writing and cultural commentary frequently use relative clauses to add meaning and context. Defining relative clauses identify which person or thing we mean — they are essential to the sentence\'s meaning and have no commas: "The club that won the European Cup in 1967 made history." Non-defining relative clauses add extra information about something already identified — they are separated by commas and can be removed without losing the core meaning: "Celtic, who were the first British club to win the European Cup, made history in 1967." In English, you can use "that" in defining relative clauses but NOT in non-defining ones. "The manager that changed the club" (defining — OK). "Diego Maradona, that scored the goal, ..." (non-defining — NOT OK, must be "who"). This is a subtle but important distinction in formal and journalistic writing.',
    positiveExamples: [
      {
        sentence: '"The manager who transformed the club\'s identity was appointed with no prior top-flight experience."',
        note: 'Defining relative clause — identifies which specific manager',
      },
      {
        sentence: '"Diego Maradona, who scored the most controversial goal in World Cup history, remains the most debated figure in football."',
        note: 'Non-defining relative clause — adds information about an already identified person',
      },
      {
        sentence: '"The city where the sport was born now struggles to maintain a top-flight club."',
        note: '"Where" used in a defining relative clause for location',
      },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'ULTRAS',
      partOfSpeech: 'noun',
      definition: 'Highly organised, extremely passionate fan groups — known for coordinated chanting, displays, and sometimes confrontational behaviour.',
      example: '"The ultras produced a stunning pre-match display — thousands of cards held up to form the club crest across the entire end of the stadium."',
      imageSlug: '/images/ultras.png',
    },
    {
      word: 'DERBY',
      partOfSpeech: 'noun',
      definition: 'A match between two local rivals — teams from the same city or region.',
      example: '"No match in the city\'s calendar generates more heat than the derby — two clubs, two different histories, one fiercely divided city."',
      imageSlug: '/images/derby.png',
    },
    {
      word: 'IDENTITY',
      partOfSpeech: 'noun',
      definition: 'The cultural, historical, or social character of a club, a player, or a supporter group.',
      example: '"The club\'s identity is rooted in the working-class community that founded it — a history that still shapes its culture a century later."',
      imageSlug: '/images/identity.png',
    },
    {
      word: 'FOLKLORE',
      partOfSpeech: 'noun',
      definition: 'The stories, myths, and legends passed down through generations of supporters.',
      example: '"The match has entered club folklore — a story that every supporter knows, that fathers tell their children on the way to the ground."',
      imageSlug: '/images/folklore.png',
    },
    {
      word: 'TERRACES',
      partOfSpeech: 'noun',
      definition: 'The standing areas of older football grounds — synonymous with the traditional supporter experience before all-seater stadiums.',
      example: '"Before the Taylor Report changed English football, the terraces were where the atmosphere was made — packed, loud, and often dangerous."',
      imageSlug: '/images/terraces.png',
    },
    {
      word: 'RIVALRY',
      partOfSpeech: 'noun',
      definition: 'A competitive opposition between two clubs, cities, or nations with a long shared history.',
      example: '"The rivalry between the two clubs is more than sport — it carries decades of history, local politics, and cultural identity."',
      imageSlug: '/images/rivalry.png',
    },
    {
      word: 'GRASSROOTS',
      partOfSpeech: 'adjective',
      definition: 'The foundation level of football — community, youth, and amateur football rather than professional leagues.',
      example: '"Without investment in grassroots football, the pipeline of talent that feeds the professional game will eventually dry up."',
      imageSlug: '/images/grassroots.png',
    },
    {
      word: 'HERITAGE',
      partOfSpeech: 'noun',
      definition: 'A club\'s or sport\'s history, traditions, and cultural legacy — what is passed down from one generation to the next.',
      example: '"The club\'s centenary year was a celebration of its heritage — 100 years of stories, trophies, heartbreaks, and community."',
      imageSlug: '/images/heritage.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PASS DOWN',
      definition: 'To transmit something — a tradition, a story, or a love of a club — from one generation to the next.',
      example: '"The passion for this club is passed down through families — grandparents bringing grandchildren to the ground for the first time."',
      imageSlug: '/images/pass-down.png',
},
    {
      phrase: 'BRING TOGETHER',
      definition: 'To unite people — football as a force for community cohesion.',
      example: '"The World Cup brings together nations that would never otherwise share the same experience — 60,000 strangers united by a single moment."',
      imageSlug: '/images/bring-together.png',
},
    {
      phrase: 'GROW UP WITH',
      definition: 'To experience something from childhood — to be shaped by it as you develop.',
      example: '"He grew up with football as part of his identity — the stadium was as familiar to him as his own home."',
      imageSlug: '/images/grow-up-with.png',
},
    {
      phrase: 'STAND FOR',
      definition: 'To represent or symbolise something beyond itself.',
      example: '"For millions of fans, this club stands for more than football — it stands for a community, a way of life, a source of pride."',
      imageSlug: '/images/stand-for.png',
},
    {
      phrase: 'CROSS OVER',
      definition: 'To move from one context into another — when football culture enters politics, art, music, or other fields.',
      example: '"Football has crossed over into art, music, and literature in ways no other sport has managed — think of the films, books, and songs it has inspired."',
      imageSlug: '/images/cross-over.png',
},
    {
      phrase: 'LOOK BACK ON',
      definition: 'To reflect on something from the past — often with emotion or perspective.',
      example: '"When fans look back on that era, they remember it as the golden age — a time when everything felt possible."',
      imageSlug: '/images/look-back-on.png',
},
  ],

  onThePitch: {
    instructions: 'Football and culture meet most intensely on the pitch — in derby matches, international games, and moments when the game carries more than sporting weight.',
    items: [
      {
        cue: 'The derby atmosphere — when culture takes over',
        meaning: 'A derby match is not just a football game — it is a cultural event. The language on the pitch changes: intensity increases, every challenge carries more meaning, and the crowd\'s energy enters the players.',
        usage: '"You feel it in the warm-up — the noise is different. The aggression is different. This is personal." Derby match language on the pitch is more urgent, more physical, more emotional: "Let\'s show them who owns this city!", "Don\'t give them an inch!", "This is ours — all year we wait for this." "In a derby, the tactical plan means nothing if the mentality isn\'t right first." Captains use cultural language in derby pre-match talks: "This club, this community — they built this ground. We play for them today."',
        imageSlug: 'otp-derby-atmosphere',
      },
      {
        cue: 'National anthem before international matches — representing culture',
        meaning: 'The national anthem before an international match is the most explicit moment when football and culture meet — players represent not just a team but a nation, a history, an identity.',
        usage: '"When I hear the anthem, I think of my grandfather — he played for this country before me." The moment before an international match, as the anthem plays, involves a distinct kind of language: "Pride", "honour", "representing everyone at home", "this jersey belongs to the country." On the pitch during an international: "Play for your country!", "This is for everyone back home!", "Every single ball — for the badge!" The cultural weight of the national team is felt most strongly in those pre-match moments: the anthem, the badge, the handshake.',
        imageSlug: 'otp-national-anthem',
      },
      {
        cue: 'The captain\'s armband — cultural and community leadership',
        meaning: 'The captain\'s armband carries cultural weight beyond tactics. The captain speaks for the team, the club, and often the community — on and off the pitch.',
        usage: '"The captain\'s armband isn\'t about being the best player — it\'s about being the one the team turns to when things go wrong." On the pitch: captain language is instructional and emotional: "Come on, together! We\'ve been here before!", "Heads up — we don\'t accept this!", "This is who we are!" Post-match: the captain speaks to the team first before the manager. They set the emotional tone for the dressing room. "She\'s been captain for three years — you can see the whole team look to her first when something goes wrong. That\'s what culture looks like: it\'s not in a manual, it\'s in a person."',
        imageSlug: 'otp-captains-armband',
      },
      {
        cue: 'Football and identity — what players say about representing more than a club',
        meaning: 'Many clubs carry political, religious, or community identities — for the players who grew up supporting them, playing for the club is a deeply personal and cultural act.',
        usage: '"This isn\'t just a club for me — my whole family supports them. Every time I cross that white line, I\'m carrying them with me." On the pitch, players who represent the community they grew up in play with a different kind of energy: "He was born two streets from this stadium. When he scores here — watch his celebration. He\'s not celebrating for himself." "When things are hard in the city — economically, politically — the football club is one of the things that holds people together. The players feel that responsibility." Football as identity is invisible on the pitch but felt in every tackle.',
        imageSlug: 'otp-football-identity',
      },
      {
        cue: 'Football folklore in the dressing room — the stories that bind a team',
        meaning: 'Every club has football folklore — famous matches, legendary players, mythological moments — and these stories are told in dressing rooms across generations.',
        usage: '"Before a big match, the veteran players always told a story from the club\'s history — something to connect us to what came before." Dressing room football mythology: "Remember when they came back from three goals down in the Cup? That\'s this club." "They always play for the shirt — even when the season\'s done. That\'s the culture here." New signings learn the folklore quickly: "Within a week of joining, I knew the club\'s five biggest moments — the older players make sure of it." Folklore creates shared identity: "We\'re not just playing for now. We\'re part of something that started before us and goes on after us."',
        imageSlug: 'otp-football-folklore',
      },
      {
        cue: 'Football in literature and film — references players recognise',
        meaning: 'The most culturally rich football moments — in film, literature, and music — are referenced by players and coaches in the dressing room and on the pitch.',
        usage: '"The manager compared our situation to the film — \'Remember the Titans\'. Most of the squad had seen it. Immediately we knew what he meant." Cultural references that players use on the pitch: "This is our Miracle on Ice moment", "It\'s like Escape to Victory — everyone counted us out", "We\'re writing our own chapter now." "Coaching at the highest level means knowing your players\' cultural references. The right film quote before a big game can do more than a tactical session." From Nick Hornby\'s *Fever Pitch* to *The Damned United* — football literature gives players language for the emotions the game creates.',
        imageSlug: 'otp-football-in-culture',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Interviewer', speakerColor: 'orange', text: 'You\'ve been coming to this ground for forty years. What does the club mean to you beyond the results?' },
    { speaker: 'Fan', speakerColor: 'blue', text: 'It\'s identity, isn\'t it. My father brought me here when I was six. His father brought him. It\'s passed down — like a family name.' },
    { speaker: 'Interviewer', speakerColor: 'orange', text: 'And the rivalry with the other side of the city — is that healthy or does it go too far sometimes?' },
    { speaker: 'Fan', speakerColor: 'blue', text: 'It\'s always been fierce. But there\'s a mutual respect underneath it, I think. We understand what the derby means to them because we know what it means to us.' },
    { speaker: 'Interviewer', speakerColor: 'orange', text: 'The terraces are gone now. All-seater. Do you miss that atmosphere?' },
    { speaker: 'Fan', speakerColor: 'blue', text: 'Desperately. The terraces were where the folklore was made. You were shoulder to shoulder with people you\'d never met — all connected by that one thing.' },
    { speaker: 'Interviewer', speakerColor: 'orange', text: 'Has the club\'s identity changed with the money that\'s come in?' },
    { speaker: 'Fan', speakerColor: 'blue', text: 'The heritage is still there if you look for it. The new owners came in and they actually asked us — the supporters — what the club stands for. That gave me hope.' },
  ],

  matchingExercise: [
    { word: 'Ultras', definition: 'Highly organised passionate fan groups known for coordinated displays' },
    { word: 'Derby', definition: 'A match between two local rival clubs' },
    { word: 'Identity', definition: 'The cultural or historical character of a club or its supporters' },
    { word: 'Folklore', definition: 'Stories and legends passed down through generations of fans' },
    { word: 'Terraces', definition: 'Standing areas of older grounds — the traditional supporter experience' },
    { word: 'Rivalry', definition: 'A competitive opposition with a long shared history' },
    { word: 'Grassroots', definition: 'The community and youth foundation level of the sport' },
    { word: 'Heritage', definition: 'A club\'s history, traditions, and cultural legacy' },
  ],

  fillBlankExercise: [
    { before: 'The home', answer: 'ultras', after: 'produced a breathtaking pre-match display — the entire end of the stadium a mosaic of club colours.' },
    { before: 'Nothing in the football calendar matters more in this city than the', answer: 'derby', after: '— a match that divides families and neighbours alike.' },
    { before: 'The club\'s', answer: 'identity', after: 'is rooted in its working-class community — a history of steel workers, coal miners, and shared hardship.' },
    { before: 'The goal has entered', answer: 'folklore', after: '— every supporter in the city can describe it, though many weren\'t even born when it was scored.' },
    { before: 'The old', answer: 'terraces', after: 'are gone now, replaced by seats — but veterans still describe the noise and atmosphere as something that could never be replicated.' },
    { before: 'The', answer: 'rivalry', after: 'between the two clubs stretches back 130 years — to a time when they were separated by one street and everything it represented.' },
    { before: 'Without investment in', answer: 'grassroots', after: 'football, the talent pipeline that supplies the professional game will eventually run dry.' },
    { before: 'The centenary celebration was a chance to honour the club\'s', answer: 'heritage', after: '— to remember where it came from and what it has meant to this community.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"Celtic, who were the first British club to win the European Cup, made history in 1967." Is this a defining or non-defining relative clause?',
      options: ['Non-defining — Celtic is already identified; the clause adds extra information', 'Defining — the clause is needed to identify which Celtic is meant', 'Neither — "who" cannot be used with a club name', 'Both — it works as either type'],
      correctIndex: 0,
    },
    {
      question: 'Can you use "that" in a non-defining relative clause?',
      options: ['No — you must use "who" or "which" in non-defining clauses', 'Yes — "that" works in all relative clauses', 'Only when referring to places', 'Only in informal writing'],
      correctIndex: 0,
    },
    {
      question: 'A club\'s "folklore" refers to:',
      options: ['Stories and legends passed down through generations of fans', 'Official club records and statistics', 'The traditional songs sung on the terraces', 'The club\'s official history book'],
      correctIndex: 0,
    },
    {
      question: '"Grassroots football" refers to:',
      options: ['Community, youth, and amateur football at the base of the game', 'Football played on grass rather than artificial surfaces', 'The training ground facilities of professional clubs', 'Environmental campaigns in professional football'],
      correctIndex: 0,
    },
    {
      question: '"The club that won the title in 1985 was relegated the following year." Is this defining or non-defining?',
      options: ['Defining — "that" is used and there are no commas; identifies a specific club', 'Non-defining — the clause adds extra information about an identified club', 'Neither — "that" cannot be used with clubs', 'It is ambiguous without more context'],
      correctIndex: 0,
    },
    {
      question: 'What does a local "derby" mean in football?',
      options: ['A match between two clubs from the same city or region', 'A major cup final', 'A match that goes to extra time', 'A fixture between two clubs of equal ranking'],
      correctIndex: 0,
    },
    {
      question: '"The passion for the club is passed down through families." What does "passed down" mean here?',
      options: ['Transmitted from one generation to the next', 'Written down in official club documentation', 'Decided upon and voted for by supporters', 'Given as a gift to new members of the community'],
      correctIndex: 0,
    },
    {
      question: '"The club stands for more than football." What does "stands for" mean here?',
      options: ['Represents or symbolises something beyond itself', 'Physically occupies a particular location', 'Has a standing section in the stadium', 'Tolerates or accepts a particular situation'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the correct relative clause structure.',
    items: [
      {
        sentence: 'The club ___ won the European Cup three times in a row remains one of the greatest achievements in football history.',
        options: ['that', 'who', 'which'],
        correctIndex: 0,
        explanation: 'Defining relative clause with "that" — no commas, essential to identify which club. "That won" is the correct form. This clause is necessary because without it, we don\'t know which club is being referred to.',
      },
      {
        sentence: 'The manager, ___ took over the club in the depths of relegation trouble, transformed it into title contenders within three years.',
        options: ['who', 'that', 'which'],
        correctIndex: 0,
        explanation: 'Non-defining relative clause — the manager is already identified in context. "Who" is required for a person in non-defining clauses; "that" cannot be used. Commas separate the clause from the main sentence.',
      },
      {
        sentence: 'The town ___ the game was invented is a suburb of north London that most football fans have never visited.',
        options: ['where', 'which', 'that'],
        correctIndex: 0,
        explanation: '"Where" is used in a relative clause referring to a place. "The town where..." = the specific town at which the game was invented. "Which" would also be acceptable with a preposition: "The town in which..."',
      },
      {
        sentence: 'Celtic, ___ the first British club to win the European Cup, celebrated their centenary in 2017.',
        options: ['who were', 'that were', 'which were'],
        correctIndex: 0,
        explanation: 'Non-defining relative clause. Celtic is already named, so we use "who" (not "that"). The clause adds the historical fact but doesn\'t identify which Celtic is being discussed.',
      },
      {
        sentence: 'The match ___ changed the club\'s history forever was played in front of only 12,000 fans.',
        options: ['that', 'who', 'which'],
        correctIndex: 0,
        explanation: 'Defining relative clause — identifies which match. "That" is standard in defining relative clauses and is preferred over "which" in informal and journalistic English when referring to things, not people.',
      },
      {
        sentence: 'Maradona, ___ football career spanned three decades, remains one of the most debated figures in the sport.',
        options: ['whose', 'who', 'that'],
        correctIndex: 0,
        explanation: '"Whose" is the possessive relative pronoun — used for people (and occasionally things). "Whose career" = his career. This is a non-defining clause (Maradona is named), hence no "that" and commas are required.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Identify whether each relative clause is defining or non-defining, and whether it is correct.',
      items: [
        {
          customerLine: '"The player that scored the goal was offside." Is this defining or non-defining?',
          options: [
            'Defining — "that" is used, no commas, identifies which player',
            'Non-defining — it adds extra information about an identified player',
            'It is incorrect — "that" cannot be used with people',
            'Non-defining — you can tell because it includes a verb',
          ],
          correctIndex: 0,
          explanation: '"That" with no commas = defining clause. "The player that scored the goal" identifies which specific player — there may have been many players on the pitch, so the clause is necessary to specify.',
        },
        {
          customerLine: '"Pelé, that scored over 1,000 career goals, is considered by many to be the greatest ever." Is this correct?',
          options: [
            'No — "that" cannot be used in non-defining relative clauses; it should be "who"',
            'Yes — "that" can be used for people in all relative clauses',
            'Yes — "that" is more modern and acceptable in all contexts',
            'No — the whole clause should be removed; it\'s unnecessary information',
          ],
          correctIndex: 0,
          explanation: '"That" cannot be used in non-defining relative clauses (which have commas). The commas around "that scored over 1,000 career goals" make this non-defining — Pelé is already identified — so "who" is required.',
        },
        {
          customerLine: '"Football is a sport that brings cultures together." What type of clause is this?',
          options: [
            'Defining — identifies which type of sport football is',
            'Non-defining — adds extra information about football',
            'It is neither — "brings" is a verb, not a relative clause',
            'Non-defining — it uses "that" which is only for non-defining clauses',
          ],
          correctIndex: 0,
          explanation: 'No commas + "that" = defining clause. The clause "that brings cultures together" distinguishes football from other sports that do not bring cultures together — it defines which kind of sport football is.',
        },
        {
          customerLine: 'Which sentence uses a non-defining relative clause correctly?',
          options: [
            '"The city, which has two rival clubs, has been divided by the derby for over a century."',
            '"The city that has two rival clubs, has been divided by the derby for over a century."',
            '"The city which has two rival clubs has been divided by the derby for over a century."',
            '"The city, that has two rival clubs, has been divided by the derby for over a century."',
          ],
          correctIndex: 0,
          explanation: 'Non-defining clauses require commas AND "which" (for things) or "who" (for people). Only the first option correctly uses both commas and "which". "That" cannot be used in non-defining clauses, and "which" without commas would be defining.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'The cultural commentary below has three errors in relative clause use. Find and correct them.',
      dialogue: [
        { speaker: 'Article', text: 'The rivalry, that has defined the city for 130 years, shows no sign of diminishing.' },
        { speaker: 'Article', text: 'The ultras who created the famous display last season have become central to the club\'s identity.' },
        { speaker: 'Article', text: 'Diego Maradona, which scored the Hand of God goal in 1986, remains the most controversial player in World Cup history.' },
        { speaker: 'Article', text: 'The terraces where supporters stood for decades were replaced by seating in the 1990s.' },
        { speaker: 'Article', text: 'Grassroots football, which many believe is under-funded, produces the majority of professional players.' },
        { speaker: 'Article', text: 'The heritage of the club is something which every supporter, that has ever watched a match here, feels deeply.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'The rivalry, that has defined the city',
          correction: 'The rivalry, which has defined the city',
          explanation: '"That" cannot be used in non-defining relative clauses (which have commas). "Which" is required for non-defining clauses referring to things. Since "the rivalry" is separated by commas, this is non-defining, so "which" is correct.',
        },
        {
          lineIndex: 2,
          incorrectText: 'Diego Maradona, which scored the Hand of God goal',
          correction: 'Diego Maradona, who scored the Hand of God goal',
          explanation: '"Which" is used for things, not people. For people in relative clauses — defining or non-defining — you must use "who". Maradona is a person, so "who" is required.',
        },
        {
          lineIndex: 5,
          incorrectText: 'every supporter, that has ever watched a match here, feels deeply',
          correction: 'every supporter who has ever watched a match here feels deeply',
          explanation: '"That" cannot be used in clauses separated by commas. In this context the clause is actually defining (identifying which supporters). Defining clauses for people should use "who" or "that" but NOT with commas separating them from the main clause.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each sentence about football and culture.',
      items: [
        {
          customerLine: 'Complete this sentence about a club\'s community roots.',
          salespersonStart: 'The club, which was founded in 1887 by local factory workers, still...',
          suggestedCompletion: 'carries the values of that community in everything it does — the badge, the colours, and the way the fans talk about their club.',
        },
        {
          customerLine: 'Complete this sentence about the significance of a local derby.',
          salespersonStart: 'For many fans, the derby is the one match of the season that...',
          suggestedCompletion: 'nothing else matters around — workplaces divide, families argue, and the city holds its breath for 90 minutes.',
        },
        {
          customerLine: 'Complete this sentence about how a goal has grown into folklore.',
          salespersonStart: 'The folklore around that goal, which was scored in the last minute of the last match, has grown with every retelling until...',
          suggestedCompletion: 'no one is quite sure what actually happened — but every version is better than the last.',
        },
        {
          customerLine: 'Complete this sentence about the importance of grassroots investment.',
          salespersonStart: 'Without grassroots football, the professional game would eventually...',
          suggestedCompletion: 'lose its connection to the communities that created it — and the talent, the passion, and the culture would all eventually fade.',
        },
      ],
    },
  },
};

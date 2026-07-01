import { Lesson } from '../../types/lesson';

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
    title: 'Relative Clauses — Defining and Non-Defining',
    explanation: 'Football writing and cultural commentary frequently use relative clauses to add meaning and context. Defining relative clauses identify which person or thing we mean — they are essential to the sentence\'s meaning and have no commas: "The club that won the European Cup in 1967 made history." Non-defining relative clauses add extra information about something already identified — they are separated by commas and can be removed without losing the core meaning: "Celtic, who were the first British club to win the European Cup, made history in 1967." Understanding both types makes you a more precise reader and writer of football English.',
    examples: [
      {
        sentence: '"The manager who transformed the club\'s identity was appointed with no prior top-flight experience."',
        label: 'Defining relative clause — identifies which specific manager',
      },
      {
        sentence: '"Diego Maradona, who scored the most controversial goal in World Cup history, remains the most debated figure in football."',
        label: 'Non-defining relative clause — adds information about an already identified person',
      },
      {
        sentence: '"The city where the sport was born now struggles to maintain a top-flight club."',
        label: '"Where" used in a defining relative clause for location',
      },
    ],
    tip: 'In English, you can use "that" in defining relative clauses but NOT in non-defining ones. "The manager that changed the club" (defining — OK). "Diego Maradona, that scored the goal, ..." (non-defining — NOT OK, must be "who"). This is a subtle but important distinction in formal and journalistic writing.',
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
      partOfSpeech: 'adjective / noun',
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
      inAction: 'Used for intergenerational cultural transmission.',
      register: 'neutral',
      inContext: 'Football culture, tradition, family.',
    },
    {
      phrase: 'BRING TOGETHER',
      definition: 'To unite people — football as a force for community cohesion.',
      example: '"The World Cup brings together nations that would never otherwise share the same experience — 60,000 strangers united by a single moment."',
      inAction: 'Used for unifying events or forces.',
      register: 'neutral',
      inContext: 'Football culture, community, society.',
    },
    {
      phrase: 'GROW UP WITH',
      definition: 'To experience something from childhood — to be shaped by it as you develop.',
      example: '"He grew up with football as part of his identity — the stadium was as familiar to him as his own home."',
      inAction: 'Used for things that form part of a person\'s upbringing and identity.',
      register: 'neutral',
      inContext: 'Culture, identity, biography.',
    },
    {
      phrase: 'STAND FOR',
      definition: 'To represent or symbolise something beyond itself.',
      example: '"For millions of fans, this club stands for more than football — it stands for a community, a way of life, a source of pride."',
      inAction: 'Used for symbolic meaning beyond the literal.',
      register: 'neutral',
      inContext: 'Culture, politics, identity.',
    },
    {
      phrase: 'CROSS OVER',
      definition: 'To move from one context into another — when football culture enters politics, art, music, or other fields.',
      example: '"Football has crossed over into art, music, and literature in ways no other sport has managed — think of the films, books, and songs it has inspired."',
      inAction: 'Used for cultural boundary-crossing.',
      register: 'neutral',
      inContext: 'Culture, media, arts.',
    },
    {
      phrase: 'LOOK BACK ON',
      definition: 'To reflect on something from the past — often with emotion or perspective.',
      example: '"When fans look back on that era, they remember it as the golden age — a time when everything felt possible."',
      inAction: 'Used for nostalgic or reflective discussion of the past.',
      register: 'neutral',
      inContext: 'Football history, nostalgia, journalism.',
    },
  ],

  onThePitch: [
    {
      id: 'ootpFC1',
      title: 'Your Club\'s Identity',
      image: '/images/ootp-club-identity.png',
      description: 'Students describe the cultural identity of a club they support or know well.',
      prompt: 'Describe the cultural identity of a club you follow or know well. Where does the club come from? What community does it represent? What stories are part of its folklore? Use at least four vocabulary items from this lesson and at least one relative clause.',
    },
    {
      id: 'ootpFC2',
      title: 'Derby Day',
      image: '/images/ootp-derby-day.png',
      description: 'Students discuss the cultural significance of local derbies.',
      prompt: 'Is there a derby in your country or a country you follow? What makes it special beyond the result on the pitch? Describe the atmosphere, the history, the rivalry. What does the match represent for both sets of fans?',
    },
    {
      id: 'ootpFC3',
      title: 'Relative Clause Challenge',
      image: '/images/ootp-relative-clause.png',
      description: 'Students rewrite sentences using defining and non-defining relative clauses.',
      prompt: 'Combine each pair of sentences using a relative clause: (1) "The stadium was built in 1902. It has hosted three FA Cup finals." (2) "The manager won the league title. He was appointed with no previous experience." (3) "The city has two rival clubs. The clubs represent completely different communities." Identify whether each is defining or non-defining.',
    },
    {
      id: 'ootpFC4',
      title: 'Football and Politics',
      image: '/images/ootp-football-politics.png',
      description: 'Students discuss the relationship between football and political identity.',
      prompt: 'In many countries, football clubs are associated with political movements, religions, or national identities. Choose an example you know — Celtic and Rangers, Lazio and Roma, FC Barcelona and Catalan identity, Ajax and Amsterdam\'s Jewish community. Explain the connection. How does football carry meaning beyond sport?',
    },
    {
      id: 'ootpFC5',
      title: 'Grassroots vs Elite',
      image: '/images/ootp-grassroots.png',
      description: 'Students debate whether professional football has lost its connection with its grassroots.',
      prompt: 'Modern football is dominated by billionaire owners, 100-million-euro transfers, and global brands. Has the sport lost its connection with the grassroots communities that created it? Debate both sides. Use vocabulary from this lesson.',
    },
    {
      id: 'ootpFC6',
      title: 'Football in Your Language',
      image: '/images/ootp-football-language.png',
      description: 'Students explore how football intersects with their own cultural and linguistic heritage.',
      prompt: 'Think about football in your own language and culture. Are there expressions, songs, or stories that only make sense in your language or your culture? Are there aspects of football culture that don\'t translate well into English? Share and explain to the group.',
    },
  ],

  videos: [],

  dialogue: {
    title: 'More Than a Game',
    context: 'A documentary interviewer speaks to a lifelong supporter about what the club means to her.',
    lines: [
      { speaker: 'Interviewer', text: 'You\'ve been coming to this ground for forty years. What does the club mean to you beyond the results?' },
      { speaker: 'Fan', text: 'It\'s identity, isn\'t it. My father brought me here when I was six. His father brought him. It\'s passed down — like a family name.' },
      { speaker: 'Interviewer', text: 'And the rivalry with the other side of the city — is that healthy or does it go too far sometimes?' },
      { speaker: 'Fan', text: 'It\'s always been fierce. But there\'s a mutual respect underneath it, I think. We understand what the derby means to them because we know what it means to us.' },
      { speaker: 'Interviewer', text: 'The terraces are gone now. All-seater. Do you miss that atmosphere?' },
      { speaker: 'Fan', text: 'Desperately. The terraces were where the folklore was made. You were shoulder to shoulder with people you\'d never met — all connected by that one thing.' },
      { speaker: 'Interviewer', text: 'Has the club\'s identity changed with the money that\'s come in?' },
      { speaker: 'Fan', text: 'The heritage is still there if you look for it. The new owners came in and they actually asked us — the supporters — what the club stands for. That gave me hope.' },
    ],
  },

  matchingExercise: {
    title: 'Match the Term to Its Definition',
    instructions: 'Match each cultural football term to the correct definition.',
    pairs: [
      { term: 'Ultras', definition: 'Highly organised passionate fan groups known for coordinated displays' },
      { term: 'Derby', definition: 'A match between two local rival clubs' },
      { term: 'Identity', definition: 'The cultural or historical character of a club or its supporters' },
      { term: 'Folklore', definition: 'Stories and legends passed down through generations of fans' },
      { term: 'Terraces', definition: 'Standing areas of older grounds — the traditional supporter experience' },
      { term: 'Rivalry', definition: 'A competitive opposition with a long shared history' },
      { term: 'Grassroots', definition: 'The community and youth foundation level of the sport' },
      { term: 'Heritage', definition: 'A club\'s history, traditions, and cultural legacy' },
    ],
  },

  fillBlankExercise: {
    title: 'Fill in the Blank',
    instructions: 'Complete each sentence with the correct cultural vocabulary.',
    wordBank: ['ultras', 'derby', 'identity', 'folklore', 'terraces', 'rivalry', 'grassroots', 'heritage'],
    items: [
      { sentence: 'The home ___ produced a breathtaking pre-match display — the entire end of the stadium a mosaic of club colours.', answer: 'ultras' },
      { sentence: 'Nothing in the football calendar matters more in this city than the ___ — a match that divides families and neighbours alike.', answer: 'derby' },
      { sentence: 'The club\'s ___ is rooted in its working-class community — a history of steel workers, coal miners, and shared hardship.', answer: 'identity' },
      { sentence: 'The goal has entered ___ — every supporter in the city can describe it, though many weren\'t even born when it was scored.', answer: 'folklore' },
      { sentence: 'The old ___ are gone now, replaced by seats — but veterans still describe the noise and atmosphere as something that could never be replicated.', answer: 'terraces' },
      { sentence: 'The ___ between the two clubs stretches back 130 years — to a time when they were separated by one street and everything it represented.', answer: 'rivalry' },
      { sentence: 'Without investment in ___ football, the talent pipeline that supplies the professional game will eventually run dry.', answer: 'grassroots' },
      { sentence: 'The centenary celebration was a chance to honour the club\'s ___ — to remember where it came from and what it has meant to this community.', answer: 'heritage' },
    ],
  },

  multipleChoiceExercise: {
    title: 'Choose the Correct Answer',
    instructions: 'Choose the answer that best completes or answers each question.',
    items: [
      {
        question: '"Celtic, who were the first British club to win the European Cup, made history in 1967." Is this a defining or non-defining relative clause?',
        options: ['Non-defining — Celtic is already identified; the clause adds extra information', 'Defining — the clause is needed to identify which Celtic is meant', 'Neither — "who" cannot be used with a club name', 'Both — it works as either type'],
        answer: 'Non-defining — Celtic is already identified; the clause adds extra information',
      },
      {
        question: 'Can you use "that" in a non-defining relative clause?',
        options: ['No — you must use "who" or "which" in non-defining clauses', 'Yes — "that" works in all relative clauses', 'Only when referring to places', 'Only in informal writing'],
        answer: 'No — you must use "who" or "which" in non-defining clauses',
      },
      {
        question: 'A club\'s "folklore" refers to:',
        options: ['Stories and legends passed down through generations of fans', 'Official club records and statistics', 'The traditional songs sung on the terraces', 'The club\'s official history book'],
        answer: 'Stories and legends passed down through generations of fans',
      },
      {
        question: '"Grassroots football" refers to:',
        options: ['Community, youth, and amateur football at the base of the game', 'Football played on grass rather than artificial surfaces', 'The training ground facilities of professional clubs', 'Environmental campaigns in professional football'],
        answer: 'Community, youth, and amateur football at the base of the game',
      },
      {
        question: '"The club that won the title in 1985 was relegated the following year." Is this defining or non-defining?',
        options: ['Defining — "that" is used and there are no commas; identifies a specific club', 'Non-defining — the clause adds extra information about an identified club', 'Neither — "that" cannot be used with clubs', 'It is ambiguous without more context'],
        answer: 'Defining — "that" is used and there are no commas; identifies a specific club',
      },
      {
        question: 'What does a local "derby" mean in football?',
        options: ['A match between two clubs from the same city or region', 'A major cup final', 'A match that goes to extra time', 'A fixture between two clubs of equal ranking'],
        answer: 'A match between two clubs from the same city or region',
      },
      {
        question: '"The passion for the club is passed down through families." What does "passed down" mean here?',
        options: ['Transmitted from one generation to the next', 'Written down in official club documentation', 'Decided upon and voted for by supporters', 'Given as a gift to new members of the community'],
        answer: 'Transmitted from one generation to the next',
      },
      {
        question: '"The club stands for more than football." What does "stands for" mean here?',
        options: ['Represents or symbolises something beyond itself', 'Physically occupies a particular location', 'Has a standing section in the stadium', 'Tolerates or accepts a particular situation'],
        answer: 'Represents or symbolises something beyond itself',
      },
    ],
  },

  completeSentenceExercise: {
    title: 'Complete the Sentence — Grammar Focus',
    instructions: 'Complete each sentence using the correct relative clause structure.',
    items: [
      {
        sentence: 'The club ___ (win) the European Cup three times in a row remains one of the greatest achievements in football history.',
        answer: 'that won',
        explanation: 'Defining relative clause with "that" — no commas, essential to identify which club. "That won" is the correct form. This clause is necessary because without it, we don\'t know which club is being referred to.',
      },
      {
        sentence: 'The manager, ___ (take over) the club in the depths of relegation trouble, transformed it into title contenders within three years.',
        answer: 'who took over',
        explanation: 'Non-defining relative clause — the manager is already identified in context. "Who" is required for a person in non-defining clauses; "that" cannot be used. Commas separate the clause from the main sentence.',
      },
      {
        sentence: 'The town ___ the game was invented is a suburb of north London that most football fans have never visited.',
        answer: 'where',
        explanation: '"Where" is used in a relative clause referring to a place. "The town where..." = the specific town at which the game was invented. "Which" would also be acceptable with a preposition: "The town in which..."',
      },
      {
        sentence: 'Celtic, ___ the first British club to win the European Cup, celebrated their centenary in 2017.',
        answer: 'who were',
        explanation: 'Non-defining relative clause. Celtic is already named, so we use "who" (not "that"). The clause adds the historical fact but doesn\'t identify which Celtic is being discussed.',
      },
      {
        sentence: 'The match ___ changed the club\'s history forever was played in front of only 12,000 fans — almost no one witnessed it live.',
        answer: 'that',
        explanation: 'Defining relative clause — identifies which match. "That" is standard in defining relative clauses and is preferred over "which" in informal and journalistic English when referring to things, not people.',
      },
      {
        sentence: 'Maradona, ___ football career spanned three decades, remains one of the most ___ figures in the sport.',
        answer: 'whose / debated',
        explanation: '"Whose" is the possessive relative pronoun — used for people (and occasionally things). "Whose career" = his career. This is a non-defining clause (Maradona is named), hence no "that" and commas are required.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      title: 'Defining or Non-Defining?',
      instructions: 'Identify whether each relative clause is defining or non-defining, and whether it is correct.',
      items: [
        {
          prompt: '"The player that scored the goal was offside." Is this defining or non-defining?',
          options: [
            'Defining — "that" is used, no commas, identifies which player',
            'Non-defining — it adds extra information about an identified player',
            'It is incorrect — "that" cannot be used with people',
            'Non-defining — you can tell because it includes a verb',
          ],
          answer: 'Defining — "that" is used, no commas, identifies which player',
        },
        {
          prompt: '"Pelé, that scored over 1,000 career goals, is considered by many to be the greatest ever." Is this correct?',
          options: [
            'No — "that" cannot be used in non-defining relative clauses; it should be "who"',
            'Yes — "that" can be used for people in all relative clauses',
            'Yes — "that" is more modern and acceptable in all contexts',
            'No — the whole clause should be removed; it\'s unnecessary information',
          ],
          answer: 'No — "that" cannot be used in non-defining relative clauses; it should be "who"',
        },
        {
          prompt: '"Football is a sport that brings cultures together." What type of clause is this?',
          options: [
            'Defining — identifies which type of sport football is',
            'Non-defining — adds extra information about football',
            'It is neither — "brings" is a verb, not a relative clause',
            'Non-defining — it uses "that" which is only for non-defining clauses',
          ],
          answer: 'Defining — identifies which type of sport football is',
        },
        {
          prompt: 'Which sentence uses a non-defining relative clause correctly?',
          options: [
            '"The city, which has two rival clubs, has been divided by the derby for over a century."',
            '"The city that has two rival clubs, has been divided by the derby for over a century."',
            '"The city which has two rival clubs has been divided by the derby for over a century."',
            '"The city, that has two rival clubs, has been divided by the derby for over a century."',
          ],
          answer: '"The city, which has two rival clubs, has been divided by the derby for over a century."',
        },
      ],
    },

    spotTheMistake: {
      title: 'Spot the Mistake',
      instructions: 'The cultural commentary below has three errors in relative clause use. Find and correct them.',
      dialogue: [
        { speaker: 'Article', text: 'The rivalry, that has defined the city for 130 years, shows no sign of diminishing.' },
        { speaker: 'Article', text: 'The ultras who created the famous display last season have become central to the club\'s identity.' },
        { speaker: 'Article', text: 'Diego Maradona, which scored the Hand of God goal in 1986, remains the most controversial player in World Cup history.' },
        { speaker: 'Article', text: 'The terraces where supporters stood for decades were replaced by seating in the 1990s.' },
        { speaker: 'Article', text: 'Grassroots football, which many believe is under-funded, produces the majority of professional players.' },
        { speaker: 'Article', text: 'The heritage of the club is something which every supporter, that has ever watched a match here, feels deeply.' },
      ],
      errors: [
        { line: 1, original: 'The rivalry, that has defined the city', correction: 'The rivalry, which has defined the city', explanation: '"That" cannot be used in non-defining relative clauses (which have commas). "Which" is required for non-defining clauses referring to things. Since "the rivalry" is separated by commas, this is non-defining, so "which" is correct.' },
        { line: 3, original: 'Diego Maradona, which scored the Hand of God goal', correction: 'Diego Maradona, who scored the Hand of God goal', explanation: '"Which" is used for things, not people. For people in relative clauses — defining or non-defining — you must use "who". Maradona is a person, so "who" is required.' },
        { line: 6, original: 'every supporter, that has ever watched a match here, feels deeply', correction: 'every supporter who has ever watched a match here feels deeply', explanation: '"That" cannot be used in non-defining relative clauses with commas. However, in this context it is actually a defining clause (identifying which supporters). Defining clauses with people should use "who" or "that" but NOT with commas separating them from the main clause.' },
      ],
    },

    finishTheLine: {
      title: 'Finish the Line',
      instructions: 'Complete each sentence about football and culture.',
      items: [
        {
          prompt: 'The club, which was founded in 1887 by local factory workers, still...',
          exampleAnswer: 'carries the values of that community in everything it does — the badge, the colours, and the way the fans talk about their club.',
        },
        {
          prompt: 'For many fans, the derby is the one match of the season that...',
          exampleAnswer: 'nothing else matters around — workplaces divide, families argue, and the city holds its breath for 90 minutes.',
        },
        {
          prompt: 'The folklore around that goal, which was scored in the last minute of the last match, has grown with every retelling until...',
          exampleAnswer: 'no one is quite sure what actually happened — but every version is better than the last.',
        },
        {
          prompt: 'Without grassroots football, the professional game would eventually...',
          exampleAnswer: 'lose its connection to the communities that created it — and the talent, the passion, and the culture would all eventually fade.',
        },
      ],
    },
  },
};

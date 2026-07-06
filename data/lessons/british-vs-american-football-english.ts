import { Lesson } from '@/types/lesson';

export const britishVsAmericanFootballEnglish: Lesson = {
  slug: 'british-vs-american-football-english',
  title: 'British vs American Football English',
  subtitle: 'Unit 3 — Football Idioms & Culture',
  level: 'B1-B2',
  description: 'The same sport is described in very different words depending on which side of the Atlantic you\'re on. This lesson compares British and American football English — from the name of the game itself to the vocabulary used for the pitch, the players, and the result.',
  heroImage: '/images/british-vs-american.png',

  warmUp: {
    questions: [
      'Have you ever watched football commentary from a different country? Did anything sound different or confusing?',
      'In your language, is the sport called "football" or "soccer"? What do you call the playing area — a pitch or a field?',
      'Why do you think British and American English have such different vocabulary for the same sport?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Focus: British and American English Vocabulary Differences',
    description: 'British English (BrE) and American English (AmE) often use completely different words for the same thing. In football, this is especially visible because the sport developed independently in the two cultures. Americans call it "soccer" to distinguish it from American football; the British call it simply "football". Neither is incorrect — they are different regional varieties of the same language. When learning or using football English, it helps to know both sets of vocabulary and understand which variety is more common in a given context. In international football journalism, British English is dominant — especially in European coverage. However, as MLS grows, American football English is becoming more widely heard.',
    positiveExamples: [
      {
        sentence: 'BrE: "The striker scored on the pitch in front of 50,000 supporters." AmE: "The forward scored on the field in front of 50,000 fans."',
        note: '(pitch vs field / striker vs forward / supporters vs fans)',
      },
      {
        sentence: 'BrE: "The manager named his squad for the fixture." AmE: "The coach named his roster for the game."',
        note: '(manager vs coach / squad vs roster / fixture vs game)',
      },
      {
        sentence: 'BrE: "They won nil-nil after 90 minutes." AmE: "They drew 0-0 after 90 minutes."',
        note: '(nil vs zero for scorelines)',
      },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'PITCH / FIELD',
      partOfSpeech: 'noun',
      definition: 'The playing surface. "Pitch" is the British English term; "field" is the American English equivalent.',
      example: '"The groundskeepers had worked all night to make sure the pitch (BrE) / field (AmE) was in perfect condition for the final."',
      imageSlug: '/images/pitch-field.png',
    },
    {
      word: 'BOOTS / CLEATS',
      partOfSpeech: 'noun',
      definition: 'The specialised shoes worn by players. Called "boots" in British English; "cleats" in American English.',
      example: '"He laced up his boots (BrE) / cleats (AmE) and jogged onto the pitch for the warm-up."',
      imageSlug: '/images/boots-cleats.png',
    },
    {
      word: 'KIT / UNIFORM',
      partOfSpeech: 'noun',
      definition: 'The complete playing outfit — shirt, shorts, and socks. "Kit" is British English; "uniform" is the American equivalent.',
      example: '"The team unveiled their new kit (BrE) / uniform (AmE) at the start of the season — a striking dark red with gold trim."',
      imageSlug: '/images/kit-uniform.png',
    },
    {
      word: 'NIL / ZERO',
      partOfSpeech: 'noun',
      definition: 'The score of zero in a match. British English uses "nil" (3-0 = "three-nil"); American English uses "zero" or just the number.',
      example: '"The final score was three-nil (BrE) — in American broadcasts you might hear it as three-zero or just three to nothing."',
      imageSlug: '/images/nil-zero.png',
    },
    {
      word: 'MANAGER / COACH',
      partOfSpeech: 'noun',
      definition: 'The person in charge of the team. "Manager" is the British term (carrying broader responsibility); "coach" is standard in American English.',
      example: '"The manager (BrE) / head coach (AmE) gave a passionate team talk before the match — you could hear him from the tunnel."',
      imageSlug: '/images/manager-coach.png',
    },
    {
      word: 'SUPPORTER / FAN',
      partOfSpeech: 'noun',
      definition: 'Someone who follows and cheers for a team. "Supporter" is more common in British English; "fan" is universal but especially common in American English.',
      example: '"Over 60,000 supporters (BrE) / fans (AmE) packed the stadium for the derby — the atmosphere was incredible."',
      imageSlug: '/images/supporter-fan.png',
    },
    {
      word: 'FIXTURE / GAME',
      partOfSpeech: 'noun',
      definition: 'A scheduled match. "Fixture" is British English (often used for league schedules); "game" or "match" is more American.',
      example: '"The fixture list (BrE) showed they had three home games in a row — a great run of form to build on."',
      imageSlug: '/images/fixture-game.png',
    },
    {
      word: 'SQUAD / ROSTER',
      partOfSpeech: 'noun',
      definition: 'The group of players available for selection. "Squad" is British English; "roster" is the American equivalent.',
      example: '"The manager named a 23-player squad (BrE) / roster (AmE) for the tournament — with two late injury call-ups."',
      imageSlug: '/images/squad-roster.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'CALL UP',
      definition: 'To select a player for a national team or squad — especially for the first time.',
      example: '"Three uncapped players were called up to the national squad for the first time this month."',
      imageSlug: '/images/call-up.png',
},
    {
      phrase: 'STAND IN FOR',
      definition: 'To replace someone — to perform their role when they are unavailable.',
      example: '"The reserve goalkeeper stood in for the first choice, who was ill, and kept a clean sheet."',
      imageSlug: '/images/stand-in-for.png',
},
    {
      phrase: 'BREAK THROUGH',
      definition: 'To enter the first team or achieve a higher level after a period in the lower ranks.',
      example: '"She broke through to the senior squad at just seventeen — the youngest player in the club\'s history."',
      imageSlug: '/images/break-through.png',
},
    {
      phrase: 'SUIT UP',
      definition: 'To prepare to play — getting into kit and being ready. More common in American English.',
      example: '"He hadn\'t expected to play, but the manager told him to suit up twenty minutes before kick-off."',
      imageSlug: '/images/suit-up.png',
},
    {
      phrase: 'TIE UP',
      definition: 'To finalise or complete a deal — often used for transfers.',
      example: '"The club tied up the signing with an hour to spare on deadline day."',
      imageSlug: '/images/tie-up.png',
},
    {
      phrase: 'BENCH',
      definition: 'To leave a player out of the starting line-up — placing them on the substitute bench.',
      example: '"The manager benched his best striker as a tactical decision — keeping him fresh for the second leg."',
      imageSlug: '/images/british-vs-american-football-english-bench.png',
},
  ],

  onThePitch: {
    instructions: 'On the pitch, British and American football English diverge in calls, instructions, and reactions — these are the live moments where the difference matters.',
    items: [
      {
        cue: '"Keeper\'s!" vs "Goalie\'s!" — claiming the ball',
        meaning: 'When a goalkeeper comes to claim a cross or high ball, the call must be immediate and loud. British English: "Keeper\'s!" American/international English: "Goalie\'s!" — same instruction, different word.',
        usage: '"KEEPER\'S!" — the British goalkeeper shouts once, loud and decisive. Everyone stops. The call is a command, not a request. In international or American contexts: "GOALIE\'S!" or simply "MINE!" — the meaning is identical but the word is different. On mixed-nationality teams, this causes confusion: a British keeper calling "Keeper\'s!" may not be immediately understood by players used to "Goalie\'s!" "We had a keeper from the US and a defender from England — on the first training day they nearly clashed because the call was different. They agreed on \'MINE!\' — universal."',
        imageSlug: 'otp-keepers-goalie',
      },
      {
        cue: '"Boot it!" vs "Clear it!" — the instruction to kick away',
        meaning: 'Under pressure in the defensive box, the call to kick the ball anywhere safe. British slang: "Boot it! Hoof it! Get it away!" American English: "Clear it! Get it out!"',
        usage: '"BOOT IT! Just boot it!" — British centre-back under pressure, screaming at a defender who is trying to play out. No skill required — just power. "HOOF IT!" — even more urgent, less elegant. American equivalent: "CLEAR IT! Get it out of there!" The difference in vocabulary matters less than the urgency of the instruction — but on international teams, mixed vocabulary causes hesitation. "She shouted \'hoof it\' and the American midfielder thought she meant something else — she played a short pass and they scored. After that we standardised all our calls."',
        imageSlug: 'otp-boot-clear',
      },
      {
        cue: '"On the pitch!" vs "On the field!" — where we are',
        meaning: 'British football: the playing surface is a "pitch." American soccer: it is a "field." Simple vocabulary difference, but it signals where someone learned the game.',
        usage: 'British manager pre-match: "Get on the pitch and warm up!" American coach: "Get on the field!" On mixed teams, both are understood — context makes it clear. But a British player saying "field" sounds distinctly American; an American saying "pitch" sounds like they\'ve been educated in British football. "The new American signing started saying \'pitch\' within six weeks — he picked it up from the lads." Coaches on mixed-nationality teams often settle on one word for clarity: "We say pitch — everyone learns pitch. No exceptions."',
        imageSlug: 'otp-pitch-field',
      },
      {
        cue: 'The referee\'s English — universal in the moment',
        meaning: 'Referee calls are mostly universal gestures — whistles and signals. But the verbal commands differ between British and American contexts.',
        usage: 'British referee: "Play on!" (advantage), "Away! Away! Step back!" (free kick), "That\'s a foul — number seven, name!" American referee: "Play on!", "Set up!", "Step off!" The biggest difference: British referees say "Off the wall" for free kicks; American referees say "Step back ten." "In our first international tournament, the referee said something none of us understood — turned out it was a standard call in their system but none of us had heard it before." The lesson: know the referee\'s version of the game as well as the players\' version.',
        imageSlug: 'otp-referee-english',
      },
      {
        cue: '"Cross it!" vs "Serve it in!" — delivery from wide positions',
        meaning: 'When a wide player has the ball in a position to deliver into the box, teammates shout. British: "Cross it! Put it in! Whip it in!" American: "Serve it! Send it in!"',
        usage: '"CROSS IT! CROSS IT NOW!" — British winger being told to deliver before the defender arrives. "WHIP IT IN!" — a specific instruction to curl the ball with pace and bend. American equivalent: "SERVE IT! PUT IT IN!" The word "serve" in American soccer echoes tennis — delivering to a teammate. "On international teams we always had to sync our crossing vocabulary in pre-season. \'Cross\', \'serve\', \'deliver\', \'put it in\' — they all mean the same thing but you need to know what your teammates say so you react instantly."',
        imageSlug: 'otp-cross-serve',
      },
      {
        cue: 'Boots vs cleats — equipment talk during the game',
        meaning: '"Your boots are untied!" vs "Your cleats are untied!" — same urgent message, different word. Boot and cleat are the two names for the same piece of equipment.',
        usage: '"Tie your boot! Ref, can he sort his boot?" British footballers always say boots — it is never cleats in British English. American soccer players say cleats — it is never boots in American casual speech. On mixed teams: "He stopped play for a cleat issue — our lads all said \'what?\' for a second." In international competitions, equipment officials must know both terms. "The kit man at the World Cup had to know fifteen different words for boots across fifteen different squads." Simple vocabulary, but a moment of confusion in the wrong situation can cost precious seconds.',
        imageSlug: 'otp-boots-cleats',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Journalist', speakerColor: 'orange', text: 'How are you settling in? First week on the pitch must feel different.' },
    { speaker: 'Player', speakerColor: 'blue', text: 'Yeah — you say "pitch", I\'d say "field". Little things like that. The guys had a good laugh at me on day one.' },
    { speaker: 'Journalist', speakerColor: 'orange', text: 'And what do you make of the kit? Different from what you wore in MLS?' },
    { speaker: 'Player', speakerColor: 'blue', text: 'The kit — yeah, I\'d call it a uniform. But I\'m getting used to the language. My English is fine, the football English takes adjustment.' },
    { speaker: 'Journalist', speakerColor: 'orange', text: 'The manager mentioned you in his pre-match briefing — how is he different from coaches you\'ve had before?' },
    { speaker: 'Player', speakerColor: 'blue', text: '"Manager" is interesting. In the US you have a head coach. Here the manager seems to do everything — the squad, the contracts, the press. Much more power.' },
    { speaker: 'Journalist', speakerColor: 'orange', text: 'That\'s very true. Last question — the supporter culture here. Different from American fans?' },
    { speaker: 'Player', speakerColor: 'blue', text: 'Night and day. The supporters sing for 90 minutes, standing the whole time. In MLS it\'s growing, but it\'s not like this. This is the real thing.' },
  ],

  matchingExercise: [
    { word: 'Pitch', definition: 'Field' },
    { word: 'Boots', definition: 'Cleats' },
    { word: 'Kit', definition: 'Uniform' },
    { word: 'Nil', definition: 'Zero' },
    { word: 'Manager', definition: 'Head coach' },
    { word: 'Supporters', definition: 'Fans' },
    { word: 'Fixture', definition: 'Game / Match' },
    { word: 'Squad', definition: 'Roster' },
  ],

  fillBlankExercise: [
    { before: '[BrE] The groundstaff worked overnight to prepare the', answer: 'pitch', after: 'for the cup final.' },
    { before: '[AmE] She tied her', answer: 'cleats', after: 'before sprinting onto the field for warm-ups.' },
    { before: '[BrE] The final score was two-', answer: 'nil', after: '— a comfortable win in the end.' },
    { before: '[BrE] The', answer: 'manager', after: 'refused to discuss the transfer rumours at his pre-match press conference.' },
    { before: '[BrE] Over 55,000', answer: 'supporters', after: 'roared as the home side scored in the dying minutes.' },
    { before: '[BrE] The', answer: 'fixture', after: 'list was published at the start of the season — 46 league games, plus cup competitions.' },
    { before: '[AmE] The coach named his', answer: 'roster', after: 'for the tournament — 23 players, three of them uncapped.' },
    { before: '[BrE] The players loved the new', answer: 'kit', after: '— a deep blue with a gold crest on the chest.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'In American English, what would you call the British "pitch"?',
      options: ['Field', 'Ground', 'Court', 'Lawn'],
      correctIndex: 0,
    },
    {
      question: 'A British commentator says "two-nil". How would an American broadcaster say the same score?',
      options: ['Two-zero or two-nothing', 'Two-nought', 'Two-empty', 'Double zero'],
      correctIndex: 0,
    },
    {
      question: 'What is the American English equivalent of the British word "boots"?',
      options: ['Cleats', 'Shoes', 'Studs', 'Sneakers'],
      correctIndex: 0,
    },
    {
      question: 'In British football, the person in charge of the team is usually called the:',
      options: ['Manager', 'Head coach', 'Director', 'Trainer'],
      correctIndex: 0,
    },
    {
      question: 'What does a British fan mean when they say "our home fixture against United"?',
      options: ['Our scheduled home match against United', 'Our home ground location', 'Our last meeting with United', 'Our results against United'],
      correctIndex: 0,
    },
    {
      question: '"The coach named his 25-man roster." Is this British English or American English?',
      options: ['American English', 'British English', 'Both equally common', 'Neither — it\'s incorrect'],
      correctIndex: 0,
    },
    {
      question: 'Which word describes the complete playing outfit in British English?',
      options: ['Kit', 'Gear', 'Uniform', 'Attire'],
      correctIndex: 0,
    },
    {
      question: 'What is the British English word for the group of players available for selection?',
      options: ['Squad', 'Roster', 'Team', 'Panel'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the correct British or American English vocabulary.',
    items: [
      {
        sentence: 'The _____ (BrE) was in perfect condition — the groundstaff had worked all week to get it right for the cup final.',
        options: ['pitch', 'field', 'ground'],
        correctIndex: 0,
        explanation: '"Pitch" is the British English term for the playing surface. The American equivalent is "field". In British football journalism, "pitch" is standard and "field" would mark you as using American English.',
      },
      {
        sentence: 'She laced up her _____ (AmE) and jogged onto the field — the first American player ever to represent the club.',
        options: ['cleats', 'boots', 'studs'],
        correctIndex: 0,
        explanation: '"Cleats" is the American English term for football boots. British English uses "boots". Both refer to the specialised shoes worn to play football.',
      },
      {
        sentence: 'The final score was three-_____ (BrE) — the visitors barely had a shot in 90 minutes.',
        options: ['nil', 'zero', 'nothing'],
        correctIndex: 0,
        explanation: 'In British English, zero in a score is "nil" — pronounced to rhyme with "hill". American English uses "zero" or "nothing": "three-zero" or "three to nothing".',
      },
      {
        sentence: 'The _____ (BrE) named a 23-player _____ (BrE) for the tournament — with three players earning their first call-ups.',
        options: ['manager / squad', 'coach / roster', 'trainer / team'],
        correctIndex: 0,
        explanation: '"Manager" (BrE) = "coach" (AmE). "Squad" (BrE) = "roster" (AmE). Both pairs describe the same role and group in their respective varieties of English.',
      },
      {
        sentence: 'The club released their _____ (BrE) list for the new season — 46 league matches plus cup competitions.',
        options: ['fixture', 'schedule', 'game'],
        correctIndex: 0,
        explanation: '"Fixture" is the British English term for a scheduled match. The American equivalent is simply "game" or "match". "Fixture list" = the full schedule for a season.',
      },
      {
        sentence: 'Over 40,000 _____ (BrE) packed the ground for the local derby — the biggest crowd of the season.',
        options: ['supporters', 'fans', 'spectators'],
        correctIndex: 0,
        explanation: '"Supporters" is the typical British English term for fans. "Fans" is universally understood and used in American English. Both are correct, but "supporters" carries a sense of committed, long-term loyalty.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Choose whether each sentence uses British or American English, and identify the key word.',
      items: [
        {
          customerLine: '"The head coach named a 25-man roster for the tournament." Which variety is this?',
          options: [
            'American English — "head coach" and "roster" are American terms',
            'British English — all football English uses these terms',
            'Both varieties use exactly the same words here',
          ],
          correctIndex: 0,
          explanation: '"Head coach" and "roster" are both American English terms. British English would use "manager" and "squad". Recognising these key vocabulary differences helps you identify which variety of football English you are reading or hearing.',
        },
        {
          customerLine: '"It finished nil-nil after ninety minutes on a perfect pitch." Which variety is this?',
          options: [
            'British English — "nil-nil" and "pitch" are British terms',
            'American English — these are American football terms',
            'Both — "nil-nil" and "pitch" are used globally',
          ],
          correctIndex: 0,
          explanation: '"Nil-nil" is distinctly British English for a 0-0 draw. "Pitch" is the British term for the playing surface. American English would say "zero-zero" or "scoreless draw" and "field". Both words together confirm this as British English.',
        },
        {
          customerLine: 'You are writing a match report for a British newspaper. The score was 0-0. How do you write it?',
          options: [
            '"The match ended nil-nil."',
            '"The match ended zero-zero."',
            '"The match ended in a nothing-nothing draw."',
          ],
          correctIndex: 0,
          explanation: '"Nil-nil" is the correct British English term for a 0-0 draw. "Zero-zero" is American. "Nothing-nothing" is used informally in some American contexts. For a British newspaper, "nil-nil" is standard journalistic usage.',
        },
        {
          customerLine: 'An American player says: "I love the fans here." A British journalist wants to quote him using British terminology. What do they write?',
          options: [
            '"I love the supporters here."',
            '"I love the crowd here."',
            '"I love the spectators here."',
          ],
          correctIndex: 0,
          explanation: '"Supporters" is the standard British English term for committed fans of a club. "Fans" is American English or informal. A British newspaper would typically use "supporters" in editorial copy, even when quoting someone who used "fans".',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'The dialogue below mixes British and American English inconsistently. Find three vocabulary errors and note the correct word for each variety.',
      dialogue: [
        { speaker: 'Presenter', text: 'The manager named his roster for the weekend\'s fixture — three changes from the midweek squad.' },
        { speaker: 'Pundit', text: 'I\'m surprised he dropped the striker. He\'s been the best player on the pitch all season.' },
        { speaker: 'Presenter', text: 'The boots have been impressive too — especially that run of three goals in four games.' },
        { speaker: 'Pundit', text: 'Absolutely. And on a healthy field — that pitch last week was a disgrace.' },
        { speaker: 'Presenter', text: 'The supporters will be expecting a performance. The fans have been brilliant this season.' },
        { speaker: 'Pundit', text: 'The head coach needs to make sure the cleats are clean and the boots are ready. Big match.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'named his roster',
          correction: 'named his squad (BrE) OR named his roster (AmE) — pick one variety and be consistent',
          explanation: 'In British football, the manager names his "squad". "Roster" is American. Mixing "manager" (BrE) with "roster" (AmE) in the same sentence is inconsistent. Choose one variety throughout.',
        },
        {
          lineIndex: 3,
          incorrectText: 'on a healthy field — that pitch',
          correction: 'on a good pitch — that pitch (BrE) OR on a healthy field — that field (AmE)',
          explanation: '"Field" and "pitch" describe the same thing. Switching between them mid-sentence is inconsistent. Choose one and keep it throughout the commentary.',
        },
        {
          lineIndex: 5,
          incorrectText: 'make sure the cleats are clean and the boots are ready',
          correction: 'make sure the boots are ready (BrE) OR make sure the cleats are ready (AmE)',
          explanation: '"Cleats" (AmE) and "boots" (BrE) are the same item — the specialised shoes worn by players. Using both in the same sentence as if they are different items is incorrect.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each sentence using appropriate British or American football English as indicated.',
      items: [
        {
          customerLine: 'Complete this sentence in British English about the season schedule.',
          salespersonStart: 'After studying the fixture list, the manager confirmed that the next three...',
          suggestedCompletion: 'matches were all at home — a great opportunity to build momentum.',
        },
        {
          customerLine: 'Complete this sentence in American English about squad selection.',
          salespersonStart: 'The head coach announced the roster for the tournament, with...',
          suggestedCompletion: 'three surprise call-ups and two veterans returning from injury.',
        },
        {
          customerLine: 'Complete this sentence in British English about match conditions.',
          salespersonStart: 'The pitch was in perfect condition despite last week\'s rain, and the...',
          suggestedCompletion: 'groundstaff deserved enormous credit for their overnight work.',
        },
        {
          customerLine: 'Complete this sentence using either variety, focusing on fan atmosphere.',
          salespersonStart: 'Whether you call them supporters or fans, the atmosphere at this ground...',
          suggestedCompletion: 'is unlike anything else in world football — 90 minutes of pure noise.',
        },
      ],
    },
  },
};

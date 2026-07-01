import { Lesson } from '../../types/lesson';

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
    title: 'British and American English Vocabulary Differences',
    explanation: 'British English (BrE) and American English (AmE) often use completely different words for the same thing. In football, this is especially visible because the sport developed independently in the two cultures. Americans call it "soccer" to distinguish it from American football; the British call it simply "football". Neither is incorrect — they are different regional varieties of the same language. When learning or using football English, it helps to know both sets of vocabulary and to understand which variety is more common in a given context.',
    examples: [
      {
        sentence: 'BrE: "The striker scored on the pitch in front of 50,000 supporters." AmE: "The forward scored on the field in front of 50,000 fans."',
        label: 'pitch vs field / striker vs forward / supporters vs fans',
      },
      {
        sentence: 'BrE: "The manager named his squad for the fixture." AmE: "The coach named his roster for the game."',
        label: 'manager vs coach / squad vs roster / fixture vs game',
      },
      {
        sentence: 'BrE: "They won nil-nil after 90 minutes." AmE: "They drew 0-0 after 90 minutes."',
        label: 'nil vs zero for scorelines',
      },
    ],
    tip: 'In international football journalism, British English is dominant — especially in European coverage. However, as MLS grows and American commentators gain global audiences, American football English is becoming more widely heard. Both are valid; awareness of both makes you a more versatile reader and listener.',
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
      inAction: 'Used when a player receives an official selection to join a team.',
      register: 'neutral',
      inContext: 'International football, squad announcements, journalism.',
    },
    {
      phrase: 'STAND IN FOR',
      definition: 'To replace someone — to perform their role when they are unavailable.',
      example: '"The reserve goalkeeper stood in for the first choice, who was ill, and kept a clean sheet."',
      inAction: 'Used for temporary replacement of a player or person.',
      register: 'neutral',
      inContext: 'Football, workplace, everyday English.',
    },
    {
      phrase: 'BREAK THROUGH',
      definition: 'To enter the first team or achieve a higher level after a period in the lower ranks.',
      example: '"She broke through to the senior squad at just seventeen — the youngest player in the club\'s history."',
      inAction: 'Used when someone achieves something after a period of effort or development.',
      register: 'neutral',
      inContext: 'Sport, business, creative industries.',
    },
    {
      phrase: 'SUIT UP',
      definition: 'To prepare to play — getting into kit and being ready. More common in American English.',
      example: '"He hadn\'t expected to play, but the manager told him to suit up twenty minutes before kick-off."',
      inAction: 'Used informally for preparing to play or participate.',
      register: 'informal / American',
      inContext: 'American sports broadcasting, informal football conversation.',
    },
    {
      phrase: 'TIE UP',
      definition: 'To finalise or complete a deal — often used for transfers.',
      example: '"The club tied up the signing with an hour to spare on deadline day."',
      inAction: 'Used when a negotiation or agreement reaches its conclusion.',
      register: 'neutral',
      inContext: 'Transfers, business deals, journalism.',
    },
    {
      phrase: 'BENCH',
      definition: 'To leave a player out of the starting line-up — placing them on the substitute bench.',
      example: '"The manager benched his best striker as a tactical decision — keeping him fresh for the second leg."',
      inAction: 'Used when a coach decides not to start a player.',
      register: 'informal / American',
      inContext: 'Football, American sports culture.',
    },
  ],

  onThePitch: [
    {
      id: 'ootpBVA1',
      title: 'Translate the Commentary',
      image: '/images/ootp-translate-commentary.png',
      description: 'You rewrite British commentary in American English and vice versa.',
      prompt: 'Rewrite the following in American English: "The manager named his squad for the fixture. The striker scored on a perfect pitch in front of 60,000 supporters — the final score was two-nil." Then rewrite the American version back into British English for practice.',
    },
    {
      id: 'ootpBVA2',
      title: 'Which English?',
      image: '/images/ootp-which-english.png',
      description: 'Students identify whether each sentence uses British or American football English.',
      prompt: 'Read each sentence and say whether it is British English (BrE) or American English (AmE): (1) "The coach named his 25-man roster for the tournament." (2) "The manager pulled the striker off at half-time." (3) "She laced up her cleats and jogged onto the field." (4) "It finished nil-nil after extra time."',
    },
    {
      id: 'ootpBVA3',
      title: 'Growing Up Football',
      image: '/images/ootp-growing-up-football.png',
      description: 'Students discuss which version of football English they grew up with.',
      prompt: 'Which variety of football English are you most familiar with? Do you say "pitch" or "field"? "Manager" or "coach"? "Nil" or "zero"? Is there a third version — your local language equivalent? Share your examples with the group.',
    },
    {
      id: 'ootpBVA4',
      title: 'The Global Game',
      image: '/images/ootp-global-game.png',
      description: 'Students discuss whether global football broadcasting is making the two varieties converge.',
      prompt: 'Watch two clips of football commentary — one British, one American (or imagine them). What differences do you notice? Is British football English becoming more American over time, or is it staying separate? Discuss with examples.',
    },
    {
      id: 'ootpBVA5',
      title: 'Club Announcement',
      image: '/images/ootp-club-announcement.png',
      description: 'Write a squad announcement in both British and American English.',
      prompt: 'A club is announcing its squad for a major tournament. Write the announcement twice — once using British English vocabulary, once using American English. Use at least four of the vocabulary pairs from this lesson (e.g., squad/roster, manager/coach).',
    },
    {
      id: 'ootpBVA6',
      title: 'False Friend Alert',
      image: '/images/ootp-false-friend.png',
      description: 'Students explore words that could cause confusion between British and American football audiences.',
      prompt: 'If a British commentator says "He\'s been dropped" and an American hears it, what might they misunderstand? What other British football terms might confuse an American audience? List three and explain the potential confusion.',
    },
  ],

  videos: [],

  dialogue: {
    title: 'Lost in Translation',
    context: 'A British journalist interviews an American player who has just signed for a Premier League club.',
    lines: [
      { speaker: 'Journalist', text: 'How are you settling in? First week on the pitch must feel different.' },
      { speaker: 'Player', text: 'Yeah — you say "pitch", I\'d say "field". Little things like that. The guys had a good laugh at me on day one.' },
      { speaker: 'Journalist', text: 'And what do you make of the kit? Different from what you wore in MLS?' },
      { speaker: 'Player', text: 'The kit — yeah, I\'d call it a uniform. But I\'m getting used to the language. My English is fine, the football English takes adjustment.' },
      { speaker: 'Journalist', text: 'The manager mentioned you in his pre-match briefing — how is he different from coaches you\'ve had before?' },
      { speaker: 'Player', text: '"Manager" is interesting. In the US you have a head coach. Here the manager seems to do everything — the squad, the contracts, the press. Much more power.' },
      { speaker: 'Journalist', text: 'That\'s very true. Last question — the supporter culture here. Different from American fans?' },
      { speaker: 'Player', text: 'Night and day. The supporters sing for 90 minutes, standing the whole time. In MLS it\'s growing, but it\'s not like this. This is the real thing.' },
    ],
  },

  matchingExercise: {
    title: 'Match British to American English',
    instructions: 'Match each British English term with its American English equivalent.',
    pairs: [
      { term: 'Pitch', definition: 'Field' },
      { term: 'Boots', definition: 'Cleats' },
      { term: 'Kit', definition: 'Uniform' },
      { term: 'Nil', definition: 'Zero' },
      { term: 'Manager', definition: 'Head coach' },
      { term: 'Supporters', definition: 'Fans' },
      { term: 'Fixture', definition: 'Game / Match' },
      { term: 'Squad', definition: 'Roster' },
    ],
  },

  fillBlankExercise: {
    title: 'Fill in the Blank',
    instructions: 'Choose British or American English as indicated, using the vocabulary from this lesson.',
    wordBank: ['pitch', 'cleats', 'nil', 'manager', 'supporters', 'fixture', 'roster', 'kit'],
    items: [
      { sentence: '[BrE] The groundstaff worked overnight to prepare the ___ for the cup final.', answer: 'pitch' },
      { sentence: '[AmE] She tied her ___ before sprinting onto the field for warm-ups.', answer: 'cleats' },
      { sentence: '[BrE] The final score was two-___ — a comfortable win in the end.', answer: 'nil' },
      { sentence: '[BrE] The ___ refused to discuss the transfer rumours at his pre-match press conference.', answer: 'manager' },
      { sentence: '[BrE] Over 55,000 ___ roared as the home side scored in the dying minutes.', answer: 'supporters' },
      { sentence: '[BrE] The ___ list was published at the start of the season — 46 league games, plus cup competitions.', answer: 'fixture' },
      { sentence: '[AmE] The coach named his ___ for the tournament — 23 players, three of them uncapped.', answer: 'roster' },
      { sentence: '[BrE] The players loved the new ___ — a deep blue with a gold crest on the chest.', answer: 'kit' },
    ],
  },

  multipleChoiceExercise: {
    title: 'Choose the Correct Answer',
    instructions: 'Choose the answer that best fits the question.',
    items: [
      {
        question: 'In American English, what would you call the British "pitch"?',
        options: ['Field', 'Ground', 'Court', 'Lawn'],
        answer: 'Field',
      },
      {
        question: 'A British commentator says "two-nil". How would an American broadcaster say the same score?',
        options: ['Two-zero', 'Two-nothing', 'Either of the first two', 'Two-nought'],
        answer: 'Either of the first two',
      },
      {
        question: 'What is the American English equivalent of the British word "boots"?',
        options: ['Cleats', 'Shoes', 'Studs', 'Sneakers'],
        answer: 'Cleats',
      },
      {
        question: 'In British football, the person in charge of the team is usually called the:',
        options: ['Manager', 'Head coach', 'Director', 'Trainer'],
        answer: 'Manager',
      },
      {
        question: 'What does a British fan mean when they say "our home fixture against United"?',
        options: ['Our scheduled home match against United', 'Our home ground location', 'Our last meeting with United', 'Our results against United'],
        answer: 'Our scheduled home match against United',
      },
      {
        question: '"The coach named his 25-man roster." Is this British English or American English?',
        options: ['American English', 'British English', 'Both are equally common', 'Neither — it\'s incorrect'],
        answer: 'American English',
      },
      {
        question: 'Which word describes the complete playing outfit in British English?',
        options: ['Kit', 'Gear', 'Uniform', 'Attire'],
        answer: 'Kit',
      },
      {
        question: 'What is the British English word for the group of players available for selection?',
        options: ['Squad', 'Roster', 'Team', 'Panel'],
        answer: 'Squad',
      },
    ],
  },

  completeSentenceExercise: {
    title: 'Complete the Sentence — Grammar Focus',
    instructions: 'Complete each sentence using the correct British or American English vocabulary.',
    items: [
      {
        sentence: 'The ___ (BrE) was in perfect condition — the groundstaff had worked all week to get it right for the cup final.',
        answer: 'pitch',
        explanation: '"Pitch" is the British English term for the playing surface. The American equivalent is "field". In British football journalism, "pitch" is standard.',
      },
      {
        sentence: 'She laced up her ___ (AmE) and jogged onto the field — the first American player ever to represent the club.',
        answer: 'cleats',
        explanation: '"Cleats" is the American English term for football boots. British English uses "boots". Both refer to the specialised shoes worn to play.',
      },
      {
        sentence: 'The final score was three-___ (BrE) — the visitors barely had a shot in 90 minutes.',
        answer: 'nil',
        explanation: 'In British English, zero in a score is "nil" — pronounced to rhyme with "hill". American English uses "zero" or "nothing": "three-zero" or "three to nothing".',
      },
      {
        sentence: 'The ___ (AmE) named a 23-player ___ (AmE) for the tournament — with three players earning their first call-ups.',
        answer: 'coach / roster',
        explanation: '"Coach" (AmE) = "manager" (BrE). "Roster" (AmE) = "squad" (BrE). Both pairs describe the same role and group in their respective varieties.',
      },
      {
        sentence: 'The club released their ___ (BrE) list for the new season — 46 league matches plus cup competitions.',
        answer: 'fixture',
        explanation: '"Fixture" is the British English term for a scheduled match. The American equivalent is simply "game" or "match". "Fixture list" = the full schedule for a season.',
      },
      {
        sentence: 'Over 40,000 ___ (BrE) packed the ground for the local derby — the biggest crowd of the season.',
        answer: 'supporters',
        explanation: '"Supporters" is the typical British English term for fans. "Fans" is universally understood and used in American English. Both are correct, but "supporters" carries a sense of committed, long-term loyalty.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      title: 'Which Version?',
      instructions: 'Choose whether each sentence uses British or American English, and identify the key word.',
      items: [
        {
          prompt: '"The head coach named a 25-man roster for the tournament." Which variety is this?',
          options: [
            'American English — "head coach" and "roster" are American terms',
            'British English — all football English uses these terms',
            'Both varieties use exactly the same words here',
            'This sentence has a grammar error',
          ],
          answer: 'American English — "head coach" and "roster" are American terms',
        },
        {
          prompt: '"It finished nil-nil after ninety minutes on a perfect pitch." Which variety is this?',
          options: [
            'British English — "nil-nil" and "pitch" are British terms',
            'American English — these are American football terms',
            'Both — "nil-nil" and "pitch" are used globally',
            'Neither — this sentence uses incorrect vocabulary',
          ],
          answer: 'British English — "nil-nil" and "pitch" are British terms',
        },
        {
          prompt: 'You are writing a match report for a British newspaper. The score was 0-0. How do you write it?',
          options: [
            '"The match ended nil-nil."',
            '"The match ended zero-zero."',
            '"The match ended 0 to 0."',
            '"The match ended in a nothing-nothing draw."',
          ],
          answer: '"The match ended nil-nil."',
        },
        {
          prompt: 'An American player says: "I love the fans here." A British journalist wants to quote him using British terminology. What do they write?',
          options: [
            '"I love the supporters here."',
            '"I love the crowd here."',
            '"I love the spectators here."',
            '"I love the audience here."',
          ],
          answer: '"I love the supporters here."',
        },
      ],
    },

    spotTheMistake: {
      title: 'Spot the Mistake',
      instructions: 'The dialogue below mixes British and American English inconsistently. Find three vocabulary errors and suggest consistent alternatives.',
      dialogue: [
        { speaker: 'Presenter', text: 'The manager named his roster for the weekend\'s fixture — three changes from the midweek squad.' },
        { speaker: 'Pundit', text: 'I\'m surprised he dropped the striker. He\'s been the best player on the pitch all season.' },
        { speaker: 'Presenter', text: 'The boots have been impressive too — especially that run of three goals in four games.' },
        { speaker: 'Pundit', text: 'Absolutely. And on a healthy field — that pitch last week was a disgrace.' },
        { speaker: 'Presenter', text: 'The supporters will be expecting a performance. The fans have been brilliant this season.' },
        { speaker: 'Pundit', text: 'The head coach needs to make sure the cleats are clean and the boots are ready. Big match.' },
      ],
      errors: [
        { line: 1, original: 'named his roster', correction: 'named his squad (BrE) OR named his roster (AmE) — pick one variety and be consistent', explanation: 'In British football, the manager names his "squad". "Roster" is American. Mixing "manager" (BrE) with "roster" (AmE) is inconsistent.' },
        { line: 4, original: 'on a healthy field — that pitch', correction: 'on a good pitch — that pitch (BrE) OR on a healthy field — that field (AmE)', explanation: '"Field" and "pitch" describe the same thing. Switching between them mid-sentence is inconsistent. Choose one and keep it.' },
        { line: 6, original: 'make sure the cleats are clean and the boots are ready', correction: 'make sure the boots are ready (BrE) OR make sure the cleats are ready (AmE)', explanation: '"Cleats" (AmE) and "boots" (BrE) are the same item. Using both in the same sentence as if they are different things is incorrect.' },
      ],
    },

    finishTheLine: {
      title: 'Finish the Line',
      instructions: 'Complete each sentence using appropriate British or American football English as indicated.',
      items: [
        {
          prompt: '[British English] After studying the fixture list, the manager confirmed that the next three...',
          exampleAnswer: 'matches were all at home — a great opportunity to build momentum.',
        },
        {
          prompt: '[American English] The head coach announced the roster for the tournament, with...',
          exampleAnswer: 'three surprise call-ups and two veterans returning from injury.',
        },
        {
          prompt: '[British English] The pitch was in perfect condition despite last week\'s rain, and the...',
          exampleAnswer: 'groundstaff deserved enormous credit for their overnight work.',
        },
        {
          prompt: '[Either variety] Whether you call them supporters or fans, the atmosphere at this ground...',
          exampleAnswer: 'is unlike anything else in world football — 90 minutes of pure noise.',
        },
      ],
    },
  },
};

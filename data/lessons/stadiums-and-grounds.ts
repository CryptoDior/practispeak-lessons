import { Lesson } from '@/types/lesson';

export const stadiumsAndGrounds: Lesson = {
  slug: 'stadiums-and-grounds',
  title: 'Stadiums and Grounds',
  subtitle: 'Home ground, away game, pitch condition, capacity — stadium vocabulary',
  level: 'A2',
  description: 'Learn the vocabulary for football stadiums — stands, ends, capacity, pitch, and the difference between home and away. Practise prepositions of place to describe where things are inside a ground.',
  heroImage: '/images/stadiums-and-grounds-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Prepositions of place',
    description: 'We use prepositions to describe where things are. In football, we use them to describe the stadium, the pitch, and where players and fans are located. Key prepositions: in, on, at, behind, in front of, next to, opposite, along, under.',
    positivePattern: 'Subject + verb + preposition + location',
    positiveExample: '"The away fans are in the corner behind the goal. The dugouts are on the side of the pitch."',
    negativePattern: 'There is/are + no + noun + preposition + location',
    negativeExample: '"There is no roof on the away end — it gets very wet when it rains."',
    positiveExamples: [
      { sentence: 'The players wait in the tunnel before they come out onto the pitch.', note: '(in the tunnel — a long enclosed space)' },
      { sentence: 'The manager stands on the touchline and shouts instructions.', note: '(on the touchline — on a line/boundary)' },
      { sentence: 'The goalkeeper stands between the two posts.', note: '(between = in the middle of two things)' },
      { sentence: 'The fans in the north stand are behind the goal.', note: '(behind = at the back of)' },
    ],
    negativeExamples: [
      { sentence: 'There are no seats in the away end — it is a standing section.', note: '(no + noun in location)' },
      { sentence: 'The pitch is not in great condition — there are bare patches in the centre.', note: '(in + condition / in + location)' },
    ],
  },

  vocabulary: [
    {
      word: 'STADIUM',
      partOfSpeech: 'noun',
      definition: 'The large venue where football matches are played — includes the pitch, stands, and facilities.',
      example: 'The new stadium holds 60,000 fans — it is one of the largest in the country.',
      imageSlug: '/images/stadiums-and-grounds-stadium.png',
    },
    {
      word: 'CAPACITY',
      partOfSpeech: 'noun',
      definition: 'The maximum number of people who can fit inside a stadium.',
      example: 'The ground has a capacity of 55,000 — and it was completely full for the derby.',
      imageSlug: '/images/capacity.png',
    },
    {
      word: 'STAND',
      partOfSpeech: 'noun',
      definition: 'A section of seating in a stadium — usually named after a direction (north, south) or a sponsor.',
      example: 'The home fans packed into the west stand — the noise was incredible all game.',
      imageSlug: '/images/stadiums-and-grounds-stand.png',
    },
    {
      word: 'PITCH',
      partOfSpeech: 'noun',
      definition: 'The playing surface — the grass field where the match is played.',
      example: 'The pitch was in excellent condition — the groundskeeper had prepared it perfectly.',
      imageSlug: '/images/stadiums-and-grounds-pitch.png',
    },
    {
      word: 'DUGOUT',
      partOfSpeech: 'noun',
      definition: 'The covered bench on the side of the pitch where the manager, coaching staff, and substitutes sit.',
      example: 'The manager stood up from the dugout and started shouting instructions at his players.',
      imageSlug: '/images/dugout.png',
    },
    {
      word: 'AWAY END',
      partOfSpeech: 'noun',
      definition: 'The section of the stadium reserved for fans of the visiting (away) team.',
      example: 'There were only 500 away fans in the away end — a long journey for a midweek match.',
      imageSlug: '/images/stadiums-and-grounds-away-end.png',
    },
    {
      word: 'FLOODLIGHTS',
      partOfSpeech: 'noun',
      definition: 'The large lights on tall poles at each corner of the stadium — used for evening matches.',
      example: 'The floodlights came on at 7pm — a night match always has a special atmosphere.',
      imageSlug: '/images/stadiums-and-grounds-floodlights.png',
    },
    {
      word: 'TUNNEL',
      partOfSpeech: 'noun',
      definition: 'The walkway from the changing rooms to the pitch — where players enter and exit the field.',
      example: 'Both teams walked out of the tunnel together — the noise from the fans was deafening.',
      imageSlug: '/images/stadiums-and-grounds-tunnel.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'AT HOME / AT OUR GROUND',
      definition: 'Playing at your own stadium — in front of your own fans.',
      example: 'We are at home on Saturday — we have only lost twice at home all season.',
      imageSlug: '/images/at-home-at-our-ground.png',
    },
    {
      phrase: 'AWAY FROM HOME',
      definition: 'Playing at the opposition\'s ground — in front of their fans.',
      example: 'They are very hard to beat away from home — they won six of their last eight away matches.',
      imageSlug: '/images/away-from-home.png',
    },
    {
      phrase: 'ON THE TOUCHLINE',
      definition: 'Standing on the line at the side of the pitch — where managers usually stand.',
      example: 'The manager was on the touchline for the entire second half — too nervous to sit down.',
      imageSlug: '/images/stadiums-and-grounds-on-the-touchline.png',
    },
    {
      phrase: 'IN THE STANDS',
      definition: 'In the seating areas of the stadium — where supporters watch the match.',
      example: 'There were 50,000 fans in the stands — the atmosphere was electric from the first minute.',
      imageSlug: '/images/stadiums-and-grounds-in-the-stands.png',
    },
    {
      phrase: 'BEHIND THE GOAL',
      definition: 'In the area or stand that faces the goal directly — where the most vocal fans usually sit.',
      example: 'The ultras stand behind the goal and sing for the full 90 minutes — never sitting down.',
      imageSlug: '/images/behind-the-goal.png',
    },
    {
      phrase: 'ON THE PITCH',
      definition: 'On the playing surface — either during the match or before/after it.',
      example: 'The players came on the pitch for the warm-up an hour before kick-off.',
      imageSlug: '/images/stadiums-and-grounds-on-the-pitch.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases fans and commentators use when talking about the stadium experience.',
    items: [
      {
        cue: "It's a full house!",
        meaning: 'The stadium is completely full — every seat is taken.',
        usage: 'Said by commentators or fans when the attendance equals the stadium capacity. "Full house" is a phrase from theatre — a sold-out performance. In football it means a capacity crowd — 100% of seats sold.',
        imageSlug: 'otp-its-a-full-house',
      },
      {
        cue: "The ground is rocking!",
        meaning: 'The atmosphere in the stadium is incredibly loud and exciting.',
        usage: '"Rocking" = shaking with noise and energy. Used when the crowd noise is at maximum — usually after a goal, a big chance, or a huge save. "The ground is rocking" is a vivid, dramatic description of a great atmosphere.',
        imageSlug: 'otp-the-ground-is-rocking',
      },
      {
        cue: "It's a fortress.",
        meaning: 'This team is very hard to beat at their home ground — almost never lose there.',
        usage: 'A "fortress" = a military stronghold that is very hard to attack. In football it describes a home ground where the home team has an exceptional record. "Old Trafford is a fortress" = they rarely lose at home.',
        imageSlug: 'otp-its-a-fortress',
      },
      {
        cue: 'The pitch is a bog!',
        meaning: 'The playing surface is very wet, muddy, and difficult to play on.',
        usage: 'A "bog" is a very wet, muddy area of land. Used informally when the pitch condition is poor — usually after heavy rain. On a boggy pitch, fast, technical teams struggle more than direct, physical teams.',
        imageSlug: 'otp-the-pitch-is-a-bog',
      },
      {
        cue: 'A tough place to go.',
        meaning: 'It is very difficult to get a positive result at this stadium.',
        usage: 'Said about grounds with a great atmosphere or a home team with an excellent home record. "A tough place to go" is a respectful phrase — it acknowledges the challenge without saying the match is impossible.',
        imageSlug: 'otp-a-tough-place-to-go',
      },
      {
        cue: "You can't hear yourself think in here!",
        meaning: 'The crowd is so loud that it is almost impossible to concentrate.',
        usage: 'A hyperbole used to describe an incredibly loud and intense atmosphere. The noise affects both the players on the pitch and the fans in the stands. Great atmosphere can genuinely affect the performance of the away team.',
        imageSlug: 'otp-you-cant-hear-yourself-think-in-here',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Saturday\'s match is [[away from home:at the opposition\'s stadium, not our own]]. Their ground is a tough place to go. Have either of you been there?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Yes — I watched a match there last season. The [[capacity:the maximum number of people who can fit in the stadium]] is 48,000 and it was completely full. The noise was incredible — especially from the fans [[behind the goal:in the stand that faces the goal directly]].',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Where is the [[away end:the section reserved for visiting fans]]? Is it [[in the stands:in the main seating area]] or in a corner?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'It is in the corner — behind the goal at the south end. There is no roof on it either — if it rains, the away fans get wet.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'What about the [[pitch:the playing surface — the grass field where the match is played]]? Is it in good condition?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I read that it rained heavily last week — the pitch might be soft. Could be difficult for technical football.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. If the pitch is soft, direct play is better. And the manager will be [[on the touchline:standing on the line at the side of the pitch]] — he is always very vocal. The [[floodlights:the large lights at each corner for evening matches]] will be on — it is a 7:45 kick-off.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I love night matches under the [[floodlights:the large lights at each corner for evening matches]] — there is always something special about the atmosphere.',
    },
  ],

  matchingExercise: [
    { word: 'STADIUM', definition: 'The large venue where football matches are played' },
    { word: 'CAPACITY', definition: 'The maximum number of people who can fit inside a stadium' },
    { word: 'STAND', definition: 'A section of seating in a stadium — usually named after a direction' },
    { word: 'PITCH', definition: 'The playing surface — the grass field where the match is played' },
    { word: 'DUGOUT', definition: 'The covered bench on the side where the manager and substitutes sit' },
    { word: 'AWAY END', definition: 'The section reserved for fans of the visiting team' },
    { word: 'FLOODLIGHTS', definition: 'The large lights on tall poles — used for evening matches' },
    { word: 'TUNNEL', definition: 'The walkway from the changing rooms to the pitch' },
  ],

  fillBlankExercise: [
    { before: 'The manager stood', answer: 'on the touchline', after: 'for the entire second half — too nervous to sit.' },
    { before: 'Both teams walked out of the', answer: 'tunnel', after: 'together before kick-off.' },
    { before: 'The away fans were packed into the', answer: 'away end', after: '— only 300 of them for such a long journey.' },
    { before: 'The stadium', answer: 'capacity', after: 'is 60,000 — it was completely full for the final.' },
    { before: 'The', answer: 'floodlights', after: 'came on at dusk — the night match had begun.' },
    { before: 'There were 45,000 fans', answer: 'in the stands', after: '— the noise was deafening from the first whistle.' },
    { before: 'The players warmed up', answer: 'on the pitch', after: 'an hour before kick-off.' },
    { before: 'The most vocal fans sit', answer: 'behind the goal', after: '— they stand and sing for 90 minutes.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"The manager is on the touchline." Where is he?',
      options: [
        'In the dugout sitting with the substitutes',
        'Standing on the line at the side of the pitch',
        'On the pitch talking to the players',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which preposition is correct? "The fans are ___ the north stand."',
      options: ['on', 'in', 'at'],
      correctIndex: 1,
    },
    {
      question: '"It\'s a full house!" What does this mean?',
      options: [
        'The home team have won at home again',
        'The stadium is completely full — every seat taken',
        'The match is being played at a small ground',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which preposition is correct? "Players walk ___ the tunnel before the match."',
      options: ['on', 'through', 'in'],
      correctIndex: 1,
    },
    {
      question: '"The ground is a fortress." What does this mean?',
      options: [
        'The stadium is old and historic',
        'The home team almost never lose at their own ground',
        'The stadium has very strong security',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which preposition is correct? "The goalkeeper stands ___ the two posts."',
      options: ['behind', 'between', 'in front of'],
      correctIndex: 1,
    },
    {
      question: '"The pitch is a bog!" What does this mean?',
      options: [
        'The pitch is very flat and easy to play on',
        'The pitch is wet, muddy, and in poor condition',
        'The pitch is artificial grass, not real grass',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which preposition is correct? "The dugout is ___ the side of the pitch."',
      options: ['in', 'on', 'behind'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence with the correct preposition of place.',
    items: [
      {
        sentence: 'The manager stood _____ the touchline and shouted instructions all game.',
        options: ['in', 'on', 'at'],
        correctIndex: 1,
        explanation: '"On" is correct. We say "on the touchline" — because the touchline is a line, and we use "on" for surfaces and lines. Compare: "in the stand" (an enclosed area), "on the pitch" (a flat surface), "on the touchline" (a line at the edge).',
      },
      {
        sentence: 'The away fans were located _____ the corner, behind the south goal.',
        options: ['in', 'on', 'at'],
        correctIndex: 0,
        explanation: '"In" is correct. "In the corner" — corners and enclosed sections of stadiums use "in." Compare "in the north stand," "in the away end," "in the tunnel." Use "in" for three-dimensional spaces you are inside.',
      },
      {
        sentence: 'Both teams walked out _____ the tunnel together before kick-off.',
        options: ['through', 'in', 'across'],
        correctIndex: 0,
        explanation: '"Through" is correct. "Walk through the tunnel" = move from one end to the other of an enclosed space. "In the tunnel" = standing inside it. "Through" describes movement from one side to the other.',
      },
      {
        sentence: 'The goalkeeper stood _____ the two posts, ready for the penalty.',
        options: ['behind', 'between', 'in front of'],
        correctIndex: 1,
        explanation: '"Between" is correct. "Between" = in the middle of two things. The goalkeeper stands between the left post and the right post — exactly in the middle. "Behind" would mean behind the goal. "In front of" would mean in front of the goal — facing outward.',
      },
      {
        sentence: 'There were 55,000 fans _____ the stadium — a record attendance.',
        options: ['on', 'in', 'at'],
        correctIndex: 1,
        explanation: '"In" is correct. "In the stadium" — a stadium is a large enclosed space, so we use "in." Compare: "at the stadium" is also possible and describes being present at the location, but "in the stadium" is more specific — inside the structure. Both can be correct depending on context.',
      },
      {
        sentence: 'The floodlights came on _____ 7pm — the night match was about to begin.',
        options: ['in', 'on', 'at'],
        correctIndex: 2,
        explanation: '"At" is correct for specific times. "At 7pm" — we always use "at" with specific clock times. Compare: "in the evening" (a general time period), "on Monday" (a specific day), "at 7pm" (a specific time). This is a preposition of time, not place — but it appears in stadium/match contexts regularly.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read each situation and choose the best response.',
      items: [
        {
          customerLine: 'A friend visiting England asks: "What is the atmosphere like at a football ground?" What is the best description?',
          options: [
            '"It is the same as watching on TV — just louder."',
            '"It is completely different from TV. You feel the noise in the stands, you see the pitch from a real angle, and the atmosphere — especially behind the goal — is something you cannot experience on a screen. On a big match night under the floodlights, it is unforgettable."',
            '"It is usually quite quiet — most fans sit and watch the game."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses stadium vocabulary accurately (stands, behind the goal, floodlights) and gives a vivid, honest description. The sensory detail (feel, see, hear) makes it much more engaging than a flat answer.',
        },
        {
          customerLine: 'The coach asks: "Why is it an advantage to play at home?" What is the best answer?',
          options: [
            '"Because the pitch is better at home."',
            '"Because the home fans in the stands create noise that energises the home team and intimidates the away team. The away fans are in a small section — often behind the goal without a roof. The home team knows the ground, the pitch condition, and feels more comfortable."',
            '"Because home teams always win."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses vocabulary correctly (stands, behind the goal, pitch condition) and gives genuine reasons for the home advantage. It is analytical rather than just asserting "home is better."',
        },
        {
          customerLine: 'Someone says: "Does pitch condition really matter?" What is the best answer?',
          options: [
            '"No — good players can play on any surface."',
            '"Yes — a soft, muddy pitch is harder for technical teams who rely on quick passing. A firm, dry pitch suits fast, technical football. Away teams often struggle more because they are not used to the specific bounce and roll of the home pitch."',
            '"Only if the pitch is completely unplayable — otherwise it does not affect the result."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It explains why pitch condition matters with specific examples (soft/muddy vs. firm/dry, technical vs. direct football) and adds the interesting point about away teams being less familiar with the ground.',
        },
        {
          customerLine: 'Ronaldo asks: "What is the difference between a ground and a stadium?" What is the best answer?',
          options: [
            '"A stadium is bigger than a ground — grounds only hold under 10,000 fans."',
            '"In everyday English, they are often used interchangeably — both mean where a football club plays. But "ground" is more traditional and informal — British fans say "going to the ground." "Stadium" sounds more modern and grand. A non-league pitch might be called "the ground" — you would not usually call it a stadium."',
            '"A ground is outdoors. A stadium can have a roof."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The distinction is largely about register and tradition — "ground" is informal and British, "stadium" is more formal and modern. Understanding this helps you sound more natural when talking about football in English.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three preposition mistakes in this stadium description. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'The stadium capacity is 42,000 — and it was full at the night.' },
        { speaker: 'Ronaldo', text: 'We were in the north stand — just behind the goal. The atmosphere was electric.' },
        { speaker: 'Sofia', text: 'The manager stood in the touchline the whole second half — never sat down once.' },
        { speaker: 'Ronaldo', text: 'The floodlights came on at 7:30pm — it looked incredible under the lights.' },
        { speaker: 'Sofia', text: 'The players came out from the tunnel at the last minute — the crowd went crazy.' },
        { speaker: 'Ronaldo', text: 'And the away fans were on a corner section with no roof — they got completely soaked.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'full at the night',
          correction: 'full on the night',
          explanation: '"On the night" is the correct fixed phrase — it means "during that particular evening/occasion." "At the night" is not correct. We say "at night" (general — when it is night) but "on the night" (specific occasion — on that particular night). This is a common preposition of time error.',
        },
        {
          lineIndex: 2,
          incorrectText: 'stood in the touchline',
          correction: 'stood on the touchline',
          explanation: '"On the touchline" is correct — we use "on" for lines and flat surfaces. "In the touchline" is wrong because you cannot be "inside" a line. Compare: "on the pitch" (flat surface), "on the touchline" (a line), "in the stand" (an enclosed space).',
        },
        {
          lineIndex: 5,
          incorrectText: 'were on a corner section',
          correction: 'were in a corner section',
          explanation: '"In a corner section" is correct — we use "in" for sections, stands, and enclosed spaces. "On a corner section" would suggest they were standing on top of it. Compare: "in the away end," "in the north stand," "in the corner" — all use "in" because they describe enclosed or defined spaces.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the description of the stadium experience.',
      items: [
        {
          customerLine: 'Ronaldo: What makes a great football atmosphere?',
          salespersonStart: 'Coach Diallo: Several things combine to create a great atmosphere — the stadium, the fans, and the occasion.',
          suggestedCompletion: 'A stadium with fans behind the goal who stand and sing creates much more noise than a stadium where fans sit quietly in all four stands. The capacity matters — a ground that is full of 30,000 people is often louder than one with 50,000 that is half empty. Evening kick-offs under the floodlights add something special — the light, the darkness around the ground, the sense of occasion. And the match itself matters — a close, high-stakes game with goals creates a reaction from the stands that you cannot manufacture.',
        },
        {
          customerLine: 'Sofia: Why do some fans prefer standing to sitting?',
          salespersonStart: 'Coach Diallo: Standing creates a more active and intense experience — many fans find it more engaging.',
          suggestedCompletion: 'In standing sections, fans are close together, they can move, jump, and sing without restriction. The noise from a standing section — especially behind the goal — is much louder than from a seated area. In some English grounds there are now "safe standing" sections where fans can stand legally. Some fans say watching in a seated stadium feels passive — like watching in a cinema. In a standing section, you are part of the noise and the energy — not just an observer.',
        },
        {
          customerLine: 'Ronaldo: What is the difference between an away game and a home game for the players?',
          salespersonStart: 'Coach Diallo: The difference is significant — and it is mostly psychological.',
          suggestedCompletion: 'At home, you wake up in your own city, travel to a familiar ground, walk out of your own tunnel, and hear your own fans in the stands. The pitch is your pitch — you know how it plays, where it is soft, where the bounce is unpredictable. Away from home, everything is unfamiliar. You are in someone else\'s stadium, their fans are in the stands around you, and the away end — often behind the goal with no roof — gives you very little noise. The best teams are mentally strong enough to perform equally well away from home.',
        },
        {
          customerLine: 'Sofia: How has stadium design changed over the years?',
          salespersonStart: 'Coach Diallo: Modern stadiums are very different from the grounds built fifty or sixty years ago.',
          suggestedCompletion: 'Old grounds were often open on one or two sides — no roof, exposed to the weather. Modern stadiums are fully enclosed with roofs over all four stands, which keeps the noise in and the weather out. Pitches are now maintained at a much higher standard — undersoil heating means the pitch stays firm even in winter. The floodlights in modern grounds are integrated into the roof structure rather than on tall poles at the corners. And the capacity is carefully managed for safety — standing-only grounds were common in the past, but most professional stadiums are now all-seater.',
        },
      ],
    },
  },
};

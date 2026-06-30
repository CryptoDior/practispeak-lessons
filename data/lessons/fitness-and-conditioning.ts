import { Lesson } from '@/types/lesson';

export const fitnessAndConditioning: Lesson = {
  slug: 'fitness-and-conditioning',
  title: 'Fitness and Conditioning',
  subtitle: 'Match fitness, stamina, pre-season, gym sessions',
  level: 'B1-B2',
  description: 'Learn the vocabulary for player fitness and physical conditioning — from match sharpness to pre-season training, gym work, and stamina.',
  heroImage: '/images/fitness-and-conditioning-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Comparatives and superlatives',
    description: 'We use comparatives to compare two things (faster, more physical) and superlatives to describe the highest or lowest point (the fastest, the most demanding). In football, these are essential for comparing players, teams, and physical demands.',
    positivePattern: 'Comparative: adjective + -er + than / more + adjective + than. Superlative: the + adjective + -est / the most + adjective.',
    positiveExample: '"She is faster than any midfielder in the league." / "This is the most physically demanding pre-season I have ever done."',
    negativePattern: 'Do NOT use "more" with short adjectives that already take -er: "more fast" → WRONG. Do NOT use both: "more faster" → WRONG.',
    negativeExample: 'WRONG: "She is more fast than him." / RIGHT: "She is faster than him." / WRONG: "This is the most hardest pre-season." / RIGHT: "This is the hardest pre-season."',
    positiveExamples: [
      { sentence: 'He is stronger than most midfielders in the league — he rarely loses a physical challenge.', note: '(comparative: stronger than)' },
      { sentence: 'Pre-season is more intense than the regular season in terms of physical load.', note: '(comparative: more intense than)' },
      { sentence: 'She is the quickest player in the squad — nobody catches her over 30 metres.', note: '(superlative: the quickest)' },
      { sentence: 'This is the most physically demanding pre-season the club has ever put players through.', note: '(superlative: the most demanding)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "He is more stronger than any forward in the league."', note: 'Do not use "more" with -er comparatives. "Stronger" not "more stronger."' },
      { sentence: 'RIGHT: "He is stronger than any forward in the league."', note: '"Stronger" is the comparative of "strong" — no "more" needed.' },
    ],
  },

  vocabulary: [
    {
      word: 'MATCH FITNESS',
      partOfSpeech: 'noun',
      definition: 'Being physically ready to play a full match — not just generally fit, but sharp and ready for competitive football.',
      example: 'He is fit but not match fit — he has not played in three weeks and needs games to get back to full sharpness.',
      imageSlug: '/images/match-fitness.png',
    },
    {
      word: 'STAMINA',
      partOfSpeech: 'noun',
      definition: 'The ability to keep working hard for a long time without getting tired — important for playing 90 minutes at full intensity.',
      example: 'Her stamina is incredible — she runs more kilometres per match than anyone else in the squad.',
      imageSlug: '/images/stamina.png',
    },
    {
      word: 'PRE-SEASON',
      partOfSpeech: 'noun',
      definition: 'The period of training before the season starts — usually very hard physically, designed to build base fitness.',
      example: 'Pre-season is always brutal — six weeks of double sessions, long runs, and intense gym work before the first competitive match.',
      imageSlug: '/images/pre-season.png',
    },
    {
      word: 'CONDITIONING',
      partOfSpeech: 'noun',
      definition: 'Physical training designed to improve strength, speed, stamina, and overall fitness.',
      example: 'The conditioning coach works separately with each player — designing individual programs to improve their specific physical weaknesses.',
      imageSlug: '/images/conditioning.png',
    },
    {
      word: 'SHARPNESS',
      partOfSpeech: 'noun',
      definition: 'The edge that comes from playing matches regularly — quickness of thought and movement, reaction speed.',
      example: 'He lost his sharpness after two months injured — it took him several matches to feel like himself again.',
      imageSlug: '/images/sharpness.png',
    },
    {
      word: 'SPRINT',
      partOfSpeech: 'noun / verb',
      definition: 'To run at maximum speed — as fast as possible. A sprint is a short burst of maximum-effort running.',
      example: 'She sprints more than anyone in training — but the key is whether she can sprint just as hard in the 85th minute.',
      imageSlug: '/images/sprint.png',
    },
    {
      word: 'ENDURANCE',
      partOfSpeech: 'noun',
      definition: 'The ability to continue a difficult physical activity for a long time — similar to stamina but often used for longer distances.',
      example: 'The central midfielders need the best endurance in the squad — they cover the most ground in any match.',
      imageSlug: '/images/endurance.png',
    },
    {
      word: 'LOAD',
      partOfSpeech: 'noun',
      definition: 'The amount of physical work placed on a player — measured in training sessions, distances run, and intensity. Coaches manage the load to avoid fatigue and injury.',
      example: 'The conditioning coach monitors each player\'s training load — making sure no one is doing too much too soon.',
      imageSlug: '/images/load.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BUILD UP',
      definition: 'To gradually increase fitness or intensity — going from light to heavy training over time.',
      example: 'After injury, she builds up slowly — starting with light work and gradually doing more each week.',
      imageSlug: '/images/build-up-fitness.png',
    },
    {
      phrase: 'GET BACK TO',
      definition: 'To return to a previous level of fitness or form after time away.',
      example: 'He is working hard to get back to match fitness — he trains twice a day to recover the sharpness he lost.',
      imageSlug: '/images/get-back-to.png',
    },
    {
      phrase: 'PUSH THROUGH',
      definition: 'To continue despite pain, tiredness, or difficulty — to persevere when it is hard.',
      example: 'The pre-season sessions are brutal, but the players push through — they know it will make them stronger.',
      imageSlug: '/images/push-through.png',
    },
    {
      phrase: 'EASE BACK',
      definition: 'To reduce the intensity or amount of training — usually after injury or fatigue.',
      example: 'The coach eases back on the training load the day before a match — to make sure the players are fresh.',
      imageSlug: '/images/ease-back.png',
    },
    {
      phrase: 'STEP UP',
      definition: 'To increase the level of training — to train harder or more intensely.',
      example: 'She stepped up her training this week — adding extra gym sessions to build the strength she lost during the injury.',
      imageSlug: '/images/step-up.png',
    },
    {
      phrase: 'TOP UP',
      definition: 'To add a small amount of extra training to maintain or slightly improve a level.',
      example: 'He tops up his fitness with a gym session on his day off — just to stay sharp between matches.',
      imageSlug: '/images/top-up.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases used in fitness and conditioning contexts.',
    items: [
      {
        cue: 'He\'s not match fit yet.',
        meaning: 'He is generally fit but not ready to play a competitive match at full intensity.',
        usage: 'Said about a player who has been out with injury or has not played recently. "Match fit" means physically and mentally sharp enough to compete for 90 minutes. General fitness (gym work, running) is different from match fitness — you need competitive match time to be truly match fit. This phrase is very common in post-match press conferences.',
        imageSlug: 'otp-hes-not-match-fit-yet',
      },
      {
        cue: 'We need to manage his minutes.',
        meaning: 'We need to limit how many minutes this player plays — to protect them from fatigue or re-injury.',
        usage: 'Said by a coach about a player returning from injury or being protected during a busy period. "Manage his minutes" = control how much time they play. A player might be match fit for 60 minutes but not yet ready for a full 90. The coach manages their minutes by substituting them before they get too tired.',
        imageSlug: 'otp-manage-his-minutes',
      },
      {
        cue: 'Pre-season is the hardest part of the year.',
        meaning: 'The training before the season starts is the most physically demanding period.',
        usage: 'A very common opinion among players and coaches. Pre-season typically involves very high physical loads — long runs, double training sessions, gym work — because there are no matches to worry about yet. Players need this base fitness to survive the demands of the season. The superlative "the hardest" perfectly describes this period.',
        imageSlug: 'otp-pre-season-is-the-hardest',
      },
      {
        cue: 'Work rate in the last 20 minutes is what separates the top players.',
        meaning: 'The best players maintain their effort levels late in the match — their stamina and conditioning sets them apart.',
        usage: 'Said to emphasise the importance of fitness and mental strength late in a match. "Separates" means distinguishes the best from the rest. The players with the best conditioning can still press, sprint, and compete in the 85th and 90th minute. The superlative "the top players" means the highest level — the very best.',
        imageSlug: 'otp-work-rate-last-20-minutes',
      },
      {
        cue: "She's the fittest player in the squad.",
        meaning: 'She has the highest level of physical fitness in the team — better than all the others.',
        usage: 'A superlative statement about a player\'s fitness. "The fittest" = superlative of "fit." In football, this is a significant compliment — fitness is directly connected to performance. "The fittest player in the squad" covers the most ground, has the best stamina, and maintains their performance for the full 90 minutes.',
        imageSlug: 'otp-shes-the-fittest',
      },
      {
        cue: 'We\'re building towards the first match.',
        meaning: 'We are gradually increasing our physical readiness — the training is getting more intense as the season gets closer.',
        usage: 'Said during pre-season. "Building towards" means the intensity is gradually increasing — not too much too soon. The training load increases week by week until the players are ready for competitive football. "Building towards" is a useful phrase for describing gradual physical preparation.',
        imageSlug: 'otp-building-towards-first-match',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'This is the toughest week of [[pre-season:the training period before the season starts — usually very intense physical work]]. Last year was hard. This year is harder. But by the end of it, you will be in better condition than you have ever been.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The running sessions are longer than last year and the gym sessions are more intense. My legs feel like concrete.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'That is exactly the point. You must [[push through:to continue despite tiredness or difficulty]] the discomfort now — because on matchday, you will be faster, stronger, and sharper than any opponent. This is [[conditioning:physical training designed to improve strength, speed, and stamina]] at its most demanding.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What is more important for a footballer — [[stamina:the ability to keep working hard for a long time without getting tired]] or [[sharpness:the quickness of thought and movement that comes from playing matches regularly]]?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Both. But I would say match sharpness is harder to get back than basic fitness. You can run for weeks to build [[endurance:the ability to continue a physically demanding activity for a long time]] — but to get the [[match fitness:being physically ready to play a full competitive match — sharp and ready]] you need, you need matches.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'So the best way to get match fit is to play matches?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Yes. Physical fitness is not the same as match fitness. A player who has done the hardest pre-season in the world is still not as sharp as a player who has played ten competitive matches. That is why we manage the [[load:the amount of physical work placed on a player — managed carefully to avoid fatigue]] carefully.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Who is the most physically demanding player to manage in terms of load?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'The central midfielder — without a doubt. They cover more ground than any other position. Their [[sprint:to run at maximum speed — a burst of maximum-effort running]] data, their total distance, their work rate — it is the most physically demanding role in the team.',
    },
  ],

  matchingExercise: [
    { word: 'MATCH FITNESS', definition: 'Being physically sharp and ready to play a full competitive match' },
    { word: 'STAMINA', definition: 'The ability to keep working hard for a long time without getting tired' },
    { word: 'PRE-SEASON', definition: 'The training period before the season starts — usually very hard physically' },
    { word: 'CONDITIONING', definition: 'Physical training designed to improve strength, speed, and overall fitness' },
    { word: 'SHARPNESS', definition: 'Quickness of thought and movement — the edge that comes from playing regularly' },
    { word: 'ENDURANCE', definition: 'The ability to continue a physically demanding activity for a long time' },
    { word: 'LOAD', definition: 'The amount of physical work on a player — carefully managed to avoid fatigue' },
    { word: 'SPRINT', definition: 'To run at maximum speed — a burst of full-effort running' },
  ],

  fillBlankExercise: [
    { before: 'He is', answer: 'faster than', after: 'most defenders in the league — his acceleration is exceptional.' },
    { before: 'Pre-season is', answer: 'more physically demanding than', after: 'the regular season — the load is much higher.' },
    { before: 'She is', answer: 'the fittest', after: 'player in the squad — her stamina and endurance are exceptional.' },
    { before: 'This is', answer: 'the hardest', after: 'pre-season I have ever experienced — double sessions every day.' },
    { before: 'He is stronger', answer: 'than', after: 'any midfielder we have faced — he dominates physically.' },
    { before: 'The central midfielder covers', answer: 'more ground than', after: 'any other position — their endurance must be exceptional.' },
    { before: 'She is getting', answer: 'sharper than', after: 'she was last month — the match time is making a big difference.' },
    { before: 'The conditioning program this year is', answer: 'the most intense', after: 'the club has ever designed for players.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which comparative sentence is CORRECT?',
      options: [
        '"She is more fast than any other player in training."',
        '"She is fastest than any other player in training."',
        '"She is faster than any other player in training."',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which superlative sentence is CORRECT?',
      options: [
        '"This is the most hardest pre-season ever."',
        '"This is the hardest pre-season ever."',
        '"This is the more hard pre-season ever."',
      ],
      correctIndex: 1,
    },
    {
      question: '"He is not match fit yet." What does this mean?',
      options: [
        'He is injured and cannot train at all',
        'He is generally fit but not sharp enough to play a competitive match',
        'He is the least fit player in the squad',
      ],
      correctIndex: 1,
    },
    {
      question: '"The central midfielder covers more ground than any other position." What does "more ground" compare?',
      options: [
        'The distance the midfielder covers versus other positions',
        'The height of the midfielder versus other players',
        'The number of sprints versus other positions',
      ],
      correctIndex: 0,
    },
    {
      question: 'Which sentence uses "the most" CORRECTLY?',
      options: [
        '"Pre-season is the most demanding physical period of the year."',
        '"Pre-season is the most harder physical period of the year."',
        '"Pre-season is the more most demanding physical period."',
      ],
      correctIndex: 0,
    },
    {
      question: 'What is the comparative form of "strong"?',
      options: [
        'More strong',
        'Stronger',
        'Most strong',
      ],
      correctIndex: 1,
    },
    {
      question: '"She is the fittest player in the squad." What does this mean?',
      options: [
        'She is fitter than some players in the squad',
        'She has the highest level of fitness in the squad — better than everyone else',
        'She is fit but not quite the fittest',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "load" mean in the context of fitness and conditioning?',
      options: [
        'The number of players in the training session',
        'The speed of the fastest sprint',
        'The amount of physical work placed on a player — carefully monitored to prevent injury',
      ],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct comparative or superlative form.',
    items: [
      {
        sentence: 'Pre-season is _____ part of the year for any professional footballer.',
        options: ['the most demanding', 'more demanding', 'the more demanding'],
        correctIndex: 0,
        explanation: '"The most demanding" is correct — superlative. We use the superlative when comparing one thing against all others (or a group): "the most demanding part of the year" = more demanding than any other part of the year. "More demanding" is a comparative — it compares two things: "Pre-season is more demanding than the regular season." "The more demanding" is not a standard superlative form — do not add "the" to comparatives.',
      },
      {
        sentence: 'She is _____ than anyone in the squad — she runs over 12 kilometres every match.',
        options: ['the fittest', 'more fit', 'fitter'],
        correctIndex: 2,
        explanation: '"Fitter" is correct — comparative. We use comparative to compare one person/thing to another: "fitter than anyone." "The fittest" is a superlative — but it is used when comparing within a group without "than": "She is the fittest in the squad." When "than" follows the adjective, you need the comparative form. "More fit" is incorrect — "fit" is a short adjective that takes -er, not "more." The rule: short adjectives (1-2 syllables) → -er/-est; long adjectives (3+ syllables) → more/most.',
      },
      {
        sentence: 'This pre-season is _____ than last year — the sessions are longer and more intense.',
        options: ['harder', 'the hardest', 'most hard'],
        correctIndex: 0,
        explanation: '"Harder" is correct — comparative. "Than last year" tells us we are comparing two things: this pre-season vs last pre-season. Comparative + than = the right pattern. "The hardest" is a superlative — used without "than" to describe the highest point in a group: "this is the hardest pre-season ever." "Most hard" is wrong — "hard" is a short adjective, so it takes -er/-est, not more/most.',
      },
      {
        sentence: 'The central midfielder covers _____ ground than any other player in the team.',
        options: ['the most', 'more', 'most'],
        correctIndex: 1,
        explanation: '"More" is correct. "More ground than" = comparative. We are comparing the central midfielder with all other players using "than." "The most" is a superlative and does not work with "than" in this way — you would say "the central midfielder covers the most ground in the team." "Most ground than" is wrong — "most" without "the" is not standard here. When you see "than," use the comparative form: "more," "-er," "better," "further," etc.',
      },
      {
        sentence: 'His sprint speed is _____ when he is fully match fit — he loses half a second per 30 metres when tired.',
        options: ['the fastest', 'faster', 'most fast'],
        correctIndex: 1,
        explanation: '"Faster" is correct — but this requires careful thinking. The sentence is comparing his sprint speed in two conditions: "when fully match fit" vs "when tired." This is a comparison between two states — comparative is correct. "The fastest" would be correct if comparing him to all players: "He is the fastest player when fully fit." "Most fast" is wrong — "fast" is a short adjective: "faster / the fastest" not "more fast / the most fast."',
      },
      {
        sentence: 'In terms of conditioning, she is _____ player the club has ever had.',
        options: ['the most dedicated', 'more dedicated', 'the more dedicated'],
        correctIndex: 0,
        explanation: '"The most dedicated" is correct — superlative. "The most dedicated player the club has ever had" compares this player with all players the club has ever had — a superlative context. "Dedicated" is a long adjective (4 syllables) — it takes "most/more" not "-er/-est." "More dedicated" is comparative — it would need "than" to compare with someone specific. "The more dedicated" is wrong — do not use "the" with comparatives.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Choose the best response — paying attention to comparatives and superlatives.',
      items: [
        {
          customerLine: 'Is pre-season training harder than training during the season?',
          options: [
            '"Yes — pre-season is the more hard period. The sessions are most intense and longer than any regular session."',
            '"Yes — pre-season is harder than the regular season. The sessions are more intense, longer, and more physically demanding."',
            '"Yes — pre-season is most hard period. Sessions are more harder and more intense."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Harder than" = correct comparative with "than." "More intense, longer, more physically demanding" = three correct comparatives. A uses "the more hard" (wrong — "the" goes with superlatives) and "most intense" (wrong — needs "the" to be a superlative, or needs "than" context). C uses "most hard" (wrong) and "more harder" (double comparative — very wrong).',
        },
        {
          customerLine: 'Who is the best conditioned player you have ever coached?',
          options: [
            '"The most well-conditioned player I have ever coached was someone who trained harder than anyone I have ever seen — she was the fastest and the most consistent in every session."',
            '"The more well-conditioned player I have ever coached was someone who trained more harder than anyone — she was most fast and most consistent."',
            '"The best conditioned player I ever coached was someone more fast and more strong than anyone — the most best athlete I have seen."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "The most well-conditioned" (superlative for long adjective), "trained harder than" (comparative with "than"), "the fastest" (superlative), "the most consistent" (superlative for long adjective) — all correct. B uses "the more well-conditioned" (wrong — comparative with "the"), "more harder" (double comparative — wrong), "most fast" (wrong — needs "the"). C uses "the most best" (double superlative — very wrong).',
        },
        {
          customerLine: 'How important is stamina compared to speed for a central midfielder?',
          options: [
            '"Stamina is more important than speed for a central midfielder — they cover more ground than any other position, so endurance is the most critical physical quality."',
            '"Stamina is importanter than speed for a central midfielder — they cover more ground and endurance is the most critical."',
            '"Stamina is more important as speed for a central midfielder — they cover the most ground and endurance is most critical quality."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "More important than" (comparative for long adjective + "than"), "more ground than" (comparative + "than"), "the most critical" (superlative) — all correct. B uses "importanter" — wrong! "Important" is a 3-syllable adjective and takes "more important" not "importanter." C uses "more important as" — wrong, comparatives use "than" not "as." "As important as" would be correct for equality, but comparing requires "than."',
        },
        {
          customerLine: 'What is the biggest physical difference between top-level and lower-level players?',
          options: [
            '"The biggest difference is recovery speed — top players recover more quickly than lower-level players and are ready to perform at the highest intensity again sooner."',
            '"The most biggest difference is recovery speed — top players recover more quickly than lower-level and perform the most intensely."',
            '"The bigger difference is recovery — top players are more quicker and recover the fastest than lower-level players."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "The biggest difference" (superlative), "more quickly than" (comparative for adverb), "at the highest intensity" (superlative). B uses "the most biggest" — double superlative, completely wrong. C uses "the bigger" (comparative, not superlative — should be "the biggest" for the single main difference) and "more quicker" (double comparative — wrong).',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes with comparatives and superlatives in this fitness discussion. Find them.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Pre-season this year is harder than last year — the conditioning sessions are longer and more demanding.' },
        { speaker: 'Ronaldo', text: 'I feel more stronger than I did at the start of pre-season — the gym work is making a big difference.' },
        { speaker: 'Sofia', text: 'My stamina is better than last year but I am still not as fast as I want to be.' },
        { speaker: 'Coach Diallo', text: 'That will come. You are the fittest player in the squad right now in terms of endurance — the most impressive improvement I have seen this pre-season.' },
        { speaker: 'Ronaldo', text: 'Is pre-season always the most harder part of the year?' },
        { speaker: 'Coach Diallo', text: 'Yes — without a doubt. The load is higher, the sessions are more intense, and there are no matches to break it up. The most demanding weeks of the year, without question.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'I feel more stronger than I did at the start of pre-season',
          correction: 'I feel stronger than I did at the start of pre-season',
          explanation: '"More stronger" is a double comparative — using both "more" AND "-er" at the same time. This is a very common mistake. "Strong" is a short adjective (one syllable) — it takes the -er/-est ending: "stronger / the strongest." You must NOT add "more" as well. Either use -er OR more, never both. "More stronger" is completely wrong. "Stronger than" is the correct form.',
        },
        {
          lineIndex: 4,
          incorrectText: 'Is pre-season always the most harder part of the year?',
          correction: 'Is pre-season always the hardest part of the year?',
          explanation: '"The most harder" is a double superlative — using both "the most" AND "-er" at the same time. This is exactly the same type of error as "more stronger" but with superlatives. "Hard" is a short adjective: it takes "-est" for the superlative. "The hardest" = correct. "The most hardest" = wrong (double superlative). "The most harder" is a confused mix of superlative ("the most") and comparative ("-er"). Choose one.',
        },
        {
          lineIndex: 5,
          incorrectText: 'The most demanding weeks of the year',
          correction: 'The most demanding weeks of the year.',
          explanation: 'Wait — this one is actually CORRECT. "The most demanding" is the correct superlative for the long adjective "demanding" (3 syllables). The coach\'s final line has no mistake. If you selected this, look again at lines 2 and 5 more carefully. Note to students: not every line contains an error — always read carefully before deciding where the mistakes are.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the fitness discussion — use comparatives and superlatives correctly.",
      items: [
        {
          customerLine: 'Ronaldo: What makes the difference between a good pre-season and a bad one?',
          salespersonStart: 'Coach Diallo: The most important thing is managing the load correctly — building up gradually rather than going too hard too soon.',
          suggestedCompletion: 'The best pre-seasons are more structured than just doing hard sessions every day. The second week should be harder than the first, and the third harder still — but the fourth week is usually lighter than the third, to allow recovery before the intensity increases again. The worst mistake coaches make is making the first week the most demanding — players burn out before the season even starts. The most successful pre-seasons build towards match fitness, not just general fitness.',
        },
        {
          customerLine: 'Sofia: Is it true that older players need more recovery time than younger ones?',
          salespersonStart: 'Coach Diallo: Yes — generally, an older player\'s body takes longer to recover than a younger one.',
          suggestedCompletion: 'A 30-year-old needs more rest between sessions than a 21-year-old. Their muscles are stronger and their experience is greater, but their recovery is slower. The most experienced players often do less physical work in training than the younger players — but their output on matchday is just as high. Managing their load is more difficult than managing younger players. The best approach is individual — the most effective training programs are personalised to each player\'s age, history, and needs.',
        },
        {
          customerLine: 'Ronaldo: Who is the most physically impressive player you have ever seen?',
          salespersonStart: 'Coach Diallo: The most impressive physical athletes I have seen combine speed with endurance — they are fast in the first minute and just as fast in the last.',
          suggestedCompletion: 'The best players I have worked with were stronger than their opponents but also quicker. What made them special was not just raw speed — a sprinter can be faster in a straight line — but their ability to maintain that speed across 90 minutes. Their stamina was greater than any player around them. The most remarkable thing about elite athletes is not the highest they can jump or the fastest they can sprint — it is that they can do it more times, for longer, and recover faster than everyone else.',
        },
        {
          customerLine: 'Sofia: How do you know when a player is match fit after a long injury?',
          salespersonStart: 'Coach Diallo: Match fitness is harder to assess than general fitness because it involves more than just physical data.',
          suggestedCompletion: 'A player might test faster in a sprint than before the injury — but still not be match fit. Match fitness is more complex than physical numbers. The most important signs are mental ones — are they moving instinctively? Are their reactions as quick as before? The best way to know is match time. Nothing is more useful than playing in a real game. We usually start them with fewer minutes than they want and build up gradually. The most dangerous thing you can do is rush them back — a bigger setback is always worse than a slower return.',
        },
      ],
    },
  },
};

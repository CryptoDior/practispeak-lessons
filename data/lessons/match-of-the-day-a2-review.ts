import { Lesson } from '@/types/lesson';

export const matchOfTheDayA2Review: Lesson = {
  slug: 'match-of-the-day-a2-review',
  title: 'Match of the Day — A2 Review',
  subtitle: 'A full A2 football English review — from players to match reports',
  level: 'A2',
  description: 'A review of all the vocabulary, grammar, and phrases from the A2 football English series — adjectives, comparatives, prepositions, present continuous, past simple, reported speech, and the past passive. Bring it all together!',
  heroImage: '/images/match-of-the-day-a2-review-hero.png',

  grammarFocus: {
    focusTitle: 'Review: All A2 grammar — from adjectives to the past passive',
    description: 'In this review lesson, we look back at all the key grammar from the A2 football series: adjective position, comparative adjectives, there is/are, present continuous for live action, past simple opinions, reported speech, and the past passive. Each structure has its own time and place.',
    positivePattern: 'Various — see examples below for each grammar point reviewed',
    positiveExample: '"She is a quick, creative winger." (adjective position) / "City play faster than United." (comparative) / "A penalty was awarded in the 80th minute." (past passive)',
    negativePattern: 'Various — see negative examples below',
    negativeExample: '"There are no substitutes left." (there are no) / "The penalty was not converted." (past passive negative)',
    positiveExamples: [
      { sentence: 'She is a quick, technical winger. [Adjective position: before the noun]', note: '(Lesson 11)' },
      { sentence: 'City are better than United this season. [Comparative adjective]', note: '(Lesson 14)' },
      { sentence: 'There are seven players on the bench. [There is/are + number]', note: '(Lesson 13)' },
      { sentence: 'The fans are singing — the atmosphere is incredible! [Present continuous for live action]', note: '(Lesson 16)' },
      { sentence: 'I thought the referee was harsh. [Past simple opinion]', note: '(Lesson 18)' },
      { sentence: 'The penalty was converted in the 85th minute. [Past passive]', note: '(Lesson 19)' },
    ],
    negativeExamples: [
      { sentence: 'He is not reliable — he performs well one week and disappears the next. [Adjective negative]', note: '(Lesson 11)' },
      { sentence: 'A penalty was awarded but was not converted. [Past passive negative]', note: '(Lesson 19)' },
    ],
  },

  vocabulary: [
    {
      word: 'CLINICAL',
      partOfSpeech: 'adjective',
      definition: 'Precise and efficient in front of goal — does not miss easy chances. [Lesson 11]',
      example: 'She was clinical — four shots, four goals. A perfect performance.',
      imageSlug: '/images/match-of-the-day-a2-review-clinical.png',
    },
    {
      word: 'TRANSFER WINDOW',
      partOfSpeech: 'noun',
      definition: 'The official period when clubs can buy and sell players. [Lesson 12]',
      example: 'The summer transfer window closed at midnight — and they made no signings.',
      imageSlug: '/images/match-of-the-day-a2-review-transfer-window.png',
    },
    {
      word: 'STARTING ELEVEN',
      partOfSpeech: 'noun',
      definition: 'The eleven players chosen to begin the match. [Lesson 13]',
      example: 'There are eleven players in the starting eleven and seven on the bench.',
      imageSlug: '/images/match-of-the-day-a2-review-starting-eleven.png',
    },
    {
      word: 'COMPARATIVE',
      partOfSpeech: 'adjective',
      definition: 'Better than, faster than, more organised than — comparing two things. [Lesson 14]',
      example: 'City are better than United and faster than any other team in the league.',
      imageSlug: '/images/comparative.png',
    },
    {
      word: 'ATMOSPHERE',
      partOfSpeech: 'noun',
      definition: 'The energy and excitement created by the crowd in the stadium. [Lessons 15 & 16]',
      example: 'The atmosphere was electric — 50,000 fans singing from the first minute.',
      imageSlug: '/images/match-of-the-day-a2-review-atmosphere.png',
    },
    {
      word: 'PUNDIT',
      partOfSpeech: 'noun',
      definition: 'A football expert — usually a former player — who gives analysis on TV. [Lesson 17]',
      example: 'The pundit said the team had played well but was not clinical enough.',
      imageSlug: '/images/match-of-the-day-a2-review-pundit.png',
    },
    {
      word: 'VERDICT',
      partOfSpeech: 'noun',
      definition: 'Your final opinion or judgement about a match, player, or decision. [Lessons 17 & 18]',
      example: 'My verdict: a deserved win — they were the better team from start to finish.',
      imageSlug: '/images/match-of-the-day-a2-review-verdict.png',
    },
    {
      word: 'DISMISSAL',
      partOfSpeech: 'noun',
      definition: 'When a player is sent off — given a red card and required to leave the pitch. [Lesson 19]',
      example: 'The dismissal in the 55th minute changed everything — they played with ten men.',
      imageSlug: '/images/match-of-the-day-a2-review-dismissal.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'READS THE GAME WELL',
      definition: 'Understands what is happening on the pitch — anticipates where the ball will go. [Lesson 11]',
      example: 'He reads the game well — always in the right position before the ball arrives.',
      imageSlug: '/images/match-of-the-day-a2-review-reads-the-game-well.png',
    },
    {
      phrase: 'GO ON LOAN',
      definition: 'To temporarily move to another club for a fixed period. [Lesson 12]',
      example: 'He went on loan to a Championship club to get more first-team experience.',
      imageSlug: '/images/match-of-the-day-a2-review-go-on-loan.png',
    },
    {
      phrase: 'GET BEHIND THE TEAM',
      definition: 'To support the team loudly and actively — creating noise to motivate the players. [Lesson 16]',
      example: 'The fans really got behind the team in the second half — the noise helped push for a winner.',
      imageSlug: '/images/match-of-the-day-a2-review-get-behind-the-team.png',
    },
    {
      phrase: 'I THOUGHT [OPINION]',
      definition: 'How you express a past opinion — "I thought the referee was terrible." [Lesson 18]',
      example: 'I thought the first half was poor — we gave the ball away too many times.',
      imageSlug: '/images/match-of-the-day-a2-review-i-thought-opinion.png',
    },
    {
      phrase: 'WAS SENT OFF',
      definition: 'Received a red card — was required to leave the pitch. Past passive. [Lesson 19]',
      example: 'She was sent off for a professional foul — the referee had no hesitation.',
      imageSlug: '/images/match-of-the-day-a2-review-was-sent-off.png',
    },
    {
      phrase: 'FAIR PLAY TO THEM',
      definition: 'Respect and acknowledgement to the opposition — they played well. [Lesson 18]',
      example: 'Fair play to them — they were the better team and fully deserved the win.',
      imageSlug: '/images/fair-play-to-them.png',
    },
  ],

  onThePitch: {
    instructions: 'Review of key On the Pitch phrases from across all A2 football lessons.',
    items: [
      {
        cue: "He's electric! [Lesson 11]",
        meaning: 'He is incredibly fast and exciting to watch.',
        usage: 'Describing a player — present continuous or general adjective. "He\'s electric" = he is quick, exciting, dynamic. From Lesson 11 (Describing a Player). Remember: adjectives come before the noun or after "be" in English.',
        imageSlug: 'otp-review-hes-electric',
      },
      {
        cue: "On paper they look better. [Lesson 14]",
        meaning: 'Based on their squad and stats, they appear superior — but the result is not decided yet.',
        usage: 'Comparing two teams. "On paper" = in theory. From Lesson 14 (Comparing Teams). Remember: comparatives use "-er + than" for short adjectives and "more + adjective + than" for longer ones. Irregular: good → better, bad → worse.',
        imageSlug: 'otp-review-on-paper-they-look-better',
      },
      {
        cue: "It's a fortress. [Lesson 15]",
        meaning: 'This team almost never loses at their home ground.',
        usage: 'Talking about a stadium. From Lesson 15 (Stadiums and Grounds). "Fortress" = a place very hard to attack. Remember prepositions: "in the stand," "on the pitch," "on the touchline," "in the tunnel."',
        imageSlug: 'otp-review-its-a-fortress',
      },
      {
        cue: "The fans are going wild! [Lesson 16]",
        meaning: 'The fans are reacting with extreme excitement — usually after a goal.',
        usage: 'Present continuous for live action. From Lesson 16 (Watching from the Stands). "Are going" = present continuous. Use am/is/are + verb-ing for things happening RIGHT NOW during a live match.',
        imageSlug: 'otp-review-the-fans-are-going-wild',
      },
      {
        cue: "For me, it's a clear penalty. [Lesson 17]",
        meaning: 'In my opinion, the referee should have given a penalty.',
        usage: 'Pundit opinion. "For me" = in my opinion. From Lesson 17 (Watching on TV). When reporting what someone said, use reported speech: "The pundit said it was a clear penalty." Remember: present → past in reported speech.',
        imageSlug: 'otp-review-for-me-its-a-clear-penalty',
      },
      {
        cue: "A penalty was converted. [Lesson 19]",
        meaning: 'The penalty was successfully scored.',
        usage: 'Past passive — the grammar of match reports. From Lesson 19 (Reading Match Reports). Active: "The striker scored the penalty." Passive: "A penalty was converted." Singular = was. Plural = were. Remember the past participle form.',
        imageSlug: 'otp-review-a-penalty-was-converted',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'It is our final lesson of the series. We have covered a lot — players, transfers, squads, stadiums, fans, TV coverage, and match reports. Let\'s review. Sofia — describe a player using adjectives.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'She is [[quick:fast — able to run at high speed]], [[clinical:precise and efficient in front of goal]], and [[versatile:able to play in several different positions]]. She reads the game well and leads by example.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Excellent. Ronaldo — compare two teams using comparatives.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'City are [[better than:superior to — irregular comparative of "good"]] United this season. They are faster than United in [[transition:moving quickly from defence to attack]] and more [[clinical:precise in front of goal]] in front of goal. Their away form is worse than last season, but at home they are [[dominant:controlling the game — more powerful and in control]].',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Great. Now — imagine the match is happening right now. What are the fans doing? Sofia?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The fans are [[chanting:singing a phrase repeatedly]] the captain\'s name. The [[atmosphere:energy and excitement created by the crowd]] is incredible — 50,000 people are on their feet. The goalkeeper is warming up in the background.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. And Ronaldo — the match is finished. Give me your verdict and write one sentence in past passive.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'My [[verdict:final opinion or judgement]]: a brilliant match. I thought we were unlucky — we created more chances but they were more clinical. The winning goal [[was scored:past passive — someone scored it, we focus on the goal]] by the substitute in stoppage time. A [[deserved:fair — they earned it]] win in the end, to be honest.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'That is A2 football English — player descriptions, transfers, squads, stadiums, atmosphere, TV analysis, fan opinions, and match reports. You have come a long way. Well done!',
    },
  ],

  matchingExercise: [
    { word: 'CLINICAL', definition: 'Precise and efficient in front of goal — does not miss easy chances' },
    { word: 'TRANSFER WINDOW', definition: 'The official period when clubs can buy and sell players' },
    { word: 'STARTING ELEVEN', definition: 'The eleven players chosen to begin the match' },
    { word: 'ATMOSPHERE', definition: 'The energy and excitement created by the crowd in the stadium' },
    { word: 'PUNDIT', definition: 'A football expert who gives analysis and opinions on TV' },
    { word: 'VERDICT', definition: 'Your final opinion or judgement about a match or player' },
    { word: 'DISMISSAL', definition: 'A red card — when a player is sent off and must leave the pitch' },
    { word: 'BOOKING', definition: 'A yellow card — when a player is cautioned by the referee' },
  ],

  fillBlankExercise: [
    { before: 'She is a', answer: 'quick', after: ', creative winger — adjective comes before the noun in English.' },
    { before: 'City are', answer: 'better than', after: 'United — irregular comparative of "good."' },
    { before: 'There', answer: 'are', after: 'seven players on the bench — "are" because it is plural.' },
    { before: 'The fans', answer: 'are chanting', after: '— present continuous for action happening right now.' },
    { before: 'I', answer: 'thought', after: 'the referee was harsh — past simple opinion about a finished match.' },
    { before: 'The pundit said the team', answer: 'had played', after: 'well — reported speech, tense shifts back.' },
    { before: 'A penalty', answer: 'was awarded', after: 'by the referee — past passive.' },
    { before: 'He', answer: 'was sent off', after: 'for a professional foul — past passive dismissal.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which sentence uses adjective position correctly?',
      options: [
        'She is player reliable.',
        'She is a reliable player.',
        'She is player a reliable.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which comparative is correct?',
      options: ['More better than', 'Better than', 'Gooder than'],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses present continuous correctly for live action?',
      options: [
        'The fans sing.',
        'The fans are singing.',
        'The fans sang.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses reported speech correctly?',
      options: [
        'She said the team plays well.',
        'She said the team played well.',
        'She says the team played well.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses the past passive correctly?',
      options: [
        'The penalty awarded was.',
        'A penalty was awarded.',
        'A penalty awarded.',
      ],
      correctIndex: 1,
    },
    {
      question: '"There _____ eleven players in the starting eleven." Which is correct?',
      options: ['is', 'are', 'was'],
      correctIndex: 1,
    },
    {
      question: 'Which past simple opinion sentence is correct?',
      options: [
        'I think the referee was terrible.',
        'I am thinking the referee was terrible.',
        'I thought the referee was terrible.',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "should have won" mean?',
      options: [
        'We will probably win next time',
        'We deserved to win but did not',
        'We almost won but stopped trying',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the correct grammar from across the A2 series.',
    items: [
      {
        sentence: 'She _____ a clinical striker — she never wastes a chance. [Adjective position]',
        options: ['is striker clinical a', 'is a clinical striker', 'is clinical striker a'],
        correctIndex: 1,
        explanation: '"Is a clinical striker" is correct. Adjective order in English: article (a/an) + adjective + noun. "A clinical striker" — not "striker clinical" or "clinical striker a." This is the fundamental adjective position rule from Lesson 11.',
      },
      {
        sentence: 'Their defence _____ our defence this season — they have only conceded three goals. [Comparative]',
        options: ['is better than', 'is more good than', 'is gooder than'],
        correctIndex: 0,
        explanation: '"Is better than" is correct. "Good" has an irregular comparative: good → better → best. Never say "more good" or "gooder." From Lesson 14 (Comparing Teams). The irregular forms you must know: good/better, bad/worse.',
      },
      {
        sentence: 'Look — the striker _____ for goal! Can she score? [Present continuous]',
        options: ['runs', 'is running', 'ran'],
        correctIndex: 1,
        explanation: '"Is running" is correct. We use present continuous (am/is/are + verb-ing) to describe actions happening RIGHT NOW. "Look —" signals this is live. From Lesson 16 (Watching from the Stands). Present continuous = action in progress at this moment.',
      },
      {
        sentence: 'The pundit said the manager _____ the right substitution. [Reported speech]',
        options: ['does not make', 'did not make', 'is not making'],
        correctIndex: 1,
        explanation: '"Did not make" is correct. Reported speech shifts tenses back: "does not make" (present) → "did not make" (past). From Lesson 17 (Watching on TV). After "said" (past reporting verb), present tense changes to past tense.',
      },
      {
        sentence: 'The winning goal _____ by the substitute in stoppage time. [Past passive]',
        options: ['scored', 'was scored', 'is scored'],
        correctIndex: 1,
        explanation: '"Was scored" is correct. Past passive = was/were + past participle. "The winning goal" is singular = "was scored." From Lesson 19 (Reading Match Reports). The passive focuses on what happened (the goal being scored) rather than who did it.',
      },
      {
        sentence: 'I _____ the referee was harsh — that red card was completely wrong. [Past opinion]',
        options: ['think', 'am thinking', 'thought'],
        correctIndex: 2,
        explanation: '"Thought" is correct. When the match is finished and you share a view about it, use "I thought" (past simple). "I think" = current/general opinion. From Lesson 18 (Talking to Other Fans). Use past simple for opinions about completed events.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Each situation reviews a different grammar point from the A2 series.',
      items: [
        {
          customerLine: 'Describe a player using three adjectives correctly. [Lesson 11]',
          options: [
            '"He is player quick, technical, and composed."',
            '"He is a quick, technical, and composed player — excellent in the air too."',
            '"He is quickly, technically, and composedly player."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Adjectives come BEFORE the noun: "a quick, technical, and composed player." Multiple adjectives are separated by commas. Never put adjectives after the noun (Option A) and never use adverb forms as adjectives (Option C — quickly, technically are adverbs, not adjectives).',
        },
        {
          customerLine: 'The match is happening now. What do you say? [Lesson 16]',
          options: [
            '"The fans went crazy and the striker scored."',
            '"The fans are going crazy — the striker is running through on goal right now!"',
            '"The fans go crazy when the striker scores."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Present continuous = am/is/are + verb-ing = happening RIGHT NOW. "Are going" and "is running" describe live action. Option A uses past simple (finished). Option C uses present simple (habit/general fact). The clue is "right now" — that tells you to use present continuous.',
        },
        {
          customerLine: 'Report what the pundit said: "The team is not performing well this season." [Lesson 17]',
          options: [
            '"The pundit said the team is not performing well this season."',
            '"The pundit said the team was not performing well this season."',
            '"The pundit says the team was not performing well this season."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Reported speech: "said" (past) → tense shifts back. "Is not performing" (present continuous) → "was not performing" (past continuous). Option A does not shift the tense. Option C uses "says" (present) to introduce reported speech — only correct if quoting something they say regularly or for general truths.',
        },
        {
          customerLine: 'Write a match report sentence about a red card. [Lesson 19]',
          options: [
            '"The referee sent off the defender for a foul."',
            '"The defender was sent off by the referee for a professional foul in the 70th minute."',
            '"Was the defender sent off for a foul by the referee."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Past passive match report style: subject (the defender) + was + past participle (sent off) + by + agent (the referee) + details. Option A is active — also correct grammatically but less typical of match report style. Option C is a question form — not a statement.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'This review passage contains three mistakes — one from each grammar area. Find them.',
      dialogue: [
        { speaker: 'Sofia', text: 'It was the best match of the season — and I thought the atmosphere is incredible.' },
        { speaker: 'Ronaldo', text: 'I agree — the fans were going absolutely wild after the goal. The atmosphere was electric.' },
        { speaker: 'Sofia', text: 'The winning goal were scored by a substitute in stoppage time — unbelievable.' },
        { speaker: 'Ronaldo', text: 'City are more better than any team in the league right now — nobody can touch them.' },
        { speaker: 'Sofia', text: 'And the goalkeeper was brilliant — she was named player of the match.' },
        { speaker: 'Ronaldo', text: 'Fair play to them — they deserved the win. A clinical, organised, and brilliant performance.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'I thought the atmosphere is incredible',
          correction: 'I thought the atmosphere was incredible',
          explanation: 'Past simple opinion: "I thought" must be followed by a past tense clause. "Is" is present simple — it should be "was" (past simple). Rule: "I thought + past tense." This is from Lesson 18 and relates to the general rule of tense consistency when talking about past events.',
        },
        {
          lineIndex: 2,
          incorrectText: 'The winning goal were scored',
          correction: 'The winning goal was scored',
          explanation: '"The winning goal" is singular — use "was" not "were." Past passive: singular subject + WAS + past participle. Plural subject + WERE + past participle. This is from Lesson 19. Always check the subject number before choosing was/were.',
        },
        {
          lineIndex: 3,
          incorrectText: 'City are more better than',
          correction: 'City are better than',
          explanation: '"More better" is a double comparative — you cannot use "more" AND the comparative form together. "Better" is already the comparative of "good." Just say "better than." Never "more better." This is from Lesson 14 (Comparing Teams).',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each sentence reviewing a different lesson from the A2 series.',
      items: [
        {
          customerLine: 'Ronaldo: Using what you learned in Lesson 11, describe the perfect striker.',
          salespersonStart: 'Coach Diallo: The perfect striker is clinical, composed under pressure, and strong in the air.',
          suggestedCompletion: 'They are also quick enough to get in behind the defence and technical enough to control the ball in tight spaces. They read the game well — they know where to be before the ball arrives. A reliable striker performs at a high level every week — not brilliant one game and invisible the next. And the best strikers lead by example: they work hard, they press from the front, and they make life difficult for the opposition even when they are not scoring.',
        },
        {
          customerLine: 'Sofia: Using Lessons 12 and 13, explain how a young academy player becomes a first-team regular.',
          salespersonStart: 'Coach Diallo: It is a long journey — and most academy players do not make it to the first team.',
          suggestedCompletion: 'The player comes through the academy — they join young, sometimes at eight or nine years old, and develop through the age groups. If they are good enough, they train with the first team and eventually make the matchday squad — starting on the bench. From there, they might go on loan to get regular first-team experience. When they return, if they have developed well, they are named in the starting eleven. Over time, they sign a professional contract and become a regular. But the transfer window also works against them — the club might sign a player in their position, making it harder to get game time.',
        },
        {
          customerLine: 'Ronaldo: Using Lessons 16 and 17, describe the experience of watching a big match — from the stands AND on TV.',
          salespersonStart: 'Coach Diallo: The two experiences are completely different — and both have something the other cannot offer.',
          suggestedCompletion: 'In the stands, the fans are singing, the atmosphere is building, and when the goal goes in, the whole stand is going wild — you are part of it. You feel the noise, the movement, the emotion. On TV, the commentator is describing every moment — "He\'s shooting! He\'s scored! What a hit!" The pundits analyse every decision: for me it was a clear penalty, for my colleague it was never a foul. The replay shows it from three different angles. At the stadium you cannot see the offside line. On TV you can. Both are great — but the atmosphere in the stands is something television cannot fully capture.',
        },
        {
          customerLine: 'Sofia: Using Lessons 18 and 19, write a full post-match review including past opinions and passive sentences.',
          salespersonStart: 'Coach Diallo: This is your final challenge — pull everything together.',
          suggestedCompletion: 'My verdict on the match: I thought it was one of the best games of the season. The first half was tight — no goals were scored and very few clear chances were created. I felt the manager\'s decision to start with a 4-5-1 was correct — the team was well organised and hard to break down. In the second half, a penalty was awarded after a foul in the box — it was converted by the captain to give the home side the lead. The match was nearly settled in the 75th minute when a second goal was scored, but a controversial red card was shown in stoppage time that I thought was harsh — the foul was not dangerous. To be honest, the result was deserved — they were the better team. Credit where it\'s due — fair play to them.',
        },
      ],
    },
  },
};

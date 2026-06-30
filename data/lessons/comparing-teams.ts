import { Lesson } from '@/types/lesson';

export const comparingTeams: Lesson = {
  slug: 'comparing-teams',
  title: 'Comparing Teams',
  subtitle: 'Comparatives — City play faster than United, we are stronger than them',
  level: 'A2',
  description: 'Learn how to compare two football teams using comparative adjectives and adverbs. Practise structures like "better than", "faster than", and "more organised than" to talk about teams you watch.',
  heroImage: '/images/comparing-teams-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Comparative adjectives and adverbs',
    description: 'We use comparatives to say one thing is more or less than another. Short adjectives add "-er + than". Long adjectives use "more + adjective + than". Some are irregular: good → better, bad → worse.',
    positivePattern: 'Subject + verb + adjective/adverb + -er than / more ... than + object',
    positiveExample: '"City play faster than United — and they are more organised at the back."',
    negativePattern: 'Subject + verb + less + adjective/adverb + than / not as + adjective + as',
    negativeExample: '"United are not as clinical as City — they create chances but do not score enough."',
    positiveExamples: [
      { sentence: 'Barcelona are better than Atlético this season — they have scored 30 more goals.', note: '(better = irregular comparative of "good")' },
      { sentence: 'The home team press higher than us — they make it very difficult to build from the back.', note: '(higher = comparative of "high")' },
      { sentence: 'She runs faster than anyone else in the league — her pace is exceptional.', note: '(faster = comparative of "fast")' },
      { sentence: 'They are more defensively solid than last year — only three goals conceded so far.', note: '(more + long adjective + than)' },
    ],
    negativeExamples: [
      { sentence: 'We are not as creative as them in the final third — we struggle to break down deep defences.', note: '(not as + adjective + as)' },
      { sentence: 'Their defence is worse than last season — they have conceded twelve goals already.', note: '(worse = irregular comparative of "bad")' },
    ],
  },

  vocabulary: [
    {
      word: 'DOMINANT',
      partOfSpeech: 'adjective',
      definition: 'Controlling the game — more powerful and in control than the opponent.',
      example: 'City were dominant for the first 70 minutes — they had 70% possession and created ten chances.',
      imageSlug: '/images/dominant.png',
    },
    {
      word: 'ORGANISED',
      partOfSpeech: 'adjective',
      definition: 'Structured and disciplined — the team works well together as a unit, especially defensively.',
      example: 'They are the most organised team in the league — very hard to score against.',
      imageSlug: '/images/organised.png',
    },
    {
      word: 'AGGRESSIVE',
      partOfSpeech: 'adjective',
      definition: 'Physical and intense — pressing hard and competing for every ball.',
      example: 'The away team was more aggressive in the second half — they pressed much higher and won the ball back quickly.',
      imageSlug: '/images/aggressive.png',
    },
    {
      word: 'CONSISTENT',
      partOfSpeech: 'adjective',
      definition: 'Performing at the same high level every week — not up and down.',
      example: 'Arsenal are more consistent than last season — they have only lost once in fifteen games.',
      imageSlug: '/images/consistent.png',
    },
    {
      word: 'CLINICAL',
      partOfSpeech: 'adjective',
      definition: 'Efficient in front of goal — converting chances at a high rate.',
      example: 'Liverpool are more clinical than us — they scored with three of their four shots on target.',
      imageSlug: '/images/clinical.png',
    },
    {
      word: 'PHYSICAL',
      partOfSpeech: 'adjective',
      definition: 'Strong and powerful — relying on physical strength and intensity.',
      example: 'They are a more physical team than us — every challenge is a battle.',
      imageSlug: '/images/physical.png',
    },
    {
      word: 'EXPERIENCED',
      partOfSpeech: 'adjective',
      definition: 'Having played many games — knowing how to handle pressure, big moments, and difficult situations.',
      example: 'The opposition are more experienced than us — they have five players who have won the Champions League.',
      imageSlug: '/images/experienced.png',
    },
    {
      word: 'ATTACKING',
      partOfSpeech: 'adjective',
      definition: 'Focused on scoring — setting up to create and score goals rather than defend.',
      example: 'They play a more attacking style than us — three forwards and a creative midfielder always pushing forward.',
      imageSlug: '/images/attacking.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BETTER THAN',
      definition: 'Superior — higher quality or ability in a specific area.',
      example: 'They are better than us in midfield — they control the game more effectively.',
      imageSlug: '/images/better-than.png',
    },
    {
      phrase: 'STRONGER THAN',
      definition: 'More physically powerful or more difficult to beat.',
      example: 'They were stronger than us physically — we could not compete in the air.',
      imageSlug: '/images/stronger-than.png',
    },
    {
      phrase: 'FASTER THAN',
      definition: 'Quicker — able to run at higher speed or move the ball more quickly.',
      example: 'Their wingers are faster than ours — they got in behind us three times in the first half.',
      imageSlug: '/images/faster-than.png',
    },
    {
      phrase: 'NOT AS GOOD AS',
      definition: 'A way to compare two things where one is less than the other — softer than "worse than".',
      example: 'We are not as good as them on the counter-attack — we need to be quicker in transition.',
      imageSlug: '/images/not-as-good-as.png',
    },
    {
      phrase: 'MORE CLINICAL THAN',
      definition: 'More efficient in front of goal — scoring a higher percentage of chances created.',
      example: 'They are more clinical than us — same number of shots, but they scored two and we scored zero.',
      imageSlug: '/images/more-clinical-than.png',
    },
    {
      phrase: 'HARDER TO BEAT THAN',
      definition: 'More difficult to defeat — defensive or resilient.',
      example: 'They are harder to beat than they look — they have only lost three games all season.',
      imageSlug: '/images/harder-to-beat-than.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases fans and pundits use when comparing two teams.',
    items: [
      {
        cue: "They're better than us on the day.",
        meaning: 'The opposition played better than we did in this specific match.',
        usage: 'An honest acknowledgement of defeat. "On the day" is important — it means in this one match, not always. It is respectful without saying the opposition are always better.',
        imageSlug: 'otp-theyre-better-than-us-on-the-day',
      },
      {
        cue: "We're stronger than them at set pieces.",
        meaning: 'Our team is more effective at corners, free kicks, and throw-ins near the goal.',
        usage: '"Stronger than" = better at / more effective. "At set pieces" = in dead-ball situations. This is a specific comparison — not general quality, but one specific area where our team has an advantage.',
        imageSlug: 'otp-were-stronger-than-them-at-set-pieces',
      },
      {
        cue: 'On paper they look better.',
        meaning: 'Looking at their squad or statistics, they seem superior — but the result is not decided yet.',
        usage: '"On paper" means in theory, based on names and stats. It implies the match might not go as expected. Often said before a match to show respect but also confidence.',
        imageSlug: 'otp-on-paper-they-look-better',
      },
      {
        cue: "It's tighter than expected.",
        meaning: 'The match is closer / more competitive than people predicted.',
        usage: '"Tight" = close, competitive. "Tighter than expected" means one team was predicted to win easily, but the other team is matching them. Often said during a match that is level at half-time.',
        imageSlug: 'otp-its-tighter-than-expected',
      },
      {
        cue: 'They were worse than us in the second half.',
        meaning: 'The opposition dropped below our level after half-time.',
        usage: '"Worse than" = the irregular comparative of "bad." It is a direct, confident comparison. Using "worse" correctly (not "more bad") shows good English. Common in post-match analysis.',
        imageSlug: 'otp-they-were-worse-than-us-in-the-second-half',
      },
      {
        cue: "We're not as clinical as them.",
        meaning: 'They score their chances more efficiently than we do.',
        usage: '"Not as... as" is a softer way to compare. It means "less than" without being aggressive. "Not as clinical" = we miss more chances than them. A common honest self-assessment.',
        imageSlug: 'otp-were-not-as-clinical-as-them',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Right. Before Sunday\'s match, let\'s compare the two teams. Ronaldo — how are they different from us?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'They are [[more organised than:more structured and disciplined than]] us defensively. And they are [[more experienced than:having played more games and big moments than]] us — seven players with over 100 league appearances.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'But we are [[faster than:quicker than]] them — our wingers are much quicker. And I think we are [[more attacking than:more focused on scoring than]] them.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Correct. On paper, they look [[better than:superior to]] us. But in the last three matches we scored more goals than them.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Are they [[stronger than:more physically powerful than]] us? I think their centre backs are much bigger.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Yes — they are stronger in the air. So we play lower and faster. We are not as good as them in aerial battles, but we are [[more clinical than:more efficient in front of goal than]] them this season.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And their away form is worse than their home form — they have only won twice away from home this season.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. So we have advantages — we just need to use them. This match is more important than any other this month. Let\'s be ready.',
    },
  ],

  matchingExercise: [
    { word: 'DOMINANT', definition: 'Controlling the game — more powerful and in control than the opponent' },
    { word: 'ORGANISED', definition: 'Structured and disciplined — works well as a defensive unit' },
    { word: 'AGGRESSIVE', definition: 'Physical and intense — pressing hard and competing for every ball' },
    { word: 'CONSISTENT', definition: 'Performing at the same high level every week' },
    { word: 'CLINICAL', definition: 'Efficient in front of goal — converting chances at a high rate' },
    { word: 'PHYSICAL', definition: 'Strong and powerful — relying on strength and intensity' },
    { word: 'EXPERIENCED', definition: 'Having played many games — knows how to handle pressure' },
    { word: 'ATTACKING', definition: 'Focused on scoring — always pushing forward' },
  ],

  fillBlankExercise: [
    { before: 'City are', answer: 'better than', after: 'United this season — more goals and fewer defeats.' },
    { before: 'Their wingers are', answer: 'faster than', after: 'ours — they got in behind us three times.' },
    { before: 'We are not', answer: 'as clinical as', after: 'them — we created more chances but they scored more goals.' },
    { before: 'They are', answer: 'more organised than', after: 'last year — only six goals conceded.' },
    { before: 'Their away form is', answer: 'worse than', after: 'their home form — only two away wins all season.' },
    { before: 'We are', answer: 'more attacking than', after: 'them — we have three forwards in the starting eleven.' },
    { before: 'The opposition are', answer: 'more experienced than', after: 'us — several players have won international trophies.' },
    { before: 'They are a', answer: 'more physical', after: 'team than us — every challenge is a battle.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which comparative form is correct for "good"?',
      options: ['More good', 'Gooder', 'Better'],
      correctIndex: 2,
    },
    {
      question: 'Which sentence is correct?',
      options: [
        'They are more fast than us.',
        'They are faster than us.',
        'They are fastest than us.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which comparative form is correct for "bad"?',
      options: ['More bad', 'Badder', 'Worse'],
      correctIndex: 2,
    },
    {
      question: '"We are not as clinical as them." What does this mean?',
      options: [
        'We score more goals than them',
        'We are less efficient in front of goal than them',
        'We are exactly as clinical as them',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses comparatives correctly?',
      options: [
        'They are more organised that us.',
        'They are more organised than us.',
        'They are more organised as us.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "on paper they look better" mean?',
      options: [
        'They have a better team sheet than us',
        'Based on their squad and stats, they appear superior — but the result is not decided yet',
        'Their training report shows better fitness levels',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which is the correct comparative of "physical"?',
      options: [
        'Physicaller',
        'More physical',
        'Most physical',
      ],
      correctIndex: 1,
    },
    {
      question: 'Complete the sentence: "Their home form is much _____ than their away form."',
      options: ['gooder', 'more good', 'better'],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the correct comparative form.',
    items: [
      {
        sentence: 'They are _____ in the air than us — their centre-backs win every header.',
        options: ['more strong', 'stronger', 'most strong'],
        correctIndex: 1,
        explanation: '"Stronger" is correct. Short adjectives (one syllable) form comparatives by adding "-er" — strong → stronger. "More strong" is wrong. "Most strong" is a superlative (the strongest of all), not a comparative. Rule: one syllable adjectives = -er + than.',
      },
      {
        sentence: 'We are _____ this season than last — same players but a much better system.',
        options: ['more consistent', 'consistenter', 'most consistent'],
        correctIndex: 0,
        explanation: '"More consistent" is correct. Long adjectives (three or more syllables) form comparatives with "more + adjective." "Consistent" has three syllables — never add "-er" to long adjectives. "Consistenter" is not a word.',
      },
      {
        sentence: 'Their attack is _____ than ours but their defence is _____ than last season.',
        options: ['better / worse', 'gooder / badder', 'more good / more bad'],
        correctIndex: 0,
        explanation: '"Better / worse" is correct. These are both irregular comparatives. Good → better (not "more good"). Bad → worse (not "more bad" or "badder"). These two are the most common irregular comparatives in English — memorise them.',
      },
      {
        sentence: 'We are not _____ them at set pieces — they score from corners much more often.',
        options: ['as good than', 'as good as', 'better as'],
        correctIndex: 1,
        explanation: '"As good as" is correct. The structure is "not as + adjective + as." Never use "than" after "as." "Not as good as them" = we are less good than them = they are better at set pieces. This is a softer alternative to saying "we are worse than them."',
      },
      {
        sentence: 'City play _____ than United — they move the ball in two or three touches.',
        options: ['more quickly', 'quicklier', 'quicker than'],
        correctIndex: 0,
        explanation: '"More quickly" is correct. "Quickly" is an adverb (not an adjective) — most adverbs ending in "-ly" form comparatives with "more." "Quicklier" is not a word. Note: "quicker" (adjective) is also possible but "more quickly" is more precise because it modifies how they "play" (a verb).',
      },
      {
        sentence: 'Their away record is _____ than their home record — they struggle to win away.',
        options: ['badder', 'more bad', 'worse'],
        correctIndex: 2,
        explanation: '"Worse" is correct — the irregular comparative of "bad." Never say "more bad" or "badder." Bad → worse → worst. This is an irregular pattern you must memorise. The same pattern: good → better → best.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read each situation and choose the best comparative response.',
      items: [
        {
          customerLine: 'Before the match a fan says: "They are much better than us — we will lose." How do you respond?',
          options: [
            '"Yes, they are better in every area. We have no chance."',
            '"On paper they look stronger, but we are faster than them and more clinical this season. We create more chances. It will be tighter than expected."',
            '"We are better than them. We will win easily."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses comparatives accurately (stronger, faster, more clinical), acknowledges the challenge (they look stronger on paper), but is balanced and confident. It does not dismiss the opposition or surrender before the match starts.',
        },
        {
          customerLine: 'The coach asks: "In which area are we better than them?" What is the best analysis?',
          options: [
            '"We are better than them in everything — we are a much stronger team."',
            '"We are faster than them in transition, and we are more clinical in front of goal — we convert 18% of our chances compared to their 12%."',
            '"I am not sure — they seem better than us in every area."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It gives specific comparatives with evidence (transition, clinical, and actual conversion rate percentages). A good analysis identifies specific areas, not just "better" or "worse" in general.',
        },
        {
          customerLine: 'After a 0-0 draw, a fan says: "Their defence is so much better than ours — we could not score!" How do you respond?',
          options: [
            '"Yes, they are better than us — we are worse in every area."',
            '"Their defence is stronger and more organised than ours, it is true. But we created six chances — we were not as clinical as usual. If we score from one of those chances, we win."',
            '"No — we were better than them. The result was unfair."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses comparatives accurately (stronger, more organised), acknowledges the reality, but adds a key comparison (not as clinical as usual) and shows analytical thinking about what would have been different.',
        },
        {
          customerLine: 'Someone asks: "Is it better to be a physical team or a technical team?" What is your answer?',
          options: [
            '"Physical teams are always better than technical teams — strength wins matches."',
            '"Technical teams are more creative and more clinical. But physical teams are harder to beat and stronger at set pieces. The best teams combine both — they are technical AND physical."',
            '"Technical teams are always better — skill beats strength every time."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses comparatives to analyse both sides honestly (more creative, more clinical, harder to beat, stronger at set pieces) and reaches a nuanced conclusion rather than choosing one side absolutely.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three comparative grammar mistakes in this match preview. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Sunday\'s match is more important than any other this month — we need three points.' },
        { speaker: 'Ronaldo', text: 'I agree. But City are more better than us in midfield — they control games very well.' },
        { speaker: 'Sofia', text: 'True — but we are fastest than them in attack. Our wingers are exceptional.' },
        { speaker: 'Coach Diallo', text: 'And we are more clinical than them this season — higher conversion rate.' },
        { speaker: 'Ronaldo', text: 'Their home form is more good than their away form — but we are the away team on Sunday.' },
        { speaker: 'Coach Diallo', text: 'Exactly. Their away form is worse than their home form — only two wins. We have a real chance.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'more better than us',
          correction: 'better than us',
          explanation: '"More better" is a double comparative — you cannot use "more" AND the comparative form together. "Better" is already the comparative of "good" — it does not need "more." Say just "better than us." This is one of the most common comparative mistakes in English.',
        },
        {
          lineIndex: 2,
          incorrectText: 'we are fastest than them',
          correction: 'we are faster than them',
          explanation: '"Fastest" is a superlative (the fastest of all) — not a comparative. For comparisons between two things, use the comparative: "faster than." Superlative (-est / most) = comparing to all others. Comparative (-er / more) = comparing to one other. "Faster than them" = comparing us to one other team.',
        },
        {
          lineIndex: 4,
          incorrectText: 'more good than',
          correction: 'better than',
          explanation: '"More good" is not correct. "Good" has an irregular comparative — it is "better," not "more good." You cannot add "more" to "good." The irregular forms you must know: good → better → best, bad → worse → worst.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the coach's comparison of the two teams.",
      items: [
        {
          customerLine: 'Ronaldo: Is it always better to have the ball more than the opposition?',
          salespersonStart: 'Coach Diallo: Not necessarily — possession is useful, but what you do with it is more important.',
          suggestedCompletion: 'Some teams are much better than others with less possession. Counter-attacking teams are often faster in transition than possession-based teams. A team with 40% possession that is more clinical than the opposition can still win easily. The statistic that matters more than possession is shots on target and conversion rate. A team with 30% possession and four shots that scores two goals is better on the day than a team with 70% possession and zero goals.',
        },
        {
          customerLine: 'Sofia: When a player says "they were better than us" after a loss — is that good sportsmanship or an excuse?',
          salespersonStart: 'Coach Diallo: It depends on the context — and how you say it.',
          suggestedCompletion: 'Saying "they were better than us on the day" is honest and respectful — it acknowledges the opposition without making excuses. It is better than saying "we were unlucky" when you clearly were not. But if a player says "they were much better than us in every area" without identifying anything to improve — that is a problem. The best players compare honestly: "They were stronger than us in midfield, but we were more clinical — we just did not take our chances." That kind of analysis shows intelligence.',
        },
        {
          customerLine: 'Ronaldo: Is it harder to play against a physical team or a technical team?',
          salespersonStart: 'Coach Diallo: Most players find technical teams harder to play against — but it depends on your own strengths.',
          suggestedCompletion: 'A physical team is harder to beat when you are smaller or less strong — the aerial battles, the aggressive pressing, the intensity. But a technical team is more difficult to defend against — they move the ball faster than you can close them down, they find space between the lines, and they are more creative in tight areas. If you are physical but not technical, a technical team is worse news than a physical one. If you are quick and creative, a physical team that cannot match your pace is less dangerous.',
        },
        {
          customerLine: 'Sofia: Which is more important — being better individually or being better as a team?',
          salespersonStart: 'Coach Diallo: Football history says the team is almost always more important than individual quality.',
          suggestedCompletion: 'There are many examples of teams with less talented individual players who beat more talented opposition because they were more organised, more disciplined, and more consistent as a unit. A team that is harder to beat than its opponents — even with less technical players — can win leagues and cups. Individual quality helps, but a team where every player runs harder and presses more aggressively than the opposition is often more dangerous than a team of stars who do not work together.',
        },
      ],
    },
  },
};

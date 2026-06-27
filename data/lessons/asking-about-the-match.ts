import { Lesson } from '@/types/lesson';

export const askingAboutTheMatch: Lesson = {
  slug: 'asking-about-the-match',
  title: 'Asking About the Match',
  subtitle: 'Simple questions: "Who scored?" "What was the score?"',
  level: 'A1-A2',
  description: 'Learn how to ask and answer simple questions about a football match — "Who scored?", "What was the score?", "Did they win?", "How did it end?" — and give short, natural answers.',
  heroImage: '/images/asking-about-the-match-hero.png',

  vocabulary: [
    {
      word: 'SCORE',
      partOfSpeech: 'noun / verb',
      definition: 'The number of goals each team has — or to put the ball in the net.',
      example: 'What was the score? / He scored in the last minute!',
      imageSlug: '/images/score.png',
    },
    {
      word: 'GOAL',
      partOfSpeech: 'noun',
      definition: 'When the ball goes into the net — one point for the team.',
      example: 'Who scored the goal in the second half?',
      imageSlug: '/images/goal.png',
    },
    {
      word: 'WINNER',
      partOfSpeech: 'noun',
      definition: 'The team that wins the match — or the goal that wins the match.',
      example: 'He scored the winner in the ninety-second minute!',
      imageSlug: '/images/winner.png',
    },
    {
      word: 'DEFEAT',
      partOfSpeech: 'noun',
      definition: 'A loss — when your team does not win.',
      example: 'It was a painful defeat — we lost three-nil.',
      imageSlug: '/images/defeat.png',
    },
    {
      word: 'VICTORY',
      partOfSpeech: 'noun',
      definition: 'A win — when your team wins the match.',
      example: 'It was a great victory — we won two-nil away from home.',
      imageSlug: '/images/victory.png',
    },
    {
      word: 'OPENER',
      partOfSpeech: 'noun',
      definition: 'The first goal of the match.',
      example: 'The striker scored the opener after just three minutes.',
      imageSlug: '/images/opener.png',
    },
    {
      word: 'EQUALISER',
      partOfSpeech: 'noun',
      definition: 'A goal that makes the score level — for example, making it one-one.',
      example: 'They scored an equaliser in the eightieth minute to make it two-two.',
      imageSlug: '/images/equaliser.png',
    },
    {
      word: 'OWN GOAL',
      partOfSpeech: 'noun',
      definition: 'When a player accidentally scores in their own net.',
      example: 'The defender scored an own goal — the ball went in off his knee.',
      imageSlug: '/images/own-goal.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WHAT WAS THE SCORE?',
      definition: 'The standard question to ask for the final result.',
      example: 'What was the score? — Two-one to City.',
      imageSlug: '/images/what-was-the-score.png',
    },
    {
      phrase: 'WHO SCORED?',
      definition: 'A question asking which player or players scored the goals.',
      example: 'Who scored? — Ronaldo scored twice and Sofia got the third.',
      imageSlug: '/images/who-scored.png',
    },
    {
      phrase: 'DID THEY WIN?',
      definition: 'A simple yes/no question about the result of the match.',
      example: 'Did they win? — Yes! Three-nil!',
      imageSlug: '/images/did-they-win.png',
    },
    {
      phrase: 'HOW DID IT END?',
      definition: 'A question asking how the match finished.',
      example: 'How did it end? — One-nil. A late winner.',
      imageSlug: '/images/how-did-it-end.png',
    },
    {
      phrase: 'LATE WINNER',
      definition: 'A goal scored near the end of the match that wins the game.',
      example: 'A late winner in injury time — what a match!',
      imageSlug: '/images/late-winner.png',
    },
    {
      phrase: 'CLEAN SHEET',
      definition: 'When the goalkeeper does not let in any goals — zero goals conceded.',
      example: 'The goalkeeper kept a clean sheet — three-nil and no goals conceded.',
      imageSlug: '/images/clean-sheet.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Ronaldo! Did you watch the match last night? Did they [[win:to finish the match with more goals than the other team]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Yes! What a [[victory:a win — when your team wins the match]]! Three-one in the end.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Three-one! What was the [[score:the number of goals each team has]] at half-time?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'One-one at half-time. Then two more goals in the second half.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Who [[scored:to put the ball in the net]]? Who got the goals?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The striker scored the [[opener:the first goal of the match]] after ten minutes. Then they scored an [[equaliser:a goal that makes the score level]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'One-one at half-time — so how did the second half goals come?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The midfielder scored a great free kick — two-one. Then an [[own goal:when a player accidentally scores in their own net]] made it three-one.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'An own goal — unlucky! Was the [[winner:the goal that wins the match]] the own goal?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'No — the free kick was the [[winner:the goal that wins the match]] because it put us in front. The own goal just made it more comfortable.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Did the goalkeeper keep a clean sheet?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'No — they scored one. But three-one is still a great [[victory:a win]]. A comfortable win in the end!',
    },
  ],

  matchingExercise: [
    { word: 'SCORE', definition: 'The number of goals each team has — or to put the ball in the net' },
    { word: 'GOAL', definition: 'When the ball goes into the net — one point for the team' },
    { word: 'WINNER', definition: 'The goal that wins the match' },
    { word: 'DEFEAT', definition: 'A loss — when your team does not win' },
    { word: 'VICTORY', definition: 'A win — when your team wins the match' },
    { word: 'OPENER', definition: 'The first goal of the match' },
    { word: 'EQUALISER', definition: 'A goal that makes the score level' },
    { word: 'OWN GOAL', definition: 'When a player accidentally scores in their own net' },
  ],

  fillBlankExercise: [
    { before: 'What was the', answer: 'score', after: '? — Three-one to City.' },
    { before: 'Who', answer: 'scored', after: '? — The striker got two and the winger got one.' },
    { before: 'It was a great', answer: 'victory', after: '— three-nil away from home.' },
    { before: 'It was a painful', answer: 'defeat', after: '— we lost three-nil at home.' },
    { before: 'The striker scored the', answer: 'opener', after: 'after only three minutes.' },
    { before: 'They scored an', answer: 'equaliser', after: 'in the last minute to make it two-two.' },
    { before: 'The defender scored an', answer: 'own goal', after: '— the ball went off his knee.' },
    { before: 'The goalkeeper kept a', answer: 'clean sheet', after: '— no goals conceded!' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What was the final score in the dialogue?',
      options: ['Two-one', 'Three-nil', 'Three-one'],
      correctIndex: 2,
    },
    {
      question: 'What was the score at half-time?',
      options: ['Nil-nil', 'One-one', 'Two-one'],
      correctIndex: 1,
    },
    {
      question: 'Who scored the opener?',
      options: ['The midfielder', 'The striker', 'The winger'],
      correctIndex: 1,
    },
    {
      question: 'How did the third goal go in?',
      options: ['A free kick', 'A penalty', 'An own goal'],
      correctIndex: 2,
    },
    {
      question: 'Which goal was the winner, according to Ronaldo?',
      options: ['The own goal', 'The free kick', 'The opener'],
      correctIndex: 1,
    },
    {
      question: 'Did the goalkeeper keep a clean sheet?',
      options: ['Yes — three-nil', 'No — the other team scored one', 'Yes — no goals conceded'],
      correctIndex: 1,
    },
    {
      question: 'What does "equaliser" mean?',
      options: ['The first goal of the match', 'A goal that makes the score level', 'A goal that wins the match'],
      correctIndex: 1,
    },
    {
      question: 'What does Ronaldo call the final result?',
      options: ['A painful defeat', 'A late victory', 'A comfortable win in the end'],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct word to complete each question or answer about a match.',
    items: [
      {
        sentence: 'What _____ the score at half-time?',
        options: ['is', 'was', 'were'],
        correctIndex: 1,
        explanation: '"Was" is correct. We use past tense when asking about a match that has already been played. "What was the score?" — not "what is the score?" The match is finished, so we use "was."',
      },
      {
        sentence: '_____ scored the winning goal?',
        options: ['What', 'Which', 'Who'],
        correctIndex: 2,
        explanation: '"Who" is correct. "Who scored?" asks about a person (the player). We use "who" for people, not "what" or "which." This is one of the most common football questions.',
      },
      {
        sentence: 'The striker scored the _____ after just three minutes.',
        options: ['equaliser', 'defeat', 'opener'],
        correctIndex: 2,
        explanation: '"Opener" is correct. The opener is the first goal of the match — it "opens" the scoring. Scoring the opener early puts the team in a strong position.',
      },
      {
        sentence: 'They scored an _____ in the last minute to make it two-two.',
        options: ['own goal', 'equaliser', 'victory'],
        correctIndex: 1,
        explanation: '"Equaliser" is correct. An equaliser is a goal that makes the score level. If it was two-one and you score to make it two-two, that is an equaliser — you have equalised the score.',
      },
      {
        sentence: 'The goalkeeper kept a _____ sheet — no goals let in.',
        options: ['clean', 'white', 'full'],
        correctIndex: 0,
        explanation: '"Clean" is correct. A "clean sheet" means the goalkeeper did not concede any goals in the match. It is one of the most important achievements for a defender and goalkeeper.',
      },
      {
        sentence: 'It was a brilliant _____ — we won three-nil away from home.',
        options: ['defeat', 'victory', 'opener'],
        correctIndex: 1,
        explanation: '"Victory" is correct. A victory is a win. "A brilliant victory" means it was an impressive win. The opposite is a "defeat" — a loss.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Practise asking and answering questions about a match. Choose the best response — A, B, or C.',
      items: [
        {
          customerLine: 'Friend: Did you watch the match? What was the score?',
          options: [
            'You: Yes! Three-one — a great result.',
            'You: The match was on Saturday at three o\'clock.',
            'You: The striker scored the opener.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. The friend asked two questions: did you watch it, and what was the score? The right answer addresses both — yes (I watched it) and gives the score (three-one). B and C give other information but don\'t answer the score question directly.',
        },
        {
          customerLine: 'Friend: Who scored the goals?',
          options: [
            'You: The match was three-one.',
            'You: The striker got two and the winger scored the third.',
            'You: It was a comfortable win.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Who scored the goals?" asks for the names or positions of the goalscorers. The right answer names who scored and how many — not the score (A) or a description of the match (C).',
        },
        {
          customerLine: 'Friend: Was it a good match?',
          options: [
            'You: The goalkeeper kept a clean sheet.',
            'You: The score was one-nil.',
            'You: Yes! Three goals, a late winner, and an own goal — very exciting!',
          ],
          correctIndex: 2,
          explanation: 'C is correct. "Was it a good match?" asks for your opinion and some details. The best answer gives your view ("Yes!") and explains why the match was exciting with specific details.',
        },
        {
          customerLine: 'Friend: How did it end?',
          options: [
            'You: Three-one — two goals in the second half made the difference.',
            'You: Who scored the opener?',
            'You: The goalkeeper was excellent.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "How did it end?" asks about the final result and how the match concluded. The right answer gives the score and a brief explanation of how the match developed.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong match vocabulary words in this conversation. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Did you watch the match? How did it goal?' },
        { speaker: 'Ronaldo', text: 'Yes! We won three-one. A great victory.' },
        { speaker: 'Sofia', text: 'Who victory the first goal?' },
        { speaker: 'Ronaldo', text: 'The striker scored the opener after ten minutes.' },
        { speaker: 'Sofia', text: 'And the equaliser? What made it two-two?' },
        { speaker: 'Ronaldo', text: 'An own score — the ball went off the defender\'s knee. And a late defeat in injury time won it for us.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'How did it goal?',
          correction: 'How did it end?',
          explanation: 'The correct question is "How did it END?" — meaning how did the match finish. "How did it goal?" does not make sense — a goal is a noun, not a verb used in this way.',
        },
        {
          lineIndex: 2,
          incorrectText: 'Who victory the first goal?',
          correction: 'Who scored the first goal?',
          explanation: '"Scored" is the correct verb. We say "who SCORED the goal?" — not "who victory." Victory is a noun meaning a win. The verb for putting the ball in the net is "score."',
        },
        {
          lineIndex: 5,
          incorrectText: 'a late defeat in injury time',
          correction: 'a late winner in injury time',
          explanation: 'A WINNER is the goal that wins the match. A defeat is a loss — the whole match result, not a goal. A "late winner" means a goal scored late in the match that gives the team the victory.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using match question language from this lesson.',
      items: [
        {
          customerLine: 'Sofia: What does "clean sheet" mean?',
          salespersonStart: 'Ronaldo: It means the goalkeeper did not let in any goals.',
          suggestedCompletion: 'If the final score is three-nil, the goalkeeper kept a clean sheet. It is one of the most important achievements in football for a goalkeeper and the whole defence. Defenders and goalkeepers are very proud of a clean sheet.',
        },
        {
          customerLine: 'Sofia: What is an own goal?',
          salespersonStart: 'Ronaldo: It is when a player accidentally scores in their own net.',
          suggestedCompletion: 'The ball hits the player — usually a defender — and goes into their own goal. The goal counts for the other team. Own goals are very unlucky — the player did not mean to score. The fans often laugh or feel sorry for the player.',
        },
        {
          customerLine: 'Sofia: What questions do you ask after a match?',
          salespersonStart: 'Ronaldo: The most important ones are simple.',
          suggestedCompletion: 'First: "Did they win?" Then: "What was the score?" And then: "Who scored?" These three questions give you all the basic information about a match. If you want more detail, you can ask "How did it end?" or "Was it a good match?"',
        },
        {
          customerLine: 'Sofia: What is the difference between a victory and a defeat?',
          salespersonStart: 'Ronaldo: A victory is a win and a defeat is a loss.',
          suggestedCompletion: 'When your team wins the match, that is a victory. When your team loses the match, that is a defeat. A draw is when both teams finish with the same score — nobody wins and nobody loses. A victory gives you three points in the league; a draw gives you one.',
        },
      ],
    },
  },
};

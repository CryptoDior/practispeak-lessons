import { Lesson } from '@/types/lesson';

export const halfTime: Lesson = {
  slug: 'half-time',
  title: 'Half-Time',
  subtitle: 'Describing a paused game',
  level: 'A1-A2',
  description: 'Learn the key words and phrases for describing the break in a football match — half-time, interval, score, nil, lead, even, dressing room — and how to talk about what is happening at the pause.',
  heroImage: '/images/half-time-hero.png',

  vocabulary: [
    {
      word: 'HALF-TIME',
      partOfSpeech: 'noun',
      definition: 'The break in the middle of a football match, between the first and second halves.',
      example: 'It\'s zero-zero at half-time — nobody has scored yet.',
      imageSlug: '/images/half-time-half-time.png',
    },
    {
      word: 'INTERVAL',
      partOfSpeech: 'noun',
      definition: 'Another word for half-time — the break between the two halves.',
      example: 'Fans buy food and drinks during the interval.',
      imageSlug: '/images/interval.png',
    },
    {
      word: 'NIL',
      partOfSpeech: 'noun',
      definition: 'Zero — used for goals in a football score.',
      example: 'The score is two-nil — the home team is winning.',
      imageSlug: '/images/nil.png',
    },
    {
      word: 'LEAD',
      partOfSpeech: 'noun',
      definition: 'When one team has more goals than the other.',
      example: 'City have a one-goal lead at half-time.',
      imageSlug: '/images/half-time-lead.png',
    },
    {
      word: 'EVEN',
      partOfSpeech: 'adjective',
      definition: 'When both teams have the same score — it\'s a draw.',
      example: 'The score is even — one-one — going into the second half.',
      imageSlug: '/images/even.png',
    },
    {
      word: 'DRESSING ROOM',
      partOfSpeech: 'noun',
      definition: 'The room where players change and the manager talks to the team at half-time.',
      example: 'The players went to the dressing room at half-time to hear the manager\'s instructions.',
      imageSlug: '/images/half-time-dressing-room.png',
    },
    {
      word: 'WHISTLE',
      partOfSpeech: 'noun',
      definition: 'The sound the referee makes to stop play — at half-time and full-time.',
      example: 'The referee blew the whistle — half-time!',
      imageSlug: '/images/whistle.png',
    },
    {
      word: 'SECOND HALF',
      partOfSpeech: 'noun',
      definition: 'The second forty-five minutes of a football match, played after half-time.',
      example: 'We need to score in the second half — the first half was disappointing.',
      imageSlug: '/images/second-half.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'AT HALF-TIME',
      definition: 'At the moment when the break between the two halves happens.',
      example: 'It\'s nil-nil at half-time — still everything to play for.',
      imageSlug: '/images/half-time-at-half-time.png',
    },
    {
      phrase: 'BLOW THE WHISTLE',
      definition: 'When the referee ends a period of play by making a sound with a whistle.',
      example: 'The referee blew the whistle for half-time on forty-five minutes.',
      imageSlug: '/images/blow-the-whistle.png',
    },
    {
      phrase: 'STILL TO PLAY FOR',
      definition: 'The match is not yet decided — a team can still win.',
      example: 'It\'s one-nil but there is still everything to play for in the second half.',
      imageSlug: '/images/still-to-play-for.png',
    },
    {
      phrase: 'IN THE LEAD',
      definition: 'Winning the match at a particular moment.',
      example: 'United are in the lead at half-time — two goals to one.',
      imageSlug: '/images/in-the-lead.png',
    },
    {
      phrase: 'LEVEL AT HALF-TIME',
      definition: 'When the two teams have the same score at the break.',
      example: 'Both teams are level at half-time — one goal each.',
      imageSlug: '/images/level-at-half-time.png',
    },
    {
      phrase: 'COME BACK OUT',
      definition: 'When the players return to the pitch from the dressing room after the break.',
      example: 'The players come back out for the second half — the crowd cheers.',
      imageSlug: '/images/come-back-out.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Ronaldo — the referee blew the [[whistle:the sound the referee makes to stop play]]. Is it over?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'No — it\'s [[half-time:the break in the middle of a football match]]. The break between the first and second halves. Fifteen minutes.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What is the score? I couldn\'t see the scoreboard.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'It\'s zero-zero — [[nil:zero, used for goals in football]]-nil. Nobody has scored yet.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'So the score is [[even:when both teams have the same score]]? One team is not in the [[lead:when one team has more goals than the other]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Exactly — it\'s level at half-time. Still everything to play for in the [[second half:the second forty-five minutes of the match]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Where do the players go now?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Into the [[dressing room:the room where the manager talks to the team at half-time]]. The manager gives instructions for the second half.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'This is also called the [[interval:another word for half-time, the break between the two halves]], right?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Yes — "half-time" and "interval" mean the same thing. Most people say "half-time" in football.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I hope we score in the second half. Nil-nil is quite boring!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The manager will make changes. The players are coming back out — here comes the second half!',
    },
  ],

  matchingExercise: [
    { word: 'HALF-TIME', definition: 'The break in the middle of a football match' },
    { word: 'INTERVAL', definition: 'Another word for half-time — the break between the two halves' },
    { word: 'NIL', definition: 'Zero — used for goals in a football score' },
    { word: 'LEAD', definition: 'When one team has more goals than the other' },
    { word: 'EVEN', definition: 'When both teams have the same score' },
    { word: 'DRESSING ROOM', definition: 'The room where the manager talks to the team at half-time' },
    { word: 'WHISTLE', definition: 'The sound the referee makes to stop play' },
    { word: 'SECOND HALF', definition: 'The second forty-five minutes of the match' },
  ],

  fillBlankExercise: [
    { before: 'The referee blew the', after: '— half-time!', answer: 'whistle' },
    { before: 'It\'s', after: '— the break between the first and second halves.', answer: 'half-time' },
    { before: 'The score is two-', answer: 'nil', after: '— the home team is winning by two goals.' },
    { before: 'City have a one-goal', answer: 'lead', after: 'at half-time.' },
    { before: 'The score is', after: '— one goal each — going into the second half.', answer: 'even' },
    { before: 'The players go to the', after: 'to hear the manager\'s instructions.', answer: 'dressing room' },
    { before: 'There is still everything to play for in the', answer: 'second half', after: '.' },
    { before: '"Half-time" and "', after: '" mean the same thing — the break in the middle.', answer: 'interval' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the score when the whistle blows in the dialogue?',
      options: ['One-nil', 'Two-nil', 'Nil-nil'],
      correctIndex: 2,
    },
    {
      question: 'How long is the half-time break?',
      options: ['Ten minutes', 'Fifteen minutes', 'Twenty minutes'],
      correctIndex: 1,
    },
    {
      question: 'Where do the players go at half-time?',
      options: ['To the stands', 'Into the dressing room', 'To the tunnel entrance'],
      correctIndex: 1,
    },
    {
      question: 'What does "nil" mean in football?',
      options: ['One goal', 'Zero goals', 'A draw'],
      correctIndex: 1,
    },
    {
      question: 'What does "level at half-time" mean?',
      options: ['One team is winning', 'Both teams have the same score', 'The match is over'],
      correctIndex: 1,
    },
    {
      question: 'What is another word for half-time?',
      options: ['Whistle', 'Interval', 'Lead'],
      correctIndex: 1,
    },
    {
      question: 'What does "still everything to play for" mean?',
      options: ['The match is finished', 'The match is not yet decided — a team can still win', 'Only one team can score'],
      correctIndex: 1,
    },
    {
      question: 'What does Sofia think about a nil-nil score?',
      options: ['She finds it exciting', 'She thinks it is quite boring', 'She is happy with the result'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct word to complete each sentence about half-time.',
    items: [
      {
        sentence: 'The referee blew the _____ on forty-five minutes — half-time!',
        options: ['chant', 'whistle', 'lead'],
        correctIndex: 1,
        explanation: '"Whistle" is correct. The referee uses a whistle to signal the end of a period of play. One short blow stops play for a foul; a longer blow signals half-time or full-time.',
      },
      {
        sentence: 'It\'s two-_____ at half-time — the home team is winning.',
        options: ['nil', 'even', 'interval'],
        correctIndex: 0,
        explanation: '"Nil" is correct. In football, "nil" means zero. We say "two-nil" not "two-zero." This is one of the most important vocabulary differences between football English and everyday English.',
      },
      {
        sentence: 'The score is _____ — both teams have scored one goal each.',
        options: ['in the lead', 'even', 'second half'],
        correctIndex: 1,
        explanation: '"Even" is correct. When both teams have the same score, the match is "even" or "level." A match that is even can go either way — it is the most exciting situation.',
      },
      {
        sentence: 'The manager gives instructions in the _____ at half-time.',
        options: ['interval', 'dressing room', 'stand'],
        correctIndex: 1,
        explanation: '"Dressing room" is correct. The dressing room is where the players get changed and where the manager talks to the team. At half-time, the manager analyses the first half and gives instructions for the second.',
      },
      {
        sentence: 'United are _____ the lead at half-time — two goals to one.',
        options: ['in', 'on', 'at'],
        correctIndex: 0,
        explanation: '"In" is correct. We say a team is "in the lead" — not "on the lead" or "at the lead." "In the lead" means they are winning at that moment in the match.',
      },
      {
        sentence: 'It\'s nil-nil — but there is still everything to play for in the _____.',
        options: ['dressing room', 'interval', 'second half'],
        correctIndex: 2,
        explanation: '"Second half" is correct. The second half is the second forty-five minutes of the match. "Everything to play for in the second half" means the result is not decided yet — either team can still win.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. You are watching a match at half-time. Choose the best response — A, B, or C.',
      items: [
        {
          customerLine: 'Friend: What is the score at half-time?',
          options: [
            'You: The referee just blew the whistle.',
            'You: It\'s nil-nil — nobody has scored in the first forty-five minutes.',
            'You: The players are in the dressing room.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The friend asked about the score. The right response is to tell them the actual score — nil-nil in this case. A talks about the whistle and C talks about the players\' location.',
        },
        {
          customerLine: 'Friend: What does "nil" mean?',
          options: [
            'You: It means the match is finished.',
            'You: It means zero — no goals scored.',
            'You: It\'s another word for half-time.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. In football, "nil" means zero goals. "Two-nil" = 2-0. "Nil-nil" = 0-0. It is essential football vocabulary — we never say "two-zero" in football.',
        },
        {
          customerLine: 'Friend: Are United winning?',
          options: [
            'You: No — it\'s level at half-time. One goal each.',
            'You: The referee blew the whistle ten minutes ago.',
            'You: The manager is in the dressing room.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. The friend asked if United are winning. The right answer is to say whether they are winning, drawing, or losing. "Level" means equal — neither team is winning.',
        },
        {
          customerLine: 'Friend: Will they score in the second half?',
          options: [
            'You: I don\'t know — but there\'s still everything to play for. Either team can win.',
            'You: Half-time is fifteen minutes.',
            'You: The dressing room is under the stand.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. The friend asked about the second half. The right response uses the phrase "still everything to play for" — it means the result is not decided and either team can still win.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong half-time words in this conversation. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'The referee blew the lead — is it half-time?' },
        { speaker: 'Ronaldo', text: 'Yes! Half-time — the break in the middle of the match.' },
        { speaker: 'Sofia', text: 'What is the score?' },
        { speaker: 'Ronaldo', text: 'It\'s two-even. The home team has two goals, the away team has nil.' },
        { speaker: 'Sofia', text: 'So the home team is in the whistle by two goals.' },
        { speaker: 'Ronaldo', text: 'Exactly. They go to the dressing room now. The manager will make changes for the second half.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'blew the lead',
          correction: 'blew the whistle',
          explanation: 'The referee BLEW THE WHISTLE to signal half-time. A lead is when one team is winning — it is not something you blow. The whistle is the instrument the referee uses to stop play.',
        },
        {
          lineIndex: 3,
          incorrectText: 'two-even',
          correction: 'two-nil',
          explanation: 'The score is TWO-NIL. "Nil" means zero in football scores — we say "two-nil" not "two-even." "Even" describes the situation when both teams have the same score, like one-one.',
        },
        {
          lineIndex: 4,
          incorrectText: 'in the whistle',
          correction: 'in the lead',
          explanation: 'The correct phrase is "in the LEAD." To be "in the lead" means to be winning. You cannot be "in the whistle" — that does not make sense.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using half-time language from this lesson.',
      items: [
        {
          customerLine: 'Sofia: What does the manager say to the players at half-time?',
          salespersonStart: 'Ronaldo: He talks to them in the dressing room.',
          suggestedCompletion: 'He tells them what went wrong in the first half and what they need to do better. He might change the formation or bring on a substitute. The players have fifteen minutes to rest and listen before they come back out for the second half.',
        },
        {
          customerLine: 'Sofia: What does "level at half-time" mean?',
          salespersonStart: 'Ronaldo: It means both teams have the same score.',
          suggestedCompletion: 'Neither team is in the lead — for example, one-one or nil-nil. A level score at half-time means the match is completely open. Either team can win in the second half, so there is still everything to play for.',
        },
        {
          customerLine: 'Sofia: Is nil-nil at half-time a bad sign?',
          salespersonStart: 'Ronaldo: Not necessarily! Many great matches start nil-nil.',
          suggestedCompletion: 'Some of the best matches in history have started nil-nil at half-time and then had three or four goals in the second half. A nil-nil means no team has found a way through yet — but that can all change quickly.',
        },
        {
          customerLine: 'Sofia: What happens when the interval is over?',
          salespersonStart: 'Ronaldo: The players come back out of the tunnel.',
          suggestedCompletion: 'They walk out of the dressing room and through the tunnel onto the pitch. The referee blows the whistle to start the second half. The crowd cheers as the players appear — and the second forty-five minutes begins.',
        },
      ],
    },
  },
};

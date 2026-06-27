import { Lesson } from '@/types/lesson';

export const numbersInFootball: Lesson = {
  slug: 'numbers-in-football',
  title: 'Numbers in Football',
  subtitle: 'Scores, times, jersey numbers, and more',
  level: 'A1-A2',
  description: 'Learn how to use numbers in football — scores, jersey numbers, minutes played, half time, full time, injury time, and extra time.',
  heroImage: '/images/numbers-in-football-hero.png',

  vocabulary: [
    {
      word: 'SCORE',
      partOfSpeech: 'noun / verb',
      definition: 'The number of goals each team has. / To put the ball in the goal.',
      example: 'The score is two-one to the home team.',
      imageSlug: '/images/score.png',
    },
    {
      word: 'MINUTE',
      partOfSpeech: 'noun',
      definition: 'A unit of time in a match. A match has 90 minutes.',
      example: 'Kai scored in the 89th minute!',
      imageSlug: '/images/minute.png',
    },
    {
      word: 'HALF',
      partOfSpeech: 'noun',
      definition: 'One of the two parts of a match. Each half is 45 minutes.',
      example: 'We were winning at the end of the first half.',
      imageSlug: '/images/half.png',
    },
    {
      word: 'JERSEY NUMBER',
      partOfSpeech: 'noun',
      definition: 'The number on the back of a player\'s shirt.',
      example: 'The striker wears jersey number nine.',
      imageSlug: '/images/jersey-number.png',
    },
    {
      word: 'EXTRA TIME',
      partOfSpeech: 'noun',
      definition: 'Additional time played after 90 minutes when the score is level in a cup match.',
      example: 'The match went to extra time — thirty more minutes.',
      imageSlug: '/images/extra-time.png',
    },
    {
      word: 'INJURY TIME',
      partOfSpeech: 'noun',
      definition: 'Extra minutes added at the end of each half because of stops in play.',
      example: 'The referee added four minutes of injury time.',
      imageSlug: '/images/injury-time.png',
    },
    {
      word: 'FULL TIME',
      partOfSpeech: 'noun',
      definition: 'The end of the match after 90 minutes.',
      example: 'At full time, the score was one-all.',
      imageSlug: '/images/full-time.png',
    },
    {
      word: 'PENALTY',
      partOfSpeech: 'noun',
      definition: 'A free kick from the penalty spot, twelve yards from the goal.',
      example: 'They won the match with a penalty in the last minute.',
      imageSlug: '/images/penalty.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'ONE-NIL',
      definition: 'The score 1–0. "Nil" means zero in football.',
      example: 'We were winning one-nil at half time.',
      imageSlug: '/images/one-nil.png',
    },
    {
      phrase: 'IT\'S A DRAW',
      definition: 'Both teams have the same score at the end.',
      example: 'It\'s a draw — both teams scored two goals.',
      imageSlug: '/images/its-a-draw.png',
    },
    {
      phrase: 'THE FINAL SCORE IS',
      definition: 'Used to say what the score was at the end of the match.',
      example: 'The final score is three-two to the home team.',
      imageSlug: '/images/the-final-score-is.png',
    },
    {
      phrase: 'IN THE [NUMBER]TH MINUTE',
      definition: 'Used to say exactly when something happened in a match.',
      example: 'Kai scored in the 85th minute to win the game.',
      imageSlug: '/images/in-the-minute.png',
    },
    {
      phrase: 'AT HALF TIME',
      definition: 'The score or situation at the break between the two halves.',
      example: 'At half time, we were losing two-one.',
      imageSlug: '/images/at-half-time.png',
    },
    {
      phrase: 'ADDED TIME',
      definition: 'The extra minutes the referee adds at the end of each half.',
      example: 'They scored in added time to win the match.',
      imageSlug: '/images/added-time.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Kai, I\'m trying to understand the numbers in football. How long is a match?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'A match is ninety [[minutes:units of time in a match]]. It is split into two halves of forty-five minutes each.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'So there is a break in the middle?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Yes! At [[half:one of the two parts of a match]] time, both teams rest for fifteen minutes.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I heard the match last night went to extra time. What is that?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: '[[Extra time:additional time played after 90 minutes when the score is level in a cup match]] is thirty more minutes — two halves of fifteen. It only happens in cup matches when the score is equal.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What about injury time? The match always seems to go past ninety minutes.',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'That is [[injury time:extra minutes added at the end of each half because of stops in play]]. The referee adds minutes for substitutions, injuries, and other stops.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And what is the [[score:the number of goals each team has]] right now in the match?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'It\'s one-nil to us. If it stays like this at [[full time:the end of the match after 90 minutes]], we win!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Wait — what happened? The referee is pointing to the penalty spot!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Oh no — they have a [[penalty:a free kick from the penalty spot twelve yards from the goal]]! In the 93rd minute! This is too much stress!',
    },
  ],

  matchingExercise: [
    { word: 'SCORE', definition: 'The number of goals each team has' },
    { word: 'MINUTE', definition: 'A unit of time in a match' },
    { word: 'HALF', definition: 'One of the two parts of a match' },
    { word: 'JERSEY NUMBER', definition: 'The number on the back of a player\'s shirt' },
    { word: 'EXTRA TIME', definition: 'Additional time played after 90 minutes in a cup match' },
    { word: 'INJURY TIME', definition: 'Extra minutes added for stops in play' },
    { word: 'FULL TIME', definition: 'The end of the match after 90 minutes' },
    { word: 'PENALTY', definition: 'A free kick from the penalty spot twelve yards from the goal' },
  ],

  fillBlankExercise: [
    { before: 'The', after: 'is two-one to the away team.', answer: 'score' },
    { before: 'Kai scored in the 90th', after: '— right at the end!', answer: 'minute' },
    { before: 'At', after: 'time, the coach told the team to play more carefully.', answer: 'half' },
    { before: 'The striker wears jersey', after: 'nine.', answer: 'number' },
    { before: 'The match went to', after: 'time — thirty more minutes of football.', answer: 'extra' },
    { before: 'The referee added five minutes of', after: 'time at the end.', answer: 'injury' },
    { before: 'At', after: 'time, the score was one-all.', answer: 'full' },
    { before: 'The foul inside the box gave them a', answer: 'penalty', after: '.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'How long is a standard football match?',
      options: ['60 minutes', '90 minutes', '120 minutes'],
      correctIndex: 1,
    },
    {
      question: 'What is half time?',
      options: ['The last 10 minutes of a match', 'The break between the two halves', 'When a team scores half their goals'],
      correctIndex: 1,
    },
    {
      question: 'When does extra time happen?',
      options: ['After every match', 'Only in cup matches when the score is level after 90 minutes', 'When a player gets a red card'],
      correctIndex: 1,
    },
    {
      question: 'Why does the referee add injury time?',
      options: ['Because the players are tired', 'To make the match longer for the fans', 'Because there were stops in play for injuries and substitutions'],
      correctIndex: 2,
    },
    {
      question: 'What is the score in the match that Kai and Sofia are watching?',
      options: ['One-nil to the other team', 'One-all', 'One-nil to Kai\'s team'],
      correctIndex: 2,
    },
    {
      question: 'What happens at the end of a match?',
      options: ['Extra time always begins', 'It is full time and the match is over', 'Injury time begins'],
      correctIndex: 1,
    },
    {
      question: 'What does a penalty give a team?',
      options: ['A corner kick', 'A free kick from twelve yards out with only the goalkeeper to beat', 'An extra player on the pitch'],
      correctIndex: 1,
    },
    {
      question: 'What does Sofia say surprises her about match time?',
      options: ['The match starts late', 'The match always seems to go past ninety minutes', 'The half time break is too long'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'In football, we say scores in a special way. Choose the correct option.',
    items: [
      {
        sentence: 'The score is 1–0. We say: "The score is _____."',
        options: ['one-zero', 'one-nil', 'one-nothing'],
        correctIndex: 1,
        explanation: '"One-nil" is correct. In football English, we always use "nil" for zero in a score, not "zero" or "nothing". For example: two-nil, three-nil.',
      },
      {
        sentence: 'The match is 0–0. We say: "It\'s _____."',
        options: ['nil-nil', 'zero-zero', 'nothing-nothing'],
        correctIndex: 0,
        explanation: '"Nil-nil" is correct. When both teams have zero goals, we say "nil-nil". This is also called a goalless draw.',
      },
      {
        sentence: 'Kai scored at 85 minutes. We say: "He scored _____ the 85th minute."',
        options: ['at', 'in', 'on'],
        correctIndex: 1,
        explanation: '"In" is correct. We say "in the 85th minute", not "at" or "on". For example: "She scored in the 30th minute."',
      },
      {
        sentence: 'The match ended 2–2. We say: "The match ended _____ a draw."',
        options: ['in', 'on', 'at'],
        correctIndex: 0,
        explanation: '"In" is correct. "The match ended in a draw" means both teams finished with the same score. We use "in a draw", not "on" or "at".',
      },
      {
        sentence: 'The first 45 minutes are finished. We say: "It\'s _____."',
        options: ['full time', 'half time', 'extra time'],
        correctIndex: 1,
        explanation: '"Half time" is correct. At 45 minutes, the first half ends and it is half time. Full time is at 90 minutes. Extra time is only in cup matches.',
      },
      {
        sentence: 'The referee signals the end of the match. We say: "It\'s _____."',
        options: ['half time', 'extra time', 'full time'],
        correctIndex: 2,
        explanation: '"Full time" is correct. Full time is when the referee blows the whistle to end the match at 90 minutes (plus injury time).',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read the question, then choose the best answer — A, B, or C.',
      items: [
        {
          customerLine: 'How do you say the score 3–0 in football English?',
          options: [
            'Three-zero.',
            'Three-nil.',
            'Three-nothing.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. In football English, zero is always "nil". We say "three-nil", not "three-zero" or "three-nothing".',
        },
        {
          customerLine: 'The score is 1–1. What do we call this result?',
          options: [
            'A win for the home team.',
            'A defeat.',
            'A draw.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. When both teams have the same score, it is a draw. "One-all" is another way to say 1-1 in a draw.',
        },
        {
          customerLine: 'Why did the match go past 90 minutes?',
          options: [
            'The teams wanted to play longer.',
            'The referee added injury time for stops in play.',
            'It was a league match so it always goes longer.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Injury time is added by the referee to make up for time lost during the half — for injuries, substitutions, and other stoppages.',
        },
        {
          customerLine: 'When does extra time happen?',
          options: [
            'After every match.',
            'Only in cup matches when the score is level after 90 minutes.',
            'When a team scores a penalty.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Extra time only happens in knockout cup matches when the score is equal after 90 minutes. League matches end at full time even if it is a draw.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes with football numbers in this dialogue. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Kai, what is the score? Is it two-zero?' },
        { speaker: 'Kai', text: 'We say two-nil in football, not two-zero. It\'s two-nil to us!' },
        { speaker: 'Sofia', text: 'Brilliant! When did we score? What hour was it?' },
        { speaker: 'Kai', text: 'We scored in the 40th minute. Just before extra time.' },
        { speaker: 'Sofia', text: 'And how long is each half — 30 minutes?' },
        { speaker: 'Kai', text: 'No — each half is 45 minutes. So full time is at 90 minutes.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'Is it two-zero?',
          correction: 'Is it two-nil?',
          explanation: 'In football, we always say "nil" for zero in a score — not "zero". The correct expression is "two-nil".',
        },
        {
          lineIndex: 2,
          incorrectText: 'What hour was it?',
          correction: 'What minute was it?',
          explanation: 'In football, we talk about the MINUTE of a goal, not the hour. For example: "He scored in the 40th minute."',
        },
        {
          lineIndex: 3,
          incorrectText: 'Just before extra time',
          correction: 'Just before half time',
          explanation: 'The 40th minute is near the end of the FIRST HALF — so the correct expression is "just before half time". Extra time only happens in cup matches after 90 minutes.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using football number language from this lesson.',
      items: [
        {
          customerLine: 'Sofia: How do I describe a 2–1 score?',
          salespersonStart: 'Kai: You say "two-one".',
          suggestedCompletion: 'The winning team\'s score always comes first. So if we won two-one, we say "two-one to us". If we lost, we say "one-two" or "they beat us two-one".',
        },
        {
          customerLine: 'Sofia: What happens if the score is 1–1 after 90 minutes in a cup match?',
          salespersonStart: 'Kai: The match goes to extra time.',
          suggestedCompletion: 'That means thirty more minutes — two halves of fifteen. If the score is still level after extra time, the match goes to penalties.',
        },
        {
          customerLine: 'Sofia: Why did the referee hold up a board showing "4"?',
          salespersonStart: 'Kai: That means there are four minutes of injury time.',
          suggestedCompletion: 'The referee adds injury time to make up for stops in play — like injuries and substitutions. So the match will not end at exactly 90 minutes.',
        },
        {
          customerLine: 'Sofia: What does the number on a player\'s shirt tell you?',
          salespersonStart: 'Kai: That is their jersey number.',
          suggestedCompletion: 'Jersey numbers often show the player\'s position. Number one is usually the goalkeeper. Number nine or ten is often the striker or the best player in the team.',
        },
      ],
    },
  },
};

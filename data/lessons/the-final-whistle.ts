import { Lesson } from '@/types/lesson';

export const theFinalWhistle: Lesson = {
  slug: 'the-final-whistle',
  title: 'The Final Whistle',
  subtitle: 'Full-time, extra time, and penalties',
  level: 'A1-A2',
  description: 'Learn what happens at the end of a football match — full-time, extra time, penalty shootout, sudden death, golden goal — and how to describe the different ways a match can finish.',
  heroImage: '/images/the-final-whistle-hero.png',

  vocabulary: [
    {
      word: 'FULL-TIME',
      partOfSpeech: 'noun',
      definition: 'The moment when the ninety minutes are finished and the match ends.',
      example: 'The referee blew the whistle at full-time — the match is over.',
      imageSlug: '/images/full-time.png',
    },
    {
      word: 'EXTRA TIME',
      partOfSpeech: 'noun',
      definition: 'An additional thirty minutes played when the score is level after ninety minutes — used in cup matches.',
      example: 'The score was one-one at full-time, so they played extra time.',
      imageSlug: '/images/extra-time.png',
    },
    {
      word: 'PENALTY SHOOTOUT',
      partOfSpeech: 'noun',
      definition: 'When the teams take turns shooting from the penalty spot to decide the winner after extra time.',
      example: 'They won the penalty shootout five kicks to four.',
      imageSlug: '/images/penalty-shootout.png',
    },
    {
      word: 'DRAW',
      partOfSpeech: 'noun',
      definition: 'When both teams finish with the same score at full-time.',
      example: 'It finished two-two — a draw. Both teams got one point.',
      imageSlug: '/images/draw.png',
    },
    {
      word: 'RESULT',
      partOfSpeech: 'noun',
      definition: 'The final score of the match.',
      example: 'What was the result? Three-nil to the home team!',
      imageSlug: '/images/result.png',
    },
    {
      word: 'INJURY TIME',
      partOfSpeech: 'noun',
      definition: 'Extra minutes added at the end of each half by the referee to make up for time lost during the game.',
      example: 'They scored in the fourth minute of injury time — incredible!',
      imageSlug: '/images/injury-time.png',
    },
    {
      word: 'AGGREGATE',
      partOfSpeech: 'noun',
      definition: 'The total score over two matches (home and away) in a cup competition.',
      example: 'They won on aggregate — three goals to two over both matches.',
      imageSlug: '/images/aggregate.png',
    },
    {
      word: 'SUDDEN DEATH',
      partOfSpeech: 'noun',
      definition: 'In extra time, when the first team to score wins immediately and the match ends.',
      example: 'In sudden death extra time, the first goal ends the match.',
      imageSlug: '/images/sudden-death.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BLOW THE FINAL WHISTLE',
      definition: 'When the referee ends the match at full-time.',
      example: 'The referee blew the final whistle — it\'s over! We won!',
      imageSlug: '/images/blow-the-final-whistle.png',
    },
    {
      phrase: 'GO TO EXTRA TIME',
      definition: 'When the match is not decided after ninety minutes and more time is played.',
      example: 'It\'s still one-one — we\'re going to extra time!',
      imageSlug: '/images/go-to-extra-time.png',
    },
    {
      phrase: 'STEP UP TO TAKE A PENALTY',
      definition: 'When a player walks forward to take a kick in the penalty shootout.',
      example: 'The captain stepped up to take the first penalty.',
      imageSlug: '/images/step-up.png',
    },
    {
      phrase: 'LEVEL ON AGGREGATE',
      definition: 'When the total goals over two matches are equal.',
      example: 'Both teams are level on aggregate — three goals each.',
      imageSlug: '/images/level-on-aggregate.png',
    },
    {
      phrase: 'WIN ON PENALTIES',
      definition: 'To win a match through a penalty shootout after a draw.',
      example: 'We won on penalties — four kicks to three. We\'re through to the final!',
      imageSlug: '/images/win-on-penalties.png',
    },
    {
      phrase: 'ADDED TIME',
      definition: 'The extra minutes added at the end of each half for stoppages — same as injury time.',
      example: 'Four minutes of added time — there\'s still time to score!',
      imageSlug: '/images/added-time.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Ronaldo — is the match almost over? It says ninety minutes on the board.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Almost! But the referee adds [[injury time:extra minutes added at the end of each half]]. The board says four minutes extra.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Why four minutes?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'For time lost — injuries, substitutions, goal celebrations. The referee keeps track and adds it at the end.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What is the [[result:the final score of the match]] at the moment? Is it a [[draw:when both teams finish with the same score]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Yes — one-one. And this is a cup match, so if it stays a draw, we go to [[extra time:additional thirty minutes played when the score is level after ninety minutes]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And if extra time is also a draw?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Then it goes to a [[penalty shootout:when teams take turns shooting from the penalty spot to decide the winner]]! The most dramatic thing in football.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Oh wow! And what about [[full-time:the moment when the ninety minutes are finished]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Full-time is when the ninety minutes finish — plus injury time. The referee blows the final whistle.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I hear the whistle — it\'s [[full-time:the moment the match ends]]! One-one! Extra time!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Here we go! Extra time — thirty more minutes. And if still level... penalty shootout! Stay calm, Sofia!',
    },
  ],

  matchingExercise: [
    { word: 'FULL-TIME', definition: 'The moment when the ninety minutes are finished and the match ends' },
    { word: 'EXTRA TIME', definition: 'Additional thirty minutes when the score is level after ninety minutes' },
    { word: 'PENALTY SHOOTOUT', definition: 'Teams take turns shooting from the penalty spot to decide the winner' },
    { word: 'DRAW', definition: 'When both teams finish with the same score' },
    { word: 'RESULT', definition: 'The final score of the match' },
    { word: 'INJURY TIME', definition: 'Extra minutes added at the end of each half for time lost' },
    { word: 'AGGREGATE', definition: 'The total score over two matches in a cup competition' },
    { word: 'SUDDEN DEATH', definition: 'When the first team to score in extra time wins immediately' },
  ],

  fillBlankExercise: [
    { before: 'The referee blew the whistle at', answer: 'full-time', after: '— the match is over.' },
    { before: 'They played', answer: 'extra time', after: 'because the score was level after ninety minutes.' },
    { before: 'They won the', answer: 'penalty shootout', after: 'five kicks to four.' },
    { before: 'It finished two-two — a', answer: 'draw', after: '. Both teams got one point.' },
    { before: 'What was the', answer: 'result', after: '? Three-nil to the home team!' },
    { before: 'They scored in', answer: 'injury time', after: '— in the ninety-third minute!' },
    { before: 'They won on', answer: 'aggregate', after: '— three goals to two over both matches.' },
    { before: 'In', answer: 'sudden death', after: ', the first team to score wins immediately.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does the referee add at the end of ninety minutes?',
      options: ['Extra time', 'Injury time', 'A penalty shootout'],
      correctIndex: 1,
    },
    {
      question: 'Why is injury time added?',
      options: ['Because the managers asked for it', 'For time lost due to injuries, substitutions, and celebrations', 'Because the teams are level'],
      correctIndex: 1,
    },
    {
      question: 'What happens when a cup match is a draw after ninety minutes?',
      options: ['Both teams get a point', 'The match is replayed', 'They play extra time'],
      correctIndex: 2,
    },
    {
      question: 'How long is extra time?',
      options: ['Fifteen minutes', 'Twenty minutes', 'Thirty minutes'],
      correctIndex: 2,
    },
    {
      question: 'What happens if extra time is also a draw?',
      options: ['The teams share the trophy', 'There is a penalty shootout', 'The referee tosses a coin'],
      correctIndex: 1,
    },
    {
      question: 'What does "aggregate" mean?',
      options: ['The score after extra time', 'The total score over two matches in a cup competition', 'Another word for full-time'],
      correctIndex: 1,
    },
    {
      question: 'What is the score at full-time in the dialogue?',
      options: ['Nil-nil', 'Two-one', 'One-one'],
      correctIndex: 2,
    },
    {
      question: 'What does Ronaldo call a penalty shootout?',
      options: ['The easiest thing in football', 'The most boring thing in football', 'The most dramatic thing in football'],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct word to complete each sentence about the end of a match.',
    items: [
      {
        sentence: 'The referee blew the final _____ — the match is over!',
        options: ['anthem', 'whistle', 'toss'],
        correctIndex: 1,
        explanation: '"Whistle" is correct. The referee blows the whistle to end the match at full-time. A long blow of the whistle means the period is finished. "The final whistle" is a very common football phrase.',
      },
      {
        sentence: 'The score is one-one at full-time, so they will play _____ time.',
        options: ['injury', 'extra', 'half'],
        correctIndex: 1,
        explanation: '"Extra" is correct — "extra time." In cup matches, if the score is level after ninety minutes, the teams play an additional thirty minutes to try to find a winner.',
      },
      {
        sentence: 'It finished two-two — a _____. Both teams got one point each.',
        options: ['result', 'draw', 'lead'],
        correctIndex: 1,
        explanation: '"Draw" is correct. A draw is when both teams finish with the same score. In league football, a draw gives both teams one point. In cup football, a draw usually leads to extra time or penalties.',
      },
      {
        sentence: 'They added four minutes of _____ time for the injuries and substitutions.',
        options: ['extra', 'injury', 'sudden'],
        correctIndex: 1,
        explanation: '"Injury" is correct — "injury time." This is the extra time added at the end of each half. It compensates for stoppages during play. It is also called "added time" or "stoppage time."',
      },
      {
        sentence: 'After extra time, they needed a penalty _____ to find a winner.',
        options: ['toss', 'draw', 'shootout'],
        correctIndex: 2,
        explanation: '"Shootout" is correct — "penalty shootout." A penalty shootout is the most dramatic way to end a football match. Each team takes five penalties, and if still level, they go to sudden death.',
      },
      {
        sentence: 'They won _____ penalties — four kicks to three.',
        options: ['on', 'in', 'at'],
        correctIndex: 0,
        explanation: '"On" is correct. We say "win on penalties" — not "in penalties" or "at penalties." The preposition "on" is used in this football phrase. Similarly: "win on aggregate," "win on goal difference."',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Someone asks about the end of a cup match. Choose the best response — A, B, or C.',
      items: [
        {
          customerLine: 'Friend: The board shows ninety minutes — is the match finished?',
          options: [
            'You: No — the referee adds injury time for stoppages. Watch for the final whistle.',
            'You: Yes, the match is over. Go home.',
            'You: Extra time starts now.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. Ninety minutes is not always the final moment — the referee adds injury time for stoppages during the match. The match only truly ends when the referee blows the final whistle.',
        },
        {
          customerLine: 'Friend: It\'s one-one after ninety minutes — what happens now?',
          options: [
            'You: Both teams get one point each and go home.',
            'You: In a cup match, they play thirty minutes of extra time.',
            'You: The referee decides the winner with a coin toss.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. In cup matches, a draw after ninety minutes leads to extra time — thirty more minutes. In league matches, the teams simply share a point each. But in knock-out competitions, there must be a winner.',
        },
        {
          customerLine: 'Friend: What happens if extra time is also a draw?',
          options: [
            'You: They play another full match.',
            'You: The match is abandoned.',
            'You: They go to a penalty shootout to decide the winner.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. After extra time, if the match is still level, the teams go to a penalty shootout. Each team takes five penalties and the team with more successful kicks wins. It is one of the most dramatic moments in sport.',
        },
        {
          customerLine: 'Friend: What does "winning on aggregate" mean?',
          options: [
            'You: It means winning in a penalty shootout.',
            'You: It means scoring more goals than the other team over both legs of a cup tie.',
            'You: It means winning the match in injury time.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. In two-legged cup ties, teams play each other home and away. The "aggregate" is the combined score from both matches. The team that scores more goals over both matches wins on aggregate.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong end-of-match words in this conversation. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'The board shows ninety minutes — is it full-time?' },
        { speaker: 'Ronaldo', text: 'Not yet — the referee adds aggregate time for stoppages.' },
        { speaker: 'Sofia', text: 'And if it\'s still one-one at full-time?' },
        { speaker: 'Ronaldo', text: 'In a cup match, we go to sudden time — thirty more minutes.' },
        { speaker: 'Sofia', text: 'And if that\'s also level?' },
        { speaker: 'Ronaldo', text: 'Then it\'s a full-time shootout! Each team takes five draw kicks from the spot.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'adds aggregate time',
          correction: 'adds injury time',
          explanation: 'The referee adds INJURY TIME (also called "added time"). Aggregate is the total score over two matches in a cup competition — it has nothing to do with adding time at the end of a half.',
        },
        {
          lineIndex: 3,
          incorrectText: 'go to sudden time',
          correction: 'go to extra time',
          explanation: 'They go to EXTRA TIME — an additional thirty minutes. "Sudden death" is a phase within extra time where the first goal wins — but the correct term for the thirty extra minutes is "extra time."',
        },
        {
          lineIndex: 5,
          incorrectText: 'a full-time shootout',
          correction: 'a penalty shootout',
          explanation: 'It is a PENALTY SHOOTOUT — not a "full-time shootout." A penalty shootout is when teams take turns shooting from the penalty spot to decide the winner after extra time.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using end-of-match language from this lesson.',
      items: [
        {
          customerLine: 'Sofia: Why does the referee add time at the end?',
          salespersonStart: 'Ronaldo: Because time is lost during the match for various reasons.',
          suggestedCompletion: 'When a player is injured and needs treatment, the clock keeps running — so the referee adds those minutes back. Substitutions, goal celebrations, and VAR checks also take time. The added injury time makes sure both teams get the full ninety minutes of play.',
        },
        {
          customerLine: 'Sofia: What is a penalty shootout like?',
          salespersonStart: 'Ronaldo: It is the most dramatic moment in football.',
          suggestedCompletion: 'Each team picks five players to take a penalty. The players take turns shooting from the penalty spot against the goalkeeper. The team that scores the most out of five wins. If it is still level after five each, it goes to sudden death — the first team to miss loses.',
        },
        {
          customerLine: 'Sofia: What is the difference between injury time and extra time?',
          salespersonStart: 'Ronaldo: They are very different things.',
          suggestedCompletion: 'Injury time is the extra minutes added at the end of each half — usually two to five minutes — for time lost during the game. Extra time is the additional thirty minutes played after ninety minutes when the score is level in a cup match.',
        },
        {
          customerLine: 'Sofia: What does "sudden death" mean in extra time?',
          salespersonStart: 'Ronaldo: It means the first goal wins the match immediately.',
          suggestedCompletion: 'In some competitions, if the teams are still level after the first period of extra time, they go to sudden death. As soon as one team scores, the match ends and that team wins. It is an extremely tense and exciting way to end a game.',
        },
      ],
    },
  },
};

import { Lesson } from '@/types/lesson';

export const winLoseDraw: Lesson = {
  slug: 'win-lose-draw',
  title: 'Win, Lose, Draw',
  subtitle: 'Match results and simple past tense',
  level: 'A1-A2',
  description: 'Learn how to talk about football results — win, lose, draw, result, defeat, victory, point, and performance — and how to use the simple past tense to say "We won 2–1" or "They beat us".',
  heroImage: '/images/win-lose-draw-hero.png',

  vocabulary: [
    {
      word: 'WIN',
      partOfSpeech: 'verb',
      definition: 'To finish the match with more goals than the other team.',
      example: 'We won three-one — a great result!',
      imageSlug: '/images/win.png',
    },
    {
      word: 'LOSE',
      partOfSpeech: 'verb',
      definition: 'To finish the match with fewer goals than the other team.',
      example: 'They lost the match in the last minute.',
      imageSlug: '/images/lose.png',
    },
    {
      word: 'DRAW',
      partOfSpeech: 'noun / verb',
      definition: 'To finish with the same score as the other team. / A result where both teams score equally.',
      example: 'The match ended in a draw — one-all.',
      imageSlug: '/images/draw.png',
    },
    {
      word: 'RESULT',
      partOfSpeech: 'noun',
      definition: 'The final score or outcome of a match.',
      example: 'What was the result last night?',
      imageSlug: '/images/result.png',
    },
    {
      word: 'DEFEAT',
      partOfSpeech: 'noun',
      definition: 'A loss — when your team does not win.',
      example: 'It was a hard defeat — they played really well.',
      imageSlug: '/images/defeat.png',
    },
    {
      word: 'VICTORY',
      partOfSpeech: 'noun',
      definition: 'A win — when your team scores more goals than the other team.',
      example: 'The fans celebrated the victory all night.',
      imageSlug: '/images/victory.png',
    },
    {
      word: 'POINT',
      partOfSpeech: 'noun',
      definition: 'A unit in the league table. Three for a win, one for a draw, zero for a loss.',
      example: 'We need one more point to win the league.',
      imageSlug: '/images/point.png',
    },
    {
      word: 'PERFORMANCE',
      partOfSpeech: 'noun',
      definition: 'How well or badly the team played in a match.',
      example: 'That was a great performance from everyone.',
      imageSlug: '/images/performance.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WE WON [SCORE]',
      definition: 'Used to talk about a victory using the simple past tense.',
      example: 'We won two-one — it was a fantastic match!',
      imageSlug: '/images/we-won.png',
    },
    {
      phrase: 'WE LOST [SCORE]',
      definition: 'Used to talk about a defeat using the simple past tense.',
      example: 'We lost one-nil. We need to do better next time.',
      imageSlug: '/images/we-lost.png',
    },
    {
      phrase: 'IT ENDED IN A DRAW',
      definition: 'Used to say both teams scored the same number of goals.',
      example: 'It ended in a draw — two-all.',
      imageSlug: '/images/it-ended-in-a-draw.png',
    },
    {
      phrase: 'THEY BEAT US',
      definition: 'Used to say the other team won. "Beat" is the past tense of "beat".',
      example: 'They beat us three-nil. We were not at our best.',
      imageSlug: '/images/they-beat-us.png',
    },
    {
      phrase: 'WE PLAYED WELL / BADLY',
      definition: 'Used to describe how the team performed.',
      example: 'We played well but still lost — the other team was better on the day.',
      imageSlug: '/images/we-played-well.png',
    },
    {
      phrase: 'BETTER LUCK NEXT TIME',
      definition: 'Something you say to someone after a loss to encourage them.',
      example: 'Better luck next time — you\'ll win the next one.',
      imageSlug: '/images/better-luck-next-time.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Kai, what was the [[result:the final score or outcome of a match]] last night?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'We [[won:finished the match with more goals]] two-one. It was a great match!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Amazing! What a [[victory:a win — when your team scores more goals]]! How was the [[performance:how well or badly the team played]]?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'We played really well in the first half. But in the second half we nearly [[lost:finished with fewer goals than the other team]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Oh no! What happened?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'They scored to make it two-one but we held on. It could have been a [[draw:a result where both teams score equally]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Thank goodness! How did you feel after the win?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Amazing. Every [[point:a unit in the league — three for a win]] is important right now. We need to win the league.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What about last week? You said you had a bad [[defeat:a loss — when your team does not win]].',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Yes. They beat us three-nil. It was terrible. But Coach Diallo said: "Better luck next time."',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'That\'s the right attitude. Win, lose, or draw — you just keep going.',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Exactly. That\'s football.',
    },
  ],

  matchingExercise: [
    { word: 'WIN', definition: 'To finish with more goals than the other team' },
    { word: 'LOSE', definition: 'To finish with fewer goals than the other team' },
    { word: 'DRAW', definition: 'To finish with the same score as the other team' },
    { word: 'RESULT', definition: 'The final score or outcome of a match' },
    { word: 'DEFEAT', definition: 'A loss — when your team does not win' },
    { word: 'VICTORY', definition: 'A win — when your team scores more goals' },
    { word: 'POINT', definition: 'A unit in the league — three for a win, one for a draw' },
    { word: 'PERFORMANCE', definition: 'How well or badly the team played' },
  ],

  fillBlankExercise: [
    { before: 'We', after: 'two-one — a perfect result!', answer: 'won' },
    { before: 'They', after: 'the match because they played badly.', answer: 'lost' },
    { before: 'The match ended in a', after: '— one goal each.', answer: 'draw' },
    { before: 'What was the', after: 'of the match last night?', answer: 'result' },
    { before: 'It was a painful', after: '— three-nil is a big score to lose by.', answer: 'defeat' },
    { before: 'The fans celebrated the', after: 'all the way home.', answer: 'victory' },
    { before: 'We got one', after: 'from the draw — it keeps us in second place.', answer: 'point' },
    { before: 'The', after: 'was great today — the whole team worked hard.', answer: 'performance' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What was the result of last night\'s match for Kai\'s team?',
      options: ['They drew one-all', 'They won two-one', 'They lost two-one'],
      correctIndex: 1,
    },
    {
      question: 'What almost happened in the second half?',
      options: ['Kai\'s team scored a third goal', 'The match almost ended in a draw', 'The other team won'],
      correctIndex: 1,
    },
    {
      question: 'Why does Kai say every point is important?',
      options: ['Because he wants a bonus', 'Because they need to win the league', 'Because the draw gives them three points'],
      correctIndex: 1,
    },
    {
      question: 'What was the score when Kai\'s team lost last week?',
      options: ['One-nil', 'Two-one', 'Three-nil'],
      correctIndex: 2,
    },
    {
      question: 'What did Coach Diallo say after the defeat?',
      options: ['"We played badly."', '"Better luck next time."', '"We need to practice more."'],
      correctIndex: 1,
    },
    {
      question: 'How many points do you get for a win in the league?',
      options: ['One', 'Two', 'Three'],
      correctIndex: 2,
    },
    {
      question: 'What does "they beat us" mean?',
      options: ['We won', 'The match was a draw', 'The other team won'],
      correctIndex: 2,
    },
    {
      question: 'What does Sofia say at the end?',
      options: ['"Better luck next time."', '"Win, lose, or draw — you just keep going."', '"The performance was not good enough."'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'How do you feel after your team wins? And after they lose?',
      'Can you say the result of a recent match in English? Try: "We won two-one."',
      'Do you think a draw is a good result? When is a draw a good result?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'We use the simple past tense to talk about football results. Choose the correct past tense form.',
    items: [
      {
        sentence: 'Last night, we _____ two-one.',
        options: ['win', 'won', 'wins'],
        correctIndex: 1,
        explanation: '"Won" is correct. "Won" is the past tense of "win". We use the past tense to talk about something that already happened. "Win" is the present form and "wins" is for he/she/it.',
      },
      {
        sentence: 'They _____ three-nil last Tuesday.',
        options: ['lose', 'looses', 'lost'],
        correctIndex: 2,
        explanation: '"Lost" is correct. "Lost" is the past tense of "lose". We say "they lost" to describe a defeat that already happened. "Lose" is the infinitive form.',
      },
      {
        sentence: 'The match _____ in a draw — one-all.',
        options: ['end', 'ended', 'ends'],
        correctIndex: 1,
        explanation: '"Ended" is correct. "Ended" is the past tense of "end". We say "the match ended" to describe how the match finished. "It ended in a draw" is a very common phrase.',
      },
      {
        sentence: 'They _____ us three-nil. It was a bad day.',
        options: ['beat', 'beated', 'beats'],
        correctIndex: 0,
        explanation: '"Beat" is correct. "Beat" is both the present AND past tense of "beat". It is an irregular verb. We say "they beat us" (past) and "they beat us every time" (present). There is no "beated".',
      },
      {
        sentence: 'We _____ really well in the first half.',
        options: ['play', 'played', 'plays'],
        correctIndex: 1,
        explanation: '"Played" is correct. "Played" is the simple past tense of "play". We use it to describe how the team performed in a match that is already finished.',
      },
      {
        sentence: 'A draw gives you _____ point in the league.',
        options: ['three', 'zero', 'one'],
        correctIndex: 2,
        explanation: '"One" is correct. In football leagues, a draw gives each team ONE point. A win gives THREE points. A defeat gives ZERO points.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read the situation, then choose the best English response — A, B, or C.',
      items: [
        {
          customerLine: 'Friend: "What was the result last night?"',
          options: [
            '"The result is good."',
            '"We won two-one. It was a great performance from the whole team."',
            '"We win two-one."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. We use the PAST TENSE to talk about a finished match: "We WON two-one." We also add a comment about the performance. C is wrong because "we win" is present tense.',
        },
        {
          customerLine: 'Friend: "Did you win?"',
          options: [
            '"No, we lost three-nil. They beat us badly but better luck next time."',
            '"No, we lose three-nil."',
            '"Yes, we defeat them."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. It uses the past tense correctly: "we LOST", "they BEAT us". It also uses the phrase "better luck next time" which is natural after a defeat.',
        },
        {
          customerLine: 'Friend: "How do you feel after the draw?"',
          options: [
            '"A draw gave us one point and keeps us in second place. It\'s OK — we played well."',
            '"A draw gives us three points."',
            '"A draw is a defeat for us."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. A draw gives ONE point (not three). The response uses past tense correctly and shows understanding of how the league table works.',
        },
        {
          customerLine: 'Friend: "Your team played badly and lost. What do you say to cheer them up?"',
          options: [
            '"You deserved to lose."',
            '"The performance was terrible."',
            '"Better luck next time! You played well in parts — keep working hard."',
          ],
          correctIndex: 2,
          explanation: 'C is correct. "Better luck next time" is the standard English phrase to encourage someone after a defeat. Adding a positive comment ("you played well in parts") makes it more supportive.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three past tense mistakes in this dialogue. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Kai, what is the result from last night?' },
        { speaker: 'Kai', text: 'We won two-one! A great victory.' },
        { speaker: 'Sofia', text: 'Amazing! They beat you or you beat them?' },
        { speaker: 'Kai', text: 'We beated them. Our performance was excellent.' },
        { speaker: 'Sofia', text: 'And last week — you lose three-nil, right?' },
        { speaker: 'Kai', text: 'Yes. We lost three-nil. A painful defeat. But better luck next time!' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'what is the result from last night',
          correction: 'what was the result from last night',
          explanation: 'We use the past tense WAS because the match is finished. "What IS the result" suggests the match is still happening. "What WAS the result" is correct for a finished match.',
        },
        {
          lineIndex: 3,
          incorrectText: 'We beated them',
          correction: 'We beat them',
          explanation: '"Beat" is an irregular verb — its past tense is also "beat", not "beated". There is no such word as "beated" in English.',
        },
        {
          lineIndex: 4,
          incorrectText: 'you lose three-nil',
          correction: 'you lost three-nil',
          explanation: 'We use the past tense LOST because last week\'s match is finished. "You lose" is present tense. "You LOST" is the correct past tense form.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using result vocabulary and past tense. Compare your answers, then click to see one possible answer.',
      items: [
        {
          customerLine: 'Sofia: Kai, how do I say the result in English if we won 3–0?',
          salespersonStart: 'Kai: You say: "We won three-nil."',
          suggestedCompletion: 'Always use "nil" for zero in a score. You can also say "We beat them three-nil" or "The final score was three-nil to us." Remember: "won" is the past tense of "win".',
        },
        {
          customerLine: 'Sofia: What is the difference between a defeat and a draw?',
          salespersonStart: 'Kai: A defeat is when you lose.',
          suggestedCompletion: 'For example: "We suffered a defeat — they beat us two-nil." A draw is when both teams score the same number of goals. For example: "The match ended in a draw — one-all." A draw gives you one point. A defeat gives you zero.',
        },
        {
          customerLine: 'Sofia: How many points do we need to win the league?',
          salespersonStart: 'Kai: We need three more points.',
          suggestedCompletion: 'If we win our next match, we get three points and that will be enough. A draw only gives us one point. If we lose, we get nothing and the other team might catch us. We must win!',
        },
        {
          customerLine: 'Sofia: Our friend\'s team just lost badly. What should we say to them?',
          salespersonStart: 'Kai: We can say "better luck next time."',
          suggestedCompletion: 'It is a kind way to say don\'t worry — you can win next time. You can also say "you played well" or "it\'s just one match." Encouragement is very important in football.',
        },
      ],
    },
  },
};

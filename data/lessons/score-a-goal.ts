import { Lesson } from '@/types/lesson';

export const scoreAGoal: Lesson = {
  slug: 'score-a-goal',
  title: 'Score a Goal',
  subtitle: 'Celebrating in English — exclamations and goal vocabulary',
  level: 'A1-A2',
  description: 'Learn how to talk about scoring in football — score, celebrate, equalise, lead, assist, net, hat-trick, and comeback — and the English exclamations fans use when a goal goes in.',
  heroImage: '/images/score-a-goal-hero.png',

  vocabulary: [
    {
      word: 'SCORE',
      partOfSpeech: 'verb',
      definition: 'To put the ball in the goal.',
      example: 'Kai scored two goals in the second half.',
      imageSlug: '/images/score-verb.png',
    },
    {
      word: 'CELEBRATE',
      partOfSpeech: 'verb',
      definition: 'To show happiness after scoring a goal.',
      example: 'The players ran to celebrate with the fans.',
      imageSlug: '/images/celebrate.png',
    },
    {
      word: 'EQUALISE',
      partOfSpeech: 'verb',
      definition: 'To score a goal that makes the score level again.',
      example: 'They equalised in the 88th minute — it was one-all.',
      imageSlug: '/images/equalise.png',
    },
    {
      word: 'LEAD',
      partOfSpeech: 'noun / verb',
      definition: 'The advantage a winning team has. / To be winning.',
      example: 'We are in the lead — two-nil!',
      imageSlug: '/images/lead.png',
    },
    {
      word: 'ASSIST',
      partOfSpeech: 'noun',
      definition: 'A pass or action that directly helps another player score.',
      example: 'Sofia got an assist when her cross led to Kai\'s goal.',
      imageSlug: '/images/assist.png',
    },
    {
      word: 'NET',
      partOfSpeech: 'verb',
      definition: 'To score a goal — to put the ball in the net.',
      example: 'She netted twice in the second half.',
      imageSlug: '/images/net-verb.png',
    },
    {
      word: 'HAT-TRICK',
      partOfSpeech: 'noun',
      definition: 'Three goals scored by the same player in one match.',
      example: 'Kai scored a hat-trick — three goals in one match!',
      imageSlug: '/images/hat-trick.png',
    },
    {
      word: 'COMEBACK',
      partOfSpeech: 'noun',
      definition: 'When a team is losing but then wins or draws.',
      example: 'What a comeback! They were two-nil down but won three-two.',
      imageSlug: '/images/comeback.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'HE SCORED! / SHE SCORED!',
      definition: 'Said when a player puts the ball in the goal.',
      example: 'He scored! The crowd went crazy!',
      imageSlug: '/images/he-scored.png',
    },
    {
      phrase: 'WHAT A GOAL!',
      definition: 'An exclamation used when a goal is amazing or impressive.',
      example: 'What a goal! Did you see that volley?',
      imageSlug: '/images/what-a-goal.png',
    },
    {
      phrase: 'GET IN!',
      definition: 'An informal exclamation of joy used when your team scores.',
      example: 'Get in! We needed that goal so much!',
      imageSlug: '/images/get-in.png',
    },
    {
      phrase: 'COME ON!',
      definition: 'Used to encourage your team or show excitement.',
      example: 'Come on! We can still win this!',
      imageSlug: '/images/come-on.png',
    },
    {
      phrase: 'UNBELIEVABLE!',
      definition: 'Said when something amazing or shocking happens.',
      example: 'Unbelievable! He scored from forty metres!',
      imageSlug: '/images/unbelievable.png',
    },
    {
      phrase: 'TAKE THE LEAD',
      definition: 'To score a goal that puts your team in front for the first time.',
      example: 'Kai scored to take the lead in the 30th minute.',
      imageSlug: '/images/take-the-lead.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Kai, this match is so exciting. We need a goal so badly!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'I know. If I [[score:to put the ball in the goal]] now, we take the lead.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Look — the winger is crossing the ball into the box!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'I\'m running for it — yes! It\'s in the net! [[Celebrate:to show happiness after scoring]]!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'GET IN! [[What a goal:an exclamation used when a goal is amazing]]! You [[netted:scored — put the ball in the net]] it with your head!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'We are in the [[lead:the advantage a winning team has]]! One-nil!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Oh no — they just scored. They [[equalised:scored to make the score level again]]!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Come on! We can still win. Don\'t give up!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Kai scored again! And again! Three goals — that\'s a [[hat-trick:three goals scored by the same player in one match]]!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Unbelievable! And each goal had a great [[assist:a pass that directly helps another player score]] from my teammates.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'We were one-nil down and now we win three-one. What a [[comeback:when a team is losing but then wins or draws]]!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'This is one of the best days of my life. I\'ll never forget this hat-trick!',
    },
  ],

  matchingExercise: [
    { word: 'SCORE', definition: 'To put the ball in the goal' },
    { word: 'CELEBRATE', definition: 'To show happiness after scoring' },
    { word: 'EQUALISE', definition: 'To score a goal that makes the score level again' },
    { word: 'LEAD', definition: 'The advantage a winning team has' },
    { word: 'ASSIST', definition: 'A pass that directly helps another player score' },
    { word: 'NET', definition: 'To score — to put the ball in the net' },
    { word: 'HAT-TRICK', definition: 'Three goals by the same player in one match' },
    { word: 'COMEBACK', definition: 'When a team is losing but then wins or draws' },
  ],

  fillBlankExercise: [
    { before: 'Kai ran in and', after: 'from close range.', answer: 'scored' },
    { before: 'The players ran to', after: 'with the fans in the corner.', answer: 'celebrate' },
    { before: 'They were one-nil down but', answer: 'equalised', after: 'in the 80th minute.' },
    { before: 'We are in the', after: '— two goals to one!', answer: 'lead' },
    { before: 'The cross from the winger was a great', after: 'for Kai\'s goal.', answer: 'assist' },
    { before: 'She', after: 'twice in the second half — a brilliant performance.', answer: 'netted' },
    { before: 'Kai scored three goals — his first', answer: 'hat-trick', after: 'of the season!' },
    { before: 'They were losing three-nil but won four-three. What a', after: '!', answer: 'comeback' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Kai say if he scores the next goal?',
      options: ['They will draw', 'They will take the lead', 'They will equalise'],
      correctIndex: 1,
    },
    {
      question: 'What does Sofia shout when Kai scores?',
      options: ['Unbelievable! Come on!', 'Get in! What a goal!', 'Hat-trick! Comeback!'],
      correctIndex: 1,
    },
    {
      question: 'How did Kai score the goal?',
      options: ['With a volley', 'With his left foot', 'With his head'],
      correctIndex: 2,
    },
    {
      question: 'What happens after the other team scores?',
      options: ['Kai\'s team is still in the lead', 'The match ends', 'The score is level — they equalised'],
      correctIndex: 2,
    },
    {
      question: 'What is a hat-trick?',
      options: ['Three assists in one match', 'Three goals by the same player in one match', 'Three matches without losing'],
      correctIndex: 1,
    },
    {
      question: 'What does "assist" mean?',
      options: ['A save by the goalkeeper', 'A tackle by a defender', 'A pass that directly helps another player score'],
      correctIndex: 2,
    },
    {
      question: 'Why does Sofia call it a comeback?',
      options: ['Because the team played badly', 'Because the team was losing and then won', 'Because Kai came back onto the pitch'],
      correctIndex: 1,
    },
    {
      question: 'What does Kai say about his hat-trick at the end?',
      options: ['He wants to score more next match', 'He will never forget it', 'He thinks his teammates were better'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct exclamation or goal word for each sentence.',
    items: [
      {
        sentence: 'The ball goes into the net. You shout: "_____!"',
        options: ['Get in', 'Drop back', 'Hold your position'],
        correctIndex: 0,
        explanation: '"Get in!" is correct. This is one of the most common exclamations when your team scores a goal. It shows pure joy and excitement.',
      },
      {
        sentence: 'Your team was losing 2–0 but now wins 3–2. You say: "What a _____!"',
        options: ['hat-trick', 'comeback', 'lead'],
        correctIndex: 1,
        explanation: '"Comeback" is correct. A comeback is when a team is losing but then wins or draws. Coming back from 2–0 down to win 3–2 is an amazing comeback.',
      },
      {
        sentence: 'The score was 1–0 and the other team scored. Now it is 1–1. They have _____.',
        options: ['scored a hat-trick', 'taken the lead', 'equalised'],
        correctIndex: 2,
        explanation: '"Equalised" is correct. To equalise means to score and make the score level again. After being behind, the team has drawn level at 1–1.',
      },
      {
        sentence: 'Kai scores a beautiful goal from 30 metres. You shout: "_____ a goal!"',
        options: ['What', 'Come', 'Get'],
        correctIndex: 0,
        explanation: '"What" is correct — the full phrase is "What a goal!" This is used when a goal is special, beautiful, or very impressive.',
      },
      {
        sentence: 'One player scores three goals in the same match. They have scored a _____.',
        options: ['comeback', 'assist', 'hat-trick'],
        correctIndex: 2,
        explanation: '"Hat-trick" is correct. A hat-trick is when one player scores three goals in a single match. It is a very special achievement in football.',
      },
      {
        sentence: 'Your team needs a goal. You shout: "_____ on! We can do this!"',
        options: ['Come', 'Get', 'Take'],
        correctIndex: 0,
        explanation: '"Come" is correct — the full phrase is "Come on!" This is used to encourage your team. You say it to motivate the players and show your support.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read the situation, then choose the best English reaction — A, B, or C.',
      items: [
        {
          customerLine: 'Kai scores a brilliant goal from outside the box in the 90th minute to win the match!',
          options: [
            '"Oh well, it\'s only one goal."',
            '"What a goal! Get in! Unbelievable!"',
            '"Hold your position — the match is not over."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A last-minute winning goal calls for maximum excitement! "What a goal!", "Get in!", and "Unbelievable!" are all natural English exclamations of joy. Use all of them!',
        },
        {
          customerLine: 'Your team was winning 2–0 but the other team just scored to make it 2–1. What do you say?',
          options: [
            '"Come on! Hold on! We can still win!"',
            '"Get in! What a goal for us!"',
            '"That\'s a hat-trick!"',
          ],
          correctIndex: 0,
          explanation: 'A is correct. When the other team scores and brings the game closer, you encourage your team: "Come on!" means don\'t give up. "Hold on!" means stay strong and protect the lead.',
        },
        {
          customerLine: 'Your friend just made a great pass that led directly to a goal. What do you say?',
          options: [
            '"That was a great assist!"',
            '"Unbelievable equaliser!"',
            '"You scored a hat-trick!"',
          ],
          correctIndex: 0,
          explanation: 'A is correct. When a player makes a pass that directly leads to a goal, we say they got an "assist". This is the correct football term for this situation.',
        },
        {
          customerLine: 'Your team was 3–0 down and they just scored 3 goals to make it 3–3!',
          options: [
            '"What a lead!"',
            '"They have equalised."',
            '"What a comeback! They came back from three-nil to draw three-all! Unbelievable!"',
          ],
          correctIndex: 2,
          explanation: 'C is correct. Coming back from 3–0 down to draw 3–3 is an incredible comeback. C uses the correct vocabulary ("comeback", "three-nil", "draw three-all") and shows real excitement.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong goal vocabulary words in this conversation. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Kai! You scored three goals — that\'s an assist!' },
        { speaker: 'Kai', text: 'It is, isn\'t it! My first hat-trick of the season.' },
        { speaker: 'Sofia', text: 'And the pass from the winger for your second goal — what a comeback!' },
        { speaker: 'Kai', text: 'Yes, that was a perfect assist. I just had to score.' },
        { speaker: 'Sofia', text: 'We were losing two-nil and now we lead three-two. What a equalise!' },
        { speaker: 'Kai', text: 'What a comeback! I can\'t believe we won from two goals down.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'that\'s an assist',
          correction: 'that\'s a hat-trick',
          explanation: 'Three goals by one player in a match is a HAT-TRICK, not an assist. An assist is a pass that leads to someone else\'s goal.',
        },
        {
          lineIndex: 2,
          incorrectText: 'what a comeback',
          correction: 'what an assist',
          explanation: 'A pass that helps another player score is an ASSIST. A comeback is when a losing team wins or draws. The winger\'s pass was an assist, not a comeback.',
        },
        {
          lineIndex: 4,
          incorrectText: 'What a equalise',
          correction: 'What a comeback',
          explanation: '"Equalise" is a verb (e.g. "they equalised"), not a noun used in "What a ___". The correct exclamation is "What a COMEBACK!" because the team was losing and then won.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using goal vocabulary and exclamations from this lesson.',
      items: [
        {
          customerLine: 'Sofia: Kai, you just scored three goals! Is that a hat-trick?',
          salespersonStart: 'Kai: Yes! A hat-trick is when one player scores',
          suggestedCompletion: 'three goals in the same match. It is very special and quite difficult to do. This is my first one and I can\'t believe it!',
        },
        {
          customerLine: 'Sofia: What is the difference between a goal and an assist?',
          salespersonStart: 'Kai: A goal is when you score.',
          suggestedCompletion: 'An assist is when you make the pass or action that helps your teammate score. Both are important. Sometimes the assist is harder than the goal itself!',
        },
        {
          customerLine: 'Sofia: How do English fans react when their team scores?',
          salespersonStart: 'Kai: They shout things like "Get in!" and "What a goal!"',
          suggestedCompletion: '"Come on!" is also very common — it means keep going or we can do this. And if something amazing happens, they say "Unbelievable!" Fans are very loud in English football!',
        },
        {
          customerLine: 'Sofia: We were losing two-nil and we won three-two. What do we call that?',
          salespersonStart: 'Kai: That is called a comeback!',
          suggestedCompletion: 'A comeback is when a team is behind in the score but then wins or draws. Coming back from two-nil down to win three-two is a great comeback. The fans love it.',
        },
      ],
    },
  },
};

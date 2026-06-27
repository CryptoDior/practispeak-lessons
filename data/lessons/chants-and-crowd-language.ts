import { Lesson } from '@/types/lesson';

export const chantsAndCrowdLanguage: Lesson = {
  slug: 'chants-and-crowd-language',
  title: 'Chants and Crowd Language',
  subtitle: 'What fans shout and sing at a football match',
  level: 'A1-A2',
  description: 'Learn the basic words and phrases fans use at a football match — chant, shout, cheer, boo, sing, crowd, atmosphere — and understand the most common things you will hear in a football stadium.',
  heroImage: '/images/chants-and-crowd-language-hero.png',

  vocabulary: [
    {
      word: 'CHANT',
      partOfSpeech: 'noun / verb',
      definition: 'A short phrase fans repeat loudly together, often in rhythm.',
      example: 'The fans sang a chant for their team\'s top scorer.',
      imageSlug: '/images/chant.png',
    },
    {
      word: 'SHOUT',
      partOfSpeech: 'verb',
      definition: 'To say something very loudly.',
      example: 'The fans shouted "Come on!" every time their team attacked.',
      imageSlug: '/images/shout.png',
    },
    {
      word: 'CHEER',
      partOfSpeech: 'verb',
      definition: 'To shout in support and excitement, especially when something good happens.',
      example: 'The crowd cheered loudly when the goal went in.',
      imageSlug: '/images/cheer.png',
    },
    {
      word: 'BOO',
      partOfSpeech: 'verb',
      definition: 'To shout "boo!" to show you are unhappy with something.',
      example: 'The fans booed when the referee gave a yellow card against their team.',
      imageSlug: '/images/boo.png',
    },
    {
      word: 'SING',
      partOfSpeech: 'verb',
      definition: 'To make music with your voice — fans often sing chants together.',
      example: 'Thousands of fans were singing together in the home stand.',
      imageSlug: '/images/sing.png',
    },
    {
      word: 'CROWD',
      partOfSpeech: 'noun',
      definition: 'All the fans in the stadium watching the match together.',
      example: 'The crowd was incredibly loud from the first minute.',
      imageSlug: '/images/crowd.png',
    },
    {
      word: 'ATMOSPHERE',
      partOfSpeech: 'noun',
      definition: 'The feeling or energy created by the crowd in the stadium.',
      example: 'The atmosphere was electric — you could feel the excitement.',
      imageSlug: '/images/atmosphere.png',
    },
    {
      word: 'OLE',
      partOfSpeech: 'exclamation',
      definition: 'A word fans shout to celebrate each touch of the ball by their team.',
      example: 'The crowd shouted "Olé! Olé! Olé!" as the team passed the ball around.',
      imageSlug: '/images/ole.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'COME ON!',
      definition: 'A shout to encourage the team to try harder or score a goal.',
      example: 'Come on! We need a goal — come on!',
      imageSlug: '/images/come-on.png',
    },
    {
      phrase: 'GET IN!',
      definition: 'An exclamation fans shout when their team scores a goal.',
      example: 'Get in! Three-nil! What a result!',
      imageSlug: '/images/get-in.png',
    },
    {
      phrase: 'OFF! OFF! OFF!',
      definition: 'A chant fans use when they want a player or the referee to be sent off.',
      example: 'After the bad tackle, the fans shouted "Off! Off! Off!"',
      imageSlug: '/images/off.png',
    },
    {
      phrase: 'OOH!',
      definition: 'A sound fans make when their team almost scores but misses.',
      example: 'Ooh! The shot hit the post — so close!',
      imageSlug: '/images/ooh.png',
    },
    {
      phrase: 'WHAT A GOAL!',
      definition: 'A common exclamation after a spectacular goal.',
      example: 'What a goal! From thirty metres — unbelievable!',
      imageSlug: '/images/what-a-goal.png',
    },
    {
      phrase: 'WE\'RE GOING TO WIN!',
      definition: 'A chant fans sing to support their team and show confidence.',
      example: 'The home fans were singing "We\'re going to win!" from the first minute.',
      imageSlug: '/images/were-going-to-win.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Ronaldo, I can hear everyone singing together. What is that called?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'That is a [[chant:a short phrase fans repeat loudly together in rhythm]]. The fans repeat the same words over and over.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I love it! The whole [[crowd:all the fans in the stadium]] is singing together. The [[atmosphere:the feeling or energy created by the crowd]] is incredible!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Full stadium, great match — the atmosphere is always electric on nights like this.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What does everyone [[shout:to say something very loudly]] when the team attacks?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: '"Come on!" — it\'s the most common thing you\'ll hear. Fans say it to encourage the team to score.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And when the ball almost goes in but misses?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Everyone goes "Ooh!" — a big sound of disappointment. Then if it goes in, everyone [[cheers:shouts in support and excitement]] — "Get in!"',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And what about when fans are unhappy? I heard people [[booing:shouting to show unhappiness]] earlier.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Yes — fans boo when they disagree with the referee or when the team is playing badly. It\'s the opposite of cheering.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I can hear them [[singing:making music with your voice]] "Olé! Olé!" now. What does that mean?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'They shout "Olé!" for every touch of the ball when the team is doing well. It celebrates good passing. Now join in — "Come on! Come on!"',
    },
  ],

  matchingExercise: [
    { word: 'CHANT', definition: 'A short phrase fans repeat loudly together in rhythm' },
    { word: 'SHOUT', definition: 'To say something very loudly' },
    { word: 'CHEER', definition: 'To shout in support and excitement when something good happens' },
    { word: 'BOO', definition: 'To shout to show you are unhappy with something' },
    { word: 'SING', definition: 'To make music with your voice' },
    { word: 'CROWD', definition: 'All the fans in the stadium watching together' },
    { word: 'ATMOSPHERE', definition: 'The feeling or energy created by the crowd in the stadium' },
    { word: 'OLE', definition: 'A word fans shout to celebrate each touch of the ball' },
  ],

  fillBlankExercise: [
    { before: 'Thousands of fans were singing a', after: 'together in the home stand.', answer: 'chant' },
    { before: '"Come on!" — the fans', after: 'to encourage the team.', answer: 'shouted' },
    { before: 'The crowd', answer: 'cheered', after: 'when the ball hit the back of the net.' },
    { before: 'The fans', after: 'when the referee gave a bad decision.', answer: 'booed' },
    { before: 'Everyone was', after: '"We\'re going to win!" in the north stand.', answer: 'singing' },
    { before: 'The', answer: 'crowd', after: 'was so loud — fifty thousand fans all singing together.' },
    { before: 'The', after: 'was electric — you could feel the energy everywhere.', answer: 'atmosphere' },
    { before: '"', after: '! Olé! Olé!" — the fans celebrated every touch of the ball.', answer: 'Olé' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a chant?',
      options: ['A goal celebration', 'A short phrase fans repeat loudly together in rhythm', 'A song the referee sings'],
      correctIndex: 1,
    },
    {
      question: 'What do fans shout to encourage the team to score?',
      options: ['Boo!', 'Olé!', 'Come on!'],
      correctIndex: 2,
    },
    {
      question: 'What sound do fans make when their team almost scores but misses?',
      options: ['Olé!', 'Ooh!', 'Get in!'],
      correctIndex: 1,
    },
    {
      question: 'What do fans shout when their team scores?',
      options: ['Boo!', 'Ooh!', 'Get in!'],
      correctIndex: 2,
    },
    {
      question: 'When do fans boo?',
      options: ['When the team scores', 'When they disagree with the referee or the team plays badly', 'When the national anthem plays'],
      correctIndex: 1,
    },
    {
      question: 'What is the "atmosphere" in a football stadium?',
      options: ['The weather outside the stadium', 'The feeling or energy created by the crowd', 'The chant the fans are singing'],
      correctIndex: 1,
    },
    {
      question: 'When do fans shout "Olé!"?',
      options: ['When the team scores a goal', 'When the referee gives a red card', 'For every touch of the ball when the team is playing well'],
      correctIndex: 2,
    },
    {
      question: 'What is the opposite of cheering?',
      options: ['Singing', 'Booing', 'Chanting'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct crowd language word to complete each sentence.',
    items: [
      {
        sentence: 'The home fans sang a _____ for their top scorer — "He scores when he wants!"',
        options: ['boo', 'chant', 'formation'],
        correctIndex: 1,
        explanation: '"Chant" is correct. A chant is a short, repeated phrase that fans sing together in rhythm. Many chants are written specifically for a player or the team. They help create the atmosphere in the stadium.',
      },
      {
        sentence: 'The whole stadium _____ when the ball hit the back of the net!',
        options: ['booed', 'cheered', 'sat down'],
        correctIndex: 1,
        explanation: '"Cheered" is correct. To cheer means to shout in excitement and support, especially when something good happens. Scoring a goal is the biggest moment — the crowd always cheers.',
      },
      {
        sentence: 'The fans _____ when the referee gave a penalty against their team.',
        options: ['cheered', 'sang', 'booed'],
        correctIndex: 2,
        explanation: '"Booed" is correct. To boo means to make a disapproving sound to show you are unhappy. Fans boo bad decisions by the referee, poor performances, or opponents they don\'t like.',
      },
      {
        sentence: 'The _____ was electric — fifty thousand fans singing as one.',
        options: ['chant', 'atmosphere', 'shout'],
        correctIndex: 1,
        explanation: '"Atmosphere" is correct. The atmosphere describes the energy and feeling inside the stadium. "Electric atmosphere" is a very common phrase in football — it means the excitement is very high.',
      },
      {
        sentence: 'The shot hit the post — the crowd went "_____ !"',
        options: ['Get in', 'Ooh', 'Come on'],
        correctIndex: 1,
        explanation: '"Ooh" is correct. "Ooh!" is the sound of disappointment when a team almost scores but misses. It happens automatically — the crowd all makes the same sound at the same moment.',
      },
      {
        sentence: '"_____ ! We need a goal — _____ !" the fans shouted.',
        options: ['Boo', 'Come on', 'Olé'],
        correctIndex: 1,
        explanation: '"Come on" is correct. "Come on!" is the most universal football chant — fans shout it to encourage their team to attack and score. It is used in stadiums all over the world.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Someone asks about crowd language. Choose the best response — A, B, or C.',
      items: [
        {
          customerLine: 'Friend: What does "Come on!" mean when fans shout it?',
          options: [
            'You: It means the fans are unhappy with the referee.',
            'You: It\'s an encouragement — fans shout it to push their team forward and score.',
            'You: It means the match is nearly finished.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Come on!" is the most common shout of encouragement in English football. Fans say it to push the team forward — especially when they need a goal. It has nothing to do with the referee or time.',
        },
        {
          customerLine: 'Friend: Why are some fans booing?',
          options: [
            'You: They are booing because their team just scored.',
            'You: They are probably unhappy with a referee decision or their team is playing badly.',
            'You: They are joining in with the "Olé!" chant.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Booing is a negative reaction. Fans boo when they are unhappy — a bad decision by the referee, a poor performance, or when the opposing team is time-wasting are all common reasons.',
        },
        {
          customerLine: 'Friend: What does "atmosphere" mean in football?',
          options: [
            'You: The weather conditions on match day.',
            'You: The feeling or energy inside the stadium created by the fans.',
            'You: The formation the team is using.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The atmosphere in football refers to the energy and emotion generated by the fans. A loud, full stadium creates a great atmosphere. An empty or quiet stadium has a poor atmosphere.',
        },
        {
          customerLine: 'Friend: When do fans shout "Olé!"?',
          options: [
            'You: When the team scores a goal.',
            'You: When the referee blows the final whistle.',
            'You: For every successful touch or pass when the team is in complete control of the ball.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. Fans chant "Olé!" for each touch of the ball when their team is passing well and keeping possession. Each "Olé!" matches one touch — it celebrates the team\'s skill and dominance.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong crowd language words in this conversation. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Ronaldo, everyone is singing. What is this called?' },
        { speaker: 'Ronaldo', text: 'It\'s a chant — a short phrase everyone repeats together.' },
        { speaker: 'Sofia', text: 'The whole crowd is cheering. The formation is incredible!' },
        { speaker: 'Ronaldo', text: 'Yes, the atmosphere is electric tonight!' },
        { speaker: 'Sofia', text: 'The shot nearly went in! Why did everyone shout "Olé"?' },
        { speaker: 'Ronaldo', text: 'That sound is "Ooh!" — it means fans are disappointed. And now they\'re booing because the team scored — they love it!' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'The formation is incredible!',
          correction: 'The atmosphere is incredible!',
          explanation: 'ATMOSPHERE is the correct word here. The atmosphere is the feeling or energy created by the crowd. A formation is how the players are organised on the pitch — not related to crowd noise.',
        },
        {
          lineIndex: 4,
          incorrectText: 'Why did everyone shout "Olé"?',
          correction: 'Why did everyone shout "Ooh"?',
          explanation: '"Ooh!" is the sound when a team nearly scores but misses. "Olé!" is shouted for each successful touch when the team is passing well. A near-miss gets "Ooh!" not "Olé!".',
        },
        {
          lineIndex: 5,
          incorrectText: 'booing because the team scored',
          correction: 'cheering because the team scored',
          explanation: 'Fans CHEER when their team scores — they shout in excitement and celebration. Booing is a negative reaction used when fans are unhappy. Scoring a goal always gets cheers, never boos.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using crowd language from this lesson.',
      items: [
        {
          customerLine: 'Sofia: Why do all the fans shout the same thing at the same time?',
          salespersonStart: 'Ronaldo: Because they are all singing the same chant.',
          suggestedCompletion: 'The fans learn the chants together and repeat them in rhythm. Chanting together makes the crowd feel like one big group and creates an amazing atmosphere. The louder the chant, the more it motivates the players on the pitch.',
        },
        {
          customerLine: 'Sofia: What is the difference between cheering and booing?',
          salespersonStart: 'Ronaldo: Cheering is positive and booing is negative.',
          suggestedCompletion: 'Fans cheer when something good happens — like a goal, a great save, or a good decision by the referee. Fans boo when they are unhappy — a bad tackle, a wrong decision, or a poor performance from their team. The sounds are completely different.',
        },
        {
          customerLine: 'Sofia: What makes a good atmosphere in a stadium?',
          salespersonStart: 'Ronaldo: A full stadium of passionate fans.',
          suggestedCompletion: 'When the stands are full and the fans are singing and chanting, the atmosphere is electric. A close match also helps — when both teams can win, the excitement builds and the noise gets louder. A great atmosphere can push the home team to play better.',
        },
        {
          customerLine: 'Sofia: I want to join in with the crowd. What should I shout?',
          salespersonStart: 'Ronaldo: The easiest thing is "Come on!"',
          suggestedCompletion: 'Shout "Come on!" when the team is attacking and needs a goal. When your team scores, shout "Get in!" or "Yes!" When a shot misses, say "Ooh!" with the crowd. And when the team is passing well, join the "Olé!" chant. You\'ll fit in perfectly!',
        },
      ],
    },
  },
};

import { Lesson } from '@/types/lesson';

export const theKit: Lesson = {
  slug: 'the-kit',
  title: 'The Kit',
  subtitle: 'Name everything a player wears',
  level: 'A1-A2',
  description: 'Learn the words for football clothing and equipment — shirt, shorts, boots, shin pads, gloves, bib, socks, and kit — and the phrases players use when getting ready to play.',
  heroImage: '/images/the-kit-hero.png',

  vocabulary: [
    {
      word: 'SHIRT',
      partOfSpeech: 'noun',
      definition: 'The top that a player wears in a match.',
      example: 'The team wears a blue shirt with white numbers.',
      imageSlug: '/images/shirt.png',
    },
    {
      word: 'SHORTS',
      partOfSpeech: 'noun',
      definition: 'Short trousers worn during a match.',
      example: 'He pulled up his shorts and got ready to play.',
      imageSlug: '/images/shorts.png',
    },
    {
      word: 'BOOTS',
      partOfSpeech: 'noun',
      definition: 'Special shoes with studs on the bottom, worn to play football.',
      example: 'New boots can help you run faster on the grass.',
      imageSlug: '/images/boots.png',
    },
    {
      word: 'SHIN PADS',
      partOfSpeech: 'noun',
      definition: 'Protective pads worn on the front of the lower leg.',
      example: 'Always wear shin pads — they protect your legs from tackles.',
      imageSlug: '/images/shin-pads.png',
    },
    {
      word: 'GLOVES',
      partOfSpeech: 'noun',
      definition: 'Hand covers worn by the goalkeeper.',
      example: 'The goalkeeper put on her gloves before the match.',
      imageSlug: '/images/gloves.png',
    },
    {
      word: 'BIB',
      partOfSpeech: 'noun',
      definition: 'A coloured vest worn over the shirt during training.',
      example: 'The substitutes wore a yellow bib on the bench.',
      imageSlug: '/images/bib.png',
    },
    {
      word: 'SOCKS',
      partOfSpeech: 'noun',
      definition: 'Long socks pulled up over the shin pads.',
      example: 'Pull your socks up over your shin pads before you go on.',
      imageSlug: '/images/socks.png',
    },
    {
      word: 'KIT',
      partOfSpeech: 'noun',
      definition: 'The full set of clothing a player wears — shirt, shorts, socks, and boots.',
      example: 'The team\'s kit is red and white.',
      imageSlug: '/images/kit.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PUT ON YOUR KIT',
      definition: 'To get dressed in your football clothing.',
      example: 'Put on your kit — training starts in ten minutes.',
      imageSlug: '/images/put-on-your-kit.png',
    },
    {
      phrase: 'LACE UP YOUR BOOTS',
      definition: 'To tie the laces of your football boots.',
      example: 'Lace up your boots before the warm-up starts.',
      imageSlug: '/images/lace-up-your-boots.png',
    },
    {
      phrase: 'PULL UP YOUR SOCKS',
      definition: 'To pull your long socks up over your shin pads.',
      example: 'Pull up your socks — the referee is waiting.',
      imageSlug: '/images/pull-up-your-socks.png',
    },
    {
      phrase: 'CHANGE YOUR SHIRT',
      definition: 'To swap your shirt, often with an opponent after a match.',
      example: 'The two captains changed their shirts after the final whistle.',
      imageSlug: '/images/change-your-shirt.png',
    },
    {
      phrase: 'HOME KIT',
      definition: 'The set of clothes a team wears for matches at their own ground.',
      example: 'Today we wear the home kit — red shirts and white shorts.',
      imageSlug: '/images/home-kit.png',
    },
    {
      phrase: 'AWAY KIT',
      definition: 'The set of clothes a team wears when playing at another ground.',
      example: 'We wear the away kit when our colours clash with the other team.',
      imageSlug: '/images/away-kit.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Right, everyone! Put on your [[kit:the full set of clothing a player wears]] — we start in five minutes.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Coach, do we wear the home kit or the away kit today?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Home kit. Blue [[shirt:the top that a player wears in a match]] and white shorts. Let\'s go.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'OK, I\'m nearly ready. I just need to put on my [[shin pads:protective pads worn on the front of the lower leg]].',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. Never forget your shin pads. And pull up your [[socks:long socks pulled up over the shin pads]] over them.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Done. I just need to lace up my [[boots:special shoes with studs on the bottom]].',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Be quick. Sofia, are the substitutes ready with their [[bibs:coloured vests worn over the shirt in training]]?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Yes, Coach. They all have their yellow bibs.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. And where are the goalkeeper\'s [[gloves:hand covers worn by the goalkeeper]]?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'She has them. She is already warming up.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Coach, I love this kit. The blue and white looks great!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'A good kit gives you confidence. Now stop talking and get on the pitch!',
    },
  ],

  matchingExercise: [
    { word: 'SHIRT', definition: 'The top that a player wears in a match' },
    { word: 'SHORTS', definition: 'Short trousers worn during a match' },
    { word: 'BOOTS', definition: 'Special shoes with studs on the bottom' },
    { word: 'SHIN PADS', definition: 'Protective pads worn on the front of the lower leg' },
    { word: 'GLOVES', definition: 'Hand covers worn by the goalkeeper' },
    { word: 'BIB', definition: 'A coloured vest worn over the shirt during training' },
    { word: 'SOCKS', definition: 'Long socks pulled up over the shin pads' },
    { word: 'KIT', definition: 'The full set of clothing a player wears' },
  ],

  fillBlankExercise: [
    { before: 'The team wears a blue', after: 'with the number on the back.', answer: 'shirt' },
    { before: 'He put on his', after: 'and ran onto the pitch.', answer: 'shorts' },
    { before: 'Lace up your', after: 'before the warm-up starts.', answer: 'boots' },
    { before: 'Always wear your', answer: 'shin pads', after: '— they protect your legs.' },
    { before: 'The goalkeeper wore her', after: 'to catch the ball.', answer: 'gloves' },
    { before: 'The substitutes wore a yellow', after: 'on the bench.', answer: 'bib' },
    { before: 'Pull up your', after: 'over your shin pads.', answer: 'socks' },
    { before: 'The team\'s', after: 'is red and white — very smart.', answer: 'kit' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What kit does Coach Diallo say the team will wear?',
      options: ['The away kit — white shirts', 'The home kit — blue shirts and white shorts', 'A training bib'],
      correctIndex: 1,
    },
    {
      question: 'What does Coach Diallo say about shin pads?',
      options: ['Only the goalkeeper needs them', 'Never forget them', 'They are optional'],
      correctIndex: 1,
    },
    {
      question: 'What does Ronaldo need to do after putting on his shin pads?',
      options: ['Put on his gloves', 'Pull up his socks and lace up his boots', 'Change his shirt'],
      correctIndex: 1,
    },
    {
      question: 'What are the substitutes wearing?',
      options: ['The away kit', 'Red bibs', 'Yellow bibs'],
      correctIndex: 2,
    },
    {
      question: 'Where is the goalkeeper?',
      options: ['She is sitting on the bench', 'She is already warming up', 'She is talking to the referee'],
      correctIndex: 1,
    },
    {
      question: 'What does Coach Diallo say a good kit gives you?',
      options: ['Better speed', 'Confidence', 'More goals'],
      correctIndex: 1,
    },
    {
      question: 'What does the goalkeeper wear on her hands?',
      options: ['Shin pads', 'Bibs', 'Gloves'],
      correctIndex: 2,
    },
    {
      question: 'What does Coach Diallo tell Ronaldo to do at the end?',
      options: ['Go and lace up his boots', 'Stop talking and get on the pitch', 'Change to the away kit'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct word to complete each sentence about the kit.',
    items: [
      {
        sentence: 'The goalkeeper wears _____ on her hands to catch the ball.',
        options: ['shin pads', 'gloves', 'bibs'],
        correctIndex: 1,
        explanation: '"Gloves" is correct. The goalkeeper wears gloves to grip the ball and protect their hands. Only the goalkeeper wears gloves in a football match.',
      },
      {
        sentence: 'Always wear your _____ to protect your legs from tackles.',
        options: ['socks', 'shirt', 'shin pads'],
        correctIndex: 2,
        explanation: '"Shin pads" is correct. Shin pads go on the front of your lower leg and protect you when another player kicks or tackles you.',
      },
      {
        sentence: 'Put your long _____ over your shin pads.',
        options: ['boots', 'socks', 'shorts'],
        correctIndex: 1,
        explanation: '"Socks" is correct. Football socks are long and you pull them up over your shin pads to keep the pads in place.',
      },
      {
        sentence: 'The substitutes wore a yellow _____ over their shirts during training.',
        options: ['kit', 'bib', 'shirt'],
        correctIndex: 1,
        explanation: '"Bib" is correct. A bib is a coloured vest that goes over the shirt. It helps coaches quickly see which players are in which group during training.',
      },
      {
        sentence: 'The shirt, shorts, socks, and boots together are called the _____.',
        options: ['kit', 'uniform', 'formation'],
        correctIndex: 0,
        explanation: '"Kit" is correct. In football, the full set of clothing — shirt, shorts, socks, and boots — is called the kit. Teams have a home kit and an away kit.',
      },
      {
        sentence: 'We wear the _____ kit when the other team has the same colours as our home kit.',
        options: ['home', 'away', 'training'],
        correctIndex: 1,
        explanation: '"Away" is correct. When teams play away from their own ground, or when the colours clash, they wear the away kit which is a different colour.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read the question, then choose the best answer — A, B, or C.',
      items: [
        {
          customerLine: 'Why do players wear shin pads?',
          options: [
            'To run faster on the grass.',
            'To protect their legs from tackles and kicks.',
            'To keep their socks up.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Shin pads protect the lower part of the leg from tackles and kicks. In football, there is a lot of contact with legs, so shin pads are essential.',
        },
        {
          customerLine: 'What is the difference between a home kit and an away kit?',
          options: [
            'The home kit is always blue and the away kit is always white.',
            'A home kit is for matches at your own ground. An away kit is worn when you play at another ground or when the colours clash.',
            'There is no difference — they look exactly the same.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The home kit is worn at the team\'s own stadium. The away kit is worn when travelling to another ground, especially when the colours are too similar.',
        },
        {
          customerLine: 'Why does the goalkeeper wear gloves?',
          options: [
            'Because goalkeepers get cold near the goal.',
            'To protect their hands and grip the ball when making saves.',
            'It is just a tradition — gloves do not help.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Goalkeepers wear gloves to grip the ball better and to protect their hands when they catch or punch hard shots.',
        },
        {
          customerLine: 'What does "lace up your boots" mean?',
          options: [
            'It means to put your boots back in your bag.',
            'It means to buy new boots.',
            'It means to tie the laces of your football boots before playing.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. "Lace up your boots" means to tie the laces so your boots stay on your feet while you play. Loose boots are dangerous.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong kit words in this dialogue. Find them as a group.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Right, everyone. Put on your kit — blue shirts and white boots.' },
        { speaker: 'Ronaldo', text: 'Coach, I have my shin pads on. Do I pull my gloves over them?' },
        { speaker: 'Coach Diallo', text: 'No — you pull your socks over your shin pads, Ronaldo.' },
        { speaker: 'Sofia', text: 'Coach, the goalkeeper is ready. She has her bib on her hands.' },
        { speaker: 'Coach Diallo', text: 'Good. And the substitutes have their yellow bibs?' },
        { speaker: 'Sofia', text: 'Yes, they do. And everyone has clean shirts and shorts.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'blue shirts and white boots',
          correction: 'blue shirts and white shorts',
          explanation: 'The kit includes a SHIRT and SHORTS — not boots. Boots are footwear and are separate from the kit colours.',
        },
        {
          lineIndex: 1,
          incorrectText: 'Do I pull my gloves over them',
          correction: 'Do I pull my socks over them',
          explanation: 'You pull your SOCKS over your shin pads, not gloves. Gloves are worn by the goalkeeper on their hands.',
        },
        {
          lineIndex: 3,
          incorrectText: 'She has her bib on her hands',
          correction: 'She has her gloves on her hands',
          explanation: 'The goalkeeper wears GLOVES on her hands, not a bib. A bib is a vest worn over the shirt by substitutes and training groups.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using words from this lesson. Compare your answers, then click to see one possible answer.',
      items: [
        {
          customerLine: 'Sofia: What does a player wear on match day?',
          salespersonStart: 'Ronaldo: On match day you wear the full kit.',
          suggestedCompletion: 'That means your shirt, shorts, and socks — all in the team colours. You also wear shin pads under your socks and lace up your boots.',
        },
        {
          customerLine: 'Sofia: Why do some players wear different colours in training?',
          salespersonStart: 'Ronaldo: Those players are wearing a bib.',
          suggestedCompletion: 'The coach uses bibs to split the team into groups. If you have a yellow bib, you are in one team. It makes it easy to see who is on which side.',
        },
        {
          customerLine: 'Sofia: When does the team wear the away kit?',
          salespersonStart: 'Ronaldo: We wear the away kit',
          suggestedCompletion: 'when we play at another team\'s ground, or when our home colours are too similar to the other team\'s colours. The referee tells us which kit to wear.',
        },
        {
          customerLine: 'Coach Diallo: Ronaldo, you are not ready. What are you missing?',
          salespersonStart: 'Ronaldo: I still need to put on my shin pads,',
          suggestedCompletion: 'pull up my socks, and lace up my boots. I\'ll be ready in two minutes, Coach — I promise!',
        },
      ],
    },
  },
};

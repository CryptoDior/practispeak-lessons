import { Lesson } from '@/types/lesson';

export const theStadium: Lesson = {
  slug: 'the-stadium',
  title: 'The Stadium',
  subtitle: 'Name the key parts of a football stadium',
  level: 'A1-A2',
  description: 'Learn the words for the key parts of a football stadium — stand, terrace, seat, scoreboard, floodlights, tunnel, stadium, and pitch — and how to talk about where things are.',
  heroImage: '/images/the-stadium-hero.png',

  vocabulary: [
    {
      word: 'STADIUM',
      partOfSpeech: 'noun',
      definition: 'The large building where football matches are played.',
      example: 'The stadium holds sixty thousand fans.',
      imageSlug: '/images/stadium.png',
    },
    {
      word: 'STAND',
      partOfSpeech: 'noun',
      definition: 'A section of the stadium where fans sit or stand to watch.',
      example: 'We sat in the north stand behind the goal.',
      imageSlug: '/images/stand.png',
    },
    {
      word: 'TERRACE',
      partOfSpeech: 'noun',
      definition: 'A section of the stadium where fans stand, not sit.',
      example: 'The away fans were loud on the terrace.',
      imageSlug: '/images/terrace.png',
    },
    {
      word: 'SEAT',
      partOfSpeech: 'noun',
      definition: 'The individual chair in the stadium where a fan sits.',
      example: 'My seat was right behind the goal — a great view.',
      imageSlug: '/images/seat.png',
    },
    {
      word: 'SCOREBOARD',
      partOfSpeech: 'noun',
      definition: 'The large board that shows the score and the time.',
      example: 'Everyone looked at the scoreboard — two-one!',
      imageSlug: '/images/scoreboard.png',
    },
    {
      word: 'FLOODLIGHTS',
      partOfSpeech: 'noun',
      definition: 'The very bright lights on tall poles that light up the pitch for evening matches.',
      example: 'The floodlights came on as the sun went down.',
      imageSlug: '/images/floodlights.png',
    },
    {
      word: 'TUNNEL',
      partOfSpeech: 'noun',
      definition: 'The passage the players walk through to get from the dressing room to the pitch.',
      example: 'The players walked out of the tunnel and onto the pitch.',
      imageSlug: '/images/tunnel.png',
    },
    {
      word: 'PITCH',
      partOfSpeech: 'noun',
      definition: 'The grass area in the middle of the stadium where the match is played.',
      example: 'The pitch was in perfect condition for the match.',
      imageSlug: '/images/stadium-pitch.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'IN THE STANDS',
      definition: 'In the seating areas of the stadium where fans watch.',
      example: 'Sofia was in the stands with thousands of other supporters.',
      imageSlug: '/images/in-the-stands.png',
    },
    {
      phrase: 'ON THE PITCH',
      definition: 'On the grass playing area in the stadium.',
      example: 'The players warmed up on the pitch before kick-off.',
      imageSlug: '/images/on-the-pitch-stadium.png',
    },
    {
      phrase: 'THROUGH THE TUNNEL',
      definition: 'Out of the tunnel and onto the pitch.',
      example: 'The crowd cheered as the players walked through the tunnel.',
      imageSlug: '/images/through-the-tunnel.png',
    },
    {
      phrase: 'ON THE SCOREBOARD',
      definition: 'Shown on the big board that displays the score.',
      example: 'The goal went up on the scoreboard — two-nil!',
      imageSlug: '/images/on-the-scoreboard.png',
    },
    {
      phrase: 'UNDER THE FLOODLIGHTS',
      definition: 'Playing in the evening with the big lights on.',
      example: 'There is nothing like a match under the floodlights.',
      imageSlug: '/images/under-the-floodlights.png',
    },
    {
      phrase: 'AT FULL CAPACITY',
      definition: 'When every seat in the stadium is taken.',
      example: 'The stadium was at full capacity — sixty thousand fans!',
      imageSlug: '/images/at-full-capacity.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Ronaldo, this is my first time inside a [[stadium:the large building where football matches are played]]. It\'s enormous!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I know! This one holds fifty thousand fans. Look at all the [[seats:individual chairs where fans sit]] — they\'re almost all full.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Where are we sitting?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'We\'re in the east [[stand:a section of the stadium where fans sit or stand]]. Row ten, right in the middle.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I can see the whole [[pitch:the grass area where the match is played]] from here!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Perfect view. And see those bright lights on the poles? Those are the [[floodlights:very bright lights that light up the pitch for evening matches]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The match is already two-nil — I can see it on the [[scoreboard:the large board that shows the score and time]]!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Yes! And look — the away fans are on that [[terrace:a section where fans stand, not sit]] over there. They are very loud!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Where do the players come from? I don\'t see them yet.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'They walk out of the [[tunnel:the passage from the dressing room to the pitch]] just before kick-off. Watch that gap near the corner flag.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Oh! There they are — coming through the tunnel now!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Listen to that crowd! Nothing beats a match under the floodlights with a full stadium.',
    },
  ],

  matchingExercise: [
    { word: 'STADIUM', definition: 'The large building where football matches are played' },
    { word: 'STAND', definition: 'A section of the stadium where fans sit or stand' },
    { word: 'TERRACE', definition: 'A section of the stadium where fans stand, not sit' },
    { word: 'SEAT', definition: 'The individual chair where a fan sits' },
    { word: 'SCOREBOARD', definition: 'The large board that shows the score and time' },
    { word: 'FLOODLIGHTS', definition: 'Bright lights on tall poles that light the pitch' },
    { word: 'TUNNEL', definition: 'The passage players walk through to get to the pitch' },
    { word: 'PITCH', definition: 'The grass area where the match is played' },
  ],

  fillBlankExercise: [
    { before: 'The', after: 'holds fifty thousand fans.', answer: 'stadium' },
    { before: 'We sat in the north', after: 'right behind the goal.', answer: 'stand' },
    { before: 'The away fans were singing loudly on the', answer: 'terrace', after: '.' },
    { before: 'My', after: 'had a perfect view of the whole pitch.', answer: 'seat' },
    { before: 'I looked at the', after: '— it said two-nil!', answer: 'scoreboard' },
    { before: 'The', after: 'came on as the evening match began.', answer: 'floodlights' },
    { before: 'The players walked through the', after: 'and onto the pitch.', answer: 'tunnel' },
    { before: 'The', after: 'was in perfect condition — no mud at all.', answer: 'pitch' },
  ],

  multipleChoiceExercise: [
    {
      question: 'How many fans does Ronaldo say the stadium holds?',
      options: ['Twenty thousand', 'Fifty thousand', 'One hundred thousand'],
      correctIndex: 1,
    },
    {
      question: 'Where are Ronaldo and Sofia sitting?',
      options: ['On the terrace', 'In the east stand, row ten', 'Behind the goal'],
      correctIndex: 1,
    },
    {
      question: 'What are the floodlights for?',
      options: ['To keep the players warm', 'To light up the pitch for evening matches', 'To show the score'],
      correctIndex: 1,
    },
    {
      question: 'Where do the away fans stand?',
      options: ['In the east stand', 'On the terrace', 'Behind the tunnel'],
      correctIndex: 1,
    },
    {
      question: 'How does Sofia find out the score is two-nil?',
      options: ['Ronaldo tells her', 'She hears the crowd', 'She looks at the scoreboard'],
      correctIndex: 2,
    },
    {
      question: 'Where do players come from before the match?',
      options: ['From the stands', 'Through the tunnel', 'From the terrace'],
      correctIndex: 1,
    },
    {
      question: 'What is the difference between a stand and a terrace?',
      options: ['There is no difference', 'A stand has seats; a terrace is where fans stand', 'A terrace is for home fans only'],
      correctIndex: 1,
    },
    {
      question: 'What does Ronaldo say is the best experience?',
      options: ['A day match with empty seats', 'A match under the floodlights with a full stadium', 'Watching from the terrace'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct stadium word to complete each sentence.',
    items: [
      {
        sentence: 'The players walk out of the _____ and onto the pitch before the match.',
        options: ['terrace', 'tunnel', 'scoreboard'],
        correctIndex: 1,
        explanation: '"Tunnel" is correct. The tunnel is the passage between the dressing room and the pitch. When the players appear at the end of the tunnel, the crowd cheers.',
      },
      {
        sentence: 'The score and time are shown on the _____.',
        options: ['floodlights', 'stand', 'scoreboard'],
        correctIndex: 2,
        explanation: '"Scoreboard" is correct. The scoreboard is the big electronic display in the stadium. It shows the score, the time, and sometimes the names of the goalscorers.',
      },
      {
        sentence: 'The evening match was played _____ the floodlights.',
        options: ['under', 'over', 'inside'],
        correctIndex: 0,
        explanation: '"Under" is correct. We say a match is played "under the floodlights" because the lights are above the pitch on tall poles. It is a classic football phrase.',
      },
      {
        sentence: 'Some fans prefer to _____ on the terrace instead of sitting in a seat.',
        options: ['run', 'stand', 'sleep'],
        correctIndex: 1,
        explanation: '"Stand" is correct. A terrace is a standing area. Some fans prefer to stand because they can move around and be more active in their support.',
      },
      {
        sentence: 'The stadium was at full _____ — every seat was taken.',
        options: ['time', 'capacity', 'pitch'],
        correctIndex: 1,
        explanation: '"Capacity" is correct. "At full capacity" means every seat in the stadium is occupied. A full stadium creates an amazing atmosphere.',
      },
      {
        sentence: 'The grass playing area inside the stadium is called the _____.',
        options: ['stand', 'terrace', 'pitch'],
        correctIndex: 2,
        explanation: '"Pitch" is correct. The pitch is the grass area in the middle of the stadium where the match takes place. A good pitch is flat and well-maintained.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read the question, then choose the best answer — A, B, or C.',
      items: [
        {
          customerLine: 'What is the difference between a stand and a terrace?',
          options: [
            'There is no difference — they are the same thing.',
            'A stand has seats where fans sit. A terrace is a standing area where fans stand.',
            'A stand is for away fans. A terrace is for home fans.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A stand is a seating area with individual seats. A terrace is a standing area — fans stand on stepped areas. Terraces are louder because fans can move around freely.',
        },
        {
          customerLine: 'Why do stadiums have floodlights?',
          options: [
            'To keep the players warm during cold matches.',
            'To show the score and the time to the fans.',
            'To light up the pitch so evening matches can be played after dark.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. Floodlights are very powerful lights on tall poles around the stadium. They make it possible to play matches after sunset. Evening matches under floodlights have a special atmosphere.',
        },
        {
          customerLine: 'Where do the players come out before the match?',
          options: [
            'They come down from the stands.',
            'They walk through the tunnel from the dressing room to the pitch.',
            'They come from the terrace behind the goal.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The tunnel connects the dressing room to the pitch. Walking out of the tunnel is a big moment — the crowd roars when the players appear.',
        },
        {
          customerLine: 'How do you know the current score during a match?',
          options: [
            'You ask the player nearest to you.',
            'You look at the floodlights — they change colour.',
            'You look at the scoreboard — it shows the score and the time.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. The scoreboard is the large electronic display in the stadium. It always shows the current score, the time, and sometimes extra information like the scorer\'s name.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong stadium words in this dialogue. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Ronaldo, where are we sitting? I can\'t find our seats.' },
        { speaker: 'Ronaldo', text: 'We\'re in the east tunnel, row ten. Follow me.' },
        { speaker: 'Sofia', text: 'Amazing view! And look — the players are coming through the stand!' },
        { speaker: 'Ronaldo', text: 'Yes, they walk through the tunnel before every match. The crowd loves it.' },
        { speaker: 'Sofia', text: 'I can see the score on the floodlights — it\'s one-nil!' },
        { speaker: 'Ronaldo', text: 'Yes! And tonight\'s match is under the scoreboard — the lights make it special.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'We\'re in the east tunnel',
          correction: 'We\'re in the east stand',
          explanation: 'Fans sit in the STAND, not the tunnel. The tunnel is for the players to walk through from the dressing room to the pitch.',
        },
        {
          lineIndex: 2,
          incorrectText: 'coming through the stand',
          correction: 'coming through the tunnel',
          explanation: 'Players come through the TUNNEL, not the stand. The tunnel is the passage between the dressing room and the pitch.',
        },
        {
          lineIndex: 4,
          incorrectText: 'the score on the floodlights',
          correction: 'the score on the scoreboard',
          explanation: 'The score is shown on the SCOREBOARD, not the floodlights. Floodlights are the bright lights that illuminate the pitch during evening matches.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using stadium words from this lesson. Compare your answers, then click to see one possible answer.',
      items: [
        {
          customerLine: 'Sofia: What is a terrace?',
          salespersonStart: 'Ronaldo: A terrace is a standing area in the stadium.',
          suggestedCompletion: 'Fans stand on stepped sections instead of sitting in seats. Terraces are usually very loud because fans can jump around and move freely. Some fans prefer them to seats.',
        },
        {
          customerLine: 'Sofia: Why is the pitch so important?',
          salespersonStart: 'Ronaldo: The pitch is the most important part of the stadium.',
          suggestedCompletion: 'It is the grass area where the match is played. A good pitch is flat and well-maintained. If the pitch is in bad condition, it can affect the quality of the football.',
        },
        {
          customerLine: 'Sofia: What happens when the players walk out of the tunnel?',
          salespersonStart: 'Ronaldo: The crowd goes crazy!',
          suggestedCompletion: 'All the fans in the stands and on the terrace start cheering. The floodlights shine on the players and you can hear the stadium singing. It is one of the best moments in football.',
        },
        {
          customerLine: 'Sofia: What does "at full capacity" mean?',
          salespersonStart: 'Ronaldo: It means every single seat is taken.',
          suggestedCompletion: 'When the stadium is at full capacity, there is not one empty seat. The atmosphere is incredible — the noise is much louder and the players can feel the energy from the crowd.',
        },
      ],
    },
  },
};

import { Lesson } from '@/types/lesson';

export const gettingThere: Lesson = {
  slug: 'getting-there',
  title: 'Getting There',
  subtitle: 'Directions and transport to the stadium',
  level: 'A1-A2',
  description: 'Learn how to give and follow simple directions and talk about transport to the football stadium — bus, train, station, near, far, left, right, and straight on.',
  heroImage: '/images/getting-there-hero.png',

  vocabulary: [
    {
      word: 'STATION',
      partOfSpeech: 'noun',
      definition: 'The place where you get on and off a train or bus.',
      example: 'The stadium is a ten-minute walk from the station.',
      imageSlug: '/images/station.png',
    },
    {
      word: 'BUS',
      partOfSpeech: 'noun',
      definition: 'A large vehicle that carries many people along a set route.',
      example: 'Take the number seven bus to the stadium.',
      imageSlug: '/images/bus.png',
    },
    {
      word: 'TRAIN',
      partOfSpeech: 'noun',
      definition: 'A vehicle that travels on rails and carries many people.',
      example: 'The train to the stadium takes fifteen minutes.',
      imageSlug: '/images/train.png',
    },
    {
      word: 'NEAR',
      partOfSpeech: 'adjective',
      definition: 'Not far away; a short distance.',
      example: 'The stadium is near the city centre.',
      imageSlug: '/images/near.png',
    },
    {
      word: 'FAR',
      partOfSpeech: 'adjective',
      definition: 'A long distance away.',
      example: 'Is the stadium far from here?',
      imageSlug: '/images/far.png',
    },
    {
      word: 'LEFT',
      partOfSpeech: 'noun',
      definition: 'The direction on the same side as your left hand.',
      example: 'Turn left at the traffic lights to reach the stadium.',
      imageSlug: '/images/left.png',
    },
    {
      word: 'RIGHT',
      partOfSpeech: 'noun',
      definition: 'The direction on the same side as your right hand.',
      example: 'Turn right after the bridge and you will see the stadium.',
      imageSlug: '/images/right.png',
    },
    {
      word: 'STRAIGHT ON',
      partOfSpeech: 'phrase',
      definition: 'Continue in the same direction without turning.',
      example: 'Go straight on for five minutes and the stadium is on your left.',
      imageSlug: '/images/straight-on.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'HOW DO I GET TO...?',
      definition: 'A question used to ask for directions to a place.',
      example: 'Excuse me — how do I get to the stadium from here?',
      imageSlug: '/images/how-do-i-get-to.png',
    },
    {
      phrase: 'TAKE THE... TO...',
      definition: 'Use a bus, train, or tube to travel to a destination.',
      example: 'Take the number twelve bus to the stadium stop.',
      imageSlug: '/images/take-the.png',
    },
    {
      phrase: 'TURN LEFT / TURN RIGHT',
      definition: 'Change direction to the left or right.',
      example: 'Turn left at the bridge, then right at the supermarket.',
      imageSlug: '/images/turn-left-right.png',
    },
    {
      phrase: 'IT\'S ABOUT... MINUTES',
      definition: 'Used to say approximately how long something takes.',
      example: 'It\'s about twenty minutes by train from the city centre.',
      imageSlug: '/images/its-about-minutes.png',
    },
    {
      phrase: 'ON FOOT',
      definition: 'Walking, not using transport.',
      example: 'The stadium is too far to walk — don\'t go on foot.',
      imageSlug: '/images/on-foot.png',
    },
    {
      phrase: 'YOU CAN\'T MISS IT',
      definition: 'The place is easy to find because it is very visible.',
      example: 'The stadium is enormous — you can\'t miss it!',
      imageSlug: '/images/you-cant-miss-it.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Ronaldo, how do I get to the stadium from the city centre?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Easy! Take the [[train:a vehicle that travels on rails and carries many people]] from Central [[station:the place where you get on and off a train or bus]]. It\'s only fifteen minutes.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And when I arrive at the station, is the stadium [[near:not far away]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Very near! It\'s only a ten-minute walk. Not [[far:a long distance away]] at all.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Can you give me the directions from the station?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Of course. Come out of the station and go [[straight on:continue in the same direction without turning]] for three minutes.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'OK — straight on for three minutes. Then what?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Then turn [[left:the direction on the same side as your left hand]] at the traffic lights. After the bridge, turn [[right:the direction on the same side as your right hand]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Left at the lights, right at the bridge. OK. Is there a [[bus:a large vehicle that carries many people]] too?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Yes — take the number seven bus. But on match days, the train is much faster. Buses get very busy.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Will I know when I\'m close to the stadium?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The stadium is enormous — you can\'t miss it! And on match day, just follow the fans.',
    },
  ],

  matchingExercise: [
    { word: 'STATION', definition: 'The place where you get on and off a train or bus' },
    { word: 'BUS', definition: 'A large vehicle that carries many people along a route' },
    { word: 'TRAIN', definition: 'A vehicle that travels on rails and carries many people' },
    { word: 'NEAR', definition: 'Not far away; a short distance' },
    { word: 'FAR', definition: 'A long distance away' },
    { word: 'LEFT', definition: 'The direction on the same side as your left hand' },
    { word: 'RIGHT', definition: 'The direction on the same side as your right hand' },
    { word: 'STRAIGHT ON', definition: 'Continue in the same direction without turning' },
  ],

  fillBlankExercise: [
    { before: 'Take the', after: 'from Central Station — it\'s only fifteen minutes.', answer: 'train' },
    { before: 'The stadium is near the', answer: 'station', after: '— just a ten-minute walk.' },
    { before: 'Is the stadium', after: 'from here or near?', answer: 'far' },
    { before: 'Go', after: 'for three minutes, then turn left.', answer: 'straight on' },
    { before: 'Turn', after: 'at the traffic lights.', answer: 'left' },
    { before: 'After the bridge, turn', answer: 'right', after: 'and you will see the stadium.' },
    { before: 'On match days, take the train — the', after: 'gets too busy.', answer: 'bus' },
    { before: 'The stadium is enormous — you can\'t', answer: 'miss', after: 'it!' },
  ],

  multipleChoiceExercise: [
    {
      question: 'How long does the train take from the city centre to the stadium?',
      options: ['Five minutes', 'Fifteen minutes', 'Thirty minutes'],
      correctIndex: 1,
    },
    {
      question: 'How far is the stadium from the station on foot?',
      options: ['Five minutes', 'Ten minutes', 'Twenty minutes'],
      correctIndex: 1,
    },
    {
      question: 'What is the first direction Ronaldo gives from the station?',
      options: ['Turn left at the lights', 'Go straight on for three minutes', 'Take the bus'],
      correctIndex: 1,
    },
    {
      question: 'Where does Sofia turn left?',
      options: ['At the bridge', 'At the traffic lights', 'At the station'],
      correctIndex: 1,
    },
    {
      question: 'Where does Sofia turn right?',
      options: ['At the traffic lights', 'At the bridge', 'At the station exit'],
      correctIndex: 1,
    },
    {
      question: 'Which bus goes to the stadium?',
      options: ['Number three', 'Number seven', 'Number twelve'],
      correctIndex: 1,
    },
    {
      question: 'Why does Ronaldo recommend the train on match days?',
      options: ['It is cheaper', 'It is much faster — buses get very busy', 'It goes directly to Gate B'],
      correctIndex: 1,
    },
    {
      question: 'How does Ronaldo say Sofia will know when she is close to the stadium?',
      options: ['There is a big sign', 'The stadium is enormous — you can\'t miss it', 'The bus driver will announce it'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each direction or transport sentence.',
    items: [
      {
        sentence: 'Excuse me — _____ I get to the stadium from here?',
        options: ['Where do', 'How do', 'What do'],
        correctIndex: 1,
        explanation: '"How do" is correct. "How do I get to...?" is the standard question for asking for directions in English. "Where do I get to...?" and "What do I get to...?" are not correct.',
      },
      {
        sentence: 'Take the _____ seven bus to the stadium stop.',
        options: ['road', 'number', 'route'],
        correctIndex: 1,
        explanation: '"Number" is correct. In English, we say "take the number [X] bus" to describe which bus to take. For example: "Take the number 7 bus," "Take the number 34 bus."',
      },
      {
        sentence: 'Go _____ for five minutes, then turn left at the supermarket.',
        options: ['straight on', 'turn left', 'right'],
        correctIndex: 0,
        explanation: '"Straight on" is correct. "Go straight on" means continue walking in the same direction without turning. It is a very common direction in English.',
      },
      {
        sentence: 'The stadium is _____ the station — just a five-minute walk.',
        options: ['far from', 'near', 'inside'],
        correctIndex: 1,
        explanation: '"Near" is correct. "Near" means not far away. "The stadium is near the station" tells you the two places are close together.',
      },
      {
        sentence: 'The stadium is enormous — you _____  miss it!',
        options: ['will', 'can\'t', 'should'],
        correctIndex: 1,
        explanation: '"Can\'t" is correct. "You can\'t miss it" is a common English phrase meaning the place is so big or obvious that it is impossible not to see it. It is used to reassure someone giving directions.',
      },
      {
        sentence: 'On match days, I go to the stadium _____ — it is too far to walk.',
        options: ['on foot', 'by train', 'by straight'],
        correctIndex: 1,
        explanation: '"By train" is correct. In English, we say "by train," "by bus," or "by car" to describe how we travel. "On foot" means walking — but the sentence says it is too far to walk.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. A fan asks for help getting to the stadium. Choose the best response — A, B, or C.',
      items: [
        {
          customerLine: 'Fan: Excuse me, how do I get to the stadium from here?',
          options: [
            'You: The match starts at three o\'clock.',
            'You: Take the number seven bus or the train from Central Station.',
            'You: The stadium holds fifty thousand fans.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The fan asked for directions — the right answer is to explain how to travel there, giving specific transport options. A and C answer different questions.',
        },
        {
          customerLine: 'Fan: Is the stadium far from the station?',
          options: [
            'You: No, it\'s very near — just a ten-minute walk.',
            'You: Turn left at the traffic lights.',
            'You: Take the number twelve bus.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. The fan asked about distance — so the right response is to say whether it is far or near, and give an approximate time. B and C give directions, not distance information.',
        },
        {
          customerLine: 'Fan: Which way do I go when I come out of the station?',
          options: [
            'You: The train is much faster than the bus.',
            'You: Go straight on for three minutes, then turn left at the traffic lights.',
            'You: Your ticket says Gate B on the east side.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The fan asked for directions from the station exit. The right response is to give clear, step-by-step directions: straight on, then turn left.',
        },
        {
          customerLine: 'Fan: Should I take the bus or the train on match day?',
          options: [
            'You: The stadium is near the station.',
            'You: Take the train — it is much faster. Buses get very busy on match days.',
            'You: Go straight on and turn right.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The fan asked for a recommendation on transport. The right answer gives a clear recommendation (train) and explains why (buses get busy on match days).',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong direction words in this dialogue. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Excuse me, how do I take to the stadium?' },
        { speaker: 'Ronaldo', text: 'Take the train from Central Station — it\'s only fifteen minutes.' },
        { speaker: 'Sofia', text: 'And from the station?' },
        { speaker: 'Ronaldo', text: 'Go bus on for three minutes, then turn left at the lights.' },
        { speaker: 'Sofia', text: 'Left at the lights. Then what?' },
        { speaker: 'Ronaldo', text: 'After the bridge, turn near. The stadium is enormous — you can\'t station it!' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'how do I take to the stadium',
          correction: 'how do I get to the stadium',
          explanation: 'The correct phrase is "How do I GET to...?" We say "get to" a place, not "take to" a place. You "take" a bus or train, but you "get to" a destination.',
        },
        {
          lineIndex: 3,
          incorrectText: 'Go bus on for three minutes',
          correction: 'Go straight on for three minutes',
          explanation: '"Straight on" is the correct phrase. It means continue in the same direction. "Bus on" is not a direction — a bus is a type of transport.',
        },
        {
          lineIndex: 5,
          incorrectText: 'turn near',
          correction: 'turn right',
          explanation: '"Turn right" is correct. "Near" is an adjective meaning close — it is not a direction. The directions are left, right, and straight on.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using direction and transport language from this lesson.',
      items: [
        {
          customerLine: 'Sofia: What is the easiest way to get to the stadium?',
          salespersonStart: 'Ronaldo: Take the train from Central Station.',
          suggestedCompletion: 'It is only fifteen minutes and much faster than the bus. Come out of the station, go straight on for three minutes, turn left at the traffic lights, and turn right after the bridge. You can\'t miss it!',
        },
        {
          customerLine: 'Sofia: Why is the bus a bad idea on match days?',
          salespersonStart: 'Ronaldo: Because buses get very busy.',
          suggestedCompletion: 'Thousands of fans all travel to the stadium at the same time. The buses fill up quickly and are very slow because of the traffic. The train is faster and less crowded because it does not get stuck in traffic.',
        },
        {
          customerLine: 'Sofia: What does "you can\'t miss it" mean?',
          salespersonStart: 'Ronaldo: It means the place is very easy to find.',
          suggestedCompletion: 'The stadium is so big that you will see it from far away. There is no danger of walking past it without noticing. We say "you can\'t miss it" to reassure someone that they will find the place easily.',
        },
        {
          customerLine: 'Sofia: Can I walk to the stadium from the city centre?',
          salespersonStart: 'Ronaldo: It is possible but a long walk.',
          suggestedCompletion: 'It takes about forty minutes on foot from the city centre. Most fans prefer to take the train — it is only fifteen minutes and drops you right near the stadium. On a match day, walking is not a good idea because of all the traffic.',
        },
      ],
    },
  },
};

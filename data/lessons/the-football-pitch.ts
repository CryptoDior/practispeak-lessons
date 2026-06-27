import { Lesson } from '@/types/lesson';

export const theFootballPitch: Lesson = {
  slug: 'the-football-pitch',
  title: 'The Football Pitch',
  subtitle: 'Name the key parts of a football pitch',
  level: 'A1-A2',
  description: 'Learn the words for the key areas and lines on a football pitch — goal, net, penalty spot, centre circle, touchline, pitch, goalpost, and box.',
  heroImage: '/images/the-football-pitch-hero.png',

  vocabulary: [
    {
      word: 'GOAL',
      partOfSpeech: 'noun',
      definition: 'The space between two posts where you score.',
      example: 'Kai kicked the ball into the goal!',
      imageSlug: '/images/goal.png',
    },
    {
      word: 'NET',
      partOfSpeech: 'noun',
      definition: 'The net attached to the goal posts that catches the ball.',
      example: 'The ball hit the back of the net.',
      imageSlug: '/images/net.png',
    },
    {
      word: 'PENALTY SPOT',
      partOfSpeech: 'noun',
      definition: 'The white mark on the pitch where you kick a penalty.',
      example: 'The referee pointed to the penalty spot.',
      imageSlug: '/images/penalty-spot.png',
    },
    {
      word: 'CENTRE CIRCLE',
      partOfSpeech: 'noun',
      definition: 'The circle in the middle of the pitch where the match starts.',
      example: 'The match starts with a kick-off in the centre circle.',
      imageSlug: '/images/centre-circle.png',
    },
    {
      word: 'TOUCHLINE',
      partOfSpeech: 'noun',
      definition: 'The line on the side of the pitch.',
      example: 'The ball went over the touchline.',
      imageSlug: '/images/touchline.png',
    },
    {
      word: 'PITCH',
      partOfSpeech: 'noun',
      definition: 'The field where football is played.',
      example: 'The players walked onto the pitch.',
      imageSlug: '/images/pitch.png',
    },
    {
      word: 'GOALPOST',
      partOfSpeech: 'noun',
      definition: 'One of the two vertical posts that hold the net.',
      example: 'The ball hit the goalpost and came back out.',
      imageSlug: '/images/goalpost.png',
    },
    {
      word: 'BOX',
      partOfSpeech: 'noun',
      definition: 'The area in front of the goal. Fouls here give a penalty.',
      example: 'The foul happened inside the box.',
      imageSlug: '/images/box.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'ON THE PITCH',
      definition: 'On the playing field during a match.',
      example: 'There are twenty-two players on the pitch.',
      imageSlug: '/images/on-the-pitch.png',
    },
    {
      phrase: 'INSIDE THE BOX',
      definition: 'In the penalty area in front of the goal.',
      example: 'He was fouled inside the box, so it\'s a penalty.',
      imageSlug: '/images/inside-the-box.png',
    },
    {
      phrase: 'OVER THE LINE',
      definition: 'Past the goal line — the ball is in.',
      example: 'The ball went over the line — it\'s a goal!',
      imageSlug: '/images/over-the-line.png',
    },
    {
      phrase: 'IN THE MIDDLE',
      definition: 'At the centre of the pitch.',
      example: 'The referee stands in the middle for the kick-off.',
      imageSlug: '/images/in-the-middle.png',
    },
    {
      phrase: 'ON THE LINE',
      definition: 'At the edge of the pitch or goal line.',
      example: 'The ball stopped on the line — is it in or out?',
      imageSlug: '/images/on-the-line.png',
    },
    {
      phrase: 'OFF THE PITCH',
      definition: 'Outside the playing area.',
      example: 'The manager shouts instructions from off the pitch.',
      imageSlug: '/images/off-the-pitch.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Kai, this is my first time at a football [[pitch:the field where football is played]]. Can you show me around?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Of course! So this big green area is the pitch. This is where we play.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'It\'s so big! What is that thing at each end?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'That is the [[goal:the space between two posts where you score]]. We have to kick the ball in there to score.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I see! And what is that white line on the side?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'That is the [[touchline:the line on the side of the pitch]]. If the ball goes over it, the other team gets the ball.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What about that big square area in front of the goal?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'That is the [[box:the area in front of the goal where fouls give a penalty]]. A foul inside the box means a penalty.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And that white circle in the middle of the pitch?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'That is the [[centre circle:the circle in the middle of the pitch]]. The match always starts there.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What is that small white mark near the goal?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'That is the [[penalty spot:the white mark where you kick a penalty]]. Last week, I scored a penalty from there!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Wow! I love the [[net:the net attached to the goal posts]] on the goal. It moves when the ball goes in!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Yes! There is nothing better than seeing the ball hit the back of the net. Come on — let\'s warm up!',
    },
  ],

  matchingExercise: [
    { word: 'GOAL', definition: 'The space between two posts where you score' },
    { word: 'NET', definition: 'The net attached to the goal posts' },
    { word: 'PENALTY SPOT', definition: 'The white mark where you kick a penalty' },
    { word: 'CENTRE CIRCLE', definition: 'The circle in the middle of the pitch' },
    { word: 'TOUCHLINE', definition: 'The line on the side of the pitch' },
    { word: 'PITCH', definition: 'The field where football is played' },
    { word: 'GOALPOST', definition: 'One of the two vertical posts that hold the net' },
    { word: 'BOX', definition: 'The area in front of the goal' },
  ],

  fillBlankExercise: [
    { before: 'The players walked onto the', after: 'to start the warm-up.', answer: 'pitch' },
    { before: 'Kai kicked the ball into the', after: 'to score!', answer: 'goal' },
    { before: 'The ball hit the back of the', after: 'and the crowd went wild.', answer: 'net' },
    { before: 'The referee pointed to the', after: 'for a foul inside the box.', answer: 'penalty spot' },
    { before: 'The ball went over the', after: 'so it was a throw-in.', answer: 'touchline' },
    { before: 'The match starts with a kick-off in the', after: '.', answer: 'centre circle' },
    { before: 'The ball hit the', after: 'and came back out — not a goal!', answer: 'goalpost' },
    { before: 'He was fouled', answer: 'inside the box', after: ', so the referee gave a penalty.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Where does Kai say the match always starts?',
      options: ['In the box', 'On the touchline', 'In the centre circle'],
      correctIndex: 2,
    },
    {
      question: 'What is the box?',
      options: ['The changing room', 'The area in front of the goal', 'The centre of the pitch'],
      correctIndex: 1,
    },
    {
      question: 'What happens if the ball goes over the touchline?',
      options: ['It is a goal', 'The other team gets the ball', 'The match stops'],
      correctIndex: 1,
    },
    {
      question: 'What did Kai score from the penalty spot last week?',
      options: ['A free kick', 'A header', 'A penalty'],
      correctIndex: 2,
    },
    {
      question: 'What does Sofia say she loves about the goal?',
      options: ['The colour of the posts', 'How big it is', 'The net that moves when the ball goes in'],
      correctIndex: 2,
    },
    {
      question: 'Why is a foul inside the box important?',
      options: ['It gives a corner kick', 'It gives a penalty', 'It gives a free kick from far away'],
      correctIndex: 1,
    },
    {
      question: 'What is the goalpost?',
      options: ['The net behind the goal', 'The white mark on the ground', 'One of the two vertical posts that hold the net'],
      correctIndex: 2,
    },
    {
      question: 'What does Kai suggest at the end of the dialogue?',
      options: ['To watch a match', 'To warm up', 'To go home'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Have you ever been to a football pitch? What did it look like?',
      'Do you know any parts of a football pitch in English already?',
      'What do you think is the most important part of the pitch?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word to complete each sentence.',
    items: [
      {
        sentence: 'There are twenty-two players on the _____ during a match.',
        options: ['box', 'pitch', 'net'],
        correctIndex: 1,
        explanation: '"Pitch" is the correct word. The pitch is the field where football is played. A box is the area in front of the goal. A net is part of the goal.',
      },
      {
        sentence: 'The ball went into the _____ — it\'s a goal!',
        options: ['touchline', 'centre circle', 'goal'],
        correctIndex: 2,
        explanation: '"Goal" is correct. You score by putting the ball into the goal. The touchline is on the side of the pitch. The centre circle is in the middle.',
      },
      {
        sentence: 'The referee pointed to the _____ for a foul inside the box.',
        options: ['goalpost', 'penalty spot', 'net'],
        correctIndex: 1,
        explanation: '"Penalty spot" is correct. When a foul happens inside the box, the referee points to the penalty spot for a penalty kick.',
      },
      {
        sentence: 'If the ball goes over the _____, the other team gets a throw-in.',
        options: ['touchline', 'centre circle', 'box'],
        correctIndex: 0,
        explanation: '"Touchline" is correct. The touchline is the line on the side of the pitch. If the ball crosses it, it is a throw-in.',
      },
      {
        sentence: 'The ball hit the _____ and did not go in.',
        options: ['pitch', 'goalpost', 'penalty spot'],
        correctIndex: 1,
        explanation: '"Goalpost" is correct. The goalposts are the vertical posts on each side of the goal. If the ball hits them, it is not a goal.',
      },
      {
        sentence: 'The match begins with a kick-off in the _____.',
        options: ['box', 'net', 'centre circle'],
        correctIndex: 2,
        explanation: '"Centre circle" is correct. Every match starts with a kick-off from the centre circle in the middle of the pitch.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read the line, then choose the best response — A, B, or C. Click to see the answer and why.',
      items: [
        {
          customerLine: 'Where does a match start?',
          options: [
            'It starts at the goalpost.',
            'It starts in the centre circle in the middle of the pitch.',
            'It starts inside the box.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Every match starts with a kick-off in the centre circle. The goalpost is part of the goal. The box is in front of the goal.',
        },
        {
          customerLine: 'What is the box?',
          options: [
            'The box is the net behind the goal.',
            'The box is the changing room for the players.',
            'The box is the area in front of the goal. A foul there gives a penalty.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. The box is the penalty area in front of the goal. Fouls inside the box result in a penalty kick.',
        },
        {
          customerLine: 'The ball went over the white line on the side. What happens now?',
          options: [
            'It is a goal!',
            'The other team gets a throw-in from the touchline.',
            'The referee gives a penalty.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. When the ball goes over the touchline, the other team takes a throw-in. A goal happens when the ball crosses the goal line into the net.',
        },
        {
          customerLine: 'Why is the penalty spot important?',
          options: [
            'It shows where the goalkeeper stands.',
            'It marks where the centre circle starts.',
            'It is where you kick a penalty after a foul inside the box.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. The penalty spot marks where the ball is placed for a penalty kick. It is twelve yards from the goal.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read this short dialogue. There are three mistakes — one wrong word in each mistake. Find them as a group, then check your answers.',
      dialogue: [
        { speaker: 'Sofia', text: 'Kai, what is that big circle in the middle of the box?' },
        { speaker: 'Kai', text: 'That is the centre circle. The match starts there.' },
        { speaker: 'Sofia', text: 'And those two white sticks next to the touchline — what are they?' },
        { speaker: 'Kai', text: 'Those are the goalposts. The net hangs between them.' },
        { speaker: 'Sofia', text: 'What is that small white mark inside the centre circle?' },
        { speaker: 'Kai', text: 'That is the penalty spot. You kick from there after a foul inside the goal.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'big circle in the middle of the box',
          correction: 'big circle in the middle of the pitch',
          explanation: 'The centre circle is in the middle of the PITCH, not the box. The box is the area in front of the goal.',
        },
        {
          lineIndex: 2,
          incorrectText: 'two white sticks next to the touchline',
          correction: 'two white sticks next to the net',
          explanation: 'The goalposts are next to the NET, not the touchline. The touchline is the line on the side of the pitch.',
        },
        {
          lineIndex: 5,
          incorrectText: 'a foul inside the goal',
          correction: 'a foul inside the box',
          explanation: 'A penalty is given for a foul inside the BOX (the penalty area), not "inside the goal". The goal is where the ball goes to score.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'The second line is not finished. As a group, discuss how to complete it using words from this lesson. Then click to see one possible answer.',
      items: [
        {
          customerLine: 'Sofia: Where does the match start?',
          salespersonStart: 'Kai: The match starts in the centre circle',
          suggestedCompletion: 'in the middle of the pitch. The referee blows the whistle and one team kicks off.',
        },
        {
          customerLine: 'Sofia: What happens if the ball goes over the white line on the side?',
          salespersonStart: 'Kai: If the ball goes over the touchline,',
          suggestedCompletion: 'it is a throw-in. The other team throws the ball back onto the pitch from the touchline.',
        },
        {
          customerLine: 'Sofia: Why did the referee point to that white spot near the goal?',
          salespersonStart: 'Kai: He pointed to the penalty spot because',
          suggestedCompletion: 'there was a foul inside the box. A penalty is a free kick from that spot — just the ball and the goalkeeper.',
        },
        {
          customerLine: 'Sofia: I want to understand the goal better. What are all the parts?',
          salespersonStart: 'Kai: The goal has two goalposts on each side,',
          suggestedCompletion: 'a crossbar on the top, and a net behind. When the ball crosses the line and goes into the net, it is a goal!',
        },
      ],
    },
  },
};

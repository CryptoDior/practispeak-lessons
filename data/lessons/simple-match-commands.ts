import { Lesson } from '@/types/lesson';

export const simpleMatchCommands: Lesson = {
  slug: 'simple-match-commands',
  title: 'Simple Match Commands',
  subtitle: 'Referee language — "Play on!" "Foul!" "Offside!"',
  level: 'A1-A2',
  description: 'Learn the words referees and fans shout during a match — foul, offside, corner, free kick, yellow card, red card, throw-in, and handball — and the commands used to control the game.',
  heroImage: '/images/simple-match-commands-hero.png',

  vocabulary: [
    {
      word: 'FOUL',
      partOfSpeech: 'noun',
      definition: 'An action that breaks the rules, like pushing or tripping another player.',
      example: 'The referee stopped the match for a foul.',
      imageSlug: '/images/foul.png',
    },
    {
      word: 'OFFSIDE',
      partOfSpeech: 'noun',
      definition: 'A rule about where players can stand when they receive the ball.',
      example: 'The goal did not count — the player was offside.',
      imageSlug: '/images/offside.png',
    },
    {
      word: 'CORNER',
      partOfSpeech: 'noun',
      definition: 'A free kick from the corner of the pitch, given when the ball goes over the goal line off a defender.',
      example: 'The goalkeeper tipped the ball over for a corner.',
      imageSlug: '/images/corner.png',
    },
    {
      word: 'FREE KICK',
      partOfSpeech: 'noun',
      definition: 'A kick given to a team after the other team breaks the rules.',
      example: 'They scored directly from the free kick.',
      imageSlug: '/images/free-kick.png',
    },
    {
      word: 'YELLOW CARD',
      partOfSpeech: 'noun',
      definition: 'A warning given to a player by the referee for a bad foul or unsporting behaviour.',
      example: 'He got a yellow card for a dangerous tackle.',
      imageSlug: '/images/yellow-card.png',
    },
    {
      word: 'RED CARD',
      partOfSpeech: 'noun',
      definition: 'A card that means the player must leave the match immediately.',
      example: 'She got a red card and her team played with ten players.',
      imageSlug: '/images/red-card.png',
    },
    {
      word: 'THROW-IN',
      partOfSpeech: 'noun',
      definition: 'When you throw the ball back into play from the touchline.',
      example: 'It\'s our throw-in — Kai, take it quickly.',
      imageSlug: '/images/throw-in.png',
    },
    {
      word: 'HANDBALL',
      partOfSpeech: 'noun',
      definition: 'When the ball touches a player\'s arm or hand — usually against the rules.',
      example: 'The referee gave a free kick for handball.',
      imageSlug: '/images/handball.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PLAY ON!',
      definition: 'The referee\'s command to continue playing after a possible foul.',
      example: 'The referee saw the push but waved "Play on!"',
      imageSlug: '/images/play-on.png',
    },
    {
      phrase: 'FOUL!',
      definition: 'Shouted by fans or a player when someone breaks the rules.',
      example: '"Foul!" shouted the crowd when he was pushed to the ground.',
      imageSlug: '/images/foul-shout.png',
    },
    {
      phrase: 'OFFSIDE!',
      definition: 'Shouted or signalled when a player is in an illegal position.',
      example: '"Offside!" — the linesman raised his flag.',
      imageSlug: '/images/offside-shout.png',
    },
    {
      phrase: 'SHOW THE CARD!',
      definition: 'What fans shout when they want the referee to give a yellow or red card.',
      example: '"Show the card! That was a terrible foul!"',
      imageSlug: '/images/show-the-card.png',
    },
    {
      phrase: 'GOAL!',
      definition: 'Shouted by the commentator and fans when the ball goes into the net.',
      example: '"Goal!" — the commentator held the word for five full seconds.',
      imageSlug: '/images/goal-shout.png',
    },
    {
      phrase: 'FULL TIME!',
      definition: 'Said when the referee blows the final whistle to end the match.',
      example: '"Full time!" — the players fell to the ground with relief.',
      imageSlug: '/images/full-time-shout.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Kai, I don\'t understand what the referee is saying. Can you help me?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Of course! Watch — see that? The defender pushed him. That is a [[foul:an action that breaks the rules like pushing or tripping]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And the referee blew the whistle. What happens now?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'We get a [[free kick:a kick given after the other team breaks the rules]]. We kick the ball from where the foul happened.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'But the referee is showing a yellow card! Is that serious?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'A [[yellow card:a warning given for a bad foul or unsporting behaviour]] is a warning. If you get two in the same match, you get a [[red card:a card that means the player must leave immediately]] and leave the pitch.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Oh! And what about that flag? The linesman has his flag up.',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'That is [[offside:a rule about where players can stand when they receive the ball]]. The goal does not count.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The ball just went over the side line — what is that?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'That is a [[throw-in:when you throw the ball back into play from the touchline]]. The last player to touch it was theirs, so we get the throw.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And the ball just hit his arm near the goal — is that a [[handball:when the ball touches a player\'s arm or hand]]?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Yes! The referee says handball — we get a free kick. And there it goes — right into the net. GOAL!',
    },
  ],

  matchingExercise: [
    { word: 'FOUL', definition: 'An action that breaks the rules like pushing or tripping' },
    { word: 'OFFSIDE', definition: 'A rule about where players can stand when receiving the ball' },
    { word: 'CORNER', definition: 'A free kick from the corner of the pitch' },
    { word: 'FREE KICK', definition: 'A kick given after the other team breaks the rules' },
    { word: 'YELLOW CARD', definition: 'A warning from the referee for a bad foul' },
    { word: 'RED CARD', definition: 'A card that means the player must leave the match' },
    { word: 'THROW-IN', definition: 'When you throw the ball back into play from the touchline' },
    { word: 'HANDBALL', definition: 'When the ball touches a player\'s arm or hand' },
  ],

  fillBlankExercise: [
    { before: 'The referee stopped play for a', after: '— he pushed the attacker.', answer: 'foul' },
    { before: 'The goal did not count because the player was', answer: 'offside', after: '.' },
    { before: 'The goalkeeper saved the shot and it went over for a', answer: 'corner', after: '.' },
    { before: 'We got a', after: 'after the foul and scored directly from it.', answer: 'free kick' },
    { before: 'He got a', answer: 'yellow card', after: 'for a dangerous tackle.' },
    { before: 'She received a', after: 'and had to leave the pitch immediately.', answer: 'red card' },
    { before: 'The ball went over the touchline — it\'s our', answer: 'throw-in', after: '.' },
    { before: 'The referee gave a free kick for', answer: 'handball', after: 'inside the box.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a foul?',
      options: ['When the ball goes out of play', 'An action that breaks the rules like pushing or tripping', 'When a player scores an own goal'],
      correctIndex: 1,
    },
    {
      question: 'What happens after a foul outside the box?',
      options: ['A penalty', 'A throw-in', 'A free kick'],
      correctIndex: 2,
    },
    {
      question: 'What does a yellow card mean?',
      options: ['The player must leave the match', 'It is a warning for a bad foul', 'The goal is allowed'],
      correctIndex: 1,
    },
    {
      question: 'What happens if a player gets two yellow cards in one match?',
      options: ['They get a free kick', 'They get a red card and must leave', 'Nothing — they can keep playing'],
      correctIndex: 1,
    },
    {
      question: 'What does the linesman\'s raised flag mean in this dialogue?',
      options: ['The ball is out of play', 'It is a corner kick', 'The player is offside'],
      correctIndex: 2,
    },
    {
      question: 'When does a team get a corner?',
      options: ['When the ball goes over the touchline', 'When the ball goes over the goal line off a defender', 'When there is a handball inside the box'],
      correctIndex: 1,
    },
    {
      question: 'What does "Play on!" mean?',
      options: ['Stop the match immediately', 'Give a free kick', 'Continue playing — no foul'],
      correctIndex: 2,
    },
    {
      question: 'How does the match end for Kai and Sofia?',
      options: ['With a red card', 'With a goal from a free kick after a handball', 'With a corner kick'],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct match command or rule word for each situation.',
    items: [
      {
        sentence: 'A player pushes an opponent to the ground. The referee blows the whistle for a _____.',
        options: ['corner', 'foul', 'throw-in'],
        correctIndex: 1,
        explanation: '"Foul" is correct. Pushing, tripping, or kicking an opponent is a foul. The referee blows the whistle and gives the other team a free kick.',
      },
      {
        sentence: 'The ball goes over the side line. The referee points for a _____.',
        options: ['throw-in', 'penalty', 'offside'],
        correctIndex: 0,
        explanation: '"Throw-in" is correct. When the ball goes over the touchline (the side line), the team that did NOT touch it last takes a throw-in.',
      },
      {
        sentence: 'A player is in an illegal position when he receives the ball. The linesman raises the flag for _____.',
        options: ['handball', 'corner', 'offside'],
        correctIndex: 2,
        explanation: '"Offside" is correct. The offside rule means you cannot receive the ball in front of the last defender. If you do, the linesman raises the flag for offside.',
      },
      {
        sentence: 'A player touches the ball with his arm inside the box. The referee points to the penalty spot for _____.',
        options: ['corner', 'handball', 'offside'],
        correctIndex: 1,
        explanation: '"Handball" is correct. When the ball touches a player\'s arm or hand, it is usually a handball. If it happens inside the box, the other team gets a penalty.',
      },
      {
        sentence: 'A player makes a very dangerous foul. The referee shows him a _____ card.',
        options: ['yellow', 'red', 'blue'],
        correctIndex: 1,
        explanation: '"Red" is correct. A red card is for a very serious foul or violent behaviour. The player must leave the match immediately and their team continues with ten players.',
      },
      {
        sentence: 'The shot is saved by the goalkeeper and goes over the goal line. It is a _____.',
        options: ['free kick', 'throw-in', 'corner'],
        correctIndex: 2,
        explanation: '"Corner" is correct. When the ball goes over the goal line (not into the goal) and the last touch was a defending player, the attacking team gets a corner kick from the corner of the pitch.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read the match situation, then choose the correct referee decision — A, B, or C.',
      items: [
        {
          customerLine: 'A defender trips an attacker outside the box. What does the referee give?',
          options: [
            'A penalty kick.',
            'A free kick from where the foul happened.',
            'A corner kick.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A foul OUTSIDE the box gives a free kick from the spot of the foul. A penalty is only given for fouls INSIDE the box.',
        },
        {
          customerLine: 'An attacker is in front of the last defender when he receives the ball. What happens?',
          options: [
            'The goal counts — it was a great pass.',
            'The linesman raises the flag for offside and the goal does not count.',
            'The referee gives a yellow card.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Being offside means the attacker was in an illegal position — in front of the last defender. The linesman raises the flag and the referee stops play. No goal.',
        },
        {
          customerLine: 'A player gets a yellow card for a bad foul. Ten minutes later, he makes another bad foul. What happens?',
          options: [
            'He gets another yellow card but can stay on the pitch.',
            'He gets a second yellow card followed by a red card — he must leave the pitch.',
            'Nothing — only red cards make you leave the pitch.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Two yellow cards in the same match equals a red card. The player must leave the pitch immediately and their team plays with ten players for the rest of the match.',
        },
        {
          customerLine: 'The ball goes out of play over the goal line — the last touch was the goalkeeper. What does the attacking team get?',
          options: [
            'A throw-in.',
            'A free kick.',
            'A corner kick.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. When the ball goes over the GOAL LINE (not into the goal) and the last touch was a defender or goalkeeper, the attacking team gets a CORNER kick from the corner flag.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong match command words in this dialogue. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Kai, the defender just pushed him — is that a handball?' },
        { speaker: 'Kai', text: 'No, that\'s a foul. The referee will give a free kick.' },
        { speaker: 'Sofia', text: 'And he showed a card — a red card for a first foul?' },
        { speaker: 'Kai', text: 'No — a first foul gets a yellow card. A red card means you leave.' },
        { speaker: 'Sofia', text: 'The ball went over the side line. Is it a corner?' },
        { speaker: 'Kai', text: 'No — when it goes over the side line, it\'s a throw-in, not a corner.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'is that a handball',
          correction: 'is that a foul',
          explanation: 'Pushing a player is a FOUL — it is using your body to push or trip an opponent. A handball is when the ball touches a player\'s hand or arm. Pushing is not a handball.',
        },
        {
          lineIndex: 2,
          incorrectText: 'a red card for a first foul',
          correction: 'a yellow card for a first foul',
          explanation: 'A first bad foul usually gets a YELLOW CARD, which is a warning. A RED card is only for very serious or violent fouls, or for getting two yellow cards in one match.',
        },
        {
          lineIndex: 4,
          incorrectText: 'Is it a corner',
          correction: 'Is it a throw-in',
          explanation: 'When the ball goes over the SIDE LINE (touchline), it is a THROW-IN. A corner is when the ball goes over the GOAL LINE (not into the goal), last touched by a defender.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using match command words from this lesson. Compare answers, then click to see one possible answer.',
      items: [
        {
          customerLine: 'Sofia: What is the difference between a yellow card and a red card?',
          salespersonStart: 'Kai: A yellow card is a warning.',
          suggestedCompletion: 'If you get two yellow cards in the same match, the referee shows you a red card and you must leave the pitch. Your team then plays with ten players for the rest of the match.',
        },
        {
          customerLine: 'Sofia: When does the referee shout "Play on!"?',
          salespersonStart: 'Kai: "Play on!" means there is no foul.',
          suggestedCompletion: 'The referee uses it when there is a small push or contact but it is not serious enough to stop the match. They wave their arm forward to tell the players to continue.',
        },
        {
          customerLine: 'Sofia: Why did the goal not count just now?',
          salespersonStart: 'Kai: Because the player was offside.',
          suggestedCompletion: 'The offside rule means you cannot be in front of the last defender when you receive the ball. The linesman raised his flag, the referee blew the whistle, and the goal was cancelled.',
        },
        {
          customerLine: 'Sofia: What is a corner kick exactly?',
          salespersonStart: 'Kai: A corner is given when the ball goes over the goal line,',
          suggestedCompletion: 'and the last player to touch it was a defender or goalkeeper. The attacking team kicks the ball from the corner of the pitch — from the corner flag. It is a good chance to score with a header.',
        },
      ],
    },
  },
};

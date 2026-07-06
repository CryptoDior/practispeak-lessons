import { Lesson } from '@/types/lesson';

export const peopleAtTheClub: Lesson = {
  slug: 'people-at-the-club',
  title: 'People at the Club',
  subtitle: 'Name everyone you meet at a football club',
  level: 'A1-A2',
  description: 'Learn the words for the people you find at a football club — manager, coach, referee, linesman, fan, player, supporter, and physio — and how to talk about what each person does.',
  heroImage: '/images/people-at-the-club-hero.png',

  vocabulary: [
    {
      word: 'MANAGER',
      partOfSpeech: 'noun',
      definition: 'The person in charge of the team. They choose the players and the tactics.',
      example: 'The manager made three substitutions at half time.',
      imageSlug: '/images/people-at-the-club-manager.png',
    },
    {
      word: 'COACH',
      partOfSpeech: 'noun',
      definition: 'A person who trains and teaches the players.',
      example: 'Coach Diallo showed Ronaldo how to improve his shooting.',
      imageSlug: '/images/coach.png',
    },
    {
      word: 'REFEREE',
      partOfSpeech: 'noun',
      definition: 'The person who controls the match and applies the rules.',
      example: 'The referee blew the whistle for a foul.',
      imageSlug: '/images/referee.png',
    },
    {
      word: 'LINESMAN',
      partOfSpeech: 'noun',
      definition: 'An official on the side of the pitch who helps the referee.',
      example: 'The linesman raised his flag for offside.',
      imageSlug: '/images/linesman.png',
    },
    {
      word: 'FAN',
      partOfSpeech: 'noun',
      definition: 'A person who loves and supports a football team.',
      example: 'The fans cheered loudly when the team scored.',
      imageSlug: '/images/fan.png',
    },
    {
      word: 'PLAYER',
      partOfSpeech: 'noun',
      definition: 'A person who plays football in a match or for a team.',
      example: 'There are eleven players on each team.',
      imageSlug: '/images/people-at-the-club-player.png',
    },
    {
      word: 'SUPPORTER',
      partOfSpeech: 'noun',
      definition: 'A fan who goes to matches and cheers for their team.',
      example: 'Thousands of supporters travelled to the away match.',
      imageSlug: '/images/people-at-the-club-supporter.png',
    },
    {
      word: 'PHYSIO',
      partOfSpeech: 'noun',
      definition: 'The person who helps injured players recover and stay fit.',
      example: 'The physio ran onto the pitch to treat Ronaldo\'s injury.',
      imageSlug: '/images/people-at-the-club-physio.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'IN CHARGE OF',
      definition: 'Responsible for managing or controlling something.',
      example: 'The manager is in charge of the whole team.',
      imageSlug: '/images/people-at-the-club-in-charge-of.png',
    },
    {
      phrase: 'IN CHARGE OF THE MATCH',
      definition: 'Responsible for making decisions during the game.',
      example: 'The referee is in charge of the match.',
      imageSlug: '/images/in-charge-of-the-match.png',
    },
    {
      phrase: 'ON THE BENCH',
      definition: 'Sitting with the substitutes and not playing in the match.',
      example: 'The physio sat on the bench next to the substitutes.',
      imageSlug: '/images/people-at-the-club-on-the-bench.png',
    },
    {
      phrase: 'ON THE TOUCHLINE',
      definition: 'Standing on the side of the pitch, watching or coaching.',
      example: 'The manager paced up and down on the touchline.',
      imageSlug: '/images/people-at-the-club-on-the-touchline.png',
    },
    {
      phrase: 'IN THE STANDS',
      definition: 'In the seating area of the stadium where the fans watch.',
      example: 'Sofia sat in the stands with the other supporters.',
      imageSlug: '/images/people-at-the-club-in-the-stands.png',
    },
    {
      phrase: 'RAISE THE FLAG',
      definition: 'What a linesman does to signal offside or that the ball is out.',
      example: 'The linesman raised the flag for offside.',
      imageSlug: '/images/raise-the-flag.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Ronaldo, there are so many people at the stadium today. Who are all these people?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Let me explain! The most important person is the [[manager:the person in charge of the team]]. He chooses who plays.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What about the man with the whistle on the pitch?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'That is the [[referee:the person who controls the match and applies the rules]]. He makes all the decisions in the match.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And the person with the flag on the side of the pitch?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'That is the [[linesman:an official on the side of the pitch who helps the referee]]. He raises the flag for offside or when the ball is out.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Who trains the players every day?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'That is the [[coach:a person who trains and teaches the players]]. Coach Diallo works with us every morning.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What happens when a player gets injured?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The [[physio:the person who helps injured players recover and stay fit]] runs onto the pitch. He makes sure the player is okay.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And all these people in the stands — are they all [[fans:people who love and support a football team]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Yes! We call them fans or [[supporters:fans who go to matches and cheer for their team]]. They make the atmosphere amazing.',
    },
  ],

  matchingExercise: [
    { word: 'MANAGER', definition: 'The person in charge of the team and tactics' },
    { word: 'COACH', definition: 'A person who trains and teaches the players' },
    { word: 'REFEREE', definition: 'The person who controls the match and applies the rules' },
    { word: 'LINESMAN', definition: 'An official on the side of the pitch who helps the referee' },
    { word: 'FAN', definition: 'A person who loves and supports a football team' },
    { word: 'PLAYER', definition: 'A person who plays football in a match' },
    { word: 'SUPPORTER', definition: 'A fan who goes to matches and cheers for their team' },
    { word: 'PHYSIO', definition: 'The person who helps injured players recover and stay fit' },
  ],

  fillBlankExercise: [
    { before: 'The', after: 'chose a 4-3-3 formation for the match.', answer: 'manager' },
    { before: 'The', after: 'blew the whistle to stop the match.', answer: 'referee' },
    { before: 'The', after: 'raised his flag for offside.', answer: 'linesman' },
    { before: 'Coach Diallo is our best', answer: 'coach', after: '— he makes us better every day.' },
    { before: 'The', answer: 'physio', after: 'ran onto the pitch when Ronaldo fell.' },
    { before: 'The', after: 'cheered when the team scored the winning goal.', answer: 'fans' },
    { before: 'There are eleven', after: 'on each team at the start of the match.', answer: 'players' },
    { before: 'Thousands of', after: 'bought tickets for the cup final.', answer: 'supporters' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does the manager do?',
      options: ['He controls the match with a whistle', 'He trains the players every day', 'He chooses the players and the tactics'],
      correctIndex: 2,
    },
    {
      question: 'Who uses a flag on the side of the pitch?',
      options: ['The physio', 'The linesman', 'The manager'],
      correctIndex: 1,
    },
    {
      question: 'What does the physio do?',
      options: ['He trains the players', 'He raises a flag for offside', 'He helps injured players and keeps them fit'],
      correctIndex: 2,
    },
    {
      question: 'What is the difference between a fan and a supporter?',
      options: ['They are the same — a supporter goes to matches and cheers', 'A fan plays in the match', 'A supporter works at the club'],
      correctIndex: 0,
    },
    {
      question: 'Who is in charge of the match?',
      options: ['The manager', 'The coach', 'The referee'],
      correctIndex: 2,
    },
    {
      question: 'Where does Sofia sit to watch the match?',
      options: ['On the bench', 'In the stands', 'On the touchline'],
      correctIndex: 1,
    },
    {
      question: 'What does Ronaldo say the supporters make amazing?',
      options: ['The tactics', 'The atmosphere', 'The score'],
      correctIndex: 1,
    },
    {
      question: 'Who runs onto the pitch when a player is injured?',
      options: ['The referee', 'The manager', 'The physio'],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct word for each person at a football club.',
    items: [
      {
        sentence: 'The person who controls the match with a whistle is the _____.',
        options: ['coach', 'referee', 'manager'],
        correctIndex: 1,
        explanation: '"Referee" is correct. The referee is on the pitch during the match and controls the game. They blow the whistle to start, stop, and end the match.',
      },
      {
        sentence: 'The person who trains the players every day is the _____.',
        options: ['linesman', 'fan', 'coach'],
        correctIndex: 2,
        explanation: '"Coach" is correct. The coach works with the players in training every day to improve their skills. The manager is in charge of the team overall.',
      },
      {
        sentence: 'The _____ raises a flag to signal offside or when the ball is out.',
        options: ['physio', 'linesman', 'supporter'],
        correctIndex: 1,
        explanation: '"Linesman" is correct. The linesman (also called assistant referee) runs along the touchline and raises a flag to help the referee make decisions.',
      },
      {
        sentence: 'When a player is hurt, the _____ runs onto the pitch to help.',
        options: ['manager', 'fan', 'physio'],
        correctIndex: 2,
        explanation: '"Physio" is correct. The physio is the medical person who runs onto the pitch when a player is injured. They check if the player can continue.',
      },
      {
        sentence: 'The people who sit in the stands and cheer are the _____ or supporters.',
        options: ['fans', 'coaches', 'referees'],
        correctIndex: 0,
        explanation: '"Fans" is correct. Fans (also called supporters) are the people who watch and cheer for their team. They sit in the stands at the stadium.',
      },
      {
        sentence: 'The _____ decides who plays and what formation the team uses.',
        options: ['referee', 'physio', 'manager'],
        correctIndex: 2,
        explanation: '"Manager" is correct. The manager is the head of the team. They choose the players, pick the tactics, and make substitutions during the match.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read the question, then choose the best answer — A, B, or C.',
      items: [
        {
          customerLine: 'What is the difference between a manager and a coach?',
          options: [
            'They are exactly the same person.',
            'The manager is in charge of the whole team and tactics. The coach trains the players in sessions.',
            'The coach is more important than the manager.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The manager has overall responsibility for the team — choosing players, formations, and tactics. The coach runs the training sessions and works directly with the players on their skills.',
        },
        {
          customerLine: 'Why does the linesman have a flag?',
          options: [
            'To show which team scored.',
            'To help the referee — they raise the flag for offside, throw-ins, and corners.',
            'To celebrate when the home team scores.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The linesman uses the flag to communicate with the referee from the side of the pitch. They signal offside, goal kicks, corners, and when the ball goes out of play.',
        },
        {
          customerLine: 'What does the physio do during a match?',
          options: [
            'The physio controls the match with a whistle.',
            'The physio runs onto the pitch when a player is injured and decides if they can continue.',
            'The physio sits in the stands with the fans.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The physio is a medical professional. They are ready to run onto the pitch at any time when a player is hurt. They treat injuries and advise the manager if a player can continue.',
        },
        {
          customerLine: 'What is the difference between a fan and a supporter?',
          options: [
            'A fan watches on TV. A supporter always goes to the stadium.',
            'There is no real difference — both words mean someone who loves and follows a team.',
            'A supporter is paid to cheer. A fan is not.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Fan" and "supporter" both mean someone who loves and follows a football team. Both words are used in everyday English. "Supporter" is sometimes used more in British English.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong people in this dialogue. Find the mistakes as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Ronaldo, who is that person on the pitch with the whistle?' },
        { speaker: 'Ronaldo', text: 'That is the manager. He controls the match.' },
        { speaker: 'Sofia', text: 'And who is the person on the side with the flag?' },
        { speaker: 'Ronaldo', text: 'That is the physio. He signals when the ball is out.' },
        { speaker: 'Sofia', text: 'What about the man who ran onto the pitch when the player fell?' },
        { speaker: 'Ronaldo', text: 'That is the referee. He checks if the player is okay.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'That is the manager',
          correction: 'That is the referee',
          explanation: 'The person on the PITCH with the WHISTLE is the REFEREE. The manager stands on the touchline, not on the pitch.',
        },
        {
          lineIndex: 3,
          incorrectText: 'That is the physio',
          correction: 'That is the linesman',
          explanation: 'The person on the SIDE with the FLAG is the LINESMAN. The physio treats injured players — they do not carry a flag.',
        },
        {
          lineIndex: 5,
          incorrectText: 'That is the referee',
          correction: 'That is the physio',
          explanation: 'The person who runs onto the PITCH to check on an INJURED PLAYER is the PHYSIO. The referee stays on the pitch and controls the game.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using words from this lesson. Compare your answers, then click to see one possible answer.',
      items: [
        {
          customerLine: 'Sofia: Who decides which players start the match?',
          salespersonStart: 'Ronaldo: That is the manager\'s job.',
          suggestedCompletion: 'The manager chooses the eleven players who start and the substitutes on the bench. They also pick the formation and the tactics for the match.',
        },
        {
          customerLine: 'Sofia: What does the linesman do when the ball goes out?',
          salespersonStart: 'Ronaldo: The linesman raises the flag',
          suggestedCompletion: 'to show the referee that the ball is out of play. They also signal which team gets the throw-in, corner, or goal kick.',
        },
        {
          customerLine: 'Sofia: I want to understand what the physio does exactly.',
          salespersonStart: 'Ronaldo: The physio is the medical person at the club.',
          suggestedCompletion: 'They treat players when they get injured during a match or in training. If a player falls on the pitch, the referee stops the game and the physio runs on to help.',
        },
        {
          customerLine: 'Sofia: Why are the fans so loud today?',
          salespersonStart: 'Ronaldo: Because supporters love their team!',
          suggestedCompletion: 'When the team scores or makes a great save, the fans in the stands go crazy. The atmosphere they create gives the players extra energy.',
        },
      ],
    },
  },
};

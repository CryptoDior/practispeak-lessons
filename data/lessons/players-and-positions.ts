import { Lesson } from '@/types/lesson';

export const playersAndPositions: Lesson = {
  slug: 'players-and-positions',
  title: 'Players and Positions',
  subtitle: 'Name every player on the pitch',
  level: 'A1-A2',
  description: 'Learn the names of football positions — goalkeeper, defender, midfielder, striker, captain, winger, substitute, and formation — and how to talk about who plays where.',
  heroImage: '/images/players-and-positions-hero.png',

  vocabulary: [
    {
      word: 'GOALKEEPER',
      partOfSpeech: 'noun',
      definition: 'The player who stops the ball from going into the goal.',
      example: 'Our goalkeeper made a great save.',
      imageSlug: '/images/goalkeeper.png',
    },
    {
      word: 'DEFENDER',
      partOfSpeech: 'noun',
      definition: 'A player whose job is to stop the other team from scoring.',
      example: 'The defender blocked the shot at the last second.',
      imageSlug: '/images/defender.png',
    },
    {
      word: 'MIDFIELDER',
      partOfSpeech: 'noun',
      definition: 'A player in the middle of the pitch who links defence and attack.',
      example: 'The midfielder passed the ball to the striker.',
      imageSlug: '/images/midfielder.png',
    },
    {
      word: 'STRIKER',
      partOfSpeech: 'noun',
      definition: 'A player whose job is to score goals.',
      example: 'Kai is the striker — he scored twice today.',
      imageSlug: '/images/striker.png',
    },
    {
      word: 'CAPTAIN',
      partOfSpeech: 'noun',
      definition: 'The leader of the team. They wear a special armband.',
      example: 'The captain spoke to the referee after the foul.',
      imageSlug: '/images/captain.png',
    },
    {
      word: 'WINGER',
      partOfSpeech: 'noun',
      definition: 'A player who plays on the left or right side of the pitch.',
      example: 'The winger ran fast down the right side.',
      imageSlug: '/images/winger.png',
    },
    {
      word: 'SUBSTITUTE',
      partOfSpeech: 'noun',
      definition: 'A player who comes on during a match to replace another player.',
      example: 'The coach sent on a substitute in the second half.',
      imageSlug: '/images/substitute.png',
    },
    {
      word: 'FORMATION',
      partOfSpeech: 'noun',
      definition: 'The way a team lines up on the pitch, shown as numbers.',
      example: 'Our team plays a 4-3-3 formation.',
      imageSlug: '/images/formation.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PLAY IN GOAL',
      definition: 'To be the goalkeeper for a team.',
      example: 'She plays in goal and is very hard to beat.',
      imageSlug: '/images/play-in-goal.png',
    },
    {
      phrase: 'PLAY AT THE BACK',
      definition: 'To play as a defender.',
      example: 'He plays at the back and is very strong in the air.',
      imageSlug: '/images/play-at-the-back.png',
    },
    {
      phrase: 'PLAY IN MIDFIELD',
      definition: 'To play as a midfielder in the middle of the pitch.',
      example: 'She plays in midfield and controls the game.',
      imageSlug: '/images/play-in-midfield.png',
    },
    {
      phrase: 'PLAY UP FRONT',
      definition: 'To play as a striker or forward near the opponent\'s goal.',
      example: 'Kai plays up front and scores a lot of goals.',
      imageSlug: '/images/play-up-front.png',
    },
    {
      phrase: 'COME ON AS A SUBSTITUTE',
      definition: 'To replace another player and enter the match.',
      example: 'He came on as a substitute in the 70th minute.',
      imageSlug: '/images/come-on-as-a-substitute.png',
    },
    {
      phrase: 'WEAR THE ARMBAND',
      definition: 'To be the captain of the team.',
      example: 'She wears the armband and leads the team.',
      imageSlug: '/images/wear-the-armband.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Kai, can you explain the positions? I don\'t really understand who does what.',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Sure! Let\'s start at the back. The [[goalkeeper:the player who stops the ball from going into the goal]] stays near the goal and makes saves.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'OK. And the players in front of the goalkeeper?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Those are the [[defenders:players whose job is to stop the other team from scoring]]. They play at the back and stop the other team.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What about the players in the middle?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'They are [[midfielders:players in the middle of the pitch who link defence and attack]]. They run a lot and connect the defence to the attack.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'And what position do you play, Kai?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'I\'m a [[striker:a player whose job is to score goals]]. I play up front and try to score!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I saw someone running on the side of the pitch — what position is that?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'That is a [[winger:a player who plays on the left or right side of the pitch]]. They are usually very fast.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Who is the player with the armband?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'That\'s the [[captain:the leader of the team who wears a special armband]]. Our captain is number four — she is great.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What about the players sitting on the bench?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'They are [[substitutes:players who come on during a match to replace another player]]. The coach can use up to three in a match.',
    },
  ],

  matchingExercise: [
    { word: 'GOALKEEPER', definition: 'The player who stops the ball from going into the goal' },
    { word: 'DEFENDER', definition: 'A player whose job is to stop the other team from scoring' },
    { word: 'MIDFIELDER', definition: 'A player in the middle of the pitch' },
    { word: 'STRIKER', definition: 'A player whose job is to score goals' },
    { word: 'CAPTAIN', definition: 'The leader of the team who wears an armband' },
    { word: 'WINGER', definition: 'A player who plays on the left or right side of the pitch' },
    { word: 'SUBSTITUTE', definition: 'A player who comes on during a match to replace another player' },
    { word: 'FORMATION', definition: 'The way a team lines up on the pitch' },
  ],

  fillBlankExercise: [
    { before: 'The', after: 'made a great save to stop the penalty.', answer: 'goalkeeper' },
    { before: 'The', after: 'blocked the shot just before it went in.', answer: 'defender' },
    { before: 'The', after: 'passed the ball forward to the striker.', answer: 'midfielder' },
    { before: 'Kai is our best', after: '— he scored twelve goals this season.', answer: 'striker' },
    { before: 'The', after: 'wears an armband and leads the team.', answer: 'captain' },
    { before: 'The fast', after: 'ran down the side and crossed the ball.', answer: 'winger' },
    { before: 'The coach sent on a', after: 'in the second half.', answer: 'substitute' },
    { before: 'We play a 4-3-3', after: 'with four defenders and three strikers.', answer: 'formation' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the goalkeeper\'s job?',
      options: ['To score goals', 'To stop the ball from going into the goal', 'To play in the middle of the pitch'],
      correctIndex: 1,
    },
    {
      question: 'Where do defenders play?',
      options: ['Up front near the opponent\'s goal', 'On the side of the pitch', 'At the back, near their own goal'],
      correctIndex: 2,
    },
    {
      question: 'What position does Kai play?',
      options: ['Goalkeeper', 'Midfielder', 'Striker'],
      correctIndex: 2,
    },
    {
      question: 'What is special about the captain?',
      options: ['They wear a different shirt', 'They wear an armband', 'They sit on the bench'],
      correctIndex: 1,
    },
    {
      question: 'Where does a winger play?',
      options: ['In the middle of the pitch', 'On the left or right side of the pitch', 'In goal'],
      correctIndex: 1,
    },
    {
      question: 'How many substitutes does Kai say the coach can use?',
      options: ['Two', 'Three', 'Five'],
      correctIndex: 1,
    },
    {
      question: 'What do midfielders do?',
      options: ['Stop shots from going in', 'Connect the defence to the attack', 'Play on the side of the pitch'],
      correctIndex: 1,
    },
    {
      question: 'What does a formation show?',
      options: ['The number of goals scored', 'The name of the captain', 'The way a team lines up on the pitch'],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct word to complete each sentence about players and positions.',
    items: [
      {
        sentence: 'The _____ stops the ball from going into the goal.',
        options: ['striker', 'goalkeeper', 'winger'],
        correctIndex: 1,
        explanation: '"Goalkeeper" is correct. The goalkeeper\'s job is to stop the other team from scoring. They play near their own goal.',
      },
      {
        sentence: 'Kai plays up front. He is a _____.',
        options: ['defender', 'goalkeeper', 'striker'],
        correctIndex: 2,
        explanation: '"Striker" is correct. A striker plays up front and their main job is to score goals. "Play up front" means playing near the opponent\'s goal.',
      },
      {
        sentence: 'The _____ wears an armband to show they are the team leader.',
        options: ['substitute', 'captain', 'winger'],
        correctIndex: 1,
        explanation: '"Captain" is correct. The captain leads the team and always wears an armband on their arm.',
      },
      {
        sentence: 'She plays on the right side of the pitch. She is a _____.',
        options: ['midfielder', 'defender', 'winger'],
        correctIndex: 2,
        explanation: '"Winger" is correct. A winger plays on the left or right side of the pitch and is usually very fast.',
      },
      {
        sentence: 'The coach sent on a _____ in the 70th minute to change the game.',
        options: ['substitute', 'referee', 'goalkeeper'],
        correctIndex: 0,
        explanation: '"Substitute" is correct. A substitute is a player who comes on during a match to replace another player.',
      },
      {
        sentence: 'Our team plays a 4-3-3 _____.',
        options: ['position', 'formation', 'captain'],
        correctIndex: 1,
        explanation: '"Formation" is correct. A formation shows how a team lines up on the pitch. 4-3-3 means 4 defenders, 3 midfielders, and 3 forwards.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read the question, then choose the best answer — A, B, or C.',
      items: [
        {
          customerLine: 'What does a striker do?',
          options: [
            'A striker stops the other team from scoring.',
            'A striker plays in goal.',
            'A striker plays up front and tries to score goals.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. A striker\'s main job is to score goals. They play up front, near the opponent\'s goal. Stopping the other team is the defender\'s job.',
        },
        {
          customerLine: 'Who wears the armband in a football team?',
          options: [
            'The goalkeeper always wears the armband.',
            'The captain wears the armband. They are the team leader.',
            'The substitute wears the armband when they come on.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The captain wears the armband. This shows the other players, the referee, and the fans who the team leader is.',
        },
        {
          customerLine: 'What is a 4-3-3 formation?',
          options: [
            '4 strikers, 3 midfielders, 3 goalkeepers.',
            '4 defenders, 3 midfielders, 3 forwards.',
            '4 wingers, 3 defenders, 3 substitutes.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. In a 4-3-3 formation, there are 4 defenders, 3 midfielders, and 3 forwards (strikers/wingers). The goalkeeper is not counted in the numbers.',
        },
        {
          customerLine: 'Can you explain what a substitute is?',
          options: [
            'A substitute is a player who helps the referee.',
            'A substitute is a player who sits on the bench and can come on during a match.',
            'A substitute is another word for the captain.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A substitute waits on the bench. The coach can send them on during the match to replace a player who is tired or injured.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes in this dialogue — a wrong position word each time. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Kai, what position is number one — the player in the goal?' },
        { speaker: 'Kai', text: 'That\'s the winger. She stops every shot.' },
        { speaker: 'Sofia', text: 'And who is number ten — the player with the armband?' },
        { speaker: 'Kai', text: 'That\'s the substitute. She is the team leader.' },
        { speaker: 'Sofia', text: 'What about the players on the side of the pitch — left and right?' },
        { speaker: 'Kai', text: 'They are the defenders. They are very fast and cross the ball.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'That\'s the winger',
          correction: 'That\'s the goalkeeper',
          explanation: 'The player who stands in the goal is the GOALKEEPER, not the winger. The winger plays on the side of the pitch.',
        },
        {
          lineIndex: 3,
          incorrectText: 'That\'s the substitute',
          correction: 'That\'s the captain',
          explanation: 'The player who wears the armband is the CAPTAIN, not the substitute. The substitute is a player on the bench.',
        },
        {
          lineIndex: 5,
          incorrectText: 'They are the defenders',
          correction: 'They are the wingers',
          explanation: 'Players on the left and right sides of the pitch are WINGERS. Defenders play at the back, near their own goal.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using words from this lesson. Compare your answers, then click to see one possible answer.',
      items: [
        {
          customerLine: 'Sofia: Which player stops goals from going in?',
          salespersonStart: 'Kai: The goalkeeper does.',
          suggestedCompletion: 'She plays near the goal and her job is to stop every shot. She is the last player before the net.',
        },
        {
          customerLine: 'Sofia: What does a winger do exactly?',
          salespersonStart: 'Kai: A winger plays on the side of the pitch.',
          suggestedCompletion: 'They run fast down the left or right side and cross the ball into the box for the strikers to score.',
        },
        {
          customerLine: 'Sofia: What is a formation?',
          salespersonStart: 'Kai: A formation is the way the team lines up.',
          suggestedCompletion: 'For example, a 4-3-3 has four defenders, three midfielders, and three forwards. The coach chooses the formation before each match.',
        },
        {
          customerLine: 'Sofia: Why does number four have an armband?',
          salespersonStart: 'Kai: Because she is the captain.',
          suggestedCompletion: 'The captain is the leader of the team. She talks to the referee and helps the other players stay focused.',
        },
      ],
    },
  },
};

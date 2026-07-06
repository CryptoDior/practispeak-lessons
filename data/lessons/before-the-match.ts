import { Lesson } from '@/types/lesson';

export const beforeTheMatch: Lesson = {
  slug: 'before-the-match',
  title: 'Before the Match',
  subtitle: 'Warm-up, line-up, and kick-off language',
  level: 'A1-A2',
  description: 'Learn the key words for what happens before a football match — warm-up, line-up, national anthem, kick-off, substitute, formation — and how to talk about the build-up to the game.',
  heroImage: '/images/before-the-match-hero.png',

  vocabulary: [
    {
      word: 'WARM-UP',
      partOfSpeech: 'noun',
      definition: 'The exercises players do before the match to prepare their bodies.',
      example: 'The players did their warm-up on the pitch before kick-off.',
      imageSlug: '/images/before-the-match-warm-up.png',
    },
    {
      word: 'LINE-UP',
      partOfSpeech: 'noun',
      definition: 'The list of players who will start the match for each team.',
      example: 'The manager announced the line-up one hour before kick-off.',
      imageSlug: '/images/line-up.png',
    },
    {
      word: 'NATIONAL ANTHEM',
      partOfSpeech: 'noun',
      definition: 'The official song of a country, played before international matches.',
      example: 'Both teams stood still for the national anthem before the match.',
      imageSlug: '/images/national-anthem.png',
    },
    {
      word: 'KICK-OFF',
      partOfSpeech: 'noun',
      definition: 'The moment when the match begins — a player kicks the ball from the centre circle.',
      example: 'Kick-off is at three o\'clock this afternoon.',
      imageSlug: '/images/before-the-match-kick-off.png',
    },
    {
      word: 'FORMATION',
      partOfSpeech: 'noun',
      definition: 'The way a team organises its players on the pitch — for example, four-four-two.',
      example: 'The manager chose a four-three-three formation for the match.',
      imageSlug: '/images/before-the-match-formation.png',
    },
    {
      word: 'CAPTAIN',
      partOfSpeech: 'noun',
      definition: 'The leader of the team, who wears an armband.',
      example: 'The captain shook hands with the referee before kick-off.',
      imageSlug: '/images/before-the-match-captain.png',
    },
    {
      word: 'TOSS',
      partOfSpeech: 'noun',
      definition: 'When the referee flips a coin to decide which team kicks off or chooses an end.',
      example: 'The home captain won the toss and chose to kick off.',
      imageSlug: '/images/toss.png',
    },
    {
      word: 'SUBSTITUTE',
      partOfSpeech: 'noun',
      definition: 'A player on the bench who may come on during the match to replace another player.',
      example: 'Three substitutes are warming up on the side of the pitch.',
      imageSlug: '/images/before-the-match-substitute.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WARM UP',
      definition: 'To do exercises to prepare the body for a match or training.',
      example: 'The players warm up on the pitch one hour before kick-off.',
      imageSlug: '/images/warm-up-phrase.png',
    },
    {
      phrase: 'LINE UP',
      definition: 'When players stand in a line — usually before the match or for the anthem.',
      example: 'Both teams line up in the centre circle for the national anthem.',
      imageSlug: '/images/line-up-phrase.png',
    },
    {
      phrase: 'KICK OFF',
      definition: 'To start the match by kicking the ball from the centre circle.',
      example: 'The home team kicks off after winning the coin toss.',
      imageSlug: '/images/kick-off-phrase.png',
    },
    {
      phrase: 'ON THE BENCH',
      definition: 'A substitute who is sitting and waiting to play.',
      example: 'Two strikers are on the bench tonight — they might come on in the second half.',
      imageSlug: '/images/before-the-match-on-the-bench.png',
    },
    {
      phrase: 'WIN THE TOSS',
      definition: 'To win the coin flip before the match and choose which end to attack.',
      example: 'We won the toss and chose to attack the end with more of our fans.',
      imageSlug: '/images/win-the-toss.png',
    },
    {
      phrase: 'READ OUT THE LINE-UP',
      definition: 'When the announcer tells the crowd the names of the starting players.',
      example: 'The stadium announcer read out the line-up and the crowd cheered.',
      imageSlug: '/images/read-out-the-lineup.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Ronaldo, the players are on the pitch already. What are they doing?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'They are doing their [[warm-up:exercises players do before the match to prepare their bodies]]. It starts about an hour before [[kick-off:the moment when the match begins]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'When do we find out which players are starting the match?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The manager announces the [[line-up:the list of players who will start]] about an hour before the game. Then the announcer reads it out to the crowd.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What [[formation:the way a team organises its players]] are they using tonight?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'A four-three-three. Four defenders, three midfielders, and three forwards. Very attacking!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I can see some players in different kit on the side. Are they [[substitutes:players on the bench who may come on during the match]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Exactly. They are on the bench for now, but they could come on in the second half.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The players are lining up now. Is that for the [[national anthem:the official song of a country, played before international matches]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Yes! And look — the two [[captains:the leaders of each team, who wear an armband]] are walking to the centre for the [[toss:when the referee flips a coin to decide who kicks off]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The home captain won! They\'re pointing to that end — they chose to attack it.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The anthem, the toss, the kick-off — here we go! The match is about to start!',
    },
  ],

  matchingExercise: [
    { word: 'WARM-UP', definition: 'Exercises players do before the match to prepare their bodies' },
    { word: 'LINE-UP', definition: 'The list of players who will start the match' },
    { word: 'NATIONAL ANTHEM', definition: 'The official song of a country, played before international matches' },
    { word: 'KICK-OFF', definition: 'The moment when the match begins' },
    { word: 'FORMATION', definition: 'The way a team organises its players on the pitch' },
    { word: 'CAPTAIN', definition: 'The leader of the team, who wears an armband' },
    { word: 'TOSS', definition: 'When the referee flips a coin to decide who kicks off' },
    { word: 'SUBSTITUTE', definition: 'A player on the bench who may replace another during the match' },
  ],

  fillBlankExercise: [
    { before: 'The players do their', after: 'one hour before the match starts.', answer: 'warm-up' },
    { before: 'The manager announced the', after: '— our best striker is starting!', answer: 'line-up' },
    { before: 'Both teams stood still for the', answer: 'national anthem', after: 'before kick-off.' },
    { before: '', answer: 'Kick-off', after: 'is at three o\'clock — don\'t be late!' },
    { before: 'The manager chose a four-four-two', answer: 'formation', after: 'for tonight\'s match.' },
    { before: 'The', after: 'shook hands with the referee before the match.', answer: 'captain' },
    { before: 'We won the', after: 'and chose which end to attack.', answer: 'toss' },
    { before: 'There are three', after: 'on the bench for the second half.', answer: 'substitutes' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What are the players doing one hour before kick-off?',
      options: ['Watching the national anthem', 'Doing their warm-up', 'Reading the line-up'],
      correctIndex: 1,
    },
    {
      question: 'What formation does the manager choose tonight?',
      options: ['Four-four-two', 'Four-three-three', 'Three-five-two'],
      correctIndex: 1,
    },
    {
      question: 'What do the players in different kit on the side do?',
      options: ['They are referees', 'They are substitutes on the bench', 'They are warming up to start'],
      correctIndex: 1,
    },
    {
      question: 'Why do the teams line up before the match?',
      options: ['For the national anthem', 'For the coin toss', 'To hear the line-up announcement'],
      correctIndex: 0,
    },
    {
      question: 'Who walks to the centre for the coin toss?',
      options: ['The managers', 'The two captains', 'The substitutes'],
      correctIndex: 1,
    },
    {
      question: 'What does the home captain choose after winning the toss?',
      options: ['Which players start', 'Which end to attack', 'Which substitute comes on first'],
      correctIndex: 1,
    },
    {
      question: 'When is the national anthem played?',
      options: ['After the warm-up', 'Before kick-off, when the players line up', 'At half-time'],
      correctIndex: 1,
    },
    {
      question: 'When might a substitute come on?',
      options: ['Before kick-off', 'During the warm-up', 'In the second half'],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct word to complete each sentence about what happens before the match.',
    items: [
      {
        sentence: 'The players _____ up on the pitch one hour before the match.',
        options: ['kick', 'warm', 'line'],
        correctIndex: 1,
        explanation: '"Warm" is correct — "warm up" means to do exercises to prepare your body. "Kick up" and "line up" are different actions. Players warm up before every match and training session.',
      },
      {
        sentence: 'The manager uses a four-three-three _____.',
        options: ['captain', 'toss', 'formation'],
        correctIndex: 2,
        explanation: '"Formation" is correct. A formation describes how the players are organised on the pitch. "Four-three-three" means four defenders, three midfielders, and three forwards.',
      },
      {
        sentence: 'The _____ wears an armband and leads the team.',
        options: ['substitute', 'captain', 'anthem'],
        correctIndex: 1,
        explanation: '"Captain" is correct. The captain is the leader of the team and wears a special armband to show their role. The captain also represents the team at the coin toss before the match.',
      },
      {
        sentence: 'Both teams _____ up in the centre for the national anthem.',
        options: ['warm', 'kick', 'line'],
        correctIndex: 2,
        explanation: '"Line" is correct — "line up" means to stand in a line. Before the national anthem, players line up in the centre circle facing the crowd. It is a formal moment before the match begins.',
      },
      {
        sentence: 'The referee flips a coin — this is called the _____.',
        options: ['warm-up', 'toss', 'kick-off'],
        correctIndex: 1,
        explanation: '"Toss" is correct. The toss is when the referee flips a coin before the match. The winning captain chooses which end to attack or whether to kick off first.',
      },
      {
        sentence: 'A player who is not starting but might play later is called a _____.',
        options: ['formation', 'toss', 'substitute'],
        correctIndex: 2,
        explanation: '"Substitute" is correct. Substitutes sit on the bench during the match. The manager can bring them on during the game to replace a tired or injured player — usually up to three changes are allowed.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. A friend asks about what\'s happening before the match. Choose the best response — A, B, or C.',
      items: [
        {
          customerLine: 'Friend: What are the players doing on the pitch already?',
          options: [
            'You: They\'re doing their warm-up — exercises to prepare their bodies before the match.',
            'You: They\'re reading out the line-up to the crowd.',
            'You: They\'re waiting for the coin toss.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. When players are on the pitch before a match, they are doing their warm-up. This involves running, passing, shooting, and stretching to prepare their bodies for the game.',
        },
        {
          customerLine: 'Friend: What does the captain do at the coin toss?',
          options: [
            'You: The captain announces the formation to the crowd.',
            'You: The captain shakes hands with the referee and calls heads or tails.',
            'You: The captain decides which substitutes will play.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. At the coin toss, the captain meets the referee in the centre circle, shakes hands, and calls heads or tails. The winner chooses which end to attack or whether to kick off.',
        },
        {
          customerLine: 'Friend: What is a four-three-three formation?',
          options: [
            'You: It is a type of warm-up exercise.',
            'You: It means four defenders, three midfielders, and three forwards.',
            'You: It is the total number of substitutes allowed.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A formation describes how a team is organised on the pitch. "Four-three-three" means four defenders, three midfielders, and three attackers. It is a very attacking formation.',
        },
        {
          customerLine: 'Friend: What is a substitute?',
          options: [
            'You: The substitute is the team captain.',
            'You: A substitute is a player who sits on the bench and may come on during the match.',
            'You: A substitute is the player who kicks off at the start of the match.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A substitute (or "sub") is a player who is not in the starting line-up but is available to come on during the match. Managers use substitutes when a player is tired, injured, or when they need to change tactics.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong words in this pre-match conversation. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'The players are on the pitch. What are they doing?' },
        { speaker: 'Ronaldo', text: 'They\'re doing their kick-off — exercises to prepare for the match.' },
        { speaker: 'Sofia', text: 'And those players on the side — are they substitutes?' },
        { speaker: 'Ronaldo', text: 'Yes, they\'re on the bench. They might come on later.' },
        { speaker: 'Sofia', text: 'Now the teams are anthem up in the centre circle.' },
        { speaker: 'Ronaldo', text: 'Yes, for the national toss. Then the captains go for the formation.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'doing their kick-off',
          correction: 'doing their warm-up',
          explanation: 'The players are doing their WARM-UP, not their kick-off. The warm-up is the exercises players do before the match. The kick-off is the moment when the match actually starts.',
        },
        {
          lineIndex: 4,
          incorrectText: 'teams are anthem up',
          correction: 'teams are lining up',
          explanation: 'The teams are LINING UP in the centre circle. "Line up" means to stand in a line. The national anthem is what they stand for — it is not used as a verb here.',
        },
        {
          lineIndex: 5,
          incorrectText: 'go for the formation',
          correction: 'go for the toss',
          explanation: 'The captains go for the TOSS, not the formation. The toss is the coin flip at the start. The formation is how the players are organised on the pitch — it is decided by the manager, not by a coin flip.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using pre-match language from this lesson.',
      items: [
        {
          customerLine: 'Sofia: Why do players do a warm-up before the match?',
          salespersonStart: 'Ronaldo: To prepare their bodies for the hard work ahead.',
          suggestedCompletion: 'If players start a match without warming up, they can get injured more easily. The warm-up helps their muscles get ready and their minds focus. It usually includes running, passing, and shooting practice.',
        },
        {
          customerLine: 'Sofia: What happens at the coin toss?',
          salespersonStart: 'Ronaldo: The two captains meet the referee in the centre circle.',
          suggestedCompletion: 'The referee flips a coin. The captain who wins the toss can choose which end to attack in the first half, or they can choose to kick off. Winning the toss is important — many captains prefer to attack the end where most of their fans are.',
        },
        {
          customerLine: 'Sofia: Why does the manager not start his best players?',
          salespersonStart: 'Ronaldo: Sometimes the manager rests players to keep them fresh.',
          suggestedCompletion: 'If a team plays many matches in a week, the manager might rest some key players and start substitutes instead. He saves the best players for the most important matches, or brings them on when the team needs a goal.',
        },
        {
          customerLine: 'Sofia: What does the formation four-four-two mean?',
          salespersonStart: 'Ronaldo: It means four defenders, four midfielders, and two forwards.',
          suggestedCompletion: 'The first number is always the defenders, the second is the midfielders, and the last number is the forwards. The three numbers must always add up to ten — not counting the goalkeeper. Different formations suit different styles of play.',
        },
      ],
    },
  },
};

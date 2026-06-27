import { Lesson } from '@/types/lesson';

export const a1ReviewMatch: Lesson = {
  slug: 'a1-review-match',
  title: 'A1 Review Match',
  subtitle: 'Full A1 vocabulary review through match commentary',
  level: 'A1-A2',
  description: 'Review all the key A1 Football ESL vocabulary in one exciting simulated match — from kick-off to final whistle, using words from all twenty lessons in the course.',
  heroImage: '/images/a1-review-match-hero.png',

  vocabulary: [
    {
      word: 'COMMENTARY',
      partOfSpeech: 'noun',
      definition: 'The live description of a match, spoken by a presenter as it happens.',
      example: 'The commentary on the radio made me feel like I was at the stadium.',
      imageSlug: '/images/commentary.png',
    },
    {
      word: 'COMMENTATOR',
      partOfSpeech: 'noun',
      definition: 'The person who describes the match live, using football vocabulary.',
      example: 'The commentator shouted "GOAL!" when the ball hit the net.',
      imageSlug: '/images/commentator.png',
    },
    {
      word: 'TACKLE',
      partOfSpeech: 'noun / verb',
      definition: 'When a player tries to take the ball from an opponent.',
      example: 'The defender made a brilliant tackle to stop the attack.',
      imageSlug: '/images/tackle.png',
    },
    {
      word: 'POSSESSION',
      partOfSpeech: 'noun',
      definition: 'When a team has the ball and is passing it between players.',
      example: 'City have had most of the possession in the first half.',
      imageSlug: '/images/possession.png',
    },
    {
      word: 'CHANCE',
      partOfSpeech: 'noun',
      definition: 'An opportunity to score a goal.',
      example: 'The striker had a great chance but the goalkeeper saved it.',
      imageSlug: '/images/chance.png',
    },
    {
      word: 'SAVE',
      partOfSpeech: 'noun / verb',
      definition: 'When the goalkeeper stops the ball from going into the net.',
      example: 'What a save! The goalkeeper kept the ball out with his foot!',
      imageSlug: '/images/save.png',
    },
    {
      word: 'HEADER',
      partOfSpeech: 'noun',
      definition: 'When a player uses their head to hit the ball.',
      example: 'The captain scored with a brilliant header from the corner.',
      imageSlug: '/images/header.png',
    },
    {
      word: 'NET',
      partOfSpeech: 'noun',
      definition: 'The white netting at the back of the goal.',
      example: 'The ball flew into the top of the net — what a goal!',
      imageSlug: '/images/net.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'AND THEY SCORE!',
      definition: 'A commentator\'s exclamation when a goal goes in.',
      example: 'He shoots — and they score! One-nil!',
      imageSlug: '/images/and-they-score.png',
    },
    {
      phrase: 'WHAT A SAVE!',
      definition: 'An exclamation of surprise and admiration when the goalkeeper makes a great stop.',
      example: 'What a save! The goalkeeper had no right to reach that!',
      imageSlug: '/images/what-a-save.png',
    },
    {
      phrase: 'INTO THE NET',
      definition: 'When the ball enters the goal.',
      example: 'He curled it into the top corner — straight into the net!',
      imageSlug: '/images/into-the-net.png',
    },
    {
      phrase: 'ON THE ATTACK',
      definition: 'When a team is moving forward and trying to score.',
      example: 'City are on the attack again — they are putting pressure on the defence.',
      imageSlug: '/images/on-the-attack.png',
    },
    {
      phrase: 'HOLDING ON',
      definition: 'When a team is defending a lead and trying to reach full-time without conceding.',
      example: 'City are holding on with ten minutes to go — one-nil and they want the win.',
      imageSlug: '/images/holding-on.png',
    },
    {
      phrase: 'AND THE FINAL WHISTLE!',
      definition: 'The commentator\'s phrase when the referee ends the match.',
      example: 'The referee blows — and the final whistle! City win two-one!',
      imageSlug: '/images/and-the-final-whistle.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Welcome to the A1 Review Match! Sofia and I will describe today\'s game and use all the football vocabulary from this course. Are you ready?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Ready! Fifty thousand fans in the [[stadium:the large building where football matches are played]]. Incredible [[atmosphere:the feeling or energy created by the crowd]]! City in blue and white against United in red.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The captains have done the [[toss:when the referee flips a coin to decide who kicks off]]. City won the toss. [[Kick-off:the moment when the match begins]]! City attack straight away.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The [[midfielder:a player in the middle of the pitch]] passes to the [[striker:the forward who tries to score goals]]. He [[dribbles:moves with the ball past defenders]] past the [[defender:a player whose main job is to stop the other team scoring]]!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The striker shoots — the [[goalkeeper:the player who guards the goal and tries to stop shots]] makes a brilliant [[save:when the goalkeeper stops the ball]]! What a save! The crowd shouts "Ooh!"',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'United clear the ball — but City win a [[corner:when the ball goes over the goal line off a defender]]. The [[winger:a player who plays on the sides of the pitch]] takes it.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The [[captain:the leader of the team, who wears an armband]] jumps and scores with a powerful [[header:when a player uses their head to hit the ball]] — the ball flies into the [[net:the white netting at the back of the goal]]!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'GOAL! One-nil to City! The fans [[cheer:shout in support and excitement]] and sing "[[Olé:a word fans shout to celebrate]]! Olé! Olé!"',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Half-time: City one, United nil. The players go to the [[dressing room:the room where the manager talks to the team at half-time]]. The manager gives his instructions.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Second half! United push forward. Their [[substitute:a player who comes on during the match to replace another]] comes on — fresh energy! A [[free kick:a kick the team gets after a foul]] from thirty metres.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The United striker shoots — the ball flies past the goalkeeper and into the [[net:the netting at the back of the goal]]! An [[equaliser:a goal that makes the score level]] — one-one!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Ninety minutes! The referee adds four minutes of [[injury time:extra minutes added at the end for time lost]]. City are on the attack. The [[winger:a player on the side of the pitch]] crosses. The striker [[volleys:kicks the ball while it is in the air]] — GOAL! Two-one! A late winner!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'And the [[final whistle:the signal from the referee that the match is over]]! City win the local [[derby:a match between two rival teams from the same city]] two-one! What a match — and what a review!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'How many A1 Football ESL words did you spot in that commentary? Well done — you\'ve finished Level A1!',
    },
  ],

  matchingExercise: [
    { word: 'COMMENTARY', definition: 'The live description of a match spoken by a presenter' },
    { word: 'COMMENTATOR', definition: 'The person who describes the match live' },
    { word: 'TACKLE', definition: 'When a player tries to take the ball from an opponent' },
    { word: 'POSSESSION', definition: 'When a team has the ball and is passing it between players' },
    { word: 'CHANCE', definition: 'An opportunity to score a goal' },
    { word: 'SAVE', definition: 'When the goalkeeper stops the ball from going into the net' },
    { word: 'HEADER', definition: 'When a player uses their head to hit the ball' },
    { word: 'NET', definition: 'The white netting at the back of the goal' },
  ],

  fillBlankExercise: [
    { before: 'The', answer: 'commentator', after: 'shouted "GOAL!" as the ball hit the net.' },
    { before: 'The defender made a great', answer: 'tackle', after: 'to stop the attack.' },
    { before: 'City have had most of the', answer: 'possession', after: 'in the first half.' },
    { before: 'The striker had a great', answer: 'chance', after: 'but the goalkeeper saved it.' },
    { before: 'What a', answer: 'save', after: '— the goalkeeper kept it out with his feet!' },
    { before: 'The captain scored with a brilliant', answer: 'header', after: 'from the corner.' },
    { before: 'The ball flew into the', answer: 'net', after: '— one-nil to City!' },
    { before: 'He scored a late winner — and the', answer: 'final whistle', after: '!' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Who wins the coin toss at the start of the match?',
      options: ['United', 'City', 'The referee'],
      correctIndex: 1,
    },
    {
      question: 'How does the captain score the first goal?',
      options: ['With a free kick', 'With a penalty', 'With a header from a corner'],
      correctIndex: 2,
    },
    {
      question: 'What is the score at half-time?',
      options: ['Nil-nil', 'One-nil to City', 'One-one'],
      correctIndex: 1,
    },
    {
      question: 'How does United equalise in the second half?',
      options: ['From a corner', 'From a free kick', 'From a penalty'],
      correctIndex: 1,
    },
    {
      question: 'What is the score after United equalise?',
      options: ['One-nil', 'Two-one', 'One-one'],
      correctIndex: 2,
    },
    {
      question: 'When does City score the winner?',
      options: ['In the second half at sixty minutes', 'In injury time', 'At half-time'],
      correctIndex: 1,
    },
    {
      question: 'What is the final score?',
      options: ['One-nil', 'Two-nil', 'Two-one'],
      correctIndex: 2,
    },
    {
      question: 'What type of match is this — City vs United?',
      options: ['A cup final', 'A league match', 'A local derby'],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'These sentences use vocabulary from all 20 A1 lessons. Choose the correct word to complete each one.',
    items: [
      {
        sentence: 'The striker _____ with a brilliant shot into the top corner.',
        options: ['blocked', 'scored', 'booed'],
        correctIndex: 1,
        explanation: '"Scored" is correct. To score means to put the ball in the net. A striker is the player whose main job is to score goals. This review sentence combines vocabulary from Lesson 8 (Score a Goal) and Lesson 2 (Players and Positions).',
      },
      {
        sentence: 'The referee blew the _____ — half-time! Players go to the dressing room.',
        options: ['anthem', 'badge', 'whistle'],
        correctIndex: 2,
        explanation: '"Whistle" is correct. The referee uses a whistle to signal half-time and full-time. This combines vocabulary from Lesson 16 (Half-Time) and Lesson 14 (Before the Match).',
      },
      {
        sentence: 'The fans _____ "Come on!" to encourage the team after going one-nil down.',
        options: ['shouted', 'booed', 'tackled'],
        correctIndex: 0,
        explanation: '"Shouted" is correct. Fans shout to encourage their team. "Come on!" is the most common fan shout in English. This reviews vocabulary from Lesson 15 (Chants and Crowd Language) and Lesson 9 (Win, Lose, Draw).',
      },
      {
        sentence: 'The team _____ on the pitch before kick-off — a four-three-three formation.',
        options: ['booed', 'lined up', 'tackled'],
        correctIndex: 1,
        explanation: '"Lined up" is correct. Before the match, teams line up in their formation. This reviews vocabulary from Lesson 14 (Before the Match) — formation, line-up, kick-off.',
      },
      {
        sentence: 'The captain scored with a _____ from the corner kick.',
        options: ['save', 'header', 'tackle'],
        correctIndex: 1,
        explanation: '"Header" is correct. A header is when a player uses their head to hit the ball. A corner kick is crossed into the box and the captain jumps to head it in. This reviews vocabulary from this lesson and Lesson 10 (Simple Match Commands).',
      },
      {
        sentence: 'City won the _____ two-one — their biggest rivals United were beaten.',
        options: ['derby', 'season', 'save'],
        correctIndex: 0,
        explanation: '"Derby" is correct. A derby is a match between two local rival teams. This reviews vocabulary from Lesson 18 (Talking About Your Team) — derby, rival, and the idea of fan loyalty.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read the match situation and choose the correct commentary — A, B, or C.',
      items: [
        {
          customerLine: 'Match situation: The striker runs with the ball and shoots. The ball flies into the top corner. What does the commentator say?',
          options: [
            '"The goalkeeper makes a brilliant save!"',
            '"GOAL! The striker scores — the ball flies into the net! One-nil!"',
            '"The referee blows the final whistle!"',
          ],
          correctIndex: 1,
          explanation: 'B is correct. When a goal is scored, the commentator shouts "GOAL!" and describes the scorer and the score. This combines: goal, net, striker, score — all key A1 vocabulary from lessons 8, 19, and 20.',
        },
        {
          customerLine: 'Match situation: The score is one-one after ninety minutes in a cup match. What happens next?',
          options: [
            'Both teams get one point and go home.',
            'The referee tosses a coin to find the winner.',
            'They play thirty minutes of extra time. If still level, a penalty shootout decides it.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. In a cup match, a draw leads to extra time, then a penalty shootout if needed. This reviews vocabulary from Lesson 17 (The Final Whistle) — extra time, penalty shootout, draw.',
        },
        {
          customerLine: 'Match situation: The ball goes over the goal line off a defender\'s foot. What does the referee give?',
          options: [
            'A free kick to the attacking team.',
            'A corner kick to the attacking team.',
            'A yellow card for the defender.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. When the ball goes over the goal line and a defender touches it last, the referee gives a corner kick to the attacking team. This reviews vocabulary from Lesson 10 (Simple Match Commands) — corner.',
        },
        {
          customerLine: 'Match situation: A fan turns to you and asks "Who do you support?" How do you answer?',
          options: [
            '"I support City — through and through! The derby is on Saturday!"',
            '"The score is one-nil."',
            '"The captain scored a header."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "Who do you support?" is the key question from Lesson 18. The answer uses "I support [team]" and "through and through" for emphasis. Mentioning the derby shows fan knowledge.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong football words in this match commentary. Find them as a group.',
      dialogue: [
        { speaker: 'Ronaldo', text: 'Kick-off! City in blue and white attack first. The midfielder passes to the striker.' },
        { speaker: 'Sofia', text: 'The striker shoots! The goalkeeper makes a brilliant tackle — what a stop!' },
        { speaker: 'Ronaldo', text: 'City win a corner. The winger crosses. The captain jumps...' },
        { speaker: 'Sofia', text: 'GOAL! What a save! The captain scores with a header — one-nil to City!' },
        { speaker: 'Ronaldo', text: 'The fans booed loudly — what a goal! "Olé! Olé! Olé!"' },
        { speaker: 'Sofia', text: 'And at half-time the final whistle blows! City lead one-nil going into the second half.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'goalkeeper makes a brilliant tackle',
          correction: 'goalkeeper makes a brilliant save',
          explanation: 'Goalkeepers make SAVES — they stop shots from going in. A tackle is when a player takes the ball from an opponent on the ground. Goalkeepers do not tackle — they save.',
        },
        {
          lineIndex: 3,
          incorrectText: 'GOAL! What a save!',
          correction: 'GOAL! What a goal! / GOAL! What a header!',
          explanation: '"What a save!" is said when the goalkeeper STOPS a goal — not when a goal is scored. After a goal goes in, a commentator says "What a goal!" or describes the type of goal — "What a header!"',
        },
        {
          lineIndex: 4,
          incorrectText: 'The fans booed loudly — what a goal!',
          correction: 'The fans cheered loudly — what a goal!',
          explanation: 'Fans CHEER when their team scores — they shout in excitement and celebration. Booing is a negative reaction used when fans are unhappy. A goal always gets cheers, not boos.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the commentary line using A1 football vocabulary from any lesson in the course.',
      items: [
        {
          customerLine: 'Sofia: City have the ball near the penalty box. The striker receives a pass...',
          salespersonStart: 'Ronaldo: He dribbles past the defender and shoots!',
          suggestedCompletion: 'The goalkeeper dives but he can\'t reach it — the ball flies into the bottom corner of the net! GOAL! City score the opener after twenty minutes! One-nil! The crowd goes wild — "Get in!" The fans in the stands are singing and cheering. What an atmosphere!',
        },
        {
          customerLine: 'Ronaldo: It\'s half-time. City lead one-nil. The players go to the dressing room...',
          salespersonStart: 'Sofia: The manager gives his instructions for the second half.',
          suggestedCompletion: 'He tells the defenders to hold their position and not give away free kicks near the box. He tells the midfielders to keep possession and not lose the ball. The substitutes are warming up — one of them may come on in the second half if the team needs fresh energy.',
        },
        {
          customerLine: 'Sofia: United score an equaliser — one-one with five minutes to go!',
          salespersonStart: 'Ronaldo: City need a goal — the fans are shouting "Come on! Come on!"',
          suggestedCompletion: 'The referee shows four minutes of injury time on the board. City sprint forward on the attack. The winger crosses from the touchline. The striker jumps and volleys — the ball goes into the net! GOAL! A late winner for City! Two-one! The stadium is electric!',
        },
        {
          customerLine: 'Ronaldo: The referee blows the final whistle! City win the derby two-one!',
          salespersonStart: 'Sofia: The City fans are singing and cheering everywhere!',
          suggestedCompletion: 'The players celebrate on the pitch. The captain kisses the badge on his shirt. Supporters in the stands are hugging and singing. What a result — a late winner in a local derby against their biggest rivals! That is what football is all about. City win through and through!',
        },
      ],
    },
  },
};

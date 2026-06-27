import { Lesson } from '@/types/lesson';

export const kickPassShoot: Lesson = {
  slug: 'kick-pass-shoot',
  title: 'Kick, Pass, Shoot',
  subtitle: 'Core action verbs and body part vocabulary',
  level: 'A1-A2',
  description: 'Learn the core action verbs for playing football — kick, pass, shoot, tackle, dribble, cross, header, and volley — and how to say which body part you use.',
  heroImage: '/images/kick-pass-shoot-hero.png',

  vocabulary: [
    {
      word: 'KICK',
      partOfSpeech: 'verb',
      definition: 'To hit the ball with your foot.',
      example: 'Kick the ball hard toward the goal.',
      imageSlug: '/images/kick.png',
    },
    {
      word: 'PASS',
      partOfSpeech: 'verb',
      definition: 'To send the ball to a teammate using your foot.',
      example: 'Pass the ball before they tackle you.',
      imageSlug: '/images/pass.png',
    },
    {
      word: 'SHOOT',
      partOfSpeech: 'verb',
      definition: 'To kick the ball toward the goal to try to score.',
      example: 'Kai ran forward and shot at goal.',
      imageSlug: '/images/shoot.png',
    },
    {
      word: 'TACKLE',
      partOfSpeech: 'verb',
      definition: 'To take the ball from an opponent using your feet.',
      example: 'She made a great tackle to stop the attack.',
      imageSlug: '/images/tackle.png',
    },
    {
      word: 'DRIBBLE',
      partOfSpeech: 'verb',
      definition: 'To run with the ball, using small kicks to control it.',
      example: 'He dribbled past three defenders and scored.',
      imageSlug: '/images/dribble.png',
    },
    {
      word: 'CROSS',
      partOfSpeech: 'verb',
      definition: 'To kick the ball from the side into the middle of the pitch.',
      example: 'She crossed the ball and Kai headed it in.',
      imageSlug: '/images/cross.png',
    },
    {
      word: 'HEADER',
      partOfSpeech: 'noun',
      definition: 'When you hit the ball with your head.',
      example: 'He scored with a powerful header from a corner.',
      imageSlug: '/images/header.png',
    },
    {
      word: 'VOLLEY',
      partOfSpeech: 'noun / verb',
      definition: 'To kick the ball before it touches the ground. / A kick like this.',
      example: 'She hit a great volley from outside the box.',
      imageSlug: '/images/volley.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WITH YOUR RIGHT FOOT',
      definition: 'Using the right foot to kick or pass.',
      example: 'Try to shoot with your right foot this time.',
      imageSlug: '/images/with-your-right-foot.png',
    },
    {
      phrase: 'WITH YOUR LEFT FOOT',
      definition: 'Using the left foot to kick or pass.',
      example: 'He surprised the goalkeeper and scored with his left foot.',
      imageSlug: '/images/with-your-left-foot.png',
    },
    {
      phrase: 'WITH YOUR HEAD',
      definition: 'Using the head to direct the ball.',
      example: 'She scored with her head from a corner kick.',
      imageSlug: '/images/with-your-head.png',
    },
    {
      phrase: 'FIRST TOUCH',
      definition: 'The first time you touch the ball when you receive it.',
      example: 'A good first touch gives you more time on the ball.',
      imageSlug: '/images/first-touch.png',
    },
    {
      phrase: 'ON TARGET',
      definition: 'A shot that goes toward the goal (between the posts).',
      example: 'He had four shots on target but could not score.',
      imageSlug: '/images/on-target.png',
    },
    {
      phrase: 'INTO SPACE',
      definition: 'Kicking or passing to an empty area on the pitch.',
      example: 'Pass the ball into space for the striker to run onto.',
      imageSlug: '/images/into-space.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Kai, today we work on your basic actions. Let\'s start. [[Kick:to hit the ball with your foot]] the ball to me.',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Like this, Coach? With my right foot?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. Now [[pass:to send the ball to a teammate]] it to Sofia. Quick — don\'t hold it too long.',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Done! Sofia, pass it back.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Here you go, Kai! What do I do next, Coach?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Sofia, try to [[dribble:to run with the ball using small kicks to control it]] toward the goal. Small touches, keep it close to your foot.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'OK — like this? I\'m running with the ball!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good! Now [[cross:to kick the ball from the side into the middle]] it to Kai in the centre.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I\'ll try! Kai — heads!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'I got it! — I scored with a [[header:when you hit the ball with your head]]! Did you see that, Coach?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Excellent! Now [[shoot:to kick the ball toward the goal]] from outside the box. Try a [[volley:to kick the ball before it touches the ground]] this time.',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'A volley? I\'ll try... Yes! It\'s on target! This training is amazing!',
    },
  ],

  matchingExercise: [
    { word: 'KICK', definition: 'To hit the ball with your foot' },
    { word: 'PASS', definition: 'To send the ball to a teammate' },
    { word: 'SHOOT', definition: 'To kick the ball toward the goal' },
    { word: 'TACKLE', definition: 'To take the ball from an opponent using your feet' },
    { word: 'DRIBBLE', definition: 'To run with the ball using small kicks to control it' },
    { word: 'CROSS', definition: 'To kick the ball from the side into the middle' },
    { word: 'HEADER', definition: 'When you hit the ball with your head' },
    { word: 'VOLLEY', definition: 'To kick the ball before it touches the ground' },
  ],

  fillBlankExercise: [
    { before: '', after: 'the ball to your teammate — don\'t hold it too long.', answer: 'Pass' },
    { before: 'Kai ran forward and', after: 'at goal from outside the box.', answer: 'shot' },
    { before: 'She', after: 'past three defenders before scoring.', answer: 'dribbled' },
    { before: 'He scored with a', answer: 'header', after: 'from a corner kick.' },
    { before: 'She', after: 'the ball from the right side into the centre.', answer: 'crossed' },
    { before: 'The defender made a great', after: 'to stop the attack.', answer: 'tackle' },
    { before: 'She hit a great', after: 'before the ball touched the ground.', answer: 'volley' },
    { before: '', after: 'the ball hard — aim for the corner of the goal!', answer: 'Kick' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Coach Diallo ask Kai to do first?',
      options: ['Shoot at goal', 'Kick the ball to him', 'Dribble down the side'],
      correctIndex: 1,
    },
    {
      question: 'What does Coach Diallo tell Sofia to do with the ball?',
      options: ['Shoot it at goal', 'Dribble it toward the goal, then cross it', 'Tackle the defender'],
      correctIndex: 1,
    },
    {
      question: 'How does Kai score the first time?',
      options: ['With a volley', 'With his left foot', 'With a header'],
      correctIndex: 2,
    },
    {
      question: 'What does Coach Diallo ask Kai to try at the end?',
      options: ['A tackle', 'A pass with his left foot', 'A volley from outside the box'],
      correctIndex: 2,
    },
    {
      question: 'What does "on target" mean?',
      options: ['The ball went out of play', 'The shot went toward the goal', 'The player ran in the right direction'],
      correctIndex: 1,
    },
    {
      question: 'What is a tackle?',
      options: ['When you kick the ball into the net', 'When you run with the ball using small kicks', 'When you take the ball from an opponent using your feet'],
      correctIndex: 2,
    },
    {
      question: 'What is a cross?',
      options: ['A kick from the side into the middle', 'A kick toward the goal', 'A pass back to the goalkeeper'],
      correctIndex: 0,
    },
    {
      question: 'What does Sofia shout before she crosses the ball?',
      options: ['"Shoot!"', '"Heads!"', '"Pass!"'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Which football action do you think is the hardest — dribbling, shooting, or passing? Why?',
      'Do you prefer to use your right foot or your left foot? Or both?',
      'Can you mime the actions? Try: kick, pass, shoot, header, volley.',
    ],
  },

  completeSentenceExercise: {
    instructions: 'We use different body parts to play football. Choose the correct option.',
    items: [
      {
        sentence: 'You score a header when you hit the ball with your _____.',
        options: ['foot', 'chest', 'head'],
        correctIndex: 2,
        explanation: '"Head" is correct. A header is when a player hits the ball with their head to pass it or score a goal. It is commonly used from corners and crosses.',
      },
      {
        sentence: 'When you kick, you hit the ball with your _____.',
        options: ['knee', 'foot', 'shoulder'],
        correctIndex: 1,
        explanation: '"Foot" is correct. A kick is when you hit the ball with your foot. You can kick with the inside, outside, or the top of your foot.',
      },
      {
        sentence: 'A volley is when you kick the ball _____ it touches the ground.',
        options: ['after', 'when', 'before'],
        correctIndex: 2,
        explanation: '"Before" is correct. A volley is a kick made while the ball is still in the air — before it touches the ground. It is a difficult but exciting skill.',
      },
      {
        sentence: 'To dribble, you run with the ball and keep it _____ to your foot.',
        options: ['far', 'close', 'high'],
        correctIndex: 1,
        explanation: '"Close" is correct. When dribbling, you must keep the ball close to your foot so defenders cannot take it. Small, controlled touches help you dribble well.',
      },
      {
        sentence: 'A cross comes from the _____ of the pitch toward the centre.',
        options: ['side', 'middle', 'back'],
        correctIndex: 0,
        explanation: '"Side" is correct. A cross is a ball kicked from the side of the pitch (usually by a winger) into the centre, where strikers can shoot or head it.',
      },
      {
        sentence: 'When a shot goes toward the goal, we say it is _____ target.',
        options: ['at', 'on', 'in'],
        correctIndex: 1,
        explanation: '"On" is correct. We say a shot is "on target" when it goes toward the goal — between the posts. If it misses the goal, it is "off target".',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read the instruction, then choose the best action — A, B, or C.',
      items: [
        {
          customerLine: 'The coach says: "We need to score. Kai — you are in space near the goal. What do you do?"',
          options: [
            'Pass the ball back to the defender.',
            'Dribble away from the goal to find more space.',
            'Shoot! Kick the ball toward the goal as hard and accurately as possible.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. When you are in space near the goal, you should shoot. This is the best chance to score. Passing back or dribbling away wastes the opportunity.',
        },
        {
          customerLine: 'The coach says: "Sofia is running down the right side. The striker is in the centre. What should Sofia do?"',
          options: [
            'Cross the ball into the centre for the striker.',
            'Shoot from the side — it is a good angle.',
            'Dribble back and give it to the goalkeeper.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. When a player is running down the side with a teammate in the centre, the best action is to cross the ball. The striker can then shoot or head it.',
        },
        {
          customerLine: 'The coach says: "An opponent is about to receive the ball near our goal. What does the defender do?"',
          options: [
            'Cross the ball to the striker.',
            'Run away from the opponent.',
            'Make a tackle to try to take the ball.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. The defender should try to tackle the opponent to stop the attack. Running away lets the opponent score. Crossing the ball is for wingers, not defenders near their own goal.',
        },
        {
          customerLine: 'The coach says: "Kai just received the ball. His first touch is bad and the ball goes far from his foot. What happens next?"',
          options: [
            'Kai has more time to shoot because the ball is far away.',
            'Kai loses the ball because a defender can tackle him easily.',
            'Kai passes more easily because the ball is far from his foot.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A bad first touch means the ball goes away from your foot. This gives defenders time to tackle you and take the ball. A good first touch is very important.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong action words in this training dialogue. Find them as a group.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Kai, dribble the ball to Sofia — use the inside of your foot.' },
        { speaker: 'Kai', text: 'OK Coach. Sofia — catch!' },
        { speaker: 'Coach Diallo', text: 'Good. Sofia, now shoot the ball from the right side into the centre.' },
        { speaker: 'Sofia', text: 'Like this? I kicked it with my head!' },
        { speaker: 'Coach Diallo', text: 'No, Sofia — cross it with your foot. Now Kai, tackle at goal from outside the box.' },
        { speaker: 'Kai', text: 'Yes! It\'s on target — what a volley!' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'dribble the ball to Sofia',
          correction: 'pass the ball to Sofia',
          explanation: 'To PASS the ball means to send it to a teammate. To DRIBBLE means to run with the ball yourself. The coach wants Kai to send the ball to Sofia, so the correct word is "pass".',
        },
        {
          lineIndex: 2,
          incorrectText: 'shoot the ball from the right side into the centre',
          correction: 'cross the ball from the right side into the centre',
          explanation: 'To CROSS the ball means to kick it from the side into the centre. To SHOOT means to kick toward the goal. From the side, you cross — not shoot.',
        },
        {
          lineIndex: 4,
          incorrectText: 'tackle at goal from outside the box',
          correction: 'shoot at goal from outside the box',
          explanation: 'To SHOOT at goal means to kick the ball toward the goal to score. To TACKLE means to take the ball from an opponent. Kai should SHOOT, not tackle.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using action words from this lesson. Compare your answers, then click to see one possible answer.',
      items: [
        {
          customerLine: 'Coach Diallo: Kai, what is the difference between a pass and a cross?',
          salespersonStart: 'Kai: A pass is when you send the ball to a teammate.',
          suggestedCompletion: 'A cross is when you kick the ball from the side of the pitch into the centre — usually so a striker can shoot or head it. Both are a kind of kick, but they have different directions.',
        },
        {
          customerLine: 'Sofia: What is a volley? I don\'t understand.',
          salespersonStart: 'Kai: A volley is when you kick the ball',
          suggestedCompletion: 'before it touches the ground. The ball comes to you in the air and you kick it straight away. It is a very difficult skill but it looks amazing when you score one.',
        },
        {
          customerLine: 'Sofia: How do I get better at dribbling?',
          salespersonStart: 'Coach Diallo: Keep the ball close to your foot.',
          suggestedCompletion: 'Use small touches and always look up so you can see the other players. Change direction quickly to get past defenders. Practice every day and it will become natural.',
        },
        {
          customerLine: 'Coach Diallo: Kai, your shot went over the goal. What went wrong?',
          salespersonStart: 'Kai: I think I hit it too high.',
          suggestedCompletion: 'I should have used the inside of my foot for more control. When I want to shoot with power, I need to keep the ball low and aim for the corners of the goal. I\'ll practice more.',
        },
      ],
    },
  },
};

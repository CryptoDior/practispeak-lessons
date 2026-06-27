import { Lesson } from '@/types/lesson';

export const runSprintStop: Lesson = {
  slug: 'run-sprint-stop',
  title: 'Run, Sprint, Stop',
  subtitle: 'Movement verbs and simple on-pitch instructions',
  level: 'A1-A2',
  description: 'Learn the movement verbs used on a football pitch — run, sprint, stop, jump, turn, jog, block, and slide — and how to give and understand simple instructions like "Sprint to the ball!"',
  heroImage: '/images/run-sprint-stop-hero.png',

  vocabulary: [
    {
      word: 'RUN',
      partOfSpeech: 'verb',
      definition: 'To move quickly on foot.',
      example: 'Run to the ball before the defender gets there.',
      imageSlug: '/images/run.png',
    },
    {
      word: 'SPRINT',
      partOfSpeech: 'verb',
      definition: 'To run as fast as you possibly can.',
      example: 'The winger sprinted down the side of the pitch.',
      imageSlug: '/images/sprint.png',
    },
    {
      word: 'STOP',
      partOfSpeech: 'verb',
      definition: 'To not move. To stand still.',
      example: 'Stop and look before you pass.',
      imageSlug: '/images/stop.png',
    },
    {
      word: 'JUMP',
      partOfSpeech: 'verb',
      definition: 'To push your body up off the ground.',
      example: 'Jump to head the ball from the corner.',
      imageSlug: '/images/jump.png',
    },
    {
      word: 'TURN',
      partOfSpeech: 'verb',
      definition: 'To change direction quickly with the ball.',
      example: 'Turn quickly and face the goal.',
      imageSlug: '/images/turn.png',
    },
    {
      word: 'JOG',
      partOfSpeech: 'verb',
      definition: 'To run slowly, at an easy pace.',
      example: 'Jog back to your position after the attack.',
      imageSlug: '/images/jog.png',
    },
    {
      word: 'BLOCK',
      partOfSpeech: 'verb',
      definition: 'To stop the ball with your body.',
      example: 'The defender blocked the shot with his chest.',
      imageSlug: '/images/block.png',
    },
    {
      word: 'SLIDE',
      partOfSpeech: 'verb',
      definition: 'To move quickly along the ground, usually to make a tackle.',
      example: 'The defender slid in to take the ball.',
      imageSlug: '/images/slide.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'SPRINT TO THE BALL',
      definition: 'Run as fast as you can toward the ball.',
      example: 'Sprint to the ball — don\'t let them get there first!',
      imageSlug: '/images/sprint-to-the-ball.png',
    },
    {
      phrase: 'GET BACK',
      definition: 'Move quickly back toward your own goal to defend.',
      example: 'Get back! They\'re on the attack!',
      imageSlug: '/images/get-back.png',
    },
    {
      phrase: 'HOLD YOUR POSITION',
      definition: 'Stay where you are on the pitch and do not follow the ball.',
      example: 'Hold your position — don\'t follow the ball.',
      imageSlug: '/images/hold-your-position.png',
    },
    {
      phrase: 'MAKE A RUN',
      definition: 'Move quickly into space to receive a pass.',
      example: 'Make a run behind the defender — I\'ll pass to you!',
      imageSlug: '/images/make-a-run.png',
    },
    {
      phrase: 'DROP BACK',
      definition: 'Move toward your own goal to help the defence.',
      example: 'Drop back and help the defenders when we lose the ball.',
      imageSlug: '/images/drop-back.png',
    },
    {
      phrase: 'PUSH UP',
      definition: 'Move forward toward the opponent\'s goal as a team.',
      example: 'Push up! We need to score — get higher up the pitch!',
      imageSlug: '/images/push-up.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Listen carefully. On the pitch, you need to understand my instructions immediately. Ready?',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Ready, Coach!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. First — [[sprint:to run as fast as you possibly can]] to the ball! Go!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'I\'m running as fast as I can, Coach!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: '[[Stop:to not move, to stand still]]! Now [[turn:to change direction quickly with the ball]] and face the goal.',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'OK — I\'m facing the goal. Now what?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Now make a run behind the defender — [[jump:to push your body up off the ground]] for the header!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'I got it — but the shot is coming at me fast!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: '[[Block:to stop the ball with your body]] it! Get your body in front!',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Blocked! Coach, can I also [[slide:to move quickly along the ground to tackle]] to take the ball?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Yes, but only when you are sure. After the tackle, [[jog:to run slowly at an easy pace]] back to your position.',
    },
    {
      speaker: 'Kai',
      speakerColor: 'green',
      speakerAvatar: '/images/kai-icon.png',
      text: 'Understood. Sprint to attack, jog to recover. Got it, Coach!',
    },
  ],

  matchingExercise: [
    { word: 'RUN', definition: 'To move quickly on foot' },
    { word: 'SPRINT', definition: 'To run as fast as you possibly can' },
    { word: 'STOP', definition: 'To not move; to stand still' },
    { word: 'JUMP', definition: 'To push your body up off the ground' },
    { word: 'TURN', definition: 'To change direction quickly' },
    { word: 'JOG', definition: 'To run slowly at an easy pace' },
    { word: 'BLOCK', definition: 'To stop the ball with your body' },
    { word: 'SLIDE', definition: 'To move quickly along the ground to tackle' },
  ],

  fillBlankExercise: [
    { before: '', after: 'to the ball before the defender gets there!', answer: 'Sprint' },
    { before: '', after: 'and look for a teammate before you pass.', answer: 'Stop' },
    { before: '', after: 'to head the ball from the corner kick.', answer: 'Jump' },
    { before: '', answer: 'Turn', after: 'quickly and face the goal — then shoot!' },
    { before: 'After the attack,', after: 'back to your position slowly.', answer: 'jog' },
    { before: 'The defender used his chest to', after: 'the shot.', answer: 'block' },
    { before: 'She', after: 'in to take the ball from the attacker.', answer: 'slid' },
    { before: '', after: 'back — they are attacking our goal!', answer: 'Get' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the difference between running and sprinting?',
      options: ['There is no difference', 'Sprinting is running as fast as possible', 'Jogging is faster than running'],
      correctIndex: 1,
    },
    {
      question: 'What does Coach Diallo say after "Stop"?',
      options: ['Sprint to the ball', 'Turn and face the goal', 'Jog back to position'],
      correctIndex: 1,
    },
    {
      question: 'What does "make a run" mean?',
      options: ['To jog slowly around the pitch', 'To move quickly into space to receive a pass', 'To sprint back to defend'],
      correctIndex: 1,
    },
    {
      question: 'When does Coach Diallo say you can slide?',
      options: ['Anytime you want', 'Only when you are sure you will win the ball', 'Only in training'],
      correctIndex: 1,
    },
    {
      question: 'What does Kai do after making a slide tackle?',
      options: ['Sprints forward', 'Jogs back to his position', 'Stops and waits'],
      correctIndex: 1,
    },
    {
      question: 'What does "hold your position" mean?',
      options: ['Run forward to help attack', 'Stay where you are on the pitch', 'Slide tackle the opponent'],
      correctIndex: 1,
    },
    {
      question: 'What does "get back" mean during a match?',
      options: ['Move forward to score', 'Jog around the pitch', 'Move quickly back toward your own goal to defend'],
      correctIndex: 2,
    },
    {
      question: 'What does Kai understand at the end of the dialogue?',
      options: ['Jog to attack, slide to defend', 'Sprint to attack, jog to recover', 'Block when attacking, turn when defending'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Can you mime these actions? Try: run, sprint, stop, jump, turn, jog.',
      'When do you think a player needs to sprint? When do they jog?',
      'Have you ever heard a coach shout instructions during a match? What did they say?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'We use imperatives (verb + !) to give instructions in football. Choose the correct verb.',
    items: [
      {
        sentence: '_____ to the ball — don\'t let the defender get there first!',
        options: ['Jog', 'Sprint', 'Stop'],
        correctIndex: 1,
        explanation: '"Sprint" is correct. When you need to get to the ball quickly before an opponent, you sprint — run as fast as you can. Jogging is too slow in this situation.',
      },
      {
        sentence: '_____ back! The other team is attacking our goal!',
        options: ['Jump', 'Push up', 'Get'],
        correctIndex: 2,
        explanation: '"Get" is correct — the full phrase is "Get back!" This is a common football instruction to tell players to move back toward their own goal to defend.',
      },
      {
        sentence: '_____ your position — don\'t follow the ball everywhere.',
        options: ['Hold', 'Block', 'Slide'],
        correctIndex: 0,
        explanation: '"Hold" is correct — the full phrase is "Hold your position." This tells a player to stay in their place on the pitch and not run after the ball.',
      },
      {
        sentence: '_____ the shot! Get your body in front of it!',
        options: ['Jog', 'Turn', 'Block'],
        correctIndex: 2,
        explanation: '"Block" is correct. To block a shot means to stop the ball with your body. Defenders and goalkeepers both use this technique.',
      },
      {
        sentence: 'After the tackle,  _____ slowly back to your position.',
        options: ['sprint', 'jog', 'slide'],
        correctIndex: 1,
        explanation: '"Jog" is correct. After making a tackle or an effort, you jog slowly back to your position to recover your energy before the next action.',
      },
      {
        sentence: '_____ a run behind the defender — I\'ll pass the ball to you!',
        options: ['Make', 'Block', 'Slide'],
        correctIndex: 0,
        explanation: '"Make" is correct — the phrase is "make a run." This means to run quickly into space so your teammate can pass the ball to you.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. The coach shouts an instruction. Choose the correct action — A, B, or C.',
      items: [
        {
          customerLine: 'Coach shouts: "Sprint to the ball!"',
          options: [
            'You jog slowly toward the ball.',
            'You stop and wait for the ball to come to you.',
            'You run as fast as you can to reach the ball before the opponent.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. "Sprint" means to run as fast as possible. When the coach says "sprint to the ball", you must react immediately and get there first.',
        },
        {
          customerLine: 'Coach shouts: "Get back!"',
          options: [
            'You move forward to help the attack.',
            'You move quickly back toward your own goal to help defend.',
            'You stop and wait in the centre circle.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Get back" is an urgent instruction to move toward your own goal. The other team is probably attacking and needs to be stopped.',
        },
        {
          customerLine: 'Coach shouts: "Hold your position!"',
          options: [
            'You run toward the ball to help your teammate.',
            'You stay exactly where you are on the pitch.',
            'You slide in for a tackle.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Hold your position" means stay where you are. Coaches say this when players are moving out of position and leaving spaces for the other team.',
        },
        {
          customerLine: 'Coach shouts: "Push up!"',
          options: [
            'All defenders stay near their own goal.',
            'The whole team moves forward toward the opponent\'s goal.',
            'One player sprints back to defend.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Push up" means the whole team moves higher up the pitch, closer to the opponent\'s goal. This puts more pressure on the other team.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three wrong movement words in this training session. Find them as a group.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Right, listen! When I say "go", slide to the ball as fast as you can.' },
        { speaker: 'Kai', text: 'Sprint to the ball — yes, Coach!' },
        { speaker: 'Coach Diallo', text: 'Good. Now stop. Turn and sprint the goal.' },
        { speaker: 'Kai', text: 'OK — I\'m facing the goal, ready to shoot.' },
        { speaker: 'Coach Diallo', text: 'Now jump your position — don\'t follow the ball!' },
        { speaker: 'Kai', text: 'Got it. Hold my position. And jog back after I tackle. Understood!' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'slide to the ball as fast as you can',
          correction: 'sprint to the ball as fast as you can',
          explanation: 'To SPRINT means to run as fast as possible. To SLIDE means to move along the ground for a tackle. When you need to reach the ball quickly, you SPRINT.',
        },
        {
          lineIndex: 2,
          incorrectText: 'sprint the goal',
          correction: 'face the goal',
          explanation: 'After turning, the instruction is to FACE the goal — look toward it and get ready to shoot. "Sprint the goal" is not correct English.',
        },
        {
          lineIndex: 4,
          incorrectText: 'jump your position',
          correction: 'hold your position',
          explanation: '"Hold your position" means to stay where you are. "Jump your position" does not make sense. You HOLD your position.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using movement words and instructions from this lesson.',
      items: [
        {
          customerLine: 'Sofia: What is the difference between running and sprinting?',
          salespersonStart: 'Kai: Running is moving fast.',
          suggestedCompletion: 'Sprinting is running as fast as you possibly can — it is your maximum speed. In a match, you sprint to win a race for the ball or get behind a defender.',
        },
        {
          customerLine: 'Sofia: The coach keeps shouting "drop back!" What does that mean?',
          salespersonStart: 'Kai: It means move toward our own goal.',
          suggestedCompletion: 'When we lose the ball, the coach wants everyone to drop back and defend. We need to get between the ball and our goal quickly to stop the other team from scoring.',
        },
        {
          customerLine: 'Coach Diallo: Kai, when should you slide tackle?',
          salespersonStart: 'Kai: Only when I am sure I will win the ball.',
          suggestedCompletion: 'If I go in with a slide tackle and miss, the opponent gets past me easily. It is better to stay on my feet and wait for the right moment. I should only slide when it is the last option.',
        },
        {
          customerLine: 'Sofia: Why does the coach tell players to "hold their position"?',
          salespersonStart: 'Kai: Because if everyone follows the ball,',
          suggestedCompletion: 'there are lots of empty spaces on the pitch. The other team can use those spaces to attack. When players hold their positions, the team stays organised and harder to beat.',
        },
      ],
    },
  },
};

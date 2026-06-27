import { Lesson } from '@/types/lesson';

export const shotsAndSaves: Lesson = {
  slug: 'shots-and-saves',
  title: 'Shots and Saves',
  subtitle: 'Shooting and goalkeeper vocabulary with the present continuous',
  level: 'A2',
  description: 'Learn the key shooting and goalkeeping words — header, volley, chip, save, parry, spill — and practise describing these actions as they happen using the present continuous.',
  heroImage: '/images/shots-and-saves-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Present Continuous — describing shots and saves as they happen',
    description: 'Football commentary uses the present continuous constantly. When a shot is happening right now, we use IS/ARE + verb-ing — not the simple present or past.',
    positivePattern: 'Subject + IS/ARE + verb-ing',
    positiveExample: '"The striker is volleying it from the edge of the box!"',
    negativePattern: 'Subject + ISN\'T/AREN\'T + verb-ing',
    negativeExample: '"She isn\'t shooting — she\'s pulling it back for the midfielder."',
    positiveExamples: [
      { sentence: 'He\'s heading it toward the top corner!', note: '(happening right now)' },
      { sentence: 'The goalkeeper is parrying the shot wide.', note: '(in progress)' },
      { sentence: 'She\'s chipping it over the keeper — is it in?!', note: '(live action)' },
      { sentence: 'They\'re shooting from distance — not afraid!', note: '(at this moment)' },
    ],
    negativeExamples: [
      { sentence: 'He isn\'t diving — the ball is too far away.', note: '(not happening now)' },
      { sentence: 'She isn\'t heading it — she\'s controlling it.', note: '(not in progress)' },
    ],
  },

  vocabulary: [
    {
      word: 'HEADER',
      partOfSpeech: 'noun',
      definition: 'A shot or pass made by striking the ball with the head.',
      example: 'He\'s jumping — and that\'s a brilliant header into the top corner!',
      imageSlug: '/images/header.png',
    },
    {
      word: 'VOLLEY',
      partOfSpeech: 'noun / verb',
      definition: 'Striking the ball while it is in the air, before it bounces.',
      example: 'She\'s volleying it from 20 metres — what a strike!',
      imageSlug: '/images/volley.png',
    },
    {
      word: 'CHIP',
      partOfSpeech: 'verb',
      definition: 'To lift the ball over the goalkeeper with a delicate, short flick of the foot.',
      example: 'He\'s chipping it over the goalkeeper — is that going in?!',
      imageSlug: '/images/chip-shot.png',
    },
    {
      word: 'SAVE',
      partOfSpeech: 'noun / verb',
      definition: 'When the goalkeeper stops the ball from going into the goal.',
      example: 'What a save! The goalkeeper is diving to her right and pushing it out.',
      imageSlug: '/images/save.png',
    },
    {
      word: 'PARRY',
      partOfSpeech: 'verb',
      definition: 'To deflect or push the ball away — but not hold it securely.',
      example: 'He\'s parrying the shot — but the rebound is falling to the striker!',
      imageSlug: '/images/parry.png',
    },
    {
      word: 'SPILL',
      partOfSpeech: 'verb',
      definition: 'To drop or fumble the ball after attempting a save — a goalkeeper mistake.',
      example: 'The keeper is spilling it — the striker is following up!',
      imageSlug: '/images/spill.png',
    },
    {
      word: 'DIVE',
      partOfSpeech: 'verb',
      definition: 'To throw your body to one side to reach a shot going wide of you.',
      example: 'She\'s diving to her left — fingertip save! Brilliant!',
      imageSlug: '/images/dive.png',
    },
    {
      word: 'PALM',
      partOfSpeech: 'verb',
      definition: 'To push the ball away using the palm of the hand — common for shots heading into the top corner.',
      example: 'He\'s palming it over the bar — that would have been a goal!',
      imageSlug: '/images/palm.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'ON TARGET',
      definition: 'A shot heading toward the goal — it would have gone in without the save.',
      example: 'The shot is on target — the goalkeeper has to save it!',
      imageSlug: '/images/on-target.png',
    },
    {
      phrase: 'OFF TARGET',
      definition: 'A shot that misses the goal completely — wide, over, or blocked.',
      example: 'He blazed it off target — the shot went high into the stands.',
      imageSlug: '/images/off-target.png',
    },
    {
      phrase: 'PULL OFF A SAVE',
      definition: 'To make a great save — especially one that surprises people.',
      example: 'She pulled off an incredible save — nobody thought she was getting to that ball.',
      imageSlug: '/images/pull-off-a-save.png',
    },
    {
      phrase: 'KEEPER\'S BALL',
      definition: 'A ball that the goalkeeper should come and claim — it is their responsibility.',
      example: 'Keeper\'s ball! She needs to come and claim that cross before the striker reaches it.',
      imageSlug: '/images/keepers-ball.png',
    },
    {
      phrase: 'FOLLOW UP',
      definition: 'To be ready to shoot if the goalkeeper spills or parries the ball.',
      example: 'He followed up the parry and tapped in the rebound — always be ready.',
      imageSlug: '/images/follow-up.png',
    },
    {
      phrase: 'GET YOUR HEAD ON IT',
      definition: 'To make contact with a cross or high ball using your head.',
      example: 'Get your head on it! She\'s crossing — someone needs to attack that ball.',
      imageSlug: '/images/get-your-head-on-it.png',
    },
  ],

  onThePitch: {
    instructions: 'These are shouts players, goalkeepers, and coaches use in shooting and goalkeeping situations. Learn them — they happen every game.',
    items: [
      {
        cue: 'Shoot!',
        meaning: 'Stop passing — take the shot now.',
        usage: 'Shouted by teammates or the crowd when a player is in a good position and hesitating. They have a clear sight of goal and need to strike the ball immediately rather than looking for another pass.',
        imageSlug: 'otp-shoot',
      },
      {
        cue: 'Get your head on it!',
        meaning: 'Attack the cross — head the ball.',
        usage: 'Shouted when a cross or high ball is coming in and a teammate needs to attack it with their head. You need to jump, time your run, and make contact.',
        imageSlug: 'otp-get-your-head-on-it',
      },
      {
        cue: 'Keeper!',
        meaning: 'The goalkeeper is coming to claim the ball — leave it to them.',
        usage: 'The goalkeeper shouts this loud and clear to tell outfield players that they are coming to collect the ball. When you hear "Keeper!" you must get out of the way immediately.',
        imageSlug: 'otp-keeper',
      },
      {
        cue: 'One on one!',
        meaning: 'The striker is through on goal — just them and the goalkeeper.',
        usage: 'Shouted as a warning — usually by defenders or the coach — when a striker has beaten the defensive line and is heading toward goal with only the goalkeeper to beat.',
        imageSlug: 'otp-one-on-one',
      },
      {
        cue: 'Corner!',
        meaning: 'The ball has gone off the goalkeeper or a defender and out for a corner kick.',
        usage: 'Shouted by players — usually attackers — to signal that the ball went off a defending player last and the attacking team should get a corner. Also shouted by referees and assistants.',
        imageSlug: 'otp-corner',
      },
      {
        cue: 'Follow it in!',
        meaning: 'Chase the shot — be ready for the rebound if the keeper spills it.',
        usage: 'Shouted to encourage a striker to run toward goal after a shot is taken. If the keeper parries or spills the ball, the player following in can score. Always follow your shots.',
        imageSlug: 'otp-follow-it-in',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Ronaldo — you\'re in a shooting position. The keeper is off his line. What do you do?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I\'m [[chipping:lifting the ball over the goalkeeper with a delicate flick]] it — over his head!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'He\'s chipping it! Is it going in? The keeper is diving but — he\'s [[palming:pushing the ball away with the palm of the hand]] it over the bar!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good attempt. Now Sofia — cross it in. Ronaldo, attack the ball with your head!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'She\'s [[crossing:delivering a pass from wide into the penalty area]] it in — I\'m jumping — and I\'m heading it toward the bottom corner!',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The keeper is [[diving:throwing his body to one side to reach the shot]] to his right — and he\'s [[parrying:deflecting the ball away but not holding it]] it! The ball is loose!',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I followed it in! The keeper [[spilled:dropped the ball after attempting a save]] it and I tapped it home!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Brilliant! Always follow your shots. If the keeper parries or spills it, you are there to score. Now — what is the difference between a save and a parry?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'A [[save:when the goalkeeper stops the ball going into the goal]] means the keeper holds or controls it safely. A [[parry:deflecting the ball away without holding it]] means they push it away — but they don\'t hold it.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Correct. A parry is dangerous — the ball can fall to an attacker. A good keeper tries to hold the ball or push it away from danger. Ronaldo — one more shot. [[Volley:striking the ball while it is in the air]] it this time.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The ball is dropping — I\'m volleying it — on target! What a strike!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Yes! That\'s on target. When your shot is on target, the keeper has to work. When it\'s off target, it means nothing. Get it on target first — then worry about power.',
    },
  ],

  matchingExercise: [
    { word: 'HEADER', definition: 'Striking the ball with the head' },
    { word: 'VOLLEY', definition: 'Striking the ball while it is in the air before it bounces' },
    { word: 'CHIP', definition: 'Lifting the ball over the goalkeeper with a delicate flick' },
    { word: 'SAVE', definition: 'When the goalkeeper stops the ball from going into the goal' },
    { word: 'PARRY', definition: 'Deflecting the ball away without holding it securely' },
    { word: 'SPILL', definition: 'Dropping the ball after attempting a save — a goalkeeper mistake' },
    { word: 'DIVE', definition: 'Throwing your body to one side to reach a shot' },
    { word: 'PALM', definition: 'Pushing the ball away using the palm of the hand' },
  ],

  fillBlankExercise: [
    { before: 'He\'s', answer: 'heading', after: 'it toward the top corner — brilliant jump and contact!' },
    { before: 'The keeper is', answer: 'diving', after: 'to her left — fingertip save!' },
    { before: 'She', answer: 'palmed', after: 'it over the bar — it would have been a goal.' },
    { before: 'He\'s', answer: 'volleying', after: 'it from 25 metres — what a strike!' },
    { before: 'The keeper', answer: 'spilled', after: 'it — the striker followed in and scored the rebound.' },
    { before: 'The shot is', answer: 'on target', after: '— the goalkeeper has to make a save.' },
    { before: 'She\'s', answer: 'chipping', after: 'it over the keeper — he was off his line.' },
    { before: 'He', answer: 'parried', after: 'the shot but the rebound fell to the striker.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Ronaldo do first when the keeper is off his line?',
      options: ['He volleys it', 'He chips it over the keeper', 'He heads it'],
      correctIndex: 1,
    },
    {
      question: 'What is the difference between a save and a parry?',
      options: [
        'A save is when the keeper dives; a parry is when they stand still',
        'A save means the keeper holds or controls it safely; a parry pushes it away without holding',
        'They are the same thing',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does Coach Diallo say about parrying the ball?',
      options: [
        'It is always the best option',
        'It is dangerous because the ball can fall to an attacker',
        'It means the striker cannot score',
      ],
      correctIndex: 1,
    },
    {
      question: 'Why does Coach Diallo say to always follow your shots?',
      options: [
        'Because you might miss the goal',
        'Because if the keeper parries or spills it, you can score the rebound',
        'Because the referee needs to see you trying',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "on target" mean?',
      options: [
        'The shot misses the goal completely',
        'The shot is heading toward the goal and would go in without a save',
        'The shot hits the post',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does Coach Diallo say is the most important thing about shooting?',
      options: ['Power — shoot as hard as possible', 'Get it on target first, then worry about power', 'Always chip the goalkeeper'],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses the present continuous correctly?',
      options: [
        'The keeper dives to his right right now.',
        'The keeper is diving to his right.',
        'The keeper dived to his right right now.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "spill" mean in football?',
      options: [
        'When the striker shoots over the bar',
        'When the goalkeeper drops the ball after attempting a save',
        'When a player falls over on the pitch',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the present continuous. Choose the correct form.',
    items: [
      {
        sentence: 'The goalkeeper _____ (dive) to his right — brilliant save!',
        options: ['dived', 'is diving', 'dives'],
        correctIndex: 1,
        explanation: '"Is diving" is correct. This is a live action happening right now — IS + verb-ing (present continuous). "Dived" is past tense. "Dives" is present simple (for habits).',
      },
      {
        sentence: 'She _____ (volley) it from the edge of the box — what a strike!',
        options: ['is volleying', 'volleys', 'volleyed'],
        correctIndex: 0,
        explanation: '"Is volleying" is correct. Present continuous (IS + verb-ing) describes the action as it happens in real time. "Volleys" is present simple and "volleyed" is past.',
      },
      {
        sentence: 'He _____ (not / shoot) — he\'s pulling it back for the midfielder.',
        options: ['isn\'t shooting', 'doesn\'t shoot', 'aren\'t shooting'],
        correctIndex: 0,
        explanation: '"Isn\'t shooting" is correct. Negative present continuous with a singular subject (he) uses ISN\'T + verb-ing. "Doesn\'t shoot" is present simple negative. "Aren\'t" is plural.',
      },
      {
        sentence: 'The keeper _____ (palm) it over the bar — it would have been a goal!',
        options: ['palmed', 'is palming', 'palms'],
        correctIndex: 1,
        explanation: '"Is palming" is correct. The action is in progress right now — IS + verb-ing. "Palmed" is past tense. "Palms" describes a habit.',
      },
      {
        sentence: 'Look — the striker _____ (head) it toward the bottom corner!',
        options: ['headed', 'heads', 'is heading'],
        correctIndex: 2,
        explanation: '"Is heading" is correct. "Look" signals that the action is happening right now — IS + verb-ing is required. "Headed" is past. "Heads" is present simple.',
      },
      {
        sentence: 'They _____ (follow) the shot in — one of them will score the rebound!',
        options: ['followed', 'are following', 'follow'],
        correctIndex: 1,
        explanation: '"Are following" is correct. The subject is plural (they) and the action is happening right now — ARE + verb-ing. "Followed" is past. "Follow" is present simple.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. You are in a shooting situation. Choose the best action — A, B, or C.',
      items: [
        {
          customerLine: 'The goalkeeper is off his line and you have the ball 20 metres out. Coach shouts: "Chip him!"',
          options: [
            'You shoot hard and low along the ground.',
            'You delicately lift the ball over the goalkeeper with a short flick.',
            'You pass to a teammate instead.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. When the goalkeeper is off his line, a chip — lifting the ball over him — is the perfect technique. Shooting hard (A) is easier for the keeper to save if they\'re nearby. Passing (C) misses the opportunity.',
        },
        {
          customerLine: 'A cross comes in and you are unmarked six metres from goal. Coach shouts: "Get your head on it!"',
          options: [
            'You let the ball bounce and shoot with your foot.',
            'You jump and attack the cross with your head.',
            'You control the ball with your chest first.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Get your head on it!" means attack the cross immediately with a header. Waiting for the ball to bounce (A) or controlling with the chest (C) gives defenders time to recover. Attack the ball early.',
        },
        {
          customerLine: 'The goalkeeper parries a shot and the ball falls loose in the box. Coach shouts: "Follow it in!"',
          options: [
            'You stop and wait to see where the ball goes.',
            'You sprint toward the loose ball and shoot.',
            'You stay in your position in case the team loses possession.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Follow it in!" means sprint toward the goal immediately after a shot. When a keeper parries, the ball is loose — the player following in can score the rebound. Waiting (A) or staying back (C) means missing the chance.',
        },
        {
          customerLine: 'A high ball is coming into the box. The goalkeeper shouts: "Keeper!"',
          options: [
            'You jump and try to head the ball before the keeper gets it.',
            'You immediately move away and let the goalkeeper claim it.',
            'You try to knock the ball out of the goalkeeper\'s hands.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. When the goalkeeper shouts "Keeper!" it means they are coming to claim the ball. Outfield players must get out of the way. Challenging the keeper (A) or trying to knock the ball away (C) could be a foul.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this commentary excerpt. Find them as a group.',
      dialogue: [
        { speaker: 'Commentator', text: 'The striker is in a great position — he shoots right now!' },
        { speaker: 'Commentator', text: 'The goalkeeper dive to his left — brilliant reaction!' },
        { speaker: 'Commentator', text: 'He parries it — but the ball is fall to the striker!' },
        { speaker: 'Commentator', text: 'She\'s following in — and she volleys it into the net! Goal!' },
        { speaker: 'Commentator', text: 'What a move — the striker chip it over the keeper perfectly.' },
        { speaker: 'Commentator', text: 'The goalkeeper is making an incredible save — the shot was on target.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'he shoots right now',
          correction: 'he\'s shooting right now',
          explanation: '"Right now" signals a live, in-progress action — we need the present continuous: HE\'S + verb-ing. "Shoots" is present simple (for habits). The correct form is "he\'s shooting."',
        },
        {
          lineIndex: 1,
          incorrectText: 'The goalkeeper dive to his left',
          correction: 'The goalkeeper is diving to his left',
          explanation: 'This is a live action — the goalkeeper is making the dive at this moment. Present continuous (IS + verb-ing) is needed. "Dive" with no auxiliary is incorrect.',
        },
        {
          lineIndex: 2,
          incorrectText: 'the ball is fall to the striker',
          correction: 'the ball is falling to the striker',
          explanation: 'Present continuous requires IS/ARE + verb-ING. "Is fall" is missing the -ing ending. The correct form is "the ball is falling."',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using present continuous and shooting/goalkeeping vocabulary from this lesson.',
      items: [
        {
          customerLine: 'Ronaldo: Coach — what is the best way to beat a goalkeeper one on one?',
          salespersonStart: 'Coach Diallo: Stay calm — most players panic and shoot too early.',
          suggestedCompletion: 'Wait for the goalkeeper to move. If they come toward you, chip it over them. If they stand still, shoot low to the corner — keepers find low shots hardest. The key is composure. If you rush the shot, the keeper is ready. Make them move first.',
        },
        {
          customerLine: 'Sofia: Why is following in a shot so important?',
          salespersonStart: 'Coach Diallo: Because goalkeepers are not perfect — they parry, they spill, they drop the ball.',
          suggestedCompletion: 'If you are already sprinting toward goal when the shot is taken, you arrive at the loose ball first. The keeper is still recovering from the first shot. A tap-in from a rebound can look simple — but it only happens because the player followed in. Always follow your shots.',
        },
        {
          customerLine: 'Sofia: What is the difference between a volley and a header?',
          salespersonStart: 'Coach Diallo: A volley is when you hit the ball with your foot before it bounces.',
          suggestedCompletion: 'A header is when you use your head to make contact with the ball. Both are used when the ball is in the air — the choice depends on where the ball is. If it is at chest or head height, use a header. If it is lower — at knee or waist height — a volley is more natural. Both require good timing.',
        },
        {
          customerLine: 'Ronaldo: What should a goalkeeper do after parrying a shot?',
          salespersonStart: 'Coach Diallo: Push it away from the danger area — not back into the middle.',
          suggestedCompletion: 'A good goalkeeper pushes the ball wide toward the corner flag, away from the strikers who are following in. Pushing it back into the centre of the box is dangerous because the striker is already there. Better to give a corner than a goal. After parrying, the keeper must recover quickly and get back to their feet.',
        },
      ],
    },
  },
};

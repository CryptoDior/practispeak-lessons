import { Lesson } from '@/types/lesson';

export const setPieces: Lesson = {
  slug: 'set-pieces',
  title: 'Set Pieces',
  subtitle: 'Corner kicks, free kicks, throw-ins, and penalties — vocabulary and rules',
  level: 'A2',
  description: 'Learn the key set piece words — corner kick, free kick, throw-in, penalty, wall — and understand how and why they happen. Practise explaining rules using "have to" and "must".',
  heroImage: '/images/set-pieces-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Have to / Must — explaining rules and obligations',
    description: 'We use "have to" and "must" to talk about rules — things that are required. In football, there are many rules about set pieces: what players have to do and what they must not do.',
    positivePattern: 'Subject + HAVE TO / MUST + base verb',
    positiveExample: '"The goalkeeper has to stay on the line until the ball is kicked."',
    negativePattern: 'Subject + MUST NOT / DON\'T HAVE TO + base verb',
    negativeExample: '"The wall must not move before the kick is taken."',
    positiveExamples: [
      { sentence: 'The thrower has to keep both feet on the ground.', note: '(rule — required)' },
      { sentence: 'Players must stand at least 10 yards from the wall.', note: '(rule — required)' },
      { sentence: 'The kicker has to wait for the referee\'s whistle.', note: '(obligation)' },
      { sentence: 'You must use both hands for a throw-in.', note: '(rule — required)' },
    ],
    negativeExamples: [
      { sentence: 'The goalkeeper must not move before the penalty is taken.', note: '(prohibition)' },
      { sentence: 'You don\'t have to shoot at a free kick — you can pass instead.', note: '(not obligatory)' },
    ],
  },

  vocabulary: [
    {
      word: 'CORNER KICK',
      partOfSpeech: 'noun',
      definition: 'A kick taken from the corner of the pitch, awarded when the ball goes out over the goal line after touching a defending player.',
      example: 'The defender put it out for a corner kick — now the attackers are lining up.',
      imageSlug: '/images/corner-kick.png',
    },
    {
      word: 'FREE KICK',
      partOfSpeech: 'noun',
      definition: 'A kick awarded to a team after the opposition commits a foul — the other team must stay back.',
      example: 'He was fouled just outside the box — that\'s a dangerous free kick.',
      imageSlug: '/images/set-pieces-free-kick.png',
    },
    {
      word: 'THROW-IN',
      partOfSpeech: 'noun',
      definition: 'When the ball goes out of play over the sideline, the opposing team restarts play by throwing it in.',
      example: 'The ball crossed the sideline — it\'s a throw-in for the home team.',
      imageSlug: '/images/set-pieces-throw-in.png',
    },
    {
      word: 'PENALTY',
      partOfSpeech: 'noun',
      definition: 'A direct shot at goal from the penalty spot, awarded when a foul is committed inside the penalty area.',
      example: 'The striker was brought down in the box — that is definitely a penalty!',
      imageSlug: '/images/set-pieces-penalty.png',
    },
    {
      word: 'WALL',
      partOfSpeech: 'noun',
      definition: 'A line of defending players standing together to block a free kick.',
      example: 'The team is building a wall — five players in a line to block the shot.',
      imageSlug: '/images/set-pieces-wall.png',
    },
    {
      word: 'SPOT',
      partOfSpeech: 'noun',
      definition: 'The penalty spot — the marked point 12 yards from goal where penalties are taken.',
      example: 'She steps up to the spot — all eyes on her.',
      imageSlug: '/images/spot.png',
    },
    {
      word: 'NEAR POST',
      partOfSpeech: 'noun',
      definition: 'The goalpost closest to where the ball is being delivered from.',
      example: 'The cross is coming in — the striker is attacking the near post!',
      imageSlug: '/images/set-pieces-near-post.png',
    },
    {
      word: 'FAR POST',
      partOfSpeech: 'noun',
      definition: 'The goalpost furthest from where the ball is being delivered from.',
      example: 'She peeled off to the far post and headed it in — unmarked!',
      imageSlug: '/images/set-pieces-far-post.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WIN A CORNER',
      definition: 'To cause the ball to go out for a corner kick — by forcing a defender to put it out.',
      example: 'She drove the ball at the defender and won a corner — great pressure.',
      imageSlug: '/images/win-a-corner.png',
    },
    {
      phrase: 'STEP UP TO THE SPOT',
      definition: 'To walk forward and prepare to take a penalty kick.',
      example: 'He steps up to the spot — the whole stadium is silent.',
      imageSlug: '/images/step-up-to-the-spot.png',
    },
    {
      phrase: 'CLEAR THE BALL',
      definition: 'To kick or head the ball far away from your goal to safety.',
      example: 'The defender has to clear the ball — the cross is coming in!',
      imageSlug: '/images/clear-the-ball.png',
    },
    {
      phrase: 'PULL AWAY',
      definition: 'To make a run away from your marker at a set piece to receive the ball in space.',
      example: 'She pulled away at the corner and found herself completely free.',
      imageSlug: '/images/set-pieces-pull-away.png',
    },
    {
      phrase: 'GET ON THE END OF IT',
      definition: 'To reach the ball at the end of a cross or set piece and make contact.',
      example: 'Someone needs to get on the end of this corner — it\'s a great delivery.',
      imageSlug: '/images/get-on-the-end-of-it.png',
    },
    {
      phrase: 'EARN A FREE KICK',
      definition: 'To win a free kick by being fouled or drawing a foul from the opposition.',
      example: 'She stayed on her feet and earned a free kick in a brilliant position.',
      imageSlug: '/images/earn-a-free-kick.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the shouts you hear at set pieces — corners, free kicks, penalties, throw-ins. Know them, use them.',
    items: [
      {
        cue: 'Corner!',
        meaning: 'The ball went off a defender — it\'s a corner kick.',
        usage: 'Shouted by attacking players to signal to the referee that the ball went off a defending player last. Attackers always shout "Corner!" to claim the corner kick rather than a goal kick.',
        imageSlug: 'otp-corner-set-piece',
      },
      {
        cue: 'Wall! Four man wall!',
        meaning: 'Build a defensive wall — four players standing in a line.',
        usage: 'The captain or goalkeeper organises the defensive wall before a free kick. They specify how many players they want — "four-man wall," "five-man wall." The wall must be 10 yards from the ball.',
        imageSlug: 'otp-wall',
      },
      {
        cue: 'Near post! Far post!',
        meaning: 'Attackers are being assigned their positions at the corner kick.',
        usage: 'At a corner, the taker or captain tells teammates where to position themselves. "Near post!" means attack the closest goalpost. "Far post!" means make a run to the far side of the goal.',
        imageSlug: 'otp-near-post-far-post',
      },
      {
        cue: 'Clear it!',
        meaning: 'Kick the ball far away from the goal — don\'t play it short.',
        usage: 'Shouted by defenders or the goalkeeper when the ball is in a dangerous position near the goal. The player must kick it long and far, away from danger, rather than trying anything clever.',
        imageSlug: 'otp-clear-it',
      },
      {
        cue: 'Step up!',
        meaning: 'Walk forward and take the penalty — be confident.',
        usage: 'Said before a penalty is taken — by the coach, captain, or teammates — to encourage the penalty taker. It means: be brave, walk up to the spot, and take the shot with confidence.',
        imageSlug: 'otp-step-up',
      },
      {
        cue: 'Hold the line!',
        meaning: 'Defenders must stay on the same line and not move before the ball is kicked.',
        usage: 'Shouted by the defensive captain or coach at set pieces — especially free kicks and corners — to remind defenders to stay in position and not move too early, which could play opponents onside.',
        imageSlug: 'otp-hold-the-line',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Ronaldo — you\'ve been fouled just outside the box. What happens now?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'We get a [[free kick:a kick awarded after the opposition commits a foul]]! And we\'re in a great position — close to goal.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. What does the opposition have to do before you take it?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'They have to build a [[wall:a line of defending players standing together to block the shot]] — and they must stand at least 10 yards back.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Can I just shoot? Or can I pass?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'You don\'t have to shoot — you can pass. But from this position, you should shoot or curl it around the wall. Now — when is a [[penalty:a direct shot from the penalty spot, awarded for a foul in the box]] awarded?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'When a player is fouled inside the [[penalty:penalty area]] area! The referee points to the [[spot:the penalty spot, 12 yards from goal]].',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Correct. And what must the goalkeeper do during a penalty?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The goalkeeper must stay on the goal line — they must not move before the ball is kicked.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. Now — what is a [[corner kick:a kick from the corner of the pitch, awarded when a defender puts the ball out over the goal line]]? When does it happen?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'A corner kick happens when a defender puts the ball out over the goal line. The attackers get to kick from the [[near post:the goalpost closest to where the ball is]] or [[far post:the goalpost furthest from where the ball is]] corner.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. And a [[throw-in:restarting play by throwing the ball in after it crosses the sideline]]? What are the rules?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'You have to use both hands. You have to keep both feet on the ground — or behind the line. And you must not throw it into your own goal directly.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. Set pieces win matches. Know the rules. Use them.',
    },
  ],

  matchingExercise: [
    { word: 'CORNER KICK', definition: 'A kick from the corner when a defender puts the ball out over the goal line' },
    { word: 'FREE KICK', definition: 'A kick awarded after the opposition commits a foul' },
    { word: 'THROW-IN', definition: 'Restarting play by throwing the ball in after it crosses the sideline' },
    { word: 'PENALTY', definition: 'A direct shot from the spot, awarded for a foul in the penalty area' },
    { word: 'WALL', definition: 'A line of defending players standing together to block a free kick' },
    { word: 'SPOT', definition: 'The marked point 12 yards from goal where penalties are taken' },
    { word: 'NEAR POST', definition: 'The goalpost closest to where the ball is being delivered from' },
    { word: 'FAR POST', definition: 'The goalpost furthest from where the ball is being delivered from' },
  ],

  fillBlankExercise: [
    { before: 'The referee points to the', answer: 'spot', after: '— it\'s a penalty!' },
    { before: 'They', answer: 'have to', after: 'build a wall — and it must be 10 yards back.' },
    { before: 'She', answer: 'earned', after: 'a free kick in a brilliant position near the box.' },
    { before: 'The defender', answer: 'cleared', after: 'it — head it far from goal, don\'t take any risks.' },
    { before: 'He', answer: 'stepped up to the spot', after: 'and scored — cool as you like.' },
    { before: 'The striker pulled away to the', answer: 'far post', after: 'and headed it in — completely unmarked.' },
    { before: 'You', answer: 'must', after: 'use both hands for a throw-in — it\'s the rule.' },
    { before: 'Someone needs to', answer: 'get on the end of', after: 'this corner — it\'s a great delivery.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'When is a corner kick awarded?',
      options: [
        'When an attacker puts the ball out over the goal line',
        'When a defender puts the ball out over the goal line',
        'When the ball crosses the sideline',
      ],
      correctIndex: 1,
    },
    {
      question: 'What must the opposing players do before a free kick is taken?',
      options: [
        'They must stand behind their goalkeeper',
        'They must stand at least 10 yards from the ball',
        'They must form a wall of at least 6 players',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "have to" mean in the context of football rules?',
      options: [
        'Something that is optional — you can choose to do it',
        'Something that is required — it is a rule you must follow',
        'Something that happened in the past',
      ],
      correctIndex: 1,
    },
    {
      question: 'What rules apply to a throw-in?',
      options: [
        'You have to use both hands and keep both feet on the ground',
        'You can use one hand if you throw it quickly',
        'You have to kick it — not throw it',
      ],
      correctIndex: 0,
    },
    {
      question: 'What must the goalkeeper do during a penalty kick?',
      options: [
        'The goalkeeper must dive before the ball is kicked',
        'The goalkeeper must stay on the goal line until the ball is kicked',
        'The goalkeeper must stand to the left side',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the "spot" in football?',
      options: [
        'The corner of the pitch where corner kicks are taken',
        'The marked point 12 yards from goal where penalties are taken',
        'The centre circle at the start of the match',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses "have to" correctly?',
      options: [
        'The goalkeeper have to stay on the line.',
        'The goalkeeper has to stay on the line.',
        'The goalkeeper having to stay on the line.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "pull away" mean at a set piece?',
      options: [
        'To move away from your marker and find space',
        'To pull the ball back to a teammate',
        'To step away from the wall',
      ],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using "have to," "must," "don\'t have to," or "must not." Choose the correct option.',
    items: [
      {
        sentence: 'For a throw-in, you _____ use both hands — it is the rule.',
        options: ['must', 'don\'t have to', 'must not'],
        correctIndex: 0,
        explanation: '"Must" is correct. Using both hands for a throw-in is a rule — it is required. "Don\'t have to" means it is optional. "Must not" means it is forbidden.',
      },
      {
        sentence: 'During a penalty, the goalkeeper _____ move before the ball is kicked.',
        options: ['must', 'has to', 'must not'],
        correctIndex: 2,
        explanation: '"Must not" is correct. Moving before the ball is kicked is forbidden — it is a rule the goalkeeper cannot break. "Must" and "has to" would make the action required, not forbidden.',
      },
      {
        sentence: 'You _____ shoot at a free kick — you can pass if you want.',
        options: ['must', 'don\'t have to', 'must not'],
        correctIndex: 1,
        explanation: '"Don\'t have to" is correct. Shooting is not obligatory — there is a choice. "Must" means it is required. "Must not" means it is forbidden. Passing is also a legal option.',
      },
      {
        sentence: 'The wall _____ stand at least 10 yards from the ball — the referee will move them back.',
        options: ['has to', 'don\'t have to', 'must not'],
        correctIndex: 0,
        explanation: '"Has to" is correct. The wall is required by the rules to stand 10 yards back. "Has to" and "must" both express obligation. "Don\'t have to" means optional. "Must not" means forbidden.',
      },
      {
        sentence: 'For a corner kick, the ball _____ be placed inside the corner arc.',
        options: ['don\'t have to', 'must not', 'must'],
        correctIndex: 2,
        explanation: '"Must" is correct. Placing the ball in the corner arc is a required rule for a corner kick. "Don\'t have to" means optional. "Must not" means forbidden.',
      },
      {
        sentence: 'You _____ take the free kick quickly — you can wait for your teammates to get into position.',
        options: ['must not', 'don\'t have to', 'must'],
        correctIndex: 1,
        explanation: '"Don\'t have to" is correct. Taking the kick quickly is not a requirement — you can wait. "Must" means it is required. "Must not" means it is forbidden. Both quick and slow free kicks are allowed.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Your team has won a set piece. Choose the best action — A, B, or C.',
      items: [
        {
          customerLine: 'Your team has a corner kick. Coach shouts: "Near post! Far post! Someone pull away!"',
          options: [
            'All players run to the near post together.',
            'Players spread out — some attack the near post, some the far post, some pull away to find space.',
            'The whole team stays outside the box and waits.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. At a corner, attacking players must spread across different positions — near post, far post, and pulling away to create space. If everyone goes to the same spot (A), defending is easy. Staying outside the box (C) misses the chance to score.',
        },
        {
          customerLine: 'Your team has a free kick 25 metres from goal. The opposition is building a wall.',
          options: [
            'You wait until the wall is exactly right before taking the kick.',
            'You take the free kick quickly before the wall is ready.',
            'You pass it backward to start again.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. If the opposition wall is not set, taking the free kick quickly can catch them unprepared. You don\'t have to wait for them to organise — if you see the opportunity, take it fast. Waiting (A) gives them time to organise. Passing back (C) wastes the advantage.',
        },
        {
          customerLine: 'Your striker is fouled inside the penalty area. The referee points to the spot.',
          options: [
            'The team\'s best penalty taker steps up calmly and shoots low to the corner.',
            'The striker who was fouled always has to take the penalty.',
            'Any player can just run up and kick it as hard as possible.',
          ],
          correctIndex: 0,
          explanation: 'A is correct. The team\'s designated penalty taker should step up. They must pick a corner and shoot with composure — not just power. The fouled player doesn\'t have to take it (B). And power without placement (C) is not the best strategy.',
        },
        {
          customerLine: 'The ball crosses the sideline. Your team has a throw-in deep in your own half. Coach shouts: "Quick throw!"',
          options: [
            'You take the throw slowly to make sure your position is perfect.',
            'You quickly throw the ball to the nearest teammate and restart play fast.',
            'You pass it to the goalkeeper for them to throw it out.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Quick throw!" means restart play immediately — before the opposition can get organised. A fast throw keeps the momentum. Taking it slowly (A) gives the opposition time to press. Passing to the keeper (C) is unnecessary and slow.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this conversation about set piece rules. Find them as a group.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'What does a player have to do at a throw-in?' },
        { speaker: 'Ronaldo', text: 'They must to use both hands and keep both feet on the ground.' },
        { speaker: 'Coach Diallo', text: 'Good. What about a penalty — what must the goalkeeper to do?' },
        { speaker: 'Sofia', text: 'The goalkeeper has to staying on the line until the ball is kicked.' },
        { speaker: 'Coach Diallo', text: 'Correct. And what must the wall not do at a free kick?' },
        { speaker: 'Ronaldo', text: 'The wall must not to move before the kick is taken.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'They must to use both hands',
          correction: 'They must use both hands',
          explanation: '"Must" is a modal verb. Modal verbs are followed by the base form of the verb — NOT "to + verb." "Must to use" is incorrect. The correct form is "must use."',
        },
        {
          lineIndex: 3,
          incorrectText: 'The goalkeeper has to staying on the line',
          correction: 'The goalkeeper has to stay on the line',
          explanation: '"Has to" is followed by the base form of the verb — not the -ing form. "Has to staying" is incorrect. The correct form is "has to stay."',
        },
        {
          lineIndex: 5,
          incorrectText: 'The wall must not to move',
          correction: 'The wall must not move',
          explanation: '"Must not" is a modal phrase. It is followed by the base form — not "to + verb." "Must not to move" is incorrect. The correct form is "must not move."',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using set piece vocabulary and grammar from this lesson.',
      items: [
        {
          customerLine: 'Sofia: Why are set pieces so important in football?',
          salespersonStart: 'Coach Diallo: Because many goals in professional football come from set pieces.',
          suggestedCompletion: 'At the top level, teams practise corners, free kicks, and penalties hundreds of times. They know exactly where each player must go, who attacks the near post, who pulls away. A well-organised set piece can score against any defence. That is why teams must practise them — not just practise shooting.',
        },
        {
          customerLine: 'Ronaldo: What is the best way to take a penalty?',
          salespersonStart: 'Coach Diallo: You have to decide where you are shooting before you step up.',
          suggestedCompletion: 'Don\'t change your mind when you are running up — the goalkeeper will read your body language. Pick a corner, stay calm, and hit it with confidence. Low and to the corner is hardest for the goalkeeper to save. Power is not as important as placement. The best penalty takers look calm — even when they are nervous.',
        },
        {
          customerLine: 'Sofia: What is the most dangerous type of corner kick?',
          salespersonStart: 'Coach Diallo: An inswinging corner — one that curves toward the goal.',
          suggestedCompletion: 'An inswinging corner comes into the box and curves toward the goal. Defenders find it hard because the ball is moving away from them. Attackers love it because they can attack it head-on. A good inswing with players attacking the near post and far post creates real danger for any goalkeeper.',
        },
        {
          customerLine: 'Ronaldo: Can you score directly from a throw-in?',
          salespersonStart: 'Coach Diallo: No — you must not score directly from a throw-in. It is against the rules.',
          suggestedCompletion: 'If the ball goes directly into the goal from a throw-in without anyone else touching it, the goal does not stand. The opponent gets a goal kick instead. You have to touch the ball to another player first. This is why quick throw-ins are played to the nearest teammate — not toward goal.',
        },
      ],
    },
  },
};

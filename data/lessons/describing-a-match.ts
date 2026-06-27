import { Lesson } from '@/types/lesson';

export const describingAMatch: Lesson = {
  slug: 'describing-a-match',
  title: 'Describing a Match',
  subtitle: 'Simple past storytelling — how to talk about a game',
  level: 'A2',
  description: 'Learn how to describe a football match using the simple past — attack, defend, possession, counter-attack, build up, momentum. Tell the story of a game from start to finish.',
  heroImage: '/images/describing-a-match-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Simple Past — telling the story of a match',
    description: 'When a match is finished, we use the simple past to describe what happened. Regular verbs add -ed. Irregular verbs change their form. This is the most important tense for talking about football.',
    positivePattern: 'Subject + past verb (regular: -ed / irregular: special form)',
    positiveExample: '"United attacked early and scored in the 20th minute."',
    negativePattern: 'Subject + DID NOT + base verb',
    negativeExample: '"City didn\'t score — they had chances but couldn\'t finish."',
    positiveExamples: [
      { sentence: 'They dominated possession in the first half.', note: '(regular past: dominate → dominated)' },
      { sentence: 'The striker scored from close range.', note: '(irregular: score → scored)' },
      { sentence: 'The team built up slowly and created chances.', note: '(regular past: build → built)' },
      { sentence: 'City counter-attacked and won the match.', note: '(irregular: win → won)' },
    ],
    negativeExamples: [
      { sentence: 'They didn\'t press high in the second half.', note: '(did not + base verb)' },
      { sentence: 'The striker didn\'t score — but played brilliantly.', note: '(did not + base verb)' },
    ],
  },

  vocabulary: [
    {
      word: 'ATTACK',
      partOfSpeech: 'noun / verb',
      definition: 'Offensive play aimed at scoring a goal — moving the ball into the opponent\'s half to create chances.',
      example: 'They attacked from the first minute — the defenders had no rest.',
      imageSlug: '/images/attack.png',
    },
    {
      word: 'DEFEND',
      partOfSpeech: 'verb',
      definition: 'To protect your goal and stop the opposition from scoring.',
      example: 'They defended brilliantly — only 10 men but they kept a clean sheet.',
      imageSlug: '/images/defend.png',
    },
    {
      word: 'POSSESSION',
      partOfSpeech: 'noun',
      definition: 'Control of the ball — the team with possession has the ball.',
      example: 'City had 70% possession but didn\'t create many clear chances.',
      imageSlug: '/images/possession.png',
    },
    {
      word: 'COUNTER-ATTACK',
      partOfSpeech: 'noun / verb',
      definition: 'A fast attack immediately after winning the ball — catching the opposition out of position.',
      example: 'They won the ball and launched a brilliant counter-attack — 3 versus 1.',
      imageSlug: '/images/counter-attack.png',
    },
    {
      word: 'BUILD UP',
      partOfSpeech: 'verb',
      definition: 'To move the ball slowly and carefully from defence into attack, building a position.',
      example: 'They built up patiently from the back — short passes, keeping the ball.',
      imageSlug: '/images/build-up.png',
    },
    {
      word: 'PHASE OF PLAY',
      partOfSpeech: 'noun',
      definition: 'A period or section of the match with a specific character — e.g., a period of dominance, pressure, or counter-attacks.',
      example: 'There was a 15-minute phase of play where United had all the pressure.',
      imageSlug: '/images/phase-of-play.png',
    },
    {
      word: 'TEMPO',
      partOfSpeech: 'noun',
      definition: 'The speed or pace at which a team plays — high tempo means fast, intense play.',
      example: 'They raised the tempo in the second half and the goals started coming.',
      imageSlug: '/images/tempo.png',
    },
    {
      word: 'MOMENTUM',
      partOfSpeech: 'noun',
      definition: 'The feeling of growing energy and confidence — when a team is getting stronger and their opponent is getting weaker.',
      example: 'After the equaliser, momentum shifted — City couldn\'t hold on.',
      imageSlug: '/images/momentum.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'TAKE THE LEAD',
      definition: 'To score first and go ahead in the match.',
      example: 'United took the lead in the 12th minute — a brilliant header from the corner.',
      imageSlug: '/images/take-the-lead.png',
    },
    {
      phrase: 'GO BEHIND',
      definition: 'To concede a goal and fall behind in the score.',
      example: 'They went behind early — but never stopped fighting.',
      imageSlug: '/images/go-behind.png',
    },
    {
      phrase: 'LEVEL IT UP',
      definition: 'To score and equalise — making the score level again.',
      example: 'The substitute came on and levelled it up with a brilliant volley.',
      imageSlug: '/images/level-it-up.png',
    },
    {
      phrase: 'PUSH FOR A WINNER',
      definition: 'To attack more aggressively looking for a deciding goal.',
      example: 'They pushed for a winner in the last 10 minutes — throwing everyone forward.',
      imageSlug: '/images/push-for-a-winner.png',
    },
    {
      phrase: 'HOLD ON',
      definition: 'To defend under pressure and protect a lead until the final whistle.',
      example: 'They held on brilliantly despite 10 minutes of intense pressure.',
      imageSlug: '/images/hold-on.png',
    },
    {
      phrase: 'FALL APART',
      definition: 'To collapse defensively or mentally — letting in goals and losing control of the match.',
      example: 'After the red card, they completely fell apart — conceding three goals in 20 minutes.',
      imageSlug: '/images/fall-apart.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases used to describe what is happening during a match — from commentary, analysis, and match talk.',
    items: [
      {
        cue: 'They\'re on top!',
        meaning: 'One team is dominating — they have more possession, more chances, more pressure.',
        usage: 'Said by commentators or fans during a phase when one team is controlling the match. It does not mean they are winning — just that they are dominant at this moment. "They\'re on top and a goal looks coming."',
        imageSlug: 'otp-on-top',
      },
      {
        cue: 'We need to slow it down!',
        meaning: 'Stop playing too fast — be patient, keep the ball, control the tempo.',
        usage: 'Shouted by a coach or captain when the team is rushing and making mistakes. Slowing the tempo means being patient with the ball — short passes, keeping possession, not forcing anything.',
        imageSlug: 'otp-slow-it-down',
      },
      {
        cue: 'Get numbers forward!',
        meaning: 'Push more players into attack — we need more people in the box.',
        usage: 'Shouted when a team needs to score and needs more attacking players in dangerous positions. More numbers in the box means more chances to score from crosses or set pieces.',
        imageSlug: 'otp-numbers-forward',
      },
      {
        cue: 'Stay compact!',
        meaning: 'Keep your defensive shape — don\'t let space open up between the lines.',
        usage: 'Shouted by a coach or captain when defending. "Compact" means the team is close together with no gaps. The opposite — spreading out — creates space for the opposition to attack.',
        imageSlug: 'otp-stay-compact',
      },
      {
        cue: 'Keep the ball!',
        meaning: 'Don\'t give possession away — pass and move, protect the ball.',
        usage: 'Shouted when a team is under pressure or winning and needs to use possession to control the match. Keeping the ball means the other team cannot score — and it buys time.',
        imageSlug: 'otp-keep-the-ball',
      },
      {
        cue: 'Go, go, go!',
        meaning: 'We\'ve won the ball — launch the counter-attack now, fast.',
        usage: 'Shouted the moment a team wins back possession and there is space to run into. It tells the players to sprint forward immediately — before the opposition can reorganise and defend.',
        imageSlug: 'otp-go-go-go',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Sofia — I want you to describe the match we watched last night. What happened?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'United [[took:past tense of "take" — took the lead]] the lead in the first half — a header from a corner. But City [[dominated:controlled completely]] [[possession:control of the ball]] and kept attacking.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'City [[built:past tense of "build"]] up slowly from the back — short passes, controlling the [[tempo:the speed and pace of the match]]. But they couldn\'t score. United [[defended:protected their goal]] brilliantly.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. And what changed in the second half?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'City scored an equaliser in the 68th minute. Then everything changed — the [[momentum:the feeling of growing energy and confidence]] [[shifted:changed direction]]. United started to worry.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'City [[pushed:past tense of "push"]] for a winner. They attacked again and again. But United [[held:past tense of "hold"]] on — they didn\'t let another goal in.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Very good. And how did it end?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: '1-1. City had 70% [[possession:control of the ball]] and 20 shots — but didn\'t win. United [[counter-attacked:attacked fast after winning the ball]] three times and scored from one of them.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. That is how you describe a match. Past tense — scored, attacked, defended, held on. Not "score" or "attack." The match is finished.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'What does "fell apart" mean? I heard it on TV — "they fell apart in the last 10 minutes."',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: '"Fell apart" means the team completely collapsed — they stopped defending well, gave away goals, and lost control. The opposite of "held on." When a team falls apart, everything goes wrong at once.',
    },
  ],

  matchingExercise: [
    { word: 'ATTACK', definition: 'Offensive play aimed at scoring — moving the ball into the opponent\'s half' },
    { word: 'DEFEND', definition: 'To protect your goal and stop the opposition from scoring' },
    { word: 'POSSESSION', definition: 'Control of the ball' },
    { word: 'COUNTER-ATTACK', definition: 'A fast attack immediately after winning the ball' },
    { word: 'BUILD UP', definition: 'To move the ball carefully from defence into attack' },
    { word: 'TEMPO', definition: 'The speed or pace at which a team plays' },
    { word: 'MOMENTUM', definition: 'Growing energy and confidence — when a team gets stronger' },
    { word: 'PHASE OF PLAY', definition: 'A period in the match with a specific character or quality' },
  ],

  fillBlankExercise: [
    { before: 'United', answer: 'took the lead', after: 'in the 12th minute with a header from a corner.' },
    { before: 'After the red card, they completely', answer: 'fell apart', after: '— three goals in 20 minutes.' },
    { before: 'City had 70%', answer: 'possession', after: 'but couldn\'t convert their chances into goals.' },
    { before: 'After the equaliser,', answer: 'momentum', after: 'shifted — United suddenly looked nervous.' },
    { before: 'They', answer: 'held on', after: 'under incredible pressure to win 1-0.' },
    { before: 'They', answer: 'built up', after: 'patiently from the back — short passes, keeping the ball.' },
    { before: 'They won the ball and launched a brilliant', answer: 'counter-attack', after: '— three against one.' },
    { before: 'They raised the', answer: 'tempo', after: 'in the second half and goals started coming.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which tense do we use to describe a match that is finished?',
      options: ['Present continuous — "is scoring," "is attacking"', 'Simple past — "scored," "attacked," "dominated"', 'Present simple — "scores," "attacks," "dominates"'],
      correctIndex: 1,
    },
    {
      question: 'What does "counter-attack" mean?',
      options: [
        'Building up slowly from the back with short passes',
        'A fast attack immediately after winning the ball — catching the opposition out of position',
        'Defending deep and waiting for the opposition to make mistakes',
      ],
      correctIndex: 1,
    },
    {
      question: 'How did United take the lead according to the dialogue?',
      options: ['From a penalty kick', 'From a header at a corner', 'From a counter-attack'],
      correctIndex: 1,
    },
    {
      question: 'What does "fell apart" mean in football?',
      options: [
        'The team played well and won',
        'The team completely collapsed — stopped defending and conceded multiple goals',
        'The team had an injury and lost a player',
      ],
      correctIndex: 1,
    },
    {
      question: 'How is "momentum" used correctly in a sentence?',
      options: [
        '"They have the momentum yesterday."',
        '"After the equaliser, momentum shifted — City started to dominate."',
        '"They are having momentum right now."',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "hold on" mean in a match context?',
      options: ['To stop the game and wait', 'To defend under pressure and protect a lead until the final whistle', 'To keep the ball for a long time'],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses the simple past correctly?',
      options: [
        'They are taking the lead in the first half.',
        'They took the lead in the first half.',
        'They take the lead in the first half.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "phase of play" mean?',
      options: [
        'The exact moment a goal is scored',
        'A period in the match with a specific character — e.g., a period of pressure or dominance',
        'A type of tactical formation',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence about a finished match using the simple past. Choose the correct form.',
    items: [
      {
        sentence: 'United _____ (take) the lead in the 20th minute with a brilliant header.',
        options: ['takes', 'is taking', 'took'],
        correctIndex: 2,
        explanation: '"Took" is correct. The match is finished — we use simple past. "Take" is an irregular verb: take → took. "Takes" is present simple. "Is taking" is present continuous.',
      },
      {
        sentence: 'City _____ (dominate) possession in the first half — almost 70%.',
        options: ['dominate', 'dominated', 'are dominating'],
        correctIndex: 1,
        explanation: '"Dominated" is correct. Regular past tense (dominate + -d). The match is over — simple past describes completed events. "Dominate" is base form. "Are dominating" is present continuous.',
      },
      {
        sentence: 'The substitute _____ (score) the equaliser with his first touch.',
        options: ['scores', 'scored', 'is scoring'],
        correctIndex: 1,
        explanation: '"Scored" is correct. Regular past tense (score + -d). Completed action in a finished match. "Scores" is present simple. "Is scoring" is present continuous.',
      },
      {
        sentence: 'They _____ (not / press) high — they sat deep and defended.',
        options: ['didn\'t press', 'don\'t press', 'aren\'t pressing'],
        correctIndex: 0,
        explanation: '"Didn\'t press" is correct. Negative simple past uses DID NOT (didn\'t) + base verb. "Don\'t press" is present simple negative. "Aren\'t pressing" is present continuous negative.',
      },
      {
        sentence: 'After the red card, momentum _____ (shift) completely — City looked nervous.',
        options: ['is shifting', 'shifts', 'shifted'],
        correctIndex: 2,
        explanation: '"Shifted" is correct. Regular past tense (shift + -ed). Completed event in a match that\'s over. "Is shifting" is present continuous. "Shifts" is present simple.',
      },
      {
        sentence: 'United _____ (build) up slowly from the back and waited for their moment.',
        options: ['builds', 'built', 'are building'],
        correctIndex: 1,
        explanation: '"Built" is correct. "Build" is an irregular verb: build → built. Simple past for a completed match action. "Builds" is present simple. "Are building" is present continuous.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Your team is in this situation during a match. Choose the best response — A, B, or C.',
      items: [
        {
          customerLine: 'Your team is winning 1-0 with 10 minutes left. The other team is pushing forward. Coach shouts: "Hold on! Stay compact!"',
          options: [
            'Push everyone forward looking for a second goal.',
            'Stay organised defensively, keep your shape, and don\'t give anything away.',
            'Slow the tempo — keep the ball and run the clock down.',
          ],
          correctIndex: 1,
          explanation: 'B is correct — though C is also a good strategy. "Hold on! Stay compact!" means prioritise defence and keep your shape. The goal is to protect the lead. Pushing forward (A) creates space for counter-attacks. Keeping the ball (C) is useful but the primary instruction is to defend.',
        },
        {
          customerLine: 'Your team is losing 0-1 with 20 minutes left. Coach shouts: "Get numbers forward! Push for a winner!"',
          options: [
            'Drop deeper and defend to protect the scoreline.',
            'Keep the same tactics and hope the other team makes a mistake.',
            'Push more players into attack and take risks to score.',
          ],
          correctIndex: 2,
          explanation: 'C is correct. "Push for a winner" means attack more aggressively — accept the risk and throw players forward. You need to score. Defending (A) means you will lose. Staying the same (B) means nothing changes — and you run out of time.',
        },
        {
          customerLine: 'Your team wins the ball in midfield. Three players are ahead of you with space to run. Coach shouts: "Go! Counter-attack!"',
          options: [
            'Play it back to the goalkeeper and rebuild slowly.',
            'Pass it forward quickly and run with your players into the space.',
            'Hold the ball and wait for more teammates to support.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A counter-attack needs to be fast — before the opposition can reorganise. Playing back (A) kills the attack. Waiting (C) lets the defence recover. Pass forward immediately and join the attack — speed is everything on a counter.',
        },
        {
          customerLine: 'Your team has 65% possession but has not created many chances. Coach says: "We need more tempo. Raise the tempo!"',
          options: [
            'Keep playing the same short passes but a bit slower.',
            'Play faster — quicker passes, more direct runs, higher energy.',
            'Drop deeper and play long balls forward.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Raise the tempo" means speed up — pass quicker, move faster, be more direct. The current tempo is not creating danger. Playing slower (A) makes things worse. Playing long balls (C) changes the style completely but doesn\'t address the tempo instruction.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this match report. Find them as a group.',
      dialogue: [
        { speaker: 'Reporter', text: 'United take the lead in the 15th minute with a counter-attack goal.' },
        { speaker: 'Reporter', text: 'City dominated possession in the first half but didn\'t created any clear chances.' },
        { speaker: 'Reporter', text: 'The momentum shifted after City\'s equaliser in the 70th minute.' },
        { speaker: 'Reporter', text: 'United pushed for a winner but City holded on brilliantly.' },
        { speaker: 'Reporter', text: 'The match ended 1-1 — an excellent game with two talented teams.' },
        { speaker: 'Reporter', text: 'City builded up well but United\'s counter-attacking was devastating.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'United take the lead in the 15th minute',
          correction: 'United took the lead in the 15th minute',
          explanation: 'The match is finished — we use simple past. "Take" is an irregular verb: take → took. "Take" is present simple and is wrong for a completed event.',
        },
        {
          lineIndex: 1,
          incorrectText: 'didn\'t created any clear chances',
          correction: 'didn\'t create any clear chances',
          explanation: 'With "didn\'t" (did not), we always use the base form of the verb — not the past form. "Didn\'t created" is incorrect. The correct form is "didn\'t create."',
        },
        {
          lineIndex: 3,
          incorrectText: 'City holded on brilliantly',
          correction: 'City held on brilliantly',
          explanation: '"Hold" is an irregular verb: hold → held. "Holded" is not a real word — you cannot add -ed to irregular verbs. The correct past form is "held."',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using match vocabulary and simple past from this lesson.',
      items: [
        {
          customerLine: 'Sofia: Can you describe last Saturday\'s match in three sentences?',
          salespersonStart: 'Coach Diallo: City dominated possession from the start.',
          suggestedCompletion: 'United scored against the run of play from a corner in the 30th minute. City pushed hard but couldn\'t find the equaliser. United held on brilliantly and won 1-0 — completely against the momentum of the match.',
        },
        {
          customerLine: 'Ronaldo: Why is the counter-attack so dangerous in modern football?',
          salespersonStart: 'Coach Diallo: Because the opposition is out of position when you win the ball.',
          suggestedCompletion: 'When a team attacks, their defenders push forward. If you win the ball quickly, there is suddenly a lot of space behind their defence. A fast counter-attack — three players against one or two defenders — creates the clearest chances in football. Many goals at the highest level came from counter-attacks after the other team had 70% possession.',
        },
        {
          customerLine: 'Sofia: How do you describe a team that "fell apart"?',
          salespersonStart: 'Coach Diallo: You describe exactly what happened — one moment, then another, then another.',
          suggestedCompletion: 'Start with the moment it changed: "They were winning 2-0 at half time." Then describe the collapse: "But City scored two goals in five minutes. Then a red card. Then a third goal. United stopped defending as a team — everyone went forward and they left huge spaces at the back. In 25 minutes, a 2-0 lead became a 2-3 defeat." That is how you describe a team falling apart.',
        },
        {
          customerLine: 'Ronaldo: What does it mean when a commentator says "momentum shifted"?',
          salespersonStart: 'Coach Diallo: It means the feeling of the match changed — the team that was strong suddenly looked vulnerable.',
          suggestedCompletion: 'Before momentum shifts, one team is attacking, pressing, creating chances, and looking confident. After a goal or a key moment — a red card, an injury — the confidence can disappear. The team that was struggling starts to believe. The team that was winning starts to worry. Momentum is not something you can see — but every player on the pitch can feel it.',
        },
      ],
    },
  },
};

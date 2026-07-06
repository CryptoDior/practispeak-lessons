import { Lesson } from '@/types/lesson';

export const watchingFromTheStands: Lesson = {
  slug: 'watching-from-the-stands',
  title: 'Watching from the Stands',
  subtitle: 'Atmosphere, chanting, supporting — language for the matchday experience',
  level: 'A2',
  description: 'Learn the vocabulary for being a fan in the stands — atmosphere, chanting, celebrating, groaning, and supporting. Practise using the present continuous to describe what is happening right now at a live match.',
  heroImage: '/images/watching-from-the-stands-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Present continuous — live action',
    description: 'We use the present continuous (am/is/are + verb-ing) to describe things happening RIGHT NOW. When you are watching a live match and describing what you see, you use present continuous — not present simple.',
    positivePattern: 'Subject + am/is/are + verb-ing',
    positiveExample: '"The fans are singing, the goalkeeper is warming up, and the players are coming out of the tunnel!"',
    negativePattern: 'Subject + am/is/are + not + verb-ing',
    negativeExample: '"The crowd is not making much noise — it has been a quiet first half."',
    positiveExamples: [
      { sentence: 'The fans are going crazy — he is scoring right now!', note: '(are going, is scoring = happening this second)' },
      { sentence: 'The manager is shouting instructions from the touchline.', note: '(is shouting = happening now)' },
      { sentence: 'Both sets of fans are singing at the same time — incredible.', note: '(are singing = both groups, continuous action)' },
      { sentence: 'The referee is checking VAR — everyone is waiting nervously.', note: '(is checking, is waiting = simultaneous ongoing actions)' },
    ],
    negativeExamples: [
      { sentence: 'The away fans are not making any noise — they are just watching quietly.', note: '(are not making = absence of a continuous action now)' },
      { sentence: 'She is not warming up — I think she might be injured.', note: '(is not + verb-ing = not doing it right now)' },
    ],
  },

  vocabulary: [
    {
      word: 'ATMOSPHERE',
      partOfSpeech: 'noun',
      definition: 'The energy and excitement created by the crowd — the feeling in the stadium.',
      example: 'The atmosphere was electric — 50,000 fans singing from the first minute to the last.',
      imageSlug: '/images/watching-from-the-stands-atmosphere.png',
    },
    {
      word: 'CHANT',
      partOfSpeech: 'noun / verb',
      definition: 'A song or phrase repeated loudly by fans — a way of supporting the team or putting off the opposition.',
      example: 'The home fans were chanting the striker\'s name every time he got the ball.',
      imageSlug: '/images/watching-from-the-stands-chant.png',
    },
    {
      word: 'GROAN',
      partOfSpeech: 'noun / verb',
      definition: 'A sound of disappointment — made by fans when something goes wrong (a missed chance, a bad decision).',
      example: 'The whole stadium groaned when the striker missed from two metres — it was an open goal.',
      imageSlug: '/images/groan.png',
    },
    {
      word: 'ROAR',
      partOfSpeech: 'noun / verb',
      definition: 'A loud collective shout from the crowd — especially after a goal or a big moment.',
      example: 'A huge roar went up when the ball hit the net — you could hear it from outside the stadium.',
      imageSlug: '/images/roar.png',
    },
    {
      word: 'BANNER',
      partOfSpeech: 'noun',
      definition: 'A large sign held by fans in the stands — with a message, an image, or support for the team.',
      example: 'The ultras held up a huge banner before kick-off — a message for their favourite player.',
      imageSlug: '/images/watching-from-the-stands-banner.png',
    },
    {
      word: 'HALF-TIME',
      partOfSpeech: 'noun',
      definition: 'The break in the middle of the match — usually 15 minutes, after 45 minutes of play.',
      example: 'At half-time, the fans debated the first half — some were frustrated, others were optimistic.',
      imageSlug: '/images/watching-from-the-stands-half-time.png',
    },
    {
      word: 'SUBSTITUTE BOARD',
      partOfSpeech: 'noun',
      definition: 'The electronic board held up by the fourth official to show which numbers are being substituted.',
      example: 'The substitute board went up in the 65th minute — number 9 was coming off.',
      imageSlug: '/images/substitute-board.png',
    },
    {
      word: 'LATE WINNER',
      partOfSpeech: 'noun',
      definition: 'A goal scored near the end of the match that wins the game.',
      example: 'She scored a late winner in the 93rd minute — the fans behind the goal went absolutely wild.',
      imageSlug: '/images/watching-from-the-stands-late-winner.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'GO WILD',
      definition: 'To react with extreme excitement and noise — usually after a goal or a win.',
      example: 'The fans went wild when the late winner went in — jumping, hugging, and screaming.',
      imageSlug: '/images/go-wild.png',
    },
    {
      phrase: 'GET BEHIND THE TEAM',
      definition: 'To support the team loudly and actively — creating noise to motivate the players.',
      example: 'The fans really got behind the team in the second half — the noise helped the players push for a winner.',
      imageSlug: '/images/watching-from-the-stands-get-behind-the-team.png',
    },
    {
      phrase: 'HOLD YOUR BREATH',
      definition: 'To wait nervously for the outcome of something — usually a penalty or a VAR decision.',
      example: 'Everyone in the stadium was holding their breath during the penalty shootout.',
      imageSlug: '/images/hold-your-breath.png',
    },
    {
      phrase: 'TURN ON THE TEAM',
      definition: 'When fans become angry with and boo or criticise their own team during a match.',
      example: 'After three missed chances, some fans started to turn on the team — whistling every time they lost the ball.',
      imageSlug: '/images/turn-on-the-team.png',
    },
    {
      phrase: 'RISE TO YOUR FEET',
      definition: 'To stand up from your seat — usually in reaction to a goal, a chance, or a big moment.',
      example: 'The whole stand rose to its feet when she hit the crossbar — so close to a wonderful goal.',
      imageSlug: '/images/rise-to-your-feet.png',
    },
    {
      phrase: 'SING YOUR HEART OUT',
      definition: 'To sing as loudly and passionately as possible — with full energy and emotion.',
      example: 'The away fans sang their hearts out for 90 minutes despite losing — real supporters.',
      imageSlug: '/images/sing-your-heart-out.png',
    },
  ],

  onThePitch: {
    instructions: 'These are things fans say or shout in the stands during a live match.',
    items: [
      {
        cue: "He's shooting! He's scored!",
        meaning: 'A fan describes a live action as it happens — present continuous followed by present perfect.',
        usage: 'This is a classic example of present continuous in real-time commentary. "He\'s shooting" = he is shooting right now (continuous). "He\'s scored" = he has just scored (present perfect for immediate past). Fans use these forms naturally without thinking about grammar.',
        imageSlug: 'otp-hes-shooting-hes-scored',
      },
      {
        cue: "What are they doing?!",
        meaning: 'Frustrated question about the team\'s tactics or a specific action the fan disagrees with.',
        usage: '"What are they doing?" uses present continuous as a question. It is usually an emotional reaction — frustration or confusion about a decision or a moment of poor play. The implication is "this is wrong and it is happening right now."',
        imageSlug: 'otp-what-are-they-doing',
      },
      {
        cue: "The ref is killing us!",
        meaning: 'The referee is making decisions that are hurting our team.',
        usage: '"Is killing" = present continuous showing an ongoing process. Fans use this when they feel multiple decisions have gone against them. It is an exaggeration — "killing" here means harming our chances, not literally.',
        imageSlug: 'otp-the-ref-is-killing-us',
      },
      {
        cue: "They're coming back into it!",
        meaning: 'The losing team is improving and getting back into the game — creating chances or scoring.',
        usage: '"Are coming back" = present continuous showing an ongoing change or development in the match. It suggests the team were losing control but are now regaining it. Common at 1-0 or 2-1 when the losing team starts pressing.',
        imageSlug: 'otp-theyre-coming-back-into-it',
      },
      {
        cue: "Who's warming up?",
        meaning: 'Which substitute is getting ready to come on?',
        usage: '"Is warming up" = present continuous for the action happening on the touchline right now. Fans watch who is warming up to predict which substitution is coming. When a key player starts warming up, the crowd reacts with excitement.',
        imageSlug: 'otp-whos-warming-up',
      },
      {
        cue: "We're throwing it away!",
        meaning: 'We are losing control of a lead or advantage — playing badly and giving the opposition a chance.',
        usage: '"Are throwing it away" = present continuous for something happening right now. "Throw away" = waste an advantage. Used in frustration when a team is drawing or conceding after being ahead. A very emotional phrase from fans.',
        imageSlug: 'otp-were-throwing-it-away',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'OK — imagine you are sitting in the stands watching the match right now. What can you see? What is happening? Sofia — describe the scene.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The fans are [[chanting:singing a song or phrase repeatedly]] the captain\'s name — it is 0-0 and the team need a goal. The [[atmosphere:the energy and excitement created by the crowd]] is incredible — everyone is standing.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The striker is running down the left wing — he is shooting! Oh no — he has missed. The whole crowd is [[groaning:making a sound of disappointment]].',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good! Keep going. What is happening now?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The [[substitute board:the electronic board showing which numbers are being substituted]] is going up — number 10 is coming off. The fans are clapping her off — she worked hard.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The new player is coming on — the crowd is [[roaring:making a loud collective shout]] with excitement. It is the 88th minute. We are looking for a [[late winner:a goal near the end that wins the game]].',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'And then?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'She scores! A header — 1-0! The fans are [[going wild:reacting with extreme excitement]] — jumping, hugging, screaming. The whole stand is shaking. This is why we love football!',
    },
  ],

  matchingExercise: [
    { word: 'ATMOSPHERE', definition: 'The energy and excitement created by the crowd' },
    { word: 'CHANT', definition: 'A song or phrase repeated loudly by fans' },
    { word: 'GROAN', definition: 'A sound of disappointment after a miss or bad decision' },
    { word: 'ROAR', definition: 'A loud collective shout — especially after a goal' },
    { word: 'BANNER', definition: 'A large sign held by fans in the stands' },
    { word: 'HALF-TIME', definition: 'The 15-minute break after 45 minutes of play' },
    { word: 'SUBSTITUTE BOARD', definition: 'The board showing which numbers are being substituted' },
    { word: 'LATE WINNER', definition: 'A goal near the end that wins the game' },
  ],

  fillBlankExercise: [
    { before: 'The fans are', answer: 'chanting', after: 'the striker\'s name every time he touches the ball.' },
    { before: 'The whole stadium', answer: 'groaned', after: 'when he missed the open goal from two metres.' },
    { before: 'A huge', answer: 'roar', after: 'went up when the ball crossed the line — 1-0!' },
    { before: 'The', answer: 'atmosphere', after: 'was electric — you could feel the energy from the moment you walked in.' },
    { before: 'She scored a', answer: 'late winner', after: 'in the 94th minute — the fans went absolutely wild.' },
    { before: 'Everyone was', answer: 'holding their breath', after: 'during the penalty shootout — complete silence.' },
    { before: 'The away fans', answer: 'sang their hearts out', after: 'for 90 minutes despite losing — incredible support.' },
    { before: 'The whole stand', answer: 'rose to its feet', after: 'when she hit the crossbar — so close!' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which sentence uses present continuous correctly for live action?',
      options: [
        'The fans sing very loud.',
        'The fans are singing very loud right now.',
        'The fans sang very loud.',
      ],
      correctIndex: 1,
    },
    {
      question: 'A fan shouts "What are they doing?!" This is:',
      options: [
        'A calm question about tactics',
        'A frustrated reaction to something happening right now',
        'A question about the team\'s past performance',
      ],
      correctIndex: 1,
    },
    {
      question: 'Complete: "The manager _____ instructions from the touchline right now."',
      options: ['shouts', 'is shouting', 'shouted'],
      correctIndex: 1,
    },
    {
      question: 'What does "the fans are going wild" mean?',
      options: [
        'The fans are behaving badly and the police are coming',
        'The fans are reacting with extreme excitement',
        'The fans are angry with the referee',
      ],
      correctIndex: 1,
    },
    {
      question: 'Complete: "She _____ warming up — I think she is coming on soon."',
      options: ['was', 'is', 'has'],
      correctIndex: 1,
    },
    {
      question: 'What does "the fans turned on the team" mean?',
      options: [
        'The fans cheered louder to support the team',
        'The fans became critical and booed their own team during the match',
        'The fans turned their backs on the team',
      ],
      correctIndex: 1,
    },
    {
      question: 'Complete: "The players _____ out of the tunnel — the crowd is going crazy!"',
      options: ['come', 'came', 'are coming'],
      correctIndex: 2,
    },
    {
      question: 'What does "get behind the team" mean?',
      options: [
        'To stand behind the team\'s dugout',
        'To support the team loudly and actively with noise',
        'To follow the team from behind on the street',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the present continuous correctly.',
    items: [
      {
        sentence: 'Look — the striker _____ for goal! Can he score?',
        options: ['runs', 'run', 'is running'],
        correctIndex: 2,
        explanation: '"Is running" is correct. We use present continuous to describe actions happening right now — at this moment during the match. "Runs" is present simple (habit/fact). "Run" is the base form. "Look —" signals this is happening right now = present continuous.',
      },
      {
        sentence: 'The referee _____ VAR — everyone in the stadium is waiting.',
        options: ['checks', 'is checking', 'checked'],
        correctIndex: 1,
        explanation: '"Is checking" is correct — the action is happening right now, in progress. "Checks" = present simple (what he normally does). "Checked" = past simple (completed past action). Present continuous shows the action is ongoing at this moment.',
      },
      {
        sentence: 'The fans _____ the captain\'s name — the noise is incredible.',
        options: ['chant', 'are chanting', 'chanted'],
        correctIndex: 1,
        explanation: '"Are chanting" is correct. The fans are doing this right now, continuously. "Chant" = present simple (they chant regularly — a habit). "Chanted" = past simple. "Are chanting" = they are doing it at this exact moment.',
      },
      {
        sentence: 'The substitute board _____ up — number 9 _____ off.',
        options: ['is going / is coming', 'goes / comes', 'went / came'],
        correctIndex: 0,
        explanation: '"Is going / is coming" are both correct. Two simultaneous actions happening right now — the board is going up (in progress) and the player is coming off (in progress). Both use present continuous because both are happening at this moment.',
      },
      {
        sentence: 'The away fans _____ — they know they are losing and there is no time left.',
        options: ['are not singing', 'do not sing', 'did not sing'],
        correctIndex: 0,
        explanation: '"Are not singing" is correct — negative present continuous. The fans are not doing this action right now. "Do not sing" = present simple negative (they never sing / they generally do not sing). "Did not sing" = past simple negative. "Right now, at this moment, they are not singing" = are not singing.',
      },
      {
        sentence: 'She _____ — this could be the late winner! The whole crowd is holding its breath!',
        options: ['shoots', 'shot', 'is shooting'],
        correctIndex: 2,
        explanation: '"Is shooting" is correct. This describes the action as it is happening — live, right now. "Shoots" = present simple. "Shot" = past simple. "Is shooting" = she is in the process of doing it right this second — exactly the feeling of live commentary.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read each situation and respond using present continuous.',
      items: [
        {
          customerLine: 'Your friend calls during the match and asks: "What is happening?" Describe the live action.',
          options: [
            '"The team played well in the first half and scored two goals."',
            '"We are winning 2-1! The fans are going wild and the opposition are pushing for an equaliser. The goalkeeper is making saves and everyone is holding their breath — five minutes to go!"',
            '"We usually play well at home. The atmosphere is generally good."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses present continuous throughout to describe what is happening right now (are winning, are going wild, are pushing, is making, are holding). Option A uses past simple. Option C uses present simple for habits/general facts — not live action.',
        },
        {
          customerLine: 'A new fan asks: "Why are the fans making that noise?" What is the best explanation?',
          options: [
            '"Fans always make noise at football. It is what they do."',
            '"Right now, the striker is running through on goal and the fans are chanting his name — they are trying to get behind him and create energy. When the team is attacking, the atmosphere goes up because the fans are hoping for a goal."',
            '"The fans are making noise because they paid for their tickets."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses present continuous to describe what is happening right now (is running, are chanting, are trying, are hoping) and explains the connection between the live action and the crowd reaction. Option A uses present simple for general facts.',
        },
        {
          customerLine: 'It is half-time and the team is losing 0-2. The fans are quiet. What do you say to get them going?',
          options: [
            '"It is finished — we cannot win from here. Two goals is too many."',
            '"We are still in this! The team needs us right now — they can hear us in there. Let\'s get behind them in the second half and make this stadium rock. They are fighting — we need to fight too. Let\'s go!"',
            '"The team is playing badly so the fans should be quiet — save the noise for when we score."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses present continuous (are still in this, are fighting) to focus on the current moment and creates urgency. It motivates through language — "the team needs us right now," "let\'s get behind them." The present continuous gives energy and immediacy.',
        },
        {
          customerLine: 'After the match, a journalist asks: "What was the atmosphere like?" How do you describe it?',
          options: [
            '"It was good."',
            '"It was electric from the first minute. When the team came out of the tunnel, the fans were already chanting and rising to their feet. After the late winner, the whole stand was going wild — 45,000 fans jumping at the same time. The roar was deafening. I have been to many matches but that was something special."',
            '"The fans were singing. There was a banner. It was loud."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses past continuous (were chanting, were rising, was going wild) to describe ongoing past actions — actions that were in progress at specific moments. It uses vivid vocabulary (electric, deafening, wild) and creates a strong picture of the experience.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three present continuous mistakes in this live match description. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'It is the 80th minute — we are winning 1-0 and the fans are going absolutely crazy.' },
        { speaker: 'Ronaldo', text: 'Wait — the opposition is attacking now. Their striker is runs down the right wing!' },
        { speaker: 'Sofia', text: 'The goalkeeper is coming out to close him down — the crowd is holding its breath.' },
        { speaker: 'Ronaldo', text: 'He shoot! The goalkeeper saves it! The fans are roaring — what a save!' },
        { speaker: 'Sofia', text: 'The substitute board is going up — number 7 is coming off for a defensive midfielder.' },
        { speaker: 'Ronaldo', text: 'And the fans are chanting the goalkeeper\'s name — she is deserving this after that save!' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'their striker is runs down the right wing',
          correction: 'their striker is running down the right wing',
          explanation: 'Present continuous = am/is/are + verb-ING. "Is runs" is wrong — you cannot combine "is" (auxiliary) with the third person present simple "runs." Correct: "is running." Never use the -s form after "is/are/am" — always use the -ing form.',
        },
        {
          lineIndex: 3,
          incorrectText: 'He shoot!',
          correction: 'He is shooting!',
          explanation: '"He shoot" is not a complete sentence — it has no auxiliary verb and no -ing. For live present continuous, we need: "He is shooting!" — auxiliary "is" + verb + "-ing." In very fast live commentary, some speakers shorten to "He shoots!" (present simple for drama), but "he shoot" without any ending is always wrong.',
        },
        {
          lineIndex: 5,
          incorrectText: 'she is deserving this',
          correction: 'she deserves this',
          explanation: '"Deserve" is a stative verb — it describes a state, not an action. Stative verbs do not usually go in the continuous form. We say "she deserves" (present simple), not "she is deserving." Other stative verbs that follow the same rule: want, need, know, like, love, hate, understand, believe.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Continue the commentary using present continuous.',
      items: [
        {
          customerLine: 'Ronaldo: It is the 90th minute — describe what you see in the stadium.',
          salespersonStart: 'Sofia: The fans are on their feet, the whole stadium is rocking, and the players are pushing for a winner.',
          suggestedCompletion: 'The clock is running down and every touch of the ball is getting a reaction from the crowd. The manager is standing on the touchline — arms crossed, watching every movement. In the away end, the visiting fans are still singing but you can hear the nerves in their voices. The substitute is warming up in the corner — is the manager making a last change? The ball is going from side to side — we are searching for the opening. Thirty seconds to go. Everyone is holding their breath.',
        },
        {
          customerLine: 'Sofia: A goal is scored. Describe the reaction in the stands.',
          salespersonStart: 'Ronaldo: The ball is in the net — and the stadium is erupting!',
          suggestedCompletion: 'Fifty thousand fans are jumping at the same time. People are hugging strangers, scarves are going up in the air, some fans are crying. The goal scorer is running to the corner flag — the teammates are chasing after her. The manager is celebrating on the touchline — punching the air. The away fans in the corner are going quiet. The home fans are singing so loud you cannot hear yourself think. The floodlights are making everything look bright and dramatic. This is exactly why people go to football — moments like this one.',
        },
        {
          customerLine: 'Ronaldo: What are the fans doing at half-time?',
          salespersonStart: 'Coach Diallo: At half-time, the stands are busy — everyone is moving and talking.',
          suggestedCompletion: 'Some fans are going to get food and drinks — the queues at the concession stands are already growing. Groups of fans are debating the first half — some are happy with the performance, others are frustrated. A few people are checking their phones for the scores from other matches. The players are heading back down the tunnel and the groundskeeper is checking the pitch — filling in any divots before the second half. The big screens are showing highlights of the first 45 minutes. In the away end, the visiting fans are still singing — they are trying to keep their energy up for the second half.',
        },
        {
          customerLine: 'Sofia: What is it like to be a fan when your team is losing with five minutes to go?',
          salespersonStart: 'Coach Diallo: It is one of the most difficult feelings in football — but great fans keep going.',
          suggestedCompletion: 'Your heart is racing. The clock is ticking and every minute feels like ten. Some fans around you are already leaving — heading for the exit to beat the crowd. But the real fans are staying and they are making more noise, not less. They are chanting louder, they are cheering every tackle, every clearance, every time the team wins the ball back. The players can hear it and it drives them on. Sometimes the comeback happens — and if it does, it is the greatest feeling in football. Sometimes it does not — but you were there, you supported, and that matters.',
        },
      ],
    },
  },
};

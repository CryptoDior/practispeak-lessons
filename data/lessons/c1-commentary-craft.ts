import { Lesson } from '@/types/lesson';

export const c1CommentaryCraft: Lesson = {
  slug: 'c1-commentary-craft',
  title: 'Commentary Craft',
  subtitle: 'Unit 3 — Broadcast & Journalism',
  level: 'C1-C2',
  description: 'Great football commentary is more than describing what you see. It builds tension, finds the right word at the right moment, and makes the listener feel the game. This lesson breaks down the craft of live football commentary.',
  heroImage: '/images/commentary-craft.png',

  warmUp: {
    questions: [
      'Who is your favourite football commentator and why? What makes them special?',
      'What is the difference between commentary and analysis? Can you have both at the same time?',
      'Have you ever tried to describe a live sporting moment in real time? What was difficult about it?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Dramatic present tense — creating immediacy in commentary',
    description: 'Football commentators use the present simple to describe action that is happening right now. This creates a sense of immediacy — the listener feels like they are there. "He shoots — and it goes just wide!" Note the dash — commentary uses pauses (marked by dashes) to create tension. The present simple removes distance: instead of "he has shot", you say "he shoots". This is called the dramatic present and it is the core tool of live commentary.',
    positiveExamples: [
      { sentence: 'He picks it up on the left — drives forward — shoots — GOAL!', note: 'dramatic present + dashes for pauses — the classic commentary rhythm' },
      { sentence: 'The keeper comes out — he has to be brave here — and he claims it!', note: 'present + commentary judgement ("he has to") mid-action' },
      { sentence: 'Sixty seconds left. The crowd are on their feet. He lines it up...', note: 'scene-setting present + ellipsis for suspense before the climax' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'CRESCENDO',
      partOfSpeech: 'noun',
      definition: 'The gradual build to a peak — in commentary, the moment when the excitement reaches its highest point, usually just before or at a goal.',
      example: '"The commentary built to a perfect crescendo as the ball hit the back of the net."',
      imageSlug: '/images/crescendo.png',
    },
    {
      word: 'CADENCE',
      partOfSpeech: 'noun',
      definition: 'The rhythm and pace of speech — how fast or slow a commentator speaks, and how their sentences rise and fall.',
      example: '"His cadence slows down before a goal — the pause before the shout is part of the drama."',
      imageSlug: '/images/c1-commentary-craft-cadence.png',
    },
    {
      word: 'ARTICULATE',
      partOfSpeech: 'verb',
      definition: 'To express something clearly and precisely in words — to find exactly the right way to say something.',
      example: '"She articulated the tactical situation perfectly — the listener understood the problem immediately."',
      imageSlug: '/images/c1-commentary-craft-articulate.png',
    },
    {
      word: 'ANTICLIMAX',
      partOfSpeech: 'noun',
      definition: 'A disappointing end to something that was building to an exciting moment — when the tension is released without a satisfying result.',
      example: '"The VAR delay was a terrible anticlimax — the crowd had already celebrated before the goal was ruled out."',
      imageSlug: '/images/anticlimax.png',
    },
    {
      word: 'INTONATION',
      partOfSpeech: 'noun',
      definition: 'The rise and fall of the voice — how a commentator uses pitch to signal excitement, uncertainty, or disappointment.',
      example: '"His intonation rises sharply at the moment of contact — you know before you see it that the ball is going in."',
      imageSlug: '/images/intonation.png',
    },
    {
      word: 'EVOCATIVE',
      partOfSpeech: 'adjective',
      definition: 'Strongly bringing a feeling, image, or memory to mind — language that makes the listener picture or feel something vividly.',
      example: '"The phrase \'the theatre of dreams\' is evocative — it paints a picture without describing anything specific."',
      imageSlug: '/images/c1-commentary-craft-evocative.png',
    },
    {
      word: 'SPONTANEITY',
      partOfSpeech: 'noun',
      definition: 'The quality of reacting naturally and without planning — great commentary sounds spontaneous even when the commentator is very well prepared.',
      example: '"The best commentators prepare everything except the spontaneity — you cannot rehearse how you react to a goal."',
      imageSlug: '/images/spontaneity.png',
    },
    {
      word: 'ECONOMY',
      partOfSpeech: 'noun',
      definition: 'Using fewer words to say more — economy of language means not saying anything unnecessary, especially in fast moments.',
      example: '"Economy of language is key in commentary — three words at the right moment beats ten words at the wrong one."',
      imageSlug: '/images/economy.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BUILD UP',
      definition: 'To increase gradually in intensity — to create growing excitement in the commentary leading to a climax.',
      example: '"He builds up the tension perfectly — his voice lowers before the shot, then explodes."',
      imageSlug: '/images/c1-commentary-craft-build-up.png',
    },
    {
      phrase: 'DIE DOWN',
      definition: 'To gradually become quieter or less intense — when excitement fades after a missed chance or a cleared ball.',
      example: '"The crowd roars die down when the shot goes over — and the commentator knows to lower his voice too."',
      imageSlug: '/images/die-down.png',
    },
    {
      phrase: 'KICK OFF',
      definition: 'To begin — in commentary, to open the broadcast and set the tone for everything that follows.',
      example: '"She kicks off the commentary with a line about the occasion — setting the mood before a single ball is kicked."',
      imageSlug: '/images/kick-off-comm.png',
    },
    {
      phrase: 'RAMP UP',
      definition: 'To increase sharply and quickly — to accelerate the energy of the commentary as the action intensifies.',
      example: '"His delivery ramps up dramatically in the last ten minutes — every touch feels like it could be the winner."',
      imageSlug: '/images/ramp-up.png',
    },
    {
      phrase: 'FALL AWAY',
      definition: 'To decrease or fade — when the commentary energy drops after an anticlimax or a period of dull play.',
      example: '"After the missed penalty, his energy falls away — he lets the moment breathe before continuing."',
      imageSlug: '/images/fall-away.png',
    },
    {
      phrase: 'PICK UP ON',
      definition: 'To notice and respond to something — when a commentator catches a small detail and uses it to add meaning.',
      example: '"She picks up on the striker\'s body language before the free kick — \'He looks absolutely certain about this.\'\'"',
      imageSlug: '/images/c1-commentary-craft-pick-up-on.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key commentary moments — learn the language and rhythm for each.',
    items: [
      {
        cue: 'Opening the broadcast — setting the scene',
        meaning: 'The opening commentary line sets the emotional tone for the whole match. Great openers are atmospheric, reference the occasion, and create anticipation without rushing.',
        usage: '"Forty thousand inside this stadium tonight — and the noise, even now before kick-off, tells you exactly what this game means." The opening should be descriptive, unhurried, and evocative. Never start with statistics.',
        imageSlug: 'otp-opening-comm',
      },
      {
        cue: 'The slow build — pressure before a chance',
        meaning: 'In the thirty seconds before a goal chance, a commentator must build tension without giving the result away. The voice drops, the pace slows, the description becomes more precise.',
        usage: '"He\'s got space... drives inside... looks up... picks out... OH! — What a save! What a remarkable save from the goalkeeper!" The pause before the climax is as important as the climax itself.',
        imageSlug: 'otp-slow-build',
      },
      {
        cue: 'The goal — the peak of commentary craft',
        meaning: 'The goal call is the most defining moment for any commentator. The classic form: one or two words of description, then the release — shouted or whispered depending on the commentator\'s style.',
        usage: '"He drives it — low — to the left — GOAL! GOAL! GOAL! He\'s done it! He\'s absolutely done it!" Or the whispered: "...and it\'s in. Quietly. Simply. In." Both work — but neither works without the build before it.',
        imageSlug: 'otp-goal-call',
      },
      {
        cue: 'The VAR delay — managing silence and uncertainty',
        meaning: 'VAR checks create awkward silences and uncertainty that a commentator must manage. The best commentators use this time to explain, speculate carefully, and keep the listener engaged.',
        usage: '"We wait. The referee has gone to the pitchside monitor. The players are standing still. Sixty thousand people holding their breath. What did we see? Let\'s take another look..." Managing the pause is its own skill.',
        imageSlug: 'otp-var-commentary',
      },
      {
        cue: 'The missed chance — the anticlimax',
        meaning: 'A missed big chance requires the opposite of the goal call — a release of tension that didn\'t come. The best commentators find the right words for disappointment without melodrama.',
        usage: '"Oh no... he has to score that. He has to. One-v-one, six yards out — and it\'s over the bar. Incredible. Incredibly wasteful." Short sentences. Let the silence do some of the work.',
        imageSlug: 'otp-missed-chance',
      },
      {
        cue: 'Full-time — closing the commentary',
        meaning: 'The full-time summary requires context, emotion, and economy. A great closing line is remembered. Summarise the match story in one or two lines that capture what the game meant.',
        usage: '"And that\'s it. Full-time. Three goals, two red cards, and a result that nobody in this stadium will forget for a very long time. For United — a famous night. For City — a very long journey home." Story. Contrast. Atmosphere.',
        imageSlug: 'otp-full-time-comm',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Trainer', speakerColor: 'orange', text: 'Let\'s listen to that passage again. What do you notice about his voice in the thirty seconds before the goal?' },
    { speaker: 'Student', speakerColor: 'green', text: 'He slows down. His voice gets quieter. And then he pauses — completely silent for a second.' },
    { speaker: 'Trainer', speakerColor: 'orange', text: 'Exactly. That\'s the dramatic present in action. He\'s using silence as a tool. What happens to his intonation at the moment of contact?' },
    { speaker: 'Student', speakerColor: 'green', text: 'It jumps. Like he\'s just reacting — you can hear it\'s not planned.' },
    { speaker: 'Trainer', speakerColor: 'orange', text: 'That spontaneity is everything. Now — he also has economy. Count his words at the moment of the goal.' },
    { speaker: 'Student', speakerColor: 'green', text: '"GOAL!" — just one word. Then silence again. Then he builds back up with the context.' },
    { speaker: 'Trainer', speakerColor: 'orange', text: 'One word. One moment. That\'s the crescendo — and then he lets it die down before he continues. That\'s the craft.' },
    { speaker: 'Student', speakerColor: 'green', text: 'It\'s almost musical. The cadence rises, peaks, then falls. Like a piece of music.' },
  ],

  matchingExercise: [
    { word: 'Crescendo', definition: 'The gradual build to a peak — when excitement reaches its highest point' },
    { word: 'Cadence', definition: 'The rhythm and pace of speech — how fast or slow the voice moves' },
    { word: 'Anticlimax', definition: 'A disappointing end to something that was building to an exciting moment' },
    { word: 'Intonation', definition: 'The rise and fall of the voice to signal emotion or urgency' },
    { word: 'Evocative', definition: 'Language that strongly creates a feeling or image in the listener\'s mind' },
    { word: 'Spontaneity', definition: 'Reacting naturally in the moment — not planned or scripted' },
    { word: 'Economy', definition: 'Using fewer words to say more — cutting everything unnecessary' },
    { word: 'Articulate', definition: 'To express something clearly and precisely in words' },
  ],

  fillBlankExercise: [
    { before: 'The commentary built to a perfect', answer: 'crescendo', after: 'as the ball hit the back of the net.' },
    { before: 'His', answer: 'cadence', after: 'slows before a goal — the pause is part of the drama.' },
    { before: 'The VAR delay was a terrible', answer: 'anticlimax', after: '— the goal was ruled out after the crowd had celebrated.' },
    { before: 'She', answer: 'articulated', after: 'the tactical situation perfectly — every listener understood the problem.' },
    { before: 'Great commentators', answer: 'pick up on', after: 'small details that make the broadcast feel alive.' },
    { before: 'His voice', answer: 'ramps up', after: 'dramatically in the final ten minutes — every touch feels huge.' },
    { before: 'After the missed penalty, her energy', answer: 'falls away', after: '— she lets the moment breathe.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the "dramatic present" in commentary?',
      options: ['Using present simple tense to describe live action as it happens, creating immediacy', 'Describing past goals in an exciting way to fill time', 'Adding dramatic music under the commentary to increase tension'],
      correctIndex: 0,
    },
    {
      question: 'Why do great commentators use silence?',
      options: ['Silence builds tension — the moment before a goal is sometimes more powerful than the call itself', 'They lose their voice during emotional moments and need to pause', 'Silence is required by broadcasting regulations during VAR checks'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "His delivery ___ up dramatically in the final ten minutes."',
      options: ['ramps', 'builds', 'picks'],
      correctIndex: 0,
    },
    {
      question: 'What does "economy of language" mean in commentary?',
      options: ['Using fewer, more precise words — cutting everything unnecessary', 'Using cheap, simple vocabulary that everyone can understand', 'Saving the best lines for the most important matches'],
      correctIndex: 0,
    },
    {
      question: 'What is the purpose of the "slow build" in commentary?',
      options: ['To create tension in the thirty seconds before a chance — lowering the voice before the explosive moment', 'To fill time when there is no action on the pitch', 'To allow the co-commentator to speak before the main call'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word to complete each sentence about commentary craft.',
    items: [
      {
        sentence: 'She ___ the tactical situation perfectly — the listener understood the problem immediately.',
        options: ['articulated', 'intonated', 'ramped'],
        correctIndex: 0,
        explanation: '"Articulate" means to express something clearly and precisely in words.',
      },
      {
        sentence: 'The phrase \'theatre of dreams\' is ___ — it makes you picture something without describing it directly.',
        options: ['evocative', 'economic', 'spontaneous'],
        correctIndex: 0,
        explanation: '"Evocative" means strongly bringing a feeling or image to mind.',
      },
      {
        sentence: 'After the missed penalty, his energy ___ away — he let the silence do the work.',
        options: ['fell', 'died', 'ramped'],
        correctIndex: 0,
        explanation: '"Fall away" means to decrease or fade — the right response to an anticlimax.',
      },
      {
        sentence: 'His commentary ___ up in intensity as the clock ticked into injury time.',
        options: ['ramped', 'fell', 'died'],
        correctIndex: 0,
        explanation: '"Ramp up" means to increase sharply and quickly in energy or intensity.',
      },
      {
        sentence: 'The best commentators prepare everything except the ___.',
        options: ['spontaneity', 'economy', 'cadence'],
        correctIndex: 0,
        explanation: 'Spontaneity cannot be rehearsed — it is the natural, authentic reaction to the moment.',
      },
      {
        sentence: 'He ___ on the striker\'s body language before the penalty: \'He looks completely calm.\'',
        options: ['picked up', 'built up', 'kicked off'],
        correctIndex: 0,
        explanation: '"Pick up on" means to notice and use a small detail to add meaning or insight.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are training as a football commentator. Choose the most effective response for each moment.',
      items: [
        {
          customerLine: 'A VAR check is happening and the stadium has gone silent. What do you say?',
          options: [
            '"We wait. The referee is at the pitchside monitor. Sixty thousand people holding their breath. Let\'s see if the goal stands."',
            '"Oh no, not VAR again. This is so boring. The game is ruined."',
            '"I have no idea what\'s happening so I\'ll just be quiet until someone tells me."',
          ],
          correctIndex: 0,
          explanation: 'Good VAR commentary acknowledges the moment, describes what\'s happening, and keeps the listener engaged without speculation.',
        },
        {
          customerLine: 'The striker has just missed an open goal from six yards. What do you say?',
          options: [
            '"Oh no... he has to score that. One-v-one, six yards — and it\'s over the bar. Unbelievable."',
            '"That was an absolutely catastrophic failure from a player who should be ashamed of himself right now."',
            '"Well he missed it but I\'m sure he\'ll score eventually so not much to worry about."',
          ],
          correctIndex: 0,
          explanation: 'The best response captures the moment with impact but without melodrama — short sentences, letting the silence do some of the work.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the mistake in this commentary script.',
      dialogue: [
        { speaker: 'Commentator', speakerColor: 'orange', text: 'And here we go — the second half is kicking off at Old Trafford.' },
        { speaker: 'Commentator', speakerColor: 'orange', text: 'City have the ball. He passed it to the midfielder, who is driving forward now.' },
        { speaker: 'Commentator', speakerColor: 'orange', text: 'He\'s looking up — sees the run — and he plays it through!' },
        { speaker: 'Commentator', speakerColor: 'orange', text: 'One-v-one with the keeper — he shoots — GOAL! An absolutely brilliant finish!' },
        { speaker: 'Commentator', speakerColor: 'orange', text: 'What a start to the second half. City lead 2-0 and the game looks over.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'He passed it to the midfielder, who is driving forward now.',
          correction: 'He plays it to the midfielder, who drives forward!',
          explanation: 'Commentary uses the dramatic present tense throughout. "Passed" (past simple) breaks the immediacy. Replace with "plays" and "drives" to maintain the present tense energy.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the commentary line in a natural, dramatic way.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'The free kick is thirty yards out. He steps up, takes a long run-up...',
          suggestedCompletion: 'curls it — bends it beautifully over the wall — and it crashes off the crossbar! So close! So agonisingly close!',
        },
        {
          customerLine: '',
          salespersonStart: 'Ninety minutes. One-nil. The keeper picks the ball up. Ninety seconds left...',
          suggestedCompletion: 'the stadium is silent. Every touch feels like the last touch of the season. He plays it short — and the whistle blows! They\'ve done it!',
        },
        {
          customerLine: '',
          salespersonStart: 'And that\'s full-time here at Wembley. What a match. What a night...',
          suggestedCompletion: 'two goals in the last five minutes, a red card, a penalty saved — and City emerge as champions. Football at its most extraordinary.',
        },
      ],
    },
  },
};

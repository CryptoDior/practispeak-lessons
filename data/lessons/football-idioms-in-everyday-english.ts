import { Lesson } from '@/types/lesson';

export const footballIdiomsInEverydayEnglish: Lesson = {
  slug: 'football-idioms-in-everyday-english',
  title: 'Football Idioms in Everyday English',
  subtitle: 'Unit 3 — Football Idioms & Culture',
  level: 'B1-B2',
  description: 'Football has given the English language some of its most widely used idioms. This lesson explores how phrases from the pitch appear in politics, business, and everyday conversation — and what they actually mean.',
  heroImage: '/images/football-idioms.png',

  warmUp: {
    questions: [
      'Can you think of any phrases from sport that people use in everyday conversation — at work, in the news, or with friends?',
      'Have you ever heard someone say "move the goalposts" or "level playing field" outside of football? What did they mean?',
      'Why do you think sports idioms are so common in business and politics?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Focus: Idiomatic Language in Context',
    description: 'An idiom is a fixed expression whose meaning cannot be understood from the individual words alone. Football has contributed many idioms to standard English — phrases that native speakers use without thinking about football at all. To use idioms naturally, you need to understand their metaphorical meaning and the register in which they work. Most football idioms are informal or neutral and work well in journalism, business, and politics. When using idioms, context matters — "kick off" can mean the start of a meeting or argument, and "in the net" rarely appears outside football. Check whether an idiom has crossed into general English before using it in formal writing.',
    positiveExamples: [
      {
        sentence: 'They keep moving the goalposts — the criteria change every time we get close to meeting them.',
        note: '(idiom in a business context)',
      },
      {
        sentence: 'We just want a level playing field — the same rules for every competitor.',
        note: '(idiom in a legal or political context)',
      },
      {
        sentence: 'Launching the new product now would be an own goal — the market isn\'t ready.',
        note: '(idiom meaning a self-defeating action)',
      },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'MOVE THE GOALPOSTS',
      partOfSpeech: 'phrase',
      definition: 'To change the rules or requirements of a situation after it has already started — making it harder for others to succeed.',
      example: '"Every time we met the deadline, they moved the goalposts — it felt like nothing we did was ever enough."',
      imageSlug: '/images/move-the-goalposts.png',
    },
    {
      word: 'ON THE BALL',
      partOfSpeech: 'phrase',
      definition: 'Alert, aware, and quick to react — fully focused and efficient.',
      example: '"She\'s completely on the ball — she spotted the error in the report before anyone else had even opened it."',
      imageSlug: '/images/on-the-ball.png',
    },
    {
      word: 'LEVEL PLAYING FIELD',
      partOfSpeech: 'phrase',
      definition: 'A situation in which everyone has equal conditions and the same opportunities — no unfair advantages.',
      example: '"We\'re not asking for special treatment — just a level playing field where every company competes on the same terms."',
      imageSlug: '/images/level-playing-field.png',
    },
    {
      word: 'OWN GOAL',
      partOfSpeech: 'phrase',
      definition: 'An action that harms the person who did it — similar to accidentally scoring against your own team.',
      example: '"Releasing the statement on the same day as the competitor\'s launch was a massive own goal — it got buried completely."',
      imageSlug: '/images/own-goal.png',
    },
    {
      word: 'KICK OFF',
      partOfSpeech: 'phrase',
      definition: 'To begin — used for starting meetings, events, or arguments. In informal British English it can also mean to start a conflict.',
      example: '"Let\'s kick off the meeting with a quick update from each team — then we\'ll move on to the main agenda."',
      imageSlug: '/images/kick-off-idiom.png',
    },
    {
      word: 'IN EXTRA TIME',
      partOfSpeech: 'phrase',
      definition: 'At the very last moment, often under pressure — used outside football to describe a near-miss deadline situation.',
      example: '"They submitted the proposal in extra time — the email came through with literally three minutes to spare."',
      imageSlug: '/images/in-extra-time.png',
    },
    {
      word: 'STEP UP',
      partOfSpeech: 'phrase',
      definition: 'To take greater responsibility or perform at a higher level — especially when circumstances demand it.',
      example: '"With the captain injured, the vice-captain stepped up and led the team to the final."',
      imageSlug: '/images/step-up.png',
    },
    {
      word: 'A WHOLE NEW BALLGAME',
      partOfSpeech: 'phrase',
      definition: 'A completely different situation — used when circumstances have changed so much that previous experience no longer applies.',
      example: '"We\'ve sold to small businesses for years — enterprise clients are a whole new ballgame. The sales cycle is three times as long."',
      imageSlug: '/images/whole-new-ballgame.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'KICK OFF',
      definition: 'To start or begin — an event, meeting, argument, or project.',
      example: '"The conference kicks off at nine — make sure you\'re there for the opening keynote."',
      imageSlug: '/images/kick-off.png',
},
    {
      phrase: 'STEP UP',
      definition: 'To take more responsibility or perform at a higher level than before.',
      example: '"With the captain injured, the vice-captain stepped up and led the team to the final."',
      imageSlug: '/images/step-up-pv.png',
},
    {
      phrase: 'FALL BEHIND',
      definition: 'To drop behind a required standard, pace, or competitor — to fail to keep up.',
      example: '"If we don\'t invest in new technology, we\'ll fall behind our competitors within two years."',
      imageSlug: '/images/fall-behind.png',
},
    {
      phrase: 'LEVEL UP',
      definition: 'To improve to a higher standard — often used about skills, performance, or status.',
      example: '"She spent the off-season working on her weaker foot — by pre-season she had levelled up significantly."',
      imageSlug: '/images/level-up.png',
},
    {
      phrase: 'SET UP',
      definition: 'To create the conditions for something — an opportunity, a goal, or a result.',
      example: '"The defensive error set up a one-on-one that the striker converted without hesitation."',
      imageSlug: '/images/set-up.png',
},
    {
      phrase: 'PRESS ON',
      definition: 'To continue despite difficulty — to keep going forward without stopping.',
      example: '"Despite the setback, the team pressed on — winning three consecutive matches after the defeat."',
      imageSlug: '/images/press-on.png',
},
  ],

  onThePitch: {
    instructions: 'These idioms started on the football pitch — hear how players and coaches use them in live match situations.',
    items: [
      {
        cue: '"On the ball!" — alertness and awareness',
        meaning: 'Originally a literal instruction to a teammate to stay sharp and ready; now the most common English idiom for being alert and competent.',
        usage: '"On the ball!" shouted by a midfielder means: eyes up, be ready to receive, don\'t switch off. "She was really on the ball today — she read every pass before it came." In everyday English it means sharp and competent — "He\'s very on the ball in meetings." On the pitch it is still used literally: "Stay on the ball! Eyes open! Read the press!"',
        imageSlug: 'otp-on-the-ball',
      },
      {
        cue: '"Move the goalposts" — changing the rules mid-situation',
        meaning: 'If someone moves the goalposts during a game, the entire contest becomes invalid — the rules changed after it started. This idiom describes exactly that: unfair last-minute changes.',
        usage: 'On the pitch: a coach changing tactical instructions at half-time without warning can feel like moving the goalposts. "Every time I think I know my role, he changes it — it\'s like he keeps moving the goalposts." In everyday English: "They agreed a fee then moved the goalposts — suddenly they wanted an extra 10 million." The football origin makes the idiom vivid: you cannot play if the goal keeps shifting.',
        imageSlug: 'otp-move-goalposts',
      },
      {
        cue: '"A level playing field" — equal conditions for both sides',
        meaning: 'A pitch that slopes or is uneven gives one team an unfair advantage. "Level playing field" = fair, equal starting conditions for all.',
        usage: 'On the pitch, teams literally check if the surface is level — a sloping pitch changes how the ball moves and which team has the advantage in each half. "We want a level playing field — no favours, no excuses, just football." In business: "We need a level playing field before we can compete with the bigger clubs." Players use it: "We weren\'t on a level playing field — they had three months\' more pre-season than us."',
        imageSlug: 'otp-level-playing-field',
      },
      {
        cue: '"Hit the back of the net" — the moment of scoring',
        meaning: 'The literal sound and sight of a perfect goal — the ball hitting the back of the net. Used in commentary and everyday English to mean achieving something decisively.',
        usage: '"He hit the back of the net with his first touch — no goalkeeper in the world was saving that." Commentators use it for emphatic goals: not just a goal, but one struck so cleanly the net billows. In everyday English: "We hit the back of the net with that proposal — the client signed immediately." On the pitch, players celebrate with "Get in! Back of the net!" The idiom captures the feeling of a clean, decisive success.',
        imageSlug: 'otp-back-of-the-net',
      },
      {
        cue: '"Kick into touch" — removing something from play deliberately',
        meaning: 'Kicking the ball into touch (out of play) ends that phase of play immediately. The idiom means deliberately removing something problematic from a situation.',
        usage: 'On the pitch: "Kick it into touch! Just get it out of play!" — used when a team is under pressure and needs to stop the game. Time management, injury time, protecting a lead. "The captain kicked it into touch to let the injured player receive treatment." In business English: "We kicked that idea into touch early — it wasn\'t going to work." On the pitch it is a pragmatic decision: sometimes stopping play is the correct choice.',
        imageSlug: 'otp-kick-into-touch',
      },
      {
        cue: '"A game of two halves" — how situations can reverse completely',
        meaning: 'Football is structured in two halves — and the second half can completely reverse what happened in the first. The idiom means: do not judge a situation until it is finished.',
        usage: '"It was a game of two halves — we were terrible in the first half and brilliant in the second." Commentators, managers, and pundits use this constantly. On the pitch at half-time: "Forget the first half — this is a new game. A game of two halves, lads — we start again." In everyday English: "The project has been a game of two halves — awful start, strong finish." The lesson: never assume the outcome until the final whistle.',
        imageSlug: 'otp-game-of-two-halves',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Journalist', speakerColor: 'orange', text: 'When did you first start noticing football idioms in non-football contexts?' },
    { speaker: 'Academic', speakerColor: 'blue', text: 'During a political debate — a minister said "we need a level playing field" without a hint of irony. That phrase has completely escaped football.' },
    { speaker: 'Journalist', speakerColor: 'orange', text: 'And "move the goalposts" — that\'s everywhere. You hear it in contracts, negotiations, parenting...' },
    { speaker: 'Academic', speakerColor: 'blue', text: 'Exactly. The metaphor is so clear that people don\'t even register it as a sports phrase anymore. It\'s just English.' },
    { speaker: 'Journalist', speakerColor: 'orange', text: 'Is that true of all football idioms? Some feel more locked to the game.' },
    { speaker: 'Academic', speakerColor: 'blue', text: '"In extra time" still feels specific. People understand it, but it hasn\'t fully crossed over the way "own goal" has.' },
    { speaker: 'Journalist', speakerColor: 'orange', text: 'What about new ones? Are idioms still being created from football?' },
    { speaker: 'Academic', speakerColor: 'blue', text: 'Constantly. "Parking the bus" is gaining traction beyond sport. "Getting a result" is almost completely general now.' },
  ],

  matchingExercise: [
    { word: 'Move the goalposts', definition: 'To change the rules or requirements unfairly during a process' },
    { word: 'On the ball', definition: 'Alert, aware, and quick to react' },
    { word: 'Level playing field', definition: 'A fair situation with equal conditions for everyone' },
    { word: 'Own goal', definition: 'An action that accidentally harms the person who did it' },
    { word: 'Kick off', definition: 'To begin or start something' },
    { word: 'In extra time', definition: 'At the very last moment, under pressure' },
    { word: 'Step up', definition: 'To take more responsibility or perform at a higher level' },
    { word: 'A whole new ballgame', definition: 'A completely different situation requiring new approaches' },
  ],

  fillBlankExercise: [
    { before: 'She noticed the error immediately — she\'s always completely', answer: 'on the ball', after: 'at work.' },
    { before: 'Announcing the price rise the same week as the scandal was a real', answer: 'own goal', after: 'for the company.' },
    { before: 'The summit will', answer: 'kick off', after: 'with speeches from both heads of state.' },
    { before: 'We just need a', answer: 'level playing field', after: '— the same tax rates as our international competitors.' },
    { before: 'With the director ill, the deputy had to', answer: 'step up', after: 'and lead the project alone.' },
    { before: 'The contract was signed', answer: 'in extra time', after: '— 11:57pm on the final deadline day.' },
    { before: 'They keep moving', answer: 'the goalposts', after: '— every time we meet the criteria, the criteria change.' },
    { before: 'Working with institutional clients is a', answer: 'whole new ballgame', after: '— the process is far more regulated than retail.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"The CEO kicked off the conference with a bold vision statement." What does "kicked off" mean here?',
      options: ['Started', 'Ended', 'Interrupted', 'Cancelled'],
      correctIndex: 0,
    },
    {
      question: '"Releasing that statement was a massive own goal." What does "own goal" mean here?',
      options: ['A self-inflicted mistake', 'An impressive achievement', 'A deliberate strategy', 'A referee\'s decision'],
      correctIndex: 0,
    },
    {
      question: '"We need a level playing field before any negotiation can succeed." What does this phrase mean?',
      options: ['Equal and fair conditions for all parties', 'A flat surface for the meeting', 'More time to prepare', 'Additional staff'],
      correctIndex: 0,
    },
    {
      question: '"They keep moving the goalposts." What behaviour does this describe?',
      options: ['Changing the rules after the process has started', 'Improving performance consistently', 'Setting very high targets', 'Refusing to negotiate'],
      correctIndex: 0,
    },
    {
      question: '"She\'s completely on the ball today." What does "on the ball" mean?',
      options: ['Alert and attentive', 'Physically active', 'In a good mood', 'Under pressure'],
      correctIndex: 0,
    },
    {
      question: '"They got the deal signed in extra time." What does "in extra time" suggest?',
      options: ['At the very last moment', 'With additional help', 'Earlier than expected', 'After a long break'],
      correctIndex: 0,
    },
    {
      question: '"Working with governments is a whole new ballgame." What does this mean?',
      options: ['A completely different situation', 'A more exciting challenge', 'A familiar process', 'A sport-related project'],
      correctIndex: 0,
    },
    {
      question: '"With the manager sacked, the assistant had to step up." What does "step up" mean?',
      options: ['Take on greater responsibility', 'Leave the organisation', 'Reduce their workload', 'Request help from others'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the correct form of the idiom or expression.',
    items: [
      {
        sentence: 'By the time we submitted the final draft, the client had already _____ the goalposts twice.',
        options: ['moved', 'moving', 'move'],
        correctIndex: 0,
        explanation: 'Past perfect — "had already moved" — because the goalposts were moved BEFORE the draft was submitted. The past perfect shows one past event happened before another.',
      },
      {
        sentence: 'The initiative _____ with a keynote from the CEO and a panel discussion.',
        options: ['kicked off', 'was kicking off', 'has kicked off'],
        correctIndex: 0,
        explanation: 'Simple past — "kicked off" — reporting a completed past event in neutral narrative style, standard in business reports and journalism.',
      },
      {
        sentence: 'If the market conditions change, working with retail clients will be a whole new _____.',
        options: ['ballgame', 'ball', 'game'],
        correctIndex: 0,
        explanation: '"A whole new ballgame" is a fixed noun phrase — only the noun "ballgame" is grammatically correct here. "Ball" and "game" are not part of this fixed expression.',
      },
      {
        sentence: 'She _____ completely on the ball throughout the crisis — anticipating problems before they occurred.',
        options: ['was', 'had', 'did'],
        correctIndex: 0,
        explanation: '"On the ball" is a fixed adjectival phrase following a linking verb. "Was on the ball" is the correct past tense form. "Had" and "did" are grammatically incorrect with this idiom.',
      },
      {
        sentence: 'Refusing to negotiate at that stage was _____ own goal — it cost them the contract.',
        options: ['an', 'a', 'the'],
        correctIndex: 0,
        explanation: '"An own goal" — note the article "an" (not "a") because "own" starts with a vowel sound. Standard article rules apply to idioms used as nouns.',
      },
      {
        sentence: 'The deputy _____ when the senior manager resigned, and handled the transition with composure.',
        options: ['stepped up', 'was stepping up', 'has stepped up'],
        correctIndex: 0,
        explanation: 'Simple past — "stepped up" — a completed action. "Step up" is a regular phrasal verb: step → stepped. The simple past is correct for a single completed event in the past.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Choose the most natural response using a football idiom.',
      items: [
        {
          customerLine: 'A colleague says: "Every time we meet the new requirements, they change them again." How do you respond?',
          options: [
            '"They keep moving the goalposts — it\'s completely unreasonable."',
            '"They kicked off the goalposts."',
            '"They played an own goal with the requirements."',
          ],
          correctIndex: 0,
          explanation: '"Moving the goalposts" is the correct idiom for when rules or requirements keep changing. "Kicked off the goalposts" is not a real expression, and "played an own goal" misuses the idiom.',
        },
        {
          customerLine: 'A manager asks: "Did anyone spot the mistake in the figures before we sent them?" You want to praise a colleague.',
          options: [
            '"Yes — she was completely on the ball."',
            '"Yes — she was at the level playing field."',
            '"Yes — she kicked it off."',
          ],
          correctIndex: 0,
          explanation: '"On the ball" means alert and attentive — the correct idiom to describe someone who spotted a problem quickly. The other options misuse the idioms from different contexts.',
        },
        {
          customerLine: 'A client says: "We\'d like the same pricing terms as your biggest customers." How do you respond professionally?',
          options: [
            '"We understand — you\'re looking for a level playing field."',
            '"You want to move the goalposts on pricing."',
            '"You want to kick off the pricing discussion?"',
          ],
          correctIndex: 0,
          explanation: '"Level playing field" describes equal conditions — exactly what the client is asking for. "Move the goalposts" describes changing rules unfairly, which misrepresents the client\'s request.',
        },
        {
          customerLine: 'Your manager asks: "What went wrong with the product launch?" How do you honestly describe the timing error?',
          options: [
            '"Launching on the same day as the competitor was a real own goal."',
            '"We moved the goalposts on launch day."',
            '"We kicked off without a level playing field."',
          ],
          correctIndex: 0,
          explanation: '"Own goal" perfectly describes a self-inflicted mistake. "Moved the goalposts" means changing rules, which is not the issue. The third option mixes idioms in a way that makes no sense.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'The dialogue below contains three language errors — incorrect idioms, wrong grammar, or unnatural phrasing. Find and correct them.',
      dialogue: [
        { speaker: 'Tom', text: 'The board keeps to move the goalposts on this project — every meeting there are new requirements.' },
        { speaker: 'Sara', text: 'I know. It\'s frustrating. We were completely on the ball last time and they still changed things.' },
        { speaker: 'Tom', text: 'And announcing the delay on the same day as the rival launch was a real own goal for us.' },
        { speaker: 'Sara', text: 'Totally. When do you think the new CEO will kick off his first strategy session?' },
        { speaker: 'Tom', text: 'Next Monday. I just hope it\'s a level play field for all the regional teams this time.' },
        { speaker: 'Sara', text: 'Agreed. Last year only the London office had a say — that really wasn\'t on the ball of them.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'keeps to move',
          correction: 'keeps moving',
          explanation: '"Keep" is followed by a gerund (-ing form), not an infinitive. The correct form is "keeps moving the goalposts". This is a standard grammar rule: keep + -ing.',
        },
        {
          lineIndex: 4,
          incorrectText: 'level play field',
          correction: 'level playing field',
          explanation: 'The fixed idiom is "level PLAYING field" — "playing" is part of the set phrase and cannot be omitted or changed to "play".',
        },
        {
          lineIndex: 5,
          incorrectText: 'wasn\'t on the ball of them',
          correction: 'was an own goal for them',
          explanation: '"On the ball" describes alertness — it does not describe a mistake. The correct idiom for a self-inflicted error is "an own goal".',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each sentence naturally using an appropriate football idiom.',
      items: [
        {
          customerLine: 'Complete this sentence about an industry change.',
          salespersonStart: 'The new regulations have completely changed how we operate — this is...',
          suggestedCompletion: 'a whole new ballgame for the entire industry.',
        },
        {
          customerLine: 'Complete this sentence about a last-minute rule change.',
          salespersonStart: 'By changing the submission deadline at the last minute, the committee...',
          suggestedCompletion: 'moved the goalposts again — and nobody had been warned.',
        },
        {
          customerLine: 'Complete this sentence praising someone\'s attention to detail.',
          salespersonStart: 'She noticed the discrepancy in the data before anyone else — she\'s always...',
          suggestedCompletion: 'completely on the ball, even under pressure.',
        },
        {
          customerLine: 'Complete this sentence describing a communications disaster.',
          salespersonStart: 'Publishing that response was their biggest mistake — it was...',
          suggestedCompletion: 'a spectacular own goal that set the whole campaign back.',
        },
      ],
    },
  },
};

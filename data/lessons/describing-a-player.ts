import { Lesson } from '@/types/lesson';

export const describingAPlayer: Lesson = {
  slug: 'describing-a-player',
  title: 'Describing a Player',
  subtitle: 'Adjectives to describe footballers — quick, strong, clinical, creative, reliable',
  level: 'A2',
  description: 'Learn the adjectives fans and commentators use to describe football players. Practice placing adjectives correctly in a sentence and build your vocabulary for talking about what makes a great footballer.',
  heroImage: '/images/describing-a-player-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Adjectives — describing players',
    description: 'We use adjectives to describe players. In English, adjectives come BEFORE the noun or AFTER "be". You can use more than one adjective together.',
    positivePattern: 'Subject + is/was + adjective',
    positiveExample: '"She is quick and creative — a fantastic player to watch."',
    negativePattern: 'Subject + is/was + NOT + adjective',
    negativeExample: '"He is not reliable — he performs well one week and disappears the next."',
    positiveExamples: [
      { sentence: 'He is a clinical striker — he never wastes a chance.', note: '(adjective before noun: "a clinical striker")' },
      { sentence: 'She is creative in midfield — always finding the right pass.', note: '(adjective after "is")' },
      { sentence: 'He was strong in the air — excellent at headers.', note: '(adjective after "was")' },
      { sentence: 'She is a quick, technical winger.', note: '(two adjectives before noun, separated by comma)' },
    ],
    negativeExamples: [
      { sentence: 'He is not consistent — brilliant one game, invisible the next.', note: '(is not + adjective)' },
      { sentence: 'She was not clinical enough — she missed three easy chances.', note: '(was not + adjective + enough)' },
    ],
  },

  vocabulary: [
    {
      word: 'QUICK',
      partOfSpeech: 'adjective',
      definition: 'Fast — able to run or move at high speed.',
      example: 'She is incredibly quick — defenders simply cannot keep up with her.',
      imageSlug: '/images/quick.png',
    },
    {
      word: 'STRONG',
      partOfSpeech: 'adjective',
      definition: 'Powerful and physical — able to hold off opponents and win challenges.',
      example: 'He is strong in the air and wins almost every header — the perfect target man.',
      imageSlug: '/images/strong.png',
    },
    {
      word: 'CLINICAL',
      partOfSpeech: 'adjective',
      definition: 'Precise and efficient in front of goal — does not miss easy chances.',
      example: 'She was clinical tonight — four shots, four goals.',
      imageSlug: '/images/clinical.png',
    },
    {
      word: 'CREATIVE',
      partOfSpeech: 'adjective',
      definition: 'Able to create chances — with clever passes and ideas other players do not see.',
      example: 'He is the most creative player in the league — his vision always surprises defenders.',
      imageSlug: '/images/creative.png',
    },
    {
      word: 'RELIABLE',
      partOfSpeech: 'adjective',
      definition: 'Consistent and dependable — performs well every game, not just occasionally.',
      example: 'She is not spectacular but she is reliable — coaches love players they can count on.',
      imageSlug: '/images/reliable.png',
    },
    {
      word: 'TECHNICAL',
      partOfSpeech: 'adjective',
      definition: 'Highly skilled with the ball — excellent first touch, passing, and control.',
      example: 'He is extremely technical — he can receive the ball under pressure and always finds a way out.',
      imageSlug: '/images/technical.png',
    },
    {
      word: 'COMPOSED',
      partOfSpeech: 'adjective',
      definition: 'Calm under pressure — does not panic in difficult situations.',
      example: 'She was composed in the penalty shootout — she looked completely calm before each kick.',
      imageSlug: '/images/composed.png',
    },
    {
      word: 'VERSATILE',
      partOfSpeech: 'adjective',
      definition: 'Able to play in several different positions — very useful for a manager.',
      example: 'He is versatile — he can play as a right back, a midfielder, or even a striker.',
      imageSlug: '/images/versatile.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'A NATURAL [POSITION]',
      definition: 'Someone who is naturally suited to a position — born to play there.',
      example: 'She is a natural goalkeeper — her reactions are instinctive, not just trained.',
      imageSlug: '/images/a-natural-position.png',
    },
    {
      phrase: 'STRONG IN THE AIR',
      definition: 'Good at heading the ball — able to win aerial duels.',
      example: 'He is strong in the air and scored two headers this season.',
      imageSlug: '/images/strong-in-the-air.png',
    },
    {
      phrase: 'GOOD WITH BOTH FEET',
      definition: 'Able to pass and shoot equally well with both the left and right foot.',
      example: 'She is good with both feet — defenders cannot predict which way she will go.',
      imageSlug: '/images/good-with-both-feet.png',
    },
    {
      phrase: 'READS THE GAME WELL',
      definition: 'Understands what is happening on the pitch — anticipates where the ball will go.',
      example: 'He reads the game well — he is never fast but always in the right position.',
      imageSlug: '/images/reads-the-game-well.png',
    },
    {
      phrase: 'LEADS BY EXAMPLE',
      definition: 'Motivates teammates through their own performances and hard work.',
      example: 'She leads by example — the hardest worker in training every day.',
      imageSlug: '/images/leads-by-example.png',
    },
    {
      phrase: 'A PLAYER IN FORM',
      definition: 'A player who is currently performing at a high level.',
      example: 'He is a player in form right now — three goals and two assists in the last four matches.',
      imageSlug: '/images/a-player-in-form.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases players, coaches, and fans use to describe players during and after a game.',
    items: [
      {
        cue: "He's electric!",
        meaning: 'He is incredibly fast and exciting to watch.',
        usage: 'Shouted by fans or commentators when a quick player accelerates past a defender. "Electric" suggests speed and energy — very common informal praise for pace.',
        imageSlug: 'otp-hes-electric',
      },
      {
        cue: 'What a touch!',
        meaning: 'That was an excellent first touch — the player controlled the ball perfectly.',
        usage: 'Shouted when a technical player takes down a difficult ball with great control. A good first touch gives a player time and space to play.',
        imageSlug: 'otp-what-a-touch',
      },
      {
        cue: "He's a machine!",
        meaning: 'He is incredibly consistent and never has a bad performance.',
        usage: 'Said about highly reliable and hard-working players. It suggests the player performs at the same high level every game — like a machine that never breaks down.',
        imageSlug: 'otp-hes-a-machine',
      },
      {
        cue: 'Use him!',
        meaning: 'Pass the ball to that player — they are in a good position.',
        usage: 'Shouted by fans or teammates when a player with good physical attributes is in space and being ignored. Get the ball to the best-placed player.',
        imageSlug: 'otp-use-him',
      },
      {
        cue: 'She can do it all!',
        meaning: 'She is a complete, versatile player who is strong in every area.',
        usage: 'Said about versatile players who are quick, technical, creative, AND reliable. It is high praise — most players are strong in just one or two areas.',
        imageSlug: 'otp-she-can-do-it-all',
      },
      {
        cue: 'Not his best today.',
        meaning: 'He performed below his normal standard — he did not play well.',
        usage: 'Said politely when a usually reliable player had a difficult game. It is a softer criticism — acknowledging the player is usually better.',
        imageSlug: 'otp-not-his-best-today',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Today we are going to describe players. Sofia — tell me about your favourite footballer. Use adjectives.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'She is [[quick:fast — able to run at high speed]] and [[creative:able to create chances with clever passes]]. She reads the game well and she is [[reliable:consistent and dependable every game]].',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Excellent. Three adjectives. Ronaldo — what about the best striker you have seen this season?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'He is [[clinical:precise and efficient in front of goal]] and [[strong:powerful and physical]] in the air. He is [[strong in the air:good at heading the ball]] — he scores so many headers.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. What is the difference between "quick" and "strong"?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: '"Quick" describes speed — how fast a player moves. "Strong" describes physical power — how well they hold off opponents and win challenges.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. And what about [[versatile:able to play in several different positions]]? Why is a versatile player useful?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Because the coach can play them in many positions. If someone is injured, a versatile player can cover. They are very useful in a squad.',
    },
  ],

  matchingExercise: [
    { word: 'QUICK', definition: 'Fast — able to run at high speed' },
    { word: 'STRONG', definition: 'Powerful and physical — wins challenges and dominates in the air' },
    { word: 'CLINICAL', definition: 'Precise and efficient in front of goal — does not miss easy chances' },
    { word: 'CREATIVE', definition: 'Makes things happen — clever passes and ideas other players do not see' },
    { word: 'RELIABLE', definition: 'Consistent and dependable — performs well every single game' },
    { word: 'TECHNICAL', definition: 'Highly skilled with the ball — excellent touch and passing' },
    { word: 'COMPOSED', definition: 'Calm under pressure — does not panic in difficult situations' },
    { word: 'VERSATILE', definition: 'Able to play in several different positions' },
  ],

  fillBlankExercise: [
    { before: 'She never misses an easy chance — she is absolutely', answer: 'clinical', after: 'in front of goal.' },
    { before: 'He can play as a defender, a midfielder, or a striker — he is very', answer: 'versatile', after: '.' },
    { before: 'She stayed calm in the penalty shootout — she was completely', answer: 'composed', after: 'under pressure.' },
    { before: 'He always finds the right pass and creates chances — he is the most', answer: 'creative', after: 'player in the team.' },
    { before: 'Defenders cannot catch her — she is incredibly', answer: 'quick', after: 'over the first ten metres.' },
    { before: 'He wins every header and holds off every challenge — he is', answer: 'strong', after: 'in the air.' },
    { before: 'She performs at a high level every week — she is incredibly', answer: 'reliable', after: '— coaches love her.' },
    { before: 'His first touch is perfect even under pressure — he is', answer: 'technical', after: 'in the tightest spaces.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which adjective describes a player who is calm and does not panic under pressure?',
      options: ['Clinical', 'Composed', 'Creative'],
      correctIndex: 1,
    },
    {
      question: 'A player who scores almost every chance they have is described as:',
      options: ['Reliable', 'Strong', 'Clinical'],
      correctIndex: 2,
    },
    {
      question: 'Which sentence uses adjectives correctly in English?',
      options: [
        'She is player quick.',
        'She is a quick player.',
        'She is player a quick.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "reads the game well" mean?',
      options: [
        'The player is very fast and always gets to the ball first',
        'The player understands what is happening and anticipates where the ball will go',
        'The player reads newspapers about football',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which player is described as "versatile"?',
      options: [
        'A striker who scores in every game',
        'A player who can play in many different positions',
        'A goalkeeper who never concedes goals',
      ],
      correctIndex: 1,
    },
    {
      question: 'A coach says: "He leads by example." What does this mean?',
      options: [
        'He is the captain and gives team talks before the match',
        'He motivates others by working hard and showing great performances himself',
        'He is the most experienced player in the squad',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which is the correct negative sentence?',
      options: [
        'He not is reliable.',
        'He is not reliable.',
        'He is reliable not.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "a player in form" mean?',
      options: [
        'A player who has recently signed a new contract',
        'A player who is currently performing at a high level',
        'A player who is physically very fit',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence. Choose the correct adjective or phrase.',
    items: [
      {
        sentence: 'She scored a hat-trick with three perfect shots — she was absolutely _____ tonight.',
        options: ['clinical', 'versatile', 'composed'],
        correctIndex: 0,
        explanation: '"Clinical" is correct. Three perfect shots with no misses is the definition of clinical — precise and efficient in front of goal. "Versatile" means able to play many positions. "Composed" means calm under pressure.',
      },
      {
        sentence: 'He can play as a goalkeeper, a centre-back, or a midfielder — he is incredibly _____.',
        options: ['reliable', 'versatile', 'creative'],
        correctIndex: 1,
        explanation: '"Versatile" is correct. Playing three completely different positions means the player can adapt to different roles. "Reliable" means consistent. "Creative" means making chances.',
      },
      {
        sentence: 'She is _____ in the air — she wins almost every header she goes for.',
        options: ['quick', 'technical', 'strong'],
        correctIndex: 2,
        explanation: '"Strong" is correct — specifically "strong in the air" is the standard phrase for winning aerial duels and headers. "Quick" is about running speed. "Technical" is about ball skills.',
      },
      {
        sentence: 'The fans shout "What a _____!" when a player controls a difficult ball perfectly.',
        options: ['touch', 'goal', 'save'],
        correctIndex: 0,
        explanation: '"Touch" is correct. "What a touch!" is the phrase used to praise an excellent first touch. "What a goal!" celebrates a scored goal. "What a save!" celebrates a goalkeeper.',
      },
      {
        sentence: 'He always performs at a high level — he is a _____ player that every coach wants.',
        options: ['quick', 'clinical', 'reliable'],
        correctIndex: 2,
        explanation: '"Reliable" is correct. Performing at a high level every game describes reliability — consistency over time. A player every coach wants is one who is consistent and dependable.',
      },
      {
        sentence: 'She _____ the game well — she is always in the right position before the ball arrives.',
        options: ['reads', 'watches', 'sees'],
        correctIndex: 0,
        explanation: '"Reads" is correct. "Reads the game well" is a fixed expression for a player who anticipates play. "Watches" and "sees" are not used in this fixed phrase.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read each situation and choose the best response.',
      items: [
        {
          customerLine: 'Your coach asks: "What adjectives describe a perfect striker?" Which answer is best?',
          options: [
            '"Quick and creative — they should be fast and make clever passes."',
            '"Clinical, strong in the air, and composed — they should score chances, win headers, and stay calm in front of goal."',
            '"Reliable and versatile — they should play in many positions."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. The key qualities for a striker are clinical (scoring chances), strong in the air (headers), and composed (calm in front of goal). Creative and quick are great but more typical of wingers. Versatility is useful but not the defining quality of a striker.',
        },
        {
          customerLine: 'A teammate says: "I want to be a better midfielder. What should I work on?" What is the best advice?',
          options: [
            '"Work on being more clinical — score more goals."',
            '"Work on being technical, creative, and reliable — great midfielders control the game with skill, create chances, and perform every week."',
            '"Work on being stronger — win more physical duels."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A great midfielder needs to be technical (ball control under pressure), creative (finding passes), and reliable (consistent every game). Being clinical is more for strikers.',
        },
        {
          customerLine: 'After the match, a fan says: "He missed three easy chances — he was terrible today." How do you respond?',
          options: [
            '"You are right — he is not clinical enough and should be dropped."',
            '"He had a difficult game, but he is usually reliable and composed. Everyone has a bad day — I expect he will bounce back."',
            '"He was not technical enough — his first touch was poor all game."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Missing chances shows a lack of clinical performance today — but calling the whole player terrible is unfair if they are usually reliable. Acknowledging the exception to his usual standard is the right response.',
        },
        {
          customerLine: 'The coach asks: "Why is a versatile player more valuable in a small squad?" What is the best answer?',
          options: [
            '"Because versatile players are usually quicker and stronger than specialists."',
            '"Because if one player gets injured, a versatile player can cover their position — the team does not need to change its whole system."',
            '"Because versatile players are always more reliable than specialists."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Versatility in a small squad is valuable because it provides cover — one player can perform multiple roles. Versatile players are not necessarily quicker, stronger, or more reliable than specialists.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this player description. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'She is a player quick and very technical.' },
        { speaker: 'Ronaldo', text: 'Yes — and she reads the game well. She is always in the right position.' },
        { speaker: 'Sofia', text: 'She is not never late to a challenge — always composed under pressure.' },
        { speaker: 'Ronaldo', text: 'Her first touch is perfect. She is strong in the air too — wins every header.' },
        { speaker: 'Sofia', text: 'And she is reliability — performs at a high level every single week.' },
        { speaker: 'Ronaldo', text: 'She can play as a winger, a striker, or a midfielder. She is very versatile — the coach loves her.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'a player quick',
          correction: 'a quick player',
          explanation: 'In English, adjectives come BEFORE the noun — "a quick player", not "a player quick." This is a very common mistake for speakers of Spanish, Portuguese, French, and Italian.',
        },
        {
          lineIndex: 2,
          incorrectText: 'is not never',
          correction: 'is never',
          explanation: '"Not never" is a double negative — you cannot use "not" and "never" together in standard English. Use just one: "she is never late" OR "she is not ever late."',
        },
        {
          lineIndex: 4,
          incorrectText: 'she is reliability',
          correction: 'she is reliable',
          explanation: '"Reliability" is a noun. After "is", you need an adjective — "reliable." Correct noun form: "Her reliability is excellent." Correct adjective form: "She is reliable."',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the coach's sentence using adjectives from this lesson.",
      items: [
        {
          customerLine: 'Ronaldo: What makes a complete, world-class defender?',
          salespersonStart: 'Coach Diallo: The best defenders are strong, composed, and they read the game well.',
          suggestedCompletion: 'Being strong means they win physical duels and headers. Being composed means they stay calm even when under pressure. Reading the game means they anticipate where the striker will run — so they are always in position. A defender who is also quick is very difficult to play against. But of all the qualities, composure is the most important — a panicking defender makes mistakes.',
        },
        {
          customerLine: 'Sofia: Why do coaches talk about "reliable" players so much? Is being reliable more important than being brilliant?',
          salespersonStart: 'Coach Diallo: In professional football, yes — reliability often wins more games than individual brilliance.',
          suggestedCompletion: 'A brilliant but inconsistent player performs amazingly one week and disappears the next. A reliable player performs at 7 or 8 out of 10 every single game. Over a long season, reliability wins leagues. Coaches cannot build a team around a player they cannot predict. That is why reliable players often captain their clubs — the team trusts them completely.',
        },
        {
          customerLine: 'Ronaldo: Can a goalkeeper be described with the same adjectives as outfield players?',
          salespersonStart: 'Coach Diallo: Many of the same adjectives apply — but goalkeepers have some unique qualities too.',
          suggestedCompletion: 'A goalkeeper can be quick — for coming off the line to claim crosses. They can be strong — for aerial duels. They can be composed and reliable — extremely important because mistakes lead directly to goals. They can be technical — modern goalkeepers need excellent passing to build from the back. But goalkeepers also need to be brave and communicate clearly. "Command your area" is a goalkeeper-specific phrase — it means taking control of the penalty box.',
        },
        {
          customerLine: 'Sofia: How do you describe a player who is quick AND technical AND creative AND clinical AND reliable?',
          salespersonStart: 'Coach Diallo: You call them a generational talent — or just the best player in the world.',
          suggestedCompletion: 'Very few players have all five qualities at the highest level. Most players are exceptional in one or two areas and competent in the others. A quick, creative winger who is also clinical becomes a goal threat as well as a chance creator — that combination is rare and very valuable. The best players make the hardest combination look easy.',
        },
      ],
    },
  },
};

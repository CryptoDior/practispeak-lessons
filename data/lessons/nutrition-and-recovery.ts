import { Lesson } from '@/types/lesson';

export const nutritionAndRecovery: Lesson = {
  slug: 'nutrition-and-recovery',
  title: 'Nutrition and Recovery',
  subtitle: 'Diet, hydration, sleep, ice bath',
  level: 'B1-B2',
  description: 'Learn the vocabulary for how professional footballers fuel their bodies and recover between matches — from diet and hydration to sleep and ice baths.',
  heroImage: '/images/nutrition-and-recovery-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Quantifiers — how much and how many',
    description: 'Quantifiers tell us the amount of something. Some work with countable nouns (carrots, litres, hours), some with uncountable nouns (water, sleep, protein), and some work with both. In nutrition and recovery, we use quantifiers constantly.',
    positivePattern: 'Countable: many, a few, several, a number of. Uncountable: much, a little, a lot of, plenty of. Both: some, any, enough, a lot of, plenty of, no.',
    positiveExample: '"She drinks plenty of water every day." (uncountable) / "He eats a few bananas before training." (countable) / "There is not much protein in this meal." (uncountable)',
    negativePattern: 'Do NOT use "many" with uncountable nouns or "much" with countable nouns.',
    negativeExample: 'WRONG: "She drinks many water." / RIGHT: "She drinks a lot of water." / WRONG: "He eats much bananas." / RIGHT: "He eats many bananas."',
    positiveExamples: [
      { sentence: 'Players need plenty of sleep to recover between matches — at least eight hours.', note: '(plenty of + uncountable noun "sleep")' },
      { sentence: 'She eats a few small meals throughout the day rather than two large ones.', note: '(a few + countable noun "meals")' },
      { sentence: 'There is not much time to recover between a Thursday match and a Sunday one.', note: '(not much + uncountable noun "time")' },
      { sentence: 'He does not eat many carbohydrates in the evenings — mainly protein and vegetables.', note: '(many + countable noun "carbohydrates")' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "She drinks many water before training."', note: '"Water" is uncountable — use "a lot of" or "plenty of," not "many."' },
      { sentence: 'RIGHT: "She drinks a lot of water before training."', note: '"A lot of" works with both countable and uncountable nouns.' },
    ],
  },

  vocabulary: [
    {
      word: 'HYDRATION',
      partOfSpeech: 'noun',
      definition: 'The amount of water in the body — staying properly hydrated means drinking enough water before, during, and after exercise.',
      example: 'Hydration is one of the most important factors in performance — even a small amount of dehydration can reduce speed and concentration.',
      imageSlug: '/images/hydration.png',
    },
    {
      word: 'CARBOHYDRATES',
      partOfSpeech: 'noun',
      definition: 'Foods that provide energy — like pasta, rice, bread, and potatoes. Essential fuel for exercise. Often shortened to "carbs."',
      example: 'She eats a lot of carbohydrates the evening before a match — to fuel her body for 90 minutes of intense running.',
      imageSlug: '/images/carbohydrates.png',
    },
    {
      word: 'PROTEIN',
      partOfSpeech: 'noun',
      definition: 'A nutrient found in meat, fish, eggs, and beans — it helps repair and build muscles after exercise.',
      example: 'After training, he eats plenty of protein — chicken, eggs, fish — to help his muscles recover and grow stronger.',
      imageSlug: '/images/protein.png',
    },
    {
      word: 'ICE BATH',
      partOfSpeech: 'noun',
      definition: 'Sitting in a bath filled with cold water and ice after exercise — used to reduce muscle soreness and speed up recovery.',
      example: 'After every match, the squad goes into an ice bath — it is painful but it reduces soreness significantly the next day.',
      imageSlug: '/images/ice-bath.png',
    },
    {
      word: 'RECOVERY',
      partOfSpeech: 'noun',
      definition: 'The process of the body repairing itself after exercise — rest, sleep, nutrition, and hydration all contribute to recovery.',
      example: 'Recovery is as important as training — a player who does not recover properly will not perform at their best in the next session.',
      imageSlug: '/images/recovery.png',
    },
    {
      word: 'NUTRITION',
      partOfSpeech: 'noun',
      definition: 'The food and drink a player consumes — and how it affects their health and performance.',
      example: 'The club\'s nutritionist designs meal plans for every player — making sure they get the right nutrition for their specific role.',
      imageSlug: '/images/nutrition.png',
    },
    {
      word: 'SUPPLEMENT',
      partOfSpeech: 'noun',
      definition: 'An extra substance taken to improve performance or fill a nutritional gap — like vitamins, protein shakes, or energy gels.',
      example: 'Some players take supplements — but the club nutritionist always checks that they are allowed under the anti-doping rules.',
      imageSlug: '/images/supplement.png',
    },
    {
      word: 'MASSAGE',
      partOfSpeech: 'noun',
      definition: 'Treatment where the muscles are pressed and rubbed — to relieve tension, reduce soreness, and improve blood flow.',
      example: 'He gets a massage after every match — the physio works on his legs for 30 minutes to help the muscles recover.',
      imageSlug: '/images/massage.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'FUEL UP',
      definition: 'To eat food before exercise — to provide energy for the session or match.',
      example: 'They fuel up with pasta and vegetables three hours before the match — not too close to kick-off.',
      imageSlug: '/images/fuel-up.png',
    },
    {
      phrase: 'TAKE IN',
      definition: 'To consume food or drink — to eat or drink something.',
      example: 'She takes in a lot of fluid during training — sipping water every few minutes to stay hydrated.',
      imageSlug: '/images/take-in.png',
    },
    {
      phrase: 'REPLENISH',
      definition: 'To refill something that has been used — to replace lost energy, fluids, or nutrients after exercise.',
      example: 'After the match, the team drinks sports drinks to replenish the carbohydrates and salts they lost during the game.',
      imageSlug: '/images/replenish.png',
    },
    {
      phrase: 'CUT OUT',
      definition: 'To stop eating or drinking something — to remove something from the diet.',
      example: 'He has cut out alcohol entirely during the season — the nutritionist advised him it slows recovery significantly.',
      imageSlug: '/images/nutrition-and-recovery-cut-out.png',
    },
    {
      phrase: 'WIND DOWN',
      definition: 'To gradually relax after intense activity — allowing the body and mind to return to a calm state before sleep.',
      example: 'After a late evening match, it is hard to wind down — the body is still full of adrenaline.',
      imageSlug: '/images/nutrition-and-recovery-wind-down.png',
    },
    {
      phrase: 'STOCK UP ON',
      definition: 'To buy or prepare a large amount of something — to make sure you have enough of a food or drink.',
      example: 'She stocks up on fruits, vegetables, and lean proteins at the start of every week — to make healthy eating as easy as possible.',
      imageSlug: '/images/stock-up-on.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases used in nutrition and recovery contexts — before and after matches and training.',
    items: [
      {
        cue: 'Make sure you eat enough the night before.',
        meaning: 'Eat a good meal the evening before a match — to have enough energy stored in your body.',
        usage: 'Advice from a coach or nutritionist to players before a match day. "Enough" = a sufficient quantity. "The night before" = the evening before matchday. The main meal before a match is usually the evening before — a mix of carbohydrates and protein. Eating too close to kick-off can cause discomfort, so the main fuelling happens the night before.',
        imageSlug: 'otp-eat-enough-night-before',
      },
      {
        cue: 'Drink plenty of water — not too much coffee.',
        meaning: 'Stay well hydrated with water — limit caffeine.',
        usage: 'Nutrition advice before training or a match. "Plenty of water" = a lot of water. Coffee is often limited because it can cause dehydration in large amounts. "Not too much coffee" = limit coffee, not eliminate it completely. Note the quantifiers: "plenty of" (a lot, adequate amount) and "too much" (more than is good).',
        imageSlug: 'otp-drink-plenty-of-water',
      },
      {
        cue: 'Get some protein in within 30 minutes of finishing training.',
        meaning: 'Eat something with protein very soon after training ends — to start the muscle recovery process.',
        usage: 'Sports nutrition advice based on research. The body absorbs protein most effectively in the 30 minutes immediately after exercise — this is sometimes called the "recovery window." "Get some protein in" = eat some protein. "Within 30 minutes" = no later than 30 minutes after finishing. Many players drink a protein shake immediately after training to hit this window.',
        imageSlug: 'otp-get-some-protein-in',
      },
      {
        cue: 'There\'s not enough sleep happening in this squad.',
        meaning: 'Players are not sleeping enough — this needs to improve for better recovery.',
        usage: 'Comment from a coach or sports scientist about recovery habits. "Not enough sleep" = insufficient sleep, less than the recommended amount. "Happening" = occurring, taking place. Sleep is one of the most important recovery tools — many coaches say it is more important than any other recovery method. Without enough sleep, the body cannot repair properly.',
        imageSlug: 'otp-not-enough-sleep',
      },
      {
        cue: 'A few stretches before bed can make a big difference.',
        meaning: 'Doing some light stretching before sleeping helps the muscles recover.',
        usage: 'Recovery advice for players after a hard training session or match. "A few stretches" = a small number of stretching exercises — not many, just a few. "Before bed" = just before sleeping. Light stretching increases blood flow to the muscles, reduces tension, and helps the body transition to a recovery state. Note: "a few" = a small countable number.',
        imageSlug: 'otp-a-few-stretches-before-bed',
      },
      {
        cue: 'Ice bath — straight in after the match.',
        meaning: 'Everyone needs to go into the ice bath immediately after the match — no exceptions.',
        usage: 'Post-match instruction from the conditioning coach. "Straight in" = immediately, without delay. Ice baths are standard post-match recovery in professional football — the cold water reduces inflammation and muscle soreness. "After the match" = as soon as the match ends. Players often complain but the recovery benefits are significant.',
        imageSlug: 'otp-ice-bath-straight-in',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Before we discuss tactics — a word about [[nutrition:the food and drink a player consumes and how it affects performance]] and [[recovery:the process of the body repairing itself after exercise]]. How much sleep are people getting?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Not much. Six hours on a good night. I find it hard to sleep after a late match — too much adrenaline.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Six hours is not enough. You need at least eight — some elite players sleep nine. And how many [[carbohydrates:foods that provide energy — pasta, rice, bread, potatoes]] are you eating the night before a match?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I eat plenty of pasta or rice the evening before. And I drink a lot of water throughout the day — [[hydration:the amount of water in the body — staying properly hydrated for performance]] is something I take seriously.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. And after training — how much [[protein:a nutrient found in meat, fish, eggs, and beans — helps repair and build muscles]] do you eat to help your muscles recover?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'A little — I\'m not great at eating straight after training. I usually wait a couple of hours.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'That is a mistake. You need some protein within 30 minutes of finishing — your body is ready to absorb it immediately after exercise. And what about the [[ice bath:sitting in cold water and ice after exercise to reduce soreness and aid recovery]] — how many of you are using it regularly?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I do it after every match — but not many people do it after training. It is very cold.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'It is very cold. But after a hard training session, there is not much better for your legs. From now on — [[ice bath:same]] after every hard session. A few minutes is enough to make a significant difference.',
    },
  ],

  matchingExercise: [
    { word: 'HYDRATION', definition: 'The amount of water in the body — staying properly hydrated for performance' },
    { word: 'CARBOHYDRATES', definition: 'Foods that provide energy — pasta, rice, bread, potatoes. Essential fuel.' },
    { word: 'PROTEIN', definition: 'A nutrient that helps repair and build muscles after exercise' },
    { word: 'ICE BATH', definition: 'Sitting in cold water and ice after exercise to reduce soreness' },
    { word: 'RECOVERY', definition: 'The process of the body repairing itself after exercise' },
    { word: 'NUTRITION', definition: 'The food and drink a player consumes and how it affects their performance' },
    { word: 'SUPPLEMENT', definition: 'An extra substance taken to fill a nutritional gap or improve performance' },
    { word: 'MASSAGE', definition: 'Treatment where muscles are pressed and rubbed to relieve soreness and tension' },
  ],

  fillBlankExercise: [
    { before: 'Players need', answer: 'plenty of', after: 'sleep to recover between matches — at least eight hours.' },
    { before: 'She eats', answer: 'a few', after: 'small meals throughout the day rather than two or three large ones.' },
    { before: 'There is not', answer: 'much', after: 'time to recover between a Thursday match and a Sunday one.' },
    { before: 'He does not eat', answer: 'many', after: 'carbohydrates in the evenings — mainly protein and vegetables.' },
    { before: 'Drink', answer: 'a lot of', after: 'water throughout the day — not just before training.' },
    { before: 'The team has not had', answer: 'enough', after: 'sleep this week — everyone is tired after the long away trip.' },
    { before: 'She takes', answer: 'some', after: 'protein supplements after training — the nutritionist recommended them.' },
    { before: 'How', answer: 'many', after: 'ice baths have you taken this week? Not enough, I suspect.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which sentence uses the correct quantifier?',
      options: [
        '"She drinks many water before training."',
        '"She drinks plenty of water before training."',
        '"She drinks much waters before training."',
      ],
      correctIndex: 1,
    },
    {
      question: '"There is not much time between matches." Is "time" countable or uncountable?',
      options: [
        'Countable — use "many"',
        'Uncountable — use "much"',
        'Both — you can use either "many" or "much"',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence is CORRECT?',
      options: [
        '"He eats much bananas before a match."',
        '"He eats a few bananas before a match."',
        '"He eats plenty bananas before a match."',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is an "ice bath" used for in football?',
      options: [
        'To warm up muscles before training',
        'To reduce muscle soreness and speed up recovery after exercise',
        'To treat a specific injury — like a sprained ankle',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which quantifier works with BOTH countable and uncountable nouns?',
      options: [
        'Many',
        'Much',
        'A lot of',
      ],
      correctIndex: 2,
    },
    {
      question: '"A few stretches before bed can make a big difference." What does "a few" tell us?',
      options: [
        'A very large number of stretches',
        'No stretches at all',
        'A small number of stretches — not many, just a few',
      ],
      correctIndex: 2,
    },
    {
      question: 'Why are carbohydrates important for footballers?',
      options: [
        'They help repair and build muscles after exercise',
        'They provide energy — essential fuel for 90 minutes of running',
        'They reduce muscle soreness after training',
      ],
      correctIndex: 1,
    },
    {
      question: '"She doesn\'t eat _____ sugar during the season." Which word fits?',
      options: [
        'many',
        'much',
        'a few',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the correct quantifier for each gap.',
    items: [
      {
        sentence: 'Players need _____ sleep between matches — at least eight hours every night.',
        options: ['many', 'plenty of', 'a few'],
        correctIndex: 1,
        explanation: '"Plenty of" is correct. "Sleep" is an uncountable noun — you cannot count individual "sleeps" (not "one sleep, two sleeps"). Uncountable nouns take "plenty of," "a lot of," "much," "some," "enough" — but NOT "many" or "a few." "Plenty of" = more than enough, a good amount. "Many sleep" is wrong (many = countable). "A few sleep" is wrong (a few = countable). "Plenty of sleep" = the right amount and more.',
      },
      {
        sentence: 'She eats _____ small meals throughout the day to maintain her energy levels.',
        options: ['a few', 'much', 'a little'],
        correctIndex: 0,
        explanation: '"A few" is correct. "Meals" is a countable noun — you can count them (one meal, two meals, three meals). Countable nouns in small numbers take "a few" or "several." "A few" = a small but adequate number — 3-5 in this context. "Much" is for uncountable nouns only: "much water," "much sleep." "A little" is for uncountable nouns: "a little water," "a little sleep." "A few meals" = correct. "Much meals" = wrong. "A little meals" = wrong.',
      },
      {
        sentence: 'There is not _____ protein in this meal — I will add some chicken.',
        options: ['many', 'much', 'a few'],
        correctIndex: 1,
        explanation: '"Much" is correct. "Protein" is uncountable — you cannot count "one protein, two proteins." Uncountable nouns use "much" in negative sentences and questions: "not much water," "not much sleep," "not much protein." "Many" is for countable nouns: "not many matches," "not many meals." "A few" is also countable. In positive sentences, "much" is less common — we prefer "a lot of": "There is a lot of protein in chicken." In negatives: "There is not much protein."',
      },
      {
        sentence: 'He does not eat _____ processed foods during the season — his diet is very clean.',
        options: ['much', 'many', 'a little'],
        correctIndex: 1,
        explanation: '"Many" is correct. "Processed foods" is countable (plural) — you can count food items: "one processed food item, two processed food items." Plural countable nouns in negatives take "many": "not many foods," "not many matches," "not many meals." "Much" is for uncountable nouns: "not much sugar," "not much oil." "A little" is uncountable and positive: "a little oil." "Not many processed foods" = he eats very few processed foods.',
      },
      {
        sentence: 'Drink _____ water during training — at least two litres over the session.',
        options: ['enough', 'many', 'a few'],
        correctIndex: 0,
        explanation: '"Enough" is correct. "Enough" works with BOTH countable and uncountable nouns — it means "sufficient, the required amount." "Drink enough water" = drink a sufficient amount of water. "Water" is uncountable, so "many water" is wrong. "A few water" is wrong. "Enough" is very versatile: "enough water" (uncountable), "enough meals" (countable), "enough time" (uncountable), "enough matches" (countable). When the required amount is the focus, "enough" is the right choice.',
      },
      {
        sentence: 'After an ice bath, _____ minutes of light walking helps the blood circulation.',
        options: ['much', 'a few', 'plenty of'],
        correctIndex: 1,
        explanation: '"A few" is correct. "Minutes" is countable (one minute, two minutes, three minutes). For a small countable number, use "a few": "a few minutes" = approximately 3-5 minutes. "Much minutes" is wrong — "much" is for uncountable nouns. "Plenty of minutes" is possible but slightly unusual — "plenty of" suggests a large amount, but after an ice bath you only need a small number of minutes walking. "A few minutes" = a small, appropriate amount.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Choose the best response — paying attention to quantifiers.',
      items: [
        {
          customerLine: 'How should a player fuel their body on the day of a match?',
          options: [
            '"Eat many carbohydrates and much protein three hours before kick-off, then drink much water throughout the day."',
            '"Eat plenty of carbohydrates and some protein three hours before kick-off — not too much or you will feel heavy. Drink a lot of water throughout the day."',
            '"Eat a little carbohydrates and many proteins three hours before kick-off. Drink many water."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Plenty of carbohydrates" = uncountable concept, correct with "plenty of." "Some protein" = correct with uncountable "protein." "Not too much" = correct quantifier. "A lot of water" = correct for uncountable "water." A uses "much protein" (possible but more natural in negatives/questions) and "much water" (sounds unnatural in positive sentences — "a lot of water" is more natural). C uses "many proteins" (wrong — protein is uncountable) and "many water" (wrong — water is uncountable).',
        },
        {
          customerLine: 'How important is sleep for recovery?',
          options: [
            '"Sleep is extremely important — players need many sleep between matches. Many studies have shown that not enough sleep leads to worse performance."',
            '"Sleep is extremely important — players need plenty of sleep between matches. A lot of research has shown that not enough sleep leads to reduced performance."',
            '"Sleep is extremely important — players need much sleeps between matches. Much studies show not enough sleep reduces performance."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Plenty of sleep" = correct for uncountable "sleep." "A lot of research" = correct for uncountable "research." "Not enough sleep" = correct. A uses "many sleep" (wrong — sleep is uncountable) and "many studies" (studies is countable and plural — "many studies" is actually correct here!). C uses "much sleeps" (sleep cannot be pluralised in this context) and "much studies" (studies is countable — use "many studies").',
        },
        {
          customerLine: 'What supplements do footballers typically take?',
          options: [
            '"Many footballers take a few supplements — some protein powders, a little creatine, and plenty of vitamins. The nutritionist checks them all for anti-doping compliance."',
            '"Much footballers take much supplements — many protein powders and much creatine and vitamins."',
            '"A little footballers take many supplements — much protein and a lot of creatines."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "Many footballers" = countable plural, correct. "A few supplements" = countable plural, small number, correct. "A little creatine" = uncountable, correct. "Plenty of vitamins" = countable plural, correct. B uses "much footballers" (wrong — footballers are countable) and "much supplements" (wrong — supplements are countable) and "much creatine" (while possible, "a little creatine" in A is more natural for a small amount). C has "a little footballers" (wrong — footballers are countable, use "a few") and "creatines" (creatine is usually uncountable).',
        },
        {
          customerLine: 'What is the biggest nutrition mistake footballers make?',
          options: [
            '"Not drinking enough water and not eating enough protein after training — many players don\'t get some protein in within 30 minutes of finishing. A few changes to the routine can make a big difference."',
            '"Not drinking enough water and not eating enough protein after training — many players do not get any protein in within 30 minutes of finishing. A few small changes to the routine can make a big difference."',
            '"Not drinking much waters and not eating much proteins after training — much players do not get some protein in within 30 minutes. Few changes to routine makes a big difference."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Enough water" (uncountable), "enough protein" (uncountable), "many players" (countable), "any protein" (uncountable in negative = correct), "a few changes" (countable plural, small number) — all correct. A uses "don\'t get some protein in" — "some" in negatives should be "any": "do not get any protein." C uses "much waters" (water is uncountable and cannot be pluralised), "much proteins" (protein is uncountable), "much players" (players are countable).',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes with quantifiers in this nutrition discussion. Find them.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'Right — before we discuss tactics, let\'s talk about nutrition. How many water is everyone drinking each day?' },
        { speaker: 'Sofia', text: 'I drink plenty of water — at least two litres. And I eat a lot of carbohydrates the night before a match.' },
        { speaker: 'Coach Diallo', text: 'Good. And protein after training — are you getting enough?' },
        { speaker: 'Ronaldo', text: 'I eat much chicken and eggs after training, but maybe not immediately — I usually wait a couple of hours.' },
        { speaker: 'Coach Diallo', text: 'Wait — do not wait. Get some protein in within 30 minutes. And sleep — how many sleep are people getting?' },
        { speaker: 'Sofia', text: 'I try to get eight hours. But sometimes I only get a few sleep — maybe six hours after a late match.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'How many water is everyone drinking each day?',
          correction: 'How much water is everyone drinking each day?',
          explanation: '"Water" is an UNCOUNTABLE noun — you cannot count individual "waters" (not one water, two waters). In questions, uncountable nouns use "HOW MUCH" not "how many." "How many" is for countable nouns: "How many glasses of water?" (glass is countable) vs "How much water?" (water is uncountable). The rule: how much + uncountable / how many + countable plural.',
        },
        {
          lineIndex: 3,
          incorrectText: 'I eat much chicken and eggs after training',
          correction: 'I eat a lot of chicken and eggs after training',
          explanation: '"Much" in positive sentences sounds very formal and unnatural in everyday English. In positive statements, we almost always use "a lot of" instead of "much." "I eat a lot of chicken" = natural. "I eat much chicken" = technically not wrong, but sounds formal and unusual. In NEGATIVES and QUESTIONS, "much" is natural: "I don\'t eat much chicken," "How much chicken do you eat?" In POSITIVE sentences, use "a lot of" for uncountable nouns.',
        },
        {
          lineIndex: 5,
          incorrectText: 'I only get a few sleep — maybe six hours after a late match.',
          correction: 'I only get a little sleep — maybe six hours after a late match.',
          explanation: '"Sleep" is UNCOUNTABLE — you cannot count "one sleep, two sleeps" (in this usage). Uncountable nouns take "a little" (for small amounts), not "a few." "A few" is for countable nouns: "a few meals," "a few hours." "A little sleep" = a small amount of uncountable "sleep." Note: "hours" is countable ("maybe six hours") — but "sleep" itself is uncountable. Say "a little sleep" or "a few hours of sleep."',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the nutrition and recovery discussion — use quantifiers correctly.",
      items: [
        {
          customerLine: 'Ronaldo: What should the perfect recovery routine look like after a match?',
          salespersonStart: 'Coach Diallo: First — get into the ice bath straight away. A few minutes of cold water reduces a lot of the inflammation.',
          suggestedCompletion: 'After that, get some protein and a few carbohydrates in — a protein shake and a banana is fine if you do not feel like eating much. Drink plenty of water — you lose a lot of fluid during a match. Then, a little massage from the physio if it is available. The most important thing is sleep — plenty of sleep, at least eight hours. Do not spend much time on your phone in bed — the blue light stops you from sleeping. Do a few stretches before you sleep, wind down slowly, and let the body recover. There is not much you can do to recover faster than that combination.',
        },
        {
          customerLine: 'Sofia: Is there a difference between what you eat before a match versus after?',
          salespersonStart: 'Coach Diallo: Yes — the goals are completely different, so the food is different.',
          suggestedCompletion: 'Before a match, you need plenty of carbohydrates to fuel 90 minutes of running. Not much protein and not much fat — they take too long to digest. Eat a few hours before kick-off so the food has time to turn into energy. After the match, the goal is recovery — so you need a lot of protein to repair the muscles and some carbohydrates to replenish the energy you used. You do not need as much carbohydrate after a match as before. And drink plenty of water both times — hydration is essential before AND after.',
        },
        {
          customerLine: 'Ronaldo: How much does sleep actually affect performance?',
          salespersonStart: 'Coach Diallo: A huge amount. Not many people realise how much sleep affects every physical and mental function.',
          suggestedCompletion: 'Even a little sleep deprivation — just one or two hours less than you need — reduces your reaction speed, your sprint pace, and your decision-making significantly. After a few nights of poor sleep, the difference is dramatic. A lot of research shows that elite athletes who get plenty of sleep perform better than those who don\'t. There is not much you can do that improves performance as consistently as eight or nine hours of good sleep. The best supplement you can take costs nothing — it is sleep. Cut out much of the technology before bed and go to sleep at the same time every night.',
        },
        {
          customerLine: 'Sofia: Are supplements necessary for professional footballers?',
          salespersonStart: 'Coach Diallo: Most players do not need many supplements if their diet is good enough.',
          suggestedCompletion: 'If you eat plenty of vegetables, a lot of lean protein, some healthy fats, and enough carbohydrates, you get most of what you need from food. A few supplements can be useful — a little vitamin D if you live in a country without much sun, and some protein powder if you struggle to eat enough protein immediately after training. But many players take too many supplements without any guidance. A lot of supplements have not been properly tested. Some have not been cleared by anti-doping authorities. The rule is simple: not much should go into your body without the nutritionist and the physio approving it.',
        },
      ],
    },
  },
};

import { Lesson } from '@/types/lesson';

export const b1ReviewTheBigDebate: Lesson = {
  slug: 'b1-review-the-big-debate',
  title: 'B1 Review: The Big Debate',
  subtitle: 'Who is the best player of all time? Structured argument and opinion language',
  level: 'B1-B2',
  description: 'In this final B1 lesson, you will debate the biggest question in football — who is the GOAT? You will review vocabulary from all ten B1 football lessons and practise giving structured opinions, supporting arguments with evidence, conceding points, and reaching a conclusion.',
  heroImage: '/images/b1-review-the-big-debate-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Giving opinions and structured argument language',
    description: 'Giving a clear, structured opinion in English means more than just saying what you think. It means introducing your opinion, supporting it with reasons, conceding the other side, and concluding confidently. In the context of a football debate, this is exactly what pundits, journalists, and passionate fans do.',
    positivePattern: 'INTRODUCE: In my opinion... / I believe... / I would argue... / From my perspective... SUPPORT: This is because... / The evidence for this is... / For example... CONCEDE: Having said that... / Of course... / To be fair... / Admittedly... CONCLUDE: Ultimately... / In conclusion... / All things considered... / For these reasons...',
    positiveExample: '"In my opinion, Messi is the greatest player of all time. I believe this because his technical ability, consistency, and impact on the game are unmatched. Of course, Ronaldo\'s goal record is extraordinary — and to be fair, he has achieved success across multiple leagues. However, I would argue that Messi\'s style of play is the purest expression of football genius. Ultimately, both are legends, but Messi edges it for me."',
    negativePattern: 'Do NOT just list opinions without structure. Do NOT use argument language without support. Do NOT ignore the other side — a strong argument always concedes and then refutes.',
    negativeExample: 'WEAK: "I think Messi is the best. I like him. He is very good at football. Ronaldo is also good." — No structure, no evidence, no concession, no conclusion.',
    positiveExamples: [
      { sentence: '"I would argue that consistency at the highest level is the defining factor — and on that metric, she has no equal."', note: '(Strong, supported, specific claim using "argue" and "metric")' },
      { sentence: '"Of course, trophies are crucial in this debate — and admittedly, he has won more than most."', note: '("Of course" and "admittedly" = strong concession language)' },
      { sentence: '"Ultimately, the GOAT debate cannot be settled by statistics alone — it is also about the feeling you get watching them play."', note: '(Conclusion with "ultimately" + moving beyond pure statistics)' },
    ],
    negativeExamples: [
      { sentence: 'WEAK: "He is better because he scores more goals than the other player." (No structure, no concession)', note: 'Add introduction, support, concession, and conclusion for a complete argument.' },
      { sentence: 'WRONG structure: "In conclusion, I believe... Because... Having said that... In my opinion..." (wrong order)', note: 'Introduction → Support → Concede → Conclude. Keep the order logical.' },
    ],
  },

  vocabulary: [
    {
      word: 'DEBATE',
      partOfSpeech: 'noun / verb',
      definition: 'A structured discussion where people hold opposing views and argue their case. The GOAT debate is the most famous ongoing argument in football.',
      example: '"The GOAT debate has been going on for decades — and there is still no consensus." / "We debated it for two hours and still could not agree."',
      imageSlug: '/images/debate.png',
    },
    {
      word: 'ARGUMENT',
      partOfSpeech: 'noun',
      definition: 'A reason or set of reasons you give to support your opinion — not a fight. In formal debate, you make arguments.',
      example: '"The strongest argument for Messi is his performance in international football, especially the 2022 World Cup."',
      imageSlug: '/images/argument.png',
    },
    {
      word: 'CONCEDE',
      partOfSpeech: 'verb',
      definition: 'To admit that a point or argument from the other side is valid — but then explain why your overall position is still correct.',
      example: '"I concede that Ronaldo\'s goal tally is extraordinary — but goals alone do not define the greatest player."',
      imageSlug: '/images/concede.png',
    },
    {
      word: 'EVIDENCE',
      partOfSpeech: 'noun',
      definition: 'Facts, statistics, or examples that you use to support your argument.',
      example: '"The evidence is clear — eight Ballon d\'Or awards, a World Cup, multiple Champions Leagues, and a century of international goals."',
      imageSlug: '/images/evidence.png',
    },
    {
      word: 'CRITERIA',
      partOfSpeech: 'noun',
      definition: 'The factors or standards you use to judge something. Different people use different criteria to decide who is the GOAT.',
      example: '"The criteria matter hugely in this debate — if your criteria are trophies, Ronaldo has a strong case. If your criteria are style and artistry, Messi wins."',
      imageSlug: '/images/criteria.png',
    },
    {
      word: 'SUBJECTIVE',
      partOfSpeech: 'adjective',
      definition: 'Based on personal feeling or opinion rather than facts — the GOAT debate is partly subjective because beauty and style cannot be measured.',
      example: '"The GOAT debate will never be fully resolved — who is the most enjoyable to watch is entirely subjective."',
      imageSlug: '/images/subjective.png',
    },
    {
      word: 'LEGACY',
      partOfSpeech: 'noun',
      definition: 'What a player leaves behind after their career — their lasting impact on football and its history.',
      example: '"Her legacy will be the number of girls she inspired to play football — that cannot be measured in goals."',
      imageSlug: '/images/legacy.png',
    },
    {
      word: 'CONSENSUS',
      partOfSpeech: 'noun',
      definition: 'General agreement among many people — the GOAT debate has no consensus because people genuinely disagree.',
      example: '"There is no consensus on who the greatest player is — it may be the one football question that is never settled."',
      imageSlug: '/images/consensus.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BACK UP',
      definition: 'To support a claim with evidence or reasons — to prove your point.',
      example: '"You say he\'s the GOAT — back it up with some evidence. What makes him better than the others?"',
      imageSlug: '/images/back-up.png',
    },
    {
      phrase: 'STAND BY',
      definition: 'To maintain your position even under pressure — to not change your view.',
      example: '"I stand by my opinion — Messi is the greatest, despite what anyone says."',
      imageSlug: '/images/stand-by.png',
    },
    {
      phrase: 'COME DOWN TO',
      definition: 'To ultimately depend on — when a decision or debate is reduced to its most essential factor.',
      example: '"It all comes down to what criteria you use — trophies, artistry, consistency, or impact."',
      imageSlug: '/images/come-down-to.png',
    },
    {
      phrase: 'RULE OUT',
      definition: 'To eliminate a possibility or candidate — to decide they cannot be the answer.',
      example: '"You can\'t rule out Pelé just because you didn\'t watch him play — the historical evidence is overwhelming."',
      imageSlug: '/images/rule-out.png',
    },
    {
      phrase: 'SETTLE THE DEBATE',
      definition: 'To find a definitive answer that everyone accepts — to end the argument.',
      example: '"Nothing will ever fully settle the GOAT debate — it is too subjective and the criteria keep changing."',
      imageSlug: '/images/settle-the-debate.png',
    },
    {
      phrase: 'MAKE THE CASE',
      definition: 'To present an argument in support of something — to argue strongly for a position.',
      example: '"Make the case for Ronaldo. You have two minutes — use your best evidence and argument language."',
      imageSlug: '/images/make-the-case.png',
    },
  ],

  onThePitch: {
    instructions: 'These are B1 review phrases — vocabulary from all the B1 football lessons in this unit.',
    items: [
      {
        cue: 'B1 GRAMMAR REVIEW: Conditionals',
        meaning: 'First conditional (real/likely), second conditional (imaginary), third conditional (past/impossible).',
        usage: 'In the GOAT debate: First conditional: "If Messi wins another World Cup, it will be impossible to argue against him." (real possibility) Second conditional: "If Ronaldo had played in a weaker league, he would have even more goals." (imaginary) Third conditional: "If Messi hadn\'t won the 2022 World Cup, the debate would have been different." (past — cannot be changed). Using all three conditionals shows sophisticated B1 grammar: imagining past outcomes, discussing ongoing scenarios, and speculating about the future.',
        imageSlug: 'otp-b1-grammar-conditionals',
      },
      {
        cue: 'B1 GRAMMAR REVIEW: Passive voice',
        meaning: 'Subject + BE + past participle — for results, decisions, and formal descriptions.',
        usage: 'In the GOAT debate: "Eight Ballon d\'Ors were won by Messi." (passive, focuses on the trophies) "The 2022 World Cup was won in one of the greatest finals ever played." (passive, focuses on the event) "Pele was considered untouchable for decades." (passive, historical judgement). Using passive voice in a formal debate shows B1 grammatical range and sounds more analytical.',
        imageSlug: 'otp-b1-grammar-passive',
      },
      {
        cue: 'B1 GRAMMAR REVIEW: Perfect tenses',
        meaning: 'Present perfect (completed actions with current relevance), present perfect continuous (ongoing activities).',
        usage: 'In the GOAT debate: "She has won the Ballon d\'Or four times." (present perfect — completed achievement, still relevant now) "He has been dominating world football since 2009." (present perfect continuous — ongoing dominance from a past point). These tenses allow you to talk about career achievements and long-term dominance — essential in a GOAT discussion.',
        imageSlug: 'otp-b1-grammar-perfect-tenses',
      },
      {
        cue: 'Key football vocabulary: B1 review',
        meaning: 'Pressing, defending as a unit, counter-attack, European football, cup football, grassroots — all B1 lesson topics that provide GOAT debate context.',
        usage: 'Use vocabulary from across the B1 unit in your GOAT argument: "His pressing intensity defines his team\'s entire system." (Lesson 1) "She won promotion and then went on to qualify for Europe in the same season." (Lessons 16, 18) "He has been giving back to grassroots football since retiring." (Lesson 19) "His legacy was built through European nights that no one who was there will ever forget." (Lesson 18). A complete B1 debater uses vocabulary from all areas of the football language they have learned.',
        imageSlug: 'otp-b1-vocab-review',
      },
      {
        cue: 'Structured argument: the four-step model',
        meaning: 'Introduce → Support → Concede → Conclude. The four steps of a complete, balanced argument.',
        usage: 'Step 1 INTRODUCE: "In my opinion..." / "I believe..." / "I would argue..." Step 2 SUPPORT: "This is because..." / "The evidence is..." / "For example..." Step 3 CONCEDE: "Having said that..." / "Of course, it is true that..." / "Admittedly..." / "To be fair..." Step 4 CONCLUDE: "Ultimately..." / "All things considered..." / "For these reasons, I stand by my position that..." Using all four steps makes your argument complete, fair, and convincing.',
        imageSlug: 'otp-structured-argument',
      },
      {
        cue: 'Making concessions without weakening your argument',
        meaning: 'Conceding a point and then explaining why your position is still correct — the most sophisticated debate technique.',
        usage: '"Of course, Ronaldo\'s goal record is extraordinary — I am not disputing that. However, I would argue that goals alone do not define the greatest player. Having said that, Messi\'s overall contribution — assists, dribbles, creativity, and leadership — gives him the edge." This technique shows intellectual honesty (you are not ignoring the opposition\'s best points) while maintaining your position. The key word is "however" or "but" after the concession — it signals you are returning to your main argument.',
        imageSlug: 'otp-making-concessions',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'This is our final B1 lesson. We are going to have the biggest [[debate:a structured discussion where people hold opposing views]] in football — who is the greatest of all time? You will use everything you have learned across all ten B1 lessons. Sofia — make the [[argument:a reason or set of reasons to support your opinion]] for Messi. Use structured language.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'In my opinion, Lionel Messi is the greatest player of all time. I believe this because the [[evidence:facts, statistics, or examples to support your argument]] is overwhelming — eight Ballon d\'Or awards, four World Cups with Argentina, multiple Champions Leagues, and a 2022 World Cup won in perhaps the greatest final ever played. His [[legacy:what a player leaves behind — their lasting impact]] goes beyond statistics: he changed what we believe is possible in football. [[To be fair:used to concede the other side]], Ronaldo\'s goal record is extraordinary — I [[concede:to admit a point from the other side is valid]] that completely. However, I would [[stand by:to maintain your position even under pressure]] my position: total impact, across all [[criteria:the factors you use to judge something]], Messi wins.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Excellent structure. Ronaldo — [[make the case:to present an argument in support of something]] for Ronaldo. Do not just list facts — use the four-step model.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'From my perspective, Cristiano Ronaldo is the GOAT — and here is why. I would [[back up:to support a claim with evidence]] this with one fact: he is the all-time top scorer in the history of international football. He has won league titles in three different countries — England, Spain, and Italy — something Messi has not done. Of course, I [[concede:same]] that Messi\'s 2022 World Cup changed the [[debate:same]] significantly. Having said that, [[subjective:based on personal feeling or opinion rather than facts]] factors like "style" should not decide the GOAT. [[Ultimately:used to conclude an argument]], [[it all comes down to:to ultimately depend on — when a debate is reduced to its essential factor]] your [[criteria:same]] — and on mine, Ronaldo is the greatest.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Brilliant. Both arguments used introduction, support, concession, and conclusion perfectly. Now — do you think there will ever be a [[consensus:general agreement among many people]] on the GOAT?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'In my opinion — no. And perhaps that is the beauty of the debate. Football is [[subjective:same]] at its core — the love of the game, the magic of watching a brilliant player, cannot be [[ruled out:to eliminate a possibility or candidate]] of the conversation by statistics alone. The [[debate:same]] will never be [[settle the debate:to find a definitive answer that everyone accepts]]d — and that is what keeps us all talking.',
    },
  ],

  matchingExercise: [
    { word: 'DEBATE', definition: 'A structured discussion where people hold opposing views and argue their case' },
    { word: 'ARGUMENT', definition: 'A reason or set of reasons to support your opinion — not a fight' },
    { word: 'CONCEDE', definition: 'To admit a point from the other side is valid before defending your position' },
    { word: 'EVIDENCE', definition: 'Facts, statistics, or examples that support your argument' },
    { word: 'CRITERIA', definition: 'The factors or standards used to judge something in a debate' },
    { word: 'LEGACY', definition: 'What a player leaves behind — their lasting impact on football' },
    { word: 'SUBJECTIVE', definition: 'Based on personal feeling or opinion — not purely measurable facts' },
    { word: 'CONSENSUS', definition: 'General agreement among many people — the GOAT debate has none' },
  ],

  fillBlankExercise: [
    { before: 'In my opinion, Messi is the greatest. I would', answer: 'stand by', after: 'that view regardless of what anyone argues.' },
    { before: 'The', answer: 'evidence', after: 'for her greatness is undeniable — four World Cups, six Ballon d\'Ors, and four Champions Leagues.' },
    { before: 'I', answer: 'concede', after: 'that Ronaldo\'s goal record is extraordinary — but I still believe Messi is greater overall.' },
    { before: 'It all', answer: 'comes down to', after: 'your criteria — if you value trophies above all else, the argument changes.' },
    { before: 'The GOAT', answer: 'debate', after: 'will never be fully settled — it is too subjective and personal.' },
    { before: 'Can you', answer: 'back up', after: 'that claim with some evidence? Saying he is the best is not enough without reasons.' },
    { before: 'You cannot', answer: 'rule out', after: 'Pelé from the GOAT debate just because he played in a different era.' },
    { before: '', answer: 'Ultimately', after: ', both players are legends — but for me, the World Cup puts Messi ahead.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which sentence correctly INTRODUCES an opinion in a structured argument?',
      options: [
        '"He is better. He scores more goals. This is why."',
        '"In my opinion, the most important criteria in the GOAT debate is consistency over a long career."',
        '"I think it comes down to goals and trophies so yes he is the GOAT."',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence correctly CONCEDES a point while maintaining a position?',
      options: [
        '"Ronaldo is actually better after all — his goals prove it."',
        '"I concede that Ronaldo\'s goal tally is extraordinary. However, I would argue that creativity and artistry are also criteria that matter."',
        '"To be fair, Messi has more Ballon d\'Ors — so he wins."',
      ],
      correctIndex: 1,
    },
    {
      question: '"It all comes down to your criteria." What does this sentence mean?',
      options: [
        'The result of the debate depends entirely on which standards or factors you use to judge greatness.',
        'The debate will eventually end when everyone agrees on a winner.',
        'There is only one way to decide who is the GOAT — statistics.',
      ],
      correctIndex: 0,
    },
    {
      question: '"The GOAT debate is partly subjective." What does "subjective" mean?',
      options: [
        'Based on facts and statistics that everyone can agree on.',
        'Based on personal feelings and opinions — not purely measurable.',
        'Related to the subjects taught in sports analysis courses.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which is the CORRECT four-step order for a structured argument?',
      options: [
        'Concede → Conclude → Introduce → Support',
        'Introduce → Support → Concede → Conclude',
        'Support → Introduce → Conclude → Concede',
      ],
      correctIndex: 1,
    },
    {
      question: '"Her legacy goes beyond statistics." What does "legacy" mean?',
      options: [
        'Her current performance levels in the latest season.',
        'What she leaves behind — her lasting impact on football and its history.',
        'The financial value of her transfer fee throughout her career.',
      ],
      correctIndex: 1,
    },
    {
      question: '"There is no consensus on the GOAT." What does "consensus" mean?',
      options: [
        'A formal vote conducted by FIFA to determine the greatest player.',
        'General agreement among many people — when most people share the same view.',
        'A specific type of argument used in football debates.',
      ],
      correctIndex: 1,
    },
    {
      question: '"I would stand by my position even after hearing your argument." What does "stand by" mean?',
      options: [
        'To wait next to something or someone.',
        'To maintain your view or opinion even under pressure — not to change it.',
        'To support someone physically during a debate.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best language to complete each structured argument sentence.',
    items: [
      {
        sentence: '"_____ Messi is the greatest player of all time. The evidence is overwhelming — eight Ballon d\'Ors, a World Cup, and decades of brilliant performances."',
        options: ['In my opinion,', 'To be fair,', 'Having said that,'],
        correctIndex: 0,
        explanation: '"In my opinion" is correct — this is an introduction phrase that signals your personal position at the start of an argument. "In my opinion, X is the case. The evidence is Y" = introduce opinion + support with evidence. "To be fair" introduces a concession — acknowledging the other side\'s point, which is wrong at the start of your own argument. "Having said that" connects a point to its opposite — used after making a concession, not when introducing your position. The four-step model starts with INTRODUCE: "In my opinion / I believe / I would argue."',
      },
      {
        sentence: '"_____, Ronaldo\'s goal tally is extraordinary — 900+ goals across club and country. No one can dispute that."',
        options: ['Admittedly', 'In my opinion', 'Ultimately'],
        correctIndex: 0,
        explanation: '"Admittedly" is correct — it signals a concession. "Admittedly, Ronaldo\'s goal tally is extraordinary" = I am honestly acknowledging that this is true, even if it supports the opposing argument. This is step 3 (CONCEDE) of the structured argument model. "In my opinion" is step 1 (INTRODUCE) — used at the start, not for conceding. "Ultimately" is step 4 (CONCLUDE) — used at the end. Using "admittedly" shows intellectual honesty and prevents your argument from seeming one-sided. After the concession, you would say: "Admittedly... However, I still believe..."',
      },
      {
        sentence: '"Of course, the World Cup win changes the narrative. _____, Messi had already won eight Ballon d\'Ors before 2022."',
        options: ['However', 'In my opinion', 'Admittedly'],
        correctIndex: 0,
        explanation: '"However" is correct — it signals the return to your main argument after a concession. "Of course, the World Cup changes the narrative" = concession. "However, he had already won eight Ballon d\'Ors before 2022" = back to your main point, refuting or limiting the concession. "However" is the clearest signal of this return: it tells the listener "I acknowledged your point, but now here is why my position remains correct." "In my opinion" is for introductions. "Admittedly" is another concession marker — wrong after you have just conceded ("Of course...").',
      },
      {
        sentence: '"_____, both players are generational talents. But for me, Messi\'s 2022 World Cup puts him ahead."',
        options: ['Ultimately', 'To begin with', 'Having said that'],
        correctIndex: 0,
        explanation: '"Ultimately" is correct — it introduces a conclusion. "Ultimately, both players are generational talents. But for me, Messi edges it" = wrapping up and giving a final verdict. This is step 4 (CONCLUDE). "To begin with" = step 1/2, starting a supporting point — wrong for a conclusion. "Having said that" = step 3 concession marker — already used after concessions, not conclusions. "Ultimately" is the clearest conclusion signal: it tells the listener that everything has been considered and you are now giving your final verdict.',
      },
      {
        sentence: '"The GOAT debate _____ what criteria you value most — trophies, goals, artistry, or longevity."',
        options: ['all comes down to', 'stands by', 'rules out'],
        correctIndex: 0,
        explanation: '"All comes down to" is correct. "It all comes down to" = the debate is ultimately determined by a specific factor. "The GOAT debate all comes down to what criteria you value" = everything in this debate depends on your standards for judging greatness. "Stands by" means to maintain a position under pressure — wrong here (no one is maintaining a position in this sentence). "Rules out" = eliminates a possibility — wrong here (we are not eliminating anything). "Come down to" is the natural phrase for reducing a complex debate to its essential, deciding factor.',
      },
      {
        sentence: 'Which response correctly uses ALL FOUR steps of a structured argument about the GOAT debate?',
        options: [
          '"I believe Messi is the GOAT. He scored lots of goals and won the World Cup. Ronaldo is also good but not as good. Messi wins."',
          '"In my opinion, Messi is the greatest. I believe this because his technical brilliance, consistency, and World Cup victory are unmatched. Admittedly, Ronaldo\'s goal record across different leagues is extraordinary — I concede that point. However, I would argue that overall impact and artistry give Messi the edge. Ultimately, on every criteria that matters most to me, Messi is the GOAT."',
          '"The GOAT debate is very complicated. Messi has more Ballon d\'Ors. Ronaldo has more goals. It is hard to say."',
        ],
        correctIndex: 1,
        explanation: 'B is correct — uses all four steps in the correct order. INTRODUCE: "In my opinion, Messi is the greatest." SUPPORT: "I believe this because his technical brilliance, consistency, and World Cup victory are unmatched." CONCEDE: "Admittedly, Ronaldo\'s goal record is extraordinary — I concede that point. However, I would argue..." CONCLUDE: "Ultimately, on every criteria that matters most to me, Messi is the GOAT." A has no proper structure — no concession, no argument language, no conclusion. C sits on the fence — descriptive but takes no position, which is the opposite of a structured argument. B demonstrates perfect B1 argument structure.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use structured argument language to make the strongest possible case for each position.',
      items: [
        {
          customerLine: 'Make the case FOR Messi as the GOAT using the four-step model.',
          options: [
            '"Messi is the best because he is very good. He wins trophies. He scores goals. He is the GOAT."',
            '"In my opinion, Lionel Messi is the greatest player of all time. I believe this because he combines technical perfection with extraordinary consistency across two decades of football. The evidence is compelling: eight Ballon d\'Ors, a Champions League, and crucially — a World Cup won in 2022 in perhaps the most dramatic final in history. Admittedly, Ronaldo\'s goal record across multiple leagues is a powerful argument — I concede that completely. However, I would argue that Messi\'s overall impact on how football is played, and the sheer joy he brings to the sport, tips the balance. Ultimately, for me, the 2022 World Cup settled it. Messi is the GOAT."',
            '"Messi has more Ballon d\'Ors than anyone. He also won the World Cup. Ronaldo is also great but Messi is better than Ronaldo."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — uses all four steps with sophistication. INTRODUCE: "In my opinion, Messi is the greatest." SUPPORT: "eight Ballon d\'Ors, Champions League, World Cup in 2022 — perhaps the most dramatic final in history." CONCEDE: "Admittedly, Ronaldo\'s goal record across multiple leagues is a powerful argument — I concede that." REFUTE: "However, I would argue that Messi\'s overall impact... tips the balance." CONCLUDE: "Ultimately, the 2022 World Cup settled it." Uses key vocabulary: "consistency," "evidence compelling," "overall impact," "tips the balance." A and C are weak — no structure, no concession, no argument language.',
        },
        {
          customerLine: 'Make the case AGAINST the GOAT debate — arguing it cannot be settled.',
          options: [
            '"I think the GOAT debate cannot be settled because football is subjective. Different people think different players are the best."',
            '"From my perspective, the GOAT debate will never be settled — and I would argue that is a feature, not a flaw. The evidence for this is simple: every generation grows up with a different player who defines their era. The criteria for greatness are entirely subjective — goals, trophies, style, impact, longevity — no universal standard exists. Admittedly, statistics can provide a framework; I concede that Ballon d\'Ors and trophies are objective measures. However, I would argue that what makes a player truly great goes beyond measurement — the feeling of watching Messi glide past five defenders, or Ronaldo\'s impossible header against opposition twice his height. Ultimately, the GOAT debate is the conversation that never ends — and that is precisely what makes football the world\'s game."',
            '"The GOAT debate cannot be settled. I am sure of this. No one will ever agree and that is fine."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — a sophisticated, complete structured argument using all four steps and B1-B2 vocabulary. INTRODUCE: "From my perspective... I would argue that is a feature, not a flaw." SUPPORT: "every generation grows up with a different player... criteria are entirely subjective... no universal standard exists." CONCEDE: "Admittedly, statistics can provide a framework; I concede that Ballon d\'Ors and trophies are objective measures." REFUTE: "However, I would argue that what makes a player truly great goes beyond measurement." CONCLUDE: "Ultimately, the GOAT debate is the conversation that never ends — and that is precisely what makes football the world\'s game." Perfect B1 argument structure with emotional intelligence.',
        },
        {
          customerLine: 'A classmate says: "Trophies are the only thing that matters in the GOAT debate." Challenge this politely.',
          options: [
            '"No, trophies are not the only thing. Other things matter too like goals and assists."',
            '"That is an interesting position and I understand the logic — trophies are the ultimate measure of success. However, I would respectfully challenge the idea that they are the ONLY criteria. To be fair, a player\'s individual contribution can be extraordinary even if their team falls short. For example, players who spent their careers at less successful clubs might still have the superior individual output. Admittedly, Messi winning the World Cup strengthened his case enormously — but what about a player like van Persie or Di Stéfano, who never won it? I would argue we need multiple criteria — trophies, yes, but also consistency, artistry, and impact on the game. Ultimately, reducing the GOAT debate to trophies alone risks ignoring what makes football beautiful."',
            '"I disagree with you. Trophies are important but Messi still wins because he has more individual awards."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — a polite, structured challenge with all four steps and sophisticated vocabulary. ACKNOWLEDGE (polite disagreement): "That is an interesting position and I understand the logic." CHALLENGE: "However, I would respectfully challenge the idea that they are the ONLY criteria." SUPPORT WITH EXAMPLES: "players at less successful clubs... van Persie... Di Stéfano." CONCEDE: "Admittedly, Messi winning the World Cup strengthened his case enormously." CONCLUDE: "Ultimately, reducing the GOAT debate to trophies alone risks ignoring what makes football beautiful." Uses vocabulary from the lesson: "criteria," "individual contribution," "consistency," "artistry," "impact." A and C are simple and lack the argument structure required at B1-B2.',
        },
        {
          customerLine: 'Final summary: What have you learned about football English across the B1 unit? Give three key lessons.',
          options: [
            '"I learned vocabulary and grammar. I learned about football topics. It was useful."',
            '"Across the B1 football unit, I have learned three things above all. First, football English has multiple registers — the language of the training ground, the match report, social media, and the post-match interview are all different, and knowing when to use which is essential. Second, grammar is never abstract in a football context — conditionals help us debate what might have been, the passive voice makes match reports sound professional, and the present perfect continuous describes the journey of a footballer\'s career. Third — and perhaps most importantly — football is the perfect vehicle for language learning because the passion is real. When you debate who the GOAT is, you are not practising English. You are having a genuine argument in English. That is the difference between learning and living a language."',
            '"The B1 unit covered pressing, defending, building from the back, social media, cup football, European football, and the GOAT debate. We also learned grammar such as conditionals, passive voice, and discourse markers."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — goes beyond listing topics and reflects genuinely on the experience of learning football English, using structured argument language even in a summary. Uses "First... Second... Third" (discourse markers for listing), full sentences with complex grammar, sophisticated vocabulary ("registers," "vehicle for language learning," "living a language"). Also makes an emotional, memorable point about passion in language learning. A is too short and flat — just a list. C accurately lists topics but does not reflect or analyse — it is a catalogue, not a reflection. B demonstrates that by the end of B1, students should be able to discuss not just football but their own experience of learning about it.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three argument structure mistakes in this GOAT debate — incorrect or misplaced argument language. Find them.',
      dialogue: [
        { speaker: 'Debater A', text: 'In my opinion, Ronaldo is the greatest player of all time. I would argue this because his goal record across four major leagues is unmatched in history.' },
        { speaker: 'Debater B', text: 'I respectfully disagree. Ultimately, Messi\'s eight Ballon d\'Ors and World Cup victory put him ahead — the evidence is overwhelming.' },
        { speaker: 'Debater A', text: 'In my opinion, I concede that Messi\'s World Cup win was significant. However, Ronaldo\'s international goal record still makes the stronger case.' },
        { speaker: 'Debater B', text: 'Admittedly, Ronaldo\'s fitness and athleticism over such a long career is extraordinary. I believe this is why I stand by Messi.' },
        { speaker: 'Debater A', text: 'To be fair, both players are generational talents. Having said that, on the criteria of goals and trophies across multiple countries, Ronaldo has a powerful case.' },
        { speaker: 'Debater B', text: 'All things considered, the debate ultimately comes down to personal criteria — and mine give Messi the edge. That is my final position and I stand by it.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Ultimately, Messi\'s eight Ballon d\'Ors and World Cup victory put him ahead',
          correction: 'In my opinion / I would argue, Messi\'s eight Ballon d\'Ors and World Cup victory put him ahead',
          explanation: '"Ultimately" is a conclusion marker (step 4 of the argument model) — it should only be used when wrapping up the entire argument, not at the beginning of the argument. Here, Debater B has just started speaking and is introducing their position — the correct language is "In my opinion," "I believe," or "I would argue." Using "Ultimately" at the start of a debate creates a structural error: the debater appears to be ending before they have even introduced their full argument. Save "Ultimately" for the final conclusion after all evidence and concessions have been made.',
        },
        {
          lineIndex: 2,
          incorrectText: 'In my opinion, I concede that Messi\'s World Cup win was significant.',
          correction: 'I concede that Messi\'s World Cup win was significant. / Admittedly, Messi\'s World Cup win was significant.',
          explanation: '"In my opinion, I concede" is contradictory — "in my opinion" introduces your personal position, while "I concede" acknowledges the other side\'s point. You cannot simultaneously introduce your opinion and concede the opposition\'s point with the same opening phrase. Debater A is making a concession here (step 3: CONCEDE) — the correct language is "I concede," "Admittedly," "To be fair," or "Of course." "In my opinion" is for step 1 (INTRODUCE). Never combine an introduction phrase with a concession in the same clause.',
        },
        {
          lineIndex: 3,
          incorrectText: 'Admittedly, Ronaldo\'s fitness and athleticism over such a long career is extraordinary. I believe this is why I stand by Messi.',
          correction: 'Admittedly, Ronaldo\'s fitness and athleticism over such a long career is extraordinary. However, I stand by Messi because of his overall artistry and impact.',
          explanation: '"I believe this is why I stand by Messi" is logically broken — the concession ("Ronaldo\'s fitness is extraordinary") is being used as the reason to stand by Messi, which makes no sense. If you are conceding Ronaldo\'s fitness, this supports Ronaldo, not Messi. After a concession, you need "However" or "But" to signal the return to your own argument: "Admittedly, Ronaldo\'s fitness is extraordinary. However, I still stand by Messi because of [specific reason that supports Messi]." The "I believe this is why" tries to connect the concession to the conclusion illogically.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each GOAT debate argument using the four-step structured argument model.',
      items: [
        {
          customerLine: 'Make the case for Pelé as the GOAT — despite playing in a different era.',
          salespersonStart: '"In my opinion, Pelé deserves to be in the GOAT conversation more than he often is.',
          suggestedCompletion: '"In my opinion, Pelé deserves to be in the GOAT conversation more than he often is. I would argue this because his achievements — three World Cups, over 1,000 career goals, and a style of play that was decades ahead of its time — are unmatched in historical terms. The evidence is compelling: he dominated world football not for one or two years but across nearly two decades. Admittedly, it is true that he never competed in European club football at the highest level, and the quality of opposition in the Brazilian league was arguably lower than in Europe. I concede those points. However, I would argue that his global impact — the way he transcended football and became the face of the entire sport — is a criterion that no one else meets. Ultimately, if we define greatness by legacy, influence, and the total body of work, Pelé has a stronger case than most modern debates acknowledge."',
        },
        {
          customerLine: 'Make the case for a women\'s footballer — e.g. Marta or Megan Rapinoe — in a GOAT debate that traditionally ignores women\'s football.',
          salespersonStart: '"From my perspective, the GOAT debate is incomplete if it excludes women\'s football entirely.',
          suggestedCompletion: '"From my perspective, the GOAT debate is incomplete if it excludes women\'s football entirely. I believe that Marta, with six FIFA World Player of the Year awards — more than Messi and Ronaldo combined at the time of her peak — has as strong a claim as anyone. The evidence is clear: she has been giving elite performances for Brazil since the early 2000s, she has been inspiring a generation of girls to play the sport, and she did it without the financial infrastructure or global visibility that male players enjoy. Admittedly, the standard of competition in women\'s football has historically been lower — I concede that the depth of talent across countries is still developing. However, I would argue that Marta\'s dominance relative to her peers, in a sport she helped build, is at least as remarkable as any male player\'s. Ultimately, the GOAT debate should not be limited by gender — it should celebrate the greatest the game has ever seen, in any form."',
        },
        {
          customerLine: 'Using the B1 review — tie together vocabulary from across the unit in one structured GOAT argument.',
          salespersonStart: '"In my opinion, the GOAT debate cannot be reduced to one player or one criteria.',
          suggestedCompletion: '"In my opinion, the GOAT debate cannot be reduced to one player or one criteria — and I would argue that the best players have demonstrated greatness across every dimension of the game that we have studied this term. I believe the evidence is everywhere in football: in their pressing intensity and defensive organisation (Lesson 1 and 2), in their ability to build from the back and exploit width (Lessons 3 and 4), in the counter-attack goals that changed Cup matches in an instant (Lessons 5 and 17). The greatest players have shown their quality on European nights (Lesson 18), in World Cups (Lesson 20), and even in their social media presence and grassroots legacy (Lessons 14 and 19). Admittedly, statistics like goals, trophies, and Ballon d\'Or awards are the most visible evidence — I concede that numbers matter enormously. However, I would argue that the GOAT is the player whose football makes you feel something — whose legacy is not just in the record books but in the memories of everyone who watched them play. Ultimately, the greatest of all time is whoever made you fall in love with this game — and that is the most subjective, personal, and wonderful debate that football has ever given us."',
        },
        {
          customerLine: 'Conclude the B1 unit: What is the final answer to the GOAT debate? (There isn\'t one — make the argument for why that is a good thing.)',
          salespersonStart: '"All things considered, the greatest of all time is —',
          suggestedCompletion: '"All things considered, the greatest of all time is — undecided. And I would argue that is the right answer. I believe the reason the GOAT debate has no consensus is not a failure of analysis but a testament to the richness of the game. The evidence for this is the debate itself: decade after decade, new legends emerge, new criteria are proposed, new generations argue passionately in new languages on new platforms. Admittedly, some will find the lack of a definitive answer frustrating — I concede that human beings naturally want resolution. However, I would argue that the unsettled nature of the debate is what gives football its enduring power. If the GOAT were decided — if there were a consensus, if the argument were over — millions of conversations in languages across the world would cease. Ultimately, the GOAT debate is not a question waiting for an answer. It is a conversation that keeps football alive, passionate, and human. And if this B1 unit has taught you to have that conversation in English — confidently, structurally, and with joy — then perhaps that is the most important result of all."',
        },
      ],
    },
  },
};

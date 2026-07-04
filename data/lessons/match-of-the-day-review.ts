import { Lesson } from '@/types/lesson';

export const matchOfTheDayReview: Lesson = {
  slug: 'match-of-the-day-review',
  title: 'Match of the Day Review',
  subtitle: 'A2 Review: Write and speak a mini match report — putting it all together',
  level: 'A2',
  description: 'The final A2 review lesson — bringing together all the vocabulary, grammar, and skills from Units 1-4. Write and speak your own mini match report, give pundit-style analysis, and demonstrate your full A2 football English.',
  heroImage: '/images/match-of-the-day-review-hero.png',

  grammarFocus: {
    focusTitle: 'A2 Review: Grammar you have learned in Units 1-4',
    description: 'This lesson reviews all the key grammar from A2 Units 1-4. You have learned: present continuous (what\'s happening now), simple past (match reports and descriptions), "there is/are" (describing stadiums), "have to/must" (rules), comparative adjectives and adverbs, passive voice, and opinion phrases. This lesson puts them all together.',
    positivePattern: 'Past: won/scored | Continuous: is/are chanting | Opinion: I think/In my opinion',
    positiveExample: '"City WON 3-1. The fans ARE still celebrating. In my opinion, it was the match of the season."',
    negativePattern: 'Past negative: didn\'t create | Continuous negative: aren\'t celebrating',
    negativeExample: '"United DIDN\'T create enough chances." / "The away fans AREN\'T singing anymore — it\'s 3-0."',
    positiveExamples: [
      { sentence: 'City won 3-1 — Ronaldo scored twice and the atmosphere was absolutely electric.', note: '(simple past — match report)' },
      { sentence: 'The fans are still celebrating outside the stadium — the city is going wild.', note: '(present continuous — what\'s happening now)' },
      { sentence: 'There are 80,000 supporters inside the ground — it is a sold-out fortress.', note: '(there are + adjective description)' },
      { sentence: 'In my opinion, Ronaldo was the best player on the pitch — he was outstanding.', note: '(opinion phrase + simple past)' },
    ],
    negativeExamples: [
      { sentence: 'United didn\'t deserve to lose — they created chances but were not clinical enough.', note: '(didn\'t + base verb — past negative)' },
      { sentence: 'I don\'t think the red card was the right decision — the contact was very minimal.', note: '(I don\'t think + opinion + past)' },
    ],
  },

  vocabulary: [
    {
      word: 'REVIEW',
      partOfSpeech: 'noun / verb',
      definition: 'A look back at something — a summary and assessment of events, performances, or a season.',
      example: 'The end-of-season review covered every match — high points, low points, and key lessons learned.',
      imageSlug: '/images/review.png',
    },
    {
      word: 'VERDICT',
      partOfSpeech: 'noun',
      definition: 'A final judgement or opinion — a clear, decisive conclusion.',
      example: 'The pundit gave his verdict: "Ronaldo was outstanding. Man of the match, without question."',
      imageSlug: '/images/verdict.png',
    },
    {
      word: 'OUTSTANDING',
      partOfSpeech: 'adjective',
      definition: 'Exceptionally good — noticeably better than the rest.',
      example: 'The goalkeeper was outstanding — he made eight saves and kept a clean sheet against a strong attack.',
      imageSlug: '/images/outstanding.png',
    },
    {
      word: 'RESILIENT',
      partOfSpeech: 'adjective',
      definition: 'Able to recover from difficulty — showing mental and physical strength under pressure.',
      example: 'Despite going 2-0 down, the team were resilient — they fought back to win 3-2 in extraordinary fashion.',
      imageSlug: '/images/resilient.png',
    },
    {
      word: 'DECISIVE',
      partOfSpeech: 'adjective',
      definition: 'Having a final, clear effect on the outcome — making the difference.',
      example: 'The manager\'s half-time tactical change was decisive — it completely altered the course of the match.',
      imageSlug: '/images/decisive.png',
    },
    {
      word: 'TAKEAWAY',
      partOfSpeech: 'noun',
      definition: 'The key lesson or conclusion from an experience — what you learn from something.',
      example: 'The main takeaway from this season: the team needs a clinical striker to challenge for the title.',
      imageSlug: '/images/takeaway.png',
    },
    {
      word: 'MEMORABLE',
      partOfSpeech: 'adjective',
      definition: 'Worth remembering — particularly special or significant.',
      example: 'It was a truly memorable night — a five-goal thriller with a last-minute winner in front of 80,000 fans.',
      imageSlug: '/images/memorable.png',
    },
    {
      word: 'SUMMARY',
      partOfSpeech: 'noun',
      definition: 'A brief account of the main points — covering the key events without full detail.',
      example: 'The TV programme gave a two-minute summary of every match played over the weekend.',
      imageSlug: '/images/summary.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'LOOK BACK ON',
      definition: 'To reflect on something in the past — to review and assess what happened.',
      example: 'Looking back on the season, the manager identified the away defeat in January as the turning point.',
      imageSlug: '/images/look-back-on.png',
    },
    {
      phrase: 'STAND OUT',
      definition: 'To be noticeably better or more significant than others.',
      example: 'Three moments stood out from the match — the opener, the red card, and the extraordinary last-minute winner.',
      imageSlug: '/images/stand-out.png',
    },
    {
      phrase: 'COME DOWN TO',
      definition: 'To be determined by — the decisive factor that decided the outcome.',
      example: 'In the end, it came down to clinical finishing — City took their chances and United didn\'t.',
      imageSlug: '/images/come-down-to.png',
    },
    {
      phrase: 'PUT IN',
      definition: 'To deliver — to produce a performance or amount of effort.',
      example: 'Ronaldo put in one of the best individual performances of the entire season tonight.',
      imageSlug: '/images/put-in.png',
    },
    {
      phrase: 'ROUND UP',
      definition: 'To collect and present — to summarise multiple things together.',
      example: 'The programme rounds up all the weekend\'s results and provides analysis of the key matches.',
      imageSlug: '/images/round-up.png',
    },
    {
      phrase: 'TAKE AWAY',
      definition: 'To learn from or conclude from — the lesson or key insight from an experience.',
      example: 'What do you take away from that performance? The team showed real character under extreme pressure.',
      imageSlug: '/images/take-away.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases for reviewing and discussing a match — vocabulary for analysis, reflection, and assessment.',
    items: [
      {
        cue: 'What a match!',
        meaning: 'An exclamation expressing amazement and admiration at an exceptional, exciting match.',
        usage: 'Said after a particularly dramatic, entertaining, or significant match. "What a match!" is simple, emphatic, and universal — it covers everything: goals, drama, controversy, and quality. It is spoken with emphasis and genuine feeling. It can stand alone or introduce a detailed review: "What a match — five goals, two red cards, and a last-minute winner!"',
        imageSlug: 'otp-what-a-match',
      },
      {
        cue: 'That was the match of the season.',
        meaning: 'This match was the best, most exciting, or most significant of the entire season so far.',
        usage: 'A superlative judgement — the absolute best. "That was the match of the season" is a clear, decisive verdict. It is used by commentators, pundits, and fans after exceptional matches. "Match of the season" implies: no other match this year was better for goals, drama, quality, or significance.',
        imageSlug: 'otp-match-of-season',
      },
      {
        cue: 'On reflection...',
        meaning: 'After thinking about it more carefully — introducing a considered, thoughtful view.',
        usage: 'Used by pundits and managers to introduce an opinion that has developed after thinking: "On reflection, I think the manager\'s decision to play two strikers was the key." It signals maturity — you have not just reacted emotionally, you have thought carefully. Very common in post-match analysis and press conferences.',
        imageSlug: 'otp-on-reflection',
      },
      {
        cue: 'To put it simply...',
        meaning: 'Introducing a clear, direct summary — cutting through complexity to give the essential point.',
        usage: 'Used to simplify complex analysis into one clear statement. "To put it simply — they were better than us tonight. Every department." It is often used at the end of a detailed analysis to give the clear conclusion. Pundits use it to make sure the audience understands the main message.',
        imageSlug: 'otp-to-put-it-simply',
      },
      {
        cue: 'The stats don\'t lie.',
        meaning: 'The statistics support the conclusion — the numbers confirm what happened.',
        usage: 'Used to back up an argument with data. "City had 70% possession, 18 shots, and 8 on target. The stats don\'t lie — they were the better team and deserved the win." It ends debate by appealing to objective numbers. However, fans often counter: "Stats don\'t always tell the whole story" — which is also true!',
        imageSlug: 'otp-stats-dont-lie',
      },
      {
        cue: 'When all is said and done...',
        meaning: 'After everything has been discussed and considered — introducing the final conclusion.',
        usage: 'A classic closing phrase for post-match analysis. "When all is said and done, the better team won. Simple." It signals: we have discussed everything — this is my final judgement. Very common in British football culture. The equivalent of "at the end of the day" — which is also very common in football punditry.',
        imageSlug: 'otp-when-all-is-said-and-done',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Well — what a night. What a [[memorable:worth remembering — particularly special]] match. Before we go, let\'s do a quick [[review:a look back and assessment]]. Ronaldo — your [[verdict:a final judgement or opinion]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'In my opinion, it was the match of the season. Looking back on it — City were [[dominant:clearly the better team, controlling the match]] for most of the game. Ronaldo — the player, not me — was [[outstanding:exceptionally good]].',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I agree. And I think what [[stood out:was noticeably better or more significant]] was the resilience — going 1-0 down and then winning 3-1. That\'s a [[resilient:able to recover from difficulty]] team with real character.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: '[[On reflection:after thinking more carefully]], I think the [[decisive:having a final effect on the outcome]] moment was the red card in the 55th minute. Before that, it was even. After that, City were a different team.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The [[stats don\'t lie:numbers support the conclusion]]: City had 70% possession after the red card, twelve shots, seven on target. To [[put it simply:introduce a clear, direct summary]] — they were better and they won.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'What\'s the main [[takeaway:the key lesson or conclusion]] from tonight, Coach?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: '[[When all is said and done:after everything has been considered — the final conclusion]], the [[summary:a brief account of the main points]] is simple: discipline matters. One red card changed this match completely. Stay disciplined, stay focused, and you stay in the game.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'You know — looking back on Units 1 through 4, we have learned so much. From the vocabulary of the pitch to the language of the stands, from match reports to pundit analysis. In my opinion, we\'re ready for B1.',
    },
  ],

  matchingExercise: [
    { word: 'VERDICT', definition: 'A final judgement or decisive conclusion' },
    { word: 'OUTSTANDING', definition: 'Exceptionally good — noticeably better than the rest' },
    { word: 'RESILIENT', definition: 'Able to recover from difficulty — showing strength under pressure' },
    { word: 'DECISIVE', definition: 'Having a final, clear effect on the outcome' },
    { word: 'MEMORABLE', definition: 'Worth remembering — particularly special or significant' },
    { word: 'SUMMARY', definition: 'A brief account of the main points — covering key events' },
    { word: 'TAKEAWAY', definition: 'The key lesson or conclusion from an experience' },
    { word: 'REVIEW', definition: 'A look back — a summary and assessment of events' },
  ],

  fillBlankExercise: [
    { before: 'When all is said and done, the better team', answer: 'won', after: '— City were outstanding from first to last.' },
    { before: 'On', answer: 'reflection', after: ', I think the turning point was the red card — not the first goal.' },
    { before: 'To put it', answer: 'simply', after: ', they were better in every department tonight. No argument.' },
    { before: 'Three moments', answer: 'stood out', after: '— the opener, the red card, and the last-minute winner.' },
    { before: 'In the end, it', answer: 'came down to', after: 'clinical finishing — City took their chances and United did not.' },
    { before: 'Ronaldo', answer: 'put in', after: 'one of the best individual performances of the entire season.' },
    { before: 'The stats', answer: 'don\'t lie', after: ': 70% possession, 18 shots, 3 goals. City were dominant.' },
    { before: 'Looking', answer: 'back on', after: 'the season, three matches defined the title race.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which sentence correctly uses A2 grammar for a match report?',
      options: [
        '"City are winning 3-1 last night in a great match."',
        '"City won 3-1 last night in a memorable encounter."',
        '"City was winning 3-1 last night and the crowd is going wild."',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "resilient" mean in football?',
      options: [
        'Playing very offensive, attacking football',
        'Able to recover from difficulty — showing strength under pressure',
        'Being very consistent and never losing any matches',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "when all is said and done" introduce?',
      options: [
        'The beginning of a detailed tactical analysis',
        'A disagreement with the previous speaker',
        'A final conclusion after full consideration',
      ],
      correctIndex: 2,
    },
    {
      question: 'What does "it came down to clinical finishing" mean?',
      options: [
        'The match was decided in a medical room',
        'Clinical finishing was the decisive factor — it determined the result',
        'The team played in a very cold, clinical way throughout',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which phrase correctly introduces a thoughtful, considered opinion?',
      options: [
        '"On reflection, I think the red card was the turning point."',
        '"On reflection I think not the red card was the turning point."',
        '"In reflection, I think the red card was the turning point."',
      ],
      correctIndex: 0,
    },
    {
      question: 'What does "to put it simply" do?',
      options: [
        'Introduces a complex, detailed analysis',
        'Introduces a clear, direct summary — cutting through complexity',
        'Suggests the speaker does not know the answer',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which is correct in a match report?',
      options: [
        '"United didn\'t created enough chances."',
        '"United did not create enough chances."',
        '"United not did create enough chances."',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "stand out" mean?',
      options: [
        'To physically stand in a specific area of the stadium',
        'To refuse to play — a player standing still in protest',
        'To be noticeably better or more significant than others',
      ],
      correctIndex: 2,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence — a full A2 review exercise using vocabulary and grammar from all four units.',
    items: [
      {
        sentence: 'City _____ 3-1 in a match that had everything — goals, controversy, and a stunning late winner.',
        options: ['run out', 'ran out', 'are running out'],
        correctIndex: 1,
        explanation: '"Ran out" is correct — simple past for a completed match result. "City ran out 3-1 winners" is standard match report language. "Run out" is base form (present) — wrong for past events. "Are running out" is present continuous — wrong for something that already happened.',
      },
      {
        sentence: 'The fans _____ still singing outside the stadium — the celebrations are continuing long after the final whistle.',
        options: ['were', 'are', 'was'],
        correctIndex: 1,
        explanation: '"Are" is correct — the fans are singing RIGHT NOW, after the match. This is present continuous (are + verb-ing = happening now). "Were" would be past. "Was" is singular past — wrong for "fans" (plural, present).',
      },
      {
        sentence: 'On reflection, _____ the turning point was the red card — it changed everything that came after.',
        options: ['I think', 'I said', 'I will think'],
        correctIndex: 0,
        explanation: '"I think" is correct — an opinion phrase in the present for an assessment of the past. "On reflection, I think" introduces a carefully considered current opinion about a past event. "I said" is past — wrong (you\'re giving your view now). "I will think" is future — wrong.',
      },
      {
        sentence: 'There _____ three key moments that defined the match — the opener, the red card, and the last-minute winner.',
        options: ['was', 'is', 'were'],
        correctIndex: 2,
        explanation: '"Were" is correct — past tense, plural. Three moments = plural → "there were." "Was" is singular past. "Is" is present singular — wrong for a completed match being reviewed.',
      },
      {
        sentence: 'In my opinion, the striker _____ man of the match — two goals and two assists in 90 minutes.',
        options: ['was deserving', 'deserved', 'is deserving'],
        correctIndex: 1,
        explanation: '"Deserved" is correct — simple past to describe the match outcome in a review. "Deserved" = earned through performance. "Was deserving" is grammatically possible but unnatural in this context. "Is deserving" is present continuous — wrong for past event being reviewed.',
      },
      {
        sentence: 'When all is said and done, _____ — City were the better team and deserved the three points.',
        options: ['to put it simply', 'in my opinion it was', 'the stats don\'t lie'],
        correctIndex: 2,
        explanation: '"The stats don\'t lie" is best — it backs up the conclusion with objective evidence. After "when all is said and done" (final conclusion), the stats provide the supporting evidence. "To put it simply" could also work but is slightly redundant after "when all is said and done." "In my opinion it was" — grammatically incomplete in this position.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'A2 Review — work in groups on these match analysis questions. Choose the best answer using everything you\'ve learned.',
      items: [
        {
          customerLine: 'You\'re giving the post-match verdict as a pundit. City won 3-1. Give your summary.',
          options: [
            '"City won. They scored three goals and United scored one. The match is over."',
            '"On reflection, City were the better team throughout. In my opinion, the turning point was the red card — it opened up space and City ran out deserved 3-1 winners. Man of the match: Ronaldo, without question."',
            '"I think City won but United also played well and deserved more. It was a difficult match and both teams tried hard."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses: "On reflection" (considered opinion), "In my opinion" (opinion phrase), "the turning point was" (analysis vocabulary), "ran out 3-1 winners" (match report language), and gives a clear, decisive verdict including man of the match. A is too basic — no analysis. C is too vague and fails to give a decisive conclusion — good pundits are decisive.',
        },
        {
          customerLine: 'A rival fan says: "You got lucky tonight — the red card changed everything." How do you respond?',
          options: [
            '"We were robbed all season! You\'re always against us!"',
            '"I see your point — the red card was certainly decisive. But in my opinion, City were the dominant team before it too. I\'d say we deserved the win on the balance of play."',
            '"Fair enough. We were completely lucky. City didn\'t deserve anything."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses: "I see your point" (polite acknowledgement of the rival\'s view), "certainly decisive" (honest concession), "in my opinion" (opinion phrase), "the dominant team" (A2 vocabulary), "on the balance of play" (sports idiom). A is aggressive. C gives away too much — agreeing "completely lucky" when you won 3-1 with clear stats is wrong.',
        },
        {
          customerLine: 'Describe the atmosphere at the stadium during the match — use language from Units 3 and 4.',
          options: [
            '"The fans were there. They were loud. The stadium was full."',
            '"The stadium was sold out — 80,000 fans packed the ground. The atmosphere was electric. The ultras in the north stand chanted non-stop. When Ronaldo scored the third, the crowd went wild — an extraordinary noise that lasted for minutes."',
            '"There were many people in the stadium. They were happy because City won."',
          ],
          correctIndex: 1,
          explanation: 'B is correct and uses the full range of vocabulary from the stadium and fan lessons: "sold out," "packed the ground," "electric atmosphere," "ultras," "chanted non-stop," "went wild," and "extraordinary noise." A and C use simple, basic language. This review exercise tests whether you can combine vocabulary from multiple lessons into rich, descriptive language.',
        },
        {
          customerLine: 'What is the main takeaway from the A2 course? What have you learned?',
          options: [
            '"I learned some words about football in English."',
            '"On reflection, I think the main takeaway is that football English is a complete language — with its own vocabulary for the pitch, the stands, the broadcast, the match report, and fan conversation. When all is said and done, understanding football in English means understanding both the beautiful game and the beautiful language around it."',
            '"I think football is good and English is also good. It was a good course."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — it uses A2 review language perfectly: "On reflection" (considered view), "I think the main takeaway is" (opinion + lesson vocabulary), "When all is said and done" (final conclusion), and articulates a clear, intelligent insight about the course content. It demonstrates mastery of the vocabulary, structures, and tone of A2 Football English. A and C are vague and basic.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Final review: find three mistakes in this post-match pundit discussion. Use everything you\'ve learned.',
      dialogue: [
        { speaker: 'Presenter', text: 'Welcome back to the studio. Let\'s get your verdict on a memorable night.' },
        { speaker: 'Pundit 1', text: 'On reflection, I think City was the dominant team — they won 3-1 and it was deserved.' },
        { speaker: 'Pundit 2', text: 'I agree completely — in my opinion, I think Ronaldo was outstanding. Man of the match for me.' },
        { speaker: 'Pundit 1', text: 'There were no question that the red card changed the match — it was the decisive turning point.' },
        { speaker: 'Pundit 2', text: 'The stats don\'t lie — City had 70% possession and 18 shots. They did not created enough chances for United.' },
        { speaker: 'Presenter', text: 'When all is said and done — a memorable evening. City are champions of the season.' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'in my opinion, I think',
          correction: 'Use "in my opinion" OR "I think" — not both',
          explanation: 'Using "in my opinion" and "I think" together is redundant — they are two different ways of saying the same thing. Use one or the other. This error appeared in the TV lesson too — it is a very common learner mistake. Pick the one that fits the sentence: "In my opinion, Ronaldo was outstanding" OR "I think Ronaldo was outstanding."',
        },
        {
          lineIndex: 3,
          incorrectText: 'There were no question',
          correction: 'There was no question',
          explanation: '"Question" is singular — use "was." "There was no question" = it was absolutely certain. "There were" is for plural nouns. "There was no question" is an idiomatic phrase meaning "it was undeniable" — singular, always with "was."',
        },
        {
          lineIndex: 4,
          incorrectText: 'They did not created enough chances for United',
          correction: 'United did not create enough chances',
          explanation: 'Two errors here. First: "did not created" — after "did not," use the base verb, not past tense. "Did not create." Second: the subject is wrong — "they" seems to refer to City, but "enough chances for United" means United did not create chances. The sentence should say "United did not create enough chances" to be clear.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Final A2 review — complete each speaker\'s line using the full range of A2 Football English you\'ve learned.',
      items: [
        {
          customerLine: 'Presenter: "Give us your full match verdict — from the atmosphere to the final whistle."',
          salespersonStart: 'Pundit: What a night! What a match!',
          suggestedCompletion: 'The atmosphere was electric from the first minute — 80,000 fans packed into a sold-out fortress, the ultras chanting non-stop in the north stand. On the pitch, City were dominant from the start — pressing high, winning second balls, and creating chances consistently. In what proved to be the turning point, the home captain received his second yellow card in the 55th minute. From that moment, City were outstanding — clinical in front of goal and resilient at the back. Ronaldo was man of the match without question — two stunning goals, both of the highest quality. When all is said and done, the stats don\'t lie. City ran out deserved 3-1 winners in what I would call the match of the season. Memorable does not begin to cover it.',
        },
        {
          customerLine: 'A new English learner asks: "How do I talk about football in English?"',
          salespersonStart: 'Sofia: On reflection, I think the best way is to learn the language of every part of the football experience.',
          suggestedCompletion: 'Start on the pitch — the vocabulary of passes, shots, and set pieces. Then learn the chants and shouts from the stands — how fans communicate their support and frustration. Watch matches on TV and listen to the commentators and pundits — how they describe goals, analyse tactics, and give opinions. Read match reports — the formal, journalistic English of the game. And then — most importantly — talk to other fans. Agree and disagree, share opinions, use phrases like "in my opinion" and "I see your point, but." When all is said and done, football English is not just a language — it is a culture. And the best way to learn a culture is to live inside it.',
        },
        {
          customerLine: 'Coach Diallo: "What is the most important lesson from the A2 course?"',
          salespersonStart: 'Ronaldo: I\'d say the most important takeaway is about communication — not just vocabulary.',
          suggestedCompletion: 'Vocabulary is important — yes, you need to know what "clinical," "resilient," and "dominant" mean. You need to know how to read a match report and understand a pundit\'s analysis. But in my opinion, the biggest lesson is confidence. Confidence to say "I think the red card was wrong" in English. Confidence to debate with a rival fan, to give your verdict after a match, to describe what you saw on the pitch in your own words. When all is said and done, language is only useful when you actually use it. So go and watch a match, read a report, talk to a fan — and speak. That is the real lesson of A2.',
        },
        {
          customerLine: 'Write the final closing speech for the A2 Football English course.',
          salespersonStart: 'Coach Diallo: When we started this journey together, many of you were nervous about speaking football English.',
          suggestedCompletion: 'Now look at what you can do. You can describe a match — the goals, the turning point, the man of the match. You can talk about the squad, the stadium, the atmosphere, the fans. You can give your verdict like a pundit: "In my opinion..." "On reflection..." "When all is said and done..." You can read a match report and understand every word — "ran out winners," "opening the scoring," "a goal of the highest quality." You can talk to any football fan in the world — agreeing, disagreeing, laughing, debating. That is what A2 Football English has given you. Not just words. Not just grammar. A voice. And in football, as in life, having a voice — and the confidence to use it — is everything. See you in B1.',
        },
      ],
    },
  },
};

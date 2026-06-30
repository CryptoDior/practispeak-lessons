import { Lesson } from '@/types/lesson';

export const matchHighlights: Lesson = {
  slug: 'match-highlights',
  title: 'Match Highlights',
  subtitle: 'Describing a highlight reel — sequencing language and past tenses',
  level: 'B1-B2',
  description: 'Learn how to describe match highlights in sequence — using past tenses and sequencing language to tell the story of a match clearly and naturally.',
  heroImage: '/images/match-highlights-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Sequencing language + past tenses for match descriptions',
    description: 'When describing a match or highlight reel, we use the past simple for completed actions and past continuous for background context. Sequencing words (first, then, after that, before long, just as, finally) structure the story and make it easy to follow.',
    positivePattern: 'Sequencing word + past simple/past continuous clause',
    positiveExample: '"First, the keeper made a brilliant save. Then, in the 34th minute, they opened the scoring. After that, the game changed completely." / "Just as the referee blew for half-time, she equalised."',
    negativePattern: 'Do NOT use "after" without a time reference as if it means "then" — use "after that" for the next event in sequence.',
    negativeExample: 'WRONG: "After they scored." (incomplete — "after" needs an action) / RIGHT: "After they scored, the game opened up." / OR: "Then they scored and the game opened up."',
    positiveExamples: [
      { sentence: 'First, City dominated possession in the opening ten minutes — then United hit them on the counter.', note: '(first... then = sequence)' },
      { sentence: 'After that, the match changed completely — both teams pushed forward and the goals came.', note: '(after that = linking the next event)' },
      { sentence: 'Just as it looked like ending 0-0, she stepped up and curled it into the top corner.', note: '(just as = at exactly that moment)' },
      { sentence: 'Finally, in the 93rd minute, the home team got the goal their performance deserved.', note: '(finally = the last important event)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "They scored. After, the game changed."', note: '"After" alone cannot start a sentence as a sequencing word — use "after that" or "afterwards."' },
      { sentence: 'RIGHT: "They scored. After that, the game changed completely."', note: '"After that" correctly introduces the next event in the sequence.' },
    ],
  },

  vocabulary: [
    {
      word: 'HIGHLIGHT REEL',
      partOfSpeech: 'noun',
      definition: 'A short video showing only the best and most exciting moments of a match.',
      example: 'The highlight reel showed all three goals — but it left out how dominant the defending team was for the whole second half.',
      imageSlug: '/images/highlight-reel.png',
    },
    {
      word: 'DOMINANT',
      partOfSpeech: 'adjective',
      definition: 'In control — a team that is dominant is winning most of the battles and having most of the chances.',
      example: 'They were dominant in the first half — more than 70% possession and four shots on target before half-time.',
      imageSlug: '/images/dominant.png',
    },
    {
      word: 'OPENER',
      partOfSpeech: 'noun',
      definition: 'The first goal of the match.',
      example: 'She broke the deadlock with the opener in the 23rd minute — a well-taken volley from the edge of the box.',
      imageSlug: '/images/opener.png',
    },
    {
      word: 'EQUALISER',
      partOfSpeech: 'noun',
      definition: 'A goal that makes the score equal — bringing the trailing team level.',
      example: 'They looked like losing until he scored the equaliser with two minutes left — a dramatic end to the match.',
      imageSlug: '/images/equaliser.png',
    },
    {
      word: 'WINNER',
      partOfSpeech: 'noun',
      definition: 'The goal that decides the match — the goal that makes one team win.',
      example: 'She scored the winner with a penalty in extra time — the crowd erupted.',
      imageSlug: '/images/winner.png',
    },
    {
      word: 'DEADLOCK',
      partOfSpeech: 'noun',
      definition: 'A 0-0 situation — when neither team has scored yet. "Breaking the deadlock" = scoring the first goal.',
      example: 'The match seemed to be heading for a 0-0 draw when he finally broke the deadlock in the 81st minute.',
      imageSlug: '/images/deadlock.png',
    },
    {
      word: 'ENCOUNTER',
      partOfSpeech: 'noun',
      definition: 'A match or game — a slightly formal word for a football contest between two teams.',
      example: 'It was a fascinating encounter — two top teams producing an end-to-end match full of goals and chances.',
      imageSlug: '/images/encounter.png',
    },
    {
      word: 'TURNAROUND',
      partOfSpeech: 'noun',
      definition: 'When a team goes from losing to winning — a complete change in the result during the match.',
      example: 'What a turnaround — they were 2-0 down at half-time and won 3-2 by the final whistle.',
      imageSlug: '/images/turnaround.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BREAK THE DEADLOCK',
      definition: 'To score the first goal of the match — ending the 0-0 situation.',
      example: 'She broke the deadlock with a stunning free kick in the 34th minute — the first goal after a tight first half.',
      imageSlug: '/images/break-the-deadlock.png',
    },
    {
      phrase: 'PULL ONE BACK',
      definition: 'To score a goal when losing — reducing the deficit. If you were 2-0 down, "pulling one back" makes it 2-1.',
      example: 'They pulled one back just before half-time — making the interval score 2-1 and giving them hope.',
      imageSlug: '/images/pull-one-back.png',
    },
    {
      phrase: 'COME FROM BEHIND',
      definition: 'To win or draw after being the losing team — recovering from a losing position.',
      example: 'They came from behind to win 3-2 — one of the most dramatic comebacks of the season.',
      imageSlug: '/images/come-from-behind.png',
    },
    {
      phrase: 'TURN IT AROUND',
      definition: 'To change the result — going from losing to drawing or winning.',
      example: 'They turned it around completely in the second half — two quick goals changed everything.',
      imageSlug: '/images/turn-it-around.png',
    },
    {
      phrase: 'OPEN UP',
      definition: 'When a match becomes more open and exciting — more chances, more space, more goals.',
      example: 'After the first goal, the match really opened up — both teams pushed forward and four more goals followed.',
      imageSlug: '/images/open-up.png',
    },
    {
      phrase: 'SETTLE FOR',
      definition: 'To accept a result that is less than you wanted — to be satisfied with a draw when you wanted a win.',
      example: 'In the end, both teams had to settle for a point — neither was able to find the winner.',
      imageSlug: '/images/settle-for.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases used when describing or discussing match highlights.',
    items: [
      {
        cue: 'It was a tale of two halves.',
        meaning: 'The two halves of the match were completely different — one team dominated one half, the other team dominated the other.',
        usage: 'One of the most common clichés in football — but a very useful phrase for describing a match with a dramatic change at half-time. "A tale of two halves" = the first 45 minutes and the second 45 minutes told completely different stories. Used in post-match analysis and highlight descriptions.',
        imageSlug: 'otp-tale-of-two-halves',
      },
      {
        cue: 'They never looked back after that.',
        meaning: 'After a key moment (usually a goal), the team continued to dominate and the result was never in doubt.',
        usage: '"Never looked back" = did not have any problems or setbacks after the key moment. Used to describe a moment that changed the match decisively. "They scored in the 20th minute and never looked back" = from that point, they were always in control.',
        imageSlug: 'otp-never-looked-back',
      },
      {
        cue: 'Against the run of play.',
        meaning: 'A goal or event that went against the general flow — the team that was NOT playing well scored.',
        usage: '"Against the run of play" = the opposite of what the match was showing. If one team was dominant but the other team scored, that goal was "against the run of play." Very common in match analysis and highlight commentary.',
        imageSlug: 'otp-against-the-run-of-play',
      },
      {
        cue: 'The goals came thick and fast.',
        meaning: 'Many goals were scored in a short period of time.',
        usage: '"Thick and fast" = quickly and frequently. Used to describe a period of the match where multiple goals were scored in a short time. Often used after a tight first half opens up in the second half.',
        imageSlug: 'otp-goals-came-thick-and-fast',
      },
      {
        cue: "It finished all square.",
        meaning: 'The match ended as a draw — both teams scored the same number of goals.',
        usage: '"All square" = equal, tied, a draw. A slightly formal phrase for describing a draw. Used in written match reports and spoken summaries. "It finished all square at 2-2" = the final score was a 2-2 draw.',
        imageSlug: 'otp-finished-all-square',
      },
      {
        cue: 'The first half was fairly quiet — but then the second half exploded.',
        meaning: 'The first half had little action, but the second half was full of goals and excitement.',
        usage: 'A common structure for describing a match where the action was unevenly distributed. "Fairly quiet" = not much happened. "Exploded" = suddenly became full of action, goals, and excitement. Using contrasting language (quiet vs exploded) makes the description vivid and interesting.',
        imageSlug: 'otp-first-half-quiet-second-half-exploded',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Today — describing highlights. You have just watched the match. Tell me what happened. Sofia — start with the first goal.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The match started very tight. Both teams were defending well and neither was creating much. Then, in the 23rd minute, the striker broke the [[deadlock:the 0-0 situation before the first goal is scored]] with a brilliant header. The goalkeeper had no chance.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. "Then" = sequencing word. Past simple throughout. What happened [[after that:the next event in the sequence — linking what came next]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'After that, the match really [[opened up:became more open and exciting — more chances and more goals]]. The trailing team pushed forward and they [[pulled one back:scored a goal to reduce the deficit]] five minutes before half-time. Just before the half-time whistle — 1-1.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: '"Just before the half-time whistle" — excellent time expression. And the second half?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'The second half was incredible. First, they scored two quick goals in ten minutes. Then, the other team [[came from behind:recovered from a losing position to win or draw]] and scored their own [[equaliser:a goal that makes the score equal]]. [[Finally:the last important event in the sequence]], in the 90th minute, there was a penalty — and the [[winner:the goal that decides the match]] made it 3-2.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. Notice: first, then, after that, finally — four sequencing words, building the story clearly. And the overall description?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'It was a [[turnaround:when a team goes from losing to winning — a complete change in the result]]. It was definitely a tale of two halves — the first was tight and quiet, the second was an absolute [[encounter:a match or contest — a slightly formal word for a football game]] to remember.',
    },
  ],

  matchingExercise: [
    { word: 'HIGHLIGHT REEL', definition: 'A short video showing only the best moments of a match' },
    { word: 'OPENER', definition: 'The first goal of the match' },
    { word: 'EQUALISER', definition: 'A goal that makes the score equal — bringing the losing team level' },
    { word: 'WINNER', definition: 'The goal that decides the match in favour of one team' },
    { word: 'DEADLOCK', definition: 'The 0-0 situation before the first goal — "breaking the deadlock" = scoring first' },
    { word: 'TURNAROUND', definition: 'Going from losing to winning — a complete change in the result' },
    { word: 'ENCOUNTER', definition: 'A match or game — a slightly formal word for a football contest' },
    { word: 'DOMINANT', definition: 'In control — winning most battles and creating most chances' },
  ],

  fillBlankExercise: [
    { before: 'First, they dominated the first half. Then,', answer: 'after that', after: ', the match completely changed — both teams started attacking.' },
    { before: 'She broke', answer: 'the deadlock', after: 'in the 34th minute — the first goal after a very tight opening half.' },
    { before: 'They pulled one back', answer: 'just before', after: 'half-time — making it 2-1 and giving them hope for the second half.' },
    { before: 'What a', answer: 'turnaround', after: '— they were 2-0 down and came back to win 3-2. Incredible.' },
    { before: 'The match was heading for a draw when,', answer: 'finally', after: ', she scored the winner in the 90th minute.' },
    { before: 'They came', answer: 'from behind', after: 'to win — 0-1 down at half-time, they won 2-1 with two second-half goals.' },
    { before: 'After the first goal, the match really', answer: 'opened up', after: '— both teams pushed forward and four more goals followed.' },
    { before: 'In the end, both teams had to', answer: 'settle for', after: 'a draw — neither could find the winner.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which sequencing word fits best? "They were losing 2-0. _____, they scored two quick goals in five minutes."',
      options: [
        'After',
        'Then',
        'Just as',
      ],
      correctIndex: 1,
    },
    {
      question: '"The match was against the run of play." What does this mean?',
      options: [
        'The match ended as a draw',
        'The team that was not playing well scored or won',
        'Both teams were running hard but neither scored',
      ],
      correctIndex: 1,
    },
    {
      question: '"They never looked back after that." When is this phrase used?',
      options: [
        'When a team was losing and came back to win',
        'When a key moment gave one team complete control for the rest of the match',
        'When a team settled for a draw',
      ],
      correctIndex: 1,
    },
    {
      question: '"It finished all square." What was the final result?',
      options: [
        'One team won convincingly',
        'The match ended in a draw',
        'It went to extra time',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence has correct sequencing language?',
      options: [
        '"They scored. After, the match opened up and both teams pushed forward."',
        '"They scored. After that, the match opened up and both teams pushed forward."',
        '"They scored. After to, the match opened up."',
      ],
      correctIndex: 1,
    },
    {
      question: '"She pulled one back in the 70th minute." What does this mean?',
      options: [
        'She scored the first goal of the match',
        'She scored the goal that made the teams level',
        'She scored a goal to reduce the deficit while her team were still losing',
      ],
      correctIndex: 2,
    },
    {
      question: '"The goals came thick and fast." What does this describe?',
      options: [
        'Goals that were scored with great power',
        'A period where many goals were scored in a short time',
        'Goals that were difficult to score',
      ],
      correctIndex: 1,
    },
    {
      question: '"It was a tale of two halves." What does this phrase describe?',
      options: [
        'A match where the same team dominated both halves',
        'A match where the two halves were completely different from each other',
        'A match that went to extra time',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each match description using the correct sequencing word or phrase.',
    items: [
      {
        sentence: 'The match started slowly — both teams were very cautious. _____, in the 30th minute, the home team broke the deadlock.',
        options: ['After', 'Then', 'Finally'],
        correctIndex: 1,
        explanation: '"Then" is correct here. "Then" is the most natural sequencing word for the next main event after an opening description. "After" cannot start a sentence alone as a sequencing word — you need "after that" or "afterwards." "Finally" suggests this is the last important event — but at the 30th minute, the match is far from over.',
      },
      {
        sentence: '_____, in the 88th minute, the substitute scored the winner — completing an incredible comeback.',
        options: ['Just as', 'After', 'Finally'],
        correctIndex: 2,
        explanation: '"Finally" is correct. "Finally" is the perfect sequencing word for the last and most dramatic event — especially in a comeback story. "Finally" suggests it was the conclusion after a long journey. "Just as" would need a simultaneous event: "just as the referee looked at his watch." "After" alone cannot start a sentence — needs "after that."',
      },
      {
        sentence: '_____ the first goal went in, the match completely changed — both teams started attacking.',
        options: ['After that', 'Just as', 'Once'],
        correctIndex: 2,
        explanation: '"Once" is correct — but "after that" is also grammatically possible. "Once the first goal went in" = from the moment the first goal was scored. "Once" introduces a condition or trigger: as soon as this happened, everything changed. "After that" would also work: "After that, the match completely changed." "Just as" introduces two simultaneous events — the change did not happen at the same moment as the goal, it happened as a result.',
      },
      {
        sentence: 'They were 2-0 down at half-time. _____, they came out fighting in the second half and scored three goals.',
        options: ['Finally', 'However', 'Just as'],
        correctIndex: 1,
        explanation: '"However" is correct. "However" introduces a contrast — the situation was bad (2-0 down) but what happened next was the opposite (they came back and won). "However" = but/nevertheless, used for contrast in descriptions. "Finally" would work only if this was the final event in a long sequence. "Just as" is for simultaneous events. In match descriptions, "however" is extremely useful for turning points and comebacks.',
      },
      {
        sentence: 'The first goal came in the 20th minute. _____, the second goal followed just five minutes later.',
        options: ['After that', 'Just as', 'Finally'],
        correctIndex: 0,
        explanation: '"After that" is correct. "After that" simply introduces the next event in a sequence — the second thing that happened after the first thing. It is the most neutral and common sequencing phrase. "Just as" introduces two things happening at the same time — wrong here (the goals were five minutes apart). "Finally" suggests a long wait — but five minutes is a short time, so "finally" would be slightly dramatic and misleading.',
      },
      {
        sentence: '_____ it looked like the match would end 0-0, she stepped up and curled it into the top corner.',
        options: ['Just as', 'After that', 'Then'],
        correctIndex: 0,
        explanation: '"Just as" is correct. "Just as" introduces two things that happen at the same moment: "just as [it looked like ending 0-0], [she scored]." The key meaning: at exactly the moment when one thing was happening, another thing also happened. "Just as" is perfect for last-minute drama and sudden changes. "After that" and "then" are for sequential (one after another) events, not simultaneous ones.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Choose the best match highlight description — paying attention to sequencing and past tenses.',
      items: [
        {
          customerLine: 'Describe the key moments of a 2-1 away win.',
          options: [
            '"First, the home team is scoring after ten minutes. Then, the away team is equalising. After that, they are winning the match with a late goal."',
            '"First, the home team scored after ten minutes — against the run of play. Then, the away team equalised with a brilliant counter-attack. After that, they turned it around completely — scoring the winner in the 87th minute. They never looked back."',
            '"The home team has been scoring first. After, the away team equalised. Finally, they win with a late goal."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Past simple throughout (scored, equalised, turning, scoring) for a completed match. Sequencing words: "first, then, after that, finally." Descriptive phrases: "against the run of play," "brilliant counter-attack," "turned it around," "never looked back." A uses present simple or continuous — wrong for describing a completed match. C uses present perfect ("has been scoring") which is wrong for completed match narration, and "after" alone is wrong.',
        },
        {
          customerLine: 'Describe a 3-3 draw where one team came from 3-0 down.',
          options: [
            '"It was an extraordinary encounter. First, the home team dominated and scored three times in the first half. Then, after the break, everything changed. After that, the away team pulled one back. Then a second. Finally, in the 94th minute, they completed the most incredible turnaround — equalising to make it 3-3. The goals came thick and fast in the second half."',
            '"The home team is winning 3-0 at half-time. Then, the away team scores three goals. After, it is 3-3."',
            '"It has been an extraordinary encounter. First, the home team has scored three times. Then, the away team has come from behind to make it 3-3."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. Past simple throughout for a completed match. Strong sequencing: "first, then, after the break, after that, finally." Great vocabulary: "extraordinary encounter," "pulled one back," "incredible turnaround," "goals came thick and fast." B uses present simple — wrong tense for a completed match. C uses present perfect — possible for recent news but not for structured highlight description. A is vivid, well-sequenced, and grammatically correct.',
        },
        {
          customerLine: 'Describe a match that ended 0-0 but was exciting.',
          options: [
            '"The match finished all square — but it was far from boring. Both goalkeepers made incredible saves. First, the home team hit the post twice in the opening 20 minutes. Then, the away team had three clear chances in the second half — but their striker missed all three. Finally, in stoppage time, a last-minute header clipped the bar. In the end, both teams had to settle for a point."',
            '"The match is finishing 0-0 but it is exciting. First, the home team hits the post. Then, the away team misses three chances. Finally, a header clips the bar."',
            '"The match has finished 0-0. First, the home team has hit the post. Then, the away team has missed three chances. It has been an exciting match."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. Past simple throughout (finished, made, hit, had, missed, clipped, settled). "All square" = draw. Great structure: "first... then... finally... in the end." B uses present simple — wrong for completed match. C uses present perfect — more appropriate for very recent news but not for structured match description. A captures the excitement of a 0-0 with vivid past simple descriptions and excellent sequencing.',
        },
        {
          customerLine: 'Describe how a substitute changed the match.',
          options: [
            '"Just as the home team was losing control, the manager made a change — bringing on a striker in the 60th minute. After that, everything changed. First, the substitute won a penalty which the captain converted. Then, she scored herself with a brilliant header. Finally, she set up the winner with a perfectly timed through ball. The turnaround was complete — and it was the substitute who made the difference."',
            '"The substitute is coming on and she is winning a penalty. Then she scores. After, she sets up the winner."',
            '"Just as the home team was losing control, the manager is making a change. After that, the substitute wins a penalty. Then, she has scored herself."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. Past simple after "just as" (the background is past continuous "was losing control," then the action switches to past simple). Sequencing: "just as, after that, first, then, finally." Good vocabulary: "converted," "brilliant header," "perfectly timed through ball," "turnaround." B uses present simple — wrong for a completed match. C mixes tenses incorrectly ("is making" and "has scored" in a completed match narration).',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes with sequencing or past tenses in this match description. Find them.',
      dialogue: [
        { speaker: 'Pundit', text: 'It was a fantastic match — a real tale of two halves. First, the home team dominated the opening 30 minutes.' },
        { speaker: 'Presenter', text: 'And then they broke the deadlock — after the home team was dominating so well, was it against the run of play?' },
        { speaker: 'Pundit', text: 'Not at all — they deserved the opener. After that, the match really opened up. Both teams started pushing forward.' },
        { speaker: 'Presenter', text: 'And the equaliser comes in the 67th minute — a brilliant strike from outside the box.' },
        { speaker: 'Pundit', text: 'Yes — and after, the away team scored again almost immediately. Two goals in three minutes was incredible.' },
        { speaker: 'Presenter', text: 'Finally, the home team pulled one back in stoppage time — but it was too little, too late.' },
      ],
      mistakes: [
        {
          lineIndex: 3,
          incorrectText: 'the equaliser comes in the 67th minute',
          correction: 'the equaliser came in the 67th minute',
          explanation: 'This is describing a completed match — past simple is required throughout. "Comes" (present simple) is correct for live commentary but wrong for post-match analysis or highlight description of a completed game. In this dialogue, the pundit and presenter are discussing a match that has already finished — everything should be past simple. "The equaliser came in the 67th minute" = correct past simple for completed match description.',
        },
        {
          lineIndex: 4,
          incorrectText: 'and after, the away team scored again',
          correction: 'and after that, the away team scored again',
          explanation: '"After" alone cannot start a clause as a sequencing word in this way. You need "after that" (= then, the next thing) or "afterwards." "After" is a preposition or conjunction — it requires an object: "after the equaliser, they scored again" or "after that, they scored again." "And after, they scored" is a common mistake but is not standard English. Always: "after that" to mean "then, the next event."',
        },
        {
          lineIndex: 1,
          incorrectText: 'after the home team was dominating so well, was it against the run of play?',
          correction: 'given that the home team had been dominating so well, was it against the run of play?',
          explanation: 'The structure "after the home team was dominating" is awkward — "was dominating" (past continuous) suggests the action was interrupted, but the sentence is asking about a completed period of play. More naturally: "given that the home team had been dominating" (past perfect continuous) or simply: "since the home team were so dominant, was it against the run of play?" The key issue: past continuous ("was dominating") is used for background actions interrupted by another event — not for a completed period of dominance.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the match highlight description — use past tenses and sequencing language correctly.",
      items: [
        {
          customerLine: 'Presenter: Give us the full story of the match in 60 seconds.',
          salespersonStart: 'Pundit: It was a fascinating encounter — a real tale of two halves.',
          suggestedCompletion: 'First, the away team dominated the first half completely — more than 65% possession and three shots on target. Then, just before half-time, they broke the deadlock with a brilliant solo goal. The home team came out fighting in the second half. After that, the match really opened up — the home team pulled one back in the 58th minute and the goals came thick and fast from there. Both teams had chances. Finally, in the 90th minute, the away team scored the winner with a penalty. It finished 2-1 — but it could have gone either way. Against the run of second-half play, the away team held on.',
        },
        {
          customerLine: 'Presenter: Describe the three goals from tonight\'s match.',
          salespersonStart: 'Pundit: The first goal was the most straightforward. She received the ball on the edge of the box, took one touch, and rifled it into the bottom corner.',
          suggestedCompletion: 'Then, the second goal — completely different in character. The goalkeeper launched it long, the striker flicked it on, and the midfielder pounced on the loose ball and slotted it home from close range. After that, there was a lengthy delay for a VAR check — but the goal stood. Finally, the third goal — and this was the best of the three. He received the ball with his back to goal, turned past two defenders, burst into the box and curled it into the far corner. The keeper had no chance. Three very different goals — but all three were deserved.',
        },
        {
          customerLine: 'Presenter: Walk us through the second-half comeback.',
          salespersonStart: 'Pundit: At half-time, they were 2-0 down — it looked very difficult. But they came out fighting.',
          suggestedCompletion: 'First, they pulled one back in the 52nd minute — a header from a corner kick. That gave them belief. After that, the match completely turned. Then, in the 68th minute, they equalised — a penalty dispatched coolly down the middle. The crowd was roaring at that point. Just as it looked like ending 2-2, they won another corner. The ball came in, the defender missed it, and she pounced — 3-2! The turnaround was complete. They never looked back after that — and in the end, they held on comfortably. Remarkable.',
        },
        {
          customerLine: 'Presenter: How would you describe a 0-0 draw that was actually a good match?',
          salespersonStart: 'Pundit: This was one of the best 0-0 draws I have seen — the highlight reel tells a very misleading story.',
          suggestedCompletion: 'First, both goalkeepers made multiple brilliant saves in the first half — there must have been eight clear chances between the two teams. Then, just before half-time, a penalty was awarded — but the striker put it against the post. After that, both teams pushed even harder for the goal. The second half was end-to-end. Finally, in the last minute, the home team had a header that clipped the bar — agonisingly close. It finished all square. In the end, both teams had to settle for a point. But this was no 0-0 to forget — it was an absolute encounter. The highlight reel simply shows saves and near misses, which tells the real story.',
        },
      ],
    },
  },
};

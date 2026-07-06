import { Lesson } from '@/types/lesson';

export const substitutions: Lesson = {
  slug: 'substitutions',
  title: 'Substitutions',
  subtitle: '"He was brought on / taken off" — passive voice and tactical change language',
  level: 'A2',
  description: 'Learn the language of substitutions — substitute, bench, fresh legs, tactical change — and practise using the passive voice to describe how players were brought on and taken off.',
  heroImage: '/images/substitutions-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Passive Voice (Past) — describing substitutions',
    description: 'Substitutions in football are often described in the passive voice. Instead of "The coach brought him on," we say "He was brought on by the coach." The passive focuses on what happened TO the player — not who did it.',
    positivePattern: 'Subject + WAS/WERE + past participle',
    positiveExample: '"He was brought on in the 65th minute."',
    negativePattern: 'Subject + WAS/WERE NOT + past participle',
    negativeExample: '"She wasn\'t selected — she stayed on the bench."',
    positiveExamples: [
      { sentence: 'The winger was taken off at half time.', note: '(passive: was + taken off)' },
      { sentence: 'Three changes were made in the second half.', note: '(passive: were + made)' },
      { sentence: 'The striker was replaced by a defender.', note: '(passive: was + replaced)' },
      { sentence: 'Fresh legs were brought on with 20 minutes left.', note: '(passive: were + brought on)' },
    ],
    negativeExamples: [
      { sentence: 'The captain wasn\'t substituted — he played the full 90.', note: '(was not + past participle)' },
      { sentence: 'No changes were made at half time.', note: '(were not = were no)' },
    ],
  },

  vocabulary: [
    {
      word: 'SUBSTITUTION',
      partOfSpeech: 'noun',
      definition: 'The act of replacing one player with another during a match.',
      example: 'The coach made his first substitution in the 60th minute — a tactical change.',
      imageSlug: '/images/substitution.png',
    },
    {
      word: 'SUBSTITUTE',
      partOfSpeech: 'noun',
      definition: 'A player who starts on the bench and may come on during the match.',
      example: 'The substitute came on and changed the game immediately — a brilliant impact.',
      imageSlug: '/images/substitutions-substitute.png',
    },
    {
      word: 'FRESH LEGS',
      partOfSpeech: 'noun',
      definition: 'A player who comes on and brings energy and pace — because they have not been running for 60+ minutes.',
      example: 'They needed fresh legs — the winger was exhausted and the team brought on a pacey substitute.',
      imageSlug: '/images/fresh-legs.png',
    },
    {
      word: 'TACTICAL CHANGE',
      partOfSpeech: 'noun',
      definition: 'A substitution made for strategic reasons — to change the shape, system, or approach.',
      example: 'It was a tactical change — the coach moved from 4-3-3 to 5-4-1 to protect the lead.',
      imageSlug: '/images/tactical-change.png',
    },
    {
      word: 'IMPACT',
      partOfSpeech: 'noun',
      definition: 'The effect a substitute has on the match — how much they change things when they come on.',
      example: 'The substitute made an immediate impact — scoring within five minutes of coming on.',
      imageSlug: '/images/substitutions-impact.png',
    },
    {
      word: 'BENCH',
      partOfSpeech: 'noun',
      definition: 'The area where substitute players and coaching staff sit during a match.',
      example: 'He spent 90 minutes on the bench — he was not happy to not get on.',
      imageSlug: '/images/substitutions-bench.png',
    },
    {
      word: 'BOARD',
      partOfSpeech: 'noun',
      definition: 'The electronic board shown by the fourth official to display the substitution numbers.',
      example: 'The board went up — number 9 was going off, number 14 was coming on.',
      imageSlug: '/images/sub-board.png',
    },
    {
      word: 'WARM UP',
      partOfSpeech: 'verb',
      definition: 'For a substitute to prepare physically on the sideline before coming on.',
      example: 'The striker warmed up along the touchline — she knew she was about to come on.',
      imageSlug: '/images/substitutions-warm-up.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BRING ON',
      definition: 'To introduce a substitute player into the match.',
      example: 'The coach brought on the striker with 25 minutes left — looking for a goal.',
      imageSlug: '/images/bring-on.png',
    },
    {
      phrase: 'TAKE OFF',
      definition: 'To remove a player from the match and replace them with a substitute.',
      example: 'She took off the tired winger and replaced him with a fresh player.',
      imageSlug: '/images/take-off.png',
    },
    {
      phrase: 'COME ON AS A SUB',
      definition: 'To enter the match as a substitute player.',
      example: 'He came on as a sub in the 70th minute and scored with his first touch.',
      imageSlug: '/images/come-on-as-a-sub.png',
    },
    {
      phrase: 'MAKE A CHANGE',
      definition: 'To carry out a substitution.',
      example: 'The coach made three changes at half time — the team looked completely different.',
      imageSlug: '/images/make-a-change.png',
    },
    {
      phrase: 'INJECT PACE',
      definition: 'To bring on a fast player to add speed to the attack — usually late in the game.',
      example: 'He brought on a winger to inject pace — the tired defenders couldn\'t live with it.',
      imageSlug: '/images/inject-pace.png',
    },
    {
      phrase: 'IMPACT OFF THE BENCH',
      definition: 'When a substitute makes a significant difference to the match after coming on.',
      example: 'She made a huge impact off the bench — two assists in 20 minutes.',
      imageSlug: '/images/impact-off-the-bench.png',
    },
  ],

  onThePitch: {
    instructions: 'These are shouts and phrases used during substitution moments — on the pitch, the bench, and the touchline.',
    items: [
      {
        cue: 'You\'re coming off!',
        meaning: 'You are being substituted — get ready to leave the pitch.',
        usage: 'Said by the coach to a player who is about to be taken off. The player needs to acknowledge it and prepare to leave. Some players are unhappy about being substituted — but the right response is to accept it professionally.',
        imageSlug: 'otp-youre-coming-off',
      },
      {
        cue: 'Get warmed up!',
        meaning: 'Start preparing — you\'re coming on soon.',
        usage: 'Shouted by a coach or assistant coach to a substitute who needs to start warming up along the touchline. The player begins running and stretching to prepare their body for the game.',
        imageSlug: 'otp-get-warmed-up',
      },
      {
        cue: 'You\'re on!',
        meaning: 'Go onto the pitch — the substitution is happening now.',
        usage: 'Said to the substitute just before they enter the pitch. The coach gives any final instructions at this moment — what position to take, who to mark, what the team needs.',
        imageSlug: 'otp-youre-on',
      },
      {
        cue: 'Make an impact!',
        meaning: 'Change the game — we need something from you.',
        usage: 'Said to a substitute as they go on — encouragement to have an immediate effect on the match. The expectation is high: bring energy, create something, score, or change the momentum.',
        imageSlug: 'otp-make-an-impact',
      },
      {
        cue: 'Fresh legs!',
        meaning: 'We are bringing on a substitute to add energy and pace.',
        usage: 'Said by commentators or fans when a fast, energetic substitute comes on late in the game. Players who have played 70+ minutes are tired — a substitute with fresh legs can change everything with their pace.',
        imageSlug: 'otp-fresh-legs',
      },
      {
        cue: 'Three more changes!',
        meaning: 'We still have substitutions available — we can make more changes.',
        usage: 'Said by the coach or bench to remind themselves and the players that there are still substitutions left to use. Modern football allows five substitutions — which means more tactical flexibility in the second half.',
        imageSlug: 'otp-three-more-changes',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Ronaldo — at half time, we\'re losing 0-1 and the winger is exhausted. What do I do?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'You [[bring:bring → brought]] on a [[substitute:a player from the bench]] with [[fresh legs:energy and pace — they haven\'t been running for 45 minutes]]. The winger is [[taken:take → taken]] off — they are replaced.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. How do we say that in the passive voice?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: '"The winger was [[taken off:removed from the match]] at half time." And "A substitute was [[brought:bring → brought]] on to inject pace."',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Exactly. We focus on what happened to the player — not who did it. Three [[substitutions:the act of replacing one player with another]] were [[made:make → made]] in the second half. What does that tell you?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The coach was unhappy — they made big changes. Maybe a [[tactical change:a substitution made for strategic reasons]] — changing the shape or system.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Correct. Now — we brought on a striker at the 70th minute. The striker scored two minutes later. How do we describe the [[impact:the effect a substitute has on the match]]?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: '"She made an immediate [[impact off the bench:when a substitute has a big effect after coming on]]!" Or: "The substitute [[came on:entered the pitch as a sub]] and changed the game."',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect. What is the [[board:the electronic board showing substitution numbers]]?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The [[board:the electronic board]] shows the numbers — the number of the player going off and the number coming on. The fourth official holds it up so everyone can see.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. In modern football — five substitutions are allowed. Used correctly, they can completely change the game. A good coach uses them to [[inject:add suddenly]] pace, protect a lead, or turn the match around.',
    },
  ],

  matchingExercise: [
    { word: 'SUBSTITUTION', definition: 'The act of replacing one player with another during a match' },
    { word: 'SUBSTITUTE', definition: 'A player who starts on the bench and may come on during the match' },
    { word: 'FRESH LEGS', definition: 'A player who brings energy and pace because they haven\'t been running all game' },
    { word: 'TACTICAL CHANGE', definition: 'A substitution made for strategic reasons — to change the shape or system' },
    { word: 'IMPACT', definition: 'The effect a substitute has on the match' },
    { word: 'BENCH', definition: 'Where substitute players and coaching staff sit during the match' },
    { word: 'BOARD', definition: 'The electronic board showing the numbers of the players being substituted' },
    { word: 'WARM UP', definition: 'For a substitute to prepare physically on the sideline before coming on' },
  ],

  fillBlankExercise: [
    { before: 'The winger was', answer: 'taken off', after: 'at half time — completely exhausted.' },
    { before: 'A pacey substitute was', answer: 'brought on', after: 'with 20 minutes left to inject pace.' },
    { before: 'Three changes were', answer: 'made', after: 'in the second half — a completely new look.' },
    { before: 'The substitute made an immediate', answer: 'impact off the bench', after: '— a goal and an assist in 15 minutes.' },
    { before: 'She', answer: 'came on as a sub', after: 'in the 65th minute and changed the whole game.' },
    { before: 'The coach wanted to', answer: 'inject pace', after: '— he brought on the fastest winger in the squad.' },
    { before: 'The board went up — number 9 was', answer: 'coming off', after: 'and number 14 was coming on.' },
    { before: 'She spent 90 minutes on the', answer: 'bench', after: '— she didn\'t get on the pitch at all.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the passive voice used for when describing substitutions?',
      options: [
        'To focus on the coach\'s decision — what the coach did',
        'To focus on what happened to the player — they were brought on or taken off',
        'To describe what the substitute did after coming on',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses the passive voice correctly?',
      options: [
        'The coach brought on the striker in the 60th minute.',
        'The striker was brought on in the 60th minute.',
        'The striker is bringing on in the 60th minute.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "fresh legs" mean?',
      options: [
        'A player who has just recovered from injury',
        'A substitute who brings energy and pace because they haven\'t played yet',
        'A player who is very young',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "tactical change"?',
      options: [
        'A substitution forced by injury',
        'A substitution made to change the team\'s shape, system, or approach',
        'Bringing on a player who is exactly the same as the one going off',
      ],
      correctIndex: 1,
    },
    {
      question: 'How many substitutions are allowed in modern professional football?',
      options: ['Three', 'Four', 'Five'],
      correctIndex: 2,
    },
    {
      question: 'What does "inject pace" mean?',
      options: [
        'To slow the game down and keep possession',
        'To bring on a fast player to add speed to the attack',
        'To speed up the substitution process',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence uses the passive negative correctly?',
      options: [
        'The captain didn\'t substituted — he played the full 90.',
        'The captain wasn\'t substituted — he played the full 90.',
        'The captain not was substituted — he played the full 90.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "make an impact" mean for a substitute?',
      options: [
        'To run very fast when you come on',
        'To change the game — score, assist, or shift the momentum',
        'To warm up properly before coming on',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the passive voice (was/were + past participle). Choose the correct form.',
    items: [
      {
        sentence: 'The winger _____ (take off) at half time — the coach wanted fresh legs.',
        options: ['was taken off', 'took off', 'is taking off'],
        correctIndex: 0,
        explanation: '"Was taken off" is correct. Passive voice: WAS + past participle (taken off). "Took off" is active past tense — it says the subject did the action. "Is taking off" is present continuous.',
      },
      {
        sentence: 'Three substitutions _____ (make) in the second half.',
        options: ['were made', 'made', 'are made'],
        correctIndex: 0,
        explanation: '"Were made" is correct. Plural subject (three substitutions) uses WERE + past participle (made). "Made" alone is active past. "Are made" is present passive.',
      },
      {
        sentence: 'A striker _____ (bring on) in the 70th minute to look for a winner.',
        options: ['brought on', 'was brought on', 'is brought on'],
        correctIndex: 1,
        explanation: '"Was brought on" is correct. Passive past: WAS + past participle (brought on). "Brought on" alone is active past — it says the subject did the bringing. "Is brought on" is present passive.',
      },
      {
        sentence: 'No changes _____ (make) — the coach kept the same team for the full 90 minutes.',
        options: ['were made', 'was made', 'made'],
        correctIndex: 0,
        explanation: '"Were made" is correct. "No changes" is plural — use WERE + past participle (made). "Was made" is singular passive. "Made" is active past.',
      },
      {
        sentence: 'She _____ (not / select) — she spent the whole match on the bench.',
        options: ['wasn\'t selected', 'didn\'t select', 'weren\'t selected'],
        correctIndex: 0,
        explanation: '"Wasn\'t selected" is correct. Negative passive past with singular subject: WAS NOT + past participle. "Didn\'t select" is active negative — it changes the meaning. "Weren\'t" is plural.',
      },
      {
        sentence: 'The defender _____ (replace) by an attacker in a bold tactical move.',
        options: ['replaced', 'were replaced', 'was replaced'],
        correctIndex: 2,
        explanation: '"Was replaced" is correct. Singular subject (the defender) uses WAS + past participle (replaced). "Replaced" is active past. "Were replaced" is plural passive.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Your team is in this situation. Choose the best substitution decision — A, B, or C.',
      items: [
        {
          customerLine: 'Your team is winning 1-0 with 20 minutes left. The lead striker is running on empty.',
          options: [
            'Keep the striker on — they scored the goal and deserve to finish the match.',
            'Take the striker off and bring on a defensive midfielder to protect the lead.',
            'Bring on another attacker to look for a second goal.',
          ],
          correctIndex: 1,
          explanation: 'B is correct — though C is also defensible. With 20 minutes left and a 1-0 lead, protecting the result is the priority. Bringing on a defensive midfielder adds security. A tired striker (A) can be a liability defensively. Another attacker (C) is risky if you concede on the counter.',
        },
        {
          customerLine: 'Your team is losing 0-1 with 15 minutes left. Your fastest winger is on the bench.',
          options: [
            'Keep the same team — making changes this late never works.',
            'Bring on the fast winger to inject pace and create chances.',
            'Bring on a goalkeeper — you have a backup available.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. With 15 minutes left and losing, the team needs pace and energy to create chances. The fast winger — with fresh legs — can run at tired defenders. Making no changes (A) means accepting defeat. Bringing on a goalkeeper (C) makes no sense when you need to score.',
        },
        {
          customerLine: 'A substitute came on and has barely touched the ball in 10 minutes. The coach is frustrated.',
          options: [
            'Give the substitute more time — they just need to settle into the game.',
            'Substitute the substitute — make another change to try something different.',
            'Move the substitute to a different position on the pitch.',
          ],
          correctIndex: 2,
          explanation: 'C is correct — though A is also reasonable. Moving the substitute to a different position might unlock more involvement. Substituting a substitute (B) wastes a substitution. Giving more time (A) is valid if the player is making runs but not getting the ball. The best short-term fix is a positional change.',
        },
        {
          customerLine: 'The board goes up — number 10 is being taken off. Number 10 is the team\'s best player and is angry.',
          options: [
            'Number 10 should argue with the referee about the decision.',
            'Number 10 should sprint off the pitch quickly, shake hands with the coach, and support their teammates.',
            'Number 10 should refuse to leave — the coach made a mistake.',
          ],
          correctIndex: 1,
          explanation: 'B is correct. A professional player accepts substitution decisions — even when they disagree. Leaving quickly shows respect for the team. The bench supports the players still on the pitch. Arguing (A) or refusing (C) is unprofessional, could earn a red card, and harms team morale.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this substitution report. Find them as a group.',
      dialogue: [
        { speaker: 'Commentator', text: 'Three changes were made at half time — the coach was clearly unhappy.' },
        { speaker: 'Commentator', text: 'The tired winger was took off and replaced by a faster option.' },
        { speaker: 'Commentator', text: 'A defensive midfielder were brought on to protect the lead.' },
        { speaker: 'Commentator', text: 'The substitute came on and make an immediate impact — a goal in five minutes.' },
        { speaker: 'Commentator', text: 'The board went up showing the number — it was a tactical change.' },
        { speaker: 'Commentator', text: 'Two more substitutions was made in the final 15 minutes.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'The tired winger was took off',
          correction: 'The tired winger was taken off',
          explanation: 'Passive voice uses WAS + past participle. The past participle of "take off" is "taken off" — not "took off." "Took" is the simple past active form. The correct passive is "was taken off."',
        },
        {
          lineIndex: 2,
          incorrectText: 'A defensive midfielder were brought on',
          correction: 'A defensive midfielder was brought on',
          explanation: '"A defensive midfielder" is singular — so we use WAS (not WERE) in the passive. "Were" is used for plural subjects. The correct form is "A defensive midfielder was brought on."',
        },
        {
          lineIndex: 3,
          incorrectText: 'the substitute came on and make an immediate impact',
          correction: 'the substitute came on and made an immediate impact',
          explanation: 'Both verbs in this sentence describe past events — "came on" (past) and "made" (past). "Make" is the base form and is incorrect after "and" in a past tense sentence. The correct form is "made."',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the second line using substitution vocabulary and passive voice from this lesson.',
      items: [
        {
          customerLine: 'Ronaldo: Why do coaches sometimes leave their best substitutes until very late in the match?',
          salespersonStart: 'Coach Diallo: Because tired defenders are most vulnerable in the final 10 minutes.',
          suggestedCompletion: 'A substitute with fresh legs coming on in the 80th minute faces defenders who have run for the whole match. Their legs are heavy, their concentration is dropping. A fast, energetic player can cause huge problems at that stage. The best impact players are often brought on when the game is at its most open — when there is space and the defending team is at their weakest.',
        },
        {
          customerLine: 'Sofia: What is the hardest part of being a substitute?',
          salespersonStart: 'Coach Diallo: Being ready — physically and mentally — when you don\'t know if you\'ll come on.',
          suggestedCompletion: 'A substitute must stay warm and focused for 90 minutes even though they might not play. When the board goes up with your number, you have seconds to receive your instructions and enter the pitch at full intensity. Mentally, it is hard to go from sitting on the bench to playing in a high-pressure game. The best substitutes are always mentally ready — they\'re not watching the match, they\'re preparing for it.',
        },
        {
          customerLine: 'Sofia: What does it mean when a commentator says "the coach made a bold substitution"?',
          salespersonStart: 'Coach Diallo: It means the decision was surprising and took a risk.',
          suggestedCompletion: 'A bold substitution might mean taking off a key player early, bringing on an attacking player when you\'re already losing, or changing the entire system at half time. It is "bold" because it is unexpected and could easily go wrong. If it works — the coach is a genius. If it fails — they face heavy criticism. That is the pressure of being a manager.',
        },
        {
          customerLine: 'Ronaldo: Can the same player come back on after being substituted off?',
          salespersonStart: 'Coach Diallo: No — once a player is taken off, they cannot return to the pitch.',
          suggestedCompletion: 'This is an important rule. Once a player was substituted off, they are done for that match. They must go to the bench or the dressing room. The only exception is in some youth football competitions where rolling substitutions are allowed. In professional football, once you are taken off, the match is over for you — which is why players are always disappointed when they are substituted.',
        },
      ],
    },
  },
};

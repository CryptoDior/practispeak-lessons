import { Lesson } from '@/types/lesson';

export const watchingOnTv: Lesson = {
  slug: 'watching-on-tv',
  title: 'Watching on TV',
  subtitle: 'Commentary phrases, pundit opinions, and half-time show language',
  level: 'A2',
  description: 'Learn the language of football on television — what commentators say during the match, what pundits say at half-time, and how to understand and use the vocabulary of TV football coverage.',
  heroImage: '/images/watching-on-tv-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Reported speech — saying what someone else said',
    description: 'When we talk about what a pundit or commentator said, we often use reported speech. The verb tense usually goes back one step: say → said, is → was, has → had. We introduce reported speech with "said that" or "thought that".',
    positivePattern: 'Subject + said (that) + past tense clause',
    positiveExample: '"The pundit said that the goalkeeper had made a terrible mistake."',
    negativePattern: 'Subject + said (that) + subject + did not / was not + verb',
    negativeExample: '"He said that the manager did not make the right substitution."',
    positiveExamples: [
      { sentence: 'The commentator said it was one of the best goals he had ever seen.', note: '(said + past tense: was, had seen)' },
      { sentence: 'The pundit thought the referee was wrong to give a red card.', note: '(thought + past: was wrong)' },
      { sentence: 'She said the team played well in the first half but lost focus after the break.', note: '(said + past: played, lost)' },
      { sentence: 'He said that the result was unfair on the team that had more chances.', note: '(said that + past clause)' },
    ],
    negativeExamples: [
      { sentence: 'The pundit said the striker was not clinical enough — too many missed chances.', note: '(said + past: was not)' },
      { sentence: 'He said he did not agree with the manager\'s decision to sit deep.', note: '(said + past: did not agree)' },
    ],
  },

  vocabulary: [
    {
      word: 'COMMENTATOR',
      partOfSpeech: 'noun',
      definition: 'The person who describes the match live on TV or radio — calling the action as it happens.',
      example: 'The commentator shouted "GOAL!" so loudly that everyone in the living room heard it from outside.',
      imageSlug: '/images/commentator.png',
    },
    {
      word: 'PUNDIT',
      partOfSpeech: 'noun',
      definition: 'A football expert — usually a former player or coach — who gives analysis and opinions on TV.',
      example: 'The pundit said the team\'s defensive shape in the second half was the reason they lost.',
      imageSlug: '/images/pundit.png',
    },
    {
      word: 'REPLAY',
      partOfSpeech: 'noun',
      definition: 'A recording of a moment in the match shown again on TV — often from different angles.',
      example: 'Looking at the replay, it was clear the ball crossed the line — the referee should have given the goal.',
      imageSlug: '/images/replay.png',
    },
    {
      word: 'PUNDITRY',
      partOfSpeech: 'noun',
      definition: 'The analysis and opinion given by football experts on TV — the process of being a pundit.',
      example: 'Good punditry explains the "why" behind events — not just what happened, but why it happened.',
      imageSlug: '/images/punditry.png',
    },
    {
      word: 'ANALYSIS',
      partOfSpeech: 'noun',
      definition: 'A detailed study or explanation of something — breaking it down to understand it better.',
      example: 'The half-time analysis showed clearly why the team was struggling to create chances.',
      imageSlug: '/images/analysis.png',
    },
    {
      word: 'STUDIO',
      partOfSpeech: 'noun',
      definition: 'The TV broadcasting location where pundits and presenters sit — not at the stadium.',
      example: 'The two pundits were in the studio debating whether the red card was justified.',
      imageSlug: '/images/studio.png',
    },
    {
      word: 'CONTROVERSIAL',
      partOfSpeech: 'adjective',
      definition: 'Something that causes disagreement and debate — when people have strong opposite opinions about it.',
      example: 'The penalty decision was controversial — one pundit said it was clear, the other said it was never a foul.',
      imageSlug: '/images/controversial.png',
    },
    {
      word: 'VERDICT',
      partOfSpeech: 'noun',
      definition: 'A final decision or judgement — what someone decides after considering the evidence.',
      example: 'After watching the replay three times, the pundit gave his verdict: it was a penalty.',
      imageSlug: '/images/verdict.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'KICK OFF [TIME]',
      definition: 'The time the match starts — when the first kick of the game is made.',
      example: 'Coverage starts at 7pm and kick-off is at 7:45 — 45 minutes of build-up before the match.',
      imageSlug: '/images/kick-off-time.png',
    },
    {
      phrase: 'TAKE A LOOK AT',
      definition: 'To examine or review something — often used by pundits introducing a replay.',
      example: '"Let\'s take a look at that goal again — from this angle you can see how clever the movement was."',
      imageSlug: '/images/take-a-look-at.png',
    },
    {
      phrase: 'PICK HOLES IN',
      definition: 'To find and criticise weaknesses in something — what pundits often do with team performances.',
      example: 'The pundit picked holes in the defensive organisation — he said the team was too open.',
      imageSlug: '/images/pick-holes-in.png',
    },
    {
      phrase: 'BACK THE TEAM',
      definition: 'To support and agree with the team or manager — give your confidence to them.',
      example: 'Despite the poor result, the pundit backed the manager — he said the performance deserved better.',
      imageSlug: '/images/back-the-team.png',
    },
    {
      phrase: 'COME UNDER PRESSURE',
      definition: 'To be in a difficult situation where criticism or challenge is increasing.',
      example: 'The manager is coming under pressure — three defeats in a row and the owner is not happy.',
      imageSlug: '/images/come-under-pressure.png',
    },
    {
      phrase: 'LAY THE BLAME ON',
      definition: 'To say someone or something is responsible for a bad result.',
      example: 'The pundit laid the blame on the goalkeeper — he said the mistake directly cost them the match.',
      imageSlug: '/images/lay-the-blame-on.png',
    },
  ],

  onThePitch: {
    instructions: 'These are classic phrases from football commentators and pundits that you will hear on TV.',
    items: [
      {
        cue: 'What a hit!',
        meaning: 'That was a powerful, impressive shot.',
        usage: 'Said by commentators immediately after a player hits a powerful shot — whether it goes in or not. "Hit" = shot with power. "What a hit!" is an exclamation of surprise and admiration. Often used for long-range shots or particularly powerful strikes.',
        imageSlug: 'otp-what-a-hit',
      },
      {
        cue: "He'll be disappointed with that.",
        meaning: 'The player will be unhappy with their own mistake or poor performance.',
        usage: 'A classic pundit phrase — polite criticism of a player\'s mistake. "He\'ll be disappointed" is softer than "that was terrible." Pundits use it after a missed chance, a bad pass, or an error. It shows empathy while still pointing out the mistake.',
        imageSlug: 'otp-hell-be-disappointed-with-that',
      },
      {
        cue: 'For me, it\'s a clear penalty.',
        meaning: 'In my opinion, the referee should have given a penalty.',
        usage: '"For me" = in my opinion. Pundits use "for me" to introduce a personal verdict. "It\'s a clear penalty" = it is obviously a penalty, no doubt. One pundit often says "for me it\'s a penalty," and another says "for me it\'s nothing" — creating TV debate.',
        imageSlug: 'otp-for-me-its-a-clear-penalty',
      },
      {
        cue: "That's a worldie!",
        meaning: 'That was a world-class goal — an extraordinary, exceptional goal.',
        usage: '"Worldie" is informal British slang for a world-class goal — a spectacular, brilliant strike. Used by commentators and fans after an exceptional goal. It is enthusiastic and emotional — not used for simple tap-ins.',
        imageSlug: 'otp-thats-a-worldie',
      },
      {
        cue: 'And we\'re back underway!',
        meaning: 'The second half has started — the match is playing again after half-time.',
        usage: 'Said by commentators at the start of the second half. "Underway" = in progress / happening. "Back underway" = started again after a break. A standard commentary phrase to signal the resumption of play.',
        imageSlug: 'otp-and-were-back-underway',
      },
      {
        cue: 'I\'m not sure about the formation.',
        meaning: 'I have doubts or concerns about the tactical system the manager is using.',
        usage: 'A pundit\'s way of questioning the manager\'s tactical decision without being too harsh. "I\'m not sure about" = I have concerns/doubts. This phrase allows the pundit to criticise without saying directly "the formation is wrong."',
        imageSlug: 'otp-im-not-sure-about-the-formation',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Did you watch the match on TV last night? What did the pundits say at half-time?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Yes — there were two [[pundits:football experts who give analysis and opinions on TV]] in the [[studio:the TV broadcasting location where pundits and presenters sit]]. One said the team had played well but was not [[clinical:precise and efficient in front of goal]].',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'The other pundit [[picked holes in:found and criticised weaknesses in]] the defensive shape. He said the team was giving too much space in behind.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'And the [[commentator:the person who describes the match live on TV]]? What did he say during the match?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'He said the penalty decision was [[controversial:causing disagreement — people have strong opposite opinions]] — one pundit said it was clear, the other said it was nothing.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'They showed the [[replay:a recording of the moment shown again from different angles]] three times. After watching it back, the pundit gave his [[verdict:a final decision or judgement]] — he said it was a penalty.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'And the result? What happened in the second half?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'They won 2-1. The second goal was incredible — the commentator said it was a "worldie." He said he had never seen a better free kick all season. The [[analysis:a detailed study or explanation]] after the match said the second half was much better than the first.',
    },
  ],

  matchingExercise: [
    { word: 'COMMENTATOR', definition: 'The person who describes the match live on TV' },
    { word: 'PUNDIT', definition: 'A football expert who gives analysis and opinions on TV' },
    { word: 'REPLAY', definition: 'A recording of a moment shown again — often from different angles' },
    { word: 'ANALYSIS', definition: 'A detailed study or explanation — breaking it down to understand it better' },
    { word: 'STUDIO', definition: 'The TV broadcasting location where pundits and presenters sit' },
    { word: 'CONTROVERSIAL', definition: 'Causing disagreement — people have strong opposite opinions' },
    { word: 'VERDICT', definition: 'A final decision or judgement after considering the evidence' },
    { word: 'PUNDITRY', definition: 'The analysis and opinion given by football experts on TV' },
  ],

  fillBlankExercise: [
    { before: 'The pundit said that the goalkeeper', answer: 'had made', after: 'a terrible mistake in the second half.' },
    { before: 'The commentator said it', answer: 'was', after: 'the best goal he had ever seen in 20 years.' },
    { before: 'She said the manager', answer: 'did not make', after: 'the right substitution at the right time.' },
    { before: 'He said the penalty decision', answer: 'was', after: 'controversial — one pundit said yes, one said no.' },
    { before: 'The pundits said the team', answer: 'had played', after: 'well but was unlucky not to score in the first half.' },
    { before: 'He', answer: 'said that', after: 'the result was unfair on the team that created more chances.' },
    { before: 'The analyst said the defensive shape', answer: 'was not', after: 'good enough — too much space between the lines.' },
    { before: 'After the replay, the pundit gave his', answer: 'verdict', after: ': it was never a foul.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'A pundit says: "For me, it\'s a clear penalty." What does "for me" mean?',
      options: [
        'The penalty was given in favour of me',
        'In my opinion',
        'The penalty benefited my team',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which reported speech sentence is correct?',
      options: [
        'He said the team plays well.',
        'He said the team played well.',
        'He said the team is playing well.',
      ],
      correctIndex: 1,
    },
    {
      question: '"That\'s a worldie!" What does this mean?',
      options: [
        'A goal scored by a world-famous player',
        'An extraordinary, world-class goal',
        'A goal that went around the world on social media',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is the difference between a commentator and a pundit?',
      options: [
        'A commentator works in the studio; a pundit describes the live action',
        'A commentator describes the live action; a pundit gives analysis and opinions',
        'They are the same — both describe what is happening on the pitch',
      ],
      correctIndex: 1,
    },
    {
      question: '"He\'ll be disappointed with that." What is the pundit describing?',
      options: [
        'A goal the player scored that was offside',
        'A mistake or missed chance that the player will be unhappy about',
        'A substitution the player was unhappy to receive',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which reported speech sentence uses the correct tense change?',
      options: [
        'She said the goalkeeper "is making a mistake".',
        'She said the goalkeeper was making a mistake.',
        'She said the goalkeeper makes a mistake.',
      ],
      correctIndex: 1,
    },
    {
      question: 'What does "pick holes in" mean when a pundit uses it?',
      options: [
        'To praise the positive aspects of a performance',
        'To find and criticise weaknesses in a performance',
        'To dig deep into historical match data',
      ],
      correctIndex: 1,
    },
    {
      question: '"And we\'re back underway!" When do commentators say this?',
      options: [
        'After the referee blows the final whistle',
        'At the start of the second half — when the match restarts after half-time',
        'After a substitution is made',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using reported speech correctly.',
    items: [
      {
        sentence: 'The pundit said the team _____ too many chances in the first half.',
        options: ['misses', 'missed', 'is missing'],
        correctIndex: 1,
        explanation: '"Missed" is correct. Reported speech: "said" (past) → main verb goes back one step → present simple "misses" becomes past simple "missed." Rule: after "said," the present tense verbs change to past tense. "Misses" (present) → "missed" (past). "Is missing" (present continuous) → "was missing."',
      },
      {
        sentence: 'She said she _____ agree with the manager\'s decision to use a 5-4-1 formation.',
        options: ['did not', 'does not', 'is not'],
        correctIndex: 0,
        explanation: '"Did not" is correct. Reported speech changes "does not" (present) to "did not" (past). She said this in the past, so the verb shifts back: "I do not agree" → she said she did not agree. "Does not" would only be correct in direct speech or present reporting.',
      },
      {
        sentence: 'The commentator said it _____ the best goal he had ever seen.',
        options: ['is', 'was', 'has been'],
        correctIndex: 1,
        explanation: '"Was" is correct. In reported speech, present simple "is" changes to past simple "was." He said: "It is the best goal I have ever seen." Reported: he said it was the best goal he had ever seen. Both verbs shift back: is → was, have seen → had seen.',
      },
      {
        sentence: 'He said that the manager _____ the right substitution at the right moment.',
        options: ['did not make', 'does not make', 'was not making'],
        correctIndex: 0,
        explanation: '"Did not make" is correct. Reported speech: "does not make" (present negative) → "did not make" (past negative). "Said" signals we are in reported speech and the tense shifts back. "Was not making" would be correct if the original was "is not making" (continuous).',
      },
      {
        sentence: 'The pundit said the penalty decision _____ very controversial.',
        options: ['is', 'was', 'has been'],
        correctIndex: 1,
        explanation: '"Was" is correct. The pundit said this in the past (we are reporting what they said). Present "is" shifts to past "was" in reported speech. The controversy was described at the moment they spoke — it was controversial then, so "was" is the right reported form.',
      },
      {
        sentence: 'After watching the replay, the pundit gave his _____ — he said it was never a penalty.',
        options: ['verdict', 'opinion', 'analysis'],
        correctIndex: 0,
        explanation: '"Verdict" is correct. A "verdict" is a final decision or judgement — specifically after reviewing evidence (the replay). "Opinion" is less formal and does not suggest the same finality. "Analysis" is a broader process of examination — not a final judgement. After watching the replay = reviewing evidence → giving a verdict.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Read what the pundit said and respond using reported speech.',
      items: [
        {
          customerLine: 'Pundit (live): "For me, the goalkeeper had no chance — the shot was unstoppable." Report what he said.',
          options: [
            '"He said the goalkeeper has no chance and the shot is unstoppable."',
            '"He said the goalkeeper had no chance and the shot was unstoppable."',
            '"He says the goalkeeper had no chance and the shot was unstoppable."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Reported speech shifts the tense back: "has" (present) → "had" (past), "is" (present) → "was" (past). We use "said" (past) to introduce reported speech — not "says" (present). Option A uses present tense in the reported clause — wrong. Option C uses "says" which is for general/ongoing reporting, not a specific past statement.',
        },
        {
          customerLine: 'Pundit (live): "I don\'t think the manager made the right substitution." Report what she said.',
          options: [
            '"She said she does not think the manager makes the right substitution."',
            '"She said she did not think the manager had made the right substitution."',
            '"She said she did not think the manager makes the right substitution."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Two tense shifts: "don\'t think" → "did not think" and "made" → "had made" (past perfect, as it happened before the pundit spoke). Reported speech moves everything back one step.',
        },
        {
          customerLine: 'The commentator says: "That is one of the best goals I have ever seen!" How do you report this?',
          options: [
            '"He said that is one of the best goals he has ever seen."',
            '"He said that was one of the best goals he had ever seen."',
            '"He said that it is one of the best goals he ever saw."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "That is" → "that was." "I have ever seen" → "he had ever seen." Two shifts: present → past, and present perfect → past perfect. Also note the pronoun change: "I" → "he." Reported speech always shifts pronouns to match the new perspective.',
        },
        {
          customerLine: 'Your friend missed the match. They ask: "What did the pundits say at half-time?" What is the best answer?',
          options: [
            '"The pundits say the team play well but miss too many chances."',
            '"The pundits said the team had played well but missed too many chances in the first half. One pundit thought the manager needed to change the formation, but the other backed the current system."',
            '"The pundits said many things — I cannot remember exactly."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses reported speech correctly (said, had played, missed, thought, backed) and gives a complete, informative answer. Option A uses present tense throughout — wrong for reporting past statements. Option C avoids the grammar challenge entirely.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three reported speech mistakes in this conversation. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'Did you watch the match? The pundit said the goalkeeper makes a huge mistake.' },
        { speaker: 'Ronaldo', text: 'Yes — and the commentator said it was the best save he had ever seen. Wait, no — it was a mistake, not a save.' },
        { speaker: 'Sofia', text: 'Exactly — he said the goalkeeper is not ready for this level. Really harsh.' },
        { speaker: 'Ronaldo', text: 'One pundit backed the goalkeeper but the other said he did not have enough experience.' },
        { speaker: 'Sofia', text: 'After the replay, the analyst gives his verdict — he said it was a clear error.' },
        { speaker: 'Ronaldo', text: 'The commentator also said the penalty decision was very controversial — one pundit agreed but the other did not.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'the pundit said the goalkeeper makes a huge mistake',
          correction: 'the pundit said the goalkeeper made a huge mistake',
          explanation: 'Reported speech: "makes" (present simple) should shift to "made" (past simple) after "said." Rule: when the reporting verb is past tense ("said"), the verb in the reported clause shifts back one tense. Present simple → past simple.',
        },
        {
          lineIndex: 2,
          incorrectText: 'he said the goalkeeper is not ready',
          correction: 'he said the goalkeeper was not ready',
          explanation: 'Reported speech: "is not" (present simple) should shift to "was not" (past simple). The pundit said this in the past → "said" triggers the tense shift → "is" becomes "was."',
        },
        {
          lineIndex: 4,
          incorrectText: 'the analyst gives his verdict',
          correction: 'the analyst gave his verdict',
          explanation: '"Gives" is present simple — but we are describing something that happened in the past (after the replay, during the programme). Use past simple "gave" — the analyst gave his verdict at a specific point in the past.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Report what the pundit said, and add your own opinion.',
      items: [
        {
          customerLine: 'Pundit (live): "I think the team needs a world-class striker — they are not clinical enough." Report this and add your opinion.',
          salespersonStart: 'The pundit said the team needed a world-class striker and was not clinical enough.',
          suggestedCompletion: 'He thought the current strikers were not converting enough of their chances — he said the conversion rate was too low. I think he had a point. The team created 15 chances in the last three matches but scored only two goals. A clinical striker who converts one in three chances would have scored five. The pundit said the manager needed to address this in the transfer window — and I agreed with his verdict.',
        },
        {
          customerLine: 'Commentator (live): "What a goal! That is one of the best free kicks I have ever seen!" Report this and describe the goal.',
          salespersonStart: 'The commentator said it was one of the best free kicks he had ever seen.',
          suggestedCompletion: 'He said the technique was perfect — the ball curved around the wall and into the top corner. He said the goalkeeper had no chance even though he dived the right way. The strike was from 25 metres and the ball was in the net before anyone reacted. The commentator said it reminded him of a goal scored in the 1998 World Cup — the same technique, the same top corner. He said the player had scored some great free kicks before but nothing like that one.',
        },
        {
          customerLine: 'Pundit (half-time): "For me, the manager got the formation completely wrong tonight." Report and analyse.',
          salespersonStart: 'The pundit said the manager had got the formation completely wrong.',
          suggestedCompletion: 'She said the 4-3-3 left too much space in midfield against a team that played with two attacking midfielders. She thought the manager should have used a 4-5-1 to protect the centre and stay compact. She said the wingers were isolated because they did not have enough support from the midfield. Her verdict was that the manager needed to change the shape in the second half — and he did. He switched to 4-4-2 after 55 minutes and the team immediately looked more solid. She later said the change had made a big difference — and I thought she was right from the first minute of the second half.',
        },
        {
          customerLine: 'After the match: "What did the pundits say?" Give a complete reported speech summary.',
          salespersonStart: 'At half-time, the pundits said the first half had been very competitive — neither team was dominating.',
          suggestedCompletion: 'One pundit thought the home team had slightly the better of the first 45 minutes — he said they had created more chances and looked more dangerous going forward. But the other pundit disagreed — she said the away team was more organised defensively and was waiting for the right moment to strike. After the match, the first pundit said the result was fair — both teams had played well. The second pundit said she thought the away team deserved a point for their defensive performance. The analyst said the data showed both teams had created almost identical numbers of chances — which he said explained why the match ended 0-0.',
        },
      ],
    },
  },
};

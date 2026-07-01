import { Lesson } from '@/types/lesson';

export const talkingToYourManager: Lesson = {
  slug: 'talking-to-your-manager',
  title: 'Talking to Your Manager',
  subtitle: 'Selection conversations, feedback, and how to disagree professionally',
  level: 'B1-B2',
  description: 'The relationship between a footballer and their manager is one of the most important — and most complex — professional relationships in sport. This lesson teaches you the language of feedback conversations, selection disputes, and how to express disagreement respectfully while maintaining professionalism.',
  heroImage: '/images/talking-to-manager-hero.png',

  warmUp: {
    questions: [
      'Have you ever had a conversation with a boss or teacher where you disagreed but had to stay professional? How did you handle it?',
      'If you were a footballer who had been dropped from the starting line-up, how would you approach the manager to talk about it?',
      'Do you think football players should speak publicly about disagreements with their manager, or should it always stay private? Why?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Focus: Softening language and professional disagreement — how to push back without causing conflict',
    description: 'Disagreeing with authority — a manager, a coach, a boss — requires careful language choices. In English, we use softening strategies: hedging, questions instead of statements, "I feel that..." rather than "You are wrong," and acknowledging the other person\'s position before presenting your own. This keeps the relationship professional even when there is genuine disagreement.',
    positivePattern: 'HEDGING: "I feel that...", "I was wondering if...", "With respect,...", "I understand your position, but..." QUESTIONS INSTEAD OF STATEMENTS: "Could I ask what I need to do to get back in the team?" (not "Tell me why I\'m not playing") ACKNOWLEDGING FIRST: "I appreciate your feedback — I just wanted to share my perspective on..." CONDITIONAL SOFTENING: "Would it be possible to discuss my role?" "I would appreciate the chance to show what I can do."',
    positiveExample: '"With respect, boss, I feel I\'ve been playing well in training. I understand the team is performing — I just wondered if you could give me some specific feedback on what I need to improve to get back in the starting XI."',
    negativePattern: 'AVOID: direct contradiction ("That\'s wrong"), demands ("You have to play me"), blame language ("You never give me a chance"). These damage the professional relationship and rarely achieve the goal.',
    negativeExample: 'WRONG: "That\'s not fair. I play better than him. You should play me." → RIGHT: "I respect your decision, but I\'d really appreciate feedback on what I need to improve. I feel I\'ve been working hard to earn my place back." WRONG: "Tell me why I\'m not in the team." → RIGHT: "Could I ask you for some feedback on my recent performances?"',
    positiveExamples: [
      { sentence: '"I understand your position — I just wanted to raise something I\'ve been thinking about."', note: '("Understand your position" acknowledges the manager\'s view before the player raises their own)' },
      { sentence: '"Would it be possible to have a conversation about my role going forward?"', note: '(Question form + "would it be possible" = very polite request, much softer than a demand)' },
      { sentence: '"With respect, I feel that I\'ve been delivering in training — I just wondered what more I could do."', note: '("With respect" signals polite disagreement; "I feel" is subjective, less confrontational than "I am")' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "You never give me a fair chance. I deserve to play."', note: 'CORRECT: "I\'d appreciate the opportunity to discuss what I can do to earn more time."' },
      { sentence: 'WRONG: "He\'s not better than me — you\'re wrong to pick him."', note: 'CORRECT: "I respect the decision — but I\'d love to understand what I need to do to be back in contention."' },
    ],
  },

  vocabulary: [
    {
      word: 'CONSTRUCTIVE CRITICISM',
      partOfSpeech: 'phrase',
      definition: 'Feedback that identifies what is wrong but also suggests how to improve — useful, specific, and forward-looking.',
      example: '"The best managers give constructive criticism — not just \'that wasn\'t good enough\' but \'this is what you need to work on and here\'s how\'."',
      imageSlug: '/images/constructive-criticism.png',
    },
    {
      word: 'ROTATION',
      partOfSpeech: 'noun',
      definition: 'The practice of regularly changing the line-up — resting certain players and giving others opportunities throughout a long season.',
      example: '"Don\'t take it personally — it\'s just rotation. You\'ll be back in the starting XI for the weekend\'s game."',
      imageSlug: '/images/rotation.png',
    },
    {
      word: 'FEEDBACK',
      partOfSpeech: 'noun',
      definition: 'Information about a person\'s performance — what they did well and what they need to improve.',
      example: '"She always asks for feedback after a game — even when she played well, she wants to know what she can do better."',
      imageSlug: '/images/feedback.png',
    },
    {
      word: 'SELECTION',
      partOfSpeech: 'noun',
      definition: 'The manager\'s decision about which players will play in a match — who is in the starting line-up and who is on the bench.',
      example: '"She was disappointed by the selection — she had expected to start, but her name was not in the team."',
      imageSlug: '/images/selection.png',
    },
    {
      word: 'COME ON AS A SUBSTITUTE',
      partOfSpeech: 'phrase',
      definition: 'To enter the game from the bench — replacing another player during the match.',
      example: '"He was frustrated at coming on as a substitute in the 80th minute — he wanted to start and make an impact from the beginning."',
      imageSlug: '/images/come-on-substitute.png',
    },
    {
      word: 'HONEST CONVERSATION',
      partOfSpeech: 'phrase',
      definition: 'A direct and open discussion where both sides share their real thoughts — not just what is polite or expected.',
      example: '"The manager asked for an honest conversation — and the player told him he was unhappy with his role in the team."',
      imageSlug: '/images/honest-conversation.png',
    },
    {
      word: 'GAME TIME',
      partOfSpeech: 'phrase',
      definition: 'Minutes played on the pitch — the amount of time a player actually gets to play in matches.',
      example: '"He needs game time — he hasn\'t played a full 90 minutes in six weeks and his form has suffered."',
      imageSlug: '/images/game-time.png',
    },
    {
      word: 'DROPPED',
      partOfSpeech: 'verb (past participle)',
      definition: 'To be left out of the team by the manager — removed from the starting line-up.',
      example: '"She was dropped for the first time in two years — the manager said it was a rotation decision, but she was not convinced."',
      imageSlug: '/images/dropped.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BRING BACK IN',
      definition: 'To restore a player to the starting line-up after they had been left out.',
      example: '"He was dropped for three games, then brought back in for the cup tie — and he scored twice."',
      imageSlug: '/images/bring-back-in.png',
    },
    {
      phrase: 'SEE OUT',
      definition: 'To finish a match or a period without losing the lead — to manage the game to the final whistle.',
      example: '"He came on as a substitute to help see out the game — using his experience to keep possession and manage the clock."',
      imageSlug: '/images/see-out.png',
    },
    {
      phrase: 'CLEAR THE AIR',
      definition: 'To have an open conversation that resolves tension or misunderstanding between people.',
      example: '"After weeks of tension, the player and manager sat down to clear the air — they both said what they were thinking and left the meeting on better terms."',
      imageSlug: '/images/clear-the-air.png',
    },
    {
      phrase: 'SPEAK YOUR MIND',
      definition: 'To express your real opinion directly — without hiding what you think.',
      example: '"The manager encouraged her to speak her mind — he wanted to know how she really felt about her role in the team."',
      imageSlug: '/images/speak-your-mind.png',
    },
    {
      phrase: 'RAISE A CONCERN',
      definition: 'To formally bring up a problem or worry — to express something that is bothering you in a professional way.',
      example: '"She raised a concern about her lack of game time in a private meeting with the manager — keeping it professional and off the record."',
      imageSlug: '/images/raise-concern.png',
    },
    {
      phrase: 'WORK YOUR WAY BACK',
      definition: 'To earn back a starting place or status through hard work and good performance.',
      example: '"He worked his way back into the team after three months on the bench — the manager rewarded his attitude in training."',
      imageSlug: '/images/work-way-back.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key concepts and conversations that happen between players and managers at a professional level.',
    items: [
      {
        cue: 'The selection conversation — how to ask why you were dropped',
        meaning: 'Asking a manager why you were left out is one of the most delicate conversations in professional football.',
        usage: 'The professional approach: request a private meeting, listen first, then ask specific questions. "Manager, I just wanted to ask for some feedback on my recent performances. I understand the selection decision — I just wanted to know what I can do to earn my place back." The key: no blame, no emotion, no comparison with other players. "Why is he playing instead of me?" → a damaging question. "What do I need to do to get back in the team?" → a professional question. The answer gives the player a clear target. Managers appreciate players who respond to being dropped with professional questions rather than emotional outbursts.',
        imageSlug: 'otp-selection-conversation',
      },
      {
        cue: 'Receiving feedback — how to respond professionally',
        meaning: 'How a player responds to critical feedback — both in the moment and in their behaviour afterwards — defines their professional reputation.',
        usage: '"Thank you for being honest with me. Can I ask — is there a specific area you\'d like me to focus on?" This response: acknowledges the feedback, thanks the manager for their honesty, and asks for a specific actionable improvement. The wrong response: "That\'s not fair — I thought I played well." This shuts down the conversation and makes the manager less likely to give honest feedback in the future. The professional player takes feedback privately, processes the emotion, then acts on the information. "She took the feedback hard — but by the next training session, she was working specifically on what the manager had identified. Three weeks later, she was back in the team."',
        imageSlug: 'otp-receiving-feedback',
      },
      {
        cue: 'Expressing disagreement professionally — with respect',
        meaning: 'There are moments when a player genuinely believes the manager is wrong — and expressing that professionally is a key skill.',
        usage: '"With respect, I feel differently about that situation." → Professional disagreement. The sequence: (1) acknowledge their view, (2) use "I feel / I believe / in my view" rather than "you\'re wrong," (3) keep it specific rather than general, (4) offer your perspective without demanding it is accepted. "I understand your analysis, and I respect your decision. I felt from inside the game that the problem was X rather than Y — but I\'d be interested in looking at it together on video." Offering evidence (video, data) rather than just opinion is the most professional approach to disagreement.',
        imageSlug: 'otp-professional-disagreement',
      },
      {
        cue: 'The rotation conversation — accepting a squad role',
        meaning: 'Accepting that you will not always start — and having a professional conversation about what your role in the squad will be.',
        usage: '"I appreciate what you\'ve told me — I just want to make sure I understand my role. If I\'m to be rotation cover for that position, what do I need to do to become first choice?" This question: accepts the current reality, asks for clarity about the future path, and keeps the dialogue open. Players who understand and accept their squad role — while working towards more — are more valuable to managers than players who sulk or go public. "He knew he wasn\'t first choice — but he trained harder than anyone and was always ready. When his chance came, he took it."',
        imageSlug: 'otp-rotation-conversation',
      },
      {
        cue: 'Going to the press vs. keeping it private — the professional code',
        meaning: 'A fundamental professional principle: player-manager conflicts are resolved privately, not through the media.',
        usage: '"If you have an issue with me, come to me directly — don\'t read about it in the newspaper." Almost all managers have this expectation. Players who go to the press to express unhappiness about selection are seen as unprofessional — and it damages both the player\'s reputation and the team environment. "He\'s been excellent in training and I would have preferred to play more — but I\'ll keep working and trust the manager\'s process." → public statement that says something without saying anything. Contrast with: "I feel I deserve more game time and I\'m considering my options." → this is a player going public with a selection grievance, which almost always escalates the conflict.',
        imageSlug: 'otp-press-vs-private',
      },
      {
        cue: 'When the relationship breaks down completely — professionalism under pressure',
        meaning: 'When a player-manager relationship deteriorates beyond repair, maintaining professionalism is essential — for reputation and future career.',
        usage: '"Even if you disagree with everything the manager does — you train hard, you stay professional, you give everything when you play." This is the standard professional code. A player who stops trying because of a difficult relationship with a manager damages their own value and reputation. "The relationship had completely broken down — but he was still the first in training and last to leave. He was professional to the end." In the most extreme cases, the player requests a transfer or hands in a transfer request — but the code is: do your work, keep your head down, handle it privately. The alternative — public complaints, visible sulking, reduced effort — damages the player more than the manager.',
        imageSlug: 'otp-relationship-breakdown',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Boss — could I have a few minutes? I wanted to ask for some [[feedback:information about performance — what to improve]] on the last few games. I understand I\'ve been [[dropped:removed from the starting line-up by the manager]] — I just wanted to know what I need to work on to [[work my way back:to earn back a place through hard work]] into the team.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'I appreciate you coming to me directly. It is [[rotation:the practice of regularly changing the line-up]] — we have a lot of games and I need fresh legs. But if you want [[constructive criticism:feedback that identifies what is wrong and how to improve]]: your press triggers have been a second too late. By the time you move, the opportunity to [[win the ball back:same]] has gone.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Thank you for being direct. I\'ll focus on that specifically. Can I [[raise a concern:to formally bring up a problem professionally]] though? I feel that I need more [[game time:minutes played on the pitch]] to get that sharpness back. Being on the bench affects my timing in training too.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'That is fair — and I hear you. [[With respect:a phrase used before professional disagreement]], I need to make decisions based on what is best for the whole team right now. But I will [[bring you back in:to restore a player to the starting line-up]] for the cup match on Thursday. Use it.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'I saw you come out of that meeting, Ronaldo. Was it okay?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'It was — we [[cleared the air:to resolve tension through an open conversation]]. He was honest, I was professional. I told him I wanted to [[speak my mind:to express your real opinion directly]] and he let me. I\'m [[coming on as a substitute:entering the game from the bench]] for now — but he said Thursday is mine. That\'s all I needed to know.',
    },
  ],

  matchingExercise: [
    { word: 'CONSTRUCTIVE CRITICISM', definition: 'Feedback that identifies what is wrong and how to improve' },
    { word: 'ROTATION', definition: 'Regularly changing the line-up — resting players and giving others opportunities' },
    { word: 'GAME TIME', definition: 'Minutes played on the pitch — the amount of time a player actually gets in matches' },
    { word: 'DROPPED', definition: 'Left out of the starting line-up by the manager\'s decision' },
    { word: 'CLEAR THE AIR', definition: 'To have an open conversation that resolves tension between people' },
    { word: 'RAISE A CONCERN', definition: 'To formally bring up a problem or worry in a professional way' },
    { word: 'HONEST CONVERSATION', definition: 'A direct, open discussion where both sides share their real thoughts' },
    { word: 'WORK YOUR WAY BACK', definition: 'To earn back a starting place through hard work and good performance' },
  ],

  fillBlankExercise: [
    { before: '"I respect your decision, boss — could I ask for some', answer: 'feedback', after: 'on what I need to improve?"' },
    { before: 'It\'s just', answer: 'rotation', after: '— you\'ll be back in the starting XI on Thursday. This is squad management across a long season.' },
    { before: 'She', answer: 'raised a concern', after: 'about her lack of game time in a private meeting — keeping it professional.' },
    { before: 'After weeks of tension, they sat down to', answer: 'clear the air', after: '— both said what they were really thinking.' },
    { before: 'He was', answer: 'dropped', after: 'for the first time in two years — but responded professionally by working harder in training.' },
    { before: '"I wanted the chance to', answer: 'speak my mind', after: '— I feel I\'ve been playing well and wasn\'t expecting to be left out."' },
    { before: 'He', answer: 'worked his way back', after: 'into the team after six weeks on the bench — the manager rewarded his attitude.' },
    { before: 'He needed', answer: 'game time', after: '— six weeks on the bench had affected his sharpness and match rhythm.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"Could I ask you for some feedback on my recent performances?" Why is this better than "Tell me why I\'m not playing"?',
      options: [
        'It is grammatically more complex — showing the player is educated and articulate.',
        'It uses a question rather than a demand — softening the request and keeping the conversation professional.',
        'It uses more polite vocabulary — "feedback" is more professional than "why."',
      ],
      correctIndex: 1,
    },
    {
      question: '"With respect, I feel that I\'ve been delivering in training." What does "with respect" signal?',
      options: [
        'The player deeply respects the manager and wants to show this before speaking.',
        'The player is about to politely disagree — "with respect" introduces a contrary view.',
        'The player is thanking the manager for respecting their opinions during the meeting.',
      ],
      correctIndex: 1,
    },
    {
      question: '"I understand your position — I just wanted to raise something." What does "I understand your position" do in this sentence?',
      options: [
        'It proves the player has listened carefully and can repeat the manager\'s exact words back.',
        'It acknowledges the manager\'s view first — making the disagreement that follows less confrontational.',
        'It tells the manager that the player agrees completely — then adds a minor additional point.',
      ],
      correctIndex: 1,
    },
    {
      question: '"She was dropped — but responded by working harder in training." Why is this described as professional behaviour?',
      options: [
        'Working harder in training is the only way a player can guarantee they will be selected again.',
        'Responding with hard work rather than complaints or reduced effort maintains professional reputation and increases the chance of being selected again.',
        'Training harder after being dropped shows the manager that the player was not performing at full effort before.',
      ],
      correctIndex: 1,
    },
    {
      question: '"He needed game time — six weeks on the bench had affected his sharpness." What does "game time" mean?',
      options: [
        'Training sessions — the hours the player spends practising during the week.',
        'Minutes actually played in matches — time on the pitch in competitive games.',
        'The specific time of day that matches are scheduled — morning, afternoon, or evening.',
      ],
      correctIndex: 1,
    },
    {
      question: 'Why do managers generally expect player-manager conflicts to be resolved privately, not through the media?',
      options: [
        'Because the media always sides with the player — making the manager look bad publicly.',
        'Because public conflicts damage team environment and the player\'s reputation — private resolution is more professional and effective.',
        'Because it is a legal requirement in professional football contracts — public statements about internal matters are forbidden.',
      ],
      correctIndex: 1,
    },
    {
      question: '"Could I have a conversation about my role going forward?" — why is this phrased as a question?',
      options: [
        'The player is not sure if the manager has time — they need to check the manager\'s schedule first.',
        'Phrasing it as a question gives the manager a choice — making the request less demanding and more professional.',
        'Questions are always more polite than statements in formal English — this is a general language rule.',
      ],
      correctIndex: 1,
    },
    {
      question: '"I\'ll keep working and trust the manager\'s process." — what type of public statement is this?',
      options: [
        'A coded message to other clubs that the player is unhappy and available for transfer.',
        'A professional public statement — expressing commitment while saying nothing that escalates conflict.',
        'An honest expression of the player\'s true feelings — they trust the manager completely.',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each player-manager conversation with the correct softening language or professional vocabulary.',
    items: [
      {
        sentence: '"_____ respect, boss, I feel I\'ve been training at a higher level than my recent game time reflects."',
        options: ['With', 'In', 'By'],
        correctIndex: 0,
        explanation: '"With respect" is the fixed professional phrase for introducing polite disagreement with authority. "With respect, I feel..." = "I disagree, but I am expressing this professionally." "In respect" is not a standard phrase in this context. "By respect" does not exist as an English phrase. "With respect" is a formalised hedge: it signals that what follows may not be what the listener wants to hear, but the speaker is maintaining professionalism. It is common in British English in professional and formal settings — a signal of both politeness and intention to disagree. Without it: "I feel I\'ve been training at a higher level" is a direct statement that could feel confrontational; with "with respect" first, it becomes a professional observation.',
      },
      {
        sentence: '"_____ I ask what I need to improve to get back in the starting line-up?"',
        options: ['Could', 'Can I to', 'Would I'],
        correctIndex: 0,
        explanation: '"Could I ask" is correct — the polite question form for a professional request. "Could" is more formal and softer than "can" — it marks the request as genuinely optional (I am asking permission to ask a question, not demanding an answer). "Can I to ask" is grammatically wrong — cannot use "to" after a modal verb in the infinitive form. "Would I ask" is not natural English — "would" in a question requires a specific context ("would I be right to ask?"). The full structure "Could I ask + question word + clause" is the standard professional question in English workplace contexts: "Could I ask what happened?" "Could I ask why?" "Could I ask what I need to do?"',
      },
      {
        sentence: '"I appreciate your _____, boss. Could you tell me if there is a specific area you\'d like me to focus on?"',
        options: ['feedback', 'rotation', 'selection'],
        correctIndex: 0,
        explanation: '"Feedback" is correct — the player is thanking the manager for the information they have given about their performance. "I appreciate your feedback" = thank you for the information and honesty, even if it was critical. "Rotation" is a squad management decision — not something you "appreciate" in this way (you might "understand" rotation). "Selection" is the decision about who plays — again, not something you "appreciate" in this phrase. "Feedback" is the specific term for information about performance quality — and "I appreciate your feedback" is one of the standard professional responses to receiving criticism, especially when it is constructive. It keeps the conversation open and productive.',
      },
      {
        sentence: '"After the meeting, we _____ the air — the manager said what he was thinking and so did I. We both felt better afterwards."',
        options: ['cleared', 'cleaned', 'opened'],
        correctIndex: 0,
        explanation: '"Cleared the air" is the fixed idiom — "to clear the air" = to have an honest conversation that removes tension and misunderstanding. "Cleaned the air" is not standard English — the idiom is specifically "clear," not "clean." "Opened the air" does not exist as an idiom. "Clear the air" refers to the metaphor of removing a metaphorical fog or pollution of unspoken tension — after the conversation, the atmosphere is clearer. It is widely used in professional English for describing resolution conversations: "We needed to clear the air," "They sat down and cleared the air," "That conversation really cleared the air." It implies both sides spoke honestly and both sides feel the tension has been resolved.',
      },
      {
        sentence: '"He was dropped for three weeks — but _____ harder than anyone in training. When his chance came, he was ready."',
        options: ['worked', 'was worked', 'working'],
        correctIndex: 0,
        explanation: '"Worked" is correct — past simple, describing a completed action in narrative sequence. "He was dropped → he worked harder → when his chance came, he was ready." Each event follows the next. "Was worked" (passive) = someone worked him — he was made to work, which is not the meaning here. The sentence is specifically about the player\'s personal choice to work hard — active voice. "Working" alone (present participle) cannot stand as a main verb — it needs an auxiliary: "he was working" (past continuous). Past continuous would suggest the ongoing background action — but here, "worked" as past simple fits the narrative sequence better, describing his consistent hard work over that period as a completed behavioural pattern.',
      },
      {
        sentence: 'Which response to being dropped is MOST professional?',
        options: [
          '"I\'m going to speak to my agent — I need to find out if there are other clubs interested in me."',
          '"I\'m disappointed, obviously — but I respect the decision. I\'ll speak to the manager privately to understand what I need to improve, and I\'ll work harder in training to earn my place back."',
          '"I feel I deserve to be in the team and I\'m going to make sure the manager knows how I feel about being left out."',
        ],
        correctIndex: 1,
        explanation: 'B is correct — the complete professional response. "I\'m disappointed" (honest, does not hide the emotion), "I respect the decision" (professional acknowledgement), "speak to the manager privately" (correct channel — not the press, not the agent first), "understand what I need to improve" (forward-looking, seeking actionable feedback), "work harder in training to earn my place back" (commitment to the right solution). A jumps straight to agents and transfer thoughts — this is an escalation, not a professional response to being dropped. It signals disengagement. C makes a threat ("I\'m going to make sure the manager knows how I feel") which sounds confrontational and could damage the relationship further.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Use professional language and softening strategies to give detailed responses.',
      items: [
        {
          customerLine: 'How should a player professionally request a meeting with their manager after being dropped?',
          options: [
            '"A player should ask their manager for a quick chat to understand why they were dropped and what they can do to get back in the team."',
            '"The request itself sets the tone for the entire conversation that follows, so the language matters from the very first sentence. Rather than asking \'why am I not in the team?\' — which puts the manager on the defensive — the player should frame it as a development request: \'Boss, would it be possible to have five minutes? I\'d appreciate some feedback on my recent performances.\' This phrasing does several things simultaneously: it makes the time request easy to grant (five minutes — small commitment), it positions the meeting as being about the player\'s improvement (not a complaint), and it signals professional maturity. The manager is far more likely to respond openly and helpfully to a player who asks for feedback than to one who demands an explanation. The meeting\'s quality is largely determined before it starts, by how it was requested."',
            '"The player should ask directly and professionally. Something like: \'Could I have a meeting with you, boss? I was disappointed to be dropped and I\'d like to understand the decision.\'"',
          ],
          correctIndex: 1,
          explanation: 'B is correct — analyses the language choices with genuine insight. "Sets the tone for the entire conversation" (why the request matters), "puts the manager on the defensive" (what not to do and why), "frame it as a development request" (the strategy), "makes the time request easy to grant," "positions the meeting as about improvement (not a complaint)," "signals professional maturity" (three specific things the phrasing achieves), "the manager is more likely to respond openly to feedback requests than explanations" (the key practical insight). A and C are both reasonable starting points but neither analyses why the language choices matter or what they achieve.',
        },
        {
          customerLine: 'Explain how to give constructive feedback to a teammate who is underperforming.',
          options: [
            '"Giving feedback to a teammate is difficult. You need to be honest but not offensive. Focus on the action, not the person — say what they did, not what they are."',
            '"Giving constructive feedback to a teammate requires balancing honesty with relationship preservation — and the structure of the feedback matters as much as the content. The most effective approach: (1) Choose the right moment — never immediately after a mistake in front of others; find a private moment when emotions have settled. (2) Acknowledge their effort or intention first — \'I know you\'re working hard on that...\' (3) Be specific about the behaviour, not the person — \'When you receive with your back to goal in that zone, you\'re losing the ball too often in dangerous areas\' rather than \'You\'re poor at receiving under pressure.\' (4) Suggest the improvement — \'Could you show for it a bit deeper, just outside the press zone?\' (5) Keep it two-way — \'Does that make sense? Have you noticed the same thing?\' Good feedback is a conversation, not a verdict."',
            '"You need to be direct but kind when giving feedback to teammates. Focus on what they can improve rather than criticising what went wrong. Be specific about the action and offer a solution — not just the problem."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — a structured, actionable framework with genuine depth. Five-step structure (acknowledge, specify behaviour not person, suggest improvement, keep it two-way), specific example sentences for each step, "good feedback is a conversation, not a verdict" (the key principle). The contrast "you\'re losing the ball too often" vs. "you\'re poor at receiving" is a precise illustration of behaviour vs. person. A mentions "action not person" but without the structure or examples. C is accurate but lacks the depth of the B framework and the specific illustrative examples.',
        },
        {
          customerLine: 'How should a player respond publicly when they have a private disagreement with their manager?',
          options: [
            '"A player should not say anything negative publicly. They should say they respect the manager\'s decision and are focused on contributing to the team."',
            '"Public statements during a private player-manager disagreement are a form of coded communication — and players at B2 level should understand what each type of statement signals. A fully neutral statement — \'I\'m focused on training and giving everything for the club\' — signals that a disagreement exists but is being handled privately and professionally: the player is not escalating. A mildly coded statement — \'I feel I have more to offer and I\'m working to show the manager that\' — signals mild unhappiness while remaining professional: the player is expressing ambition within acceptable boundaries. A clearly coded statement — \'I need to be playing regularly at this stage of my career and I\'m exploring all my options\' — signals to other clubs and the media that the player is considering leaving. Each escalation level has a purpose: the player chooses the level based on what they want to achieve. True professionalism is understanding exactly what each public statement signals to each audience."',
            '"Players should always be diplomatic in public. They can say they are working hard and respecting the manager\'s decisions while privately trying to resolve the issue. Going public with disagreements always makes things worse."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — decodes the three levels of coded public communication with precision. "Public statements are a form of coded communication" (the key insight), three specific statement types with analysis of what each signals and to whom ("fully neutral," "mildly coded," "clearly coded"), "each escalation level has a purpose" (understanding the player\'s strategy), "true professionalism is understanding exactly what each statement signals to each audience" (the most sophisticated point). A and C both say "stay neutral publicly" — which is correct but incomplete. B shows that even public neutrality is a communication strategy, and that different levels of neutrality send different messages.',
        },
        {
          customerLine: 'When a player-manager relationship has completely broken down, how should the player behave?',
          options: [
            '"When the relationship breaks down, the player should hand in a transfer request and leave as quickly as possible. There is no point staying somewhere you are unhappy."',
            '"A complete breakdown in the player-manager relationship is one of the most professionally demanding situations in football — because everything the player does becomes visible and is interpreted through the lens of the conflict. The professional code is consistent: train at maximum effort regardless of how the manager makes you feel, perform at the highest level when given opportunities, keep all conflict private, handle the situation through the appropriate channels (agent, club director, formal transfer request if necessary), and avoid making statements that confirm the breakdown publicly. This is not about suppressing genuine feelings — it is about protecting your own reputation and value. A player who stops trying when they are in conflict with a manager damages their own market value, their teammates\' environment, and their future references. The player who maintains professionalism until the very last day, even in impossible circumstances, is universally respected — and that reputation travels to the next club."',
            '"When the relationship completely breaks down, the player should request a private meeting to try to resolve it one last time. If that fails, they should speak to the club directors and, if necessary, hand in a transfer request. Throughout all of this, they should behave professionally and not go to the press."',
          ],
          correctIndex: 1,
          explanation: 'B is correct — the most comprehensive and analytically deep response. "Everything the player does becomes visible and is interpreted through the lens of the conflict" (the key insight about why this situation is uniquely difficult), "train at maximum effort regardless of how the manager makes you feel" (the standard), "appropriate channels — agent, club director, formal transfer request" (the correct escalation path), "not about suppressing feelings — about protecting reputation and value" (the professional rationale), "damages their own market value, teammates\' environment, and future references" (three specific consequences of unprofessionalism), "reputation travels to the next club" (the long-term career point). A is too quick to recommend leaving. C is reasonable but lacks the depth and the analysis of why professionalism protects the player specifically.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three softening language or professional vocabulary mistakes in this conversation. Find them.',
      dialogue: [
        { speaker: 'Player', text: 'Boss, could I have a few minutes? I wanted to ask for some feedback on my recent performances.' },
        { speaker: 'Manager', text: 'Of course — I was going to speak to you anyway. You\'ve been working hard in training, but your positioning in the press has been a second late.' },
        { speaker: 'Player', text: 'Tell me exactly what you mean — which positions are wrong and when.' },
        { speaker: 'Manager', text: 'When the trigger happens, you should already be moving. You\'re reacting a half-second after the team. We\'ve been working on this for weeks.' },
        { speaker: 'Player', text: 'I understand. I appreciate your constructive criticism. Is there a specific drill you could recommend to help me work on it?' },
        { speaker: 'Player', text: 'With respect, I also want to raise a concern — my game time has dropped significantly and I feel this is affecting my sharpness. Could we discuss my rotation for the next few weeks?' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'Tell me exactly what you mean — which positions are wrong and when.',
          correction: 'Could you tell me more specifically — which pressing moments are you referring to?',
          explanation: '"Tell me exactly what you mean" is too direct and demanding for a professional feedback conversation — it sounds like a challenge or a command rather than a genuine request for clarification. The imperative "tell me" without any softening ("could you," "would you mind") removes the professional courtesy expected in a player-manager relationship. "Which positions are wrong" is also slightly defensive — "wrong" frames it as an accusation being contested rather than information being sought. The professional reformulation uses a question form ("could you tell me") and neutral rather than confrontational vocabulary ("which pressing moments are you referring to" rather than "which positions are wrong").',
        },
        {
          lineIndex: 5,
          incorrectText: 'Could we discuss my rotation for the next few weeks?',
          correction: 'Could we discuss my role / my involvement / my opportunities in the coming weeks?',
          explanation: '"Rotation" is a management decision — it is the manager\'s decision to rotate, not the player\'s. A player does not "discuss their rotation" — rotation is something that happens to them. Asking "could we discuss my rotation" implies the player expects to have input into the manager\'s squad management decisions, which sounds presumptuous. The player should ask about their "role," "involvement," or "opportunities" — things that relate to their contribution and development, not the management process itself. "Could we discuss my role going forward?" = professional. "Could we discuss my rotation?" = sounds like the player is trying to manage squad decisions that belong to the manager.',
        },
        {
          lineIndex: 1,
          incorrectText: 'you\'ve been working hard in training, but your positioning in the press has been a second late',
          correction: 'Correct as stated — this is appropriate constructive criticism',
          explanation: 'This line is actually CORRECT — the manager gives constructive criticism in the proper form: acknowledges the positive first ("you\'ve been working hard in training"), then gives specific, actionable feedback ("your positioning in the press has been a second late"). This is precisely the structure of good constructive criticism: positive acknowledgement + specific improvement area. It is worth noting for students: "but" in this structure carries the real message — "you\'ve been working hard, BUT your press timing is late" means "the training effort is good, the timing is the problem." Constructive criticism in English typically uses this "positive + but + specific area" structure.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete each scenario using professional player-manager communication language.',
      items: [
        {
          customerLine: 'How should a player ask for more game time without sounding like they are demanding it?',
          salespersonStart: 'Asking for more game time is one of the most common conversations in professional football — and the language determines whether it sounds like a request or a demand —',
          suggestedCompletion: 'Asking for more game time is one of the most common conversations in professional football — and the language determines whether it sounds like a request or a demand — because managers hear both and respond very differently to each. The demand version: "I need to be playing more — I\'m not getting enough minutes." This puts the manager on the defensive immediately: it implies a criticism of their decisions and a claim on what the player is owed. The request version: "I appreciate my role in the squad. I just wanted to raise something — I feel my sharpness is dropping a little without regular minutes. Is there anything I can do to earn more opportunities over the coming weeks?" This version: acknowledges the current reality, frames the concern around performance development (not entitlement), asks what the player can do (not what the manager must give), and uses a question form that gives the manager complete freedom to respond as they choose. The manager is far more likely to find a solution for a player who frames it as a question than one who frames it as a complaint.',
        },
        {
          customerLine: 'Describe a situation where a player handled a difficult manager relationship with exceptional professionalism.',
          salespersonStart: 'The test of a professional is not how they behave when things are going well — it is how they behave when they are being treated unfairly —',
          suggestedCompletion: 'The test of a professional is not how they behave when things are going well — it is how they behave when they are being treated unfairly — and there are famous examples of players who maintained extraordinary professionalism under genuinely difficult circumstances. A player dropped from the squad without clear explanation who still arrives first to training, works harder than anyone on the training pitch, supports their teammates vocally, performs at their best level whenever they get a chance, handles all media questions with diplomacy ("I\'m working hard and staying ready"), and resolves the issue through their agent and the club director — without a single public complaint or visible reduction in effort — demonstrates professional maturity that earns respect across the whole sport. This is not weakness. It is the understanding that your reputation is being built every day, and that how you handle difficulty is what defines you professionally far more than your talent when things go well.',
        },
        {
          customerLine: 'How should a manager give feedback after a poor individual performance to keep the player motivated?',
          salespersonStart: 'Feedback after a poor performance is one of the most delicate managerial skills — get it wrong and the player loses confidence; get it right and they improve —',
          suggestedCompletion: 'Feedback after a poor performance is one of the most delicate managerial skills — get it wrong and the player loses confidence; get it right and they improve — and the structure and timing of the feedback matters as much as the content. Timing first: immediately after the match is almost always wrong — the player is emotionally raw, physically exhausted, and not in a state to process technical information. Wait 24 hours. Then: private, not in front of the group. Then, the structure. Open with what went well — even in a poor game, something worked. This is not dishonest; it is strategic: the player must feel the manager sees the full picture, not only the mistakes. Then, be specific about what needs to change: not "your positioning was poor" (vague) but "in the moments after we lost the ball, you were recovering to the wrong side — here, look at the video." Then, the forward focus: "this is what I need from you next week. I believe you can do this." The player leaves knowing exactly what to fix and believing the manager still trusts them.',
        },
        {
          customerLine: 'Analyse why player-manager relationships are more complex than typical workplace relationships.',
          salespersonStart: 'The player-manager relationship combines elements of a workplace hierarchy, a performance relationship, a media relationship, and a deeply personal professional identity in a way that very few other working relationships do —',
          suggestedCompletion: 'The player-manager relationship combines elements of a workplace hierarchy, a performance relationship, a media relationship, and a deeply personal professional identity in a way that very few other working relationships do — and it is this complexity that makes communication within it uniquely challenging. A manager has power over a player\'s professional identity in a way that most employers do not: being dropped does not just affect income, it affects public reputation, fan perception, national team selection, and future transfer value. A player being left out of the team is not a private workplace decision — it is visible to millions and commented on publicly. The emotional stakes are therefore far higher than in most professional relationships. Additionally, the relationship must simultaneously be highly personal (the manager is often a mentor figure, source of confidence, and performance shaper) and highly professional (decisions must be made on merit, not relationship quality). When a manager drops a player they genuinely like, or when a player disagrees with a manager they genuinely respect, the personal and professional dimensions become painfully entangled. This is why the communication strategies for this relationship are more nuanced than a standard workplace conversation.',
        },
      ],
    },
  },
};

import { Lesson } from '@/types/lesson';

export const postMatchInterviews: Lesson = {
  slug: 'post-match-interviews',
  title: 'Post-Match Interviews',
  subtitle: 'Player and manager interview language, stock phrases, avoiding questions',
  level: 'B1-B2',
  description: 'Learn the language of post-match interviews — the stock phrases players and managers use, how to give answers that say very little, and the vocabulary of interview English.',
  heroImage: '/images/post-match-interviews-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Hedging language — how to sound careful and avoid saying too much',
    description: 'Hedging language makes what you say sound less definite — less risky. Players and managers use hedging constantly in interviews to avoid controversy, protect themselves, and sound thoughtful rather than careless. Key hedging tools: I think, I feel, I believe, I\'d say, to be honest, obviously, at the end of the day, I feel like.',
    positivePattern: 'Hedging phrase + main statement. OR Main statement + hedging qualifier.',
    positiveExample: '"I think we defended well today." / "To be honest, it was a difficult match." / "Obviously, we are disappointed with the result."',
    negativePattern: 'Avoid stating opinions as facts in interviews — hedging softens a strong opinion into a more careful position.',
    negativeExample: 'TOO STRONG: "We were better than them." HEDGED: "I thought we were the better team on the day." TOO STRONG: "The referee was terrible." HEDGED: "Look, I\'d rather not comment on the referee."',
    positiveExamples: [
      { sentence: 'I think we showed a lot of character today — coming back from 2-0 down is never easy.', note: '("I think" softens the statement — it is my opinion)' },
      { sentence: 'To be honest, we could have done better in the first half — we gave them too much space.', note: '("To be honest" = I am being direct but also careful)' },
      { sentence: 'At the end of the day, the result is what matters — and we got the three points.', note: '("At the end of the day" = ultimately, the most important thing is)' },
      { sentence: 'Obviously, we are disappointed — but we have to dust ourselves off and go again.', note: '("Obviously" acknowledges what everyone already knows)' },
    ],
    negativeExamples: [
      { sentence: 'TOO DIRECT (risky in interviews): "The referee ruined the match with that decision."', note: 'This could cause controversy and get the manager fined.' },
      { sentence: 'HEDGED: "Look, I\'d rather not get into the decisions tonight — we have to focus on our own performance."', note: 'Avoids controversy while still acknowledging what happened.' },
    ],
  },

  vocabulary: [
    {
      word: 'CREDIT',
      partOfSpeech: 'noun',
      definition: 'Praise or recognition for doing something well. "Give credit to" = acknowledge someone\'s good performance.',
      example: 'You have to give credit to the opposition — they were very well organised and hard to break down.',
      imageSlug: '/images/credit.png',
    },
    {
      word: 'CHARACTER',
      partOfSpeech: 'noun',
      definition: 'Mental strength — the ability to keep going when things are difficult. "Showing character" = fighting back under pressure.',
      example: 'I thought the team showed great character today — we were 1-0 down and we kept going until the very end.',
      imageSlug: '/images/character.png',
    },
    {
      word: 'DISAPPOINTED',
      partOfSpeech: 'adjective',
      definition: 'Sad or unhappy about a result — not getting what you hoped for.',
      example: 'Obviously, we are disappointed with the result — but we know where we went wrong and we will correct it.',
      imageSlug: '/images/disappointed.png',
    },
    {
      word: 'CONCENTRATION',
      partOfSpeech: 'noun',
      definition: 'Staying focused during a match — not losing attention at key moments.',
      example: 'We lost concentration for five minutes in the second half and it cost us two goals — that is not acceptable.',
      imageSlug: '/images/concentration.png',
    },
    {
      word: 'CREDIT WHERE IT\'S DUE',
      partOfSpeech: 'phrase',
      definition: 'Acknowledging when someone has done something well — even if you did not benefit from it.',
      example: 'Credit where it\'s due — their goalkeeper was exceptional today. He kept them in the match.',
      imageSlug: '/images/credit-where-its-due.png',
    },
    {
      word: 'DUST YOURSELF OFF',
      partOfSpeech: 'phrase',
      definition: 'To recover quickly after a bad result and prepare to go again — to not dwell on a defeat.',
      example: 'We have to dust ourselves off and go again — we have another match on Tuesday and we cannot afford to feel sorry for ourselves.',
      imageSlug: '/images/dust-yourself-off.png',
    },
    {
      word: 'MARGINS',
      partOfSpeech: 'noun',
      definition: 'The small differences that decide a match — tiny details that separate winning and losing.',
      example: 'At this level, it is all about margins — we had the chances to win but one moment of quality from them made the difference.',
      imageSlug: '/images/margins.png',
    },
    {
      word: 'FOCUS',
      partOfSpeech: 'noun / verb',
      definition: 'Concentration and attention on what matters — not being distracted.',
      example: 'We need to focus on the next match — not on today\'s result. We have three games in the next nine days.',
      imageSlug: '/images/focus.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'COME OUT WITH',
      definition: 'To say something — used when someone gives a public statement or opinion.',
      example: 'He came out with a very honest answer in the interview — admitting the team had not been good enough.',
      imageSlug: '/images/come-out-with.png',
    },
    {
      phrase: 'MOVE ON',
      definition: 'To stop thinking about something that has passed — to look forward rather than backward.',
      example: 'We need to move on from that performance — the focus is now on Thursday\'s match.',
      imageSlug: '/images/move-on.png',
    },
    {
      phrase: 'TAKE RESPONSIBILITY',
      definition: 'To accept blame or ownership for a mistake or bad performance.',
      example: 'I take full responsibility for today\'s result — the team selection and the tactics were my decisions.',
      imageSlug: '/images/take-responsibility.png',
    },
    {
      phrase: 'BRUSH OFF',
      definition: 'To dismiss something — to treat a question or criticism as unimportant.',
      example: 'She brushed off questions about her future — simply saying she was focused on the current season.',
      imageSlug: '/images/brush-off.png',
    },
    {
      phrase: 'GO AGAIN',
      definition: 'To try again after a setback — to prepare for the next challenge.',
      example: 'We go again on Thursday — there is no time to feel sorry for ourselves. We have to bounce back.',
      imageSlug: '/images/go-again.png',
    },
    {
      phrase: 'KEEP WORKING',
      definition: 'To continue putting in effort — a common phrase for promising improvement.',
      example: 'We just have to keep working — keep believing in what we do and the results will come.',
      imageSlug: '/images/keep-working.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the most common stock phrases in post-match interviews.',
    items: [
      {
        cue: 'Look, at the end of the day...',
        meaning: 'Ultimately, the most important thing is... — used to redirect to the main point.',
        usage: '"Look" at the start of an answer signals the speaker is about to give a direct but careful opinion. "At the end of the day" = ultimately, what really matters. This phrase is extremely common in football interviews — it is almost a cliché. It is used to simplify a complex situation into one key point.',
        imageSlug: 'otp-look-at-the-end-of-the-day',
      },
      {
        cue: 'I\'d rather not comment on that.',
        meaning: 'I am choosing not to answer that question — usually about the referee or an opponent.',
        usage: 'A polite but firm way to avoid answering a dangerous question. "I\'d rather not" = I prefer not to. Used by managers who want to avoid being fined for criticising referees or opponents. It acknowledges the question without answering it — a classic interview deflection.',
        imageSlug: 'otp-id-rather-not-comment',
      },
      {
        cue: 'We have to dust ourselves off and go again.',
        meaning: 'After this bad result, we need to recover and prepare for the next match.',
        usage: '"Dust yourself off" = get up after falling — recover quickly and not dwell on a setback. "Go again" = try again. This is one of the most common post-defeat phrases in football. It signals the manager is already looking forward and not dwelling on the loss.',
        imageSlug: 'otp-dust-ourselves-off-and-go-again',
      },
      {
        cue: 'Credit where it\'s due — they were the better team today.',
        meaning: 'I have to honestly acknowledge that the opposition played better.',
        usage: '"Credit where it\'s due" = be honest about who did better, even if it hurts. This phrase shows good sportsmanship. Managers use it when they have been clearly outplayed and need to acknowledge it gracefully without making excuses. It is always followed by honest praise of the opposition.',
        imageSlug: 'otp-credit-where-its-due',
      },
      {
        cue: 'Obviously, we are disappointed — but...',
        meaning: 'We are not happy with the result — but there is a positive side we want to focus on.',
        usage: '"Obviously" = as everyone can see. The "but" after "disappointed" is crucial — it signals the speaker is about to add a positive spin. Managers almost never end on "we are disappointed" without a "but." The contrast is essential: "disappointed, but... we showed character / the performance was good / we go again on Thursday."',
        imageSlug: 'otp-obviously-disappointed-but',
      },
      {
        cue: 'The only thing I can say is...',
        meaning: 'I am narrowing my answer to one key point — often used to deflect or simplify.',
        usage: 'A way of taking control of the interview by deciding what you will and will not say. "The only thing I can say is..." tells the journalist: I am only answering this one thing, not the wider question you asked. Very useful for avoiding controversy while still giving a quotable answer.',
        imageSlug: 'otp-the-only-thing-i-can-say',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Today — post-match interview language. Sofia — you are the manager. You have just lost 2-1. The journalist asks: "Were you the better team?" What do you say?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Look — I think we had our moments. To be [[honest:used for careful directness in interviews]], I felt we were the better team for long periods. But [[credit:praise or recognition for doing well — "give credit to"]] where it\'s due — they were clinical when it mattered. [[At the end of the day:ultimately — the most important thing is]], the result is what counts and we didn\'t get it today.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Excellent. Notice the hedging — "I think," "I felt," "to be honest." None of that is a strong claim that could cause controversy. Ronaldo — the journalist asks: "Were you the better team?" You are now a player. Same situation.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Obviously, we are [[disappointed:sad or unhappy about a result]]. I thought we showed great [[character:mental strength — fighting back under pressure]] and I feel we deserved more from the match. But [[margins:the small differences that separate winning and losing]] decide games at this level — and today those [[margins:same]] were not in our favour.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Good. Now — the journalist asks about a controversial refereeing decision. He says: "Do you think the penalty should have been given?" What do you say?',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Look — I\'d rather not [[comment:give a public opinion]] on the decisions tonight. I don\'t want to get into that. The [[focus:concentration and attention on what matters]] needs to be on our own performance — and we know where we let ourselves down.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Perfect deflection. You acknowledged the question, you declined to answer it, and you moved on. One final question — "What now?" What do you say after a defeat?',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'We have to [[dust ourselves off:recover quickly and not dwell on a setback]] and go again. We have another match on Thursday. There is no time to feel sorry for ourselves. We keep working, we keep believing, and the results will come.',
    },
  ],

  matchingExercise: [
    { word: 'CREDIT', definition: 'Praise or recognition — "give credit to" = acknowledge someone\'s good performance' },
    { word: 'CHARACTER', definition: 'Mental strength — the ability to keep going when things are difficult' },
    { word: 'MARGINS', definition: 'The small differences that separate winning and losing at the highest level' },
    { word: 'CONCENTRATION', definition: 'Staying focused during a match — not losing attention at key moments' },
    { word: 'DUST YOURSELF OFF', definition: 'To recover quickly after a bad result and prepare to go again' },
    { word: 'CREDIT WHERE IT\'S DUE', definition: 'Honestly acknowledging when someone has done something well' },
    { word: 'FOCUS', definition: 'Concentration and attention on what matters — not being distracted' },
    { word: 'DISAPPOINTED', definition: 'Sad or unhappy about a result — not getting what you hoped for' },
  ],

  fillBlankExercise: [
    { before: 'Look — I', answer: 'think', after: 'we were the better team today but the result didn\'t reflect that.' },
    { before: '', answer: 'To be honest', after: ', we didn\'t do enough in the first half to deserve the win.' },
    { before: '', answer: 'At the end of the day', after: ', what matters is the result — and we got the three points.' },
    { before: '', answer: 'Credit where it\'s due', after: '— their goalkeeper was outstanding. He kept them in it.' },
    { before: '', answer: 'Obviously', after: ', we are disappointed — but we showed great character to come back.' },
    { before: 'I\'d rather not', answer: 'comment', after: 'on the referee\'s decisions tonight — I want to focus on our performance.' },
    { before: 'We have to', answer: 'dust ourselves off', after: 'and go again — we have another match on Thursday.' },
    { before: 'At this level, it is all about', answer: 'margins', after: '— and today those margins went against us.' },
  ],

  multipleChoiceExercise: [
    {
      question: '"I think we were the better team today." What does "I think" do in this sentence?',
      options: [
        'It makes the sentence a question',
        'It hedges the statement — making it a careful opinion rather than a strong claim',
        'It introduces reported speech',
      ],
      correctIndex: 1,
    },
    {
      question: '"I\'d rather not comment on that." What is this an example of?',
      options: [
        'Answering a question directly and honestly',
        'Avoiding a question politely — a deflection',
        'Criticising the journalist for asking',
      ],
      correctIndex: 1,
    },
    {
      question: '"At the end of the day, the result is what matters." What does "at the end of the day" mean?',
      options: [
        'After 90 minutes of football',
        'Ultimately — the most important thing is',
        'At the end of the post-match interview',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which is the MOST hedged version of the same opinion?',
      options: [
        '"We were better than them and deserved to win."',
        '"I felt we were the better team on the day — but credit to them, they were clinical."',
        '"We definitely deserved all three points today."',
      ],
      correctIndex: 1,
    },
    {
      question: '"Credit where it\'s due." When would a manager use this phrase?',
      options: [
        'When praising their own team\'s performance',
        'When honestly acknowledging the opposition played well',
        'When criticising the referee',
      ],
      correctIndex: 1,
    },
    {
      question: '"We have to dust ourselves off and go again." What does this suggest?',
      options: [
        'The team needs to clean their kit before the next match',
        'The team will not recover from this defeat',
        'The team needs to recover quickly and focus on the next match',
      ],
      correctIndex: 2,
    },
    {
      question: '"Obviously, we are disappointed — but we showed great character." What is the function of "but" here?',
      options: [
        'It introduces a contradiction that removes the disappointment',
        'It introduces a positive contrast — acknowledging the bad but redirecting to the good',
        'It signals the manager is about to criticise the team',
      ],
      correctIndex: 1,
    },
    {
      question: '"At this level, it\'s all about margins." What are "margins" in football?',
      options: [
        'The score at half-time',
        'The small differences and details that separate winning and losing',
        'The width of the pitch used during the match',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best hedging word or phrase to complete each interview answer.',
    items: [
      {
        sentence: '_____, we are disappointed with the result — but I thought the performance was much better than last week.',
        options: ['Obviously', 'Never', 'Perhaps'],
        correctIndex: 0,
        explanation: '"Obviously" is correct. In post-match interviews, "obviously" is used to acknowledge what everyone can already see — in this case, the disappointment after a bad result. It signals: "I know you already know this, but I am going to say it anyway." Then the "but" introduces the positive spin. This structure ("obviously + emotion + but + positive") is one of the most common patterns in football interview language.',
      },
      {
        sentence: 'I _____ we were the better team for large parts of the match — but at this level you have to be clinical.',
        options: ['felt', 'must', 'obviously'],
        correctIndex: 0,
        explanation: '"Felt" is correct — hedging with a past tense mental verb. "I felt we were the better team" = this was my impression, my feeling. It is softer than "we were the better team" (a strong claim) and avoids potential controversy. "I felt / I thought / I believed" are all excellent hedging tools because they frame the opinion as a personal impression, not an objective fact.',
      },
      {
        sentence: '_____, the result is what matters — and we got the result we needed today.',
        options: ['I think', 'To be honest', 'At the end of the day'],
        correctIndex: 2,
        explanation: '"At the end of the day" is correct. This phrase is used to get to the most important bottom line — to simplify a complicated situation. "At the end of the day, the result is what matters" = ultimately, above all, the result is what counts. It is one of the most famous football interview clichés — but it is very useful and very common. "To be honest" and "I think" are possible but "at the end of the day" fits most naturally before a statement about what ultimately matters.',
      },
      {
        sentence: '_____ comment on the referee\'s decisions tonight — I want to focus on what we could have done better.',
        options: ["I'd rather not", "I will not ever", "Obviously I cannot"],
        correctIndex: 0,
        explanation: '"I\'d rather not" is correct — the most natural, polite deflection in English. "I\'d rather not" = I prefer not to. It is firm but not aggressive. "I will not ever" is too strong and sounds rude. "Obviously I cannot" is strange — the manager CAN comment, they are just choosing not to. "I\'d rather not comment on that" is the standard, accepted way to decline a dangerous question in a press conference.',
      },
      {
        sentence: '_____, we could have done more in the final third — we created the chances but we didn\'t take them.',
        options: ['At the end of the day', 'Obviously', 'To be honest'],
        correctIndex: 2,
        explanation: '"To be honest" is correct. "To be honest" signals the speaker is about to say something self-critical or direct — something that might be uncomfortable but honest. "To be honest, we could have done more" = I am being candid here, not making excuses. It is a very natural phrase in interviews when a manager wants to take responsibility without being too harsh on themselves or the players.',
      },
      {
        sentence: 'Look — _____ to them, they defended brilliantly and made it very difficult for us.',
        options: ['credit where it\'s due', 'obviously', 'I feel'],
        correctIndex: 0,
        explanation: '"Credit where it\'s due" is correct. This phrase is specifically for acknowledging good performance from the opposition (or sometimes your own players). It means: I have to be honest and recognise what they did well, even though it cost us. "Credit where it\'s due, they defended brilliantly" is a classic sportsmanship phrase — showing respect for the opponents while also gently explaining why your own team struggled.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Choose the most appropriate post-match interview answer.',
      items: [
        {
          customerLine: 'Journalist: "Were you the better team today?"',
          options: [
            '"Yes, we were clearly much better than them — we should have won easily."',
            '"Look, I think we had moments where we were the better team. To be honest, we created more chances. But credit where it\'s due — at this level, clinical finishing is what makes the difference, and they were clinical."',
            '"No. We were terrible. We don\'t deserve anything."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses multiple hedging tools: "I think," "to be honest," "credit where it\'s due." It acknowledges the team\'s performance positively without being arrogant and gives respect to the opposition. A is too strong and sounds arrogant — it could be controversial. C is too harsh — managers rarely destroy their team publicly in an interview, as it damages morale.',
        },
        {
          customerLine: 'Journalist: "Do you think the penalty decision was correct?"',
          options: [
            '"The referee was absolutely terrible today — that penalty decision was a disgrace and I am furious."',
            '"Look, I\'d rather not comment on the decisions tonight. My focus is on what we could have done better as a team."',
            '"Yes, the penalty was correct — we deserved everything we got."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "I\'d rather not comment on the decisions" is the standard, safe deflection for referee questions. A is too aggressive and controversial — the manager could be fined for publicly criticising referees. C would only be realistic if the team lost. B deflects cleanly, stays professional, and redirects to the team\'s own performance — the safest and most professional answer.',
        },
        {
          customerLine: 'Journalist: "How do you respond to losing three matches in a row?"',
          options: [
            '"Obviously, we are disappointed. But I genuinely believe in this group of players — I think the performances have been better than the results suggest. We have to dust ourselves off and go again. We keep working and the results will come."',
            '"We are having a terrible season and I don\'t know what to do to change it."',
            '"At the end of the day, results are results — and three defeats means we are in trouble."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. Classic interview structure: "obviously, we are disappointed" (acknowledges reality) + "but I believe in this group" (shows confidence) + "performances better than results" (positive spin) + "dust ourselves off and go again" (forward focus) + "keep working and results will come" (promise of improvement). A manager showing belief and resilience even under pressure. B is too honest and damaging. C is factual but has no positive spin — a poor interview answer.',
        },
        {
          customerLine: 'Journalist: "Your striker missed three clear chances today. Is that good enough?"',
          options: [
            '"No — it is not good enough. He should have scored at least one of those chances."',
            '"Look — strikers go through periods like this. I have total belief in him. At the end of the day, he got into the right positions — the goals will come. We keep working."',
            '"The striker was excellent today — I don\'t know what you are talking about."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. Managers almost never publicly criticise individual players in post-match interviews — it damages the relationship and team morale. B defends the player with hedging: "periods like this" (normalises it), "I have total belief" (shows loyalty), "at the end of the day... the goals will come" (positive focus). A directly criticises the striker — too harsh publicly. C denies an obvious fact — dishonest and unconvincing.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes in this post-match interview — the manager uses language that is too strong, inappropriate, or incorrect. Find them.',
      dialogue: [
        { speaker: 'Journalist', text: 'You were the better team — do you feel you deserved more today?' },
        { speaker: 'Manager', text: 'Yes, I think we were the better team and I believe we completely deserved to win. Obviously, the result is disappointing.' },
        { speaker: 'Journalist', text: 'What do you make of the penalty decision that went against you?' },
        { speaker: 'Manager', text: 'The referee was absolutely disgraceful — that decision was outrageous and I am furious with him. He ruined the match.' },
        { speaker: 'Journalist', text: 'And your striker missed three clear chances — is that acceptable?' },
        { speaker: 'Manager', text: 'Look, I have total belief in him. He got into good positions — the goals will come. We have to dust ourselves off and go again on Thursday.' },
      ],
      mistakes: [
        {
          lineIndex: 3,
          incorrectText: 'The referee was absolutely disgraceful — that decision was outrageous and I am furious with him. He ruined the match.',
          correction: '"Look — I\'d rather not comment on the decisions tonight. My focus is on what we can do better as a team."',
          explanation: 'Directly and publicly attacking a referee ("disgraceful," "outrageous," "furious," "ruined the match") is the biggest mistake a manager can make in a post-match interview. This type of comment almost always results in a fine and/or touchline ban from the football association. Professional managers use hedging to deflect referee questions: "I\'d rather not comment," "I don\'t want to talk about the decisions." The feelings might be real — but expressing them publicly like this is a serious professional error.',
        },
        {
          lineIndex: 1,
          incorrectText: 'I believe we completely deserved to win.',
          correction: '"I think we deserved something from the match" or "I felt we deserved more on the day."',
          explanation: '"Completely deserved to win" is too strong — it sounds arrogant and controversial. In post-match interviews, especially after a defeat, making such a strong claim can create conflict. Better hedging: "I thought we deserved something from the match" (softer) or "I felt we could have taken more from it" (even softer). "Completely deserved" removes all credit from the opposition and could look bad in the press. Strong claims in interviews need hedging.',
        },
        {
          lineIndex: 1,
          incorrectText: 'I think we were the better team and I believe we completely deserved to win.',
          correction: 'Use only one hedging phrase and soften the claim: "I thought we were the better team for periods — but credit to them."',
          explanation: 'Having two hedging phrases ("I think" and "I believe") in the same sentence then following them with "completely deserved to win" is contradictory — the hedging softens, but "completely" makes it strong again. Good interview language uses hedging consistently. The improved version: "I thought we were the better team for periods" (hedged, specific) + "but credit to them" (sportsmanship) = a much more balanced and professional answer.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the post-match interview using appropriate hedging language and stock phrases.",
      items: [
        {
          customerLine: 'Journalist: "That\'s your third defeat in a row — are you worried about your job?"',
          salespersonStart: 'Manager: Look — that\'s not something I can control.',
          suggestedCompletion: 'The only thing I can focus on is the work we do every day on the training ground and the results we produce on matchday. Obviously, I am disappointed with the run of results — anyone in my position would be. But I genuinely believe in this group of players and I believe in what we are doing. To be honest, the performances have been closer to what we want than the results suggest. At the end of the day, I have to trust the process and keep working. That is all I can do.',
        },
        {
          customerLine: 'Journalist: "The opposition\'s goalkeeper was incredible today — does that frustrate you?"',
          salespersonStart: 'Manager: Credit where it\'s due — he was outstanding.',
          suggestedCompletion: 'I thought we created enough chances to win the match — he just had one of those days where everything he touched turned to gold. I feel for the strikers — they did everything right. To be honest, you have to take your hat off to him. At this level, individual quality makes the difference — and today, he was the difference. We have to move on and focus on the next match. These things happen — and the only thing we can control is how we respond.',
        },
        {
          customerLine: 'Journalist: "Was the winning goal offside? It looked very tight."',
          salespersonStart: 'Manager: I\'d rather not comment on the decisions tonight.',
          suggestedCompletion: 'I haven\'t seen it back and I don\'t want to say something I will regret. What I can say is that we had our own chances to put the match beyond doubt and we didn\'t take them. That is what I am focusing on. We know what we need to improve and we go again on Thursday. At the end of the day, you cannot rely on the officials — you have to make sure your own performance is good enough that the decisions don\'t matter. Tonight they mattered — and that is on us, not on anyone else.',
        },
        {
          customerLine: 'Journalist: "You were 2-0 down at half-time — what did you say to the team at the break?"',
          salespersonStart: 'Manager: Look — what happens in the dressing room stays in the dressing room.',
          suggestedCompletion: 'I said what I needed to say. What I can tell you is that I believed the game was not over — I thought we had more to give. And the players showed great character. Obviously, we are disappointed that it ended 2-2 rather than winning — but coming from 2-0 down shows real mental strength from this group. I think the fight and determination they showed in the second half is something to be very proud of. At the end of the day, that is the mentality we need — and we will build on that.',
        },
      ],
    },
  },
};

import { Lesson } from '@/types/lesson';

export const talkingToOtherFans: Lesson = {
  slug: 'talking-to-other-fans',
  title: 'Talking to Other Fans',
  subtitle: 'Agreeing and disagreeing — "I thought the ref was terrible", past simple opinions',
  level: 'A2',
  description: 'Learn how to share opinions about a football match with other fans — agreeing, disagreeing, and giving your verdict on the referee, the manager, and the performance. Practise using past simple to express opinions about completed events.',
  heroImage: '/images/talking-to-other-fans-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Past simple opinions — expressing views about completed events',
    description: 'When a match is finished, we use past simple to share opinions about it. We often use "I thought", "I felt", "I found" to introduce opinions about past events. These are softer than "I think" because the event is over — the opinion is about what already happened.',
    positivePattern: '"I thought + past clause" / "I felt + past clause"',
    positiveExample: '"I thought the referee was terrible — he gave three wrong decisions."',
    negativePattern: '"I did not think + past clause" / "I did not feel + past clause"',
    negativeExample: '"I did not think the manager made the right call — he should have brought on a striker."',
    positiveExamples: [
      { sentence: 'I thought we played really well in the first half — better than in weeks.', note: '(I thought = past opinion)' },
      { sentence: 'I felt the penalty was harsh — he barely touched him.', note: '(I felt = softer opinion in the past)' },
      { sentence: 'She thought the striker had a good game — two chances created and a goal.', note: '(she thought = third person past opinion)' },
      { sentence: 'We all agreed the atmosphere was incredible — best of the season.', note: '(agreed = past, shared opinion)' },
    ],
    negativeExamples: [
      { sentence: 'I did not think the substitution worked — he came on too late.', note: '(did not think = negative past opinion)' },
      { sentence: 'She did not feel the red card was fair — it looked like two yellow card offences to her.', note: '(did not feel = negative past opinion)' },
    ],
  },

  vocabulary: [
    {
      word: 'VERDICT',
      partOfSpeech: 'noun',
      definition: 'Your final opinion or judgement about a match, player, or decision.',
      example: 'My verdict on the match: poor first half, excellent second half — and a deserved win in the end.',
      imageSlug: '/images/verdict.png',
    },
    {
      word: 'HARSH',
      partOfSpeech: 'adjective',
      definition: 'Too severe or strict — a decision that seems more punishing than the situation deserved.',
      example: 'I thought the red card was harsh — it was a clumsy challenge but not intentional.',
      imageSlug: '/images/harsh.png',
    },
    {
      word: 'UNLUCKY',
      partOfSpeech: 'adjective',
      definition: 'Not achieving a good result despite deserving one — bad fortune was involved.',
      example: 'We were unlucky — we hit the post twice and the goalkeeper made three incredible saves.',
      imageSlug: '/images/unlucky.png',
    },
    {
      word: 'DESERVED',
      partOfSpeech: 'adjective',
      definition: 'A result or reward that is fair because of the performance — they earned it.',
      example: 'It was a deserved win — they were the better team from start to finish.',
      imageSlug: '/images/deserved.png',
    },
    {
      word: 'FRUSTRATING',
      partOfSpeech: 'adjective',
      definition: 'Causing feelings of anger or disappointment — usually when things do not go as expected.',
      example: 'It was a frustrating game — we dominated but could not score.',
      imageSlug: '/images/frustrating.png',
    },
    {
      word: 'OUTRAGEOUS',
      partOfSpeech: 'adjective',
      definition: 'Shockingly unfair or extreme — beyond what is acceptable.',
      example: 'The penalty decision was outrageous — there was no contact at all.',
      imageSlug: '/images/outrageous.png',
    },
    {
      word: 'BRILLIANT',
      partOfSpeech: 'adjective',
      definition: 'Excellent, impressive, and skillful — the best of its kind.',
      example: 'The goalkeeper was brilliant — she saved everything they threw at her.',
      imageSlug: '/images/brilliant.png',
    },
    {
      word: 'CONTROVERSIAL',
      partOfSpeech: 'adjective',
      definition: 'Causing strong disagreement between people — when different people have very different opinions.',
      example: 'The disallowed goal was controversial — half the fans thought it was correct, half did not.',
      imageSlug: '/images/controversial.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'I THOUGHT [OPINION]',
      definition: 'How you express a past opinion — used to share a view about something that has happened.',
      example: 'I thought the first half was poor — we gave the ball away too many times.',
      imageSlug: '/images/i-thought-opinion.png',
    },
    {
      phrase: 'I AGREE WITH YOU',
      definition: 'Expressing agreement with someone else\'s opinion.',
      example: '"I thought the ref was terrible." "I agree with you — three wrong decisions in the first half alone."',
      imageSlug: '/images/i-agree-with-you.png',
    },
    {
      phrase: 'I AM NOT SO SURE ABOUT THAT',
      definition: 'A polite way to express partial or complete disagreement.',
      example: '"The penalty was outrageous." "I am not so sure about that — he did touch him on the leg."',
      imageSlug: '/images/i-am-not-so-sure-about-that.png',
    },
    {
      phrase: 'FAIR ENOUGH',
      definition: 'An expression of acceptance — acknowledging that something is reasonable even if you do not fully agree.',
      example: '"We lost because we were not good enough." "Fair enough — but we were unlucky with the penalty too."',
      imageSlug: '/images/fair-enough.png',
    },
    {
      phrase: 'TO BE HONEST',
      definition: 'A phrase used before a direct or frank opinion — signalling you are about to be truthful.',
      example: 'To be honest, I thought we were lucky to draw — they were the better team for most of the match.',
      imageSlug: '/images/to-be-honest.png',
    },
    {
      phrase: 'CREDIT WHERE IT\'S DUE',
      definition: 'Acknowledging something positive about the opposition or about a player you might otherwise criticise.',
      example: '"I know I am always critical of the manager — but credit where it\'s due, the substitutions were perfect today."',
      imageSlug: '/images/credit-where-its-due.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases fans use when talking to each other after the match or at half-time.',
    items: [
      {
        cue: "That ref was terrible!",
        meaning: 'The referee made many bad decisions during the match.',
        usage: 'One of the most common fan phrases after a match — especially when your team has lost. "Was terrible" = past simple opinion. It can be justified criticism or an emotional reaction. Referees are often the target of fan frustration after bad results.',
        imageSlug: 'otp-that-ref-was-terrible',
      },
      {
        cue: "We should have won that.",
        meaning: 'We deserved to win but did not — the result was unfair.',
        usage: '"Should have" + past participle = something that was expected or deserved but did not happen. "We should have won" = we deserved to win but the result went against us. Very common fan phrase after a draw or narrow defeat.',
        imageSlug: 'otp-we-should-have-won-that',
      },
      {
        cue: 'To be fair, they were better than us.',
        meaning: 'Being honest — the opposition deserved to win.',
        usage: '"To be fair" = introducing an honest or impartial opinion. It signals you are acknowledging something positive about the opposition even if it hurts. An honest fan who admits this earns respect — it shows good sportsmanship.',
        imageSlug: 'otp-to-be-fair-they-were-better-than-us',
      },
      {
        cue: 'Did you see that goal?',
        meaning: 'Did you watch / notice that goal? (Expressing shared excitement or disbelief.)',
        usage: 'Used to share a reaction with another fan — usually excitement, disbelief, or joy. "Did you see" = past simple question. The emotion is in the tone, not the words. Could be an amazing goal or an outrageous decision.',
        imageSlug: 'otp-did-you-see-that-goal',
      },
      {
        cue: "I don't know what the manager was thinking.",
        meaning: 'I strongly disagree with a decision the manager made.',
        usage: '"I don\'t know what he was thinking" = I cannot understand the logic. A strong expression of frustration or disagreement with a managerial decision. The past continuous "was thinking" shows the decision was happening over a period, not just one moment.',
        imageSlug: 'otp-i-dont-know-what-the-manager-was-thinking',
      },
      {
        cue: 'Fair play to them.',
        meaning: 'Respect and acknowledgement to the opposition for playing well.',
        usage: '"Fair play" = respect and acknowledgement. "To them" = directed at the opposition. A sportsmanlike way to acknowledge that the other team played better or deserved the result. Common after a loss to a clearly better side.',
        imageSlug: 'otp-fair-play-to-them',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Well — that was [[frustrating:causing feelings of disappointment — things did not go as expected]]. I thought we played well but the referee was [[harsh:too severe or strict — decisions seemed unfair]].',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I agree with you about the referee — the red card was [[outrageous:shockingly unfair — beyond what is acceptable]]. He barely touched him.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'I am not so sure about that. To be honest, I thought the red card was [[controversial:causing strong disagreement — people have very different opinions]] — but not outrageous. He did make contact.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Fair enough. But I still thought the penalty was wrong. Did you see the replay? There was no contact at all.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'I agree. And to be honest, I did not think the substitution worked either — he came on too late to make a difference.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: '[[Credit where it\'s due:acknowledging something positive]] — the opposition were [[brilliant:excellent and impressive]] in the second half. We should have won it, but to be fair, they were the better team after half-time.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Fair play to them — but I still thought we were [[unlucky:not achieving a good result despite deserving one]]. We hit the post twice!',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'My [[verdict:my final opinion or judgement about the match]] — a [[deserved:fair because of the performance — they earned it]] draw. We did not do enough in the first half and they were too good in the second.',
    },
  ],

  matchingExercise: [
    { word: 'VERDICT', definition: 'Your final opinion or judgement about a match' },
    { word: 'HARSH', definition: 'Too severe or strict — the decision was more punishing than deserved' },
    { word: 'UNLUCKY', definition: 'Not achieving a good result despite deserving one' },
    { word: 'DESERVED', definition: 'A result that is fair because of the performance' },
    { word: 'FRUSTRATING', definition: 'Causing feelings of disappointment — things did not go as expected' },
    { word: 'OUTRAGEOUS', definition: 'Shockingly unfair — beyond what is acceptable' },
    { word: 'BRILLIANT', definition: 'Excellent, impressive, and skillful' },
    { word: 'CONTROVERSIAL', definition: 'Causing strong disagreement — people have very different opinions' },
  ],

  fillBlankExercise: [
    { before: 'I', answer: 'thought', after: 'the referee was terrible — three wrong decisions in 90 minutes.' },
    { before: 'She did not', answer: 'think', after: 'the red card was fair — it looked like two yellow card challenges.' },
    { before: 'To be', answer: 'honest', after: ', I thought we were lucky to get a draw.' },
    { before: 'I', answer: 'agree with you', after: '— the penalty was outrageous. No contact at all.' },
    { before: 'I am not so', answer: 'sure about that', after: '— I thought he did touch him.' },
    { before: '', answer: 'Fair play to', after: 'them — they played brilliantly in the second half.' },
    { before: 'My', answer: 'verdict', after: ': the better team won and we need to be honest about that.' },
    { before: 'We', answer: 'should have won', after: 'that — we created so many more chances than them.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Which sentence correctly expresses a past opinion?',
      options: [
        'I think the referee was terrible.',
        'I thought the referee was terrible.',
        'I am thinking the referee was terrible.',
      ],
      correctIndex: 1,
    },
    {
      question: 'A fan says: "I am not so sure about that." What do they mean?',
      options: [
        'They fully agree with what was said',
        'They partially or completely disagree in a polite way',
        'They do not understand the topic',
      ],
      correctIndex: 1,
    },
    {
      question: '"We should have won that." What does this mean?',
      options: [
        'We are going to win next time',
        'We deserved to win but the result went against us',
        'We almost won but need to try harder',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence correctly uses past simple to express an opinion?',
      options: [
        'I felt the penalty is harsh.',
        'I feel the penalty was harsh.',
        'I felt the penalty was harsh.',
      ],
      correctIndex: 2,
    },
    {
      question: '"Fair play to them." What does a fan mean by this?',
      options: [
        'They want the referee to give a fair decision',
        'They are respectfully acknowledging the opposition played well',
        'They are criticising the opposition\'s aggressive style',
      ],
      correctIndex: 1,
    },
    {
      question: '"Credit where it\'s due." When do fans use this phrase?',
      options: [
        'When they want to criticise someone for a mistake',
        'When they acknowledge something positive — even if they are usually critical',
        'When they want to claim credit for being right about a prediction',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which is correct? "I did not think the substitution _____ — he came on too late."',
      options: ['works', 'worked', 'is working'],
      correctIndex: 1,
    },
    {
      question: '"To be fair, they were better than us." What does "to be fair" signal?',
      options: [
        'You are about to praise your own team',
        'You are about to say something honest, even if it is not what you want to say',
        'You are asking the referee to make a fair decision',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence to express a past opinion correctly.',
    items: [
      {
        sentence: '"The red card was harsh." "I _____ agree — he barely touched him."',
        options: ['think', 'am thinking', 'thought'],
        correctIndex: 2,
        explanation: '"Thought" is correct. We are discussing a completed match event — the red card happened in the past. "I thought" = my past opinion about a past event. "I think" = my current/general opinion. "I am thinking" = a continuous thought happening right now — not appropriate for a reaction to a past event.',
      },
      {
        sentence: 'I _____ think the manager made the right substitution — he was too slow to react.',
        options: ['do not', 'am not', 'did not'],
        correctIndex: 2,
        explanation: '"Did not" is correct. The substitution happened in the past — it is a completed event. We need the past simple negative: "did not think." "Do not think" = present opinion. "Am not thinking" = present continuous — not appropriate for a past event.',
      },
      {
        sentence: '"The atmosphere was amazing." "I agree _____ you — the best all season."',
        options: ['to', 'about', 'with'],
        correctIndex: 2,
        explanation: '"With" is correct. The fixed phrase is "I agree WITH you" — not "to" or "about." "Agree with someone" = share their opinion. "Agree to something" = consent to a plan or proposal. Different preposition, different meaning.',
      },
      {
        sentence: 'To _____ honest, I thought we were lucky — they created more chances than us.',
        options: ['be', 'being', 'have been'],
        correctIndex: 0,
        explanation: '"Be" is correct. "To be honest" is a fixed phrase — always "to be honest," never "to being honest" or "to have been honest." It is a set expression used to signal that you are about to say something direct or truthful.',
      },
      {
        sentence: 'We _____ have won that match — we hit the post three times.',
        options: ['can', 'should', 'would'],
        correctIndex: 1,
        explanation: '"Should" is correct. "Should have + past participle" = something that was expected or deserved but did not happen. "We should have won" = we deserved to win but did not. "Could have" = it was possible. "Would have" = it would have happened if something else had been different.',
      },
      {
        sentence: '_____ play to them — they were brilliant in the second half and fully deserved the win.',
        options: ['Fair', 'Good', 'Credit'],
        correctIndex: 0,
        explanation: '"Fair" is correct. "Fair play to them" is the fixed phrase — acknowledging and respecting the opposition. "Good play to them" is not a fixed phrase. "Credit where it\'s due" is also possible but the structure is different — it does not fit the "_____ play to them" blank.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Agree, disagree, or give your verdict on each opinion.',
      items: [
        {
          customerLine: 'Fan A says: "I thought the referee ruined the match — three terrible decisions." How do you respond?',
          options: [
            '"I completely agree — the referee was terrible and we should complain to the league."',
            '"I am not so sure about that. I thought one decision was wrong but the other two were correct. To be fair, the referee had a difficult match — not easy when both teams were so physical."',
            '"I disagree — the referee was perfect and made no mistakes at all."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It uses "I am not so sure about that" for polite disagreement, gives a specific counter-argument (one wrong, two correct), and uses "to be fair" to show balance. Option A is an overreaction. Option C is also an overreaction in the opposite direction.',
        },
        {
          customerLine: 'Fan B says: "I thought we should have won — we were the better team." Do you agree or disagree?',
          options: [
            '"I agree — we should have won and the result was completely unfair."',
            '"I thought we were better in the first half, but to be honest, they were stronger in the second. Fair play to them — they deserved the point they got in the end."',
            '"I disagree completely — we were terrible and lucky not to lose."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It partially agrees ("better in the first half"), uses "to be honest" for a balanced view, and "fair play to them" to show sportsmanship. It uses multiple past simple opinions correctly (thought, were, deserved).',
        },
        {
          customerLine: 'A fan of the opposition says: "Your goalkeeper was brilliant — best performance I have seen all season." How do you respond?',
          options: [
            '"She is always brilliant — the best goalkeeper in the world."',
            '"Thank you — I thought she was excellent today. Credit where it\'s due — she kept us in the match in the first half. But fair play to your team — you played very well."',
            '"No — she made some mistakes. You are being too kind."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It accepts the compliment politely, uses past simple opinions ("I thought she was excellent"), uses "credit where it\'s due" and "fair play to your team" — showing good sportsmanship and cultural awareness about football fan interactions.',
        },
        {
          customerLine: 'The coach asks: "What is your verdict on the match?" Give a complete past simple opinion.',
          options: [
            '"It was good but we need to improve and do better next time."',
            '"My verdict: we played well for 60 minutes and created the better chances — I thought we were unlucky not to score. The red card was controversial — I felt it was harsh, but I can see the argument for it. To be honest, a draw was probably the fair result."',
            '"I think we will win the next match and forget about this one."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. It gives a complete verdict using past simple throughout (played, created, thought, felt, was), uses vocabulary from the lesson (unlucky, controversial, harsh, fair), and uses "to be honest" and "I felt" correctly as opinion markers.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three grammar mistakes in this post-match fan conversation. Find them as a group.',
      dialogue: [
        { speaker: 'Sofia', text: 'I think the referee was terrible — three completely wrong decisions.' },
        { speaker: 'Ronaldo', text: 'I agree about you — the red card was outrageous. He barely touched him.' },
        { speaker: 'Sofia', text: 'To be honest, I felt the whole team did not try hard enough in the second half.' },
        { speaker: 'Ronaldo', text: 'I am not so sure on that — I thought they worked hard but were unlucky.' },
        { speaker: 'Sofia', text: 'Fair enough. My verdict: we should have win that match — we created more chances.' },
        { speaker: 'Ronaldo', text: 'Fair play to them though — they were brilliant on the counter-attack all game.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'I think the referee was terrible',
          correction: 'I thought the referee was terrible',
          explanation: '"Think" is present simple — but the match is finished. We should use "thought" (past simple) to express an opinion about a completed event. "I think" = my current/general opinion. "I thought" = my opinion about what already happened.',
        },
        {
          lineIndex: 1,
          incorrectText: 'I agree about you',
          correction: 'I agree with you',
          explanation: '"Agree about" means you agree on a topic ("we agreed about the penalty"). "Agree with someone" means you share their opinion. The correct fixed phrase for agreeing with a person is "I agree WITH you." Using "about" here is a preposition error.',
        },
        {
          lineIndex: 4,
          incorrectText: 'we should have win that match',
          correction: 'we should have won that match',
          explanation: '"Should have" must be followed by the PAST PARTICIPLE — not the base form. "Win" is the base form. "Won" is the past participle. So: "should have won," not "should have win." The same rule applies to: could have scored, would have played, might have lost.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the fan opinion using past simple and vocabulary from this lesson.',
      items: [
        {
          customerLine: 'Ronaldo: I thought the manager got the tactics completely wrong today.',
          salespersonStart: 'Sofia: I am not so sure about that — but I do think the substitutions were late.',
          suggestedCompletion: 'To be honest, I felt the formation worked well in the first half but the manager was too slow to change things when the opposition scored. He waited until the 75th minute to make the first substitution — by then it was too late to change the game. I thought the striker who came on should have started — she was more clinical than the one who played the full 90 minutes. But credit where it\'s due — the manager got three decisions right even if the timing was off. My verdict: wrong team, correct tactics, too slow to adapt.',
        },
        {
          customerLine: 'Sofia: I thought we were really unlucky — we hit the post twice and had a goal disallowed.',
          salespersonStart: 'Coach Diallo: I agree — but to be fair, we were not brilliant either.',
          suggestedCompletion: 'I thought the disallowed goal was particularly frustrating — I felt it was a very harsh decision and the replay did not make it any clearer. And yes, we should have scored from the two chances that hit the post. But I also felt we gave too much space in midfield in the second half — we were too open. Fair play to them — they took their chances when they came. My verdict: the result was harsh on us, but we also could have done more to win it. Unlucky but not entirely undeserved.',
        },
        {
          customerLine: 'Ronaldo: I did not think the atmosphere was very good today — the fans were too quiet.',
          salespersonStart: 'Sofia: I thought it was quiet too in the first half — but it picked up after the goal.',
          suggestedCompletion: 'I agreed with you about the first half — the fans did not really get behind the team until the goal went in. I thought it was frustrating because when the atmosphere dropped, the players seemed to struggle too. There is a connection between the noise in the stands and the performance on the pitch. After the goal, the atmosphere was brilliant — the whole ground was rocking for the last 20 minutes. I felt that energy helped the team push for a second. Credit where it\'s due to the fans — once they got going, they were outstanding.',
        },
        {
          customerLine: 'Coach Diallo: Give me your overall verdict on the season so far.',
          salespersonStart: 'Sofia: Overall, I thought it was a mixed season — some brilliant results and some very frustrating ones.',
          suggestedCompletion: 'My verdict: we played much better than last season for long periods, but we were not consistent enough. I thought the team was brilliant in the big matches — especially the home games — but we struggled away from home. I felt the management decisions were good in the first half of the season but less convincing later on. Credit where it\'s due — the young players who came through the academy were outstanding. But I also thought we should have challenged for a higher position — we had the squad for it. To be honest, I expected more. Fair play to the players for the effort, but the results did not always reflect the quality we have.',
        },
      ],
    },
  },
};

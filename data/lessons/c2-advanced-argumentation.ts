import { Lesson } from '@/types/lesson';

export const c2AdvancedArgumentation: Lesson = {
  slug: 'c2-advanced-argumentation',
  title: 'Advanced Argumentation',
  subtitle: 'Unit 1 — The Analyst\'s Toolkit',
  level: 'C1-C2',
  description: 'Great football analysts don\'t just make arguments — they build them in layers, pre-empt the objections, and know when to concede a point to strengthen their case. Learn the architecture of a sophisticated argument.',
  heroImage: '/images/advanced-argumentation.png',

  warmUp: {
    questions: [
      'What is the difference between an opinion and an argument? What does an argument need that an opinion does not?',
      'Have you ever changed your mind during a football debate because someone made a genuinely strong point? What was the point?',
      'Is it possible to argue something you don\'t personally believe? When might that be useful?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Conceding and rebutting — "While X is true, Y remains the stronger case"',
    description: 'The most sophisticated arguments acknowledge the strongest version of the opposing view before dismantling it. This is called a concession-rebuttal structure. Key phrases: "While it is true that..., the more significant factor is..." / "I accept that..., but this does not account for..." / "The counterargument here is reasonable — however, it rests on the assumption that..." / "Even granting that..., the conclusion does not follow." Conceding a weak version of the opposing view and then knocking it down is called a strawman — avoid it. Concede the strongest version. Then rebut it. That is what makes an argument compelling.',
    positiveExamples: [
      { sentence: 'While it is true that possession was dominant, the more significant measure is what was done with it — and here, City fell well short.', note: 'Concedes a real fact, then redirects to the more important question' },
      { sentence: 'I accept that the referee made errors on the night — but those errors cannot fully account for a performance that created just 0.4 xG across ninety minutes.', note: '"I accept... but" — acknowledges the real point before showing it is insufficient' },
      { sentence: 'Even granting that the injury disrupted their shape, the underlying defensive numbers had been declining for six weeks before the match.', note: '"Even granting that" = strongest concession — then the rebuttal shows the pattern predates the excuse' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'THESIS',
      partOfSpeech: 'noun',
      definition: 'The central claim of an argument — the single thing you are trying to prove.',
      example: '"State your thesis early and clearly — everything else in the piece should support, qualify, or complicate it."',
      imageSlug: '/images/thesis.png',
    },
    {
      word: 'COUNTERARGUMENT',
      partOfSpeech: 'noun',
      definition: 'The strongest opposing view — the best case that could be made against your thesis.',
      example: '"Engaging with the counterargument directly makes your own argument stronger — ignoring it just looks like you don\'t know it exists."',
      imageSlug: '/images/counterargument.png',
    },
    {
      word: 'PREMISE',
      partOfSpeech: 'noun',
      definition: 'The foundation that an argument rests on — the assumed truth that makes the rest of the argument possible.',
      example: '"The argument falls apart if you question the premise — if possession is not actually correlated with winning, the whole case collapses."',
      imageSlug: '/images/c2-advanced-argumentation-premise.png',
    },
    {
      word: 'REBUTTAL',
      partOfSpeech: 'noun',
      definition: 'A response that specifically contradicts and disproves a counterargument.',
      example: '"His rebuttal was precise — he didn\'t attack the person making the point, he attacked the specific assumption it rested on."',
      imageSlug: '/images/rebuttal.png',
    },
    {
      word: 'CONCESSION',
      partOfSpeech: 'noun',
      definition: 'Acknowledging that part of the opposing argument is valid or true — before showing why it doesn\'t change your conclusion.',
      example: '"The concession made his argument stronger, not weaker — admitting the referee errors showed he wasn\'t dismissing them, just explaining why they weren\'t the whole story."',
      imageSlug: '/images/c2-advanced-argumentation-concession.png',
    },
    {
      word: 'STRAWMAN',
      partOfSpeech: 'noun',
      definition: 'A weak or distorted version of the opposing argument that is easy to knock down — used dishonestly to avoid engaging with the real objection.',
      example: '"The strawman fallacy: arguing against a position nobody actually holds. If critics say \'City were lucky,\' don\'t argue against \'City were completely undeserving.\'  Address what was actually said."',
      imageSlug: '/images/strawman.png',
    },
    {
      word: 'NUANCE',
      partOfSpeech: 'noun',
      definition: 'Subtle distinctions and complexity — the parts of a picture that don\'t fit neatly into a simple argument.',
      example: '"The nuance here is that both things can be true simultaneously — City were the better team, and they were also fortunate. Those are not contradictory."',
      imageSlug: '/images/nuance.png',
    },
    {
      word: 'CONVICTION',
      partOfSpeech: 'noun',
      definition: 'The strength of belief with which you hold and express a position.',
      example: '"He presented his conclusion with conviction — clearly, directly, and without apology — and it was more persuasive for it."',
      imageSlug: '/images/conviction-argumentation.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PRE-EMPT',
      definition: 'To address an objection before it is raised — to anticipate the counterargument and deal with it in advance.',
      example: '"She pre-empted the obvious objection about sample size by addressing it directly in paragraph two — before anyone could raise it."',
      imageSlug: '/images/pre-empt.png',
    },
    {
      phrase: 'PICK HOLES IN',
      definition: 'To identify specific weaknesses in an argument — to find the gaps, contradictions, or unsupported assumptions.',
      example: '"I can pick holes in the counterargument: it rests on the assumption that possession and winning are directly correlated, and the data simply does not support that."',
      imageSlug: '/images/c2-advanced-argumentation-pick-holes-in.png',
    },
    {
      phrase: 'HOLD UP UNDER',
      definition: 'To remain valid and strong when challenged or scrutinised — the test a good argument must pass.',
      example: '"The thesis holds up under scrutiny — every counterargument leads back to the same underlying problem they refused to fix."',
      imageSlug: '/images/hold-up-under.png',
    },
    {
      phrase: 'SHORE UP',
      definition: 'To strengthen or support something that might otherwise be vulnerable — to reinforce a weak point in an argument.',
      example: '"He shored up the weak section of his argument by bringing in a second data source that supported the same conclusion."',
      imageSlug: '/images/shore-up.png',
    },
    {
      phrase: 'KNOCK DOWN',
      definition: 'To disprove or defeat an argument — to show convincingly that it doesn\'t hold.',
      example: '"She knocked down the counterargument in one sentence: \'That logic would mean any team that lost was defending poorly — and that\'s clearly not true.\'  "',
      imageSlug: '/images/knock-down.png',
    },
    {
      phrase: 'REST ON',
      definition: 'To depend on a particular assumption or piece of evidence — what an argument is built on.',
      example: '"The whole argument rests on the claim that xG is a reliable predictor of future performance — and that claim is contestable."',
      imageSlug: '/images/rest-on.png',
    },
  ],

  onThePitch: {
    instructions: 'The key techniques of advanced argumentation — how to build, layer, and defend an analytical position.',
    items: [
      {
        cue: 'State the thesis clearly and early',
        meaning: 'Every good argument has one clear central claim. State it early — in the first paragraph. Everything else exists to support, qualify, or develop it.',
        usage: '"Thesis: City\'s decline in the second half of the season was not primarily a tactical problem — it was a consequence of specific personnel losses that their squad depth was unable to absorb. Everything I argue below is a variation on that single claim." One thesis. State it. Defend it.',
        imageSlug: 'otp-state-thesis',
      },
      {
        cue: 'Acknowledge the strongest counterargument',
        meaning: 'Before you defend your position, identify and articulate the strongest objection to it. Not a weak version — the best case the opposition could make. Then respond to that.',
        usage: '"The most compelling counterargument is this: even accounting for injuries, City\'s tactical flexibility had been declining since January — before the key losses. I want to address that directly, because it is the version of this argument I take most seriously."',
        imageSlug: 'otp-strongest-counter',
      },
      {
        cue: 'The concession-rebuttal move',
        meaning: 'Concede part of the opposing argument — specifically the part that is actually true — then show why it doesn\'t change your conclusion.',
        usage: '"I accept that the referee missed a clear penalty. That is true. But even granting that decision, the underlying performance — 0.4 xG in ninety minutes — cannot be explained by one refereeing error. The concession is real. The rebuttal is that it doesn\'t change the picture."',
        imageSlug: 'otp-concession-rebuttal',
      },
      {
        cue: 'Pre-empting the obvious objection',
        meaning: 'If you can see the objection coming, deal with it before it is raised. This shows you have thought carefully and removes the counterargument from your opponent\'s arsenal.',
        usage: '"Before anyone raises the sample size problem — I am aware that twelve matches is a limited dataset. The reason I am using it anyway is that the pattern is consistent across all twelve, and the variance is low. I am not claiming generalisability — I am making a specific point about this specific period." Pre-empt. It builds trust.',
        imageSlug: 'otp-pre-empt',
      },
      {
        cue: 'Picking holes in the premise',
        meaning: 'The most efficient way to defeat an argument is to identify and challenge the premise it rests on — the assumption it cannot function without.',
        usage: '"The counterargument assumes that possession percentage is the best proxy for dominance. It is not. I can pick holes in that premise directly: over the past five seasons, the correlation between possession percentage and xG differential is 0.41 — moderate at best. Build an argument on that foundation and it will not hold up under scrutiny."',
        imageSlug: 'otp-premise',
      },
      {
        cue: 'The layered argument — three levels',
        meaning: 'A sophisticated argument has three layers: the primary claim (the thesis), the supporting evidence, and the nuance (the complications that don\'t fit but which honest analysis must acknowledge).',
        usage: '"Primary: City were the better team. Evidence: xG 2.1 vs 0.6, 68% possession in the final third, seven big chances to two. Nuance: the opposition\'s two chances were both from set pieces, which are difficult to account for in xG models — so the margin may be slightly overstated. The three layers together are more persuasive than any one of them alone."',
        imageSlug: 'otp-layered-argument',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Analyst 1', speakerColor: 'orange', text: 'My argument is simple — City were lucky. The xG difference was massive.' },
    { speaker: 'Analyst 2', speakerColor: 'blue', text: 'I can pick holes in that. Which xG model are you using, and how does it handle set pieces?' },
    { speaker: 'Analyst 1', speakerColor: 'orange', text: 'StatsBomb. And I accept that set pieces are a known limitation.' },
    { speaker: 'Analyst 2', speakerColor: 'blue', text: 'So you\'re pre-empting that objection — good. But the counterargument is that \'lucky\' requires a theory of what \'deserved\' means.' },
    { speaker: 'Analyst 1', speakerColor: 'orange', text: 'Fair. My thesis is specifically that they underperformed their expected output — not a moral claim about deserving.' },
    { speaker: 'Analyst 2', speakerColor: 'blue', text: 'Now I can\'t knock that down — that\'s a much more defensible claim. It holds up under scrutiny.' },
    { speaker: 'Analyst 1', speakerColor: 'orange', text: 'Exactly. It also lets me concede the nuance without losing the argument.' },
    { speaker: 'Analyst 2', speakerColor: 'blue', text: 'That\'s the move — concede the complexity, shore up the core thesis. Good argumentation.' },
  ],

  matchingExercise: [
    { word: 'Thesis', definition: 'The central claim of an argument — the one thing you are trying to prove' },
    { word: 'Counterargument', definition: 'The strongest opposing view — the best case that could be made against your thesis' },
    { word: 'Premise', definition: 'The foundational assumption that an argument depends on to function' },
    { word: 'Rebuttal', definition: 'A response that specifically contradicts and disproves a counterargument' },
    { word: 'Concession', definition: 'Acknowledging that part of the opposing argument is valid before showing it doesn\'t change your conclusion' },
    { word: 'Strawman', definition: 'A weak or distorted version of the opposing argument used to avoid engaging with the real objection' },
    { word: 'Nuance', definition: 'The subtle distinctions and complexity that honest analysis must acknowledge' },
    { word: 'Conviction', definition: 'The strength and confidence with which you hold and express a position' },
  ],

  fillBlankExercise: [
    { before: 'She', answer: 'pre-empted', after: 'the obvious objection about sample size by addressing it in paragraph two.' },
    { before: 'The thesis', answer: 'holds up under', after: 'scrutiny — every counterargument leads back to the same problem.' },
    { before: 'He', answer: 'shored up', after: 'the vulnerable section of his argument with a second supporting data source.' },
    { before: 'I can', answer: 'pick holes in', after: 'that premise — possession and winning are not as correlated as you think.' },
    { before: 'The entire argument', answer: 'rests on', after: 'the assumption that xG is a reliable predictor of future performance.' },
    { before: 'While it is true that possession was dominant,', answer: 'the more significant', after: 'measure is what was done with it — and there, City fell short.' },
    { before: 'Even granting that the referee made errors,', answer: 'the underlying', after: 'performance of 0.4 xG cannot be explained by one decision.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the "strawman fallacy" in argumentation?',
      options: ['Arguing against a weak or distorted version of the opposing view rather than the actual claim being made', 'Using emotional language to make an argument seem stronger than the evidence supports', 'Repeating the same point in multiple ways to give the impression of more evidence'],
      correctIndex: 0,
    },
    {
      question: 'Why should you concede the strongest — not the weakest — version of the counterargument?',
      options: ['Conceding the strongest version shows you have engaged honestly — conceding a weak version looks like you\'re avoiding the real challenge', 'Conceding the strongest version gives you more material to rebut and makes your piece longer', 'Conceding a weak version is actually better because it is easier to defeat convincingly'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "She ___ the obvious objection by addressing it in paragraph two — before anyone could raise it."',
      options: ['pre-empted', 'shored up', 'knocked down'],
      correctIndex: 0,
    },
    {
      question: 'What does it mean to "pick holes in a premise"?',
      options: ['To identify and challenge the foundational assumption an argument depends on — to show that the argument cannot function without something that is itself questionable', 'To find grammatical errors and imprecise language in an analytical piece', 'To add additional data that complicates a simple argument'],
      correctIndex: 0,
    },
    {
      question: 'What are the three layers of a sophisticated argument?',
      options: ['The primary claim (thesis), the supporting evidence, and the nuance (complications that honest analysis must acknowledge)', 'Introduction, body, and conclusion — the standard essay structure applied to analytical writing', 'Data, interpretation, and recommendation — the three stages of any data-driven analysis'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence about argumentation.',
    items: [
      {
        sentence: 'I accept that the referee missed a penalty — but that does not ___ for a performance that produced only 0.4 xG.',
        options: ['account', 'argue', 'rest'],
        correctIndex: 0,
        explanation: '"Account for" means to explain or justify — the point is that the referee error alone is not enough to explain the whole performance.',
      },
      {
        sentence: 'She ___ up the weakest section of her argument by bringing in a second supporting data source.',
        options: ['shored', 'picked', 'knocked'],
        correctIndex: 0,
        explanation: '"Shore up" means to strengthen or reinforce something that might otherwise be vulnerable — to support a weak point in an argument.',
      },
      {
        sentence: 'The counterargument does not ___ up under scrutiny — it rests on a premise the data contradicts.',
        options: ['hold', 'pick', 'rest'],
        correctIndex: 0,
        explanation: '"Hold up under" means to remain valid when challenged — the test every good argument must pass.',
      },
      {
        sentence: 'The whole argument ___ on the assumption that possession is the best proxy for dominance.',
        options: ['rests', 'holds', 'shores'],
        correctIndex: 0,
        explanation: '"Rest on" means to depend on — what an argument is built on. Challenge the foundation and the argument above it collapses.',
      },
      {
        sentence: 'Even ___ that the injury disrupted their shape, the defensive numbers had been declining for six weeks before the match.',
        options: ['granting', 'conceding', 'accepting'],
        correctIndex: 0,
        explanation: '"Even granting that" is the strongest concession structure — acknowledging something is true while showing the conclusion does not follow from it.',
      },
      {
        sentence: 'Engaging with the ___ directly makes your argument stronger — ignoring it suggests you don\'t know it exists.',
        options: ['counterargument', 'rebuttal', 'premise'],
        correctIndex: 0,
        explanation: 'The counterargument is the opposing view — engaging with it directly, rather than ignoring it, is what makes sophisticated analysis credible.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are in an analytical debate about a football match. Choose the most sophisticated response.',
      items: [
        {
          customerLine: '"City only won because the referee made two wrong decisions."',
          options: [
            '"I accept that the referee made errors — that\'s documented. But even granting both decisions went against the opposition, City\'s xG was 2.1 to 0.4 across ninety minutes. The performance was dominant regardless of the decisions."',
            '"That\'s just an excuse — City were clearly the better team and deserved to win."',
            '"You\'re absolutely right — the referee changed the entire outcome of the match."',
          ],
          correctIndex: 0,
          explanation: 'The best response uses the concession-rebuttal structure: acknowledge the real point, then show why the underlying evidence doesn\'t change the conclusion.',
        },
        {
          customerLine: '"Possession percentage proves City controlled the game."',
          options: [
            '"I can pick holes in that premise — possession and winning are only moderately correlated. The more useful question is what they did with possession in dangerous areas."',
            '"Yes, possession percentage is the clearest indicator of dominance — it\'s impossible to argue against."',
            '"Possession is irrelevant — only goals matter, and City scored more."',
          ],
          correctIndex: 0,
          explanation: 'Challenging the premise — showing that possession percentage is a weak foundation — is more sophisticated than either accepting or dismissing the claim outright.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the argumentation error in this analyst\'s approach.',
      dialogue: [
        { speaker: 'Analyst', speakerColor: 'orange', text: 'My thesis is that City were lucky.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'The counterargument is that some people think City were absolutely terrible and didn\'t deserve anything — but that\'s obviously wrong.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'I\'ve knocked down that counterargument easily, so my original thesis must be right.' },
        { speaker: 'Analyst', speakerColor: 'orange', text: 'I\'m not going to engage with the xG data because it\'s complicated and not everyone understands it.' },
        { speaker: 'Editor', speakerColor: 'purple', text: 'There are a couple of problems with that approach.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'The counterargument is that some people think City were absolutely terrible and didn\'t deserve anything — but that\'s obviously wrong.',
          correction: 'The strongest counterargument is not "City were terrible" — nobody serious is claiming that. The strongest counterargument is: "City\'s xG advantage reflects genuine tactical superiority, not luck — their high pressing forced the low-quality chances against them." Engage with that. Knocking down a position nobody holds proves nothing.',
          explanation: 'This is the strawman fallacy: arguing against a weak, distorted version of the opposing view rather than the actual strongest case. It looks like easy victory but proves nothing. Always identify and engage with the most compelling version of the counterargument.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the analytical argument at C2 level.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'While it is true that possession was dominant across the ninety minutes, the more significant question is...',
          suggestedCompletion: 'what happened with that possession in the final third. City held the ball well in their own half — but their entries into dangerous areas were consistently blocked. The possession statistics flatter a performance that created very little of substance.',
        },
        {
          customerLine: '',
          salespersonStart: 'I accept the referee errors were real and consequential — but even granting both decisions...',
          suggestedCompletion: 'the underlying performance still only generated 0.4 xG in ninety minutes. That is a structural problem — not a product of two incidents. The referee errors are a real grievance. They are not a sufficient explanation.',
        },
        {
          customerLine: '',
          salespersonStart: 'The counterargument rests on the premise that xG is a reliable predictor of single-match outcomes — and I can pick holes in that because...',
          suggestedCompletion: 'single-match xG has a high variance. Over one match, a team can generate 2.0 xG and score zero, or generate 0.5 and score two. The premise holds over large samples — not for individual games. Build a one-match argument on xG and the premise does not hold.',
        },
      ],
    },
  },
};

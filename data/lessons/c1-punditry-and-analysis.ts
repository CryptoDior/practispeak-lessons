import { Lesson } from '@/types/lesson';

export const c1PunditryAndAnalysis: Lesson = {
  slug: 'c1-punditry-and-analysis',
  title: 'Punditry and Analysis',
  subtitle: 'Unit 3 — Broadcast & Journalism',
  level: 'C1-C2',
  description: 'Football pundits do more than share opinions — they construct arguments, use evidence, and balance conviction with humility. Learn how pundits differ from commentators, and how to discuss football analytically in English.',
  heroImage: '/images/punditry-analysis.png',

  warmUp: {
    questions: [
      'What is the difference between a football commentator and a pundit? What does each one do?',
      'How do you tell the difference between a pundit stating a fact and stating an opinion?',
      'Have you ever strongly disagreed with a pundit\'s analysis? What was wrong with their argument?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Epistemic modality — expressing degrees of certainty',
    description: 'Pundits rarely say things are absolutely certain — they express degrees of confidence using modal verbs. This is called epistemic modality. Strong certainty: "That must be a penalty." High probability: "That should have been a red card." Possibility: "He might have seen the ball late." Speculation: "They could have set up differently." The modal verb you choose signals how confident you are. Choosing the right modal makes you sound analytical, not just opinionated.',
    positiveExamples: [
      { sentence: 'That must have been a red card — the referee had a clear view.', note: '"must" = very high certainty based on evidence' },
      { sentence: 'He might have been unsighted — it\'s hard to say from this angle.', note: '"might" = possibility, not certainty — shows analytical caution' },
      { sentence: 'They should have sat deeper in the second half — that would have protected the lead.', note: '"should have" = judgement about a better decision not taken' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'PUNDIT',
      partOfSpeech: 'noun',
      definition: 'A person who gives their expert opinion on football — usually on TV, radio, or online. Good pundits combine knowledge with clear communication.',
      example: '"The panel of pundits disagreed sharply about whether the penalty decision was correct."',
      imageSlug: '/images/c1-punditry-and-analysis-pundit.png',
    },
    {
      word: 'VERDICT',
      partOfSpeech: 'noun',
      definition: 'A final judgement or conclusion — what the pundit decides after analysing an event. A verdict is stated with conviction.',
      example: '"My verdict is simple — they were the better team and they deserved to win."',
      imageSlug: '/images/c1-punditry-and-analysis-verdict.png',
    },
    {
      word: 'DISSECT',
      partOfSpeech: 'verb',
      definition: 'To analyse something in detail by breaking it into parts — like a surgeon examining each piece carefully.',
      example: '"Let\'s dissect the goal — who made the run, who played the pass, and where the defence went wrong."',
      imageSlug: '/images/dissect.png',
    },
    {
      word: 'CONVICTION',
      partOfSpeech: 'noun',
      definition: 'Strong belief in what you are saying — stating your opinion with confidence and certainty.',
      example: '"She delivered her verdict with total conviction — there was no doubt in her voice at all."',
      imageSlug: '/images/conviction.png',
    },
    {
      word: 'CONJECTURE',
      partOfSpeech: 'noun',
      definition: 'An opinion formed without enough evidence — a guess presented as if it might be true.',
      example: '"That\'s pure conjecture — we don\'t know what the manager said at half-time."',
      imageSlug: '/images/conjecture.png',
    },
    {
      word: 'AUTHORITATIVE',
      partOfSpeech: 'adjective',
      definition: 'Confident, knowledgeable, and trusted — an authoritative pundit sounds like they really know what they are talking about.',
      example: '"His analysis was authoritative — specific, calm, and backed by clear evidence from the game."',
      imageSlug: '/images/authoritative.png',
    },
    {
      word: 'INFERENCE',
      partOfSpeech: 'noun',
      definition: 'A conclusion reached by reasoning from evidence — what you work out from what you see, not what is directly stated.',
      example: '"My inference from the tactical shape is that they set up specifically to stop the striker receiving in behind."',
      imageSlug: '/images/c1-punditry-and-analysis-inference.png',
    },
    {
      word: 'HEDGING',
      partOfSpeech: 'noun',
      definition: 'Using careful language to qualify your opinion — not committing fully to something you are not sure about.',
      example: '"Good analysts use hedging — they say \'it appears\' or \'it seems\' rather than presenting opinions as facts."',
      imageSlug: '/images/hedging.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'BACK UP',
      definition: 'To support an opinion with evidence — to provide proof or data that confirms what you have said.',
      example: '"He backed up his verdict with specific data — the heat map, the touch locations, the pressing stats."',
      imageSlug: '/images/back-up-pundit.png',
    },
    {
      phrase: 'PICK APART',
      definition: 'To examine something very carefully and identify all its weaknesses — to critique something piece by piece.',
      example: '"Let me pick apart the defensive shape — because there are three specific problems I want to highlight."',
      imageSlug: '/images/pick-apart.png',
    },
    {
      phrase: 'COME DOWN TO',
      definition: 'To reduce to the most important point — when you simplify a complex argument to its essential conclusion.',
      example: '"It comes down to this — they created more chances and they took them. That\'s why they won."',
      imageSlug: '/images/c1-punditry-and-analysis-come-down-to.png',
    },
    {
      phrase: 'WEIGH UP',
      definition: 'To consider all the evidence carefully before reaching a conclusion — to balance different factors.',
      example: '"When you weigh up all the evidence — the chances, the xG, the possession — City were clearly the better team."',
      imageSlug: '/images/c1-punditry-and-analysis-weigh-up.png',
    },
    {
      phrase: 'STAND BY',
      definition: 'To continue to support your opinion even under pressure — to not change your view when challenged.',
      example: '"I stand by my original verdict — that was a penalty, regardless of what the referee decided."',
      imageSlug: '/images/stand-by-pundit.png',
    },
    {
      phrase: 'TALK THROUGH',
      definition: 'To explain something step by step — to guide the audience through your reasoning from start to finish.',
      example: '"Let me talk you through exactly what happened in those crucial three minutes before half-time."',
      imageSlug: '/images/talk-through.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key punditry moments — learn the language for each type of analysis.',
    items: [
      {
        cue: 'Stating an opinion with conviction',
        meaning: 'A pundit who hedges everything sounds uncertain and unconvincing. The best pundits state their view clearly and then back it up — conviction first, evidence second.',
        usage: '"My verdict on tonight\'s match is simple — United were the better team by a significant distance. Let me show you why." Strong opening statement + evidence = authoritative punditry.',
        imageSlug: 'otp-conviction',
      },
      {
        cue: 'Dissecting a goal',
        meaning: 'When analysing a goal, pundits work backwards from the ball entering the net — identifying the first mistake, the movement, the pass, and the finish.',
        usage: '"Let\'s dissect the goal. Watch the right-back — he pushes up far too high. That creates the space in behind. Now watch the striker\'s run — he\'s already moving before the ball is played. The pass is perfect, but the mistake started fifteen seconds earlier."',
        imageSlug: 'otp-dissect-goal',
      },
      {
        cue: 'The opinion versus fact distinction',
        meaning: 'Pundits must be clear about what is fact and what is opinion. Confusing the two makes analysis sound either arrogant or sloppy.',
        usage: '"The fact is — they had an xG of 2.1 and their opponents had 0.4. That\'s not opinion, that\'s the data. My opinion is that they should have won by more — but that\'s an inference from what I saw, not a provable fact."',
        imageSlug: 'otp-opinion-fact',
      },
      {
        cue: 'Disagreeing respectfully with another pundit',
        meaning: 'On panel shows, pundits disagree. The best disagreements are specific, respectful, and based on evidence — not personal.',
        usage: '"I hear what you\'re saying — and I agree on the defensive shape. But I\'d push back on the goalkeeping. I thought he could have done better on the second goal. Watch his positioning here — he\'s too narrow for a shot from that angle."',
        imageSlug: 'otp-disagree-pundit',
      },
      {
        cue: 'Using hedging language for uncertainty',
        meaning: 'When a pundit is not sure about something — a referee\'s decision, a player\'s intention, a tactical instruction — they use hedging language to qualify their statement.',
        usage: '"It\'s difficult to say from this angle, but it might have clipped his arm. I\'m not certain, and I wouldn\'t want to be definitive about it — but from where I\'m sitting, it appears there is contact." Hedging shows honesty, not weakness.',
        imageSlug: 'otp-hedging',
      },
      {
        cue: 'Closing with a verdict',
        meaning: 'Every pundit piece needs a clear conclusion — a verdict that ties everything together. The verdict should be confident but fair.',
        usage: '"When you weigh it all up — the chances, the energy, the performance without the ball — it comes down to this: City were the better team tonight and deserved to win. The scoreline is fair." Short. Clear. Definitive.',
        imageSlug: 'otp-verdict',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Host', speakerColor: 'purple', text: 'Right — let\'s get your verdicts. Was that a penalty?' },
    { speaker: 'Pundit 1', speakerColor: 'orange', text: 'My verdict — yes. Clear contact on the arm. The referee must have seen it.' },
    { speaker: 'Pundit 2', speakerColor: 'blue', text: 'I\'d push back on that. It might have caught the arm but his arm was in a natural position. I don\'t think that\'s always a penalty.' },
    { speaker: 'Pundit 1', speakerColor: 'orange', text: 'I hear you — but watch the angle from behind. You can see the contact clearly. I\'m standing by my verdict.' },
    { speaker: 'Host', speakerColor: 'purple', text: 'Let\'s dissect the goal that followed. What went wrong defensively?' },
    { speaker: 'Pundit 2', speakerColor: 'blue', text: 'It comes down to the right-back. He\'s pushed too high and left that channel completely open. That\'s the first mistake.' },
    { speaker: 'Pundit 1', speakerColor: 'orange', text: 'Agreed — and when you weigh up the whole first half, their defensive shape was consistently too high. It was only a matter of time.' },
    { speaker: 'Host', speakerColor: 'purple', text: 'Final verdict on the match — one word each.' },
  ],

  matchingExercise: [
    { word: 'Pundit', definition: 'An expert who gives their opinion on football, usually on TV or radio' },
    { word: 'Verdict', definition: 'A final judgement or conclusion stated with confidence' },
    { word: 'Dissect', definition: 'To analyse in detail by breaking something into its component parts' },
    { word: 'Conviction', definition: 'Strong belief stated with confidence and certainty' },
    { word: 'Conjecture', definition: 'An opinion formed without sufficient evidence — an educated guess' },
    { word: 'Authoritative', definition: 'Sounding confident, knowledgeable, and trustworthy' },
    { word: 'Inference', definition: 'A conclusion reached by reasoning from evidence — working something out' },
    { word: 'Hedging', definition: 'Using careful language to avoid committing fully to an uncertain opinion' },
  ],

  fillBlankExercise: [
    { before: 'My', answer: 'verdict', after: 'is simple — they were the better team and they deserved to win.' },
    { before: 'She delivered her analysis with total', answer: 'conviction', after: '— there was no doubt in her voice.' },
    { before: 'He', answer: 'backed up', after: 'his verdict with specific data — the heat map and pressing stats.' },
    { before: 'Let me', answer: 'pick apart', after: 'the defensive shape — there are three specific problems here.' },
    { before: 'When you', answer: 'weigh up', after: 'all the evidence, City were clearly the better team.' },
    { before: 'It', answer: 'comes down to', after: 'this — they created more chances. That\'s why they won.' },
    { before: 'That\'s pure', answer: 'conjecture', after: '— we don\'t actually know what the manager said at half-time.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does "epistemic modality" help a pundit express?',
      options: ['Different degrees of certainty — from strong conviction to careful speculation', 'The emotional reaction to a goal or controversial decision', 'The technical tactical vocabulary used to describe formations'],
      correctIndex: 0,
    },
    {
      question: 'What is the difference between a fact and a conjecture in punditry?',
      options: ['A fact is verifiable from data or video; a conjecture is an opinion presented without evidence', 'A fact is always correct; a conjecture is always wrong', 'A fact comes from the commentator; a conjecture comes from the pundit'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "Let me ___ apart the defensive shape — there are three specific problems."',
      options: ['pick', 'break', 'talk'],
      correctIndex: 0,
    },
    {
      question: 'Why is hedging a sign of good punditry rather than weakness?',
      options: ['It shows the pundit is honest about the limits of their knowledge and not overconfident', 'It means the pundit doesn\'t have enough experience to give a firm opinion', 'It makes the pundit sound more exciting and less boring'],
      correctIndex: 0,
    },
    {
      question: 'Which sentence uses the correct modal for expressing a past judgement?',
      options: ['"They should have sat deeper in the second half — that would have protected the lead."', '"They must sit deeper in the second half — that will protect the lead."', '"They might sit deeper in the second half — that protects the lead."'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each punditry sentence.',
    items: [
      {
        sentence: 'That ___ have been a red card — the referee had a clear view of the incident.',
        options: ['must', 'might', 'could'],
        correctIndex: 0,
        explanation: '"Must" expresses very high certainty based on clear evidence — the strongest epistemic modal.',
      },
      {
        sentence: 'Let me talk you ___ exactly what happened in those three minutes before half-time.',
        options: ['through', 'apart', 'down'],
        correctIndex: 0,
        explanation: '"Talk through" means to explain step by step — guiding the audience through your reasoning.',
      },
      {
        sentence: 'I ___ by my original verdict — that was a penalty, regardless of the referee\'s decision.',
        options: ['stand', 'come', 'back'],
        correctIndex: 0,
        explanation: '"Stand by" means to continue supporting your opinion even under pressure or challenge.',
      },
      {
        sentence: 'It ___ down to one thing — they took their chances and United didn\'t.',
        options: ['comes', 'picks', 'weighs'],
        correctIndex: 0,
        explanation: '"Come down to" means to reduce to the most essential point — the core conclusion.',
      },
      {
        sentence: 'That is pure ___ — we have no idea what the manager said in the dressing room.',
        options: ['conjecture', 'verdict', 'inference'],
        correctIndex: 0,
        explanation: 'Conjecture is an opinion formed without evidence — used when you are speculating, not analysing.',
      },
      {
        sentence: 'His analysis was ___ — specific, calm, and backed by clear evidence from the game.',
        options: ['authoritative', 'evocative', 'speculative'],
        correctIndex: 0,
        explanation: 'Authoritative means sounding confident, knowledgeable, and trusted by the audience.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are a pundit on a panel show. Choose the most effective analytical response.',
      items: [
        {
          customerLine: '"Was that a red card or not? Give me your verdict."',
          options: [
            '"My verdict — yes. Clear contact, straight red. The data backs this up — it\'s a tackle from behind with no attempt to play the ball. I\'m standing by that."',
            '"It\'s really hard to say — it could be a red card or it might not be, I\'m not sure honestly."',
            '"The referee made a terrible mistake and should be sacked immediately for that decision."',
          ],
          correctIndex: 0,
          explanation: 'Good punditry states the verdict clearly, backs it up with evidence, and holds the position with conviction.',
        },
        {
          customerLine: 'Another pundit says: "United were easily the better team tonight."',
          options: [
            '"I hear what you\'re saying — and they had more of the ball. But when you weigh up the xG — 1.8 to 0.6 in City\'s favour — I\'d push back on \'easily\'."',
            '"You\'re completely wrong — that is a ridiculous thing to say."',
            '"I agree with everything you said — United were clearly the better team by a long distance."',
          ],
          correctIndex: 0,
          explanation: 'Good disagreement is specific, respectful, and evidence-based. Acknowledge what\'s right, then challenge with data.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the analytical mistake in this pundit\'s statement.',
      dialogue: [
        { speaker: 'Host', speakerColor: 'purple', text: 'Was that a foul in the build-up to the goal?' },
        { speaker: 'Pundit', speakerColor: 'orange', text: 'Definitely. One hundred percent a foul. No question about it.' },
        { speaker: 'Pundit', speakerColor: 'orange', text: 'And I know for a fact that the manager told the players to target that defender at set pieces.' },
        { speaker: 'Pundit', speakerColor: 'orange', text: 'His verdict: the referee was wrong, the goal should stand, and City are champions.' },
        { speaker: 'Host', speakerColor: 'purple', text: 'Strong words. We\'ll take a quick break.' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'I know for a fact that the manager told the players to target that defender at set pieces.',
          correction: 'My inference from the three set pieces they ran to that area is that they may have specifically targeted that defender.',
          explanation: 'A pundit cannot "know for a fact" what was said in a private team talk. This is conjecture presented as fact — a serious analytical error. The correct approach is to use hedging: "my inference is" or "it appears they may have".',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the pundit\'s analysis in a clear, evidence-based way.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'My verdict on the first half is clear — City were the better team, and here\'s why...',
          suggestedCompletion: 'they had an xG of 1.6, their pressing was relentless, and they created four big chances to United\'s one. The scoreline of 1-0 flatters United significantly.',
        },
        {
          customerLine: '',
          salespersonStart: 'I\'d push back on that — I don\'t think it was a red card, because...',
          suggestedCompletion: 'there was a genuine attempt to play the ball, the contact was minimal, and the defender got the ball first. A yellow card would have been sufficient.',
        },
        {
          customerLine: '',
          salespersonStart: 'When you weigh up all the evidence from this match, it comes down to...',
          suggestedCompletion: 'one simple thing: City took their chances and United didn\'t. That\'s the whole story. The xG, the possession, the pressing — it all points to the same conclusion.',
        },
      ],
    },
  },
};

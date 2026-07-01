import { Lesson } from '@/types/lesson';

export const c1VarAndTechnology: Lesson = {
  slug: 'c1-var-and-technology',
  title: 'VAR and Technology',
  subtitle: 'Unit 4 — Football Business & Politics',
  level: 'C1-C2',
  description: 'Video Assistant Referee technology changed football — but not in the way its architects intended. Learn the vocabulary and arguments for discussing technology, officiating, and what fairness really means in modern football.',
  heroImage: '/images/var-technology.png',

  warmUp: {
    questions: [
      'What is your general feeling about VAR? Does it make football more or less enjoyable to watch?',
      'Can you think of a VAR decision that seemed technically correct but felt deeply wrong? What happened?',
      'What does "fairness" mean in football? Is it the same as "correctness"?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Concession clauses — acknowledging the opposing argument',
    description: 'The VAR debate is genuinely two-sided — and sophisticated analysis acknowledges both. Concession clauses let you admit the strength of the opposing argument while still holding your own position. Key structures: "While VAR has reduced clear errors..." / "Although the technology is accurate..." / "Despite the improvements in offside detection..." / "Even though the principle is sound..." + counter-argument. The concession makes your position stronger, not weaker — it shows you have considered the full picture. Avoid "but" for formal analysis — use "however" or "nevertheless" instead.',
    positiveExamples: [
      { sentence: 'While VAR has reduced the number of clear refereeing errors, it has introduced a new form of uncertainty — the marginal decision.', note: '"while" concession + counter-argument — acknowledges the benefit before identifying the problem' },
      { sentence: 'Although the technology is geometrically accurate, the question of whether millimetre-precision offside decisions represent the spirit of the rule is more complex.', note: '"although" + nuanced counter-argument — separates technical accuracy from philosophical appropriateness' },
      { sentence: 'Despite widespread criticism, VAR has demonstrably prevented some of the most obvious refereeing mistakes in the game.', note: '"despite" + concession — gives credit where it is due before adding complexity' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'VAR',
      partOfSpeech: 'abbreviation',
      definition: 'Video Assistant Referee — a system where a team of officials in a video operations centre reviews key decisions during a match.',
      example: '"The goal was disallowed after a VAR check that took three and a half minutes — by which point the stadium had fallen completely silent."',
      imageSlug: '/images/var.png',
    },
    {
      word: 'SUBJECTIVE',
      partOfSpeech: 'adjective',
      definition: 'Based on personal interpretation rather than fixed rules — matters of judgement where reasonable people can genuinely disagree.',
      example: '"Whether a challenge was reckless or not is deeply subjective — two experienced referees watching the same clip will sometimes reach opposite conclusions."',
      imageSlug: '/images/subjective.png',
    },
    {
      word: 'OBJECTIVE',
      partOfSpeech: 'adjective',
      definition: 'Based on measurable facts rather than interpretation — where technology can provide a definitive answer.',
      example: '"Whether a ball crossed the line is entirely objective — goal-line technology can measure it to within 1mm."',
      imageSlug: '/images/objective.png',
    },
    {
      word: 'MARGINAL',
      partOfSpeech: 'adjective',
      definition: 'At the very edge of a decision — extremely small differences that separate one outcome from another.',
      example: '"The disallowed goal was a marginal offside — a matter of centimetres that required a frozen frame to detect."',
      imageSlug: '/images/marginal-var.png',
    },
    {
      word: 'PROTOCOL',
      partOfSpeech: 'noun',
      definition: 'The official set of rules and procedures for how something should be done — in football, the specific rules about when VAR can intervene.',
      example: '"Under the VAR protocol, the on-field referee\'s decision can only be overturned if it is a clear and obvious error."',
      imageSlug: '/images/protocol.png',
    },
    {
      word: 'CLEAR AND OBVIOUS',
      partOfSpeech: 'phrase',
      definition: 'The legal standard for VAR intervention — decisions can only be overturned if the error is unambiguously clear, not marginal.',
      example: '"The problem is that \'clear and obvious\' has been interpreted inconsistently — some marginal decisions have been overturned while similar ones have been allowed to stand."',
      imageSlug: '/images/clear-and-obvious.png',
    },
    {
      word: 'SEMI-AUTOMATED',
      partOfSpeech: 'adjective',
      definition: 'Partially automated but still requiring human decision-making — used in systems like semi-automated offside technology where technology identifies the lines but a human confirms.',
      example: '"Semi-automated offside detection can produce a decision in 25 seconds rather than three minutes — but it still requires human sign-off."',
      imageSlug: '/images/semi-automated.png',
    },
    {
      word: 'FLOW OF THE GAME',
      partOfSpeech: 'noun',
      definition: 'The natural rhythm and continuity of a match — often cited by critics as something VAR disrupts with its lengthy review processes.',
      example: '"The concern is not just about accuracy — it\'s about the flow of the game. Three-minute VAR delays kill the emotional atmosphere in the stadium."',
      imageSlug: '/images/flow-of-game.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'REFER TO',
      definition: 'To send a decision for review by VAR — when the on-field referee asks for a check or when VAR initiates its own review.',
      example: '"The referee referred the penalty decision to VAR — who took two minutes and forty seconds to reach the same conclusion."',
      imageSlug: '/images/refer-to.png',
    },
    {
      phrase: 'OVERTURN',
      definition: 'To reverse the on-field decision — when VAR rules that the original decision was a clear and obvious error.',
      example: '"The red card was overturned after the referee was invited to review the footage on the pitchside monitor."',
      imageSlug: '/images/overturn.png',
    },
    {
      phrase: 'FLAG UP',
      definition: 'To identify and draw attention to a problem or concern — to alert someone to something that needs consideration.',
      example: '"The assistant referee flagged up a potential handball in the build-up to the goal — which triggered the VAR review."',
      imageSlug: '/images/flag-up.png',
    },
    {
      phrase: 'STAND BY',
      definition: 'To wait while a decision is reviewed — players and fans stand by as VAR examines the incident.',
      example: '"The stadium stood by in uncertain silence for nearly four minutes while the VAR team reviewed the penalty claim."',
      imageSlug: '/images/stand-by-var.png',
    },
    {
      phrase: 'DRAW THE LINE',
      definition: 'To decide where the limit is — what should and should not be within the scope of VAR review.',
      example: '"The real debate is where to draw the line — what kinds of decisions should be reviewed and which should be left to the on-field referee\'s judgement."',
      imageSlug: '/images/draw-the-line.png',
    },
    {
      phrase: 'CALL FOR',
      definition: 'To demand or request — calling for changes to VAR protocol or for the removal of the system entirely.',
      example: '"Former players are calling for major changes to how VAR operates — particularly around the time taken to make decisions."',
      imageSlug: '/images/call-for.png',
    },
  ],

  onThePitch: {
    instructions: 'The key arguments and concepts in the VAR debate — expressed at C1 level.',
    items: [
      {
        cue: 'The case for VAR',
        meaning: 'VAR was designed to eliminate clear and obvious refereeing errors — the kind that can unfairly decide matches and that replay footage makes obviously wrong.',
        usage: '"The case for VAR is clear. Before it existed, teams regularly lost important matches because of refereeing mistakes that everyone watching at home could see immediately. VAR corrects those errors. The 2018 World Cup — the first major tournament to use it comprehensively — had fewer match-deciding refereeing errors than any previous edition." Start the VAR debate by giving the strongest argument for it.',
        imageSlug: 'otp-case-for-var',
      },
      {
        cue: 'The case against VAR',
        meaning: 'VAR has failed because of the margin of error in how it is applied — particularly with marginal offside decisions and inconsistent application of the clear and obvious standard.',
        usage: '"While VAR has reduced clear errors, it has introduced new problems. First: the time delays destroy the flow of the game and the stadium atmosphere. Second: the marginal offside decisions — where an armpit or toenail is flagged using lines with acknowledged margins of error — create a different kind of injustice. Third: the subjective decisions — handball, foul play — are now inconsistently reviewed and still subjective. VAR hasn\'t made football fairer. It has made it different." This is the strongest critique.',
        imageSlug: 'otp-case-against-var',
      },
      {
        cue: 'The objective/subjective distinction',
        meaning: 'Technology works perfectly for objective questions — did the ball cross the line? — and poorly for subjective ones — was that a foul? This distinction explains why goal-line technology is uncontroversial while VAR for fouls is not.',
        usage: '"Goal-line technology is uncontroversial because the question it answers — did the ball cross the line — is entirely objective. There is a correct answer and technology finds it. VAR applied to fouls is different — because whether a challenge was reckless, careless, or not a foul at all is a matter of judgement. Technology can give you a better view. It cannot make the judgement for you."',
        imageSlug: 'otp-objective-subjective',
      },
      {
        cue: 'The clear and obvious standard — and how it has been violated',
        meaning: 'The original VAR protocol said only clear and obvious errors should be overturned. In practice, this standard has been applied inconsistently — with some marginal decisions overturned and others not.',
        usage: '"The clear and obvious standard was the right principle — but the application has been the problem. When a marginal offside with a two-centimetre line is overturned, that is not a clear and obvious error. That is a marginal decision made with imperfect technology. The system has exceeded its original mandate, and that is where it has lost public trust."',
        imageSlug: 'otp-clear-obvious',
      },
      {
        cue: 'Semi-automated offside — the improvement',
        meaning: 'Semi-automated offside technology uses AI-driven body-part tracking to produce faster decisions. It reduces the time delays that have been the most visible problem with VAR.',
        usage: '"Semi-automated offside technology addresses the biggest complaint about VAR — the time. Where traditional VAR took three to four minutes to draw offside lines, semi-automated technology produces a decision in 25 seconds. The accuracy is similar, but the speed is transformative for the atmosphere. The argument is that speed reduces the damage to the flow of the game, even if the decisions themselves are not significantly more accurate."',
        imageSlug: 'otp-semi-automated',
      },
      {
        cue: 'Where to draw the line',
        meaning: 'The fundamental VAR debate is about scope — what should and should not be reviewed. Different sports have made different choices about where to draw the line.',
        usage: '"Cricket uses technology to review edge catches and run-outs — entirely objective questions. Rugby union reviews whether a try was scored cleanly — mostly objective. Football tried to extend VAR to subjective decisions — fouls, handballs — and that is where it has struggled. The lesson from other sports is: draw the line at objective questions and leave the subjective ones to the on-field official." This is the most practically constructive position in the debate.',
        imageSlug: 'otp-draw-line',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Host', speakerColor: 'purple', text: 'Four minutes of VAR review — and the goal stands. What do you make of that?' },
    { speaker: 'Pundit 1', speakerColor: 'orange', text: 'Four minutes is unacceptable. The flow of the game is destroyed. The crowd doesn\'t know what to do.' },
    { speaker: 'Pundit 2', speakerColor: 'blue', text: 'Although I understand that — while VAR has issues, it did get this decision right. The handball was clear.' },
    { speaker: 'Pundit 1', speakerColor: 'orange', text: 'Clear? The ball was moving at 80 miles per hour. How can you call that intentional?' },
    { speaker: 'Host', speakerColor: 'purple', text: 'That\'s the fundamental problem — isn\'t it? Some VAR decisions are objective, some are subjective.' },
    { speaker: 'Pundit 2', speakerColor: 'blue', text: 'Exactly. Goal-line technology is uncontroversial — it answers an objective question. Handball is not objective. VAR can\'t solve that.' },
    { speaker: 'Pundit 1', speakerColor: 'orange', text: 'And the marginal offsides — a frozen frame, millimetre lines, a three-minute delay — that is not what football is for.' },
    { speaker: 'Host', speakerColor: 'purple', text: 'Where do you draw the line, then?' },
  ],

  matchingExercise: [
    { word: 'VAR', definition: 'Video Assistant Referee — a system reviewing key decisions using video footage' },
    { word: 'Subjective', definition: 'Based on personal interpretation and judgement — where reasonable people can disagree' },
    { word: 'Objective', definition: 'Based on measurable facts where technology can provide a definitive answer' },
    { word: 'Marginal', definition: 'At the very edge of a decision — extremely small differences determining the outcome' },
    { word: 'Protocol', definition: 'The official set of rules about when and how VAR can intervene' },
    { word: 'Clear and obvious', definition: 'The standard required for VAR to overturn an on-field decision' },
    { word: 'Semi-automated', definition: 'Partly automated — technology identifies data points but a human confirms the decision' },
    { word: 'Flow of the game', definition: 'The natural rhythm and continuity of a match that lengthy reviews disrupt' },
  ],

  fillBlankExercise: [
    { before: 'The red card was', answer: 'overturned', after: 'after the referee reviewed the footage on the pitchside monitor.' },
    { before: 'Former players are', answer: 'calling for', after: 'major changes to how VAR operates and is applied.' },
    { before: 'The real debate is where to', answer: 'draw the line', after: '— what decisions should and should not be reviewed.' },
    { before: 'The goal was disallowed after a VAR check that took three and a half minutes,', answer: 'referring to', after: 'an offside decision of under two centimetres.' },
    { before: 'Although the technology is accurate,', answer: 'subjective', after: 'decisions like fouls still require human judgement — not just a better camera angle.' },
    { before: 'The stadium stood', answer: 'by', after: 'in uncertain silence for nearly four minutes while VAR reviewed the incident.' },
    { before: 'Under the VAR', answer: 'protocol', after: ', decisions can only be overturned if the error is clear and obvious.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Why is goal-line technology uncontroversial while VAR for handballs is not?',
      options: ['Goal-line technology answers an objective question with a definitive answer; handball decisions require subjective human judgement that technology cannot resolve', 'Goal-line technology was introduced earlier, so people have had more time to accept it', 'Handball decisions involve much higher stakes, so people care more about getting them wrong'],
      correctIndex: 0,
    },
    {
      question: 'What does "clear and obvious" mean in VAR protocol?',
      options: ['The standard required for VAR to overturn a decision — only unambiguous, not marginal, errors should be corrected', 'A specific camera angle used by the VAR team to examine decisions in the video operations centre', 'The phrase used by the stadium announcer to explain to fans that a decision has been reviewed'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "___ VAR has reduced clear errors, it has introduced new problems with marginal decisions."',
      options: ['While', 'Because', 'Since'],
      correctIndex: 0,
    },
    {
      question: 'What is the main advantage of semi-automated offside technology?',
      options: ['It produces decisions in 25 seconds rather than three to four minutes — dramatically reducing the time delays that disrupt the game', 'It is more accurate than traditional VAR by a factor of ten — making offside decisions completely error-free', 'It removes the need for a human official to confirm the decision — making the process fully automated'],
      correctIndex: 0,
    },
    {
      question: 'Why does the concession clause make an argument stronger rather than weaker?',
      options: ['It shows you have considered the full picture — acknowledging the opposing argument demonstrates intellectual honesty and makes your own position more credible', 'It fills more time in a discussion, giving the speaker more opportunities to make additional points', 'It confuses the opponent and prevents them from building a strong counter-argument'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence in the VAR debate.',
    items: [
      {
        sentence: '___ VAR has reduced obvious errors, it has created new problems — particularly around marginal offside decisions.',
        options: ['While', 'Because', 'Before'],
        correctIndex: 0,
        explanation: '"While" introduces a concession clause — acknowledging something true before introducing a counter-argument.',
      },
      {
        sentence: 'The goal was reviewed after the assistant referee ___ up a potential handball in the build-up.',
        options: ['flagged', 'stood', 'called'],
        correctIndex: 0,
        explanation: '"Flag up" means to identify and draw attention to a potential problem — here, alerting the VAR team to check the incident.',
      },
      {
        sentence: 'The red card was ___ after the referee was invited to review the footage on the monitor.',
        options: ['overturned', 'referred', 'flagged'],
        correctIndex: 0,
        explanation: '"Overturn" means to reverse the original decision — VAR found it was a clear and obvious error.',
      },
      {
        sentence: 'The real debate is where to ___ the line — which decisions should be subject to review.',
        options: ['draw', 'call', 'flag'],
        correctIndex: 0,
        explanation: '"Draw the line" means to decide on a limit — what should and should not be within the scope of VAR review.',
      },
      {
        sentence: 'Whether a challenge was reckless or not is deeply ___ — two referees watching the same clip may disagree.',
        options: ['subjective', 'objective', 'marginal'],
        correctIndex: 0,
        explanation: 'Subjective means based on personal interpretation — where there is no single correct answer, only judgements.',
      },
      {
        sentence: 'The concern is not just accuracy — it\'s about the ___ of the game and the emotional atmosphere.',
        options: ['flow', 'protocol', 'standard'],
        correctIndex: 0,
        explanation: '"Flow of the game" refers to the natural rhythm and continuity that lengthy VAR reviews disrupt.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are debating VAR. Choose the most analytically sophisticated response.',
      items: [
        {
          customerLine: '"VAR should be completely abolished — it ruins football."',
          options: [
            '"While I understand the frustration — particularly with the delays and marginal offsides — abolishing it entirely would mean accepting refereeing errors we can see and correct. A better approach would be to restrict VAR to objective decisions and set stricter time limits."',
            '"I completely agree — VAR has destroyed football and should be removed immediately."',
            '"VAR works perfectly — the problem is just that people don\'t understand technology."',
          ],
          correctIndex: 0,
          explanation: 'The best response uses a concession clause (acknowledging the frustration), then offers a constructive middle position — neither dismissing VAR entirely nor defending it uncritically.',
        },
        {
          customerLine: '"Technology always produces the correct answer in football — that\'s the whole point of VAR."',
          options: [
            '"Technology produces accurate measurements — but accurate measurement of a subjective decision is still a subjective decision. VAR can show you a better camera angle of a foul, but it can\'t tell you whether it was intentional."',
            '"Yes, that\'s true — technology is always more reliable than a human referee\'s judgement."',
            '"Technology is never reliable — referees on the pitch will always be better than any machine."',
          ],
          correctIndex: 0,
          explanation: 'This is the key insight: technology measures accurately, but measuring something accurately does not resolve a question that is inherently a matter of judgement.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the logical error in this VAR argument.',
      dialogue: [
        { speaker: 'Pundit', speakerColor: 'orange', text: 'VAR is perfect because technology never makes mistakes.' },
        { speaker: 'Pundit', speakerColor: 'orange', text: 'The semi-automated offside system is completely accurate — errors are now impossible.' },
        { speaker: 'Pundit', speakerColor: 'orange', text: 'Any complaint about VAR decisions is just from fans whose team lost — sore losers who want to blame technology.' },
        { speaker: 'Pundit', speakerColor: 'orange', text: 'The three-minute delays are a small price to pay for perfect accuracy.' },
        { speaker: 'Host', speakerColor: 'purple', text: 'Strong defence of VAR there.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'VAR is perfect because technology never makes mistakes.',
          correction: 'VAR aims to reduce clear refereeing errors, but it is not perfect. The technology has known margins of error — the lines drawn in offside decisions have acknowledged uncertainty ranges. More importantly, technology cannot resolve subjective decisions: it can show a better angle of a challenge, but determining whether it was a foul still requires human judgement.',
          explanation: 'The claim that "technology never makes mistakes" is factually false — all measurement technology has error margins. More critically, even if the technology were perfectly accurate, it would still not resolve subjective decisions about foul play or handball intent. This is the most important error in the argument.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the VAR analysis at a sophisticated C1 level.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'The lesson from other sports is that technology works best in football when it answers objective questions — because...',
          suggestedCompletion: 'objective questions have correct answers that technology can find. Did the ball cross the line? Yes or no. Was the player\'s arm in front of his body when the shot was taken? Measurable. Whether a challenge was reckless or a handball intentional — those remain matters of judgement that technology can only help, not resolve.',
        },
        {
          customerLine: '',
          salespersonStart: 'Although semi-automated offside technology is faster, the deeper problem with marginal offside decisions remains because...',
          suggestedCompletion: 'speed doesn\'t address the philosophical question: should a player who is a centimetre offside — within the margin of error of any measurement system — be ruled offside? The principle of the offside rule was designed to prevent goal-hanging, not to punish players by millimetres.',
        },
        {
          customerLine: '',
          salespersonStart: 'Despite the criticism VAR receives, it is worth acknowledging that before it existed...',
          suggestedCompletion: 'there were match-deciding errors that everyone watching at home could clearly see were wrong, and that those errors went uncorrected. The problem with VAR is not its existence — it is the scope and consistency of its application. Those are fixable problems.',
        },
      ],
    },
  },
};

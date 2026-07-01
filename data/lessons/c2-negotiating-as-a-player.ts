import { Lesson } from '@/types/lesson';

export const c2NegotiatingAsAPlayer: Lesson = {
  slug: 'c2-negotiating-as-a-player',
  title: 'Negotiating as a Player',
  subtitle: 'Unit 2 — Career English',
  level: 'C1-C2',
  description: 'Contract negotiation is one of the highest-stakes English conversations a professional player will ever have. Whether dealing with a club directly or working through an agent, understanding the language of negotiation — what to ask for, how to ask for it, and how to protect your interests — is essential.',
  heroImage: '/images/player-negotiation.png',

  warmUp: {
    questions: [
      'Have you ever had to negotiate something important — a salary, a contract, or a deal? How did you approach it?',
      'What do you think gives a player the most leverage in a contract negotiation?',
      'Is there a difference between being a tough negotiator and being difficult to work with? Where is the line?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Conditional negotiation language — making and qualifying offers',
    description: 'Negotiation language relies heavily on conditional structures that allow both parties to explore positions without fully committing to them. These create space for movement without loss of face. Key patterns: "If you could offer X, I would be prepared to consider Y." / "I would be open to Z, provided that..." / "We could potentially agree on that, on the condition that..." / "That would work for me, assuming that..." The crucial function of this language is that it is exploratory — it floats an idea without making a firm commitment. You can retreat from a conditional offer much more easily than from a direct offer that was rejected. At C2 level, precision in this register separates credible negotiators from amateurs.',
    positiveExamples: [
      { sentence: 'If the base salary were closer to the figure we discussed, I would be prepared to accept the reduced performance bonus structure.', note: 'Conditional — links concession on one point to movement on another' },
      { sentence: 'I would be open to a four-year term, provided the release clause were set at a realistic market valuation.', note: '"Provided that" — sets a clear condition that must be met for the concession to apply' },
      { sentence: 'We could potentially revisit the image rights clause, on the condition that the signing fee were confirmed in writing today.', note: '"On the condition that" — adds a firm deadline which creates urgency without aggression' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'LEVERAGE',
      partOfSpeech: 'noun',
      definition: 'Power or advantage in a negotiation — what gives you the ability to push for better terms.',
      example: '"Your leverage is highest when you have competing offers. A club that knows you have another serious option on the table will move further than one that believes you have nowhere else to go."',
      imageSlug: '/images/leverage.png',
    },
    {
      word: 'CLAUSE',
      partOfSpeech: 'noun',
      definition: 'A specific condition or provision written into a contract — can protect the player or restrict them.',
      example: '"The release clause is the most important number in the contract — it sets the price at which another club can buy you out, and it needs to reflect realistic market value, not a number that traps you at the club."',
      imageSlug: '/images/clause.png',
    },
    {
      word: 'COUNTERPROPOSAL',
      partOfSpeech: 'noun',
      definition: 'A response to an offer that proposes different terms — the standard move when the first offer is not acceptable.',
      example: '"Never reject an offer without a counterproposal. Rejection closes the conversation. A counterproposal keeps it open and shows you are serious about finding an agreement."',
      imageSlug: '/images/counterproposal.png',
    },
    {
      word: 'REMUNERATION',
      partOfSpeech: 'noun',
      definition: 'Total pay and benefits — a formal term covering salary, bonuses, and other financial elements of a contract.',
      example: '"The total remuneration package includes base salary, appearance fees, performance bonuses, signing fee, and image rights — never evaluate a contract by base salary alone."',
      imageSlug: '/images/remuneration.png',
    },
    {
      word: 'VESTING',
      partOfSpeech: 'noun',
      definition: 'The process by which benefits or payments are earned over time — a contract element that ties a player to a club for a period.',
      example: '"The signing bonus had a two-year vesting schedule — if he left before the end of year two, he would have to repay the proportion not yet vested."',
      imageSlug: '/images/vesting.png',
    },
    {
      word: 'STICKING POINT',
      partOfSpeech: 'noun',
      definition: 'The specific issue in a negotiation that both sides cannot easily agree on — the main obstacle to reaching a deal.',
      example: '"The sticking point in the negotiation was the release clause — the club wanted it set at £50 million, the player\'s camp was pushing for £35 million."',
      imageSlug: '/images/sticking-point.png',
    },
    {
      word: 'MANDATE',
      partOfSpeech: 'noun',
      definition: 'Authority given to someone to act on your behalf — an agent acts within the mandate set by the player.',
      example: '"Give your agent a clear mandate before they enter the negotiation: the minimum terms you will accept, the areas where you have flexibility, and the lines you will not cross."',
      imageSlug: '/images/mandate.png',
    },
    {
      word: 'WALK AWAY POINT',
      partOfSpeech: 'noun',
      definition: 'The minimum acceptable terms — the point below which you will not sign the contract and must be prepared to walk away from the deal.',
      example: '"Know your walk-away point before you enter any negotiation. Without it, pressure in the room will push you below the minimum you should accept."',
      imageSlug: '/images/walk-away.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'HOLD OUT FOR',
      definition: 'To refuse to accept less than a specific term — to wait for the right offer rather than settling for less.',
      example: '"He held out for the release clause figure he wanted — and after three weeks, the club came back with a number that was much closer to market value."',
      imageSlug: '/images/hold-out-for.png',
    },
    {
      phrase: 'COME BACK WITH',
      definition: 'To return to the other party with a new offer or counterproposal — the normal rhythm of a negotiation.',
      example: '"The club came back with a revised offer — the base salary was unchanged but they had added a significant appearance fee and improved the signing bonus."',
      imageSlug: '/images/come-back-with.png',
    },
    {
      phrase: 'PUSH BACK ON',
      definition: 'To resist or challenge a specific element of an offer — to express disagreement and seek a better position.',
      example: '"I would push back on the image rights clause specifically — that\'s a significant commercial asset and the proposed split does not reflect current market rates."',
      imageSlug: '/images/push-back-on.png',
    },
    {
      phrase: 'TIE TO',
      definition: 'To link one condition to another — to make an agreement on one point conditional on an agreement on a different point.',
      example: '"She tied the signing fee agreement to the confirmation of the release clause figure — she would not sign off on one without the other being resolved."',
      imageSlug: '/images/tie-to.png',
    },
    {
      phrase: 'WALK AWAY FROM',
      definition: 'To leave a negotiation without reaching an agreement — to decide the terms on offer are not acceptable.',
      example: '"He was prepared to walk away from the deal if the release clause stayed at £60 million — and the club knew it, which is why they moved."',
      imageSlug: '/images/walk-away-from.png',
    },
    {
      phrase: 'SIGN OFF ON',
      definition: 'To formally approve or agree to something — to give final approval to a deal or specific term.',
      example: '"The player\'s agent would not sign off on the contract until the performance bonus structure had been clarified in writing."',
      imageSlug: '/images/sign-off-on.png',
    },
  ],

  onThePitch: {
    instructions: 'The principles and language of contract negotiation for professional football players.',
    items: [
      {
        cue: 'Know your worth before you enter the room',
        meaning: 'The most important preparation for any contract negotiation is knowing your market value — what comparable players at your level, in your position, are earning. Without this, you cannot evaluate whether an offer is fair.',
        usage: '"Before any negotiation: research comparable contracts at your level — your agent should have this data. Know your performance statistics in context. Understand where you are in your career cycle — a player at 24 with three strong seasons has different leverage than one at 29. And identify your alternatives: are there other clubs genuinely interested? Leverage is not invented in the negotiation room — it is built before you walk in."',
        imageSlug: 'otp-know-your-worth',
      },
      {
        cue: 'Never accept the first offer',
        meaning: 'The first offer in a contract negotiation is almost never the final position. Clubs expect a counterproposal — accepting the first offer signals that you undervalue yourself or that you did not prepare.',
        usage: '"The correct response to a first offer is not rejection and not acceptance — it is a counterproposal. \'Thank you for putting this together. We\'ve reviewed it and there are a few areas we\'d like to discuss. The base salary is close to where we need to be, but the release clause figure and the image rights split are both areas where we\'d want to see movement.\' Specific. Professional. It signals you are serious about reaching a deal — on your terms."',
        imageSlug: 'otp-first-offer',
      },
      {
        cue: 'The sticking points — how to handle deadlock',
        meaning: 'Every serious negotiation reaches a sticking point — an issue where neither side will easily move. The technique for breaking deadlock is to link concessions: offer movement on something they want in exchange for movement on something you want.',
        usage: '"When you reach deadlock on the release clause: \'I understand the club has a position on the release clause figure. If we could get closer to the £35 million valuation, we would be prepared to look at the vesting schedule on the signing bonus differently.\' You are not giving something for nothing — you are linking a concession on their priority to a concession on yours. That is how deadlock breaks."',
        imageSlug: 'otp-sticking-point',
      },
      {
        cue: 'Protecting your interests — the clauses that matter',
        meaning: 'Beyond salary, the clauses in a contract can have enormous long-term impact. The critical ones for players: release clause (freedom to leave), image rights (commercial earnings), performance bonuses (upside if you exceed expectations), and loyalty bonuses (retention incentive if you stay).',
        usage: '"The clauses that protect your long-term interests: Release clause — set at realistic market value, not a number that traps you. Image rights — your face and name are commercial assets; do not give them away without fair compensation. Performance bonuses — tied to metrics you control (appearances, goals, assists), not team results alone. Contract length — a longer contract gives security but reduces leverage; shorter contracts with extension options can be better for a player at 27+."',
        imageSlug: 'otp-key-clauses',
      },
      {
        cue: 'Managing the timeline — using urgency without panic',
        meaning: 'Clubs often use time pressure as a negotiating tool — a deadline, a competing bid, or an expiring offer. The counter to artificial urgency is demonstrating that you are not panicking while also not stalling indefinitely.',
        usage: '"When the club creates urgency: \'We understand there is a timeline pressure. We want to get this resolved as much as you do. But we can\'t sign off on the release clause figure as it stands — if the club can move on that specific point, we can have everything else agreed within 24 hours.\' You acknowledge the urgency, you confirm your intent to agree, but you name the one thing that must move. That is not stalling — that is clarity."',
        imageSlug: 'otp-timeline',
      },
      {
        cue: 'The walk-away — knowing when to leave',
        meaning: 'The most powerful tool in any negotiation is genuine willingness to walk away. A club that knows you will sign anything is not negotiating with you — they are processing you.',
        usage: '"Your walk-away point should be decided before you enter the negotiation — not in the room under pressure. If the club reaches your walk-away point and will not move, the statement is professional and clear: \'We have genuinely wanted to reach an agreement and I think the club knows that. But on these terms, we can\'t proceed. If the club\'s position changes, we remain open to that conversation.\' That is not a confrontation. That is professionalism."',
        imageSlug: 'otp-walk-away',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Agent', speakerColor: 'green', text: 'We\'ve reviewed the proposal and there are a couple of areas we\'d like to discuss.' },
    { speaker: 'Director', speakerColor: 'blue', text: 'Of course. What are the sticking points for you?' },
    { speaker: 'Agent', speakerColor: 'green', text: 'The base salary is close to where we need to be. The main issues are the release clause and the image rights split.' },
    { speaker: 'Director', speakerColor: 'blue', text: 'We can\'t move significantly on the release clause — £55 million is already above our standard policy.' },
    { speaker: 'Agent', speakerColor: 'green', text: 'I understand that position. If the club could move the release clause to £40 million, we would be prepared to accept the current vesting structure on the signing fee without amendment.' },
    { speaker: 'Director', speakerColor: 'blue', text: 'That\'s a significant ask.' },
    { speaker: 'Agent', speakerColor: 'green', text: 'It\'s a fair market valuation for a player of his age and output. We\'re not looking to create difficulties — we want to get this agreed. But we can\'t sign off on a release clause that traps him at a figure that doesn\'t reflect his actual value.' },
    { speaker: 'Director', speakerColor: 'blue', text: 'Let me come back to you tomorrow with a revised position on that number.' },
  ],

  matchingExercise: [
    { word: 'Leverage', definition: 'Power or advantage in a negotiation — often created by competing offers or high market demand' },
    { word: 'Clause', definition: 'A specific condition or provision written into a contract — can protect or restrict the player' },
    { word: 'Counterproposal', definition: 'A response to an offer that proposes different terms — keeps the negotiation open' },
    { word: 'Remuneration', definition: 'Total pay and benefits — covering salary, bonuses, and all financial elements' },
    { word: 'Sticking point', definition: 'The specific issue neither side can easily agree on — the main obstacle to a deal' },
    { word: 'Mandate', definition: 'Authority given to someone to act on your behalf — the boundaries you set for your agent' },
    { word: 'Walk-away point', definition: 'The minimum acceptable terms — below which you must be prepared to leave without signing' },
    { word: 'Vesting', definition: 'The process by which benefits are earned over time — ties a player to the club for a period' },
  ],

  fillBlankExercise: [
    { before: 'He', answer: 'held out for', after: 'the release clause figure he wanted — and after three weeks, the club moved closer to his valuation.' },
    { before: 'The club', answer: 'came back with', after: 'a revised offer — unchanged salary but a significantly improved signing bonus.' },
    { before: 'I would', answer: 'push back on', after: 'the image rights clause — it\'s a significant commercial asset and the proposed split is below market.' },
    { before: 'She', answer: 'tied', after: 'the signing fee agreement to the release clause confirmation — would not move on one without the other.' },
    { before: 'He was prepared to', answer: 'walk away from', after: 'the deal if the release clause stayed at £60 million.' },
    { before: 'The agent would not', answer: 'sign off on', after: 'the contract until the performance bonus structure was confirmed in writing.' },
    { before: 'Know your', answer: 'walk-away point', after: 'before you enter the room — without it, pressure will push you below what you should accept.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the correct response to a first offer in a contract negotiation?',
      options: ['A counterproposal — specifically identifying the areas where movement is needed while confirming intent to reach a deal', 'Immediate acceptance if the salary is close to your target — delaying sends a negative signal to the club', 'Rejection — you should never show enthusiasm for any offer until you have seen the final terms'],
      correctIndex: 0,
    },
    {
      question: 'What is the technique for breaking deadlock on a sticking point?',
      options: ['Link concessions — offer movement on something they want in exchange for movement on something you want', 'Increase the urgency by setting a firm deadline after which you will withdraw from the negotiation', 'Reduce your ask — coming down from your position shows good faith and usually unlocks movement from the other side'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "If the release clause ___ closer to market value, we would be prepared to agree on the vesting schedule."',
      options: ['were', 'was', 'is'],
      correctIndex: 0,
    },
    {
      question: 'Why is the release clause one of the most important contract elements for a player?',
      options: ['It sets the price at which another club can buy you out — if set too high, it traps you at the club even when better opportunities exist', 'It determines how much the club must pay you if they choose to terminate your contract early', 'It controls how much you earn from image rights and commercial deals during the contract period'],
      correctIndex: 0,
    },
    {
      question: 'What does "holding out for" a specific contract term mean?',
      options: ['Refusing to accept less than that specific term and waiting for the other party to meet it — even if the process takes longer', 'Requesting a specific term and then accepting whatever the club offers in response, having made your position clear', 'Asking for one term publicly while being privately willing to accept a much lower figure as a compromise'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each contract negotiation sentence.',
    items: [
      {
        sentence: 'If the base salary ___ closer to the figure we discussed, we would be prepared to accept the current bonus structure.',
        options: ['were', 'was', 'is'],
        correctIndex: 0,
        explanation: 'Conditional negotiation language uses the subjunctive "were" (not "was") in formal and written English — "If X were Y, I would..." This signals the exploratory, non-committal nature of the offer.',
      },
      {
        sentence: 'She ___ back on the image rights clause specifically — it\'s a significant commercial asset and the split is below market.',
        options: ['pushed', 'came', 'held'],
        correctIndex: 0,
        explanation: '"Push back on" means to resist or challenge a specific element — to express disagreement and seek a better position on that particular point.',
      },
      {
        sentence: 'He ___ out for the release clause valuation he wanted — and after three weeks, the club moved much closer to his number.',
        options: ['held', 'walked', 'pushed'],
        correctIndex: 0,
        explanation: '"Hold out for" means to refuse to accept less than a specific term — to wait for the right offer rather than settling for an inferior position.',
      },
      {
        sentence: 'Know your ___ point before you enter the room — pressure in the negotiation will push you below it if you haven\'t decided in advance.',
        options: ['walk-away', 'sticking', 'leverage'],
        correctIndex: 0,
        explanation: 'The walk-away point is the minimum acceptable terms — the figure or condition below which you must be prepared to leave the deal. It must be decided before the negotiation, not under pressure in the room.',
      },
      {
        sentence: 'Give your agent a clear ___ before they enter any negotiation — the minimum you will accept and the areas where you have flexibility.',
        options: ['mandate', 'leverage', 'clause'],
        correctIndex: 0,
        explanation: 'A mandate is the authority and boundaries you set for someone acting on your behalf — the agent can only negotiate within the limits you define.',
      },
      {
        sentence: 'We could potentially revisit the vesting schedule, ___ the condition that the release clause figure is confirmed today.',
        options: ['on', 'with', 'under'],
        correctIndex: 0,
        explanation: '"On the condition that" is the standard conditional negotiation phrase — linking a concession to a specific requirement that must be met first.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are negotiating a contract as a player. Choose the most effective approach.',
      items: [
        {
          customerLine: 'The Sporting Director says: "This is our best offer. The salary is £45,000 a week and the release clause is £60 million. We need an answer by the end of the week."',
          options: [
            '"Thank you for putting this together — we\'ve reviewed it carefully. The salary is close to where we need to be. The sticking point for us is the release clause — £60 million significantly overvalues the restriction compared to current market rates for this position and age profile. If the club could move to £38-40 million on the release clause, we could have everything else agreed within 24 hours."',
            '"This sounds good overall — can we have a few more days to think it over?"',
            '"We can\'t accept £60 million for the release clause under any circumstances — it\'s completely unacceptable and not representative of market value."',
          ],
          correctIndex: 0,
          explanation: 'The best response acknowledges the offer professionally, isolates the sticking point precisely, provides the rationale, offers a specific counterproposal, and ties it to a fast resolution — all without aggression or vagueness.',
        },
        {
          customerLine: 'The club says: "We\'re not going to move on the release clause. If you don\'t sign by Friday, we\'ll move to our second choice."',
          options: [
            '"I understand the timeline and we want to get this resolved. We\'re not looking to create difficulties — we\'ve been close throughout. But the release clause is the one point we cannot move on. If the club can come back with a figure closer to £38 million, we can sign before Friday. That\'s the only thing standing between us and an agreement."',
            '"In that case, we might have to consider our options elsewhere."',
            '"We need more time — this is too much pressure for a decision this important."',
          ],
          correctIndex: 0,
          explanation: 'This response confirms genuine intent to agree, acknowledges urgency without panicking, names the single remaining obstacle precisely, and offers a clear path to resolution within the deadline. It does not threaten, it does not capitulate.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the negotiation mistake in this player conversation.',
      dialogue: [
        { speaker: 'Agent', speakerColor: 'green', text: 'The club has made an offer. Base salary of £40,000 a week, four-year deal, release clause of £70 million.' },
        { speaker: 'Player', speakerColor: 'blue', text: 'Great — that\'s much more than I\'m currently earning. Should we just accept it?' },
        { speaker: 'Agent', speakerColor: 'green', text: 'I think there\'s room to push on a few points. What matters most to you?' },
        { speaker: 'Player', speakerColor: 'blue', text: 'Honestly I just want to sign — I really want to join this club. Tell them we\'ll take it.' },
        { speaker: 'Agent', speakerColor: 'green', text: 'Are you sure? The release clause in particular is something I\'d want to push back on.' },
        { speaker: 'Player', speakerColor: 'blue', text: 'Yes, let\'s just accept and get it done. I don\'t want to risk them going to someone else.' },
      ],
      mistakes: [
        {
          lineIndex: 3,
          incorrectText: 'Honestly I just want to sign — I really want to join this club. Tell them we\'ll take it.',
          correction: 'What I want most is a fair release clause — that\'s the one term that matters most for my long-term career flexibility. On everything else, I\'m happy to be guided by you. But let\'s not walk away from the release clause without at least making our position clear to them.',
          explanation: 'The player has revealed their emotional position — "I really want to join this club" and "I don\'t want to risk them going to someone else" — which eliminates all leverage instantly. A club that knows you will accept anything has no reason to improve their offer. The principle is never reveal your desperation. Even if you want the club, the negotiation must be conducted as if you have alternatives. The release clause the agent flagged (£70 million) could trap this player significantly — accepting it out of anxiety is a serious long-term mistake.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the contract negotiation exchange.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'We understand the club has a firm position on the release clause figure. If we could get closer to the £38 million valuation, we would be prepared to...',
          suggestedCompletion: 'accept the current vesting schedule on the signing fee without any further negotiation, and we could confirm everything in writing within 24 hours. The release clause is the single remaining point between us and an agreement — everything else is resolved. We want to get this done, and we\'re asking for movement on one specific number to make that possible.',
        },
        {
          customerLine: '',
          salespersonStart: 'Know your walk-away point before you enter the negotiation. In practice, this means deciding in advance...',
          suggestedCompletion: 'the minimum base salary you will accept, the maximum release clause figure you can live with, the image rights split below which you will not sign, and the contract length that works for where you are in your career. Write these down before the first meeting. The room will create pressure — having your walk-away point on paper means the decision was made when you were thinking clearly, not when you were being pushed.',
        },
      ],
    },
  },
};

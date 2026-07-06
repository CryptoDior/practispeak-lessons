import { Lesson } from '@/types/lesson';

export const robloxAgreeingDisagreeing: Lesson = {
  slug: 'roblox-agreeing-disagreeing',
  title: "Agreeing & Disagreeing",
  subtitle: "Anyone can say 'I disagree.' The question is: can you say it without ending the conversation?",
  level: 'B1-B2',
  description: "Agreeing and disagreeing are not binary. At B2, you need to navigate the full range: partially agreeing, conceding a point while maintaining your position, and disagreeing diplomatically without causing offence. Whether you are debating which game is best or discussing strategy with your team, how you disagree matters as much as whether you disagree.",
  heroImage: '/images/roblox-agreeing-disagreeing-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Agreeing and disagreeing — use softeners',
    description: "In English, disagreeing directly can sound rude. Native speakers use softeners — small phrases that make disagreement sound polite and professional. You can also concede a point (admit the other person is partly right) before giving your counter-argument. This makes your English sound more natural and confident.",
    positivePattern: 'Concede + HOWEVER/THAT SAID + counter-argument',
    positiveExample: '"That is a valid point. However, I beg to differ on the timing."',
    negativePattern: 'Do NOT disagree with no softener or concession',
    negativeExample: '"You are wrong." ✗ (blunt and impolite)',
    positiveLabel: 'CORRECT — softened, diplomatic disagreement',
    negativeLabel: 'WRONG — too blunt or no concession',
    arrowStyle: true,
    positiveExamples: [
      { sentence: '"I acknowledge your point, but I see it differently."', note: 'acknowledge = I heard you — then give your view' },
      { sentence: '"Fair enough — I concede that point. That said, the data suggests otherwise."', note: 'concede = admit they are right about one thing before disagreeing on another' },
      { sentence: '"I beg to differ — the strategy was not as effective as it looks."', note: 'I beg to differ = polite but firm disagreement' },
    ],
    negativeExamples: [
      { sentence: '"You are wrong about the strategy." ✗', note: 'blunt — soften it: I see that differently, or I would dispute that' },
      { sentence: '"That is a bad idea." ✗', note: 'too direct — use: I am not sure that would work, or I would suggest an alternative' },
      { sentence: '"No." ✗ (in a discussion)', note: 'too blunt — even a simple disagreement needs a softener: Not quite, or I am not sure I agree' },
    ],
  },

  vocabulary: [
    {
      word: 'DIPLOMATICALLY',
      partOfSpeech: 'adverb',
      definition: "In a careful way that is honest but does not upset the other person.",
      example: "Mia diplomatically pointed out the flaw in Leo's strategy without making him feel defensive about it.",
      imageSlug: '/images/roblox-agreeing-disagreeing-diplomatically.png',
    },
    {
      word: 'BLUNTLY',
      partOfSpeech: 'adverb',
      definition: "In a very direct way — saying exactly what you think without making it softer.",
      example: "Leo put it bluntly: 'That strategy does not work and we need to change it today.'",
      imageSlug: '/images/roblox-agreeing-disagreeing-bluntly.png',
    },
    {
      word: 'ACKNOWLEDGE',
      partOfSpeech: 'verb',
      definition: "To accept that something is true, even if you then disagree with the conclusion.",
      example: "I acknowledge that the defensive strategy worked last season — but this season the meta has completely changed.",
      imageSlug: '/images/roblox-agreeing-disagreeing-acknowledge.png',
    },
    {
      word: 'CONCEDE',
      partOfSpeech: 'verb',
      definition: "To admit that one part of the other person's argument is correct.",
      example: "I concede that the eastern route has advantages — but I still believe the northern approach is the right call overall.",
      imageSlug: '/images/roblox-agreeing-disagreeing-concede.png',
    },
    {
      word: 'DISPUTE',
      partOfSpeech: 'noun / verb',
      definition: "To say something is not true or not correct — or a disagreement between people.",
      example: "Nobody disputes that Phoenix Force is talented — the dispute is whether they can maintain that level under pressure.",
      imageSlug: '/images/roblox-agreeing-disagreeing-dispute.png',
    },
    {
      word: 'VALID POINT',
      partOfSpeech: 'phrase',
      definition: "An argument that makes sense and is worth thinking about.",
      example: "'That is a valid point about the timing — I had not considered how the patch changes affect that argument.'",
      imageSlug: '/images/roblox-agreeing-disagreeing-valid-point.png',
    },
    {
      word: 'FAIR ENOUGH',
      partOfSpeech: 'phrase',
      definition: "Used to say you accept something is reasonable — not complete agreement, but OK.",
      example: "'Fair enough — if the data supports that approach, I can see why you would choose it over the alternative.'",
      imageSlug: '/images/roblox-agreeing-disagreeing-fair-enough.png',
    },
    {
      word: 'I BEG TO DIFFER',
      partOfSpeech: 'phrase',
      definition: "A polite and formal way of saying you disagree.",
      example: "'I beg to differ — the statistics from the last three tournaments tell a very different story than the one you are describing.'",
      imageSlug: '/images/roblox-agreeing-disagreeing-i-beg-to-differ.png',
    },
  ],

  irlVocabulary: [
    {
      word: 'DIPLOMATICALLY',
      partOfSpeech: 'adverb',
      definition: "In a careful way — honest but not upsetting to the other person.",
      example: "She diplomatically raised the issue of the deadline in the meeting — everyone understood the problem, nobody felt blamed.",
      imageSlug: '/images/roblox-agreeing-disagreeing-diplomatically-irl.png',
    },
    {
      word: 'BLUNTLY',
      partOfSpeech: 'adverb',
      definition: "In a very direct way — saying what you think without making it gentle.",
      example: "He put it bluntly in the board meeting: 'This project is six months behind and there is no plan to recover it.'",
      imageSlug: '/images/roblox-agreeing-disagreeing-bluntly-irl.png',
    },
    {
      word: 'ACKNOWLEDGE',
      partOfSpeech: 'verb',
      definition: "To accept or admit that something is true — showing you have listened.",
      example: "I acknowledge the concerns about the timeline — and I want to address each one of them directly.",
      imageSlug: '/images/roblox-agreeing-disagreeing-acknowledge-irl.png',
    },
    {
      word: 'CONCEDE',
      partOfSpeech: 'verb',
      definition: "To admit that part of an opposing argument is correct — a sign of intellectual honesty that actually strengthens your credibility.",
      example: "I concede that the costs are higher than projected — but the long-term returns justify the additional investment.",
      imageSlug: '/images/roblox-agreeing-disagreeing-concede-irl.png',
    },
    {
      word: 'DISPUTE',
      partOfSpeech: 'noun / verb',
      definition: "A disagreement between people — or to say that something is not correct.",
      example: "The legal team disputed the interpretation of the contract — the dispute was resolved through mediation.",
      imageSlug: '/images/roblox-agreeing-disagreeing-dispute-irl.png',
    },
    {
      word: 'VALID POINT',
      partOfSpeech: 'phrase',
      definition: "An argument that is logical and worth thinking about — even if you disagree.",
      example: "'That is a valid point about the risk to the timeline — let me explain how we plan to manage it.'",
      imageSlug: '/images/roblox-agreeing-disagreeing-valid-point-irl.png',
    },
    {
      word: 'FAIR ENOUGH',
      partOfSpeech: 'phrase',
      definition: "Used to say a point is reasonable — you are not fully convinced but you accept it.",
      example: "'Fair enough — if the client specifically requested that format, I understand why you kept it.'",
      imageSlug: '/images/roblox-agreeing-disagreeing-fair-enough-irl.png',
    },
    {
      word: 'I BEG TO DIFFER',
      partOfSpeech: 'phrase',
      definition: "A polite and formal way of saying you disagree with someone.",
      example: "'I beg to differ — the data from Q3 shows the opposite trend to the one you have described.'",
      imageSlug: '/images/roblox-agreeing-disagreeing-i-beg-to-differ-irl.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: "STAND YOUR GROUND",
      definition: "To keep your opinion and not change it even when others push back.",
      example: "Mia stood her ground in the strategy debate — she had the data, and she was not going to back down from it.",
      inGame: "If your strategy is sound, stand your ground when others question it — confidence in your plan matters.",
      inRealLife: "She stood her ground in the negotiation despite pressure from the other side — and eventually they moved.",
      imageSlug: '/images/roblox-agreeing-disagreeing-stand-your-ground.png',
    },
    {
      phrase: "COME AROUND",
      definition: "To change your mind and agree after first disagreeing.",
      example: "Leo was sceptical at first, but eventually came around to Mia's approach after seeing the results.",
      inGame: "Give people time to come around to a new strategy — immediate resistance does not mean permanent opposition.",
      inRealLife: "The board came around to the proposal after the pilot results were presented — it took three months.",
      imageSlug: '/images/roblox-agreeing-disagreeing-come-around.png',
    },
    {
      phrase: "BACK DOWN",
      definition: "To stop insisting on your view — to give up your position.",
      example: "He backed down from his original position once Mia showed him the match data — the numbers were clear.",
      inGame: "Know when to back down — defending a bad strategy just to save face costs everyone time and results.",
      inRealLife: "The company backed down from the price increase after the customer reaction was stronger than expected.",
      imageSlug: '/images/roblox-agreeing-disagreeing-back-down.png',
    },
    {
      phrase: "TALK THROUGH",
      definition: "To discuss something carefully together to reach an understanding.",
      example: "Instead of arguing, Mia and Leo talked through the strategy together — and found a better approach than either had originally proposed.",
      inGame: "When there is disagreement in the guild, talk it through before the match — not during it.",
      inRealLife: "The two departments talked through their differences in a three-hour session — by the end, they had a shared plan.",
      imageSlug: '/images/roblox-agreeing-disagreeing-talk-through.png',
    },
    {
      phrase: "HEAR OUT",
      definition: "To listen to everything someone says before you respond.",
      example: "Leo heard Mia out completely before responding — and then agreed with most of what she had said.",
      inGame: "Hear your teammates out before dismissing their ideas — you might be missing information they have that you do not.",
      inRealLife: "She heard the client out for twenty minutes before speaking — and then addressed every concern they had raised.",
      imageSlug: '/images/roblox-agreeing-disagreeing-hear-out.png',
    },
    {
      phrase: "WEIGH UP",
      definition: "To think carefully about both sides before making a decision.",
      example: "After weighing up both strategies, the guild chose the more defensive approach for the qualifier matches.",
      inGame: "Weigh up the risks before committing to an aggressive opening — it can win matches or end them immediately.",
      inRealLife: "She weighed up the job offers carefully — salary, growth potential, culture — before making her decision.",
      imageSlug: '/images/roblox-agreeing-disagreeing-weigh-up.png',
    },
  ],

  warmUp: {
    questions: [
      "Think about a disagreement you have had recently — with a friend, a colleague, or a teammate. Did you express your view diplomatically or bluntly? Would you do it differently now?",
      "Is it difficult for you to say 'you have a valid point' or 'I concede that' when someone disagrees with you? Why do you think that is?",
      "In your culture, is it normal to openly disagree with someone in a group setting? Or do people tend to express disagreement indirectly or privately?",
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: "Leo, I think Phantom Gardens is a better game than Phoenix Force server. The design is more creative and the community is friendlier.",
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: "I [[beg to differ:a formal, polite way of disagreeing]] on that. Phoenix Force has a more developed competitive scene and better progression mechanics. I [[acknowledge:accept or admit something is true]] that Phantom Gardens has excellent design — [[valid point:a logically sound observation]] — but design alone does not make a game better overall.",
    },
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: "I [[concede:admit an opposing point is valid]] that Phoenix Force is more competitive. But for players who are not focused on rankings, community experience matters more. You are measuring quality by only one standard.",
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: "[[Fair enough:accepting that a point has merit]] — that is a [[valid point:a logically sound argument]] about the audience. Different players have different priorities. I was defining 'better' as competitive quality; you are defining it as overall experience.",
    },
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: "Exactly. So the [[dispute:a disagreement between parties]] is not really about which game is objectively better — it is about which definition of 'better' we are using.",
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: "I think you are right. I concede the whole argument — not because I was wrong about Phoenix Force, but because you were right that we were not defining the same thing. That is often how disagreements actually work.",
    },
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: "Notice what you just did — you [[backed down:withdrew your position]] [[diplomatically:in a tactful way that preserves the relationship]], not because you lost, but because the argument moved to a new level. That is a very sophisticated way to disagree.",
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: "That is the goal. [[Bluntly:directly and without softening]] disagreeing shuts down conversations. Diplomatic disagreement opens them up. At B2, you should be able to [[stand your ground:maintain your position under pressure]] on points you believe in — and gracefully [[concede:admit an opposing point]] on points where the evidence has moved.",
    },
  ],

  completeSentenceExercise: {
    instructions: "Choose the word or phrase that best completes each sentence. Then read it aloud.",
    items: [
      {
        sentence: "I _____ that your approach worked last season — but this season the situation has changed significantly.",
        options: ["dispute", "acknowledge", "beg to differ"],
        correctIndex: 1,
        explanation: "ACKNOWLEDGE means to accept or admit that something is true — you are recognising their point before making a contrast. DISPUTE means to challenge the truth of something — the opposite of what you are doing here. I BEG TO DIFFER is a direct disagreement phrase — not for admitting someone is right.",
      },
      {
        sentence: "I _____ that the eastern route has some advantages — but I still believe the northern approach is correct overall.",
        options: ["dispute", "concede", "bluntly"],
        correctIndex: 1,
        explanation: "CONCEDE means to admit that an opposing point is valid while maintaining your main position — exactly what this sentence does. DISPUTE means to challenge. BLUNTLY is an adverb, not a verb.",
      },
      {
        sentence: "Nobody _____ that they are talented — the question is whether they can perform under real tournament pressure.",
        options: ["concedes", "disputes", "acknowledges"],
        correctIndex: 1,
        explanation: "DISPUTES means to challenge the truth of — 'nobody disputes that they are talented' means everyone agrees they are talented. CONCEDES would mean nobody admits their talent. ACKNOWLEDGES would also work grammatically but changes the nuance — DISPUTES is the most natural here.",
      },
      {
        sentence: "'_____ — I can see why you would choose that approach given the data you have.'",
        options: ["I beg to differ", "Fair enough", "Bluntly"],
        correctIndex: 1,
        explanation: "FAIR ENOUGH signals acceptance that a point has merit — not full agreement, but acknowledgement. I BEG TO DIFFER is a polite disagreement — the opposite. BLUNTLY is an adverb — not a standalone phrase.",
      },
      {
        sentence: "She raised her concern _____ — everyone understood the problem, but nobody felt personally blamed.",
        options: ["bluntly", "diplomatically", "conceding"],
        correctIndex: 1,
        explanation: "DIPLOMATICALLY means in a tactful way that avoids causing offence — exactly what the sentence describes. BLUNTLY is direct and without softening — the opposite of what is described. CONCEDING is a participle form of a different word.",
      },
      {
        sentence: "'_____ — the statistics from the last three tournaments tell a different story entirely.'",
        options: ["Fair enough", "I acknowledge", "I beg to differ"],
        correctIndex: 2,
        explanation: "I BEG TO DIFFER is a formal, polite way of saying you disagree — and the speaker then gives evidence for their disagreement. FAIR ENOUGH signals partial acceptance — the opposite of what follows. I ACKNOWLEDGE admits something is true — also the opposite here.",
      },
    ],
  },

  matchingExercise: [
    { word: 'DIPLOMATICALLY', definition: 'In a tactful way that avoids causing offence — expressing a position without damaging the relationship' },
    { word: 'BLUNTLY', definition: 'Directly and honestly — saying exactly what you mean without softening or cushioning' },
    { word: 'ACKNOWLEDGE', definition: 'To accept or admit that something is true — recognising a point before arguing against its conclusion' },
    { word: 'CONCEDE', definition: "To admit that one part of the other person's argument is correct" },
    { word: 'DISPUTE', definition: 'To say something is not true or not correct — or a disagreement between people' },
    { word: 'VALID POINT', definition: 'An argument that is logically sound and worth considering — even if you disagree with the conclusion' },
    { word: 'FAIR ENOUGH', definition: 'Used to accept that something is reasonable — partial acceptance, not full agreement' },
    { word: 'I BEG TO DIFFER', definition: 'A formal, polite way of saying you disagree — respectful but clear' },
  ],

  fillBlankExercise: [
    { before: "I", answer: 'acknowledge', after: "that their strategy worked last season — but the meta has completely changed since then." },
    { before: "I", answer: 'concede', after: "that the eastern route has advantages — but the northern approach is still the right overall call." },
    { before: "Nobody", answer: 'disputes', after: "that Phoenix Force is talented — the question is whether they can hold that level under pressure." },
    { before: "'", answer: 'Fair enough', after: "— if the data supports that approach, I can understand why you would choose it.'" },
    { before: "She raised the issue", answer: 'diplomatically', after: "— the problem was clear, but nobody felt blamed or attacked." },
    { before: "'", answer: 'I beg to differ', after: "— the match statistics tell a very different story from the one you have described.'" },
    { before: "After weighing up both options, he decided to", answer: 'back down', after: "from his original position — the evidence was simply too strong to argue against." },
    { before: "Instead of arguing in the session, they", answer: 'talked through', after: "the disagreement calmly and found a better approach than either had originally proposed." },
  ],

  multipleChoiceExercise: [
    {
      question: "In the dialogue, Leo explains why diplomatic disagreement is preferable to blunt disagreement. What does he say?",
      options: [
        "Blunt disagreement is always rude and should be avoided entirely.",
        "Diplomatic disagreement is more formal and required in professional contexts.",
        "Blunt disagreement shuts down conversations; diplomatic disagreement opens them up.",
        "Diplomatic disagreement means agreeing eventually — you always end up conceding.",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the difference between ACKNOWLEDGE and CONCEDE?",
      options: [
        "They mean exactly the same thing — both involve admitting something is true.",
        "ACKNOWLEDGE accepts that something is true; CONCEDE admits that an opposing point in an argument is valid.",
        "CONCEDE is stronger than ACKNOWLEDGE — it means you have completely lost the argument.",
        "ACKNOWLEDGE is informal; CONCEDE is only used in formal or legal contexts.",
      ],
      correctIndex: 1,
    },
    {
      question: "Which sentence uses STAND YOUR GROUND correctly?",
      options: [
        "She stood her ground in the queue even though others were pushing past.",
        "He stood his ground in the debate — he had the evidence and he was not going to change his position.",
        "The guild stood their ground in the zone until they ran out of resources.",
        "She stood her ground by agreeing with everything the other team said.",
      ],
      correctIndex: 1,
    },
    {
      question: "What does COME AROUND mean in the context of disagreement?",
      options: [
        "To arrive at a location after going a longer route.",
        "To return to a topic after changing the subject.",
        "To change your opinion and agree after initially disagreeing — to be persuaded over time.",
        "To turn the conversation back to your original point.",
      ],
      correctIndex: 2,
    },
    {
      question: "In the dialogue, how does Leo ultimately resolve the disagreement about which game is better?",
      options: [
        "He concedes that Phantom Gardens is objectively better.",
        "He insists that Phoenix Force is better and Mia eventually agrees.",
        "He realises they were both right because they were using different definitions of 'better'.",
        "He suggests they play both games and compare the experience directly.",
      ],
      correctIndex: 2,
    },
    {
      question: "What does WEIGH UP mean?",
      options: [
        "To measure the physical weight of something.",
        "To consider arguments, options, or evidence carefully on both sides before deciding.",
        "To give more importance to one side of an argument.",
        "To decide quickly without thinking too carefully.",
      ],
      correctIndex: 1,
    },
  ],
};

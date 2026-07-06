import { Lesson } from '@/types/lesson';

export const crossCulturalNegotiation: Lesson = {
  slug: 'cross-cultural-negotiation',
  title: 'Cross-Cultural Negotiation',
  subtitle: 'How to communicate across cultural boundaries — understanding high and low context, face-saving, protocol, and indirect communication',
  level: 'C1-C2',
  description: "In global business, the ability to negotiate across cultural boundaries is one of the most valuable and least taught skills. What counts as direct in one culture reads as rude in another. Silence means agreement in some contexts and deep discomfort in others. A 'yes' that is not a yes. A smile that masks disagreement. The norms around relationships, hierarchy, time, and decision-making vary enormously across cultures — and misreading them can damage partnerships, lose contracts, and create lasting mistrust. This lesson gives you the vocabulary and the frameworks to navigate cross-cultural negotiation with awareness and confidence.",
  heroImage: '/images/cross-cultural-negotiation-hero.png',

  vocabulary: [
    {
      word: 'HIGH-CONTEXT COMMUNICATION',
      partOfSpeech: 'noun',
      definition: "A communication style where meaning is conveyed through context, relationship, tone, and non-verbal cues — rather than through explicit words. In high-context cultures, what is not said is as important as what is said. Shared understanding, history, and relationship are assumed. Common in Japan, China, South Korea, many Middle Eastern and Latin American countries.",
      example: "In high-context communication, meaning is conveyed through relationship, tone, and situation rather than explicit words. The partner said the proposal was 'interesting' — in that cultural context, it was a polite way of expressing significant reservations. Marcus learned to read the tone rather than the literal content.",
      imageSlug: '/images/high-context-communication.png',
    },
    {
      word: 'LOW-CONTEXT COMMUNICATION',
      partOfSpeech: 'noun',
      definition: "A communication style where meaning is conveyed explicitly and directly — through clear words and specific statements. In low-context cultures, things are said plainly, directness is valued, and ambiguity is uncomfortable. Common in Germany, the Netherlands, Scandinavia, Australia, and the United States.",
      example: "Forge's US negotiating team operates in low-context mode — they state positions directly, expect direct responses, and treat ambiguity as a problem to be resolved. When they entered a negotiation with a South Korean partner, the directness was initially read as aggression. The team adjusted after the first session.",
      imageSlug: '/images/low-context-communication.png',
    },
    {
      word: 'INDIRECT COMMUNICATION',
      partOfSpeech: 'noun',
      definition: "Expressing something — particularly a negative, a disagreement, or a refusal — in a way that avoids direct confrontation or explicit statement. Indirect communication is a feature of many high-context cultures and is not evasiveness — it is a different set of norms for how difficult messages are conveyed. Learning to read indirect communication is essential in cross-cultural negotiations.",
      example: "The delegation communicated indirectly throughout the negotiation — raising concerns through hypotheticals and analogies rather than direct objections. Riley learned to listen for the concern behind the story rather than taking the example at face value. Once she understood the pattern, the conversations became significantly more productive.",
      imageSlug: '/images/indirect-communication.png',
    },
    {
      word: 'FACE-SAVING',
      partOfSpeech: 'noun',
      definition: "Protecting a person's dignity, reputation, and social standing in front of others — especially in professional or public contexts. In many Asian, Middle Eastern, and Latin American cultures, causing someone to 'lose face' — to be embarrassed, contradicted, or publicly criticised — is a serious social and professional harm that can damage relationships permanently.",
      example: "Asking the partner to commit publicly before they had reached internal consensus would have been a face-saving problem. Dana structured the agreement to allow time for internal ratification before any public announcement. The deal closed cleanly because nobody was put in a position where they had to refuse in front of others.",
      imageSlug: '/images/cross-cultural-negotiation-face-saving.png',
    },
    {
      word: 'PROTOCOL',
      partOfSpeech: 'noun',
      definition: "The accepted rules and customs that govern how meetings, negotiations, introductions, and formal interactions are conducted in a specific cultural or institutional context. Protocol covers things like seating arrangements, business card exchange, gift-giving, dress code, and the correct order of introductions. Violating protocol — even unknowingly — can signal disrespect.",
      example: "Arriving without business cards to a first meeting in Japan was a significant breach of protocol. Marcus corrected it by the second meeting and acknowledged the oversight directly. Learning the protocol in advance would have prevented the awkward start.",
      imageSlug: '/images/cross-cultural-negotiation-protocol.png',
    },
    {
      word: 'COLLECTIVIST CULTURE',
      partOfSpeech: 'noun',
      definition: "A culture that prioritises the group — the team, the company, the family, or the community — over the individual. In collectivist cultures, decisions are often made by consensus, individual opinions are expressed carefully so as not to disrupt group harmony, and loyalty to the group is a primary value. Common in East and Southeast Asian, many Middle Eastern and Latin American cultures.",
      example: "In a collectivist culture, decisions are rarely made by one person — consensus across the group is required before any commitment is given. Forge's team had come expecting to close in two sessions. The process took six weeks, and the relationship built in that time has since produced three further contracts.",
      imageSlug: '/images/collectivist-culture.png',
    },
    {
      word: 'CONSENSUS-BUILDING',
      partOfSpeech: 'noun',
      definition: "The process of working to achieve broad agreement among all relevant stakeholders before a decision is made or announced. In many cultures — particularly collectivist ones — consensus-building is not a bureaucratic delay; it is a valued part of the decision-making process that ensures everyone with a stake in the outcome has been heard and is aligned.",
      example: "Consensus-building takes longer than unilateral decision-making but produces more durable agreements. The partner needed to bring the proposal back to four internal stakeholders before responding. Dana built the additional time into the project plan rather than pushing for an accelerated timeline.",
      imageSlug: '/images/consensus-building.png',
    },
    {
      word: 'NON-VERBAL CUE',
      partOfSpeech: 'noun',
      definition: "A signal conveyed through body language, facial expression, tone of voice, eye contact, or gesture — rather than through words. In cross-cultural negotiations, non-verbal cues can be even more important than verbal ones — and the same cue can mean very different things in different cultural contexts.",
      example: "The negotiator's posture shifted almost imperceptibly when the pricing term was introduced. Marcus noticed the non-verbal cue and suggested a short break rather than pressing forward. When they resumed, the conversation moved to a term the partner was more comfortable discussing first.",
      imageSlug: '/images/non-verbal-cue.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WE NEED TO ALLOW TIME FOR CONSENSUS-BUILDING — THE DECISION WILL...',
      definition: "A phrase for managing expectations about the pace of decision-making in a collectivist or consensus-driven cultural context. Used to prevent the mistake of pressing for a quick answer in a culture where collective internal agreement is a necessary and respected part of the process.",
      example: "We need to allow time for consensus-building — the decision will not come from one person in this cultural context, and pressing for an answer before the internal process is complete will produce a commitment that does not hold. Forge built a six-week response window into the proposal. The partner used every day of it.",
      imageSlug: '/images/we-need-to-allow-time-for-consensus-building.png',
      inAction: 'We need to allow time for consensus-building — the decision will come after internal consultation with stakeholders who were not in today\'s meeting, and pressing for a faster answer will only slow the process.',
      register: "Neutral — Forge (B2B HR platform, Japan partnership): post-meeting brief reads we need to allow time for consensus-building — the decision will be made through nemawashi, their internal consultation process, and typically takes four to six weeks for a partnership of this scale. | Flux (SaaS platform, South Korea distributor): negotiation debrief reads we need to allow time for consensus-building — the decision will require sign-off from the parent company, not just the regional team in the room, and that process cannot be accelerated by pushing the regional team. | Ember (subscription service, Middle East market entry): partnership strategy reads we need to allow time for consensus-building — the decision will involve senior family members of the ownership group who were not present at the initial meeting, and the relationship needs time to develop before a formal commitment is made.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — Japan partnership post-meeting brief', imageSlug: '/images/visual-examples/forge-consensus-building-nemawashi.png', caption: 'We need to allow time for consensus-building — the decision will come through nemawashi, their internal consultation process, which typically takes four to six weeks for a partnership of this scale.', aspectRatio: '16/9' },
        { brand: 'Ember', context: 'Subscription service — Middle East market entry partnership', imageSlug: '/images/visual-examples/ember-consensus-building-ownership-group.png', caption: 'We need to allow time for consensus-building — the decision will involve senior family members of the ownership group who were not present, and the relationship needs time before a formal commitment is made.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus came out of the Tokyo meeting expecting a decision. We need to allow time for consensus-building — the decision will not come this week, Riley said calmly. Marcus: But we have a board presentation in three weeks. Riley: Then we present with 'in final stages of negotiation' rather than 'agreement reached.' Pushing for a faster answer will not accelerate the decision — it will signal that we are difficult to work with. Dana: Send a thank-you note, a clear written summary of what was discussed, and an offer to answer any follow-up questions in writing. That is the right next move.",
    },
    {
      phrase: 'THE SILENCE WAS NOT DISAGREEMENT — IT WAS CONSIDERATION',
      definition: "A phrase for reinterpreting a moment of silence in a cross-cultural negotiation as a cultural norm of careful reflection — not as a negative signal. Used in debriefs and cultural briefings to prevent low-context communicators from misreading high-context silence and responding in ways that disrupt the conversation.",
      example: "The silence was not disagreement — it was consideration. Marcus waited through a full minute of quiet before Riley signalled he should not speak. The partner came back with a constructive counterproposal that would not have emerged if the silence had been broken.",
      imageSlug: '/images/the-silence-was-not-disagreement.png',
      inAction: 'The silence was not disagreement — it was consideration, and filling it with more explanation was the wrong move. Next time, we wait, however uncomfortable that feels.',
      register: "Neutral — Flux (SaaS platform, Japan sales training): cultural briefing for sales team reads the silence was not disagreement — it was consideration, and the data shows that the sales team's tendency to fill silence with further persuasion is the single most common reason Japanese prospects disengage from our sales process. | Forge (B2B HR, Korea partner meeting debrief): meeting debrief note reads the silence was not disagreement — it was consideration, and the six seconds of silence before their lead negotiator responded to the pricing proposal should have been respected, not interrupted by a further explanation. | Ember (subscription, Middle East partnership): negotiation coach note reads the silence was not disagreement — it was consideration, and in this cultural context silence often precedes the most important statement of the meeting.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS platform — Japan sales team cultural briefing', imageSlug: '/images/visual-examples/flux-silence-consideration-japan-sales.png', caption: 'The silence was not disagreement — it was consideration. The sales team\'s tendency to fill silence with further persuasion is the most common reason Japanese prospects disengage from our sales process.', aspectRatio: '16/9' },
        { brand: 'Forge', context: 'B2B HR — Korea partner meeting debrief', imageSlug: '/images/visual-examples/forge-silence-consideration-korea-debrief.png', caption: 'The silence was not disagreement — it was consideration. The six seconds before the lead negotiator responded to pricing should have been respected, not interrupted by a further explanation.', aspectRatio: '4/5' },
      ],
      inContext: "Riley ran the cross-cultural debrief after the Tokyo negotiation. The silence was not disagreement — it was consideration, she said. Dana: But it lasted 45 seconds. That felt like a long time. Riley: For us. For them, 45 seconds of thought before a considered response is respectful. What we did — jumping in with a revised offer before they had answered the first question — probably signalled impatience or anxiety. Marcus: So we should have waited? Riley: We should have waited. And if the silence had continued for another minute, we could have gently said: 'Please take the time you need.' But we should not have filled it ourselves.",
    },
    {
      phrase: 'LET US FIND A WAY FORWARD THAT WORKS FOR BOTH SIDES — I WANT TO UNDERSTAND...',
      definition: "A phrase for opening or resuming a negotiation after a difficult moment, a stalemate, or a cultural misalignment — by signalling collaborative intent and genuine interest in the counterpart's position. Used to de-escalate tension and reestablish a constructive, relationship-oriented tone.",
      example: "Let us find a way forward that works for both sides — I want to understand what is most important to you in this element of the agreement. Dana used the phrase to reset a negotiation that had stalled on a pricing term. Opening the conversation to the partner's priorities revealed a different trade-off that both sides could accept.",
      imageSlug: '/images/let-us-find-a-way-forward.png',
      inAction: 'Let us find a way forward that works for both sides — I want to understand what is most important to your team before I respond to the timeline question.',
      register: "Neutral — Forge (B2B HR, contract negotiation): negotiation coaching note reads 'let us find a way forward that works for both sides' is the most effective phrase for de-escalating a stalled negotiation in a relationship-oriented culture — it signals intent to collaborate rather than compete. | Flux (SaaS, partnership terms): negotiation debrief reads let us find a way forward that works for both sides proved to be the phrase that unlocked the discussion on exclusivity — once both teams were aligned on the collaborative framing, the specific terms became easier to discuss. | Kova (fintech, Asia-Pacific distributor): market entry negotiation notes read let us find a way forward that works for both sides — I want to understand your team's priorities on the revenue share before we discuss the exclusivity clause — this sequence worked well in practice.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — cross-cultural contract negotiation coaching', imageSlug: '/images/visual-examples/forge-way-forward-collaboration-phrase.png', caption: '"Let us find a way forward that works for both sides" is the most effective phrase for de-escalating a stalled negotiation in a relationship-oriented culture — it signals collaboration, not competition.', aspectRatio: '16/9' },
        { brand: 'Flux', context: 'SaaS platform — partnership terms negotiation debrief', imageSlug: '/images/visual-examples/flux-way-forward-unlocked-exclusivity.png', caption: '"Let us find a way forward that works for both sides" proved to be the phrase that unlocked the exclusivity discussion — once both teams were aligned on collaborative framing, the terms became easier to negotiate.', aspectRatio: '4/5' },
      ],
      inContext: "The negotiation had been stalled for 20 minutes on the revenue share question. Riley spoke quietly: Let us find a way forward that works for both sides — I want to understand what is driving the concern about this specific number before we respond. The counterpart relaxed visibly. Dana, watching from the side, noted it afterwards. Marcus: What happened there? Riley: The question gave them permission to explain without having to make a formal counter-proposal. In a high-context environment, people often cannot say 'no' or 'this does not work' directly. If you ask 'what matters most to you', you give them a route to tell you the real issue without a direct confrontation.",
    },
    {
      phrase: 'I WANT TO MAKE SURE WE ARE ALIGNED BEFORE WE GO FURTHER — CAN YOU HELP ME UNDERSTAND...',
      definition: "A phrase for pausing a negotiation to check shared understanding before moving to the next point — particularly useful in cross-cultural contexts where apparent agreement may mask different interpretations. It is a respectful, non-confrontational way to verify that both parties mean the same thing.",
      example: "I want to make sure we are aligned before we go further — can you help me understand how this proposal sits with your internal team? The question gave the partner permission to raise an internal concern without it feeling like an objection. The answer shaped the entire second half of the negotiation.",
      imageSlug: '/images/i-want-to-make-sure-we-are-aligned.png',
      inAction: 'I want to make sure we are aligned before we go further — can you help me understand how your team is interpreting the exclusivity clause, because I want to be sure we are working from the same reading.',
      register: "Neutral — Flux (SaaS, Asia distributor terms): negotiation transcript reads I want to make sure we are aligned before we go further — can you help me understand what 'exclusive territory' means in your context, because in our standard contract it covers digital channels as well as physical distribution. | Kova (fintech, Middle East partner): negotiation coaching note reads 'I want to make sure we are aligned before we go further' is a culturally safe way to surface misalignment without implying that the other party has been unclear or misleading. | Forge (B2B HR, Japan implementation timeline): partnership negotiation reads I want to make sure we are aligned before we go further — can you help me understand what 'ready to begin' means for your team in terms of the specific milestone it refers to.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS platform — Asia distributor territory clause negotiation', imageSlug: '/images/visual-examples/flux-aligned-territory-clause.png', caption: '"I want to make sure we are aligned before we go further — what does \'exclusive territory\' mean in your context?" surfaces the interpretation gap without implying the other party has been unclear.', aspectRatio: '16/9' },
        { brand: 'Forge', context: 'B2B HR — Japan partnership implementation timeline negotiation', imageSlug: '/images/visual-examples/forge-aligned-ready-to-begin.png', caption: '"I want to make sure we are aligned before we go further — what does \'ready to begin\' mean for your team?" avoids building the next stage of negotiation on an apparent agreement that may not actually exist.', aspectRatio: '4/5' },
      ],
      inContext: "Dana spotted the misalignment during the review session. I want to make sure we are aligned before we go further, she said, turning to the counterpart team. Can you help me understand how you are reading the payment clause? We interpreted 'within 30 days' as calendar days. Riley knew exactly what Dana was doing. She was surfacing a potential misalignment before it became a dispute. Marcus: What did they say? Dana: They meant 30 business days. Which is 42 calendar days. That is a significant difference in cash flow terms — and if we had not checked it in the room, we would have signed a contract we had two different understandings of.",
    },
    {
      phrase: 'THE RELATIONSHIP NEEDS TO COME BEFORE THE CONTRACT — IN THIS CULTURE...',
      definition: "A phrase for explaining why the negotiation process in relationship-first cultures requires investing in personal connection, trust, and mutual understanding before formal agreement-making. Used to set expectations for a longer timeline and a more interpersonal approach to deal-making.",
      example: "The relationship needs to come before the contract — in this culture, signing a document with someone you do not trust is not a meaningful commitment. Forge allocated the first two meetings entirely to relationship-building with no commercial agenda. The contract discussion only began at session three.",
      imageSlug: '/images/the-relationship-needs-to-come-before-the-contract.png',
      inAction: 'The relationship needs to come before the contract — in this culture, you do not negotiate terms with someone you do not trust, and trust is built through time, not through a presentation.',
      register: "Neutral — Ember (subscription service, Brazil market entry): market entry playbook reads the relationship needs to come before the contract — in this culture, dedicating the first two meetings entirely to relationship-building and cultural exchange is not inefficient: it is the most efficient path to a signed agreement. | Kova (fintech, Saudi Arabia partnership): partnership development notes read the relationship needs to come before the contract — in this culture, a senior leader from our organisation meeting their senior leader personally, before any commercial discussion, is a prerequisite for the partnership to be taken seriously. | Flux (SaaS, Indonesia distributor): Asia expansion notes read the relationship needs to come before the contract — in this culture, the contract formalises what the relationship has already agreed, rather than defining the relationship for the first time.",
      visualExamples: [
        { brand: 'Ember', context: 'Subscription service — Brazil market entry playbook', imageSlug: '/images/visual-examples/ember-relationship-before-contract-brazil.png', caption: 'The relationship needs to come before the contract — in Brazil, dedicating the first two meetings entirely to relationship-building is not inefficient: it is the most efficient path to a signed agreement.', aspectRatio: '16/9' },
        { brand: 'Flux', context: 'SaaS platform — Indonesia distributor expansion notes', imageSlug: '/images/visual-examples/flux-relationship-before-contract-indonesia.png', caption: 'The relationship needs to come before the contract — in Indonesia, the contract formalises what the relationship has already agreed, rather than defining the relationship for the first time.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus wanted to get to the commercial terms at the first meeting with the Istanbul partner. Riley stopped him: The relationship needs to come before the contract — in this culture, you do not go to the terms in the first meeting. Dana: How do you know when you can move to the commercial discussion? Riley: They will signal it. There will be a natural shift — from personal questions and storytelling to business questions. Follow their lead. If you move to the terms before they do, you signal that the relationship is a means to an end, not a value in itself. In a relationship-first culture, that is the most damaging signal you can send.",
    },
    {
      phrase: 'WE SHOULD AVOID PUTTING THEM IN A POSITION WHERE THEY LOSE FACE — INSTEAD...',
      definition: "A phrase for redirecting a negotiating approach that risks publicly embarrassing or contradicting the counterpart in a face-sensitive cultural context. Used to guide the team toward face-saving alternatives that achieve the same outcome without damaging the relationship.",
      example: "We should avoid putting them in a position where they lose face — instead of asking for a direct decision in front of the group, we should give them the option to respond in writing after the meeting. Dana restructured the closing ask accordingly. The written response came within 48 hours and it was a yes.",
      imageSlug: '/images/we-should-avoid-putting-them-in-a-position.png',
      inAction: 'We should avoid putting them in a position where they lose face — instead, we raise our concern during the break, privately, in a way that allows them to address it without public acknowledgement.',
      register: "Neutral — Forge (B2B HR, Japan partner meeting strategy): pre-meeting cultural brief reads we should avoid putting them in a position where they lose face — instead, any concern about the implementation timeline should be raised through the relationship manager who has the most established trust with their team lead. | Flux (SaaS, China distributor review): negotiation strategy notes read we should avoid putting them in a position where they lose face — instead, the performance underperformance conversation should be framed as a shared challenge to solve together rather than as an accountability conversation directed at their team. | Kova (fintech, Korea regulatory compliance meeting): compliance meeting strategy reads we should avoid putting them in a position where they lose face — instead, the concerns about the regulatory submission should be communicated in writing before the meeting so that the corrections can be prepared in advance.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — Japan partner meeting cultural brief', imageSlug: '/images/visual-examples/forge-lose-face-relationship-manager.png', caption: 'We should avoid putting them in a position where they lose face — any concern about the implementation timeline should be raised through the trusted relationship manager, not in the open meeting.', aspectRatio: '16/9' },
        { brand: 'Flux', context: 'SaaS platform — China distributor performance review strategy', imageSlug: '/images/visual-examples/flux-lose-face-shared-challenge.png', caption: 'We should avoid putting them in a position where they lose face — the performance conversation should be framed as a shared challenge to solve together, not as an accountability conversation directed at their team.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus wanted to confront the inconsistency in the data in the meeting. We should avoid putting them in a position where they lose face — instead, let me handle this, Riley said. She waited for a natural break in the conversation, then approached the counterpart's deputy quietly. Dana watched. After the meeting: Riley: I told him we had a question about the Q3 data and asked if he could send us the source document. He said he would have it to us this afternoon. Marcus: That is exactly the correction we needed. Riley: And no one lost face. The relationship is intact. The data will be correct. And tomorrow's meeting starts from the same level of trust as today's.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We have a major partnership negotiation in Tokyo next week. I want to make sure we are fully prepared for the cultural dynamics, not just the commercial ones. Riley — what do we need to know?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Three fundamental things. First — this is a [[high-context communication:a style where meaning is conveyed through context, relationship, and non-verbal cues rather than explicit words]] environment. What is said directly will tell you less than the tone, the energy, and what is not said. Second — [[indirect communication:expressing things, especially negatives, in a way that avoids direct confrontation]] is the norm. A polite non-answer is often a no. Third — [[face-saving:protecting someone's dignity and social standing in front of others]] is critical. We do not contradict anyone publicly.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "On the decision-making side — we are dealing with a [[collectivist culture:a culture that prioritises the group over the individual, where decisions are made by consensus]]. We need to allow time for [[consensus-building:working to achieve broad agreement among all stakeholders before a decision is made]]. They will not give us a decision at the end of the meeting. We should not push for one.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And [[protocol:the accepted rules and customs governing how formal interactions are conducted]]? What do I need to know about the meeting itself?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Business cards with both hands. Most senior person introduced first, addressed by title. Silence after a question is not disagreement — it is consideration. Do not fill the silence. We wait.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And watch the [[non-verbal cue:signals conveyed through body language, facial expression, and tone rather than words]]s. If the most senior person disengages — turns slightly away, looks at his phone — that is a significant signal of concern that will not be expressed verbally. Read the room, not just the words.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "If we hit a difficult moment in the negotiation — a sticking point, a misalignment — what is our language?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Let us find a way forward that works for both sides — I want to understand what matters most to your team. That phrase signals collaboration, not confrontation, and it invites them to tell us what is actually important without requiring a direct statement. The relationship needs to come before the contract — and every phrase we use should reflect that.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And if there is something we need to raise that could be sensitive — a data inconsistency, a concern about a term — we should avoid putting them in a position where they lose face. We raise it privately, after the meeting, through the right channel. Never publicly in the room.",
    },
  ],

  matchingExercise: [
    { word: 'high-context communication', definition: 'a style where meaning is conveyed through context, relationships, and non-verbal cues — not through explicit words' },
    { word: 'low-context communication', definition: 'a style where meaning is conveyed explicitly and directly — things are stated plainly and ambiguity is uncomfortable' },
    { word: 'indirect communication', definition: 'expressing disagreement or refusal in a way that avoids direct confrontation — a different set of norms, not evasiveness' },
    { word: 'face-saving', definition: 'protecting someone\'s dignity and social standing in front of others — causing loss of face is a serious harm in many cultures' },
    { word: 'protocol', definition: 'the accepted rules governing how meetings, introductions, and formal interactions are conducted in a specific cultural context' },
    { word: 'collectivist culture', definition: 'a culture that prioritises the group over the individual — decisions are made by consensus and loyalty to the group is a primary value' },
    { word: 'consensus-building', definition: 'working to achieve broad agreement among all relevant stakeholders before a decision is made — a valued process, not a bureaucratic delay' },
    { word: 'non-verbal cue', definition: 'a signal conveyed through body language, facial expression, or tone — often more revealing than words in high-context negotiations' },
  ],

  fillBlankExercise: [
    { before: 'This is a high-context communication environment — the most important messages will often not be stated', answer: 'directly', after: '.' },
    { before: 'The silence was not disagreement — it was', answer: 'consideration', after: ', and filling it with more words was the wrong move.' },
    { before: 'We should avoid putting them in a position where they lose', answer: 'face', after: '— raise the concern privately, after the meeting, through the right channel.' },
    { before: 'We need to allow time for', after: '— the decision will not come from today\'s meeting but from internal consultation with multiple stakeholder groups.', answer: 'consensus-building' },
    { before: 'The relationship needs to come before the', answer: 'contract', after: '— in this culture, trust is built through time and personal connection, not through a presentation.' },
    { before: 'The polite non-answer to our timeline proposal was', answer: 'indirect communication', after: '— it meant no, even though no one said the word.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Dana say is the most common cross-cultural miscommunication in negotiations?',
      options: ['Low-context communicators speak too loudly and too quickly for their high-context counterparts to follow comfortably', 'Low-context communicators interpret indirect communication as vague agreement — and proceed as if they have a yes', 'High-context communicators are reluctant to make decisions in meetings and prefer to communicate by email instead'],
      correctIndex: 1,
    },
    {
      question: 'What does Riley say is the correct response when silence follows a question in a high-context negotiation?',
      options: ['Rephrase the question to make it clearer — the silence signals that the counterpart did not understand what was being asked', 'Wait in silence — the counterpart is considering their response and interrupting disrupts a process of respectful reflection', 'Offer an alternative — the silence signals that the counterpart is uncomfortable with the question and needs a different option'],
      correctIndex: 1,
    },
    {
      question: 'What does Marcus say about the framing Dana used to surface a data inconsistency without causing loss of face?',
      options: ['Dana asked directly whether the data in the counterpart\'s presentation was accurate and from which source it came', 'Dana framed the concern as "something we want to make sure we have correctly understood" — a clarification, not a correction', 'Dana raised the data issue publicly in the meeting but did so diplomatically by complimenting the overall quality of the analysis'],
      correctIndex: 1,
    },
    {
      question: 'What does Riley say about the function of personal questions in relationship-first cultures?',
      options: ['Personal questions are small talk that fills time before the commercial discussion and should be kept brief', 'Questions about family, interests, and history are not small talk — they are the foundation of business trust in relationship-first cultures', 'Personal questions are considered intrusive in most business cultures and should be avoided in formal negotiation settings'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Think about a time you had a conversation or negotiation with someone from a very different cultural background. What was different about the communication style — and did you misread anything at first?',
      'In your own culture, is it normal to disagree directly with someone in a business meeting? Or do you tend to express disagreement more indirectly? What are the social rules around this in your context?',
      'What do you think is harder — adapting your communication style to a high-context culture if you come from a low-context one, or the reverse? And why?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'In a high-context negotiation, silence _____ as confusion — it should be interpreted as careful consideration.',
        options: ['should not be read', 'should not read', 'should not be reading'],
        correctIndex: 0,
        explanation: "'Should not be read' is the correct passive construction — silence (the subject) is being read or interpreted by someone. 'Silence should not be read as...' means 'people should not interpret silence as...' — the passive focuses on what should happen to the silence (how it should be perceived), not on who is perceiving it. 'Should not read' would make 'silence' the agent — as if the silence itself is doing the reading, which is illogical. 'Should not be reading' (present continuous passive) suggests an ongoing active process — also grammatically possible but less natural for expressing a general principle or rule.",
      },
      {
        sentence: 'The decision will not come from today\'s meeting — the organisation _____ with all relevant stakeholders first.',
        options: ['needs to consult', 'need to consult', 'needs consulting'],
        correctIndex: 0,
        explanation: "'Needs to consult' is correct: 'the organisation' is singular, so the verb is third person singular present: 'needs'. 'Need to consult' would require a plural subject: 'they need to consult'. 'Needs consulting' — 'needs + gerund' — has a passive meaning: 'the organisation needs consulting' would mean 'someone needs to consult the organisation' (the organisation is the object of consulting). The intended meaning is active — the organisation needs to do the consulting — so 'needs to consult' is correct.",
      },
      {
        sentence: 'Causing someone to lose face in a public setting is _____ in most high-context cultures.',
        options: ['a serious harm', 'seriously harming', 'serious harmful'],
        correctIndex: 0,
        explanation: "'A serious harm' is a noun phrase — 'causing face loss is a serious harm' — using 'harm' as a countable noun meaning 'a damaging act or consequence'. This is a standard predicative construction: '[subject] is [noun phrase]'. 'Seriously harming' is a gerund phrase — it would work in a different structure: 'causing someone to lose face seriously harms the relationship'. In the sentence as given (with 'is'), a noun phrase is needed after the verb, not another gerund. 'Serious harmful' is not grammatical — 'harmful' is an adjective that needs a noun: 'a serious, harmful act'.",
      },
      {
        sentence: 'The most senior person on their team _____ speaking until we had presented for 20 minutes — which was a significant non-verbal signal.',
        options: ['avoided', 'was avoiding', 'has avoided'],
        correctIndex: 0,
        explanation: "'Avoided' (simple past) is correct for a specific, completed past event — something that happened during a past meeting that is now being reported on. Simple past is used for past actions with a specific time reference ('during the 20-minute presentation' is an implied time boundary). 'Was avoiding' (past continuous) would describe an ongoing action during a period in the past — also possible, but 'avoided' is more natural for describing the observed behaviour as a specific event with a clear result. 'Has avoided' (present perfect) would describe a past action with current relevance — 'they have avoided speaking' (and this is still relevant now), which is not the intended meaning.",
      },
      {
        sentence: 'Let us find a way _____ — I want to understand what matters most to your team before we respond.',
        options: ['forward', 'forwards', 'ahead'],
        correctIndex: 0,
        explanation: "'Find a way forward' is the established idiomatic phrase — a fixed expression meaning 'find a path to progress' or 'find a solution'. 'Forward' is used in this phrase, not 'forwards' (which is more commonly used as a direction adverb in British English: 'move forwards') or 'ahead' (which has a different directional connotation — 'look ahead', 'plan ahead'). Fixed idiomatic expressions must be memorised as set phrases: 'find a way forward', 'move things forward', 'take this forward' — all use 'forward', not 'forwards' or 'ahead'.",
      },
      {
        sentence: 'In a collectivist culture, pressing _____ a quick decision signals disrespect for the group\'s decision-making process.',
        options: ['for', 'on', 'at'],
        correctIndex: 0,
        explanation: "'Press for something' is the correct phrasal verb construction: 'pressing for a quick decision'. 'Press for' means to push or advocate for something — to demand or urge that something happens. This is a fixed phrase: 'press for a decision', 'press for an answer', 'press for action'. 'Press on' means to continue despite difficulty — 'press on regardless'. 'Press at' is not a standard phrasal verb in this context. The idiomatic phrase 'press for' must be memorised as a set expression.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'In our last meeting with the Japanese partner, they said everything sounded interesting but we still have not heard back. What does that mean?'",
          options: [
            "It means they are very interested — 'sounds interesting' is often used in Japanese business culture to signal strong enthusiasm.",
            "In a high-context, indirect communication culture, 'that sounds interesting' in response to a proposal often means something between 'we are considering this carefully' and 'we have concerns we are not expressing directly'. It is very unlikely to be a strong yes — if the answer were yes, you would typically sense much more energy, engagement, and practical next-step questions in the meeting. The absence of a follow-up after a positive-sounding response is a significant signal. I would recommend sending a brief, warm follow-up message that invites them to share any questions or concerns they may have — framing it as 'we want to make sure we have provided everything you need to discuss this internally'. That gives them a face-saving route to raise concerns they may not have been able to raise directly in the meeting.",
            "It means they are not interested — if they were interested, they would have followed up immediately. Move on and find a different partner.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it accurately interprets the ambiguous signal in a high-context communication context, avoids over-confident interpretation in either direction, and gives a specific, practical next step that is culturally appropriate (a face-saving invitation to share concerns). Option A is incorrect — 'that sounds interesting' in a high-context negotiation is rarely a strong positive signal. Option C is too definitive — absence of immediate follow-up is common in consensus-building cultures and does not signal disinterest.",
        },
        {
          customerLine: "'The partner has just said something that contradicts the data they shared last week. Should I challenge this now, in the meeting?'",
          options: [
            "Yes — challenging data errors immediately shows that your team is attentive, rigorous, and takes accuracy seriously.",
            "Challenging the inconsistency publicly in the meeting risks putting the counterpart in a position where they lose face — particularly if they are from a face-sensitive cultural context. The better approach is to note the inconsistency now and address it privately. You can do this in three ways: request a break and raise it quietly with the most appropriate person on their side; frame it in the meeting as 'I want to make sure I have understood the data correctly — could you help me reconcile the figures from last week's presentation with these?' (which is a public but non-confrontational approach); or follow up after the meeting with a written note asking for clarification. The key principle is that the other party must be able to address the issue without publicly acknowledging being wrong.",
            "No — if they have given you incorrect data, that is their problem to correct. Wait for them to notice it themselves.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it explains the face-saving principle, gives three specific alternatives for how to address the issue without causing public embarrassment, and maintains the relationship while still ensuring the data is corrected. Option A is incorrect in a high-context context — public challenge, even when accurate, causes loss of face and damages the relationship. Option C is passive and commercially irresponsible — incorrect data in a negotiation has real consequences.",
        },
        {
          customerLine: "'We have been talking with this partner for three months and we have not agreed on anything yet. Should we just walk away?'",
          options: [
            "Yes — three months without a decision is a clear signal that the partner is not serious about the partnership.",
            "Before walking away, consider whether the timeline is a cultural norm rather than a signal of disinterest. In relationship-first, consensus-building cultures, three months of discussion without a signed agreement is not unusual — particularly for a significant partnership. The questions to ask are: have the meetings progressed in substance? Are they asking increasingly specific questions about implementation, pricing, and terms? Is the seniority of people in the room increasing? If the answer to those questions is yes, the process is probably moving — just at a pace that reflects their internal decision-making culture. If the answer is no — if the conversations have been circular, if the seniority has not changed, and if no internal stakeholders have been introduced — that is a clearer signal that the partnership may not be progressing. The right response in ambiguous cases is to ask, directly but respectfully: 'We are committed to this partnership. What would be most helpful from us to support your internal process?'",
            "Give them an ultimatum — tell them you need a decision within two weeks or you will pursue an alternative partner.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it gives the specific signals to read before making the decision to walk away, correctly contextualises three months as potentially normal in a consensus-building culture, and provides a respectful, direct way to move the conversation forward. Option A is an overconfident negative interpretation — timeline alone is not a reliable signal in cross-cultural negotiations. Option C — an ultimatum — is almost always the wrong move in a relationship-first culture and will typically end the partnership immediately.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the cross-cultural negotiation debrief meeting extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "The meeting in Tokyo went well overall — but there were a few moments where I think we misread the cultural signals." },
        { speaker: 'Riley', text: "Each of the silences in the meeting were significant — we should have waited rather than filling them with further explanation." },
        { speaker: 'Dana', text: "The senior partner stopped engaging with the financial section about 20 minutes in — that non-verbal cue tell us the proposal needs revisiting." },
        { speaker: 'Marcus', text: "We also tried to press for a decision at the end of the meeting, which I now realise was the wrong approach for a consensus-building culture." },
        { speaker: 'Riley', text: "The person which raised the face-saving concern during the break handled it extremely well — that was exactly the right approach." },
        { speaker: 'Dana', text: "Next time, we allow more time for the relationship to develop before we move to the commercial terms." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Each of the silences in the meeting were significant',
          correction: 'Each of the silences in the meeting was significant',
          explanation: "'Each' is always singular — 'each was', not 'each were'. The subject is 'each' (singular), not 'silences' (plural). The prepositional phrase 'of the silences in the meeting' modifies 'each' but does not change its grammatical number. 'Each of the silences was significant' — singular. Compare: 'All of the silences were significant' (plural) — 'all' takes the plural verb.",
        },
        {
          lineIndex: 2,
          incorrectText: 'that non-verbal cue tell us',
          correction: 'that non-verbal cue tells us',
          explanation: "The subject is 'that non-verbal cue' — singular. The verb must be third person singular present: 'tells', not 'tell'. 'Tell' is the base form or plural present: 'these cues tell us'. For the singular 'cue', the correct form is 'tells'. This is a straightforward subject-verb agreement error — singular subject, singular verb.",
        },
        {
          lineIndex: 4,
          incorrectText: 'The person which raised the face-saving concern',
          correction: 'The person who raised the face-saving concern',
          explanation: "'Who' is used in relative clauses referring to people — 'which' refers to things. A person is a human being, so the relative pronoun is 'who'. 'The person who raised the concern' — correct. 'The person which raised the concern' — incorrect. This is the same rule that applies throughout: people = 'who', things = 'which' or 'that'.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Write a pre-meeting cultural briefing note for a team preparing for a first business meeting with a Japanese partner.",
          salespersonStart: "Before we go into the meeting tomorrow, there are several cultural dynamics you need to understand —",
          suggestedCompletion: "because they will significantly affect how the meeting unfolds and how we should interpret what we see and hear. First — silence. After any question you ask, expect a pause. Do not fill it. The counterpart is thinking carefully about their response, and silence is a sign of respect for the question, not discomfort with it. Wait, however long it takes. Second — indirect communication. If they say 'that is an interesting idea' or 'we would need to discuss this internally', those phrases often carry more weight than they appear to. They may signal concern or reluctance that will not be stated more directly. Read the energy in the room, not just the words. Third — face-saving. Do not contradict anyone in front of the group, even politely. If you have a concern about something said, wait for a break and raise it privately. Fourth — the decision. You will not get one tomorrow. Do not push for one. The process of internal consensus-building will take weeks, and pressing for a faster answer will signal that you do not respect the way they make decisions.",
        },
        {
          customerLine: "Explain to a colleague why 'the relationship comes before the contract' in some cultures — and what that means practically.",
          salespersonStart: "In a relationship-first culture, the deal is not built on the contract — the contract documents what the relationship has already agreed. That is a fundamentally different starting point from what we are used to —",
          suggestedCompletion: "and it changes the whole approach to the first few interactions. In a transactional culture, a first business meeting is about establishing the commercial terms as efficiently as possible. In a relationship-first culture, a first business meeting is about establishing whether the human connection is strong enough to support a business relationship. If it is, the commercial conversation can begin. If it is not, the commercial conversation does not happen. That means the first meeting is not about your product or your price — it is about who you are, whether you are trustworthy, and whether you are the kind of person or organisation this counterpart wants to be in a long-term relationship with. Practically, it means arriving without a commercial agenda. It means asking personal questions and answering them yourself. It means being patient about when the business conversation starts, because trying to accelerate it is counterproductive.",
        },
        {
          customerLine: "A colleague asks: 'Why is it so important not to cause loss of face in some cultures? We just admitted we were wrong — isn't that the right thing to do?'",
          salespersonStart: "Admitting you are wrong is absolutely the right thing in many contexts — and in a low-context culture, doing so openly is usually respected and appreciated. But in a face-sensitive culture, the issue is not whether the admission is honest —",
          suggestedCompletion: "it is where and how it happens. In a face-sensitive cultural context, a person's public standing — how they are perceived by their colleagues, their superiors, and their counterparts — is a serious professional and social asset. Being publicly shown to be wrong, even by a well-intentioned partner, removes that standing in front of witnesses. And that loss is not easily repaired. It is not about fragile egos — it is about a different set of social norms around how errors are handled in a group setting. In these cultures, errors are acknowledged and corrected in private, through trusted intermediaries, or through framing that allows the person to revise their position without public acknowledgement. The same outcome — the error corrected, the information updated — can be achieved without the public moment. And achieving it that way preserves the relationship, the trust, and the counterpart's ability to work with you effectively going forward.",
        },
      ],
    },
  },
};

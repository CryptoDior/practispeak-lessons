import { Lesson } from '@/types/lesson';

export const reviewC1CommunicationMastery: Lesson = {
  slug: 'review-c1-communication-mastery',
  title: 'Review: C1 Communication Mastery',
  subtitle: 'Consolidating the advanced vocabulary, phrases, and communication skills from lessons 11 to 18',
  level: 'C1-C2',
  description: "This review lesson consolidates the vocabulary and communication skills from lessons 11 to 18. You will revisit the most important terms from AI and automation, media relations, luxury marketing, cause-related marketing, recession marketing, cross-cultural negotiation, advanced presentation skills, and white paper writing. The focus is on active recall, applying vocabulary and phrases in new contexts, and identifying the subtle distinctions between terms you may have confused. By the end of this lesson, you should be able to move fluidly across these eight topic areas in a real professional conversation.",
  heroImage: '/images/review-c1-communication-mastery-hero.png',

  vocabulary: [
    {
      word: 'HALLUCINATION (AI)',
      partOfSpeech: 'noun',
      definition: "When an AI model generates output that is factually incorrect, fabricated, or plausible-sounding but wrong — typically because the model does not know the answer and produces a confident-sounding response anyway. Recognising and managing hallucination is a key skill in responsible AI use.",
      example: "The model hallucinated a statistic in paragraph three — the number does not appear in any of the source documents. Riley flagged it in the review before it reached the client. Every AI-generated factual claim now goes through a human verification step before publication.",
      imageSlug: '/images/hallucination-ai.png',
    },
    {
      word: 'EMBARGO',
      partOfSpeech: 'noun / verb',
      definition: "An agreement with a journalist or media outlet that they can receive information early — ahead of public release — on the condition that they do not publish until a specified date and time. Embargoes allow media to prepare informed coverage in advance; breaking an embargo is a serious breach of trust that can damage a brand's press relationships permanently.",
      example: "The results were distributed under embargo at 6 AM with a publication window of 7 AM. Every outlet on the list honoured it. The one that had broken an embargo the previous year was not included in the distribution.",
      imageSlug: '/images/review-c1-communication-mastery-embargo.png',
    },
    {
      word: 'GREENWASHING',
      partOfSpeech: 'noun',
      definition: "When a company presents itself as more environmentally responsible or socially purposeful than it actually is — using marketing language that implies a level of commitment that the business's actual practices do not support. Greenwashing is increasingly risky: consumers, regulators, and journalists are skilled at identifying it, and the reputational damage from being caught is significantly worse than not making the claim at all.",
      example: "The claim 'most sustainable choice in the category' was removed because Bloom could not substantiate it against every competitor. Dana replaced it with a specific, auditable metric the brand could defend. One precise claim always outperforms three ambitious ones that cannot be evidenced.",
      imageSlug: '/images/review-c1-communication-mastery-greenwashing.png',
    },
    {
      word: 'VALUE MESSAGING',
      partOfSpeech: 'noun',
      definition: "Marketing communication that emphasises the practical, functional, or economic benefit of a product rather than its aspirational, premium, or lifestyle associations. Value messaging is not the same as low-price messaging — it focuses on what the customer gets for their money, including quality, durability, efficiency, and risk reduction. Effective in periods of economic uncertainty when customers are more rational about spending.",
      example: "Velo shifted to value messaging during the downturn — leading with total cost of ownership rather than premium experience. The message stayed high-quality but became rational rather than aspirational. Conversion rates held while competitors who kept aspirational messaging saw volume fall.",
      imageSlug: '/images/review-c1-communication-mastery-value-messaging.png',
    },
    {
      word: 'FACE-SAVING',
      partOfSpeech: 'adjective',
      definition: "In cross-cultural communication, the practice of protecting someone's dignity, reputation, or status in a social or professional context — particularly by avoiding public embarrassment, direct refusals, or challenges that would cause them to appear weak or incompetent in front of others. Face-saving is especially important in high-context and collectivist cultures where public reputation carries significant social and professional weight.",
      example: "Dana restructured the closing ask to allow the partner to respond in writing after the meeting rather than committing publicly in the room. The face-saving design meant no one was put in a position where they had to refuse in front of others. The written response came within 48 hours.",
      imageSlug: '/images/review-c1-communication-mastery-face-saving.png',
    },
    {
      word: 'BRIDGE (PRESENTATION)',
      partOfSpeech: 'noun / verb',
      definition: "In presentations and Q&A sessions, a bridge is a technique for moving from a difficult question or topic to the message you want to deliver. The bridge phrase connects the questioner's concern to your preferred answer — acknowledging the question without being trapped by it. Common bridge phrases include 'and what that reflects is', 'what is important to understand about that is', and 'and the context for that is'.",
      example: "Riley bridged from the margin decline to the investment story: 'You are right that margins are down — and what that reflects is a deliberate enterprise acquisition decision.' The bridge accepted the fact and changed its meaning. The investor left the conversation with a different frame than the one they arrived with.",
      imageSlug: '/images/bridge-presentation.png',
    },
    {
      word: 'THOUGHT LEADERSHIP',
      partOfSpeech: 'noun',
      definition: "Content, research, or commentary that genuinely advances the reader's understanding of a topic — beyond what they already know. Thought leadership requires either original data (primary research that no competitor has) or original thinking (a frame, argument, or perspective that challenges the conventional wisdom in the category). Most content described as thought leadership does not meet either criterion.",
      example: "Thought leadership requires either original data or a frame that challenges what the category already believes. A white paper that summarises industry reports is well-evidenced content, not thought leadership. The test is whether the reader thinks differently about something they thought they understood.",
      imageSlug: '/images/thought-leadership-review.png',
    },
    {
      word: 'RHETORICAL PIVOT',
      partOfSpeech: 'noun',
      definition: "A move in a presentation or Q&A where you acknowledge one point and use it to drive toward a stronger, more powerful argument. A rhetorical pivot does not deny the challenge — it accepts it and makes it into a platform for your own message. The best pivots feel like a moment of insight rather than a piece of technique; if the audience notices the technique, the pivot has not worked.",
      example: "Dana acknowledged the AI results challenge and pivoted: 'You are right — and that is exactly why this is an investment thesis, not a results story.' The pivot accepted the observation and changed the question the board was answering. When it works, the audience does not notice the technique.",
      imageSlug: '/images/rhetorical-pivot-review.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'LET ME DRAW THAT TOGETHER — ACROSS THE TOPICS WE HAVE COVERED...',
      definition: "A consolidation phrase for connecting themes across multiple lessons or sections — used in review sessions, presentations, or discussions where you want to synthesise learning from different areas into a single coherent frame. Signals to the audience that you are moving from individual topics to the overarching insight.",
      example: "Let me draw that together — across the eight lessons we have covered, the common thread is the gap between what you intend to communicate and what the audience actually receives. Every topic in the series is a different version of the same problem. The language tools are the means; reading the gap is the skill.",
      imageSlug: '/images/let-me-draw-that-together.png',
      inAction: 'Let me draw that together — across the topics we have covered in this series, the core skill in every context is the ability to understand what the audience is receiving, not just what you are saying.',
      register: "Neutral — Forge (B2B HR, leadership development programme): facilitation notes read 'let me draw that together — across the themes of trust, communication, and performance, the common thread is that people leave organisations when the gap between what leaders say and what employees experience becomes too wide to bridge.' | Flux (SaaS, quarterly business review): executive presentation reads 'let me draw that together — across the four business units, the single variable that explains 80% of the performance variance is customer onboarding quality in the first 30 days.' | Kova (fintech, board strategy session): board presentation reads 'let me draw that together — across the three strategic pillars, the constraint is the same: we are building at a speed that our regulatory relationships cannot currently support.'",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — leadership development programme facilitation', imageSlug: '/images/visual-examples/forge-draw-together-leadership.png', caption: '"Let me draw that together — across the themes of trust, communication, and performance, the common thread is the gap between what leaders say and what employees experience."', aspectRatio: '16/9' },
        { brand: 'Flux', context: 'SaaS platform — quarterly business review executive presentation', imageSlug: '/images/visual-examples/flux-draw-together-qbr-onboarding.png', caption: '"Let me draw that together — across the four business units, the single variable explaining 80% of performance variance is customer onboarding quality in the first 30 days."', aspectRatio: '4/5' },
      ],
      inContext: "At the end of the review session, Marcus tried the consolidation phrase: Let me draw that together — across the eight lessons we have reviewed today, the common skill is reading what the other person is actually receiving, not just what you intend to communicate. Riley: That is a good synthesis. Dana: And notice what it does for the group — it connects eight separate topics into one frame that is easier to remember and apply. The synthesis is the last learning act of a review session. Without it, the group leaves with eight separate things. With it, they leave with one insight that organises the eight.",
    },
    {
      phrase: 'WHAT DISTINGUISHES X FROM Y IN THIS CONTEXT IS...',
      definition: "A phrase for articulating the specific, functional difference between two similar concepts — used in review sessions, explanations, and professional discussions where precision matters. More precise than 'X is different from Y because' — it acknowledges similarity (both X and Y are in the same conceptual neighbourhood) while focusing sharply on the distinguishing variable.",
      example: "What distinguishes a reframe from a deflection in this context is direction — reframing offers a more complete picture of the same topic; deflecting moves away from the topic to a different one. Both are legitimate techniques but they are not interchangeable. The situation determines which one is appropriate.",
      imageSlug: '/images/what-distinguishes-x-from-y.png',
      inAction: 'What distinguishes value messaging from discount messaging in this context is the brand frame — value messaging says "this is worth every pound," while discount messaging says "we have lowered the price," which signals the full price was wrong.',
      register: "Neutral — Forge (B2B HR, training session): learning facilitation reads 'what distinguishes employer brand from culture in this context is audience — employer brand is the external reputation of the organisation as a place to work; culture is the internal lived experience. They should align, but they are often different.' | Kova (fintech, compliance training): workshop facilitation reads 'what distinguishes a regulatory notification from a regulatory disclosure in this context is timing — a notification is prospective, made before an event; a disclosure is retrospective, made after one.' | Flux (SaaS, product team): product review reads 'what distinguishes a feature request from a use case in this context is specificity — a feature request describes the solution the customer wants; a use case describes the problem they are trying to solve.'",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — employer brand vs culture training session', imageSlug: '/images/visual-examples/forge-distinguishes-employer-brand-culture.png', caption: '"What distinguishes employer brand from culture in this context is audience — employer brand is the external reputation; culture is the internal lived experience. They should align, but they often differ."', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — compliance training, notification vs disclosure', imageSlug: '/images/visual-examples/kova-distinguishes-notification-disclosure.png', caption: '"What distinguishes a regulatory notification from a disclosure in this context is timing — a notification is prospective, made before an event; a disclosure is retrospective, made after one."', aspectRatio: '4/5' },
      ],
      inContext: "Riley tested Marcus on three pairs from the eight lessons: greenwashing vs purpose-led, embargo vs off the record, and reframe vs deflect. Each time, Marcus used the structure: 'What distinguishes X from Y in this context is...' Dana: That structure forces precision. You cannot use it vaguely — it requires you to name the specific variable that separates the two concepts. By the end of the exercise, Marcus had articulated distinctions he would previously have answered with 'they are kind of similar but different.' The phrase does the conceptual work of forcing you to find the distinguishing variable.",
    },
    {
      phrase: 'LOOKING BACK AT WHAT WE COVERED IN LESSON..., THE KEY INSIGHT WAS...',
      definition: "A retrospective consolidation phrase used in review sessions to anchor a recalled concept in its original context before applying it to a new one. By naming the lesson, the speaker signals that they are drawing on a specific body of knowledge rather than speaking generally — making the connection between past learning and current application explicit.",
      example: "Looking back at what we covered in the cross-cultural negotiation lesson, the key insight was that silence is not disagreement — it is often consideration. That insight connects directly to the Q&A lesson: pausing before answering signals you are taking the question seriously. The same behaviour means different things in different contexts.",
      imageSlug: '/images/looking-back-at-what-we-covered.png',
      inAction: 'Looking back at what we covered in the lesson on cause-related marketing, the key insight was that purpose needs to be embedded in the business model, not bolted on to the marketing calendar — which connects directly to what we said today about greenwashing.',
      register: "Neutral — Forge (B2B HR, learning facilitation): workshop facilitation reads 'looking back at what we covered in the session on performance conversations, the key insight was that feedback lands best when the relationship is strong enough to hold it — which connects directly to what we are discussing now about psychological safety.' | Flux (SaaS, team retrospective): sprint retrospective reads 'looking back at what we covered in the last retrospective, the key insight was that velocity drops when requirements change after sprint start — the same pattern is visible in this sprint's data.' | Kova (fintech, risk committee): risk committee meeting reads 'looking back at what we covered in the Q1 risk review, the key insight was that operational risk concentrates in the onboarding process — and the Q2 data shows that the same concentration point has now produced a reportable incident.'",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — learning facilitation, review session', imageSlug: '/images/visual-examples/forge-looking-back-performance-feedback.png', caption: '"Looking back at what we covered in the performance conversations session, the key insight was that feedback lands best when the relationship is strong enough to hold it."', aspectRatio: '16/9' },
        { brand: 'Flux', context: 'SaaS platform — sprint retrospective review', imageSlug: '/images/visual-examples/flux-looking-back-sprint-velocity.png', caption: '"Looking back at what we covered in the last retrospective, the key insight was that velocity drops when requirements change after sprint start — the same pattern is visible in this sprint."', aspectRatio: '4/5' },
      ],
      inContext: "Dana ran the consolidation exercise: for each of the eight lessons, name the single key insight in one sentence. Marcus went through all eight — using 'looking back at what we covered in the lesson on..., the key insight was...' Riley: That phrase is a learning tool, not just a presentation tool. By anchoring the recall in the lesson name, you are building a memory structure — a retrieval hook. Marcus: I found that the act of naming the lesson made the recall easier. It is a category before the detail. Dana: That is how memory works at C1 level. You do not just know a word or a phrase — you know where it came from, what problem it solves, and how it connects to the things around it.",
    },
    {
      phrase: 'THE COMMON THREAD ACROSS ALL OF THESE IS...',
      definition: "A phrase for identifying the underlying principle, pattern, or skill that connects multiple different topics or examples. Used in review sessions, executive summaries, board presentations, and synthesis discussions — signals that the speaker has moved from comprehension of individual elements to genuine integration of the whole.",
      example: "The common thread across all eight lessons is the gap between what you intend to communicate and what the audience actually receives. In AI governance, in media relations, in luxury positioning, in a board Q&A — the skill is the same. Professional communication is the practice of closing that gap deliberately.",
      imageSlug: '/images/the-common-thread-across-all-of-these.png',
      inAction: 'The common thread across all of these is that the most effective communicators are not the ones who have the best content — they are the ones who understand what their audience is actually receiving and adjust accordingly.',
      register: "Neutral — Forge (B2B HR, leadership programme synthesis): programme conclusion reads 'the common thread across all of these leadership challenges is that they are fundamentally communication problems — the technical decisions are often less difficult than the human conversations required to implement them.' | Kova (fintech, executive offsite synthesis): executive session reads 'the common thread across all of these strategic risks is speed — the regulatory environment, the competitive landscape, and the talent market are all moving faster than our current operating model can respond to.' | Flux (SaaS, annual review): annual review synthesis reads 'the common thread across all of our highest-performing teams is psychological safety — in every case, the teams with the best results are the ones where people feel safe raising problems before they become failures.'",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — leadership programme synthesis session', imageSlug: '/images/visual-examples/forge-common-thread-leadership-communication.png', caption: '"The common thread across all of these leadership challenges is that they are fundamentally communication problems — the technical decisions are less difficult than the human conversations required to implement them."', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — executive strategy offsite synthesis session', imageSlug: '/images/visual-examples/kova-common-thread-speed-strategic-risk.png', caption: '"The common thread across all of these strategic risks is speed — the regulatory environment, competitive landscape, and talent market are all moving faster than our current operating model can respond to."', aspectRatio: '4/5' },
      ],
      inContext: "The review session ended. Dana asked Marcus to summarise in two sentences what he would take from the eight lessons into his next board presentation. Marcus: The common thread across all of these lessons is that professional communication is the practice of understanding and closing the gap between what you intend and what the audience receives. My job in the board presentation is not to deliver information — it is to understand what the board is receiving and to adjust the delivery until what I intend and what they receive are the same thing. Riley: That is a C1-level synthesis. That is what the series was for.",
    },
    {
      phrase: 'WHERE I THINK I STILL NEED PRACTICE IS...',
      definition: "A self-assessment phrase used in learning and professional development contexts to identify gaps in confidence or fluency. In C1-level professional development, honest self-assessment is itself a skill — naming your own gaps with specificity signals metacognitive awareness, which is the ability to think about your own thinking and learning.",
      example: "Where I think I still need practice is the bridge technique — in a live Q&A when a question catches me off guard, I go straight to defending the number rather than bridging to the message. The habit is strong under pressure. Naming it specifically is the first step to replacing it.",
      imageSlug: '/images/where-i-still-need-practice.png',
      inAction: 'Where I think I still need practice is the structured deflection — specifically, the phrase structure for saying what I can and cannot comment on without it sounding like I am avoiding the question.',
      register: "Neutral — Forge (B2B HR, coaching session): coaching conversation reads 'where I think I still need practice is the difficult feedback conversation — I can prepare for it and I can execute the structure, but in the moment when the other person reacts emotionally, I lose the thread.' | Kova (fintech, analyst preparation): investor relations coaching reads 'where I think I still need practice is the bridge technique — I know the concept but in a live Q&A when the question catches me off guard, I go straight to defending the number rather than bridging to the message.' | Flux (SaaS, leadership coaching): leadership development coaching reads 'where I think I still need practice is the stakeholder alignment conversation — specifically, reading whether a stakeholder's agreement is genuine or a face-saving yes that will not translate into action.'",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — leadership coaching self-assessment', imageSlug: '/images/visual-examples/forge-still-need-practice-feedback-conversation.png', caption: '"Where I think I still need practice is the difficult feedback conversation — I can prepare and execute the structure, but when the other person reacts emotionally, I lose the thread."', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — investor relations Q&A coaching self-assessment', imageSlug: '/images/visual-examples/kova-still-need-practice-bridge-technique.png', caption: '"Where I think I still need practice is the bridge technique — in a live Q&A when the question catches me off guard, I go straight to defending the number rather than bridging to the message."', aspectRatio: '4/5' },
      ],
      inContext: "Dana made the self-assessment phrase mandatory at the end of every review session. The rule was: two sentences minimum, the gap must be specific enough to be practised. Marcus at first wrote: 'Where I think I still need practice is cross-cultural communication.' Dana sent it back: too broad. Try again. Marcus rewrote: 'Where I think I still need practice is reading whether a silence in a negotiation is consideration or disagreement — I default to filling the silence and I know that is the wrong move in some cultural contexts, but in the moment the discomfort overrides my training.' Dana: That is specific. That is practisable. That is a self-assessment.",
    },
    {
      phrase: 'THE WORD / PHRASE THAT IS EASY TO CONFUSE HERE IS... — THE DIFFERENCE IS...',
      definition: "A clarification phrase used in learning discussions and vocabulary review sessions to surface and resolve a common point of confusion — used by teachers, coaches, and C1-level learners who can identify subtle distinctions between similar terms and articulate the distinguishing factor clearly.",
      example: "The phrase that is easy to confuse here is 'off the record' and 'on background' — the difference is what the journalist can do with the information. Off the record means they cannot use it at all; on background means they can report it without attribution. Using the wrong term in a media conversation has real consequences.",
      imageSlug: '/images/the-word-easy-to-confuse.png',
      inAction: 'The phrase that is easy to confuse here is "reframe" and "deflect" — the difference is that reframing offers a more complete picture of the same topic, while deflecting redirects to a different topic entirely.',
      register: "Neutral — Forge (B2B HR, learning facilitation): workshop notes read 'the term that is easy to confuse here is employer brand and EVP — the difference is that the employer brand is the external perception; the EVP is the internal proposition. The brand should reflect the EVP, but they are not the same document or the same audience.' | Kova (fintech, compliance training): training notes read 'the concept that is easy to confuse here is regulatory notification and regulatory disclosure — the difference is timing and direction: notification goes to the regulator before an event; disclosure goes to the market after one.' | Flux (SaaS, product training): onboarding notes read 'the term that is easy to confuse here is feature request and bug report — the difference is expectation: a bug is something that does not work as designed; a feature request is something the design did not include.'",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — learning facilitation, terminology review', imageSlug: '/images/visual-examples/forge-easy-to-confuse-employer-brand-evp.png', caption: '"The term that is easy to confuse here is employer brand and EVP — the brand is the external perception; the EVP is the internal proposition. The brand should reflect the EVP, but they are different documents."', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — compliance training terminology clarification', imageSlug: '/images/visual-examples/kova-easy-to-confuse-notification-disclosure.png', caption: '"The concept that is easy to confuse here is regulatory notification and disclosure — notification goes to the regulator before an event; disclosure goes to the market after one."', aspectRatio: '4/5' },
      ],
      inContext: "Riley ran the confusion-mapping exercise at the end of the review. Each team member had to identify three pairs of terms from the eight lessons that they found easy to confuse — and articulate the distinguishing factor for each. Marcus: The word that is easy to confuse is 'concede' and 'deflect' — they both involve not defending your original position fully. The difference is that conceding acknowledges the other person is right; deflecting redirects without acknowledging whether they are right or not. Dana: That is precisely the distinction. Conceding is an intellectual move — you are accepting the validity of the challenge. Deflecting is a navigational move — you are moving to better terrain. Different tools for different situations.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "This is the review session — eight lessons, one conversation. I want to move fast and connect themes across topics. Marcus, start with AI and automation. What is the single C1-level insight from that lesson?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Looking back at what we covered in the AI and automation lesson, the key insight was that AI governance is not a constraint on AI adoption — it is what makes AI adoption credible. Without governance, the efficiency gains are real but the [[hallucination:AI output that is confidently wrong]] risk undermines trust in everything the system produces.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Good. Media relations — the word that is easy to confuse there is off the record and on background. The difference is what the journalist can do with the information. Off the record: they know it but cannot use it. On background: they can use it without attributing it to you.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Luxury and cause-related marketing next — what distinguishes luxury positioning from purpose-led marketing in this context is the source of the brand's permission. Luxury permission comes from heritage, exclusivity, and craftsmanship. Purpose-led permission comes from [[greenwashing:claiming environmental or social credentials you have not earned]] avoidance — from proving the commitment is real, not performative.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Recession marketing: [[value messaging:communication that emphasises practical benefit rather than aspiration]] is not the same as low-price messaging. [[Value messaging]] says 'this is worth every pound.' Low-price messaging says 'we have lowered the price.' The brand that confuses the two loses its positioning when the recession ends.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Cross-cultural negotiation: the insight was about [[face-saving:protecting someone's dignity in a social or professional context]]. A 'yes' that is given to avoid public disagreement is not a commitment — it is a face-saving exit. The skill is to create structures that allow the other side to decline without losing face.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Presentation skills — the phrase that matters most for this group is 'I take that point, and here is where I see it differently.' It is the structure that lets you concede without collapsing and disagree without being defensive. The [[bridge:a technique for moving from a difficult point to the message you want to deliver]] is the connection between the challenge and the message.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "White paper writing: the word that is easy to confuse is abstract and executive summary. The abstract is a short preview — 200 words. The executive summary is a standalone two-page version of the complete argument. Both are for readers who will not read the full document — but they serve different audiences and different purposes.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Let me draw that together — the [[common thread:the underlying principle connecting multiple topics]] across all eight lessons is the gap between what you intend to communicate and what the audience actually receives. Every lesson is about understanding and closing that gap with precision. Where I think I still need practice: reading the gap in real time — not in preparation, but in the live conversation.",
    },
  ],

  matchingExercise: [
    { word: 'hallucination (AI)', definition: 'when an AI model generates output that is factually wrong or fabricated — producing a confident-sounding response without a reliable knowledge base' },
    { word: 'embargo', definition: 'an agreement with media that they receive information early on the condition they do not publish until a specified date and time' },
    { word: 'greenwashing', definition: 'presenting a company as more environmentally or socially responsible than its actual practices support — increasingly detected by consumers and regulators' },
    { word: 'value messaging', definition: 'communication that emphasises practical, functional, or economic benefit — what the customer gets for their money — rather than aspirational associations' },
    { word: 'face-saving', definition: 'protecting someone\'s dignity or status by avoiding situations where they would have to publicly refuse, fail, or appear incompetent' },
    { word: 'bridge', definition: 'in a presentation, the technique of moving from a difficult question to the message you want the audience to understand — by connecting the two with a transition phrase' },
    { word: 'thought leadership', definition: 'content that genuinely advances the reader\'s understanding beyond what they already know — through original data or a perspective that challenges the conventional wisdom' },
    { word: 'rhetorical pivot', definition: 'acknowledging a challenge and using it as a platform for a stronger argument — so the criticism becomes a launching point for your key message' },
  ],

  fillBlankExercise: [
    { before: 'Let me draw that together — across all eight lessons, the common', answer: 'thread', after: 'is the gap between what you intend to communicate and what the audience actually receives.' },
    { before: 'What distinguishes a reframe from a deflection in this context is', answer: 'direction', after: '— reframing stays on the topic and offers a more complete picture; deflecting moves away from the topic to a different one.' },
    { before: 'Looking back at what we covered in the cross-cultural negotiation lesson, the key', answer: 'insight', after: 'was that silence is not disagreement — in high-context cultures, it is often consideration.' },
    { before: 'The word that is easy to confuse here is off the record and on background — the', answer: 'difference', after: 'is what the journalist can do with the information: nothing, or report it without attribution.' },
    { before: 'Where I think I still need practice is the bridge technique — in a live Q&A, I go straight to defending the number rather than', answer: 'bridging', after: 'to the message I want the investor to take away.' },
    { before: 'The common thread across all of these lessons is that professional communication is the practice of understanding and', answer: 'closing', after: 'the gap between what you intend and what is received.' },
  ],

  multipleChoiceExercise: [
    {
      question: "What does Dana identify as 'the common thread' across all eight lessons in this review?",
      options: ['The importance of original research and data in every professional communication context — from AI governance to white paper writing', 'The gap between what you intend to communicate and what the audience actually receives — and the practice of closing that gap deliberately', 'The need to understand your audience\'s cultural context before choosing which communication technique to deploy in a given situation'],
      correctIndex: 1,
    },
    {
      question: "What does Riley say is the difference between 'off the record' and 'on background'?",
      options: ['Off the record is for verbal conversations only; on background is for written information shared in documents or briefing notes', 'Off the record means the journalist cannot use the information at all; on background means they can use it without attributing it to you by name', 'Off the record protects the speaker legally; on background protects the journalist legally — both allow the information to be published under certain conditions'],
      correctIndex: 1,
    },
    {
      question: 'According to Marcus, what is the difference between value messaging and low-price messaging?',
      options: ['Value messaging focuses on the features of the product; low-price messaging focuses on the emotional benefit of saving money for the customer', 'Value messaging says "this is worth every pound"; low-price messaging says "we have lowered the price" — one preserves positioning, the other signals the full price was wrong', 'Value messaging is appropriate in a recession; low-price messaging is appropriate in a growth period — the distinction is about economic timing, not brand positioning'],
      correctIndex: 1,
    },
    {
      question: 'What does Dana say is the correct distinction between an abstract and an executive summary?',
      options: ['An abstract is written by the author; an executive summary is written by a communications team — they serve the same function but have different sources', 'The abstract is a short preview of 150 to 300 words; the executive summary is a standalone compressed version of the full argument — one to two pages', 'An abstract is required for all white papers; an executive summary is optional and only included when the paper is over 20 pages in length'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      "Which of the eight lessons in this series did you find most useful for your own professional situation — and which felt least relevant? Be specific about why.",
      "Looking back at the vocabulary from all eight lessons, are there three or four words or phrases that you have actually started using in your work? What made those particular ones stick?",
      "Is there a communication situation in your work — a meeting, a presentation, a difficult conversation, a piece of writing — where you would now approach it differently based on something from this series? What would you do differently?",
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'The ability to identify the gap between what you intend to communicate and what the audience _____ is the foundation of C1-level professional communication.',
        options: ['receives', 'receive', 'is receiving'],
        correctIndex: 0,
        explanation: "Simple present third person singular ('receives') is correct because the sentence describes a general truth about communication — what the audience always does, as a regular pattern. 'Receive' would be plural — the subject 'the audience' is treated as a collective singular noun in British English, so 'receives' is standard in a formal or professional context. 'Is receiving' (present continuous) would describe a specific, ongoing action happening right now — 'what the audience is currently receiving in this moment' — rather than the general communicative function the sentence is defining.",
      },
      {
        sentence: 'Greenwashing is not a strategy — it is a reputational risk, and _____ caught is significantly more damaging than not making the claim at all.',
        options: ['being', 'to be', 'having been'],
        correctIndex: 0,
        explanation: "'Being caught' is the gerund phrase that functions as the subject of the second clause: 'being caught is significantly more damaging.' The gerund (verb + -ing used as a noun) is the standard form after 'it is' when introducing a subject: 'being caught is the risk.' 'To be caught' (infinitive) could also work in this position — 'to be caught is significantly more damaging' — but is less natural in spoken and written contemporary English. 'Having been caught' (perfect gerund) implies that the catching has already occurred: 'having been caught is more damaging than not claiming' — which is slightly awkward in this context.",
      },
      {
        sentence: 'The bridge technique _____ you to acknowledge a difficult question without being trapped by the frame in which it was asked.',
        options: ['allows', 'allow', 'is allowing'],
        correctIndex: 0,
        explanation: "Simple present third person singular ('allows') is correct — the sentence describes the general capability of the bridge technique, not a specific or current action. 'The bridge technique allows you to' means 'it is a tool that gives you the capacity to.' 'Allow' is the plural form. 'Is allowing' (present continuous) would describe a specific, ongoing instance — 'the bridge technique is currently allowing you to' — appropriate for describing what is happening right now in a specific Q&A, not for defining how the technique works in general.",
      },
      {
        sentence: 'A rhetorical pivot _____ when the audience notices the technique — if they can see it working, it has failed.',
        options: ['fails', 'is failing', 'fail'],
        correctIndex: 0,
        explanation: "In a conditional sentence describing a general truth or predictable outcome, simple present is used in both clauses: 'a rhetorical pivot fails when the audience notices.' This is zero conditional — used for events that reliably follow from a condition: 'when X happens, Y happens.' 'Is failing' (present continuous) would describe a specific ongoing instance of failure, not a general rule. 'Fail' is the plural form — the subject 'a rhetorical pivot' is singular.",
      },
      {
        sentence: 'Thought leadership _____ be a synthesis of existing knowledge — it must advance the reader\'s understanding beyond what they already know.',
        options: ['cannot', 'can', 'could not'],
        correctIndex: 0,
        explanation: "'Cannot' expresses an absolute exclusion — thought leadership is definitionally excluded from being a synthesis of existing knowledge. This is the definitional claim of thought leadership as discussed in the lesson: it is not synthesis, it is advancement. 'Can' would mean thought leadership is able to be a synthesis — which contradicts the definition. 'Could not' is the past conditional or more tentative version — 'could not be a synthesis' implies it was not possible at some point or under some condition. 'Cannot' is the present-tense absolute — the right choice for a definitional statement.",
      },
      {
        sentence: 'Self-assessment _____ value at C1 level when it is specific enough to lead to a concrete practice plan rather than a vague description of a weakness.',
        options: ['has', 'have', 'is having'],
        correctIndex: 0,
        explanation: "'Has' is the correct singular verb — the subject 'self-assessment' is singular. The sentence describes a general principle: self-assessment has value when it is specific. Simple present is correct for general truths and principles. 'Have' would be the plural form. 'Is having' would be present continuous — describing a specific, ongoing instance of value being generated right now — which is not the intended meaning. Note: 'have' is also used in the idiomatic expression 'have value' — but the subject here is singular, so 'has value' is correct.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'I have been through all eight lessons but I feel like I have forgotten most of the vocabulary. Is there a faster way to remember it all?'",
          options: [
            "Try making flashcards for each word — the act of writing them out and testing yourself repeatedly is the most effective memorisation technique.",
            "The vocabulary from these lessons is not designed to be memorised as a list — it is designed to be used. The fastest way to retain it is not repetition in isolation but deployment in context. Take three or four words from the lessons and deliberately use them in your next meeting or email — in a sentence that actually reflects what you mean. The act of using a word in a real communicative context, where it does real work, builds retention far faster than reviewing a list. The words you will forget are the ones you recognise but have never used. The words you will keep are the ones you have needed.",
            "Reviewing the lessons again will help — the second time through, things that did not stick the first time often become clearer because you have the broader context.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it directly addresses the underlying issue (the vocabulary is not designed for list memorisation) and offers the most effective retention mechanism (deployment in real context). It is practical, specific, and grounded in how language acquisition actually works at an advanced level. Option A is not wrong — retrieval practice is effective — but flashcards treat the vocabulary as isolated items, which is how these words were not designed to be learned. Option C is a reasonable suggestion but does not address the core issue, which is that recognition without production does not produce retention.",
        },
        {
          customerLine: "'Our team uses the term thought leadership for everything we publish. Is that a problem?'",
          options: [
            "It depends on what you publish — if the content is genuinely insightful and well-researched, calling it thought leadership is appropriate regardless of whether it meets a strict definition.",
            "It is a problem if the content does not meet the standard — because the term 'thought leadership' sets an expectation in the audience's mind that the content will advance their understanding of something they thought they knew. When that expectation is not met, the audience notices — and the term becomes a marker for content that overpromises and underdelivers. The question to ask before calling anything thought leadership is: does this make the reader think differently about something they thought they understood? If yes, the label is accurate. If no, it is content — which can be very valuable, but should not be mislabelled, because mislabelling trains your audience to distrust your content labels.",
            "It is a common practice in the industry — most companies use thought leadership as a general category for high-quality long-form content, and the audience understands that it covers a range of quality levels.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it diagnoses the specific risk (expectation mismatch), gives the audience's perspective, provides the correct test for the label, and distinguishes between content (valuable) and thought leadership (a higher standard). It is direct without being dismissive. Option A avoids the question — 'depends on what you publish' is technically true but gives no standard. Option C normalises a mislabelling practice rather than correcting it.",
        },
        {
          customerLine: "'I have a board presentation next week on a topic where I am not the expert. How do I handle questions I cannot answer?'",
          options: [
            "Prepare thoroughly so that there are no questions you cannot answer — the best protection against a difficult Q&A is deep preparation.",
            "There are three tools from the presentation skills lesson that apply here directly. First: 'what I can say is / what I am not in a position to comment on' — for questions that go beyond your brief, this structured deflection gives the audience something real while being honest about the limit of your knowledge. Second: 'let me park that and come back to it' — for questions that belong to a section you have not reached, or that should be directed to a specialist. Third: 'if I understand your concern correctly' — for questions that reveal a concern you had not anticipated, this paraphrase buys you thinking time and ensures you are answering the real concern rather than the surface question. The goal is not to answer everything — it is to handle everything well.",
            "Be honest — tell the board that you are not the subject matter expert and that you have brought in the relevant specialists to be available for detailed questions.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it draws directly on the lesson content, names three specific tools with their applications, and frames the goal correctly ('handle everything well', not 'answer everything'). It is actionable and precise. Option A is good advice in principle but does not address the specific situation — deep preparation does not eliminate all questions, and the question asks specifically about questions you cannot answer. Option C is partially good — transparency is valuable — but does not give any tools for managing the Q&A itself, which is the core of the question.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the review session extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Riley', text: "The common thread across all eight lessons are the gap between what you intend and what the audience receives." },
        { speaker: 'Marcus', text: "Looking back at the AI and automation lesson, the key insight was that governance is what makes AI adoption credible, not a constraint on it." },
        { speaker: 'Dana', text: "The word that is easy to confuse are 'off the record' and 'on background' — the difference is what the journalist can do with the information." },
        { speaker: 'Riley', text: "What distinguishes a bridge from a deflection in this context is the direction — bridging connects to your message; deflecting moves away from the question entirely." },
        { speaker: 'Marcus', text: "Where I think I still need practice is the cross-cultural negotiation language — specifically, create face-saving exits in real time rather than in prepared scenarios." },
        { speaker: 'Dana', text: "The thought leadership standard is specific: does this content make the reader think differently about something they thought they understood?" },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'The common thread across all eight lessons are the gap',
          correction: 'The common thread across all eight lessons is the gap',
          explanation: "The subject is 'the common thread' — singular. The prepositional phrase 'across all eight lessons' is a modifier, not part of the subject. Subject-verb agreement is determined by the head noun of the subject phrase: 'the thread' is singular, so the verb is 'is'. 'The common thread is the gap' — not 'are'. The error is caused by proximity to 'lessons' (plural) — a classic subject-verb agreement trap when a modifying phrase separates the subject from the verb.",
        },
        {
          lineIndex: 2,
          incorrectText: 'The word that is easy to confuse are',
          correction: 'The word that is easy to confuse is',
          explanation: "The subject is 'the word' — singular. 'That is easy to confuse' is a relative clause modifying 'the word'; it does not change the number of the subject. 'The word is' — not 'are'. Compare: 'the words that are easy to confuse are...' — plural subject, plural verb. 'The word that is easy to confuse is' — singular subject, singular verb. The error substitutes 'are' perhaps because the speaker has the plural 'off the record and on background' in mind — but the grammatical subject is 'the word', not the two phrases.",
        },
        {
          lineIndex: 4,
          incorrectText: 'specifically, create face-saving exits in real time',
          correction: 'specifically, creating face-saving exits in real time',
          explanation: "After 'specifically' in this construction, the gerund ('creating') is required — not the base form of the verb ('create'). The sentence identifies what Marcus needs to practise: 'where I still need practice is... creating face-saving exits.' The gerund phrase 'creating face-saving exits in real time' functions as a noun — the specific skill that needs practice. Using the base verb 'create' would make the sentence grammatically incomplete — 'I still need practice is... create face-saving exits' has no valid grammatical structure.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Your colleague says: 'I do not really see the difference between reframing and just changing the subject. Are they not the same thing?'",
          salespersonStart: "They are not the same thing, and the distinction matters — what distinguishes a reframe from a deflection in this context is the relationship to the original topic —",
          suggestedCompletion: "reframing stays on the same topic and offers a more complete, more accurate, or more contextually appropriate picture of it. The original point is not avoided — it is presented differently. Deflecting moves away from the topic to something different — it redirects the conversation rather than recontextualising it. In a Q&A, a board member challenges 'your margins have declined.' A reframe: 'you are right that margins are down — and what that reflects is a deliberate investment decision, here is the evidence for why it was the right one.' The margin decline is not denied. It is placed in a context that changes its meaning. A deflection would be: 'what I would rather focus on is the growth trajectory.' You have left the margin question behind. Both are legitimate techniques — but they are different tools for different situations. Reframing is appropriate when the framing of the question is incomplete. Deflecting is appropriate when the topic is genuinely off-limits or belongs somewhere else.",
        },
        {
          customerLine: "A colleague says: 'I feel like I use a lot of these words — value messaging, thought leadership, stakeholder — but I am not sure I always know exactly what I mean when I use them. How do I sharpen my vocabulary?'",
          salespersonStart: "The fact that you can sense the vagueness is itself a C1 skill — most people do not notice when they are using words they cannot define. The way to sharpen it is —",
          suggestedCompletion: "not to study the definitions, but to test them in use. The next time you are about to use 'thought leadership', pause and ask: does this content actually advance the reader's understanding beyond what they already know, or is it a well-written summary of existing knowledge? If it is the latter, call it what it is — a content piece, a research summary, an insight report. The precision comes from the discipline of using the test before you use the word. For 'value messaging', the test is: is this message telling the customer what they get for their money — or is it just changing the tone to sound less aspirational? For 'stakeholder', the test is: who specifically, and what is their stake? 'We consulted stakeholders' means nothing. 'We consulted the three procurement leaders who will evaluate the shortlist' means everything. The vocabulary gets sharper when the words are accountable — when they have to do real work rather than gesture toward a category.",
        },
        {
          customerLine: "A junior colleague asks: 'What is the most important thing you learned from the eight lessons in this series?'",
          salespersonStart: "The most important thing — and it connects all eight lessons into one — is that professional communication is not about saying the right thing —",
          suggestedCompletion: "it is about ensuring the right thing is received. Those are different skills. Saying the right thing is a matter of preparation, language, and content. Ensuring the right thing is received requires something harder: the ability to sense, in real time, what the other person is actually understanding — not what you intended them to understand. The gap between intention and reception is where all the work of professional communication happens. In AI governance, the gap is between efficiency and trust. In media relations, the gap is between your message and the journalist's story. In luxury marketing, the gap is between your exclusivity signal and the customer's experience of the brand. In a recession, the gap is between aspiration and relevance. In a negotiation, the gap is between literal language and cultural meaning. In a Q&A, the gap is between the answer you gave and the concern the questioner had. In a white paper, the gap is between information and insight. Closing those gaps — that is the skill. The eight lessons are eight different versions of the same problem. And the reason C1 communication matters is that it is the level at which you stop learning words and start learning how to read the gap.",
        },
      ],
    },
  },
};

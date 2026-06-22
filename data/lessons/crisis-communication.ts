import { Lesson } from '@/types/lesson';

export const crisisCommunication: Lesson = {
  slug: 'crisis-communication',
  title: 'Crisis Communication',
  subtitle: 'How to respond to negative situations, protect the brand, and communicate under pressure',
  level: 'B1-B2',
  description: "Every brand will face a crisis at some point — a product problem, a negative news story, a social media incident, or a customer complaint that goes public. How you communicate in those moments defines how the brand is remembered. Marketing and communications teams need to know how to respond quickly, clearly, and professionally. This lesson teaches you the vocabulary and phrases used in crisis communication — so you can protect the brand when things go wrong.",
  heroImage: '/images/crisis-communication-hero.png',

  vocabulary: [
    {
      word: 'STATEMENT',
      partOfSpeech: 'noun',
      definition: 'An official written or spoken response to a crisis or public question. A statement is prepared, reviewed, and approved before being shared. It represents the official position of the company and should be accurate, clear, and consistent.',
      example: "Marcus said: We need to issue a statement before the story runs in the press — if we have nothing ready, the journalist will say 'the company declined to comment' and that looks worse. Riley replied: I have drafted three versions — a short statement for social media, a longer one for the press, and a brief one for the CEO to use if she is asked directly.",
      imageSlug: '/images/statement.png',
    },
    {
      word: 'DAMAGE CONTROL',
      partOfSpeech: 'noun',
      definition: 'The actions a company takes to limit the negative impact of a crisis on its reputation. Damage control starts with understanding the problem, then communicating clearly, and then fixing the underlying issue. The goal is to stop the situation from getting worse.',
      example: "Riley asked: What is our damage control plan? Marcus replied: First, we acknowledge the problem publicly and take responsibility where appropriate. Second, we share what we are doing to fix it. Third, we monitor all channels for the next 72 hours and respond to every significant comment. We cannot stop this from being bad — but we can stop it from getting worse.",
      imageSlug: '/images/damage-control.png',
    },
    {
      word: 'TRANSPARENCY',
      partOfSpeech: 'noun',
      definition: 'Being open and honest with the public about what happened and why. Transparency in a crisis means sharing accurate information even when it is uncomfortable. Brands that are transparent during a crisis recover faster than those that try to hide or minimise the problem.',
      example: "Marcus advised: The instinct is to say as little as possible — but transparency is almost always the better strategy. Riley agreed: If we are open about what went wrong and what we are doing to fix it, we give people a reason to stay with us. If we hide it and it comes out later — which it almost always does — the damage is much worse.",
      imageSlug: '/images/transparency.png',
    },
    {
      word: 'ESCALATE',
      partOfSpeech: 'verb',
      definition: 'To move a problem or decision to a higher level of authority — for example, from the marketing team to the CEO, or from the customer service team to the legal team. You escalate when a situation is serious enough that it needs more senior attention or a different kind of expertise.',
      example: "Riley said: This is bigger than I expected — I think we need to escalate it. Marcus agreed: Yes — this needs to go to the CEO and the legal team immediately. I will escalate this morning. We cannot handle this at the marketing level alone. Riley, prepare a briefing for the CEO with the key facts, what we know, and what we recommend.",
      imageSlug: '/images/escalate.png',
    },
    {
      word: 'RECALL',
      partOfSpeech: 'noun / verb',
      definition: 'When a company takes back a product from customers because it is found to be defective or dangerous. A recall is a major crisis event — it requires immediate, clear, and honest communication with customers, retailers, and regulators.',
      example: "Marcus briefed the team: The product safety issue means we may need to issue a recall. If we do, the communication must be immediate and crystal clear — customers need to know exactly which product, which batch numbers, what the risk is, and how to return it. A poorly handled recall is catastrophic. A well-handled one, with full transparency, can actually build long-term trust.",
      imageSlug: '/images/recall.png',
    },
    {
      word: 'HOLDING STATEMENT',
      partOfSpeech: 'noun',
      definition: "A short, temporary statement issued quickly after a crisis begins — before you have all the facts. A holding statement buys time by showing you are aware of the situation and taking it seriously, without saying more than you know. It prevents silence, which looks like guilt.",
      example: "Marcus instructed: We do not have all the facts yet, but we cannot say nothing. Issue a holding statement now — something like: 'We are aware of the reports and are investigating urgently. We will share a full update within 24 hours.' It is short, it is honest, and it stops people assuming the worst while we gather information.",
      imageSlug: '/images/holding-statement.png',
    },
    {
      word: 'SPOKESPERSON',
      partOfSpeech: 'noun',
      definition: 'The official person who communicates on behalf of a company during a crisis. Only the spokesperson should speak publicly — everyone else on the team should direct media questions to them. A consistent spokesperson prevents conflicting messages.',
      example: "Riley asked: Who should speak to the media? Marcus replied: In a crisis this size, the spokesperson is the CEO — this needs to be senior. No one else speaks to the press or posts publicly on behalf of the company until this is resolved. All media enquiries come to me and I will direct them to the CEO's press officer.",
      imageSlug: '/images/spokesperson.png',
    },
    {
      word: 'RESPONSE TIME',
      partOfSpeech: 'noun',
      definition: "How quickly you respond to a crisis or a public question. In the social media era, a slow response time is often seen as a bad sign — it suggests the company is hiding, unprepared, or does not care. In a crisis, aim to respond within one to two hours.",
      example: "Marcus said: Our response time on this needs to be under two hours — social media moves fast and silence looks like guilt. Riley replied: I already have a draft holding statement ready. I can publish it within 20 minutes of your approval. Marcus replied: Do it. A fast, honest response is always better than a slow, perfect one.",
      imageSlug: '/images/response-time.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WE NEED TO PUT OUT A STATEMENT',
      definition: "A phrase for saying that an official response must be issued — usually urgently. 'Put out a statement' means to publish or release it publicly. It signals that the situation requires an official company position, not just informal communication.",
      example: "Marcus said: The story is going to run tomorrow morning whether we respond or not — we need to put out a statement today. Riley replied: I have three drafts ready for your review — a social media post, a press release, and a CEO quote. Which format do you want to lead with?",
      imageSlug: '/images/put-out-a-statement.png',
    },
    {
      phrase: 'DO NOT COMMENT UNTIL WE HAVE THE FACTS',
      definition: "A crisis communication principle and phrase — do not speak publicly until you know what actually happened. Saying something inaccurate in a crisis makes the situation worse. A holding statement can fill the gap while you gather the facts.",
      example: "Marcus told the team: Nobody speaks to the press or posts online until we know exactly what happened. Do not comment until we have the facts. Riley, talk to the operations team and the legal team and get me a clear picture within three hours. Until then, if a journalist calls, you say: 'We are investigating and will have a full statement shortly.'",
      imageSlug: '/images/do-not-comment.png',
    },
    {
      phrase: 'OUR FIRST PRIORITY IS...',
      definition: "A phrase used in a crisis to clearly state what matters most — usually customer safety, fixing the problem, or being honest with the public. It signals that the company has a clear sense of what is important and is not just thinking about protecting itself.",
      example: "Marcus opened the crisis meeting: Our first priority is the safety and wellbeing of our customers — everything else comes second. Riley noted: That is the right starting point. If we lead with customer safety in every communication, it sets the right tone. It also happens to be true — which matters.",
      imageSlug: '/images/our-first-priority.png',
    },
    {
      phrase: 'WE ARE AWARE OF THE SITUATION AND...',
      definition: "The standard opening for a holding statement. It confirms that the company knows about the problem and is taking it seriously. Always follow it with what you are doing — 'we are investigating', 'we are working to resolve this', or 'we will share a full update within [timeframe]'.",
      example: "Riley drafted the holding statement: 'We are aware of the situation and are investigating urgently. We take this very seriously and will share a full update within 24 hours. Customer safety is our first priority.' Marcus approved it: That is exactly right — it acknowledges the problem, shows action, and sets a deadline without saying more than we know.",
      imageSlug: '/images/we-are-aware-of-the-situation.png',
    },
    {
      phrase: 'THIS NEEDS TO BE ESCALATED TO...',
      definition: "A phrase for identifying that a problem is too serious or complex to be handled at the current level. Always specify who it needs to go to and why — for example, to the legal team because of legal risk, or to the CEO because of reputational impact.",
      example: "Riley assessed the situation: This is not a social media issue any more — there are regulatory and legal dimensions. This needs to be escalated to the legal team and the CEO immediately. Marcus agreed: I'll arrange an emergency briefing within the hour. Riley, prepare a one-page summary of what we know, what we do not know, and the options as you see them.",
      imageSlug: '/images/this-needs-to-be-escalated.png',
    },
    {
      phrase: "LET'S PREPARE A HOLDING STATEMENT",
      definition: "A phrase for initiating the first step in a crisis response — writing a short, temporary statement to issue quickly before all the facts are known. The holding statement stops the information vacuum and shows the company is responding.",
      example: "Marcus said: We do not have the full picture yet, but we cannot say nothing — that will look worse. Let's prepare a holding statement — something short that acknowledges the situation and commits to a fuller update within 24 hours. Riley: I can have something for your review in 15 minutes.",
      imageSlug: '/images/prepare-a-holding-statement.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, we have a problem. A customer complaint about our product went viral on social media last night — 3,000 shares and growing. We need to move fast. First question: do we have a [[holding statement:a short temporary statement issued before you have all the facts]] ready?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Not yet — I found out an hour ago. But I can have a draft ready in 15 minutes. Something like: 'We are aware of the situation and are investigating urgently. We take this seriously and will share a full update within 24 hours.'",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good — do that now. [[Response time:how quickly you respond to a crisis]] is critical here. We need to put out a statement within the hour. What do we actually know about the complaint?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "A customer says the product caused a skin reaction. They posted photos and tagged major consumer journalists. We do not yet know if this is an isolated case or a wider issue — our operations team is checking the batch records now.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Important rule: do not comment until we have the facts. The holding statement buys us time. Who is our [[spokesperson:the official person who communicates on behalf of the company]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "For something this size, it should be the CEO or the head of product — not me. I will direct all media enquiries through the comms lead. Nobody else on the team posts or responds publicly until this is resolved.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Correct. Now — if the batch records show a product issue, this needs to be [[escalate:to move a problem to a higher level of authority]]d immediately. At what point do we consider a [[recall:when a company takes back a product because it is defective or dangerous]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "If the operations team confirms a batch defect, I would say immediate escalation to the legal team and the CEO — and a potential recall within 24 hours. A recall handled with full [[transparency:being open and honest about what happened and why]] is recoverable. A recall that is delayed or hidden is not.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Agreed. What is our [[damage control:actions taken to limit the negative impact of a crisis]] plan for social media in the meantime?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Our first priority is to acknowledge the customer directly — a personal reply from a senior person, not a generic customer service message. Then we pause all scheduled marketing posts. Then we set up a monitoring alert for every mention of the brand in the next 72 hours.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. And the [[statement:an official written or spoken response]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "I will have three versions ready for your approval: a social media holding statement, a longer press statement if journalists call today, and a full statement once we have the facts from operations — probably in four to six hours.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "This needs to be escalated to the CEO right now — I will brief her in 30 minutes. What is the one thing I need to tell her first?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "The one thing: a product complaint has gone viral, we do not yet know if it is an isolated incident or a batch issue, we have a holding statement going out within the hour, and we may be facing a recall decision within 24 hours. She needs to know the scope and the timeline.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Perfect. Let's prepare a holding statement and reconvene in two hours with the operations findings. Remember — our first priority throughout this is customer safety, not brand protection. If we get that right, the brand protects itself.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Understood. Holding statement in 15 minutes. I'll also brief the customer service team — they need to know what to say if customers call or message before the official statement goes out.",
    },
  ],

  matchingExercise: [
    { word: 'statement', definition: 'an official written or spoken response representing the company\'s position' },
    { word: 'damage control', definition: 'actions taken to limit the negative impact of a crisis on reputation' },
    { word: 'transparency', definition: 'being open and honest about what happened, even when uncomfortable' },
    { word: 'escalate', definition: 'to move a problem to a higher level of authority because it requires more senior attention' },
    { word: 'recall', definition: 'when a company takes back a product because it is defective or dangerous' },
    { word: 'holding statement', definition: 'a short temporary response issued quickly before all the facts are known' },
    { word: 'spokesperson', definition: 'the official person who communicates on behalf of the company in a crisis' },
    { word: 'response time', definition: 'how quickly you respond publicly to a crisis or incident' },
  ],

  fillBlankExercise: [
    { before: 'We need to put out a', after: 'before the story runs in the press — silence looks like guilt.', answer: 'statement' },
    { before: 'Do not', after: 'until we have the facts — say nothing until we know what actually happened.', answer: 'comment' },
    { before: 'Our first', after: 'is customer safety — everything else comes second.', answer: 'priority' },
    { before: 'This needs to be', after: 'to the legal team and the CEO immediately — it is too big for the marketing team alone.', answer: 'escalated' },
    { before: 'A recall handled with full', after: 'is recoverable. One that is hidden is not.', answer: 'transparency' },
    { before: 'Our', after: 'time needs to be under two hours — social media moves fast.', answer: 'response' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the purpose of a holding statement?',
      options: ['To give the full explanation of what caused the crisis', 'To buy time by showing you are aware and responding, before you have all the facts', 'To announce a product recall and explain the process'],
      correctIndex: 1,
    },
    {
      question: 'Who should be the spokesperson in a major crisis according to Marcus?',
      options: ['The marketing manager, because they know the brand best', 'The customer service team, because they are used to handling complaints', 'The CEO or a senior leader — and no one else should speak publicly until the crisis is resolved'],
      correctIndex: 2,
    },
    {
      question: 'What does Marcus say about transparency in a crisis?',
      options: ['You should say as little as possible to avoid giving journalists more to write about', 'Brands that are transparent recover faster — hiding a problem makes the damage worse if it comes out later', 'Transparency is only important if the media are already involved'],
      correctIndex: 1,
    },
    {
      question: "What is the marketing team's damage control plan for social media?",
      options: ['Delete all negative comments and block accounts sharing the complaint', 'Acknowledge the customer directly, pause scheduled posts, and monitor all brand mentions for 72 hours', 'Post a series of positive brand content to push the negative story lower in the feed'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Can you think of a brand that handled a crisis badly? What did they do wrong, and how did it affect how you feel about them?',
      'Can you think of a brand that handled a crisis well — that was honest about a mistake and recovered? What did they do right?',
      'If you saw a very negative complaint about a brand you worked for going viral on social media, what would be the first thing you would do?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'We need to _____ a statement before the story runs — silence makes us look worse.',
        options: ['issue', 'tell', 'say'],
        correctIndex: 0,
        explanation: "'Issue' is the standard formal verb for releasing an official statement. 'Issue a statement', 'issue a press release', 'issue a response' — these are the fixed collocations in business and crisis communication. 'Tell a statement' and 'say a statement' are not correct in English — you 'say' words to a person directly, but you 'issue' or 'put out' a formal written communication. Other options: 'release a statement', 'put out a statement' — both are also correct.",
      },
      {
        sentence: 'A holding statement buys time — it shows you are aware without saying more than you _____ .',
        options: ['know', 'knew', 'knowing'],
        correctIndex: 0,
        explanation: "'Know' — simple present. The sentence describes a general truth or principle: a holding statement is used before you know all the facts. Simple present is used for general truths and principles: 'it shows', 'it prevents', 'it stops'. 'Knew' (past simple) would imply you already found out — which contradicts the purpose of a holding statement. 'Knowing' would need to be part of a different construction ('without knowing the full picture').",
      },
      {
        sentence: 'This situation needs to be _____ to the CEO and the legal team immediately.',
        options: ['escalated', 'reported', 'sent'],
        correctIndex: 0,
        explanation: "'Escalated' is the specific business term for moving a problem to a higher level of authority. 'Escalate' implies urgency and seniority — you escalate when the situation is serious enough that it requires a more senior decision-maker or a different type of expertise (legal, regulatory, executive). 'Report' is more neutral — you report information but you escalate a problem. 'Send' is too vague and informal for this context.",
      },
      {
        sentence: 'Brands that are _____ during a crisis recover faster than those who try to hide the problem.',
        options: ['transparent', 'silence', 'secretive'],
        correctIndex: 0,
        explanation: "'Transparent' — the adjective meaning open and honest, especially about uncomfortable information. This is a key principle in crisis communication: transparency builds trust, and trust enables recovery. 'Silence' is a noun, not an adjective — you cannot say 'brands that are silence'. 'Secretive' is the opposite of transparent — it means deliberately hiding information, which is the strategy that typically makes crises worse.",
      },
      {
        sentence: "Our _____ priority in this crisis is customer safety, not brand protection.",
        options: ['first', 'one', 'main'],
        correctIndex: 0,
        explanation: "'First priority' is the standard phrase for what matters most above all else — it implies a ranked list where this item comes before everything else. 'Our first priority' is the fixed expression used in business and crisis communication to signal what the company is putting first. 'Main priority' is also correct and natural. 'One priority' does not work in this structure — you need an adjective that ranks it ('first', 'top', 'main') not an article.",
      },
      {
        sentence: 'A product _____ must be communicated immediately with full details of which batches are affected.',
        options: ['recall', 'return', 'refund'],
        correctIndex: 0,
        explanation: "'Recall' is the specific term for a company taking back a product from customers because it is found to be defective or unsafe. It is a formal and regulated process — regulators, retailers, and customers all need to be notified. 'Return' is when a customer sends something back for a refund — this is a customer-initiated action, not a company-initiated safety response. 'Refund' is the money given back, not the process of recalling the product.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read the crisis situation. Choose the best response.',
      items: [
        {
          customerLine: "A journalist just called and asked for a comment on the viral complaint. We do not have the full facts yet. What do you say?",
          options: [
            "No comment — we are not speaking to the press about this.",
            "We are aware of the situation and are investigating urgently. We take this very seriously and will share a full update within 24 hours. Customer safety is our first priority.",
            "The complaint is from a single customer and we believe it is not representative of the wider product experience.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. It is a classic holding statement — it acknowledges the situation, signals action, sets a timeframe, and puts customer safety first. All without saying more than you know. Option A ('no comment') is almost always the worst choice — in the media, it sounds like guilt and becomes the story itself. Option C makes a claim ('not representative') before the investigation is complete — if this turns out to be wrong, it makes the company look dishonest and irresponsible.",
        },
        {
          customerLine: "The operations team just confirmed it is a batch defect — multiple units are affected. What do we do now?",
          options: [
            "We issue a press release later this week once we have had time to prepare our communications fully.",
            "We immediately escalate to the CEO and legal team, prepare a full recall communication, and contact affected customers directly — within hours, not days.",
            "We monitor social media for the next 24 hours to assess the scale before deciding whether a recall is necessary.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. Once a defect is confirmed, speed and completeness are essential. Escalate immediately — the CEO and legal team need to make the recall decision. Prepare the recall communication — it must include which products, which batches, what the risk is, and how customers return the product. Contact affected customers directly — they should hear from the company, not from the news. Option A delays unnecessarily, which increases both safety risk and reputational damage. Option C is passive — monitoring instead of acting when a defect is confirmed is negligent.",
        },
        {
          customerLine: "Some team members want to post their personal views on social media about the crisis to 'support the brand'. Should we allow this?",
          options: [
            "Yes — personal posts from team members show the brand has real people behind it and can help rebuild trust during a crisis.",
            "No — only the official spokesperson should communicate publicly. All team members should be briefed to direct any questions to the communications team and not post or comment on the issue themselves.",
            "Team members can post as long as they make clear it is their personal opinion, not the company's official position.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. In a crisis, a single consistent voice is essential — multiple people saying slightly different things creates confusion and contradiction, which makes the situation worse. Even well-intentioned personal posts can contradict the official position or reveal information that has not yet been verified. The spokesperson rule is clear: one person speaks for the company, everyone else stays silent on the issue. Option A sounds empathetic but creates communication chaos. Option C sounds reasonable but is impossible to enforce — journalists and the public will attribute any team member's post to the company regardless of a disclaimer.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the crisis communication discussion. Three lines have a mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "A customer complaint has gone viral. We need to respond fast. What is our first priority?" },
        { speaker: 'Riley', text: "Our first priority are customer safety — then we deal with the media." },
        { speaker: 'Marcus', text: "Good. Do we have a holding statement ready?" },
        { speaker: 'Riley', text: "I can draft one in 15 minutes — something like: 'We are aware on the situation and are investigating urgently.'" },
        { speaker: 'Marcus', text: "Good. Who is our spokesperson for this?" },
        { speaker: 'Riley', text: "It should be the CEO — she is the right level for a crisis this size. No other team members should post or comment publicly." },
        { speaker: 'Marcus', text: "What if the operations team confirms a batch defect?" },
        { speaker: 'Riley', text: "Then this needs to be escalated to the legal team immediate — and we should prepare for a potential recall." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Our first priority are',
          correction: 'Our first priority is',
          explanation: "'Priority' is a singular noun, so it takes the singular verb 'is'. 'Our first priority is customer safety' — singular subject, singular verb. This is a subject-verb agreement error. A common cause of this mistake is being influenced by the word that follows ('customer safety') rather than the actual subject ('priority'). Always identify the subject first, then match the verb: 'our priority is', 'our priorities are', 'the goal is', 'the goals are'.",
        },
        {
          lineIndex: 3,
          incorrectText: 'aware on the situation',
          correction: 'aware of the situation',
          explanation: "'Aware of' is the fixed collocation — always 'of', never 'on'. 'Aware of the situation', 'aware of the risk', 'aware of the issue'. This is a preposition error. The phrase 'we are aware of' is one of the most common phrases in crisis communication and formal business English. 'Aware on' has no meaning in English. Similar fixed collocations: 'informed of', 'notified of', 'conscious of' — all use 'of'.",
        },
        {
          lineIndex: 7,
          incorrectText: 'escalated to the legal team immediate',
          correction: 'escalated to the legal team immediately',
          explanation: "'Immediately' is an adverb — it modifies the verb and must be in adverb form (-ly). 'Escalated immediately', not 'escalated immediate'. 'Immediate' is an adjective used before a noun: 'an immediate response', 'immediate action', 'immediate escalation'. When it modifies a verb or an entire sentence, the adverb 'immediately' is required: 'respond immediately', 'act immediately', 'escalate immediately'.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "We have a crisis. The CEO wants a one-paragraph briefing — what happened, where we are now, and what happens next.",
          salespersonStart: "A customer complaint about a product defect went viral on social media last night —",
          suggestedCompletion: "3,000 shares and growing. The operations team has confirmed a batch defect affecting units from production week 24. We have issued a holding statement acknowledging the situation. This has been escalated to the legal team. We are preparing a full recall communication to go out within six hours. The CEO needs to approve the recall statement and a customer notification before we publish. Our first priority is customer safety and we are moving at maximum speed.",
        },
        {
          customerLine: "What makes a holding statement effective? Write one for this situation.",
          salespersonStart: "A good holding statement acknowledges the situation, shows action, and sets a timeline —",
          suggestedCompletion: "without saying more than you know. Here is one for this situation: 'We are aware of reports regarding a product concern and are investigating as a matter of urgency. We take the safety of our customers extremely seriously. We will share a full update, including all relevant details and next steps, within 24 hours. In the meantime, customers with concerns can contact us at [contact details].' It is honest, it shows action, and it stops the information vacuum without making claims we cannot yet verify.",
        },
        {
          customerLine: "If we handle this crisis well, what does that look like in 30 days?",
          salespersonStart: "In 30 days, if we handle this well, the story is defined by how we responded —",
          suggestedCompletion: "not by the crisis itself. We will have issued a transparent recall, communicated directly with every affected customer, and shared a clear explanation of what happened and what we changed. Brands that respond to a crisis with speed, honesty, and genuine accountability often come out with stronger trust than before — because they showed customers what they are really made of when things went wrong. The goal is not to avoid the story. The goal is to own it, fix it, and learn from it.",
        },
      ],
    },
  },
};

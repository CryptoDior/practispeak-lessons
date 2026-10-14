import { Lesson } from '@/types/lesson';

export const marketingLeadershipCommunication: Lesson = {
  slug: 'marketing-leadership-communication',
  title: 'Marketing Leadership Communication',
  subtitle: 'How to speak with authority, build credibility, and communicate like a senior marketing leader',
  level: 'C1-C2',
  description: 'At C-suite level, how you say something matters as much as what you say. Senior marketing leaders are expected to speak with confidence, back their ideas with a clear narrative, and project the kind of presence that makes people listen. This lesson teaches the language of executive communication — how to build gravitas, shape a compelling narrative, and position yourself as a thought leader in any room.',
  heroImage: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marketing-leadership-communication-hero.png',

  vocabulary: [
    {
      word: 'Gravitas',
      partOfSpeech: 'noun',
      definition: 'A calm, serious quality that makes people respect you.',
      example: 'She spoke with real gravitas, and the room went quiet.',
      imageSlug: '/images/gravitas.png',
    },
    {
      word: 'Credibility',
      partOfSpeech: 'noun',
      definition: 'The quality of being trusted and believed.',
      example: 'Clear numbers give your plan more credibility.',
      imageSlug: '/images/marketing-leadership-communication-credibility.png',
    },
    {
      word: 'Executive narrative',
      partOfSpeech: 'noun',
      definition: 'The main story a leader tells to explain a plan.',
      example: 'His executive narrative explained why we need to change.',
      imageSlug: '/images/executive-narrative.png',
    },
    {
      word: 'Thought leadership',
      partOfSpeech: 'noun',
      definition: 'Being known for expert ideas that others want to hear.',
      example: 'Her blog posts show strong thought leadership.',
      imageSlug: '/images/marketing-leadership-communication-thought-leadership.png',
    },
    {
      word: 'Vision',
      partOfSpeech: 'noun',
      definition: 'A clear picture of where you want to be in the future.',
      example: 'Our vision is to be the top brand in Europe.',
      imageSlug: '/images/marketing-leadership-communication-vision.png',
    },
    {
      word: 'Authority',
      partOfSpeech: 'noun',
      definition: 'The confidence and right to lead or decide.',
      example: 'He speaks with authority about digital marketing.',
      imageSlug: '/images/marketing-leadership-communication-authority.png',
    },
    {
      word: 'Presence',
      partOfSpeech: 'noun',
      definition: 'A strong, confident effect on the people around you.',
      example: 'She has great presence when she presents.',
      imageSlug: '/images/marketing-leadership-communication-presence.png',
    },
    {
      word: 'Stakeholder',
      partOfSpeech: 'noun',
      definition: 'A person who is affected by a decision or cares about it.',
      example: 'Every stakeholder must agree before we start.',
      imageSlug: '/images/marketing-leadership-communication-stakeholder.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: "Let me take you through our thinking on this",
      definition: 'A clear way to start explaining a plan.',
      example: 'Let me take you through our thinking on this new campaign.',
      imageSlug: '/images/let-me-take-you-through-our-thinking-on-this.png',
    },
    {
      phrase: "The narrative we are building is...",
      definition: 'A way to explain the story behind a plan.',
      example: 'The narrative we are building is simple: we make work easier.',
      imageSlug: '/images/the-narrative-we-are-building-is.png',
    },
    {
      phrase: "What that means for us strategically is...",
      definition: 'A way to explain why a fact matters for the plan.',
      example: 'What that means for us strategically is that mobile comes first.',
      imageSlug: '/images/what-that-means-for-us-strategically-is.png',
    },
    {
      phrase: "I want to be direct about this",
      definition: 'A way to say you are going to speak honestly.',
      example: 'I want to be direct about this: the campaign did not work.',
      imageSlug: '/images/i-want-to-be-direct-about-this.png',
    },
    {
      phrase: "My recommendation is...",
      definition: 'A clear way to say what you think we should do.',
      example: 'My recommendation is to spend more on video.',
      imageSlug: '/images/my-recommendation-is.png',
    },
    {
      phrase: "Let me push back on that slightly",
      definition: 'A polite way to disagree a little.',
      example: 'Let me push back on that slightly; the budget is too small.',
      imageSlug: '/images/let-me-push-back-on-that-slightly.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Riley, I have a board presentation next week on our brand strategy. It's my first time presenting to C-suite. I need help.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Good that you are starting early. First question: what is the [[executive narrative:the story a senior leader tells to explain the direction and purpose of a strategy]] you want them to leave the room with?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "I want them to understand that we need to shift from product marketing to brand building. But I'm not sure how to say it without sounding like I'm criticising what we've done before.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Frame it as an evolution, not a critique. Say: the narrative we are building is one of maturity. We have proven we can sell a product. Now we are building a brand that sells itself.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "I like that. And how do I open? I always feel I lose [[presence:the quality of making an impact in a room through intentional communication]] at the start.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Open with a pause. Walk to the front, look at the room, and say: Let me take you through our thinking on this. No apology, no 'thanks for having me'. Just begin. That is [[gravitas:a serious quality that commands attention and respect]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And what if the CFO challenges me on ROI? That is where I usually lose [[credibility:the quality of being trusted and believed based on evidence and track record]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Have your numbers ready. When challenged, do not get defensive. Say: What that means for us strategically is that brand investment pays back over 18 months, not 18 days. Here is the data.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "What if they push back harder? What if the CEO says the budget should go elsewhere?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Then you use [[authority:the confidence to lead or speak on a subject without being defensive]]. Say: Let me push back on that slightly — cutting brand now will cost us three times as much to rebuild in two years. Here is the evidence from the last cycle.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "I want to be direct about this — I find it hard to disagree with the CEO in a room full of people.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "That is exactly when your [[thought leadership:being known for original ideas that move the conversation forward]] matters most. You were hired for your point of view. They do not need agreement — they need someone who will tell them the truth.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "And how do I close? I usually say 'any questions' and then it falls flat.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "Close with your [[vision:a clear picture of where you want to go that others can follow]]. Say: My recommendation is that we approve the brand investment for Q1 and review performance in 90 days. Then stop. Do not fill the silence.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/marcus-icon.png',
      text: "Stop and let the silence sit. That is going to be hard for me.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: 'https://pub-f624871959c1437798bb4e533e0b2adb.r2.dev/riley-icon.png',
      text: "It gets easier. The leaders who fill every silence are the ones who seem uncertain. The ones who sit in it are the ones who seem like they know exactly what they are doing.",
    }
  ],

  matchingExercise: [
    { word: 'gravitas', definition: 'a serious, calm quality that makes people respect and listen to you' },
    { word: 'credibility', definition: 'the quality of being trusted and believed based on evidence and track record' },
    { word: 'executive narrative', definition: 'the story a senior leader tells to explain the direction and purpose of a strategy' },
    { word: 'thought leadership', definition: 'being known for original ideas that move the conversation forward' },
    { word: 'vision', definition: 'a clear picture of where you want to go that others can understand and follow' },
    { word: 'authority', definition: 'the confidence to lead or speak on a subject without being defensive' },
    { word: 'presence', definition: 'the quality of making an impact in a room through intentional communication' },
    { word: 'stakeholder', definition: 'anyone who has an interest in or is affected by a decision' }
  ],

  fillBlankExercise: [
    { before: "Let me take you ", after: " our thinking on this — we have a clear recommendation and the data to support it.", answer: "through" },
    { before: "She does not need to fight for attention — that pause before she speaks is pure ", after: ".", answer: "gravitas" },
    { before: "The ", after: " we are building is about trust — every campaign should reinforce that we do what we say.", answer: "narrative" },
    { before: "My ", after: " is that we consolidate the three campaigns and reinvest the savings into performance channels.", answer: "recommendation" },
    { before: "Let me push ", after: " on that slightly — cutting brand now will cost three times as much to rebuild later.", answer: "back" },
    { before: "What that means for us ", after: " is that retention has to become the priority, not acquisition.", answer: "strategically" }
  ],

  multipleChoiceExercise: [
    {
      question: "What does Riley say is the key to opening a board presentation with gravitas?",
      options: ["Start with a joke to relax the room", "Begin with a pause and go straight into your thinking", "Thank everyone for attending before you begin"],
      correctIndex: 1
    },
    {
      question: "What does Riley recommend when the CFO challenges you on ROI?",
      options: ["Agree that brand investment is hard to measure", "Get defensive and repeat your original point", "Stay calm, name the strategic implication, and show the data"],
      correctIndex: 2
    },
    {
      question: "How does Riley say Marcus should close his presentation?",
      options: ["Ask 'any questions?' and open the floor", "State a clear recommendation, then stop and let the silence sit", "Summarise every slide and thank the room for listening"],
      correctIndex: 1
    },
    {
      question: "Why does Riley say thought leadership matters most when you disagree with the CEO?",
      options: ["Because it is polite to have a different opinion", "Because senior leaders need someone who will tell them the truth, not just agree", "Because it shows you have read more than everyone else in the room"],
      correctIndex: 1
    }
  ],

  warmUp: {
    questions: [
      "Think of a leader — at work, in business, or in public life — who has real presence when they speak. What makes them different from people who don't?",
      "Have you ever had to present a strategy or idea to senior leaders? What was the hardest part — the content, the language, or managing the room?",
      "When someone challenges your idea in a meeting, how do you usually respond? Do you tend to back down, defend your position, or find a middle way?"
    ]
  },

  completeSentenceExercise: {
    instructions: "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    items: [
      {
        sentence: "Before the presentation, Riley mapped her _____ — the CFO, the CEO, and the board all needed a different angle.",
        options: ["audience", "stakeholders", "contacts"],
        correctIndex: 1,
        explanation: "'Stakeholders' is the correct business term for the people who have an interest in a decision — including executives, board members, and department heads. 'Audience' is used more for general communication. 'Contacts' is too informal and doesn't capture the idea of people who are affected by or invested in the outcome."
      },
      {
        sentence: "Let me push _____ on that — the data shows a very different picture.",
        options: ["against", "back", "away"],
        correctIndex: 1,
        explanation: "'Push back on' is the fixed professional phrase for respectfully disagreeing or questioning something. 'Push against' is possible in physical contexts but not used this way in business conversation. 'Push away' means to move something physically — it doesn't work here."
      },
      {
        sentence: "Her _____ was clear: the company would move from product marketing to brand building within 18 months.",
        options: ["vision", "mission", "goal"],
        correctIndex: 0,
        explanation: "'Vision' refers to the long-term picture of where you want to go — it's directional and inspiring. 'Mission' describes what you do and why you exist (present-focused). 'Goal' is specific and measurable. In a leadership context, when describing a future direction that others can follow, 'vision' is the right word."
      },
      {
        sentence: "She did not fill the silence after her recommendation — and that restraint is exactly what gave her _____.",
        options: ["gravity", "gravitas", "seriousness"],
        correctIndex: 1,
        explanation: "'Gravitas' is the specific professional term for the calm authority that makes people listen and respect you. 'Gravity' means the physical force pulling objects down — it is not used this way in business English. 'Seriousness' describes a general tone but doesn't carry the same weight as 'gravitas' in a leadership context."
      },
      {
        sentence: "What that means for us _____ is that we cannot keep investing in acquisition when retention is broken.",
        options: ["strategically", "commercially", "practically"],
        correctIndex: 0,
        explanation: "'Strategically' connects the insight to the big-picture direction of the business — it's the right word when you're drawing implications for a long-term plan. 'Commercially' focuses on revenue and costs. 'Practically' focuses on implementation. In a board-level conversation about direction, 'strategically' is the expected register."
      },
      {
        sentence: "Thought leadership is not about having opinions — it is about having ideas that _____ the conversation forward.",
        options: ["push", "move", "drive"],
        correctIndex: 1,
        explanation: "'Move the conversation forward' is the idiomatic phrase used to describe ideas or contributions that advance thinking in a field. 'Push the conversation forward' is possible but slightly more forceful. 'Drive the conversation forward' also works but is more commonly used for facilitating a discussion in the moment. 'Move' is the most natural and widely used choice in this context."
      }
    ]
  },

  groupActivities: {
    chooseResponse: {
      instructions: "Read what the senior stakeholder says. Choose the best response from the three options.",
      items: [
        {
          customerLine: "I'm not convinced the brand budget is justified. Can you prove the ROI?",
          options: [
            "Brand is difficult to measure — it works over the long term and you just have to trust it.",
            "Absolutely. What that means for us strategically is that brand investment returns over 18 months, not 18 days. Here is the data from our last two years — and a benchmark from our three closest competitors.",
            "I understand the concern. I'll send you a document after the meeting with more detail."
          ],
          correctIndex: 1,
          explanation: "Option B answers directly, names the strategic implication, and backs it with evidence — this is what credibility looks like in a board room. Option A sounds defensive and asks the room to trust you without evidence, which undermines authority. Option C delays the answer and signals you weren't prepared for the most obvious question."
        },
        {
          customerLine: "What makes you the right person to lead this brand transformation?",
          options: [
            "I have ten years of experience in marketing and I'm very passionate about this brand.",
            "I've led two similar transformations — one at scale, one in a turnaround. I know where the risk is, I know what breaks first, and I have a clear plan for how we do this without losing momentum.",
            "I think I bring a fresh perspective and I'm willing to work very hard to make it happen."
          ],
          correctIndex: 1,
          explanation: "Option B demonstrates credibility through specific evidence — past experience, pattern recognition, and a clear plan. It projects authority without arrogance. Option A leads with passion and years of experience, which is vague and not differentiated. Option C sounds like a junior hire, not a senior leader — 'willing to work hard' is not an executive answer."
        },
        {
          customerLine: "We've heard a lot of strategy today. What is your actual recommendation?",
          options: [
            "I want to present a few options and let the team decide what they are most comfortable with.",
            "My recommendation is that we approve the brand platform investment for Q1, set a 90-day review, and measure against three KPIs I'll define today. I am confident this is the right move.",
            "I think there are merits to several approaches — it really depends on how much risk the business is willing to take."
          ],
          correctIndex: 1,
          explanation: "Option B closes with a specific, confident recommendation — it names the action, the timeline, the review mechanism, and expresses conviction. This is what executive presence looks like. Option A avoids the decision entirely and shifts responsibility to the room — a senior leader should come with a recommendation, not a menu. Option C hedges and delays, which signals uncertainty and erodes credibility."
        }
      ]
    },
    spotTheMistake: {
      instructions: "Read the conversation. Three lines have a mistake. Can you find them?",
      dialogue: [
        { speaker: "Marcus", text: "I want to open with gravitas — so I'll start by thanking everyone for their time and explaining my agenda." },
        { speaker: "Riley", text: "Actually, starting with thanks and an agenda undermines your presence. Open with a pause and go straight into your thinking." },
        { speaker: "Marcus", text: "Okay. And when the CFO challenges me, I'll say: 'Let me push against that slightly — the data shows a very different picture.'" },
        { speaker: "Riley", text: "Almost — but the fixed phrase is 'push back on', not 'push against'. It sounds much more natural." },
        { speaker: "Marcus", text: "Got it. And I'll close by asking 'any questions?' so the room knows I'm open to challenge." },
        { speaker: "Riley", text: "That's too passive for a board close. End with your recommendation. Then stop. Let the silence work for you." }
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: "start by thanking everyone for their time and explaining my agenda",
          correction: "start with a pause and go straight into your thinking",
          explanation: "Opening with thanks and an agenda is a common habit but it immediately reduces presence — it signals that you are warming up rather than leading. Senior leaders open with purpose. The phrase 'Let me take you through our thinking on this' is immediate and signals authority from the first word."
        },
        {
          lineIndex: 2,
          incorrectText: "push against",
          correction: "push back on",
          explanation: "'Push back on' is the fixed professional phrase for respectfully challenging an idea. 'Push against' is not used in business English this way — it sounds unnatural. Always say 'let me push back on that' or 'I'd like to push back on that point'."
        },
        {
          lineIndex: 4,
          incorrectText: "closing by asking 'any questions?'",
          correction: "close with a clear recommendation and let the silence sit",
          explanation: "'Any questions?' is a weak close for a board presentation — it hands control of the room back to the audience and signals that you have finished rather than that you are leading. A strong executive close ends with 'My recommendation is...' followed by silence, which projects confidence and gives the room space to respond on your terms."
        }
      ]
    },
    finishTheLine: {
      instructions: "The marketing leader starts a sentence. Work with your partner to finish it naturally.",
      items: [
        {
          customerLine: "I'm not sure your strategy will work in our market. It seems too risky.",
          salespersonStart: "Let me push back on that slightly — the data from three comparable markets shows this approach reduces risk, not increases it. What that means for us strategically is...",
          suggestedCompletion: "that the real risk is doing nothing. Standing still while the market shifts is a much more dangerous position than a controlled investment in brand now."
        },
        {
          customerLine: "What is your vision for this brand over the next three years?",
          salespersonStart: "The narrative we are building is one of category leadership. In three years, I want this brand to be...",
          suggestedCompletion: "the first name people think of when they hear 'trusted partner' in this space. Not just known — the standard everyone else is measured against. And here is how we get there."
        },
        {
          customerLine: "You've presented a lot of options. What do you actually recommend we do?",
          salespersonStart: "My recommendation is clear: we invest in the brand platform in Q1, define three KPIs today, and review in 90 days. I want to be direct about this —",
          suggestedCompletion: "the window to do this without losing competitive ground is this year. If we wait another quarter, we will be playing catch-up. I am confident this is the right call and I am happy to stand behind it."
        }
      ]
    }
  }
};

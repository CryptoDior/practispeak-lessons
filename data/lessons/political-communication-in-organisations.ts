import { Lesson } from '@/types/lesson';

export const politicalCommunicationInOrganisations: Lesson = {
  slug: 'political-communication-in-organisations',
  title: 'Political Communication in Organisations',
  subtitle: 'How to navigate internal politics, build coalitions, and get things done without formal authority',
  level: 'C1-C2',
  description: 'Every large organisation has politics. The people who get things done are not always the ones with the highest title — they are the ones who understand who has real power, who to bring on side early, and how to manage resistance before it becomes a problem. This lesson teaches you the language of organisational influence: how to map stakeholders, build coalitions, and communicate in a way that moves things forward.',
  heroImage: '/images/political-communication-in-organisations-hero.png',

  vocabulary: [
    {
      word: 'STAKEHOLDER MAP',
      partOfSpeech: 'noun',
      definition: 'A visual list of everyone affected by or involved in a decision — showing how much power and interest each person has.',
      example: "Riley said: Before you present this to the board, do a stakeholder map. Who needs to approve it? Who could block it? Who do you need on your side?",
      imageSlug: '/images/stakeholder-map.png',
    },
    {
      word: 'POWER BROKER',
      partOfSpeech: 'noun',
      definition: 'A person who has strong influence in an organisation — often more than their job title suggests.',
      example: "Marcus said: The Head of IT is the real power broker here. Without his sign-off, nothing in tech gets approved, no matter what the CEO says.",
      imageSlug: '/images/power-broker.png',
    },
    {
      word: 'COALITION',
      partOfSpeech: 'noun',
      definition: 'A group of people who work together to support a shared goal. Building a coalition means getting the right people on your side before a decision is made.',
      example: 'Riley advised: Build your coalition before the meeting, not during it. By the time you stand up to present, the key people in the room should already agree with you.',
      imageSlug: '/images/coalition.png',
    },
    {
      word: 'RESISTANCE',
      partOfSpeech: 'noun',
      definition: 'Opposition to a change or idea. Resistance is normal — the key is understanding where it comes from.',
      example: "Marcus said: There's a lot of resistance from the finance team. Riley said: Find out why. Usually resistance comes from fear — fear of extra work, or fear of looking bad.",
      imageSlug: '/images/resistance.png',
    },
    {
      word: 'SPONSOR',
      partOfSpeech: 'noun',
      definition: 'A senior person who supports your project and uses their influence to help it succeed.',
      example: "Riley said: Every big project needs a sponsor — someone senior who will speak for it when you're not in the room. Without one, your project is vulnerable.",
      imageSlug: '/images/sponsor.png',
    },
    {
      word: 'BUY-IN',
      partOfSpeech: 'noun',
      definition: "Someone's agreement and genuine support for an idea or plan.",
      example: 'Marcus presented the strategy without getting buy-in from the regional teams first. When he needed their cooperation, they were not willing to help.',
      imageSlug: '/images/buy-in.png',
    },
    {
      word: 'ALIGNMENT',
      partOfSpeech: 'noun',
      definition: 'When different people or teams agree on the same goal or approach. Getting alignment means making sure everyone is moving in the same direction.',
      example: "Riley said: Before we launch this campaign, I need alignment from sales, product, and finance. If any one of those teams is pulling in a different direction, it will fail.",
      imageSlug: '/images/alignment.png',
    },
    {
      word: 'MANDATE',
      partOfSpeech: 'noun',
      definition: 'Official permission or support from someone with authority to do something.',
      example: "Marcus said: I don't have the mandate to approve this budget. You'll need sign-off from the CFO.",
      imageSlug: '/images/mandate.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'I WANTED TO BRING YOU INTO THIS EARLY...',
      definition: 'A phrase used to make someone feel included and valued before a decision is made. It builds goodwill and reduces resistance.',
      example: "Riley met with the Head of IT before the main presentation. She said: I wanted to bring you into this early — your input is critical, and I didn't want to present something that didn't work for your team.",
      imageSlug: '/images/i-wanted-to-bring-you-into-this-early.png',
    },
    {
      phrase: 'I WANT TO MAKE SURE WE HAVE ALIGNMENT ON...',
      definition: 'A phrase that checks whether everyone agrees before moving forward. It surfaces disagreements while there is still time to address them.',
      example: "Riley said: Before we go to the board, I want to make sure we have alignment on the timeline. If anyone has concerns, now is the time to raise them.",
      imageSlug: '/images/i-want-to-make-sure-we-have-alignment-on.png',
    },
    {
      phrase: 'WHAT WOULD IT TAKE FOR YOU TO SUPPORT THIS?',
      definition: 'A direct question for handling resistance. It opens a conversation about what conditions or changes would make the other person say yes.',
      example: "The Head of Finance had concerns. Instead of arguing, Riley asked: What would it take for you to support this? He named three conditions. She addressed all three.",
      imageSlug: '/images/what-would-it-take-for-you-to-support-this.png',
    },
    {
      phrase: 'THIS HAS FULL BACKING FROM...',
      definition: 'A phrase that signals senior support for a project or proposal. Naming the sponsor immediately increases the credibility of what you are presenting.',
      example: "Riley opened her presentation: This has full backing from the CEO and the CFO. I'm here to share the plan and answer your questions.",
      imageSlug: '/images/this-has-full-backing-from.png',
    },
    {
      phrase: 'I HEAR YOUR CONCERNS — LET ME ADDRESS THEM DIRECTLY',
      definition: 'A phrase that acknowledges resistance without dismissing it. It shows you have listened and are ready to respond.',
      example: "Marcus pushed back hard. Riley said: I hear your concerns — let me address them directly. The budget question, the timeline, and the resourcing — I have answers for all three.",
      imageSlug: '/images/i-hear-your-concerns-let-me-address-them-directly.png',
    },
    {
      phrase: 'CAN I COUNT ON YOUR SUPPORT FOR THIS?',
      definition: 'A direct close that asks someone to commit. Used after you have addressed their concerns and built the case.',
      example: "After walking the Head of IT through the plan, Riley asked: Can I count on your support for this when it goes to the board? He said yes.",
      imageSlug: '/images/can-i-count-on-your-support-for-this.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, I presented the new marketing strategy to the leadership team and it was not well received. I don't understand why — the idea is strong.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Did you do a [[stakeholder map:a visual list of everyone affected by a decision — showing how much power and interest each person has]] before the meeting? Who did you speak to beforehand?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "No one. I assumed the idea would speak for itself.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's the problem. You need to build your [[coalition:a group of people who work together to support a shared goal]] before the meeting, not during it. By the time you present, the key people should already be on your side.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "There was a lot of [[resistance:opposition to a change or idea]] from the Head of Finance. She seemed against it from the start.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "She is the [[power broker:a person with strong influence — often more than their title suggests]] in that room. If she's against you, you have a serious problem. What are her concerns?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Budget and ROI timelines. She thinks the return is too slow.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Then meet with her this week. Ask her: what would it take for you to support this? Find out her exact conditions and address them. You need her [[buy-in:someone's genuine agreement and support for a plan]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the CEO? She seemed neutral — not for or against.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Neutral is not good enough. You need a [[sponsor:a senior person who supports your project and uses their influence to help it succeed]]. If the CEO backs this publicly, everything changes. Go to her directly — bring her into it early.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "I didn't have [[mandate:official permission or support from someone with authority]] to involve the CEO directly.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "You don't need a mandate to have a conversation. Request 20 minutes. Explain the strategy. Ask if she would be open to sponsoring it.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And then? How do I get [[alignment:when different people agree on the same goal or approach]] before the next meeting?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Meet individually with each key person. Listen to their concerns. Address them. Then when you walk into that room again, the decision is already made — you're just confirming it.",
    }
  ],

  matchingExercise: [
    { "word": "stakeholder map", "definition": "a visual overview of everyone affected by a decision and how much power they have" },
    { "word": "power broker", "definition": "a person with strong influence — often more than their job title suggests" },
    { "word": "coalition", "definition": "a group of people working together to support a shared goal" },
    { "word": "resistance", "definition": "opposition to a change or idea" },
    { "word": "sponsor", "definition": "a senior person who uses their influence to support your project" },
    { "word": "buy-in", "definition": "someone's genuine agreement and support for a plan" },
    { "word": "alignment", "definition": "when different people or teams agree on the same goal or approach" },
    { "word": "mandate", "definition": "official permission or support from someone with authority" }
  ],

  fillBlankExercise: [
    { "before": "Before the board meeting, Riley built a ", "after": " — she spoke to every key person individually and got their support.", "answer": "coalition" },
    { "before": "Every big project needs a senior ", "after": " — someone who will defend it when you're not in the room.", "answer": "sponsor" },
    { "before": "There was strong ", "after": " from the finance team. We needed to understand why before we could move forward.", "answer": "resistance" },
    { "before": "I need ", "after": " from all three departments before we launch — if one team is pulling in a different direction, it will fail.", "answer": "alignment" },
    { "before": "Map your stakeholders first. Know who has real power — not just the official ", "after": " but the actual influence.", "answer": "mandate" },
    { "before": "She asked: what would it take for you to support this? She was trying to get his ", "after": " before the final vote.", "answer": "buy-in" }
  ],

  multipleChoiceExercise: [
    {
      "question": "What does Riley say Marcus should have done before presenting to the leadership team?",
      "options": [
        "Prepared more slides and data to support the strategy",
        "Built a coalition by speaking to key people individually before the meeting",
        "Asked the CEO to present the strategy on his behalf"
      ],
      "correctIndex": 1
    },
    {
      "question": "Why does Riley say the Head of Finance is a 'power broker'?",
      "options": [
        "Because she controls the company's bank account",
        "Because she has more influence in that room than her title might suggest",
        "Because she is the most senior person at the meeting"
      ],
      "correctIndex": 1
    },
    {
      "question": "What question does Riley suggest Marcus ask the Head of Finance?",
      "options": [
        "'Do you agree with the strategy?'",
        "'What would it take for you to support this?'",
        "'Can you explain your concerns in writing?'"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Riley say should happen by the time Marcus walks into the next meeting?",
      "options": [
        "The presentation should have new data to address every concern",
        "The CEO should be presenting the strategy instead of Marcus",
        "The decision should already be made — the meeting is just a confirmation"
      ],
      "correctIndex": 2
    }
  ],

  warmUp: {
    "questions": [
      "Have you ever had a good idea rejected by an organisation? Looking back, do you think the way you presented it played a role?",
      "Who are the real power brokers in your organisation — the people whose support you need, regardless of their official title?",
      "When you face resistance to a plan, what is your first reaction? Do you argue your case harder, or do you try to understand where the resistance comes from?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "Before any big presentation, do a _____ — know who has power, who might block you, and who you need on your side.",
        "options": ["stakeholder map", "coalition plan", "power audit"],
        "correctIndex": 0,
        "explanation": "A 'stakeholder map' is the standard tool for analysing who is affected by a decision and how much influence they have. A 'coalition plan' is not a fixed term. 'Power audit' is informal and not standard. In strategic communication and project management, you always start with a stakeholder map."
      },
      {
        "sentence": "Build your _____ before the meeting. By the time you present, the key people in the room should already support you.",
        "options": ["coalition", "mandate", "alignment"],
        "correctIndex": 0,
        "explanation": "'Coalition' is the right word for the group of people you have brought together around a shared goal. A 'mandate' is permission from authority — you can't 'build' a mandate. 'Alignment' describes the state of people agreeing — you get alignment, you don't build it before a meeting. A coalition is what you build."
      },
      {
        "sentence": "Her _____ came from fear — she was worried the new system would make her team's work harder.",
        "options": ["resistance", "opposition", "objection"],
        "correctIndex": 0,
        "explanation": "'Resistance' is the specific word for ongoing, often unspoken opposition to change in organisations. 'Opposition' is more formal and political. 'Objection' is a specific point raised in a meeting. When someone consistently pushes back on a change — not just once — that is resistance."
      },
      {
        "sentence": "Every major project needs a _____ — a senior person who will defend it when you are not in the room.",
        "options": ["sponsor", "champion", "advocate"],
        "correctIndex": 0,
        "explanation": "'Sponsor' is the most specific and widely used term in project and organisational communication — it is the person with formal authority who backs the project. 'Champion' and 'advocate' are similar but less formal. In professional contexts, 'project sponsor' is the standard term."
      },
      {
        "sentence": "I wanted to _____ you into this early — your input will shape how we present this to the board.",
        "options": ["bring", "get", "pull"],
        "correctIndex": 0,
        "explanation": "'Bring someone into something' is the correct fixed phrase — it means to include them in a discussion or process. 'Get you into this' is possible but less natural in professional English. 'Pull you into this' implies you are being forced — it has a negative connotation. Use 'bring you into this' when you want to signal inclusion and respect."
      },
      {
        "sentence": "Before we go any further, I want to make sure we have _____ on the overall direction.",
        "options": ["alignment", "agreement", "buy-in"],
        "correctIndex": 0,
        "explanation": "'Alignment' is the specific professional term for everyone pointing in the same direction — same goals, same understanding. 'Agreement' is more general and can be about anything. 'Buy-in' is about genuine support and commitment, not just understanding. When checking that teams are moving toward the same goal, use 'alignment'."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the other person says. Choose the best response.",
      "items": [
        {
          "customerLine": "I presented the plan but the Head of Operations pushed back hard. Now I'm not sure what to do.",
          "options": [
            "Present the same plan again at the next meeting with more supporting data.",
            "Meet with her one-on-one before the next meeting. Ask: 'What would it take for you to support this?' Understand her concerns and address them directly.",
            "Go to the CEO and ask her to overrule the Head of Operations."
          ],
          "correctIndex": 1,
          "explanation": "Option B is the smart organisational move — it turns a blocker into a potential ally by addressing concerns directly. Going back in with more data (Option A) ignores the political reality. Escalating to the CEO (Option C) will create an enemy and damage the relationship long-term."
        },
        {
          "customerLine": "How do I get the finance team on side? They always block everything.",
          "options": [
            "Bring them into the planning process early — before your ideas are fixed. Ask for their input. People support things they helped to build.",
            "Frame the proposal so it looks like their idea.",
            "Go around them — get direct approval from the CFO first."
          ],
          "correctIndex": 0,
          "explanation": "Option A is the right long-term strategy — inclusion and co-creation build genuine buy-in. Option B is manipulative and will not survive scrutiny. Option C might work once, but it will permanently damage your relationship with the finance team."
        },
        {
          "customerLine": "The project has been approved, but I'm worried some teams won't cooperate during implementation.",
          "options": [
            "Send an email to all teams explaining the project and asking for their support.",
            "Ask the CEO to send a message making it clear that all teams must cooperate.",
            "Meet with each team lead individually before implementation starts. Understand their concerns, address them, and confirm their specific role and what support they will get."
          ],
          "correctIndex": 2,
          "explanation": "Option C builds genuine alignment through individual conversations — this is the most effective way to prevent problems during implementation. Option A (email) is too easy to ignore. Option B relies on authority rather than relationship, which creates compliance but not commitment."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "I presented the strategy but it didn't go well. There was a lot of resistance from the finance team." },
        { "speaker": "Riley", "text": "Did you map your stakeholders before the meeting? Who has the real power in that room?" },
        { "speaker": "Marcus", "text": "The Head of Finance is the main power broker. But I didn't meet her before — I thought the idea would speak for itself." },
        { "speaker": "Riley", "text": "You should build your coalition during the meeting — that's the right time to get people on side." },
        { "speaker": "Marcus", "text": "I also didn't have a senior sponsor. Riley said every big project needs someone who will speak in it when you're not in the room." },
        { "speaker": "Riley", "text": "Exactly. And next time, bring the key people into this early. Ask for their input before your ideas are fixed." }
      ],
      "mistakes": [
        {
          "lineIndex": 3,
          "incorrectText": "You should build your coalition during the meeting",
          "correction": "You should build your coalition before the meeting",
          "explanation": "This is a content error. Riley's advice is wrong — you build a coalition before the meeting, not during it. By the time you present, the key people should already be on your side. Trying to win people over during a formal meeting is much harder and often too late."
        },
        {
          "lineIndex": 4,
          "incorrectText": "someone who will speak in it when you're not in the room",
          "correction": "someone who will speak for it when you're not in the room",
          "explanation": "The correct preposition is 'for' — 'speak for something' means to defend or support it. 'Speak in it' does not make sense in this context. A sponsor 'speaks for' the project — they advocate for it, defend it, and use their influence to protect it."
        },
        {
          "lineIndex": 2,
          "incorrectText": "I thought the idea would speak for itself",
          "correction": "This line is correct",
          "explanation": "'The idea will speak for itself' is a correct English idiom — it means the idea is so good it doesn't need explanation or selling. The real mistakes are in lines 4 and 5."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "I want to introduce a major change across the company. Where do I start?",
          "salespersonStart": "Start with a stakeholder map. Identify who has real power, who might resist, and who you need on your side. Then...",
          "suggestedCompletion": "meet with each key person individually before you present to the group. Bring them into it early, ask for their input, and address their concerns. By the time you stand up to present, the room should already be with you."
        },
        {
          "customerLine": "There's one person who keeps blocking everything I try to do. How do I handle it?",
          "salespersonStart": "Don't fight the resistance — understand it. Ask them directly: 'What would it take for you to support this?' Usually...",
          "suggestedCompletion": "resistance comes from fear — of extra work, of losing control, or of looking bad. Once you know what they're really worried about, you can address it and turn a blocker into an ally."
        },
        {
          "customerLine": "I have board approval, but the regional teams are not cooperating.",
          "salespersonStart": "Board approval gives you the mandate, but it doesn't give you buy-in. Meet with each regional lead and say: 'I wanted to bring you into this early — your team's role is critical and...",
          "suggestedCompletion": "I want to make sure this works for you, not just for the board.' When people feel included in the process, they cooperate. When they feel told, they find ways to resist."
        }
      ]
    }
  },
};

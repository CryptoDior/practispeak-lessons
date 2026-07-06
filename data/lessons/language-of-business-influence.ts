import { Lesson } from '@/types/lesson';

export const languageOfBusinessInfluence: Lesson = {
  slug: 'language-of-business-influence',
  title: 'The Language of Business Influence',
  subtitle: 'How to frame messages, control the narrative, and persuade at the highest level',
  level: 'C1-C2',
  description: 'The most powerful people in business are not always the loudest. They are the ones who know how to frame a message, set the agenda before the meeting starts, and guide a conversation without appearing to lead it. This lesson teaches you the language of influence — how words shape decisions, how narratives are built and broken, and how to communicate with intention at the senior level.',
  heroImage: '/images/language-of-business-influence-hero.png',

  vocabulary: [
    {
      word: 'SUBTEXT',
      partOfSpeech: 'noun',
      definition: 'The real message hidden under the words someone uses. What is not said directly.',
      example: "The CEO said 'We are exploring all options.' The subtext was clear: the company was looking for a buyer.",
      imageSlug: '/images/language-of-business-influence-subtext.png',
    },
    {
      word: 'FRAMING',
      partOfSpeech: 'noun',
      definition: 'The way you present an idea so that people see it the way you want them to.',
      example: "Riley said: Don't call it a cost — call it an investment. That's framing. The number is the same. The feeling is completely different.",
      imageSlug: '/images/language-of-business-influence-framing.png',
    },
    {
      word: 'AGENDA-SETTING',
      partOfSpeech: 'noun',
      definition: 'Deciding what topics get discussed — and what gets left out. Whoever sets the agenda controls the conversation.',
      example: 'Marcus noticed that the budget was not on the agenda. He realised Riley had done this on purpose — she wanted to agree the strategy before money came up.',
      imageSlug: '/images/agenda-setting.png',
    },
    {
      word: 'NARRATIVE CONTROL',
      partOfSpeech: 'noun',
      definition: 'Keeping the story about your brand or business in your hands — not the media or your competitors.',
      example: 'When the product failed, the CEO acted fast. She controlled the narrative by speaking first, taking responsibility, and announcing a fix — before journalists could write their own version.',
      imageSlug: '/images/narrative-control.png',
    },
    {
      word: 'SPIN',
      partOfSpeech: 'noun',
      definition: 'Presenting bad news in a way that sounds positive or less serious than it really is.',
      example: 'The press release called the job cuts a "restructuring for growth." Marcus said: That is pure spin — 400 people lost their jobs.',
      imageSlug: '/images/language-of-business-influence-spin.png',
    },
    {
      word: 'RHETORIC',
      partOfSpeech: 'noun',
      definition: 'The skill of using language to persuade people. Often used when the language is impressive but the content is weak.',
      example: "Riley said: The speech was full of rhetoric — big words, strong emotion — but he never actually said what the plan was.",
      imageSlug: '/images/rhetoric.png',
    },
    {
      word: 'POSITIONING',
      partOfSpeech: 'noun',
      definition: 'How you describe yourself or your brand compared to others — what makes you different.',
      example: 'Their positioning was simple: the premium option for people who do not want to compromise on quality.',
      imageSlug: '/images/language-of-business-influence-positioning.png',
    },
    {
      word: 'LEVERAGE',
      partOfSpeech: 'noun / verb',
      definition: 'Using something you have — information, a relationship, a situation — to get what you want.',
      example: 'Riley had one piece of leverage: she knew the competitor was about to raise prices. She used it to close the deal that afternoon.',
      imageSlug: '/images/language-of-business-influence-leverage.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'LET ME REFRAME THAT...',
      definition: 'A phrase that signals you are about to present the same idea in a better way. It takes control of the conversation without rejecting what was just said.',
      example: "Marcus said the campaign had failed. Riley replied: Let me reframe that — we ran a test, learned what doesn't work, and now we know exactly where to put the budget.",
      imageSlug: '/images/language-of-business-influence-let-me-reframe-that.png',
    },
    {
      phrase: 'THE REAL QUESTION HERE IS...',
      definition: 'A phrase that shifts focus away from a difficult point and onto a question you are more comfortable answering.',
      example: 'When the board asked about costs, Riley said: The real question here is whether this will grow revenue — and the answer is yes, by at least 20% in year one.',
      imageSlug: '/images/language-of-business-influence-the-real-question-here-is.png',
    },
    {
      phrase: 'WHAT I WANT YOU TO TAKE AWAY FROM THIS IS...',
      definition: 'A direct way to tell the audience what the single most important message is. It removes all ambiguity about what matters.',
      example: "Riley ended her presentation and said: What I want you to take away from this is simple — we have the strategy, we have the team, and we are ready to move.",
      imageSlug: '/images/what-i-want-you-to-take-away-from-this-is.png',
    },
    {
      phrase: "LET'S PUT A PIN IN THAT",
      definition: 'A polite way to stop a conversation going in a direction you do not want. It delays the topic without refusing it.',
      example: 'The budget question came up early. Riley said: Let\'s put a pin in that and come back to it — I want to make sure you see the full value first.',
      imageSlug: '/images/lets-put-a-pin-in-that.png',
    },
    {
      phrase: 'TO PUT IT PLAINLY,...',
      definition: 'A phrase that signals you are about to say something direct and honest. It builds trust and cuts through vague language.',
      example: "Riley said: To put it plainly, if we don't act now, a competitor will. That's the situation.",
      imageSlug: '/images/to-put-it-plainly.png',
    },
    {
      phrase: 'THE WAY I SEE IT,...',
      definition: 'A phrase that presents your view as a perspective, not a fact — which makes it easier for others to agree without feeling forced.',
      example: "Riley said: The way I see it, we have two options — move fast and take the lead, or wait and watch someone else do it first.",
      imageSlug: '/images/language-of-business-influence-the-way-i-see-it.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, I just watched that CEO's keynote. I couldn't tell if it was brilliant or just a lot of [[rhetoric:impressive language used to persuade, often without much real content]]. What did you think?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Both, honestly. The [[framing:the way you present an idea so people see it the way you want]] was masterful — she never used the word "crisis" once. She called it a "period of recalibration".',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'I noticed that. And she kept bringing the conversation back to their values every time a hard question came up.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Classic [[agenda-setting:deciding what topics get discussed and what gets left out]]. She decided what was important before anyone else could. That is a skill most communicators never develop.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What about the bit on job cuts? She called it a "talent realignment". That felt like [[spin:presenting bad news in a way that sounds positive or less serious]].',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "It was. But here's the difference — she acknowledged the impact on people first. That gave her [[narrative control:keeping the story about your brand in your hands]]. If she hadn't spoken first, the media would have told that story very differently.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'So is there always a [[subtext:the real message hidden under the words someone uses]] in a speech like that?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Always. The way I see it, every senior communication has two layers — what is said, and what is meant. Your job is to read both.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'How do you learn to do that? Is it just experience?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Experience helps. But mostly it's about [[positioning:how you describe yourself or your brand compared to others]]. Understand where people are coming from — what they want to protect — and the subtext becomes obvious.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And how do you use it? I want to be better at this in my own presentations.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Start with what you want people to walk away believing. Then build everything around that. That's your [[leverage:using something you have to guide people toward what you want]] in the room.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "So I should end every presentation with a clear takeaway?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Exactly. Tell them: 'What I want you to take away from this is...' and say one thing. Just one. If they remember nothing else, that one thing should stay with them.",
    }
  ],

  matchingExercise: [
    { "word": "subtext", "definition": "the real message hidden under the words someone uses" },
    { "word": "framing", "definition": "the way you present an idea so people see it the way you want" },
    { "word": "agenda-setting", "definition": "deciding what topics get discussed — and what gets left out" },
    { "word": "narrative control", "definition": "keeping the story about your brand in your hands" },
    { "word": "spin", "definition": "presenting bad news in a way that sounds positive or less serious" },
    { "word": "rhetoric", "definition": "impressive language used to persuade, often without much real content" },
    { "word": "positioning", "definition": "how you describe yourself or your brand compared to others" },
    { "word": "leverage", "definition": "using something you have to guide others toward what you want" }
  ],

  fillBlankExercise: [
    { "before": "She never used the word 'failure'. She called it a 'learning moment'. That's expert ", "after": ".", "answer": "framing" },
    { "before": "The CEO spoke first — she knew that whoever speaks first controls the ", "after": ".", "answer": "narrative" },
    { "before": "His speech was full of ", "after": " — impressive words, but no real plan behind them.", "answer": "rhetoric" },
    { "before": "The real message was never said directly. You had to listen for the ", "after": ".", "answer": "subtext" },
    { "before": "She decided what would be on the agenda before anyone arrived. That is ", "after": " at its most effective.", "answer": "agenda-setting" },
    { "before": "They had one piece of ", "after": " — a competitor's pricing document — and they used it to win the contract.", "answer": "leverage" }
  ],

  multipleChoiceExercise: [
    {
      "question": "Why does Riley say the CEO's speech was good, not just spin?",
      "options": [
        "Because she used technical vocabulary very well",
        "Because she acknowledged the human impact before controlling the narrative",
        "Because she refused to answer difficult questions"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Riley say agenda-setting means in practice?",
      "options": [
        "Writing a clear list of topics before a meeting",
        "Deciding what is important before anyone else can",
        "Asking the most important questions first"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Riley say every senior communication has?",
      "options": [
        "A clear structure and a summary slide",
        "Two layers — what is said and what is meant",
        "A subtext that is always negative"
      ],
      "correctIndex": 1
    },
    {
      "question": "What advice does Riley give Marcus for his own presentations?",
      "options": [
        "Start with the data and let the audience draw conclusions",
        "Use emotional language to build a connection",
        "Decide on one takeaway and build everything around it"
      ],
      "correctIndex": 2
    }
  ],

  warmUp: {
    "questions": [
      "Think of a leader or manager you have worked with. Did they ever say one thing but mean something else? What gave the real meaning away?",
      "Have you ever changed the way you described something — not the facts, just the words — to make it sound better? What was the situation?",
      "When you listen to a company announcement or a CEO speech, what do you pay attention to? The words, the tone, or what is NOT said?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "She never called it a failure. She _____ it as a strategic pivot.",
        "options": ["framed", "told", "spoke"],
        "correctIndex": 0,
        "explanation": "'Framed' is the correct verb here — 'to frame something as' means to present it in a particular way. We say 'frame it as an opportunity', 'frame the situation as a challenge'. 'Told' and 'spoke' do not work with 'as' in this structure."
      },
      {
        "sentence": "Before the meeting, she made sure the agenda only covered topics she was _____ to discuss.",
        "options": ["prepared", "ready", "willing"],
        "correctIndex": 0,
        "explanation": "'Prepared' means you have thought about and are ready for something — it is the most natural word in a professional context here. 'Ready' and 'willing' both work in conversation but 'prepared to discuss' is the standard professional phrase for controlling agenda items."
      },
      {
        "sentence": "The real message was never said directly — you had to read the _____.",
        "options": ["subtext", "summary", "headline"],
        "correctIndex": 0,
        "explanation": "'Subtext' is exactly right — it means the meaning hidden under the surface of what is said. 'Summary' is a short version of the main content. 'Headline' is the most important point stated directly. Only 'subtext' describes a message that is hidden, not stated."
      },
      {
        "sentence": "The press release was full of _____. It called 500 job losses a 'team optimisation'.",
        "options": ["spin", "framing", "subtext"],
        "correctIndex": 0,
        "explanation": "'Spin' is the right word when bad news is presented in a deliberately positive or misleading way. 'Framing' is more neutral — it means how you present something, not necessarily dishonestly. 'Subtext' refers to a hidden meaning, not a public statement. When a company turns bad news into good-sounding language, that is spin."
      },
      {
        "sentence": "Their _____ was clear: the premium choice for serious professionals, not the budget option.",
        "options": ["positioning", "framing", "rhetoric"],
        "correctIndex": 0,
        "explanation": "'Positioning' is how a brand or person defines themselves relative to others — it answers the question 'who are we compared to them?' 'Framing' is about how you present one idea. 'Rhetoric' is about how language is used to persuade. Only 'positioning' describes a brand's place in the market."
      },
      {
        "sentence": "She had one key piece of _____ in the negotiation: she knew the competitor had already lost a major client.",
        "options": ["leverage", "power", "control"],
        "correctIndex": 0,
        "explanation": "'Leverage' means a specific advantage you use to influence an outcome — it is the standard business term for this. 'Power' is more general and does not imply a specific piece of information or advantage. 'Control' describes having authority over a situation. When you use information or a situation to your advantage in a negotiation, that is leverage."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the other person says. Choose the best response from the three options.",
      "items": [
        {
          "customerLine": "Your campaign results were disappointing. The numbers didn't hit target.",
          "options": [
            "You're right — we failed. I'm sorry.",
            "Let me reframe that. We ran a test campaign, identified what doesn't convert, and now we know exactly where to invest the next budget. That's not failure — that's learning.",
            "The targets were set too high. That's the real problem here."
          ],
          "correctIndex": 1,
          "explanation": "Option B uses reframing to turn a negative into a positive without denying the facts. It acknowledges the result and immediately pivots to what was learned. Option A accepts blame without adding value. Option C shifts blame to the targets, which sounds defensive and damages the relationship."
        },
        {
          "customerLine": "I'm not sure this strategy is the right one. There's a lot of risk here.",
          "options": [
            "I understand the concern. The way I see it, the bigger risk is doing nothing — our main competitor launched a similar campaign last month.",
            "Risk is part of every strategy. If you want zero risk, you won't grow.",
            "The strategy has been approved by the leadership team — I think the decision is made."
          ],
          "correctIndex": 0,
          "explanation": "Option A uses a classic reframing technique — it accepts the concern and then repositions the risk by showing what the real cost of inaction looks like. It is persuasive without being aggressive. Option B is dismissive and sounds confrontational. Option C shuts down the conversation rather than building buy-in."
        },
        {
          "customerLine": "I've read your proposal but I have a lot of questions about the budget section.",
          "options": [
            "Let's put a pin in the budget for a moment — I want to make sure you see the full value of the plan first. Once you see the projected return, the cost looks very different.",
            "The budget is fixed — I can't change it.",
            "Which part of the budget are you concerned about? Let's go through it line by line."
          ],
          "correctIndex": 0,
          "explanation": "Option A uses agenda-setting — it delays the budget question strategically so that value is established before cost is discussed. This is a high-level influence technique. Option B shuts down the conversation. Option C is not wrong, but going line by line on budget before establishing value puts you in a weak negotiating position."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "Did you read the CEO's statement? There was a lot of subtext in it — she didn't say everything directly." },
        { "speaker": "Riley", "text": "Yes — she was very good at framing. She presented the same facts in a way that felt positive." },
        { "speaker": "Marcus", "text": "I noticed she also controlled the agenda. She decided what topics were on the table before everyone else could." },
        { "speaker": "Riley", "text": "Exactly. And when the journalist asked about the layoffs, she reframed them as a 'talent realignment'. That was spin on its clearest form." },
        { "speaker": "Marcus", "text": "What was the main leverage she had in that press conference?" },
        { "speaker": "Riley", "text": "She spoke first. That's the most powerful positioning you can have — whoever speaks first, they controls the narrative." }
      ],
      "mistakes": [
        {
          "lineIndex": 3,
          "incorrectText": "on its clearest form",
          "correction": "in its clearest form",
          "explanation": "The correct preposition is 'in' — we say 'in its clearest form', 'in its simplest form', 'in its most basic form'. 'On its clearest form' is not correct in English. Think of 'in form' as describing something in a particular state or version — we always use 'in' for this."
        },
        {
          "lineIndex": 5,
          "incorrectText": "they controls",
          "correction": "they control",
          "explanation": "With 'they' as the subject, the verb has no '-s' ending in English. 'They control', not 'they controls'. This is a common error for speakers whose language adds agreement endings to all verbs. In English, only 'he/she/it' takes an '-s' in the present simple: 'she controls', 'they control'."
        },
        {
          "lineIndex": 3,
          "incorrectText": "reframed them as",
          "correction": "framed them as",
          "explanation": "Actually this is correct — 'reframed' is acceptable here. The real error is 'on its clearest form'. 'Reframe' means to present something in a new way, which fits exactly — she took a negative event and gave it a new name. Both 'framed' and 'reframed' work; 'reframed' emphasises the shift from one version to another."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "Your numbers are down 15% this quarter.",
          "salespersonStart": "Let me reframe that — a 15% drop in a market that fell 30% means we actually...",
          "suggestedCompletion": "outperformed the market by 15 points. The real story here is not that we dropped — it's that we held position better than anyone else in our category."
        },
        {
          "customerLine": "Why should I choose you over a cheaper competitor?",
          "salespersonStart": "The way I see it, the question isn't about price — it's about what happens when...",
          "suggestedCompletion": "things go wrong. Our clients stay with us because when there's a problem, we solve it. A cheaper option might cost less today and a great deal more in six months."
        },
        {
          "customerLine": "I'm not sure the board will approve this budget.",
          "salespersonStart": "What I want you to take away from this presentation is one thing: this isn't a cost — it's...",
          "suggestedCompletion": "the only way to protect our market position over the next two years. The board can choose not to invest — but that's also a decision, and it has a cost of its own."
        }
      ]
    }
  },
};

import { Lesson } from '@/types/lesson';

export const advancedDiscourseAnalysis: Lesson = {
  slug: 'advanced-discourse-analysis',
  title: 'Advanced Discourse Analysis',
  subtitle: 'How to read between the lines of marketing texts, brand messages, and business communication',
  level: 'C1-C2',
  description: 'The most important messages in business are often not the ones said directly. Skilled communicators know how to read a press release, a brand campaign, or a competitor\'s statement and understand what is really going on. This lesson teaches you the tools of discourse analysis — how language is used, what it assumes, and what it leaves out — so you can read any business text at a deeper level.',
  heroImage: '/images/advanced-discourse-analysis-hero.png',

  vocabulary: [
    {
      word: 'DISCOURSE',
      partOfSpeech: 'noun',
      definition: 'The way a topic is talked about — the words, ideas, and assumptions that surround it. Each industry has its own discourse.',
      example: "Riley explained: The discourse around sustainability in marketing has shifted. Ten years ago, it was about cost. Now it's about identity and values.",
      imageSlug: '/images/discourse.png',
    },
    {
      word: 'IMPLICATURE',
      partOfSpeech: 'noun',
      definition: 'What is implied by something said — the meaning that is carried without being directly stated.',
      example: 'The ad said: "Some brands promise. We deliver." The implicature was clear — our competitors don\'t keep their promises.',
      imageSlug: '/images/implicature.png',
    },
    {
      word: 'PRESUPPOSITION',
      partOfSpeech: 'noun',
      definition: 'An assumption built into a sentence that the speaker expects you to accept as true.',
      example: '"When did you stop ignoring your customers?" This presupposes you were ignoring them — you cannot answer without accepting that framing.',
      imageSlug: '/images/presupposition.png',
    },
    {
      word: 'REGISTER',
      partOfSpeech: 'noun',
      definition: 'The level of formality in language — how formal or informal the tone is for a specific situation.',
      example: 'Marcus said: The press release is in the wrong register — it sounds like a social media post. Riley said: You need formal register for a financial announcement.',
      imageSlug: '/images/register.png',
    },
    {
      word: 'PRAGMATICS',
      partOfSpeech: 'noun',
      definition: 'The study of how context changes the meaning of language. What something means in practice, not just in theory.',
      example: '"Could you close the door?" is grammatically a question. But pragmatically, it is a request. Context changes meaning.',
      imageSlug: '/images/pragmatics.png',
    },
    {
      word: 'CONNOTATION',
      partOfSpeech: 'noun',
      definition: 'The emotional or social meaning attached to a word — beyond its dictionary definition.',
      example: 'Riley said: "Cheap" and "affordable" mean the same thing in theory. But "cheap" has negative connotations — it implies poor quality.',
      imageSlug: '/images/connotation.png',
    },
    {
      word: 'IDEOLOGY',
      partOfSpeech: 'noun',
      definition: 'The set of values and beliefs that shape how someone or an organisation sees the world — often shown through the language they choose.',
      example: "The brand's ideology was clear in every piece of communication: individual achievement over community, competition over cooperation.",
      imageSlug: '/images/ideology.png',
    },
    {
      word: 'INTERTEXTUALITY',
      partOfSpeech: 'noun',
      definition: 'When a text references another text — a quote, a visual reference, or a familiar phrase — to carry extra meaning.',
      example: 'The campaign used the phrase "Just do it — differently." The intertextuality was deliberate — it referenced Nike to position the brand as a challenger.',
      imageSlug: '/images/intertextuality.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WHAT THIS TEXT IS REALLY SAYING IS...',
      definition: 'A phrase used to move from the surface meaning to the deeper meaning. It introduces your analysis of what is implied.',
      example: "Riley said: The press release sounds positive, but what this text is really saying is that the company is under pressure and needs to reassure investors.",
      imageSlug: '/images/what-this-text-is-really-saying-is.png',
    },
    {
      phrase: 'THE CHOICE OF [WORD] IS SIGNIFICANT BECAUSE...',
      definition: 'A phrase used when analysing why a specific word was chosen and what it signals.',
      example: "Marcus noticed the CEO had used 'challenge' instead of 'crisis'. Riley said: The choice of 'challenge' is significant because it reframes the situation as something manageable, not catastrophic.",
      imageSlug: '/images/the-choice-of-word-is-significant-because.png',
    },
    {
      phrase: 'THIS ASSUMES THAT...',
      definition: 'A phrase used to identify a presupposition — to name what a text takes for granted.',
      example: "The headline said: 'Get back to what you love.' Riley said: This assumes the reader has lost something. It's building on a feeling of loss before offering the solution.",
      imageSlug: '/images/this-assumes-that.png',
    },
    {
      phrase: 'NOTICE HOW THE TEXT [ACTION]...',
      definition: 'A phrase used to draw attention to a specific technique or pattern in a piece of writing.',
      example: "Riley said: Notice how the text never mentions the competitor directly. It doesn't need to — the implicature does the work.",
      imageSlug: '/images/notice-how-the-text.png',
    },
    {
      phrase: 'THE TONE HERE IS...',
      definition: 'A phrase used to name the register and emotional quality of a piece of writing.',
      example: "Marcus asked how to describe the email. Riley said: The tone here is confident but not aggressive — it states the position clearly without attacking the other side.",
      imageSlug: '/images/the-tone-here-is.png',
    },
    {
      phrase: 'WHAT IS LEFT UNSAID HERE IS...',
      definition: 'A phrase used to point out what a text deliberately avoids — what is missing or what has been left out.',
      example: "Riley said: The campaign talks a lot about innovation. But what is left unsaid here is that the previous product was faulty and this is a replacement.",
      imageSlug: '/images/what-is-left-unsaid-here-is.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Marcus, I want you to read this competitor's press release and tell me what you notice.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "OK. It sounds positive. They're announcing a 'strategic realignment' and calling it an exciting new chapter.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good. Now read it again. What is the [[discourse:the way a topic is talked about — the words and assumptions that surround it]] around the word 'realignment'? What does it usually mean in business?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Usually... job cuts? Or a major change in direction?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Exactly. The choice of 'realignment' over 'restructuring' is significant. The [[connotation:the emotional meaning attached to a word]] is softer — less threatening. What is the [[implicature:the meaning carried without being directly stated]]?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That they are going through something difficult — but they want it to sound like a positive choice.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good. Now look at this sentence: 'We have always put our customers first, and this decision reflects that commitment.' What is the [[presupposition:an assumption built into a sentence the speaker expects you to accept]]?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "It assumes they have always put customers first — as if that is already an accepted fact. Even if it isn't.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Exactly. That is [[pragmatics:the study of how context changes the meaning of language]] at work — what the sentence does in the world, not just what it says.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the [[register:the level of formality in language — how formal or informal the tone is]] feels unusually warm for a restructuring announcement.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Right. Normally a financial announcement uses formal register. Here the tone is designed to reduce alarm — informal enough to feel human, formal enough to seem credible.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What about the [[ideology:the values and beliefs that shape how an organisation sees the world — often shown through language]]? What does this text believe?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Look at what is left unsaid. There is no apology. No acknowledgement of any mistake. The ideology here is: we make strategic decisions, not errors.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "This is genuinely useful. I'll never read a press release the same way again.",
    }
  ],

  matchingExercise: [
    { "word": "discourse", "definition": "the way a topic is talked about — the words and assumptions that surround it" },
    { "word": "implicature", "definition": "the meaning carried without being directly stated" },
    { "word": "presupposition", "definition": "an assumption built into a sentence that the speaker expects you to accept" },
    { "word": "register", "definition": "the level of formality in language for a specific situation" },
    { "word": "pragmatics", "definition": "how context changes the meaning of language" },
    { "word": "connotation", "definition": "the emotional or social meaning attached to a word" },
    { "word": "ideology", "definition": "the values and beliefs that shape language and communication choices" },
    { "word": "intertextuality", "definition": "when a text references another text to carry extra meaning" }
  ],

  fillBlankExercise: [
    { "before": "The word 'affordable' has positive ", "after": ", but 'cheap' has negative ones — even though they mean the same thing.", "answer": "connotations" },
    { "before": "The press release never said they had made a mistake. That is the key — look at what is left ", "after": ".", "answer": "unsaid" },
    { "before": "The sentence assumes the reader has lost something. That is a ", "after": " — a belief built in before the argument even starts.", "answer": "presupposition" },
    { "before": "The ad implies the competition is dishonest without saying it directly. That is an example of ", "after": ".", "answer": "implicature" },
    { "before": "A financial report should use formal ", "after": ". If it sounds like a social media post, something is wrong.", "answer": "register" },
    { "before": "'Could you send me that file?' is grammatically a question, but ", "after": " tells us it is a polite request.", "answer": "pragmatics" }
  ],

  multipleChoiceExercise: [
    {
      "question": "Why does Riley say the choice of 'realignment' over 'restructuring' is significant?",
      "options": [
        "Because 'realignment' is a more accurate technical term",
        "Because 'realignment' has softer connotations — it sounds less threatening",
        "Because 'restructuring' is too informal for a press release"
      ],
      "correctIndex": 1
    },
    {
      "question": "What is the presupposition in 'We have always put our customers first'?",
      "options": [
        "That the company plans to prioritise customers in the future",
        "That this is a new policy the company is introducing",
        "That putting customers first is already an accepted, proven fact about the company"
      ],
      "correctIndex": 2
    },
    {
      "question": "What does Riley say the ideology of the press release reveals?",
      "options": [
        "That the company puts customers above shareholders",
        "That the company sees its decisions as strategic choices, not mistakes",
        "That the company is preparing to enter a new market"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Marcus say about the register of the press release?",
      "options": [
        "It is too formal — it sounds like a legal document",
        "It is unusually warm for a restructuring announcement",
        "It is inconsistent — some parts are formal and some are not"
      ],
      "correctIndex": 1
    }
  ],

  warmUp: {
    "questions": [
      "Think of a brand campaign or company statement you have seen recently. Was there anything in it that seemed to say more than the words on the surface?",
      "What is the difference between 'we are restructuring' and 'we are realigning'? Which would you rather hear from your employer?",
      "Can you think of a word or phrase in your industry that sounds positive but often signals something negative? What is it and why?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "The word 'affordable' and the word 'cheap' have the same meaning, but very different _____.",
        "options": ["connotations", "definitions", "registers"],
        "correctIndex": 0,
        "explanation": "'Connotations' are the emotional or social meanings attached to words — beyond their dictionary definitions. 'Definitions' are the literal meanings. 'Registers' describe the level of formality. When two words have the same literal meaning but one feels positive and one feels negative, the difference is in the connotations."
      },
      {
        "sentence": "'Have you stopped making that mistake?' — this question contains a _____. It assumes you were making a mistake.",
        "options": ["presupposition", "implicature", "connotation"],
        "correctIndex": 0,
        "explanation": "A 'presupposition' is an assumption built into a sentence that you have to accept to engage with the question. This question presupposes the person was making a mistake. An 'implicature' is something implied but not stated. A 'connotation' is the emotional weight of a word. Only 'presupposition' describes an assumption hidden inside a sentence."
      },
      {
        "sentence": "The campaign never mentioned the competitor by name, but the _____ was clear — their product is inferior.",
        "options": ["implicature", "subtext", "discourse"],
        "correctIndex": 0,
        "explanation": "'Implicature' is the technical term for a meaning carried without being directly stated. 'Subtext' is a more informal word for a similar idea. 'Discourse' refers to the way a topic is generally discussed. When a message is clearly communicated without being literally said, that is implicature."
      },
      {
        "sentence": "The annual report used informal language — jokes, casual phrases, simple sentences. The _____ was wrong for a financial document.",
        "options": ["register", "tone", "style"],
        "correctIndex": 0,
        "explanation": "'Register' is the specific word for the level of formality appropriate to a situation. A financial document has an expected formal register. 'Tone' is the emotional quality of the writing (confident, apologetic, warm). 'Style' is a broader term covering everything from vocabulary choice to structure. Register is specifically about formality level."
      },
      {
        "sentence": "'Could you review this before Friday?' is technically a question, but _____ tells us it is a request.",
        "options": ["pragmatics", "discourse", "register"],
        "correctIndex": 0,
        "explanation": "'Pragmatics' is the study of how context changes meaning. In the real world, 'Could you...?' questions are usually requests, not genuine questions about ability. 'Discourse' is about how topics are discussed generally. 'Register' is about formality. Only 'pragmatics' describes how context transforms a grammatical question into a functional request."
      },
      {
        "sentence": "The way a topic is discussed — the words people choose, what they assume, what they leave out — is called _____.",
        "options": ["discourse", "ideology", "pragmatics"],
        "correctIndex": 0,
        "explanation": "'Discourse' is the broad term for the language, ideas, and assumptions that surround a topic. 'Ideology' is the underlying values and beliefs that shape the discourse. 'Pragmatics' is about how meaning changes with context in specific situations. When talking about the whole system of how a topic is discussed, use 'discourse'."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the other person says. Choose the best analytical response.",
      "items": [
        {
          "customerLine": "The press release says they are 'exploring strategic options'. What does that mean?",
          "options": [
            "It means they are planning to expand into new markets.",
            "It means they are probably looking for a buyer or preparing for a major restructure. 'Exploring strategic options' is a classic phrase used to sound calm while signalling major change. What's left unsaid is much more significant than what is said.",
            "It's hard to say — the language is quite general."
          ],
          "correctIndex": 1,
          "explanation": "Option B gives a specific, informed analysis of the implicature. 'Exploring strategic options' is a well-known piece of corporate language that almost always signals a major event — sale, merger, restructure. Option A makes a specific guess without evidence. Option C is too vague to be useful."
        },
        {
          "customerLine": "How is this ad different from their previous campaigns?",
          "options": [
            "It uses different colours and a new logo.",
            "Notice how the tone has shifted — the previous campaign was aspirational and focused on individual success. This one is communal and values-driven. The discourse has moved from 'you can achieve' to 'we belong together'. That's a significant ideological shift.",
            "It's a newer campaign with a different creative team."
          ],
          "correctIndex": 1,
          "explanation": "Option B analyses the discourse — it looks at what values and ideology are expressed and how they have changed. This is what discourse analysis means in practice. Option A describes surface features. Option C explains the change without analysing what it means."
        },
        {
          "customerLine": "Why do you think the CEO chose the word 'pivot' instead of 'change'?",
          "options": [
            "Probably because it's shorter.",
            "The choice of 'pivot' is significant — it carries connotations of agility and intention. A 'pivot' is something you do deliberately, from a position of strength. A 'change' can happen to you. The word frames this as a strategic decision, not a reaction to failure.",
            "It's a trendy business word. Everyone uses it now."
          ],
          "correctIndex": 1,
          "explanation": "Option B does what discourse analysis requires — it explains why a specific word choice matters and what it communicates about the speaker's intentions. Option A dismisses the question. Option C is partly right but explains nothing about the connotation or the strategic purpose of the word choice."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "I've been reading the competitor's latest campaign. The connotations of 'affordable' are positive — it sounds like good value." },
        { "speaker": "Riley", "text": "Good observation. What about the presupposition in the headline: 'Stop wasting money on tools that don't work'?" },
        { "speaker": "Marcus", "text": "It presupposes that the reader is currently wasting money — you have to accept that before you can engage with the message." },
        { "speaker": "Riley", "text": "Exactly. And what about the register? The tone is very formal — it reads like a conversation, not a report." },
        { "speaker": "Marcus", "text": "So the implicature is that they are a friendly, approachable brand? Even though they never say that directly?" },
        { "speaker": "Riley", "text": "Correct. The discourse around the whole campaign is about trust and simplicity. Notice how the text never uses technical words — that's a deliberate choosing." }
      ],
      "mistakes": [
        {
          "lineIndex": 3,
          "incorrectText": "The tone is very formal — it reads like a conversation",
          "correction": "The tone is very informal — it reads like a conversation, not a report",
          "explanation": "This is a content error. If something reads like a conversation, the register is informal — not formal. A formal register reads like a report, a legal document, or a financial statement. An informal register reads like a conversation or a social media post."
        },
        {
          "lineIndex": 5,
          "incorrectText": "a deliberate choosing",
          "correction": "a deliberate choice",
          "explanation": "'Choice' is the noun — 'a deliberate choice'. 'Choosing' is the gerund (verb form used as a noun) — it can work in some contexts ('the act of choosing') but 'a deliberate choosing' is not natural or correct. Always use 'choice' as the noun: 'a deliberate choice', 'a conscious choice', 'a strategic choice'."
        },
        {
          "lineIndex": 0,
          "incorrectText": "'affordable' are positive",
          "correction": "the connotations of 'affordable' are positive",
          "explanation": "This line is correct as written — 'the connotations of affordable are positive' is grammatically fine. The subject is 'connotations' (plural), so the plural verb 'are' is correct. The real mistakes are in lines 4 and 6."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "What does this press release actually mean? It sounds very positive.",
          "salespersonStart": "Look at what is left unsaid. The text talks about 'new opportunities' and 'strategic growth', but notice how it never mentions...",
          "suggestedCompletion": "why the change is happening. It assumes you will accept the positive framing without asking what went wrong. What this text is really saying is that something significant has changed — and they want to control how you feel about it before you ask the hard questions."
        },
        {
          "customerLine": "Why do brands use words like 'journey' and 'community' so much now?",
          "salespersonStart": "Because of a shift in discourse. Ten years ago, the dominant ideology in brand communication was individual achievement. Now the discourse has moved toward...",
          "suggestedCompletion": "collective identity and belonging. 'Journey' and 'community' carry connotations of shared purpose and trust. Brands use them because consumers now respond better to values than features — so the language has changed to match."
        },
        {
          "customerLine": "How do I write copy that says something without saying it directly?",
          "salespersonStart": "Use implicature. Instead of saying 'our competitors are slow', try something like: 'We deliver in 24 hours.' The presupposition is that...",
          "suggestedCompletion": "others don't. You haven't made the claim directly — but the reader infers it. Notice how the best advertising never attacks the competition openly. The implicature does the work without the legal or reputational risk."
        }
      ]
    }
  },
};

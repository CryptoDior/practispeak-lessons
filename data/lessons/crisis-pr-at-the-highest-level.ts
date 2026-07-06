import { Lesson } from '@/types/lesson';

export const crisisPrAtTheHighestLevel: Lesson = {
  slug: 'crisis-pr-at-the-highest-level',
  title: 'Crisis PR at the Highest Level',
  subtitle: 'How to manage a major brand crisis — what to say, when to say it, and how to protect the company',
  level: 'C1-C2',
  description: 'Every major brand faces a crisis at some point. A product recall, a data breach, an executive scandal, a customer complaint that goes viral — the brands that survive are the ones that respond fast, take the right tone, and control the narrative before it controls them. This lesson teaches you the language and structure of crisis communication at the highest level — how to face the press, manage the message, and rebuild trust after a crisis.',
  heroImage: '/images/crisis-pr-at-the-highest-level-hero.png',

  vocabulary: [
    {
      word: 'CRISIS PLAYBOOK',
      partOfSpeech: 'noun',
      definition: 'A pre-written plan that tells an organisation exactly what to do and say when a crisis hits. The best companies have one before they need it.',
      example: "Riley said: Get your crisis playbook written before anything goes wrong. When you're in the middle of a crisis, there's no time to plan. The decisions need to be made in advance.",
      imageSlug: '/images/crisis-playbook.png',
    },
    {
      word: 'RAPID RESPONSE',
      partOfSpeech: 'noun',
      definition: 'A fast, organised reaction to a developing situation. In PR, a rapid response means getting the first statement out before the media fills the silence.',
      example: "Marcus said: We were too slow. Riley said: In PR, you have a two-hour window for rapid response. After that, the media writes their own version and you're playing catch-up.",
      imageSlug: '/images/rapid-response.png',
    },
    {
      word: 'MEDIA STORM',
      partOfSpeech: 'noun',
      definition: 'An intense period of negative media coverage — when many journalists and outlets are reporting on the same story at the same time.',
      example: "Riley said: A media storm can last 48 to 72 hours. Your job is to survive it, not win it. Don't say anything in a media storm that you'll regret later.",
      imageSlug: '/images/media-storm.png',
    },
    {
      word: 'CLASS ACTION',
      partOfSpeech: 'noun',
      definition: 'A lawsuit where a large group of people with the same complaint sue a company together.',
      example: "The data breach affected 80,000 customers. Marcus said: Are we looking at a class action? Riley said: Possibly. That's why legal needs to be in every communication decision from now on.",
      imageSlug: '/images/class-action.png',
    },
    {
      word: 'NARRATIVE',
      partOfSpeech: 'noun',
      definition: 'The story that people tell about what happened. In a crisis, your job is to make sure the true narrative — the one most favourable to your brand — is the one that sticks.',
      example: "Riley said: Right now the media is writing the narrative. We need to get out there with our own version — fast, honest, and simple.",
      imageSlug: '/images/crisis-pr-at-the-highest-level-narrative.png',
    },
    {
      word: 'HOLDING STATEMENT',
      partOfSpeech: 'noun',
      definition: 'A short public statement made while the facts are still being investigated. It buys time without making promises you cannot keep.',
      example: "'We are aware of the reports and are investigating urgently. We will provide a full update within 24 hours.' That is a holding statement. It's not much — but it fills the silence.",
      imageSlug: '/images/crisis-pr-at-the-highest-level-holding-statement.png',
    },
    {
      word: 'REPUTATIONAL DAMAGE',
      partOfSpeech: 'noun',
      definition: 'The long-term harm to how a company is seen — after a scandal, mistake, or crisis that has been badly handled.',
      example: "Riley said: The product recall itself isn't what destroys a brand. The reputational damage comes from how you handled it — were you honest, fast, and did you put customers first?",
      imageSlug: '/images/reputational-damage.png',
    },
    {
      word: 'ACCOUNTABILITY',
      partOfSpeech: 'noun',
      definition: 'Taking responsibility for what happened — not deflecting blame or making excuses.',
      example: "Marcus drafted a statement that blamed a supplier. Riley said: Remove that. The public doesn't care who's at fault internally — they want accountability from the brand. Take responsibility first.",
      imageSlug: '/images/crisis-pr-at-the-highest-level-accountability.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'WE ARE AWARE OF THE REPORTS AND ARE INVESTIGATING...',
      definition: 'The standard opening line of a holding statement. It acknowledges the situation without admitting fault or making promises.',
      example: "'We are aware of the reports regarding our data systems and are currently investigating the situation as a matter of urgency. We will provide a full update within 24 hours.'",
      imageSlug: '/images/we-are-aware-of-the-reports-and-are-investigating.png',
    },
    {
      phrase: 'WE TAKE FULL RESPONSIBILITY FOR...',
      definition: 'An accountability phrase that accepts blame clearly and without deflection. Brands that say this early lose less long-term trust than those that avoid it.',
      example: "Riley said: Don't say 'mistakes were made'. Say: 'We take full responsibility for the failure in our data security systems. That is not acceptable and we are fixing it.'",
      imageSlug: '/images/we-take-full-responsibility-for.png',
    },
    {
      phrase: 'OUR PRIORITY RIGHT NOW IS...',
      definition: 'A phrase used to signal what action is being taken immediately. It shows the company is focused on solving the problem, not managing its image.',
      example: "'Our priority right now is the safety and wellbeing of every customer affected. We are contacting them directly and providing immediate support.'",
      imageSlug: '/images/our-priority-right-now-is.png',
    },
    {
      phrase: 'LET ME BE CLEAR:...',
      definition: 'A phrase used before a statement that needs to be unambiguous — often used in press conferences to address speculation or false information directly.',
      example: "The reporter suggested the company had covered up the issue. Riley said to Marcus: Use this: 'Let me be clear: there was no cover-up. The moment we identified the problem, we notified the regulator.'",
      imageSlug: '/images/let-me-be-clear.png',
    },
    {
      phrase: 'WE UNDERSTAND THAT THIS HAS AFFECTED...',
      definition: 'An empathy phrase that acknowledges the impact on real people — customers, employees, or partners. It humanises the response.',
      example: "'We understand that this has affected thousands of our customers and we are deeply sorry for the disruption and concern this has caused. That is not the standard our customers expect from us.'",
      imageSlug: '/images/we-understand-that-this-has-affected.png',
    },
    {
      phrase: 'GOING FORWARD, WE ARE PUTTING IN PLACE...',
      definition: 'A forward-looking phrase that signals concrete action — what is changing so this does not happen again.',
      example: "'Going forward, we are putting in place a new set of security protocols, an independent review panel, and a direct compensation process for all affected customers.'",
      imageSlug: '/images/going-forward-we-are-putting-in-place.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley — we have a serious situation. A customer has posted about a data breach on social media. It's spreading fast. The story is already on two news sites.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "How long ago did the post go up?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "About 90 minutes.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "We're almost out of our [[rapid response:a fast, organised reaction to a situation before media fills the silence]] window. We need a [[holding statement:a short public statement made while facts are still being investigated]] out in the next 30 minutes. Do not wait for the full facts.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What do we say if we don't have all the information yet?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "'We are aware of the reports and are investigating urgently. We will provide a full update within 24 hours.' That's enough. It fills the silence and commits you to a timeline.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The legal team wants to say the breach was caused by a third-party supplier.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Remove it. [[Accountability:taking responsibility for what happened without deflecting blame]] comes first. The public doesn't care about your supply chain. They care about their data. Take responsibility and fix it.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "There's a [[media storm:an intense period when many outlets are covering the same story]] building — three journalists have called. Should we take their calls?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes — but brief, consistent, on message. Never say 'no comment' — it always looks like a cover-up. Say: 'We are taking this very seriously. Our priority right now is the safety of every customer affected.'",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What about the long-term [[reputational damage:the harm to how a company is seen after a crisis]]? We've worked so hard to build trust.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Reputational damage is manageable if you get this right. Brands recover from crises. They don't recover from cover-ups. Be honest, be fast, put customers first.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Should we be thinking about a [[class action:a lawsuit where many customers with the same complaint sue together]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Legal will manage that. Our job is the [[narrative:the story people tell about what happened]]. If we get the narrative right — honest, fast, customer-first — it changes everything. Now let's write that statement.",
    }
  ],

  matchingExercise: [
    { "word": "crisis playbook", "definition": "a pre-written plan for what to do and say when a crisis hits" },
    { "word": "rapid response", "definition": "a fast, organised reaction before the media fills the silence" },
    { "word": "media storm", "definition": "an intense period when many outlets cover the same negative story" },
    { "word": "class action", "definition": "a lawsuit where many customers with the same complaint sue together" },
    { "word": "narrative", "definition": "the story people tell about what happened — which version sticks" },
    { "word": "holding statement", "definition": "a short public statement made while facts are still being investigated" },
    { "word": "reputational damage", "definition": "long-term harm to how a company is seen after a badly handled crisis" },
    { "word": "accountability", "definition": "taking responsibility for what happened without deflecting blame" }
  ],

  fillBlankExercise: [
    { "before": "We need a ", "after": " statement out now — even without all the facts. It fills the silence.", "answer": "holding" },
    { "before": "Our two-hour ", "after": " response window is almost closed. We need to act now.", "answer": "rapid" },
    { "before": "Don't deflect blame. Take ", "after": ". The public wants to hear 'we are responsible and we are fixing it.'", "answer": "accountability" },
    { "before": "The media ", "after": " will last 48 hours. Your job is to survive it with your message intact.", "answer": "storm" },
    { "before": "Brands recover from crises. They don't recover from cover-ups. Get the ", "after": " right first.", "answer": "narrative" },
    { "before": "80,000 customers were affected. Legal has warned us about a potential ", "after": " action lawsuit.", "answer": "class" }
  ],

  multipleChoiceExercise: [
    {
      "question": "What does Riley say you should do when you don't have all the facts yet?",
      "options": [
        "Wait until you have the full picture before saying anything",
        "Issue a holding statement that acknowledges the situation and commits to a 24-hour update",
        "Let legal handle all communications until the investigation is complete"
      ],
      "correctIndex": 1
    },
    {
      "question": "Why does Riley say to remove the mention of the third-party supplier?",
      "options": [
        "Because it is legally dangerous to name other companies in a crisis",
        "Because customers care about their data, not about internal supply chains — accountability comes first",
        "Because the supplier relationship is confidential"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Riley say you should never say to a journalist during a crisis?",
      "options": [
        "'We are taking this very seriously'",
        "'Our priority is the safety of every customer'",
        "'No comment' — it always looks like a cover-up"
      ],
      "correctIndex": 2
    },
    {
      "question": "What does Riley say about long-term reputational damage?",
      "options": [
        "It is unavoidable after any major data breach",
        "It is manageable if you handle the crisis honestly and quickly — brands recover from crises but not from cover-ups",
        "The only way to avoid it is to prevent the crisis from reaching the media"
      ],
      "correctIndex": 1
    }
  ],

  warmUp: {
    "questions": [
      "Can you think of a company that handled a crisis really well? What did they do right? How did it affect how you felt about the brand?",
      "Have you ever seen a company make a crisis worse by what they said — or didn't say? What was the mistake?",
      "If your company had a serious data breach today, would you know what to do in the first two hours? What would your biggest challenge be?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "The first statement out doesn't need all the facts — a _____ buys you time without making promises you can't keep.",
        "options": ["holding statement", "press release", "statement of intent"],
        "correctIndex": 0,
        "explanation": "A 'holding statement' is specifically designed for the gap between a crisis emerging and the full facts being known. It acknowledges the situation, signals you are taking it seriously, and commits to a timeline for more information. A 'press release' is a full announcement. A 'statement of intent' is for future plans. Only a 'holding statement' is designed for crisis management."
      },
      {
        "sentence": "In crisis PR, you have a two-hour window for _____ — after that, the media writes their own version.",
        "options": ["rapid response", "immediate response", "fast communication"],
        "correctIndex": 0,
        "explanation": "'Rapid response' is the professional PR term for the organised, fast reaction to a developing story. It is a specific concept in crisis communications — it includes the holding statement, media briefings, and social media management within a short window. 'Immediate response' and 'fast communication' are informal descriptions, not professional terms."
      },
      {
        "sentence": "Don't say 'mistakes were made'. That sounds evasive. Use _____ language: 'We take full responsibility.'",
        "options": ["accountability", "transparent", "direct"],
        "correctIndex": 0,
        "explanation": "'Accountability' is the professional term for taking clear ownership of what went wrong. It means not deflecting blame or using passive constructions. 'Transparent' and 'direct' describe communication styles, but 'accountability language' specifically refers to the act of taking responsibility. When describing the choice to accept blame clearly, use 'accountability'."
      },
      {
        "sentence": "Never say 'no comment' to a journalist — it always looks like a _____.",
        "options": ["cover-up", "deflection", "denial"],
        "correctIndex": 0,
        "explanation": "In PR, 'no comment' is widely understood to signal that the company has something to hide. The perception it creates is a 'cover-up' — that information is being deliberately withheld. 'Deflection' means avoiding a question without refusing it. 'Denial' is actively saying something is not true. The phrase 'it looks like a cover-up' is the standard way to explain why 'no comment' is always dangerous."
      },
      {
        "sentence": "The product recall itself didn't destroy the brand. The _____ came from how they handled it.",
        "options": ["reputational damage", "brand damage", "public relations damage"],
        "correctIndex": 0,
        "explanation": "'Reputational damage' is the specific professional term for the long-term harm to a brand's credibility and public perception. 'Brand damage' is informal. 'Public relations damage' is not a standard term. In crisis communications, 'reputational damage' is always the correct professional expression."
      },
      {
        "sentence": "The story is spreading fast. Our _____ is to make sure our honest version reaches the public before anyone else's version sticks.",
        "options": ["priority", "goal", "objective"],
        "correctIndex": 0,
        "explanation": "'Our priority right now is...' is the standard crisis PR phrase for signalling what the company is focusing on. In a press conference or crisis statement, 'priority' is the most natural and widely understood word. 'Goal' and 'objective' suggest longer-term planning and are less appropriate for a live crisis situation."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the journalist or stakeholder says. Choose the best response.",
      "items": [
        {
          "customerLine": "Can you confirm there has been a data breach and how many customers are affected?",
          "options": [
            "No comment. Our legal team is handling all communications.",
            "We are aware of reports regarding our data systems and are investigating as a matter of urgency. We will provide a full update within 24 hours. Our priority right now is the safety and security of our customers.",
            "We believe the issue has been contained and the number of affected customers is very small."
          ],
          "correctIndex": 1,
          "explanation": "Option B is a perfect holding statement — it acknowledges the situation, signals urgency, sets a timeline, and reassures customers without committing to facts that aren't confirmed yet. Option A ('no comment') looks like a cover-up and will make the story worse. Option C makes a specific claim before the facts are confirmed, which could be wrong and will damage credibility further."
        },
        {
          "customerLine": "Your statement said the breach was caused by a third-party supplier. Are you saying it's their fault?",
          "options": [
            "Yes — the responsibility lies with the supplier who failed to protect the data.",
            "Let me be clear: we are not interested in assigning blame right now. Our customers' data was in our care. That is our responsibility. We take full accountability for what happened and we are focused entirely on fixing it.",
            "We are still investigating the exact cause. We cannot comment on that aspect at this stage."
          ],
          "correctIndex": 1,
          "explanation": "Option B is excellent — it uses 'let me be clear' to shut down deflection, takes full accountability, and redirects to action. This is what builds trust. Option A shifts blame, which will be seen as corporate defensiveness. Option C is evasive and will invite more questions about the supplier."
        },
        {
          "customerLine": "What is the company doing to make sure this never happens again?",
          "options": [
            "We are conducting a thorough internal review.",
            "Going forward, we are putting in place three specific changes: an independent security audit, new encryption standards for all customer data, and a direct compensation process for every affected customer. I can share the full details now if you would like.",
            "We take this extremely seriously and we are committed to doing better."
          ],
          "correctIndex": 1,
          "explanation": "Option B gives specific, concrete actions — this is what accountability looks like in practice. Three named changes, each meaningful. Option A is vague and tells the audience nothing about what is actually changing. Option C sounds sincere but is just words — the audience has already heard that the company 'takes things seriously'."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "A customer has posted about a data breach. It's spreading fast. What do we do first?" },
        { "speaker": "Riley", "text": "Wait for the full facts before saying anything. Don't rush out a statement you'll regret." },
        { "speaker": "Marcus", "text": "And when we do say something — should we explain that the breach was caused by a supplier?" },
        { "speaker": "Riley", "text": "No. Take accountability first. Customers don't care about your supply chain — they care about their data." },
        { "speaker": "Marcus", "text": "A journalist just called. Should I say 'no comment' until we have the full picture?" },
        { "speaker": "Riley", "text": "Never say 'no comment' — it looks like a cover-up. Issue the holding statement now, while you investigate." }
      ],
      "mistakes": [
        {
          "lineIndex": 1,
          "incorrectText": "Wait for the full facts before saying anything",
          "correction": "Issue a holding statement immediately — don't wait for the full facts",
          "explanation": "This is a critical crisis PR error. Waiting for full facts before saying anything leaves the media silence empty — and the media will fill it with their own version. A holding statement should go out within two hours, even without complete information."
        },
        {
          "lineIndex": 2,
          "incorrectText": "should we explain that the breach was caused by a supplier",
          "correction": "Never deflect blame to a supplier in a public crisis statement",
          "explanation": "Blaming a supplier publicly damages your credibility and does nothing to reassure customers. Customers care about their data being in your hands — not about your internal supply chain. Take accountability first, resolve the supplier issue privately."
        },
        {
          "lineIndex": 0,
          "incorrectText": "What do we do first?",
          "correction": "This line is correct",
          "explanation": "This is a perfectly natural question in a crisis situation. The real mistakes are in lines 2 and 3."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "We need a statement out in the next hour. What should it say?",
          "salespersonStart": "Keep it short. Three things: acknowledge, commit, reassure. 'We are aware of the reports and are investigating urgently. Our priority is...'",
          "suggestedCompletion": "the safety and security of our customers' data. We will provide a full update within 24 hours and are contacting all affected customers directly.' That's it. Don't say more than you know. Don't make promises you can't keep. The holding statement buys you time to get the facts right."
        },
        {
          "customerLine": "The legal team says we shouldn't admit any fault.",
          "salespersonStart": "I understand the legal concern. But from a PR perspective, the brands that take accountability early lose far less long-term trust than those that fight it. Let me be clear about the difference: admitting fault legally is different from...",
          "suggestedCompletion": "taking accountability as a brand. We can say 'we take full responsibility for protecting our customers' data' without admitting specific legal liability. That language shows accountability without creating legal exposure. Get legal and PR in the same room and find the right language together."
        },
        {
          "customerLine": "How long will the media storm last?",
          "salespersonStart": "Typically 48 to 72 hours for the peak coverage. Your job during that window is not to win the story — it's to...",
          "suggestedCompletion": "survive it without saying anything that makes it worse. Stay on message. Every statement, every interview, every social post should say the same three things: we acknowledge it happened, we take responsibility, and here is what we are doing to fix it. After 72 hours, the story moves on — if you haven't made it worse."
        }
      ]
    }
  },
};

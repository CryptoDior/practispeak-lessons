import { Lesson } from '@/types/lesson';

export const robloxEmphaticStructures: Lesson = {
  slug: 'roblox-emphatic-structures',
  title: "Emphatic Structures",
  subtitle: "When you really need to stress a point — cleft sentences let you put one idea in the spotlight.",
  level: 'B1-B2',
  description: "Normal sentences spread meaning evenly. But sometimes one part of your sentence matters more than the rest. Cleft sentences break your message in two: they put the important part at the end, after IT IS or WHAT. This makes the key idea stand out — and it tells the listener exactly where to focus. This is a powerful tool for arguments, discussions, and debates.",
  heroImage: '/images/roblox-emphatic-structures-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Cleft sentences — it-clefts and wh-clefts',
    description: "A cleft sentence splits a simple sentence into two parts to give extra emphasis. There are two main types. IT-CLEFT: 'It is + [focus] + that/who + [rest].' WH-CLEFT (also called a pseudo-cleft): 'What + [clause] + is/was + [focus].' Both types move the most important information to a strong position in the sentence.",
    positivePattern: 'It is/was + [FOCUS] + that/who + [REST] | What + [clause] + is/was + [FOCUS]',
    positiveExample: '"It\'s the lag that ruins the match." / "What I really love is the team strategy."',
    negativePattern: 'Do NOT use cleft sentences for every sentence — they lose impact if overused',
    negativeExample: '"It\'s the button that I pressed." ✗ (too weak — no reason to emphasise pressing a button)',
    positiveLabel: 'CORRECT — the cleft highlights the key information clearly',
    negativeLabel: 'WEAK — only use emphasis when one part of the sentence is genuinely more important',
    arrowStyle: true,
    positiveExamples: [
      { sentence: '"It\'s the communication that makes a great team — not just individual skill."', note: 'IT-CLEFT: highlights COMMUNICATION as the key idea, contrasting it with individual skill' },
      { sentence: '"What I find most frustrating is when people leave mid-match."', note: 'WH-CLEFT: what + clause + is + focus — the frustrating thing is clearly identified' },
      { sentence: '"It was Leo who suggested the new strategy, not the team captain."', note: 'IT-CLEFT with WHO (for people): identifies the specific person responsible' },
      { sentence: '"What we need is better coordination in the final round."', note: 'WH-CLEFT: the specific need is placed at the end for emphasis' },
    ],
    negativeExamples: [
      { sentence: '"It\'s the button that I pressed." ✗ (no contrast or emphasis needed)', note: 'Clefts only work when one element is genuinely more important or surprising than another' },
      { sentence: '"What happened is that I logged in." ✗ (too weak)', note: 'Logging in is not a key piece of information — no reason to use a cleft here' },
    ],
  },

  vocabulary: [
    {
      word: 'EMPHASISE',
      partOfSpeech: 'verb',
      definition: "To make one thing stand out as more important than the rest.",
      example: "The team captain emphasised that coordination mattered more than speed in the final phase of the raid.",
      imageSlug: '/images/roblox-emphatic-structures-emphasise.png',
    },
    {
      word: 'CONTRAST',
      partOfSpeech: 'noun/verb',
      definition: "A clear difference between two things — or to show that difference.",
      example: "The contrast between their first match and their last was huge — they had improved in every area.",
      imageSlug: '/images/roblox-emphatic-structures-contrast.png',
    },
    {
      word: 'HIGHLIGHT',
      partOfSpeech: 'verb',
      definition: "To point to something important — to make people notice one specific thing.",
      example: "Mia highlighted the fact that two players had left early, which explained why the team had struggled.",
      imageSlug: '/images/roblox-emphatic-structures-highlight.png',
    },
    {
      word: 'SPECIFIC',
      partOfSpeech: 'adjective',
      definition: "Clear and exact — about one particular thing, not general.",
      example: "He was specific about which part of the strategy had failed — it was not the whole plan, just the defence.",
      imageSlug: '/images/roblox-emphatic-structures-specific.png',
    },
    {
      word: 'CLARIFY',
      partOfSpeech: 'verb',
      definition: "To make something easier to understand — to remove confusion.",
      example: "She clarified that the ban was for the weekend only, not a permanent removal from the guild.",
      imageSlug: '/images/roblox-emphatic-structures-clarify.png',
    },
    {
      word: 'REINFORCE',
      partOfSpeech: 'verb',
      definition: "To make an idea stronger — to say it again in a different way so it is clearer.",
      example: "The replay reinforced what everyone already felt — the turning point had been that single missed call.",
      imageSlug: '/images/roblox-emphatic-structures-reinforce.png',
    },
    {
      word: 'CRUCIAL',
      partOfSpeech: 'adjective',
      definition: "Very important — something that really matters and cannot be ignored.",
      example: "It was the first thirty seconds that were crucial — the team who controlled that phase won the match.",
      imageSlug: '/images/roblox-emphatic-structures-crucial.png',
    },
    {
      word: 'DISTINCTION',
      partOfSpeech: 'noun',
      definition: "A difference between two things — the point where one ends and the other begins.",
      example: "There is a clear distinction between playing well as an individual and leading a team effectively.",
      imageSlug: '/images/roblox-emphatic-structures-distinction.png',
    },
  ],

  irlVocabulary: [
    {
      word: 'EMPHASISE',
      partOfSpeech: 'verb',
      definition: "To make one thing stand out as more important than the rest.",
      example: "The report emphasised that the main cause of the delay was the supply chain, not the production team.",
      imageSlug: '/images/roblox-emphatic-structures-emphasise-irl.png',
    },
    {
      word: 'CONTRAST',
      partOfSpeech: 'noun/verb',
      definition: "A clear difference between two things — or to show that difference.",
      example: "She contrasted last year's results with this year's to show exactly how much the strategy had improved.",
      imageSlug: '/images/roblox-emphatic-structures-contrast-irl.png',
    },
    {
      word: 'HIGHLIGHT',
      partOfSpeech: 'verb',
      definition: "To point to something important — to make people notice one specific thing.",
      example: "The presentation highlighted three key risks that the team had not yet considered in the project plan.",
      imageSlug: '/images/roblox-emphatic-structures-highlight-irl.png',
    },
    {
      word: 'SPECIFIC',
      partOfSpeech: 'adjective',
      definition: "Clear and exact — about one particular thing, not general.",
      example: "Can you be more specific about which part of the proposal you'd like us to revise?",
      imageSlug: '/images/roblox-emphatic-structures-specific-irl.png',
    },
    {
      word: 'CLARIFY',
      partOfSpeech: 'verb',
      definition: "To make something easier to understand — to remove confusion.",
      example: "Could you clarify what you mean by 'flexible timeline' — are we talking days or weeks?",
      imageSlug: '/images/roblox-emphatic-structures-clarify-irl.png',
    },
    {
      word: 'REINFORCE',
      partOfSpeech: 'verb',
      definition: "To make an idea stronger — to say it again in a different way so it is clearer.",
      example: "The client feedback reinforced what the sales team had been saying for months — the pricing model needed to change.",
      imageSlug: '/images/roblox-emphatic-structures-reinforce-irl.png',
    },
    {
      word: 'CRUCIAL',
      partOfSpeech: 'adjective',
      definition: "Very important — something that really matters and cannot be ignored.",
      example: "It is crucial that all team members review the updated safety protocol before the site visit on Friday.",
      imageSlug: '/images/roblox-emphatic-structures-crucial-irl.png',
    },
    {
      word: 'DISTINCTION',
      partOfSpeech: 'noun',
      definition: "A difference between two things — the point where one ends and the other begins.",
      example: "There is an important distinction between giving feedback on the work and criticising the person who did it.",
      imageSlug: '/images/roblox-emphatic-structures-distinction-irl.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: "SINGLE OUT",
      definition: "To choose one person or thing from a group to give special attention to — positive or negative.",
      example: "The coach singled out Mia's decision-making as the reason the team had turned the match around.",
      inGame: "Be careful when you single out a player for criticism in the team chat — do it privately if possible.",
      inRealLife: "The manager singled out the junior developer's solution as the most elegant approach to the problem.",
      imageSlug: '/images/roblox-emphatic-structures-single-out.png',
    },
    {
      phrase: "ZOOM IN ON",
      definition: "To look at one specific part of a situation very carefully.",
      example: "Let's zoom in on the last five minutes of the replay — that's where things went wrong.",
      inGame: "When reviewing a match, zoom in on one specific moment rather than trying to analyse everything at once.",
      inRealLife: "The auditors zoomed in on the Q3 figures, which were the only period where the numbers did not add up.",
      imageSlug: '/images/roblox-emphatic-structures-zoom-in-on.png',
    },
    {
      phrase: "BOIL DOWN TO",
      definition: "To reduce a complicated situation to its most important or basic point.",
      example: "The whole debate boils down to one question: do we prioritise speed or accuracy in the final phase?",
      inGame: "After a long argument in the team chat, it usually boils down to one real disagreement — find it.",
      inRealLife: "All the stakeholder concerns boil down to one issue — whether the project will be delivered on time.",
      imageSlug: '/images/roblox-emphatic-structures-boil-down-to.png',
    },
    {
      phrase: "STAND OUT",
      definition: "To be clearly better, more important, or more noticeable than everything else.",
      example: "What stood out in her performance was not her speed but her ability to read the situation early.",
      inGame: "In a tournament, what makes a team stand out is not just raw skill — it's how they adapt under pressure.",
      inRealLife: "Her application stood out from the others because it addressed exactly the problem the company was trying to solve.",
      imageSlug: '/images/roblox-emphatic-structures-stand-out.png',
    },
    {
      phrase: "COME DOWN TO",
      definition: "To be decided or explained by one main factor — the same as BOIL DOWN TO but slightly more formal.",
      example: "In the end, the result came down to which team had the better preparation, not the better players.",
      inGame: "Most close matches come down to communication — the teams that talk clearly under pressure tend to win.",
      inRealLife: "The hiring decision came down to cultural fit — both candidates had the technical skills required.",
      imageSlug: '/images/roblox-emphatic-structures-come-down-to.png',
    },
    {
      phrase: "PICK UP ON",
      definition: "To notice something that is not obvious — to detect a small detail that others might miss.",
      example: "Leo picked up on the fact that the other team always rotated left after a certain signal — it was their tell.",
      inGame: "The best players pick up on patterns quickly — after two or three rounds they already know the enemy's habits.",
      inRealLife: "She picked up on a tone shift in the client's response that suggested they were not as happy as their words implied.",
      imageSlug: '/images/roblox-emphatic-structures-pick-up-on.png',
    },
  ],

  warmUp: {
    questions: [
      "What is something about your favourite game that you feel people do not appreciate enough? How would you explain it to someone who has never played?",
      "Think of a time when you needed to make a strong point in an argument or discussion. How did you make sure the most important idea was clear?",
      "In English, what is the difference between 'I love the strategy' and 'What I love is the strategy'? Which one feels stronger to you?",
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: "That review session was rough. Everyone kept missing the main point about what went wrong.",
    },
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: "I know. How do you make one idea really stand out when you're talking? Like, put all the weight on it?",
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: "Cleft sentences. Instead of 'The lag ruined the match,' you say: It was [[crucial:very important — something that really matters]] — 'It's the lag that ruined the match.' The IT IS + THAT structure puts the key idea in the spotlight.",
    },
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: "So the structure pushes what matters to the front?",
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: "Exactly. And there is a second type. Instead of 'I really love the team strategy,' you say: 'What I really love is the team strategy.' The WHAT + IS structure does the same thing — it puts the focus at the end, after IS.",
    },
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: "Can I try? 'The communication — not the skill — made the difference.' How do I [[emphasise:make one thing stand out as more important]] that?",
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: "Try: 'It's the communication that made the difference — not individual skill.' The IT-CLEFT lets you [[contrast:show a clear difference between two things]] the two ideas directly.",
    },
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: "What about people? Like — Leo noticed the pattern first, not the captain.",
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: "With people, use WHO instead of THAT: 'It was Leo who noticed the pattern first, not the captain.' That [[highlight:points to one specific important thing]]s exactly the right person.",
    },
    {
      speaker: 'Mia',
      speakerColor: 'purple',
      speakerAvatar: '/images/mia-icon.png',
      text: "And if I want to explain what the team needs?",
    },
    {
      speaker: 'Leo',
      speakerColor: 'green',
      speakerAvatar: '/images/leo-icon.png',
      text: "'What we need is better coordination in the final round.' WHAT + WE NEED + IS + the thing you need. This is the WH-cleft — it [[clarify:makes things easier to understand]]s exactly what the need is. The whole thing [[boil down to:reduces to its most basic point]]s to one thing: cleft sentences put the most important word in the strongest position.",
    },
  ],

  completeSentenceExercise: {
    instructions: "Rewrite the sentence as a cleft sentence. Choose the best option.",
    items: [
      {
        sentence: "The problem was the server connection, not the players.",
        options: [
          "It was the server connection that caused the problem, not the players.",
          "What was the server connection is the problem.",
          "The server connection, it was the problem.",
        ],
        correctIndex: 0,
        explanation: "IT-CLEFT: 'It was + [focus] + that + [rest].' The focus is THE SERVER CONNECTION, which is placed after 'It was' and before 'that caused the problem.'",
      },
      {
        sentence: "I really appreciate the team effort.",
        options: [
          "It's the team effort that I really appreciate.",
          "What I really appreciate is the team effort.",
          "Both A and B are correct cleft versions.",
        ],
        correctIndex: 2,
        explanation: "Both are correct cleft versions of the same sentence. IT-CLEFT: 'It's the team effort that I really appreciate.' WH-CLEFT: 'What I really appreciate is the team effort.' Both are natural and grammatically correct.",
      },
      {
        sentence: "Kai found the weakness in their defence, not Leo.",
        options: [
          "What Kai found was the weakness in their defence, not Leo.",
          "It was Kai who found the weakness in their defence, not Leo.",
          "It was the weakness that Kai found in their defence.",
        ],
        correctIndex: 1,
        explanation: "When the focus is a person, use WHO (not THAT) in an IT-CLEFT: 'It was Kai WHO found it.' Option A changes the emphasis incorrectly (focuses on what was found, not who found it).",
      },
      {
        sentence: "We need to improve our communication.",
        options: [
          "It's communication that we need to improve.",
          "What we need to improve is our communication.",
          "Both A and B are correct cleft versions.",
        ],
        correctIndex: 2,
        explanation: "Both versions correctly emphasise COMMUNICATION. IT-CLEFT: 'It's communication that we need to improve.' WH-CLEFT: 'What we need to improve is our communication.' Both are natural.",
      },
      {
        sentence: "The turning point was that single missed call.",
        options: [
          "It was that single missed call that was the turning point.",
          "What was the turning point is that single missed call.",
          "What turned the point was that single missed call.",
        ],
        correctIndex: 0,
        explanation: "IT-CLEFT: 'It was + [focus] + that + [rest].' Focus: THAT SINGLE MISSED CALL. 'What was the turning point is...' (B) sounds awkward — WH-clefts work better with action clauses ('What I did was...'), not noun-focused sentences.",
      },
      {
        sentence: "The late arrivals ruined the raid, not the strategy.",
        options: [
          "What the late arrivals did was ruin the raid, not the strategy.",
          "It's the late arrivals that ruined the raid, not the strategy.",
          "What ruined the raid were the late arrivals, not the strategy.",
        ],
        correctIndex: 1,
        explanation: "IT-CLEFT: 'It's + [focus] + that + [rest].' Focus: THE LATE ARRIVALS. This is the most natural form when emphasising a noun as the cause of something, especially with a contrast (not the strategy).",
      },
    ],
  },

  matchingExercise: [
    { word: 'EMPHASISE', definition: 'To make one idea stand out as more important than the rest' },
    { word: 'CONTRAST', definition: 'To show a clear difference between two things' },
    { word: 'HIGHLIGHT', definition: 'To point to one specific thing so people notice it' },
    { word: 'SPECIFIC', definition: 'Clear and exact — about one particular thing, not general' },
    { word: 'CLARIFY', definition: 'To make something easier to understand — to remove confusion' },
    { word: 'REINFORCE', definition: 'To make an idea stronger by saying it again in a different way' },
    { word: 'CRUCIAL', definition: 'Very important — something that really matters' },
    { word: 'DISTINCTION', definition: 'A clear difference between two things' },
  ],

  fillBlankExercise: [
    { before: "It was", answer: 'the lag', after: "that caused the disconnection — not the server settings." },
    { before: "What I find most impressive", answer: 'is', after: "the way she reads the enemy team's movements before they make them." },
    { before: "It was", answer: 'Mia who', after: "identified the pattern first — not any of the senior players." },
    { before: "What the team really needs", answer: 'is', after: "a clear plan for the final phase — not more individual practice." },
    { before: "It's the communication", answer: 'that', after: "makes the difference between a good team and a great one." },
    { before: "What stood out in the replay", answer: 'was', after: "not the individual plays, but the way the whole team moved together." },
    { before: "It's the lack of coordination", answer: 'that', after: "the coach highlighted as the main problem — not the players' skill level." },
    { before: "What we need to", answer: 'clarify', after: "is which player is responsible for covering the left flank in the final round." },
  ],

  multipleChoiceExercise: [
    {
      question: "What is the main purpose of a cleft sentence?",
      options: [
        "To make a sentence longer and more formal.",
        "To put extra emphasis on one specific part of a sentence.",
        "To combine two sentences into one using a relative clause.",
        "To describe an action that happened in the past.",
      ],
      correctIndex: 1,
    },
    {
      question: "Which sentence is an IT-CLEFT with a focus on a person?",
      options: [
        "It was the strategy that failed in the final round.",
        "What failed was the strategy in the final round.",
        "It was Kai who identified the problem first.",
        "It was identified by Kai first.",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the correct structure for a WH-CLEFT?",
      options: [
        "It is + [focus] + that/who + [rest of sentence]",
        "What + [clause] + is/was + [focus]",
        "What + is/was + [focus] + that + [clause]",
        "It + [clause] + is + what + [focus]",
      ],
      correctIndex: 1,
    },
    {
      question: "Why does 'It's the communication that makes the difference' have more impact than 'Communication makes the difference'?",
      options: [
        "Because the IT-CLEFT version is grammatically more complex and sounds more educated.",
        "Because it uses a longer structure which naturally draws more attention.",
        "Because the cleft structure focuses all the weight onto COMMUNICATION as the single key factor.",
        "Because the word 'communication' is now closer to the end of the sentence.",
      ],
      correctIndex: 2,
    },
    {
      question: "What does BOIL DOWN TO mean?",
      options: [
        "To heat something until it becomes smaller.",
        "To reduce a complicated situation to its single most important point.",
        "To make a point firmly and refuse to change it.",
        "To compare two things to show how different they are.",
      ],
      correctIndex: 1,
    },
    {
      question: "When should you NOT use a cleft sentence?",
      options: [
        "When you want to emphasise one key cause or person in an argument.",
        "When one part of your sentence is more important or surprising than the rest.",
        "When all the information in your sentence carries equal weight and none stands out.",
        "When you want to highlight a contrast between two ideas.",
      ],
      correctIndex: 2,
    },
  ],
};

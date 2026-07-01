import { Lesson } from '@/types/lesson';

export const c1LongFormFootballWriting: Lesson = {
  slug: 'c1-long-form-football-writing',
  title: 'Long-Form Football Writing',
  subtitle: 'Unit 3 — Broadcast & Journalism',
  level: 'C1-C2',
  description: 'Football journalism goes far beyond match reports. Features, profiles, and essays tell deeper stories about the game, the people, and what football means. Learn the structure, register, and craft of long-form football writing.',
  heroImage: '/images/long-form-writing.png',

  warmUp: {
    questions: [
      'Have you ever read a piece of football writing that was more like a short story than a report? What made it different?',
      'What is the difference between a match report and a feature article? What does each one try to do?',
      'Who is your favourite football writer? What do they do that other writers don\'t?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Varied sentence length — pace and rhythm in journalism',
    description: 'Great football writing uses short and long sentences strategically. Short sentences create impact and speed: "He shot. It went in. Silence." Long sentences build atmosphere, context, and complexity, weaving together details and emotion into a single sustained thought that carries the reader forward. Mixing the two creates rhythm. The rule: use short sentences for impact moments. Use long sentences for scene-setting, background, and reflection. Never write the same length sentence ten times in a row.',
    positiveExamples: [
      { sentence: 'The night was cold. The crowd was quiet. Then the ball hit the net.', note: 'three short sentences — creates punchy, dramatic impact' },
      { sentence: 'It was the kind of goal that reminded everyone in the stadium why they had come, why they kept coming back, why football — for all its frustrations — still had the power to make grown men cry.', note: 'one long sentence — builds emotional weight through accumulation' },
      { sentence: 'He ran. He fell. He got back up. And in that moment, you understood everything about him.', note: 'short sentences followed by a slightly longer one — the contrast gives the final line its power' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'LEDE',
      partOfSpeech: 'noun',
      definition: 'The opening sentence or paragraph of a piece of writing — the hook that makes the reader want to continue. A great lede establishes tone, story, and curiosity.',
      example: '"The lede placed the reader in the stadium at midnight, twenty years ago, when everything changed."',
      imageSlug: '/images/lede.png',
    },
    {
      word: 'NARRATIVE ARC',
      partOfSpeech: 'noun',
      definition: 'The overall shape of a story — from opening tension through rising action to a climax and resolution. Every long-form piece needs one.',
      example: '"The piece had a clear narrative arc — from the player\'s difficult childhood to the night he lifted the trophy."',
      imageSlug: '/images/narrative-arc.png',
    },
    {
      word: 'ANECDOTE',
      partOfSpeech: 'noun',
      definition: 'A short personal story used to illustrate a larger point — a specific moment that makes the abstract concrete.',
      example: '"He opened with an anecdote about a five-year-old boy watching the 1966 World Cup final — and from that image, the whole article unfolded."',
      imageSlug: '/images/anecdote.png',
    },
    {
      word: 'PROFILE',
      partOfSpeech: 'noun',
      definition: 'A long-form piece focused on a single person — exploring who they are, what drives them, and what they reveal about the game.',
      example: '"The profile of the goalkeeper ran to 4,000 words and never once mentioned a specific save — it was entirely about his childhood, his philosophy, and his fear of failure."',
      imageSlug: '/images/profile.png',
    },
    {
      word: 'SUBTEXT',
      partOfSpeech: 'noun',
      definition: 'The meaning beneath the surface — what is implied or felt but not directly stated. Great football writing always has subtext.',
      example: '"The article was about a transfer — but the subtext was about loyalty, money, and what the modern game has lost."',
      imageSlug: '/images/subtext.png',
    },
    {
      word: 'REGISTER',
      partOfSpeech: 'noun',
      definition: 'The level of formality in writing — from very formal and academic to conversational and personal. Long-form football writing often moves between registers.',
      example: '"His writing shifts register brilliantly — formal when describing tactics, intimate when describing a player\'s childhood bedroom."',
      imageSlug: '/images/register.png',
    },
    {
      word: 'CHARACTERISATION',
      partOfSpeech: 'noun',
      definition: 'The way a writer makes a person feel vivid and real — through specific details, dialogue, and revealing moments.',
      example: '"His characterisation of the manager was brilliant — one detail about his coffee habits told you everything you needed to know."',
      imageSlug: '/images/characterisation.png',
    },
    {
      word: 'DENOUEMENT',
      partOfSpeech: 'noun',
      definition: 'The final resolution of a story — the ending that ties all the threads together and gives the reader a sense of completion.',
      example: '"The denouement returned to the image from the lede — the same stadium, twenty years later, the same man, completely different."',
      imageSlug: '/images/denouement.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'FLESH OUT',
      definition: 'To add more detail and depth to something — to develop a sketch into a full picture.',
      example: '"The second half of the article fleshes out the tactical ideas introduced in the opening paragraph."',
      imageSlug: '/images/flesh-out.png',
    },
    {
      phrase: 'DRAW ON',
      definition: 'To use something as a source or reference — to incorporate existing knowledge, experience, or material.',
      example: '"She draws on three years of interviews to construct a portrait of a deeply conflicted man."',
      imageSlug: '/images/draw-on.png',
    },
    {
      phrase: 'BUILD TOWARDS',
      definition: 'To move gradually towards a moment, conclusion, or climax — everything in the piece serving the final destination.',
      example: '"The whole article builds towards the moment when he finally admits why he left the club — and it\'s worth the wait."',
      imageSlug: '/images/build-towards.png',
    },
    {
      phrase: 'TIE TOGETHER',
      definition: 'To connect different elements into a unified whole — to bring separate threads of a story into a single coherent conclusion.',
      example: '"The final paragraph ties together the childhood anecdote, the career arc, and the broader question of what football means to him."',
      imageSlug: '/images/tie-together.png',
    },
    {
      phrase: 'SET UP',
      definition: 'To establish the context, characters, or tension at the beginning of a piece — to prepare the reader for what follows.',
      example: '"The lede sets up the central tension of the piece immediately — you know within two sentences what this story is really about."',
      imageSlug: '/images/set-up-writing.png',
    },
    {
      phrase: 'ZOOM IN ON',
      definition: 'To move from the general to the specific — to focus tightly on one detail or moment after establishing the broader context.',
      example: '"After setting up the political context, the writer zooms in on one player\'s face during the anthem — and that specific image carries the whole argument."',
      imageSlug: '/images/zoom-in-writing.png',
    },
  ],

  onThePitch: {
    instructions: 'These are the key elements of long-form football writing — learn what makes each one work.',
    items: [
      {
        cue: 'The opening lede — the hook',
        meaning: 'The lede must grab the reader within the first three sentences. The best ledes start in the middle of a scene, establish a question, or present a striking detail that makes the reader need to know more.',
        usage: '"It was two in the morning and the manager was still watching video." — That is a lede. It creates a character, a question (what is he watching?), and an atmosphere. It does not begin with a statistic or a date.',
        imageSlug: 'otp-lede',
      },
      {
        cue: 'The scene-setting paragraph',
        meaning: 'After the lede, long-form pieces often "zoom out" to set the context — where we are, who is involved, and what is at stake. This grounds the reader in the story.',
        usage: '"It was September 2019, and City were at the top of the table for the first time in eight years. The new stadium was full for the first time. And yet the mood in the dressing room, according to three players who spoke to us on the condition of anonymity, was deeply uncertain."',
        imageSlug: 'otp-scene-setting',
      },
      {
        cue: 'The character-defining anecdote',
        meaning: 'A single specific story or moment reveals more about a person than a list of facts. The best profiles find the anecdote that unlocks the whole person.',
        usage: '"In 2011, when the scout told him he hadn\'t been selected, he walked to the car park, sat in his car for forty minutes, and then came back inside and asked to see the footage of everything he had done wrong. That tells you what you need to know about him."',
        imageSlug: 'otp-anecdote',
      },
      {
        cue: 'Shifting register — from formal to intimate',
        meaning: 'Great football writing moves between registers. Tactical analysis uses formal, precise language. Personal moments use intimate, conversational language. The contrast between the two creates texture.',
        usage: '"Their 4-4-2 mid-block was statistically the most effective defensive structure in the division. Off the pitch, the two centre-backs shared a flat and cooked dinner together every Tuesday night." One sentence: formal. Next sentence: intimate. The contrast reveals the human inside the system.',
        imageSlug: 'otp-register-shift',
      },
      {
        cue: 'The interview quote — direct and indirect speech',
        meaning: 'Quotes from players and managers bring journalism to life. Direct quotes give authenticity; indirect speech allows the writer to summarise and shape the narrative.',
        usage: 'Direct: "I didn\'t want to leave," he said. "But sometimes football doesn\'t give you a choice." Indirect: He said he hadn\'t wanted to leave, but that football rarely gave you a choice. Use direct quotes for emotional, defining moments. Use indirect for background information.',
        imageSlug: 'otp-quotes',
      },
      {
        cue: 'The denouement — returning to the beginning',
        meaning: 'The most effective long-form endings return to an image, place, or question from the opening. The reader sees it differently now — and that difference is the point of the whole piece.',
        usage: '"We started with a man watching video at two in the morning. Two years later, sitting in the same office, he has a Premier League winners\' medal in the drawer next to him. He hasn\'t looked at it once. He is already watching video of the next match."',
        imageSlug: 'otp-denouement',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Editor', speakerColor: 'purple', text: 'I\'ve read your first draft. The lede doesn\'t work yet. You\'re starting with a date — that\'s never a good opening.' },
    { speaker: 'Writer', speakerColor: 'green', text: 'I thought the context was important — readers need to know when this happened.' },
    { speaker: 'Editor', speakerColor: 'purple', text: 'Context can come in paragraph two. The lede needs to grab them in the first sentence. What\'s the most striking thing in your story?' },
    { speaker: 'Writer', speakerColor: 'green', text: 'There\'s an anecdote about the manager hiding in a tunnel for twenty minutes before a cup final. Nobody knew where he was.' },
    { speaker: 'Editor', speakerColor: 'purple', text: 'That\'s your lede. Open with that image — I want to be in that tunnel. Then pull back and give me the context.' },
    { speaker: 'Writer', speakerColor: 'green', text: 'And the ending — should I draw on the same tunnel image?' },
    { speaker: 'Editor', speakerColor: 'purple', text: 'Absolutely. Return to it. He\'s in the tunnel again — but now everything has changed, or hasn\'t. The denouement should tie everything together.' },
    { speaker: 'Writer', speakerColor: 'green', text: 'That\'s the subtext — the tunnel is always there, regardless of the trophy.' },
  ],

  matchingExercise: [
    { word: 'Lede', definition: 'The opening sentence or paragraph — the hook that makes the reader want to continue' },
    { word: 'Narrative arc', definition: 'The overall shape of a story from opening tension through to resolution' },
    { word: 'Anecdote', definition: 'A short personal story used to make an abstract point concrete and vivid' },
    { word: 'Profile', definition: 'A long-form piece focused on exploring a single person in depth' },
    { word: 'Subtext', definition: 'The meaning beneath the surface — what is implied but not directly stated' },
    { word: 'Characterisation', definition: 'The way a writer makes a person feel vivid and real through specific detail' },
    { word: 'Denouement', definition: 'The final resolution that ties all the story\'s threads together' },
    { word: 'Register', definition: 'The level of formality in writing — from academic and formal to intimate and conversational' },
  ],

  fillBlankExercise: [
    { before: 'The piece had a clear', answer: 'narrative arc', after: '— from a difficult childhood to lifting the trophy.' },
    { before: 'She opened with an', answer: 'anecdote', after: 'about a five-year-old boy watching the 1966 World Cup final.' },
    { before: 'The article was about a transfer — but the', answer: 'subtext', after: 'was about loyalty and what the modern game has lost.' },
    { before: 'The second half of the article', answer: 'fleshes out', after: 'the tactical ideas introduced at the opening.' },
    { before: 'The whole article', answer: 'builds towards', after: 'the moment he finally admits why he left the club.' },
    { before: 'The final paragraph', answer: 'ties together', after: 'the anecdote, the career arc, and the central question.' },
    { before: 'After setting up the context, the writer', answer: 'zooms in on', after: 'one player\'s face during the national anthem.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What makes a great opening lede?',
      options: ['It grabs the reader immediately — often starting in a scene, with a striking detail, or posing a question', 'It summarises all the key facts: who, what, where, when, and why', 'It begins with the most important statistic to establish credibility'],
      correctIndex: 0,
    },
    {
      question: 'Why do long-form writers use short sentences for impact moments?',
      options: ['Short sentences slow the reader down and create emphasis — they feel heavier and more deliberate', 'Short sentences are easier to understand and avoid confusion for the reader', 'Editors prefer short sentences because they save space in print publications'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "The final paragraph ___ together the opening anecdote and the central question."',
      options: ['ties', 'draws', 'builds'],
      correctIndex: 0,
    },
    {
      question: 'What is "subtext" in a piece of football writing?',
      options: ['The deeper meaning beneath the surface — what the article is really about beyond its stated subject', 'The technical information in the second section of a long piece', 'The quotations from players and managers that support the main argument'],
      correctIndex: 0,
    },
    {
      question: 'Why do effective profiles use anecdotes rather than lists of facts?',
      options: ['A single specific story reveals character more vividly than any number of facts or statistics', 'Anecdotes are easier to research than facts and require less verification', 'Readers prefer stories because they cannot understand statistics'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence about football journalism.',
    items: [
      {
        sentence: 'The best profiles ___ on years of interviews to build a portrait of a complicated person.',
        options: ['draw', 'flesh', 'zoom'],
        correctIndex: 0,
        explanation: '"Draw on" means to use as a source — to incorporate material, research, or experience.',
      },
      {
        sentence: 'The article ___ towards the moment she finally admits the real reason she retired.',
        options: ['builds', 'draws', 'sets'],
        correctIndex: 0,
        explanation: '"Build towards" means to move gradually — every element of the piece pointing to the final destination.',
      },
      {
        sentence: 'After the scene-setting, the writer ___ in on one specific conversation in the tunnel.',
        options: ['zooms', 'fleshes', 'draws'],
        correctIndex: 0,
        explanation: '"Zoom in on" means to move from the general to the specific — to focus tightly on one detail.',
      },
      {
        sentence: 'The opening ___ placed the reader in the stadium at midnight, thirty years ago.',
        options: ['lede', 'anecdote', 'subtext'],
        correctIndex: 0,
        explanation: 'The lede is the opening — the hook that makes the reader want to continue reading.',
      },
      {
        sentence: 'The denouement returned to the image from the lede — the reader sees it completely differently now, and that difference is the ___ of the whole piece.',
        options: ['subtext', 'register', 'narrative arc'],
        correctIndex: 0,
        explanation: 'The subtext is the deeper meaning — what the article is really about beneath its surface subject.',
      },
      {
        sentence: 'One specific detail about his coffee habits was brilliant ___: it told you everything about him.',
        options: ['characterisation', 'denouement', 'lede'],
        correctIndex: 0,
        explanation: 'Characterisation is how a writer makes a person feel real and vivid through specific, revealing details.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'An editor is giving feedback on your long-form draft. Choose the most effective response.',
      items: [
        {
          customerLine: '"Your lede starts with a date. I need you to change it."',
          options: [
            '"You\'re right. Let me open with the anecdote about the manager in the tunnel — that\'s the image that sets up the whole story."',
            '"I think the date is important because readers need to know when this happened before anything else."',
            '"I\'ll change it to start with a quote instead of a date."',
          ],
          correctIndex: 0,
          explanation: 'The best response accepts the feedback and immediately identifies a more effective alternative — the character-defining anecdote.',
        },
        {
          customerLine: '"The ending just stops. It doesn\'t feel resolved."',
          options: [
            '"I\'ll return to the tunnel image from the opening lede — tie everything together and show how he\'s the same person in a completely different situation."',
            '"I\'ll add three more paragraphs explaining what happened next in his career."',
            '"I\'ll add a final statistic about his career to give the piece authority."',
          ],
          correctIndex: 0,
          explanation: 'Returning to the opening image creates a denouement — a satisfying circular structure that resolves the story.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the structural or language mistake in this opening passage.',
      dialogue: [
        { speaker: 'Writer', speakerColor: 'green', text: 'On the 14th of May 2019, at Anfield stadium in Liverpool, England, something remarkable happened.' },
        { speaker: 'Writer', speakerColor: 'green', text: 'Liverpool FC, who had been founded in 1892, were playing Barcelona in the second leg of the Champions League semi-final.' },
        { speaker: 'Writer', speakerColor: 'green', text: 'The first leg had ended 3-0 to Barcelona. Liverpool needed to score four goals without reply to reach the final.' },
        { speaker: 'Writer', speakerColor: 'green', text: 'The atmosphere in the stadium was described by many as the most electric of the modern era.' },
        { speaker: 'Writer', speakerColor: 'green', text: 'By the end of the night, Liverpool had won 4-0 and reached the final.' },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'On the 14th of May 2019, at Anfield stadium in Liverpool, England, something remarkable happened.',
          correction: 'The corner flag was still moving. The ball was already in the net. And 54,000 people had no idea what had just happened.',
          explanation: 'Opening with a date and location is the least engaging lede possible. Great long-form journalism starts in a scene — with a vivid, specific image that creates curiosity and pulls the reader in immediately.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the journalist\'s sentence in a vivid, long-form style.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'The night of the Anfield comeback, in the dressing room before the second half...',
          suggestedCompletion: 'nobody spoke. Not the manager. Not the captain. They sat there, 3-0 down on aggregate, and somehow the silence felt like the most eloquent team talk anyone had ever given.',
        },
        {
          customerLine: '',
          salespersonStart: 'He is the kind of footballer who is easier to feel than to describe. Watch him for five minutes and you understand...',
          suggestedCompletion: 'exactly why some players are statistics and others are stories. He belongs in the second category.',
        },
        {
          customerLine: '',
          salespersonStart: 'Two years later, standing in the same spot where he missed the penalty that cost them the league title...',
          suggestedCompletion: 'he seemed smaller than you remembered, quieter, more at peace. As if time had finally done what the crowd never could: forgiven him.',
        },
      ],
    },
  },
};

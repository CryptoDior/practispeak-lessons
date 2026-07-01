import { Lesson } from '@/types/lesson';

export const c2DevelopingAnAnalyticalVoice: Lesson = {
  slug: 'c2-developing-an-analytical-voice',
  title: 'Developing an Analytical Voice',
  subtitle: 'Unit 1 — The Analyst\'s Toolkit',
  level: 'C1-C2',
  description: 'The best football writers and analysts are instantly recognisable — not because of what they say, but how they say it. Learn what gives analytical writing its voice, and start developing yours.',
  heroImage: '/images/analytical-voice.png',

  warmUp: {
    questions: [
      'Can you think of a football analyst or writer whose voice you would recognise immediately? What makes them distinctive?',
      'Is it possible to have a "voice" in analytical writing — or does the data speak for itself?',
      'When you write or speak in English about football, do you feel like you sound like yourself? What would change that?',
    ],
  },

  grammarFocus: {
    focusTitle: 'Cleft sentences — putting emphasis exactly where you want it',
    description: 'Cleft sentences let you highlight the most important part of a sentence. Instead of "His specific language sets him apart," you write: "It is the specificity of his language that sets him apart." The structure is: It + is/was + [the thing you want to emphasise] + that/who + [rest of sentence]. This is extremely common in analytical writing and spoken commentary. It controls exactly where the reader\'s attention goes.',
    positiveExamples: [
      { sentence: 'It is the specificity of his examples that makes his analysis so persuasive.', note: '"It is... that" emphasises "specificity of his examples" — not just "he uses good examples"' },
      { sentence: 'It was the composure of his delivery that gave the argument its weight — not the argument itself.', note: 'Cleft with contrast — the emphasis reveals the real point' },
      { sentence: 'It is not the data that distinguishes great analysts — it is what they do with it.', note: 'Negative cleft + positive cleft — classic structure for making a nuanced point' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'VOICE',
      partOfSpeech: 'noun',
      definition: 'The distinctive way someone writes or speaks — the personality that comes through in their choices of words, rhythm, and perspective.',
      example: '"His analytical voice is immediately recognisable — direct, specific, and always grounded in evidence before opinion."',
      imageSlug: '/images/voice-writing.png',
    },
    {
      word: 'REGISTER',
      partOfSpeech: 'noun',
      definition: 'The level of formality in language — from very casual to very formal. Good analysts shift register deliberately, not accidentally.',
      example: '"She moves between registers fluently — clinical when discussing data, conversational when making the human point."',
      imageSlug: '/images/register-writing.png',
    },
    {
      word: 'DISTINCTIVE',
      partOfSpeech: 'adjective',
      definition: 'Clearly different from others — immediately recognisable as belonging to one particular person.',
      example: '"His writing style is so distinctive that you know it\'s him within the first sentence, even without seeing the byline."',
      imageSlug: '/images/distinctive.png',
    },
    {
      word: 'AUTHORITY',
      partOfSpeech: 'noun',
      definition: 'The sense that someone knows what they are talking about — the quality that makes a reader trust and follow an analyst.',
      example: '"She writes with real authority — not because she uses big words, but because every claim is backed by something concrete."',
      imageSlug: '/images/authority.png',
    },
    {
      word: 'PERSPECTIVE',
      partOfSpeech: 'noun',
      definition: 'A particular point of view — the angle from which you approach and interpret events.',
      example: '"What makes his analysis interesting is his perspective — he always asks what the data looks like from the losing team\'s point of view."',
      imageSlug: '/images/perspective.png',
    },
    {
      word: 'PRECISION',
      partOfSpeech: 'noun',
      definition: 'Exactness in language — using exactly the right word, not just a close approximation.',
      example: '"Precision is what separates good analysis from great analysis — saying \'the striker received in the channel\' is more precise than \'he was in a good position\'."',
      imageSlug: '/images/precision.png',
    },
    {
      word: 'STANCE',
      partOfSpeech: 'noun',
      definition: 'The position you take on a topic — your overall orientation toward what you are analysing.',
      example: '"Her stance throughout the piece was clear: the data tells a more optimistic story than the results suggest."',
      imageSlug: '/images/stance.png',
    },
    {
      word: 'CADENCE',
      partOfSpeech: 'noun',
      definition: 'The rhythm of your sentences — the flow and pattern of how your words move when read aloud.',
      example: '"His writing has a brilliant cadence — short punchy sentences after long complex ones, so the rhythm never becomes predictable."',
      imageSlug: '/images/cadence.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'COME THROUGH',
      definition: 'To be clearly felt or perceived — when a quality or personality comes through in writing or speech.',
      example: '"His deep knowledge of the game comes through in every line — you trust him immediately because the expertise is genuine."',
      imageSlug: '/images/come-through.png',
    },
    {
      phrase: 'STAND APART FROM',
      definition: 'To be clearly different from others in your field — to occupy a distinctive position.',
      example: '"What makes her stand apart from other analysts is the way she connects data to culture — not just numbers, but what they mean."',
      imageSlug: '/images/stand-apart.png',
    },
    {
      phrase: 'LEAN INTO',
      definition: 'To deliberately embrace a quality or approach — to commit to it more fully rather than softening it.',
      example: '"He leans into the complexity — instead of simplifying, he invites the reader to sit with the ambiguity."',
      imageSlug: '/images/lean-into.png',
    },
    {
      phrase: 'CARVE OUT',
      definition: 'To create a distinctive space or identity for yourself — to define your niche through consistent choices.',
      example: '"She has carved out a niche as the analyst who always starts with the goalkeeper — working forward from the last line of defence."',
      imageSlug: '/images/carve-out.png',
    },
    {
      phrase: 'FIND YOUR VOICE',
      definition: 'To develop a distinctive and authentic way of expressing yourself — often after a period of imitation or uncertainty.',
      example: '"His first three articles read like everyone else\'s — it was only in his fourth piece that he really found his voice."',
      imageSlug: '/images/find-your-voice.png',
    },
    {
      phrase: 'SET APART',
      definition: 'To distinguish something from everything else — the quality that makes one piece of analysis different from the rest.',
      example: '"It is the honesty of his uncertainty that sets his work apart — he tells you when he doesn\'t know, and that makes you trust him when he does."',
      imageSlug: '/images/set-apart.png',
    },
  ],

  onThePitch: {
    instructions: 'The key elements of a strong analytical voice — what to aim for and why each one matters.',
    items: [
      {
        cue: 'Specificity over vagueness',
        meaning: 'Vague language is the enemy of a strong analytical voice. Every claim needs a specific anchor — a number, a name, a moment, a quote. Specificity creates trust.',
        usage: '"Vague: \'City defended well in the second half.\' Specific: \'City\'s defensive block dropped to a mid-low line after the 55th minute — their defensive line averaged 38m from goal, compared to 46m in the first half.\' The second sentence has a voice because it commits to something you can check."',
        imageSlug: 'otp-specificity',
      },
      {
        cue: 'The moment of opinion — earned and placed deliberately',
        meaning: 'In strong analytical writing, opinions are placed after evidence — not before. The structure is: data → analysis → opinion. Not: opinion → defence.',
        usage: '"Weak: \'He was terrible — the stats prove it.\' Strong: \'He completed 43% of his attempted line-breaking passes — well below the league average of 61%. My conclusion is that he was struggling with the opposition\'s press.\'  Opinion is earned. Place it last."',
        imageSlug: 'otp-opinion-placement',
      },
      {
        cue: 'Sentence rhythm — short after long',
        meaning: 'Cadence is controlled by varying sentence length. Long sentences build complexity; short sentences deliver impact. The contrast between the two creates rhythm.',
        usage: '"City\'s pressing structure was intricate — they used a high trigger line, a wide press shape, and a specific set of cues tied to the goalkeeper\'s distribution. But the execution was inconsistent. That inconsistency cost them." The final two sentences are short. They land harder because of what came before.',
        imageSlug: 'otp-sentence-rhythm',
      },
      {
        cue: 'Owning your perspective',
        meaning: 'A strong analytical voice takes a clear position. Hedge when uncertain — but when you have an argument, commit to it. Analysts who qualify every sentence are boring to read.',
        usage: '"My reading of this match is straightforward: City were the better team, their xG advantage was not a fluke, and the manager\'s decision to sit deep after going ahead was the single biggest tactical error of the season. I am open to counterarguments — but that is the case I would make." Commit. Then defend.',
        imageSlug: 'otp-perspective',
      },
      {
        cue: 'The signature move — your analytical habit',
        meaning: 'Every great analyst has a signature move — a recurring approach that defines their perspective. It could be always starting from the goalkeeper, always asking about transitions, always testing the narrative against the xG.',
        usage: '"My signature move is the counterfactual: not \'what happened\' but \'what would have needed to happen differently for the result to change.\' I apply it to every match I analyse. Over time, that consistent lens becomes a voice — readers know what question I\'m going to ask before I ask it."',
        imageSlug: 'otp-signature-move',
      },
      {
        cue: 'Shifting register deliberately',
        meaning: 'The most compelling analytical writing moves between formal (precise, technical) and intimate (direct, personal). The shift in register is itself a rhetorical tool — it signals that something human and important is being said.',
        usage: '"Technical: \'Their xGA over the ten-match run was 8.4, against an expected range of 11.2–13.5 given their defensive structure.\' Intimate: \'In plain English — they got lucky. A lot.\' The shift from technical to plain wakes the reader up. Use it sparingly so it stays powerful."',
        imageSlug: 'otp-register-shift-c2',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Editor', speakerColor: 'purple', text: 'Your analysis is technically correct — but I can\'t hear you in it. It reads like a data dump.' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'I thought the data should speak for itself at this level.' },
    { speaker: 'Editor', speakerColor: 'purple', text: 'Data never speaks for itself — someone always has to interpret it. That\'s where your voice comes in.' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'So how do I make it sound more like me without losing the rigour?' },
    { speaker: 'Editor', speakerColor: 'purple', text: 'Start with what surprised you. What in the data didn\'t match what you expected to see?' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'City\'s defensive line was much deeper in the first half than I\'d predicted — given their normal approach.' },
    { speaker: 'Editor', speakerColor: 'purple', text: 'That\'s your lede. That surprise is your voice. The data explains it — but the curiosity is yours.' },
    { speaker: 'Analyst', speakerColor: 'green', text: 'So the voice comes from what I notice, not just what I measure.' },
  ],

  matchingExercise: [
    { word: 'Voice', definition: 'The distinctive personality that comes through in how someone writes or speaks' },
    { word: 'Register', definition: 'The level of formality in language — shifted deliberately by skilled writers' },
    { word: 'Distinctive', definition: 'Clearly different from others — immediately recognisable as belonging to one person' },
    { word: 'Authority', definition: 'The quality that makes a reader trust and follow an analyst' },
    { word: 'Perspective', definition: 'The particular angle from which someone approaches and interprets events' },
    { word: 'Precision', definition: 'Using exactly the right word — not a vague approximation' },
    { word: 'Stance', definition: 'The overall position an analyst takes on a topic — their orientation toward the subject' },
    { word: 'Cadence', definition: 'The rhythm of sentences — the flow and pattern of language when read aloud' },
  ],

  fillBlankExercise: [
    { before: 'What makes her', answer: 'stand apart from', after: 'other analysts is how she connects data to culture.' },
    { before: 'His deep knowledge of the game', answer: 'comes through', after: 'in every line — you trust him immediately.' },
    { before: 'She has', answer: 'carved out', after: 'a niche as the analyst who always starts from the goalkeeper.' },
    { before: 'He', answer: 'leans into', after: 'the complexity instead of simplifying it for the audience.' },
    { before: 'It was only in his fourth article that he really', answer: 'found his voice', after: 'as an analyst.' },
    { before: 'It is the honesty of his uncertainty that', answer: 'sets', after: 'his work apart from everyone else in the field.' },
    { before: 'It is not the data that distinguishes great analysts — it is the', answer: 'precision', after: 'of what they do with it.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is a "cleft sentence" and what does it do?',
      options: ['A structure that puts emphasis on the most important part of a sentence — "It is X that Y"', 'A sentence that is split across two paragraphs to create suspense', 'A very short sentence used after a long one to create rhythmic impact'],
      correctIndex: 0,
    },
    {
      question: 'Why does specificity create trust in analytical writing?',
      options: ['Specific claims can be checked — which shows the analyst is confident in their evidence and not hiding behind vagueness', 'Specific language is more technical, which signals expertise to the reader', 'Readers prefer specific language because it is easier to understand than general statements'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "It is ___ of his examples that makes his analysis so persuasive."',
      options: ['the specificity', 'the accuracy', 'the number'],
      correctIndex: 0,
    },
    {
      question: 'What is the recommended structure for placing an opinion in analytical writing?',
      options: ['Data → analysis → opinion — the opinion is earned and placed last, after evidence', 'Opinion → evidence — state your conclusion first, then prove it', 'Opinion anywhere — the structure depends on the writer\'s personal style'],
      correctIndex: 0,
    },
    {
      question: 'Why is shifting register a useful rhetorical tool?',
      options: ['Moving from technical to plain language wakes the reader up and signals that something important is being said — the contrast creates emphasis', 'Different registers appeal to different readers, so shifting allows you to reach a wider audience', 'Using multiple registers demonstrates mastery of English at a C2 level'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence about analytical voice.',
    items: [
      {
        sentence: 'It is ___ the specificity of his language that sets his work apart — not just his knowledge of the game.',
        options: ['exactly', 'only', 'merely'],
        correctIndex: 0,
        explanation: '"Exactly" reinforces the cleft structure — emphasising that the precise quality (specificity) is what matters, not just knowledge in general.',
      },
      {
        sentence: 'She has ___ out a distinctive niche as the analyst who always asks what the data looks like from the losing side.',
        options: ['carved', 'found', 'stood'],
        correctIndex: 0,
        explanation: '"Carve out" means to create a distinctive space or identity — to define your analytical niche through consistent choices.',
      },
      {
        sentence: 'Good analytical writing ___ into the complexity rather than simplifying it away for the reader.',
        options: ['leans', 'comes', 'stands'],
        correctIndex: 0,
        explanation: '"Lean into" means to deliberately embrace a quality — to commit to it rather than backing away from it.',
      },
      {
        sentence: 'It is not the data that distinguishes the best analysts — it is what they ___ with it.',
        options: ['do', 'make', 'find'],
        correctIndex: 0,
        explanation: 'This is a classic cleft structure: "It is not X — it is Y." The answer completes the meaning: what great analysts do with data is what sets them apart.',
      },
      {
        sentence: 'The deep expertise ___ through in every line — readers trust him before he\'s even made his argument.',
        options: ['comes', 'stands', 'leans'],
        correctIndex: 0,
        explanation: '"Come through" means to be clearly felt or perceived — when quality or personality is evident in writing.',
      },
      {
        sentence: 'His ___ is immediately recognisable — direct, specific, and always evidence-first.',
        options: ['voice', 'register', 'cadence'],
        correctIndex: 0,
        explanation: 'Voice is the overall distinctive personality — not just one element like register or cadence, but the whole recognisable quality of how someone writes.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are developing your analytical voice. Choose the most effective option.',
      items: [
        {
          customerLine: 'An editor says: "Your piece is accurate — but I can\'t hear you in it."',
          options: [
            '"You\'re right — I\'ve been trying to sound objective by removing my perspective. Let me start with what surprised me in the data and build from there."',
            '"I thought the data should speak for itself at this level — I don\'t think personal voice belongs in analytical writing."',
            '"I\'ll add more technical vocabulary to show my expertise — that should give it more authority."',
          ],
          correctIndex: 0,
          explanation: 'Voice comes from perspective and curiosity — from what you notice and what surprises you. Removing yourself entirely produces data dumps, not analysis.',
        },
        {
          customerLine: 'A colleague says: "Your analysis is great but the sentences all feel the same length."',
          options: [
            '"That\'s a cadence problem — I need to vary the rhythm deliberately. Long sentences to build complexity, then short ones to land the impact."',
            '"Consistent sentence length actually helps the reader — it creates a predictable, easy-to-follow rhythm."',
            '"I\'ll just make some sentences longer and some shorter — that should fix it."',
          ],
          correctIndex: 0,
          explanation: 'Cadence requires deliberate control — the contrast between long and short sentences creates the rhythm. Simply making some sentences different lengths without purpose won\'t produce the right effect.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the mistake in this analyst\'s writing approach.',
      dialogue: [
        { speaker: 'Analyst', speakerColor: 'green', text: 'I think my voice is strong because I use very technical vocabulary throughout.' },
        { speaker: 'Analyst', speakerColor: 'green', text: 'I qualify everything carefully — I never commit to an opinion I can\'t be completely sure about.' },
        { speaker: 'Analyst', speakerColor: 'green', text: 'Every sentence in my piece is roughly the same length — consistent and easy to follow.' },
        { speaker: 'Analyst', speakerColor: 'green', text: 'I always put my opinion at the beginning so readers know where I stand immediately.' },
        { speaker: 'Editor', speakerColor: 'purple', text: 'Some of those habits are worth reconsidering.' },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'Every sentence in my piece is roughly the same length — consistent and easy to follow.',
          correction: 'Consistent sentence length produces flat, monotonous writing. A strong analytical voice varies cadence deliberately — using long sentences to build complexity and short sentences to deliver impact. The contrast creates rhythm and emphasis.',
          explanation: 'Uniform sentence length is one of the most common mistakes in analytical writing. Cadence is a deliberate tool — the variation between long and short sentences controls where the reader\'s attention lands. Predictable rhythm is the enemy of a strong voice.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the analytical sentence with a strong, specific continuation.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'It is not the volume of data that makes this analysis persuasive — it is...',
          suggestedCompletion: 'the precision with which each number is connected to a specific tactical moment. Anyone can quote an xG figure. The question is what it means, and for whom.',
        },
        {
          customerLine: '',
          salespersonStart: 'What sets her work apart from every other analyst writing about this club is...',
          suggestedCompletion: 'that she always asks the question nobody else is asking: not "what went wrong?" but "who was the last person who could have prevented it, and what would they have needed to see differently?"',
        },
        {
          customerLine: '',
          salespersonStart: 'The voice in his best writing comes through most clearly when he...',
          suggestedCompletion: 'shifts register without warning — three paragraphs of precise technical analysis, then one sentence in plain English that says exactly what all of it means. That shift is where you feel the person behind the data.',
        },
      ],
    },
  },
};

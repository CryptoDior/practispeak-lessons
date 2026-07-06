import { Lesson } from '@/types/lesson';

export const academicAndTradeWriting: Lesson = {
  slug: 'academic-and-trade-writing',
  title: 'Academic and Trade Writing',
  subtitle: 'How to write for industry publications, white papers, and professional journals',
  level: 'C1-C2',
  description: 'Writing a blog post and writing for a trade journal are very different things. Industry publications have standards — a clear structure, proper citations, a defined methodology, and language that signals you know what you are talking about. This lesson teaches you the vocabulary and conventions of professional and academic writing so you can produce content that gets taken seriously at the highest level.',
  heroImage: '/images/academic-and-trade-writing-hero.png',

  vocabulary: [
    {
      word: 'ABSTRACT',
      partOfSpeech: 'noun',
      definition: 'A short summary at the start of an article or report that tells the reader what it is about and what it found.',
      example: 'Riley said: Always write your abstract last — even though it goes first. It is a summary of what you found, not a preview of what you plan to say.',
      imageSlug: '/images/academic-and-trade-writing-abstract.png',
    },
    {
      word: 'PEER REVIEW',
      partOfSpeech: 'noun',
      definition: 'The process where other experts in the same field check your work before it is published.',
      example: 'Marcus asked: Does this need to go through peer review before we submit it? Riley said: Yes — the journal requires it. Two independent experts will check the research.',
      imageSlug: '/images/peer-review.png',
    },
    {
      word: 'METHODOLOGY',
      partOfSpeech: 'noun',
      definition: 'The process you used to do your research or gather your data. How you found out what you found out.',
      example: "Riley said: The editor will ask about your methodology. You need to explain exactly how you collected the data — not just what the data shows.",
      imageSlug: '/images/academic-and-trade-writing-methodology.png',
    },
    {
      word: 'CITATION',
      partOfSpeech: 'noun',
      definition: 'A reference to another piece of work — a book, article, or study — that supports what you are saying.',
      example: 'Marcus had written a strong argument but had no citations. Riley said: You need sources. Without them, this is just an opinion.',
      imageSlug: '/images/citation.png',
    },
    {
      word: 'HYPOTHESIS',
      partOfSpeech: 'noun',
      definition: 'A specific idea you are testing. You believe it might be true, but you need evidence to confirm it.',
      example: "Our hypothesis was that customers who received a follow-up email within 24 hours were more likely to convert. The data proved us right.",
      imageSlug: '/images/academic-and-trade-writing-hypothesis.png',
    },
    {
      word: 'EMPIRICAL',
      partOfSpeech: 'adjective',
      definition: 'Based on real data and evidence — not theory or opinion.',
      example: "Riley said: I don't want guesses. I need empirical evidence — real numbers from real campaigns.",
      imageSlug: '/images/empirical.png',
    },
    {
      word: 'WHITE PAPER',
      partOfSpeech: 'noun',
      definition: 'A detailed document that explains a problem and proposes a solution. Often used in B2B marketing to build authority.',
      example: 'Marcus said: We need something more than a blog post. Riley suggested a white paper — 10 pages of research and recommendations that positions us as experts.',
      imageSlug: '/images/white-paper.png',
    },
    {
      word: 'FINDINGS',
      partOfSpeech: 'noun',
      definition: 'The results of a study or piece of research. What you discovered.',
      example: "The findings were clear: campaigns with video content performed 3x better than those without. We built the whole strategy around this.",
      imageSlug: '/images/academic-and-trade-writing-findings.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'THIS PAPER ARGUES THAT...',
      definition: 'The standard phrase for stating the main claim of a piece of professional or academic writing.',
      example: "Riley said: Don't start with a story. Start with your claim. Write: 'This paper argues that personalised email outperforms all other B2B channels at the top of the funnel.'",
      imageSlug: '/images/this-paper-argues-that.png',
    },
    {
      phrase: 'THE DATA SUGGESTS THAT...',
      definition: 'A careful way to present findings — it shows the data points in a direction without claiming it is 100% certain.',
      example: "Riley explained: Don't say 'the data proves'. Say 'the data suggests'. It is more accurate and it is what reviewers expect to see.",
      imageSlug: '/images/academic-and-trade-writing-the-data-suggests-that.png',
    },
    {
      phrase: 'AS CITED IN...',
      definition: 'A phrase used when you reference another piece of work to support your argument.',
      example: "Riley wrote: '...conversion rates improve significantly with personalisation (as cited in Kumar & Shah, 2022).' This shows the claim is backed by research.",
      imageSlug: '/images/as-cited-in.png',
    },
    {
      phrase: 'FURTHER RESEARCH IS NEEDED TO...',
      definition: 'A phrase used at the end of a piece of writing to acknowledge what the study did not cover.',
      example: "Marcus asked why he needed to say this. Riley said: It shows you understand the limits of your own research. Reviewers expect to see it.",
      imageSlug: '/images/further-research-is-needed-to.png',
    },
    {
      phrase: 'IN LINE WITH PREVIOUS STUDIES,...',
      definition: 'A phrase that connects your findings to earlier research — showing your work fits into a larger body of knowledge.',
      example: "'In line with previous studies on buyer behaviour, our data confirms that trust is the primary factor in long-cycle B2B decisions.'",
      imageSlug: '/images/in-line-with-previous-studies.png',
    },
    {
      phrase: 'THE SCOPE OF THIS STUDY IS LIMITED TO...',
      definition: 'A phrase that defines the boundaries of your research — what you covered and what you did not.',
      example: "Riley said: Always state your limitations early. Write: 'The scope of this study is limited to B2B SaaS companies with fewer than 500 employees in Western Europe.'",
      imageSlug: '/images/the-scope-of-this-study-is-limited-to.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, the editor has come back on our article. She says the [[methodology:the process you used to do your research]] section is too vague. What does she mean?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "She wants to know exactly how you collected the data. Not what you found — how you found it. How many people? Over what period? What was the process?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Right — we surveyed 320 marketing managers over six weeks using an online questionnaire. Is that enough?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That's a good start. You also need to explain how you chose those 320 people. [[Empirical:based on real data and evidence, not theory]] research needs to be replicable — someone else should be able to run the same study.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "She also said the [[abstract:a short summary at the start that tells the reader what the article found]] doesn't match the conclusion. How is that possible?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "It happens when you write the abstract first. Always write it last — it is a summary of what you actually found, not what you hoped to find.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And what about the [[hypothesis:a specific idea you are testing]]? She said it needs to be stated more clearly at the beginning.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Write it like this: 'This paper argues that content marketing produces a higher ROI than paid acquisition for B2B companies with long sales cycles.' One sentence. Specific. Testable.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "There were also comments about missing [[citation:a reference to another piece of work that supports your point]]s in the second section.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Every strong claim needs a source. If you say something is true, you need a reference. Without it, a reviewer will question the whole piece.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What about the [[findings:the results of a study — what you discovered]] section? She liked that part.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good — because that is the strongest part. The data is solid. The data suggests very clearly that our [[hypothesis]] was right. We just need the rest of the paper to support it properly.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "How long until this goes to [[peer review:the process where other experts check your work before it is published]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Fix the methodology section and the citations first. Then I'd say two weeks. The [[white paper:a detailed document that explains a problem and proposes a solution]] version can follow after.",
    }
  ],

  matchingExercise: [
    { "word": "abstract", "definition": "a short summary at the start of an article that tells the reader what it found" },
    { "word": "peer review", "definition": "the process where other experts check your work before it is published" },
    { "word": "methodology", "definition": "the process you used to do your research or gather your data" },
    { "word": "citation", "definition": "a reference to another piece of work that supports your argument" },
    { "word": "hypothesis", "definition": "a specific idea you are testing — you believe it may be true" },
    { "word": "empirical", "definition": "based on real data and evidence, not theory or opinion" },
    { "word": "white paper", "definition": "a detailed document that explains a problem and proposes a solution" },
    { "word": "findings", "definition": "the results of a study — what you discovered" }
  ],

  fillBlankExercise: [
    { "before": "Write the ", "after": " last — even though it appears first. It should summarise what you actually found.", "answer": "abstract" },
    { "before": "Every major claim in the article needs a ", "after": ". Without one, reviewers will question it.", "answer": "citation" },
    { "before": "Our ", "after": " was that video content would outperform static images. The data proved us right.", "answer": "hypothesis" },
    { "before": "The editor asked us to clarify our ", "after": " — how did we collect the data and who did we survey?", "answer": "methodology" },
    { "before": "We are not guessing. This is ", "after": " research — real data from 400 companies over 12 months.", "answer": "empirical" },
    { "before": "The journal uses ", "after": " to ensure the research meets the standard before it is published.", "answer": "peer review" }
  ],

  multipleChoiceExercise: [
    {
      "question": "Why does Riley say to write the abstract last?",
      "options": [
        "Because it is the hardest part and needs the most time",
        "Because it should summarise what you actually found, not what you planned to find",
        "Because editors always rewrite the abstract anyway"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Riley say a good hypothesis looks like?",
      "options": [
        "A broad question about the topic you are studying",
        "A one-sentence, specific, and testable claim",
        "A list of the things you hope to prove"
      ],
      "correctIndex": 1
    },
    {
      "question": "What does Riley say about the findings section?",
      "options": [
        "It is the weakest part of the article",
        "It needs more citations before it can be published",
        "It is the strongest part — the data supports the hypothesis clearly"
      ],
      "correctIndex": 2
    },
    {
      "question": "What does 'replicable' mean in the context of empirical research?",
      "options": [
        "The research can be copied and used without citation",
        "The results can be predicted before the study begins",
        "Someone else should be able to run the same study and get similar results"
      ],
      "correctIndex": 2
    }
  ],

  warmUp: {
    "questions": [
      "Have you ever written a report, article, or case study for work? Who was the audience and how did that change the way you wrote it?",
      "What is the difference between a blog post and a white paper in your opinion? Where would you use each one?",
      "When you read a business report or industry article, what makes you trust it? What makes you question it?"
    ]
  },

  completeSentenceExercise: {
    "instructions": "Choose the correct word or phrase to complete each sentence. Only one answer is correct.",
    "items": [
      {
        "sentence": "The editor asked us to include a clear _____ at the start — a one-sentence claim that the whole article would prove.",
        "options": ["hypothesis", "abstract", "citation"],
        "correctIndex": 0,
        "explanation": "A 'hypothesis' is the specific claim you are testing — it goes at the start of the article and guides everything. An 'abstract' is the full summary. A 'citation' is a reference to another source. When the editor wants a one-sentence testable claim, that is a hypothesis."
      },
      {
        "sentence": "The article was strong, but the reviewer said it needed more _____ — it relied too much on opinion.",
        "options": ["empirical evidence", "a hypothesis", "an abstract"],
        "correctIndex": 0,
        "explanation": "'Empirical evidence' means real data — facts from the real world, not theory. When a reviewer says the article relies on opinion, they are asking for data and sources. An 'abstract' is a summary. A 'hypothesis' is a claim to test. Only 'empirical evidence' means real-world proof."
      },
      {
        "sentence": "The data _____ that shorter subject lines produce higher open rates in B2B email campaigns.",
        "options": ["suggests", "proves", "confirms"],
        "correctIndex": 0,
        "explanation": "In professional and academic writing, 'suggests' is preferred over 'proves' or 'confirms' — it is more honest about the limits of data. No single study 'proves' something definitively. 'Suggests' is the correct level of certainty and is what editors and reviewers expect to see."
      },
      {
        "sentence": "The journal sends all articles for _____ before accepting them — two independent experts check the research.",
        "options": ["peer review", "citation", "editing"],
        "correctIndex": 0,
        "explanation": "'Peer review' is the formal process where other experts in the same field check the quality of your work. 'Citation' is referencing a source. 'Editing' is improving language and style. Only 'peer review' describes independent expert validation before publication."
      },
      {
        "sentence": "Every major claim needs a _____. If you cannot find a source for it, you should not include it.",
        "options": ["citation", "methodology", "finding"],
        "correctIndex": 0,
        "explanation": "A 'citation' is a reference to a source — a book, article, or study — that supports your claim. 'Methodology' explains how you did the research. 'Finding' is what you discovered. When you need to back up a statement with a source, you need a citation."
      },
      {
        "sentence": "The _____ section must explain exactly who you surveyed, how many people, and how you chose them.",
        "options": ["methodology", "abstract", "findings"],
        "correctIndex": 0,
        "explanation": "The 'methodology' section describes your research process — who, how many, what method. The 'abstract' is the summary at the start. The 'findings' section reports the results. The process belongs in methodology."
      }
    ]
  },

  groupActivities: {
    "chooseResponse": {
      "instructions": "Read what the reviewer or editor says. Choose the best response.",
      "items": [
        {
          "customerLine": "The claims in section two feel like opinion. I need to see sources.",
          "options": [
            "These are well-known facts in the industry — they don't need citations.",
            "You're right — I'll add citations for each claim. I have the sources ready. I'll resubmit within 24 hours.",
            "I can add one or two citations, but most of this is based on our own experience."
          ],
          "correctIndex": 1,
          "explanation": "Option B takes the feedback professionally and commits to a specific action with a timeline. Option A is dismissive — 'well-known facts' is not an acceptable substitute for citations in professional writing. Option C is a partial fix — if the reviewer asked for sources, all unsupported claims need them."
        },
        {
          "customerLine": "Your methodology section doesn't explain how you chose your sample group.",
          "options": [
            "The sample group was selected randomly, which should be obvious from the context.",
            "Good point — I'll add a paragraph explaining our selection criteria. We used a stratified sample of B2B marketing managers from companies with 50–500 employees, across five industries.",
            "The sample size is large enough that the selection method doesn't affect the results."
          ],
          "correctIndex": 1,
          "explanation": "Option B directly addresses the feedback and explains the selection criteria clearly — this is exactly what a reviewer needs. Option A is defensive and makes an assumption the reviewer does not share. Option C misunderstands what is being asked — sample size and selection method are separate issues."
        },
        {
          "customerLine": "The abstract doesn't match your conclusion. They seem to be about different things.",
          "options": [
            "I wrote the abstract first, before I had the final data. I'll rewrite it to reflect what the article actually concludes.",
            "The abstract is a general overview — it doesn't need to match the conclusion exactly.",
            "I can add a note in the abstract explaining that conclusions may vary."
          ],
          "correctIndex": 0,
          "explanation": "Option A identifies the root cause — writing the abstract before the final data — and commits to fixing it properly. This is the right process: always write the abstract last. Option B misunderstands what an abstract is for. Option C is not a solution — the abstract must accurately represent the article's conclusions."
        }
      ]
    },
    "spotTheMistake": {
      "instructions": "Read the conversation. Three lines have a mistake. Can you find them?",
      "dialogue": [
        { "speaker": "Marcus", "text": "I've finished the first draft. The data suggests that our hypothesis was correct." },
        { "speaker": "Riley", "text": "Good. Did you write the abstract first so the editor can read it as an overview?" },
        { "speaker": "Marcus", "text": "Yes — I wrote it first. It was easy because I had a clear plan from the start." },
        { "speaker": "Riley", "text": "Actually, you should write it last. The abstract summarises what you found — not what you planned to find." },
        { "speaker": "Marcus", "text": "Understood. And I added citations for all the major claims, but I didn't cite the methodology section." },
        { "speaker": "Riley", "text": "The methodology doesn't need citations — it explains your own process. But make sure the findings section is in line with previous studies on the same topic." }
      ],
      "mistakes": [
        {
          "lineIndex": 1,
          "incorrectText": "write the abstract first so the editor can read it as an overview",
          "correction": "The abstract should be written last, not first",
          "explanation": "This is a content error, not a grammar error. Riley's advice here is wrong — she should be telling Marcus to write the abstract last. The abstract summarises what the article found, so it can only be written accurately after the research and conclusions are complete."
        },
        {
          "lineIndex": 2,
          "incorrectText": "I wrote it first",
          "correction": "The abstract should be written last",
          "explanation": "This confirms the mistake — Marcus wrote the abstract first, which is why it does not match the conclusion. Writing the abstract before the final data is a common error in academic and trade writing. Always write the abstract last."
        },
        {
          "lineIndex": 4,
          "incorrectText": "I didn't cite the methodology section",
          "correction": "The methodology section does not need citations — this is not an error",
          "explanation": "Actually, the real error is earlier: writing the abstract first. The methodology section describes your own process, so it generally does not require citations — Riley correctly identifies this in the next line. The key error in this conversation is the abstract being written before the findings."
        }
      ]
    },
    "finishTheLine": {
      "instructions": "The speaker starts a sentence. Work with your partner to finish it naturally.",
      "items": [
        {
          "customerLine": "I've written the article but I'm not sure how to start it.",
          "salespersonStart": "Start with your main claim. Write: 'This paper argues that...' and then state...",
          "suggestedCompletion": "your hypothesis in one specific, testable sentence. Don't build up to it slowly — state it directly at the start so the reader knows immediately what the article is about and what it intends to prove."
        },
        {
          "customerLine": "The reviewer said my findings are not backed up by enough evidence.",
          "salespersonStart": "You need to add citations. For every strong claim, you need a source. Try writing: 'In line with previous studies,...' and then...",
          "suggestedCompletion": "reference two or three relevant pieces of research. This shows your findings connect to a wider body of evidence — not just your own data."
        },
        {
          "customerLine": "How is a white paper different from a journal article?",
          "salespersonStart": "A white paper is less formal — it doesn't go through peer review and you don't need citations for everything. But it still needs...",
          "suggestedCompletion": "a clear methodology, real data, and a strong conclusion. The goal is the same — to be taken seriously as an expert. The difference is the audience. A white paper is written for business decision-makers, not academics."
        }
      ]
    }
  },
};

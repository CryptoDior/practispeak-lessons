import { Lesson } from '@/types/lesson';

export const c2TheProfessionalInterview: Lesson = {
  slug: 'c2-the-professional-interview',
  title: 'The Professional Interview',
  subtitle: 'Unit 2 — Career English',
  level: 'C1-C2',
  description: 'Getting a job in football — as an analyst, coach, scout, or media professional — requires performing at your best in English under pressure. Learn how to structure answers, project credibility, and handle tough questions in a professional football interview.',
  heroImage: '/images/professional-interview.png',

  warmUp: {
    questions: [
      'Have you ever had a job interview in English? What was the hardest part?',
      'What qualities do you think a club looks for when hiring an analyst, scout, or coach? How would you show those qualities in an interview?',
      'What is the difference between being good at football analysis and being good at communicating it to a hiring panel?',
    ],
  },

  grammarFocus: {
    focusTitle: 'The STAR method — Situation, Task, Action, Result',
    description: 'The most effective answer structure for competency-based interview questions is STAR: Situation (set the scene briefly), Task (what you needed to do), Action (what you specifically did — use "I", not "we"), Result (what happened and what you learned). Most interview questions at this level begin with "Tell me about a time when..." or "Give me an example of..." STAR gives your answer a clear shape. The most common mistake is spending too long on Situation and not enough on Action — the panel wants to hear what you did, not the background story.',
    positiveExamples: [
      { sentence: 'Situation: we had a three-game losing run. Task: I needed to identify the tactical pattern causing it. Action: I ran a transition analysis across all three matches and identified a specific pressing trigger we were failing. Result: the coaching staff adjusted the block shape and we kept a clean sheet in the next match.', note: 'STAR structure — clear, specific, action-focused' },
      { sentence: 'The result was not only a clean sheet — it changed how the coaching staff thought about using data in preparation.', note: 'Strong result: both immediate outcome and broader impact' },
    ],
    negativeExamples: [],
  },

  vocabulary: [
    {
      word: 'COMPETENCY',
      partOfSpeech: 'noun',
      definition: 'A specific skill or quality that a job requires — interviews test whether you have the competencies the role demands.',
      example: '"The panel will assess your competency in data communication — not just whether you understand the analysis, but whether you can explain it clearly to a coaching staff."',
      imageSlug: '/images/competency.png',
    },
    {
      word: 'PORTFOLIO',
      partOfSpeech: 'noun',
      definition: 'A collection of your previous work that demonstrates your skills and experience.',
      example: '"Bring a portfolio to the interview — specific examples of analysis you have produced, with context and outcome. \'I did X and here is the result\' is more persuasive than \'I am good at X.\'  "',
      imageSlug: '/images/portfolio-interview.png',
    },
    {
      word: 'TRANSFERABLE',
      partOfSpeech: 'adjective',
      definition: 'Skills or experience that apply to a new role even if acquired in a different context.',
      example: '"My experience in basketball analytics is fully transferable — the underlying statistical principles are the same, and the communication challenges are identical."',
      imageSlug: '/images/transferable.png',
    },
    {
      word: 'ARTICULATE',
      partOfSpeech: 'verb',
      definition: 'To express something clearly and effectively in words — a key interview skill.',
      example: '"The ability to articulate complex analysis in plain English is what separates the best analysts — the panel will test this directly."',
      imageSlug: '/images/c2-the-professional-interview-articulate.png',
    },
    {
      word: 'COMPOSURE',
      partOfSpeech: 'noun',
      definition: 'Calm and controlled behaviour under pressure — essential in a high-stakes interview.',
      example: '"Her composure under difficult questioning impressed the panel — she paused before answering, gave a structured response, and never seemed rattled."',
      imageSlug: '/images/c2-the-professional-interview-composure.png',
    },
    {
      word: 'DIFFERENTIATOR',
      partOfSpeech: 'noun',
      definition: 'What makes you specifically different from other candidates — the quality or experience that is uniquely yours.',
      example: '"My differentiator is the combination of playing experience and analytical training — I understand what coaches need from data because I have been on the other side of that relationship."',
      imageSlug: '/images/c2-the-professional-interview-differentiator.png',
    },
    {
      word: 'PANEL',
      partOfSpeech: 'noun',
      definition: 'A group of interviewers — common in football clubs where you might face the Head of Performance, Sporting Director, and Head Coach simultaneously.',
      example: '"Address all three members of the panel, not just the most senior one — the hiring decision is often made collaboratively."',
      imageSlug: '/images/panel-interview.png',
    },
    {
      word: 'POSITIONING',
      partOfSpeech: 'noun',
      definition: 'How you present yourself — the narrative you construct about who you are and why you are the right fit for this specific role.',
      example: '"Your positioning matters: don\'t just list your qualifications — articulate why this specific club, this specific role, at this specific time, is the right fit."',
      imageSlug: '/images/c2-the-professional-interview-positioning.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'TALK THROUGH',
      definition: 'To explain something step by step — guiding the panel through your thinking or your work.',
      example: '"Let me talk you through the analysis I did on our pressing efficiency — I\'ll explain the method, the finding, and the action we took as a result."',
      imageSlug: '/images/talk-through-interview.png',
    },
    {
      phrase: 'DRAW ON',
      definition: 'To use a source of knowledge or experience — to incorporate something from your background into your answer.',
      example: '"I can draw on my three years in youth development — the communication challenges at that level taught me how to make complex ideas accessible."',
      imageSlug: '/images/draw-on-interview.png',
    },
    {
      phrase: 'PLAY UP',
      definition: 'To emphasise a quality or experience — to give it more prominence in how you present yourself.',
      example: '"In this interview, I should play up my experience with opposition analysis — that\'s the competency they specifically mentioned in the job description."',
      imageSlug: '/images/play-up.png',
    },
    {
      phrase: 'FIELD A QUESTION',
      definition: 'To receive and respond to a difficult or unexpected question — to handle it effectively.',
      example: '"She fielded the question about her lack of top-flight experience well — she acknowledged it directly and then pivoted to what her different background brought."',
      imageSlug: '/images/field-question.png',
    },
    {
      phrase: 'FOLLOW UP ON',
      definition: 'To ask or say something that develops a previous point — panels often follow up on answers to test depth.',
      example: '"When the panel follows up on your answer, take it as a good sign — they\'re interested and want to understand more."',
      imageSlug: '/images/c2-the-professional-interview-follow-up-on.png',
    },
    {
      phrase: 'PRESENT YOURSELF',
      definition: 'To show who you are in a professional context — the overall impression you create in an interview.',
      example: '"How you present yourself in the first ninety seconds sets the tone — composure, clarity, and genuine enthusiasm all come across immediately."',
      imageSlug: '/images/present-yourself.png',
    },
  ],

  onThePitch: {
    instructions: 'Key techniques for performing at your best in a professional football industry interview.',
    items: [
      {
        cue: 'Researching the club deeply before the interview',
        meaning: 'Panels expect you to know the club well — their playing style, their data infrastructure, their recent performance challenges, and their stated philosophy. Generic preparation is immediately obvious.',
        usage: '"Before the interview: watch five recent matches and note one specific tactical pattern you would want to analyse further. Research their data setup — what software do they use? Who leads the analysis department? Find the Head Coach\'s public statements on data and playing style. When you reference specific details from their recent matches, the panel knows immediately that you are serious."',
        imageSlug: 'otp-research',
      },
      {
        cue: 'Using STAR for competency questions',
        meaning: 'Most interview questions at this level are competency-based. STAR gives every answer a clear structure — and stops you rambling.',
        usage: '"Question: \'Tell me about a time you identified a tactical problem through data analysis.\' STAR answer: \'We had conceded three set-piece goals in four matches. I was tasked with identifying the defensive pattern causing it. I ran a positional analysis of all four goals and found we were consistently losing second-ball situations after initial defensive clearances. I presented this to the coaching staff with three recommended adjustments. In the following four matches, we conceded no set-piece goals.\' Specific. Action-focused. Clear result."',
        imageSlug: 'otp-star-method',
      },
      {
        cue: 'Articulating your differentiator',
        meaning: 'Every interview needs a clear answer to: "why you, rather than someone with equivalent qualifications?" Your differentiator is the quality or experience that is uniquely yours.',
        usage: '"My differentiator is my playing background. I understand data from the other side of the conversation — I know what a midfielder needs to hear in a five-minute team talk, not what an analyst can present in a forty-slide deck. That translation is where I add value that a pure data scientist, however skilled, typically cannot."',
        imageSlug: 'otp-differentiator',
      },
      {
        cue: 'Fielding the difficult question',
        meaning: 'Every interview includes at least one difficult question — a gap in your CV, a failure, or a challenge you cannot avoid. How you field it reveals your composure and self-awareness.',
        usage: '"The question will come: \'You\'ve never worked at first-team level.\' Field it directly: \'That\'s true — and I want to address it honestly. What I bring instead is three years of building an analysis department from nothing, which gave me a broader understanding of the infrastructure challenges than many analysts who entered at a higher level have had to develop.\' Acknowledge. Reframe. Move forward."',
        imageSlug: 'otp-difficult-question',
      },
      {
        cue: 'Talking through your work — bringing evidence',
        meaning: 'The most credible candidates bring specific examples of their work and talk the panel through them. This turns the interview from assertion into evidence.',
        usage: '"I\'ve brought one piece of analysis from last season — it\'s a pressing efficiency report I produced for a Championship club. Let me talk you through the methodology, the key finding, and the action that was taken as a result. I think it illustrates how I think about translating data into something a coaching staff can actually use."',
        imageSlug: 'otp-talk-through-work',
      },
      {
        cue: 'The closing — leaving a strong final impression',
        meaning: 'The last two minutes of an interview are as important as the first two. End with a clear, confident statement of what you bring and why you want this specific role.',
        usage: '"Close with purpose: \'I want to leave you with one clear thought: I am applying for this role because I believe the gap between data and coaching decision-making is where I can make the greatest contribution, and I believe this club\'s setup gives me the best conditions to do that. I would welcome the opportunity to demonstrate that.\' Specific. Confident. Forward-looking."',
        imageSlug: 'otp-closing',
      },
    ],
  },

  videos: [],

  dialogue: [
    { speaker: 'Interviewer', speakerColor: 'purple', text: 'Tell me about a time you had to communicate complex data to a coaching staff who were sceptical about analytics.' },
    { speaker: 'Candidate', speakerColor: 'green', text: 'Let me talk you through a specific example. We were preparing for a side that had conceded very few shots from open play, but had a high xGA from set pieces.' },
    { speaker: 'Candidate', speakerColor: 'green', text: 'The Head Coach was convinced they were defensively strong — the stats looked that way on the surface. My task was to show him the distinction without losing him.' },
    { speaker: 'Candidate', speakerColor: 'green', text: 'I produced a two-page summary — not a full report. Just the three key numbers and what they meant in plain English.' },
    { speaker: 'Interviewer', speakerColor: 'purple', text: 'What was the result?' },
    { speaker: 'Candidate', speakerColor: 'green', text: 'We scored from a set piece in the 34th minute — a routine we\'d specifically designed based on that analysis. He asked for the two-page format on every opponent after that.' },
    { speaker: 'Interviewer', speakerColor: 'purple', text: 'Good. You\'ve never worked at Premier League level — how do you address that gap?' },
    { speaker: 'Candidate', speakerColor: 'green', text: 'I\'d address it directly — I haven\'t. What I can draw on is building an analysis function from scratch, which has given me a broader understanding of the infrastructure challenges than many who entered at a higher level.' },
  ],

  matchingExercise: [
    { word: 'Competency', definition: 'A specific skill or quality that a role requires — what interviews assess' },
    { word: 'Portfolio', definition: 'A collection of previous work that demonstrates skills and experience with evidence' },
    { word: 'Transferable', definition: 'Skills that apply to a new role even if acquired in a different context' },
    { word: 'Articulate', definition: 'To express something clearly and effectively in words' },
    { word: 'Composure', definition: 'Calm and controlled behaviour under pressure' },
    { word: 'Differentiator', definition: 'What makes you specifically different from other equally qualified candidates' },
    { word: 'Panel', definition: 'A group of interviewers — common in professional football hiring' },
    { word: 'Positioning', definition: 'How you present yourself — the narrative about who you are and why you fit this specific role' },
  ],

  fillBlankExercise: [
    { before: 'Let me', answer: 'talk you through', after: 'the analysis I produced — the method, the finding, and the action that followed.' },
    { before: 'I can', answer: 'draw on', after: 'three years in youth development — those communication challenges were invaluable.' },
    { before: 'In this interview I should', answer: 'play up', after: 'my opposition analysis experience — it\'s what they specifically mentioned in the spec.' },
    { before: 'She', answer: 'fielded', after: 'the question about lack of top-flight experience well — direct acknowledgement, then a reframe.' },
    { before: 'When the panel', answer: 'follows up on', after: 'your answer, take it as a positive sign — they want to understand more.' },
    { before: 'My', answer: 'differentiator', after: 'is my playing background — I understand data from the other side of that conversation.' },
    { before: 'The answer followed the', answer: 'STAR', after: 'structure — Situation, Task, Action, Result — and was compelling because it was specific.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What is the most common mistake when using the STAR method?',
      options: ['Spending too long on Situation and not enough on Action — the panel wants to hear what you specifically did', 'Including too many results — panels prefer answers focused on process, not outcome', 'Being too specific — panels prefer broader examples that demonstrate range of experience'],
      correctIndex: 0,
    },
    {
      question: 'How should you handle the question about a clear gap in your CV?',
      options: ['Acknowledge it directly, reframe what your different experience brings, and move forward — composure and self-awareness are what the panel is testing', 'Avoid discussing it and focus only on your strengths — don\'t draw attention to weaknesses', 'Explain in detail why the gap exists and apologise for the missing experience'],
      correctIndex: 0,
    },
    {
      question: 'Fill in the gap: "Let me ___ you through the analysis — the method, the finding, and the action that followed."',
      options: ['talk', 'walk', 'guide'],
      correctIndex: 0,
    },
    {
      question: 'Why should you bring specific examples of your previous work to an interview?',
      options: ['It turns the interview from assertion (\'I am good at X\') into evidence (\'here is X I did and here is the result\') — far more credible', 'It shows you are organised and prepared, which demonstrates good work habits', 'It gives you something to refer to when you can\'t remember specific details during the interview'],
      correctIndex: 0,
    },
    {
      question: 'What should the last two minutes of a professional football interview achieve?',
      options: ['Leave a strong final impression with a specific, confident statement of what you bring and why you want this role', 'Ask at least two questions to show genuine interest in the club and the role', 'Summarise all the main points you have made to ensure the panel remembers them'],
      correctIndex: 0,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each interview preparation sentence.',
    items: [
      {
        sentence: 'My ___ is my playing background — I understand data from the other side of the coaching conversation.',
        options: ['differentiator', 'competency', 'positioning'],
        correctIndex: 0,
        explanation: 'The differentiator is what makes you specifically different from other candidates — the quality or experience that is uniquely yours.',
      },
      {
        sentence: 'She ___ the difficult question about her lack of Premier League experience with real composure and clarity.',
        options: ['fielded', 'played', 'drew'],
        correctIndex: 0,
        explanation: '"Field a question" means to receive and respond to a difficult question effectively — handling it well rather than being thrown by it.',
      },
      {
        sentence: 'The ability to ___ complex analysis in plain English is what separates the best analysts from the rest.',
        options: ['articulate', 'position', 'transfer'],
        correctIndex: 0,
        explanation: '"Articulate" means to express something clearly and effectively — a critical skill when communicating data to coaching staff.',
      },
      {
        sentence: 'I can ___ on my experience building an analysis department from scratch — that infrastructure knowledge is valuable.',
        options: ['draw', 'play', 'talk'],
        correctIndex: 0,
        explanation: '"Draw on" means to use a source of knowledge or experience — to incorporate something from your background into your answer.',
      },
      {
        sentence: 'In this specific interview, I should ___ up my opposition analysis work — it\'s what the job description emphasises.',
        options: ['play', 'talk', 'draw'],
        correctIndex: 0,
        explanation: '"Play up" means to emphasise a quality or experience — to give it more prominence in how you present yourself.',
      },
      {
        sentence: 'Her ___ under difficult questioning impressed the panel — she paused, structured her answer, and never seemed rattled.',
        options: ['composure', 'portfolio', 'positioning'],
        correctIndex: 0,
        explanation: 'Composure is calm, controlled behaviour under pressure — essential in a high-stakes professional interview.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'You are in a professional football industry interview. Choose the most effective response.',
      items: [
        {
          customerLine: '"Tell me about a time you had to change a coaching staff\'s mind using data."',
          options: [
            '"I can give you a specific example. We had three consecutive defeats from set pieces conceded. I was tasked with identifying the pattern. I ran a positional analysis and found we were consistently losing second-ball situations. I presented the finding in a two-page summary. The coaching staff adjusted the block shape and we conceded no set-piece goals in the following four matches."',
            '"I\'m very good at communicating data to coaching staff — I\'ve done it many times and always found a way to get the message across effectively."',
            '"That\'s a challenging situation — coaching staff are often resistant to data, but I believe in being persistent and eventually they come around."',
          ],
          correctIndex: 0,
          explanation: 'The STAR structure makes this answer specific, evidence-based, and action-focused. The other answers are generic assertions without evidence.',
        },
        {
          customerLine: '"You\'ve never worked in a top European club environment. Why should we hire you over someone who has?"',
          options: [
            '"That\'s a fair challenge, and I want to address it directly. What I can offer instead is three years building an analysis function from the ground up — that breadth gave me an understanding of infrastructure, people, and data integration that many analysts who entered at a higher level haven\'t had to develop. My differentiator is not the level — it\'s the range."',
            '"I understand that concern — I\'m hoping you\'ll give me a chance to prove myself despite that gap in my experience."',
            '"I believe my skills and qualifications more than make up for the lack of top-level experience."',
          ],
          correctIndex: 0,
          explanation: 'The best response acknowledges the gap directly, reframes what the different experience actually provides, and names the differentiator clearly — all without defensiveness.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Find the interview technique mistake in this candidate\'s answer.',
      dialogue: [
        { speaker: 'Interviewer', speakerColor: 'purple', text: 'Tell me about a time when you identified a tactical problem through data.' },
        { speaker: 'Candidate', speakerColor: 'green', text: 'Sure. So basically we were at a club that had been having a difficult season and there were lots of issues going on.' },
        { speaker: 'Candidate', speakerColor: 'green', text: 'The situation was that the team hadn\'t been performing well and the coaching staff were worried.' },
        { speaker: 'Candidate', speakerColor: 'green', text: 'We — the whole analysis team — worked together on looking at the data and produced a report.' },
        { speaker: 'Candidate', speakerColor: 'green', text: 'We presented it to the coaching staff and generally things improved after that.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Sure. So basically we were at a club that had been having a difficult season and there were lots of issues going on.',
          correction: 'We were three matches into a losing run and had conceded five goals in each of those matches from transition situations — well above our seasonal average. I was tasked specifically with identifying whether there was a consistent defensive pattern causing it.',
          explanation: 'Two major problems: First, the opening is vague ("difficult season", "lots of issues") — interviewers need specific context. Second, the Situation should be brief — the candidate is spending too long on background and not enough on what they personally did. The STAR method requires a specific Situation, then fast-tracking to the Task and Action. Also note: line 3 uses "we" throughout — never "I". Panels want to know what you specifically did, not what the team did collectively.',
        },
      ],
    },
    finishTheLine: {
      instructions: 'Complete the interview answer using the STAR method.',
      items: [
        {
          customerLine: '',
          salespersonStart: 'Let me give you a specific example of using data to change a coaching decision. The situation was that we were conceding goals from transitions in the first ten minutes of each half. My task was to identify the pattern. The action I took was...',
          suggestedCompletion: 'to run a frame-by-frame analysis of the six conceded goals and isolate the specific defensive trigger that preceded each one. I found that in five of the six cases, we had pressed too high and been caught on the transition by a specific pass behind our defensive line. I presented this to the Head Coach with three clips and one recommended adjustment. The result: we made the positional change for the next match, conceded nothing from transition, and kept a clean sheet.',
        },
        {
          customerLine: '',
          salespersonStart: 'My differentiator for this role is not just my technical skills — it is the combination of...',
          suggestedCompletion: 'analytical training and playing experience. I have sat in both rooms: the analysis room where the data is produced, and the dressing room where it has to land in thirty seconds or less. That translation — from what the data says to what the midfielder needs to hear — is where I add value that is genuinely difficult to replicate.',
        },
      ],
    },
  },
};

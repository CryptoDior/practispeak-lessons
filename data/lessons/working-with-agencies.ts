import { Lesson } from '@/types/lesson';

export const workingWithAgencies: Lesson = {
  slug: 'working-with-agencies',
  title: 'Working with Agencies',
  subtitle: 'How to brief, manage, and get the best results from external creative and marketing agencies',
  level: 'B1-B2',
  description: "Most marketing teams work with external agencies — creative agencies, media agencies, PR agencies, digital agencies, and more. Knowing how to write a great brief, manage feedback professionally, and agree on scope and timelines is essential for getting good work done. This lesson teaches you the vocabulary and phrases used when working with agency partners.",
  heroImage: '/images/working-with-agencies-hero.png',

  vocabulary: [
    {
      word: 'BRIEF',
      partOfSpeech: 'noun',
      definition: 'A document that explains what you need an agency to do. A good brief includes the objective, the target audience, the key message, the budget, the timeline, and any important constraints. The brief is the starting point for all agency work — a weak brief leads to weak creative.',
      example: "Marcus reviewed the document: This brief is too vague — it says we want something creative and engaging but it does not define the audience, the message, or the success metric. Riley replied: I will rewrite it. A clear brief saves everyone time. Without one, the agency guesses what we want and we end up with three rounds of revisions instead of one.",
      imageSlug: '/images/brief.png',
    },
    {
      word: 'PROPOSAL',
      partOfSpeech: 'noun',
      definition: "The agency's response to your brief — it outlines their recommended approach, their creative ideas, their team, their timeline, and their fees. A proposal is how an agency pitches for your business. You review the proposal before deciding whether to hire them.",
      example: "Riley presented the agency proposals: We received three proposals in response to our brief. The first agency has the strongest creative concept. The second has the best track record in our sector. The third is the most affordable. Marcus asked: Which proposal gives us the best chance of hitting our objective? That is the one we should go with.",
      imageSlug: '/images/proposal.png',
    },
    {
      word: 'SCOPE OF WORK',
      partOfSpeech: 'noun',
      definition: 'A detailed list of everything the agency will deliver — specific outputs, number of revisions, channels, formats, and exclusions. The scope of work is agreed before work begins and prevents misunderstandings about what is and is not included.',
      example: "Marcus warned: Make sure the scope of work is completely clear before we sign the contract. Riley asked: What should it include? Marcus replied: Every deliverable — three social media videos, ten static images, two email templates. The number of revision rounds for each. What is excluded. Timelines for each phase. If it is not in the scope of work, do not assume it is included — because the agency certainly will not.",
      imageSlug: '/images/scope-of-work.png',
    },
    {
      word: 'FEEDBACK',
      partOfSpeech: 'noun',
      definition: "Your response to the agency's work — what you like, what needs to change, and why. Good feedback is specific, actionable, and focused on the objective — not personal preference. Bad feedback is vague, contradictory, or based on personal taste rather than strategy.",
      example: "Riley drafted the feedback: 'The headline does not communicate the key benefit clearly — please revise it to focus on the time-saving aspect.' Marcus approved: Good — that is specific and actionable. He showed a bad example: 'I just don't love the tone — it doesn't feel right.' Riley: Exactly — vague feedback like that sends the agency in circles. We need to tell them what to fix and why, not just how we feel.",
      imageSlug: '/images/feedback.png',
    },
    {
      word: 'REVISION',
      partOfSpeech: 'noun',
      definition: "A round of changes made to creative work after feedback. Most briefs include a set number of revision rounds — typically two or three. Going beyond the agreed revisions usually costs more. Managing revisions well means giving complete, consolidated feedback in each round.",
      example: "Marcus explained: We are on the third revision of this campaign and it still is not right. Riley asked: What went wrong? Marcus replied: We gave feedback in pieces — some team members gave comments in round one, others in round two, and someone added new requirements in round three. We should have consolidated all feedback before sending it. Now we are out of agreed revisions and the agency is charging extra for the fourth round.",
      imageSlug: '/images/revision.png',
    },
    {
      word: 'RETAINER',
      partOfSpeech: 'noun',
      definition: 'A monthly or quarterly fee paid to an agency in exchange for an agreed amount of work or time. A retainer creates an ongoing relationship rather than a one-off project. It gives the agency predictable revenue and gives you priority access to their team.',
      example: "Riley proposed: Rather than briefing the agency for each individual project, I think we should move to a retainer arrangement. Marcus agreed: What would that include? Riley: A set number of hours per month — social content, campaign support, copywriting — with an agreed monthly fee. It means the agency is always available to us, we get better rates, and we build a stronger working relationship.",
      imageSlug: '/images/retainer.png',
    },
    {
      word: 'DELIVERABLE',
      partOfSpeech: 'noun',
      definition: "A specific, tangible output that the agency must produce — for example, a video, a set of social media posts, a report, or a website. Deliverables are listed in the scope of work and have agreed due dates. If you do not define your deliverables clearly, you cannot hold the agency accountable.",
      example: "Marcus checked the timeline: What are the deliverables for this week? Riley listed them: Three social posts — images and copy. One email template. One campaign performance report. And the revised video script. Marcus: Good. Make sure the agency knows the exact format and size for each deliverable — if they deliver the wrong format, it causes delays.",
      imageSlug: '/images/deliverable.png',
    },
    {
      word: 'TIMELINE',
      partOfSpeech: 'noun',
      definition: 'A schedule showing when each piece of work is due. A clear timeline helps the agency plan their resources and helps the client track progress. Timelines should include milestones, feedback deadlines, and the final delivery date.',
      example: "Riley shared the project timeline: The agency has three weeks from the brief to the first creative concept. Then one week for our feedback. Then two weeks for revisions. Final delivery is six weeks from today. Marcus said: The feedback deadline is critical — if we miss our feedback window, the whole timeline slips. Make sure the team knows they need to review and respond within five working days.",
      imageSlug: '/images/timeline.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'CAN YOU SEND OVER THE BRIEF?',
      definition: "A phrase for requesting the brief document from a colleague or sending it to the agency. 'Send over' is a casual but professional phrase meaning 'send to me' or 'send to them'. It is used frequently in agency communication.",
      example: "Marcus asked the agency contact: Can you send over the brief template you use for new projects? I want to make sure our brief is in the format you find most useful. The agency replied: Of course — I will send it over this afternoon along with some examples of briefs we have found most helpful.",
      imageSlug: '/images/send-over-the-brief.png',
    },
    {
      phrase: 'WE NEED TO CONSOLIDATE OUR FEEDBACK BEFORE...',
      definition: "A phrase used to emphasise that all team members should combine their comments into one document before sending it to the agency. Sending feedback in multiple emails or from multiple people creates confusion and delays. One consolidated feedback document per round is best practice.",
      example: "Riley reminded the team: We need to consolidate our feedback before we send it to the agency. I will collect all your comments by Thursday and compile them into one document. Marcus: That is essential — if three people send separate emails with different or conflicting feedback, the agency cannot work efficiently and we burn through our revision rounds.",
      imageSlug: '/images/consolidate-feedback.png',
    },
    {
      phrase: 'THIS IS OUT OF SCOPE',
      definition: "A phrase used when a request goes beyond what was agreed in the scope of work. Agencies use it to signal that additional work was not included in the original agreement and will incur extra cost. Clients use it to push back when an agency tries to charge for something that should have been included.",
      example: "The agency account manager emailed: The additional video format you have requested is out of scope — it was not in the original brief and will incur an additional fee. Marcus replied: Let me check the scope of work document. Riley, can you confirm whether 16x9 and 9x16 formats were both specified? If both formats were in the brief, then this should be covered.",
      imageSlug: '/images/out-of-scope.png',
    },
    {
      phrase: 'WHAT IS THE TIMELINE ON THIS?',
      definition: "A phrase for asking when work will be completed — when each stage is due, when the final delivery is expected, or how long the process will take. It is a standard question in any agency briefing meeting and should always be answered with specific dates.",
      example: "Riley asked the agency in the briefing meeting: What is the timeline on this? The agency replied: First concepts will be ready in ten working days. We need five days for client feedback after that. Then seven days for revisions. Final delivery is three weeks from today, assuming we receive feedback on time. Riley noted: I will add the feedback deadline to the team calendar immediately — we cannot let that slip.",
      imageSlug: '/images/what-is-the-timeline.png',
    },
    {
      phrase: 'CAN WE ALIGN ON THE SCOPE OF WORK BEFORE WE START?',
      definition: "A phrase used to ask everyone to agree on exactly what is included before work begins. 'Align on' means to reach agreement or shared understanding. Aligning on scope at the start prevents disputes and extra costs later.",
      example: "Marcus said to the agency: Before we kick off, can we align on the scope of work? I want to make sure we are all clear on exactly what is included — deliverables, formats, revision rounds, and exclusions. The agency agreed: Absolutely. We will walk through each deliverable in this meeting and confirm the timeline. If anything is unclear, let's resolve it now rather than later.",
      imageSlug: '/images/align-on-scope.png',
    },
    {
      phrase: 'WE WOULD LIKE TO REQUEST A REVISION ON...',
      definition: "A polite, professional phrase for asking the agency to make changes to their work. 'Request a revision on' specifies the piece of work being changed. It is more professional than 'can you change this' and sets the right tone for a clear, managed feedback process.",
      example: "Riley sent the feedback email: Thank you for submitting the first draft. We would like to request a revision on the headline and the call to action — both need to be more action-oriented. The body copy and imagery work well and require no changes. Please send the revised version by Thursday. Marcus: That is a well-structured feedback email — specific, polite, and clear.",
      imageSlug: '/images/request-a-revision.png',
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Riley, we need to brief the creative agency on the Q4 campaign. Have you prepared the [[brief:a document that explains what you need an agency to do]]?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Almost ready. I have the objective, the audience, and the key message. I still need to confirm the budget and the [[timeline:a schedule showing when each piece of work is due]] with you before I send it over.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Budget is fifty thousand for the full campaign. Timeline — we need final [[deliverable:a specific output the agency must produce]]s by the 15th of November, which means we need to brief them by the end of this week.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Got it. I will also make sure the [[scope of work:a detailed list of everything the agency will deliver]] is very specific — three video ads, twelve static social images, two email templates. And I will specify the number of [[revision:a round of changes made after feedback]] rounds — two per deliverable.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. Two revision rounds is standard. What happens if we need a third?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Additional cost — it will be in the contract. Which is why our [[feedback:your response to the agency's work]] needs to be complete and consolidated each time. No sending partial comments and then adding more two days later.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Absolutely. How are we managing the feedback process internally?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "I will send all team members a shared document for their comments. Everyone has three working days to add their feedback. Then I consolidate into one clear document before it goes to the agency. One voice, one document.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Perfect. And are we doing a [[proposal:the agency's response to your brief — their recommended approach and fees]] stage or going directly to this agency?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "We are going directly — we have worked with them for two years and the relationship is strong. Actually, I want to talk to you about moving to a [[retainer:a monthly fee paid to an agency in exchange for an agreed amount of work]] arrangement with them.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Tell me more.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Right now we brief them per project, which means each time we start from scratch — scope negotiation, fee negotiation, onboarding. A retainer would give us a set number of hours per month, priority access to their senior team, and better rates. And we would not lose momentum between campaigns.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "What would the retainer cover?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Social content, campaign creative, copywriting, and strategic input — roughly equivalent to what we spend on three or four individual projects per year, but more predictable and with better continuity. I have asked them to send over a proposal for a twelve-month retainer.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. When we get the proposal, let's align on the scope of work before we commit — I want everything clearly defined, including what is out of scope and how we handle extra requests.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: "Agreed. I will schedule a scope-alignment meeting with the agency before we sign anything. No assumptions — everything in writing.",
    },
  ],

  matchingExercise: [
    { word: 'brief', definition: 'a document explaining what you need an agency to do, including objective, audience, and timeline' },
    { word: 'proposal', definition: "the agency's response to your brief — their approach, creative ideas, and fees" },
    { word: 'scope of work', definition: "a detailed list of all deliverables, revision rounds, and exclusions agreed before work begins" },
    { word: 'feedback', definition: "your specific, actionable response to the agency's work — what to change and why" },
    { word: 'revision', definition: 'a round of changes made to creative work after feedback is received' },
    { word: 'retainer', definition: 'a monthly fee paid to an agency for an agreed amount of ongoing work or time' },
    { word: 'deliverable', definition: 'a specific, tangible output the agency must produce — a video, post set, or report' },
    { word: 'timeline', definition: 'a schedule showing when each piece of work and each feedback stage is due' },
  ],

  fillBlankExercise: [
    { before: 'Before we start work, can we align on the', after: 'of work — I want every deliverable and revision round specified.', answer: 'scope' },
    { before: 'The additional format you requested is out of', after: '— it was not in the original brief and will incur an extra fee.', answer: 'scope' },
    { before: 'We need to', after: 'our feedback before we send it to the agency — one document, one voice.', answer: 'consolidate' },
    { before: 'We are moving to a', after: 'arrangement — a set monthly fee for an agreed volume of work.', answer: 'retainer' },
    { before: 'A weak', after: 'leads to weak creative — the more specific you are, the better the work.', answer: 'brief' },
    { before: 'The campaign video is the main', after: '— it needs to be delivered in three formats by the 15th.', answer: 'deliverable' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Marcus say will happen if the brief is too vague?',
      options: ['The agency will ask for a higher fee to cover the additional uncertainty', 'The agency will guess what you want and you end up with more revision rounds than necessary', 'The agency will refuse to start work until the brief is rewritten'],
      correctIndex: 1,
    },
    {
      question: 'Why does Riley want to consolidate feedback before sending it to the agency?',
      options: ['Because agencies charge extra if they receive feedback from more than one person', 'To prevent conflicting or partial comments that confuse the agency and waste revision rounds', 'Because the brief specifies that all feedback must be written by the project lead'],
      correctIndex: 1,
    },
    {
      question: 'What is the advantage of a retainer arrangement according to Riley?',
      options: ['The agency does unlimited work for a fixed fee with no scope restrictions', 'Better rates, priority access to the senior team, continuity between campaigns, and no per-project scope negotiations', 'The client only pays when they are happy with the output'],
      correctIndex: 1,
    },
    {
      question: "What does Marcus insist on before signing the retainer?",
      options: ["Running a competitive pitch with two other agencies to benchmark the retainer price", "Aligning on the scope of work in detail — including what is out of scope and how extra requests are handled", "Getting legal to review the entire contract before any further conversations with the agency"],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Have you ever had to explain what you wanted to someone — a designer, a developer, a colleague — and they came back with something completely different? What went wrong?',
      'What do you think makes a good brief? What information would you always include if you were briefing someone on a project?',
      'If you were an agency and you received a vague brief, what questions would you ask the client before starting work?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'A clear _____ is the starting point for all agency work — without one, the agency guesses what you want.',
        options: ['brief', 'revision', 'retainer'],
        correctIndex: 0,
        explanation: "'Brief' — the document that explains what you need the agency to do. It is always the starting point before any creative work begins. A brief defines the objective, audience, message, budget, and timeline. 'Revision' comes later — it is the round of changes after the work is submitted. 'Retainer' is the financial arrangement, not the work-initiating document. Key collocation: 'write a brief', 'send a brief', 'receive a brief', 'respond to a brief'.",
      },
      {
        sentence: 'We need to _____ our feedback before sending it — one document from the whole team.',
        options: ['consolidate', 'collect', 'send'],
        correctIndex: 0,
        explanation: "'Consolidate' means to bring separate things together into one unified whole. 'Consolidate feedback' is the specific phrase for combining comments from multiple team members into one document before sending to the agency. 'Collect' is close but weaker — it means to gather things, but does not imply combining them into a single coherent document. 'Send' is the action that comes after consolidation, not the consolidation itself.",
      },
      {
        sentence: 'The video in three formats was not in the original brief — the agency says it is out of _____.',
        options: ['scope', 'budget', 'time'],
        correctIndex: 0,
        explanation: "'Out of scope' is the fixed phrase for work that was not agreed in the scope of work document. If it is out of scope, it is not included in the original fee and will cost extra. 'Out of budget' is a different phrase (meaning you have spent all the available money) but is not the right term here — the issue is not money, it is what was agreed. 'Out of time' means the deadline has passed, which is not what is being described.",
      },
      {
        sentence: 'A _____ arrangement gives us priority access to the agency, better rates, and continuity between projects.',
        options: ['retainer', 'proposal', 'brief'],
        correctIndex: 0,
        explanation: "'Retainer' — the ongoing monthly payment arrangement that creates a continuous relationship with the agency rather than a series of one-off projects. Retainers benefit both sides: the agency has predictable income; the client has guaranteed access, better rates, and an agency that deeply understands the brand. 'Proposal' is a one-off document. 'Brief' is a work-initiating document, not a payment arrangement.",
      },
      {
        sentence: "What is the _____ on this project? We need specific dates for each stage.",
        options: ['timeline', 'deadline', 'schedule'],
        correctIndex: 0,
        explanation: "'Timeline' is the comprehensive project schedule — it includes all milestones, feedback windows, revision rounds, and the final delivery date. 'What is the timeline on this?' is the standard phrase for asking for the full project schedule in an agency context. 'Deadline' is a single final date — important, but 'timeline' covers the whole sequence of dates. 'Schedule' is a synonym and would also be acceptable, but 'timeline' is more commonly used in marketing and agency contexts.",
      },
      {
        sentence: 'We would like to _____ a revision on the headline — it needs to focus more on the key benefit.',
        options: ['request', 'ask', 'need'],
        correctIndex: 0,
        explanation: "'Request a revision' is the professional, formal phrase for asking an agency to make changes. It is more precise and professional than the other options. 'Ask a revision' is grammatically incorrect — 'ask' takes a person as its object ('ask them to revise') but not 'ask a revision'. 'Need a revision' is grammatically possible but more informal and does not have the same professional register as 'request'. Key collocations: 'request a revision', 'request changes', 'request amendments'.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read the agency situation. Choose the best response.',
      items: [
        {
          customerLine: "The agency has submitted the first draft of the campaign videos. Two people on your team have already emailed the agency separately with their feedback. What do you do?",
          options: [
            "Let the agency handle the conflicting feedback — they are professionals and will figure out which comments to action.",
            "Email the agency immediately to say: 'Please ignore the previous emails — we will send consolidated feedback in one document by Thursday.' Then collect all team comments, resolve any conflicts internally, and send one clear feedback document.",
            "Ask your manager to call the agency and explain the situation — it is too complicated to handle by email.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. The agency should not be trying to reconcile conflicting feedback from multiple sources — that is the client's job. Stop the confusion immediately, ask the agency to wait for the official feedback, and take control of the internal process. One consolidated document prevents wasted revision rounds and keeps the project on timeline. Option A is poor client management — it puts the burden on the agency and is likely to result in confused output. Option C delays unnecessarily and escalates something that can be handled directly.",
        },
        {
          customerLine: "The agency has submitted work and requests a third revision round, but your contract only includes two. What do you do?",
          options: [
            "Agree to the third revision at no extra cost — you need the work to be right and it is not worth the relationship damage to argue.",
            "Review the feedback history — if your team gave incomplete or contradictory feedback in earlier rounds, you may need to pay for the extra round. If the agency has not delivered what was briefed, push back professionally and ask them to complete within the agreed scope.",
            "Refuse immediately and tell the agency to deliver what was briefed or you will find a different agency.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct. The right response depends on why you need a third revision. If your feedback was late, incomplete, or contradictory — that is a client problem, and paying for the extra round is fair. If the agency has not delivered what was clearly specified in the brief and scope — that is an agency problem, and you have grounds to request the revision within scope. Always review the evidence before deciding. Option A gives away value unnecessarily. Option C is too aggressive for what may be a legitimate billing situation.",
        },
        {
          customerLine: "You are about to brief a new agency for the first time. What should you include in the brief?",
          options: [
            "The campaign name and the deadline — the agency will ask questions if they need anything else.",
            "The objective, the target audience, the key message, the budget, the timeline, the deliverables, the number of revision rounds, any must-follow brand guidelines, and any constraints or exclusions.",
            "A mood board of campaigns you like — agencies respond better to visual inspiration than written documents.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct and comprehensive. A complete brief includes all of these elements: objective (why are we doing this), audience (who is it for), key message (what should they think, feel, or do), budget (what can we spend), timeline (when is it needed), deliverables (exactly what do we need), revision rounds (how many changes are included), brand guidelines (what constraints apply), and exclusions (what is explicitly not included). Option A is far too minimal and will result in the agency making assumptions on every important parameter. Option C (mood board only) is a useful supplement but not a replacement for a written brief.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the agency briefing conversation. Three lines have a mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "Riley, have you sent the brief to the agency yet?" },
        { speaker: 'Riley', text: "Not yet — I am still waiting on the budget confirmation from finance." },
        { speaker: 'Marcus', text: "Good. Make sure the scope of work are clearly defined before we send it." },
        { speaker: 'Riley', text: "Of course — I will specify every deliverable and the number of revision rounds." },
        { speaker: 'Marcus', text: "And the timeline — make sure you include the dates for feedbacks rounds as well." },
        { speaker: 'Riley', text: "Yes — I will add all the key milestones. The agency needs those dates to plan their resource." },
        { speaker: 'Marcus', text: "Perfect. Once we receive their proposal, let's align about the scope before we agree anything." },
        { speaker: 'Riley', text: "Absolutely — I will set up a scope alignment meeting before we sign the contract." },
      ],
      mistakes: [
        {
          lineIndex: 2,
          incorrectText: 'scope of work are',
          correction: 'scope of work is',
          explanation: "'Scope of work' is a singular noun phrase — it refers to one document or one agreement. It takes a singular verb: 'the scope of work is', not 'are'. Even though 'scope' describes multiple items (deliverables, timelines, etc.), the phrase itself is treated as a single entity. Similar patterns: 'the plan is', 'the strategy is', 'the proposal is' — these are all singular noun phrases even when they describe many things.",
        },
        {
          lineIndex: 4,
          incorrectText: 'dates for feedbacks rounds',
          correction: 'dates for feedback rounds',
          explanation: "'Feedback' is an uncountable noun in English — it does not take a plural form. You cannot say 'feedbacks'. It is always 'feedback' whether referring to one piece of feedback or many. Correct: 'give feedback', 'receive feedback', 'feedback rounds', 'a round of feedback'. This is a very common mistake for speakers whose first language treats the word as countable. Other uncountable business nouns: 'advice' (not 'advices'), 'information' (not 'informations'), 'research' (not 'researches').",
        },
        {
          lineIndex: 6,
          incorrectText: 'align about the scope',
          correction: 'align on the scope',
          explanation: "'Align on' is the fixed preposition in business English for reaching agreement or shared understanding. 'Align on the scope', 'align on the objectives', 'align on the approach' — 'on' is always the preposition used with 'align' in this context. 'Align about' is not standard — 'about' is used for general topics of discussion ('talk about', 'ask about') not for the act of reaching agreement. 'Align on' specifically means to agree and get everyone on the same page.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "What makes a brief good? Walk me through the key elements.",
          salespersonStart: "A good brief has everything the agency needs to do great work without guessing —",
          suggestedCompletion: "the objective (what we are trying to achieve and how we will measure success), the target audience (who they are, what they care about, what motivates them), the key message (the single most important thing we want the audience to take away), the budget (so the agency can propose the right solution for the scale), the timeline (when each deliverable is needed and when feedback rounds will happen), the specific deliverables (formats, sizes, quantities), any brand guidelines they must follow, and any constraints or things that are out of scope. The clearer the brief, the better the creative — it is that simple.",
        },
        {
          customerLine: "What is the difference between a revision and a new brief?",
          salespersonStart: "A revision is a change made to work that has already been submitted —",
          suggestedCompletion: "it is within the scope of the original brief and the agreed revision rounds. For example, changing a headline, adjusting a colour, or re-editing a video based on feedback — all of these are revisions. A new brief is when the objective, the audience, the message, or the entire direction of the work changes significantly. If the brief changes, the scope changes — and the fee usually changes with it. The key question is: are we refining what was asked for, or are we asking for something different? If it is different, that is a new brief and a new agreement.",
        },
        {
          customerLine: "The agency says the extra work is out of scope. How do you handle this professionally?",
          salespersonStart: "First, I would go back to the scope of work document and check exactly what was agreed —",
          suggestedCompletion: "if the work is genuinely not in the original scope, then the agency is right to flag it and we should expect to pay for it. If the work was in the brief and the scope of work but the agency is now saying it is extra — that is worth a professional conversation. I would email the account manager referencing the specific line in the scope of work document and asking them to review. Keep it factual, keep it professional, and always have the written agreement to refer to. That is why it is so important to have everything in writing before you start.",
        },
      ],
    },
  },
};

import { Lesson } from '@/types/lesson';

export const advancedSalesPresentations: Lesson = {
  slug: 'advanced-sales-presentations',
  title: 'Advanced Sales Presentations',
  subtitle: 'How to structure a presentation that persuades — not just informs',
  level: 'C1-C2',
  description: 'Most sales presentations contain good information and make no impact. The audience hears facts, follows the logic, and feels nothing in particular. A persuasive presentation is structurally different — it opens with a hook that creates a reason to listen, builds on a premise the audience already accepts, signposts the argument so the audience can follow it, and closes with a moment of emphasis that makes the key point impossible to forget. This lesson teaches the structural and linguistic techniques that turn a competent presentation into a persuasive one.',
  heroImage: '/images/advanced-sales-presentations-hero.png',

  vocabulary: [
    {
      word: 'HOOK',
      partOfSpeech: 'noun',
      definition: 'An opening statement, question, or statistic designed to capture attention immediately and give the audience a reason to keep listening. In a sales presentation, the hook must establish relevance — why this matters to this audience, right now — not just be interesting in the abstract. A hook that lands makes the audience lean forward. A presentation without one loses the room in the first thirty seconds.',
      example: 'Riley opened her presentation to the executive team not with a slide about the product, but with a number: seven hundred and forty hours. That was how much time the sales team had spent in the last quarter on tasks that were not selling. Nobody in the room reached for their phone. The hook had done its job — now everyone wanted to know what came next.',
      imageSlug: '/images/hook.png',
    },
    {
      word: 'PREMISE',
      partOfSpeech: 'noun',
      definition: 'The foundational claim or assumption that the rest of your argument is built on. In a sales presentation, establishing a shared premise with the audience — a problem they already recognise, a trend they already believe — makes everything that follows more persuasive, because you are building on ground they have already accepted. If the audience does not share your premise, they will resist your conclusion before you reach it.',
      example: "Riley's presentation was built on a single premise: that sales productivity, not headcount, was the primary lever available to the company in the current hiring environment. She did not argue for this premise — she stated it as shared ground, and watched the CFO and CEO nod before she had reached the second slide. Everything that followed was a direct consequence of a premise they had already accepted.",
      imageSlug: '/images/premise.png',
    },
    {
      word: 'SIGNPOST',
      partOfSpeech: 'verb',
      definition: 'To make the structure of your argument explicit as you move through it — telling the audience where you are in the presentation, where you are going next, and why the sequence matters. Signposting prevents audiences from getting lost and allows them to follow the logic of the argument, not just absorb the content. The best signposts are invisible — they feel like natural transitions, not announcements.',
      example: 'After the opening, Riley signposted the rest of the presentation in one sentence: she was going to show them the cost of the current situation, then the size of the available gain, then exactly what it would take to capture it. Three sections, clearly named, in a sequence that built toward an obvious conclusion. The audience did not need to work out where the presentation was going — they could see the shape of the argument from the beginning.',
      imageSlug: '/images/signpost.png',
    },
    {
      word: 'ASSERTION',
      partOfSpeech: 'noun',
      definition: 'A confident statement of a claim or position. In a persuasive presentation, assertions need to be earned — either by evidence that follows immediately, or by a premise the audience has already accepted. An unsupported assertion creates doubt rather than confidence. Understanding when to assert and when to prove is one of the core structural skills in persuasive selling.',
      example: 'Marcus had built his presentation around a series of assertions: the current process was inefficient, the tool would fix it, the ROI was strong. Each claim was true — but because none of them were supported, the executive team treated them all as sales language. Riley told him to keep the assertions but earn each one: state the claim, then immediately give the number or the example that makes it real. The same content, presented differently, landed completely differently.',
      imageSlug: '/images/assertion.png',
    },
    {
      word: 'PACING',
      partOfSpeech: 'noun',
      definition: 'The speed and rhythm at which information is delivered in a presentation. Pacing is used strategically — slowing down at the most important moment gives it weight, while moving quickly through setup signals that what follows is more important. A presentation that maintains the same pace throughout gives the audience no way to know what matters. Varying pacing is one of the simplest tools for creating emphasis.',
      example: 'Riley had been moving through the deck at a steady pace — context, problem, size of opportunity — and then she stopped. She let the silence sit for three seconds before she said the number. The pacing made the number land harder than any emphasis in her slide could have. Three seconds of silence in a presentation is an eternity — and that is exactly the point.',
      imageSlug: '/images/pacing.png',
    },
    {
      word: 'RHETORICAL',
      partOfSpeech: 'adjective',
      definition: 'Relating to language used for persuasive effect rather than to convey information or receive a literal answer. A rhetorical question is not asked to receive a response — it is asked to lead the audience to a conclusion they reach themselves, which is more persuasive than a conclusion delivered to them. Rhetorical language involves the audience in the argument rather than presenting at them.',
      example: 'Riley did not tell the executive team that their competitors were moving faster — she asked them how many companies in their sector they thought had already started this process. The question was rhetorical; she was not waiting for an answer. But the moment she asked it, every person in the room was thinking about the same thing, and when she gave the answer — two — the number carried the weight of a conclusion they had partly reached themselves.',
      imageSlug: '/images/rhetorical.png',
    },
    {
      word: 'CADENCE',
      partOfSpeech: 'noun',
      definition: 'The rhythm and flow of spoken or written language — the pattern of long and short sentences, fast and slow delivery, dense and sparse content. In a sales presentation, cadence is used deliberately to create emphasis: a short sentence standing alone after a longer sequence draws attention by contrast. Varying cadence prevents monotony and signals what is important without the speaker having to say the words this is important.',
      example: 'Marcus had written his presentation in long, evenly structured paragraphs — the same sentence length throughout, the same density of information on every slide. Riley read it and said: you have no cadence. She pulled out his conclusion — the single most important claim in the whole presentation — rewrote it as one sentence, put it on a slide by itself, and told him to pause before he said it. That one sentence was now the most memorable moment in a thirty-minute presentation.',
      imageSlug: '/images/cadence.png',
    },
    {
      word: 'THREAD',
      partOfSpeech: 'noun',
      definition: 'A connecting idea or theme that runs through an entire presentation, linking the opening to the close. A strong thread means that every section of the presentation is obviously connected to the core argument — the audience can always see how what they are hearing connects to what they heard at the beginning. A presentation without a thread feels like a collection of separate points. With one, it feels like an argument.',
      example: "Riley's thread was the same number she had opened with: seven hundred and forty hours. It appeared in the opening as a hook, in the middle as the cost being quantified, and in the close as the thing being reclaimed. By the time she finished, that number belonged to the audience — it was their problem, their opportunity, and the reason their decision mattered. The thread had done its job.",
      imageSlug: '/images/thread.png',
    }
  ],

  phrasalVerbs: [
    {
      phrase: 'LET ME START WITH A QUESTION',
      definition: 'A rhetorical opening hook that immediately involves the audience before any information has been delivered. It signals that this will be a conversation, not a presentation — and it creates a frame of mind in which the audience is actively thinking rather than passively receiving. The question does not need to be answered by the audience; it needs to create the right mental state before the hook lands.',
      example: 'Let me start with a question. How much time did your sales team spend last quarter on tasks that were not actually selling? I am going to give you a number in a moment — but I want you to have your own estimate in your head first, because the gap between what you expect and what I am about to tell you is exactly the point of this conversation.',
      imageSlug: '/images/let-me-start-with-a-question.png',
    },
    {
      phrase: 'THE REASON THIS MATTERS IS',
      definition: 'A transition phrase that connects a fact or claim to its consequence — the bridge between information and significance. In a persuasive presentation, facts without consequences are just data. The reason this matters is is the phrase that converts data into an argument by making explicit why the audience should care about what they just heard.',
      example: 'The team spent seven hundred and forty hours last quarter on non-selling tasks. The reason this matters is not the time itself — it is what that time was worth. At an average deal size of forty thousand and an average close rate of 12%, those hours represent approximately three and a half deals that did not happen. That is not a productivity problem. It is a revenue problem.',
      imageSlug: '/images/the-reason-this-matters-is.png',
    },
    {
      phrase: 'WHAT THIS MEANS IN PRACTICE IS',
      definition: 'A transition from the abstract to the concrete — the move from a claim or a principle to a specific, observable example or outcome. Abstract arguments are easy to ignore; concrete examples are difficult to dismiss. What this means in practice is signals to the audience that what follows will make the preceding point real rather than theoretical.',
      example: 'We are saying the process can be reduced from fourteen days to three. What this means in practice is: a client who signs on a Monday is fully onboarded and generating value by Thursday of the same week. For your team, that means the first invoice goes out eleven days earlier than it does today — every time, for every new client.',
      imageSlug: '/images/what-this-means-in-practice-is.png',
    },
    {
      phrase: 'THE SINGLE MOST IMPORTANT THING I WANT YOU TO TAKE AWAY FROM THIS IS',
      definition: 'An emphasis device that signals the peak of the presentation — the moment at which the central claim is delivered with maximum weight. By naming it explicitly, the speaker gives the audience permission to remember this one thing above everything else, which is particularly useful in presentations where the audience will later need to represent the argument to others.',
      example: 'I have shown you the cost, the opportunity, and the mechanics of how we get there. The single most important thing I want you to take away from this is not the ROI number — it is the decision window. The companies in your sector that started this in Q3 are now past the point where you can close the gap easily. That window is what this decision is actually about.',
      imageSlug: '/images/the-single-most-important-thing-i-want-you-to-take-away-from-this-is.png',
    },
    {
      phrase: 'LET ME BRING THIS BACK TO',
      definition: 'A callback transition — the phrase that reconnects the current point to the thread established earlier in the presentation. Used after a detour into evidence, data, or an example, it reminds the audience of the core argument and shows that everything covered so far is connected. It is the technique that prevents a presentation from feeling like a list of separate points.',
      example: 'We have spent the last five minutes on the implementation detail — and I know that is not the most exciting part of this conversation. Let me bring this back to the number we started with: seven hundred and forty hours. The reason the implementation question matters is that the answer to it is what determines how quickly those hours start coming back to your team.',
      imageSlug: '/images/let-me-bring-this-back-to.png',
    },
    {
      phrase: 'SO THE QUESTION IS NOT WHETHER',
      definition: 'A reframing close that eliminates the binary yes/no question and repositions the decision as a question of timing or method. When a presentation closes with so the question is not whether, it signals that the case for the solution has been made — the only open question is how and when to move. It is one of the most powerful closing moves in a persuasive structure because it assumes the conclusion while appearing to invite discussion.',
      example: 'So the question is not whether this investment makes sense — we have been through the numbers and I think we all agree that it does. The question is whether you want to start reclaiming those seven hundred and forty hours in Q1, or whether you want to revisit this in Q3 after two more quarters of the same cost. That is the actual decision in front of you today.',
      imageSlug: '/images/so-the-question-is-not-whether.png',
    }
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'Riley, I need your help. I have to present the case for your solution to my CFO and CEO next Thursday. I have built a deck — I have the data, the ROI model, the implementation plan. But when I ran through it with my Head of Operations, she said it felt like a report, not an argument.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'She is right — and that is a very useful distinction. A report presents information. An argument leads the audience to a conclusion. Can you walk me through your opening slide?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'I start with context: market conditions, our current growth rate, the challenge we are facing in scaling the sales team without increasing headcount.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'That is the right premise — but you are burying it in context instead of opening with it. Your CFO and CEO already know the market conditions. What they do not have yet is a reason to lean forward. You need a [[hook:an opening designed to capture attention and create a reason to keep listening]] before you give them any context at all.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'What would the hook be?',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'A number. Let me start with a question: how much time did your sales team spend last quarter on tasks that were not actually selling? Your actual number is 740 hours. Open with that — nothing else on the slide, no title, just the number. Then say: the reason this matters is not the time itself, it is what that time was worth in deals that did not happen. Now they are leaning forward.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That is a stronger opening. But then what? My deck has six sections — competitive analysis, product overview, ROI model, implementation, risk assessment, next steps.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Six sections is not a presentation — it is a reference document. You need to [[signpost:make the structure explicit so the audience can follow the argument]] in one sentence after the hook: I am going to show you the cost of the current situation, the size of the available gain, and what it takes to capture it. Three sections. That is the shape of a persuasive argument. The rest of your content goes inside those three sections — it does not replace the structure.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'So I am essentially rebuilding the deck around a [[thread:a connecting idea that runs through the whole presentation]] rather than a list of topics.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Exactly. And your thread is the 740 hours. It appears at the opening as the problem, in the middle as the cost being quantified, and in the close as the thing being reclaimed. Every section is an answer to the same question: what are we going to do about those 740 hours?',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'The ROI model is the section I am least confident about. I have the numbers but I am worried my CFO will push back on the [[assertion:a confident claim that needs to be earned by evidence]] that the freed capacity translates directly to revenue.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'She should push back — because right now you are asserting it without earning it. Here is the fix: after you state the claim, say what this means in practice is, then give her a specific example. Not a statistic — an example. Tell her about a team of similar size that did this and show her exactly what happened to their pipeline in the first quarter. The [[premise:the foundational claim the argument is built on]] shifts from something you are claiming to something that already happened somewhere else.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'And the close? Right now I end with next steps and a timeline.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'Next steps and a timeline are the mechanics of a decision — they are not the reason to make one. Before you get to next steps, you need an emphasis moment. Think about [[cadence:the rhythm of language, used to give weight to what matters most]] — everything you have said leads to one sentence. That sentence should stand alone. Pause before it. Then say: so the question is not whether this investment makes sense — the question is whether you want to start reclaiming those 740 hours in Q1 or in Q3. After that, you can give them the timeline.',
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: 'That is a completely different presentation from the one I had. I need to go back and rebuild it.',
    },
    {
      speaker: 'Riley',
      speakerColor: 'orange',
      speakerAvatar: '/images/riley-icon.png',
      text: 'The content is the same — the structure is different. And structure is what determines whether your CFO and CEO leave the room thinking about your data or thinking about your conclusion. Right now they would remember the ROI number. After this rebuild, they will remember the question: do we want those 740 hours back in Q1 or in Q3? That is the [[rhetorical:language used for persuasive effect rather than literal information]] move that turns a report into a decision.',
    }
  ],

  matchingExercise: [
    {
        "word": "HOOK",
        "definition": "An opening statement or question that creates a reason to keep listening — must establish relevance to this audience, right now"
    },
    {
        "word": "PREMISE",
        "definition": "The foundational claim the argument is built on — most persuasive when it is something the audience already believes before you state it"
    },
    {
        "word": "SIGNPOST",
        "definition": "To make the structure of the argument explicit as you move through it, so the audience can follow the logic rather than just absorb the content"
    },
    {
        "word": "ASSERTION",
        "definition": "A confident claim that creates conviction when earned by evidence immediately following, and doubt when it stands alone"
    },
    {
        "word": "PACING",
        "definition": "The strategic variation of speed and rhythm to signal what is important — slowing down at the key moment gives it weight without saying the words this is important"
    },
    {
        "word": "RHETORICAL",
        "definition": "Language used for persuasive effect rather than literal information — involves the audience in reaching a conclusion rather than delivering it to them"
    },
    {
        "word": "CADENCE",
        "definition": "The rhythm of language used to create emphasis — a short sentence after a longer sequence draws attention by contrast"
    },
    {
        "word": "THREAD",
        "definition": "A connecting idea that runs through the whole presentation, linking the opening to the close so every section is obviously part of the same argument"
    }
],
  fillBlankExercise: [
    {
        "before": "Riley opened her presentation not with a slide about the product, but with a number: seven hundred and forty hours. Nobody in the room reached for their phone. The",
        "after": "had done its job — now everyone wanted to know what came next.",
        "answer": "hook"
    },
    {
        "before": "Riley's presentation was built on a single",
        "after": ": that sales productivity, not headcount, was the primary lever available in the current hiring environment. She did not argue for this — she stated it as shared ground, and watched the CFO and CEO nod before she had reached the second slide.",
        "answer": "premise"
    },
    {
        "before": "After the opening, Riley",
        "after": "ed the rest of the presentation in one sentence: cost of the current situation, size of the available gain, what it takes to capture it. Three sections, clearly named, in a sequence that built toward an obvious conclusion.",
        "answer": "signpost"
    },
    {
        "before": "Marcus had built his presentation around a series of",
        "after": "s: the current process was inefficient, the tool would fix it, the ROI was strong. Each claim was true — but because none of them were supported, the executive team treated them all as sales language.",
        "answer": "assertion"
    },
    {
        "before": "Riley had been moving through the deck at a steady pace and then she stopped. She let the silence sit for three seconds before she said the number. The",
        "after": "made the number land harder than any emphasis on her slide could have.",
        "answer": "pacing"
    },
    {
        "before": "Riley did not tell the executive team that competitors were moving faster — she asked them how many companies in their sector had already started this process. The question was",
        "after": "; she was not waiting for an answer. But when she gave the number, it carried the weight of a conclusion they had partly reached themselves.",
        "answer": "rhetorical"
    },
    {
        "before": "Marcus had written his presentation in long, evenly structured paragraphs — the same sentence length throughout, the same density on every slide. Riley said: you have no",
        "after": ". She rewrote his conclusion as one sentence, put it on a slide by itself, and told him to pause before he said it.",
        "answer": "cadence"
    },
    {
        "before": "Riley's",
        "after": "was the same number she had opened with: seven hundred and forty hours. It appeared at the opening as the problem, in the middle as the cost being quantified, and in the close as the thing being reclaimed.",
        "answer": "thread"
    }
],
  multipleChoiceExercise: [
    {
        "question": "Marcus's Head of Operations says his deck feels like a report, not an argument. What is the structural difference she is identifying?",
        "options": [
            "A report is shorter and less detailed than an argument; Marcus needs to add more content to make it persuasive",
            "A report presents information in a logical sequence; an argument leads the audience to a specific conclusion — every section exists to serve that conclusion, not to be comprehensive",
            "A report uses formal language while an argument uses conversational language; Marcus needs to change his tone",
            "A report covers multiple topics while an argument covers only one; Marcus needs to remove the sections that are not directly about the product"
        ],
        "correctIndex": 1
    },
    {
        "question": "Riley says Marcus is burying his premise in context. What does she mean — and why does it matter?",
        "options": [
            "The premise appears too late in the presentation, after the audience has already formed their opinion — it should appear first so the audience accepts it before they hear the argument",
            "The premise is presented as new information rather than as shared ground that the audience already accepts — by the time Marcus states it, the audience treats it as a claim to be evaluated rather than a foundation to build on",
            "The context slides contain too much data, which distracts the audience from the core premise before they have had a chance to absorb it",
            "The premise is too similar to competitors' premises, which means the audience has heard it before and will dismiss it as standard sales language"
        ],
        "correctIndex": 1
    },
    {
        "question": "Why does Riley reduce Marcus's six-section deck to three sections?",
        "options": [
            "Because executive audiences have shorter attention spans and cannot follow presentations with more than three sections",
            "Because six sections signals that the presentation is a reference document — the right structure for a persuasive argument is a sequence that builds toward one conclusion: cost, gain, path to capturing it",
            "Because three sections is the standard format for sales presentations at the C-suite level",
            "Because four of Marcus's sections contain information that is not relevant to the CFO and CEO"
        ],
        "correctIndex": 1
    },
    {
        "question": "Marcus worries his CFO will push back on his assertion that freed capacity translates to revenue. What is Riley's advice?",
        "options": [
            "Add a footnote citing industry research that supports the claim, so the CFO can verify it independently",
            "Remove the assertion and replace it with a question — a rhetorical approach is more persuasive than a direct claim at CFO level",
            "Earn the assertion immediately by following it with what this means in practice is and a specific real-world example from a comparable company — shifting the claim from something you are saying to something that already happened elsewhere",
            "Present the assertion as a hypothesis rather than a claim, and invite the CFO to evaluate the evidence herself"
        ],
        "correctIndex": 2
    },
    {
        "question": "Riley tells Marcus that next steps and a timeline are not a close. What should he do instead?",
        "options": [
            "End the presentation with the ROI model — the strongest evidence should always be the final thing the audience sees",
            "Create an emphasis moment before the next steps: a single sentence that stands alone, delivered after a pause, which frames the decision as a question of timing rather than a question of whether — so the question is not whether becomes the actual close",
            "Summarise the three sections briefly to remind the audience of the argument before moving to next steps",
            "Ask the audience for questions before presenting next steps, so that their concerns are addressed before the decision frame is established"
        ],
        "correctIndex": 1
    },
    {
        "question": "What makes the rhetorical question how many companies in your sector have already started this more persuasive than simply stating the answer?",
        "options": [
            "It shows confidence — a salesperson who asks questions rather than making assertions appears more certain of their position",
            "It gives the audience time to process the information before hearing the answer, which improves retention",
            "It involves the audience in reaching the conclusion — they generate their own estimate before hearing the real number, which means the gap between their expectation and the truth lands as a discovery they have partly made themselves",
            "It is less confrontational than a direct assertion, which makes the audience more receptive to what follows"
        ],
        "correctIndex": 2
    },
    {
        "question": "Riley says Marcus has no cadence. What does she mean?",
        "options": [
            "Marcus speaks too slowly in his delivery — he needs to vary the speed at which he moves through the slides to maintain the audience's attention",
            "Marcus uses the same sentence length and information density throughout — there is no variation in rhythm, which means the most important moment has the same weight as every other moment; the audience has no way to know what to remember",
            "Marcus's slides have too much text, which prevents the audience from listening to his delivery and creates a mismatch between what they read and what they hear",
            "Marcus does not pause at the right moments — he needs to slow down at the end of each section to signal that a transition is coming"
        ],
        "correctIndex": 1
    },
    {
        "question": "The 740-hour number appears three times in Riley's coaching: as the opening hook, as the cost being quantified in the middle, and as the thing being reclaimed in the close. What presentation technique does this demonstrate?",
        "options": [
            "Repetition — repeating the same number three times increases the likelihood that the audience will remember it",
            "Threading — a single connecting idea runs through the whole presentation, so every section is obviously part of the same argument; the audience experiences a complete narrative rather than a sequence of separate points",
            "Anchoring — establishing a specific number early in the presentation and returning to it later uses the audience's memory of the opening to make the close more persuasive",
            "Framing — presenting the same information in three different ways gives the audience multiple entry points for understanding the core argument"
        ],
        "correctIndex": 1
    }
],
  pitchCorner: {
    "title": "The Opening Three Minutes",
    "context": "Marcus has rebuilt his executive presentation following Riley's coaching. This is the script for his opening — the hook, the premise, and the signpost — before he gets into any content. He will deliver this without slides other than the opening number.",
    "passage": [
        {
            "before": "Let me start with a question.\n\nHow much time did your sales team spend last quarter on tasks that were not actually selling?\n\nI want you to have your own estimate — because the gap between what you are thinking and what I am about to tell you is exactly what this conversation is about.\n\nSeven hundred and forty hours.\n\nThat is the number. And the reason this matters is not the time itself — it is what that time was worth.\n\nAt our average deal size and our current close rate, seven hundred and forty hours is the equivalent of three and a half deals that did not happen.\n\nThis is not a productivity problem. It is a revenue problem.\n\n---\n\nThe",
            "after": "I am going to make today is this: that sales productivity — not headcount — is the primary lever we have available in the current environment. I do not think I need to argue for that. I think everyone in this room has already reached the same conclusion.",
            "answer": "premise"
        },
        {
            "before": "So everything I am going to show you in the next twenty minutes follows from that.\n\nI am going to",
            "after": "the rest of this presentation in three parts: first, the cost of the current situation — in terms you can take to the board; second, the size of the gain that is available and how quickly it can be realised; and third, exactly what a decision today would require from the team. By the end of this, the only open question should be timing.",
            "answer": "signpost"
        },
        {
            "before": "Before I get into the detail, I want to say one thing about structure.\n\nEverything in this presentation connects back to the number I opened with: seven hundred and forty hours. That",
            "after": "runs through every section. The cost section is about what those hours are currently worth in missed revenue. The gain section is about what they would be worth if redirected. The path section is about how we get from one to the other. Every slide is an answer to the same question: what are we going to do about those seven hundred and forty hours?",
            "answer": "thread"
        },
        {
            "before": "I want to be clear about what I am and am not going to claim today.\n\nI am going to make a series of",
            "after": "s — confident claims about what this investment will deliver. Some of those claims will feel strong. For each one, I am going to immediately show you what it means in practice — a real team, a real number, a real outcome. I am not asking you to take anything on faith.",
            "answer": "assertion"
        },
        {
            "before": "And at the end — before we talk about next steps — I am going to ask you to sit with one sentence.\n\nJust one.\n\nIt will be the single most important thing I want you to take away from this presentation. Not a number. Not a slide. A question.\n\nBut I am going to earn that question first.\n\nSo. Seven hundred and forty hours.\n\nLet me show you where they went — and where they could go instead.\n\n[PAUSE]\n\nThe",
            "after": "I want to use in this presentation comes from a company that looks a lot like ours. Same size, same market, same constraint. They made a decision twelve months ago. I want to show you exactly what happened after that — because the argument I am making today is not theoretical. It already happened somewhere else.",
            "answer": "hook"
        },
        {
            "before": "I will keep the pace moving through the setup — we all know the context. But I am going to slow down at one moment. When we get to the close, I am going to stop entirely.\n\nThat is the moment where",
            "after": "matters most. The point I have been building toward since I said that number. I want you to hear it in the silence — not in the middle of a slide transition.\n\nThat is the structure. Let us begin.",
            "answer": "pacing"
        }
    ]
},
  dealClinic: {
    "context": "Two salespeople are presenting the same product to the same executive audience: a CFO, a CEO, and a Head of Operations. The meeting is thirty minutes. Watch how their structural choices determine the outcome.",
    "transcript": [
        {
            "speaker": "CFO",
            "speakerColor": "purple",
            "text": "Thank you for coming in. We have thirty minutes — please take us through the proposal."
        },
        {
            "speaker": "Salesperson A",
            "speakerColor": "red",
            "text": "Thank you. I am going to walk you through our solution today. We will start with an overview of the platform, then look at how it integrates with your existing systems, then the ROI model, then implementation, and finally next steps. So — the platform is a workflow automation tool designed for sales teams. It integrates with most major CRM systems and reduces manual process time significantly. We have been operating for six years and have over 400 enterprise clients. Our NPS is 72."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson A — Opening and structure",
            "verdict": {
                "isGood": false,
                "explanation": "Weak. Salesperson A opens with a list of topics — overview, integration, ROI, implementation, next steps — which signals to an executive audience that this is a reference document, not an argument. The first substantive content is company history and NPS, neither of which creates a reason to listen or establishes a shared premise. By the end of the opening, the audience knows what the company is but has no idea why it matters to them, right now, in this specific situation. There is no hook, no premise, and no thread."
            }
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "Thank you. Let me start with a question. Last quarter, how much time did your sales team spend on tasks that were not actually selling? I am going to give you a number in a moment — but I want you to have your own estimate first, because the gap between what you expect and what the real number is tends to be the most useful starting point for this conversation. The number is seven hundred and forty hours. The reason this matters is not the time — it is the revenue equivalent. At your deal size and close rate, that is approximately three and a half deals that did not happen. This presentation is about what we do about that."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson B — Opening and structure",
            "verdict": {
                "isGood": true,
                "explanation": "Strong. Salesperson B opens with a rhetorical question that creates active engagement before any information is delivered. The hook — 740 hours — is specific, relevant, and immediately translated into business terms the audience cares about: not time, but revenue. The premise is implicit — sales productivity is the lever — and the audience has accepted it before it is stated. By the end of the opening, the audience knows exactly what this presentation is about and why it matters to them. The thread is established."
            }
        },
        {
            "speaker": "CEO",
            "speakerColor": "purple",
            "text": "That is a striking number. How confident are you in it?"
        },
        {
            "speaker": "Salesperson A",
            "speakerColor": "red",
            "text": "We are very confident — we have seen this across all our clients. The data is consistent. Most sales teams in your size range spend between 35 and 45 percent of their time on non-selling activity, which is exactly what we see here. The ROI on reclaiming that time is consistently strong."
        },
        {
            "speaker": "Verdict",
            "speakerColor": "purple",
            "text": "Salesperson A — Handling the challenge",
            "verdict": {
                "isGood": false,
                "explanation": "Weak. The CEO has challenged an assertion, and Salesperson A has responded with more assertions — we are very confident, the data is consistent, the ROI is consistently strong. These are claims about claims, and they make the original assertion less credible rather than more. The correct move is to immediately ground the assertion in a specific, concrete example: what this means in practice is."
            }
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "The number comes from a time-tracking analysis we ran with your Head of Operations last week — she can confirm the methodology. But let me show you what this means in practice, because I think the example makes it more useful than the number alone. There is a company similar to yours in size and market — same constraint, same growth target. Twelve months ago their number was 810 hours. Today it is 140. I have their permission to share what happened to their pipeline in that time. The reason I am showing you this instead of a projection is that it already happened — so we do not need to estimate whether the outcome is achievable."
        },
        {
            "speaker": "CEO",
            "speakerColor": "purple",
            "text": "That is useful context. Walk me through the close — what are you asking us to decide today?"
        },
        {
            "speaker": "Salesperson B",
            "speakerColor": "orange",
            "text": "Let me bring this back to where we started. Seven hundred and forty hours. We have shown you where they went, what they cost, and what a comparable company did about it. The single most important thing I want you to take away from this is not the ROI number — it is the decision window. Two companies in your sector started this in Q3. They are now three months into the compounding phase. So the question is not whether this investment makes sense — I think we have covered that. The question is whether you want to start reclaiming those hours in Q1 or in Q3. That is the actual decision in front of you today.",
            "verdict": {
                "isGood": true,
                "explanation": "Excellent close. Salesperson B uses let me bring this back to to reconnect the close to the opening thread, then delivers the emphasis moment — the single most important thing — with the pause and weight it requires. The close reframes the decision away from whether and toward when, using so the question is not whether. The thread, the hook, and the close are all connected to the same number. This is a complete persuasive structure."
            }
        }
    ]
},
  groupActivities: {
    "chooseResponse": {
        "instructions": "Work in pairs. For each presentation moment, choose the response that uses the better structural or emphasis technique. Discuss your reasoning before clicking.",
        "items": [
            {
                "customerLine": "You are about to present to a CFO and CEO. You have thirty minutes. Choose your opening.",
                "options": [
                    "Say: Thank you for your time today. I am going to walk you through our platform, the ROI model, the implementation plan, and proposed next steps. We have been operating for six years and have over 400 enterprise clients. Let me start with an overview of what we do.",
                    "Say: Let me start with a question. Last quarter, your sales team spent approximately seven hundred and forty hours on tasks that were not selling. The reason this matters is not the time — it is the three and a half deals that did not happen as a result. This presentation is about what we do about that.",
                    "Say: I know you have seen a lot of presentations like this, so I want to be efficient with your time. We are going to focus on three things: what the problem is, what our solution is, and what the ROI looks like. I will try to keep each section to ten minutes."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. A opens with a list of topics and company credentials — neither of which creates a reason to listen. C is better structured but still opens with a frame rather than a hook. B opens with a rhetorical question, delivers a specific number as the hook, immediately translates it into business impact, and states the thread in one sentence. By the end of B's opening, the audience has a reason to lean forward. By the end of A and C's openings, they do not."
            },
            {
                "customerLine": "A CEO challenges your assertion: How confident are you that the freed capacity actually translates to revenue?",
                "options": [
                    "Say: We are very confident — we have seen this across all of our clients. The data is consistent, and our average ROI recovery is within one quarter. I can share additional case studies if that would be useful.",
                    "Say: That is the right question to push on — and I want to earn the claim rather than just repeat it. What this means in practice is: a company similar to yours in size and market made this decision twelve months ago. Their non-selling hours dropped from 810 to 140. In the same period, their pipeline increased by 22% with the same headcount. The capacity went somewhere specific — I can show you exactly where.",
                    "Say: The assertion is based on the average across our client base, and the variance is low — over 90% of clients see the benefit within two quarters. I understand the scepticism, and the ROI model I am going to show you in the next slide will address it directly."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. When a confident assertion is challenged, the response is not more assertions — it is the concrete example that earns the original claim. A repeats the assertion with different words and offers more case studies as a future option. C defends the assertion with an aggregate statistic and defers the evidence to the next slide. B responds immediately with what this means in practice is and gives a specific, named outcome from a comparable company — which is more credible than any statistic because it already happened."
            },
            {
                "customerLine": "You have twenty minutes left in the presentation and you need to transition from the ROI section to the implementation section.",
                "options": [
                    "Say: So that is the ROI picture. Now let me move on to implementation, which is the next section of the presentation. Implementation is often the part that raises the most questions, so I want to make sure we have enough time to cover it properly.",
                    "Say: Let me bring this back to the seven hundred and forty hours for a moment, because I want to make sure the implementation section lands in the right context. The reason implementation matters is that it determines how quickly those hours start coming back. Implementation is not a cost — it is the path to the gain.",
                    "Say: The ROI model assumes a standard implementation timeline. Before I go through the implementation detail, are there any questions on the ROI section? I want to make sure we have covered everything before we move on."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. B uses let me bring this back to as a callback transition that reconnects the implementation section to the thread — the 740 hours. This prevents implementation from feeling like a separate topic and shows how every section serves the same argument. A announces the transition without connecting it to anything. C pauses for questions, which fragments the persuasive structure at a moment when momentum is building."
            },
            {
                "customerLine": "You are at the close of your presentation. The CEO says: What are you asking us to decide today?",
                "options": [
                    "Say: We are asking for approval to begin the onboarding process. The next step is a thirty-day implementation period, followed by a review at sixty days. The contract is for twelve months with an option to extend. I can send the full terms this afternoon.",
                    "Say: Before I get to next steps — the single most important thing I want you to take away from this is the decision window. Two companies in your sector started this in Q3. They are now in the compounding phase. So the question is not whether this investment makes sense — the question is whether you want to start reclaiming those seven hundred and forty hours in Q1 or in Q3. That is the decision in front of you today. The mechanics of how we do that are on the next slide.",
                    "Say: I want to summarise what we have covered before I answer that. We started with the cost — seven hundred and forty hours. We looked at the ROI. We walked through implementation. The case, I think, is strong. We are asking for a decision to proceed so that we can get the onboarding scheduled before the end of the quarter."
                ],
                "correctIndex": 1,
                "explanation": "B is correct. A jumps directly to contract mechanics, which answers the literal question but misses the persuasive opportunity. C summarises before the decision, which the audience does not need — they were in the presentation. B uses the single most important thing I want you to take away from this to create the emphasis moment, reconnects to the thread with the 740-hour callback, and closes with so the question is not whether — reframing the decision as a question of timing rather than approval. The next steps come after, not instead of, the close."
            }
        ]
    },
    "profileMatch": {
        "instructions": "Match each structural technique to the moment in the presentation where it belongs. Discuss your reasoning before clicking.",
        "profiles": [
            {
                "name": "The Opening",
                "description": "The first sixty seconds. The audience has not yet decided whether this presentation is worth their attention. They are assessing relevance — is this about me, or is this about the presenter? Nothing you say after this moment will be heard with the same openness as this moment.",
                "matchKey": "hook-and-premise"
            },
            {
                "name": "The Transition",
                "description": "You have just finished a dense section — ROI, data, or implementation detail. The audience has been processing information. They may have drifted. You need to bring them back to the core argument before they lose the connection between what they just heard and why it matters.",
                "matchKey": "callback-transition"
            },
            {
                "name": "The Close",
                "description": "You have presented the full argument. The audience has the information they need. Now you need to convert everything they heard into a decision frame — not a summary, not a list of next steps, but a single moment of clarity that tells them exactly what the choice is and makes them feel the weight of it.",
                "matchKey": "emphasis-and-reframe"
            }
        ],
        "options": [
            {
                "key": "hook-and-premise",
                "label": "Hook and premise",
                "description": "Start with a specific number or rhetorical question that creates immediate relevance, then establish the foundational claim the audience already accepts. By the end of the first minute, the audience should know exactly why this presentation matters to them and have already agreed with the premise everything else is built on."
            },
            {
                "key": "callback-transition",
                "label": "Let me bring this back to",
                "description": "Use let me bring this back to plus the thread — the specific number or idea you opened with — to reconnect the current section to the core argument. This prevents the presentation from feeling like a list of separate topics and reminds the audience that what they just heard is part of the same argument they accepted at the beginning."
            },
            {
                "key": "emphasis-and-reframe",
                "label": "The single most important thing + so the question is not whether",
                "description": "Deliver the single most important thing I want you to take away — in one sentence, after a pause — then use so the question is not whether to reframe the decision away from approval and toward timing. This is not a summary; it is the persuasive peak of the whole structure."
            }
        ]
    },
    "finishTheLine": {
        "instructions": "Complete each structural move using language from this lesson. Compare your completions before clicking for the suggested answer.",
        "items": [
            {
                "customerLine": "You are opening a thirty-minute executive presentation. You have one slide: a number.",
                "salespersonStart": "Let me start with a question. Last quarter, how much time did your sales team spend on tasks that were not actually selling? I want you to have your own estimate — because the gap between what you expect and what I am about to tell you",
                "suggestedCompletion": "is exactly what this conversation is about. The number is seven hundred and forty hours. The reason this matters is not the time — it is the revenue equivalent. At your average deal size and close rate, those hours represent approximately three and a half deals that did not happen. This presentation is about what we do about that."
            },
            {
                "customerLine": "A CEO has just challenged your claim that freed capacity translates to revenue.",
                "salespersonStart": "That is exactly the right question to push on — and I want to earn the claim rather than just repeat it. What this means in practice",
                "suggestedCompletion": "is: a company similar to yours — same size, same market, same constraint — made this decision twelve months ago. Their non-selling hours dropped from 810 to 140. In the same period, their pipeline increased by 22% with the same headcount. The capacity did not disappear — it went into the pipeline. I can show you exactly where."
            },
            {
                "customerLine": "You have just finished the ROI section and need to transition to implementation.",
                "salespersonStart": "Let me bring this back to",
                "suggestedCompletion": "the number we started with — seven hundred and forty hours — because I want the implementation section to land in the right context. The reason implementation matters is not cost or complexity. It is the timeline to getting those hours back. Implementation is the path to the gain, not an obstacle before it. So every question about timing and rollout is really a question about how quickly the seven hundred and forty hours start moving in the right direction."
            },
            {
                "customerLine": "You are at the close. The CEO asks: What are you asking us to decide?",
                "salespersonStart": "The single most important thing I want you to take away from this is not the ROI number — it is the decision window.",
                "suggestedCompletion": "Two companies in your sector started this in Q3. They are now three months into the compounding phase of the efficiency gain. The gap between their position and yours grows every month. So the question is not whether this investment makes sense — I think we have established that it does. The question is whether you want to start reclaiming those seven hundred and forty hours in Q1, or whether you want to revisit this in Q3 after two more quarters of the same cost. That is the actual decision in front of you today."
            }
        ]
    }
},
};

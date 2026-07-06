import { Lesson } from '@/types/lesson';

export const internalCommunications: Lesson = {
  slug: 'internal-communications',
  title: 'Internal Communications',
  subtitle: 'How to align stakeholders, cascade key messages, and write announcements that get buy-in before, during, and after a launch',
  level: 'B1-B2',
  description: "A great product launch, a major restructure, or a new strategic direction can succeed or fail based on how well it is communicated internally. Employees who understand what is happening and why are more likely to support it. Stakeholders who are briefed early are less likely to create obstacles. A well-written internal announcement builds momentum — a poorly written one creates confusion, rumours, and resistance. This lesson gives you the language to communicate internally with clarity, confidence, and the kind of transparency that builds trust.",
  heroImage: '/images/internal-communications-hero.png',

  vocabulary: [
    {
      word: 'STAKEHOLDER ALIGNMENT',
      partOfSpeech: 'noun',
      definition: "The process of making sure that the key people who are affected by or have influence over a decision understand it, agree with the approach, and are prepared to support it. Alignment does not mean everyone agrees with every detail — it means the important people are moving in the same direction and will not actively block progress.",
      example: "Marcus opened the pre-launch review: Before we announce the new product strategy to the company, we need stakeholder alignment from four groups — the commercial leadership team, the product council, the regional general managers, and the investor relations team. Riley asked: What does alignment mean in this context? Marcus replied: It means each group has been briefed on the strategy, their specific questions have been answered, and they are prepared to communicate it consistently to their own teams. Dana added: And the order matters. Commercial leadership before regional managers — they need to understand the strategy before they are asked to cascade it.",
      imageSlug: '/images/stakeholder-alignment.png',
    },
    {
      word: 'TOWN HALL',
      partOfSpeech: 'noun',
      definition: "A large all-company or all-team meeting where leadership shares important news, strategic updates, or major decisions with employees — and usually takes questions. Town halls are used to communicate significant changes, share results, or build a sense of shared direction. They work best when they are honest, two-way, and not just a one-way presentation.",
      example: "Riley proposed: We should hold a town hall within 48 hours of the external announcement. Marcus agreed: Yes — employees should not find out about a major strategic shift from a press release or a news alert. Dana added: The town hall needs three things: a clear explanation of what is changing and why, honest acknowledgment of what it means for different teams, and a genuine Q&A session — not just pre-selected questions. If people feel the meeting was managed to avoid difficult questions, the trust damage is worse than if we had not held the meeting at all.",
      imageSlug: '/images/town-hall.png',
    },
    {
      word: 'KEY MESSAGE',
      partOfSpeech: 'noun',
      definition: "The core piece of information or idea that a communication is designed to leave with the audience. A key message is the one sentence a reader or listener should remember after everything else is forgotten. In internal communications, the key message needs to be clear, relevant to the audience, and consistent across all channels.",
      example: "Dana presented the key message framework: We have three audiences for this announcement — employees, managers, and senior leadership. The key message for employees is: this change is an opportunity to grow and the company is committed to supporting everyone through the transition. The key message for managers is: your job is to reassure your teams and escalate concerns quickly. The key message for senior leadership is: we need to communicate consistently — any deviation from the agreed narrative will create confusion.",
      imageSlug: '/images/internal-communications-key-message.png',
    },
    {
      word: 'CASCADE',
      partOfSpeech: 'noun / verb',
      definition: "The process of passing information down through an organisation — from senior leadership to middle management to individual teams. A cascade ensures that everyone receives the same message in a structured way. It fails when the message gets changed or lost at each level, or when some people receive it much later than others.",
      example: "Marcus explained the comms plan: The cascade runs in three stages. Stage one — the executive team is briefed today at 9am. Stage two — all people managers receive a detailed briefing pack at 11am, with talking points for their team conversations. Stage three — managers hold team conversations between 2pm and 5pm. Riley asked: What if a manager's team asks a question the manager cannot answer? Marcus replied: They escalate immediately to HR or their director. The cascade only works if managers feel supported — not left alone with difficult questions.",
      imageSlug: '/images/cascade.png',
    },
    {
      word: 'BUY-IN',
      partOfSpeech: 'noun',
      definition: "The active support and commitment of the people whose cooperation is needed for a plan or change to succeed. Getting buy-in means more than informing people — it means helping them understand the reasoning well enough that they are willing to advocate for the plan, not just accept it. Without buy-in, people comply on the surface but resist in practice.",
      example: "Riley observed: The biggest risk to this launch is not the external market — it is internal resistance from the sales team who feel the new product competes with accounts they have already closed. Marcus replied: Which means we need to get buy-in from sales leadership before the announcement. Dana added: Buy-in from sales leadership requires two things — understanding the commercial rationale, and having their specific concerns heard and addressed. If we brief them properly before the announcement, they become advocates. If we announce without briefing them, they become the most vocal internal critics.",
      imageSlug: '/images/internal-communications-buy-in.png',
    },
    {
      word: 'BRIEFING',
      partOfSpeech: 'noun',
      definition: "A structured communication that gives a specific audience the information they need to understand a situation, make a decision, or communicate to others. A good briefing is concise, relevant to the audience, and includes Q&A so that concerns can be addressed before the information is cascaded further.",
      example: "Dana outlined the briefing schedule: Three separate briefings before the public announcement. The first — a 30-minute executive briefing for the CEO and C-suite at 8am. The second — a 45-minute manager briefing for all people managers at 10am, including talking points and FAQs. The third — a 20-minute investor briefing at 2pm. Marcus asked: Why different formats and lengths? Dana replied: Each audience has different questions and different responsibilities after the briefing. Executives need the strategic rationale. Managers need the operational detail and the tools to have team conversations. Investors need the financial implications and the messaging they should use with the market.",
      imageSlug: '/images/briefing.png',
    },
    {
      word: 'ANNOUNCEMENT',
      partOfSpeech: 'noun',
      definition: "A formal communication to a group of people that shares important news, decisions, or changes. An internal announcement is different from a press release — it should feel personal, direct, and written for the specific audience, not for the general public.",
      example: "Riley reviewed the draft internal announcement and raised a concern: This reads like a press release, not an announcement to our own team. Marcus asked: What is the difference? Riley replied: A press release is written for the public — it is formal, optimistic, and avoids uncertainty. An announcement to our team should be honest about the challenges, explain the reasoning behind the decision, acknowledge the impact on people, and give them a clear next step. Dana added: The people reading this have been with the company for years. They deserve a message that treats them like adults — not like external investors who need to be managed.",
      imageSlug: '/images/internal-communications-announcement.png',
    },
    {
      word: 'LAUNCH',
      partOfSpeech: 'noun / verb',
      definition: "The moment when something new is introduced — a product, a campaign, a strategy, or a change. In internal communications, a launch is a carefully planned event that requires preparation, timing, and follow-through. A well-executed internal launch builds excitement and clarity. A poorly executed one creates confusion and resistance.",
      example: "Marcus set the launch timeline: Internal launch on Tuesday — briefings from 8am, cascade from 2pm, town hall at 4pm. External launch on Wednesday — press release at 6am, social media at 7am, media interviews from 9am. Dana asked: What if something leaks before Tuesday? Marcus replied: We have a holding statement ready and a decision tree for the communications team. If it leaks, we accelerate the internal cascade immediately. Employees should never find out about something this significant from an external source — that is the one outcome we are working hardest to prevent.",
      imageSlug: '/images/internal-communications-launch.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WE NEED TO GET BUY-IN FROM...',
      definition: "A phrase for identifying the specific group or individual whose active support is required before a plan can move forward. Always name the group and explain what getting buy-in requires — information, involvement, addressing concerns, or formal sign-off.",
      example: "Riley said: We need to get buy-in from the sales leadership team before we can announce the new pricing model. Without their support, the announcement will be immediately undermined by their reaction. Marcus asked: What do they need from us? Riley replied: Three things. First, a clear explanation of why pricing is changing. Second, an honest answer to the question of how it affects their existing deals. Third, a tool — a script or a talking point — that gives them a confident way to explain it to their accounts. Dana added: And ideally, we involve them in shaping the talking points — not just telling them what to say. People are more likely to advocate for a message they helped build.",
      imageSlug: '/images/we-need-to-get-buy-in-from.png',
      inAction: 'We need to get buy-in from the regional directors before this goes to the full company — they are the ones who will be asked about it first, and they need to be advocates, not bystanders.',
      register: "Neutral — Forge (B2B HR platform, product launch): launch checklist reads we need to get buy-in from the customer success team before the pricing announcement — they will receive the first customer reactions and need to be fully briefed and confident in the rationale. | Kova (fintech, rebrand planning): comms plan reads we need to get buy-in from the engineering leads before we announce the brand refresh — the new product naming affects the codebase and we do not want to create technical confusion post-launch. | Ember (subscription service, strategy shift): leadership review reads we need to get buy-in from the board before we share the new strategy with all-staff — the town hall should not happen before the board is aligned.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — product launch comms planning', imageSlug: '/images/visual-examples/forge-buy-in-cs-team.png', caption: 'We need to get buy-in from the customer success team before the pricing announcement — they will receive first customer reactions and need to be confident in the rationale.', aspectRatio: '16/9' },
        { brand: 'Ember', context: 'Subscription service — strategy shift planning', imageSlug: '/images/visual-examples/ember-buy-in-board.png', caption: 'We need to get buy-in from the board before we share the new strategy with all-staff — the town hall should not happen before the board is aligned.', aspectRatio: '4/5' },
      ],
      inContext: "Dana had the stakeholder map on screen. We need to get buy-in from three groups in sequence before this goes to the company, she said. First the board, then the senior leadership team, then the people managers. Marcus: And in that order. The cascade only works if each level is fully briefed and aligned before they are asked to brief the next level. Riley: If we short-circuit the sequence and go to all-staff before people managers are ready, we undermine their authority and leave them in a terrible position.",
    },
    {
      phrase: 'THE KEY MESSAGE FOR THIS AUDIENCE IS...',
      definition: "A phrase for defining the single most important thing a specific audience needs to take away from a communication. Always tailor the key message to the audience's concerns, responsibilities, and relationship to the change. Different audiences need different key messages about the same event.",
      example: "Dana presented: We have four audiences, so we have four key messages. The key message for the all-staff announcement is: this change gives the company a stronger foundation for growth and every team plays a role in making it work. The key message for the people managers briefing is: your job is to be a steady, honest voice for your team — here is what you say if they ask X. The key message for the sales team is: this does not affect existing deals and here is exactly what to say if a client asks. And the key message for the board is: the strategic rationale is sound, the risk is managed, and the communications plan is tight.",
      imageSlug: '/images/the-key-message-for-this-audience-is.png',
      inAction: 'The key message for this audience is: nothing is changing about your day-to-day work — and the overall change is a sign of the company growing in a direction that creates more opportunity for everyone.',
      register: "Neutral — Flux (SaaS, all-staff announcement): comms framework reads the key message for all staff is that the acquisition creates more product capability and career opportunity, not fewer. | Kova (fintech, restructure): manager briefing reads the key message for people managers is that their teams should bring concerns to them first — and we have a clear escalation path so no question goes unanswered. | Halo (DTC brand, marketing strategy shift): senior leadership comms reads the key message for the commercial team is that the new direction protects margin while growing volume — these are not in conflict.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS company — all-staff acquisition announcement', imageSlug: '/images/visual-examples/flux-key-message-acquisition.png', caption: 'The key message for all staff is that the acquisition creates more product capability and career opportunity — not fewer.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — restructure manager briefing', imageSlug: '/images/visual-examples/kova-key-message-managers.png', caption: 'The key message for people managers: their teams should bring concerns to them first — and there is a clear escalation path so no question goes unanswered.', aspectRatio: '4/5' },
      ],
      inContext: "Riley walked through the audience framework. The key message for this audience is very specific, she said. Employees do not need the full strategic picture — they need to know what is changing for them, whether their job is secure, and who they talk to if they have questions. Dana: Which is different from the key message for leadership, who need the strategic rationale, the risk picture, and the board-level implications. Marcus: Different messages for different audiences is not inconsistency — it is relevance. Everyone gets the truth. Not everyone gets the same level of detail.",
    },
    {
      phrase: 'THE ANNOUNCEMENT WILL BE CASCADED TO...',
      definition: "A phrase for describing how a communication will be distributed through the organisation — level by level, in a structured sequence. Always specify who cascades to whom and in what order. The cascade sequence determines whether employees receive the news from their manager (good) or from a leak, a news alert, or a colleague in another team (bad).",
      example: "Marcus outlined the cascade plan: The announcement will be cascaded to the organisation in three stages. Stage one — the executive team is briefed at 8am and given the full strategic context. Stage two — people managers are briefed at 10am with a briefing pack, talking points, and a live Q&A. Stage three — managers have team conversations between 2pm and 5pm using the materials we have provided. Riley asked: What if a team conversation cannot happen until the next day? Dana replied: That is acceptable if the manager communicates immediately that a conversation is coming and confirms the timing. The risk is not a 12-hour delay — the risk is silence, which employees interpret as uncertainty or something being hidden.",
      imageSlug: '/images/the-announcement-will-be-cascaded-to.png',
      inAction: 'The announcement will be cascaded to all 400 employees via their direct managers before it is shared externally — internal audiences hear it first, always.',
      register: "Neutral — Forge (B2B HR platform, product launch): launch comms plan reads the announcement will be cascaded to all people managers at 9am Friday, with team conversations to follow before the external press release goes live at noon. | Ember (subscription, restructure): comms plan reads the announcement will be cascaded to the four regional teams in sequence — Europe first, then North America, then APAC, then Rest of World — timed to align with local working hours. | Velo (B2B fleet SaaS, strategy update): all-staff comms plan reads the announcement will be cascaded to team leads first at the Monday morning leadership call, with a full company town hall at 3pm the same day.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — product launch comms planning', imageSlug: '/images/visual-examples/forge-cascade-managers.png', caption: 'The announcement will be cascaded to all people managers at 9am Friday, with team conversations to follow before the external press release goes live at noon.', aspectRatio: '16/9' },
        { brand: 'Velo', context: 'B2B fleet SaaS — strategy update comms plan', imageSlug: '/images/visual-examples/velo-cascade-town-hall.png', caption: 'The announcement will be cascaded to team leads first at the Monday leadership call, with a full company town hall at 3pm the same day.', aspectRatio: '4/5' },
      ],
      inContext: "Dana had the cascade sequence mapped. The announcement will be cascaded to each level in the organisation before it becomes public, she said. Starting with the board on Friday morning, then senior leadership Friday afternoon, then all people managers Monday morning. Marcus: The external announcement is Monday afternoon. Every employee should know before a journalist does. Riley: The cascade is also the trust test. If employees find out from LinkedIn, they know we did not trust them enough to tell them first. That damage takes a long time to repair.",
    },
    {
      phrase: 'WE ARE HOLDING A TOWN HALL TO...',
      definition: "A phrase for introducing the purpose of an all-company or all-team meeting. Always specify what the town hall is designed to achieve — whether that is sharing information, answering questions, building confidence, or creating two-way dialogue — not just announcing that one is happening.",
      example: "Marcus announced: We are holding a town hall on Thursday at 4pm to give every employee a direct opportunity to hear the strategy from me and the leadership team, ask their real questions, and get honest answers. Riley added: The format will be a 20-minute presentation, followed by 30 minutes of live Q&A. All questions are welcome — there are no off-limits topics, but there are some things we cannot share publicly yet and we will say so clearly rather than deflecting. Dana stressed: The Q&A is the most important part. If the town hall is just a presentation, people do not feel heard. If people do not feel heard, they interpret the town hall as management trying to manage them rather than communicate with them.",
      imageSlug: '/images/we-are-holding-a-town-hall-to.png',
      inAction: 'We are holding a town hall to give people a direct voice in the Q&A — not to deliver a polished presentation, but to have an honest conversation.',
      register: "Neutral — Flux (SaaS, post-acquisition): comms plan reads we are holding a town hall to address the questions that have emerged in the 48 hours since the acquisition announcement — the CEO will answer questions live, without a script. | Ember (subscription, restructure): company announcement reads we are holding a town hall to explain the restructure in detail and give every employee the opportunity to ask the questions that matter most to them. | Kova (fintech, Q3 results): leadership update reads we are holding a town hall to share Q3 results transparently — including the areas where we fell short and what we are doing about them.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS company — post-acquisition employee communications', imageSlug: '/images/visual-examples/flux-town-hall-acquisition.png', caption: 'We are holding a town hall to address questions that emerged since the acquisition announcement — the CEO will answer questions live, without a script.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — Q3 results all-company meeting', imageSlug: '/images/visual-examples/kova-town-hall-results.png', caption: 'We are holding a town hall to share Q3 results transparently — including the areas where we fell short and what we are doing about them.', aspectRatio: '4/5' },
      ],
      inContext: "Riley had the draft comms plan on screen. We are holding a town hall on Thursday, she said. Marcus looked at the format: 45 minutes — 30 presentation, 15 Q&A. Riley: I would reverse that. 20 presentation, 25 Q&A. The presentation should be a tight summary of what we announced, why we made the decision, and what it means for different teams. The rest of the time belongs to the employees. Dana: And no pre-selected questions. People know when questions have been chosen to make leadership look good. It destroys the credibility of the whole meeting.",
    },
    {
      phrase: 'THE INTERNAL LAUNCH ANNOUNCEMENT SHOULD...',
      definition: "A phrase for setting standards or expectations for how an internal announcement is written and structured. Used in communications planning, brief review, and content editing to ensure the announcement serves its purpose for the specific internal audience.",
      example: "Dana reviewed the draft and summarised: The internal launch announcement should do three things. First — explain the change in plain language without jargon. Second — acknowledge honestly what is changing for employees, including things that might be difficult. Third — give a clear next step for each group. Riley added: It should also feel different from the external press release. The external announcement is written for investors and journalists. The internal announcement is written for colleagues — the people who have built this business and whose daily work makes it possible. Marcus: Which means a warmer tone, more honesty, and more of the why behind the decision.",
      imageSlug: '/images/the-internal-launch-announcement-should.png',
      inAction: 'The internal launch announcement should lead with what changes for employees — not with what is good for the business, because the employees are the people who will make it good for the business.',
      register: "Neutral — Forge (B2B HR, product launch): comms brief reads the internal launch announcement should arrive in inboxes before the external press release goes live — internal audiences first, always. | Velo (B2B fleet, strategy update): communications review reads the internal launch announcement should be written by the CEO, not the comms team — authenticity matters more than polish when the news is significant. | Bloom (DTC wellness, rebrand): all-staff comms plan reads the internal launch announcement should explain why the brand is changing, not just what is changing — the why is what builds buy-in.",
      visualExamples: [
        { brand: 'Velo', context: 'B2B fleet SaaS — strategy update communications review', imageSlug: '/images/visual-examples/velo-announcement-ceo.png', caption: 'The internal launch announcement should be written by the CEO, not the comms team — authenticity matters more than polish when the news is significant.', aspectRatio: '16/9' },
        { brand: 'Bloom', context: 'DTC wellness — rebrand all-staff comms plan', imageSlug: '/images/visual-examples/bloom-announcement-why.png', caption: 'The internal launch announcement should explain why the brand is changing, not just what is changing — the why is what builds buy-in.', aspectRatio: '4/5' },
      ],
      inContext: "Riley was reviewing the draft announcement. The internal launch announcement should not read like a press release, she said. This version does. Marcus looked at the opening paragraph: it opens with the company vision, then the market opportunity, then — in paragraph four — what is actually changing. Dana: An internal audience does not read past paragraph two if the first paragraph does not speak to them. Start with what they need to know: what is changing, when, and what it means for them. The strategic context is paragraph two at most.",
    },
    {
      phrase: 'TO ENSURE STAKEHOLDER ALIGNMENT, WE SHOULD...',
      definition: "A phrase for proposing a specific action that will bring key stakeholders into agreement before a decision is announced or implemented. Used in planning sessions and comms reviews to identify the steps needed to prevent opposition, confusion, or inconsistent messaging.",
      example: "Dana proposed: To ensure stakeholder alignment before the launch, we should hold individual briefings with the four regional general managers this week — not a group call, individual calls — so that each person can ask their specific questions without the group dynamic. Marcus agreed: The regional managers are the ones who will get the first questions from their teams. If they are not aligned, we have four different narratives in four regions within 24 hours of the announcement. Riley added: And alignment does not mean they need to agree with every detail — it means they understand the decision, they have had their concerns heard, and they are prepared to communicate consistently.",
      imageSlug: '/images/to-ensure-stakeholder-alignment.png',
      inAction: 'To ensure stakeholder alignment, we should brief the product council before the commercial team — product needs to understand the strategy before sales starts receiving client questions about it.',
      register: "Neutral — Kova (fintech, board update): governance review reads to ensure stakeholder alignment, we should present the revised strategy to the board in a working session before the formal board meeting — so the formal meeting is a confirmation rather than a debate. | Forge (B2B HR, major feature release): product comms plan reads to ensure stakeholder alignment, we should send the feature release brief to all customer-facing teams 48 hours before go-live — customer success, sales, and support all need to be ready to respond. | Ember (subscription, restructure): comms planning reads to ensure stakeholder alignment, we should create a single source of truth document — a Q&A or FAQ — that all managers use so the story is consistent across the organisation.",
      visualExamples: [
        { brand: 'Kova', context: 'Fintech — board governance and strategy alignment', imageSlug: '/images/visual-examples/kova-alignment-board-session.png', caption: 'To ensure stakeholder alignment, we should present the revised strategy in a working session before the formal board meeting — so the meeting is a confirmation, not a debate.', aspectRatio: '16/9' },
        { brand: 'Forge', context: 'B2B HR platform — major feature release comms', imageSlug: '/images/visual-examples/forge-alignment-customer-facing.png', caption: 'To ensure stakeholder alignment, we should send the feature release brief to all customer-facing teams 48 hours before go-live — sales, CS, and support all need to be ready.', aspectRatio: '4/5' },
      ],
      inContext: "Riley had the alignment checklist open. To ensure stakeholder alignment before this goes wider, we should complete four conversations this week, she said. Marcus, the board. You three regional leads. Me, the product council. Dana, the commercial leadership. Marcus: And we reconvene Friday to confirm everyone is aligned before the announcement goes to all-staff Monday. Dana: The cascade works if the foundations are solid. If any of those four conversations surfaces a fundamental objection, we need to know before Monday — not after.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We have a major product strategy update to communicate to the company next week. This is the most significant internal [[announcement:a formal communication sharing important news or changes]] we have made in three years. I want us to get this right. Dana, walk us through the proposed comms plan.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "The plan has four components. First — [[stakeholder alignment:making sure key people understand and will support a decision before it is announced]] with leadership and the board before anything goes to the wider company. Second — a structured [[cascade:the process of passing information down through the organisation level by level]]. Third — a [[town hall:a large all-company meeting where leadership shares news and takes questions]]. Fourth — a written internal [[announcement:formal written communication to employees]] that lands before the external press release.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good structure. Let me ask about the cascade first. Who is in the sequence and in what order?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "The announcement will be cascaded to the organisation in three stages. Executive team today. All people managers Monday morning, with a full [[briefing:a structured communication giving an audience the information they need]] pack and talking points. All staff via their managers Monday afternoon — before the external announcement goes live Monday evening.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. No employee should read this on LinkedIn before hearing it from their manager. That is non-negotiable. Riley — what about [[buy-in:the active support of people whose cooperation is needed for something to succeed]]? Who do we need to bring on side specifically?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "We need to get buy-in from the sales leadership team before the all-staff announcement. They are going to receive the most difficult questions — from their teams and from clients. If they are not fully briefed and confident in the rationale, they will undermine the message without intending to.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Agreed. To ensure [[stakeholder alignment:the process of getting key people moving in the same direction]], we should hold individual calls with each regional sales director this week — not a group call. Individual calls mean people can ask their real questions without worrying about how it looks in front of peers.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Now the [[key message:the one core idea an audience should remember from a communication]]. What is the headline for employees?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "The key message for this audience is: this strategy gives us a stronger foundation for growth and creates more opportunity for everyone in this company. We are building something bigger, and you are part of it.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And for people managers — the key message is: your job is to be a steady, honest voice for your team. You do not need to have all the answers. Your job is to be present, to listen, and to escalate concerns quickly.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. Now the town hall. What is the format?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "We are holding a town hall on Monday at 4pm to give everyone a direct opportunity to ask their real questions and get honest answers. 20 minutes of presentation, 30 minutes of live Q&A. No pre-selected questions. Marcus, you chair it.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And the written announcement — the internal launch announcement should arrive in every inbox before the town hall, so people have read it and can come with their questions ready. It should not read like a press release. Warm tone, plain language, honest about what is changing.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Agreed. Internal communications done well is one of the most powerful tools we have for building trust and moving fast. Done badly, it creates the kind of confusion and resistance that takes months to undo. Let us make this one count.",
    },
  ],

  matchingExercise: [
    { word: 'stakeholder alignment', definition: 'making sure key people understand a decision and are prepared to support it consistently' },
    { word: 'town hall', definition: 'a large all-company meeting where leadership shares news and takes live questions' },
    { word: 'key message', definition: 'the single most important idea an audience should remember after a communication' },
    { word: 'cascade', definition: 'passing information down through the organisation level by level in a structured sequence' },
    { word: 'buy-in', definition: 'the active support of people whose cooperation is needed for a plan to succeed' },
    { word: 'briefing', definition: 'a structured communication giving a specific audience the information and tools they need' },
    { word: 'announcement', definition: 'a formal communication sharing important news, decisions, or changes with a group' },
    { word: 'launch', definition: 'the planned introduction of something new — a product, campaign, or strategy — with preparation and follow-through' },
  ],

  fillBlankExercise: [
    { before: 'We need to get', after: 'from the sales leadership team before we announce to the wider company.', answer: 'buy-in' },
    { before: 'The', after: 'for the all-staff audience is: this change creates more opportunity for everyone.', answer: 'key message' },
    { before: 'The announcement will be', after: 'to all 400 employees via their people managers before it is shared externally.', answer: 'cascaded' },
    { before: 'We are holding a', after: 'on Monday at 4pm to give every employee a direct opportunity to ask questions and get honest answers.', answer: 'town hall' },
    { before: 'To ensure stakeholder', answer: 'alignment', after: ', we should hold individual briefings with each regional director this week.' },
    { before: 'The internal', after: 'should arrive in every inbox before the town hall so employees can come with their questions ready.', answer: 'announcement' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Dana say is the risk if silence follows a delayed team conversation in the cascade?',
      options: ['Employees will ask their manager to find out what is happening', 'Employees will interpret the silence as uncertainty or something being hidden', 'The cascade will need to restart from the beginning with a new sequence'],
      correctIndex: 1,
    },
    {
      question: "What does Riley say is the critical difference between the internal announcement and the external press release?",
      options: ['The internal announcement is shorter and uses bullet points rather than paragraphs', 'The internal announcement should feel warm, honest, and written for colleagues — not for investors or journalists', 'The internal announcement needs legal approval while the press release does not'],
      correctIndex: 1,
    },
    {
      question: 'Why does Dana recommend individual calls with regional sales directors rather than a group call?',
      options: ['Group calls are technically unreliable and frequently have audio problems', 'Individual calls allow people to ask their real questions without worrying about how it looks in front of peers', 'Individual calls are faster and more efficient than a group call when the message is the same for everyone'],
      correctIndex: 1,
    },
    {
      question: 'What does Marcus say is non-negotiable about the cascade sequence?',
      options: ['Every announcement must include a written FAQ document and a 24-hour response window', 'No employee should read this on LinkedIn before hearing it from their manager', 'The town hall must happen before the cascade begins so all employees receive the same information simultaneously'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Think about a time when you found out about a major change at work or school from someone other than the person who should have told you — a colleague, a news article, or social media. How did it make you feel about the organisation? And how could they have handled the communication better?',
      "Have you ever had to explain a difficult decision to a team or a group of people? What was the hardest part — knowing what to say, choosing the right words, or managing people's reactions?",
      'When a company makes a big change — a new strategy, a restructure, or a brand refresh — what do you think employees most want to hear from leadership? What kinds of communication make people feel informed and respected, and what kinds make them feel managed or kept in the dark?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'The cascade _____ in three stages — executive briefing, manager briefing, and all-staff team conversations.',
        options: ['runs', 'run', 'is running'],
        correctIndex: 0,
        explanation: "Simple present ('runs') is correct for describing a process or plan that is defined and fixed — how the cascade is structured or will work. 'The cascade runs in three stages' describes the design of the process. 'Run' would be the plural form: 'the cascades run' — but 'the cascade' (singular) takes 'runs'. 'Is running' (present continuous) would suggest the cascade is actively in progress right now, not that this is how it is structured. When describing a planned sequence, process, or structure, simple present is standard in formal communications: 'the process runs', 'the plan covers', 'the announcement goes to'.",
      },
      {
        sentence: 'People managers _____ a detailed briefing pack at 10am, including talking points and a FAQ document.',
        options: ['will receive', 'receive', 'are receiving'],
        correctIndex: 0,
        explanation: "'Will receive' is the most appropriate choice for a future planned event in a professional planning context. It is clear, direct, and unambiguous about the future timing: '10am' is a future point. 'Receive' (simple present) can also describe a future event in a planned schedule — 'the train leaves at 6am', 'managers receive the briefing at 10am' — and is often used in timetables and plans. In a communications plan document, both 'will receive' and 'receive' are used. 'Are receiving' (present continuous for future) describes a future arrangement that is already confirmed — also grammatically possible, but less formal than 'will receive' in a written plan.",
      },
      {
        sentence: 'Getting buy-in means more than informing people — it means helping them understand the reasoning _____ enough that they advocate for the plan.',
        options: ['well', 'good', 'fully'],
        correctIndex: 0,
        explanation: "'Well' is the adverb form needed to modify the verb phrase 'understand' — 'understand well enough'. 'Good' is an adjective — it modifies nouns: 'a good plan', 'good reasoning'. You cannot say 'understand good enough' — an adjective cannot modify a verb. 'Fully' means completely or entirely — 'understand fully' is grammatically correct and natural, but 'fully enough' is awkward. 'Well enough' is the established collocation for this meaning: 'know well enough to', 'understand well enough to', 'speak well enough to'. When the meaning is 'to a sufficient degree', 'well enough' is the standard phrase.",
      },
      {
        sentence: 'The announcement _____ to the executive team before it reaches the wider organisation.',
        options: ['should be cascaded', 'should cascade', 'should have cascaded'],
        correctIndex: 0,
        explanation: "'Should be cascaded' is the correct passive construction. The announcement is the thing that receives the action (being cascaded) — it is not doing the cascading itself. The passive is appropriate when we focus on the thing being communicated, not on who is doing the communicating: 'the announcement should be cascaded' means 'someone should cascade the announcement'. 'Should cascade' would mean the announcement itself is actively cascading — which is illogical. 'Should have cascaded' is the past form of advice or criticism: 'they should have cascaded it earlier' — it refers to a past situation, not a current plan.",
      },
      {
        sentence: 'The internal announcement should feel _____ different from the external press release.',
        options: ['clearly', 'distinctly', 'distinct'],
        correctIndex: 1,
        explanation: "'Distinctly' is an adverb that modifies the adjective 'different': 'distinctly different' is a natural collocation meaning noticeably or markedly different. 'Clearly' is also an adverb and could modify 'different': 'clearly different' means obviously different. Both 'clearly different' and 'distinctly different' are grammatically correct — 'distinctly' is slightly more formal and precise in tone. 'Distinct' is an adjective — it modifies nouns: 'a distinct difference', 'a distinct tone'. You cannot say 'should feel distinct different' — an adjective cannot modify another adjective. You need an adverb to modify 'different'.",
      },
      {
        sentence: '_____ the briefing pack has been sent, managers should confirm they have received it and are ready to have team conversations.',
        options: ['Once', 'Since', 'While'],
        correctIndex: 0,
        explanation: "'Once' means 'as soon as', 'when the condition is met': 'once it has been sent' — at the moment that sending is complete. This is the precise timing relationship: the confirmation should happen immediately after the sending is confirmed. 'Since' means 'from a point in the past until now' or 'because': 'since the briefing pack was sent last month, managers have been preparing' (temporal) or 'since you asked' (causal). Neither fits the intended meaning here. 'While' means 'during the time that', describing simultaneous action: 'while the pack is being sent' — but you cannot confirm receipt while something is still being sent. 'Once' is the only conjunction that describes sequential completion: 'once X is done, do Y'.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'We are announcing a restructure to the company. Can we just send one email to everyone at once?'",
          options: [
            "Yes — it is more efficient and ensures everyone receives exactly the same message at the same time, which avoids rumours.",
            "For a major restructure, sending one email to all staff simultaneously without prior cascade is high risk. The people most affected — the managers who will need to support their teams through this — will read the announcement at the same time as their teams, with no preparation, no talking points, and no answers to the questions their teams will immediately ask. The cascade exists to prevent that scenario. Managers should be briefed first, with time to prepare and ask their own questions. Then a manager-to-team conversation happens in person or by call, with the written announcement as a follow-up reference — not the primary channel. For a restructure especially, human contact before email is almost always the right approach.",
            "A single email is fine as long as you send it after 5pm, so people have time to process it before the next working day.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it identifies the specific failure mode of the all-at-once email approach (managers unprepared), explains the purpose of the cascade, and recommends human contact as the primary channel. Option A is the most common mistake in change communications — the logic of 'same message at the same time' prioritises consistency over support, and it leaves managers in an impossible position. Option C is an old advice that HR practitioners have largely moved away from — timing alone does not solve the absence of preparation and support.",
        },
        {
          customerLine: "'Our town hall Q&A always feels awkward — people do not ask real questions. How do we fix it?'",
          options: [
            "The most effective fix is to invite questions in advance via a digital channel — then leadership can prepare polished, comprehensive answers to the best ones.",
            "Awkward Q&As usually signal one of two things — either employees do not feel safe asking real questions, or they do not believe they will get honest answers. Both are trust problems that cannot be fixed by better facilitation alone. Some things that genuinely help: explicitly naming the Q&A as the most important part of the town hall, not a formality. Having the most senior person in the room model vulnerability — asking 'what are you most worried about?' rather than waiting for questions. Using anonymous submission tools so people can ask without identifying themselves. And when a difficult question is asked, answering it honestly — even if the honest answer is 'I do not know yet and here is when we will know'. The worst possible outcome is a 'managed' Q&A where people can see the questions have been pre-selected.",
            "You could split the town hall into smaller group sessions — people are more comfortable asking questions in smaller groups than in large all-company meetings.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it correctly diagnoses the root cause (trust), explains what builds a psychologically safe Q&A, and names the specific behaviors that help. It also correctly identifies the most damaging failure mode: the managed Q&A. Option A addresses a symptom, not the cause — advance questions may produce polished answers but they are the opposite of spontaneous honesty. Option C is not wrong (smaller sessions are effective for some purposes) but it sidesteps the town hall format rather than fixing it.",
        },
        {
          customerLine: "'Why do we need different key messages for different audiences? Can we not just say the same thing to everyone?'",
          options: [
            "Yes — one consistent message across all audiences is simpler to manage and prevents anyone feeling they have received special or different information.",
            "The core facts should be the same for everyone — that is consistency. But the same core facts will be most meaningful to different audiences if they are framed in terms of what each audience needs to know and act on. An employee needs to know what is changing for their day-to-day work and who to speak to with concerns. A manager needs to know how to support their team and what to do if someone raises a concern they cannot answer. A board member needs to know the strategic rationale and the financial implications. These are not different stories — they are the same story told from the angle that is most useful to each audience. Giving everyone identical information regardless of their role is not fairness — it is ignoring that different people have different responsibilities and different questions.",
            "You can use the same message if you keep it very simple — just make sure it is so broad that it is relevant to everyone.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it explains the distinction between factual consistency (same facts for everyone) and relevance (framed for each audience's specific needs and responsibilities). This is the central principle of audience-led communication. Option A conflates consistency with uniformity — they are different things. Option C is wrong — making a message so broad that it is relevant to everyone typically means it is meaningful to no one. The goal of communication is to be specific and relevant, not safely vague.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the internal communications planning meeting extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "The cascade will run in three stages — executive briefing, manager briefing, and all-staff team conversations." },
        { speaker: 'Riley', text: "Each of the three stages have its own briefing pack, talking points, and FAQ document tailored to that audience." },
        { speaker: 'Dana', text: "The key message for the all-staff announcement need to land clearly before the town hall — not for the first time during it." },
        { speaker: 'Marcus', text: "Agreed. The announcement should arrive in inboxes on Monday morning, and the town hall should follow that afternoon." },
        { speaker: 'Riley', text: "We also need to make sure that the people managers, which are the most important cascade link, feel supported and prepared." },
        { speaker: 'Dana', text: "A briefing pack, a live Q&A call, and a dedicated channel for escalation will give them what they need." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Each of the three stages have',
          correction: 'Each of the three stages has',
          explanation: "'Each' is a singular pronoun — it always takes a singular verb: 'each has', 'each is', 'each requires'. Even though 'each of the three stages' contains a plural noun ('stages'), the subject of the sentence is 'each' — which is singular. This is a core rule: 'each', 'every', 'either', 'neither', 'one', 'none' are all grammatically singular and take singular verbs. Compare: 'Each of the stages has its own pack' (singular) vs 'All of the stages have their own packs' (plural). 'All' is plural; 'each' is singular.",
        },
        {
          lineIndex: 2,
          incorrectText: 'The key message for the all-staff announcement need to land',
          correction: 'The key message for the all-staff announcement needs to land',
          explanation: "The subject is 'the key message' — singular. The prepositional phrase 'for the all-staff announcement' is a modifier; it does not change the subject. Therefore the verb must be third person singular: 'needs', not 'need'. This is the proximity error — matching the verb to the nearest noun ('announcement' — singular, which actually agrees, but the error is the writer temporarily losing track of the subject). Regardless of the intervening phrase, the verb agrees with the head noun 'message'. 'The key message needs to land'.",
        },
        {
          lineIndex: 4,
          incorrectText: 'the people managers, which are',
          correction: 'the people managers, who are',
          explanation: "'Who' is used for people in relative clauses; 'which' is used for things. 'The people managers, who are the most important cascade link' — use 'who' because people managers are people. This is a non-defining relative clause (it adds extra information about already-identified people managers) — so it is correctly set off with a comma. The pronoun, however, must be 'who', not 'which'. Note: in defining clauses, 'that' can also refer to people in informal English, but 'which' never refers to people in standard English grammar.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Write the opening paragraph of an internal announcement about a major product strategy change.",
          salespersonStart: "Today we are sharing a significant update about the direction of our product strategy —",
          suggestedCompletion: "and we want you to hear it directly from us, before you read anything externally. Over the next 12 months, we are shifting our core product focus from [X] to [Y]. This change is the result of 18 months of customer research, commercial analysis, and honest reflection on where our biggest opportunity lies. It affects every part of this organisation in some way, and we want to be honest with you about what is changing, what is not, and why we believe this is the right direction for the business and for everyone in it.",
        },
        {
          customerLine: "A manager says: 'My team is panicking after the restructure announcement. They are asking me questions I cannot answer. What do I do?'",
          salespersonStart: "The most important thing you can do right now is not have all the answers —",
          suggestedCompletion: "it is to be present and honest. Tell your team exactly that: 'I do not have all the answers yet, and I am not going to pretend I do. Here is what I know, here is what I am finding out, and here is when I will get back to you.' Teams do not need a manager who has all the answers in a crisis — they need a manager who is honest, who listens, and who is clearly on their side while the organisation figures things out. Silence and false reassurance are far more damaging than honest uncertainty. Escalate every question you cannot answer to HR or your director today, and tell your team you have done so. Make sure no question sits unanswered for longer than 24 hours.",
        },
        {
          customerLine: "Why is it a problem when employees find out about a major change from social media or a news article rather than from their manager?",
          salespersonStart: "It signals, at the most fundamental level, that the organisation did not prioritise them —",
          suggestedCompletion: "and that signal is very hard to undo. When you find out about something significant that affects your work, your team, or your future from LinkedIn or a journalist, the message you receive is not the news itself — it is that you were not trusted enough, valued enough, or prioritised enough to be told first. That feeling — of being managed rather than informed — erodes trust with remarkable speed and remarkable durability. People remember how they found out about things. The practical consequence is that whatever the organisation says next lands in an environment of reduced trust, which makes change harder to implement, resistance more likely, and buy-in more difficult to achieve. The cascade exists precisely to prevent this — and when it is done well, employees feel informed, respected, and part of something rather than subject to something.",
        },
      ],
    },
  },
};

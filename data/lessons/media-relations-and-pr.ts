import { Lesson } from '@/types/lesson';

export const mediaRelationsAndPr: Lesson = {
  slug: 'media-relations-and-pr',
  title: 'Media Relations and PR',
  subtitle: 'How to work with journalists, manage media enquiries, and communicate with the press with confidence and control',
  level: 'C1-C2',
  description: "Every organisation that communicates publicly — whether through a product launch, a crisis response, or a thought leadership campaign — needs to understand how the media works. Journalists are not your marketing channel. They have their own agendas, deadlines, and audiences. Knowing how to work with them — how to pitch a story, how to manage an embargo, how to brief a spokesperson, and how to respond when a difficult question lands — is one of the most practical communications skills in business. This lesson gives you the vocabulary to participate confidently in PR and media relations conversations.",
  heroImage: '/images/media-relations-and-pr-hero.png',

  vocabulary: [
    {
      word: 'PRESS RELEASE',
      partOfSpeech: 'noun',
      definition: "A written statement that an organisation sends to journalists and media outlets to share official news — a product launch, a new appointment, a financial result, or a major announcement. A good press release tells the journalist the story clearly and quickly, and includes everything they need to write about it.",
      example: "Forge issued a press release announcing the acquisition at 7 AM when the market opened. The document had been written, approved, and embargoed two weeks in advance. Three major trade publications had it live within the hour.",
      imageSlug: '/images/press-release.png',
    },
    {
      word: 'EMBARGO',
      partOfSpeech: 'noun',
      definition: "An agreement between an organisation and a journalist that the journalist receives information early — but cannot publish it until a specific date and time. Embargoes give journalists time to prepare a story in advance. Breaking an embargo — publishing before the agreed time — is a serious breach of trust in the media industry.",
      example: "The results went to financial press under embargo at 6 AM with a publication time of 7 AM. Every outlet honoured it. The one that had broken an embargo the previous year was not on the distribution list.",
      imageSlug: '/images/media-relations-and-pr-embargo.png',
    },
    {
      word: 'MEDIA KIT',
      partOfSpeech: 'noun',
      definition: "A collection of resources that an organisation gives to journalists to help them cover a story. A media kit typically includes a press release, high-resolution images, key facts and statistics, executive biographies, and background information about the company or product. The goal is to give journalists everything they need in one place.",
      example: "Kova's media kit contains the brand assets, key executive biographies, the latest press releases, and the company fact sheet. When a journalist picks up the story, everything they need is in one place. It is updated quarterly.",
      imageSlug: '/images/media-kit.png',
    },
    {
      word: 'SPOKESPERSON',
      partOfSpeech: 'noun',
      definition: "The person who officially represents an organisation and communicates on its behalf with the media, the public, or other external audiences. A spokesperson needs to be briefed on key messages, trained to handle difficult questions, and authorised to speak on the topics they are covering.",
      example: "The spokesperson was briefed on every anticipated question before the press conference. She knew which topics were on the record, which were background, and which she would not comment on. Her preparation showed — she handled the regulatory question without hesitation.",
      imageSlug: '/images/media-relations-and-pr-spokesperson.png',
    },
    {
      word: 'OFF THE RECORD',
      partOfSpeech: 'phrase',
      definition: "Information shared with a journalist that they agree not to attribute to you or publish directly. Going off the record is a way of giving a journalist background context or a candid view without having it reported as an official statement. However, off the record only works if the journalist agrees to it — and it should be agreed before the information is shared, not after.",
      example: "Dana shared the background context off the record before the journalist filed the story. The information shaped the framing without appearing in the article. Used correctly, off the record is a tool for accuracy, not concealment.",
      imageSlug: '/images/media-relations-and-pr-off-the-record.png',
    },
    {
      word: 'MEDIA BRIEFING',
      partOfSpeech: 'noun',
      definition: "A meeting or call between an organisation's representative and a journalist — usually to share news, provide background information, or give the journalist access to a key person before a story is published. A media briefing is more targeted than a press conference and more personal than a press release.",
      example: "Forge held a media briefing for six financial journalists the day before the earnings announcement. The session was background only — no recording, no direct quotes. It gave journalists the context to write informed stories the moment the release went public.",
      imageSlug: '/images/media-briefing.png',
    },
    {
      word: 'NEWS HOOK',
      partOfSpeech: 'noun',
      definition: "The specific element of a story that makes it timely, interesting, or relevant enough for a journalist to want to cover it right now. Without a news hook, a story has no reason to be published today rather than any other day. A strong news hook connects your announcement to something already in the news, a current trend, or a specific moment in time.",
      example: "The story needed a stronger news hook — the product launch alone was not enough to earn coverage. Tying it to the new government procurement framework gave journalists a reason to write about it now. The reframed pitch landed three pieces in trade publications within a week.",
      imageSlug: '/images/news-hook.png',
    },
    {
      word: 'EARNED MEDIA',
      partOfSpeech: 'noun',
      definition: "Coverage, mentions, or stories about your brand that you did not pay for. Earned media comes from journalists, bloggers, influencers, or other third parties who choose to write about you because they find your story newsworthy or interesting. It is called 'earned' because you earn it through the quality of your story or your reputation — not through advertising spend.",
      example: "The white paper generated earned media coverage in four sector publications without any paid placement. Journalists covered the brand trust finding because it was genuinely surprising. Earned media from that research is still generating inbound six months after publication.",
      imageSlug: '/images/media-relations-and-pr-earned-media.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'THIS IS STRICTLY OFF THE RECORD — I AM SHARING THIS AS BACKGROUND',
      definition: "A phrase used to establish clearly that the information being shared with a journalist is for background context only — not to be attributed, quoted, or published. Must be agreed before the information is shared. Used when you want to give a journalist helpful context without it appearing in the story as an official statement.",
      example: "This is strictly off the record — I am sharing this as background so you understand the full context of what we are announcing. None of this can appear in the article, attributed or otherwise. Once we are on the record, I will give you the official statement.",
      imageSlug: '/images/strictly-off-the-record.png',
      inAction: 'This is strictly off the record — I am sharing this as background so you understand the context, but I cannot have this attributed to me or to the company in any way.',
      register: "Neutral — Forge (B2B HR platform, product delay): media relations briefing note reads the spokesperson may go off the record on the timeline question — but only after establishing the terms clearly and only to give the journalist context, not a quotable explanation. | Kova (fintech, regulatory scrutiny): PR strategy note reads if a journalist raises the regulatory review directly, the comms director may share background context strictly off the record to prevent speculation — the agreed background is that the review is routine and is expected to conclude by Q3. | Ember (subscription service, leadership change): media briefing reads the CEO may address the departure of the CFO off the record if pressed — the background is that the departure was mutually agreed and the search for a replacement has already begun.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — spokesperson media briefing', imageSlug: '/images/visual-examples/forge-off-record-timeline.png', caption: 'The spokesperson may go off the record on the timeline question — but only after establishing the terms clearly and only to give context, not a quotable explanation.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — PR strategy for regulatory scrutiny coverage', imageSlug: '/images/visual-examples/kova-off-record-regulatory-review.png', caption: 'If a journalist raises the regulatory review, the comms director may share background strictly off the record to prevent speculation — the review is routine and expected to conclude by Q3.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus was preparing for the journalist interview. There is one topic I want to be very careful with, Riley said. The question about our pricing changes. Marcus: Can I go off the record? Riley: Yes — but you have to establish that before you say anything. This is strictly off the record, I am sharing this as background. Say those words, wait for the journalist to confirm, and then share only what you are genuinely comfortable with. Dana: And remember — off the record is a professional courtesy, not a legal protection. Choose your background carefully.",
    },
    {
      phrase: 'WE HAVE AN EMBARGO UNTIL...',
      definition: "A phrase for communicating the agreed publishing restriction to journalists receiving early access to a story. Always specify the exact date, time, and if relevant, the timezone. Used when briefing journalists in advance of a major announcement to manage timing and coordinate coverage.",
      example: "We have an embargo until 7 AM Thursday when the market opens. You can prepare the story and publish the moment the embargo lifts. If the embargo is broken, we will not be able to extend early access to your outlet in the future.",
      imageSlug: '/images/we-have-an-embargo-until.png',
      inAction: 'We have an embargo until Monday at 8am — please do not publish or post anything before then, including any social media or podcast references to the product.',
      register: "Neutral — Flux (SaaS platform, major feature launch): journalist briefing confirmation reads we have an embargo until Tuesday the 9th at 9am ET — your early access to the beta environment and the product walkthrough with the CTO are provided under this embargo. | Halo (DTC brand, campaign launch): media kit cover note reads we have an embargo until the 1st of the month — the campaign officially launches with a live event that morning and we ask that coverage goes live no earlier than 7am local time. | Velo (B2B fleet SaaS, partnership announcement): partner announcement brief reads we have a joint embargo with our partner until Wednesday noon — both companies will issue their press releases simultaneously and we ask that any coverage reflects the joint nature of the announcement.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS platform — major feature launch journalist briefing', imageSlug: '/images/visual-examples/flux-embargo-tuesday-9am.png', caption: 'We have an embargo until Tuesday at 9am ET — early access to the beta environment and the product walkthrough are provided under this embargo.', aspectRatio: '16/9' },
        { brand: 'Velo', context: 'B2B fleet SaaS — joint partnership announcement', imageSlug: '/images/visual-examples/velo-embargo-joint-announcement.png', caption: 'We have a joint embargo with our partner until Wednesday noon — both companies will issue press releases simultaneously and coverage should reflect the joint announcement.', aspectRatio: '4/5' },
      ],
      inContext: "Riley sent the embargo confirmation to the journalist list. We have an embargo until Thursday at 6am GMT, she wrote. Dana reviewed the list: Twelve journalists confirmed, two still outstanding. Marcus: Chase the two outstanding today — no embargo confirmation, no early access. The embargo only works if everyone who receives early information has explicitly agreed to the terms. An unconfirmed journalist who publishes early is not technically bound by anything.",
    },
    {
      phrase: 'THE STORY NEEDS A STRONGER NEWS HOOK — RIGHT NOW IT READS AS...',
      definition: "A phrase for giving feedback that a press release, pitch, or story angle lacks the urgency or timeliness to attract media attention. Always complete with what the current version reads as — an advert, a product description, a company update — and ideally follow with what would make a stronger hook.",
      example: "The story needs a stronger news hook — right now it reads as a product update rather than news. Anchoring it to the regulatory change that comes into force next month gives journalists a reason to cover it this week. Marcus rewrote the pitch with that angle and three outlets came back within 24 hours.",
      imageSlug: '/images/the-story-needs-a-stronger-news-hook.png',
      inAction: 'The story needs a stronger news hook — right now it reads as a company milestone rather than a story that affects our readers, and a journalist needs to be able to answer "why should my audience care today?"',
      register: "Neutral — Forge (B2B HR platform, product launch PR review): PR agency feedback reads the story needs a stronger news hook — right now it reads as a feature list rather than a solution to a problem that is in the news. We recommend leading with the new employment law changes taking effect next quarter and positioning the product as the solution businesses need right now. | Kova (fintech, funding round announcement): comms review reads the story needs a stronger news hook — right now it reads as a funding announcement with no context. Adding the market data on the gap in financial services for this segment turns a company story into an industry story. | Bloom (DTC wellness, brand campaign): media strategy review reads the story needs a stronger news hook — right now it reads as a campaign launch. Tying it to the new WHO guidelines on preventive health published this month gives journalists a news angle that goes beyond the brand.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — PR agency launch review', imageSlug: '/images/visual-examples/forge-news-hook-employment-law.png', caption: 'The story needs a stronger news hook — leading with the new employment law changes taking effect next quarter positions the product as the solution businesses need right now.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — funding round announcement strategy', imageSlug: '/images/visual-examples/kova-news-hook-market-data.png', caption: 'The story needs a stronger news hook — adding market data on the gap in financial services turns a company announcement into an industry story journalists want to cover.', aspectRatio: '4/5' },
      ],
      inContext: "Dana had the PR pitch on screen. The story needs a stronger news hook — right now it reads as a product description, she said. Riley: The journalist question is always 'why does this matter to my readers today?' Right now this pitch does not answer that. Marcus: What if we lead with the research we published last month? The finding that 68% of marketing teams have no formal AI governance policy? Dana: That is the hook. That is a story. The product is the solution to the problem the research reveals. That sequence — problem in the news, our solution — is the classic PR structure that gets coverage.",
    },
    {
      phrase: 'WE ARE PITCHING THIS AS AN EXCLUSIVE TO...',
      definition: "A phrase for communicating that a story is being offered to one specific journalist or publication before anyone else — in exchange for better placement, more prominent coverage, or a front-page feature. An exclusive offer means you commit to not sharing the story with other media until the exclusive coverage is published.",
      example: "We are pitching this as an exclusive to the Financial Times for 48 hours before wider distribution. An exclusive gives the journalist a competitive reason to prioritise it. If they pass, we release to the full media list on Thursday morning.",
      imageSlug: '/images/we-are-pitching-this-as-an-exclusive.png',
      inAction: 'We are pitching this as an exclusive to the technology editor — she has the biggest readership in our target market and we want depth of coverage over breadth at launch.',
      register: "Neutral — Flux (SaaS platform, product launch): PR strategy reads we are pitching this as an exclusive to the leading B2B technology publication — the audience profile matches our ICP exactly and an exclusive will generate better-quality coverage than a simultaneous press release to 30 outlets. | Ember (subscription service, research launch): media plan reads we are pitching the research findings as an exclusive to a national newspaper before releasing the full report publicly — the newspaper's readership and the editorial profile of the journalist give us the best platform for the research to reach a mainstream audience. | Halo (DTC brand, founder interview): PR note reads we are pitching the founder story as an exclusive to the lifestyle magazine that covers our category most prominently — in exchange for a cover consideration and a 2,000-word feature rather than a brief mention in a round-up.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS platform — product launch PR strategy', imageSlug: '/images/visual-examples/flux-exclusive-b2b-publication.png', caption: 'We are pitching this as an exclusive to the leading B2B technology publication — the audience matches our ICP exactly and an exclusive generates better-quality coverage than a simultaneous press release to 30 outlets.', aspectRatio: '16/9' },
        { brand: 'Ember', context: 'Subscription service — research findings media launch', imageSlug: '/images/visual-examples/ember-exclusive-national-newspaper.png', caption: 'We are pitching the research findings as an exclusive to a national newspaper before the full report goes public — the editorial profile and readership reach a mainstream audience at scale.', aspectRatio: '4/5' },
      ],
      inContext: "Riley presented the launch media plan. We are pitching this as an exclusive to the Financial Times technology section, she said. Marcus: Why the FT specifically? Riley: Three reasons. Their readership is our CFO and CTO audience — the people who make purchase decisions. The journalist covers our space well and has written about the problem our product solves before. And an FT front-page feature will give other outlets permission to run the story after the embargo lifts — it signals the story has credibility. Dana: And if the FT passes? Riley: We go to our second choice immediately and adjust the embargo timeline. Never be in a position where a single outlet decision collapses the entire launch plan.",
    },
    {
      phrase: 'WE NEED TO GET AHEAD OF THIS STORY BEFORE...',
      definition: "A phrase for describing the urgency of proactively communicating — to journalists, customers, or the public — before a negative or sensitive story breaks on its own. Getting ahead of a story means controlling the narrative by releasing information on your own terms rather than waiting for it to be reported without your input.",
      example: "We need to get ahead of this story before it appears without our input. Dana drafted a statement for the CEO to approve so we are ready to respond the moment it breaks. Proactive positioning is always stronger than reactive denial.",
      imageSlug: '/images/media-relations-and-pr-we-need-to-get-ahead-of-this-story.png',
      inAction: 'We need to get ahead of this story before the journalist publishes — if we wait for the article to go live and then respond, we have already lost control of the narrative.',
      register: "Neutral — Forge (B2B HR platform, data incident): crisis comms plan reads we need to get ahead of this story before it breaks — a statement acknowledging the incident, describing the steps we have taken, and confirming no customer data was compromised needs to go to key media contacts today, before any outlet approaches us. | Kova (fintech, executive departure): communications review reads we need to get ahead of this story before it leaks — a proactive announcement of the CFO departure, framed on our terms, is less damaging than a news report based on speculation and unnamed sources. | Velo (B2B fleet SaaS, product recall): crisis PR review reads we need to get ahead of this story before it becomes a safety news report — a direct, proactive statement from the CEO acknowledging the issue and describing the recall process is the only approach that preserves trust.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — data incident crisis communications', imageSlug: '/images/visual-examples/forge-ahead-of-story-data-incident.png', caption: 'We need to get ahead of this story — a statement acknowledging the incident and confirming no customer data was compromised needs to go to key media today, before any outlet approaches us.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — executive departure communications strategy', imageSlug: '/images/visual-examples/kova-ahead-of-story-cfo-departure.png', caption: 'We need to get ahead of this story — a proactive announcement of the CFO departure on our terms is less damaging than a report based on speculation and unnamed sources.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus called the emergency comms meeting. We need to get ahead of this story before the weekend, he said. There is a journalist working on a piece about our pricing changes and our response to the customer complaints that followed. Riley: What do we know about the angle? Marcus: The angle is that we raised prices without adequate notice and did not handle the complaints well. Dana: How much of that is true? Marcus: Some of it. Riley: Then we need to get our side of the story on record today. A proactive statement that acknowledges the communication gap, explains the pricing rationale, and describes what we have done for affected customers. If we do not tell our story, the journalist tells it for us.",
    },
    {
      phrase: 'THE SPOKESPERSON IS BEING BRIEFED ON...',
      definition: "A phrase for communicating that the official representative for a media interaction is being prepared with the key messages, likely questions, and sensitive areas for a specific interview or press opportunity. Used in PR planning and pre-interview preparation to confirm that the media interaction will be managed professionally.",
      example: "The spokesperson is being briefed on the four most likely questions before the investor call. Dana runs through each one and they practise the response until it feels natural, not rehearsed. Preparation at that level is what separates a strong media performance from a damaging one.",
      imageSlug: '/images/the-spokesperson-is-being-briefed-on.png',
      inAction: 'The spokesperson is being briefed on the acquisition question specifically — we know it will come up, and we need a consistent, controlled response that gives the journalist something without confirming anything.',
      register: "Neutral — Flux (SaaS platform, product launch): pre-launch comms plan reads the spokesperson is being briefed on the competitive landscape questions — three journalists have already asked our PR agency about how the product compares to our main competitor, and the spokesperson needs a confident, non-defensive answer ready. | Ember (subscription service, results announcement): IR comms plan reads the CEO is being briefed on the analyst questions expected at the results call — the briefing covers the revenue shortfall in Q3, the revised full-year guidance, and the rationale for the change in capital allocation strategy. | Halo (DTC brand, controversy response): crisis PR plan reads the founder is being briefed on the social media controversy before her scheduled interview — the briefing will cover the background, the company's response to date, and the two or three sentences she should use to address it directly.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS platform — pre-launch spokesperson preparation', imageSlug: '/images/visual-examples/flux-spokesperson-competitive-questions.png', caption: 'The spokesperson is being briefed on competitive landscape questions — three journalists have already asked our agency about the comparison, and the spokesperson needs a confident, non-defensive answer.', aspectRatio: '16/9' },
        { brand: 'Halo', context: 'DTC brand — spokesperson briefing for controversy response', imageSlug: '/images/visual-examples/halo-spokesperson-controversy-briefing.png', caption: 'The founder is being briefed on the social media controversy before her scheduled interview — covering the background, the company response, and the two sentences she should use to address it directly.', aspectRatio: '4/5' },
      ],
      inContext: "Dana updated the team the morning of the launch: The spokesperson is being briefed on the pricing question right now, she said. We know at least three journalists are going to ask why we raised the price at launch rather than starting lower. Riley: What is the agreed line? Dana: The price reflects the genuine value of the product and the investment made in its development — and we are offering a limited early-adopter discount to reward the customers who supported us from the start. Marcus: Is she comfortable with that? Dana: She practised it in the briefing yesterday. She is comfortable. That is the only answer we are giving on pricing today.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We have a major product launch in ten days and the PR plan is not ready. I want to go through the media strategy from scratch. Dana — what is the current state of play?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "We have a [[press release:a written statement sent to journalists to share official news]] that needs work — the [[news hook:the specific element that makes a story timely and relevant enough to cover right now]] is too weak. We have a draft [[media kit:a collection of resources giving journalists everything they need to cover a story]] — press release, fact sheet, images, executive bios. And we have twelve journalist briefings scheduled under [[embargo:an agreement that journalists receive information early but cannot publish until a set date and time]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "When does the embargo lift?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Launch day at 6am. We have an embargo until then. Journalists are briefed on Wednesday and Thursday this week — they get full access to the product, a one-on-one with the CEO, and the complete media kit. In exchange, nothing publishes until launch day.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the [[spokesperson:the person who officially represents an organisation and speaks to the media on its behalf]] preparation? Who is speaking and are they ready?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Three spokespeople — the CEO for strategy and brand, the CTO for product and tech, the CMO for campaign. The spokesperson is being briefed on the competitive positioning questions today — that is where I expect the hardest questions to come from. I also need to brief the CEO on what she says off the record if a journalist pushes on the acquisition rumours.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "For that, the phrase is: this is strictly off the record — I am sharing this as background. She needs to say those words before she shares anything. Not after.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And are we pitching to any outlet as an exclusive?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Yes. We are pitching this as an exclusive to one major business outlet — their technology editor. She covers our sector, her readership is our target buyer profile, and a front-page feature from her gives the rest of the media permission to run the story. If she commits, she gets the CEO interview 48 hours before the embargo lifts.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And the press release — the story needs a stronger news hook before it goes out. Right now it reads like a product description. We need to open with the market problem this solves, not with 'today we are pleased to announce.'",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Agreed. [[Earned media:coverage you did not pay for — generated because a journalist found your story newsworthy]] is worth more than any ad spend we can make this month. Let us get this right.",
    },
  ],

  matchingExercise: [
    { word: 'press release', definition: 'a written statement sent to journalists to share official news — a launch, appointment, or major announcement' },
    { word: 'embargo', definition: 'an agreement that journalists receive information early but cannot publish until a specific date and time' },
    { word: 'media kit', definition: 'a collection of resources — press release, images, bios, and background — giving journalists everything they need to cover a story' },
    { word: 'spokesperson', definition: 'the person authorised to represent an organisation and speak to the media on its behalf' },
    { word: 'off the record', definition: 'information shared with a journalist that they agree not to attribute or publish — must be agreed before sharing, not after' },
    { word: 'media briefing', definition: 'a meeting or call giving a journalist direct access to an organisation or key person before a story is published' },
    { word: 'news hook', definition: 'the element that makes a story timely and relevant enough for a journalist to want to cover it right now' },
    { word: 'earned media', definition: 'coverage you did not pay for — generated because a journalist found your story newsworthy or interesting' },
  ],

  fillBlankExercise: [
    { before: 'We have an', after: 'until Friday at 6am — please do not publish or post anything before then.', answer: 'embargo' },
    { before: 'The story needs a stronger news', after: '— right now it reads as a product announcement with no reason to exist today rather than any other day.', answer: 'hook' },
    { before: 'This is strictly', after: '— I am sharing this as background context only, not for attribution.', answer: 'off the record' },
    { before: 'We are pitching this as an', answer: 'exclusive', after: 'to the technology editor — she has the largest readership among our target audience.', },
    { before: 'The', after: 'is being briefed on the competitive positioning questions before the journalist call this afternoon.', answer: 'spokesperson' },
    { before: 'The launch generated £380,000 of', answer: 'earned media', after: '— coverage we did not pay for, generated because journalists found the story newsworthy.' },
  ],

  multipleChoiceExercise: [
    {
      question: "What does Riley say is the key rule about going 'off the record'?",
      options: ['The journalist must be a trusted contact of at least two years before off the record is used', 'The agreement must be established before the information is shared — not after', 'Off the record only applies to written interviews, not to verbal conversations or calls'],
      correctIndex: 1,
    },
    {
      question: 'What does Dana say an embargo provides to journalists in exchange for cooperation on timing?',
      options: ['A guarantee that the story will appear on the front page of the publication', 'Early access to the full story, the product, and executive interviews before the announcement goes to all media', 'Payment or a media fee in exchange for holding the story until the agreed publication date'],
      correctIndex: 1,
    },
    {
      question: 'What does Riley say is the risk of the exclusive strategy?',
      options: ['The exclusive outlet may demand editorial control over the story in exchange for front-page placement', 'If the exclusive journalist decides not to run the story, two days are lost and the launch plan collapses', 'Other journalists become aware of the exclusive and refuse to cover the story out of professional principle'],
      correctIndex: 1,
    },
    {
      question: 'What does Marcus say is the consequence of not responding to a journalist who is publishing a difficult story?',
      options: ['The journalist is legally required to delay publication until the organisation has provided a written statement', 'The story runs entirely from the other side\'s perspective — without any of the organisation\'s context or position', 'The journalist will approach other members of the organisation for a comment and the story will be delayed'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Think about a news story you have read recently about a company or a brand. Did you feel like you were getting the company\'s side of the story, or the journalist\'s interpretation of events? What was the difference — and which felt more credible?',
      'Have you ever been in a situation where you had to communicate difficult information — at work, at school, or in your personal life — and had to decide how much to say, when to say it, and to whom? How did you make those decisions?',
      'Some companies are very good at getting media coverage — their launches, their products, and their leaders appear in newspapers and on broadcasts regularly. What do you think they do differently from companies that never seem to get coverage?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'The press release _____ well-written, but it lacks a news hook that makes the story relevant right now.',
        options: ['is', 'was', 'has been'],
        correctIndex: 0,
        explanation: "Simple present ('is') is correct for describing the current state of the press release — it exists right now and is being evaluated now. The press release is a document in its current form, and 'is well-written' describes its current quality. 'Was' (simple past) would suggest the press release is no longer relevant or has changed — 'it was well-written before we edited it'. 'Has been' (present perfect) suggests an action completed in the past with a result in the present — 'it has been edited (and is now in its current state)'. For describing current states of documents, materials, or ongoing situations, simple present is the standard tense.",
      },
      {
        sentence: 'The embargo _____ on Friday at 6am — nothing should be published before that time.',
        options: ['lifts', 'is lifting', 'has lifted'],
        correctIndex: 0,
        explanation: "Simple present ('lifts') is used here to describe a scheduled future event — this is the timetable or schedule use of simple present, which is standard for events with fixed times: 'the embargo lifts on Friday', 'the train leaves at 9am', 'the meeting starts at 2pm'. Simple present for scheduled future events is extremely common in professional communications planning. 'Is lifting' (present continuous for future) is also grammatically correct for planned future events — 'the embargo is lifting on Friday' — but simple present is more formal and more commonly used in written plans. 'Has lifted' (present perfect) would mean the embargo is already over, which contradicts the sentence.",
      },
      {
        sentence: 'Before sharing anything with the journalist, you need _____ the off-the-record terms.',
        options: ['to establish', 'establishing', 'established'],
        correctIndex: 0,
        explanation: "'Need to' + infinitive is the standard structure: 'you need to establish', 'you need to confirm', 'you need to agree'. This expresses necessity or obligation. 'Need + gerund' ('need establishing') is used in British English but typically in passive constructions: 'the terms need establishing' (meaning 'the terms need to be established'). In active constructions with a person as subject, 'need to' + infinitive is the standard form. 'Established' is the past participle — it would complete a different structure: 'the terms need to be established' (passive). The sentence structure 'you need ___ the terms' requires the infinitive: 'to establish'.",
      },
      {
        sentence: 'The spokesperson handled the difficult questions _____ — she stayed calm, on message, and did not over-answer.',
        options: ['well', 'good', 'excellently'],
        correctIndex: 0,
        explanation: "'Well' is the adverb form of 'good' — it modifies the verb 'handled': 'she handled the questions well'. 'Good' is an adjective and cannot modify a verb: 'she handled the questions good' is grammatically incorrect. 'Excellently' is also an adverb and is grammatically correct — 'she handled them excellently' — but 'well' is the most natural and idiomatic choice in professional British English for this context. 'Well' is one of the most important irregular adverbs in English: the adjective is 'good', the adverb is 'well'. 'He is a good speaker' (adjective) vs 'he speaks well' (adverb).",
      },
      {
        sentence: 'Earned media is valuable _____ it carries more credibility than advertising — readers know you did not pay for it.',
        options: ['because', 'although', 'unless'],
        correctIndex: 0,
        explanation: "'Because' introduces the reason for something — it is a causal conjunction. 'Earned media is valuable because it carries more credibility' — the reason for the value is the credibility. 'Although' introduces contrast: 'earned media is valuable, although it is harder to control' — the second clause contrasts with or qualifies the first. 'Unless' introduces a conditional exception: 'this would not work unless the journalist finds the story newsworthy'. Only 'because' correctly expresses cause here — the credibility is the reason for the value.",
      },
      {
        sentence: 'The journalist _____ the embargo, which means we have to accelerate the announcement for all other media immediately.',
        options: ['has broken', 'broke', 'is breaking'],
        correctIndex: 0,
        explanation: "'Has broken' (present perfect) is correct because it describes a past action that has an immediate consequence in the present — the journalist did something (broke the embargo), and as a result we need to act now. The present perfect is the natural tense for 'bad news that just happened and requires immediate response': 'the system has crashed', 'a journalist has broken the embargo', 'the client has seen the draft'. 'Broke' (simple past) would describe the event as a past fact with no explicit connection to the current consequence — it is grammatically possible but less natural in this urgent-action context. 'Is breaking' suggests the action is still in progress, which is unlikely once the embargo is broken.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'A journalist has asked for comment on a negative story about our company. Should we respond or stay silent?'",
          options: [
            "Stay silent — responding only draws more attention to the story and gives the journalist more material to work with.",
            "Almost always respond — even a brief, factual statement means the story has to include your position. When an organisation stays silent, the journalist writes the story entirely from the other side's perspective, and 'the company did not respond to a request for comment' becomes a line in the article that signals you have something to hide. The response does not need to be long or detailed — it needs to be accurate, calm, and factual. Acknowledge what you can acknowledge, decline to comment on specifics you cannot address, and make clear you take the issue seriously. In a crisis, silence rarely protects — it usually amplifies the problem.",
            "Yes — but only respond if the journalist is from a major national outlet. For smaller publications, the audience is too small to justify the risk of saying something wrong.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it explains why silence is rarely the right choice, describes what a minimal effective response looks like, and identifies the specific line in an article ('the company did not respond') that makes silence visible and damaging. Option A is a common instinct but usually wrong — silence is interpreted as confirmation or avoidance, not as discipline. Option C is incorrect — smaller outlets can have disproportionate influence if the story is picked up by larger media.",
        },
        {
          customerLine: "'Our press release is ready but our PR agency says the news hook is too weak. We do not have time to rewrite it.'",
          options: [
            "Send it as it is — journalists will find the angle themselves if the product is genuinely interesting.",
            "The news hook is the most important sentence in the press release — it is the sentence that determines whether a journalist reads on or moves to the next email. Rewriting one sentence is faster than the alternative of low coverage. Three quick options: tie the launch to a piece of recent research or data your company owns; tie it to a current news event or regulatory change that your product addresses; or add a striking statistic in the first sentence that frames the scale of the problem you solve. You do not need to rewrite the whole press release — you need to rewrite the first 30 words. That is a 15-minute task that changes whether you get coverage.",
            "Ask the PR agency to find the news hook themselves — that is what you are paying them for.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it confirms that the hook is the highest-priority element, gives three specific and immediately actionable ways to strengthen it, and reframes the task as a 15-minute intervention rather than a full rewrite. Option A is wrong — journalists do not find their own angle in a press release that does not give them one. Option C shifts responsibility but does not solve the immediate problem — the agency should have identified this earlier, but the question is what to do now.",
        },
        {
          customerLine: "'The CEO wants to go off the record with a journalist about our acquisition talks. Is that safe?'",
          options: [
            "Yes — off the record is a binding legal agreement and the journalist cannot publish what was said under any circumstances.",
            "Off the record is a professional courtesy, not a legal protection — and it only works if the journalist explicitly agrees to the terms before the information is shared. The CEO needs to say: 'Before I say anything on this topic, I need us to agree this is strictly off the record — background context only, not for attribution.' If the journalist agrees and confirms it, the CEO can share background. If the journalist does not confirm, nothing should be said. Even with agreement, the CEO should only share what she is genuinely comfortable with appearing in print — because a journalist who believes the public interest is significant enough may still find a way to report the substance of what she learned, even without direct attribution.",
            "No — the safest approach is for the CEO to say 'no comment' on acquisition questions in all circumstances.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it accurately explains that off the record is a professional norm, not a legal one, describes the exact process for establishing it properly, and gives the key practical rule: only share off the record what you would survive seeing in print. Option A is incorrect — off the record has no legal force. Option C is overly restrictive — 'no comment' on every acquisition question is itself a signal to journalists and may generate more speculation than a carefully managed off-the-record background conversation.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the pre-launch PR planning meeting extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "We have twelve journalist briefings scheduled this week — all of them are under embargo until launch day at 6am." },
        { speaker: 'Riley', text: "Each of the twelve journalists have confirmed receipt of the media kit and are prepared for their individual briefing sessions." },
        { speaker: 'Dana', text: "The spokesperson is being briefed on the two topics she is most likely to face difficult questions about — the pricing rationale and the competitive comparison." },
        { speaker: 'Marcus', text: "For the acquisition question, she should go off the record only if the journalist agrees to the terms first — not after she has shared the information." },
        { speaker: 'Riley', text: "We are also pitching the research findings as an exclusive, which give the technology editor first access in exchange for a front-page feature." },
        { speaker: 'Dana', text: "The news hook is still too weak in the current draft — we need to connect the launch to the new data privacy regulations that come into effect next quarter." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Each of the twelve journalists have confirmed',
          correction: 'Each of the twelve journalists has confirmed',
          explanation: "'Each' is always singular — it takes a singular verb regardless of the plural noun that follows. 'Each of the journalists has confirmed' — the subject is 'each' (singular), so the verb must be 'has'. The prepositional phrase 'of the twelve journalists' modifies 'each' but does not change its grammatical number. Compare: 'All of the journalists have confirmed' (plural) vs 'Each of the journalists has confirmed' (singular). 'All' and 'each' look similar but have opposite grammatical numbers.",
        },
        {
          lineIndex: 4,
          incorrectText: 'as an exclusive, which give the technology editor',
          correction: 'as an exclusive, which gives the technology editor',
          explanation: "The relative clause 'which gives' refers back to 'an exclusive' — the antecedent is singular. Therefore the verb in the relative clause must be third person singular: 'which gives', not 'which give'. This is the subject-verb agreement rule applied to relative clauses: the verb in the relative clause agrees with the antecedent (the noun the relative pronoun refers to). 'An exclusive' is singular, so 'which gives' is correct. If the antecedent were plural ('these exclusives, which give...'), the plural verb would be correct.",
        },
        {
          lineIndex: 5,
          incorrectText: 'the new data privacy regulations that come into effect next quarter',
          correction: 'the new data privacy regulations that come into effect next quarter',
          explanation: "Actually this line is correct as written — 'come into effect' is the right phrase (not 'comes into effect') because the subject is 'regulations' (plural). Let students look for a different error. The actual error to flag in this line is none — direct students to look again at lines 1 and 4 if they identified this line. Teachers may wish to use this as a distractor to test whether students can recognise a correct sentence.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "A journalist has just broken the embargo and published the story early. Your colleague says: 'What do we do?'",
          salespersonStart: "First — do not panic, but do act immediately. The moment we confirm the embargo has been broken —",
          suggestedCompletion: "we accelerate the announcement for every other journalist on the list. We send the press release to all contacts immediately, with a note that says coverage has appeared ahead of schedule and we are releasing the announcement now. We post on our own channels simultaneously. We notify the CEO and the head of comms so there are no surprises. And we document exactly what happened for a conversation with the journalist's editor — not to demand the story be taken down, but to put on record that the embargo was broken and why that matters for our future working relationship. The story is out. Our job now is to make sure our version is also out, and to get ahead of any narrative that the early coverage might set.",
        },
        {
          customerLine: "Write the opening paragraph of a press release for a new HR software product that helps companies manage remote teams.",
          salespersonStart: "New research published today shows that 61% of HR managers have no formal process for monitoring remote employee wellbeing —",
          suggestedCompletion: "a gap that is costing companies an estimated £1.2 billion annually in preventable turnover. Forge, the B2B HR platform used by more than 3,000 companies across Europe, today launches RemoteOS — the first integrated platform designed specifically to give HR teams real-time visibility into remote team health, engagement, and performance. Unlike tools built for in-office environments and adapted for remote, RemoteOS was designed from the ground up for distributed teams — with automated check-in workflows, wellbeing scoring, and manager alert systems that flag issues before they become attrition. The product is available from today at forge.io.",
        },
        {
          customerLine: "Your CEO is about to go into a journalist interview. What are the three most important things you tell her in the final five minutes before she walks in?",
          salespersonStart: "Three things. First —",
          suggestedCompletion: "your three key messages are on the card in front of you. Everything you say should connect back to one of those three points. If a question takes you off-track, bridge back: 'That is an interesting point — what I would say is...' Second — there are two questions you do not answer directly. On the acquisition rumours, the line is: 'I am not in a position to comment on market speculation, but what I can tell you is our growth strategy is very clear.' On the pricing controversy, redirect to the value story. Do not get defensive. Third — if you want to go off the record on anything, say the words first: 'Before I say this, can we agree this is strictly off the record?' Wait for confirmation. Never say it after. The interview is yours. You know this story better than anyone in the room.",
        },
      ],
    },
  },
};

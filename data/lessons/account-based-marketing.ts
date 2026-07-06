import { Lesson } from '@/types/lesson';

export const accountBasedMarketing: Lesson = {
  slug: 'account-based-marketing',
  title: 'Account-Based Marketing',
  subtitle: 'How to target high-value accounts with personalised campaigns that speak directly to specific decision-makers',
  level: 'B1-B2',
  description: "Account-based marketing — or ABM — is a B2B strategy where you treat individual companies as markets of one. Instead of casting a wide net and hoping the right companies find you, ABM means identifying your most valuable potential accounts and building campaigns specifically for them. This lesson teaches you the vocabulary and professional language behind ABM: how to talk about key accounts, intent data, personalisation, and the outreach that gets meetings with decision-makers.",
  heroImage: '/images/account-based-marketing-hero.png',

  vocabulary: [
    {
      word: 'ABM',
      partOfSpeech: 'abbreviation',
      definition: 'Short for Account-Based Marketing. A B2B strategy where the marketing and sales team work together to target specific companies — called accounts — with highly personalised campaigns. Unlike broad-reach marketing, ABM focuses resources on a defined list of high-value targets.',
      example: "Marcus explained the strategy shift: We are moving from demand generation to ABM — instead of running broad campaigns and hoping the right companies find us, we are going to build specific campaigns for our top 50 target accounts. Dana asked: How is that different from what sales already does? Marcus replied: In ABM, marketing and sales are completely aligned — same target list, same messaging, same timing. Marketing supports every touchpoint, not just the top of the funnel.",
      imageSlug: '/images/abm.png',
    },
    {
      word: 'KEY ACCOUNT',
      partOfSpeech: 'noun',
      definition: 'A high-value company that is either an existing customer or a priority target. Key accounts are chosen because they represent the greatest revenue potential — either because of the size of the deal, the likelihood of closing, or their strategic value as a reference customer or case study.',
      example: "Riley presented the target list: We have identified 40 key accounts for our ABM programme this quarter. Dana asked: How did you select them? Riley replied: Three criteria — companies that match our ideal customer profile exactly, companies where we have an existing relationship with at least one person, and companies that a new logo win would give us a valuable reference in their sector. We are not chasing volume. Each account on this list has a specific reason for being there.",
      imageSlug: '/images/key-account.png',
    },
    {
      word: 'DECISION-MAKER',
      partOfSpeech: 'noun',
      definition: 'The person in a company who has the authority to approve a purchase. In B2B sales, identifying the decision-maker is critical — you can have the best product and the best relationship, but if you are not in front of the person who controls the budget, the deal will stall.',
      example: "Dana reported on the account: We have had three meetings with the marketing team at this company but we are not talking to the decision-maker — the VP of Marketing has not been in any of the calls. Marcus replied: That is a problem. The marketing team can be our champion, but they cannot sign the contract. We need to build a plan to get the VP into the conversation. Riley: I will work with the account executive on an executive briefing format — something that is worth the VP's time.",
      imageSlug: '/images/decision-maker.png',
    },
    {
      word: 'PERSONALISATION',
      partOfSpeech: 'noun',
      definition: "Tailoring content, messaging, or outreach specifically for a person or company — using their name, their industry, their specific situation, or their known challenges. In ABM, personalisation goes beyond using someone's first name. It means the email or ad looks like it was made specifically for them.",
      example: "Marcus reviewed the outreach templates: These emails are not personal enough — they could be sent to anyone. Riley, true personalisation in ABM means referencing something specific to their company — a recent announcement, a challenge specific to their industry, or a result we got for a direct competitor. Riley revised the approach: I will research each account before outreach. If they just expanded into Germany, the email references that. If their sector is under regulatory pressure, the email addresses that directly.",
      imageSlug: '/images/account-based-marketing-personalisation.png',
    },
    {
      word: 'INTENT DATA',
      partOfSpeech: 'noun',
      definition: 'Data that shows which companies are actively researching topics related to your product. Intent data is collected from B2B content sites, search behaviour, and review platforms — it tells you which of your target accounts is in buying mode right now. This allows you to time your outreach at the moment of highest interest.',
      example: "Dana explained the tool: We are using intent data to prioritise which accounts to contact this week. Three of our top 40 target accounts are showing high intent right now — they have been reading articles about marketing attribution software and comparing platforms on G2. Marcus replied: Those are the accounts we reach out to immediately — they are actively researching. Riley: Intent data is not a guarantee, but it means we are reaching out at the moment their interest is highest, not randomly.",
      imageSlug: '/images/intent-data.png',
    },
    {
      word: 'OUTREACH',
      partOfSpeech: 'noun',
      definition: "The process of contacting a potential customer to begin a conversation. In ABM, outreach is targeted and personalised — it goes to a specific person at a specific company with a specific message. Good outreach is relevant, brief, and focused on the recipient's situation, not on the product.",
      example: "Riley shared the outreach sequence: For each key account, we have a five-touch outreach plan — a LinkedIn connection, a personalised email, a video message, a phone call, and a final email. Marcus asked: What is the key message across all five? Riley replied: The message is not about us — it is about a problem they have that we know how to solve. The product only comes up if they respond. Dana added: The outreach that works in ABM is the kind that feels like someone did their homework.",
      imageSlug: '/images/outreach.png',
    },
    {
      word: 'IDEAL CUSTOMER PROFILE',
      partOfSpeech: 'noun',
      definition: 'A description of the type of company that is the perfect fit for your product — based on industry, size, location, tech stack, growth stage, and any other characteristics that predict they will get value and become long-term customers. ABM target lists are built from the ICP.',
      example: "Marcus defined the ICP for the new ABM programme: Our ideal customer profile is a B2B SaaS company with 200 to 1,000 employees, UK or European HQ, marketing team of at least five people, and currently using at least two different point solutions that our platform replaces. Dana asked: What does that give us as a total addressable target list? Riley replied: About 600 companies in Europe that match all the criteria — we are targeting the top 40 for tier-one ABM treatment this quarter.",
      imageSlug: '/images/ideal-customer-profile.png',
    },
    {
      word: 'STAKEHOLDER MAP',
      partOfSpeech: 'noun',
      definition: 'A document or diagram that shows all the people involved in a purchasing decision at a target account — their job titles, their level of influence, their priorities, and their relationship to each other. A stakeholder map helps you plan who to engage, in what order, and with what message.',
      example: "Dana built the stakeholder map for the enterprise account: There are six people involved in this decision. The CMO is the ultimate decision-maker. The Head of Marketing Operations is the main champion — she is the one who found us. The CFO needs to approve the budget. The IT Director needs to approve the security review. And two marketing managers are the end users who will influence the CMO's opinion. Marcus replied: That is a complex sale. We need a plan for each person — the message for the CMO is not the message for the IT Director.",
      imageSlug: '/images/account-based-marketing-stakeholder-map.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'WE ARE RUNNING AN ABM PROGRAMME TARGETING...',
      definition: "A phrase for describing an active account-based marketing effort directed at a specific set of companies or a specific sector. Always name who you are targeting and why. Used in strategy presentations, sales and marketing alignment meetings, and client briefs.",
      example: "Marcus presented to the board: We are running an ABM programme targeting the top 40 enterprise accounts in the financial services sector — companies with over 500 employees that match our ideal customer profile exactly. Dana added: Each account has a dedicated content and outreach plan. We are not broadcasting — we are having 40 individual conversations simultaneously.",
      imageSlug: '/images/running-an-abm-programme.png',
      inAction: 'We are running an ABM programme targeting 30 enterprise accounts in the healthcare sector — all of them match our ICP and three are showing high intent right now.',
      register: "Neutral — Corvo (B2B data platform, own sales team + LinkedIn): board update reads we are running an ABM programme targeting the top 25 accounts in the insurance sector — all show high intent and each has a dedicated account plan with personalised content. | Lynx (B2B security SaaS, SDR team + paid LinkedIn): QBR slide reads we are running an ABM programme targeting 50 mid-market accounts in the legal sector — chosen because three existing clients in this space are willing to act as reference customers. | Meridian (B2B analytics, own outbound + intent data): sales kick-off reads we are running an ABM programme targeting the CFO function at FTSE 250 companies — intent data shows 18 of them researching FP&A tools this month.",
      visualExamples: [
        { brand: 'Corvo', context: 'B2B data platform — own sales team + LinkedIn', imageSlug: '/images/visual-examples/corvo-abm-insurance.png', caption: 'We are running an ABM programme targeting 25 accounts in insurance — all show high intent, each has a dedicated personalised content plan.', aspectRatio: '16/9' },
        { brand: 'Meridian', context: 'B2B analytics — outbound + intent data', imageSlug: '/images/visual-examples/meridian-abm-cfo.png', caption: 'We are running an ABM programme targeting the CFO function at FTSE 250 companies — intent data shows 18 actively researching FP&A tools.', aspectRatio: '16/9' },
      ],
      inContext: "Marcus opened the quarterly business review with the sales team. We are running an ABM programme targeting the top 40 enterprise accounts in financial services, he said. This is not lead generation — we are not measuring by volume. We are measuring by account penetration, pipeline generated from named accounts, and meetings with decision-makers. Every name on this list is there for a reason.",
    },
    {
      phrase: 'THE DECISION-MAKER AT THIS ACCOUNT IS...',
      definition: "A phrase used in account planning and sales alignment meetings to identify who holds the authority to approve a purchase. Understanding who the decision-maker is — and whether you have access to them — is fundamental to whether a deal can progress. Always name the role and, if known, the person.",
      example: "Riley updated the account plan: The decision-maker at this account is the VP of Revenue Operations — she controls the tech stack budget and the final vendor decision. We have a relationship with the marketing team, but not with her yet. Marcus asked: What is the plan to get there? Dana suggested: A LinkedIn thought leadership piece specifically addressing the VP's challenges — and asking our existing contact to make a warm introduction.",
      imageSlug: '/images/decision-maker-at-this-account.png',
      inAction: "The decision-maker at this account is the Chief Revenue Officer — we have the marketing team's support, but we need an executive sponsor to get the CRO into the room.",
      register: "Neutral — Velo (B2B fleet management SaaS, direct sales): account review reads the decision-maker at this account is the COO — the Operations Director we have been talking to is a strong champion but needs COO sign-off for any spend over £50k. | Arch (B2B legal tech, SDR + AE team): deal review reads the decision-maker at this account is the Managing Partner — we have three associate-level relationships but have not broken through to the top yet. | Slate (B2B HR platform, enterprise team): QBR reads the decision-maker at this account is the CHRO — intent data shows they have been researching HR platforms for 6 weeks, and our champion has direct access.",
      visualExamples: [
        { brand: 'Velo', context: 'B2B fleet management SaaS — direct enterprise sales', imageSlug: '/images/visual-examples/velo-decision-maker-coo.png', caption: 'The decision-maker at this account is the COO — the champion can sell internally but cannot approve the deal without COO sign-off.', aspectRatio: '16/9' },
        { brand: 'Arch', context: 'B2B legal tech — SDR and AE team', imageSlug: '/images/visual-examples/arch-decision-maker-mp.png', caption: 'The decision-maker at this account is the Managing Partner — we have associate relationships but have not broken through to the top level yet.', aspectRatio: '16/9' },
      ],
      inContext: "Dana had prepared the account plan before the pipeline review. The decision-maker at this account is the CFO, she said. We have a very strong relationship with the finance operations team, but every proposal we put forward has to go through the CFO for final approval and she has never been in a meeting with us. Marcus replied: That is the risk in this deal. Champion without decision-maker access means the deal can stall indefinitely. What is the plan to get her in the room?",
    },
    {
      phrase: 'WE NEED TO PERSONALISE THE OUTREACH FOR...',
      definition: "A phrase for directing the team to create account-specific messaging rather than generic templates. Always name who the personalisation is for — the company, the individual, or the sector. It signals a shift from broadcast marketing to one-to-one communication.",
      example: "Marcus reviewed the outreach drafts: These emails are too generic — we need to personalise the outreach for each account individually. Riley asked: How specific should we go? Marcus replied: Reference something real — their latest product launch, a challenge specific to their industry, or a result we achieved for a direct competitor. Dana added: And address it to the right person with the right title. The message for the CMO is not the message for the Head of Operations.",
      imageSlug: '/images/we-need-to-personalise-the-outreach.png',
      inAction: 'We need to personalise the outreach for the retail sector accounts — the challenge they face right now is very different from our tech sector targets, and the message must reflect that.',
      register: "Neutral — Prism (B2B marketing analytics, outbound team): SDR coaching note reads we need to personalise the outreach for the FMCG accounts — reference the post-COVID shift to digital they are all navigating and position Prism as the measurement layer for that transition. | Fold (B2B financial content, direct sales): account review reads we need to personalise the outreach for this specific account — they just hired a new CMO from a company that was a previous Fold client, which is a strong opening. | Beacon (B2B recruitment SaaS, ABM programme): campaign brief reads we need to personalise the outreach for each of the 30 target accounts — each email must reference a public piece of information specific to that company.",
      visualExamples: [
        { brand: 'Prism', context: 'B2B marketing analytics — outbound SDR team', imageSlug: '/images/visual-examples/prism-personalisation-fmcg.png', caption: "We need to personalise the outreach for FMCG accounts — reference the post-COVID digital shift they're all navigating and position Prism as the measurement layer.", aspectRatio: '16/9' },
        { brand: 'Beacon', context: 'B2B recruitment SaaS — ABM programme', imageSlug: '/images/visual-examples/beacon-personalisation-accounts.png', caption: 'We need to personalise the outreach for each account — every email must reference a specific, real, publicly available piece of information about that company.', aspectRatio: '16/9' },
      ],
      inContext: "Riley had reviewed all 30 outreach emails the morning before the team meeting. We need to personalise the outreach for the financial services accounts specifically, she told the team. These are sophisticated buyers — they can identify a template email in the first sentence. Marcus agreed: The email for the Head of Marketing at a bank should reference what banks in their segment are dealing with right now — not a generic pitch about our product. Dana: I will write account-specific opening lines for each of the top ten. The rest of the email can be templated.",
    },
    {
      phrase: 'INTENT DATA SHOWS THAT THIS ACCOUNT IS...',
      definition: "A phrase for presenting intelligence about a target account's current buying behaviour. Always specify what the intent data shows — that they are researching, comparing, or evaluating — and use it to prioritise outreach timing. Used in sales and marketing alignment meetings.",
      example: "Dana flagged the signal: Intent data shows that this account is actively researching CRM solutions this week — they have been reading comparison articles and three people from the company visited our pricing page yesterday. Marcus replied: That is a high-priority outreach right now. Riley: I will send the personalised email today and follow up with the SDR to do a same-day LinkedIn connection. When intent is this high, every hour of delay is a risk.",
      imageSlug: '/images/intent-data-shows-that-this-account-is.png',
      inAction: 'Intent data shows that this account is in active evaluation mode — they have visited our pricing page four times this week and downloaded our competitive comparison guide.',
      register: "Neutral — Cascade (B2B operations platform, intent-led ABM): account prioritisation brief reads intent data shows that this account is in evaluation mode — Bombora shows a 3x spike in intent topics related to workflow automation in the last 10 days, making them our highest-priority outreach this week. | Rift (B2B cybersecurity, SDR programme): weekly SDR brief reads intent data shows that this account is researching endpoint security — three people from the company have visited our solutions page in the last 5 days. | Helix (B2B life sciences SaaS, ABM): account plan reads intent data shows that this account is comparing platforms — G2 activity and pricing page visits suggest an active RFP is being prepared.",
      visualExamples: [
        { brand: 'Cascade', context: 'B2B operations platform — intent-led ABM programme', imageSlug: '/images/visual-examples/cascade-intent-data-spike.png', caption: 'Intent data shows that this account is in evaluation mode — a 3x Bombora spike on workflow automation topics makes them the highest-priority outreach this week.', aspectRatio: '16/9' },
        { brand: 'Helix', context: 'B2B life sciences SaaS — ABM programme', imageSlug: '/images/visual-examples/helix-intent-rfp.png', caption: 'Intent data shows that this account is comparing platforms — G2 activity and pricing page visits suggest an active RFP is being prepared.', aspectRatio: '16/9' },
      ],
      inContext: "Dana came to the pipeline meeting with the intent data pulled up. Intent data shows that this account is actively in evaluation mode, she said — they have spiked on three intent topics related to our product category in the last two weeks and two people from the company visited our pricing page yesterday. Marcus turned to Riley: That is our highest-priority outreach today. What is the personalised hook?",
    },
    {
      phrase: 'THE STAKEHOLDER MAP FOR THIS ACCOUNT SHOWS...',
      definition: "A phrase for presenting the structure of a target company's buying team — who is involved, who has influence, and who has authority. Used in account planning and deal reviews to assess how well-connected the sales team is to the right people.",
      example: "Riley walked through the account plan: The stakeholder map for this account shows six people involved in the decision. The CMO is the decision-maker. The Head of Marketing Ops is our strongest champion. The CFO needs to approve the budget. Two marketing managers are the end users. Marcus asked: Who do we not have a relationship with? Riley: The CFO is the gap — and she is the one who can kill the deal. Dana: I will work with the AE on an executive outreach plan specifically for the CFO.",
      imageSlug: '/images/the-stakeholder-map-for-this-account.png',
      inAction: 'The stakeholder map for this account shows three people we have strong relationships with and two we have never spoken to — including the final decision-maker.',
      register: "Neutral — Vantage (B2B strategy platform, enterprise sales): deal review reads the stakeholder map for this account shows five influencers and one decision-maker — we are well-connected to the influencers but have not broken into the C-suite layer. | Lume (B2B energy management, account team): account plan reads the stakeholder map for this account shows a complex buying committee of seven — procurement, finance, and operations all have veto power, and we only have an operations-level relationship. | Grid (B2B productivity SaaS, growth team): account plan reads the stakeholder map for this account shows an unusually flat structure — the Head of Product has both technical authority and budget sign-off, which makes this an accelerated path to close.",
      visualExamples: [
        { brand: 'Vantage', context: 'B2B strategy platform — enterprise sales team', imageSlug: '/images/visual-examples/vantage-stakeholder-map.png', caption: 'The stakeholder map for this account shows five influencers and one decision-maker — well connected below but not yet at the C-suite level.', aspectRatio: '16/9' },
        { brand: 'Lume', context: 'B2B energy management — enterprise account team', imageSlug: '/images/visual-examples/lume-buying-committee.png', caption: 'The stakeholder map shows a buying committee of seven — procurement, finance, and operations all have veto power and we only have one relationship.', aspectRatio: '16/9' },
      ],
      inContext: "Dana presented the account at the deal review. The stakeholder map for this account shows a buying committee of six, she said. We have strong relationships with three of them. The two marketing managers are strong advocates. But the CFO has budget authority and we have never spoken to her. Riley looked at the risk column: If the CFO is not engaged, the deal can be blocked at any point. Marcus: This is the number one priority — get the CFO into the conversation before the end of Q3.",
    },
    {
      phrase: 'THIS ACCOUNT MATCHES OUR IDEAL CUSTOMER PROFILE BECAUSE...',
      definition: "A phrase for justifying why a specific company has been included in the ABM target list. Always give a specific reason — size, sector, tech stack, intent, existing relationship, or strategic value. It shows that account selection is data-driven, not arbitrary.",
      example: "Riley presented the account list justification: This account matches our ideal customer profile because it is a 400-person B2B SaaS company in the UK, uses three point solutions that our platform replaces, has a marketing team of eight people, and their Head of Marketing Operations attended our webinar last month. Marcus replied: That is a strong ICP match — high fit AND existing engagement signal. Dana: They also have a competitor of ours as their current vendor, which means they are familiar with the category. That shortens the education cycle.",
      imageSlug: '/images/this-account-matches-our-icp.png',
      inAction: 'This account matches our ideal customer profile because it is a B2B company with 300 employees, UK-based, currently using two tools our platform replaces, and showing high intent.',
      register: "Neutral — Prism (B2B analytics, ABM): account selection brief reads this account matches our ideal customer profile because it is a 500-person B2B company in the financial services sector, uses legacy reporting tools Prism replaces, and their marketing director downloaded our data maturity guide last week. | Beacon (B2B HR SaaS, ABM): tier-one list rationale reads this account matches our ideal customer profile because they recently announced a 200-person headcount expansion and are scaling faster than their current HR platform can support. | Fold (B2B content platform, ABM): account plan reads this account matches our ideal customer profile because they produce over 50 pieces of content per month, have a dedicated content team of four, and currently manage everything in spreadsheets.",
      visualExamples: [
        { brand: 'Prism', context: 'B2B analytics platform — ABM programme', imageSlug: '/images/visual-examples/prism-icp-match.png', caption: 'This account matches our ICP because it is a 500-person B2B company, uses legacy tools Prism replaces, and their marketing director downloaded our guide last week.', aspectRatio: '16/9' },
        { brand: 'Beacon', context: 'B2B HR SaaS — ABM account list', imageSlug: '/images/visual-examples/beacon-icp-expansion.png', caption: 'This account matches our ICP because they are scaling faster than their current platform can support — a 200-person expansion announcement triggered the outreach.', aspectRatio: '16/9' },
      ],
      inContext: "Riley defended the account list in the prioritisation meeting. This account matches our ideal customer profile because it hits all five of our ICP criteria, she said. Four hundred employees, B2B SaaS, UK-based, multiple point solutions we replace, and a marketing team of the right size. Marcus added: And they have an existing relationship with us — the Head of Marketing Operations attended two of our events. Dana: That is not just ICP fit — that is ICP fit plus warm signal. That is a tier-one account.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good morning, everyone. Today we are aligning sales and marketing on the Q4 [[ABM:Account-Based Marketing — a B2B strategy where marketing and sales target specific companies with personalised campaigns]] programme. Riley, take us through the target list.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "We have 40 [[key account:a high-value company chosen because of its revenue potential or strategic importance]]s for this quarter. Each one was selected because it matches our [[ideal customer profile:a description of the type of company that is the perfect fit for our product]] — B2B SaaS, 200 to 1,000 employees, UK or European HQ, and currently using at least two tools our platform replaces.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "I have also layered [[intent data:data that shows which companies are actively researching topics related to your product]] on top of the list. Eight of our 40 accounts are showing high intent right now — they have been reading comparison articles and visiting competitor pricing pages. Those eight are our immediate priority.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. Intent data shows that those accounts are in active evaluation mode — which means our outreach needs to happen this week, not next month. What does the [[outreach:the process of contacting a potential customer to begin a conversation]] plan look like?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Five touches per account — LinkedIn connection, personalised email, video message, phone call, and a final email. The key is [[personalisation:tailoring the message specifically for a person or company based on their situation]]— every first email references something specific to that company. Not a template.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "I have also built a [[stakeholder map:a document showing all the people involved in a purchasing decision, their roles, and their influence]] for each of the top ten accounts. Let me walk through the most complex one.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Go ahead.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "The stakeholder map for this account shows six people in the buying decision. The CMO is the [[decision-maker:the person with authority to approve the purchase]]. The Head of Marketing Ops is our strongest existing contact — she is the champion. The CFO needs to approve any spend over £80k. And two marketing managers are the end users who will influence the CMO's view.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "So we have access to the champion and the end users — but not to the CFO or the CMO. Both of them can block the deal.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "That is the risk. What is the plan to get to the CMO?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "We are creating a piece of content specifically for CMOs in their sector — a benchmarking report on marketing attribution. We distribute it via LinkedIn and targeted email to the CMO. It is not a product pitch — it is something genuinely useful. The ask is just a 30-minute conversation about the research.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "And for the CFO, we need a different approach — ROI-focused. I will build a financial impact model showing what the cost of their current fragmented tech stack is and what the consolidation saving would be. We send that through the champion with a request for a CFO briefing.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. This account matches our ideal customer profile perfectly — the only gap is stakeholder access. If we can get the CMO and CFO engaged before the end of the quarter, this is one of our strongest pipeline opportunities.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Agreed. Intent data shows this account is already researching — if a competitor gets to the CFO before we do, we may lose the deal without ever getting a fair hearing. Speed matters here.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "I will have the CMO content and the CFO financial model ready by Thursday. We run them simultaneously — both pieces go out the same week through different channels.",
    },
  ],

  matchingExercise: [
    { word: 'ABM', definition: 'a B2B strategy of targeting specific companies with personalised campaigns rather than broad-reach marketing' },
    { word: 'key account', definition: 'a high-value company chosen for its revenue potential or strategic importance' },
    { word: 'decision-maker', definition: 'the person in a company with authority to approve the purchase' },
    { word: 'personalisation', definition: 'tailoring messages or content specifically for a person or company based on their unique situation' },
    { word: 'intent data', definition: 'data showing which companies are actively researching topics related to your product' },
    { word: 'outreach', definition: 'the process of contacting a potential customer to begin a conversation' },
    { word: 'ideal customer profile', definition: 'a description of the type of company that is the perfect fit for the product' },
    { word: 'stakeholder map', definition: 'a document showing all the people in a buying decision, their roles, and their relationships' },
  ],

  fillBlankExercise: [
    { before: 'We are running an ABM programme', after: '40 enterprise accounts in the financial services sector — all match our ICP.', answer: 'targeting' },
    { before: 'Intent data shows that this account is in active', after: 'mode — they have visited our pricing page four times this week.', answer: 'evaluation' },
    { before: 'The decision-maker at this account is the CFO — we have champion access but have not reached the', answer: 'decision-maker', after: 'yet.' },
    { before: 'We need to personalise the', after: 'for each account — every email should reference something specific to that company.', answer: 'outreach' },
    { before: 'This account matches our ideal customer', after: 'because it is a 400-person B2B SaaS company in the UK with the right team size and tech stack.', answer: 'profile' },
    { before: 'The stakeholder map shows six people in the decision — we have relationships with three of them, but not with the', answer: 'decision-maker', after: '.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'How does Marcus describe the difference between ABM and standard demand generation?',
      options: ['ABM uses paid advertising while demand generation uses organic content', 'In ABM, marketing and sales are completely aligned on the same target list, messaging, and timing — it is not broad-reach, it is specific', 'ABM is only for enterprise companies with large sales teams'],
      correctIndex: 1,
    },
    {
      question: 'Why does Dana say the eight high-intent accounts need outreach this week?',
      options: ['Because they are the largest accounts on the list by revenue potential', 'Because intent data shows they are in active evaluation mode — reaching out at the moment of highest interest maximises response rates', 'Because the Q4 budget deadline means outreach after this week will be too late'],
      correctIndex: 1,
    },
    {
      question: 'What is the plan to engage the CFO at the key account?',
      options: ['Send them the same personalised email as the CMO but with a different subject line', 'Build a financial impact model showing the cost of the current tech stack and the consolidation saving — send it through the champion with a request for a CFO briefing', 'Wait until the CMO is engaged and ask them to introduce the CFO'],
      correctIndex: 1,
    },
    {
      question: 'What criteria does Riley use to select accounts for the ABM programme?',
      options: ['Company size only — all accounts with over 200 employees are included', 'Five ICP criteria: B2B SaaS, 200-1,000 employees, UK or European HQ, using at least two tools the platform replaces, and the right marketing team size', 'Intent data only — only companies that are actively researching right now'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'In your experience, is it better to reach many potential customers with a broad campaign, or to focus on a small number of ideal targets with very specific messages? Have you seen examples of each approach working?',
      'Think about a time when you received a piece of marketing that felt like it was written specifically for you — it knew your situation, your industry, or your problem. How did it make you feel and did it work?',
      'In B2B buying decisions, how many people are typically involved in the decision at your company or in companies you know? Does the same person who evaluates a product always have the authority to buy it?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'In ABM, you treat each target company _____ a market of one — every campaign is built specifically for them.',
        options: ['as', 'like', 'for'],
        correctIndex: 0,
        explanation: "'As' is correct in this fixed phrase — 'treat [something] as [something]'. 'As' indicates a role or function: 'treat each company as a market of one' means you consider each company to be, or to function as, its own individual market. 'Like' would suggest similarity or comparison ('it is like a market') rather than classification. 'For' changes the meaning entirely — 'treat something for something' is a medical phrase (treat a patient for a condition). Key pattern: 'treat [noun] as [noun]' — 'treat the account as a priority', 'treat the data as evidence', 'treat the objection as a question'.",
      },
      {
        sentence: 'Intent data _____ us when a target account is actively researching our product category.',
        options: ['tells', 'says', 'informs'],
        correctIndex: 0,
        explanation: "'Tells us' is the correct collocation — 'data tells us' is the standard phrase for describing what information reveals. 'Tell' takes a person as its indirect object: 'it tells us', 'it tells the team', 'it tells the salesperson'. 'Says' is also used with data informally ('the data says') but is slightly less precise. 'Informs' is correct but formal: 'the data informs our decision' — it means shapes or influences rather than communicates a specific fact. In performance and analytics contexts, 'tells us' is the most natural and specific choice.",
      },
      {
        sentence: 'We cannot close this deal _____ we get the CFO into the conversation.',
        options: ['unless', 'until', 'if'],
        correctIndex: 1,
        explanation: "'Until' is correct — it describes a condition of timing: the deal cannot close before a specific event happens (the CFO joining the conversation). 'Until' means 'up to the point when'. 'Unless' means 'except if' — it introduces a condition that prevents something: 'we cannot close unless the CFO approves' would mean the CFO's approval is the condition. 'Until' is about time; 'unless' is about condition. Both are close in meaning here, but 'until we get the CFO into the conversation' is more natural because it describes a sequence (first the meeting, then the close). 'If' is too uncertain — the team fully expects the CFO to be needed.",
      },
      {
        sentence: 'A good ABM email should reference something _____ to the specific company, not a generic pain point.',
        options: ['specific', 'especially', 'particularly'],
        correctIndex: 0,
        explanation: "'Specific' is the adjective needed here — it modifies the noun 'something'. 'Something specific to the company' means something that is unique or particular to that organisation. 'Especially' and 'particularly' are adverbs — they modify adjectives or verbs, not nouns ('especially useful', 'particularly relevant'). They cannot directly modify 'something' in this position. Key pattern: 'something [adjective]' — 'something real', 'something relevant', 'something specific'. The adjective follows the indefinite pronoun.",
      },
      {
        sentence: "If we don't engage the CMO this quarter, a competitor _____ the deal before we get a chance.",
        options: ['might win', 'wins', 'is winning'],
        correctIndex: 0,
        explanation: "'Might win' is correct — it expresses a real but uncertain future possibility. In conditional sentences describing risk or possibility (if + present tense, then result), 'might', 'could', or 'may' in the result clause expresses that this is a possible outcome, not a certainty. 'Wins' (simple present) would be used if this were a general truth or fact, not a conditional scenario. 'Is winning' (present continuous) suggests something already happening, not a future risk. 'Might win' accurately captures the urgency without overstating the certainty.",
      },
      {
        sentence: 'The stakeholder map _____ six people in the buying decision, including two who have veto power.',
        options: ['shows', 'shows us', 'is showing'],
        correctIndex: 0,
        explanation: "'Shows' — simple present, describing what the document contains or reveals. When describing what a document, data set, or report reveals, simple present is standard: 'the map shows', 'the data shows', 'the report shows'. 'Shows us' is also correct — it adds a recipient ('us') which is natural in speech ('the map shows us six people'). In writing, 'shows' alone is more concise. 'Is showing' (present continuous) would suggest a dynamic, ongoing action — but documents do not perform ongoing actions; they contain information. Simple present is the correct tense for describing static information in a document.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "Why should we do ABM instead of just running broader lead generation campaigns?",
          options: [
            "ABM and lead generation are not opposites — they serve different purposes. Lead generation builds a wide pipeline of potential interest. ABM focuses resources on the accounts most likely to become high-value, long-term customers. The case for ABM is efficiency: rather than converting 2% of a broad audience, you invest in converting 30-50% of a much smaller, much better-qualified list. For enterprise deals where the contract value justifies the investment, ABM typically delivers higher ROI.",
            "ABM is simply better than lead generation — it is what all sophisticated B2B companies do now. Lead generation is too slow and expensive.",
            "It depends on your budget. ABM is expensive, so only companies with large marketing budgets can do it properly.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct — it gives a balanced, evidence-based answer. It does not dismiss lead generation (which has a legitimate role) but explains clearly when and why ABM delivers better ROI. It frames ABM as a strategic choice, not a fashion. Option B is overconfident and dismissive — lead generation is still effective for many businesses and ABM is not universally superior. Option C is factually inaccurate — ABM can be done at small scale with a focused target list and basic tools. Budget is not the defining factor.",
        },
        {
          customerLine: "We sent personalised emails to 20 accounts and only two replied. Is ABM not working?",
          options: [
            "Two replies from 20 accounts is a 10% response rate — that is actually above average for cold outreach in B2B, where 2-5% is typical. The question is the quality of those replies, not just the number. ABM is measured by pipeline and revenue from named accounts, not just reply rate. Were the two replies from the right people? Did they move to the next stage?",
            "ABM is not working if only 10% respond. We need to increase the volume — contact 200 accounts instead of 20.",
            "The emails were probably not personalised enough. We need to start over with better research.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct — it reframes the metric (10% is actually good), asks the right diagnostic question (quality of replies, not quantity), and redirects attention to the actual ABM success metric: pipeline from named accounts. This is the kind of expert response that builds client confidence. Option B misunderstands ABM — increasing volume defeats the purpose of ABM, which is focused depth, not broad reach. Option C may or may not be correct, but jumping to 'start over' without any analysis is poor professional advice. Diagnose first.",
        },
        {
          customerLine: "We have access to the marketing team at the account but the VP of Marketing has not responded to our outreach. What should we do?",
          options: [
            "Keep emailing the VP until they respond — persistence is the key in ABM.",
            "Use the existing marketing team relationship as a bridge — ask a champion in the marketing team to make a warm introduction to the VP. In parallel, create content or an event specifically valuable to VPs in this sector and invite the VP directly through a channel other than email — LinkedIn or a targeted event invite, for example. The goal is to give the VP a reason to engage, not just another cold message.",
            "Accept that the VP is not interested and focus resources on other accounts where we have better access.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it uses the existing relationship strategically (warm introduction) and creates a new, high-value reason for the VP to engage (specific content or event). This is ABM best practice: multi-channel, multi-stakeholder, and value-led. Option A risks damaging the relationship — repeated cold outreach to someone who has not responded becomes spam, not persistence. Option C gives up too quickly. A VP not responding to outreach is normal — the solution is to change the approach, not abandon the account.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the ABM strategy meeting discussion. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "We are running an ABM programme targeting 40 enterprise accounts in the financial services sector." },
        { speaker: 'Riley', text: "Each account was select based on five ICP criteria — size, sector, location, tech stack, and existing relationships." },
        { speaker: 'Dana', text: "Intent data shows that eight of the accounts is in active evaluation mode right now." },
        { speaker: 'Marcus', text: "Those eight are our highest priority for this week's outreach." },
        { speaker: 'Riley', text: "I have built a stakeholder map for each of the top ten accounts. The most complex one has six people involved in the decision." },
        { speaker: 'Dana', text: "We have access to the champion but we have not yet spoke to the decision-maker — the CFO." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Each account was select',
          correction: 'Each account was selected',
          explanation: "In passive voice constructions, the past participle is required after 'was' / 'were' — not the base form. 'Was selected' is the correct passive: 'the account was selected' (by the team, based on criteria). 'Select' is the base form — it is used after modal verbs ('we should select', 'we can select') but cannot follow 'was' as a passive auxiliary. Common passive patterns: 'was selected', 'was built', 'was sent', 'was identified'. Always use the past participle (often ending in -ed for regular verbs) in passive constructions.",
        },
        {
          lineIndex: 2,
          incorrectText: 'eight of the accounts is',
          correction: 'eight of the accounts are',
          explanation: "When a subject is 'a number + of + plural noun', the verb agrees with the plural noun — not with the number. 'Eight of the accounts are' — because the subject is 'accounts' (plural). This is a subject-verb agreement rule that applies to all quantifier + of + plural noun structures: 'three of the campaigns are', 'a number of accounts are', 'several of the leads are'. Compare with: 'the number of accounts is growing' (where 'the number' is singular) — this is a different and commonly confused pattern.",
        },
        {
          lineIndex: 5,
          incorrectText: 'we have not yet spoke',
          correction: 'we have not yet spoken',
          explanation: "'Spoken' is the past participle of 'speak', required in the present perfect tense: 'have not spoken'. 'Spoke' is the simple past — used without an auxiliary: 'we spoke to the CFO last week'. In the present perfect ('have/has + past participle'), you must use the past participle form: speak → spoke (simple past) → spoken (past participle). Other irregular verbs with this pattern: write → wrote → written; break → broke → broken; choose → chose → chosen.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Explain the difference between ABM and traditional B2B lead generation to a new team member.",
          salespersonStart: "Traditional lead generation casts a wide net — you run campaigns to attract as many potential customers as possible and qualify them as they come in —",
          suggestedCompletion: "ABM is the reverse. Instead of attracting everyone and filtering out the right ones, you start by identifying the exact companies you want as customers and build campaigns specifically for them. In lead generation, marketing hands a list of leads to sales and sales qualifies them. In ABM, marketing and sales work from the same list from the beginning — same accounts, same messaging, same timing. The conversion rates are much higher because you are talking to the right companies with the right message at the right moment, instead of hoping the right company happens to find your campaign.",
        },
        {
          customerLine: "Write the opening two sentences of a personalised ABM email to a Head of Marketing at a B2B company that just expanded into three new European markets.",
          salespersonStart: "Congratulations on the European expansion —",
          suggestedCompletion: "entering three new markets simultaneously is a significant marketing challenge, especially when it comes to localising campaigns and measuring what is working across different audiences. I would love to show you how [Company Name] has helped marketing teams in similar expansion phases build a single measurement layer across multiple markets — so they can see what is actually driving growth in each one without running three separate analytics set-ups.",
        },
        {
          customerLine: "How do you use intent data to prioritise which accounts to contact first?",
          salespersonStart: "Intent data is a signal, not a guarantee —",
          suggestedCompletion: "but it tells you which of your target accounts is actively researching your product category right now. We use Bombora or G2 intent signals layered on top of our ICP account list. If an account on our list spikes on intent topics related to what we sell — meaning people at that company have been reading about it, searching for it, or comparing solutions — we treat that as a sign that they are in evaluation mode. That triggers an immediate, highly personalised outreach from the SDR and a LinkedIn connection from the AE. We are not changing the message for intent accounts, but we are dramatically accelerating the timing. Warm outreach to a company that is actively researching converts at three to four times the rate of the same outreach to a company that is not.",
        },
      ],
    },
  },
};

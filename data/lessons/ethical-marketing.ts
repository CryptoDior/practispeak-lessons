import { Lesson } from '@/types/lesson';

export const ethicalMarketing: Lesson = {
  slug: 'ethical-marketing',
  title: 'Ethical Marketing',
  subtitle: 'How to navigate greenwashing, transparency, diversity, and the regulations that govern what brands can and cannot say',
  level: 'B1-B2',
  description: "Consumers are increasingly sceptical. They can spot a hollow sustainability claim from a mile away, they know when a campaign is designed to look diverse without being inclusive, and they use social media to hold brands accountable faster than any regulator can. The brands that win long-term are not just the ones with the best products — they are the ones that earn and maintain trust through genuine transparency and ethical conduct. This lesson gives you the vocabulary to participate confidently in these conversations.",
  heroImage: '/images/ethical-marketing-hero.png',

  vocabulary: [
    {
      word: 'GREENWASHING',
      partOfSpeech: 'noun',
      definition: "When a company claims to be environmentally friendly or sustainable, but the claim is misleading or not supported by evidence. The company is trying to look green without actually being green. Greenwashing misleads consumers and undermines trust in genuine sustainability efforts.",
      example: "Riley raised the concern: I have looked at our sustainability campaign and I am worried we are heading into greenwashing territory. Marcus asked: What specifically? Riley explained: We are claiming to be carbon neutral, but we have only offset 40% of our actual emissions and we have not changed any of our manufacturing processes. Dana added: And the offsetting we have done is through a scheme that has been questioned by independent auditors. We need to either get the sustainability credentials right or change what we are claiming. Making a claim we cannot substantiate is not a marketing problem — it is a legal and reputational risk.",
      imageSlug: '/images/greenwashing.png',
    },
    {
      word: 'TRANSPARENCY',
      partOfSpeech: 'noun',
      definition: "Being open and honest about how a business operates — including how products are made, where they come from, what they cost to produce, and how the company makes decisions. Transparency builds trust. In marketing, it means not hiding important information or making claims that are technically true but deliberately misleading.",
      example: "Marcus proposed: We should publish a full ingredient list for every product, including the ones that are not required by law. Dana asked: Why go beyond legal requirements? Marcus replied: Because transparency is becoming a competitive advantage. Consumers are researching brands before they buy. If they find our information proactively, they trust us. If they have to dig for it — or if they find something we tried to hide — they do not. Riley added: And B2B clients increasingly require supplier transparency in their ESG reporting. Being proactive now prepares us for requirements that are coming.",
      imageSlug: '/images/transparency.png',
    },
    {
      word: 'DIVERSITY',
      partOfSpeech: 'noun',
      definition: "Having a wide variety of different people represented — in advertising, in the company, and in leadership. Diversity in marketing means showing people of different ages, races, genders, body types, abilities, and backgrounds in campaigns. True diversity goes beyond visuals — it includes whose stories are told and whose voices shape the creative.",
      example: "Dana raised a concern about the upcoming campaign: The casting brief we received from the agency shows 12 models — 10 of whom are young, white, and able-bodied. This does not reflect our actual customer base. Riley agreed: We have done the data. Our customers are 58% female, span four ethnic groups, and skew 35 to 55 in age. The campaign does not reflect that. Marcus replied: Send the brief back. Not just because it is the right thing to do — because a campaign that looks nothing like our customers is less effective. Diversity in marketing is not charity — it is accuracy.",
      imageSlug: '/images/diversity.png',
    },
    {
      word: 'INCLUSION',
      partOfSpeech: 'noun',
      definition: "Making sure all people feel welcome, represented, and valued — not just present. A campaign can show diverse faces but still feel exclusionary if those faces are stereotyped or shown in limiting roles. Inclusion means that representation is meaningful, not tokenistic.",
      example: "Marcus shared the research: We tested two versions of the campaign. Version A showed a Black woman as a doctor giving advice. Version B showed her as a patient receiving advice. Among Black female respondents, Version A scored 34% higher on brand affinity. Riley commented: Which confirms that inclusion is not just about who is in the ad — it is about how they are shown and what role they play. Dana added: This is the difference between diversity — putting different people in the frame — and inclusion — making sure those people are shown with the same dignity and complexity as everyone else.",
      imageSlug: '/images/inclusion.png',
    },
    {
      word: 'REGULATION',
      partOfSpeech: 'noun',
      definition: "The rules and laws that govern what businesses are allowed to say and do in their marketing. In the UK, the Advertising Standards Authority (ASA) regulates advertising claims. Other regulators cover specific sectors — like financial services or pharmaceuticals. Breaking regulations can result in fines, bans, and serious reputational damage.",
      example: "Dana flagged a risk: The claim in our email campaign — 'proven to increase productivity by 47%' — needs substantiation. If we cannot provide the independent research behind that number to the ASA, that claim is non-compliant. Riley asked: What is the risk if we leave it? Dana replied: The ASA can require us to withdraw the campaign and publish a correction notice — which is far more damaging than just changing the line. Marcus said: Remove the specific percentage. Replace it with language we can substantiate: 'customers report significant time savings'. That is honest and defensible.",
      imageSlug: '/images/regulation.png',
    },
    {
      word: 'ACCOUNTABILITY',
      partOfSpeech: 'noun',
      definition: "Taking responsibility for what a company does and does not do — including mistakes. In ethical marketing, accountability means acknowledging when a campaign has caused harm or been misleading, and taking concrete steps to fix it — not just issuing a vague apology.",
      example: "Riley opened the debrief: The campaign caused genuine harm to a community group who felt stereotyped by the imagery. We have received 400 complaints and three media enquiries. Marcus replied: We need to respond with accountability — not a defensive statement. Dana drafted: We acknowledge that this campaign failed to meet our own standards of respectful representation. We apologise without qualification, we have withdrawn the campaign immediately, and we are taking three specific actions. Marcus agreed: No passive voice. No 'mistakes were made'. Direct, honest, and with specific commitments. That is what accountability looks like.",
      imageSlug: '/images/accountability.png',
    },
    {
      word: 'SUSTAINABILITY',
      partOfSpeech: 'noun',
      definition: "Running a business in a way that can continue long-term without causing serious damage to the environment or society. In marketing, sustainability means both communicating genuine environmental credentials and ensuring the business itself operates in a way that supports long-term wellbeing.",
      example: "Dana presented the sustainability audit findings: We have genuine credentials in three areas — our packaging is 100% recyclable, our UK operations run on renewable energy, and we have a verified living wage across our supply chain. Those are substantiable claims. Marcus replied: Good — those three facts are the foundation of any sustainability communication. Riley added: And they are the reason we can talk credibly about sustainability at all. The audit also showed two areas where our claims were ahead of our reality — and those two claims come out of all communications immediately.",
      imageSlug: '/images/sustainability.png',
    },
    {
      word: 'PURPOSE-DRIVEN',
      partOfSpeech: 'adjective',
      definition: "A brand or company that is guided by a clear social or environmental mission — not just profit. Purpose-driven marketing connects the brand to a cause that is genuinely aligned with its values and business model. When done authentically, it builds deep loyalty. When done cynically, it is perceived as exploitation.",
      example: "Marcus opened the brand positioning session: We want to become a purpose-driven brand. Riley asked the key question: What is the purpose? Is it genuine — does it connect to what we actually do and believe — or is it a narrative layer we are placing on top of a business that has not changed? Dana added: Because purpose-driven positioning that is not backed by actual purpose is what gets brands into serious trouble. The question is not what purpose sounds good. The question is: what does this company genuinely stand for, and how does everything we do demonstrate that?",
      imageSlug: '/images/purpose-driven.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'THAT CLAIM COULD BE SEEN AS GREENWASHING',
      definition: "A phrase for flagging that a specific marketing claim risks being perceived as misleading on environmental or sustainability grounds — even if the claim is technically accurate. Used to raise legal, reputational, or ethical concerns before a campaign goes live.",
      example: "Riley reviewed the draft campaign: That claim — 'we plant a tree for every order' — could be seen as greenwashing if we are not also addressing the environmental impact of the packaging, the carbon footprint of delivery, or the sourcing of raw materials. Dana agreed: The tree planting is real, but it represents less than 2% of our actual environmental impact. Emphasising it while not mentioning the other 98% is selective at best, misleading at worst. Marcus: Pull the claim. Replace it with a factual breakdown of what we are actually doing — all of it, including the areas where we are still working to improve.",
      imageSlug: '/images/that-claim-could-be-seen-as-greenwashing.png',
      inAction: "That claim could be seen as greenwashing — we are emphasising the 5% of the product that is recycled without mentioning that the other 95% is single-use plastic.",
      register: "Neutral — Verde (FMCG brand, legal and compliance): pre-launch review flags the 'eco-friendly' descriptor on the product packaging could be seen as greenwashing without an independent certification or substantiation statement — legal recommends replacing with specific, provable language. | Solace (B2B logistics company, marketing): internal review reads the 'carbon neutral shipping' claim could be seen as greenwashing — we only offset a portion of freight emissions and the scheme used is not verified by the Gold Standard. | Bloom (DTC supplement brand, ethical marketing review): brand review reads the 'planet-positive' tagline could be seen as greenwashing given that our carbon assessment is still in progress — we should wait until we have the data.",
      visualExamples: [
        { brand: 'Verde', context: 'FMCG brand — legal and compliance pre-launch review', imageSlug: '/images/visual-examples/verde-greenwashing-claim.png', caption: "The 'eco-friendly' packaging claim could be seen as greenwashing without independent certification — legal recommends specific, provable language instead.", aspectRatio: '16/9' },
        { brand: 'Solace', context: 'B2B logistics — internal marketing review', imageSlug: '/images/visual-examples/solace-carbon-neutral-flag.png', caption: "The 'carbon neutral shipping' claim could be seen as greenwashing — only a portion of freight emissions are offset, and the scheme is not Gold Standard verified.", aspectRatio: '16/9' },
      ],
      inContext: "Riley had the draft campaign on screen. That claim — that we are a sustainable business — could be seen as greenwashing, she said. We have one verified credential. Everything else in the campaign is aspiration dressed as fact. Dana looked at the legal exposure: the ASA has been actively pursuing greenwashing cases and several brands in our sector have received formal rulings. Marcus: Strip everything back to what we can substantiate. One credential, stated precisely, with the source. That is less exciting but it is defensible.",
    },
    {
      phrase: 'WE NEED TO BE TRANSPARENT ABOUT...',
      definition: "A phrase for identifying specific information that should be disclosed openly to consumers, regulators, or stakeholders — rather than hidden, minimised, or buried in small print. Used when raising compliance, ethical, or reputational risk.",
      example: "Dana said: We need to be transparent about the fact that the influencers in this campaign are paid partners — not organic advocates. Under ASA guidelines, paid partnerships must be clearly disclosed. Riley added: And not just with a small hashtag at the end — it needs to be visible and prominent. If a follower has to search for the disclosure, it is not adequate. Marcus replied: Amend the brief. Every piece of influencer content must carry a clear, prominent disclosure — 'Paid partnership with [Brand]' — before any product claim is made.",
      imageSlug: '/images/we-need-to-be-transparent-about.png',
      inAction: 'We need to be transparent about the fact that our 5-star rating is based on 12 reviews, not 1,200 — otherwise the claim is technically accurate but functionally misleading.',
      register: "Neutral — Kora (DTC subscription, legal): compliance review reads we need to be transparent about our cancellation policy in the sign-up flow — burying it in the terms means customers are cancelling angrily, which drives chargebacks and regulator complaints. | Halo (DTC beauty, influencer brief): campaign brief reads we need to be transparent about paid partnerships — all influencers must use platform-native disclosure tools, not just hashtags. | Crest (B2B SaaS, commercial): sales brief reads we need to be transparent about our data processing practices with enterprise clients — GDPR and procurement requirements mean they will ask, and a clear answer in advance builds trust.",
      visualExamples: [
        { brand: 'Kora', context: 'DTC subscription — legal and compliance review', imageSlug: '/images/visual-examples/kora-transparency-cancellation.png', caption: 'We need to be transparent about our cancellation policy in the sign-up flow — burying it in terms drives chargebacks and regulator complaints.', aspectRatio: '4/5' },
        { brand: 'Halo', context: 'DTC beauty — influencer campaign brief', imageSlug: '/images/visual-examples/halo-transparency-paid-partnership.png', caption: 'We need to be transparent about paid partnerships — all influencers must use platform-native disclosure tools, not just small hashtags at the end of a post.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus pulled up the influencer campaign results. The campaign performed well — but Dana had a concern. We need to be transparent about the paid nature of these partnerships, she said. I have looked at five of the ten posts and none of them carry a clear disclosure. Riley: That is an ASA violation. Not a risk — a violation. Marcus: Pause the campaign. Every post needs to be corrected before it goes back live, and the agency needs a revised brief that makes disclosure non-negotiable for all future work.",
    },
    {
      phrase: 'THE CAMPAIGN SHOULD REFLECT THE DIVERSITY OF OUR CUSTOMERS',
      definition: "A phrase for ensuring that the people shown in a marketing campaign — in photography, video, copywriting, and examples — accurately represent who the brand's customers actually are. Used in creative briefing, campaign review, and agency feedback.",
      example: "Riley set the standard in the campaign brief: The campaign should reflect the diversity of our customers — which means the casting must include people across age ranges 25 to 65, multiple ethnic backgrounds, and a range of body types. Dana added: And not just in background roles. Our data shows 62% of our customers are over 45. I should be seeing people over 45 in the lead roles of this campaign, not in supporting ones. Marcus confirmed: Send this back to the agency with those specific parameters. Diversity in casting is not optional — it is an accuracy requirement.",
      imageSlug: '/images/the-campaign-should-reflect-diversity.png',
      inAction: 'The campaign should reflect the diversity of our customers — we sell to 140 countries and the campaign currently features only European faces.',
      register: "Neutral — Ember (meal kit subscription, creative brief): campaign brief reads the campaign should reflect the diversity of our customers — our subscriber base is 54% non-white and the initial creative concepts show a 90% white cast. | Forge (B2B HR platform, marketing): product launch brief reads the campaign should reflect the diversity of our customers' organisations — case studies and testimonials should represent a range of industries, company sizes, and seniority levels. | Halo (DTC beauty, creative review): campaign review reads the campaign should reflect the diversity of our customers — beauty is for everyone, and the current lineup does not represent the range of skin tones, ages, or hair types in our customer base.",
      visualExamples: [
        { brand: 'Ember', context: 'Meal kit subscription — creative brief feedback', imageSlug: '/images/visual-examples/ember-diversity-casting.png', caption: 'The campaign should reflect the diversity of our customers — our subscriber base is 54% non-white and the initial creative concepts show a 90% white cast.', aspectRatio: '16/9' },
        { brand: 'Forge', context: 'B2B HR platform — product launch brief', imageSlug: '/images/visual-examples/forge-diversity-testimonials.png', caption: 'The campaign should reflect the diversity of our customers — case studies should represent a range of industries, company sizes, and seniority levels.', aspectRatio: '4/5' },
      ],
      inContext: "Dana sent the feedback to the agency. The campaign should reflect the diversity of our customers, she wrote. What we have received is a casting lineup that does not match our actual audience by age, ethnicity, or body type. We have attached our customer demographic data. Please re-submit the casting proposal using these parameters. Riley added one line to the email: We will not approve casting that does not meet these standards. Marcus agreed: Set the standard clearly up front. It saves everyone time.",
    },
    {
      phrase: 'THIS RAISES A REGULATORY CONCERN AROUND...',
      definition: "A phrase for flagging that a specific campaign element, claim, or practice may conflict with advertising regulations or industry codes of conduct. Always specify the exact issue — the claim, the regulation, and the action needed.",
      example: "Dana flagged: This raises a regulatory concern around the before and after imagery in the email campaign. The ASA requires that before and after images accurately represent typical results — not best-case results. If the transformation shown is not representative of what most customers experience, this is a non-compliant claim. Riley asked: What is the fix? Dana replied: Either add a disclaimer that results are not typical, replace the imagery with something more representative, or remove the comparison entirely. Marcus: Remove it. Before and after comparisons are high risk in our category and the potential upside does not justify the regulatory exposure.",
      imageSlug: '/images/this-raises-a-regulatory-concern.png',
      inAction: 'This raises a regulatory concern around the health benefit claims in the product description — pharmaceutical-adjacent language in FMCG requires specific substantiation under ASA guidelines.',
      register: "Neutral — Kora (DTC supplement brand, legal): campaign brief review reads this raises a regulatory concern around the 'clinically proven' language in the copy — that specific phrase requires peer-reviewed clinical trial evidence, which we do not have. Replace with 'tested and trusted by our community'. | Velo (B2B fleet SaaS, compliance): product page review reads this raises a regulatory concern around the 'guaranteed uptime' claim — SLA language in B2B technology must be defined precisely with conditions, not used as a marketing superlative. | Bloom (DTC wellness, marketing): influencer brief reads this raises a regulatory concern around scripted testimonials — ASA rules require that testimonials reflect genuine personal experience, not agency-written copy.",
      visualExamples: [
        { brand: 'Kora', context: 'DTC supplement brand — legal and campaign review', imageSlug: '/images/visual-examples/kora-regulatory-clinical.png', caption: "This raises a regulatory concern around 'clinically proven' — that phrase requires peer-reviewed trial evidence. Replaced with 'tested and trusted by our community'.", aspectRatio: '16/9' },
        { brand: 'Bloom', context: 'DTC wellness — influencer brief compliance review', imageSlug: '/images/visual-examples/bloom-regulatory-testimonials.png', caption: 'This raises a regulatory concern around scripted testimonials — ASA rules require testimonials to reflect genuine personal experience, not agency-written copy.', aspectRatio: '4/5' },
      ],
      inContext: "Dana put the legal review on the table. This raises a regulatory concern around the results claims in the main campaign creative, she said. Three of the five claims — the specific percentages — are not substantiated by data we can provide to the ASA on request. Marcus looked at the timeline: can we get the substantiation in time? Dana: Not before the launch date. Marcus: Then the percentages come out. Riley: Replace them with outcome language that is accurate and credible without the specific numbers. We launch on time with claims we can defend.",
    },
    {
      phrase: 'OUR PURPOSE-DRIVEN POSITIONING MUST BE BACKED BY...',
      definition: "A phrase for ensuring that a brand's stated social or environmental purpose is supported by real, verifiable action — not just narrative. Used when reviewing purpose-led campaigns or brand positioning to ensure authenticity and avoid purpose-washing.",
      example: "Marcus said: Our purpose-driven positioning must be backed by evidence of what we actually do — not just what we aspire to. Riley agreed: We cannot claim to be a brand that puts people before profit if we have zero employee ownership, pay at the legal minimum, and have no community investment programme. Dana added: The gap between stated purpose and actual practice is exactly what journalists and consumer advocates look for. If our positioning is ahead of our reality, we are not just at risk of reputational damage — we are actively creating it.",
      imageSlug: '/images/our-purpose-driven-positioning-must-be.png',
      inAction: 'Our purpose-driven positioning must be backed by a verified living wage across the supply chain — otherwise the claim is aspirational marketing, not a business commitment.',
      register: "Neutral — Verde (FMCG brand, brand strategy): annual brand review reads our purpose-driven positioning must be backed by independently verified environmental data — a third-party audit is scheduled for Q2 and the positioning cannot launch before the results are in. | Ember (subscription, commercial planning): investor update reads our purpose-driven positioning must be backed by hard numbers — our commitment to food waste reduction requires the measurement framework to be in place before we make public claims. | Forge (B2B HR, brand refresh): positioning brief reads our purpose-driven positioning must be backed by internal data on how we treat our own people — if we claim to champion workplace equity, our own gender pay gap report needs to be published first.",
      visualExamples: [
        { brand: 'Verde', context: 'FMCG brand — annual brand strategy review', imageSlug: '/images/visual-examples/verde-purpose-audit.png', caption: 'Our purpose-driven positioning must be backed by independently verified environmental data — the audit is in Q2 and positioning cannot launch before results are confirmed.', aspectRatio: '16/9' },
        { brand: 'Forge', context: 'B2B HR — brand refresh positioning brief', imageSlug: '/images/visual-examples/forge-purpose-equity.png', caption: 'Our purpose-driven positioning must be backed by internal data — if we champion workplace equity, our gender pay gap report needs to be published first.', aspectRatio: '4/5' },
      ],
      inContext: "Riley presented the new brand purpose: We exist to make healthy living accessible to everyone. Marcus asked the hard question: Our purpose-driven positioning must be backed by something tangible. What is the proof? Riley had three examples — subsidised pricing for lower-income cohorts, a partnership with the NHS, and a published nutrition transparency report. Dana: Those are real. Lead with those. The narrative follows the evidence — not the other way round.",
    },
    {
      phrase: 'WE ARE COMMITTED TO HOLDING OURSELVES ACCOUNTABLE FOR...',
      definition: "A phrase used in public statements, internal communications, or campaign copy to signal genuine commitment to a specific standard or improvement — and to accept responsibility for meeting it. Used in crisis response, brand purpose statements, and stakeholder communications.",
      example: "Marcus drafted the public response: We are committed to holding ourselves accountable for the impact of this campaign. We acknowledge that the imagery caused harm, we have withdrawn the campaign immediately, and we are committing to three specific changes: an independent review of our creative brief process, diversity and inclusion training for the agency we work with, and a public report on our progress in six months. Riley reviewed it: This is the right tone. It is specific, it is not defensive, and the commitments are measurable. Dana added: Make sure the six-month report actually happens. Accountability without follow-through is worse than no commitment at all.",
      imageSlug: '/images/we-are-committed-to-accountability.png',
      inAction: 'We are committed to holding ourselves accountable for our environmental claims — which is why we publish a verified annual sustainability report, not just a sustainability page.',
      register: "Neutral — Solace (logistics company, crisis response): public statement reads we are committed to holding ourselves accountable for our carbon emissions — our verified reduction targets are published annually and monitored by an independent board. | Halo (DTC beauty, DEI statement): brand update reads we are committed to holding ourselves accountable for representation — we will publish our casting data by demographic every quarter, starting this year. | Bloom (wellness brand, regulatory response): ASA response reads we are committed to holding ourselves accountable for the accuracy of our product claims — all advertising copy is now reviewed by an independent regulatory consultant before publication.",
      visualExamples: [
        { brand: 'Halo', context: 'DTC beauty — DEI and representation statement', imageSlug: '/images/visual-examples/halo-accountability-casting.png', caption: 'We are committed to holding ourselves accountable for representation — casting data will be published by demographic every quarter, starting this year.', aspectRatio: '4/5' },
        { brand: 'Bloom', context: 'DTC wellness — ASA regulatory response', imageSlug: '/images/visual-examples/bloom-accountability-claims.png', caption: 'We are committed to holding ourselves accountable for the accuracy of our product claims — all copy is now reviewed by an independent regulatory consultant before publication.', aspectRatio: '16/9' },
      ],
      inContext: "The statement went through five drafts. We are committed to holding ourselves accountable for what happened, Marcus read aloud from the final version. Dana liked the specificity: the three commitments are named, they have deadlines, and we are promising a public update. Riley: That is the difference between a statement that rebuilds trust and one that deepens the damage. The public statement is step one. The follow-through over the next six months is what actually determines whether trust is rebuilt.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Before we sign off the Q4 campaign, I have a concern I need to raise. The sustainability claims in the creative — specifically the 'planet-positive' headline — could be seen as [[greenwashing:misleading claims about environmental credentials]] under current ASA guidance. I want us to look at this properly before it goes live.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Walk me through the specific concern.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "We have one verified environmental credential — the recyclable packaging. The carbon neutral claim is based on a partial offset with an unverified scheme. And 'planet-positive' implies a net benefit to the environment, which we cannot evidence at all. This raises a [[regulation:the rules governing what brands can and cannot claim in marketing]] concern that we need to address before launch.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "What is the actual legal exposure if the ASA investigates?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Mandatory withdrawal, a public ruling, and a correction notice published on our own website. The reputational cost of that is far higher than the campaign value. We need to be [[transparent:open and honest about how the business operates]] about what we have actually done — not what we aspire to.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Agreed. So what is the revised approach?",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "We lead with the one credential we can substantiate — the recyclable packaging. We remove the carbon neutral and planet-positive claims until we have the verified data. And we add a [[transparency:openness about what a company does and does not do]] statement: 'We are working towards reducing our full carbon footprint and will publish our targets in Q1.' Honest and credible.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "There is also a second issue. The campaign casting does not reflect the [[diversity:a wide variety of different people represented in advertising and in the company]] of our actual customer base. I have the data here — our customers are 58% non-white, span ages 25 to 70, and include a significant proportion of customers with disabilities. The current lineup is 90% young and white.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The campaign should reflect the diversity of our customers. Send it back to the agency with specific parameters from the demographic data.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "And the brief should specify [[inclusion:ensuring people are shown with dignity and meaningful roles, not just present]] — not just that we want diverse faces in the campaign, but that the lead roles and the storytelling reflect the full range of our customers. A diverse cast in background roles with young white leads is not enough.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "While we are looking at this, I want to raise the longer-term question. We have been talking about becoming a [[purpose-driven:guided by a genuine social or environmental mission, not just profit]] brand. But right now we are stripping out environmental claims we cannot substantiate and rewriting casting briefs because they do not reflect our customers. The purpose positioning needs to be backed by real change, not just narrative.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Our purpose-driven positioning must be backed by evidence of what we actually do. I agree. Let us build the [[sustainability:running a business in a way that does not cause serious harm to the environment or society]] programme properly before we position around it. That means completing the supply chain audit, verifying the emissions data, and publishing the results.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "And we need an internal [[accountability:taking genuine responsibility for what the company does and does not do]] framework — not just for campaigns, but for the commitments we make publicly. If we say we will publish a sustainability report in Q1, we are committed to holding ourselves accountable for doing that. No vague promises.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Agreed on all points. Actions: Dana revises the sustainability claims today using only what we can substantiate. Riley sends the casting brief back to the agency with specific diversity and inclusion requirements. I will schedule the full sustainability programme planning session for next week. Ethical marketing is not a constraint on creativity — it is a foundation for trust.",
    },
  ],

  matchingExercise: [
    { word: 'greenwashing', definition: 'making misleading environmental claims that are not supported by evidence' },
    { word: 'transparency', definition: 'being open and honest about how the business operates, including limitations' },
    { word: 'diversity', definition: 'representing a wide range of different people in advertising and in the company' },
    { word: 'inclusion', definition: 'ensuring diverse people are shown with dignity and meaningful roles, not just present' },
    { word: 'regulation', definition: 'the rules and laws governing what businesses are allowed to claim in marketing' },
    { word: 'accountability', definition: 'taking genuine responsibility for mistakes and making specific commitments to improve' },
    { word: 'sustainability', definition: 'operating in a way that does not cause serious long-term harm to the environment or society' },
    { word: 'purpose-driven', definition: 'guided by a genuine social or environmental mission, not just profit motives' },
  ],

  fillBlankExercise: [
    { before: 'The claim that we are carbon neutral could be seen as', after: 'unless it is backed by verified, independent data.', answer: 'greenwashing' },
    { before: 'We need to be', after: 'about the fact that these influencers are paid partners, not organic advocates.', answer: 'transparent' },
    { before: 'The campaign should reflect the', after: 'of our customers — age, ethnicity, body type, and ability.', answer: 'diversity' },
    { before: 'Showing diverse faces in supporting roles while the leads are all similar is', answer: 'diversity', after: 'without inclusion.' },
    { before: 'The "clinically proven" language raises a regulatory concern — that phrase requires peer-reviewed evidence that we do not currently', answer: 'have', after: '.' },
    { before: 'Our purpose-driven positioning must be backed by real action — otherwise the gap between our stated purpose and our actual practice is exactly what journalists', answer: 'look for', after: '.' },
  ],

  multipleChoiceExercise: [
    {
      question: "What is Dana's specific concern about the 'planet-positive' campaign headline?",
      options: ["The headline is too long and will not work on mobile devices", "The claim implies a net benefit to the environment which the brand cannot evidence, creating regulatory and reputational risk", "The word 'planet' tests poorly with younger demographics in brand research"],
      correctIndex: 1,
    },
    {
      question: 'What does Riley propose as the revised sustainability approach?',
      options: ['Remove all sustainability language from the campaign and focus on product benefits instead', 'Lead with the one substantiable credential, remove unverified claims, and add a transparent statement about future targets', 'Add small-print disclaimers to the claims so they are technically compliant with ASA guidelines'],
      correctIndex: 1,
    },
    {
      question: "What is Marcus's final summary of what ethical marketing represents for the brand?",
      options: ['A legal requirement that limits creative freedom and should be managed carefully', 'A constraint on creativity that needs to be balanced against commercial ambition', 'A foundation for trust, not a constraint on creativity'],
      correctIndex: 2,
    },
    {
      question: "What is the difference between diversity and inclusion that Riley describes?",
      options: ['Diversity is about social media representation and inclusion is about in-store experience', 'Diversity is about who is in the frame and inclusion is about how those people are shown — with dignity and meaningful roles', 'Diversity applies to casting and inclusion applies to the internal team who creates the campaign'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      "Have you ever seen a brand claim to be 'sustainable' or 'eco-friendly' and felt sceptical? What made you doubt the claim — and what would have made you believe it?",
      'Think of an advertising campaign you remember that featured people who looked like you or your community. How did it make you feel about the brand? And have you seen campaigns where the opposite was true?',
      'If a brand you trusted made a serious ethical mistake — a misleading claim, a harmful campaign, an exploitative practice — what would they have to do for you to trust them again? Is there anything that would make trust impossible to rebuild?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'A campaign _____ claims to be sustainable without verifiable evidence is at risk of being classified as greenwashing.',
        options: ['that', 'which', 'who'],
        correctIndex: 0,
        explanation: "Both 'that' and 'which' can introduce a defining relative clause about a thing (a campaign). In a defining relative clause — one that identifies which specific thing we are talking about — 'that' is the standard choice in modern British English: 'a campaign that claims'. 'Which' is correct but is more commonly used in non-defining relative clauses (with a comma before it): 'the campaign, which claims...' — this adds extra information about a campaign already identified. 'Who' is used for people, not things: 'a company that/which claims' — not 'that/which claims' for inanimate nouns. In formal written English, 'that' for defining clauses and 'which' (with comma) for non-defining clauses is the standard British distinction.",
      },
      {
        sentence: 'The ASA requires that testimonials _____ genuine personal experience, not agency-written scripts.',
        options: ['reflect', 'reflects', 'reflecting'],
        correctIndex: 0,
        explanation: "After 'require that', the verb in the subordinate clause takes the subjunctive mood in formal and legal English. The subjunctive uses the base form of the verb (no -s, no -ing, no auxiliary) regardless of the subject: 'the ASA requires that testimonials reflect' — not 'reflects'. This is the mandative subjunctive — used after verbs of requirement, suggestion, or recommendation: 'require that', 'recommend that', 'insist that', 'propose that'. Compare: 'The ASA requires that the brand withdraw the ad' (not 'withdraws'). In British English, 'should' is sometimes used instead: 'the ASA requires that testimonials should reflect' — both are correct in British formal English.",
      },
      {
        sentence: 'The brand withdrew the campaign immediately _____ the complaints were received.',
        options: ['after', 'once', 'when'],
        correctIndex: 2,
        explanation: "All three options — 'after', 'once', and 'when' — are grammatically possible here, but they carry subtly different meanings. 'When' describes the time relationship as simultaneous or closely linked: the withdrawal happened at the time the complaints came in. 'After' implies a time gap — the campaign was withdrawn at some point following the complaints, with a suggested delay. 'Once' implies a condition that was met: 'as soon as the complaints were received, the brand withdrew the campaign' — this is also natural. In the context of showing immediate accountability, 'when' is the most neutral and is the best match for 'withdrew immediately'. 'Once' is close but implies a causal threshold. 'After' implies a gap that contradicts 'immediately'.",
      },
      {
        sentence: 'Purpose-driven positioning must be _____ by real evidence, not just aspirational language.',
        options: ['backed', 'supported', 'accompanied'],
        correctIndex: 0,
        explanation: "'Backed by' is the established collocation for this exact construction in business and marketing English — 'backed by evidence', 'backed by data', 'backed by independent research'. 'Supported by' is a close synonym and is also correct — 'supported by real evidence' is natural and formal. 'Accompanied by' means to go alongside — like a side dish: 'the report was accompanied by a press release'. It does not carry the meaning of 'substantiated' or 'confirmed by'. In the context of authenticity and substantiation, 'backed by' is the strongest and most precise choice. Note the passive construction: 'must be backed by' — the positioning is the thing that has backing applied to it.",
      },
      {
        sentence: "The ASA's ruling required the company _____ the campaign and publish a correction notice.",
        options: ['to withdraw', 'withdraw', 'withdrawing'],
        correctIndex: 0,
        explanation: "After 'required the company', the infinitive with 'to' is standard: 'required the company to withdraw'. This is the to-infinitive as the complement of the verb 'require': 'require [someone] to [do something]'. The bare infinitive (without 'to') is used after modal auxiliaries (can, could, must, will) and certain verbs (make, let, help in informal usage): 'the ruling made the company withdraw'. 'Withdrawing' (gerund) would not follow 'required the company' — it would follow 'required' directly: 'the ruling required withdrawing the campaign' — but this structure is less natural and loses the agent (the company). 'Required the company to withdraw' is the most precise and standard form.",
      },
      {
        sentence: 'Brands that are genuinely purpose-driven attract employees and customers _____ share their values.',
        options: ['who', 'that', 'which'],
        correctIndex: 0,
        explanation: "'Who' is correct when the antecedent (the noun being described) is people: 'employees and customers who share their values'. The relative pronoun 'who' always refers to people — individuals or groups of people understood as individuals. 'That' can also refer to people in defining relative clauses in informal English ('customers that share their values') and is increasingly common, but 'who' remains the standard in formal written English when the antecedent is clearly people. 'Which' refers to things, not people — 'companies which share their values' — but not 'customers which share their values'. When in doubt with people: use 'who' in formal writing.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'Our CEO wants to call us a carbon neutral company in the next campaign. We are not certified but we do plant trees.'",
          options: [
            "That is a reasonable approach — most brands describe themselves as carbon neutral without full certification, so it is an accepted industry practice.",
            "I would recommend against using 'carbon neutral' without certification or a verified methodology. The ASA has issued formal rulings against exactly this claim in the past two years. Tree planting is a positive action but it does not constitute carbon neutrality — it is a partial offset, not a verified balance of emissions. A safer approach is to state what you have done specifically and accurately: 'We offset X tonnes of CO₂ annually through certified tree planting and are working towards full carbon measurement by [date].' This is defensible, honest, and still shows genuine commitment. The CEO's ambition is understandable — let us find a way to express it that is both compelling and compliant.",
            "If the CEO wants to say it, you should find a way to make it work — perhaps with a small disclaimer at the bottom of the page.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it explains the specific risk, gives the regulatory context, and offers a concrete alternative that achieves the communication goal without the legal exposure. Option A is dangerous — 'accepted industry practice' is not a defence against an ASA ruling. Option C is the worst advice: a disclaimer at the bottom of the page does not make a misleading headline claim compliant, and this approach has been specifically ruled against by the ASA in multiple cases.",
        },
        {
          customerLine: "'We want to run a diversity campaign but our leadership team is entirely white and male. Is that a problem?'",
          options: [
            "The diversity campaign will actually help — it signals that the brand is committed to change, which is more important than the current reality.",
            "It is worth thinking carefully about this. A diversity campaign can be powerful, but if it is visibly disconnected from the reality of the organisation behind it — particularly at leadership level — it risks being perceived as performative rather than genuine. The most durable approach is to be transparent about where you are: what the leadership team looks like now, what specific commitments you are making to change that, and what the campaign represents in that journey. Diversity in external communication is most credible when it reflects or is moving toward the internal reality. What steps is the organisation taking on internal diversity, equity, and inclusion?",
            "The campaign creative is separate from internal structure — consumers rarely know or care about the composition of a leadership team.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it raises the real risk (performative diversity is often spotted and criticised), asks the right strategic question about internal action, and frames the campaign as more credible when it is connected to real change. Option A is backwards — a diversity campaign does not substitute for action; it amplifies the disconnect if action is absent. Option C is factually wrong: journalists, employees, job candidates, and social media users regularly and very publicly point out the gap between diversity campaigns and homogeneous leadership teams.",
        },
        {
          customerLine: "'Our product description says it is clinically proven. Is that okay?'",
          options: [
            "That depends on whether you have peer-reviewed clinical trial data from an independent study that you can produce on request to the ASA. 'Clinically proven' is one of the most scrutinised phrases in advertising regulation — it implies a specific standard of evidence. If your evidence is internal testing, customer surveys, or a single small study, 'clinically proven' is almost certainly non-compliant. The safer alternatives are: 'dermatologist-tested' (if it was), 'shown to improve X in consumer trials' (with sample size), or 'trusted by thousands of customers' (if that is accurate). What specific evidence do you have for the claim?",
            "Yes — 'clinically proven' is a standard marketing phrase that is widely used in the industry.",
            "Add 'results may vary' next to the claim and it will be compliant.",
          ],
          correctIndex: 0,
          explanation: "Option A is correct — it explains precisely what 'clinically proven' requires, identifies the risk, and offers practical alternatives. It also asks the right follow-up question to help the client make an informed decision. Option B is dangerous — 'widely used in the industry' is not a defence, and the ASA has issued multiple rulings against exactly this claim. Option C is incorrect — a 'results may vary' disclaimer does not rescue an unsubstantiated claim; it mitigates user expectation but does not provide the evidential basis the claim requires.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the ethical marketing review extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Dana', text: "The sustainability claims in this campaign needs to be reviewed before launch — several of them are unsubstantiated." },
        { speaker: 'Marcus', text: "Agreed. Which specific claims are the problem?" },
        { speaker: 'Riley', text: "The 'planet-positive' headline is the most serious. We cannot evidence a net environmental benefit, so the claim is misleading." },
        { speaker: 'Dana', text: "The carbon neutral claim is also at risk — our offsetting scheme have not been independently verified." },
        { speaker: 'Marcus', text: "Both claims come out. We lead with what we can substantiate — the recyclable packaging — and are transparent about where we still need to improve." },
        { speaker: 'Riley', text: "And the casting brief goes back to the agency. The diversity of our customers are not reflected in the current lineup at all." },
      ],
      mistakes: [
        {
          lineIndex: 0,
          incorrectText: 'The sustainability claims in this campaign needs',
          correction: 'The sustainability claims in this campaign need',
          explanation: "The subject is 'the sustainability claims' — plural. Therefore the verb must be plural: 'need', not 'needs'. A common error occurs when the subject is separated from the verb by a prepositional phrase ('in this campaign'). The phrase 'in this campaign' is just a modifier — it does not change the subject. Identify the head noun: 'claims' (plural) → 'claims need'. Compare: 'The claim in this campaign needs' (singular) vs 'The claims in this campaign need' (plural). Always find the subject first, then match the verb to it, ignoring any intervening phrases.",
        },
        {
          lineIndex: 3,
          incorrectText: 'our offsetting scheme have not',
          correction: 'our offsetting scheme has not',
          explanation: "'Scheme' is singular — therefore the auxiliary verb must be singular too: 'has not been'. The possessive 'our' does not make the noun plural — 'our scheme' is still one scheme. Compare: 'our scheme has not been verified' (singular) vs 'our schemes have not been verified' (plural). The present perfect passive ('has not been verified' / 'have not been verified') must match the subject in number: singular subject → 'has', plural subject → 'have'.",
        },
        {
          lineIndex: 5,
          incorrectText: 'The diversity of our customers are not reflected',
          correction: 'The diversity of our customers is not reflected',
          explanation: "The head noun — the subject — is 'diversity', not 'customers'. 'Of our customers' is a prepositional phrase that modifies 'diversity'. The verb must agree with the head noun 'diversity' — which is singular. Therefore: 'the diversity... is not reflected'. This is a classic proximity error: the writer matches the verb to the nearest noun ('customers' — plural) instead of the actual subject ('diversity' — singular). Rule: always identify the head noun of the subject phrase and match the verb to it, not to the nearest noun.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "The CMO says: 'Our competitors all use 'eco-friendly' in their marketing. Why can't we?'",
          salespersonStart: "The fact that competitors use a term does not make it compliant —",
          suggestedCompletion: "and it does not protect us from regulatory action if the claim is unsubstantiated. The ASA has been actively enforcing environmental claims since 2022, and several brands have received formal rulings — including brands that argued 'everyone else does it' in their defence. That argument is not accepted as mitigation. What we can do is find language that is accurate, compelling, and defensible: describing what we specifically do, in measurable terms, so that we can produce the evidence on request. That is better marketing — because it is credible — and it is safer. Let us start from what we can actually prove.",
        },
        {
          customerLine: "Write the first two sentences of an accountability statement after a campaign caused harm to a community.",
          salespersonStart: "We acknowledge that this campaign caused harm —",
          suggestedCompletion: "and we apologise without qualification to the community affected by the imagery. We have withdrawn the campaign immediately, and we are committing to three specific changes — a mandatory independent review of all campaign creative before launch, paid diversity and inclusion training for our agency partners, and a public progress report in six months — because we understand that words without action are not accountability.",
        },
        {
          customerLine: "A client asks: 'We want to be a purpose-driven brand. Where do we start?'",
          salespersonStart: "The place to start is not with the narrative —",
          suggestedCompletion: "it is with the reality. What does this company genuinely believe, and how does that show up in the decisions it actually makes — about how it treats its people, its suppliers, its community, and its environment? Purpose-driven positioning that is not grounded in operational reality is not brand strategy — it is marketing fiction, and it tends to end badly. The process is: look honestly at what the organisation does and why. Find the genuine belief or commitment that already exists — even if it is small or imperfect. Build the narrative from that truth, not in front of it. Then work backward from the positioning to make sure the business actually lives up to what it claims. In that order.",
        },
      ],
    },
  },
};

import { Lesson } from '@/types/lesson';

export const writingAMarketingWhitePaper: Lesson = {
  slug: 'writing-a-marketing-white-paper',
  title: 'Writing a Marketing White Paper',
  subtitle: 'How to plan, structure, and write a white paper that builds credibility, demonstrates expertise, and generates qualified leads',
  level: 'B1-B2',
  description: "A white paper is one of the most powerful content formats in B2B marketing. Done well, it positions a brand as a thought leader, educates a target audience, and moves prospects through a complex sales cycle. Done badly, it reads like a product brochure disguised as research — and sophisticated buyers can tell the difference immediately. This lesson teaches you the language and structure of effective white paper writing: how to frame an abstract, present original research, establish a credible methodology, draw defensible implications, and close with a call to action that converts readers into leads without undermining the intellectual credibility of the document.",
  heroImage: '/images/writing-a-marketing-white-paper-hero.png',

  vocabulary: [
    {
      word: 'ABSTRACT',
      partOfSpeech: 'noun',
      definition: "A short summary — usually 150 to 300 words — placed at the beginning of a white paper or research report. The abstract tells the reader the topic, the method of research, the key finding, and the implication — so they can decide whether to read the full document. A good abstract makes a specific intellectual promise; a weak abstract is vague and generic.",
      example: "The abstract should state the finding, not just the topic. 'This paper explores brand trust in B2B markets' is a topic. 'This paper presents research from 2,400 decision-makers showing brand trust accounts for 43% of the variance in purchase intent — more than price or product quality' is a finding. The reader finishes the abstract knowing what the paper argues before reading a single page.",
      imageSlug: '/images/abstract.png',
    },
    {
      word: 'PRIMARY RESEARCH',
      partOfSpeech: 'noun',
      definition: "Research that you conduct yourself — surveys, interviews, experiments, or data collection — rather than quoting or synthesising existing published research (which is secondary research). In a marketing white paper, primary research is the most valuable asset because it gives the brand something genuinely exclusive: data that no competitor can replicate.",
      example: "Forge's white paper was built on primary research from a proprietary survey of 1,800 talent acquisition leaders. Because the data belonged to Forge, no competitor could publish the same headline finding. The exclusivity is the asset — secondary research is available to anyone.",
      imageSlug: '/images/primary-research.png',
    },
    {
      word: 'METHODOLOGY',
      partOfSpeech: 'noun',
      definition: "The explanation of how research was conducted — who was surveyed, how they were selected, what questions were asked, how the data was analysed, and what the limitations are. A credible methodology section is essential for a white paper to be taken seriously by sophisticated readers. Omitting or weakening the methodology section signals that the research cannot withstand scrutiny.",
      example: "The methodology section explains who was surveyed, how they were selected, and what the limitations are. A sophisticated reader — an analyst, a journalist, a senior procurement leader — will read it before they read the findings. A methodology section that cannot withstand scrutiny undermines everything that follows.",
      imageSlug: '/images/methodology.png',
    },
    {
      word: 'IMPLICATION',
      partOfSpeech: 'noun',
      definition: "The practical consequence of a research finding — what the data means for the reader's decisions, strategy, or behaviour. Implications transform research into actionable insight. A white paper that presents data without clearly stating its implications leaves the hardest intellectual work to the reader — and most readers will not do it.",
      example: "After every finding, ask 'so what?' The finding is the data; the implication is the answer. 'B2B buyers consult an average of 7.3 content pieces before contacting sales' is a finding. 'The sale is largely made before the first pitch — the brand that produces better content wins before the sales conversation begins' is the implication.",
      imageSlug: '/images/implication.png',
    },
    {
      word: 'CALL TO ACTION',
      partOfSpeech: 'noun',
      definition: "The specific thing you want the reader to do after reading the white paper — download a related resource, request a consultation, attend a webinar, contact a sales team. A call to action in a white paper must be consistent with the intellectual tone of the document: too aggressive and it undermines the credibility of the research; too weak and the commercial investment in the white paper is not recovered.",
      example: "The CTA at the end of a white paper should feel like the next chapter of the intellectual journey, not a sales pitch. 'To explore these findings in the context of your own organisation, request a complimentary Trust Index diagnostic benchmarked against the 2,400 companies in our study.' The reader gets more value from the research; the brand gets a qualified lead.",
      imageSlug: '/images/call-to-action.png',
    },
    {
      word: 'THOUGHT LEADERSHIP',
      partOfSpeech: 'noun',
      definition: "Content, research, or commentary that demonstrates deep expertise on a topic and advances the reader's understanding of it — beyond what they already know. Genuine thought leadership is rare because it requires original thinking or original data. Most content described as 'thought leadership' is actually synthesised opinion or repackaged secondary research — sophisticated audiences can tell the difference.",
      example: "Thought leadership requires either original data or a perspective that challenges what the category already believes. A white paper that confirms existing knowledge is well-researched content, not thought leadership. The test: does the reader think differently about something they thought they understood?",
      imageSlug: '/images/thought-leadership.png',
    },
    {
      word: 'EXECUTIVE SUMMARY',
      partOfSpeech: 'noun',
      definition: "A condensed version of the full document — typically one to two pages — designed for senior readers who will not read the complete white paper. The executive summary covers the key finding, the evidence basis, and the primary implications. It is different from the abstract: the abstract is a short preview; the executive summary is a standalone compressed version of the full argument.",
      example: "The executive summary is what gets forwarded — 'send me the one-pager' is the standard request from a board member. If it is eight pages, it will not be forwarded. One to two pages covering the key finding, the evidence basis, and the primary implication is the standard.",
      imageSlug: '/images/executive-summary.png',
    },
    {
      word: 'PROPRIETARY DATA',
      partOfSpeech: 'noun',
      definition: "Data that belongs exclusively to the organisation that collected it — not publicly available, not from third-party databases, and not replicable by competitors. In a white paper, proprietary data is the most powerful proof of thought leadership because it means the intellectual content cannot be reproduced or undermined by a competitor publishing a similar paper.",
      example: "Proprietary data creates a competitive moat. A competitor cannot publish a paper based on Forge's survey data — they would have to commission their own study, which takes months. That lead time is the commercial value of the investment: at least 18 months of being the only brand with those findings.",
      imageSlug: '/images/proprietary-data.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'THE PAPER ARGUES THAT... DRAWING ON PRIMARY RESEARCH FROM...',
      definition: "The standard framing sentence for establishing the central claim and the evidence basis of a white paper in the abstract or introduction. 'The paper argues' signals intellectual commitment to a specific position — not 'the paper explores' (which commits to nothing) and not 'the paper shows' (which overclaims certainty). 'Drawing on primary research' signals that the claim is grounded in original data.",
      example: "The paper argues that brand trust — not price — is the dominant predictor of purchase intent in complex B2B sales cycles, drawing on primary research from 2,400 purchasing decision-makers. 'Argues' signals intellectual commitment to a specific position; 'explores' commits to nothing. A white paper that argues a contestable claim is always more powerful than one that merely examines a topic.",
      imageSlug: '/images/the-paper-argues-that.png',
      inAction: 'The paper argues that the majority of B2B brand investment is misallocated to awareness rather than trust-building, drawing on primary research from a proprietary survey of 3,000 B2B decision-makers conducted in Q1 2026.',
      register: "Neutral — Forge (B2B HR platform, trust white paper): abstract reads 'the paper argues that organisations with high employer brand trust scores show a 34% reduction in time-to-hire, drawing on primary research from a longitudinal survey of 1,800 talent acquisition leaders.' | Kova (fintech, compliance white paper): executive summary reads 'this paper argues that regulatory complexity in fintech is driving consolidation among tier-2 lenders, drawing on primary research from 640 compliance officers across 14 markets.' | Flux (SaaS platform, productivity white paper): introduction reads 'the paper argues that remote work has not reduced productivity — it has redistributed it, drawing on primary research from a 24-month panel study of 5,000 knowledge workers.'",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — employer brand white paper abstract', imageSlug: '/images/visual-examples/forge-paper-argues-trust-white-paper.png', caption: '"The paper argues that organisations with high employer brand trust scores show a 34% reduction in time-to-hire, drawing on primary research from a longitudinal survey of 1,800 talent acquisition leaders."', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — compliance complexity white paper executive summary', imageSlug: '/images/visual-examples/kova-paper-argues-compliance-white-paper.png', caption: '"This paper argues that regulatory complexity in fintech is driving consolidation among tier-2 lenders, drawing on primary research from 640 compliance officers across 14 markets."', aspectRatio: '4/5' },
      ],
      inContext: "Marcus rewrote the opening of the white paper three times. Each time, Riley challenged the framing. 'Explores' became 'examines' which became 'argues'. When he finally wrote 'the paper argues that B2B brand trust is undervalued as a commercial lever — and that undervaluation is costing companies measurable pipeline', Dana said: now read the room. Riley: When you commit to a specific, contestable claim in the opening sentence, you immediately engage the reader in a different way. They either agree and want to see the evidence, or they disagree and want to see if you can change their mind. Either response means they are reading. 'Explores' produces neither response.",
    },
    {
      phrase: 'THE FINDINGS REVEAL THAT — CONTRARY TO THE CONVENTIONAL WISDOM THAT...',
      definition: "A structure for presenting a research finding that challenges a widely held belief. The phrase signals genuine thought leadership by positioning the data against the received wisdom — making the finding more newsworthy, more memorable, and more commercially valuable. Used in the findings section or the executive summary.",
      example: "The findings reveal that — contrary to the conventional wisdom that more content produces more engagement — B2B brands reach a content saturation point at approximately eight published pieces per month, beyond which engagement rates decline. That structure positions the finding as genuinely new information. It is the sentence that generates press coverage and a category conversation.",
      imageSlug: '/images/the-findings-reveal-that.png',
      inAction: 'The findings reveal that — contrary to the conventional wisdom that personalisation improves conversion rates — excessive personalisation reduces trust among B2B buyers, with 58% reporting that overly personalised outreach feels intrusive rather than relevant.',
      register: "Neutral — Flux (SaaS, productivity research): findings section reads 'the findings reveal that — contrary to the conventional wisdom that collaborative work improves decision quality — teams using collaborative tools make faster but lower-quality decisions than individuals working independently on the same problem.' | Forge (B2B HR, engagement research): findings section reads 'the findings reveal that — contrary to the conventional wisdom that salary is the primary driver of employee retention — psychological safety accounts for 2.3x more variance in retention than compensation for knowledge workers.' | Kova (fintech, trust research): findings section reads 'the findings reveal that — contrary to the conventional wisdom that fintech customers prioritise speed over security — 72% of surveyed users would accept a slower transaction in exchange for demonstrable security features.'",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS platform — productivity and collaboration research white paper', imageSlug: '/images/visual-examples/flux-findings-reveal-collaboration.png', caption: '"The findings reveal that — contrary to the conventional wisdom that collaborative work improves decision quality — teams using collaborative tools make faster but lower-quality decisions than individuals working independently."', aspectRatio: '16/9' },
        { brand: 'Forge', context: 'B2B HR platform — employee retention research white paper', imageSlug: '/images/visual-examples/forge-findings-reveal-retention.png', caption: '"The findings reveal that — contrary to the conventional wisdom that salary is the primary driver of retention — psychological safety accounts for 2.3x more variance in retention than compensation for knowledge workers."', aspectRatio: '4/5' },
      ],
      inContext: "Riley printed out the findings section and went through it line by line with the team. Seven findings. All confirming. Dana: None of these are news. Marcus: The data says what it says. Riley: Rephrase each one against the expectation it challenges — even if the conventional wisdom is only implicit. Finding three — 'brands with strong case study libraries close deals faster' — what is the implicit conventional wisdom that challenges? Marcus: That the sales conversation closes the deal. Riley: Yes. So the finding is: 'The findings reveal that — contrary to the assumption that the sales conversation is the closing mechanism — deals close up to 40% faster when the prospect has consumed three or more case studies before the first sales call, suggesting the sale is largely made in the content experience, not the pitch.'",
    },
    {
      phrase: 'THE METHODOLOGY COMPRISED... ENSURING THAT THE SAMPLE WAS...',
      definition: "The standard structure for opening a methodology section in a white paper — describing what the research consisted of and the steps taken to ensure the sample was valid, representative, and free from significant bias. The phrase 'ensuring that the sample was' is the critical credibility marker — it signals that the research design was deliberate and defensible.",
      example: "The methodology comprised a stratified random sample of 2,400 B2B purchasing decision-makers across six industries, ensuring that the sample was representative by company size, sector, and seniority. That one sentence tells the reader why the data can be trusted. 'Stratified random sample' signals the design was deliberate, not self-selected.",
      imageSlug: '/images/the-methodology-comprised.png',
      inAction: 'The methodology comprised a mixed-methods approach combining a quantitative survey of 1,600 HR directors with qualitative depth interviews with 40 senior talent acquisition leaders, ensuring that the sample was representative across organisation size, sector, and geographic distribution.',
      register: "Neutral — Forge (B2B HR, methodology section): white paper reads 'the methodology comprised a longitudinal panel study of 1,800 organisations over 24 months, ensuring that the sample was balanced across high-growth, stable, and declining sectors to control for macroeconomic variables.' | Kova (fintech, methodology section): white paper reads 'the methodology comprised a quantitative survey of 640 compliance officers in 14 markets, ensuring that the sample was stratified by regulatory regime — common law, civil law, and hybrid — to prevent geographic bias in the findings.' | Flux (SaaS, methodology section): white paper reads 'the methodology comprised a proprietary usage data analysis of 11,000 platform users combined with a structured survey, ensuring that the sample was anonymised and that self-report data could be validated against behavioural data.'",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — methodology section of longitudinal research white paper', imageSlug: '/images/visual-examples/forge-methodology-longitudinal-study.png', caption: '"The methodology comprised a longitudinal panel study of 1,800 organisations over 24 months, ensuring that the sample was balanced across high-growth, stable, and declining sectors."', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — compliance research white paper methodology', imageSlug: '/images/visual-examples/kova-methodology-compliance-survey.png', caption: '"The methodology comprised a quantitative survey of 640 compliance officers across 14 markets, ensuring that the sample was stratified by regulatory regime to prevent geographic bias."', aspectRatio: '4/5' },
      ],
      inContext: "The white paper was about to go to a journalist for a potential feature. Dana said: Before I send this, read the methodology section to me out loud. Marcus read it. Dana: Three things missing. You have not said how participants were recruited. You have not said whether the survey was incentivised. You have not disclosed the limitations. Riley: All three of those omissions will be spotted by the journalist or their fact-checker. If they ask and you cannot answer quickly, the feature does not run. Marcus revised the section — adding recruitment method, incentive disclosure, and a clear limitations paragraph. Dana: Now it is defensible. That is the standard.",
    },
    {
      phrase: 'THE IMPLICATIONS FOR PRACTITIONERS ARE CLEAR — ORGANISATIONS SHOULD...',
      definition: "The standard transition phrase from research finding to practical recommendation in a white paper. 'Implications for practitioners' signals that the paper is translating academic-level data into commercial-level guidance. 'Organisations should' frames the recommendation as a direct, actionable imperative — not a vague suggestion. Used in the implications section or at the end of each major finding.",
      example: "The implications for practitioners are clear — organisations should restructure their B2B content budgets to prioritise trust-building over awareness, with at least 40% of content spend allocated to mid-to-late funnel material. That directness is appropriate when the evidence is strong. Hedging a clear finding with 'this suggests organisations might consider' undersells the research.",
      imageSlug: '/images/the-implications-for-practitioners.png',
      inAction: 'The implications for practitioners are clear — organisations should restructure their B2B content budgets to prioritise trust-building content over awareness content, with a recommended allocation of at least 40% of content spend to mid-to-late funnel material.',
      register: "Neutral — Forge (B2B HR, employer brand white paper): implications section reads 'the implications for HR practitioners are clear — organisations should invest in employer brand measurement as a leading indicator of talent acquisition performance, rather than a lagging measure of reputation.' | Flux (SaaS, productivity white paper): implications section reads 'the implications for leaders are clear — organisations should redesign meeting culture before deploying collaboration tools, because the tools amplify existing meeting behaviours rather than correcting them.' | Kova (fintech, compliance white paper): implications section reads 'the implications for compliance teams are clear — organisations should consolidate regulatory monitoring into a single continuous function rather than a quarterly review cycle, as the velocity of regulatory change has outpaced the traditional review model.'",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — employer brand measurement white paper implications', imageSlug: '/images/visual-examples/forge-implications-employer-brand-measurement.png', caption: '"The implications for HR practitioners are clear — organisations should invest in employer brand measurement as a leading indicator of talent acquisition performance, not a lagging measure of reputation."', aspectRatio: '16/9' },
        { brand: 'Flux', context: 'SaaS platform — meeting culture and productivity white paper', imageSlug: '/images/visual-examples/flux-implications-meeting-culture.png', caption: '"The implications for leaders are clear — organisations should redesign meeting culture before deploying collaboration tools, because the tools amplify existing meeting behaviours rather than correcting them."', aspectRatio: '4/5' },
      ],
      inContext: "The editorial review of the white paper was with a senior analyst who sat on the company's advisory board. She read the implications section and said: This is where the paper fails. Every implication is 'this suggests companies should consider.' Marcus: Is that wrong? Analyst: It is cowardly. You have the data. The data is strong. A practitioner reading this paper does not need you to 'suggest' they 'consider' something — they need you to tell them clearly what the data means for what they should do. Riley afterwards: The implications section is the commercial heart of the paper. If you hedge everything, the reader learns nothing actionable and the paper has done no commercial work for the brand.",
    },
    {
      phrase: 'TO EXPLORE THESE FINDINGS IN THE CONTEXT OF YOUR OWN ORGANISATION...',
      definition: "The standard opening phrase for the call to action in a white paper. It bridges from the research to the reader's specific situation — making the CTA feel like an extension of the intellectual experience rather than a sales pitch. Followed by a specific, low-friction next step that captures the lead while offering genuine value.",
      example: "To explore these findings in the context of your own organisation, request a complimentary Talent Acquisition Benchmark that maps your current employer brand performance against the 1,800 organisations in our study. The CTA uses the research as the value — the reader gets a personalised output from the same dataset they just read. That is why it converts at four to six times the rate of a generic consultation offer.",
      imageSlug: '/images/to-explore-these-findings.png',
      inAction: 'To explore these findings in the context of your own organisation, request a complimentary Content Effectiveness Audit — a 45-minute session where our research team will benchmark your current content strategy against the patterns identified in this study.',
      register: "Neutral — Forge (B2B HR, talent white paper CTA): closing section reads 'to explore these findings in the context of your own organisation, take the Forge Employer Brand Diagnostic — a ten-minute assessment that benchmarks your trust score against the 1,800 organisations in our study and identifies the highest-impact areas for investment.' | Kova (fintech, compliance white paper CTA): closing section reads 'to explore these findings in the context of your compliance programme, download the Kova Regulatory Readiness Framework — a structured self-assessment tool developed directly from the methodology used in this research.' | Flux (SaaS, productivity white paper CTA): closing section reads 'to explore these findings in the context of your organisation's collaboration model, request a free Productivity Pattern Assessment — a 30-minute analysis of your team's current tool usage benchmarked against the 11,000 users in our study.'",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — talent acquisition white paper closing CTA', imageSlug: '/images/visual-examples/forge-explore-findings-employer-brand.png', caption: '"To explore these findings in the context of your own organisation, take the Forge Employer Brand Diagnostic — benchmarked against the 1,800 organisations in our study."', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — compliance research white paper CTA section', imageSlug: '/images/visual-examples/kova-explore-findings-compliance-framework.png', caption: '"To explore these findings in the context of your compliance programme, download the Kova Regulatory Readiness Framework — developed directly from the methodology used in this research."', aspectRatio: '4/5' },
      ],
      inContext: "The white paper launched. Marcus monitored the conversion rate. Dana: How is the CTA performing? Marcus: 22% conversion on the final page — meaning 22% of people who read to the end requested the benchmark. Riley: That is exceptional. The average white paper CTA converts at 3 to 5%. Dana: It is because the CTA does not feel like a CTA. The reader has spent 30 minutes absorbing research-level content. The offer of a personalised benchmark using that same research feels like a natural continuation — not a sales hand-off. Marcus: The research earned the conversion. That is what thought leadership is supposed to do.",
    },
    {
      phrase: 'IT IS IMPORTANT TO NOTE THE LIMITATIONS OF THIS RESEARCH — IN PARTICULAR...',
      definition: "The standard phrase for disclosing the constraints, caveats, or gaps in the research presented in a white paper. Disclosing limitations proactively — rather than waiting for a critic to name them — is a mark of intellectual credibility. It also prevents a critic from undermining the entire paper by naming a limitation the authors appear not to have considered.",
      example: "It is important to note the limitations of this research — in particular, the sample was drawn from English-speaking markets only and may not generalise to markets with different cultural attitudes to brand trust. Naming the limitation proactively is a sign of intellectual credibility. A critic who finds a limitation you have not disclosed can undermine the entire paper; one who finds a limitation you already named cannot.",
      imageSlug: '/images/it-is-important-to-note-the-limitations.png',
      inAction: 'It is important to note the limitations of this research — in particular, the longitudinal data covers a 24-month period that included significant macroeconomic disruption, which may have amplified the trust-over-price effect in ways that would not persist in a stable economic environment.',
      register: "Neutral — Forge (B2B HR, limitations section): white paper reads 'it is important to note the limitations of this research — in particular, the sample over-represents large organisations of 500 or more employees, and findings should be applied with caution to SMEs where employer brand dynamics differ significantly.' | Kova (fintech, limitations section): white paper reads 'it is important to note the limitations of this research — in particular, compliance officer responses may reflect institutional messaging rather than individual experience, introducing a degree of social desirability bias that the methodology cannot fully control for.' | Flux (SaaS, limitations section): white paper reads 'it is important to note the limitations of this research — in particular, usage data was collected from customers who had opted into analytics sharing, which may skew the sample toward more engaged users and overstate the productivity effects for the broader user base.'",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — white paper limitations and caveats section', imageSlug: '/images/visual-examples/forge-limitations-organisation-size-sample.png', caption: '"It is important to note the limitations of this research — in particular, the sample over-represents large organisations, and findings should be applied with caution to SMEs where employer brand dynamics differ significantly."', aspectRatio: '16/9' },
        { brand: 'Flux', context: 'SaaS platform — productivity research limitations section', imageSlug: '/images/visual-examples/flux-limitations-analytics-opt-in.png', caption: '"It is important to note the limitations of this research — in particular, usage data was collected from users who opted into analytics sharing, which may overstate productivity effects for the broader user base."', aspectRatio: '4/5' },
      ],
      inContext: "The industry analyst wrote a review of the white paper in a sector newsletter. She called out the sample limitation in paragraph three: 'The authors note — creditably — that the sample is English-speaking market only, which limits generalisation.' Riley showed Marcus the review. Marcus: She is not criticising the limitation. She is crediting us for naming it. Dana: That is what a limitations section is for. You do not lose points for having a limited sample. You lose points for not knowing — or not disclosing — that your sample is limited. The analyst's review went on to recommend the paper to her readership of 40,000 senior marketers.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "The brief for the white paper is confirmed. We have the research — 2,400 B2B decision-makers, six industries, proprietary dataset. Now we need to build the paper. Marcus, let us start with the [[abstract:a short summary telling the reader the topic, finding, and implication]]. What is the one-sentence version of what this paper argues?",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "The paper argues that brand trust is a stronger predictor of B2B purchase intent than price in complex sales cycles — and that most companies are systematically underinvesting in trust relative to its commercial impact, drawing on our [[primary research:original research you conduct yourself rather than quoting existing research]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "That is a strong abstract claim — and it is contestable, which is what we need. The [[methodology:the explanation of how the research was conducted and how it can be trusted]] section is going to carry a lot of weight here. The claim is bold enough that readers will scrutinise the evidence base.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "The methodology is solid — stratified random sample, six industries, independent fieldwork agency. The key is that we disclose everything: recruitment method, incentive structure, limitations. The moment someone finds a limitation we have not named, it becomes the story.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "On the [[implication:the practical consequence of a finding — the answer to 'so what?']] section — I have been thinking about how to avoid the 'this suggests companies should consider' hedging. Every finding has a direct implication and I want to name it directly.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Good. The [[thought leadership:content that advances the reader's understanding beyond what they already know]] here is not that brand trust matters — everyone knows that. It is the specific claim that it outperforms price in purchase intent, with a quantified effect size. That is the finding that earns press coverage.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "And the [[executive summary:a condensed one-to-two page version for senior readers]] needs to work as a completely standalone document. If the CEO forwards it to her board, that is all they will read. The CTA in the executive summary should be the Trust Benchmark — not a sales conversation. The research has to earn the lead.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And the [[proprietary data:data that belongs exclusively to us and cannot be replicated]] is what gives us at least 18 months before a competitor can run a comparable study. That window is the commercial value of the investment. If the paper performs, we commission the follow-up study in month 12 so we never lose the data moat.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "The [[call to action:the specific thing you want the reader to do after reading]] at the end needs to feel like chapter two of the intellectual journey. The benchmark offer uses our own research data to personalise the output — so the reader is getting more value from the same dataset. That is the right model.",
    },
  ],

  matchingExercise: [
    { word: 'abstract', definition: 'a short 150-to-300 word summary at the beginning of a white paper — covering the topic, method, key finding, and implication' },
    { word: 'primary research', definition: 'research you conduct yourself — surveys, interviews, or data collection — giving you exclusive data no competitor can replicate' },
    { word: 'methodology', definition: 'the explanation of how the research was conducted, who was surveyed, and why the sample and approach can be trusted' },
    { word: 'implication', definition: 'the practical consequence of a finding — the answer to the question "so what?" — that translates data into actionable guidance' },
    { word: 'call to action', definition: 'the specific next step you ask the reader to take — designed to feel like a logical extension of the intellectual experience, not a sales pitch' },
    { word: 'thought leadership', definition: 'content that advances the reader\'s understanding beyond what they already know — through original thinking or original data' },
    { word: 'executive summary', definition: 'a standalone one-to-two page compressed version of the full paper — designed for senior readers who will not read the complete document' },
    { word: 'proprietary data', definition: 'data that belongs exclusively to the organisation that collected it — creating a competitive moat that competitors cannot quickly replicate' },
  ],

  fillBlankExercise: [
    { before: 'The paper', answer: 'argues', after: 'that brand trust — not price — is the dominant predictor of purchase intent in complex B2B sales cycles, drawing on primary research from 2,400 decision-makers.' },
    { before: 'The findings reveal that — contrary to the', answer: 'conventional wisdom', after: 'that more content produces more engagement — B2B brands reach a content saturation point at approximately eight published pieces per month.' },
    { before: 'The methodology comprised a stratified random sample of 2,400 decision-makers, ensuring that the', answer: 'sample', after: 'was representative across industry, company size, and seniority level.' },
    { before: 'The implications for practitioners are clear — organisations should restructure their content budgets to', answer: 'prioritise', after: 'trust-building material over pure awareness content.' },
    { before: 'It is important to note the', answer: 'limitations', after: 'of this research — in particular, the sample was drawn from English-speaking markets only and may not generalise to markets with different cultural attitudes to brand trust.' },
    { before: 'To explore these findings in the context of your own organisation, request a complimentary', answer: 'benchmark', after: 'that maps your current performance against the 2,400 organisations in our study.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Riley say is the difference between "the paper explores" and "the paper argues"?',
      options: ['"Explores" is appropriate for academic papers and "argues" is appropriate for commercial papers — they are the same idea expressed for different audiences', '"Explores" commits to nothing — it tells the reader you have not reached a conclusion. "Argues" signals intellectual commitment to a specific, contestable position', '"Explores" is more credible because it signals humility about what the research can prove, while "argues" sounds confrontational and may alienate readers'],
      correctIndex: 1,
    },
    {
      question: 'Why does Dana say a limitations section strengthens rather than weakens a white paper?',
      options: ['A limitations section is a legal requirement for research published in commercial contexts — it protects the company from liability', 'Naming limitations proactively signals that the authors thought carefully about the research design — and pre-empts criticism from readers who would name the same limits', 'A limitations section makes the paper longer, which signals that more effort went into the research and makes the findings more credible by association'],
      correctIndex: 1,
    },
    {
      question: 'What does Riley say is the commercial value of proprietary data?',
      options: ['Proprietary data can be sold to other organisations in the same sector, creating a direct revenue stream that offsets the cost of the research', 'Proprietary data creates a competitive moat — a lead time of months before a competitor could replicate the study — during which the brand builds exclusive equity from the findings', 'Proprietary data is more trusted by readers than publicly available data because it comes directly from the brand rather than from a third-party research organisation'],
      correctIndex: 1,
    },
    {
      question: 'What does Marcus say the call to action in the white paper should offer the reader?',
      options: ['A direct sales conversation with a senior account manager who can discuss how the company\'s products address the challenges identified in the research', 'A personalised benchmark that maps the reader\'s own organisation against the research dataset — feeling like the next chapter of the intellectual journey rather than a sales pitch', 'A free download of the full dataset so the reader can conduct their own analysis and arrive at conclusions relevant to their specific business context'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      "Have you ever read a white paper or research report that genuinely changed how you thought about something — or that you found yourself recommending to a colleague? What made it good?",
      "What do you think is the biggest difference between a white paper that builds real credibility and one that feels like a product brochure with extra research? What are the signs that tell you the difference?",
      "In your experience, how much do B2B buyers in your industry actually read long-form content like white papers? Do you think they influence purchasing decisions — or do they just generate leads for the sales team to close?",
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'The abstract is _____ at the beginning of the white paper to help readers decide whether to read the full document.',
        options: ['placed', 'placing', 'being placed'],
        correctIndex: 0,
        explanation: "'Placed' is the past participle used in a passive construction: 'the abstract is placed'. This describes a standard positioning convention — where the abstract always appears in a document. Simple passive (is + past participle) is correct here because it describes a general truth about how abstracts function. 'Placing' is the present participle — it would form a continuous tense: 'is placing' or 'the abstract, placing itself first.' 'Being placed' is present continuous passive: 'the abstract is being placed' — implying a specific, active, ongoing process rather than a stable convention.",
      },
      {
        sentence: 'Proprietary data gives the brand _____ no competitor can replicate — which is the source of its commercial value.',
        options: ['something', 'anything', 'nothing'],
        correctIndex: 0,
        explanation: "'Something' is correct in affirmative clauses — 'gives the brand something'. 'Something' is the pronoun that functions as the object of 'gives'. The relative clause 'no competitor can replicate' then modifies 'something'. 'Anything' is used in questions and negative statements: 'does it give the brand anything?' or 'it doesn't give the brand anything.' 'Nothing' is already negative — 'gives the brand nothing' would mean the opposite of what the sentence intends. In affirmative statements, 'something' is the correct choice.",
      },
      {
        sentence: 'A white paper that "explores" a topic rather than "arguing" a position _____ the reader without giving them a clear intellectual destination.',
        options: ['leaves', 'leave', 'is leaving'],
        correctIndex: 0,
        explanation: "Simple present third person singular ('leaves') is correct because this is a general principle — what a 'explores' paper always does to the reader. 'Leave' is the plural form: 'papers that explore... leave the reader.' The subject here is 'a white paper that explores' — a singular noun phrase modified by a relative clause. The head noun is 'a white paper' (singular), so the verb is 'leaves'. 'Is leaving' (present continuous) would suggest a specific, ongoing action happening right now — not a general description of how this type of paper functions.",
      },
      {
        sentence: 'A limitations section is _____ of a serious research organisation, not a weakness of the paper.',
        options: ['a mark', 'a marking', 'the marked'],
        correctIndex: 0,
        explanation: "'A mark' is the correct noun — 'a mark of something' is the standard English idiom meaning 'a sign or indicator of something'. 'A mark of a serious research organisation' means it is a characteristic that signals or identifies a serious organisation. 'A marking' is not the correct noun form here — 'marking' in noun form usually refers to the act of assessing work (a teacher's markings) or physical marks on a surface. 'The marked' would require a noun to follow — 'the marked characteristic' or 'the marked difference' — it cannot stand alone in this construction.",
      },
      {
        sentence: 'Before deploying the paper commercially, _____ the methodology for logical consistency and sample integrity.',
        options: ['review', 'to review', 'reviewing'],
        correctIndex: 0,
        explanation: "In imperative sentences (instructions or commands directed at the reader), the base form of the verb is used without 'to': 'review the methodology.' This is a direct instruction. 'To review' is the infinitive — it appears in purpose clauses ('in order to review') or as the object of certain verbs ('we need to review') but not as the verb of an imperative sentence. 'Reviewing' is the present participle — it appears in participial phrases ('reviewing the methodology, we found...') but cannot start an imperative instruction.",
      },
      {
        sentence: 'The executive summary functions _____ a standalone document — if the CEO forwards it to the board, it must make the complete case without the full paper.',
        options: ['as', 'like', 'as if'],
        correctIndex: 0,
        explanation: "'As' is used when describing the role or function of something: 'functions as a standalone document' means it serves the role of a standalone document. 'Like' is used for comparisons — 'the executive summary is like a standalone document' means it resembles one. The difference is that 'as' makes an identity claim (it IS a standalone document in its function) while 'like' makes a comparison (it resembles one). 'As if' introduces a counterfactual or hypothetical: 'it functions as if it were standalone' — which would be grammatically complex and would imply it is not actually standalone, which contradicts the instruction.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'The findings section is impressive, but the call to action at the end feels like a sales pitch. It breaks the tone of the whole document.'",
          options: [
            "I understand the concern — we can soften the language a little to make it feel more natural.",
            "You are right — it does break the tone, and that is a serious problem for a document built on research credibility. The CTA needs to feel like the research has a next chapter rather than an exit point. I am going to rewrite it as a benchmark offer — 'to explore these findings in the context of your own organisation, request a complimentary Trust Index diagnostic that maps your performance against the 2,400 organisations in our study.' The reader gets more value from the same research. That is the right model for a thought leadership CTA.",
            "That is a fair point — but the CTA is commercially important. We need to generate leads from this investment, and if we do not ask clearly, the conversion rate will be too low to justify the research budget.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it concedes the problem clearly, explains the standard (CTA as intellectual extension not sales pitch), proposes a specific alternative, and explains why the alternative works commercially. Option A is too vague — 'soften the language' does not fix the structural problem, which is that the CTA is positioned as a sales exit. Option C prioritises the commercial requirement over the credibility of the document — which is a false trade-off. The benchmark CTA captures the lead AND maintains the intellectual tone; these are not competing goals.",
        },
        {
          customerLine: "'We are thinking of not including a methodology section — it slows the paper down and most readers will skip it.'",
          options: [
            "Understood — we can move it to an appendix so it is available for readers who want it but does not interrupt the flow for those who do not.",
            "I would push back on that decision. The readers who matter most for our commercial goals — senior procurement leaders, analysts, and specialist journalists — will go straight to the methodology before they read the findings. If the methodology is missing or weak, those readers will not trust the findings regardless of how strong they are. Moving it to an appendix is the right compromise if the reading flow is the concern, but removing it entirely would undermine the paper's credibility with exactly the audience we most need to reach.",
            "That is a reasonable approach — most white papers focus on the findings and the implications, and the methodology is more of an academic convention that does not necessarily translate to a commercial context.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it pushes back clearly, names the specific readers who will go to the methodology first (and why they matter commercially), and offers a constructive compromise (appendix) that resolves the reading flow concern without sacrificing credibility. Option A is too accommodating — moving to an appendix is fine, but it should be presented as a compromise, not an immediate acceptance. Option C is wrong — the methodology is not just an academic convention. In a B2B context, it is the evidence that the data can be trusted, and sophisticated buyers treat it as such.",
        },
        {
          customerLine: "'This white paper is good, but I am not sure it is thought leadership. It feels more like a well-researched summary of things the industry already knows.'",
          options: [
            "I agree — thought leadership is difficult to produce and what we have here is a well-evidenced synthesis. We should reposition it as a research report rather than thought leadership so we are not overstating its contribution.",
            "You are identifying exactly the right problem and it is a structural one — the findings confirm the conventional wisdom rather than challenging it. Let me look at the data again. There are two findings that genuinely surprise me: the content saturation effect beyond eight pieces per month, and the finding that trust outperforms price in short-list decisions by a margin significantly larger than the industry expects. Those two findings should be the headline — reframed against the conventional wisdom they challenge. The rest of the paper supports them. The paper was thought leadership the whole time — we just buried it.",
            "Thought leadership is a spectrum — not everything needs to overturn the conventional wisdom to be valuable. A well-evidenced summary with a clear practical framework has real value for a busy B2B audience.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it accepts the diagnosis without accepting defeat, identifies the specific findings that are genuinely surprising, proposes a concrete fix (reframing against the conventional wisdom they challenge), and reframes the situation constructively. Option A is unnecessarily defeatist — repositioning a paper as 'not thought leadership' is a significant downgrade that is not warranted here. Option C is partially true but avoids the real issue — the concern is specifically that the paper does not advance thinking in the category, and Option C defends the current version without engaging with that criticism.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the white paper editorial feedback session. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Dana', text: "The abstract needs to state the finding, not just the topic — 'the paper argues' is correct, but you need to add the specific quantified claim." },
        { speaker: 'Marcus', text: "The methodology section have been reviewed by the independent research team and all sampling decisions are properly documented." },
        { speaker: 'Riley', text: "The implications section is the weakest part — every implication says 'this suggests' when the evidence is strong enough to say 'organisations should'." },
        { speaker: 'Dana', text: "It is important to note the limitations of this research — in particular, the sample is English-speaking market only and may not generalise to other cultural contexts." },
        { speaker: 'Marcus', text: "The executive summary is currently six pages, which are too long for a C-suite audience — it needs to be reduced to one to two pages maximum." },
        { speaker: 'Riley', text: "The call to action should extending the intellectual journey of the paper rather than stepping outside it into promotional language." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'The methodology section have been reviewed',
          correction: 'The methodology section has been reviewed',
          explanation: "'The methodology section' is a singular noun phrase — 'section' is the head noun. Singular subjects require singular verbs: 'has been reviewed', not 'have been reviewed'. This is a common error when a prepositional phrase or modifier comes between the subject and the verb — the mind is drawn to 'section' but may also hear the plural association of 'methodology'. The head noun 'section' determines the verb form: singular, so 'has'.",
        },
        {
          lineIndex: 4,
          incorrectText: 'which are too long',
          correction: 'which is too long',
          explanation: "The relative pronoun 'which' refers to 'six pages' as the length of the executive summary — treated as a singular measure. 'Six pages is too long' (singular) treats the quantity as a unified measurement. Compare: 'six pages are on the desk' (plural, referring to individual pages as separate objects). 'Six pages is too long' treats 'six pages' as a single length measurement, which takes a singular verb. Similarly: 'Ten kilometres is a long way', 'Two hours is enough time.'",
        },
        {
          lineIndex: 5,
          incorrectText: 'The call to action should extending',
          correction: 'The call to action should extend',
          explanation: "Modal verbs ('should', 'must', 'will', 'can', 'would', 'could', 'may', 'might') are always followed by the base form of the verb — not the present participle (-ing form). 'Should extend' is correct. 'Should extending' is not grammatically possible. This is a fixed rule: modal + base verb infinitive (without 'to'). So: 'should extend', 'must include', 'will perform', 'can demonstrate' — never 'should extending', 'must including'.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Your manager says: 'We cannot afford to commission original research for this white paper. Can we just use secondary sources?'",
          salespersonStart: "We can build a credible paper using secondary research, but I want to be honest about what we lose —",
          suggestedCompletion: "and what we gain by using primary research, so we can make an informed decision. What we lose: exclusivity. Every finding we cite from McKinsey, Gartner, or a sector body is available to every competitor. Our paper becomes a synthesis of publicly available knowledge — which has value, but which cannot generate a proprietary headline. What we gain from primary research: an exclusive dataset. A finding that no competitor can replicate or undermine. Data that earns press coverage because it is genuinely new. A CTA that offers the reader a personalised benchmark using our own data — which converts at four to six times the rate of a generic consultation CTA. The cost of primary research for a white paper of this type is typically £20,000 to £40,000. The commercial value of a dataset that positions us as the category authority for 18 months significantly exceeds that cost if the paper performs. My recommendation is primary research — but if budget is the constraint, a hybrid model works: one proprietary survey of 300 respondents combined with secondary sources for context. That gives us at least one exclusive finding.",
        },
        {
          customerLine: "A client reads your white paper and says: 'This is well-written but where is the implication for my business specifically?'",
          salespersonStart: "That is exactly the right question and it tells me the implications section of the paper has not done its job —",
          suggestedCompletion: "because the implications should make you feel that the data has a direct consequence for decisions you are currently making. Let me walk through the three findings that are most directly relevant to your situation. First: the finding that brand trust outperforms price in complex sales cycles — your current positioning is heavily price-led, and the data suggests you are competing on the wrong variable for the deals you are losing at late stage. Second: the content saturation finding — you produce fourteen pieces of content per month and the data shows diminishing returns begin at eight. You may be working harder than you need to and seeing less result than you should. Third: the trust-building investment finding — companies in your sector allocate on average 12% of content budget to trust-building content and 88% to awareness. The companies that reversed that ratio had 2.3x better conversion rates at final stage. I would like to run the benchmark diagnostic against your current position — it takes 30 minutes and you will see exactly where you rank against the 2,400 companies in the study.",
        },
        {
          customerLine: "You are presenting the white paper plan to the CMO. She says: 'I want us to be seen as genuine thought leaders, not just another company publishing research.'",
          salespersonStart: "I agree with that ambition entirely — and I want to explain specifically how we make it real, because 'thought leadership' is a word that has been used to describe everything from a LinkedIn post to a Nobel-level insight —",
          suggestedCompletion: "and the gap between what most companies call thought leadership and what actually moves the category is significant. The standard for genuine thought leadership is this: after the reader finishes the paper, do they think differently about something they thought they understood? Not 'do they know more' — 'do they think differently.' That is the bar. To clear it, we need to do three things. First: our findings have to challenge the conventional wisdom, not confirm it. We have two findings in our dataset that genuinely challenge what the industry believes — and those two findings need to be the headlines, not buried in section four. Second: we need to be specific and quantified enough that a critic could argue with us. Vague findings cannot be challenged and cannot earn coverage. 'Brand trust matters' is not thought leadership. 'Brand trust accounts for 43% of the variance in purchase intent and outperforms price in seven of eight industry verticals' is a claim specific enough to be argued with — and that argument is the category conversation we want. Third: we need to commit to a position and not hedge it. The paper argues — not explores, not examines. It argues. And we are prepared to defend that argument in press, in conference, and in the follow-up research we are already designing for next year.",
        },
      ],
    },
  },
};

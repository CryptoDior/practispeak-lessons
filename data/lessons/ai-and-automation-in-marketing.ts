import { Lesson } from '@/types/lesson';

export const aiAndAutomationInMarketing: Lesson = {
  slug: 'ai-and-automation-in-marketing',
  title: 'AI and Automation in Marketing',
  subtitle: 'How to talk about generative AI, automation, and the tools reshaping the marketing function — with clarity, accuracy, and confidence',
  level: 'B1-B2',
  description: "Artificial intelligence is no longer a future trend in marketing — it is a present-day reality. Marketing teams are using AI to write copy, segment audiences, predict churn, personalise experiences, and automate workflows that once took entire departments to manage. But the marketers who get the most from these tools are not the ones who know the most about the technology — they are the ones who can articulate clearly what the tools do, where they fall short, and how to use them responsibly. This lesson gives you the language to participate confidently in conversations about AI and automation in marketing.",
  heroImage: '/images/ai-and-automation-in-marketing-hero.png',

  vocabulary: [
    {
      word: 'GENERATIVE AI',
      partOfSpeech: 'noun',
      definition: "A type of artificial intelligence that creates new content — text, images, audio, or video — based on patterns it has learned from large amounts of existing data. In marketing, generative AI is used to write copy, create images, draft emails, and produce first versions of content at scale.",
      example: "Marcus opened the quarterly review: Our generative AI pilot has been running for three months across three content types — ad copy, email subject lines, and social media posts. Riley asked: What are the results? Marcus replied: For ad copy, the AI-generated versions are outperforming human-written versions in 6 out of 10 A/B tests. For email subject lines, open rates are up 14%. For social posts, the quality is inconsistent — some are excellent, some are off-brand in ways that are subtle but real. Dana added: Which is exactly what we expected. Generative AI performs best on high-volume, structured tasks where the brand guidelines are well-defined. It struggles with nuance, tone shifts, and anything that requires genuine cultural awareness.",
      imageSlug: '/images/generative-ai.png',
    },
    {
      word: 'LARGE LANGUAGE MODEL',
      partOfSpeech: 'noun',
      definition: "A type of AI system trained on enormous amounts of text that can understand and generate human language. The technology behind tools like ChatGPT and Claude. In marketing, large language models power chatbots, copy generators, and search tools. Often abbreviated as LLM.",
      example: "Riley explained the technology to the wider team: When we talk about the AI writing tools we are using, we are talking about large language models — LLMs. They have read a huge amount of text and learned to predict what word comes next in a sequence. That is how they generate copy, summarise briefs, and draft email responses. Marcus asked: So they are not actually thinking? Riley replied: Correct. They are pattern-matching at enormous scale. Which is why they produce fluent-sounding text that is sometimes factually wrong. Dana added: And why every output needs a human review before it goes live. The LLM does not know it has made a mistake. It sounds confident even when it is not.",
      imageSlug: '/images/large-language-model.png',
    },
    {
      word: 'PREDICTIVE PERSONALISATION',
      partOfSpeech: 'noun',
      definition: "Using data and AI to predict what a specific customer will want to see or buy next — and showing them that, rather than generic content. Predictive personalisation makes the customer experience feel relevant and tailored without requiring manual segmentation for each individual.",
      example: "Dana walked the team through the new homepage logic: Predictive personalisation means every visitor now sees a different homepage — chosen by the AI based on their browsing history, purchase category, and the channel they came from. Marcus asked: What is the uplift? Dana replied: Pages with predictive personalisation convert at 2.8 times the rate of our old generic homepage. The biggest gains are with returning customers — the AI already knows what they care about. Riley added: But the data quality has to be clean. Personalisation powered by bad data does the opposite of its intention — it shows you something irrelevant and signals the brand does not actually know you. That is worse than showing everyone the same thing.",
      imageSlug: '/images/predictive-personalisation.png',
    },
    {
      word: 'DYNAMIC CONTENT',
      partOfSpeech: 'noun',
      definition: "Content that changes automatically based on who is viewing it — their location, behaviour, purchase history, or stage in the customer journey. A dynamic email shows different images, offers, or text to different people based on their data. Dynamic content is how personalisation happens at scale.",
      example: "Marcus described the email programme: Our weekly newsletter now uses dynamic content — the hero image, featured product, and offer all change based on each recipient's data. Riley asked: How many versions are we actually sending? Marcus replied: One newsletter, twelve versions in practice. A customer who bought cookware gets a kitchen feature. A customer who has only browsed fitness products gets a gym gear feature with a first-purchase incentive. Dana added: And we A/B test the dynamic elements monthly so we keep optimising which combinations perform best in each segment. The result is a newsletter that feels personal to each reader but is managed centrally by a team of two.",
      imageSlug: '/images/dynamic-content.png',
    },
    {
      word: 'PROMPT ENGINEERING',
      partOfSpeech: 'noun',
      definition: "The skill of writing clear, specific instructions — called prompts — that get an AI tool to produce the output you actually want. Good prompt engineering is a practical skill for anyone using generative AI in marketing. The quality of the AI output is often directly determined by the quality of the prompt.",
      example: "Riley ran a workshop: We are going to spend an hour on prompt engineering — because the gap between a mediocre AI output and a great one is usually the prompt, not the model. Dana asked: What makes a good prompt? Riley replied: Four things. First — context: tell the AI who the audience is. Second — format: tell it how long, what structure. Third — tone: give it examples of how the brand sounds. Fourth — constraints: tell it what to avoid. Marcus tested it: I asked for a headline for our new product launch. Generic prompt, generic headline. Then I added the audience, the brand voice, and two examples of headlines we love. The new version was usable immediately. The prompt did the work.",
      imageSlug: '/images/prompt-engineering.png',
    },
    {
      word: 'AUTOMATION BIAS',
      partOfSpeech: 'noun',
      definition: "The tendency to trust and follow AI or automated system outputs without critically checking them — even when they are wrong. Automation bias is a real risk in marketing teams that use AI heavily. It happens when people stop reviewing AI outputs carefully because the technology feels reliable.",
      example: "Dana raised the risk in the quarterly review: We have an automation bias problem. Three AI-written social posts went live last month without full human review. Two were fine. One had a factual error about our product compatibility that a customer caught before we did. Marcus asked: How do we prevent it? Dana replied: We need a mandatory review step before anything AI-generated goes live — not a rubber-stamp review, a real one. Riley added: The issue is that the AI writes with complete confidence. The prose is fluent, the tone is right, the structure is correct. So reviewers feel like they are looking for errors in something that looks perfect. Automation bias kicks in exactly in those moments. We need to train reviewers to read AI content with more scepticism, not less.",
      imageSlug: '/images/automation-bias.png',
    },
    {
      word: 'AI GOVERNANCE',
      partOfSpeech: 'noun',
      definition: "The set of rules, processes, and standards an organisation uses to make sure its AI tools are used responsibly, ethically, and in line with legal requirements. In marketing, AI governance covers things like data privacy, content approval, bias checking, and transparency with customers about when AI has been used.",
      example: "Marcus presented to the board: Before we scale our AI programme, we need to establish an AI governance framework. Riley asked: What does that cover in practice? Marcus replied: Four areas. First — data use: which customer data can the AI access, and is that covered by our privacy policy? Second — content standards: what review process must every AI-generated piece go through before publication? Third — bias monitoring: are our AI tools producing content that inadvertently excludes or misrepresents certain groups? Fourth — transparency: do we tell customers when they are interacting with AI, and are we legally required to? Dana added: AI governance is not a brake on innovation — it is what makes scaling AI sustainable. Without it, one mistake becomes a headline.",
      imageSlug: '/images/ai-governance.png',
    },
    {
      word: 'WORKFLOW AUTOMATION',
      partOfSpeech: 'noun',
      definition: "Using technology to complete a series of marketing tasks automatically — without a person having to trigger each step manually. Workflow automation connects tools and systems so that when one thing happens, the next thing happens automatically. Common in email sequences, lead nurturing, social scheduling, and reporting.",
      example: "Riley walked through the new post-purchase workflow: When a customer completes a purchase, the automation triggers immediately. Day zero — confirmation email with order details. Day three — shipping update with tracking link. Day seven — satisfaction check: are you happy with your order? Day fourteen — review request with a direct link. Day thirty — personalised product recommendation based on what they bought. Marcus asked: How long did this take to build? Riley replied: Two weeks of setup. Dana added: And before automation, a team of three was doing this manually using spreadsheets. They missed emails when they were busy, the timing was inconsistent, and no two customers had the same experience. Workflow automation did not replace the team — it freed them to focus on the work that actually requires human judgement.",
      imageSlug: '/images/workflow-automation.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'THE AI IS HALLUCINATING — IT HAS...',
      definition: "A phrase used to explain that an AI tool has produced content that sounds confident and plausible but is factually wrong. AI hallucination is a real technical limitation — the model generates text based on patterns, not on verified facts, and sometimes produces errors with complete fluency.",
      example: "Riley flagged it in the review meeting: The AI is hallucinating in this case study draft — it has invented a product feature that does not exist. It stated that our platform integrates with Salesforce natively, which is not true. Marcus asked: How do we catch this before it goes out? Riley replied: The mandatory review step has to include a fact-check of any specific claims — statistics, product features, integrations, dates. Dana added: This is the most dangerous type of AI error because it does not look like an error. The sentence is grammatically perfect, the tone is right, the claim is stated with complete confidence. You only know it is wrong if you already know the correct answer. Which is why AI governance has to include a subject-matter expert in the review loop for anything that makes factual claims.",
      imageSlug: '/images/the-ai-is-hallucinating.png',
      inAction: 'The AI is hallucinating — it has cited a customer satisfaction statistic of 94% that does not appear anywhere in our actual research data, so this needs a human rewrite before it goes anywhere near a client.',
      register: "Neutral — Flux (SaaS platform, content review): copy review note reads the AI is hallucinating — it has described a workflow feature that was deprecated six months ago and no longer exists in the product. | Kova (fintech, compliance content): legal review reads the AI is hallucinating — it has referenced a regulatory requirement that applies to UK firms but not to the EU markets this content is targeting. | Ember (subscription service, email programme): campaign review note reads the AI is hallucinating — it has written that our cancellation policy allows 30-day refunds, when the actual policy is 14 days.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS platform — AI content review process', imageSlug: '/images/visual-examples/flux-hallucination-deprecated-feature.png', caption: 'The AI is hallucinating — it has described a workflow feature that was deprecated six months ago and no longer exists in the product.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — compliance content legal review', imageSlug: '/images/visual-examples/kova-hallucination-regulation.png', caption: 'The AI is hallucinating — it has referenced a regulatory requirement that applies to UK firms but not to the EU markets this content is targeting.', aspectRatio: '4/5' },
      ],
      inContext: "Riley had the draft case study on screen. The AI is hallucinating — it has attributed a quote to our CEO that he never said, she told the team. Dana: How do we know? Riley: Because I was in that meeting. The quote sounds like him, the sentiment is close to something he said, but the specific wording is invented. Marcus: This is the exact scenario the review process exists to catch. A journalist or a client who knows us well would spot it. The damage would be immediate and hard to walk back. From now on, every named quote in any AI-drafted content gets verified against a recording or a transcript before publication.",
    },
    {
      phrase: 'WE NEED A HUMAN IN THE LOOP FOR...',
      definition: "A phrase for identifying tasks where AI output must be reviewed, approved, or corrected by a person before it is used. Human-in-the-loop processes exist to catch AI errors, ensure brand alignment, manage legal risk, and maintain quality. Used in AI governance discussions and content workflow planning.",
      example: "Marcus led the AI policy review: We need a human in the loop for every piece of content that makes a specific factual claim — product specs, pricing, customer data, compliance statements. Riley asked: What about high-volume, low-risk content — social posts, internal summaries, first-draft briefs? Marcus replied: For genuinely low-risk, we can move to a spot-check model — review 20% rather than 100%. But anything customer-facing with a factual claim, anything with legal implications, anything that represents the brand in a high-stakes context — full human review, no exceptions. Dana added: The goal is not to slow everything down. It is to put the human in the right place in the workflow — not everywhere, but in the places where an AI error would cause real damage.",
      imageSlug: '/images/we-need-a-human-in-the-loop-for.png',
      inAction: 'We need a human in the loop for all AI-generated pricing pages — the numbers have to be verified by someone who has authority to confirm they are current and accurate.',
      register: "Neutral — Forge (B2B HR platform, customer comms): AI workflow policy reads we need a human in the loop for any customer-facing communication that references a specific SLA, deadline, or contractual commitment — accuracy here is a legal as much as a brand issue. | Ember (subscription, email programme): content governance framework reads we need a human in the loop for all cancellation and refund-related emails — policy accuracy is non-negotiable and AI errors here have direct financial consequences. | Velo (B2B fleet SaaS, product updates): release comms policy reads we need a human in the loop for product release notes — the technical accuracy of feature descriptions must be confirmed by a product manager before any AI-drafted version is published.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — AI content workflow policy', imageSlug: '/images/visual-examples/forge-human-loop-sla.png', caption: 'We need a human in the loop for any customer-facing communication that references a specific SLA, deadline, or contractual commitment.', aspectRatio: '16/9' },
        { brand: 'Ember', context: 'Subscription service — email content governance', imageSlug: '/images/visual-examples/ember-human-loop-refund-emails.png', caption: 'We need a human in the loop for all cancellation and refund-related emails — policy accuracy is non-negotiable and AI errors here have direct financial consequences.', aspectRatio: '4/5' },
      ],
      inContext: "Dana was reviewing the AI rollout plan. We need a human in the loop for anything that goes to a client by name, she said. Riley: Agreed — personalised outreach is high-stakes. If the AI gets a client's company name wrong, their role wrong, or references a conversation that did not happen, the trust damage is immediate. Marcus: And it is exactly the kind of error the AI makes confidently. The human in the loop is not just a quality check — it is a relationship protection measure.",
    },
    {
      phrase: 'THE PROMPT NEEDS TO BE MORE SPECIFIC ABOUT...',
      definition: "A phrase for giving feedback on an AI prompt that is too vague and producing poor or generic output. Used in team reviews of AI workflows to improve the quality of AI outputs by improving the instructions given to the model.",
      example: "Riley reviewed the output in the team session: The prompt needs to be more specific about the audience. Right now it just says 'write a LinkedIn post about our new product.' The AI has produced something generic that could be from any company in any sector. Marcus asked: What does a better prompt look like? Riley replied: Tell the AI who the reader is — a senior marketing director at a mid-size B2B company. Tell it the tone — authoritative but conversational, not salesy. Tell it the one insight the post should leave the reader with. Tell it what not to do — no exclamation marks, no lists, no corporate jargon. And give it a word count. Dana added: The prompt is a brief. Treat it like one. The AI will follow a well-written brief the same way a good copywriter does.",
      imageSlug: '/images/the-prompt-needs-to-be-more-specific-about.png',
      inAction: 'The prompt needs to be more specific about tone — right now the AI is producing content that sounds formal and corporate, when our brand is direct, warm, and plain-spoken.',
      register: "Neutral — Kova (fintech, content team): copy review note reads the prompt needs to be more specific about the regulatory context — without knowing the target market, the AI is producing generic financial language that is not compliant with the specific disclosures required for this product. | Flux (SaaS, demand gen): AI briefing review reads the prompt needs to be more specific about the pain point — the current version is too broad and the AI has written about general productivity challenges rather than the specific workflow friction our product solves. | Bloom (DTC wellness, email campaign): campaign review reads the prompt needs to be more specific about the customer segment — the AI has written for a general wellness audience when this email is going to customers who have already purchased and are in a retention sequence.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS — demand gen AI briefing review', imageSlug: '/images/visual-examples/flux-prompt-specific-pain-point.png', caption: 'The prompt needs to be more specific about the pain point — the AI has written about general productivity challenges rather than the specific workflow friction our product solves.', aspectRatio: '16/9' },
        { brand: 'Bloom', context: 'DTC wellness — email campaign AI review', imageSlug: '/images/visual-examples/bloom-prompt-specific-segment.png', caption: 'The prompt needs to be more specific about the customer segment — the AI has written for a general wellness audience when this email targets existing customers in a retention sequence.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus had the AI output up on screen. The prompt needs to be more specific about the format, he said. Riley: Correct. We asked for a case study but the AI has produced a narrative summary. That is not wrong — it is a reasonable interpretation of 'case study'. But we needed the challenge-solution-results structure with specific data points in each section. Dana: A good prompt is a good brief. If the brief is vague, the output is vague. If the brief is tight, the output is tight. We should treat every AI prompt like we are briefing a junior copywriter on their first day.",
    },
    {
      phrase: 'WE ARE USING AI TO AUGMENT, NOT REPLACE...',
      definition: "A phrase for clarifying that AI tools are designed to support and enhance human work — not to eliminate human involvement. Used when communicating AI strategy internally to address team concerns, or when explaining the role of AI in a workflow to stakeholders.",
      example: "Marcus addressed the concern directly at the team meeting: I know there is anxiety in the team about the AI programme. I want to be clear about something. We are using AI to augment, not replace, the marketing team. Dana asked: What does augment mean in practice? Marcus replied: It means AI handles the first draft, the data processing, the scheduling, the A/B test setup — the high-volume, repeatable work that currently takes the team hours every week. The human work — the strategy, the creative direction, the brand judgement, the client relationships — that stays with people. Riley added: The teams that will struggle with AI are not the ones who use it. They are the ones who refuse to use it and fall behind on output, or the ones who use it without governance and publish errors. The goal is to use it well.",
      imageSlug: '/images/we-are-using-ai-to-augment.png',
      inAction: 'We are using AI to augment, not replace, the copywriting team — the AI handles first drafts at volume so the writers can focus their time on the edits, the brand voice, and the work that genuinely requires human creativity.',
      register: "Neutral — Forge (B2B HR, AI comms to team): internal announcement reads we are using AI to augment, not replace, the people ops team — the tools will handle scheduling, first-draft documentation, and data summarisation so the team can spend more time on the work that requires human empathy and judgement. | Velo (B2B fleet SaaS, AI rollout): all-hands presentation reads we are using AI to augment, not replace, our customer success function — AI handles the routine check-ins and ticket routing so the team can focus on strategic accounts and complex problem-solving. | Halo (DTC, AI content tools): team briefing reads we are using AI to augment, not replace, our social media function — the AI generates options and first drafts, the team selects, edits, and publishes.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR — internal AI programme communications', imageSlug: '/images/visual-examples/forge-augment-not-replace-people-ops.png', caption: 'We are using AI to augment, not replace, the people ops team — tools handle scheduling and documentation so the team can focus on work that requires human judgement.', aspectRatio: '16/9' },
        { brand: 'Halo', context: 'DTC brand — social media AI tool briefing', imageSlug: '/images/visual-examples/halo-augment-not-replace-social.png', caption: 'We are using AI to augment, not replace, the social media function — AI generates options and first drafts, the team selects, edits, and publishes.', aspectRatio: '4/5' },
      ],
      inContext: "Riley was presenting the AI roadmap to the wider team. We are using AI to augment, not replace, the content function, she said. I know that is easy to say and harder to believe, so let me show you what it actually looks like. Marcus: The output target for the content team has not changed. What has changed is that 40% of the time previously spent on first drafts is now spent on editing, refining, and making the AI output sound like us. Dana: Which means the team is spending more time on the high-value work. The AI is doing the heavy lifting on volume. The human is doing the heavy lifting on quality.",
    },
    {
      phrase: 'OUR AI GOVERNANCE FRAMEWORK REQUIRES THAT...',
      definition: "A phrase for explaining a specific rule or requirement within an organisation's AI usage policy. Used when briefing teams on AI guidelines, reviewing content workflows, or explaining to clients how the organisation manages AI risk.",
      example: "Dana presented the governance framework: Our AI governance framework requires that all customer-facing AI-generated content goes through a three-step review before publication. Marcus asked: What are the three steps? Dana replied: Step one — a brand review to check tone, voice, and alignment with brand guidelines. Step two — a fact check for any specific claims, statistics, or product references. Step three — a legal review for any content that touches pricing, compliance, or contractual language. Riley added: And the framework also requires that we log which content was AI-generated, which was AI-assisted, and which was fully human. That log is our audit trail if a client or regulator ever asks. Dana: AI governance is not bureaucracy — it is what allows us to use AI at scale without a crisis every quarter.",
      imageSlug: '/images/our-ai-governance-framework-requires.png',
      inAction: 'Our AI governance framework requires that no AI-generated content is published without at least one human sign-off from someone with editorial authority — there are no exceptions to this, regardless of the volume or timeline pressure.',
      register: "Neutral — Kova (fintech, AI compliance): legal review framework reads our AI governance framework requires that any AI-generated content referencing interest rates, fees, or regulatory obligations is reviewed by the compliance team before publication — this is a regulatory requirement, not just an internal preference. | Flux (SaaS, AI content policy): content governance document reads our AI governance framework requires that all AI-generated case studies are verified by the customer referenced in the content before they are published or shared with other prospects. | Ember (subscription, AI customer comms): customer communications policy reads our AI governance framework requires that AI-generated responses to customer complaints are reviewed by a senior customer success manager before being sent — tone and empathy in complaint handling cannot be delegated to automation.",
      visualExamples: [
        { brand: 'Kova', context: 'Fintech — AI compliance and legal review framework', imageSlug: '/images/visual-examples/kova-governance-compliance-review.png', caption: 'Our AI governance framework requires that content referencing interest rates, fees, or regulatory obligations is reviewed by the compliance team before publication.', aspectRatio: '16/9' },
        { brand: 'Ember', context: 'Subscription service — AI customer communications policy', imageSlug: '/images/visual-examples/ember-governance-complaint-review.png', caption: 'Our AI governance framework requires that AI-generated responses to customer complaints are reviewed by a senior customer success manager before being sent.', aspectRatio: '4/5' },
      ],
      inContext: "Marcus had the AI policy document on screen. Our AI governance framework requires that we disclose when AI has been used to generate content that is presented as original thought leadership, he said. Riley: Does that mean the white paper we are planning needs a disclosure? Marcus: If the AI writes a substantial portion of it, yes. We are a marketing company — our credibility is built on our ideas. If those ideas are AI-generated and we do not say so, that is a trust risk. Dana: The disclosure does not have to be prominent. But it has to exist. Our governance framework protects the business by making sure we are always on the right side of that line.",
    },
    {
      phrase: 'THE OUTPUT NEEDS A HUMAN EDIT BEFORE...',
      definition: "A phrase for flagging that an AI-generated piece of content is not ready to use and needs human revision before it can be published, shared, or sent. Used in content review meetings and workflow sign-off processes to maintain quality and brand standards.",
      example: "Riley reviewed the batch of AI-generated ad copy: I have gone through all 24 versions. Twelve are ready to test. Eight need minor edits — mostly tone, a word or two. Four should not go live at all in their current form. Marcus asked: What is wrong with the four? Riley replied: Two are factually fine but completely off-brand in tone — they sound enthusiastic in a way that is not us. One uses a phrase that was deprecated from our brand vocabulary eight months ago. One makes a comparative claim against a competitor that we have not cleared legally. Dana added: The output needs a human edit before anything goes into the test. Not because the AI has failed — it produced 12 usable versions from scratch in 20 minutes. But because 4 out of 24 with real problems is 17% error rate. You cannot publish at that rate.",
      imageSlug: '/images/the-output-needs-a-human-edit-before.png',
      inAction: 'The output needs a human edit before it goes to the client — the tone is close but the AI has slightly over-claimed on the results, and we need to make sure the numbers are exactly what the data shows.',
      register: "Neutral — Flux (SaaS, content production): AI content workflow reads the output needs a human edit before it is added to the knowledge base — AI summaries of technical documentation frequently simplify in ways that introduce inaccuracy, and the product team needs to verify every entry. | Forge (B2B HR, campaign copy): campaign review reads the output needs a human edit before it goes into the media plan — three of the headlines use a direct-to-consumer tone that is not appropriate for a B2B audience, and the brand voice needs recalibrating for this channel. | Bloom (DTC wellness, social content): content calendar review reads the output needs a human edit before it is scheduled — two of the AI-generated captions reference ingredient benefits in a way that could be interpreted as a health claim, which we cannot make without substantiation.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — campaign copy review', imageSlug: '/images/visual-examples/forge-output-human-edit-b2b-tone.png', caption: 'The output needs a human edit before it goes into the media plan — three headlines use a direct-to-consumer tone that is not appropriate for a B2B audience.', aspectRatio: '16/9' },
        { brand: 'Bloom', context: 'DTC wellness — social content calendar review', imageSlug: '/images/visual-examples/bloom-output-human-edit-health-claim.png', caption: 'The output needs a human edit before it is scheduled — two captions reference ingredient benefits in a way that could be interpreted as a health claim we cannot substantiate.', aspectRatio: '4/5' },
      ],
      inContext: "Dana pulled up the draft email sequence. The output needs a human edit before this goes into the automation workflow, she said. The logic is right — the trigger conditions, the sequence timing, the segmentation. But the copy in email three is generic. It reads like it was written for no one in particular. Riley: Which is exactly what happened. The AI was not given enough information about who receives email three and what their relationship with the brand is at that point. Marcus: So the brief for the AI edit is: this customer has made two purchases, is in our loyalty programme, and has not bought in 60 days. That context should produce a much more specific piece of copy.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We are six months into our AI programme and I want to take stock. What is working, what is not, and where do we need better [[ai governance:the rules and processes that ensure AI is used responsibly and in line with legal and brand standards]]? Riley, start with what is working.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "[[generative ai:AI that creates new content — text, images, or video — based on patterns learned from data]] is working well for high-volume structured tasks. Ad copy — twelve out of twenty-four versions are ready to test with no edits. Email subject lines — open rates up 14% versus our control. [[workflow automation:using technology to complete a series of tasks automatically without manual triggering]] has removed about eight hours of manual work per week from the content team.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "[[predictive personalisation:using AI to predict what a customer will want to see or buy next]] is delivering the biggest commercial result. The homepage now converts at 2.8 times the rate of the old generic version. [[dynamic content:content that changes automatically based on who is viewing it]] across the email programme has lifted engagement across all segments.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Good. Now the problems. Dana — what are we getting wrong?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Three things. First — the AI is hallucinating. It has produced factual errors in two pieces this month — one invented a product feature, one cited a statistic we do not have. Second — [[automation bias:the tendency to trust AI outputs without critically checking them]]. Reviewers are not catching errors because the copy looks correct. Third — [[prompt engineering:the skill of writing clear, specific instructions that get an AI tool to produce the output you want]] is inconsistent across the team. Some people know how to write a good prompt. Most do not.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "We need a human in the loop for everything customer-facing that makes a factual claim. No exceptions. And we need to train the full team on prompt quality — the output is only as good as the brief you give the [[large language model:an AI system trained on enormous amounts of text that can understand and generate human language — also called an LLM]].",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Agreed. Let us build this properly. Our AI governance framework needs to cover content review, fact-checking, and prompt standards. And when the team asks if AI is replacing them — the answer is clear. We are using AI to augment, not replace, the marketing function. The AI handles volume. The humans handle quality, strategy, and judgement.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "One more thing. Every output needs a human edit before it goes live. That is the non-negotiable. The AI is a brilliant first-drafter. It is not a publisher.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "Agreed. Build the governance now, while the programme is small, and scaling becomes much safer. Wait until we have a crisis to build it, and the damage has already been done.",
    },
  ],

  matchingExercise: [
    { word: 'generative AI', definition: 'AI that creates new content — text, images, or audio — based on patterns learned from large amounts of existing data' },
    { word: 'large language model', definition: 'an AI system trained on huge amounts of text that can understand and generate human language — abbreviated LLM' },
    { word: 'predictive personalisation', definition: 'using data and AI to predict what a customer will want next and showing them that, rather than generic content' },
    { word: 'dynamic content', definition: 'content that changes automatically based on who is viewing it — their behaviour, location, or purchase history' },
    { word: 'prompt engineering', definition: 'the skill of writing clear, specific instructions that get an AI tool to produce the output you actually want' },
    { word: 'automation bias', definition: 'the tendency to trust AI outputs without critically checking them — even when they are wrong' },
    { word: 'AI governance', definition: 'the rules and processes an organisation uses to make sure AI is used responsibly, ethically, and legally' },
    { word: 'workflow automation', definition: 'using technology to complete a series of tasks automatically — without a person having to trigger each step manually' },
  ],

  fillBlankExercise: [
    { before: 'The AI is', after: '— it has cited a customer satisfaction statistic that does not appear in any of our actual research.', answer: 'hallucinating' },
    { before: 'We need a human in the loop for all customer-facing content that makes a specific', after: '— the AI sounds confident even when it is wrong.', answer: 'factual claim' },
    { before: 'The', after: 'needs to be more specific about the audience — the output is too generic to use as it is.', answer: 'prompt' },
    { before: 'We are using AI to', after: ', not replace, the content team — the humans focus on quality and strategy.', answer: 'augment' },
    { before: 'Our AI', after: 'framework requires that all customer-facing AI content goes through a three-step review before publication.', answer: 'governance' },
    { before: 'The', after: 'needs a human edit before it goes live — the tone is slightly off-brand and one statistic needs verifying.', answer: 'output' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Dana say is the most dangerous aspect of AI hallucination?',
      options: ['The AI refuses to admit it has made a mistake when challenged', 'The error looks correct — the prose is fluent, the tone is right, and the claim is stated with complete confidence', 'The hallucinated content always appears in the most visible part of the document'],
      correctIndex: 1,
    },
    {
      question: 'What does Riley say the difference is between a mediocre and a great AI output?',
      options: ['The quality of the AI model being used — newer models produce significantly better output', 'The quality of the prompt — telling the AI the audience, tone, format, and constraints changes the output dramatically', 'The amount of time given to the AI to generate — longer generation times produce more accurate content'],
      correctIndex: 1,
    },
    {
      question: 'What does Marcus say is the purpose of logging which content is AI-generated versus human-written?',
      options: ['To measure the productivity of the AI tools and calculate their return on investment', 'To create an audit trail in case a client or regulator ever asks about the origin of published content', 'To ensure the content team receives credit for the work they did not outsource to AI tools'],
      correctIndex: 1,
    },
    {
      question: 'What does Dana say automation bias looks like in practice?',
      options: ['Reviewers spend too long checking AI content because they do not trust the technology', 'Reviewers stop checking AI content carefully because it looks correct — and miss errors as a result', 'Reviewers prefer AI-generated content over human-written content in blind review tests'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      'Have you used any AI tools in your work or studies — to write, research, translate, or summarise? What worked well, and what did you have to fix or change in the output?',
      'When you read something written by AI, can you usually tell? What gives it away — and does it matter to you whether the content you read was written by a human or a machine?',
      'Some people worry that AI will replace their jobs. Others think AI will make their jobs better. Which view do you lean towards — and what would need to be true for the more optimistic version to be right?',
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'The AI _____ a product feature that does not exist — the entire claim needs to be removed before this goes to the client.',
        options: ['has invented', 'is inventing', 'invented'],
        correctIndex: 0,
        explanation: "'Has invented' (present perfect) is correct here because it describes a completed action that has a direct consequence in the present — the AI has done something wrong, and we now need to fix it. The present perfect connects a past event to a current situation. 'Is inventing' (present continuous) would describe an ongoing action — the AI is currently in the process of inventing something — which is not the situation. 'Invented' (simple past) describes a completed past action with no explicit connection to the present — it is grammatically possible but the present perfect ('has invented') is more natural when we are explaining the consequence: 'it has done X, so we need to do Y.'",
      },
      {
        sentence: 'We need a human _____ the loop for any content that makes a specific factual claim.',
        options: ['in', 'into', 'within'],
        correctIndex: 0,
        explanation: "'In the loop' is the established fixed phrase meaning involved in, informed about, or part of a process. 'A human in the loop' is a technical and professional phrase meaning a person who reviews, approves, or corrects automated outputs. It is not 'into the loop' (which would describe the action of entering, not the state of being included) or 'within the loop' (not a standard phrase). Fixed phrases and idioms must be memorised as set expressions — the preposition is part of the phrase and cannot be substituted. Other examples: 'in the loop' (informed), 'out of the loop' (not informed), 'keep someone in the loop' (continue to inform them).",
      },
      {
        sentence: 'Our AI governance framework _____ that all customer-facing content goes through a three-step review before publication.',
        options: ['requires', 'require', 'is requiring'],
        correctIndex: 0,
        explanation: "Simple present third-person singular ('requires') is correct for describing a rule, policy, or standing requirement. Policies, frameworks, rules, and standards use simple present: 'the policy states', 'the framework requires', 'the guidelines recommend'. 'Require' would be the plural form — 'the frameworks require' — but 'our AI governance framework' is singular. 'Is requiring' (present continuous) suggests a temporary or unusual situation: 'the framework is requiring this at the moment' — which would imply it might not require it at other times. When describing permanent institutional rules, simple present is the standard tense.",
      },
      {
        sentence: 'The prompt _____ been more specific about the brand voice — the output sounds like it could be from any company.',
        options: ['should have', 'should be', 'should'],
        correctIndex: 0,
        explanation: "'Should have been' is the correct form for expressing criticism of or regret about a past action — something that did not happen but should have. The prompt was written in the past; the error is in the past; we are looking back and saying it was inadequate. 'Should have' + past participle is the structure for past criticism or regret: 'it should have been clearer', 'we should have tested it first'. 'Should be more specific' is correct for giving current advice about the present or future: 'when you write the next prompt, it should be more specific'. 'Should' alone ('should more specific') is not grammatically complete.",
      },
      {
        sentence: 'The AI handles the first draft _____ the writers can focus on editing, refinement, and brand voice.',
        options: ['so that', 'because', 'although'],
        correctIndex: 0,
        explanation: "'So that' expresses purpose — the reason for something is the intended result. 'The AI handles drafts so that the writers can focus on higher-value work' — the purpose of the AI handling drafts is to free the writers. 'Because' expresses cause: 'the writers can focus on editing because the AI handles first drafts' — this reverses the direction (it explains an effect by giving a cause) and is grammatically correct but changes the sentence structure significantly. 'Although' expresses contrast: 'although the AI handles first drafts, the writers still spend time on editing' — this implies an unexpected or unfortunate situation, which is not the intended meaning. 'So that' is the purpose conjunction.",
      },
      {
        sentence: 'Automation bias _____ when reviewers stop questioning AI outputs because the content looks polished and correct.',
        options: ['kicks in', 'kicks out', 'kicks off'],
        correctIndex: 0,
        explanation: "'Kicks in' means to start having an effect, to become active — often used for conditions, behaviours, or processes that activate under certain circumstances: 'automation bias kicks in when the output looks right'. 'Kicks out' means to expel or eject: 'the system kicks out duplicate entries'. 'Kicks off' means to begin or to start something: 'the campaign kicks off next Monday'. The idiom 'kick in' specifically describes the activation of a condition, habit, instinct, or system — it is the right phrase for describing when automation bias becomes active. Phrasal verbs with 'kick' have distinct meanings that cannot be interchanged.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'Can we just use AI to write all our content from now on? It would save so much time.'",
          options: [
            "Yes — AI can write everything. The quality is good enough and the time savings are significant.",
            "AI can handle a large portion of the content workload, especially first drafts, high-volume structured formats like email subject lines and ad copy variants, and internal summaries. But 'all content' is too broad. Content that requires genuine brand voice, cultural sensitivity, factual accuracy about specific products or claims, and anything going to a named client or senior stakeholder — those need human involvement at minimum at the editing and approval stage. The goal is not to replace human content work but to use AI for the high-volume, lower-risk work and free human time for the higher-judgement work. If we skip the governance layer entirely, we will publish an error at scale and the time saved will not be worth the damage.",
            "No — AI content always sounds robotic and off-brand. It is not good enough for professional use.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it acknowledges where AI works well, identifies the specific categories that still need human involvement, and explains the governance risk of removing human oversight entirely. Option A is overconfident — 'all content' without human review is a governance failure waiting to happen. Option C is incorrect — modern generative AI produces high-quality content for many tasks. The issue is not whether it sounds human, but whether it is accurate, on-brand, and legally safe.",
        },
        {
          customerLine: "'Our AI tool produced a hallucination — it invented a fact about our product. How worried should we be?'",
          options: [
            "Very — it means the AI tool is broken and you should stop using it immediately until the problem is fixed.",
            "Hallucination is a known limitation of all current large language models — it is not a sign that your specific tool is broken. The AI generates text based on patterns, not on verified facts, and sometimes produces plausible-sounding errors with complete fluency. The right response is not to stop using the tool but to make sure your review process is catching hallucinations before they are published. That means fact-checking any specific claims — statistics, product features, dates, integrations — as a mandatory step before publication. The more specific the claim, the higher the hallucination risk. Build the review step into the workflow, not as an afterthought.",
            "Not very — hallucinations only happen with low-quality AI tools. Switch to a better model and the problem will go away.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it accurately explains hallucination as a known limitation of all LLMs, not a bug in a specific tool, and gives concrete, actionable guidance on the review process. Option A is an overreaction — the answer to AI hallucination is governance, not abandonment. Option C is incorrect — hallucination is a characteristic of all current large language models at some level of frequency, regardless of their quality.",
        },
        {
          customerLine: "'The marketing team is worried that AI is going to take their jobs. What do we tell them?'",
          options: [
            "Tell them their concerns are unfounded — AI cannot replicate human creativity, so creative jobs are completely safe.",
            "The honest answer is that AI will change most marketing jobs significantly — and that is different from replacing them. The tasks most at risk are high-volume, structured, repeatable ones: first drafts, data summarisation, A/B test variants, scheduling, basic reporting. The tasks least at risk are the ones that require genuine creative judgement, cultural intelligence, strategic thinking, and relationship management. The team that will thrive is the one that learns to work with AI effectively — using it for the volume work and freeing human capacity for the strategic work. Denying that change is coming is not reassuring — it is patronising. The better message is: here is how we are going to adapt together, here is what we will use AI for, and here is the work that will always need a human.",
            "Tell them that AI will definitely replace some roles, so they should start looking for jobs in areas AI cannot reach.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it gives an honest, nuanced answer that acknowledges real change without catastrophising, explains specifically which tasks are at higher or lower risk, and frames the situation as one that requires adaptation rather than fear. Option A is too reassuring and not accurate — AI is already affecting creative work in significant ways. Option C is too pessimistic and not helpful — it creates panic rather than providing a constructive path forward.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the AI programme review meeting extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "The AI governance framework requires that every customer-facing piece of content goes through a three-step review before publication." },
        { speaker: 'Riley', text: "Each of the review steps have a specific owner — brand, fact-check, and legal — and no step can be skipped regardless of the deadline pressure." },
        { speaker: 'Dana', text: "The prompt engineering training is important because the quality of the output depend directly on the quality of the instructions we give the model." },
        { speaker: 'Marcus', text: "Agreed. We should also address automation bias — reviewers need to approach AI content with more scepticism, not less." },
        { speaker: 'Riley', text: "The output that hallucinated last week was caught by a fact-checker which had previously worked in product marketing and knew the feature set well." },
        { speaker: 'Dana', text: "We are using AI to augment, not replace, the team — and the results so far support that framing." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Each of the review steps have',
          correction: 'Each of the review steps has',
          explanation: "'Each' is always grammatically singular and takes a singular verb: 'each has', 'each requires', 'each is'. Even when followed by a plural noun ('steps'), the subject is 'each' — singular. Compare: 'Each of the steps has a specific owner' (singular) vs 'All of the steps have specific owners' (plural). 'All' is plural; 'each' is singular. This error is called proximity error — the writer matches the verb to the nearest noun ('steps' — plural) rather than to the actual subject ('each' — singular).",
        },
        {
          lineIndex: 2,
          incorrectText: 'the quality of the output depend directly',
          correction: 'the quality of the output depends directly',
          explanation: "The subject is 'the quality' — singular. The prepositional phrase 'of the output' is a modifier and does not change the subject. 'Quality' is a singular noun, so the verb must be third person singular: 'depends', not 'depend'. This is the same proximity error — the writer loses track of the subject and matches the verb to 'output' (the nearest noun) rather than to 'quality' (the head noun and actual subject). Always identify the head noun of the subject phrase and make the verb agree with that.",
        },
        {
          lineIndex: 4,
          incorrectText: 'a fact-checker which had previously worked',
          correction: 'a fact-checker who had previously worked',
          explanation: "'Who' is used in relative clauses referring to people; 'which' is used for things. A fact-checker is a person — so the relative pronoun must be 'who'. 'Which' refers to objects, animals (in formal usage), or abstract concepts. This rule applies to both defining relative clauses ('the reviewer who caught the error') and non-defining relative clauses ('the fact-checker, who had previously worked in product marketing, caught the error'). In informal English, 'that' can refer to people in defining clauses, but 'which' never refers to people in standard English grammar.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "A colleague says: 'The AI wrote this blog post and it looks great. Can we just publish it?' How do you respond?",
          salespersonStart: "It looks great, and I want us to publish it — but before we do, let me take five minutes to —",
          suggestedCompletion: "fact-check the specific claims. The AI produces fluent, confident-sounding text even when something is wrong, and the errors that cause the most damage are the ones that look right on the surface. Two things specifically: any statistic it has cited — I want to trace those to a source. And any product feature it has mentioned — I want to confirm those are current and accurate. If those check out, it goes live. If there is a problem, better we find it now than a client or a journalist does.",
        },
        {
          customerLine: "Write the opening of an AI policy briefing for a marketing team that is nervous about AI replacing their jobs.",
          salespersonStart: "I want to be direct with you about what this programme means for the team —",
          suggestedCompletion: "because you deserve an honest answer, not a reassuring one that turns out to be wrong. AI is going to change a significant portion of how this team works. The tasks most affected are the ones that are high-volume, structured, and repeatable — first drafts, subject line variants, scheduling, basic data summaries. Those will increasingly be handled by AI tools. What that means for the team is not fewer jobs — it means different jobs. The time freed up by AI handling volume work is time you will spend on strategy, on client relationships, on creative direction, and on the work that genuinely requires human judgement. I will not promise that nothing will change. I will promise that we are navigating this change together, transparently, and that the goal is a team that is more effective — not a smaller team.",
        },
        {
          customerLine: "Explain to a sceptical senior leader why prompt engineering matters.",
          salespersonStart: "The difference between a generic AI output and a genuinely useful one is almost never the model —",
          suggestedCompletion: "it is the prompt. Think of the AI as an extremely fast, extremely capable junior copywriter who knows nothing about your brand, your audience, or your specific objective — unless you tell it. If you give it a vague brief, it produces vague work. If you give it a tight brief — the audience, the tone, the format, the one insight it needs to communicate, and two examples of the style you want — it produces something you can actually use. Prompt engineering is not a technical skill. It is a briefing skill. And it is the single highest-leverage thing we can do to improve the quality of everything the AI produces for us.",
        },
      ],
    },
  },
};

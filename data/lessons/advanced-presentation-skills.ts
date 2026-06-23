import { Lesson } from '@/types/lesson';

export const advancedPresentationSkills: Lesson = {
  slug: 'advanced-presentation-skills',
  title: 'Advanced Presentation Skills',
  subtitle: 'How to handle difficult questions, manage objections, and maintain control of a Q&A without losing your position or your audience',
  level: 'B1-B2',
  description: "A great presentation is only half the job. The Q&A is where credibility is built or lost. A question you cannot answer, a challenge you handle badly, or an objection that derails your argument — these are the moments that define how an audience remembers you. Senior communicators have a toolkit for exactly these situations: how to reframe a challenge, bridge to a stronger answer, concede gracefully, deflect appropriately, and handle a hypothetical without being trapped by it. This lesson gives you the language to handle the hardest moments in a presentation with composure and authority.",
  heroImage: '/images/advanced-presentation-skills-hero.png',

  vocabulary: [
    {
      word: 'REFRAME',
      partOfSpeech: 'noun / verb',
      definition: "To change the way a question or topic is described — presenting it from a different angle, context, or with different emphasis — without ignoring or evading the original point. Reframing is a legitimate and powerful technique for shifting a conversation to ground where you can answer more effectively.",
      example: "Marcus asked Riley to demonstrate: A board member challenges you: 'Your growth has slowed — aren't you worried the market has peaked?' Riley replied: The reframe looks like this: 'What the data actually shows is not a peaked market but a maturation — and maturation is the phase where category leaders take a disproportionate share. Our last three mature-phase periods have shown our share growing at 2x the category rate.' Marcus said: You have not denied the growth slowdown — you have reframed what it means. Dana added: The key to reframing is that it has to be genuinely accurate. A reframe that is dishonest is spin. A reframe that offers a more complete or more precise picture of the situation is insight. The audience can usually tell the difference.",
      imageSlug: '/images/reframe.png',
    },
    {
      word: 'DEFLECT',
      partOfSpeech: 'verb',
      definition: "To redirect a question — particularly one you cannot or should not answer — without appearing evasive. A skilled deflection acknowledges the question, explains briefly why you will not answer it now, and moves to something you can address. Deflection is appropriate for confidential, speculative, or legally sensitive topics.",
      example: "Riley coached Marcus: If a journalist asks about the acquisition during the press conference, you deflect. Marcus asked: What does that sound like? Riley replied: 'I am not in a position to comment on market speculation — what I can tell you is that our organic growth strategy is performing well above sector average, and that is where our focus is.' Dana added: That response does three things. It acknowledges the question without confirming or denying. It gives a reason for not answering — 'market speculation' is a legitimate category of things a public company executive does not comment on. And it bridges immediately to something positive and on-message. The journalist knows they have not got an answer. But the response is not a 'no comment' — it is a managed move to better ground.",
      imageSlug: '/images/deflect.png',
    },
    {
      word: 'BRIDGE',
      partOfSpeech: 'noun / verb',
      definition: "A technique for moving from a question you cannot answer fully — or a topic that is difficult — to a message you want to deliver. A bridge connects the question to your preferred answer with a transition phrase. Used widely in media training, investor relations, and board presentations.",
      example: "Marcus practised the bridging technique: The investor asks 'Why are margins lower than last year?' Dana explained the bridge: You acknowledge the point — 'You are right that margins are 2.3 points below last year' — then you bridge: 'And what that reflects is a deliberate investment decision we made in Q2.' Then you land your message: 'The margin investment has driven 34% customer acquisition growth and we expect a full recovery to prior-year margins in Q3.' Riley added: The bridge does not avoid the difficult number. It contextualises it — puts it in a frame where it is a decision rather than a failure. The key phrases are: 'and what that reflects is...', 'what is important to understand about that is...', 'and the context for that is...'. The bridge is the connection between what they asked and what you want them to understand.",
      imageSlug: '/images/bridge.png',
    },
    {
      word: 'CONCEDE',
      partOfSpeech: 'verb',
      definition: "To acknowledge that a point made by the questioner is valid or correct — either partly or fully. Conceding gracefully is a sign of intellectual strength and honesty. Refusing to concede anything, even when a challenge is correct, damages credibility. A good concession acknowledges what is right without abandoning the broader argument.",
      example: "Riley coached Marcus: When someone makes a point you genuinely agree with, concede it clearly. Do not hedge. Marcus asked: What does a good concession sound like? Riley replied: 'You are right about that — and I want to be direct about it.' Or: 'I take that point entirely — our communication on this could have been clearer.' Or: 'That is a fair challenge. You are correct that we missed the timeline.' Dana added: The mistake is to concede and then immediately undermine the concession — 'You are right, but...' is the most common version. A concession followed immediately by a 'but' signals to the audience that you are not actually conceding. If you are going to concede, concede fully. Then, if you have a separate point to make, make it as a separate point, not as a 'but.'",
      imageSlug: '/images/concede.png',
    },
    {
      word: 'HYPOTHETICAL',
      partOfSpeech: 'adjective',
      definition: "A question that asks what you would do, think, or say in a situation that has not happened — an imagined scenario. Hypotheticals in Q&A sessions are often traps: the specific scenario may be unlikely or loaded, and any answer can be taken out of context. Skilled presenters either redirect hypotheticals or narrow their scope before answering.",
      example: "Dana briefed the team: The hardest questions in a board Q&A are hypotheticals. 'What would you do if a competitor matched your price?' 'What happens to the strategy if you do not hit the growth target?' 'If a major client left, how would you replace the revenue?' Marcus asked: How do we handle them? Dana replied: Two approaches. First — redirect: 'Rather than speculate on a scenario we do not currently face, let me tell you what we would do based on the signals we are seeing.' Second — narrow the hypothetical: 'That would depend on the specifics — if you mean a temporary price match by a specific competitor type, I would...' Riley added: Never answer a broad hypothetical directly. A broad hypothetical locks you into an answer for a situation you have not fully defined, which becomes a problematic quote in a board paper or a news article.",
      imageSlug: '/images/hypothetical.png',
    },
    {
      word: 'OBJECTION HANDLING',
      partOfSpeech: 'noun',
      definition: "The skill of receiving a challenge, criticism, or disagreement — and responding to it in a way that maintains the relationship, acknowledges the concern, and moves the conversation forward constructively. Objection handling is a core skill in sales, investor relations, board presentations, and media interviews.",
      example: "Riley ran the objection handling workshop: The most common mistake in objection handling is to answer the objection as stated rather than the concern behind it. Marcus asked: What is the difference? Riley replied: If a board member says 'I am not convinced by the growth projections,' the stated objection is 'the projections are unconvincing.' But the underlying concern is usually 'I do not trust the assumptions behind the projections' or 'I have seen these projections miss before.' Answering the stated objection — defending the methodology — does not address the real concern. You need to name the concern: 'I think what is behind that is a question about whether the assumptions are robust — let me address that directly.' Dana added: The best objection handlers do not argue with the objection. They validate it, they dig beneath it, and they address the root.",
      imageSlug: '/images/objection-handling.png',
    },
    {
      word: 'LEADING QUESTION',
      partOfSpeech: 'noun',
      definition: "A question that is phrased in a way that suggests a particular answer — or that embeds an assumption the speaker wants you to accept. Leading questions are common in adversarial Q&As, media interviews, and challenging presentations. The skill is to recognise the embedded assumption and either challenge it or decline to accept it before answering.",
      example: "Marcus analysed the question Dana posed: 'Given that your last three product launches have underperformed, why should investors trust this one?' Riley identified the structure: That is a leading question. It embeds the assumption that all three launches underperformed and that trust has been lost. You do not have to accept those premises before you answer. Dana replied: Exactly. The response is to unpick the premise: 'I would challenge the characterisation that all three launches underperformed — two of the three performed within 5% of target. One underperformed significantly and we have said so publicly. On the basis of the two that met target, and the changes we made as a result of the one that did not, I think there is a strong case for investor confidence.' You have not denied there was a problem. You have refused to accept an overstated version of it.",
      imageSlug: '/images/leading-question.png',
    },
    {
      word: 'RHETORICAL PIVOT',
      partOfSpeech: 'noun',
      definition: "A move in a speech or Q&A where you acknowledge one thing and use it to drive toward a different, stronger point. A rhetorical pivot connects the challenger's concern to your message — turning potential criticism into a platform for your argument.",
      example: "Dana demonstrated the rhetorical pivot: The challenger says 'You have invested heavily in AI but results are not yet showing.' The pivot: 'You are right — and that is exactly why the story here is not yet a results story. It is an investment thesis story. The question for this audience is not whether AI has delivered returns yet. The question is whether you believe in the strategy that will determine who has the returns in 18 months. And I want to take you through why I believe this investment positions us ahead of every competitor in the category.' Marcus reflected: The pivot did not deny the lack of results. It changed the question from 'did you deliver?' to 'do you believe in the direction?' Riley added: The best rhetorical pivots feel like a moment of clarity rather than a piece of technique. If the audience notices the technique, it has not worked. If they lean in — that is a pivot.",
      imageSlug: '/images/rhetorical-pivot.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'THAT IS A FAIR CHALLENGE — LET ME REFRAME IT',
      definition: "A phrase for acknowledging the legitimacy of a difficult question before offering a different perspective on the topic. The first clause validates the questioner; the second signals that you are about to present a more complete or accurate frame. Used to maintain respect while shifting to stronger ground.",
      example: "Marcus practised the phrase in the preparation session: The board member challenges: 'Your market share has barely moved in two years.' Marcus responded: That is a fair challenge — let me reframe it. Market share in a category that has grown 40% over the same period means our absolute revenue has grown significantly even as our percentage share has held. What we have done is hold our position in an expanding market — which is a different achievement from growth in a flat one. Dana said: That response validated the observation, reframed what it means, and added context that makes the number look different. Riley added: The phrase 'that is a fair challenge' does something important — it signals that you are not defensive. You are confident enough to acknowledge the challenge and offer a better way to look at the situation. Defensiveness destroys credibility in a Q&A. Openness builds it.",
      imageSlug: '/images/that-is-a-fair-challenge.png',
      inAction: 'That is a fair challenge — let me reframe it, because the number you are looking at is true but it does not tell the complete story of what has happened in the period.',
      register: "Neutral — Forge (B2B HR, board Q&A preparation): Q&A coaching note reads 'that is a fair challenge — let me reframe it' is the opening for any question where the premise is partially correct but the framing is incomplete. It shows confidence, validates the questioner, and creates the space to offer a better picture. | Flux (SaaS, investor presentation): investor Q&A playbook reads in response to the question about declining NPS scores, the CEO should open with 'that is a fair challenge — let me reframe it' before providing the segmented NPS data showing the decline is entirely in the churned-customer cohort and the retained-customer NPS has improved. | Kova (fintech, analyst briefing): analyst Q&A prep reads 'that is a fair challenge' should be used before any reframe — it signals intellectual honesty and prevents the response from sounding defensive or dismissive.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — board Q&A coaching and preparation', imageSlug: '/images/visual-examples/forge-fair-challenge-reframe-board.png', caption: '"That is a fair challenge — let me reframe it" is the opening for any question where the premise is partially correct but the framing is incomplete. It shows confidence and creates space for a better picture.', aspectRatio: '16/9' },
        { brand: 'Flux', context: 'SaaS platform — investor presentation Q&A playbook', imageSlug: '/images/visual-examples/flux-fair-challenge-reframe-nps.png', caption: 'In response to declining NPS scores: "That is a fair challenge — let me reframe it" before providing segmented data showing the decline is in the churned-customer cohort, not in retained customers.', aspectRatio: '4/5' },
      ],
      inContext: "Dana was running the Q&A simulation. The investor challenged: 'Revenue is up but your margin has declined for the third consecutive quarter — isn't the business less profitable than it was?' Marcus: That is a fair challenge — let me reframe it. Riley watched. After: What worked there? Marcus stayed open, Dana said. He did not get defensive, he did not deny the number, and the reframe was specific and accurate. The investor did not get a 'no that is not right.' They got a more complete picture. That is what reframing should feel like.",
    },
    {
      phrase: 'LET ME PARK THAT AND COME BACK TO IT — WHAT I WANT TO FINISH ON IS...',
      definition: "A phrase for politely setting aside a question or challenge to return to a more important point — without dismissing the question or losing the thread of the presentation. Used to maintain control of the narrative without appearing to dodge the question.",
      example: "Riley coached Marcus: If a question comes early in the presentation that belongs at the end — or that derails the flow — you park it. Marcus asked: What does parking look like? Riley replied: You say: 'Let me park that and come back to it — what I want to finish on is the commercial case, and the timing question belongs in that section.' Then at the end, you say: 'Earlier someone asked about the timeline — let me come back to that now.' Dana added: Parking is a commitment, not an avoidance. You are telling the audience you will return to the question. If you park something and never return to it, you lose the audience's trust. If you park it and return to it at the right moment, you have demonstrated control of the narrative and respect for the questioner. The parking phrase also signals confidence — you are not rattled by the early question, you know exactly where it belongs, and you are managing the flow accordingly.",
      imageSlug: '/images/let-me-park-that.png',
      inAction: 'Let me park that and come back to it — what I want to finish on is the financial projections, and the pricing question is most clearly answered in that context.',
      register: "Neutral — Forge (B2B HR, strategy presentation): presentation coaching notes read 'let me park that and come back to it' is the right move when the CFO asks the cost question in the opening five minutes — the cost answer belongs in the ROI section and makes no sense without the value frame that comes first. | Flux (SaaS, product demo session): demo coaching reads if a prospect asks about the integration timeline before you have shown them the product capability, park it: 'let me park that and come back to it — once you have seen how the integration works, the timeline question will make much more sense.' | Kova (fintech, investor roadshow): roadshow coaching reads 'let me park that' should be used when regulatory questions arise before the strategy section — the regulatory picture is explained in slide 14 and it is most powerful in that context.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — strategy presentation coaching', imageSlug: '/images/visual-examples/forge-park-that-cost-roi-section.png', caption: '"Let me park that and come back to it" is the right move when the CFO asks the cost question in the opening minutes — the cost answer belongs in the ROI section and makes no sense without the value frame.', aspectRatio: '16/9' },
        { brand: 'Flux', context: 'SaaS platform — product demo session coaching', imageSlug: '/images/visual-examples/flux-park-that-integration-timeline.png', caption: '"Let me park that and come back to it — once you have seen how the integration works, the timeline question will make much more sense." Demonstrates control without dismissing the question.', aspectRatio: '4/5' },
      ],
      inContext: "The board member interrupted the presentation with a question about implementation risk. Marcus handled it cleanly: Let me park that and come back to it — what I want to finish on is the commercial case and implementation risk is covered specifically in section four. Dana nodded. Riley afterwards: That was the right call. The implementation risk question is answered by the data in section four. Answering it here — out of context — would have meant either a weak answer or a premature spoiler for your strongest material.",
    },
    {
      phrase: 'WHAT I CAN SAY IS... — WHAT I AM NOT IN A POSITION TO COMMENT ON IS...',
      definition: "A structured deflection phrase that gives the audience something substantive while being clear about what you will not address. The positive clause comes first — signalling willingness to engage — and the limitation is stated second. Used for legally sensitive, commercially confidential, or speculative topics.",
      example: "Marcus practised the phrase: The journalist asks about the acquisition talks. Riley coached: What I can say is that we are always looking at opportunities that could accelerate our growth, and we assess those opportunities rigorously. What I am not in a position to comment on is specific market speculation — that would not be appropriate for a company in our position. Dana reviewed: That response does three things. It gives the journalist something: a genuine and substantive statement about how we approach growth. It draws a clear, professional line around what you will not comment on. And it does not feel like an evasion — it feels like a considered professional position. Riley: The worst response is 'no comment.' That is an invitation for the journalist to write 'the company declined to comment' — which reads as confirmation. The structured deflection gives them real content and a real explanation of the limitation.",
      imageSlug: '/images/what-i-can-say-is.png',
      inAction: 'What I can say is that the strategic review is progressing well and we expect to share findings with stakeholders in Q2. What I am not in a position to comment on is the specific options being considered, which would not be appropriate to share at this stage.',
      register: "Neutral — Kova (fintech, regulatory inquiry): media briefing reads what I can say is that we are fully cooperating with the regulatory review and we are confident in the strength of our compliance processes. What I am not in a position to comment on is the specific scope or timeline of the review, which is the regulator's to communicate. | Forge (B2B HR, M&A speculation): investor Q&A playbook reads what I can say is that we are financially strong and strategically active in assessing the landscape. What I am not in a position to comment on is speculation about specific transactions. | Ember (subscription service, pricing announcement): media Q&A reads what I can say is that the new pricing structure reflects the genuine investment we have made in the product over the past 18 months. What I am not in a position to comment on is our future pricing intentions, which are commercially sensitive.",
      visualExamples: [
        { brand: 'Kova', context: 'Fintech — regulatory inquiry media briefing preparation', imageSlug: '/images/visual-examples/kova-what-i-can-say-regulatory.png', caption: '"What I can say is that we are fully cooperating with the review. What I am not in a position to comment on is the scope or timeline — that is the regulator\'s to communicate."', aspectRatio: '16/9' },
        { brand: 'Forge', context: 'B2B HR platform — M&A speculation investor Q&A playbook', imageSlug: '/images/visual-examples/forge-what-i-can-say-ma-speculation.png', caption: '"What I can say is that we are financially strong and strategically active. What I am not in a position to comment on is speculation about specific transactions."', aspectRatio: '4/5' },
      ],
      inContext: "The journalist pushed on the partnership speculation. Marcus was ready. What I can say is that we are in active conversations about several growth opportunities that we believe could accelerate our market position significantly. What I am not in a position to comment on is any specific transaction or partner — that would not be appropriate at this stage. Riley watched. After the interview: Dana: Clean. Professional. He gave them a real sentence and a clear explanation of the limitation. That is a response a journalist can use. It is not 'no comment.' It is a position.",
    },
    {
      phrase: 'I TAKE THAT POINT, AND HERE IS WHERE I SEE IT DIFFERENTLY',
      definition: "A phrase for conceding the validity of a challenge before offering a substantive counter-argument. The first clause is a genuine acknowledgement — not a polite dismissal. The second clause signals that you are about to disagree on substance, not on the legitimacy of the question. Used to maintain intellectual credibility while holding your position.",
      example: "Dana reviewed the exchange: The investor said 'Your customer acquisition costs have doubled in two years — this model is not scalable.' Marcus responded: I take that point, and here is where I see it differently. The CAC increase reflects a deliberate move upmarket — we are acquiring customers in the enterprise segment where LTV is four times higher and churn is 60% lower. The economics get better as the mix shifts, not worse. Riley said: That response did something important. It acknowledged the fact — CAC has doubled. It did not dispute it. Then it provided the context that changes the meaning of that fact. Dana: The phrase 'I take that point' signals that you are genuinely listening and engaging — not preparing your counter-argument while the other person is still speaking. Then 'here is where I see it differently' signals intellectual engagement rather than defensiveness. The tone is confident, not combative.",
      imageSlug: '/images/i-take-that-point.png',
      inAction: 'I take that point, and here is where I see it differently — the market share number you cited is correct, but it does not account for the shift in the category definition that happened in Q3 last year.',
      register: "Neutral — Forge (B2B HR, board Q&A): Q&A coaching reads 'I take that point, and here is where I see it differently' is the structure to use when a board member makes a valid observation that leads to an incorrect conclusion — acknowledge the observation fully before challenging the conclusion. | Flux (SaaS, investor roadshow): investor Q&A playbook reads this phrase is essential for managing challenges to the growth model — it signals intellectual honesty on the difficult numbers and then provides the frame that makes those numbers look different in context. | Kova (fintech, analyst call): analyst briefing preparation reads use 'I take that point, and here is where I see it differently' whenever an analyst's challenge is factually correct but interpretively incomplete — it prevents the appearance of evasion while firmly rejecting the conclusion.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — board Q&A coaching notes', imageSlug: '/images/visual-examples/forge-take-that-point-board-qa.png', caption: '"I take that point, and here is where I see it differently" — use when a board member makes a valid observation that leads to an incorrect conclusion. Acknowledge fully before challenging the conclusion.', aspectRatio: '16/9' },
        { brand: 'Flux', context: 'SaaS platform — investor roadshow Q&A playbook', imageSlug: '/images/visual-examples/flux-take-that-point-growth-model.png', caption: '"I take that point, and here is where I see it differently" — essential for managing challenges to the growth model. Signals intellectual honesty on difficult numbers before reframing them.', aspectRatio: '4/5' },
      ],
      inContext: "Dana ran the hardest challenge in the preparation session: Your NPS is the lowest it has been in three years. Is the product good enough? Marcus: I take that point, and here is where I see it differently. Riley watched. After: Dana: He did not dispute the NPS number — which was the right call. He accepted the fact and changed the frame: the NPS decline is in the segment we have deliberately moved away from, and the NPS in the segment we are growing is at an all-time high. That is the complete picture. The phrase held the concession and the counter-argument in the same sentence without being defensive.",
    },
    {
      phrase: 'LET US SEPARATE THE TWO ISSUES — THE FIRST IS...',
      definition: "A phrase for disentangling a question or challenge that conflates two different things, allowing you to address each clearly rather than getting trapped in an answer that applies to both. Used when a question bundles together a point you agree with and a point you disagree with, and answering together would either imply agreement with both or disagreement with both.",
      example: "Riley coached Marcus: The board member asks: 'You have missed the growth target and the margin target — how do you expect us to trust the next set of projections?' Marcus practised: Let us separate the two issues — the first is the growth miss, and the second is the margin miss. On growth: we were 3% below target in a quarter where the category contracted by 11%. That is an outperformance of the market, not an underperformance of our model. On margin: I will not defend that — we made an investment that did not return what we expected and we should have seen that earlier. The next projection set has been independently reviewed and reflects that lesson. Dana said: By separating the two issues, Marcus was able to concede clearly on margin and push back credibly on the growth characterisation — rather than either defending everything (which would have looked dishonest) or conceding everything (which would have confirmed the board's worst interpretation).",
      imageSlug: '/images/let-us-separate-the-two-issues.png',
      inAction: 'Let us separate the two issues — the first is the timeline question, which I can address directly, and the second is the resource question, which needs a different conversation with the right people in the room.',
      register: "Neutral — Flux (SaaS, board presentation): presentation coaching reads 'let us separate the two issues' is the essential technique when a board challenge conflates a missed metric with a strategy failure — they may be related or they may not be, and the audience deserves a clear answer on each. | Kova (fintech, investor Q&A): investor briefing preparation reads use 'let us separate the two issues' when a question conflates the regulatory position with the commercial position — they have different answers and both deserve a clear one. | Forge (B2B HR, crisis Q&A): crisis communications coaching reads 'let us separate the two issues' helps when a media question bundles together the incident and the broader systemic question — you can be clear and honest on the incident without accepting the broader characterisation.",
      visualExamples: [
        { brand: 'Flux', context: 'SaaS platform — board presentation Q&A coaching', imageSlug: '/images/visual-examples/flux-separate-two-issues-metric-strategy.png', caption: '"Let us separate the two issues" — the essential technique when a challenge conflates a missed metric with a strategy failure. Both deserve a clear, separate answer.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — investor Q&A preparation briefing', imageSlug: '/images/visual-examples/kova-separate-two-issues-regulatory-commercial.png', caption: '"Let us separate the two issues" — use when a question conflates the regulatory position with the commercial position. They have different answers and both deserve clarity.', aspectRatio: '4/5' },
      ],
      inContext: "The analyst asked: 'You have missed both Q2 and Q3 targets and you are asking us to believe Q4 will be different — why should we?' Marcus: Let us separate the two issues — the first is what caused the misses, and the second is whether Q4 is realistic. Riley watched as Marcus addressed each clearly and separately. Dana afterwards: By separating them, he prevented the analyst from treating Q2 and Q3 as one single narrative. Q2 had an external explanation. Q3 had an internal one. Conflating them would have made both look like an internal execution failure. Separating them gave the Q4 case a much cleaner foundation.",
    },
    {
      phrase: 'IF I UNDERSTAND YOUR CONCERN CORRECTLY... — IS THAT A FAIR READING?',
      definition: "A phrase for paraphrasing a challenge or objection back to the questioner before answering — to ensure you are addressing the real concern, not the stated surface question. Used to demonstrate genuine listening, clarify the actual objection, and give yourself a moment to formulate the most relevant response.",
      example: "Riley ran the exercise: The investor says: 'I am not comfortable with the level of debt on the balance sheet.' Dana replied: If I understand your concern correctly, the issue is not the absolute level of debt but whether the business generates enough cash to service it comfortably while continuing to invest in growth — is that a fair reading? Riley explained: By paraphrasing the concern, Dana moved from a statement — 'I am not comfortable with the debt' — to the specific underlying worry. If the paraphrase is correct, the investor confirms it and the answer becomes much more targeted. If the paraphrase is wrong, the investor corrects it and the answer is even more targeted. Either way, you are now answering the real concern rather than the surface complaint. Marcus added: The phrase 'is that a fair reading?' also invites the questioner to engage as a collaborator — rather than positioning them as a challenger. It changes the dynamic from interrogation to dialogue.",
      imageSlug: '/images/if-i-understand-your-concern-correctly.png',
      inAction: 'If I understand your concern correctly, the issue is not whether the strategy is right but whether the team has the capability to execute it — is that a fair reading? Because that is the question I want to answer directly.',
      register: "Neutral — Forge (B2B HR, board strategy review): board Q&A coaching reads 'if I understand your concern correctly' should be used whenever a board challenge is phrased as a statement rather than a question — it converts the statement into a dialogue and ensures the answer addresses the actual concern. | Kova (fintech, analyst call preparation): analyst Q&A prep reads use 'if I understand your concern correctly' when an analyst raises an issue that has multiple possible interpretations — confirming the specific concern before answering prevents a detailed answer to the wrong question. | Flux (SaaS, investor roadshow): roadshow coaching reads this phrase is particularly effective with investors whose body language or tone suggests significant concern — it signals empathy and precision before you answer.",
      visualExamples: [
        { brand: 'Forge', context: 'B2B HR platform — board Q&A coaching session', imageSlug: '/images/visual-examples/forge-understand-concern-board-dialogue.png', caption: '"If I understand your concern correctly" converts a board challenge from a statement into a dialogue — it ensures the answer addresses the actual concern, not the surface complaint.', aspectRatio: '16/9' },
        { brand: 'Kova', context: 'Fintech — analyst call Q&A preparation', imageSlug: '/images/visual-examples/kova-understand-concern-analyst-interpretation.png', caption: '"If I understand your concern correctly" prevents a detailed answer to the wrong question when a challenge has multiple possible interpretations.', aspectRatio: '4/5' },
      ],
      inContext: "The board member said: 'I am not sure I believe the assumptions.' Marcus replied: If I understand your concern correctly, the issue is not whether the assumptions are optimistic — they are — but whether they have any mechanism for holding us accountable to them or revising them when conditions change. Is that a fair reading? Dana watched as the board member nodded and said: Yes, exactly. Riley: That paraphrase turned a vague criticism into a specific, answerable question. And it showed the board member that Marcus had really listened — not just waited for a pause.",
    },
  ],

  videos: [],

  dialogue: [
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "We have a board presentation in three days and this group is going to be tough. I want to spend this session on Q&A preparation — specifically the hardest questions and how we handle them. Riley, give me the worst question you think we will get.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "The worst question: 'You have missed the last two quarterly targets. Why should we believe this projection is any different?' That is the question that will come. It bundles a legitimate concern about execution with a broader challenge to your credibility.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Let us [[separate:to disentangle two different issues so each can be addressed clearly]] the two issues — the first is the two misses, and the second is whether this projection is believable. On the misses: Q2 was an external event — category contraction of 11%. Q3 was an execution failure and I am not going to defend it. On this projection: it has been reviewed by an independent commercial assessment team and the assumptions have been stress-tested against the Q3 failure specifically.",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "Good — you [[concede:acknowledge that a point is valid]] on Q3 clearly, which is right. Now the harder one: 'If you miss this quarter's target, what does that mean for the strategy?' That is a [[hypothetical:a question about an imagined scenario that has not happened]].",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "You do not answer the hypothetical directly. You [[deflect:redirect a question you cannot or should not answer]]: 'Rather than speculate on a scenario we are working hard to prevent, let me tell you what gives us confidence in this quarter.' Then you [[bridge:move from a difficult point to the message you want to deliver]] to the specific lead indicators that support the projection.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "And if a board member makes a point I actually agree with — a [[leading question:a question that embeds an assumption the questioner wants you to accept]] that has a real criticism buried in it?",
    },
    {
      speaker: 'Dana',
      speakerColor: 'blue',
      speakerAvatar: '/images/dana-icon.png',
      text: "You use the [[reframe:presenting a topic from a different angle without evading the point]] technique. 'That is a fair challenge — let me reframe it.' And you separate what is true from what the framing implies. Or you use 'if I understand your concern correctly' — paraphrase the concern back to them, confirm it, and then answer the real question rather than the surface one.",
    },
    {
      speaker: 'Riley',
      speakerColor: 'green',
      speakerAvatar: '/images/riley-icon.png',
      text: "And for the question you genuinely cannot answer — the acquisition speculation, the regulatory inquiry — use the structured deflection: what I can say is, what I am not in a position to comment on is. Give them something real and draw a clear, professional line around what you will not address. That is a position, not an evasion.",
    },
    {
      speaker: 'Marcus',
      speakerColor: 'purple',
      speakerAvatar: '/images/marcus-icon.png',
      text: "Understood. Let us run through the top ten questions. I take that point — and here is where I see it differently. Let us start.",
    },
  ],

  matchingExercise: [
    { word: 'reframe', definition: 'to present a topic from a different angle or context — offering a more complete picture without evading the original point' },
    { word: 'deflect', definition: 'to redirect a question you cannot or should not answer — acknowledging it and explaining why without appearing evasive' },
    { word: 'bridge', definition: 'a technique for moving from a difficult point or question to the message you want the audience to understand' },
    { word: 'concede', definition: 'to acknowledge that a point or challenge is valid — clearly and without hedging — before making any counter-argument' },
    { word: 'hypothetical', definition: 'a question about an imagined scenario that has not happened — often a trap that locks you into answers for undefined situations' },
    { word: 'objection handling', definition: 'the skill of receiving a challenge and responding in a way that acknowledges the concern and moves the conversation forward constructively' },
    { word: 'leading question', definition: 'a question that embeds an assumption the questioner wants you to accept — the skill is to recognise and challenge the premise before answering' },
    { word: 'rhetorical pivot', definition: 'a move that acknowledges one thing and uses it to drive toward a stronger, more powerful point in your argument' },
  ],

  fillBlankExercise: [
    { before: 'That is a fair', after: '— let me reframe it, because the number you are looking at is true but does not tell the complete story.', answer: 'challenge' },
    { before: 'Let me', after: 'that and come back to it — what I want to finish on is the financial case, and the timing question belongs in that section.', answer: 'park' },
    { before: 'I take that', after: ', and here is where I see it differently — the CAC increase reflects a deliberate move upmarket, not a loss of efficiency.', answer: 'point' },
    { before: 'Let us separate the two', answer: 'issues', after: '— the first is the growth miss, which has a clear external explanation, and the second is the margin miss, which I will not defend.' },
    { before: 'If I understand your concern correctly, the issue is not the strategy but whether the team can', answer: 'execute', after: 'it — is that a fair reading?' },
    { before: 'What I can say is that the review is progressing well. What I am not in a position to comment on is the', answer: 'specific options', after: 'being considered.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'What does Riley say is the key difference between a reframe and spin?',
      options: ['A reframe uses positive language while spin uses negative framing — the emotional tone determines whether the technique is legitimate', 'A reframe must be genuinely accurate — offering a more complete or precise picture. Spin is a dishonest version of the same technique', 'A reframe changes the topic entirely while spin stays on topic but uses misleading statistics or selective data'],
      correctIndex: 1,
    },
    {
      question: 'What does Dana say the structured deflection ("what I can say is / what I am not in a position to comment on") achieves that "no comment" does not?',
      options: ['It satisfies the journalist\'s legal requirement that the company respond to every question asked in a press conference', 'It gives the journalist real content and a professional explanation of the limitation — rather than a response that reads as confirmation', 'It prevents the question from being asked again because the structured response signals that the topic is permanently closed'],
      correctIndex: 1,
    },
    {
      question: 'What does Riley say is the risk of answering a broad hypothetical directly?',
      options: ['Hypothetical answers are harder for the audience to follow and reduce the clarity of your overall message significantly', 'A broad hypothetical locks you into an answer for a situation you have not fully defined — which becomes a problematic quote', 'Hypothetical questions waste the audience\'s time and should always be declined in a professional Q&A setting'],
      correctIndex: 1,
    },
    {
      question: 'What does Dana say about conceding and then immediately saying "but"?',
      options: ['A concession followed by "but" is the most effective structure in a Q&A because it shows both sides of an argument', 'A concession followed by "but" signals to the audience that you are not actually conceding — it undermines the concession', 'A concession followed by "but" is appropriate only when the objection is partially correct and partially incorrect'],
      correctIndex: 1,
    },
  ],

  warmUp: {
    questions: [
      "Think about the most difficult question you have ever been asked — in a meeting, an interview, or a presentation. How did you handle it? Looking back, would you answer it differently now?",
      "Have you ever watched someone handle a difficult question really well — in a press conference, an interview, or a meeting? What specifically did they do that made it effective?",
      "When you are in a meeting or presentation and someone challenges something you said, what is your natural instinct — to defend yourself immediately, to pause and think, or to ask a clarifying question? Which approach do you think works best in a professional context?",
    ],
  },

  completeSentenceExercise: {
    instructions: 'Choose the correct word or phrase to complete each sentence. Only one answer is correct.',
    items: [
      {
        sentence: 'A leading question embeds _____ the questioner wants you to accept before you answer.',
        options: ['an assumption', 'a assuming', 'assumed'],
        correctIndex: 0,
        explanation: "'An assumption' is the correct noun phrase — the subject of the relative clause 'the questioner wants you to accept'. 'A leading question embeds an assumption' — the question contains or implies an assumption. 'A assuming' is not grammatical. 'Assumed' is a past participle used as an adjective — 'an assumed fact' — but it cannot stand alone as the object of 'embeds' in this structure. The noun 'an assumption' is what is embedded; the relative clause '(that) the questioner wants you to accept' defines which assumption.",
      },
      {
        sentence: "The bridge _____ the questioner's concern to the message you want the audience to take away.",
        options: ['connects', 'connect', 'is connecting'],
        correctIndex: 0,
        explanation: "Simple present third person singular ('connects') agrees with the singular subject 'the bridge'. This sentence describes a general principle or definition — how the bridge technique works — so simple present is the correct tense. 'Connect' is the plural form: 'bridges connect'. 'Is connecting' (present continuous) would suggest the bridge is actively in the process of connecting right now — appropriate for describing a specific ongoing action, not a general technique description.",
      },
      {
        sentence: 'Conceding _____ does not mean abandoning the broader argument — it means acknowledging what is genuinely correct.',
        options: ['gracefully', 'graceful', 'with grace'],
        correctIndex: 0,
        explanation: "'Gracefully' is the adverb that modifies the gerund 'conceding' — describing how the conceding is done. 'Conceding gracefully' means to concede in a graceful manner. 'Graceful' is the adjective — it would modify a noun: 'a graceful concession'. 'With grace' is a prepositional phrase that is also grammatically correct and means the same thing — 'conceding with grace' — but 'gracefully' is more concise and more common in formal writing. Between 'gracefully' and 'with grace', both are correct; 'gracefully' is preferred for conciseness.",
      },
      {
        sentence: 'If the paraphrase is wrong, the investor _____ it — and either way, you are now answering the real concern.',
        options: ['corrects', 'correct', 'will correct'],
        correctIndex: 0,
        explanation: "In conditional sentences describing general truths or expected outcomes ('if X happens, Y happens'), simple present is used in both clauses: 'if the paraphrase is wrong, the investor corrects it'. This is the zero conditional (or general truth conditional) — used for events that reliably follow from a condition. 'Correct' would be the plural form. 'Will correct' belongs in a first conditional structure ('if the paraphrase is wrong, the investor will correct it') — also grammatically correct, but the zero conditional with simple present in both clauses is more natural for describing a reliable pattern.",
      },
      {
        sentence: 'Deflection is appropriate for legally sensitive, commercially confidential, _____ speculative topics.',
        options: ['or', 'and', 'nor'],
        correctIndex: 0,
        explanation: "'Or' is the correct conjunction for listing the three types of topics that warrant deflection — it presents them as alternatives rather than simultaneous requirements. 'Appropriate for X, Y, or Z' means deflection is suitable when the topic falls into any one of these three categories. 'And' would imply all three conditions must apply simultaneously — 'appropriate for topics that are legally sensitive AND commercially confidential AND speculative' — which is too restrictive and changes the meaning. 'Nor' is used in negative constructions: 'neither X nor Y'.",
      },
      {
        sentence: 'The rhetorical pivot feels _____ like a moment of clarity — if the audience notices the technique, it has not worked.',
        options: ['most effective', 'most effectively', 'at its most effective'],
        correctIndex: 2,
        explanation: "'At its most effective' is the correct idiomatic phrase meaning 'when it is working best' or 'at its highest level of effectiveness'. This is a standard English construction: 'the technique at its most effective', 'the brand at its most powerful', 'the presentation at its most compelling'. 'Most effective' (adjective) would need to modify a noun: 'the most effective pivot feels...' 'Most effectively' is an adverb that would modify a verb: 'the pivot works most effectively when...' The construction 'at its most + adjective' describes the condition of peak performance.",
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Read what the client or colleague says. Choose the best professional response.',
      items: [
        {
          customerLine: "'You have missed three consecutive growth targets. Why should we believe you will hit the next one?'",
          options: [
            "We are confident we will hit it — the team has worked very hard and the market conditions are improving.",
            "Let me separate the three misses — they have different explanations and they deserve different answers. Q1 was an external event: category volume contracted by 14% and we outperformed the market. Q2 was an internal execution failure on the go-to-market timing for the new product — I will not defend that, it was wrong. Q3 was a transition quarter where we deliberately slowed acquisition to protect margin. So one of three was a genuine miss, and we have been honest about it. On this projection: it was built with that Q2 failure explicitly as a scenario, it has been stress-tested by an independent team, and the lead indicators for Q4 — pipeline, conversion rate, and customer reactivation — are all ahead of where they were in the equivalent period for the targets we hit.",
            "I understand the concern — the market has been unpredictable and we are doing our best in a difficult environment.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it separates the three misses and gives each a distinct, honest account (one external, one genuine failure, one deliberate), concedes clearly on Q2, and then makes the specific evidence-based case for the Q4 projection. It is honest, structured, and specific. Option A is vague and relies on assertion ('confident', 'worked hard') without evidence, which is the weakest possible answer to this challenge. Option C is sympathetic but evasive — 'difficult environment' as an explanation for all three misses suggests no accountability.",
        },
        {
          customerLine: "'What would happen to the business if you lost your biggest client?'",
          options: [
            "That scenario is unlikely — our biggest client has been with us for seven years and renewal is always very strong.",
            "I am not going to speculate on a specific hypothetical scenario, because the answer would depend on the timing, the reason for the loss, and the state of the pipeline at that point — none of which I can define from a broad 'what if'. What I can tell you is this: our biggest client represents 14% of revenue and that concentration has been falling — it was 22% three years ago. We have a deliberate strategy of reducing single-client concentration, and the pipeline for the next 18 months is specifically designed to bring that figure below 10%. The business would face a revenue challenge if we lost that client — but it would not be an existential event, and the loss would accelerate a client concentration improvement that we are already making.",
            "We would replace them — our pipeline is strong and we have several prospects at the final stage of negotiation.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it correctly declines the hypothetical in its broad form, explains specifically why (the answer depends on undefined variables), and then provides the real, substantive information the questioner actually needs (client concentration data, trend, and pipeline context). Option A dismisses the question too quickly — 'unlikely' without evidence is an assertion, and all clients can be lost. Option C is too simplistically positive — 'we would replace them' without any specifics or acknowledgement of the challenge is not credible.",
        },
        {
          customerLine: "'You say your product is market-leading. Aren't you just saying that because all your competitors say it too?'",
          options: [
            "No — we are genuinely market-leading. Our customer satisfaction scores and our market share data both confirm it.",
            "That is a fair challenge — let me reframe it. 'Market-leading' is a term that has become almost meaningless because, as you say, every brand uses it. So let me be specific about what we mean when we use it: we have the highest NPS in our category for the third consecutive year, as measured by an independent third-party survey of 4,000 customers. We have the largest market share by revenue in our primary segment, as confirmed by two industry analysts. And we have the lowest customer churn rate in the category at 4.2% annual, compared to a sector average of 11%. If you would prefer I stop using 'market-leading' and just cite those three data points, I am happy to do that.",
            "You are right — it is an overused term, but we genuinely believe it applies to us more than it does to our competitors.",
          ],
          correctIndex: 1,
          explanation: "Option B is correct — it uses the reframe technique precisely: it acknowledges the validity of the challenge (the term is overused and therefore meaningless), and then provides the specific, verifiable evidence that makes the claim meaningful. It also offers to drop the term entirely in favour of the data — which is a moment of intellectual confidence that builds credibility. Option A is defensive and relies on assertion. Option C concedes the problem with the language but then makes the same claim again without evidence.",
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read the Q&A preparation session extract. Three lines have a grammar mistake. Can you find them?',
      dialogue: [
        { speaker: 'Marcus', text: "Let me separate the two issues — the first is the growth miss and the second is the margin miss." },
        { speaker: 'Riley', text: "Each of the techniques we have practised have a specific application — reframing is for incomplete premises, bridging is for difficult numbers." },
        { speaker: 'Dana', text: "A good concession should be clear and direct — 'I take that point entire' signals honesty and prevents the impression of defensiveness." },
        { speaker: 'Marcus', text: "The bridge connects the difficult question to the message you want to land — it does not avoid the question, it contextualises it." },
        { speaker: 'Riley', text: "The person which asks the hypothetical question is often trying to get you to commit to a scenario that has not been fully defined." },
        { speaker: 'Dana', text: "If the paraphrase is right, the investor confirms it — and either way, you are answering the real concern, not the surface complaint." },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'Each of the techniques we have practised have a specific application',
          correction: 'Each of the techniques we have practised has a specific application',
          explanation: "'Each' is always grammatically singular — 'each has', not 'each have'. The modifying clause 'we have practised' refers to 'techniques' (plural) but the grammatical subject of the main clause is 'each' (singular). Subject-verb agreement must match the head noun of the subject phrase, not any modifying phrase. 'Each of the techniques has a specific application' — singular verb because 'each' is singular.",
        },
        {
          lineIndex: 2,
          incorrectText: "'I take that point entire'",
          correction: "'I take that point entirely'",
          explanation: "'Entirely' is the adverb form required to modify the verb phrase 'take that point'. 'Entirely' means completely or fully — 'I take that point entirely' means 'I accept this point completely'. 'Entire' is the adjective — it modifies nouns: 'the entire point', 'the entire argument'. You cannot use the adjective to modify a verb phrase. The adverb 'entirely' is required here.",
        },
        {
          lineIndex: 4,
          incorrectText: 'The person which asks the hypothetical question',
          correction: 'The person who asks the hypothetical question',
          explanation: "'Who' is used in relative clauses referring to people; 'which' refers to things. A person is a human being — 'the person who asks'. 'Which' cannot be used to refer to a person in standard English grammar. In defining relative clauses (like this one), 'who' or 'that' may be used for people — but never 'which'.",
        },
      ],
    },
    finishTheLine: {
      instructions: 'The marketer starts a sentence. Work with your partner to finish it naturally.',
      items: [
        {
          customerLine: "Write the opening of a Q&A response to this board challenge: 'Your margins have declined for three consecutive quarters. The strategy is clearly not working.'",
          salespersonStart: "I take that point — the margin decline is real and I am not going to minimise it. But let me separate two things —",
          suggestedCompletion: "the margin decline and the strategy. They are related but they are not the same thing. The margin decline is a consequence of a deliberate investment decision we made in Q1 — we chose to invest in customer acquisition in the enterprise segment at a cost to short-term margin. That was a choice, not a failure. The reason I am drawing a distinction between the investment decision and the strategy is this: the enterprise customers we have acquired in the past three quarters have an average lifetime value of 4.2x our mid-market customers and a churn rate of 60% lower. The margin recovers as the mix shifts. And the unit economics of the enterprise segment mean that by Q3, we project a return to prior-year margin with a materially better customer base than we had going in. So the margin number is real and I concede it. The strategy interpretation — I want to challenge that, and I have the data to do so.",
        },
        {
          customerLine: "A journalist asks: 'There are rumours that your company is in talks with a major competitor. Can you confirm?'",
          salespersonStart: "What I can say is that we are an active and ambitious company that is always evaluating opportunities to accelerate our strategy. What I am not in a position to comment on is —",
          suggestedCompletion: "specific market speculation — that would not be appropriate or accurate for me to do, and I would not want to give you something that I cannot stand behind. What I can tell you is that our pipeline of organic growth initiatives is stronger than at any point in the past three years, and the commercial momentum in our core segments is very good. If and when there is anything material to communicate, we will communicate it to the market clearly and promptly, as we are required to do. But I am not going to add to speculation that I cannot confirm or deny.",
        },
        {
          customerLine: "You have just conceded a significant point in a board Q&A. A colleague says: 'You should not have given them that.' Explain why you did.",
          salespersonStart: "I conceded because the board member was right — and arguing with a correct challenge in a room full of intelligent people is one of the most damaging things you can do to your credibility —",
          suggestedCompletion: "because they can see it happening. The moment a presenter argues with a point that is demonstrably correct, the audience stops listening to the argument and starts questioning the presenter's judgment. The concession was not weakness. It was a deliberate choice. By conceding clearly and immediately — 'you are right, and I want to be direct about it' — I established that I am honest, that I have no incentive to hide the difficult numbers, and that my credibility on the points I did not concede is much higher as a result. A selective conceder — someone who concedes only under pressure — looks dishonest. A proactive conceder — someone who acknowledges what is true before they are pressed — looks confident and trustworthy. The concession was the best investment I made in the whole presentation.",
        },
      ],
    },
  },
};

/**
 * The Business Brief — Exam Walkthrough: Business Studies Paper 1, November 2025 — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-business-brief-exam-paper1-nov2025-audio.mjs 1 2 3 4 5
 *
 * Five output MP3s (each opens with Amelia announcing the title):
 *   1. Section A                              — Intro + Parts 1-3
 *   2. Question 2 - Business Environments     — Parts 4-8
 *   3. Question 3 - Business Operations       — Parts 9-13
 *   4. Question 4 - Miscellaneous Topics      — Parts 14-17
 *   5. Section C - Essays and Wrap-Up         — Parts 18-19 + Outro
 *
 * Rebuild a file (only missing or text-edited lines are regenerated), or force specific lines:
 *   ... <n>            e.g. 2
 *   ... <n>:2,-2       e.g. 2:2,-2  (line numbers; 1 = Amelia's title; -1 = last line)
 *   ... <n> --fresh    wipe and re-record the whole file
 * If a finished file is missing saved clips, the script stops instead of re-billing them (add --go to override).
 *
 * Voices: the standard set — TYLA uses the Naledi voice, MICHAEL the Mike voice, and AMELIA
 * (narration) reads both the titles and the NARRATOR case studies / scenarios / essay introductions.
 *
 * ElevenLabs account: uses ELEVENLABS_API_KEY_1 by default (set ELEVENLABS_ACCOUNT=2 for the second key).
 * Model: Eleven v4 (eleven_v4), falling back to Eleven v3 (eleven_v3) if v4 fails.
 * Exam-tip callouts, on-screen cues, music cues and the Quick-Reference Recap are NOT included (show notes only).
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import crypto from 'crypto';

const ELEVENLABS_KEY =
  process.env['ELEVENLABS_API_KEY_' + (process.env.ELEVENLABS_ACCOUNT || '1')] || process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_1 to .env.local and run with: node --env-file=.env.local scripts/generate-business-brief-exam-paper1-nov2025-audio.mjs');
  process.exit(1);
}

const VOICES = {
  TYLA: 'ZF6FPAbjXT4488VcRRnw',    // same voice ID as Naledi in The Business Brief
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
  AMELIA: 'IKne3meq5aSn9XLyUdCD',  // narration — announces each title (same as earlier Business Brief series)
  NARRATOR: 'IKne3meq5aSn9XLyUdCD', // reads the case studies / scenarios — same Amelia narration voice
};

const PRIMARY_MODEL = 'eleven_v4';
const FALLBACK_MODEL = 'eleven_v3';

function voiceSettingsFor(modelId) {
  if (modelId === 'eleven_v4' || modelId === 'eleven_v4_turbo') {
    return { stability: 0.5, similarity_boost: 0.75 };
  }
  return { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true };
}

const ROOT = path.resolve('.');
const OUT_DIR = path.join(ROOT, 'podcasts', 'The-Business-Brief-Exam-Walkthrough-Paper-1-Nov-2025');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'business-brief-exam-paper1-nov2025');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'BS Paper 1 Nov 2025 - Part 1 - Section A',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 1, November 2025. Part 1: Section A` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to THE BUSINESS BRIEF — and welcome to something new. Today is our very first past paper. We're working through a real exam from start to finish: the National Senior Certificate Business Studies Paper 1, November 2025.` },
    { s: 'MICHAEL', t: `And I'm the one who has to write it... Live. With everyone listening.` },
    { s: 'TYLA', t: `[laughs] That's the deal. Here's how it works. I read each question with its mark allocation. Michael answers it the way a student would in the exam hall. Then I mark his answer against the official DBE marking guidelines — the memo — and show you exactly where every mark comes from.` },
    { s: 'MICHAEL', t: `And Business Studies has a lot of case studies. Who reads those?` },
    { s: 'TYLA', t: `Our narrator. Every scenario and every essay introduction will be read in full, exactly as it appears in the paper, and it'll be up on screen too. So here's your challenge: pause after each question, write your own answer, and then see how you compare with Michael.` },
    { s: 'MICHAEL', t: `Okay. So what does this paper look like?` },
    { s: 'TYLA', t: `Paper 1 is worth one hundred and fifty marks, and you have two hours. It covers two main topics: Business Environments and Business Operations. Section A is compulsory — thirty marks of short, objective questions, and you should spend about twenty minutes on it. Section B has three questions of forty marks each, and you answer any two — that's eighty marks in about seventy minutes. Section C has two essays of forty marks each, and you write one — about thirty minutes.` },
    { s: 'MICHAEL', t: `So I'm only writing about two-thirds of the questions in the paper.` },
    { s: 'TYLA', t: `Exactly. But today we'll do all of them, so whichever ones you choose, you'll have heard the memo. Before we start, here are the marking rules that cost students marks every year.` },
    { s: 'MICHAEL', t: `[groans] Here come the rules.` },
    { s: 'TYLA', t: `[playfully] You'll thank me later. One... in Section B, only your first two questions are marked, and in Section C, only your first essay. So if you start a question, change your mind and start another, the marker marks the first one. Two... if a question asks for four facts, only the first four are marked. Three... in Sections B and C, write in full sentences. Four... if you number an answer incorrectly, you can lose the marks. And five... no extra marks for repeating a fact in different words — the marker writes an R next to it.` },
    { s: 'MICHAEL', t: `First questions count, first facts count, full sentences, correct numbering, no repeats.` },
    { s: 'TYLA', t: `[delighted] Perfect. And one more thing about this subject. The memo is long, but it's not a script you have to memorise word for word. It lists the points that earn marks, and then it says "any other relevant answer." So if your answer says the same thing in your own words, you still get the marks. What matters is that you hit the right points, with enough depth for the command word. Let's go — Section A.` },
    { s: 'TYLA', t: `Question 1.1 has five multiple-choice questions, two marks each, so ten marks. Write only the letter. Question 1.1.1: "This Act requires businesses to display information of their products on packaging." A, the Employment Equity Act. B, the Labour Relations Act. C, the Consumer Protection Act. D, the National Credit Act.` },
    { s: 'MICHAEL', t: `Information on packaging protects the consumer. C, the Consumer Protection Act.` },
    { s: 'TYLA', t: `Correct — C, two marks. The CPA gives consumers the right to information, including labelling. Question 1.1.2: "Smith Stores uses outdated computers which prevent access to online transactions. This challenge is classified as a ... factor of the PESTLE analysis." A, technological. B, political. C, legal. D, social.` },
    { s: 'MICHAEL', t: `Computers and online transactions — technological. A.` },
    { s: 'TYLA', t: `Correct, A. Question 1.1.3: "Highway Manufacturing operate in the ... sector as they produce office chairs from timber and steel." A, tertiary. B, primary. C, economic. D, secondary.` },
    { s: 'MICHAEL', t: `Timber and steel are raw materials... raw materials are primary. B.` },
    { s: 'TYLA', t: `[encouragingly] Read it again. Does Highway Manufacturing cut the trees or mine the iron?` },
    { s: 'MICHAEL', t: `[slowly] No... they take the timber and steel and make chairs out of them. That's manufacturing — turning raw materials into finished goods. So it's the secondary sector. D.` },
    { s: 'TYLA', t: `Correct — D. The examiner put "timber and steel" in the question to pull you towards primary. The primary sector extracts raw materials — farming, mining, forestry. The secondary sector converts them into products. And option C, "economic," isn't a sector at all. Question 1.1.4: "The role of the interviewer during an interview is to..." A, make the interviewee feel at ease. B, ask clarity-seeking questions about the position. C, assist candidates in responding to questions. D, be inquisitive and show interest in the business.` },
    { s: 'MICHAEL', t: `[confidently] B. The interviewer asks questions.` },
    { s: 'TYLA', t: `[patiently] Who asks questions about the position?` },
    { s: 'MICHAEL', t: `Hmm... the candidate wants to know about the job... [groans] oh. That's the interviewee. The candidate asks clarity-seeking questions, and the candidate shows interest in the business. That's D as well.` },
    { s: 'TYLA', t: `Exactly. B and D are both roles of the interviewee. C is wrong, because an interviewer doesn't help candidates answer — that would make the interview unfair. So?` },
    { s: 'MICHAEL', t: `A — make the interviewee feel at ease.` },
    { s: 'TYLA', t: `Correct — A. When a question is about a role, first ask yourself whose role it is. Question 1.1.5: "Top Limited implemented the ... step of the PDCA model by monitoring processes to determine whether they are functioning effectively." A, do. B, check. C, plan. D, act.` },
    { s: 'MICHAEL', t: `PDCA is Plan, Do, Check, Act. Monitoring whether something is working is checking. B.` },
    { s: 'TYLA', t: `Correct, B. Ten marks for 1.1.` },
    { s: 'TYLA', t: `Question 1.2. Complete each statement using a word from the list on screen. Five statements, two marks each. Notice that the list has ten words for five gaps, and several come in confusing pairs: threat and weakness, job specification and job description, selection and placement. That's deliberate. 1.2.1: "The ... Development Strategy aims to increase access to programmes that train people."` },
    { s: 'MICHAEL', t: `The National Skills Development Strategy.` },
    { s: 'TYLA', t: `Correct. 1.2.2: "Eezy Electronics are losing customers due to the high crime rate in the area. This is classified as a ... in the SWOT analysis."` },
    { s: 'MICHAEL', t: `Crime is outside the business, and it's bad for them. So it's a threat, not a weakness.` },
    { s: 'TYLA', t: `[impressed] Correct — and you gave the reason. Weaknesses are internal, things the business controls. Threats are external. 1.2.3: "The component of the job analysis that outlines the duties and responsibilities of the position is known as..."` },
    { s: 'MICHAEL', t: `Job specification.` },
    { s: 'TYLA', t: `Which one describes the job, and which one describes the person you need?` },
    { s: 'MICHAEL', t: `Ah... the job description describes the job — its duties and responsibilities. The job specification describes the person — the skills, qualifications and experience they need. So it's job description.` },
    { s: 'TYLA', t: `Correct — job description. 1.2.4: "Themba, the human resources manager, conducts background checks of applicants who qualify for the job during the ... procedure."` },
    { s: 'MICHAEL', t: `That's placement — he's checking where the person fits.` },
    { s: 'TYLA', t: `Has anyone been appointed yet?` },
    { s: 'MICHAEL', t: `[hesitantly] No... they're still applicants. So he's still choosing who to appoint. That's selection. Placement only happens once someone has the job.` },
    { s: 'TYLA', t: `Exactly — selection. Checking references and backgrounds is part of choosing the best candidate. Placement comes after the appointment, when you put the new employee in the position that suits them. 1.2.5: "Blue Manufacturer developed new methods and techniques to improve the quality of their products. This is known as quality..."` },
    { s: 'MICHAEL', t: `Quality management.` },
    { s: 'TYLA', t: `Correct. Ten marks for 1.2.` },
    { s: 'TYLA', t: `Question 1.3 — match a description in Column B to each term in Column A. Five terms, two marks each, and ten descriptions to choose from. The descriptions on screen also come in pairs that look almost the same. Read each pair slowly. 1.3.1: Black Economic Empowerment.` },
    { s: 'MICHAEL', t: `I — distributes the wealth of the country across a broader spectrum of society.` },
    { s: 'TYLA', t: `[encouragingly] Look at the exact term. Is it Broad-Based Black Economic Empowerment?` },
    { s: 'MICHAEL', t: `[surprised] No... it just says Black Economic Empowerment. And "broader spectrum" is the broad- based version. So the original BEE is the other one in the pair — D, distributes the wealth of the country to a few previously disadvantaged individuals.` },
    { s: 'TYLA', t: `Correct — D. The original BEE was criticised because it benefited only a small group. Broad-Based BEE was introduced to spread the benefits more widely. The examiner gave you both descriptions, side by side. 1.3.2: Horizontal integration.` },
    { s: 'MICHAEL', t: `Horizontal means buying out a competitor at the same level. So J — aims at reducing the threat of competition.` },
    { s: 'TYLA', t: `Correct, J. And its partner, E — reducing the business's dependency on suppliers — is backward vertical integration. 1.3.3: Employment contract.` },
    { s: 'MICHAEL', t: `A — an agreement between the employer and the employee that is legally binding.` },
    { s: 'TYLA', t: `Correct, A. The trap was F, an agreement between the employer and the trade union — that's a collective agreement, not an employment contract. 1.3.4: Purchasing function.` },
    { s: 'MICHAEL', t: `G — responsible for buying raw materials in bulk at lower prices.` },
    { s: 'TYLA', t: `Correct. B, producing goods at the lowest possible cost, belongs to the production function. And 1.3.5: Total quality management.` },
    { s: 'MICHAEL', t: `H — focuses on achieving customer satisfaction and continuous improvement in all business processes.` },
    { s: 'TYLA', t: `[delighted] Correct, H. C — the ability of a product to satisfy the needs of customers — is the definition of quality itself, not TQM. The word "total" is the clue: TQM covers all business processes. That's Section A — thirty marks.` },
  ],
},

{
  num: 2,
  file: 'BS Paper 1 Nov 2025 - Part 2 - Question 2 - Business Environments',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 1, November 2025. Part 2: Question 2, Business Environments` },
    { s: 'TYLA', t: `Section B. Question 2 is Business Environments, forty marks. From here on, the command word decides how much you write. "Name" or "give" means a short answer — one mark each, no explanation needed. "Outline," "explain," "discuss" and "advise" need a fact plus some depth, usually two marks per point. Question 2.1: "Name any FOUR types of leave provisions as stipulated in the Basic Conditions of Employment Act, 1997." Four marks.` },
    { s: 'MICHAEL', t: `Annual leave, sick leave, maternity leave and family responsibility leave.` },
    { s: 'TYLA', t: `Four out of four. The memo also accepts parental leave — which covers paternity, adoption and commissioning parental leave. And you gave exactly four. If you'd listed five and the first one was wrong, the correct fifth one wouldn't count.` },
    { s: 'MICHAEL', t: `[chuckles] First four only. Got it.` },
    { s: 'TYLA', t: `Question 2.2: "Outline the role of SETAs in supporting the Skills Development Act, 1998." Four marks.` },
    { s: 'MICHAEL', t: `"Outline," four marks... so two points at two marks each? SETAs promote and establish learnerships. They collect levies and pay out grants to businesses that comply with the Skills Development Act. And they develop sector skills plans in line with the National Skills Development Strategy.` },
    { s: 'TYLA', t: `Full marks, with one point to spare. Each of those is a complete role — two marks each. Other roles the memo accepts: reporting to the Director-General, registering learnership agreements, approving workplace skills plans and annual training reports, accrediting skills development facilitators, monitoring the training done by service providers, overseeing training in their economic sector, and identifying workplaces for practical work experience.` },
    { s: 'MICHAEL', t: `So for "outline," every point is a short, complete statement worth two marks.` },
    { s: 'TYLA', t: `Exactly. Notice the mark allocation, four, tells you that two good points are enough — but a third is a safety net if one of them isn't accepted.` },
    { s: 'TYLA', t: `Question 2.3. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Bona Frames. Bona Frames are well-known for their quality sunglasses and reading spectacles. BF sales have decreased as Bright Eyewear sells unique sunglasses at reasonable prices.` },
    { s: 'TYLA', t: `2.3.1: "Identify the force of Porter's Five Forces model that is applicable to BF. Motivate your answer by quoting from the scenario above." Three marks.` },
    { s: 'MICHAEL', t: `Another business selling similar products and taking their sales — that's competitive rivalry, or the power of competitors. And the quote: "BF sales have decreased as Bright Eyewear sells unique sunglasses at reasonable prices."` },
    { s: 'TYLA', t: `Three marks — two for the force, one for the quote. Two rules here. If you name the wrong force, you get nothing for the quote, even if it's the right sentence. But if your force is right and your quote is incomplete, you still keep the two marks for the force.` },
    { s: 'MICHAEL', t: `So the force is the key that unlocks the motivation mark.` },
    { s: 'TYLA', t: `[whispers] The force unlocks the quote. [warmly] 2.3.2: "Describe how businesses could apply ONE other force of Porter's Five Forces model to analyse their position in the market environment." Three marks.` },
    { s: 'MICHAEL', t: `Okay — competitive rivalry. Businesses should look at how many competitors they have and how strong they are, and compare their prices—` },
    { s: 'TYLA', t: `Stop. Read the question one more time. One... what force?` },
    { s: 'MICHAEL', t: `[groans] One other force. I just used competitive rivalry in 2.3.1. That would get zero.` },
    { s: 'TYLA', t: `Zero — the memo says so directly. Pick another one.` },
    { s: 'MICHAEL', t: `Bargaining power of suppliers. Businesses should assess how much power their suppliers have to influence prices. Suppliers that deliver unique or scarce products may have power over the business.` },
    { s: 'TYLA', t: `Three marks — two for naming the force, one for the description. Any of the other three would also work. Power of buyers: assess how easily customers can drive prices down — for example, customers who buy in bulk can bargain for better prices. Threat of substitutes: if the business's products are easily substituted, its position is weaker — but unique products are less threatened. And threat of new entrants: if the barriers to enter the market are low, new competitors can enter easily. Only your first force is marked.` },
    { s: 'TYLA', t: `Question 2.4: "Explain the steps in strategy evaluation." Four marks.` },
    { s: 'MICHAEL', t: `First, compare the expected performance with the actual performance, to see if the strategy is working. Then determine the reasons for any deviations and analyse them. And then take corrective action so that the deviations can be fixed.` },
    { s: 'TYLA', t: `Full marks. In "explain," the memo splits each step into a fact and its explanation — one mark each. "Take corrective action" is one mark; "so that the deviations can be corrected" is the second. The memo accepts the steps in any order. Other steps include: examining the underlying basis of the strategy, looking forward and backwards into the implementation process, setting specific dates for control and follow-up, drawing up a table of the strategy's advantages and disadvantages, deciding on the desired outcome, and considering the impact of the strategy on the internal and external environments.` },
    { s: 'MICHAEL', t: `So in "explain," a step on its own gets one mark. The "so that" part gets the second.` },
    { s: 'TYLA', t: `Exactly. Question 2.5: "Discuss any TWO types of intensive strategies." Six marks.` },
    { s: 'MICHAEL', t: `Six marks for two... so three marks each. Okay. First, market penetration: businesses focus on selling existing products in existing markets to increase their market share. Second... concentric diversification, where the business adds new products that are related to—` },
    { s: 'TYLA', t: `[patiently] Hold on. What kind of strategy is concentric diversification?` },
    { s: 'MICHAEL', t: `[hesitantly] It's... a diversification strategy. [sighs] Not an intensive one. Diversification is a completely separate group.` },
    { s: 'TYLA', t: `Right. There are three intensive strategies — market penetration, market development and product development. Diversification gets its own question later in this paper.` },
    { s: 'MICHAEL', t: `Okay, second one: product development. Businesses introduce new products into existing markets, or modify an existing product.` },
    { s: 'TYLA', t: `[impressed] Six marks. Two for each strategy name, and one for the discussion of each. So naming the strategy correctly is worth more than the explanation — but you need both. The third one, market development, is selling existing products in new markets, for example by targeting customers outside the business's normal target market. Only the first two strategies are marked.` },
    { s: 'MICHAEL', t: `And if I'd kept concentric diversification as my second answer?` },
    { s: 'TYLA', t: `Zero for that one, and the marker wouldn't read on to a third.` },
    { s: 'MICHAEL', t: `[whispers] Penetration, market development, product development... the intensive three.` },
    { s: 'TYLA', t: `Question 2.6. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Meyer Furniture. Meyer Furniture provides customers with facilities to buy goods on credit. MF conducts credit checks with the credit bureau before the granting of credit. They allow customers a five-day cooling-off period to return goods. MF also ensures that their procedures adhere to the provisions of the Financial Intelligence Centre Act.` },
    { s: 'TYLA', t: `2.6.1: "Quote TWO ways in which MF complies with the National Credit Act from the scenario above." Two marks.` },
    { s: 'MICHAEL', t: `One: "MF conducts credit checks with the credit bureau before the granting of credit." Two: "They allow customers a five-day cooling-off period to return goods."` },
    { s: 'TYLA', t: `[seriously] The first one's right. Which Act gives customers a cooling-off period to return goods?` },
    { s: 'MICHAEL', t: `That's... the Consumer Protection Act. [groans] It's in the scenario, but it's not about credit.` },
    { s: 'TYLA', t: `Exactly. The examiner put a CPA right into a scenario about the NCA. So what's your second quote?` },
    { s: 'MICHAEL', t: `"MF also ensures that their procedures adhere to the provisions of the Financial Intelligence Centre Act."` },
    { s: 'TYLA', t: `Two marks. Note that only answers quoted from the scenario are marked, and only the first two. So a wrong first quote would have cost you that mark. 2.6.2: "Recommend other ways in which businesses can comply with the National Credit Act." Four marks.` },
    { s: 'MICHAEL', t: `"Other," so I can't repeat the scenario. Businesses should register with the National Credit Regulator. They should conduct affordability assessments to make sure consumers can repay. And they should disclose all the costs of the loan, with no hidden costs.` },
    { s: 'TYLA', t: `Four marks, with a spare. Two marks each. Also accepted: offer applicants pre-agreement statements, submit an annual compliance report to the National Credit Regulator, and verify the identity of clients, report suspicious transactions and train staff on their duties under FICA.` },
    { s: 'TYLA', t: `Question 2.7: "Explain ways in which businesses can apply ownership as a pillar of the Broad-Based Black Economic Empowerment Act, 2003." Six marks.` },
    { s: 'MICHAEL', t: `Six marks — three points. Businesses should include black people in shareholding, partnerships or franchises. Large businesses should form joint ventures with small black-owned businesses and share the business risks. And they can encourage small black investors to invest in big companies and share ownership.` },
    { s: 'TYLA', t: `[delighted] Six out of six. Each one has a "what" and a "how" — one mark each. The memo also accepts that Exempted Micro Enterprises with fifty percent or more black ownership are promoted to level three of the BEE scorecard, and that more opportunities are created for black people to become owners and entrepreneurs. It even accepts the challenges: that businesses can find it difficult to locate suitable black partners who can afford shares, and that many black people can't afford shares or partnership contributions.` },
    { s: 'MICHAEL', t: `Wait — so the memo gives marks for problems in a "ways to apply" question?` },
    { s: 'TYLA', t: `[chuckles] It does here, because those challenges are part of applying the ownership pillar in practice. But build your answer on the ways first — they're the safe marks. Question 2.8: "Advise businesses on the advantages of diversification strategies." Four marks.` },
    { s: 'MICHAEL', t: `And there's diversification! Okay. Diversification reduces the risk of relying on only one product for income. And it increases sales and business growth.` },
    { s: 'TYLA', t: `Four marks. Others the memo accepts: an improved brand image, more technological capabilities through product modification, steady profits from different product lines when the economy fluctuates, more output from fewer inputs because one factory can make several products, keeping a competitive advantage by meeting new customers' needs, staying relevant in a changing environment, and establishing markets in unrelated industries. That's Question 2 — forty marks.` },
  ],
},

{
  num: 3,
  file: 'BS Paper 1 Nov 2025 - Part 3 - Question 3 - Business Operations',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 1, November 2025. Part 3: Question 3, Business Operations` },
    { s: 'TYLA', t: `Question 3 is Business Operations, forty marks. Question 3.1: "Give any FOUR examples of fringe benefits." Four marks.` },
    { s: 'MICHAEL', t: `Pension fund, medical aid, a car allowance and a staff discount.` },
    { s: 'TYLA', t: `Four out of four, one mark each. Also accepted: a funeral benefit, a provident fund, other allowances like housing, travel, cell phone or clothing, performance-based incentives, bonus shares, and free or low-cost meals in a canteen. Question 3.2: "Outline the placement procedure as a human resources activity." Six marks.` },
    { s: 'MICHAEL', t: `Okay. The new employee is welcomed and taken on a tour of the building. They're introduced to their colleagues and their supervisor—` },
    { s: 'TYLA', t: `[encouragingly] Michael. Is that placement?` },
    { s: 'MICHAEL', t: `[hesitantly] It's... what happens when someone starts. [groans] No — that's induction. Placement is about putting the person in the right position.` },
    { s: 'TYLA', t: `Exactly. Induction introduces a new employee to the business. Placement matches the employee to the job. Students mix them up every year — and this paper asks about both. Induction comes up in Question 4.6. Try again.` },
    { s: 'MICHAEL', t: `Placement. First, the business outlines the specific responsibilities, expectations and skills of the new position. Then it determines the successful candidate's strengths, weaknesses, interests and skills by putting them through psychometric tests. And then it determines the relationship between the position and the competencies of the new employee, so the person fits the job.` },
    { s: 'TYLA', t: `Six out of six. Those are the three points in the memo, two marks each, and you got all three.` },
    { s: 'MICHAEL', t: `[whispers] Induction says hello. Placement finds the right seat.` },
    { s: 'TYLA', t: `Question 3.3. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Fabric Wholesalers. Fabric Wholesalers sell different types of material. FW pay their employees according to the number of rolls of material they sell. They have a sound knowledge of the Labour Relations Act, 1995, and its implications on the human resources function.` },
    { s: 'TYLA', t: `3.3.1: "Name the salary determination method applied by FW in the scenario above." Two marks.` },
    { s: 'MICHAEL', t: `They're paid for what they sell — so it's commission.` },
    { s: 'TYLA', t: `Read it again. Are they paid a percentage of the value of their sales, or for the number of items?` },
    { s: 'MICHAEL', t: `"According to the number of rolls." [slowly] So it's per unit... that's piecemeal. Paid per piece.` },
    { s: 'TYLA', t: `Correct — piecemeal, two marks, and that's the only answer the memo accepts. The word "sell" pulls you towards commission. But commission is a percentage of the sales value. Here, the pay depends on how many rolls, so it's piecemeal. 3.3.2: "Explain the implications of the Labour Relations Act on the human resources function." Four marks.` },
    { s: 'MICHAEL', t: `The LRA promotes the resolution of labour disputes between employers and employees. And workers can't easily be dismissed, because the processes of the bargaining council or the CCMA have to be followed.` },
    { s: 'TYLA', t: `Four marks — each is a fact plus an explanation. The memo also accepts: it protects the rights of employers and employees as set out in the Constitution; it advances economic development and labour peace; unresolved disputes can go to the Labour Court or Labour Appeal Court; it promotes orderly negotiations and employee participation in decisions; it provides a framework for bilateral meetings; HR must allow workers to form workplace forums and trade unions; and it clarifies the transfer of employment contracts when a business changes owners.` },
    { s: 'TYLA', t: `Question 3.4: "Advise businesses on the reasons for the termination of an employment contract." Four marks.` },
    { s: 'MICHAEL', t: `An employer may dismiss an employee for a valid reason, such as misconduct or unsatisfactory work performance. And an employee may resign voluntarily for a better job opportunity. Oh, and an employee may reach the retirement age.` },
    { s: 'TYLA', t: `Four marks, with a spare. Other reasons: retrenchment because the employer can't pay employees; redundancy or restructuring; incapacity due to illness or injury; mutual agreement between employer and employee; and the contract simply coming to an end. Question 3.5: "Outline the difference between quality control and quality assurance." Four marks.` },
    { s: 'MICHAEL', t: `Quality control inspects the final product to check that it meets the required standards.` },
    { s: 'TYLA', t: `[encouragingly] That's one side. What's the question asking for?` },
    { s: 'MICHAEL', t: `The difference. So I need both sides. Quality control inspects the final product to check that the desired quality is met, whereas quality assurance checks are carried out during and after the production process, to make sure required standards are met at every stage.` },
    { s: 'TYLA', t: `[delighted] Four marks. Two for quality control, two for quality assurance. If you describe only one side, the maximum is two marks. The answer doesn't have to be a table, and the two sides don't have to match exactly, but the difference must be clear. "Whereas" is the word that makes it clear.` },
    { s: 'MICHAEL', t: `So quality control is checking at the end... and quality assurance is building quality in at every stage.` },
    { s: 'TYLA', t: `Exactly — the memo even says quality assurance is "building in" quality as opposed to "checking" it. Other differences: quality control checks raw materials, machinery and workmanship to keep standards high, and includes setting targets and taking corrective measures. Quality assurance aims to get things right the first time and prevent mistakes. [whispers] Control checks. Assurance builds it in.` },
    { s: 'TYLA', t: `Question 3.6. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Bilon Manufacturers. Bilon Manufacturers produce sport cars. BM schedule their activities to avoid the duplication of tasks. The management of BM shares the responsibility for quality output with employees. BM is also aware of the impact of total quality management if it is poorly implemented.` },
    { s: 'TYLA', t: `3.6.1: "Quote TWO ways from the scenario above in which BM apply total quality management to reduce the cost of quality." Two marks.` },
    { s: 'MICHAEL', t: `[confidently] I've learned my lesson from the cooling-off period. Quote exactly. "BM schedule their activities to avoid the duplication of tasks." And: "The management of BM shares the responsibility for quality output with employees."` },
    { s: 'TYLA', t: `[impressed] Two marks. And you didn't quote the last sentence about being "aware of the impact" — that isn't a way of reducing costs. It's there to lead into the next question. 3.6.2: "Discuss the impact of total quality management if poorly implemented by businesses." Four marks.` },
    { s: 'MICHAEL', t: `If TQM is poorly implemented, employees may not be adequately trained, which results in poor- quality products. And the business's reputation may suffer because of poor-quality or defective goods.` },
    { s: 'TYLA', t: `[warmly] Four marks — each point has a consequence, and that's what "discuss" needs. Also accepted: unrealistic deadlines that can't be met; a decline in productivity because of stoppages; failing to adapt products to customer needs; customers switching to the many alternatives; investors withdrawing investment if profits fall; a decline in sales because of returned goods; high staff turnover from poor skills development; and uncontrolled quality processes leading to errors.` },
    { s: 'TYLA', t: `Question 3.7: "Describe the advantages of monitoring and evaluation of quality processes as a total quality management element for large businesses." Six marks.` },
    { s: 'MICHAEL', t: `Six marks — three points. Monitoring and evaluation prevents product defects and minimises wastage and customer complaints. The cost of production is reduced, because deviations from set standards can be corrected. And quality circles meet regularly to evaluate progress in terms of quality.` },
    { s: 'TYLA', t: `Six marks. It's a long memo for this one — other accepted advantages include: fewer equipment breakdowns because of good quality checks; getting things right the first time; better performance and high standards; better management of quality outcomes; clear information about which quality aspects help reach targets; better use of resources; information for informed decisions; strategies revised to improve quality and image; quality checks at key points; carefully chosen key performance indicators; benchmarking to find best practices; and continuous research to keep TQM planning up to date.` },
    { s: 'MICHAEL', t: `That's a lot of options for six marks.` },
    { s: 'TYLA', t: `[laughs] That's Business Studies. Learn a few you really understand, and say them in full sentences. Question 3.8: "Advise businesses on the quality indicators of the public relations function." Four marks.` },
    { s: 'MICHAEL', t: `Dealing quickly with negative publicity. And implementing sustainable corporate social investment programmes.` },
    { s: 'TYLA', t: `Four marks. Also accepted: regular, positive press releases; good results from public surveys on the business's image; a high standard of internal publicity, like the appearance of buildings and professional telephone etiquette; delivering quality goods and services that promote the brand with stakeholders; and complying with recent legislation, like being BEE compliant. That's Question 3 — forty marks.` },
  ],
},

{
  num: 4,
  file: 'BS Paper 1 Nov 2025 - Part 4 - Question 4 - Miscellaneous Topics',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 1, November 2025. Part 4: Question 4, Miscellaneous Topics` },
    { s: 'TYLA', t: `Question 4 is Miscellaneous Topics — half Business Environments, half Business Operations, forty marks. Question 4.1: "Name any TWO types of defensive strategies." Two marks.` },
    { s: 'MICHAEL', t: `Retrenchment and liquidation.` },
    { s: 'TYLA', t: `Two marks. The third is divestiture. Question 4.2: "Outline the strategic management process." Four marks.` },
    { s: 'MICHAEL', t: `First, the business should have a clear vision and mission statement in place. Then it should conduct environmental scanning, using tools like a SWOT analysis, PESTLE or Porter's Five Forces, to identify strengths, weaknesses, opportunities and threats. Then formulate alternative strategies, implement the chosen strategy, and evaluate and monitor it so that corrective action can be taken.` },
    { s: 'TYLA', t: `Four marks — two points were enough, and you gave a good run through the whole process. The memo has two versions of this answer, and both follow the same order: vision and mission, environmental analysis, formulate a strategy, develop an action plan and implement it, then evaluate, monitor and take corrective action.` },
    { s: 'TYLA', t: `Question 4.3. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Global Farms. Global Farms distribute their fruit locally and internationally. Their exports have decreased due to unfavourable exchange rates. The workers of GF are also not meeting their deadlines because they are often late for work.` },
    { s: 'TYLA', t: `Use the table on screen as a guide to answer Questions 4.3.1 and 4.3.2. 4.3.1: "Quote TWO challenges for GF from the scenario above." Two marks. And 4.3.2: "Classify GF's challenges according to the business environments." Two marks.` },
    { s: 'MICHAEL', t: `Challenge one: "Their exports have decreased due to unfavourable exchange rates." Exports means international customers, and customers are in the market environment.` },
    { s: 'TYLA', t: `[encouragingly] Which part of that sentence is the actual cause of the problem?` },
    { s: 'MICHAEL', t: `The exchange rates. And the business can't control those at all. That's an economic factor, part of PESTLE... so it's the macro environment.` },
    { s: 'TYLA', t: `Correct — macro. It's a common trap: the word "exports" makes you think of customers and the market environment. But the business has no control over exchange rates, so it's macro. And the second?` },
    { s: 'MICHAEL', t: `"The workers of GF are also not meeting their deadlines because they are often late for work." Workers are inside the business — micro environment.` },
    { s: 'TYLA', t: `[delighted] Correct. Four marks for 4.3 — one for each quote and one for each environment. And if you link a challenge to the wrong environment, the marker still gives you the mark for the quote. Write it in the table, row by row, so each environment sits next to its challenge.` },
    { s: 'TYLA', t: `Question 4.4: "Discuss the impact of the Compensation for Occupational Injuries and Diseases Amendment Act, 1997, on businesses." Six marks.` },
    { s: 'MICHAEL', t: `"Impact" — so I can give positives, negatives, or both? Positive: COIDA eliminates the time and costs spent on lengthy civil court proceedings. And employers are protected from financial burden if an accident happens at work, as long as the employer was not negligent. Negative: claiming processes can be time-consuming.` },
    { s: 'TYLA', t: `Six marks. "Impact" means you can go positive, negative, or mix them — the memo says "and/or." Each point is two marks: one for the fact, one for the reason. Other positives include: it promotes safety at work; domestic workers can claim; employees don't contribute; claiming is relatively simple; compensation is tax- free; and dependants receive support if an employee dies from a work-related accident or disease. Other negatives: military workers and those working in foreign countries aren't covered; heavy penalties if the employer is negligent; costly paperwork and procedures; and annual contributions that may cause cash-flow problems.` },
    { s: 'MICHAEL', t: `And I'd use the same structure for any "impact" question — fact, then why.` },
    { s: 'TYLA', t: `Exactly. Question 4.5: "Recommend ways in which businesses can deal with the challenges posed by the social factor of the PESTLE analysis." Four marks.` },
    { s: 'MICHAEL', t: `Businesses can work together with community police forums to improve security. And they can hire employees who speak the local language.` },
    { s: 'TYLA', t: `Four marks. Others: sell substitute products at lower prices where income levels are low, or employ people from the local community; keep up with customers' demands and trends; and develop new products for customers' changing lifestyles.` },
    { s: 'TYLA', t: `Now the Business Operations half. Question 4.6: "Outline the purpose of induction." Four marks.` },
    { s: 'MICHAEL', t: `[laughs] Finally — my wrong answer from 3.2 is right! The purpose of induction is to introduce new employees to management and colleagues, so they can build relationships. And to give them a tour of the building or office, so they know the layout.` },
    { s: 'TYLA', t: `[playfully] See? Nothing is wasted. Four marks. The memo also accepts: making new employees feel welcome in their workspace; improving skills through in-service training; familiarising them with the organisational structure; letting them ask questions to reduce anxiety; letting them explore different departments; explaining safety rules; making sure they understand their roles; sharing information about the products; and explaining business policies, the employment contract and conditions of employment. Question 4.7: "Explain the Unemployment Insurance Fund as a benefit required by law." Six marks.` },
    { s: 'MICHAEL', t: `Employees contribute one percent of their basic salary to the UIF. Employers also contribute one percent of the employee's basic salary. And the fund offers short-term financial assistance to workers when they become unemployed, or can't work because of illness, maternity or adoption leave.` },
    { s: 'TYLA', t: `Six marks. Each point splits into one mark for the fact and one for the detail. Also accepted: employers pay the full two percent directly to the UIF every month; the fund helps the dependants of a contributor who has died; and contributions are paid to the UIF or to SARS. Watch your numbers: one percent from the employee, one percent from the employer, two percent in total.` },
    { s: 'TYLA', t: `Question 4.8. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Fibernet Limited. Fibernet Limited supply Wi-Fi routers to businesses and they apply total quality management in their operations. FL can afford to conduct research to gather information on the quality of their products. They also benefit from a good quality management system.` },
    { s: 'TYLA', t: `4.8.1: "Name the total quality management element applied by FL in the scenario above." Two marks.` },
    { s: 'MICHAEL', t: `They're gathering information on quality... so monitoring and evaluation of quality processes.` },
    { s: 'TYLA', t: `[encouragingly] What's the very first thing the sentence says about FL?` },
    { s: 'MICHAEL', t: `"FL can afford to conduct research." [thoughtfully] Being able to afford it... that's about money. So it's adequate financing and capacity.` },
    { s: 'TYLA', t: `Correct — two marks. The memo accepts only adequate financing and capacity. "Research" pulls you towards monitoring, but the key words are "can afford." Always look for the word that only one element explains. 4.8.2: "Explain the benefits of a good quality management system." Four marks.` },
    { s: 'MICHAEL', t: `Effective customer service is provided, which leads to increased customer satisfaction. And time and resources are used efficiently.` },
    { s: 'TYLA', t: `Four marks. Others: higher productivity through good time management; products constantly improved; goals more likely to be achieved; a competitive advantage; better employee skills through regular training; healthy working relationships and better morale; more market share and profitability; and a better business image because there are fewer defects and returns.` },
    { s: 'TYLA', t: `Last question in Section B. 4.9: "Advise businesses on the role of quality circles as part of continuous improvement to processes and systems." Four marks.` },
    { s: 'MICHAEL', t: `Quality circles investigate problems and suggest solutions to management. And they solve problems related to quality and implement improvements.` },
    { s: 'TYLA', t: `[warmly] Four marks. The memo lists many more roles: ensuring no duplication of tasks; suggesting ways to improve processes and systems; improving quality and productivity through regular reviews; monitoring strategies for smooth operations; boosting morale and team spirit; contributing to the development of the organisation; reducing the cost of wasted effort; increasing demand for products; creating harmony and high performance; building healthy employer-employee relationships; improving loyalty and commitment; improving communication at all levels; and developing a sense of involvement in decision-making. That's Question 4 — forty marks — and that's all of Section B.` },
    { s: 'MICHAEL', t: `So in the real exam, how do I choose which two of the three to answer?` },
    { s: 'TYLA', t: `Spend a minute reading all three before you write a word. Choose the two where you can answer the scenario questions — they're the most specific — and the "name" or "give" questions with confidence. And remember the rule from the start: only your first two questions are marked. Don't start a third "just in case."` },
  ],
},

{
  num: 5,
  file: 'BS Paper 1 Nov 2025 - Part 5 - Section C - Essays and Wrap-Up',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 1, November 2025. Part 5: Section C, the Essays, and Wrap-Up` },
    { s: 'TYLA', t: `Section C — the essay. Forty marks, about thirty minutes, and you write only one of the two. Before we look at the questions, Michael, how do you think a forty-mark essay is marked?` },
    { s: 'MICHAEL', t: `[curious] Lots of facts?` },
    { s: 'TYLA', t: `Partly. Thirty-two marks are for facts — the introduction, the four sub-questions and the conclusion. The other eight are for insight, and students throw those away every year. Insight has four parts, two marks each. We call them LASO.` },
    { s: 'MICHAEL', t: `LASO. Okay — L?` },
    { s: 'TYLA', t: `Layout. An introduction, paragraphs and a conclusion. And here's the catch: you must actually write the headings INTRODUCTION and CONCLUSION, and each heading needs real content under it. A heading on its own gets nothing. A is Analysis — you break the question into headings, one for each sub-question, and interpret it correctly. S is Synthesis — your facts are relevant to what's asked. If a whole sub-question has nothing relevant, you lose synthesis marks. And O is Originality — a recent example, not older than two years, in at least two of the four sub-questions.` },
    { s: 'MICHAEL', t: `Layout, Analysis, Synthesis, Originality. And for originality, the example has to be real?` },
    { s: 'TYLA', t: `[seriously] Real, recent, and one you actually know — a business in the news, a new law, a current trend. Never make one up. Two more rules. In Section C, a full sentence earns two marks, and a phrase earns only one. And anything you repeat from your introduction in the body earns nothing the second time.` },
    { s: 'TYLA', t: `Question 5: Business Environments — Legislation.` },
    { s: 'NARRATOR', t: `The Employment Equity Act, 1998, was established to facilitate the transformation process in the workplace. The implementation of the EEA may have an impact on business operations. Businesses are compelled to comply with the requirements of this Act to avoid facing penalties for non-compliance.` },
    { s: 'TYLA', t: `"Write an essay on the Employment Equity Act in which you include the following aspects. Outline the purpose of the Employment Equity Act. Discuss the impact of the Employment Equity Act on businesses. Explain ways in which businesses can comply with the Employment Equity Act. Advise businesses on penalties they may face for non-compliance with this Act." Forty marks. Michael — your introduction.` },
    { s: 'MICHAEL', t: `"Introduction. In this essay, I will discuss the Employment Equity Act."` },
    { s: 'TYLA', t: `[encouragingly] Layout mark — yes, you wrote the heading. But how many fact marks did that sentence earn?` },
    { s: 'MICHAEL', t: `[sighs] None. It just repeats the question.` },
    { s: 'TYLA', t: `Right. The introduction is worth two marks — one per relevant fact — and it has to touch on at least two of the four sub-questions. Try again.` },
    { s: 'MICHAEL', t: `"Introduction. The Employment Equity Act gives businesses the opportunity to create fair employment practices that correct the inequalities of the past. The Act also names the bodies that monitor compliance and that impose penalties on businesses that do not comply."` },
    { s: 'TYLA', t: `[delighted] Two marks — purpose and penalties, two sub-questions. Now the body. The first heading — purpose — is worth ten marks, so five facts at two marks each.` },
    { s: 'MICHAEL', t: `"Purpose of the EEA. The EEA eliminates discrimination on the grounds of gender, race or disability in the workplace. It promotes equal opportunity and fair treatment. It allows employees who do the same work to be paid equally. It promotes diversity by making sure that people from diverse backgrounds are appointed. And it ensures equal representation in the workplace through affirmative action."` },
    { s: 'TYLA', t: `Ten out of ten. The memo also accepts that the Act protects employees from victimisation if they exercise their rights. Next heading — impact on businesses — fourteen marks, so seven points. Positives, negatives or both.` },
    { s: 'MICHAEL', t: `"Impact of the EEA on businesses. On the positive side, it encourages consultation between employer and employees. It motivates employees, because the workforce is more diverse and representative. It has a positive impact on BEE ratings. It gives employees legal recourse if they have been unfairly discriminated against. And businesses are in a better position to negotiate contracts with the government."` },
    { s: 'TYLA', t: `That's ten marks so far. Give me two negatives.` },
    { s: 'MICHAEL', t: `"On the negative side, it increases the administrative burden, because businesses must compile and submit employment equity reports. And fines for non-compliance may be expensive."` },
    { s: 'TYLA', t: `[impressed] Fourteen. Other positives: fair treatment and equal opportunities; a clearly defined appointment process; affirmative action to redress imbalances; preventing unfair discrimination; a framework of acceptable practices; and certified psychometric tests for suitable appointments. Other negatives: the cost of training people who know little about the Act; conflict if colleagues don't respect an EEA appointee's skills; the salary cost of appointing senior managers to run the plan; skilled designated employees demanding higher salaries; job-hopping; conflict from diversity; needing a compliance certificate before doing business with the state; pressure to appoint unsuitable people; and positions going unfilled when no suitable candidates apply.` },
    { s: 'MICHAEL', t: `That's a huge list.` },
    { s: 'TYLA', t: `You only need seven. Next — ways to comply, twelve marks, six points.` },
    { s: 'MICHAEL', t: `"Ways to comply with the EEA. Businesses should prepare an employment equity plan in consultation with employees. They should submit the plan to the Department of Labour. They should assign one or more senior managers to implement and monitor the plan. They should assess the racial composition of all employees, including senior management. They should pay employees equally for work of equal value. And they should display a summary of the Act where all employees can see it."` },
    { s: 'TYLA', t: `Twelve marks. Also accepted: guard against discriminatory appointments; equal representation at every level; a clearly defined appointment process; diversity and inclusivity; affirmative action measures for designated groups; implementing the plan; removing barriers that harm designated groups; reporting regularly on progress; fair medical, psychological and psychometric testing; reflecting the country's demographics; restructuring policies; and training designated groups through skills development. Last heading — penalties, ten marks, five points.` },
    { s: 'MICHAEL', t: `"Penalties for non-compliance. Labour inspectors may conduct on-site visits and interview employees, which can damage the business's image. A compliance order may be issued. Businesses may be taken to the Labour Court if they ignore compliance orders. They may face heavy fines. And the Department of Labour may block them from doing business with the government."` },
    { s: 'TYLA', t: `Ten. The memo also accepts that inspectors may investigate complaints, that businesses may have to pay compensation and damages to the employee, and that an inspector may order a business to stop operating if it's found guilty of illegal practices. And your conclusion?` },
    { s: 'MICHAEL', t: `"Conclusion. Businesses that comply with the EEA get preferential treatment from government institutions when tenders are awarded."` },
    { s: 'TYLA', t: `Two marks — a conclusion needs one strong fact linked to at least one sub-question. Add a recent, real example in two sections, write headings for every sub-question, keep everything relevant, and you're looking at a very high mark.` },
    { s: 'TYLA', t: `Question 6: Business Operations — the Human Resources Function.` },
    { s: 'NARRATOR', t: `Businesses following the correct recruitment procedures will attract the best applicants. The human resources manager could use the internal recruitment method to fill the available vacancies. The interviewer must be well prepared before conducting the interview. Both employers and employees should be aware of the legal requirements of an employment contract.` },
    { s: 'TYLA', t: `"Write an essay on the human resources function in which you include the following aspects. Outline the recruitment procedure as a human resources activity. Discuss the impact of internal recruitment on businesses. Explain the role of the interviewer before the interview. Advise businesses on the legal requirements of an employment contract." Forty marks. Same structure, Michael — introduction first.` },
    { s: 'MICHAEL', t: `"Introduction. An accurate recruitment procedure enables businesses to appoint suitable candidates who meet the needs of the position. Businesses are also guided by laws when they draw up the legal requirements of an employment contract."` },
    { s: 'TYLA', t: `Two marks, two sub-questions. Recruitment procedure — ten marks.` },
    { s: 'MICHAEL', t: `"Recruitment procedure. The human resources manager should evaluate the job and prepare a job analysis, including the job description and job specification, to identify recruitment needs. The HR manager should choose the method of recruitment — internal or external — to reach suitable candidates. Vacancies can be advertised internally by email, word of mouth or staff notices. Then the business shortlists the applicants, checks their references and invites them for interviews—"` },
    { s: 'TYLA', t: `[encouragingly] Careful. Shortlisting, references, interviews — which procedure is that?` },
    { s: 'MICHAEL', t: `[groans] Selection. Recruitment ends once the right people have applied. Okay — back to recruitment. "If internal recruitment is unsuccessful, external recruitment should be considered, using sources like recruitment agencies, tertiary institutions or newspapers. An advertisement should be prepared with the relevant information, such as the company name and contact details. And it should be placed in the appropriate media so that the best candidates apply."` },
    { s: 'TYLA', t: `[delighted] Ten marks. But the selection steps earned nothing, they cost you time, and facts that don't answer the sub-question can count against you for synthesis. The memo accepts the steps in any order. Next — impact of internal recruitment, fourteen marks.` },
    { s: 'MICHAEL', t: `"Impact of internal recruitment. Positively, it's cheaper and quicker to fill the post, because existing employees are promoted. Placement is easy, because management already knows the employee's skills and strengths. It provides career paths within the business. Induction and training aren't always necessary, because the employee already understands how the business works. And it reduces staff turnover, because employees see future career prospects. Negatively, current employees may not bring new ideas into the business. And promoting one employee may cause resentment among others."` },
    { s: 'TYLA', t: `Fourteen. Also accepted: reliable information is available from supervisors and employee records; promotion disrupts operations by creating another vacancy; the number of applicants is limited; people without the right skills may be promoted; training before promotion can be expensive; and staff who aren't promoted may feel demotivated. Role of the interviewer before the interview — ten marks.` },
    { s: 'MICHAEL', t: `"Role of the interviewer before the interview. The interviewer should make the candidate feel at ease—"` },
    { s: 'TYLA', t: `[playfully] Remember Question 1.1.4?` },
    { s: 'MICHAEL', t: `[laughs] That's during the interview! The candidate isn't even there yet. Okay — before. "The interviewer should book and prepare the venue. They should inform all shortlisted candidates of the date and place of the interview. They should notify all panel members. They should develop a core set of questions based on the skills and knowledge required. And they should check each candidate's CV for anything that needs to be explained."` },
    { s: 'TYLA', t: `Ten marks. Also accepted: set the interview date and hold all interviews on the same day if possible; plan the programme and the time for each candidate; and give every candidate the same amount of time. Last heading — legal requirements of an employment contract, twelve marks.` },
    { s: 'MICHAEL', t: `"Legal requirements of an employment contract. Both the employer and the employee must sign the contract. Both parties must agree to any changes, and no party may change it unilaterally. The remuneration package, including benefits, must be clearly stated. The contract may not contain any requirements that conflict with the BCEA. The employer must explain the terms and conditions to the employee. And the employee must be allowed to read the whole contract before signing it."` },
    { s: 'TYLA', t: `Twelve. Also accepted: the contract can be renegotiated during employment; duties and responsibilities must be clearly stated; business policies, procedures and disciplinary codes form part of it; and it should include a code of conduct and code of ethics. Conclusion?` },
    { s: 'MICHAEL', t: `"Conclusion. The success of an interview depends on how well the interviewer plans before it takes place."` },
    { s: 'TYLA', t: `Two marks. And that's the whole paper — all six questions, one hundred and fifty marks.` },
    { s: 'MICHAEL', t: `[excitedly] I wrote both essays! I'll never have to do that in a real exam.` },
    { s: 'TYLA', t: `[laughs] And if you do, only the first one gets marked.` },
    { s: 'TYLA', t: `[warmly] Michael, how are you feeling?` },
    { s: 'MICHAEL', t: `[sighs] Like I just ran a marathon in a suit. But honestly, I knew most of the business content. The marks I almost lost were from not reading properly.` },
    { s: 'TYLA', t: `That's the biggest lesson from today. Same tradition — give me the top traps from this paper, in one go.` },
    { s: 'MICHAEL', t: `Okay. Section A. Making chairs from timber and steel is the secondary sector — it converts raw materials, it doesn't extract them. Asking questions about the position is the interviewee's role — the interviewer puts the candidate at ease. The job description is about the job, the job specification is about the person. Background checks on applicants are part of selection, not placement. Crime outside the business is a threat, not a weakness. Black Economic Empowerment without "broad-based" is wealth to a few. And TQM covers all business processes — the ability to satisfy customers is just quality.` },
    { s: 'TYLA', t: `Keep going — Section B.` },
    { s: 'MICHAEL', t: `Only the first answers are marked, so give exactly what's asked. "One other force" means you can't reuse the force from the scenario. Diversification is not an intensive strategy — the intensive three are market penetration, market development and product development. A cooling-off period is the CPA, not the NCA. When it says "quote," quote exactly. Placement is not induction. Paid per roll is piecemeal, not commission. A difference needs both sides — use "whereas." Exchange rates are macro, even when the challenge is about exports. And "can afford" means adequate financing and capacity.` },
    { s: 'TYLA', t: `And Section C?` },
    { s: 'MICHAEL', t: `Write the headings INTRODUCTION and CONCLUSION, with real facts under them, not "in this essay I will discuss." Make a heading for every sub-question. Use full sentences — two marks instead of one. Include real, recent examples. Shortlisting and interviews are selection, not recruitment. And "before the interview" means before — no putting the candidate at ease yet.` },
    { s: 'TYLA', t: `[amazed] ...That's a revision list I'd stick on a wall. And to everyone watching: notice how few of those traps were about not knowing business. They were about one word — "other," "quote," "before," "difference," "can afford." Read every word, use the marks as your guide, and answer exactly what's asked.` },
    { s: 'MICHAEL', t: `[playfully] And write in full sentences. That's free marks.` },
    { s: 'TYLA', t: `[laughs] It really is. Next time, we tackle Paper 2. Until then... [whispers] read the question twice, and write it once. [warmly] We'll catch you in the next episode.` },
  ],
},

];

// ─────────────────────────────────────────────────────────────────────────

function pad(n, len = 4) { return String(n).padStart(len, '0'); }

function requestTTS(text, voiceId, modelId) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      model_id: modelId,
      voice_settings: voiceSettingsFor(modelId),
    });
    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${voiceId}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': ELEVENLABS_KEY,
        'Accept': 'audio/mpeg',
      },
    }, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`${res.statusCode}: ${Buffer.concat(chunks)}`));
        } else {
          resolve(Buffer.concat(chunks));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function generateAudio(text, voiceId, outputPath) {
  try {
    const buf = await requestTTS(text, voiceId, PRIMARY_MODEL);
    fs.writeFileSync(outputPath, buf);
    return 'v4';
  } catch (e) {
    console.warn(`  ! ${PRIMARY_MODEL} failed (${e.message.slice(0, 300)}) — retrying with ${FALLBACK_MODEL}`);
    const buf = await requestTTS(text, voiceId, FALLBACK_MODEL);
    fs.writeFileSync(outputPath, buf);
    return 'fallback';
  }
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function hasFfmpeg() {
  try { execSync('ffmpeg -version', { stdio: 'ignore' }); return true; }
  catch { return false; }
}

function slugifyFolder(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function generateEpisode(ep, ffmpegAvailable, silenceShort, forceLines = new Set()) {
  const epDir = path.join(TMP_ROOT, slugifyFolder(ep.file));
  fs.mkdirSync(epDir, { recursive: true });

  const manifestPath = path.join(epDir, '_manifest.json');
  let manifest = {};
  try { manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); } catch {}
  const hashOf = (seg) => crypto.createHash('sha1').update(`${seg.s}|${PRIMARY_MODEL}|${seg.t}`).digest('hex');

  const files = [];
  let usedFallback = 0;

  // Safety guard: if this episode was already finished but its saved clips are missing, a run would silently
  // re-record (and re-bill) the missing lines. Stop and say so unless --go (or --fresh) was passed.
  {
    const finalMp3 = path.join(OUT_DIR, `${ep.file}.mp3`);
    // Lines you explicitly asked for (e.g. 3:33) are expected to be (re)generated, so they don't count as "missing".
    const missingNow = ep.segs
      .map((sg, i) => ({ f: path.join(epDir, `${pad(i)}_${sg.s.toLowerCase()}.mp3`), line: i + 1 }))
      .filter(x => !forceLines.has(x.line) && (!fs.existsSync(x.f) || fs.statSync(x.f).size === 0)).length;
    const willGenerate = missingNow + forceLines.size;
    if (fs.existsSync(finalMp3) && missingNow > 0 && !process.argv.includes('--go')) {
      console.error(`\n⛔ STOPPED: "${ep.file}" is already finished, but ${missingNow} of ${ep.segs.length} saved clips are missing.`);
      console.error(`   Running now would re-record those ${missingNow} line(s) and use credits. Nothing was generated.`);
      console.error(`   If that's what you want, add --go to the command (or --fresh to re-record the whole episode).`);
      process.exit(1);
    }
    if (willGenerate > 0) console.log(`  → will generate ${willGenerate} line(s), keeping ${ep.segs.length - Math.min(willGenerate, ep.segs.length)} existing clip(s)`);
  }

  for (let i = 0; i < ep.segs.length; i++) {
    const seg = ep.segs[i];
    const voiceId = VOICES[seg.s];
    const fname = `${pad(i)}_${seg.s.toLowerCase()}.mp3`;
    const outPath = path.join(epDir, fname);
    files.push(outPath);

    const exists = fs.existsSync(outPath) && fs.statSync(outPath).size > 0;
    const h = hashOf(seg);
    const forced = forceLines.has(i + 1);
    const changed = manifest[fname] && manifest[fname] !== h; // text edited since this clip was made
    if (exists && !forced && !changed) {
      console.log(`  [line ${i + 1}] ${seg.s} — keeping existing clip`);
      continue;
    }
    if (exists) console.log(`  [line ${i + 1}] ${seg.s} — ${forced ? 'forced' : 'text changed'}, regenerating`);

    console.log(`  [line ${i + 1}] ${seg.s}: ${seg.t.slice(0, 60)}${seg.t.length > 60 ? '...' : ''}`);
    try {
      const mode = await generateAudio(seg.t, voiceId, outPath);
      if (mode === 'fallback') usedFallback++;
      manifest[fname] = h;
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 1));
    } catch (e) {
      console.error(`    ✗ FAILED: ${e.message.slice(0, 200)}`);
    }
    await sleep(400);
  }

  const missing = files.filter(f => !fs.existsSync(f) || fs.statSync(f).size === 0);
  if (missing.length) {
    console.warn(`  ⚠ ${missing.length} segment(s) failed in "${ep.file}". Re-run the script to retry just those.`);
  }
  if (usedFallback) {
    console.warn(`  ⚠ ${usedFallback} segment(s) in "${ep.file}" used the ${FALLBACK_MODEL} fallback.`);
  }

  const outPath = path.join(OUT_DIR, `${ep.file}.mp3`);

  if (ffmpegAvailable) {
    const listPath = path.join(epDir, '_concat_list.txt');
    const lines = [];
    for (const f of files) {
      if (!fs.existsSync(f)) continue;
      lines.push(`file '${f.replace(/'/g, "'\\''")}'`);
      lines.push(`file '${silenceShort.replace(/'/g, "'\\''")}'`);
    }
    fs.writeFileSync(listPath, lines.join('\n'));
    execSync(`ffmpeg -y -f concat -safe 0 -i "${listPath}" -c:a libmp3lame -q:a 2 "${outPath}"`, { stdio: 'ignore' });
    console.log(`  ✅ Saved: ${outPath}`);
  } else {
    const out = fs.createWriteStream(outPath);
    for (const f of files) {
      if (!fs.existsSync(f)) continue;
      out.write(fs.readFileSync(f));
    }
    out.end();
    console.log(`  ✅ Saved (raw concat, no gaps — install ffmpeg for pauses): ${outPath}`);
  }
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(TMP_ROOT, { recursive: true });

  // Usage: <n> rebuild episode n, regenerating only missing clips or lines whose text changed
  //        <n>:2,5,last  also force-regenerate those line numbers (1 = first line, Amelia's title)
  //        --fresh  wipe the episode's clips first and re-record everything
  const args = process.argv.slice(2);
  const fresh = args.includes('--fresh');
  const forceMap = new Map();
  for (const tok of args.filter(t => t !== '--fresh')) {
    const [numStr, linesStr] = tok.split(':');
    const n = Number(numStr);
    if (!Number.isInteger(n) || n < 1) continue;
    const set = forceMap.get(n) || new Set();
    const ep = EPISODES.find(e => e.num === n);
    if (linesStr && ep) {
      for (const part of linesStr.split(',')) {
        if (part === 'last') set.add(ep.segs.length);
        else if (/^-\d+$/.test(part)) set.add(ep.segs.length + 1 + Number(part)); // -1 = last, -2 = second to last
        else if (/^\d+$/.test(part)) set.add(Number(part));
      }
    }
    forceMap.set(n, set);
  }
  const requested = [...forceMap.keys()];
  const toRun = requested.length ? EPISODES.filter(e => requested.includes(e.num)) : EPISODES;

  if (requested.length) {
    console.log(`${fresh ? 'Re-recording from scratch' : 'Rebuilding'} episode(s): ${toRun.map(e => e.num).join(', ')}\n`);
    if (fresh) {
      for (const ep of toRun) {
        const epDir = path.join(TMP_ROOT, slugifyFolder(ep.file));
        if (fs.existsSync(epDir)) fs.rmSync(epDir, { recursive: true, force: true });
        const outPath = path.join(OUT_DIR, `${ep.file}.mp3`);
        if (fs.existsSync(outPath)) fs.rmSync(outPath, { force: true });
      }
    }
  }

  const ffmpegAvailable = hasFfmpeg();
  let silenceShort;
  if (ffmpegAvailable) {
    silenceShort = path.join(TMP_ROOT, '_silence_short.mp3');
    if (!fs.existsSync(silenceShort)) {
      execSync(`ffmpeg -y -f lavfi -i anullsrc=r=44100:cl=mono -t 0.35 -q:a 9 "${silenceShort}"`, { stdio: 'ignore' });
    }
  } else {
    console.warn('⚠ ffmpeg not found — files will be joined with no gaps between lines. Install ffmpeg for natural pacing.\n');
  }

  console.log(`The Business Brief — Exam Walkthrough Business Studies Paper 1 Nov 2025 (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

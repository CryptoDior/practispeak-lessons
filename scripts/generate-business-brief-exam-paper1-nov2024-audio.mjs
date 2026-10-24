/**
 * The Business Brief — Exam Walkthrough: Business Studies Paper 1, November 2024 — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-business-brief-exam-paper1-nov2024-audio.mjs 1 2 3 4 5
 *
 * Five output MP3s (each opens with Amelia announcing the title):
 *   1. Section A                              — Intro + Parts 1-3
 *   2. Question 2 - Business Environments     — Parts 4-8
 *   3. Question 3 - Business Operations       — Parts 9-12
 *   4. Question 4 - Miscellaneous Topics      — Parts 13-16
 *   5. Section C - Essays and Wrap-Up         — Parts 17-18 + Outro
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
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_1 to .env.local and run with: node --env-file=.env.local scripts/generate-business-brief-exam-paper1-nov2024-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'The-Business-Brief-Exam-Walkthrough-Paper-1-Nov-2024');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'business-brief-exam-paper1-nov2024');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'BS Paper 1 Nov 2024 - Part 1 - Section A',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 1, November 2024. Part 1: Section A` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to THE BUSINESS BRIEF. We've done both papers from November 2025. Today we go back a year: the National Senior Certificate Business Studies Paper 1, November 2024.` },
    { s: 'MICHAEL', t: `Paper 1 again — Business Environments and Business Operations. So a lot of this should feel familiar.` },
    { s: 'TYLA', t: `It should. Examiners test the same topics every year, often with a small twist. So today is a real test of whether the lessons from the last two episodes stuck. Same rules: I read each question with its marks, you answer, and I mark you against the official DBE memo. And our narrator reads every scenario and essay introduction in full.` },
    { s: 'MICHAEL', t: `And the format's the same — one hundred and fifty marks, two hours. Section A compulsory, thirty marks. Section B, any two of three questions, eighty marks. Section C, one essay, forty marks.` },
    { s: 'TYLA', t: `[impressed] You've got it. Pause after each question and try it yourself first. Let's go.` },
    { s: 'TYLA', t: `Question 1.1 — five multiple-choice questions, two marks each. Question 1.1.1: "This Act prevents discrimination on the grounds of race, gender and disability in the workplace." A, the Consumer Protection Act. B, the Employment Equity Act. C, the Basic Conditions of Employment Act. D, the Labour Relations Act.` },
    { s: 'MICHAEL', t: `The Employment Equity Act. B.` },
    { s: 'TYLA', t: `Correct, B. Question 1.1.2: "Niemand Traders is experiencing a high employee turnover. This is classified as a/an ... in the SWOT analysis." A, weakness. B, threat. C, opportunity. D, strength.` },
    { s: 'MICHAEL', t: `In the 2025 paper, crime outside the business was a threat. But employees leaving is happening inside the business — the business can do something about it. So it's a weakness. A.` },
    { s: 'TYLA', t: `[delighted] Correct, A — and that's exactly the test: inside and controllable is a weakness; outside and uncontrollable is a threat. Question 1.1.3: "Mabasa Enterprise has ... control over suppliers who increase the prices of their products." A, full. B, no. C, limited. D, complete.` },
    { s: 'MICHAEL', t: `Suppliers are in the market environment... and the business can't control them. B, no control.` },
    { s: 'TYLA', t: `[encouragingly] Can't the business influence suppliers at all? Negotiate, switch to another supplier?` },
    { s: 'MICHAEL', t: `[hesitantly] It can... a bit. So it's not no control — the market environment is where the business has limited control. C.` },
    { s: 'TYLA', t: `Correct — C. Remember the three environments: the micro environment, inside the business, has full control; the market environment — suppliers, customers, competitors — has limited control; and the macro environment has no control. Question 1.1.4: "The role of the interviewee during an interview is to..." A, make the interviewer feel at ease. B, explain the purpose of the interview to the panel. C, prepare responses for possible questions. D, ask clarity-seeking questions about the position.` },
    { s: 'MICHAEL', t: `[laughs] In the 2025 paper this was the interviewer, and the trap was asking clarity-seeking questions — that's the interviewee's job. So this time it's... D?` },
    { s: 'TYLA', t: `Why not C? Preparing is something the interviewee does.` },
    { s: 'MICHAEL', t: `Because the question says during the interview. You prepare your answers before the interview. So D.` },
    { s: 'TYLA', t: `[impressed] Correct, D. A and B are the interviewer's job, and C happens before. Two traps in one question, and you avoided both. Question 1.1.5: "Businesses utilise machinery and equipment optimally in the ... function." A, purchasing. B, production. C, marketing. D, administration.` },
    { s: 'MICHAEL', t: `Machinery and equipment — production. B.` },
    { s: 'TYLA', t: `Correct, B. Ten marks.` },
    { s: 'TYLA', t: `Question 1.2 — complete each statement using the list on screen, two marks each. 1.2.1: "The ... has the right to embark on a legal strike as a remedy for grievances."` },
    { s: 'MICHAEL', t: `The employee. Employers have lockouts; employees strike.` },
    { s: 'TYLA', t: `Correct. 1.2.2: "Sizwe Bakery applied the ... integration strategy when they bought a wheat farm."` },
    { s: 'MICHAEL', t: `A bakery buying a farm... it's moving forward, growing the business. Forward vertical.` },
    { s: 'TYLA', t: `[encouragingly] Picture the chain from raw material to customer. Where is the wheat farm compared with the bakery?` },
    { s: 'MICHAEL', t: `The farm supplies the wheat... so it comes before the bakery in the chain. Buying your supplier is going backwards. Backward vertical.` },
    { s: 'TYLA', t: `Correct — backward vertical. Buying a supplier is backward; buying a distributor or retailer that sells your products is forward. And remember from last time: buying a competitor at the same level is horizontal. 1.2.3: "Fazzel Hairdressing Salon operates in the ... sector as they specialise in the selling of hair products."` },
    { s: 'MICHAEL', t: `Selling — that's trade and services. Tertiary. Not secondary, because they're not manufacturing anything.` },
    { s: 'TYLA', t: `Correct — tertiary. 1.2.4: "The employee's qualifications and skills are matched with the requirements of the job during the ... procedure."` },
    { s: 'MICHAEL', t: `[confidently] This one I know. In the 2025 paper, background checks on applicants was selection. But here it's already the employee, and they're matching skills to the job — that's placement.` },
    { s: 'TYLA', t: `[delighted] Correct — placement. The word "employee" tells you the appointment has already happened. 1.2.5: "Monwa Plastics continuously revise their processes to improve the quality of their products. This is known as the ... step in the PDCA model."` },
    { s: 'MICHAEL', t: `Improving quality means planning better processes... plan.` },
    { s: 'TYLA', t: `[encouragingly] Are they planning something new, or revising processes they already run?` },
    { s: 'MICHAEL', t: `Revising what's already running... after seeing how it went. So that's the last step — act.` },
    { s: 'TYLA', t: `Correct — act. Plan comes first, before anything is done. Check is monitoring whether the processes work. Act is taking action to improve them — continuously revising. Ten marks.` },
    { s: 'TYLA', t: `Question 1.3 — match each term with a description from Column B, two marks each. Pairs again. 1.3.1: Learnership.` },
    { s: 'MICHAEL', t: `Two training descriptions — E, practical training that leads to a recognised qualification, and H, training for ongoing professional development. A learnership ends in a qualification. E.` },
    { s: 'TYLA', t: `Correct, E. 1.3.2: The Compensation for Occupational Injuries and Diseases Amendment Act.` },
    { s: 'MICHAEL', t: `D — protection for employees who become disabled because of a workplace accident. G, unfair dismissal, is the LRA.` },
    { s: 'TYLA', t: `Correct, D. 1.3.3: Recruitment.` },
    { s: 'MICHAEL', t: `A — the process of finding potential candidates for available vacancies. F, determining a candidate's suitability, is selection.` },
    { s: 'TYLA', t: `[impressed] Correct, A — and you named the partner without being asked. 1.3.4: Quality control.` },
    { s: 'MICHAEL', t: `J — ensures that finished products meet the required standards. "Finished" is the key word for control.` },
    { s: 'TYLA', t: `Correct, J. C — features that satisfy a specific need — describes quality itself. And 1.3.5: Adequate financing and capacity.` },
    { s: 'MICHAEL', t: `"Can afford" again! I — large businesses can afford to put systems in place to prevent defects.` },
    { s: 'TYLA', t: `[laughs] Correct, I. B — poor communication preventing effective training in large businesses — is about training and communication, not financing. That's Section A — thirty marks.` },
  ],
},

{
  num: 2,
  file: 'BS Paper 1 Nov 2024 - Part 2 - Question 2 - Business Environments',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 1, November 2024. Part 2: Question 2, Business Environments` },
    { s: 'TYLA', t: `Section B. Question 2 is Business Environments, forty marks. Question 2.1: "Name any TWO types of diversification strategies." Two marks.` },
    { s: 'MICHAEL', t: `[playfully] This is my revenge question. Concentric diversification and conglomerate diversification.` },
    { s: 'TYLA', t: `[laughs] Two marks. The third is horizontal diversification. In our Paper 1 episode you put concentric diversification under intensive strategies — now it's in the right box. Question 2.2: "Outline the advantages of intensive strategies." Six marks.` },
    { s: 'MICHAEL', t: `And intensive means market penetration, market development and product development. Advantages: sales and profitability may increase because of advertising campaigns. Businesses can gain customer loyalty through effective promotions. And an increased market share reduces the business's vulnerability to its competitors' actions.` },
    { s: 'TYLA', t: `Six marks — three points, two marks each. Also accepted: more regular sales to existing customers; better service delivery that increases sales; eliminating competitors and dominating market prices; lower prices that make customers buy more; more control over prices; and focusing on well-researched products that satisfy customer needs.` },
    { s: 'TYLA', t: `Question 2.3. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Mondo Manufacturers. Mondo Manufacturers specialise in the production of winter blankets. MM disposes of their chemical waste from the manufacturing process into the local river in order to save costs.` },
    { s: 'TYLA', t: `2.3.1: "Name the PESTLE factor that is applicable to MM in the scenario above." Two marks.` },
    { s: 'MICHAEL', t: `Dumping chemicals into a river is against the law... so legal.` },
    { s: 'TYLA', t: `[encouragingly] What is actually being harmed in the scenario?` },
    { s: 'MICHAEL', t: `The river. The natural environment. So it's the environmental factor.` },
    { s: 'TYLA', t: `Correct — environmental, and that's the only answer the memo accepts. The law may be involved, but the challenge described is the damage to nature. 2.3.2: "Recommend ways in which MM can deal with the challenges posed by the PESTLE factor named in Question 2.3.1." Four marks.` },
    { s: 'MICHAEL', t: `MM should implement cost-effective measures to dispose of waste safely. And they should implement recycling measures to prevent pollution of the environment.` },
    { s: 'TYLA', t: `Four marks. Also accepted: clearly indicate chemicals and ingredients on labels so customers know the side effects and correct use; and practise environmental sustainability, like conserving natural resources. And here's a kind note in the memo: even if you named the wrong factor in 2.3.1, you can still earn these four marks if your recommendations are relevant.` },
    { s: 'TYLA', t: `Question 2.4: "Discuss any TWO types of defensive strategies." Six marks.` },
    { s: 'MICHAEL', t: `Same structure as the intensive strategies in the 2025 paper — two for the name, one for the discussion. Divestiture: the business sells off assets or divisions that are no longer profitable. Retrenchment: the business terminates employment contracts for operational reasons, to reduce costs.` },
    { s: 'TYLA', t: `[delighted] Six out of six. The third is liquidation — selling all the assets and ending the business to pay creditors. Other divestiture points: selling product lines with slow growth; reducing the number of shareholders by selling ownership; paying off debts by selling unproductive assets; and withdrawing an investment in another business. For retrenchment: closing departments or cutting product lines may make workers redundant.` },
    { s: 'TYLA', t: `Question 2.5. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Lass Suppliers. Lass Suppliers implemented the Broad-Based Black Economic Empowerment Act, 2003. They promoted Sandile to a senior executive position to serve on their board of directors.` },
    { s: 'TYLA', t: `2.5.1: "Name the pillar of the Broad-Based Black Economic Empowerment Act applied by LS in the scenario above." Two marks.` },
    { s: 'MICHAEL', t: `Sandile's on the board of directors... so he's an owner. Ownership.` },
    { s: 'TYLA', t: `[patiently] Does sitting on the board make him an owner? Did he buy shares?` },
    { s: 'MICHAEL', t: `No — he was promoted to a senior executive position. He's managing the business, not owning it. So it's management control.` },
    { s: 'TYLA', t: `Correct — management control. Ownership means black people holding shares or partnerships; management control means black people in senior positions and on the board. 2.5.2: "Describe the purpose of the Broad-Based Black Economic Empowerment Act." Four marks.` },
    { s: 'MICHAEL', t: `The BBBEE Act spreads wealth more broadly across all population groups. And it increases the number of black people that manage and control South African businesses.` },
    { s: 'TYLA', t: `Four marks. Also accepted: it gives government a platform for an equitable spread of wealth; it allows for Codes of Good Practice, and empowers the Minister to issue them and publish transformation charters; it establishes the BEE Advisory Council; it builds capacity in the economy through the BBBEE pillars; and it targets inequality in the South African economy.` },
    { s: 'TYLA', t: `Question 2.6: "Explain ways in which businesses can comply with the Consumer Protection Act." Four marks.` },
    { s: 'MICHAEL', t: `[excitedly] Now the cooling-off period is the right answer! All agreements must provide for a five- day cooling-off period. And businesses must disclose the prices of all products on sale.` },
    { s: 'TYLA', t: `[laughs] Four marks — and this time it's in the right Act. Also accepted: train staff on the CPA; make sure goods are standardised; follow the rules for promotional competitions; display the required information on labels and packaging; show the business name on all documents; bundle goods in ways that benefit consumers; and use suggestion boxes to handle complaints. Question 2.7: "Discuss the impact of the Labour Relations Act on businesses." Six marks.` },
    { s: 'MICHAEL', t: `"Impact" — positives and or negatives. Positive: the LRA promotes a healthy relationship between employers and employees. It gives employers guidelines on fair disciplinary procedures. Negative: employers may not dismiss employees at will, because procedures have to be followed.` },
    { s: 'TYLA', t: `Six marks. Other positives: it protects businesses' rights in labour matters; disputes are settled faster and more cheaply; workplace forums add value; employers are protected during lawful lockouts; it provides for collective bargaining and dispute structures like the CCMA; guidelines on fair dismissal; and compensation from the Labour Court after unprotected strikes. Other negatives: lower global competitiveness; lost productivity when employees do union work during work time; higher labour costs from legal strikes; no court interdict to stop a legal strike; having to disclose information to unions; employees abusing the right to strike; lost production during strikes; unions that don't follow their members' mandate; the feeling that employees have too much power; and time-consuming dispute processes.` },
    { s: 'TYLA', t: `Question 2.8: "Advise businesses on the strategic management process." Four marks.` },
    { s: 'MICHAEL', t: `We did this in the 2025 paper too. Have a clear vision and mission statement in place. Conduct environmental scanning using tools like SWOT, PESTLE or Porter's Five Forces. Formulate alternative strategies. Implement the chosen strategy. And evaluate and monitor it to take corrective action.` },
    { s: 'TYLA', t: `[warmly] Four marks — with plenty to spare. And because the memo gives two marks per step, two clear steps already reach the maximum. The memo's two versions both follow the same order, and the action plan sits between formulating and implementing. That's Question 2 — forty marks.` },
  ],
},

{
  num: 3,
  file: 'BS Paper 1 Nov 2024 - Part 3 - Question 3 - Business Operations',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 1, November 2024. Part 3: Question 3, Business Operations` },
    { s: 'TYLA', t: `Question 3 is Business Operations, forty marks. Question 3.1: "State any FOUR sources of internal recruitment." Four marks.` },
    { s: 'MICHAEL', t: `Internal emails, word of mouth, the business newsletter and the notice board.` },
    { s: 'TYLA', t: `Four out of four, one mark each. Also accepted: internal or management referrals; internal bulletins; recommendations from current employees; and head-hunting within the business's own database. Question 3.2: "Outline the role of the interviewer before the interview." Four marks.` },
    { s: 'MICHAEL', t: `[laughs] In the 2025 essay I said "put the candidate at ease" for this, and that's during. So: book and prepare the venue. And develop a core set of questions based on the skills and knowledge required.` },
    { s: 'TYLA', t: `[delighted] Four marks — and no "at ease" in sight. Also accepted: inform shortlisted candidates of the date and place; hold all interviews on the same date if possible; notify the panel members; check each candidate's CV; and plan the programme and the time for each candidate.` },
    { s: 'TYLA', t: `Question 3.3. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Tobbi Logistics. Tobbi Logistics drafted an employment contract for Thabo, a newly appointed transport supervisor. Management explained the terms and conditions of the employment contract to him. Thabo was given an opportunity to read the contract before signing it. TL also highlighted the reasons why an employment contract could be terminated.` },
    { s: 'TYLA', t: `3.3.1: "Quote TWO legal requirements of an employment contract from the scenario above." Two marks.` },
    { s: 'MICHAEL', t: `"Tobbi Logistics drafted an employment contract for Thabo, a newly appointed transport supervisor." And—` },
    { s: 'TYLA', t: `[encouragingly] Is drafting a contract a requirement about how the contract must be handled?` },
    { s: 'MICHAEL', t: `[groans] No — that just says a contract exists. The requirements are about how it's done. "Management explained the terms and conditions of the employment contract to him." And "Thabo was given an opportunity to read the contract before signing it."` },
    { s: 'TYLA', t: `Two marks. And the last sentence, about termination, is there to lead into the next question — it's not a legal requirement either. 3.3.2: "Advise businesses on the reasons for the termination of an employment contract." Four marks.` },
    { s: 'MICHAEL', t: `Same as the 2025 paper. The employer may dismiss an employee for a valid reason, like misconduct. And the employee may reach retirement age.` },
    { s: 'TYLA', t: `Four marks. Also accepted: redundancy or restructuring; retrenchment due to insolvency; voluntary resignation; incapacity through illness or injury; mutual agreement; and the contract expiring. Question 3.4: "Discuss the implications of the Employment Equity Act on the human resources function." Six marks.` },
    { s: 'MICHAEL', t: `The HR manager must offer equal pay for work of equal value. They must compile employment equity plans that show how they'll implement affirmative action. And they must report to the Department of Labour on the progress of the equity plan.` },
    { s: 'TYLA', t: `Six marks. Also accepted: affirmative action that promotes diversity; fair treatment and equal opportunities; training designated groups; a clearly defined appointment process; displaying a summary of the Act; assigning a manager to implement and monitor the plan; fair medical and psychological testing; making the workplace reflect the country's demographics; and restructuring policies to accommodate designated groups.` },
    { s: 'TYLA', t: `Question 3.5: "Outline the benefits of a good quality management system." Four marks.` },
    { s: 'MICHAEL', t: `Time and resources are used efficiently. And the business has a competitive advantage over its competitors.` },
    { s: 'TYLA', t: `Four marks. Also accepted: effective customer service and satisfaction; higher productivity; constant improvement of products; achieving goals; better employee skills through training; healthy working relationships; more market share and profitability; and a better image with fewer defects and returns.` },
    { s: 'TYLA', t: `Question 3.6. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Moosa Limited. Moosa Limited sells storage containers to small businesses. ML continuously updates their bookkeeping records to ensure that their tax payment to the South African Revenue Services is timeous and accurate.` },
    { s: 'TYLA', t: `3.6.1: "Identify the business function that is applicable to ML in the scenario above." Two marks.` },
    { s: 'MICHAEL', t: `Updating records... that's paperwork. The administration function.` },
    { s: 'TYLA', t: `[encouragingly] What are the records for? What's being paid?` },
    { s: 'MICHAEL', t: `Tax, to SARS. Bookkeeping and tax payments are about money... so it's the financial function.` },
    { s: 'TYLA', t: `Correct — financial function. Administration handles information and records in general, but bookkeeping and tax are money matters. 3.6.2: "Explain other quality indicators of the business function identified in Question 3.6.1." Four marks.` },
    { s: 'MICHAEL', t: `"Other" — so not the bookkeeping. The financial function should draw up budgets to make sure money is used properly. And it should implement financial control systems to prevent fraud.` },
    { s: 'TYLA', t: `Four marks. Also accepted: obtain capital from the most suitable sources; negotiate better interest rates; analyse strategies to increase profit; invest surplus funds; credit and debt-collection policies to manage cash flow; accurate, timely financial statements; correct analysis of financial information; strategies to stay profitable; and avoiding over- or under-capitalisation. The memo also gives you these marks if your 3.6.1 answer was wrong, as long as the indicators are financial.` },
    { s: 'TYLA', t: `Question 3.7: "Discuss the impact of total client, or customer, satisfaction as a total quality management element on large businesses." Six marks.` },
    { s: 'MICHAEL', t: `Positive: large businesses use market research and customer surveys to measure customer satisfaction. It may lead to higher customer loyalty, so businesses may be able to charge higher prices. Negative: not all employees may be committed to total customer satisfaction.` },
    { s: 'TYLA', t: `Six marks. Other positives: promoting a positive business image; reaching total satisfaction through sound practices involving all stakeholders; aligning cross-functional teams with customer expectations; teams understanding their core competencies; access to the global market; and more competitiveness and profit. Other negatives: complacent businesses may have limited long-term growth; employees who rarely see customers may not know their needs; and monopolies don't necessarily have to please customers. Question 3.8: "Recommend ways in which total quality management can reduce the cost of quality." Four marks.` },
    { s: 'MICHAEL', t: `[playfully] Bilon Manufacturers taught me two of these. Schedule activities to eliminate duplication of tasks. And share responsibilities for quality output between management and workers.` },
    { s: 'TYLA', t: `[laughs] Four marks — straight from the 2025 paper's scenario. Others: quality circles; training employees at every level; work systems that empower employees; working with suppliers on better raw materials; communicating about quality problems so everyone learns; cutting expensive but ineffective inspections; and proactive maintenance to prevent breakdowns. That's Question 3 — forty marks.` },
  ],
},

{
  num: 4,
  file: 'BS Paper 1 Nov 2024 - Part 4 - Question 4 - Miscellaneous Topics',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 1, November 2024. Part 4: Question 4, Miscellaneous Topics` },
    { s: 'TYLA', t: `Question 4 — Miscellaneous Topics, forty marks. Question 4.1: "Name any FOUR provisions of the Basic Conditions of Employment Act." Four marks.` },
    { s: 'MICHAEL', t: `Easy — we did this in the 2025 paper. Annual leave, sick leave, maternity leave and family responsibility leave.` },
    { s: 'TYLA', t: `[seriously] Careful. The 2025 paper asked for four types of leave. What does this question ask for?` },
    { s: 'MICHAEL', t: `Four provisions. [groans] And all my answers are the same provision — leave. So I'd get one mark, and the other three would be repeats.` },
    { s: 'TYLA', t: `Exactly — one mark out of four. Try again with four different provisions.` },
    { s: 'MICHAEL', t: `Working time, like ordinary hours and overtime. Leave. Particulars of employment and remuneration. And the prohibition of child labour and forced labour.` },
    { s: 'TYLA', t: `Four marks. The fifth provision is termination of employment. That's the danger of recognising a question: it looks the same, but one word has changed. Question 4.2: "Outline the rights of consumers in terms of the National Credit Act." Six marks.` },
    { s: 'MICHAEL', t: `Consumers have the right to apply for credit and be free from discrimination. They have the right to obtain reasons for credit being refused. And the right to receive information in plain and understandable language.` },
    { s: 'TYLA', t: `Six marks. Also accepted: a pre-agreement quote valid for seven days; fair and responsible marketing; returning goods to settle the debt; applying for debt review; receiving the required documents and statements; accessing and challenging credit records; protecting personal information; not being liable after reporting a lost or stolen card; and refusing a credit limit increase.` },
    { s: 'TYLA', t: `Question 4.3. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Shoe Boutique. Shoe Boutique implemented a strategy aimed at improving their customer service due to a decrease in sales. The management of SB evaluated if their strategy had been effective. SB examined the underlying basis of their strategy throughout the implementation process. They also analysed the impact of the implemented strategy on their internal and external environments.` },
    { s: 'TYLA', t: `4.3.1: "Quote TWO steps in strategy evaluation implemented by SB from the scenario above." Two marks.` },
    { s: 'MICHAEL', t: `"The management of SB evaluated if their strategy had been effective." And—` },
    { s: 'TYLA', t: `[encouragingly] Is "evaluated if it had been effective" a specific step in strategy evaluation, or does it just describe evaluation in general?` },
    { s: 'MICHAEL', t: `It's general — it just says they evaluated. The steps are the specific actions. "SB examined the underlying basis of their strategy throughout the implementation process." And "They also analysed the impact of the implemented strategy on their internal and external environments."` },
    { s: 'TYLA', t: `Two marks. Those two are on the memo's list of steps. 4.3.2: "Explain other steps in strategy evaluation." Four marks.` },
    { s: 'MICHAEL', t: `Compare the expected performance with the actual performance. And take corrective action so that deviations can be corrected.` },
    { s: 'TYLA', t: `Four marks — and you didn't repeat the two from the scenario, which would earn nothing. Also accepted: look forward and backwards into the implementation process; determine and analyse the reasons for deviations; set dates for control and follow-up; draw up a table of advantages and disadvantages; and decide on the desired outcome. Question 4.4: "Advise businesses on how they could apply the power of suppliers as a force of Porter's Five Forces model to analyse their position in the market environment." Four marks.` },
    { s: 'MICHAEL', t: `Assess the power of suppliers in influencing prices. And the fewer the suppliers, the more powerful they may be, because the business has limited choice.` },
    { s: 'TYLA', t: `Four marks. Also accepted: suppliers of high-quality, unique or scarce products may have power over the business; the more powerful the suppliers, the less control the business has; and identifying what kind of power suppliers have — quality, reliability, prompt delivery.` },
    { s: 'TYLA', t: `Business Operations. Question 4.5: "State any FOUR aspects that should be included in an employment contract." Four marks.` },
    { s: 'MICHAEL', t: `And these have to be four different aspects, not four kinds of the same thing. The personal details of the employee. The job title. Remuneration. And the signatures of both the employer and employee.` },
    { s: 'TYLA', t: `[impressed] Four marks — and you checked yourself before I could. The memo has a long list: business details; job description; job specification; start date; place of work; working hours; benefits; leave; deductions; duration of the contract; probation period; documents that form part of the contract, such as the code of conduct; and the disciplinary policy.` },
    { s: 'TYLA', t: `Question 4.6. Read the scenario below and answer the question that follows.` },
    { s: 'NARRATOR', t: `Mphemba Construction. Mphemba Construction compiled a job analysis for the vacant position of a project manager. MC indicated that applicants must have a diploma in construction. The successful candidate will compile progress reports on assigned projects.` },
    { s: 'TYLA', t: `"Identify TWO components of a job analysis used by MC. Motivate your answer by quoting from the scenario above." Use the table on screen as a guide. Six marks.` },
    { s: 'MICHAEL', t: `[confidently] Job description is about the job, job specification is about the person. A diploma is what the person needs — job specification: "MC indicated that applicants must have a diploma in construction." Compiling progress reports is a duty of the job — job description: "The successful candidate will compile progress reports on assigned projects."` },
    { s: 'TYLA', t: `[delighted] Six out of six — two for each component, one for each quote. In the 2025 paper you mixed these two up in Section A. Now you've used the difference to earn six marks.` },
    { s: 'TYLA', t: `Question 4.7: "Explain the role of quality circles as part of continuous improvement to processes and systems." Six marks.` },
    { s: 'MICHAEL', t: `In the 2025 paper this was "advise," four marks. Here it's "explain," six marks, so I need a reason with each point. Quality circles investigate problems and suggest solutions to management. They ensure that there's no duplication of tasks in the workplace. And they increase employees' morale, which boosts team spirit in achieving goals.` },
    { s: 'TYLA', t: `[impressed] Six marks — and you adjusted to the command word and the mark allocation. The rest of the memo list is the same as in the 2025 paper: solving quality problems and implementing improvements; suggesting process improvements; regular quality reviews; monitoring strategies; developing the organisation; reducing waste; increasing demand; harmony; healthy relationships; loyalty; communication; and involvement in decision-making. Question 4.8: "Advise businesses on the quality indicators of the general management function." Four marks.` },
    { s: 'MICHAEL', t: `General management should develop, implement and monitor effective strategic plans. And it should communicate the shared vision, mission and values effectively.` },
    { s: 'TYLA', t: `Four marks. Also accepted: efficient allocation of resources; standards and norms for control; keeping up with changes in the environment; setting direction and priorities; setting an example of ethical, productive behaviour; staying proactive to improve competitive advantage; and making sure departments meet their targets. That's Question 4, and all of Section B.` },
  ],
},

{
  num: 5,
  file: 'BS Paper 1 Nov 2024 - Part 5 - Section C - Essays and Wrap-Up',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 1, November 2024. Part 5: Section C, the Essays, and Wrap-Up` },
    { s: 'TYLA', t: `Section C. One essay, forty marks — thirty-two for facts and eight for LASO insight. You know the rules by now: headings for INTRODUCTION, every sub-question and CONCLUSION; full sentences; relevant facts only; and a real, recent example in at least two sub-questions.` },
    { s: 'TYLA', t: `Question 5: Business Environments — Legislation.` },
    { s: 'NARRATOR', t: `The basic aim of the Skills Development Act, 1998, is to expand on the knowledge and competencies of the labour force. SETAs were established to facilitate the implementation of the SDA. Businesses are expected to oblige with this Act and be fully conversant with its requirements.` },
    { s: 'TYLA', t: `"Write an essay on the Skills Development Act in which you include the following aspects. Outline the role of SETAs in supporting the Skills Development Act. Explain the purpose of the Skills Development Act. Discuss the impact of the Skills Development Act on businesses. Recommend ways in which businesses can comply with this Act." Forty marks. Introduction?` },
    { s: 'MICHAEL', t: `"Introduction. The Skills Development Act was introduced to redress the imbalances of the past. Businesses that comply with the SDA create a good public image and address skills shortages in the South African workplace."` },
    { s: 'TYLA', t: `Two marks. The role of SETAs — twelve marks, so six roles at two marks each.` },
    { s: 'MICHAEL', t: `"Role of SETAs. SETAs promote and establish learnerships. They collect levies and pay out grants as required. They register learnership agreements. They approve workplace skills plans and annual training reports. They monitor the training done by service providers. And they identify suitable workplaces for practical work experience."` },
    { s: 'TYLA', t: `[delighted] Twelve. The memo also accepts: reporting to the Director-General; accrediting skills development facilitators; allocating grants to employers and training providers; overseeing training in their sector; developing sector skills plans in line with the National Skills Development Strategy; drawing up sector skills development plans; providing training material for facilitators; and paying grants to businesses that comply. Purpose — ten marks.` },
    { s: 'MICHAEL', t: `"Purpose of the SDA. The SDA develops the skills of people in South Africa to improve productivity. It invests in the education and training of the workforce. It improves the chances of getting a job for previously disadvantaged people. It encourages workers to participate in learning programmes. And it redresses the imbalances of the past through education and training."` },
    { s: 'TYLA', t: `Ten. Also accepted: encouraging businesses to improve their workers' skills; and systematically implementing strategies at national, sector and workplace level. Impact on businesses — twelve marks.` },
    { s: 'MICHAEL', t: `"Impact of the SDA on businesses. Positively, it increases the number of skilled employees in areas where skills are scarce. Businesses could become more competitive globally. Businesses may claim back some training costs as a refund from the relevant SETA. And quality improves, because the business employs more skilled workers. Negatively, the Skills Development Levy could be an extra burden for businesses that are struggling financially. And the time and money spent on training is wasted if employees leave the business."` },
    { s: 'TYLA', t: `Twelve. Other positives: higher productivity; ongoing learning; more investment in education and its return; better employment opportunities; self-employment and entrepreneurship; addressing discrimination through training; and using the workplace as an active learning environment. Other negatives: lots of paperwork; control by departments that don't prioritise training; courses without matching unit standards; programmes that don't meet training needs; providers that aren't SAQA accredited; businesses that don't support it; difficult monitoring; learnerships during work hours that hurt productivity; the cost of someone to manage learnerships; and only payrolls over five hundred thousand rand a year being able to claim the levy. Ways to comply — twelve marks.` },
    { s: 'MICHAEL', t: `"Ways to comply with the SDA. Businesses should register with the relevant SETA. One percent of the employer's payroll must be paid to the UIF—"` },
    { s: 'TYLA', t: `[encouragingly] Where does that one percent go?` },
    { s: 'MICHAEL', t: `[hesitantly] Not the UIF... that's a different one percent. The Skills Development Levy goes to the SETA, through SARS. "One percent of the employer's payroll must be paid over to the SETA through SARS. Employers should submit a workplace skills plan and provide evidence that it was implemented. Businesses with more than fifty employees must appoint a skills development facilitator. They should assess employees' skills to find where development is needed. And they should encourage employees to take part in learnerships and training programmes."` },
    { s: 'TYLA', t: `Twelve — good save. Those two one-percents trip students up constantly. Also accepted: registering with SARS in the area their business is classified in; giving all employees the chance to improve their skills; and displaying a summary of the Act. Conclusion?` },
    { s: 'MICHAEL', t: `"Conclusion. The Skills Development Act plays an important role in making sure the South African workforce is skilled, and it encourages lifelong learning."` },
    { s: 'TYLA', t: `Two marks — full facts for the essay.` },
    { s: 'TYLA', t: `Question 6: Business Operations — the Human Resources Function.` },
    { s: 'NARRATOR', t: `Businesses that follow the correct selection procedures are able to identify suitable and qualified candidates for vacant positions. They also use different salary determination methods to ensure that their employees are remunerated correctly. Businesses offering fringe benefits and inducting new employees are more likely to have a productive workforce.` },
    { s: 'TYLA', t: `"Write an essay on the human resources function in which you include the following aspects. Outline the selection procedure as a human resources activity. Explain the TWO salary determination methods. Discuss the impact of fringe benefits on businesses. Advise businesses on the benefits of induction." Forty marks.` },
    { s: 'MICHAEL', t: `"Introduction. Businesses use different salary determination methods to pay their employees according to the work they do. Inducting new employees provides introductory training that allows a smooth transition into the new work environment."` },
    { s: 'TYLA', t: `Two marks. Selection procedure — twelve marks.` },
    { s: 'MICHAEL', t: `[laughs] In the 2025 essay I put shortlisting into recruitment. This time it's the right question. "Selection procedure. Determine fair assessment criteria on which selection will be based. Sort the received CVs according to the selection criteria. Screen the applications to find those that meet the minimum job requirements. Conduct reference checks to verify work experience and qualifications. Compile a shortlist of potential candidates. And invite the shortlisted candidates for an interview."` },
    { s: 'TYLA', t: `[delighted] Twelve. And notice — no advertising, because that's recruitment. Also accepted: applicants submit application forms, CVs and certified documents; preliminary interviews if there are many applicants; selection tests such as skills tests; a written offer to the chosen candidate; and informing unsuccessful applicants. The procedure can be in any order. Next — the TWO salary determination methods, twelve marks.` },
    { s: 'MICHAEL', t: `"Salary determination methods. The first is piecemeal. Workers are paid according to the number of items they produce, and they are not paid for the number of hours they work. The second is commission —"` },
    { s: 'TYLA', t: `[seriously] "The TWO methods." The question says there are exactly two. Which two does the curriculum teach?` },
    { s: 'MICHAEL', t: `Piecemeal and... time-related. Commission isn't one of the two. "The second is time-related. Workers are paid according to the amount of time they spend at work. Workers with the same experience and qualifications are paid on salary scales, regardless of how much work they do."` },
    { s: 'TYLA', t: `Twelve — two for each method, and up to four for each explanation. Only the first two methods are marked, so commission as your second would have cost you six marks. Also accepted: piecemeal is mostly used in factories, especially textiles and technology; time-related pay is used by many public and private sector businesses. Impact of fringe benefits — twelve marks.` },
    { s: 'MICHAEL', t: `"Impact of fringe benefits. Positively, attractive fringe benefits may increase employee retention and reduce staff turnover. They attract qualified, skilled employees. They increase employee satisfaction and loyalty, so employees may go the extra mile. And businesses save money because the benefits are tax deductible. Negatively, fringe benefits are additional costs that may cause cash-flow problems. And they can create conflict if they're allocated unfairly."` },
    { s: 'TYLA', t: `Twelve. Also accepted: higher productivity and profit; using benefits as leverage in salary negotiations; businesses without benefits failing to attract skilled workers; resentment from employees on smaller benefit plans; lower profits; higher administrative costs for tax records; workers who stay only for the benefits; paying advisers to design compliant plans; and costly lawsuits or fines from errors. Benefits of induction — ten marks.` },
    { s: 'MICHAEL', t: `"Benefits of induction. New employees settle in quickly and work effectively. They understand the rules and restrictions in the business. They establish relationships with colleagues at different levels. Induction reduces their anxiety and makes them feel at ease. And it reduces staff turnover, because new employees have been properly inducted."` },
    { s: 'TYLA', t: `Ten. Also accepted: a base for focused training; better performance and productivity; less need for ongoing training; knowing the organisational structure; exploring departments; understanding safety rules; knowing the layout of the building; understanding their roles; learning company policies; realistic expectations; feeling part of the team; and understanding ethical conduct and CSR. Conclusion?` },
    { s: 'MICHAEL', t: `"Conclusion. A well-designed induction programme helps new employees understand the requirements of their new job."` },
    { s: 'TYLA', t: `Two marks — and that's the whole paper.` },
    { s: 'MICHAEL', t: `[excitedly] Three papers! And this one felt... easy?` },
    { s: 'TYLA', t: `[laughs] Not easy — familiar. That's what practice does.` },
    { s: 'TYLA', t: `[warmly] Three papers down. Michael — how was that one?` },
    { s: 'MICHAEL', t: `Different. Half the traps were the same ones from the 2025 paper, so I saw them coming. The other half were the same topic with one word changed.` },
    { s: 'TYLA', t: `That's the lesson of this episode. Same tradition — top traps, in one go.` },
    { s: 'MICHAEL', t: `Section A. High staff turnover is a weakness — it's inside the business. The business has limited control over suppliers, not none — market environment. The interviewee asks clarity-seeking questions during the interview — preparing answers is before. A bakery buying a wheat farm is backward vertical — you're buying your supplier. Selling hair products is tertiary. Matching an employee's skills to the job is placement. Revising processes to improve them is act, not plan. A learnership leads to a recognised qualification. And quality control checks finished products.` },
    { s: 'TYLA', t: `Keep going — Section B.` },
    { s: 'MICHAEL', t: `Chemical waste in a river is environmental, not legal. Promoting someone to the board is management control, not ownership. The cooling-off period is the right answer for the CPA. Bookkeeping and tax are the financial function, not administration. "Drafted a contract" isn't a legal requirement — the requirements are explaining the terms and letting the employee read before signing. "Evaluated if it was effective" isn't a specific step. And four types of leave are one BCEA provision — read whether it says "types of leave" or "provisions."` },
    { s: 'TYLA', t: `And Section C?` },
    { s: 'MICHAEL', t: `The skills levy is one percent of payroll to the SETA, through SARS — not the UIF. The two salary determination methods are piecemeal and time-related — not commission. And selection starts with assessment criteria, not adverts.` },
    { s: 'TYLA', t: `[impressed] ...Brilliant. And everyone listening, notice how many of today's answers came straight from the 2025 episodes — the cooling-off period, Bilon's scenario, the interviewer before the interview, job description versus job specification. Practising past papers works because examiners reuse topics. But they change one word to see if you're reading or remembering.` },
    { s: 'MICHAEL', t: `[playfully] So — remember the content, but read the question.` },
    { s: 'TYLA', t: `[laughs] You took my line. Until next time... [whispers] same topic, new twist. [warmly] We'll catch you in the next episode.` },
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
      if (/quota_exceeded|credits remaining/i.test(e.message)) {
        console.error(`\n⛔ Out of ElevenLabs credits on this account — stopping now. Lines already recorded are kept.`);
        console.error(`   Re-run the same command (on an account with credits) to record only the remaining lines.`);
        process.exit(1);
      }
    }
    await sleep(400);
  }

  const missing = files.filter(f => !fs.existsSync(f) || fs.statSync(f).size === 0);
  if (missing.length) {
    // Don't build a half-finished episode: an incomplete MP3 would also trip the missing-clip guard next run.
    const partial = path.join(OUT_DIR, `${ep.file}.mp3`);
    if (fs.existsSync(partial)) fs.rmSync(partial, { force: true });
    console.warn(`  ⚠ ${missing.length} segment(s) failed in "${ep.file}" — episode NOT built. Re-run the same command to record just those lines.`);
    return;
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

  console.log(`The Business Brief — Exam Walkthrough Business Studies Paper 1 Nov 2024 (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

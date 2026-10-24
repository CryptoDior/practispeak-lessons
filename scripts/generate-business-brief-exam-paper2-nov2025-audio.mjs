/**
 * The Business Brief — Exam Walkthrough: Business Studies Paper 2, November 2025 — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-business-brief-exam-paper2-nov2025-audio.mjs 1 2 3 4 5
 *
 * Five output MP3s (each opens with Amelia announcing the title):
 *   1. Section A                          — Intro + Parts 1-3
 *   2. Question 2 - Business Ventures     — Parts 4-7
 *   3. Question 3 - Business Roles        — Parts 8-11
 *   4. Question 4 - Miscellaneous Topics  — Parts 12-15
 *   5. Section C - Essays and Wrap-Up     — Parts 16-17 + Outro
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
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_1 to .env.local and run with: node --env-file=.env.local scripts/generate-business-brief-exam-paper2-nov2025-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'The-Business-Brief-Exam-Walkthrough-Paper-2-Nov-2025');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'business-brief-exam-paper2-nov2025');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'BS Paper 2 Nov 2025 - Part 1 - Section A',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 2, November 2025. Part 1: Section A` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to THE BUSINESS BRIEF. Last time, we worked through Paper 1. Today, we finish the set: the National Senior Certificate Business Studies Paper 2, November 2025.` },
    { s: 'MICHAEL', t: `And I'm back in the exam chair. I survived Paper 1, so... how different can this be?` },
    { s: 'TYLA', t: `[laughs] Same format, different topics. Paper 1 was Business Environments and Business Operations. Paper 2 covers Business Ventures and Business Roles — investments, insurance, forms of ownership, presentations, leadership, teams, ethics, CSR, creative thinking and human rights. Same rules of the game: I read each question with its marks, you answer, and I mark you against the official DBE memo.` },
    { s: 'MICHAEL', t: `And the narrator reads the scenarios.` },
    { s: 'TYLA', t: `Every one of them, word for word, and they'll be on screen too. Pause after each question and try it yourself first. The layout is the same as Paper 1: one hundred and fifty marks in two hours. Section A is compulsory — thirty marks, about twenty minutes. Section B — answer any two of three forty-mark questions, about seventy minutes. Section C — write one of two essays, about thirty minutes.` },
    { s: 'MICHAEL', t: `And the rules — first two questions in Section B, first essay in Section C, first N facts, full sentences, correct numbering, no repeats.` },
    { s: 'TYLA', t: `[impressed] You remembered all of them. One new thing in this paper: Section A has a calculation, so you're allowed a non-programmable calculator. Let's go.` },
    { s: 'TYLA', t: `Question 1.1 — five multiple-choice questions, two marks each. Question 1.1.1: "Adriaan earned ... interest when he invested an amount of thirty thousand rand in a fixed deposit for three years, at twelve percent simple interest per annum, with Axis Bank." A, forty thousand eight hundred rand. B, forty-four thousand six hundred and ninety-one rand. C, ten thousand eight hundred rand. D, fourteen thousand six hundred and ninety-one rand.` },
    { s: 'MICHAEL', t: `Okay, working out loud. Twelve percent of thirty thousand is three thousand six hundred per year. Times three years is ten thousand eight hundred. Plus the thirty thousand he invested... forty thousand eight hundred. A.` },
    { s: 'TYLA', t: `[encouragingly] Your working is perfect. Now read the question one more time. Adriaan earned... what?` },
    { s: 'MICHAEL', t: `[groans] Earned interest. Not the total amount at the end. So it's just the interest — ten thousand eight hundred. C.` },
    { s: 'TYLA', t: `Correct — C. Option A is exactly what you'd get by adding the original investment back, and the examiner put it there on purpose. With simple interest, the interest is calculated on the original amount every year, so it's the same three thousand six hundred each year.` },
    { s: 'MICHAEL', t: `[whispers] Interest earned is not the total. Got it.` },
    { s: 'TYLA', t: `Question 1.1.2: "The term 'unlimited liability' means that the owner's..." A, losses are restricted to the amount invested in the business. B, personal assets are protected against the debts of the business. C, personal debts need to be replaced by the business. D, personal assets may be seized to pay the debts of the business.` },
    { s: 'MICHAEL', t: `Unlimited liability means the owner is personally responsible for the business's debts. So D — personal assets may be seized.` },
    { s: 'TYLA', t: `Correct, D. A and B describe limited liability — the opposite. Question 1.1.3: "Jobe Bookkeeping educated their staff on the impact of fraud when dealing with ... as a type of unprofessional business practice." A, the unauthorised use of workplace funds and resources. B, the abuse of work time. C, unfair advertising. D, sexual harassment.` },
    { s: 'MICHAEL', t: `Fraud is about money... so A — the unauthorised use of workplace funds and resources.` },
    { s: 'TYLA', t: `Correct, A. Question 1.1.4: "Team members often experience power struggles for the position of team leader during the ... stage of team development." A, forming. B, storming. C, performing. D, adjourning.` },
    { s: 'MICHAEL', t: `Storming. That's the stage where conflict and power struggles happen. B.` },
    { s: 'TYLA', t: `Correct, B. Question 1.1.5: "Catherine Textiles deals with HIV and Aids as a socio-economic issue by..." A, offering the best volunteering programmes to identify and attract potential employees. B, supporting poverty alleviation programmes that are offered by the government. C, rolling out antiretroviral treatment programmes for all infected employees. D, creating job opportunities for unemployed community members.` },
    { s: 'MICHAEL', t: `The question is about HIV and Aids specifically. Antiretroviral treatment — C.` },
    { s: 'TYLA', t: `[delighted] Correct, C. B and D are good socio-economic actions, but they deal with poverty and unemployment, not HIV and Aids. Match the action to the exact issue in the question. Ten marks.` },
    { s: 'TYLA', t: `Question 1.2 — complete each statement using the list on screen, two marks each. 1.2.1: "Willem applies different leadership styles based on different circumstances. This is known as the ... leadership theory."` },
    { s: 'MICHAEL', t: `Situational leadership.` },
    { s: 'TYLA', t: `Correct. 1.2.2: "A ... company creates job opportunities and offers essential services to the majority of citizens."` },
    { s: 'MICHAEL', t: `Hmm, a company that serves citizens and doesn't focus on profit... non-profit.` },
    { s: 'TYLA', t: `[encouragingly] Who provides essential services, like electricity, water and transport, to the majority of the country?` },
    { s: 'MICHAEL', t: `[hesitantly] The government... through its companies. So it's a state-owned company.` },
    { s: 'TYLA', t: `Correct — state-owned. Non-profit companies serve a public benefit too, but "essential services to the majority of citizens" is the job of state-owned companies. 1.2.3: "Qama Electronics strategically places ... in the business as a visual aid to attract customers."` },
    { s: 'MICHAEL', t: `Placed in the business, to attract customers... not a flip chart, that's for a meeting. Posters.` },
    { s: 'TYLA', t: `Correct — posters. 1.2.4: "Businesses implement the necessary changes after considering the driving and restraining aspects. This refers to ... as a problem-solving technique."` },
    { s: 'MICHAEL', t: `Driving and restraining forces — force-field analysis.` },
    { s: 'TYLA', t: `Correct. 1.2.5: "Highway Stores focuses on ... as a triple bottom-line element when they support eco- friendly production methods."` },
    { s: 'MICHAEL', t: `People, planet, profit. Eco-friendly is planet.` },
    { s: 'TYLA', t: `Correct. Ten marks.` },
    { s: 'TYLA', t: `Question 1.3 — match each term to a description in Column B. Two marks each. And like Paper 1, the descriptions come in pairs. 1.3.1: Sole trader.` },
    { s: 'MICHAEL', t: `[confidently] I learned this last time — find the pair first. D says limited continuity, because the business stops existing when the owner leaves. I says unlimited continuity. A sole trader is the owner, so it's D.` },
    { s: 'TYLA', t: `[impressed] Correct, D — and that's exactly the right approach. 1.3.2: Cumulative preference shares.` },
    { s: 'MICHAEL', t: `G — investors receive higher dividends when the company makes profits.` },
    { s: 'TYLA', t: `[patiently] What does "cumulative" mean?` },
    { s: 'MICHAEL', t: `Adding up... accumulating. Oh — dividends that weren't paid in earlier years accumulate, and they get paid later. That's J — investors receive payments for dividends that were not paid out in previous years.` },
    { s: 'TYLA', t: `Correct, J. G describes participating preference shares, which share in extra profits. 1.3.3: Average clause.` },
    { s: 'MICHAEL', t: `The average clause applies when you're under-insured — H, assets insured for less than their market value.` },
    { s: 'TYLA', t: `Correct, H. B is over-insurance, where the average clause doesn't help you at all. 1.3.4: Professional behaviour.` },
    { s: 'MICHAEL', t: `C — developing a moral compass for decision-making... or F, upholding the reputation of the business. Professional... F.` },
    { s: 'TYLA', t: `Correct, F. C describes ethical behaviour — ethics is the moral compass, and professionalism is about upholding the reputation and standards of the business. And 1.3.5: Grievances.` },
    { s: 'MICHAEL', t: `A — when employees lodge complaints with management in the workplace.` },
    { s: 'TYLA', t: `Correct, A. E — clashes of opinion between two or more parties — describes conflict. That's Section A — thirty marks.` },
  ],
},

{
  num: 2,
  file: 'BS Paper 2 Nov 2025 - Part 2 - Question 2 - Business Ventures',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 2, November 2025. Part 2: Question 2, Business Ventures` },
    { s: 'TYLA', t: `Section B. Question 2 is Business Ventures, forty marks. Question 2.1: "Name any TWO factors that should be considered when making investment decisions." Two marks.` },
    { s: 'MICHAEL', t: `Risk and return on investment.` },
    { s: 'TYLA', t: `Two marks. Also accepted: the investment term, the inflation rate, taxation and liquidity. Question 2.2: "Elaborate on the meaning of excess as an insurance concept." Four marks.` },
    { s: 'MICHAEL', t: `Excess is the portion of an insurance claim that the insured has to pay towards the cost of replacing or repairing the goods. And higher excess amounts keep the insurance premium lower and discourage fraud.` },
    { s: 'TYLA', t: `Four marks — two points, each with a fact and an elaboration. Other accepted points: it's the amount the insured agrees to pay upfront, as stated in the policy; it protects the insurer against fraudulent claims, because the insured is less likely to claim falsely if they must pay part; it's paid when a claim is lodged; it isn't paid out when a claim is settled, but the insurer recovers it from the liable party; and it stops people from claiming for minor damages.` },
    { s: 'MICHAEL', t: `Could I just give an example? Like, the car repair costs twenty thousand rand and my excess is five thousand, so the insurer pays fifteen?` },
    { s: 'TYLA', t: `You can, but the memo caps an example used as an explanation at two marks. So use the example to support a definition, not to replace it. Question 2.3: "Explain the functions of the Johannesburg Securities Exchange." Six marks.` },
    { s: 'MICHAEL', t: `Six marks, three functions. The JSE acts as a link between investors and public companies. It keeps investors informed by publishing share prices daily. And it serves as a barometer of economic conditions in South Africa.` },
    { s: 'TYLA', t: `Six marks. Each one has a fact and an explanation. The memo lists many more functions: it lets institutions like insurance companies invest surplus funds in shares; experts value and assess shares; small investors can take part in the economy; it makes the venture capital market possible; strict rules ensure an orderly market; it raises primary capital for listed companies; it mobilises the funds of insurance companies and other institutions; it regulates share trading; it plans, researches and advises on investments; it ensures the market is transparent; it protects investors through strict rules; it encourages short-term investment, because shares can be sold at any time; it handles the electronic trading of shares through STRATE; and it creates jobs and economic growth.` },
    { s: 'TYLA', t: `Question 2.4. Read the scenario below and answer the question that follows.` },
    { s: 'NARRATOR', t: `Mabizela Technologies. The managers of Mabizela Technologies apply different leadership styles in the workplace. Rachel takes all decisions alone, without consulting her staff members. Zaid, however, offers rewards to hardworking employees, which increases productivity.` },
    { s: 'TYLA', t: `"Identify the leadership styles applicable to MT. Motivate your answer by quoting from the scenario above." Use the table on screen as a guide. Six marks.` },
    { s: 'MICHAEL', t: `Rachel first. Decides alone, no consultation — autocratic. Quote: "Rachel takes all decisions alone, without consulting her staff members." Zaid inspires the employees to work harder... so transformational.` },
    { s: 'TYLA', t: `[encouragingly] What exactly does Zaid do to get them working harder?` },
    { s: 'MICHAEL', t: `He offers rewards. [slowly] So it's a deal — you work hard, you get a reward. That's an exchange... a transaction. Transactional leadership. Quote: "Zaid, however, offers rewards to hardworking employees, which increases productivity."` },
    { s: 'TYLA', t: `Correct. Six marks — two for each style and one for each quote. Transformational leaders inspire people with a vision so they want to change. Transactional leaders use rewards and punishments. And remember the rule from Paper 1: if the style is wrong, the quote earns nothing. The table is a guide, so the answer doesn't have to be in a table.` },
    { s: 'MICHAEL', t: `[whispers] Rewards mean a transaction.` },
    { s: 'TYLA', t: `Question 2.5: "Describe the role of personal attitude in successful leadership." Four marks.` },
    { s: 'MICHAEL', t: `A leader's attitude may influence the employees' thoughts and behaviour. And leaders should model the behaviour that they want to see in team members.` },
    { s: 'TYLA', t: `Four marks. Also accepted: a positive attitude releases leadership potential; a leader's good attitude can influence the business's success; leaders must know their strengths and weaknesses; the right attitude sets the right atmosphere; leaders consider team members' skills when allocating tasks; enthusiasm produces confidence; a positive leader sticks with a task despite challenges; successful leaders have a constant desire to achieve; and positive leaders know there's always more to learn.` },
    { s: 'TYLA', t: `Question 2.6. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Starlight Marketing. Zintle, the financial manager of Starlight Marketing, considered various aspects when she designed her multimedia presentation. She kept the graphs simple by not mixing different styles. She conducted background checks on some of the audience members. Zintle also used key words to limit the information on each slide.` },
    { s: 'TYLA', t: `2.6.1: "Quote TWO aspects from the scenario above that Zintle considered when she designed her multimedia presentation." Two marks.` },
    { s: 'MICHAEL', t: `"She kept the graphs simple by not mixing different styles." And "She conducted background checks on some of the audience members."` },
    { s: 'TYLA', t: `[seriously] The first one's right. Is the second about designing the presentation?` },
    { s: 'MICHAEL', t: `[groans] No. Checking the audience is preparing for the presentation — it's not about the slides at all. The design one is: "Zintle also used key words to limit the information on each slide."` },
    { s: 'TYLA', t: `Two marks. The scenario had three sentences and only two were about design. The examiner hid the third to see if you'd read the key word: designed. 2.6.2: "Explain other aspects that must be considered when designing a multimedia presentation." Four marks.` },
    { s: 'MICHAEL', t: `Use a legible font and font size so that it's easy to read. And select a background that complements the text.` },
    { s: 'TYLA', t: `Four marks. Also accepted: start with a heading that forms the basis of the presentation; choose images that help communicate the message; include graphics; add special effects, sound or animation to keep it interesting; create hyperlinks to other files or clips; check for language and spelling errors; use bright colours for visibility; and structure the information in a logical sequence. Don't repeat the two you quoted in 2.6.1.` },
    { s: 'TYLA', t: `Question 2.7: "Discuss the impact of government, or RSA, Retail Savings Bonds as a form of investment." Six marks.` },
    { s: 'MICHAEL', t: `"Impact" — positives and or negatives. Positive: it's a low-risk, safe investment, because it's invested with the South African government. Interest can be received twice a year. Negative: penalties are charged for early withdrawals if the savings are less than twelve months old.` },
    { s: 'TYLA', t: `[impressed] Six marks. Other positives: guaranteed returns, because the interest rate is fixed; market- related interest rates; cash can be withdrawn after the first twelve months; it's affordable for all income levels, including pensioners; it's easy to buy, online, at a Post Office or from the National Treasury; there are no charges or commissions; the interest is usually higher than on fixed deposits; the bonds are listed on the capital bond markets; and minors can invest with a legal guardian. Other negatives: the bonds can't be used as security for loans; a minimum investment is required — five hundred rand for Top Up Bonds or one thousand rand for Fixed Rate bonds; they can't be freely transferred between investors; and investors need valid South African identification and must be over eighteen.` },
    { s: 'MICHAEL', t: `So the age and ID rules show up as both a positive, with a guardian, and a negative, for foreigners and young people.` },
    { s: 'TYLA', t: `Exactly. Question 2.8: "Advise businesses on how management as a criterion could contribute to the success and/or failure of a public company." Six marks.` },
    { s: 'MICHAEL', t: `Success: it's managed by a board of competent, highly skilled directors, which results in better decision-making. And shareholders can vote for the most capable directors. Failure: a large management structure can make decision-making slow.` },
    { s: 'TYLA', t: `[delighted] Six marks — and notice "and/or": you could do only success, only failure, or a mix. Other success factors: management can improve because directors are accountable to shareholders; and directors bring creative ideas. Other failure factors: directors may not have a direct interest in the company; directors' fees reduce net profit; management may face legal challenges if reports don't comply with the King Code; some shareholders don't vote, so the wrong director may be chosen; and directors may not be motivated because shareholders decide their pay. That's Question 2 — forty marks.` },
  ],
},

{
  num: 3,
  file: 'BS Paper 2 Nov 2025 - Part 3 - Question 3 - Business Roles',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 2, November 2025. Part 3: Question 3, Business Roles` },
    { s: 'TYLA', t: `Question 3 is Business Roles, forty marks. Question 3.1: "List any FOUR problem-solving steps." Four marks.` },
    { s: 'MICHAEL', t: `Identify the problem. Identify possible solutions. Evaluate the alternative solutions. Choose the most appropriate solution.` },
    { s: 'TYLA', t: `Four out of four, one mark each. The full list in the memo: identify the problem, define the problem, identify possible solutions, evaluate alternatives, choose the best solution, develop an action plan, implement it, monitor the implementation, and evaluate the solution. Question 3.2: "Outline the benefits of diversity in the workplace." Six marks.` },
    { s: 'MICHAEL', t: `Diversity improves morale and motivation among employees. Employees from different backgrounds bring different perspectives to the business. And a diverse workforce is better able to recognise customer needs and satisfy consumers.` },
    { s: 'TYLA', t: `[warmly] Six marks — three points at two marks each. Also accepted: a better public image that attracts customers; a competitive advantage through better service; better problem-solving and innovation; more debate on new ways of doing things; greater employee loyalty because people feel respected; learning to communicate across differences; better profitability; policies that let everyone reach their full potential; and the fact that stakeholders increasingly judge businesses on how they manage diversity.` },
    { s: 'TYLA', t: `Question 3.3. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Jaleel Pharmacy. The board of directors of Jaleel Pharmacy regularly applies the King Code principles in their business operations. JP developed a remedial programme to reduce air pollution levels and to protect the environment.` },
    { s: 'TYLA', t: `3.3.1: "Identify the King Code principle applied by JP. Motivate your answer by quoting from the scenario above." Three marks.` },
    { s: 'MICHAEL', t: `Protecting the environment is being a responsible business. Responsibility. Quote: "JP developed a remedial programme to reduce air pollution levels and to protect the environment."` },
    { s: 'TYLA', t: `Three marks. And 3.3.2: "Describe any ONE other King Code principle that businesses can apply to improve their ethical business conduct." Three marks.` },
    { s: 'MICHAEL', t: `[playfully] "One other" — Porter's Five Forces taught me this one. Not responsibility. Transparency: business decisions and actions must be clear to all stakeholders.` },
    { s: 'TYLA', t: `[laughs] Three marks — and you're catching the traps before they catch you. Two marks for the principle, one for the description. Other transparency points: open staffing processes; employees and shareholders know the employment policies; accurate audit reports available to shareholders; regular audits; deals done openly with no hint of corruption; details of voting rights given before or at the AGM; and reporting on both the positive and negative impacts on the community. Or accountability: regular communication with shareholders; internal and external auditors; proper disclosure ethics; businesses take responsibility for their decisions; accurate annual reports at the AGM; and managers clear about their roles. Only the first principle is marked. Question 3.4: "Discuss communication as a criterion for successful team performance." Six marks.` },
    { s: 'MICHAEL', t: `Good communication between team members may result in quick decisions. Quality feedback improves team morale. And open, honest discussions lead to effective solutions to problems.` },
    { s: 'TYLA', t: `Six marks. The memo also accepts: a clear set of processes for teamwork, so everyone knows their role; and continuous review of team progress, so mistakes can be fixed and targets reached.` },
    { s: 'TYLA', t: `Question 3.5. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Klipland Hardware. Klipland Hardware is experiencing conflict in the workplace. Some employees of KH display a lack of cooperation which causes delays in production. The management of KH sets unrealistic deadlines that increase the stress levels of employees. The employees of KH have difficulty with paying their own debt timeously.` },
    { s: 'TYLA', t: `3.5.1: "Quote TWO causes of conflict at KH from the scenario above." Two marks.` },
    { s: 'MICHAEL', t: `"Some employees of KH display a lack of cooperation which causes delays in production." And... "The employees of KH have difficulty with paying their own debt timeously."` },
    { s: 'TYLA', t: `[encouragingly] Does the debt problem cause conflict between people at KH?` },
    { s: 'MICHAEL', t: `[sighs] No... it's a personal financial problem. It might stress them out, but it's not a clash between people in the workplace. The second cause is: "The management of KH sets unrealistic deadlines that increase the stress levels of employees."` },
    { s: 'TYLA', t: `Correct — two marks. And because only the first two quotes are marked, writing the debt sentence second would have cost you a mark. 3.5.2: "Explain how businesses should handle conflict in the workplace." Four marks.` },
    { s: 'MICHAEL', t: `Identify the cause of the conflict to get clarity on its nature. Then arrange a meeting between the conflicting parties, where each party has the opportunity to express their own opinions. Then select and implement the best solution that deals with the conflict.` },
    { s: 'TYLA', t: `Four marks. The memo has a long list of steps — for example: acknowledging that conflict exists; arranging a time and place for negotiation; making your intentions clear so people feel at ease; a pre- negotiation meeting where each side states its case separately; analysing the causes; evaluating the views objectively; avoiding blame-shifting; directing the parties towards solutions; brainstorming ways to resolve it; agreeing on criteria to judge alternatives; following up and monitoring progress; and bringing in outside experts.` },
    { s: 'TYLA', t: `Question 3.6: "Discuss the advantages of corporate social responsibility on businesses." Six marks.` },
    { s: 'MICHAEL', t: `CSR gives the business a positive image, because it conducts itself responsibly. It promotes customer loyalty, resulting in more sales. And it may give tax advantages, like tax rebates.` },
    { s: 'TYLA', t: `Six marks. Also accepted: attracting experienced employees; a competitive advantage and good publicity; using CSR projects as a marketing strategy; community goodwill; teamwork; attracting investors; less government enforcement through legislation; employees feeling they make a difference; lower staff turnover; healthier employees; and attracting investors through inclusion in the JSE's socially responsible investment index. Question 3.7: "Evaluate the impact of the nominal group technique." Six marks.` },
    { s: 'MICHAEL', t: `"Evaluate" — so I take a side, or both sides. Positive: voting on the ideas is anonymous, so it may be more honest. Everyone gets an opportunity to contribute, without one person dominating. Negative: it's time-consuming, because each member must present their ideas.` },
    { s: 'TYLA', t: `[impressed] Six marks. "Evaluate" lets you be positive, negative or neutral — what matters is that each point has a fact and a reason. Other positives: time to think in silence before responding; preventing conformity to group pressure; each member participates without interference; lots of ideas generated and prioritised democratically; and confronting issues constructively. Other negatives: small, pre-selected groups; less creative suggestions than open brainstorming; good ideas voted out before they're developed; minimal discussion; ideas that don't converge; difficulty with large groups; and the need for advance preparation, so it can't be spontaneous. That's Question 3 — forty marks.` },
  ],
},

{
  num: 4,
  file: 'BS Paper 2 Nov 2025 - Part 4 - Question 4 - Miscellaneous Topics',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 2, November 2025. Part 4: Question 4, Miscellaneous Topics` },
    { s: 'TYLA', t: `Question 4 is Miscellaneous Topics — Business Ventures first, then Business Roles. Forty marks. Question 4.1: "Give any TWO examples of non-insurable risks." Two marks.` },
    { s: 'MICHAEL', t: `War, and changes in fashion and trends.` },
    { s: 'TYLA', t: `Two marks. Others: earthquakes or nuclear weapons; changes in technology; irrecoverable debts; high inflation; losses from bad management; possible business failure; shoplifting during business hours; lost income when stock arrives late; and losses from illegal marketing practices. Question 4.2: "Identify the type of investment opportunity applicable to Platinum Limited in EACH of the following statements." 4.2.1: "PL raised additional capital by borrowing money from the public." Two marks.` },
    { s: 'MICHAEL', t: `Raising capital from the public... shares.` },
    { s: 'TYLA', t: `[encouragingly] Did they sell ownership, or did they borrow?` },
    { s: 'MICHAEL', t: `Borrow. Shareholders are owners, but lenders get their money back with interest. That's debentures.` },
    { s: 'TYLA', t: `Correct — debentures, two marks. A debenture is a loan to the company; a share is part ownership. 4.2.2: "Employees of PL make monthly contributions to an informal savings scheme from which they will be able to make future withdrawals." Two marks.` },
    { s: 'MICHAEL', t: `Informal savings scheme, monthly contributions — stokvel.` },
    { s: 'TYLA', t: `Correct — the memo accepts stokvels, or mutual funds. Question 4.3: "Explain the difference between management and leadership." Four marks.` },
    { s: 'MICHAEL', t: `"Difference" — both sides and "whereas." Management guides human behaviour, whereas leadership influences human behaviour.` },
    { s: 'TYLA', t: `[delighted] Four marks — two for each side. The memo lists many more pairs. Management communicates through management functions, whereas leadership communicates through behaviour, vision and charisma. Management administers plans to reach targets, whereas leadership encourages new ideas. Management controls systems and procedures, whereas leadership inspires trust. Management focuses on the short term and the bottom line, whereas leadership focuses on the long term. A manager gets power from their appointed position, whereas a leader's influence comes from knowledge and skills. Management is task-oriented and instructional, whereas leadership is people-oriented and inspirational. And management "does things right," whereas leadership "does the right things."` },
    { s: 'TYLA', t: `Question 4.4: "Discuss the advantages of a personal liability company." Six marks.` },
    { s: 'MICHAEL', t: `A personal liability company has its own legal identity, so it's a legal person that can sign contracts in its own name. It has continuity of existence, because its lifespan doesn't depend on the owners. And it appoints a board of directors with the expertise to make business decisions.` },
    { s: 'TYLA', t: `[warmly] Six marks. Also accepted: good potential for long-term growth; a fixed tax rate paid to SARS; no requirement to file annual financial statements with the CIPC or publish them to the public; it can be sold, because it's a separate legal entity; it's managed by at least one skilled director; it can raise capital by issuing shares, with no limit on shareholders; management improves because directors are accountable; and directors are personally liable if they act recklessly or fraudulently.` },
    { s: 'MICHAEL', t: `Wait — directors being personally liable is an advantage?` },
    { s: 'TYLA', t: `For the company and its creditors, yes. It discourages directors from running the business recklessly. It's on the memo, so it earns marks. Question 4.5: "Advise presenters on the factors that they should consider during a presentation." Four marks.` },
    { s: 'MICHAEL', t: `"During" — so not designing the slides. Maintain eye contact with the audience. And vary your tone of voice to prevent monotony.` },
    { s: 'TYLA', t: `[impressed] Four marks — and you noticed "during" straight away. Also accepted: introduce yourself to establish credibility; give the most important information first; make the purpose clear at the start; use section titles and headings; summarise the main points at the end; stand where everyone can see you; don't hide behind equipment; don't ramble; involve the audience with clips, sound or humour; be audible; use visual aids, anecdotes and examples; use gestures; speak with energy; pace yourself; keep it short and simple; end strongly; make sure the audience leaves with specific information; and leave time for questions.` },
    { s: 'TYLA', t: `Now Business Roles. Question 4.6: "Name the FOUR corporate social investment focus areas." Four marks.` },
    { s: 'MICHAEL', t: `Community, employees, environment... and education?` },
    { s: 'TYLA', t: `[patiently] The question says "the four." There's a fixed list. Think about where people live who are often left out.` },
    { s: 'MICHAEL', t: `Ah — rural development. So: community, rural development, employees and environment.` },
    { s: 'TYLA', t: `Correct — four marks. "Name the four" means a specific, fixed list, so you can't swap in something that sounds right. Question 4.7: "Describe the importance of team dynamic theories in improving team performance." Six marks.` },
    { s: 'MICHAEL', t: `Team dynamic theories explain how effective teams work. Tasks can be allocated according to the roles of team members. And conflict may be minimised when team members perform different roles.` },
    { s: 'TYLA', t: `Six marks. Also accepted: team members maximise performance because tasks match their abilities and personalities; members with similar strengths may compete for the tasks that suit them; and the theories help leaders understand personality types so they assign tasks more effectively.` },
    { s: 'TYLA', t: `Question 4.8. Read the scenario below and answer the questions that follow.` },
    { s: 'NARRATOR', t: `Thandokazi Attorneys. Thandokazi Attorneys strive to promote creative thinking in the workplace. They ensure that the work environment is free from high noise levels and distractions. The management of TA provides employees with fewer breaks to optimise workplace productivity. TA also encourage employees to come up with new ways of performing their duties.` },
    { s: 'TYLA', t: `4.8.1: "Quote TWO ways from the scenario above in which TA creates an environment that promotes creative thinking." Two marks.` },
    { s: 'MICHAEL', t: `[confidently] There's a trap in there. Fewer breaks doesn't promote creativity — it's about productivity, and tired people aren't creative. So: "They ensure that the work environment is free from high noise levels and distractions." And: "TA also encourage employees to come up with new ways of performing their duties."` },
    { s: 'TYLA', t: `[delighted] Two marks — and you spotted the trap on your own. 4.8.2: "Explain other ways in which businesses can create an environment that promotes creative thinking in the workplace." Four marks.` },
    { s: 'MICHAEL', t: `Place suggestion boxes around the workplace and keep communication channels open for new ideas. And reward creativity with incentives for staff who come up with useful ideas.` },
    { s: 'TYLA', t: `Four marks. Also accepted: emphasise that management wants to hear ideas; make time for brainstorming sessions and workshops; train staff in creative techniques like mind-mapping and lateral thinking; encourage job swaps or study how other businesses work; and respond enthusiastically to every idea. Question 4.9: "Recommend ways in which businesses can deal with the pricing of goods in rural areas as a type of unethical business practice in the workplace." Four marks.` },
    { s: 'MICHAEL', t: `Charge fair, market-related prices for goods and services. And work together with suppliers to share the delivery costs to remote rural areas.` },
    { s: 'TYLA', t: `[warmly] Four marks. Others: lobby the government, with other businesses, to improve rural infrastructure; avoid unethical practices to build customer loyalty; find cost-effective transport, like one large truck combining deliveries; and buy in bulk for discounts. That's Question 4 — and all of Section B.` },
    { s: 'MICHAEL', t: `Same choosing advice as Paper 1? Read all three first, pick the two where I'm strongest on the scenarios and short questions?` },
    { s: 'TYLA', t: `Exactly. And never start a third.` },
  ],
},

{
  num: 5,
  file: 'BS Paper 2 Nov 2025 - Part 5 - Section C - Essays and Wrap-Up',
  segs: [
    { s: 'AMELIA', t: `Business Studies Exam Walkthrough, Paper 2, November 2025. Part 5: Section C, the Essays, and Wrap-Up` },
    { s: 'TYLA', t: `Section C — the essay. Michael, before we start: how is a forty-mark essay marked?` },
    { s: 'MICHAEL', t: `[confidently] Thirty-two marks for facts, and eight for insight — LASO. Layout: write INTRODUCTION and CONCLUSION as headings with real facts under them. Analysis: a heading for every sub- question. Synthesis: keep everything relevant. Originality: a real, recent example in at least two sub- questions. And full sentences get two marks, phrases get one.` },
    { s: 'TYLA', t: `[amazed] ...Perfect. Paper 1 paid off.` },
    { s: 'TYLA', t: `Question 5: Business Ventures — Investment: Insurance.` },
    { s: 'NARRATOR', t: `Businesses are required to make a clear distinction between insurance and assurance for future financial planning. A sound knowledge of compulsory insurance is beneficial for businesses. Businesses receive the benefits of insurance when they successfully apply the insurance principles.` },
    { s: 'TYLA', t: `"Write an essay on investment: insurance in which you include the following aspects. Outline the differences between insurance and assurance. Explain the THREE types of compulsory insurance. Discuss the advantages of insurance. Advise businesses on the following principles of insurance: utmost good faith, and insurable interest." Forty marks. Introduction?` },
    { s: 'MICHAEL', t: `"Introduction. Businesses are required by law to take out the relevant compulsory insurance. Businesses are exposed to many risks during their operations, so they take out insurance to protect themselves against these risks."` },
    { s: 'TYLA', t: `Two marks. The differences between insurance and assurance — twelve marks. Six for insurance, six for assurance.` },
    { s: 'MICHAEL', t: `"Differences between insurance and assurance. Insurance is based on the principle of indemnity, whereas assurance is based on the principle of security or certainty. Insurance covers a specified event that may occur, whereas with assurance the event is certain, but the time of the event is uncertain. Insurance applies to short-term insurance, whereas assurance applies to long-term insurance. For example, fire or theft insurance, compared with life insurance or a retirement annuity."` },
    { s: 'TYLA', t: `[delighted] Twelve marks, with both sides every time. The memo also accepts: with insurance, the insured transfers the cost of a possible loss to the insurer for a premium, whereas with assurance, the insurer pays an agreed sum after a certain period or on the death of the insured, whichever comes first. If you write only one side, the maximum is six. Next — the three types of compulsory insurance. Sixteen marks.` },
    { s: 'MICHAEL', t: `"Types of compulsory insurance. The first is life insurance—"` },
    { s: 'TYLA', t: `[seriously] Stop. Is life cover compulsory?` },
    { s: 'MICHAEL', t: `[groans] No — and I just said it's assurance, not insurance. It's voluntary. The three compulsory types are the ones the law requires: the Unemployment Insurance Fund, the Compensation Fund, under COIDA, and the Road Accident Fund.` },
    { s: 'TYLA', t: `Right. And only the first three types are marked, so a wrong first answer would cost you a whole type. Each type is worth two marks for the name and up to four for the explanation. Go.` },
    { s: 'MICHAEL', t: `"The Unemployment Insurance Fund. The UIF provides short-term benefits to workers who become unemployed. Employers and employees each contribute one percent of the employee's basic wage, and businesses pay the two percent levy to SARS or the UIF every month."` },
    { s: 'TYLA', t: `That's the type plus two explanation points. Next.` },
    { s: 'MICHAEL', t: `"The Compensation Fund, under COIDA. The fund compensates employees for occupational injuries and diseases at work. Employers must register with the fund and contribute, and they may not deduct contributions from employees' wages."` },
    { s: 'TYLA', t: `Good. Last one.` },
    { s: 'MICHAEL', t: `"The Road Accident Fund. The RAF insures road users against the negligence of other road users. It's funded by a levy on the sale of fuel."` },
    { s: 'TYLA', t: `[impressed] That's sixteen — eighteen possible, capped at sixteen. The memo also calls the third one the Road Accident Benefit Scheme, or RABS. Other UIF points: it supports dependants of a deceased contributor; anyone working at least twenty-four hours a month must be registered; claims are made through the Department of Labour; employers are personally liable if deductions aren't paid; and people who resigned or absconded can't claim. Other COIDA points: compensation depends on the degree of disablement; contributions are reviewed according to risk; it covers employers against workers' legal claims; accidents must be reported within seven days and diseases within fourteen; dependants receive support after a work-related death; employees don't contribute; and medical costs are covered. Other RAF and RABS points: all road users are covered, including businesses; drivers of business vehicles are indemnified; negligent drivers aren't covered for their own claims; claims for loss of income are limited; next of kin can claim directly; and RABS aims to be fair and affordable, and to speed up claims and medical care because victims no longer have to prove who caused the accident.` },
    { s: 'MICHAEL', t: `Advantages of insurance — ten marks, five points. "Advantages of insurance. It transfers the risk from the business to the insurer. It protects businesses against theft or loss of stock, and damage from natural disasters such as floods. Businesses are compensated for insurable losses, like property destroyed in a fire. It protects businesses against dishonest employees. And it protects businesses from claims made by members of the public for damages the business is responsible for."` },
    { s: 'TYLA', t: `Ten. Also accepted: risk transfer subject to the contract's terms; insuring vehicles, equipment and buildings; cover for loss of earnings, such as during strikes; life cover on partners to protect capital; pay-outs if key personnel are lost; covering the high cost of replacing machinery; and cover if a debtor dies. And the two principles — four marks each.` },
    { s: 'MICHAEL', t: `"Utmost good faith. The insured has to be honest when supplying details for an insurance contract. The insured must disclose everything that may affect the extent of the risk. Insurable interest. The insured must prove that they will suffer a financial loss if the insured object is damaged or lost. And the insured must have a legal relationship with the insured object."` },
    { s: 'TYLA', t: `[delighted] Eight. Also accepted for utmost good faith: both parties must disclose all relevant facts, and claim details must be accurate. For insurable interest: it must be expressed in financial terms. Conclusion?` },
    { s: 'MICHAEL', t: `"Conclusion. Principles such as utmost good faith and insurable interest must be followed by both parties to make sure the insurance contract is valid."` },
    { s: 'TYLA', t: `Two marks. That's the full forty, with insight.` },
    { s: 'TYLA', t: `Question 6: Business Roles — Human Rights, Inclusivity and Environmental Issues.` },
    { s: 'NARRATOR', t: `Employers are obligated to take care of the human health and safety of employees in the workplace. Businesses must be able to implement ways to deal with human rights and apply strategies to protect the environment and human health. They must also have knowledge of diversity issues in order to deal with them correctly.` },
    { s: 'TYLA', t: `"Write an essay on human rights, inclusivity and environmental issues in which you include the following aspects. Outline the responsibilities of employers in promoting human health and safety in the workplace. Explain how businesses can deal with any THREE human rights in the workplace. Discuss strategies businesses may use to protect the environment and human health. Suggest ways in which businesses could deal with the following diversity issues: age, and disability." Forty marks.` },
    { s: 'MICHAEL', t: `"Introduction. Businesses have a responsibility to make sure employees work in a safe and healthy environment. Businesses are also encouraged to deal with diversity issues such as age and disability to improve productivity."` },
    { s: 'TYLA', t: `Two marks. Employers' responsibilities — twelve marks, six points.` },
    { s: 'MICHAEL', t: `"Responsibilities of employers. Employers should put systems in place so that there is no harmful impact on workers' health and safety. They should reduce dangers to workers and provide personal protective clothing. They must know where potential dangers are and limit the harm — for example, floors must not be slippery. They should provide and maintain safe equipment. Workers must be informed, instructed and supervised to limit dangers, and emergency exit signs must be visible. And employers must comply with safety laws that promote a healthy working environment."` },
    { s: 'TYLA', t: `[warmly] Twelve. Also accepted: equipment used only under the supervision of a trained worker; and a workplace where health isn't damaged by hazards in production, storage or transport. Three human rights — twelve marks: two for naming each right, two for explaining how the business deals with it.` },
    { s: 'MICHAEL', t: `"Human rights in the workplace. Privacy: businesses should not give employees' personal information to anyone else, and information about employees who have disclosed their HIV status or a chronic illness must be kept confidential. Dignity: businesses must treat all employees with respect regardless of their socio-economic status, and must not force workers to do embarrassing or degrading work. Safety, security and protection of life: businesses must provide protective clothing, such as gloves and footwear, and comply with safety laws such as COIDA and the Occupational Health and Safety Act."` },
    { s: 'TYLA', t: `[impressed] Twelve — and only three rights, because only the first three are marked. The other rights the memo accepts are equity — equal pay for work of equal value, no discrimination, and fair use of laws like the EEA; freedom of speech and expression — open channels like suggestion boxes, and no punishment for voicing opinions; and information — keeping employees updated, transparent financial statements, and access to policies, contracts and labour laws. Strategies to protect the environment and human health — ten marks.` },
    { s: 'MICHAEL', t: `"Strategies to protect the environment and human health. The business must change its production techniques in favour of cleaner, greener technologies. It must have a policy to minimise pollution and to reuse, recycle and reduce waste. It must invest in appropriate technology such as solar or wind power. It must service and maintain all machines regularly to reduce accidents. And it must educate workers about hygiene, such as washing their hands."` },
    { s: 'TYLA', t: `Ten. Also accepted: environmental awareness programmes; testing workplace water; conserving natural resources; working with green-energy bodies; safe, worker-friendly conditions with good lighting and ventilation; regular health check-ups; following environmental laws; and safe disposal of toxic waste. Last heading — age and disability, six marks each.` },
    { s: 'MICHAEL', t: `"Age. Businesses may not employ children younger than eighteen—"` },
    { s: 'TYLA', t: `[encouragingly] Check that age. What does the memo say is the minimum?` },
    { s: 'MICHAEL', t: `[hesitantly] Younger than... fifteen. Children under fifteen may not be employed. Okay. "Businesses may not employ children under fifteen. Promotions should be linked to skills, not age. And older employees should be encouraged to help young employees develop their potential."` },
    { s: 'TYLA', t: `Six marks. Other age points: permanent workers can range from eighteen to sixty-five, to include all age groups; young employees should respect and learn from older ones; a person older than the retirement age may be employed if they're the most suitable candidate; and employees should be sensitive to the perspectives of different age groups. Disability?` },
    { s: 'MICHAEL', t: `"Disability. Businesses should accommodate people with disabilities by providing ramps for wheelchairs and assistive devices. They should train employees on how to work with colleagues with disabilities. And they should focus on the skills and performance of a disabled worker, rather than on the disability."` },
    { s: 'TYLA', t: `[delighted] Six. Also accepted: employment opportunities in jobs they can do; keeping management informed; making sure workers with special needs aren't excluded; policies that accommodate their needs; a supportive culture; external experts; and treating them fairly, with no discrimination. Conclusion?` },
    { s: 'MICHAEL', t: `"Conclusion. Businesses that address diversity issues create a more inclusive environment that helps prevent discrimination in the workplace."` },
    { s: 'TYLA', t: `Two marks. And that's the whole paper — one hundred and fifty marks.` },
    { s: 'MICHAEL', t: `[excitedly] Two papers, four essays. I'm officially a Business Studies machine.` },
    { s: 'TYLA', t: `[warmly] Michael — two complete papers. How do you feel?` },
    { s: 'MICHAEL', t: `Honestly? Much better than after Paper 1. I caught a few traps myself this time.` },
    { s: 'TYLA', t: `You did. Same tradition — the top traps from this paper, in one go.` },
    { s: 'MICHAEL', t: `Okay. Section A. Read the end of a calculation question — "interest earned" is ten thousand eight hundred, not the total of forty thousand eight hundred. Unlimited liability means personal assets can be seized. HIV and Aids is dealt with through antiretroviral treatment, not poverty or job programmes. Essential services to the majority of citizens is a state-owned company, not a non-profit. Cumulative preference shares pay missed dividends later — higher dividends from profits is participating. The average clause is about under-insurance. Professional behaviour upholds the business's reputation — the moral compass is ethics. And a grievance is a complaint to management — a clash of opinions is conflict.` },
    { s: 'TYLA', t: `Keep going — Section B.` },
    { s: 'MICHAEL', t: `Rewards mean transactional leadership, not transformational. A background check on the audience is preparing a presentation, not designing it. Personal debt isn't a cause of workplace conflict. Fewer breaks don't promote creative thinking. Borrowing from the public is debentures — shares are ownership. "Name the four CSI focus areas" means the fixed list — community, rural development, employees, environment. "One other principle" means not responsibility. "During a presentation" means delivery, not design. "Evaluate" means a side, with reasons. And "difference" means both sides, with "whereas."` },
    { s: 'TYLA', t: `And Section C?` },
    { s: 'MICHAEL', t: `Life cover is assurance, and it isn't compulsory — the three compulsory types are the UIF, COIDA's Compensation Fund, and the Road Accident Fund. Only the first three types, and the first three human rights, are marked. Children under fifteen may not be employed. And the essay basics — headings, full sentences, both sides of a difference, and real, recent examples.` },
    { s: 'TYLA', t: `[delighted] That's a brilliant list. And look at the pattern across both papers: most traps hide in one word — "interest," "designed," "during," "the," "other," "cumulative." The business content was never the hardest part. Reading every word was.` },
    { s: 'MICHAEL', t: `[playfully] So the real Business Studies skill is reading.` },
    { s: 'TYLA', t: `[laughs] Reading, then writing in full sentences. Until next time... [whispers] one word can change the whole answer. [warmly] We'll catch you in the next episode.` },
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

  console.log(`The Business Brief — Exam Walkthrough Business Studies Paper 2 Nov 2025 (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

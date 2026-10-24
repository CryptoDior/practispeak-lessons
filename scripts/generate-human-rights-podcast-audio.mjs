/**
 * The Business Brief — Human Rights, Inclusivity and Environmental Issues — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-human-rights-podcast-audio.mjs
 *
 * Rebuild an episode (only missing or text-edited lines are regenerated), or force specific lines:
 *   ... <n>            e.g. 2
 *   ... <n>:2,-2       e.g. 2:2,-2  (line numbers; -1 = last line, -2 = second to last)
 *   ... <n> --fresh    wipe and re-record the whole episode
 * Original example:
 *
 *   node --env-file=.env.local scripts/generate-human-rights-podcast-audio.mjs 1
 *
 * Currently populated: Episodes 1-10 (all).
 *
 * ElevenLabs account: uses ELEVENLABS_API_KEY_1 by default. To use the second account,
 * set ELEVENLABS_ACCOUNT=2 in .env.local (uses ELEVENLABS_API_KEY_2).
 *
 * Model: Eleven v4 (eleven_v4), falling back to Eleven v3 (eleven_v3) if v4 fails.
 * Clips already generated are skipped, so an interrupted run can simply be re-run.
 *
 * Output:
 *   podcasts/The-Business-Brief-Human-Rights/Episode 1 - What Rights Follow You to Work.mp3
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import crypto from 'crypto';

const ELEVENLABS_KEY =
  process.env['ELEVENLABS_API_KEY_' + (process.env.ELEVENLABS_ACCOUNT || '1')] || process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_1 to .env.local and run with: node --env-file=.env.local scripts/generate-human-rights-podcast-audio.mjs');
  process.exit(1);
}

const VOICES = {
  NALEDI: 'ZF6FPAbjXT4488VcRRnw',  // same Naledi voice as the earlier Business Brief series
  MICHAEL: 'vDchjyOZZytffNeZXfZK', // Mike — Natural and Engaging Podcast Host
  AMELIA: 'IKne3meq5aSn9XLyUdCD',  // narration — announces each episode title (same as earlier Business Brief series)
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'The-Business-Brief-Human-Rights');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'business-brief-human-rights');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'Episode 1 - What Rights Follow You to Work',
  segs: [
    { s: 'AMELIA', t: `Episode 1: What Rights Follow You to Work?` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this series we look at human rights, inclusivity and environmental issues in the workplace. In this episode we start with the legal foundation that everything else rests on.` },
    { s: 'MICHAEL', t: `[curious] Where does that foundation come from?` },
    { s: 'NALEDI', t: `[clear, friendly] The Constitution of South Africa. It contains the Bill of Rights, which is often called the cornerstone of our democracy. It protects civil, political, economic, social and cultural rights for citizens and non-citizens alike. There are a few exceptions that belong only to citizens, like the right to vote, the right to choose a trade, occupation or profession, and the right to enter the country.` },
    { s: 'MICHAEL', t: `[curious] Does the Bill of Rights only cover individual people, or organisations too?` },
    { s: 'NALEDI', t: `[surprised, interesting] It stretches further than most people expect. It also applies to what's called a juristic person. That's a group or association of people that the law recognises as existing in its own right. A trade union, an employers' association and a registered company are all juristic persons. So a business can hold certain rights itself, not just the people inside it.` },
    { s: 'MICHAEL', t: `[thoughtful] There are loads of rights in the Constitution. How do we know which ones matter for a workplace?` },
    { s: 'NALEDI', t: `[reassuring] Good question, because not all of them apply directly to business. Let's go through the ones that do, in sensible groups instead of one long list.` },
    { s: 'MICHAEL', t: `[eager] Start with the most basic.` },
    { s: 'NALEDI', t: `[steady] Equality and human dignity. Equality means equal protection and benefit of the law, and no unfair discrimination on grounds such as race, gender, sex, pregnancy, marital status, ethnic or social origin, colour, sexual orientation, age, disability, religion, conscience, belief, culture, language or birth. It's a long list on purpose. Human dignity means every person has worth in their own right, and that worth must be respected and protected.` },
    { s: 'MICHAEL', t: `[curious] What about protection from exploitation?` },
    { s: 'NALEDI', t: `[serious] Freedom from slavery, servitude and forced labour. Nobody may be subjected to any of these. And privacy: nobody's person, home or property may be searched, nobody's belongings seized, and nobody's private communications interfered with, unless there is proper legal justification.` },
    { s: 'MICHAEL', t: `[curious] And what about beliefs and speaking your mind?` },
    { s: 'NALEDI', t: `[clear] Three linked rights. Religion, belief and opinion: you're free to hold your own beliefs and to receive and express opinions. Freedom of expression: you may receive and share information and ideas, but not propaganda for war, incitement to violence, or hate speech. And assembly: you may gather, demonstrate, picket and present petitions, as long as it's peaceful and unarmed.` },
    { s: 'MICHAEL', t: `[curious] And joining groups?` },
    { s: 'NALEDI', t: `[thoughtful] That's association, the right to join groups of your choice. It connects straight to labour relations, which is probably the most workplace-specific right of all. Everyone has the right to fair labour practices. Employees may form or join a trade union, take part in its activities, and strike. Employers may form or join an employers' organisation. And both sides have the right to collective bargaining.` },
    { s: 'MICHAEL', t: `[curious] Where does the environment fit?` },
    { s: 'NALEDI', t: `[clear] Directly. Everyone has the right to an environment that isn't harmful to their health or well-being. The law must protect it by preventing pollution and ecological damage, encouraging conservation, and promoting the sustainable use of natural resources, while still allowing reasonable economic and social development.` },
    { s: 'MICHAEL', t: `[curious] What about children?` },
    { s: 'NALEDI', t: `[serious, warm] Children have their own protection. The law does not allow the employment of children under fifteen, and children must be protected from exploitative labour, unsuitable work, and anything that puts their well-being, education or development at risk.` },
    { s: 'MICHAEL', t: `[curious] And education?` },
    { s: 'NALEDI', t: `[steady] The right to basic education, which includes Adult Basic Education. Learning doesn't stop mattering once you're an adult.` },
    { s: 'MICHAEL', t: `[curious] Are there rights about how a business or the state treats you, as opposed to what you're entitled to?` },
    { s: 'NALEDI', t: `[clear] Yes, three, and they matter more than people think. Access to information: you can get information held by the state, and other information you need to exercise or protect your rights. Just administrative action: decisions that affect you must be lawful, reasonable and procedurally fair, with written reasons if your rights are affected. And access to the courts: a genuine dispute can be resolved by a fair, public hearing before a court or independent tribunal.` },
    { s: 'MICHAEL', t: `[overwhelmed, playful] That's a lot to hold in my head. Is there an easy way?` },
    { s: 'NALEDI', t: `[encouraging] Think of a chain. It starts with the Constitution at the top, then narrows to the rights that apply to businesses: equality, dignity, freedom from forced labour, privacy, religion and belief, expression, assembly, labour relations, environment, children, education, access to information, just administrative action, and access to the courts. Each link turns up somewhere real in how a workplace has to run.` },
    { s: 'MICHAEL', t: `[curious] How do these collide in real life?` },
    { s: 'NALEDI', t: `[storytelling] Picture Highveld Steelworks, a mid-sized factory. A group of workers wants to hold a peaceful protest outside the gates about unpaid overtime. Management is nervous and wants to shut it down straight away.` },
    { s: 'MICHAEL', t: `[curious] Which rights are involved?` },
    { s: 'NALEDI', t: `[reasoning] At least three at once. Assembly, because a peaceful, unarmed protest is protected. Labour relations, because the complaint is about fair labour practice. And freedom of expression, because the workers are voicing a grievance, not committing a crime. Management can set sensible conditions about when and where, for safety reasons. What it can't do is simply ban the protest because it's inconvenient.` },
    { s: 'MICHAEL', t: `[realising] So the rights don't cancel each other out. They stack up in a real situation.` },
    { s: 'NALEDI', t: `[pleased] That's the mindset to keep through this whole topic. One workplace scenario rarely tests just one right.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! The Bill of Rights in the Constitution is the foundation, and it covers juristic persons like businesses and trade unions as well as individuals. The workplace rights fall into groups: equality and dignity, freedom from exploitation and privacy, belief, expression and association, labour relations, environment, children and education, and the three procedural rights of access to information, just administrative action, and access to the courts.` },
    { s: 'NALEDI', t: `[warm, encouraging] Well done. Exam tip: if a scenario asks which right applies, look for more than one. Real situations often trigger two or three rights at once, and naming only one can leave marks on the table.` },
    { s: 'MICHAEL', t: `[confident] Look for more than one. Got it.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at where South Africa is most at risk of breaking these rights, according to a real, independent assessment.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 2,
  file: 'Episode 2 - Where South Africa Is Most at Risk',
  segs: [
    { s: 'AMELIA', t: `Episode 2: Where South Africa Is Most at Risk` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at where South Africa is most at risk of violating human rights, using a real, independent assessment.` },
    { s: 'MICHAEL', t: `[curious] Who did the assessment, and how seriously should we take it?` },
    { s: 'NALEDI', t: `[clear] A Country Risk Assessment by the Danish Institute for Human Rights pinpointed where South Africa is exposed to human rights violations. It's independent and serious work. It sorts its findings into high-risk and medium-risk areas. It's worth understanding both, because they show where these rights can be threatened in a South African context.` },
    { s: 'MICHAEL', t: `[curious] Start with high-risk. What's at the top?` },
    { s: 'NALEDI', t: `[serious] Freedom from discrimination. South Africa has made real progress since apartheid, but discrimination in business still hits black people, women, migrant workers, indigenous peoples, people living with HIV or Aids, and gay people. That's the honest starting point for much of this topic.` },
    { s: 'MICHAEL', t: `[curious] Second?` },
    { s: 'NALEDI', t: `[thoughtful] The right to own property, especially land redistribution and restitution, which means returning land to its rightful owners. That process is still unresolved in many parts of the country.` },
    { s: 'MICHAEL', t: `[curious] Third?` },
    { s: 'NALEDI', t: `[clear] The right to work under just and favourable conditions. Even with plenty of labour law, workers' rights remain a problem, especially in the informal sector and for contract migrant workers. Mineworkers are a commonly cited example.` },
    { s: 'MICHAEL', t: `[curious] Fourth?` },
    { s: 'NALEDI', t: `[serious] An adequate standard of living. The government's minimum wage is often not enforced, and where it is, it can be very low compared with the real cost of living.` },
    { s: 'MICHAEL', t: `[curious] Fifth?` },
    { s: 'NALEDI', t: `[concerned] The right to health. Businesses need stronger measures to protect contract migrant workers and workers living with HIV, Aids or TB. Health and safety more broadly is a concern, and so is environmental contamination linked to some industries.` },
    { s: 'MICHAEL', t: `[curious] Sixth?` },
    { s: 'NALEDI', t: `[steady] The right to adequate food. Businesses must make sure they don't contaminate water or food supplies, whether deliberately or through carelessness.` },
    { s: 'MICHAEL', t: `[curious] And seventh?` },
    { s: 'NALEDI', t: `[concerned] The right to education. Adult literacy is still a problem, and child labour and poor schooling in many rural areas continue to violate children's rights.` },
    { s: 'MICHAEL', t: `[curious] That's the high-risk list. What makes something medium-risk?` },
    { s: 'NALEDI', t: `[clear] A difference of degree, not of kind. These are real, documented concerns, assessed as somewhat less severe or less widespread. Let's go through them. First, the right to life, liberty and security. Violent crime and human trafficking affect a great many people.` },
    { s: 'MICHAEL', t: `[curious] Second?` },
    { s: 'NALEDI', t: `[serious] Freedom from forced labour and servitude. The conditions some farm workers face, and the "dop" system, where workers are partly paid in alcohol instead of a proper wage, threaten this right.` },
    { s: 'MICHAEL', t: `[curious] Third?` },
    { s: 'NALEDI', t: `[careful] The right to privacy, especially protecting a worker's HIV status from being exposed or misused.` },
    { s: 'MICHAEL', t: `[curious] Fourth?` },
    { s: 'NALEDI', t: `[thoughtful] Family life. Laws protect it, but enforcement is uneven, and workers in the informal sector are the most likely to slip through the gaps.` },
    { s: 'MICHAEL', t: `[curious] Fifth?` },
    { s: 'NALEDI', t: `[measured] Participation in government. It's flagged because high levels of corruption undermine genuine participation.` },
    { s: 'MICHAEL', t: `[curious] Sixth?` },
    { s: 'NALEDI', t: `[clear] Peaceful assembly and freedom of association. Laws exist, but unfair dismissals remain an issue, and in some cases force has been used against striking workers.` },
    { s: 'MICHAEL', t: `[curious] Seventh?` },
    { s: 'NALEDI', t: `[concerned] Adequate housing. The ongoing housing shortage makes life hard for employees and the wider communities they live in.` },
    { s: 'MICHAEL', t: `[curious] Eighth?` },
    { s: 'NALEDI', t: `[thoughtful] Participation in cultural life. South Africa is hugely diverse, which means some groups can be sidelined. Indigenous groups like the Khoi-San are the example most often given.` },
    { s: 'MICHAEL', t: `[curious] And the ninth?` },
    { s: 'NALEDI', t: `[steady] Intellectual property. Laws exist, but indigenous people's knowledge is at particular risk of being used without recognition or a share of the benefits.` },
    { s: 'MICHAEL', t: `[curious] Two terms came up that I'd like to pin down.` },
    { s: 'NALEDI', t: `[clear] The "dop" system means paying farm workers partly in alcohol instead of fair wages. And diversity, in its simplest sense, means variety. Both come back later in this series, so lock them in now.` },
    { s: 'MICHAEL', t: `[playful] Let's test this with a scenario that could sit in either category.` },
    { s: 'NALEDI', t: `[storytelling] Good, because the distinction matters. Picture Green Acres Produce, a fruit farm. Seasonal workers say part of their pay sometimes comes as alcohol instead of cash, and the housing on the farm is badly overcrowded.` },
    { s: 'MICHAEL', t: `[curious] Which risk areas does that touch?` },
    { s: 'NALEDI', t: `[reasoning] Two medium-risk areas directly. Forced labour and servitude, because of the "dop"-style payment, and adequate housing, because of the overcrowding. But it's also worth asking whether it touches the high-risk area of an adequate standard of living, since paying partly in alcohol can undercut the minimum wage.` },
    { s: 'MICHAEL', t: `[realising] So one scenario can straddle both categories.` },
    { s: 'NALEDI', t: `[pleased] Exactly. That's why scenario questions on this material reward you for tracing every risk area a situation touches, not just the most obvious one.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! The Danish Institute for Human Rights identified seven high-risk areas: freedom from discrimination, the right to own property, the right to work under just conditions, an adequate standard of living, the right to health, adequate food, and education. It also named nine medium-risk areas: life and security, freedom from forced labour including the "dop" system, privacy, family life, participation in government, peaceful assembly, adequate housing, cultural life, and intellectual property.` },
    { s: 'NALEDI', t: `[warm] Well done. Study tip: use these risk areas to practise linking a real situation to the human right it affects, instead of memorising the lists without understanding them.` },
    { s: 'MICHAEL', t: `[confident] Understand the reasoning, not just the list.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we move into the workplace itself: the real difference between diversity and inclusivity.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 3,
  file: 'Episode 3 - Diversity Isnt the Same as Inclusion',
  segs: [
    { s: 'AMELIA', t: `Episode 3: Diversity Isn't the Same as Inclusion` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we move from constitutional rights into the workplace itself, with two words people often treat as the same thing, though they're not: diversity and inclusivity.` },
    { s: 'MICHAEL', t: `[curious] Let's start simple. What does diversity actually mean?` },
    { s: 'NALEDI', t: `[clear] In its simplest sense, variety. In a workplace, it means the staff include different groups: people of different races, classes and genders, with different physical and mental abilities, spiritual practices, and other characteristics.` },
    { s: 'MICHAEL', t: `[playful] So if the company staff photo looks varied, diversity is sorted?` },
    { s: 'NALEDI', t: `[knowing] That's exactly the trap this distinction is meant to catch. Diversity and inclusivity don't necessarily mean the same thing. To become truly inclusive, a business has to do far more than notice that its people are different and employ enough people from each group. It has to value those differences, actively work against discrimination, and genuinely promote inclusion.` },
    { s: 'MICHAEL', t: `[curious] So diversity can exist on paper without inclusivity in practice?` },
    { s: 'NALEDI', t: `[serious] Exactly. You can have a varied staff list and still run a workplace where people don't feel they belong, don't get equal opportunities, or face quiet discrimination. That's why managers need real skills to build a successful diverse team, not just a diverse headcount.` },
    { s: 'MICHAEL', t: `[curious] What does this look like in South Africa specifically?` },
    { s: 'NALEDI', t: `[thoughtful] At this stage, it mainly means giving equal employment opportunities to people who were previously shut out of the economy because of poverty, race, gender, language, age, disability and other factors. Broad-Based Black Economic Empowerment has put particular weight on employing people of different races and cultures, and religious and gender diversity have also been high priorities.` },
    { s: 'MICHAEL', t: `[curious] You mentioned poverty as one of those factors. Is it its own topic here?` },
    { s: 'NALEDI', t: `[clear] It is, and it's worth understanding properly. Absolute poverty means not being able to meet your most basic needs for survival. Someone is extremely poor if they can't afford food, water and shelter. But poverty also shows up in less extreme forms, where people can't meet basic living needs like proper housing instead of a shack or single room, clean running water, a flush toilet, electricity, transport, education and basic health care.` },
    { s: 'MICHAEL', t: `[curious] What causes it?` },
    { s: 'NALEDI', t: `[counting them off] Four main causes. High unemployment, low skills, poor education, and a lack of access to services. Notice how they feed each other. Poor education limits skills, low skills limit jobs, and both limit access to services.` },
    { s: 'MICHAEL', t: `[curious] How does this connect to business, rather than just being a social issue?` },
    { s: 'NALEDI', t: `[steady] Directly. Crime, unrest and strikes hit businesses, and widespread poverty is often part of what drives them. Government can't solve poverty alone. It needs the private sector involved.` },
    { s: 'MICHAEL', t: `[curious] Is there a self-interest angle too?` },
    { s: 'NALEDI', t: `[pleased] The same logic as with community upliftment. Businesses operate inside communities, usually employ people from the area around them, and often depend on those same people as customers. So helping to uplift that community is in the business's own interest, not purely charity.` },
    { s: 'MICHAEL', t: `[curious] Let's get precise about inclusivity. What's the definition?` },
    { s: 'NALEDI', t: `[clear] The word comes from "include." Inclusivity means giving everyone an equal opportunity. In practice that means not discriminating on the basis of race, gender, disability, age, sexual orientation, or HIV and Aids status. When a business hires, anyone who is willing and able to do the job, with the necessary qualifications, skills and experience, should be properly considered.` },
    { s: 'MICHAEL', t: `[curious] Does inclusivity go beyond hiring?` },
    { s: 'NALEDI', t: `[thoughtful] A good deal further. It aims at fair employment practices in general, and at teams where people from every background can genuinely work well together for the business's benefit, not just share a building.` },
    { s: 'MICHAEL', t: `[curious] Does South Africa's history change how this works here?` },
    { s: 'NALEDI', t: `[serious] Yes. Because of our diversity and our history, inclusivity is more complicated here than in many countries. Past discrimination was systemic, so some redress is needed. Businesses shouldn't exclude anyone from consideration, but they should also try to make their workforce broadly representative of the country's demographics.` },
    { s: 'MICHAEL', t: `[playful] Let's test the distinction with a scenario.` },
    { s: 'NALEDI', t: `[encouraging] Good idea, because students often blur the two terms. Picture Fairview Contact Centre, a customer service company. Its staff list is varied, with many races and ages and both genders well represented. But new hires report that certain cultural and religious practices are quietly discouraged, promotions informally favour one group, and people who raise concerns are told not to "make a fuss."` },
    { s: 'MICHAEL', t: `[curious] What's present, and what's missing?` },
    { s: 'NALEDI', t: `[reasoning] Diversity is clearly present, because the staff mix is varied. Inclusivity is missing. Nobody values the differences, there are informal barriers to promotion, and raising a concern is discouraged instead of welcomed. That's the classic gap between the two concepts.` },
    { s: 'MICHAEL', t: `[realising] So the fix isn't hiring more variety. It's changing what happens to the variety that's already there.` },
    { s: 'NALEDI', t: `[pleased] Exactly right, and it's the thread through the rest of this topic.` },
    { s: 'MICHAEL', t: `[curious] Can we practise spotting specific diversity issues? The exam asks for that.` },
    { s: 'NALEDI', t: `[encouraging] Yes. The issues to recognise are poverty, race, gender, language, age, culture or religion, and disability. Try these. At Karoo Dairy Co, a night-shift cleaner can't afford transport to a training session that's held in town. At Lakeside Tutoring, a notice board is written only in one language, so some staff miss updates. At Ridgeway Print Works, an experienced worker in her fifties is never invited to learn the new machines.` },
    { s: 'MICHAEL', t: `[reasoning] The first is poverty. The second is language. The third is age.` },
    { s: 'NALEDI', t: `[pleased] All three. And how could a business deal with each one?` },
    { s: 'MICHAEL', t: `[thoughtful] For poverty, cover transport costs or hold training on site. For language, use notices in the main languages staff speak, or have a translator. For age, include older workers in training and keep their experience valued.` },
    { s: 'NALEDI', t: `[approving] Those are practical recommendations, which is what exam questions reward. The same approach works for race, gender, culture or religion, and disability: name the issue, then suggest a specific action.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Diversity means variety in the workforce: different races, genders, abilities and backgrounds. Inclusivity means valuing those differences, working against discrimination, and ensuring real equal opportunity. A business can have one without the other. Poverty is the inability to meet basic needs, driven by unemployment, low skills, poor education and lack of access to services, and it connects to business self-interest through community upliftment. The diversity issues to recognise are poverty, race, gender, language, age, culture or religion, and disability, each paired with a practical action.` },
    { s: 'NALEDI', t: `[warm] Well put. Exam tip: when a scenario asks whether it shows diversity or inclusivity, check whether the issue is who is present, which is diversity, or how people are treated once they're there, which is inclusivity.` },
    { s: 'MICHAEL', t: `[confident] Who's present versus how they're treated.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at the laws that back up inclusivity, and a practical checklist for measuring how a business is doing.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 4,
  file: 'Episode 4 - The Laws That Make Inclusion Real',
  segs: [
    { s: 'AMELIA', t: `Episode 4: The Laws That Make Inclusion Real` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at the laws behind inclusivity, why a genuinely diverse workplace helps a business, and a practical checklist for measuring where a business really stands.` },
    { s: 'MICHAEL', t: `[curious] Let's start with the law. What pushes a business to take inclusivity seriously instead of treating it as a nice idea?` },
    { s: 'NALEDI', t: `[clear] Three pieces of legislation. The Employment Equity Act of 1998. The Promotion of Equality and Prevention of Unfair Discrimination Act of 2000. And the Preferential Procurement Policy Framework Act of 2000. Together, they support inclusivity and transformation through employment, equality and public procurement.` },
    { s: 'MICHAEL', t: `[curious] Is there a business case for this, beyond compliance?` },
    { s: 'NALEDI', t: `[thoughtful] A real one. Businesses are finding that once they have a good inclusivity policy and teach staff to accept diversity, they become more competitive. A team with different outlooks on the world is better placed to spot new opportunities and markets and to reach them in the right way.` },
    { s: 'MICHAEL', t: `[curious] Is that a general claim, or is there something more specific behind it?` },
    { s: 'NALEDI', t: `[clear] There's something specific. Organisations keep changing into a rich mix of races and cultures, but people often forget that individuals within each group also differ in how they approach their work, and in their thoughts, feelings, opinions and ideas. Those personal differences can be a real asset, because they spark debate about better ways to do things and can take a business to new heights.` },
    { s: 'MICHAEL', t: `[curious] Does that help with understanding customers, not just solving problems inside?` },
    { s: 'NALEDI', t: `[pleased] Directly. People in a diverse workforce represent the groups they come from, so they're better placed to recognise and meet the needs of customers from those same groups. A uniform workforce could easily miss that.` },
    { s: 'MICHAEL', t: `[curious] So how does a business check whether it's living up to all this, instead of assuming it is?` },
    { s: 'NALEDI', t: `[clear] With a diversity checklist. It has seven criteria, each with its own questions, and a four-point scale: four for "always," three for "usually," two for "sometimes," and one for "seldom."` },
    { s: 'MICHAEL', t: `[eager] Walk me through the seven.` },
    { s: 'NALEDI', t: `[counting them off] First, employment statistics. Does the workplace resemble the communities it operates in? Does the hiring strategy make room for diversity? Second, equal opportunity employment. Do workers understand the recruitment and hiring process? Is it transparent? Are there mentoring programmes?` },
    { s: 'MICHAEL', t: `[curious] Third and fourth?` },
    { s: 'NALEDI', t: `[clear] Third, diversity training in the workplace. Is the workplace attractive to all groups? Do employees feel they truly belong, not just that they're tolerated? Fourth, benefits for employees. Are cultural and religious days respected? Can staff find suitable food at work?` },
    { s: 'MICHAEL', t: `[curious] Fifth?` },
    { s: 'NALEDI', t: `[steady] Communication strategies. Are employees told how the business really works? Are advancement opportunities clearly stated? Are there real chances for workers to discuss workplace issues openly?` },
    { s: 'MICHAEL', t: `[curious] Sixth?` },
    { s: 'NALEDI', t: `[serious] Security issues, which is broader than it sounds. Is physical safety assured? Do employees feel safe to speak up? Can everyone give and receive feedback, speak and listen, without feeling threatened?` },
    { s: 'MICHAEL', t: `[curious] And seventh?` },
    { s: 'NALEDI', t: `[thoughtful] Respect for individual differences. Do managers and workers get real chances to examine their own prejudices? Are diversity courses developed, delivered and maintained, with ongoing training and not a single once-off session?` },
    { s: 'MICHAEL', t: `[impressed] That's more searching than I expected. It's not just a headcount audit.` },
    { s: 'NALEDI', t: `[pleased] That's the point. It pushes a business to look past the surface number and ask whether inclusion is real, criterion by criterion.` },
    { s: 'MICHAEL', t: `[curious] How would a business score itself honestly?` },
    { s: 'NALEDI', t: `[honest] That's the harder part. Picture Meadowbrook Hotels, a hospitality group scoring itself for the first time. Where would it get the information to score each criterion honestly, instead of guessing?` },
    { s: 'MICHAEL', t: `[reasoning] I'd use HR records and staff demographic data for employment statistics. Anonymous surveys or exit interviews to find out whether people feel they belong or feel safe speaking up. Government census data as a benchmark for whether the workforce reflects the surrounding community. And grievance records for security and respect, since those show real incidents, not just opinions.` },
    { s: 'NALEDI', t: `[approving] That's a layered answer. You named specific sources instead of a vague "ask the staff." Different criteria need different evidence.` },
    { s: 'MICHAEL', t: `[curious] Is honest scoring hard for a business?` },
    { s: 'NALEDI', t: `[candid] It can be, which is why outside evidence like surveys and grievance records matters. A business that scores itself from management's impression alone, without real staff data, risks marking itself generously on exactly the criteria where it's weakest.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Three laws support inclusivity in South Africa: the Employment Equity Act, the Promotion of Equality and Prevention of Unfair Discrimination Act, and the Preferential Procurement Policy Framework Act. A diverse workplace helps a business through better problem-solving and stronger insight into customers. And the seven-criterion checklist gives it a structured, honest way to measure: employment statistics, equal opportunity employment, diversity training, benefits for employees, communication strategies, security issues, and respect for individual differences.` },
    { s: 'NALEDI', t: `[warm] Thorough. Exam tip: if you're asked to name sources of information for assessing diversity, match the source to the criterion instead of giving one generic answer for all seven. Examiners reward matching the evidence to what is being measured.` },
    { s: 'MICHAEL', t: `[confident] Match the source to the criterion.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at physical safety: what the law requires to keep people safe at work.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 5,
  file: 'Episode 5 - Keeping People Safe at Work',
  segs: [
    { s: 'AMELIA', t: `Episode 5: Keeping People Safe at Work` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we shift from inclusion to physical safety: the legal duties that employers and workers each carry, and where those duties come from.` },
    { s: 'MICHAEL', t: `[curious] Is safety at work really a human rights issue, or a separate legal category?` },
    { s: 'NALEDI', t: `[clear] At its root, it's a human rights issue. Protecting people's health from the harmful effects of an unsuitable environment is one of the fundamental rights in the Bill of Rights. The same idea extends to the environment, for example by controlling harmful products used in manufacturing.` },
    { s: 'MICHAEL', t: `[curious] Which law turns that principle into concrete workplace rules?` },
    { s: 'NALEDI', t: `[steady] The Occupational Health and Safety Act of 1993. Its main purpose is the health and safety of people at work, and people affected by the use of plant and machinery. Anywhere someone's physical safety is on the line because of their job.` },
    { s: 'MICHAEL', t: `[curious] Let's begin with what it demands of employers.` },
    { s: 'NALEDI', t: `[serious] A long list of duties. Employers must provide and maintain the equipment needed to do the work and keep systems in a condition that doesn't harm workers' health and safety. They must do everything they can to remove or reduce dangers, and only when that has failed should protective clothing be issued as a fallback.` },
    { s: 'MICHAEL', t: `[surprised] So protective gear isn't the first line of defence?` },
    { s: 'NALEDI', t: `[emphatic] The opposite of what many people assume. Removing or reducing the danger comes first. Protective equipment is what you use when that has been genuinely exhausted. It's not a substitute.` },
    { s: 'MICHAEL', t: `[curious] What else falls on the employer?` },
    { s: 'NALEDI', t: `[clear] Making sure workers' health and safety isn't harmed by hazards in producing, processing, using, handling, storing or transporting materials or equipment. Employers must know where the dangers are and take real steps to remove or limit the harm, not wait until after an accident.` },
    { s: 'MICHAEL', t: `[curious] And the people side?` },
    { s: 'NALEDI', t: `[steady] Workers must be informed, instructed, trained and supervised so that dangers to them are limited. And machinery should be operated under a designated worker, someone specifically given that responsibility and trained for it.` },
    { s: 'MICHAEL', t: `[curious] Now flip it. What does the Act require of workers?` },
    { s: 'NALEDI', t: `[clear] Workers carry real responsibility too, not just protection. They must look after their own health and safety and that of others who could be affected by their carelessness. They must cooperate and comply with rules and procedures, wear the required safety clothing, and use the required safety equipment. They must flag anything unsafe or unhealthy, and tell the employer about any accident before that shift ends.` },
    { s: 'MICHAEL', t: `[curious] That last one is oddly specific. Why the end of the shift?` },
    { s: 'NALEDI', t: `[thoughtful] Because late reporting undermines the whole system. An accident or hazard reported days later is much harder to investigate, and other workers stay exposed to the same risk in the meantime.` },
    { s: 'MICHAEL', t: `[curious] Do workers have rights under this Act too?` },
    { s: 'NALEDI', t: `[warm] They do, and they matter just as much. Workers have the right to be told about the Act itself, the workplace rules and procedures, and the standards that apply. If the employer doesn't provide this, workers can ask for it, together with information about the hazards, the precautions to take, and what to do if they're exposed to harmful substances.` },
    { s: 'MICHAEL', t: `[realising] So it's not passive. Workers can push for information instead of waiting to be told.` },
    { s: 'NALEDI', t: `[agreeing] Right, and that matters most where induction or training has been rushed or incomplete.` },
    { s: 'MICHAEL', t: `[playful] Let's test the employer-versus-worker split on a scenario.` },
    { s: 'NALEDI', t: `[storytelling] Good idea. Picture Silver Creek Engineering, a small manufacturing operation. A new machine arrives. Management installs it and puts it to work the same week, but the safety guard for the moving parts hasn't arrived from the supplier yet. A worker is told to just "be careful" and get on with it.` },
    { s: 'MICHAEL', t: `[curious] Where does the legal responsibility sit?` },
    { s: 'NALEDI', t: `[firm] Squarely with the employer. The danger should have been removed or reduced first, which means the machine shouldn't have been used without its guard. And equipment should be used under a properly trained designated worker, not handed over with a verbal warning.` },
    { s: 'MICHAEL', t: `[curious] Does the worker carry any responsibility, or is it all on management?` },
    { s: 'NALEDI', t: `[fair-minded] The worker still has a duty to report the unsafe condition, the missing guard, and not simply carry on. But the main failure here is the employer's, because the core duty to remove the danger before it reaches a worker was skipped.` },
    { s: 'MICHAEL', t: `[reflective] So even if the worker had used the machine without complaint, that wouldn't let management off.` },
    { s: 'NALEDI', t: `[pleased] Right. The worker's duty to report doesn't transfer the employer's core duty onto the worker. The two obligations run side by side, and neither replaces the other.` },
    { s: 'MICHAEL', t: `[curious] Beyond following the Act, what can a business do to protect the environment and people's health?` },
    { s: 'NALEDI', t: `[clear] Quite a lot, and exams ask you to suggest strategies. A business can reduce and recycle waste, treat or safely dispose of pollutants, use cleaner or less harmful materials, save water and electricity, store and label hazardous substances properly, and train staff in environmental awareness. It can also run health programmes, like screening days and counselling, and keep the workplace clean and well ventilated.` },
    { s: 'MICHAEL', t: `[playful] Let's apply that.` },
    { s: 'NALEDI', t: `[storytelling] Picture Tidewater Paints, a small factory. Solvent fumes build up in the mixing room, and leftover paint is poured down a drain behind the building. What would you recommend?` },
    { s: 'MICHAEL', t: `[reasoning] Fit proper ventilation and extraction in the mixing room, and provide protective equipment only as a fallback. Collect leftover paint and have it disposed of by a licensed handler. Label and store the solvents safely, and train staff on handling them.` },
    { s: 'NALEDI', t: `[pleased] Strong. You covered both the environment and human health. That links to another right the exam names: safety, security and protection of life. In a workplace, it means safe premises, protection from violence, secure access, and emergency plans.` },
    { s: 'MICHAEL', t: `[thoughtful] So a night guard, fire exits that actually open, and an evacuation drill all count.` },
    { s: 'NALEDI', t: `[approving] Exactly.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Workplace safety is rooted in the Bill of Rights and made concrete through the Occupational Health and Safety Act of 1993. Employers must provide safe equipment, remove or reduce danger before turning to protective clothing, know where the risks are, and make sure workers are trained and supervised, including through a designated worker. Workers must protect themselves and others, follow rules, use safety equipment, and report hazards and accidents promptly. And workers have a clear right to be informed about the Act, the hazards, and the safety procedures. Businesses can go further with strategies like waste reduction, safe disposal, cleaner materials and health programmes, and they must protect safety, security and life.` },
    { s: 'NALEDI', t: `[warm] Solid. Exam tip: when a scenario shows a workplace accident, name the employer's duty and the worker's duty separately. Even when one side clearly failed more, examiners usually want both addressed.` },
    { s: 'MICHAEL', t: `[confident] Both sides, every time.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at how safety is monitored day to day: health and safety representatives, and when a formal committee is required.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 6,
  file: 'Episode 6 - When Someone Has to Watch the Watchers',
  segs: [
    { s: 'AMELIA', t: `Episode 6: When Someone Has to Watch the Watchers` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at who keeps an eye on workplace safety day to day, and the exact numbers a business needs to know.` },
    { s: 'MICHAEL', t: `[curious] So there's a proper role for this, not just everyone being generally careful?` },
    { s: 'NALEDI', t: `[clear] Yes: health and safety representatives. They're employees who are nominated or elected, and once the employer and workers agree on who it will be, that person is told of their appointment in writing.` },
    { s: 'MICHAEL', t: `[curious] What do they actually do once appointed?` },
    { s: 'NALEDI', t: `[steady] Their duties are performed during working hours, not squeezed in unpaid on the side. They check whether the safety measures already in place are working, spot potential dangers before they cause harm, and, together with the employer, investigate incidents and complaints workers raise about health and safety.` },
    { s: 'MICHAEL', t: `[curious] Is one representative enough for any size of workplace, or does the number grow?` },
    { s: 'NALEDI', t: `[clear] It grows, and the ratios are worth knowing precisely. Once an employer has more than twenty employees at a workplace, it must designate health and safety representatives. In shops and offices, that's at least one for every hundred employees, or part of a hundred. In all other workplaces, it's at least one for every fifty employees, or part of fifty.` },
    { s: 'MICHAEL', t: `[curious] Can you make that concrete?` },
    { s: 'NALEDI', t: `[patient] For shops and offices, twenty-one to a hundred employees needs at least one representative, and a hundred and one to two hundred needs at least two. In other workplaces, twenty-one to fifty needs one, and fifty-one to a hundred needs two. "Or part thereof" means you round up.` },
    { s: 'MICHAEL', t: `[curious] When does one person stop being enough, structurally?` },
    { s: 'NALEDI', t: `[clear] Once there are two or more representatives, a Health and Safety Committee must be established. Its members meet to initiate, promote, maintain and review the measures that protect workers' health and safety. That's more formal and structured than one person working alone.` },
    { s: 'MICHAEL', t: `[playful] Let's run the numbers on a scenario.` },
    { s: 'NALEDI', t: `[encouraging] Good idea, because it makes the legal rule concrete. Picture Dlamini and Sons Construction, with a hundred and thirty employees on one site. How many health and safety representatives does it legally need?` },
    { s: 'MICHAEL', t: `[reasoning] The rule for this type of workplace is one for every fifty workers, or part thereof. A hundred and thirty divided by fifty is two point six, which rounds up, so three representatives.` },
    { s: 'NALEDI', t: `[approving] Exactly right — 130 workers in this type of workplace requires three representatives. Now, does a Health and Safety Committee need to exist, and how should it work?` },
    { s: 'MICHAEL', t: `[confident] Yes. With two or more representatives, and here there are three, a committee is required. The representatives meet regularly to start new safety measures, promote awareness of them among staff, maintain the ones already in place, and review whether they're actually working instead of assuming they are.` },
    { s: 'NALEDI', t: `[pleased] That's a complete answer: the correct number, the trigger condition, and a real description of what the committee does, not just its name.` },
    { s: 'MICHAEL', t: `[curious] Could a business be tempted to appoint too few, to avoid the disruption?` },
    { s: 'NALEDI', t: `[serious] That temptation is exactly why the ratio is fixed in law. Appointing too few isn't just a weak policy. It puts the business in breach of the Act, and it weakens the whole safety system, since fewer representatives means fewer people checking, identifying and investigating.` },
    { s: 'MICHAEL', t: `[curious] Should a business go beyond the legal minimum?` },
    { s: 'NALEDI', t: `[thoughtful] The minimum is a floor, not a ceiling. A safety-conscious business might appoint representatives ahead of headcount growth instead of waiting to cross a threshold, and keep written records of committee reviews. Documentation protects workers and the business if an inspection or dispute comes later.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Health and safety representatives are employees who are nominated or elected and appointed in writing, and their duties happen during working hours: checking effectiveness, identifying danger and investigating incidents. They're required once a workplace has more than twenty employees, with at least one per hundred or part thereof in shops and offices, and one per fifty or part thereof in other workplaces. With two or more representatives, a Health and Safety Committee is required to initiate, promote, maintain and review safety measures.` },
    { s: 'NALEDI', t: `[warm] Precise and thorough. Exam tip: know the role of health and safety representatives, and remember that a Health and Safety Committee is required once there are two or more representatives.` },
    { s: 'MICHAEL', t: `[confident] Know the role and the committee trigger. Got it.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at inequality, dignity, and the four forms discrimination takes in a real workplace.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 7,
  file: 'Episode 7 - Equality, Dignity, and Four Kinds of Discrimination',
  segs: [
    { s: 'AMELIA', t: `Episode 7: Equality, Dignity, and Four Kinds of Discrimination` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at inequality, what some businesses do about it, and the four forms discrimination takes at work.` },
    { s: 'MICHAEL', t: `[curious] Start with the basics. What is inequality?` },
    { s: 'NALEDI', t: `[clear] The unequal distribution of income and assets, meaning possessions, between individuals and groups in a country. And by international comparison, South Africa ranks among the most unequal countries for income.` },
    { s: 'MICHAEL', t: `[curious] Is that tied to poverty, or a separate issue?` },
    { s: 'NALEDI', t: `[thoughtful] Closely tied, as cause and effect. Extreme inequality is a major cause of poverty, because a small number of people hold most of the money while the rest get little or none.` },
    { s: 'MICHAEL', t: `[curious] Has government tried to tackle it?` },
    { s: 'NALEDI', t: `[measured] Broad-Based Black Economic Empowerment, or B-BBEE, is one attempt to address the inequality inherited from apartheid. It's also fair to say that its results are debated. Many argue that a relatively small number of people have gained a great deal while most remain poor.` },
    { s: 'MICHAEL', t: `[surprised] That's a candid thing to say about a policy meant to fix exactly this.` },
    { s: 'NALEDI', t: `[steady] It's a useful nuance, so don't assume the policy simply solved what it set out to solve. Some businesses go further by building a work culture that offers real equal opportunity regardless of difference.` },
    { s: 'MICHAEL', t: `[curious] What does that look like in practice?` },
    { s: 'NALEDI', t: `[clear] Small, practical things. Ramps for wheelchair access. A quiet room for prayer. Flexible hours so working mothers can manage both roles.` },
    { s: 'MICHAEL', t: `[thoughtful] None of that sounds complicated or expensive.` },
    { s: 'NALEDI', t: `[pleased] That's the point. Real inclusion often comes down to practical accommodations, not sweeping programmes. A workplace brings together people who may share nothing but their jobs, and most employees get along well, setting personal and cultural differences aside.` },
    { s: 'MICHAEL', t: `[curious] But not always?` },
    { s: 'NALEDI', t: `[serious] Not always. Sometimes people clash, and that can turn into unacceptable behaviour. That's where the four types of discrimination come in.` },
    { s: 'MICHAEL', t: `[eager] Take me through them.` },
    { s: 'NALEDI', t: `[counting them off] First, direct discrimination. It's open and obvious. A job advert saying "no disabled applicants" leaves no room for doubt.` },
    { s: 'MICHAEL', t: `[curious] Second?` },
    { s: 'NALEDI', t: `[thoughtful] Indirect discrimination, which is subtler because it doesn't announce itself. A rule applies to everyone equally on paper but disadvantages one group in practice. For example, requiring every applicant to write a test in a language the job doesn't actually need.` },
    { s: 'MICHAEL', t: `[curious] Third?` },
    { s: 'NALEDI', t: `[serious] Harassment: jokes about particular groups, physical abuse or threats of violence. Unlike indirect discrimination, this involves unacceptable behaviour directed at people rather than a seemingly neutral workplace rule.` },
    { s: 'MICHAEL', t: `[curious] And fourth?` },
    { s: 'NALEDI', t: `[firm] Victimisation: making life difficult for someone who complains about their treatment, or for someone who supports that person. It's about retaliation, which makes it different from the original discriminatory act.` },
    { s: 'MICHAEL', t: `[curious] Why does it matter beyond being unfair?` },
    { s: 'NALEDI', t: `[serious] Because it violates a person's dignity and signals real disrespect. Victims can suffer personal stress and financial hardship. It has a human cost.` },
    { s: 'MICHAEL', t: `[curious] Is discrimination always deliberate?` },
    { s: 'NALEDI', t: `[thoughtful] No. Sometimes the behaviour is unintentional, or the affected person is dismissed as "too sensitive." Sometimes a business's own rules produce discrimination without anyone designing them that way. It can be open or hidden, which maps neatly onto direct versus indirect.` },
    { s: 'MICHAEL', t: `[playful] Let's classify some situations.` },
    { s: 'NALEDI', t: `[encouraging] Good, because that's the skill being tested. Picture Amandla Textiles, a clothing manufacturer. Someone there spreads false rumours to discredit a colleague. What type is that?` },
    { s: 'MICHAEL', t: `[reasoning] Closest to harassment, since it's a targeted personal act meant to damage someone. If it was retaliation for something the colleague said or did, it could edge toward victimisation.` },
    { s: 'NALEDI', t: `[approving] Good reasoning. Next: Amandla Textiles requires every applicant to pass a language test in a language the job doesn't need, and this disadvantages certain ethnic groups.` },
    { s: 'MICHAEL', t: `[confident] Indirect discrimination. The rule looks neutral because everyone takes the same test, but in practice it disadvantages one group.` },
    { s: 'NALEDI', t: `[pleased] Exactly. And a colleague who reported unsafe conditions is now being excluded from team meetings and key decisions.` },
    { s: 'MICHAEL', t: `[certain] Victimisation. It's retaliation for raising a complaint.` },
    { s: 'NALEDI', t: `[warm] That's the reasoning examiners want: not just naming a category, but explaining why the facts point there instead of to a neighbouring one.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Inequality is the unequal distribution of income and assets, and it drives poverty. B-BBEE is one response to apartheid-era inequality, though its results are debated. Businesses can create real equal opportunity through practical steps like ramps, prayer spaces and flexible hours. And discrimination takes four forms: direct, which is open; indirect, hidden inside a neutral-looking rule; harassment, including offensive jokes, physical abuse or threats of violence; and victimisation, which is retaliation against someone who complained.` },
    { s: 'NALEDI', t: `[warm] Excellent. Exam tip: when classifying behaviour, check for a retaliation angle first. If someone is targeted because they complained or supported a complainant, it's victimisation, even if the behaviour looks like harassment on the surface.` },
    { s: 'MICHAEL', t: `[confident] Check for retaliation first.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we complete the rights picture with labour law, religion, culture and dignity.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 8,
  file: 'Episode 8 - The Rights That Round Out the Picture',
  segs: [
    { s: 'AMELIA', t: `Episode 8: The Rights That Round Out the Picture` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we complete the rights picture: the economic rights that labour law makes enforceable, and the social and cultural rights that protect who people are at work.` },
    { s: 'MICHAEL', t: `[curious] Labour relations came up earlier. What more is there on the economic side?` },
    { s: 'NALEDI', t: `[clear] A key point. The economic rights in the Bill of Rights are deliberately general. They don't spell out how they'll be protected or enforced, so specific legislation steps in to give them real effect.` },
    { s: 'MICHAEL', t: `[curious] Which legislation?` },
    { s: 'NALEDI', t: `[steady] The Labour Relations Act, Act 66 of 1995. It protects economic rights through the labour rights in Section 23 of the Constitution. It confirms that everyone has the right to fair labour practices, that employees and trade unions may organise and bargain collectively, that employees may join a trade union of their choice, which links to freedom of association, and that employees may strike.` },
    { s: 'MICHAEL', t: `[thoughtful] So the Constitution sets the principle, and the Act makes it enforceable.` },
    { s: 'NALEDI', t: `[pleased] Exactly, and it's a pattern worth spotting: a broad constitutional right, then a specific Act that puts it into practice. The Occupational Health and Safety Act works the same way for workplace safety.` },
    { s: 'MICHAEL', t: `[curious] Now the social and cultural side.` },
    { s: 'NALEDI', t: `[clear] A cluster of rights. Section 9 says nobody may be unfairly discriminated against. Section 22 protects every citizen's right to choose their trade, occupation or profession freely. Section 10 protects human dignity — in the workplace, that means people should be treated with respect, including respect for their culture, language, religion and beliefs. Section 15 separately protects freedom of religion, belief and opinion.` },
    { s: 'MICHAEL', t: `[curious] Tell me more about Section 15.` },
    { s: 'NALEDI', t: `[steady] Everyone has the right to freedom of religion, belief and opinion. It also sets guidelines for religious observances in state or state-aided institutions.` },
    { s: 'MICHAEL', t: `[curious] What counts as an observance?` },
    { s: 'NALEDI', t: `[clear] Religious customs, ceremonies or practices. There's an important condition: they should follow rules made by the appropriate public authorities, and attendance must be voluntary and free. Nobody can be forced to attend.` },
    { s: 'MICHAEL', t: `[curious] How does that work in a private business?` },
    { s: 'NALEDI', t: `[thoughtful] The same principle carries across. A business can make room for prayer time or cultural observance, but it can never make participation compulsory for someone who doesn't share the belief.` },
    { s: 'MICHAEL', t: `[playful] Let's test this on a scenario with several rights at once.` },
    { s: 'NALEDI', t: `[encouraging] Good idea, since that's how exam questions are usually built. Picture Coastal Freight Co, a logistics company. A manager schedules a compulsory all-staff meeting during one group's regular Friday prayer, and another employee is quietly told their braided hairstyle, tied to their cultural background, isn't "professional enough" for a client-facing role.` },
    { s: 'MICHAEL', t: `[curious] Which rights are in play?` },
    { s: 'NALEDI', t: `[reasoning] At least three. The meeting time touches freedom of religion under Section 15, because attendance shouldn't force someone to skip a genuine religious observance with no accommodation. The hairstyle comment touches human dignity under Section 10 because it concerns respect for cultural identity. And depending on how it's enforced, it could be indirect discrimination if the "professional" standard quietly disadvantages one cultural group.` },
    { s: 'MICHAEL', t: `[curious] What should the company do differently?` },
    { s: 'NALEDI', t: `[practical] Reschedule the meeting, or offer a genuine alternative, instead of treating the prayer slot as an inconvenience. And review the "professionalism" standard. If it's built around one cultural norm, rewrite it so it doesn't exclude others.` },
    { s: 'MICHAEL', t: `[curious] If you were interviewing someone about their own workplace, what would you ask?` },
    { s: 'NALEDI', t: `[reflective] Whether it accommodates their social and cultural rights in practice, not just on paper. Whether they've faced problems and how those were resolved. And which parts of their own culture or beliefs they'd want respected at work.` },
    { s: 'MICHAEL', t: `[thoughtful] That last one makes it personal.` },
    { s: 'NALEDI', t: `[warm] Deliberately. This topic sticks best when you connect it to something real: a workplace you've heard about, or your own idea of respectful treatment.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Economic rights in the Constitution are general, and the Labour Relations Act makes them enforceable: fair labour practice, collective bargaining, the right to join a union, and the right to strike. Social and cultural rights cover Section 9 against unfair discrimination, Section 22 for free choice of occupation, Section 10 for dignity, and Section 15 for freedom of religion, belief and opinion, with observances required to stay voluntary and free.` },
    { s: 'NALEDI', t: `[warm] Well done. Exam tip: when a question mentions a section of the Bill of Rights, pair it with its practical workplace meaning. A bare citation earns less than an applied explanation.` },
    { s: 'MICHAEL', t: `[confident] Pair the section with its meaning.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we pull every right together into one map, matched to what it means in a real workplace.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 9,
  file: 'Episode 9 - The Full Picture - Every Right, Every Implication',
  segs: [
    { s: 'AMELIA', t: `Episode 9: The Full Picture: Every Right, Every Implication` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we pull every right together and match each one to what it means inside a real workplace.` },
    { s: 'MICHAEL', t: `[eager] Where do we begin?` },
    { s: 'NALEDI', t: `[steady] The two foundations. Equality means fair employment practice and real protection from discrimination. Human dignity means respectful treatment of individuals and groups, not just in policy language but in how people are spoken to every day.` },
    { s: 'MICHAEL', t: `[curious] Next?` },
    { s: 'NALEDI', t: `[clear] Freedom from slavery means following the Basic Conditions of Employment Act, the legal floor under working conditions. Privacy means protecting a worker's correspondence, communication and personal information.` },
    { s: 'MICHAEL', t: `[curious] Religion and culture?` },
    { s: 'NALEDI', t: `[warm] Respect for beliefs, real opportunity for religious observance, sensible dress codes, and food accommodation.` },
    { s: 'MICHAEL', t: `[curious] Expression and assembly?` },
    { s: 'NALEDI', t: `[clear] Expression means being able to receive and share information and ideas. Assembly means peaceful, unarmed gathering, demonstration, picketing and protest.` },
    { s: 'MICHAEL', t: `[curious] Labour relations?` },
    { s: 'NALEDI', t: `[steady] Fair labour practice, trade unions, employers' organisations and collective bargaining.` },
    { s: 'MICHAEL', t: `[curious] Environment?` },
    { s: 'NALEDI', t: `[clear] A safe working environment, suitable conditions, prevention of pollution, and sustainable use of natural resources.` },
    { s: 'MICHAEL', t: `[curious] Children?` },
    { s: 'NALEDI', t: `[serious] No child labour under fifteen, only appropriate work where any work is allowed, and nothing that endangers a child's education or development.` },
    { s: 'MICHAEL', t: `[curious] Education?` },
    { s: 'NALEDI', t: `[clear] Workplace skills training, and Adult Basic Education and Training, or ABET. Access to education can be a workplace responsibility as well as a state one.` },
    { s: 'MICHAEL', t: `[curious] Access to information?` },
    { s: 'NALEDI', t: `[steady] Labour legislation that workers can actually get hold of, clear workplace rules, and proper warnings about dangerous substances.` },
    { s: 'MICHAEL', t: `[curious] Just administrative action?` },
    { s: 'NALEDI', t: `[clear] Acting lawfully and reasonably, following proper procedure, and giving written reasons for decisions like dismissal, so workers know why.` },
    { s: 'MICHAEL', t: `[curious] And access to the courts?` },
    { s: 'NALEDI', t: `[steady] The Commission for Conciliation, Mediation and Arbitration, the CCMA, along with the Labour Court and the Labour Appeal Court. That's the dispute-resolution machinery workers can turn to when something goes wrong.` },
    { s: 'MICHAEL', t: `[thoughtful] That's the whole list. A few terms are worth pinning down too.` },
    { s: 'NALEDI', t: `[clear] A juristic person is a community or association of people with an independent right of existence under the law, like a trade union or employers' association. Degradation means lowering the value of something, or destroying it. Diversity means variety. Poverty means being unable to meet your most basic survival needs.` },
    { s: 'MICHAEL', t: `[curious] And the rest?` },
    { s: 'NALEDI', t: `[counting them off] Inclusivity means including everyone and giving them an equal opportunity. Inequality is the unequal distribution of income and assets between individuals and groups. Socio-economic issues are problems that come from the interaction of people and finances. Infrastructure is the basic structures and facilities that society and business need, like roads, electricity, water and sanitation. The private sector means businesses run by private individuals, not government. And servitude means slavery, or forced labour used as punishment.` },
    { s: 'MICHAEL', t: `[curious] If you were advising a business owner, how would you use this map?` },
    { s: 'NALEDI', t: `[thoughtful] As an audit. Take each right and ask one question: where does this show up in how we actually operate, and can we point to something concrete, not just a policy statement? A business that can do that for all fourteen has really absorbed the topic.` },
    { s: 'MICHAEL', t: `[impressed] That's a practical use for everything so far.` },
    { s: 'NALEDI', t: `[pleased] And it's the skill the whole series builds towards: recognising rights the moment they appear inside a real situation.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Equality maps to fair practice, dignity to respectful treatment, freedom from slavery to the Basic Conditions of Employment Act, privacy to protected communication, religion and culture to real accommodation, expression and assembly to open communication and peaceful protest, labour relations to unions and bargaining, environment to safe conditions, children's rights to no child labour, education to skills training and ABET, access to information to clear rules and warnings, just administrative action to fair written process, and access to the courts to the CCMA and Labour Courts.` },
    { s: 'NALEDI', t: `[warm] Comprehensive. Exam tip: for a long answer asking you to explain workplace human rights with examples, work through this list in order. Completeness is what separates a strong answer from a partial one.` },
    { s: 'MICHAEL', t: `[confident] Work through the whole list.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, a bonus round: every definition, law and distinction, quizzed properly.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 10,
  file: 'Episode 10 - Bonus - Human Rights and Inclusivity Exam Revision Round-Up',
  segs: [
    { s: 'AMELIA', t: `Episode 10, Bonus: Human Rights and Inclusivity Exam Revision Round-Up` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to the bonus episode of The Business Brief! No new content here. This is exam mode.` },
    { s: 'MICHAEL', t: `[excited] I've been looking forward to this. Where do we start?` },
    { s: 'NALEDI', t: `[energetic] Quickfire definitions. I give the term, you give the meaning in one line.` },
    { s: 'MICHAEL', t: `[confident] Go.` },
    { s: 'NALEDI', t: `[crisp] Juristic person.` },
    { s: 'MICHAEL', t: `[confident] A community or association of people with an independent right of existence under the law, like a trade union or a registered company.` },
    { s: 'NALEDI', t: `[crisp] Diversity, then inclusivity.` },
    { s: 'MICHAEL', t: `[confident] Diversity is variety in the workforce. Inclusivity is actively giving everyone an equal opportunity, not just having them present.` },
    { s: 'NALEDI', t: `[crisp] Inequality.` },
    { s: 'MICHAEL', t: `[confident] The unequal distribution of income and assets between individuals and groups.` },
    { s: 'NALEDI', t: `[crisp] Designated worker.` },
    { s: 'MICHAEL', t: `[confident] A worker assigned a specific task or responsibility, under whose supervision equipment must be used.` },
    { s: 'NALEDI', t: `[pleased] Five for five. One more: the "dop" system.` },
    { s: 'MICHAEL', t: `[confident] Paying farm workers partly in alcohol instead of a proper wage.` },
    { s: 'NALEDI', t: `[warm] Perfect. Now multiple choice, exam style.` },
    { s: 'MICHAEL', t: `[ready] Ready.` },
    { s: 'NALEDI', t: `[clear] Workers complain the air is stale because no windows open. Which right is affected: labour relations, environment, freedom from forced labour, or privacy?` },
    { s: 'MICHAEL', t: `[confident] Environment. It's about a safe, healthy physical working environment.` },
    { s: 'NALEDI', t: `[approving] Correct. Next: a juristic person is best described as a health and safety representative, freedom of religious belief, equal opportunity employment, or a trade union?` },
    { s: 'MICHAEL', t: `[confident] A trade union.` },
    { s: 'NALEDI', t: `[approving] Right. One more: unwanted behaviour that violates a person's dignity or creates an offensive environment is called victimisation, direct discrimination, harassment, or indirect discrimination?` },
    { s: 'MICHAEL', t: `[confident] Harassment.` },
    { s: 'NALEDI', t: `[clear] Two more. A business notices that night-shift staff walk home in the dark and fear crime. Which right should it protect: safety, security and protection of life, information, privacy, or religion?` },
    { s: 'MICHAEL', t: `[confident] Safety, security and protection of life. A business could arrange safe transport or better lighting.` },
    { s: 'NALEDI', t: `[approving] Correct. And name two strategies a business could use to protect the environment and human health.` },
    { s: 'MICHAEL', t: `[thoughtful] Recycling waste and disposing of hazardous materials safely.` },
    { s: 'NALEDI', t: `[approving] Good. Either of those, or cleaner materials, would earn the marks.` },
    { s: 'NALEDI', t: `[pleased] Five for five. Now matching.` },
    { s: 'MICHAEL', t: `[eager] Go for it.` },
    { s: 'NALEDI', t: `[crisp] Health and safety committees.` },
    { s: 'MICHAEL', t: `[confident] Required under the Occupational Health and Safety Act once there are two or more representatives.` },
    { s: 'NALEDI', t: `[crisp] Access to information.` },
    { s: 'MICHAEL', t: `[confident] A right to information held by the state, or needed to protect your other rights.` },
    { s: 'NALEDI', t: `[crisp] The right to join a trade union.` },
    { s: 'MICHAEL', t: `[confident] Freedom of association.` },
    { s: 'NALEDI', t: `[crisp] Equal opportunities.` },
    { s: 'MICHAEL', t: `[thoughtful] Practical accommodations like wheelchair access, real steps towards inclusion.` },
    { s: 'NALEDI', t: `[pleased] Four for four. Fill in the blank: when you accept the unique individuality of each person, you accept their...` },
    { s: 'MICHAEL', t: `[confident] Diversity.` },
    { s: 'NALEDI', t: `[crisp] When you refuse to exclude anyone on grounds like race, gender, beliefs or sexual orientation, you practise...` },
    { s: 'MICHAEL', t: `[confident] Inclusivity.` },
    { s: 'NALEDI', t: `[crisp] And when you join a group of your choice, you exercise freedom of...` },
    { s: 'MICHAEL', t: `[confident] Association.` },
    { s: 'NALEDI', t: `[warm] Perfect. Now a debate-style question worth real marks. Discrimination in the workplace may be overt, meaning open, but often it is subtle, meaning hidden. Do you agree? Give reasons.` },
    { s: 'MICHAEL', t: `[thoughtful] I agree. Direct discrimination is the open kind, like a job advert that excludes a group. Indirect discrimination is hidden inside neutral-looking rules, like a language test the job doesn't need. Harassment and victimisation can be subtle too, especially when they build up gradually. So discrimination runs from completely open to very hard to spot.` },
    { s: 'NALEDI', t: `[approving] That scores well. Agreeing or disagreeing matters less than backing it up with the actual categories and an example for each side.` },
    { s: 'MICHAEL', t: `[curious] Now a full case study?` },
    { s: 'NALEDI', t: `[storytelling] Picture Northgate Logistics. Management puts up a canteen notice saying all workers must be tested for HIV, Aids and TB during a set week, and anyone testing positive will have their contract reviewed or terminated.` },
    { s: 'MICHAEL', t: `[concerned] That crosses several rights at once.` },
    { s: 'NALEDI', t: `[serious] It does, which is why it's a case study. First, can the business require the tests? Compulsory medical testing is heavily restricted. HIV testing by an employer is specifically prohibited unless the Labour Court determines that it is justifiable. Other medical testing, such as TB testing, may only be required where legislation permits or requires it, or where it is justifiable in light of medical facts, employment conditions or the inherent requirements of the job.` },
    { s: 'MICHAEL', t: `[curious] Can workers be dismissed for testing positive?` },
    { s: 'NALEDI', t: `[firm] Generally not for that alone. Dismissal on that basis would likely be unfair discrimination, because HIV, Aids or TB status doesn't by itself decide whether someone can do the job.` },
    { s: 'MICHAEL', t: `[curious] What should the business do instead if it has genuine safety concerns?` },
    { s: 'NALEDI', t: `[practical] Offer voluntary, confidential testing and counselling, provide support and access to treatment, adjust duties only where a genuine, specific safety risk exists, and protect confidentiality throughout instead of posting a public notice.` },
    { s: 'MICHAEL', t: `[curious] Why not just test people before hiring them?` },
    { s: 'NALEDI', t: `[clear] Pre-employment HIV testing is subject to the same specific restriction and requires Labour Court justification. Other pre-employment medical testing may only be used where it meets the general legal requirements for justified medical testing.` },
    { s: 'MICHAEL', t: `[realising] So the real test is whether you understand that health status and job capability are separate questions.` },
    { s: 'NALEDI', t: `[pleased] Exactly. The right question is never "what's their status?" It's "can they do the job, safely and fairly?"` },
    { s: 'MICHAEL', t: `[curious] One last long question to close.` },
    { s: 'NALEDI', t: `[encouraging] Go ahead.` },
    { s: 'MICHAEL', t: `[clear] Management asks you to assess the state of human rights at a business. Workers have complained that their rights around inclusivity, environmental issues and human rights generally aren't being honoured. Write a report on which human rights a workplace should respect, what each means in practice, and give examples.` },
    { s: 'NALEDI', t: `[steady] I'd work through every right systematically. Equality and dignity: fair practice and respectful treatment. Freedom from slavery and privacy: compliance with the Basic Conditions of Employment Act and protected communication. Religion and culture: prayer space and sensible dress codes. Expression and assembly: open communication and peaceful protest. Labour relations: unions and collective bargaining. Environment: safe conditions. Then children, education, access to information, just administrative action, and access to the courts through the CCMA, each with its own workplace example.` },
    { s: 'MICHAEL', t: `[impressed] That's the whole series in one report.` },
    { s: 'NALEDI', t: `[pleased] And that's what a strong answer looks like: completeness, with a real example for every right, not a partial list.` },
    { s: 'MICHAEL', t: `[curious] Any final advice before exam day?` },
    { s: 'NALEDI', t: `[warm, serious] Three things. Know your key distinctions cold: diversity versus inclusivity, and the four types of discrimination, especially direct versus indirect. For any ratio question, like health and safety representatives, show your division and your rounding. And for any scenario, look for more than one right at play, because real situations usually trigger several.` },
    { s: 'MICHAEL', t: `[confident] Distinctions, show your working, look for more than one right.` },
    { s: 'NALEDI', t: `[warm, proud] That wraps up human rights, inclusivity and environmental issues in the workplace, from the Constitution right through to how each right shows up in a real business. You're well prepared.` },
    { s: 'MICHAEL', t: `[grateful] Thanks, Naledi. It was a lot, but it makes sense now.` },
    { s: 'NALEDI', t: `[warm] That's the goal. Good luck out there. This has been The Business Brief.` },
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

  console.log(`The Business Brief — Human Rights and Inclusivity (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

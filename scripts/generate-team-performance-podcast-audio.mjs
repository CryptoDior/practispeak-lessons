/**
 * The Business Brief — Team Performance Assessment, Conflict Management and Problem Solving — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-team-performance-podcast-audio.mjs
 *
 * Rebuild an episode (only missing or text-edited lines are regenerated), or force specific lines:
 *   ... <n>            e.g. 2
 *   ... <n>:2,-2       e.g. 2:2,-2  (line numbers; -1 = last line, -2 = second to last)
 *   ... <n> --fresh    wipe and re-record the whole episode
 * Original example:
 *
 *   node --env-file=.env.local scripts/generate-team-performance-podcast-audio.mjs 1
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
 *   podcasts/The-Business-Brief-Team-Performance/Episode 1 - What Makes a Team Actually Work.mp3
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import crypto from 'crypto';

const ELEVENLABS_KEY =
  process.env['ELEVENLABS_API_KEY_' + (process.env.ELEVENLABS_ACCOUNT || '1')] || process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_1 to .env.local and run with: node --env-file=.env.local scripts/generate-team-performance-podcast-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'The-Business-Brief-Team-Performance');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'business-brief-team-performance');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'Episode 1 - What Makes a Team Actually Work',
  segs: [
    { s: 'AMELIA', t: `Episode 1: What Makes a Team Actually Work?` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this series we look at teams: how to judge whether they're working, how to handle conflict, and how to deal with grievances and tricky personalities. In this episode we start with what makes a team succeed.` },
    { s: 'MICHAEL', t: `[curious] Is there a perfect recipe for a team? Surely someone has worked it out.` },
    { s: 'NALEDI', t: `[amused] People have tried for decades, and the advice often contradicts itself. Some say a team needs a set number of roles, each filled by the right personality. Some say a strong leader is everything. Others say there should be no fixed leader at all, and leadership should pass to whoever has the skill the task needs right now.` },
    { s: 'MICHAEL', t: `[curious] What about the mix of people? Similar personalities, or varied?` },
    { s: 'NALEDI', t: `[thoughtful] Again, opinions split. Some say similar people get along better. Others say a diverse team, with different personalities, races and genders, performs better. There's no single correct theory.` },
    { s: 'MICHAEL', t: `[playful] That's not very comforting.` },
    { s: 'NALEDI', t: `[reassuring] It's useful, actually. It tells you the best team depends on the task. The task decides which skills you need, and the skills decide who belongs on the team. What every successful team needs is maximum participation from everyone and a focus on the work, not on personalities.` },
    { s: 'MICHAEL', t: `[curious] So how does a manager build one?` },
    { s: 'NALEDI', t: `[practical] By knowing the people. A manager who understands each person's strengths and weaknesses can build the strongest team from the staff available. And when hiring, you should ask how a new person will contribute to the team and what role they'll play, before you hire them.` },
    { s: 'MICHAEL', t: `[curious] Even with all that disagreement, are there basics every team needs?` },
    { s: 'NALEDI', t: `[steady] Yes. A set of criteria that apply to almost every successful team. First, clear objectives, so everyone understands the focus and can pull in the same direction. Second, an open and comfortable structure, where people can share ideas without fear of ridicule or criticism. Third, mutual respect, so each member feels encouraged to apply their skills.` },
    { s: 'MICHAEL', t: `[curious] Keep going.` },
    { s: 'NALEDI', t: `[counting them off] Fourth, supportive members who trust each other, so energy goes into the work, not into competition or conflict. Fifth, committed members who each give their best for the good of the business. Sixth, sound relations between teams, so people can express views without fear of prejudice. Seventh, opportunities to grow, so people learn from working in a team. And eighth, regular reviews of the process and progress, so problems get faced and solved.` },
    { s: 'MICHAEL', t: `[impressed] That's eight. Is it a lot to remember?` },
    { s: 'NALEDI', t: `[encouraging] Group them. Direction: clear objectives. Atmosphere: openness, respect, trust and support. Commitment and growth. And reviewing how things are going. If you can place each criterion in a group, you'll recall them under pressure.` },
    { s: 'MICHAEL', t: `[curious] Is there a shorter list I should know for how the team itself should behave?` },
    { s: 'NALEDI', t: `[clear] A team should debate issues critically and constructively, get input from all its members, be suited to the task, stay focused, keep mutual respect, and communicate effectively. Notice how those describe behaviour in the room, while the earlier criteria describe the conditions that make good behaviour possible.` },
    { s: 'MICHAEL', t: `[curious] What gets in the way of building a team like that?` },
    { s: 'NALEDI', t: `[thoughtful] People bring their own assumptions, beliefs, values and prejudices to work, which makes teams harder to build. So businesses have to work at it deliberately. They can create a culture of respect, equality, acceptance and open communication through their policies, through the leadership of management, and through education and training.` },
    { s: 'MICHAEL', t: `[curious] Define leadership and management for me, because they sound similar.` },
    { s: 'NALEDI', t: `[clear] Leadership means providing vision, setting goals, and inspiring others to meet them. Management means planning, directing, organising and controlling people and the process of achieving those goals.` },
    { s: 'MICHAEL', t: `[playful] Let's test this on a scenario.` },
    { s: 'NALEDI', t: `[storytelling] Picture Thabo's Roofing, a small construction crew. The team meets on Mondays, but nobody is sure what the target is for the week. People who suggest a faster way to tile are laughed at. Two roofers refuse to share their tools. And the crew never reviews a job once it's finished.` },
    { s: 'MICHAEL', t: `[reasoning] Clear objectives are missing, because nobody knows the weekly target. The open structure is missing, because ideas get ridiculed. Trust and support are missing over the tools. And the review step is missing, because nothing is reflected on afterwards.` },
    { s: 'NALEDI', t: `[pleased] Four criteria identified, each tied to a detail in the scenario. How would you fix it?` },
    { s: 'MICHAEL', t: `[confident] Set and share a weekly target. Make it a rule that ideas are heard without mocking. Set up a shared tool pool. And hold a short review at the end of each job.` },
    { s: 'NALEDI', t: `[approving] Practical and specific. That's the standard for a good answer.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! There's no single perfect team formula, so the right team depends on the task. Successful teams need clear objectives, an open structure, mutual respect, supportive and trusting members, commitment, sound relations with other teams, development opportunities, and regular reviews. They also debate constructively, involve everyone, stay focused and communicate well. Businesses build this through culture, policy, leadership and training.` },
    { s: 'NALEDI', t: `[warm] Well done. Exam tip: when a scenario describes a struggling team, name the missing criterion and quote the detail that shows it is missing. That's what earns the marks.` },
    { s: 'MICHAEL', t: `[confident] Name it and quote the detail.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at how a business actually measures team performance.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 2,
  file: 'Episode 2 - Measuring How Well a Team Performs',
  segs: [
    { s: 'AMELIA', t: `Episode 2: Measuring How Well a Team Performs` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at how a business checks whether its team is performing, using three clear categories.` },
    { s: 'MICHAEL', t: `[curious] Why measure at all? If the work gets done, isn't that enough?` },
    { s: 'NALEDI', t: `[clear] Because very few jobs are done alone. When people work well together, they learn from each other and achieve more than they could separately. That helps the business reach its objectives, grow and become more productive. To improve, managers and staff need to assess how well they work together, both as individuals within the team and as a team.` },
    { s: 'MICHAEL', t: `[curious] What do we measure against?` },
    { s: 'NALEDI', t: `[counting them off] Three categories. Interpersonal attitudes and behaviour. Shared values. And communication. Each contains several specific questions.` },
    { s: 'MICHAEL', t: `[curious] Start with interpersonal attitudes and behaviour.` },
    { s: 'NALEDI', t: `[steady] It's about how people relate. Is there a real unity of purpose, with every member committed to goals they find meaningful? Do members feel free to speak up? Does leadership suit the task and the skills of the people? Are people allowed to stretch themselves and try different roles?` },
    { s: 'MICHAEL', t: `[curious] Shared values?` },
    { s: 'NALEDI', t: `[clear] It covers how the group functions together. Does everyone know what's expected of them? Do members carry out tasks willingly and efficiently? Does the team help each other, and can people trust that others will complete their share on time? Is there mutual respect, where every opinion is listened to, even when an idea seems strange at first?` },
    { s: 'MICHAEL', t: `[curious] And communication?` },
    { s: 'NALEDI', t: `[thoughtful] A relaxed, open atmosphere where people feel free to express themselves and everyone is involved. The team regularly stops to review its progress and obstacles, and leaders encourage discussion of problems. Lots of relevant discussion, with nearly everyone participating. Disagreements aren't ignored. Their causes are examined and the group tries to resolve them so everyone can continue.` },
    { s: 'MICHAEL', t: `[curious] The exam guidelines also mention collaboration. How does that fit?` },
    { s: 'NALEDI', t: `[clear] Collaboration is the thread running through all three. It means working with others towards specific objectives. A team can score well on every category only if people are genuinely collaborating, not just sitting in the same room.` },
    { s: 'MICHAEL', t: `[curious] How does a team actually assess itself?` },
    { s: 'NALEDI', t: `[practical] With a simple grid. List the criteria down one side, ask a yes-or-no question for each, such as "Did we set clear objectives?" or "Did we review how we were doing?", then discuss the results. Finish by listing what the team did well and what it could improve.` },
    { s: 'MICHAEL', t: `[playful] Let's try one.` },
    { s: 'NALEDI', t: `[storytelling] Picture a group of Grade 12 learners at Mvuyo Secondary preparing a fundraising stall. They agree on a target of five thousand rand. One member designs posters, one handles cash, one sources stock. A shy member has an idea for a raffle but doesn't share it, because earlier ideas were brushed aside. Halfway through, nobody checks whether sales are on track.` },
    { s: 'MICHAEL', t: `[reasoning] Clear objectives and goals are present, with the target and defined jobs. But openness and respect are weak, because the shy member's idea went unspoken. And review of the process is missing, because nobody checks progress.` },
    { s: 'NALEDI', t: `[pleased] Which of the three categories do those weaknesses fall under?` },
    { s: 'MICHAEL', t: `[thoughtful] Openness and review sit under communication. Respect for ideas sits under shared values.` },
    { s: 'NALEDI', t: `[approving] That's the full skill: pointing to evidence, then naming the category.` },
    { s: 'MICHAEL', t: `[curious] What would you recommend they do?` },
    { s: 'NALEDI', t: `[clear] Hold a quick check-in every hour, invite every member to suggest ideas without judgement, and let the quiet member try the raffle. Small adjustments, but each matches a weakness.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Teams are measured on three categories: interpersonal attitudes and behaviour, shared values and communication, all supported by collaboration. A self-assessment grid asks specific questions for each, then lists strengths and improvements.` },
    { s: 'NALEDI', t: `[warm] Well put. Exam tip: when you identify one of these criteria in a scenario, give the category and the detail from the case that proves it.` },
    { s: 'MICHAEL', t: `[confident] Category plus evidence.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at the stages a team goes through as it develops.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 3,
  file: 'Episode 3 - The Stages Every Team Goes Through',
  segs: [
    { s: 'AMELIA', t: `Episode 3: The Stages Every Team Goes Through` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we follow a team through the stages it grows through, from its first meeting to its final one.` },
    { s: 'MICHAEL', t: `[curious] Do teams just start working well, or is there a process?` },
    { s: 'NALEDI', t: `[clear] There's a process. A psychologist named Bruce Tuckman described stages of team development, and the idea is that a team needs to pass through them to grow, face challenges, find solutions, plan work and deliver results.` },
    { s: 'MICHAEL', t: `[curious] What are the stages?` },
    { s: 'NALEDI', t: `[counting them off] Forming, storming, norming and performing. The exam guidelines also list a fifth, adjourning, which some sources call mourning.` },
    { s: 'MICHAEL', t: `[curious] Start with forming.` },
    { s: 'NALEDI', t: `[steady] The team is meeting for the first time. People are polite, a little unsure, and testing the waters. They're learning what the task is and who is who.` },
    { s: 'MICHAEL', t: `[curious] And storming?` },
    { s: 'NALEDI', t: `[knowing] The honeymoon ends. People have had time to get to know each other, and differences in opinions, working styles and personalities surface. There may be tension or friction. It's uncomfortable, but it's a normal and necessary stage.` },
    { s: 'MICHAEL', t: `[surprised] Necessary? I'd have thought conflict means the team is failing.` },
    { s: 'NALEDI', t: `[reassuring] A common assumption, and it's the reason this is worth learning. Storming means the team is working out how it will function. Teams that avoid it entirely often have unspoken problems that surface later.` },
    { s: 'MICHAEL', t: `[curious] Then norming?` },
    { s: 'NALEDI', t: `[pleased] The team settles. Members negotiate a shared goal and agree on how they'll work together, including rules for communication and responsibility. Trust builds.` },
    { s: 'MICHAEL', t: `[curious] Performing?` },
    { s: 'NALEDI', t: `[energetic] The team works as a unit towards its objectives, efficiently and without unnecessary conflict. People understand their roles and support each other. This is what every team wants to reach.` },
    { s: 'MICHAEL', t: `[curious] And adjourning?` },
    { s: 'NALEDI', t: `[thoughtful] The task is done and the team disbands, or members move on. It's a time to reflect on what was achieved, recognise contributions and, for some members, feel the loss of working together. That's why some call it mourning.` },
    { s: 'MICHAEL', t: `[curious] Do teams always move neatly from one stage to the next?` },
    { s: 'NALEDI', t: `[honest] Not always. A new member joining or a new task arriving can send a team back to an earlier stage. Think of the stages as a general pattern, not a rigid schedule.` },
    { s: 'MICHAEL', t: `[playful] Let's practise identifying stages from a scenario.` },
    { s: 'NALEDI', t: `[storytelling] Picture Karoo Solar, a small installation company. Statement one: a brand-new crew meets on Monday, everyone is courteous and asks lots of questions about their job. Statement two: two weeks later, the crew argue over who gets to lead on the roof, and one person complains about being left out. Statement three: they hold a meeting, agree on a shared goal and on a rota for roles. Statement four: by month two, they finish installations ahead of schedule with little friction. Statement five: the contract ends and the crew has a farewell lunch.` },
    { s: 'MICHAEL', t: `[reasoning] One is forming, since everyone is polite and exploring. Two is storming, with the argument and complaints. Three is norming, because they agree on a goal and a rota. Four is performing, with efficient work and little friction. Five is adjourning, because the team is disbanding.` },
    { s: 'NALEDI', t: `[delighted] All five. And how could a manager help the crew through storming?` },
    { s: 'MICHAEL', t: `[thoughtful] Encourage open discussion, listen to everyone, and keep the focus on the task instead of on personalities.` },
    { s: 'NALEDI', t: `[approving] Good. Notice how it connects to the criteria from the earlier episodes: openness, respect and communication.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! A team develops through forming, storming, norming, performing, and, according to the exam guidelines, adjourning. Forming is first meeting, storming is friction, norming is agreeing a shared goal, performing is working efficiently as a unit, and adjourning is wrapping up. Storming is normal, and teams can slip back a stage when something changes.` },
    { s: 'NALEDI', t: `[warm] Well done. Exam tip: to identify a stage from a scenario, look for the key behaviour: politeness, friction, agreement, efficiency or closure. Then name the stage and quote the behaviour.` },
    { s: 'MICHAEL', t: `[confident] Find the behaviour, name the stage.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at how different personalities shape the roles people play in a team.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 4,
  file: 'Episode 4 - Belbin and Jung - Who Plays Which Role',
  segs: [
    { s: 'AMELIA', t: `Episode 4: Belbin and Jung: Who Plays Which Role?` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at two theories that explain why different people end up playing different roles in a team: Belbin and Jung.` },
    { s: 'MICHAEL', t: `[curious] Why do we need theories? Can't managers just assign tasks?` },
    { s: 'NALEDI', t: `[clear] They can, but a theory helps a manager understand different personalities and the roles they naturally take. With that knowledge, you can form balanced teams that cover all the roles needed to get the best results. The exam guidelines expect you to explain why these theories matter, for example for allocating tasks according to roles.` },
    { s: 'MICHAEL', t: `[curious] Start with Belbin.` },
    { s: 'NALEDI', t: `[steady] Belbin Role Theory assumes that success depends more on behaviour than on intellect or skill. It describes nine roles in three groups: action-oriented, people-oriented and cerebral, meaning thinking roles. Each role has strengths and what Belbin called allowable weaknesses, which are the flaws that come with the strengths.` },
    { s: 'MICHAEL', t: `[curious] Action-oriented first.` },
    { s: 'NALEDI', t: `[counting them off] Three roles. The shaper challenges the team and keeps it moving, so momentum isn't lost. The downside is being pushy about getting things done. The implementer turns ideas into practical, workable plans and carries them out efficiently, though they can be reluctant to change a plan. The completer-finisher finds errors, checks quality and polishes the final product, but may want everything too perfect.` },
    { s: 'MICHAEL', t: `[curious] People-oriented?` },
    { s: 'NALEDI', t: `[clear] Three roles again. The co-ordinator focuses on the team's objectives, draws out members and delegates well, but may delegate too much. The team-worker helps the team gel, is versatile and does what needs doing, but struggles to decide when there's conflict. The resource investigator looks outward, makes contacts and explores opportunities, but may not follow up on leads.` },
    { s: 'MICHAEL', t: `[curious] And the thinkers?` },
    { s: 'NALEDI', t: `[thoughtful] The plant is highly creative and solves problems in unconventional ways, though they can be forgetful and miss details. The monitor-evaluator is logical, makes impartial judgements and weighs up the team's options, but may not motivate people. And the specialist has in-depth knowledge in a key area, but can focus too much on technical details.` },
    { s: 'MICHAEL', t: `[impressed] Nine roles. That's a lot to hold together.` },
    { s: 'NALEDI', t: `[encouraging] Use the groups as handles. Three that do, three that connect, three that think. Then attach one strength and one weakness to each.` },
    { s: 'MICHAEL', t: `[curious] Now Jung.` },
    { s: 'NALEDI', t: `[clear] Jungian theory says we're born with preferences, and Jung described four pairs of opposites. Once you identify each member's preferences, a manager can use their natural strengths to improve the team.` },
    { s: 'MICHAEL', t: `[curious] What are the pairs?` },
    { s: 'NALEDI', t: `[counting them off] First, extravert or introvert: where your energy comes from, the outer world or your inner world. Second, sensing or intuition: how you take in information, from the real, external world or from the internal, imaginative one. Third, thinking or feeling: how you decide, mainly through logic or mainly through emotion. Fourth, judging or perceiving: how you act on information, strictly following plans or improvising and looking for alternatives.` },
    { s: 'MICHAEL', t: `[curious] How do those pairs become personality types?` },
    { s: 'NALEDI', t: `[clear] Take one from each pair and you get a type. There are sixteen possible. For example, ISTJ means introvert, sensing, thinking, judging. ENFP means extravert, intuition, feeling, perceiving.` },
    { s: 'MICHAEL', t: `[playful] Let's try applying Belbin to a team.` },
    { s: 'NALEDI', t: `[storytelling] Picture a four-person team at Lerato Events planning a wedding. Zinhle always pushes the schedule forward, even when others feel rushed. Mpho builds the detailed run-sheet and sticks to it. Aisha spots every spelling mistake on the invitations. Sipho keeps proposing wild new decor ideas but forgets to book the florist.` },
    { s: 'MICHAEL', t: `[reasoning] Zinhle is the shaper, driving the team with a pushy edge. Mpho is the implementer, making practical plans. Aisha is the completer-finisher, with a perfectionist streak. And Sipho is the plant, creative but forgetful.` },
    { s: 'NALEDI', t: `[pleased] All four. What's missing from this team?` },
    { s: 'MICHAEL', t: `[thoughtful] Nobody who draws people out and delegates, like a co-ordinator, and nobody making outside contacts, like a resource investigator. A manager could add someone for those roles.` },
    { s: 'NALEDI', t: `[approving] That's exactly how the theory gets used: not to label people, but to spot gaps in the team.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Belbin describes nine roles in three groups: shaper, implementer, completer-finisher; co-ordinator, team-worker, resource investigator; plant, monitor-evaluator, specialist. Each has strengths and allowable weaknesses. Jung describes four pairs of preferences that combine into sixteen personality types. Both help managers build balanced teams.` },
    { s: 'NALEDI', t: `[warm] Well done. Study tip: these two are covered in the textbook in detail, but the exam guidelines mainly want you to explain why such theories matter, for example for allocating tasks according to roles, and to identify roles from scenarios. Learn the roles well enough to recognise them.` },
    { s: 'MICHAEL', t: `[confident] Recognise the roles, and know why they matter.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at three more ways of describing team roles, and how teams reach decisions together.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 5,
  file: 'Episode 5 - More Role Theories, and How Teams Decide Together',
  segs: [
    { s: 'AMELIA', t: `Episode 5: More Role Theories, and How Teams Decide Together` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at two more ways of describing team roles, and a method for making decisions that the whole team can live with.` },
    { s: 'MICHAEL', t: `[curious] More role theories? Belbin and Jung already felt like plenty.` },
    { s: 'NALEDI', t: `[amused] They did, but these two are easier to remember if you focus on the idea behind each. First, the MTR-i approach, short for Management Team Roles Indicator. It defines each role by the contribution, or "product," a person brings to the team.` },
    { s: 'MICHAEL', t: `[curious] What are the roles?` },
    { s: 'NALEDI', t: `[counting them off] Eight. Coaches bring agreement and harmony, creating a positive atmosphere and helping the team reach consensus. Crusaders bring a sense of priority and focus on the important issues. Explorers uncover new potential and explore fresh ideas. Innovators bring imagination and new perspectives. Sculptors bring realisation of goals, pushing the team to deal with urgent issues and drawing on experience to decide how to get the job done.` },
    { s: 'MICHAEL', t: `[curious] And the last three?` },
    { s: 'NALEDI', t: `[clear] Curators bring clarity of ideas and information, giving a clearer picture and deeper knowledge. Conductors bring structure, introducing a logical order to how things are done. And scientists bring explanation and comprehension, building models to show how things work.` },
    { s: 'MICHAEL', t: `[curious] Does it connect to anything we've seen?` },
    { s: 'NALEDI', t: `[thoughtful] It's often combined with Jung's personality types, matching a type to each role. So the theories overlap more than they first seem.` },
    { s: 'MICHAEL', t: `[curious] Now the Margerison-McCann profiles.` },
    { s: 'NALEDI', t: `[clear] They use a Team Management Wheel with eight roles that people prefer to take. The focus is on individual development and maximising personal potential, so each person contributes effectively and the team is balanced and high-performing.` },
    { s: 'MICHAEL', t: `[curious] Walk me through the eight.` },
    { s: 'NALEDI', t: `[steady] The reporter-adviser is a supportive collector of information who dislikes being rushed. The creator-innovator is imaginative, future-oriented and enjoys complexity. The explorer-promoter is a persuader with high energy and lots of contacts, who gets bored easily. The assessor-developer is analytical, develops ideas and enjoys prototype work.` },
    { s: 'MICHAEL', t: `[curious] And the other four?` },
    { s: 'NALEDI', t: `[clear] The thruster-organiser organises, decides quickly and is results-oriented, though they can overlook people's feelings. The concluder-producer is practical, time-conscious and follows work through, but dislikes change. The controller-inspector is detail-oriented, strong on control and a guardian of standards. And the upholder-maintainer is loyal, has strong values and can help hold the team together.` },
    { s: 'MICHAEL', t: `[overwhelmed, playful] That's sixteen roles between those two theories, plus Belbin's nine.` },
    { s: 'NALEDI', t: `[encouraging] Don't try to memorise every line. Know that each theory describes roles by what people prefer to do, learn a few examples of each, and be ready to apply them. Managers use these to understand preferences, play to them, and build balanced teams with a good spread of roles.` },
    { s: 'MICHAEL', t: `[curious] Now decisions. What's group consensus?` },
    { s: 'NALEDI', t: `[clear] A decision-making method that takes time but works well. Consensus doesn't mean everyone agrees, which would be unanimity. It means everyone is willing to go ahead with the decision, even if it wasn't their first choice.` },
    { s: 'MICHAEL', t: `[curious] How does a team get there?` },
    { s: 'NALEDI', t: `[counting them off] The team discusses and defines the problem. It brainstorms alternative proposals without rejecting any, encouraging everyone to take part. It discusses the proposals, adjusts them and sets priorities. Then it tests for consensus. If some members disagree, it discusses more and modifies the proposal until most are satisfied. Once consensus is reached, the group decides and plans its actions. Anyone still unhappy can test the decision for an agreed time, and then the team looks at it again. If they won't stand aside, the proposal is blocked and the team looks for alternatives.` },
    { s: 'MICHAEL', t: `[playful] Let's apply it.` },
    { s: 'NALEDI', t: `[storytelling] Picture Sunbeam Guesthouse, with five staff deciding whether to introduce an online booking system. Three are keen. Two worry it will make their jobs harder. How should they decide?` },
    { s: 'MICHAEL', t: `[reasoning] First define the problem, which is how bookings are managed. Then brainstorm options, like the online system, a simpler spreadsheet, or a trial. Discuss and set priorities. Test for consensus. If the two sceptics still disagree, modify the proposal, for example by training and a three-month trial. If they agree to try it, the decision goes ahead and is reviewed later.` },
    { s: 'NALEDI', t: `[delighted] That covers the whole cycle, including the trial period. And what's the difference between consensus and unanimity?` },
    { s: 'MICHAEL', t: `[confident] Unanimity is everyone fully agreeing. Consensus is everyone being willing to go ahead, even if it wasn't their first choice.` },
    { s: 'NALEDI', t: `[pleased] Exactly the distinction examiners like.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! The MTR-i approach has eight roles defined by contributions, such as coaches, crusaders and conductors. The Margerison-McCann profiles describe eight preferred roles on a wheel, from reporter-adviser to upholder-maintainer. Managers use all these theories to spot preferences and balance teams. Group consensus is a time-consuming but effective method where everyone agrees to go ahead, not necessarily because it was their first choice.` },
    { s: 'NALEDI', t: `[warm] Well done. Study tip: the textbook goes into detail on all eight roles in both theories, but for the exam, focus on knowing why role theories help a team and recognising a role from a scenario.` },
    { s: 'MICHAEL', t: `[confident] Know why they help, recognise the roles.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at what causes conflict in a business and how managers deal with problems.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 6,
  file: 'Episode 6 - Why Conflict Happens, and How to Manage It',
  segs: [
    { s: 'AMELIA', t: `Episode 6: Why Conflict Happens, and How to Manage It` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at why conflict happens in a business, whether it's always bad, and how managers build a culture that handles problems well.` },
    { s: 'MICHAEL', t: `[curious] Let's start with the definition. What is conflict?` },
    { s: 'NALEDI', t: `[clear] A struggle or disagreement between people. It can arise when what people need, think, value or believe cannot sit together.` },
    { s: 'MICHAEL', t: `[curious] Are diverse teams more or less likely to have it?` },
    { s: 'NALEDI', t: `[thoughtful] Both, in a way. Effective teams are usually made of diverse people with different ideas, knowledge, skills and styles. That diversity encourages critical thinking, which means looking at a situation from several angles and weighing the best approach. It leads to better solutions. But the downside is that different viewpoints can lead to disagreement.` },
    { s: 'MICHAEL', t: `[curious] So diversity needs something to hold it together?` },
    { s: 'NALEDI', t: `[pleased] Exactly. Only when a team is committed, communicates well and shares a strong sense of a common goal can it use diversity positively.` },
    { s: 'MICHAEL', t: `[curious] What causes conflict in a business?` },
    { s: 'NALEDI', t: `[steady] Start with the business environment itself. Business naturally requires critical thinking, debate, innovation and competition, and those create conflicting ideas. Beyond that, there are six common causes.` },
    { s: 'MICHAEL', t: `[eager] Go through them.` },
    { s: 'NALEDI', t: `[counting them off] One, personal differences. People of many backgrounds, cultures, genders, races, politics and faiths work side by side, so some friction is hard to avoid. Two, poor communication, which causes misunderstandings and can become destructive. Three, competition. It can motivate, but when the focus becomes beating colleagues, the team idea is lost.` },
    { s: 'MICHAEL', t: `[curious] And the other three?` },
    { s: 'NALEDI', t: `[clear] Four, ignoring rules or procedures, whether you're the one disregarding them or the one frustrated by others who do. Five, poor organisation. Weak systems and procedures frustrate workers. Six, workload and stress. Overloaded people feel unappreciated and burnt out, so they're more likely to clash.` },
    { s: 'MICHAEL', t: `[playful] Let's try one.` },
    { s: 'NALEDI', t: `[storytelling] Picture Greenfield Print Shop. The day shift leaves no handover notes for the night shift, so jobs get printed twice. The owner gives both shifts the same urgent order with no clear process, and one printer has worked fifteen hours of overtime this week. Which causes do you see?` },
    { s: 'MICHAEL', t: `[reasoning] Poor communication, from the missing handover notes. Poor organisation, since there's no process for urgent orders. And workload and stress, because of the fifteen hours of overtime.` },
    { s: 'NALEDI', t: `[pleased] Three causes, each tied to a detail.` },
    { s: 'MICHAEL', t: `[curious] Is conflict always something to avoid?` },
    { s: 'NALEDI', t: `[thoughtful] No. If it's managed correctly it can be positive, because it shows communication is happening and there's variety in thinking. What matters is how people respond. The same disagreement can become a destructive problem or a route to creative problem-solving. But if it's left unresolved, it can damage the team, the staff and even the business culture over time.` },
    { s: 'MICHAEL', t: `[curious] So what should management do?` },
    { s: 'NALEDI', t: `[clear] Build a culture where employees feel part of a team. That creates loyalty and a sense of security, which supports productivity. Practically, this means every employee knows what the business is aiming for and buys into it. Management makes sure each person feels valued and will be taken seriously if they share an idea. The management style shouldn't be autocratic, which means domineering and ignoring others' opinions or needs.` },
    { s: 'MICHAEL', t: `[curious] More?` },
    { s: 'NALEDI', t: `[steady] Important decisions are made regularly through teamwork. Good teamwork is rewarded. And mistakes are treated as chances to learn, because otherwise employees won't risk speaking up with new ideas.` },
    { s: 'MICHAEL', t: `[thoughtful] So the culture determines whether conflict becomes a problem or an opportunity.` },
    { s: 'NALEDI', t: `[warm] Well said.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Conflict is a disagreement between people with different needs, opinions or values. Diversity gives better ideas but also friction. Causes include the business environment itself, personal differences, poor communication, competition, ignoring rules, poor organisation, and workload and stress. Managed well, conflict can be positive. Management builds a teamwork culture through shared objectives, valuing employees, a non-autocratic style, team decisions, rewarding teamwork and treating mistakes as learning.` },
    { s: 'NALEDI', t: `[warm] Excellent. Exam tip: when asked to identify causes of conflict from a scenario, name each cause and quote the detail that shows it.` },
    { s: 'MICHAEL', t: `[confident] Name the cause, quote the detail.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at the steps managers follow to resolve conflict, plus two approaches they can use.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 7,
  file: 'Episode 7 - Eight Steps to Resolve a Conflict',
  segs: [
    { s: 'AMELIA', t: `Episode 7: Eight Steps to Resolve a Conflict` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at the steps a manager follows to resolve a conflict, the skills that help, and two approaches to resolving it.` },
    { s: 'MICHAEL', t: `[curious] When a conflict erupts, where does a manager start?` },
    { s: 'NALEDI', t: `[clear] By listening to all sides, assessing the situation carefully, and then choosing the best course of action. That's conflict management: the manager considers the situation, gets input from everyone involved, and decides what to do. And they should remember that the issues are sensitive for those involved, and that there may be hidden obstacles to a solution.` },
    { s: 'MICHAEL', t: `[curious] Is there a standard sequence?` },
    { s: 'NALEDI', t: `[counting them off] Eight steps. One, arrange a time and place for the discussion. Two, everyone involved, whether individuals or groups, accepts that they see the situation differently. Three, define the problem clearly. Four, give each party a chance to express their opinions and feelings.` },
    { s: 'MICHAEL', t: `[curious] And the rest?` },
    { s: 'NALEDI', t: `[clear] Five, brainstorm possible solutions. Six, agree on the criteria for judging the alternatives. Seven, choose the most appropriate solution and implement it. Eight, evaluate the solution and monitor its progress.` },
    { s: 'MICHAEL', t: `[thoughtful] It's very orderly. Why does the order matter?` },
    { s: 'NALEDI', t: `[steady] Because skipping steps is how conflicts come back. If you jump to solutions without defining the problem, you might fix the wrong thing. And if you never check afterwards, you won't know if it worked.` },
    { s: 'MICHAEL', t: `[curious] What skills help a manager through those steps?` },
    { s: 'NALEDI', t: `[clear] Five main ones. First, communication. People need to feel heard and understood, and each person should be able to explain their view calmly and openly. Second, setting up forums, where people can express feelings and frustrations so the conflict resolves faster, and workers feel their opinions are heard.` },
    { s: 'MICHAEL', t: `[curious] Next?` },
    { s: 'NALEDI', t: `[steady] Third, focus on the conflict, not the person. Making it personal makes people dig in and raises stress and resentment. Fourth, neutral ground, a place or situation that doesn't threaten either side, which makes it easier to work towards a common goal. And fifth, know when a mediator is needed: when the conflict gets very tense and personal, a neutral, skilled outsider can help the two sides come back together.` },
    { s: 'MICHAEL', t: `[curious] You mentioned two approaches.` },
    { s: 'NALEDI', t: `[clear] First, win-win. The approach encourages creative thinking, using two opposing ideas to form a new idea that pleases both sides. It works when both parties share the same goal and want the team to succeed. Think of a new marketing plan. The characteristics are co-operation to find a creative alternative, so both sides win, and the team wins.` },
    { s: 'MICHAEL', t: `[curious] And the second?` },
    { s: 'NALEDI', t: `[thoughtful] The interest-based relational approach, or IBR. It respects that people differ, while steering everyone towards a constructive outcome. It suits conflicts where common ground isn't obvious and tension is high, for example in dealings with unions, workplace forums and workers on strike. Its core habits: put the relationship first, deal with the issue and not the individual, listen before speaking, lay out the facts, and look for options together.` },
    { s: 'MICHAEL', t: `[curious] How do I tell them apart in an exam?` },
    { s: 'NALEDI', t: `[pleased] Ask whether the parties already share a goal. If they do, and the aim is a creative new idea that both like, it's win-win. If common ground is hard to see, tension is high, and relationships need protecting, it's IBR.` },
    { s: 'MICHAEL', t: `[playful] Let's apply it.` },
    { s: 'NALEDI', t: `[storytelling] Picture Ndlovu Bakery. Two bakers both want the early shift that comes with weekends off. They've stopped speaking, and there's no rota system. What would you do?` },
    { s: 'MICHAEL', t: `[reasoning] Arrange a time and place on neutral ground, like the staff room after hours. Both recognise they want the same thing. Define the problem: no fair way of allocating shifts. Let each explain how they feel. Brainstorm options, like a rotating rota, and agree criteria such as fairness and coverage. Choose one, and check in after a month.` },
    { s: 'NALEDI', t: `[approving] Complete, and specific. Which approach would you lean on?` },
    { s: 'MICHAEL', t: `[thoughtful] IBR first, because relationships are strained and common ground isn't obvious, then win-win once they're talking, to create a rota that works for both.` },
    { s: 'NALEDI', t: `[pleased] That's a strong, reasoned answer. And if they still can't agree?` },
    { s: 'MICHAEL', t: `[confident] Bring in a mediator who is objective and skilled in negotiation.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Resolving conflict follows eight steps: arrange, recognise differences, define, express views, brainstorm, agree criteria, implement, evaluate. Helpful skills are communication, forums, focusing on the issue not the person, neutral ground, and knowing when to use a mediator. Win-win suits parties with the same goal, while IBR suits tense situations where relationships matter.` },
    { s: 'NALEDI', t: `[warm] Well done. Exam tip: when asked how a business should handle a conflict, walk through the steps in order and link each to the case details.` },
    { s: 'MICHAEL', t: `[confident] Steps in order, linked to the case.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at grievances, and how they differ from conflict.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 8,
  file: 'Episode 8 - Grievances - The Right Way to Raise a Complaint',
  segs: [
    { s: 'AMELIA', t: `Episode 8: Grievances: The Right Way to Raise a Complaint` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at grievances: what they are, how they differ from conflict, and the stages a proper procedure follows.` },
    { s: 'MICHAEL', t: `[curious] Isn't a grievance just a fancy word for a complaint?` },
    { s: 'NALEDI', t: `[clear] Close, but there's a precise meaning. A grievance is the feeling an employee, or a group of employees, has of being treated unfairly or unjustly, and being dissatisfied because of it. It usually relates to working conditions.` },
    { s: 'MICHAEL', t: `[curious] Give me examples.` },
    { s: 'NALEDI', t: `[steady] A clash with a colleague, a clash with a supervisor, or an uncomfortable working environment that affects someone's health.` },
    { s: 'MICHAEL', t: `[curious] What doesn't count?` },
    { s: 'NALEDI', t: `[firm] Disciplinary issues, unfair labour practices, and dissatisfaction about pay or benefits. Those have their own procedures.` },
    { s: 'MICHAEL', t: `[curious] How is a grievance different from conflict, which we've just covered?` },
    { s: 'NALEDI', t: `[thoughtful] Conflict is a disagreement between people, which may be about almost anything. A grievance is one person's, or a group's, complaint about how they're being treated, which has to be raised through a formal procedure. A conflict with a colleague can become a grievance if the employee feels unfairly treated and wants it resolved officially.` },
    { s: 'MICHAEL', t: `[curious] Why does it matter that grievances are handled quickly?` },
    { s: 'NALEDI', t: `[serious] Left alone, they grow into bigger problems that hurt morale and productivity.` },
    { s: 'MICHAEL', t: `[curious] What does the law say?` },
    { s: 'NALEDI', t: `[clear] The Labour Relations Act gives broad guidelines to employers and employees about the process. But the details are left to each business, which should write its own grievance policy and procedures, a framework employees can use to raise internal complaints so they're resolved swiftly. The benefits are consistency and transparency, because everyone knows what to expect, and it shows the employer is committed to resolving issues openly and without bias.` },
    { s: 'MICHAEL', t: `[curious] What does the process look like?` },
    { s: 'NALEDI', t: `[counting them off] Three general stages. Stage one is informal. The employee tells their supervisor or manager verbally, and the supervisor tries to resolve it. Businesses often set a time limit of about three to five working days. The law doesn't specify a period, so the employee follows the company's policy. Some companies skip this stage and accept only written grievances.` },
    { s: 'MICHAEL', t: `[curious] Stage two?` },
    { s: 'NALEDI', t: `[steady] A formal process. If the employee is unhappy with the outcome of stage one, or the policy has no stage one, they lodge the grievance in writing, often with the HR department using a grievance form. They receive a written reply, or a hearing is held where everyone concerned attends. The employee can be accompanied by a representative and can call witnesses, and everyone gets reasonable notice, at least two working days, to prepare.` },
    { s: 'MICHAEL', t: `[curious] Who runs the hearing?` },
    { s: 'NALEDI', t: `[clear] An objective person, who allows everyone to present their side. Sometimes a decision comes at the hearing, but the law doesn't require immediate feedback. Companies often aim to resolve it within seven to ten working days.` },
    { s: 'MICHAEL', t: `[curious] And stage three?` },
    { s: 'NALEDI', t: `[serious] It goes outside the company. The employee takes the grievance to their trade union or to the Commission for Conciliation, Mediation and Arbitration, the CCMA, which tries to resolve it. It's a last resort because it's very time-consuming.` },
    { s: 'MICHAEL', t: `[playful] Let's classify some situations.` },
    { s: 'NALEDI', t: `[storytelling] Picture Pretoria Tyre Depot. One: a cashier says her supervisor shouts at her in front of customers. Two: a mechanic believes his overtime was calculated incorrectly. Three: a worker is repeatedly late. Four: a clerk's desk is next to a broken extractor fan that gives her headaches. Which are grievances?` },
    { s: 'MICHAEL', t: `[reasoning] One is a grievance, a conflict with a supervisor. Two is about remuneration, so it's not a grievance in this sense. Three is a disciplinary matter. Four is a grievance, an uncomfortable environment affecting health.` },
    { s: 'NALEDI', t: `[pleased] Exactly. And how should the cashier's grievance go?` },
    { s: 'MICHAEL', t: `[confident] Stage one: tell the supervisor's manager verbally. If that fails within the time limit, stage two: a written complaint to HR and a hearing, with a representative if she wants one. If still unresolved, stage three: the union or the CCMA.` },
    { s: 'NALEDI', t: `[approving] A full pathway. Notice you linked each stage to the situation.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! A grievance is an employee's or group's feeling of being treated unfairly, usually about working conditions. It excludes disciplinary issues, unfair labour practices, and pay or benefits disputes. Businesses should have a grievance policy for consistency and transparency. The process has three stages: informal verbal, formal written with a hearing, and external through a union or the CCMA.` },
    { s: 'NALEDI', t: `[warm] Well done. Exam tip: when you describe the procedure, name the stages in order and say who is involved in each.` },
    { s: 'MICHAEL', t: `[confident] Stages in order, and who is involved.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at difficult personalities at work and how to deal with each one.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 9,
  file: 'Episode 9 - Dealing With Difficult Personalities',
  segs: [
    { s: 'AMELIA', t: `Episode 9: Dealing With Difficult Personalities` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at difficult personalities at work, and practical ways to deal with each one.` },
    { s: 'MICHAEL', t: `[curious] Isn't "difficult person" a bit harsh?` },
    { s: 'NALEDI', t: `[thoughtful] It can be, which is why the word to hold onto is "behaviour". These aren't bad people. They're personalities whose natural style can make teamwork harder if nobody manages it. South African workplaces are diverse in culture, language and custom, and every workplace is also diverse in personality. Expecting everyone to work together without any clash isn't realistic.` },
    { s: 'MICHAEL', t: `[curious] Can managers do anything beyond hoping for the best?` },
    { s: 'NALEDI', t: `[clear] A lot. If management understands the role personality plays, they can use it for the benefit of the business. When writing job descriptions, a manager can think about the kind of work and the personality that would suit it. And when recruiting, businesses can use personality tests so the HR manager can judge whether a candidate fits the role. If a job needs teamwork, creativity and motivation, the process should filter out someone who's unlikely to show those.` },
    { s: 'MICHAEL', t: `[curious] The exam names seven types. Which?` },
    { s: 'NALEDI', t: `[counting them off] The complainer, the indecisive person, the over-agreeable person, the negative person, the expert, the quiet person and the aggressive person. Let's take them one at a time, with a way of handling each.` },
    { s: 'MICHAEL', t: `[curious] The complainer first.` },
    { s: 'NALEDI', t: `[clear] Always finding fault but rarely offering a solution. A manager can listen briefly, then ask for specifics and ask the person what they'd suggest, steering the conversation from the problem to a fix. It also helps to separate genuine concerns from habit.` },
    { s: 'MICHAEL', t: `[curious] The indecisive one?` },
    { s: 'NALEDI', t: `[steady] Someone who delays decisions, worried about being wrong. Give clear deadlines, break big decisions into smaller steps, and offer a few options instead of an open question.` },
    { s: 'MICHAEL', t: `[curious] The over-agreeable?` },
    { s: 'NALEDI', t: `[thoughtful] They say yes to everything to avoid conflict, then fail to deliver or hide real concerns. Create a safe space for honest opinions, ask them directly what they think, and check workloads before assigning more.` },
    { s: 'MICHAEL', t: `[curious] The negative person?` },
    { s: 'NALEDI', t: `[clear] Someone who sees problems before possibilities and can drag down the team's mood. Acknowledge risks that are real, ask them to propose how to overcome each, and give them roles where careful risk-checking is useful.` },
    { s: 'MICHAEL', t: `[curious] The expert?` },
    { s: 'NALEDI', t: `[pleased] Someone who knows a lot and may act as if they know it all. Use their knowledge, perhaps by asking them to mentor others, while making it clear that other views matter too. Encourage them to explain, not dismiss.` },
    { s: 'MICHAEL', t: `[curious] The quiet one?` },
    { s: 'NALEDI', t: `[warm] They hold back ideas, which means the team may miss good input. Ask for their view privately or in writing, invite them in by name, and give them time to prepare before meetings.` },
    { s: 'MICHAEL', t: `[curious] And the aggressive person?` },
    { s: 'NALEDI', t: `[serious] Someone who dominates, interrupts or intimidates. Stay calm, set clear behavioural expectations, address the behaviour and not the person, and apply the disciplinary policy if it continues, since aggression can breach workplace rules.` },
    { s: 'MICHAEL', t: `[playful] Let's identify some.` },
    { s: 'NALEDI', t: `[storytelling] Picture Cape Fresh Foods. One: Lindiwe cannot finalise the supplier order, always asking for "one more quote". Two: Pieter says "That will never work" to every new idea. Three: Zodwa never speaks at meetings, though her emails are sharp. Four: Dr Mokoena corrects everyone's work and brushes off suggestions. Five: Buhle agrees to every deadline and then misses half of them.` },
    { s: 'MICHAEL', t: `[reasoning] One is indecisive. Two is negative. Three is quiet. Four is the expert. Five is over-agreeable.` },
    { s: 'NALEDI', t: `[delighted] All five. How would you handle Zodwa?` },
    { s: 'MICHAEL', t: `[thoughtful] Ask for her input before the meeting, by email since she writes well, and invite her to present one point. That brings her ideas in without pressure.` },
    { s: 'NALEDI', t: `[approving] Tailored to the person. That's what examiners reward.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Businesses can manage personalities through job descriptions and recruitment tests. The seven types are the complainer, indecisive, over-agreeable, negative, expert, quiet and aggressive, and each has a practical way of being handled: solutions-focus, deadlines, honesty, risk-solving, mentoring, invitation and clear boundaries.` },
    { s: 'NALEDI', t: `[warm] Well done. Exam tip: when asked to recommend how to deal with a difficult personality, identify the type from the scenario, then give two or three practical actions fitted to that type.` },
    { s: 'MICHAEL', t: `[confident] Identify the type, then give specific actions.` },
    { s: 'NALEDI', t: `[teasing] In the next episode, a bonus round: everything from this series, quizzed.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 10,
  file: 'Episode 10 - Bonus - Team Performance and Conflict Management Exam Revision Round-Up',
  segs: [
    { s: 'AMELIA', t: `Episode 10, Bonus: Team Performance and Conflict Management Exam Revision Round-Up` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to the bonus episode of The Business Brief! No new content here. This is exam mode.` },
    { s: 'MICHAEL', t: `[excited] Ready when you are.` },
    { s: 'NALEDI', t: `[energetic] Quickfire definitions. Team dynamics.` },
    { s: 'MICHAEL', t: `[confident] How people interact when they share a goal.` },
    { s: 'NALEDI', t: `[crisp] Consensus versus unanimity.` },
    { s: 'MICHAEL', t: `[confident] Consensus means everyone is willing to go ahead with a decision. Unanimity means everyone fully agrees.` },
    { s: 'NALEDI', t: `[crisp] Grievance.` },
    { s: 'MICHAEL', t: `[confident] An employee's or group's feeling of being treated unfairly, usually about working conditions.` },
    { s: 'NALEDI', t: `[crisp] Mediator.` },
    { s: 'MICHAEL', t: `[confident] An objective person who helps settle a dispute between others so they can reconcile.` },
    { s: 'NALEDI', t: `[pleased] Four for four. Now multiple choice. A new crew meets for the first time and everyone is polite and unsure. Which stage: forming, storming, norming or performing?` },
    { s: 'MICHAEL', t: `[confident] Forming.` },
    { s: 'NALEDI', t: `[approving] Correct. A team argues over leadership after a few weeks. Which stage?` },
    { s: 'MICHAEL', t: `[confident] Storming.` },
    { s: 'NALEDI', t: `[clear] Which Belbin role is creative but forgetful: shaper, plant, implementer or specialist?` },
    { s: 'MICHAEL', t: `[confident] The plant.` },
    { s: 'NALEDI', t: `[clear] Which is not a grievance: conflict with a supervisor, an unhealthy workspace, a disciplinary matter, or conflict with a colleague?` },
    { s: 'MICHAEL', t: `[thoughtful] A disciplinary matter.` },
    { s: 'NALEDI', t: `[pleased] Four for four again. Now matching.` },
    { s: 'MICHAEL', t: `[eager] Go for it.` },
    { s: 'NALEDI', t: `[crisp] Complainer.` },
    { s: 'MICHAEL', t: `[confident] Finds fault; the manager asks for solutions.` },
    { s: 'NALEDI', t: `[crisp] Quiet person.` },
    { s: 'MICHAEL', t: `[confident] Holds back ideas; the manager invites input privately or in writing.` },
    { s: 'NALEDI', t: `[crisp] Aggressive person.` },
    { s: 'MICHAEL', t: `[confident] Dominates or intimidates; the manager sets clear behaviour expectations and addresses the behaviour.` },
    { s: 'NALEDI', t: `[pleased] Perfect. Now name the eight steps of conflict resolution.` },
    { s: 'MICHAEL', t: `[steady] Arrange a time and place. Recognise that views differ. Define the problem. Each party expresses their views. Brainstorm solutions. Agree criteria. Choose and implement a solution. Evaluate and monitor.` },
    { s: 'NALEDI', t: `[approving] Perfect order. Now a longer question. Discuss the causes of conflict in a business.` },
    { s: 'MICHAEL', t: `[thoughtful] Business itself breeds disagreement through debate and competition. Beyond that: personal differences in background and values, poor communication, competition that becomes negative, ignoring rules and procedures, poor organisation, and heavy workload and stress.` },
    { s: 'NALEDI', t: `[pleased] Strong. A case study now.` },
    { s: 'MICHAEL', t: `[curious] Go ahead.` },
    { s: 'NALEDI', t: `[storytelling] Picture Harbour Logistics. Two dispatchers keep taking the best delivery routes, leaving newer drivers with long, low-paying ones. There's no route allocation process, the newer drivers feel unfairly treated, and one of the two dispatchers is aggressive when questioned. How should the business respond?` },
    { s: 'MICHAEL', t: `[reasoning] First, identify causes: poor organisation from the missing process, personal conflict, and an aggressive personality. For the conflict, follow the eight steps, with a neutral place and a mediator if it's tense. Consider IBR, because relationships are strained. For the newer drivers, if they feel unfairly treated, they can raise a grievance through the policy: verbally, then in writing with a hearing, then the union or the CCMA. For the aggressive dispatcher, set clear behaviour expectations and address the behaviour, not the person. And finally, create a fair route rota.` },
    { s: 'NALEDI', t: `[delighted] That's a full-mark style answer: causes, steps, grievance route, personality handling, and a lasting fix.` },
    { s: 'MICHAEL', t: `[curious] Any final advice before the exam?` },
    { s: 'NALEDI', t: `[warm, serious] Three things. Know the team stages and be able to spot them from behaviour. For conflict and grievance questions, give steps in order and link each to the case. And for difficult personalities, identify the type first, then offer actions tailored to it.` },
    { s: 'MICHAEL', t: `[confident] Spot stages, steps in order, identify then tailor.` },
    { s: 'NALEDI', t: `[warm, proud] That wraps up team performance, conflict management and difficult personalities, from how teams succeed to how to handle tension when it arrives. You're well prepared.` },
    { s: 'MICHAEL', t: `[grateful] Thanks, Naledi. It feels a lot clearer now.` },
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

  console.log(`The Business Brief — Team Performance and Conflict Management (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

/**
 * The Business Brief — Corporate Social Responsibility — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-csr-podcast-audio.mjs
 *
 * Rebuild an episode (only missing or text-edited lines are regenerated), or force specific lines:
 *   ... <n>            e.g. 2
 *   ... <n>:2,-2       e.g. 2:2,-2  (line numbers; -1 = last line, -2 = second to last)
 *   ... <n> --fresh    wipe and re-record the whole episode
 * Original example:
 *
 *   node --env-file=.env.local scripts/generate-csr-podcast-audio.mjs 1
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
 *   podcasts/The-Business-Brief-CSR/Episode 1 - What Do We Owe Society.mp3
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import crypto from 'crypto';

const ELEVENLABS_KEY =
  process.env['ELEVENLABS_API_KEY_' + (process.env.ELEVENLABS_ACCOUNT || '1')] || process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_1 to .env.local and run with: node --env-file=.env.local scripts/generate-csr-podcast-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'The-Business-Brief-CSR');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'business-brief-csr');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'Episode 1 - What Do We Owe Society',
  segs: [
    { s: 'AMELIA', t: `Episode 1: What Do We Owe Society?` },
    { s: 'NALEDI', t: `[warm, upbeat] Hi everyone, and welcome to The Business Brief! In this episode we start a brand-new topic. We're asking a big question: what does a business owe the people and the world around it?` },
    { s: 'MICHAEL', t: `[curious] Big question! And I keep hearing the phrase "social responsibility" without really knowing what it covers. Can you pin it down for me?` },
    { s: 'NALEDI', t: `[clear, friendly] Sure. Social responsibility is an ethical idea. It says that every person and every organisation has a duty to do some good for society as a whole. At its heart, it's about balance: looking after the economy without wrecking the ecosystem, and the other way around.` },
    { s: 'MICHAEL', t: `[thoughtful] Is that a rule people are forced to follow, or more of a personal choice?` },
    { s: 'NALEDI', t: `[thoughtful] A bit of both, and that's the interesting part. Sometimes it means holding back. You avoid actions that harm the environment, like dumping dangerous substances or pumping out harmful emissions, and you stay inside the law while you do it. Other times it means stepping forward. You start projects that make life better for individuals, for communities, and for society.` },
    { s: 'MICHAEL', t: `[light, understanding] So one side is "don't do harm," and the other side is "go and do good."` },
    { s: 'NALEDI', t: `[encouraging] Spot on. Those are the passive and the active sides. And there's a trend worth noticing. More and more people feel that businesses should set their own standards instead of waiting for the law to force them. When that happens, being responsible becomes part of the culture. It stops being an outside rule that people resent.` },
    { s: 'MICHAEL', t: `[curious] What does that look like for the people who actually work there?` },
    { s: 'NALEDI', t: `[warm] Some businesses launch projects and invite staff to join in. Others let employees pick causes close to their hearts, then give them time to work on them. Think of HIV and Aids awareness, tutoring, or counselling. Real needs, chosen by the people doing the work.` },
    { s: 'MICHAEL', t: `[curious] And does the business put in its own money, or is it all staff giving their time?` },
    { s: 'NALEDI', t: `[matter-of-fact] Both. The business can donate funds or run its own community project. Staff can give too. Some workplaces set up a small monthly salary deduction, only if the employee asks for it, which goes to a cause the business backs. Others invite employees to pitch their own projects, and the business approves and supports the best ones.` },
    { s: 'MICHAEL', t: `[curious] Why do it that way instead of management simply picking a cause?` },
    { s: 'NALEDI', t: `[thoughtful] Because when people give their own money, time and energy, the idea sinks in. It spreads through the whole company and doesn't just sit in a policy document. Three things tend to follow. The volunteers feel useful. The community gets real help. And the company's image improves, as a by-product and not as the main goal.` },
    { s: 'MICHAEL', t: `[eager] Can you give me an example?` },
    { s: 'NALEDI', t: `[storytelling] Picture Kopano Bank, a mid-sized South African financial services company. A few years ago, it started a volunteer scheme. Any team of staff could suggest a community project, as long as it was a proper team effort. Whatever the staff chipped in, the bank matched. Then everyone used that combined pot on what the community actually asked for, not on whatever looked good in a photo.` },
    { s: 'MICHAEL', t: `[curious] What came out of it?` },
    { s: 'NALEDI', t: `[warm, pleased] A really mixed bag. One team supported a home for people with disabilities. Another built vegetable gardens at a local school. A third rounded up volunteers for a beach clean-up. Nobody dictated the cause. Staff chose what mattered to them, and the money was behind them.` },
    { s: 'MICHAEL', t: `[probing] Okay, but why would a bank care this much about a community? Beyond looking good?` },
    { s: 'NALEDI', t: `[thoughtful] Because the relationship runs in both directions. A business hires many of its people from the community around it, and it earns its income from that same community. So a thriving community is in the business's own interest. Follow the chain. When people get education and training, the pool of skilled workers grows. Skilled workers earn better wages. Better wages mean more spending power. And that spending power comes back to the business as customers.` },
    { s: 'MICHAEL', t: `[realising] So it's not pure charity. Self-interest and community benefit end up pointing the same way.` },
    { s: 'NALEDI', t: `[pleased] Exactly, and that idea will keep coming back throughout this series. Here's a task to test it. Imagine you had to visit five businesses near you and find out what they really do for society. Not the mission statement on the wall, but their actual programmes. What would convince you that a programme was genuine?` },
    { s: 'MICHAEL', t: `[thoughtful] I'd look at whether staff are hands-on or whether the company just writes a cheque once a year. And I'd check whether the community asked for the project, or whether it was just the easiest thing to put in a newsletter.` },
    { s: 'NALEDI', t: `[approving] Brilliant instincts. Hold on to that "genuine versus for show" test. We'll use it again and again.` },
    { s: 'NALEDI', t: `[serious, helpful] One more thing for exam preparation. Three social problems come up especially often when we talk about responsibility: HIV and Aids, unemployment, and poverty. Businesses can respond with health awareness and support, with skills development and job opportunities, and with projects that uplift communities.` },
    { s: 'MICHAEL', t: `[upbeat] Okay, let me recap. Social responsibility is the ethical duty of every person and organisation to benefit society, keeping the economy and the ecosystem in balance. It can be passive, by avoiding harm, or active, by starting projects. Businesses that set their own standards build it into their culture. They can involve staff, match donations, and support causes. And the whole thing works because a stronger community is good for the business too. Three issues to remember: HIV and Aids, unemployment, and poverty.` },
    { s: 'NALEDI', t: `[warm, encouraging] Beautifully put. Exam tip: when you're asked to define social responsibility, lead with the core idea. It's an ethical obligation to benefit society and keep a balance between the economy and the ecosystem. If the question asks you to say more, you can add that it may mean passively avoiding harm or actively starting projects that help.` },
    { s: 'MICHAEL', t: `[confident] Core idea first, then expand if they ask. Got it. What's next?` },
    { s: 'NALEDI', t: `[warm] In the next episode, we zoom in on Corporate Social Responsibility itself: what makes it different, why businesses take it on, and a famous model that organises it all.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 2,
  file: 'Episode 2 - The Business Case for Doing Good',
  segs: [
    { s: 'AMELIA', t: `Episode 2: The Business Case for Doing Good` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we get specific, with Corporate Social Responsibility: what it means, why businesses bother, and the model people use to explain it.` },
    { s: 'MICHAEL', t: `[curious] Is Corporate Social Responsibility just social responsibility with a fancier name?` },
    { s: 'NALEDI', t: `[clear, friendly] It's narrower than that. Corporate Social Responsibility, or CSR, is a business's ongoing promise to act ethically and to support economic development. The business accepts that it should give back and operate in a sustainable way. The people who benefit include its employees and their families, the local community, and society at large.` },
    { s: 'MICHAEL', t: `[curious] I keep running into the word "philanthropic." What does it mean?` },
    { s: 'NALEDI', t: `[helpful] Simply, acts that aim to lift other people up. You'll hear it a lot, because CSR sits right where business strategy meets genuine generosity.` },
    { s: 'MICHAEL', t: `[curious] Does every business define CSR in the same way?` },
    { s: 'NALEDI', t: `[thoughtful] Not exactly. A food company might stress community involvement, while another firm might focus on making products that are good for society. Still, three basic principles show up almost everywhere.` },
    { s: 'MICHAEL', t: `[eager] Go on, what are they?` },
    { s: 'NALEDI', t: `[clear] One: a business accepts responsibility for its effect on society and on the natural environment. Two: it reacts responsibly to how its business partners behave, so it chooses ethical suppliers and not just the cheapest ones. Three: it manages its relationship with society carefully, aiming to grow profits and add real value for people, not one at the expense of the other.` },
    { s: 'MICHAEL', t: `[curious] So why do businesses take this on? What drives them?` },
    { s: 'NALEDI', t: `[honest, thoughtful] Usually it's a mix, and it's rarely just one thing. Some treat CSR partly as advertising, a way to be seen as responsible. Others are shaped by a giving culture set by the founders. Most sit somewhere in the middle, pushed by four overlapping factors.` },
    { s: 'MICHAEL', t: `[curious] Which four?` },
    { s: 'NALEDI', t: `[counting them off] First, society expects it, and businesses want to meet those expectations. Second, the spirit of the law: going beyond the bare minimum. Third, real economic gains, like saving on fines and legal trouble or earning income from carbon credits. And fourth, plain ethics: dealing fairly and treating people well at work.` },
    { s: 'MICHAEL', t: `[wry] So even the noble motive usually travels with a practical one.` },
    { s: 'NALEDI', t: `[amused] That's the honest picture. And it's exactly why a model exists to bring order to all this. Archie Carroll, a researcher, proposed it in the early nineties. It's called the CSR Pyramid, and it describes four kinds of responsibility.` },
    { s: 'MICHAEL', t: `[excited] Let's build it from the bottom up.` },
    { s: 'NALEDI', t: `[encouraging] Good plan, because each level stands on the one below. At the base is economic responsibility. In plain words: be profitable. Without that foundation, nothing above it can last.` },
    { s: 'MICHAEL', t: `[curious] And above that?` },
    { s: 'NALEDI', t: `[steady] Legal responsibility: obey the law. Laws are society's written rules about right and wrong, so this level is about working inside them.` },
    { s: 'MICHAEL', t: `[curious] Third level?` },
    { s: 'NALEDI', t: `[thoughtful] Ethical responsibility: do what is right and fair, and avoid harm, even where the law says nothing. The law sets the floor, and ethics asks for more than the floor.` },
    { s: 'MICHAEL', t: `[curious] And at the very top?` },
    { s: 'NALEDI', t: `[warm] Philanthropic responsibility: be a good corporate citizen. This is the voluntary, giving-back layer. It sits on top of being profitable, legal, and ethical.` },
    { s: 'MICHAEL', t: `[thoughtful] So a business can't jump straight to philanthropy if the bottom layers are wobbly.` },
    { s: 'NALEDI', t: `[approving] Exactly. A company that isn't profitable, or isn't law-abiding, has no stable base for generosity. It's a hierarchy, not a menu to pick from.` },
    { s: 'MICHAEL', t: `[curious] Say I know nothing about a business. How would I use the pyramid to judge it?` },
    { s: 'NALEDI', t: `[thoughtful] Work upward. Is it profitable and sustainable? Does it follow the law? Beyond the law, does it behave ethically in grey areas? Only then look at the generosity on top. A flashy CSR campaign sitting on a business that barely obeys the law is a warning sign, not a strength.` },
    { s: 'NALEDI', t: `[pleased] That layered thinking is what examiners like to see. Not just naming the four levels, but explaining why the order matters.` },
    { s: 'MICHAEL', t: `[upbeat] Okay, recap time. CSR is a continuing commitment to act ethically and support economic development. It rests on three principles: taking responsibility for impact, holding business partners to ethical standards, and managing the relationship with society well. Businesses do it for four reasons: social expectation, going beyond the law, economic benefit, and ethics. And Carroll's pyramid ranks four levels from the bottom up: economic, legal, ethical, and philanthropic.` },
    { s: 'NALEDI', t: `[warm] Nicely done. Exam tip: if you're asked to explain the CSR Pyramid, give the four levels in the right order, from bottom to top, and say why the order matters. Marks go to understanding the hierarchy, not only listing four words.` },
    { s: 'MICHAEL', t: `[confident] Bottom to top, and explain why. What's next?` },
    { s: 'NALEDI', t: `[teasing, warm] In the next episode, we look at what businesses and communities actually gain when this is done properly.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},


{
  num: 3,
  file: 'Episode 3 - What Everyone Actually Gets Out of It',
  segs: [
    { s: 'AMELIA', t: `Episode 3: What Everyone Actually Gets Out of It` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at what businesses gain from CSR, and what communities gain from it too.` },
    { s: 'MICHAEL', t: `[skeptical, playful] Let's start with business. Isn't this just good publicity?` },
    { s: 'NALEDI', t: `[amused] There's more going on than publicity. Benefit number one is awareness. People are increasingly aware of what businesses owe the communities and environment around them. A company that takes part is seen as one that knows what's right and acts on it.` },
    { s: 'MICHAEL', t: `[curious] Is that awareness pushing businesses to act, or is it still optional?` },
    { s: 'NALEDI', t: `[serious] It's drifting away from optional. That's benefit number two: meeting expectations. Customers, suppliers, employees, regulators and the public are all asking tougher questions about a company's impact on society and the environment. Businesses have less and less room to opt out.` },
    { s: 'MICHAEL', t: `[understanding] So reputation pressure is doing real work.` },
    { s: 'NALEDI', t: `[agreeing] It is, and it leads straight into the third benefit: competitive advantage. A business that gets ahead of CSR earns good publicity and a stronger reputation than rivals who ignore it.` },
    { s: 'MICHAEL', t: `[curious] What about the people side? Hiring and keeping staff?` },
    { s: 'NALEDI', t: `[pleased] That's number four, human resources. Applicants often ask about a company's CSR programme, and a strong one attracts better candidates. Existing staff feel prouder of where they work, and they're more likely to stay.` },
    { s: 'MICHAEL', t: `[curious] Number five?` },
    { s: 'NALEDI', t: `[careful, thoughtful] Risk management. A good reputation takes years to build and can vanish in a week. A genuine CSR culture shows that a business is trying to do the right thing, and that cushions it if something goes wrong.` },
    { s: 'MICHAEL', t: `[curious] Six?` },
    { s: 'NALEDI', t: `[steady] Brand reputation. Customers tend to assume that a company running real CSR projects holds higher standards than its competitors, and many will choose its products because of that.` },
    { s: 'MICHAEL', t: `[curious] Seven?` },
    { s: 'NALEDI', t: `[clear] Licence to operate. Companies need to obey the law, and when they do more than the law demands, they're more likely to win approval from government and goodwill from the public. It signals that they take safety, diversity and the environment seriously.` },
    { s: 'MICHAEL', t: `[curious] And eight?` },
    { s: 'NALEDI', t: `[thoughtful] Good corporate governance. South Africa's King reports on corporate governance say that a company should behave as a responsible corporate citizen, protecting and investing in the economy, society and the natural environment. CSR is how a company puts that principle into practice.` },
    { s: 'MICHAEL', t: `[curious] Quick side question. Do those King reports ever change?` },
    { s: 'NALEDI', t: `[casual, relaxed] They do, they get updated every few years, and a newer edition has come out recently. But that's just general knowledge, so don't stress about it for your studies. For now, hold on to the idea: a company should act as a responsible corporate citizen. If your teacher mentions a particular edition, go with that.` },
    { s: 'MICHAEL', t: `[curious] Does a small business get the same benefits as a big one?` },
    { s: 'NALEDI', t: `[reassuring] There's no size requirement, though the shape changes. A small business might run a one-off charity drive or let staff volunteer. A large corporation might have a dedicated CSR unit reporting straight to the CEO or the board.` },
    { s: 'MICHAEL', t: `[shifting gears] Now flip it. What does the community actually get, beyond a business feeling good about itself?` },
    { s: 'NALEDI', t: `[counting them off] Four things. First, charitable contributions. Schools, hospitals and clinics near a business often receive donations, volunteers or sponsorship.` },
    { s: 'MICHAEL', t: `[curious] Second?` },
    { s: 'NALEDI', t: `[warm] Employee volunteer programmes. Many organisations encourage staff to give time, such as helping at a school sports day or reading with children.` },
    { s: 'MICHAEL', t: `[curious] Third?` },
    { s: 'NALEDI', t: `[engaged] Ongoing corporate involvement, over the long term or through shorter programmes. That might be community education, skills training that improves job prospects, or hiring people from the community.` },
    { s: 'MICHAEL', t: `[curious] And the fourth?` },
    { s: 'NALEDI', t: `[thoughtful] Safe, good-quality products and a protected environment. Companies shouldn't dump harmful waste or pollute the air. When they behave well, you get more recycling and more use of renewable resources.` },
    { s: 'MICHAEL', t: `[playful] Let's stress-test this. A business ticks the boxes on paper, but I'm not sure it's genuine.` },
    { s: 'NALEDI', t: `[approving] The right question to ask before we look at where CSR goes wrong. Picture Sunrise Dairies, a mid-sized dairy processor. It sponsors a school netball league, gives staff one paid volunteering day a month, and prints "sustainably sourced" on its packaging. On paper, it ticks several boxes.` },
    { s: 'MICHAEL', t: `[curious] What would make me believe it's the real thing?` },
    { s: 'NALEDI', t: `[practical] I'd check whether the sponsorship is steady from year to year or only appears when the company needs good news. I'd look for proof behind "sustainably sourced," like a supplier audit. And I'd ask whether staff value the volunteer day or feel pressured into it for show.` },
    { s: 'MICHAEL', t: `[realising] So the benefits aren't a box-ticking list. Each one has to hold up when you push on it.` },
    { s: 'NALEDI', t: `[warm] Perfect mindset to carry into the next episode.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Businesses gain eight things from real CSR: awareness, meeting stakeholder expectations, competitive advantage, easier recruitment and retention, risk management, brand reputation, a licence to operate, and alignment with good governance. Communities gain four: charitable contributions, volunteer programmes, ongoing corporate involvement, and safer products with less environmental harm.` },
    { s: 'NALEDI', t: `[encouraging] Well done. Exam tip: if a question asks for benefits, check whether it wants benefits for the business or for the community. They're marked as two separate lists, and mixing them can cost you marks even when every point is true.` },
    { s: 'MICHAEL', t: `[confident] Two lists, kept apart. What's next?` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at the flip side: what happens when CSR doesn't live up to its promises?` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 4,
  file: 'Episode 4 - When CSR Isnt What It Looks Like',
  segs: [
    { s: 'AMELIA', t: `Episode 4: When CSR Isn't What It Looks Like` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we get honest about the downside of CSR: where it runs into trouble, for businesses and for communities.` },
    { s: 'MICHAEL', t: `[curious] Where do the criticisms start?` },
    { s: 'NALEDI', t: `[serious, fair-minded] With a genuine debate about what a business is for. Some critics say a company's only job is to make profit for its shareholders, and that social problems belong to government and other organisations. That's a serious position that real economists hold, not a fringe view.` },
    { s: 'MICHAEL', t: `[curious] Is there a second layer to the criticism?` },
    { s: 'NALEDI', t: `[thoughtful] Yes, motives. Some people see CSR as public relations: a way to make a company look good without changing how it actually runs. The programme exists, but it never touches the big decisions.` },
    { s: 'MICHAEL', t: `[curious] And the deepest version of that?` },
    { s: 'NALEDI', t: `[grave] Sincerity. A company can announce its commitment to sustainable development while harming people or the environment somewhere else. Imagine a food company that sponsors youth sport while its products are widely criticised for damaging health. The gap between image and reality is exactly what people object to.` },
    { s: 'MICHAEL', t: `[reflective] That's a real gap between what's said and what's done.` },
    { s: 'NALEDI', t: `[steady] And it isn't a one-off. A run of corporate scandals pushed people to challenge insincere behaviour like this. By the late 1990s, businesses were being pushed to count more than profit. They had to account for the social and environmental value they created, or destroyed.` },
    { s: 'MICHAEL', t: `[intrigued] That sounds like it's leading to something specific.` },
    { s: 'NALEDI', t: `[pleased] It is: the Triple Bottom Line, one of the key frameworks in this whole topic. It's a way of measuring performance that goes beyond profit. It also looks at a business's social and environmental impact. And that links straight back to social responsibility. A responsible business doesn't look only at economic results. It also considers its effect on people and on the planet. The three dimensions are Profit, People and Planet.` },
    { s: 'MICHAEL', t: `[curious] Walk me through the picture.` },
    { s: 'NALEDI', t: `[clear] Imagine three overlapping circles. People stands for social impact, Planet for environmental impact, and Profit for the traditional financial result. A business only scores well if it is strong in all three, not just one.` },
    { s: 'MICHAEL', t: `[probing] Why would ignoring this cost real money, not only reputation?` },
    { s: 'NALEDI', t: `[practical] Three reasons. Many investors look for sustainable, well-run companies, so ignoring this can shrink a firm's access to capital. Some customers actively prefer socially responsible brands, so it can shrink the customer base. And many job seekers want to work for responsible employers, so it can shrink the talent pool.` },
    { s: 'MICHAEL', t: `[understanding] So there are real financial consequences either way.` },
    { s: 'NALEDI', t: `[agreeing] Right. Now let's cross over to the community side, because CSR can go wrong there in a different way.` },
    { s: 'MICHAEL', t: `[curious] How?` },
    { s: 'NALEDI', t: `[counting them off] Three common problems. First, a profit-driven focus. A business answers to its shareholders and must make money, so CSR projects often don't get enough effort to reach their potential.` },
    { s: 'MICHAEL', t: `[curious] Second?` },
    { s: 'NALEDI', t: `[sympathetic] Fading enthusiasm. Volunteers usually start out keen, and the community begins to depend on that energy. Over time, people get tired or busy, and the project loses its drive.` },
    { s: 'MICHAEL', t: `[curious] Third?` },
    { s: 'NALEDI', t: `[thoughtful] Doubts about motive. Communities often wonder why a project is happening at all. That scepticism can be fair, because sometimes advertising is dressed up as community help.` },
    { s: 'MICHAEL', t: `[playful] Let's test this on a scenario that could go either way.` },
    { s: 'NALEDI', t: `[storytelling] Picture Vukani Logistics, a freight company. It launches a widely advertised reading programme at a township primary school, with staff reading to learners twice a month. Six months later, volunteer numbers have dropped from fifteen to three, but the marketing still shows the happy launch-day photos.` },
    { s: 'MICHAEL', t: `[recognising] That's the enthusiasm problem exactly.` },
    { s: 'NALEDI', t: `[fair-minded] And notice that nobody has to be dishonest at the start. The company may have been completely sincere. But if the adverts stay the same while the real programme quietly shrinks, you get the sincerity gap again, where the image outlives the substance.` },
    { s: 'MICHAEL', t: `[curious] What should Vukani do?` },
    { s: 'NALEDI', t: `[practical] Admit the drop. Recruit fresh volunteers instead of relying on the original group. And update the marketing so it reflects reality. A smaller but honest programme damages a company's reputation far less than a shrinking one still sold as a success story.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! On the business side, criticism runs from the argument that profit is the only duty, through worries about PR-driven motives, to the sincerity gap between image and practice. That gap is part of why the Triple Bottom Line appeared, measuring Profit, People and Planet together. On the community side, the problems are a profit-driven focus, fading volunteer enthusiasm, and fair doubts about motives.` },
    { s: 'NALEDI', t: `[encouraging] Well summarised. Exam tip: when a question asks you to identify a problem or challenge with a CSR programme, say clearly whether it is a business-side or a community-side problem. They are treated as separate categories, and naming the wrong one can cost marks even if your reasoning is sound.` },
    { s: 'MICHAEL', t: `[confident] Business side or community side, never blurred. What's next?` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we cover the ten different places where CSR shows up inside a real business.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 5,
  file: 'Episode 5 - Ten Faces of Corporate Responsibility',
  segs: [
    { s: 'AMELIA', t: `Episode 5: Ten Faces of Corporate Responsibility` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we map out the ten areas where CSR actually appears inside a business. We'll also look at a historical South African investment index that ranked companies on this very thing.` },
    { s: 'MICHAEL', t: `[curious] Before the ten, why does the word "stakeholder" keep coming up?` },
    { s: 'NALEDI', t: `[clear] Because modern CSR is built on a wider idea of who matters. Stakeholders aren't only shareholders any more. They include investors, employees, business partners, customers, suppliers, local communities, society at large, and the environment. Businesses are expected to go beyond the legal minimum and weave social, environmental and ethical concerns into daily operations.` },
    { s: 'MICHAEL', t: `[playful] Ten is a lot to remember. Where do we start?` },
    { s: 'NALEDI', t: `[steady] Corporate governance. The big themes are accountability, transparency and obeying the law. Good governance helps a business reach its goals while protecting shareholders and keeping everyone informed.` },
    { s: 'MICHAEL', t: `[curious] Second?` },
    { s: 'NALEDI', t: `[clear] Involvement in professional or governing bodies. That means taking part in government, political or industry organisations, and helping shape how an industry is run from the inside.` },
    { s: 'MICHAEL', t: `[curious] Third?` },
    { s: 'NALEDI', t: `[thoughtful] Business ethics: building values like honesty, trust, respect and fairness into every policy, practice and decision, not just the public statements.` },
    { s: 'MICHAEL', t: `[curious] Fourth? How is that different?` },
    { s: 'NALEDI', t: `[steady] Ethical practices, the voluntary kind that go beyond the law. For instance, choosing a production method that doesn't harm animals even though no law demands it.` },
    { s: 'MICHAEL', t: `[curious] Fifth?` },
    { s: 'NALEDI', t: `[warm] Workplace and labour relations. That's a safe, healthy workplace with a sensible work-life balance. It also helps attract good people who stay longer, which cuts recruitment and retraining costs.` },
    { s: 'MICHAEL', t: `[curious] Sixth?` },
    { s: 'NALEDI', t: `[clear] Investment practices. Companies are encouraged to invest in recognised CSR benchmarks, like the former JSE Socially Responsible Investment Index, the SRI Index, here in South Africa, or FTSE4Good in London. We'll come back to the JSE one in a minute.` },
    { s: 'MICHAEL', t: `[curious] Seventh?` },
    { s: 'NALEDI', t: `[steady] Employment equity: equal opportunity and diversity at work. That includes employing people with disabilities, having strong policies against sexual harassment, handling HIV and Aids sensitively, and encouraging staff volunteering. Together these show how healthy a company's CSR really is, beyond what it says on paper.` },
    { s: 'MICHAEL', t: `[curious] Eighth?` },
    { s: 'NALEDI', t: `[thoughtful] Supply chain. A business should use its position to push good CSR practice along its entire supply chain. The catch is that a supplier's bad behaviour can damage your image even when you did nothing wrong yourself.` },
    { s: 'MICHAEL', t: `[curious] Ninth?` },
    { s: 'NALEDI', t: `[clear] Customers. They care about more than price and quality now. They want to know where raw materials came from, under what conditions things were made, and what the surrounding community looks like.` },
    { s: 'MICHAEL', t: `[curious] And the tenth?` },
    { s: 'NALEDI', t: `[warm] The environment. Broad CSR means going beyond the legal minimum to protect it: cutting emissions and pollutants, finding sustainable ways to use natural resources, and making environmentally friendly products.` },
    { s: 'MICHAEL', t: `[curious] Okay, that's the ten. Now, this JSE index you mentioned. What was it?` },
    { s: 'NALEDI', t: `[storytelling] In 2004, the Johannesburg Stock Exchange launched South Africa's first socially responsible investment index, inspired by similar efforts overseas, like the Dow Jones Sustainability Index in New York and FTSE4Good in London. Eligible companies were reviewed every year against a long list of criteria.` },
    { s: 'MICHAEL', t: `[curious] What kinds of things were reviewed?` },
    { s: 'NALEDI', t: `[clear] Commitment to Black Economic Empowerment, responsible handling of HIV and Aids in the workplace, fair labour practices, and environmental sustainability and climate change, among others. The reporting was grouped under four headings: environmental issues, employee issues, other social issues such as community involvement and stakeholder engagement, and governance issues such as board practice, ethics codes and risk management.` },
    { s: 'MICHAEL', t: `[curious] Is the index still around?` },
    { s: 'NALEDI', t: `[clear] It was, until the end of 2015. It was then replaced by the FTSE/JSE Responsible Investment Index Series. The point for us is that formal, ranked recognition of good CSR practice kept evolving instead of disappearing.` },
    { s: 'MICHAEL', t: `[playful] Here's a challenge. Suppose I had to design my own CSR pyramid for a made-up business. How would I do it?` },
    { s: 'NALEDI', t: `[encouraging] Start at the bottom, as Carroll's model does. Make sure the business is profitable and law-abiding. Then pick which of the ten areas it is strongest in, maybe workplace relations and the environment, and make those the centrepiece, with a concrete example for each level. The strongest answers use colour and specific detail to show all four levels clearly, not just label them.` },
    { s: 'MICHAEL', t: `[realising] So it's less about memorising ten words and more about placing a real business on the map.` },
    { s: 'NALEDI', t: `[pleased] That's the skill. Hand the recap to you this time!` },
    { s: 'MICHAEL', t: `[upbeat] The ten areas are corporate governance, involvement in professional bodies, business ethics, voluntary ethical practices, workplace and labour relations, investment practices, employment equity, supply chain, customers, and the environment. And the old JSE SRI Index, launched in 2004, reviewed companies each year across environmental, employee, social and governance reporting, before being replaced in 2015 by the FTSE/JSE Responsible Investment Index Series.` },
    { s: 'NALEDI', t: `[warm] Perfect. Exam tip: if a short scenario asks which component it shows, look for the stakeholder group being affected. Supplier problems point to supply chain, and workplace conditions point to workplace and labour relations. The component usually matches who is affected.` },
    { s: 'MICHAEL', t: `[confident] Match the component to the stakeholder. What's next?` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at something close to CSR but not identical: Corporate Social Investment, and exactly how it differs.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 6,
  file: 'Episode 6 - From Responsibility to Investment',
  segs: [
    { s: 'AMELIA', t: `Episode 6: From Responsibility to Investment` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we meet a term people often mix up with CSR: Corporate Social Investment, or CSI. We'll work out exactly how it's different.` },
    { s: 'MICHAEL', t: `[curious] If CSR already covers so much, why do we need a second term?` },
    { s: 'NALEDI', t: `[thoughtful] Fair question. Historically the two were used as if they meant the same thing. Corporate Social Investment now refers to projects that sit outside a business's normal activities and are designed to benefit the community.` },
    { s: 'MICHAEL', t: `[curious] So what separates it from CSR?` },
    { s: 'NALEDI', t: `[clear] Intent. CSI is not aimed directly at increasing the business's profit, and it's not meant to be a marketing campaign. It is developmental in nature. The business uses its resources to uplift communities.` },
    { s: 'MICHAEL', t: `[puzzled] But you said the two used to be the same. What changed?` },
    { s: 'NALEDI', t: `[storytelling] CSI began as purely philanthropic. Over time, people noticed that this kind of giving could also improve a company's reputation. So the concepts were pulled apart and defined separately. CSR now means a company's overall responsibility toward the environment it operates in. CSI is one piece of that: the part focused on uplifting communities through direct investment.` },
    { s: 'MICHAEL', t: `[working it out] So every CSI project is CSR, but not every CSR activity is CSI.` },
    { s: 'NALEDI', t: `[pleased] That's the cleanest way to hold it. CSR is the whole umbrella. CSI is one specific piece under it, focused on projects outside the normal activities of the business that directly uplift communities. CSI is not aimed directly at increasing profits or serving as a marketing initiative.` },
    { s: 'MICHAEL', t: `[curious] Where does South Africa stand on this compared with other countries?` },
    { s: 'NALEDI', t: `[honest] Businesses worldwide have taken up CSR and CSI. South Africa historically lagged behind many countries but has been catching up. The King reports on corporate governance have helped improve local practice.` },
    { s: 'MICHAEL', t: `[curious] What does CSI look like in practice? Is it just writing a cheque?` },
    { s: 'NALEDI', t: `[thoughtful] There are many approaches. Some companies commit a fixed share of their profit to community projects.` },
    { s: 'MICHAEL', t: `[curious] Can you make that concrete?` },
    { s: 'NALEDI', t: `[storytelling] Picture Baobab Fuels, a South African energy company. Every year, it sets aside a fixed percentage of its pre-tax profit for community work, like improving access to quality education and tackling health problems such as malaria and HIV in the areas where it operates.` },
    { s: 'MICHAEL', t: `[curious] What other forms does CSI take?` },
    { s: 'NALEDI', t: `[counting them off] A wide range. Donations to schools, charities and worthy causes. Support for the company's own staff, like training, HIV and Aids education and counselling, and bursaries for employees' children. Hands-on, sustainable projects run with community members. Sports development. And direct action on environmental problems.` },
    { s: 'MICHAEL', t: `[curious] Is there a fixed list of issues CSI should tackle?` },
    { s: 'NALEDI', t: `[clear] It's open-ended, but it draws on the same socio-economic issues covered elsewhere in the subject: poverty and inequality, unemployment and low productivity, crime and violence, and HIV and Aids. Whichever route a business takes, the goal is to uplift society and the environment we live in.` },
    { s: 'MICHAEL', t: `[playful] Let's test the CSR-versus-CSI difference with a scenario.` },
    { s: 'NALEDI', t: `[encouraging] Good, because students slip up on this one a lot. Picture Harvest Mart, a grocery chain with two initiatives. First, a supplier code of conduct requiring every farm it buys from to meet fair labour standards, because a scandal about an unethical supplier would hurt the Harvest Mart brand. Second, an annual grant that funds vegetable gardens at under-resourced schools, with no link to Harvest Mart's own supply chain or sales.` },
    { s: 'MICHAEL', t: `[confident] I'd say the supplier code is CSR and the school gardens are CSI.` },
    { s: 'NALEDI', t: `[probing] Right. Can you explain why?` },
    { s: 'MICHAEL', t: `[reasoning] The supplier code protects Harvest Mart's own reputation and supply chain. It's about managing the business's responsibility toward its operating environment, so it's CSR. The school gardens are outside the normal running of the business and directly uplift a community, so that's the narrower CSI.` },
    { s: 'NALEDI', t: `[approving] That's the kind of reasoning examiners want. Not just labelling, but explaining with the definitions.` },
    { s: 'NALEDI', t: `[serious, helpful] One more point for exams. CSI can also be evaluated by its positive and negative impact on both the business and the community. Many of the impact points we covered under CSR can apply here too.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Corporate Social Investment means developmental projects outside a business's normal activities, aimed at benefiting and uplifting the community. They aren't aimed directly at increasing profit or meant as marketing. It's a sub-component of the broader CSR umbrella. South Africa has been catching up with help from the King reports. And CSI takes many forms: fixed profit-percentage commitments, donations, staff upliftment, hands-on community projects, sports development, and environmental work.` },
    { s: 'NALEDI', t: `[warm] Well done. Exam tip: when separating CSR from CSI, look at the main purpose, and ask whether the activity is part of normal business operations. CSI sits outside normal activities and aims directly at community upliftment. CSR covers the business's wider responsibility to its operating environment.` },
    { s: 'MICHAEL', t: `[confident] Check the purpose and whether it's outside normal operations. What's next?` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we look at some real-style examples of large CSI projects, with serious money and long-term planning behind them.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 7,
  file: 'Episode 7 - Five Projects, One Big Idea',
  segs: [
    { s: 'AMELIA', t: `Episode 7: Five Projects, One Big Idea` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we see what CSI looks like when real money and long-term planning stand behind it. We have five different projects, each built on a slightly different idea.` },
    { s: 'MICHAEL', t: `[curious] Where do we begin?` },
    { s: 'NALEDI', t: `[storytelling] With a partnership, two organisations from different worlds who join forces because their interests overlap. Picture Solar Springs Bottling, a drinks company, teaming up with a conservation group that protects wetlands and freshwater.` },
    { s: 'MICHAEL', t: `[puzzled] What could a bottling company and a conservation group have in common?` },
    { s: 'NALEDI', t: `[clear] Water. It's the main ingredient in the company's products, and it's just as vital to wildlife and to healthy communities. In the partnership, the company commits to using water more efficiently in its factories and cutting its energy use and emissions. Together with the conservation group, it also brings other industry players on board to protect freshwater sources, including in South Africa.` },
    { s: 'MICHAEL', t: `[working it out] So the company's own supply interest and the community's environmental interest point in the same direction.` },
    { s: 'NALEDI', t: `[pleased] And that alignment is what makes a partnership last, instead of being a one-off donation. Now let's go to a retail example on a larger scale.` },
    { s: 'MICHAEL', t: `[curious] Go ahead.` },
    { s: 'NALEDI', t: `[storytelling] Back to Harvest Mart, the grocery chain from our CSR-versus-CSI example. Its CSI budget runs into the tens of millions of rand. One strand is surplus redistribution: food and goods that would otherwise be thrown away are sent to communities in need. Another is a programme supporting vulnerable children.` },
    { s: 'MICHAEL', t: `[impressed] That's a different model, using existing resources instead of raising new money.` },
    { s: 'NALEDI', t: `[approving] And a clever one, because the surplus would otherwise be wasted. Third example: a healthcare retail group.` },
    { s: 'MICHAEL', t: `[curious] Tell me.` },
    { s: 'NALEDI', t: `[storytelling] Picture Thuli's Pharmacy Group. Its foundation runs a "Helping Hand Fund," where organisations can apply for help on behalf of people who urgently need it. It also supports a pet-therapy programme, a child-safety project, a shelter for people without homes, and extra support for a handful of struggling schools.` },
    { s: 'MICHAEL', t: `[impressed] That's a broad spread, with people, animals, shelter and education under one foundation.` },
    { s: 'NALEDI', t: `[thoughtful] That breadth is common with foundation-style CSI. Instead of one flagship, there's a portfolio that covers several needs at once. Fourth example: a bank.` },
    { s: 'MICHAEL', t: `[curious] Let's hear it.` },
    { s: 'NALEDI', t: `[storytelling] Picture Lion's Gate Bank. Its CSI work includes backing a national campaign against gender-based violence, supporting people with disabilities and those living with HIV or Aids, and, as its flagship, a nationwide money-skills campaign for school learners.` },
    { s: 'MICHAEL', t: `[curious] What did that involve in practice?` },
    { s: 'NALEDI', t: `[clear] Printed guidebooks for learners and teachers were distributed with help from education departments, reaching hundreds of thousands of learners with basic budgeting and money-management skills, and encouraging entrepreneurship and financial independence.` },
    { s: 'MICHAEL', t: `[thoughtful] So it builds a skill the community keeps after the campaign ends.` },
    { s: 'NALEDI', t: `[pleased] That's the point. The strongest CSI builds lasting ability, not just short-term relief. The final example is about experience rather than money or materials.` },
    { s: 'MICHAEL', t: `[curious] Go on.` },
    { s: 'NALEDI', t: `[storytelling] Back to Baobab Fuels. One flagship project is a day-trip programme for children from communities next to a major game reserve, giving them a chance to experience it first-hand.` },
    { s: 'MICHAEL', t: `[puzzled] Why would that need a special programme? They live right next to it.` },
    { s: 'NALEDI', t: `[thoughtful] That's the irony. They live beside the reserve, but many families can't afford the entry fees and transport, so most children have never been inside. Over time the programme has improved children's knowledge of the environment. Seeing an animal in the wild builds a love of nature that a classroom can't.` },
    { s: 'MICHAEL', t: `[curious] Does Baobab Fuels support other things too?` },
    { s: 'NALEDI', t: `[clear] Yes: conservation more broadly, South African heritage, maths, science and technology education, and social development around disability, HIV and Aids, women's empowerment, and grassroots sport.` },
    { s: 'MICHAEL', t: `[reflective] These five all have different structures: a partnership, redirected surplus, a foundation portfolio, a skills campaign, and an experience-based project.` },
    { s: 'NALEDI', t: `[encouraging] And that's the takeaway. There is no single template for good CSI. What matters is a genuine match between what the business is good at and what the community needs, not copying what another company did.` },
    { s: 'MICHAEL', t: `[playful] Let's practise. Say you work in Human Resources and notice an urgent need in your company's community. How would you pitch a project to your manager?` },
    { s: 'NALEDI', t: `[practical] Two parts. First, name the specific socio-economic issue, explain why you chose it, and describe the impact it is having on the community right now. Be specific and visible, not vague. Second, describe the project you would run to ease that problem, concrete enough that your manager can picture it, with a rough idea of the resources and time needed.` },
    { s: 'MICHAEL', t: `[realising] So specificity is what separates a strong pitch from a vague good intention.` },
    { s: 'NALEDI', t: `[warm] Exactly the skill this topic keeps testing.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Real CSI takes many shapes: cross-sector partnerships built on shared interests, redirecting surplus, broad foundation portfolios, large skills campaigns that build lasting capability, and experience programmes that shape values in the next generation. The common thread is a genuine match between a business's strengths and a real community need.` },
    { s: 'NALEDI', t: `[encouraging] Strong close. Exam tip: when a case study describes a company's CSI and asks about effectiveness, ask whether the project builds something lasting, like a skill, a habit or a changed attitude, or whether it only helps in the moment. That distinction earns credit.` },
    { s: 'MICHAEL', t: `[confident] Lasting impact versus momentary help. What's next?` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we cover the elements of responsible business practice, and the biggest challenges standing in its way.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 8,
  file: 'Episode 8 - The Five Pillars of Doing It Right',
  segs: [
    { s: 'AMELIA', t: `Episode 8: The Five Pillars of Doing It Right` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we explore responsible business practice: the ideas behind it, the five elements it is built from, and the honest challenges standing in its way.` },
    { s: 'MICHAEL', t: `[curious] Is there one agreed definition of "responsible business practice"?` },
    { s: 'NALEDI', t: `[honest] Not a single universal one. But several concepts are consistently linked to it, and you've already met some. Picture one central idea, responsible business practice, with five concepts feeding into it.` },
    { s: 'MICHAEL', t: `[eager] Let's go through them.` },
    { s: 'NALEDI', t: `[counting them off] First, Corporate Social Responsibility itself, which covers community, society, the environment, the workplace and governance. Second, Triple Bottom Line reporting, which measures performance on economic, social and environmental factors together.` },
    { s: 'MICHAEL', t: `[curious] Third?` },
    { s: 'NALEDI', t: `[clear] Sustainability: running a business so it serves the needs of today while leaving future generations with enough natural, social and human resources of their own.` },
    { s: 'MICHAEL', t: `[curious] Fourth?` },
    { s: 'NALEDI', t: `[thoughtful] Stakeholder engagement. That means looking beyond short-term gains for shareholders to the long-term interests of everyone affected.` },
    { s: 'MICHAEL', t: `[curious] And fifth?` },
    { s: 'NALEDI', t: `[candid] Enlightened self-interest: an organisation recognising that taking part in CSR and sustainable practice is genuinely in its own long-term interest. It isn't pure selflessness, and it's honest about that.` },
    { s: 'MICHAEL', t: `[curious] So those five feed the big idea. Is there a separate list of what responsible business practice is made of?` },
    { s: 'NALEDI', t: `[steady] Yes, a second framework with five equal elements, best pictured as a pie chart. First, environmental: the direct and indirect impact of an organisation's operations, products or services on the environment, including through its suppliers.` },
    { s: 'MICHAEL', t: `[curious] Second?` },
    { s: 'NALEDI', t: `[clear] Community and social: the effect of an organisation's projects, products, services or investments on communities, locally or globally.` },
    { s: 'MICHAEL', t: `[curious] Third?` },
    { s: 'NALEDI', t: `[warm] Workplace practices: how a business treats its people. That means respect, a diverse team with equal chances, time for life outside work, room to grow professionally, and honouring employees' rights.` },
    { s: 'MICHAEL', t: `[curious] Fourth?` },
    { s: 'NALEDI', t: `[clear] Marketplace and business conduct: behaving responsibly in how products and services are developed, bought, sold and marketed.` },
    { s: 'MICHAEL', t: `[curious] And the fifth?` },
    { s: 'NALEDI', t: `[steady] Ethical governance. At every level, from the board downward, there should be transparency, sound risk management, and effective codes of conduct and ethics.` },
    { s: 'MICHAEL', t: `[serious] Now the honest part. What gets in the way?` },
    { s: 'NALEDI', t: `[grave] Four challenges worth knowing precisely. First, conflict of purpose. A business exists to make a profit, and critics say anything beyond that clashes with its core purpose.` },
    { s: 'MICHAEL', t: `[curious] Second?` },
    { s: 'NALEDI', t: `[thoughtful] Doubts about who really benefits. There's a worry that a business may gain more from its CSI spending, in reputation or in tax position, than the community gains in practice.` },
    { s: 'MICHAEL', t: `[curious] Third?` },
    { s: 'NALEDI', t: `[wry] Consumer cynicism. People aren't easily convinced a business truly has the community's interests at heart, especially after seeing the sincerity gaps we discussed earlier.` },
    { s: 'MICHAEL', t: `[curious] And fourth?` },
    { s: 'NALEDI', t: `[sombre] Reversible benefits. When the economy is strong, contributions to community projects tend to be generous. When times get tough, money tightens and projects are often the first thing cut. That can seriously hurt a community that had come to depend on the support.` },
    { s: 'MICHAEL', t: `[reflective] So a project can be genuine at the start and still let people down later, just because of the economy.` },
    { s: 'NALEDI', t: `[steady] Right. Good intentions at launch don't guarantee strength through a downturn. That's why it matters to account for both the financial and non-financial costs of doing business, through an ongoing process of accountability and transparency.` },
    { s: 'MICHAEL', t: `[curious] Is there a structured way to think about that process?` },
    { s: 'NALEDI', t: `[clear] Yes, a framework called the four Rs. Reflection: looking honestly at the business's impacts, risks and opportunities. Responsible: the business practices and management processes themselves. Reporting: sharing those practices openly in the public domain. And Resilience: built through transparency, trust, adaptability and innovation.` },
    { s: 'MICHAEL', t: `[working it out] So the four Rs are an ongoing process for keeping responsible business practice accountable and transparent.` },
    { s: 'NALEDI', t: `[pleased] Exactly. Reflection looks at impacts, responsible practice guides how the business operates, reporting makes it visible, and resilience helps the business adapt and stay sustainable over time.` },
    { s: 'MICHAEL', t: `[playful] Let's test it on a scenario.` },
    { s: 'NALEDI', t: `[encouraging] Good idea. Picture Mzansi Freight, a logistics company that has funded a youth driver-training programme for three years. A sudden fuel price jump squeezes its margins hard. Using the four Rs, how should it respond instead of simply cancelling the programme overnight?` },
    { s: 'MICHAEL', t: `[reasoning] I'd start with reflection: assess what the programme has actually achieved, not only what it costs. Then be responsible in how any change is made, maybe scaling back instead of cutting it entirely. Report the change openly to the community instead of letting it quietly fade, which avoids a sincerity gap. And build resilience by finding a partner or co-funder, so the programme doesn't rely only on Mzansi's own margins next time.` },
    { s: 'NALEDI', t: `[impressed] That's the layered answer that scores well. Not just "keep it" or "cut it," but a structured response using all four Rs together.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Responsible business practice rests on five concepts: CSR, Triple Bottom Line reporting, sustainability, stakeholder engagement, and enlightened self-interest. It is made up of five elements: environmental, community and social, workplace practices, marketplace and business conduct, and ethical governance. It faces four challenges: conflict of purpose, doubts about who benefits, consumer cynicism, and reversible benefits in hard times. And it uses the four Rs, reflection, responsible practice, reporting and resilience, as an ongoing process of accountability and transparency.` },
    { s: 'NALEDI', t: `[warm] Thorough and clear. Exam tip: don't mix up the five concepts with the five elements. They sound alike but are separate lists. If a question asks for the elements of responsible business practice, give the pie-chart five, not the concept five.` },
    { s: 'MICHAEL', t: `[confident] Two separate fives, never mixed. What's next?` },
    { s: 'NALEDI', t: `[teasing] In the next episode, we cover the actual South African laws behind all of this, and why some carry real penalties while others don't.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 9,
  file: 'Episode 9 - The Law Behind the Good Intentions',
  segs: [
    { s: 'AMELIA', t: `Episode 9: The Law Behind the Good Intentions` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to The Business Brief! In this episode we look at what happens when a business commits for the long term, and at the real South African legislation sitting behind it all.` },
    { s: 'MICHAEL', t: `[curious] Let's start with the long view. Why commit, instead of doing the bare minimum?` },
    { s: 'NALEDI', t: `[thoughtful] Because businesses aren't separate from society. They're part of the communities they operate in, and they can't keep creating wealth if the society around them is failing. So corporate goals need to line up with society's goals, and a CSR strategy needs a long-term approach, not a campaign-by-campaign one.` },
    { s: 'MICHAEL', t: `[curious] Is there a payoff for taking that long view?` },
    { s: 'NALEDI', t: `[clear] There are eight broad benefits. First, reputation and competitive advantage: a good name with customers, a stronger brand, goodwill, public trust and access to new markets. Second, a stronger social approval to operate, through better relationships with the communities the business is part of.` },
    { s: 'MICHAEL', t: `[curious] Third?` },
    { s: 'NALEDI', t: `[warm] Employee satisfaction: better management performance, more learning and innovation, higher productivity, and a better ability to attract, keep and motivate talented people.` },
    { s: 'MICHAEL', t: `[curious] Fourth and fifth?` },
    { s: 'NALEDI', t: `[steady] Risk management, which brings long-term security. And access to capital: better relations with investors and, as a result, better access to funding.` },
    { s: 'MICHAEL', t: `[curious] Six, seven, eight?` },
    { s: 'NALEDI', t: `[counting them off] Financial performance, through operating more efficiently. Reduced environmental impact, which means cost savings and smarter strategy. And finally, the long-term perspective itself, which means operating with a longer view instead of chasing only short-term profit.` },
    { s: 'MICHAEL', t: `[curious] Is any of this actually required by law, or is it all voluntary?` },
    { s: 'NALEDI', t: `[careful, honest] It's a mix, and the mix matters. The Johannesburg Stock Exchange builds the King governance requirements into its rules for listed companies. Those promote integrated reporting and expect companies to apply the principles or explain where they don't. The King reports themselves aren't legislation, though many of their ideas have found their way into law over time.` },
    { s: 'MICHAEL', t: `[curious] Now the laws with real teeth. Where do we start?` },
    { s: 'NALEDI', t: `[clear] The Employment Equity Act. Its aim is a fairer workplace, where people get the same chances and are treated equally. It sets out steps to stop unfair discrimination, and it pushes employers toward a workforce that reflects the country's different groups.` },
    { s: 'MICHAEL', t: `[curious] And skills?` },
    { s: 'NALEDI', t: `[clear] The Skills Development Act. It provides a framework for improving skills at national, sector and workplace level, linked to the National Qualifications Framework so that learnerships can lead to recognised qualifications. It's funded through the Skills Development Levy. In general, employers pay one percent of the total pay of their employees to SARS, and businesses can claim back part of the levy through their SETA if they meet certain conditions.` },
    { s: 'MICHAEL', t: `[curious] How does that connect to the wider skills strategy?` },
    { s: 'NALEDI', t: `[thoughtful] The Human Resource Development Strategy brings government, employers and trade unions together to help South Africa reach its wider growth goals. The Skills Development Act created the institutions, including the National Skills Authority and the Sector Education and Training Authorities, or SETAs. The national skills strategy guides the country's wider priorities.` },
    { s: 'MICHAEL', t: `[curious] What do SETAs actually do?` },
    { s: 'NALEDI', t: `[clear] Several concrete things: develop skills plans for their sector, approve the workplace skills plans businesses submit, pay out grants when businesses meet the rules, report on how plans are working, and promote and set up learnerships. The overall aim is to connect learning to real workplace demand, build the skills of existing workers, and help employers become more productive and competitive.` },
    { s: 'MICHAEL', t: `[curious] And Black Economic Empowerment? Where does that fit?` },
    { s: 'NALEDI', t: `[thoughtful] Think of it as an evolution, not a single fixed law. The Broad-Based Black Economic Empowerment Act, Act 53 of 2003, set up the legal framework, and the first comprehensive Codes of Good Practice followed in 2007. Earlier, narrower empowerment efforts ended up benefiting a small group, which is part of why a broader, codified approach was needed.` },
    { s: 'MICHAEL', t: `[curious] How is B-BBEE actually measured?` },
    { s: 'NALEDI', t: `[clear] Through the applicable Codes of Good Practice and their scorecards. It's a structured, standard system, not something each business defines for itself.` },
    { s: 'MICHAEL', t: `[sceptical] That sounds as if it could be loosely enforced.` },
    { s: 'NALEDI', t: `[fair-minded] It's a fair worry, but the honest answer is more nuanced than loose versus strict. B-BBEE mostly works through a measured status and the opportunities or consequences attached to that status, not through a general fine for a low score. That's different from laws like the Employment Equity Act, which have direct compliance mechanisms.` },
    { s: 'MICHAEL', t: `[playful] Let me test that. Two companies: one misses Employment Equity targets, the other misses B-BBEE targets. Same consequences?` },
    { s: 'NALEDI', t: `[pleased] No, and that's the distinction to lock in. The Employment Equity company could face a compliance order, court action, and ultimately a real fine. The B-BBEE company has its status measured against the codes and scorecard, and a low score can limit opportunities and recognition, but it doesn't automatically bring the same kind of direct fine.` },
    { s: 'MICHAEL', t: `[curious] Let's finish with something practical. If you had to research a real company's CSR programme as a future employer, what would you look for?` },
    { s: 'NALEDI', t: `[practical] At least three concrete reasons why a strong CSR culture would matter to me personally, beyond generic praise. I'd pick a real business I might want to work for and find out exactly which projects it runs. And then the harder question: are the programmes effective and making a real difference, or do they just look good in a report? That question runs through this whole topic.` },
    { s: 'MICHAEL', t: `[upbeat] Recap! Long-term commitment brings eight recognised benefits: reputation, social approval, employee satisfaction, risk management, access to capital, financial performance, lower environmental impact, and the long-term perspective itself. The Employment Equity Act and the Skills Development Act carry real compliance mechanisms. The Skills Development Levy funds SETAs and learnerships. And B-BBEE grew from narrower efforts into a broader system measured through the codes and scorecards.` },
    { s: 'NALEDI', t: `[warm] A strong close to this run. Exam tip: if you're asked to compare two laws, check the purpose and the compliance mechanism separately. Two laws can share a purpose and still differ completely in how strictly they're enforced.` },
    { s: 'MICHAEL', t: `[confident] Purpose and enforcement, checked separately. What's next?` },
    { s: 'NALEDI', t: `[teasing] In the next episode, it's a bonus round: every definition, framework and distinction from this whole run, quizzed properly.` },
    { s: 'MICHAEL', t: `[cheerful] See you there!` },
  ],
},

{
  num: 10,
  file: 'Episode 10 - Bonus - Corporate Social Responsibility Exam Revision Round-Up',
  segs: [
    { s: 'AMELIA', t: `Episode 10, Bonus: Corporate Social Responsibility Exam Revision Round-Up` },
    { s: 'NALEDI', t: `[warm, upbeat] Welcome to the bonus episode of The Business Brief! This one revises social responsibility, CSR, CSI, responsible business practice, and the laws behind them. There's no new content, so let's go straight into exam mode.` },
    { s: 'MICHAEL', t: `[excited] I've been waiting for this one! Where do we start?` },
    { s: 'NALEDI', t: `[energetic] Quickfire definitions. I give you a term, you give me the meaning in one line.` },
    { s: 'MICHAEL', t: `[ready] Go!` },
    { s: 'NALEDI', t: `[crisp] Social responsibility.` },
    { s: 'MICHAEL', t: `[confident] The ethical duty of every individual or organisation to benefit society, keeping a balance between the economy and the ecosystem.` },
    { s: 'NALEDI', t: `[crisp] Corporate Social Responsibility.` },
    { s: 'MICHAEL', t: `[confident] A business's continuing commitment to act ethically and support economic development, improving quality of life for employees, the community and society.` },
    { s: 'NALEDI', t: `[crisp] Corporate Social Investment.` },
    { s: 'MICHAEL', t: `[confident] Projects outside a business's normal activities that are aimed at benefiting and uplifting the community, and are not aimed directly at increasing profit or meant as marketing.` },
    { s: 'NALEDI', t: `[crisp] Triple Bottom Line.` },
    { s: 'MICHAEL', t: `[confident] Measuring business performance across three dimensions together: Profit, People and Planet.` },
    { s: 'NALEDI', t: `[pleased] Four for four! One more: enlightened self-interest.` },
    { s: 'MICHAEL', t: `[thoughtful] When an organisation recognises that taking part in CSR and sustainable practice is genuinely in its own long-term interest.` },
    { s: 'NALEDI', t: `[crisp] Perfect. Now Carroll's CSR Pyramid. I name the level, you give its position.` },
    { s: 'MICHAEL', t: `[ready] Ready.` },
    { s: 'NALEDI', t: `[crisp] Economic responsibility.` },
    { s: 'MICHAEL', t: `[confident] The base: be profitable.` },
    { s: 'NALEDI', t: `[crisp] Philanthropic responsibility.` },
    { s: 'MICHAEL', t: `[confident] The top: be a good corporate citizen.` },
    { s: 'NALEDI', t: `[crisp] Legal, then ethical.` },
    { s: 'MICHAEL', t: `[confident] Legal is the second level: obey the law. Ethical is the third: be ethical and avoid harm, even beyond what the law requires.` },
    { s: 'NALEDI', t: `[pleased] Four for four again. Now multiple choice, exam style.` },
    { s: 'MICHAEL', t: `[ready] Bring it on.` },
    { s: 'NALEDI', t: `[crisp] Who or what does CSR aim to benefit: the community only, the workplace only, the environment only, or all three?` },
    { s: 'MICHAEL', t: `[confident] All three. It looks after the community, the workplace and the environment together.` },
    { s: 'NALEDI', t: `[approving] Correct. Next: which statement fits sustainability best: doing what today's practices allow without hurting the future, thinking only about shareholders, joining environmental projects, or running staff-involvement projects?` },
    { s: 'MICHAEL', t: `[confident] Present practices not harming the future. The others are only pieces of it.` },
    { s: 'NALEDI', t: `[approving] Exactly. One more: which of these is social responsibility: an investment index, a duty to keep the economy and the ecosystem in step with each other, a way of polishing a company's image, or a recruitment scheme?` },
    { s: 'MICHAEL', t: `[confident] The duty to keep the economy and the ecosystem in step.` },
    { s: 'NALEDI', t: `[pleased] Three for three. Now a matching round. I give you a term, you tell me what it maps to.` },
    { s: 'MICHAEL', t: `[ready] Go for it.` },
    { s: 'NALEDI', t: `[crisp] CSR.` },
    { s: 'MICHAEL', t: `[confident] All aspects of corporate responsibility: community, workplace, environment and governance.` },
    { s: 'NALEDI', t: `[crisp] CSI.` },
    { s: 'MICHAEL', t: `[confident] A sub-component of CSR, focused on uplifting communities through direct investment.` },
    { s: 'NALEDI', t: `[crisp] The former JSE SRI Index.` },
    { s: 'MICHAEL', t: `[confident] The historical JSE index that assessed companies against socially responsible investment criteria. It was replaced in 2015 by the FTSE/JSE Responsible Investment Index Series.` },
    { s: 'NALEDI', t: `[crisp] Triple Bottom Line.` },
    { s: 'MICHAEL', t: `[confident] The financial, social and environmental success of a business, measured together.` },
    { s: 'NALEDI', t: `[pleased] Four for four. Now fill in the blank. Two laws that push businesses toward certain social goals are...` },
    { s: 'MICHAEL', t: `[thoughtful] The Employment Equity Act and the Skills Development Act, depending on which goal the question is pointing at.` },
    { s: 'NALEDI', t: `[crisp] A wish to promote the well-being of others is called...` },
    { s: 'MICHAEL', t: `[confident] Philanthropic.` },
    { s: 'NALEDI', t: `[crisp] And some people say businesses should focus on profit and leave social issues to...` },
    { s: 'MICHAEL', t: `[confident] Government. That's the conflict-of-purpose criticism.` },
    { s: 'NALEDI', t: `[pleased] Perfect. Now a full case study, the kind that carries real marks.` },
    { s: 'MICHAEL', t: `[curious] Walk me through it.` },
    { s: 'NALEDI', t: `[storytelling] Picture Ridgeview Manufacturing, which spends close to half a million rand a year on CSR initiatives to improve the area around it: staff training and development, community education, health projects, local sport, and B-BBEE compliance work.` },
    { s: 'MICHAEL', t: `[impressed] That's a wide spread for one budget.` },
    { s: 'NALEDI', t: `[encouraging] It is, and that's deliberate for this kind of question. Work through it with me. Will these programmes improve the local environment, and how?` },
    { s: 'MICHAEL', t: `[reasoning] Staff training and community education build lasting skills instead of one-off relief. Health projects tackle a direct socio-economic problem. Sport builds community spirit and gives young people something constructive to do. And B-BBEE work supports economic redress and transformation, which connects to the legislation we covered.` },
    { s: 'NALEDI', t: `[approving] Strong. What might those programmes look like concretely?` },
    { s: 'MICHAEL', t: `[reasoning] Staff training could be literacy or technical skills courses. Community education could be adult basic education or bursaries for employees' children. Health projects could be HIV and Aids awareness or clinic support. And B-BBEE work could be supplier development for black-owned businesses.` },
    { s: 'NALEDI', t: `[pleased] Excellent. Can you think of other projects Ridgeview could add?` },
    { s: 'MICHAEL', t: `[thoughtful] An employee volunteer programme with matched funding, like Kopano Bank. And maybe a partnership model, like the water conservation one, if there's an environmental angle in its operations.` },
    { s: 'NALEDI', t: `[impressed] That full-marks answer connects ideas across everything we've covered instead of answering each part in isolation. One last long-answer question.` },
    { s: 'MICHAEL', t: `[ready] Go ahead.` },
    { s: 'NALEDI', t: `[crisp] "Stakeholder" now has a far wider meaning than before. Who are the stakeholders here, and why does a business's position on CSR matter to each?` },
    { s: 'MICHAEL', t: `[confident] Stakeholders now include investors, employees, business partners, customers, suppliers, local communities, society, and the environment, not just shareholders. CSR matters to investors because sustainable, well-governed businesses are safer long-term bets. It matters to employees because it affects recruitment, retention and morale. Customers increasingly choose brands with real ethical standards. Suppliers feel it because a business's expectations shape how they operate. And communities and the environment are affected directly by what the business does, not just what it says.` },
    { s: 'NALEDI', t: `[curious] What effect does pressure from these groups have on CSR in practice?` },
    { s: 'MICHAEL', t: `[thoughtful] It pushes CSR from optional toward close to mandatory. Customers, suppliers, employees, regulators and the public increasingly question a business's impact, so stakeholder pressure turns CSR from nice-to-have into a competitive necessity.` },
    { s: 'NALEDI', t: `[impressed] A complete answer: the wider stakeholder list, relevance to each group, and the pressure effect. That's the structure that earns full marks.` },
    { s: 'MICHAEL', t: `[curious] Any final advice before exam day?` },
    { s: 'NALEDI', t: `[warm, serious] Three things. One: know your key distinctions cold. CSR versus CSI, the five underlying concepts versus the five practical elements of responsible business practice, and business-side versus community-side problems. Two: when distinguishing CSR from CSI, check the main purpose of the activity and whether it falls outside the business's normal operations. Three: for legislation questions, separate purpose from enforcement, because two laws can share a purpose but differ completely in how strictly they're policed.` },
    { s: 'MICHAEL', t: `[confident] Distinctions, purpose and operations check, purpose versus enforcement. Got it.` },
    { s: 'NALEDI', t: `[warm, proud] And that wraps up social responsibility, CSR and CSI: how they're defined, how they benefit business and community, where they go wrong, and the law behind them. You're genuinely well prepared now.` },
    { s: 'MICHAEL', t: `[grateful, relieved] Thanks, Naledi. It's a lot, but it actually makes sense now.` },
    { s: 'NALEDI', t: `[warm] That's the whole point. Good luck out there. This has been The Business Brief.` },
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

  console.log(`The Business Brief — Corporate Social Responsibility (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

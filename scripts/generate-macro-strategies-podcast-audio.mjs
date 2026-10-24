/**
 * The Business Brief — Macro-Environment Business Strategies — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-macro-strategies-podcast-audio.mjs
 *
 * Rebuild an episode (only missing or text-edited lines are regenerated), or force specific lines:
 *   ... <n>            e.g. 2
 *   ... <n>:2,-2       e.g. 2:2,-2  (line numbers; -1 = last line, -2 = second to last)
 *   ... <n> --fresh    wipe and re-record the whole episode
 * Original example:
 *
 *   node --env-file=.env.local scripts/generate-macro-strategies-podcast-audio.mjs 1
 *
 * Currently populated: Episode 1 only. Add Episodes 2-10 to the EPISODES array as they're requested.
 *
 * ElevenLabs account: uses ELEVENLABS_API_KEY_1 by default. To use the second account,
 * set ELEVENLABS_ACCOUNT=2 in .env.local (uses ELEVENLABS_API_KEY_2).
 *
 * Model: Eleven v4 (eleven_v4), falling back to Eleven v3 (eleven_v3) if v4 fails.
 * Clips already generated are skipped, so an interrupted run can simply be re-run.
 *
 * Output:
 *   podcasts/The-Business-Brief-Macro-Strategies/Episode 1 - Thinking Your Way to a Strategy.mp3
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import crypto from 'crypto';

const ELEVENLABS_KEY =
  process.env['ELEVENLABS_API_KEY_' + (process.env.ELEVENLABS_ACCOUNT || '1')] || process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_1 to .env.local and run with: node --env-file=.env.local scripts/generate-macro-strategies-podcast-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'The-Business-Brief-Macro-Strategies');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'business-brief-macro-strategies');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'Episode 1 - Thinking Your Way to a Strategy',
  segs: [
    { s: 'AMELIA', t: `Episode 1: Thinking Your Way to a Strategy` },
    { s: 'NALEDI', t: `[warmly] Welcome to a new run of The Business Brief. This time we're looking at how businesses actually respond to a constantly changing environment — real strategy, not just good intentions.` },
    { s: 'MICHAEL', t: `[curious] Before we get to strategy itself, is there a difference between solving a problem and just making a decision? People use those interchangeably.` },
    { s: 'NALEDI', t: `[explaining clearly] Genuinely worth separating. Problem solving is a creative process where people critically define the problem and evaluate possible solutions before choosing an option — essentially, finding new solutions to new problems. Decision making is narrower — choosing the best solution from a number of existing choices. Problem solving is about generating options; decision making is about picking between them.` },
    { s: 'MICHAEL', t: `Why does this distinction matter for strategy specifically?` },
    { s: 'NALEDI', t: `Because businesses face ongoing change, problems and conflict, and the best way to adapt to a changing environment is genuinely by thinking creatively — not by defaulting to the same old options. Creative thinking techniques exist specifically to develop business strategies, generate business ideas, respond to change, resolve conflict, and solve business-related problems generally.` },
    { s: 'MICHAEL', t: `[chuckles] We've actually covered a full set of these techniques before, haven't we?` },
    { s: 'NALEDI', t: `We have, in real depth, so in this episode we'll treat them as a quick toolkit refresher rather than reinventing that ground. Eight techniques worth having on hand: mind mapping, for organising thoughts and generating ideas visually. Brainstorming, for pulling a wide spread of ideas from a group quickly. Force-field analysis, for managing change carefully through unfreezing, moving and refreezing. The empty chair technique, for clarifying a decision you're making alone by explaining it to an imagined listener.` },
    { s: 'MICHAEL', t: `And the other four?` },
    { s: 'NALEDI', t: `The Delphi technique, for reaching consensus among experts anonymously when there's no direct precedent to follow. The nominal group technique, for democratic, anonymous group problem-solving where everyone gets a real voice. Forced combinations, for generating fresh ideas by smashing keywords together in new ways. And SCAMPER — substitute, combine, adapt, modify, put to other uses, eliminate, rearrange — for looking at a single problem from seven different angles.` },
    { s: 'MICHAEL', t: `[curious] Why does a strategy conversation need to start here, rather than jumping straight to frameworks like SWOT?` },
    { s: 'NALEDI', t: `Because every framework we'll cover this run is really just a structured container — the actual insight inside it still comes from creative thinking. A business that can't think flexibly will fill out a SWOT table with generic, safe answers. These techniques are what make the frameworks genuinely useful rather than a box-ticking exercise.` },
    { s: 'MICHAEL', t: `Let's put that to the test with a scenario.` },
    { s: 'NALEDI', t: `[engagingly] Good idea. Picture Riverside Garden Centre, a plant nursery. The manager, Nomsa, has been running the place for five months and is genuinely alarmed at how poor her staff's customer service has become. She's not sure why the team seems unmotivated, and she knows the only way to actually fix sales is to get to the root of the problem, not just tell people to "try harder."` },
    { s: 'MICHAEL', t: `Which techniques would actually help her here?` },
    { s: 'NALEDI', t: `Let's reason through two. Brainstorming would be a strong first move — sitting down with the team, defining the problem clearly, and letting everyone suggest ideas without criticism, since low motivation often has causes staff won't admit to management directly unless the environment feels genuinely safe. It might surface something like scheduling conflicts or unclear expectations that Nomsa hasn't considered.` },
    { s: 'MICHAEL', t: `And the second?` },
    { s: 'NALEDI', t: `The empty chair technique, used by Nomsa herself before she even brings the team together — imagining a respected mentor sitting across from her, and explaining the problem out loud, from every angle, before deciding how to approach the team conversation. It would force her to justify her assumptions about what's actually wrong, rather than walking in with a half-formed theory.` },
    { s: 'MICHAEL', t: `So one technique surfaces the real problem from the team's side, and the other sharpens her own thinking before she acts.` },
    { s: 'NALEDI', t: `[warmly] Exactly that combination — group input plus individual clarity — and that pairing is a genuinely strong answer to almost any "which techniques would you use" question in this topic.` },
    { s: 'MICHAEL', t: `Now that we've got the toolkit refreshed, where does the actual strategy process begin?` },
    { s: 'NALEDI', t: `With a four-stage cycle that we'll come back to again and again this run, so it's worth learning properly now. Stage one — environmental scan, looking honestly at what's actually happening around the business. Stage two — formulation of the strategy, turning that scan into an actual plan. Stage three — implementation, putting the plan into action. And stage four — evaluation, checking whether it actually worked.` },
    { s: 'MICHAEL', t: `Is that a one-time process, or does it repeat?` },
    { s: 'NALEDI', t: `It's genuinely continuous — evaluation feeds back into the next environmental scan, because the environment itself keeps changing. Think of it less as a checklist you complete once, and more as a loop a business keeps running for as long as it operates.` },
    { s: 'MICHAEL', t: `[confidently] Let me recap. Problem solving generates new solutions to new problems, while decision making chooses between existing options — and creative thinking is what makes both genuinely effective. Our eight-technique toolkit — mind mapping, brainstorming, force-field analysis, the empty chair technique, Delphi, the nominal group technique, forced combinations, and SCAMPER — gives a business real tools for tackling messy, human problems like Nomsa's, not just abstract ones. And the four-stage strategic planning cycle — environmental scan, formulation, implementation, evaluation — is the roadmap we'll build on for the rest of this run.` },
    { s: 'NALEDI', t: `[encouraging] A strong foundation. Exam tip: when asked to recommend creative thinking techniques for a scenario, always explain why each technique specifically fits the situation described — naming two techniques correctly is worth far less than naming two and reasoning through their fit.` },
    { s: 'MICHAEL', t: `Reason through the fit, every time. Next episode?` },
    { s: 'NALEDI', t: `In the next episode, we cover the first real step in that four-stage cycle — how a business actually sizes itself up, both inside and out.` },
    { s: 'MICHAEL', t: `[warmly] See you there.` },
  ],
},

{
  num: 2,
  file: 'Episode 2 - Sizing Up the Business - SWOT and PESTLE',
  segs: [
    { s: 'AMELIA', t: `Episode 2: Sizing Up the Business: SWOT and PESTLE` },
    { s: 'NALEDI', t: `[warmly] Welcome to The Business Brief. In this episode we start on stage one — the environmental scan — with two frameworks businesses actually use to size themselves up.` },
    { s: 'MICHAEL', t: `[curious] Where do we start?` },
    { s: 'NALEDI', t: `[explaining clearly] With lateral thinking first, because it's the mindset behind good analysis. Lateral thinking means seeking to solve problems by unorthodox or apparently illogical methods — approaching a familiar situation from an angle nobody's tried yet. Businesses should use it to reflect on their environments regularly, and that reflection is what actually feeds strategy development.` },
    { s: 'MICHAEL', t: `And the first structured tool for that reflection?` },
    { s: 'NALEDI', t: `SWOT — strengths, weaknesses, opportunities and threats. It should be done critically and as thoroughly as possible, because a rushed SWOT is close to worthless.` },
    { s: 'MICHAEL', t: `How is it actually organised?` },
    { s: 'NALEDI', t: `As a two-by-two grid. One axis is internal versus external; the other is positive versus negative. Strengths sit in the internal-positive box — things that have made, or will make, the business successful, like a large amount of capital investment. Weaknesses sit internal-negative — characteristics inside the business standing in the way of success, like needing skilled staff who demand high salaries.` },
    { s: 'MICHAEL', t: `And the external side?` },
    { s: 'NALEDI', t: `Opportunities sit external-positive — things in the micro, market or macro environment already contributing, or likely to contribute, to success. A favourable exchange rate making imported machinery cheaper is a classic example. Threats sit external-negative — things in those same environments standing in the way of success, like new taxation laws requiring businesses to pay more tax.` },
    { s: 'MICHAEL', t: `[curious] Why does it matter that opportunities and threats come specifically from the micro, market and macro environments?` },
    { s: 'NALEDI', t: `Because it forces a business to look genuinely outward, not just inward. Strengths and weaknesses are about the business itself; opportunities and threats are about the world the business operates in — and a business that only ever examines itself will miss changes coming from outside entirely.` },
    { s: 'MICHAEL', t: `You mentioned SWOT works best alongside other tools. What's the next one?` },
    { s: 'NALEDI', t: `PESTLE — a method specifically for assessing the impact, both positive and negative, of external factors on a business. It stands for political, economic, social, technological, legal and environmental factors, and it's genuinely effective as the basis for a stronger SWOT analysis, or for planning a completely new direction.` },
    { s: 'MICHAEL', t: `[curious] How do you actually use the six factors, rather than just listing them?` },
    { s: 'NALEDI', t: `For each one, you ask four questions: does it actually impact the business, how does it impact the business, is that impact negative or positive, and how important is this factor to the business's success. It's a diagnostic process, not just a checklist.` },
    { s: 'MICHAEL', t: `Let's go through the six factors properly.` },
    { s: 'NALEDI', t: `Political — things like taxation, local government by-laws, or international trade laws. Economic — interest rates, inflation, and levels of remuneration. Social — income distribution, public attitude toward the business and its products, and the demographics of the population.` },
    { s: 'MICHAEL', t: `And the last three?` },
    { s: 'NALEDI', t: `Technological — new technology, and critically, the rate at which it becomes outdated. Legal — foreign trade laws, competition laws, and labour laws. And environmental — the business's impact on the environment, environmental laws, and the cost of electricity.` },
    { s: 'MICHAEL', t: `So PESTLE and SWOT clearly overlap — where's the actual line between them?` },
    { s: 'NALEDI', t: `[warmly] A genuinely fair question, and it's exactly the kind of thing that shows up in exams. SWOT is broader — it captures both internal factors, strengths and weaknesses, and external factors, opportunities and threats, in one single picture. PESTLE is narrower but deeper — it only looks outward, but it breaks the external environment down into six specific, named categories rather than two general ones. In practice, a PESTLE analysis often feeds directly into the opportunities and threats side of a SWOT.` },
    { s: 'MICHAEL', t: `Let's test both frameworks on a scenario.` },
    { s: 'NALEDI', t: `[engagingly] Good idea. Picture Kunene Dairies, a mid-sized dairy processor. Government just introduced a new environmental levy on packaging waste, a major retailer has cut back on how much stock it orders monthly, and Kunene's own staff are highly experienced but the equipment is genuinely old and prone to breakdowns.` },
    { s: 'MICHAEL', t: `Let's sort those into SWOT first.` },
    { s: 'NALEDI', t: `Go ahead.` },
    { s: 'MICHAEL', t: `[thoughtfully] Experienced staff is a strength — internal and positive. Old, unreliable equipment is a weakness — internal and negative. The retailer cutting orders is a threat — external and negative. And I'd need more information to spot a clear opportunity here, but maybe the new levy pushes competitors who haven't invested in efficient packaging to struggle more than Kunene does, if Kunene adapts quickly.` },
    { s: 'NALEDI', t: `[encouraging] Strong reasoning. Now, where does the packaging levy sit specifically in a PESTLE breakdown?` },
    { s: 'MICHAEL', t: `That's both political and environmental — political because it's a government-imposed law, and environmental because it's directly about packaging waste and environmental impact.` },
    { s: 'NALEDI', t: `Exactly right, and that's a genuinely useful thing to notice — a single real-world factor can sit under more than one PESTLE heading at once, which is precisely why the six categories aren't meant to be mutually exclusive boxes.` },
    { s: 'MICHAEL', t: `[confidently] Let me recap. Lateral thinking is the mindset behind good environmental analysis. SWOT maps a business across four boxes — internal strengths and weaknesses, external opportunities and threats. PESTLE zooms in on the external side specifically, across six factors — political, economic, social, technological, legal and environmental — asking whether, how, and how importantly each one affects the business. And the two frameworks work best combined, with PESTLE often feeding directly into a SWOT's external half.` },
    { s: 'NALEDI', t: `[encouraging] A thorough recap. Exam tip: if asked to explain the difference between PESTLE and SWOT, always mention that SWOT covers both internal and external factors while PESTLE is external only — that specific contrast is what examiners are checking for, more than the individual definitions themselves.` },
    { s: 'MICHAEL', t: `Internal-and-external versus external-only. Next episode?` },
    { s: 'NALEDI', t: `In the next episode, we cover a third framework, this time focused entirely on the forces that determine how profitable a business can actually become.` },
    { s: 'MICHAEL', t: `[warmly] See you there.` },
  ],
},

{
  num: 3,
  file: 'Episode 3 - The Five Forces That Decide Your Profit',
  segs: [
    { s: 'AMELIA', t: `Episode 3: The Five Forces That Decide Your Profit` },
    { s: 'NALEDI', t: `[warmly] Welcome to The Business Brief. In this episode: a third framework, built specifically to answer one question — how profitable can this business realistically become?` },
    { s: 'MICHAEL', t: `[curious] Who actually developed this one?` },
    { s: 'NALEDI', t: `[explaining clearly] Michael Porter, a Harvard Business School professor, designed it specifically to help decide how profitable a business or product is likely to be. It's known as Porter's Five Forces, and it works by analysing the strength of five specific forces that shape competition.` },
    { s: 'MICHAEL', t: `Let's go through all five.` },
    { s: 'NALEDI', t: `First — supplier power. This is the power your suppliers hold to increase the prices of your inputs. If you've only got one realistic supplier, they can push prices up and you have little choice but to pay.` },
    { s: 'MICHAEL', t: `Second?` },
    { s: 'NALEDI', t: `Buyer power — the power your customers hold to force you to lower your prices. A handful of large customers buying in bulk can squeeze margins hard, in a way many small individual customers never could.` },
    { s: 'MICHAEL', t: `Third?` },
    { s: 'NALEDI', t: `Competitive rivalry — the number and strength of your existing competitors. More rivals, or stronger ones, generally means more pressure on price and market share.` },
    { s: 'MICHAEL', t: `Fourth?` },
    { s: 'NALEDI', t: `The threat of substitution — how easy it is for your customers to swap your product or service for something else entirely. It doesn't have to be a direct competitor's version of the same product; it just has to satisfy the same underlying need.` },
    { s: 'MICHAEL', t: `And fifth?` },
    { s: 'NALEDI', t: `The threat of new entry — how easy it is for new competitors to enter your market at all. If barriers to entry are low, profitability tends to attract new players quickly, which erodes the advantage of being established.` },
    { s: 'MICHAEL', t: `[curious] What's the actual point of analysing all five, rather than just watching your direct competitors?` },
    { s: 'NALEDI', t: `Once a business recognises these forces, it can measure the strength and direction of each one — and that puts it in a genuinely strong position to figure out how to shift the balance of power in its own favour, rather than just reacting to competitors it can already see.` },
    { s: 'MICHAEL', t: `Can you make that concrete — what does "shifting the balance" actually look like in practice?` },
    { s: 'NALEDI', t: `Sure. If supplier power is high because there's only one supplier, a business might deliberately develop a second supplier relationship to reduce dependency. If the threat of new entry is high because barriers are low, a business might invest in brand loyalty or a patent to raise that barrier. The forces aren't just descriptive — they point directly at where a business should actually act.` },
    { s: 'MICHAEL', t: `Let's run a full scenario through all five forces.` },
    { s: 'NALEDI', t: `[engagingly] Good idea. Picture Okavango Coffee Roasters, an independent coffee roasting business supplying cafés across a mid-sized city. Let's work through each force for them.` },
    { s: 'MICHAEL', t: `Supplier power first.` },
    { s: 'NALEDI', t: `They buy green coffee beans from a small number of importers, so if those importers raise prices, Okavango has limited room to negotiate — that's genuinely high supplier power working against them.` },
    { s: 'MICHAEL', t: `Buyer power?` },
    { s: 'NALEDI', t: `Their customers are independent cafés, many of them small, ordering modest quantities regularly rather than one dominant chain buying in bulk — so buyer power here is comparatively low, which favours Okavango.` },
    { s: 'MICHAEL', t: `Competitive rivalry?` },
    { s: 'NALEDI', t: `Genuinely high — specialty coffee roasting has become a crowded space in most cities, with several small roasters competing for the same café accounts.` },
    { s: 'MICHAEL', t: `Threat of substitution?` },
    { s: 'NALEDI', t: `Moderate. Cafés could substitute with tea, or with a mass-market coffee brand instead of specialty beans, but customers who specifically want quality specialty coffee have fewer easy substitutes.` },
    { s: 'MICHAEL', t: `And threat of new entry?` },
    { s: 'NALEDI', t: `Also fairly high — roasting equipment isn't prohibitively expensive to start small, so new competitors can enter without enormous capital.` },
    { s: 'MICHAEL', t: `[thoughtfully] Based on all five, what would you actually recommend Okavango do?` },
    { s: 'NALEDI', t: `[thoughtfully] Given high supplier power and high rivalry, I'd focus on the two forces they have the most direct control over — deepening relationships with cafés to reduce the low buyer power even further through loyalty or exclusivity deals, and building a distinctive brand or quality reputation that raises the effective barrier against new entrants, since equipment cost alone clearly isn't a strong enough barrier on its own.` },
    { s: 'NALEDI', t: `That's exactly the kind of layered analysis this framework rewards — not just identifying each force in isolation, but using the full picture to point toward a specific, defensible strategic response.` },
    { s: 'MICHAEL', t: `[confidently] Let me recap. Porter's Five Forces, developed by Michael Porter, analyses five forces shaping a business's profitability — supplier power, buyer power, competitive rivalry, the threat of substitution, and the threat of new entry. Once recognised, a business can measure each force's strength and direction, and use that analysis to actively shift the balance of power in its own favour, rather than simply reacting to visible competitors.` },
    { s: 'NALEDI', t: `[encouraging] A precise recap. Exam tip: when asked to apply Porter's Five Forces to a scenario, always work through all five forces individually with a specific reason for each — a partial answer covering only two or three forces will consistently lose marks, even if those two or three are explained well.` },
    { s: 'MICHAEL', t: `All five, every time, with reasons. Next episode?` },
    { s: 'NALEDI', t: `In the next episode, we move from analysis into action — the actual six-step process businesses follow to turn all this insight into a real plan.` },
    { s: 'MICHAEL', t: `[warmly] See you there.` },
  ],
},

{
  num: 4,
  file: 'Episode 4 - Turning Analysis Into a Plan',
  segs: [
    { s: 'AMELIA', t: `Episode 4: Turning Analysis Into a Plan` },
    { s: 'NALEDI', t: `[warmly] Welcome to The Business Brief. In this episode we move into the next two stages of the cycle: actually formulating a strategy, and then implementing it.` },
    { s: 'MICHAEL', t: `[curious] Let's start with formulation. What does that actually mean, precisely?` },
    { s: 'NALEDI', t: `[explaining clearly] Strategy formulation is the process of choosing the most appropriate course of action so the business can reach its goals and objectives, and ultimately achieve its vision. It's essential to achieving those goals, it influences how resources get allocated, and it gives employees a clear picture of the organisation's purpose — not an afterthought, but genuinely central to the whole planning process.` },
    { s: 'MICHAEL', t: `Is there a structured process for actually doing it, or is it more art than method?` },
    { s: 'NALEDI', t: `Genuinely structured — six main steps. Step one, set objectives. This is the key component of any strategy statement — the long-term objectives of the organisation, based on its vision and mission. Objectives define the destination; strategy defines the journey to get there.` },
    { s: 'MICHAEL', t: `Step two?` },
    { s: 'NALEDI', t: `Evaluate environments. The general economic and industrial environment gets reviewed, alongside the business's competitive position and existing product line — making sure the factors necessary for competitive success are identified, so management can pin down the business's own strengths and weaknesses, and its competitors' too. This is exactly where SWOT, PESTLE and Porter's Five Forces earn their keep.` },
    { s: 'MICHAEL', t: `So everything we covered the last two episodes plugs directly into step two.` },
    { s: 'NALEDI', t: `Precisely — those frameworks aren't separate topics, they're the toolkit for this one specific step. Step three is set goals — deciding on long-term goals that serve the mission and vision, something concrete like achieving at least ten percent sales growth every year.` },
    { s: 'MICHAEL', t: `Step four?` },
    { s: 'NALEDI', t: `Use contexts. Based on overall objectives and the internal-external analysis, the business creates a specific plan or competitive strategy to fulfil its corporate goals — maybe a niche-marketing approach. Each department then builds its own specific strategies responding to the wider macro-economic trends identified earlier.` },
    { s: 'MICHAEL', t: `Step five?` },
    { s: 'NALEDI', t: `Analyse performance — discovering and analysing the gap between planned and actual performance. This means critically evaluating past performance, present conditions, and desired future outcomes, and trying to estimate probable future conditions if current trends simply continue.` },
    { s: 'MICHAEL', t: `And step six?` },
    { s: 'NALEDI', t: `Choose strategy. The business picks the best course of action after weighing its goals, strengths, potential and limitations against external opportunities. It then implements that strategy through specific concrete steps — maybe a partnership, maybe a price adjustment.` },
    { s: 'MICHAEL', t: `You said a strategy is only as good as its implementation. What does that actually require?` },
    { s: 'NALEDI', t: `Two genuine success factors have to be in place. Communication to all stakeholders and staff, so everyone actually understands the plan. And flexibility to change course where processes or aspects clearly aren't working — a rigid plan that can't adapt tends to fail even when the underlying idea was sound.` },
    { s: 'MICHAEL', t: `Is there a fuller checklist beyond just those two factors?` },
    { s: 'NALEDI', t: `Eight points worth knowing. Resources — use what's available creatively, and allocate and plan for an appropriate implementation budget. Organisational structure — develop a structure that includes an actual management plan. Motivated staff — leadership needs to actively motivate people to carry out the plan effectively.` },
    { s: 'MICHAEL', t: `The remaining five?` },
    { s: 'NALEDI', t: `Organisational policies — developing and following policies that genuinely support the strategy. Management involvement — leadership needs to be one hundred percent supportive, not just nominally on board. Solving ongoing problems — actively working through challenges as they appear, using real creative thinking rather than ignoring them. Adapting where necessary. And dynamic, strategic leadership — making sure the business has the right people actually guiding the way.` },
    { s: 'MICHAEL', t: `[thoughtfully] That's a genuinely demanding list. Which of these tends to get skipped in practice?` },
    { s: 'NALEDI', t: `Communication and management involvement are the two most commonly shortchanged, in my experience of how these scenarios get tested. A business might have excellent resources and a solid structure, but if management only half-believes in the plan, or staff never really understand what's changing and why, the whole implementation tends to quietly stall.` },
    { s: 'MICHAEL', t: `Let's test the full six-step formulation process on a scenario.` },
    { s: 'NALEDI', t: `[engagingly] Good idea. Picture Tebogo, who runs a small chain of three hardware stores. She wants to grow the business but isn't sure how to structure her thinking, beyond "we should expand."` },
    { s: 'MICHAEL', t: `Walk her through the six steps.` },
    { s: 'NALEDI', t: `Step one — she needs an actual long-term objective, not just "grow," something like becoming the leading hardware retailer in her specific region within five years. Step two — evaluate her environment using SWOT, PESTLE and Porter's Five Forces, to genuinely understand her competitive position, not just assume it. Step three — a measurable goal, like opening two new stores within eighteen months. Step four — a specific plan, maybe targeting underserved suburban areas rather than competing directly against a large chain in the city centre. Step five — regularly comparing actual sales growth against what she projected, to catch problems early. And step six — choosing the specific strategy that fits her actual strengths, whether that's opening new stores herself or a different approach entirely, which is exactly where next episode's content comes in.` },
    { s: 'MICHAEL', t: `So the six steps take her from a vague ambition to something she could actually execute and measure.` },
    { s: 'NALEDI', t: `[reassuringly] Exactly the value of the structured process — it doesn't replace her judgment, it gives that judgment somewhere concrete to land.` },
    { s: 'MICHAEL', t: `[confidently] Let me recap. Strategy formulation runs through six steps — set objectives, evaluate environments, set goals, use contexts, analyse performance, and choose strategy — with step two drawing directly on SWOT, PESTLE and Porter's Five Forces. Implementation then depends on communication and flexibility as the two core success factors, supported by a fuller eight-point checklist covering resources, structure, motivated staff, policies, management involvement, problem-solving, adaptability, and strong leadership.` },
    { s: 'NALEDI', t: `[encouraging] A comprehensive recap. Exam tip: when asked to discuss the six steps of strategy formulation, always give a concrete example for each step, not just the name — examiners consistently reward application over bare recall on this specific topic.` },
    { s: 'MICHAEL', t: `An example for every step. Next episode?` },
    { s: 'NALEDI', t: `In the next episode, we cover the first family of strategies a business can actually choose — gaining control by buying up part of its own supply chain.` },
    { s: 'MICHAEL', t: `[warmly] See you there.` },
  ],
},

{
  num: 5,
  file: 'Episode 5 - Buying Your Way to Control - Integration Strategies',
  segs: [
    { s: 'AMELIA', t: `Episode 5: Buying Your Way to Control: Integration Strategies` },
    { s: 'NALEDI', t: `[warmly] Welcome to The Business Brief. In this episode: the first real family of strategies a business can actually choose — integration.` },
    { s: 'MICHAEL', t: `[curious] What does integration actually mean in this context?` },
    { s: 'NALEDI', t: `[explaining clearly] Integration strategies come into play when there's a need for an alliance, merger or takeover. Specifically, they involve taking over or merging with other businesses that share the same production process.` },
    { s: 'MICHAEL', t: `Can you sketch what a supply chain actually looks like, so the rest of this makes sense?` },
    { s: 'NALEDI', t: `Picture Kunene Dairies again, from a couple of episodes back. Their supply chain runs from a supplier of raw materials — a dairy farm supplying milk — through to manufacturers and producers, who turn that milk into pasteurised milk, yoghurt and cheese, then to distributors and wholesalers who transport and dispatch that produce, and finally to retailers, actual shops selling the finished products to customers.` },
    { s: 'MICHAEL', t: `And integration means moving into one of those other links?` },
    { s: 'NALEDI', t: `Exactly — which specific type of integration you're using depends entirely on which part of that chain you're taking over, buying, or merging with.` },
    { s: 'MICHAEL', t: `Let's start with the direction toward the customer.` },
    { s: 'NALEDI', t: `That's forward integration — the business purchases or gains greater control over its distribution and retailers. It occurs when a business merges with its distributors specifically to gain control of direct distribution, often by purchasing a franchise, or part of one.` },
    { s: 'MICHAEL', t: `How would that actually play out for Kunene Dairies?` },
    { s: 'NALEDI', t: `Picture Kunene buying shares in the company that distributes and stores their milk, yoghurt and cheese. That gives them real control over the distribution process, and critically, over the prices charged along that stage of the chain, rather than being at the mercy of an external distributor's pricing decisions.` },
    { s: 'MICHAEL', t: `And the opposite direction?` },
    { s: 'NALEDI', t: `Backward integration — the business purchases or gains greater control over its suppliers and raw material sources. It's a form of vertical integration specifically designed to reduce the risk of dependency on outside suppliers. The business takes over or increases control over its suppliers, gaining more influence over the price, quality and quantity of the raw materials it depends on.` },
    { s: 'MICHAEL', t: `How would Kunene apply that?` },
    { s: 'NALEDI', t: `By buying shares in the dairy farm supplying their milk directly — giving them real control over the raw material itself, and especially over the price at which that milk gets supplied to them.` },
    { s: 'MICHAEL', t: `What about integration sideways, rather than up or down the chain?` },
    { s: 'NALEDI', t: `That's horizontal integration — the business purchases or gains greater control over its competitors, substitutes, or complementary products. It involves incorporating businesses in the same field specifically to reduce the threat of competition and acquire complementary or substitute goods.` },
    { s: 'MICHAEL', t: `Two terms in there worth pinning down.` },
    { s: 'NALEDI', t: `Right — complementary goods are goods consumed together, like toothpaste and a toothbrush. Substitute goods are goods offered in place of another, like rooibos tea standing in for regular black tea. Horizontal integration can bring either kind under one roof.` },
    { s: 'MICHAEL', t: `How does that apply to Kunene?` },
    { s: 'NALEDI', t: `Picture them buying shares in, or taking over, a second dairy factory — one that produced the same or similar products and had genuinely been a competitor. The advantage is a real increase in market share, meaning increased sales and profits, and the more market share a business holds, the easier it becomes to influence pricing across the whole industry.` },
    { s: 'MICHAEL', t: `[curious] What are the genuine advantages and disadvantages across all three forms of integration?` },
    { s: 'NALEDI', t: `On the advantage side — reducing costs, and reduced competition, since you've either absorbed a competitor or gained control over a key link in your own chain. On the disadvantage side — it can take real time, it's an expensive process, and it typically requires large amounts of capital that not every business has access to.` },
    { s: 'MICHAEL', t: `Let's put all three to work on a scenario.` },
    { s: 'NALEDI', t: `[engagingly] Good idea. Picture a newspaper headline: "The mobile network industry keeps consolidating." Imagine you had to debate the best integration strategy for a company called Skyline Mobile to grow its business and profits.` },
    { s: 'MICHAEL', t: `Walk me through how you'd argue each option.` },
    { s: 'NALEDI', t: `For forward integration, Skyline Mobile could buy up the retail stores that sell its handsets and contracts, gaining direct control over how customers actually experience the brand at point of sale, and capturing retail margin that currently goes to independent stores. For backward integration, they could take a stake in a components supplier, protecting themselves against price spikes or shortages in chips and hardware parts. For horizontal integration, they could acquire a smaller rival network, instantly gaining market share and reducing the number of competitors fighting for the same customers.` },
    { s: 'MICHAEL', t: `Which would you actually argue is strongest for a company in that position?` },
    { s: 'NALEDI', t: `[thoughtfully] Genuinely depends on what Skyline Mobile's biggest risk is. If supply shortages are their real vulnerability, backward integration solves the most urgent problem. If losing customers to price wars is the bigger threat, horizontal integration directly reduces that competitive pressure. A strong answer here isn't picking one option in isolation — it's matching the strategy to the specific risk the business is most exposed to.` },
    { s: 'MICHAEL', t: `[confidently] Let me recap. Integration strategies involve merging with or taking over other businesses that share the same production process. Forward integration moves toward distributors and retailers, gaining control over how goods reach the customer. Backward integration moves toward suppliers, gaining control over raw materials and their pricing. Horizontal integration moves sideways, absorbing competitors or businesses offering complementary or substitute goods, increasing market share. All three reduce costs and competition, but cost time, money, and significant capital.` },
    { s: 'NALEDI', t: `[encouraging] A precise recap. Exam tip: when debating which integration strategy fits a scenario, always tie your recommendation to the business's specific vulnerability or risk — naming the right strategy without connecting it to what problem it actually solves rarely earns full marks.` },
    { s: 'MICHAEL', t: `Match the strategy to the risk. Next episode?` },
    { s: 'NALEDI', t: `In the next episode, we cover the second family of strategies — growing sales and market share without necessarily taking over anyone else at all.` },
    { s: 'MICHAEL', t: `[warmly] See you there.` },
  ],
},

{
  num: 6,
  file: 'Episode 6 - Selling More Without Reinventing Everything - Intensive Strategies',
  segs: [
    { s: 'AMELIA', t: `Episode 6: Selling More Without Reinventing Everything: Intensive Strategies` },
    { s: 'NALEDI', t: `[warmly] Welcome to The Business Brief. In this episode: growing without necessarily taking over anyone at all.` },
    { s: 'MICHAEL', t: `[curious] What's the actual idea behind intensive strategies?` },
    { s: 'NALEDI', t: `[explaining clearly] They aim to increase sales and market share through intensive efforts to improve long-term growth — working harder and smarter with what you've got, or close to it, rather than acquiring other businesses.` },
    { s: 'MICHAEL', t: `Is there a framework for organising the different options here?` },
    { s: 'NALEDI', t: `Genuinely one of the most useful in this whole topic — Ansoff's product and market growth matrix, first published in the Harvard Business Review back in 1957. It looks at how different strategies combine existing or new products with existing or new markets.` },
    { s: 'MICHAEL', t: `Can you sketch the actual grid?` },
    { s: 'NALEDI', t: `Picture a two-by-two table. Products run along the top — existing versus new. Markets run down the side — existing versus new. Existing market with existing products gives you market penetration. Existing market with new products gives you product development. New market with existing products gives you market development. And new market with new products gives you diversification, which is genuinely big enough to deserve its own episode next time.` },
    { s: 'MICHAEL', t: `Let's start with market penetration. What does that actually look like?` },
    { s: 'NALEDI', t: `The business focuses on selling existing products into existing markets — no new customers being targeted, no new products being developed. Instead, the business leans on its marketing mix and research into its current customer base to make adjustments and improvements.` },
    { s: 'MICHAEL', t: `What are the actual levers for doing that?` },
    { s: 'NALEDI', t: `Five genuine methods. A decrease in prices, to encourage customers to buy larger quantities. A promotion campaign, to build loyalty and boost awareness and sales among existing customers. Changing the packaging, to draw fresh attention to the product. Increasing the number of marketing staff. And improving service delivery itself, which can meaningfully affect sales on its own.` },
    { s: 'MICHAEL', t: `Now market development — selling to new markets instead.` },
    { s: 'NALEDI', t: `Right — the organisation tries to sell its existing, unchanged products into new markets. This was a strategy heavily used once the internet became a popular marketing tool, since markets could expand quickly and cheaply into other countries or regions.` },
    { s: 'MICHAEL', t: `How does a business actually pursue that?` },
    { s: 'NALEDI', t: `Three genuine methods. Looking at new regions — expanding into a global or different regional market, often using the internet to market globally at low additional cost. Changing pricing policies, so the product reaches a broader range of people — lowering prices so a lower income bracket can afford it, for example. And changing how the product is distributed to reach a different market, like transporting by sea to reach further destinations.` },
    { s: 'MICHAEL', t: `And product development — the third option?` },
    { s: 'NALEDI', t: `Here the organisation introduces new products into its existing markets. The customer base stays the same; what changes is what's being offered to them.` },
    { s: 'MICHAEL', t: `How does that actually happen in practice?` },
    { s: 'NALEDI', t: `Four ways. The business carries out market research within its current market to find out what new products customers would actually want. It develops new products it believes customers may want to purchase. It improves or enhances current products to boost their sales. And it improves or changes packaging so existing products look and feel different — think crisps sold in a tube instead of a plastic packet, appealing to the same customers in a fresh way.` },
    { s: 'MICHAEL', t: `Is there a real cost to this option specifically?` },
    { s: 'NALEDI', t: `[matter-of-factly] Genuinely, yes — the disadvantage of product development specifically is that developing new products can be costly, in a way that simply adjusting price or packaging for an existing product usually isn't.` },
    { s: 'MICHAEL', t: `Let's put all three to work on a single scenario, using Ansoff's own logic.` },
    { s: 'NALEDI', t: `[engagingly] Good idea. Picture Frostbite Beverages, a local company that makes a popular cold-drink. They want to grow sales and profit, but at this stage they're not interested in developing anything genuinely new — they specifically want suggestions for using their current product to reach a larger market.` },
    { s: 'MICHAEL', t: `Given that constraint — no new product — which two strategies would actually fit?` },
    { s: 'NALEDI', t: `Market penetration and market development, specifically, since both keep the product unchanged. For market penetration, Frostbite could run a loyalty promotion for existing customers, or adjust pricing to encourage buying larger quantities at once. For market development, they could look at distributing into a new region entirely, perhaps a neighbouring province they haven't reached yet, using the same product exactly as it already is.` },
    { s: 'MICHAEL', t: `Why wouldn't product development fit here at all?` },
    { s: 'NALEDI', t: `Because Frostbite explicitly ruled out developing anything new — product development requires exactly that, a new or meaningfully changed product, which is the one option their own stated constraint eliminates from the start.` },
    { s: 'MICHAEL', t: `[pleased] So reading the constraint carefully actually narrows the answer before you even start reasoning through options.` },
    { s: 'NALEDI', t: `Precisely — and that's a genuinely useful habit for any scenario in this topic. The scenario often quietly rules out one or two quadrants of Ansoff's matrix before you even begin, and catching that early saves you from wasting time on an answer that doesn't fit the brief.` },
    { s: 'MICHAEL', t: `[confidently] Let me recap. Intensive strategies grow a business without necessarily acquiring anyone else, organised through Ansoff's matrix — existing products in existing markets is market penetration, existing products in new markets is market development, and new products in existing markets is product development. Market penetration works through price, promotion, packaging, staffing or service changes. Market development works through new regions, pricing changes, or new distribution channels. Product development works through market research, genuinely new products, product improvements, or repackaging — but carries a real cost that the other two options avoid.` },
    { s: 'NALEDI', t: `[encouraging] A thorough recap. Exam tip: when a scenario specifies a constraint, like "no new products," always check which quadrants of Ansoff's matrix that constraint eliminates before answering — it's a fast way to avoid recommending a strategy the scenario has already ruled out.` },
    { s: 'MICHAEL', t: `Check the constraint first, every time. Next episode?` },
    { s: 'NALEDI', t: `In the next episode, we cover the fourth quadrant of Ansoff's matrix, and genuinely the riskiest family of strategies — diversification.` },
    { s: 'MICHAEL', t: `[warmly] See you there.` },
  ],
},

{
  num: 7,
  file: 'Episode 7 - Branching Out - Diversification Strategies',
  segs: [
    { s: 'AMELIA', t: `Episode 7: Branching Out: Diversification Strategies` },
    { s: 'NALEDI', t: `[warmly] Welcome to The Business Brief. In this episode: the fourth quadrant of Ansoff's matrix, and genuinely the riskiest strategy family we'll cover — diversification.` },
    { s: 'MICHAEL', t: `[curious] Why does diversification specifically carry more risk than the others?` },
    { s: 'NALEDI', t: `[explaining clearly] Because it involves changing both the product and the market at the same time. The business markets new products in new markets, developing or improving products so as to increase the size of its market. It's used to increase sales and ensure growth, but because the business is operating in genuinely unfamiliar territory on both fronts at once, it carries real risk.` },
    { s: 'MICHAEL', t: `Is there more than one way to diversify, or is it one single approach?` },
    { s: 'NALEDI', t: `Three distinct forms, each with a different relationship to what the business already does. Let's start with the closest one to home.` },
    { s: 'MICHAEL', t: `Go ahead.` },
    { s: 'NALEDI', t: `Concentric diversification — the business adds new products or services that are related to its existing products, and which appeal to new customers. The new offering isn't identical to what came before, but it's recognisably connected.` },
    { s: 'MICHAEL', t: `Can you make that concrete?` },
    { s: 'NALEDI', t: `Picture PocketTech, a company that manufactures smartphones. They bring out a tablet that can also handle phone calls. The new product is similar to what they already make, but it's aimed specifically at expanding their customer base — by stretching their product slightly, they capture a larger market than smartphones alone would reach.` },
    { s: 'MICHAEL', t: `Second form?` },
    { s: 'NALEDI', t: `Horizontal diversification — the business adds new products or services that are unrelated to its existing products, but that may appeal to its existing customers.` },
    { s: 'MICHAEL', t: `How would that look for PocketTech?` },
    { s: 'NALEDI', t: `Picture them opening movie theatres. There's no direct relationship between a smartphone and a cinema — but they're expanding their product range specifically for the customer base they already have, betting that people who buy their phones might also enjoy their entertainment venues.` },
    { s: 'MICHAEL', t: `And the third, most distant form?` },
    { s: 'NALEDI', t: `Conglomerate diversification — the business adds new products or services that are unrelated to its existing products, and that appeal to entirely new groups of customers. This is the version with the least overlap of all three.` },
    { s: 'MICHAEL', t: `An example for that one?` },
    { s: 'NALEDI', t: `Picture PocketTech launching a cosmetics range, children's toys, and camping gear, all at once. They're appealing to a completely different market with a completely new product range that has no real connection to phones or tablets at all.` },
    { s: 'MICHAEL', t: `What's the actual payoff for taking on that much risk?` },
    { s: 'NALEDI', t: `[upbeat] Genuinely real benefits. It's exciting and motivating for staff, since it opens up potential new goals beyond the same old targets. It gives the business a new mission, vision and set of goals to work toward. And it builds a real safety net — if one industry the business operates in starts to collapse, or sales in that area decline, the business isn't entirely dependent on it.` },
    { s: 'MICHAEL', t: `And the honest downside?` },
    { s: 'NALEDI', t: `[serious] It can be genuinely very risky, precisely because it's unknown territory. It can pull focus away from the business's main operation. And it can be very expensive — it demands capital, marketing spend, and serious research, none of which is guaranteed to pay off.` },
    { s: 'MICHAEL', t: `Let's classify a few real moves using the three types.` },
    { s: 'NALEDI', t: `[engagingly] Good idea — this is exactly the skill this section tests. Picture a supermarket chain that starts selling its own branded cooking oil and spices, similar to products already on its shelves, aimed at budget-conscious shoppers who weren't previously loyal to the store's private label range. What type is that?` },
    { s: 'MICHAEL', t: `Concentric — it's related to what they already sell, and it's aimed at winning over a new group of customers rather than just serving existing ones more deeply.` },
    { s: 'NALEDI', t: `Exactly right. Now — that same supermarket chain opens a chain of laundromats next to some of its stores, aimed at the same shoppers already walking through its doors weekly.` },
    { s: 'MICHAEL', t: `Horizontal — laundromats have nothing to do with groceries, but they're targeting the exact same existing customer base.` },
    { s: 'NALEDI', t: `Correct. And finally — the supermarket chain launches an unrelated logistics and courier delivery service aimed at businesses that have never shopped with them at all.` },
    { s: 'MICHAEL', t: `[confidently] Conglomerate — completely unrelated product, completely new customer group.` },
    { s: 'NALEDI', t: `Precisely the reasoning examiners want — checking both dimensions, relatedness of product and overlap of customer, rather than guessing from the surface description alone.` },
    { s: 'MICHAEL', t: `[confidently] Let me recap. Diversification is Ansoff's fourth quadrant, changing both product and market simultaneously, which makes it the riskiest of the four options in Ansoff's matrix. Concentric diversification adds related products aimed at new customers. Horizontal diversification adds unrelated products aimed at existing customers. Conglomerate diversification adds unrelated products aimed at entirely new customers. The upside is real — new motivation, new goals, and a genuine safety net — but the downside is real risk, lost focus, and significant expense.` },
    { s: 'NALEDI', t: `[encouraging] An excellent close. Exam tip: to correctly classify a diversification example, always check two separate things — whether the product is related or unrelated to what the business already offers, and whether the customer is existing or new. Getting either dimension wrong will point you to the wrong category, even if your instinct about the example feels right.` },
    { s: 'MICHAEL', t: `Check both dimensions, every time. Next episode?` },
    { s: 'NALEDI', t: `In the next episode, we look at what happens when growth isn't the goal at all — when a business has to retreat, and the other strategies that don't fit neatly into any of the families we've covered so far.` },
    { s: 'MICHAEL', t: `[warmly] See you there.` },
  ],
},

{
  num: 8,
  file: 'Episode 8 - When a Business Has to Retreat - Defensive and Other Strategies',
  segs: [
    { s: 'AMELIA', t: `Episode 8: When a Business Has to Retreat: Defensive and Other Strategies` },
    { s: 'NALEDI', t: `[warmly] Welcome to The Business Brief. In this episode: what a business does when growth isn't realistic at all, plus a wider set of strategies that don't fit neatly into any single family.` },
    { s: 'MICHAEL', t: `[curious] When does a business actually turn to defensive strategies?` },
    { s: 'NALEDI', t: `[serious] Genuinely as a last resort. Organisations usually only resort to defensive strategies when they're under severe pressure and have very few options left. They've generally tried everything else, they're under real financial strain, and they have to take more severe steps just to improve profits and minimise losses.` },
    { s: 'MICHAEL', t: `Let's start with the mildest of the three.` },
    { s: 'NALEDI', t: `[serious] Retrenchment — the process of selling assets or reducing staff numbers. It aims to decrease costs by cutting the number of posts and products, or closing certain departments entirely. The honest cost is that it usually results in a real loss of skills and market presence for the business.` },
    { s: 'MICHAEL', t: `Second?` },
    { s: 'NALEDI', t: `Divestiture — an organisation sells divisions that aren't profitable, or sells off assets that aren't productive, sometimes by decreasing the number of shareholders involved. There are three genuine reasons a business would do this.` },
    { s: 'MICHAEL', t: `What are they?` },
    { s: 'NALEDI', t: `When a part of the business simply isn't doing well and isn't profitable. When the business has become too large to manage effectively as a whole. And when the business needs to raise capital specifically to invest in a more profitable part of itself.` },
    { s: 'MICHAEL', t: `So divestiture isn't always about failure — sometimes it's about reallocating toward strength.` },
    { s: 'NALEDI', t: `Exactly that nuance, and it's worth holding onto — divestiture can be a genuinely proactive move, not just a defensive retreat, even though it sits in the defensive family.` },
    { s: 'MICHAEL', t: `And the most severe option?` },
    { s: 'NALEDI', t: `[serious] Liquidation — the process where a business stops operating entirely, and its assets are used to pay off debts. The business sells off assets to raise cash, pays its creditors and employees, and closes down. It's worth being honest that during liquidation, assets are usually sold for much less than they're actually worth — the process itself works against getting full value.` },
    { s: 'MICHAEL', t: `What are the genuine trade-offs across all three defensive options?` },
    { s: 'NALEDI', t: `On the advantage side — they can save real costs, generate income for the business, and get rid of divisions that aren't making a profit and are draining resources. On the disadvantage side — they demotivate staff, they're time-consuming, they're a genuine legal process, and the business can still end up losing money even after going through with it.` },
    { s: 'MICHAEL', t: `Let's test this with a scenario.` },
    { s: 'NALEDI', t: `[engagingly] Good idea. Picture Highbridge Furniture, a manufacturer with three factories. One factory, making outdoor furniture, has been losing money for two years straight, while the other two, making office furniture, remain genuinely profitable and are actually short on capital to expand.` },
    { s: 'MICHAEL', t: `Which defensive strategy fits best here?` },
    { s: 'NALEDI', t: `[explaining clearly] Divestiture, specifically — selling off the underperforming outdoor furniture factory hits two of the three named reasons directly. It's not profitable, and the capital raised could fund expansion in the office furniture side that's actually working. Liquidation would be too extreme here, since two-thirds of the business is genuinely healthy, and retrenchment alone wouldn't address the deeper structural problem of running an entire factory that isn't working.` },
    { s: 'MICHAEL', t: `Now, beyond integration, intensive, diversification and defensive — you mentioned a wider set of strategies that don't fit those families.` },
    { s: 'NALEDI', t: `Right, a genuinely varied list of eight, since the right strategy always depends on the type of business, the reason for the strategy, and everyone involved — employees, suppliers, customers.` },
    { s: 'MICHAEL', t: `Let's go through them.` },
    { s: 'NALEDI', t: `Replacing individuals — employing the best possible people helps a business meet its objectives, but sometimes people need to be replaced because they don't fit in, can't cope, resign, retire, or get promoted into a different role. Low productivity from the wrong person in a role affects not just output and quality, but the morale of everyone around them.` },
    { s: 'MICHAEL', t: `Second?` },
    { s: 'NALEDI', t: `Revising the business's mission. As a business grows, its mission needs to adapt to changing environments — shifting trends in the market and evolving technology mean business goals genuinely need to change too.` },
    { s: 'MICHAEL', t: `Third?` },
    { s: 'NALEDI', t: `Establishing or revising objectives, specifically using SMART principles — objectives should be specific, measurable, attainable, realistic and timed. This gets everyone working toward the same target, and gives people a real sense of achievement when goals are actually met.` },
    { s: 'MICHAEL', t: `Fourth?` },
    { s: 'NALEDI', t: `Developing new policies. These need regular revision to keep up with developments and trends, and it's genuinely valuable to involve staff in that process — it helps people buy into the changes, and tends to create a happier working environment overall.` },
    { s: 'MICHAEL', t: `Fifth?` },
    { s: 'NALEDI', t: `Issuing stock to raise capital — an option specifically available to public companies listed on a stock exchange, as a way to raise more capital directly.` },
    { s: 'MICHAEL', t: `Sixth?` },
    { s: 'NALEDI', t: `Adding additional sales staff, to promote products and hopefully increase sales. It's worth naming the real risk here honestly — if turnover doesn't actually increase, the business has taken on extra cost for no return.` },
    { s: 'MICHAEL', t: `Seventh and eighth?` },
    { s: 'NALEDI', t: `Allocating resources differently. Businesses can become complacent over time about how they allocate resources, so it's genuinely wise to periodically review and reallocate more effectively and efficiently. And developing new performance incentives — more motivated staff tend to be more productive, and more productive staff tend to generate more profit, so new incentive structures can directly drive that chain.` },
    { s: 'MICHAEL', t: `That's a genuinely broad toolkit, separate entirely from the four major families.` },
    { s: 'NALEDI', t: `It is, and that's really the point of covering it separately — not every strategic response fits neatly into integration, intensive, diversification or defensive. Sometimes the right move is internal and structural, rather than about markets, products or ownership at all.` },
    { s: 'MICHAEL', t: `[confidently] Let me recap. Defensive strategies are a last resort under real pressure — retrenchment cuts costs through staff or asset reduction, divestiture sells off underperforming or capital-needing divisions, and liquidation closes the business entirely to pay off debts, usually selling assets for less than they're worth. Beyond the four major families, a wider toolkit exists — replacing individuals, revising the mission, setting SMART objectives, developing new policies, issuing stock, adding sales staff, reallocating resources, and creating new performance incentives.` },
    { s: 'NALEDI', t: `[encouraging] A thorough recap. Exam tip: when a scenario shows a business with one struggling division and other genuinely healthy ones, lean toward divestiture rather than liquidation — examiners use this exact contrast to test whether you can tell a company-wide crisis apart from a localised, fixable problem.` },
    { s: 'MICHAEL', t: `Localised problem, not company-wide, before reaching for liquidation. Next episode?` },
    { s: 'NALEDI', t: `In the next episode, we cover the final stage of the whole cycle — how a business actually checks whether any of these strategies worked.` },
    { s: 'MICHAEL', t: `[warmly] See you there.` },
  ],
},

{
  num: 9,
  file: 'Episode 9 - Did It Actually Work - Strategic Evaluation',
  segs: [
    { s: 'AMELIA', t: `Episode 9: Did It Actually Work? Strategic Evaluation` },
    { s: 'NALEDI', t: `[warmly] Welcome to The Business Brief. In this episode we close the loop with the final stage of the cycle — genuinely checking whether any of it worked.` },
    { s: 'MICHAEL', t: `[curious] Why does evaluation get its own dedicated stage, rather than just being the end of implementation?` },
    { s: 'NALEDI', t: `[explaining clearly] Because it's a genuinely distinct phase of strategic management, not just a footnote. Strategic evaluation is a vital part of strategy formulation, since it shows the business whether its strategies have actually been effective and efficient, and whether they've achieved the results the business was hoping for.` },
    { s: 'MICHAEL', t: `What does it actually assess?` },
    { s: 'NALEDI', t: `Whether the correct strategy was chosen in the first place, and whether it's still appropriate given the current market — not just whether it was appropriate when it was chosen. Timeous evaluation matters specifically because it can alert management to problems, or potential problems, before a situation becomes genuinely critical.` },
    { s: 'MICHAEL', t: `[curious] Is there a structured way to actually run an evaluation, or is it more of a general mindset?` },
    { s: 'NALEDI', t: `Structured — three basic activities. First, evaluating the underlying basis of the business strategy — genuinely understanding why the business chose the strategy it did, which gives real insight into how effective that strategy has actually turned out to be. Second, comparing expected performance with actual performance — every business sets targets, and it's essential to measure what actually happened against those targets, not just assume things went to plan.` },
    { s: 'MICHAEL', t: `And the third?` },
    { s: 'NALEDI', t: `Taking corrective action where necessary. If performance is consistently below expectations, the business has to complete a detailed analysis of why — and make sure its targets and expectations were realistic in the first place, matched to the business's true potential rather than wishful thinking.` },
    { s: 'MICHAEL', t: `[curious] Is there a version of this that repeats, the way the earlier four-stage cycle did?` },
    { s: 'NALEDI', t: `Yes — a five-step evaluation cycle that loops back on itself. Step one, identify the goals and measure achievements against them. Step two, compare expected results with actual results and performance. Step three, determine the deviations, meaning the differences, and identify the actual reasons behind them. Step four, analyse what actions could prevent similar deviations happening again in future. And step five, carry out those corrective actions — after which the cycle loops straight back to step one.` },
    { s: 'MICHAEL', t: `[thoughtfully] So evaluation genuinely never stops.` },
    { s: 'NALEDI', t: `That's exactly the design — it's continuous, because the environment a business operates in never stops changing either. A strategy that was right last year can genuinely stop being right this year, and only ongoing evaluation catches that shift in time.` },
    { s: 'MICHAEL', t: `[curious] Now that we've covered all four major strategy families across this run, is there a way to compare them side by side?` },
    { s: 'NALEDI', t: `A genuinely useful comparison table, built from everything we've covered. Integration strategies can significantly reduce costs and competition, but they're a legal process that can take real time, and can be expensive, involving shareholders and large amounts of capital.` },
    { s: 'MICHAEL', t: `Intensive strategies?` },
    { s: 'NALEDI', t: `A genuine variety of ways to implement them, some capable of a large impact with relatively small capital input, and they fit well into a long-term vision. On the downside, they often don't have a large enough impact on their own, new products specifically can be expensive to develop, and they can be labour intensive, placing real strain on staff.` },
    { s: 'MICHAEL', t: `Diversification?` },
    { s: 'NALEDI', t: `Exciting and motivating for staff, offering a potential new mission, vision and set of goals, and building a genuine safety net if one industry starts to decline. But it can be very risky precisely because it's unknown territory, it can pull focus away from the core business, and it can be very expensive, demanding capital, marketing and serious research.` },
    { s: 'MICHAEL', t: `And defensive strategies, to close the comparison?` },
    { s: 'NALEDI', t: `They can save real costs, generate income, and remove divisions that are draining resources without turning a profit. But they demotivate staff, they're time-consuming, they involve a genuine legal process, and the business can still end up losing money even after going through with it.` },
    { s: 'MICHAEL', t: `[curious] Looking at all four side by side like that, is there a pattern in how risk and reward trade off?` },
    { s: 'NALEDI', t: `Genuinely, yes. Integration and defensive strategies both lean toward cost control, but through very different means — one through gaining control, the other through cutting back. Intensive and diversification strategies both lean toward growth, but diversification takes on considerably more risk for a potentially bigger payoff, since it's working in genuinely unfamiliar territory rather than adjusting something the business already understands.` },
    { s: 'MICHAEL', t: `Let's put the evaluation process to work on a scenario.` },
    { s: 'NALEDI', t: `[engagingly] Good idea. Picture Highbridge Furniture again, from the earlier defensive-strategy example, after divesting their underperforming outdoor furniture factory. A year later, the two remaining office furniture factories were projected to grow sales by fifteen percent using the freed-up capital, but actual growth came in at only six percent.` },
    { s: 'MICHAEL', t: `Walk through the five-step cycle for them.` },
    { s: 'NALEDI', t: `[explaining clearly] Step one — the goal was fifteen percent growth, and the achievement was six percent, so there's a clear, measurable gap. Step two — comparing expected versus actual confirms that gap is real, not just a rounding difference. Step three — determining the deviation means asking why the gap exists — maybe the new capital went into equipment before the sales team was actually trained to sell the expanded output. Step four — analysing prevention might mean sequencing future investment so training happens alongside, not after, equipment upgrades. Step five — carrying out that correction for the next planning cycle, and then the whole process loops back to reassessing goals for the following year.` },
    { s: 'NALEDI', t: `[encouraging] That's exactly the kind of complete answer this process rewards — not stopping at "growth was lower than expected," but tracing the actual gap through to a specific corrective action.` },
    { s: 'MICHAEL', t: `[confidently] Let me recap. Strategic evaluation is a distinct, vital phase, resting on three basic activities — examining why a strategy was chosen, comparing expected results to actual results, and taking corrective action where needed — organised through a continuous five-step cycle that loops back on itself. Comparing all four families side by side, integration and defensive strategies both aim at cost control through opposite means, while intensive and diversification strategies both aim at growth, with diversification carrying meaningfully more risk for a potentially larger reward.` },
    { s: 'NALEDI', t: `[encouraging] A genuinely comprehensive close to the whole strategy toolkit. Exam tip: for any question asking you to evaluate a strategy's success, always work through the actual gap between expected and actual results before suggesting a fix — jumping straight to a recommendation without first establishing the size and cause of the gap tends to lose marks.` },
    { s: 'MICHAEL', t: `Establish the gap first, always. Next episode?` },
    { s: 'NALEDI', t: `In the next episode, it's a bonus round — every framework, every strategy family, and every distinction from this entire run, quizzed properly.` },
    { s: 'MICHAEL', t: `[warmly] See you there.` },
  ],
},

{
  num: 10,
  file: 'Episode 10 - Bonus - Macro-Environment Strategy Exam Revision Round-Up',
  segs: [
    { s: 'AMELIA', t: `Episode 10, Bonus: Macro-Environment Strategy Exam Revision Round-Up` },
    { s: 'NALEDI', t: `[excited] Welcome to the bonus episode of The Business Brief. This one revises creative thinking, three analysis frameworks, the formulation and implementation process, four strategy families, and how to evaluate it all. There's no new content, so let's go straight into exam mode.` },
    { s: 'MICHAEL', t: `[laughs softly] I've been looking forward to this one. Where do we start?` },
    { s: 'NALEDI', t: `[upbeat] Definitions, quickfire. I give you the term, you give me the meaning in one line.` },
    { s: 'MICHAEL', t: `Go.` },
    { s: 'NALEDI', t: `Lateral thinking.` },
    { s: 'MICHAEL', t: `Seeking to solve problems by unorthodox or apparently illogical methods.` },
    { s: 'NALEDI', t: `SWOT.` },
    { s: 'MICHAEL', t: `Strengths, weaknesses, opportunities and threats — internal and external factors combined.` },
    { s: 'NALEDI', t: `PESTLE.` },
    { s: 'MICHAEL', t: `Political, economic, social, technological, legal and environmental factors — external only.` },
    { s: 'NALEDI', t: `Intensive.` },
    { s: 'MICHAEL', t: `To a high or extreme degree — the family of strategies aimed at squeezing more growth from what a business already has.` },
    { s: 'NALEDI', t: `[pleased] Four for four. One more — conglomerate.` },
    { s: 'MICHAEL', t: `A corporation made up of subsidiary companies or divisions across a variety of unrelated industries.` },
    { s: 'NALEDI', t: `Perfect. Now multiple choice, exam style.` },
    { s: 'MICHAEL', t: `[confidently] Ready.` },
    { s: 'NALEDI', t: `Liquidation is the process of: ensuring the business doesn't have too much stock, selling assets to pay off debts, having large amounts of cash in the business, or developing a product that's easy to sell?` },
    { s: 'MICHAEL', t: `Selling assets to pay off debts.` },
    { s: 'NALEDI', t: `Correct. Next — diversification strategies: are easy to implement, develop potential new business for the company, use new products in existing markets, or use existing products in new markets?` },
    { s: 'MICHAEL', t: `Develop potential new business for the company. New products in existing markets describes product development, while existing products in new markets describes market development. And diversification certainly isn't the easy-to-implement option.` },
    { s: 'NALEDI', t: `Exactly right. One more — which strategy is most likely to make employees concerned about their contracts: horizontal strategy, divestiture strategy, retrenchment strategy, or concentric diversification strategy?` },
    { s: 'MICHAEL', t: `Retrenchment — it's specifically defined as selling assets or reducing staff numbers.` },
    { s: 'NALEDI', t: `[upbeat] Three for three. Now a matching round — I'll describe a strategy, you name it. I won't give you the answers in any particular order, so you'll have to reason through each one properly.` },
    { s: 'MICHAEL', t: `Go for it.` },
    { s: 'NALEDI', t: `The business focuses on selling existing products into existing markets.` },
    { s: 'MICHAEL', t: `Market penetration.` },
    { s: 'NALEDI', t: `The business adds new products or services that are related to existing products and that will appeal to new customers.` },
    { s: 'MICHAEL', t: `Concentric diversification.` },
    { s: 'NALEDI', t: `The business buys or gains greater control over its distribution and retailers.` },
    { s: 'MICHAEL', t: `Forward integration.` },
    { s: 'NALEDI', t: `A business sells divisions that are not profitable, or sells off assets that are not productive.` },
    { s: 'MICHAEL', t: `Divestiture.` },
    { s: 'NALEDI', t: `Business purchases or gains greater control over its suppliers and raw material sources.` },
    { s: 'MICHAEL', t: `Backward integration.` },
    { s: 'NALEDI', t: `[chuckles] Five for five, and notice none of those were in the order I originally taught them — that's deliberate.` },
    { s: 'MICHAEL', t: `Why deliberate?` },
    { s: 'NALEDI', t: `Because exam matching questions almost never list definitions in teaching order — you have to actually recognise each definition on its own terms, not rely on remembering a sequence. Now, a comparison question.` },
    { s: 'MICHAEL', t: `Go ahead.` },
    { s: 'NALEDI', t: `Discuss the difference between a PESTLE analysis and a SWOT analysis.` },
    { s: 'MICHAEL', t: `SWOT covers both internal factors, strengths and weaknesses, and external factors, opportunities and threats, giving a full picture in one framework. PESTLE looks outward only, breaking the external environment into six specific categories — political, economic, social, technological, legal and environmental — for a deeper look at just that external side. In practice, PESTLE often feeds directly into the opportunities and threats half of a SWOT.` },
    { s: 'NALEDI', t: `That's exactly the kind of answer that scores full marks — not just defining each one, but stating the actual relationship between them. Now, Porter's Five Forces — discuss each force and give an example.` },
    { s: 'MICHAEL', t: `Supplier power — the power suppliers have to raise input prices, like a business depending on a single specialist supplier. Buyer power — the power customers have to force prices down, like one large retailer accounting for most of a supplier's sales. Competitive rivalry — the number and strength of existing competitors, like several coffee roasters competing for the same café accounts. Threat of substitution — how easily a customer could switch to a different product entirely, like tea replacing coffee. Threat of new entry — how easily a new competitor could enter the market, like low equipment costs letting new roasters start up quickly.` },
    { s: 'NALEDI', t: `A genuinely complete answer, all five forces with a real example each. Now, let's work through an Ansoff Matrix question, the kind that shows up with a diagram to complete.` },
    { s: 'MICHAEL', t: `Go ahead.` },
    { s: 'NALEDI', t: `Picture the matrix with existing market and existing products in the top-left, correctly labelled market penetration. New market and existing products in the bottom-left, correctly labelled market development. New market and new products in the bottom-right, correctly labelled diversification. But the top-right box, existing market with new products, has been left blank, marked simply "A." What strategy belongs there?` },
    { s: 'MICHAEL', t: `[confidently] Product development — new products aimed at a market the business already serves.` },
    { s: 'NALEDI', t: `Correct. And explain the difference between market penetration and market development, with an example.` },
    { s: 'MICHAEL', t: `Market penetration keeps both the product and the market the same, and grows sales through price, promotion, packaging or service changes — like Frostbite Beverages running a loyalty promotion for existing customers. Market development keeps the product the same but expands into a new market — like Frostbite distributing into a new province they haven't reached before.` },
    { s: 'NALEDI', t: `Exactly the structure examiners look for — same product in both cases, but one holds the market constant while the other doesn't.` },
    { s: 'NALEDI', t: `One more — discuss the three types of diversification strategies.` },
    { s: 'MICHAEL', t: `Concentric diversification adds related products aimed at new customers, like a phone company adding a tablet. Horizontal diversification adds unrelated products aimed at existing customers, like that same phone company opening movie theatres. Conglomerate diversification adds unrelated products aimed at entirely new customers, like that phone company launching a cosmetics range.` },
    { s: 'NALEDI', t: `[encouraging] Perfect recall, and correctly separated by both dimensions each time. Now, a longer question to close — the kind built around a business news headline.` },
    { s: 'MICHAEL', t: `Go ahead.` },
    { s: 'NALEDI', t: `Discuss the processes a business should follow when formulating and implementing a strategy, and explain the benefits using practical examples.` },
    { s: 'MICHAEL', t: `Formulation runs through six steps — setting objectives, evaluating the environment using SWOT, PESTLE and Porter's Five Forces, setting measurable goals, using that analysis to build a specific plan, analysing the gap between planned and actual performance, and choosing the final strategy. Implementation then depends on two core success factors, communication and flexibility, backed by a fuller checklist covering resources, structure, motivated staff, policies, full management involvement, active problem-solving, adaptability, and strong leadership. Tebogo's hardware chain from earlier in this run is a good working example — a vague ambition to "grow" only became actionable once she ran it through all six steps and then committed to genuinely communicating the plan to her staff.` },
    { s: 'NALEDI', t: `That's exactly the kind of full-circle answer that scores well — pulling together formulation and implementation, and grounding it in a concrete example rather than staying purely abstract.` },
    { s: 'MICHAEL', t: `Any final advice before exam day?` },
    { s: 'NALEDI', t: `[encouraging] Three things. One — know your key distinctions cold: SWOT versus PESTLE, and the four dimensions of Ansoff's matrix. Two — for matching-style questions, never assume definitions are listed in teaching order; reason through each one independently. Three — for any strategy scenario, always check what the situation has already ruled out before recommending an answer, the way Frostbite Beverages ruling out new products immediately narrowed the field to two intensive strategies.` },
    { s: 'MICHAEL', t: `Distinctions, no assumed order, check what's ruled out. Got it.` },
    { s: 'NALEDI', t: `[warmly] And that wraps up everything on developing, choosing, implementing and evaluating a business strategy — from creative thinking all the way through to a five-step evaluation cycle that never really stops. You're genuinely well prepared for this now.` },
    { s: 'MICHAEL', t: `[laughs softly] Thanks, Naledi. This has been a lot, but it actually makes sense now.` },
    { s: 'NALEDI', t: `[warmly] That's the whole point. Good luck out there. This has been The Business Brief.` },
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

  console.log(`The Business Brief — Macro-Environment Strategies (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

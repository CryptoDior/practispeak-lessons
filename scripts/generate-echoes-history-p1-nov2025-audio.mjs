/**
 * Echoes of the Past — Exam Walkthrough: History Paper 1, November 2025 — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-echoes-history-p1-nov2025-audio.mjs 1 2 3 4 5 6
 *
 * The paper is recorded in three topic parts (one PDF each). Each topic has two MP3s,
 * and each MP3 opens with Amelia announcing the title:
 *   Part 1 — The Cold War
 *     1. Source Question 1 - Containment     — Intro + Parts 1-6
 *     2. Essay Question 4 - Vietnam          — Parts 7-10 + Outro
 *   Part 2 — Independent Africa
 *     3. Source Question 2 - Angola          — Parts 1-5
 *     4. Essay Question 5 - The Congo        — Parts 6-8 + Outro
 *   Part 3 — Civil Society Protests
 *     5. Source Question 3 - Non-Violence    — Parts 1-5
 *     6. Essay Question 6 - Black Power      — Parts 6-8 + Outro
 *
 * Rebuild a file (only missing or text-edited lines are regenerated), or force specific lines:
 *   ... <n>            e.g. 2
 *   ... <n>:2,-2       e.g. 2:2,-2  (line numbers; 1 = Amelia's title; -1 = last line)
 *   ... <n> --fresh    wipe and re-record the whole file
 * If a finished file is missing saved clips, the script stops instead of re-billing them (add --go to override).
 *
 * Voices: the standard set — TYLA uses the Naledi voice, MICHAEL the Mike voice, and AMELIA
 * (narration) reads both the titles and the NARRATOR sources.
 *
 * ElevenLabs account: uses ELEVENLABS_API_KEY_2 (account 2) by default (set ELEVENLABS_ACCOUNT=1 to use the first key).
 * Model: Eleven v4 (eleven_v4), falling back to Eleven v3 (eleven_v3) if v4 fails.
 * Exam-tip callouts, on-screen cues, music cues and the Quick-Reference Recap are NOT included (show notes only).
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import crypto from 'crypto';

const ELEVENLABS_KEY =
  process.env['ELEVENLABS_API_KEY_' + (process.env.ELEVENLABS_ACCOUNT || '2')] || process.env.ELEVENLABS_API_KEY;
if (!ELEVENLABS_KEY) {
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_2 to .env.local and run with: node --env-file=.env.local scripts/generate-echoes-history-p1-nov2025-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'Echoes-of-the-Past-History-P1-Nov-2025');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'echoes-history-p1-nov2025');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'History P1 Nov 2025 - Cold War 1 - Source Question 1 - Containment',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 1, November 2025. The Cold War, part one: Source-based Question 1, the policy of containment.` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to ECHOES OF THE PAST. Today we're trying something new — our first real past paper. We're working through the National Senior Certificate History Paper 1, November 2025.` },
    { s: 'MICHAEL', t: `And I'm the one writing it. On air. Again.` },
    { s: 'TYLA', t: `[laughs] Again. Here's how it works. I read each question with its marks. Michael answers the way a learner would in the exam. Then I mark him against the official DBE marking guidelines — the memo — and show you exactly where the marks come from. And because History is built on sources, our narrator will read every source in full, exactly as it appears in the addendum. They'll be on screen too.` },
    { s: 'MICHAEL', t: `The addendum — that's the separate booklet with all the sources, right?` },
    { s: 'TYLA', t: `Exactly. Now, the paper itself. History Paper 1 is one hundred and fifty marks and three hours. There are six questions, each worth fifty marks. Section A has three source-based questions. Section B has three essays. You answer three questions — at least one source-based and at least one essay. The third can be either. And you should spend about one hour per question.` },
    { s: 'MICHAEL', t: `Six questions, I pick three. So how are we doing this?` },
    { s: 'TYLA', t: `By topic, because that's how you study. This paper has three topics, and each one has a source question and an essay. So we're splitting it into three parts. Today is Part 1, the Cold War: the source question on the policy of containment in 1947, then the essay on Vietnam. Next time, Independent Africa — Angola and the Congo. And then the civil rights movement and Black Power.` },
    { s: 'MICHAEL', t: `So if I'm only studying the Cold War, this is my episode.` },
    { s: 'TYLA', t: `[delighted] Exactly. Pause after each question and try it yourself first. Let's go.` },
    { s: 'TYLA', t: `Before Question 1, three things you have to know about source questions. First, the memo uses three levels. Level 1 is about thirty percent of the marks: pulling information out of a source, and defining terms. Level 2 is about forty percent: interpreting and explaining what the source means. Level 3 is about thirty percent: judging a source — is it reliable, useful, biased — and comparing sources.` },
    { s: 'MICHAEL', t: `So the easy marks are Level 1, and the hard ones are Level 3.` },
    { s: 'TYLA', t: `Right. Second — the mark notation next to each question. "Two times one" means two answers worth one mark each. "One times two" means one answer worth two marks. And "two times two" means two answers worth two marks each.` },
    { s: 'MICHAEL', t: `So "two times one" isn't one answer for two marks.` },
    { s: 'TYLA', t: `[seriously] No — and the chief markers say that's one of the most common mistakes. And third, read the question words. "According to the source" or "quote" means take the answer straight from the source — Level 1. "Explain," "comment," or "what did he imply" means interpret — put it in your own words and go beyond what's written. The paper itself warns: you will be disadvantaged by just rewriting the sources.` },
    { s: 'MICHAEL', t: `[whispers] Extract when it says "according to," interpret when it says "explain."` },
    { s: 'TYLA', t: `Question 1. The key question at the top is: "How did the policy of containment contribute to Cold War tensions between the United States of America and the Soviet Union in 1947?" Keep that in mind — every source answers a piece of it. Source 1A.` },
    { s: 'NARRATOR', t: `Source 1A. The source below is an extract from the 'Iron Curtain' speech delivered by Britain's former Prime Minister, Winston Churchill, in Fulton, Missouri in the USA on 5 March 1946. It was taken from Chambers Book of Great Speeches edited by A Burnet. It highlights how communism had spread into Eastern Europe.` },
    { s: 'NARRATOR', t: `A shadow has fallen upon the scenes so lately lighted by the Allied victory. Nobody knows what Soviet Russia and its communist international organisation intend to do in the immediate future, or what are the limits, if any, to their expansive and proselytising (persuasive) tendencies. I have a strong admiration and regard for the valiant (brave) Russian people and for my wartime comrade, Marshal Stalin. There is deep sympathy and goodwill in Britain — and I doubt not here also — towards the peoples of all the Russias and a resolve (decision) to persevere (continue) through many differences and rebuffs (rejections) in establishing lasting friendships.` },
    { s: 'NARRATOR', t: `We understand the Russian need to be secure on her Western frontiers by the removal of all possibility of German aggression. We welcome Russia to her rightful place among the leading nations of the world. We welcome her flag upon the seas. Above all, we welcome constant, frequent and growing contacts between the Russian people and our own people on both sides of the Atlantic. It is my duty, however — for I am sure you would wish me to state the facts as I see them to you — to place before you certain facts about the present position in Europe.` },
    { s: 'NARRATOR', t: `From Stettin in the Baltic to Trieste in the Adriatic, an Iron Curtain has descended (fallen) across the continent. Behind that line lie all the capitals of the ancient states of Central and Eastern Europe. Warsaw, Berlin, Prague, Vienna, Budapest, Belgrade, Bucharest and Sofia: all these famous cities and the populations around them lie in what I must call the Soviet sphere, and all are subject, in one form or another, not only to Soviet influence but to a very high and, in many cases, increasing measure of control from Moscow ...` },
    { s: 'TYLA', t: `1.1.1: "Who, according to the source, did Churchill blame for, 'A shadow (that) has fallen upon the scenes so lately lighted by the Allied victory'? Give TWO responses." Two times one.` },
    { s: 'MICHAEL', t: `Stalin... and the Soviet Union.` },
    { s: 'TYLA', t: `[encouragingly] "According to the source." Does Churchill blame Stalin?` },
    { s: 'MICHAEL', t: `[hesitantly] No... he calls Stalin his "wartime comrade" and says he admires him. The sentence right after the shadow says "Soviet Russia and its communist international organisation." So the two answers are Soviet Russia and its communist international organisation.` },
    { s: 'TYLA', t: `Correct — two marks. You knew from your own knowledge that Stalin led the Soviet Union, but "according to the source" means you take only what the source says. 1.1.2: "Why do you think Churchill adopted a conciliatory, or soft, attitude towards the Soviet Union despite its expansive tendencies?" One times two.` },
    { s: 'MICHAEL', t: `Because the Soviet Union was Britain's ally in the Second World War — Stalin was his "wartime comrade."` },
    { s: 'TYLA', t: `Two marks. Other accepted answers: Churchill recognised that the Soviet Union needed to secure its borders against any future German threat; he acknowledged the role the Soviet Union could still play in the world, to avoid another world conflict; and he supported more cooperation between the Soviet Union and Britain. 1.1.3: "Define the term Iron Curtain in your own words." One times two.` },
    { s: 'MICHAEL', t: `A symbolic, imaginary line that divided Europe after the Second World War — the communist Eastern bloc on one side, and the capitalist Western democracies on the other.` },
    { s: 'TYLA', t: `[delighted] Two marks. Notice the key word: symbolic. It wasn't a real curtain. 1.1.4: "Comment on what Churchill implied by the words, '... all these famous cities and the populations around them lie in what I must call the Soviet sphere ...'" One times two.` },
    { s: 'MICHAEL', t: `He's saying they're in the Soviet sphere.` },
    { s: 'TYLA', t: `[patiently] That's repeating the quote. "Implied" means: what is he really telling his audience?` },
    { s: 'MICHAEL', t: `That these Eastern European countries had been taken over by communism — they were separated from the West and controlled by the Soviet Union.` },
    { s: 'TYLA', t: `Two marks. And that's the trap the chief markers warn about: using Level 1 skills — repeating the source — for a Level 2 question. 1.1.5: "Explain the reliability of this source to a historian researching the origins of the Cold War." Two times two, four marks.` },
    { s: 'MICHAEL', t: `It's reliable because it's Churchill's speech.` },
    { s: 'TYLA', t: `That's half of one point. For reliability, look at the source's introduction — the part the narrator read first — and ask four questions. Who produced it? What kind of source is it? When was it made? And where was it published?` },
    { s: 'MICHAEL', t: `Okay. Who: it's a speech by Winston Churchill, a former British Prime Minister and a respected world leader — so it's first-hand information. When: the 5th of March 1946, just after the Second World War, when the Soviet Union was spreading its sphere of influence. Where: it's an iconic speech that was published worldwide and appears in Chambers Book of Great Speeches.` },
    { s: 'TYLA', t: `[impressed] Four marks — and you used the introduction, not just the extract. That's the habit for every reliability question.` },
    { s: 'TYLA', t: `Source 1B is a cartoon. Look at it on screen while the narrator reads the introduction.` },
    { s: 'NARRATOR', t: `Source 1B. The cartoon below titled 'WHAT WE'RE DRIVING AT' by SJ Ray appeared in the Kansas City Star newspaper in the United States of America (USA) on 13 March 1947. It depicts President Truman using a hammer called 'U.S. AID' to stop the ideological and political threats posed by the communists.` },
    { s: 'TYLA', t: `In the cartoon, a large dark creature labelled "Communist Infiltration and Dictatorship Threats" is moving forward. In front of it is a barbed-wire fence, with posts labelled Greece and Turkey, marked "Non- Communist Small Nations." And the American figure is driving the posts in with the "U.S. AID" hammer. 1.2.1: "Explain the symbolic representation of the following: (a) a bear or wolf labelled 'Communist Infiltration and Dictatorship Threats.'" One times two.` },
    { s: 'MICHAEL', t: `It's a big, scary animal attacking the countries.` },
    { s: 'TYLA', t: `[encouragingly] That's what you see. "Symbolic representation" asks what it stands for.` },
    { s: 'MICHAEL', t: `Right — it stands for the threat posed by the Soviet Union's spread of communism, and Stalin creating a sphere of influence in Eastern Europe.` },
    { s: 'TYLA', t: `Two marks. Also accepted: the spread of authoritarian, dictatorship governments; and the authoritarian nature of the Soviet Union. (b): the "U.S. AID" hammer.` },
    { s: 'MICHAEL', t: `The financial assistance the US gave countries like Greece to prevent a communist takeover — strengthening their borders against communist infiltration.` },
    { s: 'TYLA', t: `Two marks. The memo also accepts the Marshall Plan, and the financial support Truman got from the US Congress. 1.2.2: "Comment on why you would consider the caption 'WHAT WE'RE DRIVING AT' appropriate." One times two.` },
    { s: 'MICHAEL', t: `It's a pun! He's literally driving in the fence posts with the hammer — and "what we're driving at" also means "what we're trying to achieve." What the US was trying to achieve was stopping communist infiltration into Western Europe.` },
    { s: 'TYLA', t: `[delighted] Two marks — and spotting the double meaning shows real understanding. The memo also accepts that it captures the US giving financial aid to contain the spread of communism. Question 1.3: "Refer to Sources 1A and 1B. Explain how the information in Source 1A supports the evidence in Source 1B regarding the increasing threat of communism." Two times two.` },
    { s: 'MICHAEL', t: `Source 1A is Churchill's speech about the Iron Curtain. Source 1B is a cartoon of the US stopping communism.` },
    { s: 'TYLA', t: `[seriously] You've described each source. But you haven't connected them. A comparison answer needs both sources in one point.` },
    { s: 'MICHAEL', t: `Okay. Source 1A refers to the Soviet Union's unknown expansive intentions, and Source 1B shows the communist threat heading towards non-communist small nations. Second point: Source 1A says Eastern European cities are under growing Soviet control, and Source 1B shows the growing communist threat to Greece and Turkey.` },
    { s: 'TYLA', t: `[impressed] Four marks. Each point has the same pattern: "Source 1A says this, and Source 1B shows that." The memo also accepts: both sources are against the threat of communist infiltration. And use only the two sources named — the chief markers say learners lose marks by bringing in all four.` },
    { s: 'TYLA', t: `Source 1C.` },
    { s: 'NARRATOR', t: `Source 1C. The source below is from an article titled 'The Marshall Plan: Filling in Some Blanks' by K Burk and it appeared in the journal Contemporary European History, published in 2001. It outlines how the US introduced the Marshall Plan to contain the spread of communism across Europe.` },
    { s: 'NARRATOR', t: `Marshall Plan policymakers had two main concerns here. First of all, broken economies might foster the growth of communism much like mulch (compost) fosters mushrooms, a fear particularly prevalent (common) with regard to France, Italy, Greece and Trizone Germany. A second major goal of American policy was to contain the Soviet Union, which was perceived (seen) as having embarked on active expansion and as being irremediably (severely) hostile to the United States. A swift glance (look) at a map made it clear why Turkey, Greece, Ireland, Iceland, Norway and Sweden were included: Turkey and Greece would guard the eastern Mediterranean; Ireland would guard the approaches to the British Isles and the western Mediterranean; Norway and Iceland were strategically placed athwart (diagonally); the routes across the North Atlantic and Sweden lay across the Baltic Sea from the Soviet Union, its entire south-eastern coast effectively ringed with Soviet military forces.` },
    { s: 'NARRATOR', t: `The need to contain the Soviet Union, plus the desire to rebuild the European economy, came together in the third goal, which was the drive for European integration. An integrated Europe working together politically as well as economically, would constitute the strongest possible barrier to Soviet expansion, and certainly the United States maintained constant pressure on the participants in the Marshall Plan to move towards this goal.` },
    { s: 'NARRATOR', t: `Trizone: Germany was divided into four zones of occupation (by the Allied powers), namely the USA zone, the British zone, the French zone and the Russian zone. 'Trizone' refers to the three zones of the Western countries, i.e. the USA, Britain and France tied together by the ideology of capitalism.` },
    { s: 'TYLA', t: `1.4.1: "What, according to the source, was the first concern of the Marshall Plan policymakers?" One times two.` },
    { s: 'MICHAEL', t: `"... broken economies might foster the growth of communism much like mulch (compost) fosters mushrooms ..."` },
    { s: 'TYLA', t: `Two marks. [laughs] Great image, by the way — poverty is the compost that communism grows in. 1.4.2: "Why, according to the source, was containing the Soviet Union the second major goal of American policy? Give TWO responses." Two times one.` },
    { s: 'MICHAEL', t: `The Soviet Union was "perceived (seen) as having embarked on active expansion" and "as being irremediably (severely) hostile to the United States."` },
    { s: 'TYLA', t: `Two marks. 1.4.3: "Quote TWO pieces of evidence from the source that suggest the aims of the third goal of the policy of containment." Two times one.` },
    { s: 'MICHAEL', t: `The third goal was European integration... so, to make Europe work together and to stop the Soviet Union.` },
    { s: 'TYLA', t: `[encouragingly] What was the command word?` },
    { s: 'MICHAEL', t: `[groans] Quote. Not summarise. Okay — "The need to contain the Soviet Union ..." and "... the desire to rebuild the European economy ..."` },
    { s: 'TYLA', t: `Two marks. If it says quote, the words must come from the source, in quotation marks. 1.4.4: "Explain the implication of the phrase, '... the drive for European integration ...', in the context of the policy of containment." Two times two.` },
    { s: 'MICHAEL', t: `Now I explain in my own words. European countries would work together politically and economically under capitalism, so that they could stop the Soviet Union from infiltrating Europe.` },
    { s: 'TYLA', t: `[delighted] Four marks — two separate points. Also accepted: strengthening Europe financially to stop the spread of communism, and supporting long-term European unity against the communist threat.` },
    { s: 'TYLA', t: `Source 1D — and this time we hear the Soviet response.` },
    { s: 'NARRATOR', t: `Source 1D. The source below is from a book titled History of Western Civilization by J McLean. It gives a detailed account of the Molotov Plan that was introduced by the Soviet Union in 1947 to oppose the USA's containment policy.` },
    { s: 'NARRATOR', t: `The Molotov Plan was the system created by the Soviet Union in 1947 to provide aid to rebuild the countries in Eastern Europe that were politically and economically aligned with the Soviet Union. It can be seen as the USSR's version of the Marshall Plan, which for political reasons the Eastern European countries would not be able to join without leaving the Soviet sphere of influence. Soviet foreign minister, Vyacheslav Molotov, rejected the Marshall Plan (1947), proposing the Molotov Plan — the Soviet-sponsored economic grouping which was eventually expanded to become the COMECON. The Molotov Plan was symbolic of the Soviet Union's refusal to accept aid from the Marshall Plan or allow any of their satellite states to do so because of their belief that the Plan was an attempt to weaken Soviet interest in their satellite states through the conditions imposed and by making beneficiary (receiving) countries economically dependent on the United States.` },
    { s: 'NARRATOR', t: `The plan was a system of bilateral trade agreements that established the COMECON to create an economic alliance of socialist countries. This aid allowed countries in Europe to stop relying on American aid, and therefore allowed Molotov Plan states to reorganise their trade to the USSR instead.` },
    { s: 'NARRATOR', t: `COMECON: a Soviet-led economic organisation of communist states formed in 1949 to promote economic cooperation and integration among its members.` },
    { s: 'TYLA', t: `1.5.1: "Why, according to the source, was the Molotov Plan created by the Soviet Union in 1947?" One times two.` },
    { s: 'MICHAEL', t: `"... to provide aid to rebuild the countries in Eastern Europe that were politically and economically aligned with the Soviet Union."` },
    { s: 'TYLA', t: `Two marks. The memo also accepts "It can be seen as the USSR's version of the Marshall Plan." 1.5.2: "Quote TWO reasons from the source why the Soviet Union refused to accept financial aid from the Marshall Plan." Two times one.` },
    { s: 'MICHAEL', t: `"... belief that the Plan was an attempt to weaken Soviet interest in their satellite states ..." and "... making beneficiary (receiving) countries economically dependent on the United States."` },
    { s: 'TYLA', t: `Two marks. 1.5.3: "Explain the term satellite states in the context of the Cold War." One times two.` },
    { s: 'MICHAEL', t: `Eastern European countries that were controlled by the Soviet Union and influenced by communism during the Cold War. Like satellites orbiting a planet.` },
    { s: 'TYLA', t: `[warmly] Two marks — and nice image. 1.5.4: "Using the information in the source and your own knowledge, comment on what the COMECON offered the USSR and its satellite states." Two times two.` },
    { s: 'MICHAEL', t: `It gave them financial support so they wouldn't join the Marshall Plan. And it created an economic alliance — the communist states traded with each other to rebuild their economies.` },
    { s: 'TYLA', t: `Four marks. Also accepted: security against capitalist economic domination. "And your own knowledge" means you can go beyond the source — but stay relevant to the question.` },
    { s: 'TYLA', t: `The last part of every source question is the paragraph. 1.6: "Using the information in the relevant sources and your own knowledge, write a paragraph of about eight lines, about eighty words, explaining how the policy of containment contributed to Cold War tensions between the United States of America and the Soviet Union in 1947." Eight marks. Michael — go.` },
    { s: 'MICHAEL', t: `"In Source 1A, Churchill says an Iron Curtain has descended across the continent. In Source 1B, the US uses a hammer called US Aid. In Source 1C, the Marshall Plan wanted to contain the Soviet Union. In Source 1D, the Soviet Union created the Molotov Plan."` },
    { s: 'TYLA', t: `[encouragingly] Every sentence is accurate. But read the question again. What does it ask you to explain?` },
    { s: 'MICHAEL', t: `How containment contributed to tensions. And I just... listed the sources, one by one.` },
    { s: 'TYLA', t: `Exactly. That's a Level 1 paragraph — about two marks. The paragraph is marked as a whole, on three levels. Level 1, zero to two: evidence used in an elementary way. Level 2, three to five: mostly relevant evidence in a basic paragraph. Level 3, six to eight: relevant evidence used very effectively in an organised paragraph that answers the question. So — start by answering the question directly, then use the sources as evidence, and link each piece back to "tensions."` },
    { s: 'MICHAEL', t: `Okay. "The policy of containment increased Cold War tensions because the USA openly set out to stop the spread of Soviet communism. Churchill warned that an Iron Curtain divided Europe and that Eastern Europe was under growing control from Moscow. Fearing a domino effect, the USA gave financial aid to Greece and Turkey and introduced the Marshall Plan to rebuild and unite Western Europe as a barrier to Soviet expansion. The USSR saw this as a threat, rejected the aid and created the Molotov Plan and COMECON, deepening the divide."` },
    { s: 'TYLA', t: `[impressed] That's a Level 3 paragraph — six to eight marks. Look at what changed. Your first sentence answers the question. Then evidence from all four sources, used, not copied. You added own knowledge — the domino theory. And your last sentence shows the tension: action, then reaction. It's about ninety words, which is fine — "about eighty."` },
    { s: 'MICHAEL', t: `[whispers] Answer first, evidence in the middle, link it back at the end.` },
  ],
},

{
  num: 2,
  file: 'History P1 Nov 2025 - Cold War 2 - Essay Question 4 - Vietnam',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 1, November 2025. The Cold War, part two: Essay Question 4, Vietnam.` },
    { s: 'TYLA', t: `Now Section B — the essay. Michael, essays in History are marked very differently from Business Studies. There's no list of facts you tick off one by one. The essay is marked globally — as a whole — on a matrix with seven levels.` },
    { s: 'MICHAEL', t: `Seven levels of what?` },
    { s: 'TYLA', t: `Two things, read twice. On the first reading, the marker decides your content level: did you answer the question, and is your evidence relevant? On the second reading, your presentation level: is the essay planned and structured, and do you sustain a line of argument? Where those two levels cross on the matrix, that's your mark out of fifty.` },
    { s: 'MICHAEL', t: `"Line of argument" — what does that actually mean?` },
    { s: 'TYLA', t: `It means you take a stance in your introduction, and then every paragraph defends that stance with evidence, all the way to the conclusion. The top level, Level 7 — forty-seven to fifty marks — is a "very well planned and structured essay" with an "original, well-balanced and independent line of argument," "sustained and defended throughout." At the bottom, an essay that just retells events is "largely descriptive" — Level 2. The memo even says the global approach discourages learners from preparing essays at home and reproducing them without answering the actual question.` },
    { s: 'MICHAEL', t: `So memorising an essay on Vietnam won't save me.` },
    { s: 'TYLA', t: `[seriously] Not if the question is different from the one you memorised. And the memo asks markers to look for PEEL in every paragraph. P, Point — a point that supports your line of argument. E, Explanation — what it means and how it relates to the question. E, Example — the historical evidence. L, Link — tie it back to your argument. Your essay should be about three pages, written in about an hour, with an introduction, a body and a conclusion.` },
    { s: 'MICHAEL', t: `[whispers] Point, Explain, Example, Link.` },
    { s: 'TYLA', t: `Question 4: The Extension of the Cold War — Case Study: Vietnam. "The military tactics and strategies used by the Viet Cong during the Vietnam War between 1962 and 1975 proved to be successful in defeating the strong army of the USA. Do you agree with this statement? Support your line of argument with relevant historical evidence." Fifty marks.` },
    { s: 'MICHAEL', t: `First thing — the question says "do you agree." So I have to choose. Can I disagree?` },
    { s: 'TYLA', t: `You can. The memo says candidates must indicate whether they agree or disagree. Either can earn top marks if the evidence supports it. But think about which one the evidence supports best.` },
    { s: 'MICHAEL', t: `The US withdrew and Vietnam ended up united under communism — so I agree. Okay, my introduction: "The Vietnam War started because of the Cold War. North Vietnam was communist and South Vietnam was capitalist. The USA feared the domino theory, so it sent military advisors and later soldiers to fight in Vietnam ..."` },
    { s: 'TYLA', t: `[encouragingly] Stop there. Has the marker learned what you think yet?` },
    { s: 'MICHAEL', t: `[groans] No. I'm telling the story. That's the "too much background" trap, isn't it?` },
    { s: 'TYLA', t: `It is — the chief markers' reports flag excessive background as a common weakness. The introduction has two jobs. One: state your stance, using the words of the question. Two: show which evidence you'll use to defend it. Try again.` },
    { s: 'MICHAEL', t: `"I agree that the military tactics and strategies of the Viet Cong between 1962 and 1975 were successful in defeating the strong army of the USA. Through guerrilla warfare, the Ho Chi Minh Trail and underground tunnels, and by winning the support of the peasants, the Viet Cong made the USA's conventional army and its bombing campaigns ineffective. The Tet Offensive turned American public opinion against the war, and the USA was eventually forced to withdraw, leaving Vietnam united under communist rule by 1975."` },
    { s: 'TYLA', t: `[delighted] That's a strong introduction. The stance is clear, it uses the words of the question, and it previews the evidence. Every paragraph that follows now has a job: prove that sentence.` },
    { s: 'TYLA', t: `Now plan the body. Give me your paragraphs in order — just the points and the evidence.` },
    { s: 'MICHAEL', t: `Paragraph one — background, briefly. The USA got involved because of the domino theory. Vietnam was divided: the communist North and the capitalist South. The Vietminh from the North supported the Viet Cong in the South against the US-backed South Vietnamese army, through the Ho Chi Minh Trail.` },
    { s: 'TYLA', t: `Good — and notice you kept the Vietminh and the Viet Cong separate. The Vietminh were the communist guerrillas from the North; the Viet Cong were the Vietnamese communists in the South. Students mix them up all the time. Next?` },
    { s: 'MICHAEL', t: `Paragraph two — guerrilla warfare. The Viet Cong were peasants by day and guerrillas by night. They used booby traps, hit-and-run attacks, sabotage and underground tunnels — tunnels so narrow they fitted the Viet Cong but not the bigger US soldiers. That beat a conventional army.` },
    { s: 'TYLA', t: `Good. Next.` },
    { s: 'MICHAEL', t: `Paragraph three — winning the peasants. The US tried the strategic hamlet, or safe village, policy to separate villagers from the Viet Cong. It failed — the villagers and the Viet Cong couldn't be separated, and the Viet Cong's support base grew.` },
    { s: 'TYLA', t: `Keep going.` },
    { s: 'MICHAEL', t: `Paragraph four — escalation, and adapting to it. After the Gulf of Tonkin incident in 1964, the US escalated, sending 3 500 marines on 8 March 1965 — mostly inexperienced young men. Then Operation Ranch Hand, from 1962: Agent Orange to destroy the forests where the Viet Cong hid, and Agent Blue to destroy their crops. But the Viet Cong adapted — they improved and camouflaged their tunnels, moved into untouched jungle and stored rice underground. And napalm made the US unpopular around the world.` },
    { s: 'TYLA', t: `[impressed] That adaptation point is gold — it shows the Viet Cong's strategies beating American technology.` },
    { s: 'MICHAEL', t: `Paragraph five — Operation Rolling Thunder, March 1965 — massive bombing to finish the war quickly. But guerrilla tactics made the bombing ineffective, and the conventional US army was frustrated.` },
    { s: 'TYLA', t: `Next.` },
    { s: 'MICHAEL', t: `Paragraph six — the Tet Offensive, January 1968. A surprise attack on a hundred US-controlled cities during a holiday, and the Viet Cong took control of more than eighty. Many Viet Cong died, but it was still a success for them.` },
    { s: 'TYLA', t: `Hold that thought — we'll come back to Tet. Keep going.` },
    { s: 'MICHAEL', t: `Paragraph seven — Search and Destroy, and the My Lai massacre in March 1968. The killing of civilians turned public opinion against the US, and the Viet Cong used it as propaganda — leaflets and radio broadcasts — to gain even more support.` },
    { s: 'TYLA', t: `Two more.` },
    { s: 'MICHAEL', t: `Paragraph eight — support and unity. The Viet Cong had weapons from the Soviet Union and China, and the Vietnamese were united and experienced in defending their country.` },
    { s: 'TYLA', t: `And the ending?` },
    { s: 'MICHAEL', t: `And paragraph nine — the result. Nixon's Vietnamisation — strategic withdrawal. The Paris Peace Accords on 27 January 1973, all US troops out by 1973, North Vietnam took Saigon in 1975, and Vietnam was united under communism.` },
    { s: 'TYLA', t: `[impressed] That plan covers the memo almost completely. But here's the danger. Michael, read paragraph six back to me as you'd write it.` },
    { s: 'MICHAEL', t: `"The Tet Offensive happened in January 1968. The Viet Cong attacked a hundred cities. They took over more than eighty cities. Many Viet Cong were killed."` },
    { s: 'TYLA', t: `[patiently] All true. But where's your argument?` },
    { s: 'MICHAEL', t: `[sighs] It's just... events. That's descriptive. There's no link to "tactics were successful."` },
    { s: 'TYLA', t: `Right. That's the difference between Level 3 and Level 6. So let's write that paragraph properly, with PEEL.` },
    { s: 'MICHAEL', t: `Okay. PEEL. "Point: The Tet Offensive of January 1968 showed that the Viet Cong's strategy of surprise could defeat the USA even when it lost on the battlefield. Explain: Although the USA claimed it was winning the war, the Viet Cong proved that they could strike anywhere in South Vietnam. Example: During a holiday, they launched surprise attacks on about a hundred US-controlled cities and took control of more than eighty. Many Viet Cong fighters were killed, but the attack shocked the American public. Link: Therefore, the Tet Offensive was a strategic success for the Viet Cong, because it weakened American support for the war and contributed to the US decision to withdraw."` },
    { s: 'TYLA', t: `[delighted] That's the paragraph. The point argues, the evidence proves it, and the last sentence links back to "successful in defeating the US." Now notice something clever you did. You admitted the Viet Cong lost many fighters — and still argued it was a success. That's what the matrix means by a balanced argument. You don't hide the evidence against you — you deal with it.` },
    { s: 'MICHAEL', t: `So "well-balanced" doesn't mean I have to sit on the fence.` },
    { s: 'TYLA', t: `Exactly. You keep your stance, but you show you've weighed the evidence. Your conclusion?` },
    { s: 'MICHAEL', t: `"In conclusion, the Viet Cong's guerrilla tactics, their support among the peasants, their ability to adapt to American bombing and chemical warfare, and the political impact of the Tet Offensive made the USA's military strength ineffective. The USA was forced to withdraw in 1973, and by 1975 Vietnam was united under communist rule. I therefore agree that the Viet Cong's tactics and strategies were successful in defeating the strong army of the USA."` },
    { s: 'TYLA', t: `[impressed] That's a conclusion that ties up the argument — it pulls the evidence together and restates the stance. So, if you wrote the whole essay the way you wrote that PEEL paragraph, with every paragraph linked back: content Level 7 — the question is fully answered with relevant evidence — and presentation Level 7 — well planned, balanced, sustained. That's forty-seven to fifty.` },
    { s: 'MICHAEL', t: `And if I'd written every paragraph like my first Tet paragraph — just events?` },
    { s: 'TYLA', t: `Your facts would be right, but presentation drops to "largely descriptive," and the matrix doesn't let a top content level sit next to weak presentation. That could land you somewhere in the twenties — with exactly the same facts.` },
    { s: 'MICHAEL', t: `[amazed] So about twenty marks depend on how I use the facts.` },
    { s: 'TYLA', t: `[warmly] Michael — Part 1 done. How was History compared to Business Studies?` },
    { s: 'MICHAEL', t: `Different. In Business, I needed the right facts. Here, I needed to use the facts — interpret them, judge them, argue with them.` },
    { s: 'TYLA', t: `That's it exactly. Same tradition — your top traps from today, in one go.` },
    { s: 'MICHAEL', t: `Source questions. "According to the source" means only what the source says — Churchill blamed Soviet Russia and its communist international organisation, not Stalin. "Implied" means interpret, not repeat the quote. Two times one means two answers, one mark each. For reliability, check who, what type, when and where — from the source's introduction. "Symbolic representation" means what it stands for, not what it looks like — the bear is the threat of communism, and the hammer is US aid. "Supports" means link both sources in one point — and only the two sources named. "Quote" means quote. And the paragraph — answer the question first, use evidence, and link it back to the question, instead of listing the sources one by one.` },
    { s: 'TYLA', t: `And the essay?` },
    { s: 'MICHAEL', t: `Take a stance in the first sentence, using the question's words, and preview the evidence — no long background story. Keep the Vietminh in the North and the Viet Cong in the South. Every paragraph needs PEEL — a point that argues, not just an event. A balanced argument deals with the evidence against you. And the conclusion restates the stance. Memorised essays and descriptive essays both lose marks.` },
    { s: 'TYLA', t: `[delighted] Perfect. And to everyone listening — if the Cold War is one of your three topics, you now have the source question and the essay. Next time, Part 2: Independent Africa — the USA in Angola, and Mobutu's Congo. Until then... [whispers] facts tell the story, but the argument earns the marks. [warmly] We'll catch you in the next episode.` },
  ],
},

{
  num: 3,
  file: 'History P1 Nov 2025 - Independent Africa 1 - Source Question 2 - Angola',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 1, November 2025. Independent Africa, part one: Source-based Question 2, Angola.` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to ECHOES OF THE PAST. We're continuing with History Paper 1, November 2025. Last time, Part 1 covered the Cold War. Today is Part 2: Independent Africa — the source question on why the USA got involved in the Angolan Civil War, and then the essay on Mobutu's Congo.` },
    { s: 'MICHAEL', t: `And I'm back in the exam chair. Quick recap before we start, so I don't repeat my Cold War mistakes?` },
    { s: 'TYLA', t: `[laughs] Go on, then.` },
    { s: 'MICHAEL', t: `"According to the source" means only what the source says. "Implied" means interpret it — don't repeat the quote. "Two times one" means two answers, one mark each. Reliability — check who, what, when and where in the source's introduction. For comparisons, link both sources in every point. And for essays — a stance in the first sentence, and PEEL in every paragraph.` },
    { s: 'TYLA', t: `[impressed] Perfect. Today we'll add two new skills: limitations of a source, and the command word "critically discuss." The narrator will read every source in full, and they'll be on screen. Pause after each question and try it yourself first.` },
    { s: 'TYLA', t: `Question 2. The key question: "Why did the United States of America become involved in the Angolan Civil War from 1975?" Quick context from the curriculum: when Angola became independent from Portugal in 1975, three liberation movements fought for control — the MPLA, backed by the Soviet Union and Cuba, and the FNLA and UNITA. Source 2A.` },
    { s: 'NARRATOR', t: `Source 2A. The source below is an extract from the book Kissinger in Angola: The Influence of Personality on Foreign Policy Working Paper by M Guta. It highlights how the United States (US) Secretary of State, Henry Kissinger, influenced American foreign policy towards Angola during 1975.` },
    { s: 'NARRATOR', t: `The United States of America (USA) did not want the Popular Movement for the Liberation of Angola (MPLA) to gain control of Angola, and under the direction of the Secretary of State, Henry Kissinger, Central Intelligence Agency (CIA) operations in Angola gained serious ground in 1975. Provisions for United States involvement in Africa were intentionally vague and stated that CIA involvement in Africa was to be a provision of material, support and advice to create a stable climate in newly independent African countries, leaving out the mention of Angola specifically. With this flexibility, the CIA provided over 22 million dollars in covert support to the National Liberation Front of Angola (FNLA) and the National Union for the Total Liberation of Angola (UNITA) by the fall of 1975.` },
    { s: 'NARRATOR', t: `Beyond monetary aid for the FNLA and UNITA, Kissinger's plans for Angola culminated (ended) into the covert CIA Operation known as IAFEATURE. IAFEATURE was in place to secretly launch a paramilitary programme against the MPLA under the CIA, and was kept top secret so that it did not have to be explained to the public in the aftermath of the recent failure in Vietnam. On the flipside of the defeat in Vietnam, Kissinger wanted to redeem American foreign policy from this failure and saw Angola as the place to do it; he wanted to prove that the United States was still the global world power.` },
    { s: 'TYLA', t: `2.1.1: "Which country, according to the source, did not want the MPLA to gain control of Angola?" One times one.` },
    { s: 'MICHAEL', t: `The United States of America.` },
    { s: 'TYLA', t: `One mark. 2.1.2: "Name THREE provisions in the source for the Central Intelligence Agency's involvement in Africa." Three times one.` },
    { s: 'MICHAEL', t: `Over 22 million dollars in covert support... the IAFEATURE operation... and a paramilitary programme.` },
    { s: 'TYLA', t: `[encouragingly] Find the word "provisions" in the source. What does that sentence list?` },
    { s: 'MICHAEL', t: `"... CIA involvement in Africa was to be a provision of material, support and advice ..." Oh — the three provisions are right there. Material, support and advice.` },
    { s: 'TYLA', t: `Three marks. When a question uses a word from the source, like "provisions," find that word first — the answer is usually right next to it. 2.1.3: "Using the information in the source and your own knowledge, explain why you think it was necessary for the CIA to covertly support the FNLA and UNITA in 1975." Two times two.` },
    { s: 'MICHAEL', t: `Covert means secret. So — the US didn't want the public to know it was funding UNITA and the FNLA against the MPLA. And after the embarrassment of Vietnam, the US wanted to reassert itself without facing questions at home.` },
    { s: 'TYLA', t: `[delighted] Four marks — and you used the Vietnam link from Part 1. Also accepted: the USA didn't want to be seen interfering in another country's internal affairs; and it was part of IAFEATURE, a secret CIA operation. 2.1.4: "Explain the limitations of this source to a researcher studying the role of the MPLA in Angola." Two times two.` },
    { s: 'MICHAEL', t: `It's unreliable because it's just one book.` },
    { s: 'TYLA', t: `[patiently] That's a weak reliability answer, and the question asks something different. A limitation is what the source can't tell the researcher — where it falls short for this research topic. What is the researcher studying?` },
    { s: 'MICHAEL', t: `The role of the MPLA. And this source is all about Kissinger and the CIA. So — it only gives the USA's perspective of its involvement; it shows the MPLA only as the enemy to be stopped. And it focuses on the CIA's secret money for the MPLA's opponents, the FNLA and UNITA — not on what the MPLA itself did.` },
    { s: 'TYLA', t: `Four marks. That's the key to limitations: compare what the source is about with what the researcher needs. The memo also accepts that the source is anti-communist and pro-capitalist, that it promotes capitalism by supporting the FNLA and UNITA, and that it shows the imperialist nature of US foreign policy.` },
    { s: 'MICHAEL', t: `[whispers] Limitations — what the source is about, against what the researcher needs.` },
    { s: 'TYLA', t: `Source 2B.` },
    { s: 'NARRATOR', t: `Source 2B. The source below is an extract from a book, The Silent War: South African Recce Operations 1969–1994, written by P Stiff. It explains why the USA became involved in the Angolan Civil War after 1975.` },
    { s: 'NARRATOR', t: `The US had poured uncounted millions of dollars into the bottomless pit of Mobutu's corrupt military dictatorship over the previous ten years. It was a case of buying popularity to ward off the possibility of Soviet influence making inroads into Zaire. Gratitude by Mobutu was never a factor in their diplomatic relations and when world copper prices plunged (fell) in early 1975 ... Mobutu turned on his benefactors. In June 1975 he accused the US of backing a coup to topple him. He expelled the US ambassador ... The US State Department, headed by the Secretary of State, Henry Kissinger, anxious to get back in Mobutu's favour, decided to enhance its support of his Angolan policy by lending weight to the FNLA's cause.` },
    { s: 'NARRATOR', t: `CIA Director, William Colby, told the National Security Council he needed $100 million to ensure that Holden Roberto (FNLA leader) won, but this was too large a sum to keep secret, so only $41,7 million was authorised. The CIA's task seemingly was not to win but to prevent an easy victory for the Soviet-backed forces. The result, it was hoped, would be that both the FNLA and UNITA would gain a major say in any future Angolan government ... The operation was to provide material, support and advice to moderate nationalist movements to enable them to create a stable climate to allow genuine self- determination in newly emerging African states. It did not mention Angola, supposedly because this was only to be mentioned by the Director of the CIA in his verbal briefings.` },
    { s: 'TYLA', t: `2.2.1: "Quote evidence from the source that suggests Mobutu was supported with millions of dollars." One times one.` },
    { s: 'MICHAEL', t: `"The US had poured uncounted millions of dollars into the bottomless pit of Mobutu's corrupt military dictatorship ..."` },
    { s: 'TYLA', t: `One mark. 2.2.2: "What, according to the source, did Mobutu do when the world copper prices plunged in early 1975? Give TWO responses." Two times one.` },
    { s: 'MICHAEL', t: `He "accused the US of backing a coup to topple him." And he "expelled the US ambassador."` },
    { s: 'TYLA', t: `Two marks. The memo also accepts "turned on his benefactors." 2.2.3: "Why, according to the source, was only forty-one comma seven million dollars and not one hundred million dollars authorised by the National Security Council to ensure that Holden Roberto won the Angolan Civil War?" One times one.` },
    { s: 'MICHAEL', t: `Because a hundred million would be noticed by Congress and the public, and the US wanted to—` },
    { s: 'TYLA', t: `[encouragingly] It's worth one mark, and it says "according to the source."` },
    { s: 'MICHAEL', t: `[laughs] Right — short and straight from the source. "... this was too large a sum to keep secret ..."` },
    { s: 'TYLA', t: `One mark. The mark allocation tells you how much to write. 2.2.4: "Comment on what is implied by the statement, 'The CIA's task seemingly was not to win but to prevent an easy victory for the Soviet-backed forces.'" One times two.` },
    { s: 'MICHAEL', t: `The CIA wanted to weaken the MPLA's success by containing Soviet influence in Angola — so that the FNLA and UNITA would be part of a new government.` },
    { s: 'TYLA', t: `Two marks. Also accepted: the CIA opposed an MPLA victory, and it supported the FNLA and UNITA because they aligned with capitalism. 2.2.5: "Define the term self-determination in your own words." One times two.` },
    { s: 'MICHAEL', t: `The right of a country to be independent — to establish its own government and make its own laws.` },
    { s: 'TYLA', t: `Two marks.` },
    { s: 'TYLA', t: `Source 2C is an interview.` },
    { s: 'NARRATOR', t: `Source 2C. The source below was taken from an interview that was included in the book, Conflicting Missions: Washington, Havana, Africa 1959–1976 by P Gleijeses, published in 2002. The interview was between Gleijeses and RW Hultslander who was the last Central Intelligence Agency (CIA) Station Chief in Luanda, Angola in 1988. It explains the secret programme conducted by the CIA in Angola in the mid-70s.` },
    { s: 'NARRATOR', t: `PIERO GLEIJESES: What was your opinion about the CIA covert action programme code, named IAFEATURE?` },
    { s: 'NARRATOR', t: `ROBERT W HULTSLANDER: Simply put, I was opposed to the covert action programme in Angola because I was convinced it would not succeed, and would badly damage our ability to work in the future with moderate elements throughout Africa. We were not prepared to spend the necessary resources to assure victory. Or more fairly put, we should have realised that our adversaries (enemies) — Moscow and Havana — were more determined and much better positioned than we. And, they did not have a hostile Congress controlling the purse strings. Kissinger was determined to challenge the Soviet Union, although no vital US interests were at stake.` },
    { s: 'NARRATOR', t: `Instead of working with the moderate elements in Angola, which I believe we could have found within the MPLA, we supported the radical, tribal, 'anti-Soviet right'. You write that, 'Kissinger feared that an MPLA victory would have destabilising (disrupting) effects throughout southern Africa.' Of course, the opposite proved true; it was our policies which caused the 'destabilisation'.` },
    { s: 'NARRATOR', t: `I did my best to argue the US policy position and defend the covert action programme during my all-night session with [Senator] Clark at Killoran's Luanda residence. My heart was not in it, however, and I finally admitted that I personally thought our support of Roberto and Savimbi would prove disastrous. This position, as you can imagine, caused me problems with my own superiors, and infuriated (angered) Kissinger.` },
    { s: 'TYLA', t: `2.3.1: "Quote any TWO pieces of evidence mentioned in the source that explain why Hultslander was opposed to covert operation programmes in Angola." Two times one.` },
    { s: 'MICHAEL', t: `"... I was convinced it would not succeed ..." and "... would badly damage our ability to work in the future with moderate elements throughout Africa."` },
    { s: 'TYLA', t: `Two marks. Plenty of other quotes work too — "We were not prepared to spend the necessary resources to assure victory," that Moscow and Havana were more determined and better positioned, that they had no hostile Congress, or that supporting Roberto and Savimbi would prove disastrous. 2.3.2: "Explain the term covert action in the context of the CIA programme in Angola." One times two.` },
    { s: 'MICHAEL', t: `A secretly planned operation by the CIA to support the FNLA and UNITA, to stop the MPLA from ruling Angola.` },
    { s: 'TYLA', t: `Two marks. Notice "in the context of" — you didn't just define "covert," you tied it to Angola. 2.3.3: "Comment on what was implied by the statement, 'Kissinger feared that an MPLA victory would have destabilising effects throughout southern Africa', in the context of US involvement in Angola." Two times two.` },
    { s: 'MICHAEL', t: `From Part 1 — the domino theory! The USA feared that if Angola fell to communism, communism would spread through southern Africa. And the USA wanted the whole of southern Africa to remain capitalist.` },
    { s: 'TYLA', t: `Four marks — and that's exactly how topics connect across this paper. 2.3.4: "What, according to the source, did Hultslander do during his all-night session with Senator Clark at Killoran's Luanda residence? Give TWO responses." Two times one.` },
    { s: 'MICHAEL', t: `"I did my best to argue the US policy position ..." and "... defend the covert action programme ..."` },
    { s: 'TYLA', t: `Two marks. The memo also accepts that he finally admitted he thought supporting Roberto and Savimbi would prove disastrous.` },
    { s: 'TYLA', t: `Source 2D is a cartoon. Look at it on screen.` },
    { s: 'NARRATOR', t: `Source 2D. The cartoon below was drawn by Portuguese cartoonist L Silva, published in 1993 in a magazine, Angola & Cartoons Towards the Year 2000. It depicts American Secretary of State, Henry Kissinger, mediating in the Angolan conflict.` },
    { s: 'TYLA', t: `In the cartoon, Kissinger stands in the middle in a suit covered in stars and stripes, saying: "... and my country as a party involved in the mediation of the conflict, promises to do everything to bring it to a definitive end." On his left, the MPLA figure has his hands clasped, pleading. On his right, behind Kissinger's back, the UNITA figure is gleefully reaching into a box full of weapons. 2.4.1: "Comment on why you would NOT agree with Kissinger's statement, '... and my country as a party involved in the mediation of the conflict, promises to do everything to bring it to a definitive end.'" Two times two.` },
    { s: 'MICHAEL', t: `He's promising to bring peace and end the war. So he was trying to be a fair mediator—` },
    { s: 'TYLA', t: `[encouragingly] Read the capital letters in the question.` },
    { s: 'MICHAEL', t: `"Why you would NOT agree." [groans] I was agreeing with him. Okay — look at what's happening behind his back. He's not a neutral mediator. The USA was trying to stop the MPLA from taking over the Angolan government, and Kissinger was secretly supplying UNITA with weapons. So he wasn't bringing the war to an end — he was fuelling it, because he wanted capitalism to win over communism.` },
    { s: 'TYLA', t: `[delighted] Four marks. Cartoons often show a gap between what someone says and what they do. That gap is the point of the cartoon. 2.4.2: "What conclusion can be drawn from the cartoonist's portrayal of the following liberation movements regarding their relations with the USA: (a) the MPLA." One times two.` },
    { s: 'MICHAEL', t: `The MPLA got no support from the USA — it's pleading with Kissinger, desperate for help, but being ignored. The USA didn't want the MPLA to win.` },
    { s: 'TYLA', t: `Two marks. (b): UNITA.` },
    { s: 'MICHAEL', t: `UNITA was favoured and supported by the USA — it's happy to be getting weapons to use against the MPLA.` },
    { s: 'TYLA', t: `Two marks. Question 2.5: "Refer to Sources 2A and 2D. Comment on how the information in Source 2A supports the evidence in Source 2D regarding the involvement of the USA in the Angolan Civil War." Two times two.` },
    { s: 'MICHAEL', t: `[confidently] Link both in every point. Source 2A states that the USA did not want the MPLA to gain control of Angola, and Source 2D shows the MPLA begging Kissinger for support — but in vain. Source 2A refers to the CIA giving covert support to UNITA, and Source 2D shows UNITA with weapons from Kissinger.` },
    { s: 'TYLA', t: `[impressed] Four marks — and you didn't need reminding this time. The memo also accepts: both sources show the covert programme was aimed against the MPLA; and both show the USA's deceptive involvement — secret support in 2A, a pretend mediator in 2D.` },
    { s: 'TYLA', t: `2.6: "Using the information in the relevant sources and your own knowledge, write a paragraph of about eight lines, about eighty words, explaining why the United States of America became involved in the Angolan Civil War from 1975." Eight marks.` },
    { s: 'MICHAEL', t: `"When Portugal left Angola in 1975, a civil war broke out between three liberation movements. The MPLA was supported by the Soviet Union and Cuba, while the FNLA and UNITA fought against it. The war caused great destruction and many people died. Henry Kissinger was the US Secretary of State. The CIA became involved in Angola through an operation called IAFEATURE."` },
    { s: 'TYLA', t: `[patiently] Good history. But which question did that paragraph answer?` },
    { s: 'MICHAEL', t: `[sighs] Why the civil war started — not why the USA got involved. I drifted onto the wrong question.` },
    { s: 'TYLA', t: `Exactly. Your topic is the reasons for US involvement. Start with "The USA became involved because..." and every sentence should give a reason.` },
    { s: 'MICHAEL', t: `"The USA became involved in the Angolan Civil War to stop the Soviet-backed MPLA from gaining control of Angola. Fearing the domino effect, Kissinger believed an MPLA victory would destabilise southern Africa and spread communism. The CIA therefore covertly funded the FNLA and UNITA through Operation IAFEATURE, hoping they would gain a major say in a future government. Kissinger also wanted to restore American prestige after the defeat in Vietnam and prove that the USA was still a global power, while pretending to be a neutral mediator."` },
    { s: 'TYLA', t: `Level 3 — six to eight marks. Every sentence is a reason, you used Sources 2A, 2B, 2C and 2D, and you brought in own knowledge — the domino theory. The memo's other own-knowledge points: supporting South Africa's interest in keeping capitalism in the region, and access to Angola's natural resources.` },
  ],
},

{
  num: 4,
  file: 'History P1 Nov 2025 - Independent Africa 2 - Essay Question 5 - The Congo',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 1, November 2025. Independent Africa, part two: Essay Question 5, the Congo.` },
    { s: 'TYLA', t: `Section B. Question 5: Independent Africa — Case Study: The Congo. "The political, economic, social and cultural policies introduced by Mobutu Sese Seko after gaining independence in the 1960s were a dismal failure. Critically discuss the statement above by using relevant historical evidence to support your line of argument." Fifty marks.` },
    { s: 'MICHAEL', t: `Easy stance. Mobutu was a corrupt dictator — we literally just heard about his "bottomless pit." I'll argue the policies were a complete, dismal failure.` },
    { s: 'TYLA', t: `[seriously] Careful. What does "critically discuss" ask you to do?` },
    { s: 'MICHAEL', t: `Discuss... critically. Criticise it?` },
    { s: 'TYLA', t: `Not quite. It means examine the statement and weigh the evidence on both sides before you reach a judgement. And look at the memo's synopsis for this essay: candidates should take a critical stance by indicating that the policies had some successes as well as some failures.` },
    { s: 'MICHAEL', t: `[surprised] So "dismal failure" is a trap? If I only write about failures, I'm agreeing with an exaggeration.` },
    { s: 'TYLA', t: `Exactly. The word "dismal" is extreme. Your job is to test it. You can still conclude that the policies were mostly failures — but you have to show you've considered what worked. There's one more thing. The question names four areas: political, economic, social and cultural. Leave one out, and your content level drops.` },
    { s: 'MICHAEL', t: `Okay. Introduction: "The statement that Mobutu Sese Seko's policies were a dismal failure is largely, but not entirely, valid. His political and economic policies, such as the one-party state and Zaireanisation, led to dictatorship, corruption and economic collapse. However, he brought some political stability after years of conflict, school enrolment rose, and his cultural policy of Authenticité restored African pride. Overall, his policies failed more than they succeeded, but they cannot be described as a complete failure."` },
    { s: 'TYLA', t: `That's a critical stance. You've judged the statement — "largely, but not entirely, valid" — and you've previewed both sides across the policy areas.` },
    { s: 'TYLA', t: `Plan the body for me — by policy area, and tag each point as a success or a failure.` },
    { s: 'MICHAEL', t: `First, brief background. Belgium's policy of paternalism left the Congo with no experience of running a government. After the 1959 Leopoldville riots, Belgium withdrew quickly. Political parties formed along regional and ethnic lines — 120 parties took part in the 1960 elections, and none won an outright majority, although Lumumba's MNC won the most seats.` },
    { s: 'TYLA', t: `Good — and keep it to one short paragraph. The question is about Mobutu's policies, so background only explains what he inherited. Political policies?` },
    { s: 'MICHAEL', t: `Political. There was instability — Kasavubu as President wanted a federal state, Lumumba as Prime Minister wanted a strong central government, and Tshombe tried to make Katanga secede. Mobutu seized power in a coup in 1965. Success: he brought some political stability, ended the Katanga rebellion in 1967 and gave the country a new constitution. Failure: it was stability through authoritarianism. He created a one-party state under the MPR, the Popular Movement for the Revolution, built a personality cult called Mobutuism, and ruled as a military dictator, controlling all appointments and government revenue.` },
    { s: 'TYLA', t: `That's balanced already. Economic?` },
    { s: 'MICHAEL', t: `Economic. He inherited a capitalist, single-product economy owned by foreigners. He nationalised the copper mining industry and used its profits to fund a ten-year industrialisation plan — some success. But then Zaireanisation replaced skilled foreigners with unskilled locals, and foreign companies went to his allies and family. That led to corruption, theft, mismanagement, nepotism and kleptocracy — failure. Infrastructure was poor. He was forced into retrocession, inviting foreign owners back, but very few returned. The economy collapsed with high inflation, and the Congo became dependent on foreign aid, like the World Bank.` },
    { s: 'TYLA', t: `And kleptocracy means?` },
    { s: 'MICHAEL', t: `Rule by thieves — officials abusing their positions for financial gain.` },
    { s: 'TYLA', t: `[delighted] Good — define a term like that in the essay too. Social?` },
    { s: 'MICHAEL', t: `Social. At independence in 1960 there were only 14 university graduates out of 14 million people. French stayed the language of instruction, favouring the urban elite — failure. But primary school enrolment rose from 1,6 million in 1960 to 4,6 million in 1974 — a success. Later, when Mobutu withdrew state funding, parents had to pay, and primary education declined. Teachers and hospital staff went unpaid for months. And he banned Western suits, replacing them with the abacost — from the French for "down with the suit."` },
    { s: 'TYLA', t: `And cultural?` },
    { s: 'MICHAEL', t: `Cultural. Authenticité — Africanisation — to remove colonial influence. Christian names were replaced with African names. The Congo became Zaire in 1971. Leopoldville became Kinshasa, Elisabethville became Lubumbashi, and Stanleyville became Kisangani. Mobutu changed his own name from Joseph-Désiré Mobutu to Mobutu Sese Seko. African music, art, dance and hairstyles were encouraged — the memo treats these as successes.` },
    { s: 'TYLA', t: `[impressed] That covers all four areas, with successes and failures in each. Now — when you write it, the chief markers warn about one thing above all. What is it?` },
    { s: 'MICHAEL', t: `Being descriptive. A list of policies isn't an argument. Every paragraph has to say whether that policy supports or challenges "dismal failure."` },
    { s: 'TYLA', t: `Write me the economic paragraph — the one most likely to support your argument — with PEEL.` },
    { s: 'MICHAEL', t: `"Point: Mobutu's economic policies were largely a failure, although they began with some success. Explain: His attempts to take control of the economy from foreigners ended up enriching a small elite instead of developing the country. Example: He nationalised the copper mining industry and used its profits to fund a ten-year industrialisation plan. However, his policy of Zaireanisation handed foreign-owned businesses to unskilled Zairians and to his allies and family, which led to nepotism, corruption and kleptocracy. When retrocession failed to bring back foreign owners, the economy collapsed under high inflation, and the Congo became dependent on foreign aid. Link: This shows that, while the copper nationalisation brought some benefits, the economic policies overall support the view that Mobutu's rule was a failure."` },
    { s: 'TYLA', t: `[delighted] That's an argued paragraph. The point judges the policy, the evidence includes the success and the failure, and the link ties it back to the statement. Now the conclusion.` },
    { s: 'MICHAEL', t: `"In conclusion, Mobutu's political and economic policies brought dictatorship, corruption and economic collapse, and his social policies failed to sustain the early growth in education. However, he did bring some stability after the chaos of independence, school enrolment rose, and Authenticité restored African pride. Therefore, the statement that his policies were a dismal failure is largely valid, but it overlooks the limited successes of his rule."` },
    { s: 'TYLA', t: `[impressed] That's a conclusion that sustains the line of argument — the same judgement as the introduction, now backed by evidence. Written in full like that, across all four areas, this essay would sit at Level 6 or Level 7 for both content and presentation — forty-three to fifty marks.` },
    { s: 'MICHAEL', t: `And my first idea — every paragraph about failure, "dismal" all the way?` },
    { s: 'TYLA', t: `You'd have plenty of facts, but you'd be ignoring the successes the memo expects, so the question isn't fully answered, and the argument isn't balanced. That pulls both levels down — possibly into the thirties, or lower if it becomes a list of complaints about Mobutu.` },
    { s: 'MICHAEL', t: `[whispers] Test the statement — don't just agree with it.` },
    { s: 'TYLA', t: `[warmly] Part 2 done. Michael — how did that compare to the Cold War?` },
    { s: 'MICHAEL', t: `Better. I caught the comparison trap before you said anything. But the new skills — limitations and "critically discuss" — caught me out.` },
    { s: 'TYLA', t: `They catch everyone the first time. Same tradition — your top traps, in one go.` },
    { s: 'MICHAEL', t: `When a question uses a word from the source, like "provisions," find that word — the answer was "material, support and advice." Limitations means what the source can't tell the researcher about their topic — a Kissinger source is limited for research on the MPLA, because it gives only the US perspective. A one- mark question gets a short extract, not an explanation. "In the context of" means tie the definition to the topic. Read the capitals — "why would you NOT agree." Cartoons show the gap between what someone says and what they do — Kissinger promising peace while arming UNITA. And in the paragraph, answer the why question — not the background story of the civil war.` },
    { s: 'TYLA', t: `And the essay?` },
    { s: 'MICHAEL', t: `"Critically discuss" means test the statement, and weigh both sides. "Dismal failure" is an extreme claim — Mobutu had some successes: stability, school enrolment, Authenticité. Cover all four policy areas the question names. Keep the background short. And every paragraph has to judge the policy — not just describe it.` },
    { s: 'TYLA', t: `[delighted] Brilliant. And everyone listening — notice how the topics connected today. The domino theory from the Cold War explained Kissinger's fear in Angola, and Mobutu appeared in the Angola sources before we ever reached the Congo essay. History rewards you for making those links. Next time, Part 3 — civil society protests: Martin Luther King Jr's non-violence, and the Black Power Movement. Until then... [whispers] never agree with a statement before you've tested it. [warmly] We'll catch you in the next episode.` },
  ],
},

{
  num: 5,
  file: 'History P1 Nov 2025 - Civil Society Protests 1 - Source Question 3 - Non-Violence',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 1, November 2025. Civil Society Protests, part one: Source-based Question 3, Martin Luther King Junior and non-violence.` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to ECHOES OF THE PAST. This is the last part of History Paper 1, November 2025. We've done the Cold War and Independent Africa. Today is Part 3: Civil Society Protests from the 1950s to the 1970s — the source question on Martin Luther King Jr's non-violent approach, and the essay on the Black Power Movement.` },
    { s: 'MICHAEL', t: `Two sides of the same struggle. King's non-violence, and then a movement that rejected it.` },
    { s: 'TYLA', t: `Exactly — and that tension runs through both questions. One more skill to add today: usefulness of a source, which is different from reliability. As always, the narrator reads every source in full, and it's on screen. Pause and try each question yourself first.` },
    { s: 'TYLA', t: `Question 3. The key question: "How did the non-violent approach adopted by Martin Luther King Jr characterise the civil society protests in the United States of America during the 1960s?" Source 3A.` },
    { s: 'NARRATOR', t: `Source 3A. The source below is from an article titled 'Martin Luther King and the Philosophy of Non-violence' written by C Risen and published in a journal, Bill of Rights in Action, in 2017. It explains how Martin Luther King Jr was influenced by passive resistance ideas introduced by Mahatma Gandhi.` },
    { s: 'NARRATOR', t: `King's earliest exposure to the ideas that would coalesce (blend) in his non-violent philosophy occurred when he was an undergraduate at Morehouse College. It was not until he began to study the life and works of Mahatma Gandhi that he began to see the possibility of applying non-violence to the specific problems of African Americans, especially in the South. As he later told it, in Philadelphia he listened to a sermon by the president of Howard University, Mordecai Johnson, who spoke at length about the teachings and actions of Gandhi, and in particular his use of non-violent mass protest to challenge British control over India.` },
    { s: 'NARRATOR', t: `For King, the heart of Gandhi's non-violence was love, in the spiritual, transcendent (divine) form of the word. In the face of coercive (intimidating), racist British rule, Gandhi so loved his oppressors that he refused to take up arms against them.` },
    { s: 'NARRATOR', t: `What did King mean by non-violence? It was not merely the refusal to hit back, an insistence on turning the other cheek. It was, in its own way, aggressive. It meant putting oneself in the face of violence, of actively confronting it and, responding with love to the jabs and punches.` },
    { s: 'NARRATOR', t: `It also meant organising thousands across the South in specific mass actions that would force face-to-face encounters with white, racist power. Doing so, King thought, would demonstrate both the impotence (weakness) of white violence and show the country that the black community was not afraid to insist on its rights.` },
    { s: 'TYLA', t: `3.1.1: "Who, according to the source, indirectly influenced King Jr to apply the non-violent approach to the specific problems of African Americans?" One times one.` },
    { s: 'MICHAEL', t: `Mordecai Johnson — King heard his sermon.` },
    { s: 'TYLA', t: `[encouragingly] Johnson spoke about someone. Whose ideas did King actually apply?` },
    { s: 'MICHAEL', t: `[hesitantly] Gandhi's. Gandhi never met King, so his influence was indirect — it came through his life, his works, and Johnson's sermon. The answer is Mahatma Gandhi.` },
    { s: 'TYLA', t: `One mark. The word "indirectly" was the clue. 3.1.2: "What, according to the source, did King Jr learn from a sermon by the president of Howard University, Mordecai Johnson, regarding the non-violent approach?" Two times one.` },
    { s: 'MICHAEL', t: `"... the teachings and actions of Gandhi ..." and "... his use of non-violent mass protest ..."` },
    { s: 'TYLA', t: `Two marks — and there's Mordecai Johnson. 3.1.3: "Define the term non-violent mass protests in your own words." One times two.` },
    { s: 'MICHAEL', t: `A gathering of a large group of people who defy unfair laws through peaceful methods of civil disobedience.` },
    { s: 'TYLA', t: `Two marks — "mass," "unfair laws" and "peaceful" all in one sentence. 3.1.4: "Explain what King Jr implied by the statement, 'It (non-violence) meant putting oneself in the face of violence ...', in the context of the civil society protests." Two times two.` },
    { s: 'MICHAEL', t: `Protesters had to face violence head-on without fighting back. And they had to be brave, to show that the black community was not afraid to insist on its rights.` },
    { s: 'TYLA', t: `[impressed] Four marks. The memo also accepts that by not retaliating against the police or white mobs, protesters were challenging white power. Notice the source says non-violence was "in its own way, aggressive." It wasn't passive — it was a deliberate confrontation. 3.1.5: "What, according to the source, did King Jr want to achieve by organising thousands across the South in specific mass actions?" One times one.` },
    { s: 'MICHAEL', t: `"... force face-to-face encounters with white, racist power."` },
    { s: 'TYLA', t: `One mark. The memo also accepts "demonstrate both the impotence (weakness) of white violence" or "show the country that the black community was not afraid to insist on its rights."` },
    { s: 'TYLA', t: `Source 3B.` },
    { s: 'NARRATOR', t: `Source 3B. The source below is extracted from Martin Luther King Jr's direct words taken from a book titled The Political Philosophy of Martin Luther King Jr by H Walton, published in 1971. It gives an account of King's commitment to the philosophy of non-violence.` },
    { s: 'NARRATOR', t: `I think we have come to the point where there is no longer a choice now between non- violence and riots. It must be militant, massive non-violence, or riots. The discontent is so deep, the anger so ingrained (deep-rooted), the despair, the restlessness so wide, that something has to be brought into being to serve as a channel through which these deep emotional feelings, these deep angry feelings, can be funnelled (directed). There has to be an outlet, and I see this campaign as a way to transmute (change) the inchoate (underdeveloped) rage of the ghetto into a constructive and creative channel. It becomes an outlet for anger.` },
    { s: 'NARRATOR', t: `Even if I didn't deal with the moral dimensions and question of violence versus non-violence, from a practical point of view, I don't see riots working. But I am convinced that if rioting continues, it will strengthen the right wing of the country and we'll end up with a kind of right-wing takeover in the cities and a Fascist development, which will be terribly injurious (harmful) to the whole nation. I don't think America can stand another summer of Detroit-like riots without a development that could destroy the soul of the nation, even the democratic possibilities of the nation.` },
    { s: 'NARRATOR', t: `I am committed to non-violence absolutely. I'm just not going to kill anybody, whether it's in Vietnam or here. I'm not going to burn down any building. If non-violent protest fails this summer, I will continue to preach it and teach it, and we at the Southern Christian Leadership Conference will still do this. I plan to stand by non-violence because I have found it to be a philosophy of life that regulates not only my dealings in the struggle for racial justice but also my dealings with people, with my own self. I will be faithful to non-violence.` },
    { s: 'TYLA', t: `3.2.1: "According to the source, why did King Jr believe that the point of making a choice among militant, massive non-violence or riots had arrived? Give TWO responses." Two times one.` },
    { s: 'MICHAEL', t: `"The discontent is so deep ..." and "... the anger so ingrained (deep-rooted) ..."` },
    { s: 'TYLA', t: `Two marks. Also accepted: "the despair, the restlessness so wide," and the need for "a channel through which these deep emotional feelings ... can be funnelled." 3.2.2: "What did King Jr imply by the words, 'But I am convinced that if rioting continues, it will strengthen the right wing of the country ...'?" Two times two.` },
    { s: 'MICHAEL', t: `That riots are bad and would make things worse for African Americans.` },
    { s: 'TYLA', t: `[patiently] True, but too vague for four marks. How would riots make things worse? What would the right wing do?` },
    { s: 'MICHAEL', t: `Okay — riots would give conservative state troops a justification to be more aggressive. And they'd encourage far-right groups like the Ku Klux Klan to become more violent — so right-wing leaders would get a bigger following.` },
    { s: 'TYLA', t: `[delighted] Four marks. "Implied" questions reward specific consequences, not general opinions. 3.2.3: "Give any TWO reasons in the source suggesting that King Jr was totally committed to the non-violent approach." Two times one.` },
    { s: 'MICHAEL', t: `"I'm just not going to kill anybody ..." and "I'm not going to burn down any building."` },
    { s: 'TYLA', t: `Two marks. Plenty more in the source: "I will continue to preach it and teach it," the SCLC "will still do this," it's "a philosophy of life," and "I will be faithful to non-violence." 3.2.4: "Explain the term racial justice in the context of the USA in the 1960s." One times two.` },
    { s: 'MICHAEL', t: `The demand for justice and respect for all races in the USA, because of the racial discrimination that existed in the 1960s.` },
    { s: 'TYLA', t: `Two marks. 3.2.5: "Comment on the usefulness of this source for a historian researching non-violent protest in the USA in the 1960s." Two times two.` },
    { s: 'MICHAEL', t: `It's reliable because it's King's own words, so it's not biased.` },
    { s: 'TYLA', t: `[encouragingly] That's reliability language. Usefulness asks: what can this source give the historian for their research? Use the introduction and the content.` },
    { s: 'MICHAEL', t: `Got it. It's useful because it's based on King Jr's actual words — first-hand information on his commitment to non-violence. And it gives insight into his personal beliefs and strategies for non-violent protest — exactly what the historian is researching.` },
    { s: 'TYLA', t: `Four marks. The memo also accepts that the book was published in 1971, a few years after King's assassination in 1968, and that it comes from a book written to unpack his political philosophy of non- violence.` },
    { s: 'MICHAEL', t: `[whispers] Reliability — can I trust it? Usefulness — what can it give me? Limitations — what can't it give me?` },
    { s: 'TYLA', t: `That's the whole Level 3 toolkit in one line.` },
    { s: 'TYLA', t: `Source 3C is a photograph. Look at it on screen.` },
    { s: 'NARRATOR', t: `Source 3C. The source below is a photograph taken from a book titled Parting the Waters: America in the King Years 1954–63 by T Branch. It shows three students participating in a sit-in at a lunch counter, in Jackson, Mississippi, on 28 May 1963. A member of the white group is pouring a liquid substance over a seated student.` },
    { s: 'TYLA', t: `In the photograph, the students sit calmly at the counter, covered in what's been poured and thrown over them, while a crowd of young white men stands close behind, one of them pouring liquid over a student's head. 3.3.1: "Explain what the following groups wanted to achieve in terms of lunch counter sit-ins in the USA in the early 1960s: (a) students sitting at the lunch counter." One times two.` },
    { s: 'MICHAEL', t: `The desegregation of lunch counters — the right to be served at the same counter as white customers. And to demand equal rights.` },
    { s: 'TYLA', t: `Two marks. The memo also accepts: to expose racism and discrimination. (b): the white group in the background.` },
    { s: 'MICHAEL', t: `They wanted to humiliate the students by pouring stuff over them.` },
    { s: 'TYLA', t: `[encouragingly] That's what they're doing. The question asks what they wanted to achieve.` },
    { s: 'MICHAEL', t: `[slowly] Their goal was to keep the lunch counters segregated — to terrorise and intimidate African Americans so that discrimination would continue.` },
    { s: 'TYLA', t: `Two marks. Same skill as the cartoon in Part 1 — look past the action to the purpose. 3.3.2: "Why do you think students participating in the sit-ins did not hit back against the intimidation by the white group?" One times two.` },
    { s: 'MICHAEL', t: `They were following King's non-violent approach, and they'd been trained not to retaliate — hitting back would undermine their moral cause.` },
    { s: 'TYLA', t: `Two marks. Question 3.4: "Refer to Sources 3A and 3C. Comment on how the information in Source 3A supports the evidence in Source 3C regarding King Jr's non-violent approach to the protest actions in the USA in the 1960s." Two times two.` },
    { s: 'MICHAEL', t: `Source 3A refers to protesters putting themselves in the face of violence, and Source 3C shows the sit-in students doing exactly that, sitting calmly while being attacked. Source 3A says African Americans insisted on their rights, and Source 3C shows students demanding desegregation at a lunch counter in a non- violent way.` },
    { s: 'TYLA', t: `Four marks. Also accepted: 3A shows King seeing non-violence as the way to fight segregation, and 3C shows it applied at a lunch counter in Jackson; and both sources show non-violence as a strategy against discrimination.` },
    { s: 'TYLA', t: `Source 3D is an interview from 1963. Before the narrator reads it — the source uses the word "Negroes," which was common in the USA at the time. The addendum includes a footnote explaining that it's a derogatory term that was used in the past to refer to African Americans. The narrator reads the source exactly as it appears in the exam, and in your own answers, use "African Americans."` },
    { s: 'NARRATOR', t: `Source 3D. The extract below is part of an interview that KB Clark conducted with Martin Luther King Jr prior to the 28 August 1963 March on Washington. Clark was a child psychologist who provided psychological data to support the Civil Rights Movement. It focuses on the negative criticism of the non-violent approach and how King Jr responded.` },
    { s: 'NARRATOR', t: `CLARK: He (Malcolm X) goes beyond that in some of the things I've heard him say — to say that this is deliberately your philosophy of love of the oppressor which he identifies completely with the non-violent movement. He says this philosophy and this movement are actually encouraged by whites because it makes them comfortable. It makes them believe that Negroes are meek (submissive), supine (passive) creatures.` },
    { s: 'NARRATOR', t: `KING: Well, I don't think that's true. If anyone has ever lived with a non-violent movement in the South, from Montgomery on through the Freedom Rides and through the sit-in movement and the recent Birmingham movement and seen the reactions of many of the extremists and reactionaries in the white community, he wouldn't say that this movement makes — this philosophy — makes them comfortable. I think it arouses a sense of shame within them often — in many instances. I think it does something to touch the conscience and establish a sense of guilt.` },
    { s: 'NARRATOR', t: `CLARK: James Baldwin (American Civil Rights activist) raises still another point of the whole non-violent position, an approach. He raises the question of whether it will be possible to contain the Negro people within this framework of non-violence if we continue to have more of the kinds of demonstrations that we had in Birmingham, wherein the police brought dogs to attack human beings. What is your reaction to Mr Baldwin's anxiety?` },
    { s: 'NARRATOR', t: `KING: ... we can be sure that the vast majority of Negroes who engage in the demonstrations and who understand the non-violent philosophy will be able to face dogs and all of the other brutal methods that are used without retaliating with violence ...` },
    { s: 'NARRATOR', t: `Negroes: a derogatory name used in the USA in the past to refer to African (black) Americans.` },
    { s: 'TYLA', t: `3.5.1: "Quote TWO criticisms from the source that were levelled against King Jr's non-violent approach by Malcolm X." Two times one.` },
    { s: 'MICHAEL', t: `"I think it arouses a sense of shame within them ..." and "... touch the conscience and establish a sense of guilt."` },
    { s: 'TYLA', t: `[encouragingly] Who said those words?` },
    { s: 'MICHAEL', t: `[groans] King — that's his reply. Malcolm X's criticisms are the ones Clark reports before King answers. "... this is deliberately your philosophy of love of the oppressor ..." and "... this philosophy and this movement are actually encouraged by whites because it makes them comfortable."` },
    { s: 'TYLA', t: `Two marks. In an interview, check who is speaking before you quote. The memo also accepts the third criticism about how whites see African Americans — and when you quote it, you quote the source exactly as printed. 3.5.2: "Give any TWO examples of protests in the source that King Jr believed touched the conscience and established a sense of shame amongst the white community." Two times one.` },
    { s: 'MICHAEL', t: `Montgomery and the Freedom Rides.` },
    { s: 'TYLA', t: `Two marks. Also accepted: the sit-in movement and the Birmingham movement. 3.5.3: "Explain the implication of the following concern raised by James Baldwin: '... whether it will be possible to contain the Negro people within this framework of non-violence ...'" Two times two.` },
    { s: 'MICHAEL', t: `Baldwin was worried that African Americans couldn't stay non-violent forever because of police brutality — like the dogs in Birmingham. And the violence from state troopers might force protesters to hit back.` },
    { s: 'TYLA', t: `[delighted] Four marks — and you used "African Americans" in your answer. The memo also accepts that non-violence wasn't sustainable given the level of police brutality. And notice how this source sets up the essay — Malcolm X's criticism is exactly where Black Power begins.` },
    { s: 'TYLA', t: `3.6: "Using the information in the relevant sources and your own knowledge, write a paragraph of about eight lines, about eighty words, explaining how the non-violent approach adopted by Martin Luther King Jr characterised the civil society protests in the USA during the 1960s." Eight marks. This time I'll warn you — the chief markers' biggest complaint is learners copying long chunks from the sources.` },
    { s: 'MICHAEL', t: `[laughs] Then I'll do that first, so everyone hears what it sounds like. "King's non-violence 'was not merely the refusal to hit back, an insistence on turning the other cheek. It was, in its own way, aggressive. It meant putting oneself in the face of violence.' King said, 'I am committed to non-violence absolutely. I'm just not going to kill anybody.'"` },
    { s: 'TYLA', t: `[patiently] All accurate. But almost every word belongs to someone else. Where's your explanation of how non-violence characterised the protests?` },
    { s: 'MICHAEL', t: `Okay — my own words, using the sources as evidence. "King Jr's non-violent approach, inspired by Gandhi, shaped the civil rights protests of the 1960s. Protesters were trained to confront racist power directly while refusing to retaliate, as in the Jackson lunch counter sit-in, where students sat calmly while being attacked. Through boycotts, sit-ins, Freedom Rides and marches, they exposed the violence of segregation and appealed to the nation's conscience. King believed riots would only strengthen the right wing, so he channelled African American anger into disciplined, peaceful mass action that aimed at integration."` },
    { s: 'TYLA', t: `[impressed] Level 3 — six to eight marks. Gandhi from 3A, the sit-in from 3C, the protests King names in 3D, the right wing from 3B — all in your words. And "aimed at integration" is the own knowledge the memo mentions. The memo's other own-knowledge point: King wanted to keep the image of the movement free of any blemish.` },
  ],
},

{
  num: 6,
  file: 'History P1 Nov 2025 - Civil Society Protests 2 - Essay Question 6 - Black Power',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 1, November 2025. Civil Society Protests, part two: Essay Question 6, the Black Power Movement.` },
    { s: 'TYLA', t: `Section B. Question 6: Civil Society Protests — the Black Power Movement. "Explain to what extent the Black Power Movement was successful in organising African Americans to challenge racial discrimination and segregation in the USA during the 1960s. Substantiate your answer with relevant historical evidence." Fifty marks.` },
    { s: 'MICHAEL', t: `"To what extent." So I can't just say "it was successful."` },
    { s: 'TYLA', t: `Right — the memo says candidates must take a stance on whether it was successful to a greater or lesser extent. "To what extent" asks how much. And watch the exact focus: not just "was Black Power successful," but was it successful in organising African Americans to challenge discrimination and segregation.` },
    { s: 'MICHAEL', t: `Okay. And one trap I've heard about — Black Power is not Black Consciousness, right?` },
    { s: 'TYLA', t: `Good — the chief markers flag that mix-up. Black Power is the African American movement in the USA in the 1960s — Malcolm X, Stokely Carmichael, the Black Panthers. Black Consciousness is Steve Biko's movement in South Africa in the 1970s, which you'll meet in Paper 2. They influenced each other, but don't swap them. Your introduction?` },
    { s: 'MICHAEL', t: `"The Black Power Movement started because African Americans were economically and politically crippled by the Jim Crow laws. They lived in ghettos and suffered police brutality. They were impatient with the slow pace of change under the Civil Rights Movement..."` },
    { s: 'TYLA', t: `[encouragingly] Those are the reasons it emerged. They're in the memo, so they're relevant — but where's your stance?` },
    { s: 'MICHAEL', t: `[sighs] Background first again. Okay. "The Black Power Movement was successful to a great extent in organising African Americans to challenge racial discrimination and segregation in the 1960s. Through Malcolm X's call for self-defence, Stokely Carmichael's message of black pride, and the Black Panther Party's community programmes and street patrols, it mobilised African Americans to stand up against police brutality and white authority. Although it faced serious limitations, it gave African Americans pride, organisation and a voice that forced the government to respond."` },
    { s: 'TYLA', t: `Clear stance — "to a great extent" — previewing the evidence, and signalling that you'll deal with the limitations. That's the "well-balanced" line of argument the top level asks for.` },
    { s: 'TYLA', t: `Plan the body. And for each paragraph, tell me how it shows Black Power organising people to challenge discrimination.` },
    { s: 'MICHAEL', t: `Paragraph one — why it emerged, kept short. Jim Crow laws left African Americans economically and politically crippled. They lived in ghettos with poor housing and under-resourced facilities, faced police brutality, lacked a sense of pride, and were impatient with the slow pace of change under King's Civil Rights Movement. That led to the idea of self-defence.` },
    { s: 'TYLA', t: `Good — one paragraph, and it sets up the argument. Next.` },
    { s: 'MICHAEL', t: `Paragraph two — Malcolm X. He promoted armed self-defence against white oppression, and argued that bloodshed was necessary for revolution — black nationalism. But he also advocated self-respect, self-discipline and black pride, and encouraged African Americans to stand up to white authorities in pursuit of freedom, justice and equality "by whatever means possible." That's challenging discrimination — to a great extent.` },
    { s: 'TYLA', t: `Keep going.` },
    { s: 'MICHAEL', t: `Paragraph three — Stokely Carmichael. He believed non-violence had failed because violence against African Americans continued. He promoted assertiveness, self-reliance and black pride, the Afro hairstyle and African clothing, and the slogan "Black is beautiful," along with control of politics in their own communities.` },
    { s: 'TYLA', t: `Good. Anything that links back to the sources?` },
    { s: 'MICHAEL', t: `Yes — this connects to Source 3D — Malcolm X's criticism of King's "love of the oppressor."` },
    { s: 'TYLA', t: `[impressed] That's exactly the kind of link that lifts an essay. Next?` },
    { s: 'MICHAEL', t: `Paragraph four — the Black Panther Party, formed in 1966 by Bobby Seale and Huey Newton for self-defence against police brutality. Members patrolled the streets to monitor the police. They adopted a Ten-Point Plan for social, political and economic upliftment — feeding schemes, childcare and literacy projects in black communities, and demanding that black history be taught in black schools. That's organising in the most direct sense.` },
    { s: 'TYLA', t: `That paragraph is the heart of your essay — because the question says "organising." Next?` },
    { s: 'MICHAEL', t: `Paragraph five — other activists like Angela Davis, and pride in African heritage spreading — African Americans wearing Afro hairstyles.` },
    { s: 'TYLA', t: `And did the government respond?` },
    { s: 'MICHAEL', t: `Paragraph six — the government's response. Riots broke out between 1965 and 1969, focusing attention on discrimination against African Americans in the Northern states. President Johnson appointed a commission of enquiry into the violence and started a programme of reforms to abolish poverty and discrimination.` },
    { s: 'TYLA', t: `And your limitations paragraph — for the balance?` },
    { s: 'MICHAEL', t: `The movement's call for armed self-defence and the riots frightened many white Americans and divided the struggle — King himself warned in Source 3B that riots would strengthen the right wing. Malcolm X was assassinated in 1965, and the Black Panthers were targeted by the police and the government. So it challenged discrimination powerfully, but it couldn't end it by itself.` },
    { s: 'TYLA', t: `[delighted] That's a balanced plan — six paragraphs that support "great extent," and one that weighs the limits — without changing your stance.` },
    { s: 'TYLA', t: `Write the Black Panther paragraph in full, with PEEL.` },
    { s: 'MICHAEL', t: `"Point: The Black Panther Party was the clearest example of Black Power successfully organising African Americans to challenge discrimination. Explain: Instead of waiting for the government to act, the Panthers organised black communities to protect and uplift themselves. Example: Formed in 1966 by Bobby Seale and Huey Newton, the party patrolled the streets to monitor police activity and defend residents against police brutality. Through its Ten-Point Plan, it ran feeding schemes, childcare and literacy projects, and demanded that black history be taught in black schools. Link: By organising communities to meet their own needs and confront police abuse, the Black Panthers show that Black Power was successful to a great extent in mobilising African Americans against discrimination."` },
    { s: 'TYLA', t: `[impressed] That's a top-level paragraph. Point argues, evidence proves, link returns to "great extent." And you used the question's own word — organising. Conclusion?` },
    { s: 'MICHAEL', t: `"In conclusion, through Malcolm X's message of self-defence and black pride, Carmichael's call for self-reliance, and the community programmes and patrols of the Black Panther Party, the Black Power Movement organised African Americans to challenge discrimination and segregation in new and assertive ways. Although its militancy divided opinion and it faced strong opposition, it restored black pride and forced the government to respond. It was therefore successful to a great extent."` },
    { s: 'TYLA', t: `[delighted] Ties up the argument, acknowledges the limits, restates the degree. With all the paragraphs written like the Panther one, that's Level 6 to 7 — forty-three to fifty.` },
    { s: 'MICHAEL', t: `And if I'd stayed on the reasons for its emergence for half the essay?` },
    { s: 'TYLA', t: `Then the question — how successful was it at organising — would only be partly answered, and it'd read as descriptive. That could drop you into the twenties or low thirties. The reasons belong in a short opening paragraph, not the whole essay.` },
    { s: 'TYLA', t: `[warmly] Michael — that's all of History Paper 1. Three parts, three source questions, three essays. How do you feel?` },
    { s: 'MICHAEL', t: `Honestly? Like I finally understand what History is asking for. It's not about memorising the past — it's about arguing about it, with evidence.` },
    { s: 'TYLA', t: `That's the whole subject in one sentence. Same tradition — top traps from today, in one go.` },
    { s: 'MICHAEL', t: `"Indirectly" influenced means Gandhi, not Mordecai Johnson. "Implied" questions need specific consequences — troops getting more aggressive, the Ku Klux Klan growing — not "riots are bad." Usefulness asks what a source can give the historian; reliability asks if you can trust it; limitations ask what it can't give you. "What did they want to achieve" means their purpose, not their action. In an interview, check who's speaking before you quote — Malcolm X's criticism, not King's reply. Use "African Americans" in your own answers. And in the paragraph — don't copy chunks of the sources; use them as evidence in your own words.` },
    { s: 'TYLA', t: `And the essay?` },
    { s: 'MICHAEL', t: `"To what extent" means state how much in the first sentence. Answer the exact focus — organising African Americans to challenge discrimination. Keep the reasons for its emergence short. Black Power is the USA; Black Consciousness is South Africa. And a balanced essay deals with the limitations without changing the stance.` },
    { s: 'TYLA', t: `[amazed] ...Three episodes ago, you blamed Stalin for Churchill's shadow.` },
    { s: 'MICHAEL', t: `[laughs] And today I caught myself quoting the wrong speaker.` },
    { s: 'TYLA', t: `Exactly — and that's the point of practising past papers. To everyone listening: whichever three questions you choose, you've now heard the full memo for every one of them. Next, we'll take on Paper 2. Until then... [whispers] read the source, question the source, and argue with the evidence. [warmly] We'll catch you in the next episode.` },
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

  console.log(`Echoes of the Past — History Paper 1 Nov 2025 (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

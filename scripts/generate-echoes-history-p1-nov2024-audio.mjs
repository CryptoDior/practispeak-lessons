/**
 * Echoes of the Past — Exam Walkthrough: History Paper 1, November 2024 — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-echoes-history-p1-nov2024-audio.mjs 1 2 3 4 5 6
 *
 * The paper is recorded in three topic parts (one PDF each). Each topic has two MP3s,
 * and each MP3 opens with Amelia announcing the title:
 *   Part 1 — The Cold War
 *     1. Source Question 1 - The Berlin Wall       — Intro + Parts 1-5
 *     2. Essay Question 4 - Vietnam                — Parts 6-8 + Outro
 *   Part 2 — Independent Africa
 *     3. Source Question 2 - Cuito Cuanavale       — Intro + Parts 1-5
 *     4. Essay Question 5 - The Congo              — Parts 6-8 + Outro
 *   Part 3 — Civil Society Protests
 *     5. Source Question 3 - The March on Washington — Intro + Parts 1-5
 *     6. Essay Question 6 - Black Power            — Parts 6-8 + Outro
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
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_2 to .env.local and run with: node --env-file=.env.local scripts/generate-echoes-history-p1-nov2024-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'Echoes-of-the-Past-History-P1-Nov-2024');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'echoes-history-p1-nov2024');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'History P1 Nov 2024 - Cold War 1 - Source Question 1 - The Berlin Wall',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 1, November 2024. The Cold War, part one: Source-based Question 1, the Berlin Wall.` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to ECHOES OF THE PAST. We've done both History papers from 2025. Today we go back a year: History Paper 1, November 2024 — Part 1: The Cold War.` },
    { s: 'MICHAEL', t: `Same three topics as the 2025 Paper 1 — the Cold War, Independent Africa, and civil society protests.` },
    { s: 'TYLA', t: `Exactly the same topics, different questions. That's the big test today. The source question is on the Berlin Wall in 1961, and the essay is on Vietnam — again.` },
    { s: 'MICHAEL', t: `[excitedly] Vietnam again! I've already done that essay. I can just use the one from the 2025 episode.` },
    { s: 'TYLA', t: `[playfully] Hold that thought. We'll see. Same rules as always: I read each question with its marks, you answer, I mark you against the DBE memo, and the narrator reads every source in full. Pause and try each question yourself first.` },
    { s: 'TYLA', t: `Question 1. The key question: "How were the lives of Berliners affected by the construction of the Berlin Wall in 1961?" Source 1A.` },
    { s: 'NARRATOR', t: `Source 1A. The source below is from an article 'Berlin Local Life' written by D Rhodes in the Travel Guide on 31 March 2015. It explains why the Berlin Wall was constructed in August 1961.` },
    { s: 'NARRATOR', t: `Construction on the Berlin Wall began early on the morning of Sunday 13 August 1961. It was a desperate attempt — an effective move by the German Democratic Republic (GDR) — to stop East Berliners escaping from the Soviet-controlled East German state into the West of the city, which was then occupied by the Americans, British and French.` },
    { s: 'NARRATOR', t: `Berlin's unique situation as a city half-controlled by Western forces, in the middle of the Soviet Occupation Zone of Germany, made it a focal point for tensions between the Allies and the Soviets and a place where conflicting ideologies were enforced side by side.` },
    { s: 'NARRATOR', t: `However, as more and more people in the Soviet-controlled East grew disillusioned (dissatisfied) with communism and the increasingly oppressive economic and political conditions, an increasing number began defecting (running away) to the West. By 1961 an estimated 1 500 people a day were fleeing to the West, damaging both the credibility and, more importantly, the workforce of the GDR. Soon rumours began to spread about a wall, and it wasn't long after that those rumours were made a concrete reality.` },
    { s: 'NARRATOR', t: `In a masterfully planned operation, spanning (taking) just 24 hours, the streets of Berlin were torn up, barricades of paving stones were erected, tanks were gathered at crucial places and subways and local railway services were interrupted, so that within a day the West of Berlin was completely sealed off from the East. As of that same day, inhabitants of East Berlin and the GDR were no longer allowed to enter the West of the city — including the 60 000 who had been commuters (travellers).` },
    { s: 'TYLA', t: `Quick context: after the Second World War, Germany — and Berlin inside it — was divided. West Berlin was run by the USA, Britain and France; East Berlin was under Soviet control, in communist East Germany, the GDR. 1.1.1: "When, according to the source, did the construction of the Berlin Wall begin?" One times one.` },
    { s: 'MICHAEL', t: `"... the morning of Sunday 13 August 1961."` },
    { s: 'TYLA', t: `One mark. 1.1.2: "Give ONE reason in the source why the GDR constructed the Berlin Wall." One times one.` },
    { s: 'MICHAEL', t: `"... to stop East Berliners escaping from the Soviet-controlled East German state into the West of the city ..."` },
    { s: 'TYLA', t: `One mark. 1.1.3: "Define the concept communism in your own words." One times two.` },
    { s: 'MICHAEL', t: `A political and economic system where the means of production are owned by the government, and private ownership of property isn't allowed — the ideal is a classless society where everyone is equal.` },
    { s: 'TYLA', t: `[impressed] Two marks. 1.1.4: "Explain why you think the fleeing of people to the West in 1961 ended up damaging the following: (a) 'the credibility of the GDR'." One times two.` },
    { s: 'MICHAEL', t: `Credibility... people stopped believing the GDR?` },
    { s: 'TYLA', t: `[encouragingly] Go further. What did 1 500 people leaving every day tell the world about life in the East?` },
    { s: 'MICHAEL', t: `That life under communism in the GDR was worse — oppressive — and that life in the capitalist West was better. It made the GDR look like a failure.` },
    { s: 'TYLA', t: `Two marks. (b): "the workforce of the GDR."` },
    { s: 'MICHAEL', t: `Many skilled workers fled to the West, so the GDR was left with fewer or less-skilled workers — a brain drain that destabilised its economy.` },
    { s: 'TYLA', t: `Two marks. 1.1.5: "Quote TWO pieces of evidence from the source which indicate that 'within a day the West of Berlin was completely sealed off from the East'." Two times one.` },
    { s: 'MICHAEL', t: `"... the streets of Berlin were torn up ..." and "... tanks were gathered at crucial places ..."` },
    { s: 'TYLA', t: `Two marks. Also accepted: the barricades of paving stones, interrupted subways and railways, and East Berliners no longer allowed into the West.` },
    { s: 'TYLA', t: `Source 1B — two eyewitnesses.` },
    { s: 'NARRATOR', t: `Source 1B. The source below is from a book titled The Great Power Conflict After 1945 by P Fisher who was a historian. It details the accounts of police sergeant, Hans Peters, and hotel worker, Ursula Heinemann, who were eyewitnesses to the events that took place in Berlin on 13 August 1961.` },
    { s: 'NARRATOR', t: `Hans Peters was on border duty in the French Sector of West Berlin. At 2.20 a.m., six trucks roared towards him, headlights blazing. Eighty yards [1 yard = 0,914 metres] away they stopped. A moment later, the street was full of armed soldiers who set up machine guns aimed at the French Sector. Two guards approached carrying coils (rolls) of barbed wire. At the invisible border line between the Soviet and French Sectors the squads cordoned off (blocked) the street. In the houses no one stirred (moved).` },
    { s: 'NARRATOR', t: `At 4.45 a.m. Ursula Heinemann awoke in her East Berlin flat to another working day at the Plaza Hotel in West Berlin. She walked to the nearby station and went to the ticket counter. 'Nein! Nein! [No! No!] Take your pfennigs (money) back! It's all over now with trips to Berlin.' At that moment Ursula saw five armed East German transport police heading her way. She turned and ran back to her flat. 'They've closed the border!' In a moment the landing and corridors of the flats were full of people shouting and crying. She decided that she must cross to the West. But how? Near the United States Sector she slipped (approached) through an orchard (plantation) and reached the barbed wire border. Ursula crawled forward on her stomach. She felt the metal barbs tearing her skin. At last she reached a border post. A moment later, she was in West Berlin.` },
    { s: 'NARRATOR', t: `By early morning East German police and soldiers had cut the city in two. The seal-off operation went on. Only a few crossing points stayed open, protected by tanks, armoured cars and water cannons. Nevertheless, some were still determined to risk death by crossing from East to West.` },
    { s: 'TYLA', t: `1.2.1: "Identify THREE incidents in the source that Hans Peters witnessed at 2.20 a.m. while he was on border duty in the French Sector." Three times one.` },
    { s: 'MICHAEL', t: `Six trucks roared towards him. Soldiers set up machine guns aimed at the French Sector. And Ursula crawled under the barbed wire—` },
    { s: 'TYLA', t: `[encouragingly] Whose story is the barbed-wire crawl?` },
    { s: 'MICHAEL', t: `[groans] Ursula's — at 4.45, not 2.20. The question says Hans Peters. The third one is: "Two guards approached carrying coils (rolls) of barbed wire."` },
    { s: 'TYLA', t: `Three marks. When a source has two eyewitnesses, check whose account the question is about. Also accepted: the trucks stopping eighty yards away, the squads cordoning off the street, and no one stirring in the houses. 1.2.2: "Comment on what is implied by the words, 'It's all over now with trips to Berlin', in the context of what happened on 13 August 1961." Two times two.` },
    { s: 'MICHAEL', t: `The border between East and West Berlin was closed, so there was no more free movement — people were trapped on either side. And it shows Cold War tensions had intensified.` },
    { s: 'TYLA', t: `[delighted] Four marks. 1.2.3: "Explain why a historian would regard this source as reliable when researching an account of what transpired on the morning of 13 August 1961." Two times two.` },
    { s: 'MICHAEL', t: `Who, what, when, where. It's from a book by P Fisher, a historian. It's based on eyewitness accounts — Hans Peters and Ursula Heinemann. And the accounts relate to the actual date, 13 August 1961.` },
    { s: 'TYLA', t: `Four marks, with a spare. Also accepted — and you know this one from Paper 2 — the accounts can be corroborated by Sources 1A, 1C and 1D. Question 1.3: "Study Source 1A and Source 1B. Explain how information in Source 1A supports the evidence in Source 1B regarding events that took place in Berlin on 13 August 1961." Two times two.` },
    { s: 'MICHAEL', t: `Source 1A says the wall was built to stop East Berliners escaping to the West, and Source 1B shows trips to West Berlin being stopped at the station. Source 1A says tanks were gathered at crucial places, and Source 1B refers to crossing points protected by tanks, armoured cars and water cannons.` },
    { s: 'TYLA', t: `Four marks. Also accepted: 1A's "masterfully planned operation" and 1B's timed actions that cut the city in two by morning.` },
    { s: 'TYLA', t: `Source 1C.` },
    { s: 'NARRATOR', t: `Source 1C. The extract below is from a newspaper article titled 'Revealed: Tragic Victims of the Berlin Wall' by T Paterson for the British The Independent newspaper, dated 12 August 2006. It highlights the East Berliners' reaction to the construction of the Berlin Wall.` },
    { s: 'NARRATOR', t: `Siegfried Noffke was a 22-year-old who had been separated from his family by a momentous (important), tragic (sad) event that took the world by surprise. Noffke, an East Berliner, had been visiting relatives in capitalist West Berlin that evening. Like hundreds of others, he returned to a crossing point into East Berlin on the morning of 13 August but found it barred (blocked) by border police with machine guns. His only chance of contact with his wife and daughter, left in the East, was to wave at them across the barbed-wire divide.` },
    { s: 'NARRATOR', t: `He decided that his only chance was to smuggle his family into the West. He joined a group that had started to dig a tunnel from West Berlin's Sebastian Strasse, in the rundown district of Kreuzberg, that aimed to break through under the Wall into East Berlin's Heinrich Heine Strasse, a distance of some 200 yards.` },
    { s: 'NARRATOR', t: `On the morning of 28 June 1962, the tunnel diggers had almost reached their goal. Less than a yard of earth separated them from a cellar in a house in the East Berlin street. But when Noffke and his team broke through, they were met by East Germany's notorious Stasi secret police. Noffke, one of the first out, was instantly machine-gunned to death. His colleagues were arrested and put on trial for 'anti- state provocation' (challenging the state). Unbeknown (not known) to the tunnel-diggers, Jurgen Henning, a Stasi mole (spy), had joined the group early on and had kept the East Berlin authorities fully informed of their activities. Noffke's wife was jailed in East Germany for 'anti-Communist conspiracy (plot against communism)'.` },
    { s: 'TYLA', t: `1.4.1: "Why, according to the source, was Noffke in West Berlin on the evening before the construction of the Berlin Wall?" One times two.` },
    { s: 'MICHAEL', t: `"... he had been visiting relatives ..."` },
    { s: 'TYLA', t: `Two marks. 1.4.2: "Explain the concept capitalist in the context of West Berlin." One times two.` },
    { s: 'MICHAEL', t: `An economic system where individuals can own property and make profit freely — in West Berlin, it was supported by the capitalist countries: the USA, Britain and France.` },
    { s: 'TYLA', t: `Two marks — and "in the context of West Berlin" is why you named the three Western powers. 1.4.3: "What conclusions can be drawn from the fact that Noffke and a group were prepared to dig a tunnel of 200 yards to smuggle their families to the West?" Two times two.` },
    { s: 'MICHAEL', t: `The wall destroyed families by separating them, which pushed Berliners to take desperate measures to reunite. And they wanted to escape the brutal dictatorship of the communist GDR, because they believed life in the West was better.` },
    { s: 'TYLA', t: `Four marks. 1.4.4: "How, according to the source, was the East German Stasi secret police able to deal with the following after the tunnel diggers had completed their work: (a) Noffke; (b) Noffke's colleagues; (c) Noffke's wife." One mark each.` },
    { s: 'MICHAEL', t: `(a) He was "instantly machine-gunned to death." (b) They were "arrested and put on trial for anti- state provocation." (c) She was "jailed."` },
    { s: 'TYLA', t: `Three marks.` },
    { s: 'TYLA', t: `Source 1D is a cartoon.` },
    { s: 'NARRATOR', t: `Source 1D. The cartoon below by J Hook appeared in The Mercury newspaper in Australia on 29 August 1961. It depicts East Berlin soldiers trying to defect towards the Western Sector of Berlin.` },
    { s: 'TYLA', t: `In the cartoon, East German soldiers are leaping over the Wall in every way possible — springs on their boots, a pole vault, a pogo stick, even flying. On the Wall, a sign reads: "The Wall was constructed with the genuine Communist Bloc, for the protection of the good Communists." On the Western side, a signpost says: "Attention! Western Sector — Defectors Welcome." In the foreground, two generals stand calmly with their hands behind their backs. The caption: "The men are becoming more jumpy as the Berlin Crisis deepens, Comrade ..." 1.5.1: "Explain whether you would consider the caption to be an appropriate caption for the cartoon." One times two.` },
    { s: 'MICHAEL', t: `[laughs] It's a pun — "jumpy" means nervous, but they're literally jumping over the wall. So it's appropriate: it shows dissatisfied soldiers using all kinds of methods to escape to West Berlin for a better life.` },
    { s: 'TYLA', t: `Two marks. The memo would also accept "not appropriate," if you explain it — for example, the sign says the wall protects good communists, yet communist soldiers are escaping. This kind of question rewards a clear choice with a reason. 1.5.2: "Comment on the implication of the message on the signpost on the Western Sector side, '... DEFECTORS WELCOME'." One times two.` },
    { s: 'MICHAEL', t: `The West welcomed and encouraged defectors from East Berlin — implying the Western Sector was better.` },
    { s: 'TYLA', t: `Two marks. 1.5.3: "What conclusion can you draw from the body language of the two generals in the foreground, in the context of defections that were taking place?" One times two.` },
    { s: 'MICHAEL', t: `They're standing calmly with their hands behind their backs, just watching. They were helpless — they could do nothing to stop the defectors.` },
    { s: 'TYLA', t: `[delighted] Two marks.` },
    { s: 'TYLA', t: `1.6: "Using the information in the relevant sources and your own knowledge, write a paragraph of about eight lines, about eighty words, explaining how the lives of Berliners were affected by the construction of the Berlin Wall in 1961." Eight marks.` },
    { s: 'MICHAEL', t: `[confidently] Answer first. "The construction of the Berlin Wall on 13 August 1961 dramatically disrupted the lives of Berliners. Overnight, East Berliners were trapped behind barbed wire and could no longer cross to the West, and the 60 000 commuters lost access to their jobs. Families were split apart — Siegfried Noffke could only wave to his wife and daughter across the wire. People risked their lives to escape by crawling under barbed wire, digging tunnels or jumping the Wall, and those who were caught, like Noffke, were shot or jailed."` },
    { s: 'TYLA', t: `[impressed] Level 3 — six to eight marks. The answer is in the first sentence, and every other sentence is a way lives were affected: trapped, jobs lost, families split, risking death, killed or jailed — from Sources 1A, 1B, 1C and 1D. The memo's own-knowledge points include athletes using sport to defect, and people dying while trying to escape.` },
  ],
},

{
  num: 2,
  file: 'History P1 Nov 2024 - Cold War 2 - Essay Question 4 - Vietnam',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 1, November 2024. The Cold War, part two: Essay Question 4, Vietnam.` },
    { s: 'TYLA', t: `Section B. Question 4: The Extension of the Cold War — Vietnam. "Explain to what extent the technological superiority of the United States army could not help to defeat a small army of Viet Cong guerrillas in the Vietnamese War between 1962 and 1973. Substantiate your answer with relevant historical evidence." Fifty marks.` },
    { s: 'MICHAEL', t: `[excitedly] Okay — my 2025 essay. "I agree that the military tactics and strategies of the Viet Cong between 1962 and 1975 were successful in defeating the strong army of the USA. Through guerrilla warfare, the Ho Chi Minh Trail and underground tunnels..."` },
    { s: 'TYLA', t: `[seriously] Stop. Read me the 2024 question again — slowly.` },
    { s: 'MICHAEL', t: `"To what extent the technological superiority of the United States army could not help to defeat..." [groans] Oh. It's not "do you agree." It's "to what extent." And it's not about the Viet Cong's tactics — it's about American technology and why it failed. And the dates are different too — 1962 to 1973, not 1975.` },
    { s: 'TYLA', t: `Exactly. Same war, same facts — but a different question. The memo for this paper actually warns against this: global marking discourages learners from preparing essays and reproducing them without taking the specific question into account. If you'd written your 2025 essay here, your content might be fine, but your line of argument would answer the wrong question.` },
    { s: 'MICHAEL', t: `So the facts can be reused, but the argument has to be rebuilt.` },
    { s: 'TYLA', t: `[delighted] That's the lesson of today. And watch the double negative: "could not help to defeat." If you say "to a great extent," what are you arguing?` },
    { s: 'MICHAEL', t: `[slowly, putting it together] That to a great extent, the technology could not help — it failed to defeat the Viet Cong. Okay. "To a great extent, the technological superiority of the United States army could not help it defeat the small army of Viet Cong guerrillas between 1962 and 1973. Despite its bombers, chemical weapons and modern equipment, the US was unable to overcome the Viet Cong's guerrilla tactics, its tunnels and its support among the peasants. Operation Rolling Thunder, Operation Ranch Hand and napalm failed to destroy the enemy and turned world opinion against the USA, and by 1973 the US had withdrawn all its troops."` },
    { s: 'TYLA', t: `Clear stance — and now every piece of evidence has to show technology failing, not just "the Viet Cong were clever."` },
    { s: 'TYLA', t: `Plan the body — and for each paragraph, name the technology and why it failed.` },
    { s: 'MICHAEL', t: `Paragraph one — background, briefly: the division of North and South Vietnam; the US first sent weapons and military advisors; and the Ho Chi Minh Trail supplied the Viet Cong from the North.` },
    { s: 'TYLA', t: `Good. Now technology.` },
    { s: 'MICHAEL', t: `Paragraph two — the Safe Village policy, 1962 — trying to separate guerrillas from villagers. It failed, because the Viet Cong operated inside the villages. Technology can't tell a farmer from a guerrilla.` },
    { s: 'TYLA', t: `Next.` },
    { s: 'MICHAEL', t: `Paragraph three — escalation. Johnson used the Gulf of Tonkin incident, 1964, to escalate, and 3 500 marines landed on 8 March 1965. But the US had prepared for a conventional war like the Second World War — and this wasn't one. And many soldiers were young and inexperienced.` },
    { s: 'TYLA', t: `So the technology was built for the wrong kind of war. Next.` },
    { s: 'MICHAEL', t: `Paragraph four — chemical warfare. Operation Ranch Hand, 1962 to 1971: Agent Orange to destroy the forests where the Viet Cong hid, and Agent Blue to destroy their crops. And napalm. These caused huge environmental damage and made the US unpopular — many countries condemned it.` },
    { s: 'TYLA', t: `That's technology backfiring. Next.` },
    { s: 'MICHAEL', t: `Paragraph five — Operation Rolling Thunder, March 1965: massive bombing to quickly eliminate the Viet Cong. The memo actually describes it as showing the ineffectiveness of technological superiority — guerrillas in tunnels and jungle weren't easy targets.` },
    { s: 'TYLA', t: `[impressed] Quoting the memo's own idea. And how did the Viet Cong respond?` },
    { s: 'MICHAEL', t: `Paragraph six — the guerrilla response. Booby traps, hit-and-run, sabotage, and underground tunnels too narrow for the bigger US soldiers. The Viet Cong also had some modern weapons from the Soviet Union and China. And the Vietnamese were united in defending their country.` },
    { s: 'TYLA', t: `Next?` },
    { s: 'MICHAEL', t: `Paragraph seven — the Tet Offensive, January 1968 — surprise attacks on 100 US-controlled cities. US deaths rose, which led to anti-war demonstrations at home. Search and Destroy and the My Lai massacre, March 1968, killed civilians and increased support for the Viet Cong.` },
    { s: 'TYLA', t: `And how does it end?` },
    { s: 'MICHAEL', t: `Paragraph eight — the result. Nixon's Vietnamisation — strategic withdrawal — signalled the failure. The Paris Peace Accords on 27 January 1973 ended US involvement, and all troops were out by 1973. The question ends there — so Saigon in 1975 only goes in briefly, if at all.` },
    { s: 'TYLA', t: `[delighted] That plan answers this question. Every paragraph is about why technology failed.` },
    { s: 'TYLA', t: `Write the Rolling Thunder paragraph with PEEL.` },
    { s: 'MICHAEL', t: `"Point: Operation Rolling Thunder shows that even the most advanced air power could not defeat the Viet Cong. Explain: The USA believed that its superior technology could destroy the enemy quickly from the air. Example: In March 1965, President Johnson launched Operation Rolling Thunder, a massive bombing campaign intended to eliminate the Viet Cong and shorten the war. However, the guerrillas hid in jungles and narrow underground tunnels, launched hit-and-run attacks and were supplied along the Ho Chi Minh Trail, so the bombing failed to destroy them. Link: This proves that, to a great extent, the technological superiority of the US army could not help it defeat a small guerrilla army."` },
    { s: 'TYLA', t: `[impressed] That's the question's language in the link — "technological superiority could not help." Conclusion?` },
    { s: 'MICHAEL', t: `"In conclusion, the USA had overwhelming technological superiority, including bombers, chemical defoliants and napalm, but these could not defeat the Viet Cong's guerrilla tactics, tunnels and support among the Vietnamese people. Instead, they turned world and American opinion against the war. By 1973, the USA had signed the Paris Peace Accords and withdrawn its troops. Therefore, to a great extent, technological superiority could not help the US army defeat the Viet Cong."` },
    { s: 'TYLA', t: `[delighted] Level 6 to 7. And the version where you pasted in your 2025 essay? The facts would overlap, but the argument would be about the wrong thing — the presentation level drops, and the question is only partly answered. That could cost you fifteen to twenty marks.` },
    { s: 'TYLA', t: `[warmly] Part 1 of the 2024 paper, done. Michael — how did it feel going back a year?` },
    { s: 'MICHAEL', t: `Humbling. I thought I had the Vietnam essay ready to go — and it was the wrong essay.` },
    { s: 'TYLA', t: `[laughs] That's the most valuable lesson of the whole series. Same tradition — top traps, in one go.` },
    { s: 'MICHAEL', t: `Source questions. When a source has two eyewitnesses, check whose account the question asks about — Hans Peters at 2.20, not Ursula at 4.45. "Credibility" questions need you to say what the fleeing showed about life in the East. "In the context of" — capitalism in West Berlin means naming the three Western powers. Appropriate caption questions — choose and justify. And the paragraph — answer first, then every sentence is a way lives were affected.` },
    { s: 'TYLA', t: `And the essay?` },
    { s: 'MICHAEL', t: `Never reuse a prepared essay. Same war, different question — "to what extent technology could not help," not "do you agree the Viet Cong's tactics worked." Watch the double negative, and the dates — 1962 to 1973. Reuse the facts, rebuild the argument.` },
    { s: 'TYLA', t: `[delighted] Perfect. Next time, Part 2: Independent Africa — Cuito Cuanavale in Angola, and a new Congo question. Until then... [whispers] same topic, new question — answer the one in front of you. [warmly] We'll catch you in the next episode.` },
  ],
},

{
  num: 3,
  file: 'History P1 Nov 2024 - Independent Africa 1 - Source Question 2 - Cuito Cuanavale',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 1, November 2024. Independent Africa, part one: Source-based Question 2, the Battle of Cuito Cuanavale.` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to ECHOES OF THE PAST. This is History Paper 1, November 2024 — Part 2: Independent Africa.` },
    { s: 'MICHAEL', t: `Angola and the Congo again. In the 2025 paper, the Angola question was about why the USA got involved in 1975.` },
    { s: 'TYLA', t: `And today we jump to the end of that war. The source question asks how the defeat of the South African Defence Force at the Battle of Cuito Cuanavale led to peaceful negotiations in southern Africa in the late 1980s. So if 2025 was the beginning of the story, 2024 is the ending.` },
    { s: 'MICHAEL', t: `And the essay is Mobutu again. [nervously] I'm not saying anything about reusing an essay this time.` },
    { s: 'TYLA', t: `[laughs] You've learned. The essay asks whether Mobutu's policies were anti-colonial — a completely different question from "dismal failure." Same rules: I read each question with its marks, you answer, I mark you against the DBE memo, and the narrator reads every source in full. Pause and try each one yourself first.` },
    { s: 'TYLA', t: `Question 2. The key question: "How did the defeat of the South African Defence Force at the Battle of Cuito Cuanavale in Angola lead to peaceful negotiations in southern Africa in the late 1980s?" Quick context: after Angola's independence in 1975, the MPLA government, backed by Cuba and the Soviet Union, fought UNITA, which was backed by South Africa and the USA. South African troops fought inside Angola for years. Source 2A.` },
    { s: 'NARRATOR', t: `Source 2A. The source below is an extract from the book, The Mission: A Life for Freedom in South Africa, by D Goldberg, a white anti-apartheid activist. It explains how Cuba and her allies succeeded in driving the South African Defence Force (SADF) out of Cuito Cuanavale, in Eastern Angola.` },
    { s: 'NARRATOR', t: `1987 was a turning point in southern Africa. At Cuito Cuanavale in Eastern Angola, the final confrontation took place between Cuban and Angolan military forces, who together confronted the South African forces and Savimbi's National Union for the Total Independence of Angola (UNITA). It was the greatest battle on the African continent since the end of World War Two. The South African army that had marched with the backing of the United States, had to withdraw.` },
    { s: 'NARRATOR', t: `The Cuban contribution was enormous and having assisted in the struggle for the recognition of Angolan sovereignty, Cuba had to withdraw all its forces after having defeated the South African army at Cuito Cuanavale. The Soviet Union's contribution was enormous, too. The building of the radar (detector) network and the fighter aircraft protection, which gave Angola air superiority against South Africa, was crucial. And at a psychological level, it was important in southern Africa that white South Africans could be killed by bullets fired by black Africans and black Cubans. To be white did not make apartheid's soldiers bulletproof.` },
    { s: 'NARRATOR', t: `In 1988, one month before the end of Ronald Reagan's presidency, the three-party treaty (Tripartite Accord) that ensured Namibia's independence, was signed in New York by Angola, Cuba and South Africa. The treaty provided for the withdrawal of all Cuban military personnel within 30 months. The left-wing, ANC-friendly government in Angola remained in office and our case was won.` },
    { s: 'TYLA', t: `2.1.1. "List FOUR military forces in the source that were involved in the final confrontation at the Battle of Cuito Cuanavale." Four times one — four marks.` },
    { s: 'MICHAEL', t: `Cuban forces, Angolan forces, South African forces... and the United States.` },
    { s: 'TYLA', t: `[curious] Read the sentence about the United States again.` },
    { s: 'MICHAEL', t: `"The South African army that had marched with the backing of the United States..." [groans] Backing. The USA supported South Africa, but American soldiers weren't fighting at Cuito Cuanavale. The fourth force is UNITA — Savimbi's National Union for the Total Independence of Angola.` },
    { s: 'TYLA', t: `Exactly. The memo: Cuban, Angolan military forces, South African forces, and UNITA. The question says "involved in the final confrontation," and the source tells you who confronted whom in one sentence. A country that backs a side is not the same as a force on the battlefield.` },
    { s: 'MICHAEL', t: `And "Savimbi" on his own?` },
    { s: 'TYLA', t: `Savimbi was UNITA's leader, not a military force. Write "UNITA" or its full name.` },
    { s: 'TYLA', t: `2.1.2. "Define the term sovereignty in your own words." One times two.` },
    { s: 'MICHAEL', t: `Independence.` },
    { s: 'TYLA', t: `That's one word for two marks.` },
    { s: 'MICHAEL', t: `Fair. "Sovereignty is the state of a country having total control over its own affairs, free from control by another country or a foreign power."` },
    { s: 'TYLA', t: `[impressed] Two marks. The memo: having total control of oneself or a country, or being free from control by a foreign power. In Angola's case — Angolans deciding their own government, without South Africa or anyone else deciding for them.` },
    { s: 'MICHAEL', t: `So for two marks, one word is never enough.` },
    { s: 'TYLA', t: `2.1.3. "Using the information in the source and your own knowledge, explain the significance of Angola's air superiority during the Battle of Cuito Cuanavale." One times two.` },
    { s: 'MICHAEL', t: `Air superiority means Angola controlled the skies. The Soviets built a radar network and gave them fighter aircraft protection, so South African planes couldn't dominate.` },
    { s: 'TYLA', t: `That's what air superiority is — and how they got it. But "significance" asks what it led to.` },
    { s: 'MICHAEL', t: `[thoughtful] Okay — "It was significant because it led to the defeat of the SADF, as South Africa could no longer rely on its air force, and it helped ensure victory for the MPLA."` },
    { s: 'TYLA', t: `Two marks. The memo also accepts that it helped defend the socialist government in Angola and prevented a capitalist takeover by South Africa, the USA and UNITA. Significance always means consequence.` },
    { s: 'MICHAEL', t: `Significance means consequence. Got it.` },
    { s: 'TYLA', t: `2.1.4. "Comment on what is implied by the statement, 'it was important in southern Africa that white South Africans could be killed by bullets fired by black Africans and black Cubans', in the context of the Angolan war." One times two.` },
    { s: 'MICHAEL', t: `"It implies that the myth of white superiority was destroyed. Apartheid South Africa's army was seen as unbeatable, and its defeat by black African and Cuban soldiers proved that white soldiers were not invincible."` },
    { s: 'TYLA', t: `[delighted] Two marks. The memo also accepts that it was a psychological boost for liberation movements and for Africans, and that it opened the way for countries like Namibia to gain independence from South Africa. The source gives you a clue in its last line: "To be white did not make apartheid's soldiers bulletproof."` },
    { s: 'TYLA', t: `2.1.5. "Explain the limitations of the source to a historian researching the outcome of the Battle of Cuito Cuanavale." Two times two — four marks.` },
    { s: 'MICHAEL', t: `"The source is limited because it is from a book, so it was published and..." Wait. That's a reason it's useful, isn't it?` },
    { s: 'TYLA', t: `Exactly. Limitations means what's wrong or missing. Look at who wrote it.` },
    { s: 'MICHAEL', t: `D Goldberg, a white anti-apartheid activist. He was against the apartheid government, so he'd want to celebrate its defeat. He even writes "our case was won" — he's on one side.` },
    { s: 'TYLA', t: `[encouragingly] That's one limitation. And what's missing?` },
    { s: 'MICHAEL', t: `"It only highlights the MPLA's victory — we don't hear the South African or UNITA side of the battle. And the language is biased against South Africa and the United States, portraying them as the aggressors who denied Angolans their independence, while Cuba's and the Soviet Union's contributions are called 'enormous'."` },
    { s: 'TYLA', t: `Four marks. And here's something worth knowing from your own knowledge: both sides claimed victory at Cuito Cuanavale. South Africa argued it had stopped the advance on UNITA's territory. That's exactly why a historian needs more than one perspective.` },
    { s: 'TYLA', t: `Source 2B. Michael, notice whose voice we're getting this time.` },
    { s: 'NARRATOR', t: `Source 2B. The source below is an extract from Fidel Castro's biography, My Life – Fidel Castro, by I Ramonet. It explains how the Soviet Union assisted the Cuban troops to counter the support that the United States provided to South Africa during the Battle of Cuito Cuanavale.` },
    { s: 'NARRATOR', t: `The government of the United States implemented a covert (secret) plan to crush the legitimate interests of the Angolan people and impose a puppet government. A key point was a United States alliance with South Africa to train and equip certain organisations created by the Portuguese colonial regime in order to frustrate Angola's independence and turn it into a condominium (house) for Mobutu, the dictator of Congo and South African fascism and apartheid. A South Africa whose troops Washington did not hesitate to use to invade Angola.` },
    { s: 'NARRATOR', t: `While in Angola, the United States made arrangements to transfer to South Africa several atomic bombs similar to those used in Hiroshima and Nagasaki. We took all precautions and assumptions that the South Africans were going to drop a nuclear weapon on our troops in Cuito Cuanavale.` },
    { s: 'NARRATOR', t: `… Although the Soviet Union was not consulted on Cuba's decision to send troops to Cuito Cuanavale, they later decided to provide arms for the creation of the Angolan army, and they responded positively to certain of our requests for military material throughout the war. There would have been no possibility of a successful outcome in Angola without the political and logistical support from the Soviet Union against the aggression of power such as South Africa from the south, and of Mobutu from the north.` },
    { s: 'NARRATOR', t: `The overwhelming victory at Cuito Cuanavale and especially the withering (humiliating) advance by the powerful front of Cuban troops in south-western Angola, put an end to outside military aggression against that country. The enemy had to swallow its usual arrogant bullying and sit down around the negotiating table.` },
    { s: 'MICHAEL', t: `[surprised] Atomic bombs? Did the USA really give South Africa nuclear weapons?` },
    { s: 'TYLA', t: `That's Castro's claim, told in his own biography — the Cuban leader's side of the story. It's a good example of why you always ask who is speaking. In the exam, you answer from what the source says, but if you were asked about reliability, this one-sided claim is exactly what you'd cross-check. Right — 2.2.1. "Give TWO reasons in the source why the United States government implemented a covert plan in Angola." Two times one.` },
    { s: 'MICHAEL', t: `"To train and equip certain organisations created by the Portuguese colonial regime," and "an alliance with South Africa."` },
    { s: 'TYLA', t: `Those are how the plan worked — the methods. The question asks why. Look at the very first sentence: a covert plan to...` },
    { s: 'MICHAEL', t: `[groans] "To" — that's the purpose. "To crush the legitimate interests of the Angolan people" and "to impose a puppet government."` },
    { s: 'TYLA', t: `Two marks — word for word from the memo. When a question asks for reasons, look for "to," "because," "in order to."` },
    { s: 'MICHAEL', t: `[whispers] "To" means reason.` },
    { s: 'TYLA', t: `2.2.2. "Explain why the United States used Mobutu and South Africa to intervene during the Battle of Cuito Cuanavale." One times two.` },
    { s: 'MICHAEL', t: `Because of the Cold War. "The USA used them as proxies, so that it would not be directly involved in the war — it could fight communism without sending American troops."` },
    { s: 'TYLA', t: `[impressed] Two marks. The memo also accepts that South Africa and the Congo were close to Angola, and that both supported capitalism and opposed communism. And remember the 2025 Angola episode? The USA was still avoiding direct involvement after Vietnam. Same thinking, ten years later.` },
    { s: 'MICHAEL', t: `The 2025 episode is paying off.` },
    { s: 'TYLA', t: `2.2.3. "Comment on why Castro believed, 'there would have been no possibility of a successful outcome in Angola without the political and logistical support from the Soviet Union …'." One times two.` },
    { s: 'MICHAEL', t: `"Because the Soviet Union, as a superpower, could provide the weapons, military material and support that Cuba and Angola could not supply on their own."` },
    { s: 'TYLA', t: `Two marks. The memo also has the Soviets offering technical and supervisory military strategies — remember the radar network in Source 2A. Now 2.2.4. "Quote TWO pieces of evidence from the source that suggests why South Africa had 'to sit down around the negotiating table'." Two times one.` },
    { s: 'MICHAEL', t: `"The enemy had to swallow its usual arrogant bullying and sit down around the negotiating table."` },
    { s: 'TYLA', t: `[laughs] That's the question's own quote handed back. What caused them to sit down?` },
    { s: 'MICHAEL', t: `The sentence before it. "The overwhelming victory at Cuito Cuanavale" and "the withering (humiliating) advance by the powerful front of Cuban troops in south-western Angola."` },
    { s: 'TYLA', t: `Two marks. Never quote the words the question already gave you — they get zero.` },
    { s: 'TYLA', t: `Source 2C is a photograph.` },
    { s: 'NARRATOR', t: `Source 2C. The photograph below was taken by the United Nations' photographer, J Isaac, on 22 December 1988. It shows representatives of South Africa, the United Nations, the United States, Angola and Cuba signing the Tripartite Accord.` },
    { s: 'TYLA', t: `It's a formal ceremony. A long table draped in white, with eight men in suits and uniforms seated along it, signing documents. Name cards on the table show the countries — you can make out "Angola" and "Cuba." Behind them stand officials, a guard and flags, including the American flag, and the United Nations emblem is on the wall.` },
    { s: 'NARRATOR', t: `Seated from left to right are: Defence Minister, General Magnus Malan (South Africa); Minister for Foreign Affairs, Roelof Frederik Botha (South Africa); the UN Secretary General, Javier Perez De Cuellar; Secretary of State, George Shultz (United States); Minister for Foreign Affairs, Alfonso Van Dunem (Angola); General Antonio dos Santos Franca (Angola); Minister for Foreign Affairs of Cuba, Isidoro Malmierca Peoli; and General Abelardo Colomé Ibarra (Cuba).` },
    { s: 'MICHAEL', t: `So South Africa sent its Defence Minister — Magnus Malan — and its Foreign Minister, "Pik" Botha.` },
    { s: 'TYLA', t: `Exactly. Military and diplomatic leaders on every side — that tells you this was the end of a war. 2.3.1. "Explain why you think this photograph was taken." One times two.` },
    { s: 'MICHAEL', t: `"To show the people signing the Tripartite Accord at a table."` },
    { s: 'TYLA', t: `That's what the photograph shows. The question is why it was taken. Who took it?` },
    { s: 'MICHAEL', t: `A United Nations photographer. So... "It was taken to show the role played by the United Nations in mediating peace in Angola after the Battle of Cuito Cuanavale."` },
    { s: 'TYLA', t: `[delighted] Two marks. The memo also accepts: to show the countries and representatives present at the signing. Always check who made the image — that's often the clue to its purpose.` },
    { s: 'MICHAEL', t: `Who took it tells you why. Next one.` },
    { s: 'TYLA', t: `2.3.2. "What do you think was the significance of the presence of the United Nations' Secretary General during the signing of the Tripartite Accord?" Two times two.` },
    { s: 'MICHAEL', t: `"His presence showed that the Tripartite Accord would be internationally recognised, adding validity to the agreement. It also showed that the UN was facilitating the signing, as part of its mandate to preserve world peace."` },
    { s: 'TYLA', t: `[impressed] Four marks — and those are three memo points. The memo also has "to accelerate agreements about the independence of Angola." And from your own knowledge, the UN went on to supervise Namibia's independence process.` },
    { s: 'TYLA', t: `2.4. "Refer to Sources 2A and 2C. Comment on how the information in Source 2A supports the evidence in Source 2C regarding the signing of the Tripartite Accord." Two times two.` },
    { s: 'MICHAEL', t: `"Source 2C shows the signing of the Tripartite Accord on 22 December 1988, with representatives of South Africa, the UN, the USA, Angola and Cuba."` },
    { s: 'TYLA', t: `That's only Source 2C. A comparison needs both sources in every point.` },
    { s: 'MICHAEL', t: `Okay. "Source 2A states that the Tripartite Accord was signed by Angola, Cuba and South Africa, and Source 2C shows the representatives of those three countries signing it. Also, both sources refer to the signing of the accord in 1988 — Source 2A says one month before the end of Reagan's presidency, and Source 2C is dated 22 December 1988."` },
    { s: 'TYLA', t: `[delighted] Four marks. That date detail is lovely — Reagan's presidency ended in January 1989, so "one month before" matches December 1988 exactly. The memo has another: Source 2A says the MPLA government remained in office, and in Source 2C, Angolan government representatives are at the signing table.` },
    { s: 'TYLA', t: `Source 2D. A speech by Nelson Mandela — in Cuba, in 1991, the year after his release.` },
    { s: 'NARRATOR', t: `Source 2D. The extract below is from a speech delivered by Nelson Mandela at a rally in Matanzas, Cuba on 26 July 1991. It focuses on how the defeat of the South African Defence Force (SADF) at Cuito Cuanavale changed the balance of forces within the region of southern Africa.` },
    { s: 'NARRATOR', t: `It was in prison when I first heard of the massive assistance (providing support) that the Cuban internationalist forces provided to the people of Angola, on such a scale that one hesitated to believe, when the Angolans (MPLA) came under combined attack from South Africa, the Central Intelligence Agency (CIA) financed the National Liberation Front of Angola (FNLA), the mercenaries (guerrillas), the National Union for the Total Independence of Angola (UNITA) and Zairian troops in 1975.` },
    { s: 'NARRATOR', t: `We know that the Cuban forces were willing to withdraw shortly after repelling (resisting) the 1975 invasion, but the continued aggression from Pretoria made this impossible. Your presence and the reinforcement of your forces in the Battle of Cuito Cuanavale was of truly historic significance. It is well- known that the state's response to our legitimate democratic demands was, among other things, to charge our leadership with treason …` },
    { s: 'NARRATOR', t: `When we wanted to take up arms, we approached numerous Western governments for assistance, and we were never able to see any but the most junior ministers. When we visited Cuba, we were received by the highest officials and were immediately offered whatever we wanted and needed. That was our earliest experience with Cuban internationalism. The decisive defeat of Cuito Cuanavale altered the balance of forces within the region and reduced the capacity of the Pretoria regime to destabilise its neighbours. This, in combination with our people's struggles within the country, was crucial in bringing Pretoria to realise that it would have to talk.` },
    { s: 'TYLA', t: `2.5.1. "Identify, in the source, any TWO forces or parties that waged a combined attack on the Angolans (MPLA) during the Angolan Civil War." Two times one.` },
    { s: 'MICHAEL', t: `Cuba and South Africa.` },
    { s: 'TYLA', t: `[curious] Was Cuba attacking the MPLA?` },
    { s: 'MICHAEL', t: `[embarrassed] No — Cuba was helping the MPLA. Wrong side. "South Africa" and "UNITA." And the others are the CIA, the FNLA, the mercenaries and Zairian troops.` },
    { s: 'TYLA', t: `Two marks. Any two of those six. And the FNLA, the CIA and Zaire — that's the whole cast from the 2025 Angola episode, back in 1975.` },
    { s: 'MICHAEL', t: `I really need to check which side the question is asking about.` },
    { s: 'TYLA', t: `2.5.2. "Using the information in the source and your own knowledge, comment on what was implied by Mandela's statement, '… your forces in the Battle of Cuito Cuanavale was of truly historic significance.'" Two times two.` },
    { s: 'MICHAEL', t: `"It implied that the defeat of the SADF was a major victory for Cuba and Angola, and that it made it possible for Angolans to secure their independence. It also led to negotiations that paved the way for political stability in southern Africa."` },
    { s: 'TYLA', t: `[impressed] Four marks. The memo also has that it ended the sabotage and disruption by the SADF in Angola. And for Mandela personally — the region changing helped bring the apartheid government to the negotiating table at home too.` },
    { s: 'MICHAEL', t: `So it changed things for South Africa as well as for Angola.` },
    { s: 'TYLA', t: `2.5.3. "How, according to the source, did the following respond when Mandela approached them for assistance in taking up arms?" (a) Western governments — one mark. (b) Cuba — one mark.` },
    { s: 'MICHAEL', t: `(a) "We were never able to see any but the most junior ministers." (b) "We were received by the highest officials" — or "immediately offered whatever we wanted and needed."` },
    { s: 'TYLA', t: `One mark each. Simple extraction. 2.5.4. "Explain the term internationalism in the context of Cuba's foreign policy." One times two.` },
    { s: 'MICHAEL', t: `"Internationalism was Cuba's foreign policy of giving support and solidarity to other communist or liberation movements around the world — such as sending troops to help the MPLA in Angola."` },
    { s: 'TYLA', t: `Two marks. The memo calls it a Cuban humanitarian foreign policy of supporting other communist countries and defending solidarity worldwide. Notice "in the context of" — you must mention Cuba.` },
    { s: 'TYLA', t: `2.6. "Using the information in the relevant sources and your own knowledge, write a paragraph of about eight lines — about 80 words — explaining how the defeat of the SADF at the Battle of Cuito Cuanavale in Angola led to peaceful negotiations in southern Africa in the late 1980s." Eight marks.` },
    { s: 'MICHAEL', t: `"The Battle of Cuito Cuanavale took place in Angola in 1987 and 1988. Cuban and Angolan forces fought against South African forces and UNITA. The Soviet Union built a radar network and provided fighter aircraft protection. Castro said the USA had a covert plan..."` },
    { s: 'TYLA', t: `Stop there. Every sentence is about the battle. Where are the negotiations?` },
    { s: 'MICHAEL', t: `[sighs] I'm retelling the war. The question is about how the defeat led to peace. Let me start again. "The defeat of the SADF at Cuito Cuanavale was a turning point that led to peaceful negotiations in southern Africa. The overwhelming victory of the Cuban and Angolan forces, backed by the Soviet Union, forced South Africa to sit down at the negotiating table. With United Nations mediation, Angola, Cuba and South Africa signed the Tripartite Accord in New York on 22 December 1988, which provided for the withdrawal of Cuban troops and ensured Namibia's independence. The defeat also reduced Pretoria's ability to destabilise its neighbours, and together with resistance inside the country, it helped convince the apartheid government that it would have to negotiate with the liberation movements. Therefore, the defeat of the SADF led directly to peace and democracy in southern Africa."` },
    { s: 'TYLA', t: `[delighted] Level 3 — six to eight marks. It answers the question in the first sentence, uses all four sources — 2A, 2B, 2C and 2D — and every sentence is about the road to negotiations. And you ended with your own knowledge: South Africa's own negotiations.` },
    { s: 'MICHAEL', t: `What would my first version have got?` },
    { s: 'TYLA', t: `Probably Level 1 — zero to two. Correct facts about the battle, but it doesn't answer "how did it lead to negotiations."` },
  ],
},

{
  num: 4,
  file: 'History P1 Nov 2024 - Independent Africa 2 - Essay Question 5 - The Congo',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 1, November 2024. Independent Africa, part two: Essay Question 5, the Congo.` },
    { s: 'TYLA', t: `Section B. Question 5: Independent Africa — Case Study: The Congo. "Mobutu Sese Seko's political, economic, social and cultural policies, which he introduced in the Congo after gaining independence in the 1960s, were anti-colonial in nature. Do you agree with this statement? Support your line of argument with relevant historical evidence." Fifty marks.` },
    { s: 'MICHAEL', t: `I don't agree. Mobutu's policies were a failure — Zaireanisation caused corruption, the economy collapsed, he was a dictator. So they weren't anti-colonial.` },
    { s: 'TYLA', t: `[curious] Michael. What does "anti-colonial" mean?` },
    { s: 'MICHAEL', t: `Against colonialism. Getting rid of colonial control and influence.` },
    { s: 'TYLA', t: `And did Zaireanisation try to get rid of foreign control?` },
    { s: 'MICHAEL', t: `[slowly] Yes... it took businesses from foreigners and gave them to Zairians. [groans] So it failed, but it was still anti-colonial. I just argued the 2025 question again — success or failure.` },
    { s: 'TYLA', t: `Exactly. And you weren't even copying an essay this time — your thinking stayed stuck on the old question. This one isn't asking whether the policies worked. It's asking about their nature — what they were aiming at. Were they designed to break away from Belgian colonial rule and influence, or did they keep colonial patterns going?` },
    { s: 'MICHAEL', t: `So a policy can be anti-colonial and a failure.` },
    { s: 'TYLA', t: `Yes. And the memo helps you here. It tags each point as colonial or anti-colonial. Most of Mobutu's policies are tagged anti-colonial — Zaireanisation, nationalisation, the abacost, African music, art and dance, nation building. But a few things are tagged colonial: the capitalist single-product economy he inherited, elitist education, and French remaining the language of instruction.` },
    { s: 'MICHAEL', t: `So I can agree — or largely agree and show where colonial patterns stayed.` },
    { s: 'TYLA', t: `Either works, if you defend it. And like 2025, the question names four areas: political, economic, social and cultural. Leave one out and your content level drops. Introduction?` },
    { s: 'MICHAEL', t: `"I largely agree that Mobutu Sese Seko's policies were anti-colonial in nature. After independence, he set out to remove Belgian and Western influence from the Congo: politically, he rejected Western-style democracy and ruled as a traditional African leader; economically, he nationalised copper mining and introduced Zaireanisation to take control from foreign owners; and culturally, he promoted African identity through Authenticité and the abacost. However, some colonial features remained, such as French-medium education that favoured a small elite, and growing dependence on Western aid."` },
    { s: 'TYLA', t: `[impressed] Clear stance in the first line, all four areas named, and a "however" that shows you've weighed it. That's a line of argument.` },
    { s: 'TYLA', t: `Plan the body. Start with background — and keep it short.` },
    { s: 'MICHAEL', t: `Paragraph one — the colonial background, briefly. Under Belgian rule there was paternalism — Congolese were treated like children, with no role in government. Political parties were banned. After the 1959 Leopoldville riots, Belgium withdrew quickly, and about 120 political parties, mostly regional and ethnic, took part in the 1960 elections. Lumumba's MNC won the most seats. The Congo became independent on 30 June 1960, with Kasavubu as President and Lumumba as Prime Minister.` },
    { s: 'TYLA', t: `Good — and that background matters for this essay, because you need to show what Mobutu was reacting against. Then the crisis?` },
    { s: 'MICHAEL', t: `Paragraph two — instability and Mobutu's rise. Kasavubu wanted a federal state and Lumumba a strong central government. Tshombe led the secession of Katanga. Mobutu seized power in a coup in 1965 and brought some stability — although it was based on authoritarianism.` },
    { s: 'TYLA', t: `Now the political policies.` },
    { s: 'MICHAEL', t: `Paragraph three — political. In 1967, Mobutu ended the Katanga rebellion and introduced a new constitution, making the Congo a one-party state under his party, the Popular Movement for the Revolution — the MPR. He regarded democracy as a foreign ideology and ruled as a traditional African chief. By rejecting the Western model of government he left behind, this was anti-colonial in nature.` },
    { s: 'TYLA', t: `[encouragingly] And the other side of the political argument?` },
    { s: 'MICHAEL', t: `He developed a personality cult — Mobutuism — and controlled all appointments and government revenue through a centralised government. And he was supported by the USA as an anti- communist ally. So you could argue that his power depended on a Western superpower.` },
    { s: 'TYLA', t: `That's a sharp point. From your own knowledge, historians call that neo-colonialism — formal independence, but continued dependence on foreign powers. Use it carefully as your "however." Economic?` },
    { s: 'MICHAEL', t: `Paragraph four — economic. Mobutu inherited a capitalist, single-product economy from Belgium, with the wealth owned by foreigners — the memo tags that as colonial. Then he nationalised the copper mining industry and used the profits to fund a ten-year industrialisation plan. He nationalised foreign-owned companies without compensation, and introduced Zaireanisation — replacing foreigners with Zairian nationals. All anti-colonial in nature.` },
    { s: 'TYLA', t: `And what happened in practice?` },
    { s: 'MICHAEL', t: `Paragraph five — the economic consequences. Companies went to Mobutu's allies and family. Zaireanisation led to corruption, theft and mismanagement, nepotism and kleptocracy. Mobutu was forced to introduce retrocession — inviting foreign owners back — but very few returned. High inflation collapsed the economy, and the Congo became dependent on foreign aid, for example from the World Bank.` },
    { s: 'TYLA', t: `[impressed] Good. And how do you use that paragraph in this essay — not the 2025 one?` },
    { s: 'MICHAEL', t: `The aim was anti-colonial — to take control from foreigners. But the result was that the Congo ended up dependent on Western aid again. So the policy was anti-colonial, but it didn't free the Congo from foreign influence.` },
    { s: 'TYLA', t: `[delighted] That's exactly the shift. Social?` },
    { s: 'MICHAEL', t: `Paragraph six — social. At independence in 1960, the Congo had only 14 university graduates out of 14 million people, because colonial education trained only a small elite. After independence, primary school enrolment rose from 1,6 million in 1960 to 4,6 million in 1974 — anti-colonial. But French remained the language of instruction and education still favoured the urban elite — colonial. And when Mobutu withdrew state funding, parents had to pay, primary education declined, and teachers and hospital staff went unpaid for months.` },
    { s: 'TYLA', t: `Cultural — the strongest part of an "agree" argument.` },
    { s: 'MICHAEL', t: `Paragraph seven — cultural. Western-style suits were outlawed and replaced with the abacost — "à bas le costume," "down with the suit." African music, art, dance and hairstyles were encouraged, along with nation building and unity. And from the 2025 episode — Authenticité: the Congo became Zaire in 1971, Leopoldville became Kinshasa, Christian names were replaced with African names, and Joseph-Désiré Mobutu became Mobutu Sese Seko.` },
    { s: 'TYLA', t: `[delighted] That's own knowledge earning its place. Renaming the country and its cities was a direct rejection of the colonial names. And the trap here?` },
    { s: 'MICHAEL', t: `Listing policies without judging them. Every paragraph has to say whether the policy was colonial or anti-colonial — and why.` },
    { s: 'TYLA', t: `Write the Zaireanisation paragraph with PEEL — the one where "failure" and "anti-colonial" meet.` },
    { s: 'MICHAEL', t: `"Point: Mobutu's economic policy of Zaireanisation was anti-colonial in nature, even though it failed in practice. Explain: At independence, the Congo's wealth was owned by Belgian and other foreign companies, so Mobutu aimed to place the economy in Congolese hands. Example: He nationalised the copper mining industry to fund a ten-year industrialisation plan, nationalised foreign-owned companies without compensation and replaced foreigners with Zairian nationals. However, these businesses were given to his allies and family, leading to corruption and mismanagement; retrocession failed, and the economy became dependent on foreign aid from institutions such as the World Bank. Link: Therefore, Zaireanisation was anti-colonial in its aims, but its failure left the Congo dependent on Western aid once again."` },
    { s: 'TYLA', t: `[impressed] That paragraph does what the question asks — it judges the nature of the policy, and then adds a "however" that strengthens your "largely agree." Conclusion?` },
    { s: 'MICHAEL', t: `"In conclusion, Mobutu Sese Seko's policies were largely anti-colonial in nature. He rejected Western-style democracy, took the economy out of foreign hands through nationalisation and Zaireanisation, expanded education, and restored African pride through Authenticité and the abacost. However, French- medium education continued to favour an elite, and the failure of his economic policies left the Congo dependent on Western aid and American support. Therefore, I largely agree that his policies were anti- colonial in nature, although some colonial patterns remained."` },
    { s: 'TYLA', t: `[delighted] That's Level 6 or 7 — forty-three to fifty. All four areas, a consistent line of argument, and the same judgement in the introduction and the conclusion.` },
    { s: 'MICHAEL', t: `And my first answer — "they failed, so they weren't anti-colonial"?` },
    { s: 'TYLA', t: `That essay would contain lots of correct facts, but the argument would answer a different question. The presentation level drops, and the content level drops because the question is only partly answered. That could easily cost you fifteen to twenty marks — the same lesson as the Vietnam essay in Part 1.` },
    { s: 'TYLA', t: `[warmly] Part 2 of the 2024 paper, done. Michael — Angola from beginning to end now.` },
    { s: 'MICHAEL', t: `1975 in the 2025 paper, and 1988 today. And Mobutu turned up in both.` },
    { s: 'TYLA', t: `[laughs] He gets around. Same tradition — top traps, in one go.` },
    { s: 'MICHAEL', t: `Source questions. "Forces in the final confrontation" — the USA backed South Africa but didn't fight; the fourth force is UNITA, not Savimbi. "Significance" means what it led to. Limitations are weaknesses — Goldberg was an anti-apartheid activist who wrote "our case was won." Reasons start with "to." Never quote the question's own words back. "Why was the photograph taken" — check who took it; a UN photographer shows the UN's role. Comparisons need both sources in every point. Read which side the question asks about — Cuba didn't attack the MPLA. And the paragraph explains how the defeat led to negotiations — don't retell the battle.` },
    { s: 'TYLA', t: `And the essay?` },
    { s: 'MICHAEL', t: `"Anti-colonial" is about a policy's nature — what it was aimed at — not whether it worked. Zaireanisation failed, but it was still anti-colonial. Cover all four areas, judge every policy as colonial or anti- colonial, and use Authenticité as own knowledge.` },
    { s: 'TYLA', t: `[delighted] Perfect. Next time, Part 3: Civil Society Protests — the March on Washington in 1963, and the Black Power Movement. Until then... [whispers] failed isn't the same as colonial — answer the question that's asked. [warmly] We'll catch you in the next episode.` },
  ],
},

{
  num: 5,
  file: 'History P1 Nov 2024 - Civil Society Protests 1 - Source Question 3 - The March on Washington',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 1, November 2024. Civil Society Protests, part one: Source-based Question 3, the March on Washington.` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to ECHOES OF THE PAST. This is the final part of History Paper 1, November 2024 — Part 3: Civil Society Protests.` },
    { s: 'MICHAEL', t: `And it's the USA in the 1960s again. In the 2025 paper, the source question was on King's non- violence, and the essay was on Black Power.` },
    { s: 'TYLA', t: `And 2024 gives us... the same two sides of the struggle, from different angles. The source question asks why civil rights marchers organised the March on Washington on 28 August 1963 — the day of the "I Have a Dream" speech. And the essay asks you to critically discuss whether Black Power took a militant approach.` },
    { s: 'MICHAEL', t: `[laughs] Black Power again. Different question. I know the rule now.` },
    { s: 'TYLA', t: `[laughs] Two episodes in a row, you've learned something. Same rules: I read each question with its marks, you answer, I mark you against the DBE memo, and the narrator reads every source in full. Pause and try each one yourself first.` },
    { s: 'TYLA', t: `Question 3. The key question: "Why did civil rights marchers in the USA organise the March on Washington on 28 August 1963?" Keep that word "why" in your head — it comes back in the paragraph. Source 3A is unusual: a recorded statement by the heads of the ten civil rights organisations that planned the march.` },
    { s: 'NARRATOR', t: `Source 3A. The extract below is from an audio recording, Tape 108/843, by the heads of the ten Civil Rights Movement organisations. It emphasises the importance of the march and calls for the discipline of marchers during the March on Washington for Jobs and Freedom on 28 August 1963.` },
    { s: 'NARRATOR', t: `The Washington March of 28 August is more than just a demonstration. It is a living petition in the flesh of the scores of thousands of citizens of both races who will be present from all parts of our country. It will be orderly, but not subservient (passive). It will be proud, but not arrogant (big-headed). It will be non-violent, but not timid (frightened). It will be unified in purposes and behaviour, not splintered (broken) into groups and individual competitors. It will be outspoken, but not raucous (violent).` },
    { s: 'NARRATOR', t: `We, the undersigned, who see the Washington March as wrapping (gathering) up the dreams, hopes, ambitions, tears and prayers of millions who have lived for this day, call upon the members, followers and well-wishers of our several organisations to make the March a disciplined and purposeful demonstration.` },
    { s: 'NARRATOR', t: `We call upon them all, black and white, to resist provocations (incitements) to disorder and to violence. We ask them to remember that evil persons are determined to smear this March and to discredit (doubt) the cause of equality by deliberate efforts to stir (cause) disorder. We call for self-discipline, so that no one in our own ranks (group), however enthusiastic, shall be the spark for disorder.` },
    { s: 'NARRATOR', t: `We call for resistance to the efforts of those who, while not enemies of the March as such, might seek to use it to advance causes not dedicated primarily to civil rights or to the welfare of our country. We ask each and every one in attendance in Washington or in spiritual attendance back home to place the cause above all else.` },
    { s: 'TYLA', t: `3.1.1. "Quote evidence from the source suggesting why organisers of the March on Washington regarded it as more than just a demonstration." One times one.` },
    { s: 'MICHAEL', t: `"The Washington March of 28 August is more than just a demonstration."` },
    { s: 'TYLA', t: `[laughs] That's the question, read back to me.` },
    { s: 'MICHAEL', t: `[groans] Again. I did that with Castro last episode. The why is the next sentence: "It is a living petition in the flesh of the scores of thousands of citizens of both races who will be present from all parts of our country."` },
    { s: 'TYLA', t: `One mark. A "living petition" — instead of signatures on paper, the people themselves are the petition. That's a beautiful phrase to understand.` },
    { s: 'MICHAEL', t: `[whispers] A living petition. I like that.` },
    { s: 'TYLA', t: `3.1.2. "State any TWO ways in the source in which the organisers wanted the March to be a disciplined and purposeful demonstration." Two times one.` },
    { s: 'MICHAEL', t: `"Orderly, but not subservient" and "non-violent, but not timid."` },
    { s: 'TYLA', t: `Two marks. The memo accepts any of those pairs — proud but not arrogant, unified, outspoken but not raucous — or "resist provocations to disorder and to violence," or "place the cause above all else."` },
    { s: 'TYLA', t: `3.1.3. "Who do you think are referred to as 'evil persons are determined to smear this March and to discredit the cause of equality by deliberate efforts', with regard to the preparations for the March on Washington in 1963?" One times two.` },
    { s: 'MICHAEL', t: `People like Malcolm X and the Nation of Islam — they criticised King and the march.` },
    { s: 'TYLA', t: `[curious] Read the last paragraph of the source again. There are two different groups in Source 3A.` },
    { s: 'MICHAEL', t: `"Those who, while not enemies of the March as such, might seek to use it to advance causes not dedicated primarily to civil rights..." Oh. That's a different group — people who aren't enemies, but might hijack the march for other causes. The "evil persons" are the enemies — people who want to discredit the cause of equality.` },
    { s: 'TYLA', t: `Exactly. So who wanted to stop equality?` },
    { s: 'MICHAEL', t: `"White supremacists and segregationists, such as the Ku Klux Klan, who wanted to provoke violence so that the march would be discredited."` },
    { s: 'TYLA', t: `[impressed] Two marks. The memo has the Ku Klux Klan, white supremacists, segregationists, conservatives and the right wing. Malcolm X criticised the march, but he didn't oppose equality — he wanted it faster and by different means.` },
    { s: 'MICHAEL', t: `And we covered that criticism in the 2025 episode.` },
    { s: 'TYLA', t: `We did. 3.1.4. "Comment on the implication of the statement, 'We ask each and every one in attendance … to place the cause (March on Washington) above all else.'" Two times two.` },
    { s: 'MICHAEL', t: `"It implied that marchers should fully support the objectives of the Civil Rights Movement and not put their own individual needs or causes above the needs of the movement. It also implied that unity was essential, because any disorder would be used to advance segregation and discrimination."` },
    { s: 'TYLA', t: `Four marks — that's the memo: fully support the objectives, don't put individual needs above the civil society, and don't advance the cause of segregation. Notice it ties straight back to that last paragraph about other causes.` },
    { s: 'TYLA', t: `Source 3B. This one describes the day itself — and the speech.` },
    { s: 'NARRATOR', t: `Source 3B. The source below is from the book, The Civil Rights Movement – An Illustrated History, by B Wilkinson. It focuses on how activities on the day of the March on Washington unfolded, including the delivery of the 'I Have a Dream' speech by Martin Luther King Jr.` },
    { s: 'NARRATOR', t: `On 28 August some 250 000 civil rights activists led by Martin Luther King Jr, converged (came together at) on the Lincoln Memorial to demand full civil rights for blacks. 'Jobs and freedom' was the cry of the marchers, including 50 000 whites. They were addressed by a phalanx (mass) of supporters including labour leader Walter Reuther, clergymen of many faiths, folk singer Joan Baez and gospel singer Mahalia Jackson.` },
    { s: 'NARRATOR', t: `The unforgettable closing address was delivered by Dr King, who would receive the Nobel Prize for Peace the following year. At the urging of Mahalia Jackson who called out from the dais (stage) 'Tell them about your dream, Martin! Tell them about the dream!' he put aside his prepared text (speech) and moved the immense (huge) crowd to tears and exaltation (praise) with the words, 'I Have a Dream this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident – that all men are created equal." … I Have a Dream that my four little children will one day live in a nation where they will not be judged by the colour of their skin but by the content of their character. I Have a Dream today.' …` },
    { s: 'NARRATOR', t: `'When we let freedom ring, when we let it ring from every village and every hamlet, from every state and every city, we will be able to speed up that day when all of God's children, black men and white men, Jews and Gentiles, Protestants and Catholics, will be able to join hands and sing in the words of the old Negro spiritual, "Free at last! Free at last! Thank God almighty, we are free at last." '` },
    { s: 'MICHAEL', t: `[amazed] Wait — the most famous part of the speech wasn't even planned? Mahalia Jackson shouted "Tell them about the dream," and he just... put his notes aside?` },
    { s: 'TYLA', t: `[warmly] That's what the source says. One of the most famous speeches in history, partly improvised. Now — 3.2.1. "Define the term civil rights in your own words." One times two.` },
    { s: 'MICHAEL', t: `"Civil rights are the basic rights that every citizen is entitled to enjoy, such as the right to vote, equal treatment before the law and freedom from discrimination."` },
    { s: 'TYLA', t: `Two marks. The memo: basic rights that everyone is entitled to enjoy. Your examples make it even stronger. 3.2.2. "What, according to the source, did the civil rights marchers demand when they converged on the Lincoln Memorial?" One times two.` },
    { s: 'MICHAEL', t: `"Full civil rights for blacks."` },
    { s: 'TYLA', t: `Two marks — or "jobs and freedom." It's a one-times-two question, so one correct answer gets both marks. 3.2.3. "Explain the significance of the presence of many leaders from various fields, who were given the opportunity to address the marchers." Two times two.` },
    { s: 'MICHAEL', t: `"There was a labour leader, Walter Reuther, clergymen of many faiths, folk singer Joan Baez and gospel singer Mahalia Jackson."` },
    { s: 'TYLA', t: `[encouragingly] That's who was there. "Significance" — what did it show?` },
    { s: 'MICHAEL', t: `Right — consequence again. "It showed that the March had support from many spheres of life — trade unions, religion and music. It also showed that the Civil Rights Movement was inclusive of all races, and it was a way to appeal for more support for the movement."` },
    { s: 'TYLA', t: `[delighted] Four marks — three memo points. And from your own knowledge, a labour leader on stage makes sense: it was the March for Jobs and Freedom.` },
    { s: 'MICHAEL', t: `Jobs and Freedom — so the unions belonged there.` },
    { s: 'TYLA', t: `3.2.4. "Comment on why the 'I Have a Dream' speech may be regarded as historically significant." Two times two.` },
    { s: 'MICHAEL', t: `"It gave hope to African Americans and reminded all Americans that they were equal under the Constitution. It was televised to an international audience, bringing more support to the movement, and it put pressure on Congress, contributing to the Civil Rights Act of 1964."` },
    { s: 'TYLA', t: `[impressed] Four marks. The memo also has that the speech made King famous and contributed to his Nobel Peace Prize — which the source mentions: "the following year," so 1964.` },
    { s: 'TYLA', t: `Source 3C is a photograph — and the examiners have helped you. Arrows point from the placards to six boxes, so you can read every slogan.` },
    { s: 'NARRATOR', t: `Source 3C. The photograph below is from a book titled The Day They Marched by DE Saunders. It shows civil rights marchers on the way to Washington, carrying placards during the March on Washington on 28 August 1963.` },
    { s: 'TYLA', t: `It's a crowded street of marchers walking towards the camera — men and women, mostly African American, with some white marchers among them. They're dressed smartly — suits, dresses, sunglasses. In the middle, a marcher carries a large American flag. Placards are held high all across the crowd. The narrator will read them.` },
    { s: 'NARRATOR', t: `NO US DOUGH TO HELP JIM CROW GROW. WE DEMAND AN END TO POLICE BRUTALITY NOW! WE MARCH FOR HIGHER MINIMUM WAGES COVERAGE FOR ALL WORKERS NOW! WE DEMAND VOTING RIGHTS NOW! WE MARCH FOR JOBS FOR ALL NOW! WE MARCH FOR INTEGRATED SCHOOLS NOW!` },
    { s: 'NARRATOR', t: `US: USA. DOUGH: MONEY.` },
    { s: 'MICHAEL', t: `So "No US dough to help Jim Crow grow" means — no American government money to support segregation?` },
    { s: 'TYLA', t: `Exactly. Jim Crow was the name for the segregation laws in the southern states. The placard says: don't let federal money fund segregation. 3.3.1. "State any TWO demands in the source that were made by the marchers who participated in the March on Washington." Two times one.` },
    { s: 'MICHAEL', t: `"Jobs and freedom" and "full civil rights for blacks."` },
    { s: 'TYLA', t: `[curious] Which source are you reading from?` },
    { s: 'MICHAEL', t: `[embarrassed] Source 3B. The question says "in the source" — that means 3C, the placards. "We demand voting rights now" and "We demand an end to police brutality now."` },
    { s: 'TYLA', t: `Two marks. Any two of the six placards. Each question tells you which source — answers from the wrong one score zero, even when they're true.` },
    { s: 'MICHAEL', t: `Read the source number in the question first. Got it.` },
    { s: 'TYLA', t: `3.3.2. "Why do you think the photographer decided to take this photograph?" Two times two.` },
    { s: 'MICHAEL', t: `"To show the demands that African Americans were making for their civil rights, and to show that the march was peaceful and non-violent."` },
    { s: 'TYLA', t: `[impressed] Four marks. The memo also accepts: to show that men and women marched, that black and white Americans attended, the large numbers, and the determination of African Americans to achieve equal rights. And the flag in the middle — that's a powerful detail. Marchers claiming their rights as Americans.` },
    { s: 'TYLA', t: `3.4. "Refer to Sources 3B and 3C. Explain how the information in Source 3B supports the evidence in Source 3C regarding the activities on the day of the March on Washington." Two times two.` },
    { s: 'MICHAEL', t: `Both sources in every point. "Source 3B states that 250 000 civil rights activists converged on the Lincoln Memorial, and Source 3C shows a large crowd of marchers. Source 3B says the marchers demanded full civil rights, jobs and freedom, and Source 3C shows marchers carrying placards with their demands, such as jobs for all."` },
    { s: 'TYLA', t: `[delighted] Four marks. You learned that one in Part 2. The memo has a third: both sources show the peaceful nature of the March. You could even add that Source 3B mentions 50 000 whites, and in Source 3C you can see white marchers in the crowd.` },
    { s: 'TYLA', t: `Source 3D is President Kennedy's statement on the march. Before the narrator reads it — like the 2025 paper, this source uses the word "Negro," which was common in the USA at the time. The addendum has a footnote explaining that it's a derogatory term used in the past for African Americans. The narrator reads the source exactly as it appears, and in your own answers, use "African Americans."` },
    { s: 'NARRATOR', t: `Source 3D. The source below is a media statement by President Kennedy published in The New York Times on 29 August 1963. It highlights how President Kennedy was impressed with the manner in which the March on Washington unfolded.` },
    { s: 'NARRATOR', t: `IMMEDIATE RELEASE. 28 AUGUST 1963. Office of the White House Press Secretary. THE WHITE HOUSE. STATEMENT BY THE PRESIDENT.` },
    { s: 'NARRATOR', t: `We have witnessed today in Washington tens of thousands of Americans … both Negro and white … exercising their right to assemble peaceably and direct the widest possible attention to a great national issue. What is different today is the intensified and widespread public awareness of the need to move forward in achieving these objectives … objectives which are older than this nation.` },
    { s: 'NARRATOR', t: `One cannot help but be impressed with the deep fervour (passion) and the quiet dignity that characterises the thousands who have gathered in the Nation's Capital from across the country to demonstrate their faith and confidence in our democratic form of government. The leaders of the organisation sponsoring the March and all who have participated in it deserve our appreciation for the detailed preparations that made it possible and for the orderly manner in which it has been conducted.` },
    { s: 'NARRATOR', t: `The Executive Branch of the Federal Government will continue its efforts to obtain increased employment and to eliminate discrimination in employment practices, two of the prime goals of the March. In addition, our efforts to secure the enactment (passing) of the legislative proposals made to the Congress will be maintained, including not only the Civil Rights Bill, but also proposals to broaden and strengthen the Manpower Development and Training Program, the Youth Employment Bill, amendments to the vocational education program, the establishment of a work-study program for high-school age youth and strengthening of the adult basic education provisions.` },
    { s: 'NARRATOR', t: `Negro: A derogatory name used in the USA in the past to refer to African (black) Americans.` },
    { s: 'TYLA', t: `3.5.1. "Give TWO reasons in the source which suggests that President Kennedy supported the March on Washington." Two times one.` },
    { s: 'MICHAEL', t: `"Exercising their right to assemble peaceably" and "direct the widest possible attention to a great national issue."` },
    { s: 'TYLA', t: `Two marks. The memo also accepts the "public awareness" line, the "deep fervour and quiet dignity" sentence, and "deserve our appreciation." 3.5.2. "According to the source, give TWO reasons why the President believed the organisers of the March deserved the appreciation from the USA's government." Two times one.` },
    { s: 'MICHAEL', t: `"Because they were exercising their right to assemble peaceably, and because they showed deep fervour and quiet dignity."` },
    { s: 'TYLA', t: `[curious] Find the word "appreciation" in the source. What comes straight after it?` },
    { s: 'MICHAEL', t: `"...deserve our appreciation for the detailed preparations... and for the orderly manner..." [laughs] The source gives the two reasons with the word "for." "For the detailed preparations that made it possible" and "for the orderly manner in which it has been conducted."` },
    { s: 'TYLA', t: `Two marks. When a question uses a word from the source, find that word — the answer is usually right next to it.` },
    { s: 'MICHAEL', t: `Like "to" for reasons in the Castro source.` },
    { s: 'TYLA', t: `Exactly. 3.5.3. "Explain the term discrimination in the context of the Civil Rights Movement in the USA." One times two.` },
    { s: 'MICHAEL', t: `"Discrimination was the unfair treatment of African Americans based on their race, such as segregation in schools, transport and public places, which the Civil Rights Movement protested against using non-violent methods."` },
    { s: 'TYLA', t: `[delighted] Two marks. The memo: all forms of racial inequality in the USA in the 1960s that the Civil Rights Movement protested against non-violently, or the separation of races based on skin colour. And you said "in the context" — you named the Civil Rights Movement.` },
    { s: 'MICHAEL', t: `"In the context" means name the movement.` },
    { s: 'TYLA', t: `3.5.4. "Quote any law or programme from the source that had to be passed by Congress to eliminate discrimination in employment." One times one.` },
    { s: 'MICHAEL', t: `"The Civil Rights Bill."` },
    { s: 'TYLA', t: `One mark. Or the Manpower Development and Training Program, the Youth Employment Bill — any one. Now 3.5.5. "Comment on why a historian would find this source useful when studying the reaction of the USA government to the March on Washington." Two times two.` },
    { s: 'MICHAEL', t: `"It's limited because Kennedy was a politician, so he may have said nice things to win votes..."` },
    { s: 'TYLA', t: `[laughs] Last episode, you gave me a strength when I asked for a limitation. Now?` },
    { s: 'MICHAEL', t: `[groans] The opposite. Useful means strengths. "The source is useful because it is a statement by President Kennedy himself, from the Office of the White House Press Secretary, so it shows the government's official reaction. It was released on the actual day of the March, 28 August 1963, and published the next day. It also shows how Kennedy appreciated the orderly way the march was conducted."` },
    { s: 'TYLA', t: `[impressed] Four marks. The memo also adds that it came from the president whose proposals ultimately led to the Civil Rights Act. A tip: for usefulness and reliability, run through who, what, when, where — and the question's own focus. Here, "the reaction of the USA government" — and the source is literally the government's reaction.` },
    { s: 'TYLA', t: `3.6. "Using the information in the relevant sources and your own knowledge, write a paragraph of about eight lines — about 80 words — explaining why civil rights marchers in the USA organised the March on Washington on 28 August 1963." Eight marks.` },
    { s: 'MICHAEL', t: `"The March on Washington was a great success. About 250 000 people attended, and Martin Luther King Jr delivered his 'I Have a Dream' speech. Kennedy praised the march, and it led to the Civil Rights Act of 1964 and the Voting Rights Act of 1965..."` },
    { s: 'TYLA', t: `[encouragingly] Remember the word I told you to keep in your head at the start?` },
    { s: 'MICHAEL', t: `"Why." [sighs] I wrote about the results — what happened after the march. The question asks for the reasons it was organised. Okay. "Civil rights marchers organised the March on Washington on 28 August 1963 to demand jobs and freedom for African Americans. They wanted to put pressure on the government to end racial discrimination and segregation under the Jim Crow laws. The organisers saw it as a 'living petition' that expressed the dreams, hopes and prayers of millions. Marchers carried placards demanding voting rights, integrated schools, higher minimum wages and an end to police brutality. About 250 000 black and white Americans gathered to show their unity and to hear leaders such as Martin Luther King Jr. They also aimed to increase employment and eliminate discrimination in employment, two of the march's prime goals."` },
    { s: 'TYLA', t: `[delighted] Level 3 — six to eight marks. First sentence answers "why," every sentence gives a reason, and you've used 3A, 3B, 3C, 3D and your own knowledge. And that first version?` },
    { s: 'MICHAEL', t: `Correct facts — about the wrong thing.` },
    { s: 'TYLA', t: `Exactly. Probably Level 1 — zero to two. The results of the march belong in a question about consequences, not causes.` },
  ],
},

{
  num: 6,
  file: 'History P1 Nov 2024 - Civil Society Protests 2 - Essay Question 6 - Black Power',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 1, November 2024. Civil Society Protests, part two: Essay Question 6, the Black Power Movement.` },
    { s: 'TYLA', t: `Section B. Question 6: Civil Society Protests — the Black Power Movement. "The Black Power Movement adopted a militant approach to challenge discrimination against African Americans in the USA in the 1960s. Critically discuss this statement in the context of the Black Power philosophy. Use relevant historical evidence to support your line of argument." Fifty marks.` },
    { s: 'MICHAEL', t: `Okay — not "to what extent was it successful," like 2025. This is "militant approach." Easy stance: "I agree. The Black Power Movement was militant. Malcolm X supported armed self-defence, the Black Panthers carried guns and patrolled the streets, and they rejected King's non-violence."` },
    { s: 'TYLA', t: `That's a stance. But what does "critically discuss" ask you to do?` },
    { s: 'MICHAEL', t: `From the 2025 Mobutu essay — test the statement. Weigh both sides.` },
    { s: 'TYLA', t: `So is there another side? Think about what the Black Panthers did in their communities — not just on the streets with the police.` },
    { s: 'MICHAEL', t: `[thoughtful] Feeding schemes. Childcare. Literacy projects. Teaching black history. That's... not militant. That's self-empowerment.` },
    { s: 'TYLA', t: `Exactly. And that's the memo's stance. The synopsis says the critical stance should be based on the Black Power philosophy and how it encouraged the militant approach as well as black self-empowerment programmes. The memo even tags its points — some "militant," some "self-empowerment." An essay that's only guns and patrols tells half the story.` },
    { s: 'MICHAEL', t: `And "in the context of the Black Power philosophy" — so I have to explain what the philosophy actually was.` },
    { s: 'TYLA', t: `Yes. Not just what they did — the ideas behind it: black pride, self-reliance, self-defence, communities controlling their own affairs. And one word to pin down before you start: militant. It doesn't simply mean "violent."` },
    { s: 'MICHAEL', t: `Militant means... aggressive, confrontational — ready to fight for a cause, including using force in self-defence.` },
    { s: 'TYLA', t: `Good. Black Power leaders mostly talked about self-defence — defending themselves against attacks and police brutality — rather than starting violence. That nuance makes your essay sound like a historian. Introduction?` },
    { s: 'MICHAEL', t: `"The statement that the Black Power Movement adopted a militant approach to challenge discrimination is largely, but not entirely, valid. Its philosophy of black pride, self-reliance and self-defence led leaders such as Malcolm X and the Black Panther Party to reject non-violence, support armed self- defence and confront police brutality directly. However, the same philosophy also inspired self- empowerment: Stokely Carmichael's call for black pride and community control, and the Black Panthers' Ten Point Plan, feeding schemes, childcare and literacy projects. Therefore, the movement was militant in its approach, but it was equally committed to uplifting African American communities."` },
    { s: 'TYLA', t: `[impressed] That's a critical stance — "largely, but not entirely" — built on the philosophy, previewing both sides. That's the line of argument.` },
    { s: 'TYLA', t: `Plan the body. Background first — briefly.` },
    { s: 'MICHAEL', t: `Paragraph one — conditions in the USA. African Americans were economically and politically crippled by the discriminatory Jim Crow laws. Many lived in ghettos and slums, with poor housing and under-resourced facilities, which damaged their sense of pride. They became impatient with the slow pace of change under the Civil Rights Movement, and police brutality fuelled nationalist feelings.` },
    { s: 'TYLA', t: `Good — and in this essay, that background explains why the movement became militant. Next, the philosophy.` },
    { s: 'MICHAEL', t: `Paragraph two — the Black Power philosophy. It promoted assertiveness, self-reliance and black pride. Stokely Carmichael called for African Americans to control the politics of their own communities and to seek freedom from white authority. It encouraged them to protect themselves against police brutality. It promoted the Afro hairstyle, African clothing, and the slogan "Black is beautiful."` },
    { s: 'TYLA', t: `And how does that paragraph serve your argument?` },
    { s: 'MICHAEL', t: `It shows both sides in the philosophy itself — self-defence is militant, but black pride and self- reliance are self-empowerment.` },
    { s: 'TYLA', t: `[delighted] That's exactly the link. Malcolm X next.` },
    { s: 'MICHAEL', t: `Paragraph three — Malcolm X, the militant side. He promoted armed self-defence against white oppression and argued that bloodshed was necessary for revolution — black nationalism. He encouraged African Americans to stand up against white authorities in pursuit of freedom, justice and equality by whatever means possible, and supported violence as self-defence against those who attacked them.` },
    { s: 'TYLA', t: `Is Malcolm X all militant, according to the memo?` },
    { s: 'MICHAEL', t: `No — he also promoted "Black Pride": self-esteem, self-respect and self-help, and self-discipline. That's self-empowerment.` },
    { s: 'TYLA', t: `Good. Carmichael?` },
    { s: 'MICHAEL', t: `Paragraph four — Stokely Carmichael. He believed the non-violent strategy had failed because violence against African Americans continued. He advocated the exclusion of white liberals from the movement, so that African Americans would lead their own struggle, and he was against the USA's involvement in the Vietnam War. Some Black Power voices even called for separation — splitting the USA into separate black and white states.` },
    { s: 'TYLA', t: `And the Panthers — the heart of this essay.` },
    { s: 'MICHAEL', t: `Paragraph five — the Black Panther Party, the militant side. In 1966, Bobby Seale and Huey Newton formed the Black Panther Party for Self-Defence to fight police brutality. Members patrolled the streets to monitor the police — "policing the police" — and to defend themselves.` },
    { s: 'TYLA', t: `And the other side?` },
    { s: 'MICHAEL', t: `Paragraph six — the Black Panther Party, self-empowerment. They adopted the Ten Point Plan, covering social, political and economic goals for uplifting African American communities. They ran feeding schemes that fought hunger among the youth, childcare projects that took care of medical needs, literacy projects, and they demanded that black history be taught in black schools.` },
    { s: 'TYLA', t: `[impressed] That's the memo, in a logical order: background, philosophy, Malcolm X, Carmichael, the Panthers' two faces. And the trap?` },
    { s: 'MICHAEL', t: `Telling the Black Power story without judging it. Every paragraph must say whether that evidence shows a militant approach, self-empowerment, or both.` },
    { s: 'TYLA', t: `Write the Black Panther paragraph with PEEL — the one that proves "not entirely."` },
    { s: 'MICHAEL', t: `"Point: The Black Panther Party shows that the Black Power Movement was militant, but not only militant. Explain: Its philosophy combined self-defence against police brutality with self-reliance and the upliftment of black communities. Example: Formed in 1966 by Bobby Seale and Huey Newton, the Black Panthers patrolled the streets to monitor police activities and defend themselves — a clearly militant approach. However, through their Ten Point Plan, they also ran feeding schemes, childcare and literacy projects, and demanded that black history be taught in black schools. Link: Therefore, while the Black Panthers adopted a militant approach to challenge discrimination, they also used self-empowerment programmes, which shows that the statement is only partly valid."` },
    { s: 'TYLA', t: `[delighted] Both sides inside one paragraph, and a link that judges the statement. Conclusion?` },
    { s: 'MICHAEL', t: `"In conclusion, the Black Power Movement did adopt a militant approach to challenge discrimination: frustrated by Jim Crow laws, police brutality and the slow pace of non-violent change, Malcolm X and the Black Panther Party embraced armed self-defence and direct confrontation with white authority. However, the Black Power philosophy was equally about black pride, self-reliance and community upliftment, seen in 'Black is beautiful' and the Black Panthers' feeding, childcare and literacy programmes. Therefore, the statement is largely, but not entirely, valid."` },
    { s: 'TYLA', t: `[impressed] That's Level 6 or 7 — forty-three to fifty. Same judgement in the introduction and the conclusion.` },
    { s: 'MICHAEL', t: `And my first version — "I agree, they were militant," guns and patrols all the way?` },
    { s: 'TYLA', t: `Correct facts, but only half the memo, and no real critical discussion. The content level drops because the self-empowerment side is missing, and the presentation level drops because the argument is one-sided. Again — fifteen to twenty marks gone.` },
    { s: 'TYLA', t: `[warmly] And that's it — History Paper 1, November 2024, complete. Michael, three parts. How do you feel?` },
    { s: 'MICHAEL', t: `Like the same mistakes kept trying to come back in different clothes.` },
    { s: 'TYLA', t: `[laughs] That's the most honest summary of exam technique I've ever heard. Same tradition — top traps, in one go.` },
    { s: 'MICHAEL', t: `Source questions. Don't quote the question's own words back — "more than just a demonstration" isn't evidence. Source 3A has two groups: the "evil persons" are enemies of equality — the Ku Klux Klan, segregationists — not the people who might use the march for other causes. "Significance" of the speakers means what it showed, not a list of names. "In the source" means that source — the placards, not Source 3B. Find the question's word in the source — "appreciation for." Useful means strengths — the opposite of last episode. And the paragraph asks why it was organised — reasons, not results.` },
    { s: 'TYLA', t: `And the essay?` },
    { s: 'MICHAEL', t: `"Critically discuss" means test the statement. Black Power was militant — Malcolm X, armed self- defence, the Panthers policing the police — but its philosophy was also about self-empowerment: black pride, "Black is beautiful," the Ten Point Plan, feeding schemes, childcare and literacy. Explain the philosophy, and judge every paragraph.` },
    { s: 'TYLA', t: `[delighted] Perfect. That's the whole of Paper 1 for 2024. Until next time... [whispers] there's always another side — find it before the examiner does. [warmly] We'll catch you in the next episode.` },
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

  console.log(`Echoes of the Past — History Paper 1 Nov 2024 (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

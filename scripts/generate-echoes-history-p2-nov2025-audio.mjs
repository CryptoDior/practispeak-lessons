/**
 * Echoes of the Past — Exam Walkthrough: History Paper 2, November 2025 — ElevenLabs audio generator (Eleven v4)
 * ----------------------------------------------------------------------------
 * Usage (from the project root, on your own machine with internet access):
 *
 *   node --env-file=.env.local scripts/generate-echoes-history-p2-nov2025-audio.mjs 1 2 3 4 5 6
 *
 * The paper is recorded in three topic parts (one PDF each). Each topic has two MP3s (essay first,
 * as in the PDFs), and each MP3 opens with Amelia announcing the title:
 *   Part 1 — Civil Resistance, 1970s to 1980s
 *     1. Essay Question 4 - Black Consciousness   — Intro + Parts 1-3
 *     2. Source Question 1 - COSATU              — Parts 4-8 + Outro
 *   Part 2 — The Coming of Democracy and Coming to Terms with the Past
 *     3. Essay Question 5 - The Road to Democracy — Intro + Parts 1-3
 *     4. Source Question 2 - The TRC             — Parts 4-9 + Outro
 *   Part 3 — The End of the Cold War and a New World Order
 *     5. Essay Question 6 - Gorbachev            — Intro + Parts 1-3
 *     6. Source Question 3 - BRICS               — Parts 4-8 + Outro
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
  console.error('Missing ElevenLabs key. Add ELEVENLABS_API_KEY_2 to .env.local and run with: node --env-file=.env.local scripts/generate-echoes-history-p2-nov2025-audio.mjs');
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
const OUT_DIR = path.join(ROOT, 'podcasts', 'Echoes-of-the-Past-History-P2-Nov-2025');
const TMP_ROOT = path.join(ROOT, 'podcasts', 'tmp', 'echoes-history-p2-nov2025');

// ─────────────────────────────────────────────────────────────────────────
const EPISODES = [

{
  num: 1,
  file: 'History P2 Nov 2025 - Civil Resistance 1 - Essay Question 4 - Black Consciousness',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 2, November 2025. Civil Resistance, part one: Essay Question 4, Biko and the Black Consciousness Movement.` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to ECHOES OF THE PAST. We've finished Paper 1, and today we start History Paper 2, November 2025.` },
    { s: 'MICHAEL', t: `[curious] Same format? A hundred and fifty marks, three hours, three source questions and three essays, and I answer three?` },
    { s: 'TYLA', t: `Exactly the same. Each question is fifty marks, and you must answer at least one source question and at least one essay. What's different is the content. Paper 2 is about South Africa — resistance to apartheid, the TRC, the road to democracy — and the end of the Cold War and the new world order.` },
    { s: 'MICHAEL', t: `Our own history. That makes it feel more real.` },
    { s: 'TYLA', t: `It does. And like Paper 1, we're splitting it into three parts by topic. Today is Part 1: Civil Resistance, 1970s to 1980s. The essay is on Steve Biko and Black Consciousness in the 1960s and 1970s, and the source question is on COSATU — the trade union federation — in the 1980s. And because the essay comes first in time, we're doing the essay first today. That way, the story runs in order.` },
    { s: 'MICHAEL', t: `Essay first. Got it.` },
    { s: 'TYLA', t: `One more thing before we start. In the chief markers' report we looked at, the essays scored much higher on average than the source questions, and many learners did better by answering two essays and one source question. So if essays are your strength, that's a strategy worth considering. As always, the narrator reads every source in full, and it's on screen. Pause and try each question yourself first.` },
    { s: 'TYLA', t: `Question 4. "The philosophy of Biko and the Black Consciousness Movement revived resistance to apartheid in South Africa from the 1960s to the 1970s. Do you agree with this statement? Use relevant evidence to support your line of argument." Fifty marks.` },
    { s: 'MICHAEL', t: `Before I start — Black Consciousness. That's not Black Power from Paper 1?` },
    { s: 'TYLA', t: `[delighted] Good catch — the markers say learners mix them up. Black Power was the African American movement in the USA in the 1960s. Black Consciousness was Steve Biko's movement in South Africa in the late 1960s and 1970s. Biko was influenced by ideas from Black Power, and both stressed black pride, but don't swap them in your essay.` },
    { s: 'MICHAEL', t: `[thoughtful] Okay. And I need to focus on one word in the question — "revived."` },
    { s: 'TYLA', t: `Why that word?` },
    { s: 'MICHAEL', t: `Because "revived" means brought back to life. So the essay has to show that resistance had died down first, and then explain how Black Consciousness brought it back.` },
    { s: 'TYLA', t: `[impressed] That's exactly the right reading. The memo calls that the political vacuum. Give me your introduction.` },
    { s: 'MICHAEL', t: `"Steve Biko was born in 1946 in the Eastern Cape. He studied medicine at the University of Natal, where he became involved in student politics..."` },
    { s: 'TYLA', t: `[encouragingly] Michael. Is this an essay about Biko's life?` },
    { s: 'MICHAEL', t: `[groans] No. It's about whether his philosophy revived resistance. That's the biography trap — I knew that was coming. Okay. "I agree that the philosophy of Biko and the Black Consciousness Movement revived resistance to apartheid in South Africa from the 1960s to the 1970s. After the ANC and PAC were banned in 1960, a political vacuum was left. Black Consciousness filled that vacuum by instilling black people with pride and self-belief, inspiring new organisations such as SASO and the BPC, mobilising students in the Soweto Uprising of 1976, and empowering workers and communities to challenge the apartheid state."` },
    { s: 'TYLA', t: `Clear stance, using the question's words. And you explained "revived" in the second sentence — the vacuum. Every paragraph now has one job: prove that Black Consciousness brought resistance back to life.` },
    { s: 'TYLA', t: `Now plan the body. Each point, and how it shows revival.` },
    { s: 'MICHAEL', t: `Paragraph one — the political vacuum. Short. After the ANC and PAC were banned in 1960 and their leaders were imprisoned, there was very little organised resistance inside South Africa.` },
    { s: 'TYLA', t: `Good — background only to explain "revived." Next.` },
    { s: 'MICHAEL', t: `Paragraph two — the philosophy itself. Black Consciousness instilled black people with self-belief to challenge the apartheid state — self-confidence, self-reliance, a sense of identity and pride. It told black people to reject self-pity, inferiority and domination by others. People stopped using skin-lightening products and wore Afro hairstyles.` },
    { s: 'TYLA', t: `And how is pride resistance?` },
    { s: 'MICHAEL', t: `[slowly, putting it together] Because apartheid relied on black people believing they were inferior. If you stop believing that, you start challenging the system. That's the link.` },
    { s: 'TYLA', t: `Exactly — say that in the essay. Next.` },
    { s: 'MICHAEL', t: `Paragraph three — new organisations. Black students broke away from NUSAS and formed the South African Students' Organisation, SASO, in 1968. The Black People's Convention, the BPC, in 1972, brought together students, churches, communities and trade unions. And the South African Students' Movement, SASM, also in 1972, spread BC ideas in schools. SASO was for university students; SASM was for schools. Then the Viva FRELIMO rallies in 1974, and when BC leaders were arrested, it heightened political activism.` },
    { s: 'TYLA', t: `Keep going.` },
    { s: 'MICHAEL', t: `Paragraph four — the Soweto Uprising. Bantu Education introduced Afrikaans as a medium of instruction in 1975, and the 50/50 circular was the trigger. Students and teachers rejected Afrikaans as the language of the oppressor. Many had been exposed to BC through SASO student teachers. SASM helped form the Soweto Students' Representative Council. On 16 June 1976, students protested peacefully, and the police opened fire. Hector Pieterson, aged thirteen, was one of the first to be killed. Students fled into exile, where they continued to resist.` },
    { s: 'TYLA', t: `That's the strongest paragraph for "revived." Next?` },
    { s: 'MICHAEL', t: `Paragraph five — community programmes. When Biko was banned to King William's Town, he focused on self-reliance projects — the Zanempilo health clinic, the Ginsburg Educational Trust, the Zimele Trust Fund. Black communities helped themselves without white assistance.` },
    { s: 'TYLA', t: `Resistance at the local level. And the last one?` },
    { s: 'MICHAEL', t: `Paragraph six — workers and the media. The Black Allied Workers' Union, BAWU, was aligned to BC, and the memo links BC to the 1973 Durban strikes. And newspapers like The World were sympathetic to BC.` },
    { s: 'TYLA', t: `[delighted] That plan covers the memo. One caution: the chief markers say BC essays often become a list of organisations and dates. What stops yours from being a list?` },
    { s: 'MICHAEL', t: `A link sentence at the end of every paragraph — "this revived resistance because..."` },
    { s: 'TYLA', t: `Write the Soweto paragraph with PEEL.` },
    { s: 'MICHAEL', t: `"Point: The Soweto Uprising of 1976 was the clearest sign that Black Consciousness had revived resistance to apartheid. Explain: BC ideas had given a new generation of students the confidence to challenge the state directly, instead of accepting their inferior education. Example: When the government enforced Afrikaans as a medium of instruction, students who had been exposed to BC through SASO and SASM organised through the Soweto Students' Representative Council. On 16 June 1976, thousands marched peacefully, and when the police opened fire, Hector Pieterson was among the first to be killed. Many students then went into exile and joined the liberation movements. Link: This shows that Black Consciousness turned a generation of students into active resisters, reviving the struggle against apartheid after the silence of the 1960s."` },
    { s: 'TYLA', t: `That's the paragraph. The point argues, the evidence proves it, and the link uses the question's word — "revived." Conclusion?` },
    { s: 'MICHAEL', t: `"In conclusion, the banning of the ANC and PAC in 1960 left a political vacuum that Biko and the Black Consciousness Movement filled. By restoring black pride and self-belief, creating organisations such as SASO, SASM and the BPC, inspiring the Soweto Uprising, and supporting community and worker initiatives, Black Consciousness brought resistance back to life. I therefore agree that it revived resistance to apartheid in the 1960s and 1970s."` },
    { s: 'TYLA', t: `[impressed] Written in full like that, with every paragraph linked to "revived," this essay sits at Level 6 or 7 — forty-three to fifty. If it turned into Biko's biography, or a list of organisations with no links, it would drop to "largely descriptive" — and into the twenties.` },
  ],
},

{
  num: 2,
  file: 'History P2 Nov 2025 - Civil Resistance 2 - Source Question 1 - COSATU',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 2, November 2025. Civil Resistance, part two: Source-based Question 1, COSATU.` },
    { s: 'TYLA', t: `Now we move forward to the 1980s — Section A, Question 1. The key question: "What were the different responses to the attempts of the Congress of South African Trade Unions, COSATU, to mobilise South African workers in the 1980s?" Keep the word "responses" in mind. Source 1A.` },
    { s: 'NARRATOR', t: `Source 1A. The extract below was taken from an article titled, 'The Struggle: Power and Politics in South Africa's Black Trade Unions', written by A Cowell, a journalist, and appeared in The New York Times magazine on 15 June 1986. It sheds light on the formation of COSATU in 1985.` },
    { s: 'NARRATOR', t: `In November 1985, more than 33 unions joined together to form the Congress of South African Trade Unions (COSATU), the largest federation (grouping) of black workers in South African history, with a total membership of some 500 000 workers.` },
    { s: 'NARRATOR', t: `Far from being tamed (obedient), COSATU and other black labour groups have sought (wanted) the political high ground in what unionists' call 'the struggle' against white rule, desperately seeking to catch up with the protests of the youthful and violent black radicals of the townships. COSATU has forged (established) important links with the United Democratic Front, the largest non-parliamentary opposition group in the country, and has allied itself to the aims, if not formally to the structures, of the banned and exiled African National Congress, which is dedicated to overthrowing the white government by force.` },
    { s: 'NARRATOR', t: `In a country that is Africa's most industrialised nation, the challenge now posed by the black unions is profound (overpowering); holding out the possibility of a large-scale withdrawal of labour from a modern economy that is increasingly dependent on black skills. Farm and domestic workers are not protected under South Africa's new labour laws. In other areas, from the country's textile mills to its steelworks, the unions are strong and growing. And, in the critical mining industries, labour leaders claim the support of almost half the 600 000-man black work force.` },
    { s: 'TYLA', t: `1.1.1: "Quote evidence from the source which suggests that COSATU was the largest federation of black worker unions in South Africa in November 1985." One times two.` },
    { s: 'MICHAEL', t: `"... the largest federation (grouping) of black workers in South African history ..."` },
    { s: 'TYLA', t: `[encouragingly] That says it was the largest. The question asks for evidence that suggests it — what proves its size?` },
    { s: 'MICHAEL', t: `[hesitantly] Oh — the numbers. "... more than 33 unions joined together ..." or "... with a total membership of some 500 000 workers."` },
    { s: 'TYLA', t: `Two marks. Quoting the claim itself doesn't prove it — the evidence is the numbers. 1.1.2: "Define the term non-parliamentary opposition group in your own words." One times two.` },
    { s: 'MICHAEL', t: `An organisation that opposes the government but isn't a member of parliament — like the UDF, fighting against apartheid outside the official system.` },
    { s: 'TYLA', t: `Two marks. 1.1.3: "Explain what can be inferred by the statement, 'COSATU ... has allied itself to the aims, if not formally to the structures, of the banned and exiled African National Congress ...'" One times two.` },
    { s: 'MICHAEL', t: `COSATU and the banned ANC shared the same goal of ending apartheid — so COSATU wasn't focused only on labour issues any more, but on the liberation struggle too.` },
    { s: 'TYLA', t: `[impressed] Two marks. The memo also accepts that COSATU believed in the aims of the Freedom Charter. 1.1.4: "Using the information in the source and your own knowledge, state why you think industrial trade unions grew stronger in the 1980s." Two times two.` },
    { s: 'MICHAEL', t: `There were many workers in industries and factories, because South Africa was Africa's most industrialised country. And trade unions were legal and could hold meetings, while political parties were banned — so the unions became a channel for resistance.` },
    { s: 'TYLA', t: `Four marks. Also accepted: the 1980s were a period of heightened political activism; shop stewards recruited more workers; and exploited workers joined the unions.` },
    { s: 'TYLA', t: `Source 1B is a photograph.` },
    { s: 'NARRATOR', t: `Source 1B. The photograph below was taken during a rally organised by the Congress of South African Trade Unions (COSATU) in the Western Cape on 1 May 1986. It shows workers participating in a protest under the banner of the Commercial, Catering and Allied Workers Union of South Africa (CCAWUSA), which was an affiliate of COSATU.` },
    { s: 'TYLA', t: `In the photograph, a huge crowd of workers fills a stadium. Many raise clenched fists, and they carry a banner that reads "FORWARD WITH THE WORKERS' STRUGGLE," under a CCAWUSA sign that also shows clenched fists. 1.2.1: "Comment on the significance of holding this COSATU rally on 1 May 1986." One times two.` },
    { s: 'MICHAEL', t: `[excitedly] The first of May... International Workers' Day — May Day. So South African workers were joining workers around the world in celebrating it, and uniting in the struggle for their rights.` },
    { s: 'TYLA', t: `Two marks. When a question highlights a date, ask yourself: what's special about that day? 1.2.2: "What is inferred by the words, 'FORWARD WITH THE WORKERS' STRUGGLE', in the context of mass action against the apartheid government in the 1980s?" One times two.` },
    { s: 'MICHAEL', t: `It's a call for workers to keep fighting against the apartheid government's repressive labour laws.` },
    { s: 'TYLA', t: `Two marks. 1.2.3: "Explain the symbolism of the 'clenched fists' in the banner and some of the workers in the photograph." One times two.` },
    { s: 'MICHAEL', t: `It's a symbol of the liberation struggle — the unity, determination and power of the workers against the apartheid government.` },
    { s: 'TYLA', t: `Two marks. Question 1.3: "Refer to Sources 1A and 1B. Explain how the information in Source 1A supports the visual evidence in Source 1B regarding COSATU's mass mobilisation against the apartheid government in the 1980s." Two times two.` },
    { s: 'MICHAEL', t: `Source 1A says COSATU had a membership of some 500 000 workers, and Source 1B shows a huge crowd of workers at the rally. And Source 1A says COSATU was a federation of more than 33 unions, and Source 1B shows CCAWUSA, one of the unions affiliated to COSATU.` },
    { s: 'TYLA', t: `[delighted] Four marks. The memo also accepts that both sources show workers' commitment to the struggle and the importance of unity among unions.` },
    { s: 'TYLA', t: `Now the responses begin. Source 1C is from a former member of the police riot unit. It describes a violent clash.` },
    { s: 'NARRATOR', t: `Source 1C. The extract below was taken from a memoir, War in Peace: The Truth about the South African Police's East Rand Riot Unit 1986–1994, written by N Howarth, a former East Rand Riot Squad member. It explains how the crowd control riot unit clashed with COSATU members who were conducting a living wage campaign at the Germiston railway station in March 1987.` },
    { s: 'NARRATOR', t: `COSATU members had been out on strike for several weeks in March 1987 over grievances that none of us either understood or cared about. It turned out they were conducting a 'living wage' campaign heavily backed by the African National Congress (ANC). There was a security clampdown on all such activities but this didn't bother COSATU, which was busy organising and mobilising union members to take part in the campaign. This added to the number of strikes and stoppages around the country that were already crippling (weakening) the South African economy. A large percentage of the strikers, some 18 000, belonged to South African Transport (SAT).` },
    { s: 'NARRATOR', t: `I was part of a group of 14 young recruits, none older than myself, who had formed a line at the top of the stairs that led up to the station platform from an underground tunnel. The thunder of political jingles (struggle songs) being sung in the deep angry voices of 300 strikers resonated (echoed) down the tunnel and up the stairway towards us. At first, we could not see them, but the sound almost scared the life out of me. Then they appeared at the bottom of the stairs and swung in our directions. It was a terrifying sight. They were armed with knobkerries, whips, knives and a whole variety of vicious (dangerous) weapons.` },
    { s: 'NARRATOR', t: `We clashed with the mob in hand-to-hand fighting. I was stabbed in the arm without even knowing it and there was blood all over me. Nevertheless, the physical damage was minor. I punched, kicked and fought with everything I had. Fortunately, the crowd began to disperse (go away) as we got the better of them. The next day COSATU held a meeting at the World Centre in Germiston, which was about 500 metres down the road from the railway station.` },
    { s: 'NARRATOR', t: `Memoir: a book written by a person about their past experiences.` },
    { s: 'TYLA', t: `1.4.1: "Identify a campaign in the source that COSATU members conducted through a strike that took several weeks in March 1987." One times one.` },
    { s: 'MICHAEL', t: `The "living wage" campaign.` },
    { s: 'TYLA', t: `One mark. 1.4.2: "Explain the term grievances in the context of COSATU's activities against the apartheid government." One times two.` },
    { s: 'MICHAEL', t: `The complaints and demands COSATU members had against the apartheid labour laws — like better wages.` },
    { s: 'TYLA', t: `Two marks. 1.4.3: "Quote THREE pieces of evidence from the source which suggest that the 'young recruits' were terrified." Three times one.` },
    { s: 'MICHAEL', t: `"... the sound almost scared the life out of me." "It was a terrifying sight." And "They were armed with knobkerries, whips, knives and a whole variety of vicious weapons."` },
    { s: 'TYLA', t: `Three marks. 1.4.4: "Comment on the limitations of this source to a historian researching the clash between COSATU and the East Rand Riot Squad in March 1987." Two times two.` },
    { s: 'MICHAEL', t: `[confidently] Limitations — what it can't tell the historian about their topic. The historian is researching a clash between two sides, and this source gives only one side — a member of the riot unit. So it's one-sided against the strikers; we never hear COSATU's version. And it's a memoir, written years later, so details might have been forgotten or distorted.` },
    { s: 'TYLA', t: `[impressed] Four marks — and you used the footnote to explain why a memoir has limits. The memo also accepts that it's the view of a young, inexperienced recruit, and that the language is exaggerated — "the thunder of political jingles," "blood all over me." Notice also how the author describes the strikers' grievances as things "none of us either understood or cared about." That tells you a lot about his perspective.` },
    { s: 'TYLA', t: `Source 1D is a confession — by a former Security Branch policeman.` },
    { s: 'NARRATOR', t: `Source 1D. The source below was extracted from a book titled Confessions of a STRATCOM Hitman, by P Erasmus, former Security Branch policeman. It explains how the Security Branch officers raided and destroyed COSATU House in 1987.` },
    { s: 'NARRATOR', t: `On 23 April 1987, after a shooting incident involving members of the Riot Unit, COSATU HOUSE was raided by a throng (crowd) of policemen who, having secured the building, handed it over to the Security Branch. What followed was the demolition (destruction) job, the likes of which were unprecedented (extraordinary) and unparalleled (unmatched). It was as if the accumulated (increased) rage (anger) and frustration of the police, caught as usual in the middle of the ongoing political conflict, were vented (expressed) on the building and its contents.` },
    { s: 'NARRATOR', t: `Doors were promptly closed, and then filing cabinets filled with documents and records rained (fell) down like confetti (scatterings of pieces of paper) from balconies of the ten-storey building, office equipment was smashed, personal computers were tossed (thrown) out of the windows and over the balconies into the courtyard, video monitors and an expensive security system were destroyed, and what wasn't smashed or broken was stolen. ... I found COSATU's printing machine in the basement and I smashed the plates and control panel.` },
    { s: 'NARRATOR', t: `Some hours later I returned to the basement to find that the printing machine had been completely destroyed, and cars in the basement had likewise been seriously damaged. Security Branch members started a fire on the eighth floor and, when the Johannesburg Fire Department arrived, fire- fighters ended up running from floor to floor, they were told [by Security Branch members] that the blaze was upstairs, then downstairs, then out and so on.` },
    { s: 'NARRATOR', t: `STRATCOM (Strategic Communication): a secret apartheid-era unit that engaged in propaganda, disinformation and violence against anti-apartheid activists and organisations.` },
    { s: 'TYLA', t: `1.5.1: "According to the source, why was COSATU House raided by policemen on 23 April 1987?" One times two.` },
    { s: 'MICHAEL', t: `"... after a shooting incident involving members of the Riot Unit ..."` },
    { s: 'TYLA', t: `Two marks. 1.5.2: "Using the information in the source and your own knowledge, explain why the demolition of COSATU House by the Security Branch was described as 'unprecedented and unparalleled'." Two times two.` },
    { s: 'MICHAEL', t: `The source explains the words in brackets — extraordinary and unmatched. So such brutal force had never been seen before — everything in and around the building was destroyed. And the police clearly wanted to shut COSATU down completely.` },
    { s: 'TYLA', t: `Four marks. The memo also accepts that the police's behaviour was reckless, criminal and unjustified. 1.5.3: "List FOUR ways in the source in which the police demolished the building and its contents during the COSATU House raid." Four times one.` },
    { s: 'MICHAEL', t: `Filing cabinets rained down from the balconies. Office equipment was smashed. Computers were tossed out of the windows. And video monitors and the security system were destroyed.` },
    { s: 'TYLA', t: `Four marks — and four is exactly right. Others in the source: things were stolen, the printing machine was destroyed, cars in the basement were damaged, and a fire was started. 1.5.4: "Why do you think that the Security Branch members misled the fire fighters where the fire actually started?" One times two.` },
    { s: 'MICHAEL', t: `[seriously] So the fire would keep spreading and destroy everything in COSATU House — and so that the police could cover their tracks and avoid being implicated.` },
    { s: 'TYLA', t: `[delighted] Two marks, with a spare.` },
    { s: 'TYLA', t: `1.6: "Using the information in the relevant sources and your own knowledge, write a paragraph of about eight lines, about eighty words, explaining what the different responses were to the attempts of COSATU to mobilise South African workers in the 1980s." Eight marks.` },
    { s: 'MICHAEL', t: `"The apartheid government responded harshly to COSATU. The East Rand Riot Unit clashed with COSATU strikers at Germiston station during the living wage campaign, and the Security Branch raided COSATU House, destroyed its equipment and records, and set it on fire. Leaders were detained and silenced."` },
    { s: 'TYLA', t: `[encouragingly] Accurate — but read the question one more time. "Different responses." How many kinds of response did you give?` },
    { s: 'MICHAEL', t: `[groans] One. Only the government's. But "different" means more than one side. Workers responded too — by joining.` },
    { s: 'TYLA', t: `Exactly. The memo includes support as well as repression.` },
    { s: 'MICHAEL', t: `"COSATU's efforts to mobilise workers drew very different responses. Many workers and unions responded with support: more than 33 unions joined to form COSATU, its membership grew to some 500 000, and it formed links with the UDF and the aims of the banned ANC. Communities and students also supported its campaigns. The apartheid state, however, responded with repression. The East Rand Riot Unit clashed with striking workers during the living wage campaign, and the Security Branch raided COSATU House, destroyed it and set it alight. The government also backed rival unions such as UWUSA."` },
    { s: 'TYLA', t: `[impressed] Level 3 — six to eight marks. Two sides of the response — support and repression — evidence from Sources 1A, 1C and 1D, and own knowledge: community support and UWUSA, the union aligned with the IFP that the government backed to counter COSATU. The memo also mentions the state detaining, silencing and killing some union leaders.` },
    { s: 'TYLA', t: `[warmly] Part 1 of Paper 2, done. Michael — how did it feel doing South African history?` },
    { s: 'MICHAEL', t: `[sighs] Heavier, honestly. Reading a policeman describe destroying COSATU House — that's not abstract. But it made the questions easier to understand.` },
    { s: 'TYLA', t: `That's a good point. Same tradition — top traps from today, in one go.` },
    { s: 'MICHAEL', t: `Essay first. "Revived" means show the political vacuum after 1960, then how Black Consciousness brought resistance back to life — and link every paragraph to that word. Don't write Biko's biography. Don't turn it into a list of organisations. And Black Consciousness is South Africa — Black Power is the USA.` },
    { s: 'TYLA', t: `And the source question?` },
    { s: 'MICHAEL', t: `Evidence that "suggests" something is the proof, like the numbers — not the claim itself. When a date is highlighted, ask why it matters — 1 May is International Workers' Day. Use the bracketed meanings in the sources — "unprecedented" means extraordinary. Limitations — the riot squad memoir gives only one side of a two-sided clash, it's exaggerated, and memoirs can be distorted. "List FOUR" means four. And "different responses" means more than one side — support and repression.` },
    { s: 'TYLA', t: `[delighted] Perfect. Next time, Part 2: The Coming of Democracy — the TRC and the amnesty applications in the case of Reverend Tshenuwani Farisani, and the essay on whether the road to democracy was really non-violent. Until then... [whispers] read every word of the question — one word can double your answer. [warmly] We'll catch you in the next episode.` },
  ],
},

{
  num: 3,
  file: 'History P2 Nov 2025 - Coming of Democracy 1 - Essay Question 5 - The Road to Democracy',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 2, November 2025. The Coming of Democracy, part one: Essay Question 5, the road to democracy.` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to ECHOES OF THE PAST. This is History Paper 2, November 2025, Part 2: The Coming of Democracy to South Africa and Coming to Terms with the Past.` },
    { s: 'MICHAEL', t: `So — the negotiations that ended apartheid, and then the Truth and Reconciliation Commission.` },
    { s: 'TYLA', t: `Exactly. The essay asks whether the road to democracy between 1990 and 1994 was really non- violent. The source question asks why the TRC rejected the amnesty applications of the policemen who tortured Reverend Tshenuwani Farisani. And just like Part 1, we're doing the essay first, because the negotiations of 1990 to 1994 came before the TRC hearings.` },
    { s: 'MICHAEL', t: `Time order again. Makes sense.` },
    { s: 'TYLA', t: `Pause and try each question yourself first. Let's go.` },
    { s: 'TYLA', t: `Question 5. "The road to democracy was characterised by a non-violent process of negotiation. Critically discuss this statement with reference to the period between 1990 and 1994." Fifty marks.` },
    { s: 'MICHAEL', t: `[confidently] South Africa's miracle. Mandela was released, everyone sat around the table, and we got a peaceful transition. I agree completely — it was non-violent.` },
    { s: 'TYLA', t: `[encouragingly] Michael. What did "critically discuss" mean in the Congo essay in Paper 1?` },
    { s: 'MICHAEL', t: `[groans] Test the statement. Weigh both sides. I just fell for the same trap with a different country.` },
    { s: 'TYLA', t: `You did. And this time it's an even bigger trap, because "peaceful transition" is how many people describe it today. What does the memo say?` },
    { s: 'MICHAEL', t: `I'm guessing — negotiations did happen, but there was also a lot of violence.` },
    { s: 'TYLA', t: `Exactly. The memo's synopsis says: candidates must show that there was a non-violent process of negotiation, but at the same time there was much violence that almost derailed the negotiations. So the statement is only partly true.` },
    { s: 'MICHAEL', t: `Okay. Introduction: "The statement that the road to democracy was characterised by a non- violent process of negotiation is only partly valid. Between 1990 and 1994, the National Party, the ANC and other parties did negotiate peacefully through agreements such as the Groote Schuur and Pretoria Minutes, CODESA and the Record of Understanding. However, this process was repeatedly threatened by violence — including the Boipatong and Bisho massacres, the assassination of Chris Hani, and the AWB invasion of the World Trade Centre — which almost derailed the negotiations before the 1994 elections."` },
    { s: 'TYLA', t: `[impressed] That's a critical stance: "only partly valid," and it previews both strands. Here's a tip for this essay — the memo actually tags each event as "non-violent negotiations" or "violence." Your essay can follow that rhythm: a step forward at the table, then violence that threatens it, then the parties returning to talks.` },
    { s: 'TYLA', t: `Plan it in time order. Give me the events and tag each one — negotiation or violence.` },
    { s: 'MICHAEL', t: `1989 to 1990. FW de Klerk took over from PW Botha in 1989 and introduced reforms. The ANC, PAC and SACP were unbanned, and Nelson Mandela was released on 11 February 1990 — that opened the way to negotiations. But the first talks, planned for 31 March 1990, were postponed after police killed defenceless demonstrators in Sebokeng — violence. Then the Groote Schuur Minute, 2 May 1990 — both sides committed to ending violence and negotiating. A hand grenade attack on the Melrose House Museum, May 1990 — violence. The Pretoria Minute, August 1990 — the ANC suspended the armed struggle, and the government ended the State of Emergency.` },
    { s: 'TYLA', t: `That's the rhythm. Keep going.` },
    { s: 'MICHAEL', t: `1991. The National Peace Accord, signed by 27 organisations on 14 September 1991. Then CODESA 1, 21 December 1991 — 19 parties, but not the Conservative Party or PAC. The NP accused the ANC of keeping MK as a "private army." But the parties signed the Declaration of Intent to draw up a new constitution and interim government.` },
    { s: 'TYLA', t: `Progress at the table. Then 1992?` },
    { s: 'MICHAEL', t: `1992. De Klerk lost three by-elections to the CP, so he held a whites-only referendum — a landslide "yes" for continuing negotiations. CODESA 2 in May 1992 ended in deadlock over power-sharing. Then the Boipatong Massacre, 17 June 1992, with suspicions of a "Third Force." The ANC called for rolling mass action. The Bisho Massacre, 7 September 1992. But then the Record of Understanding, 26 September 1992 — Roelf Meyer and Cyril Ramaphosa recommitted to negotiations.` },
    { s: 'TYLA', t: `Notice what Bisho did — the memo says after it, the ANC favoured the non-violent negotiation process. Violence pushed people back to the table. Next?` },
    { s: 'MICHAEL', t: `1993. Joe Slovo's sunset clause — parties with more than five percent would form a Government of National Unity. Multi-party negotiations resumed at the World Trade Centre in April 1993. Then Chris Hani was assassinated on 10 April 1993, and Mandela addressed the nation on television to calm it. The AWB stormed the World Trade Centre with an armoured vehicle on 25 June 1993. And more massacres — St James Church in July 1993, the Heidelberg Tavern in December 1993.` },
    { s: 'TYLA', t: `[seriously] The process came very close to collapse. And 1994?` },
    { s: 'MICHAEL', t: `1994. The election date was set for 27 to 29 April 1994 despite the Bophuthatswana violence in March 1994 and the Shell House massacre on 28 March 1994. The IFP joined the elections on the eve of the vote. There were car bombs outside ANC offices and at Jan Smuts Airport, but the elections went ahead, and Mandela became the first democratic president, with Thabo Mbeki and FW de Klerk as deputies in the GNU.` },
    { s: 'TYLA', t: `[delighted] That's the whole memo, in order, with both strands. And look at the pattern your evidence shows — negotiation never stopped completely, but violence kept threatening it. That's your argument.` },
    { s: 'TYLA', t: `Write the 1993 paragraph with PEEL — the year the process came closest to collapse.` },
    { s: 'MICHAEL', t: `"Point: The events of 1993 show that violence came close to derailing the negotiation process, even though the commitment to negotiate survived. Explain: Just as multi-party negotiations resumed, extremists tried to provoke a civil war that would end the talks. Example: On 10 April 1993, Chris Hani, the popular leader of the SACP, was assassinated, and the country was close to an explosion of violence. Mandela addressed the nation on television to calm it. Two months later, on 25 June 1993, the AWB stormed the World Trade Centre with an armoured vehicle while negotiations were under way. Link: These events prove that the road to democracy was not simply non-violent; rather, negotiations continued in spite of violence that repeatedly threatened to destroy them."` },
    { s: 'TYLA', t: `[impressed] That's the critical argument in one paragraph: violence and negotiation, and a judgement about how they relate. Conclusion?` },
    { s: 'MICHAEL', t: `"In conclusion, the period from 1990 to 1994 did see a genuine process of negotiation, through the Groote Schuur and Pretoria Minutes, CODESA, the Record of Understanding and the sunset clause, which led to the first democratic elections in April 1994. However, massacres such as Boipatong, Bisho and Shell House, the assassination of Chris Hani, and the AWB invasion of the World Trade Centre show that the road to democracy was marked by serious violence. The statement is therefore only partly valid: democracy was achieved through negotiation, but not through a non-violent process."` },
    { s: 'TYLA', t: `[delighted] That's a sustained line of argument from the first sentence to the last. Written in full, that's Level 6 or 7. The "peaceful miracle" version would leave half the memo out and drop the content level — even with perfect dates.` },
  ],
},

{
  num: 4,
  file: 'History P2 Nov 2025 - Coming of Democracy 2 - Source Question 2 - The TRC',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 2, November 2025. The Coming of Democracy, part two: Source-based Question 2, the Truth and Reconciliation Commission.` },
    { s: 'TYLA', t: `[softly] Now Section A, Question 2. Before we start, a short note. These sources are about the torture of Reverend Tshenuwani Farisani by apartheid security police, and they describe it in detail. They're in the exam because the TRC was about facing the truth of what happened. Our narrator will read them exactly as they are in the paper. If you need to pause, pause.` },
    { s: 'MICHAEL', t: `[softly] Understood.` },
    { s: 'TYLA', t: `One more thing before the sources: the TRC had three committees. The Human Rights Violations Committee heard the testimony of victims. The Amnesty Committee decided whether perpetrators would receive amnesty. And the Reparation and Rehabilitation Committee dealt with support for victims. And the markers warn that learners confuse amnesty — a legal pardon in exchange for the full truth — with reconciliation, which is the healing of relationships. Keep those apart.` },
    { s: 'TYLA', t: `The key question: "Why did the Truth and Reconciliation Commission reject the amnesty applications of the perpetrators who tortured Reverend Tshenuwani Farisani?" Source 2A.` },
    { s: 'NARRATOR', t: `Source 2A. The extract below was taken from the funeral programme of Reverend Tshenuwani Farisani. The funeral took place on 7 June 2025. It focuses on Farisani's political activism against the apartheid government which led to his imprisonment in the 1980s.` },
    { s: 'NARRATOR', t: `Farisani was a founding member of the Black People's Convention (BPC) and served as its president from 1973 to 1975. He worked closely with Stephen Bantu Biko and other leaders of the Black Consciousness Movement (BCM). He co-founded the Black Evangelical Youth Organisation (BEYO) in the 1970s with current South African President Matamela Cyril Ramaphosa, Tshifhiwa Muofhe and Lawrence Khorombi. This initiative evolved into the Bold Evangelical Christian Organisation (BECO) and later the Evangelical Christian Outreach (ECHO).` },
    { s: 'NARRATOR', t: `Between 1977 and 1987, Farisani was detained without trial on four separate occasions as a result of his outspoken opposition to apartheid. During these incarcerations (imprisonment), he was subjected to brutal torture, including beatings, electric shocks and prolonged isolation. His 1982 detention, one of the most widely documented cases of political abuse under apartheid, drew international condemnation (criticism). Amnesty International, having declared him a prisoner of conscience, spearheaded (organised) a global campaign demanding his release, which ultimately succeeded.` },
    { s: 'NARRATOR', t: `His suffering became emblematic (symbolic) of the regime's cruelty and helped expose the extent of state-sponsored violence. In 1986, Farisani testified before US congressional committees, recounting his experiences in chilling detail; a testimony that led to formal resolutions in both the Senate and House of Representatives urging the South African government to end its persecution of him and other activists.` },
    { s: 'NARRATOR', t: `Amnesty International: a global human rights organisation that works to protect and promote human rights around the world.` },
    { s: 'TYLA', t: `And notice the link to Part 1 — Farisani was a founder of the BPC, one of the Black Consciousness organisations in our essay. 2.1.1: "Name, from the source, TWO organisations within the Black Consciousness Movement in which Farisani served as a founding member." Two times one.` },
    { s: 'MICHAEL', t: `The Black People's Convention, and the Black Evangelical Youth Organisation.` },
    { s: 'TYLA', t: `Two marks. 2.1.2: "State any THREE types of abuses, according to the source, that Farisani was subjected to during his imprisonment between 1977 and 1987." Three times one.` },
    { s: 'MICHAEL', t: `Beatings, electric shocks, and prolonged isolation.` },
    { s: 'TYLA', t: `Three marks. 2.1.3: "Explain why Amnesty International declared Farisani 'a prisoner of conscience'." One times two.` },
    { s: 'MICHAEL', t: `Because he was imprisoned only for the peaceful expression of his political beliefs — his opposition to apartheid — not for any crime.` },
    { s: 'TYLA', t: `Two marks. 2.1.4: "Define the term persecution in your own words." One times two.` },
    { s: 'MICHAEL', t: `Cruel or unfair treatment of people because of their beliefs.` },
    { s: 'TYLA', t: `Two marks.` },
    { s: 'TYLA', t: `[softly] Source 2B is Farisani's own testimony to the TRC.` },
    { s: 'NARRATOR', t: `Source 2B. The source below is part of a testimony given by Farisani at the Truth and Reconciliation Commission's Human Rights Violation Committee hearing held in Venda on 4 October 1996. It is a recollection of Farisani's experiences at the hands of the Venda Security Branch policemen during his period of detention.` },
    { s: 'NARRATOR', t: `... I was interrogated every day. There where I was tortured. I was interrogated because the first thing which was said was the letter which was written by Mr JAM Silimela and Mr Magwaba, Venda Security Branch policemen. I don't hate them, they must tell the truth.` },
    { s: 'NARRATOR', t: `They put a bag on me, they poured some glue-like things, you know they were just sticky. In my imagination when they were shocking, I couldn't feel the electricity in the substance, properly. Well they tied those electrical devices on my ears, they poured water, some water just on the floor. My whole body was just feeling pain. I fell in the water and I was just falling down, rising and taking off the bag, asking me a lot of questions. The electric devices were taken from the head to the toes and the thighs and even in my private parts. My intestines were jumping. As it was happening, Ramaligela (member of the Venda Security Branch police) started a song, 'Hallelujah. Call on your God. He'll come and help you.' I am not lying about Ramaligela. Why should I lie about him, he knows very well that is true?` },
    { s: 'NARRATOR', t: `I was made to do press-ups, to stand on my head, how can I stand on my top, you know I was very stout (short and heavy)? They took me and made me stand on my head and then they kicked me. Could I just say one final thing? One reason I bring the family here, one reason I want to support is that many of these evil people, and I don't use the word 'evil' easy as a pastor, but we should dwell over (speak about) evil and brutal men and women, because unless they come out and confess, sooner or later they will come back ...` },
    { s: 'TYLA', t: `2.2.1: "Give the names of any TWO Venda Security Branch policemen in the source implicated by Farisani during his interrogation." Two times one.` },
    { s: 'MICHAEL', t: `Mr JAM Silimela and Mr Magwaba.` },
    { s: 'TYLA', t: `Two marks. Ramaligela is also accepted. 2.2.2: "What does the statement, 'I don't hate them, they must tell the truth', suggest about Farisani's testimony?" One times two.` },
    { s: 'MICHAEL', t: `That he wasn't seeking revenge — he wanted the truth, in the spirit of reconciliation, which is what the TRC was trying to achieve.` },
    { s: 'TYLA', t: `Two marks. 2.2.3: "Explain what the phrase, 'Call on your God. He'll come and help you', suggests about the tactics used by the Security Branch policeman during the interrogation." One times two.` },
    { s: 'MICHAEL', t: `Ramaligela was mocking Farisani's religious faith — he was a pastor — to cause psychological distress and break him down completely. It shows the tactics were brutal and inhumane.` },
    { s: 'TYLA', t: `Two marks. 2.2.4: "Using the information in the source and your own knowledge, what can you conclude from the words, '... unless they come out and confess, sooner or later they will come back ...', with reference to the perpetrators?" One times two.` },
    { s: 'MICHAEL', t: `If perpetrators don't make a full disclosure, they could continue committing human rights abuses. Telling the whole truth was the only way to find closure.` },
    { s: 'TYLA', t: `Two marks. 2.2.5: "Why would a historian find the source reliable when researching how the TRC's Human Rights Violation Committee dealt with the violations against Reverend Farisani?" Two times two.` },
    { s: 'MICHAEL', t: `Who, what, when, where. It's first-hand testimony from Farisani himself, about his own torture. It was given at the TRC Human Rights Violation Committee hearing in Venda on 4 October 1996 — the exact committee the historian is researching. And it's published in the TRC Final Report.` },
    { s: 'TYLA', t: `[impressed] Four marks — with a spare. The memo also accepts that his testimony can be corroborated by Sources 2A and 2C. Checking whether other sources confirm a source is a strong reliability point.` },
    { s: 'TYLA', t: `Source 2C is the Amnesty Committee's decision.` },
    { s: 'NARRATOR', t: `Source 2C. The source below is an extract from the Truth and Reconciliation Commission Special Report of Case No. AC/99/0238, dated 5 May 1999. It highlights why the TRC's Amnesty Committee rejected the application of three Venda Security Branch policemen, T Nesamari, P Managa and M Ramaligela who assaulted and tortured Reverend Farisani and other victims.` },
    { s: 'NARRATOR', t: `... The TRC Amnesty Committee is satisfied that the applications comply with the formal requirements of the Promotion of National Unity and Reconciliation Act, 1995 (Act 34 of 1995) hereinafter referred to as 'The Act', and finds that all the acts in respect of which amnesty is sought by the applicants were committed with a political objective as required by the Act.` },
    { s: 'NARRATOR', t: `All three of the applicants (T Nesamari, P Managa and M Ramaligela) testified at the hearing. Both in their written applications and in their oral testimonies, it became clear to the TRC Amnesty Committee that these three applicants were constantly playing down their role and involvement in the assault and torture of the victims who were tortured separately, but from whose evidence a picture of consistency in the methods employed became apparent (obvious).` },
    { s: 'NARRATOR', t: `The use of a bag filled with water over their heads, the application of electric shocks to their ear lobes and private parts, the pulling of hair from various body parts, the instructions to do strenuous (tiring) exercises and vicious assaults by the applicants by using their bare hands, emerged during the evidence of the victims so consistently that the Committee could not accept the truth of their testimonies.` },
    { s: 'NARRATOR', t: `The Committee is not satisfied that the above three applicants have made a full disclosure of all relevant facts as required by section 20(1) of the Act and their applications must consequently FAIL.` },
    { s: 'TYLA', t: `2.3.1: "Quote ONE piece of evidence from the source which suggests that the TRC Amnesty Committee was satisfied that the amnesty applications by the three policemen complied with the requirements of the TRC Act." One times two.` },
    { s: 'MICHAEL', t: `"The TRC Amnesty Committee is satisfied that the applications comply with the formal requirements..."` },
    { s: 'TYLA', t: `[encouragingly] That repeats the question's own words. The memo wants the part that shows what satisfied them — what requirement did the acts meet?` },
    { s: 'MICHAEL', t: `"... finds that all the acts in respect of which amnesty is sought by the applicants were committed with a political objective as required by the Act."` },
    { s: 'TYLA', t: `Two marks. That's a key TRC idea: to qualify for amnesty, the crime had to have a political objective, and the applicant had to make a full disclosure. 2.3.2: "Name THREE applicants, according to the source, who applied for amnesty for the assault and torture of Reverend Farisani." Three times one.` },
    { s: 'MICHAEL', t: `T Nesamari, P Managa and M Ramaligela.` },
    { s: 'TYLA', t: `Three marks. 2.3.3: "Explain the term oral testimonies in the context of the TRC's hearings by the Amnesty Committee." One times two.` },
    { s: 'MICHAEL', t: `Spoken accounts given by the policemen — the amnesty applicants — at the hearing, describing what they did, in order to plead for amnesty.` },
    { s: 'TYLA', t: `Two marks — and you used "in the context of," so it's the applicants' spoken testimony, not just any spoken story. 2.3.4: "What conclusion can be drawn from the statement, 'The Committee is not satisfied that the above three applicants have made a full disclosure', as required by the Act?" One times two.` },
    { s: 'MICHAEL', t: `The policemen didn't tell the whole truth, so they didn't qualify for amnesty.` },
    { s: 'TYLA', t: `Two marks. Question 2.4: "Refer to Sources 2B and 2C. Explain how the evidence in Source 2B supports the information in Source 2C regarding the human rights violations committed against Reverend Farisani by the apartheid security policemen." Two times two.` },
    { s: 'MICHAEL', t: `Source 2B says the police put a bag over Farisani's head, and Source 2C mentions a bag filled with water over the victims' heads. Source 2B says electrical devices were tied to his ears, and Source 2C mentions electric shocks to the ear lobes.` },
    { s: 'TYLA', t: `Four marks. Also accepted: the press-ups in 2B and the "strenuous exercises" in 2C; the kicking in 2B and the "vicious assaults" in 2C; and both sources naming Ramaligela. Notice why this matters: the victims' stories matched, and that's exactly why the Committee didn't believe the policemen.` },
    { s: 'TYLA', t: `Source 2D is a cartoon.` },
    { s: 'NARRATOR', t: `Source 2D. The cartoon below is by J Shapiro, taken from the book Truths Drawn in Jest: Commentary on the TRC Through Cartoons, edited by W Verwoerd and M Mabizela. It depicts Dullah Omar, the former Minister of Justice, who was responsible for the TRC, revealing the truth about human rights violations of political activists during the apartheid era.` },
    { s: 'TYLA', t: `In the cartoon, Dullah Omar — his badge says "Top Dullah" — stands at a podium marked "Commission of Truth and Reconciliation." He is peeling back a page. On the front page, Frame A, is the official police story: "The prisoner slipped on the soap, hit his head and later died." Underneath, Frame B, partly revealed, is a different account: a bag over the prisoner's head, a battery attached, a beating with an iron bar — ending "he was dead." Below the podium, a group of uniformed security policemen look on, sweating. 2.5.1: "Explain the symbolic representation of the following: (a) Dullah Omar." One times two.` },
    { s: 'MICHAEL', t: `As Minister of Justice, he represents the government exposing the acts of violence committed by the police under apartheid — making sure the TRC's mandate of truth-telling is achieved.` },
    { s: 'TYLA', t: `Two marks. (b): the security policemen.` },
    { s: 'MICHAEL', t: `They're sweating — they're anxious and afraid of the truth being revealed and of being implicated. They represent the apartheid government's security forces.` },
    { s: 'TYLA', t: `Two marks. 2.5.2: "Comment on why the information in FRAME A differs from FRAME B regarding evidence presented at the TRC hearings." Two times two.` },
    { s: 'MICHAEL', t: `Frame A is the security police's cover-up — the false version they told to hide the truth. Frame B is the truth that the TRC exposed — the torture and killing that really happened.` },
    { s: 'TYLA', t: `Four marks. "Slipped on the soap" echoes the kind of explanation the police gave for deaths in detention under apartheid. The cartoon shows the TRC literally peeling back the lie.` },
    { s: 'TYLA', t: `2.6: "Using the information in the relevant sources and your own knowledge, write a paragraph of about eight lines, about eighty words, explaining why the TRC rejected the amnesty applications of the perpetrators who tortured Reverend Tshenuwani Farisani." Eight marks.` },
    { s: 'MICHAEL', t: `"Reverend Farisani was a Black Consciousness leader who was detained four times between 1977 and 1987. He was tortured with electric shocks, a bag over his head and beatings. Amnesty International called him a prisoner of conscience and campaigned for his release."` },
    { s: 'TYLA', t: `[encouragingly] That's what happened to Farisani. But the question asks why the TRC rejected the amnesty applications. What was the TRC's reason?` },
    { s: 'MICHAEL', t: `[sighs] Right — I described the torture, not the decision. "The TRC rejected the amnesty applications of T Nesamari, P Managa and M Ramaligela because they did not make a full disclosure of all relevant facts, as the Act required. Although their acts had a political objective, the three policemen constantly played down their role in the torture. Farisani's testimony and those of other victims, who were tortured separately, consistently described the same methods — a water-filled bag, electric shocks and assaults — so the Committee could not believe the applicants. Like the policemen in Shapiro's cartoon, they tried to hide the truth, and without full disclosure, amnesty could not be granted."` },
    { s: 'TYLA', t: `[impressed] Level 3 — six to eight marks. The reason is in your first sentence — no full disclosure — and every other sentence supports it with evidence from 2B, 2C and 2D. The memo's own-knowledge point: the policemen didn't want to implicate their superiors.` },
    { s: 'TYLA', t: `[warmly] Part 2 done. That was a heavy one, Michael.` },
    { s: 'MICHAEL', t: `[softly] It was. Hearing Reverend Farisani say "I don't hate them, they must tell the truth" after everything... that stays with you.` },
    { s: 'TYLA', t: `It does. And that's what the TRC was about. Same tradition — your top traps from today.` },
    { s: 'MICHAEL', t: `Essay first. "Critically discuss" — I fell for it again. The road to democracy was not simply non- violent. Negotiations — the Groote Schuur and Pretoria Minutes, CODESA, the Record of Understanding — happened alongside violence — Boipatong, Bisho, Chris Hani's assassination, the AWB, Shell House — that almost derailed them. Tag each event, and make the essay a judgement about how they relate.` },
    { s: 'TYLA', t: `And the source question?` },
    { s: 'MICHAEL', t: `The TRC had three committees — Human Rights Violations, Amnesty, and Reparation and Rehabilitation. Amnesty is not reconciliation. To get amnesty, you needed a political objective and a full disclosure — the policemen met the first but failed the second. When you quote evidence, quote the part that proves the point — the "political objective" — not the words of the question. "In the context of" means link the term to the topic. Corroboration with other sources is a reliability point. Cartoons: Frame A is the cover-up, Frame B is the truth. And in the paragraph — answer why the TRC rejected the applications, not what happened to Farisani.` },
    { s: 'TYLA', t: `[delighted] Perfect. Next time, the last part of Paper 2 — The End of the Cold War and a New World Order: the BRICS source question and the Gorbachev essay. Until then... [whispers] the truth is the condition — no full disclosure, no amnesty. [warmly] We'll catch you in the next episode.` },
  ],
},

{
  num: 5,
  file: 'History P2 Nov 2025 - End of the Cold War 1 - Essay Question 6 - Gorbachev',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 2, November 2025. The End of the Cold War, part one: Essay Question 6, Gorbachev, Glasnost and Perestroika.` },
    { s: 'TYLA', t: `[warmly] Hey everyone, welcome back to ECHOES OF THE PAST. This is the final part of History Paper 2, November 2025 — Part 3: The End of the Cold War and a New World Order.` },
    { s: 'MICHAEL', t: `The last one. The Cold War started our very first History episode, and now it ends.` },
    { s: 'TYLA', t: `[laughs] Full circle. The essay asks to what extent Gorbachev's policies of Glasnost and Perestroika led to the collapse of the Soviet Union. And the source question jumps to today — how the expansion of BRICS might threaten the balance of power between the Global North and the Global South. Same as Parts 1 and 2, we're doing the essay first, because the 1980s come before BRICS.` },
    { s: 'MICHAEL', t: `And one heads-up I'll give everyone: the BRICS sources are from 2024. History in the exam can be very recent.` },
    { s: 'TYLA', t: `Exactly. Pause and try each question yourself first. Let's go.` },
    { s: 'TYLA', t: `Question 6. "Explain to what extent Gorbachev's policies of Glasnost and Perestroika in the 1980s ultimately led to the collapse of the Soviet Union. Use relevant historical evidence to support your line of argument." Fifty marks.` },
    { s: 'MICHAEL', t: `Before anything — the two policies. Glasnost was the economic one, restructuring the economy, and Perestroika was openness—` },
    { s: 'TYLA', t: `[encouragingly] Say that again slowly.` },
    { s: 'MICHAEL', t: `[groans] I swapped them. Perestroika is restructuring — the economy. Glasnost is openness — freedom of speech and the media.` },
    { s: 'TYLA', t: `That swap would damage your whole essay, because every paragraph would be wrong. Here's a hook: Glasnost — Gossip. Openness, people talking freely. Perestroika — Production. The economy.` },
    { s: 'MICHAEL', t: `[whispers] Glasnost — gossip. Perestroika — production.` },
    { s: 'TYLA', t: `Now the question. "To what extent" — you've done this before, with Black Power. And notice the word "ultimately."` },
    { s: 'MICHAEL', t: `"Ultimately" means "in the end." So the question is whether Gorbachev's policies were what finally caused the collapse — or whether other problems had been weakening the Soviet Union for years before.` },
    { s: 'TYLA', t: `Exactly — and the memo gives you both. The background includes the arms and space race, the war in Afghanistan, poor agriculture, a corrupt bureaucracy and Chernobyl. So you can argue "great extent" — the policies were the final trigger — or "lesser extent" — the Soviet Union was already collapsing. Either works if you defend it.` },
    { s: 'MICHAEL', t: `Okay. "Gorbachev's policies of Glasnost and Perestroika led to the collapse of the Soviet Union to a great extent. When he took power in 1985, the Soviet Union was already weakened by the arms race, the war in Afghanistan and a failing economy. However, it was his reforms that turned these problems into collapse: Perestroika's poorly managed economic changes caused inflation and job losses, while Glasnost's openness allowed criticism of the government and encouraged nationalist movements in Eastern Europe and the Soviet republics, leading to the fall of the Berlin Wall in 1989 and the dissolution of the USSR in December 1991."` },
    { s: 'TYLA', t: `[impressed] Clear stance — "great extent" — and you've already dealt with the long-term weaknesses by calling the reforms the trigger. That's a balanced line of argument.` },
    { s: 'TYLA', t: `Plan the body.` },
    { s: 'MICHAEL', t: `Paragraph one — background, briefly. After the Second World War, the USA and USSR became superpowers locked in the Cold War. The arms and space race crippled the Soviet economy, and the war in Afghanistan weakened it further. When Gorbachev took over in 1985, he inherited an inefficient, corrupt bureaucracy, poor agricultural production, and then the Chernobyl disaster.` },
    { s: 'TYLA', t: `Good. That paragraph supports "already weakened." Next.` },
    { s: 'MICHAEL', t: `Paragraph two — Perestroika, introduced in 1985. It allowed small-scale private ownership, removed government control over production, accepted aspects of capitalism into communism, and shut down unprofitable businesses.` },
    { s: 'TYLA', t: `And what went wrong?` },
    { s: 'MICHAEL', t: `Paragraph three — it was poorly implemented and confusing for enterprises that had never operated in a capitalist system. Entrepreneurship had been stifled under communism. It caused job losses and inflation, and that created political dissatisfaction.` },
    { s: 'TYLA', t: `Next — Glasnost.` },
    { s: 'MICHAEL', t: `Paragraph four — Glasnost: openness and transparency. Less censorship, more media freedom, and people were encouraged to participate in — and criticise — the government. Non-communist parties were allowed into the system, political prisoners were released, and relations with the USA improved, which alarmed the hardliners.` },
    { s: 'TYLA', t: `And did it work the way he hoped?` },
    { s: 'MICHAEL', t: `No — it backfired, because the criticism turned on Perestroika and Gorbachev himself. He had two kinds of opponents: hardliners who opposed the reforms, and liberals who said he wasn't going fast enough.` },
    { s: 'TYLA', t: `Good — keep that as one paragraph about consequences at home. Then?` },
    { s: 'MICHAEL', t: `Paragraph six — Eastern Europe. Glasnost and the release of political prisoners emboldened nationalist groups, especially in the satellite states. That led to the fall of the Berlin Wall in 1989, and the Soviet Union lost its influence in Eastern Europe.` },
    { s: 'TYLA', t: `And inside the Soviet Union itself?` },
    { s: 'MICHAEL', t: `Paragraph seven — the republics and the end. There were old differences among the fifteen republics, civil unrest broke out, and nationalism led to demands for independence. Gorbachev tried to save the union with a federation of states, but it failed. In 1990, several republics — including Russia under Boris Yeltsin — declared independence. On 25 December 1991, the USSR was dissolved, the Communist Party was disbanded, and the republics joined the Commonwealth of Independent States. The USA was left as the only superpower.` },
    { s: 'TYLA', t: `[delighted] That's the memo, in a logical order: background, two policies, their consequences, Eastern Europe, the republics, the end. And here's an irony worth a sentence in your essay — Gorbachev won the Nobel Peace Prize in 1990 and was a hero in the West, while he was losing support at home.` },
    { s: 'TYLA', t: `Write the Glasnost paragraph with PEEL — the one most directly linked to collapse.` },
    { s: 'MICHAEL', t: `"Point: Glasnost contributed greatly to the collapse of the Soviet Union because openness gave people the freedom to challenge communist rule itself. Explain: Gorbachev intended openness to build support for his reforms, but once criticism was allowed, it could not be controlled. Example: Reduced censorship and the release of political prisoners led to open criticism of the government, of Perestroika and of Gorbachev himself. It also emboldened nationalist movements in the Eastern European satellite states and the Soviet republics, contributing to the fall of the Berlin Wall in 1989 and to declarations of independence, including Russia's under Boris Yeltsin. Link: In this way, Glasnost turned existing discontent into open demands for independence, which ultimately broke up the Soviet Union."` },
    { s: 'TYLA', t: `[impressed] That paragraph uses the word "ultimately" — the question's own word — and shows how the policy led to collapse, step by step. Conclusion?` },
    { s: 'MICHAEL', t: `"In conclusion, the Soviet Union was already weakened by the arms race, the war in Afghanistan and a failing economy when Gorbachev came to power. However, it was his policies that turned weakness into collapse: Perestroika destabilised the economy, and Glasnost unleashed criticism and nationalism that the Communist Party could not contain. By 25 December 1991, the USSR had been dissolved. Gorbachev's policies therefore led to the collapse of the Soviet Union to a great extent."` },
    { s: 'TYLA', t: `That's Level 6 or 7 — forty-three to fifty. And if you'd swapped Glasnost and Perestroika throughout? The content would be wrong in every paragraph, and the essay could fall below twenty. That's how much one definition is worth.` },
  ],
},

{
  num: 6,
  file: 'History P2 Nov 2025 - End of the Cold War 2 - Source Question 3 - BRICS',
  segs: [
    { s: 'AMELIA', t: `Echoes of the Past. History Paper 2, November 2025. The End of the Cold War, part two: Source-based Question 3, the expansion of BRICS.` },
    { s: 'TYLA', t: `Now we jump forward to today. Section A, Question 3. The key question: "How might the expansion of BRICS countries be seen as a threat to the balance of power between the Global North — Western countries — and the Global South — BRICS countries?" Source 3A.` },
    { s: 'NARRATOR', t: `Source 3A. The source below is an article titled 'BRICS Intergovernmental Organization', taken from records of the BRICS summit held in Kazan in Russia in October 2024. It focuses on the reasons for the formation of BRICS and its history since 2006.` },
    { s: 'NARRATOR', t: `The first meeting in the BRIC format took place on 20 September 2006 on the side-lines of the 61st session of the UN (United Nations) General Assembly in New York. The meeting was attended by the ministers of foreign affairs of Russia, Brazil and China and the minister of defence of India, who all agreed to develop multifaceted (multi-sided) cooperation between the four countries.` },
    { s: 'NARRATOR', t: `The BRIC summit took place on 16 June 2009 in Yekaterinburg in Russia. The final Joint Statement stated the desire of BRIC countries to develop 'an incremental (slowly increasing), proactive (hands-on), pragmatic (practical), open and transparent dialogue and cooperation' that is 'conducive (suited) not only to serving common interests of emerging market economies and developing countries, but also to building a harmonious (friendly) world of lasting peace and common prosperity'.` },
    { s: 'NARRATOR', t: `With the accession (joining) of the Republic of South Africa (the first summit with South Africa took place on 14 April 2011 in Sanya, China), the abbreviation 'BRICS' was established as the name of the association. One of the priorities of BRICS activities is to promote the formation of a multi-polar (many- centred) democratic world and strengthen global security and stability around the world. The association consistently advocates (encourages) for compliance (agreement) with the principles of international law with the UN in the central role, and the rejection of unilateral coercive (forceful) measures. On 1 January 2024, Egypt, Iran, the United Arab Emirates, Saudi Arabia, and Ethiopia joined BRICS.` },
    { s: 'NARRATOR', t: `Global North: broadly refers to wealthier, more developed nations in Western Europe, North America, parts of Asia and Oceania (Western countries). Global South: broadly encompasses the rest of the world, often characterised by lower incomes and developing economies (including BRICS countries).` },
    { s: 'TYLA', t: `3.1.1: "When, according to the source, did the first meeting in the BRIC format take place?" One times one.` },
    { s: 'MICHAEL', t: `20 September 2006.` },
    { s: 'TYLA', t: `One mark. 3.1.2: "Name the FOUR countries in the source who agreed to develop multifaceted cooperation among themselves in the formation of BRIC." Four times one.` },
    { s: 'MICHAEL', t: `[confidently] Brazil, Russia, India, China... and South Africa.` },
    { s: 'TYLA', t: `[encouragingly] That's five. And look at the spelling in the question — B-R-I-C.` },
    { s: 'MICHAEL', t: `[groans] BRIC, without the S. South Africa only joined in 2011 — that's when the S was added. So the four are Russia, Brazil, China and India.` },
    { s: 'TYLA', t: `Four marks — but only because you fixed it. If you'd written five, the marker takes the first four — and if South Africa had been one of them, you'd lose a mark. 3.1.3: "Define the term summit in your own words." One times two.` },
    { s: 'MICHAEL', t: `A high-level meeting of heads of government.` },
    { s: 'TYLA', t: `Two marks. 3.1.4: "Using information in the source and your own knowledge, explain the significance of six new countries joining BRICS on 1 January 2024." Two times two.` },
    { s: 'MICHAEL', t: `Egypt, Iran, the UAE, Saudi Arabia and Ethiopia joined—` },
    { s: 'TYLA', t: `[patiently] That's who joined. "Significance" asks why it matters.` },
    { s: 'MICHAEL', t: `Right. It strengthened BRICS to challenge the Global North and the balance of power. And it made BRICS more inclusive — supporting the political and economic development of more Global South countries.` },
    { s: 'TYLA', t: `[impressed] Four marks. Also accepted: more BRICS members to collaborate at the United Nations; and pressure on the Global North to recognise the Global South as an equal trading partner. And a quick note — the question says six new countries, but the source names five. The footnote in Source 3D explains why: Argentina was invited but withdrew. Don't let that confuse you.` },
    { s: 'TYLA', t: `Source 3B.` },
    { s: 'NARRATOR', t: `Source 3B. The source below is from an article titled, 'The BRICS Challenge to the G7 Established International Order' by MG Mooradian, published by the Foreign Policy Research Institute on 20 September 2024. It highlights the strategies adopted by BRICS to challenge the Global North.` },
    { s: 'NARRATOR', t: `BRICS is launching (starting) three strategic initiatives that aim to challenge the established international order: an artificial intelligence (AI) governance framework, an independent economic system and regional security coalitions (alliances). BRICS's current goal is to reshape the international order to allow nations to act independently, without involvement or enforcement from Western countries.` },
    { s: 'NARRATOR', t: `One of BRICS's primary objectives is to establish an independent payment system using member currencies to promote de-dollarisation (replace the US dollar in international trade), thereby diminishing (reducing) the impact of Western sanctions. The first step of this process is the attempt to influence specific vital international markets to gain economic leverage (advantage). One example of this new strategy is BRICS's involvement in the energy market, with the organisation aiming to create an energy partnership between its members. With the recent inclusion of energy-rich nations such as Saudi Arabia, Iran and the United Arab Emirates, BRICS could achieve a level of influence in the global energy market comparable to that of OPEC (Organisation of the Petroleum Exporting Countries), potentially altering the dynamics by controlling a significant portion of the world's oil and gas supplies.` },
    { s: 'NARRATOR', t: `Another critical market BRICS is attempting to influence is the agricultural sector, whose first objective is to create an independent grain trading system that was introduced by Russia. This initiative would increase the organisation's negotiating power in grain prices and combat sanctions by the United States and its G7 partners (other wealthy Western nations). BRICS seeks to alter (change) the existing global power structure which could result in diminished (reduced) US influence and the destabilisation of the international order.` },
    { s: 'NARRATOR', t: `Artificial intelligence governance framework: a government information system to manage the use of artificial intelligence (AI) in a responsible manner. G7: refers to an intergovernmental political and economic forum of seven of the world's most powerful economies. Its members are Canada, France, Germany, Italy, Japan, the United Kingdom and the United States.` },
    { s: 'TYLA', t: `3.2.1: "Name any TWO strategic initiatives launched by BRICS in the source that aimed at challenging the established international order." Two times one.` },
    { s: 'MICHAEL', t: `An artificial intelligence governance framework, and an independent economic system.` },
    { s: 'TYLA', t: `Two marks. Regional security coalitions are also accepted. 3.2.2: "Explain the concept de-dollarisation in the context of the BRICS challenge to Western countries." One times two.` },
    { s: 'MICHAEL', t: `BRICS countries reducing their dependence on the US dollar in international trade — using their own currencies and their own payment system instead.` },
    { s: 'TYLA', t: `Two marks. 3.2.3: "Identify ONE reason in the source why BRICS countries attempted to influence the agricultural sector." One times two.` },
    { s: 'MICHAEL', t: `"... would increase the organisation's negotiating power in grain prices ..."` },
    { s: 'TYLA', t: `Two marks. Also accepted: to create an independent grain trading system, or to combat sanctions by the US and its G7 partners. 3.2.4: "Comment on how the 'diminished US influence' would change the existing international order." Two times two.` },
    { s: 'MICHAEL', t: `The USA would lose its position as the leader of the Global North, and the Global North would lose its dominant position in the world. And it would give the Global South a meaningful role in world politics and the economy.` },
    { s: 'TYLA', t: `Four marks. The memo also accepts that free trade could narrow the economic gap between developed and developing countries.` },
    { s: 'TYLA', t: `Source 3C is a graph. The chief markers' report we looked at found that this topic is where learners score lowest, so we'll take our time.` },
    { s: 'NARRATOR', t: `Source 3C. The graph below, titled 'The Rise of the BRICS', was produced by STATISTA, an online market research company that provides data and reports on global markets, from the International Monetary Fund (IMF) world economic outlook figures. It shows a comparative analysis of the growth of GDP (gross domestic product) between the G7 and BRICS countries covering the period from 1995 to 2023.` },
    { s: 'NARRATOR', t: `Gross domestic product (GDP): total value (worth) of all goods within a country. 'Share of global GDP': a comparison of a country's GDP to the total GDP of the world. 'Purchasing power parity': a comparison of buying power of currencies between two or more countries.` },
    { s: 'TYLA', t: `The graph shows pairs of bars for three years — the G7 on the left of each pair, BRICS on the right. In 1995, the G7 had forty-four comma nine percent of global GDP, and BRICS had sixteen comma nine percent. In 2010, the G7 had thirty-four comma three, BRICS twenty-six comma six. And in 2023, the G7 had twenty- nine comma six — and BRICS had thirty-two comma one. Inside each bar, the biggest section for the G7 is the USA, and for BRICS it's China. 3.3.1: "What message is conveyed by the graph regarding the change in: (a) the G7's share of global GDP between 1995 and 2023." One times two.` },
    { s: 'MICHAEL', t: `In 2023, the G7 had twenty-nine comma six percent.` },
    { s: 'TYLA', t: `[encouragingly] That's one number. The question says "the change ... between 1995 and 2023." What's the message of all three bars together?` },
    { s: 'MICHAEL', t: `Oh — it's the trend. The G7's share declined steadily, from almost forty-five percent to under thirty percent. So its economic influence is shrinking.` },
    { s: 'TYLA', t: `Two marks. "Message" in a graph question means the trend, not a single number. (b): BRICS' share between 1995 and 2023.` },
    { s: 'MICHAEL', t: `BRICS' share increased steadily, from about seventeen percent to thirty-two — and by 2023, it had overtaken the G7. Its economic power was growing.` },
    { s: 'TYLA', t: `Two marks — and "overtaken" is exactly the kind of observation that shows you read the graph. 3.3.2: "Using the information in the source and your own knowledge, explain the implication of the growth in China's GDP from 1995 to 2023." Two times two.` },
    { s: 'MICHAEL', t: `China's section of the BRICS bar keeps getting bigger, so it positions China as the leader of BRICS. And it implies China is an emerging power that is challenging the dominance of the USA.` },
    { s: 'TYLA', t: `Four marks.` },
    { s: 'TYLA', t: `Source 3D.` },
    { s: 'NARRATOR', t: `Source 3D. The extract below was taken from an article, titled 'How Trump's Dump on De- dollarisation Affects BRICS' by K Wadhwa and published in the Responsible Statecraft Weekly newsletter on 28 November 2024. It includes an extract from a speech that Trump delivered as president-elect during a campaign rally in Wisconsin in September 2024, highlighting how BRICS poses a threat to the balance of power between the Global North and the Global South.` },
    { s: 'NARRATOR', t: `'Many countries are leaving the dollar. They are not going to leave the dollar with me. I'll say, you leave the dollar, you are not doing business with the United States because we're going to put a 100% tariff (tax) on your growth.' He was referring to BRICS+ countries, many of whom are critical of the 'rules- based' international order, established by the United States in the Bretton Woods era, which they see as benefitting the West (especially the United States) over the emerging Global South.` },
    { s: 'NARRATOR', t: `De-dollarisation may not happen anytime soon but the fact that the BRICS+ countries, which form 35% of the world's GDP and 45% of the world's population, appear to be taking it seriously, is a real concern for American leaders, including Trump.` },
    { s: 'NARRATOR', t: `In his previous presidential term, Trump started a trade war with China in addition to unleashing a new torrent of sanctions on Iran, Venezuela and Russia. If he (Trump) doubles down on using sanctions as a weapon, more countries will want to hedge their bets. After all they might also be on the receiving end of sanctions if they were to fall out of favour with the United States one day. 'That will mean more consolidation (strengthening) of China's leadership of the BRICS+ and more innovation in terms of financial infrastructure, co-operation and integration ...'` },
    { s: 'NARRATOR', t: `He [Trump] noted that even Western-friendly countries, like Turkey, wish to join the alliance (BRICS+).` },
    { s: 'NARRATOR', t: `BRICS+: Original BRICS nations (Brazil, Russia, India, China and South Africa) plus the new members (Ethiopia, Egypt, Saudi Arabia, Iran and the United Arab Emirates) and any other country that could still join. Argentina had already withdrawn after a change in government by December 2023. To hedge your bets: to avoid committing oneself when faced with a difficult choice or to protect oneself against making the wrong choice.` },
    { s: 'TYLA', t: `3.4.1: "Who, according to the source, was Trump referring to when he said, '... leave the dollar, you are not doing business with the US because we're going to put a 100% tariff on your growth'?" One times one.` },
    { s: 'MICHAEL', t: `BRICS+ countries.` },
    { s: 'TYLA', t: `One mark. 3.4.2: "Give a reason in the source why BRICS+ countries are critical of the Bretton Woods era." One times two.` },
    { s: 'MICHAEL', t: `They see the rules-based order "as benefitting the West (especially the United States) over the emerging Global South."` },
    { s: 'TYLA', t: `Two marks. 3.4.3: "Using the information in the source and your own knowledge, explain why '... the fact that the BRICS+ countries form 35% of the world's GDP and 45% of the world's population ...' is a concern for the USA, as the leader of the Global North." One times two.` },
    { s: 'MICHAEL', t: `That much GDP makes BRICS+ an emerging economic power that threatens the economic dominance of the Global North — and the US dollar's place in world trade.` },
    { s: 'TYLA', t: `Two marks. The memo also accepts that the huge population is a large workforce to fuel growth, while many Global North populations are ageing. 3.4.4: "Comment on the usefulness of this source to a researcher studying how Trump felt threatened by the expansion of BRICS+ countries." Two times two.` },
    { s: 'MICHAEL', t: `It's not very useful, because Trump was campaigning, so he was probably exaggerating—` },
    { s: 'TYLA', t: `[encouragingly] Read the research topic again. What is the researcher studying?` },
    { s: 'MICHAEL', t: `How Trump felt. [slowly, putting it together] So his own words are exactly what they need — even if he was exaggerating, it shows how he saw the threat. It's useful because it includes part of Trump's own speech at a campaign rally, giving insight into his perspective. And it was given as president-elect — the leading figure of the Global North — soon after new members joined BRICS.` },
    { s: 'TYLA', t: `[impressed] Four marks — and that's a big idea in History. A source can be one-sided and still be very useful, if the research topic is that person's point of view. The memo also accepts that it shows his concern about de-dollarisation. Question 3.5: "Refer to Sources 3C and 3D. Explain how the evidence in Source 3C supports the information in Source 3D regarding how BRICS is upsetting the balance of power between the Global North and Global South." Two times two.` },
    { s: 'MICHAEL', t: `Source 3C shows BRICS' share of global GDP rising to thirty-two comma one percent, and Source 3D says BRICS+ countries form thirty-five percent of the world's GDP — both over thirty percent. Source 3C shows the USA and China as the biggest economies in the G7 and BRICS, and Source 3D refers to a trade war between the USA and China.` },
    { s: 'TYLA', t: `[delighted] Four marks. Also accepted: 3C shows the G7's economic power declining, and 3D refers to countries leaving the dollar.` },
    { s: 'TYLA', t: `3.6: "Using the information in the relevant sources and your own knowledge, write a paragraph of about eight lines, about eighty words, explaining how the expansion of BRICS countries might be seen as a threat to the balance of power between the Global North and the Global South." Eight marks.` },
    { s: 'MICHAEL', t: `[confidently] Answer first, evidence, link. "The expansion of BRICS might be seen as a threat to the balance of power because it is shifting economic and political power from the Global North to the Global South. Growing from BRIC in 2006 to BRICS+ in 2024, the group now forms 35% of the world's GDP and 45% of its population, and its share of global GDP has overtaken the G7's. Through de-dollarisation, an independent payment system, energy and grain partnerships, and the New Development Bank as an alternative to the IMF and World Bank, BRICS aims to reduce Western influence and sanctions, which is why the USA sees it as a threat."` },
    { s: 'TYLA', t: `[delighted] Level 3 — six to eight marks. Answer first, evidence from all four sources, and own knowledge — the New Development Bank is in the memo as own knowledge. You didn't need a single correction.` },
    { s: 'MICHAEL', t: `[laughs] Took me six episodes.` },
    { s: 'TYLA', t: `[warmly] Michael — that's both History papers. Six episodes. How do you feel?` },
    { s: 'MICHAEL', t: `Like I could actually write this exam. And I noticed something — the same skills came up in every episode. Extract, interpret, judge. Take a stance, defend it, link it.` },
    { s: 'TYLA', t: `That's the whole subject. Same tradition — top traps from today, in one go.` },
    { s: 'MICHAEL', t: `Essay first. Don't swap them: Glasnost is openness — gossip — and Perestroika is restructuring — production. "Ultimately" means weigh the policies against the long-term weaknesses — the arms race, Afghanistan, Chernobyl. State the degree in the first sentence, and use the question's word in every link.` },
    { s: 'TYLA', t: `And the source question?` },
    { s: 'MICHAEL', t: `BRIC is four countries — South Africa made it BRICS in 2011. "Significance" means why it matters, not who joined. A graph's "message" is the trend — the G7 falling, BRICS rising and overtaking in 2023 — not one number. "Usefulness" depends on the research topic — Trump's own words are exactly what you need to study how Trump felt, even if they're one-sided. And for comparisons — link both sources, every point.` },
    { s: 'TYLA', t: `[amazed] ...Six episodes ago, you blamed Stalin for Churchill's shadow.` },
    { s: 'MICHAEL', t: `[laughs] And today I didn't need a single correction on the paragraph.` },
    { s: 'TYLA', t: `That's what practising past papers does. To everyone listening: whichever three questions you choose in each paper, you've now heard the full memo for every one of them. Remember — read the source, question the source, take a stance, and defend it with evidence. Until next time... [whispers] history isn't what happened — it's what you can prove. [warmly] We'll catch you in the next episode.` },
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

  console.log(`Echoes of the Past — History Paper 2 Nov 2025 (${PRIMARY_MODEL}) — running ${toRun.length} of ${EPISODES.length} episode(s)\n`);

  for (const ep of toRun) {
    console.log(`\n▶ ${ep.file}`);
    await generateEpisode(ep, ffmpegAvailable, silenceShort, forceMap.get(ep.num) || new Set());
  }

  console.log(`\n✅ Done. Check ${OUT_DIR} for the final file(s).`);
}

main().catch(e => { console.error(e); process.exit(1); });

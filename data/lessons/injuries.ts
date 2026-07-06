import { Lesson } from '@/types/lesson';

export const injuries: Lesson = {
  slug: 'injuries',
  title: 'Injuries',
  subtitle: 'Hamstring, knock, ruled out, rehab, return to training',
  level: 'B1-B2',
  description: 'Learn the vocabulary around football injuries — from the common knock to serious hamstring problems, rehab, and the return to the pitch.',
  heroImage: '/images/injuries-hero.png',

  grammarFocus: {
    focusTitle: 'Focus: Present perfect for recent news and announcements',
    description: 'We use the present perfect (have/has + past participle) to talk about recent events that are still relevant now — especially in sports news. It connects the past event to the present situation.',
    positivePattern: 'Subject + have/has + past participle',
    positiveExample: '"She has picked up a hamstring injury." (It happened recently and she is still injured now.) / "The club has confirmed he will be out for six weeks."',
    negativePattern: 'Subject + have/has + not + past participle',
    negativeExample: '"He has not returned to training yet — the injury is taking longer than expected." / "She hasn\'t been ruled out of the next match."',
    positiveExamples: [
      { sentence: 'He has been ruled out of the next three matches with a knee injury.', note: '(present perfect — recent news, still relevant)' },
      { sentence: 'The club has announced that she will undergo surgery next week.', note: '(present perfect for a recent announcement)' },
      { sentence: 'He has made his return to training this morning — ahead of schedule.', note: '(present perfect — just happened, still news)' },
      { sentence: 'They have confirmed the injury is not as serious as first feared.', note: '(present perfect for recent update)' },
    ],
    negativeExamples: [
      { sentence: 'WRONG: "She picked up a hamstring injury and she is now out." (past simple for something recent and still relevant to now)', note: 'Use present perfect for recent events connected to the present situation.' },
      { sentence: 'RIGHT: "She has picked up a hamstring injury and she is now out."', note: 'The present perfect shows the injury happened recently and the situation is still relevant now.' },
    ],
  },

  vocabulary: [
    {
      word: 'HAMSTRING',
      partOfSpeech: 'noun',
      definition: 'The group of muscles at the back of the upper leg — one of the most common injury locations for footballers.',
      example: 'He has picked up a hamstring injury — he pulled the muscle during a sprint and came off after ten minutes.',
      imageSlug: '/images/hamstring.png',
    },
    {
      word: 'KNOCK',
      partOfSpeech: 'noun',
      definition: 'A minor impact or bruise from contact — less serious than a full injury, but enough to cause concern.',
      example: 'She picked up a knock on her ankle but she has continued to play — the physio says it is not serious.',
      imageSlug: '/images/knock.png',
    },
    {
      word: 'RULED OUT',
      partOfSpeech: 'phrase',
      definition: 'Confirmed as unavailable for selection — too injured to play.',
      example: 'He has been ruled out of the next two matches — the scan showed a small tear in the calf muscle.',
      imageSlug: '/images/ruled-out.png',
    },
    {
      word: 'REHAB',
      partOfSpeech: 'noun',
      definition: 'Short for rehabilitation — the process of recovering from injury through specific exercises and treatment.',
      example: 'She is in the rehab room — working with the physio to recover from her knee injury. She will be back in six weeks.',
      imageSlug: '/images/rehab.png',
    },
    {
      word: 'PHYSIO',
      partOfSpeech: 'noun',
      definition: 'Short for physiotherapist — the specialist who treats and helps players recover from injuries.',
      example: 'The physio came onto the pitch to assess the injury — she checked his ankle and helped him off the field.',
      imageSlug: '/images/injuries-physio.png',
    },
    {
      word: 'SCAN',
      partOfSpeech: 'noun',
      definition: 'A medical test — usually an MRI or ultrasound — that shows what is happening inside the body at the injury site.',
      example: 'He has gone for a scan to determine the extent of the hamstring injury — the results will be known tomorrow.',
      imageSlug: '/images/scan.png',
    },
    {
      word: 'SETBACK',
      partOfSpeech: 'noun',
      definition: 'A new problem or return of injury during recovery — something that delays a player\'s return to fitness.',
      example: 'She suffered a setback in her recovery — she felt pain returning to training and has had to stop for another two weeks.',
      imageSlug: '/images/setback.png',
    },
    {
      word: 'SURGERY',
      partOfSpeech: 'noun',
      definition: 'A medical operation — necessary for serious injuries like torn ligaments or broken bones.',
      example: 'He has undergone surgery on his knee — a torn ACL that will keep him out for nine months.',
      imageSlug: '/images/surgery.png',
    },
  ],

  phrasalVerbs: [
    {
      phrase: 'PICK UP',
      definition: 'To get an injury — often unexpectedly during a match or training.',
      example: 'She has picked up a calf injury in training — she felt something go during a sprint drill.',
      imageSlug: '/images/pick-up-injury.png',
    },
    {
      phrase: 'RULE OUT',
      definition: 'To confirm that a player cannot play — usually used passively: "has been ruled out."',
      example: 'The manager has ruled him out of the weekend match — his hamstring is not ready.',
      imageSlug: '/images/injuries-rule-out.png',
    },
    {
      phrase: 'COME OFF',
      definition: 'To leave the pitch during a match — often due to injury.',
      example: 'She came off after 30 minutes with a knee problem — replaced by a substitute.',
      imageSlug: '/images/come-off.png',
    },
    {
      phrase: 'GO FOR A SCAN',
      definition: 'To have a medical scan — to find out the extent of an injury.',
      example: 'He has gone for a scan on his ankle — the physio suspects a fracture but it has not been confirmed yet.',
      imageSlug: '/images/go-for-a-scan.png',
    },
    {
      phrase: 'RETURN TO TRAINING',
      definition: 'To come back and train with the team after a period of injury.',
      example: 'She has returned to training this week — ahead of her expected recovery timeline.',
      imageSlug: '/images/return-to-training.png',
    },
    {
      phrase: 'SUFFER A SETBACK',
      definition: 'To experience a new problem during recovery — delaying the return to full fitness.',
      example: 'He has suffered a setback — he felt pain during rehab and has had to rest for another week.',
      imageSlug: '/images/suffer-a-setback.png',
    },
  ],

  onThePitch: {
    instructions: 'These are phrases used when a player is injured — on the pitch, in the dressing room, and in the press.',
    items: [
      {
        cue: 'He\'s down! Physio on!',
        meaning: 'A player has fallen and appears to be injured — the physiotherapist needs to come onto the pitch.',
        usage: 'Shouted by a commentator or teammate when a player goes down in pain. "He\'s down" = he has fallen and is not getting up. "Physio on!" = the medical staff need to come onto the pitch to assess the injury. This is the standard call in English football when a player is hurt.',
        imageSlug: 'otp-hes-down-physio-on',
      },
      {
        cue: 'He\'s picked up a knock.',
        meaning: 'He has a minor injury from contact — probably not serious, but something to monitor.',
        usage: 'Said after a challenge or collision when a player seems to be in some discomfort but does not seem seriously hurt. "A knock" is a common, minor injury in football — a bruise, a bang, something from contact. "Picked up a knock" is more serious than "took a hit" but much less serious than "picked up an injury."',
        imageSlug: 'otp-hes-picked-up-a-knock',
      },
      {
        cue: 'She\'s been ruled out of the next match.',
        meaning: 'She is confirmed unavailable — she will not play in the next game.',
        usage: 'Standard phrase from a coach or medical staff confirming a player cannot play. "Ruled out" = confirmed unavailable due to injury. "Of the next match" specifies which game she will miss. This phrase is extremely common in sports press conferences and injury updates. Note the present perfect: "has been ruled out" — recent news with current relevance.',
        imageSlug: 'otp-shes-been-ruled-out',
      },
      {
        cue: 'He\'s ahead of schedule.',
        meaning: 'He is recovering faster than expected — he might return to play sooner than the original timeline.',
        usage: 'A positive update from a physio or coach about a player\'s recovery. "Ahead of schedule" = progressing faster than the planned recovery timeline. The opposite is "behind schedule" — taking longer than expected. Players are often said to be "ahead of schedule" when they return to training before their predicted recovery date.',
        imageSlug: 'otp-hes-ahead-of-schedule',
      },
      {
        cue: "It's not as serious as first feared.",
        meaning: 'The injury is less severe than the initial reaction suggested — early signs were more worrying.',
        usage: 'Common phrase after a scary-looking injury on the pitch when the medical tests come back with better news. "As first feared" = as serious as people thought at first. This is a very common phrase in football injury reporting — the initial reaction at the time of injury is often worse than the actual diagnosis.',
        imageSlug: 'otp-not-as-serious-as-first-feared',
      },
      {
        cue: 'She has undergone surgery.',
        meaning: 'She has had a medical operation — usually for a serious injury like a torn ligament.',
        usage: '"Undergone surgery" = has had an operation. "Undergo" is a formal verb meaning to experience or go through something. In sports, "undergo surgery" or "undergo an operation" is the standard phrase for a medical procedure. Present perfect: "has undergone" — recent event still relevant to her current status as unavailable.',
        imageSlug: 'otp-she-has-undergone-surgery',
      },
    ],
  },

  videos: [],

  dialogue: [
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'I have some news before we start today. Amara [[has picked up:has got — present perfect for a recent injury]] a [[hamstring:the muscles at the back of the upper leg — a common injury location]] injury in training. She [[has been ruled out:has been confirmed unavailable]] of the next match.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'How serious is it? Has she [[gone for a scan:had a medical scan to find out the extent of the injury]] yet?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Yes — she [[has gone:present perfect — she went and it is recent news]] for a [[scan:a medical test — MRI or ultrasound — to show the injury inside the body]] this morning. We are waiting for the results. The [[physio:physiotherapist — the specialist who treats and helps players recover from injuries]] says it does not look like a tear — more of a strain. Hopefully, it is not as serious as first feared.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Has she started [[rehab:rehabilitation — recovering from injury through specific exercises and treatment]] already?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'Yes — she has started some gentle work with the physio. The timeline depends on the scan results. If it is a grade one strain, she could [[return to training:come back and train with the squad after injury]] in two weeks. If it is worse, we might be looking at four to six.',
    },
    {
      speaker: 'Ronaldo',
      speakerColor: 'green',
      speakerAvatar: '/images/ronaldo-icon.png',
      text: 'Has anyone else picked up any [[knock:a minor impact or bruise — less serious than a full injury]] this week? I noticed Kezia was limping after the rondo yesterday.',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'She has had a small knock on her ankle — nothing serious. The physio has cleared her to train. But we will monitor her carefully. We cannot afford a [[setback:a new problem during recovery — something that delays a return to fitness]] — especially not before the important match next week.',
    },
    {
      speaker: 'Sofia',
      speakerColor: 'blue',
      speakerAvatar: '/images/sofia-icon.png',
      text: 'Has Amara ever had a [[surgery:a medical operation — necessary for serious injuries]] before on that hamstring?',
    },
    {
      speaker: 'Coach Diallo',
      speakerColor: 'orange',
      speakerAvatar: '/images/coach-diallo-icon.png',
      text: 'No — she has never had surgery. But she has had two hamstring strains in the last three years. That history is why we are being very careful this time.',
    },
  ],

  matchingExercise: [
    { word: 'HAMSTRING', definition: 'The muscles at the back of the upper leg — one of the most common injury sites' },
    { word: 'KNOCK', definition: 'A minor impact or bruise from contact — less serious than a full injury' },
    { word: 'RULED OUT', definition: 'Confirmed unavailable for selection due to injury' },
    { word: 'REHAB', definition: 'The process of recovering from injury through exercises and treatment' },
    { word: 'PHYSIO', definition: 'The specialist who treats and helps players recover from injuries' },
    { word: 'SCAN', definition: 'A medical test — MRI or ultrasound — to show the injury inside the body' },
    { word: 'SETBACK', definition: 'A new problem during recovery that delays the return to fitness' },
    { word: 'SURGERY', definition: 'A medical operation — necessary for serious injuries like torn ligaments' },
  ],

  fillBlankExercise: [
    { before: 'She', answer: 'has picked up', after: 'a hamstring injury in training — she felt something go during a sprint.' },
    { before: 'He', answer: 'has been ruled out', after: 'of the next two matches — the scan showed a tear in the calf.' },
    { before: 'The club', answer: 'has confirmed', after: 'that she will undergo surgery on her knee next week.' },
    { before: 'He', answer: 'has gone', after: 'for a scan on his ankle this morning — results expected tomorrow.' },
    { before: 'She', answer: 'has returned', after: 'to training ahead of schedule — two weeks earlier than expected.' },
    { before: 'He', answer: 'has suffered', after: 'a setback — the hamstring strain has returned during rehab.' },
    { before: 'The physio', answer: 'has cleared', after: 'her to train — the knock is not serious enough to rule her out.' },
    { before: 'The injury', answer: 'has not been', after: 'confirmed yet — we are waiting for the scan results.' },
  ],

  multipleChoiceExercise: [
    {
      question: 'Why do we use the present perfect for injury news?',
      options: [
        'Because the injury happened a long time ago',
        'Because the recent event is still relevant to the present situation',
        'Because we do not know exactly when the injury happened',
      ],
      correctIndex: 1,
    },
    {
      question: '"She has been ruled out of the next match." What does "ruled out" mean?',
      options: [
        'She has decided not to play',
        'She has been confirmed unavailable — she cannot play due to injury',
        'She has been suspended by the referee',
      ],
      correctIndex: 1,
    },
    {
      question: 'Which sentence correctly uses the present perfect for injury news?',
      options: [
        '"He picked up a hamstring injury yesterday and he is still not training."',
        '"He has picked up a hamstring injury and has been ruled out."',
        '"He has pick up a hamstring injury and ruled out."',
      ],
      correctIndex: 1,
    },
    {
      question: '"It\'s not as serious as first feared." What does this mean?',
      options: [
        'The injury is worse than everyone expected',
        'The injury is not as bad as the initial reaction suggested',
        'The doctors are not sure how serious the injury is yet',
      ],
      correctIndex: 1,
    },
    {
      question: 'What is a "setback" in the context of recovering from injury?',
      options: [
        'A new problem during recovery that delays the return to fitness',
        'A positive update showing the player is recovering faster than expected',
        'The initial injury that first ruled the player out',
      ],
      correctIndex: 0,
    },
    {
      question: '"He is ahead of schedule." What does this mean for his recovery?',
      options: [
        'He is taking longer to recover than expected',
        'He has returned to training on exactly the planned date',
        'He is recovering faster than expected and may return sooner',
      ],
      correctIndex: 2,
    },
    {
      question: 'Which present perfect sentence is WRONG?',
      options: [
        '"She has undergone surgery on her knee."',
        '"The club has announced the injury."',
        '"He have returned to training ahead of schedule."',
      ],
      correctIndex: 2,
    },
    {
      question: 'What is "rehab" in football?',
      options: [
        'A return to full match fitness — playing in competitive games again',
        'The process of recovering from injury through specific exercises and treatment',
        'The medical test that shows what is happening inside the body',
      ],
      correctIndex: 1,
    },
  ],

  completeSentenceExercise: {
    instructions: 'Complete each sentence using the correct present perfect form.',
    items: [
      {
        sentence: 'She _____ a hamstring injury in training this morning.',
        options: ['picked up', 'has picked up', 'have picked up'],
        correctIndex: 1,
        explanation: '"Has picked up" is correct — present perfect with singular subject "she." "She has picked up" = has + past participle. We use the present perfect here because the injury happened recently (this morning) and is still relevant now (she is currently injured). "Picked up" (past simple) would disconnect the event from the present — we would say this for something in the more distant past. "Have picked up" is wrong — "she" is singular, so we use "has" not "have."',
      },
      {
        sentence: 'The club _____ that he will undergo surgery next week.',
        options: ['has confirmed', 'have confirmed', 'confirmed'],
        correctIndex: 0,
        explanation: '"Has confirmed" is correct — present perfect for a recent announcement. "The club" is treated as singular in British English (the club HAS), so "has confirmed" is correct. "Have confirmed" would be for a plural subject like "they." "Confirmed" (past simple) is also possible in a news context, but the present perfect "has confirmed" is more common for very recent announcements in sports reporting.',
      },
      {
        sentence: 'They _____ not _____ the full extent of the injury yet.',
        options: ['have / confirmed', 'has / confirmed', 'have / confirm'],
        correctIndex: 0,
        explanation: '"Have / confirmed" is correct. Negative present perfect: have/has + not + past participle. "They have not confirmed" = they + have + not + confirmed (past participle). "Has" is wrong — "they" is plural, use "have." "Have / confirm" uses the base form "confirm" instead of the past participle "confirmed" — wrong. Remember: have/has + not + PAST PARTICIPLE. "Confirmed" is both the past simple and the past participle of "confirm."',
      },
      {
        sentence: 'She _____ to training this week — two weeks earlier than the doctors expected.',
        options: ['returned', 'has returned', 'have returned'],
        correctIndex: 1,
        explanation: '"Has returned" is correct — present perfect for a recent event that is still relevant now. The fact she has returned to training is current news — it happened this week and it affects the current squad situation. "Returned" (past simple) is possible but less natural for something described as happening "this week" — "this week" is a present-period time expression that naturally goes with the present perfect. "Have returned" is wrong — "she" is singular.',
      },
      {
        sentence: 'He _____ a setback in his recovery — he has had to stop rehab for another week.',
        options: ['suffered', 'has suffered', 'have suffered'],
        correctIndex: 1,
        explanation: '"Has suffered" is correct — present perfect for recent news. The setback happened recently and is still highly relevant (he is currently stopped from rehab). Notice the second clause: "he has had to stop rehab" — also present perfect, reinforcing that everything in this sentence is recent and still relevant. "Suffered" (past simple) would work if this were historical: "He suffered a setback last year." "Have suffered" is wrong — singular subject "he."',
      },
      {
        sentence: 'The scan results _____ come back yet — we are waiting for the news.',
        options: ['have not', 'has not', 'did not'],
        correctIndex: 0,
        explanation: '"Have not" is correct. "The scan results have not come back yet." "Yet" is a key word — it is almost always used with the present perfect in negative sentences. "Not yet" = up to this moment in time, it has not happened. "Has not" is wrong — "the scan results" is plural (results = plural). "Did not come back yet" — "yet" with the past simple is less natural in British English (more common in American English). In British English, "have not ... yet" is the standard form.',
      },
    ],
  },

  groupActivities: {
    chooseResponse: {
      instructions: 'Work in groups. Choose the best response — using the present perfect for injury updates.',
      items: [
        {
          customerLine: 'Is your striker available for the match on Saturday?',
          options: [
            '"No — she picked up a hamstring injury last week and she is still injured now."',
            '"No — she has picked up a hamstring injury and has been ruled out of Saturday\'s match. She has gone for a scan and we are waiting for the results."',
            '"No — she has been picking up a hamstring injury and has been ruled out."',
          ],
          correctIndex: 1,
          explanation: 'B is correct. "Has picked up" = present perfect for recent injury. "Has been ruled out" = present perfect for recent confirmation of unavailability. "Has gone for a scan" = present perfect for something that happened very recently. All three use the present perfect correctly because each event is recent and still relevant to the current situation. A uses past simple — possible but less natural for something still relevant now. C uses present perfect continuous ("has been picking up") — wrong for a one-time event.',
        },
        {
          customerLine: 'Is there any update on the player who came off injured in the last match?',
          options: [
            '"The club has confirmed he has suffered a grade two hamstring strain. He has been ruled out for four to six weeks and has started his rehab programme."',
            '"The club confirmed that he suffered a grade two hamstring strain and he is ruled out for four to six weeks."',
            '"The club has been confirming he has been suffering a grade two hamstring strain."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. Multiple present perfect uses: "has confirmed" (recent announcement), "has suffered" (recent diagnosis still affecting him), "has been ruled out" (current unavailability), "has started" (recent beginning of rehab). All connected to the present moment. B uses past simple throughout — grammatically possible but less natural for ongoing relevant news. C uses incorrect present perfect continuous for events that are not ongoing processes.',
        },
        {
          customerLine: 'When will the player return from injury?',
          options: [
            '"She has not returned yet — but she has made good progress in rehab and has been cleared to return to light training. We hope she will be available for selection in two weeks."',
            '"She did not return yet — but she made good progress in rehab and was cleared for light training. We hope she will be available in two weeks."',
            '"She has not been returning yet — but she has been making good progress and has been being cleared for light training."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "Has not returned yet" = present perfect negative with "yet." "Has made good progress" = recent development still relevant. "Has been cleared" = recent confirmation by medical staff. "Will be available" = future (not present perfect). B uses past simple throughout — "did not return yet" is less natural (British English prefers present perfect with "yet"). C has incorrect continuous forms.',
        },
        {
          customerLine: 'How do you prevent hamstring injuries in your squad?',
          options: [
            '"We have put a lot of work into injury prevention this pre-season — we have introduced specific hamstring exercises into every warm-up and have monitored each player\'s training load carefully."',
            '"We put a lot of work into injury prevention this pre-season — we introduced specific exercises and monitored each player\'s load."',
            '"We have been putting a lot of work into injury prevention — we have been introducing exercises and have been monitoring the load."',
          ],
          correctIndex: 0,
          explanation: 'A is correct. "Have put" = work done in the current period (this pre-season) with ongoing relevance. "Have introduced" = recent change that is still in place. "Have monitored" = ongoing monitoring that started in the recent past. B uses past simple — possible but sounds like it is finished and no longer relevant. C uses present perfect continuous throughout — this can be correct in some cases ("have been putting"), but "have been introducing" and "have been monitoring" sound slightly awkward for completed changes that are now standard practice.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'There are three mistakes with the present perfect in this injury update. Find them.',
      dialogue: [
        { speaker: 'Coach Diallo', text: 'I have some injury news before we start. Kezia has picked up a knee injury in training.' },
        { speaker: 'Sofia', text: 'Oh no — has she went for a scan yet?' },
        { speaker: 'Coach Diallo', text: 'Yes — she has gone this morning. We have not received the results yet.' },
        { speaker: 'Ronaldo', text: 'Is anyone else injured? Has Amara returned to training yet?' },
        { speaker: 'Coach Diallo', text: 'Amara have returned to training this week — she is ahead of schedule, which is great news.' },
        { speaker: 'Sofia', text: 'And what about Marcus? He has suffered a setback last month and I have not seen him train recently.' },
      ],
      mistakes: [
        {
          lineIndex: 1,
          incorrectText: 'has she went for a scan yet?',
          correction: 'has she gone for a scan yet?',
          explanation: '"Went" is the past simple form of "go" — but in the present perfect, we need the PAST PARTICIPLE. The past participle of "go" is "gone" (not "went"). Present perfect = have/has + PAST PARTICIPLE. "Has she gone" = correct. Common irregular past participles: go → gone, come → come, see → seen, take → taken, do → done. "Went" is only used in past simple: "She went for a scan yesterday." Present perfect: "She has gone for a scan."',
        },
        {
          lineIndex: 4,
          incorrectText: 'Amara have returned to training this week',
          correction: 'Amara has returned to training this week',
          explanation: 'With singular subjects (Amara = a person = singular), we use "has" — not "have." "Amara has returned" = correct. "Amara have returned" = wrong. The rule: I have / you have / he-she-it HAS / we have / they have. "Amara" is a proper noun (a specific person), so she is "she" — third person singular. Always "has" for singular subjects in the present perfect.',
        },
        {
          lineIndex: 5,
          incorrectText: 'He has suffered a setback last month',
          correction: 'He suffered a setback last month',
          explanation: '"Last month" is a past time expression — it refers to a specific, finished period in the past. The present perfect CANNOT be used with specific past time expressions like "last month," "yesterday," "in 2023," "two weeks ago." These expressions signal the PAST SIMPLE. "He suffered a setback last month" = correct (past simple + specific past time). "He has suffered a setback" would be correct WITHOUT the time expression — to emphasise current relevance.',
        },
      ],
    },
    finishTheLine: {
      instructions: "Complete the injury update press conference — use the present perfect correctly.",
      items: [
        {
          customerLine: 'Ronaldo: Can you give us an update on all the injured players in your squad?',
          salespersonStart: 'Coach Diallo: Of course. We have had a difficult week for injuries.',
          suggestedCompletion: 'Kezia has picked up a hamstring strain and has been ruled out for two to three weeks. She has already started her rehab and the physio is pleased with her attitude. Marcus has returned to training this week after his knee problem — he has trained fully for three days and has been cleared to play. Amara has suffered a setback in her recovery — she felt something during light running and has had to rest for another week. It is not as serious as first feared but it has delayed her return.',
        },
        {
          customerLine: 'Sofia: How do you manage the squad when several key players have been ruled out?',
          salespersonStart: 'Coach Diallo: It is always a challenge — but it is an opportunity for other players too.',
          suggestedCompletion: 'We have had to adjust our tactics this week because we have lost two key players to injury. I have spoken to the squad about the situation and they have responded brilliantly. Players who have not had many chances to play have stepped up — they have trained at a very high level and they have earned their opportunity. We have also looked at the training load carefully — we have reduced the intensity slightly to protect the players who are on the edge. The physio has cleared everyone else to play, so we go into the match in reasonable shape.',
        },
        {
          customerLine: 'Ronaldo: Is it true that hamstring injuries are more common than any other type in football?',
          salespersonStart: 'Coach Diallo: Yes — research has shown that hamstring injuries are the most common muscular injury in professional football.',
          suggestedCompletion: 'In the last two seasons alone, we have lost over 200 training days across the squad to hamstring problems. We have tried many prevention strategies — we have introduced Nordic curl exercises, we have monitored sprint loads very carefully, and we have changed the warm-up protocol. The research has confirmed that these measures help. But despite everything we have done, hamstring injuries have not disappeared. The nature of the sport — the sudden accelerations, the high-speed sprinting — means they will always be a risk.',
        },
        {
          customerLine: 'Sofia: What happens when a player has undergone surgery? How do they return to the team?',
          salespersonStart: 'Coach Diallo: A player who has undergone surgery follows a very specific return-to-play protocol.',
          suggestedCompletion: 'First, the surgery has to be successful — then the rehab begins. The physio has designed a programme that gradually increases the physical load. In the early weeks, the player has done only very light work — pool running, cycling, gentle strength work. As the weeks have progressed, the intensity has increased. When the player has completed all the stages of rehab, they have returned to light training with the squad. Only after they have trained fully for two weeks without any setback does the doctor clear them for match selection. The whole process has taken between 6 and 12 months for serious surgeries.',
        },
      ],
    },
  },
};

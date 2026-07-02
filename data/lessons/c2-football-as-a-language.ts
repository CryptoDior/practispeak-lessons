import { Lesson } from '@/types/lesson';
export const c2FootballAsALanguage: Lesson = {
  slug: 'c2-football-as-a-language',
  title: 'Football as a Language',
  subtitle: 'Unit 3 — Football philosophy',
  level: 'C1-C2',
  description: 'Explore how football communicates through space, movement, and pattern — and how to describe it with precise analytical English.',
  heroImage: '/images/hero.png',
  warmUp: {
    questions: [
      'Can you think of a moment in a match where a team said something without the ball moving? What happened?',
      'What does it mean when people say a team speaks the same language on the pitch?',
      'Is spatial intelligence something you are born with, or can it be trained? Why do you think that?',
    ],
  },
  grammarFocus: {
    focusTitle: 'Describing Space and Movement',
    description: 'Good football analysis uses precise spatial language. Key patterns: noun phrases built around space ("the compression of the block"), prepositional phrases for position ("in behind the defensive line"), and cause-effect structures ("by dropping off, he creates a passing angle"). These let you say exactly what happened and why.',
    positiveExamples: [
      { sentence: 'By compressing the space around the ball, they cut off every passing option.', note: 'Cause-effect: "by + gerund" explains the tactical reason for an action.' },
      { sentence: 'The run in behind opened up a channel between the two centre-backs.', note: '"Movement in behind" is a standard analytical noun phrase for counter-attacking play.' },
      { sentence: 'What triggered the press was the goalkeeper\'s long kick.', note: 'Cleft sentence places emphasis on the trigger — analytical and precise.' },
    ],
    negativeExamples: [],
  },
  vocabulary: [
    { word: 'SPATIAL', partOfSpeech: 'adjective', definition: 'relating to space and the positions of things', example: '"His spatial awareness lets him find pockets of space that others miss."', imageSlug: '/images/hero.png' },
    { word: 'COMPRESS', partOfSpeech: 'verb', definition: 'to push or squeeze something into a smaller space', example: '"They compress into a low block to make it very hard to score."', imageSlug: '/images/hero.png' },
    { word: 'CHANNEL', partOfSpeech: 'noun', definition: 'a corridor of space, usually between a centre-back and a full-back', example: '"The striker ran into the channel and dragged the defender wide."', imageSlug: '/images/hero.png' },
    { word: 'TRIGGER', partOfSpeech: 'noun / verb', definition: 'a signal or event that starts a planned action', example: '"A back pass is the trigger for the whole team to press high."', imageSlug: '/images/hero.png' },
    { word: 'ARTICULATE', partOfSpeech: 'verb', definition: 'to express something clearly — for a team, to carry out a plan with precision', example: '"The best teams articulate their press without needing to speak."', imageSlug: '/images/hero.png' },
    { word: 'CHOREOGRAPHY', partOfSpeech: 'noun', definition: 'a carefully planned sequence of movements', example: '"The combination play looked like choreography — every run was timed perfectly."', imageSlug: '/images/hero.png' },
    { word: 'DECODE', partOfSpeech: 'verb', definition: 'to work out the pattern or meaning of something complex', example: '"Good defenders decode the opponent\'s movement before the ball is played."', imageSlug: '/images/hero.png' },
    { word: 'POCKET', partOfSpeech: 'noun', definition: 'a small area of space between defenders that a player moves into', example: '"He drifted into the pocket between the lines and had time on the ball."', imageSlug: '/images/hero.png' },
  ],
  phrasalVerbs: [
    { phrase: 'OPEN UP', definition: 'to create space by moving or spreading wide', example: '"The full-backs pushed forward to open up the play."', imageSlug: '/images/hero.png' },
    { phrase: 'DROP OFF', definition: 'to move backward to receive the ball', example: '"The striker dropped off to link the play and create a passing angle."', imageSlug: '/images/hero.png' },
    { phrase: 'GET IN BEHIND', definition: 'to run past the defensive line into open space', example: '"He timed his run perfectly to get in behind before the pass came."', imageSlug: '/images/hero.png' },
    { phrase: 'SWITCH OFF', definition: 'to lose focus and stop tracking the play', example: '"The goal happened because one midfielder switched off for two seconds."', imageSlug: '/images/hero.png' },
    { phrase: 'PRESS UP', definition: 'to move the defensive line forward as a unit', example: '"When they press up, the offside trap becomes a real weapon."', imageSlug: '/images/hero.png' },
    { phrase: 'READ INTO', definition: 'to find patterns or meaning in something you observe', example: '"You can read into their shape whether they plan to attack wide or through the middle."', imageSlug: '/images/hero.png' },
  ],
  onThePitch: {
    instructions: 'Match each phrase to its meaning. These are used in coaching sessions and analyst meetings.',
    items: [
      { cue: 'He\'s in the channel.', meaning: 'The striker is running through the gap between two defenders.', usage: '"He\'s in the channel — play it early!"', imageSlug: 'otp-language' },
      { cue: 'There\'s no trigger.', meaning: 'The team has not received the signal to start pressing.', usage: '"Hold your shape — there\'s no trigger yet."', imageSlug: 'otp-language' },
      { cue: 'They\'ve compressed the block.', meaning: 'The defending team has moved into a tight, compact shape.', usage: '"They\'ve compressed the block — move it quicker."', imageSlug: 'otp-language' },
      { cue: 'The choreography broke down.', meaning: 'The planned movement failed because of a mistake in the sequence.', usage: '"The choreography broke down when he made the wrong run."', imageSlug: 'otp-language' },
      { cue: 'Drop into the pocket.', meaning: 'Move into the space between the lines.', usage: '"Drop into the pocket — you\'ll have time there."', imageSlug: 'otp-language' },
      { cue: 'They can\'t decode us.', meaning: 'The opponent cannot predict our movement patterns.', usage: '"Keep rotating — they can\'t decode us right now."', imageSlug: 'otp-language' },
    ],
  },
  videos: [],
  dialogue: [
    { speaker: 'Rafael', speakerColor: 'green', text: 'I watched the session back and I think I see what you mean about the team not speaking the same language.' },
    { speaker: 'Coach Ana', speakerColor: 'purple', text: 'Good. Tell me what you noticed.' },
    { speaker: 'Rafael', speakerColor: 'green', text: 'When the press trigger came — the goalkeeper\'s kick — half the team pressed and half held. No agreement.' },
    { speaker: 'Coach Ana', speakerColor: 'purple', text: 'Exactly. Football communicates through shared understanding. If one player decodes the trigger differently, the choreography collapses.' },
    { speaker: 'Rafael', speakerColor: 'green', text: 'So the solution is repetition? Get everyone reading the same cues?' },
    { speaker: 'Coach Ana', speakerColor: 'purple', text: 'Repetition helps, but the deeper problem is spatial awareness. Some players see the pocket and move before the trigger. Others wait.' },
    { speaker: 'Rafael', speakerColor: 'green', text: 'Can spatial intelligence be trained, or is it something you are born with?' },
    { speaker: 'Coach Ana', speakerColor: 'purple', text: 'Both. The instinct is innate, but you develop it through video, deliberate practice, and exactly this kind of conversation.' },
  ],
  matchingExercise: [
    { word: 'spatial', definition: 'relating to space and position on the pitch' },
    { word: 'compress', definition: 'to push into a smaller area' },
    { word: 'channel', definition: 'a gap between two defenders' },
    { word: 'trigger', definition: 'a signal that starts a planned team action' },
    { word: 'articulate', definition: 'to carry out or express a plan with precision' },
    { word: 'choreography', definition: 'a planned sequence of movements' },
    { word: 'decode', definition: 'to understand the pattern of something complex' },
    { word: 'pocket', definition: 'a small space between the lines that a player moves into' },
  ],
  fillBlankExercise: [
    { before: 'The striker\'s run into the', answer: 'channel', after: 'pulled two defenders away from the centre.' },
    { before: 'When they', answer: 'compress', after: 'the space, there is no room to play through the middle.' },
    { before: 'A back pass to the keeper is the', answer: 'trigger', after: 'for the whole team to press together.' },
    { before: 'He moved into the', answer: 'pocket', after: 'between the lines and had three seconds on the ball.' },
    { before: 'A good analyst can', answer: 'decode', after: 'the opponent\'s movement patterns within the first five minutes.' },
    { before: 'The combination play looked like', answer: 'choreography', after: '— every player moved at exactly the right moment.' },
    { before: 'His excellent', answer: 'spatial', after: 'awareness means he always knows where the gaps are before the ball arrives.' },
  ],
  multipleChoiceExercise: [
    { question: 'What does it mean when a player "switches off"?', options: ['He steps into a pocket of space.', 'He loses focus and stops tracking the play.', 'He compresses the space around the ball.'], correctIndex: 1 },
    { question: 'What is a "trigger" in a pressing system?', options: ['A physical signal, like a foul.', 'A specific moment that tells the whole team to press.', 'The player who leads the press.'], correctIndex: 1 },
    { question: 'Which sentence uses spatial language correctly?', options: ['"He decoded the channel into a pocket."', '"The ball triggered behind the compression."', '"By dropping off, he created space between the lines."'], correctIndex: 2 },
    { question: 'What does "articulate" mean in a football context?', options: ['To write the pressing plan down.', 'To carry out the tactical plan as a team, clearly and precisely.', 'To argue that pressing is the best approach.'], correctIndex: 1 },
    { question: 'What best describes "choreography" in football?', options: ['Unpredictable individual movement.', 'A planned pattern where each player knows exactly what to do and when.', 'The ability to read the opponent\'s shape.'], correctIndex: 1 },
  ],
  completeSentenceExercise: {
    instructions: 'Choose the best word or phrase to complete each sentence.',
    items: [
      { sentence: 'The left-back pushed forward to _____ the play and give more options on that side.', options: ['compress', 'open up', 'decode'], correctIndex: 1, explanation: '"Open up" means to create space — which is exactly what a forward-running full-back does.' },
      { sentence: 'He moved into the _____ between the lines and received the ball with his back to goal.', options: ['channel', 'trigger', 'pocket'], correctIndex: 2, explanation: 'A "pocket" is the small space between lines — a "channel" is the gap between defenders out wide.' },
      { sentence: 'The analysts spent two hours trying to _____ the opponent\'s rotation patterns before the match.', options: ['decode', 'compress', 'press up'], correctIndex: 0, explanation: '"Decode" means to find meaning or pattern — perfect for video analysis before a game.' },
      { sentence: 'Their _____ awareness let them see and exploit gaps before the ball even arrived.', options: ['tactical', 'spatial', 'choreographic'], correctIndex: 1, explanation: '"Spatial" specifically refers to space and position — the core concept in this lesson.' },
      { sentence: 'The team\'s _____ broke down in the final third because the striker made the wrong run.', options: ['trigger', 'choreography', 'pocket'], correctIndex: 1, explanation: '"Choreography" is the planned movement sequence — one wrong run and it falls apart.' },
      { sentence: 'A sideways pass under pressure is the _____ for the whole midfield to shift across.', options: ['pocket', 'decode', 'trigger'], correctIndex: 2, explanation: 'A "trigger" is the signal that starts a coordinated team response, like a defensive shift.' },
    ],
  },
  groupActivities: {
    chooseResponse: {
      instructions: 'A coaching colleague asks you about the session. Choose the most precise and professional response.',
      items: [
        {
          customerLine: 'The press broke down twice in the second half. What is your read on why?',
          options: [
            'They just were not working hard enough out of possession.',
            'The trigger was not clear — some players pressed on the back pass but others held their shape.',
            'The opponents were too good and found ways through the press.',
          ],
          correctIndex: 1,
          explanation: 'The second option uses precise tactical language and finds the root cause: a breakdown in shared understanding, not effort or opponent quality.',
        },
        {
          customerLine: 'How would you explain "spatial intelligence" to a young player who has never heard the term?',
          options: [
            'It means being clever about football.',
            'It is about reading the game and knowing where to be before the ball arrives — seeing space before others do.',
            'It is the ability to score goals in tight areas.',
          ],
          correctIndex: 1,
          explanation: 'The second option defines the term clearly and connects abstract language to a practical football concept the player can understand and apply.',
        },
      ],
    },
    spotTheMistake: {
      instructions: 'Read this coaching report. Find the two mistakes in tactical language.',
      dialogue: [
        { speaker: 'Coaching Report', speakerColor: 'blue', text: 'In the first half, the team struggled to decode their own pressing system. The trigger came — a back pass — but only the front two compressed. The rest held a mid-block.' },
        { speaker: 'Coaching Report', speakerColor: 'blue', text: 'When the ball entered the spatial, the full-back moved into the pocket and created a channel for the winger.' },
      ],
      mistakes: [
        { lineIndex: 0, incorrectText: 'decode their own pressing system', correction: 'articulate their own pressing system', explanation: '"Decode" means to understand the opponent\'s patterns. "Articulate" is the correct word for carrying out your own system clearly.' },
        { lineIndex: 1, incorrectText: 'entered the spatial', correction: 'entered the space / entered the channel', explanation: '"Spatial" is an adjective, not a noun. You cannot "enter the spatial." The correct phrase is "entered the space" or "entered the channel."' },
      ],
    },
    finishTheLine: {
      instructions: 'A journalist interviews you after training. Complete the analyst\'s response using the vocabulary from this lesson.',
      items: [
        { customerLine: 'What does it mean for a team to speak the same language on the pitch?', salespersonStart: 'It means everyone reads the same cues — when the trigger comes, everyone moves together.', suggestedCompletion: 'It is not verbal. It is spatial. You share an understanding of where to be and when to go, without needing to talk.' },
        { customerLine: 'Is spatial awareness something that can be taught?', salespersonStart: 'Absolutely — through video, repetition, and giving players the vocabulary to describe what they see.', suggestedCompletion: 'Once a player can decode what they are looking at and articulate it, the movement follows naturally.' },
        { customerLine: 'What goes wrong when the choreography breaks down?', salespersonStart: 'Usually one player misreads the trigger or moves into the wrong pocket.', suggestedCompletion: 'One person switches off and the whole pattern collapses — that is why the language has to be shared.' },
      ],
    },
  },
};

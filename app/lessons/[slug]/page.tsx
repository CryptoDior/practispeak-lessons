'use client';
import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLessonBySlug } from '@/data/lessons';
import { Lesson, LessonVideo } from '@/types/lesson';
import LevelBadge from '@/components/LevelBadge';
import VocabCard from '@/components/VocabCard';
import PhrasalVerbCard from '@/components/PhrasalVerbCard';
import DialogueSection from '@/components/DialogueSection';
import MatchingExercise from '@/components/exercises/MatchingExercise';
import FillBlankExercise from '@/components/exercises/FillBlankExercise';
import MultipleChoiceExercise from '@/components/exercises/MultipleChoiceExercise';
import CompletionScreen from '@/components/CompletionScreen';
import GrammarFocusSection from '@/components/GrammarFocusSection';
import RegisterSection from '@/components/RegisterSection';
import ReadingPassageSection from '@/components/ReadingPassageSection';
import GroupActivitiesSection from '@/components/GroupActivitiesSection';
import WarmUpSection from '@/components/WarmUpSection';
import PitchCornerSection from '@/components/exercises/PitchCornerSection';
import CompleteSentenceSection from '@/components/exercises/CompleteSentenceSection';
import DealClinicSection from '@/components/DealClinicSection';
import OnThePitchSection from '@/components/OnThePitchSection';

const DEFAULT_TABS = ['Vocabulary', 'Phrases', 'Videos', 'Dialogue', 'Exercises'] as const;

interface ExerciseScore { score: number; total: number; }
interface Scores {
  pitchCorner?: ExerciseScore;
  completeSentence?: ExerciseScore;
  matching?: ExerciseScore;
  fillBlank?: ExerciseScore;
  multipleChoice?: ExerciseScore;
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) notFound();
  return <LessonContent lesson={lesson!} />;
}

function LessonContent({ lesson }: { lesson: Lesson }) {
  const rawBase = lesson.tabLabels ?? DEFAULT_TABS;
  const baseTabs = rawBase.map((t) =>
    t === 'Videos' && lesson.registerAwareness ? 'Register' : t
  );
  const withWarmUp = lesson.warmUp ? ['Warm Up', ...baseTabs] : baseTabs;

  const hasPhrasalDetails = lesson.phrasalVerbs.some(
    (v) => v.inAction || v.register || v.inContext
  );
  let withPhrasalTabs: string[];
  if (hasPhrasalDetails) {
    const phrasesIdx = withWarmUp.indexOf('Phrases');
    withPhrasalTabs = [
      ...withWarmUp.slice(0, phrasesIdx + 1),
      'In Action', 'Register',
      ...withWarmUp.slice(phrasesIdx + 1),
    ];
  } else {
    withPhrasalTabs = [...withWarmUp];
  }
  const po = hasPhrasalDetails ? 2 : 0;

  const hasOnThePitch = !!lesson.onThePitch;
  let withOnThePitch: string[];
  if (hasOnThePitch) {
    const phrasesIdx2 = withPhrasalTabs.indexOf('Phrases');
    withOnThePitch = [
      ...withPhrasalTabs.slice(0, phrasesIdx2 + 1),
      'On the Pitch',
      ...withPhrasalTabs.slice(phrasesIdx2 + 1),
    ];
  } else {
    withOnThePitch = [...withPhrasalTabs];
  }
  const otp = hasOnThePitch ? 1 : 0;

  const withDealClinic = lesson.dealClinic ? [...withOnThePitch, 'Deal Clinic'] : withOnThePitch;
  const TABS = lesson.groupActivities ? [...withDealClinic, 'Group Activities'] : withDealClinic;

  const wo = lesson.warmUp ? 1 : 0;
  const [activeTab, setActiveTab] = useState(0);
  const [visitedTabs, setVisitedTabs] = useState<Set<number>>(new Set([0]));
  const [scores, setScores] = useState<Scores>({});
  const hasPitchCorner = !!lesson.pitchCorner;
  const hasCompleteSentence = !!lesson.completeSentenceExercise;
  const [pitchCornerDone, setPitchCornerDone] = useState(false);
  const [completeSentenceDone, setCompleteSentenceDone] = useState(false);
  const [showFillBlank, setShowFillBlank] = useState(false);
  const [showMultipleChoice, setShowMultipleChoice] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const goToTab = (i: number) => {
    if (i < 0 || i >= TABS.length) return;
    setActiveTab(i);
    setVisitedTabs((prev) => new Set(Array.from(prev).concat(i)));
  };

  const handlePitchCornerComplete = useCallback((score: number, total: number) => {
    setScores((prev) => ({ ...prev, pitchCorner: { score, total } }));
    setPitchCornerDone(true);
  }, []);

  const handleCompleteSentenceComplete = useCallback((score: number, total: number) => {
    setScores((prev) => ({ ...prev, completeSentence: { score, total } }));
    setCompleteSentenceDone(true);
  }, []);

  const handleMatchingComplete = useCallback((score: number, total: number) => {
    setScores((prev) => ({ ...prev, matching: { score, total } }));
    setShowFillBlank(true);
  }, []);

  const handleFillBlankComplete = useCallback((score: number, total: number) => {
    setScores((prev) => ({ ...prev, fillBlank: { score, total } }));
    setShowMultipleChoice(true);
  }, []);

  const handleMultipleChoiceComplete = useCallback((score: number, total: number) => {
    setScores((prev) => ({ ...prev, multipleChoice: { score, total } }));
  }, []);

  const allDone = !!(scores.matching && scores.fillBlank && scores.multipleChoice) &&
    (!hasPitchCorner || !!scores.pitchCorner) &&
    (!hasCompleteSentence || completeSentenceDone);
  const progress = showCompletion
    ? 100
    : Math.round((visitedTabs.size / TABS.length) * 100);

  if (showCompletion && scores.matching && scores.fillBlank && scores.multipleChoice) {
    return (
      <div className="min-h-screen bg-[#F0F4FF]">
        <SiteHeader />
        <CompletionScreen
          lessonTitle={lesson.title}
          scores={[
            ...(scores.pitchCorner ? [{ label: 'Pitch Corner', score: scores.pitchCorner.score, total: scores.pitchCorner.total }] : []),
            ...(scores.completeSentence ? [{ label: 'Complete the Sentence', score: scores.completeSentence.score, total: scores.completeSentence.total }] : []),
            { label: 'Matching Exercise', score: scores.matching.score, total: scores.matching.total },
            { label: 'Fill in the Blank', score: scores.fillBlank.score, total: scores.fillBlank.total },
            { label: 'Multiple Choice', score: scores.multipleChoice.score, total: scores.multipleChoice.total },
          ]}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F4FF]">

      <div className="bg-gradient-to-br from-[#EEF3FF] via-[#E6EDFF] to-[#D8E7FF]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between py-4 border-b border-blue-100/60">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#066EF5] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-extrabold text-sm leading-none">P</span>
              </div>
              <span className="font-extrabold text-[#066EF5] text-lg">Practispeak</span>
            </Link>
            <Link href="/" className="text-sm text-[#066EF5]/70 hover:text-[#066EF5] font-semibold transition-colors">
              ← All Lessons
            </Link>
          </div>
          <div className="flex items-center justify-between py-8 gap-8">
            <div className="flex-1 min-w-0">
              <LevelBadge level={lesson.level} large />
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-3 mb-1.5 leading-tight">
                {lesson.title}
              </h1>
              <p className="text-gray-500 font-semibold mb-5">{lesson.subtitle}</p>
              <div className="flex items-center gap-3 max-w-sm">
                <div className="flex-1 h-2 bg-white/70 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#066EF5] rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-sm font-extrabold text-[#066EF5] w-10 text-right">{progress}%</span>
              </div>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <LessonHeroImage src={lesson.heroImage} alt={lesson.title} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => goToTab(i)}
                className={`flex-shrink-0 px-4 md:px-5 py-4 text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === i
                    ? 'border-[#066EF5] text-gray-900'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {visitedTabs.has(i) && i !== activeTab && (
                  <span className="mr-1.5 text-emerald-500 text-xs">✓</span>
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-8">

        {/* Warm Up */}
        {lesson.warmUp && (
          <section className={activeTab === 0 ? 'block' : 'hidden'}>
            <WarmUpSection warmUp={lesson.warmUp} heroImage={lesson.heroImage} onStart={() => goToTab(1)} />
          </section>
        )}

        {/* Vocabulary */}
        <section className={activeTab === wo ? 'block' : 'hidden'}>
          <SectionHeader
            title="Vocabulary"
            subtitle={`${lesson.vocabulary.length} key words for this lesson`}
            instruction={lesson.vocabulary.some(w => w.partOfSpeech === 'abbreviation') ? 'Listen to the audio for the full abbreviation' : undefined}
          />
          <div className="flex flex-col gap-6">
            {lesson.vocabulary.map((word, i) => <VocabCard key={word.word} word={word} index={i} />)}
          </div>
          {lesson.grammarFocus && <GrammarFocusSection grammar={lesson.grammarFocus} />}
        </section>

        {/* Phrases */}
        <section className={activeTab === wo + 1 ? 'block' : 'hidden'}>
          <SectionHeader
            title={TABS[wo + 1]}
            subtitle={`${lesson.phrasalVerbs.length} ${TABS[wo + 1].toLowerCase()} and their meanings`}
          />
          <div className="flex flex-col gap-6">
            {lesson.phrasalVerbs.map((verb, i) => <PhrasalVerbCard key={verb.phrase} verb={verb} index={i} />)}
          </div>
        </section>

        {/* In Action — 3 scenario cards, each covering 2 phrasal verbs */}
        {hasPhrasalDetails && (
          <section className={activeTab === wo + 2 ? 'block' : 'hidden'}>
            <SectionHeader title="In Action" subtitle="Hear how these phrases sound in real B2B situations" subtitleClass="text-gray-700 font-semibold" />
            <div className="flex flex-col gap-6">
              {[0, 1, 2].map((cardIdx) => {
                const verbs = lesson.phrasalVerbs.filter(v => v.inAction).slice(cardIdx * 2, cardIdx * 2 + 2);
                if (verbs.length === 0) return null;
                const CARD_META = [
                  { badge: 'B2B CALL', title: 'Phrases in a live sales call', icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M3 5.5A2.5 2.5 0 015.5 3h1.372c.86 0 1.61.586 1.819 1.42l.492 1.968A2 2 0 018.23 8.37l-.842.421a10.08 10.08 0 005.82 5.82l.421-.841a2 2 0 011.982-.954l1.968.492A2 2 0 0119 15.128V16.5A2.5 2.5 0 0116.5 19C9.044 19 3 12.956 3 5.5z"/></svg>
                  )},
                  { badge: 'STRATEGY DECK', title: 'Phrases in a written pitch context', icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
                  )},
                  { badge: 'CLIENT MEETING', title: 'Phrases in a client-facing meeting', icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10"><path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"/></svg>
                  )},
                ];
                const meta = CARD_META[cardIdx];
                return (
                  <div key={cardIdx} className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden">
                    {/* Dark image header */}
                    <div className="relative bg-[#0f172a] w-full" style={{ aspectRatio: "16/9" }}>
                      <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                      {meta.icon}
                      </div>
                    </div>
                    {/* Badge + title */}
                    <div className="flex items-center gap-3 px-6 pt-5 pb-3">
                      <span className="text-xs font-extrabold tracking-widest text-[#066EF5] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase">{meta.badge}</span>
                      <span className="font-bold text-gray-700 text-sm">{meta.title}</span>
                    </div>
                    {/* Quotes */}
                    <div className="px-6 pb-5 space-y-5">
                      {verbs.map(verb => (
                        <div key={verb.phrase}>
                          <span className="text-xs font-extrabold tracking-widest text-gray-600 uppercase mb-1.5 block">{verb.phrase}</span>
                          <p className="text-gray-600 text-base leading-relaxed italic">&ldquo;{verb.inAction}&rdquo;</p>
                        </div>
                      ))}
                    </div>
                    {/* Audio player */}
                    <div className="px-6 pb-6 border-t border-gray-50 pt-4">
                      <ScenarioAudioPlayer src={`/audio/inaction-scenario-${cardIdx + 1}.mp3`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Register */}
        {hasPhrasalDetails && (
          <section className={activeTab === wo + 3 ? 'block' : 'hidden'}>
            <SectionHeader title="Register" subtitle="Understand when and how to use each phrase — formal, neutral, or informal" subtitleClass="text-gray-600 font-semibold" />
            {/* Visual Examples */}
            {lesson.phrasalVerbs.some(v => v.visualExamples?.length) && (
              <div className="mt-10 space-y-12">
                <h3 className="text-lg font-extrabold tracking-wide text-gray-900">Visual Examples</h3>
                {lesson.phrasalVerbs.filter(v => v.visualExamples?.length).map(verb => (
                  <div key={verb.phrase}>
                    <div className="mb-5 pb-3 border-b border-blue-100">
                      <p className="text-sm font-extrabold tracking-widest text-gray-700 uppercase mb-1">Focus phrase</p>
                      <h4 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">{verb.phrase}</h4>
                    </div>
                    <div className="space-y-6">
                      {verb.visualExamples!.map((ex, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-gray-200 shadow-[0_2px_12px_rgba(6,110,245,0.06)] overflow-hidden">
                          {/* Number + brand header */}
                          <div className="flex items-center gap-3 px-5 pt-5 pb-3">
                            <div className="w-7 h-7 rounded-full bg-[#066EF5] text-white flex items-center justify-center font-extrabold text-xs flex-shrink-0">{idx + 1}</div>
                            <div>
                              <span className="font-extrabold text-gray-900 text-sm block">{ex.brand}</span>
                              <span className="text-xs text-gray-400 font-semibold">{ex.context}</span>
                            </div>
                          </div>
                          {/* Caption — above image */}
                          <div className="px-5 pb-3">
                            <p className="text-base font-semibold text-gray-800 leading-relaxed italic">&ldquo;{ex.caption}&rdquo;</p>
                          </div>
                          {/* Image */}
                          <div className="relative bg-gray-100 w-full overflow-hidden mx-auto" style={{ aspectRatio: '3/2', maxHeight: '260px' }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={ex.imageSlug} alt={ex.brand} className="absolute inset-0 w-full h-full object-contain" onError={e => { const t = e.target as HTMLImageElement; t.style.display='none'; (t.nextElementSibling as HTMLElement).style.display='flex'; }} />
                            <div className="hidden absolute inset-0 items-center justify-center flex-col text-slate-500">
                              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                              <span className="text-xs mt-2 font-semibold text-slate-400">{ex.brand} — Image Placeholder</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </section>
        )}


        {/* On the Pitch */}
        {hasOnThePitch && lesson.onThePitch && (
          <section className={activeTab === TABS.indexOf('On the Pitch') ? 'block' : 'hidden'}>
            <SectionHeader
              title="On the Pitch"
              subtitle="Real phrases used on the pitch and at training — learn them, shout them!"
            />
            <OnThePitchSection section={lesson.onThePitch} />
          </section>
        )}

        {/* Videos / Register (vocab awareness) */}
        <section className={activeTab === wo + po + otp + 2 ? 'block' : 'hidden'}>
          {lesson.registerAwareness ? (
            <>
              <SectionHeader title={TABS[wo + po + otp + 2]} subtitle="How these words change across different contexts" />
              <RegisterSection entries={lesson.registerAwareness} traps={lesson.registerTraps} />
            </>
          ) : (
            <>
              <SectionHeader title="Videos" subtitle="Watch these terms used in context" />
              <div className="grid gap-6 md:grid-cols-2">
                {lesson.videos.map((video, i) => <VideoCard key={i} video={video} />)}
              </div>
            </>
          )}
        </section>

        {/* Dialogue / Reading Passage */}
        <section className={activeTab === wo + po + otp + 3 ? 'block' : 'hidden'}>
          {lesson.readingPassage ? (
            <>
              <SectionHeader title={TABS[wo + po + otp + 3]} subtitle="Read the passage — highlighted words are from this lesson" />
              <ReadingPassageSection passage={lesson.readingPassage} prompts={lesson.productionPrompts} />
            </>
          ) : (
            <>
              <SectionHeader title="Dialogue" subtitle={lesson.dialogueSubtitle || 'Read the dialogue and hover the blue words for definitions'} />
              <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden">
                <DialogueSection lines={lesson.dialogue} />
              </div>
            </>
          )}
        </section>

        {/* Exercises */}
        <section className={activeTab === wo + po + otp + 4 ? 'block' : 'hidden'}>
          <SectionHeader title="Exercises" subtitle="Complete all three exercises to see your final score" />
          <div className="space-y-6">
            {lesson.pitchCorner && (
              <ExerciseCard number={1} title="Pitch Corner" description="Read the pitch — click or drag words from the bank to fill the gaps.">
                <PitchCornerSection pitchCorner={lesson.pitchCorner} onComplete={handlePitchCornerComplete} />
              </ExerciseCard>
            )}
            {lesson.completeSentenceExercise && (
              <ExerciseCard number={1} title="Complete the Sentence" description="Choose the correct answer to complete each sentence.">
                <CompleteSentenceSection exercise={lesson.completeSentenceExercise} onComplete={handleCompleteSentenceComplete} />
              </ExerciseCard>
            )}
            {(!hasPitchCorner && !hasCompleteSentence || pitchCornerDone || completeSentenceDone) && (
              <ExerciseCard number={hasPitchCorner || hasCompleteSentence ? 2 : 1} title="Matching" description="Click a word, then click its correct definition.">
                <MatchingExercise pairs={lesson.matchingExercise} onComplete={handleMatchingComplete} />
              </ExerciseCard>
            )}
            {showFillBlank && (
              <ExerciseCard number={hasPitchCorner || hasCompleteSentence ? 3 : 2} title="Fill in the Blank" description="Drag the correct words from the word bank to complete each sentence.">
                <FillBlankExercise items={lesson.fillBlankExercise} onComplete={handleFillBlankComplete} />
              </ExerciseCard>
            )}
            {showMultipleChoice && (
              <ExerciseCard number={hasPitchCorner || hasCompleteSentence ? 4 : 3} title="Multiple Choice" description="Choose the best answer for each question about the dialogue.">
                <MultipleChoiceExercise items={lesson.multipleChoiceExercise} onComplete={handleMultipleChoiceComplete} />
              </ExerciseCard>
            )}
            {allDone && (
              <div className="text-center py-4">
                <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-[20px] mb-5">
                  <p className="text-emerald-700 font-extrabold text-lg">All exercises complete! Great work! 🎉</p>
                </div>
                <button
                  onClick={() => setShowCompletion(true)}
                  className="px-10 py-4 bg-[#066EF5] text-white font-extrabold text-lg rounded-2xl hover:bg-blue-600 shadow-[0_4px_16px_rgba(6,110,245,0.3)] hover:shadow-[0_6px_24px_rgba(6,110,245,0.4)] transition-all active:scale-95"
                >
                  View Final Results →
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Deal Clinic */}
        {lesson.dealClinic && (
          <section className={activeTab === TABS.indexOf('Deal Clinic') ? 'block' : 'hidden'}>
            <SectionHeader title="Deal Clinic" subtitle="Read the conversation — judge each highlighted move: Good or Weak?" />
            <DealClinicSection dealClinic={lesson.dealClinic} />
          </section>
        )}

        {/* Group Activities */}
        {lesson.groupActivities && (
          <section className={activeTab === TABS.indexOf('Group Activities') ? 'block' : 'hidden'}>
            <SectionHeader title="Group Activities" subtitle="Role-play scenarios and discussion questions for group classes" />
            <GroupActivitiesSection activities={lesson.groupActivities} />
          </section>
        )}

        {/* Prev / Next */}
        <div className="flex justify-between mt-10 pt-6 border-t border-blue-100">
          <button
            onClick={() => goToTab(activeTab - 1)}
            disabled={activeTab === 0}
            className="px-5 py-2.5 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl hover:border-[#066EF5] hover:text-[#066EF5] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            ← Previous
          </button>
          {activeTab < TABS.length - 1 && (
            <button
              onClick={() => goToTab(activeTab + 1)}
              className="px-5 py-2.5 bg-[#066EF5] text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-sm"
            >
              Next →
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

function LessonHeroImage({ src, alt }: { src?: string; alt: string }) {
  const [imgReady, setImgReady] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setImgReady(true);
  }, [src]);
  return (
    <div className="relative w-56 lg:w-64 aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(6,110,245,0.15)] flex-shrink-0">
      <div className="absolute inset-0"><HeroPlaceholder /></div>
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef} src={src} alt="" aria-hidden={!imgReady}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imgReady ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImgReady(true)}
          onError={() => setImgReady(false)}
        />
      )}
    </div>
  );
}

function HeroPlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#D6E4FF] to-[#B8CEFF] flex items-center justify-center">
      <svg viewBox="0 0 96 60" width="96" height="60" fill="none" aria-hidden="true">
        <path d="M18 22 Q14 22 8 30 Q4 36 5 43 Q6 50 13 52 Q20 54 25 47 L34 42 L62 42 L71 47 Q76 54 83 52 Q90 50 91 43 Q92 36 88 30 Q82 22 78 22 L62 18 Q55 14 41 14 Q27 14 18 22Z" fill="#066EF5" fillOpacity="0.18" stroke="#066EF5" strokeOpacity="0.35" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="24" y="27" width="5" height="14" rx="2" fill="#066EF5" fillOpacity="0.3"/>
        <rect x="19.5" y="31.5" width="14" height="5" rx="2" fill="#066EF5" fillOpacity="0.3"/>
        <circle cx="64" cy="29" r="3" fill="#066EF5" fillOpacity="0.22" stroke="#066EF5" strokeOpacity="0.4" strokeWidth="1.2"/>
        <circle cx="70" cy="34" r="3" fill="#066EF5" fillOpacity="0.22" stroke="#066EF5" strokeOpacity="0.4" strokeWidth="1.2"/>
        <circle cx="64" cy="39" r="3" fill="#066EF5" fillOpacity="0.22" stroke="#066EF5" strokeOpacity="0.4" strokeWidth="1.2"/>
        <circle cx="58" cy="34" r="3" fill="#066EF5" fillOpacity="0.22" stroke="#066EF5" strokeOpacity="0.4" strokeWidth="1.2"/>
        <circle cx="38" cy="36" r="6" fill="#066EF5" fillOpacity="0.15" stroke="#066EF5" strokeOpacity="0.3" strokeWidth="1.2"/>
        <circle cx="54" cy="26" r="5" fill="#066EF5" fillOpacity="0.12" stroke="#066EF5" strokeOpacity="0.25" strokeWidth="1.2"/>
        <circle cx="47" cy="26" r="3" fill="#066EF5" fillOpacity="0.25"/>
      </svg>
    </div>
  );
}

function ExerciseCard({ number, title, description, children }: { number: number; title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_20px_rgba(6,110,245,0.08)] border border-gray-100 p-6 md:p-8">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-8 h-8 rounded-full bg-[#066EF5] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">{number}</div>
        <div>
          <h3 className="font-extrabold text-gray-900 text-base">{title}</h3>
          <p className="text-gray-500 text-sm mt-0.5">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#066EF5] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-extrabold text-sm leading-none">P</span>
          </div>
          <span className="font-extrabold text-[#066EF5] text-lg">Practispeak</span>
        </Link>
        <Link href="/" className="text-sm text-gray-400 hover:text-[#066EF5] transition-colors font-semibold">
          ← All Lessons
        </Link>
      </div>
    </header>
  );
}

function SectionHeader({ title, subtitle, instruction, subtitleClass }: { title: string; subtitle: string; instruction?: string; subtitleClass?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{title}</h2>
      <p className={`text-sm ${subtitleClass ?? "text-gray-400 font-semibold"}`}>{subtitle}</p>
      {instruction && <p className="text-blue-500 text-sm font-medium mt-1">{instruction}</p>}
    </div>
  );
}

function VideoCard({ video }: { video: LessonVideo }) {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-[#F0F4FF] to-blue-50 flex items-center justify-center">
        {video.youtubeId.startsWith('PLACEHOLDER') ? (
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#066EF5]/10 border-2 border-[#066EF5]/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-[#066EF5] text-2xl">▶</span>
            </div>
            <p className="text-gray-500 text-sm font-bold">Video Coming Soon</p>
            <p className="text-gray-400 text-xs mt-1 font-semibold">Your teacher will share the link</p>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-extrabold text-gray-900 text-base mb-1">{video.title}</h3>
        {video.description && <p className="text-gray-500 text-sm leading-relaxed">{video.description}</p>}
      </div>
    </div>
  );
}

const SCENARIO_WAVEFORM = [4, 7, 12, 8, 14, 6, 10, 16, 9, 13, 5, 11, 8, 14, 7, 10, 5, 12, 8, 6];

function ScenarioAudioPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const audio = new Audio(src);
    setPlaying(true);
    audio.onended = () => setPlaying(false);
    audio.onerror = () => setPlaying(false);
    audio.play().catch(() => setPlaying(false));
  };
  return (
    <button onClick={toggle} className="flex items-center gap-3 group w-full text-left">
      <div className="w-9 h-9 rounded-full bg-[#066EF5] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-blue-600 group-active:scale-95 transition-all">
        <span className="text-white text-[10px] leading-none" style={{ marginLeft: playing ? 0 : '1px' }}>
          {playing ? '⏸' : '▶'}
        </span>
      </div>
      <div className="flex items-center gap-[2px] flex-shrink-0">
        {SCENARIO_WAVEFORM.map((h, i) => (
          <div key={i} className={`w-[2px] rounded-full transition-colors duration-300 ${playing ? 'bg-[#066EF5]' : 'bg-gray-200'}`} style={{ height: `${h}px` }} />
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-400 whitespace-nowrap">Listen to scenario</span>
    </button>
  );
}

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

const DEFAULT_TABS = ['Vocabulary', 'Phrases', 'Videos', 'Dialogue', 'Exercises'] as const;

interface ExerciseScore {
  score: number;
  total: number;
}

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
  const withDealClinic = lesson.dealClinic ? [...withWarmUp, 'Deal Clinic'] : withWarmUp;
  const TABS = lesson.groupActivities
    ? ([...withDealClinic, 'Group Activities'] as const)
    : withDealClinic;
  const wo = lesson.warmUp ? 1 : 0; // warmUp offset — shifts all hard-coded tab indices
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

      {/* ── Gradient header ── */}
      <div className="bg-gradient-to-br from-[#EEF3FF] via-[#E6EDFF] to-[#D8E7FF]">
        <div className="max-w-5xl mx-auto px-4">

          {/* Logo row */}
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

          {/* Title + hero image row */}
          <div className="flex items-center justify-between py-8 gap-8">
            <div className="flex-1 min-w-0">
              <LevelBadge level={lesson.level} large />
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-3 mb-1.5 leading-tight">
                {lesson.title}
              </h1>
              <p className="text-gray-500 font-semibold mb-5">{lesson.subtitle}</p>

              {/* Progress bar */}
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

            {/* Hero image (hidden on small screens) */}
            <div className="hidden md:block flex-shrink-0">
              <LessonHeroImage src={lesson.heroImage} alt={lesson.title} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Tab bar ── */}
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

      {/* ── All sections ── */}
      <main className="max-w-5xl mx-auto px-4 py-8">

        {/* Warm Up — only when lesson has warmUp */}
        {lesson.warmUp && (
          <section className={activeTab === 0 ? 'block' : 'hidden'}>
            <WarmUpSection
              warmUp={lesson.warmUp}
              onStart={() => goToTab(1)}
            />
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
            {lesson.vocabulary.map((word, i) => (
              <VocabCard key={word.word} word={word} index={i} />
            ))}
          </div>
          {lesson.grammarFocus && (
            <GrammarFocusSection grammar={lesson.grammarFocus} />
          )}
        </section>

        {/* Tab 1+wo — Phrasal Verbs / Related Terms */}
        <section className={activeTab === wo + 1 ? 'block' : 'hidden'}>
          <SectionHeader
            title={TABS[wo + 1]}
            subtitle={`${lesson.phrasalVerbs.length} ${TABS[wo + 1].toLowerCase()} and their meanings`}
          />
          <div className="flex flex-col gap-6">
            {lesson.phrasalVerbs.map((verb, i) => (
              <PhrasalVerbCard key={verb.phrase} verb={verb} index={i} />
            ))}
          </div>
        </section>

        {/* Tab 2+wo — Videos / Register */}
        <section className={activeTab === wo + 2 ? 'block' : 'hidden'}>
          {lesson.registerAwareness ? (
            <>
              <SectionHeader title={TABS[wo + 2]} subtitle="How these words change across different contexts" />
              <RegisterSection entries={lesson.registerAwareness} traps={lesson.registerTraps} />
            </>
          ) : (
            <>
              <SectionHeader title="Videos" subtitle="Watch these terms used in context" />
              <div className="grid gap-6 md:grid-cols-2">
                {lesson.videos.map((video, i) => (
                  <VideoCard key={i} video={video} />
                ))}
              </div>
            </>
          )}
        </section>

        {/* Tab 3+wo — Dialogue / In Context */}
        <section className={activeTab === wo + 3 ? 'block' : 'hidden'}>
          {lesson.readingPassage ? (
            <>
              <SectionHeader
                title={TABS[wo + 3]}
                subtitle="Read the passage — highlighted words are from this lesson"
              />
              <ReadingPassageSection
                passage={lesson.readingPassage}
                prompts={lesson.productionPrompts}
              />
            </>
          ) : (
            <>
              <SectionHeader
                title="Dialogue"
                subtitle={lesson.dialogueSubtitle || 'Read the dialogue and hover the blue words for definitions'}
              />
              <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden">
                <DialogueSection lines={lesson.dialogue} />
              </div>
            </>
          )}
        </section>

        {/* Exercises */}
        <section className={activeTab === wo + 4 ? 'block' : 'hidden'}>
          <SectionHeader
            title="Exercises"
            subtitle="Complete all three exercises to see your final score"
          />
          <div className="space-y-6">

            {/* Pitch Corner — shown first when lesson has one */}
            {lesson.pitchCorner && (
              <ExerciseCard
                number={1}
                title="Pitch Corner"
                description="Read the pitch — click or drag words from the bank to fill the gaps."
              >
                <PitchCornerSection
                  pitchCorner={lesson.pitchCorner}
                  onComplete={handlePitchCornerComplete}
                />
              </ExerciseCard>
            )}

            {/* Complete the Sentence — shown first when lesson has one */}
            {lesson.completeSentenceExercise && (
              <ExerciseCard
                number={1}
                title="Complete the Sentence"
                description="Choose the correct answer to complete each sentence."
              >
                <CompleteSentenceSection
                  exercise={lesson.completeSentenceExercise}
                  onComplete={handleCompleteSentenceComplete}
                />
              </ExerciseCard>
            )}

            {(!hasPitchCorner && !hasCompleteSentence || pitchCornerDone || completeSentenceDone) && (
            <ExerciseCard number={hasPitchCorner || hasCompleteSentence ? 2 : 1} title="Matching" description="Click a word, then click its correct definition.">
              <MatchingExercise pairs={lesson.matchingExercise} onComplete={handleMatchingComplete} />
            </ExerciseCard>
            )}

            {showFillBlank && (
              <ExerciseCard
                number={hasPitchCorner || hasCompleteSentence ? 3 : 2}
                title="Fill in the Blank"
                description="Drag the correct words from the word bank to complete each sentence."
              >
                <FillBlankExercise
                  items={lesson.fillBlankExercise}
                  onComplete={handleFillBlankComplete}
                />
              </ExerciseCard>
            )}

            {showMultipleChoice && (
              <ExerciseCard
                number={hasPitchCorner || hasCompleteSentence ? 4 : 3}
                title="Multiple Choice"
                description="Choose the best answer for each question about the dialogue."
              >
                <MultipleChoiceExercise
                  items={lesson.multipleChoiceExercise}
                  onComplete={handleMultipleChoiceComplete}
                />
              </ExerciseCard>
            )}

            {allDone && (
              <div className="text-center py-4">
                <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-[20px] mb-5">
                  <p className="text-emerald-700 font-extrabold text-lg">
                    All exercises complete! Great work! 🎉
                  </p>
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
            <SectionHeader
              title="Deal Clinic"
              subtitle="Read the conversation — judge each highlighted move: Good or Weak?"
            />
            <DealClinicSection dealClinic={lesson.dealClinic} />
          </section>
        )}

        {/* Group Activities */}
        {lesson.groupActivities && (
          <section className={activeTab === TABS.indexOf('Group Activities') ? 'block' : 'hidden'}>
            <SectionHeader
              title="Group Activities"
              subtitle="Role-play scenarios and discussion questions for group classes"
            />
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

/* ── Helper components ── */

function LessonHeroImage({ src, alt }: { src?: string; alt: string }) {
  const [imgReady, setImgReady] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handle cached images: onLoad won't fire if the browser already has it
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setImgReady(true);
    }
  }, [src]);

  return (
    <div className="relative w-56 lg:w-64 aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(6,110,245,0.15)] flex-shrink-0">
      {/* Placeholder always sits beneath — visible whenever no real image is shown */}
      <div className="absolute inset-0">
        <HeroPlaceholder />
      </div>

      {/* Real image fades in on top once loaded; stays invisible (and icon-free) on error */}
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt=""
          aria-hidden={!imgReady}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            imgReady ? 'opacity-100' : 'opacity-0'
          }`}
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
        {/* Controller body */}
        <path d="M18 22 Q14 22 8 30 Q4 36 5 43 Q6 50 13 52 Q20 54 25 47 L34 42 L62 42 L71 47 Q76 54 83 52 Q90 50 91 43 Q92 36 88 30 Q82 22 78 22 L62 18 Q55 14 41 14 Q27 14 18 22Z"
              fill="#066EF5" fillOpacity="0.18" stroke="#066EF5" strokeOpacity="0.35" strokeWidth="1.5" strokeLinejoin="round"/>
        {/* D-pad vertical */}
        <rect x="24" y="27" width="5" height="14" rx="2" fill="#066EF5" fillOpacity="0.3"/>
        {/* D-pad horizontal */}
        <rect x="19.5" y="31.5" width="14" height="5" rx="2" fill="#066EF5" fillOpacity="0.3"/>
        {/* Face buttons */}
        <circle cx="64" cy="29" r="3"   fill="#066EF5" fillOpacity="0.22" stroke="#066EF5" strokeOpacity="0.4" strokeWidth="1.2"/>
        <circle cx="70" cy="34" r="3"   fill="#066EF5" fillOpacity="0.22" stroke="#066EF5" strokeOpacity="0.4" strokeWidth="1.2"/>
        <circle cx="64" cy="39" r="3"   fill="#066EF5" fillOpacity="0.22" stroke="#066EF5" strokeOpacity="0.4" strokeWidth="1.2"/>
        <circle cx="58" cy="34" r="3"   fill="#066EF5" fillOpacity="0.22" stroke="#066EF5" strokeOpacity="0.4" strokeWidth="1.2"/>
        {/* Left joystick */}
        <circle cx="38" cy="36" r="6"   fill="#066EF5" fillOpacity="0.15" stroke="#066EF5" strokeOpacity="0.3" strokeWidth="1.2"/>
        {/* Right joystick */}
        <circle cx="54" cy="26" r="5"   fill="#066EF5" fillOpacity="0.12" stroke="#066EF5" strokeOpacity="0.25" strokeWidth="1.2"/>
        {/* Center button */}
        <circle cx="47" cy="26" r="3"   fill="#066EF5" fillOpacity="0.25"/>
      </svg>
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

function SectionHeader({ title, subtitle, instruction }: { title: string; subtitle: string; instruction?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{title}</h2>
      <p className="text-gray-400 text-sm font-semibold">{subtitle}</p>
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
        <h3 className="font-extrabold text-gray-900 mb-1">{video.title}</h3>
        {video.description && (
          <p className="text-sm text-gray-500 font-semibold">{video.description}</p>
        )}
      </div>
    </div>
  );
}

function ExerciseCard({
  number,
  title,
  description,
  children,
}: {
  number: number;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden">
      <div className="flex items-start gap-4 px-6 py-5 border-b border-gray-50">
        <div className="w-9 h-9 bg-[#066EF5] text-white rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0 shadow-sm mt-0.5">
          {number}
        </div>
        <div>
          <h3 className="text-base font-extrabold text-gray-900 leading-snug">{title}</h3>
          <p className="text-sm text-gray-400 font-medium mt-0.5">{description}</p>
        </div>
      </div>
      <div className="px-6 py-5">
        {children}
      </div>
    </div>
  );
}

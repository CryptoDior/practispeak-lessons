'use client';
import { WarmUp } from '@/types/lesson';

const ICONS = ['💬', '🤔', '💡'];

interface Props {
  warmUp: WarmUp;
  onStart: () => void;
  heroImage?: string;
}

export default function WarmUpSection({ warmUp, onStart, heroImage }: Props) {
  return (
    <div className="max-w-2xl mx-auto">

      {/* 1:1 image placeholder */}
      <div className="aspect-square w-full rounded-[24px] overflow-hidden mb-8 bg-gradient-to-br from-[#D6E4FF] to-[#B8CEFF]">
        {heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[#066EF5] opacity-20 font-extrabold" style={{ fontSize: 'clamp(80px, 20vw, 160px)' }}>
              ?
            </span>
          </div>
        )}
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Warm Up</h2>
        <p className="text-sm font-semibold text-gray-400">
          Discuss these questions with your partner before you start the lesson.
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-10">
        {warmUp.questions.map((q, i) => (
          <div
            key={i}
            className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] px-6 py-5 flex items-start gap-4"
          >
            <span className="flex-shrink-0 w-9 h-9 bg-[#EEF3FF] rounded-full flex items-center justify-center text-lg">
              {ICONS[i]}
            </span>
            <div className="flex-1 pt-1">
              <p className="text-xs font-extrabold text-[#066EF5] uppercase tracking-widest mb-1.5">
                Question {i + 1}
              </p>
              <p className="text-sm font-semibold text-gray-800 leading-relaxed">{q}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={onStart}
          className="px-8 py-3 bg-[#066EF5] text-white font-extrabold text-sm rounded-xl hover:bg-blue-600 transition-all shadow-sm"
        >
          Start the Lesson →
        </button>
      </div>
    </div>
  );
}

'use client';
import Link from 'next/link';

interface Score {
  label: string;
  score: number;
  total: number;
}

interface Props {
  lessonTitle: string;
  scores: Score[];
}

export default function CompletionScreen({ lessonTitle, scores }: Props) {
  const totalScore = scores.reduce((sum, s) => sum + s.score, 0);
  const totalPossible = scores.reduce((sum, s) => sum + s.total, 0);
  const percentage = Math.round((totalScore / totalPossible) * 100);

  const getMessage = () => {
    if (percentage >= 90) return { text: 'Outstanding!', emoji: '🏆', color: 'text-yellow-500' };
    if (percentage >= 70) return { text: 'Great Work!', emoji: '🎯', color: 'text-emerald-600' };
    if (percentage >= 50) return { text: 'Good Effort!', emoji: '💪', color: 'text-[#066EF5]' };
    return { text: 'Keep Practicing!', emoji: '📚', color: 'text-orange-500' };
  };

  const msg = getMessage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-4">
      <div className="bg-white rounded-[24px] shadow-[0_4px_32px_rgba(6,110,245,0.1)] p-8 max-w-md w-full text-center">
        <div className="text-6xl mb-3 select-none">{msg.emoji}</div>
        <h2 className={`text-3xl font-extrabold mb-1 ${msg.color}`}>{msg.text}</h2>
        <p className="text-gray-400 text-sm mb-6 font-semibold">
          Lesson completed:{' '}
          <span className="text-gray-900 font-extrabold">{lessonTitle}</span>
        </p>

        {/* Score block */}
        <div className="bg-gradient-to-br from-[#1245CE] to-[#066EF5] rounded-[20px] p-6 mb-6 text-white shadow-[0_4px_20px_rgba(6,110,245,0.28)]">
          <p className="text-5xl font-extrabold">{percentage}%</p>
          <p className="text-blue-200 text-sm mt-1 font-semibold">
            Total: {totalScore} / {totalPossible} correct
          </p>
        </div>

        {/* Per-exercise breakdown */}
        <div className="space-y-3 mb-8 text-left">
          {scores.map((s) => {
            const pct = s.total > 0 ? Math.round((s.score / s.total) * 100) : 0;
            return (
              <div
                key={s.label}
                className="flex items-center justify-between bg-[#F0F4FF] rounded-xl px-4 py-3"
              >
                <span className="text-sm font-bold text-gray-700">{s.label}</span>
                <div className="flex items-center gap-3">
                  <div className="w-20 h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#066EF5] rounded-full transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-sm font-extrabold text-gray-800 w-10 text-right">
                    {s.score}/{s.total}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="block px-6 py-3 bg-[#066EF5] text-white font-extrabold rounded-xl hover:bg-blue-600 transition-all text-center shadow-sm"
          >
            ← Back to All Lessons
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#F0F4FF] text-gray-600 font-extrabold rounded-xl hover:bg-blue-100 transition-all"
          >
            Retry This Lesson
          </button>
        </div>
      </div>
    </div>
  );
}

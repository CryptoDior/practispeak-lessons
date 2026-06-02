'use client';
import { RegisterEntry } from '@/types/lesson';

const REGISTER_COLORS: Record<string, string> = {
  Informal:    'bg-amber-50 text-amber-700 border-amber-200',
  Neutral:     'bg-blue-50 text-blue-700 border-blue-200',
  Formal:      'bg-purple-50 text-purple-700 border-purple-200',
};

export default function RegisterSection({
  entries,
  traps,
}: {
  entries: RegisterEntry[];
  traps?: string[];
}) {
  return (
    <div className="flex flex-col gap-6">

      {/* Table card */}
      <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-50">
          <h3 className="text-base font-extrabold text-gray-900">Register Awareness</h3>
          <p className="text-sm text-gray-400 font-medium mt-0.5">
            Register = choosing the right language for the right situation.
          </p>
        </div>

        {/* Header row */}
        <div className="grid grid-cols-3 gap-px bg-gray-100 text-[11px] font-extrabold tracking-widest text-gray-400 uppercase">
          <div className="bg-gray-50 px-5 py-3">Context</div>
          <div className="bg-gray-50 px-5 py-3">Register</div>
          <div className="bg-gray-50 px-5 py-3">Example</div>
        </div>

        {/* Data rows */}
        {entries.map((entry, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 gap-px bg-gray-100 ${i % 2 === 0 ? '' : 'bg-opacity-50'}`}
          >
            <div className="bg-white px-5 py-4 text-sm font-semibold text-gray-700 flex items-center">
              {entry.context}
            </div>
            <div className="bg-white px-5 py-4 flex items-center">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${REGISTER_COLORS[entry.register] ?? 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                {entry.register}
              </span>
            </div>
            <div className="bg-white px-5 py-4 text-sm text-gray-500 italic flex items-center">
              &ldquo;{entry.example}&rdquo;
            </div>
          </div>
        ))}
      </div>

      {/* Traps / tips */}
      {traps && traps.length > 0 && (
        <div className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] p-6">
          <h3 className="text-base font-extrabold text-gray-900 mb-4">Register Tips</h3>
          <div className="flex flex-col gap-3">
            {traps.map((trap, i) => {
              const isBad  = trap.startsWith('❌');
              const isGood = trap.startsWith('✅');
              const isTip  = trap.startsWith('🔁') || trap.startsWith('🌍');
              return (
                <div
                  key={i}
                  className={`rounded-xl px-4 py-3 text-sm font-medium leading-relaxed ${
                    isBad  ? 'bg-red-50 text-red-700 border border-red-100' :
                    isGood ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                    isTip  ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                             'bg-gray-50 text-gray-600 border border-gray-100'
                  }`}
                >
                  {trap}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

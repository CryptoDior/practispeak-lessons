import { OnThePitch } from '@/types/lesson';

interface Props {
  section: OnThePitch;
}

export default function OnThePitchSection({ section }: Props) {
  return (
    <div>
      <p className="text-sm text-gray-500 font-semibold mb-6">{section.instructions}</p>
      <div className="flex flex-col gap-4">
        {section.items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(6,110,245,0.06)] border border-gray-100 overflow-hidden"
          >
            {/* Green accent header with the cue */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-extrabold text-sm">{i + 1}</span>
              </div>
              <p className="text-white font-extrabold text-lg tracking-wide leading-snug">
                &ldquo;{item.cue}&rdquo;
              </p>
            </div>

            {/* Meaning + Usage */}
            <div className="px-6 py-5 space-y-4">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-emerald-600 uppercase block mb-1">
                  What it means
                </span>
                <p className="text-gray-800 font-semibold text-base leading-relaxed">
                  {item.meaning}
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <span className="text-xs font-extrabold tracking-widest text-gray-400 uppercase block mb-1">
                  When &amp; who
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.usage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

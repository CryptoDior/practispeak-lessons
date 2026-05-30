'use client';
import { useState } from 'react';
import { DialogueLine, SpeakerColor } from '@/types/lesson';

const speakerTextColors: Record<SpeakerColor, string> = {
  purple: 'text-purple-600',
  green:  'text-emerald-600',
  orange: 'text-orange-500',
  blue:   'text-blue-600',
  red:    'text-red-500',
};

const avatarColors: Record<SpeakerColor, string> = {
  purple: 'bg-purple-100 text-purple-700',
  green:  'bg-emerald-100 text-emerald-700',
  orange: 'bg-orange-100 text-orange-600',
  blue:   'bg-blue-100 text-blue-700',
  red:    'bg-red-100 text-red-600',
};

const borderColors: Record<SpeakerColor, string> = {
  purple: 'border-l-purple-400',
  green:  'border-l-emerald-400',
  orange: 'border-l-orange-400',
  blue:   'border-l-blue-400',
  red:    'border-l-red-400',
};

function TooltipWord({ word, definition }: { word: string; definition: string }) {
  const [show, setShow] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="border-b-2 border-dashed border-[#066EF5] text-[#066EF5] font-bold cursor-help"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onTouchStart={(e) => { e.preventDefault(); setShow((v) => !v); }}
      >
        {word}
      </span>
      {show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-xl whitespace-nowrap z-20 shadow-xl leading-snug pointer-events-none">
          {definition}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </span>
      )}
    </span>
  );
}

function parseText(text: string): React.ReactNode[] {
  const regex = /\[\[([^\]:]+):([^\]]+)\]\]/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<span key={key++}>{text.slice(lastIndex, match.index)}</span>);
    }
    parts.push(<TooltipWord key={key++} word={match[1]} definition={match[2]} />);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(<span key={key++}>{text.slice(lastIndex)}</span>);
  }

  return parts;
}

export default function DialogueSection({ lines }: { lines: DialogueLine[] }) {
  // Unique speakers in order of first appearance
  const speakers = [...new Map(lines.map((l) => [l.speaker, l])).entries()].map(
    ([speaker, l]) => ({ speaker, color: l.speakerColor, avatar: l.speakerAvatar })
  );

  return (
    <div>
      {/* Character row */}
      <div className="flex items-center gap-6 px-6 pt-6 pb-5 border-b border-gray-50">
        {speakers.map(({ speaker, color, avatar }) => (
          <div key={speaker} className="flex flex-col items-center gap-1.5">
            {avatar ? (
              <img src={avatar} alt={speaker} className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-base font-extrabold ${avatarColors[color]}`}>
                {speaker[0]}
              </div>
            )}
            <span className={`text-xs font-bold ${speakerTextColors[color]}`}>{speaker}</span>
          </div>
        ))}
        <p className="ml-auto text-xs text-gray-300 font-semibold hidden sm:block">
          Hover{' '}
          <span className="text-[#066EF5] border-b border-dashed border-[#066EF5]">blue words</span>
          {' '}for definitions
        </p>
      </div>

      {/* Lines */}
      <div>
        {lines.map((line, i) => (
          <div
            key={i}
            className={`flex items-start gap-4 px-5 py-4 border-l-[3px] ${borderColors[line.speakerColor]} ${
              i % 2 !== 0 ? 'bg-[#F8F9FF]' : 'bg-white'
            } ${i < lines.length - 1 ? 'border-b border-gray-50' : ''}`}
          >
            {line.speakerAvatar ? (
              <img src={line.speakerAvatar} alt={line.speaker} className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-0.5" />
            ) : (
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0 mt-0.5 ${avatarColors[line.speakerColor]}`}
              >
                {line.speaker[0]}
              </div>
            )}
            <div>
              <span className={`font-extrabold text-sm ${speakerTextColors[line.speakerColor]}`}>
                {line.speaker}
              </span>
              <p className="text-gray-800 leading-relaxed mt-0.5">{parseText(line.text)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

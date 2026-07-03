'use client';
import { useState } from 'react';
import { VocabWord } from '@/types/lesson';

const WAVEFORM = [4, 7, 12, 8, 14, 6, 10, 16, 9, 13, 5, 11, 8, 14, 7, 10, 5, 12, 8, 6];

function WaveformPlayer({ src, label }: { src: string; label: string }) {
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = new Audio(src);
    setPlaying(true);
    audio.onended = () => setPlaying(false);
    audio.onerror = () => setPlaying(false);
    audio.play().catch(() => setPlaying(false));
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-3 group w-full text-left"
    >
      <div className="w-9 h-9 rounded-full bg-[#066EF5] flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-blue-600 group-active:scale-95 transition-all">
        <span className="text-white text-[10px] leading-none" style={{ marginLeft: playing ? 0 : '1px' }}>
          {playing ? '⏸' : '▶'}
        </span>
      </div>

      <div className="flex items-center gap-[2px] flex-shrink-0">
        {WAVEFORM.map((h, i) => (
          <div
            key={i}
            className={`w-[2px] rounded-full transition-colors duration-300 ${playing ? 'bg-[#066EF5]' : 'bg-gray-200'}`}
            style={{ height: `${h}px` }}
          />
        ))}
      </div>

      <span className="text-[13px] font-semibold text-gray-400 whitespace-nowrap">{label}</span>
    </button>
  );
}

export default function VocabCard({ word, index }: { word: VocabWord; index: number }) {
  const audioSlug = word.imageSlug.replace(/^\/images\//, '').replace(/\.[^.]+$/, '');
  const [imgSrc, setImgSrc] = useState(word.imageSlug);
  const [imgFailed, setImgFailed] = useState(false);
  const isReversed = index % 2 !== 0;
  const num = String(index + 1).padStart(2, '0');

  const handleImgError = () => {
    if (!imgSrc.endsWith('.svg')) {
      setImgSrc(word.imageSlug.replace(/\.[^.]+$/, '.svg'));
    } else {
      setImgFailed(true);
    }
  };

  return (
    <div
      className={`bg-white rounded-[24px] overflow-hidden flex flex-col md:flex-row
        shadow-[0_2px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.09)]
        transition-shadow duration-300 ${isReversed ? 'md:flex-row-reverse' : ''}`}
    >
      {/* ── Cinematic image half ── */}
      <div className="relative w-full md:w-1/2 min-h-[240px] md:min-h-[320px] bg-[#0b1120] flex items-center justify-center overflow-hidden flex-shrink-0">
        {!imgFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgSrc}
            alt={word.word}
            className="w-full h-full object-cover"
            onError={handleImgError}
          />
        ) : (
          <span
            className="font-extrabold text-[#066EF5] select-none leading-none"
            style={{ fontSize: 'clamp(80px, 15vw, 140px)', opacity: 0.08 }}
          >
            {word.word[0]}
          </span>
        )}
      </div>

      {/* ── Content half ── */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-10 lg:p-12">
        {/* Numbered label */}
        <span className="text-xs font-extrabold tracking-[0.18em] text-[#066EF5] mb-4 block">
          {num}
        </span>

        {/* Word + part-of-speech pill */}
        <div className="flex flex-wrap items-baseline gap-3 mb-4">
          <h3 className="text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-none">
            {word.word}
          </h3>
          <span className="text-[11px] font-bold text-[#066EF5] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wide">
            {word.partOfSpeech}
          </span>
        </div>

        {/* Definition */}
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {word.definition}
        </p>

        {/* Example / In Game + In Real Life */}
        {(word.inGame || word.inRealLife) ? (
          <div className="mb-8 space-y-4">
            {word.inGame && (
              <div>
                <span className="block text-[10px] font-extrabold tracking-[0.2em] text-[#066EF5] uppercase mb-1">
                  In Game
                </span>
                <p className="text-gray-600 text-base italic leading-relaxed">
                  {word.inGame}
                </p>
              </div>
            )}
            {word.inRealLife && (
              <div>
                <span className="block text-[10px] font-extrabold tracking-[0.2em] text-emerald-600 uppercase mb-1">
                  In Real Life
                </span>
                <p className="text-gray-600 text-base italic leading-relaxed">
                  {word.inRealLife}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="mb-8">
            <span className="block text-xs font-extrabold tracking-[0.2em] text-gray-500 uppercase mb-2">
              Example
            </span>
            <p className="text-gray-600 text-base italic leading-relaxed">
              {word.example}
            </p>
          </div>
        )}

        {/* Waveform audio players */}
        <div className="space-y-3.5">
          <WaveformPlayer
            src={`/audio/${audioSlug}.mp3`}
            label="Listen to word"
          />
          <WaveformPlayer
            src={`/audio/${audioSlug}-example.mp3`}
            label="Listen to example"
          />
        </div>
      </div>
    </div>
  );
}

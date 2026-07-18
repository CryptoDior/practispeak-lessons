'use client';
import { VocabWord } from '@/types/lesson';
import WordEntryCard from '@/components/WordEntryCard';

export default function VocabCard({ word }: { word: VocabWord; index?: number }) {
  const audioSlug = word.imageSlug.replace(/^\/images\//, '').replace(/\.[^.]+$/, '');
  return (
    <WordEntryCard
      title={word.word}
      tag={word.partOfSpeech}
      definition={word.definition}
      example={word.example}
      inGame={word.inGame}
      inRealLife={word.inRealLife}
      imageSlug={word.imageSlug}
      audioSlug={audioSlug}
      listenLabel="Listen to word"
    />
  );
}

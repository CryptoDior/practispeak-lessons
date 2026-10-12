'use client';
import { VocabWord } from '@/types/lesson';
import WordEntryCard, { audioSlugOf } from '@/components/WordEntryCard';

export default function VocabCard({ word, lessonSlug }: { word: VocabWord; index?: number; lessonSlug?: string }) {
  const imageSlugBase = word.imageSlug.replace(/^\/images\//, '').replace(/\.[^.]+$/, '');
  return (
    <WordEntryCard
      title={word.word}
      tag={word.partOfSpeech}
      definition={word.definition}
      example={word.example}
      inGame={word.inGame}
      inRealLife={word.inRealLife}
      imageSlug={word.imageSlug}
      audioSlugs={[audioSlugOf(word.word), imageSlugBase]}
      lessonSlug={lessonSlug}
      listenLabel="Listen to word"
    />
  );
}

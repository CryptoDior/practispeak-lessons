'use client';
import { PhrasalVerb } from '@/types/lesson';
import WordEntryCard from '@/components/WordEntryCard';

export default function PhrasalVerbCard({ verb }: { verb: PhrasalVerb; index?: number }) {
  const audioSlug = verb.imageSlug.replace(/^\/images\//, '').replace(/\.[^.]+$/, '');
  return (
    <WordEntryCard
      title={verb.phrase}
      tag={verb.tag === '' ? undefined : verb.tag ?? 'phrasal verb'}
      definition={verb.definition}
      example={verb.example}
      inGame={verb.inGame}
      inRealLife={verb.inRealLife}
      imageSlug={verb.imageSlug}
      audioSlug={audioSlug}
      listenLabel="Listen to phrase"
    />
  );
}

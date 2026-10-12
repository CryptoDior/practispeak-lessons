'use client';
import { PhrasalVerb } from '@/types/lesson';
import WordEntryCard, { audioSlugOf } from '@/components/WordEntryCard';

export default function PhrasalVerbCard({ verb, lessonSlug }: { verb: PhrasalVerb; index?: number; lessonSlug?: string }) {
  const imageSlugBase = verb.imageSlug.replace(/^\/images\//, '').replace(/\.[^.]+$/, '');
  return (
    <WordEntryCard
      title={verb.phrase}
      tag={verb.tag === '' ? undefined : verb.tag ?? 'phrasal verb'}
      definition={verb.definition}
      example={verb.example}
      inGame={verb.inGame}
      inRealLife={verb.inRealLife}
      imageSlug={verb.imageSlug}
      audioSlugs={[audioSlugOf(verb.phrase), imageSlugBase]}
      lessonSlug={lessonSlug}
      listenLabel="Listen to phrase"
    />
  );
}

'use client';
import { PhrasalVerb } from '@/types/lesson';
import WordEntryCard, { audioSlugOf } from '@/components/WordEntryCard';

export default function PhrasalVerbCard({ verb }: { verb: PhrasalVerb; index?: number }) {
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
      listenLabel="Listen to phrase"
    />
  );
}

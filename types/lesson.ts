export type Level = 'A1-A2' | 'B1-B2' | 'C1-C2';
export type PartOfSpeech = 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrasal verb' | 'abbreviation' | 'exclamation' | 'phrase' | 'preposition' | 'pronoun' | 'conjunction';
export type SpeakerColor = 'purple' | 'green' | 'orange' | 'blue' | 'red';

export interface VocabWord {
  word: string;
  partOfSpeech: PartOfSpeech;
  definition: string;
  example: string;
  /** Matches /public/images/[imageSlug].jpg and /public/audio/[imageSlug].mp3 */
  imageSlug: string;
}

export interface PhrasalVerb {
  phrase: string;
  definition: string;
  example: string;
  /** Matches /public/images/[imageSlug].jpg and /public/audio/[imageSlug].mp3 */
  imageSlug: string;
}

export interface DialogueLine {
  speaker: string;
  speakerColor: SpeakerColor;
  /** Path to speaker avatar image, e.g. '/images/zara-icon.png' */
  speakerAvatar?: string;
  /** Supports [[word:definition]] markup for hover tooltips */
  text: string;
}

export interface MatchPair {
  word: string;
  definition: string;
}

export interface FillBlankItem {
  /** Text before the blank */
  before: string;
  /** Text after the blank */
  after: string;
  /** The correct answer (lowercase, as shown in word bank) */
  answer: string;
}

export interface MultipleChoiceItem {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface GrammarExample {
  sentence: string;  // e.g. "The warrior is strong."
  note: string;      // e.g. "(warrior = big physical power)"
}

export interface GrammarFocus {
  focusTitle: string;        // e.g. "Focus: \"is\" and \"isn't\" + adjective"
  description: string;       // explanation of the grammar rule
  positivePattern: string;   // e.g. "Subject + IS + adjective"
  positiveExample: string;   // e.g. "\"The dragon IS big.\""
  negativePattern: string;   // e.g. "Subject + ISN'T + adjective"
  negativeExample: string;   // e.g. "\"The elf ISN'T slow.\""
  positiveExamples: GrammarExample[];
  negativeExamples: GrammarExample[];
}

export interface LessonVideo {
  title: string;
  /** YouTube video ID, or "PLACEHOLDER_N" for a coming-soon placeholder */
  youtubeId: string;
  description?: string;
}

export interface Lesson {
  slug: string;
  title: string;
  subtitle: string;
  level: Level;
  description: string;
  /**
   * Optional hero image shown in the lesson header.
   * Path relative to /public, e.g. '/images/team-communication-hero.jpg'
   * If omitted or the file is missing, a blue gradient placeholder is shown.
   */
  heroImage?: string;
  grammarFocus?: GrammarFocus;
  dialogueSubtitle?: string;
  vocabulary: VocabWord[];
  phrasalVerbs: PhrasalVerb[];
  videos: LessonVideo[];
  dialogue: DialogueLine[];
  matchingExercise: MatchPair[];
  fillBlankExercise: FillBlankItem[];
  multipleChoiceExercise: MultipleChoiceItem[];
}

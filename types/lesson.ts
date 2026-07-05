export type Level = 'A1' | 'A1-A2' | 'A2' | 'B1-B2' | 'C1-C2';
export type PartOfSpeech = 'noun' | 'verb' | 'noun / verb' | 'adjective' | 'adverb' | 'phrasal verb' | 'abbreviation' | 'exclamation' | 'phrase' | 'preposition' | 'pronoun' | 'conjunction';
export type SpeakerColor = 'purple' | 'green' | 'orange' | 'blue' | 'red';

export interface VocabWord {
  word: string;
  partOfSpeech: PartOfSpeech;
  definition: string;
  example: string;
  /** Matches /public/images/[imageSlug].jpg and /public/audio/[imageSlug].mp3 */
  imageSlug: string;
  /** Optional origin / etymology note shown on the card */
  etymologyNote?: string;
  /** Optional second example (noun use, register note, etc.) */
  secondExample?: string;
  /** In-game usage example (Roblox / gaming lessons) — renders as a separate section */
  inGame?: string;
  /** Real-life usage example (Roblox / gaming lessons) — renders as a separate section */
  inRealLife?: string;
}

export interface VisualExample {
  brand: string;
  context: string;
  imageSlug: string;
  caption: string;
  aspectRatio?: string;  // e.g. "1/1", "9/16", "16/9", "1.91/1", "4/5"
}

export interface PhrasalVerb {
  phrase: string;
  definition: string;
  example: string;
  /** Matches /public/images/[imageSlug].jpg and /public/audio/[imageSlug].mp3 */
  imageSlug: string;
  /** Override the label pill. Defaults to "phrasal verb". Set to \'\' to hide it. */
  tag?: string;
  /** A sentence showing the phrase used naturally in context (In Action section) */
  inAction?: string;
  /** In-game usage example (Roblox / gaming lessons) — renders as a separate section */
  inGame?: string;
  /** Real-life usage example (Roblox / gaming lessons) — renders as a separate section */
  inRealLife?: string;
  /** Formal / Neutral / Informal — with a brief usage note (Register section) */
  register?: string;
  /** A short passage or scenario embedding the phrase in a broader context (In Context section) */
  inContext?: string;
  /** Up to 3 real-life visual examples (brand, context, image, caption) */
  visualExamples?: VisualExample[];
}

export interface DialogueLine {
  speaker: string;
  speakerColor: SpeakerColor;
  /** Path to speaker avatar image, e.g. \'/images/zara-icon.png\' */
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
  focusTitle: string;        // e.g. "Focus: \"is\" and \"isn\'t\" + adjective"
  description: string;       // explanation of the grammar rule

  // Style A — two pattern rows (positive ✓ / negative ✗)
  positivePattern?: string;   // e.g. "Subject + IS + adjective"
  positiveExample?: string;   // e.g. "\"The dragon IS big.\""
  negativePattern?: string;   // e.g. "Subject + ISN\'T + adjective"
  negativeExample?: string;   // e.g. "\"The elf ISN\'T slow.\""

  // Style B — single pattern row with slash examples
  singlePattern?: string;        // e.g. "VERB + (object)"
  singlePatternExample?: string; // e.g. "\"Jump!\" / \"Shoot the enemy!\""

  // Shared
  negativeSubtitle?: string;     // e.g. "(Don\'t + verb)"
  arrowStyle?: boolean;          // show examples as "sentence → note" instead of parentheses
  positiveLabel?: string;        // override "Positive" heading (default: "Positive")
  negativeLabel?: string;        // override "Negative" heading (default: "Negative")
  positiveExamples: GrammarExample[];
  negativeExamples: GrammarExample[];
}

export interface RegisterEntry {
  context: string;   // e.g. "Discord / gaming chat"
  register: string;  // e.g. "Informal"
  example: string;   // e.g. "Bro they nerfed my main again 😭"
}

export interface ReadingPassage {
  title: string;
  context: string;           // scene-setting sentence
  text: string;              // passage — wrap key terms in [[term]] for highlighting
  highlightTerms: string[];  // terms to highlight in the passage
  questions: string[];       // open comprehension questions
  audioSrc?: string;         // path to audio file, e.g. \'/audio/forum-post.mp3\'
}

export interface ProductionPrompt {
  icon: string;    // emoji
  label: string;   // e.g. "A"
  prompt: string;  // the writing task
}

export interface LessonVideo {
  title: string;
  /** YouTube video ID, or "PLACEHOLDER_N" for a coming-soon placeholder */
  youtubeId: string;
  description?: string;
}

export interface ChooseResponseItem {
  /** The customer\'s line shown to students */
  customerLine: string;
  /** Exactly 3 options — A, B, C */
  options: string[];
  /** 0-based index of the correct option */
  correctIndex: number;
  /** Explanation of why the correct answer works and why the others don\'t */
  explanation: string;
}

export interface CustomerProfileItem {
  name: string;
  description: string;
  /** Must match a ProductOptionItem.key */
  matchKey: string;
}

export interface ProductOptionItem {
  key: string;
  label: string;
  description: string;
}

export interface FinishLineItem {
  /** The customer\'s line */
  customerLine: string;
  /** The start of the salesperson\'s response — cut off mid-sentence */
  salespersonStart: string;
  /** One possible completion shown after groups compare answers */
  suggestedCompletion?: string;
}

export interface PitchCornerSegment {
  /** Text before the blank (may be empty string) */
  before: string;
  /** Text after the blank */
  after: string;
  /** The correct answer word */
  answer: string;
}

export interface PitchCorner {
  /** Heading shown above the passage, e.g. "Follow-Up Email" or "Presentation Opening" */
  title: string;
  /** One-line context, e.g. "Riley is writing to the CFO after their first meeting" */
  context: string;
  /** The pitch passage broken into segments around blanks */
  passage: PitchCornerSegment[];
}

export interface DealClinicLine {
  speaker: string;
  speakerColor: SpeakerColor;
  text: string;
  /**
   * If present, this is a salesperson move that students evaluate.
   * isGood: the correct verdict. explanation: shown after student guesses.
   */
  verdict?: {
    isGood: boolean;
    explanation: string;
  };
}

export interface DealClinic {
  /** Scene-setting shown above the transcript */
  context: string;
  transcript: DealClinicLine[];
}

export interface WarmUp {
  questions: string[];
}

export interface OnThePitchItem {
  /** The phrase or shout used on the pitch or training ground */
  cue: string;
  /** Plain English explanation of what it means */
  meaning: string;
  /** Who says it, when, and why — gives real-world context */
  usage: string;
  /** Optional 16:9 image illustrating the phrase in action */
  imageSlug?: string;
}

export interface OnThePitch {
  instructions: string;
  items: OnThePitchItem[];
}

export interface CompleteSentenceItem {
  sentence: string;   // use _____ to mark the blank
  options: string[];  // exactly 3 options
  correctIndex: number;
  explanation: string;
}

export interface CompleteSentenceExercise {
  instructions: string;
  items: CompleteSentenceItem[];
}

export interface SpotTheMistakeLine {
  speaker: string;
  speakerColor?: 'purple' | 'green' | 'orange' | 'blue' | 'red';
  text: string;
}

export interface SpotTheMistakeItem {
  lineIndex: number;
  incorrectText: string;
  correction: string;
  explanation: string;
}

export interface GroupActivities {
  chooseResponse: {
    instructions: string;
    items: ChooseResponseItem[];
  };
  profileMatch?: {
    instructions: string;
    profiles: CustomerProfileItem[];
    options: ProductOptionItem[];
  };
  spotTheMistake?: {
    instructions: string;
    dialogue: SpotTheMistakeLine[];
    mistakes: SpotTheMistakeItem[];
  };
  finishTheLine: {
    instructions: string;
    items: FinishLineItem[];
  };
}

export interface Lesson {
  slug: string;
  title: string;
  subtitle: string;
  level: Level;
  description: string;
  /** If set, the lesson card links directly to this URL instead of /lessons/[slug] */
  externalUrl?: string;
  /**
   * Optional hero image shown in the lesson header.
   * Path relative to /public, e.g. \'/images/team-communication-hero.jpg\'
   * If omitted or the file is missing, a blue gradient placeholder is shown.
   */
  heroImage?: string;
  grammarFocus?: GrammarFocus;
  tabLabels?: [string, string, string, string, string]; // override default tab names
  registerAwareness?: RegisterEntry[];
  registerTraps?: string[];    // tip/warning strings shown below the table
  readingPassage?: ReadingPassage;
  productionPrompts?: ProductionPrompt[];
  dialogueSubtitle?: string;
  vocabulary: VocabWord[];
  /** Optional second vocab set for Roblox / gaming lessons — rendered as "IRL Vocab" section */
  irlVocabulary?: VocabWord[];
  phrasalVerbs: PhrasalVerb[];
  videos: LessonVideo[];
  dialogue: DialogueLine[];
  matchingExercise: MatchPair[];
  fillBlankExercise: FillBlankItem[];
  multipleChoiceExercise: MultipleChoiceItem[];
  /** Optional warm-up discussion questions shown before vocabulary. */
  warmUp?: WarmUp;
  /** Optional on-the-pitch phrases section. Informal language used on the pitch or training ground. Football ESL only.  */
  onThePitch?: OnThePitch;
  /** Optional pitch/email/presentation fill-in-the-blank passage. Sales English only. */
  pitchCorner?: PitchCorner;
  /** Optional complete-the-sentence exercise - 6 gap-fill items with 3 options each. A1-A2 only. */
  completeSentenceExercise?: CompleteSentenceExercise;
  /** Optional group activities section (choose response + spot the mistake). */
  groupActivities?: GroupActivities;
  /** Optional deal clinic section (C1-C2 only). */
  dealClinic?: DealClinic;
}

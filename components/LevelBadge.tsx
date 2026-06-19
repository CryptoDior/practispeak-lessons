import { Level } from '@/types/lesson';

const styles: Record<Level, string> = {
  'A1':    'bg-emerald-50 text-emerald-600 border-emerald-100',
  'A1-A2': 'bg-emerald-50 text-emerald-600 border-emerald-100',
  'A2':    'bg-teal-50 text-teal-600 border-teal-100',
  'B1-B2': 'bg-blue-50 text-[#066EF5] border-blue-100',
  'C1-C2': 'bg-purple-50 text-purple-600 border-purple-100',
};

export default function LevelBadge({ level, large = false }: { level: Level; large?: boolean }) {
  return (
    <span
      className={`inline-flex items-center font-bold border rounded-full ${styles[level]} ${
        large ? 'text-sm px-4 py-1.5' : 'text-xs px-3 py-1'
      }`}
    >
      {level}
    </span>
  );
}

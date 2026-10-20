/** Magic wand — the Translate tool's icon. */
export default function WandIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 20L14.5 9.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14.5 9.5l2-2" stroke="#F59E0B" strokeWidth="2.6" strokeLinecap="round" />
      <path
        d="M18 2.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8zM9 3l.45 1.15L10.6 4.6l-1.15.45L9 6.2l-.45-1.15L7.4 4.6l1.15-.45L9 3zM20.5 10l.45 1.15 1.15.45-1.15.45-.45 1.15-.45-1.15-1.15-.45 1.15-.45.45-1.15z"
        fill="#F59E0B"
      />
    </svg>
  );
}

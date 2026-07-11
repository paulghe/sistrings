import { ClefMark } from './icons';

/**
 * Text lockup of the brand, echoing the logo:
 * elegant serif "Sistrings" with a gold treble-clef flourish.
 * Scale it with a `text-*` class on `className`.
 */
export function Wordmark({ className = '', showMark = true }: { className?: string; showMark?: boolean }) {
  return (
    <span className={`inline-flex items-center font-serif font-medium leading-none tracking-tight ${className}`}>
      {showMark && <ClefMark className="mr-[0.12em] h-[1.05em] w-[1.05em] shrink-0 text-secondary" />}
      <span className="text-base-content">
        S<span className="text-base-content/90">istrings</span>
      </span>
    </span>
  );
}

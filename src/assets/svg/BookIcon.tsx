import type { IconProps } from './icon.types';

export function BookIcon({ width = 18, height = 18, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden>
      <path d="M5 5a3 3 0 0 1 3-1h11v16H8a3 3 0 0 0-3 3V5Z" />
      <path d="M8 4v16" />
    </svg>
  );
}

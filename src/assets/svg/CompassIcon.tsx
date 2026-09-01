import type { IconProps } from './icon.types';

export function CompassIcon({ width = 22, height = 22, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 6-6 2 2-6 6-2Z" />
    </svg>
  );
}

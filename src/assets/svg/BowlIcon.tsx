import type { IconProps } from './icon.types';

export function BowlIcon({ width = 18, height = 18, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className={className} aria-hidden>
      <path d="M4 11h16c0 5-3.5 9-8 9s-8-4-8-9Z" />
      <path d="M8 7c.5-2 2-3 4-3s3.5 1 4 3" />
    </svg>
  );
}

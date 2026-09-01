import type { IconProps } from './icon.types';

export function SendIcon({ width = 18, height = 18, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 12 20 4l-6 16-2.5-6.5L4 12Z" />
    </svg>
  );
}

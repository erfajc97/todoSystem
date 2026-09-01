import type { IconProps } from './icon.types';

export function HomeIcon({ width = 18, height = 18, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m4 11 8-7 8 7v9H4V11Z" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

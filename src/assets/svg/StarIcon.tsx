import type { IconProps } from './icon.types';

export function StarIcon({ width = 16, height = 16, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="m12 3.2 2.47 5.01 5.53.8-4 3.9.94 5.49L12 15.9l-4.94 2.6.94-5.49-4-3.9 5.53-.8L12 3.2Z" />
    </svg>
  );
}

import type { IconProps } from './icon.types';

export function TrashIcon({ width = 18, height = 18, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className={className} aria-hidden>
      <path d="M5 7h14M10 7V5h4v2M8 7l1 12h6l1-12" />
    </svg>
  );
}

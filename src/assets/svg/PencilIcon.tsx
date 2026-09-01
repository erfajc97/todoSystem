import type { IconProps } from './icon.types';

export function PencilIcon({ width = 16, height = 16, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden>
      <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
    </svg>
  );
}

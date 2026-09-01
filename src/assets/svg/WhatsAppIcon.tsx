import type { IconProps } from './icon.types';

export function WhatsAppIcon({ width = 18, height = 18, className }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm4.7 12.9c-.2.5-1 .9-1.4 1-.4.1-.8.2-2.6-.5-2.2-.9-3.6-3.1-3.7-3.2-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.5l-.4.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.4.3.1.5.1.7-.1l.9-1.2c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.4 0 .3 0 .8-.3 1.3Z" />
    </svg>
  );
}

import { Button } from '@heroui/react';

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
  icon?: React.ReactNode;
}

export function FilterChip({ label, isActive, onPress, icon }: FilterChipProps) {
  return (
    <Button
      variant="ghost"
      aria-label={label}
      onPress={onPress}
      className={`h-10 shrink-0 rounded-full px-4 text-sm font-medium ${
        isActive
          ? 'bg-brand text-on-brand'
          : 'border border-border bg-surface text-text'
      }`}
    >
      {icon ? <span className="mr-1.5 inline-flex">{icon}</span> : null}
      {label}
    </Button>
  );
}

import { Button } from '@heroui/react';
import { ChevronDownIcon } from '@/assets/svg/ChevronDownIcon';

interface CategoryPickerProps {
  label: string;
  onPress: () => void;
}

export function CategoryPicker({ label, onPress }: CategoryPickerProps) {
  return (
    <Button
      variant="ghost"
      onPress={onPress}
      className="h-auto min-h-0 justify-center gap-1 px-0 py-0 text-sm font-medium text-text"
    >
      {label}
      <ChevronDownIcon width={14} height={14} />
    </Button>
  );
}

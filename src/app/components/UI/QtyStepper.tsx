import { Button } from '@heroui/react';
import { MinusIcon } from '@/assets/svg/MinusIcon';
import { PlusIcon } from '@/assets/svg/PlusIcon';

interface QtyStepperProps {
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
  decreaseLabel: string;
  increaseLabel: string;
}

export function QtyStepper({
  value,
  onDecrease,
  onIncrease,
  decreaseLabel,
  increaseLabel,
}: QtyStepperProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border px-1 py-1">
      <Button
        variant="ghost"
        aria-label={decreaseLabel}
        onPress={onDecrease}
        className="min-h-11 min-w-11 rounded-full p-0"
      >
        <MinusIcon />
      </Button>
      <span className="min-w-6 text-center text-sm font-semibold">{value}</span>
      <Button
        variant="ghost"
        aria-label={increaseLabel}
        onPress={onIncrease}
        className="min-h-11 min-w-11 rounded-full p-0"
      >
        <PlusIcon />
      </Button>
    </div>
  );
}

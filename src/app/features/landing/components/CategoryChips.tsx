import { HomeIcon } from '@/assets/svg/HomeIcon';
import { BowlIcon } from '@/assets/svg/BowlIcon';
import { CameraIcon } from '@/assets/svg/CameraIcon';
import { SparkleIcon } from '@/assets/svg/SparkleIcon';
import { FilterChip } from '@/app/components/UI/FilterChip';
import type { Category, CategorySlug } from '@/app/types/catalog.types';

const ICONS = {
  home: HomeIcon,
  bowl: BowlIcon,
  camera: CameraIcon,
  sparkle: SparkleIcon,
} as const;

interface CategoryChipsProps {
  chips: Category[];
  active: CategorySlug;
  onSelect: (slug: CategorySlug) => void;
  t: (key: string) => string;
}

export function CategoryChips({ chips, active, onSelect, t }: CategoryChipsProps) {
  return (
    <div className="hide-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
      {chips.map((chip) => {
        const Icon = ICONS[chip.icon as keyof typeof ICONS] ?? HomeIcon;
        return (
          <FilterChip
            key={chip.id}
            label={t(chip.labelKey)}
            isActive={active === chip.slug}
            onPress={() => onSelect(chip.slug)}
            icon={<Icon width={16} height={16} />}
          />
        );
      })}
    </div>
  );
}

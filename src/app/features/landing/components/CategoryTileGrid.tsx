import { Button } from '@heroui/react';
import type { HomeCategoryTile } from '@/app/types/catalog.types';

interface CategoryTileGridProps {
  title: string;
  tiles: HomeCategoryTile[];
  t: (key: string) => string;
  onSelect: (slug: string) => void;
}

export function CategoryTileGrid({ title, tiles, t, onSelect }: CategoryTileGridProps) {
  return (
    <section className="mx-auto w-full max-w-xl md:max-w-2xl lg:max-w-3xl">
      <h2 className="mb-4 text-center font-heading text-lg font-extrabold tracking-tight lg:mb-6 lg:text-xl">
        {title}
      </h2>
      <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
        {tiles.map((tile) => (
          <Button
            key={tile.id}
            variant="ghost"
            aria-label={t(tile.labelKey)}
            onPress={() => onSelect(tile.slug)}
            className="flex aspect-square h-auto min-h-0 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface-raised p-3 transition-colors hover:bg-surface hover:shadow-sm sm:gap-2.5 sm:p-4 lg:gap-3 lg:rounded-3xl lg:p-5"
          >
            <span className="text-[28px] leading-none sm:text-[32px] lg:text-[40px]" aria-hidden>
              {tile.emoji}
            </span>
            <span className="w-full text-center text-xs font-bold leading-tight text-text sm:text-sm lg:text-[15px]">
              {t(tile.labelKey)}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
}

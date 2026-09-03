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
    <section>
      <h2 className="mb-4 font-heading text-lg font-extrabold tracking-tight">{title}</h2>
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-6 lg:gap-3">
        {tiles.map((tile) => (
          <Button
            key={tile.id}
            variant="ghost"
            aria-label={t(tile.labelKey)}
            onPress={() => onSelect(tile.slug)}
            className="flex h-auto min-h-0 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface-raised p-3 aspect-square lg:aspect-auto lg:min-h-[132px] lg:gap-2.5 lg:px-3 lg:py-5"
          >
            <span className="text-[28px] leading-none lg:text-[30px]" aria-hidden>
              {tile.emoji}
            </span>
            <span className="w-full text-center text-xs font-bold leading-tight text-text lg:text-sm">
              {t(tile.labelKey)}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
}

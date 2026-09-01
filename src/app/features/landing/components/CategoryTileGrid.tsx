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
      <div className="grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">
        {tiles.map((tile) => (
          <Button
            key={tile.id}
            variant="ghost"
            aria-label={t(tile.labelKey)}
            onPress={() => onSelect(tile.slug)}
            className="flex aspect-square h-auto min-h-0 flex-col items-center justify-center gap-2 rounded-2xl bg-surface-raised p-2"
          >
            <span className="text-[28px] leading-none" aria-hidden>
              {tile.emoji}
            </span>
            <span className="text-xs font-bold text-text">{t(tile.labelKey)}</span>
          </Button>
        ))}
      </div>
    </section>
  );
}

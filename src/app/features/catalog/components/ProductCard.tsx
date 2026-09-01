import { Button } from '@heroui/react';
import { PlusIcon } from '@/assets/svg/PlusIcon';
import { formatMoney } from '@/app/helpers/formatCurrency';
import type { CatalogProduct } from '@/app/types/catalog.types';

interface ProductCardProps {
  product: CatalogProduct;
  addLabel: string;
  onAdd: () => void;
}

export function ProductCard({ product, addLabel, onAdd }: ProductCardProps) {
  return (
    <article className="overflow-hidden">
      <div className="relative">
        <a href={`/producto/${product.id}`} className="block aspect-square overflow-hidden rounded-2xl bg-surface-raised">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </a>
        <Button
          variant="primary"
          aria-label={addLabel}
          onPress={onAdd}
          className="absolute bottom-2 right-2 min-h-10 min-w-10 rounded-full bg-brand p-0 text-on-brand"
        >
          <PlusIcon width={16} height={16} />
        </Button>
      </div>
      <a href={`/producto/${product.id}`} className="mt-2 block">
        <h3 className="font-heading text-sm font-bold leading-tight">{product.name}</h3>
        <p className="text-sm font-semibold">{formatMoney(product.price)}</p>
      </a>
    </article>
  );
}

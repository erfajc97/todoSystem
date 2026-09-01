import { Button } from '@heroui/react';
import { formatMoney } from '@/app/helpers/formatCurrency';
import { useProductQuery } from '@/app/tanstack-queries/catalogQuery';
import { useAddToCartMutation } from '@/app/features/cart/mutations/useAddToCartMutation';
import { useT } from '@/app/i18n/useT';
import AppProviders from '@/app/providers/AppProviders';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  return (
    <AppProviders>
      <ProductContent productId={productId} />
    </AppProviders>
  );
}

function ProductContent({ productId }: ProductDetailProps) {
  const t = useT();
  const productQuery = useProductQuery(productId);
  const addToCart = useAddToCartMutation();
  const product = productQuery.data;

  if (!product) {
    return <p className="p-6 text-sm text-text-muted">{t('common.loading')}</p>;
  }

  return (
    <div className="px-4 pb-16 pt-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 lg:px-8 lg:pt-10">
      <div className="aspect-square overflow-hidden rounded-3xl bg-surface-raised">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div>
        <h1 className="mt-4 font-heading text-2xl font-extrabold lg:mt-0">{product.name}</h1>
        <p className="mt-1 text-lg font-bold">{formatMoney(product.price)}</p>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">{product.description}</p>
        <Button
          variant="primary"
          onPress={() =>
            addToCart.mutate({
              id: product.id,
              productId: product.id,
              name: product.name,
              image: product.image,
              price: Number(product.price),
            })
          }
          className="mt-6 h-12 w-full rounded-full bg-brand font-semibold text-on-brand lg:w-auto lg:px-10"
        >
          {t('business.add')}
        </Button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useBusinessQuery, useProductsQuery, useServicesQuery } from '@/app/tanstack-queries/catalogQuery';
import { useRatingSummaryQuery, useReviewsQuery } from '@/app/tanstack-queries/reviewsQuery';
import { useAddToCartMutation } from '@/app/features/cart/mutations/useAddToCartMutation';
import { useT } from '@/app/i18n/useT';
import type { CatalogProduct } from '@/app/types/catalog.types';

export function useBusinessHook(businessId: string) {
  const t = useT();
  const [tab, setTab] = useState<'services' | 'products'>('services');
  const [expanded, setExpanded] = useState(false);
  const [hoursOpen, setHoursOpen] = useState(false);
  const businessQuery = useBusinessQuery(businessId);
  const servicesQuery = useServicesQuery(businessId);
  const productsQuery = useProductsQuery(businessId);
  const reviewsQuery = useReviewsQuery(businessId);
  const ratingQuery = useRatingSummaryQuery(businessId);
  const addToCart = useAddToCartMutation();

  const addProduct = (product: CatalogProduct) => {
    addToCart.mutate({
      id: product.id,
      productId: product.id,
      name: product.name,
      image: product.image,
      price: Number(product.price),
    });
  };

  return {
    t,
    tab,
    setTab,
    expanded,
    setExpanded,
    hoursOpen,
    setHoursOpen,
    business: businessQuery.data,
    services: servicesQuery.data ?? [],
    products: productsQuery.data ?? [],
    reviews: reviewsQuery.data ?? [],
    rating: ratingQuery.data,
    addProduct,
    isLoading: businessQuery.isLoading,
  };
}

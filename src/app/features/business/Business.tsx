import { Button } from '@heroui/react';
import { StarIcon } from '@/assets/svg/StarIcon';
import { CheckIcon } from '@/assets/svg/CheckIcon';
import { ClockIcon } from '@/assets/svg/ClockIcon';
import { ChevronDownIcon } from '@/assets/svg/ChevronDownIcon';
import { PencilIcon } from '@/assets/svg/PencilIcon';
import { ImageCarousel } from './components/ImageCarousel';
import { TabSwitcher } from './components/TabSwitcher';
import { ServiceCard } from '@/app/features/catalog/components/ServiceCard';
import { ProductCard } from '@/app/features/catalog/components/ProductCard';
import { RatingSummary } from '@/app/features/reviews/components/RatingSummary';
import { ReviewItem } from '@/app/features/reviews/components/ReviewItem';
import { useBusinessHook } from './hooks/useBusinessHook';
import AppProviders from '@/app/providers/AppProviders';

interface BusinessProps {
  businessId: string;
}

export default function Business({ businessId }: BusinessProps) {
  return (
    <AppProviders>
      <BusinessContent businessId={businessId} />
    </AppProviders>
  );
}

function BusinessContent({ businessId }: BusinessProps) {
  const {
    t,
    tab,
    setTab,
    expanded,
    setExpanded,
    hoursOpen,
    setHoursOpen,
    business,
    services,
    products,
    reviews,
    rating,
    addProduct,
    isLoading,
  } = useBusinessHook(businessId);

  if (isLoading || !business) {
    return <p className="p-6 text-sm text-text-muted">{t('common.loading')}</p>;
  }

  const description = expanded
    ? business.description
    : `${business.description.slice(0, 110)}${business.description.length > 110 ? '…' : ''}`;

  return (
    <div className="pb-16">
      <ImageCarousel images={business.images} alt={business.name} />

      <div className="flex flex-col gap-5 px-4 pt-4">
        <div className="flex flex-wrap gap-2">
          {business.verified ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-surface-raised px-2.5 py-1 text-xs font-semibold text-verified">
              <CheckIcon width={12} height={12} />
              {t('business.verified')}
            </span>
          ) : null}
          <span className="rounded-full bg-surface-raised px-2.5 py-1 text-xs font-medium text-text-muted">
            {t('business.type')}
          </span>
          <span className="rounded-full bg-surface-raised px-2.5 py-1 text-xs font-medium text-text-muted">
            {business.tag}
          </span>
        </div>

        <div>
          <h1 className="font-heading text-2xl font-extrabold tracking-tight">{business.name}</h1>
          <p className="mt-1 flex items-center gap-1 text-sm">
            <StarIcon width={14} height={14} className="text-rating" />
            <span className="font-semibold">{business.rating.toFixed(1)}</span>
            <span className="text-text-muted">({business.reviewCount.toLocaleString()})</span>
          </p>
        </div>

        <p className="text-sm leading-relaxed text-text-muted">
          {description}{' '}
          <Button
            variant="ghost"
            onPress={() => setExpanded((v) => !v)}
            className="inline h-auto min-h-0 p-0 text-sm font-semibold text-text underline"
          >
            {expanded ? t('business.readLess') : t('business.readMore')}
          </Button>
        </p>

        <Button
          variant="ghost"
          onPress={() => setHoursOpen((v) => !v)}
          className="flex h-auto w-full items-center justify-between rounded-2xl border border-border px-4 py-3 text-left"
        >
          <span className="flex items-center gap-2">
            <ClockIcon className="text-success" />
            <span className="font-semibold text-success">{t('business.openNow')}</span>
          </span>
          <span className="flex items-center gap-2 text-sm text-text-muted">
            {hoursOpen ? business.hours : null}
            <ChevronDownIcon />
          </span>
        </Button>

        <TabSwitcher
          servicesLabel={t('business.services')}
          productsLabel={t('business.products')}
          tab={tab}
          onServices={() => setTab('services')}
          onProducts={() => setTab('products')}
        />

        {tab === 'services' ? (
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} bookLabel={t('business.book')} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addLabel={t('business.add')}
                onAdd={() => addProduct(product)}
              />
            ))}
          </div>
        )}

        {rating ? (
          <section className="pt-4">
            <RatingSummary summary={rating} excellentLabel={t('reviews.excellent')} />
            <Button
              variant="ghost"
              onPress={() => {
                window.location.href = `/resenas/${businessId}`;
              }}
              className="mt-4 h-auto px-0 text-sm font-medium text-text"
            >
              <PencilIcon className="mr-1.5" />
              {t('reviews.write')}
            </Button>
            <h3 className="mt-6 font-heading text-base font-bold">
              {t('reviews.all', { count: rating.total })}
            </h3>
            <div className="divide-y divide-border">
              {reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}

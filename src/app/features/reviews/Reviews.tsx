import { PencilIcon } from '@/assets/svg/PencilIcon';
import { RatingSummary } from './components/RatingSummary';
import { ReviewItem } from './components/ReviewItem';
import { useRatingSummaryQuery, useReviewsQuery } from '@/app/tanstack-queries/reviewsQuery';
import { useT } from '@/app/i18n/useT';
import AppProviders from '@/app/providers/AppProviders';

interface ReviewsProps {
  targetId: string;
}

export default function Reviews({ targetId }: ReviewsProps) {
  return (
    <AppProviders>
      <ReviewsContent targetId={targetId} />
    </AppProviders>
  );
}

function ReviewsContent({ targetId }: ReviewsProps) {
  const t = useT();
  const reviewsQuery = useReviewsQuery(targetId);
  const ratingQuery = useRatingSummaryQuery(targetId);
  const reviews = reviewsQuery.data ?? [];
  const rating = ratingQuery.data;

  return (
    <div className="px-4 pb-16 pt-4">
      <h1 className="mb-6 font-heading text-2xl font-extrabold">{t('reviews.title')}</h1>
      {rating ? <RatingSummary summary={rating} excellentLabel={t('reviews.excellent')} /> : null}
      <p className="mt-4 flex items-center gap-1.5 text-sm font-medium">
        <PencilIcon />
        {t('reviews.write')}
      </p>
      <h2 className="mt-6 font-heading text-base font-bold">
        {t('reviews.all', { count: rating?.total ?? reviews.length })}
      </h2>
      <div className="divide-y divide-border">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

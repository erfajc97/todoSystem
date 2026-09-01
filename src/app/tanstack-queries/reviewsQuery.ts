import { useQuery } from '@tanstack/react-query';
import { fetchRatingSummary, fetchReviews } from '@/app/features/catalog/services/catalogService';

export const REVIEWS_KEY = ['reviews'] as const;
export const RATING_KEY = ['rating'] as const;

export function useReviewsQuery(targetId: string) {
  return useQuery({
    queryKey: [...REVIEWS_KEY, targetId],
    queryFn: () => fetchReviews(targetId),
    enabled: Boolean(targetId),
  });
}

export function useRatingSummaryQuery(targetId: string) {
  return useQuery({
    queryKey: [...RATING_KEY, targetId],
    queryFn: () => fetchRatingSummary(targetId),
    enabled: Boolean(targetId),
  });
}

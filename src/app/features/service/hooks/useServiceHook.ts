import { useState } from 'react';
import { useServiceQuery, useBusinessQuery } from '@/app/tanstack-queries/catalogQuery';
import { useRatingSummaryQuery, useReviewsQuery } from '@/app/tanstack-queries/reviewsQuery';
import { useCheckAvailabilityMutation } from '@/app/features/booking/mutations/useBookingMutations';
import { useT } from '@/app/i18n/useT';
import { sonnerResponse } from '@/app/helpers/sonnerResponse';

export function useServiceHook(serviceId: string) {
  const t = useT();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const serviceQuery = useServiceQuery(serviceId);
  const businessQuery = useBusinessQuery(serviceQuery.data?.businessId ?? '');
  const reviewsQuery = useReviewsQuery(serviceId);
  const ratingQuery = useRatingSummaryQuery(serviceId);
  const availability = useCheckAvailabilityMutation();

  const check = () => {
    if (!date.trim() || !time.trim()) {
      sonnerResponse(t('service.pickDateTime'), 'error');
      return;
    }
    availability.mutate(
      { serviceId, date, time },
      {
        onSuccess: () => {
          window.location.href = `/reserva/${serviceId}?date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`;
        },
      }
    );
  };

  return {
    t,
    date,
    setDate,
    time,
    setTime,
    check,
    isChecking: availability.isPending,
    service: serviceQuery.data,
    business: businessQuery.data,
    reviews: reviewsQuery.data ?? [],
    rating: ratingQuery.data,
    isLoading: serviceQuery.isLoading,
  };
}

import { useMutation } from '@tanstack/react-query';
import { apiErrorToast } from '@/app/helpers/apiErrorToast';
import { sonnerResponse } from '@/app/helpers/sonnerResponse';
import { t } from '@/app/i18n';
import { checkAvailability, createBooking, type BookingPayload } from '../services/bookingService';

export function useCreateBookingMutation() {
  return useMutation({
    mutationFn: (payload: BookingPayload) => createBooking(payload),
    onSuccess: () => sonnerResponse(t('booking.success'), 'success'),
    onError: (err) => apiErrorToast(err, t('common.error')),
  });
}

export function useCheckAvailabilityMutation() {
  return useMutation({
    mutationFn: ({ serviceId, date, time }: { serviceId: string; date: string; time: string }) =>
      checkAvailability(serviceId, date, time),
    onError: (err) => apiErrorToast(err, t('common.error')),
  });
}

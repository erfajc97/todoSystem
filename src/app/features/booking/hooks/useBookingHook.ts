import { useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateBookingMutation } from '@/app/features/booking/mutations/useBookingMutations';
import { useServiceQuery } from '@/app/tanstack-queries/catalogQuery';
import { useT } from '@/app/i18n/useT';
import { sonnerResponse } from '@/app/helpers/sonnerResponse';

const bookingSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.email().max(254).toLowerCase(),
  phone: z.string().trim().min(7).max(20),
  date: z.string().trim().min(1).max(32),
  time: z.string().trim().min(1).max(16),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

export function useBookingHook(serviceId: string, initialDate: string, initialTime: string) {
  const t = useT();
  const serviceQuery = useServiceQuery(serviceId);
  const create = useCreateBookingMutation();
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: initialDate,
      time: initialTime,
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const date = params.get('date') ?? initialDate;
    const time = params.get('time') ?? initialTime;
    if (date) form.setValue('date', date);
    if (time) form.setValue('time', time);
  }, [form, initialDate, initialTime]);

  const submit = form.handleSubmit(
    (values) => {
      create.mutate(
        { ...values, serviceId },
        {
          onSuccess: () => {
            window.location.href = `/negocio/${serviceQuery.data?.businessId ?? 'dieguinho'}`;
          },
        }
      );
    },
    () => sonnerResponse(t('common.error'), 'error')
  );

  return {
    t,
    form,
    submit,
    isPending: create.isPending,
    service: serviceQuery.data,
  };
}

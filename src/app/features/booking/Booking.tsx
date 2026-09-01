import { Button } from '@heroui/react';
import { FormField } from '@/app/components/UI/FormField';
import { CalendarIcon } from '@/assets/svg/CalendarIcon';
import { ClockIcon } from '@/assets/svg/ClockIcon';
import { formatMoney } from '@/app/helpers/formatCurrency';
import { useBookingHook } from './hooks/useBookingHook';
import AppProviders from '@/app/providers/AppProviders';

interface BookingProps {
  serviceId: string;
  date: string;
  time: string;
}

export default function Booking({ serviceId, date, time }: BookingProps) {
  return (
    <AppProviders>
      <BookingContent serviceId={serviceId} date={date} time={time} />
    </AppProviders>
  );
}

function BookingContent({ serviceId, date, time }: BookingProps) {
  const { t, form, submit, isPending, service } = useBookingHook(serviceId, date, time);
  const values = form.watch();

  return (
    <div className="mx-auto w-full max-w-xl px-4 pb-16 pt-4 lg:px-0 lg:pt-8">
      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-text-muted">{t('booking.title')}</p>
      <h1 className="font-heading text-2xl font-extrabold">{service?.name ?? t('common.loading')}</h1>
      {service ? <p className="mt-1 text-sm font-semibold">{formatMoney(service.price)}</p> : null}

      <form noValidate className="mt-6 flex flex-col gap-4" onSubmit={submit}>
        <FormField
          label={t('booking.dateTime')}
          value={values.date}
          onChange={(value) => form.setValue('date', value)}
          type="date"
          startContent={<CalendarIcon />}
          maxLength={32}
        />
        <FormField
          value={values.time}
          onChange={(value) => form.setValue('time', value)}
          type="time"
          ariaLabel={t('booking.dateTime')}
          startContent={<ClockIcon />}
          maxLength={16}
        />
        <FormField
          label={t('booking.firstName')}
          value={values.firstName}
          onChange={(value) => form.setValue('firstName', value)}
          maxLength={80}
        />
        <FormField
          label={t('booking.lastName')}
          value={values.lastName}
          onChange={(value) => form.setValue('lastName', value)}
          maxLength={80}
        />
        <FormField
          label={t('booking.email')}
          value={values.email}
          onChange={(value) => form.setValue('email', value)}
          type="email"
          maxLength={254}
        />
        <FormField
          label={t('booking.phone')}
          value={values.phone}
          onChange={(value) => form.setValue('phone', value)}
          type="tel"
          maxLength={20}
        />
        <Button
          type="submit"
          variant="primary"
          isDisabled={isPending}
          className="mt-2 h-12 w-full rounded-full bg-brand font-semibold text-on-brand"
        >
          {isPending ? t('common.loading') : t('booking.confirm')}
        </Button>
      </form>
    </div>
  );
}

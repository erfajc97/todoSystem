import { Button } from '@heroui/react';
import { StarIcon } from '@/assets/svg/StarIcon';
import { CalendarIcon } from '@/assets/svg/CalendarIcon';
import { ClockIcon } from '@/assets/svg/ClockIcon';
import { PhoneIcon } from '@/assets/svg/PhoneIcon';
import { WhatsAppIcon } from '@/assets/svg/WhatsAppIcon';
import { PencilIcon } from '@/assets/svg/PencilIcon';
import { FormField } from '@/app/components/UI/FormField';
import { RatingSummary } from '@/app/features/reviews/components/RatingSummary';
import { ReviewItem } from '@/app/features/reviews/components/ReviewItem';
import { formatMoney } from '@/app/helpers/formatCurrency';
import { ImageCarousel } from '@/app/features/business/components/ImageCarousel';
import { useServiceHook } from './hooks/useServiceHook';
import AppProviders from '@/app/providers/AppProviders';

interface ServiceDetailProps {
  serviceId: string;
}

export default function ServiceDetail({ serviceId }: ServiceDetailProps) {
  return (
    <AppProviders>
      <ServiceContent serviceId={serviceId} />
    </AppProviders>
  );
}

function ServiceContent({ serviceId }: ServiceDetailProps) {
  const {
    t,
    date,
    setDate,
    time,
    setTime,
    check,
    isChecking,
    service,
    business,
    reviews,
    rating,
    isLoading,
  } = useServiceHook(serviceId);

  if (isLoading || !service) {
    return <p className="p-6 text-sm text-text-muted">{t('common.loading')}</p>;
  }

  const images = [service.image, ...(business?.images ?? [])].slice(0, 3);

  return (
    <div className="pb-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-10 lg:px-8 lg:pt-8">
      <div className="lg:overflow-hidden lg:rounded-2xl">
        <ImageCarousel images={images} alt={service.name} />
      </div>
      <div className="flex flex-col gap-5 px-4 pt-4 lg:px-0 lg:pt-0">
        <div>
          <h1 className="font-heading text-2xl font-extrabold tracking-tight">{service.name}</h1>
          <p className="mt-1 flex items-center gap-1 text-sm">
            <StarIcon width={14} height={14} className="text-rating" />
            <span className="font-semibold">4.8</span>
            <span className="text-text-muted">(123)</span>
          </p>
          <p className="mt-2 text-lg font-bold">{formatMoney(service.price)}</p>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{service.description}</p>
        </div>

        <section>
          <h2 className="mb-3 font-heading text-base font-bold">{t('service.pickDateTime')}</h2>
          <div className="flex flex-col gap-3">
            <FormField
              value={date}
              onChange={setDate}
              type="date"
              placeholder={t('service.datePlaceholder')}
              ariaLabel={t('service.pickDate')}
              startContent={<CalendarIcon />}
              maxLength={32}
            />
            <FormField
              value={time}
              onChange={setTime}
              type="time"
              placeholder={t('service.timePlaceholder')}
              ariaLabel={t('service.pickDate')}
              startContent={<ClockIcon />}
              maxLength={16}
            />
            <Button
              variant="primary"
              isDisabled={isChecking}
              onPress={check}
              className="h-12 w-full rounded-full bg-brand font-semibold text-on-brand lg:w-auto lg:px-8"
            >
              {isChecking ? t('common.loading') : t('service.checkAvailability')}
            </Button>
          </div>
        </section>

        <section>
          <h2 className="mb-3 font-heading text-base font-bold">{t('service.extraDoubt')}</h2>
          <div className="flex flex-col gap-2">
            <a href={`tel:${business?.phone ?? ''}`} className="flex min-h-12 items-center gap-3 text-sm font-medium">
              <PhoneIcon />
              {business?.phone}
            </a>
            <a href="/chat" className="flex min-h-12 items-center gap-3 text-sm font-medium">
              <WhatsAppIcon className="text-success" />
              {t('service.sendMessage')}
            </a>
          </div>
        </section>

        {rating ? (
          <section>
            <RatingSummary summary={rating} excellentLabel={t('reviews.excellent')} />
            <Button variant="ghost" className="mt-4 h-auto px-0 text-sm font-medium">
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

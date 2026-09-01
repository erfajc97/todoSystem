import { Button } from '@heroui/react';
import { formatMoney } from '@/app/helpers/formatCurrency';
import type { CatalogService } from '@/app/types/catalog.types';

interface ServiceCardProps {
  service: CatalogService;
  bookLabel: string;
}

export function ServiceCard({ service, bookLabel }: ServiceCardProps) {
  return (
    <article className="overflow-hidden">
      <a href={`/servicio/${service.id}`} className="block">
        <div className="aspect-square overflow-hidden rounded-2xl">
          <img src={service.image} alt={service.name} className="h-full w-full object-cover" />
        </div>
        <h3 className="mt-2 font-heading text-sm font-bold leading-tight">{service.name}</h3>
        <p className="text-sm font-semibold">{formatMoney(service.price)}</p>
      </a>
      <Button
        variant="primary"
        onPress={() => {
          window.location.href = `/servicio/${service.id}`;
        }}
        className="mt-2 h-10 w-full rounded-xl bg-brand text-on-brand"
      >
        {bookLabel}
      </Button>
    </article>
  );
}

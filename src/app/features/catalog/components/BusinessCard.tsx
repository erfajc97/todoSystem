import { StarIcon } from '@/assets/svg/StarIcon';
import { formatMoney } from '@/app/helpers/formatCurrency';
import type { Business } from '@/app/types/catalog.types';

interface BusinessCardProps {
  business: Business;
  fromLabel: string;
  openLabel: string;
}

export function BusinessCard({ business, fromLabel, openLabel }: BusinessCardProps) {
  return (
    <a href={`/negocio/${business.id}`} className="block">
      <article>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
          <img src={business.images[0]} alt={business.name} className="h-full w-full object-cover" />
          {business.isOpen ? (
            <span className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2 py-1 text-[11px] font-semibold text-text">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              {openLabel}
            </span>
          ) : null}
        </div>
        <div className="mt-2.5">
          <h3 className="font-heading text-[15px] font-extrabold leading-tight text-text">{business.name}</h3>
          <p className="mt-1 flex items-center gap-1 text-sm">
            <StarIcon width={13} height={13} className="text-rating" />
            <span className="font-bold">{business.rating.toFixed(1)}</span>
            <span className="text-text-muted">({business.reviewCount.toLocaleString('es-CO')})</span>
          </p>
          <p className="mt-0.5 text-sm text-text">{fromLabel.replace('{price}', formatMoney(business.priceFrom))}</p>
        </div>
      </article>
    </a>
  );
}

import { BusinessCard } from '@/app/features/catalog/components/BusinessCard';
import type { Business } from '@/app/types/catalog.types';

interface FeaturedGridProps {
  title: string;
  businesses: Business[];
  fromLabel: string;
  openLabel: string;
}

export function FeaturedGrid({ title, businesses, fromLabel, openLabel }: FeaturedGridProps) {
  return (
    <section>
      <h2 className="mb-4 font-heading text-lg font-extrabold tracking-tight">{title}</h2>
      <div className="grid grid-cols-2 gap-3">
        {businesses.map((business) => (
          <BusinessCard
            key={business.id}
            business={business}
            fromLabel={fromLabel}
            openLabel={openLabel}
          />
        ))}
      </div>
    </section>
  );
}

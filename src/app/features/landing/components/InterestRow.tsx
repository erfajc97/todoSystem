import type { InterestCard } from '@/app/types/catalog.types';

interface InterestRowProps {
  title: string;
  subtitle: string;
  items: InterestCard[];
  t: (key: string) => string;
}

export function InterestRow({ title, subtitle, items, t }: InterestRowProps) {
  return (
    <section>
      <h2 className="font-heading text-lg font-extrabold tracking-tight">{title}</h2>
      <p className="mt-1 text-sm text-text-muted">{subtitle}</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map((item) => (
          <a key={item.id} href={item.href} className="relative block aspect-[4/5] overflow-hidden rounded-[20px] lg:aspect-[5/4]">
            <img src={item.image} alt={t(item.titleKey)} className="h-full w-full object-cover" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand/70 to-transparent px-3 pb-3 pt-10 font-heading text-sm font-extrabold text-on-brand">
              {t(item.titleKey)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

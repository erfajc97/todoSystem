import { StarIcon } from '@/assets/svg/StarIcon';
import type { RatingBreakdown } from '@/app/types/catalog.types';

interface RatingSummaryProps {
  summary: RatingBreakdown;
  excellentLabel: string;
}

export function RatingSummary({ summary, excellentLabel }: RatingSummaryProps) {
  return (
    <div className="flex items-center gap-5">
      <div className="shrink-0">
        <p className="font-heading text-5xl font-extrabold leading-none">{summary.average.toFixed(1)}</p>
        <p className="mt-1 text-sm font-semibold">{excellentLabel}</p>
        <div className="mt-1 flex text-rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} width={14} height={14} />
          ))}
        </div>
        <p className="mt-1 text-xs text-text-muted">({summary.total})</p>
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        {summary.bars.map((bar) => (
          <div key={bar.stars} className="flex items-center gap-2">
            <span className="w-3 text-right text-[11px] text-text-muted">{bar.stars}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-raised">
              <div className="h-full rounded-full bg-success" style={{ width: `${bar.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

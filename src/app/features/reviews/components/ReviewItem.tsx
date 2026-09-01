import { StarIcon } from '@/assets/svg/StarIcon';
import type { Review } from '@/app/types/catalog.types';

interface ReviewItemProps {
  review: Review;
}

export function ReviewItem({ review }: ReviewItemProps) {
  return (
    <article className="flex items-start gap-3 py-3">
      <img src={review.avatar} alt={review.author} className="h-10 w-10 shrink-0 rounded-full object-cover" />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-semibold">{review.author}</p>
            <p className="mt-0.5 text-sm leading-snug text-text-muted">{review.comment}</p>
          </div>
          <div className="flex shrink-0 text-rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} width={12} height={12} className={i < review.rating ? '' : 'opacity-25'} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

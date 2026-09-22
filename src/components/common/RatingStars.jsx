import React from 'react';
import { Star } from 'lucide-react';

export const RatingStars = ({ rating = 5, reviewsCount, size = 'sm' }) => {
  const starSize = size === 'xs' ? 'w-3 h-3' : size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  const full = Math.floor(rating);
  const partial = rating % 1;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`${starSize} ${
              i < full
                ? 'fill-amber-400 text-amber-400'
                : i === full && partial >= 0.5
                ? 'fill-amber-200 text-amber-400'
                : 'fill-slate-200 dark:fill-slate-600 text-slate-200 dark:text-slate-600'
            }`}
          />
        ))}
      </div>
      {reviewsCount !== undefined && (
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {rating.toFixed(1)} ({reviewsCount.toLocaleString()})
        </span>
      )}
    </div>
  );
};

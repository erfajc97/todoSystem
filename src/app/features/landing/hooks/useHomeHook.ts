import { useState } from 'react';
import type { Business, HomeCategoryTile, InterestCard } from '@/app/types/catalog.types';
import { useInterestQuery, useBusinessesQuery } from '@/app/tanstack-queries/catalogQuery';
import { useT } from '@/app/i18n/useT';

export function useHomeHook(seed: {
  tiles: HomeCategoryTile[];
  interest: InterestCard[];
  featured: Business[];
}) {
  const t = useT();
  const [query, setQuery] = useState('');
  const interestQuery = useInterestQuery(seed.interest);
  const featuredQuery = useBusinessesQuery('todos', seed.featured);

  const submitSearch = () => {
    const q = query.trim();
    window.location.href = q ? `/buscar?q=${encodeURIComponent(q)}` : '/buscar';
  };

  const goCategories = () => {
    window.location.href = '/categorias';
  };

  const goCategory = (slug: string) => {
    window.location.href = `/buscar?q=${encodeURIComponent(slug)}`;
  };

  return {
    t,
    query,
    setQuery,
    submitSearch,
    goCategories,
    goCategory,
    tiles: seed.tiles,
    interest: interestQuery.data ?? seed.interest,
    featured: (featuredQuery.data ?? seed.featured).filter((b) => b.id === 'figaro' || b.id === 'diego'),
  };
}

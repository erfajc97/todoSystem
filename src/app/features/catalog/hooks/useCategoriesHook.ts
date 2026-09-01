import { useState } from 'react';
import { useCategoriesQuery } from '@/app/tanstack-queries/catalogQuery';
import { useT } from '@/app/i18n/useT';
import type { Category } from '@/app/types/catalog.types';

export function useCategoriesHook(initialCategories: Category[]) {
  const t = useT();
  const [query, setQuery] = useState('');
  const categoriesQuery = useCategoriesQuery(initialCategories);

  const goSearch = () => {
    const q = query.trim();
    window.location.href = q ? `/buscar?q=${encodeURIComponent(q)}` : '/buscar';
  };

  return {
    t,
    query,
    setQuery,
    goSearch,
    categories: categoriesQuery.data ?? initialCategories,
  };
}

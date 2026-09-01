import { useEffect, useState } from 'react';
import { useSearchQuery } from '@/app/tanstack-queries/catalogQuery';
import { useT } from '@/app/i18n/useT';

export function useSearchHook(initialQuery: string) {
  const t = useT();
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('q');
    if (q) setQuery(q);
  }, []);
  const [tab, setTab] = useState<'all' | 'nearby' | 'recommended'>('all');
  const resultsQuery = useSearchQuery(query);

  return {
    t,
    query,
    setQuery,
    tab,
    setTab,
    results: resultsQuery.data ?? [],
    isLoading: resultsQuery.isLoading,
  };
}

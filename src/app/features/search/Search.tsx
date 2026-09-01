import { StarIcon } from '@/assets/svg/StarIcon';
import { FilterChip } from '@/app/components/UI/FilterChip';
import { SearchBar } from '@/app/components/UI/SearchBar';
import { useSearchHook } from './hooks/useSearchHook';
import AppProviders from '@/app/providers/AppProviders';

interface SearchProps {
  initialQuery: string;
}

export default function Search({ initialQuery }: SearchProps) {
  return (
    <AppProviders>
      <SearchContent initialQuery={initialQuery} />
    </AppProviders>
  );
}

function SearchContent({ initialQuery }: SearchProps) {
  const { t, query, setQuery, tab, setTab, results, isLoading } = useSearchHook(initialQuery);

  return (
    <div className="flex flex-col gap-4 px-4 pb-16 pt-4 lg:px-8 lg:pt-8">
      <h1 className="font-heading text-2xl font-extrabold">{t('search.title')}</h1>
      <SearchBar value={query} onChange={setQuery} placeholder={t('search.placeholder')} />
      <div className="hide-scrollbar flex gap-2 overflow-x-auto">
        <FilterChip label={t('search.all')} isActive={tab === 'all'} onPress={() => setTab('all')} />
        <FilterChip label={t('search.nearby')} isActive={tab === 'nearby'} onPress={() => setTab('nearby')} />
        <FilterChip
          label={t('search.recommended')}
          isActive={tab === 'recommended'}
          onPress={() => setTab('recommended')}
        />
      </div>
      {isLoading ? <p className="text-sm text-text-muted">{t('common.loading')}</p> : null}
      {!isLoading && results.length === 0 ? (
        <p className="text-sm text-text-muted">{t('search.empty')}</p>
      ) : null}
      <ul className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
        {results.map((item) => (
          <li key={item.id}>
            <a href={`/negocio/${item.id}`} className="flex gap-3 md:flex-col">
              <img
                src={item.images[0]}
                alt={item.name}
                className="h-16 w-16 shrink-0 rounded-xl object-cover md:h-44 md:w-full md:rounded-2xl"
              />
              <span className="min-w-0">
                <span className="block font-heading text-sm font-bold">{item.name}</span>
                <span className="mt-0.5 flex items-center gap-1 text-xs">
                  <StarIcon width={12} height={12} className="text-rating" />
                  {item.rating.toFixed(1)}
                </span>
                <span className="block text-xs text-text-muted">{item.location}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

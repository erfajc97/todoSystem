import { CompassIcon } from '@/assets/svg/CompassIcon';
import { RefreshIcon } from '@/assets/svg/RefreshIcon';
import { SearchBar } from '@/app/components/UI/SearchBar';
import { CategoryCard } from './components/CategoryCard';
import { useCategoriesHook } from './hooks/useCategoriesHook';
import AppProviders from '@/app/providers/AppProviders';
import type { Category } from '@/app/types/catalog.types';

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <AppProviders>
      <CategoriesContent categories={categories} />
    </AppProviders>
  );
}

function CategoriesContent({ categories }: CategoriesProps) {
  const { t, query, setQuery, goSearch, categories: items } = useCategoriesHook(categories);

  return (
    <div className="flex flex-col gap-5 px-4 pb-16 pt-4">
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder={t('categories.searchPlaceholder')}
        onSubmit={goSearch}
      />

      <a href="/buscar" className="flex items-center gap-4 rounded-2xl border border-border p-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-raised text-verified">
          <CompassIcon width={24} height={24} />
        </span>
        <span className="font-heading text-base font-bold">{t('categories.exploreLocal')}</span>
      </a>

      <div className="flex items-center gap-4 rounded-2xl border border-border p-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-raised text-verified">
          <RefreshIcon width={24} height={24} />
        </span>
        <span className="font-heading text-base font-bold">{t('categories.communitySoon')}</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {items.map((category) => (
          <CategoryCard
            key={category.id}
            href={`/buscar?q=${encodeURIComponent(t(category.labelKey))}`}
            image={category.image}
            label={t(category.labelKey)}
          />
        ))}
      </div>
    </div>
  );
}

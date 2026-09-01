import { Button } from '@heroui/react';
import AppProviders from '@/app/providers/AppProviders';
import { useHomeHook } from './hooks/useHomeHook';
import { CategoryPicker } from './components/CategoryPicker';
import { HeroSearch } from './components/HeroSearch';
import { CategoryTileGrid } from './components/CategoryTileGrid';
import { InterestRow } from './components/InterestRow';
import { FeaturedGrid } from './components/FeaturedGrid';
import { IMG } from '@/app/mock/images';
import type { Business, HomeCategoryTile, InterestCard } from '@/app/types/catalog.types';

interface HomeProps {
  tiles: HomeCategoryTile[];
  interest: InterestCard[];
  featured: Business[];
}

export default function Home({ tiles, interest, featured }: HomeProps) {
  return (
    <AppProviders>
      <HomeContent tiles={tiles} interest={interest} featured={featured} />
    </AppProviders>
  );
}

function HomeContent({ tiles, interest, featured }: HomeProps) {
  const {
    t,
    query,
    setQuery,
    submitSearch,
    goCategories,
    goCategory,
    tiles: tileItems,
    interest: interestItems,
    featured: featuredItems,
  } = useHomeHook({ tiles, interest, featured });

  return (
    <div className="flex flex-col gap-10 px-5 pb-16 pt-6">
      <div>
        <h1 className="max-w-[12ch] font-heading text-[1.85rem] font-extrabold leading-[1.08] tracking-tight">
          {t('home.hero')}
        </h1>
        <div className="mt-3">
          <CategoryPicker label={t('home.allCategories')} onPress={goCategories} />
        </div>
      </div>

      <HeroSearch
        query={query}
        onQuery={setQuery}
        onSearch={submitSearch}
        placeholder={t('home.searchPlaceholder')}
        searchLabel={t('home.searchCta')}
      />

      <CategoryTileGrid
        title={t('home.exploreByCategories')}
        tiles={tileItems}
        t={t}
        onSelect={goCategory}
      />

      <Button
        variant="ghost"
        onPress={goCategories}
        className="h-12 w-full rounded-full border border-border-strong bg-surface text-[15px] font-semibold text-text"
      >
        {t('home.exploreCategories')}
      </Button>

      <section>
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h2 className="font-heading text-lg font-extrabold tracking-tight">{t('home.resume')}</h2>
            <p className="mt-1 text-sm text-text-muted">{t('home.resumeHint')}</p>
          </div>
          <a href="/chat" className="shrink-0 text-sm font-medium text-text underline">
            {t('home.seeAll')}
          </a>
        </div>
        <a href="/chat" className="block rounded-xl border border-border px-4 py-3">
          <p className="text-sm font-semibold">{t('home.lastChat')}</p>
          <p className="mt-0.5 text-sm text-text-muted">{t('home.lastChatWhen')}</p>
        </a>
      </section>

      <InterestRow
        title={t('home.forYou')}
        subtitle={t('home.forYouHint')}
        items={interestItems}
        t={t}
      />

      <FeaturedGrid
        title={t('home.featured')}
        businesses={featuredItems}
        fromLabel={t('home.from')}
        openLabel={t('home.open')}
      />

      <section>
        <h2 className="mb-4 font-heading text-lg font-extrabold tracking-tight">{t('home.exploreInterest')}</h2>
        <div className="overflow-hidden rounded-[20px]">
          <img src={IMG.mall} alt={t('home.exploreInterest')} className="aspect-[16/9] w-full object-cover" />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-text">{t('home.exploreInterestCopy')}</p>
        <Button
          variant="primary"
          onPress={goCategories}
          className="mt-4 h-12 w-full rounded-full bg-brand text-[15px] font-semibold text-on-brand"
        >
          {t('home.explore')}
        </Button>
      </section>

      <FeaturedGrid
        title={t('home.recommended')}
        businesses={featuredItems}
        fromLabel={t('home.from')}
        openLabel={t('home.open')}
      />
    </div>
  );
}

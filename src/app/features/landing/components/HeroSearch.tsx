import { Button } from '@heroui/react';
import { SearchBar } from '@/app/components/UI/SearchBar';

interface HeroSearchProps {
  query: string;
  onQuery: (value: string) => void;
  onSearch: () => void;
  placeholder: string;
  searchLabel: string;
}

export function HeroSearch({
  query,
  onQuery,
  onSearch,
  placeholder,
  searchLabel,
}: HeroSearchProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface px-4 pb-4 pt-3 md:flex md:items-end md:gap-4 md:px-6 md:py-5">
      <div className="min-w-0 flex-1">
        <SearchBar
          value={query}
          onChange={onQuery}
          placeholder={placeholder}
          onSubmit={onSearch}
          variant="underline"
        />
      </div>
      <Button
        variant="primary"
        onPress={onSearch}
        className="mt-4 h-12 w-full rounded-full bg-brand text-[15px] font-semibold text-on-brand md:mt-0 md:w-auto md:px-10"
      >
        {searchLabel}
      </Button>
    </section>
  );
}

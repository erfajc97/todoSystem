import { Button } from '@heroui/react';
import { MenuIcon } from '@/assets/svg/MenuIcon';
import { SearchIcon } from '@/assets/svg/SearchIcon';
import { BagIcon } from '@/assets/svg/BagIcon';
import { SearchBar } from '@/app/components/UI/SearchBar';

const DESKTOP_LINKS = [
  { href: '/categorias', key: 'nav.categories' },
  { href: '/chat', key: 'nav.chat' },
  { href: '/reserva/svc-basico', key: 'nav.bookings' },
] as const;

interface NavbarBarProps {
  t: (key: string) => string;
  count: number;
  openDrawer: () => void;
  query: string;
  onQuery: (value: string) => void;
  onSearch: () => void;
  goSearch: () => void;
  goCart: () => void;
}

export function NavbarBar({
  t,
  count,
  openDrawer,
  query,
  onQuery,
  onSearch,
  goSearch,
  goCart,
}: NavbarBarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-surface/95 backdrop-blur">
      <div className="relative mx-auto flex h-14 max-w-7xl items-center gap-3 px-3 lg:h-16 lg:gap-6 lg:px-8">
        <Button
          variant="ghost"
          aria-label={t('nav.openMenu')}
          onPress={openDrawer}
          className="min-h-11 min-w-11 rounded-full p-0 text-text lg:hidden"
        >
          <MenuIcon />
        </Button>
        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-heading text-[17px] font-extrabold tracking-tight text-text lg:static lg:translate-x-0 lg:text-lg"
        >
          {t('brand')}
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {DESKTOP_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>
        <div className="hidden min-w-0 flex-1 lg:block">
          <SearchBar
            value={query}
            onChange={onQuery}
            placeholder={t('home.searchPlaceholder')}
            onSubmit={onSearch}
          />
        </div>
        <div className="ml-auto flex items-center gap-0.5">
          <Button
            variant="ghost"
            aria-label={t('nav.openSearch')}
            onPress={goSearch}
            className="min-h-11 min-w-11 rounded-full p-0 text-text lg:hidden"
          >
            <SearchIcon />
          </Button>
          <Button
            variant="ghost"
            aria-label={t('nav.openCart')}
            onPress={goCart}
            className="relative min-h-11 min-w-11 rounded-full p-0 text-text"
          >
            <BagIcon />
            {count > 0 ? (
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-on-brand">
                {count}
              </span>
            ) : null}
          </Button>
        </div>
      </div>
    </header>
  );
}

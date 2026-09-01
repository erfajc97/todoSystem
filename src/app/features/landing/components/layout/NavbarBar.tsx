import { Button } from '@heroui/react';
import { MenuIcon } from '@/assets/svg/MenuIcon';
import { SearchIcon } from '@/assets/svg/SearchIcon';
import { BagIcon } from '@/assets/svg/BagIcon';

interface NavbarBarProps {
  t: (key: string) => string;
  count: number;
  openDrawer: () => void;
}

export function NavbarBar({ t, count, openDrawer }: NavbarBarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-surface/95 backdrop-blur">
      <div className="relative flex h-14 items-center justify-between px-3">
        <Button
          variant="ghost"
          aria-label={t('nav.openMenu')}
          onPress={openDrawer}
          className="min-h-11 min-w-11 rounded-full p-0 text-text"
        >
          <MenuIcon />
        </Button>
        <a href="/" className="absolute left-1/2 -translate-x-1/2 font-heading text-[17px] font-extrabold tracking-tight text-text">
          {t('brand')}
        </a>
        <div className="flex items-center gap-0.5">
          <Button
            variant="ghost"
            aria-label={t('nav.openSearch')}
            onPress={() => {
              window.location.href = '/buscar';
            }}
            className="min-h-11 min-w-11 rounded-full p-0 text-text"
          >
            <SearchIcon />
          </Button>
          <Button
            variant="ghost"
            aria-label={t('nav.openCart')}
            onPress={() => {
              window.location.href = '/carrito';
            }}
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

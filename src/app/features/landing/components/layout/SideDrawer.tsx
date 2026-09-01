import { Button } from '@heroui/react';
import { CloseIcon } from '@/assets/svg/CloseIcon';
import { CompassIcon } from '@/assets/svg/CompassIcon';
import { MessageIcon } from '@/assets/svg/MessageIcon';
import { BagIcon } from '@/assets/svg/BagIcon';
import { SearchIcon } from '@/assets/svg/SearchIcon';
import { CalendarIcon } from '@/assets/svg/CalendarIcon';
import { HomeIcon } from '@/assets/svg/HomeIcon';
import { useDrawerStore } from '@/app/store/ui/drawerStore';
import { useT } from '@/app/i18n/useT';

const LINKS = [
  { href: '/', key: 'nav.home', Icon: HomeIcon },
  { href: '/categorias', key: 'nav.categories', Icon: CompassIcon },
  { href: '/buscar', key: 'nav.search', Icon: SearchIcon },
  { href: '/carrito', key: 'nav.cart', Icon: BagIcon },
  { href: '/chat', key: 'nav.chat', Icon: MessageIcon },
  { href: '/reserva/svc-basico', key: 'nav.bookings', Icon: CalendarIcon },
];

export default function SideDrawer() {
  return <DrawerBody />;
}

function DrawerBody() {
  const t = useT();
  const isOpen = useDrawerStore((s) => s.isOpen);
  const close = useDrawerStore((s) => s.close);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <Button
        variant="ghost"
        aria-label={t('nav.closeMenu')}
        onPress={close}
        className="absolute inset-0 h-full w-full rounded-none bg-overlay p-0"
      />
      <aside className="absolute left-0 top-0 flex h-full w-[82%] max-w-xs flex-col bg-surface p-5 shadow-2xl">
        <div className="mb-8 flex items-center justify-between">
          <p className="font-heading text-lg font-extrabold">{t('brand')}</p>
          <Button variant="ghost" aria-label={t('nav.closeMenu')} onPress={close} className="min-h-11 min-w-11 rounded-full p-0">
            <CloseIcon />
          </Button>
        </div>
        <nav className="flex flex-col gap-1">
          {LINKS.map(({ href, key, Icon }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="flex min-h-12 items-center gap-3 rounded-xl px-3 text-[15px] font-medium text-text hover:bg-surface-raised"
            >
              <Icon width={20} height={20} />
              {t(key)}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}

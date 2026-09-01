import { cartCount, useCartStore } from '@/app/store/cart/cartStore';
import { useDrawerStore } from '@/app/store/ui/drawerStore';
import { useT } from '@/app/i18n/useT';

export function useNavbarHook() {
  const t = useT();
  const items = useCartStore((s) => s.items);
  const openDrawer = useDrawerStore((s) => s.open);
  const count = cartCount(items);

  return { t, count, openDrawer };
}

import { useState } from 'react';
import { cartCount, useCartStore } from '@/app/store/cart/cartStore';
import { useDrawerStore } from '@/app/store/ui/drawerStore';
import { useT } from '@/app/i18n/useT';

export function useNavbarHook() {
  const t = useT();
  const items = useCartStore((s) => s.items);
  const openDrawer = useDrawerStore((s) => s.open);
  const count = cartCount(items);
  const [query, setQuery] = useState('');

  const submitSearch = () => {
    const q = query.trim();
    window.location.href = q ? `/buscar?q=${encodeURIComponent(q)}` : '/buscar';
  };

  const goSearch = () => {
    window.location.href = '/buscar';
  };

  const goCart = () => {
    window.location.href = '/carrito';
  };

  return { t, count, openDrawer, query, setQuery, submitSearch, goSearch, goCart };
}

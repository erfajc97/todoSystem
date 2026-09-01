import { cartTotal, useCartStore } from '@/app/store/cart/cartStore';
import { useDisclosure } from '@/app/hooks/useDisclosure';
import { useT } from '@/app/i18n/useT';
import { formatMoney } from '@/app/helpers/formatCurrency';
import { sonnerResponse } from '@/app/helpers/sonnerResponse';

export function useCartHook() {
  const t = useT();
  const items = useCartStore((s) => s.items);
  const setQty = useCartStore((s) => s.setQty);
  const removeItem = useCartStore((s) => s.removeItem);
  const clear = useCartStore((s) => s.clear);
  const confirm = useDisclosure();
  const total = cartTotal(items);

  const pay = () => {
    if (!items.length) return;
    confirm.onOpen();
  };

  const confirmPay = () => {
    clear();
    confirm.onClose();
    sonnerResponse(t('booking.success'), 'success');
  };

  return {
    t,
    items,
    total,
    formattedTotal: formatMoney(total),
    setQty,
    removeItem,
    pay,
    confirmPay,
    confirm,
  };
}

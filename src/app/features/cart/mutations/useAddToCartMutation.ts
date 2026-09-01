import { useMutation } from '@tanstack/react-query';
import { sonnerResponse } from '@/app/helpers/sonnerResponse';
import { t } from '@/app/i18n';
import { useCartStore, type CartLine } from '@/app/store/cart/cartStore';

export function useAddToCartMutation() {
  return useMutation({
    mutationFn: async (item: Omit<CartLine, 'qty'> & { qty?: number }) => {
      useCartStore.getState().addItem(item);
      return item;
    },
    onSuccess: () => sonnerResponse(t('cart.added'), 'success'),
  });
}

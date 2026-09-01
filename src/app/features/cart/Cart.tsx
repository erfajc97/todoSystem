import { Button } from '@heroui/react';
import { TrashIcon } from '@/assets/svg/TrashIcon';
import { QtyStepper } from '@/app/components/UI/QtyStepper';
import { ConfirmDialog } from '@/app/components/UI/ConfirmDialog';
import { formatMoney } from '@/app/helpers/formatCurrency';
import { useCartHook } from './hooks/useCartHook';
import AppProviders from '@/app/providers/AppProviders';

export default function Cart() {
  return (
    <AppProviders>
      <CartContent />
    </AppProviders>
  );
}

function CartContent() {
  const { t, items, formattedTotal, setQty, removeItem, pay, confirmPay, confirm } = useCartHook();

  return (
    <div className="flex min-h-[calc(100dvh-56px)] flex-col px-4 pb-8 pt-4">
      <h1 className="mb-4 font-heading text-2xl font-extrabold">{t('cart.title')}</h1>
      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-text-muted">{t('cart.empty')}</p>
          <a href="/" className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-on-brand">
            {t('cart.explore')}
          </a>
        </div>
      ) : (
        <>
          <ul className="flex flex-1 flex-col gap-4">
            {items.map((item) => (
              <li key={item.id} className="flex gap-3 rounded-2xl border border-border p-3">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-heading text-sm font-bold">{item.name}</p>
                      <p className="text-sm font-semibold">{formatMoney(item.price)}</p>
                    </div>
                    <Button
                      variant="ghost"
                      aria-label={t('cart.remove')}
                      onPress={() => removeItem(item.id)}
                      className="min-h-11 min-w-11 rounded-full p-0"
                    >
                      <TrashIcon />
                    </Button>
                  </div>
                  <QtyStepper
                    value={item.qty}
                    onDecrease={() => setQty(item.id, item.qty - 1)}
                    onIncrease={() => setQty(item.id, item.qty + 1)}
                    decreaseLabel={t('cart.decrease')}
                    increaseLabel={t('cart.increase')}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="sticky bottom-4 mt-6">
            <Button
              variant="primary"
              onPress={pay}
              className="h-14 w-full rounded-full bg-brand text-base font-semibold text-on-brand"
            >
              {t('cart.pay', { total: formattedTotal })}
            </Button>
            <p className="mt-2 text-center text-[11px] text-text-muted">{t('cart.terms')}</p>
          </div>
        </>
      )}
      <ConfirmDialog
        isOpen={confirm.isOpen}
        onOpenChange={confirm.onOpenChange}
        title={t('cart.title')}
        description={t('cart.terms')}
        confirmLabel={t('cart.pay', { total: formattedTotal })}
        cancelLabel={t('common.back')}
        onConfirm={confirmPay}
      />
    </div>
  );
}

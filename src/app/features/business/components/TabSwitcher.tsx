import { Button } from '@heroui/react';

interface TabSwitcherProps {
  servicesLabel: string;
  productsLabel: string;
  tab: 'services' | 'products';
  onServices: () => void;
  onProducts: () => void;
}

export function TabSwitcher({
  servicesLabel,
  productsLabel,
  tab,
  onServices,
  onProducts,
}: TabSwitcherProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button
        variant={tab === 'services' ? 'primary' : 'ghost'}
        onPress={onServices}
        className={`h-12 rounded-2xl text-sm font-semibold ${
          tab === 'services' ? 'bg-brand text-on-brand' : 'border border-border bg-surface text-text'
        }`}
      >
        {servicesLabel}
      </Button>
      <Button
        variant={tab === 'products' ? 'primary' : 'ghost'}
        onPress={onProducts}
        className={`h-12 rounded-2xl text-sm font-semibold ${
          tab === 'products' ? 'bg-brand text-on-brand' : 'border border-border bg-surface text-text'
        }`}
      >
        {productsLabel}
      </Button>
    </div>
  );
}

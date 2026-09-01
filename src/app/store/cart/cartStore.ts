import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartLine {
  id: string;
  productId: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}

interface CartState {
  items: CartLine[];
  addItem: (item: Omit<CartLine, 'qty'> & { qty?: number }) => void;
  setQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existing = get().items.find((line) => line.productId === item.productId);
        if (existing) {
          set({
            items: get().items.map((line) =>
              line.productId === item.productId
                ? { ...line, qty: line.qty + (item.qty ?? 1) }
                : line
            ),
          });
          return;
        }
        set({
          items: [
            ...get().items,
            { ...item, qty: item.qty ?? 1, id: item.id || item.productId },
          ],
        });
      },
      setQty: (id, qty) => {
        if (qty < 1) {
          set({ items: get().items.filter((line) => line.id !== id) });
          return;
        }
        set({
          items: get().items.map((line) => (line.id === id ? { ...line, qty } : line)),
        });
      },
      removeItem: (id) => set({ items: get().items.filter((line) => line.id !== id) }),
      clear: () => set({ items: [] }),
    }),
    { name: 'todosystem-cart' }
  )
);

export function cartCount(items: CartLine[]): number {
  return items.reduce((sum, line) => sum + line.qty, 0);
}

export function cartTotal(items: CartLine[]): number {
  return items.reduce((sum, line) => sum + Number(line.price) * line.qty, 0);
}

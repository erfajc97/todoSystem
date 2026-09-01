import { useCallback, useState } from 'react';

export function useDisclosure(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onOpenChange = useCallback((open?: boolean) => {
    setIsOpen((prev) => (typeof open === 'boolean' ? open : !prev));
  }, []);
  const onToggle = useCallback(() => setIsOpen((v) => !v), []);

  return { isOpen, onOpen, onClose, onOpenChange, onToggle };
}

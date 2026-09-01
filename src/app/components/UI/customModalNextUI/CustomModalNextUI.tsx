import { Modal } from '@heroui/react';

interface CustomModalNextUIProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'cover' | 'full';
  placement?: 'center' | 'auto' | 'top' | 'bottom';
}

export function CustomModalNextUI({
  isOpen,
  onOpenChange,
  headerContent,
  footerContent,
  children,
  size = 'md',
  placement = 'center',
}: CustomModalNextUIProps) {
  return (
    <Modal.Backdrop isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal.Container placement={placement} size={size} scroll="inside">
        <Modal.Dialog className="bg-surface text-text">
          {headerContent ? <Modal.Header>{headerContent}</Modal.Header> : null}
          <Modal.Body>{children}</Modal.Body>
          {footerContent ? <Modal.Footer>{footerContent}</Modal.Footer> : null}
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
}

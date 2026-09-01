import { Button } from '@heroui/react';
import { CustomModalNextUI } from '@/app/components/UI/customModalNextUI/CustomModalNextUI';

interface ConfirmDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: React.ReactNode;
  confirmLabel: string;
  cancelLabel: string;
  isLoading?: boolean;
  onConfirm: () => void;
}

export function ConfirmDialog({
  isOpen,
  onOpenChange,
  title,
  description,
  confirmLabel,
  cancelLabel,
  isLoading,
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <CustomModalNextUI
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      headerContent={<h3 className="font-heading text-lg">{title}</h3>}
      footerContent={
        <>
          <Button slot="close" variant="ghost" onPress={() => onOpenChange(false)}>
            {cancelLabel}
          </Button>
          <Button variant="danger" isDisabled={isLoading} onPress={onConfirm}>
            {isLoading ? '…' : confirmLabel}
          </Button>
        </>
      }
    >
      <p className="text-sm text-text-muted">{description}</p>
    </CustomModalNextUI>
  );
}
